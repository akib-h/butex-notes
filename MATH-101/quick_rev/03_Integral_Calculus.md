# ∫ Chapter 3: Integral Calculus

> **Course:** Mathematics — L1T1  
> **Topics:** Indefinite Integrals · Reduction Formulae · Definite Integrals · Walli's Formula · Integration by Parts & Partial Fractions

---

## 📚 Table of Contents

1. [Key Formulae](#-key-formulae)
2. [Questions & Solutions](#-questions--solutions)
   - [Indefinite Integrals](#1-indefinite-integrals)
   - [Reduction Formulae](#2-reduction-formulae)
   - [Integration by Parts](#3-integration-by-parts)
   - [Integration by Partial Fractions](#4-integration-by-partial-fractions)
   - [Definite Integrals](#5-definite-integrals)
   - [Walli's Formula](#6-wallis-formula)
3. [Practice Questions](#-practice-questions)
4. [References](#-references)

---

## 📖 Key Formulae

### Standard Integrals

| Integral | Result |
|----------|--------|
| $\int x^n\,dx$ | $\dfrac{x^{n+1}}{n+1} + C$ |
| $\int e^x\,dx$ | $e^x + C$ |
| $\int \sin x\,dx$ | $-\cos x + C$ |
| $\int \cos x\,dx$ | $\sin x + C$ |
| $\int \tan x\,dx$ | $\ln|\sec x| + C$ |
| $\int \sec^2 x\,dx$ | $\tan x + C$ |
| $\int \dfrac{dx}{a^2+x^2}$ | $\dfrac{1}{a}\tan^{-1}\dfrac{x}{a}+C$ |
| $\int \dfrac{dx}{\sqrt{a^2-x^2}}$ | $\sin^{-1}\dfrac{x}{a}+C$ |
| $\int \dfrac{dx}{\sqrt{x^2-a^2}}$ | $\ln\left|x+\sqrt{x^2-a^2}\right|+C$ |
| $\int \dfrac{dx}{\sqrt{x^2+a^2}}$ | $\ln\left|x+\sqrt{x^2+a^2}\right|+C$ |

### Useful Trigonometric Identities

$$\sin^2 x = \frac{1-\cos 2x}{2}, \quad \cos^2 x = \frac{1+\cos 2x}{2}$$
$$\sin^3 x = \frac{3\sin x - \sin 3x}{4}, \quad \cos^3 x = \frac{3\cos x + \cos 3x}{4}$$

### Key Properties of Definite Integrals

$$\int_a^b f(x)\,dx = \int_a^b f(a+b-x)\,dx$$
$$\int_0^a f(x)\,dx = \int_0^a f(a-x)\,dx$$
$$\int_0^{2a} f(x)\,dx = 2\int_0^a f(x)\,dx \quad \text{if } f(2a-x) = f(x)$$
$$\int_{-a}^a f(x)\,dx = \begin{cases} 2\int_0^a f(x)\,dx & \text{if } f \text{ is even} \\ 0 & \text{if } f \text{ is odd} \end{cases}$$

---

## 🧮 Questions & Solutions

### 1. Indefinite Integrals

#### Q1(i). $\displaystyle\int \frac{dx}{5 + 3\cos x}$

<details>
<summary>💡 Solution</summary>

Use Weierstrass substitution: $t = \tan(x/2)$, so $\cos x = \dfrac{1-t^2}{1+t^2}$, $dx = \dfrac{2dt}{1+t^2}$

$$\int \frac{1}{5+3\cdot\frac{1-t^2}{1+t^2}} \cdot \frac{2dt}{1+t^2} = \int \frac{2\,dt}{5(1+t^2)+3(1-t^2)} = \int \frac{2\,dt}{8+2t^2}$$

$$= \int \frac{dt}{4+t^2} = \frac{1}{2}\tan^{-1}\frac{t}{2} + C = \frac{1}{2}\tan^{-1}\left(\frac{\tan(x/2)}{2}\right) + C$$

</details>

---

#### Q1(ii). $\displaystyle\int \frac{dx}{5 + 4\sin 2x}$

<details>
<summary>💡 Solution</summary>

Rewrite $\sin 2x = \dfrac{2\tan x}{1+\tan^2 x}$, let $t = \tan x$, $dt = \sec^2 x\,dx$

$$\int \frac{dx}{5+4\sin 2x} = \int \frac{\sec^2 x\,dx}{(5+4\sin 2x)\sec^2 x}$$

Substituting with $t = \tan x$:
$$= \int \frac{dt}{5(1+t^2)+8t} = \int \frac{dt}{5t^2+8t+5}$$

Complete the square: $5t^2+8t+5 = 5\left(t+\dfrac{4}{5}\right)^2 + \dfrac{9}{5}$

$$= \frac{1}{5}\int \frac{dt}{\left(t+\frac{4}{5}\right)^2+\frac{9}{25}} = \frac{1}{5} \cdot \frac{5}{3}\tan^{-1}\frac{5t+4}{3} + C = \frac{1}{3}\tan^{-1}\frac{5\tan x+4}{3} + C$$

</details>

---

#### Q1(iii). $\displaystyle\int \frac{dx}{4 + 5\sin x}$

<details>
<summary>💡 Solution</summary>

Using $t = \tan(x/2)$: $\sin x = \dfrac{2t}{1+t^2}$, $dx = \dfrac{2\,dt}{1+t^2}$

$$= \int \frac{2\,dt}{4(1+t^2)+10t} = \int \frac{dt}{2t^2+5t+2} = \int \frac{dt}{(2t+1)(t+2)}$$

Partial fractions: $\dfrac{1}{(2t+1)(t+2)} = \dfrac{A}{2t+1}+\dfrac{B}{t+2}$

$A = \dfrac{1}{3/2} = \dfrac{2}{3}$, $B = \dfrac{-1}{3}$

$$= \frac{2}{3}\cdot\frac{1}{2}\ln|2t+1| - \frac{1}{3}\ln|t+2| + C$$

$$= \frac{1}{3}\ln\left|\frac{\sqrt{2\tan(x/2)+1}}{tan(x/2)+2}\right| + C$$

</details>

---

#### Q1(iv). $\displaystyle\int \frac{\cos x\,dx}{\sin x + \cos x}$

<details>
<summary>💡 Solution</summary>

**Key Technique:**

$$I_1 = \int \frac{\cos x}{\sin x + \cos x}\,dx, \quad I_2 = \int \frac{\sin x}{\sin x + \cos x}\,dx$$

$I_1 + I_2 = \int 1\,dx = x$

$I_1 - I_2 = \int \frac{\cos x - \sin x}{\sin x + \cos x}\,dx = \ln|\sin x + \cos x| + C$

Therefore:
$$I_1 = \frac{x + \ln|\sin x + \cos x|}{2} + C$$

</details>

---

#### Q1(v). $\displaystyle\int \frac{e^x(1+x)\,dx}{\cos^2(xe^x)}$

<details>
<summary>💡 Solution</summary>

Let $t = xe^x$, then $dt = (e^x + xe^x)\,dx = e^x(1+x)\,dx$

$$\int \frac{dt}{\cos^2 t} = \int \sec^2 t\,dt = \tan t + C = \tan(xe^x) + C$$

</details>

---

#### Q1(vi). $\displaystyle\int \frac{\sin 2x\,dx}{a\sin^2 x + b\cos^2 x}$

<details>
<summary>💡 Solution</summary>

Let $t = a\sin^2 x + b\cos^2 x$

$dt = (2a\sin x\cos x - 2b\sin x\cos x)\,dx = (a-b)\sin 2x\,dx$

$$\int \frac{\sin 2x\,dx}{t} = \frac{1}{a-b}\int \frac{dt}{t} = \frac{1}{a-b}\ln|a\sin^2 x + b\cos^2 x| + C$$

</details>

---

#### Q1(vii). $\displaystyle\int \frac{dx}{\{(x+a)^2 - a^2\}^{3/2}}$

<details>
<summary>💡 Solution</summary>

Let $x + a = a\sec\theta$, $dx = a\sec\theta\tan\theta\,d\theta$

$(x+a)^2 - a^2 = a^2\sec^2\theta - a^2 = a^2\tan^2\theta$

$$\int \frac{a\sec\theta\tan\theta\,d\theta}{(a^2\tan^2\theta)^{3/2}} = \int \frac{a\sec\theta\tan\theta\,d\theta}{a^3\tan^3\theta} = \frac{1}{a^2}\int \frac{\sec\theta}{\tan^2\theta}\,d\theta$$

$$= \frac{1}{a^2}\int \frac{\cos\theta}{\sin^2\theta}\,d\theta = \frac{-1}{a^2\sin\theta}+C = \frac{-1}{a^2} \cdot \frac{x+a}{\sqrt{(x+a)^2-a^2}} + C$$

</details>

---

#### Q1(viii). $\displaystyle\int \frac{\sqrt{x^2-a^2}}{x^3}\,dx$

<details>
<summary>💡 Solution</summary>

Let $x = a\sec\theta$, $dx = a\sec\theta\tan\theta\,d\theta$, $\sqrt{x^2-a^2} = a\tan\theta$

$$\int \frac{a\tan\theta \cdot a\sec\theta\tan\theta\,d\theta}{a^3\sec^3\theta} = \frac{1}{a}\int \frac{\tan^2\theta}{\sec^2\theta}\,d\theta = \frac{1}{a}\int \sin^2\theta\,d\theta$$

$$= \frac{1}{2a}\int(1-\cos 2\theta)\,d\theta = \frac{1}{2a}\left(\theta - \frac{\sin 2\theta}{2}\right)+C$$

Convert back: $\theta = \sec^{-1}(x/a)$, $\sin\theta = \dfrac{\sqrt{x^2-a^2}}{x}$

$$= \frac{1}{2a}\left[\sec^{-1}\frac{x}{a} - \frac{\sqrt{x^2-a^2}}{x^2}\cdot a\right] + C$$

</details>

---

#### Q1(ix). $\displaystyle\int \frac{dx}{\sqrt{\sin x}\cdot\sqrt{\cos^7 x}}$

<details>
<summary>💡 Solution</summary>

$$\int \frac{dx}{\sqrt{\sin x}\cdot\cos^{7/2}x} = \int \frac{dx}{\cos^4 x \cdot \sqrt{\sin x/\cos x}} = \int \frac{\sec^4 x}{\sqrt{\tan x}}\,dx$$

Let $t = \tan x$, $dt = \sec^2 x\,dx$

$$= \int \frac{\sec^2 x}{\sqrt{t}} \cdot \sec^2 x \cdot \frac{dt}{\sec^2 x} = \int \frac{(1+t^2)}{\sqrt{t}}\,dt = \int\left(t^{-1/2}+t^{3/2}\right)dt$$

$$= 2\sqrt{t} + \frac{2}{5}t^{5/2} + C = 2\sqrt{\tan x} + \frac{2}{5}\tan^{5/2} x + C$$

</details>

---

### 2. Reduction Formulae

#### Q2: Obtain reduction formula for $I_n = \int \sin^n x\,dx$

<details>
<summary>💡 Solution</summary>

$$I_n = \int \sin^n x\,dx = \int \sin^{n-1}x \cdot \sin x\,dx$$

Integrate by parts: $u = \sin^{n-1}x$, $dv = \sin x\,dx$

$du = (n-1)\sin^{n-2}x\cos x\,dx$, $v = -\cos x$

$$I_n = -\sin^{n-1}x\cos x + (n-1)\int \sin^{n-2}x\cos^2 x\,dx$$

$$= -\sin^{n-1}x\cos x + (n-1)\int \sin^{n-2}x(1-\sin^2 x)\,dx$$

$$= -\sin^{n-1}x\cos x + (n-1)I_{n-2} - (n-1)I_n$$

$$nI_n = -\sin^{n-1}x\cos x + (n-1)I_{n-2}$$

$$\boxed{I_n = \frac{-\sin^{n-1}x\cos x}{n} + \frac{n-1}{n}I_{n-2}}$$

</details>

---

#### Q2(ii). Reduction formula for $\int \cos^n x\,dx$

<details>
<summary>💡 Solution</summary>

By similar derivation (integrate by parts with $u = \cos^{n-1}x$, $dv = \cos x\,dx$):

$$\boxed{\int \cos^n x\,dx = \frac{\cos^{n-1}x\sin x}{n} + \frac{n-1}{n}\int \cos^{n-2}x\,dx}$$

</details>

---

#### Q2(iii). Reduction formula for $\int \tan^n x\,dx$

<details>
<summary>💡 Solution</summary>

$$I_n = \int \tan^n x\,dx = \int \tan^{n-2}x \cdot \tan^2 x\,dx = \int \tan^{n-2}x(\sec^2 x - 1)\,dx$$

$$= \int \tan^{n-2}x\sec^2 x\,dx - I_{n-2} = \frac{\tan^{n-1}x}{n-1} - I_{n-2}$$

$$\boxed{I_n + I_{n-2} = \frac{\tan^{n-1}x}{n-1}}$$

</details>

---

#### Q3. If $I_n = \displaystyle\int_0^{\pi/4} \tan^n x\,dx$, show $I_n + I_{n-2} = \dfrac{1}{n-1}$ and find $I_5$.

<details>
<summary>💡 Solution</summary>

From the reduction formula (evaluated at limits $0$ to $\pi/4$):

$$I_n + I_{n-2} = \left[\frac{\tan^{n-1}x}{n-1}\right]_0^{\pi/4} = \frac{(\tan\pi/4)^{n-1}}{n-1} - 0 = \frac{1}{n-1}$$ ✅

**Finding $I_5$:**

$I_1 = \displaystyle\int_0^{\pi/4}\tan x\,dx = [-\ln\cos x]_0^{\pi/4} = \ln\sqrt{2}$

$I_3 + I_1 = \dfrac{1}{2} \Rightarrow I_3 = \dfrac{1}{2} - \ln\sqrt{2}$

$I_5 + I_3 = \dfrac{1}{4} \Rightarrow I_5 = \dfrac{1}{4} - I_3 = \dfrac{1}{4} - \dfrac{1}{2} + \ln\sqrt{2} = -\dfrac{1}{4} + \ln\sqrt{2}$

$$\boxed{I_5 = \ln\sqrt{2} - \frac{1}{4}}$$

</details>

---

#### Q4. If $I_n = \displaystyle\int_0^{\pi/2} x^n\sin x\,dx$, prove $I_n + n(n-1)I_{n-2} = n\left(\dfrac{\pi}{2}\right)^{n-1}$ and find $\displaystyle\int_0^{\pi/2}x^5\sin x\,dx$.

<details>
<summary>💡 Solution</summary>

**Integration by parts:**

$u = x^n$, $dv = \sin x\,dx$  
$du = nx^{n-1}dx$, $v = -\cos x$

$$I_n = [-x^n\cos x]_0^{\pi/2} + n\int_0^{\pi/2}x^{n-1}\cos x\,dx$$

The boundary term vanishes. Now integrate by parts again on the remaining integral:

$u = x^{n-1}$, $dv = \cos x\,dx$  
$du = (n-1)x^{n-2}dx$, $v = \sin x$

$$= n\left[x^{n-1}\sin x\right]_0^{\pi/2} - n(n-1)\int_0^{\pi/2}x^{n-2}\sin x\,dx$$

$$= n\left(\frac{\pi}{2}\right)^{n-1} - n(n-1)I_{n-2}$$

$$\boxed{I_n + n(n-1)I_{n-2} = n\left(\frac{\pi}{2}\right)^{n-1}}$$ ✅

**Finding $\displaystyle\int_0^{\pi/2}x^5\sin x\,dx$:**

$I_1 = \displaystyle\int_0^{\pi/2}x\sin x\,dx = [-x\cos x + \sin x]_0^{\pi/2} = 1$

$I_3 + 3\cdot 2 I_1 = 3(\pi/2)^2 \Rightarrow I_3 = 3\pi^2/4 - 6$

$I_5 + 5\cdot 4 I_3 = 5(\pi/2)^4 \Rightarrow I_5 = 5\pi^4/16 - 20I_3 = 5\pi^4/16 - 20(3\pi^2/4-6) = 5\pi^4/16 - 15\pi^2 + 120$

</details>

---

### 3. Integration by Parts

**Formula:** $\displaystyle\int u\,dv = uv - \int v\,du$

**ILATE Rule** (priority for $u$): **I**nverse trig → **L**og → **A**lgebraic → **T**rig → **E**xponential

#### Q5(i). $\displaystyle\int (\sin^{-1}x)^2\,dx$

<details>
<summary>💡 Solution</summary>

Let $u = (\sin^{-1}x)^2$, $dv = dx$

$du = \dfrac{2\sin^{-1}x}{\sqrt{1-x^2}}\,dx$, $v = x$

$$= x(\sin^{-1}x)^2 - \int \frac{2x\sin^{-1}x}{\sqrt{1-x^2}}\,dx$$

For the remaining integral, let $t = \sin^{-1}x$, $x = \sin t$, $\sqrt{1-x^2} = \cos t$:

$$-2\int \frac{\sin t \cdot t}{\cos t}\cdot\cos t\,dt = -2\int t\sin t\,dt = -2[-t\cos t + \sin t] + C$$

$$= x(\sin^{-1}x)^2 + 2\cos(\sin^{-1}x)\sin^{-1}x - 2x + C$$

$$= x(\sin^{-1}x)^2 + 2\sqrt{1-x^2}\sin^{-1}x - 2x + C$$

</details>

---

#### Q5(ii). $\displaystyle\int \frac{x\,dx}{1+\cos x}$

<details>
<summary>💡 Solution</summary>

$1 + \cos x = 2\cos^2(x/2)$

$$\int \frac{x}{2\cos^2(x/2)}\,dx = \frac{1}{2}\int x\sec^2(x/2)\,dx$$

Parts: $u = x$, $dv = \sec^2(x/2)\,dx$, $v = 2\tan(x/2)$

$$= \frac{1}{2}\left[2x\tan\frac{x}{2} - 2\int\tan\frac{x}{2}\,dx\right]$$

$$= x\tan\frac{x}{2} + 2\ln\left|\cos\frac{x}{2}\right| + C$$

</details>

---

#### Q5(iv). $\displaystyle\int \frac{\ln(n+1)}{\sqrt{n+1}}\,dn$

<details>
<summary>💡 Solution</summary>

Let $t = n+1$, $dt = dn$:

$$\int \frac{\ln t}{\sqrt{t}}\,dt = \int t^{-1/2}\ln t\,dt$$

Parts: $u = \ln t$, $dv = t^{-1/2}dt$, $v = 2\sqrt{t}$

$$= 2\sqrt{t}\ln t - \int \frac{2\sqrt{t}}{t}\,dt = 2\sqrt{t}\ln t - 2\int t^{-1/2}\,dt = 2\sqrt{t}\ln t - 4\sqrt{t} + C$$

$$= 2\sqrt{n+1}\ln(n+1) - 4\sqrt{n+1} + C = 2\sqrt{n+1}[\ln(n+1)-2] + C$$

</details>

---

### 4. Integration by Partial Fractions

#### Q6(i). $\displaystyle\int \frac{7x+4}{x^3+4x}\,dx$

<details>
<summary>💡 Solution</summary>

$$\frac{7x+4}{x(x^2+4)} = \frac{A}{x} + \frac{Bx+C}{x^2+4}$$

Multiply: $7x+4 = A(x^2+4)+(Bx+C)x$

$x=0$: $4 = 4A \Rightarrow A=1$  
Comparing $x^2$: $0 = A+B \Rightarrow B=-1$  
Comparing $x$: $7 = C$

$$\int\left[\frac{1}{x} + \frac{-x+7}{x^2+4}\right]dx = \ln|x| - \frac{1}{2}\ln(x^2+4) + \frac{7}{2}\tan^{-1}\frac{x}{2} + C$$

</details>

---

#### Q6(iii). $\displaystyle\int \frac{x\,dx}{(x-1)(x^2+4)}$

<details>
<summary>💡 Solution</summary>

$$\frac{x}{(x-1)(x^2+4)} = \frac{A}{x-1} + \frac{Bx+C}{x^2+4}$$

$x=1$: $A = \dfrac{1}{5}$

Comparing $x^2$: $0 = A+B \Rightarrow B = -\dfrac{1}{5}$  
Comparing constant: $0 = -4A-C \Rightarrow C = -\dfrac{4}{5}$

$$= \frac{1}{5}\int\frac{dx}{x-1} - \frac{1}{5}\int\frac{x+4}{x^2+4}\,dx$$

$$= \frac{1}{5}\ln|x-1| - \frac{1}{10}\ln(x^2+4) - \frac{2}{5}\tan^{-1}\frac{x}{2} + C$$

</details>

---

### 5. Definite Integrals

#### Q7(i). $\displaystyle\int_0^{\pi/2} \frac{x\sin x}{1+\cos^2 x}\,dx$

<details>
<summary>💡 Solution</summary>

Let $I = \displaystyle\int_0^{\pi/2}\frac{x\sin x}{1+\cos^2 x}\,dx$

Using property $\displaystyle\int_0^a f(x)\,dx = \int_0^a f(a-x)\,dx$:

$$I = \int_0^{\pi/2}\frac{(\pi/2-x)\sin x}{1+\cos^2 x}\,dx$$

Adding both:
$$2I = \frac{\pi}{2}\int_0^{\pi/2}\frac{\sin x}{1+\cos^2 x}\,dx$$

Let $t = \cos x$, $dt = -\sin x\,dx$:

$$2I = \frac{\pi}{2}\int_0^1\frac{dt}{1+t^2} = \frac{\pi}{2}\left[\tan^{-1}t\right]_0^1 = \frac{\pi}{2}\cdot\frac{\pi}{4} = \frac{\pi^2}{8}$$

$$\boxed{I = \frac{\pi^2}{16}}$$

</details>

---

#### Q7(ii). Prove $\displaystyle\int_0^{\pi/2}\log\sin x\,dx = \frac{\pi}{2}\log\frac{1}{2}$

<details>
<summary>💡 Solution</summary>

Let $I = \displaystyle\int_0^{\pi/2}\log\sin x\,dx$

Using property $\displaystyle\int_0^{\pi/2}f(x)\,dx = \int_0^{\pi/2}f(\pi/2-x)\,dx$:

$$I = \int_0^{\pi/2}\log\cos x\,dx$$

Adding:
$$2I = \int_0^{\pi/2}(\log\sin x + \log\cos x)\,dx = \int_0^{\pi/2}\log(\sin x\cos x)\,dx$$

$$= \int_0^{\pi/2}\log\frac{\sin 2x}{2}\,dx = \int_0^{\pi/2}\log\sin 2x\,dx - \int_0^{\pi/2}\log 2\,dx$$

For $\displaystyle\int_0^{\pi/2}\log\sin 2x\,dx$: let $u=2x$:

$$= \frac{1}{2}\int_0^{\pi}\log\sin u\,du = \frac{1}{2}\cdot 2\int_0^{\pi/2}\log\sin u\,du = I$$

Therefore: $2I = I - \dfrac{\pi}{2}\log 2$

$$\boxed{I = -\frac{\pi}{2}\log 2 = \frac{\pi}{2}\log\frac{1}{2}}$$ ✅

</details>

---

#### Q7(iii). $\displaystyle\int_0^{\pi/2}\frac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx$

<details>
<summary>💡 Solution</summary>

Let $I = \displaystyle\int_0^{\pi/2}\frac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx$

Using $\displaystyle\int_0^{\pi/2}f(x)\,dx = \int_0^{\pi/2}f(\pi/2-x)\,dx$:

$$I = \int_0^{\pi/2}\frac{\sqrt{\cos x}}{\sqrt{\cos x}+\sqrt{\sin x}}\,dx$$

Adding:
$$2I = \int_0^{\pi/2}\frac{\sqrt{\sin x}+\sqrt{\cos x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx = \int_0^{\pi/2}1\,dx = \frac{\pi}{2}$$

$$\boxed{I = \frac{\pi}{4}}$$

</details>

---

#### Q7(iv). Prove $\displaystyle\int_0^1\frac{\log(1+x)}{1+x^2}\,dx = \frac{\pi}{8}\log 2$

<details>
<summary>💡 Solution</summary>

Let $x = \tan\theta$, $dx = \sec^2\theta\,d\theta$. When $x=0$, $\theta=0$; when $x=1$, $\theta=\pi/4$.

$$I = \int_0^{\pi/4}\frac{\log(1+\tan\theta)}{1+\tan^2\theta}\sec^2\theta\,d\theta = \int_0^{\pi/4}\log(1+\tan\theta)\,d\theta$$

Using $\displaystyle\int_0^a f(\theta)\,d\theta = \int_0^a f(a-\theta)\,d\theta$ with $a=\pi/4$:

$$I = \int_0^{\pi/4}\log\left(1+\tan(\pi/4-\theta)\right)d\theta = \int_0^{\pi/4}\log\left(\frac{2}{1+\tan\theta}\right)d\theta$$

$$= \int_0^{\pi/4}\log 2\,d\theta - I$$

$$2I = \frac{\pi}{4}\log 2$$

$$\boxed{I = \frac{\pi}{8}\log 2}$$ ✅

</details>

---

#### Q7(v). $\displaystyle\int_0^{\pi/2}\frac{x\,dx}{\sin x+\cos x}$

<details>
<summary>💡 Solution</summary>

Using symmetry property:
$$I = \int_0^{\pi/2}\frac{x}{\sin x+\cos x}\,dx = \int_0^{\pi/2}\frac{(\pi/2-x)}{\cos x+\sin x}\,dx$$

$$2I = \frac{\pi}{2}\int_0^{\pi/2}\frac{dx}{\sin x+\cos x}$$

$\sin x + \cos x = \sqrt{2}\sin(x+\pi/4)$:

$$2I = \frac{\pi}{2\sqrt{2}}\int_0^{\pi/2}\csc\left(x+\frac{\pi}{4}\right)dx$$

$$= \frac{\pi}{2\sqrt{2}}\left[\ln\left|\tan\frac{x/2+\pi/8}{1}\right|\right]_0^{\pi/2} = \frac{\pi}{2\sqrt{2}}\ln(1+\sqrt{2})$$

$$\boxed{I = \frac{\pi}{4\sqrt{2}}\ln(1+\sqrt{2})}$$

</details>

---

### 6. Wallis's Formula

**Statement:**

$$\int_0^{\pi/2}\sin^p\theta\cos^q\theta\,d\theta = \frac{\Gamma\left(\frac{p+1}{2}\right)\Gamma\left(\frac{q+1}{2}\right)}{2\,\Gamma\left(\frac{p+q+2}{2}\right)}$$

**Special cases (Wallis's formula):**

$$\int_0^{\pi/2}\sin^n x\,dx = \int_0^{\pi/2}\cos^n x\,dx = \begin{cases} \dfrac{(n-1)!!}{n!!}\cdot\dfrac{\pi}{2} & n \text{ even} \\[6pt] \dfrac{(n-1)!!}{n!!} & n \text{ odd} \end{cases}$$

where $n!! = n(n-2)(n-4)\cdots$

**Examples:**
$$\int_0^{\pi/2}\sin^6 x\,dx = \frac{5\cdot3\cdot1}{6\cdot4\cdot2}\cdot\frac{\pi}{2} = \frac{15\pi}{96} = \frac{5\pi}{32}$$

$$\int_0^{\pi/2}\sin^5 x\,dx = \frac{4\cdot2}{5\cdot3\cdot1} = \frac{8}{15}$$

---

## 📝 Practice Questions

#### P1. Evaluate $\displaystyle\int\frac{dx}{\sin x(2+\cos x - 2\sin x)}$

<details>
<summary>💡 Solution</summary>

Use Weierstrass substitution $t = \tan(x/2)$, $\sin x = \dfrac{2t}{1+t^2}$, $\cos x = \dfrac{1-t^2}{1+t^2}$, $dx = \dfrac{2dt}{1+t^2}$

$$= \int\frac{\frac{2dt}{1+t^2}}{\frac{2t}{1+t^2}\left(2+\frac{1-t^2}{1+t^2}-\frac{4t}{1+t^2}\right)}$$

Simplify the denominator and decompose by partial fractions.

</details>

---

#### P2. Evaluate $\displaystyle\int_0^1 x^3\sqrt{1-x^2}\,dx$

<details>
<summary>💡 Solution</summary>

Let $x = \sin\theta$: $\displaystyle\int_0^{\pi/2}\sin^3\theta\cos^2\theta\,d\theta = \frac{2\cdot1}{5\cdot3\cdot1}\cdot1 = \frac{2}{15}$

**Answer:** $\dfrac{2}{15}$

</details>

---

#### P3. Prove $\displaystyle\int_0^{\pi}x\sin^3 x\,dx = \dfrac{2\pi}{3}$

<details>
<summary>💡 Solution</summary>

$$I = \int_0^\pi x\sin^3 x\,dx = \int_0^\pi(\pi-x)\sin^3 x\,dx$$

$$2I = \pi\int_0^\pi\sin^3 x\,dx = \pi\left[\frac{2}{3}\right]\cdot 2 = \frac{4\pi}{3}$$

(using $\int_0^\pi\sin^3 x\,dx = \frac{4}{3}$)

$$I = \frac{2\pi}{3}$$ ✅

</details>

---

#### P4. Find $\displaystyle\int\frac{2x^2-1}{(x^2+1)(x^2+4)}\,dx$

<details>
<summary>💡 Solution</summary>

Partial fractions with $u = x^2$: $\dfrac{2u-1}{(u+1)(u+4)} = \dfrac{A}{u+1}+\dfrac{B}{u+4}$

$A = -1$, $B = 3$

$$\int\frac{-1}{x^2+1}\,dx + \int\frac{3}{x^2+4}\,dx = -\tan^{-1}x + \frac{3}{2}\tan^{-1}\frac{x}{2} + C$$

</details>

---

## 📚 References

1. **B.S. Grewal** — *Higher Engineering Mathematics*, Ch. 7-9
2. **I.A. Maron** — *Problems in Calculus of One Variable*, Mir Publishers
3. [Khan Academy — Integrals](https://www.khanacademy.org/math/integral-calculus)
4. [Paul's Online Math Notes — Integration Techniques](https://tutorial.math.lamar.edu/Classes/CalcII/IntTechIntro.aspx)
5. [MIT OCW — 18.01 Calculus, Exam 3](https://ocw.mit.edu)
6. [Wolfram MathWorld — Wallis Formula](https://mathworld.wolfram.com/WallisFormula.html)

---

> 📌 **Tip:** The symmetry property $\int_0^a f(x)\,dx = \int_0^a f(a-x)\,dx$ is extremely powerful for definite integrals — always check if it simplifies your problem.  
> 📌 **Tip:** For Weierstrass substitution ($t = \tan(x/2)$), always convert $\sin x$, $\cos x$, and $dx$ together.
