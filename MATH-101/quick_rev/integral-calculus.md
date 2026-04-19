# Integral Calculus — Complete Formula & Proof Sheet

> **BUTex | Mathematics-I (MS 101 / AS 101) | Level-1 Term-I**  
> Covers all topics from past papers 2012–2019. Study this alongside the differential calculus sheet.

---

## Table of Contents

1. [Standard Integrals — Complete Table](#1-standard-integrals)
2. [Integration Techniques](#2-integration-techniques)
3. [Definite Integrals & Key Properties](#3-definite-integrals--key-properties)
4. [Reduction Formulas](#4-reduction-formulas)
5. [Wallis's Formula](#5-walliss-formula)
6. [Gamma & Beta Functions](#6-gamma--beta-functions)
7. [Arc Length](#7-arc-length)
8. [Area Under Curves](#8-area-under-curves)
9. [Volume of Revolution](#9-volume-of-revolution)
10. [Polar Curves — Area & Perimeter](#10-polar-curves--area--perimeter)

---

## 1. Standard Integrals

### 1.1 Algebraic

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

$$\int \frac{1}{x}\,dx = \ln|x| + C$$

$$\int \frac{1}{x^2 + a^2}\,dx = \frac{1}{a}\tan^{-1}\frac{x}{a} + C$$

$$\int \frac{1}{x^2 - a^2}\,dx = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C$$

$$\int \frac{1}{a^2 - x^2}\,dx = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C$$

$$\int \frac{1}{\sqrt{a^2 - x^2}}\,dx = \sin^{-1}\frac{x}{a} + C$$

$$\int \frac{1}{\sqrt{x^2 \pm a^2}}\,dx = \ln\left|x + \sqrt{x^2 \pm a^2}\right| + C$$

$$\int \frac{1}{\sqrt{x^2 + 2x - 1}}\,dx \longrightarrow \text{complete the square first}$$

### 1.2 Completing the Square (Exam Pattern 2018, 2017)

$$\int \frac{dx}{x\sqrt{x^2 + 2x - 1}} \longrightarrow \text{substitute } x = 1/t$$

**General approach for** $\int \frac{dx}{ax^2 + bx + c}$ or $\int \frac{dx}{\sqrt{ax^2+bx+c}}$:

Write $ax^2 + bx + c = a\!\left[\left(x + \frac{b}{2a}\right)^2 + \frac{c}{a} - \frac{b^2}{4a^2}\right]$, then match to a standard form.

### 1.3 Exponential & Logarithmic

$$\int e^x\,dx = e^x + C \qquad \int a^x\,dx = \frac{a^x}{\ln a} + C$$

$$\int e^{ax}\,dx = \frac{e^{ax}}{a} + C \qquad \int \ln x\,dx = x\ln x - x + C$$

### 1.4 Trigonometric

$$\int \sin x\,dx = -\cos x + C \qquad \int \cos x\,dx = \sin x + C$$

$$\int \tan x\,dx = \ln|\sec x| + C \qquad \int \cot x\,dx = \ln|\sin x| + C$$

$$\int \sec x\,dx = \ln|\sec x + \tan x| + C$$

$$\int \csc x\,dx = \ln|\csc x - \cot x| + C = -\ln|\csc x + \cot x| + C$$

$$\int \sec^2 x\,dx = \tan x + C \qquad \int \csc^2 x\,dx = -\cot x + C$$

$$\int \sec x\tan x\,dx = \sec x + C \qquad \int \csc x\cot x\,dx = -\csc x + C$$

$$\int \sin^2 x\,dx = \frac{x}{2} - \frac{\sin 2x}{4} + C \qquad \int \cos^2 x\,dx = \frac{x}{2} + \frac{\sin 2x}{4} + C$$

### 1.5 Inverse Trigonometric

$$\int \sin^{-1}x\,dx = x\sin^{-1}x + \sqrt{1-x^2} + C$$

$$\int \cos^{-1}x\,dx = x\cos^{-1}x - \sqrt{1-x^2} + C$$

$$\int \tan^{-1}x\,dx = x\tan^{-1}x - \frac{1}{2}\ln(1+x^2) + C$$

---

## 2. Integration Techniques

### 2.1 Substitution

Replace $u = g(x)$, so $du = g'(x)\,dx$.

$$\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$$

**Key substitutions for exam:**

| Integrand contains | Substitution |
|--------------------|-------------|
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ |
| $\sqrt{ax - x^2}$ | $x = a\sin^2\theta$ |
| $\dfrac{1}{x\sqrt{x^2\pm a^2}}$ | $x = 1/t$ |

### 2.2 Integration by Parts

$$\int u\,dv = uv - \int v\,du$$

**LIATE rule** — choose $u$ in this priority order:  
**L**ogarithm → **I**nverse trig → **A**lgebraic → **T**rigonometric → **E**xponential

**Recurring exam integrals:**

$$\int x e^x\,dx = xe^x - e^x + C = e^x(x-1) + C$$

$$\int x^2 e^x\,dx = e^x(x^2 - 2x + 2) + C$$

$$\int x\ln x\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

$$\int e^{ax}\sin bx\,dx = \frac{e^{ax}(a\sin bx - b\cos bx)}{a^2 + b^2} + C$$

$$\int e^{ax}\cos bx\,dx = \frac{e^{ax}(a\cos bx + b\sin bx)}{a^2 + b^2} + C$$

### 2.3 Partial Fractions (Exam 2016, 2014)

**Case 1 — Distinct linear factors:**
$$\frac{P(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$

**Case 2 — Repeated linear factors:**
$$\frac{P(x)}{(x-a)^2(x-b)} = \frac{A}{x-a} + \frac{B}{(x-a)^2} + \frac{C}{x-b}$$

**Case 3 — Irreducible quadratic:**
$$\frac{P(x)}{(x^2+bx+c)(x-a)} = \frac{Ax+B}{x^2+bx+c} + \frac{C}{x-a}$$

**Exam Example (2016):**
$$\int \frac{2x^2 + x + 7}{(x-1)(x^2+2x-3)}\,dx$$

Note: $x^2 + 2x - 3 = (x+3)(x-1)$, so denominator $= (x-1)^2(x+3)$.

### 2.4 Numerator Decomposition Trick (2018 Exam)

For $\displaystyle\int \frac{(x+1)\,dx}{4+8x-5x^2}$:

Write numerator as $A\cdot\frac{d}{dx}(4+8x-5x^2) + B$:

$$x+1 = A(8-10x) + B$$

Solve: $-10A = 1 \Rightarrow A = -1/10$; $8A + B = 1 \Rightarrow B = 9/5$.

$$\int = -\frac{1}{10}\ln|4+8x-5x^2| + \frac{9}{5}\int\frac{dx}{4+8x-5x^2}$$

The remaining integral is done by completing the square.

### 2.5 Weierstrass / Half-Angle Substitution (2017, 2016)

For $\displaystyle\int \frac{dx}{a + b\sin x}$ or $\displaystyle\int \frac{dx}{a + b\cos x}$:

Let $t = \tan(x/2)$, then:

$$\sin x = \frac{2t}{1+t^2},\quad \cos x = \frac{1-t^2}{1+t^2},\quad dx = \frac{2\,dt}{1+t^2}$$

**Exam Example (2017):** $\displaystyle\int \frac{dx}{5 + 4\sin 2x}$

Note: $\sin 2x = 2\sin x\cos x$. Let $t = \tan x$: $\sin 2x = \dfrac{2t}{1+t^2}$, $dx = \dfrac{dt}{1+t^2}$.

$$\int \frac{dt/(1+t^2)}{5 + 8t/(1+t^2)} = \int \frac{dt}{5(1+t^2)+8t} = \int\frac{dt}{5t^2+8t+5}$$

Complete the square and integrate.

---

## 3. Definite Integrals & Key Properties

### 3.1 Fundamental Theorem of Calculus

**Part 1:** If $F(x) = \displaystyle\int_a^x f(t)\,dt$, then $F'(x) = f(x)$.

**Part 2:**
$$\int_a^b f(x)\,dx = F(b) - F(a), \quad\text{where } F'(x) = f(x)$$

### 3.2 Properties

$$\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$$

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$$

$$\int_a^b f(x)\,dx = \int_a^b f(a+b-x)\,dx$$

$$\int_0^a f(x)\,dx = \int_0^a f(a-x)\,dx$$

$$\int_0^{2a} f(x)\,dx = 2\int_0^a f(x)\,dx \quad \text{if } f(2a-x) = f(x)$$

$$\int_{-a}^{a} f(x)\,dx = \begin{cases} 2\int_0^a f(x)\,dx & \text{if } f \text{ even} \\ 0 & \text{if } f \text{ odd} \end{cases}$$

### 3.3 Exam Examples Using Properties

**2017 (classic King property):** $\displaystyle\int_0^{\pi/2} \ln(\sin x)\,dx$

Let $I = \displaystyle\int_0^{\pi/2}\ln(\sin x)\,dx$. Using $\displaystyle\int_0^{\pi/2} f(x)\,dx = \int_0^{\pi/2}f\!\left(\tfrac{\pi}{2}-x\right)dx$:

$$I = \int_0^{\pi/2}\ln(\cos x)\,dx$$

Adding: $2I = \displaystyle\int_0^{\pi/2}\ln(\sin x\cos x)\,dx = \int_0^{\pi/2}\ln\!\left(\tfrac{\sin 2x}{2}\right)dx$

$$= \int_0^{\pi/2}\ln(\sin 2x)\,dx - \frac{\pi}{2}\ln 2 = I - \frac{\pi}{2}\ln 2$$

$$\therefore\; I = -\frac{\pi}{2}\ln 2$$

**2019:** $\displaystyle\int_0^{\pi} \frac{x\,dx}{1 + \cos^2 x}$

Let $I = \displaystyle\int_0^\pi \frac{x}{1+\cos^2 x}dx$. Use $x\to\pi - x$:

$$I = \int_0^\pi\frac{\pi - x}{1+\cos^2 x}dx \implies 2I = \pi\int_0^\pi\frac{dx}{1+\cos^2 x}$$

Use $\cos^2 x = \dfrac{1}{1+\tan^2 x}$, then $t = \tan x$:

$$I = \frac{\pi}{2}\cdot\frac{\pi}{2\sqrt{2}} \cdot 2 = \frac{\pi^2}{2\sqrt{2}}$$

**2016 (odd/even):** $\displaystyle\int_{-\pi/2}^{\pi/2}(x^3 + \sin^5 x\cos^3 x)\,dx = 0$ (odd integrand)

---

## 4. Reduction Formulas

### 4.1 $I_n = \int \cos^n x\,dx$ (2019)

**Derivation:** Write $\cos^n x = \cos^{n-1}x \cdot \cos x$, integrate by parts with $u = \cos^{n-1}x$, $dv = \cos x\,dx$:

$$I_n = \cos^{n-1}x\sin x + (n-1)\int\cos^{n-2}x\sin^2 x\,dx$$

$$= \cos^{n-1}x\sin x + (n-1)(I_{n-2} - I_n)$$

$$\boxed{I_n = \frac{\cos^{n-1}x\sin x}{n} + \frac{n-1}{n}I_{n-2}}$$

**Evaluate $\displaystyle\int\cos^5 x\,dx$:**

$$I_5 = \frac{\cos^4 x\sin x}{5} + \frac{4}{5}I_3$$

$$I_3 = \frac{\cos^2 x\sin x}{3} + \frac{2}{3}I_1 = \frac{\cos^2 x\sin x}{3} + \frac{2\sin x}{3}$$

$$\therefore I_5 = \frac{\cos^4 x\sin x}{5} + \frac{4}{5}\left(\frac{\cos^2 x\sin x}{3} + \frac{2\sin x}{3}\right)$$

$$= \sin x\left(\frac{\cos^4 x}{5} + \frac{4\cos^2 x}{15} + \frac{8}{15}\right) + C$$

### 4.2 $I_n = \int_0^{\pi/2} \sin^n x\,dx$ (2018)

$$\boxed{I_n = \frac{n-1}{n}I_{n-2}, \quad I_0 = \frac{\pi}{2},\; I_1 = 1}$$

**Evaluate $\displaystyle\int_0^{\pi/2}\sin^8 x\,dx$:**

$$I_8 = \frac{7}{8}\cdot\frac{5}{6}\cdot\frac{3}{4}\cdot\frac{1}{2}\cdot I_0 = \frac{7\cdot5\cdot3\cdot1}{8\cdot6\cdot4\cdot2}\cdot\frac{\pi}{2} = \frac{105\pi}{768} = \frac{35\pi}{256}$$

### 4.3 $I_{m,n} = \int \sin^m x\cos^n x\,dx$ (2017)

**Reduction formula:**

$$I_{m,n} = \frac{\sin^{m+1}x\cos^{n-1}x}{m+n} + \frac{n-1}{m+n}I_{m,n-2}$$

Or equivalently:

$$I_{m,n} = -\frac{\sin^{m-1}x\cos^{n+1}x}{m+n} + \frac{m-1}{m+n}I_{m-2,n}$$

**Definite form** $\displaystyle\int_0^{\pi/2}\sin^m x\cos^n x\,dx = \frac{(m-1)!!(n-1)!!}{(m+n)!!}\cdot\begin{cases}\pi/2 & m,n \text{ both even}\\ 1 & \text{otherwise}\end{cases}$

**Exam Example (2017):** $\displaystyle\int_0^{\pi/2}\sin^4 x\cos^3 x\,dx$

$$= \frac{3!! \cdot 2!!}{7!!}\cdot 1 = \frac{(3\cdot1)\cdot(2)}{7\cdot5\cdot3\cdot1} = \frac{6}{105} = \frac{2}{35}$$

### 4.4 $I_n = \int \tan^n x\,dx$

$$I_n = \frac{\tan^{n-1}x}{n-1} - I_{n-2}$$

**Exam Example (2016):** $\displaystyle\int\tan^4 x\sec x\,dx$

Write $\tan^4 x = \tan^2 x(\sec^2 x - 1)$, expand, use $\displaystyle\int\sec^n x\,dx$ reduction.

---

## 5. Wallis's Formula

### 5.1 Statement

$$\int_0^{\pi/2} \sin^n x\,dx = \int_0^{\pi/2}\cos^n x\,dx = \begin{cases} \dfrac{(n-1)!!}{n!!}\cdot\dfrac{\pi}{2} & n \text{ even} \\[10pt] \dfrac{(n-1)!!}{n!!} & n \text{ odd} \end{cases}$$

where $n!! = n(n-2)(n-4)\cdots$ (double factorial).

### 5.2 Quick Table

| $n$ | $\int_0^{\pi/2}\sin^n x\,dx$ |
|-----|-------------------------------|
| 0 | $\pi/2$ |
| 1 | $1$ |
| 2 | $\pi/4$ |
| 3 | $2/3$ |
| 4 | $3\pi/16$ |
| 5 | $8/15$ |
| 6 | $5\pi/32$ |
| 7 | $16/35$ |
| 8 | $35\pi/256$ |
| 15 | $\dfrac{14!!}{15!!} = \dfrac{14\cdot12\cdot10\cdot8\cdot6\cdot4\cdot2}{15\cdot13\cdot11\cdot9\cdot7\cdot5\cdot3\cdot1}$ |

**Exam Example (2016):** $\displaystyle\int_0^{\pi/2}\sin^{15}x\,dx$

$$= \frac{14\cdot12\cdot10\cdot8\cdot6\cdot4\cdot2}{15\cdot13\cdot11\cdot9\cdot7\cdot5\cdot3} = \frac{645120}{2027025} = \frac{2048}{6435}$$

---

## 6. Gamma & Beta Functions

### 6.1 Gamma Function — Definition

$$\Gamma(n) = \int_0^{\infty} e^{-x} x^{n-1}\,dx, \quad n > 0$$

### 6.2 Key Properties

$$\Gamma(n+1) = n\,\Gamma(n) \quad \text{(recurrence)}$$

$$\Gamma(n+1) = n! \quad \text{for positive integers}$$

$$\Gamma(1) = 1, \qquad \Gamma\!\left(\frac{1}{2}\right) = \sqrt{\pi}$$

$$\Gamma(n)\,\Gamma(1-n) = \frac{\pi}{\sin(n\pi)} \quad \text{(reflection formula)}$$

### 6.3 Useful Substitutions into Gamma

$$\int_0^\infty e^{-ax^n} x^{m-1}\,dx = \frac{\Gamma(m/n)}{n\,a^{m/n}}$$

**Standard result (2019, 2017):**

$$\int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2}$$

**Proof:** Let $I = \displaystyle\int_0^\infty e^{-x^2}dx$. Then:

$$I^2 = \int_0^\infty\int_0^\infty e^{-(x^2+y^2)}dx\,dy$$

Convert to polar: $x = r\cos\theta$, $y = r\sin\theta$, $dA = r\,dr\,d\theta$:

$$I^2 = \int_0^{\pi/2}\int_0^\infty e^{-r^2}r\,dr\,d\theta = \frac{\pi}{2}\cdot\frac{1}{2} = \frac{\pi}{4}$$

$$\therefore\; I = \frac{\sqrt{\pi}}{2} \implies \int_0^\infty e^{-x^2}dx = \frac{\sqrt{\pi}}{2}$$

**Exam Example (2019):** Prove $\displaystyle\int_0^\infty e^{-x^2}dx = \dfrac{\sqrt{\pi}}{2}$.

**Exam Example (2018):** $\displaystyle\int_0^\infty e^{-2y}y^4\,dy = \dfrac{3\sqrt{2\pi}}{64}$

Let $t = 2y$: $\displaystyle\int_0^\infty e^{-t}\left(\frac{t}{2}\right)^4\frac{dt}{2} = \frac{1}{32}\Gamma(5) = \frac{4!}{32} = \frac{24}{32} = \frac{3}{4}$

Wait — re-checking: $\displaystyle\int_0^\infty e^{-2y}y^4\,dy$. Let $u = 2y$:
$= \dfrac{1}{2^5}\Gamma(5) = \dfrac{24}{32} = \dfrac{3}{4}$. (The $3\sqrt{2\pi}/64$ form uses a different exponent — verify exact problem statement.)

**Exam Example (2017):** $\displaystyle\int_0^\infty y^2 e^{-2y^2}dy = \dfrac{\sqrt{2\pi}}{16}$

Let $t = 2y^2$, $y = \sqrt{t/2}$, $dy = \frac{dt}{2\sqrt{2t}}$:

$$= \int_0^\infty \frac{t}{2}e^{-t}\frac{dt}{2\sqrt{2t}} = \frac{1}{4\sqrt{2}}\int_0^\infty t^{1/2}e^{-t}dt = \frac{\Gamma(3/2)}{4\sqrt{2}} = \frac{\sqrt{\pi}/2}{4\sqrt{2}} = \frac{\sqrt{\pi}}{8\sqrt{2}} = \frac{\sqrt{2\pi}}{16}$$

### 6.4 Beta Function

$$B(m,n) = \int_0^1 x^{m-1}(1-x)^{n-1}\,dx = \frac{\Gamma(m)\,\Gamma(n)}{\Gamma(m+n)}$$

**Equivalent forms:**

$$B(m,n) = 2\int_0^{\pi/2}\sin^{2m-1}\theta\cos^{2n-1}\theta\,d\theta$$

$$B(m,n) = \int_0^\infty \frac{t^{m-1}}{(1+t)^{m+n}}\,dt$$

---

## 7. Arc Length

### 7.1 Cartesian — $y = f(x)$

$$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$$

### 7.2 Parametric — $x = f(t)$, $y = g(t)$

$$L = \int_{t_1}^{t_2}\sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

**Exam Example (2016):** $x = \dfrac{1}{3}t^3$, $y = \dfrac{1}{2}t^2$, $0 \leq t \leq 1$

$$\dot{x} = t^2,\quad \dot{y} = t$$

$$L = \int_0^1\sqrt{t^4 + t^2}\,dt = \int_0^1 t\sqrt{t^2+1}\,dt = \left[\frac{(t^2+1)^{3/2}}{3}\right]_0^1 = \frac{2^{3/2}-1}{3} = \frac{2\sqrt{2}-1}{3}$$

### 7.3 Polar — $r = f(\theta)$

$$L = \int_{\alpha}^{\beta}\sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta$$

---

## 8. Area Under Curves

### 8.1 Between Curve and $x$-axis

$$A = \int_a^b |f(x)|\,dx$$

### 8.2 Between Two Curves

$$A = \int_a^b [f(x) - g(x)]\,dx \quad \text{where } f(x) \geq g(x)$$

**Exam Example (2016):** Area enclosed by $x^2 = y$ and $x = y - 2$

Intersection: $x^2 = x + 2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow x = -1, 2$

$$A = \int_{-1}^{2}[(x+2) - x^2]\,dx = \left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^{2} = \frac{9}{2}$$

### 8.3 Polar Area

$$A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta$$

**Cardioid** $r = a(1 + \cos\theta)$ — full area:

$$A = \frac{1}{2}\int_0^{2\pi}a^2(1+\cos\theta)^2\,d\theta = \frac{a^2}{2}\int_0^{2\pi}(1 + 2\cos\theta + \cos^2\theta)\,d\theta = \frac{3\pi a^2}{2}$$

**Exam Example (2018):** Area of $r = 1 + \cos\theta$

$A = \dfrac{3\pi}{2}$

### 8.4 Astroid Area (2019, 2018)

**Astroid:** $x^{2/3} + y^{2/3} = a^{2/3}$, parametrically $x = a\cos^3 t$, $y = a\sin^3 t$

$$A = 4\int_0^{\pi/2} y\,dx = 4\int_0^{\pi/2} a\sin^3 t \cdot 3a\cos^2 t\sin t\,dt = 12a^2\int_0^{\pi/2}\sin^4 t\cos^2 t\,dt$$

$$= 12a^2 \cdot \frac{3\cdot1\cdot1}{6\cdot4\cdot2}\cdot\frac{\pi}{2} = 12a^2\cdot\frac{3\pi}{96} = \frac{3\pi a^2}{8}$$

**Exam Example (2019):** Astroid $x^{2/3} + y^{2/3} = a^{2/3}$ has area $= \dfrac{3\pi a^2}{8}$.

---

## 9. Volume of Revolution

### 9.1 About the $x$-axis (Disk Method)

$$V = \pi\int_a^b [f(x)]^2\,dx$$

### 9.2 About the $y$-axis (Shell Method)

$$V = 2\pi\int_a^b x\,f(x)\,dx$$

### 9.3 About the $y$-axis (Disk, $x = g(y)$)

$$V = \pi\int_c^d [g(y)]^2\,dy$$

**Exam Example (2017):** Volume of solid from revolving $y = 2x^2$, $y = 0$, $x = 0$, $x = 5$ about $y$-axis:

Shell method:

$$V = 2\pi\int_0^5 x\cdot 2x^2\,dx = 4\pi\int_0^5 x^3\,dx = 4\pi\cdot\frac{625}{4} = 625\pi$$

### 9.4 Pappus' Theorem

Volume of solid of revolution $=$ (Area of region) $\times$ (distance traveled by centroid):

$$V = 2\pi\bar{y}\cdot A$$

---

## 10. Polar Curves — Area & Perimeter

### 10.1 Cardioid

**Equation:** $r = a(1 + \cos\theta)$ or $r = a(1 - \cos\theta)$ (or with $\sin$)

**Area:**
$$A = \frac{3\pi a^2}{2}$$

**Perimeter:**
$$L = \int_0^{2\pi}\sqrt{r^2+(r')^2}\,d\theta$$

For $r = a(1+\cos\theta)$: $r' = -a\sin\theta$

$$r^2 + (r')^2 = a^2(1+\cos\theta)^2 + a^2\sin^2\theta = a^2(2 + 2\cos\theta) = 4a^2\cos^2(\theta/2)$$

$$L = \int_0^{2\pi} 2a\left|\cos\tfrac{\theta}{2}\right|d\theta = 4a\int_0^\pi\cos\tfrac{\theta}{2}\,d\theta = 4a\left[2\sin\tfrac{\theta}{2}\right]_0^\pi = 8a$$

**Exam Example (2019):** Perimeter of $r = 4(1+\cos\theta)$: $L = 8 \times 4 = 32$.

### 10.2 Astroid Perimeter (2018)

**Astroid:** $x^{2/3} + y^{2/3} = a^{2/3}$, parametrically $x = a\cos^3 t$, $y = a\sin^3 t$

$$\frac{dx}{dt} = -3a\cos^2 t\sin t, \quad \frac{dy}{dt} = 3a\sin^2 t\cos t$$

$$\sqrt{\dot{x}^2+\dot{y}^2} = 3a|\sin t\cos t|$$

$$L = 4\int_0^{\pi/2}3a\sin t\cos t\,dt = 12a\cdot\frac{1}{2} = 6a$$

**Exam Example (2018):** Perimeter of astroid $x^{2/3} + y^{2/3} = a^{2/3}$ is $6a$.

### 10.3 Summary of Polar/Curve Results

| Curve | Area | Perimeter |
|-------|------|-----------|
| Cardioid $r = a(1\pm\cos\theta)$ | $\dfrac{3\pi a^2}{2}$ | $8a$ |
| Cardioid $r = a(1\pm\sin\theta)$ | $\dfrac{3\pi a^2}{2}$ | $8a$ |
| Circle $r = a$ | $\pi a^2$ | $2\pi a$ |
| Astroid $x^{2/3}+y^{2/3}=a^{2/3}$ | $\dfrac{3\pi a^2}{8}$ | $6a$ |
| Hypocycloid (same as astroid) | $\dfrac{3\pi a^2}{8}$ | $6a$ |

---

## Quick Reference — Exam Pattern Summary

| Topic | Years | Key Formula / Result |
|-------|-------|----------------------|
| $\int e^{-x^2}dx$ proof | 2019, 2017 | Polar double integral → $\sqrt{\pi}/2$ |
| Gamma function integrals | 2019, 2018, 2017 | $\Gamma(n)=\int_0^\infty e^{-x}x^{n-1}dx$ |
| $\int_0^{\pi/2}\ln\sin x\,dx$ | 2017 | $-\tfrac{\pi}{2}\ln 2$ |
| Reduction: $\cos^n x$ | 2019 | $I_n = \frac{\cos^{n-1}x\sin x}{n}+\frac{n-1}{n}I_{n-2}$ |
| Reduction: $\sin^n x$ (definite) | 2018 | Wallis formula |
| Reduction: $\sin^m\cos^n$ | 2017 | Double factorial formula |
| Wallis $\sin^{15}$ | 2016 | $\frac{14!!}{15!!}$ |
| King property of definite integral | 2019, 2016 | $\int_0^a f = \int_0^a f(a-x)$ |
| Cardioid perimeter | 2019 | $8a$ |
| Astroid area | 2019, 2018 | $\frac{3\pi a^2}{8}$ |
| Astroid perimeter | 2018 | $6a$ |
| Volume of revolution | 2017 | Disk/shell method |
| Arc length parametric | 2016 | $\int\sqrt{\dot x^2+\dot y^2}\,dt$ |
| Partial fractions | 2016 | Decompose, then integrate |
| Weierstrass sub | 2017 | $t=\tan(x/2)$ |
| Odd/even symmetry | 2016 | $\int_{-a}^a f_{\rm odd}=0$ |

---

*Made for BUTex x86 study group — MS 101 / AS 101*
