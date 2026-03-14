---
subject: MATH-101
topic: Improper Integrals
date: 2026-03-14
tags: [notes, MATH-101, integration, improper-integrals, convergence, divergence]
---

# 05 — Improper Integrals

> **Reference:** Motin Sir Book — Chapter 11 (Examples + Exercises) | Howard Anton — Section 7.8  
> **Online:** [Paul's Online Notes — Improper Integrals](https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegrals.aspx)

---

## 1. What is an Improper Integral?

A **definite integral** $\int_a^b f(x)\,dx$ is called **improper** if:

1. One or both limits of integration are **infinite** ($\pm\infty$), OR
2. The integrand $f(x)$ is **unbounded** (has a vertical asymptote) at some point in $[a, b]$.

---

## 2. Type I: Infinite Limits

### Case 1a: Upper limit is $\infty$

$$\int_a^\infty f(x)\,dx = \lim_{b\to\infty}\int_a^b f(x)\,dx$$

### Case 1b: Lower limit is $-\infty$

$$\int_{-\infty}^b f(x)\,dx = \lim_{a\to-\infty}\int_a^b f(x)\,dx$$

### Case 1c: Both limits are infinite

$$\int_{-\infty}^\infty f(x)\,dx = \int_{-\infty}^c f(x)\,dx + \int_c^\infty f(x)\,dx$$

for any finite $c$ (usually $c = 0$). **Both** integrals must converge.

**Convergence/Divergence:**

- If the limit exists and is finite → integral **converges**
- If the limit is $\pm\infty$ or does not exist → integral **diverges**

---

## 3. Type II: Discontinuous Integrand

### Case 2a: Discontinuity at $x = b$

$$\int_a^b f(x)\,dx = \lim_{t\to b^-}\int_a^t f(x)\,dx$$

### Case 2b: Discontinuity at $x = a$

$$\int_a^b f(x)\,dx = \lim_{t\to a^+}\int_t^b f(x)\,dx$$

### Case 2c: Discontinuity at interior point $x = c$

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$$

Each part is evaluated as a Type II improper integral.

---

## 4. $p$-Integral Test

A frequently used result:

$$\int_1^\infty \frac{1}{x^p}\,dx = \begin{cases} \dfrac{1}{p-1} & \text{if } p > 1 \text{ (converges)} \\ \text{diverges} & \text{if } p \leq 1 \end{cases}$$

**Proof (for $p \neq 1$):**

$$\int_1^\infty x^{-p}\,dx = \lim_{b\to\infty}\left[\frac{x^{1-p}}{1-p}\right]_1^b = \lim_{b\to\infty}\frac{b^{1-p}-1}{1-p}$$

- If $p > 1$: $1-p < 0$, so $b^{1-p} \to 0$ and the integral $= \frac{1}{p-1}$ ✅
- If $p < 1$: $1-p > 0$, so $b^{1-p} \to \infty$ → diverges ✗
- If $p = 1$: $\int_1^\infty \frac{1}{x}\,dx = \lim[\ln x]_1^b = \infty$ → diverges ✗

---

## 5. Comparison Test for Convergence

If $0 \leq f(x) \leq g(x)$ for $x \geq a$:

- If $\int_a^\infty g(x)\,dx$ converges → $\int_a^\infty f(x)\,dx$ converges
- If $\int_a^\infty f(x)\,dx$ diverges → $\int_a^\infty g(x)\,dx$ diverges

---

## 6. Worked Examples

### Example 1

$$\int_0^\infty e^{-t}\cdot t^5\,dt$$

**Solution:** Recognize this as a Gamma function form $\Gamma(n) = \int_0^\infty e^{-t}t^{n-1}\,dt$:

Here $n - 1 = 5 \Rightarrow n = 6$:

$$= \Gamma(6) = 5! = 120$$

*(See Topic 06 for full Gamma function details)*

$$\boxed{= 120}$$

---

### Example 2

$$I = \int_0^\infty e^{-x^2}\,dx$$

**Solution:** This is related to the **Gaussian integral**. Let $x^2 = t \Rightarrow x = \sqrt{t}$, $dx = \frac{1}{2\sqrt{t}}\,dt$:

$$I = \int_0^\infty e^{-t}\cdot\frac{1}{2\sqrt{t}}\,dt = \frac{1}{2}\int_0^\infty e^{-t}\cdot t^{-1/2}\,dt = \frac{1}{2}\int_0^\infty e^{-t}\cdot t^{1/2-1}\,dt = \frac{1}{2}\Gamma\!\left(\frac{1}{2}\right)$$

Since $\Gamma\!\left(\frac{1}{2}\right) = \sqrt{\pi}$:

$$\boxed{I = \frac{\sqrt{\pi}}{2}}$$

This is one of the most important results in mathematics and statistics (Gaussian integral)!

---

### Example 3

$$\int_{-\infty}^\infty e^{-x^2}\,dx$$

**Solution:**

$$= \int_{-\infty}^0 e^{-x^2}\,dx + \int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2} + \frac{\sqrt{\pi}}{2} = \boxed{\sqrt{\pi}}$$

