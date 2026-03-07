---
subject: MATH-101
topic: Extrema of Functions (Maxima and Minima)
date: 2026-03-08
tags: [math, calculus, maxima, minima, extrema, optimization, MATH-101]
---

# 8. Extrema of Functions — Maxima and Minima

## 8.1 Definitions

### Local (Relative) Extrema

> **Local Maximum:** $f(c)$ is a **local maximum** if $f(c) \geq f(x)$ for all $x$ near $c$.  
> Formally: $\exists\, \delta > 0$ such that $f(c) > f(x)$ for all $x \in (c-\delta, c+\delta),\ x \neq c$.

> **Local Minimum:** $f(c)$ is a **local minimum** if $f(c) \leq f(x)$ for all $x$ near $c$.

### Global (Absolute) Extrema

> **Global Maximum:** $f(c) \geq f(x)$ for **all** $x$ in the domain.  
> **Global Minimum:** $f(c) \leq f(x)$ for **all** $x$ in the domain.

---

## 8.2 Critical Points

> A point $x = c$ is a **critical point** of $f$ if either:
> - $f'(c) = 0$ (stationary point), or
> - $f'(c)$ does not exist

**All local extrema occur at critical points** (but not all critical points are extrema — some are inflection points).

---

## 8.3 First Derivative Test

For a critical point $c$ where $f'(c) = 0$:

| Sign change of $f'$ around $c$ | Conclusion |
|:-------------------------------|:-----------|
| $f' > 0$ before, $f' < 0$ after | **Local Maximum** |
| $f' < 0$ before, $f' > 0$ after | **Local Minimum** |
| No sign change | **Neither** (inflection point) |

---

## 8.4 Second Derivative Test

If $f'(c) = 0$ and $f''(c) \neq 0$:

$$f''(c) < 0 \implies \text{Local Maximum at } c$$
$$f''(c) > 0 \implies \text{Local Minimum at } c$$
$$f''(c) = 0 \implies \text{Test is inconclusive (use higher derivatives)}$$

### Higher-Order Test (when $f'' = 0$)

Find the **first non-zero derivative** $f^{(n)}(c)$:
- If $n$ is **odd** → inflection point (no extremum)
- If $n$ is **even** and $f^{(n)}(c) > 0$ → **local minimum**
- If $n$ is **even** and $f^{(n)}(c) < 0$ → **local maximum**

---

## 8.5 Global Extrema on a Closed Interval $[a, b]$

**Closed Interval Method:**

1. Find all critical points in $(a, b)$
2. Evaluate $f$ at each critical point and at the endpoints $a$, $b$
3. The **largest value** is the global max, the **smallest** is the global min

---

## 8.6 Inflection Points

> A point $c$ is an **inflection point** if the **concavity** of $f$ changes at $c$.

$$f''(c) = 0 \text{ and } f'' \text{ changes sign at } c \implies \text{inflection point}$$

- $f'' > 0$: curve is **concave up** (U-shaped)
- $f'' < 0$: curve is **concave down** (∩-shaped)

---

## 8.7 Worked Examples

### Example 1

**Find the maxima and minima of $f(x) = x^3 - 9x^2 + 15x - 3$.**

**Solution:**

$$f'(x) = 3x^2 - 18x + 15 = 3(x^2 - 6x + 5) = 3(x-1)(x-5)$$

Critical points: $x = 1$ and $x = 5$

$$f''(x) = 6x - 18$$

**At $x = 1$:** $f''(1) = 6 - 18 = -12 < 0 \implies$ **Local Maximum**

$$f(1) = 1 - 9 + 15 - 3 = \boxed{4}$$

**At $x = 5$:** $f''(5) = 30 - 18 = 12 > 0 \implies$ **Local Minimum**

$$f(5) = 125 - 225 + 75 - 3 = \boxed{-28}$$

---

### Example 2

**Find the maximum and minimum of $u = \dfrac{4}{x} + \dfrac{36}{y}$ given $x + y = 2$.**

**Solution:** Substitute $y = 2 - x$:

$$u = \frac{4}{x} + \frac{36}{2-x}$$

$$\frac{du}{dx} = -\frac{4}{x^2} + \frac{36}{(2-x)^2} = 0 \implies (2-x)^2 = 9x^2$$

$$2 - x = \pm 3x$$

- $2 - x = 3x \implies x = \dfrac{1}{2}$
- $2 - x = -3x \implies x = -1$

$$\frac{d^2u}{dx^2} = \frac{8}{x^3} + \frac{72}{(2-x)^3}$$

**At $x = \dfrac{1}{2}$:** $\dfrac{d^2u}{dx^2} = 64 + 64 > 0 \implies$ **Minimum**

$$u = \frac{4}{1/2} + \frac{36}{3/2} = 8 + 24 = \boxed{32}$$

**At $x = -1$:** $\dfrac{d^2u}{dx^2} = -8 - 8 < 0 \implies$ **Maximum**

$$u = \frac{4}{-1} + \frac{36}{3} = -4 + 12 = \boxed{8}$$

---

### Example 3

**Find the maximum and minimum of $f(x) = 2x^3 - 21x^2 + 36x - 20$.**

