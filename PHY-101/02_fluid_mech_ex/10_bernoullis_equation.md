# 10. Bernoulli's Equation

> **Date:** April 10, 2026 | **Topic:** 10 of 12 | [← Continuity Equation](./09_equation_of_continuity.md) | [Next: Torricelli's Theorem →](./11_torricellis_theorem.md)

---

## 📋 Table of Contents

1. [Introduction & History](#1-introduction--history)
2. [Statement of Bernoulli's Equation](#2-statement-of-bernoullis-equation)
3. [Full Derivation (Energy Method)](#3-full-derivation-energy-method)
4. [Alternative Derivation (Newton's 2nd Law)](#4-alternative-derivation-newtons-2nd-law)
5. [Physical Interpretation — Energy Per Unit Volume](#5-physical-interpretation--energy-per-unit-volume)
6. [Assumptions and Limitations](#6-assumptions-and-limitations)
7. [Bernoulli's Principle (Horizontal Flow)](#7-bernoullis-principle-horizontal-flow)
8. [Applications of Bernoulli's Equation](#8-applications-of-bernoullis-equation)
9. [Pressure Head, Velocity Head, Elevation Head](#9-pressure-head-velocity-head-elevation-head)
10. [Modified Bernoulli (with head loss)](#10-modified-bernoulli-with-head-loss)
11. [Worked Examples](#11-worked-examples)
12. [References](#12-references)

---

## 1. Introduction & History

**Daniel Bernoulli** (1700–1782), Swiss physicist, published *Hydrodynamica* in 1738, where he stated that as the speed of a moving fluid increases, the pressure within the fluid decreases.

This principle — now called **Bernoulli's Equation** — is one of the most important and widely applied equations in all of physics and engineering.

```
              DANIEL BERNOULLI (1700-1782)
              ─────────────────────────────
              "The pressure of a fluid 
               decreases as its velocity 
               increases"
               
              Published: Hydrodynamica, 1738
```

---

## 2. Statement of Bernoulli's Equation

> For a **steady, incompressible, inviscid (frictionless) flow** along a streamline:

$$\boxed{P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}}$$

Or between any two points (1 and 2) along the same streamline:

$$\boxed{P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2}$$

Where:
| Symbol | Quantity | Unit |
|--------|----------|------|
| $P$ | Static pressure | Pa (N/m²) |
| $\frac{1}{2}\rho v^2$ | Dynamic pressure (kinetic energy per volume) | Pa |
| $\rho g h$ | Hydrostatic pressure (potential energy per volume) | Pa |
| $\rho$ | Fluid density | kg/m³ |
| $v$ | Flow velocity | m/s |
| $h$ | Height above datum | m |
| $g$ | Gravitational acceleration | m/s² |

---

## 3. Full Derivation (Energy Method)

### Setup

Consider a fluid element flowing through a pipe between sections 1 and 2:

```
   h₁ ↑        Section 1            Section 2         h₂ ↑
       │   ──── A₁, v₁, P₁ ──────── A₂, v₂, P₂ ────
       │
  Datum ─────────────────────────────────────────────
```

### Work-Energy Theorem

Apply the **work-energy theorem** to a small fluid element of mass $dm$ moving from section 1 to section 2:

**Work done by pressure forces:**

At section 1 (positive work, pushing fluid in):
$$dW_{P_1} = P_1 A_1 dx_1 = P_1 \frac{dm}{\rho}$$

At section 2 (negative work, opposing fluid out):
$$dW_{P_2} = -P_2 A_2 dx_2 = -P_2 \frac{dm}{\rho}$$

Total pressure work:
$$dW_P = (P_1 - P_2)\frac{dm}{\rho}$$

**Work done by gravity:**

$$dW_g = -dm \cdot g(h_2 - h_1) = dm \cdot g(h_1 - h_2)$$

**Change in kinetic energy:**

$$d(KE) = \frac{1}{2}dm(v_2^2 - v_1^2)$$

### Applying Work-Energy Theorem: $dW_{total} = d(KE)$

$$(P_1 - P_2)\frac{dm}{\rho} + dm \cdot g(h_1 - h_2) = \frac{1}{2}dm(v_2^2 - v_1^2)$$

Dividing through by $dm$:

$$(P_1 - P_2)/\rho + g(h_1 - h_2) = \frac{1}{2}(v_2^2 - v_1^2)$$

Rearranging:

$$P_1/\rho + \frac{1}{2}v_1^2 + gh_1 = P_2/\rho + \frac{1}{2}v_2^2 + gh_2$$

Multiplying by $\rho$:

$$\boxed{P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2}$$

**Bernoulli's Equation is proved.** ✓

---

## 4. Alternative Derivation (Newton's 2nd Law)

Consider a fluid element of cross-section $A$, length $ds$ along a streamline.

Forces acting along the streamline $s$:

1. Net pressure force: $-A\frac{\partial P}{\partial s}ds$
2. Gravity component: $-\rho A ds \cdot g \frac{\partial h}{\partial s}$

Newton's 2nd law:
$$\rho A ds \cdot \frac{dv}{dt} = -A\frac{\partial P}{\partial s}ds - \rho A ds \cdot g \frac{\partial h}{\partial s}$$

For steady flow, $\frac{dv}{dt} = v\frac{\partial v}{\partial s}$ (convective acceleration):

$$\rho v\frac{\partial v}{\partial s} = -\frac{\partial P}{\partial s} - \rho g \frac{\partial h}{\partial s}$$

Note: $v\frac{\partial v}{\partial s} = \frac{\partial}{\partial s}\left(\frac{v^2}{2}\right)$

$$\frac{\partial}{\partial s}\left(\frac{1}{2}\rho v^2\right) = -\frac{\partial P}{\partial s} - \rho g \frac{\partial h}{\partial s}$$

$$\frac{\partial}{\partial s}\left(P + \frac{1}{2}\rho v^2 + \rho g h\right) = 0$$

Therefore:
$$P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant along streamline}$$

This is **Euler's equation integrated along a streamline** — also known as Bernoulli's equation. ✓

---

## 5. Physical Interpretation — Energy Per Unit Volume

Each term in Bernoulli's equation represents **energy per unit volume** (J/m³ = Pa):

| Term | Name | Energy Form |
|------|------|-------------|
| $P$ | Static pressure | Pressure (flow work) energy |
| $\frac{1}{2}\rho v^2$ | Dynamic pressure | Kinetic energy per unit volume |
| $\rho g h$ | Hydrostatic pressure | Potential energy per unit volume |
| $P + \frac{1}{2}\rho v^2 + \rho g h$ | Total pressure | Total mechanical energy per unit volume |

**Bernoulli's equation = Conservation of mechanical energy per unit volume.**

### Energy Conversion

```
PRESSURE ENERGY  ←→  KINETIC ENERGY  ←→  POTENTIAL ENERGY

When v increases → P decreases  (kinetic ↑, pressure ↓)
When h increases → P decreases  (potential ↑, pressure ↓)
```

---

## 6. Assumptions and Limitations

Bernoulli's equation is valid **only when**:

| Assumption | Explanation |
|-----------|-------------|
| ✅ Steady flow | $\partial v/\partial t = 0$ |
| ✅ Incompressible | $\rho$ = constant |
| ✅ Inviscid (frictionless) | No viscosity |
| ✅ Along same streamline | Can't compare different streamlines (unless irrotational) |
| ✅ No energy added/removed | No pumps, turbines, heat exchange |

### When NOT to use Bernoulli's:

- High-viscosity fluids (significant friction losses)
- Compressible flow (gases at high speed)
- Turbulent flow with high energy loss
- Flow with pumps or turbines (use modified Bernoulli)
- Non-steady flow

---

## 7. Bernoulli's Principle (Horizontal Flow)

For horizontal flow ($h_1 = h_2$), Bernoulli's equation simplifies to:

$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

$$\boxed{P + \frac{1}{2}\rho v^2 = \text{const}}$$

**Bernoulli's Principle:** *In horizontal flow, where velocity is high, pressure is low — and vice versa.*

```
BERNOULLI'S PRINCIPLE — HORIZONTAL PIPE:

  Wide (slow)      Narrow (fast)      Wide (slow)
  High pressure    Low pressure       High pressure
  
  ╔═══════════╗  ╔═══╗  ╔═══════════╗
  ║ P₁ high   ╚══╝   ╚══╝  P₃ high  ║
  ║ v₁ slow  →→→→→→→→→→→→→  v₃ slow ║
  ╚══════════╗  ╔═══╗  ╔══════════╝
             v₂ fast, P₂ low
  
  Manometers would show:
  h₁ high   h₂ low   h₃ high
   ┬         ┬         ┬
   │         │         │
   ▼    ▼    ▼
```

This is the basis of the **venturimeter** (Topic 12).

---

## 8. Applications of Bernoulli's Equation

### 8.1 Airplane Wing (Lift Generation)

```
        ──────────────────── (faster flow on top)
       ╱ curved top surface
      ╱  → → → → → → → (faster → lower P on top)
─────╱──────────────────────
     ╲  flat bottom surface
      ╲ → → → (slower → higher P on bottom)
       ────────────────────── 
       
  LIFT = (P_bottom - P_top) × Wing Area
```

Air moves faster over the curved top → lower pressure → net upward lift force.

### 8.2 Venturimeter (Flow Measurement)

Uses pressure difference between wide and narrow sections to measure flow rate (see Topic 12).

### 8.3 Pitot Tube (Velocity Measurement)

A pitot tube measures velocity by comparing static and stagnation pressures:

```
           Stagnation point
                 ●
  →→→→→→→→→ → ─────── (flow stops here)
  
  P_stagnation = P_static + ½ρv²
  
  v = √(2(P_stag - P_static)/ρ)
```

$$v = \sqrt{\frac{2(P_0 - P_s)}{\rho}}$$

### 8.4 Flow Over a Curved Ball (Magnus Effect)

Explains why spinning balls curve in flight.

### 8.5 Spray Bottle / Atomizer

High-speed air over liquid surface (low pressure) draws liquid upward.

---

## 9. Pressure Head, Velocity Head, Elevation Head

Dividing Bernoulli's equation by $\rho g$:

$$\frac{P}{\rho g} + \frac{v^2}{2g} + h = \text{constant} = H$$

Where:
| Term | Name | Unit |
|------|------|------|
| $\frac{P}{\rho g}$ | Pressure head | metres (m) |
| $\frac{v^2}{2g}$ | Velocity head | metres (m) |
| $h$ | Elevation head | metres (m) |
| $H$ | Total head | metres (m) |

The **total head $H$** is constant along a streamline in ideal flow.

The **hydraulic grade line (HGL)** = $\frac{P}{\rho g} + h$ (pressure head + elevation head)

The **energy grade line (EGL)** = $H = \frac{P}{\rho g} + \frac{v^2}{2g} + h$ (total head)

---

## 10. Modified Bernoulli (with head loss)

For **real (viscous) flows**, Bernoulli's equation is modified to include head loss $h_L$ and shaft work:

$$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + h_1 + h_p = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + h_2 + h_L$$

where:
- $h_p$ = head added by pump
- $h_L$ = head loss (friction + minor losses)

**Power of pump:**
$$P_{pump} = \rho g Q h_p \quad [\text{Watts}]$$

---

## 11. Worked Examples

### Example 11.1 — Basic Application

**Problem:** Water flows through a horizontal pipe that narrows from diameter 20 cm to 10 cm. The velocity at the wide section is 2 m/s, and the pressure there is 150 kPa. Find the pressure at the narrow section. (ρ = 1000 kg/m³)

**Solution:**

By continuity:
$$v_2 = v_1 \left(\frac{d_1}{d_2}\right)^2 = 2 \times \left(\frac{20}{10}\right)^2 = 2 \times 4 = 8 \text{ m/s}$$

Applying Bernoulli's (horizontal, $h_1 = h_2$):
$$P_2 = P_1 + \frac{1}{2}\rho(v_1^2 - v_2^2)$$

$$P_2 = 150{,}000 + \frac{1}{2} \times 1000 \times (2^2 - 8^2)$$

$$P_2 = 150{,}000 + 500 \times (4 - 64)$$

$$P_2 = 150{,}000 + 500 \times (-60)$$

$$P_2 = 150{,}000 - 30{,}000 = \boxed{120{,}000 \text{ Pa} = 120 \text{ kPa}}$$

**Pressure dropped** as velocity increased — consistent with Bernoulli's principle.

---

### Example 11.2 — Pipe at Different Heights

**Problem:** Water flows from a large tank through a pipe. At point A (height 10 m, diameter 8 cm), the velocity is 2 m/s and pressure is 200 kPa. Find the pressure at point B (height 4 m, diameter 6 cm).

**Solution:**

First, find velocity at B using continuity:
$$v_B = v_A \left(\frac{d_A}{d_B}\right)^2 = 2 \times \left(\frac{8}{6}\right)^2 = 2 \times \frac{64}{36} = 3.556 \text{ m/s}$$

Bernoulli's equation (A to B):
$$P_A + \frac{1}{2}\rho v_A^2 + \rho g h_A = P_B + \frac{1}{2}\rho v_B^2 + \rho g h_B$$

$$P_B = P_A + \frac{1}{2}\rho(v_A^2 - v_B^2) + \rho g(h_A - h_B)$$

$$P_B = 200{,}000 + \frac{1}{2}(1000)(2^2 - 3.556^2) + (1000)(9.81)(10 - 4)$$

$$P_B = 200{,}000 + 500(4 - 12.645) + 9810 \times 6$$

$$P_B = 200{,}000 + 500(-8.645) + 58{,}860$$

$$P_B = 200{,}000 - 4{,}323 + 58{,}860$$

$$\boxed{P_B = 254{,}537 \text{ Pa} \approx 254.5 \text{ kPa}}$$

---

### Example 11.3 — Pitot Tube

**Problem:** A pitot tube in a water pipe reads a stagnation pressure of 120 kPa and a static pressure of 100 kPa. Find the flow velocity.

**Solution:**

$$v = \sqrt{\frac{2(P_0 - P_s)}{\rho}} = \sqrt{\frac{2(120{,}000 - 100{,}000)}{1000}}$$

$$v = \sqrt{\frac{40{,}000}{1000}} = \sqrt{40} = \boxed{6.32 \text{ m/s}}$$

---

### Example 11.4 — Water Jet from Tank

**Problem:** A large open tank has water at height H = 5 m above a small orifice. Find the jet velocity from the orifice, assuming atmospheric pressure at both the surface and the orifice.

**Solution:**

Apply Bernoulli's between surface (1) and orifice (2):

- Point 1 (surface): $P_1 = P_{atm}$, $v_1 \approx 0$ (large tank), $h_1 = H = 5$ m
- Point 2 (orifice): $P_2 = P_{atm}$, $v_2 = ?$, $h_2 = 0$ (datum)

$$P_{atm} + 0 + \rho g H = P_{atm} + \frac{1}{2}\rho v_2^2 + 0$$

$$\rho g H = \frac{1}{2}\rho v_2^2$$

$$\boxed{v_2 = \sqrt{2gH} = \sqrt{2 \times 9.81 \times 5} = \sqrt{98.1} = 9.9 \text{ m/s}}$$

This is **Torricelli's Theorem** (see Topic 11)!

---

### Example 11.5 — Airplane Lift

**Problem:** Air (ρ = 1.2 kg/m³) flows over an airplane wing. Upper surface velocity = 60 m/s, lower surface velocity = 40 m/s. If wing area = 20 m², find the lift force.

**Solution:**

Applying Bernoulli's at the same height (horizontal wing assumption):

$$P_{lower} + \frac{1}{2}\rho v_{lower}^2 = P_{upper} + \frac{1}{2}\rho v_{upper}^2$$

$$P_{lower} - P_{upper} = \frac{1}{2}\rho(v_{upper}^2 - v_{lower}^2)$$

$$\Delta P = \frac{1}{2} \times 1.2 \times (60^2 - 40^2) = 0.6 \times (3600 - 1600) = 0.6 \times 2000 = 1200 \text{ Pa}$$

$$\text{Lift} = \Delta P \times A = 1200 \times 20 = \boxed{24{,}000 \text{ N} = 24 \text{ kN}}$$

---

## 12. References

- 📘 Daniel Bernoulli — *Hydrodynamica*, 1738 (original work)
- 📘 Halliday, Resnick & Krane — *Physics*, Fluid Mechanics
- 📘 Frank M. White — *Fluid Mechanics*, Chapter 3
- 📘 Munson, Young & Okiishi — *Fundamentals of Fluid Mechanics*
- 📘 Douglas, Gasiorek & Swaffield — *Fluid Mechanics*
- 🌐 [Khan Academy — Bernoulli's Equation](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/what-is-bernoullis-equation)
- 🌐 [HyperPhysics — Bernoulli's Equation](http://hyperphysics.phy-astr.gsu.edu/hbase/pber.html)
- 🌐 [Physics LibreTexts — Bernoulli's Equation](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics/14.06:_Fluid_Dynamics)
- 🌐 [Bernoulli Equation — Wikipedia](https://en.wikipedia.org/wiki/Bernoulli%27s_principle)
- 🌐 [MIT OCW — Bernoulli's Equation](https://ocw.mit.edu/courses/2-20-marine-hydrodynamics-13-021-spring-2005/)

---

[← Continuity Equation](./09_equation_of_continuity.md) | [← Back to Index](./README.md) | [Next: Torricelli's Theorem →](./11_torricellis_theorem.md)
