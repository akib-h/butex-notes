# Chapter 6: Applications of Integration

> **Covered in:** Part A, Q4 of every exam  
> **Topics:** Area under/between curves, arc length, volume of revolution, polar curves

---

## 📖 Theory

### 6.1 Area Between Curves

$$A = \int_a^b \left[f(x) - g(x)\right]dx \quad \text{where } f(x) \geq g(x) \text{ on } [a,b]$$

![Area between curves](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Area_between_curves.svg/400px-Area_between_curves.svg.png)  
*Figure 6.1 — Area between two curves (Wikimedia Commons)*

### 6.2 Arc Length

**Cartesian:** $L = \displaystyle\int_a^b\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx$

**Parametric:** $L = \displaystyle\int_\alpha^\beta\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2}\,dt$

**Polar:** $L = \displaystyle\int_\alpha^\beta\sqrt{r^2+\left(\frac{dr}{d\theta}\right)^2}\,d\theta$

---

### 6.3 Volume of Revolution

**About the x-axis (disk method):**
$$V = \pi\int_a^b [f(x)]^2\,dx$$

**About the y-axis (shell method):**
$$V = 2\pi\int_a^b x\cdot f(x)\,dx$$

**Washer method (shell between two curves):**
$$V = \pi\int_a^b\left[f(x)^2 - g(x)^2\right]dx$$

---

### 6.4 Area in Polar Coordinates

$$A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta$$

For a **cardioid** $r = a(1+\cos\theta)$:

$$A = \frac{3\pi a^2}{2}, \qquad L = 8a$$

### 6.5 Area of an Astroid

The **astroid** $x^{2/3}+y^{2/3}=a^{2/3}$ has:
$$A = \frac{3\pi a^2}{8}$$

Parametrically: $x=a\cos^3t$, $y=a\sin^3t$

---

## 📝 Past Exam Questions & Solutions

---

### ✏️ 2019 — Q4(b)

Determine the perimeter of the cardioid $r = 4(1+\cos\theta)$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

$$L = \int_0^{2\pi}\sqrt{r^2+\left(\frac{dr}{d\theta}\right)^2}\,d\theta$$

$r = 4(1+\cos\theta)$, $\dfrac{dr}{d\theta} = -4\sin\theta$

$$r^2 + \left(\frac{dr}{d\theta}\right)^2 = 16(1+\cos\theta)^2 + 16\sin^2\theta$$
$$= 16\left(1+2\cos\theta+\cos^2\theta+\sin^2\theta\right) = 16(2+2\cos\theta) = 32(1+\cos\theta)$$

Using $1+\cos\theta = 2\cos^2(\theta/2)$:

$$\sqrt{32\cdot2\cos^2(\theta/2)} = 8\left|\cos\frac{\theta}{2}\right|$$

$$L = \int_0^{2\pi}8\left|\cos\frac{\theta}{2}\right|d\theta = 2\cdot\int_0^\pi 8\cos\frac{\theta}{2}\,d\theta = 16\left[2\sin\frac{\theta}{2}\right]_0^\pi = 16\cdot2 = \boxed{32}$$

</details>

---

### ✏️ 2019 — Q4(c)

Estimate the area of the region bounded by the astroid $x^{2/3}+y^{2/3}=a^{2/3}$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

Parametrically: $x = a\cos^3t$, $y = a\sin^3t$, $t\in[0,2\pi]$.

By symmetry, total area = $4\times$ (area in first quadrant):

$$A = 4\int_0^{\pi/2} y\,\frac{dx}{dt}\cdot(-dt) = 4\int_0^{\pi/2} y\left(-\frac{dx}{dt}\right)dt$$

$\dfrac{dx}{dt} = -3a\cos^2t\sin t$

$$A = 4\int_0^{\pi/2}a\sin^3t\cdot 3a\cos^2t\sin t\,dt = 12a^2\int_0^{\pi/2}\sin^4t\cos^2t\,dt$$

