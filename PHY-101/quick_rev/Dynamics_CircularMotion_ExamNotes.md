# 📚 Physics Exam Notes: Dynamics of Circular Motion
### Complete Chapter Notes | PYQ Solutions | Formulas & Derivations
### Years Covered: 2017 – 2023

---

# PART I: KEY DEFINITIONS

---

## Angular Velocity (ω) [2021 Q4a]
- **Definition:** The rate of change of angular displacement with time.
- **Formula:** `ω = dθ/dt`
- **For uniform circular motion:** `ω = 2π/T = 2πn` (where T = time period, n = frequency)
- **Relation to linear velocity:** `v = rω`
- **Unit:** rad/s

## Angular Momentum (L) [2021 Q4b]
- **Definition:** The product of moment of inertia and angular velocity.
- **Formula:** `L = Iω`
- **Also:** `L = mvr` (for a particle in circular motion)
- **Unit:** kg·m²/s

## Torque (τ) [2023 Q4c, 2018 Q4b]
- **Definition:** The turning effect of a force about an axis; the rotational equivalent of force.
- **Formula:** `τ = r × F = rF sinθ`
- **Also:** `τ = Iα` (rotational analogue of F = ma)
- **Unit:** N·m

## Moment of Inertia (I) [2023 Q4c, 2022 Q4a, 2020 Q4a]
- **Definition:** The sum of products of mass of each particle and square of its distance from the axis of rotation. It is the rotational analogue of mass (inertia in rotation).
- **Formula:** `I = Σmᵢrᵢ²` (discrete), `I = ∫r² dm` (continuous)
- **Unit:** kg·m²
- **Factors:** Depends on (i) mass of body, (ii) shape & size, (iii) position of axis of rotation

## Radius of Gyration (k) [2022 Q4a, 2020 Q4a, 2018 Q4a]
- **Definition:** The distance from the axis of rotation at which the entire mass of the body can be assumed to be concentrated to give the same moment of inertia.
- **Formula:** `I = Mk²` → `k = √(I/M)`
- **Unit:** metre (m)
- **Physical significance:** It represents distribution of mass about the axis.
- **For a disc (axis through center ⊥ plane):** `k = R/√2`

---

# PART II: MOMENT OF INERTIA OF STANDARD BODIES

| Body | Axis | Formula |
|---|---|---|
| Thin rod (length L) | Through center ⊥ length | I = ML²/12 |
| Thin rod (length L) | Through end ⊥ length | I = ML²/3 |
| Circular ring (radius R) | Through center ⊥ plane | I = MR² |
| Circular ring (radius R) | Diameter | I = MR²/2 |
| Circular disc (radius R) | Through center ⊥ plane | **I = MR²/2** |
| Circular disc (radius R) | Diameter | I = MR²/4 |
| Solid sphere (radius R) | Diameter | **I = 2MR²/5** |
| Hollow sphere (radius R) | Diameter | I = 2MR²/3 |
| Solid cylinder (radius R) | Own axis | I = MR²/2 |
| Hollow cylinder (radius R) | Own axis | I = MR² |

---

# PART III: THEOREMS OF MOMENT OF INERTIA

---

## Theorem of Perpendicular Axis [2023, 2022, 2020, 2017]

### Statement:
The moment of inertia of a **plane lamina** about an axis perpendicular to its plane is equal to the **sum** of its moments of inertia about any two mutually perpendicular axes lying in the plane of the lamina and passing through the same point.

```
Iz = Ix + Iy
```
Where:
- Iz = M.I. about Z-axis (perpendicular to the lamina)
- Ix = M.I. about X-axis (in the plane of lamina)
- Iy = M.I. about Y-axis (in the plane of lamina)

### Proof:
Consider a plane lamina in the XY-plane. Let Z-axis be perpendicular to the plane passing through O.

Consider a small particle of mass m at point P(x, y).
- Distance from Z-axis: r² = x² + y²
- Distance from X-axis: y
- Distance from Y-axis: x

Moment of inertia about Z-axis:
```
Iz = Σmr² = Σm(x² + y²) = Σmx² + Σmy²
```

But:
- Σmy² = Ix (M.I. about X-axis)
- Σmx² = Iy (M.I. about Y-axis)

