# 🌊 PHYSICS-I — Fluid Mechanics
### Complete Exam Preparation Notes (2017–2023)

---

## 📌 TABLE OF CONTENTS
1. [Types of Flow](#1-types-of-flow)
2. [Critical Velocity & Reynolds Number](#2-critical-velocity--reynolds-number)
3. [Equation of Continuity](#3-equation-of-continuity)
4. [Bernoulli's Theorem](#4-bernoullis-theorem)
5. [Venturi Meter](#5-venturi-meter)
6. [Rate of Flow — Poiseuille's Equation](#6-rate-of-flow--poiseuilles-equation)
7. [Corrections to Poiseuille's Equation](#7-corrections-to-poiseuilles-equation)
8. [All Key Formulas at a Glance](#8-all-key-formulas-at-a-glance)
9. [Solved Numerical Problems](#9-solved-numerical-problems)

---

## 1. Types of Flow

### 1.1 Streamline (Laminar) Flow
> **Definition:** A flow in which every fluid particle follows the same smooth path (streamline) as the particle preceding it, and the velocity at every point remains constant over time.

**Characteristics:**
- Orderly, parallel layers of fluid
- No mixing between layers
- Occurs at **low velocities**
- Velocity at a given point is always the same
- The path traced by a fluid particle is called a **streamline**

**Streamline properties:**
- Two streamlines can **never** cross each other
- Tangent to a streamline at any point gives the direction of velocity at that point

### 1.2 Turbulent Flow
> **Definition:** A flow in which fluid particles move in a disorderly, irregular, and zigzag manner. Velocity at a point varies randomly with time.

**Characteristics:**
- Irregular, chaotic motion
- Mixing between layers occurs
- Occurs at **high velocities**
- Energy is wasted in forming eddies and vortices
- Associated with high Reynolds numbers (Re > 4000)

### 1.3 Uniform Flow
> **Definition:** A flow in which the velocity of fluid does not change with position at any given instant of time. All fluid particles have the same velocity at the same instant.

**Contrast:**
| Property | Uniform Flow | Non-Uniform Flow |
|---|---|---|
| Velocity w.r.t. position | Constant | Varies |
| Cross-section | Constant | Varying |
| Example | Flow in constant-diameter pipe | Flow through nozzle |

### 1.4 Steady vs Unsteady Flow
- **Steady flow:** Velocity at a point does not change with time
- **Unsteady flow:** Velocity at a point changes with time

---

## 2. Critical Velocity & Reynolds Number

### 2.1 Critical Velocity
> **Definition:** Critical velocity is the velocity of a liquid below which its flow is streamline (laminar) and above which the flow becomes turbulent.

**Formula:**

$$v_c = \frac{K \eta}{\rho r}$$

Where:
| Symbol | Quantity | Unit |
|---|---|---|
| $v_c$ | Critical velocity | m/s |
| $K$ | Reynolds number (dimensionless critical value ≈ 2000) | — |
| $\eta$ | Coefficient of viscosity | N·s/m² (Pa·s) |
| $\rho$ | Density of fluid | kg/m³ |
| $r$ | Radius of the tube | m |

**Key observations:**
- $v_c \propto \eta$ → More viscous fluid has higher critical velocity
- $v_c \propto \dfrac{1}{\rho}$ → Denser fluids have lower critical velocity
- $v_c \propto \dfrac{1}{r}$ → Wider tubes have lower critical velocity

### 2.2 Reynolds Number (Re)

$$\boxed{Re = \frac{\rho v r}{\eta}}$$

| Re Value | Flow Type |
|---|---|
| Re < 2000 | Laminar / Streamline |
| 2000 < Re < 4000 | Transitional |
| Re > 4000 | Turbulent |

Reynolds number is a **dimensionless** quantity. It represents the ratio of inertial forces to viscous forces.

---

## 3. Equation of Continuity

### Statement
> For an incompressible fluid in steady flow, the product of the cross-sectional area and velocity at every point along the flow remains constant.

### Derivation

Consider a tube of varying cross-section. Let:
- $A_1$, $v_1$ = area and velocity at point 1
- $A_2$, $v_2$ = area and velocity at point 2

Mass entering per second at point 1:
$$\dot{m}_1 = \rho A_1 v_1$$

Mass leaving per second at point 2:
$$\dot{m}_2 = \rho A_2 v_2$$

By conservation of mass (incompressible fluid, $\rho$ = constant):

$$\boxed{A_1 v_1 = A_2 v_2 = \text{constant} = Q}$$

This is the **Equation of Continuity**, where $Q$ is the **volume flow rate** (m³/s).

### Key Consequence — Liquids Flow Slowly in Wider Areas

From $A_1 v_1 = A_2 v_2$:

$$v_2 = \frac{A_1}{A_2} v_1$$

If $A_2 > A_1$, then $v_2 < v_1$

✅ **Conclusion:** Where cross-sectional area is larger, velocity is smaller — and vice versa. This proves that through greater cross-sectional area, liquids flow **slowly**.

---

## 4. Bernoulli's Theorem

### Statement
> For a streamline, steady, incompressible, non-viscous fluid in flow, the sum of pressure energy per unit volume, kinetic energy per unit volume, and potential energy per unit volume remains constant at every point along the flow.

$$\boxed{P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}}$$

### Derivation (Work-Energy Method)

Consider fluid flowing from point 1 to point 2 in a pipe.

**Variables:**
| Quantity | Point 1 | Point 2 |
|---|---|---|
| Pressure | $P_1$ | $P_2$ |
| Velocity | $v_1$ | $v_2$ |
| Height | $h_1$ | $h_2$ |
| Area | $A_1$ | $A_2$ |

Let a small element of fluid of mass $m$ and volume $\Delta V$ move.

**Work done by pressure at point 1 (on fluid entering):**
$$W_1 = P_1 A_1 \Delta x_1 = P_1 \Delta V$$

**Work done against pressure at point 2 (fluid leaving):**
$$W_2 = -P_2 \Delta V$$

**Net work done by pressure:**
$$W_{pressure} = (P_1 - P_2)\Delta V$$

**Change in KE:**
$$\Delta KE = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2$$

**Change in PE:**
$$\Delta PE = mg h_2 - mg h_1$$

Applying **Work-Energy theorem:**
$$W_{pressure} = \Delta KE + \Delta PE$$

$$(P_1 - P_2)\Delta V = \frac{1}{2}m(v_2^2 - v_1^2) + mg(h_2 - h_1)$$

Since $m = \rho \Delta V$, dividing throughout by $\Delta V$:

$$(P_1 - P_2) = \frac{1}{2}\rho(v_2^2 - v_1^2) + \rho g(h_2 - h_1)$$

Rearranging:

$$\boxed{P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2}$$

Each term has units of **Pa (N/m²) = J/m³** (energy per unit volume).

### Terms of Bernoulli's Equation

| Term | Name | Physical meaning |
|---|---|---|
| $P$ | Static pressure | Pressure energy per unit volume |
| $\frac{1}{2}\rho v^2$ | Dynamic pressure | Kinetic energy per unit volume |
| $\rho g h$ | Hydrostatic pressure | Potential energy per unit volume |

### Velocity Head

> **Velocity head** = the height $h$ of a fluid column that would produce a pressure equal to the dynamic pressure.

$$\frac{1}{2}\rho v^2 = \rho g h \implies \boxed{h = \frac{v^2}{2g}}$$

---

## 5. Venturi Meter

### Definition
> A **Venturi meter** is a device used to measure the flow rate (discharge) of a fluid through a pipe. It works on the principle of **Bernoulli's theorem**.

### Construction
- A pipe with a constricted section (throat) in the middle
- Manometer connected between the wide section (inlet) and the throat
- As fluid enters the narrow section, velocity increases and pressure drops

### Theory & Derivation

Let:
- $A_1$, $P_1$, $v_1$ = area, pressure, velocity at inlet
- $A_2$, $P_2$, $v_2$ = area, pressure, velocity at throat
- $h$ = pressure head difference (from manometer)

**From Bernoulli's theorem (horizontal pipe, $h_1 = h_2$):**
$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

$$P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2) \quad \ldots (1)$$

**From equation of continuity:**
$$A_1 v_1 = A_2 v_2 \implies v_1 = \frac{A_2 v_2}{A_1} \quad \ldots (2)$$

**Pressure head difference:**
$$P_1 - P_2 = \rho g h \quad \ldots (3)$$

Substituting (2) into (1):
$$\rho g h = \frac{1}{2}\rho\left(v_2^2 - \frac{A_2^2 v_2^2}{A_1^2}\right) = \frac{1}{2}\rho v_2^2\left(1 - \frac{A_2^2}{A_1^2}\right)$$

$$v_2^2 = \frac{2gh}{\left(1 - \frac{A_2^2}{A_1^2}\right)} = \frac{2g h A_1^2}{A_1^2 - A_2^2}$$

$$\boxed{v_2 = A_1\sqrt{\frac{2gh}{A_1^2 - A_2^2}}}$$

**Volume flow rate (discharge):**
$$\boxed{Q = A_2 v_2 = \frac{A_1 A_2 \sqrt{2gh}}{\sqrt{A_1^2 - A_2^2}}}$$

---

## 6. Rate of Flow — Poiseuille's Equation

### Definition
> The **rate of flow** (or volume flux) is the volume of fluid passing through a cross-section per unit time.

$$Q = \frac{V}{t} = Av$$

Unit: **m³/s**

### Poiseuille's Law (Derivation)

> **Poiseuille's equation** gives the rate of laminar flow of a viscous fluid through a cylindrical pipe.

**Assumptions:**
- Fluid is viscous, incompressible
- Flow is steady and laminar
- No-slip condition at walls (velocity = 0 at wall)

**Setup:** Consider a cylindrical pipe of radius $R$ and length $L$. Pressure difference between ends = $\Delta P = P_1 - P_2$.

**Step 1 — Velocity profile:**

For a thin cylindrical shell of radius $r$ and thickness $dr$:

Viscous force: $F = \eta \cdot 2\pi r L \cdot \dfrac{dv}{dr}$

Pressure force: $F = \Delta P \cdot \pi r^2$

At equilibrium:
$$\eta \cdot 2\pi r L \cdot \frac{dv}{dr} = -\Delta P \cdot \pi r^2$$

(negative because velocity decreases with $r$)

$$\frac{dv}{dr} = -\frac{\Delta P \cdot r}{2\eta L}$$

Integrating with boundary condition $v = 0$ at $r = R$:

$$\boxed{v(r) = \frac{\Delta P}{4\eta L}(R^2 - r^2)}$$

This is a **parabolic velocity profile** — maximum at center, zero at walls.

**Step 2 — Flow rate:**

Consider a thin annular ring at radius $r$, thickness $dr$:

$$dQ = v(r) \cdot 2\pi r \, dr = \frac{\Delta P}{4\eta L}(R^2 - r^2) \cdot 2\pi r \, dr$$

Integrating from 0 to R:

$$Q = \frac{\pi \Delta P}{2\eta L} \int_0^R (R^2 r - r^3) \, dr$$

$$Q = \frac{\pi \Delta P}{2\eta L} \left[\frac{R^2 r^2}{2} - \frac{r^4}{4}\right]_0^R = \frac{\pi \Delta P}{2\eta L} \cdot \frac{R^4}{4}$$

$$\boxed{Q = \frac{\pi \Delta P R^4}{8 \eta L}}$$

This is **Poiseuille's Law**. Also written as:

$$Q = \frac{\pi (P_1 - P_2) r^4}{8 \eta l}$$

### Key Dependencies

| Parameter | Effect on Q |
|---|---|
| $Q \propto \Delta P$ | Higher pressure → more flow |
| $Q \propto R^4$ | Radius has **enormous** effect |
| $Q \propto \dfrac{1}{\eta}$ | Less viscous → more flow |
| $Q \propto \dfrac{1}{L}$ | Longer pipe → less flow |

> ⚠️ The $R^4$ dependence is critical: **doubling the radius increases flow by 16×**

---

## 7. Corrections to Poiseuille's Equation

Poiseuille's equation is derived under ideal conditions. In practice, **corrections** are needed:

### 7.1 End Correction (Kinetic Energy Correction)

At the entry point, fluid accelerates and gains kinetic energy. The effective pressure difference is less than $\Delta P$.

**Corrected equation:**

$$Q = \frac{\pi r^4}{8 \eta}\left(\frac{\Delta P}{l} - \frac{m \rho Q}{\pi r^4}\right)$$

Or the **effective length** is modified. Rayleigh's end correction adds a term $n \cdot r$ (where $n ≈ 1.64$) to the length:

$$l_{eff} = l + nr$$

**Corrected Poiseuille formula:**

$$\boxed{Q = \frac{\pi \Delta P r^4}{8 \eta (l + nr)}}$$

where $n \approx 1.64$

### 7.2 Kinetic Energy Correction

The fluid at the exit has kinetic energy that must be accounted for. The driving pressure must also supply this:

$$\Delta P_{effective} = \Delta P - \frac{m\rho Q^2}{\pi^2 r^4}$$

**Fully corrected Poiseuille equation (Hagenbach's correction):**

$$Q = \frac{\pi r^4}{8 \eta l}\left(\Delta P - \frac{m \rho Q^2}{\pi^2 r^4}\right)$$

where $m = \dfrac{8}{3}$ (Hagenbach's constant, sometimes given as $\approx 1.1$)

### 7.3 Surface Tension Correction

For capillary tubes, surface tension creates additional pressure (Laplace pressure). If contact angle is $\theta$ and surface tension is $T$:

$$P_{surface} = \frac{2T\cos\theta}{r}$$

This pressure assists or opposes flow and must be added/subtracted from $\Delta P$.

### Summary of Corrections

| Correction | Cause | Formula Modification |
|---|---|---|
| End / Entry correction | Fluid acceleration at entry | Replace $l$ with $l + 1.64r$ |
| Kinetic energy (Hagenbach) | KE of exiting fluid | Subtract $\frac{m\rho Q^2}{\pi^2 r^4}$ from $\Delta P$ |
| Surface tension | Capillary pressure | Add $\frac{2T\cos\theta}{r}$ to $\Delta P$ |

---

## 8. All Key Formulas at a Glance

$$\text{Critical velocity:} \quad v_c = \frac{K\eta}{\rho r}$$

$$\text{Reynolds number:} \quad Re = \frac{\rho v r}{\eta}$$

$$\text{Equation of continuity:} \quad A_1 v_1 = A_2 v_2$$

$$\text{Bernoulli's theorem:} \quad P + \frac{1}{2}\rho v^2 + \rho g h = \text{const}$$

$$\text{Velocity head:} \quad h = \frac{v^2}{2g}$$

$$\text{Venturi meter flow rate:} \quad Q = \frac{A_1 A_2\sqrt{2gh}}{\sqrt{A_1^2 - A_2^2}}$$

$$\text{Poiseuille's law:} \quad Q = \frac{\pi \Delta P r^4}{8\eta l}$$

$$\text{Velocity profile in pipe:} \quad v(r) = \frac{\Delta P}{4\eta l}(R^2 - r^2)$$

$$\text{Rate of flow:} \quad Q = Av$$

$$\text{Pressure due to fluid column:} \quad P = \rho g h$$

---

## 9. Solved Numerical Problems

---

### Problem 1 (2022, 2020, 2017)
> Water flows through a horizontal pipeline of varying cross-section at the rate of **0.2 m³/s**. Calculate the velocity of water at a point where the area of cross-section is **0.02 m²**.

**Solution:**

Given:
- Volume flow rate, $Q = 0.2 \text{ m}^3/\text{s}$
- Cross-sectional area, $A = 0.02 \text{ m}^2$

Using: $Q = Av$

$$v = \frac{Q}{A} = \frac{0.2}{0.02}$$

$$\boxed{v = 10 \text{ m/s}}$$

---

### Problem 2 (2021)
> Water flows through a horizontal pipe of varying cross-section. At a point where pressure of water is **0.05 m of Hg**, the velocity of flow is **0.25 m/s**. Calculate the pressure at another point where the velocity of flow is **0.4 m/s**. Density of water = **10³ kg/m³** (Hg density = 13,600 kg/m³)

**Solution:**

Given:
- $P_1 = 0.05 \text{ m of Hg} = 0.05 \times 13600 \times 9.8 = 6664 \text{ Pa}$
- $v_1 = 0.25$ m/s
- $v_2 = 0.40$ m/s
- $\rho_{water} = 10^3$ kg/m³
- Horizontal pipe → $h_1 = h_2$

Applying Bernoulli's theorem:

$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

$$P_2 = P_1 + \frac{1}{2}\rho(v_1^2 - v_2^2)$$

$$P_2 = 6664 + \frac{1}{2} \times 10^3 \times (0.25^2 - 0.40^2)$$

$$P_2 = 6664 + 500 \times (0.0625 - 0.16)$$

$$P_2 = 6664 + 500 \times (-0.0975)$$

$$P_2 = 6664 - 48.75$$

$$\boxed{P_2 = 6615.25 \text{ Pa} \approx 6615 \text{ Pa}}$$

---

### Problem 3 (2019)
> Calculate the speed at which the velocity head of a stream of water is equal to **0.50 m of Hg**.

**Solution:**

Given:
- Velocity head = 0.50 m of Hg
- Density of Hg = 13,600 kg/m³
- Density of water = 1000 kg/m³

Converting pressure head of Hg to height of water:
$$h_{water} = \frac{\rho_{Hg}}{\rho_{water}} \times h_{Hg} = \frac{13600}{1000} \times 0.50 = 6.8 \text{ m of water}$$

Using velocity head formula:
$$h = \frac{v^2}{2g}$$

$$v^2 = 2gh = 2 \times 9.8 \times 6.8 = 133.28$$

$$\boxed{v = \sqrt{133.28} \approx 11.55 \text{ m/s}}$$

---

### Problem 4 (2018)
> Water flows through a horizontal capillary tube of **1 mm internal diameter** and **70 cm length** under pressure of a water column **30 cm in height**. Find the rate of flow. Viscosity of water = **10⁻³ N·s/m²**.

**Solution:**

Given:
- Radius, $r = 0.5 \text{ mm} = 0.5 \times 10^{-3} \text{ m}$
- Length, $l = 70 \text{ cm} = 0.70 \text{ m}$
- Height of water column, $h = 30 \text{ cm} = 0.30 \text{ m}$
- $\eta = 10^{-3}$ N·s/m²
- $\rho = 1000$ kg/m³, $g = 9.8$ m/s²

**Pressure difference:**
$$\Delta P = \rho g h = 1000 \times 9.8 \times 0.30 = 2940 \text{ Pa}$$

**Applying Poiseuille's law:**
$$Q = \frac{\pi \Delta P r^4}{8 \eta l}$$

$$Q = \frac{\pi \times 2940 \times (0.5 \times 10^{-3})^4}{8 \times 10^{-3} \times 0.70}$$

$$Q = \frac{\pi \times 2940 \times 6.25 \times 10^{-14}}{5.6 \times 10^{-3}}$$

$$Q = \frac{3.14159 \times 1.8375 \times 10^{-10}}{5.6 \times 10^{-3}}$$

$$Q = \frac{5.773 \times 10^{-10}}{5.6 \times 10^{-3}}$$

$$\boxed{Q \approx 1.03 \times 10^{-7} \text{ m}^3/\text{s}}$$

---

## 📝 Quick Revision Summary

| Concept | Key Point |
|---|---|
| Streamline flow | Orderly, low velocity, Re < 2000 |
| Turbulent flow | Chaotic, high velocity, Re > 4000 |
| Critical velocity | $v_c = K\eta/\rho r$ |
| Continuity equation | $A_1v_1 = A_2v_2$ — wider pipe → slower flow |
| Bernoulli's theorem | $P + \frac{1}{2}\rho v^2 + \rho gh = \text{const}$ |
| Venturi meter | Uses Bernoulli + Continuity to measure flow |
| Poiseuille's law | $Q = \pi \Delta P r^4 / 8\eta l$ — huge $r^4$ dependence |
| Velocity head | $h = v^2/2g$ |
| Poiseuille corrections | End correction, KE correction (Hagenbach), Surface tension |

---

*Notes compiled from exam questions: 2017–2023 | Physics-I, Fluid Mechanics*
