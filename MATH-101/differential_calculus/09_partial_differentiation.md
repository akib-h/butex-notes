---
subject: MATH-101
topic: Partial Differentiation
date: 2026-03-08
tags: [math, calculus, partial differentiation, Euler's theorem, chain rule, MATH-101]
---

# 9. Partial Differentiation

## 9.1 Introduction

When a function depends on **more than one independent variable**, we study how it changes with respect to **one variable at a time**, holding all others constant. This is **partial differentiation**.

$$\text{If } f = f(x, y), \text{ then } \frac{dy}{dx} \text{ involves ONE variable; } \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \text{ involves MULTIPLE}$$

**Example distinguishing ordinary from partial derivatives:**

- $\dfrac{d^2y}{dx^2} + \dfrac{dy}{dx} = c$ — **Ordinary** differential equation (one variable)
- $\dfrac{\partial y}{\partial x} + \dfrac{\partial y}{\partial z} = c$ — **Partial** differential equation (multiple variables)

---

## 9.2 Definition

For $f(x, y)$, the **partial derivative with respect to $x$** is:

$$\frac{\partial f}{\partial x} = f_x = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$$

The **partial derivative with respect to $y$** is:

$$\frac{\partial f}{\partial y} = f_y = \lim_{k \to 0} \frac{f(x, y+k) - f(x, y)}{k}$$

---

## 9.3 Notation

For $f = f(x, y, z)$:

| Derivative | Notation |
|:-----------|:---------|
| 1st partial w.r.t. $x$ | $f_x,\ \partial f/\partial x,\ f_1$ |
| 2nd partial w.r.t. $x$ | $f_{xx},\ \partial^2 f/\partial x^2$ |
| Mixed partial | $f_{xy} = \dfrac{\partial}{\partial y}\!\left(\dfrac{\partial f}{\partial x}\right) = \dfrac{\partial^2 f}{\partial y\, \partial x}$ |

### Clairaut's Theorem (Symmetry of Mixed Partials)

> If $f_{xy}$ and $f_{yx}$ are both continuous, then:

$$f_{xy} = f_{yx}$$

---

## 9.4 Worked Examples — Computing Partial Derivatives

### Example 1

**If $f(x, y, z) = 3x^2y^2z^2$, find $f_{xyz}$.**

$$f_x = 6xy^2z^2$$

$$f_{xy} = \frac{\partial}{\partial y}(6xy^2z^2) = 12xyz^2$$

$$f_{xyz} = \frac{\partial}{\partial z}(12xyz^2) = 24xyz$$

$$\boxed{f_{xyz} = 24xyz}$$

---

### Example 2 — Laplace Equation

**Show that $u = \log(x^2 + y^2)$ satisfies $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = 0$.**

$$\frac{\partial u}{\partial x} = \frac{2x}{x^2+y^2}$$

$$\frac{\partial^2 u}{\partial x^2} = \frac{(x^2+y^2)(2) - 2x(2x)}{(x^2+y^2)^2} = \frac{2(y^2 - x^2)}{(x^2+y^2)^2}$$

By symmetry:

$$\frac{\partial^2 u}{\partial y^2} = \frac{2(x^2 - y^2)}{(x^2+y^2)^2}$$

Adding:

$$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{2(y^2-x^2) + 2(x^2-y^2)}{(x^2+y^2)^2} = 0 \quad \square$$

---

## 9.5 Homogeneous Functions

> A function $f(x, y)$ is **homogeneous of degree $n$** if:

$$f(tx, ty) = t^n f(x, y) \quad \text{for all } t$$

Equivalently, it can be written as $x^n \varphi\!\left(\dfrac{y}{x}\right)$ or $y^n \varphi\!\left(\dfrac{x}{y}\right)$.

**Examples:**

| Function | Degree |
|:---------|:-------|
| $x^2 + xy + y^2$ | 2 |
| $\dfrac{x^3 + y^3}{x + y}$ | 2 |
| $\sin^{-1}\!\dfrac{x}{y} + \tan^{-1}\!\dfrac{y}{x}$ | 0 |
| $x^2 + 2xy$ | 2 |

---

## 9.6 Euler's Theorem on Homogeneous Functions

### Statement

> If $f(x, y)$ is a **homogeneous function of degree $n$**, then:

$$\boxed{x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = nf}$$

For three variables:

$$x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} + z\frac{\partial f}{\partial z} = nf$$

