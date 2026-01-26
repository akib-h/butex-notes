# Rate of Flow

**Course:** PHY-101 - Physics  
**Topic:** Rate of Flow in Fluid Mechanics  
**Date:** January 27, 2026  
**Institution:** BUTEX

---

## Table of Contents
1. [Introduction](#introduction)
2. [Volume Flow Rate](#volume-flow-rate)
3. [Mass Flow Rate](#mass-flow-rate)
4. [Relationship Between Rates](#relationship-between-rates)
5. [Average Velocity](#average-velocity)
6. [Measurement Techniques](#measurement-techniques)
7. [Examples and Problems](#examples-and-problems)
8. [References](#references)

---

## Introduction

The **rate of flow** is a fundamental concept in fluid mechanics that quantifies how much fluid passes through a given cross-section per unit time. Understanding flow rates is essential for designing pipelines, hydraulic systems, and process equipment.

### Why Study Flow Rate?

1. **Engineering Design**: Sizing pipes, pumps, and valves
2. **Process Control**: Monitoring and controlling fluid processes
3. **Conservation Laws**: Basis for continuity equation
4. **Energy Calculations**: Required for Bernoulli's equation applications

---

## Volume Flow Rate

### Definition

**Volume Flow Rate (Q)**: The volume of fluid passing through a cross-section per unit time.

$$Q = \frac{dV}{dt}$$

where:
- $V$ = volume (m³)
- $t$ = time (s)
- $Q$ = volume flow rate (m³/s)

### Mathematical Expression

For a fluid with velocity $v$ passing through area $A$:

$$Q = A \cdot v$$

where:
- $A$ = cross-sectional area (m²)
- $v$ = average velocity (m/s)

**Derivation**:

Consider fluid flowing through a pipe:
- In time $dt$, fluid travels distance $dx = v \cdot dt$
- Volume passing through: $dV = A \cdot dx = A \cdot v \cdot dt$
- Volume flow rate: $Q = \frac{dV}{dt} = A \cdot v$

### For Non-Uniform Velocity Distribution

When velocity varies across the cross-section:

$$Q = \int_A v \, dA$$

where $v$ is the local velocity at each point on the cross-section.

### Common Units

| Unit | Conversion to m³/s |
|------|-------------------|
| m³/s | 1 |
| L/s | 10⁻³ |
| L/min (LPM) | 1.667 × 10⁻⁵ |
| m³/h | 2.778 × 10⁻⁴ |
| gal/min (GPM) | 6.309 × 10⁻⁵ |
| ft³/s (cfs) | 0.02832 |

### Example 1: Basic Volume Flow Rate

**Problem**: Water flows through a pipe of diameter 10 cm with an average velocity of 2 m/s. Calculate the volume flow rate.

**Solution**:

Cross-sectional area:
$$A = \frac{\pi d^2}{4} = \frac{\pi (0.10)^2}{4} = 7.854 \times 10^{-3} \text{ m}^2$$

Volume flow rate:
$$Q = A \cdot v = 7.854 \times 10^{-3} \times 2 = 0.01571 \text{ m}^3/\text{s}$$

$$Q = 15.71 \text{ L/s} = 942.6 \text{ L/min}$$

---

## Mass Flow Rate

### Definition

**Mass Flow Rate ($\dot{m}$)**: The mass of fluid passing through a cross-section per unit time.

$$\dot{m} = \frac{dm}{dt}$$

where:
- $m$ = mass (kg)
- $t$ = time (s)
- $\dot{m}$ = mass flow rate (kg/s)

### Mathematical Expression

$$\dot{m} = \rho \cdot Q = \rho \cdot A \cdot v$$

where:
- $\rho$ = fluid density (kg/m³)
- $Q$ = volume flow rate (m³/s)
- $A$ = cross-sectional area (m²)
- $v$ = average velocity (m/s)

### For Compressible Flow

When density varies:

$$\dot{m} = \int_A \rho v \, dA$$

### Example 2: Mass Flow Rate Calculation

**Problem**: Air flows through a duct of cross-sectional area 0.5 m² with velocity 5 m/s. The density of air is 1.2 kg/m³. Calculate the mass flow rate.

**Solution**:

$$\dot{m} = \rho \cdot A \cdot v = 1.2 \times 0.5 \times 5 = 3.0 \text{ kg/s}$$

---

## Relationship Between Rates

### Volume and Mass Flow Rates

$$\dot{m} = \rho \cdot Q$$

$$Q = \frac{\dot{m}}{\rho}$$

### For Incompressible Flow

When $\rho$ = constant:

$$Q_1 = Q_2$$ (continuity)

$$A_1 v_1 = A_2 v_2$$

### For Compressible Flow

$$\dot{m}_1 = \dot{m}_2$$ (continuity)

$$\rho_1 A_1 v_1 = \rho_2 A_2 v_2$$

### Weight Flow Rate

Sometimes expressed as weight per unit time:

$$\dot{W} = \dot{m} \cdot g = \gamma \cdot Q$$

where:
- $\dot{W}$ = weight flow rate (N/s)
- $\gamma = \rho g$ = specific weight

### Example 3: Converting Between Rates

**Problem**: A pump delivers water at 50 L/min. Calculate:
a) Volume flow rate in m³/s
b) Mass flow rate in kg/s
c) Weight flow rate in N/s

**Solution**:

a) Volume flow rate:
$$Q = 50 \text{ L/min} = \frac{50}{1000 \times 60} = 8.333 \times 10^{-4} \text{ m}^3/\text{s}$$

b) Mass flow rate (ρ = 1000 kg/m³ for water):
$$\dot{m} = \rho Q = 1000 \times 8.333 \times 10^{-4} = 0.833 \text{ kg/s}$$

c) Weight flow rate:
$$\dot{W} = \dot{m} \cdot g = 0.833 \times 9.81 = 8.17 \text{ N/s}$$

---

## Average Velocity

### Definition

**Average Velocity ($\bar{v}$ or $v_{avg}$)**: The velocity that, when multiplied by the cross-sectional area, gives the actual volume flow rate.

$$\bar{v} = \frac{Q}{A} = \frac{1}{A}\int_A v \, dA$$

### Velocity Profiles

Different flow conditions produce different velocity distributions:

#### 1. **Uniform Flow**
All particles have the same velocity:
$$v(r) = v_0 = \text{constant}$$
$$\bar{v} = v_0$$

#### 2. **Laminar Flow in Circular Pipe**
Parabolic velocity profile (Hagen-Poiseuille flow):

$$v(r) = v_{\max}\left(1 - \frac{r^2}{R^2}\right)$$

where:
- $R$ = pipe radius
- $r$ = radial distance from center
- $v_{\max}$ = centerline velocity

Average velocity:
$$\bar{v} = \frac{v_{\max}}{2}$$

**Derivation**:

$$Q = \int_0^R v(r) \cdot 2\pi r \, dr$$

$$Q = \int_0^R v_{\max}\left(1 - \frac{r^2}{R^2}\right) \cdot 2\pi r \, dr$$

$$Q = 2\pi v_{\max} \int_0^R \left(r - \frac{r^3}{R^2}\right) dr$$

$$Q = 2\pi v_{\max} \left[\frac{r^2}{2} - \frac{r^4}{4R^2}\right]_0^R$$

$$Q = 2\pi v_{\max} \left[\frac{R^2}{2} - \frac{R^2}{4}\right] = \frac{\pi R^2 v_{\max}}{2}$$

Average velocity:
$$\bar{v} = \frac{Q}{A} = \frac{\pi R^2 v_{\max}/2}{\pi R^2} = \frac{v_{\max}}{2}$$

#### 3. **Turbulent Flow in Circular Pipe**
Power-law velocity profile:

$$v(r) = v_{\max}\left(1 - \frac{r}{R}\right)^{1/n}$$

where $n \approx 7$ for typical turbulent flow.

Average velocity:
$$\bar{v} \approx 0.82 \, v_{\max} \text{ (for } n = 7\text{)}$$

### Example 4: Velocity Profile

**Problem**: Water flows through a 10 cm diameter pipe under laminar conditions. The centerline velocity is 1 m/s. Calculate:
a) Average velocity
b) Volume flow rate
c) Velocity at r = 2.5 cm from center

