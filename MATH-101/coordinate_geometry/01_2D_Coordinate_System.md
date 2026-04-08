# 📌 Topic 1: Two Dimensional Coordinate System

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Introduction](#1-introduction)
2. [The Cartesian Coordinate System](#2-the-cartesian-coordinate-system)
3. [Distance Formula](#3-distance-formula)
4. [Section Formula](#4-section-formula)
5. [Area of a Triangle](#5-area-of-a-triangle)
6. [Locus and Its Equation](#6-locus-and-its-equation)
7. [Slope of a Line](#7-slope-of-a-line)
8. [Equations of a Straight Line](#8-equations-of-a-straight-line)
9. [Angle Between Two Lines](#9-angle-between-two-lines)
10. [Distance of a Point from a Line](#10-distance-of-a-point-from-a-line)
11. [Solved Examples](#11-solved-examples)
12. [References](#12-references)

---

## 1. Introduction

The **two-dimensional coordinate system** (also called the **Cartesian plane** or **rectangular coordinate system**) provides a method to describe the position of every point in a plane using an ordered pair of numbers $(x, y)$.

It was introduced by **René Descartes** (1596–1650) and independently by **Pierre de Fermat**, and it forms the bridge between **algebra** and **geometry** — the foundation of **Analytic Geometry**.

---

## 2. The Cartesian Coordinate System

### 2.1 Axes and Quadrants

The plane is defined by two mutually perpendicular lines called **axes**:

- **X-axis** (horizontal)
- **Y-axis** (vertical)
- Their intersection is the **origin** $O = (0, 0)$

The axes divide the plane into **four quadrants**:

```
        Y
        |
  II    |    I
(-,+)   |  (+,+)
        |
--------O---------  X
        |
  III   |   IV
(-,-)   |  (+,-)
        |
```

| Quadrant | x-sign | y-sign |
|----------|--------|--------|
| I        | +      | +      |
| II       | −      | +      |
| III      | −      | −      |
| IV       | +      | −      |

### 2.2 Coordinate of a Point

Every point $P$ in the plane corresponds to a unique ordered pair $(x, y)$:

- $x$ = **abscissa** (horizontal distance from Y-axis)
- $y$ = **ordinate** (vertical distance from X-axis)

> 📷 Reference Diagram: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cartesian-coordinate-system.svg/500px-Cartesian-coordinate-system.svg.png

---

## 3. Distance Formula

### 3.1 Distance Between Two Points

The distance $d$ between points $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$ is:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Derivation (using Pythagorean Theorem):**

Draw a right triangle with:
- Hypotenuse = $P_1 P_2$
- Horizontal leg = $|x_2 - x_1|$
- Vertical leg = $|y_2 - y_1|$

By Pythagoras:

$$d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$

$$\boxed{d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$

### 3.2 Special Cases

| Case | Formula |
|------|---------|
| Distance from origin to $P(x,y)$ | $d = \sqrt{x^2 + y^2}$ |
| Points on X-axis: $P_1(x_1,0)$, $P_2(x_2,0)$ | $d = \|x_2 - x_1\|$ |
| Points on Y-axis: $P_1(0,y_1)$, $P_2(0,y_2)$ | $d = \|y_2 - y_1\|$ |

**Example 3.1:** Find the distance between $A(3, -4)$ and $B(-2, 7)$.

$$d = \sqrt{(-2-3)^2 + (7-(-4))^2} = \sqrt{25 + 121} = \sqrt{146}$$

---

## 4. Section Formula

### 4.1 Internal Division

If point $P(x, y)$ divides the segment $AB$ (where $A(x_1, y_1)$ and $B(x_2, y_2)$) **internally** in ratio $m:n$, then:

$$\boxed{x = \frac{mx_2 + nx_1}{m+n}, \quad y = \frac{my_2 + ny_1}{m+n}}$$

### 4.2 External Division

If $P$ divides $AB$ **externally** in ratio $m:n$:

$$x = \frac{mx_2 - nx_1}{m-n}, \quad y = \frac{my_2 - ny_1}{m-n}$$

### 4.3 Midpoint Formula

Special case: $m = n = 1$ (midpoint $M$):

$$\boxed{M = \left(\frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2}\right)}$$

### 4.4 Centroid of a Triangle

For triangle with vertices $A(x_1,y_1)$, $B(x_2,y_2)$, $C(x_3,y_3)$:

$$G = \left(\frac{x_1+x_2+x_3}{3},\ \frac{y_1+y_2+y_3}{3}\right)$$

**Example 4.1:** Point $P$ divides $A(1, 2)$ and $B(7, 8)$ in ratio $2:1$ internally. Find $P$.

$$x = \frac{2(7)+1(1)}{2+1} = \frac{15}{3} = 5, \quad y = \frac{2(8)+1(2)}{3} = \frac{18}{3} = 6$$

Therefore $P = (5, 6)$.

---

## 5. Area of a Triangle

### 5.1 Formula

For vertices $A(x_1,y_1)$, $B(x_2,y_2)$, $C(x_3,y_3)$:

$$\text{Area} = \frac{1}{2} \left| x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) \right|$$

Or using the determinant form:

$$\text{Area} = \frac{1}{2} \left| \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} \right|$$

> **Note:** If Area = 0, the three points are **collinear**.

**Example 5.1:** Find the area of the triangle with vertices $A(0,0)$, $B(4,0)$, $C(0,3)$.

$$\text{Area} = \frac{1}{2}|0(0-3) + 4(3-0) + 0(0-0)| = \frac{1}{2}|12| = 6 \text{ sq. units}$$

---

## 6. Locus and Its Equation

### 6.1 Definition

A **locus** is the set of all points satisfying a given geometric condition. The **equation of the locus** is an algebraic relation $f(x, y) = 0$ satisfied by every point on the locus.

### 6.2 Steps to Find Locus

1. Let $P(h, k)$ be any point on the locus
2. Write the geometric condition in terms of $h$ and $k$
3. Simplify to get $f(h, k) = 0$
4. Replace $h \to x$, $k \to y$

**Example 6.1:** Find the locus of a point equidistant from $A(2, 0)$ and $B(-2, 0)$.

Let $P(h, k)$. Then $PA = PB$:

$$\sqrt{(h-2)^2 + k^2} = \sqrt{(h+2)^2 + k^2}$$

Squaring: $(h-2)^2 = (h+2)^2 \Rightarrow -4h = 4h \Rightarrow h = 0$

Locus: $\boxed{x = 0}$ (the Y-axis)

---

## 7. Slope of a Line

### 7.1 Definition

The **slope** (or gradient) of a line making angle $\theta$ with the positive X-axis:

$$m = \tan\theta$$

For two points $P_1(x_1,y_1)$ and $P_2(x_2,y_2)$:

$$m = \frac{y_2 - y_1}{x_2 - x_1}, \quad x_1 \neq x_2$$

### 7.2 Special Slopes

| Line | Slope |
|------|-------|
| Horizontal | $m = 0$ |
| Vertical | $m$ undefined |
| At 45° | $m = 1$ |
| At 135° | $m = -1$ |

### 7.3 Parallel and Perpendicular Lines

- **Parallel lines:** $m_1 = m_2$
- **Perpendicular lines:** $m_1 \cdot m_2 = -1$

---

## 8. Equations of a Straight Line

### 8.1 Different Forms

| Form | Equation | When to Use |
|------|----------|-------------|
| Slope-intercept | $y = mx + c$ | Given slope $m$ and y-intercept $c$ |
| Point-slope | $y - y_1 = m(x - x_1)$ | Given slope and one point |
| Two-point | $\dfrac{y-y_1}{y_2-y_1} = \dfrac{x-x_1}{x_2-x_1}$ | Given two points |
| Intercept | $\dfrac{x}{a} + \dfrac{y}{b} = 1$ | Given x-intercept $a$, y-intercept $b$ |
| Normal (perpendicular) | $x\cos\alpha + y\sin\alpha = p$ | Given perpendicular distance $p$ and angle $\alpha$ |
| General | $ax + by + c = 0$ | General form |

### 8.2 Normal Form Derivation

If a line is at perpendicular distance $p$ from the origin, and the perpendicular makes angle $\alpha$ with X-axis, then the foot of perpendicular is $N(p\cos\alpha, p\sin\alpha)$.

The line through $N$ perpendicular to $ON$ has slope $-\cot\alpha$:

$$y - p\sin\alpha = -\frac{\cos\alpha}{\sin\alpha}(x - p\cos\alpha)$$

Simplifying:

$$\boxed{x\cos\alpha + y\sin\alpha = p}$$

---

## 9. Angle Between Two Lines

If $m_1$ and $m_2$ are the slopes of two lines, the **acute angle** $\theta$ between them:

$$\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$$

For lines $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$:

$$\cos\theta = \frac{|a_1a_2 + b_1b_2|}{\sqrt{a_1^2+b_1^2}\cdot\sqrt{a_2^2+b_2^2}}$$

**Conditions:**
- **Parallel:** $a_1b_2 = a_2b_1$
- **Perpendicular:** $a_1a_2 + b_1b_2 = 0$

---

## 10. Distance of a Point from a Line

### 10.1 Formula

Distance from point $P(x_0, y_0)$ to line $ax + by + c = 0$:

$$\boxed{d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}}$$

### 10.2 Distance Between Parallel Lines

For parallel lines $ax + by + c_1 = 0$ and $ax + by + c_2 = 0$:

$$d = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$$

**Example 10.1:** Find the distance from $(3, -5)$ to the line $3x - 4y + 10 = 0$.

$$d = \frac{|3(3) - 4(-5) + 10|}{\sqrt{9+16}} = \frac{|9 + 20 + 10|}{5} = \frac{39}{5} = 7.8 \text{ units}$$

---

## 11. Solved Examples

### Example 11.1 — Proving Collinearity

Show that $A(1,1)$, $B(2,3)$, $C(3,5)$ are collinear.

**Solution:** Area of $\triangle ABC$:

$$= \frac{1}{2}|1(3-5) + 2(5-1) + 3(1-3)|$$
$$= \frac{1}{2}|{-2 + 8 - 6}| = \frac{1}{2}|0| = 0$$

Since area = 0, the points are **collinear**. ✓

### Example 11.2 — Finding a Line

Find the equation of the line through $(2, -3)$ and perpendicular to $4x - 3y + 7 = 0$.

**Solution:** Slope of given line = $\dfrac{4}{3}$

Slope of perpendicular = $-\dfrac{3}{4}$

Equation: $y + 3 = -\dfrac{3}{4}(x - 2)$

$$4y + 12 = -3x + 6 \implies \boxed{3x + 4y + 6 = 0}$$

### Example 11.3 — Locus Problem

Find the locus of a point $P$ such that the sum of squares of its distances from $A(3,0)$ and $B(-3,0)$ equals 50.

**Solution:** Let $P = (h, k)$.

$$PA^2 + PB^2 = 50$$
$$(h-3)^2 + k^2 + (h+3)^2 + k^2 = 50$$
$$2h^2 + 18 + 2k^2 = 50$$
$$h^2 + k^2 = 16$$

Locus: $\boxed{x^2 + y^2 = 16}$ (a circle of radius 4 centered at origin)

---

## 12. References

1. **Anton, H., Bivens, I., & Davis, S.** — *Calculus: Early Transcendentals*, 10th ed., Wiley
2. **R. D. Sharma** — *Coordinate Geometry*, Dhanpat Rai Publications
3. **S. L. Loney** — *The Elements of Coordinate Geometry*, Macmillan
4. [Khan Academy — Analytic Geometry](https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry)
5. [Paul's Online Math Notes — Lines](https://tutorial.math.lamar.edu/classes/alg/lines.aspx)
6. [Brilliant.org — Coordinate Geometry](https://brilliant.org/wiki/coordinate-geometry/)
7. [MIT OpenCourseWare — 18.01](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/)

---

*[← Back to README](./README.md) | [Next: Transformation of Coordinates →](./02_Transformation_of_Coordinates.md)*
