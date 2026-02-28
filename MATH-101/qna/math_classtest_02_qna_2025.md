# 📐 Mathematics-1 (Ms-101) — Class Test Solutions & Practice Guide

> **Course:** B.Sc in Textile Engineering, Level-1 Term-1  
> **College:** Gopalganj Textile Engineering College  
> **Topics Covered:** Continuity, Differentiability, Limits, Homogeneous Functions, Partial Derivatives, Optimization, Differentiation Techniques

---
## 📚 Table of Contents

1. [📖 Key Definitions](#📖-key-definitions)
2. [📄 Paper 1 — Solutions](#📄-paper-1--solutions)
3. [📄 Paper 2 — Solutions](#📄-paper-2--solutions)
4. [🧪 Practice Questions with Solutions](#🧪-practice-questions-with-solutions)
5. [📚 References & Further Reading](#📚-references--further-reading)

---
<a name="📖-key-definitions"></a>
## 📖 Key Definitions

### 1. Continuity

A function $f(x)$ is said to be **continuous at a point** $x = a$ if the following three conditions hold:

1. $f(a)$ exists (the function is defined at $a$)
2. $\lim_{x \to a} f(x)$ exists (the limit exists)
3. $\lim_{x \to a} f(x) = f(a)$ (the limit equals the function value)

**One-sided limits** must also be equal:
$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)$$

---

### 2. Differentiability

A function $f(x)$ is **differentiable at** $x = a$ if the following limit exists:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

Equivalently, the **Left Hand Derivative (LHD)** and **Right Hand Derivative (RHD)** must be equal:

$$\text{LHD} = \lim_{h \to 0^-} \frac{f(a+h) - f(a)}{h}, \quad \text{RHD} = \lim_{h \to 0^+} \frac{f(a+h) - f(a)}{h}$$

> ⚠️ **Key Theorem:** If $f$ is differentiable at $a$, then $f$ is continuous at $a$. The converse is NOT always true.

---

### 3. Homogeneous Function

A function $f(x, y)$ is called a **homogeneous function of degree $n$** if:

$$f(tx, ty) = t^n \cdot f(x, y) \quad \text{for all } t > 0$$

**Examples:**
- $f(x, y) = x^2 + xy + y^2$ → degree **2** (since $f(tx,ty) = t^2 f(x,y)$)
- $f(x, y) = \frac{x+y}{\sqrt{x}+\sqrt{y}}$ → degree **$\frac{1}{2}$**

**Euler's Theorem for Homogeneous Functions:**  
If $f(x,y)$ is a homogeneous function of degree $n$, then:
$$x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = n \cdot f(x, y)$$

---
<a name="📄-paper-1--solutions"></a>
## 📄 Paper 1 — Solutions

### Question 1 — Continuity & Differentiability at $x = 1$

$$f(x) = \begin{cases} x & 0 < x < 1 \\ 2 - x & 1 \leq x \leq 2 \\ x - \frac{1}{2}x^2 & x > 2 \end{cases}$$

**Test Continuity at $x = 1$:**

$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} x = 1$$

$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (2 - x) = 2 - 1 = 1$$

$$f(1) = 2 - 1 = 1$$

Since $\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = f(1) = 1$, the function is **continuous at $x = 1$**. ✅

---

**Test Differentiability at $x = 1$:**

$$\text{LHD} = \lim_{h \to 0^-} \frac{f(1+h) - f(1)}{h} = \lim_{h \to 0^-} \frac{(1+h) - 1}{h} = \lim_{h \to 0^-} \frac{h}{h} = 1$$

$$\text{RHD} = \lim_{h \to 0^+} \frac{f(1+h) - f(1)}{h} = \lim_{h \to 0^+} \frac{(2-(1+h)) - 1}{h} = \lim_{h \to 0^+} \frac{-h}{h} = -1$$

Since $\text{LHD} = 1 \neq -1 = \text{RHD}$, the function is **NOT differentiable at $x = 1$**. ❌

> **Conclusion:** $f(x)$ is continuous but **not differentiable** at $x = 1$. This is a classic example showing continuity does not imply differentiability.

---

### Question 2 — Evaluate the Limit

$$\lim_{x \to 1} (1 - x^2)^{\frac{1}{\log(1-x)}}$$

**Step 1:** Identify the form as $x \to 1$:  
$(1 - x^2) \to 0$ and $\log(1-x) \to -\infty$... so the exponent $\to 0$.  
The form is $0^0$, which is indeterminate.

**Step 2:** Let $L = \lim_{x \to 1} (1 - x^2)^{\frac{1}{\log(1-x)}}$

Take $\ln$ of both sides:

$$\ln L = \lim_{x \to 1} \frac{\ln(1 - x^2)}{\log(1 - x)}$$

**Step 3:** Factor $1 - x^2 = (1-x)(1+x)$:

$$\ln L = \lim_{x \to 1} \frac{\ln[(1-x)(1+x)]}{\log(1-x)} = \lim_{x \to 1} \frac{\ln(1-x) + \ln(1+x)}{\log(1-x)}$$

**Step 4:** Assuming the logarithm is natural (base $e$):

$$\ln L = \lim_{x \to 1} \left[1 + \frac{\ln(1+x)}{\ln(1-x)}\right]$$

As $x \to 1$: $\ln(1+x) \to \ln 2$ and $\ln(1-x) \to -\infty$, so $\frac{\ln(1+x)}{\ln(1-x)} \to 0$.

$$\ln L = 1 + 0 = 1 \implies L = e^1 = e$$

$$\boxed{\lim_{x \to 1} (1 - x^2)^{\frac{1}{\log(1-x)}} = e}$$

---

### Question 3 — Homogeneous Function & Euler's Theorem

**Definition of Homogeneous Function:** *(See Key Definitions above)*

**Given:** $u = \cos^{-1}\left(\dfrac{x + y}{\sqrt{x} + \sqrt{y}}\right)$

**Show that:** $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} + \dfrac{1}{2}\cot u = 0$

---

**Step 1: Check homogeneity of the inner function**

Let $F(x,y) = \dfrac{x+y}{\sqrt{x}+\sqrt{y}}$. Then:

$$F(tx, ty) = \frac{tx + ty}{\sqrt{tx} + \sqrt{ty}} = \frac{t(x+y)}{\sqrt{t}(\sqrt{x}+\sqrt{y})} = t^{1/2} \cdot \frac{x+y}{\sqrt{x}+\sqrt{y}} = t^{1/2} F(x,y)$$

So $F(x,y)$ is **homogeneous of degree $n = \frac{1}{2}$**.

---

**Step 2: Apply Euler's Theorem to** $F = \cos u$

Since $u = \cos^{-1}(F)$, we have $F = \cos u$, and $F$ is homogeneous of degree $\frac{1}{2}$.

By Euler's Theorem:
$$x\frac{\partial F}{\partial x} + y\frac{\partial F}{\partial y} = \frac{1}{2} F = \frac{1}{2}\cos u$$

---

**Step 3: Compute partial derivatives of** $F = \cos u$

$$\frac{\partial F}{\partial x} = -\sin u \cdot \frac{\partial u}{\partial x}, \quad \frac{\partial F}{\partial y} = -\sin u \cdot \frac{\partial u}{\partial y}$$

---

**Step 4: Substitute into Euler's result**

$$x\left(-\sin u \cdot \frac{\partial u}{\partial x}\right) + y\left(-\sin u \cdot \frac{\partial u}{\partial y}\right) = \frac{1}{2}\cos u$$

$$-\sin u \left(x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y}\right) = \frac{1}{2}\cos u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = -\frac{\cos u}{2\sin u} = -\frac{1}{2}\cot u$$

$$\therefore \quad x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} + \frac{1}{2}\cot u = 0 \quad \blacksquare$$

