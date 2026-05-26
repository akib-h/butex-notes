# 📚 Physics Exam Notes: Elasticity & Surface Tension
### Complete Chapter Notes | PYQ Solutions | Formulas & Derivations

---

# PART I: ELASTICITY

---

## 🔑 Key Definitions

### Stress
- **Definition:** Restoring force developed per unit area when a body is deformed.
- **Formula:** `σ = F / A`
- **Unit:** N/m² (Pascal, Pa)
- **Types:**
  - **Tensile Stress** – due to stretching
  - **Compressive Stress** – due to compression
  - **Shear (Tangential) Stress** – due to tangential force

### Strain
- **Definition:** Ratio of change in dimension to original dimension (dimensionless).
- **Formula:** `ε = ΔL / L`
- **Types:**
  - **Longitudinal Strain** = ΔL / L
  - **Volumetric Strain** = ΔV / V
  - **Shear Strain** = tan θ ≈ θ (for small angles)

### Hooke's Law
- **Statement:** Within the elastic limit, stress is directly proportional to strain.
- **Formula:** `σ ∝ ε` → `σ = E × ε` (where E = modulus of elasticity)
- **Explanation:** Up to the elastic limit, deformation is reversible. Beyond it, the material undergoes permanent deformation.

### Elastic Limit
- The maximum stress beyond which a material does not return to its original shape.

### Elastic Fatigue
- **Definition (2018 Q2a):** The phenomenon by which the strength/elasticity of a material decreases after repeated stress applications, even within the elastic limit. The material becomes "tired" and may fail at lower stress values over time.

### Elastic Behaviour of a Wire (2021 Q1a)
A stress-strain graph for a uniform wire shows:
1. **OA – Proportional Region:** Hooke's law is valid; stress ∝ strain
2. **AB – Elastic Region:** Material still returns to original shape after force is removed
3. **B – Elastic Limit / Yield Point:** Beyond this, permanent deformation begins
4. **BC – Plastic Region:** Permanent deformation occurs; material flows
5. **D – Breaking Point:** Wire fractures

```
Stress (σ)
  |     D (breaking point)
  |   C /
  | B /___
  |A/
  |/________________ Strain (ε)
  O
```

---

## 📐 Moduli of Elasticity

### 1. Young's Modulus (Y)
- **Definition:** Ratio of tensile stress to longitudinal strain.
- **Formula:**
  ```
  Y = (F/A) / (ΔL/L) = FL / AΔL
  ```
- **Unit:** N/m² (Pa)
- **Application:** Stretching of wires, rods

### 2. Bulk Modulus (K)
- **Definition:** Ratio of volumetric stress to volumetric strain.
- **Formula:**
  ```
  K = -P / (ΔV/V) = -PV / ΔV
  ```
  (Negative sign: volume decreases when pressure increases)
- **Unit:** N/m² (Pa)
- **Reciprocal:** Compressibility = 1/K

### 3. Modulus of Rigidity / Shear Modulus (η or G)
- **Definition:** Ratio of shear stress to shear strain.
- **Formula:**
  ```
  η = (F/A) / θ = F / (Aθ)
  ```
- **Unit:** N/m² (Pa)

---

## 🔢 Poisson's Ratio (σ)

### Definition
The ratio of lateral (transverse) strain to longitudinal strain when a material is stretched.

```
σ = -(Lateral Strain) / (Longitudinal Strain)
  = -(ΔD/D) / (ΔL/L)
```

### Limits of Poisson's Ratio
**Proof that -1 ≤ σ ≤ +1/2:**

For a material to be stable:
- Bulk modulus K > 0 and Shear modulus η > 0

Using the relation: `Y = 3K(1 - 2σ)` → For K > 0: `(1 - 2σ) > 0` → `σ < 1/2`

Using the relation: `Y = 2η(1 + σ)` → For η > 0: `(1 + σ) > 0` → `σ > -1`

Therefore: **-1 < σ < +1/2** or **-1 to 0.5**

*(In practice, σ lies between 0 and 0.5 for most engineering materials)*

---

## 🔗 Relations Between Elastic Moduli

