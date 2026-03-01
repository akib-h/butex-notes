---
subject: MATH-101 (MS-101)
topic: Continuity, Differentiability, Limits & Homogeneous Functions
date: 2024-01-01
tags: [notes, math-101, ms-101, continuity, differentiability, limits, homogeneous-function, euler-theorem]
---

# Mathematics-1 (MS-101) — 2nd Class Test: Complete Solutions & Study Notes

> **Course:** Mathematics-1 (Ms-101) | B.Sc. in Textile Engineering, Level-1, Term-1
> **Coverage:** Continuity · Differentiability · Limits · Homogeneous Functions · Optimisation · Differentiation

---

## Table of Contents

1. [Key Definitions & Theory](#1-key-definitions--theory)
2. [Solutions — Gopalganj Textile Engineering College](#2-solutions--gopalganj-textile-engineering-college)
3. [Solutions — Sheikh Rehana Textile Engineering College](#3-solutions--sheikh-rehana-textile-engineering-college)
4. [Solutions — Jhenaidah Textile Engineering College](#4-solutions--jhenaidah-textile-engineering-college)
5. [Practice Problems with Solutions](#5-practice-problems-with-solutions)
6. [Quick-Reference Formula Sheet](#6-quick-reference-formula-sheet)
7. [References](#7-references)

---

## 1. Key Definitions & Theory

### 1.1 Continuity

A function $f(x)$ is **continuous at a point $x = a$** if and only if **all three** of the following conditions hold:

1. $f(a)$ **exists** (the function is defined at $a$)
2. $\displaystyle\lim_{x \to a} f(x)$ **exists**
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$ (the limit equals the function value)

> **Note:** For a piecewise function, condition 2 requires checking both one-sided limits:
> $$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$$

**Types of Discontinuity:**

| Type | Description | Example |
|:---|:---|:---|
| Removable | Limit exists but $\neq f(a)$ | A hole in the graph |
| Jump | Left-limit $\neq$ right-limit | Step functions |
| Infinite | Limit is $\pm\infty$ | $f(x)=1/x$ at $x=0$ |

---

### 1.2 Differentiability

A function $f(x)$ is **differentiable at $x = a$** if the derivative exists at that point, i.e.,

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

For a **piecewise function**, this requires checking one-sided derivatives:

$$\text{LHD} = \lim_{h \to 0^-} \frac{f(a+h)-f(a)}{h}, \qquad \text{RHD} = \lim_{h \to 0^+} \frac{f(a+h)-f(a)}{h}$$

$f$ is differentiable at $a$ $\iff$ $\text{LHD} = \text{RHD}$.

> **Key Theorem:** Differentiability $\Rightarrow$ Continuity, but **Continuity does NOT imply Differentiability**.

![Continuity vs Differentiability diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Discontinuity_removable.eps.png/220px-Discontinuity_removable.eps.png)

---

### 1.3 Homogeneous Functions & Euler's Theorem

A function $f(x, y)$ is **homogeneous of degree $n$** if:
$$f(tx, ty) = t^n \cdot f(x, y) \quad \text{for all } t > 0$$

**Euler's Theorem** states that if $f(x,y)$ is a homogeneous function of degree $n$, then:

$$\boxed{x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = n \cdot f(x, y)}$$

**Extended Euler's Theorem (for composite functions):** If $u = f(x, y)$ where $\sin u$ (or $\cos u$, etc.) is homogeneous of degree $n$, then:
$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = n \cot u$$

---

## 2. Solutions — Gopalganj Textile Engineering College

> **Test:** 2nd Class Test | Full Marks: 10 (4+3+3) | Time: 30 min

---

### Question 1 (4 Marks)
**Define Continuity. Test the continuity and differentiability of $f(x)$ at $x = 1$ where:**

$$f(x) = \begin{cases} x & \text{for } 0 < x < 1 \\ 2 - x & \text{for } 1 \leq x \leq 2 \\ x - \dfrac{1}{2}x^2 & \text{for } x > 2 \end{cases}$$

#### Definition of Continuity
A function $f(x)$ is continuous at $x = a$ if:
1. $f(a)$ exists
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

#### Testing Continuity at $x = 1$

**Step 1: Find $f(1)$**
$$f(1) = 2 - 1 = 1$$

**Step 2: Left-Hand Limit (LHL)**
$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} x = 1$$

**Step 3: Right-Hand Limit (RHL)**
$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (2 - x) = 2 - 1 = 1$$

**Conclusion:**
$$\text{LHL} = \text{RHL} = f(1) = 1$$

$\therefore$ **$f(x)$ is continuous at $x = 1$.**

#### Testing Differentiability at $x = 1$

**Step 1: Left-Hand Derivative (LHD)**
$$\text{LHD} = \lim_{h \to 0^-} \frac{f(1+h) - f(1)}{h}$$

Since $1 + h < 1$ when $h \to 0^-$, use $f(x) = x$:
$$= \lim_{h \to 0^-} \frac{(1+h) - 1}{h} = \lim_{h \to 0^-} \frac{h}{h} = 1$$

**Step 2: Right-Hand Derivative (RHD)**
$$\text{RHD} = \lim_{h \to 0^+} \frac{f(1+h) - f(1)}{h}$$

Since $1 + h > 1$ when $h \to 0^+$, use $f(x) = 2 - x$:
$$= \lim_{h \to 0^+} \frac{(2-(1+h)) - 1}{h} = \lim_{h \to 0^+} \frac{1 - h - 1}{h} = \lim_{h \to 0^+} \frac{-h}{h} = -1$$

**Conclusion:**
$$\text{LHD} = 1 \neq -1 = \text{RHD}$$

$\therefore$ **$f(x)$ is NOT differentiable at $x = 1$** (it has a corner/kink at this point).

---

### Question 2 (3 Marks)
**Evaluate:** $\displaystyle\lim_{x \to 1}(1 - x^2)^{\dfrac{1}{\log(1-x)}}$

This is an **indeterminate form of type $1^\infty$**. Use the standard technique:

Let $L = \lim_{x \to 1}(1-x^2)^{\frac{1}{\log(1-x)}}$

Take the natural log:
$$\ln L = \lim_{x \to 1} \frac{\ln(1-x^2)}{\log(1-x)}$$

Factor $1 - x^2 = (1-x)(1+x)$:
$$\ln L = \lim_{x \to 1} \frac{\ln[(1-x)(1+x)]}{\ln(1-x)}$$

$$= \lim_{x \to 1} \frac{\ln(1-x) + \ln(1+x)}{\ln(1-x)}$$

$$= \lim_{x \to 1} \left[1 + \frac{\ln(1+x)}{\ln(1-x)}\right]$$

As $x \to 1$: $\ln(1+x) \to \ln 2$ and $\ln(1-x) \to -\infty$

$$= 1 + \frac{\ln 2}{-\infty} = 1 + 0 = 1$$

Therefore:
$$\ln L = 1 \implies L = e^1$$

$$\boxed{\lim_{x \to 1}(1-x^2)^{\frac{1}{\log(1-x)}} = e}$$

---

### Question 3 (3 Marks)
**Define Homogeneous Function. If**

$$u = \cos^{-1}\!\left(\frac{x+y}{\sqrt{x}+\sqrt{y}}\right)$$

**show that $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} + \dfrac{1}{2}\cot u = 0$.**

#### Definition of Homogeneous Function
A function $f(x, y)$ is **homogeneous of degree $n$** if $f(tx, ty) = t^n f(x, y)$ for all $t > 0$.

#### Proof

Let $v = \cos u = \dfrac{x + y}{\sqrt{x} + \sqrt{y}}$

**Step 1: Show $v$ is homogeneous.**

$$v(tx, ty) = \frac{tx + ty}{\sqrt{tx} + \sqrt{ty}} = \frac{t(x+y)}{\sqrt{t}(\sqrt{x}+\sqrt{y})} = t^{1/2} \cdot \frac{x+y}{\sqrt{x}+\sqrt{y}} = t^{1/2} v(x,y)$$

So $\cos u = v$ is **homogeneous of degree $n = \dfrac{1}{2}$**.

**Step 2: Apply Euler's Theorem to $v = \cos u$.**

By Euler's theorem:
$$x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} = \frac{1}{2} v = \frac{1}{2}\cos u$$

**Step 3: Compute partial derivatives of $v = \cos u$.**

$$\frac{\partial v}{\partial x} = -\sin u \cdot \frac{\partial u}{\partial x}, \qquad \frac{\partial v}{\partial y} = -\sin u \cdot \frac{\partial u}{\partial y}$$

**Step 4: Substitute back.**

$$x\left(-\sin u \cdot \frac{\partial u}{\partial x}\right) + y\left(-\sin u \cdot \frac{\partial u}{\partial y}\right) = \frac{1}{2}\cos u$$

$$-\sin u \left(x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y}\right) = \frac{1}{2}\cos u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = -\frac{\cos u}{2\sin u} = -\frac{1}{2}\cot u$$

$$\boxed{x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} + \frac{1}{2}\cot u = 0} \qquad \blacksquare$$

---

## 3. Solutions — Sheikh Rehana Textile Engineering College

> **Test:** 2nd Class Test 2024 | Full Marks: 10 | Time: 30 min

---

### Question 1 (3 Marks)
**Find the maximum and minimum value of $u$ where $u = \dfrac{4}{x} + \dfrac{36}{y}$ and $x + y = 2$.**

This is a **constrained optimisation** problem. Use the constraint to eliminate one variable.

**Step 1: Apply constraint $x + y = 2 \Rightarrow y = 2 - x$.**

$$u(x) = \frac{4}{x} + \frac{36}{2-x}$$

**Step 2: Differentiate and set $u'(x) = 0$.**

$$\frac{du}{dx} = -\frac{4}{x^2} + \frac{36}{(2-x)^2} = 0$$

$$\frac{36}{(2-x)^2} = \frac{4}{x^2}$$

$$36x^2 = 4(2-x)^2$$

$$9x^2 = (2-x)^2$$

Take square roots: $3x = 2 - x$ (taking positive root since $x > 0$)

$$4x = 2 \implies x = \frac{1}{2}, \quad y = 2 - \frac{1}{2} = \frac{3}{2}$$

**Step 3: Check with second derivative.**

$$\frac{d^2u}{dx^2} = \frac{8}{x^3} + \frac{72}{(2-x)^3}$$

At $x = \dfrac{1}{2}$:

$$\frac{d^2u}{dx^2} = \frac{8}{(1/2)^3} + \frac{72}{(3/2)^3} = 64 + 21.33 > 0$$

Since $\dfrac{d^2u}{dx^2} > 0$, the critical point gives a **minimum**.

**Step 4: Compute minimum value.**

$$u_{\min} = \frac{4}{1/2} + \frac{36}{3/2} = 8 + 24 = 32$$

> **Note:** As $x \to 0^+$ or $x \to 2^-$, $u \to +\infty$, so there is **no maximum value** (it goes to infinity).

$$\boxed{u_{\min} = 32 \text{ at } x = \tfrac{1}{2},\ y = \tfrac{3}{2}}$$

---

### Question 2 (3 Marks)
**Test the continuity and differentiability of $f(x)$ at $x = 0$ where:**

$$f(x) = \begin{cases} 1 + \sin x & \text{when } 0 \leq x < \dfrac{\pi}{2} \\ 1 & \text{when } x < 0 \end{cases}$$

#### Testing Continuity at $x = 0$

**LHL:**
$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} 1 = 1$$

**RHL:**
$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (1 + \sin x) = 1 + \sin 0 = 1 + 0 = 1$$

**$f(0)$:**
$$f(0) = 1 + \sin 0 = 1$$

Since LHL $=$ RHL $= f(0) = 1$, **$f(x)$ is continuous at $x = 0$.**

#### Testing Differentiability at $x = 0$

**LHD:**
$$\text{LHD} = \lim_{h \to 0^-} \frac{f(0+h) - f(0)}{h} = \lim_{h \to 0^-} \frac{1 - 1}{h} = 0$$

**RHD:**
$$\text{RHD} = \lim_{h \to 0^+} \frac{f(0+h) - f(0)}{h} = \lim_{h \to 0^+} \frac{(1+\sin h) - 1}{h} = \lim_{h \to 0^+} \frac{\sin h}{h} = 1$$

Since $\text{LHD} = 0 \neq 1 = \text{RHD}$, **$f(x)$ is NOT differentiable at $x = 0$.**

---

### Question 3a (2 Marks)
**Differentiate $x^{\sin^{-1}x}$ with respect to $\sin^{-1}x$.**

Let $y = x^{\sin^{-1}x}$ and $t = \sin^{-1}x$. We need $\dfrac{dy}{dt}$.

**Take log of $y$:**
$$\ln y = \sin^{-1}x \cdot \ln x = t \ln x$$

$$\frac{1}{y}\frac{dy}{dt} \cdot \frac{dt}{dt} = \frac{d}{dt}(t \ln x)$$

It is easier to differentiate $y$ w.r.t. $x$ first, then use $\dfrac{dy}{dt} = \dfrac{dy/dx}{dt/dx}$.

**Differentiate $\ln y = \sin^{-1}x \cdot \ln x$ w.r.t. $x$:**

$$\frac{1}{y}\frac{dy}{dx} = \frac{1}{\sqrt{1-x^2}} \cdot \ln x + \sin^{-1}x \cdot \frac{1}{x}$$

$$\frac{dy}{dx} = x^{\sin^{-1}x} \left(\frac{\ln x}{\sqrt{1-x^2}} + \frac{\sin^{-1}x}{x}\right)$$

**Differentiate $t = \sin^{-1}x$ w.r.t. $x$:**
$$\frac{dt}{dx} = \frac{1}{\sqrt{1-x^2}}$$

**Therefore:**
$$\frac{dy}{dt} = \frac{dy/dx}{dt/dx} = x^{\sin^{-1}x} \left(\frac{\ln x}{\sqrt{1-x^2}} + \frac{\sin^{-1}x}{x}\right) \cdot \sqrt{1-x^2}$$

$$\boxed{\frac{dy}{dt} = x^{\sin^{-1}x}\left(\ln x + \frac{x\sin^{-1}x}{\sqrt{1-x^2}}\right)}$$

---

### Question 3b (2 Marks)
**Differentiate $y = \dfrac{e^{x^2}\tan^{-1}x}{\sqrt{1+x^2}}$.**

Use the **quotient rule** $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ with:

$$u = e^{x^2}\tan^{-1}x, \quad v = \sqrt{1+x^2} = (1+x^2)^{1/2}$$

**Compute $u'$** (product rule):
$$u' = e^{x^2} \cdot 2x \cdot \tan^{-1}x + e^{x^2} \cdot \frac{1}{1+x^2}$$
$$= e^{x^2}\left(2x\tan^{-1}x + \frac{1}{1+x^2}\right)$$

**Compute $v'$:**
$$v' = \frac{1}{2}(1+x^2)^{-1/2} \cdot 2x = \frac{x}{\sqrt{1+x^2}}$$

**Apply quotient rule:**
$$\frac{dy}{dx} = \frac{e^{x^2}\!\left(2x\tan^{-1}x + \frac{1}{1+x^2}\right)\sqrt{1+x^2} - e^{x^2}\tan^{-1}x \cdot \frac{x}{\sqrt{1+x^2}}}{1+x^2}$$

$$\boxed{\frac{dy}{dx} = \frac{e^{x^2}}{\sqrt{1+x^2}}\left[2x\tan^{-1}x + \frac{1}{1+x^2} - \frac{x\tan^{-1}x}{1+x^2}\right]}$$

---

## 4. Solutions — Jhenaidah Textile Engineering College

> **Test:** 2nd Class Test | Full Marks: 10 (4+2+4) | Time: 30 min

---

### Question 1 (4 Marks)
**Define Continuity. Test continuity and differentiability of $f(x)$ at $x = 2$ where:**

$$f(x) = \begin{cases} \tfrac{1}{2}x^2 - 3x & \text{for } 1 < x < 2 \\ 3x + 4 & \text{for } x \geq 2 \end{cases}$$

#### Testing Continuity at $x = 2$

**$f(2)$:** Using $f(x) = 3x + 4$:
$$f(2) = 3(2) + 4 = 10$$

**LHL:**
$$\lim_{x \to 2^-} \left(\frac{1}{2}x^2 - 3x\right) = \frac{1}{2}(4) - 6 = 2 - 6 = -4$$

**RHL:**
$$\lim_{x \to 2^+} (3x + 4) = 10$$

Since $\text{LHL} = -4 \neq 10 = f(2)$, **$f(x)$ is NOT continuous at $x = 2$.**

> **Consequence:** Since $f$ is not continuous at $x=2$, it is also **not differentiable** at $x = 2$.

---

### Question 2 (2 Marks)
**Evaluate:** $\displaystyle\lim_{x \to 0}\left(\frac{\tan x}{x}\right)^{1/x^2}$

This is of the form $1^\infty$. Let $L$ be the limit and take $\ln$:

$$\ln L = \lim_{x \to 0} \frac{1}{x^2} \ln\!\left(\frac{\tan x}{x}\right)$$

Expand $\tan x = x + \dfrac{x^3}{3} + \dfrac{2x^5}{15} + \cdots$, so:

$$\frac{\tan x}{x} = 1 + \frac{x^2}{3} + \frac{2x^4}{15} + \cdots$$

$$\ln\!\left(\frac{\tan x}{x}\right) = \ln\!\left(1 + \frac{x^2}{3} + \cdots\right) \approx \frac{x^2}{3} \quad \text{as } x \to 0$$

Therefore:
$$\ln L = \lim_{x \to 0} \frac{x^2/3}{x^2} = \frac{1}{3}$$

$$\boxed{\lim_{x \to 0}\left(\frac{\tan x}{x}\right)^{1/x^2} = e^{1/3}}$$

---

### Question 3 (4 Marks)
**Define Domain and Range. Differentiate $x^{\sin^{-1}x}$ w.r.t. $\sin^{-1}x$.**

#### Definition of Domain and Range

- **Domain:** The set of all possible input values ($x$) for which a function $f(x)$ is defined.
- **Range:** The set of all possible output values ($y$) that the function can produce.

*Example:* For $f(x) = \sqrt{x}$: Domain $= [0, \infty)$, Range $= [0, \infty)$.

#### Differentiation of $x^{\sin^{-1}x}$ w.r.t. $\sin^{-1}x$

This is identical to Question 3a from the Sheikh Rehana test. The answer is:

$$\boxed{\frac{d(x^{\sin^{-1}x})}{d(\sin^{-1}x)} = x^{\sin^{-1}x}\left(\ln x + \frac{x\sin^{-1}x}{\sqrt{1-x^2}}\right)}$$

*(Full derivation is shown in Section 3, Question 3a above.)*

---

## 5. Practice Problems with Solutions

### Practice Set A: Continuity & Differentiability

---

**P1.** Test continuity and differentiability at $x = 0$ for:
$$f(x) = \begin{cases} x^2\sin(1/x) & x \neq 0 \\ 0 & x = 0 \end{cases}$$

**Solution:**

**Continuity:** $|f(x)| = |x^2 \sin(1/x)| \leq x^2 \to 0$ as $x \to 0$. So $\lim_{x\to 0} f(x) = 0 = f(0)$. **Continuous.** ✔

**Differentiability:**
$$f'(0) = \lim_{h\to 0} \frac{h^2\sin(1/h) - 0}{h} = \lim_{h\to 0} h\sin(1/h) = 0$$
Since $|h\sin(1/h)| \leq |h| \to 0$. **Differentiable**, $f'(0) = 0$. ✔

---

**P2.** Test continuity and differentiability at $x = 2$:
$$g(x) = \begin{cases} x^2 - 2x + 3 & x \leq 2 \\ 3x - 5 & x > 2 \end{cases}$$

**Solution:**

$g(2) = 4 - 4 + 3 = 3$

LHL $= \lim_{x\to 2^-}(x^2-2x+3) = 3$ ✔

RHL $= \lim_{x\to 2^+}(3x-5) = 1$ ✘

LHL $\neq$ RHL, so **not continuous** and **not differentiable** at $x = 2$.

---

**P3.** Find $a, b$ so that $h(x)$ is continuous at $x = 1$:
$$h(x) = \begin{cases} ax + b & x \leq 1 \\ 2x^2 - 1 & x > 1 \end{cases}$$

**Solution:**

$h(1) = a + b$. RHL $= \lim_{x\to1^+}(2x^2-1) = 1$. For continuity: $a + b = 1$.
For differentiability, LHD $= a$ and RHD $= 4x|_{x=1} = 4$.
So $a = 4$ and $b = 1 - 4 = -3$. **Answer: $a = 4, b = -3$.**

---

### Practice Set B: Limit Evaluation

---

**P4.** Evaluate $\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$

**Solution:** Using L'Hôpital's Rule (or Taylor series $e^x = 1 + x + x^2/2 + \cdots$):
$$= \lim_{x\to0}\frac{x^2/2 + \cdots}{x^2} = \frac{1}{2}$$
$$\boxed{\dfrac{1}{2}}$$

---

**P5.** Evaluate $\displaystyle\lim_{x \to 0}(1 + \sin x)^{\cot x}$

**Solution:** Form $1^\infty$. Let $L$ be the limit.

$$\ln L = \lim_{x\to0}\cot x \cdot \ln(1+\sin x) = \lim_{x\to0}\frac{\cos x}{\sin x}\cdot\ln(1+\sin x)$$

As $x\to 0$: $\ln(1+\sin x) \approx \sin x$, so $\ln L = \lim_{x\to0}\cos x = 1$.

$$\boxed{L = e}$$

---

**P6.** Evaluate $\displaystyle\lim_{x \to 0} \frac{a^x - b^x}{x}$

**Solution:**
$$= \lim_{x\to0}\frac{e^{x\ln a} - e^{x\ln b}}{x} = \lim_{x\to0}\frac{x\ln a - x\ln b + O(x^2)}{x} = \ln a - \ln b$$
$$\boxed{\ln\!\left(\dfrac{a}{b}\right)}$$

---

### Practice Set C: Homogeneous Functions

---

**P7.** If $u = \sin^{-1}\!\left(\dfrac{x+y}{\sqrt{x}+\sqrt{y}}\right)$, show that $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = \dfrac{1}{2}\tan u$.

**Solution:**

Let $v = \sin u = \dfrac{x+y}{\sqrt{x}+\sqrt{y}}$. We already showed (Q3, Gopalganj) that $v$ is homogeneous of degree $\dfrac{1}{2}$.

By Euler's theorem:
$$x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} = \frac{1}{2}v = \frac{1}{2}\sin u$$

