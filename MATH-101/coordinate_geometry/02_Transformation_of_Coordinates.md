# 📌 Topic 2: Transformation of Coordinates

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Introduction](#1-introduction)
2. [Translation (Shift of Origin)](#2-translation-shift-of-origin)
3. [Rotation of Axes](#3-rotation-of-axes)
4. [Combined Transformation](#4-combined-transformation)
5. [Invariants Under Transformation](#5-invariants-under-transformation)
6. [Removing the XY Term — Angle of Rotation](#6-removing-the-xy-term--angle-of-rotation)
7. [Solved Examples](#7-solved-examples)
8. [References](#8-references)

---

## 1. Introduction

In analytic geometry, it is often useful to **simplify an equation** by changing the coordinate system. **Transformation of coordinates** involves:

1. **Translation** — shifting the origin to a new point (without rotating axes)
2. **Rotation** — rotating the axes through some angle (without shifting origin)
3. **Combined** — translation followed by rotation

The goal is typically to **eliminate linear terms** or the **cross-product ($xy$) term** to bring a conic into standard form.

---

## 2. Translation (Shift of Origin)

### 2.1 Definition

Let the origin be shifted to a new point $O'(h, k)$. The **new axes** $O'X'$ and $O'Y'$ are **parallel** to the old axes $OX$ and $OY$.

```
      y
      |        y'
      |         |
      |    O'---+-------> x'
      |    (h,k)
      |
------O------------------> x
```

### 2.2 Transformation Formulas

If old coordinates are $(x, y)$ and new coordinates are $(X, Y)$:

$$\boxed{x = X + h, \qquad y = Y + k}$$

or equivalently:

$$\boxed{X = x - h, \qquad Y = y - k}$$

### 2.3 Effect on Equations

When the origin is shifted to $(h, k)$:
- **Linear terms** $2gx + 2fy$ get modified (and can be eliminated)
- **Second-degree terms** $ax^2 + 2hxy + by^2$ **remain unchanged**
- The **distance between any two points** is unchanged

**Purpose:** To eliminate the linear terms in a general second-degree equation and identify the center of a conic.

### 2.4 Finding the New Origin to Eliminate Linear Terms

Given $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$, the new origin $(h_0, k_0)$ that eliminates linear terms satisfies:

$$ah_0 + hk_0 + g = 0$$
$$hh_0 + bk_0 + f = 0$$

**Example 2.1:** Find the transformed equation of $x^2 + y^2 - 4x - 6y - 17 = 0$ when origin is shifted to $(2, 3)$.

**Solution:**

Substitute $x = X + 2$, $y = Y + 3$:

$$(X+2)^2 + (Y+3)^2 - 4(X+2) - 6(Y+3) - 17 = 0$$

$$X^2 + 4X + 4 + Y^2 + 6Y + 9 - 4X - 8 - 6Y - 18 - 17 = 0$$

$$X^2 + Y^2 + (4-4)X + (6-6)Y + (4+9-8-18-17) = 0$$

$$X^2 + Y^2 - 30 = 0$$

$$\boxed{X^2 + Y^2 = 30}$$

This is a **circle** centered at the new origin with radius $\sqrt{30}$.

---

## 3. Rotation of Axes

### 3.1 Definition

The axes are **rotated** through an angle $\theta$ about the origin, without translating it.

```
          Y
          |  Y' (rotated)
          | /
          |/ θ
----------O-----------> X
           \
            X' (rotated)
```

> 📷 Reference: https://mathworld.wolfram.com/images/eps-svg/AxisRotation_700.svg

### 3.2 Transformation Formulas

If old coordinates are $(x, y)$ and the axes are rotated by angle $\theta$, the new coordinates $(X, Y)$ are:

$$\boxed{x = X\cos\theta - Y\sin\theta}$$
$$\boxed{y = X\sin\theta + Y\cos\theta}$$

**Inverse relations** (from old to new):

$$X = x\cos\theta + y\sin\theta$$
$$Y = -x\sin\theta + y\cos\theta$$

**Matrix Form:**

$$\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} X \\ Y \end{pmatrix}$$

The matrix $R = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ is an **orthogonal rotation matrix** with $\det(R) = 1$.

### 3.3 Derivation of Rotation Formulas

Let point $P$ have old coordinates $(x, y)$ and new coordinates $(X, Y)$ after rotating axes by $\theta$.

Let $r = OP$ and $\phi$ = angle $OP$ makes with old X-axis.

Then:
- $x = r\cos\phi$, $y = r\sin\phi$ (in old system)
- $X = r\cos(\phi - \theta)$, $Y = r\sin(\phi - \theta)$ (in new system)

Expanding:

$$X = r(\cos\phi\cos\theta + \sin\phi\sin\theta) = x\cos\theta + y\sin\theta$$
$$Y = r(\sin\phi\cos\theta - \cos\phi\sin\theta) = -x\sin\theta + y\cos\theta$$

And conversely:

$$x = X\cos\theta - Y\sin\theta$$
$$y = X\sin\theta + Y\cos\theta \quad \checkmark$$

---

## 4. Combined Transformation

When **both** translation and rotation are applied:

**Step 1:** Shift origin to $(h, k)$: $x = x' + h$, $y = y' + k$

**Step 2:** Rotate by $\theta$: $x' = X\cos\theta - Y\sin\theta$, $y' = X\sin\theta + Y\cos\theta$

Combined:

$$x = (X\cos\theta - Y\sin\theta) + h$$
$$y = (X\sin\theta + Y\cos\theta) + k$$

**Practical strategy:**
1. First shift origin to the **center** of the conic (eliminates linear terms)
2. Then rotate to **remove the $xy$ term** (eliminates cross-product term)

---

## 5. Invariants Under Transformation

When a second-degree equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ is transformed, certain quantities **remain unchanged** (invariants).

### 5.1 Theorem of Invariants

Under rotation of axes, the following quantities are invariant:

**Invariant 1:**
$$\boxed{a + b = a' + b'}$$

(sum of coefficients of $x^2$ and $y^2$ is preserved)

**Invariant 2:**
$$\boxed{ab - h^2 = a'b' - h'^2}$$

**Invariant 3 (Full determinant):**

$$\Delta = \begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = a'b'c' + 2f'g'h' - a'f'^2 - b'g'^2 - c'h'^2$$

This $\Delta$ is invariant under **both** rotation and translation.

### 5.2 Proof of Invariant 1 ($a + b = a' + b'$)

Under rotation by $\theta$, substituting:

$x = X\cos\theta - Y\sin\theta$, $y = X\sin\theta + Y\cos\theta$

In $ax^2 + 2hxy + by^2$:

Coefficient of $X^2$:
$$a' = a\cos^2\theta + 2h\sin\theta\cos\theta + b\sin^2\theta$$

Coefficient of $Y^2$:
$$b' = a\sin^2\theta - 2h\sin\theta\cos\theta + b\cos^2\theta$$

Adding:
$$a' + b' = a(\cos^2\theta + \sin^2\theta) + b(\sin^2\theta + \cos^2\theta) = a + b \quad \checkmark$$

### 5.3 Proof of Invariant 2 ($ab - h^2 = a'b' - h'^2$)

From the above:

$$2a' = (a+b) + (a-b)\cos 2\theta + 2h\sin 2\theta$$
$$2b' = (a+b) - (a-b)\cos 2\theta - 2h\sin 2\theta$$
$$2h' = 2h\cos 2\theta - (a-b)\sin 2\theta$$

Computing $4(a'b' - h'^2) = (a'+b')^2 - (a'-b')^2 - 4h'^2$:

After simplification using $\cos^2 2\theta + \sin^2 2\theta = 1$:

$$a'b' - h'^2 = ab - h^2 \quad \checkmark$$

---

## 6. Removing the XY Term — Angle of Rotation

### 6.1 Problem

Given $ax^2 + 2hxy + by^2 + \ldots = 0$, find $\theta$ to eliminate the $XY$ term.

### 6.2 Formula

From the derivation, the coefficient of $XY$ in the rotated frame is:

$$2h' = 2h\cos 2\theta - (a-b)\sin 2\theta$$

Setting $h' = 0$:

$$2h\cos 2\theta = (a-b)\sin 2\theta$$

$$\tan 2\theta = \frac{2h}{a-b}, \quad a \neq b$$

$$\boxed{\theta = \frac{1}{2}\tan^{-1}\left(\frac{2h}{a-b}\right)}$$

**Special case:** If $a = b$, then $\tan 2\theta \to \infty$, so $2\theta = 90°$, giving $\theta = 45°$.

---

## 7. Solved Examples

### Example 7.1 — Translation

Find the transformed equation of $x^2 + y^2 - 4x - 6y - 17 = 0$ after shifting origin to $(2, 3)$, keeping axes parallel.

**Solution:** Substitute $x = X+2$, $y = Y+3$:

$$(X+2)^2 + (Y+3)^2 - 4(X+2) - 6(Y+3) - 17 = 0$$
$$X^2 + Y^2 + 4X + 4 + 6Y + 9 - 4X - 8 - 6Y - 18 - 17 = 0$$
$$\boxed{X^2 + Y^2 = 30}$$

The equation represents a **circle** centered at the new origin with radius $\sqrt{30}$.

---

### Example 7.2 — Rotation (45°)

Transform $x^2 - 2xy + y^2 + x - 3y = 0$ by rotating axes through $45°$.

**Solution:** With $\theta = 45°$:

$$x = \frac{X-Y}{\sqrt{2}}, \quad y = \frac{X+Y}{\sqrt{2}}$$

Computing:

- $x^2 = \frac{(X-Y)^2}{2} = \frac{X^2 - 2XY + Y^2}{2}$
- $y^2 = \frac{(X+Y)^2}{2} = \frac{X^2 + 2XY + Y^2}{2}$
- $xy = \frac{(X-Y)(X+Y)}{2} = \frac{X^2 - Y^2}{2}$

$x^2 - 2xy + y^2 = \frac{X^2 - 2XY + Y^2}{2} - (X^2 - Y^2) + \frac{X^2 + 2XY + Y^2}{2}$
$= X^2 + Y^2 - X^2 + Y^2 = 2Y^2$

$x - 3y = \frac{X-Y}{\sqrt{2}} - \frac{3(X+Y)}{\sqrt{2}} = \frac{-2X - 4Y}{\sqrt{2}} = -\sqrt{2}X - 2\sqrt{2}Y$

So:

$$2Y^2 - \sqrt{2}X - 2\sqrt{2}Y = 0$$

$$\boxed{Y^2 - \frac{1}{\sqrt{2}}X - \sqrt{2}Y = 0}$$

This is a **parabola** in the rotated frame.

---

### Example 7.3 — Find Angle to Remove XY Term

Find the angle of rotation to remove the $xy$ term from $x^2 - 2xy + y^2 + x - 3y = 0$.

**Solution:** $a = 1$, $b = 1$, $2h = -2 \Rightarrow h = -1$.

Since $a = b$, $\theta = 45°$ (as derived above). ✓

---

### Example 7.4 — Rotation for Ellipse

Show that $5x^2 + 4xy + 2y^2 = 6$ represents an ellipse. Find the standard form.

**Solution:** $a=5$, $b=2$, $2h=4 \Rightarrow h=2$.

$$\theta = \frac{1}{2}\tan^{-1}\left(\frac{2h}{a-b}\right) = \frac{1}{2}\tan^{-1}\left(\frac{4}{3}\right)$$

So $\tan 2\theta = \frac{4}{3}$, meaning in a 3-4-5 right triangle: $\sin 2\theta = \frac{4}{5}$, $\cos 2\theta = \frac{3}{5}$.

$$\cos\theta = \sqrt{\frac{1+\cos 2\theta}{2}} = \sqrt{\frac{4}{5}} = \frac{2}{\sqrt{5}}, \quad \sin\theta = \frac{1}{\sqrt{5}}$$

After substitution and simplification:

$$6X^2 + Y^2 = 6 \implies \frac{X^2}{1} + \frac{Y^2}{6} = 1$$

This is an **ellipse** with semi-axes $a=1$ and $b=\sqrt{6}$. ✓

---

## 8. References

1. **S. L. Loney** — *The Elements of Coordinate Geometry*, Macmillan
2. **Hall and Knight** — *Higher Algebra*, Macmillan
3. **Apostol, T.** — *Calculus Vol. 2*, Wiley
4. [MathWorld — Rotation of Axes](https://mathworld.wolfram.com/RotationofAxes.html)
5. [Paul's Online Notes — Rotation of Axes](https://tutorial.math.lamar.edu/classes/calcii/rotationofaxes.aspx)
6. [LibreTexts — Rotation of Axes](https://math.libretexts.org/Bookshelves/Precalculus/Precalculus/10%3A_Analytic_Geometry/10.04%3A_Rotation_of_Axes)
7. [Khan Academy — Rotation of Conics](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:conics)

---

*[← Prev: 2D Coordinate System](./01_2D_Coordinate_System.md) | [Next: General Equation of Second Degree →](./03_General_Equation_Second_Degree.md)*
