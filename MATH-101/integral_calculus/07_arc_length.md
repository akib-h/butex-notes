---
subject: MATH-101
topic: Arc Length of Plane Curves
date: 2026-03-14
tags: [notes, MATH-101, integration, arc-length, plane-curves, polar, parametric]
---

# 07 — Arc Length of Plane Curves

> **Reference:** Motin Sir Book — Chapter 17 | Howard Anton — Section 6.4  
> **Online:** [Paul's Online Notes — Arc Length](https://tutorial.math.lamar.edu/Classes/CalcII/ArcLength.aspx)

---

## 1. Introduction

The **arc length** (or **perimeter**) of a smooth curve is the total length of the curve between two points. Integration allows us to compute this by summing up infinitely many infinitesimal segments.

**Infinitesimal Length Element:**

For a curve in the $xy$-plane, the element of arc length $ds$ satisfies:

$$ds^2 = dx^2 + dy^2$$

$$ds = \sqrt{dx^2 + dy^2}$$

---

## 2. Arc Length Formulas

### 2.1 Cartesian Form: $y = f(x)$ on $[a, b]$

$$\boxed{L = \int_a^b \sqrt{1 + \left[\frac{dy}{dx}\right]^2}\,dx}$$

Or equivalently, if the curve is expressed as $x = g(y)$ on $[c, d]$:

$$L = \int_c^d \sqrt{1 + \left[\frac{dx}{dy}\right]^2}\,dy$$

### 2.2 Parametric Form: $x = f(t)$, $y = g(t)$, $t \in [t_1, t_2]$

$$\boxed{L = \int_{t_1}^{t_2}\sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt}$$

### 2.3 Polar Form: $r = f(\theta)$, $\theta \in [\theta_1, \theta_2]$

$$\boxed{L = \int_{\theta_1}^{\theta_2}\sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta}$$

---

## 3. Derivation of Cartesian Formula

Consider the curve $y = f(x)$. Between $x$ and $x + \Delta x$:

$$\Delta s \approx \sqrt{(\Delta x)^2 + (\Delta y)^2} = \Delta x\sqrt{1 + \left(\frac{\Delta y}{\Delta x}\right)^2}$$

As $\Delta x \to 0$, $\frac{\Delta y}{\Delta x} \to \frac{dy}{dx} = f'(x)$:

$$ds = \sqrt{1 + [f'(x)]^2}\,dx$$

Integrating from $a$ to $b$:

$$L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx \quad \blacksquare$$

---

## 4. Worked Examples

### Example 1: Perimeter of Circle $x^2 + y^2 = a^2$

**Solution:**

From $x^2 + y^2 = a^2 \Rightarrow \frac{dy}{dx} = -\frac{x}{y}$

$$1 + \left(\frac{dy}{dx}\right)^2 = 1 + \frac{x^2}{y^2} = \frac{x^2+y^2}{y^2} = \frac{a^2}{y^2}$$

$$\sqrt{1+\left(\frac{dy}{dx}\right)^2} = \frac{a}{y} = \frac{a}{\sqrt{a^2-x^2}}$$

By symmetry, take 4 times the arc in the first quadrant ($x$ from 0 to $a$):

$$L = 4\int_0^a \frac{a}{\sqrt{a^2-x^2}}\,dx = 4a\left[\sin^{-1}\!\left(\frac{x}{a}\right)\right]_0^a = 4a\left(\frac{\pi}{2} - 0\right) = \boxed{2\pi a}$$

---

### Example 2: Perimeter of Hypocycloid $\left(\frac{x}{a}\right)^{2/3}+\left(\frac{y}{b}\right)^{2/3}=1$

**Parametric equations:** $x = a\cos^3 t$, $y = b\sin^3 t$

$$\frac{dx}{dt} = -3a\cos^2 t\sin t, \quad \frac{dy}{dt} = 3b\sin^2 t\cos t$$

$$\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2 = 9a^2\cos^4 t\sin^2 t + 9b^2\sin^4 t\cos^2 t$$

$$= 9\sin^2 t\cos^2 t(a^2\cos^2 t + b^2\sin^2 t)$$

$$L = 4\int_0^{\pi/2}\sqrt{9\sin^2 t\cos^2 t(a^2\cos^2 t + b^2\sin^2 t)}\,dt$$

$$= 12\int_0^{\pi/2}\sin t\cos t\sqrt{a^2\cos^2 t + b^2\sin^2 t}\,dt$$

Let $u = \sin^2 t$, $du = 2\sin t\cos t\,dt$:

$$= 6\int_0^1 \sqrt{a^2(1-u) + b^2 u}\,du = 6\int_0^1\sqrt{a^2 + (b^2-a^2)u}\,du$$

$$= 6\cdot\left[\frac{2}{3(b^2-a^2)}\{a^2+(b^2-a^2)u\}^{3/2}\right]_0^1$$

$$= \frac{4}{b^2-a^2}\left[(b^2)^{3/2} - (a^2)^{3/2}\right] = \frac{4(b^3-a^3)}{b^2-a^2} = \boxed{\frac{4(b^3+a^3)}{b^2-a^2} \cdot\text{(check sign)}}$$

> For the **standard hypocycloid** $x^{2/3}+y^{2/3}=a^{2/3}$ (where $a=b$), the perimeter is $L = 6a$.

---

### Example 3: Perimeter of Cardioid $r = 4(1-\cos\theta)$

**Solution:**

$$\frac{dr}{d\theta} = 4\sin\theta$$

$$r^2 + \left(\frac{dr}{d\theta}\right)^2 = 16(1-\cos\theta)^2 + 16\sin^2\theta$$

$$= 16[(1-\cos\theta)^2 + \sin^2\theta] = 16[1 - 2\cos\theta + \cos^2\theta + \sin^2\theta]$$

$$= 16[2 - 2\cos\theta] = 32(1-\cos\theta)$$

Using $1-\cos\theta = 2\sin^2\frac{\theta}{2}$:

$$\sqrt{r^2 + (r')^2} = \sqrt{32\cdot 2\sin^2\frac{\theta}{2}} = 8\sin\frac{\theta}{2}$$

By symmetry (upper half from $0$ to $\pi$, then multiply by 2):

$$L = 2\int_0^\pi 8\sin\frac{\theta}{2}\,d\theta = 16\left[-2\cos\frac{\theta}{2}\right]_0^\pi = 16\left[-2\cdot 0 + 2\cdot 1\right] = \boxed{32}$$

---

### Example 4: Arc of the Standard Hypocycloid $x^{2/3}+y^{2/3}=a^{2/3}$

Parametrically: $x = a\cos^3 t$, $y = a\sin^3 t$.

By symmetry, $L = 4\times$ arc in first quadrant:

$$\frac{dx}{dt} = -3a\cos^2 t\sin t, \quad \frac{dy}{dt} = 3a\sin^2 t\cos t$$

$$\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2} = 3a\sin t\cos t$$

$$L = 4\int_0^{\pi/2}3a\sin t\cos t\,dt = 12a\int_0^{\pi/2}\sin t\cos t\,dt = 12a\cdot\frac{1}{2} = \boxed{6a}$$

---

## 5. Special Curve Reference

| Curve | Equation | Perimeter / Arc Length |
|:------|:---------|:----------------------|
| Circle | $x^2+y^2=a^2$ | $2\pi a$ |
| Hypocycloid | $x^{2/3}+y^{2/3}=a^{2/3}$ | $6a$ |
| Cardioid | $r=a(1+\cos\theta)$ | $8a$ |
| Cardioid | $r=a(1-\cos\theta)$ | $8a$ |
| Catenary | $y=a\cosh(x/a)$, $[0,L]$ | $a\sinh(L/a)$ |

---

## 6. Practice Problems

1. Find the perimeter of the ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ *(Answer involves elliptic integrals — approximate for circle case)*

2. Find the arc length of $y = \frac{x^{3/2}}{3}$ from $x=0$ to $x=4$

3. Find the perimeter of $r = 2(1+\sin\theta)$ &emsp; **Ans:** $8$

4. Find the total arc length of $x^{2/3}+y^{2/3}=4$ &emsp; **Ans:** $6\cdot\sqrt[3]{4^{3/2}}\cdot\ldots$ *(follow hypocycloid formula with $a=8$)*

---

## 7. Online References

- 📖 [Paul's Online Notes — Arc Length](https://tutorial.math.lamar.edu/Classes/CalcII/ArcLength.aspx)
- 📖 [Paul's Online Notes — Arc Length with Parametric](https://tutorial.math.lamar.edu/Classes/CalcII/ParaArcLength.aspx)
- 📖 [Khan Academy — Arc Length](https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions/line-integrals-in-scalar-fields/v/arc-length-formula)
- 📖 [LibreTexts — Arc Length](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/06%3A_Applications_of_Integration/6.04%3A_Arc_Length_of_a_Curve_and_Surface_Area)

---

*← [06 — Gamma & Beta Functions](./06_gamma_beta_functions.md) | [08 — Area by Plane Curves →](./08_area_plane_curves.md)*