Using the Beta function formula: $\displaystyle\int_0^{\pi/2}\sin^m t\cos^n t\,dt = \frac{(m-1)!!(n-1)!!}{(m+n)!!}\cdot\frac{\pi}{2}$ (both even):

$$= 12a^2\cdot\frac{3!!1!!}{6!!}\cdot\frac{\pi}{2} = 12a^2\cdot\frac{3\cdot1}{6\cdot4\cdot2}\cdot\frac{\pi}{2} = 12a^2\cdot\frac{3}{48}\cdot\frac{\pi}{2} = 12a^2\cdot\frac{\pi}{32} = \boxed{\frac{3\pi a^2}{8}}$$

</details>

---

### ✏️ 2018 — Q4(b)

Determine the perimeter of the hypocycloid $x^{2/3}+y^{2/3}=a^{2/3}$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

Parametric: $x=a\cos^3t$, $y=a\sin^3t$

$$\frac{dx}{dt} = -3a\cos^2t\sin t, \quad \frac{dy}{dt} = 3a\sin^2t\cos t$$

$$\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2} = 3a\sqrt{\cos^4t\sin^2t+\sin^4t\cos^2t} = 3a|\sin t\cos t| = \frac{3a}{2}|\sin 2t|$$

$$L = 4\int_0^{\pi/2}\frac{3a}{2}\sin 2t\,dt = 6a\left[-\frac{\cos 2t}{2}\right]_0^{\pi/2} = 6a\cdot\left[\frac{1}{2}+\frac{1}{2}\right] = \boxed{6a}$$

</details>

---

### ✏️ 2018 — Q4(c)

Estimate the area bounded by the cardioid $r = 1+\cos\theta$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

$$A = \frac{1}{2}\int_0^{2\pi}r^2\,d\theta = \frac{1}{2}\int_0^{2\pi}(1+\cos\theta)^2\,d\theta$$

$$= \frac{1}{2}\int_0^{2\pi}(1+2\cos\theta+\cos^2\theta)\,d\theta$$

$$= \frac{1}{2}\left[2\pi + 0 + \int_0^{2\pi}\frac{1+\cos2\theta}{2}\,d\theta\right]$$

$$= \frac{1}{2}\left[2\pi + \pi\right] = \frac{3\pi}{2}$$

General formula: $r=a(1+\cos\theta)$ gives $A = \dfrac{3\pi a^2}{2}$. Here $a=1$, so $A=\dfrac{3\pi}{2}$. ✓

</details>

---

### ✏️ 2017 — Q4(a)

Find a reduction formula for $\displaystyle\int\sin^mx\cos^nx\,dx$ and evaluate $\displaystyle\int_0^{\pi/2}\sin^4x\cos^3x\,dx$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Reduction formula for $I_{m,n} = \int_0^{\pi/2}\sin^m x\cos^n x\,dx$:**

$$I_{m,n} = \frac{(m-1)!!(n-1)!!}{(m+n)!!}\times\begin{cases}\dfrac{\pi}{2} & \text{both even}\\1 & \text{otherwise}\end{cases}$$

**Evaluate $I_{4,3}$** ($m=4$, $n=3$; $n$ is odd, so multiply by 1):

$$I_{4,3} = \frac{3!!\cdot2!!}{7!!} = \frac{3\cdot1\cdot2}{7\cdot5\cdot3\cdot1} = \frac{6}{105} = \frac{2}{35}$$

**Direct calculation:**

$$\int_0^{\pi/2}\sin^4x\cos^3x\,dx = \int_0^{\pi/2}\sin^4x(1-\sin^2x)\cos x\,dx$$

Let $u=\sin x$:
$$= \int_0^1 u^4(1-u^2)\,du = \left[\frac{u^5}{5}-\frac{u^7}{7}\right]_0^1 = \frac{1}{5}-\frac{1}{7} = \frac{2}{35}$$ ✓

