---
subject: MATH-101
topic: Rolle's Theorem and Mean Value Theorem
date: 2026-03-08
tags: [math, calculus, Rolle's theorem, mean value theorem, MVT, MATH-101]
---

# 5. Rolle's Theorem and Mean Value Theorem

## 5.1 Rolle's Theorem

### Statement

> If a function $f(x)$ satisfies:
> 1. $f(x)$ is **continuous** on the closed interval $[a, b]$
> 2. $f(x)$ is **differentiable** on the open interval $(a, b)$
> 3. $f(a) = f(b)$
>
> Then there exists **at least one** value $c \in (a, b)$ such that $f'(c) = 0$.

### Geometric Interpretation

If a smooth curve starts and ends at the same height, there must be at least one point where the tangent is **horizontal** (slope = 0).

### Proof

**Case 1:** $f(x)$ is constant on $[a,b]$ — then $f'(x) = 0$ everywhere, so any $c \in (a,b)$ works.

**Case 2:** $f(x)$ is not constant — it must attain values either greater or less than $f(a)$. By the **Extreme Value Theorem**, $f$ attains its maximum $M$ (or minimum $m$) at some interior point $c \in (a, b)$.

At this maximum point $c$:

$$\lim_{h \to 0^+} \frac{f(c+h) - f(c)}{h} \leq 0 \quad \text{(from the right)}$$

$$\lim_{h \to 0^-} \frac{f(c+h) - f(c)}{h} \geq 0 \quad \text{(from the left)}$$

Since $f'(c)$ exists, both one-sided limits must be equal. The only possible common value is:

$$f'(c) = 0 \quad \square$$

---

## 5.2 Geometric Meaning and Corollary

- Rolle's theorem guarantees at least one **stationary point** between $a$ and $b$ when $f(a) = f(b)$
- **Corollary:** Between any two consecutive real roots of $f(x)$, there is at least one root of $f'(x)$

---

## 5.3 Worked Examples — Rolle's Theorem

### Example 1

**Verify Rolle's Theorem for $f(x) = x^2 + 5x - 6$ over $[-6, 1]$.**

**Solution:**

1. $f(x)$ is a polynomial → continuous and differentiable everywhere ✓
2. $f(-6) = 36 - 30 - 6 = 0$ and $f(1) = 1 + 5 - 6 = 0$, so $f(-6) = f(1)$ ✓

All conditions satisfied. By Rolle's Theorem, $\exists\, c \in (-6, 1)$ with $f'(c) = 0$.

$$f'(x) = 2x + 5 = 0 \implies c = -\frac{5}{2}$$

Since $-\dfrac{5}{2} \in (-6, 1)$, Rolle's Theorem is **verified**. ✓

---

### Example 2

**Verify Rolle's Theorem for $f(x) = x^3 - 3x^2 + 2x$ over $[0, 2]$.**

**Solution:**

$$f(0) = 0, \quad f(2) = 8 - 12 + 4 = 0 \implies f(0) = f(2) \checkmark$$

$$f'(x) = 3x^2 - 6x + 2 = 0 \implies x = \frac{6 \pm \sqrt{36 - 24}}{6} = 1 \pm \frac{1}{\sqrt{3}}$$

Both values $1 \pm \dfrac{1}{\sqrt{3}} \approx 0.42$ and $1.58$ lie in $(0, 2)$. ✓

---

### Example 3

**Verify Rolle's Theorem for $f(x) = (x-3)(x-5)$ over $[3, 5]$.**

$$f(3) = 0, \quad f(5) = 0 \checkmark$$

$$f'(x) = 2x - 8 = 0 \implies c = 4 \in (3, 5) \checkmark$$

---

## 5.4 Lagrange's Mean Value Theorem (First Mean Value Theorem)

### Statement

> If $f(x)$ satisfies:
> 1. $f(x)$ is **continuous** on $[a, b]$
> 2. $f(x)$ is **differentiable** on $(a, b)$
>
> Then there exists **at least one** $c \in (a, b)$ such that:
>
> $$f'(c) = \frac{f(b) - f(a)}{b - a}$$

### Geometric Interpretation

The **instantaneous rate of change** at $c$ equals the **average rate of change** over $[a, b]$.
Equivalently: there is a point where the tangent is **parallel to the secant** joining $(a, f(a))$ and $(b, f(b))$.

### Proof

Define a helper function:

$$g(x) = f(x) - rx, \quad \text{where } r = \frac{f(b) - f(a)}{b - a}$$

Then $g$ is continuous on $[a,b]$ and differentiable on $(a,b)$.

$$g(a) = f(a) - ra, \quad g(b) = f(b) - rb$$

$$g(a) = g(b) \iff f(a) - ra = f(b) - rb \iff r = \frac{f(b)-f(a)}{b-a} \checkmark$$

By **Rolle's Theorem** applied to $g$: $\exists\, c \in (a,b)$ with $g'(c) = 0$

$$g'(c) = f'(c) - r = 0 \implies f'(c) = r = \frac{f(b) - f(a)}{b - a} \quad \square$$

---

## 5.5 Cauchy's Mean Value Theorem (Second Mean Value Theorem)

### Statement

> If $f(x)$ and $g(x)$ are both continuous on $[a,b]$ and differentiable on $(a,b)$, and $g'(x) \neq 0$ in $(a,b)$, then $\exists\, c \in (a,b)$ such that:

$$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$

This reduces to Lagrange's MVT when $g(x) = x$.

---

## 5.6 Worked Examples — Mean Value Theorem

### Example 1

**Verify MVT for $f(x) = 3 + 2x - x^2$ on $[0, 1]$.**

**Solution:**

$f$ is a polynomial → continuous and differentiable ✓

$$f(0) = 3, \quad f(1) = 3 + 2 - 1 = 4$$

$$f'(x) = 2 - 2x \implies f'(c) = 2 - 2c$$

By MVT:

$$2 - 2c = \frac{f(1) - f(0)}{1 - 0} = \frac{4-3}{1} = 1$$

$$2c = 1 \implies c = \frac{1}{2} \in (0, 1) \checkmark$$

MVT **verified**. ✓

---

### Example 2

**Verify MVT for $f(x) = (x-1)(x-2)(x-3)$ on $[0, 1]$.**

**Solution:**

$$f(0) = (-1)(-2)(-3) = -6, \quad f(1) = 0$$

$$f'(x) = (x-2)(x-3) + (x-1)(x-3) + (x-1)(x-2) = 3x^2 - 12x + 11$$

By MVT:

$$3c^2 - 12c + 11 = \frac{0-(-6)}{1-0} = 6$$

$$3c^2 - 12c + 5 = 0 \implies c = \frac{12 \pm \sqrt{144 - 60}}{6} = \frac{12 \pm \sqrt{84}}{6} = 2 \pm \frac{\sqrt{21}}{3}$$

Taking $c = 2 - \dfrac{\sqrt{21}}{3} \approx 0.472 \in (0, 1)$ ✓

---

## 5.7 Applications of MVT

1. **Proving inequalities:** e.g., $|\sin a - \sin b| \leq |a - b|$  
   *Proof:* By MVT, $\sin b - \sin a = (b-a)\cos c$, so $|\sin b - \sin a| = |b-a||\cos c| \leq |b-a|$

2. **Monotonicity test:**
   - If $f'(x) > 0$ on $(a,b)$ → $f$ is **increasing** on $[a,b]$
   - If $f'(x) < 0$ on $(a,b)$ → $f$ is **decreasing** on $[a,b]$

3. **Uniqueness of roots:** If $f'(x) \neq 0$ on $(a,b)$, then $f$ has at most one root in $(a,b)$

---

## 5.8 Practice Problems

1. Verify Rolle's Theorem for $f(x) = x(x-1)(x-2)$ on $[0, 2]$.
2. Verify MVT for $f(x) = x^3 - x^2 - x + 1$ on $[-1, 2]$.
3. Show using MVT that $\ln(1+x) < x$ for all $x > 0$.
4. Using MVT, prove that $\dfrac{b-a}{b} < \ln\dfrac{b}{a} < \dfrac{b-a}{a}$ for $0 < a < b$.
5. Verify Rolle's theorem for $f(x) = e^x(\sin x - \cos x)$ on $[\pi/4,\ 5\pi/4]$.

---

## 5.9 References & Further Reading

- 📘 **Stewart, J.** — *Calculus*, Section 4.2 (Mean Value Theorem)
- 📘 **Spivak, M.** — *Calculus*, Ch. 11 (Significance of the Derivative)
- 🌐 [Paul's Online Notes — Mean Value Theorem](https://tutorial.math.lamar.edu/Classes/CalcI/MeanValueTheorem.aspx)
- 🌐 [Khan Academy — MVT](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-5-1/v/mean-value-theorem)
- 🌐 [MIT OCW — Mean Value Theorem](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/2.-applications-of-differentiation/part-a-approximation-and-curve-sketching/session-34-introduction-to-the-mean-value-theorem/)
- 🌐 [Brilliant.org — Rolle's Theorem](https://brilliant.org/wiki/rolles-theorem/)
- 🌐 [Wolfram MathWorld — Mean Value Theorem](https://mathworld.wolfram.com/MeanValueTheorem.html)