Therefore:
```
∴ Iz = Ix + Iy   [PROVED]
```

**Condition:** Valid ONLY for plane laminas (2D flat bodies), NOT for 3D solids.

**Application Example:**
For a circular disc:
- Ix = Iy = MR²/4 (by symmetry)
- Iz = Ix + Iy = MR²/4 + MR²/4 = **MR²/2** ✓

---

## Theorem of Parallel Axis [2018, 2018 Q4c]

### Statement:
The moment of inertia of a body about any axis is equal to the moment of inertia about a **parallel axis through the center of mass** plus the product of the total mass and the square of the distance between the two axes.

```
I = Icm + Md²
```
Where:
- I = M.I. about the new axis
- Icm = M.I. about the parallel axis through center of mass
- M = total mass of the body
- d = perpendicular distance between the two parallel axes

### Proof:
Let C be the center of mass. Let the axis through C be CG, and the parallel axis be AB at distance d.

For a particle of mass mᵢ at position (xᵢ, yᵢ) from the C.M.:

```
I_AB = Σmᵢ(xᵢ + d)²
     = Σmᵢ(xᵢ² + 2xᵢd + d²)
     = Σmᵢxᵢ² + 2d·Σmᵢxᵢ + d²·Σmᵢ
```

Now:
- Σmᵢxᵢ² = Icm
- Σmᵢxᵢ = 0 (since C is the center of mass, sum of mass × distance from C.M. = 0)
- Σmᵢ = M

Therefore:
```
I = Icm + 0 + Md²
∴ I = Icm + Md²   [PROVED]
```

**Application Example:**
M.I. of disc about tangent in its plane:
- Icm (diameter) = MR²/4
- d = R
- I = MR²/4 + MR² = **5MR²/4**

---

# PART IV: KEY DERIVATIONS

---

## Derivation of M.I. of a Uniform Circular Disc [2021 Q4c]

About an axis through its center and perpendicular to its plane.

**Consider:** A uniform disc of mass M and radius R.

**Method:** Integration by concentric rings.

Consider a thin ring element of radius x and thickness dx:
- Area of ring element = 2πx dx
- Area of full disc = πR²
- Mass of ring element: `dm = M/(πR²) × 2πx dx = (2M/R²) x dx`
- M.I. of ring element about center: `dI = dm × x² = (2M/R²) x³ dx`

Total M.I.:
```
I = ∫₀ᴿ (2M/R²) x³ dx
  = (2M/R²) × [x⁴/4]₀ᴿ
  = (2M/R²) × R⁴/4
  = MR²/2
```

**Result:**
```
I_disc = MR²/2   (axis through center ⊥ plane)
```

---

## Relation: Angular Momentum and Moment of Inertia [2021 Q4b]

For a rigid body rotating about a fixed axis:

Consider a particle of mass mᵢ at distance rᵢ from the axis.
- Linear velocity: vᵢ = rᵢω
- Linear momentum: pᵢ = mᵢvᵢ = mᵢrᵢω
- Angular momentum of particle: Lᵢ = pᵢ × rᵢ = mᵢrᵢ²ω

Total angular momentum:
```
L = ΣLᵢ = Σmᵢrᵢ²ω = ω × Σmᵢrᵢ²
```

Since `I = Σmᵢrᵢ²`:
```
∴ L = Iω
```

**Also:** `τ = dL/dt = I(dω/dt) = Iα`

---

## Relation: Torque and Moment of Inertia [2018 Q4b]

For a rigid body:
- Each particle of mass mᵢ at radius rᵢ has tangential acceleration: aᵢ = rᵢα
- Force on particle: Fᵢ = mᵢaᵢ = mᵢrᵢα
- Torque due to this force: τᵢ = Fᵢ × rᵢ = mᵢrᵢ²α

Total torque:
```
τ = Στᵢ = Σmᵢrᵢ² × α = I × α
```

**Result:**
```
τ = Iα    [Rotational analogue of F = ma]
```

---

## Kinetic Energy of Rotation and Relation with M.I. [2023 Q4b, 2022 Q4b]

For a body rotating with angular velocity ω:
- Velocity of particle mᵢ at radius rᵢ: vᵢ = rᵢω
- K.E. of particle: (1/2)mᵢvᵢ² = (1/2)mᵢrᵢ²ω²

