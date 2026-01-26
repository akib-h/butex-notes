# Speed of Efflux: Torricelli's Theorem

**Course:** PHY-101 - Physics  
**Topic:** Torricelli's Theorem and Speed of Efflux  
**Date:** January 27, 2026  
**Institution:** BUTEX

---

## Table of Contents
1. [Introduction](#introduction)
2. [Torricelli's Theorem](#torricellis-theorem)
3. [Derivation](#derivation)
4. [Practical Considerations](#practical-considerations)
5. [Coefficient of Discharge](#coefficient-of-discharge)
6. [Time to Empty a Tank](#time-to-empty-a-tank)
7. [Applications](#applications)
8. [Examples and Problems](#examples-and-problems)
9. [References](#references)

---

## Introduction

**Torricelli's Theorem** describes the speed at which fluid flows out of an opening in a container under the influence of gravity. It's a special application of Bernoulli's equation and has numerous practical applications in fluid systems.

### Historical Background

- **Evangelista Torricelli** (1608-1647): Italian physicist and mathematician
- Student of Galileo Galilei
- Published in 1644: "Opera Geometrica"
- Also invented the barometer

### Physical Insight

The speed of fluid exiting an orifice is the same as the speed a body would acquire in free fall from the fluid surface to the orifice level.

$$v = \sqrt{2gh}$$

This is remarkably similar to the free-fall velocity equation from mechanics!

---

## Torricelli's Theorem

### Statement

**The speed of efflux of a fluid through a sharp-edged orifice at a depth h below the free surface is:**

$$\boxed{v = \sqrt{2gh}}$$

where:
- $v$ = velocity of efflux (m/s)
- $g$ = acceleration due to gravity (9.81 m/s²)
- $h$ = depth below free surface (m)

### Physical Meaning

- **Independent of fluid density**: Same formula for water, oil, mercury (assuming incompressible)
- **Independent of orifice size**: Velocity depends only on depth
- **Analogous to free fall**: $v = \sqrt{2gh}$ same as falling body

---

## Derivation

### Method 1: Using Bernoulli's Equation

Consider a tank with a small orifice at the bottom.

#### Define Points

**Point 1** (Free surface):
- Pressure: $P_1 = P_{\text{atm}}$
- Velocity: $v_1 \approx 0$ (large tank area)
- Elevation: $z_1 = h$ (taking orifice as reference)

**Point 2** (Orifice):
- Pressure: $P_2 = P_{\text{atm}}$ (jet exits to atmosphere)
- Velocity: $v_2 = v$ (unknown)
- Elevation: $z_2 = 0$ (reference level)

#### Apply Bernoulli's Equation

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2$$

Substituting:
$$P_{\text{atm}} + \frac{1}{2}\rho(0)^2 + \rho g h = P_{\text{atm}} + \frac{1}{2}\rho v^2 + \rho g(0)$$

Simplifying:
$$\rho g h = \frac{1}{2}\rho v^2$$

$$v^2 = 2gh$$

$$\boxed{v = \sqrt{2gh}}$$

**This is Torricelli's Theorem.**

### Method 2: Energy Conservation

#### Initial State
- Fluid at height h
- Kinetic energy: $KE_i = 0$ (at rest)
- Potential energy: $PE_i = mgh$
- Total: $E_i = mgh$

#### Final State
- Fluid at orifice level
- Kinetic energy: $KE_f = \frac{1}{2}mv^2$
- Potential energy: $PE_f = 0$
- Total: $E_f = \frac{1}{2}mv^2$

#### Energy Conservation
$$E_i = E_f$$

$$mgh = \frac{1}{2}mv^2$$

$$v = \sqrt{2gh}$$

### Method 3: Comparison with Free Fall

A body falling freely from height h:
$$v^2 = u^2 + 2gh$$

With $u = 0$:
$$v = \sqrt{2gh}$$

**Same result!** The fluid "falls" through height h.

---

## Practical Considerations

### Ideal vs. Real Flow

#### Ideal Conditions (Torricelli's Formula)
$$v_{\text{ideal}} = \sqrt{2gh}$$

Assumptions:
1. Inviscid fluid (no viscosity)
2. Sharp-edged orifice
3. No energy losses
4. Streamlined flow

#### Real Conditions

In practice:
$$v_{\text{actual}} = C_v \sqrt{2gh}$$

where $C_v$ = coefficient of velocity (typically 0.97-0.98)

### Why Actual Velocity is Less

1. **Viscous friction**: Energy dissipated as heat
2. **Vena contracta**: Jet contracts after orifice
3. **Turbulence**: Eddies and vortices
4. **Surface tension**: Minor effect for small orifices
5. **Wall friction**: At orifice edges

---

## Coefficient of Discharge

### Definitions

#### 1. Coefficient of Velocity ($C_v$)

$$C_v = \frac{v_{\text{actual}}}{v_{\text{theoretical}}} = \frac{v_{\text{actual}}}{\sqrt{2gh}}$$

Typical value: 0.97 - 0.98

#### 2. Coefficient of Contraction ($C_c$)

$$C_c = \frac{A_{\text{jet}}}{A_{\text{orifice}}}$$

where:
- $A_{\text{jet}}$ = area at vena contracta
- $A_{\text{orifice}}$ = area of orifice

Typical value: 0.61 - 0.64 for sharp-edged orifice

#### 3. Coefficient of Discharge ($C_d$)

$$C_d = C_c \times C_v = \frac{Q_{\text{actual}}}{Q_{\text{theoretical}}}$$

Typical value: 0.60 - 0.62 for sharp-edged orifice

### Actual Flow Rate

$$Q_{\text{actual}} = C_d A \sqrt{2gh}$$

where:
- $A$ = orifice area
- $C_d$ = coefficient of discharge

### Vena Contracta

The jet contracts to minimum area at distance ≈ 0.5d downstream of orifice (where d = orifice diameter).

At vena contracta:
- Area is minimum: $A_{vc} = C_c A_0$
- Velocity is maximum: $v_{vc} = v_{\text{actual}}$
- Streamlines are parallel

---

## Time to Empty a Tank

### Variable Head

As fluid drains, height h decreases with time.

#### Setup

Tank with:
- Constant cross-sectional area: $A_t$
- Orifice area: $A_0$
- Initial height: $h_0$
- Final height: $h_f$ (usually 0)

#### Continuity Equation

Rate of volume decrease in tank = Flow rate through orifice

$$-A_t \frac{dh}{dt} = C_d A_0 \sqrt{2gh}$$

#### Solve for Time

$$-\frac{dh}{\sqrt{h}} = \frac{C_d A_0 \sqrt{2g}}{A_t} dt$$

Integrate from $h_0$ to $h_f$:

$$-2[\sqrt{h}]_{h_0}^{h_f} = \frac{C_d A_0 \sqrt{2g}}{A_t} t$$

$$2(\sqrt{h_0} - \sqrt{h_f}) = \frac{C_d A_0 \sqrt{2g}}{A_t} t$$

$$\boxed{t = \frac{2A_t}{C_d A_0 \sqrt{2g}}(\sqrt{h_0} - \sqrt{h_f})}$$

### To Completely Empty (h_f = 0)

$$\boxed{t = \frac{2A_t}{C_d A_0}\sqrt{\frac{h_0}{2g}}}$$

or

$$t = \frac{A_t}{C_d A_0}\sqrt{\frac{2h_0}{g}}$$

---

## Applications

### 1. Water Tanks and Reservoirs

- **Design drainage systems**
- Calculate emptying time
- Size overflow outlets
- Emergency drains

### 2. Dam Spillways

- Calculate discharge rates
- Design flood control systems
- Determine maximum flow

### 3. Fire Hydrants

- Estimate water flow rate
- Design fire suppression systems
- Calculate pressure requirements

### 4. Fuel Tanks

- Calculate refueling times
- Design drainage systems
- Emergency venting

### 5. Industrial Processes

- **Textile dyeing**: Drain times for vats
- **Chemical processing**: Tank drainage
- **Food processing**: Liquid transfer

### 6. Medical Applications

- IV drip rates
- Blood pressure measurement
- Drainage systems

### 7. Hydraulic Systems

- Calculate flow rates
- Design relief valves
- Size orifices

---

## Examples and Problems

### Example 1: Basic Application

**Problem**: A water tank has depth of 4 m. Calculate the speed of water exiting through an orifice at the bottom.

**Solution**:

Using Torricelli's theorem:
$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 4}$$

$$v = \sqrt{78.48} = 8.86 \text{ m/s}$$

**Verification**: Free fall from 4 m:
$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 4} = 8.86 \text{ m/s}$$ ✓

**Answer**: Exit velocity = 8.86 m/s

### Example 2: With Discharge Coefficient

**Problem**: A sharp-edged circular orifice (diameter 5 cm) is at the bottom of a tank filled to height 3 m. Calculate:
a) Theoretical velocity
b) Actual velocity (C_v = 0.98)
c) Theoretical flow rate
d) Actual flow rate (C_d = 0.61)

**Solution**:

a) **Theoretical velocity**:
$$v_{\text{th}} = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 3} = 7.67 \text{ m/s}$$

b) **Actual velocity**:
$$v_{\text{act}} = C_v v_{\text{th}} = 0.98 \times 7.67 = 7.52 \text{ m/s}$$

