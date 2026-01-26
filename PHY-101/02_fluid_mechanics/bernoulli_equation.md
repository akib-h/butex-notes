# Bernoulli's Equation

**Course:** PHY-101 - Physics  
**Topic:** Bernoulli's Equation - Energy Conservation in Fluids  
**Date:** January 27, 2026  
**Institution:** BUTEX

---

## Table of Contents
1. [Introduction](#introduction)
2. [Physical Principle](#physical-principle)
3. [Derivation](#derivation)
4. [Forms of Bernoulli's Equation](#forms-of-the-equation)
5. [Applications](#applications)
6. [Limitations and Assumptions](#limitations-and-assumptions)
7. [Examples and Problems](#examples-and-problems)
8. [Advanced Topics](#advanced-topics)
9. [References](#references)

---

## Introduction

**Bernoulli's Equation** is one of the most famous and useful equations in fluid mechanics. It relates pressure, velocity, and elevation in a flowing fluid and represents the **conservation of energy** principle for ideal fluid flow.

### Historical Background

- **Daniel Bernoulli** (1700-1782): Swiss mathematician and physicist
- Published in **"Hydrodynamica"** (1738)
- Based on conservation of energy for fluid particles
- Leonhard Euler later provided mathematical formulation (1757)

### Physical Significance

Bernoulli's equation states that for an ideal fluid:
$$\text{Pressure Energy} + \text{Kinetic Energy} + \text{Potential Energy} = \text{Constant}$$

Along a streamline, as velocity increases, pressure decreases (and vice versa).

---

## Physical Principle

### Energy Conservation

For a fluid particle moving along a streamline, the total mechanical energy remains constant (in the absence of friction and other losses).

### Three Forms of Energy

1. **Pressure Energy (Flow Work)**
   - Energy due to fluid pressure
   - $P$ = pressure

2. **Kinetic Energy**
   - Energy due to fluid motion
   - $\frac{1}{2}\rho v^2$

3. **Potential Energy**
   - Energy due to elevation
   - $\rho g z$

### Energy Balance

$$\underbrace{P}_{\text{pressure}} + \underbrace{\frac{1}{2}\rho v^2}_{\text{kinetic}} + \underbrace{\rho g z}_{\text{potential}} = \text{constant along streamline}$$

---

## Derivation

### Method 1: Work-Energy Theorem

Consider a fluid element moving along a streamline from point 1 to point 2.

#### Forces Acting

1. **Pressure forces**: $P_1 A_1$ and $P_2 A_2$
2. **Gravity**: $mg = \rho V g$
3. **Viscous forces**: Neglected (inviscid flow)

#### Work Done

Work by pressure forces:
$$W_P = P_1 A_1 \Delta s_1 - P_2 A_2 \Delta s_2$$

Since $A_1 \Delta s_1 = A_2 \Delta s_2 = \Delta V$ (continuity):
$$W_P = (P_1 - P_2) \Delta V$$

Work by gravity:
$$W_G = -mg(z_2 - z_1) = -\rho \Delta V \, g(z_2 - z_1)$$

#### Energy Change

Change in kinetic energy:
$$\Delta KE = \frac{1}{2}m(v_2^2 - v_1^2) = \frac{1}{2}\rho \Delta V(v_2^2 - v_1^2)$$

#### Work-Energy Theorem

$$W_{\text{total}} = \Delta KE$$

$$(P_1 - P_2)\Delta V - \rho \Delta V \, g(z_2 - z_1) = \frac{1}{2}\rho \Delta V(v_2^2 - v_1^2)$$

Dividing by $\Delta V$:
$$P_1 - P_2 - \rho g(z_2 - z_1) = \frac{1}{2}\rho(v_2^2 - v_1^2)$$

Rearranging:
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2$$

$$\boxed{P + \frac{1}{2}\rho v^2 + \rho g z = \text{constant}}$$

**This is Bernoulli's Equation.**

### Method 2: Euler's Equation of Motion

Starting from Euler's equation along a streamline:
$$\frac{\partial v}{\partial t} + v\frac{\partial v}{\partial s} = -\frac{1}{\rho}\frac{\partial P}{\partial s} - g\frac{\partial z}{\partial s}$$

For steady flow ($\frac{\partial v}{\partial t} = 0$):
$$v\frac{\partial v}{\partial s} = -\frac{1}{\rho}\frac{\partial P}{\partial s} - g\frac{\partial z}{\partial s}$$

Multiply by $ds$ and integrate:
$$\int v \, dv = -\int \frac{1}{\rho}dP - \int g \, dz$$

For incompressible flow ($\rho$ = constant):
$$\frac{v^2}{2} = -\frac{P}{\rho} - gz + C$$

Rearranging:
$$\boxed{P + \frac{1}{2}\rho v^2 + \rho gz = \text{constant}}$$

---

## Forms of the Equation

### 1. Standard Form (Pressure Units)

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2$$

Units: Pa (N/m²)

### 2. Head Form (Length Units)

Divide by $\rho g$:
$$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2$$

$$\boxed{h_p + h_v + z = \text{constant}}$$

where:
- $h_p = \frac{P}{\rho g}$ = pressure head (m)
- $h_v = \frac{v^2}{2g}$ = velocity head (m)
- $z$ = elevation head (m)

Units: meters (m)

**Total Head**: $H = h_p + h_v + z$

### 3. Energy per Unit Mass

Divide by $\rho$:
$$\frac{P_1}{\rho} + \frac{v_1^2}{2} + g z_1 = \frac{P_2}{\rho} + \frac{v_2^2}{2} + g z_2$$

Units: J/kg (m²/s²)

### 4. Energy per Unit Weight

$$\frac{P_1}{\gamma} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\gamma} + \frac{v_2^2}{2g} + z_2$$

where $\gamma = \rho g$ = specific weight

Units: meters (m)

### 5. With Energy Losses

For real fluids:
$$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2 + h_L$$

where $h_L$ = head loss due to friction

### 6. With Pump or Turbine

$$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 + h_P = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2 + h_T + h_L$$

where:
- $h_P$ = head added by pump
- $h_T$ = head extracted by turbine

---

## Applications

### 1. Horizontal Flow (z₁ = z₂)

$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

**Key Insight**: Where velocity increases, pressure decreases.

#### Example: Pipe Constriction

If $v_2 > v_1$, then $P_2 < P_1$

$$P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2)$$

### 2. Static Fluid (v = 0)

$$P_1 + \rho g z_1 = P_2 + \rho g z_2$$

$$P_2 - P_1 = \rho g(z_1 - z_2)$$

This reduces to hydrostatic pressure variation.

### 3. Free Jet (Atmospheric Pressure)

At exit: $P = P_{\text{atm}}$

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_{\text{atm}} + \frac{1}{2}\rho v_2^2 + \rho g z_2$$

### 4. Pitot Tube (Velocity Measurement)

At stagnation point: $v = 0$

$$P_0 = P + \frac{1}{2}\rho v^2$$

$$v = \sqrt{\frac{2(P_0 - P)}{\rho}}$$

where:
- $P_0$ = stagnation pressure
- $P$ = static pressure

---

## Examples and Problems

### Example 1: Horizontal Pipe with Constriction

**Problem**: Water flows through a horizontal pipe. At point A (diameter 10 cm), pressure is 200 kPa and velocity is 2 m/s. At point B (diameter 5 cm), find the pressure.

**Solution**:

From continuity:
$$v_B = v_A \frac{d_A^2}{d_B^2} = 2 \times \frac{(10)^2}{(5)^2} = 8 \text{ m/s}$$

From Bernoulli ($z_A = z_B$):
$$P_A + \frac{1}{2}\rho v_A^2 = P_B + \frac{1}{2}\rho v_B^2$$

$$P_B = P_A + \frac{1}{2}\rho(v_A^2 - v_B^2)$$

$$P_B = 200,000 + \frac{1}{2}(1000)(2^2 - 8^2)$$

$$P_B = 200,000 + 500(4 - 64)$$

$$P_B = 200,000 - 30,000 = 170,000 \text{ Pa} = 170 \text{ kPa}$$

**Answer**: Pressure at B = 170 kPa (pressure decreases by 30 kPa as velocity increases)

### Example 2: Water Tank Discharge

**Problem**: A large tank contains water to height h = 5 m. An orifice at the bottom has area 10 cm². Find:
a) Exit velocity
b) Volume flow rate
c) Time to empty if tank area = 2 m²

**Solution**:

a) **Exit velocity** (Torricelli's theorem):

At surface: $v_1 \approx 0$, $P_1 = P_{\text{atm}}$, $z_1 = h$
At orifice: $v_2 = ?$, $P_2 = P_{\text{atm}}$, $z_2 = 0$

Bernoulli:
$$P_{\text{atm}} + 0 + \rho g h = P_{\text{atm}} + \frac{1}{2}\rho v_2^2 + 0$$

$$v_2 = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 5} = 9.90 \text{ m/s}$$

b) **Volume flow rate**:
$$Q = A_2 v_2 = 0.001 \times 9.90 = 0.0099 \text{ m}^3/\text{s} = 9.9 \text{ L/s}$$

c) **Time to empty**:

Volume of tank: $V = A_{\text{tank}} \times h = 2 \times 5 = 10$ m³

Average velocity (assuming h varies):
$$v_{avg} = \sqrt{2g \cdot h/2} = \sqrt{gh}$$

Average flow rate:
$$Q_{avg} = A_2 \sqrt{gh} = 0.001\sqrt{9.81 \times 5} = 0.007 \text{ m}^3/\text{s}$$

Time:
$$t = \frac{V}{Q_{avg}} = \frac{10}{0.007} = 1,429 \text{ s} \approx 23.8 \text{ minutes}$$

**More accurate**: $t = \frac{2A_{\text{tank}}}{A_2}\sqrt{\frac{2h}{g}} = \frac{2 \times 2}{0.001}\sqrt{\frac{2 \times 5}{9.81}} = 4,041 \text{ s} \approx 67 \text{ minutes}$$

### Example 3: Pitot Tube

**Problem**: An aircraft Pitot tube measures stagnation pressure of 105 kPa while static pressure is 100 kPa. Air density is 1.2 kg/m³. Find airspeed.

**Solution**:

$$P_0 = P + \frac{1}{2}\rho v^2$$

$$v = \sqrt{\frac{2(P_0 - P)}{\rho}}$$

$$v = \sqrt{\frac{2(105,000 - 100,000)}{1.2}}$$

$$v = \sqrt{\frac{10,000}{1.2}} = \sqrt{8,333} = 91.3 \text{ m/s}$$

**Answer**: Airspeed = 91.3 m/s ≈ 329 km/h

### Example 4: Siphon

**Problem**: A siphon has the highest point 2 m above water surface. The outlet is 3 m below the surface. Find:
a) Velocity at outlet
b) Pressure at highest point