</details>

---

### ✏️ 2017 — Q4(b)

Find the volume of the solid generated by revolving the area enclosed by $y=2x^2$, $y=0$, $x=0$, $x=5$ about the y-axis. **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Shell method** (about y-axis):

$$V = 2\pi\int_0^5 x\cdot y\,dx = 2\pi\int_0^5 x\cdot 2x^2\,dx = 4\pi\int_0^5 x^3\,dx$$

$$= 4\pi\left[\frac{x^4}{4}\right]_0^5 = 4\pi\cdot\frac{625}{4} = 625\pi$$

</details>

---

### ✏️ 2017 — Q4(c)

Find the whole area bounded by the astroid $x^{2/3}+y^{2/3}=4$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

Here $a^{2/3}=4$, so $a = 4^{3/2} = 8$.

$$A = \frac{3\pi a^2}{8} = \frac{3\pi\cdot64}{8} = 24\pi$$

</details>

---

### ✏️ 2016 — Q3(a)

Find the area of the region enclosed by $x^2 = y$ and $x = y-2$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

Find intersection: $x^2 = y$ and $y = x+2$:

$x^2 = x+2 \Rightarrow x^2-x-2=0 \Rightarrow (x-2)(x+1)=0$

$x=-1, x=2$. For $x\in[-1,2]$: upper curve $y=x+2$, lower $y=x^2$.

$$A = \int_{-1}^2\left[(x+2)-x^2\right]dx = \left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^2$$

$$= \left(2+4-\frac{8}{3}\right)-\left(\frac{1}{2}-2+\frac{1}{3}\right) = \frac{10}{3}-\left(-\frac{7}{6}\right) = \frac{10}{3}+\frac{7}{6} = \frac{20+7}{6} = \frac{27}{6} = \boxed{\frac{9}{2}}$$

</details>

---

### ✏️ 2016 — Q3(b)

Find the arc length of $x=\frac{1}{3}t^3$, $y=\frac{1}{2}t^2$ for $0\leq t\leq1$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

$\dfrac{dx}{dt} = t^2$, $\dfrac{dy}{dt} = t$

$$L = \int_0^1\sqrt{t^4+t^2}\,dt = \int_0^1 t\sqrt{t^2+1}\,dt$$

Let $u=t^2+1$, $du=2t\,dt$:

$$= \frac{1}{2}\int_1^2\sqrt{u}\,du = \frac{1}{2}\cdot\frac{2}{3}\left[u^{3/2}\right]_1^2 = \frac{1}{3}(2\sqrt{2}-1) = \frac{2\sqrt{2}-1}{3}$$

</details>

---

### ✏️ 2016 — Q4(c)

Evaluate $\displaystyle\int_{-\pi/2}^{\pi/2}(x^3+\sin^5x\cos^3x)\,dx$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Both $x^3$ and $\sin^5x\cos^3x$ are **odd functions** (check: $f(-x)=-f(x)$):

- $(-x)^3 = -x^3$ ✓
- $\sin^5(-x)\cos^3(-x) = -\sin^5x\cos^3x$ ✓

For any odd function $f$: $\displaystyle\int_{-a}^a f(x)\,dx = 0$

$$\int_{-\pi/2}^{\pi/2}(x^3+\sin^5x\cos^3x)\,dx = 0$$

</details>

---

## 🧪 Practice Problems

---

**P1.** Find the area enclosed by $y=x^2$ and $y=4$.

<details><summary>Solution</summary>

Intersect: $x=\pm2$. $A=\int_{-2}^2(4-x^2)dx=\left[4x-x^3/3\right]_{-2}^2=2(8-8/3)=32/3$.

</details>

---

**P2.** Find the arc length of $y=\frac{2}{3}x^{3/2}$ from $x=0$ to $x=3$.

<details><summary>Solution</summary>

