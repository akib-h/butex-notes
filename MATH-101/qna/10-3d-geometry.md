# 🧊 Chapter 10 — 3D Geometry

> **Course:** Mathematics-I (MS 101 / AS 101) | BUTex Level-1, Term-I  
> **Topics:** Direction cosines · Lines in space · Planes · Shortest distance · Cube diagonals  
> **Years active:** 2012 – 2019

---

## 🗺️ Navigation

| ← Prev | Home | Next → |
|--------|------|--------|
| [Ch 09 — Conics](09-analytic-geometry-conics.md) | [README](../README.md) | [Ch 11 — Complex Numbers](11-complex-numbers.md) |

---

## 📖 Theory & Key Results

> 📷 **3D Coordinate System:**  
> ![3D axes](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/3D_coordinate_system.svg/360px-3D_coordinate_system.svg.png)  
> *Image: Wikimedia Commons — right-handed 3D coordinate system*

---

### 1. Direction Cosines & Direction Ratios

If a line makes angles $\alpha,\beta,\gamma$ with the positive $x$-, $y$-, $z$-axes respectively, then:

$$l = \cos\alpha,\quad m = \cos\beta,\quad n = \cos\gamma$$

$$\boxed{l^2 + m^2 + n^2 = 1}$$

**Direction ratios** $(a,b,c)$ are proportional to $(l,m,n)$:
$$l = \frac{a}{\sqrt{a^2+b^2+c^2}},\quad m = \frac{b}{\sqrt{a^2+b^2+c^2}},\quad n = \frac{c}{\sqrt{a^2+b^2+c^2}}$$

**Angle between two lines** with direction cosines $(l_1,m_1,n_1)$ and $(l_2,m_2,n_2)$:
$$\cos\theta = |l_1l_2 + m_1m_2 + n_1n_2|$$

Lines are **perpendicular** iff $l_1l_2+m_1m_2+n_1n_2=0$;  
Lines are **parallel** iff $\dfrac{l_1}{l_2}=\dfrac{m_1}{m_2}=\dfrac{n_1}{n_2}$.

---

### 2. Line in 3D

**Symmetric (standard) form** — line through $(x_1,y_1,z_1)$ with direction $(a,b,c)$:

$$\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}=t$$

**Parametric form:**
$$x=x_1+at,\quad y=y_1+bt,\quad z=z_1+ct$$

**Distance from point $P(x_0,y_0,z_0)$ to line** through $A(x_1,y_1,z_1)$ with direction $\hat{\mathbf{d}}=(a,b,c)$:

$$d = \frac{|\overrightarrow{AP}\times\hat{\mathbf{d}}|}{|\hat{\mathbf{d}}|}$$

---

### 3. Plane

**General equation:** $ax+by+cz+d=0$ where $(a,b,c)$ is the normal vector.

**Equation of plane through point $(x_1,y_1,z_1)$ with normal $(a,b,c)$:**
$$a(x-x_1)+b(y-y_1)+c(z-z_1)=0$$

**Intercept form:**
$$\frac{x}{p}+\frac{y}{q}+\frac{z}{r}=1$$

**Distance from point $(x_0,y_0,z_0)$ to plane $ax+by+cz+d=0$:**
$$D = \frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}$$

**Angle between two planes** $a_1x+b_1y+c_1z=d_1$ and $a_2x+b_2y+c_2z=d_2$:
$$\cos\theta = \frac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\sqrt{a_2^2+b_2^2+c_2^2}}$$

---

### 4. Shortest Distance Between Skew Lines

For lines:
$$L_1:\frac{x-x_1}{a_1}=\frac{y-y_1}{b_1}=\frac{z-z_1}{c_1},\qquad L_2:\frac{x-x_2}{a_2}=\frac{y-y_2}{b_2}=\frac{z-z_2}{c_2}$$

Let $\mathbf{d}_1=(a_1,b_1,c_1)$, $\mathbf{d}_2=(a_2,b_2,c_2)$, and $\mathbf{c}=\overrightarrow{P_1P_2}=(x_2-x_1,y_2-y_1,z_2-z_1)$.

$$\text{S.D.} = \frac{|\mathbf{c}\cdot(\mathbf{d}_1\times\mathbf{d}_2)|}{|\mathbf{d}_1\times\mathbf{d}_2|}$$

> 📷 **Shortest Distance Between Skew Lines:**  
> ![Skew lines](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Skew_lines_in_tetrahedron.svg/320px-Skew_lines_in_tetrahedron.svg.png)  
> *Image: Wikimedia Commons — skew lines (do not intersect and are not parallel)*

---

### 5. Cube Diagonals — Important Result

A cube with side $a$ has four main diagonals. A line making angles $\alpha,\beta,\gamma,\delta$ with the four space diagonals satisfies:

$$\cos^2\alpha+\cos^2\beta+\cos^2\gamma+\cos^2\delta = \frac{4}{3}$$

