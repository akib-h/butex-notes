# Chapter 1: Limits, Continuity & Differentiability

> **Covered in:** Part A of every exam (2012–2019)  
> **Marks:** 4+4+4 = 12 (2016–2019) | 4+4+4+5.5+... (2012–2015)

---

## 📖 Theory & Key Definitions

### 1.1 Limit of a Function

A function $f(x)$ has a limit $L$ as $x \to a$ if:

$$\forall\, \varepsilon > 0,\; \exists\, \delta > 0 \text{ such that } 0 < |x-a| < \delta \implies |f(x)-L| < \varepsilon$$

**One-sided limits:**
$$\lim_{x \to a^-} f(x) = L^- \quad\text{(left-hand limit)}, \qquad \lim_{x \to a^+} f(x) = L^+ \quad\text{(right-hand limit)}$$

The two-sided limit exists iff $L^- = L^+$.

---

### 1.2 Continuity

A function $f(x)$ is **continuous at** $x = a$ if:
1. $f(a)$ is defined
2. $\displaystyle\lim_{x \to a} f(x)$ exists
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

![Continuity vs Discontinuity](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Discontinuity_removable.eps.png/400px-Discontinuity_removable.eps.png)
*Figure 1.1 — Types of discontinuity (Wikimedia Commons)*

---

### 1.3 Differentiability

$f(x)$ is **differentiable at** $x = a$ if:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} \quad \text{exists (is finite)}$$

Equivalently, the **left-hand derivative** = **right-hand derivative**:

$$\lim_{h \to 0^-} \frac{f(a+h)-f(a)}{h} = \lim_{h \to 0^+} \frac{f(a+h)-f(a)}{h}$$

> **Key fact:** Differentiability $\implies$ Continuity, but **not** vice versa.

---

### 1.4 L'Hôpital's Rule

If $\displaystyle\lim_{x\to a} f(x) = \lim_{x\to a} g(x) = 0$ or $\pm\infty$, then:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

**For indeterminate forms $1^\infty$, $0^0$, $\infty^0$:** take $y = f^g$, so $\ln y = g \ln f$, then apply L'Hôpital.

---

### 1.5 Mean Value Theorem (MVT)

> **Statement:** If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists at least one $c \in (a,b)$ such that:
> $$f'(c) = \frac{f(b)-f(a)}{b-a}$$

**Geometric interpretation:** The tangent at $c$ is parallel to the secant through $(a,f(a))$ and $(b,f(b))$.

![Mean Value Theorem](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mvt2.svg/400px-Mvt2.svg.png)  
*Figure 1.2 — Mean Value Theorem (Wikimedia Commons)*

---

### 1.6 Rolle's Theorem

> If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, then $\exists\, c \in (a,b)$ such that $f'(c) = 0$.

---

### 1.7 Taylor's Theorem / Taylor Polynomial

$$f(x) = \sum_{n=0}^{N} \frac{f^{(n)}(a)}{n!}(x-a)^n + R_N(x)$$

For $a = 0$ (Maclaurin series):

| Function | Series |
|----------|--------|
| $\sin x$ | $x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \cdots$ |
| $\cos x$ | $1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \cdots$ |
| $e^x$ | $1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \cdots$ |
| $\ln(1+x)$ | $x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \cdots$ |

---

## 📝 Past Exam Questions & Solutions

---

### ✏️ 2019 — Q1

**(a)** Define continuity. A function $f(x)$ is defined by:

$$f(x) = \begin{cases} \dfrac{1-\cos x}{x^2}, & x \neq 0 \\ B, & x = 0 \end{cases}$$

For what value of $B$ is $f(x)$ continuous at $x = 0$? **[4 marks]**

<details>
<summary>✅ Solution</summary>

For continuity at $x=0$: $\displaystyle\lim_{x\to 0} f(x) = f(0) = B$.

$$\lim_{x\to 0} \frac{1-\cos x}{x^2}$$

