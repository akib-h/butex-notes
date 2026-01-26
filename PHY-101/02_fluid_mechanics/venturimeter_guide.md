# Venturimeter: Flow Measurement Device

**Course:** PHY-101 - Physics  
**Topic:** Venturimeter - Working Principle and Applications  
**Date:** January 27, 2026  
**Institution:** BUTEX

---

## Table of Contents
1. [Introduction](#introduction)
2. [Construction and Design](#construction-and-design)
3. [Working Principle](#working-principle)
4. [Derivation of Flow Rate Equation](#derivation-of-flow-rate-equation)
5. [Coefficient of Discharge](#coefficient-of-discharge)
6. [Advantages and Disadvantages](#advantages-and-disadvantages)
7. [Applications](#applications)
8. [Examples and Problems](#examples-and-problems)
9. [Comparison with Other Flow Meters](#comparison-with-other-flow-meters)
10. [References](#references)

---

## Introduction

A **Venturimeter** (or Venturi meter) is a device used to measure the rate of flow of fluid through a pipe. It is based on Bernoulli's principle and the continuity equation.

### Historical Background

- **Giovanni Battista Venturi** (1746-1822): Italian physicist
- Published the principle in 1797
- First practical meter developed by Clemens Herschel (1887)
- Named after Venturi who discovered the effect

### Why Use Venturimeter?

1. **Accurate**: High precision measurements
2. **Low energy loss**: Gradual area changes
3. **No moving parts**: Low maintenance
4. **Self-contained**: No external power needed
5. **Wide range**: Various flow rates and pipe sizes

---

## Construction and Design

### Main Components

```
           Inlet Section → Throat → Diverging Section → Outlet
          _______________      ___          __________________
    _____|               |____|   |________|                  |_____
         |               |    |   |        |                  |
         |    Section 1  |    | 2 |        |    Section 3     |
         |_______________|____|___|________|__________________|
             Converging     Throat      Diverging (Diffuser)
```

#### 1. **Inlet (Converging) Section**
- Length: 2.5 to 3 times diameter
- Converging angle: 21° ± 2°
- Smooth internal surface
- Connects to main pipe (diameter $d_1$)

#### 2. **Throat**
- Smallest cross-section (diameter $d_2$)
- Short cylindrical section
- Uniform diameter
- Typical ratio: $d_2/d_1 = 0.25$ to $0.75$

#### 3. **Diverging (Diffuser) Section**
- Diverging angle: 5° to 7° (typically 6°)
- Longer than converging section
- Gradual expansion to recover pressure
- Connects back to main pipe diameter

#### 4. **Pressure Tappings**
- At inlet section (point 1)
- At throat (point 2)
- Connected to manometer or pressure gauge
- Flush with internal wall

### Key Dimensions

| Parameter | Typical Value |
|-----------|--------------|
| Throat/Inlet ratio | 0.25 to 0.75 |
| Converging angle | 21° ± 2° |
| Diverging angle | 5° to 7° |
| Throat length | 0.25 to 0.5 × $d_2$ |
| Total length | 7 to 15 × $d_1$ |

### Materials

- **Cast iron**: Common, economical
- **Steel**: Higher pressures
- **Stainless steel**: Corrosive fluids
- **Brass/Bronze**: Smaller sizes
- **Plastic (PVC, HDPE)**: Chemical applications

---

## Working Principle

The Venturimeter operates on two fundamental principles:

### 1. Continuity Equation (Conservation of Mass)

As the cross-sectional area decreases, velocity increases:
$$A_1 v_1 = A_2 v_2$$

### 2. Bernoulli's Equation (Conservation of Energy)

As velocity increases, pressure decreases:
$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

(assuming horizontal installation)

### Physical Process

1. **Fluid enters** converging section
2. **Area decreases** → velocity increases
3. **Velocity increases** → pressure decreases (Bernoulli)
4. **Pressure difference** measured between inlet and throat
5. **Calculate flow rate** from pressure difference

### Key Insight

The pressure difference ($P_1 - P_2$) is directly related to flow rate:
- Higher flow rate → larger pressure drop
- Lower flow rate → smaller pressure drop

---

## Derivation of Flow Rate Equation

### Setup

- **Point 1** (Inlet): diameter $d_1$, area $A_1$, pressure $P_1$, velocity $v_1$
- **Point 2** (Throat): diameter $d_2$, area $A_2$, pressure $P_2$, velocity $v_2$
- Horizontal installation: $z_1 = z_2$

### Step 1: Apply Continuity Equation

$$A_1 v_1 = A_2 v_2 = Q$$

$$v_1 = \frac{Q}{A_1}, \quad v_2 = \frac{Q}{A_2}$$

### Step 2: Apply Bernoulli's Equation

$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

$$P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2)$$

### Step 3: Substitute Velocities

$$P_1 - P_2 = \frac{1}{2}\rho\left[\left(\frac{Q}{A_2}\right)^2 - \left(\frac{Q}{A_1}\right)^2\right]$$

$$P_1 - P_2 = \frac{1}{2}\rho Q^2\left[\frac{1}{A_2^2} - \frac{1}{A_1^2}\right]$$

$$P_1 - P_2 = \frac{1}{2}\rho Q^2 \frac{A_1^2 - A_2^2}{A_1^2 A_2^2}$$

### Step 4: Solve for Q

$$Q^2 = \frac{2(P_1 - P_2)}{\rho} \cdot \frac{A_1^2 A_2^2}{A_1^2 - A_2^2}$$

$$Q = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2(P_1 - P_2)}{\rho}}$$

This can be rewritten as:

$$Q = \frac{A_2}{\sqrt{1 - (A_2/A_1)^2}} \sqrt{\frac{2(P_1 - P_2)}{\rho}}$$

Or in terms of diameters:

$$\boxed{Q = \frac{\frac{\pi d_2^2}{4}}{\sqrt{1 - (d_2/d_1)^4}} \sqrt{\frac{2(P_1 - P_2)}{\rho}}}$$

### Simplified Form

$$\boxed{Q_{\text{theoretical}} = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2\Delta P}{\rho}}}$$

where $\Delta P = P_1 - P_2$

---

## Coefficient of Discharge

### Actual Flow Rate

In practice:
$$\boxed{Q_{\text{actual}} = C_d \cdot Q_{\text{theoretical}}}$$

$$Q_{\text{actual}} = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2\Delta P}{\rho}}$$

where $C_d$ = coefficient of discharge

### Definition

$$C_d = \frac{Q_{\text{actual}}}{Q_{\text{theoretical}}}$$

### Typical Values

- **Well-designed venturimeter**: $C_d = 0.95$ to $0.99$
- **Average value**: $C_d \approx 0.98$
- **Poor design/condition**: $C_d = 0.90$ to $0.95$

### Factors Affecting $C_d$

1. **Reynolds number**: Higher Re → higher $C_d$
2. **Surface roughness**: Smoother → higher $C_d$
3. **Manufacturing quality**: Better → higher $C_d$
4. **Age and wear**: Newer → higher $C_d$
5. **Diameter ratio**: Optimal range for best $C_d$

### Why $C_d < 1$?

1. **Friction losses**: Energy dissipated
2. **Boundary layer effects**: Near walls
3. **Non-uniform velocity**: Not fully developed at inlet
4. **Measurement errors**: Pressure tap location
5. **Deviation from ideal**: Real fluid effects

---

## Pressure Measurement

### Methods

#### 1. **U-Tube Manometer**

For liquids:
$$P_1 - P_2 = (\rho_m - \rho) g h$$

where:
- $\rho_m$ = density of manometer fluid
- $\rho$ = density of flowing fluid
- $h$ = manometer reading

$$Q = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2g h \frac{(\rho_m - \rho)}{\rho}}$$

#### 2. **Differential Pressure Gauge**

Directly measures $\Delta P = P_1 - P_2$

$$Q = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2\Delta P}{\rho}}$$

