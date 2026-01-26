# Fluid Mechanics: Overview and Introduction

**Course:** PHY-101 - Physics  
**Topic:** Fluid Mechanics  
**Date:** January 27, 2026  
**Institution:** BUTEX

---

## Table of Contents
1. [Introduction to Fluid Mechanics](#introduction)
2. [What is a Fluid?](#what-is-a-fluid)
3. [Fundamental Concepts](#fundamental-concepts)
4. [Scope of Study](#scope-of-study)
5. [References](#references)

---

## Introduction

Fluid mechanics is the branch of physics that studies the behavior of fluids (liquids, gases, and plasmas) at rest and in motion. It is fundamental to understanding various natural phenomena and engineering applications, from blood flow in arteries to the design of aircraft and hydraulic systems.

### Historical Context

- **Archimedes (287-212 BC)**: Discovered the principle of buoyancy
- **Blaise Pascal (1623-1662)**: Developed Pascal's law of pressure transmission
- **Daniel Bernoulli (1700-1782)**: Formulated Bernoulli's equation
- **Claude-Louis Navier (1785-1836)** and **George Stokes (1819-1903)**: Developed Navier-Stokes equations

---

## What is a Fluid?

### Definition

**Fluid**: A substance that deforms continuously under the application of shear stress, no matter how small the stress may be.

### Key Characteristics

1. **No fixed shape**: Fluids take the shape of their container
2. **Continuous deformation**: Under shear stress, fluids flow
3. **Molecular mobility**: Molecules can move relatively freely
4. **Compressibility**: 
   - Liquids: Nearly incompressible
   - Gases: Highly compressible

### Mathematical Description

A fluid element subjected to shear stress τ experiences a deformation rate:

$$\frac{du}{dy} = \frac{\tau}{\mu}$$

where:
- $du/dy$ = velocity gradient (strain rate)
- $\tau$ = shear stress
- $\mu$ = dynamic viscosity

---

## Fundamental Concepts

### 1. **Fluid as a Continuum**

Despite being composed of discrete molecules, fluids are treated as continuous media when:

$$\lambda \ll L$$

where:
- $\lambda$ = mean free path of molecules
- $L$ = characteristic length scale of the problem

**Knudsen Number**: $Kn = \frac{\lambda}{L}$

- $Kn < 0.01$: Continuum assumption valid
- $Kn > 10$: Molecular dynamics required

### 2. **Fluid Properties**

Key properties that characterize fluids:

| Property | Symbol | SI Unit | Description |
|----------|--------|---------|-------------|
| Density | ρ | kg/m³ | Mass per unit volume |
| Pressure | P | Pa (N/m²) | Normal force per unit area |
| Viscosity | μ, ν | Pa·s, m²/s | Resistance to flow |
| Surface Tension | σ | N/m | Energy per unit area at interface |
| Bulk Modulus | K | Pa | Resistance to compression |

### 3. **Types of Flow Analysis**

Fluid mechanics problems can be analyzed from two perspectives:

#### **Lagrangian Approach**
- Follows individual fluid particles
- Tracks position as function of time: $\vec{r}(t)$
- Velocity: $\vec{v}(t) = \frac{d\vec{r}}{dt}$

#### **Eulerian Approach**
- Examines fixed points in space
- Velocity field: $\vec{v}(\vec{r}, t)$
- More common in fluid mechanics

---

## Scope of Study

### Topics Covered in This Course

1. **Fluid Statics**
   - Pressure distribution
   - Hydrostatic forces
   - Buoyancy (Archimedes' principle)

2. **Fluid Kinematics**
   - Flow visualization
   - Types of motion (uniform, non-uniform)
   - Streamlines and flow patterns
   - Rate of flow

3. **Fluid Dynamics**
   - Equation of continuity
   - Bernoulli's equation
   - Applications (Venturimeter, Torricelli's theorem)

4. **Real Fluid Effects**
   - Viscosity
   - Reynolds number
   - Laminar vs. turbulent flow
   - Stokes' law

### Applications in Textile Engineering

1. **Dyeing processes**: Understanding fluid flow through textile materials
2. **Washing and rinsing**: Fluid dynamics in textile processing
3. **Coating applications**: Viscosity and flow behavior
4. **Ventilation systems**: Airflow in textile factories
5. **Hydraulic systems**: Pressure-based machinery

---

## Fundamental Equations Preview

### 1. Continuity Equation (Conservation of Mass)

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$$

For incompressible flow:
$$\nabla \cdot \vec{v} = 0$$

### 2. Bernoulli's Equation (Energy Conservation)

$$P + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}$$

### 3. Navier-Stokes Equation (Momentum Conservation)

$$\rho\left(\frac{\partial \vec{v}}{\partial t} + \vec{v} \cdot \nabla \vec{v}\right) = -\nabla P + \mu \nabla^2 \vec{v} + \rho \vec{g}$$

---

## Key Dimensionless Numbers

### Reynolds Number
$$Re = \frac{\rho v L}{\mu} = \frac{\text{inertial forces}}{\text{viscous forces}}$$

### Froude Number
$$Fr = \frac{v}{\sqrt{gL}} = \frac{\text{inertial forces}}{\text{gravitational forces}}$$

### Mach Number
$$Ma = \frac{v}{c} = \frac{\text{flow velocity}}{\text{speed of sound}}$$

---

## Problem-Solving Strategy

1. **Identify the system**: Define control volume or particle to analyze
2. **List assumptions**: Steady/unsteady, compressible/incompressible, viscous/inviscid
3. **Apply conservation laws**: Mass, momentum, energy
4. **Use appropriate equations**: Continuity, Bernoulli, etc.
5. **Solve mathematically**: Algebraic or differential equations
6. **Check physical reasonableness**: Verify units and magnitude

---

## Example Problem

**Problem**: Water flows through a pipe with circular cross-section. At point A, the diameter is 10 cm and velocity is 2 m/s. At point B, the diameter is 5 cm. Find the velocity at point B.

**Solution**:

Using continuity equation for incompressible flow:
$$A_1v_1 = A_2v_2$$

$$\frac{\pi d_1^2}{4} \cdot v_1 = \frac{\pi d_2^2}{4} \cdot v_2$$

$$d_1^2 v_1 = d_2^2 v_2$$

$$v_2 = v_1 \frac{d_1^2}{d_2^2} = 2 \times \frac{(0.10)^2}{(0.05)^2} = 2 \times 4 = 8 \text{ m/s}$$

**Answer**: The velocity at point B is 8 m/s.

---

## References

### Textbooks
1. **Fluid Mechanics** by Frank M. White (McGraw-Hill, 9th Edition, 2020)
2. **Introduction to Fluid Mechanics** by Fox, McDonald, and Pritchard (Wiley, 9th Edition, 2020)
3. **Fluid Mechanics: Fundamentals and Applications** by Çengel and Cimbala (McGraw-Hill, 4th Edition, 2018)

### Online Resources
1. [MIT OpenCourseWare - Fluid Mechanics](https://ocw.mit.edu/courses/mechanical-engineering/2-25-advanced-fluid-mechanics-fall-2013/)
2. [Khan Academy - Fluids](https://www.khanacademy.org/science/physics/fluids)
3. [Physics Classroom - Fluid Mechanics](https://www.physicsclassroom.com/class/fluids)
4. [HyperPhysics - Fluid Mechanics](http://hyperphysics.phy-astr.gsu.edu/hbase/fluid.html)
5. [NASA - Beginner's Guide to Aerodynamics](https://www.grc.nasa.gov/www/k-12/airplane/bga.html)

### Research Papers
1. Reynolds, O. (1883). "An experimental investigation of the circumstances which determine whether the motion of water shall be direct or sinuous"
2. Bernoulli, D. (1738). "Hydrodynamica"

### Video Lectures
1. [National Programme on Technology Enhanced Learning (NPTEL) - Fluid Mechanics](https://nptel.ac.in/courses/112/105/112105253/)
2. [Yale Courses - Frontiers and Controversies in Astrophysics](https://oyc.yale.edu/astronomy/astr-160)

---

## Next Topics

- [Fluid Properties](02-fluid-properties.md)
- [Rate of Flow](03-rate-of-flow.md)
- [Types of Motion](04-uniform-motion.md)

---

**Last Updated**: January 27, 2026  
**Author**: BUTEX Fabric Department  
**Course Code**: PHY-101