### Proof

Since $f$ is homogeneous of degree $n$: $f(tx, ty) = t^n f(x,y)$

Let $u = tx,\ v = ty,\ w = tz$. Differentiate both sides w.r.t. $t$:

$$\frac{\partial f}{\partial u}\cdot x + \frac{\partial f}{\partial v}\cdot y + \frac{\partial f}{\partial w}\cdot z = nt^{n-1}f(x,y,z)$$

Setting $t = 1$ (so $u = x,\ v = y,\ w = z$):

$$x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} + z\frac{\partial f}{\partial z} = nf \quad \square$$

### Corollary — Second-Order Euler's Identity

If $u$ is homogeneous of degree $n$:

$$x^2 \frac{\partial^2 u}{\partial x^2} + 2xy\frac{\partial^2 u}{\partial x\,\partial y} + y^2 \frac{\partial^2 u}{\partial y^2} = n(n-1)u$$

#### Proof

From Euler's theorem: $x u_x + y u_y = nu$

Differentiate w.r.t. $x$: $x u_{xx} + u_x + y u_{yx} = n u_x$ ... (i)

Differentiate w.r.t. $y$: $x u_{xy} + u_y + y u_{yy} = n u_y$ ... (ii) (using $u_y$)

Wait — differentiate (1) w.r.t. $x$:

$$x u_{xx} + u_x + y u_{xy} = n u_x \implies x u_{xx} + y u_{xy} = (n-1)u_x \quad (i)$$

Differentiate (1) w.r.t. $y$:

$$x u_{xy} + u_y + y u_{yy} = n u_y \implies x u_{xy} + y u_{yy} = (n-1)u_y \quad (ii)$$

Multiply (i) by $x$ and (ii) by $y$, then add:

$$x^2 u_{xx} + xy u_{xy} + xy u_{xy} + y^2 u_{yy} = (n-1)(x u_x + y u_y)$$

$$x^2 u_{xx} + 2xy u_{xy} + y^2 u_{yy} = (n-1)(nu) = n(n-1)u \quad \square$$

---

## 9.7 Worked Examples — Euler's Theorem

### Example 1

**Verify Euler's theorem for $u = x^2 + y^2 + z^2$.**

This is homogeneous of degree $n = 2$.

$$\frac{\partial u}{\partial x} = 2x,\quad \frac{\partial u}{\partial y} = 2y,\quad \frac{\partial u}{\partial z} = 2z$$

$$x(2x) + y(2y) + z(2z) = 2x^2 + 2y^2 + 2z^2 = 2(x^2+y^2+z^2) = 2u = nu \checkmark$$

---

### Example 2

**If $u = \cos^{-1}\!\dfrac{x+y}{\sqrt{x}+\sqrt{y}}$, show that $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} + \dfrac{1}{2}\cot u = 0$.**

**Solution:** Let $v = \cos u = \dfrac{x+y}{\sqrt{x}+\sqrt{y}}$

Rewrite: $v = \dfrac{x\!\left(1+y/x\right)}{\sqrt{x}\!\left(1+\sqrt{y/x}\right)} = \sqrt{x}\cdot\dfrac{1+y/x}{1+\sqrt{y/x}}$

So $v$ is homogeneous of degree $\dfrac{1}{2}$.

By Euler's theorem applied to $v = \cos u$:

$$x\frac{\partial(\cos u)}{\partial x} + y\frac{\partial(\cos u)}{\partial y} = \frac{1}{2}\cos u$$

$$-\sin u\!\left(x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y}\right) = \frac{1}{2}\cos u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = -\frac{1}{2}\cot u$$

$$\boxed{x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} + \frac{1}{2}\cot u = 0} \quad \square$$

---