#### 3. **Inverted U-Tube (for gases)**

$$P_1 - P_2 = \rho g h$$

---

## Advantages and Disadvantages

### Advantages

1. **High accuracy**: ±1% when properly calibrated
2. **Low permanent pressure loss**: ~10-20% of differential
3. **No moving parts**: Reliable, low maintenance
4. **Wide range**: Can measure very high and low flows
5. **Self-cleaning**: Smooth surfaces resist deposits
6. **Long life**: Durable construction
7. **Reversible flow**: Can measure in both directions
8. **Linear output**: Proportional to √(flow rate)

### Disadvantages

1. **Large size**: Requires significant space
2. **High initial cost**: Expensive to manufacture
3. **Installation requirements**: Needs straight pipe sections
4. **Pressure loss**: Though lower than orifice meter
5. **Limited range**: Not suitable for very low flows
6. **Heavy**: Difficult to transport and install
7. **Permanent installation**: Not easily removed
8. **Calibration**: Needs periodic recalibration

---

## Applications

### Industrial Applications

1. **Water Supply Systems**
   - Municipal water distribution
   - Treatment plant flow measurement
   - Pumping station monitoring

2. **Oil and Gas Industry**
   - Crude oil pipelines
   - Natural gas flow
   - Refinery processes

3. **Chemical Processing**
   - Reactor feed control
   - Product flow measurement
   - Blending operations