$y'=x^{1/2}$. $L=\int_0^3\sqrt{1+x}\,dx=\left[\frac{2}{3}(1+x)^{3/2}\right]_0^3=\frac{2}{3}(8-1)=14/3$.

</details>

---

**P3.** Find the volume when $y=\sqrt{x}$, $x=4$, $y=0$ is revolved about the x-axis.

<details><summary>Solution</summary>

$V=\pi\int_0^4 x\,dx=\pi\left[x^2/2\right]_0^4=8\pi$.

</details>

---

**P4.** Find the area enclosed by one loop of $r=\sin2\theta$.

<details><summary>Solution</summary>

One loop: $\theta\in[0,\pi/2]$. $A=\frac{1}{2}\int_0^{\pi/2}\sin^22\theta\,d\theta=\frac{1}{2}\cdot\frac{\pi}{4}=\frac{\pi}{8}$.

</details>

---

**P5.** Find the volume obtained by rotating $y=e^x$, $y=0$, $x=0$, $x=1$ about the x-axis.

<details><summary>Solution</summary>

$V=\pi\int_0^1 e^{2x}dx=\pi\left[\frac{e^{2x}}{2}\right]_0^1=\frac{\pi}{2}(e^2-1)$.

</details>

---

**P6.** Find the area inside $r=2\cos\theta$ (circle).

<details><summary>Solution</summary>

$A=\frac{1}{2}\int_{-\pi/2}^{\pi/2}4\cos^2\theta\,d\theta=2\cdot\frac{\pi}{2}=\pi$.

</details>

---

**P7.** Find the surface area generated by rotating $y=x^3$ ($0\leq x\leq1$) about x-axis.

<details><summary>Solution</summary>

$S=2\pi\int_0^1 x^3\sqrt{1+9x^4}dx$. Let $u=1+9x^4$: $S=\frac{2\pi}{36}\cdot\frac{2}{3}\left[(1+9x^4)^{3/2}\right]_0^1=\frac{\pi}{27}(10\sqrt{10}-1)$.

</details>

---

**P8.** Find the area between $y=\sin x$ and $y=\cos x$ for $x\in[0,\pi/2]$.

<details><summary>Solution</summary>

They cross at $x=\pi/4$. $A=\int_0^{\pi/4}(\cos x-\sin x)dx+\int_{\pi/4}^{\pi/2}(\sin x-\cos x)dx=2(\sqrt{2}-1)$.

</details>

---

**P9.** Find the arc length of the cardioid $r=a(1+\cos\theta)$.

<details><summary>Solution</summary>

$dr/d\theta=-a\sin\theta$. $\sqrt{r^2+(dr/d\theta)^2}=a\sqrt{2+2\cos\theta}=2a|\cos(\theta/2)|$.  
$L=\int_0^{2\pi}2a|\cos(\theta/2)|d\theta=8a$.

</details>

---

**P10.** Find the area of the region bounded by $y=x^3$, $x=2$, and $y=0$.

<details><summary>Solution</summary>

$A=\int_0^2 x^3dx=[x^4/4]_0^2=4$.

</details>

---

## 📖 References

1. **Thomas' Calculus** — Ch. 6: Applications of Definite Integrals; Ch. 11: Parametric Equations
2. **Stewart's Calculus** — Ch. 6: Applications of Integration; Ch. 10: Parametric/Polar
3. **Paul's Online Notes** — [Arc Length](https://tutorial.math.lamar.edu/Classes/CalcII/ArcLength.aspx) | [Area in Polar](https://tutorial.math.lamar.edu/Classes/CalcII/PolarArea.aspx)
4. **Khan Academy** — [Area Between Curves](https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-4/v/area-between-curves)
5. **MIT OCW 18.01** — [Applications of Integration](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-4-techniques-of-integration/)
6. **Wolfram MathWorld** — [Astroid](https://mathworld.wolfram.com/Astroid.html) | [Cardioid](https://mathworld.wolfram.com/Cardioid.html)
