# Fluid Properties

**Course:** PHY-101 - Physics  
**Topic:** Fundamental Properties of Fluids  
**Date:** January 27, 2026  
**Institution:** BUTEX

---

## Table of Contents
1. [Density](#density)
2. [Specific Weight](#specific-weight)
3. [Specific Gravity](#specific-gravity)
4. [Pressure](#pressure)
5. [Compressibility](#compressibility)
6. [Surface Tension](#surface-tension)
7. [Examples and Problems](#examples-and-problems)
8. [References](#references)

---

## Density

### Definition

**Density (ρ)**: Mass per unit volume of a substance.

$$\rho = \frac{m}{V}$$

where:
- $m$ = mass (kg)
- $V$ = volume (m³)
- $\rho$ = density (kg/m³)

### Point Density

For a more rigorous definition:

$$\rho = \lim_{\Delta V \to \Delta V^*} \frac{\Delta m}{\Delta V}$$

where $\Delta V^*$ is the smallest volume for which the continuum assumption holds.

### Typical Values

| Fluid | Density (kg/m³) at 20°C, 1 atm |
|-------|-------------------------------|
| Air | 1.20 |
| Water | 998 |
| Mercury | 13,546 |
| Glycerin | 1,260 |
| Gasoline | 680 |
| Ethanol | 789 |
| Sea water | 1,025 |

### Temperature Dependence

For liquids, density typically decreases with temperature:

$$\rho(T) = \rho_0[1 - \beta(T - T_0)]$$

where:
- $\beta$ = coefficient of thermal expansion (K⁻¹)
- $T_0$ = reference temperature
- $\rho_0$ = density at reference temperature

For water: $\beta \approx 2.1 \times 10^{-4}$ K⁻¹

### Example 1: Calculating Mass from Density

**Problem**: A tank contains 2 m³ of water at 20°C. Calculate the mass of water.

**Solution**:
$$m = \rho V = 998 \times 2 = 1,996 \text{ kg} \approx 2,000 \text{ kg}$$

---

## Specific Weight

### Definition

**Specific Weight (γ)**: Weight per unit volume.

$$\gamma = \rho g$$

where:
- $g$ = acceleration due to gravity (9.81 m/s²)
- Units: N/m³

### Typical Values

| Fluid | Specific Weight (kN/m³) |
|-------|------------------------|
| Water | 9.79 |
| Mercury | 132.8 |
| Air | 0.0118 |
| Gasoline | 6.67 |

### Example 2: Specific Weight Calculation

**Problem**: Calculate the specific weight of ethanol at standard conditions.

**Solution**:
$$\gamma = \rho g = 789 \times 9.81 = 7,742 \text{ N/m}^3 = 7.74 \text{ kN/m}^3$$

---

## Specific Gravity

### Definition

**Specific Gravity (SG or s)**: Ratio of fluid density to reference density (usually water at 4°C).

$$SG = \frac{\rho_{\text{fluid}}}{\rho_{\text{water}}} = \frac{\gamma_{\text{fluid}}}{\gamma_{\text{water}}}$$

**Note**: Specific gravity is dimensionless.

For water at 4°C: $\rho_{\text{water}} = 1,000$ kg/m³

### Common Values

| Substance | Specific Gravity |
|-----------|-----------------|
| Mercury | 13.55 |
| Glycerin | 1.26 |
| Sea water | 1.025 |
| Gasoline | 0.68 |
| Ethanol | 0.79 |
| Ice | 0.92 |

### Example 3: Using Specific Gravity

**Problem**: The specific gravity of a liquid is 0.85. If 5 m³ of this liquid is stored in a tank, find its weight.

**Solution**:

First, find density:
$$\rho = SG \times \rho_{\text{water}} = 0.85 \times 1,000 = 850 \text{ kg/m}^3$$

Mass:
$$m = \rho V = 850 \times 5 = 4,250 \text{ kg}$$

Weight:
$$W = mg = 4,250 \times 9.81 = 41,692.5 \text{ N} \approx 41.7 \text{ kN}$$

---

## Pressure

### Definition

**Pressure (P)**: Normal force per unit area exerted by a fluid.

$$P = \frac{F}{A}$$

where:
- $F$ = force perpendicular to surface (N)
- $A$ = area (m²)
- $P$ = pressure (Pa = N/m²)

### Units of Pressure

1. **Pascal (Pa)**: 1 Pa = 1 N/m²
2. **Bar**: 1 bar = 10⁵ Pa
3. **Atmosphere (atm)**: 1 atm = 101,325 Pa
4. **mmHg**: 1 mmHg = 133.322 Pa
5. **psi**: 1 psi = 6,894.76 Pa

### Types of Pressure

#### 1. **Absolute Pressure**
Pressure measured relative to perfect vacuum.

$$P_{\text{abs}} = P_{\text{gauge}} + P_{\text{atm}}$$

#### 2. **Gauge Pressure**
Pressure measured relative to atmospheric pressure.

$$P_{\text{gauge}} = P_{\text{abs}} - P_{\text{atm}}$$

#### 3. **Vacuum Pressure**
Pressure below atmospheric pressure.

$$P_{\text{vacuum}} = P_{\text{atm}} - P_{\text{abs}}$$

### Pascal's Law

Pressure applied to a confined fluid is transmitted undiminished in all directions.

$$P_1 = P_2$$

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

### Hydrostatic Pressure

Pressure variation with depth in a static fluid:

$$P = P_0 + \rho gh$$

where:
- $P_0$ = pressure at surface
- $h$ = depth below surface
- $\rho$ = fluid density

**Derivation**:

Consider a fluid element at depth $h$:

Forces in vertical direction:
- Weight: $W = \rho g A h$
- Pressure force at top: $F_{\text{top}} = P_0 A$
- Pressure force at bottom: $F_{\text{bottom}} = P A$

Equilibrium condition:
$$PA = P_0 A + \rho g A h$$

$$P = P_0 + \rho gh$$

### Example 4: Pressure at Depth

**Problem**: Calculate the absolute pressure at a depth of 10 m in water. Take atmospheric pressure = 101.3 kPa.

**Solution**:

$$P = P_{\text{atm}} + \rho gh$$
$$P = 101,300 + 998 \times 9.81 \times 10$$
$$P = 101,300 + 97,900$$
$$P = 199,200 \text{ Pa} = 199.2 \text{ kPa}$$

Gauge pressure:
$$P_{\text{gauge}} = \rho gh = 97.9 \text{ kPa}$$

---

## Compressibility

### Bulk Modulus

**Bulk Modulus (K)**: Measure of fluid's resistance to compression.

$$K = -V \frac{dP}{dV} = \rho \frac{dP}{d\rho}$$

where:
- $V$ = volume
- $P$ = pressure
- $\rho$ = density

### Isothermal Compressibility

$$\beta_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T = \frac{1}{K}$$

Units: Pa⁻¹

### Typical Values

| Fluid | Bulk Modulus (GPa) | Compressibility (Pa⁻¹) |
|-------|-------------------|----------------------|
| Water (20°C) | 2.2 | 4.5 × 10⁻¹⁰ |
| Mercury | 25.0 | 4.0 × 10⁻¹¹ |
| Air (isothermal) | 0.000101 | 9.9 × 10⁻⁶ |
| Glycerin | 4.35 | 2.3 × 10⁻¹⁰ |

### Incompressible Flow Assumption

Flow can be treated as incompressible if:

$$\Delta \rho / \rho_0 < 0.05$$

or

$$Ma = \frac{v}{c} < 0.3$$

where $Ma$ = Mach number, $c$ = speed of sound

### Example 5: Compressibility Effect

**Problem**: Water at 1 atm is compressed to 100 atm. Calculate the percentage change in density. (K = 2.2 GPa)

**Solution**:

$$K = \rho \frac{dP}{d\rho}$$

For small changes:
$$\frac{\Delta \rho}{\rho} = \frac{\Delta P}{K}$$

$$\Delta P = (100 - 1) \times 101,325 = 10,031,175 \text{ Pa} = 10.03 \text{ MPa}$$

$$\frac{\Delta \rho}{\rho} = \frac{10.03 \times 10^6}{2.2 \times 10^9} = 0.00456 = 0.456\%$$

**Answer**: Density increases by 0.456%, which is negligible. Water can be treated as incompressible for most applications.

---

## Surface Tension

### Definition

**Surface Tension (σ)**: Energy required to increase the surface area by one unit.

$$\sigma = \frac{F}{L} = \frac{\text{Force}}{\text{Length}}$$

Units: N/m or J/m²

### Physical Origin

Surface molecules experience a net inward force due to cohesive forces, creating a "skin" effect at the interface.

### Typical Values (at 20°C)

| Liquid-Air Interface | Surface Tension (mN/m) |
|---------------------|----------------------|
| Water | 72.8 |
| Mercury | 486.5 |
| Ethanol | 22.3 |
| Glycerin | 63.4 |
| Soap solution | 25-30 |

### Pressure Inside a Droplet

For a spherical droplet of radius $r$:

$$\Delta P = P_{\text{inside}} - P_{\text{outside}} = \frac{2\sigma}{r}$$

**Derivation**:

Consider hemispherical droplet in equilibrium:

Surface tension force: $F_\sigma = \sigma \cdot 2\pi r$

Pressure force: $F_P = \Delta P \cdot \pi r^2$

Balance: $\Delta P \cdot \pi r^2 = \sigma \cdot 2\pi r$

$$\Delta P = \frac{2\sigma}{r}$$

### Pressure Inside a Bubble

For a soap bubble (two surfaces):

$$\Delta P = \frac{4\sigma}{r}$$

### Capillary Rise

Height of liquid rise in a capillary tube:

$$h = \frac{2\sigma \cos\theta}{\rho g r}$$

where:
- $\theta$ = contact angle
- $r$ = tube radius

For water in glass: $\theta \approx 0°$, $\cos\theta \approx 1$

$$h = \frac{2\sigma}{\rho g r}$$

### Example 6: Capillary Rise

**Problem**: Calculate the capillary rise of water in a glass tube of radius 0.5 mm. (σ = 0.073 N/m, θ = 0°)

**Solution**:

$$h = \frac{2\sigma \cos\theta}{\rho g r}$$

$$h = \frac{2 \times 0.073 \times \cos(0°)}{998 \times 9.81 \times 0.0005}$$

$$h = \frac{0.146}{4.895} = 0.0298 \text{ m} = 29.8 \text{ mm}$$

**Answer**: Water rises approximately 30 mm in the tube.

---

## Examples and Problems

### Problem 1: Density Mixture

**Problem**: Two liquids with densities 800 kg/m³ and 1,200 kg/m³ are mixed in equal volumes. Find the density of the mixture.

**Solution**:

Let each volume = V

Total mass:
$$m_{\text{total}} = \rho_1 V + \rho_2 V = (800 + 1,200)V = 2,000V$$

Total volume: $V_{\text{total}} = 2V$

Mixture density:
$$\rho_{\text{mix}} = \frac{m_{\text{total}}}{V_{\text{total}}} = \frac{2,000V}{2V} = 1,000 \text{ kg/m}^3$$

### Problem 2: Hydraulic Press

**Problem**: A hydraulic press has a small piston of diameter 2 cm and a large piston of diameter 20 cm. If a force of 100 N is applied to the small piston, what force is exerted by the large piston?

**Solution**:

From Pascal's law:
$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

$$F_2 = F_1 \frac{A_2}{A_1} = F_1 \frac{\pi d_2^2/4}{\pi d_1^2/4} = F_1 \frac{d_2^2}{d_1^2}$$

$$F_2 = 100 \times \frac{(20)^2}{(2)^2} = 100 \times 100 = 10,000 \text{ N} = 10 \text{ kN}$$

### Problem 3: Pressure in Oil Tank

**Problem**: An oil tank contains oil of specific gravity 0.9 to a height of 5 m above a pipe outlet. Calculate the gauge pressure at the outlet.

**Solution**:

Density of oil:
$$\rho = SG \times \rho_{\text{water}} = 0.9 \times 1,000 = 900 \text{ kg/m}^3$$

Gauge pressure:
$$P = \rho gh = 900 \times 9.81 \times 5 = 44,145 \text{ Pa} = 44.1 \text{ kPa}$$

---

## References

### Textbooks
1. **Fluid Mechanics** by Frank M. White, Chapter 1: Introduction
2. **Munson, Young, and Okiishi's Fundamentals of Fluid Mechanics** (Wiley, 8th Edition)
3. **Fluid Mechanics** by Çengel and Cimbala, Chapter 2: Properties of Fluids

### Online Resources
1. [Engineering Toolbox - Fluid Properties](https://www.engineeringtoolbox.com/fluids-properties-d_293.html)
2. [HyperPhysics - Fluid Properties](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html)
3. [Khan Academy - Pressure and Density](https://www.khanacademy.org/science/physics/fluids/density-and-pressure/v/pressure-and-pascals-principle-part-1)
4. [MIT OpenCourseWare - Fluid Properties](https://ocw.mit.edu/courses/mechanical-engineering/)

### Standards
1. ISO 1000:1992 - SI units and recommendations for use
2. NIST Reference Fluid Thermodynamic and Transport Properties Database

---

## Next Topics

- [Rate of Flow](03-rate-of-flow.md)
- [Uniform Motion](04-uniform-motion.md)
- [Viscosity](03-viscosity-detailed.md)

---

**Last Updated**: January 27, 2026  
**Author**: BUTEX Fabric Department  
**Course Code**: PHY-101