c) **Theoretical flow rate**:
$$A = \frac{\pi d^2}{4} = \frac{\pi (0.05)^2}{4} = 1.963 \times 10^{-3} \text{ m}^2$$

$$Q_{\text{th}} = A v_{\text{th}} = 1.963 \times 10^{-3} \times 7.67 = 0.0151 \text{ m}^3/\text{s}$$

$$Q_{\text{th}} = 15.1 \text{ L/s}$$

d) **Actual flow rate**:
$$Q_{\text{act}} = C_d A v_{\text{th}} = 0.61 \times 1.963 \times 10^{-3} \times 7.67$$

$$Q_{\text{act}} = 0.0092 \text{ m}^3/\text{s} = 9.2 \text{ L/s}$$

Or: $Q_{\text{act}} = C_d Q_{\text{th}} = 0.61 \times 15.1 = 9.2$ L/s

**Answers**: 
- Theoretical: 7.67 m/s, 15.1 L/s
- Actual: 7.52 m/s, 9.2 L/s

### Example 3: Time to Empty Tank

**Problem**: A cylindrical tank (diameter 2 m, initial height 5 m) drains through a 5 cm diameter orifice at the bottom. Calculate time to empty completely. Use C_d = 0.60.

**Solution**:

Tank area:
$$A_t = \frac{\pi (2)^2}{4} = 3.142 \text{ m}^2$$