Using the standard limit $\displaystyle\lim_{x\to 0}\frac{1-\cos x}{x^2} = \frac{1}{2}$ (derived via L'Hôpital or Taylor series):

**Method (Taylor series):**
$$1 - \cos x = 1 - \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots\right) = \frac{x^2}{2} - \frac{x^4}{24} + \cdots$$

$$\frac{1-\cos x}{x^2} = \frac{1}{2} - \frac{x^2}{24} + \cdots \xrightarrow{x\to 0} \frac{1}{2}$$

Therefore $B = \dfrac{1}{2}$.

</details>

---

**(b)** Evaluate $\displaystyle\lim_{x\to 0}(\sin x)^{2\tan x}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

This is of the form $0^0$. Let $y = (\sin x)^{2\tan x}$.

$$\ln y = 2\tan x \cdot \ln(\sin x)$$

$$\lim_{x\to 0} \ln y = \lim_{x\to 0} \frac{2\ln(\sin x)}{\cot x} \quad \left[\frac{-\infty}{\infty}\right]$$

Apply L'Hôpital:

$$= \lim_{x\to 0} \frac{2 \cdot \frac{\cos x}{\sin x}}{-\csc^2 x} = \lim_{x\to 0} \frac{2\cos x}{\sin x} \cdot \frac{-\sin^2 x}{1} = \lim_{x\to 0} (-2\cos x \cdot \sin x) = 0$$

Therefore $\ln y \to 0$, so $y \to e^0 = \boxed{1}$.

</details>

---

**(c)** State the Mean Value Theorem. Verify it for $f(x) = x(x-1)(x-2)$ on $\left[0, \dfrac{1}{2}\right]$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

**MVT:** If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, $\exists\, c \in (a,b)$ with $f'(c) = \dfrac{f(b)-f(a)}{b-a}$.

**Verification:**

$f(x) = x(x-1)(x-2) = x^3 - 3x^2 + 2x$

- $f(0) = 0$
- $f\!\left(\tfrac{1}{2}\right) = \tfrac{1}{2}\cdot\left(-\tfrac{1}{2}\right)\cdot\left(-\tfrac{3}{2}\right) = \tfrac{3}{8}$

The mean slope:
$$\frac{f(1/2) - f(0)}{1/2 - 0} = \frac{3/8}{1/2} = \frac{3}{4}$$

Now $f'(x) = 3x^2 - 6x + 2$. Set $f'(c) = \tfrac{3}{4}$:

$$3c^2 - 6c + 2 = \frac{3}{4}$$
$$3c^2 - 6c + \frac{5}{4} = 0 \implies c = \frac{6 \pm \sqrt{36 - 15}}{6} = \frac{6 \pm \sqrt{21}}{6} = 1 \pm \frac{\sqrt{21}}{6}$$

$$c_1 = 1 - \frac{\sqrt{21}}{6} \approx 1 - 0.764 = 0.236$$

Since $0.236 \in \left(0, \tfrac{1}{2}\right)$, MVT is verified. ✓

</details>

---

### ✏️ 2018 — Q1

**(a)** Discuss differentiability at $x = 2$ for
$$f(x) = \begin{cases} 4x^2 - 3x, & x < 2 \\ 3x + 4, & x \geq 2 \end{cases}$$
**[4 marks]**

<details>
<summary>✅ Solution</summary>

**Left-hand derivative at $x=2$:**
$$f'(2^-) = \lim_{h\to 0^-}\frac{f(2+h)-f(2)}{h}$$

For small $h<0$: $f(2+h) = 4(2+h)^2 - 3(2+h)$, and $f(2) = 3(2)+4 = 10$.

$$f'(2^-) = \lim_{h\to 0^-}\frac{4(4+4h+h^2)-6-3h - 10}{h} = \lim_{h\to 0^-}\frac{16+16h+4h^2-16-3h}{h} = \lim_{h\to 0^-}(13+4h) = 13$$

