---
subject: MATH-101
topic: Integration by Successive Reduction
date: 2026-03-14
tags: [notes, MATH-101, integration, successive-reduction, reduction-formula]
---

# 02 — Integration by Successive Reduction

> **Reference:** Motin Sir Book — Chapter 7 & 14 | Howard Anton — Section 7.3  
> **Online:** [Paul's Online Notes — Reduction Formulas](https://tutorial.math.lamar.edu/Classes/CalcI/ReductionFormulas.aspx)

---

## 1. What is Successive Reduction?

A **reduction formula** expresses an integral $I_n$ involving an integer parameter $n$ in terms of a simpler integral $I_{n-2}$ (or $I_{n-1}$). By repeatedly applying the formula, we reduce the problem to a base case that can be evaluated directly.

**General Form:**

$$I_n = f(x, n) + g(n)\cdot I_{n-2} \quad \text{or} \quad I_n = f(x, n) + g(n)\cdot I_{n-1}$$

This is derived using **Integration by Parts**.

---

## 2. Reduction Formula for $\int \sin^n x\,dx$

### Derivation

Let $I_n = \int \sin^n x\,dx = \int \sin^{n-1}x \cdot \sin x\,dx$

Apply integration by parts with:
- $u = \sin^{n-1}x \Rightarrow du = (n-1)\sin^{n-2}x\cos x\,dx$
- $dv = \sin x\,dx \Rightarrow v = -\cos x$

$$I_n = -\cos x \cdot \sin^{n-1}x + (n-1)\int \sin^{n-2}x \cdot \cos^2 x\,dx$$

Since $\cos^2 x = 1 - \sin^2 x$:

$$I_n = -\cos x\sin^{n-1}x + (n-1)\int \sin^{n-2}x\,dx - (n-1)\int \sin^n x\,dx$$

$$I_n + (n-1)I_n = -\cos x\sin^{n-1}x + (n-1)I_{n-2}$$

$$n\,I_n = -\cos x\sin^{n-1}x + (n-1)I_{n-2}$$

$$\boxed{I_n = \int \sin^n x\,dx = -\frac{1}{n}\sin^{n-1}x\cos x + \frac{n-1}{n}I_{n-2}}$$

---

## 3. Reduction Formula for $\int \cos^n x\,dx$

By an analogous derivation (using $u = \cos^{n-1}x$, $dv = \cos x\,dx$):

$$\boxed{I_n = \int \cos^n x\,dx = \frac{1}{n}\cos^{n-1}x\sin x + \frac{n-1}{n}I_{n-2}}$$

**Base Cases:**
- $I_0 = \int dx = x + C$
- $I_1 = \int \sin x\,dx = -\cos x + C$ (for sin formula)
- $I_1 = \int \cos x\,dx = \sin x + C$ (for cos formula)

---

## 4. Reduction Formula for $\int \sin^m x \cos^n x\,dx$

This combined case requires choosing which variable to reduce based on the parities of $m$ and $n$.

$$I_{m,n} = \int \sin^m x\cos^n x\,dx$$

**Reduction formula (reducing $m$):**

$$I_{m,n} = -\frac{\sin^{m-1}x\cos^{n+1}x}{m+n} + \frac{m-1}{m+n}I_{m-2,n}$$

**Strategy for Evaluation:**

| Condition | Substitution |
|:----------|:-------------|
| $m$ odd, $n$ anything | Let $\cos x = u$ |
| $m$ even, $n$ odd | Let $\sin x = u$ |
| $m$ odd, $n$ even | Let $\cos x = u$ |
| Both even | Use reduction formula |

---

## 5. Reduction Formula for $\int \tan^n x\,dx$

$$I_n = \int \tan^n x\,dx = \int \tan^{n-2}x(\sec^2 x - 1)\,dx$$

$$= \int \tan^{n-2}x\sec^2 x\,dx - \int \tan^{n-2}x\,dx$$

$$= \frac{\tan^{n-1}x}{n-1} - I_{n-2}$$

$$\boxed{I_n = \frac{\tan^{n-1}x}{n-1} - I_{n-2}}$$

---

## 6. Worked Examples

### Example 1: $\int \sin^6 x\,dx$

Using the reduction formula with $n = 6$:

$$I_6 = -\frac{1}{6}\sin^5 x\cos x + \frac{5}{6}I_4$$

Apply again with $n = 4$:

$$I_4 = -\frac{1}{4}\sin^3 x\cos x + \frac{3}{4}I_2$$

Apply again with $n = 2$:

$$I_2 = -\frac{1}{2}\sin x\cos x + \frac{1}{2}I_0 = -\frac{1}{2}\sin x\cos x + \frac{x}{2}$$

Note: $-\frac{1}{2}\sin x\cos x = -\frac{\sin 2x}{4}$

Substituting back:

$$I_4 = -\frac{1}{4}\sin^3 x\cos x + \frac{3}{4}\left(-\frac{1}{2}\sin x\cos x + \frac{x}{2}\right)$$

$$I_6 = -\frac{1}{6}\sin^5 x\cos x + \frac{5}{6}\left[-\frac{1}{4}\sin^3 x\cos x + \frac{3}{8}\!\left(x - \frac{\sin 2x}{2}\right)\right] + C$$

$$\boxed{I_6 = -\frac{1}{6}\sin^5 x\cos x - \frac{5}{24}\sin^3 x\cos x + \frac{5}{16}\!\left(x - \frac{\sin 2x}{2}\right) + C}$$

---

### Example 2: $\int \cos^7 x\,dx$

Since $n = 7$ is **odd**, use substitution $u = \sin x$, $du = \cos x\,dx$:

$$I = \int \cos^6 x\cdot\cos x\,dx = \int (1-\sin^2 x)^3\cos x\,dx = \int (1-u^2)^3\,du$$

$$= \int (1 - 3u^2 + 3u^4 - u^6)\,du = u - u^3 + \frac{3u^5}{5} - \frac{u^7}{7} + C$$

$$\boxed{= \sin x - \sin^3 x + \frac{3}{5}\sin^5 x - \frac{1}{7}\sin^7 x + C}$$

Alternatively, using the reduction formula with $n = 7$:

$$I_7 = \frac{1}{7}\cos^6 x\sin x + \frac{6}{7}I_5$$

$$I_5 = \frac{1}{5}\cos^4 x\sin x + \frac{4}{5}I_3$$

$$I_3 = \frac{1}{3}\cos^2 x\sin x + \frac{2}{3}I_1 = \frac{1}{3}\cos^2 x\sin x + \frac{2}{3}\sin x$$

Combining:

$$\boxed{I_7 = \frac{1}{7}\cos^6 x\sin x + \frac{6}{35}\cos^4 x\sin x + \frac{8}{35}\!\left(\cos^2 x\sin x + \frac{2}{3}\sin x\right) + C}$$

---

### Example 3: $\int \sin^3 x\cos^4 x\,dx$ (Mixed Powers)

Since $m=3$ is **odd**, let $u = \cos x$, $du = -\sin x\,dx$:

$$I = \int \sin^2 x\cdot\cos^4 x\cdot\sin x\,dx = \int (1-u^2)\cdot u^4\cdot(-du)$$

$$= -\int (u^4 - u^6)\,du = -\frac{u^5}{5} + \frac{u^7}{7} + C$$

$$\boxed{= -\frac{\cos^5 x}{5} + \frac{\cos^7 x}{7} + C}$$

---

### Example 4: $\int \sin^4 x\cos^5 x\,dx$

Since $n=5$ is **odd**, let $u = \sin x$, $du = \cos x\,dx$:

$$I = \int \sin^4 x\cdot\cos^4 x\cdot\cos x\,dx = \int u^4(1-u^2)^2\,du$$

$$= \int u^4(1 - 2u^2 + u^4)\,du = \int (u^4 - 2u^6 + u^8)\,du$$

$$= \frac{u^5}{5} - \frac{2u^7}{7} + \frac{u^9}{9} + C$$

$$\boxed{= \frac{\sin^5 x}{5} - \frac{2\sin^7 x}{7} + \frac{\sin^9 x}{9} + C}$$

---

### Example 5: $\int \sin^6 x\,dx$ via Reduction for $\int \sin^m x\cos^n x\,dx$

Using $I_{m,n} = -\frac{\sin^{m-1}x\cos^{n+1}x}{m+n} + \frac{m-1}{m+n}I_{m-2,n}$ with $n=0$, $m=6$:

$$I_{6,0} = -\frac{1}{6}\sin^5 x\cos x + \frac{5}{6}I_{4,0}$$

$$I_{4,0} = -\frac{1}{4}\sin^3 x\cos x + \frac{3}{4}I_{2,0}$$

$$I_{2,0} = -\frac{1}{2}\sin x\cos x + \frac{1}{2}I_{0,0} = -\frac{\sin 2x}{4} + \frac{x}{2}$$

*(Result matches Example 1 above.)*

---

## 7. General Reduction Formula for $I_{m,n}$ (Mixed)

For $I_{m,n} = \int \sin^m x\cos^n x\,dx$:

$$I_{m,n} = \frac{\sin^{m+1}x\cos^{n-1}x}{m+n} + \frac{n-1}{m+n}I_{m,n-2}$$

**Base Cases:**

$$I_{m,0} = \int \sin^m x\,dx \quad\text{(apply sin reduction)}$$

$$I_{0,n} = \int \cos^n x\,dx \quad\text{(apply cos reduction)}$$

$$I_{0,0} = \int dx = x$$

$$I_{1,0} = \int \sin x\,dx = -\cos x$$

$$I_{0,1} = \int \cos x\,dx = \sin x$$

---

## 8. Summary Table

| Formula | Expression |
|:--------|:-----------|
| $\int \sin^n x\,dx$ | $-\frac{1}{n}\sin^{n-1}x\cos x + \frac{n-1}{n}I_{n-2}$ |
| $\int \cos^n x\,dx$ | $\frac{1}{n}\cos^{n-1}x\sin x + \frac{n-1}{n}I_{n-2}$ |
| $\int \tan^n x\,dx$ | $\frac{\tan^{n-1}x}{n-1} - I_{n-2}$ |
| $\int \sin^m x\cos^n x\,dx$ | $-\frac{\sin^{m-1}x\cos^{n+1}x}{m+n} + \frac{m-1}{m+n}I_{m-2,n}$ |

---

## 9. Practice Problems

Evaluate using reduction formulas:

1. $\int \sin^8 x\,dx$
2. $\int \cos^{10} x\,dx$
3. $\int \sin^5 x\cos^8 x\,dx$
4. $\int \tan^4 x\,dx$

> **Hint for (3):** $m=5$ is odd → let $u = \cos x$

---

## 10. Online References

- 📖 [Paul's Online Notes — Integrals of Trig Functions](https://tutorial.math.lamar.edu/Classes/CalcI/IntegralsWithTrig.aspx)
- 📖 [LibreTexts — Trigonometric Integrals](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/07%3A_Techniques_of_Integration/7.02%3A_Trigonometric_Integrals)
- 📖 [MIT 18.01 Notes](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-4-techniques-of-integration/part-b-partial-fractions-integration-by-parts-arc-length-and-surface-area/)
- 📖 [Wolfram — Reduction Formulas](https://mathworld.wolfram.com/ReductionFormula.html)

---

*← [01 — Indefinite Integrals](./01_indefinite_integrals.md) | [03 — Definite Integrals →](./03_definite_integrals.md)*
