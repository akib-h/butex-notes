# 01 — Polarization

> **Course:** Physics — Optics Unit
> **Topic:** Polarization of Light
> **Date:** April 11, 2026
> **Syllabus Reference:** Topic 1 of 8

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Nature of Light as a Transverse Wave](#2-nature-of-light-as-a-transverse-wave)
3. [What is Polarization?](#3-what-is-polarization)
4. [Types of Polarization](#4-types-of-polarization)
   - 4.1 [Plane (Linear) Polarization](#41-plane-linear-polarization)
   - 4.2 [Circular Polarization](#42-circular-polarization)
   - 4.3 [Elliptical Polarization](#43-elliptical-polarization)
5. [Unpolarized vs Polarized Light](#5-unpolarized-vs-polarized-light)
6. [Methods of Producing Polarized Light](#6-methods-of-producing-polarized-light)
7. [Mathematical Description](#7-mathematical-description)
8. [Degree of Polarization](#8-degree-of-polarization)
9. [Applications of Polarization](#9-applications-of-polarization)
10. [Worked Examples](#10-worked-examples)
11. [Summary Table](#11-summary-table)
12. [References & Further Reading](#12-references--further-reading)

---

## 1. Introduction

Light is an **electromagnetic (EM) wave**. Like all EM waves, it is composed of oscillating electric field **E** and magnetic field **B** vectors, both mutually perpendicular to each other **and** to the direction of propagation.

For ordinary (natural) light, the electric field vectors oscillate in **all possible directions** perpendicular to the direction of propagation — this is called **unpolarized light**.

**Polarization** is the phenomenon by which the vibration of the electric field vector of a light wave is **restricted to a single plane** or follows a specific geometric pattern.

> **Historical Note:** The study of polarization began when Étienne-Louis Malus (1775–1812) accidentally discovered in 1808 that light reflected from a glass surface through a calcite crystal showed intensity variations as the crystal was rotated. This led to the concept of polarization.

---

## 2. Nature of Light as a Transverse Wave

Light is an electromagnetic wave described by Maxwell's equations. The electric and magnetic fields are:

$$\vec{E}(z,t) = E_0 \hat{x} \cos(kz - \omega t)$$

$$\vec{B}(z,t) = B_0 \hat{y} \cos(kz - \omega t)$$

Where:
- $E_0$ = amplitude of the electric field
- $B_0$ = amplitude of the magnetic field
- $k = \frac{2\pi}{\lambda}$ = wave number
- $\omega = 2\pi f$ = angular frequency
- $z$ = direction of propagation

**Key property:** Light is a **transverse wave** — the field oscillations are perpendicular to the direction of propagation. This is what makes polarization possible. Sound waves (longitudinal) **cannot** be polarized.

```
         E (electric field)
         ↑
         |       /\      /\
         |      /  \    /  \
Direction of   /    \  /    \
propagation →─────────────────────→  z
         |         \/       \/
         |
         B (magnetic field) — perpendicular to E and z
```

---

## 3. What is Polarization?

**Definition:** Polarization is the property of an electromagnetic wave describing the geometric orientation of the oscillations of the electric field vector. When the oscillation is confined to a single plane, the wave is said to be **plane-polarized** or **linearly polarized**.

**Transverse wave condition:** Only transverse waves (light, radio waves) can be polarized. Longitudinal waves (sound) cannot.

### Visualization Diagram

```
  UNPOLARIZED LIGHT              POLARIZED LIGHT
  
  ← direction of travel →      ← direction of travel →

     E vectors in ALL planes        E vectors in ONE plane only
  
  ↑ → ↙ ↘ ↗ ↖ ↓ ←               ↑ ↑ ↑ ↑ ↑ ↑
  (random orientations)           (fixed vertical plane)
  
  [Source: Natural light]         [After passing through polarizer]
```

---

## 4. Types of Polarization

### 4.1 Plane (Linear) Polarization

The electric field vector oscillates along a **single fixed direction** in the plane perpendicular to propagation.

$$\vec{E}(z,t) = E_0 \hat{x} \cos(kz - \omega t)$$

**Condition:** $E_y = 0$, $E_x \neq 0$ → linearly polarized along x-axis.

```
  z-axis (propagation) →

  E_x   |
        |  /\        /\
        | /  \      /  \
  ──────|/────\────/────\──→ t
        |      \  /      \
        |       \/        \
  
  Single plane oscillation = Linear Polarization
```

**Mathematical representation (general linear polarization):**

$$\vec{E} = (E_x \hat{x} + E_y \hat{y})\cos(kz - \omega t)$$

where $E_x/E_y = \tan\theta$ defines the angle of polarization.

---

### 4.2 Circular Polarization

The electric field vector rotates in a **circle** as the wave propagates. The magnitude of **E** remains constant but its direction rotates uniformly.

**Condition for circular polarization:**
- $|E_x| = |E_y|$ (equal amplitudes)
- Phase difference $\delta = \pm\frac{\pi}{2}$ (90°)

$$E_x = E_0 \cos(kz - \omega t)$$
$$E_y = \pm E_0 \sin(kz - \omega t)$$

- **Right-hand circular polarization (RHCP):** `+` sign, rotates counterclockwise when viewed from the receiver
- **Left-hand circular polarization (LHCP):** `−` sign, rotates clockwise when viewed from the receiver

```
  View along z-axis (wave coming toward you):

  RHCP:              LHCP:
    ↑                  ↑
   ↗ ↖                ↘ ↙
  ←   →              ←   →
   ↙ ↘                ↗ ↖
    ↓                  ↓
  
  Counterclockwise    Clockwise
```

**Relationship:** Circular polarization = superposition of two orthogonal linear polarizations with 90° phase difference.

---

### 4.3 Elliptical Polarization

The tip of the electric field vector traces an **ellipse**. This is the **most general** state of polarization.

**Condition:**
- $|E_x| \neq |E_y|$, or
- Phase difference $\delta \neq 0, \pm\frac{\pi}{2}, \pi$

$$E_x = E_{0x}\cos(kz - \omega t)$$
$$E_y = E_{0y}\cos(kz - \omega t + \delta)$$

**The general equation of the polarization ellipse:**

$$\frac{E_x^2}{E_{0x}^2} + \frac{E_y^2}{E_{0y}^2} - \frac{2E_x E_y}{E_{0x}E_{0y}}\cos\delta = \sin^2\delta$$

**Special cases:**

| Condition | Type |
|-----------|------|
| $\delta = 0$ or $\pi$ | Linear polarization |
| $\delta = \pi/2$, $E_{0x} = E_{0y}$ | Circular polarization |
| All other $\delta$ | Elliptical polarization |

---

## 5. Unpolarized vs Polarized Light

| Property | Unpolarized Light | Polarized Light |
|----------|-------------------|-----------------|
| E-field direction | Random, all planes | Fixed plane or pattern |
| Source | Natural sources (sun, bulb) | After passing through polarizer |
| Intensity variation with polarizer | None | Varies as $I = I_0\cos^2\theta$ |
| Symmetry | Cylindrical symmetry | Broken symmetry |
| Mathematical description | Incoherent superposition | Coherent superposition |

**Intensity of unpolarized light through a polarizer:**

When unpolarized light of intensity $I_0$ passes through an ideal polarizer:

$$I_{transmitted} = \frac{I_0}{2}$$

*Explanation:* Unpolarized light has equal components along every direction; on average, half the intensity lies along the polarizer's transmission axis.

---

## 6. Methods of Producing Polarized Light

| Method | Mechanism | Example |
|--------|-----------|---------|
| **Polarization by selective absorption (dichroism)** | Polaroid film absorbs one component | Polaroid sunglasses |
| **Polarization by reflection** | Brewster's angle reflection | Light off water/glass surface |
| **Polarization by double refraction (birefringence)** | Crystal splits light into O and E rays | Calcite, quartz |
| **Polarization by scattering** | Rayleigh scattering in atmosphere | Sky light |
| **Polarization by transmission** | Passing through stacked glass plates | Pile-of-plates polarizer |

```
  METHODS OF POLARIZATION

  ┌─────────────────────────────────────────────────────────────┐
  │                                                             │
  │  1. ABSORPTION        2. REFLECTION       3. REFRACTION    │
  │                                                             │
  │  [Source]→[Polaroid]  [Source]→[Surface]  [Source]→[Crystal]│
  │          ↓                    ↓                    ↓        │
  │  [Plane polarized]   [Plane polarized]   [O-ray + E-ray]   │
  │                       (at Brewster angle)                   │
  │                                                             │
  │  4. SCATTERING        5. TRANSMISSION                       │
  │                                                             │
  │  [Sun]→[Atmosphere]  [Source]→[Glass plates]               │
  │          ↓                    ↓                             │
  │  [Partially polarized] [Partially polarized]                │
  └─────────────────────────────────────────────────────────────┘
```

---

## 7. Mathematical Description

### 7.1 Jones Vector Representation

The state of polarization can be compactly described by the **Jones vector**:

$$\vec{J} = \begin{pmatrix} E_{0x} e^{i\phi_x} \\ E_{0y} e^{i\phi_y} \end{pmatrix}$$

**Common polarization states:**

| Polarization State | Jones Vector |
|-------------------|--------------|
| Horizontal linear | $\begin{pmatrix}1\\0\end{pmatrix}$ |
| Vertical linear | $\begin{pmatrix}0\\1\end{pmatrix}$ |
| 45° linear | $\frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}$ |
| RHCP | $\frac{1}{\sqrt{2}}\begin{pmatrix}1\\i\end{pmatrix}$ |
| LHCP | $\frac{1}{\sqrt{2}}\begin{pmatrix}1\\-i\end{pmatrix}$ |

### 7.2 Stokes Parameters

For partially polarized light, the **Stokes parameters** are used:

$$S_0 = I = E_{0x}^2 + E_{0y}^2 \quad \text{(total intensity)}$$

$$S_1 = E_{0x}^2 - E_{0y}^2 \quad \text{(linear polarization: horizontal vs vertical)}$$

$$S_2 = 2E_{0x}E_{0y}\cos\delta \quad \text{(linear polarization: 45° vs -45°)}$$

$$S_3 = 2E_{0x}E_{0y}\sin\delta \quad \text{(circular polarization)}$$

The **Stokes vector** is:
$$\vec{S} = \begin{pmatrix}S_0\\S_1\\S_2\\S_3\end{pmatrix}$$

For fully polarized light: $S_0^2 = S_1^2 + S_2^2 + S_3^2$

---

## 8. Degree of Polarization

The **degree of polarization (DOP)** is defined as:

$$P = \frac{I_{max} - I_{min}}{I_{max} + I_{min}}$$

Where:
- $I_{max}$ = maximum intensity through a rotating analyzer
- $I_{min}$ = minimum intensity through a rotating analyzer

| Light Type | DOP |
|------------|-----|
| Completely unpolarized | $P = 0$ |
| Partially polarized | $0 < P < 1$ |
| Completely polarized | $P = 1$ |

---

## 9. Applications of Polarization

1. **Polaroid sunglasses** — Block horizontally polarized glare from road/water surfaces
2. **LCD screens** — Use crossed polarizers with liquid crystal cells to control pixel brightness
3. **3D cinema** — Left and right eye images encoded in orthogonal polarizations
4. **Photography** — Polarizing filters reduce reflections and enhance sky contrast
5. **Microscopy** — Polarizing microscopes reveal crystal structure and stress patterns
6. **Navigation** — Polarized sky light used by bees and ancient Viking navigators
7. **Optical fiber communication** — Polarization-maintaining fibers in high-speed networks
8. **Radar and remote sensing** — Polarimetric radar to classify targets

---

## 10. Worked Examples

### Example 1: Intensity through two polarizers

**Problem:** Unpolarized light of intensity $I_0 = 100 \text{ W/m}^2$ passes through a polarizer then an analyzer. The angle between their axes is $\theta = 60°$. Find the transmitted intensity.

**Solution:**

**Step 1:** After the polarizer (first filter):
$$I_1 = \frac{I_0}{2} = \frac{100}{2} = 50 \text{ W/m}^2$$

**Step 2:** After the analyzer (Malus's Law):
$$I_2 = I_1 \cos^2\theta = 50 \times \cos^2(60°)$$
$$= 50 \times \left(\frac{1}{2}\right)^2 = 50 \times 0.25 = 12.5 \text{ W/m}^2$$

> **Answer:** $I = 12.5 \text{ W/m}^2$

---

### Example 2: Determine polarization type from components

**Problem:** The electric field components of a light wave are:
$$E_x = 3\cos(\omega t), \quad E_y = 3\cos\left(\omega t + \frac{\pi}{2}\right)$$

Identify the type of polarization.

**Solution:**
- $|E_{0x}| = |E_{0y}| = 3$ → **equal amplitudes**
- Phase difference $\delta = \frac{\pi}{2}$ (90°)

**Conclusion:** This is **right-hand circular polarization** (RHCP).

---

### Example 3: Elliptical polarization ellipse equation

**Problem:** For a wave with $E_{0x} = 2$, $E_{0y} = 3$, and phase difference $\delta = \pi/3$, write the equation of the polarization ellipse.

**Solution:**

Using the general ellipse equation:
$$\frac{E_x^2}{E_{0x}^2} + \frac{E_y^2}{E_{0y}^2} - \frac{2E_x E_y}{E_{0x}E_{0y}}\cos\delta = \sin^2\delta$$

Substituting:
$$\frac{E_x^2}{4} + \frac{E_y^2}{9} - \frac{2E_x E_y}{6}\cos\left(\frac{\pi}{3}\right) = \sin^2\left(\frac{\pi}{3}\right)$$

$$\frac{E_x^2}{4} + \frac{E_y^2}{9} - \frac{E_x E_y}{6} = \frac{3}{4}$$

---

## 11. Summary Table

| Concept | Description | Formula/Condition |
|---------|-------------|-------------------|
| Unpolarized light | E in all planes | All $\phi$ present |
| Plane polarized | E in one plane | $E_y = 0$ (for x-polarized) |
| Circular polarized | E rotates in circle | $\delta = \pm\pi/2$, $E_{0x}=E_{0y}$ |
| Elliptical polarized | E rotates in ellipse | General case |
| DOP | Measure of polarization | $P = \frac{I_{max}-I_{min}}{I_{max}+I_{min}}$ |
| Intensity (unpolarized→polarizer) | Half transmitted | $I = I_0/2$ |

---

## 12. References & Further Reading

| Resource | Link |
|----------|------|
| University Physics (OpenStax) | https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/01:_The_Nature_of_Light/1.08:_Polarization |
| Feynman Lectures on Physics, Vol. I, Ch. 33 | https://www.feynmanlectures.caltech.edu/I_33.html |
| Harvard Lecture Notes on Polarization | https://scholar.harvard.edu/files/schwartz/files/lecture14-polarization.pdf |
| UCF Pressbooks — Polarization | https://pressbooks.online.ucf.edu/osuniversityphysics3/chapter/polarization/ |
| Physics LibreTexts — Polarization | https://phys.libretexts.org/Courses/University_of_California_Davis/UCD:_Physics_9B__Waves_Sound_Optics_Thermodynamics_and_Fluids/03:_Physical_Optics/3.07:_Polarization |
| Wikipedia — Polarization (Waves) | https://en.wikipedia.org/wiki/Polarization_(waves) |
| HyperPhysics — Polarization | http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/polarcon.html |

---

*Next: [02 — Polarization by Reflection →](./02_Polarization_by_Reflection.md)*

---
*Notes compiled for university physics coursework — April 11, 2026*