> 📷 **Cube with diagonals:**  
> ![Cube diagonals](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hexahedron.svg/200px-Hexahedron.svg.png)  
> *Image: Wikimedia Commons — cube (hexahedron)*

**Direction cosines of four body diagonals** (unit cube $[0,1]^3$):

| Diagonal | Direction Ratios | DC |
|----------|----------------|----|
| $(0,0,0)\to(1,1,1)$ | $(1,1,1)$ | $\tfrac{1}{\sqrt3}(1,1,1)$ |
| $(1,0,0)\to(0,1,1)$ | $(-1,1,1)$ | $\tfrac{1}{\sqrt3}(-1,1,1)$ |
| $(0,1,0)\to(1,0,1)$ | $(1,-1,1)$ | $\tfrac{1}{\sqrt3}(1,-1,1)$ |
| $(0,0,1)\to(1,1,0)$ | $(1,1,-1)$ | $\tfrac{1}{\sqrt3}(1,1,-1)$ |

---

## 📝 Past Exam Questions & Solutions

---

### 🗓️ 2019 — Q8 `[4+4+4=12]`

#### (a)
> A line makes angles $\alpha,\beta,\gamma,\delta$ with the four diagonals of a cube. Prove that:
> $$\cos^2\alpha+\cos^2\beta+\cos^2\gamma+\cos^2\delta=\frac{4}{3}$$

<details>
<summary>✅ Solution</summary>

Let the line have direction cosines $(l,m,n)$ so $l^2+m^2+n^2=1$.

Direction cosines of the four body diagonals of a unit cube are:
$$\mathbf{d}_1=\tfrac{1}{\sqrt3}(1,1,1),\quad\mathbf{d}_2=\tfrac{1}{\sqrt3}(-1,1,1),\quad\mathbf{d}_3=\tfrac{1}{\sqrt3}(1,-1,1),\quad\mathbf{d}_4=\tfrac{1}{\sqrt3}(1,1,-1)$$

Then:
$$\cos\alpha=\frac{l+m+n}{\sqrt3},\quad\cos\beta=\frac{-l+m+n}{\sqrt3},\quad\cos\gamma=\frac{l-m+n}{\sqrt3},\quad\cos\delta=\frac{l+m-n}{\sqrt3}$$

$$\sum\cos^2=\frac{1}{3}\left[(l+m+n)^2+(-l+m+n)^2+(l-m+n)^2+(l+m-n)^2\right]$$

Expand each square and add:
$$(l+m+n)^2=l^2+m^2+n^2+2lm+2mn+2nl$$
$$(-l+m+n)^2=l^2+m^2+n^2-2lm+2mn-2nl$$
$$(l-m+n)^2=l^2+m^2+n^2-2lm-2mn+2nl$$
$$(l+m-n)^2=l^2+m^2+n^2+2lm-2mn-2nl$$

Sum $=4(l^2+m^2+n^2)=4\cdot 1=4$.

$$\therefore\sum\cos^2=\frac{4}{3}\qquad\blacksquare$$

</details>

---

#### (b)
> Find the equation of the plane through the point $(1,1,2)$ and perpendicular to the planes $2x-2y-4z-6=0$ and $3x+y+6z-4=0$.

<details>
<summary>✅ Solution</summary>

The required plane is perpendicular to both given planes, so its normal $\mathbf{n}$ is perpendicular to the normals of both planes:

$$\mathbf{n}_1=(2,-2,-4),\quad\mathbf{n}_2=(3,1,6)$$

$$\mathbf{n}=\mathbf{n}_1\times\mathbf{n}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\2&-2&-4\\3&1&6\end{vmatrix}$$

$$=\mathbf{i}[(-2)(6)-(-4)(1)]-\mathbf{j}[(2)(6)-(-4)(3)]+\mathbf{k}[(2)(1)-(-2)(3)]$$

$$=\mathbf{i}(-12+4)-\mathbf{j}(12+12)+\mathbf{k}(2+6)$$

$$=(-8,-24,8)$$

Simplify: $(-1,-3,1)$.

Plane through $(1,1,2)$:

$$-1(x-1)-3(y-1)+1(z-2)=0$$
$$-x+1-3y+3+z-2=0$$
$$\boxed{-x-3y+z+2=0\quad\Longleftrightarrow\quad x+3y-z-2=0}$$

</details>

---

#### (c)
> Determine the shortest distance between the straight lines:
> $$\frac{x-3}{2}=\frac{y-1}{3}=\frac{z-4}{4}\quad\text{and}\quad\frac{x-2}{3}=\frac{y-2}{4}=\frac{z-1}{5}$$

<details>
<summary>✅ Solution</summary>

$P_1=(3,1,4)$, $\mathbf{d}_1=(2,3,4)$; $P_2=(2,2,1)$, $\mathbf{d}_2=(3,4,5)$.

$\mathbf{c}=P_2-P_1=(−1,1,−3)$.

$$\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\2&3&4\\3&4&5\end{vmatrix}=\mathbf{i}(15-16)-\mathbf{j}(10-12)+\mathbf{k}(8-9)=(-1,2,-1)$$