---
<a name="📄-paper-2--solutions"></a>
## 📄 Paper 2 — Solutions

### Question 1 — Find Maximum and Minimum of $u$

**Given:** $u = \dfrac{4}{x} + \dfrac{36}{y}$ subject to the constraint $x + y = 2$

---

**Step 1:** Use the constraint: $y = 2 - x$, so:

$$u(x) = \frac{4}{x} + \frac{36}{2-x}$$

**Step 2:** Differentiate and set $u'(x) = 0$:

$$\frac{du}{dx} = -\frac{4}{x^2} + \frac{36}{(2-x)^2} = 0$$

$$\frac{36}{(2-x)^2} = \frac{4}{x^2}$$

$$36x^2 = 4(2-x)^2$$

$$9x^2 = (2-x)^2$$

$$3x = \pm(2-x)$$

**Taking positive sign:** $3x = 2 - x \Rightarrow 4x = 2 \Rightarrow x = \frac{1}{2}$  
**Taking negative sign:** $3x = -(2-x) = x - 2 \Rightarrow 2x = -2 \Rightarrow x = -1$ (invalid, as $u$ would be negative)

So $x = \dfrac{1}{2}$, and $y = 2 - \dfrac{1}{2} = \dfrac{3}{2}$

**Step 3:** Calculate $u$ at critical point:

$$u = \frac{4}{1/2} + \frac{36}{3/2} = 8 + 24 = \boxed{32}$$

**Step 4:** Second derivative test:

$$\frac{d^2u}{dx^2} = \frac{8}{x^3} + \frac{72}{(2-x)^3}$$

At $x = \frac{1}{2}$: $\frac{d^2u}{dx^2} = \frac{8}{(1/2)^3} + \frac{72}{(3/2)^3} = 64 + 21.3 > 0$

Since $\frac{d^2u}{dx^2} > 0$, the critical point is a **minimum**.

> **Conclusion:** $u$ has a **minimum value of 32** at $x = \frac{1}{2},\ y = \frac{3}{2}$. There is no maximum (as $u \to \infty$ near the boundary).

---

### Question 2 — Continuity & Differentiability at $x = 0$

$$f(x) = \begin{cases} 1 + \sin x & 0 \leq x < \frac{\pi}{2} \\ 1 & x < 0 \end{cases}$$

**Test Continuity at $x = 0$:**

$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} 1 = 1$$

$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (1 + \sin x) = 1 + \sin 0 = 1$$

$$f(0) = 1 + \sin 0 = 1$$

Since LHL = RHL = $f(0) = 1$, $f$ is **continuous at $x = 0$**. ✅

---

**Test Differentiability at $x = 0$:**

$$\text{LHD} = \lim_{h \to 0^-} \frac{f(0+h) - f(0)}{h} = \lim_{h \to 0^-} \frac{1 - 1}{h} = \lim_{h \to 0^-} 0 = 0$$

$$\text{RHD} = \lim_{h \to 0^+} \frac{f(0+h) - f(0)}{h} = \lim_{h \to 0^+} \frac{(1 + \sin h) - 1}{h} = \lim_{h \to 0^+} \frac{\sin h}{h} = 1$$

Since $\text{LHD} = 0 \neq 1 = \text{RHD}$, $f$ is **NOT differentiable at $x = 0$**. ❌

> **Conclusion:** Continuous but **not differentiable** at $x = 0$.

---

### Question 3(a) — Differentiate $x^{\sin^{-1}x}$ w.r.t. $\sin^{-1}x$

Let $y = x^{\sin^{-1}x}$ and $t = \sin^{-1}x$.  
We need $\dfrac{dy}{dt}$.

**Step 1:** Take log of $y$:

$$\ln y = \sin^{-1}x \cdot \ln x = t \cdot \ln(\sin t)$$

**Step 2:** Differentiate w.r.t. $t$:

$$\frac{1}{y}\frac{dy}{dt} = \ln(\sin t) + t \cdot \frac{\cos t}{\sin t} = \ln(\sin t) + t\cot t$$

$$\frac{dy}{dt} = y\left[\ln(\sin t) + t\cot t\right] = x^{\sin^{-1}x}\left[\ln x + \sin^{-1}x \cdot \cot(\sin^{-1}x)\right]$$

Now, $\cot(\sin^{-1}x) = \dfrac{\sqrt{1-x^2}}{x}$, so:

$$\boxed{\frac{dy}{dt} = x^{\sin^{-1}x}\left[\ln x + \frac{\sqrt{1-x^2}}{x}\cdot\sin^{-1}x\right]}$$

---

### Question 3(b) — Differentiate $y = \dfrac{e^{x^2}\tan^{-1}x}{\sqrt{1+x^2}}$

Using the **quotient rule**: $\dfrac{d}{dx}\left(\dfrac{u}{v}\right) = \dfrac{u'v - uv'}{v^2}$

Let $u = e^{x^2}\tan^{-1}x$ and $v = \sqrt{1+x^2} = (1+x^2)^{1/2}$

**Compute $u'$** (product rule):
$$u' = 2x e^{x^2}\tan^{-1}x + e^{x^2}\cdot\frac{1}{1+x^2}$$

**Compute $v'$**:
$$v' = \frac{x}{\sqrt{1+x^2}}$$

**Apply quotient rule:**

$$\frac{dy}{dx} = \frac{\left(2x e^{x^2}\tan^{-1}x + \frac{e^{x^2}}{1+x^2}\right)\sqrt{1+x^2} - e^{x^2}\tan^{-1}x \cdot \frac{x}{\sqrt{1+x^2}}}{1+x^2}$$