Orifice area:
$$A_0 = \frac{\pi (0.05)^2}{4} = 1.963 \times 10^{-3} \text{ m}^2$$

Time to empty:
$$t = \frac{2A_t}{C_d A_0}\sqrt{\frac{h_0}{2g}}$$

$$t = \frac{2 \times 3.142}{0.60 \times 1.963 \times 10^{-3}}\sqrt{\frac{5}{2 \times 9.81}}$$

$$t = \frac{6.284}{1.178 \times 10^{-3}}\sqrt{0.255}$$

$$t = 5,333 \times 0.505 = 2,693 \text{ s}$$

$$t = 44.9 \text{ minutes} \approx 45 \text{ minutes}$$

**Answer**: Time to empty ≈ 45 minutes

### Example 4: Height for Required Velocity

**Problem**: What height of water is needed to produce an exit velocity of 10 m/s?

**Solution**:

From Torricelli's theorem:
$$v = \sqrt{2gh}$$

$$h = \frac{v^2}{2g} = \frac{(10)^2}{2 \times 9.81} = \frac{100}{19.62} = 5.10 \text{ m}$$

**Answer**: Required height = 5.10 m

**Verification**: $v = \sqrt{2 \times 9.81 \times 5.10} = 10$ m/s ✓

### Example 5: Horizontal Jet

