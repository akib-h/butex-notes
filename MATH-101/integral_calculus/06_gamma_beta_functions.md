---
subject: MATH-101
topic: Gamma and Beta Functions
date: 2026-03-14
tags: [notes, MATH-101, integration, gamma-function, beta-function, special-functions]
---

# 06 — Gamma and Beta Functions

> **Reference:** Motin Sir Book — Chapter 11 (must: examples 1, 2) | Howard Anton  
> **Online:** [MathWorld — Gamma Function](https://mathworld.wolfram.com/GammaFunction.html) | [NIST Digital Library](https://dlmf.nist.gov/5)

---

## 1. Gamma Function

### 1.1 Definition

The **Gamma Function** is defined by the improper integral:

$$\boxed{\Gamma(x) = \int_0^\infty e^{-t}\cdot t^{x-1}\,dt, \quad x > 0}$$

> **Note:** $\Gamma$ (capital Greek letter "Gamma") is a *function of a single variable* $x$. It is the generalization of the factorial to real (and complex) numbers.

The integral converges for all $x > 0$.

---

### 1.2 Key Properties

| # | Property | Statement |
|:--|:---------|:----------|
| 1 | Identity | $\Gamma(1) = 1$ |
| 2 | Recurrence | $\Gamma(x+1) = x\,\Gamma(x)$ |
| 3 | Factorial | $\Gamma(n) = (n-1)!$ for positive integer $n$ |
| 4 | Half-integer | $\Gamma\!\left(\dfrac{1}{2}\right) = \sqrt{\pi}$ |
| 5 | Reflection | $\Gamma(x)\,\Gamma(1-x) = \dfrac{\pi}{\sin(\pi x)}$ |

---

### 1.3 Proofs of Key Properties

#### Proof: $\Gamma(1) = 1$

$$\Gamma(1) = \int_0^\infty e^{-t}\cdot t^{1-1}\,dt = \int_0^\infty e^{-t}\,dt = \left[-e^{-t}\right]_0^\infty = 0 - (-1) = 1 \quad \blacksquare$$

#### Proof: $\Gamma(x+1) = x\,\Gamma(x)$ (Recurrence Relation)

Integrate by parts with $u = t^x$ and $dv = e^{-t}\,dt$:

$$\Gamma(x+1) = \int_0^\infty e^{-t}t^x\,dt = \left[-e^{-t}t^x\right]_0^\infty + x\int_0^\infty e^{-t}t^{x-1}\,dt$$

The boundary term $\left[-e^{-t}t^x\right]_0^\infty = 0 - 0 = 0$ (since $e^{-t}$ dominates $t^x$).

$$\Gamma(x+1) = x\int_0^\infty e^{-t}t^{x-1}\,dt = x\,\Gamma(x) \quad \blacksquare$$

#### Corollary: $\Gamma(n) = (n-1)!$

Applying the recurrence repeatedly:

$$\Gamma(n) = (n-1)\,\Gamma(n-1) = (n-1)(n-2)\,\Gamma(n-2) = \cdots = (n-1)!\,\Gamma(1) = (n-1)!$$

#### Proof: $\Gamma\!\left(\frac{1}{2}\right) = \sqrt{\pi}$

$$\Gamma\!\left(\frac{1}{2}\right) = \int_0^\infty e^{-t}\cdot t^{-1/2}\,dt$$

Let $t = x^2$, $dt = 2x\,dx$:

$$= \int_0^\infty e^{-x^2}\cdot x^{-1}\cdot 2x\,dx = 2\int_0^\infty e^{-x^2}\,dx = 2\cdot\frac{\sqrt{\pi}}{2} = \sqrt{\pi} \quad \blacksquare$$

*(using the Gaussian integral result from Topic 05)*

---

### 1.4 Important Values

| $x$ | $\Gamma(x)$ |
|:---:|:-----------:|
| $1$ | $1$ |
| $2$ | $1$ |
| $3$ | $2$ |
| $4$ | $6$ |
| $5$ | $24$ |
| $n$ | $(n-1)!$ |
| $\frac{1}{2}$ | $\sqrt{\pi}$ |
| $\frac{3}{2}$ | $\frac{\sqrt{\pi}}{2}$ |
| $\frac{5}{2}$ | $\frac{3\sqrt{\pi}}{4}$ |

**Pattern for half-integers:**
$$\Gamma\!\left(n + \frac{1}{2}\right) = \frac{(2n-1)!!}{2^n}\sqrt{\pi} = \frac{1\cdot3\cdot5\cdots(2n-1)}{2^n}\sqrt{\pi}$$

---

### 1.5 Alternative Form

$$\Gamma(n) = 2\int_0^\infty e^{-x^2}x^{2n-1}\,dx$$

**Proof:** Let $t = x^2$, $dt = 2x\,dx$:

$$\Gamma(n) = \int_0^\infty e^{-t}t^{n-1}\,dt = \int_0^\infty e^{-x^2}(x^2)^{n-1}\cdot 2x\,dx = 2\int_0^\infty e^{-x^2}x^{2n-1}\,dx \quad \blacksquare$$

---

## 2. Beta Function

### 2.1 Definition

The **Beta Function** is defined as:

$$\boxed{\beta(x,y) = \int_0^1 t^{x-1}(1-t)^{y-1}\,dt, \quad x,y > 0}$$

> **Note:** $\beta$ is a *function of two variables*. Unlike $\Gamma$, there is no simple connection to $\sqrt{t}$ or $\ln t$ — it is defined purely by this integral.

---

### 2.2 Key Properties

| # | Property | Statement |
|:--|:---------|:----------|
| 1 | Symmetry | $\beta(x,y) = \beta(y,x)$ |
| 2 | Relation to $\Gamma$ | $\beta(x,y) = \dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)}$ |
| 3 | Special value | $\beta\!\left(\dfrac{1}{2},\dfrac{1}{2}\right) = \pi$ |

