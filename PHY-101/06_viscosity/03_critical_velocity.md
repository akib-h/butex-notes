# Critical Velocity

*Date: April 8, 2026*
*Course: Physics / Fluid Mechanics*
*Topic Series: Viscosity & Fluid Flow*

---

## Table of Contents

1. [Introduction — Types of Flow](#1-introduction--types-of-flow)
2. [Definition of Critical Velocity](#2-definition-of-critical-velocity)
3. [Reynolds Number — The Key Criterion](#3-reynolds-number--the-key-criterion)
4. [Derivation of Critical Velocity Expression](#4-derivation-of-critical-velocity-expression)
5. [Factors Affecting Critical Velocity](#5-factors-affecting-critical-velocity)
6. [Laminar vs Turbulent Flow — Detailed Comparison](#6-laminar-vs-turbulent-flow--detailed-comparison)
7. [Transition Region](#7-transition-region)
8. [Reynolds' Dye Experiment](#8-reynolds-dye-experiment)
9. [Worked Examples](#9-worked-examples)
10. [Diagrams](#10-diagrams)
11. [References](#11-references)

---

## 1. Introduction — Types of Flow

When a fluid flows through a pipe or channel, two fundamentally different flow regimes are possible:

### 1.1 Laminar Flow (Streamline Flow)
- Fluid flows in **parallel, orderly layers** (streamlines)
- Adjacent layers do **not mix**
- Velocity at every point is **steady** (does not fluctuate with time)
- Dominates at **low velocities**

### 1.2 Turbulent Flow
- Fluid motion is **chaotic and irregular**
- Fluid layers **mix vigorously** — random eddies, vortices form
- Velocity at a point fluctuates **rapidly and randomly** with time
- Dominates at **high velocities**

---

## 2. Definition of Critical Velocity

**Critical velocity** $v_c$ is defined as:

> *The velocity of fluid flow below which the flow remains laminar (streamlined) and above which it becomes turbulent.*

At the critical velocity, the flow is at the **borderline** between laminar and turbulent regimes — a state sometimes called **transition flow**.

### Key Concept

The transition from laminar to turbulent flow is not sharp. There exists a **transition zone** (a range of velocities) rather than a single precise point.

---

## 3. Reynolds Number — The Key Criterion

The British physicist **Osborne Reynolds** (1883) showed experimentally that the transition from laminar to turbulent flow depends on a **dimensionless parameter** now called the **Reynolds number** $Re$:

$$\boxed{Re = \frac{\rho v D}{\eta} = \frac{v D}{\nu}}$$

Where:

| Symbol | Quantity | Unit |
|--------|----------|------|
| $\rho$ | Fluid density | $\text{kg m}^{-3}$ |
| $v$ | Average flow velocity | $\text{m s}^{-1}$ |
| $D$ | Characteristic length (pipe diameter) | $\text{m}$ |
| $\eta$ | Dynamic viscosity | $\text{Pa·s}$ |
| $\nu = \eta/\rho$ | Kinematic viscosity | $\text{m}^2 \text{s}^{-1}$ |

### 3.1 Physical Meaning

The Reynolds number represents the **ratio of inertial forces to viscous forces**:

$$Re = \frac{\text{Inertial forces}}{\text{Viscous forces}} = \frac{\rho v^2 / L}{\eta v / L^2} = \frac{\rho v L}{\eta}$$

- **Low $Re$** → viscous forces dominate → stable laminar flow
- **High $Re$** → inertial forces dominate → chaotic turbulent flow

### 3.2 Flow Regime Classification (Pipe Flow)

| Reynolds Number | Flow Regime |
|----------------|-------------|
| $Re < 2000$ | **Laminar** |
| $2000 \leq Re \leq 4000$ | **Transition** (unstable) |
| $Re > 4000$ | **Turbulent** |

> **Note:** The critical Reynolds number $Re_c \approx 2300$ is commonly cited for circular pipes under normal conditions. Under extremely controlled conditions (very smooth pipe, no vibrations), laminar flow has been maintained up to $Re \approx 100{,}000$.

---

## 4. Derivation of Critical Velocity Expression

From the definition of the Reynolds number, the **critical velocity** $v_c$ is obtained by setting $Re = Re_c$:

$$Re_c = \frac{\rho v_c D}{\eta}$$

Solving for $v_c$:

$$\boxed{v_c = \frac{Re_c \cdot \eta}{\rho D}}$$

Or equivalently, using kinematic viscosity:

$$v_c = \frac{Re_c \cdot \nu}{D}$$

### Interpretation

The critical velocity:
- **Increases** with viscosity $\eta$ (more viscous fluids remain laminar at higher speeds)
- **Decreases** with density $\rho$ (denser fluids transition earlier)
- **Decreases** with diameter $D$ (wider pipes transition at lower velocities)

### Dimensional Analysis Confirmation

$$[v_c] = \frac{[\eta]}{[\rho][D]} = \frac{\text{kg m}^{-1}\text{s}^{-1}}{\text{kg m}^{-3} \cdot \text{m}} = \text{m s}^{-1} \checkmark$$

---

## 5. Factors Affecting Critical Velocity

### 5.1 Viscosity $(\eta)$

$$v_c \propto \eta$$

Higher viscosity → fluid resists deformation → more stable laminar flow at higher velocities.

**Example:** Honey ($\eta \approx 2000\ \text{mPa·s}$) has a far higher $v_c$ than water ($\eta \approx 1\ \text{mPa·s}$).

### 5.2 Density $(\rho)$

$$v_c \propto \frac{1}{\rho}$$

Denser fluids have higher inertia → perturbations amplify more easily → lower $v_c$.

### 5.3 Pipe Diameter $(D)$

$$v_c \propto \frac{1}{D}$$

Larger diameter → perturbations have more room to grow → turbulence sets in at lower average velocities.

### 5.4 Pipe Surface Roughness

Rough pipe walls create **flow disturbances** that trigger turbulence at **lower** $Re$ than the theoretical value. This is why the critical $Re$ varies between ~2000 and 4000 in practice.

### 5.5 Inlet Conditions

Abrupt pipe inlets, bends, or valves create initial disturbances, lowering the effective critical velocity.

---

## 6. Laminar vs Turbulent Flow — Detailed Comparison

| Property | Laminar Flow | Turbulent Flow |
|----------|-------------|----------------|
| Streamlines | Parallel, ordered | Chaotic, irregular |
| Velocity profile | Parabolic (Poiseuille) | Flatter (plug-like) |
| Pressure drop | $\Delta P \propto v$ | $\Delta P \propto v^{1.75-2}$ |
| Energy loss | Low | High (eddy dissipation) |
| Heat/mass transfer | Slow (diffusion only) | Fast (convective mixing) |
| Occurs when | $Re < 2000$ | $Re > 4000$ |
| Mathematical treatment | Exact (Navier-Stokes solvable) | Statistical (complex) |

### Velocity Profile Comparison

**Laminar (Hagen-Poiseuille):**

$$u(r) = \frac{\Delta P}{4 \eta L}(R^2 - r^2)$$

Maximum at center: $u_{max} = \frac{\Delta P R^2}{4\eta L}$

Average velocity: $\bar{u} = \frac{u_{max}}{2}$

**Turbulent (Power Law approximation):**

$$\frac{u(r)}{u_{max}} \approx \left(1 - \frac{r}{R}\right)^{1/n}$$

Where $n \approx 7$ for $Re \approx 10^5$ (the "1/7th power law").

---

## 7. Transition Region

The transition from laminar to turbulent flow is a **complex process** involving:

1. **Linear instability** — small perturbations grow exponentially
2. **Non-linear saturation** — perturbations develop into coherent structures (Tollmien-Schlichting waves)
3. **Breakdown** — structures break down into fully turbulent eddies

In the transition zone ($2000 < Re < 4000$), flow alternates intermittently between laminar "slugs" and turbulent "puffs" — a phenomenon called **intermittency**.

---

## 8. Reynolds' Dye Experiment

### Setup

Osborne Reynolds (1883) used a transparent pipe with a dye injection at the inlet to visualise flow regimes:

1. **Dye source** at the pipe entrance
2. **Water reservoir** at a controlled head (controls $v$)
3. **Glass pipe** for observation

### Observations

| Velocity | Observation |
|----------|-------------|
| Low $v$ ($Re < 2000$) | Dye forms a **straight, thin thread** → Laminar |
| Medium $v$ (transition) | Dye thread begins to **waver and break up** → Transition |
| High $v$ ($Re > 4000$) | Dye **diffuses and disperses** throughout cross-section → Turbulent |

### Significance

Reynolds' experiment was the **first systematic demonstration** that flow regime depends on a single dimensionless parameter ($Re$), unifying the roles of velocity, pipe size, and fluid properties.

![Reynolds Dye Experiment](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Reynolds_fluid_turbulence_experiment_1883.jpg/640px-Reynolds_fluid_turbulence_experiment_1883.jpg)

*Figure: Osborne Reynolds' original experiment apparatus (1883).*

---

## 9. Worked Examples

### Example 1: Critical Velocity of Water in a Pipe

**Problem:** Water flows through a pipe of diameter $D = 2\ \text{cm}$. Given $\eta = 1.0 \times 10^{-3}\ \text{Pa·s}$, $\rho = 1000\ \text{kg/m}^3$. Find the critical velocity (use $Re_c = 2300$).

**Solution:**

$$v_c = \frac{Re_c \cdot \eta}{\rho D} = \frac{2300 \times 1.0 \times 10^{-3}}{1000 \times 0.02}$$

$$v_c = \frac{2.3}{20} = \mathbf{0.115\ \text{m/s}}$$

---

### Example 2: Reynolds Number Calculation

**Problem:** Oil ($\eta = 0.048\ \text{Pa·s}$, $\rho = 860\ \text{kg/m}^3$) flows at $v = 0.5\ \text{m/s}$ through a pipe of diameter $D = 5\ \text{cm}$. Determine the flow regime.

**Solution:**

$$Re = \frac{\rho v D}{\eta} = \frac{860 \times 0.5 \times 0.05}{0.048} = \frac{21.5}{0.048} \approx 448$$

Since $Re \approx 448 < 2000$, the flow is **laminar**.

---

### Example 3: Maximum Laminar Flow Rate

**Problem:** Find the maximum volumetric flow rate $Q$ for laminar flow of blood ($\eta = 3.5 \times 10^{-3}\ \text{Pa·s}$, $\rho = 1060\ \text{kg/m}^3$) in a capillary of diameter $D = 0.8\ \text{mm}$.

**Solution:**

$$v_c = \frac{2000 \times \eta}{\rho D} = \frac{2000 \times 3.5 \times 10^{-3}}{1060 \times 8 \times 10^{-4}} = \frac{7.0}{0.848} \approx 8.25\ \text{m/s}$$

$$Q_{max} = v_c \times \frac{\pi D^2}{4} = 8.25 \times \frac{\pi (8 \times 10^{-4})^2}{4} \approx 4.14 \times 10^{-6}\ \text{m}^3/\text{s}$$

$$\mathbf{Q_{max} \approx 4.14\ \mu\text{L/s}}$$

---

## 10. Diagrams

**Laminar vs Turbulent velocity profiles:**

![Velocity profiles](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Laminar_turbulent_transition.svg/800px-Laminar_turbulent_transition.svg.png)

*Figure 1: Velocity profiles for laminar (parabolic) and turbulent (flatter) flow in a pipe.*

**Flow regimes as a function of Reynolds number:**

```
Re:     0       2000      4000
        |--------|---------|-------->
        Laminar  Transition  Turbulent
                 (unstable)
```

---

## 11. References

### Textbooks
1. Reynolds, O. (1883). *An experimental investigation of the circumstances which determine whether the motion of water shall be direct or sinuous, and the law of resistance in parallel channels.* Philosophical Transactions of the Royal Society, 174, 935–982.
2. White, F.M. *Fluid Mechanics*, 8th ed. McGraw-Hill, 2016. — §6.1–6.3.
3. Munson, B.R. et al. *Fundamentals of Fluid Mechanics*, 7th ed. Wiley, 2013. — §8.1.
4. Cengel, Y.A. & Cimbala, J.M. *Fluid Mechanics*, 4th ed. McGraw-Hill, 2018. — Ch. 8.

### Online Sources
5. HyperPhysics — Reynolds Number: <http://hyperphysics.phy-astr.gsu.edu/hbase/fluids/reyn.html>
6. Engineering Toolbox — Reynolds Number: <https://www.engineeringtoolbox.com/reynolds-number-d_237.html>
7. Khan Academy — Laminar and Turbulent Flow: <https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/reynolds-number>
8. NASA — Reynolds Number: <https://www.grc.nasa.gov/WWW/K-12/airplane/reynolds.html>

---

*← [Newton's Law of Viscous Flow](02_newtons_law_coefficient_of_viscosity.md) | Next: [Poiseuille's Equation →](04_poiseuilles_equation.md)*