**Right-hand derivative at $x=2$:**
$$f'(2^+) = \lim_{h\to 0^+}\frac{f(2+h)-f(2)}{h} = \lim_{h\to 0^+}\frac{3(2+h)+4-10}{h} = \lim_{h\to 0^+}\frac{3h}{h} = 3$$

Since $f'(2^-) = 13 \neq 3 = f'(2^+)$, **$f$ is NOT differentiable at $x = 2$**.

</details>

---

**(b)** Evaluate $\displaystyle\lim_{x\to 0} x^{2\sin x}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Form $0^0$. Let $y = x^{2\sin x}$, so $\ln y = 2\sin x \cdot \ln x$.

$$\lim_{x\to 0^+} \ln y = \lim_{x\to 0^+} \frac{2\ln x}{\csc x} \quad \left[\frac{-\infty}{\infty}\right]$$

L'Hôpital:
$$= \lim_{x\to 0^+} \frac{2/x}{-\csc x \cot x} = \lim_{x\to 0^+} \frac{-2\sin x \tan x}{x} = \lim_{x\to 0^+}\frac{-2\sin x \tan x}{x}$$

Since $\sin x \approx x$ and $\tan x \approx x$ as $x\to 0$:
$$= \lim_{x\to 0^+}\frac{-2x^2}{x} = \lim_{x\to 0^+}(-2x) = 0$$

Therefore $\ln y \to 0$, so $y \to e^0 = \boxed{1}$.

</details>

---

**(c)** Find the Taylor's polynomial for $f(x) = \sin x$ of degree 5 about $x = 0$. Estimate $\sin(0.1)$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Derivatives at $x=0$:**

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ |
|-----|-------------|-------------|
| 0 | $\sin x$ | 0 |
| 1 | $\cos x$ | 1 |
| 2 | $-\sin x$ | 0 |
| 3 | $-\cos x$ | $-1$ |
| 4 | $\sin x$ | 0 |
| 5 | $\cos x$ | 1 |

**Taylor polynomial of degree 5:**
$$P_5(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} = x - \frac{x^3}{6} + \frac{x^5}{120}$$

**Estimation of $\sin(0.1)$:**
$$\sin(0.1) \approx 0.1 - \frac{(0.1)^3}{6} + \frac{(0.1)^5}{120} = 0.1 - \frac{0.001}{6} + \frac{0.00001}{120}$$
$$= 0.1 - 0.0001\overline{6} + 0.0000000833\ldots \approx \boxed{0.09983}$$

(Actual value: $\sin(0.1) = 0.0998334\ldots$ ✓)

</details>

---

### ✏️ 2017 — Q1

**(a)** Discuss continuity and differentiability at $x = 0$ for
$$f(x) = \begin{cases} 3+2x, & -\tfrac{3}{2} < x \leq 0 \\ 3-2x, & 0 < x < \tfrac{3}{2} \end{cases}$$
**[4 marks]**

<details>
<summary>✅ Solution</summary>

**Continuity at $x=0$:**

- $f(0) = 3+2(0) = 3$
- $\displaystyle\lim_{x\to 0^-} f(x) = \lim_{x\to 0^-}(3+2x) = 3$
- $\displaystyle\lim_{x\to 0^+} f(x) = \lim_{x\to 0^+}(3-2x) = 3$

Since both limits equal $f(0)=3$, **$f$ is continuous at $x=0$**. ✓

**Differentiability at $x=0$:**

- $f'(0^-) = \displaystyle\lim_{h\to 0^-}\frac{(3+2(0+h))-3}{h} = \lim_{h\to 0^-}\frac{2h}{h} = 2$
- $f'(0^+) = \displaystyle\lim_{h\to 0^+}\frac{(3-2(0+h))-3}{h} = \lim_{h\to 0^+}\frac{-2h}{h} = -2$