Total K.E.:
```
KE = Σ(1/2)mᵢrᵢ²ω²
   = (1/2)ω² × Σmᵢrᵢ²
```

Since `I = Σmᵢrᵢ²`:
```
∴ KE = (1/2)Iω²
```

**Also expressed as:**
```
KE = L²/(2I)   [using L = Iω]
```

---

## Total Kinetic Energy of a Rolling Body [2017 Q3d]

**Prove: Total KE of a rolling disc = (3/4)mv²  or  0.75mv²**

A rolling body has two types of KE:
- Translational KE: (1/2)mv²
- Rotational KE: (1/2)Iω²

For a circular disc: `I = MR²/2`
For rolling without slipping: `v = Rω → ω = v/R`

```
Total KE = (1/2)Mv² + (1/2)(MR²/2)(v/R)²
         = (1/2)Mv² + (1/2)(MR²/2)(v²/R²)
         = (1/2)Mv² + (1/4)Mv²
         = (3/4)Mv²
         = 0.75 Mv²   [PROVED]
```

**Result:**
```
Total KE (rolling disc) = (3/4)Mv² = 0.75mv²
```

---

## M.I. of Solid Sphere About Diameter [2018 Q3b]

**Consider:** A solid sphere of mass M and radius R.

Use shell integration. Consider a thin disc of thickness dx at distance x from center:
- Radius of disc: y = √(R² - x²)
- Volume of disc: πy²dx = π(R² - x²)dx
- Mass of disc: dm = [M/(4/3 πR³)] × π(R² - x²)dx = (3M/4R³)(R² - x²)dx
- M.I. of disc about diameter of sphere = (1/2)(dm)y² = (1/2)dm(R² - x²)

```
I = ∫₋ᴿᴿ (1/2)(3M/4R³)(R² - x²)² dx
  = (3M/8R³) ∫₋ᴿᴿ (R² - x²)² dx
  = (3M/8R³) ∫₋ᴿᴿ (R⁴ - 2R²x² + x⁴) dx
  = (3M/8R³) [R⁴x - 2R²x³/3 + x⁵/5]₋ᴿᴿ
  = (3M/8R³) × 2[R⁵ - 2R⁵/3 + R⁵/5]
  = (3M/4R³) × R⁵[1 - 2/3 + 1/5]
  = (3M/4)R² × [15/15 - 10/15 + 3/15]
  = (3M/4)R² × (8/15)
  = 2MR²/5
```

**Result:**
```
I_solid sphere (diameter) = 2MR²/5
```

---

# PART V: SOLVED NUMERICAL PROBLEMS

---

## 2023 (d) & 2018 (c): KE of Rotating Disc

**Given:**
- Mass M = 100 g = 0.1 kg
- Radius R = 10 cm = 0.1 m
- Speed n = 120 rpm = 120/60 = 2 rev/s

**Solution:**
```
ω = 2πn = 2π × 2 = 4π rad/s

I = MR²/2 = (0.1 × 0.1²)/2 = (0.1 × 0.01)/2 = 5 × 10⁻⁴ kg·m²

KE = (1/2)Iω² = (1/2) × 5 × 10⁻⁴ × (4π)²
   = (1/2) × 5 × 10⁻⁴ × 16π²
   = (1/2) × 5 × 10⁻⁴ × 157.91
   = (1/2) × 0.07896
   = 0.03948 J
```
**Answer: KE ≈ 3.95 × 10⁻² J ≈ 0.04 J**

---

## 2022 (d) & 2021 (d): M.I. of Revolving Disc

**Given:**
- Mass M = 900 g = 0.9 kg
- Radius R = 50 cm = 0.5 m
- Speed n = 120 rpm = 2 rev/s

**Solution:**
```
I = MR²/2 = (0.9 × 0.5²)/2 = (0.9 × 0.25)/2 = 0.225/2

I = 0.1125 kg·m²
```
**Answer: I = 0.1125 kg·m² ≈ 1.125 × 10⁻¹ kg·m²**

---

## 2020 (c): Angular Momentum of Flywheel

**Given:**
- Mass M = 100 kg
- Radius R = 0.5 m
- Speed n = 10 rev/s

