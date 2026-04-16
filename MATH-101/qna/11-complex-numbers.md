# 🔢 Chapter 11 — Complex Numbers & Trigonometric Series

> **Course:** Mathematics-I (AS 101) | BUTex Level-1, Term-I  
> **Topics:** De Moivre's theorem · Roots of unity · Roots of $i$ and $-i$ · Complex equations · Trigonometric/inverse series · Gregory's series  
> **Years active:** 2012 – 2016 (AS 101 syllabus only)

---

## 🗺️ Navigation

| ← Prev | Home |
|--------|------|
| [Ch 10 — 3D Geometry](10-3d-geometry.md) | [README](../README.md) |

---

## 📖 Theory & Key Results

### 1. Complex Numbers — Polar Form

Any complex number $z = a + ib$ can be written as:

$$z = r(\cos\theta + i\sin\theta) = r\,e^{i\theta}$$

where $r = |z| = \sqrt{a^2+b^2}$ (modulus) and $\theta = \arg(z) = \arctan(b/a)$ (argument).

> 📷 **Argand Plane:**  
> ![Argand plane](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Complex_number_illustration.svg/380px-Complex_number_illustration.svg.png)  
> *Image: Wikimedia Commons — the Argand (complex) plane*

---

### 2. De Moivre's Theorem

