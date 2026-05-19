# Design Specification - Join Us Page Redesign

**Date**: 2026-05-19  
**Author**: Elite Senior Software Architect & Lead Developer  
**Status**: APPROVED  

---

## 1. Goal

The objective is to refine the design of the `/info/join-us` (Careers / Community) page by replacing the outdated 3D floating device mockups (tablets/smartphones) with a clean, modern, responsive grid of contribution step-cards. Additionally, we will consolidate the multiple oversized Call To Action (CTA) buttons into a single, well-proportioned, premium closure section that matches the visual language of the application.

## 2. Proposed Changes

### 2.1 Section 1: Contribution Steps Grid (Replaces Floating Devices Stage)
- **Removal**: Remove the `Floating Device Modules Stage` container (lines 192-289) and the intermediate green CTA button (lines 291-303).
- **New Element**: A CSS grid with 4 cards mapping the open-source workflow:
  1. **Fork**: `GitFork` icon. Badge "Step 1". Explains how to fork the repository.
  2. **Clone**: `Terminal` icon. Code snippet: `git clone ...`.
  3. **Build**: `Cpu` icon. Code snippet: `npm run dev`.
  4. **PR (Pull Request)**: `GitPullRequest` icon. Badge "Contribute". Explains how to submit changes.
- **Aesthetics**:
  - White backgrounds with border-gray-100, border-b-4 to give it a 3D tactile Duolingo button look without excessive size.
  - Interactive Framer Motion hover elevation (e.g., `whileHover={{ y: -6 }}`).
  - Command snippets styled in a clean `font-mono` design block.

### 2.2 Section 2: Consolidating and Proportioning the Final CTA
- **Layout**: Keep the final container but reduce title dimensions (from `text-6xl md:text-[80px]` to `text-4xl md:text-5xl`).
- **Button Redesign**: Replace the massive CTA button with a proportional, pixel-perfect 3D button (`px-8 py-3.5 text-sm md:text-base font-black uppercase tracking-wider`).
- **Contact Info**: Keep it subtle at the bottom, centered and readable.

## 3. Translation Strategy
We will map strings in [useTranslation.tsx](file:///c:/Users/User/Documents/PRECIOSO/coding/GitHub/Duolingo-Site/src/hooks/useTranslation.tsx) to ensure internationalization:
- Keep or adapt keys like `info.join_us.gh.title_1`, `info.join_us.gh.title_2` and `info.join_us.gh.desc`.
- Update the final CTA strings to refer to the new clean layout.

## 4. Verification Plan
- **Responsiveness Check**: Verify mobile layout (stacking cards into a single column), tablet layout (2x2 grid), and desktop layout (4-column grid).
- **Browser Navigation**: Check interactive hover states and redirection link target on the main GitHub repository button.
