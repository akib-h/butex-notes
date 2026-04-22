# 🔬 Chapter 7: Diffraction of Light

> **Topics:** Diffraction Grating · Resolving Power · Dispersive Power · Zone Plate · Fraunhofer vs Fresnel · Bragg's Law

---

## Table of Contents
- [1. Diffraction – Introduction](#1-diffraction--introduction)
- [2. Fraunhofer vs Fresnel Diffraction](#2-fraunhofer-vs-fresnel-diffraction)
- [3. Diffraction Grating](#3-diffraction-grating)
- [4. Resolving Power of Diffraction Grating](#4-resolving-power-of-diffraction-grating)
- [5. Dispersive Power of Diffraction Grating](#5-dispersive-power-of-diffraction-grating)
- [6. Zone Plate](#6-zone-plate)
- [7. Bragg's Law](#7-braggs-law)
- [8. Difference: Interference vs Diffraction](#8-difference-interference-vs-diffraction)
- [9. Solved Numerical Problems](#9-solved-numerical-problems)
- [References](#references)

---

## 1. Diffraction – Introduction

### Q: Define diffraction. *(2017, 2023)*

**Diffraction** is the bending of waves around obstacles or through narrow openings, spreading into the geometrical shadow region.

```
  Without diffraction:       With diffraction:
  ─────┐  │  ┌─────         ─────┐  │  ┌─────
       │  │  │                   │ ╲ │ ╱ │
       │  ↓  │                   │  ↓↓↓  │
       │  ║  │                   │ ╱ │ ╲ │
  ─────┘     └─────         ─────┘  │  └─────
       Sharp shadow              Spread (diffracted) pattern
```

**Key conditions for observable diffraction:**
- The obstacle/slit size must be comparable to the wavelength of light
- $d \approx \lambda$ gives maximum diffraction

**Examples:**
- Spreading of sound around corners
- X-ray diffraction by crystals
- Colored rings around street lights (diffraction by water droplets)

---

## 2. Fraunhofer vs Fresnel Diffraction

### Q: Distinguish between Fresnel and Fraunhofer class of diffraction. *(2022)*

| Feature | Fresnel Diffraction | Fraunhofer Diffraction |
|---|---|---|
| Source distance | **Finite** (close) | **Infinite** (or focal plane of lens) |
| Screen distance | **Finite** | **Infinite** (or focal plane) |
| Wave front at slit | Spherical / cylindrical | **Plane** |
| Lenses required | No | Yes (to make wavefronts plane) |
| Mathematical treatment | Complex | Simpler |
| Example | Shadow of an edge | Single slit far field pattern |

```
  FRESNEL:                    FRAUNHOFER:
   S                          S → Lens → ║ → Lens → Screen
    ╲                                    ↑
     ║ ← slit                         Plane wavefront at slit
      ╲
       Screen (finite distance)
```

### Fraunhofer Diffraction (Single Slit)

```
  Intensity pattern:
  ↑
  │      █
  │     █ █
  │    █   █
  │   █     █   █       █
  │──█─────────█───────█───→ sin θ
     -3λ/a -λ/a  0  λ/a  3λ/a
         minima positions
```

Minima at: $a\sin\theta = n\lambda$ ($n = \pm1, \pm2, ...$)

Central maximum width: $\frac{2\lambda}{a}$ (in $\sin\theta$)

---

## 3. Diffraction Grating

### Q: Describe the use of a plane transmission grating to determine the wavelength of light. *(2022, 2017)*
### Q: Deduce the theory of plane diffraction grating for determination of wavelength. *(2017)*

### What is a Diffraction Grating?

A **diffraction grating** consists of a large number of equally spaced parallel slits (or rulings) on glass or metal. Transmission gratings allow light to pass through slits; reflection gratings reflect from ruled surfaces.

```
  ─────────────────────────
  │ │ │ │ │ │ │ │ │ │ │ │  ← grating (N slits, spacing d)
  ─────────────────────────
  ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
     Incident light (parallel)

  Each slit acts as a secondary source.
  Constructive interference in specific directions.
```

**Grating element (d):**
$$d = \frac{1}{\text{Number of lines per unit length}}$$

For a grating with $N$ lines per centimetre: $d = \frac{1}{N} \, \text{cm}$

### Grating Equation

For constructive interference (principal maxima) at angle $\theta$:

$$\boxed{d\sin\theta = n\lambda} \quad (n = 0, \pm1, \pm2, ...)$$

Where:
- $d$ = grating element (spacing between adjacent slits)
- $\theta$ = angle of diffraction
- $n$ = order of spectrum
- $\lambda$ = wavelength

**At normal incidence**, this simplifies to the standard grating equation above.

### Orders of Spectra

```
             n = +2 order  ──→ ×
             n = +1 order  ──→ ×         Colors spread out
             n = 0 (central) → ●
             n = -1 order  ──→ ×
             n = -2 order  ──→ ×
```

The **maximum order** observable:
$$n_{max} = \frac{d}{\lambda}$$

### Experimental Procedure to Find Wavelength

1. Set up spectrometer with grating at normal incidence
2. Find the angle $\theta_n$ for the $n$th order of the spectral line
3. Measure using telescope crosshair
4. Apply: $\lambda = \frac{d\sin\theta_n}{n}$

---

## 4. Resolving Power of Diffraction Grating

### Q: Define resolving power of grating. Show that resolving power = No. of lines × order of spectra. *(2022, 2020)*

### Rayleigh's Criterion

Two spectral lines of wavelengths $\lambda$ and $\lambda + d\lambda$ are just resolved when the principal maximum of one falls on the first minimum of the other.

```
  Intensity
     ↑
     │  ╱╲   ╱╲
     │ ╱  ╲ ╱  ╲
     │╱    ×    ╲  ← just resolved (Rayleigh limit)
     └──────────────→ wavelength
     λ  λ+dλ
```

### Resolving Power

$$RP = \frac{\lambda}{d\lambda}$$

Where $d\lambda$ is the minimum resolvable wavelength difference.

### Derivation: RP = nN

For a grating with $N$ total slits in the $n$th order:

**Position of principal maximum** for wavelength $\lambda$:
$$d\sin\theta = n\lambda$$

**Position of first minimum** adjacent to the $n$th order maximum:
The first minimum adjacent to the $n$th maximum of wavelength $\lambda$ occurs when total path difference = $(nN + 1)\frac{\lambda}{N}$, giving:
$$d\sin\theta' = \left(n + \frac{1}{N}\right)\lambda$$

**For just resolution**, the principal maximum of $\lambda + d\lambda$ must coincide with this minimum:
$$d\sin\theta' = n(\lambda + d\lambda)$$

Therefore:
$$n(\lambda + d\lambda) = n\lambda + \frac{\lambda}{N}$$

$$n \cdot d\lambda = \frac{\lambda}{N}$$

$$\boxed{RP = \frac{\lambda}{d\lambda} = nN}$$

**Resolving power = order × total number of rulings**

| Example | Lines | Order | RP |
|---|:---:|:---:|:---:|
| Grating (10,000 lines, 1st order) | 10,000 | 1 | 10,000 |
| Grating (10,000 lines, 2nd order) | 10,000 | 2 | 20,000 |

---

## 5. Dispersive Power of Diffraction Grating

### Q: Explain the dispersive power of diffraction grating. *(2022, 2021, 2020, 2018, 2017)*
### Q: Prove that dispersive power = dθ/dλ = n/(d cos θ) [or the equivalent expression]. *(2017)*

### Definition

**Dispersive power** is the rate of change of diffraction angle with wavelength:

$$DP = \frac{d\theta}{d\lambda}$$

### Derivation

From the grating equation: $d\sin\theta = n\lambda$

Differentiating with respect to $\lambda$:
$$d\cos\theta \cdot \frac{d\theta}{d\lambda} = n$$

$$\boxed{\frac{d\theta}{d\lambda} = \frac{n}{d\cos\theta}}$$

**Angular dispersion increases with:**
- Higher order $n$
- Smaller grating spacing $d$ (more lines per unit length)
- Larger angle $\theta$ (since $\cos\theta$ decreases)

### Dispersive Power in Terms of $\lambda$

Using $\sin\theta = n\lambda/d$ and $\cos\theta = \sqrt{1 - \sin^2\theta}$:

$$\frac{d\theta}{d\lambda} = \frac{n}{d\sqrt{1-(n\lambda/d)^2}}$$

$$\boxed{\frac{d\theta}{d\lambda} = \left[\left(\frac{d}{n\lambda}\right)^2 - 1\right]^{-1/2} \cdot \frac{1}{\lambda}}$$

This is the alternative form given in 2017: $\frac{d\theta}{d\lambda} = \left[\left(\frac{a+b}{n}\right)^2 - \lambda^2\right]^{-1/2}$ where $a+b = d$.

---

## 6. Zone Plate

### Q: What is zone plate? How can it be used to determine wavelength? *(2023)*
### Q: Define diffraction and zone plate. *(2017)*
### Q: Write down the difference between zone plate and convex lens. *(2017)*

### What is a Zone Plate?

A **zone plate** is a special lens that uses **diffraction** (instead of refraction) to focus light. It consists of alternating opaque and transparent concentric rings (Fresnel zones).

```
  Zone plate (cross-section view):
  ────────────────────────────────
  ██░░████░░░░████░░░░░░████░░░░██
  ────────────────────────────────
  ██ = opaque zones (even or odd Fresnel zones blocked)
  ░░ = transparent zones
```

### Radius of nth Zone

$$r_n = \sqrt{n\lambda f}$$

where $f$ = focal length of zone plate.

For the first zone:
$$r_1 = \sqrt{\lambda f}$$

$$f = \frac{r_1^2}{\lambda}$$

### Zone Plate vs Convex Lens

| Property | Convex Lens | Zone Plate |
|---|---|---|
| Principle | Refraction | Diffraction |
| Focal length | One (real) | Multiple (real + virtual) |
| Chromatic aberration | Present | More severe |
| Efficiency | High | Lower (blocks half of light) |
| Construction | Curved surfaces | Flat, printed circles |
| Application | General optics | X-ray/UV optics |

---

## 7. Bragg's Law

### Q: Give the equation of Bragg's law. *(2022)*

**Bragg's law** describes the conditions for constructive interference when X-rays reflect from crystal planes:

$$\boxed{2d\sin\theta = n\lambda}$$

Where:
- $d$ = spacing between crystal planes (Å)
- $\theta$ = glancing angle of X-ray beam
- $n$ = order of reflection
- $\lambda$ = wavelength of X-rays

```
         Incoming X-rays
    ─ ─ ─ ↘ ─ ─ ─ ↘ ─ ─ ─
  ─────────●─────────●────── ← crystal plane 1
           ╲         ╲
            ╲         ╲
  ──────────●─────────●───── ← crystal plane 2
            ↗         ↗
  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
    d = interplanar spacing
```

For X-rays reflecting from two adjacent planes:
- Path difference = $2d\sin\theta$
- Constructive interference when $2d\sin\theta = n\lambda$

**Applications:**
- Determining crystal structure (X-ray crystallography)
- Finding interplanar spacing of crystals
- Measuring wavelengths of X-rays

---

## 8. Difference: Interference vs Diffraction

### Q: Distinguish between interference and diffraction. *(2020, 2018)*

| Aspect | Interference | Diffraction |
|---|---|---|
| Origin | Superposition of waves from **two or more** coherent sources | Superposition of waves from different parts of the **same wave front** |
| Sources | Two discrete sources | Single slit/obstacle (infinite secondary sources) |
| Fringe width | Equal (uniform) | Unequal (central max is wider) |
| Fringe intensity | Equal for all bright fringes | Decreases away from center |
| Dark fringes | Perfectly dark | Not perfectly dark |
| Mathematical treatment | $d\sin\theta = n\lambda$ (maxima) | $a\sin\theta = n\lambda$ (minima) |
| Examples | Young's DSE, Newton's rings, biprism | Single slit, grating, circular aperture |

---

## 9. Solved Numerical Problems

---

### Problem 1 *(2018)*
**A diffraction grating has 4000 lines per cm and is used at normal incidence. Calculate the dispersive power of the grating in the third order spectrum in the wavelength region 5000 Å.**

**Given:**
- $N = 4000 \, \text{lines/cm}$ → $d = \frac{1}{4000} \, \text{cm} = 2.5 \times 10^{-4} \, \text{cm} = 2.5 \times 10^{-6} \, \text{m}$
- $n = 3$
- $\lambda = 5000 \, \text{Å} = 5 \times 10^{-7} \, \text{m}$

**Step 1: Find $\theta$:**
$$\sin\theta = \frac{n\lambda}{d} = \frac{3 \times 5 \times 10^{-7}}{2.5 \times 10^{-6}} = \frac{1.5 \times 10^{-6}}{2.5 \times 10^{-6}} = 0.6$$

$$\cos\theta = \sqrt{1 - 0.36} = \sqrt{0.64} = 0.8$$

**Step 2: Dispersive power:**
$$\frac{d\theta}{d\lambda} = \frac{n}{d\cos\theta} = \frac{3}{2.5 \times 10^{-6} \times 0.8}$$

$$\boxed{\frac{d\theta}{d\lambda} = \frac{3}{2 \times 10^{-6}} = 1.5 \times 10^6 \, \text{rad/m} = 1.5 \times 10^4 \, \text{rad/mm}}$$

---

### Problem 2 *(2022, 2020)*
**Calculate the minimum number of lines in a grating which just resolve the sodium lines in the first order spectrum. Wavelengths: 5890 Å and 5896 Å.**

**Given:**
- $\lambda_1 = 5890 \, \text{Å}$, $\lambda_2 = 5896 \, \text{Å}$
- $d\lambda = 5896 - 5890 = 6 \, \text{Å}$
- $\lambda = 5890 \, \text{Å}$ (mean)
- $n = 1$ (first order)

**Solution:**

Required resolving power:
$$RP = \frac{\lambda}{d\lambda} = \frac{5890}{6} \approx 981.7$$

Since $RP = nN$:
$$N = \frac{RP}{n} = \frac{981.7}{1}$$

$$\boxed{N \approx 982 \, \text{lines}}$$

---

### Problem 3 *(2023)*
**What is the radius of the first zone plate for focal length 20 cm and light of wavelength 5000 Å?**

**Given:**
- $f = 20 \, \text{cm} = 0.2 \, \text{m}$
- $\lambda = 5000 \, \text{Å} = 5 \times 10^{-7} \, \text{m}$

**Solution:**

$$r_1 = \sqrt{\lambda f} = \sqrt{5 \times 10^{-7} \times 0.2}$$

$$r_1 = \sqrt{10^{-7}} = 10^{-3.5} = 3.16 \times 10^{-4} \, \text{m}$$

$$\boxed{r_1 \approx 0.316 \, \text{mm}}$$

---

### Problem 4 *(2017)*
**A grating has 4250 lines per centimetre. A parallel beam of sodium light is incident normally on it and the second order spectra forms at 30°. Calculate the wavelength of sodium light.**

**Given:**
- $N = 4250 \, \text{lines/cm}$ → $d = \frac{1}{4250} \, \text{cm} = 2.353 \times 10^{-6} \, \text{m}$
- $n = 2$
- $\theta = 30°$

**Solution:**

$$d\sin\theta = n\lambda$$

$$\lambda = \frac{d\sin\theta}{n} = \frac{2.353 \times 10^{-6} \times \sin 30°}{2}$$

$$\lambda = \frac{2.353 \times 10^{-6} \times 0.5}{2}$$

$$\boxed{\lambda = 5.882 \times 10^{-7} \, \text{m} \approx 5882 \, \text{Å}}$$

*(Close to the sodium doublet at 5890 Å — consistent with expectation.)*

---

### Problem 5 *(2018 — Coherence/Double slit)*
**In Young's DSE (separation 0.18 mm, screen 90 cm away), a tired bright fringe is at 8.1 mm from central bright fringe. Find wavelength.**

**Given:**
- $d = 0.18 \, \text{mm} = 1.8 \times 10^{-4} \, \text{m}$
- $D = 90 \, \text{cm} = 0.9 \, \text{m}$
- $y_3 = 8.1 \, \text{mm} = 8.1 \times 10^{-3} \, \text{m}$ (third bright fringe)
- $n = 3$

**Solution:**

$$y_n = \frac{n\lambda D}{d} \implies \lambda = \frac{y_n d}{nD}$$

$$\lambda = \frac{8.1 \times 10^{-3} \times 1.8 \times 10^{-4}}{3 \times 0.9}$$

$$\lambda = \frac{14.58 \times 10^{-7}}{2.7}$$

$$\boxed{\lambda = 5.4 \times 10^{-7} \, \text{m} = 5400 \, \text{Å}}$$

---

## References

1. Hecht, E. — *Optics*, 5th ed., Ch. 10–11 (Diffraction), Pearson
2. Born, M. & Wolf, E. — *Principles of Optics*, 7th ed., Ch. 8, Cambridge University Press
3. Jenkins, F.A. & White, H.E. — *Fundamentals of Optics*, 4th ed., McGraw-Hill
4. Bragg, W.L. (1913) — *The Diffraction of Short Electromagnetic Waves by a Crystal*, Proc. Cambridge Phil. Soc.
5. Pedrotti, F.L. & Pedrotti, L.S. — *Introduction to Optics*, 3rd ed.
6. [HyperPhysics — Diffraction Grating](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/grat.html)
7. [HyperPhysics — Bragg's Law](http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/bragg.html)
8. [MIT OCW — Diffraction](https://ocw.mit.edu/courses/8-03-physics-iii-vibrations-and-waves-fall-2004/)

---

*[← Interference](./06_Interference.md) | [Back to README](./README.md) | [Polarization →](./08_Polarization.md)*
