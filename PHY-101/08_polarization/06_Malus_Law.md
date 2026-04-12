# 06 — Malus's Law

> **Course:** Physics — Optics Unit
> **Topic:** Malus's Law
> **Date:** April 11, 2026
> **Syllabus Reference:** Topic 6 of 8

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Statement of Malus's Law](#2-statement-of-maluss-law)
3. [Proof / Derivation of Malus's Law](#3-proof--derivation-of-maluss-law)
4. [Graphical Representation](#4-graphical-representation)
5. [Important Special Cases](#5-important-special-cases)
6. [Three Polarizer Problem](#6-three-polarizer-problem)
7. [Extension: From Unpolarized Light](#7-extension-from-unpolarized-light)
8. [Physical Interpretation](#8-physical-interpretation)
9. [Experimental Verification](#9-experimental-verification)
10. [Applications of Malus's Law](#10-applications-of-maluss-law)
11. [Worked Examples](#11-worked-examples)
12. [Summary](#12-summary)
13. [References & Further Reading](#13-references--further-reading)

---

## 1. Introduction

**Malus's Law** is one of the most fundamental laws in the optics of polarized light. It describes how the **intensity of plane-polarized light changes** when it passes through a second polarizing element (called the analyzer) as a function of the angle between the polarizer's transmission axis and the analyzer's transmission axis.

The law is named after **Étienne-Louis Malus** (1775–1812), a French military engineer and physicist who discovered it experimentally in 1809 while studying the polarization of light reflected from glass surfaces.

**Historical context:** Malus was looking through a calcite crystal at light reflected from a window of the Palais du Luxembourg when he noticed the light intensity varied as he rotated the crystal. This led him to formulate the law mathematically in 1809.

---

## 2. Statement of Malus's Law

> **Malus's Law:** When plane-polarized light of intensity $I_0$ is incident on a linear polarizer (analyzer), the transmitted intensity $I$ is proportional to the **square of the cosine** of the angle $\theta$ between the polarization direction of the incident light and the transmission axis of the analyzer.

$$\boxed{I = I_0 \cos^2\theta}$$

Where:
- $I_0$ = intensity of the plane-polarized light incident on the analyzer
- $I$ = transmitted intensity
- $\theta$ = angle between polarization direction of incident light and the transmission axis of the analyzer

---

## 3. Proof / Derivation of Malus's Law

### Method 1: Vector (Component) Derivation

**Setup:** Plane-polarized light with electric field amplitude $E_0$ is incident on an analyzer. The analyzer's transmission axis makes angle $\theta$ with the polarization direction.

**Step 1:** Resolve the electric field amplitude into components:

$$E_\parallel = E_0\cos\theta \quad \text{(component along analyzer's axis — transmitted)}$$
$$E_\perp = E_0\sin\theta \quad \text{(component perpendicular to analyzer's axis — blocked)}$$

```
  Polarization direction of incident beam
              |
              | E₀
              |  ↗
              | /  θ ← angle between polarization and analyzer axis
              |/
  ────────────•────────────── Analyzer transmission axis
              |
```

**Step 2:** Only the component **along** the analyzer's transmission axis is transmitted:

$$E_{transmitted} = E_0\cos\theta$$

**Step 3:** Intensity is proportional to the square of the electric field amplitude:

$$I \propto E_{transmitted}^2 = (E_0\cos\theta)^2 = E_0^2\cos^2\theta$$

Since $I_0 \propto E_0^2$:

$$\boxed{I = I_0\cos^2\theta}$$

**This is Malus's Law.** ✓

---

### Method 2: Energy Flux Derivation

Consider a beam of cross-sectional area $A$ perpendicular to the direction of propagation.

The energy flux (intensity) of the beam:

$$I_0 = \frac{1}{2}\epsilon_0 c E_0^2$$

After the analyzer, the amplitude component transmitted is $E_0\cos\theta$, so:

$$I = \frac{1}{2}\epsilon_0 c (E_0\cos\theta)^2 = \frac{1}{2}\epsilon_0 c E_0^2 \cos^2\theta = I_0\cos^2\theta$$

$$\boxed{I = I_0\cos^2\theta} \quad \checkmark$$

---

### Mathematical Proof with Jones Matrix Formalism

The Jones matrix for a linear polarizer with its axis at angle $\theta$ from the x-axis:

$$M(\theta) = \begin{pmatrix}\cos^2\theta & \sin\theta\cos\theta\\ \sin\theta\cos\theta & \sin^2\theta\end{pmatrix}$$

For x-polarized input light (Jones vector $\begin{pmatrix}1\\0\end{pmatrix}$) passing through an analyzer at angle $\theta$:

$$\vec{E}_{out} = M(\theta)\begin{pmatrix}1\\0\end{pmatrix} = \begin{pmatrix}\cos^2\theta\\ \sin\theta\cos\theta\end{pmatrix}$$

Intensity:

$$I = |\vec{E}_{out}|^2 = \cos^4\theta + \sin^2\theta\cos^2\theta = \cos^2\theta(\cos^2\theta + \sin^2\theta) = \cos^2\theta$$

$$I = I_0\cos^2\theta \quad \checkmark$$

---

## 4. Graphical Representation

### 4.1 $I$ vs $\theta$ Plot

```
  I/I₀
    │
  1 │ ●                           ●                  ●
    │    \                       / \                 /
    │     \                     /   \               /
 0.75│     \                   /     \             /
    │      \                 /       \            /
  0.5│      \               /         \          /
    │       \             /           \         /
 0.25│       \           /             \       /
    │        \         /               \     /
  0 │─────────●───────●─────────────────●────────→ θ
              90°    180°               270°   360°

  I = I₀cos²θ is always non-negative
  Minima at θ = 90°, 270° (I = 0) — extinction
  Maxima at θ = 0°, 180°, 360° (I = I₀) — maximum brightness
```

### 4.2 Polar Plot

```
  Malus's Law — Polar representation (I vs θ)

            I₀ (θ=0°)
              │
    I₀cos²45°─┼─ (θ=45°, I=I₀/2)
              │  ↘
  ────────────●────────────
   (θ=90°,    │    (θ=270°)
    I=0)      │    I=0
              │
            (θ=180°, I=I₀)

  The polar plot of I=I₀cos²θ forms a figure-8 pattern:
  
        ○
       ╱ ╲
      │   │
  ────●───●────
      │   │
       ╲ ╱
        ○
  (lemniscate of Bernoulli shape)
```

### 4.3 Table of Key Values

| $\theta$ | $\cos\theta$ | $\cos^2\theta$ | $I/I_0$ |
|--------|------------|-------------|-------|
| 0° | 1.000 | 1.000 | 100% |
| 15° | 0.966 | 0.933 | 93.3% |
| 30° | 0.866 | 0.750 | 75.0% |
| 45° | 0.707 | 0.500 | 50.0% |
| 60° | 0.500 | 0.250 | 25.0% |
| 75° | 0.259 | 0.067 | 6.7% |
| 90° | 0.000 | 0.000 | 0% (extinction) |
| 135° | -0.707 | 0.500 | 50.0% |
| 180° | -1.000 | 1.000 | 100% |

---

## 5. Important Special Cases

### Case 1: Parallel Nicols ($\theta = 0°$)

$$I = I_0\cos^2(0°) = I_0 \times 1 = I_0$$

**Maximum intensity.** All polarized light passes through.

### Case 2: Crossed Nicols ($\theta = 90°$)

$$I = I_0\cos^2(90°) = I_0 \times 0 = 0$$

**Complete extinction.** No light passes through.

### Case 3: Half Angle ($\theta = 45°$)

$$I = I_0\cos^2(45°) = I_0 \times \frac{1}{2} = \frac{I_0}{2}$$

**Half the intensity.** This is the "half-shade" condition used in polarimeters.

```
  VISUAL SUMMARY OF CASES

  θ = 0°          θ = 45°         θ = 90°
  ┌─────┐          ┌─────┐          ┌─────┐
  │█████│          │▒▒▒▒▒│          │     │
  │█████│          │▒▒▒▒▒│          │     │
  │█████│          │▒▒▒▒▒│          │     │
  └─────┘          └─────┘          └─────┘
  Full bright      Half bright      Completely dark
  I = I₀           I = I₀/2         I = 0
  (Parallel)       (45° offset)     (Crossed)
```

---

## 6. Three Polarizer Problem

A classic puzzle: Can light pass through two crossed Nicols (which alone transmit zero light) by inserting a third polarizer between them?

**Yes!** If the middle polarizer is at 45° to both outer ones:

```
  Polarizer 1    Polarizer 2    Polarizer 3
  (at 0°)        (at 45°)       (at 90°)
  
  Unpolarized → [P₁] → [P₂ at 45°] → [P₃ at 90°] → Observer
```

**Calculation:**

**Step 1:** After P₁ (from unpolarized light, intensity $I_0$):
$$I_1 = \frac{I_0}{2}$$

**Step 2:** After P₂ at 45° to P₁ (Malus's Law):
$$I_2 = I_1\cos^2(45°) = \frac{I_0}{2} \times \frac{1}{2} = \frac{I_0}{4}$$

**Step 3:** After P₃ at 45° to P₂ (hence 90° to P₁):
$$I_3 = I_2\cos^2(45°) = \frac{I_0}{4} \times \frac{1}{2} = \frac{I_0}{8}$$

> **Result:** $I_3 = I_0/8 = 12.5\%$ of original intensity passes through. This is non-zero!

**Why?** P₂ rotates the polarization axis by 45°, so P₃ is no longer fully crossed with the new polarization direction.

```
  VISUAL: 3-Polarizer Demonstration

  After P₁: → polarized (horizontal)
  After P₂: ↗ polarized (45°)
  After P₃: ↑ polarized (vertical)
  
  Each step: I × cos²(45°) = I × 1/2
  Total: I₀ → I₀/2 → I₀/4 → I₀/8
```

---

## 7. Extension: From Unpolarized Light

When **unpolarized** light of intensity $I_0$ passes through a **polarizer** then an **analyzer** at angle $\theta$:

**Step 1:** After the polarizer:
$$I_1 = \frac{I_0}{2}$$

*Explanation:* Unpolarized light has equal intensity in all polarization directions. On average, half aligns with the polarizer's axis.

**Step 2:** After the analyzer (Malus's Law):
$$I = I_1\cos^2\theta = \frac{I_0}{2}\cos^2\theta$$

$$\boxed{I = \frac{I_0}{2}\cos^2\theta} \quad \text{(for unpolarized input)}$$

---

## 8. Physical Interpretation

**Why does intensity follow $\cos^2\theta$?**

1. **Component projection:** The polarizer is like a "slot" or "slit" — only the component of the electric field parallel to the slot passes through. Amplitude is $E_0\cos\theta$.

2. **Energy argument:** Intensity (energy per unit time per unit area) is proportional to $|E|^2$, so:
   $$I \propto |E_0\cos\theta|^2 = E_0^2\cos^2\theta \propto I_0\cos^2\theta$$

3. **Wave superposition:** The blocked component ($E_0\sin\theta$) is absorbed by the polaroid or reflected by the Nicol prism. Its energy is dissipated as heat.

```
  PHYSICAL PICTURE

  Incident polarized wave:    E = E₀ (at angle θ to analyzer axis)
  
  Analyzer axis direction: →
  
  Transmitted component: E₀cosθ →    (passes through)
  Absorbed component: E₀sinθ ↑       (blocked/absorbed)
  
  Transmitted intensity: I ∝ (E₀cosθ)² = E₀²cos²θ = I₀cos²θ
```

---

## 9. Experimental Verification

### Setup

```
  [Light source] → [Polarizer] → [Analyzer (rotatable)] → [Photocell/Detector]

  Readings: Record detector output (voltage ∝ Intensity) vs angle θ
  
  Plot: I vs θ → should give I₀cos²θ curve
```

### Expected Data Table

| $\theta$ (degrees) | $\cos^2\theta$ (theory) | $I/I_{max}$ (measured) |
|--------------------|------------------------|------------------------|
| 0° | 1.000 | ~1.000 |
| 30° | 0.750 | ~0.750 |
| 45° | 0.500 | ~0.500 |
| 60° | 0.250 | ~0.250 |
| 90° | 0.000 | ~0.002 (dark, not perfect) |

*Small deviations from theory occur due to imperfect polarizers and stray light.*

---

## 10. Applications of Malus's Law

| Application | How Malus's Law is Applied |
|-------------|---------------------------|
| **LCD screens** | Each pixel is an analyzer; voltage controls $\theta$, hence brightness |
| **Polarimeters** | Measure optical rotation of solutions via intensity variation |
| **Variable optical attenuators** | Two polarizers at adjustable angle to control light intensity |
| **3D glasses** | Each eye receives different polarization; Malus's Law determines crosstalk |
| **Photography** | Circular polarizing filters; Malus's Law governs exposure reduction |
| **Laser power control** | Half-wave plate + polarizing beamsplitter for continuous power adjustment |
| **Optical isolators** | Prevent back-reflections in laser systems |

### Variable Attenuator

```
  A variable optical attenuator using two polarizers:

  Input beam → [Fixed Polarizer] → [Rotating Analyzer] → Output beam
                                         ↑
                                    θ adjusted by rotation

  I_out = I_in/2 × cos²θ
  
  θ = 0°: I_out = I_in/2 (minimum attenuation)
  θ = 45°: I_out = I_in/4
  θ = 90°: I_out = 0 (complete extinction)
```

---

## 11. Worked Examples

### Example 1: Basic application

**Problem:** Plane-polarized light of intensity 80 W/m² is incident on an analyzer. The angle between the polarization direction and the analyzer axis is 37°. Find the transmitted intensity.

**Solution:**

$$I = I_0\cos^2\theta = 80\cos^2(37°) = 80 \times (0.7986)^2 = 80 \times 0.6378 \approx 51.0 \text{ W/m}^2$$

> **Answer:** $I \approx 51.0 \text{ W/m}^2$

---

### Example 2: Find the angle

**Problem:** The transmitted intensity from an analyzer is 10% of the incident polarized intensity. Find the angle between the polarization direction and the analyzer axis.

**Solution:**

$$I = I_0\cos^2\theta \Rightarrow \frac{I}{I_0} = \cos^2\theta = 0.10$$

$$\cos\theta = \sqrt{0.10} = 0.3162$$

$$\theta = \arccos(0.3162) = 71.6°$$

> **Answer:** $\theta = 71.6°$ (or equivalently, 108.4° in the other quadrant)

---

### Example 3: Three-polarizer system

**Problem:** Three polarizers are arranged so that the second makes 30° with the first, and the third makes 60° with the first (thus 30° with the second). Unpolarized light of intensity $I_0 = 400 \text{ W/m}^2$ enters. Find the final intensity.

**Solution:**

**After P₁** (from unpolarized):
$$I_1 = \frac{I_0}{2} = \frac{400}{2} = 200 \text{ W/m}^2$$

**After P₂** (angle = 30° from P₁):
$$I_2 = I_1\cos^2(30°) = 200 \times \left(\frac{\sqrt{3}}{2}\right)^2 = 200 \times 0.75 = 150 \text{ W/m}^2$$

**After P₃** (angle = 30° from P₂):
$$I_3 = I_2\cos^2(30°) = 150 \times 0.75 = 112.5 \text{ W/m}^2$$

> **Answer:** Final intensity = **112.5 W/m²**

---

### Example 4: General N-polarizer problem

**Problem:** Unpolarized light passes through $N$ polarizers, each rotated by angle $\alpha$ relative to the previous one. Find the final intensity.

**Solution:**

After first polarizer: $I_1 = I_0/2$

After each subsequent polarizer (Malus's Law, each at angle $\alpha$ to previous):

$$I_N = \frac{I_0}{2}\underbrace{(\cos^2\alpha)(\cos^2\alpha)\cdots(\cos^2\alpha)}_{N-1 \text{ times}}$$

$$\boxed{I_N = \frac{I_0}{2}(\cos^2\alpha)^{N-1} = \frac{I_0}{2}\cos^{2(N-1)}\alpha}$$

**Check:** For $N=2$, $\alpha = 60°$: $I = \frac{I_0}{2}\cos^2(60°) = \frac{I_0}{2} \times 0.25 = \frac{I_0}{8}$. ✓

---

### Example 5: Photometric verification

**Problem:** When a polarizer and analyzer are crossed ($\theta = 90°$), theoretically $I = 0$. In reality, a small background intensity $I_{min} = 0.2 \text{ W/m}^2$ is observed. When they are aligned ($\theta = 0°$), $I_{max} = 45 \text{ W/m}^2$. Calculate the degree of polarization of the transmitted beam at 45°.

**Solution:**

At $\theta = 45°$ (Malus's Law applied to non-ideal case):

$$I(\theta) \approx \frac{I_{max} + I_{min}}{2} + \frac{I_{max} - I_{min}}{2}\cos(2\theta)$$

At $\theta = 45°$: $\cos(90°) = 0$, so:
$$I(45°) = \frac{I_{max} + I_{min}}{2} = \frac{45 + 0.2}{2} = 22.6 \text{ W/m}^2$$

**Degree of polarization:**
$$P = \frac{I_{max} - I_{min}}{I_{max} + I_{min}} = \frac{45 - 0.2}{45 + 0.2} = \frac{44.8}{45.2} = 0.991$$

> **Answer:** DOP ≈ 99.1% — nearly complete polarization.

---

## 12. Summary

```
  MALUS'S LAW — SUMMARY

  ┌────────────────────────────────────────────────────────────┐
  │                                                            │
  │  Law:        I = I₀ cos²θ                                │
  │                                                            │
  │  Discovered: Étienne-Louis Malus, 1809                    │
  │                                                            │
  │  Special cases:                                           │
  │    θ = 0°  → I = I₀  (maximum, parallel Nicols)         │
  │    θ = 45° → I = I₀/2  (half intensity)                  │
  │    θ = 90° → I = 0  (extinction, crossed Nicols)         │
  │                                                            │
  │  For unpolarized input:  I = (I₀/2)cos²θ                │
  │                                                            │
  │  Derivation: E_transmitted = E₀cosθ → I ∝ (E₀cosθ)²     │
  │                                                            │
  │  Applications: LCD, polarimeters, 3D cinema, cameras,    │
  │                laser power control                        │
  │                                                            │
  └────────────────────────────────────────────────────────────┘
```

---

## 13. References & Further Reading

| Resource | Link |
|----------|------|
| Wikipedia — Malus's Law | https://en.wikipedia.org/wiki/Malus%27s_law |
| OpenStax University Physics | https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/01:_The_Nature_of_Light/1.08:_Polarization |
| Feynman Lectures Vol. I Ch. 33 | https://www.feynmanlectures.caltech.edu/I_33.html |
| HyperPhysics — Polarization | http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/polarcon.html |
| Harvard Physics Lab — Polarization | https://www.physics.utoronto.ca/~phy224_324/LabManuals/PolarizationOfLight.pdf |
| University of Washington — Malus's Law Simulation | https://phet.colorado.edu/en/simulations/optical-tweezers |
| Fiveable — Polarization Notes | https://fiveable.me/principles-physics-ii/unit-10/polarization/study-guide/CTyLlFKENbeKmB4j |

---

*← [05 — Nicol Prism](./05_Nicol_Prism.md) | [07 — Specific Rotation →](./07_Specific_Rotation.md)*

---
*Notes compiled for university physics coursework — April 11, 2026*
