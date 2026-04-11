# Chapter 5: Integration Techniques

> **Covered in:** Part A, Q3 of every exam  
> **Topics:** Substitution, by-parts, partial fractions, Gamma function, reduction formulas, Wallis's formula

---

## 📖 Theory

### 5.1 Standard Integration Formulas

| Integral | Result |
|----------|--------|
| $\int x^n\,dx$ | $\dfrac{x^{n+1}}{n+1}+C$ |
| $\int e^x\,dx$ | $e^x+C$ |
| $\int \frac{1}{x}\,dx$ | $\ln\|x\|+C$ |
| $\int \sin x\,dx$ | $-\cos x+C$ |
| $\int \cos x\,dx$ | $\sin x+C$ |
| $\int \sec^2x\,dx$ | $\tan x+C$ |
| $\int \frac{dx}{\sqrt{1-x^2}}$ | $\sin^{-1}x+C$ |
| $\int \frac{dx}{1+x^2}$ | $\tan^{-1}x+C$ |
| $\int \frac{dx}{\sqrt{x^2\pm a^2}}$ | $\ln\!\left\|x+\sqrt{x^2\pm a^2}\right\|+C$ |

---

### 5.2 Gamma Function

$$\Gamma(n) = \int_0^\infty x^{n-1}e^{-x}\,dx, \quad n > 0$$

**Key properties:**
$$\Gamma(n+1) = n\,\Gamma(n), \quad \Gamma(n+1) = n!\text{ (for integer }n\geq0)$$
$$\Gamma\!\left(\tfrac{1}{2}\right) = \sqrt{\pi}, \quad \Gamma(1) = 1, \quad \Gamma(2) = 1$$

**Useful forms:**
$$\int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2}, \qquad \int_0^\infty x^n e^{-ax^m}\,dx = \frac{\Gamma\!\left(\frac{n+1}{m}\right)}{m\,a^{(n+1)/m}}$$

---

### 5.3 Reduction Formulas

**For $I_n = \int \sin^n x\,dx$:**
$$I_n = -\frac{\sin^{n-1}x\cos x}{n} + \frac{n-1}{n}I_{n-2}$$

**For $I_n = \int \cos^n x\,dx$:**
$$I_n = \frac{\cos^{n-1}x\sin x}{n} + \frac{n-1}{n}I_{n-2}$$