4. **Power Plants**
   - Cooling water systems
   - Steam flow (with modifications)
   - Fuel oil measurement

5. **Textile Industry**
   - Dye liquor flow
   - Chemical dosing
   - Washing process control

6. **Food and Beverage**
   - Milk processing
   - Juice production
   - Brewery operations

### Research and Testing

- Fluid mechanics laboratories
- Calibration facilities
- Flow pattern studies
- Pump and turbine testing

---

## Examples and Problems

### Example 1: Basic Calculation

**Problem**: A venturimeter has inlet diameter 20 cm and throat diameter 10 cm. The pressure difference is 50 kPa. Calculate the flow rate of water. Use $C_d = 0.98$.

**Solution**:

Given:
- $d_1 = 0.20$ m, $A_1 = \frac{\pi (0.20)^2}{4} = 0.0314$ m²
- $d_2 = 0.10$ m, $A_2 = \frac{\pi (0.10)^2}{4} = 0.00785$ m²
- $\Delta P = 50,000$ Pa
- $\rho = 1000$ kg/m³
- $C_d = 0.98$

Flow rate:
$$Q = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2\Delta P}{\rho}}$$

$$Q = 0.98 \times \frac{0.0314 \times 0.00785}{\sqrt{(0.0314)^2 - (0.00785)^2}} \sqrt{\frac{2 \times 50,000}{1000}}$$

$$Q = 0.98 \times \frac{2.465 \times 10^{-4}}{\sqrt{9.869 \times 10^{-4} - 6.162 \times 10^{-5}}} \sqrt{100}$$

$$Q = 0.98 \times \frac{2.465 \times 10^{-4}}{\sqrt{9.253 \times 10^{-4}}} \times 10$$

$$Q = 0.98 \times \frac{2.465 \times 10^{-4}}{0.0304} \times 10$$

$$Q = 0.98 \times 0.0811 = 0.0795 \text{ m}^3/\text{s}$$

$$Q = 79.5 \text{ L/s}$$

**Answer**: Flow rate = 79.5 L/s

### Example 2: With Manometer

**Problem**: A venturimeter (inlet 15 cm, throat 7.5 cm) measures water flow. A mercury manometer shows a reading of 25 cm. Find the flow rate. Use $C_d = 0.97$.

**Solution**:

Given:
- $d_1 = 0.15$ m, $A_1 = 0.01767$ m²
- $d_2 = 0.075$ m, $A_2 = 0.00442$ m²
- $h = 0.25$ m (mercury)
- $\rho_{water} = 1000$ kg/m³
- $\rho_{Hg} = 13,600$ kg/m³
- $C_d = 0.97$

Pressure difference:
$$\Delta P = (\rho_{Hg} - \rho_{water}) g h$$
$$\Delta P = (13,600 - 1,000) \times 9.81 \times 0.25$$
$$\Delta P = 30,870 \text{ Pa}$$

Flow rate:
$$Q = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2\Delta P}{\rho}}$$

$$Q = 0.97 \times \frac{0.01767 \times 0.00442}{\sqrt{(0.01767)^2 - (0.00442)^2}} \sqrt{\frac{2 \times 30,870}{1,000}}$$

$$Q = 0.97 \times \frac{7.810 \times 10^{-5}}{0.01711} \times 7.86$$

$$Q = 0.97 \times 0.00456 \times 7.86 = 0.0348 \text{ m}^3/\text{s}$$

$$Q = 34.8 \text{ L/s}$$

**Answer**: Flow rate = 34.8 L/s

### Example 3: Finding Throat Diameter

**Problem**: A venturimeter installed in a 30 cm diameter pipe measures 150 L/s of water with a pressure drop of 60 kPa. Find the throat diameter. Use $C_d = 0.98$.

**Solution**:

Given:
- $d_1 = 0.30$ m, $A_1 = 0.0707$ m²
- $Q = 0.150$ m³/s
- $\Delta P = 60,000$ Pa
- $C_d = 0.98$

From flow equation:
$$Q = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2\Delta P}{\rho}}$$