Since $f'(0^-) = 2 \neq -2 = f'(0^+)$, **$f$ is NOT differentiable at $x=0$**. (The function has a corner/kink at $x=0$.)

</details>

---

**(b)** Evaluate $\displaystyle\lim_{x\to 0}\left(\frac{1}{x}\right)^{\sin x}$ **[3 marks]**

<details>
<summary>✅ Solution</summary>

Form $\infty^0$. Let $y = \left(\dfrac{1}{x}\right)^{\sin x} = x^{-\sin x}$.

$$\ln y = -\sin x \cdot \ln x$$

$$\lim_{x\to 0^+}\ln y = \lim_{x\to 0^+}(-\sin x \cdot \ln x) = -\lim_{x\to 0^+}\frac{\ln x}{\csc x} \quad\left[\frac{-\infty}{\infty}\right]$$

L'Hôpital:
$$= -\lim_{x\to 0^+}\frac{1/x}{-\csc x\cot x} = \lim_{x\to 0^+}\frac{\sin x \tan x}{x} = \lim_{x\to 0^+}\frac{x\cdot x}{x} = 0$$

Therefore $y \to e^0 = \boxed{1}$.

</details>

---

**(c)** Approximate $f(x) = \sin x$ by Taylor's polynomial of degree 5. Estimate $\sin(0.5)$. **[5 marks]**

<details>
<summary>✅ Solution</summary>

Same polynomial as 2018(c):
$$\sin x \approx x - \frac{x^3}{6} + \frac{x^5}{120}$$

**Estimate $\sin(0.5)$:**
$$\sin(0.5) \approx 0.5 - \frac{(0.5)^3}{6} + \frac{(0.5)^5}{120} = 0.5 - \frac{0.125}{6} + \frac{0.03125}{120}$$
$$= 0.5 - 0.020833 + 0.00026 \approx \boxed{0.47943}$$

(Actual value: $0.47943$ ✓)

**Error bound** using remainder $R_5$:
$$|R_5| \leq \frac{|x|^7}{7!} = \frac{(0.5)^7}{5040} = \frac{0.0078125}{5040} \approx 1.55 \times 10^{-6}$$

</details>

---

### ✏️ 2016 — Q1

**(a)** A function $f(x)$ is defined as:
$$f(x) = \begin{cases} \cos x, & x \geq 0 \\ -\cos x, & x < 0 \end{cases}$$
Is $f(x)$ continuous at $x = 0$? **[4 marks]**

<details>
<summary>✅ Solution</summary>

- $f(0) = \cos 0 = 1$
- $\displaystyle\lim_{x\to 0^+} f(x) = \lim_{x\to 0^+}\cos x = 1$
- $\displaystyle\lim_{x\to 0^-} f(x) = \lim_{x\to 0^-}(-\cos x) = -1$

Since $\displaystyle\lim_{x\to 0^-} f(x) = -1 \neq 1 = \lim_{x\to 0^+} f(x)$, the two-sided limit does **not** exist.

Therefore, **$f$ is NOT continuous at $x=0$** (jump discontinuity).

</details>

---

**(c)** State Mean Value Theorem with physical interpretation. **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Statement:** If $f:[a,b]\to\mathbb{R}$ is (i) continuous on $[a,b]$ and (ii) differentiable on $(a,b)$, then there exists at least one point $c\in(a,b)$ such that:
$$f'(c) = \frac{f(b)-f(a)}{b-a}$$

**Physical interpretation:**  
Consider a car traveling from position $f(a)$ at time $a$ to $f(b)$ at time $b$. The average velocity is $\dfrac{f(b)-f(a)}{b-a}$. The MVT guarantees that at some moment $c$, the **instantaneous velocity equals the average velocity**.

*Example:* If a car travels 120 km in 2 hours (avg. speed = 60 km/h), then at some instant, the speedometer must have read exactly 60 km/h.