**Solution**:

a) Average velocity:
$$\bar{v} = \frac{v_{\max}}{2} = \frac{1}{2} = 0.5 \text{ m/s}$$

b) Volume flow rate:
$$A = \frac{\pi d^2}{4} = \frac{\pi (0.10)^2}{4} = 7.854 \times 10^{-3} \text{ m}^2$$
$$Q = A \bar{v} = 7.854 \times 10^{-3} \times 0.5 = 3.927 \times 10^{-3} \text{ m}^3/\text{s}$$

c) Velocity at r = 2.5 cm:
$$R = 5 \text{ cm}, \quad r = 2.5 \text{ cm}$$
$$v(r) = v_{\max}\left(1 - \frac{r^2}{R^2}\right) = 1 \times \left(1 - \frac{(2.5)^2}{(5)^2}\right)$$
$$v = 1 \times (1 - 0.25) = 0.75 \text{ m/s}$$

---

## Measurement Techniques

### 1. **Direct Methods**

#### Volumetric Method
- Collect fluid in container over time period
- $Q = V/t$
- Accurate but impractical for continuous measurement

#### Gravimetric Method
- Measure mass collected over time
- $\dot{m} = m/t$
- $Q = \dot{m}/\rho$

### 2. **Velocity-Area Method**

$$Q = A \cdot \bar{v}$$

