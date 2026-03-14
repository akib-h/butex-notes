---
subject: MATH-101
topic: Area Enclosed by Plane Curves
date: 2026-03-14
tags: [notes, MATH-101, integration, area, plane-curves, polar, cardioid, hypocycloid]
---

# 08 — Area Enclosed by Plane Curves

> **Reference:** Motin Sir Book — Chapter 16 | Howard Anton — Section 6.1  
> **Online:** [Paul's Online Notes — Area Between Curves](https://tutorial.math.lamar.edu/Classes/CalcI/AreaBetweenCurves.aspx)

---

## 1. Area Formulas

### 1.1 Area Under a Curve (X-axis)

For the curve $y = f(x)$ between $x = a$ and $x = b$ (above the $x$-axis):

$$\boxed{A = \int_a^b f(x)\,dx = \int_a^b y\,dx}$$

```
Y ↑   y = f(x)
  |  ///////////
  | ///////////////
  |/////////////////
  +────────────────→ X
   x=a        x=b
```

### 1.2 Area Between Two Curves (X-axis reference)

$$\boxed{A = \int_a^b [f_1(x) - f_2(x)]\,dx}$$

where $f_1(x) \geq f_2(x)$ on $[a, b]$ (upper curve minus lower curve).

### 1.3 Area Between Two Curves (Y-axis reference)

$$\boxed{A = \int_c^d [x_1(y) - x_2(y)]\,dy}$$

where $x_1(y)$ is the right curve and $x_2(y)$ is the left curve.

### 1.4 Area in Polar Coordinates

For the curve $r = f(\theta)$:

$$\boxed{A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta}$$

**Derivation:** A thin sector of angle $d\theta$ has area $\frac{1}{2}r^2\,d\theta$ (like a triangle with base $r$ and arc $r\,d\theta$). Integrating over all angles gives the total area.

---

## 2. Important Curves to Know

### 2.1 Hypocycloid (Astroid)

**Standard form:** $x^{2/3} + y^{2/3} = a^{2/3}$

**Parametric:** $x = a\cos^3 t$, $y = a\sin^3 t$, $t \in [0, 2\pi]$

```
       (0,a)
         │
(-a,0)───┼───(a,0)
         │
       (0,-a)
```

**Total Area** = $\frac{3\pi a^2}{8}$ (derived below)

### 2.2 Cardioid Forms

| Equation | Orientation | Max extent |
|:---------|:-----------|:-----------|
| $r = a(1+\cos\theta)$ | Rightward, symmetric x-axis | $(2a, 0)$ |
| $r = a(1-\cos\theta)$ | Leftward, symmetric x-axis | $(-2a, \pi)$ |
| $r = a(1+\sin\theta)$ | Upward, symmetric y-axis | $(0, 2a)$ |
| $r = a(1-\sin\theta)$ | Downward, symmetric y-axis | $(0, -2a)$ |

All cardioids have **area** $= \frac{3\pi a^2}{2}$.

---

## 3. Worked Examples

### Example 1: Area of Hypocycloid $x^{2/3}+y^{2/3}=a^{2/3}$

**Solution:**

By symmetry, $A = 4 \times$ (area of OAB in first quadrant).

$$A = 4\int_0^a y\,dx$$

Using $x = a\cos^3 t$, $y = a\sin^3 t$ (when $x=0$, $t=\pi/2$; when $x=a$, $t=0$):

$$dx = -3a\cos^2 t\sin t\,dt$$

$$A = 4\int_{\pi/2}^0 a\sin^3 t\cdot(-3a\cos^2 t\sin t)\,dt = 12a^2\int_0^{\pi/2}\sin^4 t\cos^2 t\,dt$$

Applying Walli's formula (Topic 04): $p=4$, $q=2$, both even:

$$= 12a^2\cdot\frac{1}{2}\beta\!\left(\frac{5}{2},\frac{3}{2}\right) = 12a^2\cdot\frac{\Gamma\!\left(\frac{5}{2}\right)\Gamma\!\left(\frac{3}{2}\right)}{2\,\Gamma(4)}$$

$$\Gamma\!\left(\frac{5}{2}\right) = \frac{3}{2}\cdot\frac{1}{2}\sqrt{\pi} = \frac{3\sqrt{\pi}}{4}, \quad \Gamma\!\left(\frac{3}{2}\right) = \frac{\sqrt{\pi}}{2}, \quad \Gamma(4) = 6$$

$$A = 12a^2\cdot\frac{\frac{3\sqrt{\pi}}{4}\cdot\frac{\sqrt{\pi}}{2}}{2\cdot 6} = 12a^2\cdot\frac{\frac{3\pi}{8}}{12} = 12a^2\cdot\frac{3\pi}{96} = \boxed{\frac{3\pi a^2}{8}}$$

> **Alternatively**, using Walli's directly: $\int_0^{\pi/2}\sin^4 t\cos^2 t\,dt = \frac{3}{2\cdot 4\cdot 6}\cdot\frac{1}{2}\cdot\frac{\pi}{2}\cdot\ldots$  
> Pattern: $12a^2 \times \frac{3\cdot1}{6\cdot4\cdot2}\cdot\frac{\pi}{2} = \frac{3\pi a^2}{8}$

---

### Example 2: Area of Cardioid $r = 2(1+\cos\theta)$

**Solution:**

The cardioid is symmetric about the $x$-axis, so:

$$A = 2\times\frac{1}{2}\int_0^\pi r^2\,d\theta = \int_0^\pi 4(1+\cos\theta)^2\,d\theta$$

$$= 4\int_0^\pi(1+2\cos\theta+\cos^2\theta)\,d\theta$$

$$= 4\int_0^\pi\left(1 + 2\cos\theta + \frac{1+\cos 2\theta}{2}\right)d\theta$$

$$= 4\left[\theta + 2\sin\theta + \frac{\theta}{2} + \frac{\sin 2\theta}{4}\right]_0^\pi$$

$$= 4\left[\pi + 0 + \frac{\pi}{2} + 0 - 0\right] = 4\cdot\frac{3\pi}{2} = \boxed{6\pi}$$

Using $a=2$: Area $= \frac{3\pi a^2}{2} = \frac{3\pi\cdot4}{2} = 6\pi$ ✓

Using Wallis: $(1+\cos\theta)^2$ at $\theta \to 0$ approach gives same result.

---

### Example 3: Area bounded by two parabolas

$$y^2 = 4a(x+a) \quad\text{and}\quad y^2 = 4b(b-x)$$

**Solution:**

Find intersection: $4a(x+a) = 4b(b-x)$

$$a(x+a) = b(b-x) \Rightarrow ax + a^2 = b^2 - bx \Rightarrow x(a+b) = b^2-a^2 \Rightarrow x = b-a$$

At $x = b-a$: $y^2 = 4a(b-a+a) = 4ab$, so $y = \pm2\sqrt{ab}$.

The region is bounded by the two curves between $x=-a$ and $x=b$, with intersection at $x=b-a$.

$$A = 2\times[\text{Area of EBC} + \text{Area of EAC}]$$

$$= 2\left[\int_{-a}^{b-a}\sqrt{4a(a+x)}\,dx + \int_{b-a}^b\sqrt{4b(b-x)}\,dx\right]$$

$$= 2\left[2\sqrt{a}\int_{-a}^{b-a}(a+x)^{1/2}\,dx + 2\sqrt{b}\int_{b-a}^b(b-x)^{1/2}\,dx\right]$$

$$= 4\sqrt{a}\left[\frac{2}{3}(a+x)^{3/2}\right]_{-a}^{b-a} + 4\sqrt{b}\left[-\frac{2}{3}(b-x)^{3/2}\right]_{b-a}^b$$

$$= \frac{8\sqrt{a}}{3}(b)^{3/2} + \frac{8\sqrt{b}}{3}(a)^{3/2} = \frac{8}{3}(\sqrt{a}\cdot b^{3/2} + \sqrt{b}\cdot a^{3/2})$$

$$= \frac{8}{3}\sqrt{ab}(b+a) = \boxed{\frac{8}{3}\sqrt{ab}(a+b) \text{ sq. units}}$$

---

### Example 4: Area enclosed by $y^2 = 4x$ and $y = 2x-4$

**Step 1:** Find intersections.

$y = 2x-4 \Rightarrow x = \frac{y+4}{2}$

On $y^2 = 4x$: $x = \frac{y^2}{4}$

$$\frac{y^2}{4} = \frac{y+4}{2} \Rightarrow y^2 = 2y+8 \Rightarrow y^2-2y-8=0 \Rightarrow (y-4)(y+2)=0$$

$y = 4$ or $y = -2$

**Step 2:** Area (using $y$ integration — easier):

$$A = \int_{-2}^4\left[x_{\text{right}} - x_{\text{left}}\right]dy = \int_{-2}^4\left[\frac{y+4}{2} - \frac{y^2}{4}\right]dy$$

$$= \left[\frac{y^2}{4}+2y-\frac{y^3}{12}\right]_{-2}^4 = \left(4+8-\frac{64}{12}\right)-\left(1-4+\frac{8}{12}\right) = \left(12-\frac{16}{3}\right)-\left(-3+\frac{2}{3}\right) = \boxed{9}$$

---

## 4. Area of Common Curves (Reference Table)

| Curve | Equation | Area |
|:------|:---------|:-----|
| Hypocycloid (astroid) | $x^{2/3}+y^{2/3}=a^{2/3}$ | $\frac{3\pi a^2}{8}$ |
| Cardioid | $r=a(1\pm\cos\theta)$ or $r=a(1\pm\sin\theta)$ | $\frac{3\pi a^2}{2}$ |
| Circle | $r=a$ | $\pi a^2$ |
| Lemniscate | $r^2=a^2\cos 2\theta$ | $a^2$ |
| Rose (3 petals) | $r=a\cos 3\theta$ | $\frac{\pi a^2}{4}$ |

---

## 5. Tips for Area Problems

1. **Sketch the curve first** — identify which curve is upper/lower or left/right.
2. **Find intersections** carefully — they give the limits of integration.
3. **Choose $x$ or $y$ integration** — whichever makes the algebra simpler.
4. **For polar curves** — use $A = \frac{1}{2}\int r^2\,d\theta$ and use symmetry.
5. **Use Walli's + Beta** for cardioid and astroid area evaluations — they always involve $\sin^m\cos^n$.

---

## 6. Practice Problems

1. Find the area of the region bounded by $y^2 = 4x$ and $x^2 = 4y$. &emsp; **Ans:** $\frac{16}{3}$

2. Find the entire area of the cardioid $r = a(1-\sin\theta)$. &emsp; **Ans:** $\frac{3\pi a^2}{2}$

3. Find the area of the hypocycloid $x^{2/3}+y^{2/3}=8$. &emsp; *(Use $a^{2/3}=8 \Rightarrow a=8^{3/2}=16\sqrt{2}$; Area $= \frac{3\pi a^2}{8}$)*

4. Find the area bounded by the parabola $y=4x-x^2$ and the line $y=x$. &emsp; **Ans:** $\frac{9}{2}$

5. Find the area of one loop of $r = \cos 2\theta$. &emsp; **Ans:** $\frac{\pi}{8}$

---

## 7. Online References

- 📖 [Paul's Online Notes — Area Between Curves](https://tutorial.math.lamar.edu/Classes/CalcI/AreaBetweenCurves.aspx)
- 📖 [Paul's Online Notes — Area with Polar Coordinates](https://tutorial.math.lamar.edu/Classes/CalcII/PolarArea.aspx)
- 📖 [Khan Academy — Area Between Curves](https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-4/v/area-between-curves)
- 📖 [LibreTexts — Area Between Curves](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/06%3A_Applications_of_Integration/6.01%3A_Areas_Between_Curves)
- 📖 [Desmos Graphing Calculator](https://www.desmos.com/calculator) — For visualizing any curve

---

*← [07 — Arc Length](./07_arc_length.md) | [09 — Volume of Solids of Revolution →](./09_volume_solids_revolution.md)*