**For definite integrals (Wallis's formula):**
$$\int_0^{\pi/2}\sin^n x\,dx = \int_0^{\pi/2}\cos^n x\,dx = \begin{cases}\dfrac{(n-1)!!}{n!!}\cdot\dfrac{\pi}{2} & n \text{ even} \\[6pt] \dfrac{(n-1)!!}{n!!} & n \text{ odd}\end{cases}$$

where $n!! = n\cdot(n-2)\cdot(n-4)\cdots$

---

## 📝 Past Exam Questions & Solutions

---

### ✏️ 2019 — Q3(a)

Evaluate $\displaystyle\int\frac{dx}{x\sqrt{x^2+2x-1}}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Complete the square: $x^2+2x-1 = (x+1)^2-2$

Let $u = \dfrac{1}{x}$, so $x = 1/u$, $dx = -du/u^2$.

$$\int\frac{-du/u^2}{(1/u)\sqrt{1/u^2+2/u-1}} = \int\frac{-du/u^2}{(1/u)\cdot(1/u)\sqrt{1+2u-u^2}}= -\int\frac{du}{\sqrt{1+2u-u^2}}$$

$1+2u-u^2 = 2-(u-1)^2$

$$= -\int\frac{du}{\sqrt{2-(u-1)^2}} = -\sin^{-1}\!\left(\frac{u-1}{\sqrt{2}}\right)+C$$

Back-substitute $u=1/x$:

$$= -\sin^{-1}\!\left(\frac{1/x-1}{\sqrt{2}}\right)+C = -\sin^{-1}\!\left(\frac{1-x}{\sqrt{2}\,x}\right)+C$$

</details>

---

### ✏️ 2019 — Q3(b)

Prove that $\displaystyle\int_0^\infty e^{-x^2}\,dx = \dfrac{\sqrt{\pi}}{2}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Let $I = \displaystyle\int_0^\infty e^{-x^2}\,dx$. Then:

$$I^2 = \left(\int_0^\infty e^{-x^2}\,dx\right)\left(\int_0^\infty e^{-y^2}\,dy\right) = \int_0^\infty\int_0^\infty e^{-(x^2+y^2)}\,dx\,dy$$

Convert to polar coordinates: $x = r\cos\theta$, $y = r\sin\theta$, $dx\,dy = r\,dr\,d\theta$

For the first quadrant: $r\in[0,\infty)$, $\theta\in[0,\pi/2]$:

$$I^2 = \int_0^{\pi/2}\int_0^\infty e^{-r^2}\cdot r\,dr\,d\theta$$

$$= \frac{\pi}{2}\int_0^\infty re^{-r^2}\,dr = \frac{\pi}{2}\left[-\frac{e^{-r^2}}{2}\right]_0^\infty = \frac{\pi}{2}\cdot\frac{1}{2} = \frac{\pi}{4}$$

Therefore $I = \dfrac{\sqrt{\pi}}{2}$. $\qquad\blacksquare$

</details>

---

### ✏️ 2019 — Q3(c)

Derive a reduction formula for $I_n = \displaystyle\int\cos^n x\,dx\;(n\geq 2)$. Hence evaluate $\displaystyle\int\cos^5 x\,dx$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Derivation:**

$$I_n = \int\cos^{n-1}x\cdot\cos x\,dx$$

Integrate by parts: $u = \cos^{n-1}x$, $dv = \cos x\,dx$

$du = -(n-1)\cos^{n-2}x\sin x\,dx$, $v = \sin x$

$$I_n = \cos^{n-1}x\sin x + (n-1)\int\cos^{n-2}x\sin^2 x\,dx$$

$$= \cos^{n-1}x\sin x + (n-1)\int\cos^{n-2}x(1-\cos^2 x)\,dx$$

$$= \cos^{n-1}x\sin x + (n-1)I_{n-2} - (n-1)I_n$$

$$nI_n = \cos^{n-1}x\sin x + (n-1)I_{n-2}$$

$$\boxed{I_n = \frac{\cos^{n-1}x\sin x}{n} + \frac{n-1}{n}I_{n-2}}$$

**Evaluate $\int\cos^5 x\,dx$:**

$$I_5 = \frac{\cos^4x\sin x}{5} + \frac{4}{5}I_3$$

$$I_3 = \frac{\cos^2x\sin x}{3} + \frac{2}{3}I_1 = \frac{\cos^2x\sin x}{3}+\frac{2}{3}\sin x$$

$$I_5 = \frac{\cos^4x\sin x}{5} + \frac{4}{5}\left(\frac{\cos^2x\sin x}{3}+\frac{2\sin x}{3}\right)$$

$$= \frac{\cos^4x\sin x}{5} + \frac{4\cos^2x\sin x}{15} + \frac{8\sin x}{15}$$

$$= \sin x\left(\frac{\cos^4x}{5}+\frac{4\cos^2x}{15}+\frac{8}{15}\right) + C$$

</details>

---

### ✏️ 2018 — Q3(a)

Show that $\displaystyle\int_0^\infty e^{-2y}y^4\,dy = \dfrac{3\sqrt{2\pi}}{64}$ using Gamma function. **[4 marks]**

<details>
<summary>✅ Solution</summary>

Let $t = 2y$, so $y = t/2$, $dy = dt/2$:

$$\int_0^\infty e^{-2y}y^4\,dy = \int_0^\infty e^{-t}\left(\frac{t}{2}\right)^4\frac{dt}{2} = \frac{1}{32}\int_0^\infty t^4e^{-t}\,dt = \frac{1}{32}\Gamma(5) = \frac{4!}{32} = \frac{24}{32} = \frac{3}{4}$$

But the problem says $\dfrac{3\sqrt{2\pi}}{64}$. Let me re-read: "$\int_0^\infty e^{-2y}y^4\,dy$".

Hmm: $\dfrac{1}{32}\Gamma(5)=\dfrac{24}{32}=\dfrac{3}{4}$.

But $\dfrac{3\sqrt{2\pi}}{64}\neq\dfrac{3}{4}$. Perhaps the integral is $\int_0^\infty e^{-2y^2}y^4\,dy$?

Let $t = 2y^2$, $y=(t/2)^{1/2}$, $dy = \frac{1}{2}(2)^{-1/2}t^{-1/2}dt/\sqrt{2}$... let me use the formula:

$$\int_0^\infty y^{2n}e^{-ay^2}\,dy = \frac{(2n-1)!!}{2^{n+1}a^n}\sqrt{\frac{\pi}{a}}$$

With $n=2$, $a=2$:
$$\int_0^\infty y^4e^{-2y^2}\,dy = \frac{3!!}{2^3\cdot 2^2}\sqrt{\frac{\pi}{2}} = \frac{3}{32}\cdot\frac{\sqrt{\pi}}{\sqrt{2}} = \frac{3}{32}\sqrt{\frac{\pi}{2}} = \frac{3}{32}\cdot\frac{\sqrt{2\pi}}{2} = \frac{3\sqrt{2\pi}}{64}$$

So the integral is $\displaystyle\int_0^\infty e^{-2y^2}y^4\,dy = \dfrac{3\sqrt{2\pi}}{64}$. ✓

**Using Gamma function directly:**

Let $u = 2y^2$, $y=\sqrt{u/2}$, $dy=\frac{1}{2\sqrt{2}}\cdot u^{-1/2}\,du$:

$$= \int_0^\infty e^{-u}\left(\frac{u}{2}\right)^2\frac{du}{2\sqrt{2u}} = \frac{1}{8\cdot\sqrt{2}}\int_0^\infty u^{3/2}e^{-u}\,du\cdot\frac{1}{\sqrt{u}}$$

Hmm let me redo: $y^4 = (u/2)^2 = u^2/4$:

$$\int_0^\infty e^{-u}\cdot\frac{u^2}{4}\cdot\frac{du}{2\sqrt{2}}\cdot\frac{1}{\sqrt{u}} = \frac{1}{8\sqrt{2}}\int_0^\infty u^{3/2}e^{-u}du = \frac{1}{8\sqrt{2}}\Gamma\!\left(\tfrac{5}{2}\right)$$

$\Gamma(5/2) = \frac{3}{2}\cdot\frac{1}{2}\cdot\Gamma(1/2) = \frac{3\sqrt{\pi}}{4}$

$$= \frac{1}{8\sqrt{2}}\cdot\frac{3\sqrt{\pi}}{4} = \frac{3\sqrt{\pi}}{32\sqrt{2}} = \frac{3\sqrt{2\pi}}{64} \qquad\blacksquare$$

</details>

---

### ✏️ 2018 — Q3(b)

Evaluate $\displaystyle\int_0^{\pi/2}\frac{\sin^2x}{\sin x+\cos x}\,dx$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Let $I = \displaystyle\int_0^{\pi/2}\frac{\sin^2x}{\sin x+\cos x}\,dx$.

Use the property $\int_0^{\pi/2}f(x)\,dx = \int_0^{\pi/2}f(\pi/2-x)\,dx$:

$$I = \int_0^{\pi/2}\frac{\cos^2x}{\cos x+\sin x}\,dx$$

Adding:
$$2I = \int_0^{\pi/2}\frac{\sin^2x+\cos^2x}{\sin x+\cos x}\,dx = \int_0^{\pi/2}\frac{1}{\sin x+\cos x}\,dx$$

$$= \int_0^{\pi/2}\frac{dx}{\sqrt{2}\sin(x+\pi/4)} = \frac{1}{\sqrt{2}}\int_0^{\pi/2}\csc\!\left(x+\frac{\pi}{4}\right)dx$$

$$= \frac{1}{\sqrt{2}}\left[-\ln\!\left|\csc\!\left(x+\tfrac{\pi}{4}\right)+\cot\!\left(x+\tfrac{\pi}{4}\right)\right|\right]_0^{\pi/2}$$

At $x=\pi/2$: $\csc(3\pi/4)+\cot(3\pi/4) = \sqrt{2}+(-1) = \sqrt{2}-1$

At $x=0$: $\csc(\pi/4)+\cot(\pi/4) = \sqrt{2}+1$

$$2I = \frac{1}{\sqrt{2}}\left(-\ln(\sqrt{2}-1)+\ln(\sqrt{2}+1)\right) = \frac{1}{\sqrt{2}}\ln\frac{\sqrt{2}+1}{\sqrt{2}-1} = \frac{1}{\sqrt{2}}\ln(\sqrt{2}+1)^2 = \frac{2}{\sqrt{2}}\ln(\sqrt{2}+1)$$

$$I = \frac{1}{\sqrt{2}}\ln(\sqrt{2}+1) = \frac{\ln(\sqrt{2}+1)}{\sqrt{2}}$$

</details>

---

### ✏️ 2018 — Q3(c)

Determine $\displaystyle\int\frac{(x+1)\,dx}{4+8x-5x^2}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Complete the square:** $4+8x-5x^2 = -5(x^2-\frac{8}{5}x-\frac{4}{5}) = -5\!\left[(x-\frac{4}{5})^2-\frac{16}{25}-\frac{4}{5}\right] = -5\!\left[(x-\frac{4}{5})^2-\frac{36}{25}\right]$

$= 5\!\left[\frac{36}{25}-(x-\frac{4}{5})^2\right] = 5\!\left[\left(\frac{6}{5}\right)^2-\left(x-\frac{4}{5}\right)^2\right]$

Write $x+1 = A\cdot\frac{d}{dx}(4+8x-5x^2)+B = A(8-10x)+B$:

$A(-10) = -1 \Rightarrow A = 1/10$ (coefficient of $x$ term: $-1 = -10A$)
$8A + B = 1 \Rightarrow B = 1-4/5 = 1/5$... let me redo.

$(x+1) = A(8-10x)+B$: coefficients of $x$: $1=-10A\Rightarrow A=-1/10$; constant: $1=8A+B=8(-1/10)+B\Rightarrow B=1+4/5=9/5$.

$$\int\frac{x+1}{4+8x-5x^2}dx = -\frac{1}{10}\int\frac{8-10x}{4+8x-5x^2}dx + \frac{9}{5}\int\frac{dx}{4+8x-5x^2}$$

**First part:** $-\dfrac{1}{10}\ln|4+8x-5x^2|+C_1$

**Second part:** $\dfrac{9}{5}\cdot\dfrac{1}{5}\int\dfrac{dx}{(6/5)^2-(x-4/5)^2}$

Use $\displaystyle\int\frac{dx}{a^2-u^2}=\frac{1}{2a}\ln\left|\frac{a+u}{a-u}\right|$, with $a=6/5$, $u=x-4/5$:

$$= \frac{9}{25}\cdot\frac{1}{2(6/5)}\ln\left|\frac{6/5+(x-4/5)}{6/5-(x-4/5)}\right| = \frac{9}{25}\cdot\frac{5}{12}\ln\left|\frac{x+2/5}{2-x}\right| = \frac{3}{20}\ln\left|\frac{5x+2}{10-5x}\right|+C_2$$

**Final answer:**
$$\int\frac{(x+1)dx}{4+8x-5x^2} = -\frac{1}{10}\ln|4+8x-5x^2|+\frac{3}{20}\ln\left|\frac{5x+2}{10-5x}\right|+C$$

</details>

---

### ✏️ 2018 — Q4(a)

Derive reduction formula for $I_n = \displaystyle\int_0^{\pi/2}\sin^n x\,dx$. Evaluate $\displaystyle\int_0^{\pi/2}\sin^8 x\,dx$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Derivation:**

$$I_n = \int_0^{\pi/2}\sin^{n-1}x\cdot\sin x\,dx$$

By parts: $u=\sin^{n-1}x$, $dv=\sin x\,dx$, $v=-\cos x$, $du=(n-1)\sin^{n-2}x\cos x\,dx$:

$$I_n = \Big[-\sin^{n-1}x\cos x\Big]_0^{\pi/2}+(n-1)\int_0^{\pi/2}\sin^{n-2}x\cos^2x\,dx$$

The boundary term vanishes. Using $\cos^2x=1-\sin^2x$:

$$I_n = (n-1)(I_{n-2}-I_n)$$

$$I_n\cdot n = (n-1)I_{n-2}$$

$$\boxed{I_n = \frac{n-1}{n}I_{n-2}}$$

**Evaluate $I_8$ (Wallis's formula):**

$$I_8 = \frac{7}{8}\cdot I_6 = \frac{7}{8}\cdot\frac{5}{6}\cdot I_4 = \frac{7}{8}\cdot\frac{5}{6}\cdot\frac{3}{4}\cdot I_2 = \frac{7}{8}\cdot\frac{5}{6}\cdot\frac{3}{4}\cdot\frac{1}{2}\cdot I_0$$

$I_0 = \displaystyle\int_0^{\pi/2}dx = \dfrac{\pi}{2}$

$$I_8 = \frac{7\cdot5\cdot3\cdot1}{8\cdot6\cdot4\cdot2}\cdot\frac{\pi}{2} = \frac{105}{384}\cdot\frac{\pi}{2} = \boxed{\frac{35\pi}{256}}$$

</details>

---

### ✏️ 2017 — Q3(a)

Determine $\displaystyle\int\frac{dx}{5+4\sin 2x}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Use $t = \tan x$, so $\sin 2x = \dfrac{2t}{1+t^2}$, $dx = \dfrac{dt}{1+t^2}$:

$$\int\frac{1}{5+\frac{8t}{1+t^2}}\cdot\frac{dt}{1+t^2} = \int\frac{dt}{5(1+t^2)+8t} = \int\frac{dt}{5t^2+8t+5}$$

Complete the square: $5t^2+8t+5 = 5\!\left(t+\frac{4}{5}\right)^2+5-\frac{16}{5} = 5\!\left(t+\frac{4}{5}\right)^2+\frac{9}{5}$

$$= \frac{1}{5}\int\frac{dt}{\left(t+\frac{4}{5}\right)^2+\frac{9}{25}} = \frac{1}{5}\cdot\frac{5}{9}\cdot\frac{5}{3}\tan^{-1}\!\left(\frac{5(t+4/5)}{3}\right)+C$$

$$= \frac{1}{3}\tan^{-1}\!\left(\frac{5\tan x+4}{3}\right)+C$$

</details>

---

### ✏️ 2017 — Q3(b)

Evaluate $\displaystyle\int_0^{\pi/2}\ln(\sin x)\,dx$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Let $I = \displaystyle\int_0^{\pi/2}\ln(\sin x)\,dx$.

Using $x\to\pi/2-x$: $I = \displaystyle\int_0^{\pi/2}\ln(\cos x)\,dx$

$2I = \displaystyle\int_0^{\pi/2}\ln(\sin x\cos x)\,dx = \int_0^{\pi/2}\ln\!\left(\frac{\sin 2x}{2}\right)dx$

$= \displaystyle\int_0^{\pi/2}\ln(\sin 2x)\,dx - \int_0^{\pi/2}\ln 2\,dx$

Let $u=2x$ in first integral: $\displaystyle\int_0^\pi\ln(\sin u)\,\frac{du}{2} = \int_0^{\pi/2}\ln(\sin u)\,du = I$

(using symmetry of $\sin$ about $\pi/2$ on $[0,\pi]$)

So $2I = I - \dfrac{\pi}{2}\ln 2$, hence:

$$I = -\frac{\pi}{2}\ln 2 \approx -1.089$$

$$\boxed{\int_0^{\pi/2}\ln(\sin x)\,dx = -\frac{\pi}{2}\ln 2}$$

</details>

---

### ✏️ 2017 — Q3(c)

Prove $\displaystyle\int_0^\infty y^2e^{-2y^2}\,dy = \dfrac{\sqrt{2\pi}}{16}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

$$\int_0^\infty y^2e^{-2y^2}\,dy$$

Let $u=2y^2$, $y=\sqrt{u/2}$, $dy=\frac{1}{2\sqrt{2}}\cdot u^{-1/2}du$:

$$= \int_0^\infty \frac{u}{2}\cdot e^{-u}\cdot\frac{du}{2\sqrt{2u}} = \frac{1}{4\sqrt{2}}\int_0^\infty u^{1/2}e^{-u}\,du = \frac{1}{4\sqrt{2}}\Gamma\!\left(\frac{3}{2}\right)$$

$\Gamma(3/2) = \frac{1}{2}\Gamma(1/2) = \dfrac{\sqrt{\pi}}{2}$

$$= \frac{1}{4\sqrt{2}}\cdot\frac{\sqrt{\pi}}{2} = \frac{\sqrt{\pi}}{8\sqrt{2}} = \frac{\sqrt{\pi}}{8\sqrt{2}}\cdot\frac{\sqrt{2}}{\sqrt{2}} = \frac{\sqrt{2\pi}}{16} \qquad\blacksquare$$

</details>

---

### ✏️ 2019 — Q4(a)

Evaluate $\displaystyle\int_0^\pi\frac{x\,dx}{1+\cos^2x}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Let $I = \displaystyle\int_0^\pi\frac{x}{1+\cos^2x}\,dx$.

Using the property $\int_0^\pi xf(\sin x)\,dx = \frac{\pi}{2}\int_0^\pi f(\sin x)\,dx$ (or equivalently $\int_0^\pi x f(\cos x)\,dx$):

Using $x\to\pi-x$: $I = \int_0^\pi\dfrac{(\pi-x)}{1+\cos^2(\pi-x)}dx = \int_0^\pi\dfrac{\pi-x}{1+\cos^2x}dx$

$$2I = \pi\int_0^\pi\frac{dx}{1+\cos^2x}$$

Now $\cos^2x = \dfrac{1+\cos 2x}{2}$... but simpler: use $t=\tan x$:

$$\int_0^\pi\frac{dx}{1+\cos^2x}$$

Split into $[0,\pi/2]$ and $[\pi/2,\pi]$, both give the same value by symmetry:

$$= 2\int_0^{\pi/2}\frac{dx}{1+\cos^2x}$$

Use $t=\tan x$, $dx=\frac{dt}{1+t^2}$, $\cos^2x=\frac{1}{1+t^2}$:

$$= 2\int_0^\infty\frac{1}{1+\frac{1}{1+t^2}}\cdot\frac{dt}{1+t^2} = 2\int_0^\infty\frac{dt}{2+t^2} = 2\cdot\frac{1}{\sqrt{2}}\tan^{-1}\!\frac{t}{\sqrt{2}}\Big|_0^\infty = 2\cdot\frac{1}{\sqrt{2}}\cdot\frac{\pi}{2} = \frac{\pi}{\sqrt{2}}$$

Therefore: $2I = \pi\cdot\dfrac{\pi}{\sqrt{2}} = \dfrac{\pi^2}{\sqrt{2}}$

$$I = \frac{\pi^2}{2\sqrt{2}} = \frac{\pi^2\sqrt{2}}{4}$$

</details>

---

### ✏️ 2016 — Q4(b)

Use Wallis's formula to find $\displaystyle\int_0^{\pi/2}\sin^{15}x\,dx$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

For odd $n=15$:
$$I_{15} = \frac{14!!}{15!!} = \frac{14\cdot12\cdot10\cdot8\cdot6\cdot4\cdot2}{15\cdot13\cdot11\cdot9\cdot7\cdot5\cdot3\cdot1}$$

$$= \frac{14\cdot12\cdot10\cdot8\cdot6\cdot4\cdot2}{2027025} = \frac{645120}{2027025} = \frac{2048}{6435}$$

Let me compute step by step:

$$I_{15}=\frac{14}{15}\cdot\frac{12}{13}\cdot\frac{10}{11}\cdot\frac{8}{9}\cdot\frac{6}{7}\cdot\frac{4}{5}\cdot\frac{2}{3}\cdot 1$$

Numerator: $14\cdot12\cdot10\cdot8\cdot6\cdot4\cdot2 = 2^7\cdot7\cdot6\cdot5\cdot4\cdot3\cdot2\cdot1 = 128\cdot 5040 = 645120$

Denominator: $15!! = 15\cdot13\cdot11\cdot9\cdot7\cdot5\cdot3\cdot1 = 2027025$

$$\boxed{I_{15} = \frac{645120}{2027025} = \frac{2048}{6435}}$$

</details>

---

## 🧪 Practice Problems

---

**P1.** Evaluate $\displaystyle\int\frac{dx}{x^2\sqrt{x^2-4}}$.

<details><summary>Solution</summary>

Let $x=2\sec\theta$: $\sqrt{x^2-4}=2\tan\theta$, $dx=2\sec\theta\tan\theta\,d\theta$.  
$\int\dfrac{2\sec\theta\tan\theta\,d\theta}{4\sec^2\theta\cdot2\tan\theta} = \dfrac{1}{4}\int\cos\theta\,d\theta = \dfrac{\sin\theta}{4}+C = \dfrac{\sqrt{x^2-4}}{4x}+C$.

</details>

---

**P2.** Prove $\Gamma(1/2)=\sqrt{\pi}$.

<details><summary>Solution</summary>

$\Gamma(1/2)=\int_0^\infty x^{-1/2}e^{-x}dx$. Let $x=t^2$: $=2\int_0^\infty e^{-t^2}dt=2\cdot\frac{\sqrt{\pi}}{2}=\sqrt{\pi}$. ✓

</details>

---

**P3.** Evaluate $\displaystyle\int_0^\infty x^3e^{-x^2}dx$.

<details><summary>Solution</summary>

$\int_0^\infty x^3e^{-x^2}dx$. Let $u=x^2$: $=\frac{1}{2}\int_0^\infty ue^{-u}du=\frac{1}{2}\Gamma(2)=\frac{1}{2}$.

</details>

---

**P4.** Evaluate $\displaystyle\int_0^{\pi/2}\sin^6x\cos^4x\,dx$ using reduction/Wallis.

<details><summary>Solution</summary>

$\int_0^{\pi/2}\sin^m x\cos^n x\,dx = \dfrac{(m-1)!!(n-1)!!}{(m+n)!!}\cdot K$ where $K=\pi/2$ if both even, $K=1$ otherwise.  
$m=6,n=4$ both even: $=\dfrac{5!!3!!}{10!!}\cdot\dfrac{\pi}{2}=\dfrac{5\cdot3\cdot1\cdot3\cdot1}{10\cdot8\cdot6\cdot4\cdot2}\cdot\dfrac{\pi}{2}=\dfrac{15}{3840}\cdot\dfrac{\pi}{2}=\dfrac{3\pi}{512}$.

</details>

---

**P5.** Evaluate $\displaystyle\int\frac{2x^2+x+7}{(x-1)(x^2+4)}dx$.

<details><summary>Solution</summary>

Partial fractions: $\dfrac{A}{x-1}+\dfrac{Bx+C}{x^2+4}$. Multiply: $2x^2+x+7=A(x^2+4)+(Bx+C)(x-1)$.  
$x=1$: $10=5A$, $A=2$. Coeff $x^2$: $2=A+B$, $B=0$. Coeff $x^0$: $7=4A-C$, $C=1$.  
$\int=2\ln|x-1|+\frac{1}{2}\tan^{-1}(x/2)+C$.

</details>

---

**P6.** Find $\displaystyle\int\tan^4x\sec x\,dx$.

<details><summary>Solution</summary>

$\int\tan^4x\sec x\,dx = \int(\sec^2x-1)^2\sec x\,dx = \int(\sec^5x-2\sec^3x+\sec x)dx$.  
Use reduction: $\int\sec^5x\,dx = \frac{\sec^3x\tan x}{4}+\frac{3}{4}\int\sec^3x\,dx$; $\int\sec^3x\,dx=\frac{\sec x\tan x}{2}+\frac{1}{2}\ln|\sec x+\tan x|$.

</details>

---

**P7.** Evaluate $\displaystyle\int_0^1 x^2(1-x)^3dx$ using Beta function.

<details><summary>Solution</summary>

$B(m,n)=\int_0^1 x^{m-1}(1-x)^{n-1}dx=\dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$.  
$\int_0^1 x^2(1-x)^3dx=B(3,4)=\dfrac{2!\cdot3!}{6!}=\dfrac{2\cdot6}{720}=\dfrac{1}{60}$.

</details>

---

**P8.** Evaluate $\displaystyle\int_0^\infty e^{-x^3}dx$.

<details><summary>Solution</summary>

Let $u=x^3$, $x=u^{1/3}$, $dx=\frac{1}{3}u^{-2/3}du$:  
$\frac{1}{3}\int_0^\infty e^{-u}u^{-2/3}du=\frac{1}{3}\Gamma(1/3)$.

</details>

---

**P9.** Evaluate $\displaystyle\int_0^{\pi}\sin^5x\,dx$.

<details><summary>Solution</summary>

$\int_0^\pi\sin^5x\,dx=2\int_0^{\pi/2}\sin^5x\,dx=2\cdot\dfrac{4\cdot2}{5\cdot3\cdot1}=2\cdot\dfrac{8}{15}=\dfrac{16}{15}$.

</details>

---

**P10.** Evaluate $\displaystyle\int\frac{x+1}{x^2(x-1)}dx$.

<details><summary>Solution</summary>

$\dfrac{x+1}{x^2(x-1)}=\dfrac{A}{x}+\dfrac{B}{x^2}+\dfrac{C}{x-1}$.  
$x=1$: $2=C$; $x=0$: $-1=B\cdot(-1)$... $-1/1\cdot(-1)=B$: multiply out: $x+1=Ax(x-1)+B(x-1)+Cx^2$.  
$x=0$: $1=-B\Rightarrow B=-1$; $x=1$: $2=C$; coeff $x^2$: $0=A+C\Rightarrow A=-2$.  
$\int=-2\ln|x|-(-1)/x+2\ln|x-1|+C$.

</details>

---

## 📖 References

1. **Thomas' Calculus** — Ch. 5–8: Integration, Techniques of Integration
2. **Stewart's Calculus** — Ch. 7: Techniques of Integration
3. **Abramowitz & Stegun** — Gamma Function (Table 6)
4. **Paul's Online Notes** — [Integration Techniques](https://tutorial.math.lamar.edu/Classes/CalcII/IntegrationByParts.aspx)
5. **MIT OCW 18.01** — [Integration](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-3-the-definite-integral-and-its-applications/)
6. **Wolfram MathWorld** — [Gamma Function](https://mathworld.wolfram.com/GammaFunction.html) | [Wallis Formula](https://mathworld.wolfram.com/WallisFormula.html)