Since $\dfrac{\partial v}{\partial x} = \cos u\dfrac{\partial u}{\partial x}$:

$$\cos u\left(x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}\right) = \frac{1}{2}\sin u$$

$$x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y} = \frac{\sin u}{2\cos u} = \frac{1}{2}\tan u \qquad \blacksquare$$

---

**P8.** If $f(x, y) = \dfrac{x^2 + y^2}{x + y}$, verify Euler's theorem.

**Solution:**

Check homogeneity: $f(tx, ty) = \dfrac{t^2x^2+t^2y^2}{tx+ty} = t \cdot \dfrac{x^2+y^2}{x+y}$. Degree $n = 1$. ✔

$$\frac{\partial f}{\partial x} = \frac{2x(x+y)-(x^2+y^2)}{(x+y)^2} = \frac{x^2+2xy-y^2}{(x+y)^2}$$

$$\frac{\partial f}{\partial y} = \frac{y^2+2xy-x^2}{(x+y)^2}$$

$$x\frac{\partial f}{\partial x}+y\frac{\partial f}{\partial y} = \frac{x(x^2+2xy-y^2)+y(y^2+2xy-x^2)}{(x+y)^2}$$

$$= \frac{x^3+2x^2y-xy^2+y^3+2xy^2-x^2y}{(x+y)^2} = \frac{x^3+x^2y+xy^2+y^3}{(x+y)^2}$$