Velocity measured using:
- **Pitot tube**: Measures local velocity
- **Hot-wire anemometer**: Uses heat transfer
- **Laser Doppler velocimetry (LDV)**: Optical method

### 3. **Flow Meters**

#### Differential Pressure Meters
- **Venturi meter**: Uses Bernoulli principle
- **Orifice plate**: Simple but with energy loss
- **Flow nozzle**: Between venturi and orifice

$$Q = C_d A \sqrt{\frac{2\Delta P}{\rho}}$$

where $C_d$ = discharge coefficient

#### Positive Displacement Meters
- Measure actual volume
- Examples: Piston meters, gear meters, nutating disc

#### Velocity Meters
- **Turbine flowmeter**: Rotating turbine
- **Electromagnetic flowmeter**: For conductive fluids
- **Ultrasonic flowmeter**: Transit-time or Doppler method

#### Mass Flow Meters
- **Coriolis flowmeter**: Measures mass directly
- **Thermal mass flowmeter**: Heat transfer principle

### Example 5: Pitot Tube Measurement

**Problem**: A Pitot tube in a water stream indicates a pressure difference of 50 Pa between stagnation and static points. Calculate the local velocity.

**Solution**:

From Bernoulli equation:
$$P + \frac{1}{2}\rho v^2 = P_0$$

$$\Delta P = P_0 - P = \frac{1}{2}\rho v^2$$

$$v = \sqrt{\frac{2\Delta P}{\rho}} = \sqrt{\frac{2 \times 50}{1000}}$$

$$v = \sqrt{0.1} = 0.316 \text{ m/s}$$

---

## Examples and Problems

### Problem 1: Pipe Flow

**Problem**: A pipeline 20 cm in diameter carries water at 1.5 m/s. The pipe then reduces to 10 cm diameter. Calculate:
a) Volume flow rate
b) Velocity in the smaller section
c) Mass flow rate

**Solution**:

a) Volume flow rate:
$$A_1 = \frac{\pi (0.20)^2}{4} = 0.0314 \text{ m}^2$$
$$Q = A_1 v_1 = 0.0314 \times 1.5 = 0.0471 \text{ m}^3/\text{s}$$

b) Velocity in smaller section (continuity):
$$Q = A_2 v_2$$
$$A_2 = \frac{\pi (0.10)^2}{4} = 7.854 \times 10^{-3} \text{ m}^2$$
$$v_2 = \frac{Q}{A_2} = \frac{0.0471}{7.854 \times 10^{-3}} = 6.0 \text{ m/s}$$

Or directly:
$$v_2 = v_1 \frac{d_1^2}{d_2^2} = 1.5 \times \frac{(20)^2}{(10)^2} = 6.0 \text{ m/s}$$

c) Mass flow rate:
$$\dot{m} = \rho Q = 1000 \times 0.0471 = 47.1 \text{ kg/s}$$

### Problem 2: Multiple Pipe Junction

