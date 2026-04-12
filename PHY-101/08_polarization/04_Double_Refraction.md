# 04 — Double Refraction (Birefringence)

> **Course:** Physics — Optics Unit
> **Topic:** Double Refraction
> **Date:** April 11, 2026
> **Syllabus Reference:** Topic 4 of 8

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Historical Background](#2-historical-background)
3. [Ordinary Ray (O-ray) and Extraordinary Ray (E-ray)](#3-ordinary-ray-o-ray-and-extraordinary-ray-e-ray)
4. [Optic Axis](#4-optic-axis)
5. [Uniaxial and Biaxial Crystals](#5-uniaxial-and-biaxial-crystals)
6. [Huygen's Theory of Double Refraction](#6-huygens-theory-of-double-refraction)
7. [Positive and Negative Crystals](#7-positive-and-negative-crystals)
8. [Mathematical Description](#8-mathematical-description)
9. [Wave Plates (Retardation Plates)](#9-wave-plates-retardation-plates)
10. [Birefringence of Calcite — Detailed Analysis](#10-birefringence-of-calcite--detailed-analysis)
11. [Worked Examples](#11-worked-examples)
12. [Applications](#12-applications)
13. [Summary](#13-summary)
14. [References & Further Reading](#14-references--further-reading)

---

## 1. Introduction

**Double refraction** (also called **birefringence**) is the optical property of certain anisotropic materials by which an incident ray of unpolarized light is split into **two separate refracted rays** upon entering the material.

These two rays:
- Travel at **different velocities**
- Have **different refractive indices**
- Are **plane-polarized in mutually perpendicular planes**
- May travel in **different directions** (except along the optic axis)

**Definition (Britannica):** Double refraction is an optical property in which a single ray of unpolarized light entering an anisotropic medium is split into two rays, each traveling in a different direction.

> **First Observation:** Erasmus Bartholinus first reported this phenomenon in 1669 when he placed calcite crystals (Iceland spar, CaCO₃) over text and noticed two images of each letter.

**Image Reference:**
![Calcite double refraction](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Calcite_and_fluorite.jpg/320px-Calcite_and_fluorite.jpg)
*Calcite crystal showing double refraction (Iceland Spar) — Wikimedia Commons*

---

## 2. Historical Background

| Year | Event |
|------|-------|
| 1669 | Erasmus Bartholinus discovers double image in calcite crystals |
| 1690 | Christiaan Huygens explains the phenomenon using wave theory |
| 1808 | Étienne-Louis Malus discovers polarization of reflected light using calcite |
| 1821 | Augustin-Jean Fresnel provides wave-mechanical explanation |
| Modern | Iceland spar crystals used in Nicol prisms and laser optics |

---

## 3. Ordinary Ray (O-ray) and Extraordinary Ray (E-ray)

When unpolarized light enters a birefringent crystal, it splits into:

### 3.1 Ordinary Ray (O-ray)

- **Obeys Snell's Law** of refraction at all angles
- Has a **constant refractive index** $n_o$ in all directions
- Electric field vibrates **perpendicular** to the plane containing the ray and the optic axis
- Wavefront is **spherical** (isotropic propagation)
- Represented by symbol **O** or **o**

### 3.2 Extraordinary Ray (E-ray)

- **Violates Snell's Law** (its ray direction and wave normal are different)
- Refractive index $n_e(\theta)$ **varies with direction** $\theta$ relative to optic axis
- Electric field vibrates **in the plane** containing the ray and the optic axis
- Wavefront is **ellipsoidal** (anisotropic propagation)
- Represented by symbol **E** or **e**
- *However, the wave normal direction still satisfies Snell's Law*

### Comparison Table

| Property | Ordinary Ray (O) | Extraordinary Ray (E) |
|----------|-----------------|----------------------|
| Snell's Law | Obeyed | Not obeyed (ray direction) |
| Refractive index | Constant ($n_o$) | Varies with direction |
| Speed | Constant | Direction-dependent |
| Wavefront | Spherical | Ellipsoidal |
| Polarization | ⊥ to principal plane | ∥ to principal plane |
| Behavior along optic axis | Same as E-ray | Same as O-ray |

### Visual: Splitting of Light in Calcite

```
  Unpolarized light incident normally on calcite crystal:

           Incident beam (↓ direction)
                   │
  ─────────────────┼────────────────────────── Top face (air→calcite)
                   │
          ┌────────┼──────────────┐
          │        │              │
          │     O-ray (goes       │
          │     straight down)    │
          │           E-ray       │
          │           (deviates   │
          │            sideways)  │
          │        │          /   │
          │        │         /    │
          └────────┼────────/─────┘
                   │       /
  ─────────────────┼──────/────────────────── Bottom face (calcite→air)
                   ↓     ↗
               O-ray   E-ray
          (polarized ⊥) (polarized ∥)
          
  These two beams create a DOUBLE IMAGE
```

---

## 4. Optic Axis

**Definition:** The optic axis is the direction in a doubly refracting crystal along which **both rays travel with the same velocity**. Along the optic axis, there is **no double refraction**.

### Properties of the Optic Axis

- It is a **direction**, not a single line
- Any ray traveling parallel to the optic axis is undivided
- A ray traveling perpendicular to the optic axis experiences **maximum birefringence** ($\Delta n = n_e - n_o$)
- At angles between 0° and 90° to optic axis, the E-ray has intermediate refractive index

```
  OPTIC AXIS in CALCITE CRYSTAL

       A (blunt corner)
      /|\
     / | \
    /  |  \
   /   |   \    ← Crystal faces meet at equal angles here
  /  ↑ | ↑  \
 /   Optic   \
/     Axis    \
───────────────
B (blunt corner)

  The optic axis passes through the two "blunt" corners A and B
  where all three crystal faces make equal angles (102°) with each other
  
  In CaCO₃: The axis is along the threefold symmetry axis of the crystal
```

---

## 5. Uniaxial and Biaxial Crystals

### 5.1 Uniaxial Crystals (one optic axis)

These have one axis of symmetry. Examples:

| Crystal | System | $n_o$ | $n_e$ | Type |
|---------|---------|-------|-------|------|
| Calcite (CaCO₃) | Trigonal | 1.6584 | 1.4864 | Negative |
| Quartz (SiO₂) | Hexagonal | 1.5443 | 1.5534 | Positive |
| Ice (H₂O) | Hexagonal | 1.3090 | 1.3104 | Positive |
| Tourmaline | Trigonal | 1.669 | 1.638 | Negative |
| Rutile (TiO₂) | Tetragonal | 2.616 | 2.903 | Positive |

### 5.2 Biaxial Crystals (two optic axes)

These have lower symmetry and two optic axes. Examples:

| Crystal | System | $n_\alpha$ | $n_\beta$ | $n_\gamma$ |
|---------|---------|-----------|----------|-----------|
| Mica | Monoclinic | 1.552 | 1.582 | 1.588 |
| Gypsum | Monoclinic | 1.521 | 1.523 | 1.530 |
| Aragonite | Orthorhombic | 1.530 | 1.682 | 1.686 |

---

## 6. Huygens' Theory of Double Refraction

Christiaan Huygens (1690) extended his wave theory to explain double refraction using secondary wavelets:

### 6.1 Huygens' Construction

For a uniaxial crystal, each point on the wavefront emits **two secondary wavelets**:

1. **Spherical wavelet** (O-ray): Same radius in all directions $= \frac{ct}{n_o}$
2. **Ellipsoidal wavelet** (E-ray): Ellipsoidal shape with semi-axes $\frac{ct}{n_o}$ (along optic axis) and $\frac{ct}{n_e}$ (perpendicular to optic axis)

```
  HUYGEN'S WAVELETS in BIREFRINGENT CRYSTAL

  Point source at O at time t=0:
  
  By time t:
                          ↑ Optic Axis
                          │
                     ─────┼───── ← Spherical wavelet (O-ray)
                    /     │     \    radius = ct/n_o
                   /    ──┼──    \
                  /  __/  │  \__  \  ← Ellipsoidal wavelet (E-ray)
                 │ /      │      \ │
  ───────────────●────────┼────────●─────────
                 │ \      │      / │
                  \  ‾‾\  │  /‾‾  /
                   \    ──┼──    /
                    \     │     /
                     ─────┼─────
                          │
                          
  The two wavefronts are tangent to each wavelet pattern from all source points.
  O-wavefront (from sphere) and E-wavefront (from ellipsoid) are different.
```

### 6.2 Important Cases

**Case 1: Light along optic axis**
- Both wavelet (sphere and ellipsoid) have same radius along optic axis
- No double refraction

**Case 2: Light perpendicular to optic axis**
- Maximum separation of O and E rays
- Maximum birefringence ($\Delta n = n_e - n_o$)

**Case 3: General angle**
- E-ray has effective index between $n_o$ and $n_e$

---

## 7. Positive and Negative Crystals

### Classification

| Type | Condition | E-ray velocity vs O-ray | Example |
|------|-----------|------------------------|---------|
| **Positive** | $n_e > n_o$ | E-ray slower | Quartz, ice |
| **Negative** | $n_e < n_o$ | E-ray faster | Calcite, tourmaline |

### Wavelet Diagrams

```
  POSITIVE CRYSTAL (nₑ > n_o)     NEGATIVE CRYSTAL (nₑ < n_o)
  Example: Quartz                   Example: Calcite

       ↑ Optic axis                      ↑ Optic axis
       │                                 │
  ─────┼─────  ←Sphere (O)         ─────┼─────  ←Ellipse (E, larger)
  ─────┼─────  ←Ellipse (E, smaller) ─────┼─────  ←Sphere (O)
       │                                 │
  
  E-ellipse inside O-sphere         E-ellipse outside O-sphere
  (E is slower, nₑ > n_o)          (E is faster, nₑ < n_o)
```

### Wavelet detail for positive crystal (E inside O):

```
                  ↑ Optic Axis
       ___        │         ___
      /   \    ───┼───     /   \    ← Sphere (O-ray)
     │     │  /   │   \   │     │
     │  ───┼──    │    ──┼───  │   ← Ellipse (E-ray, smaller equatorial radius)
      \   /    ───┼───     \   /
       ‾‾‾        │         ‾‾‾
```

---

## 8. Mathematical Description

### 8.1 Refractive Index of E-ray

The refractive index of the extraordinary ray varies with angle $\theta$ to the optic axis:

$$\frac{1}{n_e^2(\theta)} = \frac{\cos^2\theta}{n_o^2} + \frac{\sin^2\theta}{n_e^2}$$

Or equivalently:

$$n_e(\theta) = \frac{n_o n_e}{\sqrt{n_e^2\cos^2\theta + n_o^2\sin^2\theta}}$$

**Boundary values:**
- $\theta = 0°$ (along optic axis): $n_e(0) = n_o$ (no birefringence)
- $\theta = 90°$ (perpendicular to optic axis): $n_e(90°) = n_e$ (maximum birefringence)

### 8.2 Birefringence

$$\Delta n = n_e - n_o$$

For calcite: $\Delta n = 1.4864 - 1.6584 = -0.172$ (negative crystal)

### 8.3 Path Difference and Retardation

When O and E rays travel through a crystal of thickness $t$:

**Optical path difference:**
$$\Delta = t|n_e - n_o| = t|\Delta n|$$

**Phase difference:**
$$\delta = \frac{2\pi}{\lambda}\Delta = \frac{2\pi t}{\lambda}|n_e - n_o|$$

---

## 9. Wave Plates (Retardation Plates)

Wave plates are thin crystal slices cut so the optic axis is **parallel to the face**. They introduce a controlled phase difference between O and E components.

### 9.1 Half-Wave Plate (HWP)

Phase difference $\delta = \pi$ (180°). Thickness:

$$t_{HWP} = \frac{\lambda}{2|n_e - n_o|}$$

**Effect:** Rotates the plane of polarization by $2\alpha$ (where $\alpha$ = angle of input polarization to fast axis)

### 9.2 Quarter-Wave Plate (QWP)

Phase difference $\delta = \pi/2$ (90°). Thickness:

$$t_{QWP} = \frac{\lambda}{4|n_e - n_o|}$$

**Effect:**
- Linear polarization at 45° → circular polarization
- Circular polarization → linear polarization

### Summary Table for Wave Plates

| Plate | Phase Difference | Effect on 45° Linear |
|-------|-----------------|---------------------|
| QWP | π/2 | → Circular polarization |
| HWP | π | → Linear (rotated 90°) |
| Full wave | 2π | → Unchanged (linear) |

---

## 10. Birefringence of Calcite — Detailed Analysis

**Calcite (Iceland Spar, CaCO₃):**
- Crystal system: Trigonal (rhombohedral)
- Very strong birefringence: $\Delta n = -0.172$
- Easily cleaved along three directions
- Used in Nicol prisms, Glan-Thompson prisms

```
  CALCITE CRYSTAL STRUCTURE

   ___________
  /           /|   ← Three rectangular faces
 /___________/ |       meet at "blunt corner" (102°)
|           |  |
|           |  /
|___________|/
    ↗ Optic axis direction (through blunt corners)

  Principal section: The plane containing the optic axis and
  the normal to the crystal face
```

**Refractive indices of calcite at different wavelengths:**

| Wavelength | $n_o$ | $n_e$ | $\Delta n$ |
|-----------|-------|-------|-----------|
| 400 nm (violet) | 1.6812 | 1.4966 | -0.1846 |
| 589 nm (yellow) | 1.6584 | 1.4864 | -0.1720 |
| 700 nm (red) | 1.6517 | 1.4821 | -0.1696 |

---

## 11. Worked Examples

### Example 1: Phase difference in a calcite plate

**Problem:** A calcite plate of thickness 0.5 mm is used with light of wavelength 589 nm. The optic axis is parallel to the plate. Find the phase difference between O and E rays.

**Given:** $n_o = 1.6584$, $n_e = 1.4864$, $t = 0.5$ mm $= 5 \times 10^{-4}$ m, $\lambda = 589$ nm $= 589 \times 10^{-9}$ m

**Solution:**

$$\delta = \frac{2\pi t}{\lambda}|n_o - n_e|$$

$$= \frac{2\pi \times 5\times10^{-4}}{589\times10^{-9}} \times |1.6584 - 1.4864|$$

$$= \frac{2\pi \times 5\times10^{-4}}{589\times10^{-9}} \times 0.1720$$

$$= 2\pi \times \frac{5\times10^{-4} \times 0.1720}{589\times10^{-9}}$$

$$= 2\pi \times \frac{8.6\times10^{-5}}{5.89\times10^{-7}}$$

$$= 2\pi \times 146.0 = 917.4 \text{ radians}$$

> **Answer:** $\delta \approx 918$ radians (equivalent to $\approx 146$ full wave periods)

---

### Example 2: Thickness of a quarter-wave plate

**Problem:** Find the minimum thickness of a quartz quarter-wave plate for sodium light ($\lambda = 589$ nm). For quartz: $n_o = 1.5443$, $n_e = 1.5534$.

**Solution:**

$$t_{QWP} = \frac{\lambda}{4|n_e - n_o|}$$

$$= \frac{589 \times 10^{-9}}{4 \times |1.5534 - 1.5443|}$$

$$= \frac{589 \times 10^{-9}}{4 \times 0.0091}$$

$$= \frac{589 \times 10^{-9}}{0.0364}$$

$$= 1.618 \times 10^{-5} \text{ m} = 16.18 \text{ μm}$$

> **Answer:** Minimum thickness = **16.18 μm ≈ 16.2 μm**

---

### Example 3: Extraordinary ray refractive index at 45°

**Problem:** For calcite, find the refractive index of the extraordinary ray when it travels at 45° to the optic axis.

**Given:** $n_o = 1.6584$, $n_e = 1.4864$, $\theta = 45°$

**Solution:**

$$n_e(45°) = \frac{n_o n_e}{\sqrt{n_e^2\cos^2(45°) + n_o^2\sin^2(45°)}}$$

$$= \frac{1.6584 \times 1.4864}{\sqrt{(1.4864)^2(0.5) + (1.6584)^2(0.5)}}$$

$$= \frac{2.4665}{\sqrt{0.5 \times 2.2094 + 0.5 \times 2.7503}}$$

$$= \frac{2.4665}{\sqrt{1.1047 + 1.3752}}$$

$$= \frac{2.4665}{\sqrt{2.4799}}$$

$$= \frac{2.4665}{1.5748} = 1.5661$$

> **Answer:** $n_e(45°) = 1.566$ (between $n_e = 1.486$ and $n_o = 1.658$)

---

## 12. Applications

| Application | How Double Refraction is Used |
|-------------|-------------------------------|
| **Nicol prism** | Uses birefringence to separate O and E rays for polarization |
| **Wave plates (QWP, HWP)** | Convert between polarization states |
| **Polarizing microscopy** | Identify minerals and crystals by birefringence |
| **Optical coherence tomography** | Tissue imaging using polarization sensitivity |
| **Stress analysis** | Photoelastic birefringence reveals stress patterns |
| **Liquid crystal displays (LCD)** | Electrically controlled birefringence for pixels |
| **Fiber optic sensors** | Birefringent fibers sense pressure, temperature, strain |

---

## 13. Summary

```
  DOUBLE REFRACTION — KEY CONCEPTS

  ┌────────────────────────────────────────────────────────────┐
  │                                                            │
  │  Definition: One ray → Two polarized rays in crystal      │
  │                                                            │
  │  O-ray: Follows Snell's Law, constant nₒ, spherical       │
  │         wavefront, E⊥principal plane                      │
  │                                                            │
  │  E-ray: Violates Snell's Law (ray), nₑ(θ) varies,        │
  │         ellipsoidal wavefront, E∥principal plane          │
  │                                                            │
  │  Optic Axis: Direction where O and E travel with same     │
  │              speed (no double refraction)                  │
  │                                                            │
  │  Positive: nₑ > nₒ (Quartz)                              │
  │  Negative: nₑ < nₒ (Calcite)                             │
  │                                                            │
  │  nₑ(θ) = nₒnₑ / √(nₑ²cos²θ + nₒ²sin²θ)                │
  │                                                            │
  │  Phase difference: δ = (2πt/λ)|nₑ - nₒ|                 │
  │                                                            │
  └────────────────────────────────────────────────────────────┘
```

---

## 14. References & Further Reading

| Resource | Link |
|----------|------|
| Wikipedia — Birefringence | https://en.wikipedia.org/wiki/Birefringence |
| Britannica — Double Refraction | https://www.britannica.com/science/double-refraction |
| Harvard Natural Sciences Demonstration | https://sciencedemonstrations.fas.harvard.edu/presentations/double-refraction |
| Nikon MicroscopyU — Birefringence | https://www.microscopyu.com/techniques/polarized-light/principles-of-birefringence |
| Feynman Lectures — Polarization | https://www.feynmanlectures.caltech.edu/I_33.html |
| NPTEL Lecture 47 — Double Refraction | http://acl.digimat.in/nptel/courses/video/115107131/lec47.pdf |
| Smith College Optics Notes | https://www.science.smith.edu/geosciences/min_jb/Optics/Optics-3.pdf |

---

*← [03 — Brewster's Law](./03_Brewsters_Law.md) | [05 — Nicol Prism →](./05_Nicol_Prism.md)*

---
*Notes compiled for university physics coursework — April 11, 2026*