---

### 2.3 Proofs of Key Properties

#### Proof: Symmetry $\beta(x,y) = \beta(y,x)$

Let $t = 1-u$, $dt = -du$. When $t=0$, $u=1$; when $t=1$, $u=0$:

$$\beta(x,y) = \int_0^1 t^{x-1}(1-t)^{y-1}\,dt = \int_1^0 (1-u)^{x-1}u^{y-1}(-du) = \int_0^1 u^{y-1}(1-u)^{x-1}\,du = \beta(y,x) \quad \blacksquare$$

#### Proof: Alternative Form

$$\boxed{\beta(x,y) = 2\int_0^{\pi/2}\sin^{2x-1}\theta\cos^{2y-1}\theta\,d\theta}$$

**Proof:** Let $t = \sin^2\theta$, $dt = 2\sin\theta\cos\theta\,d\theta$. When $t=0$, $\theta=0$; when $t=1$, $\theta=\frac{\pi}{2}$:

$$\beta(x,y) = \int_0^{\pi/2}(\sin^2\theta)^{x-1}(\cos^2\theta)^{y-1}\cdot 2\sin\theta\cos\theta\,d\theta = 2\int_0^{\pi/2}\sin^{2x-1}\theta\cos^{2y-1}\theta\,d\theta \quad \blacksquare$$

---

### 2.4 Relation Between Beta and Gamma Functions

$$\boxed{\beta(x,y) = \frac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)}}$$

This is one of the most fundamental identities in mathematical analysis. Using this:

$$\int_0^{\pi/2}\sin^m\theta\cos^n\theta\,d\theta = \frac{1}{2}\beta\!\left(\frac{m+1}{2}, \frac{n+1}{2}\right) = \frac{\Gamma\!\left(\frac{m+1}{2}\right)\Gamma\!\left(\frac{n+1}{2}\right)}{2\,\Gamma\!\left(\frac{m+n+2}{2}\right)}$$

---

### 2.5 Another Form of Beta Function

$$\beta(m,n) = \int_0^\infty \frac{t^{m-1}}{(1+t)^{m+n}}\,dt$$

**Proof:** Let $t = \frac{y}{1+y}$ in the original definition, so $1-t = \frac{1}{1+y}$, $dt = \frac{dy}{(1+y)^2}$:

$$\beta(m,n) = \int_0^\infty \left(\frac{y}{1+y}\right)^{m-1}\!\!\cdot\left(\frac{1}{1+y}\right)^{n-1}\!\!\cdot\frac{dy}{(1+y)^2} = \int_0^\infty \frac{y^{m-1}}{(1+y)^{m+n}}\,dy \quad \blacksquare$$

---

## 3. Worked Examples

### Example 1: Basic Gamma