$$= \frac{(x^2+y^2)(x+y)}{(x+y)^2} = \frac{x^2+y^2}{x+y} = f(x,y) = 1 \cdot f \qquad \blacksquare$$

---

### Practice Set D: Differentiation

---

**P9.** Differentiate $y = (x)^{\tan x} + (\tan x)^x$

**Solution:** Let $y = u + w$ where $u = x^{\tan x}$ and $w = (\tan x)^x$.

For $u$: $\ln u = \tan x \ln x$, so $\dfrac{u'}{u} = \sec^2 x \ln x + \dfrac{\tan x}{x}$, giving:
$$u' = x^{\tan x}\left(\sec^2 x \ln x + \frac{\tan x}{x}\right)$$

For $w$: $\ln w = x\ln(\tan x)$, so $\dfrac{w'}{w} = \ln(\tan x) + \dfrac{x\sec^2 x}{\tan x}$, giving:
$$w' = (\tan x)^x\left(\ln(\tan x) + \frac{x\sec^2 x}{\tan x}\right)$$

$$\boxed{\frac{dy}{dx} = x^{\tan x}\!\left(\sec^2 x\ln x+\frac{\tan x}{x}\right) + (\tan x)^x\!\left(\ln(\tan x)+\frac{x\sec^2 x}{\tan x}\right)}$$

---

**P10.** If $x^m y^n = (x+y)^{m+n}$, prove that $\dfrac{dy}{dx} = \dfrac{y}{x}$.

**Solution:** Take $\ln$ of both sides:
$$m\ln x + n\ln y = (m+n)\ln(x+y)$$

Differentiate w.r.t. $x$:
$$\frac{m}{x} + \frac{n}{y}\frac{dy}{dx} = \frac{m+n}{x+y}\left(1+\frac{dy}{dx}\right)$$

$$\frac{n}{y}\frac{dy}{dx} - \frac{m+n}{x+y}\frac{dy}{dx} = \frac{m+n}{x+y} - \frac{m}{x}$$

$$\frac{dy}{dx}\left(\frac{n}{y}-\frac{m+n}{x+y}\right) = \frac{m+n}{x+y}-\frac{m}{x}$$

LHS bracket: $\dfrac{n(x+y)-y(m+n)}{y(x+y)} = \dfrac{nx - my}{y(x+y)}$

RHS: $\dfrac{x(m+n)-m(x+y)}{x(x+y)} = \dfrac{nx-my}{x(x+y)}$

$$\frac{dy}{dx} \cdot \frac{nx-my}{y(x+y)} = \frac{nx-my}{x(x+y)} \implies \frac{dy}{dx} = \frac{y}{x} \qquad \blacksquare$$

---

## 6. Quick-Reference Formula Sheet

| Concept | Key Formula |
|:---|:---|
| Continuity at $a$ | LHL $=$ RHL $= f(a)$ |
| Differentiability at $a$ | LHD $=$ RHD (and $f$ continuous) |
| Euler's Theorem | $x\partial f/\partial x + y\partial f/\partial y = nf$ |
| Homogeneous function | $f(tx,ty) = t^n f(x,y)$ |
| $1^\infty$ limit | $e^{\lim g(x)\cdot\ln f(x)}$ |
| Derivative of $\sin^{-1}x$ | $1/\sqrt{1-x^2}$ |
| Derivative of $\tan^{-1}x$ | $1/(1+x^2)$ |
| Log differentiation | $\ln y = g(x)\ln f(x)$ then differentiate |
| $\lim_{x\to 0}\frac{\sin x}{x}$ | $1$ |
| $\lim_{x\to 0}\frac{\tan x}{x}$ | $1$ |

---

## 7. References

1. **Thomas & Finney** — *Calculus and Analytic Geometry*, 9th Edition, Addison-Wesley. *(Standard reference for continuity, differentiability, and limits.)*

2. **B.S. Grewal** — *Higher Engineering Mathematics*, Khanna Publishers, New Delhi. *(Covers homogeneous functions, Euler's theorem, and partial derivatives extensively.)*

3. **Piskunov, N.** — *Differential and Integral Calculus*, Mir Publishers. *(Excellent treatment of limit evaluation and piecewise functions.)*

4. **Wikipedia** — [Piecewise function](https://en.wikipedia.org/wiki/Piecewise_function) — Theory of continuity and differentiability of piecewise-defined functions.

5. **Wikipedia** — [Homogeneous function](https://en.wikipedia.org/wiki/Homogeneous_function) — Formal definition and Euler's theorem.

6. **Wolfram MathWorld** — [Euler's Homogeneous Function Theorem](https://mathworld.wolfram.com/EulersHomogeneousFunctionTheorem.html) — Mathematical proof and generalization.

7. **Physics LibreTexts** — [Euler's Theorem for Homogeneous Functions](https://phys.libretexts.org/) — Applied context and worked derivation.

8. **AP College Board** — [Differentiability of Piecewise Functions](https://apcentral.collegeboard.org/) — Theorem and proof for one-sided derivatives.

9. **Ximera / OSU** — [Continuity of Piecewise Functions](https://ximera.osu.edu/) — Interactive examples and checklist.

---

> **Made with 📐 for B.Sc. Textile Engineering students (Level-1, Term-1)**
>
> *For corrections, additions, or new problems — see [CONTRIBUTING.md](../CONTRIBUTING.md)*
