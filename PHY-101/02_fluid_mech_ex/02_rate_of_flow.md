# 02. Rate of Flow (Discharge)

> **Date:** April 10, 2026 | **Topic:** 2 of 12 | [← Fluid](./01_fluid.md) | [Next: Uniform Motion →](./03_uniform_motion.md)

---

## 📋 Table of Contents

1. [Definition](#1-definition)
2. [Volume Flow Rate](#2-volume-flow-rate)
3. [Mass Flow Rate](#3-mass-flow-rate)
4. [Weight Flow Rate](#4-weight-flow-rate)
5. [Velocity Profile in a Pipe](#5-velocity-profile-in-a-pipe)
6. [Average Velocity](#6-average-velocity)
7. [Worked Examples](#7-worked-examples)
8. [References](#8-references)

---

## 1. Definition

> **Rate of Flow (Discharge, Q):** The **volume of fluid** that passes through a given cross-section per unit time.

It is also called **volumetric flow rate** or simply **discharge**.

$$\boxed{Q = \frac{V}{t}}$$

Where:
- $Q$ = volumetric flow rate (m³/s)
- $V$ = volume of fluid (m³)
- $t$ = time (s)

**SI Unit:** m³/s  
**Other Units:** L/s, L/min, m³/h, ft³/s (cusecs), gallons/min (GPM)

---

## 2. Volume Flow Rate

For a pipe/channel with cross-sectional area $A$ and mean flow velocity $v$:

$$\boxed{Q = A \cdot v}$$

```
        v →→→→→→→→→
   ╔═══════════════════════════╗
   ║   →→→→→→→→→→→→→→→→→     ║
   ║  →→→→→→→→→→→→→→→→→→→   ║  Area A
   ║   →→→→→→→→→→→→→→→→→     ║
   ╚═══════════════════════════╝
   
   Q = A × v
   (volume per second crossing this cross-section)
```

### Derivation

Consider a cylinder of fluid of cross-section $A$ and length $\Delta L = v \cdot \Delta t$:

$$\Delta V = A \cdot \Delta L = A \cdot v \cdot \Delta t$$

$$Q = \frac{\Delta V}{\Delta t} = A \cdot v$$

---

## 3. Mass Flow Rate

$$\boxed{\dot{m} = \rho \cdot Q = \rho \cdot A \cdot v}$$

Where:
- $\dot{m}$ = mass flow rate (kg/s)
- $\rho$ = fluid density (kg/m³)

**For incompressible fluid:** $\rho$ = constant

---

## 4. Weight Flow Rate

$$\dot{W} = \gamma \cdot Q = \rho g \cdot A \cdot v \quad [\text{N/s}]$$

Where $\gamma = \rho g$ is the specific weight of fluid.

---

## 5. Velocity Profile in a Pipe

The velocity is NOT uniform across a cross-section in real (viscous) flow:

### Laminar Flow (Parabolic Profile)

$$u(r) = u_{max}\left(1 - \frac{r^2}{R^2}\right)$$

```
    Pipe Wall
    ─────────────────────────────
       →                         
      →→→                        
     →→→→→                       
    →→→→→→→    u_max (at centre)
     →→→→→                       
      →→→                        
       →                         
    ─────────────────────────────
    Pipe Wall
    
    Parabolic velocity profile (Hagen-Poiseuille)
```

**Average velocity for laminar flow:**
$$\bar{v} = \frac{u_{max}}{2}$$

Therefore:
$$Q = A \cdot \bar{v} = \pi R^2 \cdot \frac{u_{max}}{2}$$

### Turbulent Flow (Flatter Profile)

The turbulent profile follows approximately the power law:
$$u(r) = u_{max} \left(1 - \frac{r}{R}\right)^{1/n}, \quad n \approx 7$$

---

## 6. Average Velocity

For any velocity profile $u(r)$ in a circular pipe:

$$\bar{v} = \frac{Q}{A} = \frac{1}{A}\int\int_A u \, dA$$

For a circular pipe in polar coordinates:

$$Q = \int_0^R u(r) \cdot 2\pi r \, dr$$

---

## 7. Worked Examples

### Example 7.1 — Basic Flow Rate

**Problem:** Water flows through a pipe of diameter 20 cm at a velocity of 3 m/s. Find the discharge.

**Solution:**

$$A = \frac{\pi d^2}{4} = \frac{\pi (0.20)^2}{4} = 0.03142 \text{ m}^2$$

$$Q = A \cdot v = 0.03142 \times 3 = \boxed{0.0942 \text{ m}^3/\text{s}}$$

Converting: $Q = 94.2 \text{ L/s}$

---

### Example 7.2 — Mass Flow Rate

**Problem:** Oil (density = 850 kg/m³) flows in a pipe of 10 cm diameter at 2 m/s. Find the mass flow rate.

**Solution:**

$$A = \frac{\pi (0.10)^2}{4} = 7.854 \times 10^{-3} \text{ m}^2$$

$$Q = A \cdot v = 7.854 \times 10^{-3} \times 2 = 1.571 \times 10^{-2} \text{ m}^3/\text{s}$$

$$\dot{m} = \rho Q = 850 \times 1.571 \times 10^{-2} = \boxed{13.35 \text{ kg/s}}$$

---

### Example 7.3 — Finding Velocity from Discharge

**Problem:** A flow of 0.05 m³/s passes through a rectangular duct of cross-section 0.25 m × 0.10 m. Find the average velocity.

**Solution:**

$$A = 0.25 \times 0.10 = 0.025 \text{ m}^2$$

$$v = \frac{Q}{A} = \frac{0.05}{0.025} = \boxed{2 \text{ m/s}}$$

---

### Example 7.4 — Laminar Pipe Flow

**Problem:** In laminar flow through a pipe of radius R = 5 cm, the maximum velocity is 0.4 m/s. Find the volumetric flow rate.

**Solution:**

For laminar flow, average velocity:
$$\bar{v} = \frac{u_{max}}{2} = \frac{0.4}{2} = 0.2 \text{ m/s}$$

$$A = \pi R^2 = \pi (0.05)^2 = 7.854 \times 10^{-3} \text{ m}^2$$

$$Q = A \cdot \bar{v} = 7.854 \times 10^{-3} \times 0.2 = \boxed{1.57 \times 10^{-3} \text{ m}^3/\text{s}}$$

$$= 1.57 \text{ L/s}$$

---

### Example 7.5 — Units Conversion

**Problem:** Convert a flow rate of 120 L/min to m³/s.

**Solution:**

$$Q = 120 \frac{\text{L}}{\text{min}} \times \frac{1 \text{ m}^3}{1000 \text{ L}} \times \frac{1 \text{ min}}{60 \text{ s}}$$

$$Q = \frac{120}{1000 \times 60} = \frac{120}{60000} = \boxed{2 \times 10^{-3} \text{ m}^3/\text{s}} = 2 \text{ L/s}$$

---

## Unit Conversion Table

| Unit | Equivalent in m³/s |
|------|---------------------|
| 1 L/s | 10⁻³ m³/s |
| 1 L/min | 1.667 × 10⁻⁵ m³/s |
| 1 m³/h | 2.778 × 10⁻⁴ m³/s |
| 1 ft³/s (cusec) | 0.02832 m³/s |
| 1 US gallon/min (GPM) | 6.309 × 10⁻⁵ m³/s |

---

## 8. References

- 📘 Frank M. White — *Fluid Mechanics*, McGraw-Hill
- 📘 Munson et al. — *Fundamentals of Fluid Mechanics*
- 🌐 [HyperPhysics: Flow Rate](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html)
- 🌐 [Khan Academy: Volume Flow Rate](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/volume-flow-rate-and-equation-of-continuity)
- 🌐 [Physics LibreTexts — Fluid Dynamics](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics/14.06:_Fluid_Dynamics)

---

[← Fluid](./01_fluid.md) | [← Back to Index](./README.md) | [Next: Uniform Motion →](./03_uniform_motion.md)
