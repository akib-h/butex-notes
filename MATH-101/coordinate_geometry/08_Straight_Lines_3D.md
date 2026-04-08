# 📌 Topic 8: Straight Lines in 3D

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Equations of a Line in 3D](#1-equations-of-a-line-in-3d)
2. [Symmetric Form](#2-symmetric-form)
3. [Vector Form](#3-vector-form)
4. [Line Through Two Points](#4-line-through-two-points)
5. [Angle Between Two Lines](#5-angle-between-two-lines)
6. [Distance of a Point from a Line](#6-distance-of-a-point-from-a-line)
7. [Shortest Distance Between Skew Lines](#7-shortest-distance-between-skew-lines)
8. [Coplanar Lines](#8-coplanar-lines)
9. [Line Intersecting a Plane](#9-line-intersecting-a-plane)
10. [Solved Examples](#10-solved-examples)
11. [References](#11-references)

---

## 1. Equations of a Line in 3D

A line in 3D space requires **two conditions** to specify it (unlike 2D where one equation suffices). It can be specified by:

1. A **point** on the line + a **direction vector**
2. **Two points** on the line
3. **Intersection of two planes** (unsymmetric form)

---

## 2. Symmetric Form

### 2.1 Line Through Point with Given Direction

A line through point $P(x_1, y_1, z_1)$ with direction ratios $a, b, c$:

$$\boxed{\frac{x - x_1}{a} = \frac{y - y_1}{b} = \frac{z - z_1}{c} = \lambda}$$

Each ratio equals a parameter $\lambda$, giving:

$$x = x_1 + a\lambda,\quad y = y_1 + b\lambda,\quad z = z_1 + c\lambda$$

This is the **parametric form**.

### 2.2 Special Cases

| Direction | Equation |
|-----------|----------|
| Along X-axis | $y = y_1, z = z_1$ |
| Along Y-axis | $x = x_1, z = z_1$ |
| Along Z-axis | $x = x_1, y = y_1$ |
| Parallel to XY-plane | $z = z_1$ (with usual ratios for $x,y$) |

### 2.3 Cartesian Form of Parametric Equations

$$x = x_1 + a\lambda,\qquad y = y_1 + b\lambda,\qquad z = z_1 + c\lambda$$

Here $\lambda$ is the parameter (proportional to distance traveled along the line).

---

## 3. Vector Form

### 3.1 Equation

A line through point $A$ with position vector $\vec{a}$, in direction $\vec{d}$:

$$\boxed{\vec{r} = \vec{a} + \lambda\vec{d}}$$

where $\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$ is the position vector of any point on the line.

**Example:** Line through $(1,-2,3)$ with DRs $(2,3,-1)$:

$$\vec{r} = (\hat{i}-2\hat{j}+3\hat{k}) + \lambda(2\hat{i}+3\hat{j}-\hat{k})$$

### 3.2 Cartesian from Vector

Expanding: $x = 1+2\lambda$, $y = -2+3\lambda$, $z = 3-\lambda$

$$\frac{x-1}{2} = \frac{y+2}{3} = \frac{z-3}{-1}$$

---

## 4. Line Through Two Points

### 4.1 Equation

Through $P(x_1,y_1,z_1)$ and $Q(x_2,y_2,z_2)$:

$$\boxed{\frac{x-x_1}{x_2-x_1} = \frac{y-y_1}{y_2-y_1} = \frac{z-z_1}{z_2-z_1}}$$

**Vector form:** $\vec{r} = \vec{a} + \lambda(\vec{b}-\vec{a}) = (1-\lambda)\vec{a} + \lambda\vec{b}$

---

## 5. Angle Between Two Lines

### 5.1 Formula

For lines with DRs $(a_1,b_1,c_1)$ and $(a_2,b_2,c_2)$:

$$\cos\theta = \frac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\cdot\sqrt{a_2^2+b_2^2+c_2^2}}$$

### 5.2 Perpendicularity Condition

$$a_1a_2 + b_1b_2 + c_1c_2 = 0$$

### 5.3 Parallelism Condition

$$\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$$

**Example:** Angle between $\frac{x-1}{2}=\frac{y-3}{1}=\frac{z+4}{-2}$ and $\frac{x+2}{4}=\frac{y-5}{3}=\frac{z+1}{2}$:

DRs: $(2,1,-2)$ and $(4,3,2)$

$$\cos\theta = \frac{|8+3-4|}{\sqrt{9}\cdot\sqrt{29}} = \frac{7}{3\sqrt{29}}$$

---

## 6. Distance of a Point from a Line

### 6.1 Formula

Distance from point $A(\vec{a})$ to line $\vec{r} = \vec{b} + \lambda\vec{d}$:

$$d = \frac{|(\vec{a}-\vec{b})\times\vec{d}|}{|\vec{d}|}$$

### 6.2 Cartesian Formula

For point $A(x_0,y_0,z_0)$ and line $\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}$:

Let $\vec{AP} = (x_0-x_1, y_0-y_1, z_0-z_1)$ and $\vec{d} = (a,b,c)$.

$$\text{Distance} = \frac{|\vec{AP}\times\vec{d}|}{|\vec{d}|}$$

**Example:** Distance from $A(1,-2,3)$ to line $\frac{x-2}{1}=\frac{y+1}{2}=\frac{z-3}{2}$:

$P = (2,-1,3)$, $\vec{AP} = (1,1,0)$, $\vec{d} = (1,2,2)$

$\vec{AP}\times\vec{d} = \begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\1&1&0\\1&2&2\end{vmatrix} = (2-0)\hat{i}-(2-0)\hat{j}+(2-1)\hat{k} = (2,-2,1)$

Distance $= \frac{\sqrt{4+4+1}}{\sqrt{1+4+4}} = \frac{3}{3} = 1$ unit

---

## 7. Shortest Distance Between Skew Lines

### 7.1 Skew Lines

Two lines are **skew** if they are neither parallel nor intersecting. They lie in different planes.

```
         L₁ ----------->
              
              ↕  SD (Shortest Distance)

    L₂ ----------->
```

### 7.2 Formula Using Cross Product

For lines:
- $L_1$: $\vec{r} = \vec{a_1} + \lambda\vec{d_1}$
- $L_2$: $\vec{r} = \vec{a_2} + \mu\vec{d_2}$

Shortest distance (SD):

$$\boxed{SD = \frac{|(\vec{a_2}-\vec{a_1})\cdot(\vec{d_1}\times\vec{d_2})|}{|\vec{d_1}\times\vec{d_2}|}}$$

### 7.3 Cartesian Form

For lines $\frac{x-x_1}{a_1}=\frac{y-y_1}{b_1}=\frac{z-z_1}{c_1}$ and $\frac{x-x_2}{a_2}=\frac{y-y_2}{b_2}=\frac{z-z_2}{c_2}$:

$$SD = \frac{\begin{vmatrix}x_2-x_1 & y_2-y_1 & z_2-z_1\\a_1&b_1&c_1\\a_2&b_2&c_2\end{vmatrix}}{\sqrt{(b_1c_2-b_2c_1)^2+(c_1a_2-c_2a_1)^2+(a_1b_2-a_2b_1)^2}}$$

### 7.4 Condition for Coplanar Lines (SD = 0)

$$\begin{vmatrix}x_2-x_1 & y_2-y_1 & z_2-z_1\\a_1&b_1&c_1\\a_2&b_2&c_2\end{vmatrix} = 0$$

---

## 8. Coplanar Lines

### 8.1 Definition

Two lines are **coplanar** if they lie in the same plane.

### 8.2 Condition

Lines $\frac{x-x_1}{a_1}=\frac{y-y_1}{b_1}=\frac{z-z_1}{c_1}$ and $\frac{x-x_2}{a_2}=\frac{y-y_2}{b_2}=\frac{z-z_2}{c_2}$ are coplanar iff:

$$\begin{vmatrix}x_2-x_1 & y_2-y_1 & z_2-z_1\\a_1&b_1&c_1\\a_2&b_2&c_2\end{vmatrix} = 0$$

---

## 9. Line Intersecting a Plane

### 9.1 Point of Intersection

For line $\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c} = \lambda$ and plane $px+qy+rz = d$:

Substitute parametric form:

$$p(x_1+a\lambda)+q(y_1+b\lambda)+r(z_1+c\lambda)=d$$

$$\lambda = \frac{d - px_1-qy_1-rz_1}{pa+qb+rc}$$

Then find $(x,y,z)$ from parametric equations.

### 9.2 Angle Between Line and Plane

$$\sin\phi = \frac{|al+bm+cn|}{\sqrt{a^2+b^2+c^2}\cdot\sqrt{l^2+m^2+n^2}}$$

where $(a,b,c)$ are DRs of line and $(l,m,n)$ are DRs of normal to plane.

**Condition for perpendicularity** (line ⊥ plane):

$$\frac{a}{l} = \frac{b}{m} = \frac{c}{n}$$

**Condition for parallel** (line ∥ plane):

$$al + bm + cn = 0$$

---

## 10. Solved Examples

### Example 10.1 — Symmetric Form

Write the line through $(2,-1,3)$ with DRs $(3,4,-2)$ in symmetric form.

$$\frac{x-2}{3} = \frac{y+1}{4} = \frac{z-3}{-2}$$

---

### Example 10.2 — Angle Between Lines

Find the angle between:
$L_1: \frac{x}{2}=\frac{y}{3}=\frac{z}{6}$ and $L_2: \frac{x}{1}=\frac{y}{2}=\frac{z}{-2}$

DRs: $(2,3,6)$ and $(1,2,-2)$

$\cos\theta = \frac{|2+6-12|}{\sqrt{49}\cdot\sqrt{9}} = \frac{4}{21}$

$\theta = \cos^{-1}(4/21) \approx 79°$

---

### Example 10.3 — Shortest Distance

Find the SD between:
$L_1: \frac{x-3}{3}=\frac{y-8}{-1}=\frac{z-3}{1}$ and $L_2: \frac{x+3}{-3}=\frac{y+7}{2}=\frac{z-6}{4}$

$(x_2-x_1, y_2-y_1, z_2-z_1) = (-6, -15, 3)$

$\vec{d_1}\times\vec{d_2} = \begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\3&-1&1\\-3&2&4\end{vmatrix} = (-4-2)\hat{i}-\!(12+3)\hat{j}+(6-3)\hat{k} = (-6,-15,3)$

$|(-6,-15,3)| = \sqrt{36+225+9} = \sqrt{270} = 3\sqrt{30}$

$(\vec{a_2}-\vec{a_1})\cdot(\vec{d_1}\times\vec{d_2}) = (-6)(-6)+(-15)(-15)+(3)(3) = 36+225+9 = 270$

$SD = \frac{270}{3\sqrt{30}} = \frac{90}{\sqrt{30}} = 3\sqrt{30}$ units

---

### Example 10.4 — Verify Parallelism

Show that lines joining $(2,3,-2)$ to $(3,1,1)$ and joining $(2,1,-5)$ to $(4,-3,1)$ are parallel.

DRs of first: $(1,-2,3)$
DRs of second: $(2,-4,6) = 2(1,-2,3)$

Since proportional, the lines are **parallel**. ✓

---

### Example 10.5 — Point of Intersection

Find where $\frac{x-1}{2}=\frac{y-2}{3}=\frac{z-3}{4}=\lambda$ meets the plane $x+2y+3z=14$.

$x=1+2\lambda, y=2+3\lambda, z=3+4\lambda$

$(1+2\lambda)+2(2+3\lambda)+3(3+4\lambda)=14$

$1+2\lambda+4+6\lambda+9+12\lambda=14$

$20\lambda+14=14 \implies \lambda=0$

Point: $(1, 2, 3)$

---

## 11. References

1. **Anton, Bivens, Davis** — *Calculus: Early Transcendentals*, Wiley
2. **Rees, P. K.** — *Analytic Geometry of Three Dimensions*
3. **Spiegel, M. R.** — *Vector Analysis*, Schaum's Outline
4. [Paul's Online Notes — Lines in 3D](https://tutorial.math.lamar.edu/classes/calciii/eqnsoflines.aspx)
5. [MathWorld — Line in 3D](https://mathworld.wolfram.com/Line.html)
6. [Khan Academy — 3D Vectors](https://www.khanacademy.org/math/multivariable-calculus)
7. [LibreTexts — Equations of Lines and Planes](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/12%3A_Vectors_in_Space/12.05%3A_Equations_of_Lines_and_Planes_in_Space)

---

*[← Prev: Direction Cosines](./07_Direction_Cosines_and_Ratios.md) | [Next: Planes →](./09_Planes.md)*