**Problem**: A hole is made in the side of a tank 4 m below the water surface. If the tank is on the ground:
a) Find the initial horizontal velocity
b) Find where the jet hits the ground if hole is 2 m above ground
c) Find the range

**Solution**:

a) **Horizontal velocity**:
$$v_h = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 4} = 8.86 \text{ m/s}$$

b) **Time to fall 2 m**:
Vertical motion (free fall):
$$y = \frac{1}{2}gt^2$$

$$2 = \frac{1}{2}(9.81)t^2$$

$$t = \sqrt{\frac{2 \times 2}{9.81}} = 0.639 \text{ s}$$

c) **Horizontal range**:
$$R = v_h \times t = 8.86 \times 0.639 = 5.66 \text{ m}$$

**Answer**: Jet hits ground 5.66 m from tank base

**Interesting fact**: For a vertical tank wall, maximum range occurs at $h = H/2$ (where H = total height).

### Example 6: Two Orifices

**Problem**: A tank has two orifices: one at depth 1 m and another at depth 4 m. Find the ratio of their exit velocities.

**Solution**:

Velocity at depth $h_1 = 1$ m:
$$v_1 = \sqrt{2gh_1} = \sqrt{2g \times 1} = \sqrt{2g}$$

Velocity at depth $h_2 = 4$ m:
$$v_2 = \sqrt{2gh_2} = \sqrt{2g \times 4} = 2\sqrt{2g}$$

Ratio:
$$\frac{v_2}{v_1} = \frac{2\sqrt{2g}}{\sqrt{2g}} = 2$$

Or directly:
$$\frac{v_2}{v_1} = \sqrt{\frac{h_2}{h_1}} = \sqrt{\frac{4}{1}} = 2$$

**Answer**: Lower orifice has velocity twice that of upper orifice.

### Example 7: Tank with Inflow and Outflow

**Problem**: A tank receives water at 10 L/s while draining through an orifice (area 10 cm², C_d = 0.60) at the bottom. If water height is 2 m, is the tank filling or draining? At what rate?

**Solution**:

Inflow rate:
$$Q_{\text{in}} = 10 \text{ L/s} = 0.010 \text{ m}^3/\text{s}$$

Outflow rate:
$$Q_{\text{out}} = C_d A \sqrt{2gh}$$

$$Q_{\text{out}} = 0.60 \times 0.001 \times \sqrt{2 \times 9.81 \times 2}$$

$$Q_{\text{out}} = 0.0006 \times 6.26 = 0.00376 \text{ m}^3/\text{s} = 3.76 \text{ L/s}$$

Net rate:
$$Q_{\text{net}} = Q_{\text{in}} - Q_{\text{out}} = 10 - 3.76 = 6.24 \text{ L/s}$$

**Answer**: Tank is filling at 6.24 L/s

---

## Advanced Topics

### Effect of Depth Variation

For small changes in depth:
$$v(h) = \sqrt{2gh}$$

As $h$ decreases, velocity decreases:
$$\frac{dv}{dh} = \frac{1}{2}\sqrt{\frac{2g}{h}} = \frac{1}{2}\frac{v}{h}$$

### Power Delivered by Jet

$$\dot{W} = \frac{1}{2}\dot{m}v^2 = \frac{1}{2}\rho Q v^2 = \frac{1}{2}\rho A v^3$$

