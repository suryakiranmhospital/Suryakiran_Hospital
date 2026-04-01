# Design System Strategy: Clinical Ether

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Laboratory"**

This design system rejects the clunky, bureaucratic aesthetic of traditional medical software in favor of a "Clinical Ether"—a space that feels sterile yet breathable, high-tech yet profoundly human. We move beyond the "template" look by utilizing extreme white space, intentional asymmetry, and a sense of weightlessness. 

Instead of rigid grids and heavy borders, the interface should feel like data projected onto layers of polished glass and soft light. We use Inter not just for legibility, but as a precision instrument, varying its weight and tracking to create a high-end editorial feel that guides the clinician’s eye through complex data with effortless clarity.

---

## 2. Colors & Surface Logic

The palette is rooted in a "Sterile-Futuristic" spectrum. We use cool-toned neutrals to establish a sense of precision, punctuated by high-vibrancy accents.

### The "No-Line" Rule
**Strict Mandate:** Traditional 1px solid borders are prohibited for sectioning. 
Structure is defined through **Tonal Shifts**. To separate a sidebar from a main canvas, transition from `surface` (#f7f9fb) to `surface-container-low` (#f2f4f6). The human eye perceives these subtle shifts in value as more premium and less "noisy" than a black line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials.
- **Base Layer:** `surface` (#f7f9fb) or `surface_container_lowest` (#ffffff).
- **Secondary Tier:** `surface_container_low` (#f2f4f6) for background groupings.
- **Interactive Tier:** `surface_container_high` (#e6e8ea) for hover states or active panels.

### The "Glass & Gradient" Rule
To achieve the "Futuristic Teal" signature, avoid flat fills on large components.
- **Signature Gradients:** Use a linear transition from `primary` (#006591) to `primary_container` (#0ea5e9) at a 135° angle for Hero CTAs.
- **Glassmorphism:** For floating overlays (modals, popovers), use `surface_container_lowest` at 70% opacity with a `20px` backdrop-blur. This allows underlying medical data to bleed through softly, maintaining context without visual clutter.

---

## 3. Typography: The Precision Grid

We use **Inter** as a functional typeface that mimics the clarity of a laboratory report while maintaining an approachable, modern soul.

*   **Display Scale (The Hero):** `display-lg` (3.5rem) should be used sparingly for high-level health metrics or welcome states. Use a tighter letter-spacing (-0.02em) to give it a "custom-tooled" look.
*   **Headline & Title (The Authority):** `headline-sm` (1.5rem) and `title-lg` (1.375rem) use a Medium weight (500) to provide structure.
*   **Body & Labels (The Data):** `body-md` (0.875rem) is our workhorse. For labels in high-density medical tables, use `label-md` (0.75rem) in all-caps with +0.05em letter-spacing to evoke a "technical instrument" feel.

---

## 4. Elevation & Depth

We eschew "Material" shadows for "Ambient Luminescence."

*   **The Layering Principle:** Depth is achieved by placing a `surface-container-lowest` card on a `surface-container-low` background. The slight shift from #f2f4f6 to #ffffff creates a "soft lift."
*   **Ambient Shadows:** For elevated elements (like a floating diagnostic panel), use a shadow with a blur of `40px`, an offset of `y: 8px`, and a color derived from `on-surface` (#191c1e) at 4% opacity. It should feel like a soft glow of light, not a drop shadow.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use `outline_variant` (#bec8d2) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`). `xl` (1.5rem) roundedness for a friendly, pill-like feel. No shadow; instead, a 1px "inner-glow" using a lighter teal.
- **Secondary:** Transparent background with a `Ghost Border`. Text color uses `primary`.
- **Tertiary (Warmth):** Use `tertiary` (#855300) for "Action Required" items. This "Glowing Gold" provides a human contrast to the sterile teal.

### Input Fields
- **High-Tech Style:** No bottom line or full box. Use a `surface_container_low` fill with `md` (0.75rem) corners. Upon focus, transition the background to `surface_container_lowest` and apply a subtle `primary` glow.

### Cards & Lists
- **The "No-Divider" Rule:** Forbid horizontal lines in lists. Use `spacing-4` (1.4rem) of vertical white space to separate items.
- **Diagnostic Cards:** Use `surface_container_lowest` with a `20px` backdrop blur when positioned over a gradient or imagery.

### Data Visualization (Bespoke)
- **Medical Trends:** Use `primary` for positive health trends and `tertiary` for warnings. All lines should be "Soft Path" (rounded caps and joins) to feel approachable.

---

## 6. Do's and Don'ts

### Do
*   **Embrace Asymmetry:** Align high-level stats to a different grid column than the body text to create an editorial, premium layout.
*   **Use Generous Spacing:** Use `spacing-12` (4rem) and `spacing-16` (5.5rem) between sections to let the "sterile" aesthetic breathe.
*   **Layer Materials:** Stack cards with slightly different surface tokens to create a "nested" physical reality.

### Don't
*   **Don't Use Pure Black:** Never use #000000. Use `on_surface` (#191c1e) for all text to maintain the soft-tech feel.
*   **Don't Box Everything:** Avoid wrapping every piece of data in a card. Let some data sit "naked" on the `surface` to create hierarchy.
*   **Don't Use Harsh Borders:** If you feel the urge to draw a line, try using a slightly different background color instead.