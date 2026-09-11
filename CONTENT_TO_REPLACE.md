# Production Launch Checklist & Content Replacement Guide

This document tracks all external placeholder data and assets that should be connected or updated before public domain launch.

---

### 1. Profile Photo
- **File**: `public/images/nahian-profile.jpg`
- **Current Status**: Replaced with your official headshot (suit & tie in workspace).
- **Action Needed**: Ready as-is, or replace with any alternative portrait keeping the 3:4 aspect ratio.

---

### 2. Real Case Studies & Project Screenshots
- **File**: [`data/case-studies.ts`](file:///c:/NBR-PORTFOLIO/data/case-studies.ts)
- **Current Status**: Contains 4 realistic placeholder projects (OmniFlow Cloud, Apex Logistics Pipeline, Vanguard Advisory, Kroma Creative Engine).
- **Action Needed**:
  - Replace project names, client industries, problem/solution descriptions, and verified qualitative results.
  - Drop high-res screenshots into `public/images/case-studies/` (`project-01.jpg` through `project-04.jpg`).

---

### 3. Client Testimonials & Social Proof
- **File**: [`data/testimonials.ts`](file:///c:/NBR-PORTFOLIO/data/testimonials.ts)
- **Current Status**: Clearly marked with `// PLACEHOLDER — replace with verified client testimonial` and `isPlaceholder: true`.
- **Action Needed**:
  - Replace client names, companies, roles, and quote texts with genuine client endorsements once gathered.
  - Optional: Set `isPlaceholder: false` to remove the *"Sample Feedback"* development pill.

---

### 4. Client Logos (Optional)
- **Location**: Testimonials section (`components/testimonials.tsx`) supports client logo URLs or vector monograms.
- **Action Needed**: Add SVG logos of client organizations if permitted under NDA.

---

### 5. Social Profile URLs
- **File**: [`components/footer.tsx`](file:///c:/NBR-PORTFOLIO/components/footer.tsx)
- **Current Status**: Contains generic domain roots (`https://linkedin.com`, `https://x.com`, `https://github.com`).
- **Action Needed**: Update `SOCIAL_LINKS` with your actual profile handles (e.g. `https://linkedin.com/in/nahianbinrahman`).

---

### 5b. WhatsApp Direct Contact
- **Number**: `+8801778298484`
- **Current Status**: Fully integrated in floating mobile button ([components/whatsapp-button.tsx](file:///c:/NBR-PORTFOLIO/components/whatsapp-button.tsx)), mobile navbar drawer, contact section, and footer.
- **Action Needed**: Ready as-is.

---

### 6. Booking Calendar URL
- **File**: [`components/contact.tsx`](file:///c:/NBR-PORTFOLIO/components/contact.tsx)
- **Constant**: `BOOK_CALL_URL` (currently `"https://calendly.com"`).
- **Action Needed**: Replace with your specific Calendly or Cal.com event scheduling link (e.g. `https://calendly.com/nahian/discovery`).

---

### 7. Project Inquiry Destination (Email / CRM / Slack)
- **File**: [`app/api/contact/route.ts`](file:///c:/NBR-PORTFOLIO/app/api/contact/route.ts)
- **Environment Variable**: `CONTACT_WEBHOOK_URL`
- **Action Needed**:
  - In `.env.local` or hosting provider settings (Vercel/Cloudflare/AWS), configure:
    ```env
    CONTACT_WEBHOOK_URL="https://hooks.slack.com/services/..."
    ```
  - Submissions will automatically forward instantly to your Slack, Discord, or Zapier/Make CRM pipeline.

---

### 8. Verified Credibility Metrics
- **Files**: [`data/testimonials.ts`](file:///c:/NBR-PORTFOLIO/data/testimonials.ts), [`components/agency.tsx`](file:///c:/NBR-PORTFOLIO/components/agency.tsx)
- **Current Status**: Uses qualitative trust pillars (Founder-Led, Remote-First, Cross-Disciplinary, International).
- **Action Needed**: Add hard metrics (e.g. "20+ Enterprise builds delivered") only once independently verified.
