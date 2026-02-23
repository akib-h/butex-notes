# 04. Young's Double Slit Experiment

> **Date:** February 23, 2025
> **Topic:** Young's Experiment — Setup, Derivation, Fringe Width, Wavelength Determination

---

## 📑 Table of Contents

1. [Historical Background](#1-historical-background)
2. [Experimental Setup](#2-experimental-setup)
3. [Theory and Derivation of Path Difference](#3-theory-and-derivation-of-path-difference)
4. [Conditions for Bright and Dark Fringes](#4-conditions-for-bright-and-dark-fringes)
5. [Fringe Width (β)](#5-fringe-width-β)
6. [Analytical Treatment and Intensity](#6-analytical-treatment-and-intensity)
7. [Properties of Interference Fringes](#7-properties-of-interference-fringes)
8. [Determining Wavelength of Light](#8-determining-wavelength-of-light)
9. [Worked Examples](#9-worked-examples)
10. [Online References](#10-online-references)

---

## 1. Historical Background

**Thomas Young** (1773–1829) performed his landmark double-slit experiment in **1801**, providing the first strong experimental evidence for the **wave nature of light**. At the time, Newton's corpuscular theory dominated. Young's results — showing light could cancel light — were initially met with skepticism, but the experiment eventually became one of the most celebrated in all of physics.

The experiment is also historically significant because:
- It allowed the first measurement of the **wavelength of light**
- It demonstrated **coherence** experimentally
- In the 20th century, it was adapted to show the **wave-particle duality** of electrons and other quantum particles

---

## 2. Experimental Setup

```
           Monochromatic
              source S
                 |
                 |         d/2 ← A (slit 1)
              [single  ──── · ────────────────────────────── P (point on screen)
               slit S]      ·     D = distance                 ↑ x
                         ← d ──── · ────────────────────────── C (center)
                            d/2 → B (slit 2)                  ↓
                                          ←────── D ──────────> Screen
```

**Key variables:**
- `S` = narrow monochromatic source
- `A`, `B` = two slits, separated by distance `d`
- `D` = distance from slits to screen
- `d` = separation between slits (called slit width or source separation)
- `C` = central point on screen (equidistant from A and B)
- `P` = a general point on the screen at distance `x` from C
- `λ` = wavelength of light used

**Conditions for the setup:**
- `D >> d` (screen is very far compared to slit separation)
- `d >> λ` (slit separation much larger than wavelength)

**How coherent sources are obtained:**
- Light from S falls on both A and B simultaneously
- A and B act as **virtual coherent secondary sources** (wave-front division)
- Both A and B are illuminated by the same primary source, so they have the same frequency and a **constant phase difference** (zero if equidistant from S)

---

## 3. Theory and Derivation of Path Difference

### Geometry

Let point P be at a distance `x` from the central point C.

From the geometry:
- `Q` is the foot of perpendicular from A to BP
- `PQ = x − d/2`
- `PR = x + d/2` (where R is foot from B)

```
A ──────────────────────── P
│                        ↑ x
│  S₁              Q     │
└──────────────────────── C (center)
   S₂              R     │
                        ↓
B
│←─────── D ─────────────>│
```

### Mathematical Derivation

For slit A (position `+d/2` from center):
$$AP^2 = D^2 + \left(x - \frac{d}{2}\right)^2 \quad \cdots (i)$$

For slit B (position `−d/2` from center):
$$BP^2 = D^2 + \left(x + \frac{d}{2}\right)^2 \quad \cdots (ii)$$

Subtracting (i) from (ii):
$$BP^2 - AP^2 = \left[D^2 + \left(x + \frac{d}{2}\right)^2\right] - \left[D^2 + \left(x - \frac{d}{2}\right)^2\right]$$

$$BP^2 - AP^2 = \left(x + \frac{d}{2}\right)^2 - \left(x - \frac{d}{2}\right)^2$$

Expanding using `(a+b)² - (a-b)² = 4ab`:
$$BP^2 - AP^2 = 4 \cdot x \cdot \frac{d}{2} = 2xd$$

Factoring the left side: `(BP - AP)(BP + AP) = 2xd`

Since `D >> x, d`, we have approximately `BP ≈ AP ≈ D`, so:
$$BP + AP \approx 2D$$

Therefore:
$$BP - AP = \frac{2xd}{BP + AP} = \frac{2xd}{2D} = \frac{xd}{D}$$

$$\boxed{\text{Path difference} = BP - AP = \frac{xd}{D}}$$

### Phase Difference

$$\delta = \frac{2\pi}{\lambda} \times \frac{xd}{D}$$

---

## 4. Conditions for Bright and Dark Fringes

### Bright Fringes (Constructive Interference)

Path difference = whole number multiple of wavelength:

$$\frac{x_n d}{D} = n\lambda \quad \text{where } n = 0, 1, 2, 3, \ldots$$

$$\boxed{x_n = \frac{n\lambda D}{d}}$$

| Order `n` | Position `xₙ` | Fringe |
|-----------|--------------|--------|
| 0 | `x₀ = 0` | Central bright fringe |
| 1 | `x₁ = λD/d` | 1st bright fringe |
| 2 | `x₂ = 2λD/d` | 2nd bright fringe |
| 3 | `x₃ = 3λD/d` | 3rd bright fringe |
| n | `xₙ = nλD/d` | nth bright fringe |

### Dark Fringes (Destructive Interference)

Path difference = odd multiple of half wavelength:

$$\frac{x_n d}{D} = (2n+1)\frac{\lambda}{2} \quad \text{where } n = 0, 1, 2, 3, \ldots$$

$$\boxed{x_n = \frac{(2n+1)\lambda D}{2d}}$$

| Order `n` | Position `xₙ` | Fringe |
|-----------|--------------|--------|
| 0 | `x₀ = λD/2d` | 1st dark fringe |
| 1 | `x₁ = 3λD/2d` | 2nd dark fringe |
| 2 | `x₂ = 5λD/2d` | 3rd dark fringe |
| 3 | `x₃ = 7λD/2d` | 4th dark fringe |

---

## 5. Fringe Width (β)

### Definition

> **Fringe width** `β` is the distance between **two consecutive bright (or dark) fringes**.

### Derivation

Distance of nth bright fringe: `xₙ = nλD/d`  
Distance of (n+1)th bright fringe: `xₙ₊₁ = (n+1)λD/d`

Fringe width:
$$\beta = x_{n+1} - x_n = \frac{(n+1)\lambda D}{d} - \frac{n\lambda D}{d} = \frac{\lambda D}{d}$$

$$\boxed{\beta = \frac{\lambda D}{d}}$$

### Verification with Dark Fringes

Distance of nth dark fringe: `xₙ = (2n+1)λD/2d`  
Distance of (n+1)th dark fringe: `xₙ₊₁ = (2(n+1)+1)λD/2d = (2n+3)λD/2d`

$$\beta = x_{n+1} - x_n = \frac{(2n+3)\lambda D}{2d} - \frac{(2n+1)\lambda D}{2d} = \frac{2\lambda D}{2d} = \frac{\lambda D}{d}$$

Same result ✓ — bright and dark fringe widths are equal.

### Properties of Fringe Width

$$\beta = \frac{\lambda D}{d}$$

1. **β ∝ λ:** Fringe width is directly proportional to wavelength → wider fringes for longer wavelengths (red > violet)
2. **β ∝ D:** Fringe width is directly proportional to distance of screen from slits → moving screen farther gives wider fringes
3. **β ∝ 1/d:** Fringe width is inversely proportional to slit separation → slits closer together give wider fringes

---

## 6. Analytical Treatment and Intensity

Using the analytical result from Topic 03:
$$I = 4a^2\cos^2\frac{\delta}{2}$$

Substituting `δ = (2π/λ)(xd/D)`:
$$I = 4a^2\cos^2\left(\frac{\pi x d}{\lambda D}\right)$$

At `x = 0` (center C): `I = 4a²` → **maximum** ✓  
At `x = λD/2d`: `cos²(π/2) = 0` → `I = 0` → **dark** ✓

### Intensity Pattern

```
 I ↑
4a²│    ╭─╮     ╭─╮     ╭─╮     ╭─╮     ╭─╮
   │   / │ \   / │ \   / │ \   / │ \   / │ \
   │  /  │  \ /  │  \ /  │  \ /  │  \ /  │  \
 0 │──┴──────┴───────┴───────┴───────┴──────┴──→ x
   -2β  -β   -β/2  0  β/2   β    3β/2  2β
       (dark)(dark) (center) (dark) (dark)
         ↑         ↑   ↑   ↑         ↑
       dark      dark bright dark   dark
```

---

## 7. Properties of Interference Fringes

1. **Equally spaced:** All bright and dark fringes have the **same width** `β = λD/d`
2. **Alternating:** Bright and dark fringes alternate regularly on both sides of the center
3. **Bright center:** The central fringe `(x = 0)` is always **bright** (zero path difference)
4. **Same width for bright and dark:** Breadth of a bright fringe equals breadth of a dark fringe, both equal `λD/2d`
5. **Independent of order:** Fringe width does NOT depend on the fringe order `n`
6. **Symmetric about center:** Pattern is symmetric about the central bright fringe
7. **Monochromatic → sharp fringes:** With white light, the central fringe is white, flanked by colored fringes (not sharp)

---

## 8. Determining Wavelength of Light

From the fringe width formula:
$$\beta = \frac{\lambda D}{d}$$

$$\boxed{\lambda = \frac{\beta d}{D}}$$

**Procedure:**
1. Set up the Young's double-slit arrangement
2. Measure the fringe width `β` (distance between consecutive bright fringes)
3. Measure `D` (distance from slits to screen) with a meter rule
4. Measure `d` (slit separation) with a microscope or traveling microscope
5. Calculate: `λ = βd/D`

**Typical values for sodium light:**
- `λ ≈ 589 nm`
- `d ≈ 0.5 mm`
- `D ≈ 1 m`
- `β ≈ 589 × 10⁻⁹ × 1 / (0.5 × 10⁻³) ≈ 1.18 mm`

---

## 9. Worked Examples

### Example 1: Finding Wavelength (from notes)

**Problem:** In a Young's double slit experiment, the separation between sources is `d = 0.18 mm`. The fringes are observed on a screen `D = 90 cm` away. With certain monochromatic light, the third bright fringe is at a distance of `8.1 mm` from the central bright fringe. Find the wavelength of light.

**Solution:**

Given:
- `xₙ = 8.1 mm = 8.1 × 10⁻³ m`
- `d = 0.18 mm = 0.18 × 10⁻³ m`
- `n = 3`
- `D = 90 cm = 900 mm`

Using:
$$x_n = \frac{n\lambda D}{d}$$
$$\lambda = \frac{x_n \cdot d}{n \cdot D} = \frac{8.1 \times 0.18}{3 \times 900} \text{ mm}$$
$$\lambda = \frac{1.458}{2700} = 5.4 \times 10^{-4} \text{ mm} = 5400 \text{ Å}$$

$$\boxed{\lambda = 5400 \text{ Å} = 540 \text{ nm}}$$

This is in the **green-yellow** region of the visible spectrum. ✓

---

### Example 2: Slit Separation (from notes)

**Problem:** Green light of wavelength `λ = 5100 Å` from a narrow slit is incident on a double slit. If the overall separation of 10 fringes on a screen `200 cm` away is `2 cm`, find the slit separation.

**Solution:**

Given:
- `λ = 5100 Å = 5100 × 10⁻¹⁰ m`
- `D = 200 cm = 2 m`
- `10β = 2 cm` → `β = 0.2 cm = 0.002 m`

Using:
$$\beta = \frac{\lambda D}{d} \quad \Rightarrow \quad d = \frac{\lambda D}{\beta}$$
$$d = \frac{5100 \times 10^{-10} \times 2}{0.002}$$
$$d = \frac{1020 \times 10^{-9}}{0.002} = 5.1 \times 10^{-4} \text{ m}$$

$$\boxed{d = 0.51 \text{ mm}}$$

---

### Example 3: Finding Fringe Width

**Problem:** In a Young's double slit experiment, the slit separation is `d = 1 mm`, screen distance is `D = 2 m`, and sodium light of wavelength `λ = 589 nm` is used. Find: (a) fringe width, (b) position of 5th bright fringe, (c) position of 3rd dark fringe.

**Solution:**

**(a) Fringe width:**
$$\beta = \frac{\lambda D}{d} = \frac{589 \times 10^{-9} \times 2}{1 \times 10^{-3}} = 1.178 \times 10^{-3} \text{ m} \approx 1.18 \text{ mm}$$

**(b) 5th bright fringe (n = 5):**
$$x_5 = \frac{5\lambda D}{d} = 5\beta = 5 \times 1.178 = 5.89 \text{ mm}$$

**(c) 3rd dark fringe (n = 2, since n starts from 0):**
$$x_3 = \frac{(2 \times 2 + 1)\lambda D}{2d} = \frac{5\lambda D}{2d} = \frac{5}{2}\beta = 2.5 \times 1.178 = 2.95 \text{ mm}$$

---

### Example 4: Show bright and dark fringe separation is equal

**Proof:**

Distance between consecutive bright fringes (n and n+1):
$$\beta_{bright} = x_{n+1} - x_n = \frac{(n+1)\lambda D}{d} - \frac{n\lambda D}{d} = \frac{\lambda D}{d}$$

Distance between consecutive dark fringes (n and n+1, using `xₙ = (2n+1)λD/2d`):
$$\beta_{dark} = x_{n+1} - x_n = \frac{(2(n+1)+1)\lambda D}{2d} - \frac{(2n+1)\lambda D}{2d} = \frac{2\lambda D}{2d} = \frac{\lambda D}{d}$$

$$\boxed{\beta_{bright} = \beta_{dark} = \frac{\lambda D}{d}}$$

Distance between any two bright fringes = Distance between any two dark fringes ✓

---

## 10. Online References

- 📘 [HyperPhysics — Young's Experiment](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/slits.html)
- 📘 [Khan Academy — Double Slit Experiment](https://www.khanacademy.org/science/physics/light-waves/interference-of-light-waves/a/youngs-double-slit-experiment)
- 📘 [MIT OCW — Double Slit Interference](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/)
- 📘 [LibreTexts — Young's Double-Slit Interference](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/03%3A_Interference/3.03%3A_Young%27s_Double-Slit_Interference)
- 📘 [NCERT — Young's Experiment](https://ncert.nic.in/textbook.php?leph2=10-10)
- 📘 [PhET Simulation — Wave Interference](https://phet.colorado.edu/en/simulations/wave-interference)

---

*← [Interference Theory](../03_interference/README.md) | Back to [Main Index](../README.md) | Next: [Fresnel's Biprism →](../05_fresnel_biprism/README.md)*
