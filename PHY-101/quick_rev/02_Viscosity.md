# 💧 Chapter 2: Viscosity

> **Topics:** Coefficient of Viscosity · Newton's Law of Viscous Flow · Torricelli's Theorem · Stokes' Law · Poiseuille's Method

---

## Table of Contents
- [1. Viscosity and Coefficient of Viscosity](#1-viscosity-and-coefficient-of-viscosity)
- [2. Newton's Law of Viscous Flow](#2-newtons-law-of-viscous-flow)
- [3. Velocity Gradient](#3-velocity-gradient)
- [4. Torricelli's Theorem](#4-torricellis-theorem)
- [5. Poiseuille's Equation for Viscous Flow](#5-poiseuilles-equation-for-viscous-flow)
- [6. Determination of Viscosity by Capillary Flow Method](#6-determination-of-viscosity-by-capillary-flow-method)
- [7. Stokes' Law and Terminal Velocity](#7-stokes-law-and-terminal-velocity)
- [8. Solved Numerical Problems](#8-solved-numerical-problems)
- [References](#references)

---

## 1. Viscosity and Coefficient of Viscosity

### Q: What is coefficient of viscosity? *(2022, 2020, 2019, 2017)*

### Definition of Viscosity

**Viscosity** is the property of a fluid by virtue of which it resists relative motion between its adjacent layers. It is the internal friction of fluids.

When fluid flows between two surfaces, layers near the fixed surface move slowly, while layers farther away move faster. The **viscous drag** is the retarding force between these layers.

```
Moving plate  →→→→→  velocity = v
─────────────────────────────────────── ← layer 4 (fastest)
- - - - - - - - - - - - - - - - - - -  ← layer 3
- - - - - - - - - - - - - - - - - - -  ← layer 2
─────────────────────────────────────── ← layer 1 (slowest)
Fixed plate   (velocity = 0)
            ↑
            y (distance between plates)
```

### Coefficient of Viscosity

The **coefficient of viscosity** $\eta$ is defined as the tangential force per unit area required to maintain unit velocity gradient between two adjacent layers of a fluid.

$$\boxed{\eta = \frac{F/A}{dv/dy}}$$

Or equivalently from Newton's law:

$$\eta = \frac{\tau}{dv/dy}$$

where $\tau = F/A$ is the shear stress.

**SI Unit:** Pascal-second (Pa·s) or N·s/m² or kg/(m·s)
**CGS Unit:** Poise (P) → $1 \, \text{Pa·s} = 10 \, \text{P}$

| Fluid | Viscosity at 20°C (mPa·s) |
|---|:---:|
| Water | 1.002 |
| Blood (whole) | 3–4 |
| Castor oil | ~950 |
| Honey | ~2000–10000 |
| Air | 0.018 |

---

## 2. Newton's Law of Viscous Flow

### Q: State and explain Newton's law of viscous flow. *(2022, 2021, 2020, 2019)*

### Statement

> *The viscous force (tangential force) between two adjacent layers of a fluid is directly proportional to the area of the layers and to the velocity gradient normal to the layers.*

$$\boxed{F = \eta A \frac{dv}{dy}}$$

Where:
- $F$ = viscous force (N)
- $\eta$ = coefficient of viscosity (Pa·s)
- $A$ = area of the layer (m²)
- $\frac{dv}{dy}$ = velocity gradient (s⁻¹)

### Explanation

```
     Moving layer → velocity (v + dv)
     ──────────────────────────────────────
         ↕ dy (layer separation)
         ↕ dv (velocity difference)
     ──────────────────────────────────────
     Slower layer → velocity v
```

- $\frac{dv}{dy}$ is the **velocity gradient**: rate of change of velocity with distance perpendicular to flow
- The faster layer drags the slower one forward (viscous force acts in the direction of motion on the slower layer)
- The slower layer retards the faster one (reaction force)

**Viscous force per unit area (Shear Stress):**
$$\tau = \eta \frac{dv}{dy}$$

This is Newton's law written in shear-stress form. Fluids obeying this law are called **Newtonian fluids**.

> **Non-Newtonian fluids** (like paint, blood, ketchup) do NOT follow this linear relationship.

---

## 3. Velocity Gradient

### Q: Define velocity gradient. *(2017)*

**Velocity gradient** is the rate of change of velocity of a fluid layer with respect to the perpendicular distance from a reference layer.

$$\text{Velocity Gradient} = \frac{dv}{dy} \quad \text{(unit: s}^{-1}\text{)}$$

```
  velocity
    ↑
    │         /
  v+dv ─────/──── layer at y + dy
    │       /
    v ─────/──────── layer at y
    │     /
    │    /
    └───────────→ y (perpendicular distance)
         slope = dv/dy = velocity gradient
```

A **large velocity gradient** means rapidly changing velocity over a short distance, resulting in **large viscous force**.

---

## 4. Torricelli's Theorem

### Q: State and prove Torricelli's theorem. *(2022, 2020)*

### Statement

> *The velocity of efflux of a liquid through a small orifice is equal to the velocity that the liquid would acquire in falling freely from the free surface to the orifice.*

$$\boxed{v = \sqrt{2gh}}$$

Where:
- $v$ = velocity of efflux
- $g$ = acceleration due to gravity
- $h$ = height of liquid above the orifice

### Proof

```
     ┌────────────────────────┐
     │    Liquid surface      │ ← P₀ (atmospheric)
     │                        │
     │          ↕ h           │
     │                        │
     └────────────────────────┤ ← Orifice (area a, very small)
     P₀ →→ v = ?              │
```

Apply Bernoulli's theorem between the free surface (point 1) and the orifice (point 2):

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$

**Conditions:**
- $P_1 = P_2 = P_0$ (both exposed to atmosphere)
- $v_1 \approx 0$ (large tank, surface barely moves)
- Take orifice as reference: $h_2 = 0$, $h_1 = h$

$$P_0 + 0 + \rho g h = P_0 + \frac{1}{2}\rho v^2 + 0$$

$$\rho g h = \frac{1}{2}\rho v^2$$

$$\boxed{v = \sqrt{2gh}}$$

This is the same as the velocity of an object falling from height $h$ — hence Torricelli's theorem is a special case of Bernoulli's theorem.

**Volume rate of flow through orifice:**
$$Q = a \cdot v = a\sqrt{2gh}$$

**Actual flow** uses a discharge coefficient $C_d$ (≈ 0.62):
$$Q_{actual} = C_d \cdot a\sqrt{2gh}$$

---

## 5. Poiseuille's Equation for Viscous Flow

### Q: Derive Poiseuille's equation for the rate of flow of a viscous liquid through a capillary tube. *(2019)*

*(Full derivation already given in [Fluid Mechanics Chapter](./01_Fluid_Mechanics.md#5-poiseuilles-equation))*

$$\boxed{Q = \frac{\pi P r^4}{8 \eta l}}$$

From this, the coefficient of viscosity can be found:

$$\eta = \frac{\pi P r^4}{8 Q l}$$

---

## 6. Determination of Viscosity by Capillary Flow Method

### Q: Describe the determination of coefficient of viscosity of a liquid by the capillary flow method. *(2017)*

### Principle

A liquid of known density flows through a capillary tube under a known pressure head. By measuring the volume collected in a known time, the flow rate $Q$ is found. Then $\eta$ is calculated from Poiseuille's equation.

### Apparatus

```
   ┌──────────────────────────────────────┐
   │         Reservoir (liquid)           │
   └─────────────────┬────────────────────┘
                     │
              ╔══════╧══════╗
              ║  Capillary  ║──→ Graduated
              ║   Tube      ║    Cylinder
              ╚═════════════╝
              l = length, r = radius
   ←──── h (pressure head) ────→
```

### Procedure

1. Fill reservoir with the test liquid
2. Measure the height $h$ of liquid above the capillary opening
3. Allow liquid to flow out; collect it in a graduated cylinder for time $t$
4. Measure volume $V$ collected → calculate $Q = V/t$
5. Measure $l$ (length) and $r$ (radius) of capillary with microscope

### Calculation

Pressure: $P = \rho g h$

From Poiseuille's equation:
$$\eta = \frac{\pi P r^4}{8 Q l} = \frac{\pi \rho g h r^4}{8 Q l}$$

Applying the Hagenbach correction:

$$\eta = \frac{\pi r^4 \rho g h}{8Ql} - \frac{m\rho Q}{8\pi l}$$

where $m \approx 1.12$.

### Precautions
- Capillary must be clean and horizontal
- Flow must be slow (laminar regime)
- Temperature must be constant (viscosity is highly temperature-dependent)
- Radius must be measured accurately (enters as $r^4$!)

---

## 7. Stokes' Law and Terminal Velocity

### Stokes' Law

For a small sphere of radius $r$ moving with velocity $v$ through a viscous fluid of viscosity $\eta$:

$$F_{drag} = 6\pi \eta r v$$

### Terminal Velocity

A falling sphere reaches **terminal velocity** when drag force + buoyancy = weight:

```
              ↓ Weight (W = mg)
    ─────────────────────────────────
              ↑ Buoyancy (F_b)
              ↑ Stokes' drag (F_d)
```

At terminal velocity $v_T$:
$$6\pi\eta r v_T + \frac{4}{3}\pi r^3 \rho_f g = \frac{4}{3}\pi r^3 \rho_s g$$

$$v_T = \frac{2r^2(\rho_s - \rho_f)g}{9\eta}$$

$$\boxed{\eta = \frac{2r^2(\rho_s - \rho_f)g}{9 v_T}}$$

This provides another method for measuring viscosity (falling sphere method).

---

## 8. Solved Numerical Problems

---

### Problem 1 *(2022, 2020, 2017)*
**A plate of metal of area 10⁻² m² (or 10×2 m² in some versions) rests on a layer of castor oil 2×10⁻³ m thick whose coefficient of viscosity is 1.55 N·s/m². Calculate the horizontal force required to move the plate with a uniform speed of 3×10⁻² m/s.**

**Given:**
- $A = 10^{-2} \, \text{m}^2$
- Thickness $dy = 2 \times 10^{-3} \, \text{m}$
- $\eta = 1.55 \, \text{N·s/m}^2$
- $v = 3 \times 10^{-2} \, \text{m/s}$ (plate speed)
- Velocity of bottom layer = 0 (fixed surface)

**Solution:**

Velocity gradient:
$$\frac{dv}{dy} = \frac{v}{dy} = \frac{3 \times 10^{-2}}{2 \times 10^{-3}} = 15 \, \text{s}^{-1}$$

Using Newton's law of viscosity:
$$F = \eta A \frac{dv}{dy}$$

$$F = 1.55 \times 10^{-2} \times 15$$

$$\boxed{F = 0.2325 \, \text{N}}$$

---

### Problem 2 *(2020 variant with 102 m² — likely a scan error; treated as 10⁻² m²)*
**A plate of metal of area 10⁻² m² rests on castor oil 2×10⁻² m thick, η = 1.55 Nsm⁻². Speed = 3×10⁻²ms⁻¹.**

$$\frac{dv}{dy} = \frac{3 \times 10^{-2}}{2 \times 10^{-2}} = 1.5 \, \text{s}^{-1}$$

$$F = 1.55 \times 10^{-2} \times 1.5 = \boxed{0.02325 \, \text{N}}$$

---

### Problem 3 *(2017)*
**A metal plate of area 10⁻² m² rests on a castor oil layer 2×10⁻³ m thick, η = 1.55 N·s/m². Speed = 3×10⁻² m/s.**

This is identical to Problem 1:

$$F = \eta A \frac{v}{dy} = 1.55 \times 10^{-2} \times \frac{3 \times 10^{-2}}{2 \times 10^{-3}} = 1.55 \times 10^{-2} \times 15$$

$$\boxed{F = 0.2325 \, \text{N}}$$

---

### Problem 4 *(2019)*
**If the modulus of rigidity and Young's modulus of iron wire are n = 8×10¹⁰ N/m² and Y = 20×10¹⁰ N/m², calculate Poisson's ratio.**

*(This is an Elasticity problem — solved in [Chapter 4](./04_Elasticity.md))*

---

## References

1. Young, H.D. & Freedman, R.A. — *University Physics*, Ch. 14 (Viscosity), Pearson
2. Halliday, D., Resnick, R. — *Fundamentals of Physics*, Ch. 14
3. Batchelor, G.K. — *An Introduction to Fluid Dynamics*, Cambridge University Press
4. Stokes, G.G. (1851) — *On the Effect of the Internal Friction of Fluids on the Motion of Pendulums*, Trans. Cambridge Phil. Soc.
5. Poiseuille, J.L.M. (1840) — Original experimental paper on capillary flow
6. [NIST — Viscosity of Water](https://www.nist.gov/system/files/documents/srd/jpcrd364.pdf)
7. [HyperPhysics — Viscosity](http://hyperphysics.phy-astr.gsu.edu/hbase/pfric.html)

---

*[← Fluid Mechanics](./01_Fluid_Mechanics.md) | [Back to README](./README.md) | [Surface Tension →](./03_Surface_Tension.md)*
