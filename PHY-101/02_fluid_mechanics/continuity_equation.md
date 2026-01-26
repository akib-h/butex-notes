# Equation of Continuity

**Course:** PHY-101 - Physics  
**Topic:** Equation of Continuity - Conservation of Mass  
**Date:** January 27, 2026  
**Institution:** BUTEX

---

## Table of Contents
1. [Introduction](#introduction)
2. [Physical Principle](#physical-principle)
3. [Derivation](#derivation)
4. [Forms of the Equation](#forms-of-the-equation)
5. [Applications](#applications)
6. [Examples and Problems](#examples-and-problems)
7. [Special Cases](#special-cases)
8. [References](#references)

---

## Introduction

The **Equation of Continuity** is a fundamental principle in fluid mechanics that expresses the **conservation of mass** in fluid flow. It states that mass cannot be created or destroyed within a flow system.

### Historical Background

- Based on conservation of mass (Lavoisier, 1789)
- Formulated mathematically by Euler (1757)
- Foundation for all fluid flow analysis

### Physical Significance

The continuity equation ensures that:
- Mass entering a control volume = Mass leaving + Mass accumulated
- For steady flow: Mass in = Mass out
- No mass is lost or gained in the flow

---

## Physical Principle

### Law of Conservation of Mass

**Statement**: The total mass of a closed system remains constant over time.

For fluid flow:
$$\text{Rate of mass inflow} - \text{Rate of mass outflow} = \text{Rate of mass accumulation}$$

Mathematically:
$$\frac{dm_{\text{in}}}{dt} - \frac{dm_{\text{out}}}{dt} = \frac{dm_{\text{system}}}{dt}$$

### For Steady Flow

When conditions don't change with time:
$$\frac{dm_{\text{system}}}{dt} = 0$$

Therefore:
$$\frac{dm_{\text{in}}}{dt} = \frac{dm_{\text{out}}}{dt}$$

**Mass flow rate is constant throughout the system.**

---

## Derivation

### Method 1: Control Volume Approach

Consider a streamtube (bundle of streamlines) with:
- Cross-sectional area $A_1$ at point 1, $A_2$ at point 2
- Velocity $v_1$ at point 1, $v_2$ at point 2
- Density $\rho_1$ at point 1, $\rho_2$ at point 2

#### Step 1: Mass Flow Rate

Mass entering per unit time at section 1:
$$\dot{m}_1 = \rho_1 A_1 v_1$$

Mass leaving per unit time at section 2:
$$\dot{m}_2 = \rho_2 A_2 v_2$$

#### Step 2: Conservation of Mass

For steady flow (no accumulation):
$$\dot{m}_1 = \dot{m}_2$$

$$\boxed{\rho_1 A_1 v_1 = \rho_2 A_2 v_2}$$

**This is the equation of continuity.**

### Method 2: Differential Form Derivation

Consider a small control volume element $dV = dx \, dy \, dz$

#### Mass Conservation Equation

Rate of mass change:
$$\frac{\partial(\rho \, dV)}{\partial t} = \frac{\partial \rho}{\partial t} \, dx \, dy \, dz$$

#### Mass Flux Analysis

Net mass flux in x-direction:
$$\left[\rho u - \left(\rho u + \frac{\partial(\rho u)}{\partial x}dx\right)\right] dy \, dz = -\frac{\partial(\rho u)}{\partial x} dx \, dy \, dz$$

Similarly for y and z directions:
$$-\frac{\partial(\rho v)}{\partial y} dx \, dy \, dz$$
$$-\frac{\partial(\rho w)}{\partial z} dx \, dy \, dz$$

#### Complete Equation

$$\frac{\partial \rho}{\partial t} + \frac{\partial(\rho u)}{\partial x} + \frac{\partial(\rho v)}{\partial y} + \frac{\partial(\rho w)}{\partial z} = 0$$

In vector form:
$$\boxed{\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0}$$

**This is the general continuity equation.**

---

## Forms of the Equation

### 1. General Form (Compressible, Unsteady)

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$$

Expanded:
$$\frac{\partial \rho}{\partial t} + \frac{\partial(\rho u)}{\partial x} + \frac{\partial(\rho v)}{\partial y} + \frac{\partial(\rho w)}{\partial z} = 0$$

### 2. Steady Flow (Compressible)

$$\frac{\partial \rho}{\partial t} = 0$$

$$\nabla \cdot (\rho \vec{v}) = 0$$

For streamtube:
$$\rho_1 A_1 v_1 = \rho_2 A_2 v_2 = \text{constant}$$

### 3. Incompressible Flow ($\rho$ = constant)

$$\nabla \cdot \vec{v} = 0$$

Expanded:
$$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$$

For streamtube:
$$\boxed{A_1 v_1 = A_2 v_2 = Q = \text{constant}}$$

**This is the most common form used in engineering.**

### 4. One-Dimensional Steady Incompressible Flow

$$A_1 v_1 = A_2 v_2$$

or

$$\frac{v_2}{v_1} = \frac{A_1}{A_2}$$

**Velocity is inversely proportional to area.**

### 5. Pipe with Branches

For junction with multiple inlets and outlets:
$$\sum \dot{m}_{\text{in}} = \sum \dot{m}_{\text{out}}$$

For incompressible flow:
$$\sum Q_{\text{in}} = \sum Q_{\text{out}}$$

$$\sum A_i v_i|_{\text{in}} = \sum A_j v_j|_{\text{out}}$$

---

## Applications

### 1. Pipe Flow

#### Converging Pipe

As area decreases, velocity increases:
$$v_2 = v_1 \frac{A_1}{A_2}$$

If $A_2 = \frac{A_1}{2}$, then $v_2 = 2v_1$

#### Diverging Pipe

As area increases, velocity decreases:
$$v_2 = v_1 \frac{A_1}{A_2}$$

If $A_2 = 2A_1$, then $v_2 = \frac{v_1}{2}$$

### 2. Nozzles and Diffusers

**Nozzle**: Converts pressure energy to kinetic energy
- Area decreases
- Velocity increases
- Pressure decreases

**Diffuser**: Converts kinetic energy to pressure energy
- Area increases
- Velocity decreases
- Pressure increases (in ideal case)

### 3. Venturi Meter

Used to measure flow rate:
$$Q = A_1 v_1 = A_2 v_2$$

Combined with Bernoulli equation:
$$Q = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2(P_1 - P_2)}{\rho}}$$

### 4. Flow Through Orifices

$$Q = C_d A \sqrt{2gh}$$

where $C_d$ = discharge coefficient

---

## Examples and Problems

### Example 1: Basic Pipe Flow

**Problem**: Water flows through a pipe that narrows from diameter 20 cm to 10 cm. If the velocity at the wider section is 2 m/s, find the velocity at the narrow section.

**Solution**:

From continuity equation:
$$A_1 v_1 = A_2 v_2$$

$$\frac{\pi d_1^2}{4} \cdot v_1 = \frac{\pi d_2^2}{4} \cdot v_2$$

$$v_2 = v_1 \frac{d_1^2}{d_2^2} = 2 \times \frac{(20)^2}{(10)^2} = 2 \times 4 = 8 \text{ m/s}$$

**Answer**: Velocity increases to 8 m/s.

**Physical Insight**: When area reduces to 1/4, velocity increases by factor of 4.

### Example 2: Pipe Junction

**Problem**: Water flows into a T-junction through a 15 cm diameter pipe at 3 m/s. It exits through two pipes: one 10 cm diameter with velocity 4 m/s, and another 12 cm diameter. Find the velocity in the second outlet pipe.

**Solution**:

Inlet flow rate:
$$Q_{\text{in}} = \frac{\pi (0.15)^2}{4} \times 3 = 0.0530 \text{ m}^3/\text{s}$$

First outlet:
$$Q_1 = \frac{\pi (0.10)^2}{4} \times 4 = 0.0314 \text{ m}^3/\text{s}$$

From continuity:
$$Q_{\text{in}} = Q_1 + Q_2$$

$$Q_2 = Q_{\text{in}} - Q_1 = 0.0530 - 0.0314 = 0.0216 \text{ m}^3/\text{s}$$

Velocity in second outlet:
$$v_2 = \frac{Q_2}{A_2} = \frac{0.0216}{\pi (0.12)^2/4} = \frac{0.0216}{0.0113} = 1.91 \text{ m/s}$$

**Answer**: Velocity in second outlet = 1.91 m/s

### Example 3: Compressible Flow

**Problem**: Air (ideal gas) flows through a duct. At point 1: $\rho_1 = 1.2$ kg/m³, $A_1 = 0.5$ m², $v_1 = 10$ m/s. At point 2: $A_2 = 0.3$ m², $v_2 = 15$ m/s. Find the density at point 2.

**Solution**:

From continuity for compressible flow:
$$\rho_1 A_1 v_1 = \rho_2 A_2 v_2$$

$$\rho_2 = \rho_1 \frac{A_1 v_1}{A_2 v_2} = 1.2 \times \frac{0.5 \times 10}{0.3 \times 15}$$

$$\rho_2 = 1.2 \times \frac{5}{4.5} = 1.33 \text{ kg/m}^3$$

**Answer**: Density increases to 1.33 kg/m³ (compression occurs)

### Example 4: Filling a Tank

**Problem**: A tank with base area 2 m² is filled through a pipe of diameter 5 cm. Water enters at 4 m/s. How fast does the water level rise?

**Solution**:

Volume flow rate into tank:
$$Q = \frac{\pi (0.05)^2}{4} \times 4 = 7.854 \times 10^{-3} \text{ m}^3/\text{s}$$

Rate of level rise:
$$Q = A_{\text{tank}} \times \frac{dh}{dt}$$

$$\frac{dh}{dt} = \frac{Q}{A_{\text{tank}}} = \frac{7.854 \times 10^{-3}}{2} = 3.927 \times 10^{-3} \text{ m/s}$$

$$\frac{dh}{dt} = 3.93 \text{ mm/s} = 0.236 \text{ m/min} = 14.1 \text{ m/h}$$

**Answer**: Water level rises at 3.93 mm/s or 14.1 m/h

### Example 5: Variable Cross-Section

**Problem**: A pipe has a cross-sectional area that varies as $A(x) = A_0(1 + 0.1x)$ where $x$ is distance in meters from entrance. If velocity at entrance ($x = 0$) is 2 m/s, find velocity at $x = 5$ m. Assume incompressible flow.

**Solution**:

At entrance ($x = 0$):
$$A_0 = A_0, \quad v_0 = 2 \text{ m/s}$$

At $x = 5$ m:
$$A(5) = A_0(1 + 0.1 \times 5) = 1.5 A_0$$

From continuity:
$$A_0 v_0 = A(5) v(5)$$

$$v(5) = v_0 \frac{A_0}{A(5)} = 2 \times \frac{A_0}{1.5 A_0} = \frac{2}{1.5} = 1.33 \text{ m/s}$$

**Answer**: Velocity decreases to 1.33 m/s as pipe expands.

---

## Special Cases

### 1. Two-Dimensional Flow

For flow in x-y plane only:
$$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$$

### 2. Axisymmetric Flow

In cylindrical coordinates $(r, \theta, z)$:
$$\frac{1}{r}\frac{\partial(r v_r)}{\partial r} + \frac{1}{r}\frac{\partial v_\theta}{\partial \theta} + \frac{\partial v_z}{\partial z} = 0$$

For axisymmetric flow (no $\theta$ dependence):
$$\frac{1}{r}\frac{\partial(r v_r)}{\partial r} + \frac{\partial v_z}{\partial z} = 0$$

### 3. Radial Flow

For purely radial flow:
$$\frac{1}{r^2}\frac{d(r^2 v_r)}{dr} = 0$$

Integrating:
$$r^2 v_r = \text{constant} = C$$

$$v_r = \frac{C}{r^2}$$

Velocity decreases as $1/r^2$ in radial flow.

### 4. Source and Sink

**Point Source**: Fluid emanates from a point
$$Q = 4\pi r^2 v_r = \text{constant}$$

$$v_r = \frac{Q}{4\pi r^2}$$

**Point Sink**: Fluid flows toward a point (same equations, opposite direction)

---

## Limitations and Assumptions

### Assumptions

1. **Continuum**: Fluid treated as continuous medium
2. **No mass sources/sinks**: No chemical reactions, phase changes
3. **Single-phase flow**: No bubbles, droplets, or particles
4. **Well-defined control volume**: Clear boundaries

### When Continuity May Not Apply

1. **Cavitation**: Vapor bubbles form (phase change)
2. **Chemical reactions**: Mass of species changes
3. **Combustion**: Reactants convert to products
4. **Nuclear reactions**: Mass-energy conversion
5. **Rarefied gases**: Molecular effects dominant

---

## Advanced Topics

### Material Derivative Form

$$\frac{D\rho}{Dt} + \rho(\nabla \cdot \vec{v}) = 0$$

where:
$$\frac{D}{Dt} = \frac{\partial}{\partial t} + \vec{v} \cdot \nabla$$

### Conservation Form

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$$

### Non-Conservation Form

$$\frac{\partial \rho}{\partial t} + \vec{v} \cdot \nabla \rho + \rho(\nabla \cdot \vec{v}) = 0$$

### With Mass Source Term

If there's mass generation rate $\dot{m}'''$ per unit volume:
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = \dot{m}'''$$

---

## Practical Applications in Textile Engineering

1. **Dyeing Processes**
   - Flow through fabric pores
   - Circulation in dye baths
   - Jet dyeing machines

2. **Washing and Rinsing**
   - Water distribution
   - Flow through textile materials
   - Drainage systems

3. **Coating Applications**
   - Coating fluid flow
   - Film thickness control
   - Distribution uniformity

4. **Air Flow Systems**
   - Ventilation design
   - Dust collection
   - Pneumatic transport

---

## Summary

| Aspect | Description |
|--------|-------------|
| **Principle** | Conservation of mass |
| **General Form** | $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$ |
| **Incompressible** | $A_1 v_1 = A_2 v_2$ |
| **Key Insight** | Velocity inversely proportional to area |
| **Applications** | Pipe networks, nozzles, flow measurement |

---

## References

### Textbooks
1. **Fluid Mechanics** by Frank M. White, Chapter 3
2. **Introduction to Fluid Mechanics** by Fox, McDonald, and Pritchard, Chapter 5
3. **Fluid Mechanics** by Çengel and Cimbala, Chapter 5

### Online Resources
1. [MIT OpenCourseWare - Conservation Laws](https://ocw.mit.edu/courses/mechanical-engineering/)
2. [Khan Academy - Continuity Equation](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/v/what-is-the-equation-of-continuity)
3. [HyperPhysics - Continuity](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html#con)
4. [Engineering Toolbox - Continuity Equation](https://www.engineeringtoolbox.com/continuity-equation-d_345.html)

### Video Lectures
1. [NPTEL - Fluid Mechanics](https://nptel.ac.in/courses/112/105/112105253/)
2. [Yale - Conservation Laws](https://oyc.yale.edu/)

---

## Next Topics

- [Bernoulli's Equation](09-bernoulli-equation.md)
- [Momentum Equation](momentum-equation.md)
- [Energy Equation](energy-equation.md)

---

**Last Updated**: January 27, 2026  
**Author**: BUTEX Fabric Department  
**Course Code**: PHY-101
