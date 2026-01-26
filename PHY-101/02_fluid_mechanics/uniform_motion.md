# Uniform Motion in Fluids

**Course:** PHY-101 - Physics  
**Topic:** Uniform Fluid Motion  
**Date:** January 27, 2026  
**Institution:** BUTEX

---

## Table of Contents
1. [Introduction](#introduction)
2. [Definition and Characteristics](#definition-and-characteristics)
3. [Mathematical Description](#mathematical-description)
4. [Conditions for Uniform Flow](#conditions-for-uniform-flow)
5. [Examples in Nature and Engineering](#examples-in-nature-and-engineering)
6. [Analysis Methods](#analysis-methods)
7. [Problems and Solutions](#problems-and-solutions)
8. [References](#references)

---

## Introduction

**Uniform motion** in fluid mechanics refers to fluid flow where the velocity of fluid particles remains constant along streamlines. This is an idealized condition that simplifies analysis and serves as a foundation for understanding more complex flow patterns.

### Importance
- Simplifies mathematical analysis
- Provides baseline for comparison
- Common approximation in engineering applications
- Essential for understanding conservation principles

---

## Definition and Characteristics

### Definition

**Uniform Flow**: A flow in which the velocity at any given instant is the same at all points in the fluid.

Mathematically:
$$\vec{v} = \text{constant throughout the flow field}$$

Or more precisely:
$$\frac{\partial v}{\partial s} = 0$$

where $s$ is distance along any direction in the fluid.

### Characteristics

1. **Constant Velocity**
   - Magnitude: $|\vec{v}| = v = \text{constant}$
   - Direction: $\theta = \text{constant}$

2. **Parallel Streamlines**
   - All streamlines are parallel to each other
   - Uniform spacing between streamlines

3. **Constant Cross-Section**
   - Area $A = \text{constant}$ for pipe flow
   - No area change along flow direction

4. **No Acceleration**
   - Local acceleration: $\frac{\partial \vec{v}}{\partial t} = 0$ (if steady)
   - Convective acceleration: $(\vec{v} \cdot \nabla)\vec{v} = 0$
   - Total acceleration: $\vec{a} = 0$

5. **Constant Flow Rate**
   - $Q = Av = \text{constant}$
   - Same volume passes through any cross-section

### Types of Uniform Flow

#### 1. **Spatially Uniform Flow**
Velocity is the same at all locations at any instant:
$$\vec{v}(\vec{r}, t) = \vec{v}(t)$$

#### 2. **Temporally Uniform Flow (Steady Uniform Flow)**
Velocity at any point doesn't change with time:
$$\vec{v}(\vec{r}, t) = \vec{v}(\vec{r})$$

#### 3. **Completely Uniform Flow**
Velocity constant in both space and time:
$$\vec{v}(\vec{r}, t) = \vec{v}_0 = \text{constant}$$

---

## Mathematical Description

### Velocity Field

For uniform flow in x-direction:
$$\vec{v} = v_0 \hat{i}$$

where:
- $v_0$ = constant velocity magnitude
- $\hat{i}$ = unit vector in x-direction

### Velocity Components

In Cartesian coordinates:
$$v_x = v_0, \quad v_y = 0, \quad v_z = 0$$

### Velocity Gradient

$$\frac{\partial v_x}{\partial x} = 0, \quad \frac{\partial v_x}{\partial y} = 0, \quad \frac{\partial v_x}{\partial z} = 0$$

### Streamline Equation

Since velocity is constant everywhere:
$$\frac{dx}{v_x} = \frac{dy}{v_y} = \frac{dz}{v_z}$$

For flow in x-direction ($v_y = v_z = 0$):
$$y = \text{constant}, \quad z = \text{constant}$$

**Streamlines are straight parallel lines.**

### Pathlines and Streaklines

In uniform steady flow:
- **Pathlines** = **Streamlines** = **Streaklines**

All three are identical straight parallel lines.

---

## Conditions for Uniform Flow

### 1. **Constant Cross-Sectional Area**

For pipe flow:
$$A = \text{constant} \Rightarrow v = \text{constant}$$

From continuity:
$$Q = A_1 v_1 = A_2 v_2$$

If $A_1 = A_2$, then $v_1 = v_2$

### 2. **No External Forces Variation**

Pressure gradient must balance friction:
$$\frac{dP}{dx} = -\tau_w \frac{P}{A}$$

where:
- $P$ = wetted perimeter
- $\tau_w$ = wall shear stress

### 3. **Fully Developed Flow**

- Flow pattern no longer changes along length
- Entrance effects have died out
- Velocity profile established

Entrance length for laminar flow:
$$L_e \approx 0.06 \, Re \, D$$

For turbulent flow:
$$L_e \approx 4.4 \, Re^{1/6} \, D$$

### 4. **Constant Fluid Properties**

- Density $\rho = \text{constant}$
- Viscosity $\mu = \text{constant}$
- No phase change

---

## Examples in Nature and Engineering

### Natural Examples

1. **River Flow in Straight Channel**
   - Deep water, far from banks
   - Constant depth and width
   - Approximately uniform in central region

2. **Atmospheric Wind**
   - Large-scale wind patterns
   - Away from terrain irregularities
   - Over uniform surfaces

3. **Ocean Currents**
   - Deep ocean, far from boundaries
   - Constant density layers
   - Major current streams

### Engineering Applications

1. **Long Straight Pipes**
   - Fully developed flow
   - Constant diameter
   - Away from bends and fittings

2. **Open Channel Flow**
   - Uniform channel geometry
   - Constant slope
   - Normal depth flow

3. **Wind Tunnels**
   - Test section design
   - Uniform velocity profile
   - Controlled conditions

4. **Conveyor Systems**
   - Material transport
   - Constant belt speed
   - Uniform feed rate

---

## Analysis Methods

### Energy Equation for Uniform Flow

For steady uniform flow along a streamline:
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2 + h_L$$

Since $v_1 = v_2$ for uniform flow:
$$P_1 + \rho g z_1 = P_2 + \rho g z_2 + h_L$$

where $h_L$ = head loss due to friction

### Momentum Equation

For uniform flow (no acceleration):
$$\sum F = 0$$

Balance between:
- Pressure forces
- Gravitational forces
- Friction forces

### Example 1: Horizontal Pipe

**Problem**: Water flows uniformly through a horizontal pipe of diameter 10 cm and length 100 m. The pressure drop is 50 kPa. Is the flow uniform? Calculate the wall shear stress.

**Solution**:

For uniform flow in horizontal pipe:
- Velocity constant: $v_1 = v_2$
- Pressure decreases due to friction

Pressure force balance:
$$\Delta P \cdot A = \tau_w \cdot P \cdot L$$

where:
- $A = \pi D^2/4$ = cross-sectional area
- $P = \pi D$ = wetted perimeter
- $L$ = length

$$\tau_w = \frac{\Delta P \cdot A}{P \cdot L} = \frac{\Delta P \cdot D}{4L}$$

$$\tau_w = \frac{50,000 \times 0.10}{4 \times 100} = 12.5 \text{ Pa}$$

**Answer**: Yes, flow can be uniform with constant velocity but decreasing pressure to overcome friction. Wall shear stress = 12.5 Pa.

---

## Problems and Solutions

### Problem 1: Uniform Flow in Pipe

**Problem**: Water flows through a 5 cm diameter pipe at 2 m/s. The pipe maintains constant diameter for 50 m. Calculate:
a) Volume flow rate
b) Time for water particle to travel pipe length
c) Is the flow uniform?

**Solution**:

a) Volume flow rate:
$$A = \frac{\pi (0.05)^2}{4} = 1.963 \times 10^{-3} \text{ m}^2$$
$$Q = A v = 1.963 \times 10^{-3} \times 2 = 3.927 \times 10^{-3} \text{ m}^3/\text{s}$$
$$Q = 3.927 \text{ L/s}$$

b) Travel time:
$$t = \frac{L}{v} = \frac{50}{2} = 25 \text{ s}$$

c) Since diameter is constant and velocity is constant, flow is uniform.

### Problem 2: Non-Uniform to Uniform Transition

**Problem**: A pipe gradually expands from diameter 8 cm to 12 cm over a length of 2 m, then continues at constant 12 cm diameter. Water enters at 3 m/s. At what distance does flow become uniform?

**Solution**:

Velocity after expansion:
$$v_2 = v_1 \frac{d_1^2}{d_2^2} = 3 \times \frac{(8)^2}{(12)^2} = 1.33 \text{ m/s}$$

Flow becomes uniform after:
1. Expansion section (2 m)
2. Entrance length to establish flow

Reynolds number:
$$Re = \frac{\rho v D}{\mu} = \frac{1000 \times 1.33 \times 0.12}{0.001} = 159,600$$

Turbulent flow ($Re > 4000$)

Entrance length:
$$L_e = 4.4 \, Re^{1/6} \, D = 4.4 \times (159,600)^{1/6} \times 0.12$$
$$L_e = 4.4 \times 6.02 \times 0.12 = 3.18 \text{ m}$$

**Total distance** = 2 + 3.18 = 5.18 m from entrance

### Problem 3: Open Channel Uniform Flow

**Problem**: A rectangular channel 2 m wide carries water at uniform depth of 1 m with velocity 0.5 m/s. Calculate:
a) Flow rate
b) Froude number
c) Type of flow

