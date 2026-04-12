# 09. Equation of Continuity

> **Date:** April 10, 2026 | **Topic:** 9 of 12 | [← Turbulent Motion](./08_turbulent_motion.md) | [Next: Bernoulli's Equation →](./10_bernoullis_equation.md)

---

## 📋 Table of Contents

1. [Introduction](#1-introduction)
2. [Derivation — Control Volume Approach](#2-derivation--control-volume-approach)
3. [Continuity Equation for Incompressible Flow](#3-continuity-equation-for-incompressible-flow)
4. [Differential Form (3D)](#4-differential-form-3d)
5. [Physical Interpretation](#5-physical-interpretation)
6. [Applications](#6-applications)
7. [Continuity for Multiple Branches](#7-continuity-for-multiple-branches)
8. [Worked Examples](#8-worked-examples)
9. [References](#9-references)

---

## 1. Introduction

The **equation of continuity** is a mathematical expression of the **conservation of mass** principle applied to fluid flow.

> **Principle:** Mass can neither be created nor destroyed. The mass entering a control volume per unit time must equal the mass leaving it (for steady flow).

This is one of the most fundamental equations in fluid mechanics, valid for all fluids.

---

## 2. Derivation — Control Volume Approach

### Setup

Consider a **stream tube** (a bundle of streamlines) between two cross-sections:
- Section 1: area $A_1$, velocity $v_1$, density $\rho_1$
- Section 2: area $A_2$, velocity $v_2$, density $\rho_2$

```
           Section 1              Section 2
              ↓                      ↓
        ┌─────┴─────────────────────┴────┐
        │  ρ₁,v₁,A₁                      │  ρ₂,v₂,A₂
        │  →→→→→→                         →→→→→→     │
        └───────────────────────────────────────────┘
        
        (Stream tube — fluid flows between sections 1 and 2)
```

### Mass Flow

**Mass entering at Section 1 in time $\Delta t$:**

$$\Delta m_1 = \rho_1 A_1 v_1 \Delta t$$

**Mass leaving at Section 2 in time $\Delta t$:**

$$\Delta m_2 = \rho_2 A_2 v_2 \Delta t$$

### Applying Conservation of Mass

For **steady flow** (no accumulation inside):

$$\Delta m_1 = \Delta m_2$$

$$\rho_1 A_1 v_1 \Delta t = \rho_2 A_2 v_2 \Delta t$$

$$\boxed{\rho_1 A_1 v_1 = \rho_2 A_2 v_2 = \dot{m} = \text{constant}}$$

This is the **Continuity Equation** for steady flow.

---

## 3. Continuity Equation for Incompressible Flow

For an **incompressible** fluid: $\rho_1 = \rho_2 = \rho = \text{constant}$

Dividing both sides by $\rho$:

$$\boxed{A_1 v_1 = A_2 v_2 = Q = \text{constant}}$$

This means: **the volume flow rate is the same at all cross-sections** of a stream tube.

### Consequence

$$v \propto \frac{1}{A}$$

- Where pipe is **narrow** (small A): velocity is **large**
- Where pipe is **wide** (large A): velocity is **small**

```
CONTINUITY VISUALIZED:
                              
  WIDE SECTION      NARROW SECTION     WIDE SECTION
  ╔═══════════╗    ╔═══╗             ╔═══════════╗
  ║  →→→      ╚════╝   ╚════════════╝  →→→       ║
  ║  →→→              →→→→→→→→→→→       →→→       ║
  ║  →→→      ╔════╗   ╔════════════╗  →→→       ║
  ╚═══════════╝    ╚═══╝             ╚═══════════╝
  
  v₁ (slow)        v₂ (fast)          v₃ (slow)
  A₁ (large)       A₂ (small)         A₃ (large)
  
  A₁v₁ = A₂v₂ = A₃v₃ = Q
```

---

## 4. Differential Form (3D)

For compressible, unsteady flow in 3D (Cartesian coordinates):

$$\frac{\partial \rho}{\partial t} + \frac{\partial(\rho u)}{\partial x} + \frac{\partial(\rho v)}{\partial y} + \frac{\partial(\rho w)}{\partial z} = 0$$

In vector notation:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{V}) = 0$$

### Special Cases

**Steady compressible flow:**
$$\nabla \cdot (\rho \vec{V}) = 0$$

**Incompressible flow (ρ = const):**
$$\nabla \cdot \vec{V} = 0$$

$$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$$

---

## 5. Physical Interpretation

| Term | Meaning |
|------|---------|
| $\rho A v$ | Mass flux (kg/s) |
| $A v = Q$ | Volume flux (m³/s) |
| $A_1 v_1 = A_2 v_2$ | Volume is conserved (incompressible) |
| $\nabla \cdot \vec{V} = 0$ | No local volume sources or sinks |

### Analogy with Electrical Circuit

The continuity equation is analogous to **Kirchhoff's Current Law** in circuits:

$$I_1 = I_2 \quad \Leftrightarrow \quad Q_1 = Q_2$$

"What flows in must flow out."

---

## 6. Applications

1. **Pipe flow**: Finding velocity changes when diameter changes
2. **Nozzles and diffusers**: Design of converging/diverging sections
3. **River hydraulics**: Flood calculations, bridge sizing
4. **Blood flow**: Understanding velocity in arteries vs. capillaries
5. **Aerodynamics**: Flow over wings (in conjunction with Bernoulli)

---

## 7. Continuity for Multiple Branches

For a pipe junction:

```
        Q₁ →  ─────┬────  → Q₂
                   │
                   ↓ Q₃
```

**Conservation at junction:**

$$Q_1 = Q_2 + Q_3$$

$$A_1 v_1 = A_2 v_2 + A_3 v_3$$

**General rule:** Sum of inflows = Sum of outflows

$$\sum Q_{in} = \sum Q_{out}$$

---

## 8. Worked Examples

### Example 8.1 — Basic Continuity

**Problem:** Water flows through a pipe that narrows from a diameter of 20 cm to 10 cm. If the velocity at the wider section is 1.5 m/s, find the velocity at the narrow section.

**Solution:**

$$A_1 = \frac{\pi (0.20)^2}{4} = 3.142 \times 10^{-2} \text{ m}^2$$

$$A_2 = \frac{\pi (0.10)^2}{4} = 7.854 \times 10^{-3} \text{ m}^2$$

By continuity:
$$v_2 = v_1 \frac{A_1}{A_2} = 1.5 \times \frac{3.142 \times 10^{-2}}{7.854 \times 10^{-3}} = 1.5 \times 4 = \boxed{6 \text{ m/s}}$$

**Verify:** $Q = A_1 v_1 = 3.142 \times 10^{-2} \times 1.5 = 4.712 \times 10^{-2}$ m³/s  
$Q = A_2 v_2 = 7.854 \times 10^{-3} \times 6 = 4.712 \times 10^{-2}$ m³/s ✓

**Key insight:** $v_2/v_1 = (d_1/d_2)^2 = (20/10)^2 = 4$ → Velocity quadruples when diameter halves.

---

### Example 8.2 — Using Q = Av to find diameter

**Problem:** A pump delivers 0.2 m³/s. If the pipe velocity should not exceed 3 m/s, find the minimum pipe diameter.

**Solution:**

$$Q = A \cdot v$$

$$A = \frac{Q}{v} = \frac{0.2}{3} = 0.0667 \text{ m}^2$$

$$A = \frac{\pi d^2}{4} \Rightarrow d = \sqrt{\frac{4A}{\pi}} = \sqrt{\frac{4 \times 0.0667}{\pi}} = \sqrt{0.08490} = \boxed{0.292 \text{ m} \approx 29.2 \text{ cm}}$$

---

### Example 8.3 — Junction (Pipe Network)

**Problem:** A pipe of 30 cm diameter splits into two pipes: one of 20 cm and another of 15 cm diameter. The velocity in the 20 cm pipe is 2 m/s. The total flow in the main pipe is 0.12 m³/s. Find:
- (a) velocity in the main pipe
- (b) flow in the 15 cm pipe
- (c) velocity in the 15 cm pipe

**Solution:**

**(a)** $A_{main} = \frac{\pi (0.30)^2}{4} = 7.069 \times 10^{-2}$ m²

$$v_{main} = \frac{Q}{A_{main}} = \frac{0.12}{7.069 \times 10^{-2}} = \boxed{1.698 \text{ m/s}}$$

**(b)** Flow in 20 cm pipe:
$$A_2 = \frac{\pi(0.20)^2}{4} = 3.142 \times 10^{-2} \text{ m}^2$$
$$Q_2 = A_2 \times v_2 = 3.142 \times 10^{-2} \times 2 = 0.0628 \text{ m}^3/\text{s}$$

By continuity:
$$Q_3 = Q_{main} - Q_2 = 0.12 - 0.0628 = \boxed{0.0572 \text{ m}^3/\text{s}}$$

**(c)** $A_3 = \frac{\pi(0.15)^2}{4} = 1.767 \times 10^{-2}$ m²

$$v_3 = \frac{Q_3}{A_3} = \frac{0.0572}{1.767 \times 10^{-2}} = \boxed{3.24 \text{ m/s}}$$

---

### Example 8.4 — Compressible Flow (Continuity)

**Problem:** Air enters a duct at $\rho_1 = 1.2$ kg/m³, $A_1 = 0.05$ m², $v_1 = 50$ m/s. At another section: $\rho_2 = 0.9$ kg/m³, $A_2 = 0.08$ m². Find $v_2$.

**Solution:**

Using the compressible continuity equation:
$$\rho_1 A_1 v_1 = \rho_2 A_2 v_2$$

$$v_2 = \frac{\rho_1 A_1 v_1}{\rho_2 A_2} = \frac{1.2 \times 0.05 \times 50}{0.9 \times 0.08} = \frac{3.0}{0.072} = \boxed{41.7 \text{ m/s}}$$

---

### Example 8.5 — Nozzle Design

**Problem:** A fire hose nozzle has an inlet diameter of 6 cm where water flows at 4 m/s. The nozzle exit diameter must give an exit velocity of 20 m/s. Find the exit diameter.

**Solution:**

$$A_1 v_1 = A_2 v_2$$

$$d_2 = d_1 \sqrt{\frac{v_1}{v_2}} = 0.06 \times \sqrt{\frac{4}{20}} = 0.06 \times \sqrt{0.2} = 0.06 \times 0.4472 = \boxed{0.0268 \text{ m} = 2.68 \text{ cm}}$$

---

## 9. References

- 📘 Halliday, Resnick & Krane — *Physics*, Fluid Mechanics chapter
- 📘 Frank M. White — *Fluid Mechanics*, Chapter 3
- 📘 Munson, Young & Okiishi — *Fundamentals of Fluid Mechanics*
- 🌐 [Khan Academy — Continuity Equation](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/volume-flow-rate-and-equation-of-continuity)
- 🌐 [HyperPhysics — Continuity Equation](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html#flc)
- 🌐 [Physics LibreTexts — Continuity](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics/14.06:_Fluid_Dynamics)
- 🌐 [MIT OCW Fluid Mechanics Notes](https://ocw.mit.edu/courses/2-20-marine-hydrodynamics-13-021-spring-2005/)

---

[← Turbulent Motion](./08_turbulent_motion.md) | [← Back to Index](./README.md) | [Next: Bernoulli's Equation →](./10_bernoullis_equation.md)