### Relation 1: Y = 2η(1 + σ) [2019, 2023]

**Derivation:**
Consider a unit cube under pure shear. The principal strains along diagonal directions are ε and -ε.

Using the fact that shear strain = twice the linear strain along diagonal:
- Shear stress = τ = ηθ
- Along the diagonal, the elongation strain = τ/Y (tensile component)
- And Poisson contraction = -σ(τ/Y)
- Total strain = τ/Y + σ(τ/Y) = τ(1+σ)/Y
- But shear strain θ = 2 × diagonal strain = 2τ(1+σ)/Y
- Since τ = ηθ: `θ = η × 2τ(1+σ)/Y × θ`... rearranging:

**Final Result:**
```
Y = 2η(1 + σ)
```

### Relation 2: Y = 3K(1 - 2σ) [2021 derivation]

**Derivation:**
Consider a cube under equal pressure P on all sides.
- Linear strain in each direction = σ_x/Y - σ(σ_y + σ_z)/Y = P/Y - σ(2P/Y) = P(1-2σ)/Y
- Volumetric strain = 3 × linear strain = 3P(1-2σ)/Y
- Bulk modulus K = P / (ΔV/V) = Y / [3(1-2σ)]

**Final Result:**
```
K = Y / [3(1 - 2σ)]  →  Y = 3K(1 - 2σ)
```

### Relation 3: 1/Y = 1/(3K) + 1/(3η)

This combines both relations and is useful for finding Y when K and η are known.

---

## ⚡ Work Done in Stretching a Wire / Energy Stored

### Work Done per Unit Volume (Strain Energy Density)

**Proof that Work done per unit volume = (1/2) × stress × strain [2022, 2023, 2018, 2020]:**

Consider a wire of length L, area A being stretched by Δl.