**Solution**:

a) Flow rate:
$$A = \text{width} \times \text{depth} = 2 \times 1 = 2 \text{ m}^2$$
$$Q = A v = 2 \times 0.5 = 1.0 \text{ m}^3/\text{s}$$

b) Froude number:
$$Fr = \frac{v}{\sqrt{g y}} = \frac{0.5}{\sqrt{9.81 \times 1}} = 0.16$$

c) Since $Fr < 1$, flow is **subcritical** (tranquil flow)

### Problem 4: Verification of Uniform Flow

**Problem**: Measurements in a pipe show:
- Point A: v = 2.00 m/s, P = 150 kPa
- Point B (10 m downstream): v = 2.00 m/s, P = 145 kPa
- Pipe horizontal, diameter = 10 cm

Is the flow uniform? Explain the pressure drop.

**Solution**:

Velocity is constant: $v_A = v_B = 2.0$ m/s

**Yes, flow is uniform** (constant velocity)

Pressure drop analysis:
$$\Delta P = P_A - P_B = 150 - 145 = 5 \text{ kPa}$$

This pressure drop is due to friction:
$$h_f = \frac{\Delta P}{\rho g} = \frac{5000}{1000 \times 9.81} = 0.51 \text{ m}$$

Frictional head loss per meter:
$$S_f = \frac{h_f}{L} = \frac{0.51}{10} = 0.051 \text{ m/m} = 5.1\%$$