Let $r = A_2/A_1$:

$$Q = C_d \frac{A_1^2 r}{\sqrt{A_1^2(1 - r^2)}} \sqrt{\frac{2\Delta P}{\rho}}$$

$$Q = C_d A_1 \frac{r}{\sqrt{1 - r^2}} \sqrt{\frac{2\Delta P}{\rho}}$$

$$0.150 = 0.98 \times 0.0707 \times \frac{r}{\sqrt{1 - r^2}} \times \sqrt{\frac{120,000}{1,000}}$$

$$0.150 = 0.0693 \times \frac{r}{\sqrt{1 - r^2}} \times 10.95$$

$$0.150 = 0.759 \times \frac{r}{\sqrt{1 - r^2}}$$

$$\frac{r}{\sqrt{1 - r^2}} = 0.198$$

Squaring:
$$\frac{r^2}{1 - r^2} = 0.0392$$

$$r^2 = 0.0392(1 - r^2)$$

$$r^2 = 0.0392 - 0.0392r^2$$

$$1.0392r^2 = 0.0392$$

$$r^2 = 0.0377$$

$$r = 0.194$$

Therefore:
$$A_2 = 0.194 \times A_1 = 0.194 \times 0.0707 = 0.0137 \text{ m}^2$$

$$d_2 = \sqrt{\frac{4A_2}{\pi}} = \sqrt{\frac{4 \times 0.0137}{\pi}} = 0.132 \text{ m} = 13.2 \text{ cm}$$

**Answer**: Throat diameter = 13.2 cm

### Example 4: Velocity Calculations

**Problem**: For Example 1, calculate:
a) Velocity at inlet
b) Velocity at throat
c) Pressure recovery in diverging section (assume 80% recovery)

**Solution**:

From Example 1: $Q = 0.0795$ m³/s, $A_1 = 0.0314$ m², $A_2 = 0.00785$ m²

a) **Inlet velocity**:
$$v_1 = \frac{Q}{A_1} = \frac{0.0795}{0.0314} = 2.53 \text{ m/s}$$

b) **Throat velocity**:
$$v_2 = \frac{Q}{A_2} = \frac{0.0795}{0.00785} = 10.13 \text{ m/s}$$

Verification with continuity:
$$v_2 = v_1 \frac{A_1}{A_2} = 2.53 \times \frac{0.0314}{0.00785} = 10.13 \text{ m/s}$$ ✓

c) **Pressure recovery**:
Pressure drop at throat: 50 kPa
Recovered: $0.80 \times 50 = 40$ kPa
Net permanent loss: $50 - 40 = 10$ kPa

**Answers**: 
- Inlet velocity = 2.53 m/s
- Throat velocity = 10.13 m/s  
- Pressure recovery = 40 kPa, permanent loss = 10 kPa

### Example 5: Power Loss

**Problem**: For Example 1, calculate the power loss due to friction in the venturimeter if pressure recovery is 80%.

**Solution**:

From Example 1: $Q = 0.0795$ m³/s
Permanent pressure loss: 10 kPa (from Example 4)

Power loss:
$$\dot{W}_{loss} = Q \times \Delta P_{perm} = 0.0795 \times 10,000 = 795 \text{ W}$$

**Answer**: Power loss = 795 W ≈ 0.8 kW

This represents less than 1.5% of the kinetic energy in the flow at the throat:
$$\dot{W}_{kinetic} = \frac{1}{2}\rho Q v_2^2 = \frac{1}{2} \times 1000 \times 0.0795 \times (10.13)^2 = 40,784 \text{ W}$$

Percentage loss: $\frac{795}{40,784} \times 100\% = 1.95\%$

---

## Comparison with Other Flow Meters

| Feature | Venturimeter | Orifice Meter | Flow Nozzle | Rotameter |
|---------|--------------|---------------|-------------|-----------|
| **Accuracy** | ±1% | ±2-4% | ±1-2% | ±2-10% |
| **$C_d$ value** | 0.95-0.99 | 0.60-0.65 | 0.95-0.98 | N/A |
| **Pressure loss** | 10-20% | 40-80% | 30-60% | Constant |
| **Cost** | High | Low | Medium | Medium |
| **Size** | Large | Compact | Medium | Small |
| **Maintenance** | Low | Medium | Medium | High |
| **Range** | Wide | Wide | Medium | Limited |
| **Installation** | Complex | Simple | Medium | Simple |

### When to Use Venturimeter

