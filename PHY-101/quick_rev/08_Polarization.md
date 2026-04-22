# 🌀 Chapter 8: Polarization of Light

> **Topics:** Polarization · Brewster's Law · Malus's Law · Nicol Prism · Double Refraction · Specific Rotation

---

## Table of Contents
- [1. Polarization of Light](#1-polarization-of-light)
- [2. Plane of Polarization and Plane of Vibration](#2-plane-of-polarization-and-plane-of-vibration)
- [3. Polarized vs Unpolarized Light](#3-polarized-vs-unpolarized-light)
- [4. Double Refraction (Birefringence)](#4-double-refraction-birefringence)
- [5. O-ray and E-ray](#5-o-ray-and-e-ray)
- [6. Brewster's Law](#6-brewsters-law)
- [7. Malus's Law](#7-maluss-law)
- [8. Nicol Prism](#8-nicol-prism)
- [9. Specific Rotation](#9-specific-rotation)
- [10. Solved Numerical Problems](#10-solved-numerical-problems)
- [References](#references)

---

## 1. Polarization of Light

### Q: Define polarization. *(2021, 2019)*

**Light** is a transverse electromagnetic wave. In ordinary (unpolarized) light, the electric field vibrates in **all planes** perpendicular to the direction of propagation.

**Polarized light** is light in which the electric field vibrations are **restricted to a single plane**.

```
  Unpolarized light:          Plane Polarized light:
  
  ↕  →  ↘  ↙  ↗  ←          Only ↕ vibrations remain
  ←←←←←←←← propagation →     ←←←←←←← propagation →
  (vibrations in all planes)   (vibrations in one plane)
```

### Methods of Producing Polarized Light

1. **Reflection** (Brewster's angle)
2. **Refraction** through a pile of plates
3. **Double refraction** (through calcite/Iceland spar)
4. **Selective absorption** (Polaroid sheets)
5. **Scattering** (blue sky is partially polarized)

---

## 2. Plane of Polarization and Plane of Vibration

### Q: Define plane of polarization and plane of vibration. *(2020)*

```
    Direction of propagation →

          y
          ↑
          │ ← plane of vibration (x-y plane)
          │     (contains direction of vibration and propagation)
    ──────┼────────────→ x (vibration direction)
          │
          z ← plane of polarization (x-z plane)
               (perpendicular to vibration, contains propagation direction)
```

- **Plane of vibration:** The plane containing the direction of vibration of the electric field and the direction of propagation.
- **Plane of polarization:** The plane **perpendicular** to the plane of vibration, containing the direction of propagation.

> **Note:** Modern convention: "plane of polarization" usually refers to the plane of the electric field vector (plane of vibration in old notation). Context determines which meaning is intended.

---

## 3. Polarized vs Unpolarized Light

### Q: Distinguish between polarized and unpolarized light. *(2019, 2018)*

| Property | Unpolarized Light | Polarized Light |
|---|---|---|
| Vibration direction | All directions ⊥ to propagation | One specific direction |
| Symmetry | Cylindrical symmetry about propagation axis | No cylindrical symmetry |
| Intensity through Polaroid | Halved (I₀/2) | Varies with angle (Malus's law) |
| Natural occurrence | Most light sources (sun, bulbs) | After reflection, refraction, Polaroid |
| Through second Polaroid | Varies from I₀/2 to 0 | Varies from I to 0 |

```
  Detecting polarization with analyzer (Polaroid):
  
  Unpolarized light → Analyzer:
  Rotate analyzer 360° → Intensity stays constant at I₀/2
  
  Polarized light → Analyzer:
  Rotate analyzer 360° → Intensity varies from I to 0 (Malus's law)
```

---

## 4. Double Refraction (Birefringence)

### Q: Explain double refraction. *(2023, 2021)*

When light enters certain **anisotropic crystals** (like calcite, quartz), it splits into **two refracted rays**:

```
     Incident ray
          ↓
    ──────────────── crystal surface
          │
     ─────┴──────
    ╱             ╲
   ↙               ↘
O-ray           E-ray
(Ordinary ray)  (Extraordinary ray)
```

**Ordinary ray (O-ray):**
- Obeys Snell's law
- Has same refractive index ($\mu_o$) in all directions
- Vibrates perpendicular to the principal plane

**Extraordinary ray (E-ray):**
- Does NOT obey Snell's law
- Refractive index ($\mu_e$) varies with direction
- Vibrates in the principal plane

### Optic Axis

The **optic axis** is a direction in the crystal along which both rays travel with the same velocity (no double refraction). It is NOT a single line but a **direction**.

---

## 5. O-ray and E-ray

### Q: Write the difference between e-ray and o-ray. *(2020)*

| Property | Ordinary Ray (O-ray) | Extraordinary Ray (E-ray) |
|---|---|---|
| Snell's Law | Obeys | Does not obey |
| Refractive index | Constant (isotropic) | Varies with direction |
| Wave surface | Spherical | Ellipsoidal |
| Velocity | Constant in all directions | Varies with direction |
| Vibration direction | ⊥ to principal section | ∥ to principal section |
| Along optic axis | Same velocity as E | Same velocity as O |

---

## 6. Brewster's Law

### Q: State Brewster's law. Show that at the polarizing angle, the reflected and refracted rays are at right angles to each other. *(2023, 2021, 2019)*

### Statement

> *When light is incident on a transparent surface at a particular angle (polarizing angle or Brewster's angle $\theta_B$), the reflected light is completely plane polarized with the vibration perpendicular to the plane of incidence.*

$$\boxed{\tan\theta_B = \mu = n_{12}}$$

Where $\mu$ is the refractive index of the second medium relative to the first.

### Proof: Reflected and Refracted Rays are Perpendicular

```
         Normal
           │
           │
Incident   │  θ_B       Reflected (polarized)
ray ───────●─────────────────
           │  θ_r
           │ ↘
           │  Refracted ray
           
At Brewster's angle: θ_B + θ_r = 90°
```

From Snell's law:
$$\mu = \frac{\sin\theta_B}{\sin\theta_r}$$

By Brewster's law: $\mu = \tan\theta_B = \frac{\sin\theta_B}{\cos\theta_B}$

Equating:
$$\frac{\sin\theta_B}{\sin\theta_r} = \frac{\sin\theta_B}{\cos\theta_B}$$

$$\sin\theta_r = \cos\theta_B = \sin(90° - \theta_B)$$

$$\theta_r = 90° - \theta_B$$

$$\boxed{\theta_B + \theta_r = 90°}$$

Therefore, the reflected and refracted rays are **perpendicular to each other**.

**Physical explanation:** At Brewster's angle, the component of the electric field parallel to the plane of incidence cannot oscillate to emit reflected light (the oscillating charges would need to radiate in the direction of the refracted ray, which is 90° away — impossible for a transverse wave).

---

## 7. Malus's Law

### Q: State and prove Malus's Law. *(2022, 2021, 2020, 2018)*

### Statement

> *When plane polarized light passes through an analyzer, the intensity of the transmitted light varies as the square of the cosine of the angle between the plane of polarization of the incident light and the axis of the analyzer.*

$$\boxed{I = I_0 \cos^2\theta}$$

Where:
- $I_0$ = intensity of polarized incident light
- $\theta$ = angle between polarization direction and analyzer axis
- $I$ = transmitted intensity

### Proof

Let the amplitude of polarized light be $a$ (vibrating at angle $\theta$ to analyzer axis).

The analyzer passes only the **component parallel to its axis:**

$$a_{\parallel} = a\cos\theta$$

Since intensity $\propto$ amplitude²:

$$I = ka_{\parallel}^2 = k(a\cos\theta)^2 = ka^2\cos^2\theta = I_0\cos^2\theta$$

$$\boxed{I = I_0\cos^2\theta}$$

```
  Intensity vs Angle (Malus's Law):
  
  I/I₀
  1.0│ ●
     │  ╲
  0.5│   ●───●
     │       ╲
  0  └────────●────────→ θ
     0°  45°  90° 135° 180°
     
  Maximum at θ = 0°, 180°
  Zero at θ = 90°, 270°
```

**Special cases:**
- $\theta = 0°$: $I = I_0$ (full transmission)
- $\theta = 45°$: $I = I_0/2$
- $\theta = 90°$: $I = 0$ (no transmission — polarizer and analyzer are crossed)

---

## 8. Nicol Prism

### Q: Describe the construction and working principle of Nicol prism. *(2023, 2022, 2021)*
### Q: Show that Nicol prism can be used as polarizer as well as analyzer. *(2023)*

### Construction

A **Nicol prism** is made from a calcite (Iceland spar) crystal cut and cemented with **Canada balsam** (refractive index $\mu = 1.55$).

```
  Cross-section of Nicol Prism:
  
  ╱══════════════╲
  ╱    calcite    ╲
  ╱                ╲
  ╱──────────────────╲  ← Canada balsam cement
  ╲                  ╱     (μ = 1.55)
  ╲    calcite      ╱
  ╲══════════════╱
  
  Left face: 68° to long axis
  End faces cut at 68° (original) → modified to allow TIR for O-ray
```

**Dimensions:** Original crystal cut so length = 3× width, end faces reshaped to be 68° to the long axis (originally 71°, modified by Nicol to allow his arrangement).

### Working Principle

Refractive indices of calcite:
- $\mu_o = 1.6584$ (ordinary ray)
- $\mu_e = 1.4864$ (extraordinary ray)
- Canada balsam: $\mu = 1.55$

```
  Unpolarized
  light in
    ──→        O-ray ──→ ╱─────────╲ → Total Internal Reflection
               E-ray ──→ ╱──────────╲ → passes through → POLARIZED OUTPUT
                         ← Nicol Prism →
```

**O-ray:** $\mu_o = 1.6584 > \mu_{balsam} = 1.55$ → undergoes **Total Internal Reflection** at the balsam layer → absorbed by blackened sides

**E-ray:** $\mu_e = 1.4864 < \mu_{balsam} = 1.55$ → passes through (no TIR) → exits as **plane polarized light**

### As Polarizer and Analyzer

- **As Polarizer:** Place in path of unpolarized light → transmits only E-ray (plane polarized)
- **As Analyzer:** Rotate a Nicol in the path of polarized light:
  - Bright (parallel Nicols): E-ray passes
  - Dark (crossed Nicols, 90°): E-ray blocked

**Extinction:** When two Nicols are crossed (90° to each other), no light passes through — **complete extinction**.

---

## 9. Specific Rotation

### Q: What are optically active substances? Describe the determination of specific rotation of sugar solution by polarimeter. *(2018)*
### Q: What is specific rotation? *(2022)*

### Optically Active Substances

Certain substances **rotate the plane of polarization** of transmitted polarized light. These are called **optically active**.

- **Dextrorotatory (d or +):** Rotates plane clockwise (e.g., glucose, cane sugar)
- **Levorotatory (l or -):** Rotates plane anti-clockwise (e.g., fructose)

**Examples of optically active substances:** Sugar solutions, amino acids, tartaric acid, quartz

### Specific Rotation

**Specific rotation** $[\alpha]$ is defined as the rotation produced by a solution of unit concentration (1 g/cm³) in a tube of unit length (1 dm = 10 cm):

$$\boxed{[\alpha] = \frac{\theta}{l \cdot c}}$$

Where:
- $\theta$ = angle of rotation (degrees)
- $l$ = length of the solution tube (in dm or cm, as specified)
- $c$ = concentration (g/cm³ or g/100 mL)

**Unit:** degree·cm²·g⁻¹ or simply degrees

**For pure liquid:**
$$[\alpha] = \frac{\theta}{l \cdot \rho}$$

where $\rho$ = density.

### Determination Using a Polarimeter

```
  Light source → Polarizer → Solution tube → Analyzer → Telescope/Eye
      S              P         (length l)        A            E
      
  [Sodium lamp used for monochromatic light]
```

**Steps:**
1. Zero the analyzer with no solution — adjust to darkest position (extinction)
2. Record angle: $\alpha_0$
3. Fill tube with sugar solution of known concentration $c$ and length $l$
4. Readjust analyzer to restore darkness
5. Record new angle: $\alpha$
6. Rotation: $\theta = \alpha - \alpha_0$
7. Calculate: $[\alpha] = \frac{\theta}{lc}$

---

## 10. Solved Numerical Problems

---

### Problem 1 *(2022)*
**Calculate the specific rotation of sugar if the plane of vibration is turned through 26.4° traversing 20 cm length of 20% sugar solution.**

**Given:**
- $\theta = 26.4°$
- $l = 20 \, \text{cm} = 2 \, \text{dm}$
- $c = 20\% = 20 \, \text{g per 100 mL} = 0.2 \, \text{g/mL} = 0.2 \, \text{g/cm}^3$

**Solution:**

$$[\alpha] = \frac{\theta}{l \times c}$$

Here $l$ in dm and $c$ in g/100mL (the common convention):
$$[\alpha] = \frac{26.4}{2 \times 20} = \frac{26.4}{40}$$

$$\boxed{[\alpha] = 0.66° \, \text{dm}^{-1} \, (100\text{mL/g}) = 66° \, \text{dm}^{-1} \, (\text{g/mL})^{-1}}$$

*In the standard pharmaceutical convention:* $[\alpha] = 66° \, \text{dm}^{-1} (\text{g/cm}^3)^{-1}$

---

### Problem 2 *(2018)*
**A tube 20 cm long filled with 15 g of cane sugar in 100 cc of water is placed in the path of polarized light. Find the angle of rotation if the specific rotation of cane sugar is 66° cc/gm/decimeter.**

**Given:**
- $l = 20 \, \text{cm} = 2 \, \text{dm}$
- Mass of sugar = $15 \, \text{g}$ in $100 \, \text{cc}$ → $c = 15/100 = 0.15 \, \text{g/cc}$
- $[\alpha] = 66°/(g/cc)/dm = 66 \, \text{cc·degree/(g·dm)}$

**Solution:**

$$\theta = [\alpha] \times l \times c = 66 \times 2 \times 0.15$$

$$\boxed{\theta = 19.8°}$$

---

### Problem 3 *(2021)*
**The refractive indices of water and glass are 1.33 and 1.49. Calculate the angle of refraction if a ray of light is incident on glass from water (at polarizing angle).**

**Given:**
- $\mu_1$ (water) $= 1.33$
- $\mu_2$ (glass) $= 1.49$

**Brewster's angle** for glass from water:

$$\tan\theta_B = \frac{\mu_2}{\mu_1} = \frac{1.49}{1.33} = 1.1203$$

$$\theta_B = \tan^{-1}(1.1203) \approx 48.3°$$

**Refraction angle** (since $\theta_B + \theta_r = 90°$):

$$\theta_r = 90° - 48.3°$$

$$\boxed{\theta_r = 41.7°}$$

---

### Problem 4 *(2019)*
**The refractive index of plastic is 1.25. Calculate the angle of refraction for a ray of light incident at the polarizing angle.**

**Given:**
- $\mu = 1.25$

**Step 1:** Find Brewster's angle:
$$\tan\theta_B = \mu = 1.25$$
$$\theta_B = \tan^{-1}(1.25) \approx 51.34°$$

**Step 2:** Angle of refraction (since reflected and refracted are 90° apart):
$$\theta_r = 90° - 51.34° = 38.66°$$

**Verify using Snell's law:**
$$\sin\theta_B = \mu \sin\theta_r$$
$$\sin(51.34°) = 1.25 \times \sin(38.66°)$$
$$0.7809 = 1.25 \times 0.625 = 0.781 \checkmark$$

$$\boxed{\theta_r \approx 38.7°}$$

---

### Problem 5 *(2018)*
**Refractive indices of water = 1.33, glass = 1.53. Find angle of refraction when light is incident on glass from water (from the interference section).**

$$\tan\theta_B = \frac{\mu_{glass}}{\mu_{water}} = \frac{1.53}{1.33} = 1.1504$$

$$\theta_B = \tan^{-1}(1.1504) \approx 48.96° \approx 49°$$

$$\theta_r = 90° - 49° = 41°$$

$$\boxed{\theta_r \approx 41°}$$

---

## References

1. Hecht, E. — *Optics*, 5th ed., Ch. 8 (Polarization), Pearson/Addison-Wesley
2. Born, M. & Wolf, E. — *Principles of Optics*, 7th ed., Ch. 1 (Polarization), Cambridge
3. Jenkins, F.A. & White, H.E. — *Fundamentals of Optics*, 4th ed., Ch. 24–27
4. Brewster, D. (1815) — *On the Laws Which Regulate the Polarisation of Light by Reflexion*, Phil. Trans. R. Soc. Lond.
5. Malus, E.L. (1809) — *Sur une propriété de la lumière réfléchie par les corps diaphanes*, Mém. Soc. d'Arcueil
6. Nicol, W. (1828) — *On a Method of so Far Increasing the Divergency of the Two Rays in Calcareous Spar*, Edinburgh New Phil. J.
7. [HyperPhysics — Polarization](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/polcon.html)
8. [HyperPhysics — Brewster's Angle](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/Brewster.html)
9. [Khan Academy — Polarization](https://www.khanacademy.org/science/physics/light-waves/wave-optics/a/polarization-of-light)

---

*[← Diffraction](./07_Diffraction.md) | [Back to README](./README.md)*
