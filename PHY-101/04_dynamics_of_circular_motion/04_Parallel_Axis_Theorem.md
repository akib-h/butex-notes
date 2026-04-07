# 04. Theorem of Parallel Axes

> **Subject:** Physics I — Dynamics of Circular Motion
> **Date:** April 08, 2026
> **Level:** University / Undergraduate

---

## Table of Contents

1. [Statement](#1-statement)
2. [Applicability](#2-applicability)
3. [Mathematical Proof](#3-mathematical-proof)
4. [Key Notes on the Theorem](#4-key-notes-on-the-theorem)
5. [Applications](#5-applications)
6. [Combined Use with Perpendicular Axis Theorem](#6-combined-use-with-perpendicular-axis-theorem)
7. [Worked Examples](#7-worked-examples)
8. [Online References](#8-online-references)

---

## 1. Statement

> **"The moment of inertia of a rigid body about any axis is equal to its moment of inertia about a parallel axis through its center of mass, plus the product of the total mass of the body and the square of the perpendicular distance between the two parallel axes."**

$$\boxed{I = I_{cm} + Mh^2}$$

where:
- $I$ = Moment of inertia about the given axis
- $I_{cm}$ = Moment of inertia about a parallel axis through the **center of mass**
- $M$ = Total mass of the body
- $h$ = Perpendicular distance between the two parallel axes

---

## 2. Applicability

| Property | Details |
|----------|---------|
| Valid for | **All rigid bodies** — both plane laminar AND three-dimensional |
| Axes required | Must be **parallel** to each other |
| Reference axis | One axis MUST pass through the **center of mass** |
| Constraint | The two axes must NOT be the same axis |

---

## 3. Mathematical Proof

### Setup

```
       B
       |  ← Given axis (through O)
       |
  h    |
       |
  G────|── center of mass (G)
       |  ← Parallel axis through G (I_cm)
       |
       A
```

Let:
- The **center of mass axis** (G) be at origin.
- The **given axis** (O) be parallel to G, at perpendicular distance $h$.
- A particle of mass $m$ be at point B with coordinates $(x, y)$ relative to the center of mass.

From the geometry (triangle OAB in the notes):

$$OB^2 = OA^2 + AB^2$$

Let $OA = x + h$ along the x-direction, and $AB = y$:

$$\pi^2 = (x+h)^2 + y^2 = x^2 + 2xh + h^2 + y^2$$

Since $r^2 = x^2 + y^2$ (distance from center of mass axis):

$$\pi^2 = r^2 + 2xh + h^2$$

### Computing $I_O$:

$$I_O = \sum m\pi^2 = \sum m(r^2 + 2xh + h^2)$$

$$= \sum mr^2 + 2h\sum mx + h^2\sum m$$

### Key Step — Center of Mass Condition:

Since G is the **center of mass**, the first moment about G is zero:

$$\sum mx = 0$$

Therefore the middle term vanishes:

$$I_O = \sum mr^2 + 0 + Mh^2$$

$$\boxed{I_O = I_{cm} + Mh^2 \quad \text{[Proved]}}$$

---

## 4. Key Notes on the Theorem

1. **$I_{cm}$ is always the minimum** — among all parallel axes, the moment of inertia is smallest about the axis through the center of mass.
2. **$Mh^2$ is always positive** — moving the axis away from the CM always increases I.
3. The theorem gives a **shortcut**: if $I_{cm}$ is known, any parallel axis I can be found without re-integration.
4. This applies to both **laminar** and **3D** bodies (unlike the perpendicular axis theorem).

---

## 5. Applications

### 5.1 Disc — Axis at the Rim

For a disc of mass M, radius R:
- $I_{cm} = \frac{1}{2}MR^2$ (through center, ⊥ to plane)
- $h = R$ (rim is at distance R from center)

$$I_{rim} = I_{cm} + MR^2 = \frac{1}{2}MR^2 + MR^2 = \frac{3}{2}MR^2$$

$$\boxed{I_{rim} = \frac{3}{2}MR^2}$$

### 5.2 Ring — Axis at the Rim (tangent in the plane)

For a ring of mass M, radius R:
- $I_{diameter} = \frac{1}{2}MR^2$ (through center, in the plane)
- $h = R$

$$I_{tangent} = \frac{1}{2}MR^2 + MR^2 = \frac{3}{2}MR^2$$

$$\boxed{I_{tangent (in-plane)} = \frac{3}{2}MR^2}$$

### 5.3 Rod — Axis at One End

For a thin rod of mass M, length L:
- $I_{center} = \frac{1}{12}ML^2$
- $h = L/2$

$$I_{end} = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{12}ML^2 + \frac{1}{4}ML^2$$

$$= ML^2\left(\frac{1}{12} + \frac{3}{12}\right) = \frac{1}{3}ML^2$$

$$\boxed{I_{end} = \frac{1}{3}ML^2}$$

### 5.4 Solid Sphere — Axis at Surface

For a sphere of mass M, radius R:
- $I_{cm} = \frac{2}{5}MR^2$
- $h = R$

$$I_{surface} = \frac{2}{5}MR^2 + MR^2 = \frac{7}{5}MR^2$$

$$\boxed{I_{surface} = \frac{7}{5}MR^2}$$

---

## 6. Combined Use with Perpendicular Axis Theorem

Both theorems together can solve complex configurations:

**Example: Moment of inertia of a disc about a tangent in its plane**

Step 1 — Use Perpendicular Axis Theorem:
$$I_z = I_x + I_y \Rightarrow \frac{1}{2}MR^2 = 2I_{diameter}$$
$$I_{diameter} = \frac{1}{4}MR^2$$

Step 2 — Use Parallel Axis Theorem:
$$I_{tangent} = I_{diameter} + MR^2 = \frac{1}{4}MR^2 + MR^2 = \frac{5}{4}MR^2$$

$$\boxed{I_{tangent \text{ (in plane)}} = \frac{5}{4}MR^2}$$

---

## 7. Worked Examples

### Example 1

**Problem:** The moment of inertia of a uniform rod of mass 3 kg and length 1.2 m about an axis through its center perpendicular to its length is 0.36 kg·m². Find its moment of inertia about a parallel axis through one end.

**Solution:**

Verify: $I_{cm} = \frac{1}{12}ML^2 = \frac{1}{12} \times 3 \times 1.44 = 0.36$ kg·m² ✓

$$h = \frac{L}{2} = \frac{1.2}{2} = 0.6 \text{ m}$$

$$I_{end} = I_{cm} + Mh^2 = 0.36 + 3 \times (0.6)^2 = 0.36 + 1.08 = 1.44 \text{ kg·m}^2$$

$$\boxed{I_{end} = 1.44 \text{ kg·m}^2}$$

---

### Example 2

**Problem:** Find the moment of inertia of a uniform circular disc of mass 5 kg and radius 0.4 m about:
- (a) An axis through its center perpendicular to its plane
- (b) A tangential axis perpendicular to its plane (at the rim)

**Solution:**

(a) $I_{cm} = \frac{1}{2}MR^2 = \frac{1}{2} \times 5 \times (0.4)^2 = \frac{1}{2} \times 5 \times 0.16 = 0.4$ kg·m²

(b) $h = R = 0.4$ m:

$$I_{rim} = I_{cm} + Mh^2 = 0.4 + 5 \times (0.4)^2 = 0.4 + 0.8 = 1.2 \text{ kg·m}^2$$

$$\boxed{I_{rim} = 1.2 \text{ kg·m}^2 = \frac{3}{2}MR^2}$$

---

### Example 3

**Problem:** Calculate the M.I. of a solid sphere (mass 4 kg, radius 0.3 m) about a tangential axis.

**Solution:**

$$I_{cm} = \frac{2}{5}MR^2 = \frac{2}{5} \times 4 \times (0.3)^2 = \frac{2}{5} \times 4 \times 0.09 = 0.144 \text{ kg·m}^2$$

$$h = R = 0.3 \text{ m}$$

$$I_{tangent} = I_{cm} + MR^2 = 0.144 + 4 \times 0.09 = 0.144 + 0.36 = 0.504 \text{ kg·m}^2$$

$$\boxed{I_{tangent} = 0.504 \text{ kg·m}^2}$$

Check: $\frac{7}{5}MR^2 = \frac{7}{5} \times 4 \times 0.09 = 0.504$ ✓

---

### Example 4 — Minimum Moment of Inertia

**Problem:** Demonstrate that the moment of inertia is minimum about the center of mass axis, for a rod of mass 2 kg, length 1 m.

**Solution:**

| Axis position | $h$ from center | $I = I_{cm} + Mh^2$ |
|--------------|-----------------|----------------------|
| Center | 0 | $\frac{1}{12}(2)(1)^2 = 0.167$ kg·m² |
| L/4 from center | 0.25 m | $0.167 + 2(0.0625) = 0.292$ kg·m² |
| One end | 0.5 m | $0.167 + 2(0.25) = 0.667$ kg·m² |

Clearly $I_{minimum} = I_{cm}$ at $h = 0$. ✓

---

## 8. Online References

- 📖 [HyperPhysics — Parallel Axis Theorem](http://hyperphysics.phy-astr.gsu.edu/hbase/parax.html)
- 📖 [Wikipedia — Parallel Axis Theorem](https://en.wikipedia.org/wiki/Parallel_axis_theorem)
- 📖 [LibreTexts — Parallel Axis Theorem](https://phys.libretexts.org/)
- 📖 [Khan Academy — Parallel Axis Theorem](https://www.khanacademy.org/science/physics/torque-angular-momentum/rotational-inertia/a/rotational-inertia)
- 🎥 [MIT OCW 8.01 Lecture](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)

---

> **← Previous:** [03. Perpendicular Axis Theorem](./03_Perpendicular_Axis_Theorem.md)
> **→ Next:** [05. MI of Uniform Circular Disc](./05_MI_Uniform_Circular_Disc.md)