**Problem**: Water enters a junction through a 15 cm diameter pipe at 2 m/s. It leaves through two pipes: one 10 cm diameter at 3 m/s, and another of unknown diameter. If the velocity in the unknown pipe is 1.5 m/s, find its diameter.

**Solution**:

Continuity equation (mass conservation):
$$Q_{\text{in}} = Q_{\text{out,1}} + Q_{\text{out,2}}$$

Inlet flow:
$$Q_{\text{in}} = \frac{\pi (0.15)^2}{4} \times 2 = 0.0353 \text{ m}^3/\text{s}$$

First outlet:
$$Q_{\text{out,1}} = \frac{\pi (0.10)^2}{4} \times 3 = 0.0236 \text{ m}^3/\text{s}$$

Second outlet:
$$Q_{\text{out,2}} = Q_{\text{in}} - Q_{\text{out,1}} = 0.0353 - 0.0236 = 0.0117 \text{ m}^3/\text{s}$$

$$Q_{\text{out,2}} = \frac{\pi d_2^2}{4} \times v_2$$

$$0.0117 = \frac{\pi d_2^2}{4} \times 1.5$$

$$d_2^2 = \frac{4 \times 0.0117}{\pi \times 1.5} = 0.00993$$

$$d_2 = 0.0996 \text{ m} \approx 10 \text{ cm}$$

### Problem 3: Laminar vs Turbulent Flow

**Problem**: Oil flows through a 5 cm diameter pipe. For laminar flow, the centerline velocity is measured as 0.8 m/s. If the flow becomes turbulent with the same volume flow rate, estimate the new centerline velocity assuming the power-law profile with n = 7.

**Solution**:

Laminar flow:
$$\bar{v}_{\text{lam}} = \frac{v_{\max,lam}}{2} = \frac{0.8}{2} = 0.4 \text{ m/s}$$

Volume flow rate:
$$Q = A \bar{v} = \frac{\pi (0.05)^2}{4} \times 0.4 = 7.854 \times 10^{-4} \text{ m}^3/\text{s}$$

Turbulent flow (same Q):
$$\bar{v}_{\text{turb}} = 0.4 \text{ m/s}$$ (same average velocity)

For turbulent flow:
$$\bar{v}_{\text{turb}} = 0.82 \, v_{\max,turb}$$

$$v_{\max,turb} = \frac{0.4}{0.82} = 0.488 \text{ m/s}$$

**Answer**: Centerline velocity decreases from 0.8 m/s to approximately 0.49 m/s due to flatter velocity profile in turbulent flow.

---

## Practical Applications

### 1. **Water Supply Systems**
- Designing municipal water distribution
- Sizing household pipes
- Pump selection

### 2. **Industrial Processes**
- Chemical reactor feed rates
- Cooling water systems
- Textile dyeing processes

### 3. **Environmental Engineering**
- River flow measurement
- Wastewater treatment
- Irrigation systems

### 4. **Medical Applications**
- Blood flow rates
- IV drip rates
- Respiratory systems

---

## References

### Textbooks
1. **Fluid Mechanics** by Frank M. White, Chapter 3: Flow Analysis
2. **Introduction to Fluid Mechanics** by Fox, McDonald, and Pritchard, Chapter 4
3. **Fluid Mechanics** by Çengel and Cimbala, Chapter 5: Mass, Bernoulli, and Energy Equations

### Online Resources
1. [Engineering Toolbox - Flow Rate](https://www.engineeringtoolbox.com/flow-rate-d_447.html)
2. [HyperPhysics - Fluid Flow](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html#flo)
3. [Khan Academy - Fluid Flow](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/v/what-is-volume-flow-rate)
4. [MIT OpenCourseWare - Fluid Dynamics](https://ocw.mit.edu/courses/mechanical-engineering/)

### Standards
1. ISO 5167: Measurement of fluid flow by means of pressure differential devices
2. ASME MFC-3M: Measurement of Fluid Flow in Pipes Using Orifice, Nozzle, and Venturi

---

## Next Topics

- [Uniform Motion](04-uniform-motion.md)
- [Non-Uniform Motion](05-non-uniform-motion.md)
- [Equation of Continuity](08-equation-of-continuity.md)

---

**Last Updated**: January 27, 2026  
**Author**: BUTEX Fabric Department  
**Course Code**: PHY-101
