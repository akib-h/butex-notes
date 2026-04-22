# 🌊 Chapter 1: Fluid Mechanics

> **Topics:** Types of flow · Bernoulli's Theorem · Venturi Meter · Poiseuille's Equation · Continuity Equation

---

## Table of Contents
- [1. Types of Flow](#1-types-of-flow)
- [2. Equation of Continuity](#2-equation-of-continuity)
- [3. Bernoulli's Theorem](#3-bernoullis-theorem)
- [4. Venturi Meter](#4-venturi-meter)
- [5. Poiseuille's Equation](#5-poiseuilles-equation)
- [6. Corrections to Poiseuille's Equation](#6-corrections-to-poiseuilles-equation)
- [7. Solved Numerical Problems](#7-solved-numerical-problems)
- [References](#references)

---

## 1. Types of Flow

### Q: Discuss different types of flow. *(2023, 2019, 2018)*

Fluid flow is broadly classified into the following types:

---

### 1.1 Streamline (Laminar) Flow

In **streamline flow**, every fluid particle follows a smooth, well-defined path called a **streamline**. Adjacent layers slide past each other without mixing.

**Characteristics:**
- Velocity at any point is constant over time
- Streamlines never intersect
- Occurs at low velocities (Re < 2000)
- Energy loss is only due to viscosity

```
Streamline Flow:
─────────────────────────────────────→
─────────────────────────────────────→
─────────────────────────────────────→   (parallel, orderly)
```

> 📌 **Definition (2017):** *Streamline motion is the steady flow of a fluid in which each particle of the fluid passing a given point moves along the same path and has the same speed as the preceding particle at that point.*

---

### 1.2 Turbulent Flow

In **turbulent flow**, fluid particles move in an irregular, chaotic manner. Eddies and vortices form.

**Characteristics:**
- Velocity fluctuates in magnitude and direction
- Occurs at high velocities (Re > 4000)
- Greater energy dissipation
- Mixing of fluid layers

```
Turbulent Flow:
~→~~↗~↘~~~~→~~↗~~~
~~↘~~→~~~↗~~↘~~~→   (chaotic, mixing)
~~~↗~~~↘~~→~~~~↗~
```

> 📌 **Definition (2019):** *Turbulent motion is the irregular flow of a fluid in which particles move in a disorderly manner with varying velocities, forming eddies and vortices.*

---

### 1.3 Critical Velocity

**Critical velocity** is the velocity of fluid flow at which the flow changes from streamline to turbulent.

$$v_c = \frac{\eta \cdot R_e}{\rho \cdot r}$$

Where:
- $\eta$ = coefficient of viscosity (Pa·s)
- $R_e$ = Reynolds number (dimensionless, ~2000 for transition)
- $\rho$ = density of fluid (kg/m³)
- $r$ = radius of pipe (m)

**Reynolds Number:**

$$R_e = \frac{\rho v d}{\eta}$$

| Reynolds Number | Flow Type |
|:---:|:---:|
| $R_e < 2000$ | Laminar / Streamline |
| $2000 < R_e < 4000$ | Transitional |
| $R_e > 4000$ | Turbulent |

---

### 1.4 Compressible vs Incompressible Flow

- **Incompressible:** Density remains constant (e.g., water at low speeds)
- **Compressible:** Density varies with pressure (e.g., gases at high speeds)

---

## 2. Equation of Continuity

### Q: State the equation of continuity. *(2017)*

For a fluid flowing through a pipe with varying cross-section:

```
        A₁                    A₂
   ─────┐                ┌─────────
        │v₁→        v₂→ │
   ─────┘    ────────    └─────────
        |<── wide ──>|<── narrow ──>|
```

**Statement:** The mass of fluid entering a section per unit time equals the mass leaving per unit time.

$$\rho_1 A_1 v_1 = \rho_2 A_2 v_2$$

For incompressible fluid ($\rho_1 = \rho_2$):

$$\boxed{A_1 v_1 = A_2 v_2}$$

This means **where cross-section is large, velocity is small, and vice versa.**

**Proof:**
Consider a pipe with cross-sectional areas $A_1$ and $A_2$ at two points.

Mass entering in time $dt$:
$$dm_1 = \rho A_1 v_1 \, dt$$

Mass leaving in time $dt$:
$$dm_2 = \rho A_2 v_2 \, dt$$

By conservation of mass:
$$dm_1 = dm_2 \implies A_1 v_1 = A_2 v_2$$

---

## 3. Bernoulli's Theorem

### Q: State and explain / derive Bernoulli's theorem. *(2022, 2021, 2019, 2017)*

### Statement

> *For the steady, streamline, irrotational flow of an ideal (non-viscous, incompressible) fluid, the total mechanical energy per unit volume remains constant along a streamline.*

$$\boxed{P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}}$$

where:
- $P$ = static pressure (Pa)
- $\rho$ = fluid density (kg/m³)
- $v$ = fluid velocity (m/s)
- $g$ = acceleration due to gravity (m/s²)
- $h$ = height above reference level (m)

### Proof / Derivation

Consider fluid flowing from point 1 to point 2 in a pipe:

```
                         2 (height h₂, area A₂, pressure P₂, velocity v₂)
                        /
                       /
     1 (height h₁)   /
──────────────────────
  Area A₁, P₁, v₁
```

**Work done by pressure at inlet (section 1):**
$$W_1 = P_1 A_1 v_1 \, dt = P_1 \frac{dm}{\rho}$$

**Work done against pressure at outlet (section 2):**
$$W_2 = -P_2 \frac{dm}{\rho}$$

**Change in kinetic energy:**
$$\Delta KE = \frac{1}{2}dm(v_2^2 - v_1^2)$$

**Change in potential energy:**
$$\Delta PE = dm \cdot g(h_2 - h_1)$$

By the **work-energy theorem:**
$$W_1 + W_2 = \Delta KE + \Delta PE$$

$$(P_1 - P_2)\frac{dm}{\rho} = \frac{dm}{2}(v_2^2 - v_1^2) + dm \cdot g(h_2 - h_1)$$

Dividing by $dm$:

$$\frac{P_1}{\rho} - \frac{P_2}{\rho} = \frac{v_2^2 - v_1^2}{2} + g(h_2 - h_1)$$

Rearranging:

$$\boxed{P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2}$$

### Applications of Bernoulli's Theorem

| Application | Principle Used |
|---|---|
| Venturi meter | Pressure drop → velocity increase in narrow section |
| Airplane lift | Faster air over curved top → lower pressure → lift |
| Spray atomizer | Fast air reduces pressure, draws liquid up |
| Pitot tube | Measures fluid velocity |
| Torricelli's theorem | Special case: efflux velocity |

---

## 4. Venturi Meter

### Q: Write the theory of a venturi meter and derive an expression for the rate of flow of liquid through a pipeline. *(2022)*

### What is a Venturi Meter?

A **venturi meter** is a device used to measure the flow rate of a fluid through a pipe. It works on the principle of Bernoulli's theorem.

### Construction

```
  Wide pipe (A₁, P₁, v₁)        Wide pipe (A₂, P₂, v₂)
    │                                       │
    │      ╔══════╗  Throat (a, p, u)       │
────┤      ║      ║                         ├────
    │──────╜      ╙─────────────────────────│
    │                                       │
    │         │         │                   │
              h₁        h₂
              └────┬────┘
                   Δh (manometer)
```

### Derivation of Flow Rate

Let:
- $A$ = cross-section of main pipe
- $a$ = cross-section of throat
- $v_1$ = velocity in main pipe
- $v_2$ = velocity in throat
- $P_1$, $P_2$ = pressures at the main pipe and throat

**By continuity equation:**
$$A v_1 = a v_2 \implies v_1 = \frac{a v_2}{A}$$

**Applying Bernoulli's equation** (assuming horizontal pipe, $h_1 = h_2$):
$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

$$P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2)$$

Substituting $v_1 = \frac{a v_2}{A}$:

$$P_1 - P_2 = \frac{1}{2}\rho v_2^2 \left(1 - \frac{a^2}{A^2}\right)$$

Let the pressure difference $P_1 - P_2 = \rho g h$ (from manometer):

$$v_2 = \sqrt{\frac{2gh}{\left(1 - \frac{a^2}{A^2}\right)}} = \frac{A}{A^2 - a^2} \sqrt{2gh(A^2 - a^2)/\rho}$$

More cleanly:

$$v_2 = A\sqrt{\frac{2gh}{A^2 - a^2}}$$

**Volume flow rate (Rate of flow):**

$$\boxed{Q = a \cdot v_2 = \frac{Aa}{\sqrt{A^2 - a^2}} \sqrt{2gh}}$$

In practice, a discharge coefficient $C_d$ (≈ 0.98) is used:

$$Q = C_d \cdot \frac{Aa}{\sqrt{A^2 - a^2}} \sqrt{2gh}$$

---

## 5. Poiseuille's Equation

### Q: Derive an expression for the rate of flow of a liquid through a pipe line (Poiseuille's equation). *(2023, 2022, 2018)*

### Statement

Poiseuille's equation gives the volume of viscous fluid flowing through a cylindrical pipe per unit time:

$$\boxed{Q = \frac{\pi P r^4}{8 \eta l}}$$

Where:
- $Q$ = volume flow rate (m³/s)
- $P$ = pressure difference between the two ends (Pa)
- $r$ = radius of the pipe (m)
- $\eta$ = coefficient of viscosity (Pa·s)
- $l$ = length of pipe (m)

### Derivation

Consider a cylindrical pipe of length $l$ and radius $R$, with a pressure difference $P$ between its ends.

```
    P₁ (high)                    P₂ (low)
    │←─────────────── l ────────────────→│
    │                                    │
    ╔════════════════════════════════════╗
    ║   →→→→→→→→→→→→→→→→→→→→→→→→→→→  ║  ← r = R (wall)
    ║  →→→→→→→→→→→→→→→→→→→→→→→→→→→→  ║
    ║ →→→→→→→→→→→→→→→→→→→→→→→→→→→→→  ║  ← coaxial cylinder at radius r
    ╚════════════════════════════════════╝
          (parabolic velocity profile)
```

Consider a coaxial cylindrical shell of radius $r$ and thickness $dr$.

**Viscous force (retarding):**
$$F_{viscous} = \eta \cdot 2\pi r l \cdot \frac{dv}{dr}$$

**Pressure force (driving):**
$$F_{pressure} = P \cdot \pi r^2$$

At steady state, $F_{pressure} = F_{viscous}$:

$$P \cdot \pi r^2 = -\eta \cdot 2\pi r l \cdot \frac{dv}{dr}$$

(Negative sign: velocity decreases with increasing $r$)

$$\frac{dv}{dr} = -\frac{Pr}{2\eta l}$$

Integrating with boundary condition $v = 0$ at $r = R$ (no-slip):

$$v = \frac{P}{4\eta l}(R^2 - r^2)$$

This is a **parabolic velocity profile** — maximum at center, zero at walls.

**Volume flow through shell $dr$:**
$$dQ = v \cdot 2\pi r \, dr = \frac{P}{4\eta l}(R^2 - r^2) \cdot 2\pi r \, dr$$

**Total flow rate:**
$$Q = \int_0^R \frac{P \pi}{2\eta l}(R^2 - r^2) r \, dr$$

$$Q = \frac{P \pi}{2\eta l} \int_0^R (R^2 r - r^3) \, dr$$

$$Q = \frac{P \pi}{2\eta l} \left[\frac{R^2 r^2}{2} - \frac{r^4}{4}\right]_0^R$$

$$Q = \frac{P \pi}{2\eta l} \cdot \frac{R^4}{4}$$

$$\boxed{Q = \frac{\pi P R^4}{8 \eta l}}$$

### Key Observations

| Parameter | Effect on Q |
|---|---|
| Radius doubled | Flow increases 16× |
| Length doubled | Flow halved |
| Pressure doubled | Flow doubled |
| Viscosity doubled | Flow halved |

> ⚠️ The **fourth-power dependence on radius** is clinically significant — arterial narrowing drastically reduces blood flow.

---

## 6. Corrections to Poiseuille's Equation

### Q: Discuss the necessary corrections for Poiseuille's equation. *(2023, 2018)*

Poiseuille's equation is derived for an ideal case. In practice, several corrections are needed:

### 6.1 Kinetic Energy Correction (Hagenbach's Correction)

At the exit of the tube, fluid has kinetic energy that is not accounted for. The **effective pressure** driving flow is:

$$P_{eff} = P - \frac{\rho Q^2 \cdot m}{2\pi^2 r^4}$$

The corrected equation:

$$Q = \frac{\pi r^4}{8\eta l}\left(P - \frac{m \rho Q^2}{\pi^2 r^4}\right)$$

where $m = 1.12$ (Hagenbach's coefficient).

In simpler form, the effective pressure:
$$P_{eff} = P - \frac{\rho v^2}{2} \approx P - \frac{n\rho Q}{\pi r^4}$$

### 6.2 End Correction (Couette's Correction)

The velocity profile takes some length to develop at the entrance. The **effective length** is:

$$l_{eff} = l + 1.64r$$

So the corrected equation becomes:

$$\boxed{Q = \frac{\pi P r^4}{8\eta(l + 1.64r)} - \frac{n\rho Q^2}{8\pi \eta l}}$$

### 6.3 Summary of Corrections

| Correction | Cause | Formula Modification |
|---|---|---|
| Hagenbach's | Kinetic energy at exit | $P \to P - \frac{\rho v^2}{2}$ |
| Couette's | End effects (entry length) | $l \to l + 1.64r$ |
| Both | Combined practical use | Apply both simultaneously |

---

## 7. Solved Numerical Problems

---

### Problem 1 *(2022, 2021, 2020, 2017)*
**Water flows through a horizontal pipeline of varying cross-section at the rate of 0.2 m³/s. Calculate the velocity of water at a point where the area of cross-section is 0.02 m².**

**Given:**
- Volume flow rate: $Q = 0.2 \, \text{m}^3/\text{s}$
- Cross-sectional area: $A = 0.02 \, \text{m}^2$

**Solution:**

Using the continuity equation:
$$Q = A \cdot v$$

$$v = \frac{Q}{A} = \frac{0.2}{0.02}$$

$$\boxed{v = 10 \, \text{m/s}}$$

---

### Problem 2 *(2021)*
**Water flows through a horizontal pipe line of varying cross-section. At a point where the pressure is 0.05 m of Hg, the velocity is 0.25 m/s. Calculate the pressure at another point where the velocity is 0.4 m/s. Density of water = 1000 kg/m³.**

**Given:**
- $P_1 = 0.05 \, \text{m of Hg} = 0.05 \times 13600 \times 9.8 = 6664 \, \text{Pa}$
- $v_1 = 0.25 \, \text{m/s}$
- $v_2 = 0.4 \, \text{m/s}$
- $\rho = 1000 \, \text{kg/m}^3$
- Horizontal pipe: $h_1 = h_2$

**Solution:**

Applying Bernoulli's theorem:
$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

$$P_2 = P_1 + \frac{1}{2}\rho(v_1^2 - v_2^2)$$

$$P_2 = 6664 + \frac{1}{2}(1000)(0.25^2 - 0.4^2)$$

$$P_2 = 6664 + 500(0.0625 - 0.16)$$

$$P_2 = 6664 + 500(-0.0975)$$

$$P_2 = 6664 - 48.75$$

$$\boxed{P_2 \approx 6615 \, \text{Pa} \approx 0.0496 \, \text{m of Hg}}$$

---

### Problem 3 *(2019)*
**Calculate the speed at which the velocity head of a stream of water is equal to 0.50 m of Hg.**

**Given:**
- Velocity head = height of Hg column = $h_{Hg} = 0.50 \, \text{m}$
- $\rho_{Hg} = 13600 \, \text{kg/m}^3$, $\rho_w = 1000 \, \text{kg/m}^3$

**Solution:**

The velocity head in terms of the flowing fluid:
$$\frac{v^2}{2g} = h_w$$

Converting Hg column to water column:
$$h_w = h_{Hg} \times \frac{\rho_{Hg}}{\rho_w} = 0.50 \times \frac{13600}{1000} = 6.8 \, \text{m}$$

$$v = \sqrt{2gh_w} = \sqrt{2 \times 9.8 \times 6.8}$$

$$\boxed{v = \sqrt{133.28} \approx 11.54 \, \text{m/s}}$$

---

### Problem 4 *(2018)*
**Water flows through a horizontal capillary tube of 1 mm internal diameter and 70 cm length under a pressure of a water column 30 cm high. Find the rate of flow. Viscosity of water = 10⁻³ N·s/m².**

**Given:**
- Diameter $= 1 \, \text{mm} \Rightarrow r = 0.5 \times 10^{-3} \, \text{m}$
- Length $l = 70 \, \text{cm} = 0.70 \, \text{m}$
- Pressure head $h = 30 \, \text{cm} = 0.30 \, \text{m}$
- $\eta = 10^{-3} \, \text{N·s/m}^2$
- $\rho_w = 1000 \, \text{kg/m}^3$

**Solution:**

Pressure: $P = \rho g h = 1000 \times 9.8 \times 0.30 = 2940 \, \text{Pa}$

Using Poiseuille's equation:
$$Q = \frac{\pi P r^4}{8 \eta l}$$

$$Q = \frac{\pi \times 2940 \times (0.5 \times 10^{-3})^4}{8 \times 10^{-3} \times 0.70}$$

$$Q = \frac{\pi \times 2940 \times 6.25 \times 10^{-14}}{5.6 \times 10^{-3}}$$

$$Q = \frac{5.775 \times 10^{-10}}{5.6 \times 10^{-3}}$$

$$\boxed{Q \approx 1.03 \times 10^{-7} \, \text{m}^3/\text{s}}$$

---

## References

1. Halliday, D., Resnick, R., & Krane, K.S. — *Physics*, Vol. 1, Ch. 15–16, Wiley
2. Young, H.D. & Freedman, R.A. — *University Physics*, Ch. 12 (Fluid Mechanics), Pearson
3. Poiseuille, J.L.M. (1840) — *Recherches expérimentales sur le mouvement des liquides dans les tubes de très-petits diamètres*, Comptes Rendus
4. Streeter, V.L. & Wylie, E.B. — *Fluid Mechanics*, McGraw-Hill
5. Fox, R.W., McDonald, A.T. — *Introduction to Fluid Mechanics*, Wiley
6. [HyperPhysics — Fluid Mechanics](http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html)
7. [Khan Academy — Fluids](https://www.khanacademy.org/science/physics/fluids)

---

*← [Back to README](./README.md) | Next: [Viscosity →](./02_Viscosity.md)*
