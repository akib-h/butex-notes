---
subject: MATH-101
topic: Tangent and Normal to Curves
date: 2026-03-08
tags: [math, calculus, tangent, normal, curves, MATH-101]
---

# 4. Tangent and Normal to Curves

## 4.1 Definitions

> **Tangent:** A line that **touches** a curve at a given point and has the **same slope** as the curve at that point.

> **Normal:** A line **perpendicular** to the tangent at the point of tangency.

If the tangent has slope $m$, the normal has slope $-\dfrac{1}{m}$.

---

## 4.2 Equations of Tangent and Normal

### For $y = f(x)$ at point $(x_0, y_0)$

**Tangent:**

$$Y - y_0 = \left.\frac{dy}{dx}\right|_{(x_0,y_0)} (X - x_0)$$

**Normal:**

$$Y - y_0 = -\left.\frac{dx}{dy}\right|_{(x_0,y_0)} (X - x_0)$$

### For implicit curve $f(x, y) = 0$ at $(x_0, y_0)$

**Tangent:**

$$(X - x_0)f_x + (Y - y_0)f_y = 0$$

**Normal:**

$$\frac{X - x_0}{f_x} = \frac{Y - y_0}{f_y}$$

where $f_x = \dfrac{\partial f}{\partial x}$ and $f_y = \dfrac{\partial f}{\partial y}$ at $(x_0, y_0)$.

---

## 4.3 Subtangent and Subnormal

For the curve $y = f(x)$ at point $P(x, y)$:

$$\text{Length of Subtangent} = \left|\frac{y}{dy/dx}\right|$$

$$\text{Length of Subnormal} = \left|y \cdot \frac{dy}{dx}\right|$$

$$\text{Length of Tangent} = \left|y\sqrt{1 + \left(\frac{dx}{dy}\right)^2}\right|$$

$$\text{Length of Normal} = \left|y\sqrt{1 + \left(\frac{dy}{dx}\right)^2}\right|$$

---

## 4.4 Angle Between Two Curves

If two curves intersect at a point with slopes $m_1$ and $m_2$, the angle $\phi$ between them satisfies:

$$\tan\phi = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$$

Two curves are **orthogonal** (intersect at right angles) if $m_1 m_2 = -1$.

---

## 4.5 Worked Examples

### Example 1

**Show that if $x\cos\alpha + y\sin\alpha = p$ touches the curve $\dfrac{x^m}{a^m} + \dfrac{y^m}{b^m} = 1$, then:**

$$(a\cos\alpha)^{m/(m-1)} + (b\sin\alpha)^{m/(m-1)} = p^{m/(m-1)}$$

**Solution:** Differentiate the curve implicitly:

$$\frac{m x^{m-1}}{a^m} + \frac{m y^{m-1}}{b^m}\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{b^m x^{m-1}}{a^m y^{m-1}}$$

At point $(x_1, y_1)$, the tangent is:

$$y - y_1 = -\frac{b^m x_1^{m-1}}{a^m y_1^{m-1}}(x - x_1)$$

Rearranging:

$$\frac{xx_1^{m-1}}{a^m} + \frac{yy_1^{m-1}}{b^m} = \frac{x_1^m}{a^m} + \frac{y_1^m}{b^m} = 1 \quad \cdots (ii)$$

Comparing with $x\cos\alpha + y\sin\alpha = p$ $\cdots (i)$:

$$\frac{x_1^{m-1}/a^m}{\cos\alpha} = \frac{y_1^{m-1}/b^m}{\sin\alpha} = \frac{1}{p}$$

This gives:

$$x_1^{m-1} = \frac{a^m \cos\alpha}{p}, \quad y_1^{m-1} = \frac{b^m \sin\alpha}{p}$$

So $\left(\dfrac{x_1}{a}\right)^m = \left(\dfrac{a\cos\alpha}{p}\right)^{m/(m-1)}$, and similarly for $y_1$.

Using $\left(\dfrac{x_1}{a}\right)^m + \left(\dfrac{y_1}{b}\right)^m = 1$:

$$\left(\frac{a\cos\alpha}{p}\right)^{m/(m-1)} + \left(\frac{b\sin\alpha}{p}\right)^{m/(m-1)} = 1$$