Multiply numerator and denominator by $\sqrt{1+x^2}$:

$$\frac{dy}{dx} = \frac{e^{x^2}}{(1+x^2)^{3/2}}\left[2x(1+x^2)\tan^{-1}x + 1 - x\tan^{-1}x\right]$$

$$\boxed{\frac{dy}{dx} = \frac{e^{x^2}\left[(2x+2x^3 - x)\tan^{-1}x + 1\right]}{(1+x^2)^{3/2}}}$$

---
<a name="🧪-practice-questions-with-solutions"></a>
## 🧪 Practice Questions with Solutions

### Practice Set A — Continuity & Differentiability

---

**P1.** Test continuity and differentiability at $x = 2$ for:
$$f(x) = \begin{cases} x^2 - 1 & x < 2 \\ 3 & x = 2 \\ 2x - 1 & x > 2 \end{cases}$$

<details>
<summary>📋 Solution</summary>

**Continuity:**  
$\lim_{x\to 2^-} f(x) = 4 - 1 = 3$  
$\lim_{x\to 2^+} f(x) = 4 - 1 = 3$  
$f(2) = 3$ ✅ **Continuous.**

**Differentiability:**  
$\text{LHD} = \lim_{h\to 0^-} \frac{(2+h)^2-1-3}{h} = \lim \frac{4h+h^2}{h} = 4$  
$\text{RHD} = \lim_{h\to 0^+} \frac{2(2+h)-1-3}{h} = \lim \frac{2h}{h} = 2$  
LHD ≠ RHD ❌ **Not differentiable at $x=2$.**
</details>

---

**P2.** For what value of $k$ is the following function continuous at $x = \pi/2$?
$$f(x) = \begin{cases} k\cos x / (\pi - 2x) & x \neq \pi/2 \\ 3 & x = \pi/2 \end{cases}$$

<details>
<summary>📋 Solution</summary>

Let $x = \pi/2 - h$ as $h \to 0$:

$$\lim_{x\to\pi/2} \frac{k\cos x}{\pi - 2x} = \lim_{h\to 0}\frac{k\cos(\pi/2 - h)}{\pi - 2(\pi/2 - h)} = \lim_{h\to 0}\frac{k\sin h}{2h} = \frac{k}{2}$$

For continuity: $\frac{k}{2} = 3 \Rightarrow \boxed{k = 6}$
</details>

---

**P3.** Show that $f(x) = |x - 3|$ is continuous but not differentiable at $x = 3$.

<details>
<summary>📋 Solution</summary>

$$f(x) = \begin{cases} x-3 & x \geq 3 \\ 3-x & x < 3 \end{cases}$$

**Continuity:** LHL = RHL = $f(3) = 0$ ✅

**Differentiability:**  
$\text{LHD} = -1$, $\text{RHD} = 1$  
LHD ≠ RHD ❌ **Not differentiable at $x = 3$.**
</details>

---

### Practice Set B — Limits

---

**P4.** Evaluate: $\displaystyle\lim_{x\to 0} \frac{e^x - 1 - x}{x^2}$

<details>
<summary>📋 Solution</summary>

Using L'Hôpital's Rule (form $0/0$):

$$\lim_{x\to 0} \frac{e^x - 1}{2x} = \lim_{x\to 0} \frac{e^x}{2} = \frac{1}{2}$$

$$\boxed{\frac{1}{2}}$$
</details>

---

**P5.** Evaluate: $\displaystyle\lim_{x\to 0}(1 + \sin x)^{1/x}$

<details>
<summary>📋 Solution</summary>

Let $L = \lim_{x\to 0}(1+\sin x)^{1/x}$

$\ln L = \lim_{x\to 0}\frac{\ln(1+\sin x)}{x}$

Using L'Hôpital or series: $\ln(1+\sin x) \approx \sin x \approx x$ as $x\to 0$

$\ln L = \lim_{x\to 0}\frac{x}{x} = 1 \Rightarrow \boxed{L = e}$
</details>

---

**P6.** Evaluate: $\displaystyle\lim_{x\to\infty}\left(1 + \frac{3}{x}\right)^x$

<details>
<summary>📋 Solution</summary>

$$\lim_{x\to\infty}\left(1+\frac{3}{x}\right)^x = e^3$$

This follows from the standard limit $\lim_{n\to\infty}\left(1+\frac{k}{n}\right)^n = e^k$.

$$\boxed{e^3}$$
</details>

---

