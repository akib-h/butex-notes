# 📌 Topic 10: Conicoids (Paraboloid, Ellipsoid, Hyperboloid)

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Introduction to Conicoids](#1-introduction-to-conicoids)
2. [General Second-Degree Equation in 3D](#2-general-second-degree-equation-in-3d)
3. [Ellipsoid](#3-ellipsoid)
4. [Paraboloid](#4-paraboloid)
5. [Hyperboloid](#5-hyperboloid)
6. [Cone and Cylinder](#6-cone-and-cylinder)
7. [Tangent Planes to Conicoids](#7-tangent-planes-to-conicoids)
8. [Classification Summary](#8-classification-summary)
9. [Cross-sections (Plane Sections)](#9-cross-sections-plane-sections)
10. [Solved Examples](#10-solved-examples)
11. [References](#11-references)

---

## 1. Introduction to Conicoids

A **conicoid** (or **quadric surface**) is the locus of a point in 3D space satisfying a **second-degree equation** in $x$, $y$, $z$.

The general form is:

$$ax^2 + by^2 + cz^2 + 2fyz + 2gzx + 2hxy + 2px + 2qy + 2rz + d = 0$$

Just as conic sections are the 2D second-degree curves, **conicoids** are the 3D analogs.

### 1.1 Origin of the Name

The name comes from the fact that **plane sections** of a conicoid are conics — just as plane sections of a cone are conics.

> 📷 Reference (quadric surfaces): https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Quadric_surfaces.png/500px-Quadric_surfaces.png

---

## 2. General Second-Degree Equation in 3D

$$\sum_{i,j} a_{ij}x_ix_j + \sum_i b_ix_i + c = 0$$

The **matrix form** uses a $4\times4$ symmetric matrix:

$$A = \begin{pmatrix} a & h & g & p \\ h & b & f & q \\ g & f & c & r \\ p & q & r & d \end{pmatrix}$$

Classification depends on the **rank** and **signature** of this matrix (eigenvalue analysis).

---

## 3. Ellipsoid

### 3.1 Standard Equation

$$\boxed{\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1}$$

where $a$, $b$, $c$ are the **semi-axes** along X, Y, Z axes respectively.

### 3.2 Properties

| Property | Value |
|----------|-------|
| Center | $(0, 0, 0)$ |
| Vertices | $(\pm a, 0, 0)$, $(0, \pm b, 0)$, $(0, 0, \pm c)$ |
| Symmetry | Symmetric about all three coordinate planes |
| Volume | $\frac{4}{3}\pi abc$ |
| Surface area | No closed form (elliptic integral) |

### 3.3 Special Cases

| Case | Shape |
|------|-------|
| $a = b = c$ | **Sphere** $x^2+y^2+z^2=a^2$ |
| $a = b \neq c$ | **Spheroid** (oblate if $c<a$, prolate if $c>a$) |
| $a, b, c$ all different | **Scalene ellipsoid** |

### 3.4 Shape Visualization

The ellipsoid is like a **stretched or squashed sphere**. Every cross-section by a plane is an **ellipse** (or circle).

```
        z
        |
     c  |
        *
       /|\
      / | \
     /  |  \
    *---+---*----> y
   /b   |  /
  /     | /
 *------*
x      a
```

### 3.5 Parametric Form

$$x = a\sin\phi\cos\theta, \quad y = b\sin\phi\sin\theta, \quad z = c\cos\phi$$

where $0 \leq \phi \leq \pi$, $0 \leq \theta < 2\pi$.

---

## 4. Paraboloid

### 4.1 Elliptic Paraboloid

$$\boxed{\frac{x^2}{a^2} + \frac{y^2}{b^2} = \frac{z}{c}}$$

- Opens in the **direction of Z-axis**
- Vertex at origin
- Cross-sections by $z = k$ are **ellipses** (for $k>0$)
- Cross-sections by $x=0$ or $y=0$ are **parabolas**

**Special case** $a=b$: **Circular paraboloid** (paraboloid of revolution): $x^2+y^2=cz$

> This is the shape of a **satellite dish** or **telescope mirror**.

### 4.2 Hyperbolic Paraboloid

$$\boxed{\frac{x^2}{a^2} - \frac{y^2}{b^2} = \frac{z}{c}}$$

- **Saddle-shaped** surface
- Has both a minimum along one direction and maximum along another
- Cross-sections by $z = k$: **hyperbolas** (for $k \neq 0$)
- Cross-sections by $y = 0$ or $x = 0$: **parabolas**

```
    Hyperbolic Paraboloid (Saddle Surface):
    
          z
          |
    *     |     *
     \    |    /
      \   |   /
       \  |  /
    ----\ | /-----> y
         \|/
     ----/|\----
        / | \
       /  |  \
      /   |   \
     /    |    \
    x
```

### 4.3 Key Difference

| Elliptic Paraboloid | Hyperbolic Paraboloid |
|--------------------|----------------------|
| Cup-shaped (bowl) | Saddle-shaped |
| Cross-sections are ellipses | Cross-sections are hyperbolas |
| Minimum point (vertex) | Saddle point |

---

## 5. Hyperboloid

### 5.1 Hyperboloid of One Sheet

$$\boxed{\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1}$$

- Connected surface (one piece)
- Waist circle at $z=0$ with radius $a$ (if $a=b$)
- Cross-sections by $z = k$: **ellipses**
- Cross-sections by $x = 0$ or $y = 0$: **hyperbolas**
- Contains **two families of straight lines** (ruled surface)

> This is the shape of **cooling towers** at power plants!

### 5.2 Hyperboloid of Two Sheets

$$\boxed{\frac{z^2}{c^2} - \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1}$$

- Two separate pieces (two sheets)
- No cross-section with small $|z|$ (the waist is empty)
- Cross-sections by $z = k$ (for $|k| > c$): **ellipses**
- Cross-sections by $x = 0$ or $y = 0$: **hyperbolas**

### 5.3 Comparison

| Feature | One Sheet | Two Sheets |
|---------|-----------|-----------|
| Pieces | 1 | 2 |
| Cross-sections by $z=k$ | Always ellipses | Ellipses only for $|k|>c$ |
| Equation sign pattern | $+\,+\,-\,=+$ | $-\,-\,+\,=+$ |

---

## 6. Cone and Cylinder

### 6.1 Cone (Quadric Cone)

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0$$

- Degenerate conicoid (passes through origin)
- Is the **asymptotic cone** of the hyperboloids

### 6.2 Elliptic Cylinder

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

- Extends infinitely in Z-direction
- Cross-section with XY plane: ellipse

### 6.3 Parabolic Cylinder

$$y^2 = 4ax$$

- Extends infinitely in Z-direction
- Cross-section with XY plane: parabola

### 6.4 Hyperbolic Cylinder

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

- Extends infinitely in Z-direction
- Two separate sheets

---

## 7. Tangent Planes to Conicoids

### 7.1 Tangent Plane to Ellipsoid

At point $(x_0, y_0, z_0)$ on $\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$:

$$\boxed{\frac{xx_0}{a^2} + \frac{yy_0}{b^2} + \frac{zz_0}{c^2} = 1}$$

### 7.2 General Tangent Plane

For conicoid $S = ax^2+by^2+cz^2+2fyz+2gzx+2hxy+2px+2qy+2rz+d=0$, the tangent at $(x_0,y_0,z_0)$:

$$T \equiv ax\cdot x_0 + by\cdot y_0 + cz\cdot z_0 + f(yz_0+zy_0) + g(zx_0+xz_0) + h(xy_0+yx_0)$$
$$+ p(x+x_0) + q(y+y_0) + r(z+z_0) + d = 0$$

This is the "T = 0" formula (analogous to 2D conics).

### 7.3 Normal to a Surface

The **normal** to $F(x,y,z)=0$ at $(x_0,y_0,z_0)$ is:

$$\frac{x-x_0}{F_x} = \frac{y-y_0}{F_y} = \frac{z-z_0}{F_z}$$

where $F_x, F_y, F_z$ are partial derivatives evaluated at the point.

---

## 8. Classification Summary

| Surface | Equation | Description |
|---------|----------|-------------|
| **Sphere** | $x^2+y^2+z^2=r^2$ | All semi-axes equal |
| **Ellipsoid** | $\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$ | Three distinct semi-axes |
| **Elliptic Paraboloid** | $\frac{x^2}{a^2}+\frac{y^2}{b^2}=z$ | Bowl-shaped, opens up |
| **Hyperbolic Paraboloid** | $\frac{x^2}{a^2}-\frac{y^2}{b^2}=z$ | Saddle-shaped |
| **Hyperboloid (1 sheet)** | $\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1$ | Waist surface |
| **Hyperboloid (2 sheets)** | $-\frac{x^2}{a^2}-\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$ | Two separate pieces |
| **Elliptic Cone** | $\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=0$ | Degenerate (through origin) |
| **Elliptic Cylinder** | $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ | Infinite cylinder |
| **Parabolic Cylinder** | $y^2=4ax$ | Infinite parabolic sheet |

---

## 9. Cross-sections (Plane Sections)

### 9.1 Method

To find the cross-section of a conicoid with a given plane, **substitute the plane equation** into the conicoid equation.

**Example:** Cross-section of ellipsoid $\frac{x^2}{9}+\frac{y^2}{4}+\frac{z^2}{1}=1$ with $z=0$:

$$\frac{x^2}{9}+\frac{y^2}{4}=1$$

An **ellipse** with semi-axes 3 and 2 in the XY plane.

### 9.2 Center of a Plane Section

The center of the ellipse formed by intersecting a central conicoid with a plane $lx+my+nz=p$ lies on the **diameter** conjugate to the direction $(l,m,n)$.

### 9.3 Summary of Cross-sections

| Conicoid | Cutting Plane | Section |
|----------|---------------|---------|
| Ellipsoid | Any plane | Ellipse or circle |
| Elliptic paraboloid | $z=k>0$ | Ellipse |
| Elliptic paraboloid | $y=0$ | Parabola |
| Hyperbolic paraboloid | $z=k$ | Hyperbola |
| Hyperboloid (1 sheet) | $z=k$ | Ellipse |
| Hyperboloid (2 sheets) | $z=k, |k|>c$ | Ellipse |

---

## 10. Solved Examples

### Example 10.1 — Identify the Conicoid

Identify the surface $\frac{x^2}{4} + \frac{y^2}{9} + \frac{z^2}{16} = 1$.

This is an **ellipsoid** with semi-axes $a=2$, $b=3$, $c=4$.

Cross-sections: all ellipses (or circles if we cut diagonally just right).

---

### Example 10.2 — Paraboloid Section

Find the cross-section of the paraboloid $z = x^2 + y^2$ with $z = 4$.

$$4 = x^2 + y^2$$

A **circle** of radius 2 in the plane $z=4$. ✓

---

### Example 10.3 — Tangent Plane to Ellipsoid

Find the tangent plane to $\frac{x^2}{4}+\frac{y^2}{9}+\frac{z^2}{1}=1$ at point $(1, 0, \frac{\sqrt{3}}{2} \cdot ... )$

Let's use point $(2, 0, 0)$ (which lies on the ellipsoid since $4/4=1$).

Tangent: $\frac{2x}{4}+\frac{0\cdot y}{9}+\frac{0\cdot z}{1}=1 \implies \frac{x}{2}=1 \implies x=2$ ✓

---

### Example 10.4 — Hyperboloid Type

Identify: $x^2 + y^2 - z^2 = 1$

$+x^2+y^2-z^2=1$: This is a **hyperboloid of one sheet** (two positive, one negative, $=+1$).

It is a surface of revolution about the Z-axis.

At $z=0$: $x^2+y^2=1$ (circle of radius 1 — the waist).

---

### Example 10.5 — Saddle Surface

Is $z = x^2 - y^2$ an elliptic or hyperbolic paraboloid?

Rewriting: $x^2 - y^2 = z \implies \frac{x^2}{1} - \frac{y^2}{1} = z$

**Hyperbolic paraboloid** (saddle surface). At $z=0$: $x^2-y^2=0 \implies y=\pm x$ (two intersecting lines through origin).

---

### Example 10.6 — Volume of Ellipsoid

Find the volume of the ellipsoid $\frac{x^2}{9}+\frac{y^2}{4}+\frac{z^2}{1}=1$.

$a=3, b=2, c=1$

$$V = \frac{4}{3}\pi abc = \frac{4}{3}\pi(3)(2)(1) = 8\pi \approx 25.13 \text{ cubic units}$$

---

## 11. References

1. **Thomas, G. B.** — *Thomas' Calculus*, Chapter on Quadric Surfaces
2. **Stewart, J.** — *Multivariable Calculus*, Section 12.6: Quadric Surfaces
3. **Apostol, T. M.** — *Calculus*, Vol. 2
4. **Erwin Kreyszig** — *Advanced Engineering Mathematics*, Spatial Surfaces
5. [Paul's Online Notes — Quadric Surfaces](https://tutorial.math.lamar.edu/classes/calciii/quadricsurfaces.aspx)
6. [MathWorld — Quadric Surface](https://mathworld.wolfram.com/QuadricSurface.html)
7. [LibreTexts — Quadric Surfaces](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/12%3A_Vectors_in_Space/12.06%3A_Quadric_Surfaces)
8. [Khan Academy — Quadric Surfaces Video](https://www.khanacademy.org/math/multivariable-calculus)
9. [GeoGebra — 3D Quadric Surface Visualization](https://www.geogebra.org/3d)

---

*[← Prev: Planes](./09_Planes.md) | [Back to Index →](./README.md)*
