---
subject: MATH-101
topic: Walli's Formula
date: 2026-03-14
tags: [notes, MATH-101, integration, wallis-formula, definite-integrals, trigonometric]
---

# 04 — Walli's Formula

> **Reference:** Motin Sir Book — Chapter 10 | Howard Anton — Section 7.3  
> **Online:** [Wikipedia — Wallis Product](https://en.wikipedia.org/wiki/Wallis_product) | [MathWorld — Wallis Formula](https://mathworld.wolfram.com/WallisFormula.html)

---

## 1. Introduction

**Walli's Formula** (also spelled *Wallis's Formula*) gives a direct way to evaluate definite integrals of $\sin^n x$ and $\cos^n x$ from $0$ to $\frac{\pi}{2}$ without applying the reduction formula step by step. It is named after the English mathematician **John Wallis (1616–1703)**.

---

## 2. Walli's Formula — Statement

### For $\int_0^{\pi/2} \sin^n x\,dx$

$$\boxed{I_n = \int_0^{\pi/2} \sin^n x\,dx = \begin{cases} \dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac{3}{4}\cdot\dfrac{1}{2}\cdot\dfrac{\pi}{2} & \text{if } n \text{ is even}\\[10pt] \dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac{4}{5}\cdot\dfrac{2}{3}\cdot 1 & \text{if } n \text{ is odd} \end{cases}}$$

### For $\int_0^{\pi/2} \cos^n x\,dx$

The result is **identical** to the formula for $\sin^n x$:

$$I_n = \int_0^{\pi/2} \cos^n x\,dx = \begin{cases} \dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac{3}{4}\cdot\dfrac{1}{2}\cdot\dfrac{\pi}{2} & \text{if } n \text{ is even}\\[10pt] \dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac{4}{5}\cdot\dfrac{2}{3}\cdot 1 & \text{if } n \text{ is odd} \end{cases}$$

> **Memory Tip:**
> - Even $n$: Multiply down to $\frac{1}{2}$, then multiply by $\frac{\pi}{2}$
> - Odd $n$: Multiply down to $\frac{2}{3}$, then multiply by $1$

---

## 3. Derivation

Starting from the reduction formula (proved in Topic 02):

$$I_n = \frac{n-1}{n}\cdot I_{n-2}$$

Applying repeatedly:

**Case 1: $n$ even** $(n = 2m)$

$$I_{2m} = \frac{2m-1}{2m}\cdot\frac{2m-3}{2m-2}\cdots\frac{3}{4}\cdot\frac{1}{2}\cdot I_0$$

$$I_0 = \int_0^{\pi/2}1\,dx = \frac{\pi}{2}$$

$$\therefore I_{2m} = \frac{(2m-1)!!}{(2m)!!}\cdot\frac{\pi}{2}$$

where $!!$ denotes the **double factorial**.

**Case 2: $n$ odd** $(n = 2m+1)$

$$I_{2m+1} = \frac{2m}{2m+1}\cdot\frac{2m-2}{2m-1}\cdots\frac{4}{5}\cdot\frac{2}{3}\cdot I_1$$

$$I_1 = \int_0^{\pi/2}\sin x\,dx = 1$$

$$\therefore I_{2m+1} = \frac{(2m)!!}{(2m+1)!!}$$

---

## 4. Formula for Mixed Powers $I_{p,q}$

For the integral $I_{p,q} = \int_0^{\pi/2}\sin^p x\cos^q x\,dx$:

$$\boxed{I_{p,q} = \frac{p-1}{p+q}\cdot I_{p-2,q}}$$

**Reduction is applied by decrementing $p$** (or $q$) until reaching a base case.

