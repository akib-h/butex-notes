# 📘 Mathematics-1 (MS-101) — 2nd Class Test Solutions
**Gopalganj Textile Engineering College | B.Sc Textile Engineering | Level-1, Term-1 (5th Batch)**

> **Full Marks:** 10 (4+2+4) | **Time:** 30 Minutes

---

## 📑 Table of Contents
1. [Q1 – Continuity & Differentiability](#q1)
2. [Q2 – Evaluate the Limit](#q2)
3. [Q3 – Domain, Range & Differentiation](#q3)
4. [Practice Questions](#practice)
5. [References](#references)

---

## Question 1 — Continuity & Differentiability at x = 0 <a name="q1"></a>

### 📌 Definition of Continuity

A function $f(x)$ is **continuous at** $x = a$ if **all three** conditions hold:

1. $f(a)$ exists
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

![Discontinuity types](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Discontinuity_jump.eps.png/320px-Discontinuity_jump.eps.png)  
*Types of Discontinuity — [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Discontinuity_jump.eps.png)*

### 📌 Given Function

$$
f(x) = \begin{cases}
1 & x < 0 \\
1 + \sin x & 0 \leq x \leq \tfrac{\pi}{2} \\
2 + \left(x - \tfrac{\pi}{2}\right)^2 & x \geq \tfrac{\pi}{2}
\end{cases}
$$

### ✅ Continuity at x = 0

| | Value |
|---|---|
| LHL: $\lim_{x \to 0^-} 1$ | **1** |
| RHL: $\lim_{x \to 0^+}(1 + \sin x)$ | **1** |
| $f(0) = 1 + \sin 0$ | **1** |

LHL = RHL = f(0) = 1 → ✅ **Continuous at x = 0**

### ✅ Differentiability at x = 0

$$\text{LHD} = \lim_{h \to 0^-} \frac{f(h) - f(0)}{h} = \lim_{h \to 0^-}\frac{1-1}{h} = \mathbf{0}$$

$$\text{RHD} = \lim_{h \to 0^+} \frac{(1+\sin h)-1}{h} = \lim_{h \to 0^+}\frac{\sin h}{h} = \mathbf{1}$$

LHD ≠ RHD → ❌ **NOT Differentiable at x = 0**

---

## Question 2 — Evaluate the Limit <a name="q2"></a>

$$\lim_{x \to 1}(1 - x^2)^{\dfrac{1}{\log(1-x)}}$$

**Step 1:** Let $L$ = the limit. Take $\ln$:
$$\ln L = \lim_{x \to 1} \frac{\ln(1-x^2)}{\log_{10}(1-x)}$$

**Step 2:** Factor: $1-x^2 = (1-x)(1+x)$, so numerator $= \ln(1-x) + \ln(1+x)$

**Step 3:** Convert log base: $\log_{10}(1-x) = \dfrac{\ln(1-x)}{\ln 10}$

$$\ln L = \ln 10 \cdot \lim_{x \to 1}\left[1 + \frac{\ln(1+x)}{\ln(1-x)}\right]$$

**Step 4:** As $x\to1$: $\ln(1+x)\to\ln 2$ (finite), $\ln(1-x)\to-\infty$, so the fraction $\to 0$

$$\ln L = \ln 10 \cdot 1 = \ln 10 \implies \boxed{L = 10}$$

---

## Question 3 — Domain, Range & Differentiation <a name="q3"></a>

### Part A: Definitions

- **Domain** — All valid input values of $x$ for which $f(x)$ is defined
- **Range** — All output values $f(x)$ can produce

![Function mapping](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Function_color_example_3.svg/320px-Function_color_example_3.svg.png)  
*Domain → Function → Range — [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Function_color_example_3.svg)*

### Part B: Find dy/dx where $y = (\sin^{-1}x)^x + (\ln x)^{\cos x}$

Let $y = u + v$, so $\dfrac{dy}{dx} = \dfrac{du}{dx} + \dfrac{dv}{dx}$

#### 🔷 For $u = (\sin^{-1}x)^x$

$$\ln u = x\ln(\sin^{-1}x)$$

$$\frac{du}{dx} = (\sin^{-1}x)^x\!\left[\ln(\sin^{-1}x) + \frac{x}{(\sin^{-1}x)\sqrt{1-x^2}}\right]$$

#### 🔷 For $v = (\ln x)^{\cos x}$

$$\ln v = \cos x \cdot \ln(\ln x)$$

$$\frac{dv}{dx} = (\ln x)^{\cos x}\!\left[\frac{\cos x}{x\ln x} - \sin x\ln(\ln x)\right]$$

#### 🎯 Final Answer

$$\boxed{\frac{dy}{dx} = (\sin^{-1}x)^x\!\left[\ln(\sin^{-1}x)+\frac{x}{(\sin^{-1}x)\sqrt{1-x^2}}\right] + (\ln x)^{\cos x}\!\left[\frac{\cos x}{x\ln x}-\sin x\ln(\ln x)\right]}$$

---

## 🧪 Practice Questions <a name="practice"></a>

### P1 — Continuity of $f(x)=|x|/x$ at $x=0$
LHL = −1, RHL = 1 → ❌ **Discontinuous** (jump)

### P2 — Differentiability of $f(x)=|x-2|$ at $x=2$
LHD = −1, RHD = 1 → ❌ **Not differentiable** (sharp corner)

### P3 — Classic limit: $\lim_{x\to 0}(1+x)^{1/x}$
$$\ln L = \lim_{x\to 0}\frac{\ln(1+x)}{x}=1 \implies L = e$$

### P4 — Log differentiation: $y = x^{\sin x}$
$$\frac{dy}{dx} = x^{\sin x}\left[\cos x\ln x + \frac{\sin x}{x}\right]$$

### P5 — Domain & Range of $f(x)=\sqrt{4-x^2}$
Domain = $[-2,2]$, Range = $[0,2]$

### P6 — Test $f(x) = \begin{cases} x^2 & x\leq1 \\ 2x-1 & x>1 \end{cases}$ at $x=1$
✅ Continuous (LHL=RHL=f(1)=1), ✅ Differentiable (LHD=RHD=2)

---

## 🗂️ Key Formulas

| Formula | Value |
|---|---|
| $\frac{d}{dx}[\sin^{-1}x]$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\frac{d}{dx}[\ln x]$ | $\frac{1}{x}$ |
| $\lim_{x\to0}\frac{\sin x}{x}$ | $1$ |
| $\lim_{x\to0}\frac{\ln(1+x)}{x}$ | $1$ |

---

## 📚 References <a name="references"></a>

| Source | Link |
|---|---|
| Thomas' Calculus, 14th Ed. | [Pearson](https://www.pearson.com) |
| MIT OCW — Calculus 18.01 | [ocw.mit.edu](https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/) |
| Khan Academy — Limits & Continuity | [khanacademy.org](https://www.khanacademy.org/math/calculus-1/cs1-limits-and-continuity) |
| Wikipedia — Continuous Function | [en.wikipedia.org](https://en.wikipedia.org/wiki/Continuous_function) |
| Wikipedia — Differentiable Function | [en.wikipedia.org](https://en.wikipedia.org/wiki/Differentiable_function) |
| Paul's Online Math Notes | [tutorial.math.lamar.edu](https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx) |
| BYJU'S — Logarithmic Differentiation | [byjus.com](https://byjus.com/maths/logarithmic-differentiation/) |

---
*MS-101 Mathematics-1 | March 2026*