- At extension x, force = F(x) = (YA/L) × x  [From Young's modulus]
- Work done for small extension dx: dW = F(x) dx = (YA/L) x dx
- Total work done:
  ```
  W = ∫₀^(Δl) (YA/L) x dx = (YA/L) × (Δl)²/2 = (1/2) F × Δl
  ```
- Volume of wire = A × L
- Work per unit volume:
  ```
  W/V = (1/2) × (F/A) × (Δl/L) = (1/2) × Stress × Strain
  ```

**Also expressed as:**
```
Energy per unit volume = (1/2) × Y × (strain)² = (stress)² / (2Y)
```

**Maximum energy stored = Breaking stress²/ (2Y)**

---

## 📝 Solved Numerical Problems

---

### 2020 (d): Work Done in Stretching a Wire
**Given:**
- Cross-section A = 1 mm² = 1 × 10⁻⁶ m²
- Length L = 2 m
- Extension ΔL = 0.1 mm = 0.1 × 10⁻³ m = 10⁻⁴ m
- Y = 2 × 10¹¹ N/m²

**Solution:**
```
W = (1/2) × F × ΔL
  = (1/2) × Y × A × (ΔL)² / L
  = (1/2) × (2 × 10¹¹) × (10⁻⁶) × (10⁻⁴)² / 2
  = (1/2) × (2 × 10¹¹) × (10⁻⁶) × (10⁻⁸) / 2
  = (1/2) × (2 × 10¹¹ × 10⁻¹⁴) / 2
  = (1/2) × 10⁻³ / 2 × 2
  = 0.5 × 10⁻² / 2
```
Let me recalculate step by step:
```
YA/L = (2 × 10¹¹ × 10⁻⁶) / 2 = 10⁵ N/m

W = (1/2) × (YA/L) × (ΔL)²
  = (1/2) × 10⁵ × (10⁻⁴)²
  = (1/2) × 10⁵ × 10⁻⁸
  = (1/2) × 10⁻³
  = 5 × 10⁻⁴ J
```
**Answer: W = 5 × 10⁻⁴ J = 0.5 mJ**

---

### 2021 (c): Maximum Energy Stored per Unit Volume
**Given (from 2021 context):**
- Y = 2 × 10¹¹ N/m²
- Breaking stress = 1.078 × 10⁹ N/m²

**Solution:**
```
Energy per unit volume = (Breaking Stress)² / (2Y)
= (1.078 × 10⁹)² / (2 × 2 × 10¹¹)
= (1.162 × 10¹⁸) / (4 × 10¹¹)
= 2.905 × 10⁶ J/m³
```
**Answer: Maximum energy density ≈ 2.9 × 10⁶ J/m³**

---

### 2019 (d): Finding Poisson's Ratio from η and Y
**Given:**
- η (Modulus of Rigidity) = 8 × 10¹⁰ N/m²
- Y (Young's Modulus) = 20 × 10¹⁰ N/m²

**Solution:**
Using `Y = 2η(1 + σ)`:
```
20 × 10¹⁰ = 2 × 8 × 10¹⁰ × (1 + σ)
20 = 16 × (1 + σ)
1 + σ = 20/16 = 1.25
σ = 0.25
```
**Answer: Poisson's Ratio σ = 0.25**

---

### 2018 (d): Y from η and σ
**Given:**
- η = 2.87 × 10¹⁰ N/m²
- σ = 0.379

**Solution:**
Using `Y = 2η(1 + σ)`:
```
Y = 2 × 2.87 × 10¹⁰ × (1 + 0.379)
Y = 5.74 × 10¹⁰ × 1.379
Y = 7.915 × 10¹⁰ N/m²
Y ≈ 7.92 × 10¹⁰ N/m²
```
**Answer: Y ≈ 7.92 × 10¹⁰ N/m²**

---

### 2021 (b): Prove K = Y / [3(1 - 2σ)]
*(See derivation above in Relations Between Elastic Moduli)*

---

### 2017 (c): Radius of Gyration of Flywheel
**Given:**
- Torque τ = 25 N·m
- Revolutions in 1st second n = 3
- Mass m = 15 kg
- Initial angular velocity ω₀ = 0

**Solution:**
```
Angular displacement in 1st second:
θ = 2πn = 2π × 3 = 6π rad

Using θ = ω₀t + (1/2)αt²:
6π = 0 + (1/2) × α × 1²
α = 12π rad/s²

Torque = I × α:
25 = I × 12π
I = 25 / (12π) = 0.6631 kg·m²

But I = mk² (where k = radius of gyration):
k² = I/m = 0.6631 / 15 = 0.04421 m²
k = √0.04421 ≈ 0.2102 m
```
**Answer: Radius of gyration k ≈ 0.21 m**

---

## 📋 Quick Formula Reference – Elasticity

| Quantity | Formula | SI Unit |
|---|---|---|
| Stress | σ = F/A | Pa (N/m²) |
| Strain | ε = ΔL/L | Dimensionless |
| Young's Modulus | Y = (F×L)/(A×ΔL) | Pa |
| Bulk Modulus | K = -PV/ΔV | Pa |
| Shear Modulus | η = F/(A×θ) | Pa |
| Poisson's Ratio | σ = -(ΔD/D)/(ΔL/L) | Dimensionless |
| Y–η relation | Y = 2η(1 + σ) | — |
| Y–K relation | Y = 3K(1 – 2σ) | — |
| K = Y/[3(1-2σ)] | K = Y/[3(1–2σ)] | Pa |
| Energy/Volume | U = ½ × Stress × Strain | J/m³ |
| Elastic P.E. in wire | U = ½ × F × ΔL | J |
| Max Energy/Volume | U_max = (σ_break)²/2Y | J/m³ |

---

---

# PART II: SURFACE TENSION

---

## 🔑 Key Definitions

### Surface Energy
- **Definition (2023 Q3a):** The potential energy per unit area of the surface of a liquid. It is the work done in increasing the surface area of a liquid by unit amount against surface tension forces.
- **Formula:** `E = T × A` where T = surface tension, A = area
- **Unit:** J/m² (equivalent to N/m)

### Surface Tension (T)
- **Definition:** The force per unit length acting along the surface of a liquid, tangential to the surface, that tends to minimize the surface area.
- **Formula:** `T = F / l`
- **Unit:** N/m or J/m²

### Relation Between Surface Tension and Surface Energy (2023)
**Derivation:**
Consider a rectangular wire frame with a sliding wire of length l. Surface tension T acts on both surfaces.
- Force needed to move the wire: F = 2Tl (two surfaces)
- Work done to move wire by dx: dW = F × dx = 2Tl × dx
- Increase in surface area: dA = 2l × dx
- Surface energy = dW/dA = T

**Therefore: Surface Energy per unit area = Surface Tension**
```
T = dW / dA = Surface Energy Density
```

### Angle of Contact (θ)
The angle between the tangent to the liquid surface at the point of contact and the solid surface, measured inside the liquid.
- Water in glass: θ < 90° (concave meniscus, wets glass)
- Mercury in glass: θ > 90° (convex meniscus, does not wet glass)

### Capillarity
The phenomenon of rise or fall of liquid in a narrow tube (capillary tube) due to surface tension.

---

## 📐 Capillary Rise Formula (Derivation) [2023 Q3b]

**Derivation of height h of liquid rise in capillary tube of radius r:**

**Forces involved:**
- Upward force due to surface tension = T × 2πr × cos θ
  (The vertical component of surface tension acting around the circumference)
- Downward force due to weight of liquid column = ρ × g × h × πr²

**At equilibrium (upward force = downward force):**
```
T × 2πr × cos θ = ρ × g × h × πr²
```

**Solving for h:**
```
h = (2T cos θ) / (ρgr)
```

**For water in glass (θ ≈ 0°, cos θ ≈ 1):**
```
h = 2T / (ρgr)
```

**Key observations:**
- h ∝ 1/r → narrower tube → greater rise
- h ∝ T → greater surface tension → greater rise
- h ∝ 1/ρ → denser liquid → less rise

---

## 📝 Solved Numerical Problems – Surface Tension

---

### 2023 (c): Height of Water Column in Capillary Tube
**Given:**
- Radius r = 0.5 × 10⁻³ m = 5 × 10⁻⁴ m
- Density of water ρ = 0.9 × 10³ kg/m³ = 900 kg/m³
- Surface tension T = 7.2 × 10⁻² N/m
- g = 9.8 m/s² (standard)
- Angle of contact θ = 0° (water in glass, assume)

**Solution:**
Using the capillary rise formula:
```
h = 2T cos θ / (ρgr)
  = (2 × 7.2 × 10⁻² × cos 0°) / (900 × 9.8 × 5 × 10⁻⁴)
  = (2 × 7.2 × 10⁻²) / (900 × 9.8 × 5 × 10⁻⁴)
  = (0.144) / (4.41 × 10⁻¹ × 10⁰)  ... let me compute denominator:
```
Denominator = 900 × 9.8 × 5 × 10⁻⁴
            = 900 × 4.9 × 10⁻³
            = 4410 × 10⁻³
            = 4.41

Numerator = 2 × 7.2 × 10⁻² = 0.144

```
h = 0.144 / 4.41 = 0.03265 m ≈ 3.27 cm
```
**Answer: h ≈ 3.27 cm or 0.033 m**

---

## 🌊 Additional Important Concepts – Surface Tension

### Excess Pressure
- **Inside a soap bubble:** `ΔP = 4T/r` (two surfaces)
- **Inside a liquid drop:** `ΔP = 2T/r` (one surface)
- **Inside an air bubble in liquid:** `ΔP = 2T/r`

### Surface Energy of Different Geometries
- Liquid drop: `E = 4πr²T`
- Soap bubble: `E = 2 × 4πr²T = 8πr²T` (two surfaces)

### Effect of Temperature on Surface Tension
- Surface tension **decreases** with increase in temperature
- At critical temperature, surface tension = 0

### Surfactants
- Detergents and soaps reduce surface tension, enabling cleaning

---

## 📋 Quick Formula Reference – Surface Tension

| Quantity | Formula | Unit |
|---|---|---|
| Surface Tension | T = F/l | N/m |
| Surface Energy | E = T × A | J |
| Capillary Rise | h = 2T cosθ / ρgr | m |
| Excess pressure (drop) | ΔP = 2T/r | Pa |
| Excess pressure (bubble) | ΔP = 4T/r | Pa |
| Energy of liquid drop | E = 4πr²T | J |
| Energy of soap bubble | E = 8πr²T | J |

---

---

# 📊 YEAR-WISE PYQ ANSWER GUIDE

## 2023
- **Q1(a):** Poisson's ratio definition + Hooke's Law → See definitions above ✅
- **Q1(b):** Work per unit volume = ½ × stress × strain → See derivation ✅
- **Q1(c):** Prove Y = 2η(1+λ) → See Y-η relation derivation ✅
- **Q3(a):** Surface energy definition + relation to surface tension → See above ✅
- **Q3(b):** Capillary rise derivation → See above ✅
- **Q3(c):** Numerical: h = 2T/ρgr → **h ≈ 3.27 cm** ✅

## 2022
- **Q2(a):** Poisson's ratio + limits proof → See above ✅
- **Q2(b):** Derive Y = 2η(1+σ) → See derivation above ✅
- **Q2(c):** Work per unit volume = ½ × stress × strain → See derivation ✅

## 2021
- **Q1(a):** Elastic behaviour of wire → Stress-strain graph description ✅
- **Q1(b):** Prove K = Y / [3(1-2σ)] → See derivation above ✅

## 2020
- **Q1(a):** Poisson's ratio → See definitions ✅
- **Q1(b):** Hooke's Law → See definitions ✅
- **Q1(c):** Work per unit volume derivation ✅
- **Q1(d):** Wire stretching numerical → **W = 5 × 10⁻⁴ J** ✅

## 2019
- **Q3(a):** Stress-strain graph → See elastic behaviour section ✅
- **Q3(b):** Prove Y = 2η(1+σ) ✅
- **Q3(c):** Poisson's ratio + limits (-1 to +0.5) ✅
- **Q3(d):** Find σ from η and Y → **σ = 0.25** ✅

## 2018
- **Q2(a):** Elastic fatigue definition ✅
- **Q2(b):** Hooke's Law ✅
- **Q2(c):** Work per unit volume derivation ✅
- **Q2(d):** Y from η and σ → **Y ≈ 7.92 × 10¹⁰ N/m²** ✅

## 2017
- **Q4(a):** Young's and Bulk modulus definitions ✅
- **Q4(b):** Poisson's ratio + limits ✅
- **Q4(c):** Flywheel radius of gyration → **k ≈ 0.21 m** ✅

---

# ⚡ EXAM TIPS & HIGH-FREQUENCY TOPICS

## Most Repeated Topics (Every Year!)
1. ⭐⭐⭐ Work done per unit volume = ½ × stress × strain (2023, 2022, 2020, 2018)
2. ⭐⭐⭐ Prove Y = 2η(1 + σ) (2023, 2022, 2019)
3. ⭐⭐⭐ Poisson's ratio definition + limits (-1 to 0.5) (2023, 2022, 2020, 2019, 2017)
4. ⭐⭐ Hooke's Law definition (2023, 2020, 2018)
5. ⭐⭐ Capillary rise derivation (2023)

## Key Things to Remember
- **Units:** Stress, Y, K, η all in Pascal (Pa) or N/m²
- **Poisson's Ratio:** Always between -1 and +0.5; typical metals 0.25–0.35
- **Energy formula:** There are TWO forms: ½Fδl (total) and ½ × stress × strain (per unit volume)
- **Capillary formula:** Remember h = **2T cosθ / ρgr** — the factor of 2 is important!
- **Soap bubble vs drop:** Bubble has **4T/r** (two surfaces), drop has **2T/r**

## Derivation Checklist (Must Know)
- [ ] Y = 2η(1 + σ) from first principles
- [ ] K = Y / [3(1-2σ)]
- [ ] Proof that -1 < σ < 0.5
- [ ] Energy per unit volume = ½ × stress × strain
- [ ] Capillary rise h = 2T cosθ / ρgr
- [ ] Relation between surface tension and surface energy

---

*Made for exam preparation | Covers PYQs from 2017–2023*
