---
subject: MATH-101
topic: Definite Integrals and Properties
date: 2026-03-14
tags: [notes, MATH-101, integration, definite-integrals, properties, fundamental-theorem]
---

# 03 — Definite Integrals and Properties

> **Reference:** Motin Sir Book — Chapter 10 | Howard Anton — Chapter 5  
> **Online:** [Paul's Online Notes — Definite Integrals](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfDefiniteIntegral.aspx)

---

## 1. Definition

The **definite integral** of $f(x)$ from $a$ to $b$ is defined as:

$$\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{i=1}^n f(x_i^*)\Delta x$$

where $\Delta x = \frac{b-a}{n}$ and $x_i^*$ is any point in the $i$-th subinterval. This is the **Riemann sum**.

**Fundamental Theorem of Calculus (Part 2):**

$$\boxed{\int_a^b f(x)\,dx = F(b) - F(a)}$$

where $F$ is any antiderivative of $f$ (i.e., $F'(x) = f(x)$).

**Geometrically:** $\int_a^b f(x)\,dx$ = signed area between $y = f(x)$ and the $x$-axis from $x=a$ to $x=b$.

---

## 2. Properties of Definite Integrals

These properties are frequently used in exam problems.

### Property 1: Variable of Integration is a Dummy Variable

$$\int_a^b f(x)\,dx = \int_a^b f(t)\,dt = \int_a^b f(u)\,du$$

### Property 2: Reversing Limits Changes Sign

$$\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$$

### Property 3: Zero Width Interval

$$\int_a^a f(x)\,dx = 0$$

### Property 4: Linearity

$$\int_a^b [cf(x) \pm dg(x)]\,dx = c\int_a^b f(x)\,dx \pm d\int_a^b g(x)\,dx$$

### Property 5: Interval Splitting

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx \quad \text{for any } c \in [a,b]$$

### Property 6: Reflection Property (Very Important!)

$$\boxed{\int_0^a f(x)\,dx = \int_0^a f(a-x)\,dx}$$

**Proof:** Let $u = a - x$, then $du = -dx$. When $x=0$, $u=a$; when $x=a$, $u=0$:

$$\int_0^a f(a-x)\,dx = \int_a^0 f(u)(-du) = \int_0^a f(u)\,du = \int_0^a f(x)\,dx \quad \blacksquare$$

### Property 7: Periodicity

$$\int_0^{na} f(x)\,dx = n\int_0^a f(x)\,dx \quad \text{if } f(x) \text{ has period } a$$

### Property 8: Even and Odd Functions

$$\int_{-a}^a f(x)\,dx = \begin{cases} 2\displaystyle\int_0^a f(x)\,dx & \text{if } f(-x) = f(x) \text{ (even function)} \\[6pt] 0 & \text{if } f(-x) = -f(x) \text{ (odd function)} \end{cases}$$

---

## 3. Worked Examples using Properties

### Example 1 (Property 6)

$$I = \int_0^{\pi/2} \frac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx$$

**Solution:**

By Property 6, replacing $x$ with $\frac{\pi}{2}-x$:

$$I = \int_0^{\pi/2} \frac{\sqrt{\sin(\frac{\pi}{2}-x)}}{\sqrt{\sin(\frac{\pi}{2}-x)}+\sqrt{\cos(\frac{\pi}{2}-x)}}\,dx = \int_0^{\pi/2}\frac{\sqrt{\cos x}}{\sqrt{\cos x}+\sqrt{\sin x}}\,dx$$

Adding the two expressions:

$$2I = \int_0^{\pi/2}\frac{\sqrt{\sin x}+\sqrt{\cos x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx = \int_0^{\pi/2} 1\,dx = \frac{\pi}{2}$$

$$\boxed{I = \frac{\pi}{4}}$$

---

### Example 2 (Property 6 + Logarithm)

$$I = \int_0^1 \ln\!\left(\frac{1}{x}-1\right)dx$$

**Solution:**

By Property 6 with $a=1$, replacing $x \to 1-x$:

$$I = \int_0^1 \ln\!\left(\frac{1}{1-x}-1\right)dx = \int_0^1 \ln\!\left(\frac{x}{1-x}\right)dx = \int_0^1 \ln\!\left(\frac{1-x}{x}\right)^{-1}dx = -I$$

$$\Rightarrow 2I = 0 \Rightarrow \boxed{I = 0}$$

---

### Example 3 (Property 6 applied twice)

$$I = \int_0^{\pi/2} \ln(\cos x)\,dx$$

**Solution:**

By Property 6: $I = \int_0^{\pi/2}\ln\!\left(\cos\!\left(\frac{\pi}{2}-x\right)\right)dx = \int_0^{\pi/2}\ln(\sin x)\,dx$

So $I = \int_0^{\pi/2}\ln(\sin x)\,dx$ ... (ii)

Adding (i) and (ii):

$$2I = \int_0^{\pi/2}[\ln(\cos x)+\ln(\sin x)]\,dx = \int_0^{\pi/2}\ln(\sin x\cos x)\,dx$$

$$= \int_0^{\pi/2}\ln\!\left(\frac{\sin 2x}{2}\right)dx = \int_0^{\pi/2}\ln(\sin 2x)\,dx - \int_0^{\pi/2}\ln 2\,dx$$

For $\int_0^{\pi/2}\ln(\sin 2x)\,dx$: let $u=2x$, $du=2\,dx$, limits $0\to\pi$:

$$= \frac{1}{2}\int_0^\pi \ln(\sin u)\,du = \frac{1}{2}\cdot 2\int_0^{\pi/2}\ln(\sin u)\,du = I$$

*(using Property 7: the integral over $[0,\pi]$ equals twice the integral over $[0,\pi/2]$)*

So:

$$2I = I - \frac{\pi}{2}\ln 2$$

$$\boxed{I = -\frac{\pi}{2}\ln 2}$$

---

### Example 4 (Reflection Property)

$$I = \int_0^{\pi/2} \frac{\cos x}{\sin x + \cos x}\,dx$$

**Solution:**

Applying Property 6 with $a = \frac{\pi}{2}$:

$$I = \int_0^{\pi/2}\frac{\cos(\frac{\pi}{2}-x)}{\sin(\frac{\pi}{2}-x)+\cos(\frac{\pi}{2}-x)}\,dx = \int_0^{\pi/2}\frac{\sin x}{\cos x + \sin x}\,dx \quad \cdots \text{(ii)}$$

Adding (i) and (ii):

$$2I = \int_0^{\pi/2}\frac{\sin x+\cos x}{\cos x+\sin x}\,dx = \int_0^{\pi/2} 1\,dx = \frac{\pi}{2}$$

$$\boxed{I = \frac{\pi}{4}}$$

---

### Example 5 (Reflection Property — $\sqrt{\tan x}$)

$$I = \int_0^{\pi/2}\frac{\sqrt{\tan x}}{1+\sqrt{\tan x}}\,dx$$

Writing $\sqrt{\tan x} = \frac{\sqrt{\sin x}}{\sqrt{\cos x}}$:

$$I = \int_0^{\pi/2}\frac{\sqrt{\sin x}}{\sqrt{\cos x}+\sqrt{\sin x}}\,dx \quad\text{...(i)}$$

By Property 6, let $x \to \frac{\pi}{2}-x$:

$$I = \int_0^{\pi/2}\frac{\sqrt{\cos x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx \quad\text{...(ii)}$$

Adding: $2I = \int_0^{\pi/2}1\,dx = \frac{\pi}{2}$, so $\boxed{I = \frac{\pi}{4}}$

---

## 4. Key Proof — Fundamental Theorem of Calculus

**Statement (FTC Part 1):**  
If $f$ is continuous on $[a,b]$ and $A(x) = \int_a^x f(t)\,dt$, then:

$$\frac{d}{dx}A(x) = f(x)$$

**Proof Sketch:**

$$A(x+h) - A(x) = \int_x^{x+h} f(t)\,dt \approx f(x)\cdot h \quad \text{for small } h$$

$$\frac{A(x+h)-A(x)}{h} \to f(x) \text{ as } h\to 0 \quad \blacksquare$$

---

## 5. Common Mistakes to Avoid

> ⚠️ **Mistake 1:** Forgetting to change limits when using substitution in a definite integral.

> ⚠️ **Mistake 2:** Applying Property 8 (even/odd) without verifying whether the function is actually even or odd.

> ⚠️ **Mistake 3:** Incorrectly splitting limits — Property 5 requires $c$ to be *between* $a$ and $b$ for simplest use.

---

## 6. Practice Problems

1. $\displaystyle\int_0^{\pi/2}\frac{\sqrt{\cos x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx$ &emsp; **Ans:** $\frac{\pi}{4}$

2. $\displaystyle\int_0^1 \ln\!\left(\frac{1}{x}-1\right)dx$ &emsp; **Ans:** $0$

3. $\displaystyle\int_0^{\pi/2}\frac{1+\cos x}{x+\sin x}\,dx$ &emsp; *(use substitution)*

4. $\displaystyle\int_{-2}^2 (x^3 - 3x)\,dx$ &emsp; **Ans:** $0$ *(odd function)*

5. $\displaystyle\int_{-1}^1 (x^4 + x^2 + 1)\,dx$ &emsp; **Ans:** $2\int_0^1(x^4+x^2+1)\,dx$ *(even function)*

---

## 7. Online References

- 📖 [Paul's Online Notes — Properties of Integrals](https://tutorial.math.lamar.edu/Classes/CalcI/PropertiesofDefiniteIntegrals.aspx)
- 📖 [Khan Academy — Definite Integrals](https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-7/a/definite-integral-properties-review)
- 📖 [LibreTexts — Properties of Definite Integrals](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/05%3A_Integration/5.03%3A_The_Fundamental_Theorem_of_Calculus)
- 📖 [MIT OCW 18.01 — Definite Integrals](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/)

---

*← [02 — Successive Reduction](./02_successive_reduction.md) | [04 — Walli's Formula →](./04_wallis_formula.md)*
