# Differential Calculus — Complete Formula & Proof Sheet

> **BUTex | Mathematics-I (MS 101 / AS 101) | Level-1 Term-I**  
> Covers all topics from past papers 2012–2019. Study this alongside the integral sheet.

---

## Table of Contents

1. [Limits — Definitions & Standard Results](#1-limits)
2. [Continuity & Differentiability](#2-continuity--differentiability)
3. [L'Hôpital's Rule & Indeterminate Forms](#3-lhôpitals-rule)
4. [Derivatives — Basic to Advanced](#4-derivatives)
5. [Successive Differentiation & Leibnitz Theorem](#5-successive-differentiation--leibnitz-theorem)
6. [Mean Value Theorems](#6-mean-value-theorems)
7. [Taylor's & Maclaurin's Series](#7-taylors--maclaurins-series)
8. [Partial Differentiation & Euler's Theorem](#8-partial-differentiation--eulers-theorem)
9. [Maxima, Minima & Stationary Points](#9-maxima-minima--stationary-points)
10. [Convergence of Series](#10-convergence-of-series)
11. [Radius of Curvature](#11-radius-of-curvature)

---

## 1. Limits

### 1.1 Definition

$$\lim_{x \to a} f(x) = L \iff \forall\,\varepsilon > 0,\;\exists\,\delta > 0 : 0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon$$

### 1.2 Limit Laws

If $\lim_{x\to a} f(x) = L$ and $\lim_{x\to a} g(x) = M$, then:

| Law | Formula |
|-----|---------|
| Sum | $\lim[f \pm g] = L \pm M$ |
| Product | $\lim[f \cdot g] = L \cdot M$ |
| Quotient | $\lim[f/g] = L/M,\quad M \neq 0$ |
| Power | $\lim[f(x)]^n = L^n$ |
| Composition | $\lim_{x\to a} f(g(x)) = f(M)$, if $f$ is continuous at $M$ |

### 1.3 Standard Limits — Must Memorize

$$\lim_{x \to 0} \frac{\sin x}{x} = 1 \qquad \lim_{x \to 0} \frac{\tan x}{x} = 1 \qquad \lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

$$\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1 \qquad \lim_{x \to 0} \frac{a^x - 1}{x} = \ln a \qquad \lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$$

$$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e \qquad \lim_{x \to 0} (1 + x)^{1/x} = e \qquad \lim_{x \to 0^+} x \ln x = 0$$

$$\lim_{x \to \infty} \frac{\ln x}{x} = 0 \qquad \lim_{x \to \infty} x^{1/x} = 1 \qquad \lim_{x \to 0^+} x^x = 1$$

### 1.4 Sandwich (Squeeze) Theorem

If $g(x) \leq f(x) \leq h(x)$ near $a$, and $\lim_{x\to a} g(x) = \lim_{x\to a} h(x) = L$, then:

$$\lim_{x \to a} f(x) = L$$

**Exam use:** $\lim_{x\to 0^+} x\sin(1/x) = 0$ because $-|x| \leq x\sin(1/x) \leq |x|$.

---

## 2. Continuity & Differentiability

### 2.1 Continuity at a Point

$f(x)$ is **continuous** at $x = a$ if all three conditions hold:

1. $f(a)$ is defined
2. $\lim_{x \to a} f(x)$ exists, i.e., $\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$
3. $\lim_{x \to a} f(x) = f(a)$

### 2.2 Differentiability at a Point

$f(x)$ is **differentiable** at $x = a$ if:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

exists (left-hand derivative = right-hand derivative).

> **Key fact:** Differentiable $\Rightarrow$ Continuous, but Continuous $\not\Rightarrow$ Differentiable.  
> Example: $f(x) = |x|$ is continuous but not differentiable at $x = 0$.

### 2.3 How to Test Continuity for Piecewise Functions (Exam Pattern)

**Given:**
$$f(x) = \begin{cases} g(x) & x \neq a \\ B & x = a \end{cases}$$

**Step 1:** Find $\lim_{x \to a} g(x)$  
**Step 2:** Set equal to $B$ for continuity  
**Step 3:** Solve for $B$

**Exam Example (2019, 2014):**
$$f(x) = \begin{cases} \dfrac{1-\cos x}{x^2} & x \neq 0 \\ B & x = 0 \end{cases}$$

$$\lim_{x\to 0} \frac{1-\cos x}{x^2} = \frac{1}{2} \quad\Rightarrow\quad B = \frac{1}{2}$$

---

## 3. L'Hôpital's Rule

### 3.1 Statement

If $\lim_{x\to a} f(x) = 0,\; \lim_{x\to a} g(x) = 0$ (or both $\to \pm\infty$), and $g'(x) \neq 0$ near $a$, then:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

(Apply repeatedly if needed.)

### 3.2 Indeterminate Forms & Transformations

| Form | Transformation |
|------|---------------|
| $0/0,\;\infty/\infty$ | Apply L'Hôpital directly |
| $0 \cdot \infty$ | Write as $\dfrac{f}{1/g}$ or $\dfrac{g}{1/f}$ |
| $\infty - \infty$ | Rationalize or combine into fraction |
| $0^0,\;1^\infty,\;\infty^0$ | Take $\ln$, then apply L'Hôpital |

### 3.3 Power Forms — Standard Log Trick

For $y = [f(x)]^{g(x)}$:

$$\ln y = g(x)\ln f(x)$$

Find $\lim \ln y = L$, then $\lim y = e^L$.

### 3.4 Exam-Recurring Power Limits

**Type: $1^\infty$ (2019, 2016)**
$$\lim_{x \to 1} (2-x)^{\tan(\pi x/2)}$$

Let $y = (2-x)^{\tan(\pi x/2)}$, so $\ln y = \tan\!\left(\tfrac{\pi x}{2}\right)\ln(2-x)$. As $x\to 1$: $0\cdot\infty$ form. Rewrite:

$$\ln y = \frac{\ln(2-x)}{\cot(\pi x/2)} \xrightarrow{\text{L'H}} \frac{-1/(2-x)}{-(\pi/2)\csc^2(\pi x/2)} \to \frac{2}{\pi}$$

$$\therefore \lim y = e^{2/\pi}$$

**Type: Power limit (2018, 2017)**
$$\lim_{x\to 0} x^{2\sin x} = 1, \qquad \lim_{x\to 0}\left(\frac{1}{x}\right)^{\!\sin x} = 1$$

**Type: Standard $e$ limit (2017)**
$$\lim_{x\to\infty}\left(1+\frac{1}{x^2}\right)^x:\quad \ln y = x\ln\!\left(1+\tfrac{1}{x^2}\right)\sim \frac{x}{x^2}=\frac{1}{x}\to 0 \implies y\to 1$$

---

## 4. Derivatives

### 4.1 Basic Rules

| Rule | Formula |
|------|---------|
| Constant | $\dfrac{d}{dx}[c] = 0$ |
| Power | $\dfrac{d}{dx}[x^n] = nx^{n-1}$ |
| Sum/Difference | $[f \pm g]' = f' \pm g'$ |
| Product | $[fg]' = f'g + fg'$ |
| Quotient | $\left[\dfrac{f}{g}\right]' = \dfrac{f'g - fg'}{g^2}$ |
| Chain | $[f(g(x))]' = f'(g(x))\cdot g'(x)$ |

### 4.2 Standard Derivatives — Complete Table

| $f(x)$ | $f'(x)$ |
|--------|---------|
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\log_a x$ | $1/(x\ln a)$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x\tan x$ |
| $\csc x$ | $-\csc x\cot x$ |
| $\sin^{-1} x$ | $1/\sqrt{1-x^2}$ |
| $\cos^{-1} x$ | $-1/\sqrt{1-x^2}$ |
| $\tan^{-1} x$ | $1/(1+x^2)$ |
| $\cot^{-1} x$ | $-1/(1+x^2)$ |
| $\sec^{-1} x$ | $1/(|x|\sqrt{x^2-1})$ |
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |
| $\tanh x$ | $\text{sech}^2 x$ |

### 4.3 Logarithmic Differentiation

Use when $y = [f(x)]^{g(x)}$ or products/quotients of many terms.

**Step:** Take $\ln$ both sides, differentiate implicitly.

**Exam Example (2012):** $y = (\sin x)^{\cos x} + (\cos x)^{\sin x}$

For $u = (\sin x)^{\cos x}$:
$$\ln u = \cos x \cdot \ln(\sin x)$$
$$\frac{u'}{u} = -\sin x\ln(\sin x) + \cos x\cdot\frac{\cos x}{\sin x}$$
$$u' = (\sin x)^{\cos x}\left[\frac{\cos^2 x}{\sin x} - \sin x\ln\sin x\right]$$

### 4.4 Parametric Differentiation

If $x = f(t)$, $y = g(t)$:

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{g'(t)}{f'(t)}$$

$$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\!\left(\frac{dy}{dx}\right)}{dx/dt}$$

### 4.5 Implicit Differentiation

For $F(x, y) = 0$:

$$\frac{dy}{dx} = -\frac{F_x}{F_y} = -\frac{\partial F/\partial x}{\partial F/\partial y}$$

---

## 5. Successive Differentiation & Leibnitz Theorem

### 5.1 $n$-th Derivatives — Standard Results

| $f(x)$ | $f^{(n)}(x)$ |
|--------|-------------|
| $x^m$ | $m(m-1)\cdots(m-n+1)\,x^{m-n}$ |
| $e^{ax}$ | $a^n e^{ax}$ |
| $a^x$ | $a^x(\ln a)^n$ |
| $\ln x$ | $(-1)^{n-1}\dfrac{(n-1)!}{x^n}$ |
| $\sin(ax+b)$ | $a^n\sin\!\left(ax+b+\dfrac{n\pi}{2}\right)$ |
| $\cos(ax+b)$ | $a^n\cos\!\left(ax+b+\dfrac{n\pi}{2}\right)$ |
| $(ax+b)^m$ | $a^n\,\dfrac{m!}{(m-n)!}(ax+b)^{m-n}$ |

### 5.2 Leibnitz Theorem for $n$-th Derivative of a Product

If $y = uv$, then:

$$y_n = \sum_{r=0}^{n} \binom{n}{r} u^{(n-r)} v^{(r)}$$

**Expanded:**
$$y_n = u_n v + \binom{n}{1}u_{n-1}v_1 + \binom{n}{2}u_{n-2}v_2 + \cdots + u\,v_n$$

where $u_k = \dfrac{d^k u}{dx^k}$, $\binom{n}{r} = \dfrac{n!}{r!(n-r)!}$.

### 5.3 Exam-Recurring Leibnitz Problems

**Pattern (2016, 2013):** If $y = e^{m\cos^{-1}x}$, prove:

$$(1-x^2)\,y_{n+2} - (2n+1)x\,y_{n+1} - (n^2+m^2)\,y_n = 0$$

**Proof outline:**
- $y_1 = y \cdot \dfrac{-m}{\sqrt{1-x^2}}$
- Square: $(1-x^2)y_1^2 = m^2 y^2$
- Differentiate: $(1-x^2)y_2 - xy_1 - m^2 y = 0$
- Apply Leibnitz $n$ times to get the recurrence

**Pattern (2015):** If $\cos^{-1}(y/b) = \log(x/n)^n$, prove $x^2y_{n+2} + (2n+1)xy_{n+1} + 2n^2y_n = 0$

---

## 6. Mean Value Theorems

### 6.1 Rolle's Theorem

**Statement:** If $f$ is:
1. Continuous on $[a, b]$
2. Differentiable on $(a, b)$
3. $f(a) = f(b)$

Then $\exists\; c \in (a, b)$ such that $f'(c) = 0$.

**Exam Example (2014):** $f(x) = (x-2)(x-3)(x-4)$ on $[2, 4]$

$f(2) = f(4) = 0$. $f$ is a polynomial (continuous, differentiable). By Rolle's, $\exists\; c \in (2,4)$ with $f'(c) = 0$.

$f'(x) = (x-3)(x-4) + (x-2)(x-4) + (x-2)(x-3)$. Setting $f'(c) = 0$ gives $c \approx 2.35$ and $c \approx 3.65$.

### 6.2 Lagrange's Mean Value Theorem (LMVT)

**Statement:** If $f$ is:
1. Continuous on $[a, b]$
2. Differentiable on $(a, b)$

Then $\exists\; c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

**Geometric meaning:** The tangent at $c$ is parallel to the chord $AB$.

**Exam Example (2019):** $f(x) = x(x-1)(x-2)$ on $\left[0, \tfrac{1}{2}\right]$

$$f(0) = 0,\quad f(1/2) = \tfrac{1}{2}\cdot(-\tfrac{1}{2})\cdot(-\tfrac{3}{2}) = \tfrac{3}{8}$$

$$f'(c) = \frac{3/8 - 0}{1/2 - 0} = \frac{3}{4}$$

$f'(x) = 3x^2 - 6x + 2$. Solve $3c^2 - 6c + 2 = 3/4 \Rightarrow c = \ldots$ (verify $c \in (0, 1/2)$).

### 6.3 Cauchy's Mean Value Theorem

If $f, g$ satisfy MVT conditions and $g'(x) \neq 0$, then $\exists\; c \in (a, b)$:

$$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$

---

## 7. Taylor's & Maclaurin's Series

### 7.1 Taylor's Theorem

$$f(x) = f(a) + (x-a)f'(a) + \frac{(x-a)^2}{2!}f''(a) + \cdots + \frac{(x-a)^n}{n!}f^{(n)}(a) + R_n$$

**Lagrange's Remainder:**
$$R_n = \frac{(x-a)^{n+1}}{(n+1)!}f^{(n+1)}(c), \quad c \in (a, x)$$

### 7.2 Maclaurin's Series (Taylor's about $x = 0$)

$$f(x) = f(0) + xf'(0) + \frac{x^2}{2!}f''(0) + \frac{x^3}{3!}f'''(0) + \cdots$$

### 7.3 Standard Series — Must Know

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty}\frac{x^n}{n!}$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}$$

$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots,\quad |x| \leq 1,\; x\neq -1$$

$$\tan^{-1} x = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots,\quad |x| \leq 1$$

$$(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots,\quad |x| < 1$$

### 7.4 Exam Example — Taylor's Polynomial for $\sin x$ (2018, 2017, 2015)

Degree-5 Taylor polynomial of $\sin x$ about $x = 0$:

$$P_5(x) = x - \frac{x^3}{6} + \frac{x^5}{120}$$

**Error estimate** for $\sin(0.1)$ or $\sin(0.5)$:
$$|R_5| \leq \frac{|x|^6}{6!} = \frac{(0.1)^6}{720} \approx 1.4 \times 10^{-10}$$

---

## 8. Partial Differentiation & Euler's Theorem

### 8.1 Partial Derivatives

For $f(x, y)$:

$$f_x = \frac{\partial f}{\partial x} = \lim_{h\to 0}\frac{f(x+h,y) - f(x,y)}{h}$$

$$f_y = \frac{\partial f}{\partial y} = \lim_{k\to 0}\frac{f(x,y+k) - f(x,y)}{k}$$

**Clairaut's Theorem (Mixed partials):** If $f_{xy}$ and $f_{yx}$ are continuous:

$$f_{xy} = f_{yx}$$

### 8.2 Euler's Theorem on Homogeneous Functions

**Definition:** $f(x, y)$ is **homogeneous of degree $n$** if:

$$f(tx, ty) = t^n f(x, y)$$

**Euler's Theorem:**

$$x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = n\,f$$

**For second derivatives (Exam pattern):**

$$x^2 f_{xx} + 2xy\,f_{xy} + y^2 f_{yy} = n(n-1)f$$

### 8.3 Euler's Theorem for Composite/Inverse Functions

If $u = \phi(v)$ where $v$ is homogeneous of degree $n$, then:

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = n\,v\,\phi'(v)$$

**Exam Example (2019):** $u = \sin^{-1}\!\left(\dfrac{x^2+y^2}{x+y}\right)$

Here $v = \dfrac{x^2+y^2}{x+y}$ is homogeneous of degree 1, and $u = \sin^{-1}v$.

$$x u_x + y u_y = \frac{n\cdot v\cdot\phi'(v)}{1} = \frac{1\cdot v}{\sqrt{1-v^2}} = \tan u$$

### 8.4 Exam-Recurring Laplace Results (2018, 2016)

**(a)** If $u = \ln(x^2 + y^2)$:

$$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{2}{x^2+y^2} - \frac{4x^2}{(x^2+y^2)^2} + \frac{2}{x^2+y^2} - \frac{4y^2}{(x^2+y^2)^2} = 0$$

**(b)** If $u = \ln(x^2 + y^2)$: $u$ is harmonic ($\nabla^2 u = 0$).

### 8.5 Total Differential

$$du = \frac{\partial u}{\partial x}dx + \frac{\partial u}{\partial y}dy$$

**Chain rule — one parameter:**

$$\frac{du}{dt} = \frac{\partial u}{\partial x}\frac{dx}{dt} + \frac{\partial u}{\partial y}\frac{dy}{dt}$$

---

## 9. Maxima, Minima & Stationary Points

### 9.1 For Single-Variable Functions

**Stationary points:** Solve $f'(x) = 0$.

**Second Derivative Test:**

| Condition | Conclusion |
|-----------|------------|
| $f'(c) = 0$ and $f''(c) > 0$ | Local minimum at $c$ |
| $f'(c) = 0$ and $f''(c) < 0$ | Local maximum at $c$ |
| $f'(c) = 0$ and $f''(c) = 0$ | Use higher derivatives or first derivative test |

**First Derivative Test:**
- $f'$ changes $+ \to -$: local max
- $f'$ changes $- \to +$: local min
- No sign change: inflection point

### 9.2 Increasing / Decreasing Intervals (Exam Pattern 2019, 2018, 2017, 2016)

- $f'(x) > 0$ on $(a,b)$: $f$ is **increasing** on $(a,b)$
- $f'(x) < 0$ on $(a,b)$: $f$ is **decreasing** on $(a,b)$

**Exam Example (2019):** $f(x) = 2x^3 - 6x^2 - 18x + 7$

$$f'(x) = 6x^2 - 12x - 18 = 6(x^2 - 2x - 3) = 6(x-3)(x+1)$$

Critical points: $x = -1,\; 3$. Sign analysis:
- $x < -1$: $f' > 0$ (increasing)
- $-1 < x < 3$: $f' < 0$ (decreasing)
- $x > 3$: $f' > 0$ (increasing)

Local max at $x = -1$, local min at $x = 3$.

### 9.3 Maxima/Minima for Two Variables

**Critical points:** Solve $f_x = 0$ and $f_y = 0$ simultaneously.

**Second Derivative Test:** Compute discriminant:

$$D = f_{xx}f_{yy} - (f_{xy})^2$$

| Condition | Conclusion |
|-----------|------------|
| $D > 0$ and $f_{xx} > 0$ | Local minimum |
| $D > 0$ and $f_{xx} < 0$ | Local maximum |
| $D < 0$ | Saddle point |
| $D = 0$ | Test inconclusive |

**Exam Example (2013):** Maximize $u = 4/x + 36/y$ subject to $x + y = 2$

Use substitution $y = 2 - x$ and minimize $u(x)$.

---

## 10. Convergence of Series

### 10.1 Basic Tests

**Divergence Test:** If $\lim_{n\to\infty} a_n \neq 0$, then $\sum a_n$ diverges.

**p-Series:** $\sum \dfrac{1}{n^p}$ converges if $p > 1$, diverges if $p \leq 1$.

**Geometric Series:** $\sum ar^n$ converges to $\dfrac{a}{1-r}$ if $|r| < 1$.

### 10.2 Ratio Test (D'Alembert's Test)

$$L = \lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$$

- $L < 1$: converges absolutely
- $L > 1$ (or $L = \infty$): diverges
- $L = 1$: inconclusive

**Exam Example (2019):** $\sum_{n=1}^{\infty} \dfrac{3^n}{5^n - 1}$

$$\frac{a_{n+1}}{a_n} = \frac{3^{n+1}}{5^{n+1}-1}\cdot\frac{5^n-1}{3^n} \to \frac{3}{5} < 1 \implies \text{converges}$$

### 10.3 Comparison Test

If $0 \leq a_n \leq b_n$ for large $n$:
- $\sum b_n$ converges $\Rightarrow$ $\sum a_n$ converges
- $\sum a_n$ diverges $\Rightarrow$ $\sum b_n$ diverges

### 10.4 Limit Comparison Test

If $\lim_{n\to\infty}\dfrac{a_n}{b_n} = c > 0$, then $\sum a_n$ and $\sum b_n$ both converge or both diverge.

### 10.5 Cauchy's Root Test

$$L = \lim_{n\to\infty}\sqrt[n]{|a_n|}$$

- $L < 1$: converges
- $L > 1$: diverges
- $L = 1$: inconclusive

### 10.6 Raabe's Test (when Ratio Test = 1)

$$L = \lim_{n\to\infty} n\left(\left|\frac{a_n}{a_{n+1}}\right| - 1\right)$$

- $L > 1$: converges
- $L < 1$: diverges

**Exam Example (2018):** $\dfrac{1}{3} + \dfrac{1\cdot 2}{3\cdot 5} + \dfrac{1\cdot 2\cdot 3}{3\cdot 5\cdot 7} + \cdots$

Use Raabe's since ratio test gives $L = 1$.

### 10.7 Alternating Series Test (Leibnitz)

$\sum (-1)^n a_n$ converges if:
1. $a_n > 0$
2. $a_n$ is decreasing: $a_{n+1} \leq a_n$
3. $\lim_{n\to\infty} a_n = 0$

### 10.8 Gregory's Series (2016 Supp.)

$$\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}$$

Derived from $\tan^{-1}(1) = \pi/4$ with the series $\tan^{-1}x = x - \dfrac{x^3}{3} + \dfrac{x^5}{5} - \cdots$

**Proof of Gregory's result (2016):** $\dfrac{\pi}{8} = \dfrac{1}{1\cdot 8} + \dfrac{1}{5\cdot 7} + \dfrac{1}{9\cdot 11} + \cdots$ — use partial fractions on $\tan^{-1}x$.

---

## 11. Radius of Curvature

### 11.1 Cartesian Form

$$\rho = \frac{\left[1 + (y')^2\right]^{3/2}}{|y''|}$$

where $y' = dy/dx$, $y'' = d^2y/dx^2$.

### 11.2 Parametric Form

$$\rho = \frac{\left[(\dot{x})^2 + (\dot{y})^2\right]^{3/2}}{|\dot{x}\ddot{y} - \dot{y}\ddot{x}|}$$

where dots denote derivatives with respect to the parameter $t$.

### 11.3 Polar Form

$$\rho = \frac{\left[r^2 + (r')^2\right]^{3/2}}{|r^2 + 2(r')^2 - r\,r''|}$$

### 11.4 Exam Example (2012)

Find radius of curvature of $y = e^{x^2}$ at $(0, 1)$:

$$y' = 2xe^{x^2},\quad y'' = (2 + 4x^2)e^{x^2}$$

At $(0,1)$: $y' = 0$, $y'' = 2$.

$$\rho = \frac{(1+0)^{3/2}}{2} = \frac{1}{2}$$

---

## Quick Reference — Exam Pattern Summary

| Topic | Years Appeared | Key Formula |
|-------|---------------|-------------|
| Continuity / finding $B$ | 2019, 2016, 2014, 2013 | $\lim f = f(a)$ |
| Power limits $1^\infty$ | 2019, 2018, 2017, 2016, 2015 | $\ln y = g\ln f$, exponentiate |
| MVT / Rolle's | 2019, 2016, 2015, 2014 | $f'(c) = \frac{f(b)-f(a)}{b-a}$ |
| Taylor's $\sin x$ deg 5 | 2018, 2017, 2015 | $x - x^3/6 + x^5/120$ |
| Euler's theorem | 2019, 2018, 2016 | $xu_x + yu_y = nu$ |
| Leibnitz | 2016, 2015, 2014, 2013 | $y_n = \sum\binom{n}{r}u_{n-r}v_r$ |
| Stationary pts + intervals | 2019, 2018, 2017, 2016 | Solve $f'=0$, sign chart |
| Series convergence | 2019, 2018, 2017, 2014, 2013 | Ratio / Raabe's |
| Laplace equation | 2018, 2016 | $u_{xx} + u_{yy} = 0$ |

---

*Made for BUTex x86 study group — MS 101 / AS 101*
