# Streamline and Turbulent Flow in Fluid Mechanics

**Date:** January 27, 2026  
**Course:** PHY-101 - Fluid Mechanics  
**Topic:** Streamline and Turbulent Flow - Flow Patterns and Reynolds Number

---

## Table of Contents

1. [Introduction to Flow Regimes](#1-introduction-to-flow-regimes)
2. [Streamline (Laminar) Flow](#2-streamline-laminar-flow)
3. [Turbulent Flow](#3-turbulent-flow)
4. [Reynolds Number](#4-reynolds-number)
5. [Transition Between Flow Regimes](#5-transition-between-flow-regimes)
6. [Flow Visualization and Patterns](#6-flow-visualization-and-patterns)
7. [Characteristics Comparison](#7-characteristics-comparison)
8. [Velocity Profiles](#8-velocity-profiles)
9. [Energy Losses and Friction](#9-energy-losses-and-friction)
10. [Practical Applications](#10-practical-applications)
11. [Solved Examples](#11-solved-examples)

---

## 1. Introduction to Flow Regimes

### 1.1 Historical Background

The distinction between different flow regimes was first systematically studied by **Osborne Reynolds** in 1883 through his famous pipe flow experiments. He demonstrated that flow could exist in two distinctly different states: **laminar (streamline)** and **turbulent**.

### 1.2 Definition of Flow Regimes

Fluid flow can be classified into three primary regimes based on the nature of fluid motion:

1. **Laminar (Streamline) Flow:** Orderly, smooth flow with fluid particles moving in parallel layers
2. **Turbulent Flow:** Chaotic, irregular flow with random eddies and mixing
3. **Transitional Flow:** Intermediate regime between laminar and turbulent

### 1.3 Physical Significance

The flow regime determines:
- Energy losses (friction)
- Heat and mass transfer rates
- Mixing characteristics
- Flow stability
- Design parameters for piping, channels, and equipment

### 1.4 Reynolds' Original Experiment

**Experimental Setup:**
- Glass tube with water flow
- Dye injected at entrance
- Flow rate controlled by valve

**Observations:**

At **low velocities:**
- Dye streak remained straight and well-defined
- No mixing with surrounding water
- **Laminar flow**

At **high velocities:**
- Dye streak broke up and diffused
- Rapid mixing throughout cross-section
- **Turbulent flow**

---

## 2. Streamline (Laminar) Flow

### 2.1 Definition and Characteristics

**Streamline flow** (also called **laminar flow**) is characterized by smooth, orderly fluid motion in which adjacent layers slide past one another without macroscopic mixing.

**Key Characteristics:**

1. **Parallel Streamlines:** Flow occurs in parallel layers (laminae)
2. **No Cross-Stream Mixing:** Fluid particles follow well-defined paths
3. **Viscous Dominance:** Viscous forces dominate over inertial forces
4. **Predictable:** Governed by well-defined equations (Navier-Stokes)
5. **Low Energy Dissipation:** Minimal turbulent energy losses

### 2.2 Mathematical Description

In laminar flow, the velocity at any point can be expressed as:

$$\vec{V} = \vec{V}(x, y, z)$$

with **no random fluctuations**.

**Continuity Equation:**
$$\nabla \cdot \vec{V} = 0$$

**Navier-Stokes Equations:**
$$\rho(\vec{V} \cdot \nabla)\vec{V} = -\nabla p + \mu\nabla^2\vec{V} + \rho\vec{g}$$

These equations can often be solved analytically for laminar flow.

### 2.3 Laminar Flow in Pipes

**Velocity Profile (Hagen-Poiseuille Flow):**

For fully developed laminar flow in a circular pipe:

$$u(r) = u_{max}\left(1 - \frac{r^2}{R^2}\right)$$

where:
- $u_{max} = \frac{\Delta p \cdot R^2}{4\mu L}$ = maximum velocity (at centerline)
- $r$ = radial distance from center
- $R$ = pipe radius
- $\mu$ = dynamic viscosity
- $\Delta p$ = pressure drop over length $L$

**Relationship to Average Velocity:**
$$u_{max} = 2\bar{u}$$

where $\bar{u}$ is the average velocity.

**Volumetric Flow Rate:**

$$Q = \frac{\pi R^4 \Delta p}{8\mu L} = \frac{\pi D^4 \Delta p}{128\mu L}$$

This is the **Hagen-Poiseuille equation**.

**Pressure Drop:**

$$\Delta p = \frac{32\mu L \bar{u}}{D^2}$$

### 2.4 Friction Factor for Laminar Flow

**Darcy-Weisbach Equation:**

$$h_f = f\frac{L}{D}\frac{V^2}{2g}$$

For **laminar flow**, the friction factor is:

$$f = \frac{64}{Re}$$

where $Re$ is the Reynolds number.

This shows friction factor is **inversely proportional** to Reynolds number in laminar flow.

### 2.5 Examples of Laminar Flow

1. **Blood flow in capillaries** (small diameter, low velocity)
2. **Oil flow in pipelines** (high viscosity)
3. **Flow of honey or syrup** (very high viscosity)
4. **Groundwater flow through soil** (very low velocity)
5. **Flow between closely spaced parallel plates**
6. **Thin film flows** (coating processes)
7. **Microfluidic devices** (small scales)

### 2.6 Stability of Laminar Flow

Laminar flow is **stable** when:
- Reynolds number is low
- Disturbances are damped by viscosity
- Flow geometry is smooth

However, laminar flow can become **unstable** and transition to turbulent when:
- Reynolds number increases
- Disturbances are amplified
- Surface roughness exists

---

## 3. Turbulent Flow

### 3.1 Definition and Characteristics

**Turbulent flow** is characterized by chaotic, three-dimensional, time-dependent fluid motion with significant mixing and the formation of eddies at various scales.

**Key Characteristics:**

1. **Random Fluctuations:** Velocity and pressure fluctuate irregularly
2. **Three-Dimensional:** Motion occurs in all three directions
3. **Rapid Mixing:** Efficient transport of momentum, heat, and mass
4. **Eddy Formation:** Vortices (eddies) of various sizes
5. **High Energy Dissipation:** Significant energy losses
6. **Inertial Dominance:** Inertial forces dominate over viscous forces

### 3.2 Mathematical Description

In turbulent flow, any flow variable can be decomposed into **mean** and **fluctuating** components (Reynolds decomposition):

$$u = \bar{u} + u'$$
$$v = \bar{v} + v'$$
$$w = \bar{w} + w'$$
$$p = \bar{p} + p'$$

where:
- Overbar denotes time-averaged (mean) value
- Prime denotes fluctuating component

**Time Averaging:**

$$\bar{u} = \frac{1}{T}\int_0^T u \, dt$$

Properties of fluctuations:
- $\overline{u'} = 0$ (mean of fluctuation is zero)
- $\overline{u'^2} \neq 0$ (variance is non-zero)

### 3.3 Reynolds-Averaged Navier-Stokes (RANS)

Time-averaging the Navier-Stokes equations yields:

$$\rho\frac{D\bar{u}_i}{Dt} = -\frac{\partial \bar{p}}{\partial x_i} + \frac{\partial}{\partial x_j}\left[\mu\frac{\partial \bar{u}_i}{\partial x_j} - \rho\overline{u_i'u_j'}\right]$$

The term $-\rho\overline{u_i'u_j'}$ represents **Reynolds stresses** - additional stresses due to turbulent fluctuations.

**Reynolds Stress Tensor:**

$$\tau_{ij}^{turb} = -\rho\overline{u_i'u_j'} = \begin{bmatrix}
-\rho\overline{u'^2} & -\rho\overline{u'v'} & -\rho\overline{u'w'} \\
-\rho\overline{u'v'} & -\rho\overline{v'^2} & -\rho\overline{v'w'} \\
-\rho\overline{u'w'} & -\rho\overline{v'w'} & -\rho\overline{w'^2}
\end{bmatrix}$$

### 3.4 Turbulent Flow in Pipes

**Velocity Profile:**

For fully developed turbulent flow, the time-averaged velocity profile is "flatter" than laminar flow.

**Power Law Approximation:**

$$\frac{u}{u_{max}} = \left(1 - \frac{r}{R}\right)^{1/n}$$

where $n \approx 7$ for typical pipe flow (1/7th power law).

**Logarithmic Law (Law of the Wall):**

Near the wall:
$$\frac{u}{u_*} = \frac{1}{\kappa}\ln\left(\frac{yu_*}{\nu}\right) + B$$

where:
- $u_* = \sqrt{\tau_w/\rho}$ = friction velocity
- $\kappa \approx 0.41$ = von Kármán constant
- $B \approx 5.0$ = constant
- $y$ = distance from wall
- $\nu$ = kinematic viscosity

**Relationship to Average Velocity:**

$$u_{max} \approx 1.2\bar{u} \text{ to } 1.3\bar{u}$$

(Much closer to average than laminar flow)

### 3.5 Turbulent Kinetic Energy

**Definition:**

$$k = \frac{1}{2}\overline{(u'^2 + v'^2 + w'^2)}$$

Represents the kinetic energy per unit mass in the fluctuating velocity field.

**Dissipation Rate ($\epsilon$):**

Rate at which turbulent kinetic energy is converted to heat:

$$\epsilon = \nu\overline{\frac{\partial u_i'}{\partial x_j}\frac{\partial u_i'}{\partial x_j}}$$

### 3.6 Eddy Cascade (Energy Cascade)

Turbulent flow exhibits a **hierarchy of eddies**:

1. **Large eddies:** Size comparable to flow geometry, extract energy from mean flow
2. **Intermediate eddies:** Transfer energy to smaller scales
3. **Small eddies:** Dissipate energy as heat through viscosity

**Kolmogorov Scale:**

The smallest eddies have characteristic length:

$$\eta = \left(\frac{\nu^3}{\epsilon}\right)^{1/4}$$

At this scale, viscous dissipation occurs.

### 3.7 Friction Factor for Turbulent Flow

Unlike laminar flow, friction factor depends on:
- Reynolds number
- Surface roughness

**Smooth Pipes (Blasius equation for $Re < 10^5$):**

$$f = \frac{0.316}{Re^{0.25}}$$

**Colebrook-White Equation (general):**

$$\frac{1}{\sqrt{f}} = -2\log_{10}\left(\frac{\epsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}}\right)$$

where $\epsilon$ is the surface roughness.

**Moody Diagram:** Graphical representation of $f$ vs $Re$ for various $\epsilon/D$.

### 3.8 Examples of Turbulent Flow

1. **Water flow in large pipes** (high velocity, low viscosity)
2. **Air flow in ducts and ventilation systems**
3. **River and stream flows**
4. **Ocean currents**
5. **Atmospheric boundary layer**
6. **Flow around vehicles** (cars, aircraft)
7. **Industrial mixing tanks**
8. **Smoke rising from chimney**

---

## 4. Reynolds Number

### 4.1 Definition

The **Reynolds number (Re)** is a dimensionless parameter that represents the ratio of **inertial forces** to **viscous forces** in a fluid flow.

**General Formula:**

$$Re = \frac{\text{Inertial Forces}}{\text{Viscous Forces}} = \frac{\rho V L}{\mu} = \frac{V L}{\nu}$$

where:
- $\rho$ = fluid density (kg/m³)
- $V$ = characteristic velocity (m/s)
- $L$ = characteristic length (m)
- $\mu$ = dynamic viscosity (Pa·s or N·s/m²)
- $\nu = \mu/\rho$ = kinematic viscosity (m²/s)

### 4.2 Physical Interpretation

**High Reynolds Number (Re >> 1):**
- Inertial forces dominate
- Fluid "wants" to keep moving
- Viscosity less effective at damping disturbances
- **Turbulent flow** likely

**Low Reynolds Number (Re << 1):**
- Viscous forces dominate
- Fluid motion heavily damped
- Disturbances quickly suppressed
- **Laminar flow** maintained

### 4.3 Reynolds Number for Different Geometries

#### 4.3.1 Pipe Flow

$$Re = \frac{\rho V D}{\mu} = \frac{V D}{\nu}$$

where:
- $V$ = average velocity in pipe
- $D$ = pipe diameter

**Critical Values:**
- $Re < 2300$: **Laminar flow**
- $2300 < Re < 4000$: **Transitional flow**
- $Re > 4000$: **Turbulent flow**

Note: These values can vary with entrance conditions and surface roughness.

#### 4.3.2 Flow Over a Flat Plate

$$Re_x = \frac{\rho U x}{\mu} = \frac{U x}{\nu}$$

where:
- $U$ = freestream velocity
- $x$ = distance from leading edge

**Critical Value:**
- $Re_x \approx 5 \times 10^5$: Transition from laminar to turbulent boundary layer

#### 4.3.3 Flow Past a Sphere

$$Re = \frac{\rho V D}{\mu} = \frac{V D}{\nu}$$

where:
- $V$ = approach velocity
- $D$ = sphere diameter

**Flow regimes:**
- $Re < 1$: Stokes flow (creeping flow)
- $1 < Re < 100$: Laminar wake
- $100 < Re < 10^5$: Laminar boundary layer, turbulent wake
- $Re > 10^5$: Turbulent boundary layer

#### 4.3.4 Open Channel Flow

$$Re = \frac{V R_h}{\nu}$$

where:
- $V$ = average velocity
- $R_h = A/P$ = hydraulic radius
- $A$ = cross-sectional area
- $P$ = wetted perimeter

**Critical Value:**
- $Re \approx 500-2000$: Transition (varies with channel shape)

### 4.4 Derivation of Reynolds Number

Consider the Navier-Stokes equation (simplified):

$$\rho\frac{DV}{Dt} = -\nabla p + \mu\nabla^2 V$$

**Scale analysis:**
- Inertial term: $\rho\frac{V^2}{L}$
- Viscous term: $\mu\frac{V}{L^2}$

**Ratio:**

$$\frac{\text{Inertial}}{\text{Viscous}} = \frac{\rho V^2/L}{\mu V/L^2} = \frac{\rho V L}{\mu} = Re$$

### 4.5 Critical Reynolds Number

The **critical Reynolds number ($Re_{crit}$)** is the value at which transition from laminar to turbulent flow occurs.

**For pipe flow:**
- **Lower critical Re:** $Re_{crit} \approx 2300$ (laminar → transitional)
- **Upper critical Re:** $Re_{crit} \approx 4000$ (transitional → turbulent)

**Factors affecting $Re_{crit}$:**

1. **Entrance conditions:**
   - Smooth, rounded entrance → higher $Re_{crit}$
   - Sharp entrance → lower $Re_{crit}$

2. **Surface roughness:**
   - Smooth surface → higher $Re_{crit}$
   - Rough surface → lower $Re_{crit}$

3. **Disturbances:**
   - Quiet environment → higher $Re_{crit}$
   - Vibrations, noise → lower $Re_{crit}$

4. **Flow history:**
   - Gradually accelerated → can remain laminar at higher Re
   - Sudden changes → earlier transition

### 4.6 Reynolds Number in Different Fluids

**Water at 20°C:**
- $\nu = 1.0 \times 10^{-6}$ m²/s

For $D = 0.05$ m (5 cm pipe):
$$Re = \frac{V \times 0.05}{1.0 \times 10^{-6}} = 5 \times 10^4 \, V$$

Laminar if $V < 0.046$ m/s

**Air at 20°C:**
- $\nu = 1.5 \times 10^{-5}$ m²/s

For same diameter:
$$Re = \frac{V \times 0.05}{1.5 \times 10^{-6}} = 3.33 \times 10^3 \, V$$

Laminar if $V < 0.69$ m/s

**Oil (SAE 30) at 20°C:**
- $\nu \approx 3.5 \times 10^{-4}$ m²/s

For same diameter:
$$Re = \frac{V \times 0.05}{3.5 \times 10^{-4}} = 143 \, V$$

Laminar if $V < 16$ m/s (easily achievable)

### 4.7 Importance of Reynolds Number

1. **Flow Regime Prediction:** Determines whether flow is laminar or turbulent

2. **Similarity:** Flows with same $Re$ exhibit similar behavior (scaling)

3. **Friction Factor:** Determines relationship between friction and flow parameters

4. **Heat Transfer:** Affects convective heat transfer coefficient

5. **Drag Coefficient:** Influences drag on objects

6. **Mixing:** Determines mixing efficiency

7. **Design:** Critical for engineering applications (pipes, reactors, etc.)

---

## 5. Transition Between Flow Regimes

### 5.1 Transitional Flow

**Transitional flow** is an intermediate regime where the flow exhibits characteristics of both laminar and turbulent flow.

**For pipe flow:** $2300 < Re < 4000$

**Characteristics:**
- Intermittent turbulent bursts (slugs)
- Alternating laminar and turbulent regions
- Unpredictable behavior
- High sensitivity to disturbances
- Difficult to model analytically

### 5.2 Mechanism of Transition

**Linear Stability Theory:**

Small disturbances in laminar flow can be decomposed into normal modes:

$$u'(x,y,z,t) = \hat{u}(y)e^{i(\alpha x - \omega t)}$$

where:
- $\alpha$ = wavenumber
- $\omega$ = frequency

**Stability depends on:**
- If disturbances decay → **Stable (laminar maintained)**
- If disturbances grow → **Unstable (transition to turbulent)**

**Orr-Sommerfeld Equation:**

Governs the stability of parallel viscous flows. For pipe flow, it predicts:
- Laminar flow is linearly stable for all $Re$
- However, finite-amplitude disturbances can trigger transition

### 5.3 Tollmien-Schlichting Waves

In boundary layers, transition often involves:

1. **Tollmien-Schlichting (T-S) waves:** Two-dimensional instability waves
2. **Three-dimensional breakdown:** Formation of Λ-vortices
3. **Turbulent spots:** Localized regions of turbulence
4. **Fully turbulent flow:** Spots merge and spread

### 5.4 Bypass Transition

In high-disturbance environments, transition can "bypass" the T-S wave stage and occur more rapidly due to:
- High freestream turbulence
- Surface roughness
- Acoustic disturbances
- Pressure gradients

### 5.5 Factors Affecting Transition

1. **Reynolds Number:** Primary parameter

2. **Turbulence Intensity:**
   $$TI = \frac{\sqrt{\overline{u'^2}}}{\bar{U}} \times 100\%$$
   Higher TI → earlier transition

3. **Surface Roughness:**
   - Smooth surface delays transition
   - Roughness elements trip flow to turbulent

4. **Pressure Gradient:**
   - Favorable gradient ($dp/dx < 0$): stabilizes, delays transition
   - Adverse gradient ($dp/dx > 0$): destabilizes, promotes transition

5. **Flow Acceleration:**
   - Accelerating flow: stabilizing
   - Decelerating flow: destabilizing

6. **Wall Curvature:**
   - Concave wall: destabilizing (Görtler vortices)
   - Convex wall: stabilizing

7. **Heat Transfer:**
   - Heating can affect viscosity and stability

---

## 6. Flow Visualization and Patterns

### 6.1 Visualization Techniques

**Dye Injection (Reynolds' Method):**
- Inject dye into flow
- Observe dye behavior
- Laminar: dye streak remains intact
- Turbulent: dye rapidly mixes

**Smoke/Vapor Visualization:**
- Introduce smoke in air flows
- Illuminate with laser sheet
- Observe flow patterns

**Particle Image Velocimetry (PIV):**
- Seed flow with small particles
- Use laser pulses and cameras
- Compute velocity fields

**Hydrogen Bubble Technique:**
- Generate hydrogen bubbles via electrolysis
- Visualize streamlines in water

**Surface Flow Visualization:**
- Apply oil with suspended particles
- Observe wall shear stress patterns

### 6.2 Flow Patterns in Laminar Flow

**Pipe Flow:**
- Smooth, parallel streamlines
- Parabolic velocity profile
- Clear dye streak

**Boundary Layer:**
- Smooth, growing thickness
- Well-defined edge

**Flow Past Cylinder (low Re):**
- Symmetric flow
- No separation (very low Re)
- Separation with attached wake (moderate Re)

### 6.3 Flow Patterns in Turbulent Flow

**Pipe Flow:**
- Chaotic motion
- Rapid dye diffusion
- Flat velocity profile (except near wall)

**Boundary Layer:**
- Irregular outer edge
- Turbulent eddies
- Rapid growth

**Flow Past Cylinder (high Re):**
- Asymmetric, unsteady
- Vortex shedding (Kármán vortex street)
- Large wake region

### 6.4 Structures in Turbulent Flow

**Near-Wall Region:**
- **Viscous sublayer:** Very thin layer where flow is nearly laminar
- **Buffer layer:** Transition region
- **Logarithmic layer:** Fully turbulent, logarithmic velocity profile

**Coherent Structures:**
- **Streaks:** Alternating low- and high-speed regions near wall
- **Bursts:** Ejection of low-speed fluid away from wall
- **Sweeps:** High-speed fluid moving toward wall
- **Hairpin vortices:** Three-dimensional vortical structures

---

## 7. Characteristics Comparison

### 7.1 Comprehensive Comparison Table

| Property | Laminar Flow | Turbulent Flow |
|----------|--------------|----------------|
| **Reynolds Number** | $Re < 2300$ (pipe) | $Re > 4000$ (pipe) |
| **Flow Pattern** | Smooth, orderly, layered | Chaotic, irregular, mixing |
| **Streamlines** | Parallel, well-defined | Irregular, intersecting (time-averaged) |
| **Velocity Profile** | Parabolic (pipe) | Flatter, logarithmic near wall |
| **$u_{max}/\bar{u}$** | 2.0 | 1.2 - 1.3 |
| **Mixing** | Molecular diffusion only | Rapid, eddy-driven |
| **Energy Dissipation** | Low | High |
| **Friction Factor** | $f = 64/Re$ | $f = f(Re, \epsilon/D)$ |
| **Pressure Drop** | $\Delta p \propto V$ | $\Delta p \propto V^{1.75-2}$ |
| **Stability** | Stable at low Re | Self-sustaining |
| **Predictability** | Highly predictable | Statistical/averaged description |
| **Heat Transfer** | Low (conduction dominated) | High (convection dominated) |
| **Mass Transfer** | Low | High |
| **Eddy Formation** | None | Multiple scales of eddies |
| **Wall Shear Stress** | Lower | Higher |
| **Entrance Length** | $L_e \approx 0.06 Re \cdot D$ | $L_e \approx 4.4 Re^{1/6} \cdot D$ |

### 7.2 Velocity Profile Comparison

**Laminar (Pipe):**
$$\frac{u}{u_{max}} = 1 - \left(\frac{r}{R}\right)^2$$

**Turbulent (Pipe, 1/7th power law):**
$$\frac{u}{u_{max}} = \left(1 - \frac{r}{R}\right)^{1/7}$$

### 7.3 Friction Factor Comparison

**Laminar:**
$$f = \frac{64}{Re}$$

**Turbulent (Smooth pipe, Blasius):**
$$f = \frac{0.316}{Re^{0.25}}$$

For a given $Re = 10,000$:
- Laminar: $f = 0.0064$
- Turbulent: $f = 0.0316$ (about 5 times higher!)

### 7.4 Pressure Drop Comparison

For the same flow conditions:

$$\frac{(\Delta p)_{turb}}{(\Delta p)_{lam}} \approx \frac{f_{turb}}{f_{lam}} \times \frac{Re}{64}$$

At $Re = 10,000$:
$$\frac{(\Delta p)_{turb}}{(\Delta p)_{lam}} \approx \frac{0.0316}{0.0064} \times \frac{10,000}{64} \approx 772$$

Turbulent flow has **much higher** pressure drop!

---

## 8. Velocity Profiles

### 8.1 Laminar Flow Velocity Profile (Pipe)

**Equation:**
$$u(r) = u_{max}\left(1 - \frac{r^2}{R^2}\right)$$

**Derivation:**

Starting from Navier-Stokes for fully developed, axisymmetric flow:

$$\frac{1}{r}\frac{d}{dr}\left(r\frac{du}{dr}\right) = \frac{1}{\mu}\frac{dp}{dx}$$

With boundary conditions:
- $u(R) = 0$ (no-slip at wall)
- $\frac{du}{dr}\bigg|_{r=0} = 0$ (symmetry at center)

Solution yields parabolic profile with:
$$u_{max} = -\frac{R^2}{4\mu}\frac{dp}{dx}$$

**Average Velocity:**
$$\bar{u} = \frac{1}{A}\int_A u \, dA = \frac{u_{max}}{2}$$

**Volume Flow Rate:**
$$Q = \bar{u} \cdot A = \frac{\pi R^4}{8\mu}\left(-\frac{dp}{dx}\right)$$

### 8.2 Turbulent Flow Velocity Profile (Pipe)

**Power Law:**
$$\frac{u}{u_{max}} = \left(1 - \frac{r}{R}\right)^{1/n}$$

where $n$ varies with Reynolds number:

| Re | n |
|----|---|
| $4 \times 10^3$ | 6 |
| $1.1 \times 10^5$ | 7 |
| $1.1 \times 10^6$ | 8 |
| $2 \times 10^6$ | 10 |

Most commonly used: $n = 7$ (1/7th power law)

**Logarithmic Law (Law of the Wall):**

$$u^+ = \frac{u}{u_*} = \frac{1}{\kappa}\ln(y^+) + B$$

where:
- $u_* = \sqrt{\tau_w/\rho}$ = friction velocity
- $y^+ = \frac{yu_*}{\nu}$ = dimensionless wall distance
- $\kappa = 0.41$ = von Kármán constant
- $B = 5.0$ = constant

**Three Layers:**

1. **Viscous Sublayer ($y^+ < 5$):**
   $$u^+ = y^+$$

2. **Buffer Layer ($5 < y^+ < 30$):**
   Transition region

3. **Logarithmic Layer ($y^+ > 30$):**
   $$u^+ = \frac{1}{\kappa}\ln(y^+) + B$$

### 8.3 Boundary Layer Velocity Profiles

**Laminar Boundary Layer (Blasius solution):**

$$\frac{u}{U} = f'(\eta)$$

where $\eta = y\sqrt{\frac{U}{\nu x}}$ and $f$ satisfies:
$$f''' + \frac{1}{2}ff'' = 0$$

**Turbulent Boundary Layer (1/7th power law):**

$$\frac{u}{U} = \left(\frac{y}{\delta}\right)^{1/7}$$

where $\delta$ is boundary layer thickness.

---

## 9. Energy Losses and Friction

### 9.1 Head Loss in Pipes

**Darcy-Weisbach Equation:**

$$h_f = f\frac{L}{D}\frac{V^2}{2g}$$

where:
- $h_f$ = head loss (m)
- $f$ = friction factor (dimensionless)
- $L$ = pipe length (m)
- $D$ = pipe diameter (m)
- $V$ = average velocity (m/s)
- $g$ = gravitational acceleration (m/s²)

**Pressure Drop:**

$$\Delta p = \rho g h_f = f\frac{L}{D}\frac{\rho V^2}{2}$$

### 9.2 Friction Factor

**Laminar Flow:**
$$f = \frac{64}{Re}$$

Independent of surface roughness.

**Turbulent Flow:**

**Smooth Pipes:**
- Blasius ($Re < 10^5$): $f = 0.316Re^{-0.25}$
- Prandtl ($Re > 10^5$): $\frac{1}{\sqrt{f}} = 2.0\log_{10}(Re\sqrt{f}) - 0.8$

**Rough Pipes (Colebrook-White):**

$$\frac{1}{\sqrt{f}} = -2\log_{10}\left(\frac{\epsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}}\right)$$

where $\epsilon$ is surface roughness.

**Moody Chart:** Graphical solution showing $f$ vs $Re$ for various $\epsilon/D$.

### 9.3 Comparison of Energy Losses

For identical conditions ($Q$, $D$, $L$):

**Example:** $Re = 10,000$

Laminar:
$$f_{lam} = \frac{64}{10,000} = 0.0064$$

Turbulent:
$$f_{turb} = \frac{0.316}{(10,000)^{0.25}} = 0.0316$$

**Ratio:**
$$\frac{h_{f,turb}}{h_{f,lam}} = \frac{f_{turb}}{f_{lam}} = \frac{0.0316}{0.0064} \approx 5$$

Turbulent flow has **5 times higher** head loss!

### 9.4 Wall Shear Stress

**Definition:**
$$\tau_w = \mu\frac{\partial u}{\partial y}\bigg|_{y=0}$$

**Relationship to Friction Factor:**

$$\tau_w = f\frac{\rho V^2}{8}$$

**Laminar Flow:**
$$\tau_w = \frac{8\mu V}{R}$$

**Turbulent Flow:**
Higher due to momentum transfer by eddies.

---

## 10. Practical Applications

### 10.1 Pipe Flow Design

**Laminar Flow Applications:**
- Oil pipelines (high viscosity)
- Hydraulic systems (small diameters, moderate velocities)
- Blood flow in capillaries
- Microfluidic devices

**Design Considerations:**
- Lower pressure drops
- Predictable behavior
- Easy to model

**Turbulent Flow Applications:**
- Water distribution systems
- Gas pipelines
- Air conditioning ducts
- Industrial process piping

**Design Considerations:**
- Higher pressure drops (larger pumps needed)
- Better mixing
- Higher heat transfer

### 10.2 Heat Exchangers

**Heat Transfer Enhancement:**

Turbulent flow dramatically increases heat transfer:

$$Nu = \frac{hD}{k}$$

**Laminar:** $Nu \approx 3.66$ (constant for fully developed flow)

**Turbulent (Dittus-Boelter):** $Nu = 0.023Re^{0.8}Pr^{n}$

where $Pr = \nu/\alpha$ is Prandtl number.

At $Re = 10,000$ and $Pr = 7$ (water):
$$Nu_{turb} \approx 90 \quad \text{vs} \quad Nu_{lam} = 3.66$$

Turbulent flow provides **25 times higher** heat transfer coefficient!

### 10.3 Mixing Processes

**Laminar Flow:**
- Mixing by molecular diffusion only
- Very slow
- Requires long residence times
- Suitable for lamination, coating

**Turbulent Flow:**
- Rapid eddy-driven mixing
- Efficient homogenization
- Short residence times
- Essential for chemical reactors, combustion

### 10.4 Drag Reduction

**Objectives:**
- Reduce energy consumption
- Increase efficiency

**Methods:**

1. **Maintain Laminar Flow:**
   - Streamlined shapes
   - Smooth surfaces
   - Low velocities

2. **Turbulent Drag Reduction:**
   - Polymer additives (reduce turbulent fluctuations)
   - Riblets (surface modifications)
   - Boundary layer suction/blowing

### 10.5 Sediment Transport

**Laminar Flow:**
- Particles settle more easily
- Used in sedimentation tanks

**Turbulent Flow:**
- Particles remain suspended
- Important in rivers, coastal engineering
- Erosion and deposition processes

### 10.6 Biomedical Applications

**Blood Flow:**
- Aorta: $Re \approx 4000-6000$ (pulsatile turbulent)
- Arteries: $Re \approx 500-2000$ (transitional/laminar)
- Capillaries: $Re < 1$ (laminar, Stokes flow)

**Implications:**
- Turbulence in aorta → mixing, but potential vessel damage
- Laminar in capillaries → efficient gas exchange

### 10.7 Environmental Flows

**Rivers and Streams:**
- Usually turbulent ($Re > 10^4$)
- Important for pollutant dispersion
- Oxygen transfer at free surface

**Atmospheric Boundary Layer:**
- Highly turbulent
- Affects weather, pollutant transport
- Wind energy harvesting

---

## 11. Solved Examples

### Example 11.1: Determining Flow Regime

**Problem:** Water at 20°C ($\rho = 998$ kg/m³, $\mu = 1.002 \times 10^{-3}$ Pa·s) flows through a pipe of diameter $D = 5$ cm at a velocity of $V = 0.5$ m/s. Determine:
(a) Reynolds number
(b) Flow regime
(c) Maximum velocity if flow is laminar

**Solution:**

**(a) Reynolds Number:**

$$Re = \frac{\rho V D}{\mu} = \frac{998 \times 0.5 \times 0.05}{1.002 \times 10^{-3}}$$

$$= \frac{24.95}{1.002 \times 10^{-3}} = 24,900$$

**(b) Flow Regime:**

Since $Re = 24,900 > 4000$, the flow is **turbulent**.

**(c) Maximum Velocity (if laminar):**

For laminar flow: $Re < 2300$

$$Re = 2300 = \frac{\rho V_{max,lam} D}{\mu}$$

$$V_{max,lam} = \frac{2300 \times \mu}{\rho D} = \frac{2300 \times 1.002 \times 10^{-3}}{998 \times 0.05}$$

$$= \frac{2.305}{49.9} = 0.046 \text{ m/s} = 4.6 \text{ cm/s}$$

**Answer:**
- $Re = 24,900$
- Flow is turbulent
- For laminar flow, $V_{max} = 4.6$ cm/s

---

### Example 11.2: Comparison of Friction Factors

**Problem:** For flow in a smooth pipe at $Re = 50,000$, calculate:
(a) Friction factor if flow were laminar
(b) Actual friction factor (turbulent)
(c) Ratio of pressure drops

**Solution:**

**(a) Hypothetical Laminar Friction Factor:**

$$f_{lam} = \frac{64}{Re} = \frac{64}{50,000} = 0.00128$$

**(b) Turbulent Friction Factor (Blasius):**

$$f_{turb} = \frac{0.316}{Re^{0.25}} = \frac{0.316}{(50,000)^{0.25}} = \frac{0.316}{14.95} = 0.0211$$

**(c) Pressure Drop Ratio:**

For same $L$, $D$, $V$:

$$\frac{\Delta p_{turb}}{\Delta p_{lam}} = \frac{f_{turb}}{f_{lam}} = \frac{0.0211}{0.00128} = 16.5$$

**Answer:**
- Laminar $f = 0.00128$
- Turbulent $f = 0.0211$
- Turbulent pressure drop is **16.5 times higher**

---

### Example 11.3: Velocity Profile Calculations

**Problem:** Water flows through a 10 cm diameter pipe at an average velocity of 2 m/s. Calculate the maximum velocity if:
(a) Flow is laminar
(b) Flow is turbulent (use 1/7th power law)

**Solution:**

**(a) Laminar Flow:**

For laminar flow:
$$u_{max} = 2\bar{u} = 2 \times 2 = 4 \text{ m/s}$$

**(b) Turbulent Flow:**

For 1/7th power law, the average velocity relates to maximum as:

$$\bar{u} = \frac{49}{60}u_{max}$$

Therefore:
$$u_{max} = \frac{60}{49}\bar{u} = \frac{60}{49} \times 2 = 2.45 \text{ m/s}$$

**Comparison:**
- Laminar: $u_{max}/\bar{u} = 2.0$
- Turbulent: $u_{max}/\bar{u} = 1.22$

Turbulent profile is much flatter.

**Answer:**
- Laminar: $u_{max} = 4$ m/s
- Turbulent: $u_{max} = 2.45$ m/s

---

### Example 11.4: Transition Reynolds Number

**Problem:** Oil with kinematic viscosity $\nu = 1.0 \times 10^{-4}$ m²/s flows through a 2 cm diameter pipe. What is the maximum flow rate (L/min) for which the flow will remain laminar?

**Solution:**

For laminar flow: $Re < 2300$

$$Re = \frac{VD}{\nu} = 2300$$

$$V = \frac{2300 \times \nu}{D} = \frac{2300 \times 1.0 \times 10^{-4}}{0.02} = \frac{0.23}{0.02} = 11.5 \text{ m/s}$$

Flow rate:
$$Q = V \times A = 11.5 \times \frac{\pi (0.02)^2}{4} = 11.5 \times 3.14 \times 10^{-4}$$

$$= 3.61 \times 10^{-3} \text{ m}^3\text{/s}$$

Convert to L/min:
$$Q = 3.61 \times 10^{-3} \times 1000 \times 60 = 217 \text{ L/min}$$

**Answer:** Maximum flow rate for laminar flow is **217 L/min**

---

### Example 11.5: Head Loss Comparison

**Problem:** Water flows at 1 m/s through a 100 m long, 5 cm diameter horizontal pipe. Calculate head loss if:
(a) Flow is laminar ($Re = 1500$)
(b) Flow is turbulent ($Re = 50,000$)

**Solution:**

Given: $V = 1$ m/s, $L = 100$ m, $D = 0.05$ m

**(a) Laminar Flow ($Re = 1500$):**

$$f = \frac{64}{Re} = \frac{64}{1500} = 0.0427$$

$$h_f = f\frac{L}{D}\frac{V^2}{2g} = 0.0427 \times \frac{100}{0.05} \times \frac{1^2}{2 \times 9.81}$$

$$= 0.0427 \times 2000 \times 0.051 = 4.35 \text{ m}$$

**(b) Turbulent Flow ($Re = 50,000$):**

$$f = \frac{0.316}{Re^{0.25}} = \frac{0.316}{(50,000)^{0.25}} = 0.0211$$

$$h_f = 0.0211 \times \frac{100}{0.05} \times \frac{1^2}{2 \times 9.81}$$

$$= 0.0211 \times 2000 \times 0.051 = 2.15 \text{ m}$$

**Interesting Result:** Even though turbulent friction factor formula gives lower $f$ at this $Re$, let's verify Reynolds number is consistent.

**Check Reynolds number for given conditions:**
$$Re = \frac{VD}{\nu} = \frac{1 \times 0.05}{1.0 \times 10^{-6}} = 50,000$$

This confirms turbulent flow.

**Answer:**
- Laminar (hypothetically at $Re = 1500$): $h_f = 4.35$ m
- Turbulent (actual at $Re = 50,000$): $h_f = 2.15$ m

**Note:** At $Re = 50,000$, actual flow IS turbulent with lower $f$ than laminar extrapolation.

---

### Example 11.6: Determining Fluid Viscosity

**Problem:** In a Reynolds' demonstration, a dye streak remains stable in a 20 mm diameter tube up to a velocity of 1.2 m/s. Above this velocity, the dye disperses, indicating transition to turbulent flow. If the fluid density is 900 kg/m³, estimate the dynamic viscosity of the fluid.

**Solution:**

At transition: $Re = 2300$ (approximately)

$$Re = \frac{\rho V D}{\mu} = 2300$$

$$\mu = \frac{\rho V D}{Re} = \frac{900 \times 1.2 \times 0.02}{2300}$$

$$= \frac{21.6}{2300} = 0.0094 \text{ Pa·s} = 9.4 \text{ mPa·s}$$

**Answer:** Dynamic viscosity $\mu \approx 9.4$ mPa·s

(This is about 9 times the viscosity of water, possibly a light oil or glycerin solution)

---

### Example 11.7: Boundary Layer Transition

**Problem:** Air at 20°C ($\nu = 1.5 \times 10^{-5}$ m²/s) flows over a flat plate at 15 m/s. At what distance from the leading edge will the boundary layer transition from laminar to turbulent? Assume critical Reynolds number is $Re_x = 5 \times 10^5$.

**Solution:**

$$Re_x = \frac{U x}{\nu} = 5 \times 10^5$$

$$x_{crit} = \frac{Re_x \times \nu}{U} = \frac{5 \times 10^5 \times 1.5 \times 10^{-5}}{15}$$

$$= \frac{7.5}{15} = 0.5 \text{ m} = 50 \text{ cm}$$

**Answer:** Transition occurs at $x = 50$ cm from the leading edge.

**Implication:** Forward portion (0-50 cm) has laminar boundary layer; beyond 50 cm, turbulent boundary layer develops.

---

### Example 11.8: Power Law Velocity Profile

**Problem:** For turbulent flow in a pipe with 1/7th power law:
$$\frac{u}{u_{max}} = \left(1 - \frac{r}{R}\right)^{1/7}$$

Derive the relationship between $u_{max}$ and $\bar{u}$.

**Solution:**

Average velocity:
$$\bar{u} = \frac{1}{A}\int_A u \, dA = \frac{1}{\pi R^2}\int_0^R u(r) \cdot 2\pi r \, dr$$

$$= \frac{2}{R^2}\int_0^R u_{max}\left(1 - \frac{r}{R}\right)^{1/7} r \, dr$$

Let $\xi = 1 - r/R$, then $r = R(1-\xi)$ and $dr = -R \, d\xi$:

$$\bar{u} = \frac{2u_{max}}{R^2}\int_1^0 \xi^{1/7} \cdot R(1-\xi) \cdot (-R) \, d\xi$$

$$= 2u_{max}\int_0^1 \xi^{1/7}(1-\xi) \, d\xi$$

$$= 2u_{max}\left[\int_0^1 \xi^{1/7} \, d\xi - \int_0^1 \xi^{8/7} \, d\xi\right]$$

$$= 2u_{max}\left[\frac{\xi^{8/7}}{8/7}\bigg|_0^1 - \frac{\xi^{15/7}}{15/7}\bigg|_0^1\right]$$

$$= 2u_{max}\left[\frac{7}{8} - \frac{7}{15}\right] = 2u_{max}\left[\frac{105 - 56}{120}\right]$$

$$= 2u_{max} \times \frac{49}{120} = \frac{49}{60}u_{max}$$

Therefore:
$$u_{max} = \frac{60}{49}\bar{u} \approx 1.224\bar{u}$$

**Answer:** For 1/7th power law, $u_{max} = 1.224\bar{u}$

---

## References and Further Reading

### Classic Textbooks

1. **Reynolds, O.** (1883). "An experimental investigation of the circumstances which determine whether the motion of water shall be direct or sinuous, and of the law of resistance in parallel channels." *Philosophical Transactions of the Royal Society*, 174, 935-982.
   - Original paper establishing flow regimes

2. **Schlichting, H., & Gersten, K.** (2017). *Boundary-Layer Theory* (9th ed.). Springer.
   - Comprehensive treatment of laminar and turbulent boundary layers

3. **White, F. M.** (2016). *Fluid Mechanics* (8th ed.). McGraw-Hill Education.
   - Chapter 6: Viscous Flow in Ducts
   - Chapter 7: Flow Past Immersed Bodies

4. **Munson, B. R., Young, D. F., Okiishi, T. H., & Huebsch, W. W.** (2013). *Fundamentals of Fluid Mechanics* (7th ed.). Wiley.
   - Chapter 8: Viscous Flow in Pipes

5. **Pope, S. B.** (2000). *Turbulent Flows*. Cambridge University Press.
   - Advanced treatment of turbulence theory and modeling

### Turbulence and Advanced Topics

6. **Tennekes, H., & Lumley, J. L.** (1972). *A First Course in Turbulence*. MIT Press.
   - Classical introduction to turbulence

7. **Davidson, P. A.** (2015). *Turbulence: An Introduction for Scientists and Engineers* (2nd ed.). Oxford University Press.
   - Modern treatment of turbulence

8. **Durbin, P. A., & Pettersson Reif, B. A.** (2011). *Statistical Theory and Modeling for Turbulent Flows* (2nd ed.). Wiley.
   - Statistical description and modeling

### Online Resources

9. **MIT OpenCourseWare - Advanced Fluid Mechanics**
   - URL: https://ocw.mit.edu/courses/mechanical-engineering/2-25-advanced-fluid-mechanics-fall-2013/
   - Lectures on turbulence and boundary layers

10. **NPTEL - Fluid Mechanics (IIT Bombay)**
    - URL: https://nptel.ac.in/courses/112/101/112101004/
    - Video lectures covering Reynolds number and flow regimes

11. **Moody Diagram Interactive Tool**
    - URL: https://www.engineeringtoolbox.com/moody-diagram-d_587.html
    - Interactive friction factor calculations

12. **Reynolds Number Calculator**
    - URL: https://www.engineeringtoolbox.com/reynolds-number-d_237.html
    - Online calculator with various fluid properties

### Visualization Resources

13. **Van Dyke, M.** (1982). *An Album of Fluid Motion*. Parabolic Press.
    - Stunning photographs of flow phenomena

14. **FYFD (Fuck Yeah Fluid Dynamics)**
    - URL: https://fyfluiddynamics.com/
    - Modern visualizations and explanations

15. **National Committee for Fluid Mechanics Films**
    - Classic educational films including "Flow Visualization"
    - Available on YouTube

### Research Articles

16. **Patel, V. C., & Head, M. R.** (1969). "Some observations on skin friction and velocity profiles in fully developed pipe and channel flows." *Journal of Fluid Mechanics*, 38(1), 181-201.
    - Experimental data on turbulent pipe flow

17. **Coles, D.** (1956). "The law of the wake in the turbulent boundary layer." *Journal of Fluid Mechanics*, 1(2), 191-226.
    - Wake component in turbulent boundary layers

### Standards and Engineering References

18. **Cengel, Y. A., & Cimbala, J. M.** (2014). *Fluid Mechanics: Fundamentals and Applications* (3rd ed.). McGraw-Hill.
    - Chapter 8: Internal Flow
    - Practical engineering applications

19. **Crane Technical Paper No. 410** (2013). *Flow of Fluids Through Valves, Fittings, and Pipe*.
    - Industry standard for pipe flow calculations

20. **ASME (American Society of Mechanical Engineers)** standards for fluid flow measurement
    - Practical guidelines for industrial applications

---

## Summary

The distinction between **laminar (streamline)** and **turbulent** flow is fundamental in fluid mechanics:

### Laminar Flow
- **Smooth, orderly**, parallel layers
- Low Reynolds number ($Re < 2300$ for pipes)
- Viscous forces dominate
- Parabolic velocity profile
- Lower friction losses
- Poor mixing

### Turbulent Flow
- **Chaotic, random**, three-dimensional
- High Reynolds number ($Re > 4000$ for pipes)
- Inertial forces dominate
- Flatter velocity profile
- Higher friction losses
- Excellent mixing

### Reynolds Number
$$Re = \frac{\rho VL}{\mu} = \frac{VL}{\nu}$$

- **Primary parameter** determining flow regime
- Ratio of inertial to viscous forces
- Different critical values for different geometries

### Practical Implications
1. **Energy consumption:** Turbulent flow requires more pumping power
2. **Heat transfer:** Turbulent flow provides better heat transfer
3. **Mixing:** Turbulent flow essential for rapid mixing
4. **Design:** Flow regime affects sizing of pumps, heat exchangers, reactors

Understanding these concepts is crucial for proper analysis and design of fluid systems in engineering applications.

---

**End of Document**
