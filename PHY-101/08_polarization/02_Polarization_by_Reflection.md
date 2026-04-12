# 02 — Polarization by Reflection

> **Course:** Physics — Optics Unit
> **Topic:** Polarization by Reflection
> **Date:** April 11, 2026
> **Syllabus Reference:** Topic 2 of 8

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Phenomenon of Polarization by Reflection](#2-phenomenon-of-polarization-by-reflection)
3. [Plane of Incidence and Components of E-field](#3-plane-of-incidence-and-components-of-e-field)
4. [Fresnel's Equations for Reflection](#4-fresnels-equations-for-reflection)
5. [Degree of Polarization by Reflection](#5-degree-of-polarization-by-reflection)
6. [Pile-of-Plates Polarizer](#6-pile-of-plates-polarizer)
7. [Physical Explanation (Dipole Radiation Model)](#7-physical-explanation-dipole-radiation-model)
8. [Applications](#8-applications)
9. [Worked Examples](#9-worked-examples)
10. [Summary](#10-summary)
11. [References & Further Reading](#11-references--further-reading)

---

## 1. Introduction

When light strikes a surface between two media (e.g., air-glass, air-water), it is **partially reflected** and **partially refracted**. A key consequence of this interaction is that the **reflected light becomes partially or completely polarized**, even if the incident light is unpolarized.

This phenomenon was first discovered by **Étienne-Louis Malus** in 1808 while observing sunlight reflected from the windows of the Palais du Luxembourg in Paris through a calcite crystal.

> **Key Principle:** Polarization by reflection arises from the anisotropic nature of the interaction of transverse EM waves with a dielectric surface. The two polarization components (p and s) are reflected with different efficiencies.

---

## 2. Phenomenon of Polarization by Reflection

### Definitions

- **s-polarization (senkrecht — German for "perpendicular"):** Electric field vector **perpendicular** to the plane of incidence (also called TE — transverse electric)
- **p-polarization (parallel):** Electric field vector **parallel** to the plane of incidence (also called TM — transverse magnetic)
- **Plane of incidence:** The plane containing the incident ray, reflected ray, and the surface normal

### What Happens at the Interface?

```
                    Normal
                      |
                      |
     Incident ray     |     Reflected ray
       (unpolarized)  |     (partially polarized)
           ↘          |          ↗
            \    θᵢ  |  θᵣ    /
             \       |       /
              \      |      /
  ─────────────\─────┼─────/────────── Interface
                \    |    /
                 \   |   /
                  ↘  |  ↙
              Refracted ray
          (partially polarized,
           mostly p-component)

  NOTE: θᵢ = θᵣ (angle of reflection = angle of incidence)
```

### Key Observation

When unpolarized light reflects off a surface:
- The **s-component** (perpendicular to plane of incidence) is reflected **more strongly**
- The **p-component** (parallel to plane of incidence) is reflected **less strongly**
- Therefore, reflected light is **richer in s-polarization** → **partially horizontally polarized**
- The refracted (transmitted) light is **richer in p-polarization** → **partially vertically polarized**

At a **specific angle of incidence** (Brewster's angle), the **p-component is not reflected at all** → reflected beam is **100% s-polarized** (completely polarized).

---

## 3. Plane of Incidence and Components of E-field

Any electric field $\vec{E}$ of incident light can be decomposed into:

$$\vec{E}_{incident} = E_s\hat{s} + E_p\hat{p}$$

where:
- $\hat{s}$ = unit vector perpendicular to the plane of incidence
- $\hat{p}$ = unit vector parallel to the plane of incidence (and perpendicular to propagation)

For unpolarized light: $|E_s|^2 = |E_p|^2$ (on average)

```
  Plane of incidence (contains incident, reflected, refracted rays + normal)

                      Normal ↑
                             |
             Eₛ (out of page ⊙)
                             |
          ←Eₚ (in-plane component)
                             |
  ──────────────────────────────────────────── Surface
```

---

## 4. Fresnel's Equations for Reflection

**Fresnel's equations** give the reflection amplitudes for s and p components.

Let $n_1$ = refractive index of incident medium, $n_2$ = refractive index of refracting medium, $\theta_i$ = angle of incidence, $\theta_t$ = angle of refraction.

### 4.1 Reflection Coefficients (amplitude)

**For s-polarization (rs):**

$$r_s = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}$$

**For p-polarization (rp):**

$$r_p = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t}$$

### 4.2 Reflectance (intensity)

**For s-polarization:**

$$R_s = |r_s|^2 = \left(\frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}\right)^2$$

**For p-polarization:**

$$R_p = |r_p|^2 = \left(\frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t}\right)^2$$

### 4.3 Transmittance (intensity)

$$T_s = 1 - R_s, \quad T_p = 1 - R_p$$

### 4.4 At Normal Incidence ($\theta_i = 0$)

Both equations reduce to:
$$R = \left(\frac{n_1 - n_2}{n_1 + n_2}\right)^2$$

**Example:** For air-glass ($n_1=1$, $n_2=1.5$):
$$R = \left(\frac{1 - 1.5}{1 + 1.5}\right)^2 = \left(\frac{-0.5}{2.5}\right)^2 = (0.2)^2 = 0.04 = 4\%$$

For air-water ($n=4/3$):
$$R = \left(\frac{1 - 4/3}{1 + 4/3}\right)^2 = \left(\frac{-1/3}{7/3}\right)^2 = \left(\frac{1}{7}\right)^2 \approx 2\%$$

---

## 5. Degree of Polarization by Reflection

The **degree of polarization (DOP)** of the reflected beam:

$$P = \frac{R_s - R_p}{R_s + R_p}$$

| $\theta_i$ | $R_s$ vs $R_p$ | DOP | Comment |
|------------|---------------|-----|---------|
| $0°$ | $R_s = R_p$ | $P = 0$ | Unpolarized reflection |
| Brewster's angle $\theta_B$ | $R_p = 0$ | $P = 1$ | Completely s-polarized |
| $90°$ | $R_s = R_p = 1$ | $P = 0$ | Grazing incidence |

### Reflectance vs Angle (Air-Glass, n=1.5)

```
  Reflectance
  R (%)
  100% |                              Rs
       |                         ___/
       |                      __/
    50%|                   __/
       |                 _/
       |    ___Rp____--              
     4%|___/        ↑ Brewster's angle (~56.3°)
       |              Rp → 0
       0°   30°   56.3°  90°   → Angle of incidence θᵢ
```

---

## 6. Pile-of-Plates Polarizer

Polarization by reflection is used practically in the **pile-of-plates polarizer**:

```
  Unpolarized light →  [Plate1][Plate2][Plate3]...[PlateN]
                           ↓
               Each plate reflects s-component
               Transmitted beam loses s-component progressively
                           ↓
               After N plates: mostly p-polarized beam

  s-component reflected away at each surface
  p-component transmitted through all plates
```

**Calculation for N plates at Brewster's angle:**

At Brewster's angle, $R_p = 0$, so all p-light is transmitted. For s-light with reflectance $R_s$ per surface and $2N$ surfaces (N glass plates, each with 2 surfaces):

$$T_s^{(N)} = (1 - R_s)^{2N}$$

For glass ($n=1.5$) at Brewster's angle, $R_s \approx 0.15$:

$$T_s^{(N)} = (0.85)^{2N}$$

For $N = 10$ plates: $T_s = (0.85)^{20} \approx 0.039 = 3.9\%$ (s-component almost eliminated)

---

## 7. Physical Explanation (Dipole Radiation Model)

**Why does the p-component vanish at Brewster's angle?**

When light hits a dielectric surface:
1. The oscillating electric field of the incident wave **drives dipole oscillations** in the surface material
2. These oscillating dipoles act as **antennas** that re-radiate (emit) the reflected light
3. A **dipole does not radiate along its own axis** (zero intensity in the axial direction)

At Brewster's angle $\theta_B$:
- The reflected ray and refracted ray are **perpendicular** to each other ($\theta_i + \theta_t = 90°$)
- The p-component dipoles oscillate **along the direction of the reflected ray**
- Therefore, no p-component can be emitted in the reflected direction
- **Only s-component is reflected**

```
  At Brewster's Angle:

          Reflected ray
              ↗     ←— s-polarized ONLY (no p)
             /
            /  θB
  ─────────────────────────────
            \  (90° - θB)
             \
              ↘
          Refracted ray     ← p-dipoles oscillate here
         (90° to reflected) ← Can't radiate back along reflected direction
```

---

## 8. Applications

| Application | How Reflection Polarization is Used |
|-------------|-------------------------------------|
| **Polaroid sunglasses** | Block horizontally polarized glare from roads, water, snow |
| **Photography** | Circular polarizing filter reduces reflections from glass/water |
| **Glare reduction** | Reduces eye strain in bright outdoor conditions |
| **Brewster windows in lasers** | Select specific polarization in laser cavities |
| **Reflection spectroscopy** | Polarized reflectance reveals material properties |
| **Glassblowing inspection** | Stress birefringence visible under polarized light |

### Polaroid Sunglasses Explanation

```
  Sun (unpolarized light)
         ↓
  [Reflected from horizontal road surface]
         ↓
  Partially polarized: mostly horizontal (s-component)
         ↓
  [Polaroid lens with VERTICAL transmission axis]
         ↓
  Blocks horizontal component → Glare reduced!
```

---

## 9. Worked Examples

### Example 1: Reflectance at Normal Incidence

**Problem:** Calculate the reflectance of light at normal incidence on a glass-air interface. Given $n_{glass} = 1.52$.

**Solution:**

$$R = \left(\frac{n_1 - n_2}{n_1 + n_2}\right)^2 = \left(\frac{1.52 - 1.00}{1.52 + 1.00}\right)^2 = \left(\frac{0.52}{2.52}\right)^2$$

$$R = (0.2063)^2 = 0.0426 \approx 4.26\%$$

> **Answer:** About 4.3% of light is reflected at normal incidence.

---

### Example 2: Fresnel equations at 45°

**Problem:** Light travels from air ($n_1 = 1$) to glass ($n_2 = 1.5$) at $\theta_i = 45°$. Find $\theta_t$, $R_s$, and $R_p$.

**Step 1: Snell's law**
$$n_1\sin\theta_i = n_2\sin\theta_t$$
$$\sin\theta_t = \frac{1 \times \sin 45°}{1.5} = \frac{0.7071}{1.5} = 0.4714$$
$$\theta_t = \arcsin(0.4714) = 28.13°$$

**Step 2: Compute cosines**
$$\cos\theta_i = \cos 45° = 0.7071$$
$$\cos\theta_t = \cos 28.13° = 0.8819$$

**Step 3: Apply Fresnel equations**

$$r_s = \frac{1(0.7071) - 1.5(0.8819)}{1(0.7071) + 1.5(0.8819)} = \frac{0.7071 - 1.3229}{0.7071 + 1.3229} = \frac{-0.6158}{2.03} = -0.3034$$

$$R_s = r_s^2 = 0.0920 \approx 9.2\%$$

$$r_p = \frac{1.5(0.7071) - 1(0.8819)}{1.5(0.7071) + 1(0.8819)} = \frac{1.0607 - 0.8819}{1.0607 + 0.8819} = \frac{0.1788}{1.9426} = 0.0920$$

$$R_p = r_p^2 = 0.00846 \approx 0.85\%$$

> **Answer:** $R_s \approx 9.2\%$, $R_p \approx 0.85\%$. The reflected beam is dominantly s-polarized.

**Degree of polarization:**
$$P = \frac{R_s - R_p}{R_s + R_p} = \frac{0.0920 - 0.00846}{0.0920 + 0.00846} = \frac{0.0835}{0.1005} \approx 0.83$$

---

### Example 3: Number of plates for 90% polarization

**Problem:** How many glass plates (each with $R_s = 0.15$ per surface at Brewster's angle) are needed so that the s-component transmitted is less than 5%?

**Solution:**

$$T_s = (1 - R_s)^{2N} = (0.85)^{2N} < 0.05$$

Taking logarithm:
$$2N \ln(0.85) < \ln(0.05)$$
$$2N \times (-0.1625) < -2.996$$
$$2N > \frac{2.996}{0.1625} = 18.43$$
$$N > 9.22$$

> **Answer:** Need at least **10 glass plates** to reduce s-component below 5%.

---

## 10. Summary

```
  POLARIZATION BY REFLECTION — KEY POINTS

  ┌────────────────────────────────────────────────────────────┐
  │                                                            │
  │  1. Reflected light is partially or fully polarized        │
  │  2. s-component (⊥ to plane of incidence) reflects more   │
  │  3. p-component (∥ to plane of incidence) reflects less    │
  │  4. At Brewster's angle: Rp = 0, reflected beam is 100%   │
  │     s-polarized (completely polarized)                     │
  │  5. Fresnel equations quantify Rₛ and Rₚ at any angle     │
  │  6. Pile-of-plates can enhance polarization by refraction  │
  │  7. Physical basis: Dipole cannot radiate along its axis   │
  │                                                            │
  │  Formula:   tan(θB) = n₂/n₁  (Brewster's Law)            │
  │                                                            │
  └────────────────────────────────────────────────────────────┘
```

---

## 11. References & Further Reading

| Resource | Link |
|----------|------|
| OpenStax University Physics — Polarization | https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/01:_The_Nature_of_Light/1.08:_Polarization |
| Feynman Lectures Vol. I Ch. 33 | https://www.feynmanlectures.caltech.edu/I_33.html |
| Wikipedia — Fresnel Equations | https://en.wikipedia.org/wiki/Fresnel_equations |
| Wikipedia — Polarization by Reflection | https://en.wikipedia.org/wiki/Polarization_by_reflection |
| HyperPhysics — Fresnel Equations | http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/freseq.html |
| University of Toronto Polarization Lab | https://www.physics.utoronto.ca/~phy224_324/LabManuals/PolarizationOfLight.pdf |

---

*← [01 — Polarization](./01_Polarization.md) | [03 — Brewster's Law →](./03_Brewsters_Law.md)*

---
*Notes compiled for university physics coursework — April 11, 2026*
