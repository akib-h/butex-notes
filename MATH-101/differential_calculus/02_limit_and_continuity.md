---
subject: MATH-101
topic: Limit and Continuity
date: 2026-03-08
tags: [math, calculus, limit, continuity, MATH-101]
---

# 2. Limit and Continuity

## 2.1 The Concept of a Limit

> Intuitively, the **limit** of a function \(f(x)\) as \(x\) approaches \(a\) is the value \(L\) that \(f(x)\) gets arbitrarily close to as \(x\) gets arbitrarily close to \(a\) — regardless of whether \(f(a)\) is defined.

### Formal ($\varepsilon$-$\delta$) Definition

$$\lim_{x \to a} f(x) = L$$

means: for every $\varepsilon > 0$ (however small), there exists a $\delta > 0$ such that:

$$0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon$$

> **In plain English:** By taking \(x\) close enough to \(a\) (but not equal to \(a\)), the value of \(f(x)\) can be made arbitrarily close to \(L\).

---

## 2.2 One-Sided Limits

| Notation | Name | Meaning |
|:---------|:-----|:--------|
| $\lim_{x \to a^+} f(x)$ | **Right-Hand Limit (RHL)** | $f(x)$ as $x$ approaches $a$ from the right |
| $\lim_{x \to a^-} f(x)$ | **Left-Hand Limit (LHL)** | $f(x)$ as $x$ approaches $a$ from the left |

$$\text{RHL} = \lim_{x \to a^+} f(x) = \lim_{h \to 0} f(a + h)$$

$$\text{LHL} = \lim_{x \to a^-} f(x) = \lim_{h \to 0} f(a - h)$$

> **Key Fact:** $\lim_{x \to a} f(x)$ exists **iff** LHL = RHL.

---

## 2.3 Limit Laws

If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then:

| Law | Formula |
|:----|:--------|
| Sum | $\lim_{x \to a} [f(x) \pm g(x)] = L \pm M$ |
| Product | $\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$ |
| Quotient | $\lim_{x \to a} \dfrac{f(x)}{g(x)} = \dfrac{L}{M}$, provided $M \neq 0$ |
| Scalar | $\lim_{x \to a} [c f(x)] = cL$ |
| Power | $\lim_{x \to a} [f(x)]^n = L^n$ |
| Root | $\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L}$ (for even $n$, require $L \geq 0$) |

### Standard Limits

$$\lim_{x \to 0} \frac{\sin x}{x} = 1 \qquad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

$$\lim_{x \to 0} (1 + x)^{1/x} = e \qquad \lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1 \qquad \lim_{x \to 0} \frac{\ln(1+x)}{x} = 1$$

$$\lim_{x \to 0} \frac{a^x - 1}{x} = \ln a \qquad \lim_{x \to a} \frac{x^n - a^n}{x - a} = na^{n-1}$$

---

## 2.4 Limits at Infinity

$$\lim_{x \to \infty} \frac{1}{x^n} = 0 \quad (n > 0) \qquad \lim_{x \to \infty} e^{-x} = 0$$

**Technique:** For rational functions, divide numerator and denominator by the highest power of $x$.

$$\lim_{x \to \infty} \frac{3x^2 + 2x - 1}{5x^2 - 4} = \lim_{x \to \infty} \frac{3 + \frac{2}{x} - \frac{1}{x^2}}{5 - \frac{4}{x^2}} = \frac{3}{5}$$

---

## 2.5 Continuity

### Definition

A function $f(x)$ is **continuous at $x = a$** if **all three** conditions hold:

1. $f(a)$ is **defined**
2. $\lim_{x \to a} f(x)$ **exists** (i.e., LHL = RHL)
3. $\lim_{x \to a} f(x) = f(a)$

If any condition fails, $f$ has a **discontinuity** at $x = a$.

### Types of Discontinuity

| Type | Description | Example |
|:-----|:------------|:--------|
| **Removable** | Limit exists but $\neq f(a)$ | Hole in graph |
| **Jump** | LHL $\neq$ RHL | Step function |
| **Infinite** | Limit is $\pm\infty$ | Vertical asymptote |
| **Oscillatory** | Limit does not exist (oscillates) | $\sin(1/x)$ near 0 |

### Continuity on an Interval

$f$ is continuous on $[a, b]$ if it is:
- Continuous at every interior point $(a, b)$
- Right-continuous at $a$: $\lim_{x \to a^+} f(x) = f(a)$
- Left-continuous at $b$: $\lim_{x \to b^-} f(x) = f(b)$

### Algebra of Continuous Functions

If $f$ and $g$ are continuous at $a$, then so are $f \pm g$, $f \cdot g$, $f/g$ (provided $g(a) \neq 0$), and $f \circ g$.

---

## 2.6 Important Theorems on Continuity

### Intermediate Value Theorem (IVT)

> If $f$ is continuous on $[a, b]$ and $k$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c \in (a, b)$ such that $f(c) = k$.

**Application:** Proving roots exist. If $f(a) < 0$ and $f(b) > 0$, a root lies in $(a, b)$.

### Extreme Value Theorem (EVT)

> If $f$ is continuous on a closed interval $[a, b]$, then $f$ attains both its **maximum** and **minimum** values on $[a, b]$.

---

## 2.7 Worked Examples

### Example 1 — Continuity and Differentiability Test

**Test whether $f(x)$ is continuous at $x = 1$ and $x = 2$:**


\[
f(x) =
\begin{cases}
x, & 0 < x < 1 \

\[6pt]
2 - x, & 1 \leq x \leq 2 \

\[6pt]
x - \tfrac{1}{2}x^2, & x > 2
\end{cases}
\]


**At $x = 1$:**

$$\text{LHL} = \lim_{x \to 1^-} x = 1$$