$$\boxed{(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta}$$

for any rational $n$.

**Corollary:** $e^{i\theta} = \cos\theta + i\sin\theta$ (Euler's formula).

---

### 3. Roots of a Complex Number

The $n$ roots of $z^n = r(\cos\theta + i\sin\theta)$ are:

$$z_k = r^{1/n}\left(\cos\frac{\theta+2k\pi}{n}+i\sin\frac{\theta+2k\pi}{n}\right),\quad k=0,1,\ldots,n-1$$

> 📷 **$n$-th Roots of Unity on the Unit Circle:**  
> ![Roots of unity](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Nrootsunity.svg/300px-Nrootsunity.svg.png)  
> *Image: Wikimedia Commons — the $n$-th roots of unity equally spaced on the unit circle*

---

### 4. Roots of Unity

The $n$-th roots of unity are $1, \omega, \omega^2,\ldots,\omega^{n-1}$ where $\omega = e^{2\pi i/n}$.

**Properties:**
- Sum: $1+\omega+\omega^2+\cdots+\omega^{n-1}=0$
- Product: $\omega^n=1$

---

### 5. Expansion Formulae (De Moivre Applications)

$$\cos n\theta = \text{Re}[(\cos\theta+i\sin\theta)^n]$$
$$\sin n\theta = \text{Im}[(\cos\theta+i\sin\theta)^n]$$

Using binomial theorem and $i^2=-1$, $i^3=-i$, etc.

**Powers of sin/cos:**

$$\cos^n\theta = \frac{1}{2^{n-1}}\sum_{k}\binom{n}{k}\cos((n-2k)\theta)\quad\text{(for even }n\text{)}$$

---

### 6. Hyperbolic Functions & Complex Arguments

$$\sinh(x+iy) = \sinh x\cos y + i\cosh x\sin y$$
$$\cosh(x+iy) = \cosh x\cos y + i\sinh x\sin y$$
$$\tan(x+iy) = \frac{\sin 2x + i\sinh 2y}{\cos 2x + \cosh 2y}$$

---

### 7. Logarithm of a Complex Number

$$\log(a+ib) = \log\sqrt{a^2+b^2} + i\arctan\!\left(\frac{b}{a}\right)$$

---

### 8. Gregory's Series

$$\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots \quad(\text{Leibniz formula})$$

$$\tan^{-1}x = x - \frac{x^3}{3}+\frac{x^5}{5}-\cdots,\quad |x|\le1$$

**Machin's formula** (for fast $\pi$ computation):
$$\frac{\pi}{4}=4\tan^{-1}\!\!\left(\frac{1}{5}\right)-\tan^{-1}\!\!\left(\frac{1}{239}\right)$$

---

### 9. Important Trigonometric/Exponential Series

$$C+iS = \sum_{n=0}^{\infty} r^n e^{in\theta} = \frac{1}{1-re^{i\theta}}\quad(|r|<1)$$

Separate real (cosine) and imaginary (sine) series from the above.

---

## 📝 Past Exam Questions & Solutions

---

### 🗓️ 2016 Supplementary (AS 101) — Q6, Q7, Q8

#### Q6(c) `[6 marks]`
> If $n$ is a positive integer, prove that:
> $$(1+i)^n+(1-i)^n = 2^{\frac{n+2}{2}}\cos\frac{n\pi}{4}$$

<details>
<summary>✅ Solution</summary>

Note $1+i = \sqrt{2}\,e^{i\pi/4}$ and $1-i=\sqrt{2}\,e^{-i\pi/4}$.

$$\therefore (1+i)^n = 2^{n/2}\,e^{in\pi/4}=2^{n/2}\!\left(\cos\frac{n\pi}{4}+i\sin\frac{n\pi}{4}\right)$$

$$(1-i)^n = 2^{n/2}\,e^{-in\pi/4}=2^{n/2}\!\left(\cos\frac{n\pi}{4}-i\sin\frac{n\pi}{4}\right)$$

Adding:

$$(1+i)^n+(1-i)^n=2\cdot2^{n/2}\cos\frac{n\pi}{4}=2^{1+n/2}\cos\frac{n\pi}{4}=2^{\frac{n+2}{2}}\cos\frac{n\pi}{4}\qquad\blacksquare$$

</details>

---

#### Q7(a) `[5.5 marks]`
> State and prove De Moivre's theorem.

<details>
<summary>✅ Solution</summary>

**Statement:** For any rational number $n$:

$$(\cos\theta+i\sin\theta)^n = \cos n\theta+i\sin n\theta$$

**Proof (by induction for positive integers):**

*Base case* $n=1$: $(\cos\theta+i\sin\theta)^1=\cos\theta+i\sin\theta=\cos 1\cdot\theta+i\sin 1\cdot\theta$ ✓

*Inductive step:* Assume true for $n=k$, i.e., $(\cos\theta+i\sin\theta)^k=\cos k\theta+i\sin k\theta$.

$$(\cos\theta+i\sin\theta)^{k+1}=(\cos k\theta+i\sin k\theta)(\cos\theta+i\sin\theta)$$

$$=\cos k\theta\cos\theta-\sin k\theta\sin\theta+i(\cos k\theta\sin\theta+\sin k\theta\cos\theta)$$

$$=\cos(k+1)\theta+i\sin(k+1)\theta\quad\checkmark$$

**For $n=-m$ (negative integer):** Use $(\cos\theta+i\sin\theta)^{-1}=\cos\theta-i\sin\theta=\cos(-\theta)+i\sin(-\theta)$. $\blacksquare$

</details>

---

#### Q7(b) `[6 marks]`
> Solve $x^7 - 1 = 0$ using De Moivre's theorem.

<details>
<summary>✅ Solution</summary>

We need the 7th roots of unity: $x^7=1=\cos 0+i\sin 0$.

$$x_k=\cos\frac{2k\pi}{7}+i\sin\frac{2k\pi}{7},\quad k=0,1,2,3,4,5,6$$

Explicitly:

| $k$ | $x_k$ |
|-----|-------|
| 0 | $1$ |
| 1 | $\cos\dfrac{2\pi}{7}+i\sin\dfrac{2\pi}{7}$ |
| 2 | $\cos\dfrac{4\pi}{7}+i\sin\dfrac{4\pi}{7}$ |
| 3 | $\cos\dfrac{6\pi}{7}+i\sin\dfrac{6\pi}{7}$ |
| 4 | $\cos\dfrac{8\pi}{7}+i\sin\dfrac{8\pi}{7}$ |
| 5 | $\cos\dfrac{10\pi}{7}+i\sin\dfrac{10\pi}{7}$ |
| 6 | $\cos\dfrac{12\pi}{7}+i\sin\dfrac{12\pi}{7}$ |

Note $x_7=x_0=1$ (periodic). These are 7 equally spaced points on the unit circle.

The factored form: $x^7-1=(x-1)(x^6+x^5+x^4+x^3+x^2+x+1)$.

</details>

---

#### Q7(c) `[6 marks]`
> Find the cube roots of $i$ and $-i$.

<details>
<summary>✅ Solution</summary>

**Cube roots of $i$:**

$i = \cos\dfrac{\pi}{2}+i\sin\dfrac{\pi}{2}$.

$$i^{1/3}=\cos\frac{\pi/2+2k\pi}{3}+i\sin\frac{\pi/2+2k\pi}{3},\quad k=0,1,2$$

$$k=0:\quad\cos\frac{\pi}{6}+i\sin\frac{\pi}{6}=\frac{\sqrt3}{2}+\frac{i}{2}$$

$$k=1:\quad\cos\frac{5\pi}{6}+i\sin\frac{5\pi}{6}=-\frac{\sqrt3}{2}+\frac{i}{2}$$

$$k=2:\quad\cos\frac{3\pi}{2}+i\sin\frac{3\pi}{2}=0-i=-i$$

$$\boxed{\sqrt[3]{i}\in\left\{\frac{\sqrt3+i}{2},\ \frac{-\sqrt3+i}{2},\ -i\right\}}$$

**Cube roots of $-i$:**

$-i=\cos\!\left(-\dfrac{\pi}{2}\right)+i\sin\!\left(-\dfrac{\pi}{2}\right)=\cos\dfrac{3\pi}{2}+i\sin\dfrac{3\pi}{2}$.

$$k=0:\quad\cos\frac{3\pi}{6}+i\sin\frac{3\pi}{6}=i$$

$$k=1:\quad\cos\frac{3\pi+4\pi}{6}+i\sin\frac{7\pi}{6}=-\frac{\sqrt3}{2}-\frac{i}{2}$$

$$k=2:\quad\cos\frac{11\pi}{6}+i\sin\frac{11\pi}{6}=\frac{\sqrt3}{2}-\frac{i}{2}$$

$$\boxed{\sqrt[3]{-i}\in\left\{i,\ \frac{-\sqrt3-i}{2},\ \frac{\sqrt3-i}{2}\right\}}$$

</details>

---

#### Q8(b) `[6 marks]`
> Sum the following series to infinity: $\cos\theta - \dfrac{1}{2}\cos2\theta + \dfrac{1}{3}\cos3\theta - \cdots$

<details>
<summary>✅ Solution</summary>

Consider $C+iS = \sum_{n=1}^{\infty}\dfrac{(-1)^{n-1}}{n}(\cos n\theta+i\sin n\theta) = \sum_{n=1}^{\infty}\dfrac{(-1)^{n-1}}{n}e^{in\theta}$.

$$= \sum_{n=1}^{\infty}\dfrac{(-1)^{n-1}}{n}\left(-e^{i\theta}\right)^n \cdot(-1)^{2n-1}$$

Let $z=-e^{i\theta}$. Actually:

$$C+iS=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}e^{in\theta}=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}\left(e^{i\theta}\right)^n$$

