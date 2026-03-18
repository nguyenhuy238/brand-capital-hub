

# dCreator Landing Page — Implementation Plan

## Overview
Build a full landing page for **dCreator**, a Social Commerce × O2O platform for the Vietnamese market, following the design brief's dark theme with Indigo/Zinc palette and the provided HTML structure.

## Pages & Sections
1. **Fixed Navigation** — Glass-morphism navbar with logo, section links, and CTA button
2. **Hero Section** — Large display typography ("Biến Hàng Hóa Thành Vốn Sáng Tạo"), radial gradient background, CTAs, and stats grid
3. **Quote Banner** — Editorial-style mission statement
4. **Problem Section** — 3-column grid cards (Brand, Creator, User pain points) + alert box
5. **Solution Section** — Split layout with orbital diagram visualization + revenue model grid
6. **How It Works Section** — Tabbed interface (Creator Nhỏ Lẻ / Creator Lớn) with 5-step process flows
7. **Competitive Advantage Section** — Comparison table (TikTok/Sàn TMĐT vs dCreator)
8. **SWOT Analysis Section** — 2×2 grid (Strengths, Weaknesses, Opportunities, Threats)
9. **CTA Section** — Final call-to-action with contact info
10. **Footer** — Minimal branding footer

## Design System Updates
- Dark theme as default: deep zinc/indigo palette from design brief
- Fonts: `Plus Jakarta Sans` (body) + `Instrument Serif` (display headings)
- Custom CSS variables for purple/violet/pink gradient system
- Glass-morphism effects, card shadows, hover animations
- Scroll-reveal fade-up animations using Framer Motion or CSS
- Custom cursor effect (optional, may skip for accessibility)
- Responsive: mobile-first with grid collapse on smaller screens

## Key Interactions
- Smooth scroll navigation between sections
- Tab switching for "How It Works" (small creator vs large creator flows)
- Hover effects on cards (translate, gradient border reveal)
- Staggered entrance animations on scroll
- Orbital animation in Solution section

## Technical Approach
- All content in React components, no backend needed
- Framer Motion for scroll-triggered animations
- Google Fonts loaded for Plus Jakarta Sans + Instrument Serif
- Fully responsive layout