</details>

---

### ✏️ 2015 — Q1

**(a)** Determine the natural domain of $f(x) = \sqrt{x^2 - 2x - 4}$. **[5 marks]**

<details>
<summary>✅ Solution</summary>

Require $x^2 - 2x - 4 \geq 0$.

Roots: $x = \dfrac{2 \pm \sqrt{4+16}}{2} = 1 \pm \sqrt{5}$

So $x^2 - 2x - 4 \geq 0$ when $x \leq 1-\sqrt{5}$ or $x \geq 1+\sqrt{5}$.

**Natural domain:** $\boxed{(-\infty,\; 1-\sqrt{5}] \cup [1+\sqrt{5},\; +\infty)}$

where $1-\sqrt{5} \approx -1.236$ and $1+\sqrt{5} \approx 3.236$.

```
       ≤≤≤≤≤≤|              |≥≥≥≥≥≥
─────────────┼──────────────┼──────────►
          1-√5            1+√5
```

</details>

---

**(c)** Determine whether $f(x) = |x-1|$ is differentiable at $x = 1$. **[6.5 marks]**

<details>
<summary>✅ Solution</summary>

$$f(x) = \begin{cases} x-1, & x \geq 1 \\ -(x-1) = 1-x, & x < 1\end{cases}$$

**Left-hand derivative at $x=1$:**
$$f'(1^-) = \lim_{h\to 0^-}\frac{f(1+h)-f(1)}{h} = \lim_{h\to 0^-}\frac{|h|}{h} = \lim_{h\to 0^-}\frac{-h}{h} = -1$$

**Right-hand derivative at $x=1$:**
$$f'(1^+) = \lim_{h\to 0^+}\frac{f(1+h)-f(1)}{h} = \lim_{h\to 0^+}\frac{h}{h} = 1$$

Since $f'(1^-) = -1 \neq 1 = f'(1^+)$, **$f$ is NOT differentiable at $x=1$**.

The graph has a sharp corner ("V-shape") at $x=1$.

</details>

---

### ✏️ 2015 — Q2

**(a)** Verify the hypothesis of MVT for $f(x) = \sqrt{25-x^2}$ on $[-5, 3]$. **[6 marks]**

<details>
<summary>✅ Solution</summary>

**Hypotheses check:**
1. $f(x) = \sqrt{25-x^2}$ is continuous on $[-5,3]$ ✓ (since $25-x^2 \geq 0$ for $x\in[-5,5]$)
2. $f'(x) = \dfrac{-x}{\sqrt{25-x^2}}$ is defined on $(-5,3)$ ✓

**MVT condition:** $\exists\, c\in(-5,3)$ with $f'(c) = \dfrac{f(3)-f(-5)}{3-(-5)}$

$$\frac{f(3)-f(-5)}{8} = \frac{\sqrt{16}-0}{8} = \frac{4}{8} = \frac{1}{2}$$

Set $f'(c) = \dfrac{1}{2}$:
$$\frac{-c}{\sqrt{25-c^2}} = \frac{1}{2} \implies -2c = \sqrt{25-c^2}$$

For this to hold: $c < 0$ (so LHS $> 0$). Square both sides:
$$4c^2 = 25 - c^2 \implies 5c^2 = 25 \implies c = -\sqrt{5} \approx -2.236$$

Since $-\sqrt{5} \in (-5,3)$, MVT is verified. ✓

</details>

---

### ✏️ 2014 — Q1

**(a)** $f(x) = \begin{cases}x+1, & x\leq 1 \\ 1-bx^2, & x>1\end{cases}$. Find $b$ for continuity at $x=1$. **[8 marks]**

<details>
<summary>✅ Solution</summary>

$$\lim_{x\to 1^-} f(x) = 1+1 = 2$$
$$\lim_{x\to 1^+} f(x) = 1-b(1)^2 = 1-b$$