**Solution:**
```
ω = 2πn = 2π × 10 = 20π rad/s

I = MR²/2 = (100 × 0.5²)/2 = (100 × 0.25)/2 = 12.5 kg·m²

L = Iω = 12.5 × 20π = 250π
L = 250 × 3.14159 = 785.4 kg·m²/s
```
**Answer: L ≈ 785.4 kg·m²/s**

---

## 2018 (d): Radius of Gyration of Flywheel [Same as 2017 Q4d]

**Given:**
- Torque τ = 25 N·m
- Mass M = 15 kg
- Revolutions in first second = 3 (from rest)

**Solution:**
```
Angular displacement in 1st second from rest:
θ = 2πn = 2π × 3 = 6π rad

Using θ = ω₀t + (1/2)αt² (with ω₀ = 0, t = 1s):
6π = (1/2) × α × 1
α = 12π rad/s²

From τ = Iα:
I = τ/α = 25/(12π) = 25/(37.699) = 0.6631 kg·m²

From I = Mk²:
k² = I/M = 0.6631/15 = 0.04421 m²
k = √0.04421 = 0.2102 m
```
**Answer: k ≈ 0.21 m**

---

## 2017 (d): Total KE of Rolling Disc

**Given:** A disc of mass M, radius R rolling with velocity v.

**Solution:**
```
KE_total = KE_translational + KE_rotational
         = (1/2)Mv² + (1/2)Iω²
         = (1/2)Mv² + (1/2)(MR²/2)(v/R)²
         = (1/2)Mv² + (1/4)Mv²
         = (3/4)Mv²
         = 0.75 Mv²   [PROVED]
```

---

# PART VI: ADDITIONAL IMPORTANT CONCEPTS

---

## Conservation of Angular Momentum

When no external torque acts on a system:
```
L = Iω = constant
I₁ω₁ = I₂ω₂
```

**Example:** A spinning skater pulls arms in → I decreases → ω increases.

## Analogy: Linear vs Rotational Motion

| Linear Motion | Rotational Motion |
|---|---|
| Mass (m) | Moment of Inertia (I) |
| Force (F) | Torque (τ) |
| Velocity (v) | Angular Velocity (ω) |
| Acceleration (a) | Angular Acceleration (α) |
| Momentum (p = mv) | Angular Momentum (L = Iω) |
| K.E. = ½mv² | K.E. = ½Iω² |
| F = ma | τ = Iα |
| Work = Fs | Work = τθ |
| Power = Fv | Power = τω |

## Equations of Rotational Motion (analogous to kinematics)

```
ω = ω₀ + αt
θ = ω₀t + (1/2)αt²
ω² = ω₀² + 2αθ
```

---

# PART VII: QUICK FORMULA REFERENCE

| Quantity | Formula | Unit |
|---|---|---|
| Angular velocity | ω = dθ/dt = 2πn | rad/s |
| Linear ↔ Angular | v = rω, a = rα | — |
| Moment of Inertia | I = Σmr² | kg·m² |
| Radius of Gyration | k = √(I/M) | m |
| Torque | τ = Iα = r×F | N·m |
| Angular Momentum | L = Iω = mvr | kg·m²/s |
| Rotational K.E. | KE = ½Iω² = L²/2I | J |
| Rolling body KE | KE = ½mv² + ½Iω² | J |
| Disc rolling KE | KE = ¾mv² | J |
| Perpendicular axis | Iz = Ix + Iy | kg·m² |
| Parallel axis | I = Icm + Md² | kg·m² |
| Disc (center ⊥) | I = MR²/2 | kg·m² |
| Ring (center ⊥) | I = MR² | kg·m² |
| Solid sphere | I = 2MR²/5 | kg·m² |
| Rod (center) | I = ML²/12 | kg·m² |

---

# PART VIII: YEAR-WISE PYQ ANSWER GUIDE

## 2023
- **Q4(a):** State & prove Theorem of Perpendicular Axis → See derivation ✅
- **Q4(b):** KE and Moment of Inertia relation → KE = ½Iω² derivation ✅
- **Q4(c):** Torque & Moment of Inertia definitions ✅
- **Q4(d):** KE of disc (100g, R=10cm, 120rpm) → **KE ≈ 0.04 J** ✅

