# 01. Fluid — Definition, Properties & Classification

> **Date:** April 10, 2026 | **Topic:** 1 of 12 | [← Back to Index](./README.md) | [Next: Rate of Flow →](./02_rate_of_flow.md)

---

## 📋 Table of Contents

1. [What is a Fluid?](#1-what-is-a-fluid)
2. [Fluid vs Solid](#2-fluid-vs-solid)
3. [Properties of Fluids](#3-properties-of-fluids)
4. [Types of Fluids](#4-types-of-fluids)
5. [Ideal vs Real Fluid](#5-ideal-vs-real-fluid)
6. [Pascal's Law](#6-pascals-law)
7. [Worked Examples](#7-worked-examples)
8. [References](#8-references)

---

## 1. What is a Fluid?

> **Definition:** A **fluid** is a substance that *continuously deforms* (flows) under an applied shear stress, no matter how small that stress may be.

Both **liquids** and **gases** are classified as fluids. The key characteristic is their inability to resist shear stress in static equilibrium.

```
┌─────────────────────────────────────────────────────────┐
│                    MATTER                               │
│                      │                                  │
│           ┌──────────┴──────────┐                       │
│         SOLID               FLUID                       │
│    (resists shear)      (flows under shear)             │
│                         ┌──────┴──────┐                 │
│                       LIQUID        GAS                 │
│                  (fixed volume) (fills container)       │
└─────────────────────────────────────────────────────────┘
```

### Mathematical Definition

For a solid: applying shear stress $\tau$ produces a definite strain angle $\theta$.

For a fluid: applying shear stress $\tau$ produces a **continuous rate of strain** $\frac{d\theta}{dt}$:

$$\tau = \mu \frac{du}{dy}$$

Where:
- $\tau$ = shear stress (Pa or N/m²)
- $\mu$ = dynamic viscosity (Pa·s)
- $\frac{du}{dy}$ = velocity gradient (rate of shear strain, s⁻¹)

This is **Newton's Law of Viscosity**.

---

## 2. Fluid vs Solid

| Property | Solid | Fluid (Liquid) | Fluid (Gas) |
|----------|-------|----------------|-------------|
| Shape | Fixed | Takes container shape | Takes container shape |
| Volume | Fixed | Fixed | Not fixed |
| Compressibility | Very low | Very low | High |
| Response to shear | Elastic deformation | Continuous flow | Continuous flow |
| Intermolecular spacing | Very small | Small | Large |
| Density | High | Medium | Low |

### Diagram: Shear Stress Response

```
SOLID                          FLUID
                                
   F →                          F →
  ┌────┐                       ╔════╗
  │////│ θ = constant          ║~~~~║ dθ/dt = constant
  │////│                       ║~~~~║
  └────┘                       ╚════╝
  
  Deforms to fixed angle     Continuously deforms (flows)
```

---

## 3. Properties of Fluids

### 3.1 Density (ρ)

$$\rho = \frac{m}{V} \quad \text{[kg/m}^3\text{]}$$

| Fluid | Density (kg/m³) |
|-------|----------------|
| Water (4°C) | 1000 |
| Seawater | 1025 |
| Mercury | 13,600 |
| Air (15°C, 1 atm) | 1.225 |
| Glycerin | 1260 |

### 3.2 Specific Weight (γ)

$$\gamma = \rho \cdot g \quad \text{[N/m}^3\text{]}$$

For water: $\gamma = 1000 \times 9.81 = 9810 \text{ N/m}^3$

### 3.3 Specific Gravity (SG)

$$SG = \frac{\rho_{\text{fluid}}}{\rho_{\text{water}}} = \frac{\rho_{\text{fluid}}}{1000}$$

### 3.4 Pressure (P)

$$P = \frac{F}{A} \quad \text{[Pa = N/m}^2\text{]}$$

**Hydrostatic pressure:**
$$P = P_0 + \rho g h$$

where $h$ is depth below the free surface.

### 3.5 Dynamic Viscosity (μ)

From Newton's Law of Viscosity:

$$\mu = \frac{\tau}{du/dy} \quad \text{[Pa·s or N·s/m}^2\text{]}$$

| Fluid | μ (Pa·s) at 20°C |
|-------|-----------------|
| Water | 1.002 × 10⁻³ |
| Air | 1.81 × 10⁻⁵ |
| Honey | ~2–10 |
| Mercury | 1.55 × 10⁻³ |

### 3.6 Kinematic Viscosity (ν)

$$\nu = \frac{\mu}{\rho} \quad \text{[m}^2\text{/s]}$$

### 3.7 Surface Tension (σ)

Surface tension is the force per unit length along a surface:

$$\sigma = \frac{F}{L} \quad \text{[N/m]}$$

This causes capillary rise:
$$h = \frac{4\sigma \cos\theta}{\rho g d}$$

### 3.8 Bulk Modulus of Elasticity (K)

$$K = -V \frac{dP}{dV} = \rho \frac{dP}{d\rho} \quad \text{[Pa]}$$

For **incompressible** fluids, $K \to \infty$.

---

## 4. Types of Fluids

### 4.1 Based on Viscosity Behaviour

```
Shear Stress (τ)
     │
     │        / Dilatant (shear-thickening)
     │       /  e.g., cornstarch
     │      /
     │     / ← Newtonian (linear)
     │    /   e.g., water, air
     │   /
     │  / ← Pseudo-plastic (shear-thinning)
     │ /   e.g., blood, paint
     │/___________
     0      Rate of Shear (du/dy)
```

| Type | Behaviour | Example |
|------|-----------|---------|
| **Newtonian** | τ ∝ du/dy (linear) | Water, air, most gases |
| **Pseudo-plastic** | Viscosity decreases with shear rate | Blood, paint, polymers |
| **Dilatant** | Viscosity increases with shear rate | Cornstarch + water, quicksand |
| **Bingham Plastic** | Requires minimum τ to flow | Toothpaste, butter, sewage sludge |
| **Thixotropic** | Viscosity decreases over time under constant shear | Gel, ketchup |
| **Rheopectic** | Viscosity increases over time under constant shear | Gypsum paste |

### 4.2 Based on Compressibility

| Type | Description | Example |
|------|-------------|---------|
| **Incompressible** | Density constant (ρ = const) | Liquids at low pressure |
| **Compressible** | Density changes with pressure | Gases, high-speed flows |

---

## 5. Ideal vs Real Fluid

| Feature | Ideal (Perfect) Fluid | Real Fluid |
|---------|----------------------|------------|
| Viscosity | Zero (inviscid) | Non-zero |
| Compressibility | Incompressible | Can be compressible |
| Exists in nature? | No (theoretical) | Yes |
| Flow analysis | Euler's equation | Navier-Stokes equations |
| Energy loss | No | Yes (due to viscosity) |

> **Note:** Ideal fluid is a mathematical abstraction used to simplify analysis. Real fluids always have some viscosity.

---

## 6. Pascal's Law

> **Pascal's Law:** *Pressure applied to a confined fluid is transmitted equally in all directions throughout the fluid.*

$$P_1 = P_2 = P_3 \quad (\text{at the same depth})$$

**Application — Hydraulic Press:**

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

$$F_2 = F_1 \cdot \frac{A_2}{A_1}$$

### Hydraulic Press Diagram

```
     F₁ (small)               F₂ (large)
      ↓                          ↑
   ┌──┴──┐                   ┌───┴───┐
   │     │                   │       │
   │  A₁ │===================│  A₂   │
   │     │     fluid         │       │
   └─────┘                   └───────┘
   
   If A₂ = 10 × A₁, then F₂ = 10 × F₁
```

---

## 7. Worked Examples

### Example 7.1 — Density Calculation

**Problem:** A tank holds 500 L of oil with a mass of 430 kg. Find the density and specific gravity.

**Solution:**

$$V = 500 \text{ L} = 0.5 \text{ m}^3$$

$$\rho = \frac{m}{V} = \frac{430}{0.5} = 860 \text{ kg/m}^3$$

$$SG = \frac{860}{1000} = 0.86$$

---

### Example 7.2 — Viscosity and Shear Stress

**Problem:** Oil fills the gap between two plates (gap = 2 mm). The top plate moves at 0.5 m/s. If μ = 0.3 Pa·s, find the shear stress.

**Solution:**

$$\frac{du}{dy} = \frac{0.5 \text{ m/s}}{0.002 \text{ m}} = 250 \text{ s}^{-1}$$

$$\tau = \mu \frac{du}{dy} = 0.3 \times 250 = 75 \text{ Pa}$$

---

### Example 7.3 — Hydrostatic Pressure

**Problem:** Find the pressure at a depth of 10 m in seawater (ρ = 1025 kg/m³). Atmospheric pressure = 101,325 Pa.

**Solution:**

$$P = P_0 + \rho g h$$

$$P = 101{,}325 + (1025)(9.81)(10)$$

$$P = 101{,}325 + 100{,}552.5$$

$$\boxed{P = 201{,}877.5 \text{ Pa} \approx 2.01 \text{ atm}}$$

---

### Example 7.4 — Pascal's Law (Hydraulic Lift)

**Problem:** A hydraulic lift has pistons of area A₁ = 10 cm² and A₂ = 500 cm². A force of 50 N is applied to the small piston. Find the force on the large piston.

**Solution:**

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

$$F_2 = F_1 \times \frac{A_2}{A_1} = 50 \times \frac{500}{10} = \boxed{2500 \text{ N}}$$

This is the principle behind car jacks and hydraulic brakes!

---

## 8. References

- 📘 Halliday, Resnick & Krane — *Physics*, Chapter on Fluid Mechanics
- 📘 Frank M. White — *Fluid Mechanics*, 8th ed., McGraw-Hill
- 📘 Munson, Young & Okiishi — *Fundamentals of Fluid Mechanics*, Wiley
- 🌐 [HyperPhysics: Fluids](http://hyperphysics.phy-astr.gsu.edu/hbase/fluids.html)
- 🌐 [Physics LibreTexts — Fluid Mechanics](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics)
- 🌐 [Khan Academy — Fluids](https://www.khanacademy.org/science/physics/fluids)
- 🌐 [CIVE 1400 Leeds Lecture Notes](https://www.studocu.com/row/document/federal-university-of-technology-minna/fluid-mechanics/fluid-mechanics-pdf/30829197)

---

[← Back to Index](./README.md) | [Next: Rate of Flow →](./02_rate_of_flow.md)