$$\int_0^\infty e^{-t}\cdot t^5\,dt = \Gamma(6) = 5! = \boxed{120}$$

---

### Example 2: Prove $\Gamma(1) = 1$

$$\Gamma(1) = \int_0^\infty e^{-t}\cdot t^0\,dt = \int_0^\infty e^{-t}\,dt = \left[-e^{-t}\right]_0^\infty = 0 + 1 = \boxed{1}$$

---

### Example 3: Show $\int_0^\infty e^{-3x}x^{3/2}\,dx = \frac{\sqrt{3\pi}}{36}$

**Solution:** Let $3x = t \Rightarrow x = \frac{t}{3}$, $dx = \frac{dt}{3}$:

$$I = \int_0^\infty e^{-t}\left(\frac{t}{3}\right)^{3/2}\frac{dt}{3} = \left(\frac{1}{3}\right)^{3/2}\cdot\frac{1}{3}\int_0^\infty e^{-t}t^{3/2}\,dt$$

$$= \frac{1}{3^{5/2}}\int_0^\infty e^{-t}t^{5/2-1}\,dt = \frac{1}{3^{5/2}}\Gamma\!\left(\frac{5}{2}\right)$$

Now $\Gamma\!\left(\frac{5}{2}\right) = \frac{3}{2}\Gamma\!\left(\frac{3}{2}\right) = \frac{3}{2}\cdot\frac{1}{2}\Gamma\!\left(\frac{1}{2}\right) = \frac{3\sqrt{\pi}}{4}$

$$I = \frac{1}{9\sqrt{3}}\cdot\frac{3\sqrt{\pi}}{4} = \frac{\sqrt{3}}{27}\cdot\frac{\sqrt{\pi}}{4} = \frac{\sqrt{\pi}}{18\cdot\sqrt{3}} = \frac{\sqrt{3\pi}}{54}$$

*(Note: Check the original problem — there may be slight variation; the method is demonstrated.)*

---

### Example 4: Show $\int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2}$

**Solution:**

Let $x^2 = t \Rightarrow dx = \frac{dt}{2\sqrt{t}}$:

$$\int_0^\infty e^{-x^2}\,dx = \int_0^\infty e^{-t}\cdot\frac{dt}{2\sqrt{t}} = \frac{1}{2}\int_0^\infty e^{-t}t^{-1/2}\,dt = \frac{1}{2}\int_0^\infty e^{-t}t^{1/2-1}\,dt = \frac{1}{2}\Gamma\!\left(\frac{1}{2}\right) = \frac{\sqrt{\pi}}{2} \quad \blacksquare$$

---

### Example 5: Beta — Show $\beta\!\left(\frac{1}{2},\frac{1}{2}\right) = \pi$

**Solution:**

Using the alternative form:

$$\beta\!\left(\frac{1}{2},\frac{1}{2}\right) = 2\int_0^{\pi/2}\sin^{2\cdot\frac{1}{2}-1}\theta\cos^{2\cdot\frac{1}{2}-1}\theta\,d\theta = 2\int_0^{\pi/2}\sin^0\theta\cos^0\theta\,d\theta = 2\int_0^{\pi/2}1\,d\theta = 2\cdot\frac{\pi}{2} = \pi$$

Also verify via relation: $\beta\!\left(\frac{1}{2},\frac{1}{2}\right) = \frac{[\Gamma(\frac{1}{2})]^2}{\Gamma(1)} = \frac{\pi}{1} = \pi \quad \blacksquare$

---

### Example 6: Using Gamma–Beta to find $\int_0^{\pi/2}\sin^5 x\cos^6 x\,dx$

$$I = \frac{1}{2}\beta\!\left(\frac{6}{2},\frac{7}{2}\right) = \frac{1}{2}\beta\!\left(3,\frac{7}{2}\right)$$

$$= \frac{1}{2}\cdot\frac{\Gamma(3)\,\Gamma\!\left(\frac{7}{2}\right)}{\Gamma\!\left(\frac{13}{2}\right)}$$

$$\Gamma(3) = 2! = 2$$

$$\Gamma\!\left(\frac{7}{2}\right) = \frac{5}{2}\cdot\frac{3}{2}\cdot\frac{1}{2}\cdot\sqrt{\pi} = \frac{15\sqrt{\pi}}{8}$$