$$f'(x) = 6x^2 - 42x + 36 = 6(x^2 - 7x + 6) = 6(x-1)(x-6)$$

Critical points: $x = 1,\ x = 6$

$$f''(x) = 12x - 42$$

**At $x = 1$:** $f''(1) = -30 < 0 \implies$ **Maximum** $= 2 - 21 + 36 - 20 = -3$

**At $x = 6$:** $f''(6) = 30 > 0 \implies$ **Minimum** $= 432 - 756 + 216 - 20 = -128$

---

### Example 4

**Find maxima/minima of $f(x) = 1 + 2\sin x + 3\cos^2 x$, $\ 0 \leq x \leq \dfrac{\pi}{2}$.**

$$f'(x) = 2\cos x - 6\cos x \sin x = 2\cos x(1 - 3\sin x)$$

Setting $f'(x) = 0$:

- $\cos x = 0 \implies x = \dfrac{\pi}{2}$
- $\sin x = \dfrac{1}{3} \implies x = \sin^{-1}\!\dfrac{1}{3}$

$$f''(x) = -2\sin x - 6\cos 2x$$

**At $x = \dfrac{\pi}{2}$:**

$$f''\!\left(\frac{\pi}{2}\right) = -2 - 6\cos\pi = -2 + 6 = 4 > 0 \implies \textbf{Minimum}$$

$$f\!\left(\frac{\pi}{2}\right) = 1 + 2 + 0 = \boxed{3}$$

**At $x = \sin^{-1}\!\dfrac{1}{3}$:** Here $\cos x = \dfrac{2\sqrt{2}}{3}$

$$f''\!\left(\sin^{-1}\!\tfrac{1}{3}\right) = -\frac{2}{3} - 6\!\left[\left(\frac{2\sqrt{2}}{3}\right)^2 - \left(\frac{1}{3}\right)^2\right] = -\frac{2}{3} - 6 \cdot \frac{7}{9} < 0 \implies \textbf{Maximum}$$

$$f\!\left(\sin^{-1}\!\tfrac{1}{3}\right) = 1 + \frac{2}{3} + 3 \cdot \frac{8}{9} = \boxed{\frac{13}{3}}$$

---

### Example 5 — Classic: $x + \tfrac{1}{x}$

**Show that the maximum value of $f(x) = x + \dfrac{1}{x}$ is less than its minimum value.**

$$f'(x) = 1 - \frac{1}{x^2} = 0 \implies x = \pm 1$$

$$f''(x) = \frac{2}{x^3}$$

**At $x = 1$:** $f''(1) = 2 > 0 \implies$ **Minimum**; $f(1) = 2$

**At $x = -1$:** $f''(-1) = -2 < 0 \implies$ **Maximum**; $f(-1) = -2$

Since $f$ is defined on $\mathbb{R}\setminus\{0\}$, the "maximum" $(-2)$ occurs for $x < 0$ and the "minimum" $(2)$ occurs for $x > 0$ — **they are in different branches!**

$$\text{Maximum value } = -2 < 2 = \text{Minimum value}$$

This proves the maximum value is **less than** the minimum value. $\square$

---

## 8.8 Optimization — Applied Problems

**General Strategy:**

1. Identify the quantity to maximize/minimize
2. Express it as a function of one variable (use constraints to eliminate variables)
3. Find critical points
4. Verify using second derivative test or boundary comparison

**Example:** Find two positive numbers whose sum is $S$ and whose **product is maximized**.

Let the numbers be $x$ and $S - x$. Product: $P(x) = x(S-x) = Sx - x^2$

$$P'(x) = S - 2x = 0 \implies x = \frac{S}{2}$$

$$P''\!\left(\frac{S}{2}\right) = -2 < 0 \implies \text{Maximum}$$

Both numbers equal $\dfrac{S}{2}$ — i.e., equal numbers maximize the product.

---

## 8.9 Practice Problems

1. Find all extrema of $f(x) = x^4 - 8x^2 + 3$.
2. Find the local maxima and minima of $f(x) = \sin x + \cos x$ on $[0, 2\pi]$.
3. Given $xy = 4$, find the minimum value of $4x + 9y$ (for $x, y > 0$).
4. Find the maximum volume of a box (no lid) made from a $12 \times 12$ cm square sheet by cutting squares from corners.
5. Find the point on the curve $y = x^2$ closest to the point $(0, 5)$.

---

## 8.10 References & Further Reading

- 📘 **Stewart, J.** — *Calculus*, Ch. 4 (Applications of Differentiation)
- 📘 **Thomas, G.B.** — *Thomas' Calculus*, Section 4.1–4.3
- 🌐 [Paul's Online Notes — Minimum and Maximum Values](https://tutorial.math.lamar.edu/Classes/CalcI/MinMaxValues.aspx)
- 🌐 [Khan Academy — Maxima and Minima](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-5-2/v/minima-maxima-and-critical-points)
- 🌐 [MIT OCW — Max-Min Problems](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/2.-applications-of-differentiation/part-b-optimization-related-rates-and-newtons-method/)
- 🌐 [Wolfram MathWorld — Maximum](https://mathworld.wolfram.com/Maximum.html)
- 🌐 [Brilliant.org — Extrema](https://brilliant.org/wiki/maxima-and-minima/)