### Example 3

**If $u = \sin^{-1}\!\dfrac{x}{y} + \tan^{-1}\!\dfrac{y}{x}$, show that $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = 0$.**

**Solution:** Note $u$ is homogeneous of degree $0$ (since $\sin^{-1}(x/y)$ and $\tan^{-1}(y/x)$ both depend only on $x/y$ ratios).

By Euler's theorem with $n = 0$:

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = 0 \cdot u = 0$$

**Direct verification:**

$$\frac{\partial u}{\partial x} = \frac{1/y}{\sqrt{1-x^2/y^2}} + \frac{-y/x^2}{1+y^2/x^2} = \frac{1}{\sqrt{y^2-x^2}} - \frac{y}{x^2+y^2}$$

$$x\frac{\partial u}{\partial x} = \frac{x}{\sqrt{y^2-x^2}} - \frac{xy}{x^2+y^2}$$

Similarly:

$$y\frac{\partial u}{\partial y} = -\frac{x}{\sqrt{y^2-x^2}} + \frac{xy}{x^2+y^2}$$

Adding: $x u_x + y u_y = 0$ ✓

---

## 9.8 Chain Rule for Partial Derivatives

If $u = f(x, y)$ and $x = x(t)$, $y = y(t)$:

$$\frac{du}{dt} = \frac{\partial u}{\partial x}\cdot\frac{dx}{dt} + \frac{\partial u}{\partial y}\cdot\frac{dy}{dt}$$

If $u = f(x, y, z)$ and $x, y, z$ all depend on $s$ and $t$:

$$\frac{\partial u}{\partial s} = \frac{\partial u}{\partial x}\cdot\frac{\partial x}{\partial s} + \frac{\partial u}{\partial y}\cdot\frac{\partial y}{\partial s} + \frac{\partial u}{\partial z}\cdot\frac{\partial z}{\partial s}$$

---

## 9.9 Total Differential

For $u = f(x, y)$, the **total differential** is:

$$du = \frac{\partial u}{\partial x}\,dx + \frac{\partial u}{\partial y}\,dy$$

This represents the **total change** in $u$ due to small changes $dx$ and $dy$.

---

## 9.10 Practice Problems

1. If $u = \log(x^3 + y^3 + z^3 - 3xyz)$, show that:
   - (a) $\dfrac{\partial u}{\partial x} + \dfrac{\partial u}{\partial y} + \dfrac{\partial u}{\partial z} = \dfrac{3}{x+y+z}$
   - (b) $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} + \dfrac{\partial^2 u}{\partial z^2} = -\dfrac{3}{(x+y+z)^2}$

2. If $u = \tan^{-1}\!\dfrac{x^2+y^2}{x-y}$, show that $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = \sin 2u$.

3. If $u = f(x^2 + 2yz,\, y^2 + 2zx)$, prove that $(y^2-zx)\dfrac{\partial u}{\partial x} + (x^2-yz)\dfrac{\partial u}{\partial y} + (z^2-xy)\dfrac{\partial u}{\partial z} = 0$.

4. Find all partial derivatives up to second order for $f(x,y) = x^3 + 3x^2y - xy^2 + y^3$.

---

## 9.11 References & Further Reading

- 📘 **Stewart, J.** — *Calculus: Multivariable*, Ch. 14 (Partial Derivatives)
- 📘 **Kreyszig, E.** — *Advanced Engineering Mathematics*, Ch. 9
- 🌐 [Paul's Online Notes — Partial Derivatives](https://tutorial.math.lamar.edu/Classes/CalcIII/PartialDerivatives.aspx)
- 🌐 [Khan Academy — Partial Derivatives](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/introduction-to-partial-derivatives)
- 🌐 [MIT OCW — Multivariable Calculus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/)
- 🌐 [Wolfram MathWorld — Partial Derivative](https://mathworld.wolfram.com/PartialDerivative.html)
- 🌐 [Brilliant.org — Euler's Theorem for Homogeneous Functions](https://brilliant.org/wiki/eulers-theorem-for-homogeneous-functions/)
