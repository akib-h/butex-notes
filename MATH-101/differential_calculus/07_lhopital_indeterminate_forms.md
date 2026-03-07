---
subject: MATH-101
topic: L'Hôpital's Rule and Indeterminate Forms
date: 2026-03-08
tags: [math, calculus, L'Hopital, indeterminate forms, limits, MATH-101]
---

# 7. L'Hôpital's Rule and Indeterminate Forms

## 7.1 What are Indeterminate Forms?

When evaluating limits, substituting the value of $x$ sometimes gives a form that is **undefined** — called an **indeterminate form**. These cannot be resolved by direct substitution.

### Complete Classification

| Indeterminate Form | How to Handle |
|:-------------------|:-------------|
| $\dfrac{0}{0}$ | Apply L'Hôpital directly |
| $\dfrac{\infty}{\infty}$ | Apply L'Hôpital directly |
| $\infty - \infty$ | Simplify/combine first, then L'Hôpital |
| $0 \cdot \infty$ | Rewrite as $\dfrac{0}{1/\infty}$ or $\dfrac{\infty}{1/0}$, then L'Hôpital |
| $0^0$ | Use logarithm: $y = f^g \Rightarrow \ln y = g\ln f$, then L'Hôpital |
| $1^\infty$ | Same — use logarithm |
| $\infty^0$ | Same — use logarithm |

**Determinate Forms (NOT indeterminate):**

| Form | Value |
|:-----|:------|
| $\infty + \infty$ | $\infty$ |
| $-\infty - \infty$ | $-\infty$ |
| $0^\infty$ | $0$ |
| $0^{-\infty}$ | $\infty$ |
| $\infty \cdot \infty$ | $\infty$ |

---

## 7.2 L'Hôpital's Rule

### Statement

> If $f(a) = g(a) = 0$ (or both $\to \pm\infty$), and $f, g$ are differentiable near $a$, and $g'(x) \neq 0$ near $a$, then:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} = \frac{f'(a)}{g'(a)} \quad \text{provided } g'(a) \neq 0$$

The rule can be applied **repeatedly** if the result is still indeterminate.

> **Important:** L'Hôpital's Rule applies **only** to $\dfrac{0}{0}$ or $\dfrac{\infty}{\infty}$ forms directly. All other indeterminate forms must first be rewritten.

---

## 7.3 Step-by-Step Strategy

```
1. Substitute x → a. Check which indeterminate form results.
2. For 0/0 or ∞/∞: Apply L'Hôpital (differentiate numerator and denominator separately).
3. For ∞ − ∞: Combine into a fraction, then apply L'Hôpital.
4. For 0·∞: Write as 0/(1/∞) = 0/0, or ∞/(1/0) = ∞/∞.
5. For 0⁰, 1^∞, ∞⁰: Let y = f^g, take ln y = g·ln f, find the limit of ln y, then y → e^(limit).
6. Repeat until a determinate value is obtained.
```

---

## 7.4 Worked Examples

### Example 1 — Type $\dfrac{0}{0}$

$$\lim_{x \to 0} \frac{x - \sin x}{x^3}$$

**Direct substitution:** $\dfrac{0-0}{0} = \dfrac{0}{0}$ ✓ Apply L'Hôpital:

$$= \lim_{x \to 0} \frac{1 - \cos x}{3x^2} \quad \left[\frac{0}{0}\right]$$

$$= \lim_{x \to 0} \frac{\sin x}{6x} \quad \left[\frac{0}{0}\right]$$

$$= \lim_{x \to 0} \frac{\cos x}{6} = \frac{1}{6}$$

$$\boxed{\lim_{x \to 0} \frac{x - \sin x}{x^3} = \frac{1}{6}}$$

---

### Example 2 — Type $1^\infty$

$$\lim_{x \to 0} (\cos x)^{\cot^2 x}$$

**Let** $y = (\cos x)^{\cot^2 x}$, so $\ln y = \cot^2 x \cdot \ln(\cos x) = \dfrac{\ln\cos x}{\tan^2 x}$ — form $\dfrac{0}{0}$.

Apply L'Hôpital:

$$\lim_{x \to 0} \frac{\ln\cos x}{\tan^2 x} = \lim_{x \to 0} \frac{-\sin x/\cos x}{2\tan x \sec^2 x} = \lim_{x \to 0} \frac{-\cos^2 x}{2} = -\frac{1}{2}$$

$$\therefore \lim_{x \to 0} \ln y = -\frac{1}{2} \implies \lim_{x \to 0} y = e^{-1/2}$$

$$\boxed{\lim_{x \to 0} (\cos x)^{\cot^2 x} = e^{-1/2}}$$

---

### Example 3 — Type $1^\infty$

$$\lim_{x \to 1} (1 - x^2)^{1/\log(1-x)}$$

**Let** $y = (1-x^2)^{1/\log(1-x)}$

$$\log y = \frac{\log(1-x^2)}{\log(1-x)} = \frac{\log[(1-x)(1+x)]}{\log(1-x)} = 1 + \frac{\log(1+x)}{\log(1-x)}$$

As $x \to 1^-$: $\log(1+x) \to \log 2$ (finite) and $\log(1-x) \to -\infty$

$$\lim_{x \to 1^-} \frac{\log(1+x)}{\log(1-x)} = 0$$

So $\lim_{x\to 1^-} \log y = 1 + 0 = 1 \implies y \to 10^1 = 10$

More cleanly applying L'Hôpital to $\dfrac{\log(1-x^2)}{\log(1-x)}$:

$$= \lim_{x\to 1} \frac{-2x/(1-x^2)}{-1/(1-x)} = \lim_{x\to 1} \frac{2x(1-x)}{1-x^2} = \lim_{x\to 1} \frac{2x}{1+x} = \frac{2}{2} = 1$$

$$\boxed{\lim_{x \to 1} (1-x^2)^{1/\log(1-x)} = e^1 = e}$$

---

### Example 4 — Type $\infty - \infty$

$$\lim_{x \to \pi/2} (\sec x - \tan x)$$

Combine into a single fraction:

$$= \lim_{x \to \pi/2} \frac{1 - \sin x}{\cos x} \quad \left[\frac{0}{0}\right]$$

Apply L'Hôpital:

$$= \lim_{x \to \pi/2} \frac{-\cos x}{-\sin x} = \frac{0}{1} = 0$$

$$\boxed{\lim_{x \to \pi/2} (\sec x - \tan x) = 0}$$

---

### Example 5 — Type $0 \cdot \infty$

$$\lim_{x \to 0} x \ln x$$

Rewrite as $\dfrac{\ln x}{1/x}$ — form $\dfrac{\infty}{\infty}$:

$$= \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0$$

$$\boxed{\lim_{x \to 0^+} x\ln x = 0}$$

---

### Example 6 — Type $0^\infty$

$$\lim_{x \to 0} (\sin x)^x$$

$$\ln y = x \ln(\sin x) = \frac{\ln(\sin x)}{1/x} \quad \left[\frac{-\infty}{\infty}\right]$$

Apply L'Hôpital:

$$= \lim_{x \to 0} \frac{\cot x}{-1/x^2} = \lim_{x \to 0} \frac{-x^2}{\tan x} \quad \left[\frac{0}{0}\right]$$

$$= \lim_{x \to 0} \frac{-2x}{\sec^2 x} = 0$$

$$\therefore \lim_{x \to 0} (\sin x)^x = e^0 = 1$$

---

### Example 7 — Type $\dfrac{\infty}{\infty}$

$$\lim_{x \to \infty} \frac{x^n}{e^x} = 0 \quad \text{for any fixed } n$$

(Apply L'Hôpital $n$ times; numerator eventually becomes $n!$, denominator remains $e^x \to \infty$.)

---

## 7.5 Practice Problems

Evaluate:

1. $\lim_{x \to 0} \left(\dfrac{\tan x}{x}\right)^{1/x^2}$

2. $\lim_{x \to 0} \dfrac{(e^x - 1)\tan^2 x}{x^3}$

3. $\lim_{x \to 0} \left(\dfrac{1}{\sin x} - \dfrac{1}{x}\right)$

4. $\lim_{x \to 0^+} x^x$

5. $\lim_{x \to \infty} x\sin\!\dfrac{1}{x}$

6. $\lim_{x \to 0} \dfrac{\ln(1 + x) - x}{x^2}$

---

## 7.6 References & Further Reading

- 📘 **Stewart, J.** — *Calculus*, Section 4.4 (L'Hôpital's Rule)
- 📘 **Apostol, T.M.** — *Calculus Vol. 1*, Section 7.12
- 🌐 [Paul's Online Notes — L'Hôpital's Rule](https://tutorial.math.lamar.edu/Classes/CalcI/LHospitalsRule.aspx)
- 🌐 [Khan Academy — L'Hôpital's Rule](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-4-7/v/l-hopital-s-rule-introduction)
- 🌐 [MIT OCW — Indeterminate Forms](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/2.-applications-of-differentiation/part-a-approximation-and-curve-sketching/session-33-examples-of-the-mean-value-theorem/)
- 🌐 [Wolfram MathWorld — L'Hôpital's Rule](https://mathworld.wolfram.com/LHospitalsRule.html)
- 🌐 [Brilliant.org — Indeterminate Forms](https://brilliant.org/wiki/indeterminate-forms/)