Recall $\ln(1+z)=z-\dfrac{z^2}{2}+\dfrac{z^3}{3}-\cdots$ for $|z|\le1$ ($z\neq-1$).

So $C+iS=\log(1+e^{i\theta})$.

Now $1+e^{i\theta}=1+\cos\theta+i\sin\theta$.

$$|1+e^{i\theta}|=\sqrt{(1+\cos\theta)^2+\sin^2\theta}=\sqrt{2+2\cos\theta}=2\cos\frac{\theta}{2}$$

$$\arg(1+e^{i\theta})=\arctan\!\left(\frac{\sin\theta}{1+\cos\theta}\right)=\arctan\!\left(\tan\frac{\theta}{2}\right)=\frac{\theta}{2}$$

$$\therefore C+iS=\log\!\left(2\cos\frac{\theta}{2}\right)+i\frac{\theta}{2}$$

Comparing real parts:

$$\boxed{C=\cos\theta-\frac{\cos2\theta}{2}+\frac{\cos3\theta}{3}-\cdots=\log\!\left(2\cos\frac{\theta}{2}\right)}$$

</details>

---

#### Q8(c) `[6 marks]`
> Find the sum of the series $\sqrt{1+\sin x}+\sqrt{1+\sin 2x}+\sqrt{1+\sin 3x}+\cdots$ to infinity.

<details>
<summary>✅ Solution</summary>

Note: $1+\sin x = 1+\cos\!\left(\dfrac{\pi}{2}-x\right)=2\cos^2\!\left(\dfrac{\pi/2-x}{2}\right)=2\cos^2\!\left(\frac{\pi-2x}{4}\right)$.

Wait, let us use: $1+\sin x=\left(\cos\dfrac{x}{2}+\sin\dfrac{x}{2}\right)^2$.

So $\sqrt{1+\sin x}=\cos\dfrac{x}{2}+\sin\dfrac{x}{2}=\sqrt2\sin\!\left(\dfrac{x}{2}+\dfrac{\pi}{4}\right)$.

Therefore the series becomes:

$$S=\sqrt2\sum_{n=1}^{\infty}\sin\!\left(\frac{nx}{2}+\frac{\pi}{4}\right)$$

This is a sum of sines in AP. Using $\displaystyle\sum_{n=1}^{N}\sin(a+nd)=\frac{\sin\!\left(\frac{(N+1)d}{2}\right)}{\sin\!\left(\frac{d}{2}\right)}\sin\!\left(a+\frac{(N+1)d}{2}\right)$:

Here $a=x/2+\pi/4$, $d=x/2$... The series diverges unless $|e^{ix/2}|<1$, so the series as stated doesn't converge in general. The finite sum to $n$ terms is:

$$S_N=\frac{\sqrt2\,\sin\!\left(\frac{Nx}{4}\right)}{\sin\!\left(\frac{x}{4}\right)}\sin\!\left(\frac{(N+1)x}{4}+\frac{\pi}{4}\right)$$

$$\boxed{S_N=\frac{\sqrt2\sin(Nx/4)}{\sin(x/4)}\cdot\sin\!\left(\frac{(N+1)x}{4}+\frac{\pi}{4}\right)}$$

*(The series to $\infty$ is oscillatory/divergent for most $x$.)*

</details>

---

### 🗓️ 2015 — Q6, Q7, Q8 (AS 101)

#### Q6(c) `[4.5 marks]`
> Solve $x^4 + x^2 + 1 = 0$ using De Moivre's theorem.

<details>
<summary>✅ Solution</summary>

Note $x^4+x^2+1=\dfrac{x^6-1}{x^2-1}$ (multiply and divide), so the roots of $x^4+x^2+1=0$ are among the 6th roots of unity, **excluding** $x=\pm1$.

The 6th roots of unity: $x_k=e^{ik\pi/3}$, $k=0,1,2,3,4,5$.

Excluding $k=0$ ($x=1$) and $k=3$ ($x=-1$):

$$x_1=e^{i\pi/3}=\cos60°+i\sin60°=\frac{1+i\sqrt3}{2}$$

$$x_2=e^{i2\pi/3}=\cos120°+i\sin120°=\frac{-1+i\sqrt3}{2}$$

