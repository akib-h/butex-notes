# 📌 Topic 3: General Equation of Second Degree in Two Variables

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Introduction](#1-introduction)
2. [The General Second-Degree Equation](#2-the-general-second-degree-equation)
3. [The Discriminant and Classification](#3-the-discriminant-and-classification)
4. [Pair of Straight Lines](#4-pair-of-straight-lines)
5. [Condition for Pair of Lines — Homogeneous Form](#5-condition-for-pair-of-lines--homogeneous-form)
6. [Condition for Pair of Lines — General Form](#6-condition-for-pair-of-lines--general-form)
7. [Angle Between Pair of Lines](#7-angle-between-pair-of-lines)
8. [Angle Bisectors of Pair of Lines](#8-angle-bisectors-of-pair-of-lines)
9. [Combined Equation of Pair of Lines](#9-combined-equation-of-pair-of-lines)
10. [Solved Examples](#10-solved-examples)
11. [References](#11-references)

---

## 1. Introduction

The **general equation of second degree** (or **general conic equation**) in variables $x$ and $y$ is:

$$\boxed{ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0}$$

where $a, b, c, f, g, h$ are real constants and not all of $a, b, h$ are simultaneously zero.

This single equation can represent a wide variety of geometric curves depending on the values of these constants: a **circle**, **ellipse**, **parabola**, **hyperbola**, **pair of straight lines**, a **point**, or even **no real curve**.

---

## 2. The General Second-Degree Equation

### 2.1 Standard Notation

We always write the equation as:

$$S \equiv ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$$

where the factor of 2 with $h$, $g$, and $f$ is conventional — it simplifies determinant expressions.

### 2.2 The Associated Matrix

The equation can be written in matrix form:

$$\mathbf{x}^T A \mathbf{x} = 0, \quad \text{where } \mathbf{x} = \begin{pmatrix} x \\ y \\ 1 \end{pmatrix}$$

and:

$$A = \begin{pmatrix} a & h & g \\ h & b & f \\ g & f & c \end{pmatrix}$$

### 2.3 The Discriminant

The **discriminant** $\Delta$ is:

$$\Delta = \det(A) = \begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = abc + 2fgh - af^2 - bg^2 - ch^2$$

The quantity $\delta = ab - h^2$ is also fundamental:

$$\delta = ab - h^2$$

---

## 3. The Discriminant and Classification

### 3.1 Classification Table

The type of conic represented by $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$:

| Condition | Conic Type |
|-----------|-----------|
| $\Delta \neq 0$, $h^2 < ab$ | **Ellipse** (real if $\Delta/a < 0$; imaginary if $\Delta/a > 0$) |
| $\Delta \neq 0$, $h^2 < ab$, $a = b$, $h = 0$ | **Circle** |
| $\Delta \neq 0$, $h^2 = ab$ | **Parabola** |
| $\Delta \neq 0$, $h^2 > ab$ | **Hyperbola** |
| $\Delta \neq 0$, $h^2 > ab$, $a + b = 0$ | **Rectangular Hyperbola** |
| $\Delta = 0$, $h^2 < ab$ | **Point (degenerate ellipse)** |
| $\Delta = 0$, $h^2 = ab$ | **Pair of parallel (or coincident) lines** |
| $\Delta = 0$, $h^2 > ab$ | **Pair of intersecting lines** |

### 3.2 Summary Diagram

```
         General Second Degree Equation
              ax² + 2hxy + by² + 2gx + 2fy + c = 0

                    /              \
               Δ ≠ 0              Δ = 0
             (Non-degenerate)    (Degenerate)
            /    |    \              |
      h²<ab   h²=ab  h²>ab     Pair of Lines
      Ellipse  Parabola Hyperbola  (or point)
      (Circle  
      if a=b,h=0)
```

---

## 4. Pair of Straight Lines

### 4.1 Homogeneous Equation

A **second-degree homogeneous equation**:

$$ax^2 + 2hxy + by^2 = 0$$

**always represents a pair of straight lines through the origin** (which may be real, coincident, or imaginary).

### 4.2 Theorem

> **Theorem:** The equation $ax^2 + 2hxy + by^2 = 0$ always represents a pair of straight lines through the origin.

**Proof:**

Divide by $x^2$ (assuming $x \neq 0$), let $m = y/x$:

$$b\left(\frac{y}{x}\right)^2 + 2h\left(\frac{y}{x}\right) + a = 0$$

$$bm^2 + 2hm + a = 0$$

Let roots be $m_1, m_2$. Then:

$$m_1 + m_2 = -\frac{2h}{b}, \qquad m_1 m_2 = \frac{a}{b}$$

So:

$$\frac{y^2}{x^2} - (m_1+m_2)\frac{y}{x} + m_1m_2 = 0$$

$$\frac{1}{x^2}\left[(y - m_1 x)(y - m_2 x)\right] = 0$$

Since this holds for $x \neq 0$:

$$\boxed{(y - m_1 x)(y - m_2 x) = 0}$$

This represents two lines $y = m_1 x$ and $y = m_2 x$ through the origin. $\blacksquare$

### 4.3 Nature of Lines

- **Real and distinct:** $h^2 > ab$
- **Real and coincident:** $h^2 = ab$
- **Imaginary (complex conjugates):** $h^2 < ab$

---

## 5. Condition for Pair of Lines — Homogeneous Form

### 5.1 Angle Between the Lines

For $ax^2 + 2hxy + by^2 = 0$, where $m_1 + m_2 = -2h/b$ and $m_1m_2 = a/b$:

$$\tan\theta = \pm\frac{m_1 - m_2}{1 + m_1m_2} = \pm\frac{\sqrt{(m_1+m_2)^2 - 4m_1m_2}}{1+m_1m_2}$$

$$= \pm\frac{\sqrt{\frac{4h^2}{b^2} - \frac{4a}{b}}}{1 + \frac{a}{b}} = \pm\frac{2\sqrt{h^2-ab}}{a+b}$$

$$\boxed{\tan\theta = \pm\frac{2\sqrt{h^2-ab}}{a+b}}$$

### 5.2 Conditions for Special Lines

| Condition | Meaning |
|-----------|---------|
| $a + b = 0$ | Lines are **perpendicular** |
| $h^2 = ab$ | Lines are **coincident (parallel)** |

---

## 6. Condition for Pair of Lines — General Form

### 6.1 Necessary and Sufficient Condition

The equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ represents a **pair of straight lines** if and only if:

$$\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$$

or equivalently:

$$\Delta = \begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = 0$$

### 6.2 Proof

If the equation represents two lines $l_1x + m_1y + n_1 = 0$ and $l_2x + m_2y + n_2 = 0$, then:

$$(l_1x + m_1y + n_1)(l_2x + m_2y + n_2) = ax^2 + 2hxy + by^2 + 2gx + 2fy + c$$

Comparing coefficients:

$$l_1l_2 = a, \quad m_1m_2 = b, \quad n_1n_2 = c$$
$$l_1m_2 + l_2m_1 = 2h, \quad l_1n_2 + l_2n_1 = 2g, \quad m_1n_2 + m_2n_1 = 2f$$

The condition $\Delta = 0$ follows algebraically from eliminating $l_1, l_2, m_1, m_2, n_1, n_2$. It can be shown that:

$$\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0 \iff \text{equation factors into two linear factors}$$

### 6.3 Point of Intersection of the Two Lines

If $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ represents a pair of lines, their point of intersection $(x_0, y_0)$ is found by:

$$\frac{\partial S}{\partial x} = 0 \implies ax_0 + hy_0 + g = 0$$
$$\frac{\partial S}{\partial y} = 0 \implies hx_0 + by_0 + f = 0$$

Solving:

$$x_0 = \frac{hf - bg}{ab - h^2}, \qquad y_0 = \frac{gh - af}{ab - h^2}$$

---

## 7. Angle Between Pair of Lines

For the general equation:

$$ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$$

representing two lines, the angle $\theta$ between them is:

$$\tan\theta = \pm\frac{2\sqrt{h^2 - ab}}{a + b}$$

(same formula as homogeneous case — the linear terms do not affect the angle)

**Conditions:**

| Condition | Lines |
|-----------|-------|
| $a + b = 0$ | **Perpendicular** |
| $h^2 = ab$ | **Parallel** |
| $h^2 > ab$ | **Real and distinct** |
| $h^2 < ab$ | **Imaginary** |

---

## 8. Angle Bisectors of Pair of Lines

### 8.1 Equation of Angle Bisectors

For the pair $ax^2 + 2hxy + by^2 = 0$, the **combined equation of angle bisectors** is:

$$\frac{x^2 - y^2}{a - b} = \frac{xy}{h}$$

or equivalently:

$$\boxed{h(x^2 - y^2) = (a-b)xy}$$

### 8.2 Key Property

The angle bisectors of a pair of lines are **perpendicular to each other** and they bisect the angles between the original pair.

---

## 9. Combined Equation of Pair of Lines

### 9.1 Joining a Point to a Curve (Homogenization)

To find the combined equation of lines joining origin to points of intersection of curve $S = 0$ and line $lx + my + n = 0$:

**Method:** Homogenize $S$ using $1 = -\frac{lx + my}{n}$.

**Example:** Intersection of $x^2 + y^2 = a^2$ and $lx + my = 1$:

Replace $1$ with $(lx + my)$ in $a^2 \cdot 1^2$:

$$x^2 + y^2 = a^2(lx+my)^2$$

This combined equation represents the pair of lines through the origin and the intersection points.

---

## 10. Solved Examples

### Example 10.1 — Verify Pair of Lines

Show that $2x^2 + 7xy + 3y^2 + 8x + 14y + 8 = 0$ represents a pair of straight lines. Find them.

**Solution:** $a=2, b=3, c=8, f=7, g=4, h=7/2$

$$\Delta = abc + 2fgh - af^2 - bg^2 - ch^2$$
$$= 2(3)(8) + 2(7)(4)\frac{7}{2} - 2(49) - 3(16) - 8\left(\frac{49}{4}\right)$$
$$= 48 + 196 - 98 - 48 - 98 = 0 \checkmark$$

So it represents a pair of lines.

**Finding the lines:**

$2x^2 + 7xy + 3y^2 + 8x + 14y + 8$

$= 2x^2 + (7y+8)x + (3y^2 + 14y + 8)$

Using quadratic formula in $x$:

$x = \frac{-(7y+8) \pm \sqrt{(7y+8)^2 - 8(3y^2+14y+8)}}{4}$

$= \frac{-(7y+8) \pm \sqrt{49y^2+112y+64-24y^2-112y-64}}{4}$

$= \frac{-(7y+8) \pm \sqrt{25y^2}}{4} = \frac{-(7y+8) \pm 5y}{4}$

Taking $+$: $4x = -7y - 8 + 5y = -2y - 8 \implies 4x + 2y + 8 = 0 \implies 2x + y + 4 = 0$

Taking $-$: $4x = -7y - 8 - 5y = -12y - 8 \implies 4x + 12y + 8 = 0 \implies x + 3y + 2 = 0$

**Lines:** $\boxed{2x + y + 4 = 0}$ and $\boxed{x + 3y + 2 = 0}$

**Verification:** $(2x+y+4)(x+3y+2) = 2x^2+6xy+4x+xy+3y^2+2y+4x+12y+8 = 2x^2+7xy+3y^2+8x+14y+8$ ✓

**Point of intersection:** Solving $2x + y + 4 = 0$ and $x + 3y + 2 = 0$:

From first: $y = -2x-4$. Sub in second: $x + 3(-2x-4) + 2 = 0 \implies -5x = 10 \implies x = -2, y = 0$.

**Point of intersection:** $(-2, 0)$

---

### Example 10.2 — Find $k$ for Pair of Lines

Find the value of $k$ so that $12x^2 + 7xy + ky^2 + 13x - y - 3 = 0$ represents a pair of lines.

**Solution:** $a=12, b=k, c=-3, f=-\frac{1}{2}, g=\frac{13}{2}, h=\frac{7}{2}$

For pair of lines, $\Delta = 0$:

$$abc + 2fgh - af^2 - bg^2 - ch^2 = 0$$

$$12(k)(-3) + 2\left(-\frac{1}{2}\right)\left(\frac{13}{2}\right)\left(\frac{7}{2}\right) - 12\left(\frac{1}{4}\right) - k\left(\frac{169}{4}\right) - (-3)\left(\frac{49}{4}\right) = 0$$

$$-36k - \frac{91}{4} - 3 - \frac{169k}{4} + \frac{147}{4} = 0$$

Multiply by 4:

$$-144k - 91 - 12 - 169k + 147 = 0$$

$$-313k + 44 = 0 \implies k = \frac{44}{313}$$

Hmm, let me redo with $2h=7, 2g=13, 2f=-1$, so $h=7/2, g=13/2, f=-1/2$:

$$\Delta = 12 \cdot k \cdot (-3) + 2\left(-\frac{1}{2}\right)\left(\frac{13}{2}\right)\left(\frac{7}{2}\right) - 12\left(\frac{1}{4}\right) - k\left(\frac{169}{4}\right) - (-3)\left(\frac{49}{4}\right) = 0$$

$$-36k - \frac{91}{4} - 3 - \frac{169k}{4} + \frac{147}{4} = 0$$

$$-36k - \frac{169k}{4} + \frac{-91+147}{4} - 3 = 0$$

$$-36k - \frac{169k}{4} + 14 - 3 = 0$$

$$-\frac{144k + 169k}{4} + 11 = 0$$

$$-\frac{313k}{4} = -11 \implies k = \frac{44}{313}$$

So $\boxed{k = \frac{44}{313}}$ (approx. $0.1406$).

> **Alternate check:** Use the formula from the handnotes with standard coefficients where the coefficient of $xy$ is $7$ directly (not $2h$), which may give a different answer depending on convention.

---

### Example 10.3 — Angle Between Lines

Find the angle between the lines $2x^2 + 7xy + 3y^2 = 0$.

**Solution:** $a=2, b=3, h=7/2$

$$\tan\theta = \frac{2\sqrt{h^2-ab}}{a+b} = \frac{2\sqrt{49/4 - 6}}{5} = \frac{2\sqrt{25/4}}{5} = \frac{2 \cdot 5/2}{5} = 1$$

$$\theta = 45°$$

---

## 11. References

1. **S. L. Loney** — *The Elements of Coordinate Geometry*, Part II
2. **Burnside, W. S. & Panton, A. W.** — *The Theory of Equations*, Dublin University Press
3. **Hall, H. S. & Knight, S. R.** — *Higher Algebra*
4. [MathWorld — Second-Degree Curve](https://mathworld.wolfram.com/QuadraticCurve.html)
5. [LibreTexts — General Conic Equations](https://math.libretexts.org/Bookshelves/Precalculus/Precalculus/10%3A_Analytic_Geometry)
6. [Brilliant.org — Pair of Lines](https://brilliant.org/wiki/pair-of-straight-lines/)
7. [Cut-the-Knot — Conics](https://www.cut-the-knot.org/curriculum/Geometry/ConicSections.shtml)

---

*[← Prev: Transformation](./02_Transformation_of_Coordinates.md) | [Next: Conic Sections →](./04_Conic_Sections.md)*
