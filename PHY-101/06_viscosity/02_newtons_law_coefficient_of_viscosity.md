# Newton's Law of Viscous Flow – Coefficient of Viscosity

*Date: April 8, 2026*
*Course: Physics / Fluid Mechanics*
*Topic Series: Viscosity & Fluid Flow*

---

## Table of Contents

1. [Statement of Newton's Law of Viscous Flow](#1-statement-of-newtons-law-of-viscous-flow)
2. [Detailed Derivation](#2-detailed-derivation)
3. [Coefficient of Viscosity — Definition & Meaning](#3-coefficient-of-viscosity--definition--meaning)
4. [Units and Dimensional Analysis](#4-units-and-dimensional-analysis)
5. [Newtonian vs Non-Newtonian Fluids](#5-newtonian-vs-non-newtonian-fluids)
6. [Temperature Dependence of η](#6-temperature-dependence-of-η)
7. [Viscosity of Gases vs Liquids](#7-viscosity-of-gases-vs-liquids)
8. [Worked Examples](#8-worked-examples)
9. [Diagrams](#9-diagrams)
10. [References](#10-references)

---

## 1. Statement of Newton's Law of Viscous Flow

**Newton's Law of Viscous Flow** states:

> *The tangential (shear) stress between two adjacent layers of a fluid is directly proportional to the velocity gradient perpendicular to the direction of flow.*

Mathematically:

$$\boxed{\tau = \eta \frac{du}{dy}}$$

Where:

| Symbol | Quantity | Unit |
|--------|----------|------|
| $\tau$ | Shear stress | $\text{Pa}\ (= \text{N m}^{-2})$ |
| $\eta$ | Coefficient of dynamic viscosity | $\text{Pa·s}\ (= \text{kg m}^{-1}\text{s}^{-1})$ |
| $\frac{du}{dy}$ | Velocity gradient (rate of shear) | $\text{s}^{-1}$ |

The constant of proportionality $\eta$ is called the **coefficient of viscosity** (or dynamic viscosity).

---

## 2. Detailed Derivation

### 2.1 Setup and Assumptions

Consider a viscous fluid flowing between two large horizontal parallel plates:

- Lower plate at $y = 0$ — **fixed** (stationary)
- Upper plate at $y = d$ — **moving** with velocity $u = U$ in the $x$-direction
- The fluid fills the gap $0 \leq y \leq d$
- Flow is **steady**, **laminar**, and **incompressible**
- No-slip condition holds at both plates

Because of the no-slip condition:
- Fluid at $y = 0$ has velocity $u = 0$
- Fluid at $y = d$ has velocity $u = U$

The velocity profile is **linear** under laminar conditions:

$$u(y) = \frac{U}{d} \cdot y$$

### 2.2 Identifying the Force

Consider two adjacent thin layers of fluid at heights $y$ and $y + dy$:

- Layer at $y$ has velocity $u$
- Layer at $y + dy$ has velocity $u + du$

The **faster layer** drags the slower one forward; the **slower layer** retards the faster one. This pair of equal and opposite drag forces constitutes the viscous (shear) force.

### 2.3 Applying Newton's Hypothesis

Newton postulated that the viscous force $F$ acting on an area $A$ of a layer is:

$$F \propto A \cdot \frac{du}{dy}$$

Introducing the proportionality constant $\eta$:

$$F = \eta A \frac{du}{dy}$$

Dividing both sides by area $A$, we get the **shear stress**:

$$\tau = \frac{F}{A} = \eta \frac{du}{dy}$$

This is Newton's Law of Viscous Flow.

### 2.4 Sign Convention

The viscous force acts tangentially and **opposes relative motion**. In the more rigorous form:

$$\tau_{yx} = \eta \frac{du}{dy}$$

where $\tau_{yx}$ is the $x$-momentum flux in the $y$-direction. The stress tensor in 3D is:

$$\tau_{ij} = \eta\left(\frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i}\right)$$

(For simple shear flow, only the $\frac{du}{dy}$ term survives.)

---

## 3. Coefficient of Viscosity — Definition & Meaning

### 3.1 Physical Definition

The **coefficient of viscosity** $\eta$ is defined as:

> *The tangential force per unit area (shear stress) required to maintain a unit velocity gradient between two parallel layers of the fluid.*

From Newton's law:

$$\eta = \frac{\tau}{du/dy} = \frac{F/A}{du/dy}$$

### 3.2 Molecular Interpretation

At the molecular level, viscosity arises from:

1. **Intermolecular cohesive forces** (dominant in liquids) — molecules in adjacent layers attract each other, resisting relative motion.
2. **Momentum transfer by molecular diffusion** (dominant in gases) — fast-moving molecules migrate into slow layers and slow-moving molecules migrate into fast layers, causing momentum exchange.

### 3.3 Viscosity as an Energy Dissipation Parameter

The rate of viscous energy dissipation per unit volume is:

$$\dot{E}_{dissipated} = \eta \left(\frac{du}{dy}\right)^2$$

This energy is converted to **heat** — explaining why viscous fluids warm up during vigorous mixing.

---

## 4. Units and Dimensional Analysis

### 4.1 Derivation of Units

From:

$$\eta = \frac{\tau}{du/dy} = \frac{F/A}{\Delta u / \Delta y}$$

$$[\eta] = \frac{\text{N/m}^2}{\text{(m/s)/m}} = \frac{\text{N·s}}{\text{m}^2} = \text{Pa·s}$$

### 4.2 Unit Systems

| System | Unit | Equivalent |
|--------|------|------------|
| SI | Pascal-second (Pa·s) | $\text{kg m}^{-1}\text{s}^{-1}$ |
| CGS | Poise (P) | $\text{g cm}^{-1}\text{s}^{-1}$ |
| CGS | Centipoise (cP) | $10^{-3}\ \text{Pa·s}$ |

> **Note:** Water at 20°C has $\eta \approx 1.002\ \text{cP} \approx 1.002 \times 10^{-3}\ \text{Pa·s}$, making centipoise a convenient unit for aqueous systems.

**Conversion:**

$$1\ \text{Pa·s} = 10\ \text{P} = 1000\ \text{cP}$$

### 4.3 Dimensional Formula

$$[\eta] = [M][L]^{-1}[T]^{-1} = ML^{-1}T^{-1}$$

---

## 5. Newtonian vs Non-Newtonian Fluids

Newton's Law applies **only to Newtonian fluids**, where $\eta$ is constant regardless of shear rate.

| Property | Newtonian Fluid | Non-Newtonian Fluid |
|----------|----------------|---------------------|
| $\eta$ | Constant | Varies with $du/dy$ |
| $\tau$ vs $du/dy$ graph | Straight line through origin | Curved or offset |
| Examples | Water, air, oil | Blood, ketchup, paint |

For non-Newtonian fluids, the **apparent viscosity** is defined as:

$$\eta_{app} = \frac{\tau}{du/dy}$$

which varies with the shear rate.

---

## 6. Temperature Dependence of $\eta$

### 6.1 For Liquids (Andrade's / Arrhenius Model)

$$\eta = A \, e^{E_a / RT}$$

Where:
- $A$ = pre-exponential factor (liquid-specific constant)
- $E_a$ = activation energy for viscous flow (J/mol)
- $R$ = universal gas constant ($8.314\ \text{J mol}^{-1}\text{K}^{-1}$)
- $T$ = absolute temperature (K)

As $T$ increases, $e^{E_a/RT}$ decreases → **$\eta$ decreases** for liquids.

**Example — Water:**

| Temperature (°C) | $\eta$ (mPa·s) |
|-----------------|----------------|
| 0 | 1.792 |
| 20 | 1.002 |
| 40 | 0.653 |
| 60 | 0.467 |
| 80 | 0.355 |
| 100 | 0.282 |

### 6.2 For Gases (Sutherland's Model)

$$\eta = \eta_0 \left(\frac{T}{T_0}\right)^{3/2} \frac{T_0 + C}{T + C}$$

For air at room temperature, the simpler power law approximation suffices:

$$\eta \approx \eta_0 \left(\frac{T}{T_0}\right)^{0.7}$$

As $T$ increases, molecular speed increases → more momentum exchange → **$\eta$ increases** for gases.

---

## 7. Viscosity of Gases vs Liquids

| Feature | Liquids | Gases |
|---------|---------|-------|
| Origin of viscosity | Intermolecular cohesion | Molecular momentum transfer |
| Effect of temperature | $\eta$ decreases | $\eta$ increases |
| Effect of pressure | Slight increase (negligible) | Nearly independent (at low P) |
| Magnitude | $10^{-3}$ to $10^{3}$ Pa·s | $10^{-5}$ to $10^{-4}$ Pa·s |

### Kinetic Theory Derivation for Gases

From kinetic theory, the viscosity of an ideal gas is:

$$\eta = \frac{1}{3} \rho \bar{v} \lambda$$

Where:
- $\rho$ = gas density
- $\bar{v} = \sqrt{\frac{8k_BT}{\pi m}}$ = mean molecular speed
- $\lambda = \frac{1}{\sqrt{2} n \pi d^2}$ = mean free path

Since $\rho \propto n$ and $\lambda \propto 1/n$ (where $n$ is number density), their product is **independent of pressure**, which explains why $\eta_{gas}$ is nearly pressure-independent.

---

## 8. Worked Examples

### Example 1: Finding Shear Stress

**Problem:** A layer of oil ($\eta = 0.1\ \text{Pa·s}$) fills a 2 mm gap between two plates. The upper plate moves at $v = 3\ \text{m/s}$. Find the shear stress.

**Solution:**

$$\frac{du}{dy} = \frac{3}{2 \times 10^{-3}} = 1500\ \text{s}^{-1}$$

$$\tau = \eta \frac{du}{dy} = 0.1 \times 1500 = \mathbf{150\ \text{Pa}}$$

---

### Example 2: Finding Force on a Plate

**Problem:** Two parallel plates of area $A = 0.5\ \text{m}^2$ are separated by glycerine ($\eta = 1.49\ \text{Pa·s}$) in a gap $d = 0.5\ \text{mm}$. One plate moves at $U = 0.2\ \text{m/s}$. Find the viscous force.

**Solution:**

$$\frac{du}{dy} = \frac{U}{d} = \frac{0.2}{0.5 \times 10^{-3}} = 400\ \text{s}^{-1}$$

$$\tau = \eta \frac{du}{dy} = 1.49 \times 400 = 596\ \text{Pa}$$

$$F = \tau \times A = 596 \times 0.5 = \mathbf{298\ \text{N}}$$

---

### Example 3: Finding Coefficient of Viscosity

**Problem:** A tangential force of $F = 1.5\ \text{N}$ is needed to move a plate of area $A = 0.3\ \text{m}^2$ over a fluid film at a velocity gradient of $\frac{du}{dy} = 100\ \text{s}^{-1}$. Find $\eta$.

**Solution:**

$$\tau = \frac{F}{A} = \frac{1.5}{0.3} = 5\ \text{Pa}$$

$$\eta = \frac{\tau}{du/dy} = \frac{5}{100} = \mathbf{0.05\ \text{Pa·s}} = 50\ \text{mPa·s}$$

---

## 9. Diagrams

**Newton's viscosity law — Couette Flow setup:**

![Couette Flow Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Laminar_shear.svg/640px-Laminar_shear.svg.png)

*Figure 1: Laminar shear between two plates. Upper plate moves at velocity $U$; the velocity profile is linear (Couette flow).*

**Shear stress vs shear rate for Newtonian and non-Newtonian fluids:**

![Rheology comparison](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rheology_of_time-independent_fluids.svg/640px-Rheology_of_time-independent_fluids.svg.png)

*Figure 2: Rheological behaviour. Only Newtonian fluids follow Newton's law (straight line through origin).*

---

## 10. References

### Textbooks
1. White, F.M. *Fluid Mechanics*, 8th ed. McGraw-Hill, 2016. — §1.7 Viscosity.
2. Munson, B.R. et al. *Fundamentals of Fluid Mechanics*, 7th ed. Wiley, 2013. — §1.6.
3. Cengel, Y.A. & Cimbala, J.M. *Fluid Mechanics: Fundamentals and Applications*, 4th ed. McGraw-Hill, 2018.
4. Irodov, I.E. *Problems in General Physics*. Mir Publishers, 1988.

### Online Sources
5. HyperPhysics — Viscosity: <http://hyperphysics.phy-astr.gsu.edu/hbase/fluids/viscosity.html>
6. LibreTexts Physics — Newton's Law of Viscosity: <https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Fluid_Mechanics_(Grotberg)>
7. Engineering Toolbox — Viscosity of Liquids: <https://www.engineeringtoolbox.com/absolute-viscosity-liquids-d_1259.html>
8. NIST Webbook — Fluid Properties: <https://webbook.nist.gov/chemistry/fluid/>

---

*← [Viscosity](01_viscosity.md) | Next: [Critical Velocity →](03_critical_velocity.md)*
