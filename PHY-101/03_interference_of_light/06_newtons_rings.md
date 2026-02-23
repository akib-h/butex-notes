# 06. Newton's Rings

> **Date:** February 23, 2025
> **Topic:** Newton's Rings — Formation, Theory, Radii of Rings, Determination of Wavelength

---

## 📑 Table of Contents

1. [Introduction](#1-introduction)
2. [Experimental Setup](#2-experimental-setup)
3. [Why Circular Rings? — Physical Explanation](#3-why-circular-rings--physical-explanation)
4. [Theory — Optical Path Difference](#4-theory--optical-path-difference)
5. [Conditions for Bright and Dark Rings](#5-conditions-for-bright-and-dark-rings)
6. [Radii of Bright and Dark Rings](#6-radii-of-bright-and-dark-rings)
7. [Diameter of Rings and Spacing](#7-diameter-of-rings-and-spacing)
8. [Dark Central Spot — Explanation](#8-dark-central-spot--explanation)
9. [Determination of Wavelength of Light](#9-determination-of-wavelength-of-light)
10. [Determination of Radius of Curvature (R)](#10-determination-of-radius-of-curvature-r)
11. [Worked Examples](#11-worked-examples)
12. [Online References](#12-online-references)

---

## 1. Introduction

**Newton's rings** are **circular interference fringes** observed when a plano-convex lens of large radius of curvature is placed on a plane glass plate. They were first observed and described by **Isaac Newton** (1642–1727), who, despite being a proponent of the corpuscular theory of light, correctly described the phenomenon (though he could not explain it in terms of waves).

Newton's rings provide an excellent example of **interference in a thin film** (the thin air film between the lens and the plate), produced by **division of amplitude**.

**Key applications:**
1. Measurement of wavelength of monochromatic light
2. Testing the flatness and sphericity of optical surfaces
3. Measurement of refractive index of liquids
4. Quality control in lens manufacture

---

## 2. Experimental Setup

```
                    M (Microscope)
                    |
              [Eye piece]
                    |
          ┌─────────┼─────────┐
          │  Glass plate G    │ ← 45° inclined glass plate
          └─────────┼─────────┘
                    |
         ←──── Light from S ────
              (sodium lamp)
                    ↓
          ┌─────────────────────┐
          │   Plano-convex lens │  ← L₂ (long focal length)
          └────────────┬────────┘
                       ●  O (point of contact)
          ═════════════════════════  ← Plane glass plate
                     Air film
```

**Components:**
- `S` = Sodium lamp (monochromatic light source)
- `L₁` = Convex lens (to make light parallel)
- `G` = Glass plate inclined at 45° (to direct light downward)
- `L₂` = Plano-convex lens (large focal length, so nearly flat — large R)
- Plane glass plate below L₂
- `M` = Traveling microscope (to measure ring diameters)
- `O` = Point of contact between lens and plate

**Working:** Light from `S` is made parallel by `L₁`, then reflected downward by inclined plate `G`. It falls normally on the plano-convex lens `L₂` resting on the plane glass plate. Interference occurs between:
- Ray reflected from the **bottom surface** of the convex lens
- Ray reflected from the **top surface** of the plane glass plate

The rings are viewed through the **traveling microscope** from above.

---

## 3. Why Circular Rings? — Physical Explanation

When a plano-convex lens is placed on a flat plate:
- At the **point of contact O**: air film thickness = 0
- Moving **outward** from O: air film thickness **gradually increases**
- All points at the **same distance** `r` from O have the **same air film thickness** `t`
- Therefore, all such points give the same interference condition (all bright or all dark)
- The locus of points at the same distance from O is a **circle** → hence **circular rings**

```
      Plano-convex lens
     ╭──────────────────╮
     │                  │
─────┘                  └─────   ← Flat bottom of lens
      \\                //
       \\   Air film   //        ← Thin air wedge
        \\____________//
════════════════════════════════   ← Plane glass plate

        Rings:
        ○ ← dark center
       ○○○
      ○   ○ ← bright ring
       ○○○
        ○
```

---

## 4. Theory — Optical Path Difference

### Geometry

```
          M
         /|\
        / | \
       /  |  \
      /   |P  \
     /    |    \       (cross-section of lens)
────/─────R─────\────
    rₘ    |    rₘ
    Q─────O─────
          t          ← air film thickness at Q
```

Let:
- `R` = radius of curvature of the plano-convex lens
- `rₘ` = radius of the m-th circular ring at point Q
- `t` = thickness of air film at Q
- `PQ = t` (thickness)
- `OQ = rₘ` (radius of ring)

### Using Pythagoras' Theorem

From the geometry (center of curvature at P, radius R):

$$R^2 = r_m^2 + (R - t)^2$$
$$R^2 = r_m^2 + R^2 - 2Rt + t^2$$
$$0 = r_m^2 - 2Rt + t^2$$
$$r_m^2 = 2Rt - t^2$$

Since `R >> t` (radius of curvature much greater than film thickness), `t² << 2Rt`:

$$\boxed{r_m^2 \approx 2Rt}$$

Therefore: `t = r_m²/(2R)`

### Optical Path Difference

For the **reflected rays** from the air film:
$$\Delta = 2\mu t \cos r - \frac{\lambda}{2}$$

For **normal incidence** (`r = 0`, so `cos r = 1`) and air (`μ = 1`):
$$\Delta = 2t - \frac{\lambda}{2}$$

The `λ/2` term arises because:
- Ray reflected from the **bottom of the air film** (denser glass below → rarer to denser interface) undergoes a **phase change of π** (path change of `λ/2`)
- Ray reflected from the **top of the air film** (rarer air → rarer air interface, with denser glass above already traversed) does **not** undergo a phase change

So the total effective path difference including the phase change is:
$$\Delta = 2t - \frac{\lambda}{2} = 2t + \frac{\lambda}{2} \text{ (alternatively written)}$$

> **Note:** The sign convention: one reflection is at a rarer-to-denser interface (gains λ/2), the other is at a denser-to-rarer interface (no phase change). Net extra path difference = λ/2.

---

## 5. Conditions for Bright and Dark Rings

### Dark Rings (Destructive Interference)

Intensity minimum when optical path difference = multiple of λ:

$$\Delta = 2t - \frac{\lambda}{2} = m\lambda \quad (m = 0, 1, 2, \ldots)$$

Wait — more carefully:

For **destructive** interference (minimum/dark):
$$2t - \frac{\lambda}{2} = (m - \frac{1}{2})\lambda \quad \Rightarrow \quad 2t = m\lambda$$

Actually the standard result:

> **Dark rings:** `2t = mλ`, where `m = 0, 1, 2, 3, ...`

$$\boxed{2t = m\lambda}$$

### Bright Rings (Constructive Interference)

For **constructive** interference (maximum/bright):
$$\boxed{2t = (2m-1)\frac{\lambda}{2} = (m - \frac{1}{2})\lambda}$$

Or equivalently: `2t = (2m+1)λ/2` for `m = 0, 1, 2, ...`

$$\boxed{2t = (2m+1)\frac{\lambda}{2}}$$

---

## 6. Radii of Bright and Dark Rings

Using `r_m² ≈ 2Rt`, i.e., `t = r_m²/(2R)`:

### Radii of Dark Rings

From `2t = mλ`:
$$2 \cdot \frac{r_m^2}{2R} = m\lambda$$
$$r_m^2 = m\lambda R$$
$$\boxed{r_m = \sqrt{m\lambda R}} \quad (m = 0, 1, 2, 3, \ldots)$$

- `m = 0`: `r₀ = 0` → **Dark center** (as expected)
- `m = 1`: `r₁ = √(λR)` → 1st dark ring
- `m = 2`: `r₂ = √(2λR)` → 2nd dark ring
- `m = 3`: `r₃ = √(3λR)` → 3rd dark ring

### Radii of Bright Rings

From `2t = (2m+1)λ/2`:
$$2 \cdot \frac{r_m^2}{2R} = (2m+1)\frac{\lambda}{2}$$
$$r_m^2 = (2m+1)\frac{\lambda R}{2}$$
$$\boxed{r_m = \sqrt{(2m+1)\frac{\lambda R}{2}}} \quad (m = 0, 1, 2, 3, \ldots)$$

- `m = 0`: `r₀ = √(λR/2)` → 1st bright ring (innermost)

---

## 7. Diameter of Rings and Spacing

### Diameters of Dark Rings

$$D_m = 2r_m = 2\sqrt{m\lambda R}$$

$$\boxed{D_m^2 = 4m\lambda R}$$

| Ring order `m` | Diameter `Dₘ` |
|---------------|--------------|
| 1 | `D₁ = 2√(λR)` |
| 2 | `D₂ = 2√(2λR)` |
| 3 | `D₃ = 2√(3λR)` |
| 4 | `D₄ = 2√(4λR) = 4√(λR)` |

**Key Property:**
$$D_m \propto \sqrt{m}$$

The diameters are **proportional to the square root of natural numbers**.

### Spacing Between Rings

$$D_4 - D_1 = 2\sqrt{4\lambda R} - 2\sqrt{\lambda R} = 2\sqrt{\lambda R}(2-1) = 2\sqrt{\lambda R}$$
$$D_{16} - D_9 = 2\sqrt{16\lambda R} - 2\sqrt{9\lambda R} = 2\sqrt{\lambda R}(4-3) = 2\sqrt{\lambda R}$$

Both differences equal `2√(λR)` → **the rings get closer and closer** as the order `m` increases.

> The rings become **more and more closely spaced** as we move outward from the center, because the air film thickness increases more rapidly at larger radii.

---

## 8. Dark Central Spot — Explanation

At the **point of contact O** (center):
- Air film thickness `t = 0`
- Geometrical path difference = 0

But there is still a **phase difference of π** (equivalent to path difference of λ/2) because:
- Ray 1 reflects off the **lower surface of the convex lens** (glass to air, no phase change — going from denser to rarer)
- Ray 2 transmits through the air film and reflects off the **upper surface of the plane glass plate** (air to glass, rarer to denser — **phase change of π**)

So the **net phase difference at the center = π**, which gives **destructive interference**.

Therefore, the **central spot is always dark** when Newton's rings are observed in reflected light.

$$\text{At center: } t \approx 0 \Rightarrow \Delta = 0 - \frac{\lambda}{2} = -\frac{\lambda}{2}$$

This equals destructive condition → **dark spot**. ✓

> Note: In **transmitted light**, the central spot is **bright** (because the transmitted rays don't undergo the extra phase change).

---

## 9. Determination of Wavelength of Light

### Formula Derivation

For dark rings: `D_m² = 4mλR`

For ring `m`: `D_m² = 4mλR`  
For ring `m+p`: `D_{m+p}² = 4(m+p)λR`

Subtracting:
$$D_{m+p}^2 - D_m^2 = 4p\lambda R$$

$$\boxed{\lambda = \frac{D_{m+p}^2 - D_m^2}{4pR}}$$

### Procedure

1. Arrange the Newton's rings setup on an optical bench
2. Use a traveling microscope to measure ring diameters
3. Record diameters of rings `m` and `m+p` (e.g., `m = 5` and `m+p = 15`, so `p = 10`)
4. Measure `R` using a spherometer
5. Calculate: `λ = (D_{m+p}² - Dₘ²) / (4pR)`

### Graphical Method

Plot `D_m²` vs. `m` (ring order):
- This should be a **straight line** through the origin
- Slope `= 4λR`
- From slope: `λ = slope / (4R)`

```
D²↑
   |           ●
   |        ●
   |     ●
   |   ●
   | ●
   |●────────────────→ m
   0  1  2  3  4  5
   slope = 4λR
```

---

## 10. Determination of Radius of Curvature (R)

$$R = \frac{D_{m+p}^2 - D_m^2}{4p\lambda}$$

Or using the graphical method:
$$R = \frac{\text{slope}}{4\lambda}$$

The radius of curvature can also be determined with a **spherometer**:
$$R = \frac{l^2}{6h} + \frac{h}{2}$$

where `l` = length of spherometer arm and `h` = sagitta (height).

---

## 11. Worked Examples

### Example 1: Finding Radii of Dark Rings

**Problem:** Newton's rings are formed using a plano-convex lens with `R = 100 cm` and light of wavelength `λ = 5890 Å`. Find the radii of the 1st, 2nd, 3rd, and 4th dark rings.

**Solution:**

`r_m = √(mλR)`

$$r_1 = \sqrt{1 \times 5890 \times 10^{-8} \times 100} = \sqrt{5.89 \times 10^{-3}} = 0.0767 \text{ cm}$$
$$r_2 = \sqrt{2} \times r_1 = 1.414 \times 0.0767 = 0.1085 \text{ cm}$$
$$r_3 = \sqrt{3} \times r_1 = 1.732 \times 0.0767 = 0.1328 \text{ cm}$$
$$r_4 = \sqrt{4} \times r_1 = 2 \times 0.0767 = 0.1534 \text{ cm}$$

Note: `r_4/r_1 = 2 = √4` → diameters proportional to `√m` ✓

---

### Example 2: Finding Wavelength from Ring Diameters

**Problem:** In Newton's rings experiment, the diameter of the 5th ring is 0.30 cm and that of the 25th ring is 0.65 cm. The radius of curvature of the lens is `R = 100 cm`. Find the wavelength of light.

**Solution:**

Using: `λ = (D_{m+p}² - Dₘ²) / (4pR)`

Here: `D₅ = 0.30 cm`, `D₂₅ = 0.65 cm`, `p = 20`, `R = 100 cm`

$$\lambda = \frac{(0.65)^2 - (0.30)^2}{4 \times 20 \times 100}$$
$$\lambda = \frac{0.4225 - 0.09}{8000} = \frac{0.3325}{8000}$$
$$\lambda = 4.156 \times 10^{-5} \text{ cm} = 4156 \text{ Å}$$

$$\boxed{\lambda \approx 4156 \text{ Å}}$$

This is in the **violet** region of visible spectrum.

---

### Example 3: Diameter Ratio Property

**Problem:** Show that the diameters of Newton's dark rings are in the ratio `1 : √2 : √3 : √4 : ...`

**Proof:**

From `D_m² = 4mλR`:
$$D_m = 2\sqrt{m\lambda R} = 2\sqrt{\lambda R} \cdot \sqrt{m}$$

Therefore:
$$D_1 : D_2 : D_3 : D_4 = \sqrt{1} : \sqrt{2} : \sqrt{3} : \sqrt{4}$$

$$\boxed{D_m \propto \sqrt{m}}$$

The diameters are in the ratio `1 : √2 : √3 : 2 : ...` ✓

---

## 12. Online References

- 📘 [HyperPhysics — Newton's Rings](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/newton.html)
- 📘 [LibreTexts — Newton's Rings](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/03%3A_Interference/3.04%3A_Multiple-Slit_Interference)
- 📘 [NCERT — Thin Film Interference](https://ncert.nic.in/textbook.php?leph2=10-10)
- 📘 [Khan Academy — Thin Film Interference](https://www.khanacademy.org/science/physics/light-waves/interference-of-light-waves/a/thin-film-interference)
- 📘 [MIT OCW — Thin Films and Newton's Rings](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/)
- 📘 [PhET — Wave Interference Simulation](https://phet.colorado.edu/en/simulations/wave-interference)

---

*← [Fresnel's Biprism](../05_fresnel_biprism/README.md) | Back to [Main Index](../README.md) | Next: [Thin Films →](../07_thin_films/README.md)*