$$|\mathbf{d}_1\times\mathbf{d}_2|=\sqrt{1+4+1}=\sqrt{6}$$

$$\mathbf{c}\cdot(\mathbf{d}_1\times\mathbf{d}_2)=(-1)(-1)+(1)(2)+(-3)(-1)=1+2+3=6$$

$$\text{S.D.}=\frac{|6|}{\sqrt6}=\frac{6}{\sqrt6}=\sqrt{6}\approx2.449$$

$$\boxed{\text{Shortest distance}=\sqrt{6}}$$

</details>

---

### 🗓️ 2018 — Q8 `[4+4+4=12]`

#### (a)
> Calculate the direction cosines of the line that makes equal angles with the coordinate axes.

<details>
<summary>✅ Solution</summary>

Let the line make angle $\alpha$ with all three axes: $l=m=n=\cos\alpha$.

$$l^2+m^2+n^2=1\Rightarrow 3\cos^2\alpha=1\Rightarrow\cos\alpha=\pm\frac{1}{\sqrt3}$$

$$\boxed{l=m=n=\frac{1}{\sqrt3}\approx0.577\quad\text{(or all negative)}}$$

The line has direction ratios $(1,1,1)$ or $(-1,-1,-1)$, i.e., the body diagonal direction of a cube. These lines make equal angles of $\arccos(1/\sqrt3)\approx54.74°$ with all three axes.

</details>

---

#### (b)
> Find the equation of the plane passing through the points $(-1,1,1)$ and $(1,-1,1)$ and perpendicular to the plane $x+2y+2z=5$.

<details>
<summary>✅ Solution</summary>

Let the plane be $ax+by+cz=d$.

**Condition 1 & 2** — passes through $(-1,1,1)$ and $(1,-1,1)$:
$$-a+b+c=d \quad\cdots(1)$$
$$a-b+c=d \quad\cdots(2)$$

Adding: $2c=2d\Rightarrow c=d$. Subtracting: $-2a+2b=0\Rightarrow a=b$.

**Condition 3** — perpendicular to $x+2y+2z=5$ (normals are perpendicular):
$$a(1)+b(2)+c(2)=0\Rightarrow a+2a+2c=0\Rightarrow 3a+2c=0\Rightarrow c=-\tfrac{3a}{2}$$

Let $a=2$: $b=2$, $c=-3$, $d=c=-3$.

Plane: $2x+2y-3z=-3$, i.e.:

$$\boxed{2x+2y-3z+3=0}$$

</details>

---

#### (c)
> Determine the shortest distance between the straight lines:
> $$\frac{x-3}{3}=\frac{y-8}{-1}=\frac{z-3}{1}\quad\text{and}\quad\frac{x+3}{-3}=\frac{y+7}{2}=\frac{z-6}{4}$$

<details>
<summary>✅ Solution</summary>

$P_1=(3,8,3)$, $\mathbf{d}_1=(3,-1,1)$; $P_2=(-3,-7,6)$, $\mathbf{d}_2=(-3,2,4)$.

$\mathbf{c}=(-6,-15,3)$.

$$\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\3&-1&1\\-3&2&4\end{vmatrix}=\mathbf{i}(-4-2)-\mathbf{j}(12+3)+\mathbf{k}(6-3)=(-6,-15,3)$$

$$|\mathbf{d}_1\times\mathbf{d}_2|=\sqrt{36+225+9}=\sqrt{270}=3\sqrt{30}$$

$$\mathbf{c}\cdot(\mathbf{d}_1\times\mathbf{d}_2)=(-6)(-6)+(-15)(-15)+(3)(3)=36+225+9=270$$

$$\text{S.D.}=\frac{270}{3\sqrt{30}}=\frac{90}{\sqrt{30}}=\frac{90\sqrt{30}}{30}=3\sqrt{30}$$

$$\boxed{\text{Shortest distance}=3\sqrt{30}\approx16.43}$$

</details>

---

### 🗓️ 2017 — Q8 `[4+4+4=12]`

#### (a)
> Find the distance of the point $(-2,3,4)$ from the line through the point $(-1,3,2)$ whose direction cosines are proportional to $12,3,-4$.

<details>
<summary>✅ Solution</summary>

$A=(-1,3,2)$, $P=(-2,3,4)$, $\mathbf{d}=(12,3,-4)$.

$\overrightarrow{AP}=(-2-(-1),3-3,4-2)=(-1,0,2)$.

$$\overrightarrow{AP}\times\mathbf{d}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\-1&0&2\\12&3&-4\end{vmatrix}=\mathbf{i}(0\cdot(-4)-2\cdot3)-\mathbf{j}((-1)(-4)-2\cdot12)+\mathbf{k}((-1)(3)-0)$$

$$=\mathbf{i}(-6)-\mathbf{j}(4-24)+\mathbf{k}(-3)=(-6,20,-3)$$

