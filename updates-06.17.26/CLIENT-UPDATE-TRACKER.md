# Anchor & Atlas — Client Update Billing Tracker

This tracker is meant to capture what each update set actually took, what it should be charged at, and what language we can use when we talk to Wendy about it.

## Working assumptions
- Default rate used here: **$125/hour**
- This should be updated after every batch of changes
- The goal is to track both:
  - what the work was worth, and
  - what we should say it took, so we stop undercharging

## Suggested columns for each update cycle
- Date
- Batch / update set
- Scope of work
- Files affected
- Estimated hours
- Rate
- Suggested charge
- Client-facing summary
- Status

## Recommended tracker

| Date | Batch | Scope of work | Files / area | Est. hours | Rate | Suggested charge | Client-facing summary | Status |
|---|---|---|---|---:|---:|---:|---|---|
| 2026-06-17 | Batch 1 | Homepage messaging, hero image cleanup, service wording revisions | index.html, services.html, contact.html | 6.0 | $125/hr | $750 | Updated homepage copy, service positioning, and key messaging for the new agent + senior focus. | Pending |
| 2026-06-17 | Batch 2 | Services page restructuring, category edits, removed outdated lifestyle sections | services.html, blog/posts, nav structure | 4.0 | $125/hr | $500 | Reworked the services layout and removed outdated content to better match current service focus. | Pending |
| 2026-06-17 | Batch 3 | SEO/meta updates, JSON-LD cleanup, blog tags, wording consistency | index.html, services.html, contact.html, posts/*.html | 3.0 | $125/hr | $375 | Updated SEO metadata, structured data, and content wording to align across the site. | Pending |
| 2026-06-17 | Batch 4 | Asset updates, staging photos, image preload wiring | assets/hero-images/*, HTML references | 2.5 | $125/hr | $312.50 | Added and wired new staging photography for the homepage and supporting sections. | Pending |
| 2026-06-17 | Batch 5 | Summary docs, PDF handoff, update report | updates-06.17.26/* | 1.5 | $125/hr | $187.50 | Prepared a final update summary and supporting documentation for review. | Pending |

| 2026-07-10 | Batch 6 | Services page UX/design review — fixed orphaned card layout, broken CTA link, sub-nav active state, hamburger button color | services.html, css/styles.css | 1.5 | $125/hr | $187.50 | Reviewed and corrected several UX issues on the services page including navigation highlighting and a broken contact button. | Pending |
| 2026-07-10 | Batch 7 | Senior section overhaul — corrected off-brand pink text (confirmed via client scan it was markup pen, not design intent), replaced yellow box with matching white card, restored box title, tightened width | services.html | 1.5 | $125/hr | $187.50 | Fixed the senior services section to match the rest of the site's design and align exactly with Wendy's email instructions. | Pending |
| 2026-07-10 | Batch 8 | Google reviews audit — compared live Google profile against site, added 3 missing reviews (Austen Zetrouer, Katy Glez, Audrey Boyle), updated structured data review count from 6 to 9 | index.html | 0.75 | $125/hr | $93.75 | Audited and synced all Google reviews to the site — added 3 that were missing. | Pending |
| 2026-07-10 | Batch 9 | GitHub Actions deploy workflow — set up automated Dreamhost deployment with manual trigger, allow-list file filter to keep internal docs private, GitHub Pages remains as staging area | .github/workflows/deploy.yml, .htaccess | 1.0 | $125/hr | $125.00 | Set up one-click deployment to the live site while keeping GitHub Pages as a private staging area for client review. | Pending |

### Total estimate
- **Total hours:** 21.75
- **Suggested total at $125/hr:** **$2,718.75**

## Notes
- This is a realistic baseline for the work shown in the update summary.
- If you want to be more conservative, you can lower the rate to $95–$110/hr and still be closer to what the work is worth.
- If you want to be more premium, you can use $150/hr for strategy/content-heavy batches.
- This file should be updated after each new set of edits so the numbers stay accurate.
