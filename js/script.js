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
const trackContainer = document.querySelector('.reviews-track-container');
const nextButton = document.querySelector('.slider-btn.next-btn');
const prevButton = document.querySelector('.slider-btn.prev-btn');

if (trackContainer) {
    const getScrollAmount = () => {
        const slide = trackContainer.querySelector('.review-slide');
        return slide ? slide.offsetWidth : 300;
    };

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            trackContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            trackContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }
}
