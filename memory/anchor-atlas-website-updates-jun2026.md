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

**REMAINING:**
1. Replace homepage Meet Wendy bio with new text from Scan PDF page 4; add Mission statement and remove the duplicated trailing "Mission:" (that's the "duplicated Mission line" punch item).
2. Credentials box (index.html): add "Senior Real Estate Specialist" + "Certified Staging Advocate" to Professional Experience (per scan p5).
3. DECISION NEEDED: remove the "Personal & Business Concierge" (#lifestyle) section from services.html + its sub-nav link, given the agents+seniors-only focus? Punch list only deleted the homepage card, so confirm before deleting the whole section.
4. Optional: update footer "Our Mission" sitewide to the new mission; scrub remaining "white-glove"/"lifestyle management" from meta descriptions + JSON-LD.

Nothing committed yet — user reviews working tree first.