$$\text{RHL} = \lim_{x \to 1^+} (2 - x) = 1$$

$$f(1) = 2 - 1 = 1$$

Since LHL = RHL = $f(1) = 1$, $f$ is **continuous at $x = 1$**. ✓

**At $x = 2$:**

$$\text{LHL} = \lim_{x \to 2^-} (2 - x) = 0$$

$$\text{RHL} = \lim_{x \to 2^+} \left(x - \tfrac{1}{2}x^2\right) = 2 - \tfrac{1}{2}(4) = 0$$

$$f(2) = 2 - 2 = 0$$

Since LHL = RHL = $f(2) = 0$, $f$ is **continuous at $x = 2$**. ✓

**Differentiability at $x = 1$:**

$$\text{LHD} = \lim_{h \to 0} \frac{f(1-h) - f(1)}{-h} = \lim_{h \to 0} \frac{(1-h) - 1}{-h} = \lim_{h \to 0} \frac{-h}{-h} = 1$$

$$\text{RHD} = \lim_{h \to 0} \frac{f(1+h) - f(1)}{h} = \lim_{h \to 0} \frac{(2-(1+h)) - 1}{h} = \lim_{h \to 0} \frac{-h}{h} = -1$$

Since LHD $\neq$ RHD, $f'(x)$ **does not exist at $x = 1$**. ✗

**Differentiability at $x = 2$:**

$$\text{LHD} = \lim_{h \to 0} \frac{f(2-h) - f(2)}{-h} = \lim_{h \to 0} \frac{(2-(2-h)) - 0}{-h} = \lim_{h \to 0} \frac{h}{-h} = -1$$

$$\text{RHD} = \lim_{h \to 0} \frac{f(2+h) - f(2)}{h} = \lim_{h \to 0} \frac{(2+h) - \tfrac{1}{2}(2+h)^2}{h}$$

$$= \lim_{h \to 0} \frac{-h(1 + \tfrac{1}{2}h)}{h} = -1$$

Since LHD = RHD $= -1$, $f'(x)$ **exists at $x = 2$**. ✓

---

### Example 2 — Continuity and Differentiability at $x = \pi/2$

**Test $f(x)$ at $x = \dfrac{\pi}{2}$:**

$$f(x) = \begin{cases} 1 & x < 0 \\ 1 + \sin x & 0 \leq x \leq \dfrac{\pi}{2} \\ 2 + \left(x - \dfrac{\pi}{2}\right)^2 & x \geq \dfrac{\pi}{2} \end{cases}$$

**Continuity:**

$$\text{LHL} = \lim_{x \to (\pi/2)^-} (1 + \sin x) = 1 + \sin\frac{\pi}{2} = 2$$

$$\text{RHL} = \lim_{x \to (\pi/2)^+} \left[2 + \left(x - \frac{\pi}{2}\right)^2\right] = 2 + 0 = 2$$

$$f\!\left(\frac{\pi}{2}\right) = 2 + 0 = 2$$

All three equal $2$, so $f$ is **continuous at** $x = \dfrac{\pi}{2}$. ✓

**Differentiability:**

LHD (using $f = 1 + \sin x$ for $x < \pi/2$):

$$f'\!\left(\frac{\pi}{2}\right) = \lim_{h \to 0} \frac{f\!\left(\frac{\pi}{2}-h\right) - f\!\left(\frac{\pi}{2}\right)}{-h} = \lim_{h \to 0} \frac{1 + \cos h - 2}{-h} = \lim_{h \to 0} \frac{\cos h - 1}{-h}$$

Using $\lim_{h\to 0}\frac{1-\cos h}{h} = 0$:

$$\text{LHD} = \lim_{h \to 0} \frac{-(1-\cos h)}{-h} = 0$$

RHD (using $f = 2 + (x-\pi/2)^2$):

$$f'\!\left(\frac{\pi}{2}\right) = \lim_{h \to 0} \frac{2 + h^2 - 2}{h} = \lim_{h \to 0} h = 0$$

Since LHD = RHD $= 0$, $f'(x)$ **exists at** $x = \dfrac{\pi}{2}$. ✓

---

## 2.8 Practice Problems

1. Discuss the continuity of:

```math
f(x) = \frac{x^2 - 9}{x - 3}
```

at \( x = 3 \).

---

2. Test continuity and differentiability of:

```math
f(x) =
\begin{cases}
5x - 4 & 0 < x \leq 1 \\
4x^2 - 3x & 1 < x < 2 \\
3x + 4 & x \geq 2
\end{cases}
```

at \( x = 1 \) and \( x = 2 \).

---

3. Prove that:

```math
f(x) = x^3 - 3x + 1
```

has a root in \( (1, 2) \) using IVT.

---

4. For what value of \( k \) is:

```math
f(x) =
\begin{cases}
kx^2 & x \leq 2 \\
3 & x > 2
\end{cases}
```

continuous at \( x = 2 \)?

---

## 2.9 References & Further Reading

- 📘 **Stewart, J.** — *Calculus*, Ch. 2 (Limits) and Ch. 1.5 (Continuity)
- 📘 **Apostol, T.M.** — *Calculus Vol. 1*, Ch. 3
- 🌐 [Paul's Online Notes — Computing Limits](https://tutorial.math.lamar.edu/Classes/CalcI/ComputingLimits.aspx)
- 🌐 [Khan Academy — Limits and Continuity](https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new)
- 🌐 [MIT OCW 18.01 — Limits](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-a-definition-and-basic-rules/session-2-limits-and-continuity/)
- 🌐 [Wolfram MathWorld — Limit](https://mathworld.wolfram.com/Limit.html)
- 🌐 [Brilliant.org — Continuity](https://brilliant.org/wiki/continuity/)
