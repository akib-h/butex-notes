# 01. Moment of Inertia

> **Subject:** Physics I — Dynamics of Circular Motion
> **Date:** April 08, 2026
> **Level:** University / Undergraduate

---

## Table of Contents

1. [What is Inertia?](#1-what-is-inertia)
2. [Concept of Moment of Inertia](#2-concept-of-moment-of-inertia)
3. [Mathematical Definition](#3-mathematical-definition)
4. [Physical Significance](#4-physical-significance)
5. [Factors Affecting Moment of Inertia](#5-factors-affecting-moment-of-inertia)
6. [Moment of Inertia vs Mass (Analogy)](#6-moment-of-inertia-vs-mass-analogy)
7. [Rotational Kinetic Energy](#7-rotational-kinetic-energy)
8. [Standard Results Summary Table](#8-standard-results-summary-table)
9. [Worked Examples](#9-worked-examples)
10. [Online References](#10-online-references)

---

## 1. What is Inertia?

**Inertia** is the fundamental property of matter by which a body resists any change in its state of rest or uniform motion. It is a direct consequence of Newton's First Law of Motion.

- In **linear motion**, inertia is measured by **mass** (m).
- In **rotational motion**, the equivalent property is called the **Moment of Inertia** (I).

> _"The inertness or inability of a body to change its state of motion by itself is called inertia. It is the fundamental property of matter."_ — (from course notes)

For a body in **rotational motion**, inertia depends on:
1. The **mass** of the body
2. The **distribution of mass** about the axis of rotation

---

## 2. Concept of Moment of Inertia

When a rigid body rotates about a fixed axis, different particles of the body are at different distances from the axis. The resistance offered by the body to angular acceleration depends not just on its mass but **where** that mass is located relative to the axis.

The **Moment of Inertia** (I) is defined as the coefficient of inertia in rotatory motion — it plays the same role in rotational dynamics that **mass** plays in linear (translational) dynamics.

```
Linear Motion          ↔       Rotational Motion
─────────────────────────────────────────────────
Mass (m)               ↔       Moment of Inertia (I)
Force (F = ma)         ↔       Torque (τ = Iα)
Linear momentum (p=mv) ↔       Angular momentum (L = Iω)
KE = ½mv²             ↔       KE = ½Iω²
```

---

## 3. Mathematical Definition

### 3.1 For a Discrete System of Particles

Consider a rigid body consisting of **n** particles of masses $m_1, m_2, m_3, \ldots, m_n$ situated at perpendicular distances $r_1, r_2, r_3, \ldots, r_n$ respectively from the axis of rotation.

The **Moment of Inertia** of the body about that axis is:

$$\boxed{I = \sum_{i=1}^{n} m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2 + \cdots + m_n r_n^2}$$

where:
- $m_i$ = mass of the $i$-th particle (in kg)
- $r_i$ = perpendicular distance of the $i$-th particle from the axis (in m)
- $I$ = Moment of Inertia (in kg·m²)

### 3.2 For a Continuous Body

For a continuous body, the summation is replaced by integration:

$$\boxed{I = \int r^2 \, dm}$$

where $dm$ is a small mass element at distance $r$ from the axis.

### 3.3 SI Unit and Dimensions

| Quantity | Value |
|----------|-------|
| **SI Unit** | kg·m² |
| **CGS Unit** | g·cm² |
| **Dimensional Formula** | [M L² T⁰] |

---

## 4. Physical Significance

1. **Greater I → harder to rotate**: A body with a large moment of inertia requires more torque to achieve the same angular acceleration.
2. **Flywheel effect**: Machines use large I flywheels to maintain steady rotation.
3. **Angular momentum**: $L = I\omega$ — a spinning skater pulls arms inward to reduce I and increase ω (conservation of angular momentum).
4. **Rotational KE**: $KE_{rot} = \frac{1}{2}I\omega^2$ — analogous to $\frac{1}{2}mv^2$.

---

## 5. Factors Affecting Moment of Inertia

### Factor 1: Mass of the Body
- Higher mass → Higher I (for same distribution)
- $I \propto M$

### Factor 2: Distribution of Mass About the Axis
- Mass concentrated **far** from axis → High I
- Mass concentrated **near** axis → Low I

**Illustrative Example:**

| Object | I about central axis |
|--------|---------------------|
| Solid disc (mass M, radius R) | $\frac{1}{2}MR^2$ |
| Ring (mass M, radius R) | $MR^2$ |

Both have the same mass M and radius R, but the ring has **twice** the moment of inertia because all its mass is at the maximum distance R.

### Factor 3: Position and Orientation of the Axis
- I is different for different axes through the same body (see Parallel & Perpendicular Axis Theorems).

---

## 6. Moment of Inertia vs Mass (Analogy)

| Property | Linear Motion | Rotational Motion |
|----------|--------------|-------------------|
| Measure of inertia | Mass $m$ | Moment of Inertia $I$ |
| Newton's 2nd Law | $F = ma$ | $\tau = I\alpha$ |
| Kinetic Energy | $\frac{1}{2}mv^2$ | $\frac{1}{2}I\omega^2$ |
| Momentum | $p = mv$ | $L = I\omega$ |
| Work done | $W = Fs$ | $W = \tau\theta$ |
| Power | $P = Fv$ | $P = \tau\omega$ |

---

## 7. Rotational Kinetic Energy

When a rigid body rotates about a fixed axis with angular velocity $\omega$, every particle has kinetic energy:

$$KE = \frac{1}{2}m_i v_i^2 = \frac{1}{2}m_i (r_i\omega)^2 = \frac{1}{2}m_i r_i^2 \omega^2$$

Total rotational KE:

$$KE_{rot} = \sum \frac{1}{2}m_i r_i^2 \omega^2 = \frac{1}{2}\omega^2 \sum m_i r_i^2$$

$$\boxed{KE_{rot} = \frac{1}{2}I\omega^2}$$

---

## 8. Standard Results Summary Table

| Body | Axis | Moment of Inertia |
|------|------|-------------------|
| Thin ring (radius R) | Through center, perpendicular to plane | $MR^2$ |
| Uniform disc (radius R) | Through center, perpendicular to plane | $\frac{1}{2}MR^2$ |
| Annular disc (inner $R_1$, outer $R_2$) | Through center, ⊥ to plane | $\frac{1}{2}M(R_1^2+R_2^2)$ |
| Solid cylinder (radius R) | Own axis | $\frac{1}{2}MR^2$ |
| Hollow cylinder (inner $R_1$, outer $R_2$) | Own axis | $\frac{1}{2}M(R_1^2+R_2^2)$ |
| Solid sphere (radius R) | Diameter | $\frac{2}{5}MR^2$ |
| Hollow sphere (radius R) | Diameter | $\frac{2}{3}MR^2$ |
| Thin rod (length L) | Through center, ⊥ to length | $\frac{1}{12}ML^2$ |
| Thin rod (length L) | Through one end, ⊥ to length | $\frac{1}{3}ML^2$ |

---

## 9. Worked Examples

### Example 1 — Discrete System

**Problem:** Four particles of mass 2 kg each are placed at the corners of a square of side 0.5 m. Find the moment of inertia about an axis passing through the center of the square and perpendicular to its plane.

**Solution:**

Distance of each particle from center:
$$r = \frac{\text{diagonal}}{2} = \frac{0.5\sqrt{2}}{2} = \frac{\sqrt{2}}{4} \approx 0.354 \text{ m}$$

$$I = \sum m_i r_i^2 = 4 \times 2 \times \left(\frac{0.5\sqrt{2}}{2}\right)^2$$
$$= 4 \times 2 \times \frac{0.25 \times 2}{4} = 4 \times 2 \times 0.125 = 1 \text{ kg·m}^2$$

---

### Example 2 — Rotational KE (from notes)

**Problem:** A circular disc of mass 100 g and radius 10 cm is making 120 rpm about an axis passing through its center perpendicular to its plane. Calculate its kinetic energy.

**Solution:**

Given:
- $M = 100\text{ g} = 0.1\text{ kg}$
- $R = 10\text{ cm} = 0.1\text{ m}$
- $n = 120\text{ rpm}$

Angular velocity:
$$\omega = \frac{120 \times 2\pi}{60} = 4\pi \text{ rad/s}$$

Moment of inertia of disc:
$$I = \frac{1}{2}MR^2 = \frac{1}{2} \times 0.1 \times (0.1)^2 = 5 \times 10^{-4} \text{ kg·m}^2$$

Kinetic energy:
$$E = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 5\times10^{-4} \times (4\pi)^2$$
$$= \frac{1}{2} \times 5\times10^{-4} \times 16\pi^2 \approx 0.04 \text{ J}$$

$$\boxed{E \approx 0.04 \text{ J}}$$

---

### Example 3 — Comparison of I

**Problem:** A ring and a disc each have the same mass M = 5 kg and radius R = 0.3 m. Compare their moments of inertia about their central axes.

**Solution:**

- $I_{ring} = MR^2 = 5 \times (0.3)^2 = 0.45\text{ kg·m}^2$
- $I_{disc} = \frac{1}{2}MR^2 = \frac{1}{2} \times 5 \times (0.3)^2 = 0.225\text{ kg·m}^2$

$$\frac{I_{ring}}{I_{disc}} = 2$$

The ring has **twice** the moment of inertia of the disc with the same mass and radius, because all its mass is distributed at the maximum radius.

---

## 10. Online References

- 📖 [HyperPhysics — Moment of Inertia](http://hyperphysics.phy-astr.gsu.edu/hbase/mi.html)
- 📖 [Khan Academy — Rotational Inertia](https://www.khanacademy.org/science/physics/torque-angular-momentum/rotational-inertia/a/rotational-inertia)
- 📖 [MIT OpenCourseWare — Rotational Dynamics](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
- 📖 [LibreTexts Physics — Moment of Inertia](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/Book%3A_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/10%3A_Fixed-Axis_Rotation__Introduction/10.05%3A_Calculating_Moments_of_Inertia)
- 📖 [Wikipedia — Moment of Inertia](https://en.wikipedia.org/wiki/Moment_of_inertia)
- 🎥 [3Blue1Brown — Essence of Linear Algebra (Rotation)](https://www.3blue1brown.com/)

---

> **Next Topic →** [02. Radius of Gyration](./02_Radius_of_Gyration.md)