Substituting $v = \sqrt{2gh}$:
$$\dot{W} = \frac{1}{2}\rho A (2gh)^{3/2} = \rho A g h \sqrt{2gh}$$

### Jet Trajectory

For horizontal jet from height $h_1$ above ground with orifice at depth $h$ below surface:

Horizontal distance:
$$x = v \cdot t = \sqrt{2gh} \cdot \sqrt{\frac{2h_1}{g}} = 2\sqrt{hh_1}$$

Maximum range when $h = h_1$ (orifice at mid-height).

---

## Comparison with Other Theorems

| Theorem | Equation | Application |
|---------|----------|-------------|
| **Torricelli** | $v = \sqrt{2gh}$ | Orifice flow |
| **Free Fall** | $v = \sqrt{2gh}$ | Falling body |
| **Bernoulli** | $P + \frac{1}{2}\rho v^2 + \rho gh = const$ | General flow |
| **Poiseuille** | $Q = \frac{\pi r^4 \Delta P}{8\mu L}$ | Viscous pipe flow |

---

## Experimental Verification

### Simple Experiment

1. **Setup**: Water-filled bottle with small hole
2. **Measure**: Distance jet travels horizontally
3. **Calculate**: 
   - Depth: $h$
   - Height above ground: $h_1$
   - Range: $R = 2\sqrt{h h_1}$
4. **Compare**: Predicted vs. actual range

### Expected Results

For ideal conditions: Excellent agreement
For real conditions: Actual range ≈ 0.90-0.95 × theoretical (due to air resistance, viscosity)

---

## Summary

### Key Points

1. **Torricelli's Theorem**: $v = \sqrt{2gh}$
2. **Same as free fall**: Velocity independent of fluid density
3. **Real flow**: $Q = C_d A \sqrt{2gh}$ with $C_d \approx 0.60$
4. **Time to empty**: $t = \frac{2A_t}{C_d A_0}\sqrt{\frac{h_0}{2g}}$
5. **Applications**: Tanks, dams, drainage systems

### Quick Formulas

| Quantity | Formula |
|----------|---------|
| Exit velocity | $v = \sqrt{2gh}$ |
| Flow rate (theoretical) | $Q = A\sqrt{2gh}$ |
| Flow rate (actual) | $Q = C_d A\sqrt{2gh}$ |
| Time to empty | $t = \frac{2A_t}{C_d A_0}\sqrt{\frac{h_0}{2g}}$ |
| Horizontal range | $R = 2\sqrt{hh_1}$ |

---

## References

### Textbooks
1. **Fluid Mechanics** by Frank M. White, Chapter 3
2. **Introduction to Fluid Mechanics** by Fox, McDonald, and Pritchard, Chapter 6
3. **Fluid Mechanics** by Çengel and Cimbala, Chapter 5
4. **Engineering Fluid Mechanics** by Crowe, Elger, and Roberson

### Online Resources
1. [HyperPhysics - Torricelli's Law](http://hyperphysics.phy-astr.gsu.edu/hbase/toric.html)
2. [Khan Academy - Flow from Tanks](https://www.khanacademy.org/science/physics/fluids)
3. [Engineering Toolbox - Orifice Flow](https://www.engineeringtoolbox.com/orifice-nozzle-venturi-d_590.html)
4. [MIT - Fluid Dynamics](https://ocw.mit.edu/courses/mechanical-engineering/)

### Historical Papers
1. Torricelli, E. (1644). "Opera Geometrica"

### Standards
1. ISO 5167: Measurement of fluid flow by means of pressure differential devices
2. ASME standards for flow measurement

---

## Next Topics

- [Venturimeter](11-venturimeter.md)
- [Flow Measurement Devices](flow-measurement.md)
- [Applications of Bernoulli's Equation](applications.md)

---

**Last Updated**: January 27, 2026  
**Author**: BUTEX Fabric Department  
**Course Code**: PHY-101
