# Poiseuille's Equation

*Date: April 8, 2026*
*Course: Physics / Fluid Mechanics*
*Topic Series: Viscosity & Fluid Flow*

---

## Table of Contents

1. [Introduction & Historical Context](#1-introduction--historical-context)
2. [Assumptions of Poiseuille's Model](#2-assumptions-of-poiseuilles-model)
3. [Complete Derivation](#3-complete-derivation)
4. [Poiseuille's Equation — Statement](#4-poiseuilles-equation--statement)
5. [Velocity Profile — Parabolic Distribution](#5-velocity-profile--parabolic-distribution)
6. [Volumetric Flow Rate](#6-volumetric-flow-rate)
7. [Hydraulic Resistance](#7-hydraulic-resistance)
8. [Analogy with Ohm's Law](#8-analogy-with-ohms-law)
9. [Worked Examples](#9-worked-examples)
10. [Diagrams](#10-diagrams)
11. [References](#11-references)

---

## 1. Introduction & Historical Context

**Poiseuille's Equation** (also called the **Hagen-Poiseuille Law**) describes the laminar flow of a viscous, incompressible fluid through a straight, uniform circular pipe under a pressure difference.

### Historical Background

- **Jean Léonard Marie Poiseuille** (1797–1869) — French physician who studied blood flow. He derived this equation experimentally (1838–1840) to understand blood circulation in capillaries.
- **Gotthilf Heinrich Ludwig Hagen** (1797–1884) — German engineer who independently derived the same result (1839).
- The equation now bears both their names: **Hagen-Poiseuille equation**.

---

## 2. Assumptions of Poiseuille's Model

The derivation requires the following **idealised conditions**:

1. **Laminar flow** — $Re < 2000$; no turbulence.
2. **Steady (time-independent) flow** — velocity does not change with time at any point.
3. **Incompressible fluid** — constant density $\rho$.
4. **Newtonian fluid** — constant viscosity $\eta$.
5. **Fully developed flow** — velocity profile does not change along the pipe length (end effects are neglected).
6. **No-slip condition** — fluid velocity = 0 at the pipe wall.
7. **Circular, straight, rigid pipe** — uniform cross-section throughout.
8. **Gravity neglected** — or the pipe is horizontal.

---

## 3. Complete Derivation

### 3.1 Setup

Consider a horizontal cylindrical pipe of:
- **Radius:** $R$
- **Length:** $L$
- **Pressure at inlet:** $P_1$
- **Pressure at outlet:** $P_2$
- **Pressure difference:** $\Delta P = P_1 - P_2 > 0$

Use **cylindrical coordinates** $(r, \theta, z)$ with $z$ along the pipe axis and $r$ as the radial coordinate ($0 \leq r \leq R$).

### 3.2 Force Balance on a Fluid Cylinder

Consider a **coaxial cylindrical element** of the fluid with radius $r$ and length $L$.

**Forces acting on this cylinder:**

1. **Pressure force** (driving force, in $+z$ direction):

$$F_{pressure} = \Delta P \cdot \pi r^2$$

2. **Viscous shear force** (opposing force, in $-z$ direction on the cylinder surface):

$$F_{viscous} = -\tau \cdot 2\pi r L = -\eta \frac{du}{dr} \cdot 2\pi r L$$

> **Sign note:** Since velocity decreases from center to wall, $\frac{du}{dr} < 0$, making the viscous stress positive (resistive). We write $F_{viscous} = +\eta \left|\frac{du}{dr}\right| \cdot 2\pi rL$ opposing the flow.

### 3.3 Equilibrium Condition

For **steady flow**, net force = 0:

$$\Delta P \cdot \pi r^2 = -\eta \frac{du}{dr} \cdot 2\pi r L$$

Rearranging:

$$\frac{du}{dr} = -\frac{\Delta P}{2\eta L} \cdot r$$

### 3.4 Integration to Find Velocity Profile

Integrate both sides with respect to $r$:

$$\int du = -\frac{\Delta P}{2\eta L} \int r \, dr$$

$$u = -\frac{\Delta P}{2\eta L} \cdot \frac{r^2}{2} + C$$

$$u(r) = -\frac{\Delta P}{4\eta L} r^2 + C$$

**Apply Boundary Condition:** No-slip at $r = R$ → $u(R) = 0$:

$$0 = -\frac{\Delta P}{4\eta L} R^2 + C \implies C = \frac{\Delta P R^2}{4\eta L}$$

### 3.5 Velocity Profile

$$\boxed{u(r) = \frac{\Delta P}{4\eta L}(R^2 - r^2)}$$

This is a **paraboloid of revolution** — maximum at center ($r = 0$), zero at wall ($r = R$).

**Maximum velocity** (at pipe axis):

$$u_{max} = u(0) = \frac{\Delta P R^2}{4\eta L}$$

### 3.6 Volumetric Flow Rate Derivation

The volumetric flow rate $Q$ is obtained by integrating the velocity profile over the pipe cross-section:

$$Q = \int_0^R u(r) \cdot 2\pi r \, dr$$

$$Q = \int_0^R \frac{\Delta P}{4\eta L}(R^2 - r^2) \cdot 2\pi r \, dr$$

$$Q = \frac{\pi \Delta P}{2\eta L} \int_0^R (R^2 r - r^3) \, dr$$

Evaluating the integral:

$$\int_0^R (R^2 r - r^3) dr = \left[\frac{R^2 r^2}{2} - \frac{r^4}{4}\right]_0^R = \frac{R^4}{2} - \frac{R^4}{4} = \frac{R^4}{4}$$

Therefore:

$$\boxed{Q = \frac{\pi R^4 \Delta P}{8\eta L}}$$

---

## 4. Poiseuille's Equation — Statement

$$\boxed{Q = \frac{\pi R^4 \Delta P}{8\eta L} = \frac{\pi r^4 (P_1 - P_2)}{8\eta L}}$$

This is the **Hagen-Poiseuille equation** for volumetric flow rate through a circular pipe.

### In Terms of Diameter $D = 2R$:

$$Q = \frac{\pi D^4 \Delta P}{128\eta L}$$

### Key Insights

| Parameter | Effect on $Q$ | Explanation |
|-----------|--------------|-------------|
| Radius $R$ | $Q \propto R^4$ | Most dramatic — doubling $R$ increases $Q$ **16-fold** |
| Pressure difference $\Delta P$ | $Q \propto \Delta P$ | Linear |
| Viscosity $\eta$ | $Q \propto 1/\eta$ | Inverse linear |
| Length $L$ | $Q \propto 1/L$ | Inverse linear |

> **The $R^4$ dependence is the most important result.** A 10% reduction in artery radius (e.g., due to plaque) reduces blood flow by $\approx 34\%$.

---

## 5. Velocity Profile — Parabolic Distribution

$$u(r) = u_{max}\left(1 - \frac{r^2}{R^2}\right)$$

Where $u_{max} = \frac{\Delta P R^2}{4\eta L}$

### Average (Mean) Velocity

$$\bar{u} = \frac{Q}{\pi R^2} = \frac{\Delta P R^2}{8\eta L} = \frac{u_{max}}{2}$$

> The **average velocity is half the maximum** in Poiseuille flow — a key result used in measurements.

---

## 6. Volumetric Flow Rate

$$Q = \frac{\pi R^4 \Delta P}{8\eta L}$$

### Related Quantities

**Mass flow rate:**

$$\dot{m} = \rho Q = \frac{\rho \pi R^4 \Delta P}{8\eta L}$$

**Wall shear stress:**

$$\tau_w = \eta \left.\frac{du}{dr}\right|_{r=R} = \frac{\Delta P \cdot R}{2L} = \frac{4\eta \bar{u}}{R}$$

---

## 7. Hydraulic Resistance

Analogous to electrical resistance, define **hydraulic (fluidic) resistance** $\mathcal{R}$:

$$\Delta P = \mathcal{R} \cdot Q$$

From Poiseuille's equation:

$$\boxed{\mathcal{R} = \frac{8\eta L}{\pi R^4}}$$

### Pipes in Series

$$\mathcal{R}_{total} = \mathcal{R}_1 + \mathcal{R}_2 + \cdots = \sum_i \frac{8\eta L_i}{\pi R_i^4}$$

### Pipes in Parallel

$$\frac{1}{\mathcal{R}_{total}} = \frac{1}{\mathcal{R}_1} + \frac{1}{\mathcal{R}_2} + \cdots$$

---

## 8. Analogy with Ohm's Law

The Hagen-Poiseuille equation is mathematically analogous to Ohm's law in electric circuits:

| Electrical | Fluidic |
|-----------|---------|
| Voltage $V$ (V) | Pressure $\Delta P$ (Pa) |
| Current $I$ (A) | Flow rate $Q$ (m³/s) |
| Resistance $R_{elec}$ ($\Omega$) | Fluid resistance $\mathcal{R}$ (Pa·s/m³) |
| Ohm's Law: $V = IR$ | Poiseuille: $\Delta P = \mathcal{R} Q$ |

This analogy is extensively used in **microfluidics** and **biomechanics** to model flow networks.

---

## 9. Worked Examples

### Example 1: Basic Flow Rate

**Problem:** Water ($\eta = 1.0 \times 10^{-3}\ \text{Pa·s}$) flows through a pipe of radius $R = 1\ \text{mm}$, length $L = 0.5\ \text{m}$, under a pressure difference $\Delta P = 200\ \text{Pa}$. Find $Q$.

**Solution:**

$$Q = \frac{\pi R^4 \Delta P}{8\eta L} = \frac{\pi \times (10^{-3})^4 \times 200}{8 \times 10^{-3} \times 0.5}$$

$$Q = \frac{\pi \times 10^{-12} \times 200}{4 \times 10^{-3}} = \frac{200\pi \times 10^{-12}}{4 \times 10^{-3}}$$

$$Q = 50\pi \times 10^{-9} \approx 1.57 \times 10^{-7}\ \text{m}^3/\text{s}$$

$$\mathbf{Q \approx 0.157\ \mu\text{L/s}}$$

---

### Example 2: Effect of Radius on Flow

**Problem:** A pipe carries flow rate $Q$ at radius $R$. By what factor does $Q$ change if the radius is doubled?

**Solution:**

Since $Q \propto R^4$:

$$\frac{Q_{new}}{Q_{old}} = \left(\frac{2R}{R}\right)^4 = 2^4 = \mathbf{16}$$

**The flow rate increases 16 times** when the radius is doubled.

---

### Example 3: Pressure Drop in an Artery

**Problem:** Blood ($\eta = 3.5 \times 10^{-3}\ \text{Pa·s}$) flows at $Q = 5.0\ \text{cm}^3/\text{s} = 5.0 \times 10^{-6}\ \text{m}^3/\text{s}$ through an artery of radius $R = 2\ \text{mm}$, length $L = 0.1\ \text{m}$. Find $\Delta P$.

**Solution:**

$$\Delta P = \frac{8\eta L Q}{\pi R^4} = \frac{8 \times 3.5 \times 10^{-3} \times 0.1 \times 5.0 \times 10^{-6}}{\pi \times (2 \times 10^{-3})^4}$$

$$= \frac{8 \times 3.5 \times 10^{-3} \times 5.0 \times 10^{-7}}{\pi \times 16 \times 10^{-12}}$$

$$= \frac{1.4 \times 10^{-8}}{5.026 \times 10^{-11}} \approx 279\ \text{Pa}$$

$$\mathbf{\Delta P \approx 279\ \text{Pa} \approx 2.09\ \text{mmHg}}$$

---

### Example 4: Mean and Maximum Velocity

**Problem:** Using Example 1 data, find $\bar{u}$ and $u_{max}$.

**Solution:**

$$\bar{u} = \frac{Q}{\pi R^2} = \frac{1.57 \times 10^{-7}}{\pi \times (10^{-3})^2} = \frac{1.57 \times 10^{-7}}{3.14 \times 10^{-6}} \approx 0.05\ \text{m/s}$$

$$u_{max} = 2\bar{u} = \mathbf{0.10\ \text{m/s}}$$

---

## 10. Diagrams

**Parabolic velocity profile in a pipe:**

![Poiseuille parabolic profile](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Poiseuille_flow.png/640px-Poiseuille_flow.png)

*Figure 1: Parabolic (Poiseuillean) velocity profile across a circular pipe cross-section.*

**Cross-sectional annular element for integration:**

```
         ┌──────────────────┐
         │   ←── R ──→      │
         │      ┌──┐        │
         │   ←r→│  │←dr→    │
         │      └──┘        │
         │  Annular area    │
         │  dA = 2πr dr     │
         └──────────────────┘
```

*Figure 2: Annular ring element used in integration to find $Q$.*

---

## 11. References

### Textbooks
1. Poiseuille, J.L.M. (1840). *Recherches expérimentales sur le mouvement des liquides dans les tubes de très petits diamètres.* Comptes Rendus, 11, 961–967 & 1041–1048.
2. White, F.M. *Fluid Mechanics*, 8th ed. McGraw-Hill, 2016. — §6.4.
3. Munson, B.R. et al. *Fundamentals of Fluid Mechanics*, 7th ed. Wiley, 2013.
4. Sutera, S.P. & Skalak, R. (1993). *The History of Poiseuille's Law.* Annual Review of Fluid Mechanics, 25(1), 1–20.

### Online Sources
5. HyperPhysics — Poiseuille's Law: <http://hyperphysics.phy-astr.gsu.edu/hbase/ppois.html>
6. Khan Academy — Poiseuille's Law: <https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/what-is-poiseuilles-law>
7. LibreTexts — Hagen-Poiseuille Equation: <https://eng.libretexts.org/Bookshelves/Chemical_Engineering/Fundamentals_of_Chemical_Engineering_(Dickey)/10%3A_Viscous_Flow_in_Ducts>
8. MIT OpenCourseWare — Viscous Flow: <https://ocw.mit.edu/courses/2-20-marine-hydrodynamics-13-021-spring-2005>

---

*← [Critical Velocity](03_critical_velocity.md) | Next: [Corrections of Poiseuille's Equation →](05_corrections_of_poiseuilles_equation.md)*