**Explanation**: In uniform flow, velocity remains constant but pressure decreases to overcome wall friction. Energy is dissipated as heat.

---

## Comparison with Non-Uniform Flow

| Characteristic | Uniform Flow | Non-Uniform Flow |
|---------------|--------------|------------------|
| Velocity | Constant along flow | Changes along flow |
| Streamlines | Parallel | Converging/diverging |
| Acceleration | Zero | Non-zero |
| Cross-section | Constant | Variable |
| Analysis | Simpler | More complex |
| Examples | Long straight pipe | Nozzle, diffuser |

---

## Advanced Concepts

### Uniform Flow with Friction

Darcy-Weisbach equation:
$$h_f = f \frac{L}{D} \frac{v^2}{2g}$$

where:
- $f$ = friction factor
- $L$ = length
- $D$ = diameter
- $v$ = velocity

For uniform flow, this head loss is balanced by pressure gradient.

### Manning's Equation (Open Channels)

For uniform flow in open channels:
$$v = \frac{1}{n} R_h^{2/3} S^{1/2}$$

where:
- $n$ = Manning's roughness coefficient
- $R_h$ = hydraulic radius
- $S$ = channel slope

---

## References

### Textbooks
1. **Fluid Mechanics** by Frank M. White, Chapter 6: Viscous Flow in Ducts
2. **Open Channel Hydraulics** by Ven Te Chow (McGraw-Hill, 1959)
3. **Fluid Mechanics** by Çengel and Cimbala, Chapter 8

### Online Resources
1. [Engineering Toolbox - Uniform Flow](https://www.engineeringtoolbox.com/)
2. [HyperPhysics - Fluid Flow](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html)
3. [Khan Academy - Fluid Dynamics](https://www.khanacademy.org/science/physics/fluids)

### Research Papers
1. Reynolds, O. (1883). "An experimental investigation of the circumstances which determine whether the motion of water shall be direct or sinuous"

---

## Next Topics

- [Non-Uniform Motion](05-non-uniform-motion.md)
- [Steady and Unsteady Motion](06-steady-unsteady-motion.md)
- [Streamline and Turbulent Motion](07-streamline-turbulent.md)

---

**Last Updated**: January 27, 2026  
**Author**: BUTEX Fabric Department  
**Course Code**: PHY-101