*(using the fact that $e^{-x^2}$ is an even function)*

---

### Example 4

$$\int_1^\infty \frac{1}{x^2}\,dx$$

**Solution:**

$$= \lim_{b\to\infty}\left[-\frac{1}{x}\right]_1^b = \lim_{b\to\infty}\left(-\frac{1}{b}+1\right) = \boxed{1}$$

The integral **converges** to 1.

---

### Example 5

$$\int_0^1 \frac{1}{\sqrt{x}}\,dx$$

**Solution:** This is Type II — discontinuity at $x=0$.

$$= \lim_{t\to 0^+}\int_t^1 x^{-1/2}\,dx = \lim_{t\to 0^+}\left[2\sqrt{x}\right]_t^1 = \lim_{t\to 0^+}(2 - 2\sqrt{t}) = \boxed{2}$$

Converges.

---

### Example 6

$$\int_0^\infty e^{-2y^2}\cdot y^2\,dy$$

**Solution:** Let $2y^2 = t \Rightarrow y = \sqrt{t/2}$, $y^2 = t/2$, $4y\,dy = dt \Rightarrow dy = \frac{dt}{4y} = \frac{dt}{4\sqrt{t/2}}$

$$I = \int_0^\infty e^{-t}\cdot\frac{t}{2}\cdot\frac{dt}{4\sqrt{t/2}} = \frac{1}{8}\int_0^\infty e^{-t}\cdot t\cdot\frac{\sqrt{2}}{\sqrt{t}}\,dt = \frac{\sqrt{2}}{8}\int_0^\infty e^{-t}\cdot t^{1/2}\,dt$$

$$= \frac{\sqrt{2}}{8}\int_0^\infty e^{-t}\cdot t^{3/2-1}\,dt = \frac{\sqrt{2}}{8}\Gamma\!\left(\frac{3}{2}\right) = \frac{\sqrt{2}}{8}\cdot\frac{1}{2}\Gamma\!\left(\frac{1}{2}\right) = \frac{\sqrt{2}}{8}\cdot\frac{\sqrt{\pi}}{2}$$

$$\boxed{= \frac{\sqrt{2\pi}}{16} = \frac{\sqrt{\pi}}{8\sqrt{2}}}$$

---

## 7. Summary of Convergence Rules

| Integral Type | Condition for Convergence |
|:-------------|:--------------------------|
| $\int_1^\infty \frac{1}{x^p}\,dx$ | $p > 1$ |
| $\int_0^1 \frac{1}{x^p}\,dx$ | $p < 1$ |
| $\int_0^\infty e^{-ax}\,dx$ | $a > 0$ |
| $\int_{-\infty}^\infty e^{-x^2}\,dx$ | Always $\sqrt{\pi}$ |

---

## 8. Practice Problems

1. $\displaystyle\int_0^\infty e^{-t}\cdot t^7\,dt$ &emsp; **Ans:** $5040$

2. $\displaystyle\int_1^\infty \frac{dx}{x^3}$ &emsp; **Ans:** $\frac{1}{2}$

3. $\displaystyle\int_0^1 \frac{dx}{\sqrt[3]{x}}$ &emsp; **Ans:** $\frac{3}{2}$

4. $\displaystyle\int_{-\infty}^\infty e^{-x^2}\,dx$ &emsp; **Ans:** $\sqrt{\pi}$

5. $\displaystyle\int_0^\infty x^4 e^{-x}\,dx$ &emsp; **Ans:** $24 = 4!$

---

## 9. Online References

- 📖 [Paul's Online Notes — Improper Integrals](https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegrals.aspx)
- 📖 [LibreTexts — Improper Integrals](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/05%3A_Integration/5.07%3A_Integrals_Resulting_in_Inverse_Trigonometric_Functions)
- 📖 [Khan Academy — Improper Integrals](https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-6-13/v/introduction-to-improper-integrals)
- 📖 [Wolfram MathWorld — Improper Integral](https://mathworld.wolfram.com/ImproperIntegral.html)

---

*← [04 — Walli's Formula](./04_wallis_formula.md) | [06 — Gamma and Beta Functions →](./06_gamma_beta_functions.md)*
