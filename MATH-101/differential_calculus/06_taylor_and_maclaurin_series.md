---
subject: MATH-101
topic: Taylor's Series and Maclaurin's Series
date: 2026-03-08
tags: [math, calculus, Taylor series, Maclaurin series, expansion, MATH-101]
---

# 6. Taylor's Series and Maclaurin's Series

## 6.1 Introduction

A **Taylor series** represents a function as an **infinite polynomial** (power series) centered at a point $x = a$. It allows us to approximate complex functions (like $\sin x$, $e^x$, $\ln x$) with polynomials — invaluable in computation and physics.

> The idea: if a function is infinitely differentiable at $a$, we can completely describe it near $a$ using its derivatives there.

---

## 6.2 Taylor's Series (Expansion about $x = a$)

$$\boxed{f(x) = f(a) + (x-a)f'(a) + \frac{(x-a)^2}{2!}f''(a) + \frac{(x-a)^3}{3!}f'''(a) + \cdots}$$

In sigma notation:

$$f(x) = \sum_{n=0}^{\infty} \frac{(x-a)^n}{n!} f^{(n)}(a)$$

---

## 6.3 Maclaurin's Series (Special Case: $a = 0$)

Setting $a = 0$ in Taylor's formula:

$$\boxed{f(x) = f(0) + xf'(0) + \frac{x^2}{2!}f''(0) + \frac{x^3}{3!}f'''(0) + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}f^{(n)}(0)}$$

---

## 6.4 Standard Maclaurin Series (Memorise These!)

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}, \quad x \in \mathbb{R}$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}, \quad x \in \mathbb{R}$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}, \quad x \in \mathbb{R}$$

$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^n}{n}, \quad -1 < x \leq 1$$

$$\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots = \sum_{n=0}^{\infty} x^n, \quad |x| < 1$$

$$(1+x)^m = 1 + mx + \frac{m(m-1)}{2!}x^2 + \frac{m(m-1)(m-2)}{3!}x^3 + \cdots, \quad |x| < 1$$

$$\tan^{-1} x = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}, \quad |x| \leq 1$$

---

## 6.5 Remainder Term (Taylor's Remainder)

The $n$th partial sum $P_n(x)$ approximates $f(x)$ with remainder:

$$R_n(x) = \frac{(x-a)^{n+1}}{(n+1)!} f^{(n+1)}(c), \quad c \in (a, x)$$

This is the **Lagrange form** of the remainder. If $R_n(x) \to 0$ as $n \to \infty$, the series converges to $f(x)$.

---

## 6.6 Worked Examples

### Example 1 — Expand $f(x) = \sin 3x$ at $x = \dfrac{\pi}{2}$

**Solution:** Here $a = \dfrac{\pi}{2}$.

Compute derivatives at $a = \dfrac{\pi}{2}$:

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(\pi/2)$ |
|:----|:-------------|:----------------|
| 0 | $\sin 3x$ | $\sin\dfrac{3\pi}{2} = -1$ |
| 1 | $3\cos 3x$ | $3\cos\dfrac{3\pi}{2} = 0$ |
| 2 | $-9\sin 3x$ | $-9\sin\dfrac{3\pi}{2} = 9$ |
| 3 | $-27\cos 3x$ | $-27\cos\dfrac{3\pi}{2} = 0$ |
| 4 | $81\sin 3x$ | $81\sin\dfrac{3\pi}{2} = -81$ |

Applying Taylor's formula:

$$\sin 3x = -1 + 0 \cdot \!\left(x - \frac{\pi}{2}\right) + \frac{9}{2!}\!\left(x - \frac{\pi}{2}\right)^{\!2} + 0 - \frac{81}{4!}\!\left(x - \frac{\pi}{2}\right)^{\!4} + \cdots$$

$$\boxed{\sin 3x = -1 + \frac{9}{2}\!\left(x - \frac{\pi}{2}\right)^{\!2} - \frac{81}{24}\!\left(x - \frac{\pi}{2}\right)^{\!4} + \cdots}$$

---

### Example 2 — Maclaurin Series for $e^x$

**Derive from scratch:**

$$f(x) = e^x \implies f^{(n)}(x) = e^x \implies f^{(n)}(0) = 1 \quad \forall n$$

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots$$

---

### Example 3 — Maclaurin Series for $\ln(1+x)$

$$f(x) = \ln(1+x)$$

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ |
|:----|:-------------|:------------|
| 0 | $\ln(1+x)$ | 0 |
| 1 | $(1+x)^{-1}$ | 1 |
| 2 | $-(1+x)^{-2}$ | $-1$ |
| 3 | $2(1+x)^{-3}$ | $2$ |
| $n$ | $(-1)^{n-1}(n-1)!(1+x)^{-n}$ | $(-1)^{n-1}(n-1)!$ |

$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots$$

---

### Example 4 — Using Maclaurin to Evaluate a Limit

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$$

Substituting the series for $e^x$:

$$= \lim_{x \to 0} \frac{\left(1 + x + \dfrac{x^2}{2} + \cdots\right) - 1 - x}{x^2} = \lim_{x \to 0} \frac{\dfrac{x^2}{2} + O(x^3)}{x^2} = \frac{1}{2}$$

---

## 6.7 Convergence of Taylor Series

A Taylor series converges to $f(x)$ at $x$ if and only if the remainder $R_n(x) \to 0$ as $n \to \infty$.

**Radius of convergence** $R$ is found via the Ratio Test:

$$R = \lim_{n \to \infty} \left|\frac{a_n}{a_{n+1}}\right|$$

The series converges for $|x - a| < R$ and diverges for $|x - a| > R$.

---

## 6.8 Practice Problems

1. Expand $f(x) = \cos x$ in Maclaurin's series and find the first 4 non-zero terms.
2. Expand $f(x) = e^{2x}$ about $x = 0$ up to $x^4$.
3. Expand $f(x) = \tan x$ in Maclaurin's series up to $x^5$.
4. Expand $\ln(1 + \sin x)$ up to $x^4$.
5. Use the Taylor series of $\sin x$ to evaluate $\lim_{x\to 0}\dfrac{\sin x - x}{x^3}$.
6. Expand $f(x) = \cos 2x$ in a Taylor series about $x = \dfrac{\pi}{4}$.

---

## 6.9 References & Further Reading

- 📘 **Stewart, J.** — *Calculus*, Section 11.10 (Taylor and Maclaurin Series)
- 📘 **Kreyszig, E.** — *Advanced Engineering Mathematics*, Ch. 15
- 🌐 [Paul's Online Notes — Taylor Series](https://tutorial.math.lamar.edu/Classes/CalcII/TaylorSeries.aspx)
- 🌐 [Khan Academy — Taylor and Maclaurin Series](https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new/bc-10-14/v/maclaurin-and-taylor-series-intuition)
- 🌐 [MIT OCW — Taylor Series](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/part-b-taylor-series/)
- 🌐 [3Blue1Brown — Taylor Series Visual](https://www.youtube.com/watch?v=3d6DsjIBzJ4)
- 🌐 [Wolfram MathWorld — Taylor Series](https://mathworld.wolfram.com/TaylorSeries.html)
