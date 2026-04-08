# 07. Moment of Inertia of a Solid Sphere

> **Subject:** Physics I — Dynamics of Circular Motion
> **Date:** April 08, 2026
> **Level:** University / Undergraduate

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [MI About an Axis Through the Diameter — Full Derivation](#2-mi-about-an-axis-through-the-diameter--full-derivation)
3. [MI About a Tangential Axis](#3-mi-about-a-tangential-axis)
4. [MI of a Hollow Sphere (Shell)](#4-mi-of-a-hollow-sphere-shell)
5. [Comparison: Solid vs Hollow Sphere](#5-comparison-solid-vs-hollow-sphere)
6. [Rolling Spheres on Inclined Planes](#6-rolling-spheres-on-inclined-planes)
7. [Worked Examples](#7-worked-examples)
8. [Online References](#8-online-references)

---

## 1. Introduction

A **solid sphere** is a perfectly symmetrical three-dimensional body. It is one of the most symmetric objects in nature, and its moment of inertia is the same about **any axis through its center** (due to isotropy).

For a solid sphere of mass $M$ and radius $R$:

| Property | Value |
|----------|-------|
| Volume | $\frac{4}{3}\pi R^3$ |
| Mass per unit volume (density) | $\rho = \dfrac{M}{\frac{4}{3}\pi R^3} = \dfrac{3M}{4\pi R^3}$ |
| Symmetry | All axes through center are equivalent |

---

## 2. MI About an Axis Through the Diameter — Full Derivation

### Setup

Consider a solid sphere of mass $M$ and radius $R$. We want the moment of inertia about a diameter (e.g., the Z-axis).

```
           Z ↑
           |
      ╭────┼────╮
     /     |   dx\
    │    ←x→  R   │   ← circular disc element at height x
    │       O      │        radius of element = √(R²-x²)
     \      |     /
      ╰─────┼────╯
            |
```

### Step 1: Elemental Disc at Height x

At distance $x$ from the center along the Z-axis, consider a thin circular disc of:
- Thickness: $dx$
- Radius: $r = \sqrt{R^2 - x^2}$ (from the equation of a sphere: $r^2 + x^2 = R^2$)
- Area: $\pi r^2 = \pi(R^2 - x^2)$

### Step 2: Mass of the Element

$$dm = \rho \cdot \pi r^2 \cdot dx = \frac{3M}{4\pi R^3} \cdot \pi(R^2 - x^2) \cdot dx$$

$$dm = \frac{3M}{4R^3}(R^2 - x^2) \, dx$$

### Step 3: MI of the Elemental Disc

The disc has radius $r = \sqrt{R^2-x^2}$. Its M.I. about the Z-axis is:

$$dI = \frac{1}{2}r^2 \cdot dm = \frac{1}{2}(R^2 - x^2) \cdot dm$$

Substituting $dm$:

$$dI = \frac{1}{2}(R^2 - x^2) \cdot \frac{3M}{4R^3}(R^2 - x^2) \, dx$$

$$= \frac{3M}{8R^3}(R^2 - x^2)^2 \, dx$$

### Step 4: Integrate from $-R$ to $R$ (or 0 to R and double)

$$I = \int_{-R}^{R} \frac{3M}{8R^3}(R^2 - x^2)^2 \, dx$$

By symmetry (even function):

$$I = 2 \int_{0}^{R} \frac{3M}{8R^3}(R^2 - x^2)^2 \, dx = \frac{3M}{4R^3} \int_0^R (R^2 - x^2)^2 \, dx$$

### Step 5: Expand the integrand

$$(R^2 - x^2)^2 = R^4 - 2R^2x^2 + x^4$$

$$\int_0^R (R^4 - 2R^2x^2 + x^4) \, dx = \left[R^4 x - \frac{2R^2 x^3}{3} + \frac{x^5}{5}\right]_0^R$$

$$= R^5 - \frac{2R^5}{3} + \frac{R^5}{5} = R^5\left(1 - \frac{2}{3} + \frac{1}{5}\right)$$

Finding the common denominator (15):

$$= R^5\left(\frac{15 - 10 + 3}{15}\right) = R^5 \cdot \frac{8}{15}$$

### Step 6: Final Answer

$$I = \frac{3M}{4R^3} \times R^5 \times \frac{8}{15} = \frac{3M \cdot R^2 \cdot 8}{4 \times 15}$$

$$= \frac{24MR^2}{60} = \frac{2MR^2}{5}$$

$$\boxed{I_{diameter} = \frac{2}{5}MR^2}$$

---

## 3. MI About a Tangential Axis

Using the **Parallel Axis Theorem** ($h = R$):

$$I_{tangent} = I_{cm} + Mh^2 = \frac{2}{5}MR^2 + MR^2 = MR^2\left(\frac{2}{5} + 1\right)$$

$$\boxed{I_{tangent} = \frac{7}{5}MR^2}$$

---

## 4. MI of a Hollow Sphere (Shell)

For a **thin spherical shell** of mass $M$, radius $R$:

### Derivation

Consider the shell as built from thin rings. A ring at angle $\theta$ from the pole (co-latitude):
- Radius of ring: $r = R\sin\theta$
- Width: $R \, d\theta$
- Area of ring: $2\pi R\sin\theta \cdot R \, d\theta = 2\pi R^2 \sin\theta \, d\theta$
- Mass: $dm = \frac{M}{4\pi R^2} \cdot 2\pi R^2 \sin\theta \, d\theta = \frac{M}{2}\sin\theta \, d\theta$

M.I. of this ring:
$$dI = r^2 \, dm = R^2\sin^2\theta \cdot \frac{M}{2}\sin\theta \, d\theta = \frac{MR^2}{2}\sin^3\theta \, d\theta$$

Integrating:

$$I = \frac{MR^2}{2}\int_0^\pi \sin^3\theta \, d\theta = \frac{MR^2}{2} \cdot \frac{4}{3}$$

$$\boxed{I_{hollow sphere} = \frac{2}{3}MR^2}$$

---

## 5. Comparison: Solid vs Hollow Sphere

| Property | Solid Sphere | Hollow (Thin) Shell |
|----------|-------------|---------------------|
| $I$ about diameter | $\frac{2}{5}MR^2 = 0.4MR^2$ | $\frac{2}{3}MR^2 \approx 0.667MR^2$ |
| $K$ (radius of gyration) | $R\sqrt{0.4} \approx 0.632R$ | $R\sqrt{0.667} \approx 0.816R$ |
| Relative inertia | Lower (mass spread inside) | Higher (all mass at surface) |

The hollow sphere has **greater** moment of inertia because all its mass is at the maximum distance $R$ from the center.

---

## 6. Rolling Spheres on Inclined Planes

When a sphere rolls without slipping down an incline of angle $\theta$:

**Acceleration:**

Using energy conservation or Newton's laws for rolling:

$$a = \frac{g\sin\theta}{1 + \frac{I}{MR^2}}$$

**For solid sphere** ($I = \frac{2}{5}MR^2$):

$$a_{solid} = \frac{g\sin\theta}{1 + \frac{2}{5}} = \frac{5g\sin\theta}{7}$$

**For hollow sphere** ($I = \frac{2}{3}MR^2$):

$$a_{hollow} = \frac{g\sin\theta}{1 + \frac{2}{3}} = \frac{3g\sin\theta}{5}$$

**Comparison:**

$$\frac{a_{solid}}{a_{hollow}} = \frac{5/7}{3/5} = \frac{25}{21} > 1$$

The **solid sphere accelerates faster** down an incline because it has a smaller moment of inertia (less rotational resistance).

---

## 7. Worked Examples

### Example 1 (from notes)

**Problem:** A solid sphere of radius 0.1 m and mass 2 kg rolls without slipping with a uniform velocity of 0.2 m/s along a straight line on a horizontal surface. Calculate its kinetic energy.

**Solution:**

$$I = \frac{2}{5}MR^2 = \frac{2}{5} \times 2 \times (0.1)^2 = \frac{2}{5} \times 0.02 = 0.008 \text{ kg·m}^2$$

$$\omega = \frac{v}{R} = \frac{0.2}{0.1} = 2 \text{ rad/s}$$

Rotational KE:
$$E_{rot} = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 0.008 \times (2)^2 = 0.016 \text{ J}$$

Or using the formula:
$$E_{rot} = \frac{1}{2}\left(\frac{2}{5}MR^2\right)\left(\frac{v}{R}\right)^2 = \frac{1}{5}Mv^2 = \frac{1}{5} \times 2 \times (0.2)^2 = 0.016 \text{ J}$$

$$\boxed{E_{rot} = 0.016 \text{ J}}$$

---

### Example 2 — Total Rolling KE

**Problem:** For the sphere in Example 1, find the total kinetic energy (translational + rotational).

**Solution:**

$$KE_{trans} = \frac{1}{2}Mv^2 = \frac{1}{2} \times 2 \times (0.2)^2 = 0.04 \text{ J}$$

$$KE_{rot} = 0.016 \text{ J}$$

$$KE_{total} = 0.04 + 0.016 = 0.056 \text{ J}$$

Check: $KE_{total} = \frac{7}{10}Mv^2 = \frac{7}{10} \times 2 \times 0.04 = 0.056$ J ✓

$$\boxed{KE_{total} = 0.056 \text{ J}}$$

---

### Example 3 — Tangential Axis

**Problem:** A solid sphere of mass 3 kg and radius 0.2 m. Find M.I. about a tangential axis.

**Solution:**

$$I_{cm} = \frac{2}{5} \times 3 \times (0.2)^2 = \frac{2}{5} \times 3 \times 0.04 = 0.048 \text{ kg·m}^2$$

$$I_{tangent} = I_{cm} + MR^2 = 0.048 + 3 \times 0.04 = 0.048 + 0.12 = 0.168 \text{ kg·m}^2$$

Check: $\frac{7}{5}MR^2 = \frac{7}{5} \times 3 \times 0.04 = 0.168$ ✓

$$\boxed{I_{tangent} = 0.168 \text{ kg·m}^2}$$

---

### Example 4 — Race Down Incline

**Problem:** A solid sphere and a hollow sphere of the same mass and radius roll from rest down a slope. Which reaches the bottom first?

**Solution:**

| Sphere | $I/MR^2$ | Acceleration $a = \frac{g\sin\theta}{1+I/MR^2}$ |
|--------|----------|--------------------------------------------------|
| Solid | $2/5 = 0.4$ | $a_s = \frac{g\sin\theta}{1.4} = 0.714 g\sin\theta$ |
| Hollow | $2/3 \approx 0.667$ | $a_h = \frac{g\sin\theta}{1.667} = 0.6 g\sin\theta$ |

$a_s > a_h$, so the **solid sphere reaches the bottom first**.

$$\frac{a_s}{a_h} = \frac{5/7}{3/5} = \frac{25}{21} \approx 1.19$$

The solid sphere is about **19% faster** than the hollow sphere.

---

## 8. Online References

- 📖 [HyperPhysics — Solid Sphere Moment of Inertia](http://hyperphysics.phy-astr.gsu.edu/hbase/isph.html)
- 📖 [Wikipedia — Moment of Inertia (Sphere)](https://en.wikipedia.org/wiki/List_of_moments_of_inertia#Sphere)
- 📖 [LibreTexts — Rolling Motion and Moment of Inertia](https://phys.libretexts.org/)
- 📖 [Khan Academy — Rotational Kinetic Energy](https://www.khanacademy.org/science/physics/torque-angular-momentum/rolling-motion-lib/a/rolling-motion-article)
- 🎥 [MIT OpenCourseWare — Rolling Bodies](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)

---

> **← Previous:** [06. MI of Hollow Cylinder](./06_MI_Hollow_Cylinder.md)
> **→ Next:** [08. MI of a Flywheel](./08_MI_Flywheel.md)
