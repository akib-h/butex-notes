# 🔩 Chapter 4: Elasticity

> **Topics:** Hooke's Law · Young's Modulus · Bulk Modulus · Modulus of Rigidity · Poisson's Ratio · Strain Energy · Elastic Fatigue

---

## Table of Contents
- [1. Stress and Strain](#1-stress-and-strain)
- [2. Hooke's Law](#2-hookes-law)
- [3. Elastic Moduli](#3-elastic-moduli)
- [4. Poisson's Ratio](#4-poissons-ratio)
- [5. Relations Between Elastic Constants](#5-relations-between-elastic-constants)
- [6. Strain Energy](#6-strain-energy)
- [7. Elastic Fatigue](#7-elastic-fatigue)
- [8. Elastic Behavior of a Wire Under Different Loads](#8-elastic-behavior-of-a-wire-under-different-loads)
- [9. Solved Numerical Problems](#9-solved-numerical-problems)
- [References](#references)

---

## 1. Stress and Strain

### Q: Explain stress and strain graphically. *(2019)*

### Stress

**Stress** is the restoring force per unit area developed inside a material when it is deformed.

$$\sigma = \frac{F}{A} \quad \text{(unit: Pa = N/m}^2\text{)}$$

**Types of Stress:**
| Type | Description | Diagram |
|---|---|---|
| Tensile | Stretching force | →\|→ |
| Compressive | Squeezing force | ←\|← |
| Shear | Tangential force | ↑→ sliding |

### Strain

**Strain** is the fractional change in dimension of a body when stress is applied. It is dimensionless.

| Type | Definition | Formula |
|---|---|---|
| Longitudinal | Change in length / Original length | $\epsilon = \Delta L / L$ |
| Volumetric | Change in volume / Original volume | $\epsilon_V = \Delta V / V$ |
| Shear | Angle of shear | $\phi = x/y$ |

### Stress-Strain Graph

```
    Stress (σ)
        ↑
   U    │              × (Breaking point)
        │           ╱   ╲
   E    │──────── ╱       ╲
        │       ╱           ╲ (Plastic region)
   Y    │─────×               ×──────
        │   ╱↑(Yield point)
        │  ╱ (Elastic region - linear)
   P    │─×  (Proportional limit)
        │╱
        └────────────────────────→ Strain (ε)
        O
```

**Key Points:**
- **O→P:** Linear region; Hooke's law obeyed
- **P:** Proportional limit — Hooke's law just ceases
- **E:** Elastic limit — no permanent deformation below this
- **Y:** Yield point — permanent deformation begins
- **U:** Ultimate tensile strength — maximum stress
- **Breaking point:** Fracture

---

## 2. Hooke's Law

### Q: State and explain Hooke's law of elasticity. *(2023, 2022, 2021, 2020, 2018)*

### Statement

> *Within the elastic limit, the stress developed in a body is directly proportional to the strain produced.*

$$\sigma \propto \epsilon$$

$$\boxed{\frac{\sigma}{\epsilon} = E = \text{constant (Modulus of Elasticity)}}$$

### Explanation

- The **modulus of elasticity** $E$ is the slope of the linear region of the stress-strain graph
- It measures the **stiffness** of the material
- Valid only below the elastic limit
- Beyond elastic limit, permanent deformation occurs (Hooke's law fails)

### Statement for Springs

For a spring: $F = kx$ (force proportional to extension)
- $k$ = spring constant (N/m)
- $x$ = extension (m)

---

## 3. Elastic Moduli

### 3.1 Young's Modulus (Y)

**Young's modulus** measures resistance to longitudinal deformation.

$$\boxed{Y = \frac{\text{Longitudinal Stress}}{\text{Longitudinal Strain}} = \frac{F/A}{\Delta L/L} = \frac{FL}{A \Delta L}}$$

**Unit:** Pa (N/m²)

| Material | Young's Modulus (GPa) |
|---|:---:|
| Steel | 200 |
| Aluminum | 70 |
| Glass | 70 |
| Rubber | 0.01–0.1 |
| Bone | 9–21 |

### 3.2 Bulk Modulus (K)

**Bulk modulus** measures resistance to volumetric compression.

$$\boxed{K = -\frac{P}{\Delta V/V} = -\frac{PV}{\Delta V}}$$

The negative sign ensures $K$ is positive (volume decreases when pressure increases).

**Compressibility** $= 1/K$

### 3.3 Modulus of Rigidity (n or G)

**Modulus of rigidity (shear modulus)** measures resistance to shear deformation.

$$\boxed{n = G = \frac{\text{Shear Stress}}{\text{Shear Strain}} = \frac{F/A}{\phi}}$$

Where $\phi$ is the angle of shear (in radians).

---

## 4. Poisson's Ratio

### Q: What is Poisson's ratio? Show that its value lies between -1 and 0.5. *(2023, 2022, 2021, 2020, 2019, 2018, 2017)*

### Definition

When a wire is stretched longitudinally, it contracts laterally. **Poisson's ratio** is the ratio of lateral strain to longitudinal strain.

$$\boxed{\sigma = -\frac{\text{Lateral Strain}}{\text{Longitudinal Strain}} = -\frac{\Delta d/d}{\Delta L/L}}$$

The negative sign ensures $\sigma$ is positive for normal materials (lateral contraction when stretched).

```
   ←── Original width d ──→
   ╔════════════════════════╗  ┐
   ║                        ║  │ Original length L
   ╚════════════════════════╝  ┘
           ↓ Stretch
   ←── Narrower width ─→
   ╔══════════════════╗  ┐
   ║                  ║  │ Longer length L + ΔL
   ║                  ║  │
   ╚══════════════════╝  ┘
   Longitudinal strain = ΔL/L (positive)
   Lateral strain = -Δd/d (negative, contraction)
```

**Poisson's ratio is dimensionless.**

Typical values: $\sigma \approx 0.2$ to $0.4$ for most metals.

### Proof that $-1 \leq \sigma \leq 0.5$

The relationship between elastic constants:

$$Y = 3K(1 - 2\sigma) \quad \text{...(1)}$$
$$Y = 2n(1 + \sigma) \quad \text{...(2)}$$

**Since $Y$, $K$, $n$ must all be positive** (physical requirement):

**From equation (1):**
$$K = \frac{Y}{3(1-2\sigma)} > 0 \implies 1 - 2\sigma > 0 \implies \sigma < \frac{1}{2}$$

**From equation (2):**
$$n = \frac{Y}{2(1+\sigma)} > 0 \implies 1 + \sigma > 0 \implies \sigma > -1$$

Therefore:
$$\boxed{-1 \leq \sigma \leq \frac{1}{2}}$$

> **In practice:** Most materials have $0 < \sigma < 0.5$. Materials with negative Poisson's ratio (auxetic materials) exist but are rare.

---

## 5. Relations Between Elastic Constants

### Q: Prove that Y = 2n(1 + σ). *(2022, 2021, 2019)*
### Q: Prove that k = Y / 3(1–2σ). *(2021)*

### Relation 1: $Y = 2n(1 + \sigma)$

Consider a unit cube subjected to shear:

**Derivation via pure shear analysis:**

A cube under equal and opposite stresses $\sigma_0$ along two perpendicular directions experiences shear in the diagonal planes.

Strain along tension diagonal:
$$e_1 = \frac{\sigma_0}{Y} + \sigma\frac{\sigma_0}{Y} = \frac{\sigma_0}{Y}(1+\sigma)$$

But for shear strain $\phi = \tau/n$, and the geometric relation gives:
$$\phi = 2e_1$$

The shear stress $\tau = \sigma_0$ (for this geometry), so:
$$\frac{\sigma_0}{n} = \frac{2\sigma_0}{Y}(1+\sigma)$$

$$\boxed{Y = 2n(1 + \sigma)}$$

### Relation 2: $Y = 3K(1 - 2\sigma)$

Consider a unit cube under equal stress $\sigma_0$ in all three directions (hydrostatic):

Volumetric strain:
$$\frac{\Delta V}{V} = 3 \times \frac{\sigma_0}{Y}(1 - 2\sigma)$$

By definition of Bulk modulus:
$$K = \frac{\sigma_0}{\Delta V/V} = \frac{Y}{3(1-2\sigma)}$$

$$\boxed{Y = 3K(1 - 2\sigma)}$$

### Combined Relation

Eliminating $\sigma$ from both relations:

$$\boxed{\frac{1}{Y} = \frac{1}{3K} + \frac{1}{n} \implies \frac{9}{Y} = \frac{3}{n} + \frac{1}{K}}$$

Or: $Y = \frac{9Kn}{3K + n}$

---

## 6. Strain Energy

### Q: Show that in any type of strain, work done per unit volume = ½ × stress × strain. *(2023, 2022, 2020, 2019, 2018)*
### Q: Show work done per unit volume = 5 × stress × strain. *(2020 — likely a misprint for ½)*

### Derivation

Consider a wire of length $L$, cross-sectional area $A$, Young's modulus $Y$.

When stretched by $\Delta L$ under force $F$:

The force varies from 0 to $F$ as extension varies from 0 to $\Delta L$.

**Work done (area under F-x graph = triangle):**
$$W = \frac{1}{2} F \cdot \Delta L$$

**Volume of wire:** $V = A \cdot L$

**Work done per unit volume:**
$$w = \frac{W}{V} = \frac{\frac{1}{2}F \cdot \Delta L}{A \cdot L} = \frac{1}{2} \cdot \frac{F}{A} \cdot \frac{\Delta L}{L}$$

$$\boxed{w = \frac{1}{2} \times \text{stress} \times \text{strain}}$$

Since $\text{stress} = Y \times \text{strain}$:

$$w = \frac{1}{2} Y \epsilon^2 = \frac{\sigma^2}{2Y}$$

This is valid for all types of elastic strain (longitudinal, shear, volumetric).

```
  Force F
     ↑
   F │        ╱
     │      ╱
     │    ╱    ← Area = ½ F·ΔL = Work done
     │  ╱
     │╱
     └──────────→  Extension ΔL
    O
```

---

## 7. Elastic Fatigue

### Q: What is meant by elastic fatigue? *(2018)*

**Elastic fatigue** is the phenomenon in which a material loses its elastic properties (i.e., becomes less perfectly elastic) when subjected to repeated or prolonged stress, even if the stress remains within the elastic limit.

**Characteristics:**
- Material takes longer to recover its original shape
- The elastic limit decreases with repeated stress cycles
- Eventually the material may fracture (fatigue failure)

**Examples:**
- Springs in machinery eventually weaken
- Metal bridges fatigue under traffic loads
- Aircraft wings undergo fatigue from pressurization cycles

**Significance:**
- Engineering structures are designed with safety factors to account for fatigue
- S-N curves (Wöhler curves) plot stress vs. number of cycles to failure

---

## 8. Elastic Behavior of a Wire Under Different Loads

### Q: Discuss the elastic behavior of a solid material wire of uniform cross section under different loads. *(2021)*

*(See the Stress-Strain Graph in Section 1 for the graphical discussion)*

**Stages:**

1. **Perfectly elastic region (O to E):** Wire returns to original length. Hooke's law obeyed up to P.
2. **Plastic deformation (E to U):** Permanent deformation. Wire elongates significantly. Necking begins beyond U.
3. **Fracture (at breaking point):** Wire snaps.

**Energy stored:**
- Area under stress-strain curve = energy absorbed per unit volume
- Larger area → "tougher" material

| Property | High | Low |
|---|---|---|
| Strength | Requires high stress to deform | Low stress causes deformation |
| Stiffness | High Young's modulus | Low Young's modulus |
| Ductility | Large plastic region | Small plastic region |
| Toughness | Large area under curve | Small area under curve |

---

## 9. Solved Numerical Problems

---

### Problem 1 *(2023)*
**Young's Modulus of metal = 2×10¹¹ N/m², Breaking stress = 1.078×10⁹ N/m². Calculate the maximum energy per unit volume that can be stored.**

**Given:**
- $Y = 2 \times 10^{11} \, \text{N/m}^2$
- Breaking stress $\sigma_b = 1.078 \times 10^9 \, \text{N/m}^2$

**Solution:**

Maximum strain energy per unit volume at breaking stress:

$$u = \frac{\sigma_b^2}{2Y} = \frac{(1.078 \times 10^9)^2}{2 \times 2 \times 10^{11}}$$

$$u = \frac{1.162 \times 10^{18}}{4 \times 10^{11}}$$

$$\boxed{u = 2.905 \times 10^6 \, \text{J/m}^3 \approx 2.9 \, \text{MJ/m}^3}$$

---

### Problem 2 *(2020)*
**Find the work done in stretching a wire of 1 mm² cross-section and 2 m long through 0.1 mm. Y = 2×10¹¹ N/m².**

**Given:**
- $A = 1 \, \text{mm}^2 = 10^{-6} \, \text{m}^2$
- $L = 2 \, \text{m}$
- $\Delta L = 0.1 \, \text{mm} = 10^{-4} \, \text{m}$
- $Y = 2 \times 10^{11} \, \text{N/m}^2$

**Solution:**

$$\text{Stress} = Y \times \frac{\Delta L}{L} = 2 \times 10^{11} \times \frac{10^{-4}}{2} = 10^7 \, \text{Pa}$$

$$W = \frac{1}{2} \times \text{stress} \times \text{strain} \times \text{Volume}$$

$$W = \frac{1}{2} \times \frac{\Delta L}{L} \times Y \times \frac{\Delta L}{L} \times (A \cdot L)$$

$$W = \frac{1}{2} \times Y \times \frac{(\Delta L)^2}{L} \times A$$

$$W = \frac{1}{2} \times 2 \times 10^{11} \times \frac{(10^{-4})^2}{2} \times 10^{-6}$$

$$W = \frac{1}{2} \times 2 \times 10^{11} \times \frac{10^{-8}}{2} \times 10^{-6}$$

$$W = \frac{1}{2} \times \frac{2 \times 10^{-3}}{2} = 5 \times 10^{-4}$$

$$\boxed{W = 5 \times 10^{-4} \, \text{J} = 0.5 \, \text{mJ}}$$

---

### Problem 3 *(2019)*
**If n = 8×10¹⁰ N/m² and Y = 20×10¹⁰ N/m², calculate Poisson's ratio.**

**Given:**
- $n = 8 \times 10^{10} \, \text{N/m}^2$
- $Y = 20 \times 10^{10} \, \text{N/m}^2$

**Solution:**

Using $Y = 2n(1 + \sigma)$:

$$20 \times 10^{10} = 2 \times 8 \times 10^{10} \times (1 + \sigma)$$

$$1 + \sigma = \frac{20}{16} = 1.25$$

$$\boxed{\sigma = 0.25}$$

---

### Problem 4 *(2018)*
**The modulus of rigidity and Poisson's ratio are 2.87×10¹⁰ N/m² and 0.379 respectively. Find Young's modulus.**

**Given:**
- $n = 2.87 \times 10^{10} \, \text{N/m}^2$
- $\sigma = 0.379$

**Solution:**

Using $Y = 2n(1 + \sigma)$:

$$Y = 2 \times 2.87 \times 10^{10} \times (1 + 0.379)$$

$$Y = 5.74 \times 10^{10} \times 1.379$$

$$\boxed{Y = 7.917 \times 10^{10} \, \text{N/m}^2 \approx 7.9 \times 10^{10} \, \text{N/m}^2}$$

---

### Problem 5 *(2017)*
**A flywheel is accelerated by torque 25 N·m for 3 revolutions in 1st second; mass = 15 kg. Calculate radius of gyration.**

*(This problem belongs to Circular Motion — solved in [Chapter 5](./05_Circular_Motion.md))*

---

## References

1. Halliday, D., Resnick, R. — *Physics*, Vol. 1, Ch. 12 (Elasticity), Wiley
2. Young, H.D. & Freedman, R.A. — *University Physics*, Ch. 11 (Elasticity), Pearson
3. Poisson, S.D. (1827) — *Mémoire sur l'équilibre et le mouvement des corps élastiques*, Paris
4. Timoshenko, S.P. & Goodier, J.N. — *Theory of Elasticity*, McGraw-Hill
5. [HyperPhysics — Elastic Moduli](http://hyperphysics.phy-astr.gsu.edu/hbase/permot3.html)
6. [Engineering Toolbox — Elastic Properties of Materials](https://www.engineeringtoolbox.com/young-modulus-d_417.html)
7. Callister, W.D. — *Materials Science and Engineering: An Introduction*, Wiley

---

*[← Surface Tension](./03_Surface_Tension.md) | [Back to README](./README.md) | [Circular Motion →](./05_Circular_Motion.md)*
