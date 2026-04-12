# 03 — Brewster's Law

> **Course:** Physics — Optics Unit
> **Topic:** Brewster's Law
> **Date:** April 11, 2026
> **Syllabus Reference:** Topic 3 of 8

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Statement of Brewster's Law](#2-statement-of-brewsters-law)
3. [Derivation of Brewster's Law](#3-derivation-of-brewsters-law)
4. [Geometric Construction at Brewster's Angle](#4-geometric-construction-at-brewsters-angle)
5. [Brewster's Angle for Common Materials](#5-brewsters-angle-for-common-materials)
6. [Proof from Fresnel's Equations](#6-proof-from-fresnels-equations)
7. [Polarization State of Reflected and Refracted Beams](#7-polarization-state-of-reflected-and-refracted-beams)
8. [Brewster Windows in Lasers](#8-brewster-windows-in-lasers)
9. [Worked Examples](#9-worked-examples)
10. [Common Misconceptions](#10-common-misconceptions)
11. [Summary](#11-summary)
12. [References & Further Reading](#12-references--further-reading)

---

## 1. Introduction

In 1815, Scottish physicist **Sir David Brewster** (1781–1868) discovered that at a specific angle of incidence, the reflected light from a surface becomes **completely plane-polarized**. This angle is now called **Brewster's angle** or the **polarizing angle**.

Brewster's law is an empirical relation that predicts this special angle from the refractive indices of the two media. It is one of the most elegant results in optics and is the basis for many practical polarizing devices.

> **Discovery:** Brewster noticed that for a specific angle of incidence, the reflected light was completely polarized while the refracted light was only partially polarized. He further observed this "polarizing angle" depended on the material of the reflecting surface.

**Image Reference:**
![Brewster's Angle Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Brewster%27s_Angle.svg/400px-Brewster%27s_Angle.svg.png)
*Source: Wikimedia Commons — Brewster's Angle Diagram*

---

## 2. Statement of Brewster's Law

> **Brewster's Law:** The tangent of the polarizing angle (Brewster's angle) $\theta_B$ equals the ratio of the refractive indices of the second medium to the first medium.

$$\boxed{\tan\theta_B = \frac{n_2}{n_1}}$$

Where:
- $\theta_B$ = Brewster's angle (angle of incidence at which reflected light is completely polarized)
- $n_1$ = refractive index of the medium of incidence
- $n_2$ = refractive index of the refracting medium

**For incidence from air ($n_1 = 1$):**

$$\boxed{\tan\theta_B = n}$$

where $n = n_2$ is the refractive index of the refracting medium.

---

## 3. Derivation of Brewster's Law

### Method 1: From the Perpendicularity Condition

**Key observation:** At Brewster's angle, the reflected ray and refracted ray are **perpendicular** to each other.

Let:
- $\theta_B$ = Brewster's angle of incidence
- $\theta_r$ = angle of refraction
- $\theta_{refl}$ = angle of reflection = $\theta_B$ (law of reflection)

At Brewster's angle:
$$\theta_{refl} + \theta_r = 90°$$
$$\theta_B + \theta_r = 90°$$
$$\theta_r = 90° - \theta_B$$

Applying **Snell's Law**:
$$n_1\sin\theta_B = n_2\sin\theta_r$$
$$n_1\sin\theta_B = n_2\sin(90° - \theta_B)$$
$$n_1\sin\theta_B = n_2\cos\theta_B$$

Dividing both sides by $n_1\cos\theta_B$:

$$\frac{\sin\theta_B}{\cos\theta_B} = \frac{n_2}{n_1}$$

$$\boxed{\tan\theta_B = \frac{n_2}{n_1}}$$

**This is Brewster's Law.** ✓

---

### Geometric Diagram of Derivation

```
                    Normal
                      │
                      │
    Incident ray      │      Reflected ray
       ↘          θB  │  θB      ↗
        \             │         /
         \            │        /
          \           │       /
  ─────────\──────────┼──────/────────────── Interface
            \         │     /
             \        │    /
              \       │   /
               \      │  /
            θr  \     │ /
                 \    │/
                  ↘   
              Refracted ray

  At Brewster's angle:  θB + θr = 90°
  ∴ Reflected ray ⊥ Refracted ray
```

---

### Method 2: Physical Justification (Dipole Radiation)

At Brewster's angle, the **refracted wave drives dipole oscillations** in the medium that are directed **exactly along** the direction of the would-be reflected ray.

A dipole oscillating along direction $\hat{d}$ cannot emit radiation in that direction (zero intensity along the axis). Therefore, the p-component (which would require radiation along the reflected ray direction) is completely absent in the reflection.

$$\text{If } \theta_B + \theta_t = 90° \Rightarrow \theta_t = 90° - \theta_B$$

The refracted (transmitted) wave travels at angle $\theta_t$ from normal. For p-polarization, the dipoles in the medium oscillate **parallel to the refracted ray**. The direction of the reflected ray is exactly the direction of these dipole axes. Since dipoles don't radiate along their axis → **no p-polarized reflection at Brewster's angle**.

---

## 4. Geometric Construction at Brewster's Angle

```
  BREWSTER'S ANGLE — GEOMETRIC PICTURE

                          Normal
                            │
               θB           │           θB
  ─────────────────────────┼────────────────────
                            │   ↖ Reflected (s-only)
                            │
                     θr = (90°-θB)
                            │
                            ↓ Refracted (mostly p)

  NOTE: The reflected ray (going up-right) and
        refracted ray (going down) are at 90° to each other.

  Vector diagram:
  
  n₁ = 1 (air above)
  n₂ = n (glass below)
  
  tan(θB) = n₂/n₁ = n
  
  For glass (n=1.5): θB = arctan(1.5) = 56.3°
  For water (n=1.33): θB = arctan(1.33) = 53.1°
```

---

## 5. Brewster's Angle for Common Materials

Using $\theta_B = \arctan(n_2/n_1)$ with light incident from air ($n_1 = 1.000$):

| Material | Refractive Index $n$ | Brewster's Angle $\theta_B$ |
|----------|---------------------|---------------------------|
| Water | 1.333 | 53.13° |
| Crown glass | 1.517 | 56.57° |
| Flint glass | 1.62 | 58.30° |
| Diamond | 2.417 | 67.52° |
| Silicon | 3.48 | 74.00° |
| Calcite (ordinary) | 1.658 | 58.88° |
| Quartz | 1.544 | 57.03° |
| Ice | 1.309 | 52.56° |

**Calculation for Crown Glass:**

$$\theta_B = \arctan\left(\frac{1.517}{1.000}\right) = \arctan(1.517) = 56.57°$$

**Verification (Snell's law + perpendicularity):**

$$\theta_r = 90° - 56.57° = 33.43°$$

Check Snell's law:
$$n_1\sin\theta_B = 1.000 \times \sin(56.57°) = 1.000 \times 0.8348 = 0.8348$$
$$n_2\sin\theta_r = 1.517 \times \sin(33.43°) = 1.517 \times 0.5506 = 0.8353 \approx 0.835 \checkmark$$

---

## 6. Proof from Fresnel's Equations

From Fresnel's equations, the reflection coefficient for p-polarization is:

$$r_p = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t}$$

$r_p = 0$ when:
$$n_2\cos\theta_i = n_1\cos\theta_t \quad \cdots (1)$$

From Snell's Law:
$$n_1\sin\theta_i = n_2\sin\theta_t \quad \cdots (2)$$

**Dividing (2) by (1):**

$$\frac{n_1\sin\theta_i}{n_2\cos\theta_i} = \frac{n_2\sin\theta_t}{n_1\cos\theta_t}$$

$$\frac{n_1}{n_2}\tan\theta_i = \frac{n_2}{n_1}\tan\theta_t$$

$$\tan\theta_i \cdot \tan\theta_t = \left(\frac{n_2}{n_1}\right)^2 \cdot \frac{n_1^2}{n_2^2} = 1$$

$$\tan\theta_i \cdot \tan\theta_t = 1$$

This means:
$$\tan\theta_t = \cot\theta_i = \tan(90° - \theta_i)$$
$$\theta_t = 90° - \theta_i$$
$$\theta_i + \theta_t = 90°$$

This confirms the **perpendicularity of reflected and refracted rays at Brewster's angle**. ✓

Then from Snell's Law with $\theta_t = 90° - \theta_i$:

$$\tan\theta_i = \frac{n_2}{n_1} \Rightarrow \tan\theta_B = \frac{n_2}{n_1} \quad \checkmark$$

---

## 7. Polarization State of Reflected and Refracted Beams

At Brewster's angle:

| Beam | Polarization State |
|------|-------------------|
| Reflected | **100% s-polarized** (perpendicular to plane of incidence) |
| Refracted | **Partially polarized** (rich in p-component but not 100%) |

**Why is the refracted beam not 100% p-polarized?**

Only a small fraction of the incident p-component is reflected (zero at Brewster's angle), but the s-component is also mostly transmitted. The refracted beam contains *all* of the transmitted s-component plus all the p-component. Since only a fraction of the s-component is reflected, the majority passes through → refracted beam has both components, with p-component dominant.

```
                        Incident (unpolarized)
                        Intensity = I₀
                        s-component: I₀/2
                        p-component: I₀/2
                              │
                  ────────────┼──────────────
                Reflected     │     Refracted
                              │
             s-only (fully     p-dominant (partial)
             polarized)       
             Iᵣ = Rs × I₀/2   Iₜ = (1-Rp)×I₀/2 + (1-Rs)×I₀/2
                              ≈ I₀/2 + (1-Rs)×I₀/2
             Rp = 0 at θB
```

---

## 8. Brewster Windows in Lasers

One of the most important applications of Brewster's Law is the **Brewster window** in laser cavities.

```
  LASER CAVITY WITH BREWSTER WINDOWS

  [Mirror] ───────── [Gas tube] ───────── [Mirror]
              ↗ θB              ↗ θB
             Window1            Window2
             (at Brewster       (at Brewster
              angle)             angle)

  P-polarized light passes through with ZERO reflection loss
  S-polarized light is partially reflected at each surface
  After many round trips: only p-polarized light survives
  → Laser outputs linearly (p-)polarized light
```

**Advantage:** Maximum light throughput for p-polarization with no anti-reflection coating needed.

For a HeNe laser with glass windows at Brewster's angle:
$$\theta_B = \arctan(1.52) \approx 56.7°$$

The window is tilted at this exact angle to eliminate reflection loss for one polarization.

---

## 9. Worked Examples

### Example 1: Basic Brewster's angle calculation

**Problem:** A beam of light travels from air into water ($n = 1.333$). At what angle of incidence is the reflected beam completely polarized?

**Solution:**

$$\tan\theta_B = \frac{n_2}{n_1} = \frac{1.333}{1.000} = 1.333$$

$$\theta_B = \arctan(1.333) = 53.1°$$

Also, angle of refraction:
$$\theta_t = 90° - 53.1° = 36.9°$$

> **Answer:** Brewster's angle for water is **53.1°**, and at this angle the reflected beam is completely s-polarized.

---

### Example 2: Brewster's angle at glass-water interface

**Problem:** Light travels from glass ($n_1 = 1.52$) into water ($n_2 = 1.33$). Find the Brewster angle.

**Solution:**

$$\tan\theta_B = \frac{n_2}{n_1} = \frac{1.33}{1.52} = 0.8750$$

$$\theta_B = \arctan(0.875) = 41.2°$$

> **Answer:** $\theta_B = 41.2°$ (note: this is measured from the normal in the glass medium)

---

### Example 3: Finding refractive index from Brewster's angle

**Problem:** The Brewster's angle for a transparent material is found to be 58°. What is the refractive index of the material (light incident from air)?

**Solution:**

$$\tan\theta_B = n$$
$$n = \tan(58°) = 1.6003$$

> **Answer:** $n \approx 1.60$ (consistent with dense flint glass)

---

### Example 4: Reflectance of the s-component at Brewster's angle

**Problem:** For light from air ($n_1=1$) hitting glass ($n_2=1.5$) at Brewster's angle ($\theta_B = 56.31°$), find the reflectance of the s-component.

**Solution:**

$\theta_B = 56.31°$, $\theta_t = 90° - 56.31° = 33.69°$

$$r_s = \frac{n_1\cos\theta_B - n_2\cos\theta_t}{n_1\cos\theta_B + n_2\cos\theta_t}$$

$$= \frac{1 \times \cos(56.31°) - 1.5 \times \cos(33.69°)}{1 \times \cos(56.31°) + 1.5 \times \cos(33.69°)}$$

$$= \frac{0.5547 - 1.5(0.8321)}{0.5547 + 1.5(0.8321)} = \frac{0.5547 - 1.2482}{0.5547 + 1.2482}$$

$$= \frac{-0.6935}{1.8029} = -0.3847$$

$$R_s = (0.3847)^2 = 0.1480 \approx 14.8\%$$

> **Answer:** At Brewster's angle, about **14.8%** of the s-polarized component is reflected (and 0% of p-component).

---

## 10. Common Misconceptions

| Misconception | Correction |
|---------------|------------|
| "The refracted beam is fully polarized at Brewster's angle" | Only the **reflected** beam is fully polarized; refracted is only partially polarized |
| "Brewster's angle works only for glass" | It works for **any interface** between two media with different refractive indices |
| "The reflected intensity is maximum at Brewster's angle" | At Brewster's angle, **Rp = 0** so total reflectance is actually reduced; Rₛ ≈ 15% |
| "Brewster's angle depends on wavelength significantly" | The dependence is weak (through dispersion of n), unlike diffraction phenomena |

---

## 11. Summary

```
  BREWSTER'S LAW — SUMMARY

  ┌────────────────────────────────────────────────────────────┐
  │                                                            │
  │  Law:         tan(θB) = n₂/n₁                            │
  │                                                            │
  │  Condition:   θB + θt = 90° (reflected ⊥ refracted)      │
  │                                                            │
  │  Reflected:   100% s-polarized (E ⊥ plane of incidence)  │
  │                                                            │
  │  Refracted:   Partially polarized (p-dominant)            │
  │                                                            │
  │  Physical:    Dipoles cannot radiate along their axis     │
  │                                                            │
  │  Application: Laser windows, sunglasses, polarimetry      │
  │                                                            │
  │  Examples:    Water: 53.1°  Glass: 56.3°  Diamond: 67.5° │
  │                                                            │
  └────────────────────────────────────────────────────────────┘
```

---

## 12. References & Further Reading

| Resource | Link |
|----------|------|
| Wikipedia — Brewster's Angle | https://en.wikipedia.org/wiki/Brewster%27s_angle |
| OpenStax University Physics — Polarization | https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/01:_The_Nature_of_Light/1.08:_Polarization |
| Feynman Lectures — Polarization by Reflection | https://www.feynmanlectures.caltech.edu/I_33.html |
| HyperPhysics — Brewster's Angle | http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/Brewangle.html |
| Washington University Lab Notes | https://web.physics.wustl.edu/introphys/Archives/SP13/POL.pdf |
| UCF — Brewster's Law | https://pressbooks.online.ucf.edu/osuniversityphysics3/chapter/polarization/ |
| Photonics Encyclopedia — Brewster's Angle | https://www.rp-photonics.com/brewsters_angle.html |

---

*← [02 — Polarization by Reflection](./02_Polarization_by_Reflection.md) | [04 — Double Refraction →](./04_Double_Refraction.md)*

---
*Notes compiled for university physics coursework — April 11, 2026*
