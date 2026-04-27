# Γβ Chapter 4: Gamma & Beta Functions

> **Course:** Mathematics — L1T1  
> **Topics:** Definitions · Properties · Proofs · Applications

---

## 📚 Table of Contents

1. [Key Definitions](#-key-definitions)
2. [Important Properties](#-important-properties)
3. [Questions & Solutions](#-questions--solutions)
4. [Practice Questions](#-practice-questions)
5. [References](#-references)

---

## 📖 Key Definitions

### Gamma Function

$$\Gamma(n) = \int_0^\infty e^{-x} x^{n-1}\,dx, \quad n > 0$$

### Beta Function

$$\beta(m,n) = \int_0^1 x^{m-1}(1-x)^{n-1}\,dx, \quad m,n > 0$$

**Alternate forms of Beta Function:**

$$\beta(m,n) = \int_0^\infty \frac{t^{m-1}}{(1+t)^{m+n}}\,dt$$

$$\beta(m,n) = 2\int_0^{\pi/2}\sin^{2m-1}\theta\cos^{2n-1}\theta\,d\theta$$

---

## 📌 Important Properties

| Property | Formula |
|----------|---------|
| **Recurrence** | $\Gamma(n+1) = n\Gamma(n)$ |
| **Factorial** | $\Gamma(n) = (n-1)!$ for $n \in \mathbb{Z}^+$ |
| **Half-integer** | $\Gamma(1/2) = \sqrt{\pi}$ |
| **Symmetry** | $\beta(m,n) = \beta(n,m)$ |
| **Beta-Gamma** | $\beta(m,n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$ |
| **Duplication** | $2^{2n-1}\Gamma(n)\Gamma\!\left(n+\tfrac{1}{2}\right) = \sqrt{\pi}\,\Gamma(2n)$ |
| **Wallis** | $\displaystyle\int_0^{\pi/2}\sin^p\theta\cos^q\theta\,d\theta = \frac{\Gamma\!\left(\frac{p+1}{2}\right)\Gamma\!\left(\frac{q+1}{2}\right)}{2\,\Gamma\!\left(\frac{p+q+2}{2}\right)}$ |

---

## 🧮 Questions & Solutions

#### Q1. Prove $\Gamma(n+1) = n\Gamma(n)$ and $\Gamma(n) = (n-1)!$

<details>
<summary>💡 Solution</summary>

**Part 1:** Using integration by parts on $\Gamma(n+1) = \displaystyle\int_0^\infty e^{-x}x^n\,dx$

Let $u = x^n$, $dv = e^{-x}dx$:

$du = nx^{n-1}dx$, $v = -e^{-x}$

$$\Gamma(n+1) = \left[-x^n e^{-x}\right]_0^\infty + n\int_0^\infty e^{-x}x^{n-1}\,dx$$

The boundary term: $\lim_{x\to\infty}x^n e^{-x} = 0$ (exponential dominates) and at $x=0$ it's $0$.

$$\boxed{\Gamma(n+1) = n\Gamma(n)}$$ ✅

**Part 2:** Apply recursively:

$\Gamma(n) = (n-1)\Gamma(n-1) = (n-1)(n-2)\Gamma(n-2) = \cdots = (n-1)!\,\Gamma(1)$

Since $\Gamma(1) = \displaystyle\int_0^\infty e^{-x}\,dx = 1$:

$$\boxed{\Gamma(n) = (n-1)!}$$ ✅

</details>

---

#### Q2. Show $\beta(m,n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$

<details>
<summary>💡 Solution</summary>

Consider the product $\Gamma(m)\Gamma(n)$:

$$\Gamma(m)\Gamma(n) = \int_0^\infty e^{-x}x^{m-1}\,dx \cdot \int_0^\infty e^{-y}y^{n-1}\,dy$$

$$= \int_0^\infty\int_0^\infty e^{-(x+y)}x^{m-1}y^{n-1}\,dx\,dy$$

Substitute $x = t\cdot s$, $y = t(1-s)$ (so $x+y = t$, $x/t = s$):

Jacobian: $\dfrac{\partial(x,y)}{\partial(t,s)} = t$

$$= \int_0^1\int_0^\infty e^{-t}(ts)^{m-1}(t(1-s))^{n-1}\cdot t\,dt\,ds$$

$$= \int_0^1 s^{m-1}(1-s)^{n-1}\,ds \cdot \int_0^\infty e^{-t}t^{m+n-1}\,dt$$

$$= \beta(m,n)\cdot\Gamma(m+n)$$

$$\boxed{\beta(m,n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}}$$ ✅

</details>

---

#### Q3. Prove $\displaystyle\int_0^{\pi/2}\sin^p\theta\cos^q\theta\,d\theta = \frac{\Gamma\!\left(\frac{p+1}{2}\right)\Gamma\!\left(\frac{q+1}{2}\right)}{2\,\Gamma\!\left(\frac{p+q+2}{2}\right)}$

<details>
<summary>💡 Solution</summary>

Let $t = \sin^2\theta$, so $dt = 2\sin\theta\cos\theta\,d\theta$, $\sin\theta = \sqrt{t}$, $\cos\theta = \sqrt{1-t}$.

$$I = \int_0^1 t^{p/2}(1-t)^{q/2}\cdot\frac{dt}{2\sqrt{t}\sqrt{1-t}}$$

$$= \frac{1}{2}\int_0^1 t^{(p+1)/2-1}(1-t)^{(q+1)/2-1}\,dt$$

$$= \frac{1}{2}\,\beta\!\left(\frac{p+1}{2},\frac{q+1}{2}\right)$$

$$= \frac{1}{2}\cdot\frac{\Gamma\!\left(\frac{p+1}{2}\right)\Gamma\!\left(\frac{q+1}{2}\right)}{\Gamma\!\left(\frac{p+q+2}{2}\right)}$$ ✅

</details>

---

#### Q4. Show $\Gamma\!\left(\dfrac{1}{2}\right) = \sqrt{\pi}$

<details>
<summary>💡 Solution</summary>

$$\Gamma\!\left(\frac{1}{2}\right) = \int_0^\infty e^{-x}x^{-1/2}\,dx$$

Let $x = t^2$, $dx = 2t\,dt$:

$$= \int_0^\infty e^{-t^2}t^{-1}\cdot 2t\,dt = 2\int_0^\infty e^{-t^2}\,dt$$

This is the Gaussian integral: $\displaystyle\int_{-\infty}^\infty e^{-t^2}\,dt = \sqrt{\pi}$, so $\displaystyle\int_0^\infty e^{-t^2}\,dt = \dfrac{\sqrt{\pi}}{2}$

$$\Gamma\!\left(\frac{1}{2}\right) = 2\cdot\frac{\sqrt{\pi}}{2} = \sqrt{\pi}$$ ✅

**Proof of Gaussian Integral (briefly):**

Let $I = \displaystyle\int_0^\infty e^{-t^2}\,dt$.

$$I^2 = \int_0^\infty\int_0^\infty e^{-(x^2+y^2)}\,dx\,dy$$

Switch to polar: $x = r\cos\theta$, $y = r\sin\theta$:

$$I^2 = \int_0^{\pi/2}\int_0^\infty e^{-r^2}r\,dr\,d\theta = \frac{\pi}{2}\cdot\frac{1}{2} = \frac{\pi}{4}$$

$$I = \frac{\sqrt{\pi}}{2}$$

</details>

---

#### Q5. Prove the Duplication Formula: $2^{2n-1}\Gamma(n)\Gamma\!\left(n+\dfrac{1}{2}\right) = \sqrt{\pi}\,\Gamma(2n)$

<details>
<summary>💡 Solution</summary>

From the Beta-Gamma relation:

$$\beta(n,n) = \frac{[\Gamma(n)]^2}{\Gamma(2n)}$$

Also:
$$\beta(n,n) = 2\int_0^{\pi/2}\sin^{2n-1}\theta\cos^{2n-1}\theta\,d\theta = 2\int_0^{\pi/2}\left(\frac{\sin 2\theta}{2}\right)^{2n-1}d\theta$$

$$= \frac{1}{2^{2n-2}}\int_0^{\pi/2}\sin^{2n-1}(2\theta)\,d\theta$$

Let $\phi = 2\theta$:
$$= \frac{1}{2^{2n-1}}\int_0^\pi\sin^{2n-1}\phi\,d\phi = \frac{1}{2^{2n-1}}\cdot 2\int_0^{\pi/2}\sin^{2n-1}\phi\,d\phi$$

$$= \frac{1}{2^{2n-2}}\cdot\frac{\Gamma(n)\Gamma(1/2)}{2\,\Gamma(n+1/2)} = \frac{\sqrt{\pi}\,\Gamma(n)}{2^{2n-2}\cdot 2\,\Gamma(n+1/2)}$$

Setting equal to $\dfrac{[\Gamma(n)]^2}{\Gamma(2n)}$:

$$\frac{[\Gamma(n)]^2}{\Gamma(2n)} = \frac{\sqrt{\pi}\,\Gamma(n)}{2^{2n-1}\Gamma(n+1/2)}$$

$$\boxed{2^{2n-1}\Gamma(n)\Gamma\!\left(n+\frac{1}{2}\right) = \sqrt{\pi}\,\Gamma(2n)}$$ ✅

</details>

---

### Useful Gamma Values

| $n$ | $\Gamma(n)$ |
|-----|------------|
| $1$ | $1$ |
| $2$ | $1$ |
| $3$ | $2$ |
| $4$ | $6$ |
| $n$ | $(n-1)!$ |
| $1/2$ | $\sqrt{\pi}$ |
| $3/2$ | $\sqrt{\pi}/2$ |
| $5/2$ | $3\sqrt{\pi}/4$ |
| $7/2$ | $15\sqrt{\pi}/8$ |

---

### Application Examples

**Example 1:** Evaluate $\displaystyle\int_0^\infty x^4 e^{-x}\,dx$

$$= \Gamma(5) = 4! = 24$$

**Example 2:** Evaluate $\displaystyle\int_0^\infty x^{1/2}e^{-x}\,dx$

$$= \Gamma(3/2) = \frac{1}{2}\Gamma(1/2) = \frac{\sqrt{\pi}}{2}$$

**Example 3:** Evaluate $\displaystyle\int_0^1 x^5(1-x)^4\,dx$

$$= \beta(6,5) = \frac{\Gamma(6)\Gamma(5)}{\Gamma(11)} = \frac{5!\cdot 4!}{10!} = \frac{120\cdot 24}{3628800} = \frac{1}{1260}$$

---

## 📝 Practice Questions

#### P1. Evaluate $\displaystyle\int_0^\infty x^{7/2}e^{-x}\,dx$

<details>
<summary>💡 Solution</summary>

$$= \Gamma\!\left(\frac{9}{2}\right) = \frac{7}{2}\cdot\frac{5}{2}\cdot\frac{3}{2}\cdot\frac{1}{2}\cdot\Gamma\!\left(\frac{1}{2}\right) = \frac{105}{16}\sqrt{\pi}$$

</details>

---

#### P2. Evaluate $\displaystyle\int_0^{\pi/2}\sin^5\theta\cos^3\theta\,d\theta$

<details>
<summary>💡 Solution</summary>

$$= \frac{\Gamma(3)\Gamma(2)}{2\,\Gamma(5)} = \frac{2!\cdot 1!}{2\cdot 4!} = \frac{2}{48} = \frac{1}{24}$$

</details>

---

#### P3. Show $\beta(m,n) = \beta(n,m)$

<details>
<summary>💡 Solution</summary>

$$\beta(m,n) = \int_0^1 x^{m-1}(1-x)^{n-1}\,dx$$

Let $x = 1-t$, $dx = -dt$:

$$= \int_1^0(1-t)^{m-1}t^{n-1}(-dt) = \int_0^1 t^{n-1}(1-t)^{m-1}\,dt = \beta(n,m)$$ ✅

</details>

---

#### P4. Evaluate $\displaystyle\int_0^\infty \frac{x^2}{e^x-1}\,dx$ (hint: use $\Gamma$ function)

<details>
<summary>💡 Solution</summary>

$$\int_0^\infty\frac{x^2}{e^x-1}\,dx = \int_0^\infty x^2\cdot\frac{e^{-x}}{1-e^{-x}}\,dx = \int_0^\infty x^2\sum_{n=1}^\infty e^{-nx}\,dx$$

$$= \sum_{n=1}^\infty\int_0^\infty x^2 e^{-nx}\,dx = \sum_{n=1}^\infty\frac{\Gamma(3)}{n^3} = 2\sum_{n=1}^\infty\frac{1}{n^3} = 2\zeta(3)$$

where $\zeta$ is the Riemann zeta function.

</details>

---

## 📚 References

1. **B.S. Grewal** — *Higher Engineering Mathematics*, Ch. 8
2. **Kreyszig** — *Advanced Engineering Mathematics*, Wiley
3. [NIST Digital Library of Mathematical Functions — Gamma](https://dlmf.nist.gov/5)
4. [Wolfram MathWorld — Beta Function](https://mathworld.wolfram.com/BetaFunction.html)
5. [Khan Academy — Gamma Function Intro](https://www.khanacademy.org)
6. [MIT OCW — 18.04 Complex Variables (Special Functions)](https://ocw.mit.edu)

---

> 📌 **Tip:** Always convert definite integrals involving $\sin^p\cos^q$ to the Beta-Gamma formula — it dramatically reduces computation.  
> 📌 **Key Values to Memorize:** $\Gamma(1/2) = \sqrt{\pi}$, $\Gamma(1)=1$, $\Gamma(n+1)=n!$