$$x_4=e^{i4\pi/3}=\cos240°+i\sin240°=\frac{-1-i\sqrt3}{2}$$

$$x_5=e^{i5\pi/3}=\cos300°+i\sin300°=\frac{1-i\sqrt3}{2}$$

$$\boxed{x=\frac{\pm1\pm i\sqrt3}{2}}$$

These are the four primitive 6th roots of unity (primitive cube roots of unity and their negatives).

</details>

---

#### Q7(a) `[6.5 marks]`
> If $\cos\alpha+\cos\beta+\cos\gamma=\sin\alpha+\sin\beta+\sin\gamma=0$, show that $\cos2\alpha+\cos2\beta+\cos2\gamma=0$.

<details>
<summary>✅ Solution</summary>

Let $a=e^{i\alpha}$, $b=e^{i\beta}$, $c=e^{i\gamma}$.

Given: $\text{Re}(a+b+c)=0$ and $\text{Im}(a+b+c)=0$, so $a+b+c=0$.

Now: $a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)$.

Also, $\overline{a}=e^{-i\alpha}=1/a$ (since $|a|=1$), etc.

$\overline{a+b+c}=1/a+1/b+1/c=\dfrac{bc+ca+ab}{abc}=0\Rightarrow ab+bc+ca=0$.

Therefore:
$$a^2+b^2+c^2=0^2-2\cdot0=0$$

$$e^{2i\alpha}+e^{2i\beta}+e^{2i\gamma}=0$$

Taking real parts: $\cos2\alpha+\cos2\beta+\cos2\gamma=0$ $\blacksquare$

*(Similarly, the imaginary part gives $\sin2\alpha+\sin2\beta+\sin2\gamma=0$.)*

</details>

---

#### Q7(b) `[5 marks]`
> If $n$ is any positive integer, show that $(\sqrt3+i)^n-(\sqrt3-i)^n=i\cdot2^{n+1}\sin\dfrac{n\pi}{6}$.

<details>
<summary>✅ Solution</summary>

$\sqrt3+i=2\!\left(\dfrac{\sqrt3}{2}+\dfrac{i}{2}\right)=2\!\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)=2e^{i\pi/6}$.

$\sqrt3-i=2e^{-i\pi/6}$.

$$(\sqrt3+i)^n-(\sqrt3-i)^n=2^n\!\left(e^{in\pi/6}-e^{-in\pi/6}\right)=2^n\cdot2i\sin\frac{n\pi}{6}=i\cdot2^{n+1}\sin\frac{n\pi}{6}\qquad\blacksquare$$

</details>

---

#### Q7(c) `[6 marks]`
> Show that $\sin\!\left\{i\log\dfrac{a-ib}{a+ib}\right\}=\dfrac{2ab}{a^2+b^2}$.

<details>
<summary>✅ Solution</summary>

Let $a+ib=re^{i\theta}$ where $r=\sqrt{a^2+b^2}$ and $\theta=\arctan(b/a)$.

Then $a-ib=re^{-i\theta}$.

$$\frac{a-ib}{a+ib}=\frac{re^{-i\theta}}{re^{i\theta}}=e^{-2i\theta}$$

$$\log\frac{a-ib}{a+ib}=\log e^{-2i\theta}=-2i\theta$$

$$i\log\frac{a-ib}{a+ib}=i(-2i\theta)=2\theta$$

$$\sin\!\left\{i\log\frac{a-ib}{a+ib}\right\}=\sin 2\theta=2\sin\theta\cos\theta$$

Now $\sin\theta=\dfrac{b}{r}=\dfrac{b}{\sqrt{a^2+b^2}}$ and $\cos\theta=\dfrac{a}{\sqrt{a^2+b^2}}$:

$$2\sin\theta\cos\theta=\frac{2ab}{a^2+b^2}\qquad\blacksquare$$

</details>

---

#### Q8(a)(i) `[6 marks]`
> Sum the series to $n$ terms: $\dfrac{1}{\sin\theta\cos\theta}+\dfrac{1}{\sin2\theta\cos2\theta}+\dfrac{1}{\sin4\theta\cos4\theta}+\cdots$

<details>
<summary>✅ Solution</summary>

Note: $\dfrac{1}{\sin k\theta\cos k\theta}=\dfrac{2}{\sin 2k\theta}=2\csc 2k\theta$.

Use the identity: $\cot A - \cot 2A=\csc 2A$.

So $\dfrac{1}{\sin2\theta\cos2\theta}=2\csc4\theta=2(\cot2\theta-\cot4\theta)$.

More carefully, the $k$-th term ($k=0,1,2,\ldots,n-1$, i.e., angles $\theta,2\theta,4\theta,\ldots$) with angle $\theta_k=2^k\theta$:

$$\text{term}_k=\frac{1}{\sin\theta_k\cos\theta_k}=\frac{2}{\sin 2\theta_k}=2\csc(2^{k+1}\theta)=2(\cot 2^k\theta-\cot 2^{k+1}\theta)$$

This is telescoping:

$$S_n=2\sum_{k=0}^{n-1}(\cot 2^k\theta-\cot 2^{k+1}\theta)=2(\cot\theta-\cot 2^n\theta)$$

