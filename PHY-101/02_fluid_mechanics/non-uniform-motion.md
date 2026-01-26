# Non-Uniform Motion in Fluid Mechanics

**Date:** January 27, 2026  
**Course:** PHY-101 - Fluid Mechanics  
**Topic:** Non-Uniform Motion - Analysis and Applications

---

## Table of Contents

1. [Introduction to Non-Uniform Motion](#1-introduction-to-non-uniform-motion)
2. [Mathematical Description](#2-mathematical-description)
3. [Types of Non-Uniform Flow](#3-types-of-non-uniform-flow)
4. [Governing Equations](#4-governing-equations)
5. [Velocity Profiles](#5-velocity-profiles)
6. [Acceleration in Non-Uniform Flow](#6-acceleration-in-non-uniform-flow)
7. [Energy Considerations](#7-energy-considerations)
8. [Practical Applications](#8-practical-applications)
9. [Analysis Methods](#9-analysis-methods)
10. [Solved Examples](#10-solved-examples)

---

## 1. Introduction to Non-Uniform Motion

### 1.1 Definition

**Non-uniform motion** in fluid mechanics refers to fluid flow where the velocity varies from point to point in space at any given instant of time. This means the velocity is a function of spatial coordinates.

Mathematically:
$$\vec{V} = \vec{V}(x, y, z, t)$$

where the velocity changes with position coordinates (x, y, z) and possibly time (t).

### 1.2 Distinction from Uniform Motion

| Characteristic | Uniform Motion | Non-Uniform Motion |
|----------------|----------------|-------------------|
| Velocity variation | Constant across cross-section | Varies with position |
| Mathematical form | $\vec{V} = \vec{V}(t)$ only | $\vec{V} = \vec{V}(x, y, z, t)$ |
| Streamlines | Parallel and straight | Curved or converging/diverging |
| Example | Flow in long straight pipe (ideal) | Flow through nozzle, bend, or obstruction |

### 1.3 Physical Significance

Non-uniform motion is the **general case** in real fluid flows. It occurs due to:
- Changes in cross-sectional area
- Presence of obstacles or boundaries
- Viscous effects near walls
- Flow through bends and fittings
- Entrance and exit effects

---

## 2. Mathematical Description

### 2.1 Velocity Field

The velocity at any point in a non-uniform flow field is described by:

$$\vec{V}(x, y, z, t) = u(x, y, z, t)\hat{i} + v(x, y, z, t)\hat{j} + w(x, y, z, t)\hat{k}$$

where:
- $u, v, w$ = velocity components in x, y, z directions
- $\hat{i}, \hat{j}, \hat{k}$ = unit vectors

### 2.2 Spatial Variation

The rate of change of velocity with respect to position:

$$\frac{\partial \vec{V}}{\partial x}, \quad \frac{\partial \vec{V}}{\partial y}, \quad \frac{\partial \vec{V}}{\partial z}$$

These partial derivatives are **non-zero** in non-uniform flow.

### 2.3 Velocity Gradient

The velocity gradient tensor describes the complete spatial variation:

$$\nabla \vec{V} = \begin{bmatrix}
\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} & \frac{\partial u}{\partial z} \\
\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} & \frac{\partial v}{\partial z} \\
\frac{\partial w}{\partial x} & \frac{\partial w}{\partial y} & \frac{\partial w}{\partial z}
\end{bmatrix}$$

---

## 3. Types of Non-Uniform Flow

### 3.1 Gradually Varied Flow (GVF)

Flow where changes occur **slowly** over relatively long distances.

**Characteristics:**
- Small velocity gradients: $\frac{dV}{ds} \ll 1$
- Streamlines are nearly parallel
- Hydrostatic pressure distribution approximately valid
- Energy losses are gradual

**Examples:**
- Flow in gradually expanding or contracting channels
- Backwater curves in open channels
- Flow approach to hydraulic structures

**Mathematical Treatment:**

For gradually varied flow in open channels:
$$\frac{dy}{dx} = \frac{S_0 - S_f}{1 - Fr^2}$$

where:
- $y$ = flow depth
- $S_0$ = bed slope
- $S_f$ = friction slope
- $Fr$ = Froude number

### 3.2 Rapidly Varied Flow (RVF)

Flow where changes occur **abruptly** over short distances.

**Characteristics:**
- Large velocity gradients: $\frac{dV}{ds} \gg 1$
- Streamlines are highly curved
- Hydrostatic pressure distribution invalid
- Significant energy dissipation

**Examples:**
- Hydraulic jump
- Flow over weirs and spillways
- Flow through sluice gates
- Sharp bends and contractions

**Mathematical Treatment:**

Energy equation for RVF:
$$\frac{p_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{p_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_L$$

where $h_L$ represents significant local losses.

### 3.3 Spatial Classification

#### 3.3.1 One-Dimensional Non-Uniform Flow

Velocity varies primarily in **one direction**:
$$V = V(x, t) \quad \text{or} \quad V = V(s, t)$$

**Example:** Flow through a converging nozzle (variation along axis only)

#### 3.3.2 Two-Dimensional Non-Uniform Flow

Velocity varies in **two directions**:
$$\vec{V} = u(x, y, t)\hat{i} + v(x, y, t)\hat{j}$$

**Example:** Flow past a circular cylinder

#### 3.3.3 Three-Dimensional Non-Uniform Flow

Velocity varies in **all three directions**:
$$\vec{V} = u(x, y, z, t)\hat{i} + v(x, y, z, t)\hat{j} + w(x, y, z, t)\hat{k}$$

**Example:** Flow past a sphere, flow in pipe bends

---

## 4. Governing Equations

### 4.1 Continuity Equation for Non-Uniform Flow

**General Form (Differential):**

For incompressible flow:
$$\nabla \cdot \vec{V} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$$

**Integral Form:**

For a control volume:
$$\frac{\partial}{\partial t}\int_{CV} \rho \, dV + \int_{CS} \rho \vec{V} \cdot \hat{n} \, dA = 0$$

For steady flow:
$$\int_{CS} \rho \vec{V} \cdot \hat{n} \, dA = 0$$

### 4.2 Momentum Equation

**Euler's Equation** (inviscid flow):
$$\rho \frac{D\vec{V}}{Dt} = -\nabla p + \rho \vec{g}$$

where the material derivative:
$$\frac{D\vec{V}}{Dt} = \frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V}$$

The term $(\vec{V} \cdot \nabla)\vec{V}$ represents **convective acceleration** due to spatial variation.

**Navier-Stokes Equations** (viscous flow):
$$\rho \frac{D\vec{V}}{Dt} = -\nabla p + \mu \nabla^2 \vec{V} + \rho \vec{g}$$

### 4.3 Energy Equation

**Bernoulli's Equation** (along a streamline, inviscid):
$$\frac{p}{\rho g} + \frac{V^2}{2g} + z = \text{constant along streamline}$$

**Note:** In non-uniform flow, the constant varies between streamlines.

**Extended Bernoulli Equation** (with losses):
$$\frac{p_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{p_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_L$$

---

## 5. Velocity Profiles

### 5.1 Pipe Flow Velocity Profile

In non-uniform flow through a pipe, the velocity profile varies along the length.

**Entrance Region:**

At the pipe entrance, the flow develops from uniform to fully developed.

Length of entrance region:
$$L_e \approx 0.06 \, Re \, D \quad \text{(laminar flow)}$$
$$L_e \approx 4.4 \, Re^{1/6} \, D \quad \text{(turbulent flow)}$$

where:
- $Re$ = Reynolds number
- $D$ = pipe diameter

**Velocity Profile Development:**

Position | Velocity Profile
---------|------------------
Entrance | Nearly uniform
Developing region | Boundary layer grows, core remains uniform
Fully developed | Parabolic (laminar) or logarithmic (turbulent)

### 5.2 Laminar Flow Profile

**Fully Developed:**
$$u(r) = u_{max}\left(1 - \frac{r^2}{R^2}\right) = 2\bar{u}\left(1 - \frac{r^2}{R^2}\right)$$

where:
- $u_{max} = 2\bar{u}$ = maximum velocity at centerline
- $\bar{u}$ = average velocity
- $r$ = radial distance from center
- $R$ = pipe radius

**Developing Flow:**
$$u(x, r) = f(x) \cdot g(r)$$

The profile evolves spatially as function of $x$.

### 5.3 Flow Around Objects

**Potential Flow Past a Cylinder:**

Velocity field (inviscid):
$$u_r = U_{\infty}\left(1 - \frac{a^2}{r^2}\right)\cos\theta$$
$$u_{\theta} = -U_{\infty}\left(1 + \frac{a^2}{r^2}\right)\sin\theta$$

where:
- $U_{\infty}$ = freestream velocity
- $a$ = cylinder radius
- $r, \theta$ = polar coordinates

This shows strong spatial variation near the cylinder.

---

## 6. Acceleration in Non-Uniform Flow

### 6.1 Types of Acceleration

**Total Acceleration:**
$$\vec{a} = \frac{D\vec{V}}{Dt} = \frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V}$$

**Components:**

1. **Local Acceleration** (temporal):
   $$\vec{a}_{\text{local}} = \frac{\partial \vec{V}}{\partial t}$$
   
   Rate of change at a fixed point in space.

2. **Convective Acceleration** (spatial):
   $$\vec{a}_{\text{conv}} = (\vec{V} \cdot \nabla)\vec{V} = u\frac{\partial \vec{V}}{\partial x} + v\frac{\partial \vec{V}}{\partial y} + w\frac{\partial \vec{V}}{\partial z}$$
   
   Change due to particle moving through non-uniform velocity field.

### 6.2 Physical Interpretation

**Convective acceleration** is the hallmark of non-uniform flow. It arises because:
- A fluid particle moves from one location to another
- At different locations, the velocity is different
- Therefore, the particle experiences acceleration even in steady flow

**Example:** Flow through a nozzle (steady but non-uniform)
- $\frac{\partial \vec{V}}{\partial t} = 0$ (steady)
- $(\vec{V} \cdot \nabla)\vec{V} \neq 0$ (spatial variation)
- Net acceleration exists!

### 6.3 One-Dimensional Analysis

For flow along a streamline with coordinate $s$:

$$a_s = V\frac{dV}{ds}$$

This can be rewritten using continuity:
$$a_s = -\frac{V^2}{A}\frac{dA}{ds}$$

where $A$ is the cross-sectional area.

**Interpretation:**
- Converging flow ($\frac{dA}{ds} < 0$): $a_s > 0$ (acceleration)
- Diverging flow ($\frac{dA}{ds} > 0$): $a_s < 0$ (deceleration)

---

## 7. Energy Considerations

### 7.1 Energy Equation for Non-Uniform Flow

**General Form:**

$$\frac{p_1}{\rho g} + \frac{\alpha_1 V_1^2}{2g} + z_1 = \frac{p_2}{\rho g} + \frac{\alpha_2 V_2^2}{2g} + z_2 + h_L$$

where $\alpha$ is the **kinetic energy correction factor**:

$$\alpha = \frac{\int_A V^3 \, dA}{V_{avg}^3 \cdot A}$$

### 7.2 Kinetic Energy Correction Factor

For **uniform flow**: $\alpha = 1$

For **non-uniform flow**: $\alpha > 1$

**Values:**
- Laminar flow (parabolic profile): $\alpha = 2.0$
- Turbulent flow (logarithmic profile): $\alpha \approx 1.05 - 1.10$

**Derivation for Laminar Pipe Flow:**

Given velocity profile:
$$u(r) = 2\bar{u}\left(1 - \frac{r^2}{R^2}\right)$$

Kinetic energy flux:
$$\dot{KE} = \int_A \frac{1}{2}\rho u^3 \, dA$$

$$= \int_0^R \frac{1}{2}\rho \left[2\bar{u}\left(1 - \frac{r^2}{R^2}\right)\right]^3 2\pi r \, dr$$

After integration:
$$\alpha = 2.0$$

### 7.3 Pressure Distribution

In non-uniform flow, pressure varies not only along the flow but also across it.

**Radial Pressure Gradient** (curved streamlines):

$$\frac{dp}{dn} = \frac{\rho V^2}{R_c}$$

where:
- $n$ = normal direction to streamline
- $R_c$ = radius of curvature
- This is **centrifugal effect**

**Example:** Flow in a bend
- Higher pressure on outer wall
- Lower pressure on inner wall

---

## 8. Practical Applications

### 8.1 Flow Through Nozzles and Diffusers

**Nozzle (Converging):**
- Area decreases: $A_2 < A_1$
- Velocity increases: $V_2 > V_1$
- Pressure decreases: $p_2 < p_1$
- Positive convective acceleration

**Application:** Jet propulsion, spray systems, fire hoses

**Diffuser (Diverging):**
- Area increases: $A_2 > A_1$
- Velocity decreases: $V_2 < V_1$
- Pressure increases: $p_2 > p_1$
- Negative convective acceleration (deceleration)

**Application:** Pressure recovery in wind tunnels, turbines

**Design Consideration:**
- Nozzles are efficient (pressure energy → kinetic energy)
- Diffusers prone to flow separation if divergence angle too large
- Optimum diffuser angle: 5° - 7°

### 8.2 Flow Around Obstacles

**Cylinder in Cross-Flow:**
- Non-uniform velocity distribution
- Stagnation point: $V = 0$
- Acceleration around sides
- Wake formation behind

**Applications:**
- Wind loading on structures
- Heat exchanger tube banks
- Aerodynamic drag

### 8.3 Pipe Entrance and Exit

**Entrance Effects:**
- Flow enters pipe with uniform profile
- Boundary layer develops along walls
- Core flow accelerates to maintain continuity
- Eventually reaches fully developed profile

**Minor Losses:**
$$h_L = K_L \frac{V^2}{2g}$$

where $K_L$ depends on entrance geometry.

### 8.4 Flow in Bends and Fittings

**Secondary Flow:**
- Centrifugal forces create radial pressure gradient
- Induces secondary circulation perpendicular to main flow
- Results in non-uniform velocity distribution

**Applications:**
- Piping system design
- Loss coefficient determination
- Erosion prediction in bends

### 8.5 Open Channel Flow

**Gradually Varied Flow:**
- Water surface profiles (M1, M2, M3, etc.)
- Backwater curves upstream of dams
- Drawdown curves

**Rapidly Varied Flow:**
- Hydraulic jump (energy dissipation)
- Flow over weirs and spillways
- Flow under sluice gates

---

## 9. Analysis Methods

### 9.1 Continuity Equation Application

For **steady, incompressible** flow through varying area:

$$A_1 V_1 = A_2 V_2 = Q = \text{constant}$$

This gives:
$$V_2 = V_1 \frac{A_1}{A_2}$$

**Acceleration along streamline:**
$$a = V\frac{dV}{ds} = -\frac{V^2}{A}\frac{dA}{ds}$$

### 9.2 Bernoulli Equation Analysis

Between two points along a streamline:

$$p_1 + \frac{1}{2}\rho V_1^2 + \rho g z_1 = p_2 + \frac{1}{2}\rho V_2^2 + \rho g z_2$$

**Procedure:**
1. Identify two points along streamline
2. Apply continuity to relate velocities
3. Solve for unknown (pressure, velocity, elevation)

### 9.3 Control Volume Analysis

**Momentum Equation:**

$$\sum \vec{F} = \frac{\partial}{\partial t}\int_{CV} \vec{V} \rho \, dV + \int_{CS} \vec{V} (\rho \vec{V} \cdot \hat{n}) \, dA$$

For steady flow:
$$\sum \vec{F} = \int_{CS} \vec{V} (\rho \vec{V} \cdot \hat{n}) \, dA$$

**Application:** Forces on nozzles, bends, reducers

### 9.4 Computational Methods

For complex non-uniform flows:
- **Finite Difference Method (FDM)**
- **Finite Element Method (FEM)**
- **Finite Volume Method (FVM)**
- **Computational Fluid Dynamics (CFD)**

---

## 10. Solved Examples

### Example 10.1: Flow Through a Converging Nozzle

**Problem:** Water flows through a horizontal nozzle. The inlet diameter is $D_1 = 10$ cm and exit diameter is $D_2 = 5$ cm. The inlet velocity is $V_1 = 2$ m/s. Find:
(a) Exit velocity
(b) Convective acceleration at exit
(c) Pressure drop (neglecting losses)

**Solution:**

**(a) Exit Velocity:**

Continuity equation:
$$A_1 V_1 = A_2 V_2$$

$$\frac{\pi D_1^2}{4} V_1 = \frac{\pi D_2^2}{4} V_2$$

$$V_2 = V_1 \frac{D_1^2}{D_2^2} = 2 \times \frac{(10)^2}{(5)^2} = 2 \times 4 = 8 \text{ m/s}$$

**(b) Convective Acceleration:**

Along the nozzle axis (assuming linear taper), at the exit:

$$a_{\text{conv}} = V\frac{dV}{ds}$$

Approximating over the nozzle length $L$ (assume $L = 0.3$ m):

$$a_{\text{conv}} \approx V_{avg}\frac{\Delta V}{\Delta s} = \frac{V_1 + V_2}{2} \times \frac{V_2 - V_1}{L}$$

$$= \frac{2 + 8}{2} \times \frac{8 - 2}{0.3} = 5 \times 20 = 100 \text{ m/s}^2$$

**(c) Pressure Drop:**

Bernoulli equation (horizontal: $z_1 = z_2$):
$$p_1 + \frac{1}{2}\rho V_1^2 = p_2 + \frac{1}{2}\rho V_2^2$$

$$\Delta p = p_1 - p_2 = \frac{1}{2}\rho(V_2^2 - V_1^2)$$

$$= \frac{1}{2} \times 1000 \times (8^2 - 2^2)$$

$$= 500 \times (64 - 4) = 500 \times 60 = 30,000 \text{ Pa} = 30 \text{ kPa}$$

**Answer:** 
- $V_2 = 8$ m/s
- $a_{\text{conv}} = 100$ m/s²
- $\Delta p = 30$ kPa

---

### Example 10.2: Velocity Profile and Kinetic Energy Factor

**Problem:** For laminar flow in a circular pipe, the velocity profile is:
$$u(r) = u_{max}\left(1 - \frac{r^2}{R^2}\right)$$

Derive the kinetic energy correction factor $\alpha$.

**Solution:**

**Step 1:** Find relationship between $u_{max}$ and average velocity $\bar{u}$.

$$\bar{u} = \frac{1}{A}\int_A u \, dA = \frac{1}{\pi R^2}\int_0^R u_{max}\left(1 - \frac{r^2}{R^2}\right) 2\pi r \, dr$$

$$= \frac{2u_{max}}{R^2}\int_0^R \left(r - \frac{r^3}{R^2}\right) dr$$

$$= \frac{2u_{max}}{R^2}\left[\frac{r^2}{2} - \frac{r^4}{4R^2}\right]_0^R$$

$$= \frac{2u_{max}}{R^2}\left[\frac{R^2}{2} - \frac{R^2}{4}\right] = \frac{2u_{max}}{R^2} \times \frac{R^2}{4} = \frac{u_{max}}{2}$$

Therefore: $u_{max} = 2\bar{u}$

**Step 2:** Calculate kinetic energy correction factor.

$$\alpha = \frac{\int_A u^3 \, dA}{\bar{u}^3 \cdot A}$$

$$= \frac{1}{\bar{u}^3 \pi R^2}\int_0^R u_{max}^3\left(1 - \frac{r^2}{R^2}\right)^3 2\pi r \, dr$$

Substituting $u_{max} = 2\bar{u}$:

$$= \frac{16\bar{u}^3}{\bar{u}^3 R^2}\int_0^R \left(1 - \frac{r^2}{R^2}\right)^3 r \, dr$$

Let $\xi = \frac{r}{R}$, then $r = R\xi$ and $dr = R \, d\xi$:

$$= \frac{16}{R^2} \int_0^1 (1 - \xi^2)^3 (R\xi)(R \, d\xi) = 16\int_0^1 \xi(1 - \xi^2)^3 \, d\xi$$

Expanding: $(1 - \xi^2)^3 = 1 - 3\xi^2 + 3\xi^4 - \xi^6$

$$= 16\int_0^1 (\xi - 3\xi^3 + 3\xi^5 - \xi^7) \, d\xi$$

$$= 16\left[\frac{\xi^2}{2} - \frac{3\xi^4}{4} + \frac{3\xi^6}{6} - \frac{\xi^8}{8}\right]_0^1$$

$$= 16\left[\frac{1}{2} - \frac{3}{4} + \frac{1}{2} - \frac{1}{8}\right] = 16 \times \frac{1}{8} = 2$$

**Answer:** $\alpha = 2.0$ for laminar pipe flow

---

### Example 10.3: Flow Through a Diffuser

**Problem:** Air ($\rho = 1.2$ kg/m³) flows through a horizontal diffuser. At inlet: $A_1 = 0.01$ m², $V_1 = 40$ m/s, $p_1 = 100$ kPa. At exit: $A_2 = 0.04$ m². Assuming 85% efficiency, find:
(a) Exit velocity
(b) Exit pressure
(c) Head loss

**Solution:**

**(a) Exit Velocity:**

Continuity:
$$A_1 V_1 = A_2 V_2$$

$$V_2 = V_1\frac{A_1}{A_2} = 40 \times \frac{0.01}{0.04} = 10 \text{ m/s}$$

**(b) Exit Pressure:**

Ideal pressure rise (no losses):
$$p_{2,ideal} = p_1 + \frac{1}{2}\rho(V_1^2 - V_2^2)$$

$$= 100,000 + \frac{1}{2} \times 1.2 \times (40^2 - 10^2)$$

$$= 100,000 + 0.6 \times (1600 - 100) = 100,000 + 900 = 100,900 \text{ Pa}$$

Actual pressure rise (85% efficient):
$$\Delta p_{actual} = 0.85 \times (p_{2,ideal} - p_1)$$

$$p_2 = p_1 + 0.85(p_{2,ideal} - p_1) = 100,000 + 0.85 \times 900$$

$$= 100,765 \text{ Pa} = 100.765 \text{ kPa}$$

**(c) Head Loss:**

Energy equation:
$$\frac{p_1}{\rho g} + \frac{V_1^2}{2g} = \frac{p_2}{\rho g} + \frac{V_2^2}{2g} + h_L$$

$$h_L = \frac{1}{g}\left[\frac{p_1 - p_2}{\rho} + \frac{V_1^2 - V_2^2}{2}\right]$$

$$= \frac{1}{9.81}\left[\frac{100,000 - 100,765}{1.2} + \frac{1600 - 100}{2}\right]$$

$$= \frac{1}{9.81}\left[-637.5 + 750\right] = \frac{112.5}{9.81} = 11.47 \text{ m}$$

**Answer:**
- $V_2 = 10$ m/s
- $p_2 = 100.765$ kPa
- $h_L = 11.47$ m

---

### Example 10.4: Acceleration in Converging Flow

**Problem:** Water flows through a horizontal pipe that contracts linearly from $D_1 = 20$ cm to $D_2 = 10$ cm over a length $L = 1$ m. The inlet velocity is $V_1 = 1$ m/s. Find:
(a) Acceleration at the midpoint
(b) Pressure gradient at the midpoint

**Solution:**

**(a) Acceleration at Midpoint:**

At midpoint: $x = 0.5$ m

Diameter varies linearly:
$$D(x) = D_1 - (D_1 - D_2)\frac{x}{L} = 0.20 - (0.10)\frac{x}{1} = 0.20 - 0.10x$$

At $x = 0.5$ m: $D = 0.15$ m

Velocity from continuity:
$$V(x) = V_1\frac{A_1}{A(x)} = V_1\frac{D_1^2}{D(x)^2}$$

$$V(0.5) = 1 \times \frac{(0.20)^2}{(0.15)^2} = \frac{0.04}{0.0225} = 1.778 \text{ m/s}$$

Convective acceleration:
$$a = V\frac{dV}{dx}$$

From continuity: $V = V_1\frac{D_1^2}{D^2}$

$$\frac{dV}{dx} = V_1 D_1^2 \times (-2D^{-3})\frac{dD}{dx} = -2V_1\frac{D_1^2}{D^3}\frac{dD}{dx}$$

$$\frac{dD}{dx} = -0.10 \text{ m/m}$$

$$\frac{dV}{dx}\bigg|_{x=0.5} = -2 \times 1 \times \frac{(0.20)^2}{(0.15)^3} \times (-0.10)$$

$$= 2 \times \frac{0.04}{0.003375} \times 0.10 = 2.37 \text{ s}^{-1}$$

$$a = V \times \frac{dV}{dx} = 1.778 \times 2.37 = 4.21 \text{ m/s}^2$$

**(b) Pressure Gradient:**

Euler equation (horizontal, neglecting viscosity):
$$\rho V\frac{dV}{dx} = -\frac{dp}{dx}$$

$$\frac{dp}{dx} = -\rho V\frac{dV}{dx} = -1000 \times 1.778 \times 2.37$$

$$= -4214 \text{ Pa/m} = -4.21 \text{ kPa/m}$$

**Answer:**
- $a = 4.21$ m/s² (positive, accelerating)
- $\frac{dp}{dx} = -4.21$ kPa/m (pressure decreasing)

---

## References and Further Reading

### Textbooks

1. **Munson, B. R., Young, D. F., & Okiishi, T. H.** (2013). *Fundamentals of Fluid Mechanics* (7th ed.). Wiley.
   - Chapter 3: Elementary Fluid Dynamics
   - Chapter 5: Flow Analysis Using Control Volumes

2. **White, F. M.** (2016). *Fluid Mechanics* (8th ed.). McGraw-Hill Education.
   - Chapter 3: Integral Relations for a Control Volume
   - Chapter 4: Differential Relations for Fluid Flow

3. **Fox, R. W., McDonald, A. T., & Pritchard, P. J.** (2011). *Introduction to Fluid Mechanics* (8th ed.). Wiley.
   - Chapter 4: Fluid Kinematics
   - Chapter 6: Incompressible Inviscid Flow

### Online Resources

4. **MIT OpenCourseWare - Fluid Mechanics**
   - URL: https://ocw.mit.edu/courses/mechanical-engineering/2-25-advanced-fluid-mechanics-fall-2013/
   - Lectures on non-uniform flow and acceleration

5. **Khan Academy - Physics - Fluids**
   - URL: https://www.khanacademy.org/science/physics/fluids
   - Video tutorials on fluid dynamics concepts

6. **Wolfram MathWorld - Fluid Dynamics**
   - URL: https://mathworld.wolfram.com/topics/FluidDynamics.html
   - Mathematical descriptions of flow fields

7. **Engineering ToolBox - Fluid Mechanics**
   - URL: https://www.engineeringtoolbox.com/fluid-mechanics-t_21.html
   - Practical calculators and data

### Research Articles

8. **Schlichting, H., & Gersten, K.** (2017). *Boundary-Layer Theory* (9th ed.). Springer.
   - Detailed treatment of flow development and non-uniform velocity profiles

9. **Pope, S. B.** (2000). *Turbulent Flows*. Cambridge University Press.
   - Advanced treatment of non-uniform turbulent flows

### Video Lectures

10. **NPTEL - Fluid Mechanics**
    - URL: https://nptel.ac.in/courses/112/105/112105249/
    - IIT Delhi lectures on fluid mechanics

---

## Summary

Non-uniform motion in fluids represents the **general case** where velocity varies spatially. Key concepts include:

1. **Mathematical Description**: Velocity as a function of position $\vec{V}(x,y,z,t)$

2. **Types**: Gradually varied flow (GVF) and rapidly varied flow (RVF)

3. **Convective Acceleration**: $a_{\text{conv}} = (\vec{V} \cdot \nabla)\vec{V}$ - the hallmark of non-uniform flow

4. **Energy Correction**: Kinetic energy factor $\alpha > 1$ accounts for non-uniform velocity distribution

5. **Applications**: Nozzles, diffusers, pipe entrances, bends, flow around objects

Understanding non-uniform motion is essential for analyzing real fluid systems where spatial velocity variations dominate the flow behavior.

---

**End of Document**
