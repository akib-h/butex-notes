# 02. Radius of Gyration

> **Subject:** Physics I — Dynamics of Circular Motion
> **Date:** April 08, 2026
> **Level:** University / Undergraduate

---

## Table of Contents

1. [Definition](#1-definition)
2. [Mathematical Expression](#2-mathematical-expression)
3. [Derivation of Radius of Gyration Formula](#3-derivation-of-radius-of-gyration-formula)
4. [Physical Interpretation](#4-physical-interpretation)
5. [Radius of Gyration for Common Bodies](#5-radius-of-gyration-for-common-bodies)
6. [Significance in Engineering](#6-significance-in-engineering)
7. [Worked Examples](#7-worked-examples)
8. [Online References](#8-online-references)

---

## 1. Definition

The **Radius of Gyration** (K) of a body about a given axis is defined as:

> _"The distance from the axis of rotation to a point where the total mass of the body is supposed to be concentrated such that the moment of inertia remains the same as that of the actual body about the same axis."_

In simpler words: it is the **root-mean-square (RMS) distance** of the particles of the body from the axis of rotation.

- Symbol: **K**
- SI Unit: **metre (m)**
- Also called: **Gyradius**

---

## 2. Mathematical Expression

If $I$ is the moment of inertia of a body of total mass $M$ about a given axis, and $K$ is the radius of gyration, then:

$$\boxed{I = MK^2}$$

Therefore:

$$\boxed{K = \sqrt{\frac{I}{M}}}$$

where:
- $I$ = Moment of Inertia (kg·m²)
- $M$ = Total mass of the body (kg)
- $K$ = Radius of Gyration (m)

---

## 3. Derivation of Radius of Gyration Formula

### Step 1: Start with the definition of Moment of Inertia

For a body with $n$ particles of equal mass $m$ at distances $r_1, r_2, \ldots, r_n$ from the axis:

$$I = \sum m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2 + \cdots + m_n r_n^2 \quad \cdots (1)$$

### Step 2: Use the definition $I = MK^2$

Also, total mass $M = nm$ (for $n$ equal particles each of mass $m$):

$$I = MK^2 = nmK^2 \quad \cdots (2)$$

### Step 3: Equate (1) and (2)

$$nmK^2 = m(r_1^2 + r_2^2 + \cdots + r_n^2)$$

$$nK^2 = r_1^2 + r_2^2 + \cdots + r_n^2$$

$$K^2 = \frac{r_1^2 + r_2^2 + \cdots + r_n^2}{n}$$

$$\boxed{K = \sqrt{\frac{r_1^2 + r_2^2 + \cdots + r_n^2}{n}}}$$

This confirms that $K$ is the **root mean square** (RMS) of the distances of all particles from the axis of rotation.

---

## 4. Physical Interpretation

```
Actual Body                     Equivalent Point Mass
─────────────────               ─────────────────────
Distributed mass M      ≡       Mass M concentrated at distance K
I = Σmr²               ≡       I = MK²
```

![Radius of Gyration Concept](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Radial_keying.svg/320px-Radial_keying.svg.png)

Key interpretations:

1. **K is NOT the average distance** — it is the RMS distance. Due to squaring, particles farther from the axis contribute more.
2. **K depends on the axis** — change the axis, and K changes (just like I changes).
3. **K is a geometric property** — for a given shape and axis, K depends only on the geometry, not on the total mass (since it comes from $K = \sqrt{I/M}$ and $I \propto M$).
4. **Smaller K → more compact mass distribution** (more stable rotation).
5. **Larger K → mass spread farther from axis** (stores more rotational energy).

---

## 5. Radius of Gyration for Common Bodies

### 5.1 Thin Uniform Ring (radius R, axis through center ⊥ to plane)

$$I = MR^2 \Rightarrow K = \sqrt{\frac{MR^2}{M}} = R$$

$$\boxed{K_{ring} = R}$$

### 5.2 Uniform Circular Disc (radius R, axis through center ⊥ to plane)

$$I = \frac{1}{2}MR^2 \Rightarrow K = \sqrt{\frac{MR^2/2}{M}} = \frac{R}{\sqrt{2}}$$

$$\boxed{K_{disc} = \frac{R}{\sqrt{2}}}$$

### 5.3 Solid Sphere (radius R, axis through diameter)

$$I = \frac{2}{5}MR^2 \Rightarrow K = \sqrt{\frac{2}{5}}R$$

$$\boxed{K_{solid sphere} = R\sqrt{\frac{2}{5}} \approx 0.632R}$$

### 5.4 Hollow Sphere (radius R, axis through diameter)

$$I = \frac{2}{3}MR^2 \Rightarrow K = \sqrt{\frac{2}{3}}R$$

$$\boxed{K_{hollow sphere} = R\sqrt{\frac{2}{3}} \approx 0.816R}$$

### 5.5 Solid Cylinder (radius R, own axis)

$$I = \frac{1}{2}MR^2 \Rightarrow K = \frac{R}{\sqrt{2}}$$

$$\boxed{K_{solid cyl} = \frac{R}{\sqrt{2}}}$$

### 5.6 Thin Rod (length L, axis through center ⊥ to length)

$$I = \frac{1}{12}ML^2 \Rightarrow K = \frac{L}{2\sqrt{3}}$$

$$\boxed{K_{rod,center} = \frac{L}{2\sqrt{3}}}$$

### Summary Table

| Body | Axis | I | K |
|------|------|---|---|
| Ring (R) | Center, ⊥ plane | $MR^2$ | $R$ |
| Disc (R) | Center, ⊥ plane | $\frac{1}{2}MR^2$ | $\frac{R}{\sqrt{2}}$ |
| Solid sphere (R) | Diameter | $\frac{2}{5}MR^2$ | $R\sqrt{0.4}$ |
| Hollow sphere (R) | Diameter | $\frac{2}{3}MR^2$ | $R\sqrt{0.667}$ |
| Solid cylinder (R) | Own axis | $\frac{1}{2}MR^2$ | $\frac{R}{\sqrt{2}}$ |
| Thin rod (L) | Center, ⊥ | $\frac{1}{12}ML^2$ | $\frac{L}{2\sqrt{3}}$ |

---

## 6. Significance in Engineering

The radius of gyration is widely used in:

1. **Structural Engineering**: In column design (Euler's buckling formula), $K$ determines a column's resistance to buckling.
   $$F_{cr} = \frac{\pi^2 EI}{L^2} = \frac{\pi^2 E \cdot MK^2}{L^2}$$

2. **Machine Design**: Flywheel design uses $K$ to optimize energy storage.

3. **Aerospace Engineering**: Calculating rotational dynamics of spacecraft.

4. **Sports Science**: A batsman swinging a cricket bat — redistributing mass changes K and affects swing control.

---

## 7. Worked Examples

### Example 1 — Finding K from I and M

**Problem:** The moment of inertia of a body about a given axis is 24 kg·m². If the mass of the body is 6 kg, find the radius of gyration.

**Solution:**

$$K = \sqrt{\frac{I}{M}} = \sqrt{\frac{24}{6}} = \sqrt{4} = 2 \text{ m}$$

$$\boxed{K = 2 \text{ m}}$$

---

### Example 2 — Finding I from K and M

**Problem:** The radius of gyration of a disc of mass 2 kg is $0.2$ m about its central axis. Find the moment of inertia.

**Solution:**

$$I = MK^2 = 2 \times (0.2)^2 = 2 \times 0.04 = 0.08 \text{ kg·m}^2$$

$$\boxed{I = 0.08 \text{ kg·m}^2}$$

---

### Example 3 — From First Principles (Uniform Circular Disc)

**Problem:** Derive the radius of gyration of a uniform circular disc of mass M and radius R about an axis through its center perpendicular to its plane.

**Solution:**

The moment of inertia of the disc is:
$$I = \frac{1}{2}MR^2$$

Using $I = MK^2$:

$$MK^2 = \frac{1}{2}MR^2$$

$$K^2 = \frac{R^2}{2}$$

$$\boxed{K = \frac{R}{\sqrt{2}} \approx 0.707R}$$

This means all the mass of the disc, if concentrated at distance $0.707R$ from the center, would produce the same rotational resistance.

---

### Example 4 — Comparing Ring and Disc

**Problem:** A ring and disc of the same mass M = 3 kg and radius R = 0.4 m rotate about their central axes. Compare their radii of gyration.

**Solution:**

- Ring: $K_1 = R = 0.4$ m
- Disc: $K_2 = R/\sqrt{2} = 0.4/\sqrt{2} \approx 0.283$ m

$$\frac{K_1}{K_2} = \sqrt{2} \approx 1.414$$

The ring's radius of gyration is $\sqrt{2}$ times that of the disc, confirming that the ring's mass is distributed farther from the axis.

---

## 8. Online References

- 📖 [HyperPhysics — Radius of Gyration](http://hyperphysics.phy-astr.gsu.edu/hbase/rkg.html)
- 📖 [Wikipedia — Radius of Gyration](https://en.wikipedia.org/wiki/Radius_of_gyration)
- 📖 [LibreTexts — Radius of Gyration](https://phys.libretexts.org/)
- 📖 [Engineering Toolbox — Radius of Gyration](https://www.engineeringtoolbox.com/radius-gyration-d_1302.html)
- 🎥 [Physics Galaxy — Moment of Inertia and K](https://www.youtube.com/watch?v=...)

---

> **← Previous:** [01. Moment of Inertia](./01_Moment_of_Inertia.md)
> **→ Next:** [03. Perpendicular Axis Theorem](./03_Perpendicular_Axis_Theorem.md)