$$\boxed{(a\cos\alpha)^{m/(m-1)} + (b\sin\alpha)^{m/(m-1)} = p^{m/(m-1)}} \quad \text{(Proved)}$$

---

### Example 2 — Astroid Tangent Segment is Constant

**Prove that the portion of the tangent to the astroid $x^{2/3} + y^{2/3} = a^{2/3}$ cut off between the coordinate axes has constant length.**

**Solution:** Let $f(x,y) = x^{2/3} + y^{2/3} - a^{2/3}$

$$f_x = \frac{2}{3}x^{-1/3}, \quad f_y = \frac{2}{3}y^{-1/3}$$

Tangent at $(x, y)$:

$$(X - x)f_x + (Y - y)f_y = 0$$

$$X x^{-1/3} + Y y^{-1/3} = x^{2/3} + y^{2/3} = a^{2/3}$$

$$\frac{X}{a^{2/3}x^{1/3}} + \frac{Y}{a^{2/3}y^{1/3}} = 1$$

The intercepts are: $A = (a^{2/3}x^{1/3},\ 0)$ and $B = (0,\ a^{2/3}y^{1/3})$

Length of segment $AB$:

$$|AB| = \sqrt{(a^{2/3}x^{1/3})^2 + (a^{2/3}y^{1/3})^2} = a^{4/3}\sqrt{x^{2/3} + y^{2/3}} = a^{4/3} \cdot a^{1/3} = a$$

$$\boxed{|AB| = a = \text{constant}} \quad \text{(Proved)}$$

---

### Example 3 — Orthogonal Curves

**Show that $ax^2 + by^2 = 1$ and $a'x^2 + b'y^2 = 1$ intersect orthogonally iff $\dfrac{1}{a} - \dfrac{1}{b} = \dfrac{1}{a'} - \dfrac{1}{b'}$.**

**Solution:** At an intersection point $(x_0, y_0)$:

Curve 1: slope $m_1 = -\dfrac{ax_0}{by_0}$, Curve 2: slope $m_2 = -\dfrac{a'x_0}{b'y_0}$

For orthogonality: $m_1 m_2 = -1$:

$$\frac{aa'x_0^2}{bb'y_0^2} = 1 \implies aa'x_0^2 = bb'y_0^2$$

From both curve equations at $(x_0,y_0)$: subtracting gives $(a-a')x_0^2 = (b'-b)y_0^2$

$$\frac{x_0^2}{y_0^2} = \frac{b'-b}{a-a'}$$

Substituting: $aa'(b'-b) = bb'(a-a')$

Dividing by $abb'a'$:

$$\frac{b'-b}{bb'} = \frac{a-a'}{aa'} \implies \frac{1}{b} - \frac{1}{b'} = \frac{1}{a'} - \frac{1}{a} \implies \frac{1}{a} - \frac{1}{b} = \frac{1}{a'} - \frac{1}{b'} \quad \text{(Proved)}$$

---

## 4.6 Practice Problems

1. Find the equation of tangent and normal to $y(x-2)(x-3) - x + 7 = 0$ where it crosses the $x$-axis.
2. Find the angle between the curves $y = x^2$ and $y = x^3$ at their intersection points.
3. Prove that the tangent at any point of the circle $x^2 + y^2 = r^2$ is perpendicular to the radius at that point.
4. For the curve $xy = c^2$, show that the portion of the tangent between the axes has constant length $\sqrt{2c}$ ... **wait**: actually constant $2c$ when measured differently — prove the result.

---

## 4.7 References & Further Reading

- 📘 **Stewart, J.** — *Calculus*, Section 2.7 (Tangent Lines and Derivatives)
- 📘 **Thomas, G.B.** — *Thomas' Calculus*, Section 3.1
- 🌐 [Paul's Online Notes — Tangent Lines and Rates of Change](https://tutorial.math.lamar.edu/Classes/CalcI/Tangents_Rates.aspx)
- 🌐 [Khan Academy — Tangent Lines](https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new/ab-2-1/v/derivative-as-slope-of-tangent-line)
- 🌐 [Wolfram MathWorld — Normal Line](https://mathworld.wolfram.com/NormalLine.html)
- 🌐 [Brilliant.org — Tangent and Normal Lines](https://brilliant.org/wiki/tangent-line/)