## 2022
- **Q4(a):** Radius of gyration definition ✅
- **Q4(b):** KE–M.I. relation derivation ✅
- **Q4(c):** Perpendicular axis theorem proof ✅
- **Q4(d):** M.I. of disc (900g, R=50cm, 120rpm) → **I = 0.1125 kg·m²** ✅

## 2021
- **Q4(a):** Angular velocity definition ✅
- **Q4(b):** L = Iω derivation ✅
- **Q4(c):** Derive M.I. of uniform circular disc → **I = MR²/2** ✅
- **Q4(d):** Same disc numerical as 2022(d) → **I = 0.1125 kg·m²** ✅

## 2020
- **Q4(a):** Radius of gyration & M.I. definitions ✅
- **Q4(b):** Perpendicular axis theorem proof ✅
- **Q4(c):** Flywheel angular momentum → **L ≈ 785.4 kg·m²/s** ✅

## 2018
- **Q3(a):** Parallel axis theorem state & prove ✅
- **Q3(b):** M.I. of solid sphere about diameter → **I = 2MR²/5** ✅
- **Q3(c):** KE of disc (100g, R=10cm, 120rpm) → **KE ≈ 0.04 J** ✅
- **Q4(a):** Radius of gyration ✅
- **Q4(b):** τ = Iα derivation ✅
- **Q4(c):** Parallel axis theorem proof ✅
- **Q4(d):** Flywheel radius of gyration → **k ≈ 0.21 m** ✅

## 2017
- **Q3(a):** Cohesive force definition (Surface Tension chapter)
- **Q3(b):** Excess pressure in cylindrical soap bubble (Surface Tension chapter)
- **Q3(e):** Perpendicular axis theorem ✅
- **Q3(d):** Rolling disc total KE = 0.75mv² → **PROVED** ✅

---

# ⚡ EXAM TIPS & HIGH-FREQUENCY TOPICS

## Most Repeated Topics (⭐ = frequency)
1. ⭐⭐⭐⭐ **Perpendicular Axis Theorem** – State + Prove (2023, 2022, 2020, 2017)
2. ⭐⭐⭐⭐ **KE = ½Iω²** derivation (2023, 2022, 2021)
3. ⭐⭐⭐ **Parallel Axis Theorem** – State + Prove (2018, 2018 Q4c)
4. ⭐⭐⭐ **Disc numerical** – 100g/900g, R=10/50cm, 120rpm (2023, 2022, 2021, 2018)
5. ⭐⭐ **L = Iω** derivation (2021)
6. ⭐⭐ **M.I. of circular disc** derivation I = MR²/2 (2021)
7. ⭐⭐ **τ = Iα** derivation (2018)

## Key Numbers to Remember
- Disc (center ⊥): I = **MR²/2**
- Ring (center ⊥): I = **MR²**
- Solid Sphere: I = **2MR²/5**
- Rod (center): I = **ML²/12**
- Rolling disc: KE = **¾mv²** = 0.75mv²
- Perpendicular Axis: **Iz = Ix + Iy** (for LAMINAS only!)
- Parallel Axis: **I = Icm + Md²** (for ANY body)

## Common Mistakes to Avoid
- ❌ Perpendicular axis theorem is for **plane laminas ONLY** – don't apply to 3D solids
- ❌ Always convert rpm to rad/s: ω = 2πn (where n = rev/s = rpm/60)
- ❌ Rolling KE has BOTH translational AND rotational parts
- ❌ Radius of gyration k is NOT same as radius R (k = R/√2 for disc)
- ❌ Angular momentum L = Iω, NOT L = mω

## Derivation Checklist
- [ ] Perpendicular Axis Theorem: Iz = Ix + Iy
- [ ] Parallel Axis Theorem: I = Icm + Md²
- [ ] Rotational KE = ½Iω²
- [ ] τ = Iα (Torque–M.I. relation)
- [ ] L = Iω (Angular momentum–M.I. relation)
- [ ] I of disc = MR²/2 (by integration)
- [ ] I of solid sphere = 2MR²/5 (by integration)
- [ ] Rolling disc total KE = ¾mv²

---

*Made for exam preparation | Dynamics of Circular Motion | PYQs 2017–2023*