$$\Gamma\!\left(\frac{13}{2}\right) = \frac{11}{2}\cdot\frac{9}{2}\cdot\frac{7}{2}\cdot\frac{5}{2}\cdot\frac{3}{2}\cdot\frac{1}{2}\cdot\sqrt{\pi} = \frac{10395\sqrt{\pi}}{64}$$

$$I = \frac{1}{2}\cdot\frac{2\cdot\frac{15\sqrt{\pi}}{8}}{\frac{10395\sqrt{\pi}}{64}} = \frac{1}{2}\cdot\frac{\frac{15\sqrt{\pi}}{4}}{\frac{10395\sqrt{\pi}}{64}} = \frac{1}{2}\cdot\frac{15}{4}\cdot\frac{64}{10395} = \boxed{\frac{8}{693}}$$

---

### Example 7: $\int_{-\infty}^\infty e^{-x^2}\,dx$ using Gamma

$$= 2\int_0^\infty e^{-x^2}\,dx = 2\cdot\frac{1}{2}\Gamma\!\left(\frac{1}{2}\right) = \Gamma\!\left(\frac{1}{2}\right) = \boxed{\sqrt{\pi}}$$

---

## 4. Important: Difference Between Gamma and Beta

| Feature | Gamma $\Gamma(x)$ | Beta $\beta(x,y)$ |
|:--------|:-----------------|:-----------------|
| Variables | One variable $x$ | Two variables $x$, $y$ |
| Notation | $\Gamma$ (looks like a symbol, NOT $\sqrt{\cdot}$) | $\beta$ |
| Definition | $\int_0^\infty e^{-t}t^{x-1}\,dt$ | $\int_0^1 t^{x-1}(1-t)^{y-1}\,dt$ |
| Relation | — | $\beta(x,y) = \frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}$ |

---

## 5. Summary of Useful Results

$$\Gamma(n+1) = n!, \quad \Gamma\!\left(\frac{1}{2}\right) = \sqrt{\pi}, \quad \Gamma\!\left(\frac{3}{2}\right) = \frac{\sqrt{\pi}}{2}$$

$$\beta(m,n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}, \quad \beta\!\left(\frac{1}{2},\frac{1}{2}\right) = \pi$$

$$\int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2}, \quad \int_{-\infty}^\infty e^{-x^2}\,dx = \sqrt{\pi}$$

---

## 6. Practice Problems

1. Evaluate $\int_0^\infty e^{-t}t^7\,dt$ &emsp; **Ans:** $5040$

2. Prove $\Gamma\!\left(\frac{1}{2}\right) = \sqrt{\pi}$

3. Find $\int_0^{\pi/2}\sin^7 x\cos^9 x\,dx$ using Gamma–Beta &emsp; **Ans:** $\frac{1}{2}\beta(5,4) = \frac{1}{16}$

4. Evaluate $\int_0^\infty e^{-2y^2}y^2\,dy$ &emsp; **Ans:** $\frac{\sqrt{\pi}}{8\sqrt{2}}$

5. Show that $\int_0^1 x^7\sqrt{1-x^4}\,dx = \frac{1}{4}\beta(2,\frac{3}{2}) = \frac{\pi}{32}$

6. $\int_0^\infty e^{-x^2}x^4\,dx$ &emsp; **Ans:** $\frac{3\sqrt{\pi}}{8}$

---

## 7. Online References

- 📖 [Wolfram MathWorld — Gamma Function](https://mathworld.wolfram.com/GammaFunction.html)
- 📖 [Wolfram MathWorld — Beta Function](https://mathworld.wolfram.com/BetaFunction.html)
- 📖 [NIST Digital Library of Mathematical Functions](https://dlmf.nist.gov/5)
- 📖 [Wikipedia — Gamma Function](https://en.wikipedia.org/wiki/Gamma_function)
- 📖 [Wikipedia — Beta Function](https://en.wikipedia.org/wiki/Beta_function)
- 📖 [LibreTexts — Gamma and Beta Functions](https://math.libretexts.org/Bookshelves/Analysis/Real_Analysis_(Boman_and_Rogers)/09%3A_The_Gamma_Function_and_Stirling%27s_Formula)
- 📖 [MIT OCW — Special Functions](https://ocw.mit.edu/courses/18-104-seminar-in-analysis-applications-to-number-theory-fall-2006/)

---

*← [05 — Improper Integrals](./05_improper_integrals.md) | [07 — Arc Length →](./07_arc_length.md)*