### Practice Set C — Homogeneous Functions & Partial Derivatives

---

**P7.** If $u = x^2 + 2xy + y^2$, verify Euler's theorem.

<details>
<summary>📋 Solution</summary>

$u$ is homogeneous of degree $n = 2$.

$\frac{\partial u}{\partial x} = 2x + 2y$, $\frac{\partial u}{\partial y} = 2x + 2y$

$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = x(2x+2y) + y(2x+2y) = (2x+2y)(x+y) = 2(x+y)^2 = 2u$ ✅

Euler's theorem verified since $n = 2$.
</details>

---

**P8.** If $u = \sin^{-1}\left(\dfrac{x+y}{\sqrt{x}+\sqrt{y}}\right)$, show that $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = \dfrac{1}{2}\tan u$

<details>
<summary>📋 Solution</summary>

Let $F = \sin u = \dfrac{x+y}{\sqrt{x}+\sqrt{y}}$. As shown in Paper 1 Q3, $F$ is homogeneous of degree $\frac{1}{2}$.

By Euler's theorem:
$$x\frac{\partial F}{\partial x} + y\frac{\partial F}{\partial y} = \frac{1}{2}F = \frac{1}{2}\sin u$$

Using $\frac{\partial F}{\partial x} = \cos u\frac{\partial u}{\partial x}$:

$$\cos u\left(x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y}\right) = \frac{1}{2}\sin u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \frac{\sin u}{2\cos u} = \frac{1}{2}\tan u \quad \blacksquare$$
</details>

---

**P9.** Find the maximum and minimum value of $f(x, y) = x^2 + y^2$ subject to $x + y = 1$.

<details>
<summary>📋 Solution</summary>

Using $y = 1-x$:
$$f = x^2 + (1-x)^2 = 2x^2 - 2x + 1$$

$f'(x) = 4x - 2 = 0 \Rightarrow x = \frac{1}{2}, y = \frac{1}{2}$

$f'' = 4 > 0$, so **minimum** at $\left(\frac{1}{2}, \frac{1}{2}\right)$: $f = \frac{1}{4} + \frac{1}{4} = \boxed{\frac{1}{2}}$

There is no maximum (as $x\to\pm\infty$, $f\to\infty$).
</details>

---

### Practice Set D — Differentiation

---

**P10.** Differentiate $y = x^x$ with respect to $x$.

<details>
<summary>📋 Solution</summary>

$$\ln y = x\ln x$$
$$\frac{1}{y}\frac{dy}{dx} = \ln x + 1$$
$$\frac{dy}{dx} = x^x(\ln x + 1)$$
</details>

---

**P11.** Differentiate $y = (\sin x)^{\cos x}$ with respect to $x$.

<details>
<summary>📋 Solution</summary>

$$\ln y = \cos x \cdot \ln(\sin x)$$
$$\frac{1}{y}\frac{dy}{dx} = -\sin x \cdot \ln(\sin x) + \cos x \cdot \frac{\cos x}{\sin x}$$
$$\frac{dy}{dx} = (\sin x)^{\cos x}\left[\frac{\cos^2 x}{\sin x} - \sin x \ln(\sin x)\right]$$
</details>

---

**P12.** Find $\dfrac{dy}{dx}$ if $y = \dfrac{\sqrt{1+x^2}}{e^x \ln x}$

<details>
<summary>📋 Solution</summary>

Let $u = \sqrt{1+x^2}$, $v = e^x \ln x$

$u' = \dfrac{x}{\sqrt{1+x^2}}$, $v' = e^x\ln x + \dfrac{e^x}{x} = e^x\left(\ln x + \frac{1}{x}\right)$

$$\frac{dy}{dx} = \frac{u'v - uv'}{v^2} = \frac{\dfrac{x}{\sqrt{1+x^2}}\cdot e^x\ln x - \sqrt{1+x^2}\cdot e^x\left(\ln x + \frac{1}{x}\right)}{e^{2x}(\ln x)^2}$$

$$= \frac{e^x\left[\dfrac{x\ln x}{\sqrt{1+x^2}} - \sqrt{1+x^2}\left(\ln x + \frac{1}{x}\right)\right]}{e^{2x}(\ln x)^2}$$
</details>

---

**P13.** If $u = \log\left(\dfrac{x^2+y^2}{x+y}\right)$, show that $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = 1$.

<details>
<summary>📋 Solution</summary>

Let $F = e^u = \dfrac{x^2+y^2}{x+y}$.