$$I_{0,q} = \int_0^{\pi/2}\cos^q x\,dx \quad\text{(apply Walli's)}$$

$$I_{p,0} = \int_0^{\pi/2}\sin^p x\,dx \quad\text{(apply Walli's)}$$

---

## 5. Worked Examples

### Example 1

$$I = \int_0^{\pi/2}\cos^7 x\,dx$$

$n = 7$ is **odd**:

$$I = \frac{6}{7}\cdot\frac{4}{5}\cdot\frac{2}{3}\cdot 1 = \frac{48}{105} = \boxed{\frac{16}{35}}$$

---

### Example 2

$$I = \int_0^{\pi}\sin^6 x\,dx$$

Since the integrand has period $\pi$ and $\sin^6 x = \sin^6(\pi-x)$:

$$\int_0^\pi \sin^6 x\,dx = 2\int_0^{\pi/2}\sin^6 x\,dx$$

Apply Walli's with $n=6$ (even):

$$2 \times \frac{5}{6}\cdot\frac{3}{4}\cdot\frac{1}{2}\cdot\frac{\pi}{2} = 2\times\frac{5\pi}{32} = \boxed{\frac{5\pi}{16}}$$

---

### Example 3

$$I = \int_{-\pi/4}^{\pi/4}\cos^8(2\theta)\,d\theta$$

Let $t = 2\theta$, $dt = 2\,d\theta$. Limits: $\theta = \pm\frac{\pi}{4} \Rightarrow t = \pm\frac{\pi}{2}$.

$$I = \frac{1}{2}\int_{-\pi/2}^{\pi/2}\cos^8 t\,dt$$

Since $\cos^8 t$ is an **even function**:

$$= \frac{1}{2}\cdot 2\int_0^{\pi/2}\cos^8 t\,dt = \int_0^{\pi/2}\cos^8 t\,dt$$

Apply Walli's with $n=8$ (even):

$$= \frac{7}{8}\cdot\frac{5}{6}\cdot\frac{3}{4}\cdot\frac{1}{2}\cdot\frac{\pi}{2} = \frac{105\pi}{768} \cdot \frac{1}{1} = \boxed{\frac{35\pi}{256}}$$

---

### Example 4 — Mixed Power $I_{4,3}$

$$I_{4,3} = \int_0^{\pi/2}\sin^4 x\cos^3 x\,dx$$

$p = 4$, $q = 3$. Use $I_{p,q} = \frac{p-1}{p+q}\cdot I_{p-2,q}$:

$$I_{4,3} = \frac{3}{7}\cdot I_{2,3}$$

$$I_{2,3} = \frac{1}{5}\cdot I_{0,3}$$

$$I_{0,3} = \int_0^{\pi/2}\cos^3 x\,dx = \frac{2}{3}\cdot 1 = \frac{2}{3} \quad (n=3, \text{odd})$$

$$I_{2,3} = \frac{1}{5}\cdot\frac{2}{3} = \frac{2}{15}$$

$$I_{4,3} = \frac{3}{7}\cdot\frac{2}{15} = \boxed{\frac{2}{35}}$$

---

### Example 5 — Mixed Power $I_{10,2}$

$$\int_0^{\pi/2}\sin^{10}x\cos^2 x\,dx$$

$p=10$, $q=2$:

$$I_{10,2} = \frac{9}{12}\cdot I_{8,2} = \frac{9}{12}\cdot\frac{7}{10}\cdot I_{6,2} = \frac{9}{12}\cdot\frac{7}{10}\cdot\frac{5}{8}\cdot I_{4,2}$$

$$= \frac{9}{12}\cdot\frac{7}{10}\cdot\frac{5}{8}\cdot\frac{3}{6}\cdot I_{2,2} = \frac{9}{12}\cdot\frac{7}{10}\cdot\frac{5}{8}\cdot\frac{3}{6}\cdot\frac{1}{4}\cdot I_{0,2}$$

$$I_{0,2} = \int_0^{\pi/2}\cos^2 x\,dx = \frac{1}{2}\cdot\frac{\pi}{2} = \frac{\pi}{4}$$

$$I_{10,2} = \frac{9\cdot7\cdot5\cdot3\cdot1}{12\cdot10\cdot8\cdot6\cdot4}\cdot\frac{\pi}{4} = \frac{945}{46080}\cdot\frac{\pi}{4} = \boxed{\frac{189\pi}{18432}}$$

---

## 6. Walli's Infinite Product

An interesting consequence of Walli's formula is the **Wallis Product** for $\pi$:

$$\frac{\pi}{2} = \frac{2}{1}\cdot\frac{2}{3}\cdot\frac{4}{3}\cdot\frac{4}{5}\cdot\frac{6}{5}\cdot\frac{6}{7}\cdots = \prod_{n=1}^\infty\frac{(2n)(2n)}{(2n-1)(2n+1)}$$

This was one of the first explicit formulas for $\pi$ in history.

---

## 7. Exam Tips

> **For even $n$:** The answer always contains $\frac{\pi}{2}$ as the final factor.

> **For odd $n$:** The answer is a pure rational number (no $\pi$).

> **For $I_{p,q}$:** When $I_{0,\text{something}}$ appears, if that "something" is even, you'll get a $\pi$ factor; if odd, you won't.

---

## 8. Practice Problems

1. $\int_0^{\pi/2}\sin^9 x\,dx$ &emsp; **Ans:** $\frac{128}{315}$

2. $\int_0^{\pi}\cos^6 x\,dx$ &emsp; **Ans:** $\frac{5\pi}{16}$

3. $\int_0^{\pi/2}\sin^5 x\cos^6 x\,dx$ &emsp; **Ans:** $\frac{8}{693}$

4. $\int_0^{\pi/2}\sin^{10}x\cos^2 x\,dx$

5. $\int_{-\pi/4}^{\pi/4}\cos^8(2\theta)\,d\theta$ &emsp; **Ans:** $\frac{35\pi}{256}$

---

## 9. Online References

- 📖 [Wolfram MathWorld — Wallis Formula](https://mathworld.wolfram.com/WallisFormula.html)
- 📖 [Wikipedia — Wallis Product](https://en.wikipedia.org/wiki/Wallis_product)
- 📖 [LibreTexts — Trigonometric Integrals](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/07%3A_Techniques_of_Integration/7.02%3A_Trigonometric_Integrals)
- 📖 [Khan Academy — Definite Integrals of Trig](https://www.khanacademy.org/math/integral-calculus/ic-integration/ic-trig-integrals/v/definite-integral-of-trig)

---

*← [03 — Definite Integrals](./03_definite_integrals.md) | [05 — Improper Integrals →](./05_improper_integrals.md)*
