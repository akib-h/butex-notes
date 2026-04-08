# 03. Theorem of Perpendicular Axes

> **Subject:** Physics I — Dynamics of Circular Motion
> **Date:** April 08, 2026
> **Level:** University / Undergraduate

---

## Table of Contents

1. [Statement](#1-statement)
2. [Applicability](#2-applicability)
3. [Mathematical Proof — Plane Laminar Body](#3-mathematical-proof--plane-laminar-body)
4. [Extension to Three-Dimensional Bodies](#4-extension-to-three-dimensional-bodies)
5. [Applications](#5-applications)
6. [Worked Examples](#6-worked-examples)
7. [Common Mistakes to Avoid](#7-common-mistakes-to-avoid)
8. [Online References](#8-online-references)

---

## 1. Statement

### For a Plane Laminar Body:

> **"For a planar (2D) object lying in the XY-plane, the moment of inertia about an axis perpendicular to the plane (Z-axis) is equal to the sum of the moments of inertia about two mutually perpendicular axes (X and Y) lying in the plane of the object and passing through the same point."**

$$\boxed{I_z = I_x + I_y}$$

where:
- $I_z$ = Moment of inertia about the Z-axis (perpendicular to the plane)
- $I_x$ = Moment of inertia about the X-axis (in the plane)
- $I_y$ = Moment of inertia about the Y-axis (in the plane)

---

## 2. Applicability

| Body Type | Applicable? | Reason |
|-----------|-------------|--------|
| Flat disc | ✅ Yes | Planar object |
| Ring | ✅ Yes | Planar object |
| Square/Rectangular plate | ✅ Yes | Planar object |
| Triangular lamina | ✅ Yes | Planar object |
| Solid cylinder | ❌ No | 3D object |
| Solid sphere | ❌ No | 3D object |

> ⚠️ **This theorem applies ONLY to plane laminar (2D flat) bodies.**

---

## 3. Mathematical Proof — Plane Laminar Body

### Setup

Consider a **plane laminar body** lying in the **XY-plane**. Let:
- X-axis and Y-axis lie **in the plane** of the body
- Z-axis is **perpendicular** to the plane, passing through the origin O

```
         Z ↑
          |
          |       Y
          |      ↗
          |    /
          |  /   · P(x, y)  ← particle at position (x, y, 0)
          |/________________→ X
          O
```

### Consider a Particle P

Let a particle of mass $m$ be at point $P(x, y, 0)$ in the plane.

Its **perpendicular distance** from each axis:
- From Z-axis: $r = \sqrt{x^2 + y^2}$
- From X-axis: distance = $y$
- From Y-axis: distance = $x$

### Compute Each Moment of Inertia

$$I_x = \sum my^2 \quad \text{(about X-axis)}$$

$$I_y = \sum mx^2 \quad \text{(about Y-axis)}$$

$$I_z = \sum mr^2 = \sum m(x^2 + y^2) \quad \text{(about Z-axis)}$$

### Combine:

$$I_z = \sum m(x^2 + y^2) = \sum mx^2 + \sum my^2 = I_y + I_x$$

$$\boxed{I_z = I_x + I_y \quad \text{[Proved]}}$$

---

## 4. Extension to Three-Dimensional Bodies

For a **three-dimensional body**, the perpendicular axis theorem does NOT hold directly, but a related result exists.

For any 3D rigid body with particles at positions $(x_i, y_i, z_i)$:

$$I_z = \sum m(x^2 + y^2)$$
$$I_y = \sum m(x^2 + z^2)$$
$$I_x = \sum m(y^2 + z^2)$$

Adding all three:

$$I_x + I_y + I_z = 2\sum m(x^2 + y^2 + z^2) = 2I$$

where $I = \sum mr^2$ with $r^2 = x^2 + y^2 + z^2$ is the moment of inertia about the axis from origin.

$$\boxed{I = \frac{1}{2}(I_x + I_y + I_z)}$$

> This is the **generalized perpendicular axis theorem for 3D bodies**.

---

## 5. Applications

### 5.1 Moment of Inertia of a Disc About a Diameter

**Using the Perpendicular Axis Theorem:**

For a uniform disc of mass M and radius R:
- $I_z = \frac{1}{2}MR^2$ (about central perpendicular axis)
- By symmetry: $I_x = I_y$ (two diameters)

From $I_z = I_x + I_y$:

$$\frac{1}{2}MR^2 = 2I_{diameter}$$

$$\boxed{I_{diameter} = \frac{1}{4}MR^2}$$

### 5.2 Moment of Inertia of a Ring About a Diameter

For a ring of mass M and radius R:
- $I_z = MR^2$
- By symmetry: $I_x = I_y$

$$MR^2 = 2I_{diameter}$$

$$\boxed{I_{diameter} = \frac{1}{2}MR^2}$$

### 5.3 Square Plate (side a, axis through center)

For a square plate of mass M and side $a$:
- $I_x = I_y = \frac{1}{12}Ma^2$ (by standard formula for a rod)
- $I_z = I_x + I_y = \frac{1}{12}Ma^2 + \frac{1}{12}Ma^2 = \frac{1}{6}Ma^2$

$$\boxed{I_z = \frac{1}{6}Ma^2}$$

---

## 6. Worked Examples

### Example 1

**Problem:** The moment of inertia of a circular disc about an axis through its center and perpendicular to its plane is $0.5$ kg·m². Find its moment of inertia about a diameter.

**Solution:**

By Perpendicular Axis Theorem:
$$I_z = I_x + I_y = 2I_{diameter} \quad \text{(by symmetry)}$$

$$I_{diameter} = \frac{I_z}{2} = \frac{0.5}{2} = 0.25 \text{ kg·m}^2$$

$$\boxed{I_{diameter} = 0.25 \text{ kg·m}^2}$$

---

### Example 2

**Problem:** A thin uniform ring of mass 2 kg and radius 0.5 m lies in the XY-plane. Find:
- (a) $I_z$ — about the Z-axis
- (b) $I_x$ — about the X-axis (a diameter)
- (c) Verify the perpendicular axis theorem.

**Solution:**

(a) $I_z = MR^2 = 2 \times (0.5)^2 = 0.5$ kg·m²

(b) By symmetry $I_x = I_y$, so:
$$I_z = I_x + I_y = 2I_x$$
$$I_x = \frac{0.5}{2} = 0.25 \text{ kg·m}^2$$

(c) Verification:
$$I_x + I_y = 0.25 + 0.25 = 0.5 = I_z \quad ✓$$

---

### Example 3 — Square Lamina

**Problem:** A square lamina of mass 4 kg and side 0.6 m. Find the moment of inertia about an axis through the center perpendicular to its plane.

**Solution:**

$$I_x = \frac{1}{12}Ma^2 = \frac{1}{12} \times 4 \times (0.6)^2 = \frac{1}{12} \times 4 \times 0.36 = 0.12 \text{ kg·m}^2$$

By symmetry of the square: $I_y = I_x = 0.12$ kg·m²

By Perpendicular Axis Theorem:
$$I_z = I_x + I_y = 0.12 + 0.12 = 0.24 \text{ kg·m}^2$$

$$\boxed{I_z = 0.24 \text{ kg·m}^2}$$

---

### Example 4 — 3D Sphere

**Problem:** For a solid sphere of mass M and radius R, verify that $I = \frac{1}{2}(I_x + I_y + I_z)$.

**Solution:**

By symmetry of the sphere: $I_x = I_y = I_z = \frac{2}{5}MR^2$

$$\frac{1}{2}(I_x + I_y + I_z) = \frac{1}{2}\left(3 \times \frac{2}{5}MR^2\right) = \frac{3}{5}MR^2$$

And $I = \sum mr^2 = \sum m(x^2 + y^2 + z^2)$.

For a uniform sphere: $I = \frac{3}{5}MR^2$ ✓ (verified by integration)

$$\boxed{\text{Verified: } I = \frac{1}{2}(I_x + I_y + I_z)}$$

---

## 7. Common Mistakes to Avoid

| ❌ Mistake | ✅ Correction |
|-----------|--------------|
| Applying to 3D solids directly | Only valid for plane laminar bodies |
| Mixing up which axis is Z | Z-axis must be perpendicular to the plane of the body |
| Assuming $I_x = I_y$ always | True only for symmetric bodies |
| Forgetting all three axes must pass through the same point | They must be concurrent |

---

## 8. Online References

- 📖 [HyperPhysics — Perpendicular Axis Theorem](http://hyperphysics.phy-astr.gsu.edu/hbase/perpx.html)
- 📖 [Wikipedia — Perpendicular Axis Theorem](https://en.wikipedia.org/wiki/Perpendicular_axis_theorem)
- 📖 [LibreTexts — Calculating Moments of Inertia](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/Book%3A_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/10%3A_Fixed-Axis_Rotation__Introduction/10.05%3A_Calculating_Moments_of_Inertia)
- 📖 [MIT OCW — Rotation and Moment of Inertia](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
- 🎥 [YouTube — Perpendicular Axis Theorem Derivation](https://www.youtube.com/results?search_query=perpendicular+axis+theorem+derivation)

---

> **← Previous:** [02. Radius of Gyration](./02_Radius_of_Gyration.md)
> **→ Next:** [04. Parallel Axis Theorem](./04_Parallel_Axis_Theorem.md)
