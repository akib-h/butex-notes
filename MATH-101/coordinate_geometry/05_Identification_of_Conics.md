# 📌 Topic 5: Identification of Conics

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Introduction](#1-introduction)
2. [The Key Invariants](#2-the-key-invariants)
3. [Complete Classification Theorem](#3-complete-classification-theorem)
4. [Algorithm to Identify a Conic](#4-algorithm-to-identify-a-conic)
5. [Reducing to Standard Form](#5-reducing-to-standard-form)
6. [Worked Examples with Full Reduction](#6-worked-examples-with-full-reduction)
7. [References](#7-references)

---

## 1. Introduction

Given a general second-degree equation:

$$ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$$

how do we determine **which conic** it represents and **reduce it** to standard form?

The answer lies in computing three invariants and applying a classification theorem.

---

## 2. The Key Invariants

For the equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$, define:

### 2.1 The Quadratic Invariants

$$\delta = ab - h^2 \quad \text{(minor determinant)}$$

$$J = a + b \quad \text{(trace of the quadratic matrix)}$$

### 2.2 The Full Discriminant

$$\Delta = \begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = abc + 2fgh - af^2 - bg^2 - ch^2$$

### 2.3 Why These Are Invariants

Under any rotation and translation:
- $\Delta$ is invariant (absolute invariant)
- $\delta = ab - h^2$ is invariant
- $J = a + b$ is invariant

Therefore, the **type of conic** depends only on these three numbers.

---

## 3. Complete Classification Theorem

### 3.1 Non-Degenerate Conics ($\Delta \neq 0$)

| Conditions | Conic |
|------------|-------|
| $\delta > 0$ and $\Delta \neq 0$ | **Ellipse** (or circle if $a=b$, $h=0$) |
| $\delta > 0$, $\Delta \neq 0$, and $\Delta/(a+b) < 0$ | Real ellipse |
| $\delta > 0$, $\Delta \neq 0$, and $\Delta/(a+b) > 0$ | Imaginary ellipse |
| $\delta = 0$ and $\Delta \neq 0$ | **Parabola** |
| $\delta < 0$ and $\Delta \neq 0$ | **Hyperbola** |
| $\delta < 0$, $\Delta \neq 0$, $a + b = 0$ | **Rectangular Hyperbola** |

### 3.2 Degenerate Conics ($\Delta = 0$)

| Conditions | Conic |
|------------|-------|
| $\delta > 0$, $\Delta = 0$ | **Point** (real or imaginary) |
| $\delta = 0$, $\Delta = 0$ | **Pair of parallel lines** (or coincident, or no real lines) |
| $\delta < 0$, $\Delta = 0$ | **Pair of intersecting lines** |

### 3.3 Comprehensive Table

| $\Delta$ | $\delta = ab-h^2$ | $a+b$ | Conic |
|----------|-------------------|-------|-------|
| $\neq 0$ | $> 0$ | $-$ | Ellipse |
| $\neq 0$ | $> 0$, $a=b$, $h=0$ | $-$ | Circle |
| $\neq 0$ | $= 0$ | $-$ | Parabola |
| $\neq 0$ | $< 0$ | $\neq 0$ | Hyperbola |
| $\neq 0$ | $< 0$ | $= 0$ | Rectangular Hyperbola |
| $= 0$ | $> 0$ | $-$ | Point |
| $= 0$ | $= 0$ | $-$ | Parallel/coincident lines |
| $= 0$ | $< 0$ | $-$ | Two intersecting lines |

---

## 4. Algorithm to Identify a Conic

```
INPUT: ax² + 2hxy + by² + 2gx + 2fy + c = 0

Step 1: Compute δ = ab - h²
Step 2: Compute Δ = abc + 2fgh - af² - bg² - ch²
Step 3: Compute J = a + b

        ┌─────────────────────────────────────┐
        │          Is Δ = 0?                  │
        └────────┬────────────────┬───────────┘
               YES               NO
                │                │
        ┌───────┴──────┐  ┌──────┴──────────────┐
        │ Degenerate   │  │ Non-degenerate       │
        │  δ > 0: Point│  │  δ > 0: Ellipse      │
        │  δ = 0: Lines│  │  δ = 0: Parabola     │
        │  δ < 0: 2 Int│  │  δ < 0: Hyperbola    │
        └──────────────┘  │  (J=0 → Rect. Hyp.)  │
                          └──────────────────────┘
```

---

## 5. Reducing to Standard Form

### 5.1 General Strategy

**Step 1:** Compute $\theta = \frac{1}{2}\tan^{-1}\left(\frac{2h}{a-b}\right)$ and rotate axes.

**Step 2:** After rotation (no $XY$ term), complete the square to shift origin.

**Step 3:** The resulting equation is in standard form.

### 5.2 Eigenvalue Method

The quadratic part $ax^2 + 2hxy + by^2$ can be diagonalized using eigenvalues of the matrix:

$$M = \begin{pmatrix} a & h \\ h & b \end{pmatrix}$$

Eigenvalues $\lambda_1, \lambda_2$ satisfy:

$$\lambda^2 - (a+b)\lambda + (ab - h^2) = 0$$

$$\lambda = \frac{(a+b) \pm \sqrt{(a-b)^2 + 4h^2}}{2}$$

After diagonalization, the quadratic part becomes $\lambda_1 X^2 + \lambda_2 Y^2$.

**Key fact:** $\lambda_1 + \lambda_2 = a+b$ and $\lambda_1\lambda_2 = ab-h^2 = \delta$.

### 5.3 The Standard Forms After Reduction

| Original | Reduced Standard Form |
|----------|-----------------------|
| Ellipse | $\frac{X^2}{A^2} + \frac{Y^2}{B^2} = 1$ |
| Parabola | $Y^2 = 4PX$ or $X^2 = 4PY$ |
| Hyperbola | $\frac{X^2}{A^2} - \frac{Y^2}{B^2} = 1$ |
| Circle | $X^2 + Y^2 = R^2$ |

---

## 6. Worked Examples with Full Reduction

### Example 6.1 — Reduction of a Parabola

**Reduce** $x^2 - 2\sqrt{3}xy + 3y^2 - 16\sqrt{3}x - 16y = 0$ to standard form.

**Step 1: Identify**

$a=1$, $b=3$, $h=-\sqrt{3}$, $g=-8\sqrt{3}$, $f=-8$, $c=0$

$\delta = ab - h^2 = 3 - 3 = 0$ → **Parabola** (check $\Delta \neq 0$)

$\Delta = 1(3)(0) + 2(-8)(-8\sqrt{3})(-\sqrt{3}) - 1(64) - 3(192) - 0 = -384 - 64 - 576 \neq 0$ ✓

**Step 2: Find rotation angle**

$a = b$? No. $\tan 2\theta = \frac{2h}{a-b} = \frac{-2\sqrt{3}}{1-3} = \sqrt{3}$

$2\theta = 60°$, so $\theta = 30°$.

$\cos 30° = \frac{\sqrt{3}}{2}$, $\sin 30° = \frac{1}{2}$

**Step 3: Apply rotation**

$x = \frac{\sqrt{3}}{2}X - \frac{1}{2}Y$, $y = \frac{1}{2}X + \frac{\sqrt{3}}{2}Y$

After substitution (tedious algebra), the $XY$ term vanishes and we get:

$$4Y^2 - 32X = 0 \implies Y^2 = 8X$$

This is a **parabola** with $4a = 8 \Rightarrow a = 2$.

---

### Example 6.2 — Full Reduction: Ellipse

**Reduce** $x^2 - 2\sqrt{3}xy + 3y^2 - 16\sqrt{3}x - 16y + 128 = 0$ ... (not this one, let's do the note's example)

**Reduce** $5x^2 + 4xy + 2y^2 - 6 = 0$ to standard form and identify.

**Step 1: Identify**

$a=5, b=2, h=2, g=0, f=0, c=-6$

$\delta = 10 - 4 = 6 > 0$ → Ellipse

$\Delta = 5(2)(-6) + 0 - 0 - 0 - (-6)(4) = -60 + 24 = -36 \neq 0$ → Non-degenerate

**Step 2: Eigenvalues**

$$\lambda^2 - (5+2)\lambda + 6 = 0 \implies \lambda^2 - 7\lambda + 6 = 0$$
$$(\lambda-1)(\lambda-6) = 0 \implies \lambda_1 = 1, \lambda_2 = 6$$

**Step 3: Rotation angle**

$\tan 2\theta = \frac{2(2)}{5-2} = \frac{4}{3}$, so $\cos 2\theta = 3/5$ (from 3-4-5 triangle):

$\cos\theta = \frac{2}{\sqrt{5}}$, $\sin\theta = \frac{1}{\sqrt{5}}$

$x = \frac{2X - Y}{\sqrt{5}}$, $y = \frac{X + 2Y}{\sqrt{5}}$

**Step 4: Substitute**

After substitution:

$$X^2 + 6Y^2 = 6 \implies \frac{X^2}{6} + \frac{Y^2}{1} = 1$$

This is an **ellipse** with semi-major axis $\sqrt{6}$ along $X$-axis, semi-minor axis $1$. ✓

---

### Example 6.3 — Identifying from Discriminants

Identify the conic: $x^2 + 4xy + 4y^2 + 3x - 2y + 1 = 0$

$a=1, b=4, h=2, g=3/2, f=-1, c=1$

$\delta = 1 \cdot 4 - 4 = 0$ → **Parabola or degenerate**

$\Delta = (1)(4)(1) + 2(-1)(3/2)(2) - 1(1) - 4(9/4) - 1(4) = 4 - 6 - 1 - 9 - 4 = -16 \neq 0$

→ **Non-degenerate Parabola** ✓

---

### Example 6.4 — Reducing from Notes: $x^2 - 2\sqrt{3}xy + 3y^2 - 16\sqrt{3}x - 16y = 0$

Let's reduce as in the class notes. With $\theta = 30°$:

$$x = \frac{\sqrt{3}}{2}X - \frac{1}{2}Y, \quad y = \frac{1}{2}X + \frac{\sqrt{3}}{2}Y$$

Substituting into the equation (computing term by term):

$x^2 = \frac{3X^2 - 2\sqrt{3}XY + Y^2}{4}$

$3y^2 = \frac{3X^2 + 6\sqrt{3}XY + 9Y^2}{4}$

$-2\sqrt{3}xy = \frac{-2\sqrt{3}(\sqrt{3}X^2+3XY-XY\cdot\frac{1}{\sqrt{3}}-\ldots)}{4}$

After careful computation, all $XY$ terms cancel and we get:

$$4Y^2 - 32X = 0 \quad \Rightarrow \quad \boxed{Y^2 = 8X}$$

A parabola with vertex at origin (in rotated frame), $a = 2$.

---

### Example 6.5 — Hyperbola Identification

Identify: $x^2 + 4xy - 2y^2 - 6 = 0$

$a=1, b=-2, h=2, g=0, f=0, c=-6$

$\delta = (1)(-2) - 4 = -6 < 0$ → **Hyperbola**

$\Delta = (1)(-2)(-6) + 0 - 0 - 0 - (-6)(4) = 12 + 24 = 36 \neq 0$ → Non-degenerate

Since $a+b = 1 - 2 = -1 \neq 0$, it's a **standard hyperbola** (not rectangular).

Eigenvalues: $\lambda^2 - (-1)\lambda + (-6) = 0 \Rightarrow \lambda^2 + \lambda - 6 = 0 \Rightarrow (\lambda+3)(\lambda-2) = 0$

$\lambda_1 = -3$, $\lambda_2 = 2$

After rotation: $-3X^2 + 2Y^2 = 6 \Rightarrow \frac{Y^2}{3} - \frac{X^2}{2} = 1$ (hyperbola with axis along $Y$)

---

## 7. References

1. **S. L. Loney** — *The Elements of Coordinate Geometry*, Part II, Macmillan
2. **Rees, P. K.** — *Analytic Geometry*, Prentice Hall
3. **Smith, C., & Bryant, S.** — *An Elementary Treatise on Coordinate Geometry*
4. [LibreTexts — Identifying Conics](https://math.libretexts.org/Bookshelves/Precalculus/Precalculus/10%3A_Analytic_Geometry/10.05%3A_Identifying_Conics_from_the_General_Form)
5. [MathWorld — Conic Classification](https://mathworld.wolfram.com/ConicSection.html)
6. [Paul's Online Math Notes — Identifying Conics](https://tutorial.math.lamar.edu/classes/calcii/conicsections.aspx)
7. [Khan Academy — Conic Identification](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:conics)

---

*[← Prev: Conic Sections](./04_Conic_Sections.md) | [Next: 3D Coordinate System →](./06_3D_Coordinate_System.md)*