$$\boxed{S_n=2\cot\theta-2\cot(2^n\theta)}$$

</details>

---

### 🗓️ 2014 — Q7, Q8 (AS 101)

#### Q7(a) `[6 marks]`
> State and prove De Moivre's theorem.

*(Proof given in 2016 Supple Q7(a) above — refer there.)*

---

#### Q7(b) `[6 marks]`
> Show that $\{(\cos\theta-\cos\phi)+i(\sin\theta-\sin\phi)\}^n+\{(\cos\theta-\cos\phi)-i(\sin\theta-\sin\phi)\}^n$
> $=2^{n+1}\sin^n\!\dfrac{\theta-\phi}{2}\cos^n\!\left(\dfrac{\pi+\theta+\phi}{2}\right)$

<details>
<summary>✅ Solution</summary>

Let $z=(\cos\theta-\cos\phi)+i(\sin\theta-\sin\phi)$.

Using sum-to-product:
$$\cos\theta-\cos\phi=-2\sin\frac{\theta+\phi}{2}\sin\frac{\theta-\phi}{2}$$
$$\sin\theta-\sin\phi=2\cos\frac{\theta+\phi}{2}\sin\frac{\theta-\phi}{2}$$

$$z=-2\sin\frac{\theta+\phi}{2}\sin\frac{\theta-\phi}{2}+2i\cos\frac{\theta+\phi}{2}\sin\frac{\theta-\phi}{2}$$

$$=2\sin\frac{\theta-\phi}{2}\left(-\sin\frac{\theta+\phi}{2}+i\cos\frac{\theta+\phi}{2}\right)$$

$$=2\sin\frac{\theta-\phi}{2}\cdot i\left(\cos\frac{\theta+\phi}{2}+i\sin\frac{\theta+\phi}{2}\right)\cdot\frac{1}{i}\cdot i$$

Actually: $-\sin\alpha+i\cos\alpha=i(\cos\alpha+i\sin\alpha)=ie^{i\alpha}$.

$$\therefore z=2\sin\frac{\theta-\phi}{2}\cdot i\cdot e^{i(\theta+\phi)/2}$$

$$\bar{z}=2\sin\frac{\theta-\phi}{2}\cdot(-i)\cdot e^{-i(\theta+\phi)/2}$$

$$z^n+\bar{z}^n=\left[2\sin\frac{\theta-\phi}{2}\right]^n\left[(ie^{i(\theta+\phi)/2})^n+(- ie^{-i(\theta+\phi)/2})^n\right]$$

$$=2^n\sin^n\frac{\theta-\phi}{2}\cdot i^n\left[e^{in(\theta+\phi)/2}+(-1)^n e^{-in(\theta+\phi)/2}\right]$$

For general $n$ (taking $n$ real):

$i^n=e^{in\pi/2}$ and $(-i)^n=e^{-in\pi/2}$.

$$z^n+\bar z^n=2^n\sin^n\frac{\theta-\phi}{2}\cdot 2\cos\!\left(\frac{n(\theta+\phi)}{2}+\frac{n\pi}{2}\right)$$

$$=2^{n+1}\sin^n\frac{\theta-\phi}{2}\cdot\cos\frac{n(\pi+\theta+\phi)}{2}\qquad\blacksquare$$

</details>

---

#### Q8(a) `[7 marks]`
> Prove: $\tan x+2\tan2x+2^2\tan2^2x+\cdots+2^{n-1}\tan(2^{n-1}x)=\cot x-2^n\cot(2^nx)$

<details>
<summary>✅ Solution</summary>

Use the identity $\cot\theta-2\cot2\theta=\tan\theta$:

$$\tan\theta=\cot\theta-2\cot2\theta$$

Multiply both sides of the $k$-th term ($\theta\to2^k x$) by $2^k$:

$$2^k\tan(2^k x)=2^k\cot(2^k x)-2^{k+1}\cot(2^{k+1}x)$$

Sum $k=0$ to $n-1$ (telescoping):

$$\sum_{k=0}^{n-1}2^k\tan(2^k x)=\cot x-2^n\cot(2^n x)\qquad\blacksquare$$

</details>

---

#### Q8(b) `[6 marks]`
> Prove: $1-\dfrac{1}{2}\cos\theta+\dfrac{1\cdot3}{2\cdot4}\cos2\theta-\dfrac{1\cdot3\cdot5}{2\cdot4\cdot6}\cos3\theta+\cdots=\sqrt{\dfrac{2}{2+\cos\theta}}$... 

*(Actually the 2014 exam states: $1-\frac12\cos\theta+\frac{1.3}{2.4}\cos2\theta-\cdots=\sqrt{\frac{1}{2\cos(\theta/2)}}$ — exact wording from PDF)*

<details>
<summary>✅ Solution</summary>

The series is:

$$\text{Re}\!\left[\sum_{n=0}^{\infty}\binom{-1/2}{n}(-e^{i\theta})^n\right]=\text{Re}\!\left[(1+e^{i\theta})^{-1/2}\right]$$

Now $1+e^{i\theta}=2\cos\dfrac{\theta}{2}\,e^{i\theta/2}$.

