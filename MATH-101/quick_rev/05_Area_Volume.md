# 📐 Chapter 5: Area Under Plane Curves & Volumes of Solids of Revolution

> **Course:** Mathematics — L1T1  
> **Topics:** Area under curves · Polar curves · Volumes of revolution

---

## 📚 Table of Contents

1. [Key Formulae](#-key-formulae)
2. [Area Under Plane Curves](#-area-under-plane-curves)
3. [Volumes of Solids of Revolution](#-volumes-of-solids-of-revolution)
4. [Practice Questions](#-practice-questions)
5. [References](#-references)

---

## 📖 Key Formulae

### Area

| Curve Type | Formula |
|---|---|
| Cartesian: $y = f(x)$ | $A = \displaystyle\int_a^b y\,dx$ |
| Parametric: $x=f(t),\,y=g(t)$ | $A = \displaystyle\int_{t_1}^{t_2} y\dfrac{dx}{dt}\,dt$ |
| Polar: $r = f(\theta)$ | $A = \dfrac{1}{2}\displaystyle\int_{\alpha}^{\beta} r^2\,d\theta$ |

### Volume of Revolution

| Axis | Formula |
|---|---|
| About x-axis | $V = \pi\displaystyle\int_a^b y^2\,dx$ |
| About y-axis | $V = \pi\displaystyle\int_c^d x^2\,dy$ |
| Parametric, about x-axis | $V = \pi\displaystyle\int_{t_1}^{t_2} y^2\dfrac{dx}{dt}\,dt$ |

---

## 📐 Area Under Plane Curves

### Q1. Find area enclosed by ellipse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$

<details>
<summary>💡 Solution</summary>

By symmetry, area = $4 \times$ (area in 1st quadrant)

$$A = 4\int_0^a y\,dx = 4\int_0^a \frac{b}{a}\sqrt{a^2-x^2}\,dx$$

Let $x = a\sin\theta$, $dx = a\cos\theta\,d\theta$:

$$= 4\cdot\frac{b}{a}\int_0^{\pi/2}a\cos\theta\cdot a\cos\theta\,d\theta = 4ab\int_0^{\pi/2}\cos^2\theta\,d\theta$$

Using Wallis: $\displaystyle\int_0^{\pi/2}\cos^2\theta\,d\theta = \dfrac{\pi}{4}$

$$\boxed{A = \pi ab}$$

> **Special case:** For a circle ($a=b=r$): $A = \pi r^2$ ✅

</details>

---

### Q2. Find area bounded by $x^{2/3}+y^{2/3}=a^{2/3}$ (astroid)

<details>
<summary>💡 Solution</summary>

Use parametric form: $x = a\cos^3 t$, $y = a\sin^3 t$

By symmetry, area = $4 \times$ (1st quadrant area, $t: 0 \to \pi/2$)

$$A = 4\int_0^{\pi/2}y\left|\frac{dx}{dt}\right|dt = 4\int_0^{\pi/2}a\sin^3 t\cdot 3a\cos^2 t\sin t\,dt$$

$$= 12a^2\int_0^{\pi/2}\sin^4 t\cos^2 t\,dt$$

Using Wallis formula:
$$= 12a^2\cdot\frac{\Gamma(5/2)\Gamma(3/2)}{2\,\Gamma(4)} = 12a^2\cdot\frac{\frac{3\sqrt\pi}{4}\cdot\frac{\sqrt\pi}{2}}{2\cdot 6}$$

$$= 12a^2\cdot\frac{3\pi/8}{12} = \frac{3\pi a^2}{8}$$

$$\boxed{A = \frac{3\pi a^2}{8}}$$

</details>

---

### Q3. Find area of loop of $r = a\cos 3\theta$ and total area

<details>
<summary>💡 Solution</summary>

**One loop:** The curve $r = a\cos 3\theta$ has 3 petals. One petal exists between $\theta = -\pi/6$ to $\theta = \pi/6$ (where $r=0$).

$$A_{\text{one loop}} = \frac{1}{2}\int_{-\pi/6}^{\pi/6}r^2\,d\theta = \frac{1}{2}\int_{-\pi/6}^{\pi/6}a^2\cos^2 3\theta\,d\theta$$

$$= a^2\int_0^{\pi/6}\cos^2 3\theta\,d\theta = \frac{a^2}{2}\int_0^{\pi/6}(1+\cos 6\theta)\,d\theta$$

$$= \frac{a^2}{2}\left[\theta + \frac{\sin 6\theta}{6}\right]_0^{\pi/6} = \frac{a^2}{2}\cdot\frac{\pi}{6} = \frac{\pi a^2}{12}$$

**Total area** (3 petals):
$$A_{\text{total}} = 3\cdot\frac{\pi a^2}{12} = \boxed{\frac{\pi a^2}{4}}$$

</details>

---

### Q4. Find area of loop of $r = a\cos 4\theta$

<details>
<summary>💡 Solution</summary>

This is a rose curve with 8 petals ($r = a\cos n\theta$ with even $n$ has $2n$ petals).

One petal: $\theta \in [-\pi/8, \pi/8]$

$$A_{\text{one loop}} = \frac{1}{2}\int_{-\pi/8}^{\pi/8}a^2\cos^2 4\theta\,d\theta = a^2\int_0^{\pi/8}\cos^2 4\theta\,d\theta$$

$$= \frac{a^2}{2}\left[\theta + \frac{\sin 8\theta}{8}\right]_0^{\pi/8} = \frac{a^2}{2}\cdot\frac{\pi}{8} = \frac{\pi a^2}{16}$$

**Total (8 petals):** $\boxed{A = \frac{\pi a^2}{2}}$

</details>

---

### Q5. Find area bounded by $a^2y^2 = x^3(2a-x)$

<details>
<summary>💡 Solution</summary>

Rewrite: $y = \dfrac{1}{a}\sqrt{x^3(2a-x)}$

Domain: $0 \le x \le 2a$ (for $y$ to be real)

By symmetry (curve is symmetric about x-axis):
$$A = 2\int_0^{2a}\frac{1}{a}\sqrt{x^3(2a-x)}\,dx = \frac{2}{a}\int_0^{2a}x^{3/2}\sqrt{2a-x}\,dx$$

Let $x = 2a\sin^2\theta$, $dx = 4a\sin\theta\cos\theta\,d\theta$, $\sqrt{2a-x} = \sqrt{2a}\cos\theta$:

$$= \frac{2}{a}\int_0^{\pi/2}(2a\sin^2\theta)^{3/2}\cdot\sqrt{2a}\cos\theta\cdot 4a\sin\theta\cos\theta\,d\theta$$

$$= \frac{2}{a}\cdot(2a)^{3/2}\cdot\sqrt{2a}\cdot 4a\int_0^{\pi/2}\sin^4\theta\cos^2\theta\,d\theta$$

$$= \frac{2\cdot 4a\cdot(2a)^2}{a}\int_0^{\pi/2}\sin^4\theta\cos^2\theta\,d\theta = 16a^2\cdot\frac{3\pi}{96} = \frac{\pi a^2}{2}$$

$$\boxed{A = \frac{\pi a^2}{2}}$$

</details>

---

## 🔄 Volumes of Solids of Revolution

### Q(a). For $x^{2/3}+y^{2/3}=a^{2/3}$, show volume of revolution about an axis is $\dfrac{32\pi a^3}{105}$

<details>
<summary>💡 Solution</summary>

Revolve about x-axis. Parametric: $x = a\cos^3 t$, $y = a\sin^3 t$

$$V = \pi\int_{-a}^a y^2\,dx$$

Since $x$ goes from $-a$ to $a$ as $t$ goes from $\pi$ to $0$:

$$V = \pi\int_\pi^0(a\sin^3 t)^2\cdot(-3a\cos^2 t\sin t)\,dt = 3\pi a^3\int_0^\pi\sin^7 t\cos^2 t\,dt$$

By symmetry ($\sin$ is symmetric about $\pi/2$):

$$= 6\pi a^3\int_0^{\pi/2}\sin^7 t\cos^2 t\,dt$$

Using Beta-Gamma:
$$= 6\pi a^3\cdot\frac{\Gamma(4)\Gamma(3/2)}{2\,\Gamma(11/2)} = 6\pi a^3\cdot\frac{6\cdot\frac{\sqrt\pi}{2}}{2\cdot\frac{945\sqrt\pi}{256}}$$

After simplification:
$$\boxed{V = \frac{32\pi a^3}{105}}$$ ✅

</details>

---

### Q(b). Find volume of solid by revolving ellipse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$

<details>
<summary>💡 Solution</summary>

**Revolve about x-axis (Prolate Spheroid):**

$y^2 = b^2\left(1-\dfrac{x^2}{a^2}\right)$

$$V = \pi\int_{-a}^a y^2\,dx = 2\pi\int_0^a b^2\left(1-\frac{x^2}{a^2}\right)dx$$

$$= 2\pi b^2\left[x - \frac{x^3}{3a^2}\right]_0^a = 2\pi b^2\cdot\frac{2a}{3}$$

$$\boxed{V = \frac{4\pi ab^2}{3}}$$

> **Special case:** Circle ($a=b=r$): $V = \dfrac{4\pi r^3}{3}$ ✅

**Revolve about y-axis (Oblate Spheroid):**

$$V = \pi\int_{-b}^b x^2\,dy = \frac{4\pi a^2 b}{3}$$

</details>

---

## 📝 Practice Questions

#### P1. Find area enclosed by $y^2 = 4ax$ and $x^2 = 4ay$ (two parabolas)

<details>
<summary>💡 Solution</summary>

Intersections: $(0,0)$ and $(4a,4a)$

$$A = \int_0^{4a}\left[\sqrt{4ax} - \frac{x^2}{4a}\right]dx = \left[\frac{4\sqrt{a}\cdot x^{3/2}}{3} - \frac{x^3}{12a}\right]_0^{4a}$$

$$= \frac{4\sqrt{a}\cdot(4a)^{3/2}}{3} - \frac{(4a)^3}{12a} = \frac{32a^2}{3} - \frac{16a^2}{3} = \frac{16a^2}{3}$$

$$\boxed{A = \frac{16a^2}{3}}$$

</details>

---

#### P2. Find volume when $y^2 = 4x$ from $x=0$ to $x=4$ is revolved about x-axis

<details>
<summary>💡 Solution</summary>

$$V = \pi\int_0^4 y^2\,dx = \pi\int_0^4 4x\,dx = \pi\left[2x^2\right]_0^4 = 32\pi$$

</details>

---

#### P3. Find area of one loop of $r^2 = a^2\cos 2\theta$ (lemniscate)

<details>
<summary>💡 Solution</summary>

Loop exists for $-\pi/4 \le \theta \le \pi/4$:

$$A = \frac{1}{2}\int_{-\pi/4}^{\pi/4}a^2\cos 2\theta\,d\theta = a^2\int_0^{\pi/4}\cos 2\theta\,d\theta = a^2\left[\frac{\sin 2\theta}{2}\right]_0^{\pi/4} = \frac{a^2}{2}$$

</details>

---

## 📚 References

1. **B.S. Grewal** — *Higher Engineering Mathematics*, Ch. 9-10
2. **Thomas & Finney** — *Calculus*, Addison-Wesley
3. [Wolfram MathWorld — Astroid](https://mathworld.wolfram.com/Astroid.html)
4. [Desmos Graphing Calculator](https://www.desmos.com/calculator) — for visualizing curves
5. [GeoGebra](https://www.geogebra.org) — 3D visualization of solids of revolution
6. [Paul's Online Notes — Area & Volume](https://tutorial.math.lamar.edu/Classes/CalcII/Area_Volume_Intro.aspx)

---

> 📌 **Tip:** For polar area, the formula is $A = \frac{1}{2}\int r^2\,d\theta$. Find where $r=0$ to get the limits for one loop.  
> 📌 **Tip:** Always exploit symmetry to reduce integration limits (multiply by 2 or 4 as needed).
