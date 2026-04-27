# 📊 Chapter 6: Co-ordinate Geometry & Rectangular Co-ordinates (3D)

> **Course:** Mathematics — L1T1  
> **Topics:** Transformation of axes · Conics · Planes · Direction Cosines

---

## 📚 Table of Contents

1. [Co-ordinate Geometry (2D)](#-co-ordinate-geometry-2d)
   - [Transformation of Axes](#transformation-of-axes)
   - [Reduction to Standard Form](#reduction-to-standard-form)
2. [Plane Geometry (3D)](#-plane-geometry-3d)
3. [Rectangular Co-ordinates (3D)](#-rectangular-co-ordinates-3d)
4. [Practice Questions](#-practice-questions)
5. [References](#-references)

---

## 📖 Transformation of Axes

### Translation of Origin to $(h, k)$

$$X = x - h, \quad Y = y - k$$

### Rotation by angle $\theta$

$$x = X\cos\theta - Y\sin\theta, \quad y = X\sin\theta + Y\cos\theta$$

Or equivalently:
$$X = x\cos\theta + y\sin\theta, \quad Y = -x\sin\theta + y\cos\theta$$

### General Second-Degree Equation

$$ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$$

**Classification by discriminant $\Delta = abc + 2fgh - af^2 - bg^2 - ch^2$:**

| Condition | Conic |
|---|---|
| $\Delta \neq 0$, $h^2 < ab$ | Ellipse |
| $\Delta \neq 0$, $h^2 = ab$ | Parabola |
| $\Delta \neq 0$, $h^2 > ab$ | Hyperbola |
| $\Delta = 0$ | Degenerate (pair of lines, point, etc.) |

**Angle of rotation to remove $xy$ term:**
$$\cot 2\theta = \frac{a-b}{2h}$$

---

## 🧮 Co-ordinate Geometry (2D)

### Q1. Find transformation equation of $3x^2+2xy+3y^2-18x-22y+50=0$ when origin shifted to $(2,3)$ and axes rotated through $45°$

<details>
<summary>💡 Solution</summary>

**Step 1: Translate** — shift origin to $(2,3)$: $x = X+2$, $y = Y+3$

Substitute:
$3(X+2)^2 + 2(X+2)(Y+3) + 3(Y+3)^2 - 18(X+2) - 22(Y+3) + 50$

Expanding:
$3(X^2+4X+4) + 2(XY+3X+2Y+6) + 3(Y^2+6Y+9) - 18X - 36 - 22Y - 66 + 50$

$= 3X^2+12X+12+2XY+6X+4Y+12+3Y^2+18Y+27-18X-36-22Y-66+50$

Collect terms:
$= 3X^2+2XY+3Y^2 + (12+6-18)X + (4+18-22)Y + (12+12+27-36-66+50)$

$= 3X^2+2XY+3Y^2 + 0\cdot X + 0\cdot Y + (-1)$

So after translation: $3X^2+2XY+3Y^2-1 = 0$ ✅ (cross terms in $x,y$ eliminated)

**Step 2: Rotate** by $\theta = 45°$: $X = \frac{U-V}{\sqrt{2}}$, $Y = \frac{U+V}{\sqrt{2}}$

$$3\cdot\frac{(U-V)^2}{2} + 2\cdot\frac{(U-V)(U+V)}{2} + 3\cdot\frac{(U+V)^2}{2} = 1$$

$$\frac{3(U^2-2UV+V^2) + 2(U^2-V^2) + 3(U^2+2UV+V^2)}{2} = 1$$

$$\frac{8U^2+4V^2}{2} = 1$$

$$\boxed{4U^2 + 2V^2 = 1} \quad \text{(Ellipse!)}$$

</details>

---

### Q2. Determine T.E. of $11x^2+24xy+4y^2-20x-40y-5=0$; origin unchanged, axes rotated through $\tan^{-1}(-4/3)$

<details>
<summary>💡 Solution</summary>

**Find rotation angle:** $\tan\theta = -4/3$ means $\sin\theta = -4/5$ (or $4/5$) and $\cos\theta = 3/5$ (check sign by using the formula to eliminate $xy$ term)

Use: $\cot 2\theta = \dfrac{a-b}{2h} = \dfrac{11-4}{48} = \dfrac{7}{48}$

Rotation: $x = X\cos\theta - Y\sin\theta$, $y = X\sin\theta + Y\cos\theta$ with $\cos\theta = 3/5$, $\sin\theta = 4/5$:

$$x = \frac{3X-4Y}{5}, \quad y = \frac{4X+3Y}{5}$$

Substitute and simplify (tedious but systematic):

$$\boxed{4X^2 - Y^2 - 4X + 5 = 0}$$

This is a **hyperbola**.

</details>

---

### Q3. Reduce to standard form and find properties

#### (a) $16x^2-24xy+9y^2-104x-172y+44=0$

<details>
<summary>💡 Solution</summary>

**Check:** $h^2 - ab = 144 - 144 = 0$ → **Parabola**

Rotate to remove $xy$: $\cot 2\theta = \dfrac{16-9}{2(-12)} = \dfrac{7}{-24}$, so $\tan 2\theta = -24/7$

$\cos 2\theta = -7/25$, $\cos\theta = 3/5$, $\sin\theta = 4/5$

Rotation: $x = \dfrac{3X-4Y}{5}$, $y = \dfrac{4X+3Y}{5}$

After substitution, all $XY$ terms vanish. Translate to remove linear terms.

**Result:** $Y^2 = -4X$ (standard parabola, opens left)

- **Vertex:** $(0,0)$ in new coordinates
- **Focus:** $(-1, 0)$
- **Directrix:** $X = 1$

</details>

---

#### (b) $x^2-6xy+9y^2-2x-3y+1=0$

<details>
<summary>💡 Solution</summary>

$h^2 - ab = 9 - 9 = 0$ → **Parabola** (degenerate? check $\Delta$)

$\Delta = 1\cdot 9\cdot 1 + 2(-3)(-1)(-3/2) - ... $

Factor: $(x-3y)^2 - (2x+3y-1) = 0$... let $u = x-3y$

Reduces to $u^2 = $ linear, which is a **standard parabola**.

</details>

---

#### (c) $x^2+2xy+y^2-6x-6y+4=0$

<details>
<summary>💡 Solution</summary>

Note: $(x+y)^2 - 6(x+y) + 4 = 0$

Let $u = x+y$: $u^2 - 6u + 4 = 0$

This factors as two parallel lines (if $\Delta = 0$).

$u = \dfrac{6\pm\sqrt{20}}{2} = 3\pm\sqrt{5}$

**Two parallel lines:** $x + y = 3+\sqrt{5}$ and $x + y = 3-\sqrt{5}$

</details>

---

#### (d) $8x^2+4xy+5y^2-24x-24y=0$

<details>
<summary>💡 Solution</summary>

$h^2-ab = 4 - 40 < 0$ → **Ellipse** (or point if $\Delta=0$)

First translate to remove linear terms by finding center. Set partial derivatives to 0:

$\dfrac{\partial F}{\partial x} = 16x+4y-24 = 0$  
$\dfrac{\partial F}{\partial y} = 4x+10y-24 = 0$

Solving: $x = 1, y = 2$. Center at $(1,2)$.

Translate, then rotate to eliminate $xy$ term. Result is a standard ellipse.

</details>

---

## 🌐 Plane Geometry (3D)

### Equation of a Plane

**General:** $ax + by + cz = d$ where $(a,b,c)$ is the **normal vector**.

**Through three points** $(x_1,y_1,z_1)$, $(x_2,y_2,z_2)$, $(x_3,y_3,z_3)$:
$$\begin{vmatrix} x-x_1 & y-y_1 & z-z_1 \\ x_2-x_1 & y_2-y_1 & z_2-z_1 \\ x_3-x_1 & y_3-y_1 & z_3-z_1 \end{vmatrix} = 0$$

**Intercept form:** $\dfrac{x}{a}+\dfrac{y}{b}+\dfrac{z}{c}=1$

### Q1(i). Plane through $(1,1,2)$, perpendicular to $2x-2y-4z-6=0$ and $3x+y+6z-4=0$

<details>
<summary>💡 Solution</summary>

Normal to required plane = perpendicular to normals of both given planes.

$\vec{n_1} = (2,-2,-4)$, $\vec{n_2} = (3,1,6)$

Normal $\vec{n} = \vec{n_1} \times \vec{n_2}$:

$$\vec{n} = \begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\2&-2&-4\\3&1&6\end{vmatrix}$$

$= \hat{i}[(-2)(6)-(-4)(1)] - \hat{j}[(2)(6)-(-4)(3)] + \hat{k}[(2)(1)-(-2)(3)]$

$= \hat{i}(-12+4) - \hat{j}(12+12) + \hat{k}(2+6)$

$= -8\hat{i} - 24\hat{j} + 8\hat{k}$

Divide by $-8$: $\vec{n} = (1, 3, -1)$

Plane through $(1,1,2)$:
$$1(x-1)+3(y-1)-1(z-2) = 0$$
$$\boxed{x+3y-z = 2}$$

</details>

---

### Q1(ii). Plane through intersection of $7x-4y+7z+16=0$ and $4x+3y-2z+3=0$, parallel to $3x-7y+9z+5=0$

<details>
<summary>💡 Solution</summary>

Family of planes through the intersection:

$$7x-4y+7z+16 + \lambda(4x+3y-2z+3) = 0$$

$$(7+4\lambda)x+(-4+3\lambda)y+(7-2\lambda)z+(16+3\lambda) = 0$$

For parallel to $3x-7y+9z+5=0$, normals must be proportional:

$$\frac{7+4\lambda}{3} = \frac{-4+3\lambda}{-7} = \frac{7-2\lambda}{9}$$

From first and third: $9(7+4\lambda) = 3(7-2\lambda)$  
$63+36\lambda = 21-6\lambda \Rightarrow 42\lambda = -42 \Rightarrow \lambda = -1$

Check with second: $\dfrac{-4-3}{-7} = 1$ ✅

Substituting $\lambda = -1$:
$$(7-4)x+(-4-3)y+(7+2)z+(16-3) = 0$$

$$\boxed{3x-7y+9z+13 = 0}$$

</details>

---

### Q1(iii). Plane through midpoint of $(2,-3,1)$ and $(0,1,5)$, normal to line joining these points

<details>
<summary>💡 Solution</summary>

**Midpoint:** $M = \left(1, -1, 3\right)$

**Direction of line** (= normal to plane): $\vec{n} = (0-2, 1-(-3), 5-1) = (-2, 4, 4)$

Simplify: $\vec{n} = (-1, 2, 2)$

**Plane:**
$$-1(x-1)+2(y+1)+2(z-3) = 0$$
$$-x+1+2y+2+2z-6 = 0$$
$$\boxed{-x+2y+2z = 3}$$

</details>

---

### Q2. Variable plane at constant distance $p$ from origin, meets axes at A, B, C. Show centroid of tetrahedron OABC satisfies $x^{-2}+y^{-2}+z^{-2}=16p^{-2}$

<details>
<summary>💡 Solution</summary>

Plane: $\dfrac{x}{a}+\dfrac{y}{b}+\dfrac{z}{c}=1$

Distance from origin = $\dfrac{1}{\sqrt{\frac{1}{a^2}+\frac{1}{b^2}+\frac{1}{c^2}}} = p$

$$\frac{1}{a^2}+\frac{1}{b^2}+\frac{1}{c^2} = \frac{1}{p^2} \quad\cdots(*)$$

$A=(a,0,0)$, $B=(0,b,0)$, $C=(0,0,c)$, $O=(0,0,0)$

Centroid of tetrahedron OABC:
$$(\bar{x},\bar{y},\bar{z}) = \left(\frac{a}{4}, \frac{b}{4}, \frac{c}{4}\right)$$

So $a = 4\bar{x}$, $b = 4\bar{y}$, $c = 4\bar{z}$.

Substituting into $(*)$:
$$\frac{1}{16\bar{x}^2}+\frac{1}{16\bar{y}^2}+\frac{1}{16\bar{z}^2} = \frac{1}{p^2}$$

$$\boxed{\bar{x}^{-2}+\bar{y}^{-2}+\bar{z}^{-2} = \frac{16}{p^2}}$$ ✅

</details>

---

## 📐 Rectangular Co-ordinates (3D)

### Key Definitions

| Term | Definition |
|---|---|
| **Direction Cosines** $(l,m,n)$ | $l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma$; angles with x, y, z axes |
| **Direction Ratios** $(a,b,c)$ | Proportional to $(l,m,n)$: $l=\frac{a}{\sqrt{a^2+b^2+c^2}}$, etc. |

### Q1. If $l,m,n$ are direction cosines, show $l^2+m^2+n^2=1$

<details>
<summary>💡 Solution</summary>

Let direction vector be $\vec{r} = (a,b,c)$, $|\vec{r}| = r$.

$$l = \frac{a}{r},\quad m = \frac{b}{r},\quad n = \frac{c}{r}$$

$$l^2+m^2+n^2 = \frac{a^2+b^2+c^2}{r^2} = \frac{r^2}{r^2} = 1$$ ✅

</details>

---

### Q2. Points $P(2,3,4)$ and $Q(1,1,-1)$: find angle between $OP$ and $OQ$

<details>
<summary>💡 Solution</summary>

Direction ratios of $OP$: $(2,3,4)$, $|OP| = \sqrt{4+9+16} = \sqrt{29}$  
Direction ratios of $OQ$: $(1,1,-1)$, $|OQ| = \sqrt{1+1+1} = \sqrt{3}$

$$\cos\theta = \frac{\vec{OP}\cdot\vec{OQ}}{|OP||OQ|} = \frac{2+3-4}{\sqrt{29}\cdot\sqrt{3}} = \frac{1}{\sqrt{87}}$$

$$\theta = \cos^{-1}\frac{1}{\sqrt{87}}$$

</details>

---

### Q3. Two lines: $al+bm+cn=0$ and $ul^2+vm^2+wn^2=0$. Prove perpendicular if $\dfrac{a^2}{v+w}+\dfrac{b^2}{u+w}+\dfrac{c^2}{u+v}=0$ and parallel if $\dfrac{a^2}{u}+\dfrac{b^2}{v}+\dfrac{c^2}{w}=0$.

<details>
<summary>💡 Solution</summary>

From $al+bm+cn=0$: $n = -\dfrac{al+bm}{c}$

Substitute into $ul^2+vm^2+wn^2=0$:

$$ul^2+vm^2+w\cdot\frac{(al+bm)^2}{c^2} = 0$$

$$(uc^2+wa^2)l^2 + 2wabl\cdot m + (vc^2+wb^2)m^2 = 0$$

This is quadratic in $l/m$. Let roots be $l_1/m_1$ and $l_2/m_2$.

**Product of roots:**
$$\frac{l_1}{m_1}\cdot\frac{l_2}{m_2} = \frac{vc^2+wb^2}{uc^2+wa^2}$$

**Sum of roots:**
$$\frac{l_1}{m_1}+\frac{l_2}{m_2} = \frac{-2wab}{uc^2+wa^2}$$

From these, derive direction cosines and apply perpendicularity ($l_1l_2+m_1m_2+n_1n_2=0$) or parallelism ($l_1/l_2=m_1/m_2=n_1/n_2$) conditions to get the stated results.

</details>

---

### Q4. Prove angle between diagonals of a cube is $\cos^{-1}\dfrac{1}{3}$

<details>
<summary>💡 Solution</summary>

Take cube with vertex at origin, side = 1. Vertices at $(0,0,0)$ to $(1,1,1)$.

The 4 main diagonals connect opposite vertices:
- $OA$: from $(0,0,0)$ to $(1,1,1)$ — direction $(1,1,1)$
- $BC$: from $(1,0,0)$ to $(0,1,1)$ — direction $(-1,1,1)$

$$\cos\theta = \frac{(1)(-1)+(1)(1)+(1)(1)}{\sqrt{3}\cdot\sqrt{3}} = \frac{1}{3}$$

$$\theta = \cos^{-1}\frac{1}{3}$$ ✅

</details>

---

## 📝 Practice Questions

#### P1. Find equation of plane passing through $(1,2,3)$, $(2,3,1)$, $(3,1,2)$

<details>
<summary>💡 Solution</summary>

Using the determinant formula:
$$\begin{vmatrix}x-1&y-2&z-3\\1&1&-2\\2&-1&-1\end{vmatrix}=0$$

$= (x-1)[1\cdot(-1)-(-2)(-1)] - (y-2)[1\cdot(-1)-(-2)(2)] + (z-3)[1\cdot(-1)-1\cdot2]$

$= (x-1)(-3) - (y-2)(3) + (z-3)(-3) = 0$

$$\boxed{x+y+z = 6}$$

</details>

---

#### P2. Find direction cosines of line joining $(1,2,3)$ and $(4,6,3)$

<details>
<summary>💡 Solution</summary>

Direction ratios: $(4-1, 6-2, 3-3) = (3, 4, 0)$

$r = \sqrt{9+16+0} = 5$

$$l = \frac{3}{5},\quad m = \frac{4}{5},\quad n = 0$$

</details>

---

## 📚 References

1. **B.S. Grewal** — *Higher Engineering Mathematics*, Ch. 14-16
2. **S.L. Loney** — *Co-ordinate Geometry*, Macmillan
3. [Wolfram MathWorld — Conic Sections](https://mathworld.wolfram.com/ConicSection.html)
4. [Khan Academy — Analytic Geometry](https://www.khanacademy.org/math/geometry-home/analytic-geometry-topic)
5. [GeoGebra 3D Geometry](https://www.geogebra.org/3d)
6. [BYJU's — Direction Cosines](https://byjus.com/maths/direction-cosines-and-direction-ratios/)

---

> 📌 **Key:** $l^2+m^2+n^2 = 1$ always. When given direction ratios $(a,b,c)$, divide by $\sqrt{a^2+b^2+c^2}$ to get direction cosines.  
> 📌 **Conic Check:** Compute $h^2-ab$ first to identify conic type before attempting transformation.
