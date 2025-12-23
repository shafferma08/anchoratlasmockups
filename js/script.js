// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Current Year for Footer
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Blog Category Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            blogCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    card.classList.remove('hidden');
                    // Add animation class if not already there to trigger fade in
                    // But 'animate-on-scroll' handles load. For functionality, removal of hidden is key.
                    // We can reset animation if we want:
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    card.style.display = 'flex';
                } else {
                    card.classList.add('hidden');
                    // Ensure it's hidden after transition
                    setTimeout(() => {
                        if (card.classList.contains('hidden')) {
                            card.style.display = 'none';
                        }
                    }, 400); // Match CSS transition
                }
            });
        });
    });
}

// Share Functionality
const shareBtns = document.querySelectorAll('.share-btn');
if (shareBtns.length > 0) {
    shareBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.getAttribute('data-platform');
            // Use canonical URL if available, otherwise current location
            // Checking if inside an iframe or viewing locally might affect this, but standard practice is location.href
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl = '';

            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'copy':
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        // Optional: Show a small toast notification
                        const originalIcon = btn.innerHTML;
                        btn.innerHTML = '<i data-lucide="check" width="20" height="20"></i>';
                        lucide.createIcons();
                        setTimeout(() => {
                            btn.innerHTML = originalIcon;
                            lucide.createIcons();
                        }, 2000);
                    }).catch(err => {
                        console.error('Failed to copy: ', err);
                    });
                    return;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400,status=0,toolbar=0');
            }
        });
    });
}

// Reviews Slider
const track = document.querySelector('.reviews-track');
const slides = document.querySelectorAll('.review-slide');
const nextButton = document.querySelector('.slider-btn.next-btn');
const prevButton = document.querySelector('.slider-btn.prev-btn');

if (track && slides.length > 0) {
    let currentIndex = 0;

    // Function to determine visible items based on window width
    // Matches CSS media queries
    function getVisibleItems() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function updateSliderPosition() {
        const visibleItems = getVisibleItems();
        const slideWidth = 100 / visibleItems; // percentage width of one slide
        const maxIndex = slides.length - visibleItems;

        // Clamp index
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        // Move track
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

        // Helper to update button states
        if (prevButton) {
            prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
            prevButton.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        }

        if (nextButton) {
            nextButton.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
            nextButton.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
        }
    }

    // Initial check
    updateSliderPosition();

    // Event Listeners
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            const visibleItems = getVisibleItems();
            if (currentIndex < slides.length - visibleItems) {
                currentIndex++;
                updateSliderPosition();
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });
    }

    // Resize listener for responsive adjustment
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Re-validate index in case visible count changed
            updateSliderPosition();
        }, 100);
    });
}