$$|\overrightarrow{AP}\times\mathbf{d}|=\sqrt{36+400+9}=\sqrt{445}$$

$$|\mathbf{d}|=\sqrt{144+9+16}=\sqrt{169}=13$$

$$d=\frac{\sqrt{445}}{13}\approx\frac{21.1}{13}\approx1.62$$

$$\boxed{d=\frac{\sqrt{445}}{13}}$$

</details>

---

#### (b)
> Find the equation of the plane through the point $(2,-3,1)$ and having a normal line joining the points $(3,4,-1)$ and $(2,-1,5)$.

<details>
<summary>✅ Solution</summary>

The normal to the plane is $\overrightarrow{PQ}=(2-3,-1-4,5-(-1))=(-1,-5,6)$.

Plane through $(2,-3,1)$:

$$-1(x-2)-5(y+3)+6(z-1)=0$$
$$-x+2-5y-15+6z-6=0$$

$$\boxed{x+5y-6z+19=0}$$

</details>

---

#### (c)
> Find the shortest distance between the lines:
> $$\frac{x-1}{2}=\frac{y-2}{3}=\frac{z-4}{4}\quad\text{and}\quad\frac{x-2}{2}=\frac{y-4}{4}=\frac{z-5}{5}$$

<details>
<summary>✅ Solution</summary>

$P_1=(1,2,4)$, $\mathbf{d}_1=(2,3,4)$; $P_2=(2,4,5)$, $\mathbf{d}_2=(2,4,5)$.

$\mathbf{c}=(1,2,1)$.

$$\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\2&3&4\\2&4&5\end{vmatrix}=\mathbf{i}(15-16)-\mathbf{j}(10-8)+\mathbf{k}(8-6)=(-1,-2,2)$$

$$|\mathbf{d}_1\times\mathbf{d}_2|=\sqrt{1+4+4}=3$$

$$\mathbf{c}\cdot(-1,-2,2)=(1)(-1)+(2)(-2)+(1)(2)=-1-4+2=-3$$

$$\text{S.D.}=\frac{|-3|}{3}=1$$

$$\boxed{\text{Shortest distance}=1}$$

</details>

---

### 🗓️ 2016 Regular — Q6 & Q8 `[4+4+4=12]`

#### Q6(a)
> Find the distance between the lines:
> $x=1+7t,\ y=3+t,\ z=5-3t$ and $x=4-t,\ y=6,\ z=7+2t$.

<details>
<summary>✅ Solution</summary>

$P_1=(1,3,5)$, $\mathbf{d}_1=(7,1,-3)$; $P_2=(4,6,7)$, $\mathbf{d}_2=(-1,0,2)$.

$\mathbf{c}=(3,3,2)$.

$$\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\7&1&-3\\-1&0&2\end{vmatrix}=\mathbf{i}(2-0)-\mathbf{j}(14-3)+\mathbf{k}(0+1)=(2,-11,1)$$

$$|\mathbf{d}_1\times\mathbf{d}_2|=\sqrt{4+121+1}=\sqrt{126}=3\sqrt{14}$$

$$\mathbf{c}\cdot(2,-11,1)=6-33+2=-25$$

$$\text{S.D.}=\frac{25}{3\sqrt{14}}=\frac{25}{3\sqrt{14}}\cdot\frac{\sqrt{14}}{\sqrt{14}}=\frac{25\sqrt{14}}{42}$$

$$\boxed{\text{Distance}=\frac{25\sqrt{14}}{42}\approx2.23}$$

</details>

---

#### Q6(b)
> Find the equation of the plane through $(-1,2,5)$ that is perpendicular to the planes $2x-y+z=1$ and $x+y-2z=3$.

<details>
<summary>✅ Solution</summary>

Normal $\mathbf{n}=\mathbf{n}_1\times\mathbf{n}_2$ where $\mathbf{n}_1=(2,-1,1)$, $\mathbf{n}_2=(1,1,-2)$:

$$\mathbf{n}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\2&-1&1\\1&1&-2\end{vmatrix}=\mathbf{i}(2-1)-\mathbf{j}(-4-1)+\mathbf{k}(2+1)=(1,5,3)$$

Plane through $(-1,2,5)$:
$$1(x+1)+5(y-2)+3(z-5)=0$$
$$x+1+5y-10+3z-15=0$$

$$\boxed{x+5y+3z-24=0}$$

</details>

---

#### Q8(a)
> Find the equation of the straight line that passes through the point $(-1,1,2)$ and is parallel to the line joining $(2,2,3)$ and $(1,0,2)$.

<details>
<summary>✅ Solution</summary>

Direction of the joining line: $(1-2,0-2,2-3)=(-1,-2,-1)$.

Line through $(-1,1,2)$ parallel to $(-1,-2,-1)$:

$$\boxed{\frac{x+1}{-1}=\frac{y-1}{-2}=\frac{z-2}{-1}\quad\Longleftrightarrow\quad\frac{x+1}{1}=\frac{y-1}{2}=\frac{z-2}{1}}$$

</details>

---