For continuity: $1-b = 2 \implies \boxed{b = -1}$.

**Check:** $f(1) = 1+1 = 2$ and $1-(-1)(1)^2 = 2$ ✓

</details>

---

**(c)** Verify Rolle's Theorem for $f(x) = (x-2)(x-3)(x-4)$ on $[2,4]$... wait the paper says [2,3]. Let's verify on $[2,3]$: $f(2)=(0)(−1)(−2)=0$, $f(3)=(1)(0)(−1)=0$. ✓ **[6.5 marks]**

<details>
<summary>✅ Solution</summary>

$f(x) = (x-2)(x-3)(x-4) = x^3 - 9x^2 + 26x - 24$

**Check hypotheses on $[2,3]$:**
1. $f$ is a polynomial, continuous on $[2,3]$ ✓
2. $f$ is differentiable on $(2,3)$ ✓
3. $f(2) = 0 = f(3)$ ✓

**Find $c$:** $f'(x) = 3x^2 - 18x + 26 = 0$

$$c = \frac{18 \pm \sqrt{324 - 312}}{6} = \frac{18 \pm \sqrt{12}}{6} = 3 \pm \frac{\sqrt{3}}{3} = 3 \pm \frac{1}{\sqrt{3}}$$

$c_1 = 3 - \dfrac{1}{\sqrt{3}} \approx 3 - 0.577 = 2.423 \in (2,3)$ ✓

Rolle's theorem verified.

</details>

---

### ✏️ 2013 (Supple.) — Q1

**(a)** Define limit. Given:
$$f(x) = \begin{cases}\tan\dfrac{x}{2}, & x < \dfrac{\pi}{2} \\ 3 - \dfrac{\pi}{2}, & x = \dfrac{\pi}{2} \\ \dfrac{x^4 - \pi^4/8}{x - \pi/2}, & x > \dfrac{\pi}{2}\end{cases}$$
Does $\displaystyle\lim_{x\to \pi/2} f(x)$ exist? **[7 marks]**

<details>
<summary>✅ Solution</summary>

**Left-hand limit:**
$$\lim_{x\to(\pi/2)^-} f(x) = \tan\frac{\pi/2}{2} = \tan\frac{\pi}{4} = 1$$

**Right-hand limit:**
$$\lim_{x\to(\pi/2)^+} \frac{x^4 - \pi^4/8}{x - \pi/2}$$

Note: at $x = \pi/2$, numerator $= (\pi/2)^4 - \pi^4/8 = \pi^4/16 - \pi^4/8 = -\pi^4/16 \neq 0$.

Wait — let me re-read. The numerator at $x=\pi/2$ is $(\pi/2)^4 - \pi^4/8 = \pi^4/16 - 2\pi^4/16 = -\pi^4/16 \neq 0$.

So as $x\to(\pi/2)^+$, the expression $\to \dfrac{-\pi^4/16}{0^+} = -\infty$.

Since $\displaystyle\lim_{x\to(\pi/2)^-} = 1$ but $\displaystyle\lim_{x\to(\pi/2)^+} = -\infty$, the limit **does NOT exist**.