Check: $F(tx,ty) = \dfrac{t^2(x^2+y^2)}{t(x+y)} = t^1 \cdot F(x,y)$

So $F$ is homogeneous of degree **1**.

By Euler's theorem on $F$:
$$x\frac{\partial F}{\partial x} + y\frac{\partial F}{\partial y} = 1 \cdot F = e^u$$

Since $\frac{\partial F}{\partial x} = e^u \frac{\partial u}{\partial x}$:
$$e^u\left(x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y}\right) = e^u$$

$$\therefore \quad x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = 1 \quad \blacksquare$$
</details>

---

**P14.** Find the stationary points and classify them for $f(x) = x^3 - 3x + 2$.

<details>
<summary>📋 Solution</summary>

$f'(x) = 3x^2 - 3 = 3(x^2-1) = 0 \Rightarrow x = \pm 1$

$f''(x) = 6x$

- At $x = 1$: $f'' = 6 > 0$ → **local minimum**, $f(1) = 0$
- At $x = -1$: $f'' = -6 < 0$ → **local maximum**, $f(-1) = 4$
</details>

---

## 📌 Quick Formula Reference Sheet

| Topic | Formula |
|---|---|
| Continuity | $\lim_{x\to a^-}f = \lim_{x\to a^+}f = f(a)$ |
| Derivative definition | $f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$ |
| Euler's theorem | $x f_x + y f_y = nf$ |
| Log differentiation | $\ln y = \ln f \Rightarrow \frac{y'}{y} = (\ln f)'$ |
| Product rule | $(uv)' = u'v + uv'$ |
| Quotient rule | $\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}$ |
| Standard limit | $\lim_{n\to\infty}(1+\frac{k}{n})^n = e^k$ |
| $\frac{d}{dx}\sin^{-1}x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\frac{d}{dx}\tan^{-1}x$ | $\frac{1}{1+x^2}$ |
| $\frac{d}{dx}\cos^{-1}x$ | $-\frac{1}{\sqrt{1-x^2}}$ |

---
<a name="📚-references--further-reading"></a>
## 📚 References & Further Reading

1. **Euler's Theorem (Wolfram MathWorld)**  
   [https://mathworld.wolfram.com/EulersHomogeneousFunctionTheorem.html](https://mathworld.wolfram.com/EulersHomogeneousFunctionTheorem.html)  
   *Concise formal proof of Euler's theorem for homogeneous functions.*

2. **Physics LibreTexts — Euler's Theorem for Homogeneous Functions**  
   [https://phys.libretexts.org/.../2.06:_Euler's_Theorem](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/02:_Partial_Derivatives/2.06:_Euler's_Theorem_for_Homogeneous_Functions)  
   *Intuitive explanation with thermodynamics applications.*

3. **Wikipedia — Homogeneous Function**  
   [https://en.wikipedia.org/wiki/Homogeneous_function](https://en.wikipedia.org/wiki/Homogeneous_function)  
   *Full definition, examples, and generalized Euler theorem.*

4. **Vedantu — Euler's Theorem Proof**  
   [https://www.vedantu.com/maths/eulers-theorem](https://www.vedantu.com/maths/eulers-theorem)  
   *Step-by-step proof accessible for undergraduates.*

5. **KC Border — Euler's Theorem (Ohio State)**  
   [https://healy.econ.ohio-state.edu/kcb/Notes/EulerHomogeneity.pdf](https://healy.econ.ohio-state.edu/kcb/Notes/EulerHomogeneity.pdf)  
   *Rigorous mathematical proof including corollaries.*

6. **Martin J. Osborne — Homogeneous Functions (Economics context)**  
   [https://mjo.osborne.economics.utoronto.ca/index.php/tutorial/index/1/hom/t](https://mjo.osborne.economics.utoronto.ca/index.php/tutorial/index/1/hom/t)  
   *Applications of homogeneous functions in economics and production theory.*

7. **Magadh Mahila College — Euler's Theorem (PDF Notes)**  
   [https://magadhmahilacollege.org/wp-content/uploads/2020/05/Eulers-Theorem.pdf](https://magadhmahilacollege.org/wp-content/uploads/2020/05/Eulers-Theorem.pdf)  
   *University-level lecture notes for 2- and 3-variable functions.*

---

> 💡 **Study Tip:** For the exam, always check *both* LHL and RHL for continuity, and *both* LHD and RHD for differentiability. State your conclusion clearly.

---

*Last updated: February 2026 | Mathematics-1 Ms-101 | B.Sc Textile Engineering*
