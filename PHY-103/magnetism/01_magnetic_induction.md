# 🧲 Topic 01 — Magnetic Induction

> **Course:** PHY-103 · Physics II | **Dept:** Textile Engineering, BUTEX
> **Topics:** Magnetic Field · Biot-Savart Law · Ampere's Circuital Law · Magnetic Flux
> **Date:** 2026-06-04

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Magnetic Field — Magnetic Induction (B)](#2-magnetic-field--magnetic-induction-b)
3. [Biot-Savart Law](#3-biot-savart-law)
4. [Applications of Biot-Savart Law](#4-applications-of-biot-savart-law)
5. [Ampère's Circuital Law](#5-ampères-circuital-law)
6. [Magnetic Flux](#6-magnetic-flux)
7. [Gauss's Law for Magnetism](#7-gausss-law-for-magnetism)
8. [Worked Examples](#8-worked-examples)
9. [Summary of Formulas](#9-summary-of-formulas)
10. [References](#10-references)

---

## 1. Introduction

Magnetism is one of the four fundamental interactions of nature and is unified with electricity into **electromagnetism** through Maxwell's equations. The concept of **magnetic induction** — the creation of a magnetic field by moving electric charges (currents) and the subsequent effect of that field on other currents and magnetic materials — is the cornerstone of this topic.

> 🏛️ **Historical Context:**
> - **Hans Christian Ørsted (1820):** Discovered that a current-carrying wire deflects a compass needle.
> - **Jean-Baptiste Biot & Félix Savart (1820):** Quantified the magnetic field produced by a current element.
> - **André-Marie Ampère (1820–1823):** Established the mathematical relationship between current and the line integral of B.
> - **James Clerk Maxwell (1865):** Unified all electromagnetic phenomena into four equations.

---

## 2. Magnetic Field — Magnetic Induction (B)

### 2.1 Definition

The **magnetic flux density** $\vec{B}$ (commonly called the **magnetic induction** or **magnetic field**) is a vector field that describes the magnetic influence at any point in space. It is defined operationally through the force experienced by a moving charge:

$$\boxed{\vec{F} = q\vec{v} \times \vec{B}}$$

The direction of $\vec{F}$ is given by the right-hand rule (or left-hand rule for negative charges), always perpendicular to both $\vec{v}$ and $\vec{B}$.

### 2.2 SI Units and Dimensions

| Quantity | Symbol | SI Unit | Equivalent Forms |
|:---------|:-------|:--------|:----------------|
| Magnetic Flux Density | $B$ | **Tesla (T)** | Wb·m⁻², kg·A⁻¹·s⁻² |
| Magnetic Flux | $\Phi_B$ | **Weber (Wb)** | T·m², V·s |
| Permeability of Free Space | $\mu_0$ | H·m⁻¹ | T·m·A⁻¹, kg·m·A⁻²·s⁻² |

$$\mu_0 = 4\pi \times 10^{-7} \text{ T·m/A} \approx 1.2566 \times 10^{-6} \text{ H/m}$$

> **Practical sense of Tesla:** Earth's magnetic field ≈ 50 µT; MRI machines ≈ 1–3 T; strongest lab magnets ≈ 45 T.

### 2.3 Properties of Magnetic Field Lines

Magnetic field lines are a graphical representation of $\vec{B}$:

1. **Tangent** to $\vec{B}$ at every point
2. **Never intersect** (field has a unique direction at each point)
3. **Density ∝ magnitude** of $|\vec{B}|$
4. **Always form closed loops** — no starting or ending points (no magnetic monopoles)

```
  Bar Magnet — Field Line Schematic:

        N                S
       ╔══╗            ╔══╗
  ←←←←║  ║→→→→→→→→→→→║  ║→→→→
  ←←  ║  ║            ║  ║   →→
  ← ↗ ║  ║            ║  ║ ↘  →
  ←   ╚══╝            ╚══╝    →
  ←←←←←←←←←←←←←←←←←←←←←←←←←←

  Outside magnet: N → S through space
  Inside magnet : S → N (continuous loop)
```

---

## 3. Biot-Savart Law

### 3.1 Statement

The **Biot-Savart Law** gives the infinitesimal magnetic field $d\vec{B}$ at a field point **P** due to an infinitesimal current element $I\,d\vec{l}$:

$$\boxed{d\vec{B} = \frac{\mu_0}{4\pi} \frac{I\,d\vec{l} \times \hat{r}}{r^2}}$$

where:
| Symbol | Meaning |
|:-------|:--------|
| $\mu_0$ | Permeability of free space = $4\pi \times 10^{-7}$ T·m/A |
| $I$ | Current in the conductor (A) |
| $d\vec{l}$ | Infinitesimal length element directed along current flow |
| $\hat{r}$ | Unit vector from $d\vec{l}$ to field point P |
| $r$ | Distance from $d\vec{l}$ to P |

The scalar magnitude is:

$$|d\vec{B}| = \frac{\mu_0}{4\pi} \frac{I\,dl\,\sin\theta}{r^2}$$

where $\theta$ is the angle between $d\vec{l}$ and $\hat{r}$.

### 3.2 Key Properties

1. $d\vec{B} \perp d\vec{l}$ and $d\vec{B} \perp \hat{r}$ (perpendicular to both current element and radius)
2. $|d\vec{B}| \propto I$ — proportional to current
3. $|d\vec{B}| \propto \sin\theta$ — zero when point P is on the line of $d\vec{l}$
4. $|d\vec{B}| \propto r^{-2}$ — inverse-square fall-off
5. **Superposition principle:** Total $\vec{B}$ is the vector sum (integral) of all contributions

### 3.3 Total Field by Integration

$$\vec{B} = \frac{\mu_0 I}{4\pi} \int \frac{d\vec{l} \times \hat{r}}{r^2}$$

---

## 4. Applications of Biot-Savart Law

### 4.1 Magnetic Field Due to an Infinite Straight Wire

**Setup:** Infinitely long straight wire carrying current $I$; find field at perpendicular distance $R$.

**Coordinate System:** Wire along x-axis; P on y-axis at distance $R$.

For a current element at position $x$ from the foot of perpendicular:

$$r = \sqrt{R^2 + x^2}, \quad \sin\theta = \frac{R}{r} = \frac{R}{\sqrt{R^2 + x^2}}, \quad dl = dx$$

$$dB = \frac{\mu_0 I}{4\pi} \frac{dx \cdot \sin\theta}{r^2} = \frac{\mu_0 I}{4\pi} \cdot \frac{R\,dx}{(R^2 + x^2)^{3/2}}$$

Integrating from $-\infty$ to $+\infty$ using $\int_{-\infty}^{+\infty} \frac{dx}{(R^2+x^2)^{3/2}} = \frac{2}{R^2}$:

$$\boxed{B = \frac{\mu_0 I}{2\pi R}}$$

**Direction:** Circles the wire; given by right-hand rule (thumb → current, fingers → $\vec{B}$).

```
  Right-Hand Rule for Straight Wire:

    Thumb ↑ (current direction)
    Fingers curl → direction of B

    Cross-section view (current out of page ⊙):

        ×  ×  ×  ×  ×
        ×  ×  ×  ×  ×
        ×  × (⊙) ×  ×    ⊙ = current out
        ×  ×  ×  ×  ×    × = B into page (right side)
        ×  ×  ×  ×  ×    · = B out of page (left side)
```

---

### 4.2 Magnetic Field at the Center of a Circular Current Loop

**Setup:** Circular loop of radius $R$, single turn, current $I$; find field at the center.

**Key observation:** For any element $d\vec{l}$ on the loop, the radius $\vec{r}$ to the center is always perpendicular to $d\vec{l}$ (since $r$ is a radius of the circle). Therefore $\theta = 90°$, $\sin\theta = 1$.

$$dB = \frac{\mu_0 I}{4\pi} \frac{dl}{R^2}$$

All contributions point in the same axial direction (by symmetry). Integrating over the full circle:

$$B = \frac{\mu_0 I}{4\pi R^2} \oint dl = \frac{\mu_0 I}{4\pi R^2} \cdot 2\pi R$$

$$\boxed{B = \frac{\mu_0 I}{2R}}$$

For **N turns:** $B = \dfrac{\mu_0 NI}{2R}$

**Direction:** Right-hand rule — curl fingers in direction of current; thumb points in direction of $\vec{B}$.

```
  Circular Loop (CCW current viewed from above):

        ↑  B (out of page)

         →→→→→→→
        ↑         ↓
        ↑  (loop)  ↓   Current flows CCW
        ↑         ↓
         ←←←←←←←
```

---

### 4.3 Magnetic Field on the Axis of a Circular Loop

For a loop of radius $R$ carrying current $I$, the field at axial distance $x$ from the center:

$$B_x = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$$

| Position | Field |
|:---------|:------|
| At center ($x = 0$) | $B = \mu_0 I / 2R$ (maximum) |
| Far away ($x \gg R$) | $B \approx \mu_0 I R^2 / 2x^3$ (dipole field) |

---

### 4.4 Magnetic Field Inside a Solenoid (Biot-Savart Approach)

A **solenoid** is a tightly wound helical coil. For length $L$, total turns $N$, turns-per-unit-length $n = N/L$, current $I$:

Treating each turn as a loop and integrating (or using Ampere's Law — §5.2):

$$\boxed{B = \mu_0 n I = \frac{\mu_0 N I}{L}}$$

- Field is **uniform** and **parallel to the axis** inside an ideal (infinite) solenoid
- Field is **essentially zero** outside
- This is one of the most important results in classical electromagnetism

```
  Solenoid Cross-Section:

    ×  ×  ×  ×  ×  ×  ×  ×     (wire going into page: ×)
    →  →  →  →  →  →  →  →     (uniform B field inside)
    ·  ·  ·  ·  ·  ·  ·  ·     (wire coming out: ·)
```

---

## 5. Ampère's Circuital Law

### 5.1 Statement

For any closed path (Amperian loop) C in a magnetic field:

$$\boxed{\oint_C \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}}$$

where $I_{\text{enc}}$ is the total current passing through any surface bounded by C, taking direction into account (right-hand rule determines sign).

This is the magnetic analogue of Gauss's Law for electric fields and is valid for steady (DC) currents.

> **Maxwell's Generalization (for time-varying fields):**
> $$\oint \vec{B} \cdot d\vec{l} = \mu_0 \left(I_{\text{enc}} + \varepsilon_0 \frac{d\Phi_E}{dt}\right)$$
> The term $\varepsilon_0 \dfrac{d\Phi_E}{dt}$ is the **displacement current**.

### 5.2 Derivation of Solenoid Field via Ampère's Law

Choose a rectangular Amperian loop ABCD:
- Side AB (length $l$): inside solenoid, parallel to axis → contributes $Bl$
- Side CD: outside solenoid, $B \approx 0$ → contributes $0$
- Sides BC, DA: perpendicular to $\vec{B}$ → $\vec{B} \cdot d\vec{l} = 0$

$$\oint \vec{B} \cdot d\vec{l} = B \cdot l + 0 + 0 + 0 = Bl$$

Total enclosed current: $I_{\text{enc}} = n \cdot l \cdot I$

Applying Ampère's Law:
$$Bl = \mu_0 n l I \implies \boxed{B = \mu_0 n I} \checkmark$$

```mermaid
flowchart LR
    A["Choose closed\nAmperian path C"] --> B["Evaluate ∮ B·dl\nalong the path"]
    B --> C["Count enclosed\ncurrent I_enc"]
    C --> D["Apply:\n∮ B·dl = μ₀ I_enc"]
    D --> E["Solve for B"]
```

### 5.3 Comparison: Biot-Savart vs Ampère's Law

| Feature | Biot-Savart | Ampère's Law |
|:--------|:------------|:-------------|
| Applicable to | Any current distribution | Highly symmetric geometries |
| Mathematical form | Integral over source | Line integral of B |
| Best for | Arbitrary wire shapes, loops | Solenoids, toroids, infinite wires |
| Origin | Empirical (Biot & Savart, 1820) | More general principle (Ampère, 1826) |

---

## 6. Magnetic Flux

### 6.1 Definition

The **magnetic flux** $\Phi_B$ through a surface $S$ is the total number of magnetic field lines passing through that surface:

$$\boxed{\Phi_B = \int_S \vec{B} \cdot d\vec{A} = \int_S B\cos\theta\,dA}$$

where $\theta$ is the angle between $\vec{B}$ and the outward normal $\hat{n}$ to the area element $d\vec{A}$.

For a **uniform field** over a **flat surface** of area $A$:

$$\Phi_B = BA\cos\theta$$

### 6.2 SI Unit: Weber (Wb)

$$[\Phi_B] = \text{T} \cdot \text{m}^2 = \text{Weber (Wb)} = \text{V} \cdot \text{s}$$

### 6.3 Flux in Different Orientations

| Orientation of $\vec{B}$ relative to surface | Flux $\Phi_B$ |
|:----------------------------------------------|:--------------|
| Perpendicular to surface ($\theta = 0°$) | $BA$ (maximum) |
| At angle $\theta$ | $BA\cos\theta$ |
| Parallel to surface ($\theta = 90°$) | $0$ |
| Anti-perpendicular ($\theta = 180°$) | $-BA$ (minimum) |

```
  Flux Dependence on Angle:

  θ=0° (⊥ to surface):     θ=45°:        θ=90° (∥ to surface):
  ↓↓↓↓↓                   ↓↓↓↓↓              → → → →
  ═══════                  ╱╱╱╱╱╱              ═══════
  Φ = BA (max)             Φ = BA/√2           Φ = 0
```

---

## 7. Gauss's Law for Magnetism

$$\boxed{\oint_S \vec{B} \cdot d\vec{A} = 0}$$

**Physical meaning:** The net magnetic flux through **any closed surface** is always zero.

This fundamental law implies:
1. **No magnetic monopoles exist** — there is no isolated source or sink of magnetic field lines
2. Every field line that enters a closed surface must also exit it
3. Magnetic field lines are always closed loops

> **Contrast with Gauss's Law for electricity:**
> $$\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0} \neq 0$$
> Electric field lines can start and end on charges (monopoles of electric charge exist). Magnetic monopoles have never been observed.

---

## 8. Worked Examples

### Example 1 — Long Straight Wire

**Problem:** A long straight wire carries a current of 15 A. Calculate the magnetic field at a perpendicular distance of (a) 2 cm and (b) 10 cm from the wire.

**Solution:**

$$B = \frac{\mu_0 I}{2\pi R}, \quad \mu_0 = 4\pi \times 10^{-7} \text{ T·m/A}$$

**(a)** $R = 0.02$ m:

$$B = \frac{(4\pi \times 10^{-7})(15)}{2\pi (0.02)} = \frac{4\pi \times 10^{-7} \times 15}{2\pi \times 0.02} = \frac{2 \times 15 \times 10^{-7}}{0.02}$$

$$\boxed{B_a = 1.5 \times 10^{-4} \text{ T} = 150 \text{ μT}}$$

**(b)** $R = 0.10$ m:

$$B = \frac{2 \times 10^{-7} \times 15}{0.10} = \boxed{3.0 \times 10^{-5} \text{ T} = 30 \text{ μT}}$$

> **Check:** Field falls off as $1/R$: doubling $R$ from 5 cm gives half the field ✓

---

### Example 2 — Multi-Turn Circular Coil

**Problem:** A circular coil of radius 6 cm has 80 turns and carries a current of 1.5 A. Find the magnetic field at the center.

**Solution:**

$R = 0.06$ m, $N = 80$, $I = 1.5$ A

$$B = \frac{\mu_0 NI}{2R} = \frac{(4\pi \times 10^{-7})(80)(1.5)}{2(0.06)}$$

$$B = \frac{4\pi \times 10^{-7} \times 120}{0.12} = \frac{4\pi \times 10^{-5}}{0.12} = \frac{4 \times 3.1416 \times 10^{-5}}{0.12}$$

$$\boxed{B \approx 1.257 \times 10^{-3} \text{ T} \approx 1.26 \text{ mT}}$$

---

### Example 3 — Solenoid Field

**Problem:** A solenoid is 25 cm long with 500 turns and carries a current of 4 A. Find the magnetic field inside.

**Solution:**

$L = 0.25$ m, $N = 500$, $I = 4$ A

$$n = \frac{N}{L} = \frac{500}{0.25} = 2000 \text{ turns/m}$$

$$B = \mu_0 nI = (4\pi \times 10^{-7})(2000)(4) = 4\pi \times 10^{-7} \times 8000$$

$$B = 32\pi \times 10^{-4} = 32 \times 3.1416 \times 10^{-4}$$

$$\boxed{B \approx 1.005 \times 10^{-2} \text{ T} \approx 10.05 \text{ mT}}$$

---

### Example 4 — Magnetic Flux Through a Tilted Surface

**Problem:** A uniform magnetic field of 0.5 T exists in a region. A rectangular loop of dimensions 4 cm × 6 cm is placed so that the normal to its surface makes an angle of 30° with $\vec{B}$. Find the flux through the loop.

**Solution:**

$B = 0.5$ T, $A = 0.04 \times 0.06 = 2.4 \times 10^{-3}$ m², $\theta = 30°$

$$\Phi_B = BA\cos\theta = (0.5)(2.4 \times 10^{-3})\cos 30°$$

$$\Phi_B = 1.2 \times 10^{-3} \times \frac{\sqrt{3}}{2} = 1.2 \times 10^{-3} \times 0.866$$

$$\boxed{\Phi_B \approx 1.04 \times 10^{-3} \text{ Wb} = 1.04 \text{ mWb}}$$

---

## 9. Summary of Formulas

| Configuration | Formula | Conditions |
|:--------------|:--------|:-----------|
| Biot-Savart element | $dB = \dfrac{\mu_0 I\,dl\sin\theta}{4\pi r^2}$ | General |
| Infinite straight wire | $B = \dfrac{\mu_0 I}{2\pi R}$ | At perp. distance $R$ |
| Center of N-turn loop | $B = \dfrac{\mu_0 NI}{2R}$ | At center |
| Axial point of loop | $B = \dfrac{\mu_0 IR^2}{2(R^2+x^2)^{3/2}}$ | On axis at distance $x$ |
| Solenoid (inside) | $B = \mu_0 nI$ | Ideal infinite solenoid |
| Ampere's Law | $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$ | Any closed Amperian loop |
| Magnetic flux | $\Phi_B = BA\cos\theta$ | Uniform field, flat surface |
| Gauss's Law (mag.) | $\oint \vec{B} \cdot d\vec{A} = 0$ | Any closed surface |

---

## 10. References

1. Halliday, Resnick & Krane — *Physics*, Vol. 2, Chapters 29–30
2. Griffiths, D.J. — *Introduction to Electrodynamics*, 4th Ed., §5.2–5.4
3. **HyperPhysics** — [Biot-Savart Law](http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/biosav.html)
4. **HyperPhysics** — [Ampere's Law](http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/amplaw.html)
5. **Khan Academy** — [Magnetic field created by a current](https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnetic-field-current-carrying-wire/a/magnetic-field-created-by-a-current-carrying-wire-review)
6. **MIT OCW 8.02** — [Lecture 9: Ampere's Law](https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2019/pages/lecture-notes/)
7. **LibreTexts Physics** — [Biot-Savart Law](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/12%3A_Sources_of_Magnetic_Fields/12.02%3A_The_Biot-Savart_Law)
8. **Wikipedia** — [Magnetic field](https://en.wikipedia.org/wiki/Magnetic_field) · [Biot–Savart law](https://en.wikipedia.org/wiki/Biot%E2%80%93Savart_law) · [Ampere's circuital law](https://en.wikipedia.org/wiki/Amp%C3%A8re%27s_circuital_law)
9. **Wikimedia Commons** — [Biot-Savart Example](https://commons.wikimedia.org/wiki/File:Biot-Savart_law_force_diagram.svg) · [Solenoid field](https://commons.wikimedia.org/wiki/File:Solenoid.svg)
10. **NPTEL** — [Magnetic Field and Biot-Savart Law (Video)](https://nptel.ac.in/courses/108/105/108105083/)

---

*← [Back to Magnetism README](README.md) · [Next Topic: Magnetic Force on Conductor →](02_magnetic_force_conductor.md)*