*(Note: The problem may have a different numerator — possibly $x^4 - \pi^4/16$ or $x^2 - \pi^2/4$. With $x^2 - \pi^2/4$: $\dfrac{(x-\pi/2)(x+\pi/2)}{x-\pi/2} = x+\pi/2 \to \pi$ as $x\to\pi/2$. This would give LHL$=1\neq\pi$=RHL, limit still doesn't exist.)*

</details>

---

### ✏️ 2012 — Q7

**(a)** Define continuity and differentiability. Discuss for:
$$f(x) = \begin{cases} 1, & x < 0 \\ 1+\sin x, & 0 \leq x < \pi/2 \\ 2+\left(x-\dfrac{\pi}{2}\right)^2, & x \geq \pi/2 \end{cases}$$
at $x=0$ and $x=\pi/2$. **[10 marks]**

<details>
<summary>✅ Solution</summary>

**At $x = 0$:**

Continuity:
- $\lim_{x\to 0^-} f(x) = 1$
- $\lim_{x\to 0^+} f(x) = 1+\sin 0 = 1$
- $f(0) = 1+\sin 0 = 1$

→ **Continuous at $x=0$** ✓

Differentiability:
- $f'(0^-) = \lim_{h\to 0^-}\dfrac{1-1}{h} = 0$
- $f'(0^+) = \lim_{h\to 0^+}\dfrac{(1+\sin h)-1}{h} = \lim_{h\to 0^+}\dfrac{\sin h}{h} = 1$

Since $0 \neq 1$, **NOT differentiable at $x=0$**.

---

**At $x = \pi/2$:**

Continuity:
- $\lim_{x\to(\pi/2)^-} f(x) = 1+\sin(\pi/2) = 2$
- $\lim_{x\to(\pi/2)^+} f(x) = 2+((\pi/2)-(\pi/2))^2 = 2$
- $f(\pi/2) = 2+0 = 2$

→ **Continuous at $x=\pi/2$** ✓

Differentiability:
- $f'((\pi/2)^-) = \cos(\pi/2) = 0$
- $f'((\pi/2)^+) = 2(x-\pi/2)\big|_{x=\pi/2} = 0$

Since both equal $0$, **$f$ IS differentiable at $x=\pi/2$** ✓

</details>

---

## 🧪 Practice Problems

> **Instructions:** Try each problem before revealing the solution.

---

**P1.** Find the value of $k$ that makes continuous at $x=1$:
$$f(x) = \begin{cases} kx^2, & x \leq 1 \\ 2x + 3, & x > 1\end{cases}$$

<details><summary>Solution</summary>

$\lim_{x\to 1^-} kx^2 = k$ and $\lim_{x\to 1^+}(2x+3) = 5$.  
For continuity: $k = 5$.

</details>

---

**P2.** Evaluate $\displaystyle\lim_{x\to 0} \frac{e^x - e^{-x} - 2x}{x - \sin x}$.

<details><summary>Solution</summary>

Both numerator and denominator $\to 0$. Apply L'Hôpital three times or use Taylor series:  
$e^x - e^{-x} - 2x = \dfrac{2x^3}{3!} + O(x^5) = \dfrac{x^3}{3}+O(x^5)$  
$x - \sin x = \dfrac{x^3}{6} + O(x^5)$  
Ratio $= \dfrac{x^3/3}{x^3/6} = 2$.

</details>

---

**P3.** Is $f(x) = x^{2/3}$ differentiable at $x=0$?

<details><summary>Solution</summary>

$f'(0) = \lim_{h\to 0}\dfrac{h^{2/3}}{h} = \lim_{h\to 0} h^{-1/3}$, which does not exist (tends to $\pm\infty$).  
**Not differentiable at $x=0$** (cusp).

</details>

---

**P4.** Evaluate $\displaystyle\lim_{x\to 1}(1-x)\tan\frac{\pi x}{2}$.

<details><summary>Solution</summary>

Let $t = 1-x$ so $t\to 0^+$ and $\tan(\pi x/2) = \tan(\pi/2 - \pi t/2) = \cot(\pi t/2)$.  
Limit $= \lim_{t\to 0} t\cot(\pi t/2) = \lim_{t\to 0}\dfrac{t\cos(\pi t/2)}{\sin(\pi t/2)} = \dfrac{2}{\pi}$.

</details>

---

**P5.** Verify Rolle's Theorem for $f(x) = \sin x$ on $[0,\pi]$.

<details><summary>Solution</summary>

$f(0)=\sin 0=0$, $f(\pi)=\sin\pi=0$.  
$f'(x)=\cos x=0 \Rightarrow x=\pi/2\in(0,\pi)$. ✓

</details>

---

**P6.** Find the Taylor series of $\cos x$ up to $x^6$ terms about $x=0$.

<details><summary>Solution</summary>

$\cos x = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dfrac{x^6}{6!} = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \dfrac{x^6}{720}$

</details>

---

**P7.** Evaluate $\displaystyle\lim_{x\to 0}(\cos x)^{1/x^2}$.

<details><summary>Solution</summary>

$y = (\cos x)^{1/x^2}$. $\ln y = \dfrac{\ln\cos x}{x^2} \to \dfrac{-x^2/2 + O(x^4)}{x^2} \to -\dfrac{1}{2}$.  
So $y \to e^{-1/2}$.

</details>

---

**P8.** If $f(x) = \begin{cases}ax+b, & x < 1 \\ 3, & x=1 \\ bx^2+a, & x>1\end{cases}$ is continuous at $x=1$, find $a+b$.

<details><summary>Solution</summary>

LHL: $a+b=3$, RHL: $b+a=3$, $f(1)=3$. Both give $a+b=3$.  
$\boxed{a+b=3}$ (infinitely many solutions, e.g., $a=1,b=2$).

</details>

---

**P9.** Verify MVT for $f(x) = \ln x$ on $[1, e]$.

<details><summary>Solution</summary>

$\dfrac{f(e)-f(1)}{e-1} = \dfrac{1-0}{e-1} = \dfrac{1}{e-1}$.  
$f'(c) = 1/c = \dfrac{1}{e-1} \Rightarrow c = e-1 \approx 1.718 \in (1,e)$ ✓

</details>

---

**P10.** Evaluate $\displaystyle\lim_{x\to\infty} x\sin\frac{1}{x}$.

<details><summary>Solution</summary>

Let $t = 1/x$, so as $x\to\infty$, $t\to 0^+$:  
$\lim_{t\to 0^+}\dfrac{\sin t}{t} = 1$.

</details>

---

**P11.** Is $f(x) = x|x|$ differentiable at $x=0$?

<details><summary>Solution</summary>

$f'(0^-) = \lim_{h\to 0^-}\dfrac{h(-h)}{h} = \lim_{h\to 0^-}(-h) = 0$.  
$f'(0^+) = \lim_{h\to 0^+}\dfrac{h\cdot h}{h} = 0$.  
Both equal $0$, so **YES, differentiable at $x=0$**, with $f'(0)=0$.

</details>

---

**P12.** Find the Taylor polynomial of degree 4 for $e^x$ about $x=0$ and estimate $e^{0.1}$.

<details><summary>Solution</summary>

$e^x \approx 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6} + \dfrac{x^4}{24}$  
$e^{0.1} \approx 1 + 0.1 + 0.005 + 0.0001\overline{6} + 0.0000041\overline{6} \approx 1.10517$  
(Actual: $1.10517\ldots$ ✓)

</details>

---

## 📖 References

1. **Thomas, G.B.** *Thomas' Calculus*, 14th ed., Pearson — Chapters 2, 3, 10
2. **Stewart, J.** *Calculus: Early Transcendentals*, 8th ed. — Ch. 2, 3
3. **Paul's Online Math Notes** — [Limits](https://tutorial.math.lamar.edu/Classes/CalcI/limitsIntro.aspx) | [MVT](https://tutorial.math.lamar.edu/Classes/CalcI/MeanValueTheorem.aspx)
4. **Khan Academy** — [Continuity](https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-12/v/continuity-at-a-point) | [L'Hôpital's Rule](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-7/v/introduction-to-l-hopital-s-rule)
5. **MIT OCW 18.01SC** — [Lecture Notes on Limits](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/)
6. **Wolfram MathWorld** — [L'Hôpital's Rule](https://mathworld.wolfram.com/LHospitalsRule.html) | [Taylor Series](https://mathworld.wolfram.com/TaylorSeries.html)
