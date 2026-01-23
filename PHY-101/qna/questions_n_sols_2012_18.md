# Physics-I Question Bank Solutions (2012-18)

**Subject:** PHY-101 | **Topic:** Comprehensive Question Bank Solutions  
**Last Updated:** 2026-01-23  
**Tags:** `physics`, `question-bank`, `exam-prep`, `2012-2018`

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Elasticity](#elasticity)
3. [Fluid Mechanics](#fluid-mechanics)
4. [Surface Tension](#surface-tension)
5. [Viscosity](#viscosity)
6. [Thermodynamics](#thermodynamics)
7. [Waves and Oscillations](#waves-and-oscillations)
8. [Optics](#optics)
9. [Modern Physics](#modern-physics)
10. [Practice Problems](#practice-problems)
11. [References](#references)

---

## Introduction

This comprehensive solution guide covers Physics-I questions from BUTEX examinations (2012-2018). Each solution includes detailed explanations, relevant formulas, and practical applications in textile engineering.

> **Note:** Cross-reference with your lecture notes and the official textbook. These solutions follow standard SI units unless specified otherwise.

---

## Elasticity

### Theory Questions

#### Q1: Define Hooke's Law and explain its limitations

**Hooke's Law** states that within the elastic limit, stress is directly proportional to strain:

$$
\sigma = E \cdot \varepsilon
$$

Where:
- $\sigma$ = Stress (N/m² or Pa)
- $E$ = Young's Modulus (N/m²)
- $\varepsilon$ = Strain (dimensionless)

**Limitations:**

1. **Valid only within elastic limit** - Beyond the yield point, materials exhibit plastic deformation
2. **Assumes homogeneous materials** - Not applicable to composite materials without modification
3. **Temperature dependent** - Elastic modulus varies with temperature
4. **Time-independent** - Doesn't account for viscoelastic behavior (creep, stress relaxation)

**Textile Application:**
In fiber testing, Hooke's law applies to the initial loading region of stress-strain curves. Natural fibers like cotton show linear behavior up to ~2% strain, while synthetic fibers like polyester maintain linearity up to ~5% strain.

**References:**
- [Engineering Mechanics of Solids - MIT OpenCourseWare](https://ocw.mit.edu/courses/mechanical-engineering/)
- [ASTM D3822: Standard Test Method for Tensile Properties of Single Textile Fibers](https://www.astm.org/d3822-14.html)

---

#### Q2: Derive the expression for strain energy stored in a stretched wire

**Given:** Wire of length $L$, cross-sectional area $A$, stretched by force $F$

**Solution:**

When a wire is stretched by a small amount $dl$, work done is:

$$
dW = F \cdot dl
$$

From Hooke's Law:

$$
F = \frac{Y \cdot A \cdot l}{L}
$$

Where $Y$ is Young's modulus and $l$ is extension.

Substituting:

$$
dW = \frac{Y \cdot A \cdot l}{L} \cdot dl
$$

Total work done (strain energy) from $l = 0$ to $l = \Delta L$:

$$
U = \int_0^{\Delta L} \frac{Y \cdot A \cdot l}{L} \, dl = \frac{Y \cdot A}{L} \cdot \frac{l^2}{2} \Big|_0^{\Delta L}
$$

$$
U = \frac{1}{2} \cdot \frac{Y \cdot A \cdot (\Delta L)^2}{L}
$$

**Alternative forms:**

Using $\text{Stress} = \frac{F}{A}$ and $\text{Strain} = \frac{\Delta L}{L}$:

$$
U = \frac{1}{2} \cdot \text{Stress} \times \text{Strain} \times \text{Volume}
$$

$$
U = \frac{1}{2} \cdot \frac{\text{Stress}^2}{Y} \times \text{Volume}
$$

**Textile Context:**
This formula is critical in understanding energy absorption during fiber deformation in impact testing and calculating resilience of textile materials.

**Reference:**
- [Strength of Materials - University of Cambridge](https://www.eng.cam.ac.uk/teaching/courses)

---

### Numerical Problems

#### Example 1: Young's Modulus Calculation

**Problem:** A steel wire of length 2 m and diameter 0.5 mm is stretched by 2 mm when a load of 10 kg is applied. Calculate Young's modulus.

**Given:**
- Original length, $L = 2$ m $= 200$ cm
- Diameter, $d = 0.5$ mm $= 0.05$ cm
- Extension, $\Delta L = 2$ mm $= 0.2$ cm
- Load, $m = 10$ kg
- $g = 9.8$ m/s²

**Find:** Young's modulus, $Y$

**Solution:**

Force applied:
$$
F = mg = 10 \times 9.8 = 98 \text{ N}
$$

Cross-sectional area:
$$
A = \pi r^2 = \pi \left(\frac{d}{2}\right)^2 = \pi \left(\frac{0.05}{2}\right)^2 = 1.963 \times 10^{-3} \text{ cm}^2 = 1.963 \times 10^{-7} \text{ m}^2
$$

Using Young's modulus formula:
$$
Y = \frac{F \cdot L}{A \cdot \Delta L} = \frac{98 \times 2}{1.963 \times 10^{-7} \times 0.002}
$$

$$
Y = \frac{196}{3.926 \times 10^{-10}} = 4.99 \times 10^{11} \text{ N/m}^2
$$

**Answer:** $Y = 5.0 \times 10^{11}$ N/m² (approximately 500 GPa)

> **Note:** Typical steel has $Y \approx 200$ GPa. This high value suggests measurement errors or the wire might be high-carbon steel.

---

#### Example 2: Bulk Modulus Problem

**Problem:** A sphere of radius 10 cm is subjected to a uniform pressure of $10^8$ N/m². If the bulk modulus is $10^{11}$ N/m², find the change in volume.

**Given:**
- Radius, $r = 10$ cm $= 0.1$ m
- Pressure, $P = 10^8$ N/m²
- Bulk modulus, $K = 10^{11}$ N/m²

**Find:** Change in volume, $\Delta V$

**Solution:**

Original volume:
$$
V = \frac{4}{3}\pi r^3 = \frac{4}{3} \times 3.14159 \times (0.1)^3 = 4.189 \times 10^{-3} \text{ m}^3
$$

Bulk modulus definition:
$$
K = -\frac{P}{\Delta V / V}
$$

Rearranging:
$$
\Delta V = -\frac{P \cdot V}{K} = -\frac{10^8 \times 4.189 \times 10^{-3}}{10^{11}}
$$

$$
\Delta V = -4.189 \times 10^{-6} \text{ m}^3 = -4.19 \text{ cm}^3
$$

**Answer:** Volume decreases by 4.19 cm³ (negative sign indicates compression)

**Reference:**
- [Bulk Modulus - HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/permot3.html)

---

## Fluid Mechanics

### Theory Questions

#### Q3: State and derive Bernoulli's Equation

**Bernoulli's Principle** states that for an incompressible, non-viscous fluid in streamline flow, the total mechanical energy per unit volume remains constant.

**Derivation:**

Consider a fluid element moving through a pipe with varying cross-section. Applying work-energy theorem:

Work done by pressure forces + Work done by gravity = Change in kinetic energy

For a small displacement $ds$:

$$
P_1 A_1 ds_1 - P_2 A_2 ds_2 - \rho g A_1 ds_1 h_1 + \rho g A_2 ds_2 h_2 = \frac{1}{2} \rho A_1 ds_1 v_1^2 - \frac{1}{2} \rho A_2 ds_2 v_2^2
$$

Using continuity equation ($A_1 v_1 = A_2 v_2$) and simplifying:

$$
P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2
$$

**General form:**

$$
P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}
$$

**Terms:**
- $P$ = Static pressure (pressure energy per unit volume)
- $\frac{1}{2}\rho v^2$ = Dynamic pressure (kinetic energy per unit volume)
- $\rho g h$ = Hydrostatic pressure (potential energy per unit volume)

**Textile Application:**
Bernoulli's equation is fundamental in understanding:
- Air jet weaving (high-velocity air flow)
- Dyeing liquor circulation systems
- Pneumatic fiber transport
- Spray coating processes

**References:**
- [Fluid Mechanics - Khan Academy](https://www.khanacademy.org/science/physics/fluids)
- [Bernoulli's Equation - MIT OpenCourseWare](https://ocw.mit.edu/courses/mathematics/)

---

#### Q4: Explain the continuity equation for fluid flow

The **continuity equation** expresses conservation of mass for fluid flow. For an incompressible fluid:

$$
A_1 v_1 = A_2 v_2 = \text{constant}
$$

Or in differential form:

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0
$$

**For incompressible fluids** ($\rho = $ constant):

$$
\nabla \cdot \vec{v} = 0
$$

**Physical interpretation:**
The product of cross-sectional area and velocity remains constant along a streamline. When area decreases, velocity increases proportionally.

**Derivation:**

Consider a pipe with varying cross-section. Mass flow rate entering section 1:

$$
\dot{m}_1 = \rho A_1 v_1
$$

Mass flow rate leaving section 2:

$$
\dot{m}_2 = \rho A_2 v_2
$$

By conservation of mass: $\dot{m}_1 = \dot{m}_2$

Therefore:
$$
\rho A_1 v_1 = \rho A_2 v_2
$$

For incompressible fluids ($\rho_1 = \rho_2$):

$$
A_1 v_1 = A_2 v_2
$$

**Textile Example:**
In spinning processes, as the fiber bundle passes through drafting rollers with decreasing diameters, the linear velocity increases while maintaining constant mass flow rate.

**Reference:**
- [Continuity Equation - Engineering ToolBox](https://www.engineeringtoolbox.com/)

---

### Numerical Problems

#### Example 3: Bernoulli's Equation Application

**Problem:** Water flows through a horizontal pipe. At section A (diameter 10 cm), pressure is 100 kPa and velocity is 2 m/s. Find the pressure at section B where diameter is 5 cm.

**Given:**
- $d_A = 10$ cm, $d_B = 5$ cm
- $P_A = 100$ kPa $= 100,000$ Pa
- $v_A = 2$ m/s
- $\rho_{\text{water}} = 1000$ kg/m³
- Horizontal pipe: $h_A = h_B$

**Find:** $P_B$

**Solution:**

**Step 1:** Calculate areas
$$
A_A = \pi \left(\frac{d_A}{2}\right)^2 = \pi (0.05)^2 = 7.854 \times 10^{-3} \text{ m}^2
$$

$$
A_B = \pi \left(\frac{d_B}{2}\right)^2 = \pi (0.025)^2 = 1.963 \times 10^{-3} \text{ m}^2
$$

**Step 2:** Apply continuity equation
$$
A_A v_A = A_B v_B
$$

$$
v_B = \frac{A_A v_A}{A_B} = \frac{7.854 \times 10^{-3} \times 2}{1.963 \times 10^{-3}} = 8 \text{ m/s}
$$

**Step 3:** Apply Bernoulli's equation
$$
P_A + \frac{1}{2}\rho v_A^2 = P_B + \frac{1}{2}\rho v_B^2
$$

$$
P_B = P_A + \frac{1}{2}\rho(v_A^2 - v_B^2)
$$

$$
P_B = 100,000 + \frac{1}{2} \times 1000 \times (2^2 - 8^2)
$$

$$
P_B = 100,000 + 500 \times (4 - 64) = 100,000 - 30,000 = 70,000 \text{ Pa}
$$

**Answer:** $P_B = 70$ kPa

**Interpretation:** As velocity increases from 2 m/s to 8 m/s, pressure decreases from 100 kPa to 70 kPa, demonstrating Bernoulli's principle.

---

#### Example 4: Torricelli's Theorem

**Problem:** A tank contains water up to a height of 5 m. A hole is made at the bottom. Find the velocity of efflux.

**Given:**
- Height of water, $h = 5$ m
- $g = 9.8$ m/s²

**Find:** Velocity of efflux, $v$

**Solution:**

Applying Bernoulli's equation between top surface (point 1) and hole (point 2):

At top: $P_1 = P_{\text{atm}}$, $v_1 \approx 0$ (large tank), $h_1 = h$  
At hole: $P_2 = P_{\text{atm}}$, $v_2 = v$, $h_2 = 0$

$$
P_{\text{atm}} + 0 + \rho g h = P_{\text{atm}} + \frac{1}{2}\rho v^2 + 0
$$

Simplifying:
$$
\rho g h = \frac{1}{2}\rho v^2
$$

$$
v = \sqrt{2gh}
$$

**Torricelli's Theorem:** The velocity of efflux is the same as a freely falling body from height $h$.

Substituting values:
$$
v = \sqrt{2 \times 9.8 \times 5} = \sqrt{98} = 9.90 \text{ m/s}
$$

**Answer:** Velocity of efflux = 9.90 m/s

**Reference:**
- [Torricelli's Law - HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/toric.html)

---

## Surface Tension

### Theory Questions

#### Q5: Define surface tension and explain its molecular origin

**Surface Tension** ($\gamma$ or $T$) is the force per unit length acting tangentially along the surface of a liquid, perpendicular to any line drawn on the surface.

$$
\gamma = \frac{F}{L}
$$

**Units:** N/m or J/m² (energy per unit area)

**Molecular Origin:**

Molecules in the bulk liquid experience equal attractive forces in all directions. However, molecules at the surface experience a net inward force due to:

1. **Cohesive forces** - Attractions between like molecules (water-water)
2. **Adhesive forces** - Attractions between unlike molecules (water-air)

Since cohesive forces dominate for most liquids, surface molecules are pulled inward, creating **surface tension**. The liquid surface acts like a stretched elastic membrane.

**Energy perspective:**
Surface tension represents the work required to increase surface area by one unit:

$$
W = \gamma \cdot \Delta A
$$

**Factors affecting surface tension:**

| Factor | Effect |
|:-------|:-------|
| Temperature | ↑ Temperature → ↓ Surface tension |
| Impurities | Surfactants reduce surface tension |
| Nature of liquid | Polar liquids (water) have higher γ |

**Typical values:**
- Water at 20°C: γ = 72.8 mN/m
- Mercury at 20°C: γ = 486 mN/m
- Ethanol at 20°C: γ = 22.3 mN/m

**Textile Applications:**
1. **Wetting and penetration** - Dye uptake depends on surface tension
2. **Detergency** - Surfactants lower surface tension for better cleaning
3. **Sizing** - Controlled surface tension for uniform coating
4. **Fiber contact angle** - Determines water repellency

**References:**
- [Surface Tension - LibreTexts Chemistry](https://chem.libretexts.org/)
- [Capillarity and Surface Tension - MIT](https://web.mit.edu/)

---

#### Q6: Derive the expression for excess pressure inside a soap bubble

**Case 1: Liquid Drop (one surface)**

Consider a spherical liquid drop of radius $r$ in equilibrium. The excess pressure inside ($P_{\text{in}} - P_{\text{out}}$) balances the surface tension forces.

Force due to excess pressure (outward):
$$
F_{\text{pressure}} = \Delta P \cdot \pi r^2
$$

Force due to surface tension (inward):
$$
F_{\text{tension}} = \gamma \cdot 2\pi r
$$

At equilibrium: $F_{\text{pressure}} = F_{\text{tension}}$

$$
\Delta P \cdot \pi r^2 = \gamma \cdot 2\pi r
$$

$$
\Delta P = \frac{2\gamma}{r}
$$

**Case 2: Soap Bubble (two surfaces)**

A soap bubble has two surfaces: outer and inner. Each contributes to surface tension force.

Total surface tension force:
$$
F_{\text{tension}} = 2 \times \gamma \cdot 2\pi r = 4\pi r \gamma
$$

Force balance:
$$
\Delta P \cdot \pi r^2 = 4\pi r \gamma
$$

$$
\Delta P = \frac{4\gamma}{r}
$$

**Summary:**

| System | Excess Pressure |
|:-------|:----------------|
| Liquid drop | $\Delta P = \frac{2\gamma}{r}$ |
| Soap bubble | $\Delta P = \frac{4\gamma}{r}$ |
| Air bubble in liquid | $\Delta P = \frac{2\gamma}{r}$ |

**Key insight:** Smaller bubbles have higher internal pressure. This is why small bubbles blow into larger ones when connected.

**Reference:**
- [Young-Laplace Equation - Wolfram](http://mathworld.wolfram.com/Young-LaplaceEquation.html)

---

### Numerical Problems

#### Example 5: Capillary Rise

**Problem:** A capillary tube of radius 0.5 mm is dipped vertically in water. Calculate the height of water rise. (Surface tension of water = 72 mN/m, contact angle = 0°, density = 1000 kg/m³)

**Given:**
- Radius, $r = 0.5$ mm $= 5 \times 10^{-4}$ m
- Surface tension, $\gamma = 72$ mN/m $= 0.072$ N/m
- Contact angle, $\theta = 0°$ (perfect wetting)
- Density, $\rho = 1000$ kg/m³
- $g = 9.8$ m/s²

**Find:** Height of capillary rise, $h$

**Solution:**

The capillary rise formula (derived from force balance):

$$
h = \frac{2\gamma \cos\theta}{\rho g r}
$$

Substituting values:
$$
h = \frac{2 \times 0.072 \times \cos(0°)}{1000 \times 9.8 \times 5 \times 10^{-4}}
$$

$$
h = \frac{2 \times 0.072 \times 1}{4.9} = \frac{0.144}{4.9} = 0.0294 \text{ m}
$$

**Answer:** $h = 2.94$ cm or approximately 3 cm

**Physical explanation:**
The upward pull due to surface tension balances the weight of the liquid column. Smaller radius tubes show greater capillary rise.

**Textile relevance:**
Capillary action is crucial in:
- Wicking properties of fabrics
- Moisture transport in textiles
- Dyeing and finishing processes

**Reference:**
- [Capillary Action - Physics Classroom](https://www.physicsclassroom.com/)

---

#### Example 6: Soap Bubble Pressure

**Problem:** Two soap bubbles of radii 2 cm and 3 cm coalesce to form a single bubble. Find the radius of the new bubble if temperature remains constant.

**Given:**
- $r_1 = 2$ cm, $r_2 = 3$ cm
- Constant temperature (isothermal process)

**Find:** Radius of combined bubble, $R$

**Solution:**

For isothermal process, total volume is conserved:

$$
V_1 + V_2 = V_{\text{new}}
$$

$$
\frac{4}{3}\pi r_1^3 + \frac{4}{3}\pi r_2^3 = \frac{4}{3}\pi R^3
$$

Simplifying:
$$
r_1^3 + r_2^3 = R^3
$$

$$
R^3 = 2^3 + 3^3 = 8 + 27 = 35
$$

$$
R = \sqrt[3]{35} = 3.27 \text{ cm}
$$

**Answer:** Radius of new bubble = 3.27 cm

**Verification:** Volume conservation
- $V_1 = \frac{4}{3}\pi(2)^3 = 33.51$ cm³
- $V_2 = \frac{4}{3}\pi(3)^3 = 113.10$ cm³
- $V_{\text{total}} = 146.61$ cm³
- $V_{\text{new}} = \frac{4}{3}\pi(3.27)^3 = 146.51$ cm³ ✓

---

## Viscosity

### Theory Questions

#### Q7: Define coefficient of viscosity and derive its dimensional formula

**Coefficient of Viscosity** ($\eta$) is a measure of a fluid's resistance to flow. It quantifies internal friction between fluid layers moving at different velocities.

**Newton's Law of Viscosity:**

$$
F = \eta A \frac{dv}{dy}
$$

Where:
- $F$ = Tangential force (N)
- $A$ = Area of contact (m²)
- $\frac{dv}{dy}$ = Velocity gradient (s⁻¹)
- $\eta$ = Coefficient of viscosity

**Shear stress form:**

$$
\tau = \eta \frac{dv}{dy}
$$

Or:

$$
\eta = \frac{\tau}{\dot{\gamma}}
$$

Where $\dot{\gamma}$ is the shear rate.

**Dimensional Analysis:**

$$
\eta = \frac{F}{A \cdot (dv/dy)}
$$

Dimensions:
$$
[\eta] = \frac{[F]}{[A] \cdot [v]/[y]} = \frac{MLT^{-2}}{L^2 \cdot (LT^{-1})/L}
$$

$$
[\eta] = \frac{MLT^{-2}}{L^2 \cdot T^{-1}} = \frac{MLT^{-2}}{LT^{-1}} = ML^{-1}T^{-1}
$$

**Dimensional formula:** $[ML^{-1}T^{-1}]$

**Units:**
- SI: Pa·s (Pascal-second) or N·s/m²
- CGS: Poise (P) = 0.1 Pa·s
- Common: cP (centipoise) = 0.001 Pa·s

**Typical viscosity values:**

| Fluid | Viscosity (Pa·s) |
|:------|:-----------------|
| Air (20°C) | $1.8 \times 10^{-5}$ |
| Water (20°C) | $1.0 \times 10^{-3}$ |
| Olive oil | $0.081$ |
| Honey | $2-10$ |
| Glycerin | $1.5$ |

**Textile Applications:**
- **Sizing solutions:** 50-200 cP for optimal coating
- **Printing pastes:** 5000-20000 cP for screen printing
- **Dyeing auxiliaries:** Viscosity affects dye penetration rate

**References:**
- [Viscosity - Engineering ToolBox](https://www.engineeringtoolbox.com/dynamic-absolute-kinematic-viscosity-d_412.html)
- [Fluid Mechanics - HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/pfric.html)

---

#### Q8: Derive Stokes' Law and state its applications

**Stokes' Law** describes the drag force on a sphere moving through a viscous fluid at low Reynolds number (laminar flow).

**Derivation (dimensional analysis approach):**

The drag force $F$ on a sphere depends on:
- Radius of sphere: $r$
- Velocity of sphere: $v$
- Viscosity of fluid: $\eta$

Assume: $F \propto r^a v^b \eta^c$

$$
F = k \cdot r^a \cdot v^b \cdot \eta^c
$$

Dimensional analysis:
$$
[MLT^{-2}] = [L]^a \cdot [LT^{-1}]^b \cdot [ML^{-1}T^{-1}]^c
$$

$$
[MLT^{-2}] = [M^c L^{a+b-c} T^{-b-c}]
$$

Equating powers:
- $M$: $1 = c$ → $c = 1$
- $T$: $-2 = -b - c$ → $b = 1$
- $L$: $1 = a + b - c$ → $a = 1$

Therefore:
$$
F = k \cdot r \cdot v \cdot \eta
$$

Experimentally, $k = 6\pi$ (derived from solving Navier-Stokes equations):

$$
F = 6\pi \eta r v
$$

**This is Stokes' Law.**

**Terminal Velocity Application:**

When a sphere falls through a fluid, terminal velocity is reached when:

$$
\text{Weight} = \text{Drag force} + \text{Buoyant force}
$$

$$
\frac{4}{3}\pi r^3 \rho g = 6\pi \eta r v_t + \frac{4}{3}\pi r^3 \sigma g
$$

Where $\rho$ = density of sphere, $\sigma$ = density of fluid.

Solving for terminal velocity:

$$
v_t = \frac{2r^2(\rho - \sigma)g}{9\eta}
$$

**Applications:**

1. **Measuring viscosity:** Falling ball viscometer
2. **Particle size analysis:** Sedimentation methods
3. **Centrifugation:** Separation based on terminal velocity
4. **Atmospheric science:** Raindrops, dust particles
5. **Textile processing:** Fiber settlement in slurries, particle filtration

**Limitations:**
- Valid only for **laminar flow** (Re < 1)
- **Spherical particles** only
- **Infinite medium** (no wall effects)
- **Rigid spheres** (no deformation)

**Reynolds Number criterion:**

$$
Re = \frac{\rho v D}{\eta} < 1
$$

**References:**
- [Stokes' Law - MIT OpenCourseWare](https://ocw.mit.edu/)
- [Drag Force - NASA Glenn Research Center](https://www.grc.nasa.gov/www/k-12/airplane/drageq.html)

---

### Numerical Problems

#### Example 7: Viscosity Calculation

**Problem:** A flat plate of area 0.1 m² is pulled with a velocity of 0.3 m/s through a liquid layer 2 mm thick. If the force required is 1.5 N, calculate the coefficient of viscosity.

**Given:**
- Area, $A = 0.1$ m²
- Velocity, $v = 0.3$ m/s
- Thickness, $d = 2$ mm $= 2 \times 10^{-3}$ m
- Force, $F = 1.5$ N

**Find:** Coefficient of viscosity, $\eta$

**Solution:**

Velocity gradient (assuming linear profile):
$$
\frac{dv}{dy} = \frac{v}{d} = \frac{0.3}{2 \times 10^{-3}} = 150 \text{ s}^{-1}
$$

From Newton's law of viscosity:
$$
F = \eta A \frac{dv}{dy}
$$

$$
\eta = \frac{F}{A \cdot (dv/dy)} = \frac{1.5}{0.1 \times 150} = \frac{1.5}{15} = 0.1 \text{ Pa·s}
$$

**Answer:** $\eta = 0.1$ Pa·s = 100 cP

**Interpretation:** This viscosity is similar to light motor oil at room temperature.

---

#### Example 8: Terminal Velocity (Stokes' Law)

**Problem:** A steel ball of radius 2 mm falls through glycerin. Calculate its terminal velocity. (Density of steel = 7800 kg/m³, density of glycerin = 1260 kg/m³, viscosity of glycerin = 1.5 Pa·s, g = 9.8 m/s²)

**Given:**
- $r = 2$ mm $= 2 \times 10^{-3}$ m
- $\rho_{\text{steel}} = 7800$ kg/m³
- $\rho_{\text{glycerin}} = 1260$ kg/m³
- $\eta = 1.5$ Pa·s
- $g = 9.8$ m/s²

**Find:** Terminal velocity, $v_t$

**Solution:**

Using terminal velocity formula:

$$
v_t = \frac{2r^2(\rho - \sigma)g}{9\eta}
$$

$$
v_t = \frac{2 \times (2 \times 10^{-3})^2 \times (7800 - 1260) \times 9.8}{9 \times 1.5}
$$

$$
v_t = \frac{2 \times 4 \times 10^{-6} \times 6540 \times 9.8}{13.5}
$$

$$
v_t = \frac{512.352 \times 10^{-3}}{13.5} = 0.03795 \text{ m/s}
$$

**Answer:** $v_t = 3.80$ cm/s or 38.0 mm/s

**Verification of Stokes' Law validity (Reynolds number):**

$$
Re = \frac{\rho v D}{\eta} = \frac{1260 \times 0.038 \times 0.004}{1.5} = 0.128
$$

Since $Re < 1$, Stokes' Law is valid. ✓

---

## Thermodynamics

### Theory Questions

#### Q9: State and explain the First Law of Thermodynamics

The **First Law of Thermodynamics** is a statement of energy conservation for thermodynamic systems:

$$
\Delta U = Q - W
$$

Or in differential form:

$$
dU = \delta Q - \delta W
$$

Where:
- $\Delta U$ = Change in internal energy (state function)
- $Q$ = Heat added to the system (path function)
- $W$ = Work done by the system (path function)

**Sign Convention:**
- $Q > 0$: Heat absorbed by system
- $Q < 0$: Heat released by system
- $W > 0$: Work done by system (expansion)
- $W < 0$: Work done on system (compression)

**Alternative forms:**

Heat absorbed = Increase in internal energy + Work done by system

$$
Q = \Delta U + W
$$

For a cyclic process ($\Delta U = 0$):

$$
Q = W
$$

**Applications in different processes:**

| Process | Constraint | First Law Form |
|:--------|:-----------|:---------------|
| Isothermal | $\Delta T = 0$, $\Delta U = 0$ | $Q = W$ |
| Adiabatic | $Q = 0$ | $\Delta U = -W$ |
| Isochoric | $W = 0$ ($\Delta V = 0$) | $Q = \Delta U$ |
| Isobaric | $P = \text{const}$ | $Q = \Delta U + P\Delta V$ |

**Textile Application:**
In **heat setting** of synthetic fibers, understanding energy transfer is crucial:
- Heat input ($Q$) raises polymer temperature
- Internal energy change ($\Delta U$) relates to molecular rearrangement
- Work ($W$) may be done during fiber shrinkage/expansion

**Reference:**
- [First Law of Thermodynamics - Khan Academy](https://www.khanacademy.org/science/physics/thermodynamics)
- [Thermodynamics - MIT OpenCourseWare](https://ocw.mit.edu/courses/physics/)

---

#### Q10: Derive the expression for work done in an isothermal process

**Isothermal Process:** Temperature remains constant ($T = \text{constant}$)

For an ideal gas:
$$
PV = nRT = \text{constant}
$$

**Work done by gas during expansion from $V_1$ to $V_2$:**

$$
W = \int_{V_1}^{V_2} P \, dV
$$

From ideal gas law:
$$
P = \frac{nRT}{V}
$$

Substituting:
$$
W = \int_{V_1}^{V_2} \frac{nRT}{V} \, dV = nRT \int_{V_1}^{V_2} \frac{dV}{V}
$$

$$
W = nRT \ln\left(\frac{V_2}{V_1}\right)
$$

**Alternative forms:**

Using $P_1V_1 = P_2V_2$:

$$
W = nRT \ln\left(\frac{P_1}{P_2}\right)
$$

For one mole ($n = 1$):

$$
W = RT \ln\left(\frac{V_2}{V_1}\right)
$$

**Sign interpretation:**
- If $V_2 > V_1$ (expansion): $W > 0$ (work done by gas)
- If $V_2 < V_1$ (compression): $W < 0$ (work done on gas)

**Heat absorbed in isothermal process:**

Since $\Delta U = 0$ for isothermal process (ideal gas):

$$
Q = W = nRT \ln\left(\frac{V_2}{V_1}\right)
$$

**Reference:**
- [Isothermal Process - HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/isoth.html)

---

### Numerical Problems

#### Example 9: Isothermal Expansion

**Problem:** 2 moles of an ideal gas at 300 K expand isothermally from 10 L to 20 L. Calculate: (a) work done, (b) heat absorbed. (R = 8.314 J/mol·K)

**Given:**
- $n = 2$ moles
- $T = 300$ K
- $V_1 = 10$ L $= 0.01$ m³
- $V_2 = 20$ L $= 0.02$ m³
- $R = 8.314$ J/mol·K

**Find:** (a) $W$, (b) $Q$

**Solution:**

**(a) Work done:**

$$
W = nRT \ln\left(\frac{V_2}{V_1}\right)
$$

$$
W = 2 \times 8.314 \times 300 \times \ln\left(\frac{20}{10}\right)
$$

$$
W = 4988.4 \times \ln(2) = 4988.4 \times 0.693 = 3457 \text{ J}
$$

**Answer (a):** $W = 3.46$ kJ (work done by gas)

**(b) Heat absorbed:**

For isothermal process, $\Delta U = 0$:

$$
Q = W = 3457 \text{ J}
$$

**Answer (b):** $Q = 3.46$ kJ (heat absorbed by gas)

**Interpretation:** All heat absorbed is converted to work during isothermal expansion.

---

#### Example 10: Adiabatic Process

**Problem:** A gas ($\gamma = 1.4$) at 300 K expands adiabatically to twice its volume. Find the final temperature.

**Given:**
- $T_1 = 300$ K
- $V_2 = 2V_1$
- $\gamma = 1.4$ (for diatomic gas)

**Find:** $T_2$

**Solution:**

For adiabatic process:

$$
TV^{\gamma-1} = \text{constant}
$$

$$
T_1 V_1^{\gamma-1} = T_2 V_2^{\gamma-1}
$$

$$
T_2 = T_1 \left(\frac{V_1}{V_2}\right)^{\gamma-1}
$$

$$
T_2 = 300 \times \left(\frac{1}{2}\right)^{1.4-1} = 300 \times \left(\frac{1}{2}\right)^{0.4}
$$

$$
T_2 = 300 \times 0.758 = 227.4 \text{ K}
$$

**Answer:** $T_2 = 227$ K or approximately $-46°$C

**Physical interpretation:** In adiabatic expansion, gas cools as internal energy is converted to work without heat exchange.

**Reference:**
- [Adiabatic Process - LibreTexts Physics](https://phys.libretexts.org/)

---

## Waves and Oscillations

### Theory Questions

#### Q11: Derive the equation of simple harmonic motion

**Simple Harmonic Motion (SHM)** occurs when the restoring force is proportional to displacement and directed opposite to it.

**Force law:**

$$
F = -kx
$$

Where:
- $k$ = Force constant (N/m)
- $x$ = Displacement from equilibrium

**Equation of motion (Newton's second law):**

$$
F = ma = m\frac{d^2x}{dt^2}
$$

$$
m\frac{d^2x}{dt^2} = -kx
$$

$$
\frac{d^2x}{dt^2} + \frac{k}{m}x = 0
$$

Let $\omega^2 = \frac{k}{m}$ (angular frequency squared):

$$
\frac{d^2x}{dt^2} + \omega^2 x = 0
$$

**General solution:**

$$
x(t) = A\cos(\omega t + \phi)
$$

Or equivalently:

$$
x(t) = A\sin(\omega t + \phi')
$$

Where:
- $A$ = Amplitude
- $\omega = \sqrt{k/m}$ = Angular frequency (rad/s)
- $\phi$ (or $\phi'$) = Phase constant

**Velocity and acceleration:**

$$
v = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)
$$

$$
a = \frac{d^2x}{dt^2} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x
$$

**Key parameters:**

- **Time period:** $T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}}$
- **Frequency:** $f = \frac{1}{T} = \frac{\omega}{2\pi}$
- **Maximum velocity:** $v_{\max} = A\omega$
- **Maximum acceleration:** $a_{\max} = A\omega^2$

**Energy in SHM:**

Kinetic energy:
$$
KE = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2 A^2\sin^2(\omega t + \phi)
$$

Potential energy:
$$
PE = \frac{1}{2}kx^2 = \frac{1}{2}k A^2\cos^2(\omega t + \phi)
$$

Total energy (constant):
$$
E = KE + PE = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2
$$

**Reference:**
- [Simple Harmonic Motion - The Physics Classroom](https://www.physicsclassroom.com/)

---

#### Q12: Explain the phenomenon of resonance with examples

**Resonance** occurs when a system is driven at its natural frequency, resulting in maximum amplitude oscillation.

**Mathematical description:**

For a driven harmonic oscillator with damping:

$$
m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = F_0\cos(\omega_d t)
$$

Where:
- $b$ = Damping coefficient
- $F_0$ = Driving force amplitude
- $\omega_d$ = Driving frequency

**Amplitude response:**

$$
A(\omega_d) = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + (b\omega_d/m)^2}}
$$

Where $\omega_0 = \sqrt{k/m}$ is natural frequency.

**Resonance condition:** $\omega_d \approx \omega_0$

At resonance:
$$
A_{\max} = \frac{F_0}{b\omega_0}
$$

**Characteristics:**

1. **Sharp peak** at $\omega_d = \omega_0$ for low damping
2. **Amplitude limited** only by damping
3. **Phase shift** of 90° at resonance

**Examples:**

| System | Natural Frequency | Resonance Application |
|:-------|:------------------|:----------------------|
| **Swing** | Depends on length | Push at natural frequency for maximum amplitude |
| **Bridge** | Structural modes | Tacoma Narrows collapse (1940) |
| **Musical instruments** | String/air column | Sound amplification |
| **Radio tuning** | LC circuit | Select specific frequency |
| **MRI** | Larmor frequency | Nuclear magnetic resonance |
| **Microwave oven** | 2.45 GHz | Water molecule rotation |

**Textile examples:**

1. **Ultrasonic cleaning:** Resonant vibrations remove soil from fabrics
2. **Vibrational testing:** Determine fabric strength at resonant frequencies
3. **Sonic sewing:** High-frequency vibrations weld thermoplastic fabrics

**Damping effects:**

- **Underdamped** ($b < 2\sqrt{km}$): Sharp resonance peak
- **Critically damped** ($b = 2\sqrt{km}$): No resonance, fastest return to equilibrium
- **Overdamped** ($b > 2\sqrt{km}$): Slow return, no oscillation

**References:**
- [Resonance - HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/Sound/reson.html)
- [Driven Oscillations - MIT OpenCourseWare](https://ocw.mit.edu/)

---

### Numerical Problems

#### Example 11: Spring-Mass System

**Problem:** A mass of 500 g is attached to a spring of force constant 50 N/m. Calculate: (a) angular frequency, (b) time period, (c) frequency.

**Given:**
- Mass, $m = 500$ g $= 0.5$ kg
- Force constant, $k = 50$ N/m

**Find:** (a) $\omega$, (b) $T$, (c) $f$

**Solution:**

**(a) Angular frequency:**

$$
\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{50}{0.5}} = \sqrt{100} = 10 \text{ rad/s}
$$

**Answer (a):** $\omega = 10$ rad/s

**(b) Time period:**

$$
T = \frac{2\pi}{\omega} = \frac{2\pi}{10} = 0.628 \text{ s}
$$

**Answer (b):** $T = 0.628$ s

**(c) Frequency:**

$$
f = \frac{1}{T} = \frac{1}{0.628} = 1.59 \text{ Hz}
$$

Or directly:
$$
f = \frac{\omega}{2\pi} = \frac{10}{2\pi} = 1.59 \text{ Hz}
$$

**Answer (c):** $f = 1.59$ Hz

---

#### Example 12: Energy in SHM

**Problem:** A particle executes SHM with amplitude 10 cm and time period 2 s. Calculate: (a) maximum velocity, (b) velocity at x = 6 cm.

**Given:**
- Amplitude, $A = 10$ cm $= 0.1$ m
- Time period, $T = 2$ s

**Find:** (a) $v_{\max}$, (b) $v$ at $x = 6$ cm

**Solution:**

Angular frequency:
$$
\omega = \frac{2\pi}{T} = \frac{2\pi}{2} = \pi \text{ rad/s}
$$

**(a) Maximum velocity:**

$$
v_{\max} = A\omega = 0.1 \times \pi = 0.314 \text{ m/s}
$$

**Answer (a):** $v_{\max} = 31.4$ cm/s

**(b) Velocity at x = 6 cm:**

Energy conservation:
$$
\frac{1}{2}m\omega^2 A^2 = \frac{1}{2}mv^2 + \frac{1}{2}m\omega^2 x^2
$$

$$
v^2 = \omega^2(A^2 - x^2)
$$

$$
v = \omega\sqrt{A^2 - x^2} = \pi\sqrt{(0.1)^2 - (0.06)^2}
$$

$$
v = \pi\sqrt{0.01 - 0.0036} = \pi\sqrt{0.0064} = \pi \times 0.08 = 0.251 \text{ m/s}
$$

**Answer (b):** $v = 25.1$ cm/s

---

## Optics

### Theory Questions

#### Q13: State and explain Snell's Law of refraction

**Snell's Law** describes how light bends when passing from one medium to another:

$$
n_1\sin\theta_1 = n_2\sin\theta_2
$$

Where:
- $n_1$, $n_2$ = Refractive indices of media 1 and 2
- $\theta_1$ = Angle of incidence (from normal)
- $\theta_2$ = Angle of refraction (from normal)

**Alternative form (using velocities):**

$$
\frac{\sin\theta_1}{\sin\theta_2} = \frac{v_1}{v_2} = \frac{n_2}{n_1}
$$

**Refractive index:**

$$
n = \frac{c}{v}
$$

Where:
- $c$ = Speed of light in vacuum ($3 \times 10^8$ m/s)
- $v$ = Speed of light in medium

**Derivation (Fermat's Principle):**

Light travels the path that takes minimum time. Using calculus of variations:

Time to travel from A to B through interface:
$$
t = \frac{\sqrt{x^2 + a^2}}{v_1} + \frac{\sqrt{(d-x)^2 + b^2}}{v_2}
$$

Minimizing $dt/dx = 0$ yields Snell's Law.

**Special cases:**

1. **Normal incidence:** $\theta_1 = 0$ → $\theta_2 = 0$ (no bending)
2. **Dense to rare:** $n_1 > n_2$ → $\theta_2 > \theta_1$ (bends away from normal)
3. **Rare to dense:** $n_1 < n_2$ → $\theta_2 < \theta_1$ (bends toward normal)

**Critical angle and total internal reflection:**

When $n_1 > n_2$ and $\theta_2 = 90°$:

$$
\sin\theta_c = \frac{n_2}{n_1}
$$

For $\theta_1 > \theta_c$: Total internal reflection occurs.

**Applications:**

- **Optical fibers:** Total internal reflection guides light
- **Lenses:** Refraction focuses/diverges light
- **Prisms:** Dispersion separates wavelengths
- **Atmospheric refraction:** Mirages, apparent sun position

**Textile relevance:**
- **Fiber optics in smart textiles**
- **Optical measurement** of fabric properties (gloss, transparency)
- **Dyeing:** Light interaction with colored fibers

**References:**
- [Snell's Law - Khan Academy](https://www.khanacademy.org/science/physics/geometric-optics)
- [Refraction - HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/geoopt/refr.html)

---

#### Q14: Derive the lens maker's formula

The **lens maker's formula** relates focal length to lens geometry and refractive index.

**For a thin lens:**

$$
\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)
$$

Where:
- $f$ = Focal length
- $n$ = Refractive index of lens material
- $R_1$ = Radius of curvature of first surface
- $R_2$ = Radius of curvature of second surface

**Sign convention:**
- $R > 0$: Center of curvature on the side where light exits
- $R < 0$: Center of curvature on the side where light enters

**Derivation (paraxial approximation):**

Consider a ray passing through a spherical surface:

For first surface:
$$
\frac{n_2}{v_1} - \frac{n_1}{u} = \frac{n_2 - n_1}{R_1}
$$

For second surface:
$$
\frac{n_1}{v} - \frac{n_2}{v_1} = \frac{n_1 - n_2}{R_2}
$$

For thin lens ($v_1 \to \infty$), combining equations:

$$
\frac{1}{v} - \frac{1}{u} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)
$$

When object is at infinity ($u \to \infty$), $v = f$:

$$
\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)
$$

**Lens types:**

| Lens | $R_1$ | $R_2$ | Result |
|:-----|:------|:------|:-------|
| Biconvex | $+R$ | $-R$ | $f > 0$ (converging) |
| Biconcave | $-R$ | $+R$ | $f < 0$ (diverging) |
| Plano-convex | $+R$ | $\infty$ | $f > 0$ |
| Plano-concave | $-R$ | $\infty$ | $f < 0$ |

**Thin lens equation:**

$$
\frac{1}{f} = \frac{1}{v} - \frac{1}{u}
$$

Or:
$$
\frac{1}{v} + \frac{1}{u} = \frac{1}{f}
$$

(with different sign conventions)

**Reference:**
- [Lens Maker's Formula - LibreTexts Physics](https://phys.libretexts.org/)

---

### Numerical Problems

#### Example 13: Snell's Law Application

**Problem:** Light travels from air (n = 1.0) into glass (n = 1.5) at an angle of 30° to the normal. Find the angle of refraction.

**Given:**
- $n_1 = 1.0$ (air)
- $n_2 = 1.5$ (glass)
- $\theta_1 = 30°$

**Find:** $\theta_2$

**Solution:**

Using Snell's Law:
$$
n_1\sin\theta_1 = n_2\sin\theta_2
$$

$$
\sin\theta_2 = \frac{n_1\sin\theta_1}{n_2} = \frac{1.0 \times \sin(30°)}{1.5} = \frac{1.0 \times 0.5}{1.5} = 0.333
$$

$$
\theta_2 = \sin^{-1}(0.333) = 19.47°
$$

**Answer:** $\theta_2 = 19.5°$

**Observation:** Light bends toward the normal when entering denser medium.

---

#### Example 14: Lens Formula

**Problem:** A convex lens of focal length 20 cm forms an image at 60 cm. Find the object distance.

**Given:**
- Focal length, $f = +20$ cm (convex)
- Image distance, $v = +60$ cm (real image)

**Find:** Object distance, $u$

**Solution:**

Using thin lens equation:
$$
\frac{1}{f} = \frac{1}{v} - \frac{1}{u}
$$

$$
\frac{1}{u} = \frac{1}{v} - \frac{1}{f} = \frac{1}{60} - \frac{1}{20}
$$

$$
\frac{1}{u} = \frac{1 - 3}{60} = \frac{-2}{60} = \frac{-1}{30}
$$

$$
u = -30 \text{ cm}
$$

**Answer:** Object distance = 30 cm (negative sign indicates object is on same side as incoming light)

**Magnification:**

$$
m = \frac{v}{u} = \frac{60}{-30} = -2
$$

Image is **inverted** and **magnified** (2× larger).

---

## Modern Physics

### Theory Questions

#### Q15: Explain the photoelectric effect and Einstein's equation

The **photoelectric effect** is the emission of electrons when light strikes a metal surface.

**Key observations (by Lenard):**

1. **Threshold frequency** ($\nu_0$): No emission below this frequency, regardless of intensity
2. **Instantaneous emission:** No time lag
3. **Kinetic energy** depends on frequency, not intensity
4. **Number of electrons** depends on intensity, not frequency

**Classical wave theory failed** to explain these observations.

**Einstein's quantum explanation (1905):**

Light consists of discrete quanta (photons) with energy:

$$
E = h\nu
$$

Where:
- $h = 6.626 \times 10^{-34}$ J·s (Planck's constant)
- $\nu$ = Frequency of light

**Einstein's photoelectric equation:**

$$
h\nu = \phi + KE_{\max}
$$

Or:

$$
KE_{\max} = h\nu - \phi = h\nu - h\nu_0
$$

Where:
- $\phi = h\nu_0$ = Work function (minimum energy to remove electron)
- $KE_{\max}$ = Maximum kinetic energy of emitted electrons

**Alternative form:**

$$
KE_{\max} = h\nu - h\nu_0 = eV_0
$$

Where $V_0$ is the stopping potential.

**Graph interpretation:**

Plotting $V_0$ vs $\nu$:
- **Slope:** $h/e$ (used to determine Planck's constant)
- **x-intercept:** $\nu_0$ (threshold frequency)
- **y-intercept:** $-\phi/e$ (work function)

**Applications:**

- **Photocells:** Light detection and measurement
- **Solar cells:** Photovoltaic energy conversion
- **Night vision devices:** Image intensifiers
- **Photocopiers:** Charging/discharging drums

**Historical significance:**
Einstein received the Nobel Prize (1921) for this explanation, which established quantum theory.

**References:**
- [Photoelectric Effect - HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/mod2.html)
- [Quantum Physics - Khan Academy](https://www.khanacademy.org/science/physics/quantum-physics)

---

#### Q16: Derive de Broglie wavelength equation

Louis de Broglie (1924) proposed that **matter exhibits wave-like properties**, extending wave-particle duality beyond photons.

**Derivation:**

For a photon:
- Energy: $E = h\nu = \frac{hc}{\lambda}$
- Momentum (from relativity): $p = \frac{E}{c} = \frac{h}{\lambda}$

Therefore:
$$
\lambda = \frac{h}{p}
$$

**de Broglie's hypothesis:** This relation holds for **all matter**, not just photons.

For a particle of mass $m$ moving with velocity $v$:

$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

**This is the de Broglie wavelength.**

**Relativistic form:**

For particles moving at speeds comparable to $c$:

$$
\lambda = \frac{h}{\sqrt{2mE_k}}
$$

For highly relativistic particles:
$$
\lambda = \frac{hc}{\sqrt{E^2 - (mc^2)^2}}
$$

**Experimental confirmation:**

1. **Davisson-Germer experiment (1927):** Electron diffraction from crystal
2. **Thomson experiment:** Electron diffraction through thin films
3. **Neutron diffraction:** Crystal structure determination

**Typical wavelengths:**

| Particle | Conditions | Wavelength |
|:---------|:-----------|:-----------|
| Electron | 100 eV | 0.123 nm |
| Proton | 1 keV | 0.0009 nm |
| Baseball | 40 m/s | $10^{-34}$ m (negligible) |

**Significance:**

- **Quantum mechanics foundation:** Wave functions describe particles
- **Electron microscopy:** Higher resolution than optical microscopes
- **Particle accelerators:** Wave behavior at high energies

**References:**
- [de Broglie Wavelength - LibreTexts](https://phys.libretexts.org/)
- [Matter Waves - MIT OpenCourseWare](https://ocw.mit.edu/)

---

### Numerical Problems

#### Example 15: Photoelectric Effect

**Problem:** Light of wavelength 400 nm falls on a metal surface with work function 2.0 eV. Calculate: (a) threshold frequency, (b) maximum kinetic energy of emitted electrons. (h = 6.626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J)

**Given:**
- $\lambda = 400$ nm $= 4 \times 10^{-7}$ m
- $\phi = 2.0$ eV $= 2.0 \times 1.6 \times 10^{-19} = 3.2 \times 10^{-19}$ J
- $h = 6.626 \times 10^{-34}$ J·s
- $c = 3 \times 10^8$ m/s

**Find:** (a) $\nu_0$, (b) $KE_{\max}$

**Solution:**

**(a) Threshold frequency:**

$$
\phi = h\nu_0
$$

$$
\nu_0 = \frac{\phi}{h} = \frac{3.2 \times 10^{-19}}{6.626 \times 10^{-34}} = 4.83 \times 10^{14} \text{ Hz}
$$

**Answer (a):** $\nu_0 = 4.83 \times 10^{14}$ Hz

**(b) Maximum kinetic energy:**

Frequency of incident light:
$$
\nu = \frac{c}{\lambda} = \frac{3 \times 10^8}{4 \times 10^{-7}} = 7.5 \times 10^{14} \text{ Hz}
$$

Using Einstein's equation:
$$
KE_{\max} = h\nu - \phi
$$

$$
KE_{\max} = 6.626 \times 10^{-34} \times 7.5 \times 10^{14} - 3.2 \times 10^{-19}
$$

$$
KE_{\max} = 4.97 \times 10^{-19} - 3.2 \times 10^{-19} = 1.77 \times 10^{-19} \text{ J}
$$

Converting to eV:
$$
KE_{\max} = \frac{1.77 \times 10^{-19}}{1.6 \times 10^{-19}} = 1.11 \text{ eV}
$$

**Answer (b):** $KE_{\max} = 1.11$ eV

---

#### Example 16: de Broglie Wavelength

**Problem:** Calculate the de Broglie wavelength of: (a) an electron accelerated through 100V, (b) a proton moving at 10⁶ m/s. (mₑ = 9.1 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg, e = 1.6 × 10⁻¹⁹ C, h = 6.626 × 10⁻³⁴ J·s)

**Given:**
- (a) $V = 100$ V, $m_e = 9.1 \times 10^{-31}$ kg
- (b) $v = 10^6$ m/s, $m_p = 1.67 \times 10^{-27}$ kg
- $e = 1.6 \times 10^{-19}$ C, $h = 6.626 \times 10^{-34}$ J·s

**Find:** (a) $\lambda_e$, (b) $\lambda_p$

**Solution:**

**(a) Electron wavelength:**

Kinetic energy gained:
$$
KE = eV = 1.6 \times 10^{-19} \times 100 = 1.6 \times 10^{-17} \text{ J}
$$

Velocity:
$$
\frac{1}{2}m_e v^2 = KE
$$

$$
v = \sqrt{\frac{2 \times KE}{m_e}} = \sqrt{\frac{2 \times 1.6 \times 10^{-17}}{9.1 \times 10^{-31}}} = 5.93 \times 10^6 \text{ m/s}
$$

de Broglie wavelength:
$$
\lambda_e = \frac{h}{m_e v} = \frac{6.626 \times 10^{-34}}{9.1 \times 10^{-31} \times 5.93 \times 10^6}
$$

$$
\lambda_e = \frac{6.626 \times 10^{-34}}{5.40 \times 10^{-24}} = 1.23 \times 10^{-10} \text{ m} = 0.123 \text{ nm}
$$

**Answer (a):** $\lambda_e = 1.23$ Å (comparable to atomic spacing)

**(b) Proton wavelength:**

$$
\lambda_p = \frac{h}{m_p v} = \frac{6.626 \times 10^{-34}}{1.67 \times 10^{-27} \times 10^6}
$$

$$
\lambda_p = \frac{6.626 \times 10^{-34}}{1.67 \times 10^{-21}} = 3.97 \times 10^{-13} \text{ m} = 0.000397 \text{ nm}
$$

**Answer (b):** $\lambda_p = 0.397$ pm (much smaller than electron)

**Comparison:** Heavier particles have shorter wavelengths at same energy.

---

## Practice Problems

### Section A: Elasticity and Properties of Matter

**Problem 1:** A steel wire 4 m long and 2 mm² cross-section is stretched by 2 mm when loaded with 10 kg. Calculate Young's modulus.

**Problem 2:** Two wires of same material have lengths in ratio 1:2 and diameters in ratio 2:1. If same force is applied, find ratio of elongations.

**Problem 3:** A rubber band with force constant 100 N/m is stretched by 5 cm. Calculate stored elastic energy.

---

### Section B: Fluid Mechanics

**Problem 4:** Water flows through a pipe of diameter 6 cm at 2 m/s. Find velocity when diameter reduces to 3 cm.

**Problem 5:** A tank with 3 m water height has a hole 20 cm above ground. Calculate horizontal range of water jet.

**Problem 6:** Calculate pressure 50 m below sea surface (ρ = 1025 kg/m³).

---

### Section C: Surface Tension and Viscosity

**Problem 7:** Find excess pressure inside a 2 mm soap bubble (γ = 30 mN/m).

**Problem 8:** A glass tube of 0.3 mm radius shows 5 cm capillary rise. Calculate surface tension (θ = 0°).

**Problem 9:** A sphere of radius 1 mm falls in oil (η = 0.8 Pa·s). If terminal velocity is 2 cm/s, find density difference.

---

### Section D: Thermodynamics

**Problem 10:** 3 moles of gas expand isothermally at 400 K from 5 L to 15 L. Calculate work done.

**Problem 11:** Gas at 500 K compresses adiabatically to half volume (γ = 1.67). Find final temperature.

**Problem 12:** A gas absorbs 500 J heat and does 300 J work. Find change in internal energy.

---

### Section E: Waves and Oscillations

**Problem 13:** A 200 g mass on a spring oscillates with T = 1.5 s. Find spring constant.

**Problem 14:** In SHM, amplitude = 5 cm, maximum velocity = 20 cm/s. Find angular frequency.

**Problem 15:** A wave has λ = 2 m and frequency = 100 Hz. Calculate wave speed.

---

### Section F: Optics

**Problem 16:** Light enters water (n = 1.33) from air at 45°. Find angle of refraction.

**Problem 17:** A lens (n = 1.5) has R₁ = 20 cm, R₂ = -30 cm. Calculate focal length.

**Problem 18:** Find critical angle for glass-air interface (n_glass = 1.5).

---

### Section G: Modern Physics

**Problem 19:** Find photon energy for λ = 500 nm (in eV).

**Problem 20:** Calculate de Broglie wavelength of 1 keV electron.

---

## References

### Textbooks

1. **Resnick, Halliday, Walker** - *Fundamentals of Physics* (10th Edition)  
   [Wiley Publishing](https://www.wiley.com/)

2. **H.C. Verma** - *Concepts of Physics Vol. 1 & 2*  
   [Bharati Bhawan Publishers](https://www.bharatibhawan.co.in/)

3. **Sears and Zemansky** - *University Physics*  
   [Pearson Education](https://www.pearson.com/)

4. **Tipler & Mosca** - *Physics for Scientists and Engineers* (6th Edition)  
   [W.H. Freeman](https://www.macmillanlearning.com/)

### Online Resources

5. **MIT OpenCourseWare - Physics I**  
   https://ocw.mit.edu/courses/physics/

6. **Khan Academy - Physics**  
   https://www.khanacademy.org/science/physics

7. **HyperPhysics - Georgia State University**  
   http://hyperphysics.phy-astr.gsu.edu/

8. **The Physics Classroom**  
   https://www.physicsclassroom.com/

9. **LibreTexts Physics**  
   https://phys.libretexts.org/

### Textile-Specific Physics

10. **ASTM International - Textile Testing Standards**  
    https://www.astm.org/products-services/standards-and-publications/

11. **ISO Textile Standards**  
    https://www.iso.org/committee/45564.html

12. **Textile Physics Applications** - *Journal of Textile Institute*  
    https://www.tandfonline.com/journals/tjti20

### Video Lectures

13. **Walter Lewin - MIT Physics Lectures**  
    https://www.youtube.com/channel/UCiEHVhv0SBMpP75JbzJShqw

14. **Physics Wallah - Complete Physics**  
    https://www.youtube.com/@PhysicsWallah

### Problem-Solving Resources

15. **Physics Forums**  
    https://www.physicsforums.com/

16. **Stack Exchange - Physics**  
    https://physics.stackexchange.com/

---

## Exam Preparation Tips

### Strategy for Physics-I

1. **Master fundamentals** - Focus on understanding concepts, not just formulas
2. **Practice derivations** - Common exam questions (Bernoulli, SHM, lens formula)
3. **Unit consistency** - Always check dimensional analysis
4. **Diagram sketches** - Include for optics, mechanics problems
5. **Numerical accuracy** - Practice significant figures and rounding

### Common Mistakes to Avoid

- ❌ Forgetting sign conventions (optics, thermodynamics)
- ❌ Mixing units (cm/m, g/kg)
- ❌ Incorrect vector directions
- ❌ Skipping intermediate steps in derivations
- ❌ Not stating assumptions (ideal gas, thin lens, etc.)

### Time Management

- **Theory questions:** 40% of time
- **Derivations:** 30% of time
- **Numerical problems:** 25% of time
- **Review:** 5% of time

---

## Appendix: Important Formulas Quick Reference

### Elasticity
- Young's modulus: $Y = \frac{F/A}{\Delta L/L}$
- Strain energy: $U = \frac{1}{2}kx^2$
- Bulk modulus: $K = -\frac{\Delta P}{\Delta V/V}$

### Fluid Mechanics
- Continuity: $A_1v_1 = A_2v_2$
- Bernoulli: $P + \frac{1}{2}\rho v^2 + \rho gh = \text{const}$
- Viscosity: $\eta = \frac{\tau}{\dot{\gamma}}$
- Stokes: $F = 6\pi\eta rv$

### Surface Tension
- Definition: $\gamma = F/L$
- Capillary rise: $h = \frac{2\gamma\cos\theta}{\rho gr}$
- Excess pressure (bubble): $\Delta P = \frac{4\gamma}{r}$

### Thermodynamics
- First law: $Q = \Delta U + W$
- Isothermal work: $W = nRT\ln(V_2/V_1)$
- Adiabatic: $TV^{\gamma-1} = \text{const}$

### Waves/SHM
- Displacement: $x = A\cos(\omega t + \phi)$
- Angular frequency: $\omega = \sqrt{k/m}$
- Energy: $E = \frac{1}{2}kA^2$

### Optics
- Snell's law: $n_1\sin\theta_1 = n_2\sin\theta_2$
- Lens formula: $\frac{1}{f} = \frac{1}{v} - \frac{1}{u}$
- Lens maker: $\frac{1}{f} = (n-1)(\frac{1}{R_1} - \frac{1}{R_2})$

### Modern Physics
- Photoelectric: $KE_{\max} = h\nu - \phi$
- de Broglie: $\lambda = h/p$
- Photon energy: $E = h\nu = hc/\lambda$

---

<div align="center">

**🎓 Good luck with your exams! 🎓**

**Made with 📚 for BUTEX Engineering Students**

*Last updated: January 23, 2026*

</div>