**Solution**:

a) **Velocity at outlet**:

Point 1 (surface): $v_1 \approx 0$, $P_1 = P_{\text{atm}}$, $z_1 = 0$
Point 2 (outlet): $v_2 = ?$, $P_2 = P_{\text{atm}}$, $z_2 = -3$ m

$$P_{\text{atm}} + 0 + 0 = P_{\text{atm}} + \frac{1}{2}\rho v_2^2 + \rho g(-3)$$

$$\frac{1}{2}\rho v_2^2 = -\rho g(-3) = 3\rho g$$

$$v_2 = \sqrt{2g \times 3} = \sqrt{2 \times 9.81 \times 3} = 7.67 \text{ m/s}$$

b) **Pressure at highest point** (Point 3):

$z_3 = +2$ m, $v_3 \approx v_2 = 7.67$ m/s (continuity, same diameter)

$$P_{\text{atm}} + 0 + 0 = P_3 + \frac{1}{2}\rho v_3^2 + \rho g(2)$$

$$P_3 = P_{\text{atm}} - \frac{1}{2}\rho v_3^2 - 2\rho g$$

$$P_3 = 101,325 - \frac{1}{2}(1000)(7.67)^2 - 2(1000)(9.81)$$

$$P_3 = 101,325 - 29,426 - 19,620 = 52,279 \text{ Pa} = 52.3 \text{ kPa}$$

