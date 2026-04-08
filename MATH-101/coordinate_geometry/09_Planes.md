# 📌 Topic 9: Planes

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Introduction to Planes](#1-introduction-to-planes)
2. [General Equation of a Plane](#2-general-equation-of-a-plane)
3. [Different Forms of Plane Equations](#3-different-forms-of-plane-equations)
4. [Angle Between Two Planes](#4-angle-between-two-planes)
5. [Distance of a Point from a Plane](#5-distance-of-a-point-from-a-plane)
6. [Family of Planes](#6-family-of-planes)
7. [Intersection of Two Planes](#7-intersection-of-two-planes)
8. [Angle Between a Line and a Plane](#8-angle-between-a-line-and-a-plane)
9. [Solved Examples](#9-solved-examples)
10. [References](#10-references)

---

## 1. Introduction to Planes

A **plane** in 3D space is a flat, two-dimensional surface that extends infinitely. It requires **three non-collinear points** (or equivalent data) to uniquely specify it.

### 1.1 Normal Vector

Every plane has a **normal vector** $\vec{n}$ perpendicular to it. The direction of $\vec{n}$ determines the orientation of the plane.

```
           ↑ n̂ (normal)
           |
    -------+-------
   /       |       /
  /        |      /
 /         |     /
/-----------+---/
        Plane
```

---

## 2. General Equation of a Plane

### 2.1 Standard Form

The most general equation of a **plane** in 3D is:

$$\boxed{ax + by + cz + d = 0}$$

where $a, b, c$ are not all zero. The vector $(a, b, c)$ is **normal** to the plane.

### 2.2 Vector Form

A plane through point $A(\vec{a})$ with normal $\vec{n}$:

$$\vec{n}\cdot(\vec{r}-\vec{a}) = 0 \implies \vec{n}\cdot\vec{r} = \vec{n}\cdot\vec{a}$$

---

## 3. Different Forms of Plane Equations

### 3.1 Normal Form

If the perpendicular from origin to the plane has **length** $p$ and **direction cosines** $(l, m, n)$:

$$\boxed{lx + my + nz = p}$$

**Note:** $l^2+m^2+n^2=1$, so this is the normalized form.

To convert $ax+by+cz+d=0$ to normal form:

$$\frac{ax+by+cz+d}{\pm\sqrt{a^2+b^2+c^2}} = 0$$

$$\frac{ax+by+cz}{\pm\sqrt{a^2+b^2+c^2}} = \frac{-d}{\pm\sqrt{a^2+b^2+c^2}}$$

So $p = \frac{|d|}{\sqrt{a^2+b^2+c^2}}$ (distance from origin).

### 3.2 Point-Normal Form

Plane through $P(x_1, y_1, z_1)$ with normal $(a, b, c)$:

$$\boxed{a(x-x_1) + b(y-y_1) + c(z-z_1) = 0}$$

### 3.3 Three-Point Form

Plane through three non-collinear points $A(x_1,y_1,z_1)$, $B(x_2,y_2,z_2)$, $C(x_3,y_3,z_3)$:

$$\begin{vmatrix}x-x_1&y-y_1&z-z_1\\x_2-x_1&y_2-y_1&z_2-z_1\\x_3-x_1&y_3-y_1&z_3-z_1\end{vmatrix} = 0$$

**Derivation:** The plane contains $\overrightarrow{AB}$ and $\overrightarrow{AC}$. Normal = $\overrightarrow{AB}\times\overrightarrow{AC}$. Use point-normal form.

### 3.4 Intercept Form

Plane making intercepts $a$, $b$, $c$ on the X, Y, Z axes:

$$\boxed{\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1}$$

### 3.5 Intercepts and Axes

| Intercepts | Plane |
|------------|-------|
| $x=a$, passes parallel to YZ | $x = a$ |
| $y=b$, passes parallel to XZ | $y = b$ |
| $z=c$, passes parallel to XY | $z = c$ |

### 3.6 Summary Table

| Information Given | Form to Use |
|------------------|-------------|
| Normal + one point | Point-normal form |
| Three points | Determinant form |
| Intercepts on axes | Intercept form |
| Distance from origin | Normal form |

---

## 4. Angle Between Two Planes

### 4.1 Definition

The angle between two planes = angle between their **normals** (or supplement).

### 4.2 Formula

For planes $a_1x+b_1y+c_1z+d_1=0$ and $a_2x+b_2y+c_2z+d_2=0$:

$$\boxed{\cos\theta = \frac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\cdot\sqrt{a_2^2+b_2^2+c_2^2}}}$$

### 4.3 Special Cases

| Condition | Planes |
|-----------|--------|
| $a_1a_2+b_1b_2+c_1c_2=0$ | **Perpendicular** ($\theta=90°$) |
| $\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}$ | **Parallel** ($\theta=0°$) |

### 4.4 Dihedral Angle

The **dihedral angle** between two planes along their line of intersection is the same as the angle between their normals.

---

## 5. Distance of a Point from a Plane

### 5.1 Formula

Distance from point $P(x_0, y_0, z_0)$ to plane $ax+by+cz+d=0$:

$$\boxed{D = \frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}}$$

**Derivation:** Drop a perpendicular from $P$ to the plane. The foot of perpendicular $Q$ lies on the plane. Using projection:

$$D = \frac{\vec{PQ}\cdot\hat{n}}{|\hat{n}|} = \frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}$$

### 5.2 Distance Between Parallel Planes

For parallel planes $ax+by+cz+d_1=0$ and $ax+by+cz+d_2=0$:

$$D = \frac{|d_1-d_2|}{\sqrt{a^2+b^2+c^2}}$$

---

## 6. Family of Planes

### 6.1 Planes Through a Line

Any plane through the intersection of planes $P_1: a_1x+b_1y+c_1z+d_1=0$ and $P_2: a_2x+b_2y+c_2z+d_2=0$:

$$P_1 + kP_2 = 0$$

$$\boxed{(a_1x+b_1y+c_1z+d_1) + k(a_2x+b_2y+c_2z+d_2) = 0}$$

for different values of $k$, this generates the **family of planes** through the line $L = P_1 \cap P_2$.

### 6.2 Bisector Planes

The planes bisecting the dihedral angles between $P_1=0$ and $P_2=0$:

$$\frac{a_1x+b_1y+c_1z+d_1}{\sqrt{a_1^2+b_1^2+c_1^2}} = \pm\frac{a_2x+b_2y+c_2z+d_2}{\sqrt{a_2^2+b_2^2+c_2^2}}$$

---

## 7. Intersection of Two Planes

### 7.1 Line of Intersection

Two non-parallel planes always intersect in a **line**. To find it:

1. Solve the system of two plane equations simultaneously
2. Express as parametric equations

**Example:** Find the line of intersection of $x+y+z=6$ and $2x+y-z=3$.

From first: $z=6-x-y$. Sub into second: $2x+y-(6-x-y)=3 \Rightarrow 3x+2y=9$.

Let $x=t$: $y=\frac{9-3t}{2}$, $z=6-t-\frac{9-3t}{2}=\frac{3+t}{2}$

DRs: $\left(1, -\frac{3}{2}, \frac{1}{2}\right)$ or $(2, -3, 1)$.

A point on both: Set $t=1$: $(1, 3, 2)$.

Line: $\frac{x-1}{2}=\frac{y-3}{-3}=\frac{z-2}{1}$

---

## 8. Angle Between a Line and a Plane

### 8.1 Formula

If line has DRs $(a,b,c)$ and plane has normal $(l,m,n)$, the angle $\phi$ between the **line** and **plane**:

$$\sin\phi = \frac{|al+bm+cn|}{\sqrt{a^2+b^2+c^2}\cdot\sqrt{l^2+m^2+n^2}}$$

Note: the complement of the angle with the normal.

### 8.2 Perpendicular Line and Plane

Line $\perp$ plane: $\frac{a}{l}=\frac{b}{m}=\frac{c}{n}$ (DRs proportional to normal)

### 8.3 Parallel Line and Plane

Line $\parallel$ plane: $al+bm+cn=0$ (DRs perpendicular to normal)

---

## 9. Solved Examples

### Example 9.1 — Equation of Plane

Find the equation of the plane through $(1,2,3)$ with normal $(2,-2,1)$.

$$2(x-1)+(-2)(y-2)+1(z-3)=0$$
$$2x-2-2y+4+z-3=0$$
$$\boxed{2x-2y+z-1=0}$$

---

### Example 9.2 — Three-Point Plane

Find the equation of the plane through $(1,0,-1)$, $(2,1,3)$, and $(4,2,1)$.

$\overrightarrow{AB} = (1,1,4)$, $\overrightarrow{AC} = (3,2,2)$

Normal $= \overrightarrow{AB}\times\overrightarrow{AC} = \begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\1&1&4\\3&2&2\end{vmatrix}$

$= (2-8)\hat{i}-(2-12)\hat{j}+(2-3)\hat{k} = (-6,10,-1)$

Using point $A(1,0,-1)$:

$-6(x-1)+10(y-0)-1(z+1)=0$
$-6x+6+10y-z-1=0$

$$\boxed{6x-10y+z-5=0}$$

---

### Example 9.3 — Intercept Form

Find the plane with intercepts $a=2$, $b=3$, $c=6$ on the axes.

$$\frac{x}{2}+\frac{y}{3}+\frac{z}{6}=1 \implies 3x+2y+z=6$$

---

### Example 9.4 — Angle Between Planes

Find the angle between $2x-y+z=6$ and $4x+y+2z=7$.

$$\cos\theta = \frac{|2(4)+(-1)(1)+1(2)|}{\sqrt{4+1+1}\cdot\sqrt{16+1+4}} = \frac{|8-1+2|}{\sqrt{6}\cdot\sqrt{21}} = \frac{9}{\sqrt{126}} = \frac{9}{3\sqrt{14}} = \frac{3}{\sqrt{14}}$$

$$\theta = \cos^{-1}\left(\frac{3}{\sqrt{14}}\right) \approx 36.7°$$

---

### Example 9.5 — Distance from Point to Plane

Find the distance from $(3, -5, 2)$ to the plane $2x-3y+6z=21$.

$$D = \frac{|2(3)-3(-5)+6(2)-21|}{\sqrt{4+9+36}} = \frac{|6+15+12-21|}{7} = \frac{12}{7}$$

---

### Example 9.6 — Family of Planes (From Class Notes)

Find the equation of the plane through the line of intersection of $x-2y+3z+4=0$ and $2x-3y+4z-7=0$, passing through $(1,-1,1)$.

Any plane through the intersection: $(x-2y+3z+4)+k(2x-3y+4z-7)=0$

Since it passes through $(1,-1,1)$:

$(1+2+3+4)+k(2+3+4-7)=0$

$10+2k=0 \implies k=-5$

Plane: $(x-2y+3z+4)-5(2x-3y+4z-7)=0$

$x-2y+3z+4-10x+15y-20z+35=0$

$$\boxed{-9x+13y-17z+39=0}$$

or $9x-13y+17z-39=0$.

---

### Example 9.7 — Parallel Plane

Find the equation of the plane through $(1,2,2)$ parallel to $3x+2y+z=7$.

The parallel plane has the same normal $(3,2,1)$:

$3(x-1)+2(y-2)+1(z-2)=0$

$3x-3+2y-4+z-2=0$

$$\boxed{3x+2y+z=9}$$

---

## 10. References

1. **Thomas, G. B.** — *Thomas' Calculus*, Planes and Lines in Space
2. **Apostol, T. M.** — *Calculus*, Vol. 2, Vector Geometry
3. **Spiegel, M. R.** — *Vector Analysis*, Schaum's Outlines
4. [Paul's Online Notes — Equations of Planes](https://tutorial.math.lamar.edu/classes/calciii/eqnsofplanes.aspx)
5. [MathWorld — Plane](https://mathworld.wolfram.com/Plane.html)
6. [LibreTexts — Equations of Lines and Planes](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/12%3A_Vectors_in_Space/12.05%3A_Equations_of_Lines_and_Planes_in_Space)
7. [Khan Academy — Planes in 3D](https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/ways-to-represent-multivariable-functions/a/contour-maps)

---

*[← Prev: Straight Lines](./08_Straight_Lines_3D.md) | [Next: Conicoids →](./10_Conicoids.md)*
