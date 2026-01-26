# Steady and Unsteady Motion in Fluid Mechanics

**Date:** January 27, 2026  
**Course:** PHY-101 - Fluid Mechanics  
**Topic:** Steady and Unsteady Motion - Distinctions and Examples

---

## Table of Contents

1. [Introduction and Definitions](#1-introduction-and-definitions)
2. [Steady Flow](#2-steady-flow)
3. [Unsteady Flow](#3-unsteady-flow)
4. [Mathematical Formulation](#4-mathematical-formulation)
5. [Distinctions and Comparison](#5-distinctions-and-comparison)
6. [Classification Matrix](#6-classification-matrix)
7. [Governing Equations](#7-governing-equations)
8. [Local vs Convective Effects](#8-local-vs-convective-effects)
9. [Practical Examples](#9-practical-examples)
10. [Analysis Techniques](#10-analysis-techniques)
11. [Solved Problems](#11-solved-problems)

---

## 1. Introduction and Definitions

### 1.1 Fundamental Concept

The distinction between **steady** and **unsteady** flow is based on whether fluid properties at a fixed point in space change with **time**.

**Key Question:** "Does the flow field at a given location change as time passes?"

### 1.2 Steady Flow Definition

**Steady flow** (or **steady-state flow**) occurs when all fluid properties at any point in the flow field remain **constant with time**.

Mathematically, at any fixed point $(x_0, y_0, z_0)$:

$$\frac{\partial}{\partial t}(\text{any flow property}) = 0$$

**Properties include:**
- Velocity: $\frac{\partial \vec{V}}{\partial t} = 0$
- Pressure: $\frac{\partial p}{\partial t} = 0$
- Density: $\frac{\partial \rho}{\partial t} = 0$
- Temperature: $\frac{\partial T}{\partial t} = 0$

### 1.3 Unsteady Flow Definition

**Unsteady flow** (or **transient flow**) occurs when one or more fluid properties at a point in the flow field **vary with time**.

Mathematically:

$$\frac{\partial}{\partial t}(\text{at least one flow property}) \neq 0$$

### 1.4 Important Distinction

**Critical Note:** Steady/unsteady classification refers to **temporal variation at a fixed point**, NOT to what a fluid particle experiences as it moves.

- A fluid particle can accelerate in steady flow (due to spatial variation)
- A fluid particle can have constant velocity in unsteady flow (special cases)

---

## 2. Steady Flow

### 2.1 Characteristics

1. **Time Independence:**
   $$\frac{\partial \vec{V}}{\partial t} = 0, \quad \frac{\partial p}{\partial t} = 0, \quad \frac{\partial \rho}{\partial t} = 0$$

2. **Streamlines are Fixed:**
   - Streamlines, streaklines, and pathlines coincide
   - Flow pattern does not change with time

3. **Constant Flow Rate:**
   - Mass flow rate through any cross-section is constant
   - Volume flow rate constant (for incompressible flow)

4. **No Local Acceleration:**
   $$\vec{a}_{\text{local}} = \frac{\partial \vec{V}}{\partial t} = 0$$

5. **Simplification in Analysis:**
   - Time derivatives vanish in governing equations
   - Easier to solve mathematically

### 2.2 Types of Steady Flow

#### 2.2.1 Uniform Steady Flow

- Velocity constant in both space and time
- $\vec{V} = \text{constant}$ everywhere
- Example: Ideal flow in a long, straight pipe far from entrance

#### 2.2.2 Non-Uniform Steady Flow

- Velocity varies in space but not in time
- $\vec{V} = \vec{V}(x, y, z)$ but $\frac{\partial \vec{V}}{\partial t} = 0$
- Example: Flow through a nozzle, flow past an obstacle

### 2.3 Mathematical Description

**Velocity Field:**
$$\vec{V}(x, y, z, t) = \vec{V}(x, y, z)$$

Time $t$ does not appear explicitly.

**Total Derivative:**
$$\frac{D\vec{V}}{Dt} = \frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V} = (\vec{V} \cdot \nabla)\vec{V}$$

Only convective terms remain.

### 2.4 Conditions for Steady Flow

For flow to be steady:

1. **Constant boundary conditions**
   - Inlet/outlet velocities constant
   - Pressure boundaries fixed

2. **No time-varying forces**
   - External forces constant
   - No oscillating or impulsive forces

3. **Stable system geometry**
   - No moving boundaries (in fixed reference frame)
   - No valve operations

4. **Equilibrium state reached**
   - Transient effects have died out
   - System has settled to steady state

### 2.5 Examples of Steady Flow

1. **Water flow through fire hose** (constant pumping)
2. **Air flow over a wing** (constant flight speed)
3. **River flow** (away from floods, constant discharge)
4. **Fully developed pipe flow** (constant pressure gradient)
5. **Wind tunnel testing** (constant tunnel speed)
6. **Heat exchanger** (steady operating conditions)
7. **Turbine operation** (steady load and flow rate)
8. **Cooling water circulation** (steady state)

---

## 3. Unsteady Flow

### 3.1 Characteristics

1. **Time Dependence:**
   $$\frac{\partial \vec{V}}{\partial t} \neq 0 \quad \text{or} \quad \frac{\partial p}{\partial t} \neq 0$$

2. **Changing Flow Pattern:**
   - Streamlines shift with time
   - Flow visualization changes continuously

3. **Variable Flow Rate:**
   - Mass/volume flow rate varies with time
   - Accumulation or depletion occurs

4. **Local Acceleration Present:**
   $$\vec{a}_{\text{local}} = \frac{\partial \vec{V}}{\partial t} \neq 0$$

5. **Complex Analysis:**
   - Time derivatives retained in equations
   - Often requires numerical solutions

### 3.2 Types of Unsteady Flow

#### 3.2.1 Periodic Unsteady Flow

Flow properties vary **periodically** with time.

$$\vec{V}(x, y, z, t) = \vec{V}(x, y, z, t + T)$$

where $T$ is the period.

**Examples:**
- Pulsating flow in arteries (heartbeat)
- Reciprocating pump discharge
- Wave motion on water surface
- Oscillating flow in acoustic devices
- Tidal flows

**Mathematical Form:**
$$V(t) = V_0 + A\sin(\omega t)$$

where:
- $V_0$ = mean velocity
- $A$ = amplitude
- $\omega = \frac{2\pi}{T}$ = angular frequency

#### 3.2.2 Non-Periodic Unsteady Flow

Flow properties vary **irregularly** with time (no pattern).

**Examples:**
- Starting flow (transient startup)
- Stopping flow (transient shutdown)
- Gusty wind flow
- Turbulent fluctuations
- Sudden valve closure (water hammer)
- Dam break flow
- Filling/emptying of tanks

#### 3.2.3 Quasi-Steady Flow

Flow that changes slowly enough that it can be approximated as **sequence of steady states**.

**Criterion:**
$$\frac{\tau_{flow}}{\tau_{change}} \ll 1$$

where:
- $\tau_{flow}$ = characteristic flow time
- $\tau_{change}$ = characteristic time of change

**Example:** Slow draining of a large tank

### 3.3 Mathematical Description

**Velocity Field:**
$$\vec{V}(x, y, z, t)$$

Time $t$ appears explicitly.

**Total Derivative:**
$$\frac{D\vec{V}}{Dt} = \frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V}$$

Both local and convective acceleration present.

### 3.4 Causes of Unsteady Flow

1. **Time-varying boundary conditions**
   - Oscillating inlet velocity
   - Changing pressure at boundaries
   - Moving valves or gates

2. **Time-dependent external forces**
   - Pulsating pump
   - Reciprocating machinery
   - Seismic vibrations

3. **Moving boundaries**
   - Piston in cylinder
   - Oscillating walls
   - Expanding/contracting domains

4. **Transient processes**
   - Start-up of machinery
   - Shut-down operations
   - Emergency stops

5. **Natural unsteadiness**
   - Turbulence
   - Vortex shedding
   - Instabilities

### 3.5 Examples of Unsteady Flow

1. **Filling a bathtub** (water level rising)
2. **Starting/stopping a pump** (transient acceleration/deceleration)
3. **Blood flow in arteries** (pulsatile due to heartbeat)
4. **Wave motion** (water surface oscillating)
5. **Gusts of wind** (velocity varying with time)
6. **Tides** (periodic rise and fall)
7. **Draining a tank** (decreasing flow rate)
8. **Water hammer** (pressure wave from valve closure)
9. **Vortex shedding** (Karman vortex street behind cylinder)
10. **Surge in pipelines** (pressure oscillations)

---

## 4. Mathematical Formulation

### 4.1 Eulerian Description

Properties described at **fixed points** in space as functions of time.

**General form:**
$$\phi = \phi(x, y, z, t)$$

where $\phi$ represents any fluid property (velocity, pressure, etc.).

**Steady flow:** $\phi = \phi(x, y, z)$

**Unsteady flow:** Time dependence explicit

### 4.2 Lagrangian Description

Properties described for **individual fluid particles** as they move.

**Particle position:**
$$\vec{r}_p(t) = \vec{r}_p(t_0) + \int_{t_0}^t \vec{V}_p(\tau) \, d\tau$$

### 4.3 Material Derivative

The **total rate of change** following a fluid particle:

$$\frac{D\phi}{Dt} = \frac{\partial \phi}{\partial t} + \vec{V} \cdot \nabla \phi$$

**Components:**

1. **Local rate of change** (Eulerian):
   $$\frac{\partial \phi}{\partial t}$$ 
   Rate at fixed point

2. **Convective rate of change**:
   $$\vec{V} \cdot \nabla \phi$$ 
   Change due to particle motion

### 4.4 Steady vs Unsteady in Material Derivative

**Steady flow:**
$$\frac{D\phi}{Dt} = \vec{V} \cdot \nabla \phi$$
(only convective term)

**Unsteady flow:**
$$\frac{D\phi}{Dt} = \frac{\partial \phi}{\partial t} + \vec{V} \cdot \nabla \phi$$
(both terms present)

### 4.5 Acceleration

**General acceleration:**
$$\vec{a} = \frac{D\vec{V}}{Dt} = \frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V}$$

**Steady flow:**
$$\vec{a} = (\vec{V} \cdot \nabla)\vec{V} \quad \text{(convective only)}$$

**Unsteady flow:**
Both local and convective acceleration present.

---

## 5. Distinctions and Comparison

### 5.1 Fundamental Differences

| Aspect | Steady Flow | Unsteady Flow |
|--------|-------------|---------------|
| **Time dependence** | $\frac{\partial}{\partial t} = 0$ | $\frac{\partial}{\partial t} \neq 0$ |
| **Flow pattern** | Fixed | Changes with time |
| **Streamlines** | Stationary | Move with time |
| **Local acceleration** | Zero | Non-zero |
| **Flow visualization** | Constant pattern | Evolving pattern |
| **Analysis** | Simpler (algebraic) | Complex (differential in time) |
| **Boundary conditions** | Time-independent | Time-dependent |
| **Flow rate** | Constant | Variable |

### 5.2 Velocity Field Comparison

**Steady Flow:**
$$\vec{V} = u(x,y,z)\hat{i} + v(x,y,z)\hat{j} + w(x,y,z)\hat{k}$$

**Unsteady Flow:**
$$\vec{V} = u(x,y,z,t)\hat{i} + v(x,y,z,t)\hat{j} + w(x,y,z,t)\hat{k}$$

### 5.3 Streamline Behavior

**Steady Flow:**
- Streamlines are **fixed** in space
- Streamlines ≡ Streaklines ≡ Pathlines
- Flow visualization shows constant pattern

**Unsteady Flow:**
- Streamlines **move and deform** with time
- Streamlines ≠ Streaklines ≠ Pathlines (generally)
- Flow visualization changes continuously

### 5.4 Acceleration Comparison

| Flow Type | Local Acceleration | Convective Acceleration | Total Acceleration |
|-----------|-------------------|------------------------|-------------------|
| Steady uniform | 0 | 0 | 0 |
| Steady non-uniform | 0 | ≠ 0 | ≠ 0 |
| Unsteady uniform | ≠ 0 | 0 | ≠ 0 |
| Unsteady non-uniform | ≠ 0 | ≠ 0 | ≠ 0 |

### 5.5 Equation Simplification

**Continuity Equation:**

Steady: $\nabla \cdot \vec{V} = 0$ (incompressible)

Unsteady: $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho\vec{V}) = 0$

**Momentum Equation (Euler):**

Steady: $(\vec{V} \cdot \nabla)\vec{V} = -\frac{1}{\rho}\nabla p + \vec{g}$

Unsteady: $\frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V} = -\frac{1}{\rho}\nabla p + \vec{g}$

---

## 6. Classification Matrix

### 6.1 Combined Classification

Flows can be classified by combining temporal and spatial variations:

|  | **Spatially Uniform** | **Spatially Non-Uniform** |
|--|----------------------|--------------------------|
| **Temporally Steady** | Type I: Uniform Steady | Type II: Non-Uniform Steady |
| **Temporally Unsteady** | Type III: Uniform Unsteady | Type IV: Non-Uniform Unsteady |

### 6.2 Type I: Uniform Steady Flow

**Characteristics:**
- $\vec{V} = \text{constant}$ everywhere
- $\frac{\partial \vec{V}}{\partial t} = 0$ and $\nabla\vec{V} = 0$
- Zero acceleration

**Example:** Idealized flow in a very long straight pipe

**Mathematical:**
$$\vec{V}(x,y,z,t) = V_0\hat{i}$$

### 6.3 Type II: Non-Uniform Steady Flow

**Characteristics:**
- $\vec{V} = \vec{V}(x, y, z)$ but $\frac{\partial \vec{V}}{\partial t} = 0$
- Convective acceleration present
- Flow pattern fixed in time

**Examples:**
- Flow through nozzle
- Flow over airfoil (constant speed)
- River flow around bridge pier

**Mathematical:**
$$\vec{V}(x,y,z,t) = u(x,y,z)\hat{i} + v(x,y,z)\hat{j}$$

### 6.4 Type III: Uniform Unsteady Flow

**Characteristics:**
- $\vec{V} = \vec{V}(t)$ only
- Local acceleration present, no convective
- Velocity same everywhere at each instant

**Examples:**
- Rigid body acceleration of fluid (piston startup)
- Draining a large tank (quasi-uniform)
- Oscillating U-tube

**Mathematical:**
$$\vec{V}(x,y,z,t) = V(t)\hat{i}$$

### 6.5 Type IV: Non-Uniform Unsteady Flow

**Characteristics:**
- $\vec{V} = \vec{V}(x, y, z, t)$
- Both local and convective acceleration
- Most complex case

**Examples:**
- Starting flow in pipe
- Wave motion
- Vortex shedding
- Pulsatile flow in stenosed artery

**Mathematical:**
$$\vec{V}(x,y,z,t) = u(x,y,z,t)\hat{i} + v(x,y,z,t)\hat{j} + w(x,y,z,t)\hat{k}$$

---

## 7. Governing Equations

### 7.1 Continuity Equation

**General Form:**
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho\vec{V}) = 0$$

**Steady Flow:**
$$\nabla \cdot (\rho\vec{V}) = 0$$

For incompressible: $\nabla \cdot \vec{V} = 0$

**Unsteady Flow:**
Full equation with $\frac{\partial \rho}{\partial t}$ term.

### 7.2 Momentum Equation (Navier-Stokes)

**General Form:**
$$\rho\left(\frac{\partial \vec{V}}{\partial t} + \vec{V} \cdot \nabla\vec{V}\right) = -\nabla p + \mu\nabla^2\vec{V} + \rho\vec{g}$$

**Steady Flow:**
$$\rho(\vec{V} \cdot \nabla\vec{V}) = -\nabla p + \mu\nabla^2\vec{V} + \rho\vec{g}$$

(Local acceleration term vanishes)

**Unsteady Flow:**
Both terms in acceleration remain.

### 7.3 Energy Equation

**General Form:**
$$\rho c_p\left(\frac{\partial T}{\partial t} + \vec{V} \cdot \nabla T\right) = k\nabla^2 T + \Phi$$

where $\Phi$ is viscous dissipation.

**Steady Flow:**
$$\rho c_p(\vec{V} \cdot \nabla T) = k\nabla^2 T + \Phi$$

### 7.4 Bernoulli Equation

**Steady Flow (along streamline):**
$$\frac{p}{\rho} + \frac{V^2}{2} + gz = \text{constant}$$

**Unsteady Flow (along streamline):**
$$\frac{\partial \phi}{\partial t} + \frac{p}{\rho} + \frac{V^2}{2} + gz = C(t)$$

where $\phi$ is velocity potential (for irrotational flow).

More generally, Bernoulli equation **does not apply** in simple form for unsteady flow.

---

## 8. Local vs Convective Effects

### 8.1 Understanding Acceleration Components

**Total acceleration:**
$$\vec{a} = \underbrace{\frac{\partial \vec{V}}{\partial t}}_{\text{Local}} + \underbrace{(\vec{V} \cdot \nabla)\vec{V}}_{\text{Convective}}$$

### 8.2 Local Acceleration

$$\vec{a}_{\text{local}} = \frac{\partial \vec{V}}{\partial t}$$

**Physical meaning:** Rate of change of velocity **at a fixed point** in space.

**When significant:**
- Unsteady flow
- Pulsating flows
- Start/stop transients
- Wave propagation

**When zero:**
- Steady flow (by definition)

### 8.3 Convective Acceleration

$$\vec{a}_{\text{conv}} = (\vec{V} \cdot \nabla)\vec{V} = u\frac{\partial \vec{V}}{\partial x} + v\frac{\partial \vec{V}}{\partial y} + w\frac{\partial \vec{V}}{\partial z}$$

**Physical meaning:** Change in velocity as particle **moves through space** where velocity varies.

**When significant:**
- Non-uniform flow
- Flow through nozzles/diffusers
- Flow around objects
- Curved streamlines

**When zero:**
- Uniform flow

### 8.4 Four Scenarios

1. **Steady Uniform Flow**
   - $\frac{\partial \vec{V}}{\partial t} = 0$ and $\nabla\vec{V} = 0$
   - $\vec{a} = 0$ (no acceleration)
   
2. **Steady Non-Uniform Flow**
   - $\frac{\partial \vec{V}}{\partial t} = 0$ but $\nabla\vec{V} \neq 0$
   - $\vec{a} = (\vec{V} \cdot \nabla)\vec{V}$ (only convective)
   
3. **Unsteady Uniform Flow**
   - $\frac{\partial \vec{V}}{\partial t} \neq 0$ but $\nabla\vec{V} = 0$
   - $\vec{a} = \frac{\partial \vec{V}}{\partial t}$ (only local)
   
4. **Unsteady Non-Uniform Flow**
   - Both $\frac{\partial \vec{V}}{\partial t} \neq 0$ and $\nabla\vec{V} \neq 0$
   - $\vec{a} = \frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V}$ (both)

### 8.5 Examples Illustrating Components

**Example 1:** Flow through a nozzle (steady, converging)
- Local: 0 (steady)
- Convective: positive (accelerating)
- Total: positive

**Example 2:** Piston starting from rest (uniform acceleration)
- Local: positive (increasing with time)
- Convective: 0 (uniform in space)
- Total: positive

**Example 3:** Wave passing a point
- Local: varies (oscillating)
- Convective: varies (spatial gradients)
- Total: both contribute

---

## 9. Practical Examples

### 9.1 Steady Flow Examples

#### Example 9.1.1: Water Flow in Garden Hose

**Scenario:** Constant water supply, valve fully open.

**Analysis:**
- At any fixed point in hose: velocity constant in time
- $\frac{\partial V}{\partial t} = 0$ everywhere
- Flow rate constant
- **Classification:** Steady flow

**Note:** Near nozzle, flow is non-uniform spatially, but still steady temporally.

#### Example 9.1.2: Wind Tunnel Testing

**Scenario:** Constant fan speed, model stationary.

**Analysis:**
- Air velocity at any point constant with time
- $\frac{\partial \vec{V}}{\partial t} = 0$
- Flow pattern fixed (though non-uniform around model)
- **Classification:** Steady non-uniform flow

#### Example 9.1.3: River Flow (Normal Conditions)

**Scenario:** Constant upstream discharge, no rainfall.

**Analysis:**
- Water level constant
- Velocity at each point constant
- $\frac{\partial V}{\partial t} = 0$
- **Classification:** Steady flow

**Caveat:** Actually quasi-steady due to slow variations.

### 9.2 Unsteady Flow Examples

#### Example 9.2.1: Filling a Bathtub

**Scenario:** Tap turned on, tub initially empty.

**Analysis:**
- Water level rising → depth changes with time
- Velocity at any point changes as depth increases
- $\frac{\partial V}{\partial t} \neq 0$
- **Classification:** Unsteady flow

#### Example 9.2.2: Starting a Pump

**Scenario:** Pump switched on, fluid initially at rest.

**Analysis:**
- Velocity at every point increases from 0 to final value
- $\frac{\partial V}{\partial t} > 0$ during startup
- Transient period until steady state reached
- **Classification:** Unsteady flow (transient)

#### Example 9.2.3: Heartbeat and Blood Flow

**Scenario:** Pulsatile flow in arteries.

**Analysis:**
- Pressure varies periodically: $p(t) = p_0 + \Delta p \sin(\omega t)$
- Velocity varies periodically: $V(t) = V_0 + \Delta V \sin(\omega t + \phi)$
- $\frac{\partial V}{\partial t} \neq 0$
- **Classification:** Periodic unsteady flow

**Frequency:** $f \approx 1$ Hz (60 beats/min)

#### Example 9.2.4: Ocean Waves

**Scenario:** Surface waves propagating.

**Analysis:**
- Water surface elevation varies: $\eta(x,t) = A\sin(kx - \omega t)$
- Velocity at any point oscillates
- $\frac{\partial V}{\partial t} \neq 0$
- **Classification:** Periodic unsteady flow

**Wave motion equation:**
$$\frac{\partial^2 \eta}{\partial t^2} = c^2\frac{\partial^2 \eta}{\partial x^2}$$

where $c = \sqrt{gh}$ (shallow water wave speed).

#### Example 9.2.5: Water Hammer

**Scenario:** Sudden valve closure in pipeline.

**Analysis:**
- Pressure wave travels back through pipe
- At any point, pressure rises suddenly then oscillates
- $\frac{\partial p}{\partial t}$ extremely large initially
- **Classification:** Highly unsteady (shock-like)

**Joukowsky equation:**
$$\Delta p = \rho c \Delta V$$

where $c = \sqrt{\frac{K}{\rho}}$ is speed of pressure wave.

### 9.3 Borderline Cases

#### Example 9.3.1: Draining a Large Tank

**Scenario:** Tank with large surface area, small outlet.

**Analysis:**
- Water level drops very slowly
- At any instant, flow approximately steady
- Over long time, level decreases
- **Classification:** Quasi-steady (can approximate as sequence of steady states)

**Criterion:**
$$\frac{dh}{dt} \ll V_{\text{exit}}$$

#### Example 9.3.2: Tidal Flow in Estuary

**Scenario:** Tide rises and falls over ~6 hours.

**Analysis:**
- Period $T \sim 6$ hours = 21,600 s
- Flow time through estuary $\sim$ minutes
- Can treat as slowly varying steady flow
- **Classification:** Quasi-steady

---

## 10. Analysis Techniques

### 10.1 Steady Flow Analysis

**Approach:**
1. Assume steady state: $\frac{\partial}{\partial t} = 0$
2. Apply conservation laws (continuity, momentum, energy)
3. Solve algebraic or ordinary differential equations
4. No time integration needed

**Tools:**
- Bernoulli equation
- Control volume analysis
- Streamline analysis

### 10.2 Unsteady Flow Analysis

**Approach:**
1. Retain time derivatives
2. Apply time-dependent conservation laws
3. Solve partial differential equations
4. Require initial conditions and time integration

**Tools:**
- Method of characteristics
- Finite difference in time
- Numerical methods (CFD)

### 10.3 Quasi-Steady Approximation

For slowly varying flows:

**Criterion:**
$$\text{Strouhal number } St = \frac{fL}{V} \ll 1$$

where:
- $f$ = frequency of variation
- $L$ = characteristic length
- $V$ = characteristic velocity

**Method:**
- Treat as steady at each instant
- Solve sequence of steady problems
- Parameters vary slowly with time

**Example:** Tank draining
$$V(t) = \sqrt{2gh(t)}$$
$$\frac{dh}{dt} = -\frac{A_{\text{outlet}}}{A_{\text{tank}}}V(t)$$

At each $t$, use steady orifice equation, then integrate to get $h(t)$.

### 10.4 Experimental Techniques

**Steady Flow:**
- Point measurements sufficient
- Time-averaging not critical
- Simpler instrumentation

**Unsteady Flow:**
- High-frequency response needed
- Phase-locked measurements
- Ensemble averaging for periodic flows
- Hot-wire anemometry, LDV, PIV with high sampling rates

---

## 11. Solved Problems

### Problem 11.1: Classification Exercise

**Problem:** Classify the following flows as steady or unsteady:

(a) Flow through a garden hose with constant water supply  
(b) Flow in a pipe during pump startup  
(c) Flow in a river during flood  
(d) Flow around an airplane wing in level flight  
(e) Wave motion in the ocean  
(f) Flow in a pulsating blood vessel

**Solution:**

(a) **Steady flow**
- Constant boundary conditions
- Velocity at any point constant with time

(b) **Unsteady flow**
- Transient acceleration
- $\frac{\partial V}{\partial t} \neq 0$ during startup

(c) **Unsteady flow**
- Water level rising
- Discharge increasing with time

(d) **Steady flow** (in reference frame moving with airplane)
- Constant flight speed and altitude
- Flow pattern fixed relative to wing

(e) **Unsteady flow**
- Surface elevation varying: $\eta(x,t)$
- Velocity field oscillating

(f) **Unsteady (periodic) flow**
- Pulsatile due to heartbeat
- Velocity varies periodically

---

### Problem 11.2: Acceleration Components

**Problem:** Water flows through a horizontal pipe that contracts from diameter $D_1 = 20$ cm to $D_2 = 10$ cm. The velocity at the inlet increases linearly with time as $V_1(t) = 2t$ m/s (where $t$ is in seconds). At $t = 3$ s, find at the inlet:
(a) Local acceleration  
(b) Convective acceleration  
(c) Total acceleration

**Solution:**

At $t = 3$ s:
$$V_1 = 2 \times 3 = 6 \text{ m/s}$$

**(a) Local Acceleration:**

$$a_{\text{local}} = \frac{\partial V_1}{\partial t} = \frac{d(2t)}{dt} = 2 \text{ m/s}^2$$

**(b) Convective Acceleration at Inlet:**

At the inlet section (uniform), velocity doesn't vary in space:
$$a_{\text{conv}} = V\frac{\partial V}{\partial x} = 0$$

(Convective acceleration exists within the contraction, but at inlet cross-section itself it's zero)

**(c) Total Acceleration:**

$$a_{\text{total}} = a_{\text{local}} + a_{\text{conv}} = 2 + 0 = 2 \text{ m/s}^2$$

**Note:** This flow is **unsteady uniform** at the inlet.

---

### Problem 11.3: Steady vs Unsteady Interpretation

**Problem:** Consider flow through a nozzle where velocity increases from $V_1 = 5$ m/s to $V_2 = 20$ m/s over a length $L = 0.5$ m.

(a) Is this flow steady or unsteady?  
(b) Calculate the convective acceleration  
(c) Does a fluid particle experience acceleration?

**Solution:**

**(a) Classification:**

The problem states velocity increases from inlet to exit, but doesn't mention time variation. Assuming constant inlet conditions:

**Flow is STEADY** but spatially non-uniform.

At any fixed point in the nozzle, velocity is constant with time.

**(b) Convective Acceleration:**

Using mean velocity:
$$V_{avg} = \frac{V_1 + V_2}{2} = \frac{5 + 20}{2} = 12.5 \text{ m/s}$$

$$a_{\text{conv}} = V\frac{dV}{ds} \approx V_{avg}\frac{V_2 - V_1}{L}$$

$$= 12.5 \times \frac{20 - 5}{0.5} = 12.5 \times 30 = 375 \text{ m/s}^2$$

**(c) Particle Acceleration:**

**Yes!** A fluid particle accelerates as it moves through the nozzle, even though the flow is steady.

**Explanation:**
- At inlet: particle has velocity 5 m/s
- At exit: same particle has velocity 20 m/s
- Particle accelerated due to spatial variation
- This is **convective acceleration**

**Key insight:** Steady flow ≠ No acceleration. Particles accelerate in steady non-uniform flow.

---

### Problem 11.4: Unsteady Flow in U-tube

**Problem:** A U-tube manometer contains water initially at rest. One end is suddenly opened to a pressure $p_0 + \Delta p$. The water column oscillates with:

$$h(t) = A\sin(\omega t)$$

where $\omega = \sqrt{\frac{2g}{L}}$, $L$ is total column length.

(a) Is this steady or unsteady flow?  
(b) Find the local acceleration at the midpoint  
(c) Is there convective acceleration?

**Solution:**

**(a) Classification:**

Height varies with time → velocity varies with time at any point.

**Flow is UNSTEADY (periodic).**

**(b) Local Acceleration:**

Water velocity in tube:
$$V(t) = \frac{dh}{dt} = A\omega\cos(\omega t)$$

Local acceleration:
$$a_{\text{local}} = \frac{\partial V}{\partial t} = -A\omega^2\sin(\omega t) = -\omega^2 h(t)$$

This is simple harmonic motion.

At midpoint, $a_{\text{local}}$ oscillates between $\pm A\omega^2$.

**(c) Convective Acceleration:**

For one-dimensional oscillating flow in U-tube, velocity is approximately uniform across any cross-section:

$$V = V(t) \text{ only}$$

Therefore:
$$a_{\text{conv}} = V\frac{\partial V}{\partial x} \approx 0$$

**Classification:** Unsteady uniform flow (Type III).

---

### Problem 11.5: Mixed Flow Analysis

**Problem:** Water flows through a pipe with a valve that is closing linearly. The valve discharge coefficient varies as:

$$C_v(t) = C_0(1 - \alpha t)$$

where $\alpha = 0.1$ s⁻¹. The upstream velocity is:

$$V(x,t) = V_0 C_v(t) \sqrt{1 - \frac{x}{L}}$$

where $V_0 = 10$ m/s, $L = 5$ m.

At position $x = 2$ m and time $t = 2$ s, find:
(a) Local acceleration  
(b) Convective acceleration  
(c) Total acceleration

**Solution:**

At $x = 2$ m, $t = 2$ s:

$$C_v(2) = 1 - 0.1 \times 2 = 0.8$$

$$V(2,2) = 10 \times 0.8 \times \sqrt{1 - \frac{2}{5}} = 8 \times \sqrt{0.6} = 6.197 \text{ m/s}$$

**(a) Local Acceleration:**

$$a_{\text{local}} = \frac{\partial V}{\partial t} = V_0\frac{\partial C_v}{\partial t}\sqrt{1 - \frac{x}{L}}$$

$$= V_0(-\alpha)\sqrt{1 - \frac{x}{L}} = 10 \times (-0.1) \times \sqrt{0.6}$$

$$= -0.775 \text{ m/s}^2$$

(Negative: velocity decreasing with time)

**(b) Convective Acceleration:**

$$a_{\text{conv}} = V\frac{\partial V}{\partial x} = V \times V_0 C_v(t) \times \frac{d}{dx}\left[\sqrt{1 - \frac{x}{L}}\right]$$

$$= V \times V_0 C_v(t) \times \frac{-1}{2L\sqrt{1 - x/L}}$$

$$= 6.197 \times 10 \times 0.8 \times \frac{-1}{2 \times 5 \times \sqrt{0.6}}$$

$$= 49.58 \times \frac{-1}{7.746} = -6.40 \text{ m/s}^2$$

**(c) Total Acceleration:**

$$a_{\text{total}} = a_{\text{local}} + a_{\text{conv}} = -0.775 + (-6.40) = -7.175 \text{ m/s}^2$$

**Interpretation:**
- Flow is **unsteady non-uniform** (Type IV)
- Both local and convective deceleration present
- Particle decelerates due to valve closing AND spatial convergence

---

### Problem 11.6: Strouhal Number and Quasi-Steady

**Problem:** A tank with diameter $D = 2$ m drains through an orifice of diameter $d = 5$ cm. Initial water depth is $h_0 = 3$ m. Determine if quasi-steady approximation is valid.

**Solution:**

**Step 1:** Characteristic velocity (at orifice):
$$V = C_d\sqrt{2gh} \approx 0.6\sqrt{2 \times 9.81 \times 3} = 4.6 \text{ m/s}$$

**Step 2:** Rate of level change:
$$\frac{dh}{dt} = -\frac{A_{\text{orifice}}}{A_{\text{tank}}}V = -\frac{\pi d^2/4}{\pi D^2/4}V$$

$$= -\frac{d^2}{D^2}V = -\frac{(0.05)^2}{(2)^2} \times 4.6 = -0.0029 \text{ m/s}$$

**Step 3:** Time scale for significant change:
$$\tau_{\text{change}} = \frac{h_0}{|dh/dt|} = \frac{3}{0.0029} = 1034 \text{ s} \approx 17 \text{ min}$$

**Step 4:** Flow time scale (characteristic length / velocity):
$$\tau_{\text{flow}} = \frac{D}{V} = \frac{2}{4.6} = 0.43 \text{ s}$$

**Step 5:** Strouhal number:
$$St = \frac{\tau_{\text{flow}}}{\tau_{\text{change}}} = \frac{0.43}{1034} = 0.0004 \ll 1$$

**Conclusion:** Since $St \ll 1$, **quasi-steady approximation is valid**. The level changes so slowly that at each instant, the flow can be treated as steady.

---

## References and Further Reading

### Textbooks

1. **Munson, B. R., Young, D. F., Okiishi, T. H., & Huebsch, W. W.** (2013). *Fundamentals of Fluid Mechanics* (7th ed.). Wiley.
   - Chapter 4: Fluid Kinematics
   - Section 4.2: Acceleration

2. **White, F. M.** (2016). *Fluid Mechanics* (8th ed.). McGraw-Hill.
   - Chapter 1: Introduction
   - Chapter 4: Differential Relations for Fluid Flow

3. **Fox, R. W., McDonald, A. T., & Pritchard, P. J.** (2011). *Introduction to Fluid Mechanics* (8th ed.). Wiley.
   - Chapter 2: Fundamental Concepts
   - Chapter 5: Introduction to Differential Analysis

4. **Cengel, Y. A., & Cimbala, J. M.** (2014). *Fluid Mechanics: Fundamentals and Applications* (3rd ed.). McGraw-Hill.
   - Chapter 4: Fluid Kinematics

### Online Resources

5. **MIT OpenCourseWare - Fluid Dynamics**
   - URL: https://ocw.mit.edu/courses/mechanical-engineering/2-25-advanced-fluid-mechanics-fall-2013/
   - Lecture notes on steady and unsteady flows

6. **NPTEL - Fluid Mechanics (IIT Madras)**
   - URL: https://nptel.ac.in/courses/112/106/112106139/
   - Video lectures on fluid kinematics

7. **Khan Academy - Fluids**
   - URL: https://www.khanacademy.org/science/physics/fluids
   - Basic concepts and examples

8. **Wolfram Demonstrations - Fluid Mechanics**
   - URL: http://demonstrations.wolfram.com/topic.html?topic=Fluid+Mechanics
   - Interactive visualizations of steady/unsteady flows

### Research and Advanced Topics

9. **Batchelor, G. K.** (2000). *An Introduction to Fluid Dynamics*. Cambridge University Press.
   - Rigorous treatment of kinematics and dynamics

10. **Kundu, P. K., Cohen, I. M., & Dowling, D. R.** (2015). *Fluid Mechanics* (6th ed.). Academic Press.
    - Advanced coverage of unsteady flows

11. **Tritton, D. J.** (1988). *Physical Fluid Dynamics* (2nd ed.). Oxford University Press.
    - Physical interpretation of flow phenomena

### Video Resources

12. **FYFD (Fuck Yeah Fluid Dynamics)**
    - URL: https://fyfluiddynamics.com/
    - Visual examples of various flow phenomena

13. **National Committee for Fluid Mechanics Films (NCFMF)**
    - Classic educational films on fluid mechanics
    - Available on YouTube and various educational platforms

---

## Summary

The distinction between **steady** and **unsteady** flow is fundamental in fluid mechanics:

**Steady Flow:**
- Flow properties at any fixed point **do not change with time**
- $\frac{\partial}{\partial t} = 0$ for all properties
- Simpler analysis (no time derivatives)
- Examples: Flow in pipes (constant conditions), flow over airfoils (constant speed)

**Unsteady Flow:**
- Flow properties at points **vary with time**
- $\frac{\partial}{\partial t} \neq 0$ for at least one property
- More complex analysis (time-dependent PDEs)
- Examples: Starting/stopping flows, waves, pulsatile flows

**Key Points:**
1. Classification is based on **temporal variation at fixed points**, not particle motion
2. Steady flow can have acceleration (convective)
3. Unsteady flow has local acceleration
4. Combined with spatial variation (uniform/non-uniform), four types exist
5. Many real flows are quasi-steady (slowly varying)

Understanding these concepts is essential for proper flow analysis and appropriate application of governing equations.

---

**End of Document**