**Answer**: Pressure at highest point = 52.3 kPa (below atmospheric, creating partial vacuum)

### Example 5: Pump Power

**Problem**: A pump lifts water from a well 10 m deep at 50 L/s through a pipe of diameter 10 cm. Find:
a) Exit velocity
b) Minimum pump power required (ideal)
c) Actual power if efficiency is 70%

**Solution**:

a) **Exit velocity**:
$$v = \frac{Q}{A} = \frac{0.05}{\pi (0.10)^2/4} = 6.37 \text{ m/s}$$

b) **Minimum pump power**:

Energy equation:
$$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 + h_P = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2$$

At well bottom: $P_1 = P_{\text{atm}}$, $v_1 \approx 0$, $z_1 = 0$
At exit: $P_2 = P_{\text{atm}}$, $v_2 = 6.37$ m/s, $z_2 = 10$ m

$$h_P = z_2 - z_1 + \frac{v_2^2}{2g} = 10 + \frac{(6.37)^2}{2 \times 9.81} = 10 + 2.07 = 12.07 \text{ m}$$

Power:
$$\dot{W}_P = \rho g Q h_P = 1000 \times 9.81 \times 0.05 \times 12.07$$

$$\dot{W}_P = 5,920 \text{ W} = 5.92 \text{ kW}$$