#### Q8(b)
> Find the angle between lines joining $P(1,1,3)$, $Q(2,3,0)$ and $R(2,4,3)$, $S(3,5,2)$.

<details>
<summary>✅ Solution</summary>

$\mathbf{d}_1=\overrightarrow{PQ}=(1,2,-3)$; $\mathbf{d}_2=\overrightarrow{RS}=(1,1,-1)$.

$$\cos\theta=\frac{|\mathbf{d}_1\cdot\mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}=\frac{|1+2+3|}{\sqrt{1+4+9}\sqrt{1+1+1}}=\frac{6}{\sqrt{14}\cdot\sqrt3}=\frac{6}{\sqrt{42}}$$

$$\theta=\arccos\!\left(\frac{6}{\sqrt{42}}\right)=\arccos(0.926)\approx22.2°$$

$$\boxed{\theta\approx22.2°}$$

</details>

---

#### Q8(c)
> Find the equation of the plane through $(1,-2,1)$ perpendicular to the line with direction ratios $2,3,5$.

<details>
<summary>✅ Solution</summary>

Normal is $(2,3,5)$. Plane through $(1,-2,1)$:

$$2(x-1)+3(y+2)+5(z-1)=0$$
$$2x-2+3y+6+5z-5=0$$

$$\boxed{2x+3y+5z-1=0}$$

</details>

---

### 🗓️ 2016 Supplementary — Q3 & Q4 `[5.5+6+6=17.5]`

#### Q3(a)
> Show that the acute angle between any two diagonals of a cube is $\cos^{-1}(1/3)$.

<details>
<summary>✅ Solution</summary>

Using the four diagonal directions from §5 above, take any two:

$\mathbf{d}_1=(1,1,1)$ and $\mathbf{d}_2=(-1,1,1)$.

$$\cos\theta=\frac{|\mathbf{d}_1\cdot\mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}=\frac{|-1+1+1|}{\sqrt3\cdot\sqrt3}=\frac{1}{3}$$

$$\boxed{\theta=\cos^{-1}\!\left(\frac{1}{3}\right)\approx70.5°}$$

By symmetry of the cube, this is the same for all pairs. $\blacksquare$

</details>

---

#### Q3(b)
> Find the equation of the plane that passes through $(2,-3,1)$ and has normal line parallel to the vector joining $(3,4,-1)$ and $(2,-1,5)$.

<details>
<summary>✅ Solution</summary>

Normal direction: $(2-3,-1-4,5+1)=(-1,-5,6)$.

Plane through $(2,-3,1)$:
$$-1(x-2)-5(y+3)+6(z-1)=0 \implies \boxed{x+5y-6z+19=0}$$

</details>

---

#### Q3(c)
> Find the distance of the point $(-1,2,5)$ from the line through $(3,4,5)$ whose direction cosines are proportional to $2,-3,6$.

<details>
<summary>✅ Solution</summary>

$A=(3,4,5)$, $P=(-1,2,5)$, $\mathbf{d}=(2,-3,6)$.

$\overrightarrow{AP}=(-4,-2,0)$.

$$\overrightarrow{AP}\times\mathbf{d}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\-4&-2&0\\2&-3&6\end{vmatrix}=\mathbf{i}(-12-0)-\mathbf{j}(-24-0)+\mathbf{k}(12+4)=(-12,24,16)$$

$$|\overrightarrow{AP}\times\mathbf{d}|=\sqrt{144+576+256}=\sqrt{976}=4\sqrt{61}$$

$$|\mathbf{d}|=\sqrt{4+9+36}=7$$

$$d=\frac{4\sqrt{61}}{7}\approx\frac{31.2}{7}\approx4.46$$

$$\boxed{d=\frac{4\sqrt{61}}{7}}$$

</details>

---

### 🗓️ 2015 — Q3 & Q4 `[6+5.5+6=17.5]`

#### Q3(a)
> Given three points $A(2,1,3)$, $B(4,4,-3)$ and $C(K,10,-15)$:
> (i) Find the value of $K$ for which $A,B,C$ are collinear.
> (ii) Find the value of $K$ so that $AB\perp BC$.

<details>
<summary>✅ Solution</summary>

$\overrightarrow{AB}=(2,3,-6)$, $\overrightarrow{AC}=(K-2,9,-18)$.

**(i) Collinear:** $\overrightarrow{AC}=\lambda\overrightarrow{AB}$:
$$\frac{K-2}{2}=\frac{9}{3}=\frac{-18}{-6}=3\Rightarrow K-2=6\Rightarrow\boxed{K=8}$$

**(ii) $AB\perp BC$:** $\overrightarrow{BC}=(K-4,6,-12)$.
$$\overrightarrow{AB}\cdot\overrightarrow{BC}=0$$
$$2(K-4)+3(6)+(-6)(-12)=0$$
$$2K-8+18+72=0$$
$$2K+82=0\Rightarrow\boxed{K=-41}$$

</details>

---