**Choose Venturimeter when:**
- High accuracy required
- Low pressure loss critical
- Permanent installation
- Budget available for quality
- Space not restricted
- Long-term reliability needed

**Choose Orifice Meter when:**
- Cost is primary concern
- Space limited
- Temporary installation
- Moderate accuracy acceptable
- Pressure loss not critical

---

## Installation Requirements

### Upstream Requirements

- Straight pipe length: **10-30 $D_1$**
- No elbows, valves, or fittings
- Fully developed flow
- Clean fluid (no debris)

### Downstream Requirements

- Straight pipe length: **5-10 $D_1$**
- No back pressure fluctuations
- Proper support and alignment

### General Requirements

1. **Horizontal installation** (preferred)
2. **Vertical installation** (requires correction)
3. **Proper sealing** at flanges
4. **Pressure tap alignment**
5. **Manometer or gauge selection**
6. **Flow direction indication**
7. **Upstream filter** (if needed)

---

## Calibration and Maintenance

### Calibration

- Initial calibration against standard
- Periodic recalibration (annually)
- After any repairs or modifications
- Check $C_d$ value experimentally

### Maintenance

1. **Regular inspection**: Visual checks
2. **Cleaning**: Remove deposits
3. **Pressure tap cleaning**: Ensure clear passage
4. **Gasket replacement**: Prevent leaks
5. **Surface inspection**: Check for corrosion
6. **Measurement verification**: Compare with standards

---

## Advanced Topics

### Cavitation

At throat, if pressure drops below vapor pressure:
$$P_2 < P_{\text{vapor}}$$

Consequences:
- Bubble formation
- Measurement errors
- Physical damage
- Noise and vibration

**Prevention**:
- Increase throat diameter
- Increase inlet pressure
- Reduce temperature
- Choose appropriate $d_2/d_1$ ratio

### Compressible Flow

For gases at high velocity (Ma > 0.3):
$$Q = C_d \frac{A_2}{\sqrt{1 - \beta^4}} \sqrt{\frac{2\Delta P}{\rho}} \times Y$$

where $Y$ = expansion factor (< 1)

---

## Summary

### Key Equations

| Quantity | Equation |
|----------|----------|
| Theoretical flow | $Q_{th} = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{\frac{2\Delta P}{\rho}}$ |
| Actual flow | $Q = C_d \times Q_{th}$ |
| With manometer | $Q = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gh\frac{\rho_m - \rho}{\rho}}$ |
| Velocity at throat | $v_2 = \frac{Q}{A_2}$ |
| Pressure drop | $\Delta P = P_1 - P_2$ |

### Design Parameters

- Diameter ratio: 0.25 to 0.75
- Converging angle: 21° ± 2°
- Diverging angle: 5° to 7°
- $C_d$: 0.95 to 0.99

---

## References

### Textbooks
1. **Fluid Mechanics** by Frank M. White, Chapter 6: Flow Measurement
2. **Introduction to Fluid Mechanics** by Fox, McDonald, and Pritchard, Chapter 8
3. **Fluid Mechanics** by Çengel and Cimbala, Chapter 5
4. **Flow Measurement Engineering Handbook** by R.W. Miller (McGraw-Hill)

### Online Resources
1. [Engineering Toolbox - Venturi Meter](https://www.engineeringtoolbox.com/venturi-flowmeter-d_397.html)
2. [HyperPhysics - Venturi Effect](http://hyperphysics.phy-astr.gsu.edu/hbase/pven.html)
3. [Khan Academy - Flow Measurement](https://www.khanacademy.org/science/physics/fluids)
4. [MIT OpenCourseWare - Flow Measurement](https://ocw.mit.edu/courses/mechanical-engineering/)

### Standards
1. **ISO 5167-4**: Measurement of fluid flow - Venturi tubes
2. **ASME MFC-3M**: Measurement of Fluid Flow in Pipes Using Orifice, Nozzle, and Venturi
3. **BS 1042**: Measurement of fluid flow in closed conduits

### Video Tutorials
1. [NPTEL - Venturimeter](https://nptel.ac.in/)
2. [Practical demonstrations on YouTube](https://www.youtube.com/)

---

## Next Topics

- [Flow Measurement Devices](flow-measurement.md)
- [Orifice Meter](orifice-meter.md)
- [Pitot Tube](pitot-tube.md)
- [Applications in Industry](industrial-applications.md)

---

**Last Updated**: January 27, 2026  
**Author**: BUTEX Fabric Department  
**Course Code**: PHY-101