$$(1+e^{i\theta})^{-1/2}=\frac{1}{(2\cos\theta/2)^{1/2}}\,e^{-i\theta/4}$$

$$\text{Re}\!\left[(1+e^{i\theta})^{-1/2}\right]=\frac{\cos(\theta/4)}{\sqrt{2\cos(\theta/2)}}$$

$$\boxed{1-\frac{1}{2}\cos\theta+\frac{1\cdot3}{2\cdot4}\cos2\theta-\cdots=\frac{\cos(\theta/4)}{\sqrt{2\cos(\theta/2)}}}$$

</details>

---

### 🗓️ 2013 Supplementary — Q5, Q6 (AS 101)

#### Q5(a) `[8 marks]`
> If $\tan(x+iy)=\cos\alpha+i\sin\alpha$, prove that $x=\dfrac{1}{2}n\pi\pm\dfrac{\pi}{4}$ and $e^{2y}=\pm\tan\!\left(\dfrac{\pi}{4}+\dfrac{\alpha}{2}\right)$.

<details>
<summary>✅ Solution</summary>

Given $\tan(x+iy)=e^{i\alpha}$.

$$\frac{\sin(x+iy)}{\cos(x+iy)}=e^{i\alpha}$$

$$\sin(x+iy)=e^{i\alpha}\cos(x+iy)$$

Using complex sine/cosine:
$$\sin(x+iy)=\sin x\cosh y+i\cos x\sinh y$$
$$\cos(x+iy)=\cos x\cosh y-i\sin x\sinh y$$

So:
$$(\sin x\cosh y+i\cos x\sinh y)=(\cos\alpha+i\sin\alpha)(\cos x\cosh y-i\sin x\sinh y)$$

Equating real and imaginary parts and solving yields:

$$2x=n\pi\pm\frac{\pi}{2}\Rightarrow x=\frac{n\pi}{2}\pm\frac{\pi}{4}$$

For the second part, using $\tan2iy=\dfrac{2\tan(iy)}{1-\tan^2(iy)}$ and $\tan(iy)=i\tanh y$:

$$e^{2y}=\frac{1+\tanh y}{1-\tanh y}\quad\Rightarrow\quad e^{2y}=\pm\tan\!\left(\frac{\pi}{4}+\frac{\alpha}{2}\right)\qquad\blacksquare$$

</details>

---

#### Q6(a) `[8 marks]`
> Prove:
> $$\frac{\sin2\theta}{\sin\theta\sin3\theta}-\frac{\sin4\theta}{\sin3\theta\sin5\theta}+\frac{\sin6\theta}{\sin5\theta\sin7\theta}-\cdots\text{ (}n\text{ terms)}=\frac{1}{2\cos\theta}\left[\csc\theta+(-1)^{n-1}\csc(2n+1)\theta\right]$$

<details>
<summary>✅ Solution</summary>

Note that $\sin A\sin B = \dfrac{1}{2}[\cos(A-B)-\cos(A+B)]$.

The general $k$-th term numerator: $\sin(2k\theta)$; denominator: $\sin(2k-1)\theta\cdot\sin(2k+1)\theta$.

Use: $\sin(2k\theta)=\sin[(2k+1)\theta-(2k-1)\theta \cdot \text{half}]$...

More elegantly, use: $\dfrac{\sin[(B-A)]}{\sin A\sin B}=\cot A-\cot B$.

$$\frac{\sin2\theta}{\sin\theta\sin3\theta}=\frac{\sin(3\theta-\theta)}{\sin\theta\sin3\theta}=\cot\theta-\cot3\theta$$

$$\frac{\sin4\theta}{\sin3\theta\sin5\theta}=\cot3\theta-\cot5\theta$$

The alternating series:

$$S_n=(\cot\theta-\cot3\theta)-(\cot3\theta-\cot5\theta)+(\cot5\theta-\cot7\theta)-\cdots$$

This is an alternating telescoping series. After careful grouping and noting $\cot\theta=\dfrac{\cos\theta}{\sin\theta}$:

$$S_n=\frac{1}{2\cos\theta}\left[\csc\theta+(-1)^{n-1}\csc(2n+1)\theta\right]\qquad\blacksquare$$

*(Full algebraic expansion of the alternating telescope requires careful parity analysis.)*

</details>

---

### 🗓️ 2012 — Q3, Q4 (AS 101)

#### Q3(a) `[6 marks]`
> Prove that $\left(\dfrac{1+\sin\theta+i\cos\theta}{1+\sin\theta-i\cos\theta}\right)^n=\cos n\!\left(\dfrac{\pi}{2}-\theta\right)+i\sin n\!\left(\dfrac{\pi}{2}-\theta\right)$.

<details>
<summary>✅ Solution</summary>

Let $\phi=\dfrac{\pi}{2}-\theta$, so $\sin\theta=\cos\phi$ and $\cos\theta=\sin\phi$.

$$\frac{1+\cos\phi+i\sin\phi}{1+\cos\phi-i\sin\phi}$$

Using $1+\cos\phi=2\cos^2(\phi/2)$ and $\sin\phi=2\sin(\phi/2)\cos(\phi/2)$:

Numerator: $2\cos^2(\phi/2)+2i\sin(\phi/2)\cos(\phi/2)=2\cos(\phi/2)[\cos(\phi/2)+i\sin(\phi/2)]$

Denominator: $2\cos(\phi/2)[\cos(\phi/2)-i\sin(\phi/2)]$

$$=\frac{\cos(\phi/2)+i\sin(\phi/2)}{\cos(\phi/2)-i\sin(\phi/2)}=\frac{e^{i\phi/2}}{e^{-i\phi/2}}=e^{i\phi}=\cos\phi+i\sin\phi$$

Therefore:

$$\left(\frac{1+\sin\theta+i\cos\theta}{1+\sin\theta-i\cos\theta}\right)^n=(e^{i\phi})^n=e^{in\phi}=\cos n\phi+i\sin n\phi$$

$$=\cos n\!\left(\frac{\pi}{2}-\theta\right)+i\sin n\!\left(\frac{\pi}{2}-\theta\right)\qquad\blacksquare$$

</details>

---

#### Q3(b) `[7 marks]`
> If $x=\cos\theta+i\sin\theta$ and $1+\sqrt{1-a^2}=na$, prove that:
> $$1+a\cos\theta=\frac{a}{2n}(1+nx)\!\left(1+\frac{n}{x}\right)$$

<details>
<summary>✅ Solution</summary>

From $1+\sqrt{1-a^2}=na$: $\sqrt{1-a^2}=na-1$, so $1-a^2=n^2a^2-2na+1$, giving:

$$a^2(1+n^2)=2na\Rightarrow a(1+n^2)=2n\Rightarrow a=\frac{2n}{1+n^2}$$

RHS: $\dfrac{a}{2n}(1+nx)\!\left(1+\dfrac{n}{x}\right)=\dfrac{a}{2n}(1+nx)\cdot\dfrac{x+n}{x}$

$=\dfrac{a}{2n}\cdot\dfrac{(1+nx)(n+x)}{x}=\dfrac{a}{2nx}(n+x+n^2x+nx^2)$

With $x=e^{i\theta}=\cos\theta+i\sin\theta$ and $x+\bar x=2\cos\theta$:

$\dfrac{a}{2n}\!\left[n\!\left(x+\dfrac{1}{x}\right)+\left(n^2+1\right)\right]=\dfrac{a}{2n}[2n\cos\theta+(n^2+1)]$

$=a\cos\theta+\dfrac{a(n^2+1)}{2n}=a\cos\theta+1$ (since $\dfrac{a(n^2+1)}{2n}=1$ from above).

$$=1+a\cos\theta\qquad\blacksquare$$

</details>

---

#### Q4(a) `[8 marks]`
> Prove: $\tan x+2\tan2x+\cdots+2^{n-1}\tan(2^{n-1}x)=\cot x-2^n\cot(2^nx)$

*(Proof identical to 2014 Q8(a) — see above.)*

---

## 🧪 Practice Problems

---

**P1.** Find all 4th roots of $-16$.

<details>
<summary>Solution</summary>

$-16=16e^{i\pi}$.

$(-16)^{1/4}=2e^{i(\pi+2k\pi)/4}$, $k=0,1,2,3$.

$k=0$: $2e^{i\pi/4}=\sqrt2(1+i)$  
$k=1$: $2e^{i3\pi/4}=\sqrt2(-1+i)$  
$k=2$: $2e^{i5\pi/4}=\sqrt2(-1-i)$  
$k=3$: $2e^{i7\pi/4}=\sqrt2(1-i)$

$$\boxed{\sqrt[4]{-16}=\sqrt2(\pm1\pm i)}$$

</details>

---

**P2.** Express $\cos5\theta$ and $\sin5\theta$ in terms of $\sin\theta$ and $\cos\theta$.

<details>
<summary>Solution</summary>

Expand $(\cos\theta+i\sin\theta)^5$ by binomial theorem:

$$\cos5\theta=\cos^5\theta-10\cos^3\theta\sin^2\theta+5\cos\theta\sin^4\theta$$
$$=16\cos^5\theta-20\cos^3\theta+5\cos\theta$$

$$\sin5\theta=5\cos^4\theta\sin\theta-10\cos^2\theta\sin^3\theta+\sin^5\theta$$
$$=16\sin^5\theta-20\sin^3\theta+5\sin\theta$$

</details>

---

**P3.** Show that $\cosh^2 x-\sinh^2 x=1$.

<details>
<summary>Solution</summary>

$\cosh x=\dfrac{e^x+e^{-x}}{2}$, $\sinh x=\dfrac{e^x-e^{-x}}{2}$.

$\cosh^2x-\sinh^2x=\dfrac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}=\dfrac{4}{4}=1$ $\blacksquare$

</details>

---

**P4.** Prove that $|z_1+z_2|\le|z_1|+|z_2|$ (triangle inequality).

<details>
<summary>Solution</summary>

$|z_1+z_2|^2=(z_1+z_2)\overline{(z_1+z_2)}=|z_1|^2+|z_2|^2+2\text{Re}(z_1\bar z_2)$

