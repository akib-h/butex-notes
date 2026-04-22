# 🌈 Chapter 6: Interference of Light

> **Topics:** Coherent Sources · Constructive & Destructive Interference · Young's DSE · Newton's Rings · Fresnel's Biprism · Thin Films

---

## Table of Contents
- [1. Wave Front and Huygens' Principle](#1-wave-front-and-huygens-principle)
- [2. Coherent Sources](#2-coherent-sources)
- [3. Constructive and Destructive Interference](#3-constructive-and-destructive-interference)
- [4. Young's Double Slit Experiment](#4-youngs-double-slit-experiment)
- [5. Newton's Rings](#5-newtons-rings)
- [6. Fresnel's Biprism](#6-fresnels-biprism)
- [7. Thin Films](#7-thin-films)
- [8. Solved Numerical Problems](#8-solved-numerical-problems)
- [References](#references)

---

## 1. Wave Front and Huygens' Principle

### Q: What is wave front? *(2022, 2019)*

A **wave front** is the locus of all points in a medium that are vibrating in the same phase at the same instant.

```
  Point source:           Plane source:
     ·                  ───────────────
   ○ ○ ○               ───────────────  ← plane wavefronts
  ○ · ○                ───────────────
   ○ ○ ○
   (spherical wavefronts)
```

**Types:**
- **Spherical:** From a point source (at close range)
- **Cylindrical:** From a line source
- **Plane:** Far from a point source (parallel rays)

### Huygens' Principle

> *Every point on a wave front acts as a secondary source of wavelets. The new wave front is the envelope of all these secondary wavelets.*

This principle explains reflection, refraction, diffraction, and interference.

---

## 2. Coherent Sources

### Q: Define coherent source. *(2022, 2018)*

**Coherent sources** are two sources that emit light waves with:
1. The **same wavelength** (or frequency)
2. A **constant phase difference** (zero or fixed)

```
  Coherent sources:          Incoherent sources:
  S₁: ───∿∿∿∿∿∿───          S₁: ───∿∿∿∿∿∿───
  S₂: ─────∿∿∿∿∿∿─          S₂: ──∿∿∿───∿∿──  (random phase shifts)
      (fixed phase diff)         (random phase difference)
```

**Why coherence matters:**
- Non-coherent sources produce a randomly shifting interference pattern, which averages to uniform illumination (no visible fringes)
- Only coherent sources produce a sustained, visible interference pattern

**Ways to obtain coherent sources:**
1. Division of wave front: Young's double slit, Fresnel biprism
2. Division of amplitude: Newton's rings, thin films, Michelson interferometer

---

## 3. Constructive and Destructive Interference

### Q: Explain constructive and destructive interference. *(2022, 2021, 2020, 2019)*
### Q: Show that the distance between any two bright and dark fringes is equal. *(2022, 2020)*

### Principle of Superposition

When two waves overlap:
$$y = y_1 + y_2 = a_1\sin(\omega t) + a_2\sin(\omega t + \phi)$$

**Resultant amplitude:**
$$A = \sqrt{a_1^2 + a_2^2 + 2a_1 a_2\cos\phi}$$

**Resultant intensity:**
$$I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\phi$$

For equal amplitudes $a_1 = a_2 = a$:
$$I = 4a^2\cos^2(\phi/2)$$

### Constructive Interference (Bright Fringes)

Occurs when $\phi = 2n\pi$ (even multiples of $\pi$), i.e., **path difference** $= n\lambda$:

$$\Delta = n\lambda \quad (n = 0, \pm1, \pm2, ...)$$

$$I_{max} = 4a^2 \quad \text{(maximum intensity)}$$

### Destructive Interference (Dark Fringes)

Occurs when $\phi = (2n+1)\pi$, i.e., path difference $= (2n+1)\frac{\lambda}{2}$:

$$\Delta = (2n+1)\frac{\lambda}{2} \quad (n = 0, \pm1, \pm2, ...)$$

$$I_{min} = 0 \quad \text{(zero intensity)}$$

### Intensity Distribution Graph

```
  Intensity
     ↑
  4a²│    █         █         █         █
     │   █ █       █ █       █ █       █ █
     │  █   █     █   █     █   █     █   █
   0 │─█─────█───█─────█───█─────█───█─────→ Position
         dark  bright dark  bright
     ←── β ──→
     (fringe width)
```

The **maximum intensity** ($4a^2$) is **double** the sum of individual intensities ($2a^2$) — energy is redistributed, not created or destroyed.

---

## 4. Young's Double Slit Experiment

### Q: Describe Young's double slit experiment and find the condition for constructive and destructive interference. *(2021)*

### Setup

```
     S (source)
        │
        │  (single slit)
        ↓
  ─────────────
  │    S₀    │   ← single slit
  ─────────────
        │ light
        ↓
  ─────────────
  │ S₁    S₂ │   ← double slit (separation d)
  ─────────────
     ↓     ↓
      ╲   ╱
       ╲ ╱         D (distance to screen)
        X
       ╱ ╲
  ─────────────────────
  │  Screen            │  ← interference pattern
  ─────────────────────
           ↑ P (point at height y from center)
```

**Parameters:**
- $d$ = slit separation
- $D$ = distance from slits to screen
- $\lambda$ = wavelength
- $y$ = distance of point P from central maximum

### Path Difference

For point P at height $y$:
$$\Delta = S_2P - S_1P \approx \frac{yd}{D}$$

### Condition for Bright Fringes

$$\frac{yd}{D} = n\lambda$$

$$\boxed{y_n = \frac{n\lambda D}{d}} \quad (n = 0, \pm1, \pm2, ...)$$

### Condition for Dark Fringes

$$\frac{yd}{D} = (2n-1)\frac{\lambda}{2}$$

$$\boxed{y_n = \frac{(2n-1)\lambda D}{2d}} \quad (n = 1, 2, 3, ...)$$

### Fringe Width (Fringe Separation)

Distance between two consecutive bright (or dark) fringes:

$$\beta = y_{n+1} - y_n = \frac{(n+1)\lambda D}{d} - \frac{n\lambda D}{d}$$

$$\boxed{\beta = \frac{\lambda D}{d}}$$

**This proves that bright and dark fringes are equally spaced.**

The dark fringe width is also $\beta$ — separation between consecutive dark fringes = $\frac{\lambda D}{d}$.

---

## 5. Newton's Rings

### Q: What is Newton's ring? Find the wavelength of monochromatic light by Newton's rings method. *(2022, 2021, 2020, 2019, 2017)*
### Q: Explain why the center of Newton's ring always dark. *(2021)*

### Formation

A plano-convex lens rests on a plane glass plate. When illuminated from above, light reflects from the curved bottom of the lens and the flat top of the plate. These two reflected waves interfere.

```
           Incident light ↓ ↓ ↓ ↓
     ─────────────────────────────────
            Plano-convex lens
     ─────────────────────────────────
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Glass plate (flat)
     
     Air film of varying thickness t:
     └─ center: t = 0  (dark center)
     └─ increases outward
```

### Why Center is Dark

At the center, the air film thickness $t = 0$. The ray reflecting from the top of the glass plate undergoes an additional **phase change of π** (half wavelength) because it reflects from a denser medium. So:

- Ray from lens bottom: **no phase change**
- Ray from glass plate top: **phase change of λ/2**

Net path difference = $0 + \frac{\lambda}{2} = \frac{\lambda}{2}$ → **destructive interference → dark center**

### Diameter of Rings

For reflected light, the condition for dark rings ($r_n$ = radius of $n$th dark ring, $R$ = radius of curvature):

$$r_n^2 = n\lambda R$$

**Diameter of nth dark ring:** $D_n = 2r_n$

$$D_n^2 = 4n\lambda R$$

For the $m$th and $n$th dark rings ($m > n$):

$$D_m^2 - D_n^2 = 4(m-n)\lambda R$$

$$\boxed{\lambda = \frac{D_m^2 - D_n^2}{4(m-n)R}}$$

This is used to **determine the wavelength experimentally**.

**For bright rings:**
$$D_n^2 = (2n-1) \cdot 2\lambda R$$

### Summary Table

| Ring type | nth dark ring | nth bright ring |
|---|:---:|:---:|
| Radius | $r_n = \sqrt{n\lambda R}$ | $r_n = \sqrt{(2n-1)\lambda R/2}$ |
| Diameter² | $D_n^2 = 4n\lambda R$ | $D_n^2 = 2(2n-1)\lambda R$ |

---

## 6. Fresnel's Biprism

### Q: What is biprism? Describe Fresnel's biprism method for the determination of wavelength of light. *(2023, 2020, 2019, 2018)*

### What is Biprism?

A **Fresnel biprism** is two prisms joined at their bases, forming a thin prism with a very small refracting angle.

```
               /│╲
              / │ ╲
      S ─── /  │  ╲ ─── screen
            ╲  │  ╱      (interference pattern)
             ╲ │ ╱
              ╲│╱
    S₁ and S₂ = virtual coherent images of S
```

Light from slit S refracts through the upper and lower halves of the biprism, appearing to come from two virtual coherent sources $S_1$ and $S_2$.

### Setup

```
  S ────────│biprism│──────────────│ Screen │
        a             b
  
  S = source slit
  a = distance from S to biprism
  b = distance from biprism to screen
  D = total distance = a + b
  d = separation of virtual sources S₁ and S₂
```

### Fringe Width Formula

$$\beta = \frac{\lambda D}{d} \implies \lambda = \frac{\beta d}{D}$$

### Determination of $d$ (Separation of Virtual Sources)

A convex lens is placed between biprism and screen. Two positions of the lens give real images of $S_1$ and $S_2$:

1. **Position 1:** Images closer together → separation $d_1$
2. **Position 2:** Images farther apart → separation $d_2$

$$d = \sqrt{d_1 \cdot d_2}$$

### Wavelength Calculation

$$\boxed{\lambda = \frac{\beta \cdot d}{D} = \frac{\beta \sqrt{d_1 d_2}}{D}}$$

Where $\beta$ is measured from the fringe pattern on screen.

---

## 7. Thin Films

### Q: What is thin film? *(2022, 2018)*

A **thin film** is an optical medium of very small thickness (comparable to the wavelength of light), bounded by two surfaces from which reflected waves interfere.

```
    Incident ray  ─────────────↘
                   ─────────────────────
                  │       Thin film     │  thickness t
                   ─────────────────────
                                ↗────────
                   Transmitted ray
```

**Condition for bright (constructive) reflection:**
$$2\mu t\cos r = (2n-1)\frac{\lambda}{2}$$

**Condition for dark (destructive) reflection:**
$$2\mu t\cos r = n\lambda$$

Where $\mu$ = refractive index of film, $r$ = angle of refraction, $t$ = thickness.

**Examples:**
- Colors on soap bubbles and oil spills (varying thickness → different colors bright at each point)
- Anti-reflection coatings on camera lenses (destructive interference for reflected light)
- Optical filters

---

## 8. Solved Numerical Problems

---

### Problem 1 *(2021)*
**In Young's double slit experiment: slit separation = 0.8 mm, screen distance = 1 m. Find fringe width with λ = 5890×10⁻¹⁰ m.**

**Given:**
- $d = 0.8 \, \text{mm} = 8 \times 10^{-4} \, \text{m}$
- $D = 1 \, \text{m}$
- $\lambda = 5890 \times 10^{-10} \, \text{m} = 5.89 \times 10^{-7} \, \text{m}$

**Solution:**

$$\beta = \frac{\lambda D}{d} = \frac{5.89 \times 10^{-7} \times 1}{8 \times 10^{-4}}$$

$$\boxed{\beta = 7.36 \times 10^{-4} \, \text{m} = 0.736 \, \text{mm}}$$

---

### Problem 2 *(2022, 2021, 2020, 2019)*
**Green light of wavelength 5100 Å from a narrow slit is incident on a double slit. The overall separation of 10 fringes on a screen 200 cm away is 2 cm. Find the slit separation.**

**Given:**
- $\lambda = 5100 \, \text{Å} = 5100 \times 10^{-10} \, \text{m} = 5.1 \times 10^{-7} \, \text{m}$
- $D = 200 \, \text{cm} = 2 \, \text{m}$
- 10 fringe widths = 2 cm → $\beta = 2 \, \text{mm} = 2 \times 10^{-3} \, \text{m}$

**Solution:**

$$\beta = \frac{\lambda D}{d} \implies d = \frac{\lambda D}{\beta}$$

$$d = \frac{5.1 \times 10^{-7} \times 2}{2 \times 10^{-3}}$$

$$\boxed{d = 5.1 \times 10^{-4} \, \text{m} = 0.51 \, \text{mm}}$$

---

### Problem 3 *(2023, 2019)*
**Newton's rings are observed in reflected light A = 5.9×10⁻⁵ cm. The diameter of the 10th dark ring is 0.5 cm. Find the radius of curvature of the lens and thickness of the air film.**

**Given:**
- $\lambda = 5.9 \times 10^{-5} \, \text{cm} = 5.9 \times 10^{-7} \, \text{m}$
- $n = 10$
- $D_{10} = 0.5 \, \text{cm} = 5 \times 10^{-3} \, \text{m}$

**Solution:**

**Radius of curvature:**
$$D_n^2 = 4n\lambda R \implies R = \frac{D_n^2}{4n\lambda}$$

$$R = \frac{(5 \times 10^{-3})^2}{4 \times 10 \times 5.9 \times 10^{-7}}$$

$$R = \frac{25 \times 10^{-6}}{2.36 \times 10^{-5}}$$

$$\boxed{R = 1.059 \, \text{m} \approx 1.06 \, \text{m}}$$

**Thickness of air film at 10th ring** (using $r_n^2 = n\lambda R$):
$$r_{10}^2 = n\lambda R \implies t = \frac{r^2}{2R} = \frac{n\lambda R}{2R} = \frac{n\lambda}{2}$$

$$t = \frac{10 \times 5.9 \times 10^{-7}}{2}$$

$$\boxed{t = 2.95 \times 10^{-6} \, \text{m} = 2.95 \, \mu\text{m}}$$

---

### Problem 4 *(2021 — Newton's ring)* 
**In Newton's rings experiment, diameter of 15th ring = 0.59 cm, diameter of 5th ring = 0.336 cm, radius of plano-convex lens = 100 cm. Calculate the wavelength.**

**Given:**
- $D_{15} = 0.59 \, \text{cm}$
- $D_5 = 0.336 \, \text{cm}$
- $R = 100 \, \text{cm} = 1 \, \text{m}$
- $m = 15$, $n = 5$

**Solution:**

$$\lambda = \frac{D_m^2 - D_n^2}{4(m-n)R}$$

$$\lambda = \frac{(0.59)^2 - (0.336)^2}{4(15-5) \times 100} \quad \text{(in cm)}$$

$$\lambda = \frac{0.3481 - 0.112896}{4000}$$

$$\lambda = \frac{0.235204}{4000} \, \text{cm}$$

$$\lambda = 5.88 \times 10^{-5} \, \text{cm}$$

$$\boxed{\lambda \approx 5880 \, \text{Å}}$$

---

### Problem 5 *(2018)*
**Light from sodium lamp (λ = 589 nm) forms an interference pattern on a screen 0.8 m from a pair of slits. Bright fringes are 0.35 cm apart. Find slit separation.**

**Given:**
- $\lambda = 589 \, \text{nm} = 589 \times 10^{-9} \, \text{m}$
- $D = 0.8 \, \text{m}$
- $\beta = 0.35 \, \text{cm} = 3.5 \times 10^{-3} \, \text{m}$

**Solution:**

$$d = \frac{\lambda D}{\beta} = \frac{589 \times 10^{-9} \times 0.8}{3.5 \times 10^{-3}}$$

$$\boxed{d = 1.346 \times 10^{-4} \, \text{m} \approx 0.135 \, \text{mm}}$$

---

### Problem 6 *(2019)*
**A biprism is placed 5 cm from a narrow slit illuminated by sodium light (λ = 5890 Å). The virtual source separation = 0.05 cm. Find the fringe width in an eyepiece placed 75 cm from the biprism.**

**Given:**
- $a = 5 \, \text{cm}$, $b = 75 \, \text{cm}$
- $D = a + b = 80 \, \text{cm} = 0.8 \, \text{m}$
- $d = 0.05 \, \text{cm} = 5 \times 10^{-4} \, \text{m}$
- $\lambda = 5890 \times 10^{-10} \, \text{m}$

**Solution:**

$$\beta = \frac{\lambda D}{d} = \frac{5890 \times 10^{-10} \times 0.8}{5 \times 10^{-4}}$$

$$\boxed{\beta = 9.424 \times 10^{-4} \, \text{m} \approx 0.94 \, \text{mm}}$$

---

### Problem 7 *(2018, 2022)*
**Determine Snell's law from Huygens' principle. The refractive indices of water and glass are 1.33 and 1.53. Find the angle of refraction if light incidents on glass from water.**

**Given:**
- $n_1$ (water) $= 1.33$
- $n_2$ (glass) $= 1.53$
- Angle of incidence: assume $\theta_i = 90°$ from normal

Using Snell's law: $n_1 \sin\theta_i = n_2 \sin\theta_r$

For $\theta_i = 90°$: $\sin\theta_r = \frac{n_1}{n_2} = \frac{1.33}{1.53} = 0.869$

$$\theta_r = \sin^{-1}(0.869) \approx 60.2°$$

*(More typical problem specifies angle of incidence — solve accordingly.)*

---

## References

1. Hecht, E. — *Optics*, 5th ed., Ch. 9 (Interference), Pearson/Addison-Wesley
2. Born, M. & Wolf, E. — *Principles of Optics*, 7th ed., Cambridge University Press
3. Pedrotti, F.L. & Pedrotti, L.S. — *Introduction to Optics*, 3rd ed., Pearson
4. Newton, I. (1704) — *Opticks*, (Newton's rings originally described here)
5. Young, T. (1801) — *On the Theory of Light and Colours*, Phil. Trans. R. Soc.
6. Fresnel, A. (1818) — Works on wave optics and biprism
7. [HyperPhysics — Interference](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/intercon.html)
8. [Khan Academy — Wave Optics](https://www.khanacademy.org/science/physics/light-waves)

---

*[← Circular Motion](./05_Circular_Motion.md) | [Back to README](./README.md) | [Diffraction →](./07_Diffraction.md)*