c) **Actual power**:
$$\dot{W}_{\text{actual}} = \frac{\dot{W}_P}{\eta} = \frac{5.92}{0.70} = 8.46 \text{ kW}$$

**Answer**: Minimum power = 5.92 kW, Actual power = 8.46 kW

---

## Limitations and Assumptions

### Assumptions for Bernoulli's Equation

1. **Inviscid flow**: No viscosity (μ = 0)
   - No energy loss due to friction
   - Valid for high Reynolds number flow away from boundaries

2. **Incompressible flow**: ρ = constant
   - Valid for liquids
   - Valid for gases when Ma < 0.3

3. **Steady flow**: ∂/∂t = 0
   - Flow properties don't change with time
   - Not valid for pulsating or accelerating flows

4. **Along a streamline**: Equation applies along a single streamline
   - Can't use between different streamlines in rotational flow
   - For irrotational flow, can use between any two points

5. **No shaft work**: No pumps or turbines between points
   - Must modify equation if energy added/removed

6. **No heat transfer**: Adiabatic process
   - Temperature changes only due to pressure/velocity changes

### When Bernoulli's Equation Fails

1. **High viscosity fluids** (oil, honey)
2. **Very low Reynolds number** (Re < 100)
3. **Boundary layers and wakes**
4. **Separated flows**
5. **Compressible high-speed flows** (Ma > 0.3)
6. **Unsteady flows** (pressure surges)
7. **Flows with energy addition/removal**

---

## Advanced Topics

### Modified Bernoulli Equation for Real Fluids

Including all losses and energy transfers:
$$\frac{P_1}{\gamma} + \frac{v_1^2}{2g} + z_1 + h_P - h_T - h_L = \frac{P_2}{\gamma} + \frac{v_2^2}{2g} + z_2$$

where:
- $h_P$ = pump head
- $h_T$ = turbine head
- $h_L$ = total head loss (friction + minor losses)

