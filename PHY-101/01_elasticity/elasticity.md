# Elasticity - Comprehensive University Notes

## Table of Contents
1. [Introduction to Elasticity](#introduction-to-elasticity)
2. [Hooke's Law](#hookes-law)
3. [Classification of Bodies](#classification-of-bodies)
4. [Elastic Limit, Breaking Weight and Breaking Stress](#elastic-limit-breaking-weight-and-breaking-stress)
5. [Types of Elasticity](#types-of-elasticity)
6. [Poisson's Ratio](#poissons-ratio) 
7. [Shear and Its Equivalence](#shear-and-its-equivalence)
8. [Elastic Constants and Their Relations](#elastic-constants-and-their-relations)
9. [Work Done in Strain](#work-done-in-strain)
10. [Deformation by Bending](#deformation-by-bending)
11. [Practice Problems with Solutions](#practice-problems-with-solutions)
12. [References](#references)

---

## Introduction to Elasticity

**Elasticity** is the property of a material by virtue of which it regains its original shape and size after the removal of the deforming force.

### Key Definitions

- **Stress (σ)**: Force per unit area applied to a material
  ```
  σ = F/A
  ```
  where F is the applied force and A is the cross-sectional area.
  - Unit: N/m² or Pascal (Pa)

- **Strain (ε)**: The fractional change in dimension of a body
  ```
  ε = ΔL/L
  ```
  where ΔL is the change in length and L is the original length.
  - Strain is dimensionless

- **Elastic Modulus**: The ratio of stress to strain
  ```
  Elastic Modulus = Stress/Strain
  ```

---

## Hooke's Law

**Hooke's Law** states that within the elastic limit, stress is directly proportional to strain.

### Mathematical Expression

```
σ ∝ ε
σ = E × ε
```

where E is the modulus of elasticity (Young's modulus for tensile/compressive stress).

### Important Points

1. Valid only within the elastic limit
2. The constant of proportionality (E) is called the elastic modulus
3. Different types of deformation have different elastic moduli

### Example 1: Hooke's Law Application

**Problem**: A steel wire of length 2 m and cross-sectional area 0.5 mm² is stretched by 1 mm when a force of 100 N is applied. Calculate Young's modulus.

**Solution**:
```
Given:
L = 2 m = 2000 mm
A = 0.5 mm²
ΔL = 1 mm
F = 100 N

Stress σ = F/A = 100/(0.5 × 10⁻⁶) = 2 × 10⁸ N/m²

Strain ε = ΔL/L = 1/2000 = 5 × 10⁻⁴

Young's Modulus E = σ/ε = (2 × 10⁸)/(5 × 10⁻⁴)
                    E = 4 × 10¹¹ N/m²
```

---

## Classification of Bodies

### 1. Rigid Body

A body that does not undergo any deformation under the action of external forces is called a **rigid body**.

- **Reality**: Perfectly rigid bodies do not exist in nature
- **Approximation**: Bodies with negligible deformation can be treated as rigid
- **Example**: A steel block under small loads

### 2. Perfect Elastic Body

A body that completely regains its original shape and size after the removal of the deforming force is called a **perfectly elastic body**.

- **Characteristics**:
  - No permanent deformation
  - Complete recovery
  - No energy loss (hysteresis loss = 0)
- **Example**: Quartz fiber (closest to perfect elasticity)

### 3. Plastic Body

A body that does not regain its original shape and size even partially after the removal of the deforming force is called a **perfectly plastic body**.

- **Characteristics**:
  - Permanent deformation
  - No recovery
  - All energy is used in deformation
- **Example**: Putty, clay, wet mud

### Comparison Table

| Property | Rigid Body | Elastic Body | Plastic Body |
|----------|------------|--------------|--------------|
| Deformation | None | Temporary | Permanent |
| Recovery | N/A | Complete | None |
| Energy Loss | N/A | Minimal | Complete |
| Real Examples | None (ideal) | Quartz, Steel (small loads) | Clay, Putty |

---

Strain energy density $$u$$ represents the elastic potential energy stored per unit volume in a material under deformation, derived from the work done by applied stress. For linearly elastic materials obeying Hooke's law, this yields $$u = \frac{1}{2} \sigma \varepsilon = \frac{1}{2} E \varepsilon^2 = \frac{1}{2} \frac{\sigma^2}{E}$$, where $$\sigma$$ is stress, $$\varepsilon$$ is strain, and $$E$$ is Young's modulus [1][2]. The following provides a detailed step-by-step proof using both integral (fundamental work-energy) and discrete (force-displacement) approaches, including derivatives.

## Discrete Derivation
Consider a prismatic bar of length $$L$$ and constant cross-sectional area $$A$$ under uniaxial tensile load $$F$$ increasing linearly from 0 to final value $$F$$ [3]. The total elongation is $$\Delta L$$, and volume $$V = A L$$.

- Strain $$\varepsilon = \frac{\Delta L}{L}$$ (uniform).
- Stress $$\sigma = \frac{F}{A}$$.
- Force varies linearly with displacement $$\delta$$ along the bar: $$F(\delta) = \frac{F}{\Delta L} \delta$$.
- Incremental work $$dU = F(\delta) \, d\delta$$.
- Total strain energy $$U = \int_0^{\Delta L} F(\delta) \, d\delta = \int_0^{\Delta L} \frac{F}{\Delta L} \delta \, d\delta = \frac{F}{\Delta L} \cdot \frac{(\Delta L)^2}{2} = \frac{1}{2} F \Delta L$$ [1].
- Thus, $$u = \frac{U}{V} = \frac{\frac{1}{2} F \Delta L}{A L} = \frac{1}{2} \left( \frac{F}{A} \right) \left( \frac{\Delta L}{L} \right) = \frac{1}{2} \sigma \varepsilon$$ [1].

Using Hooke's law $$\sigma = E \varepsilon$$, substitute to get $$u = \frac{1}{2} E \varepsilon^2 = \frac{\sigma^2}{2E}$$ [1][2].

## Continuum Derivation
For a material point under uniaxial stress $$\sigma(z)$$ varying with position $$z$$ (0 to $$L$$), local strain $$\varepsilon(z) = \frac{\sigma(z)}{E}$$ [1].

- Local strain energy density from work by stress: infinitesimal stress $$\sigma$$ acting through strain increment $$d\varepsilon$$ does work $$\sigma \, d\varepsilon$$.
- Total $$u = \int_0^\varepsilon \sigma \, d\varepsilon'$$.
- With linear $$\sigma = E \varepsilon'$$, $$u = \int_0^\varepsilon E \varepsilon' \, d\varepsilon' = E \cdot \frac{\varepsilon^2}{2} = \frac{1}{2} E \varepsilon^2 = \frac{\sigma^2}{2E}$$ [1].
- Total energy $$U = \int_V u \, dV = \int_V \frac{1}{2} \sigma \varepsilon \, dV$$, confirming per-unit-volume form [2].

## Geometric Interpretation
In the linear stress-strain diagram, $$u$$ is the area of the triangle under the curve up to yield point: base $$\varepsilon_y$$, height $$\sigma_y$$, area $$\frac{1}{2} \sigma_y \varepsilon_y$$ [4]. This is the modulus of resilience for energy absorbed elastically before yielding [5].

[1](https://en.wikipedia.org/wiki/Strain_energy)
[2](https://pmc.ncbi.nlm.nih.gov/articles/PMC10221263/)
[3](https://homework.study.com/explanation/prove-that-elastic-energy-density-is-1-2-stress-times-strain.html)
[4](https://www.apsed.in/post/modulus-of-resilience)
[5](https://testbook.com/civil-engineering/modulus-of-resilience)
[6](https://en.wikipedia.org/wiki/Strain_energy_density_function)
[7](https://testbook.com/question-answer/the-elastic-behavior-of-material-for-linear-stress--62df98dd4ad06a2ebe54047c)
[8](https://byjus.com/energy-density-formula/)
[9](https://www.sciencedirect.com/topics/engineering/strain-energy-density)
[10](https://askfilo.com/user-question-answers-smart-solutions/the-strain-energy-density-of-an-elastic-material-under-a-3334313536323538)

## Elastic Limit, Breaking Weight and Breaking Stress

### Elastic Limit

The **elastic limit** is the maximum stress that can be applied to a material without causing permanent deformation.

- Beyond elastic limit: permanent deformation occurs
- Within elastic limit: Hooke's law is valid
- Also called **proportional limit** when stress-strain relationship is linear

### Stress-Strain Curve

```
      Stress (σ)
         |
         |         D (Ultimate Strength)
         |        /|\
         |       / | \
         |      /  |  \ E (Breaking Point)
         |     /   |   \
         |    /C   |    \
         |   /     |     \
         |  /B     |      \
         | /       |       \
         |/A_______|________\___________
         |________________________ Strain (ε)
         
A: Proportional Limit
B: Elastic Limit
C: Yield Point
D: Ultimate Strength
E: Breaking Point
```

### Breaking Weight

The **breaking weight** (or breaking load) is the maximum weight that can be suspended from a wire before it breaks.

```
Breaking Weight (W) = Breaking Stress × Area
W = σ_b × A
```

### Breaking Stress

The **breaking stress** (or ultimate tensile strength) is the maximum stress a material can withstand before breaking.

```
Breaking Stress σ_b = F_max / A
```

### Example 2: Breaking Stress Calculation

**Problem**: A steel wire has a breaking stress of 8 × 10⁸ N/m². What is the maximum load that can be suspended from a wire of diameter 2 mm?

**Solution**:
```
Given:
Breaking stress σ_b = 8 × 10⁸ N/m²
Diameter d = 2 mm = 2 × 10⁻³ m
Radius r = 1 × 10⁻³ m

Area A = πr² = π × (1 × 10⁻³)² = π × 10⁻⁶ m²

Maximum Load F_max = σ_b × A
                   = 8 × 10⁸ × π × 10⁻⁶
                   = 800π N
                   ≈ 2513 N

Maximum weight W = F_max/g = 2513/9.8 ≈ 256.4 kg
```

---

## Types of Elasticity

There are three main types of elastic moduli corresponding to three types of deformation:

### 1. Young's Modulus (E)

Relates to **longitudinal strain** (stretching or compression along length).

```
E = (F/A) / (ΔL/L) = σ/ε
```

- **Unit**: N/m² or Pa
- **Typical values**:
  - Steel: ~2 × 10¹¹ Pa
  - Aluminum: ~7 × 10¹⁰ Pa
  - Rubber: ~5 × 10⁶ Pa

### 2. Bulk Modulus (K)

Relates to **volume strain** (change in volume under uniform pressure).

```
K = -ΔP / (ΔV/V) = -P/(ΔV/V)
```

where:
- ΔP = change in pressure
- ΔV = change in volume
- V = original volume
- Negative sign indicates volume decreases with increased pressure

- **Unit**: N/m² or Pa
- **Compressibility**: κ = 1/K

### 3. Shear Modulus (G) or Modulus of Rigidity

Relates to **shearing strain** (change in shape without change in volume).

```
G = (F/A) / φ = τ/φ
```

where:
- τ = shearing stress = F/A
- φ = shearing strain (angle of shear in radians)

- **Unit**: N/m² or Pa

### Summary Table

| Modulus | Type of Stress | Type of Strain | Formula |
|---------|---------------|----------------|---------|
| Young's (E) | Tensile/Compressive | Longitudinal | σ/ε |
| Bulk (K) | Hydraulic Pressure | Volume | -ΔP/(ΔV/V) |
| Shear (G) | Tangential | Shearing | τ/φ |

---


## Poisson's Ratio

When a material is stretched in one direction, it tends to compress in the perpendicular directions. **Poisson's ratio** (ν or σ) quantifies this effect.

### Definition

```
ν = -(Lateral Strain)/(Longitudinal Strain)
  = -(Δd/d)/(ΔL/L)
```

where:
- Δd = change in diameter (or width)
- d = original diameter
- ΔL = change in length
- L = original length

### Properties

1. **Dimensionless** quantity
2. **Range**: -1 ≤ ν ≤ 0.5
   - For most materials: 0 < ν < 0.5
   - ν = 0.5 for incompressible materials (rubber)
   - Theoretical minimum ν = -1 ([Auxetic Materials](https://en.wikipedia.org/wiki/Auxetics))
   - Theoretical maximum ν = 0.5

3. **Typical values**:
   - Cork: ~0 (almost no lateral contraction)
   - Steel: ~0.3
   - Rubber: ~0.5
   - Concrete: ~0.2

### Mathematical Derivation

Consider a rectangular bar stretched along the x-axis:

```
Longitudinal strain ε_L = ΔL/L
Lateral strain ε_lat = Δd/d

Poisson's ratio ν = -ε_lat/ε_L
```

For a rod of length L and diameter d:
- When stretched: L increases, d decreases
- When compressed: L decreases, d increases

### Example 3: Poisson's Ratio

**Problem**: A metal rod of length 1 m and diameter 10 mm is stretched by 1 mm. If Poisson's ratio is 0.3, find the change in diameter.

**Solution**:
```
Given:
L = 1 m = 1000 mm
d = 10 mm
ΔL = 1 mm
ν = 0.3

Longitudinal strain ε_L = ΔL/L = 1/1000 = 0.001

From Poisson's ratio:
ν = -(Δd/d)/(ΔL/L)

0.3 = -(Δd/10)/0.001

Δd = -0.3 × 0.001 × 10
   = -0.003 mm
   = -3 μm

The diameter decreases by 3 μm (negative indicates reduction).
```

---

## Shear and Its Equivalence

### Shear Deformation

**Shearing stress** is tangential force per unit area that causes layers of material to slide over each other.

```
Shearing Stress τ = F_tangential / A

Shearing Strain φ = x/L = tan θ ≈ θ (for small angles)
```

where x is the lateral displacement and L is the height.

### Theorem: Shear is Equivalent to Compression and Extension

**Statement**: A shearing stress is equivalent to the combination of:
1. A tensile stress at 45° to the direction of shear
2. An equal compressive stress at right angles to the tensile stress

### Mathematical Proof

Consider a cube subjected to shearing stress τ on its faces.

Let's analyze the stress on a plane inclined at angle θ to the horizontal:

For a plane at 45°:
```
Normal stress σ_n = τ sin(2θ)
At θ = 45°: σ_n = τ sin(90°) = τ (tensile)

At θ = 135°: σ_n = τ sin(270°) = -τ (compressive)
```

**Principal Stresses**:
```
σ_1 = +τ (maximum tensile stress at 45°)
σ_2 = -τ (maximum compressive stress at 135° or -45°)
```

### Visual Representation

```
Original Square:          Under Shear:          Stress Analysis:
    
    ┌────┐                  ╱────╲               
    │    │                 ╱      ╲              σ₁ = +τ (45°)
    │    │       →        ╱        ╲       →     
    │    │               ╱          ╲            
    └────┘              ╱────────────╲           σ₂ = -τ (-45°)
                       
    τ →               Sheared shape           Principal stresses
```

### Key Points

1. **Diagonal tension and compression**: The maximum tensile and compressive stresses occur at 45° to the shear direction
2. **Equal magnitude**: Both stresses equal the shear stress in magnitude
3. **Perpendicular**: The two principal stresses are perpendicular to each other
4. **No shear on principal planes**: On the 45° planes, only normal stresses exist

### Example 4: Shear Equivalence

**Problem**: A material is subjected to a shearing stress of 100 MPa. What are the maximum tensile and compressive stresses, and at what angles do they occur?

**Solution**:
```
Given:
τ = 100 MPa

From the equivalence theorem:
Maximum tensile stress σ_1 = τ = 100 MPa at θ = 45°
Maximum compressive stress σ_2 = -τ = -100 MPa at θ = -45° (or 135°)

The material experiences:
- 100 MPa tension along a plane at 45° to the shear direction
- 100 MPa compression along a plane perpendicular to the tensile plane
```

---

## Elastic Constants and Their Relations

For an isotropic elastic material, there are four elastic constants:
1. Young's Modulus (E)
2. Bulk Modulus (K)
3. Shear Modulus (G)
4. Poisson's Ratio (ν)

**Important**: Only **two** of these are independent. The other two can be derived.

### Fundamental Relations

#### 1. Relation between E, G, and ν

```
E = 2G(1 + ν)
```

**Derivation**:

Consider a cube subjected to shear stress τ. This is equivalent to:
- Tensile stress σ = τ at 45°
- Compressive stress σ = -τ at -45°

For tensile stress along 45° direction:
```
Extension along 45° = (σ/E) + ν(σ/E) = σ(1+ν)/E
```

For shear:
```
Shear strain φ = τ/G
```

The extension along 45° due to shear equals diagonal displacement:
```
√2 × φ/2 = τ/G × 1/√2

Also, extension = σ(1+ν)/E = τ(1+ν)/E

Equating:
τ/G × 1/√2 = τ(1+ν)/E × √2/2

1/G = (1+ν)/E

∴ E = 2G(1 + ν)
```

#### 2. Relation between E, K, and ν

```
E = 3K(1 - 2ν)
```

**Derivation**:

For a cube under hydrostatic pressure p:
```
Volumetric strain = -3p/K (negative indicates compression)
```

Linear strain in each direction = p/K (compression)

Also, under pressure p on all faces, stress in each direction = -p

Strain in x-direction:
```
ε_x = -p/E + ν(p/E) + ν(p/E) = -p/E + 2νp/E = p(2ν - 1)/E
```

But also: ε_x = -p/K

Equating:
```
p(2ν - 1)/E = -p/K

(2ν - 1)/E = -1/K

E = -K(2ν - 1) = K(1 - 2ν) × 3/3

For three dimensions:
E = 3K(1 - 2ν)
```

#### 3. Relation between K, G, and E

```
E = 9KG/(3K + G)
```

**Derivation**:

From E = 2G(1 + ν) → ν = E/(2G) - 1

From E = 3K(1 - 2ν) → ν = (3K - E)/(6K)

Equating:
```
E/(2G) - 1 = (3K - E)/(6K)

3KE - 6KG = 3KG - EG

3KE + EG = 9KG

E(3K + G) = 9KG

∴ E = 9KG/(3K + G)
```

#### 4. Relation between K, G, and ν

```
K = 2G(1 + ν)/(3(1 - 2ν))
```

or equivalently:

```
G = 3K(1 - 2ν)/(2(1 + ν))
```

### Summary of All Relations

| Relation | Formula |
|----------|---------|
| E, G, ν | E = 2G(1 + ν) |
| E, K, ν | E = 3K(1 - 2ν) |
| E, K, G | E = 9KG/(3K + G) |
| K, G, ν | K = 2G(1 + ν)/[3(1 - 2ν)] |
| ν from E, G | ν = E/(2G) - 1 |
| ν from E, K | ν = (3K - E)/(6K) |

### Limits on Poisson's Ratio

From E = 3K(1 - 2ν):
- Since E > 0 and K > 0
- (1 - 2ν) > 0
- **ν < 0.5**

From E = 2G(1 + ν):
- Since E > 0 and G > 0
- (1 + ν) > 0
- **ν > -1**

Therefore: **-1 < ν < 0.5**

For most real materials: **0 < ν < 0.5**

### Example 5: Elastic Constants Relations

**Problem**: For a material, E = 200 GPa and ν = 0.25. Calculate G and K.

**Solution**:
```
Given:
E = 200 GPa = 200 × 10⁹ Pa
ν = 0.25

Finding Shear Modulus G:
E = 2G(1 + ν)
200 × 10⁹ = 2G(1 + 0.25)
200 × 10⁹ = 2G(1.25)
200 × 10⁹ = 2.5G

G = 200 × 10⁹/2.5 = 80 × 10⁹ Pa = 80 GPa

Finding Bulk Modulus K:
E = 3K(1 - 2ν)
200 × 10⁹ = 3K(1 - 2 × 0.25)
200 × 10⁹ = 3K(1 - 0.5)
200 × 10⁹ = 3K(0.5)
200 × 10⁹ = 1.5K

K = 200 × 10⁹/1.5 = 133.33 × 10⁹ Pa = 133.33 GPa

Verification using E = 9KG/(3K + G):
E = 9 × 133.33 × 80/(3 × 133.33 + 80)
E = 96,000/(400 + 80)
E = 96,000/480 = 200 GPa ✓
```

---

## Work Done in Strain

When a material is deformed, work is done against the internal restoring forces. This work is stored as **elastic potential energy** (strain energy).

### Linear Elastic Deformation

For a wire or rod under tensile stress:

```
Work done W = ½ × Force × Extension
            = ½ × F × ΔL
```

### Energy Density

**Strain energy per unit volume** (u):

```
u = Work done / Volume
  = (½FΔL)/(AL)
  = ½(F/A)(ΔL/L)
  = ½σε
  = ½(E ε)ε    [since σ = Eε]
  = ½Eε²
  = ½σ²/E
```

### General Formula

For any elastic deformation:

```
Strain Energy Density u = ½ × Stress × Strain
```

Different forms:
1. u = ½σε (general)
2. u = ½Eε² (in terms of strain)
3. u = ½σ²/E (in terms of stress)

### For Different Types of Deformation

#### 1. Longitudinal Deformation (Young's Modulus)

```
u = ½Eε² = ½σ²/E = ½σε
```

#### 2. Volume Deformation (Bulk Modulus)

```
u = ½K(ΔV/V)² = ½p²/K = ½p(ΔV/V)
```

where p is the hydrostatic pressure.

#### 3. Shear Deformation (Shear Modulus)

```
u = ½Gφ² = ½τ²/G = ½τφ
```

where τ is shearing stress and φ is shearing strain.

### Total Strain Energy

For a uniform wire of length L and cross-sectional area A:

```
Total Strain Energy U = u × Volume
                      = u × AL
                      = ½(F²L)/(AE)
```

### Graphical Interpretation

The work done is the area under the force-extension curve (or stress-strain curve).

```
    Force
      |
      |     /
      |    /|
      |   / |
      |  /  |  Area = ½F × ΔL
      | /   |  (Triangle for linear elastic)
      |/____|____________ Extension
            ΔL
```

### Example 6: Strain Energy Calculation

**Problem**: A steel wire of length 2 m, diameter 1 mm, and Young's modulus 2 × 10¹¹ Pa is stretched by 2 mm. Calculate:
(a) The strain energy stored
(b) The strain energy per unit volume

**Solution**:
```
Given:
L = 2 m
d = 1 mm = 1 × 10⁻³ m
r = 0.5 × 10⁻³ m
E = 2 × 10¹¹ Pa
ΔL = 2 mm = 2 × 10⁻³ m

Area A = πr² = π × (0.5 × 10⁻³)² = π × 0.25 × 10⁻⁶ m²
       = 0.785 × 10⁻⁶ m²

Strain ε = ΔL/L = (2 × 10⁻³)/2 = 1 × 10⁻³

Stress σ = Eε = 2 × 10¹¹ × 1 × 10⁻³ = 2 × 10⁸ Pa

(a) Total strain energy:
U = ½σεV where V = AL
U = ½ × 2 × 10⁸ × 1 × 10⁻³ × (0.785 × 10⁻⁶ × 2)
U = ½ × 2 × 10⁸ × 1 × 10⁻³ × 1.57 × 10⁻⁶
U = 0.157 J

(b) Strain energy per unit volume:
u = ½σε = ½Eε²
u = ½ × 2 × 10¹¹ × (1 × 10⁻³)²
u = ½ × 2 × 10¹¹ × 1 × 10⁻⁶
u = 1 × 10⁵ J/m³

Verification:
U = u × V = 1 × 10⁵ × 1.57 × 10⁻⁶ = 0.157 J ✓
```

---

## Deformation by Bending

When a beam is subjected to bending, the upper surface is compressed while the lower surface is extended (or vice versa). There exists a **neutral surface** where there is no extension or compression.

### Key Concepts

1. **Neutral Axis**: The line of intersection of the neutral surface with a cross-section of the beam
2. **Neutral Surface**: The surface within the beam where fibers are neither compressed nor extended
3. **Radius of Curvature (R)**: The radius of the curved neutral surface

### Bending Equation

The fundamental equation of bending (also called flexure formula):

```
M/I = σ/y = E/R
```

where:
- M = bending moment
- I = moment of inertia of the cross-section about the neutral axis
- σ = bending stress at distance y from neutral axis
- y = distance from neutral axis
- E = Young's modulus
- R = radius of curvature

### Derivation of Bending Equation

Consider a beam bent to radius R:

For a fiber at distance y from the neutral axis:
```
Original length = L
Final length = L(1 + y/R)

Strain ε = y/R
Stress σ = Eε = Ey/R
```

For the entire cross-section, the total moment:
```
M = ∫ σy dA = ∫ (Ey/R)y dA = (E/R) ∫ y² dA

Since I = ∫ y² dA (second moment of area):

M = EI/R

Therefore: M/I = E/R
```

Also, from σ = Ey/R:
```
σ/y = E/R
```

Combining: **M/I = σ/y = E/R**

### Maximum Bending Stress

The maximum stress occurs at the maximum distance from the neutral axis:

```
σ_max = My_max/I
```

For a rectangular beam of width b and depth d:
- y_max = d/2
- I = bd³/12

```
σ_max = M(d/2)/(bd³/12) = 6M/(bd²)
```

### Section Modulus (Z)

Defined as Z = I/y_max

```
σ_max = M/Z
```

### Moment of Inertia for Common Shapes

| Shape | Moment of Inertia (I) | Section Modulus (Z) |
|-------|----------------------|---------------------|
| Rectangle (b × d) | bd³/12 | bd²/6 |
| Circle (radius r) | πr⁴/4 | πr³/4 |
| Hollow Circle (R outer, r inner) | π(R⁴ - r⁴)/4 | π(R⁴ - r⁴)/(4R) |
| I-beam | Complex | Complex |

---

## Bending Moment

**Bending Moment (M)** at any section of a beam is the algebraic sum of the moments about that section of all forces acting on either side of the section.

### Sign Convention

- **Positive (Sagging)**: Causes compression in upper fibers, tension in lower fibers
- **Negative (Hogging)**: Causes tension in upper fibers, compression in lower fibers

```
Positive Bending:        Negative Bending:
    ⌒                        ⌣
   ╱ ╲                      ╲ ╱
  ╱   ╲                      ╲ ╱
(Sagging)                  (Hogging)
```

### Calculating Bending Moment

For a simply supported beam with load W at distance a from left end:

```
At distance x from left end (x < a):
M(x) = R_A × x

where R_A is the reaction at left support.
```

### Relation to Shear Force

```
dM/dx = V

where V is the shear force.
```

### Relation to Load

```
d²M/dx² = -w

where w is the distributed load per unit length.
```

### Example 7: Beam Bending

**Problem**: A rectangular beam of width 10 cm and depth 20 cm is simply supported at both ends with a span of 4 m. A concentrated load of 10 kN is applied at the center. Calculate:
(a) Maximum bending moment
(b) Maximum bending stress
(c) Radius of curvature if E = 2 × 10¹⁰ Pa

**Solution**:
```
Given:
b = 10 cm = 0.1 m
d = 20 cm = 0.2 m
L = 4 m
W = 10 kN = 10,000 N
E = 2 × 10¹⁰ Pa

(a) Maximum bending moment (at center for central load):
M_max = WL/4 = 10,000 × 4/4 = 10,000 N·m

(b) Moment of inertia:
I = bd³/12 = 0.1 × (0.2)³/12
I = 0.1 × 0.008/12 = 6.67 × 10⁻⁵ m⁴

Distance from neutral axis to extreme fiber:
y_max = d/2 = 0.2/2 = 0.1 m

Maximum bending stress:
σ_max = M × y_max/I
σ_max = 10,000 × 0.1/(6.67 × 10⁻⁵)
σ_max = 1,000/(6.67 × 10⁻⁵)
σ_max = 1.5 × 10⁷ Pa = 15 MPa

(c) Radius of curvature:
From M/I = E/R:

R = EI/M = (2 × 10¹⁰ × 6.67 × 10⁻⁵)/10,000
R = 1.334 × 10⁶/10,000
R = 133.4 m
```

### Depression at Center

For a simply supported beam with central load W:

```
δ = WL³/(48EI)
```

**Continuing Example 7**:
```
δ = 10,000 × (4)³/(48 × 2 × 10¹⁰ × 6.67 × 10⁻⁵)
δ = 10,000 × 64/(48 × 1.334 × 10⁶)
δ = 640,000/(6.4 × 10⁷)
δ = 0.01 m = 1 cm
```

---

## Practice Problems with Solutions

### Problem 1: Combined Elastic Constants

**Question**: A material has Young's modulus E = 100 GPa and shear modulus G = 40 GPa. Calculate:
(a) Poisson's ratio
(b) Bulk modulus

**Solution**:
```
Given:
E = 100 GPa = 100 × 10⁹ Pa
G = 40 GPa = 40 × 10⁹ Pa

(a) From E = 2G(1 + ν):
100 × 10⁹ = 2 × 40 × 10⁹(1 + ν)
100 = 80(1 + ν)
1.25 = 1 + ν
ν = 0.25

(b) From E = 3K(1 - 2ν):
100 × 10⁹ = 3K(1 - 2 × 0.25)
100 × 10⁹ = 3K(1 - 0.5)
100 × 10⁹ = 1.5K
K = 66.67 × 10⁹ Pa = 66.67 GPa

Verification using E = 9KG/(3K + G):
E = 9 × 66.67 × 40/(3 × 66.67 + 40)
E = 24,000/(200 + 40)
E = 24,000/240 = 100 GPa ✓
```

### Problem 2: Wire Extension

**Question**: Two wires of the same material have lengths in ratio 1:2 and diameters in ratio 2:1. If they are subjected to the same tensile force, find the ratio of:
(a) Stresses
(b) Strains
(c) Extensions

**Solution**:
```
Let:
Wire 1: Length L₁, Diameter d₁, Area A₁ = π(d₁)²/4
Wire 2: Length L₂ = 2L₁, Diameter d₂ = d₁/2, Area A₂ = π(d₂)²/4 = π(d₁)²/16

Given: Same force F applied to both

(a) Ratio of stresses:
σ₁ = F/A₁ = F/(π(d₁)²/4) = 4F/(πd₁²)
σ₂ = F/A₂ = F/(π(d₁)²/16) = 16F/(πd₁²)

σ₁/σ₂ = [4F/(πd₁²)]/[16F/(πd₁²)] = 4/16 = 1/4 = 1:4

(b) Ratio of strains:
Since same material (same E) and σ = Eε:
ε₁/ε₂ = σ₁/σ₂ = 1/4 = 1:4

(c) Ratio of extensions:
ΔL₁ = ε₁L₁
ΔL₂ = ε₂L₂ = ε₂(2L₁)

ΔL₁/ΔL₂ = (ε₁L₁)/(ε₂ × 2L₁) = ε₁/(2ε₂)
        = (1/4) × 1/2 = 1/8 = 1:8

Answers:
(a) Stresses: 1:4
(b) Strains: 1:4
(c) Extensions: 1:8
```

### Problem 3: Energy Comparison

**Question**: Two wires A and B of the same material and length are stretched by the same force. The diameter of A is twice that of B. Compare the strain energies stored in the two wires.

**Solution**:
```
Given:
Same material: E_A = E_B = E
Same length: L_A = L_B = L
Same force: F_A = F_B = F
d_A = 2d_B

Area: A_A = π(d_A)²/4 = π(2d_B)²/4 = πd_B²
      A_B = π(d_B)²/4

Strain energy U = (F²L)/(2AE)

U_A = F²L/(2A_A E) = F²L/(2πd_B² × E)
U_B = F²L/(2A_B E) = F²L/(2 × πd_B²/4 × E) = 4F²L/(2πd_B² × E)

Ratio:
U_A/U_B = [F²L/(2πd_B² × E)]/[4F²L/(2πd_B² × E)]
        = 1/4

Therefore: U_A : U_B = 1 : 4

Wire B (thinner wire) stores 4 times more strain energy than wire A.
```

### Problem 4: Cantilever Beam

**Question**: A cantilever beam of length 2 m has a rectangular cross-section 10 cm × 15 cm (width × depth). It carries a load of 5 kN at the free end. If E = 200 GPa, calculate:
(a) Maximum bending moment
(b) Maximum stress
(c) Deflection at the free end

**Solution**:
```
Given:
L = 2 m
b = 10 cm = 0.1 m
d = 15 cm = 0.15 m
W = 5 kN = 5000 N
E = 200 GPa = 200 × 10⁹ Pa

(a) For a cantilever with end load:
Maximum bending moment occurs at fixed end:
M_max = WL = 5000 × 2 = 10,000 N·m

(b) Moment of inertia:
I = bd³/12 = 0.1 × (0.15)³/12
I = 0.1 × 0.003375/12
I = 2.8125 × 10⁻⁵ m⁴

Maximum stress:
σ_max = M_max × y_max/I
where y_max = d/2 = 0.075 m

σ_max = 10,000 × 0.075/(2.8125 × 10⁻⁵)
σ_max = 750/(2.8125 × 10⁻⁵)
σ_max = 2.667 × 10⁷ Pa = 26.67 MPa

(c) Deflection at free end:
For cantilever with end load:
δ = WL³/(3EI)

δ = 5000 × (2)³/(3 × 200 × 10⁹ × 2.8125 × 10⁻⁵)
δ = 5000 × 8/(3 × 200 × 10⁹ × 2.8125 × 10⁻⁵)
δ = 40,000/(1.6875 × 10⁷)
δ = 2.37 × 10⁻³ m = 2.37 mm
```

### Problem 5: Poisson's Ratio Application

**Question**: A cube of side 10 cm is subjected to a uniform pressure of 10 MPa on all faces. If the bulk modulus is 100 GPa and Poisson's ratio is 0.3, calculate:
(a) The volumetric strain
(b) The linear strain in each direction
(c) The change in volume

**Solution**:
```
Given:
Side a = 10 cm = 0.1 m
Pressure p = 10 MPa = 10 × 10⁶ Pa
K = 100 GPa = 100 × 10⁹ Pa
ν = 0.3

(a) Volumetric strain:
ΔV/V = -p/K = -(10 × 10⁶)/(100 × 10⁹)
ΔV/V = -1 × 10⁻⁴ = -0.0001

(b) Linear strain in each direction:
For hydrostatic pressure, from E = 3K(1 - 2ν):
E = 3 × 100 × 10⁹ × (1 - 2 × 0.3)
E = 3 × 100 × 10⁹ × 0.4
E = 120 × 10⁹ Pa = 120 GPa

Linear stress in each direction = -p = -10 × 10⁶ Pa

For stress in x-direction with hydrostatic pressure:
ε_x = (σ_x/E) - ν(σ_y/E) - ν(σ_z/E)
    = (-p/E) - ν(-p/E) - ν(-p/E)
    = -p/E + 2νp/E
    = p(2ν - 1)/E

ε_x = 10 × 10⁶ × (2 × 0.3 - 1)/(120 × 10⁹)
    = 10 × 10⁶ × (-0.4)/(120 × 10⁹)
    = -4 × 10⁶/(120 × 10⁹)
    = -3.33 × 10⁻⁵

By symmetry: ε_x = ε_y = ε_z = -3.33 × 10⁻⁵

(c) Change in volume:
Original volume V = a³ = (0.1)³ = 0.001 m³ = 1000 cm³

ΔV = V × (ΔV/V) = 1000 × (-1 × 10⁻⁴)
   = -0.1 cm³

The volume decreases by 0.1 cm³.

Verification:
Volumetric strain = ε_x + ε_y + ε_z
                  = 3 × (-3.33 × 10⁻⁵)
                  = -1 × 10⁻⁴ ✓
```

---

## Key Formulas Summary

### Fundamental Definitions
- Stress: σ = F/A
- Strain: ε = ΔL/L
- Hooke's Law: σ = Eε

### Elastic Moduli
- Young's Modulus: E = σ/ε
- Bulk Modulus: K = -p/(ΔV/V)
- Shear Modulus: G = τ/φ
- Poisson's Ratio: ν = -(lateral strain)/(longitudinal strain)

### Relations Among Elastic Constants
- E = 2G(1 + ν)
- E = 3K(1 - 2ν)
- E = 9KG/(3K + G)
- K = 2G(1 + ν)/[3(1 - 2ν)]

### Strain Energy
- Energy density: u = ½σε = ½Eε² = ½σ²/E
- Total energy: U = ½(F²L)/(AE)

### Bending
- Bending equation: M/I = σ/y = E/R
- Maximum stress: σ_max = My_max/I = M/Z
- Deflection (cantilever, end load): δ = WL³/(3EI)
- Deflection (simply supported, central load): δ = WL³/(48EI)

---

## References

### Textbooks
1. **Strength of Materials** by S. Timoshenko and D.H. Young
   - Classic comprehensive treatment of elasticity theory
   
2. **Mechanics of Materials** by Ferdinand P. Beer, E. Russell Johnston Jr., John T. DeWolf, and David F. Mazurek
   - Modern approach with numerous examples

3. **Theory of Elasticity** by S. Timoshenko and J.N. Goodier
   - Advanced theoretical treatment

4. **Engineering Mechanics of Solids** by Egor P. Popov
   - Good balance of theory and applications

### Online Resources

1. **MIT OpenCourseWare - Mechanics of Materials**
   - https://ocw.mit.edu/courses/mechanical-engineering/
   - Free lecture notes and problem sets

2. **Khan Academy - Physics: Elasticity**
   - https://www.khanacademy.org/science/physics
   - Visual explanations and practice problems

3. **LibreTexts - Engineering Mechanics**
   - https://eng.libretexts.org/
   - Open-access comprehensive engineering textbooks

4. **NPTEL (National Programme on Technology Enhanced Learning)**
   - https://nptel.ac.in/
   - Free video lectures from IIT professors

5. **Hyperphysics - Elasticity**
   - http://hyperphysics.phy-astr.gsu.edu/hbase/permot3.html
   - Quick reference with interactive diagrams

### Research Papers and Standards

1. **ASTM Standards for Mechanical Testing**
   - https://www.astm.org/
   - Standard test methods for elastic properties

2. **Landolt-Börnstein Database**
   - Material property data for various substances

### Additional Practice

1. **Engineering Toolbox**
   - https://www.engineeringtoolbox.com/
   - Online calculators and property tables

2. **Wolfram Alpha**
   - https://www.wolframalpha.com/
   - Computational tool for verification of calculations

---

## Appendix: Material Properties Table

| Material | Young's Modulus (GPa) | Shear Modulus (GPa) | Bulk Modulus (GPa) | Poisson's Ratio |
|----------|----------------------|---------------------|-------------------|----------------|
| Steel | 200 | 80 | 160 | 0.30 |
| Aluminum | 70 | 26 | 70 | 0.33 |
| Copper | 120 | 45 | 140 | 0.34 |
| Brass | 100 | 37 | 110 | 0.34 |
| Concrete | 30 | 12.5 | 20 | 0.20 |
| Glass | 70 | 28 | 40 | 0.25 |
| Wood (along grain) | 12 | 0.7 | - | 0.35 |
| Rubber | 0.005 | 0.002 | 2 | 0.49 |
| Bone | 15 | 3.3 | - | 0.40 |

*Note: Values are approximate and can vary based on composition, treatment, and testing conditions.*

---

## Tips for Problem Solving

1. **Identify the type of deformation**: longitudinal, volumetric, or shear
2. **Write down known and unknown quantities**
3. **Select appropriate elastic constant and formula**
4. **Check units consistency** (SI units preferred)
5. **Verify answer using alternative formulas** when possible
6. **Check if answer is physically reasonable**

---

**Document Version**: 1.0  
**Last Updated**: January 2026  
**Author**: Comprehensive University Physics Notes

---

*For corrections or suggestions, please contribute to the repository or contact the maintainer.*

