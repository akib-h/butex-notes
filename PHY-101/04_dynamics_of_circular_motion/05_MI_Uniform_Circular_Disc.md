# 05. Moment of Inertia of a Uniform Circular Disc

> **Subject:** Physics I — Dynamics of Circular Motion
> **Date:** April 08, 2026
> **Level:** University / Undergraduate

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [MI About an Axis Through Center Perpendicular to Plane](#2-mi-about-an-axis-through-center-perpendicular-to-plane)
3. [MI About a Diameter (Perpendicular Axis Theorem)](#3-mi-about-a-diameter-perpendicular-axis-theorem)
4. [MI About a Tangent in the Plane (Parallel + Perpendicular)](#4-mi-about-a-tangent-in-the-plane-parallel--perpendicular)
5. [MI About a Tangent Perpendicular to the Plane](#5-mi-about-a-tangent-perpendicular-to-the-plane)
6. [MI of an Annular Disc](#6-mi-of-an-annular-disc)
7. [Summary Table](#7-summary-table)
8. [Worked Examples](#8-worked-examples)
9. [Online References](#9-online-references)

---

## 1. Introduction

A **uniform circular disc** is a flat, circular object of uniform density. It is one of the most commonly analyzed objects in rotational mechanics, appearing in:
- Flywheels
- Grinding wheels
- Gears and pulleys
- Rotating blades

For a disc of mass $M$ and radius $R$:
- Total area: $\pi R^2$
- Mass per unit area (surface density): $\sigma = \frac{M}{\pi R^2}$

---

## 2. MI About an Axis Through Center Perpendicular to Plane

### Setup

Consider a uniform circular disc of mass $M$ and radius $R$. Take an axis (Z-axis) passing through the center O, perpendicular to the plane of the disc.

```
          ↑ Z-axis
          |
    ══════|══════
   ╱      |      ╲
  |   ←R→ O       |   ← Disc lying in XY-plane
   ╲      |      ╱
    ══════|══════
```

### Method: Integration using Concentric Ring Elements

**Step 1: Take an elemental ring at radius x, width dx**

- Area of the element: $dA = 2\pi x \cdot dx$
- Mass of element: $dm = \sigma \cdot dA = \frac{M}{\pi R^2} \cdot 2\pi x \cdot dx = \frac{2M}{R^2} x \cdot dx$

**Step 2: Moment of inertia of this elemental ring**

All mass of the ring is at distance $x$ from the axis, so:
$$dI = x^2 \cdot dm = x^2 \cdot \frac{2M}{R^2} x \, dx = \frac{2M}{R^2} x^3 \, dx$$

**Step 3: Integrate from 0 to R**

$$I = \int_0^R \frac{2M}{R^2} x^3 \, dx = \frac{2M}{R^2} \cdot \frac{x^4}{4} \Bigg|_0^R$$

$$= \frac{2M}{R^2} \cdot \frac{R^4}{4} = \frac{2M \cdot R^2}{4}$$

$$\boxed{I = \frac{1}{2}MR^2}$$

---

## 3. MI About a Diameter (Perpendicular Axis Theorem)

Using the **Perpendicular Axis Theorem** ($I_z = I_x + I_y$):

- $I_z = \frac{1}{2}MR^2$ (about central perpendicular axis)
- By symmetry of the disc: $I_x = I_y = I_{diameter}$

$$\frac{1}{2}MR^2 = I_{diameter} + I_{diameter} = 2I_{diameter}$$

$$\boxed{I_{diameter} = \frac{1}{4}MR^2}$$

---

## 4. MI About a Tangent in the Plane (Parallel + Perpendicular)

A tangent **in the plane** of the disc is parallel to a diameter, at distance $h = R$.

**Step 1 — Find $I_{diameter}$:**
$$I_{diameter} = \frac{1}{4}MR^2$$

**Step 2 — Apply Parallel Axis Theorem** ($h = R$):
$$I_{tangent, in-plane} = I_{diameter} + MR^2 = \frac{1}{4}MR^2 + MR^2$$

$$\boxed{I_{tangent, in-plane} = \frac{5}{4}MR^2}$$

---

## 5. MI About a Tangent Perpendicular to the Plane

A tangent **perpendicular to the plane** is parallel to the central axis (Z), at distance $h = R$.

**Apply Parallel Axis Theorem:**
$$I_{tangent, \perp plane} = I_z + MR^2 = \frac{1}{2}MR^2 + MR^2$$

$$\boxed{I_{tangent, \perp plane} = \frac{3}{2}MR^2}$$

---

## 6. MI of an Annular Disc

An **annular disc** (ring-shaped disc) has:
- Inner radius $R_1$
- Outer radius $R_2$
- Mass $M$

### Derivation

Mass per unit area:
$$\sigma = \frac{M}{\pi(R_2^2 - R_1^2)}$$

Elemental ring at radius $x$, width $dx$:
- $dm = \frac{M}{\pi(R_2^2 - R_1^2)} \cdot 2\pi x \, dx$

$$I = \int_{R_1}^{R_2} x^2 \cdot \frac{2M}{R_2^2 - R_1^2} x \, dx = \frac{2M}{R_2^2 - R_1^2} \int_{R_1}^{R_2} x^3 \, dx$$

$$= \frac{2M}{R_2^2 - R_1^2} \cdot \frac{x^4}{4}\Bigg|_{R_1}^{R_2} = \frac{2M}{R_2^2 - R_1^2} \cdot \frac{R_2^4 - R_1^4}{4}$$

Using $R_2^4 - R_1^4 = (R_2^2 + R_1^2)(R_2^2 - R_1^2)$:

$$= \frac{2M}{R_2^2 - R_1^2} \times \frac{(R_2^2 + R_1^2)(R_2^2 - R_1^2)}{4}$$

$$\boxed{I_{annular} = \frac{1}{2}M(R_1^2 + R_2^2)}$$

#### Special Cases:

| Condition | Result |
|-----------|--------|
| $R_1 = 0$ (solid disc) | $I = \frac{1}{2}MR_2^2$ |
| $R_1 \to R_2 = R$ (thin ring) | $I = MR^2$ |

---

## 7. Summary Table

| Axis | Moment of Inertia |
|------|-------------------|
| Through center, ⊥ to plane | $\frac{1}{2}MR^2$ |
| Along a diameter | $\frac{1}{4}MR^2$ |
| Tangent in the plane | $\frac{5}{4}MR^2$ |
| Tangent ⊥ to the plane | $\frac{3}{2}MR^2$ |
| Annular disc (radii $R_1$, $R_2$) | $\frac{1}{2}M(R_1^2+R_2^2)$ |

---

## 8. Worked Examples

### Example 1 (from notes)

**Problem:** Find the moment of inertia of a uniform circular disc whose mass is 10 kg and radius is 12 cm.

**Solution:**

$$I = \frac{1}{2}MR^2 = \frac{1}{2} \times 10 \times \left(\frac{12}{100}\right)^2$$

$$= \frac{1}{2} \times 10 \times (0.12)^2 = \frac{1}{2} \times 10 \times 0.0144$$

$$\boxed{I = 0.072 \text{ kg·m}^2}$$

---

### Example 2 — Rolling Disc KE (from notes)

**Problem:** A circular disc of mass 6 kg is set rolling on a table with velocity 2 m/s. Calculate its kinetic energy.

**Note:** Rolling involves both translational and rotational KE:

$$KE_{total} = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2$$

For rolling without slipping: $v = \omega R \Rightarrow \omega = v/R$

$$KE_{total} = \frac{1}{2}Mv^2 + \frac{1}{2}\left(\frac{1}{2}MR^2\right)\left(\frac{v}{R}\right)^2$$

$$= \frac{1}{2}Mv^2 + \frac{1}{4}Mv^2 = \frac{3}{4}Mv^2$$

Wait — the notes compute only rotational KE:

$$E_{rot} = \frac{1}{2}I\omega^2 = \frac{1}{2}\left(\frac{1}{2}MR^2\right)\left(\frac{v}{R}\right)^2 = \frac{1}{4}Mv^2$$

$$= \frac{1}{4} \times 6 \times (2)^2 = \frac{1}{4} \times 6 \times 4 = 6 \text{ J}$$

$$\boxed{E_{rot} = 6 \text{ J}}$$

---

### Example 3 — Annular Disc

**Problem:** An annular disc of mass 3 kg has inner radius 5 cm and outer radius 15 cm. Find its M.I. about an axis through its center perpendicular to its plane.

**Solution:**

$$I = \frac{1}{2}M(R_1^2 + R_2^2) = \frac{1}{2} \times 3 \times \left[(0.05)^2 + (0.15)^2\right]$$

$$= \frac{1}{2} \times 3 \times [0.0025 + 0.0225] = \frac{1}{2} \times 3 \times 0.025$$

$$\boxed{I = 0.0375 \text{ kg·m}^2}$$

---

### Example 4 — Multiple Axes

**Problem:** For a disc of mass 4 kg and radius 0.5 m, find the M.I. about:
- (a) Central perpendicular axis
- (b) Diameter
- (c) Tangent in its plane

**Solution:**

(a) $I_{central} = \frac{1}{2} \times 4 \times (0.5)^2 = \frac{1}{2} \times 4 \times 0.25 = 0.5$ kg·m²

(b) $I_{diameter} = \frac{1}{4}MR^2 = \frac{1}{4} \times 4 \times 0.25 = 0.25$ kg·m²

(c) $I_{tangent} = \frac{5}{4}MR^2 = \frac{5}{4} \times 4 \times 0.25 = 1.25$ kg·m²

---

## 9. Online References

- 📖 [HyperPhysics — Disc Moment of Inertia](http://hyperphysics.phy-astr.gsu.edu/hbase/tdisc.html)
- 📖 [Wikipedia — List of Moments of Inertia](https://en.wikipedia.org/wiki/List_of_moments_of_inertia)
- 📖 [LibreTexts — Moments of Inertia](https://phys.libretexts.org/)
- 📖 [Khan Academy — Rotational Inertia](https://www.khanacademy.org/science/physics/torque-angular-momentum/rotational-inertia/a/rotational-inertia)
- 🎥 [Walter Lewin Lectures — Rotation (MIT)](https://www.youtube.com/watch?v=...)

---

> **← Previous:** [04. Parallel Axis Theorem](./04_Parallel_Axis_Theorem.md)
> **→ Next:** [06. MI of Hollow Cylinder](./06_MI_Hollow_Cylinder.md)
