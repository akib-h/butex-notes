# 📌 Topic 7: Direction Cosines and Ratios

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Direction Cosines — Definition](#1-direction-cosines--definition)
2. [Fundamental Identity](#2-fundamental-identity)
3. [Direction Ratios](#3-direction-ratios)
4. [Relation Between Direction Cosines and Ratios](#4-relation-between-direction-cosines-and-ratios)
5. [Direction Cosines of a Line Through Two Points](#5-direction-cosines-of-a-line-through-two-points)
6. [Angle Between Two Lines](#6-angle-between-two-lines)
7. [Perpendicularity and Parallelism](#7-perpendicularity-and-parallelism)
8. [Proofs and Theorems](#8-proofs-and-theorems)
9. [Solved Examples](#9-solved-examples)
10. [References](#10-references)

---

## 1. Direction Cosines — Definition

### 1.1 Definition

Let a **directed line** in space make angles $\alpha$, $\beta$, $\gamma$ with the **positive** X-axis, Y-axis, and Z-axis respectively.

Then $\cos\alpha$, $\cos\beta$, $\cos\gamma$ are called the **direction cosines** (DCs) of the line.

We denote: $l = \cos\alpha$, $m = \cos\beta$, $n = \cos\gamma$

```
           Z
           |
           |  P(x,y,z)
           | /
        γ /|
          / |
         /  |
        / β |
       /    |
      O------N-----> Y
     /  α
    /
   X
```

### 1.2 Geometric Interpretation

If $P(x, y, z)$ is any point on the line through origin, at distance $r = OP$ from origin:

$$\cos\alpha = \frac{x}{r} = l, \quad \cos\beta = \frac{y}{r} = m, \quad \cos\gamma = \frac{z}{r} = n$$

### 1.3 Sign Convention

- Direction cosines depend on the **direction** chosen for the line
- Reversing direction: $(l, m, n) \to (-l, -m, -n)$
- A line has **two** sets of direction cosines (for two directions)
- For a **directed** line, the DCs are unique

---

## 2. Fundamental Identity

### 2.1 Theorem: $l^2 + m^2 + n^2 = 1$

**Proof:**

Let $P(x, y, z)$ be any point on the line, $r = OP = \sqrt{x^2+y^2+z^2}$.

$$l^2 + m^2 + n^2 = \cos^2\alpha + \cos^2\beta + \cos^2\gamma$$

$$= \frac{x^2}{r^2} + \frac{y^2}{r^2} + \frac{z^2}{r^2} = \frac{x^2+y^2+z^2}{r^2} = \frac{r^2}{r^2} = 1 \quad \blacksquare$$

$$\boxed{l^2 + m^2 + n^2 = 1}$$

This is the **fundamental constraint** on direction cosines.

### 2.2 Consequences

- Not all three direction cosines can be zero
- If $l = 1$, then $m = n = 0$ (line along X-axis)
- $|l| \leq 1$, $|m| \leq 1$, $|n| \leq 1$

---

## 3. Direction Ratios

### 3.1 Definition

Any three numbers $a$, $b$, $c$ (not all zero) **proportional** to the direction cosines $l$, $m$, $n$ are called **direction ratios** (DRs) of the line:

$$\frac{l}{a} = \frac{m}{b} = \frac{n}{c} = k \text{ (say)}$$

So $l = ka$, $m = kb$, $n = kc$.

Using $l^2+m^2+n^2=1$: $k^2(a^2+b^2+c^2)=1$, thus $k = \pm\frac{1}{\sqrt{a^2+b^2+c^2}}$.

### 3.2 Note on Non-Uniqueness

- Direction ratios of a line are **not unique** — any scalar multiple of $(a,b,c)$ also gives DRs
- Direction cosines are **unique** (up to sign)

### 3.3 Direction Ratios of Axes

| Line/Axis | Direction Ratios | Direction Cosines |
|-----------|-----------------|-------------------|
| X-axis | $(1, 0, 0)$ | $(1, 0, 0)$ |
| Y-axis | $(0, 1, 0)$ | $(0, 1, 0)$ |
| Z-axis | $(0, 0, 1)$ | $(0, 0, 1)$ |
| Main diagonal of cube | $(1, 1, 1)$ | $\left(\frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}\right)$ |

---

## 4. Relation Between Direction Cosines and Ratios

Given DRs $(a, b, c)$, the corresponding DCs are:

$$\boxed{l = \pm\frac{a}{\sqrt{a^2+b^2+c^2}},\quad m = \pm\frac{b}{\sqrt{a^2+b^2+c^2}},\quad n = \pm\frac{c}{\sqrt{a^2+b^2+c^2}}}$$

The $\pm$ sign is chosen based on the direction convention.

**Example:** If DRs are $(2, -3, 6)$:

$\sqrt{4+9+36} = 7$

$$l = \frac{2}{7}, \quad m = -\frac{3}{7}, \quad n = \frac{6}{7}$$

**Verification:** $\frac{4}{49} + \frac{9}{49} + \frac{36}{49} = \frac{49}{49} = 1$ ✓

---

## 5. Direction Cosines of a Line Through Two Points

### 5.1 Formula

For line through $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$:

**Direction ratios:** $a = x_2-x_1$, $b = y_2-y_1$, $c = z_2-z_1$

**Direction cosines:**

$$l = \frac{x_2-x_1}{PQ}, \quad m = \frac{y_2-y_1}{PQ}, \quad n = \frac{z_2-z_1}{PQ}$$

where $PQ = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$.

**Example:** Line through $A(1, 2, -1)$ and $B(3, -1, 4)$:

DRs: $(2, -3, 5)$, $|AB| = \sqrt{4+9+25} = \sqrt{38}$

DCs: $\left(\frac{2}{\sqrt{38}}, \frac{-3}{\sqrt{38}}, \frac{5}{\sqrt{38}}\right)$

---

## 6. Angle Between Two Lines

### 6.1 Formula Using Direction Cosines

If lines $L_1$ and $L_2$ have DCs $(l_1,m_1,n_1)$ and $(l_2,m_2,n_2)$:

$$\boxed{\cos\theta = |l_1l_2 + m_1m_2 + n_1n_2|}$$

### 6.2 Formula Using Direction Ratios

If lines have DRs $(a_1,b_1,c_1)$ and $(a_2,b_2,c_2)$:

$$\cos\theta = \frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\cdot\sqrt{a_2^2+b_2^2+c_2^2}}$$

**Proof:** This follows directly from the dot product formula: $\vec{u}\cdot\vec{v} = |\vec{u}||\vec{v}|\cos\theta$.

---

## 7. Perpendicularity and Parallelism

### 7.1 Perpendicular Lines

$$l_1l_2 + m_1m_2 + n_1n_2 = 0$$

or: $a_1a_2 + b_1b_2 + c_1c_2 = 0$

### 7.2 Parallel Lines

$$\frac{l_1}{l_2} = \frac{m_1}{m_2} = \frac{n_1}{n_2}$$

or: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$

---

## 8. Proofs and Theorems

### 8.1 Theorem: Direction Cosines of a Line Making Equal Angles with Axes

**Problem:** Find the DCs of a line making equal angles with all three coordinate axes.

**Proof:**

Let $\alpha = \beta = \gamma$.

From $l^2 + m^2 + n^2 = 1$:

$$\cos^2\alpha + \cos^2\alpha + \cos^2\alpha = 1$$
$$3\cos^2\alpha = 1 \implies \cos\alpha = \pm\frac{1}{\sqrt{3}}$$

$$\boxed{l = m = n = \pm\frac{1}{\sqrt{3}}}$$

### 8.2 Theorem: Sum of Squares of DCs with Four Diagonals of Cube

> **Theorem:** A line makes angles $\alpha, \beta, \gamma, \delta$ with the **four diagonals** of a cube. Then: $\cos^2\alpha + \cos^2\beta + \cos^2\gamma + \cos^2\delta = \frac{4}{3}$

**Proof:**

Let the cube have vertices at origin $O(0,0,0)$ and extending to $P(a,a,a)$.

The **four main diagonals** of the unit cube connect:
- $O(0,0,0)$ to $P(a,a,a)$ — DRs: $(1,1,1)$
- $A(a,0,0)$ to $L(0,a,a)$ — DRs: $(-1,1,1)$
- $B(0,a,0)$ to $M(a,0,a)$ — DRs: $(1,-1,1)$
- $C(0,0,a)$ to $N(a,a,0)$ — DRs: $(1,1,-1)$

DCs of the four diagonals are:

$$d_1 = \frac{1}{\sqrt{3}}(1,1,1),\quad d_2 = \frac{1}{\sqrt{3}}(-1,1,1)$$
$$d_3 = \frac{1}{\sqrt{3}}(1,-1,1),\quad d_4 = \frac{1}{\sqrt{3}}(1,1,-1)$$

Let our line have DCs $(l, m, n)$. Then:

$$\cos\alpha = \frac{l+m+n}{\sqrt{3}},\quad \cos\beta = \frac{-l+m+n}{\sqrt{3}}$$
$$\cos\gamma = \frac{l-m+n}{\sqrt{3}},\quad \cos\delta = \frac{l+m-n}{\sqrt{3}}$$

$$\cos^2\alpha + \cos^2\beta + \cos^2\gamma + \cos^2\delta$$

$$= \frac{1}{3}\left[(l+m+n)^2 + (-l+m+n)^2 + (l-m+n)^2 + (l+m-n)^2\right]$$

Expanding each:

$(l+m+n)^2 = l^2+m^2+n^2+2lm+2mn+2ln$

$(-l+m+n)^2 = l^2+m^2+n^2-2lm+2mn-2ln$

$(l-m+n)^2 = l^2+m^2+n^2-2lm-2mn+2ln$

$(l+m-n)^2 = l^2+m^2+n^2+2lm-2mn-2ln$

**Sum** = $4(l^2+m^2+n^2) = 4 \cdot 1 = 4$

Therefore:

$$\cos^2\alpha + \cos^2\beta + \cos^2\gamma + \cos^2\delta = \frac{4}{3} \quad \blacksquare$$

---

## 9. Solved Examples

### Example 9.1 — Direction Cosines from DRs

If DRs of a line are $2$, $-1$, $2$, find its DCs.

$\sqrt{4+1+4} = 3$

$$l = \frac{2}{3},\quad m = -\frac{1}{3},\quad n = \frac{2}{3}$$

Check: $\frac{4}{9}+\frac{1}{9}+\frac{4}{9} = 1$ ✓

---

### Example 9.2 — Angle Between Lines

Find the angle between lines with DRs $(1, 2, 2)$ and $(2, -3, 6)$.

$$\cos\theta = \frac{|1(2)+2(-3)+2(6)|}{\sqrt{9}\cdot\sqrt{49}} = \frac{|2-6+12|}{3\cdot 7} = \frac{8}{21}$$

$$\theta = \cos^{-1}\left(\frac{8}{21}\right) \approx 67.6°$$

---

### Example 9.3 — Are Lines Perpendicular?

Are lines with DRs $(3, 1, -2)$ and $(1, -3, -1/2)$ perpendicular?

$3(1) + 1(-3) + (-2)(-1/2) = 3 - 3 + 1 = 1 \neq 0$

→ **Not perpendicular.**

---

### Example 9.4 — Parallel Lines

Are lines $\frac{x-1}{2} = \frac{y-2}{3} = \frac{z-3}{4}$ and $\frac{x-2}{4} = \frac{y-3}{6} = \frac{z-4}{8}$ parallel?

DRs of $L_1$: $(2,3,4)$, DRs of $L_2$: $(4,6,8) = 2(2,3,4)$

→ **Parallel** (proportional DRs). ✓

---

### Example 9.5 — Line Through Two Points

Find DCs of the line joining $P(1, -1, 3)$ and $Q(3, 2, -1)$.

DRs: $(2, 3, -4)$, $|PQ| = \sqrt{4+9+16} = \sqrt{29}$

$$l = \frac{2}{\sqrt{29}},\quad m = \frac{3}{\sqrt{29}},\quad n = \frac{-4}{\sqrt{29}}$$

---

### Example 9.6 — Equal Angle Problem

Find the DCs of a line equally inclined to the axes.

From § 8.1: $\cos\alpha = \pm\frac{1}{\sqrt{3}}$

DCs: $\pm\left(\frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}\right)$

---

## 10. References

1. **R. D. Sharma** — *Coordinate Geometry*, Ch. 3D
2. **Thomas, G. B.** — *Calculus*, 3D Analytic Geometry chapters
3. **Apostol, T. M.** — *Calculus*, Vol. 2, Chapter on Vectors
4. [MathWorld — Direction Cosine](https://mathworld.wolfram.com/DirectionCosine.html)
5. [Khan Academy — 3D Vectors](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces)
6. [Paul's Online Notes — 3D Space Direction Cosines](https://tutorial.math.lamar.edu/classes/calcii/3dintro.aspx)
7. [LibreTexts — Direction Angles and Cosines](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/12%3A_Vectors_in_Space/12.02%3A_Vectors_in_Three_Dimensions)

---

*[← Prev: 3D Coordinate System](./06_3D_Coordinate_System.md) | [Next: Straight Lines in 3D →](./08_Straight_Lines_3D.md)*
