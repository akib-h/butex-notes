# 📌 Topic 6: Three Dimensional Coordinate System

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Introduction to 3D Space](#1-introduction-to-3d-space)
2. [The Three-Dimensional Coordinate System](#2-the-three-dimensional-coordinate-system)
3. [Distance Formula in 3D](#3-distance-formula-in-3d)
4. [Section Formula in 3D](#4-section-formula-in-3d)
5. [Octants](#5-octants)
6. [Vectors in 3D](#6-vectors-in-3d)
7. [Equation of a Sphere](#7-equation-of-a-sphere)
8. [Solved Examples](#8-solved-examples)
9. [References](#9-references)

---

## 1. Introduction to 3D Space

The **three-dimensional coordinate system** extends the 2D Cartesian plane by adding a third axis, the **Z-axis**, perpendicular to both X and Y axes. Every point in space is uniquely represented by an ordered triple $(x, y, z)$.

> 📷 Reference: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Coord_system_CA_0.svg/400px-Coord_system_CA_0.svg.png

The system was formalized by **Descartes** and is the basis of all 3D analytic geometry, vector calculus, and multivariable calculus.

---

## 2. The Three-Dimensional Coordinate System

### 2.1 The Three Axes

- **X-axis:** Horizontal, pointing right
- **Y-axis:** Horizontal, pointing away (depth)
- **Z-axis:** Vertical, pointing up

They are mutually perpendicular and intersect at the **origin** $O = (0,0,0)$.

```
        Z
        |
        |
        |
        O--------> Y
       /
      /
     X
```

### 2.2 Coordinate Planes

| Plane | Equation | Axes |
|-------|----------|------|
| XY-plane | $z = 0$ | X and Y |
| YZ-plane | $x = 0$ | Y and Z |
| XZ-plane | $y = 0$ | X and Z |

### 2.3 Projections

The projection of point $P(x,y,z)$:
- On XY-plane: $(x, y, 0)$
- On YZ-plane: $(0, y, z)$
- On XZ-plane: $(x, 0, z)$
- On X-axis: $(x, 0, 0)$

---

## 3. Distance Formula in 3D

### 3.1 Distance Between Two Points

For $P_1(x_1, y_1, z_1)$ and $P_2(x_2, y_2, z_2)$:

$$\boxed{d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}}$$

**Derivation:** Apply Pythagoras in stages:

1. Distance in XY plane: $d_{xy} = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$
2. Full distance: $d = \sqrt{d_{xy}^2 + (z_2-z_1)^2}$

$$= \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2} \quad \checkmark$$

### 3.2 Distance from Origin

$$OP = \sqrt{x^2 + y^2 + z^2}$$

**Example 3.1:** Find the distance between $A(1, 2, -2)$ and $B(3, 4, 1)$.

$$d = \sqrt{(3-1)^2+(4-2)^2+(1+2)^2} = \sqrt{4+4+9} = \sqrt{17}$$

---

## 4. Section Formula in 3D

### 4.1 Internal Division

Point $P(x, y, z)$ dividing $AB$ (where $A(x_1,y_1,z_1)$ and $B(x_2,y_2,z_2)$) in ratio $m:n$ internally:

$$\boxed{x = \frac{mx_2+nx_1}{m+n},\quad y = \frac{my_2+ny_1}{m+n},\quad z = \frac{mz_2+nz_1}{m+n}}$$

### 4.2 Midpoint

$$M = \left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2},\ \frac{z_1+z_2}{2}\right)$$

### 4.3 Centroid of a Tetrahedron

For tetrahedron with vertices $A(x_1,y_1,z_1)$, $B(x_2,y_2,z_2)$, $C(x_3,y_3,z_3)$, $D(x_4,y_4,z_4)$:

$$G = \left(\frac{x_1+x_2+x_3+x_4}{4},\ \frac{y_1+y_2+y_3+y_4}{4},\ \frac{z_1+z_2+z_3+z_4}{4}\right)$$

---

## 5. Octants

The three coordinate planes divide space into **8 octants**:

| Octant | $x$ | $y$ | $z$ |
|--------|-----|-----|-----|
| I | + | + | + |
| II | − | + | + |
| III | − | − | + |
| IV | + | − | + |
| V | + | + | − |
| VI | − | + | − |
| VII | − | − | − |
| VIII | + | − | − |

The **first octant** (all positive) is most commonly referenced.

---

## 6. Vectors in 3D

### 6.1 Position Vector

The position vector of $P(x,y,z)$ from origin:

$$\vec{OP} = x\hat{i} + y\hat{j} + z\hat{k}$$

where $\hat{i}, \hat{j}, \hat{k}$ are unit vectors along X, Y, Z axes.

### 6.2 Magnitude

$$|\vec{r}| = \sqrt{x^2+y^2+z^2}$$

### 6.3 Dot Product

$$\vec{a}\cdot\vec{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\vec{a}||\vec{b}|\cos\theta$$

### 6.4 Cross Product

$$\vec{a}\times\vec{b} = \begin{vmatrix}\hat{i} & \hat{j} & \hat{k}\\ a_1 & a_2 & a_3\\ b_1 & b_2 & b_3\end{vmatrix}$$

$$= (a_2b_3-a_3b_2)\hat{i} - (a_1b_3-a_3b_1)\hat{j} + (a_1b_2-a_2b_1)\hat{k}$$

### 6.5 Scalar Triple Product

$$[\vec{a}, \vec{b}, \vec{c}] = \vec{a}\cdot(\vec{b}\times\vec{c}) = \begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}$$

Geometrically = **volume of parallelepiped** formed by $\vec{a}$, $\vec{b}$, $\vec{c}$.

---

## 7. Equation of a Sphere

### 7.1 Standard Form

Center $(a, b, c)$, radius $r$:

$$\boxed{(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2}$$

### 7.2 General Form

$$x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$$

- **Center:** $(-u, -v, -w)$
- **Radius:** $r = \sqrt{u^2+v^2+w^2-d}$

### 7.3 Sphere Through Four Points

A sphere is uniquely determined by **four non-coplanar points**.

**Example 7.1:** Find the sphere with center $(1, 2, 3)$ and radius $5$.

$$(x-1)^2+(y-2)^2+(z-3)^2=25$$

$$x^2+y^2+z^2-2x-4y-6z+14-25=0$$

$$\boxed{x^2+y^2+z^2-2x-4y-6z-11=0}$$

---

## 8. Solved Examples

### Example 8.1 — Distance and Midpoint

Find the midpoint of $A(2, 4, -6)$ and $B(8, -2, 4)$, then find $AB$.

**Midpoint:** $M = \left(\frac{10}{2}, \frac{2}{2}, \frac{-2}{2}\right) = (5, 1, -1)$

**Distance:** $AB = \sqrt{36+36+100} = \sqrt{172} = 2\sqrt{43}$

---

### Example 8.2 — Collinearity in 3D

Are $A(1, 2, 3)$, $B(2, 4, 7)$, $C(4, 8, 15)$ collinear?

$\overrightarrow{AB} = (1,2,4)$, $\overrightarrow{AC} = (3,6,12) = 3(1,2,4) = 3\overrightarrow{AB}$

Since $\overrightarrow{AC}$ is a scalar multiple of $\overrightarrow{AB}$, the points are **collinear**. ✓

---

### Example 8.3 — Section Formula

$P$ divides $A(1,-2,3)$ and $B(4,1,6)$ in ratio $2:1$ internally. Find $P$.

$$P = \left(\frac{2(4)+1(1)}{3}, \frac{2(1)+1(-2)}{3}, \frac{2(6)+1(3)}{3}\right) = \left(3, 0, 5\right)$$

---

### Example 8.4 — Sphere

Find the center and radius of $x^2+y^2+z^2-4x+6y-8z+4=0$.

$u=-2, v=3, w=-4, d=4$

Center: $(2, -3, 4)$

Radius: $r = \sqrt{4+9+16-4} = \sqrt{25} = 5$

---

## 9. References

1. **Anton, H., Bivens, I., Davis, S.** — *Calculus*, 10th ed., Wiley
2. **Thomas, G. B.** — *Thomas' Calculus*, 14th ed., Pearson
3. **Arfken, G. B.** — *Mathematical Methods for Physicists*, Academic Press
4. [Khan Academy — 3D Geometry](https://www.khanacademy.org/math/multivariable-calculus)
5. [Paul's Online Notes — 3D Space](https://tutorial.math.lamar.edu/classes/calcii/3dintro.aspx)
6. [MathWorld — Three-Dimensional Geometry](https://mathworld.wolfram.com/topics/Three-DimensionalGeometry.html)
7. [MIT OCW — 18.02 Multivariable Calculus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/)

---

*[← Prev: Identification of Conics](./05_Identification_of_Conics.md) | [Next: Direction Cosines and Ratios →](./07_Direction_Cosines_and_Ratios.md)*