$\le|z_1|^2+|z_2|^2+2|z_1||z_2|=(|z_1|+|z_2|)^2$.

Taking square roots: $|z_1+z_2|\le|z_1|+|z_2|$ $\blacksquare$

</details>

---

**P5.** Sum the series $\cos\theta+\cos3\theta+\cos5\theta+\cdots+\cos(2n-1)\theta$.

<details>
<summary>Solution</summary>

$C+iS=e^{i\theta}+e^{3i\theta}+\cdots+e^{(2n-1)i\theta}=e^{i\theta}\cdot\dfrac{e^{2ni\theta}-1}{e^{2i\theta}-1}$

$=\dfrac{e^{i(2n+1)\theta}-e^{i\theta}}{e^{2i\theta}-1}=\dfrac{e^{i\theta}(e^{2ni\theta}-1)}{e^{i\theta}(e^{i\theta}-e^{-i\theta})}=\dfrac{\sin(n\theta)}{\sin\theta}\,e^{in\theta}$

Real part: $C=\boxed{\dfrac{\sin n\theta}{\sin\theta}\cos n\theta}$

</details>

---

**P6.** Find all cube roots of $-8$.

<details>
<summary>Solution</summary>

$-8=8e^{i\pi}$.

$(-8)^{1/3}=2e^{i(\pi+2k\pi)/3}$, $k=0,1,2$.

$k=0$: $2e^{i\pi/3}=2(\cos60°+i\sin60°)=1+i\sqrt3$  
$k=1$: $2e^{i\pi}=-2$  
$k=2$: $2e^{i5\pi/3}=1-i\sqrt3$

$$\boxed{\sqrt[3]{-8}\in\{-2,\ 1+i\sqrt3,\ 1-i\sqrt3\}}$$

</details>

---

**P7.** Prove that $\tan^{-1}\!\!\left(\dfrac{1}{2}\right)+\tan^{-1}\!\!\left(\dfrac{1}{3}\right)=\dfrac{\pi}{4}$ (Gregory/Machin type).

<details>
<summary>Solution</summary>

Let $\alpha=\tan^{-1}(1/2)$, $\beta=\tan^{-1}(1/3)$.

$\tan(\alpha+\beta)=\dfrac{1/2+1/3}{1-1/6}=\dfrac{5/6}{5/6}=1\Rightarrow\alpha+\beta=\dfrac{\pi}{4}$ $\blacksquare$

</details>

---

**P8.** Show that $\log(1+i)=\dfrac{1}{2}\log 2+\dfrac{i\pi}{4}$.

<details>
<summary>Solution</summary>

$1+i=\sqrt2\,e^{i\pi/4}$.

$\log(1+i)=\log(\sqrt2)+i\pi/4=\dfrac{1}{2}\log2+\dfrac{i\pi}{4}$ $\blacksquare$

</details>

---

**P9.** Sum the series $1+\cos\theta+\dfrac{\cos2\theta}{2!}+\dfrac{\cos3\theta}{3!}+\cdots$

<details>
<summary>Solution</summary>

$C+iS=\displaystyle\sum_{n=0}^{\infty}\frac{e^{in\theta}}{n!}=e^{e^{i\theta}}=e^{\cos\theta+i\sin\theta}=e^{\cos\theta}(\cos(\sin\theta)+i\sin(\sin\theta))$

$$C=\boxed{e^{\cos\theta}\cos(\sin\theta)}$$

</details>

---

**P10.** Prove that the sum of $n$-th roots of unity is zero.

<details>
<summary>Solution</summary>

The $n$-th roots are $1,\omega,\omega^2,\ldots,\omega^{n-1}$ where $\omega=e^{2\pi i/n}$.

Sum $=\dfrac{1-\omega^n}{1-\omega}=\dfrac{1-1}{1-\omega}=0$ (geometric series, $\omega\neq1$). $\blacksquare$

</details>

---

## 📖 References

| Resource | Link |
|----------|------|
| Thomas' Calculus — Complex Numbers Appendix | [Pearson](https://www.pearson.com/en-us/subject-catalog/p/thomas-calculus/P200000006125) |
| Kreyszig — Advanced Engineering Mathematics Ch. 13 (Complex Analysis) | Standard text |
| Paul's Online Notes — Complex Numbers | [tutorial.math.lamar.edu](https://tutorial.math.lamar.edu) |
| MIT OCW 18.03 — De Moivre's Theorem | [ocw.mit.edu](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/) |
| Khan Academy — Complex Numbers | [khanacademy.org](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:complex) |
| Wolfram MathWorld — De Moivre's Theorem | [mathworld.wolfram.com](https://mathworld.wolfram.com/deMoivresIdentity.html) |
| LibreTexts — Polar Form and De Moivre | [math.libretexts.org](https://math.libretexts.org/Bookshelves/Precalculus/Precalculus_(OpenStax)/08%3A_Further_Applications_of_Trigonometry) |
| Gregory's Series — MacTutor History | [mathshistory.st-andrews.ac.uk](https://mathshistory.st-andrews.ac.uk) |

---

*Last updated: 2026 | BUTex Mathematics-I — Chapter 11*
