# 04 — Excess Pressure Across a Curved Surface

> **Course:** Physics II | **Topic:** Surface Tension  
> **Date:** 2026-04-08  
> **Syllabus Reference:** Unit 4 — Excess Pressure Across a Curved Film or Membrane

---

## Table of Contents

1. [Concept of Excess Pressure](#1-concept-of-excess-pressure)
2. [Excess Pressure Inside a Liquid Drop](#2-excess-pressure-inside-a-liquid-drop)
3. [Excess Pressure Inside a Soap Bubble](#3-excess-pressure-inside-a-soap-bubble)
4. [Excess Pressure Across a Curved Film on Membrane (Young-Laplace)](#4-excess-pressure-across-a-curved-film-on-membrane-young-laplace)
5. [Special Cases](#5-special-cases)
6. [Summary Table](#6-summary-table)
7. [Worked Examples](#7-worked-examples)
8. [References](#8-references)

---

## 1. Concept of Excess Pressure

### Why is there a Pressure Difference?

A curved liquid surface (whether concave or convex) has **surface tension forces** that create a **net inward or outward resultant**. This net force must be balanced by a **pressure difference** across the surface.

$$\boxed{P_{\text{excess}} = P_{\text{inside}} - P_{\text{outside}}}$$

The inside of a curved surface is **always at higher pressure** than the outside.

### Physical Intuition

Think of a balloon: the rubber (analogous to surface tension) is stretched and exerts an inward force → the air inside must be at higher pressure than outside to maintain equilibrium.

Similarly, surface tension on a curved liquid surface produces a net pressure difference — the **excess pressure** (অতিরিক্ত চাপ).

---

## 2. Excess Pressure Inside a Liquid Drop

### Setup

Consider a spherical liquid drop of radius $r$ in equilibrium with the surrounding atmosphere (vapour/air):

```
          ←─────────────────→
                 2r
         ┌─────────────────┐
       ╱                     ╲
      │   P_inside (higher)   │  ← Liquid drop
      │                       │
       ╲                     ╱
         └─────────────────┘
    P_outside (atmospheric pressure)
```

### Derivation

**Imagine cutting the drop in half.** Consider the equilibrium of the upper hemisphere:

**Upward force** (due to excess pressure $P_e$ acting on the circular cross-sectional area):

$$F_{\text{upward}} = P_e \cdot \pi r^2 \qquad \left[P = \frac{F}{A} = \frac{F}{\pi r^2}\right]$$

**Downward force** (surface tension acts along the circumference of the cut, directed downward/inward):

The surface tension acts along the perimeter $2\pi r$, with magnitude $T$ per unit length:

$$F_{\text{downward}} = T \cdot 2\pi r \qquad \left[T = \frac{F}{l} = \frac{F}{2\pi r}\right]$$

**Condition of equilibrium:**

$$F_{\text{upward}} = F_{\text{downward}}$$

$$P_e \cdot \pi r^2 = T \cdot 2\pi r$$

$$\boxed{P_e = \frac{2T}{r}} \quad \text{(Liquid drop or Air bubble)}$$

### Note

This applies to:
- A **liquid drop** in air (one surface)
- An **air bubble** inside a liquid (one surface)

---

## 3. Excess Pressure Inside a Soap Bubble

### Setup

A soap bubble has **two surfaces** — an inner surface and an outer surface — both contributing to surface tension:

```
            Outer surface (T)
        ┌───────────────────────┐
       ╱   Inner surface (T)     ╲
      │  ┌─────────────────────┐  │
      │  │                     │  │
      │  │   Air inside        │  │  ← Soap bubble
      │  │                     │  │
      │  └─────────────────────┘  │
       ╲                          ╱
        └───────────────────────┘
```

### Derivation

**Upward force** (same as before, excess pressure on cross-sectional area):

$$F_{\text{upward}} = P_e \cdot \pi r^2$$

**Downward force** (TWO surfaces, each contributing $T \cdot 2\pi r$):

$$F_{\text{downward}} = 2T \cdot 2\pi r = 4\pi rT$$

**Equilibrium:**

$$P_e \cdot \pi r^2 = 4\pi rT$$

$$\boxed{P_e = \frac{4T}{r}} \quad \text{(Soap bubble)}$$

The pressure inside a soap bubble is **twice** that for a liquid drop of the same radius.

---

## 4. Excess Pressure Across a Curved Film on Membrane (Young-Laplace)

### General Case: Curved Surface with Two Principal Radii

For a curved surface that is not spherical, we use the **Young-Laplace equation**, which involves the **two principal radii of curvature** $r_1$ and $r_2$.

### Derivation

Consider an elementary rectangular portion $ABCD$ of the curved surface with sides $x$ and $y$, and principal radii of curvature $r_1$ and $r_2$ respectively:

```
         D'─────────────────────C'
        ╱    (x+δx)(y+δy)      ╱
       ╱  B'───────────────A' ╱
      D──────────────────C  ╱
      │     x × y         │╱  ← Elementary portion ABCD
      │  B──────────────A │
      B──────────────────A
      
      r₁ = radius in the x-direction (curvature along AB)
      r₂ = radius in the y-direction (curvature along BC)
      O₁, O₂ = centres of curvature
```

**Initial surface area of elementary portion:**
$$A_i = xy$$

**After stretching by excess pressure** $P$ through distance $\delta z$, new dimensions:

Using similar triangles from the geometry of curvature:

$$\delta x = \frac{x}{r_1} \delta z, \qquad \delta y = \frac{y}{r_2} \delta z$$

New surface area:

$$A_f = (x + \delta x)(y + \delta y) = xy + x\cdot\delta y + y\cdot\delta x + \delta x\cdot\delta y$$

Neglecting $\delta x \cdot \delta y$ (second-order small):

$$A_f \approx xy + x\cdot\delta y + y\cdot\delta x$$

**Increase in surface area:**

$$\delta A = x\cdot\delta y + y\cdot\delta x = x\cdot\frac{y}{r_2}\delta z + y\cdot\frac{x}{r_1}\delta z = xy\cdot\delta z\left(\frac{1}{r_1} + \frac{1}{r_2}\right)$$

**Increase in surface energy:**

$$\delta E_s = T \cdot \delta A = T \cdot xy\cdot\delta z\left(\frac{1}{r_1} + \frac{1}{r_2}\right)$$

**Work done by excess pressure** in moving the surface through $\delta z$:

$$\delta W = P \cdot xy \cdot \delta z$$

**Setting work done = increase in surface energy:**

$$P \cdot xy \cdot \delta z = T \cdot xy\cdot\delta z\left(\frac{1}{r_1} + \frac{1}{r_2}\right)$$

$$\boxed{P = T\left(\frac{1}{r_1} + \frac{1}{r_2}\right)} \quad \text{(One surface — liquid drop, air bubble)}$$

$$\boxed{P = 2T\left(\frac{1}{r_1} + \frac{1}{r_2}\right)} \quad \text{(Two surfaces — soap film/bubble)}$$

This is the **Young-Laplace equation** — one of the most important equations in fluid statics.

### Geometric Derivation of $\delta x$ and $\delta y$

From similar triangles $\triangle ABO_1$ and $\triangle A'B'O_1$:

$$\frac{A'B'}{AB} = \frac{O_1B'}{O_1B} \implies \frac{x + \delta x}{x} = \frac{r_1 + \delta z}{r_1}$$

$$\Rightarrow 1 + \frac{\delta x}{x} = 1 + \frac{\delta z}{r_1} \implies \delta x = \frac{x}{r_1}\delta z$$

Similarly: $\delta y = \dfrac{y}{r_2}\delta z$

### Sign Convention

- If both surfaces are concave (viewed from outside) → both $r_1, r_2 > 0$ → $P > 0$ (excess pressure inward)
- If one surface is convex and one concave: $P = T\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$ (signs differ)

---

## 5. Special Cases

### Case I: Spherical Surface

$$r_1 = r_2 = r$$

For **one surface** (liquid drop or air bubble):

$$P = T\left(\frac{1}{r} + \frac{1}{r}\right) = \frac{2T}{r}$$

For **two surfaces** (soap bubble):

$$P = 2T\left(\frac{1}{r} + \frac{1}{r}\right) = \frac{4T}{r}$$

### Case II: Cylindrical Surface

$$r_1 = r \text{ (finite)}, \quad r_2 = \infty$$

For **one surface** (liquid drop / air bubble):

$$P = T\left(\frac{1}{r} + \frac{1}{\infty}\right) = \frac{T}{r}$$

For **two surfaces** (cylindrical soap film):

$$P = 2T\left(\frac{1}{r} + \frac{1}{\infty}\right) = \frac{2T}{r}$$

### Case III: Flat Surface (Plane)

$$r_1 = r_2 = \infty$$

$$P = T\left(\frac{1}{\infty} + \frac{1}{\infty}\right) = 0$$

No excess pressure across a flat surface.

### Case IV: Concave-Convex (Saddle) Surface

If $r_1$ is convex (positive) and $r_2$ is concave (negative from one side):

$$P = T\left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$

---

## 6. Summary Table

| Shape | Surfaces | Formula |
|---|---|---|
| Liquid drop (spherical) | 1 | $P = \dfrac{2T}{r}$ |
| Air bubble in liquid (spherical) | 1 | $P = \dfrac{2T}{r}$ |
| Soap bubble (spherical) | 2 | $P = \dfrac{4T}{r}$ |
| Cylindrical liquid drop | 1 | $P = \dfrac{T}{r}$ |
| Cylindrical soap film | 2 | $P = \dfrac{2T}{r}$ |
| Flat surface | — | $P = 0$ |
| General curved surface (1 surface) | 1 | $P = T\left(\dfrac{1}{r_1} + \dfrac{1}{r_2}\right)$ |
| General curved surface (2 surfaces) | 2 | $P = 2T\left(\dfrac{1}{r_1} + \dfrac{1}{r_2}\right)$ |

---

## 7. Worked Examples

### Example 1: Excess pressure in a soap bubble (from handnotes — Problem 2)

**Q:** Calculate the excess pressure inside a soap bubble of radius $3 \times 10^{-3}$ m. Surface tension of soap solution = $20 \times 10^{-3}$ N/m. Also find the surface energy.

$$P_e = \frac{4T}{r} = \frac{4 \times 20 \times 10^{-3}}{3 \times 10^{-3}} = \frac{0.08}{3 \times 10^{-3}} = 26.67 \text{ N/m}^2$$

Surface energy:

$$E = 2 \times 4\pi r^2 \times T = 8\pi \times (3 \times 10^{-3})^2 \times 20 \times 10^{-3}$$

$$= 8 \times 3.14159 \times 9 \times 10^{-6} \times 0.02 = 4.52 \times 10^{-6} \text{ J}$$

$$\boxed{P_e = 26.67 \text{ N/m}^2, \quad E = 4.52 \times 10^{-6} \text{ J}}$$

---

### Example 2: Depth of air bubble (from handnotes — Problem 3)

**Q:** Calculate the depth of water at which an air bubble of radius $4 \times 10^{-4}$ m may remain in equilibrium. Surface tension of water = $70 \times 10^{-3}$ N/m.

An air bubble submerged in water has **one surface**:

$$P_e = \frac{2T}{r}$$

At depth $h$, the hydrostatic pressure = $\rho g h$. For equilibrium:

$$\rho g h = \frac{2T}{r}$$

$$h = \frac{2T}{\rho g r} = \frac{2 \times 70 \times 10^{-3}}{1000 \times 9.8 \times 4 \times 10^{-4}}$$

$$h = \frac{0.14}{3.92} = \boxed{35.71 \times 10^{-3} \text{ m} \approx 3.57 \text{ cm}}$$

---

### Example 3: Pressure inside an air bubble near water surface (from handnotes — Problem 5)

**Q:** What would be the pressure inside a small air bubble of 0.1 mm radius situated just below the surface of water? Surface tension of water = 72 dyne/cm, atmospheric pressure = $1.013 \times 10^6$ dyne/cm².

Air bubble has one surface:

$$P_e = \frac{2T}{r} = \frac{2 \times 72}{0.1/10} = \frac{144}{0.01} = 14400 \text{ dyne/cm}^2$$

Total pressure inside:

$$P_{\text{inside}} = P_{\text{outside}} + P_e = 1.013 \times 10^6 + 14400 = 1.0274 \times 10^6 \text{ dyne/cm}^2$$

$$\boxed{P_{\text{inside}} = 1.0274 \times 10^6 \text{ dyne/cm}^2}$$

---

### Example 4: Work done in spraying mercury (from handnotes — Problem 4)

**Q:** Calculate the work done in spraying a spherical drop of mercury of radius $R = 10^{-3}$ m into $N = 10^6$ drops of equal size. $T = 550 \times 10^{-3}$ N/m.

**Find radius of small drops:**

$$\frac{4}{3}\pi R^3 = N \cdot \frac{4}{3}\pi r^3 \implies r = \frac{R}{N^{1/3}} = \frac{10^{-3}}{100} = 10^{-5} \text{ m}$$

**Work done = increase in surface energy:**

$$W = T \cdot \Delta A = T \times 4\pi(Nr^2 - R^2)$$

$$= 550 \times 10^{-3} \times 4\pi \left[10^6 \times (10^{-5})^2 - (10^{-3})^2\right]$$

$$= 0.55 \times 4\pi \left[10^6 \times 10^{-10} - 10^{-6}\right]$$

$$= 0.55 \times 4\pi \left[10^{-4} - 10^{-6}\right] = 0.55 \times 4\pi \times 99 \times 10^{-6}$$

$$= 0.55 \times 4 \times 3.14159 \times 9.9 \times 10^{-5}$$

$$\boxed{W \approx 6.84 \times 10^{-4} \text{ J}}$$

---

### Example 5: Surface tension from soap bubble pressure (from handnotes — Problem 6)

**Q:** The pressure of air inside a soap bubble of 0.7 cm diameter is 8 mm of water above atmospheric. Calculate the surface tension of soap solution.

$$P_e = h\rho g = \frac{8}{10} \times 10^{-2} \times 1000 \times 9.8 = \frac{8}{10} \times 1 \times 980 \text{ (in CGS: dynes/cm}^2)$$

Wait — using CGS:

$$h = 8 \text{ mm} = 0.8 \text{ cm}, \quad \rho = 1 \text{ g/cm}^3, \quad g = 980 \text{ cm/s}^2$$

$$P_e = h\rho g = 0.8 \times 1 \times 980 = 784 \text{ dyne/cm}^2$$

For soap bubble: $P_e = \dfrac{4T}{r}$, $r = 0.35$ cm

$$T = \frac{P_e \cdot r}{4} = \frac{784 \times 0.35}{4} = \frac{274.4}{4} = 68.6 \text{ dyne/cm}$$

$$\boxed{T = 68.6 \text{ dyne/cm}}$$

---

## 8. References

| Resource | Link |
|---|---|
| HyperPhysics — Pressure in Bubbles | http://hyperphysics.phy-astr.gsu.edu/hbase/surten2.html |
| Young-Laplace Equation — Wikipedia | https://en.wikipedia.org/wiki/Young%E2%80%93Laplace_equation |
| OpenStax — Surface Tension | https://openstax.org/books/university-physics-volume-1/pages/14-introduction |
| LibreTexts — Young-Laplace | https://chem.libretexts.org |
| Adamson — *Physical Chemistry of Surfaces* | Advanced reference |
| Irodov — *Problems in General Physics* | Problems 2.127–2.135 |

---

*Previous: [03 — Surface Energy](./03_Surface_Energy.md) | Next: [05 — Capillarity & Angle of Contact](./05_Capillarity_Angle_of_Contact.md)*
