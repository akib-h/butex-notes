# Viscosity

*Date: April 8, 2026*
*Course: Physics / Fluid Mechanics*
*Topic Series: Viscosity & Fluid Flow*

---

## Table of Contents

1. [Definition](#1-definition)
2. [Physical Interpretation](#2-physical-interpretation)
3. [Types of Viscosity](#3-types-of-viscosity)
4. [Mathematical Expression](#4-mathematical-expression)
5. [Units and Dimensions](#5-units-and-dimensions)
6. [Factors Affecting Viscosity](#6-factors-affecting-viscosity)
7. [Classification of Fluids by Viscous Behaviour](#7-classification-of-fluids-by-viscous-behaviour)
8. [Examples & Applications](#8-examples--applications)
9. [Diagrams](#9-diagrams)
10. [References](#10-references)

---

## 1. Definition

**Viscosity** is the intrinsic property of a fluid (liquid or gas) that quantifies its **resistance to deformation** or flow under an applied shear (tangential) stress. It arises from **internal friction** between adjacent layers of the fluid that move relative to one another.

> In simpler terms: viscosity is the "thickness" or "stickiness" of a fluid. A high-viscosity fluid flows slowly; a low-viscosity fluid flows easily.

---

## 2. Physical Interpretation

Consider a fluid confined between two horizontal plates:

- The **lower plate** is fixed.
- The **upper plate** is moved with a constant velocity $v$ by applying a tangential force $F$.

The fluid in contact with each plate moves with that plate's velocity (the **no-slip condition**). This creates a **velocity gradient** across the fluid layers. Each layer exerts a drag force on the layer above it — this internal resistance is viscosity.

### Analogy

Think of a stack of playing cards. When you push the top card, the cards in the middle slide relative to each other. The friction between adjacent cards is analogous to viscosity between fluid layers.

---

## 3. Types of Viscosity

### 3.1 Dynamic (Absolute) Viscosity — $\eta$ or $\mu$

Measures the **tangential force per unit area** required to maintain a unit velocity gradient between two parallel planes in the fluid.

$$\eta = \frac{\tau}{(du/dy)}$$

### 3.2 Kinematic Viscosity — $\nu$

The ratio of dynamic viscosity to the **density** $\rho$ of the fluid:

$$\nu = \frac{\eta}{\rho}$$

Kinematic viscosity appears naturally in fluid dynamics equations (e.g., Reynolds number) and is useful when gravitational/inertial effects are important.

---

## 4. Mathematical Expression

Newton's Law of Viscous Flow gives the relation for shear stress:

$$\boxed{\tau = \eta \frac{du}{dy}}$$

Where:

| Symbol | Meaning | SI Unit |
|--------|---------|---------|
| $\tau$ | Shear stress (tangential force per unit area) | $\text{N m}^{-2}$ or Pa |
| $\eta$ | Dynamic coefficient of viscosity | $\text{Pa·s}$ or $\text{N s m}^{-2}$ |
| $\frac{du}{dy}$ | Velocity gradient (rate of shear strain) | $\text{s}^{-1}$ |

The **negative sign** convention is sometimes written as:

$$\tau = -\eta \frac{du}{dy}$$

to indicate that the viscous force opposes the direction of relative motion (analogous to friction).

---

## 5. Units and Dimensions

### 5.1 Dynamic Viscosity $(\eta)$

| System | Unit | Symbol |
|--------|------|--------|
| SI | Pascal-second | $\text{Pa·s}$ |
| CGS | Poise | $\text{P}$ |
| Conversion | $1\ \text{Pa·s} = 10\ \text{P}$ | |

**Dimensional formula:**

$$[\eta] = \frac{[\tau]}{[du/dy]} = \frac{\text{N m}^{-2}}{\text{s}^{-1}} = \text{N s m}^{-2} = \text{kg m}^{-1} \text{s}^{-1}$$

$$\Rightarrow [\eta] = M L^{-1} T^{-1}$$

### 5.2 Kinematic Viscosity $(\nu)$

| System | Unit | Symbol |
|--------|------|--------|
| SI | Square metres per second | $\text{m}^2 \text{s}^{-1}$ |
| CGS | Stokes | $\text{St}$ |
| Conversion | $1\ \text{m}^2\text{s}^{-1} = 10^4\ \text{St}$ | |

**Dimensional formula:**

$$[\nu] = \frac{[\eta]}{[\rho]} = \frac{M L^{-1} T^{-1}}{M L^{-3}} = L^2 T^{-1}$$

---

## 6. Factors Affecting Viscosity

### 6.1 Effect of Temperature

#### Liquids
- Viscosity **decreases** with increasing temperature.
- Higher temperature → more thermal energy → weaker intermolecular forces → easier layer sliding.
- Empirical relationship (Andrade's equation):

$$\eta = A \, e^{B/T}$$

Where $A$ and $B$ are liquid-specific constants, and $T$ is absolute temperature.

#### Gases
- Viscosity **increases** with increasing temperature.
- In gases, viscosity arises from momentum transfer between molecules. Higher temperature → faster molecules → more frequent momentum exchange → greater resistance.
- From kinetic theory:

$$\eta \propto \sqrt{T}$$

### 6.2 Effect of Pressure

- For **liquids**: viscosity increases slightly with pressure (negligible for most practical purposes).
- For **gases**: viscosity is nearly independent of pressure at moderate pressures.

### 6.3 Nature of Fluid

- Fluids with stronger **intermolecular forces** (e.g., hydrogen bonding in glycerol) exhibit higher viscosity.
- **Molecular size and shape** also matter — longer chain molecules (polymers) have higher viscosity.

---

## 7. Classification of Fluids by Viscous Behaviour

| Fluid Type | Description | Example |
|------------|-------------|---------|
| **Newtonian** | $\tau \propto \frac{du}{dy}$; constant $\eta$ | Water, air, ethanol |
| **Non-Newtonian** | $\eta$ varies with shear rate | Blood, paint, ketchup |
| — Shear-thinning (pseudoplastic) | $\eta$ decreases as shear rate increases | Paints, polymer solutions |
| — Shear-thickening (dilatant) | $\eta$ increases as shear rate increases | Cornstarch suspension |
| — Bingham plastic | Requires a yield stress to flow | Toothpaste, mayonnaise |

---

## 8. Examples & Applications

### 8.1 Numerical Example

**Problem:** A fluid has a dynamic viscosity of $\eta = 0.89 \times 10^{-3}\ \text{Pa·s}$ (water at 25°C). Two plates are separated by $d = 1\ \text{mm}$. The upper plate moves at $v = 0.5\ \text{m/s}$. Find the shear stress.

**Solution:**

$$\frac{du}{dy} = \frac{v}{d} = \frac{0.5}{1 \times 10^{-3}} = 500\ \text{s}^{-1}$$

$$\tau = \eta \frac{du}{dy} = 0.89 \times 10^{-3} \times 500 = 0.445\ \text{Pa}$$

### 8.2 Real-World Applications

1. **Engine Oils (SAE Grading):** Engine oils are graded by viscosity (e.g., SAE 10W-40). The "W" (winter) grade ensures low-temperature flow; the second number ensures sufficient viscosity at operating temperature.

2. **Blood Flow:** Blood viscosity ($\approx 3-4\ \text{mPa·s}$) affects cardiovascular health. High viscosity increases the risk of hypertension and blood clots.

3. **Food Industry:** The viscosity of syrups, sauces, and dairy products determines their processing and mouthfeel. Honey ($\approx 2000-10000\ \text{mPa·s}$) is far more viscous than milk ($\approx 2\ \text{mPa·s}$).

4. **Lubrication Engineering:** Bearings and gear systems rely on lubricants with the correct viscosity to prevent metal-to-metal contact.

5. **Inkjet Printing:** Ink viscosity must be carefully controlled so droplets form correctly and dry at the right rate.

---

## 9. Diagrams

**Velocity profile between parallel plates:**

![Viscosity velocity gradient](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Laminar_shear_flow.svg/800px-Laminar_shear_flow.svg.png)

*Figure 1: Velocity profile showing laminar shear flow between two parallel plates. The upper plate moves with velocity $v$; the lower plate is stationary.*

**Viscosity comparison chart:**

![Viscosity comparison](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Viscous_regimes_chart.png/640px-Viscous_regimes_chart.png)

*Figure 2: Viscosity regimes of common fluids.*

---

## 10. References

### Textbooks
1. White, F.M. *Fluid Mechanics*, 8th ed. McGraw-Hill, 2016. — Chapter 1.
2. Halliday, D., Resnick, R., & Krane, K.S. *Physics*, Vol. 1, 5th ed. Wiley, 2002.
3. Serway, R.A. & Jewett, J.W. *Physics for Scientists and Engineers*, 9th ed. Cengage, 2014.
4. Munson, B.R., Young, D.F., & Okiishi, T.H. *Fundamentals of Fluid Mechanics*, 7th ed. Wiley, 2013.

### Online Sources
5. HyperPhysics — Viscosity: <http://hyperphysics.phy-astr.gsu.edu/hbase/fluids/viscosity.html>
6. Engineering Toolbox — Dynamic Viscosity: <https://www.engineeringtoolbox.com/dynamic-viscosity-d_412.html>
7. Khan Academy — Viscosity and Poiseuille Flow: <https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/what-is-viscosity>
8. Britannica — Viscosity: <https://www.britannica.com/science/viscosity>

---

*Next: [Newton's Law of Viscous Flow – Coefficient of Viscosity →](02_newtons_law_coefficient_of_viscosity.md)*
