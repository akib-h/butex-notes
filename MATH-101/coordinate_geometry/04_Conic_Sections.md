# 📌 Topic 4: Conic Sections

> **Course:** Coordinate Geometry | **Date:** April 05, 2026
> **[← Back to Index](./README.md)**

---

## 📋 Table of Contents

1. [Introduction — What is a Conic?](#1-introduction--what-is-a-conic)
2. [Focus-Directrix Definition](#2-focus-directrix-definition)
3. [Circle](#3-circle)
4. [Parabola](#4-parabola)
5. [Ellipse](#5-ellipse)
6. [Hyperbola](#6-hyperbola)
7. [Polar Equation of a Conic](#7-polar-equation-of-a-conic)
8. [Tangents and Normals](#8-tangents-and-normals)
9. [Solved Examples](#9-solved-examples)
10. [References](#10-references)

---

## 1. Introduction — What is a Conic?

A **conic section** (or simply a **conic**) is the curve obtained by intersecting a **double right circular cone** with a **plane**:

```
         *
        /|\
       / | \
      /  |  \
     *---+---*  ← Ellipse (tilted cut)
      \  |  /
       \ | /   ← Circle (horizontal cut)
        \|/
         *    ← Point (through apex)
        /|\
       / | \  ← Hyperbola (vertical cut)
      /  |  \
```

> 📷 Reference: https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Conic_Sections.svg/300px-Conic_Sections.svg.png

| Cut Angle | Resulting Curve |
|-----------|----------------|
| Parallel to base | Circle |
| Tilted (not through apex) | Ellipse |
| Parallel to slant | Parabola |
| Through both nappes | Hyperbola |
| Through apex | Degenerate (point/line) |

---

## 2. Focus-Directrix Definition

### 2.1 Unified Definition

A conic is the locus of a point $P$ such that its distance from a fixed point (**focus** $F$) bears a **constant ratio** $e$ (**eccentricity**) to its perpendicular distance from a fixed line (**directrix** $D$):

$$\frac{PF}{PD} = e = \text{constant}$$

### 2.2 Classification by Eccentricity

| $e$ | Conic |
|-----|-------|
| $e = 0$ | Circle |
| $0 < e < 1$ | Ellipse |
| $e = 1$ | Parabola |
| $e > 1$ | Hyperbola |

---

## 3. Circle

### 3.1 Standard Equation

Center $(h, k)$, radius $r$:

$$\boxed{(x-h)^2 + (y-k)^2 = r^2}$$

Center at origin:

$$x^2 + y^2 = r^2$$

### 3.2 General Equation

$$x^2 + y^2 + 2gx + 2fy + c = 0$$

- **Center:** $(-g, -f)$
- **Radius:** $r = \sqrt{g^2 + f^2 - c}$ (real if $g^2 + f^2 > c$)

### 3.3 Conditions

| $g^2+f^2-c$ | Type |
|-------------|------|
| $> 0$ | Real circle |
| $= 0$ | Point circle |
| $< 0$ | Imaginary circle |

### 3.4 Properties

- Eccentricity: $e = 0$
- Every diameter is an axis of symmetry
- Equation in general form: $a = b$, $h = 0$ (coefficients of $x^2$ and $y^2$ equal, no $xy$ term)

### 3.5 Equation of Tangent

At point $(x_1, y_1)$ on circle $x^2+y^2+2gx+2fy+c=0$:

$$xx_1 + yy_1 + g(x+x_1) + f(y+y_1) + c = 0$$

---

## 4. Parabola

### 4.1 Definition

A parabola is the locus of a point $P$ equidistant from the focus $F$ and the directrix $D$. ($e = 1$)

### 4.2 Standard Parabola $y^2 = 4ax$

- **Focus:** $F = (a, 0)$
- **Directrix:** $x = -a$
- **Vertex:** $O = (0, 0)$
- **Axis:** X-axis
- **Latus rectum:** Chord through focus perpendicular to axis, length $= 4a$

```
         |        * (a, 2a)
         |       /
         |      /
  D      F----*-------> x
  x=-a   (a,0) \
                \
                 * (a, -2a)
```

### 4.3 All Standard Forms

| Equation | Opens | Focus | Directrix | Vertex |
|----------|-------|-------|-----------|--------|
| $y^2 = 4ax$ | Right | $(a,0)$ | $x=-a$ | $(0,0)$ |
| $y^2 = -4ax$ | Left | $(-a,0)$ | $x=a$ | $(0,0)$ |
| $x^2 = 4ay$ | Up | $(0,a)$ | $y=-a$ | $(0,0)$ |
| $x^2 = -4ay$ | Down | $(0,-a)$ | $y=a$ | $(0,0)$ |

### 4.4 Parametric Form

For $y^2 = 4ax$: any point $P = (at^2, 2at)$, $t \in \mathbb{R}$

### 4.5 Equation of Tangent

At $(at^2, 2at)$: $\quad ty = x + at^2$

In slope form ($m$): $\quad y = mx + \frac{a}{m}$

### 4.6 Derivation of $y^2 = 4ax$

Let $P = (x, y)$, focus $F = (a, 0)$, directrix $x = -a$.

$$PF = \sqrt{(x-a)^2 + y^2}$$

$$PD = x + a \quad \text{(perpendicular to directrix)}$$

Since $PF = PD$ (eccentricity = 1):

$$(x-a)^2 + y^2 = (x+a)^2$$

$$y^2 = (x+a)^2 - (x-a)^2 = 4ax$$

$$\boxed{y^2 = 4ax}$$

---

## 5. Ellipse

### 5.1 Definition

An ellipse is the locus of a point $P$ such that $PF_1 + PF_2 = 2a$ (constant), where $F_1, F_2$ are two foci. ($0 < e < 1$)

### 5.2 Standard Equation

$$\boxed{\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1}, \quad a > b > 0$$

where $b^2 = a^2(1-e^2)$ and $c = ae$ (distance from center to focus).

### 5.3 Key Elements

| Element | Formula |
|---------|---------|
| Center | $(0, 0)$ |
| Vertices (major) | $(\pm a, 0)$ |
| Vertices (minor) | $(0, \pm b)$ |
| Foci | $(\pm c, 0)$ where $c = \sqrt{a^2-b^2}$ |
| Eccentricity | $e = c/a < 1$ |
| Directrices | $x = \pm a/e$ |
| Latus rectum length | $2b^2/a$ |

```
               b
    -----F₁---O---F₂-----  major axis (length 2a)
    -a        |        a   → x
              b
          minor axis (length 2b)
```

### 5.4 Parametric Form

$$x = a\cos t, \quad y = b\sin t, \quad 0 \leq t < 2\pi$$

### 5.5 Equation of Tangent

At $(x_1, y_1)$ on the ellipse:

$$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$$

In slope form: $y = mx \pm \sqrt{a^2m^2 + b^2}$

### 5.6 Ellipse with Major Axis Along Y-axis

When $b > a$ in $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ (where $b > a$):

- Foci: $(0, \pm\sqrt{b^2-a^2})$
- Major axis along Y-axis

---

## 6. Hyperbola

### 6.1 Definition

A hyperbola is the locus of point $P$ such that $|PF_1 - PF_2| = 2a$ (constant). ($e > 1$)

### 6.2 Standard Equation

$$\boxed{\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1}$$

where $b^2 = a^2(e^2 - 1)$ and $c = ae$ (focus distance).

### 6.3 Key Elements

| Element | Formula |
|---------|---------|
| Center | $(0, 0)$ |
| Vertices | $(\pm a, 0)$ |
| Foci | $(\pm c, 0)$ where $c = \sqrt{a^2+b^2}$ |
| Eccentricity | $e = c/a > 1$ |
| Asymptotes | $y = \pm(b/a)x$ |
| Latus rectum | $2b^2/a$ |

### 6.4 Asymptotes

The lines $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$, i.e., $y = \pm\frac{b}{a}x$.

The hyperbola approaches but **never touches** the asymptotes.

### 6.5 Rectangular Hyperbola

When $a = b$: $x^2 - y^2 = a^2$ with asymptotes $y = \pm x$.

When axes are the asymptotes: $xy = c^2$ (rectangular hyperbola).

### 6.6 Conjugate Hyperbola

To $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, the conjugate is $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$.

They share the same asymptotes.

### 6.7 Parametric Form

$$x = a\sec t, \quad y = b\tan t$$

or: $x = a\cosh t$, $y = b\sinh t$

---

## 7. Polar Equation of a Conic

Taking the **focus as pole** and the axis as polar axis:

$$\boxed{r = \frac{l}{1 - e\cos\theta}}$$

where $l = b^2/a$ is the **semi-latus rectum**.

| $e$ | Conic |
|-----|-------|
| $< 1$ | Ellipse |
| $= 1$ | Parabola |
| $> 1$ | Hyperbola |

For different orientations:

| Equation | Directrix position |
|----------|--------------------|
| $r = \frac{l}{1-e\cos\theta}$ | Left of focus |
| $r = \frac{l}{1+e\cos\theta}$ | Right of focus |
| $r = \frac{l}{1-e\sin\theta}$ | Below focus |
| $r = \frac{l}{1+e\sin\theta}$ | Above focus |

---

## 8. Tangents and Normals

### 8.1 General Tangent Condition

Line $y = mx + c$ is tangent to conic $S = 0$ if discriminant of resulting quadratic = 0.

| Conic | Tangent condition |
|-------|------------------|
| $x^2+y^2=r^2$ | $c^2 = r^2(1+m^2)$ |
| $y^2=4ax$ | $c = a/m$ |
| $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ | $c^2 = a^2m^2+b^2$ |
| $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | $c^2 = a^2m^2-b^2$ |

### 8.2 Normal at a Point

The normal is perpendicular to the tangent at the same point.

For ellipse at $(x_1, y_1)$:

$$\frac{x - x_1}{\frac{x_1}{a^2}} = \frac{y - y_1}{\frac{y_1}{b^2}} \implies \frac{a^2 x}{x_1} - \frac{b^2 y}{y_1} = a^2 - b^2$$

---

## 9. Solved Examples

### Example 9.1 — Parabola from Focus and Directrix

Find the equation of the parabola with focus $(3, 0)$ and directrix $x = -3$.

**Solution:** $a = 3$, so $y^2 = 4 \cdot 3 \cdot x = 12x$.

$$\boxed{y^2 = 12x}$$

---

### Example 9.2 — Ellipse Properties

Find the foci, eccentricity, and latus rectum of $\frac{x^2}{25} + \frac{y^2}{9} = 1$.

**Solution:** $a^2 = 25$, $b^2 = 9$, so $a=5$, $b=3$.

$c = \sqrt{25-9} = 4$

- **Foci:** $(\pm 4, 0)$
- **Eccentricity:** $e = 4/5 = 0.8$
- **Latus rectum:** $\frac{2b^2}{a} = \frac{18}{5} = 3.6$ units

---

### Example 9.3 — Hyperbola

Find the asymptotes and eccentricity of $\frac{x^2}{16} - \frac{y^2}{9} = 1$.

**Solution:** $a=4$, $b=3$, $c=\sqrt{16+9}=5$

- **Eccentricity:** $e = 5/4 = 1.25$
- **Asymptotes:** $y = \pm\frac{3}{4}x$ i.e., $3x \pm 4y = 0$

---

### Example 9.4 — Tangent to Parabola

Find the tangent to $y^2 = 8x$ with slope $2$.

**Solution:** $4a = 8 \Rightarrow a = 2$. Tangent: $y = mx + a/m = 2x + 1$.

$$\boxed{y = 2x + 1}$$

---

### Example 9.5 — Polar Conic

Find the conic with focus at pole, semi-latus rectum $3$, eccentricity $1/2$.

$$r = \frac{3}{1 - \frac{1}{2}\cos\theta} = \frac{6}{2 - \cos\theta}$$

Since $e = 1/2 < 1$, this is an **ellipse**.

---

## 10. References

1. **G. B. Thomas** — *Thomas' Calculus*, 14th ed., Pearson
2. **S. L. Loney** — *The Elements of Coordinate Geometry*
3. **Apostol, T. M.** — *Calculus*, Vol. 1, Wiley
4. [Khan Academy — Conic Sections](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:conics)
5. [MathWorld — Conic Section](https://mathworld.wolfram.com/ConicSection.html)
6. [Paul's Online Notes — Conic Sections](https://tutorial.math.lamar.edu/classes/calcii/conicsections.aspx)
7. [Brilliant.org — Conics](https://brilliant.org/wiki/conics/)
8. [GeoGebra — Conic Applets](https://www.geogebra.org/resource/MXeJeYGX/iWJzxg9GNsDtFZST/material-MXeJeYGX.png)

---

*[← Prev: General Equation](./03_General_Equation_Second_Degree.md) | [Next: Identification of Conics →](./05_Identification_of_Conics.md)*
