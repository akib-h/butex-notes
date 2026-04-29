# 📈 Chapter 2: Differential Calculus

> **Course:** Mathematics — L1T1  
> **Topics:** Functions · Limits · Continuity · Differentiability · Partial Derivatives · Tangents & Normals

---

## 📚 Table of Contents

1. [Key Definitions](#-key-definitions)
2. [Important Theorems](#-important-theorems)
3. [Questions & Solutions](#-questions--solutions)
   - [Domain & Range](#1-domain--range)
   - [Continuity](#2-continuity)
   - [Differentiability](#3-differentiability)
   - [Rolle's Theorem](#4-rolles-theorem)
   - [Partial Derivatives](#5-partial-derivatives)
   - [Euler's Theorem](#6-eulers-theorem)
   - [Tangent & Normal](#7-tangent--normal)
4. [Practice Questions](#-practice-questions)
5. [References](#-references)

---

## 📖 Key Definitions

| Term | Definition |
|------|-----------|
| **Function** | A rule $f: X \to Y$ that assigns to each $x \in X$ exactly one $y \in Y$. |
| **One-One (Injective)** | $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$ |
| **Onto (Surjective)** | For every $y \in Y$, there exists $x \in X$ such that $f(x) = y$. |
| **Domain** | Set of all valid input values $x$ for which $f(x)$ is defined. |
| **Range** | Set of all output values $f(x)$. |
| **Limit** | $\lim_{x \to a} f(x) = L$: $f(x)$ approaches $L$ as $x$ approaches $a$. |
| **Continuity** | $f$ is continuous at $x=a$ if $\lim_{x\to a} f(x) = f(a)$ and LHL = RHL = f(a). |
| **Differentiability** | $f'(a) = \lim_{h\to 0}\dfrac{f(a+h)-f(a)}{h}$ exists and is finite. |
| **Tangent** | Line touching a curve at a point with slope = $f'(x)$ at that point. |
| **Normal** | Line perpendicular to the tangent at the point of tangency. |
| **Homogeneous Function** | $f(tx, ty) = t^n f(x,y)$ for all $t$; $n$ is the degree. |

---

## 📌 Important Theorems

### Rolle's Theorem
If $f$ is:
1. Continuous on $[a, b]$
2. Differentiable on $(a, b)$
3. $f(a) = f(b)$

Then $\exists\ c \in (a, b)$ such that $f'(c) = 0$.

> **Geometric Meaning:** There is at least one point where the tangent is horizontal.

---

### Lagrange's Mean Value Theorem (LMVT)
If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then:
$$\exists\ c \in (a,b) \text{ such that } f'(c) = \frac{f(b) - f(a)}{b - a}$$

> **Geometric Meaning:** There is a point where the tangent is parallel to the secant line through $(a, f(a))$ and $(b, f(b))$.

---

### Euler's Theorem for Homogeneous Functions
If $u = f(x, y)$ is a **homogeneous function of degree $n$**, then:
$$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = nu$$

**Extension (second-order):**
$$x^2 \frac{\partial^2 u}{\partial x^2} + 2xy \frac{\partial^2 u}{\partial x \partial y} + y^2 \frac{\partial^2 u}{\partial y^2} = n(n-1)u$$

---

### Taylor's & Maclaurin's Series

**Taylor's Series** about $x = a$:
$$f(x) = f(a) + (x-a)f'(a) + \frac{(x-a)^2}{2!}f''(a) + \cdots$$

**Maclaurin's Series** (Taylor's at $a=0$):
$$f(x) = f(0) + xf'(0) + \frac{x^2}{2!}f''(0) + \cdots$$

---

## 🧮 Questions & Solutions

### 1. Domain & Range

**Rules for finding Domain:**
- Denominator $\neq 0$
- Expression under square root $\geq 0$
- Argument of $\log > 0$

#### Q1(i). $f(x) = \dfrac{x}{x+1}$

<details>
<summary>💡 Solution</summary>

**Domain:** $x + 1 \neq 0 \Rightarrow x \neq -1$  
$$\text{Domain} = \mathbb{R} \setminus \{-1\} = (-\infty, -1) \cup (-1, \infty)$$

**Range:** Let $y = \dfrac{x}{x+1}$  
$y(x+1) = x \Rightarrow yx + y = x \Rightarrow x(y-1) = -y \Rightarrow x = \dfrac{-y}{y-1} = \dfrac{y}{1-y}$

This is defined when $y \neq 1$.  
$$\text{Range} = \mathbb{R} \setminus \{1\} = (-\infty, 1) \cup (1, \infty)$$

</details>

---

#### Q1(ii). $f(x) = \dfrac{x-3}{2x+1}$

<details>
<summary>💡 Solution</summary>

**Domain:** $2x + 1 \neq 0 \Rightarrow x \neq -\dfrac{1}{2}$  
$$\text{Domain} = \mathbb{R} \setminus \left\{-\frac{1}{2}\right\}$$

**Range:** Let $y = \dfrac{x-3}{2x+1}$  
$y(2x+1) = x-3 \Rightarrow 2xy + y = x - 3 \Rightarrow x(2y-1) = -3 - y$  
$x = \dfrac{-3-y}{2y-1}$

Defined when $y \neq \dfrac{1}{2}$.  
$$\text{Range} = \mathbb{R} \setminus \left\{\frac{1}{2}\right\}$$

</details>

---

#### Q1(iii). $f(x) = \dfrac{x^2-9}{x-3}$ and draw graph

<details>
<summary>💡 Solution</summary>

**Simplify:** $f(x) = \dfrac{(x-3)(x+3)}{x-3} = x+3$ for $x \neq 3$

**Domain:** $x \neq 3$, so $\text{Domain} = \mathbb{R} \setminus \{3\}$

**Range:** Since $f(x) = x+3$ and $x \neq 3$, we have $f(x) \neq 6$.  
$$\text{Range} = \mathbb{R} \setminus \{6\}$$

**Graph:** A straight line $y = x+3$ with an open hole at $(3, 6)$.

```
y
|        /
|       / hole at (3,6)
|      ○ 
|     /
|    /
+---/------------- x
```

</details>

---

#### Q1(iv). $f(x) = |x| + |x-1|$, draw graph

<details>
<summary>💡 Solution</summary>

Analyze by cases:

| Range of $x$ | $f(x)$ |
|---|---|
| $x < 0$ | $-x + (-(x-1)) = -2x + 1$ |
| $0 \le x < 1$ | $x + (-(x-1)) = 1$ |
| $x \ge 1$ | $x + (x-1) = 2x - 1$ |

**Domain:** $\mathbb{R}$ (all real numbers)  
**Range:** $[1, \infty)$

**Graph:**
```
y
3|  \         /
2|   \       /
1|    \_____/
 +--+--+--+---- x
   -1  0  1  2
```

</details>

---

#### Q1(v). Piecewise function, draw in graph

$$f(x) = \begin{cases} x^2 + 1 & x < 0 \\ x & 0 \le x < 1 \\ 1/x & x \ge 1 \end{cases}$$

<details>
<summary>💡 Solution</summary>

**Domain:** $\mathbb{R}$ (all real numbers)

**Range analysis:**
- For $x < 0$: $x^2 + 1 > 1$, range is $(1, \infty)$
- For $0 \le x < 1$: range is $[0, 1)$
- For $x \ge 1$: $1/x \in (0, 1]$

**Range:** $[0, \infty)$? Actually: $\{0\} \cup (0,1] \cup (1, \infty) = [0, \infty)$

**Sketch:** Parabola for $x<0$, identity line for $[0,1)$, hyperbola for $x \ge 1$.

</details>

---

### 2. Continuity

**Test for Continuity at $x = a$:**

$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)$$

#### Q2(i). Investigate continuity of:
$$f(x) = \begin{cases} 3+2x & -3/2 \le x < 0 \\ 3-2x & 0 \le x \le 3/2 \\ -3-2x & x > 3/2 \end{cases}$$
at $x = 0$ and $x = 3/2$

<details>
<summary>💡 Solution</summary>

**At $x = 0$:**
- LHL: $\lim_{x\to 0^-}(3+2x) = 3$
- RHL: $\lim_{x\to 0^+}(3-2x) = 3$
- $f(0) = 3 - 0 = 3$

LHL = RHL = $f(0) = 3$ → **Continuous at $x = 0$** ✅

**At $x = 3/2$:**
- LHL: $\lim_{x\to (3/2)^-}(3-2x) = 3 - 3 = 0$
- RHL: $\lim_{x\to (3/2)^+}(-3-2x) = -3-3 = -6$
- $f(3/2) = 3 - 3 = 0$

LHL $\neq$ RHL → **Discontinuous at $x = 3/2$** ❌

</details>

---

#### Q2(ii). 
$$f(x) = \begin{cases} \ln x & 0 < x \le 1 \\ 0 & 1 < x \le 2 \\ 1 + x^2 & x > 2 \end{cases}$$
at $x = 1$ and $x = 2$

<details>
<summary>💡 Solution</summary>

**At $x = 1$:**
- LHL: $\lim_{x\to 1^-} \ln x = \ln 1 = 0$
- RHL: $\lim_{x\to 1^+} 0 = 0$
- $f(1) = \ln 1 = 0$

**Continuous at $x = 1$** ✅

**At $x = 2$:**
- LHL: $\lim_{x\to 2^-} 0 = 0$
- RHL: $\lim_{x\to 2^+}(1+x^2) = 1+4 = 5$
- $f(2) = 0$

LHL $\neq$ RHL → **Discontinuous at $x = 2$** ❌

</details>

---

#### Q2(iii). 
$$f(x) = \begin{cases} -x & x \le 0 \\ x & 0 < x < 1 \\ 1-x & x \ge 1 \end{cases}$$
at $x = 0$ and $x = 1$

<details>
<summary>💡 Solution</summary>

**At $x = 0$:**
- LHL: $\lim_{x\to 0^-}(-x) = 0$
- RHL: $\lim_{x\to 0^+}(x) = 0$
- $f(0) = 0$

**Continuous at $x = 0$** ✅

**At $x = 1$:**
- LHL: $\lim_{x\to 1^-} x = 1$
- RHL: $\lim_{x\to 1^+}(1-x) = 0$

LHL $\neq$ RHL → **Discontinuous at $x = 1$** ❌

</details>

---

### 3. Differentiability

**A function is differentiable at $x=a$ if:**
$$\text{LHD} = \lim_{h\to 0^-}\frac{f(a+h)-f(a)}{h} = \text{RHD} = \lim_{h\to 0^+}\frac{f(a+h)-f(a)}{h}$$

> **Key Fact:** Differentiability $\Rightarrow$ Continuity, but NOT vice versa.

#### Q3. Discuss continuity & differentiability at $x = \pi/2$:
$$f(x) = \begin{cases} 1 & x < 0 \\ 1+\sin x & 0 \le x < \pi/2 \\ 2 + \left(x - \frac{\pi}{2}\right)^2 & x \ge \pi/2 \end{cases}$$

<details>
<summary>💡 Solution</summary>

**Continuity at $x = \pi/2$:**

- LHL: $\lim_{x \to (\pi/2)^-}(1+\sin x) = 1 + 1 = 2$
- RHL: $\lim_{x \to (\pi/2)^+}\left[2+\left(x-\frac{\pi}{2}\right)^2\right] = 2 + 0 = 2$
- $f(\pi/2) = 2 + 0 = 2$

**Continuous** ✅

**Differentiability at $x = \pi/2$:**

- LHD: $\lim_{h\to 0^-}\dfrac{(1+\sin(\pi/2+h))-2}{h} = \lim_{h\to 0^-}\dfrac{\sin(\pi/2+h)-1}{h} = \lim_{h\to 0^-}\dfrac{\cos h - 1}{h} = 0$

- RHD: $\lim_{h\to 0^+}\dfrac{2+h^2-2}{h} = \lim_{h\to 0^+} h = 0$

LHD = RHD = 0 → **Differentiable at $x = \pi/2$** ✅

</details>

---

#### Q4. Show that $f$ is continuous but not differentiable at $x = 1/2$, where:

$$f(x) = \begin{cases} x & 0 \le x < 1/2 \\ 1-x & 1/2 \le x < 1 \end{cases}$$

<details>
<summary>💡 Solution</summary>

**Continuity at $x = 1/2$:**

- LHL: $\lim_{x\to(1/2)^-} x = 1/2$
- RHL: $\lim_{x\to(1/2)^+}(1-x) = 1/2$
- $f(1/2) = 1 - 1/2 = 1/2$

**Continuous** ✅

**Differentiability at $x = 1/2$:**

- LHD: $\lim_{h\to 0^-}\dfrac{(1/2+h)-1/2}{h} = \lim_{h\to 0^-} 1 = 1$

- RHD: $\lim_{h\to 0^+}\dfrac{(1-(1/2+h))-1/2}{h} = \lim_{h\to 0^+}\dfrac{-h}{h} = -1$

LHD $\neq$ RHD → **Not differentiable at $x = 1/2$** ❌

</details>

---

#### Q5. Investigate continuity and differentiability at $x = 3$ for:

$$f(x) = \begin{cases} 0 & 0 \le x < 3 \\ 4 & x = 3 \\ 5 & 3 < x \le 4 \end{cases}$$

<details>
<summary>💡 Solution</summary>

**Continuity at $x = 3$:**

- LHL: $\lim_{x\to 3^-} 0 = 0$
- RHL: $\lim_{x\to 3^+} 5 = 5$
- $f(3) = 4$

LHL $\neq$ RHL $\neq f(3)$ → **Discontinuous at $x = 3$** ❌

Since not continuous, it's also **not differentiable** at $x = 3$.

</details>

---

### 4. Rolle's Theorem

#### Q6. Verify Rolle's Theorem for $f(x) = x^2 + 5x - 6$ on $(-6, 1)$

<details>
<summary>💡 Solution</summary>

**Check conditions:**

1. $f(x) = x^2+5x-6$ is a polynomial → **Continuous on** $[-6,1]$ ✅
2. $f'(x) = 2x+5$ exists for all $x$ → **Differentiable on** $(-6,1)$ ✅
3. $f(-6) = 36-30-6 = 0$ and $f(1) = 1+5-6 = 0$ → $f(-6)=f(1)=0$ ✅

**All conditions satisfied.** By Rolle's theorem, $\exists\ c \in (-6,1)$ such that $f'(c)=0$.

$$f'(c) = 2c + 5 = 0 \Rightarrow c = -\frac{5}{2} = -2.5$$

Check: $-6 < -2.5 < 1$ ✅

**Rolle's Theorem verified.** $c = -5/2 \in (-6, 1)$.

</details>

---

### 5. Partial Derivatives

**Definition:** For $u = f(x,y)$:
$$\frac{\partial u}{\partial x} = \lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}$$

Treat other variables as constants while differentiating.

#### Q7(i). If $u = (x^2+y^2+z^2)^{-1/2}$, show that $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} + \dfrac{\partial^2 u}{\partial z^2} = 0$

<details>
<summary>💡 Solution</summary>

Let $r^2 = x^2 + y^2 + z^2$, so $u = r^{-1}$.

$$\frac{\partial u}{\partial x} = -\frac{1}{2}(x^2+y^2+z^2)^{-3/2} \cdot 2x = -x(x^2+y^2+z^2)^{-3/2}$$

$$\frac{\partial^2 u}{\partial x^2} = -(x^2+y^2+z^2)^{-3/2} + 3x^2(x^2+y^2+z^2)^{-5/2}$$

$$= \frac{-r^2 + 3x^2}{r^5}$$

Similarly:
$$\frac{\partial^2 u}{\partial y^2} = \frac{-r^2+3y^2}{r^5}, \quad \frac{\partial^2 u}{\partial z^2} = \frac{-r^2+3z^2}{r^5}$$

Adding:
$$\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}+\frac{\partial^2 u}{\partial z^2} = \frac{-3r^2+3(x^2+y^2+z^2)}{r^5} = \frac{-3r^2+3r^2}{r^5} = 0$$ ✅

</details>

---

#### Q7(ii). If $u = \log(x^2+y^2)$, show that $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = 0$

<details>
<summary>💡 Solution</summary>

$$\frac{\partial u}{\partial x} = \frac{2x}{x^2+y^2}$$

$$\frac{\partial^2 u}{\partial x^2} = \frac{2(x^2+y^2) - 2x \cdot 2x}{(x^2+y^2)^2} = \frac{2y^2-2x^2}{(x^2+y^2)^2}$$

Similarly:
$$\frac{\partial^2 u}{\partial y^2} = \frac{2x^2-2y^2}{(x^2+y^2)^2}$$

Sum:
$$\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2} = \frac{2y^2-2x^2+2x^2-2y^2}{(x^2+y^2)^2} = 0$$ ✅

> This confirms $u = \log(x^2+y^2)$ is a **harmonic function**.

</details>

---

#### Q7(iii). If $u = \sqrt{x^2+y^2+z^2}$, prove $u_{xx}+u_{yy}+u_{zz} = \dfrac{2}{u}$

<details>
<summary>💡 Solution</summary>

$$u = r, \quad r = \sqrt{x^2+y^2+z^2}$$

$$\frac{\partial u}{\partial x} = \frac{x}{r}$$

$$\frac{\partial^2 u}{\partial x^2} = \frac{r - x \cdot \frac{x}{r}}{r^2} = \frac{r^2-x^2}{r^3} = \frac{y^2+z^2}{r^3}$$

Similarly for $y$ and $z$.

$$u_{xx}+u_{yy}+u_{zz} = \frac{y^2+z^2+x^2+z^2+x^2+y^2}{r^3} = \frac{2(x^2+y^2+z^2)}{r^3} = \frac{2r^2}{r^3} = \frac{2}{r} = \frac{2}{u}$$ ✅

</details>

---

#### Q7(iv). If $u = \sin^{-1}\dfrac{x+y}{\sqrt{x}+\sqrt{y}}$, show $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = \dfrac{1}{2}\tan u$

<details>
<summary>💡 Solution</summary>

Let $v = \sin u = \dfrac{x+y}{\sqrt{x}+\sqrt{y}}$

Check homogeneity: $v(tx, ty) = \dfrac{tx+ty}{\sqrt{tx}+\sqrt{ty}} = \dfrac{t(x+y)}{\sqrt{t}(\sqrt{x}+\sqrt{y})} = \sqrt{t} \cdot v$

So $v$ is homogeneous of degree $n = \dfrac{1}{2}$.

By Euler's Theorem on $v = \sin u$:
$$x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} = \frac{1}{2}v$$

$$x\cos u\frac{\partial u}{\partial x} + y\cos u\frac{\partial u}{\partial y} = \frac{1}{2}\sin u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \frac{\sin u}{2\cos u} = \frac{1}{2}\tan u$$ ✅

</details>

---

### 6. Euler's Theorem

#### Q8(i). If $u = \tan^{-1}\dfrac{x^3+y^3}{x-y}$, show $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = \sin 2u$

<details>
<summary>💡 Solution</summary>

Let $v = \tan u = \dfrac{x^3+y^3}{x-y}$

Homogeneity of $v$:
$$v(tx,ty) = \frac{t^3x^3+t^3y^3}{tx-ty} = \frac{t^3(x^3+y^3)}{t(x-y)} = t^2 \cdot v$$

So $v$ is homogeneous of degree $n = 2$.

By Euler's Theorem on $v$:
$$x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} = 2v$$

Since $v = \tan u$:
$$x \sec^2 u \frac{\partial u}{\partial x} + y\sec^2 u \frac{\partial u}{\partial y} = 2\tan u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \frac{2\tan u}{\sec^2 u} = 2\sin u \cos u = \sin 2u$$ ✅

</details>

---

#### Q8(ii). If $u = \sin^{-1}\dfrac{x^2+y^2}{x+y}$, show $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = \tan u$

<details>
<summary>💡 Solution</summary>

$v = \sin u = \dfrac{x^2+y^2}{x+y}$, which is homogeneous of degree $n=1$.

By Euler's on $v$: $x v_x + y v_y = v$

$$\cos u \left(x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y}\right) = \sin u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \frac{\sin u}{\cos u} = \tan u$$ ✅

</details>

---

#### Q8(iii). If $u = \tan^{-1}\dfrac{x^2+y^2}{x+y}$, show $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = \dfrac{1}{2}\sin 2u$

<details>
<summary>💡 Solution</summary>

$v = \tan u = \dfrac{x^2+y^2}{x+y}$, homogeneous of degree $n=1$.

$x v_x + y v_y = v$

$\sec^2 u \left(x u_x + y u_y\right) = \tan u$

$$x u_x + y u_y = \frac{\tan u}{\sec^2 u} = \sin u \cos u = \frac{1}{2}\sin 2u$$ ✅

</details>

---

#### Q8(iv). If $u = f(x,y)$ is homogeneous of degree $n$, prove:
$$x^2\frac{\partial^2 u}{\partial x^2} + 2xy\frac{\partial^2 u}{\partial x\partial y} + y^2\frac{\partial^2 u}{\partial y^2} = n(n-1)u$$

<details>
<summary>💡 Solution</summary>

From Euler's Theorem: $xu_x + yu_y = nu$ ... (1)

Differentiate (1) w.r.t. $x$:
$$u_x + xu_{xx} + yu_{yx} = nu_x$$
$$xu_{xx} + yu_{yx} = (n-1)u_x \quad\cdots(2)$$

Differentiate (1) w.r.t. $y$:
$$xu_{xy} + u_y + yu_{yy} = nu_y$$
$$xu_{xy} + yu_{yy} = (n-1)u_y \quad\cdots(3)$$

Multiply (2) by $x$ and (3) by $y$, then add:
$$x^2u_{xx} + xyu_{yx} + xyu_{xy} + y^2u_{yy} = (n-1)(xu_x + yu_y)$$
$$x^2u_{xx} + 2xyu_{xy} + y^2u_{yy} = (n-1) \cdot nu = n(n-1)u$$ ✅

</details>

---

### 7. Tangent & Normal

**Slope of tangent** to $f(x,y)=0$ at $(x_0,y_0)$:
$$m = -\frac{f_x}{f_y} = \frac{dy}{dx}\bigg|_{(x_0,y_0)}$$

**Tangent line:** $y - y_0 = m(x - x_0)$  
**Normal line:** $y - y_0 = -\dfrac{1}{m}(x - x_0)$

---

#### Q9(i). If curves $ax^2+by^2=1$ and $a'x^2+b'y^2=1$ intersect perpendicularly, prove: $\dfrac{1}{a}-\dfrac{1}{b} = \dfrac{1}{a'}-\dfrac{1}{b'}$

<details>
<summary>💡 Solution</summary>

Let $(x_0, y_0)$ be intersection point. Then:
$ax_0^2 + by_0^2 = 1$ and $a'x_0^2+b'y_0^2=1$

Slopes of tangents:

For curve 1: $2ax + 2by\dfrac{dy}{dx} = 0 \Rightarrow m_1 = -\dfrac{ax_0}{by_0}$

For curve 2: $m_2 = -\dfrac{a'x_0}{b'y_0}$

Perpendicularity condition: $m_1 \cdot m_2 = -1$
$$\frac{aa'x_0^2}{bb'y_0^2} = -1 \Rightarrow aa'x_0^2 = -bb'y_0^2 \quad\cdots (*)$$

From the curve equations:
$ax_0^2 + by_0^2 = a'x_0^2 + b'y_0^2$  
$(a-a')x_0^2 = (b'-b)y_0^2$  
$\dfrac{x_0^2}{y_0^2} = \dfrac{b'-b}{a-a'}$

Substituting into (*) and simplifying leads to:
$$\frac{1}{a} - \frac{1}{b} = \frac{1}{a'} - \frac{1}{b'}$$ ✅

</details>

---

#### Q9(iii). Prove the segment (between coordinate axes) of tangent to astroid $x^{2/3}+y^{2/3}=a^{2/3}$ is constant length $a$.

<details>
<summary>💡 Solution</summary>

Use parametric form: $x = a\cos^3 t$, $y = a\sin^3 t$.

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{3a\sin^2 t \cos t}{-3a\cos^2 t \sin t} = -\tan t$$

Tangent at $(a\cos^3 t, a\sin^3 t)$:
$$y - a\sin^3 t = -\tan t (x - a\cos^3 t)$$

**x-intercept** (set $y=0$): $x = a\cos^3 t + a\sin^2 t \cos t = a\cos t(\cos^2 t + \sin^2 t) = a\cos t$

**y-intercept** (set $x=0$): $y = a\sin t$

**Length of segment:**
$$L = \sqrt{(a\cos t)^2 + (a\sin t)^2} = a\sqrt{\cos^2 t + \sin^2 t} = a$$ ✅

</details>

---

## 📝 Practice Questions

#### P1. Find domain and range of $f(x) = \sqrt{4-x^2}$

<details>
<summary>💡 Solution</summary>

$4 - x^2 \ge 0 \Rightarrow x^2 \le 4 \Rightarrow -2 \le x \le 2$

**Domain:** $[-2, 2]$  
**Range:** $[0, 2]$ (since max value at $x=0$ is $\sqrt{4}=2$)

</details>

---

#### P2. Show $f(x) = |x|$ is continuous but not differentiable at $x=0$.

<details>
<summary>💡 Solution</summary>

**Continuity:** LHL = RHL = $f(0) = 0$ ✅

**Differentiability:**
- LHD: $\lim_{h\to 0^-}\dfrac{|h|}{h} = \dfrac{-h}{h} = -1$
- RHD: $\lim_{h\to 0^+}\dfrac{|h|}{h} = \dfrac{h}{h} = 1$

LHD $\neq$ RHD → **Not differentiable** ❌

</details>

---

#### P3. If $u = \log(x^3+y^3+z^3-3xyz)$, show $\dfrac{\partial u}{\partial x}+\dfrac{\partial u}{\partial y}+\dfrac{\partial u}{\partial z} = \dfrac{3}{x+y+z}$

<details>
<summary>💡 Solution</summary>

$$u = \log(x^3+y^3+z^3-3xyz)$$

$$\frac{\partial u}{\partial x} = \frac{3x^2-3yz}{x^3+y^3+z^3-3xyz}$$

Since $x^3+y^3+z^3-3xyz = (x+y+z)(x^2+y^2+z^2-xy-yz-zx)$:

$$\frac{\partial u}{\partial x}+\frac{\partial u}{\partial y}+\frac{\partial u}{\partial z} = \frac{3(x^2+y^2+z^2-xy-yz-zx)}{(x+y+z)(x^2+y^2+z^2-xy-yz-zx)} = \frac{3}{x+y+z}$$ ✅

</details>

---

#### P4. Verify LMVT for $f(x) = x^3 - x^2 - x + 1$ on $[0, 2]$

<details>
<summary>💡 Solution</summary>

$f(0) = 1$, $f(2) = 8-4-2+1 = 3$

$$\frac{f(2)-f(0)}{2-0} = \frac{3-1}{2} = 1$$

$f'(x) = 3x^2-2x-1$

Set $f'(c) = 1$: $3c^2-2c-1=1 \Rightarrow 3c^2-2c-2=0$

$$c = \frac{2 \pm \sqrt{4+24}}{6} = \frac{2 \pm \sqrt{28}}{6} = \frac{1 \pm \sqrt{7}}{3}$$

$c = \dfrac{1+\sqrt{7}}{3} \approx 1.22 \in (0,2)$ ✅ (valid root)

</details>

---

## 📚 References

1. **B.S. Grewal** — *Higher Engineering Mathematics*, Khanna Publishers, Ch. 4-7
2. **Kreyszig** — *Advanced Engineering Mathematics*, Wiley
3. [Khan Academy — Calculus](https://www.khanacademy.org/math/calculus-1)
4. [Paul's Online Math Notes — Calculus I](https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx)
5. [MIT OCW — Single Variable Calculus](https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/)
6. [Wolfram MathWorld — Partial Derivatives](https://mathworld.wolfram.com/PartialDerivative.html)

---

> 📌 **Tip:** A function can be continuous but not differentiable (e.g., $|x|$ at 0), but it cannot be differentiable without being continuous.  
> 📌 **Tip:** For Euler's theorem, always first verify the degree of homogeneity.