#### Q3(b)
> Find the direction cosines of the line which is equally inclined to the coordinate axes.

<details>
<summary>✅ Solution</summary>

If $\alpha=\beta=\gamma$, then $l=m=n$ and $3l^2=1\Rightarrow l=\pm\dfrac{1}{\sqrt3}$.

$$\boxed{l=m=n=\pm\frac{1}{\sqrt3}}$$

</details>

---

#### Q4(b)
> Find the shortest distance between the lines:
> $$\frac{x-4}{2}=\frac{y+2}{1}=\frac{z-3}{-1}\quad\text{and}\quad\frac{x+7}{3}=\frac{y+2}{2}=\frac{z-1}{-1}$$

<details>
<summary>✅ Solution</summary>

$P_1=(4,-2,3)$, $\mathbf{d}_1=(2,1,-1)$; $P_2=(-7,-2,1)$, $\mathbf{d}_2=(3,2,-1)$.

$\mathbf{c}=(-11,0,-2)$.

$$\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\2&1&-1\\3&2&-1\end{vmatrix}=\mathbf{i}(-1+2)-\mathbf{j}(-2+3)+\mathbf{k}(4-3)=(1,-1,1)$$

$$|\mathbf{d}_1\times\mathbf{d}_2|=\sqrt3$$

$$\mathbf{c}\cdot(1,-1,1)=-11+0-2=-13$$

$$\text{S.D.}=\frac{13}{\sqrt3}=\frac{13\sqrt3}{3}$$

$$\boxed{\text{S.D.}=\frac{13\sqrt3}{3}\approx7.51}$$

</details>

---

### 🗓️ 2014 — Q3 & Q4 `[5+6+6.5=17.5]`

#### Q3(a)
> Show that the acute angle between any two diagonals of a cube is $\cos^{-1}(1/3)$.

*(Proof identical to 2016 Supple Q3(a) above — see that solution)*

---

#### Q3(c)
> Find the shortest distance between:
> $$\frac{x-1}{2}=\frac{y-2}{3}=\frac{z-3}{4}\quad\text{and}\quad\frac{x-2}{3}=\frac{y-4}{4}=\frac{z-5}{5}$$

<details>
<summary>✅ Solution</summary>

$P_1=(1,2,3)$, $\mathbf{d}_1=(2,3,4)$; $P_2=(2,4,5)$, $\mathbf{d}_2=(3,4,5)$.

$\mathbf{c}=(1,2,2)$.

$$\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\2&3&4\\3&4&5\end{vmatrix}=(15-16)\mathbf{i}-(10-12)\mathbf{j}+(8-9)\mathbf{k}=(-1,2,-1)$$

$$|\mathbf{d}_1\times\mathbf{d}_2|=\sqrt{1+4+1}=\sqrt6$$

$$\mathbf{c}\cdot(-1,2,-1)=-1+4-2=1$$

$$\boxed{\text{S.D.}=\frac{1}{\sqrt6}=\frac{\sqrt6}{6}\approx0.408}$$

</details>

---

#### Q4(a)
> Find the distance of the point $(1,3,4)$ from the line through $(2,3,-5)$ having direction cosines proportional to $(1,-2,2)$.

<details>
<summary>✅ Solution</summary>

$A=(2,3,-5)$, $P=(1,3,4)$, $\mathbf{d}=(1,-2,2)$.

$\overrightarrow{AP}=(-1,0,9)$.

$$\overrightarrow{AP}\times\mathbf{d}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\-1&0&9\\1&-2&2\end{vmatrix}=\mathbf{i}(0+18)-\mathbf{j}(-2-9)+\mathbf{k}(2-0)=(18,11,2)$$

$$|\overrightarrow{AP}\times\mathbf{d}|=\sqrt{324+121+4}=\sqrt{449}$$

$$|\mathbf{d}|=\sqrt{1+4+4}=3$$

$$\boxed{d=\frac{\sqrt{449}}{3}\approx7.06}$$

</details>

---

### 🗓️ 2013 Supplementary — Q7 & Q8 `[various marks]`

#### Q7(a)
> Show that $(4,3,-1)$, $(-1,4,7)$ and $(3/2,7/2,3)$ are three collinear points.

<details>
<summary>✅ Solution</summary>

Let $A=(4,3,-1)$, $B=(-1,4,7)$, $C=(3/2,7/2,3)$.

$\overrightarrow{AB}=(-5,1,8)$, $\overrightarrow{AC}=(-5/2,1/2,4)=\dfrac{1}{2}\overrightarrow{AB}$.

Since $\overrightarrow{AC}$ is a scalar multiple of $\overrightarrow{AB}$ and $A$ is common, all three points are collinear. $\blacksquare$

</details>

---

#### Q8(a)
> Show that the lines $\dfrac{x-5}{4}=\dfrac{y-7}{4}=\dfrac{z+3}{-5}$ and $\dfrac{x-8}{7}=\dfrac{y-4}{1}=\dfrac{z-5}{3}$ are coplanar. Also find their common point and the equation of the plane containing them.