### Compressible Form

For gases with significant density changes:
$$\int \frac{dP}{\rho} + \frac{v^2}{2} + gz = \text{constant}$$

For ideal gas with isentropic flow:
$$\frac{\gamma}{\gamma - 1}\frac{P}{\rho} + \frac{v^2}{2} + gz = \text{constant}$$

### Unsteady Bernoulli Equation

$$\int_1^2 \frac{\partial v}{\partial t}ds + \frac{P}{\rho} + \frac{v^2}{2} + gz = \text{constant}$$

### Rotational Flow Correction

For irrotational flow (∇ × **v** = 0):
Bernoulli constant is same throughout flow field.

For rotational flow:
Bernoulli constant different for each streamline.

---

## Practical Applications in Fluid Systems

### 1. Venturimeter (Flow Measurement)

$$Q = \frac{C_d A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2(P_1 - P_2)}{\rho}}$$

### 2. Carburetors

- High velocity creates low pressure
- Fuel drawn into airstream
- Atomization for combustion

### 3. Airplane Wings

- Faster flow over top surface
- Lower pressure above wing
- Lift force generated

### 4. Spray Bottles

- Squeeze creates high velocity
- Low pressure draws liquid up
- Atomization at exit

### 5. Hydroelectric Power

$$P = \eta \rho g Q h$$

where h = head available

---

## Summary Table

| Term | Symbol | Formula | Units | Physical Meaning |
|------|--------|---------|-------|-----------------|
| Pressure Head | $h_p$ | $P/(\rho g)$ | m | Height of fluid column |
| Velocity Head | $h_v$ | $v^2/(2g)$ | m | Kinetic energy per weight |
| Elevation Head | $z$ | $z$ | m | Potential energy per weight |
| Total Head | $H$ | $h_p + h_v + z$ | m | Total energy per weight |
| Stagnation Pressure | $P_0$ | $P + \frac{1}{2}\rho v^2$ | Pa | Pressure when flow stopped |
| Dynamic Pressure | $q$ | $\frac{1}{2}\rho v^2$ | Pa | Kinetic energy per volume |

---

## References

### Textbooks
1. **Fluid Mechanics** by Frank M. White, Chapter 3: Integral Relations
2. **Introduction to Fluid Mechanics** by Fox, McDonald, and Pritchard, Chapter 6
3. **Fluid Mechanics** by Çengel and Cimbala, Chapter 5: Bernoulli and Energy Equations
4. **Munson, Young, and Okiishi's Fundamentals of Fluid Mechanics** (Wiley)

### Online Resources
1. [MIT OpenCourseWare - Bernoulli's Equation](https://ocw.mit.edu/courses/mechanical-engineering/)
2. [Khan Academy - Bernoulli's Principle](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/v/bernoullis-equation-part-1)
3. [HyperPhysics - Bernoulli Equation](http://hyperphysics.phy-astr.gsu.edu/hbase/pber.html)
4. [NASA - Bernoulli's Equation](https://www.grc.nasa.gov/www/k-12/airplane/bern.html)
5. [Engineering Toolbox - Bernoulli Equation](https://www.engineeringtoolbox.com/bernouilli-equation-d_183.html)

### Video Lectures
1. [NPTEL - Fluid Mechanics](https://nptel.ac.in/courses/112/105/112105253/)
2. [Coursera - Fluid Mechanics](https://www.coursera.org/)

### Historical Papers
1. Bernoulli, D. (1738). "Hydrodynamica"
2. Euler, L. (1757). "Principes généraux du mouvement des fluides"

---

## Next Topics

- [Torricelli's Theorem](10-speed-of-efflux.md)
- [Venturimeter](11-venturimeter.md)
- [Applications of Bernoulli's Equation](applications.md)

---

**Last Updated**: January 27, 2026  
**Author**: BUTEX Fabric Department  
**Course Code**: PHY-101
