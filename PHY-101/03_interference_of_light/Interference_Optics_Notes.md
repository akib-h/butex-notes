# 🔬 Wave Optics — Interference: Complete Notes

> **Subject:** Physics (Optics)
> **Topic:** Interference of Light
> **Syllabus Coverage:** Constructive & Destructive Interference, YDSE, Newton's Rings, Fresnel Biprism, Thin Films
> **References:** University Exam Papers (2017–2023), Hecht *Optics*, Born & Wolf *Principles of Optics*

---

## 📋 Table of Contents

1. [Light and Theories of Light](#1-light-and-theories-of-light)
2. [Wavefront and Huygens' Principle](#2-wavefront-and-huygens-principle)
3. [Interference of Light](#3-interference-of-light)
4. [Conditions for Interference](#4-conditions-for-interference)
5. [Analytical Treatment of Interference](#5-analytical-treatment-of-interference)
6. [Energy Conservation in Interference](#6-energy-conservation-in-interference)
7. [Young's Double Slit Experiment (YDSE)](#7-youngs-double-slit-experiment-ydse)
8. [Newton's Rings](#8-newtons-rings)
9. [Fresnel Biprism](#9-fresnel-biprism)
10. [Thin Film Interference](#10-thin-film-interference)
11. [Solved Numerical Problems](#11-solved-numerical-problems)
12. [Quick Formula Sheet](#12-quick-formula-sheet)

---

## 1. Light and Theories of Light

### Definition
Light is a form of **electromagnetic energy** that travels in straight lines (in a homogeneous medium) and is visible to the human eye in the wavelength range of approximately **380 nm to 700 nm**.

### Theories of Light

| # | Theory | Proposed By | Key Idea | Limitation |
|---|--------|-------------|----------|------------|
| 1 | **Corpuscular (Particle) Theory** | Newton (1675) | Light consists of tiny elastic particles called *corpuscles* | Could not explain interference, diffraction |
| 2 | **Wave Theory** | Huygens (1678), Young, Fresnel | Light is a wave propagating through a medium (*aether*) | Could not explain photoelectric effect |
| 3 | **Electromagnetic Theory** | Maxwell (1865) | Light is a transverse electromagnetic wave; no medium required | Could not explain blackbody radiation, photoelectric effect |
| 4 | **Quantum (Photon) Theory** | Planck (1900), Einstein (1905) | Light consists of discrete packets of energy called *photons*, $E = h\nu$ | Incomplete alone — wave-particle duality needed |
| 5 | **Wave-Particle Duality** | de Broglie, Bohr, Dirac | Light exhibits both wave and particle properties depending on the experiment | Modern accepted framework (QED) |

> 📖 **Reference:** Hecht, E. *Optics* (5th ed.), Chapter 3 — Light and Classical Optics.

---

## 2. Wavefront and Huygens' Principle

### Wavefront
A **wavefront** is an imaginary surface joining all points of a wave that are vibrating in the **same phase** at a given instant of time.

**Types of Wavefronts:**

```
Point source  →  Spherical wavefront
Line source   →  Cylindrical wavefront
Source at ∞   →  Plane wavefront
```

### Huygens' Principle (1678)

Every point on a primary wavefront acts as a **secondary source** of new spherical wavelets. The new (secondary) wavefront at any later time is the **common tangent (envelope)** to all these secondary wavelets.

```
   A ●
   B ●   →→  [ Secondary wavelets ]  →→  New wavefront (tangent surface)
   C ●
     Primary
    Wavefront
```

**Key Points:**
- Secondary wavelets travel with the same speed and frequency as the primary wave
- The envelope of secondary wavelets gives the new wavefront position
- This principle successfully explains reflection, refraction, and diffraction

> 📖 **Reference:** Born, M. & Wolf, E. *Principles of Optics* (7th ed.), Section 3.3.

---

## 3. Interference of Light

### Definition
**Interference** is the phenomenon that occurs when two or more coherent waves **superpose (overlap)** and combine to form a new wave with a resultant intensity that differs from the sum of individual intensities.

The resultant displacement at any point is governed by the **Principle of Superposition:**

$$\vec{y} = \vec{y_1} + \vec{y_2}$$

### Classification of Interference

#### (i) Constructive Interference (Bright Fringe)
Occurs when two waves are in **same phase** (crest meets crest, trough meets trough).

- **Condition (Path Difference):**
$$\Delta x = n\lambda, \quad n = 0, 1, 2, 3, \ldots$$

- **Condition (Phase Difference):**
$$\Delta\phi = 0, 2\pi, 4\pi, \ldots = 2n\pi$$

- **Result:** Resultant amplitude = $A_1 + A_2$ → **Maximum intensity** → Bright fringe formed

#### (ii) Destructive Interference (Dark Fringe)
Occurs when two waves are **completely out of phase** (crest meets trough).

- **Condition (Path Difference):**
$$\Delta x = (2n+1)\frac{\lambda}{2}, \quad n = 0, 1, 2, \ldots$$

- **Condition (Phase Difference):**
$$\Delta\phi = \pi, 3\pi, 5\pi, \ldots = (2n+1)\pi$$

- **Result:** Resultant amplitude = $|A_1 - A_2|$ → **Minimum intensity** → Dark fringe formed

> 💡 **Key Insight:** Interference does **not** destroy energy — it redistributes it in space. Where there is a dark fringe (energy minimum), the energy is compensated by increased energy at bright fringes (energy maximum).

---

## 4. Conditions for Interference

For sustained, observable interference fringes to be produced, the following conditions **must** be satisfied:

1. **Coherence:** The two sources of light must be **coherent**, i.e., they must maintain a constant phase relationship with each other over time.

2. **Same Amplitude:** The two interfering waves should have the **same (or nearly equal) amplitude** for maximum contrast between bright and dark fringes. (Contrast is best when $A_1 = A_2$)

3. **Same Frequency & Wavelength:** The two waves must have **exactly the same frequency** (and hence the same wavelength). If frequencies differ, the phase difference changes with time and fringes wash out.

4. **Constant Phase Difference:** The phase difference between the two waves at any point must remain **constant** over time (this is equivalent to the coherence condition).

5. **Same Polarization (for complete interference):** The electric field vectors of the two waves should be parallel (same plane of polarization). Perpendicularly polarized waves don't interfere.

6. **Originate from a Single Parent Source:** The two sources should ideally be derived from the **same parent source** (e.g., by wavefront splitting or amplitude splitting). Independent sources cannot produce sustained interference.

### Why Can't Two Independent Sources Interfere?

Independent light sources (e.g., two separate bulbs or lasers) cannot produce sustained fringes because:
- Each source emits light via random, independent atomic transitions
- The phase difference between them changes randomly ~every $10^{-8}$ seconds (the coherence time)
- The fringe pattern shifts so rapidly that only uniform illumination is observed

> 📖 **Reference:** Jenkins & White, *Fundamentals of Optics* (4th ed.), Chapter 13.

---

## 5. Analytical Treatment of Interference

### Setup
Let two coherent waves with amplitudes $A_1$ and $A_2$ and a phase difference $\phi$ be:

$$y_1 = A_1 \sin(\omega t)$$
$$y_2 = A_2 \sin(\omega t + \phi)$$

### Resultant Amplitude

By superposition and phasor addition:

$$A^2 = A_1^2 + A_2^2 + 2A_1 A_2 \cos\phi$$

### Resultant Intensity

Since intensity $I \propto A^2$:

$$\boxed{I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos\phi}$$

### Special Case: Equal Amplitudes ($A_1 = A_2 = A$, so $I_1 = I_2 = A^2$)

$$I = A^2 + A^2 + 2A^2\cos\phi = 2A^2(1 + \cos\phi)$$

Using the identity $1 + \cos\phi = 2\cos^2(\phi/2)$:

$$\boxed{I = 4A^2 \cos^2\left(\frac{\phi}{2}\right)}$$

### Maximum Intensity (Bright Fringe)

Occurs when $\cos\phi = 1$, i.e., $\phi = 0, 2\pi, 4\pi, \ldots$

$$\boxed{I_{max} = 4A^2}$$

> This is **4 times** the intensity of a single source. Energy is concentrated at bright fringes.

### Minimum Intensity (Dark Fringe)

Occurs when $\cos\phi = -1$, i.e., $\phi = \pi, 3\pi, 5\pi, \ldots$

$$\boxed{I_{min} = 0}$$

### Intensity Distribution Graph

```
Intensity
   │
4A²│    ▲       ▲       ▲       ▲
   │   / \     / \     / \     / \
   │  /   \   /   \   /   \   /   \
   │ /     \ /     \ /     \ /     \
  0│──────────────────────────────────→ Phase difference (φ)
   0   π   2π  3π  4π  5π  6π  7π  8π
        ↑       ↑       ↑
     Dark    Dark    Dark
    fringes fringes fringes
```

- Intensity varies as a **cosine-squared** pattern
- Peak (bright fringe) value = $4A^2$
- Minimum (dark fringe) value = $0$
- The pattern is periodic with period $2\pi$ in phase

---

## 6. Energy Conservation in Interference

The law of conservation of energy is **fully obeyed** in interference. Energy is neither created nor destroyed — it is only **redistributed in space**.

**Proof:**

Average intensity over many fringes:

$$I_{avg} = \frac{I_{max} + I_{min}}{2} = \frac{(A_1 + A_2)^2 + (A_1 - A_2)^2}{2}$$

Expanding:

$$= \frac{A_1^2 + 2A_1A_2 + A_2^2 + A_1^2 - 2A_1A_2 + A_2^2}{2} = \frac{2A_1^2 + 2A_2^2}{2}$$

$$\boxed{I_{avg} = A_1^2 + A_2^2 = I_1 + I_2}$$

This equals the **sum of individual intensities** — exactly what we would get without interference (incoherent addition). Hence, energy is conserved. ✓

---

## 7. Young's Double Slit Experiment (YDSE)

### Historical Context
Thomas Young (1801) performed this landmark experiment that provided the first definitive evidence for the **wave nature of light**, dealing a blow to Newton's corpuscular theory.

### Experimental Setup

```
                         Screen
                            │
   Monochromatic      S₁ ●──│────── Q (bright/dark)
   Light Source →     │     │
        S →    ───→   O  ───│────── C (central bright, n=0)
                     │     │
                     S₂ ●──│────── R (bright/dark)
                     
         ←── D ──────────→
    (Slit separation = d = S₁S₂)
```

- Light passes through a single narrow slit **S** (to ensure coherence)
- Then falls on two slits **S₁** and **S₂** separated by distance **d**
- S₁ and S₂ act as two coherent secondary sources (wavefront splitting)
- A screen is placed at distance **D** from the slits
- Alternating **bright** (constructive) and **dark** (destructive) fringes are observed

### Path Difference

For a point P at height $x$ from the central axis:

$$\Delta = \frac{xd}{D}$$

(Derived using the geometry: $S_2P - S_1P \approx \frac{xd}{D}$ for $d \ll D$)

### Condition for Bright Fringes

$$\frac{xd}{D} = n\lambda \implies \boxed{x_n = \frac{nD\lambda}{d}}, \quad n = 0, \pm1, \pm2, \ldots$$

For $n = 0$: $x_0 = 0$ (central bright fringe at C)
For $n = 1$: $x_1 = \frac{D\lambda}{d}$
For $n = 2$: $x_2 = \frac{2D\lambda}{d}$

### Condition for Dark Fringes

$$\frac{xd}{D} = (2n+1)\frac{\lambda}{2} \implies \boxed{x_n = (2n+1)\frac{D\lambda}{2d}}, \quad n = 0, 1, 2, \ldots$$

For $n = 0$: $x_0 = \frac{D\lambda}{2d}$ (1st dark fringe)
For $n = 1$: $x_1 = \frac{3D\lambda}{2d}$ (2nd dark fringe)
For $n = 2$: $x_2 = \frac{5D\lambda}{2d}$ (3rd dark fringe)

### Fringe Width (β)

The **fringe width** is the distance between two consecutive bright (or dark) fringes.

**For Bright Fringes:**
$$\beta_{bright} = x_{n+1} - x_n = \frac{(n+1)D\lambda}{d} - \frac{nD\lambda}{d} = \frac{D\lambda}{d}$$

**For Dark Fringes:**
$$\beta_{dark} = x_{n+1} - x_n = \frac{(2(n+1)+1)D\lambda}{2d} - \frac{(2n+1)D\lambda}{2d} = \frac{D\lambda}{d}$$

$$\therefore \quad \boxed{\beta = \frac{D\lambda}{d}}$$

> **Key Result:** Bright fringe width = Dark fringe width = $\frac{D\lambda}{d}$
> 
> This proves that **the distance between any two consecutive bright and dark fringes is equal.**

### Effect of Various Parameters on Fringe Width

| Parameter Change | Effect on $\beta$ | Reason |
|---|---|---|
| Screen moved farther ($D \uparrow$) | $\beta$ **increases** | $\beta \propto D$ |
| Slit separation increased ($d \uparrow$) | $\beta$ **decreases** | $\beta \propto \frac{1}{d}$ |
| Wavelength decreased ($\lambda \downarrow$) | $\beta$ **decreases** | $\beta \propto \lambda$ |
| Medium of refractive index $\mu$ used | $\beta$ **decreases** | $\lambda_{medium} = \frac{\lambda}{\mu}$ |
| White light used | **Coloured fringes** | Different $\lambda$ → different $\beta$ |

---

## 8. Newton's Rings

### What Are Newton's Rings?

Newton's Rings is an experiment demonstrating **thin film interference** using an air wedge formed between a plano-convex lens and a flat glass plate.

**Characteristics:**
- It is an example of **amplitude division** interference
- Observed in **reflected light**
- Forms **concentric circular rings** of alternating bright and dark bands
- The **central ring is always dark** (in reflected light)
- Named after Sir Isaac Newton who first observed this phenomenon (1717)

### Experimental Setup

```
          M ← Microscope
          │
      ════╪════  ← Glass plate (45°, for directing light downward)
          │
          ↓  Light from sodium lamp (S)
     ─────────
    /         \  ← Plano-convex lens (radius of curvature R)
   /           \
──/─────────────\──  ← Flat glass plate (plano glass plate)
  A      O      B

(Air film between curved surface and flat plate)
```

### Why is the Central Ring Dark?

At the point of contact (center O), the air film thickness $t = 0$.

1. At the center, the air film thickness is **zero** ($t = 0$)
2. Ray reflected from the **top surface** of the air film (glass → air) undergoes **no phase change** (going from denser to rarer medium)
3. Ray reflected from the **bottom surface** (air → glass) undergoes a **phase change of π (180°)** (going from rarer to denser medium)
4. This inherent phase difference of $\pi$ causes **destructive interference** at the center
5. Hence: $2t = m\lambda$ at center → $m = 0$ → dark spot

$$\boxed{\text{Center of Newton's Rings is always DARK in reflected light}}$$

### Geometry and Air Film Thickness

For a ring of radius $r_n$ (at the $n$th ring):

Using the geometry of a circle of radius $R$:
$$r_n^2 = R^2 - (R-t)^2 = 2Rt - t^2 \approx 2Rt \quad (\text{since } t \ll R)$$

$$\therefore \quad t = \frac{r_n^2}{2R}$$

### Condition for Dark Rings (Reflected Light)

The condition for destructive interference (dark rings) including the $\pi$ phase shift:

$$2t = m\lambda, \quad m = 0, 1, 2, \ldots$$

Substituting $t = \frac{r_n^2}{2R}$:

$$r_n^2 = m\lambda R$$

Since diameter $D_n = 2r_n$:

$$\frac{D_n^2}{4} = n\lambda R$$

$$\boxed{D_n^2 = 4n\lambda R} \implies D_n \propto \sqrt{n}$$

### Condition for Bright Rings (Reflected Light)

$$2t = (2m-1)\frac{\lambda}{2}, \quad m = 1, 2, 3, \ldots$$

$$r_n^2 = (2m-1)\frac{\lambda R}{2}$$

$$\boxed{D_n = \sqrt{2(2m-1)\lambda R}}$$

### Radius of Curvature of the Lens

Using two dark rings of orders $m$ and $n$ ($m > n$):

$$D_m^2 - D_n^2 = 4m\lambda R - 4n\lambda R = 4(m-n)\lambda R$$

$$\boxed{R = \frac{D_m^2 - D_n^2}{4(m-n)\lambda}}$$

This formula eliminates errors due to the central spot not being perfectly dark.

### Thickness of the Air Film (at $n$th dark ring)

$$\boxed{t = \frac{n\lambda}{2}}$$

### Measurement of Wavelength by Newton's Rings

Plotting $D_n^2$ vs. ring number $n$ gives a **straight line** with slope:

$$\text{slope} = \frac{D_{n+p}^2 - D_n^2}{p} = 4\lambda R$$

$$\therefore \quad \boxed{\lambda = \frac{\text{slope}}{4R}}$$

and equivalently:

$$R = \frac{\text{slope}}{4\lambda}$$

---

## 9. Fresnel Biprism

### What is a Biprism?

A **Fresnel Biprism** is a special optical prism formed by joining **two thin prisms base-to-base** (or equivalently, a single glass prism with a very obtuse apex angle, ~179°).

```
        S (narrow slit, monochromatic light)
        |
        ↓
    ┌───┬───┐
    │  / \  │   ← Biprism
    │ /   \ │
    └───────┘
    
   S₁'  S₂'  ← Two virtual coherent sources
       ↓
   [Interference fringes on screen]
```

### Working Principle

1. A narrow slit **S** is illuminated by monochromatic light
2. The Fresnel biprism is placed close to the slit
3. The biprism **refracts** the light from S into two beams
4. These two beams appear to come from two **virtual coherent sources S₁' and S₂'**
5. The beams overlap and produce interference fringes on a screen
6. This is a **wavefront-splitting** method of producing coherent sources

### Fringe Width Formula

$$\beta = \frac{\lambda D}{d}$$

where:
- $\lambda$ = wavelength of light
- $D$ = distance between the virtual sources and the screen
- $d$ = distance between the two virtual sources S₁' and S₂'

Rearranging to find wavelength:

$$\boxed{\lambda = \frac{\beta d}{D}}$$

### Measuring $d$ (Virtual Source Separation)

$d$ cannot be measured directly. It is found using a **convex lens** placed between the biprism and screen:
- For lens position giving two real images: $d = \sqrt{d_1 \cdot d_2}$
- where $d_1$, $d_2$ are the separations of images at the two conjugate positions

> 📖 **Reference:** Longhurst, R.S. *Geometrical and Physical Optics* (3rd ed.), Chapter 9.

---

## 10. Thin Film Interference

### What is a Thin Film?

A **thin film** is a very thin, transparent layer of a material whose thickness **$t$** is comparable to the wavelength of visible light (~100 nm to a few μm).

**Common Examples:**
- Soap bubbles (iridescent colors)
- Oil film on water (rainbow patterns)
- Anti-reflection coatings on lenses
- Newton's Rings air film
- Optical filters and coatings

### Mechanism

When light falls on a thin film:
1. Part of the beam reflects from the **top surface** (Surface A: air-to-film boundary)
2. Part transmits, reflects from **bottom surface** (Surface B: film-to-air/glass boundary), and comes back up
3. These two reflected beams **interfere**

```
Incident        Reflected
  light  ↘    ↗  light
          \  /
Surface A: ────────  (air/film interface)
           ↓ r₁  ↑ r₂
    Film   │    │   (thickness t, refractive index μ)
           ↓    ↑
Surface B: ────────  (film/glass interface)
```

### Phase Change on Reflection (Stokes' Rule)

- Reflection from **denser** medium: Phase change of **π** (180°) — equivalent to path difference of $\lambda/2$
- Reflection from **rarer** medium: **No phase change**

### Optical Path Difference

For a film of thickness $t$, refractive index $\mu$, with angle of refraction $r$:

$$\text{Optical Path Difference} = 2\mu t \cos r$$

With the phase shift of $\pi$ at one surface (for film surrounded by less dense media on both sides, or more dense on both sides — i.e., air film):

**For Dark (Destructive) in Reflected Light:**
$$\boxed{2\mu t \cos r = m\lambda}, \quad m = 0, 1, 2, \ldots$$

**For Bright (Constructive) in Reflected Light:**
$$\boxed{2\mu t \cos r = (2m-1)\frac{\lambda}{2}}, \quad m = 1, 2, 3, \ldots$$

> ⚠️ Note: The conditions flip for **transmitted light** (no phase reversal in transmission).

### Minimum Thickness for Dark Film (Reflected Light)

For $m = 1$ (minimum):

$$t_{min} = \frac{\lambda}{2\mu \cos r}$$

---

## 11. Solved Numerical Problems

---

### Problem 1 — YDSE: Find Wavelength of Light

> **Q:** In YDSE, fringe width $\beta = 0.3$ mm, screen distance $D = 1.5$ m, slit separation $d = 2$ mm. Find $\lambda$.

**Given:**
- $\beta = 0.3 \text{ mm} = 3 \times 10^{-4} \text{ m}$
- $D = 1.5 \text{ m}$
- $d = 2 \text{ mm} = 2 \times 10^{-3} \text{ m}$

**Formula:** $\beta = \dfrac{\lambda D}{d}$

**Solution:**

$$\lambda = \frac{\beta \cdot d}{D} = \frac{3 \times 10^{-4} \times 2 \times 10^{-3}}{1.5}$$

$$\boxed{\lambda = 4 \times 10^{-7} \text{ m} = 4000 \text{ Å}}$$

---

### Problem 2 — Newton's Rings: Radius of Curvature

> **Q (2023):** In Newton's rings experiment, $D_{15} = 0.59$ cm, $D_5 = 0.336$ cm, $R = 100$ cm. Find $\lambda$.

**Given:**
- $D_{15} = 0.59 \text{ cm}$, $D_5 = 0.336 \text{ cm}$
- $R = 100 \text{ cm}$, $p = 15 - 5 = 10$

**Formula:** $\lambda = \dfrac{D_m^2 - D_n^2}{4pR}$

**Solution:**

$$D_{15}^2 - D_5^2 = (0.59)^2 - (0.336)^2 = 0.3481 - 0.112896 = 0.2352 \text{ cm}^2$$

$$\lambda = \frac{0.2352}{4 \times 10 \times 100} = \frac{0.2352}{4000}$$

$$\boxed{\lambda = 5.88 \times 10^{-5} \text{ cm} = 5880 \text{ Å}}$$

---

### Problem 3 — Newton's Rings: R and Air Film Thickness

> **Q (2020/2019):** Newton's rings in reflected light, $\lambda = 5.9 \times 10^{-5}$ cm, $D_{10} = 0.5$ cm. Find R and thickness of air film.

**Given:**
- $\lambda = 5.9 \times 10^{-5} \text{ cm}$
- $D_{10} = 0.5 \text{ cm}$, $n = 10$

**Part (a): Radius of Curvature R**

Using $D_n^2 = 4n\lambda R$:

$$R = \frac{D_n^2}{4n\lambda} = \frac{(0.5)^2}{4 \times 10 \times 5.9 \times 10^{-5}}$$

$$R = \frac{0.25}{2.36 \times 10^{-3}}$$

$$\boxed{R = 106 \text{ cm}}$$

**Part (b): Thickness of Air Film**

$$t = \frac{n\lambda}{2} = \frac{10 \times 5.9 \times 10^{-5}}{2}$$

$$\boxed{t = 2.95 \times 10^{-4} \text{ cm}}$$

---

### Problem 4 — YDSE: Slit Separation (2019/2022)

> **Q:** Green light $\lambda = 5189$ Å from a narrow slit is incident on a double slit. Overall separation of 10 fringes on a screen 200 cm away is 2 cm. Find slit separation.

**Given:**
- $\lambda = 5189 \text{ Å} = 5.189 \times 10^{-5} \text{ cm}$
- $D = 200 \text{ cm}$
- Overall width of 10 fringes = 2 cm → $\beta = 2/10 = 0.2 \text{ cm}$

**Formula:** $d = \dfrac{\lambda D}{\beta}$

$$d = \frac{5.189 \times 10^{-5} \times 200}{0.2} = \frac{5.189 \times 10^{-5} \times 200}{0.2}$$

$$\boxed{d = 0.052 \text{ cm} = 5.2 \times 10^{-4} \text{ m}}$$

---

### Problem 5 — YDSE: Bright Fringe Width (2021)

> **Q:** In YDSE, $d = 0.8$ mm, $D = 1$ m, $\lambda = 5890 \times 10^{-10}$ m. Find bright fringe width.

**Given:**
- $d = 0.8 \text{ mm} = 8 \times 10^{-4} \text{ m}$
- $D = 1 \text{ m}$
- $\lambda = 5890 \times 10^{-10} \text{ m} = 5.89 \times 10^{-7} \text{ m}$

$$\beta = \frac{\lambda D}{d} = \frac{5.89 \times 10^{-7} \times 1}{8 \times 10^{-4}}$$

$$\boxed{\beta = 7.36 \times 10^{-4} \text{ m} = 0.736 \text{ mm}}$$

---

### Problem 6 — YDSE: Slit Separation (2018)

> **Q:** Sodium light $\lambda = 589$ nm, screen 0.8 m away, bright fringes 0.35 cm apart. Find slit separation.

**Given:**
- $\lambda = 589 \text{ nm} = 589 \times 10^{-9} \text{ m}$
- $D = 0.8 \text{ m}$
- $\beta = 0.35 \text{ cm} = 0.0035 \text{ m}$

$$d = \frac{\lambda D}{\beta} = \frac{589 \times 10^{-9} \times 0.8}{0.0035} = \frac{4.712 \times 10^{-7}}{3.5 \times 10^{-3}}$$

$$\boxed{d = 1.35 \times 10^{-4} \text{ m} = 0.135 \text{ mm}}$$

---

### Problem 7 — Fresnel Biprism (2019)

> **Q:** A biprism placed 5 cm from a slit is illuminated by sodium light ($\lambda = 5890$ Å). Virtual source separation = 0.05 cm. Eyepiece is 75 cm from biprism. Find fringe width.

**Given:**
- $\lambda = 5890 \text{ Å} = 5890 \times 10^{-8} \text{ cm}$
- $D = 5 + 75 = 80 \text{ cm}$ (total distance from slit to eyepiece)
- $d = 0.05 \text{ cm}$

$$\beta = \frac{\lambda D}{d} = \frac{5890 \times 10^{-8} \times 80}{0.05}$$

$$\boxed{\beta = 94.24 \times 10^{-3} \text{ cm} = 0.942 \text{ mm}}$$

---

### Problem 8 — Thin Film: Minimum Thickness for Dark

> **Q:** Sodium light ($\lambda = 5893$ Å) on glass plate ($\mu = 1.5$), angle of refraction = 60°. Find minimum thickness for dark by reflection.

**Given:**
- $\lambda = 5893 \text{ Å} = 5893 \times 10^{-10} \text{ m}$
- $\mu = 1.5$, $r = 60°$, $\cos 60° = 0.5$

**Condition for dark (reflected):** $2\mu t \cos r = m\lambda$

For minimum thickness, $m = 1$:

$$t_{min} = \frac{\lambda}{2\mu \cos r} = \frac{5893 \times 10^{-10}}{2 \times 1.5 \times 0.5} = \frac{5893 \times 10^{-10}}{1.5}$$

$$\boxed{t_{min} = 3929 \text{ Å} \approx 3.93 \times 10^{-7} \text{ m}}$$

---

### Problem 9 — Snell's Law (Refraction at Water-Glass Interface)

> **Q:** $\mu_{water} = 1.33$, $\mu_{glass} = 1.53$. Find angle of refraction when light goes from water to glass.

**Using Snell's Law:** $n_1 \sin i = n_2 \sin r$

$$1.33 \sin i = 1.53 \sin r$$

$$\sin r = \frac{1.33}{1.53} \sin i = 0.869 \sin i$$

$$\boxed{r = \sin^{-1}(0.869 \sin i)}$$

Since light goes from rarer (water) to denser (glass), $r < i$ — the ray bends **towards the normal**.

---

## 12. Quick Formula Sheet

### YDSE Formulas

| Quantity | Formula |
|---|---|
| Fringe width | $\beta = \dfrac{\lambda D}{d}$ |
| Position of $n$th bright fringe | $x_n = \dfrac{nD\lambda}{d}$ |
| Position of $n$th dark fringe | $x_n = \dfrac{(2n-1)D\lambda}{2d}$ |
| Wavelength | $\lambda = \dfrac{\beta d}{D}$ |
| Slit separation | $d = \dfrac{\lambda D}{\beta}$ |

### Newton's Rings Formulas

| Quantity | Formula |
|---|---|
| Diameter of $n$th dark ring | $D_n^2 = 4n\lambda R$ |
| Diameter of $n$th bright ring | $D_n = \sqrt{2(2n-1)\lambda R}$ |
| Radius of curvature | $R = \dfrac{D_m^2 - D_n^2}{4(m-n)\lambda}$ |
| Wavelength from rings | $\lambda = \dfrac{D_{n+p}^2 - D_n^2}{4pR}$ |
| Thickness of air film | $t = \dfrac{n\lambda}{2}$ |

### Thin Film Formulas (Reflected Light)

| Condition | Formula |
|---|---|
| Dark (destructive) | $2\mu t \cos r = m\lambda$ |
| Bright (constructive) | $2\mu t \cos r = (2m-1)\dfrac{\lambda}{2}$ |
| Min. thickness for dark | $t_{min} = \dfrac{\lambda}{2\mu \cos r}$ |

### Intensity Formulas

| Quantity | Formula |
|---|---|
| General resultant intensity | $I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos\phi$ |
| Equal amplitudes | $I = 4A^2 \cos^2\left(\dfrac{\phi}{2}\right)$ |
| Maximum intensity | $I_{max} = (A_1 + A_2)^2 = 4A^2$ (equal amps) |
| Minimum intensity | $I_{min} = (A_1 - A_2)^2 = 0$ (equal amps) |
| Average intensity | $I_{avg} = I_1 + I_2 = 2A^2$ (equal amps) |

### Electromagnetic Spectrum (Visible Region Reference)

| Color | Wavelength Range |
|---|---|
| Violet | 380 – 450 nm |
| Blue | 450 – 495 nm |
| Green | 495 – 570 nm |
| Yellow | 570 – 590 nm |
| Orange | 590 – 620 nm |
| Red | 620 – 700 nm |
| **Sodium D-line** | **589 nm (5893 Å)** |

---

## 📚 References & Further Reading

1. **Hecht, E.** — *Optics* (5th Edition), Pearson — Chapters 9, 10, 12
2. **Born, M. & Wolf, E.** — *Principles of Optics* (7th Edition), Cambridge — Chapters 7, 8
3. **Jenkins, F.A. & White, H.E.** — *Fundamentals of Optics* (4th Edition), McGraw-Hill — Chapters 13, 14
4. **Longhurst, R.S.** — *Geometrical and Physical Optics* (3rd Edition) — Chapter 9 (Biprism)
5. **Ghatak, A.** — *Optics* (6th Edition), McGraw-Hill — Chapters 14–17
6. **NPTEL Lectures** — Wave Optics, IIT Madras: [nptel.ac.in](https://nptel.ac.in)
7. **HyperPhysics (Georgia State Univ.)** — [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/intercon.html)

---

> 📝 **Exam Tips:**
> - Always state the formula before substituting values in numericals
> - For Newton's rings problems, always verify whether the question asks for dark or bright rings — the formulas differ
> - In thin film problems, carefully determine which surfaces cause phase reversal before writing the interference condition
> - The fringe width formula $\beta = \lambda D/d$ is the single most tested formula in this chapter

---

*Last Updated: 2026 | Based on university exam papers 2017–2023 and standard optics textbooks.*