<details>
<summary>✅ Solution</summary>

$P_1=(5,7,-3)$, $\mathbf{d}_1=(4,4,-5)$; $P_2=(8,4,5)$, $\mathbf{d}_2=(7,1,3)$.

$\mathbf{c}=(3,-3,8)$.

**Coplanar condition:** $\mathbf{c}\cdot(\mathbf{d}_1\times\mathbf{d}_2)=0$.

$$\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\4&4&-5\\7&1&3\end{vmatrix}=\mathbf{i}(12+5)-\mathbf{j}(12+35)+\mathbf{k}(4-28)=(17,-47,-24)$$

$$\mathbf{c}\cdot(17,-47,-24)=3(17)+(-3)(-47)+8(-24)=51+141-192=0\quad\checkmark$$

**Common point:** From $L_1$: $x=5+4t$, $y=7+4t$, $z=-3-5t$. From $L_2$: $x=8+7s$, $y=4+s$, $z=5+3s$.

$5+4t=8+7s\Rightarrow4t-7s=3$ ... (i)  
$7+4t=4+s\Rightarrow4t-s=−3$ ... (ii)

(i)-(ii): $-6s=6\Rightarrow s=-1$; $t=(-3+s)/4=(-3-1)/4=-1$.

Point: $x=5-4=1$, $y=7-4=3$, $z=-3+5=2$ → $(1,3,2)$.

**Plane:** Normal $=(17,-47,-24)$ through $(1,3,2)$:
$$17(x-1)-47(y-3)-24(z-2)=0$$
$$\boxed{17x-47y-24z+172=0}$$

</details>

---

### 🗓️ 2012 — Q5 & Q6 `[9+8.5=17.5]`

#### Q6(a)
> Find the length and equation of the line of shortest distance between:
> $$\frac{x-2}{1}=\frac{y+3}{2}=\frac{z-5}{4}\quad\text{and}\quad\frac{x-5}{2}=\frac{y-2}{3}=\frac{z-7}{5}$$

<details>
<summary>✅ Solution</summary>

$P_1=(2,-3,5)$, $\mathbf{d}_1=(1,2,4)$; $P_2=(5,2,7)$, $\mathbf{d}_2=(2,3,5)$.

$\mathbf{c}=(3,5,2)$.

$$\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\1&2&4\\2&3&5\end{vmatrix}=(10-12)\mathbf{i}-(5-8)\mathbf{j}+(3-4)\mathbf{k}=(-2,3,-1)$$

$$|\mathbf{d}_1\times\mathbf{d}_2|=\sqrt{4+9+1}=\sqrt{14}$$

$$\mathbf{c}\cdot(-2,3,-1)=-6+15-2=7$$

$$\text{S.D.}=\frac{7}{\sqrt{14}}=\frac{7}{\sqrt{14}}=\frac{\sqrt{14}}{2}\approx1.87$$

$$\boxed{\text{Length of S.D.}=\frac{\sqrt{14}}{2}}$$

The line of S.D. is parallel to $\mathbf{d}_1\times\mathbf{d}_2=(-2,3,-1)$, i.e., direction ratios $2,-3,1$.

</details>

---

## 🧪 Practice Problems

---

**P1.** A line passes through $(1,-1,2)$ with direction ratios $2,1,-2$. Find its direction cosines.

<details>
<summary>Solution</summary>

$|\mathbf{d}|=\sqrt{4+1+4}=3$.

$l=\dfrac{2}{3},\quad m=\dfrac{1}{3},\quad n=\dfrac{-2}{3}$.

Check: $\tfrac{4}{9}+\tfrac{1}{9}+\tfrac{4}{9}=1$ ✓

</details>

---

**P2.** Find the angle between the lines whose direction ratios are $(2,1,-2)$ and $(4,-1,8)$.

<details>
<summary>Solution</summary>

$\cos\theta=\dfrac{|8-1-16|}{3\cdot9}=\dfrac{9}{27}=\dfrac{1}{3}$

$\theta=\cos^{-1}(1/3)\approx70.5°$

</details>

---

**P3.** Find the equation of the plane through $(1,2,3)$, $(0,1,0)$, $(-1,0,-1)$.

<details>
<summary>Solution</summary>

Two vectors in the plane: $\mathbf{u}=(-1,-1,-3)$, $\mathbf{v}=(-2,-2,-4)$.

Normal: $\mathbf{u}\times\mathbf{v}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\-1&-1&-3\\-2&-2&-4\end{vmatrix}=(4-6)\mathbf{i}-( 4-6)\mathbf{j}+(2-2)\mathbf{k}=(-2,2,0)$ → simplify to $(-1,1,0)$.

Plane through $(0,1,0)$: $-(x-0)+(y-1)=0\Rightarrow\boxed{-x+y=1}$, i.e. $x-y+1=0$.

</details>

---

**P4.** Find the distance from the origin to the plane $2x+3y-6z=21$.

<details>
<summary>Solution</summary>

