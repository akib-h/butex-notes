---
subject: MATH-101
topic: Indefinite Integrals — Standard Integrals and Special Types
date: 2026-03-14
tags: [notes, MATH-101, integration, indefinite-integrals, standard-integrals, substitution, partial-fractions, integration-by-parts]
---

# 01 — Indefinite Integrals: Standard Integrals & Special Types

> **Reference:** Motin Sir Book — Chapter 4 & 5 | Howard Anton — Chapter 5  
> **Online:** [Paul's Online Notes — Integrals](https://tutorial.math.lamar.edu/Classes/CalcI/IndefiniteIntegrals.aspx)

---

## 1. What is Integration?

Integration is the **reverse process of differentiation**. If $F'(x) = f(x)$, then we write:

$$\int f(x)\,dx = F(x) + C$$

where $C$ is the **constant of integration** (arbitrary constant), since differentiating a constant gives zero.

> **Physical Meaning:** Integration computes the *accumulation* of a quantity — e.g., the area under a curve, total displacement from velocity, total charge from current.

---

## 2. Standard Integration Formulas

These are derived directly by reversing known differentiation rules.

### 2.1 Algebraic

| # | Integral | Result |
|:--|:---------|:-------|
| 1 | $\int x^n\,dx$ | $\dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ |
| 2 | $\int \frac{1}{x}\,dx$ | $\ln\|x\| + C$ |
| 3 | $\int k\,dx$ | $kx + C$ |

### 2.2 Trigonometric

| # | Integral | Result |
|:--|:---------|:-------|
| 4 | $\int \sin x\,dx$ | $-\cos x + C$ |
| 5 | $\int \cos x\,dx$ | $\sin x + C$ |
| 6 | $\int \sec^2 x\,dx$ | $\tan x + C$ |
| 7 | $\int \csc^2 x\,dx$ | $-\cot x + C$ |
| 8 | $\int \sec x \tan x\,dx$ | $\sec x + C$ |
| 9 | $\int \csc x \cot x\,dx$ | $-\csc x + C$ |

### 2.3 Exponential & Logarithmic

| # | Integral | Result |
|:--|:---------|:-------|
| 10 | $\int e^x\,dx$ | $e^x + C$ |
| 11 | $\int a^x\,dx$ | $\dfrac{a^x}{\ln a} + C$ |
| 12 | $\int \ln x\,dx$ | $x\ln x - x + C$ |

### 2.4 Inverse Trigonometric Forms (Critical for Exam)

$$\boxed{\int \frac{dx}{a^2+x^2} = \frac{1}{a}\tan^{-1}\!\left(\frac{x}{a}\right) + C}$$

$$\boxed{\int \frac{dx}{a^2-x^2} = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C}$$

$$\boxed{\int \frac{dx}{x^2-a^2} = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C}$$

$$\boxed{\int \frac{dx}{\sqrt{a^2-x^2}} = \sin^{-1}\!\left(\frac{x}{a}\right) + C}$$

$$\boxed{\int \frac{dx}{\sqrt{a^2+x^2}} = \sinh^{-1}\!\left(\frac{x}{a}\right) + C = \ln\!\left[x+\sqrt{a^2+x^2}\right] + C}$$

$$\boxed{\int \frac{dx}{\sqrt{x^2-a^2}} = \cosh^{-1}\!\left(\frac{x}{a}\right) + C = \ln\!\left[x+\sqrt{x^2-a^2}\right] + C}$$

### 2.5 Quadratic Radical Forms

$$\int \sqrt{a^2-x^2}\,dx = \frac{x}{2}\sqrt{a^2-x^2} + \frac{a^2}{2}\sin^{-1}\!\left(\frac{x}{a}\right) + C$$

$$\int \sqrt{a^2+x^2}\,dx = \frac{x}{2}\sqrt{a^2+x^2} + \frac{a^2}{2}\sinh^{-1}\!\left(\frac{x}{a}\right) + C$$

$$\int \sqrt{x^2-a^2}\,dx = \frac{x}{2}\sqrt{x^2-a^2} - \frac{a^2}{2}\cosh^{-1}\!\left(\frac{x}{a}\right) + C$$

### 2.6 Functional Forms (Very Important)

$$\boxed{\int \frac{f'(x)}{\sqrt{f(x)}}\,dx = 2\sqrt{f(x)} + C}$$

$$\boxed{\int \frac{f'(x)}{f(x)}\,dx = \ln|f(x)| + C}$$

---

## 3. Methods of Integration

### 3.1 Method 1: Integration by Substitution

**Principle:** If the integrand contains $f(g(x)) \cdot g'(x)$, substitute $u = g(x)$, so $du = g'(x)\,dx$.

**Steps:**
1. Choose a substitution $u = g(x)$
2. Find $du = g'(x)\,dx$
3. Replace all $x$ terms with $u$
4. Integrate in terms of $u$
5. Back-substitute $u = g(x)$

#### Example 1

$$\int \frac{dx}{x^2 - 4x + 3}$$

**Solution:**

Complete the square in the denominator:

$$x^2 - 4x + 3 = x^2 - 2\cdot x\cdot 2 + 2^2 - 4 + 3 = (x-2)^2 + (-1) = (x-2)^2 - 1^2$$

Wait — actually $x^2 - 4x + 3 = (x-2)^2 - 4 + 3 = (x-2)^2 - 1$. So:

$$I = \int \frac{dx}{(x-2)^2 - 1^2}$$

Using formula $\int \frac{dx}{x^2-a^2} = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C$ with $x \to (x-2)$, $a=1$:

$$\boxed{I = \frac{1}{2}\ln\left|\frac{x-2-1}{x-2+1}\right| + C = \frac{1}{2}\ln\left|\frac{x-3}{x-1}\right| + C}$$

#### Example 2

$$I = \int \frac{3x+2}{5x^2+2x+3}\,dx$$

**Solution:**

Express the numerator as $A \cdot \frac{d}{dx}(5x^2+2x+3) + B$:

$$\frac{d}{dx}(5x^2+2x+3) = 10x + 2$$

Let $3x + 2 = A(10x+2) + B$. Comparing:

- Coefficient of $x$: $3 = 10A \Rightarrow A = \frac{3}{10}$
- Constant: $2 = 2A + B \Rightarrow B = 2 - \frac{3}{5} = \frac{7}{5}$

$$I = \frac{3}{10}\int\frac{10x+2}{5x^2+2x+3}\,dx + \frac{7}{5}\int\frac{dx}{5x^2+2x+3}$$

First part uses $\int \frac{f'}{f}\,dx = \ln|f|$:

$$= \frac{3}{10}\ln|5x^2+2x+3| + \frac{7}{25}\int\frac{dx}{x^2+\frac{2}{5}x+\frac{3}{5}}$$

Complete the square: $x^2 + \frac{2}{5}x + \frac{3}{5} = \left(x+\frac{1}{5}\right)^2 + \frac{14}{25}$

$$\boxed{I = \frac{3}{10}\ln|5x^2+2x+3| + \frac{7}{25}\cdot\frac{5}{\sqrt{14}}\tan^{-1}\!\left(\frac{x+\frac{1}{5}}{\frac{\sqrt{14}}{5}}\right) + C}$$

#### Example 3 (Radical Substitution)

$$\int x^2\sqrt{x^6-1}\,dx$$

**Solution:** Let $u = x^3$, so $du = 3x^2\,dx \Rightarrow x^2\,dx = \frac{1}{3}\,du$

$$I = \frac{1}{3}\int\sqrt{u^2-1}\,du$$

Using $\int\sqrt{x^2-a^2}\,dx = \frac{x}{2}\sqrt{x^2-a^2} - \frac{a^2}{2}\cosh^{-1}\!\left(\frac{x}{a}\right) + C$ with $a=1$:

$$= \frac{1}{3}\left[\frac{u}{2}\sqrt{u^2-1} - \frac{1}{2}\cosh^{-1}(u)\right] + C$$

$$\boxed{= \frac{x^3}{6}\sqrt{x^6-1} + \frac{1}{2}\ln\left(x^3+\sqrt{x^6-1}\right) + C}$$

---

### 3.2 Method 2: Integration by Parts

**Formula:**

$$\boxed{\int u\,dv = uv - \int v\,du}$$

**Choosing $u$ and $dv$ (LIATE Rule):**

| Priority | Function Type | Example |
|:--------:|:-------------|:--------|
| 1st (u) | **L**ogarithm | $\ln x$ |
| 2nd (u) | **I**nverse trig | $\sin^{-1}x$ |
| 3rd (u) | **A**lgebraic | $x^n$ |
| 4th (u) | **T**rigonometric | $\sin x$, $\cos x$ |
| 5th (u) | **E**xponential | $e^x$ |

#### Example 4

$$\int x e^x\,dx$$

**Solution:** Let $u = x$, $dv = e^x\,dx \Rightarrow du = dx$, $v = e^x$

$$\int x e^x\,dx = xe^x - \int e^x\,dx = \boxed{xe^x - e^x + C = e^x(x-1) + C}$$

#### Example 5

$$\int \ln x\,dx$$

**Solution:** Let $u = \ln x$, $dv = dx \Rightarrow du = \frac{1}{x}dx$, $v = x$

$$\int \ln x\,dx = x\ln x - \int x\cdot\frac{1}{x}\,dx = x\ln x - \int dx = \boxed{x\ln x - x + C}$$

---

### 3.3 Method 3: Partial Fractions

Used when integrating rational functions $\frac{P(x)}{Q(x)}$ where degree of $P$ < degree of $Q$.

**Decomposition Types:**

| Denominator Factor | Partial Fraction Form |
|:-------------------|:----------------------|
| $(ax+b)$ | $\dfrac{A}{ax+b}$ |
| $(ax+b)^2$ | $\dfrac{A}{ax+b} + \dfrac{B}{(ax+b)^2}$ |
| $(ax^2+bx+c)$ irreducible | $\dfrac{Ax+B}{ax^2+bx+c}$ |

#### Example 6

$$\int \frac{x^2}{x^2 - a^2}\,dx$$

**Solution:**

$$\frac{x^2}{x^2-a^2} = \frac{x^2 - a^2 + a^2}{x^2-a^2} = 1 + \frac{a^2}{x^2-a^2}$$

$$I = \int dx + a^2\int\frac{dx}{x^2-a^2} = x + a^2\cdot\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C$$

$$\boxed{= x + \frac{a}{2}\ln\left|\frac{x-a}{x+a}\right| + C}$$

---

## 4. Special Types of Integrals

These require specific substitution tricks covered in Chapter 5 (Motin Sir).

### 4.1 Type 1: $\int \frac{dx}{(ax+b)\sqrt{cx+d}}$

**Substitution:** Let $cx + d = u^2$

#### Example 7

$$\int \frac{dx}{(x+2)\sqrt{x+3}}$$

**Solution:** Let $x + 3 = u^2 \Rightarrow x + 2 = u^2 - 1$, $dx = 2u\,du$

$$I = \int \frac{2u\,du}{(u^2-1)\cdot u} = 2\int\frac{du}{u^2-1} = 2\cdot\frac{1}{2}\ln\left|\frac{u-1}{u+1}\right| + C$$

$$\boxed{= \ln\left|\frac{\sqrt{x+3}-1}{\sqrt{x+3}+1}\right| + C}$$

### 4.2 Type 2: $\int \frac{dx}{\sqrt{(x-\alpha)(x-\beta)}}$

**Substitution:** Let $x - \alpha = u^2$

#### Example 8

$$\int \frac{dx}{\sqrt{(x+2)(3-x)}}$$

**Solution:** Let $x + 2 = u^2 \Rightarrow x = u^2 - 2$, $dx = 2u\,du$, and $3 - x = 5 - u^2$:

$$I = \int\frac{2u\,du}{u\sqrt{5-u^2}} = 2\int\frac{du}{\sqrt{5-u^2}} = 2\sin^{-1}\!\left(\frac{u}{\sqrt{5}}\right) + C$$

$$\boxed{= 2\sin^{-1}\!\left(\sqrt{\frac{x+2}{5}}\right) + C}$$

### 4.3 Type 3: $\int \frac{(px+q)\,dx}{\sqrt{ax^2+bx+c}}$

**Strategy:** Express $px+q = m\cdot\frac{d}{dx}(ax^2+bx+c) + n$, then split.

### 4.4 Type 4: $\int \frac{dx}{(px+q)\sqrt{ax^2+b}}$

**Substitution:** Let $px + q = \frac{1}{u}$

#### Example 9

$$\int \frac{dx}{x\sqrt{x^2+x+9}}$$

**Solution:** Let $x = \frac{1}{u}$, $dx = -\frac{1}{u^2}\,du$:

After substitution and simplification, we get an integral of the form $\int \frac{du}{\sqrt{9u^2+u+1}}$, which is then completed by the square and solved using the $\cosh^{-1}$ formula.

$$\boxed{I = -\frac{1}{3}\cosh^{-1}\!\left(\frac{18+x}{\sqrt{35}}\right) + C}$$

### 4.5 Type 5: $\int \frac{dx}{a \pm b\cos x}$ and $\int \frac{dx}{a \pm b\sin x}$

**Weierstrass Substitution:** Let $t = \tan\frac{x}{2}$

$$\sin x = \frac{2t}{1+t^2}, \quad \cos x = \frac{1-t^2}{1+t^2}, \quad dx = \frac{2\,dt}{1+t^2}$$

#### Example 10

$$\int \frac{dx}{4 + 5\cos x}$$

**Solution:** Using $t = \tan\frac{x}{2}$:

$$I = \int\frac{\frac{2\,dt}{1+t^2}}{4 + 5\cdot\frac{1-t^2}{1+t^2}} = \int\frac{2\,dt}{4(1+t^2) + 5(1-t^2)} = \int\frac{2\,dt}{9 - t^2}$$

$$= \frac{2}{2\cdot3}\ln\left|\frac{3+t}{3-t}\right| + C = \frac{1}{3}\ln\left|\frac{3+\tan\frac{x}{2}}{3-\tan\frac{x}{2}}\right| + C$$

### 4.6 Type 6: $\int \frac{p\cos x + q\sin x}{a\cos x + b\sin x}\,dx$

**Strategy:** Express numerator as $M\cdot$(denominator) $+ N\cdot\frac{d}{dx}$(denominator)

$$\int\frac{p\cos x + q\sin x}{a\cos x + b\sin x}\,dx = Mx + N\ln|a\cos x + b\sin x| + C$$

---

## 5. Completion of Square Technique

Used when the integrand has a quadratic $ax^2 + bx + c$ under a root or in denominator.

$$ax^2 + bx + c = a\!\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right)$$

#### Example 11

$$\int \frac{dx}{\sqrt{5 - 4x - 2x^2}}$$

**Solution:**

$$5 - 4x - 2x^2 = -2\!\left(x^2 + 2x - \frac{5}{2}\right) = -2\!\left[\left(x+1\right)^2 - \frac{7}{2}\right] = \frac{7}{2} - 2(x+1)^2$$

Hmm — factor out $2$:

$$= 2\left(\frac{7}{2} - (x+1)^2\right) \cdot \frac{1}{2}$$

Actually: $5 - 4x - 2x^2 = -(2x^2+4x-5) = -2(x^2+2x) + 5 = -2[(x+1)^2 - 1] + 5 = 7 - 2(x+1)^2$

$$I = \int \frac{dx}{\sqrt{7 - 2(x+1)^2}} = \frac{1}{\sqrt{2}}\int\frac{dx}{\sqrt{\frac{7}{2} - (x+1)^2}} = \frac{1}{\sqrt{2}}\sin^{-1}\!\left(\frac{x+1}{\sqrt{7/2}}\right) + C$$

$$\boxed{= \frac{1}{\sqrt{2}}\sin^{-1}\!\left(\frac{\sqrt{2}(x+1)}{\sqrt{7}}\right) + C}$$

---

## 6. Summary of Key Strategies

```
Integrand Type                        → Method
─────────────────────────────────────────────────────────────────
Rational function (degree P < Q)      → Partial Fractions
f'(x) · f(x)^n type                  → Substitution u = f(x)
Product of two different fn types     → Integration by Parts (LIATE)
Quadratic under root / in denominator → Complete the Square
Trig with (a ± b·cos x) denominator  → Weierstrass t = tan(x/2)
(ax+b)√(cx+d) denominator            → Let cx+d = u²
```

---

## 7. Practice Problems

1. $\displaystyle\int \frac{x\,dx}{a^4 + x^4}$ &emsp; *(Hint: Let $x^2 = u$)* &emsp; **Ans:** $\frac{1}{2a^2}\tan^{-1}\!\left(\frac{x^2}{a^2}\right) + C$

2. $\displaystyle\int \frac{\sec^2x\,dx}{4 + 9\tan^2x}$ &emsp; **Ans:** $\frac{1}{6}\tan^{-1}\!\left(\frac{3\tan x}{2}\right) + C$

3. $\displaystyle\int \frac{dx}{\sqrt{(1-x)\sqrt{1-x^2}}}$ &emsp; **Ans:** $\sqrt{\frac{1+x}{1-x}} + C$

4. $\displaystyle\int \frac{dx}{(x^2-1)\sqrt{x^2+1}}$ &emsp; **Ans:** $\frac{1}{2\sqrt{2}}\ln\left|\frac{\sqrt{1+x^2}-\sqrt{2}\,x}{\sqrt{1+x^2}+\sqrt{2}\,x}\right| + C$

---

## 8. Online References

- 📖 [Paul's Online Notes — Substitution Rule](https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleIndefinite.aspx)
- 📖 [Paul's Online Notes — Integration by Parts](https://tutorial.math.lamar.edu/Classes/CalcI/IntegrationByParts.aspx)
- 📖 [Khan Academy — Integration](https://www.khanacademy.org/math/integral-calculus)
- 📖 [MIT OpenCourseWare — 18.01 Single Variable Calculus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/)
- 📖 [Wolfram MathWorld — Indefinite Integral](https://mathworld.wolfram.com/IndefiniteIntegral.html)
- 📖 [LibreTexts — Techniques of Integration](https://math.libretexts.org/Bookshelves/Calculus/Book%3A_Calculus_(OpenStax)/07%3A_Techniques_of_Integration)

---

*← Back to [Integration Module README](./README.md) | Next: [02 — Successive Reduction →](./02_successive_reduction.md)*
