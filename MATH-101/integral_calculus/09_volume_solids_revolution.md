---
subject: MATH-101
topic: Volume of Solids of Revolution
date: 2026-03-14
tags: [notes, MATH-101, integration, volume, solids-of-revolution, disk-method, shell-method]
---

# 09 — Volume of Solids of Revolution

> **Reference:** Motin Sir Book — Chapter 17 (Volume section) | Howard Anton — Section 6.2 & 6.3  
> **Online:** [Paul's Online Notes — Volume](https://tutorial.math.lamar.edu/Classes/CalcII/VolumeWithRings.aspx)

---

## 1. Introduction

When a **plane region** is rotated about an axis (usually the $x$-axis or $y$-axis), it sweeps out a **solid of revolution**. Integration allows us to compute its volume exactly.

**Two main methods:**

1. **Disk/Washer Method** — integrate perpendicular cross-sections
2. **Shell Method** — integrate cylindrical shells

---

## 2. Disk Method (Rotation about X-axis)

When the region under $y = f(x)$ between $x=a$ and $x=b$ is rotated about the $x$-axis:

Each thin slice at position $x$ with thickness $dx$ forms a **disk** of radius $y = f(x)$.

$$dV = \pi y^2\,dx$$

$$\boxed{V = \pi\int_a^b y^2\,dx = \pi\int_a^b [f(x)]^2\,dx}$$

---

## 3. Washer Method (Rotation about X-axis, Region Between Two Curves)

When the region between $y_1 = f_1(x)$ (outer) and $y_2 = f_2(x)$ (inner) is rotated about the $x$-axis:

$$\boxed{V = \pi\int_a^b (y_1^2 - y_2^2)\,dx}$$

---

## 4. Disk Method (Rotation about Y-axis)

When the region to the right of $x = g(y)$ between $y=c$ and $y=d$ is rotated about the $y$-axis:

$$\boxed{V = \pi\int_c^d x^2\,dy = \pi\int_c^d [g(y)]^2\,dy}$$

---

## 5. Shell Method (Rotation about Y-axis)

When the region under $y = f(x)$ between $x=a$ and $x=b$ is rotated about the $y$-axis, each thin shell at position $x$ has:
- Radius: $x$
- Height: $f(x)$
- Thickness: $dx$

$$dV = 2\pi x\cdot f(x)\,dx$$

$$\boxed{V = 2\pi\int_a^b x\cdot f(x)\,dx}$$

---

## 6. Volume in Parametric Form

If $x = f(t)$, $y = g(t)$:

**Rotation about x-axis:**

$$V = \pi\int y^2\,dx = \pi\int_{t_1}^{t_2} [g(t)]^2 f'(t)\,dt$$

**Rotation about y-axis:**

$$V = 2\pi\int x\,y\,dx = 2\pi\int_{t_1}^{t_2} f(t)\cdot g(t)\cdot f'(t)\,dt$$

---

## 7. Worked Examples

### Example 1: Volume of Sphere of Radius $a$

Rotate $y = \sqrt{a^2-x^2}$ (upper semicircle) about the $x$-axis, $x \in [-a, a]$:

$$V = \pi\int_{-a}^a y^2\,dx = \pi\int_{-a}^a (a^2-x^2)\,dx$$

$$= \pi\left[a^2 x - \frac{x^3}{3}\right]_{-a}^a = \pi\left[\left(a^3-\frac{a^3}{3}\right)-\left(-a^3+\frac{a^3}{3}\right)\right]$$

$$= \pi\left[\frac{2a^3}{3}+\frac{2a^3}{3}\right] = \boxed{\frac{4\pi a^3}{3}}$$

---

### Example 2: Volume of Cone

Rotate $y = \frac{r}{h}x$ (line from origin) about the $x$-axis, $x \in [0, h]$:

$$V = \pi\int_0^h \left(\frac{r}{h}x\right)^2 dx = \pi\cdot\frac{r^2}{h^2}\int_0^h x^2\,dx = \pi\cdot\frac{r^2}{h^2}\cdot\frac{h^3}{3} = \boxed{\frac{\pi r^2 h}{3}}$$

---

### Example 3: Volume of Solid from Rotating $y=x^2$ about Y-axis

Region between $y=x^2$ and $y=4$ (from $x=0$ to $x=2$), rotated about the $y$-axis.

Using the **disk method** (in $y$): from $x^2 = y \Rightarrow x = \sqrt{y}$:

$$V = \pi\int_0^4 x^2\,dy = \pi\int_0^4 y\,dy = \pi\left[\frac{y^2}{2}\right]_0^4 = \boxed{8\pi}$$

---

### Example 4: Volume of Solid from Cardioid $r=a(1+\cos\theta)$ rotated about the initial line ($x$-axis)

For polar curves, when rotating about the initial line:

$$V = \frac{2\pi}{3}\int_\alpha^\beta r^3\sin\theta\,d\theta$$

For $r = a(1+\cos\theta)$, $\theta \in [0, \pi]$ (using symmetry, upper half, then ×2 is not needed since the formula integrates $r^3\sin\theta$):

$$V = \frac{2\pi}{3}\int_0^\pi a^3(1+\cos\theta)^3\sin\theta\,d\theta$$

Let $u = 1+\cos\theta$, $du = -\sin\theta\,d\theta$. When $\theta=0$, $u=2$; when $\theta=\pi$, $u=0$:

$$V = \frac{2\pi a^3}{3}\int_0^2 u^3\,du = \frac{2\pi a^3}{3}\left[\frac{u^4}{4}\right]_0^2 = \frac{2\pi a^3}{3}\cdot 4 = \boxed{\frac{8\pi a^3}{3}}$$

---

### Example 5: Volume from Rotating the Astroid

The astroid $x = a\cos^3 t$, $y = a\sin^3 t$ is rotated about the $x$-axis.

$$V = \pi\int_{-a}^a y^2\,dx$$

By symmetry:

$$V = 2\pi\int_0^a y^2\,dx$$

Using parametric: $x$ decreasing from $a$ to $0$ as $t$ goes from $0$ to $\pi/2$:

$$= 2\pi\int_{\pi/2}^0 (a\sin^3 t)^2\cdot(-3a\cos^2 t\sin t)\,dt = 6\pi a^3\int_0^{\pi/2}\sin^7 t\cos^2 t\,dt$$

Applying Walli's or Beta function ($p=7$ odd, $q=2$ even):

$$= 6\pi a^3\cdot\frac{1}{2}\beta(4, \frac{3}{2}) = 6\pi a^3\cdot\frac{\Gamma(4)\Gamma(\frac{3}{2})}{2\Gamma(\frac{11}{2})}$$

$$\Gamma(4)=6, \quad \Gamma\!\left(\frac{3}{2}\right)=\frac{\sqrt{\pi}}{2}, \quad \Gamma\!\left(\frac{11}{2}\right)=\frac{9\cdot7\cdot5\cdot3\cdot1}{2^5}\sqrt{\pi}=\frac{945\sqrt{\pi}}{32}$$

$$V = 6\pi a^3\cdot\frac{6\cdot\frac{\sqrt{\pi}}{2}}{2\cdot\frac{945\sqrt{\pi}}{32}} = 6\pi a^3\cdot\frac{3\sqrt{\pi}}{\frac{945\sqrt{\pi}}{16}} = 6\pi a^3\cdot\frac{48}{945} = \boxed{\frac{32\pi a^3}{105}}$$

---

## 8. Summary of Volume Formulas

| Method | Axis | Formula |
|:-------|:-----|:--------|
| Disk | $x$-axis | $\pi\int_a^b y^2\,dx$ |
| Disk | $y$-axis | $\pi\int_c^d x^2\,dy$ |
| Washer | $x$-axis | $\pi\int_a^b(y_1^2-y_2^2)\,dx$ |
| Shell | $y$-axis | $2\pi\int_a^b x\,f(x)\,dx$ |
| Shell | $x$-axis | $2\pi\int_c^d y\,g(y)\,dy$ |
| Polar about initial line | — | $\frac{2\pi}{3}\int r^3\sin\theta\,d\theta$ |

---

## 9. Volume of Standard Solids (Reference)

| Solid | Volume |
|:------|:-------|
| Sphere of radius $a$ | $\frac{4}{3}\pi a^3$ |
| Cone (radius $r$, height $h$) | $\frac{1}{3}\pi r^2 h$ |
| Cylinder (radius $r$, height $h$) | $\pi r^2 h$ |
| Torus (major $R$, minor $r$) | $2\pi^2 Rr^2$ |

---

## 10. Practice Problems

1. Find the volume of the solid obtained by rotating $y=x^3$ from $x=0$ to $x=2$ about the $x$-axis. &emsp; **Ans:** $\frac{128\pi}{7}$

2. Find the volume of the solid formed by rotating the region between $y=\sqrt{x}$ and $y=x$ about the $x$-axis. &emsp; **Ans:** $\frac{\pi}{6}$

3. Find the volume of the solid formed by rotating $r=2a\cos\theta$ about the initial line. &emsp; **Ans:** $\frac{4\pi a^3}{3}$ (sphere of radius $a$)

4. Find the volume of the torus formed by rotating the circle $x^2+(y-b)^2=a^2$ about the $x$-axis ($b>a$). &emsp; **Ans:** $2\pi^2 a^2 b$

---

## 11. Online References

- 📖 [Paul's Online Notes — Volume with Rings/Disks](https://tutorial.math.lamar.edu/Classes/CalcII/VolumeWithRings.aspx)
- 📖 [Paul's Online Notes — Volume with Shells](https://tutorial.math.lamar.edu/Classes/CalcII/VolumeWithCylinder.aspx)
- 📖 [Khan Academy — Solids of Revolution](https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-9/v/disc-method-around-x-axis)
- 📖 [LibreTexts — Volumes of Revolution](https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/06%3A_Applications_of_Integration/6.02%3A_Determining_Volumes_by_Slicing)
- 📖 [GeoGebra — 3D Solids of Revolution](https://www.geogebra.org/m/Bd4TfvBn) — Interactive visualization

---

*← [08 — Area by Plane Curves](./08_area_plane_curves.md) | [Back to README →](./README.md)*
