# 🫧 Chapter 3: Surface Tension

> **Topics:** Surface Energy · Surface Tension · Capillary Rise · Contact Angle · Excess Pressure

---

## Table of Contents
- [1. Surface Tension and Surface Energy](#1-surface-tension-and-surface-energy)
- [2. Relation Between Surface Tension and Surface Energy](#2-relation-between-surface-tension-and-surface-energy)
- [3. Contact Angle](#3-contact-angle)
- [4. Capillary Rise](#4-capillary-rise)
- [5. Excess Pressure in Bubbles and Drops](#5-excess-pressure-in-bubbles-and-drops)
- [6. Cohesive and Adhesive Forces](#6-cohesive-and-adhesive-forces)
- [7. Solved Numerical Problems](#7-solved-numerical-problems)
- [References](#references)

---

## 1. Surface Tension and Surface Energy

### Q: What is surface tension and surface energy? *(2023, 2022, 2021, 2019)*

### Surface Tension

**Surface tension** ($T$ or $\gamma$) is the property of a liquid surface by which it tends to contract and occupy the minimum possible area. It arises because molecules at the surface have unbalanced cohesive forces.

```
INSIDE LIQUID:              AT SURFACE:
     O                        O  ← fewer neighbours above
   O O O                    O O O   (net downward pull)
   O O O                    ─────────────────────────
   O O O                    O O O  (bulk, balanced)
   O O O                    O O O
```

**Definition:**
> Surface tension is the force per unit length acting along the surface of a liquid, perpendicular to any line drawn on the surface.

$$\boxed{T = \frac{F}{l}}$$

Where:
- $T$ = surface tension (N/m)
- $F$ = force (N)
- $l$ = length of the line (m)

**SI Unit:** N/m or J/m²

| Liquid (at 20°C) | Surface Tension (N/m) |
|---|:---:|
| Water | 0.0728 |
| Mercury | 0.485 |
| Ethanol | 0.022 |
| Soap solution | ~0.025 |
| Blood plasma | ~0.050 |

### Surface Energy

**Surface energy** is the extra potential energy per unit area of the surface compared to the bulk of the liquid. It equals the work done in creating a unit area of new surface.

$$\boxed{E_s = \frac{W}{A}}$$

**SI Unit:** J/m²

---

## 2. Relation Between Surface Tension and Surface Energy

### Q: Show that the surface energy per unit area of a surface is equal to the surface tension. *(2023, 2022, 2021, 2019)*

### Proof

Consider a rectangular wire frame with one sliding wire of length $l$:

```
  Fixed wire ──────────────────────
              │  ← soap film →    │
  Sliding   ──┤                   ├──
  wire  →→→→ │← ─────────────────│
  (movable)   │       dx          │
              └───────────────────┘
              F is applied to stretch film by dx
```

The soap film has **two surfaces** (front and back), so effective length = $2l$.

**Force required to stretch film:**
$$F = T \times 2l$$

**Work done to move the slider by $dx$:**
$$dW = F \cdot dx = T \times 2l \times dx$$

**New area created** (two surfaces):
$$dA = 2l \cdot dx$$

**Surface energy per unit area:**
$$E_s = \frac{dW}{dA} = \frac{T \times 2l \times dx}{2l \times dx}$$

$$\boxed{E_s = T}$$

**∴ Surface energy per unit area = Surface tension** (numerically and dimensionally)

This is why surface tension has units of both **N/m** and **J/m²**.

---

## 3. Contact Angle

### Q: Define contact angle. *(2019)*

The **contact angle** $\theta$ is the angle between the tangent to the liquid surface at the point of contact with a solid wall and the solid surface, measured through the liquid.

```
  Contact angle for WATER (θ < 90°):    Contact angle for MERCURY (θ > 90°):
  (Liquid wets the surface)              (Liquid does not wet the surface)

        │ glass                                 │ glass
        │                                       │
        │    ╱ ← liquid surface                 │╲ ← liquid surface
        │θ ╱                                    │ ╲θ
        │╱                                      │
  ──────┼─────────                       ───────┼─────────
        │                                       │
    θ < 90° (concave meniscus)             θ > 90° (convex meniscus)
    Water rises in capillary               Mercury falls in capillary
```

| Liquid | Contact angle $\theta$ | Behavior |
|---|:---:|---|
| Water on glass | ~0° | Complete wetting, rises in capillary |
| Water on wax | ~105° | Non-wetting |
| Mercury on glass | ~140° | Non-wetting, falls in capillary |

---

## 4. Capillary Rise

### Q: Derive an expression for the height 'h' through which a liquid of surface tension T will rise in a capillary tube of radius r. *(2023, 2022, 2021, 2019)*

### Derivation

```
         │     │  ← capillary tube (radius r)
         │  ↑  │
         │  h  │ ← liquid rises to height h
         │  ↓  │
         │─────│ ← meniscus (concave)
         │~~~~~│
    ─────┴─────┴───── Liquid surface (reservoir)
```

Consider a liquid with surface tension $T$ and contact angle $\theta$ in a capillary of radius $r$.

**Upward force (surface tension):**

Surface tension acts along the liquid surface. The **vertical component** of the force at the contact circle (circumference $2\pi r$):

$$F_{up} = T \times 2\pi r \times \cos\theta$$

**Downward force (weight of liquid column):**
$$F_{down} = \rho g h \times \pi r^2$$

At equilibrium:
$$T \times 2\pi r \cos\theta = \rho g h \pi r^2$$

$$\boxed{h = \frac{2T\cos\theta}{\rho g r}}$$

**For water on glass** ($\theta \approx 0°$, $\cos\theta = 1$):

$$h = \frac{2T}{\rho g r}$$

**Key observations:**
- Smaller radius → greater height (capillary action in plant roots, towels)
- $\theta < 90°$ → liquid rises (adhesion > cohesion)
- $\theta > 90°$ → liquid depresses (cohesion > adhesion, e.g., mercury)

---

## 5. Excess Pressure in Bubbles and Drops

### Q: Derive an excess pressure in a cylindrical soap bubble / spherical drop. *(2017, others)*

### Spherical Liquid Drop

For a spherical drop of radius $R$:

$$\boxed{\Delta P = P_{inside} - P_{outside} = \frac{2T}{R}}$$

**Derivation:** Virtual work method — if radius increases by $dR$:
- Work done by excess pressure: $\Delta P \cdot 4\pi R^2 \cdot dR$
- Work against surface tension (1 surface): $T \cdot d(4\pi R^2) = T \cdot 8\pi R \cdot dR$

Equating: $\Delta P \cdot 4\pi R^2 \cdot dR = T \cdot 8\pi R \cdot dR$

$$\Delta P = \frac{2T}{R}$$

### Soap Bubble (has two surfaces)

$$\boxed{\Delta P = \frac{4T}{R}}$$

(double the pressure because soap bubble has inner and outer surfaces)

### Cylindrical Soap Bubble (per unit length)

For a cylinder of radius $r$ and unit length:

**Surface tension force** (per unit length): $F = T \times 2 \times 1 = 2T$ (two surfaces)

**Pressure force** (per unit length): $\Delta P \times 2r \times 1$

Equating: $\Delta P \times 2r = 2T$

$$\boxed{\Delta P = \frac{T}{r}}$$

### Summary Table

| Shape | Number of Surfaces | Excess Pressure |
|---|:---:|:---:|
| Spherical liquid drop | 1 | $\frac{2T}{R}$ |
| Spherical soap bubble | 2 | $\frac{4T}{R}$ |
| Cylindrical soap bubble | 2 | $\frac{T}{r}$ |

---

## 6. Cohesive and Adhesive Forces

### Q: What is cohesive force? *(2017)*

**Cohesive force:** The attractive force between molecules of the **same substance**. Responsible for surface tension in liquids.

**Adhesive force:** The attractive force between molecules of **different substances**. Responsible for wetting, capillary action.

| Property | Cohesive > Adhesive | Adhesive > Cohesive |
|---|---|---|
| Contact angle | > 90° | < 90° |
| Meniscus | Convex | Concave |
| Capillary effect | Depression | Rise |
| Example | Mercury in glass | Water in glass |

---

## 7. Solved Numerical Problems

---

### Problem 1 *(2023)*
**A capillary tube has radius r = 0.5×10⁻³ m and is dipped in water partially vertically. Find the height of the water column. Surface tension of water = 7.2×10⁻² N/m, density of water = 0.9×10³ kg/m³.**

**Given:**
- $r = 0.5 \times 10^{-3} \, \text{m}$
- $T = 7.2 \times 10^{-2} \, \text{N/m}$
- $\rho = 0.9 \times 10^3 \, \text{kg/m}^3$
- $\theta = 0°$ (assume complete wetting for water)
- $g = 9.8 \, \text{m/s}^2$

**Solution:**

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 7.2 \times 10^{-2} \times 1}{0.9 \times 10^3 \times 9.8 \times 0.5 \times 10^{-3}}$$

$$h = \frac{0.144}{4.41} = \frac{0.144}{4.41}$$

$$\boxed{h \approx 0.0327 \, \text{m} = 3.27 \, \text{cm}}$$

---

### Problem 2 *(2021)*
**Calculate the height to which a liquid will rise in a capillary tube of radius 0.22 mm when surface tension of liquid = 26×10³ N/m and density = 1000 kg/m³. Angle of contact = 0°.**

> ⚠️ Note: "26×10³ N/m" is likely a misprint for 26×10⁻³ N/m (26 mN/m). Using corrected value:

**Given:**
- $r = 0.22 \, \text{mm} = 0.22 \times 10^{-3} \, \text{m}$
- $T = 26 \times 10^{-3} \, \text{N/m}$
- $\rho = 1000 \, \text{kg/m}^3$
- $\theta = 0°$

**Solution:**

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 26 \times 10^{-3} \times 1}{1000 \times 9.8 \times 0.22 \times 10^{-3}}$$

$$h = \frac{52 \times 10^{-3}}{2.156}$$

$$\boxed{h \approx 0.0241 \, \text{m} \approx 2.41 \, \text{cm}}$$

---

### Problem 3 *(2019)*
**Calculate the height to which a liquid will rise in a capillary tube of radius 0.2 mm when surface tension = 26×10⁻³ N/m and density = 800 kg/m³. Angle of contact = 0.**

**Given:**
- $r = 0.2 \, \text{mm} = 2 \times 10^{-4} \, \text{m}$
- $T = 26 \times 10^{-3} \, \text{N/m}$
- $\rho = 800 \, \text{kg/m}^3$
- $\theta = 0°$

**Solution:**

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 26 \times 10^{-3}}{800 \times 9.8 \times 2 \times 10^{-4}}$$

$$h = \frac{52 \times 10^{-3}}{0.1568}$$

$$\boxed{h \approx 0.3316 \, \text{m} \approx 33.2 \, \text{cm}}$$

---

## References

1. Young, H.D. & Freedman, R.A. — *University Physics*, Ch. 12 (Surface Tension), Pearson
2. Adamson, A.W. & Gast, A.P. — *Physical Chemistry of Surfaces*, 6th ed., Wiley
3. de Gennes, P.G., Brochard-Wyart, F., Quéré, D. — *Capillarity and Wetting Phenomena*, Springer
4. Rowlinson, J.S. & Widom, B. — *Molecular Theory of Capillarity*, Oxford
5. [HyperPhysics — Surface Tension](http://hyperphysics.phy-astr.gsu.edu/hbase/surten.html)
6. [Khan Academy — Surface Tension](https://www.khanacademy.org/science/ap-chemistry/intermolecular-forces)
7. Vella, D. & Mahadevan, L. (2005) — *The Cheerios Effect*, American Journal of Physics, 73(9)

---

*[← Viscosity](./02_Viscosity.md) | [Back to README](./README.md) | [Elasticity →](./04_Elasticity.md)*
