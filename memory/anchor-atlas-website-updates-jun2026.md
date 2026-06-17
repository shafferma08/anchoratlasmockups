---
name: anchor-atlas-website-updates-jun2026
description: In-progress June 2026 Anchor & Atlas website punch-list updates — what's done and what remains
metadata:
  type: project
---

Working through the June 2026 client update punch list for the Anchor & Atlas static site (root `index.html`, `services.html`, `contact.html`, blog + posts). Source docs live in `updates-06.17.26/` (the summary `Anchor Atlas Website Updates.pdf`, the marked-up `Scan web changes.pdf`, and staging photos in the `ANCHOR & ATLAS CREATIONS` zip, extracted to `updates-06.17.26/_extracted/`).

Key direction from Wendy's email (Jun 16, 2026): **going forward she focuses on real estate AGENTS and SENIORS only** — cutting back personal/family lifestyle management.

**DONE (uncommitted, in working tree):**
- Phone → (304) 552-5501 sitewide (old 727 542-3302 removed). Note: client markup mistakenly wrote 354-552-5601; correct number is (304) 552-5501.
- Homepage: headline "Thoughtfully Curated Real Estate Solutions."; services header "Elevated Real Estate Agent Concierge & Senior Transition Services."; intro paragraph de-"white-glove"/"lifestyle"; deleted Personal/Family Lifestyle card; renamed heart card to "Senior Concierge, Companionship & Transition Services."; signature designation line → REALTOR®/SRES®/CSA™.
- Real Estate Concierge (services.html): added Exterior Staging & Preparation, Decluttering & Organizing; trimmed Home Watch to "safety"; added Curb Appeal Enhancements under Logistics.
- Senior Concierge (services.html): title +Transition; removed Daily Check-Ins, Meal Prep, Home Repair Coordination; added new Transition Assistance group (6 bullets).
- Hero swap: 4 real staging photos copied to `assets/hero-images/` as staging-open-living / staging-modern-kitchen / staging-outdoor-patio / staging-master-bedroom.jpg; wired into hero + preload + og:image.

**GOTCHA:** PowerShell 5.1 `Get-Content`/`Set-Content -Encoding utf8` corrupted UTF-8 (curly quotes/dashes → mojibake, plus added BOM) in 8 HTML files. Already FIXED via Windows-1252→UTF-8 reverse-transcode. For future bulk edits use `[System.IO.File]::ReadAllText/WriteAllText` with `UTF8Encoding($false)`, never Get/Set-Content.

**DONE (second pass, Jun 17 2026 — uncommitted, in working tree):**
1. Meet Wendy bio (index.html) replaced with new copy from Scan p4; added **Mission** statement after the designation block. Note: Wendy's own bio copy intentionally KEEPS "white-glove approach to service" (per Marianne's call) — white-glove only scrubbed elsewhere, not the bio.
2. Credentials box: added "Senior Real Estate Specialist" + "Certified Staging Advocate" to Professional Experience column.
3. Deleted the whole "Personal & Business Concierge" (#lifestyle) section from services.html + its sub-nav link + the "Lifestyle Management" JSON-LD Offer (agents+seniors-only focus, confirmed by Wendy's email). Renumbered Senior block to Category 2.
4. New mission swapped into footer "Our Mission" SITEWIDE (index, services, blog, contact, 404, all 3 posts). Scrubbed "white-glove"/"lifestyle management" from index + services + contact meta descriptions and JSON-LD descriptions. Homepage intro was already de-white-gloved in the first pass.

**EDITORIAL ITEMS — RESOLVED (Marianne said "go with expert opinion"):**
- contact.html FAQ "truly personalized, white-glove service with a unique specialization in real estate concierge support" — KEPT intentionally (service-quality descriptor, consistent with keeping white-glove in the bio). No lifestyle reference, so on-brand.
- posts/mission-protect-what-matters.html: "Lifestyle Management" article tag → retagged to "Concierge Services". Body phrase "flex to meet your lifestyle" left as-is (generic English, not the service line).
- Deleted stale scaffolding files SEO_FAQ_SNIPPET.html + SEO_SERVICE_AREAS_SNIPPET.html (one-time "INSERT THIS AFTER..." snippets already pasted into live pages; not served, still carried old wording). Removed via git rm — deletions staged.
- Punch list "Add a Reviews / testimonials section" — ALREADY DONE: homepage has a full reviews slider (index.html ~386-593) with 6 real Google reviews (Crystal Peeples, Angela Laggner, Mary Marks, Alex Clark, Melissa Kent, Adi Ulaj); JSON-LD reviewCount "6". Wendy provided NO new review text — nothing to add.

All edits used &rsquo;/&mdash; HTML entities (not raw UTF-8) via the Edit tool — no mojibake risk. Nothing committed yet — Marianne reviews working tree first.