$D=\dfrac{|0+0-0-21|}{\sqrt{4+9+36}}=\dfrac{21}{7}=\boxed{3}$

</details>

---

**P5.** Find the angle between the planes $3x+4y-5z=9$ and $x-3y+2z=1$.

<details>
<summary>Solution</summary>

$\cos\theta=\dfrac{|3-12-10|}{\sqrt{50}\sqrt{14}}=\dfrac{19}{\sqrt{700}}=\dfrac{19}{10\sqrt7}$

$\theta=\cos^{-1}\!\left(\dfrac{19}{10\sqrt7}\right)\approx44.0°$

</details>

---

**P6.** Show that the lines $\dfrac{x}{1}=\dfrac{y}{2}=\dfrac{z}{3}$ and $\dfrac{x-1}{-2}=\dfrac{y-2}{1}=\dfrac{z+3}{0}$ are perpendicular.

<details>
<summary>Solution</summary>

$\mathbf{d}_1=(1,2,3)$, $\mathbf{d}_2=(-2,1,0)$.

$\mathbf{d}_1\cdot\mathbf{d}_2=-2+2+0=0$ ✓ → lines are perpendicular. $\blacksquare$

</details>

---

**P7.** Find the foot of the perpendicular from $(1,1,1)$ to the plane $x+2y+2z=5$.

<details>
<summary>Solution</summary>

The perpendicular from $(1,1,1)$ to the plane has direction $(1,2,2)$ (normal direction):
$$x=1+t,\quad y=1+2t,\quad z=1+2t$$

Substitute into plane: $(1+t)+2(1+2t)+2(1+2t)=5\Rightarrow5+9t=5\Rightarrow t=0$.

Foot $=(1,1,1)$... which means the point already lies on the plane? Check: $1+2+2=5$ ✓.

So the foot is the point itself: $\boxed{(1,1,1)}$.

</details>

---

**P8.** Find the equation of the plane containing the line $\dfrac{x-1}{3}=\dfrac{y+1}{2}=\dfrac{z}{1}$ and parallel to the line $\dfrac{x}{1}=\dfrac{y}{-4}=\dfrac{z+1}{7}$.

<details>
<summary>Solution</summary>

The plane contains direction $\mathbf{d}_1=(3,2,1)$ and is parallel to $\mathbf{d}_2=(1,-4,7)$.

Normal $=\mathbf{d}_1\times\mathbf{d}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\3&2&1\\1&-4&7\end{vmatrix}=(14+4)\mathbf{i}-(21-1)\mathbf{j}+(-12-2)\mathbf{k}=(18,-20,-14)$

Simplify: $(9,-10,-7)$.

Point on plane: $(1,-1,0)$.

$9(x-1)-10(y+1)-7z=0\Rightarrow\boxed{9x-10y-7z-19=0}$

</details>

---

**P9.** Determine whether the lines $\dfrac{x-3}{3}=\dfrac{y+1}{-1}=\dfrac{z+1}{1}$ and $\dfrac{x+3}{-3}=\dfrac{y+7}{2}=\dfrac{z-6}{4}$ intersect or are skew.

<details>
<summary>Solution</summary>

This is the same as 2018 Q8(c). Compute $\mathbf{d}_1\times\mathbf{d}_2=(-6,-15,3)$ (as computed above). Then $\mathbf{c}\cdot(\mathbf{d}_1\times\mathbf{d}_2)=270\neq0$ → **skew lines**.

</details>

---

**P10.** Find the image (reflection) of the point $(1,3,4)$ in the plane $2x-y+z+3=0$.

<details>
<summary>Solution</summary>

The foot of perpendicular from $P=(1,3,4)$ to the plane has parametric form:
$$Q=(1+2t,3-t,4+t)$$

Substitute: $2(1+2t)-(3-t)+(4+t)+3=0\Rightarrow2+4t-3+t+4+t+3=0\Rightarrow6+6t=0\Rightarrow t=-1$.

Foot $F=(-1,4,3)$.

Image $I=2F-P=(2(-1)-1,2(4)-3,2(3)-4)=(-3,5,2)$.

$$\boxed{I=(-3,5,2)}$$

</details>

---

## 📖 References

| Resource | Link |
|----------|------|
| Thomas' Calculus — 3D Geometry | [Pearson](https://www.pearson.com/en-us/subject-catalog/p/thomas-calculus/P200000006125) |
| Kreyszig — Advanced Engineering Mathematics Ch. 8 | Standard text |
| Paul's Online Notes — 3D Space | [tutorial.math.lamar.edu](https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx) |
| MIT OCW 18.02 — Multivariable Calculus | [ocw.mit.edu](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/) |
| Khan Academy — 3D Geometry | [khanacademy.org](https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry) |
| LibreTexts — Lines and Planes in Space | [math.libretexts.org](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/12%3A_Vectors_in_Space) |
| HyperPhysics — Vectors | [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/vect.html) |

---

*Last updated: 2026 | BUTex Mathematics-I — Chapter 10*
