# 🔄 PHYSICS-I — Rotational Mechanics
### Complete Exam Preparation Notes (2021)

---

## 📌 TABLE OF CONTENTS
1. [Key Definitions](#1-key-definitions)
2. [Angular Velocity](#2-angular-velocity)
3. [Angular Acceleration](#3-angular-acceleration)
4. [Torque (Moment of Force)](#4-torque-moment-of-force)
5. [Moment of Inertia](#5-moment-of-inertia)
6. [Angular Momentum](#6-angular-momentum)
7. [Relation: Angular Momentum & Moment of Inertia](#7-relation-angular-momentum--moment-of-inertia)
8. [Theorems on Moment of Inertia](#8-theorems-on-moment-of-inertia)
9. [MI of a Uniform Circular Disc](#9-mi-of-a-uniform-circular-disc)
10. [Rotational Kinetic Energy](#10-rotational-kinetic-energy)
11. [Analogy: Linear vs Rotational Motion](#11-analogy-linear-vs-rotational-motion)
12. [All Key Formulas at a Glance](#12-all-key-formulas-at-a-glance)
13. [Solved Numerical Problems](#13-solved-numerical-problems)

---

## 1. Key Definitions

### Rigid Body
> A body in which the distance between any two particles remains fixed under all conditions. It does not deform under forces.

### Axis of Rotation
> The fixed straight line about which a rigid body rotates. Every particle in the body moves in a circle whose center lies on this axis.

### Radian
> The angle subtended at the center of a circle by an arc equal in length to the radius.

$$1 \text{ radian} = \frac{180°}{\pi} \approx 57.3°$$

---

## 2. Angular Velocity

### Definition
> **Angular velocity** ($\omega$) is the rate of change of angular displacement with respect to time. It describes how fast a body rotates about an axis.

$$\boxed{\omega = \frac{d\theta}{dt}}$$

**Unit:** rad/s  
**Dimension:** T⁻¹  
**Direction:** Along the axis of rotation (right-hand screw rule)

### Types

| Type | Formula | Meaning |
|---|---|---|
| Average angular velocity | $\bar{\omega} = \dfrac{\Delta\theta}{\Delta t}$ | Total angle / total time |
| Instantaneous angular velocity | $\omega = \dfrac{d\theta}{dt}$ | Rate at a specific instant |

### Relation between Linear and Angular Velocity

For a particle at radius $r$ from the axis:

$$\boxed{v = r\omega}$$

- Every particle on the same rigid body has the **same** $\omega$
- But linear velocity $v$ varies: particles farther from axis move faster

### RPM to rad/s Conversion

$$\omega = \frac{2\pi N}{60} \quad \text{(where } N \text{ is in rpm)}$$

---

## 3. Angular Acceleration

### Definition
> **Angular acceleration** ($\alpha$) is the rate of change of angular velocity with respect to time.

$$\boxed{\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}}$$

**Unit:** rad/s²

**Relation to linear acceleration:**
$$a = r\alpha \quad \text{(tangential acceleration)}$$

### Equations of Rotational Motion

(Analogous to linear equations of motion)

$$\omega = \omega_0 + \alpha t$$

$$\theta = \omega_0 t + \frac{1}{2}\alpha t^2$$

$$\omega^2 = \omega_0^2 + 2\alpha\theta$$

---

## 4. Torque (Moment of Force)

### Definition
> **Torque** ($\tau$) is the rotational equivalent of force. It is the moment of a force about an axis — the product of force and the perpendicular distance from the axis to the line of action of the force.

$$\boxed{\vec{\tau} = \vec{r} \times \vec{F}}$$

$$|\tau| = rF\sin\phi$$

Where $\phi$ is the angle between $\vec{r}$ and $\vec{F}$.

**Unit:** N·m  
**Dimension:** ML²T⁻²

**Newton's second law for rotation:**
$$\boxed{\tau = I\alpha}$$

(Compare with $F = ma$ for linear motion)

---

## 5. Moment of Inertia

### Definition
> **Moment of inertia** ($I$) is the rotational analogue of mass. It is defined as the sum of products of the mass of each particle and the square of its perpendicular distance from the axis of rotation.

$$\boxed{I = \sum_i m_i r_i^2}$$

For a continuous body:
$$I = \int r^2 \, dm$$

**Unit:** kg·m²  
**Dimension:** ML²

### Physical Significance
- Moment of inertia measures the **resistance of a body to rotational motion** (just as mass measures resistance to linear motion)
- It depends on: (1) total mass, (2) distribution of mass about the axis, (3) position and orientation of the axis
- A body with more mass farther from the axis has a **larger** moment of inertia

### Factors Affecting Moment of Inertia

| Factor | Effect |
|---|---|
| Total mass ↑ | $I$ ↑ |
| Mass distributed farther from axis | $I$ ↑ greatly |
| Axis through center of mass | $I$ is minimum |
| Axis at edge | $I$ is maximum |

---

## 6. Angular Momentum

### Definition
> **Angular momentum** ($L$) is the rotational analogue of linear momentum. It is defined as the moment of linear momentum about the axis of rotation.

For a particle of mass $m$ moving with velocity $v$ at perpendicular distance $r$ from the axis:

$$\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}$$

$$|L| = mvr\sin\theta$$

For circular motion ($\theta = 90°$):
$$\boxed{L = mvr = m\omega r \cdot r = mr^2\omega}$$

**Unit:** kg·m²/s  
**Dimension:** ML²T⁻¹

### Conservation of Angular Momentum

> When no external torque acts on a system, the total angular momentum remains constant.

$$\tau_{ext} = 0 \implies L = I\omega = \text{constant}$$

**Example:** A spinning skater pulls arms in → $I$ decreases → $\omega$ increases

---

## 7. Relation: Angular Momentum & Moment of Inertia

### Derivation

Consider a rigid body rotating about a fixed axis with angular velocity $\omega$.

Let it consist of $n$ particles of masses $m_1, m_2, \ldots, m_n$ at perpendicular distances $r_1, r_2, \ldots, r_n$ from the axis.

**Angular momentum of the $i$-th particle:**
$$L_i = m_i v_i r_i$$

Since $v_i = r_i \omega$ for each particle:
$$L_i = m_i (r_i \omega) r_i = m_i r_i^2 \omega$$

**Total angular momentum of the body:**
$$L = \sum_i L_i = \sum_i m_i r_i^2 \omega$$

$$L = \omega \sum_i m_i r_i^2$$

Since $I = \sum_i m_i r_i^2$:

$$\boxed{L = I\omega}$$

This is the fundamental relation between angular momentum and moment of inertia.

**Compare with linear momentum:** $p = mv$ (mass × linear velocity)  
**Rotational equivalent:** $L = I\omega$ (moment of inertia × angular velocity)

### Torque and Angular Momentum

Differentiating $L = I\omega$ with respect to time (for constant $I$):
$$\frac{dL}{dt} = I\frac{d\omega}{dt} = I\alpha = \tau$$

$$\boxed{\tau = \frac{dL}{dt}}$$

(Rotational analogue of Newton's 2nd law: $F = dp/dt$)

---

## 8. Theorems on Moment of Inertia

### 8.1 Parallel Axis Theorem

> The moment of inertia of a body about any axis is equal to its moment of inertia about a parallel axis through the center of mass, plus the product of the total mass and the square of the distance between the two axes.

$$\boxed{I = I_{cm} + Md^2}$$

Where:
- $I_{cm}$ = MI about axis through center of mass
- $M$ = total mass of body
- $d$ = perpendicular distance between the two parallel axes

### 8.2 Perpendicular Axis Theorem
*(For plane laminas only)*

> The moment of inertia of a plane lamina about an axis perpendicular to its plane is equal to the sum of its moments of inertia about two mutually perpendicular axes in the plane of the lamina, passing through the same point.

$$\boxed{I_z = I_x + I_y}$$

Where $z$ is perpendicular to the plane, and $x$, $y$ are in the plane.

---

## 9. MI of a Uniform Circular Disc

### About an Axis Through Its Center, Perpendicular to Its Plane

**Given:**
- Disc of mass $M$, radius $R$
- Axis = through center, perpendicular to plane (z-axis)

**Method — Integration**

Consider a thin annular ring at radius $r$, width $dr$:

**Area of ring:** $dA = 2\pi r \, dr$

**Total area of disc:** $A = \pi R^2$

**Surface mass density (mass per unit area):**
$$\sigma = \frac{M}{\pi R^2}$$

**Mass of ring:**
$$dm = \sigma \cdot dA = \frac{M}{\pi R^2} \cdot 2\pi r \, dr = \frac{2M}{R^2} r \, dr$$

**MI of this thin ring about z-axis** (all mass at radius $r$):
$$dI = r^2 \, dm = r^2 \cdot \frac{2M}{R^2} r \, dr = \frac{2M}{R^2} r^3 \, dr$$

**Integrating from 0 to R:**
$$I = \int_0^R \frac{2M}{R^2} r^3 \, dr = \frac{2M}{R^2} \cdot \left[\frac{r^4}{4}\right]_0^R = \frac{2M}{R^2} \cdot \frac{R^4}{4}$$

$$\boxed{I = \frac{1}{2}MR^2}$$

### Summary of MI for Common Shapes

| Body | Axis | Moment of Inertia |
|---|---|---|
| Uniform disc | Through center, ⊥ to plane | $\frac{1}{2}MR^2$ |
| Uniform disc | Diameter | $\frac{1}{4}MR^2$ |
| Uniform disc | Tangent in plane | $\frac{5}{4}MR^2$ |
| Uniform disc | Tangent ⊥ to plane | $\frac{3}{2}MR^2$ |
| Solid sphere | Diameter | $\frac{2}{5}MR^2$ |
| Hollow sphere | Diameter | $\frac{2}{3}MR^2$ |
| Solid cylinder | Own axis | $\frac{1}{2}MR^2$ |
| Thin ring | Central axis ⊥ plane | $MR^2$ |
| Thin rod | Perpendicular, through center | $\frac{1}{12}ML^2$ |
| Thin rod | Perpendicular, through end | $\frac{1}{3}ML^2$ |

> 💡 **Disc through center ⊥ plane** = $\dfrac{1}{2}MR^2$ is the most commonly examined formula.

---

## 10. Rotational Kinetic Energy

### Definition
> The kinetic energy possessed by a body due to its rotation about an axis.

$$KE_{rot} = \frac{1}{2}I\omega^2$$

**Compare with linear KE:** $KE_{lin} = \frac{1}{2}mv^2$

### Total KE of Rolling Body (linear + rotational)

$$KE_{total} = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$$

Using $v = R\omega$:
$$KE_{total} = \frac{1}{2}mv^2\left(1 + \frac{I}{mR^2}\right)$$

---

## 11. Analogy: Linear vs Rotational Motion

| Linear Quantity | Symbol | Rotational Equivalent | Symbol |
|---|---|---|---|
| Displacement | $x$ | Angular displacement | $\theta$ |
| Velocity | $v$ | Angular velocity | $\omega$ |
| Acceleration | $a$ | Angular acceleration | $\alpha$ |
| Mass | $m$ | Moment of inertia | $I$ |
| Force | $F$ | Torque | $\tau$ |
| Linear momentum | $p = mv$ | Angular momentum | $L = I\omega$ |
| KE | $\frac{1}{2}mv^2$ | Rotational KE | $\frac{1}{2}I\omega^2$ |
| Newton's 2nd law | $F = ma$ | Rotational 2nd law | $\tau = I\alpha$ |
| Newton's 2nd law | $F = dp/dt$ | Rotational 2nd law | $\tau = dL/dt$ |
| Work | $W = Fx$ | Rotational work | $W = \tau\theta$ |
| Power | $P = Fv$ | Rotational power | $P = \tau\omega$ |

---

## 12. All Key Formulas at a Glance

$$\omega = \frac{d\theta}{dt}, \quad \alpha = \frac{d\omega}{dt}$$

$$v = r\omega, \quad a_t = r\alpha$$

$$\omega = \frac{2\pi N}{60} \quad (N \text{ in rpm})$$

$$I = \sum m_i r_i^2 = \int r^2 \, dm$$

$$L = I\omega$$

$$\tau = I\alpha = \frac{dL}{dt}$$

$$I_{disc} = \frac{1}{2}MR^2 \quad \text{(center, ⊥ plane)}$$

$$KE_{rot} = \frac{1}{2}I\omega^2$$

$$\text{Parallel axis:} \quad I = I_{cm} + Md^2$$

$$\text{Perpendicular axis:} \quad I_z = I_x + I_y$$

$$\text{Conservation of } L: \quad I_1\omega_1 = I_2\omega_2$$

---

## 13. Solved Numerical Problems

---

### Problem 1 (2021)
> A circular disc of mass **900 g** and radius **50 cm** is revolving at **120 rpm** about an axis passing through its center and perpendicular to its plane. Calculate the moment of inertia of the disc.

**Solution:**

Given:
- Mass, $M = 900 \text{ g} = 0.9 \text{ kg}$
- Radius, $R = 50 \text{ cm} = 0.5 \text{ m}$
- Speed = 120 rpm *(not needed for MI, which depends only on mass and geometry)*

Using the formula for a disc (axis through center, ⊥ plane):

$$I = \frac{1}{2}MR^2$$

$$I = \frac{1}{2} \times 0.9 \times (0.5)^2$$

$$I = \frac{1}{2} \times 0.9 \times 0.25$$

$$\boxed{I = 0.1125 \text{ kg·m}^2}$$

**Bonus — Angular velocity and Angular momentum:**

$$\omega = \frac{2\pi N}{60} = \frac{2\pi \times 120}{60} = 4\pi \approx 12.57 \text{ rad/s}$$

$$L = I\omega = 0.1125 \times 4\pi = 0.45\pi \approx 1.414 \text{ kg·m}^2/\text{s}$$

$$KE_{rot} = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 0.1125 \times (4\pi)^2 = \frac{1}{2} \times 0.1125 \times 157.91 \approx 8.88 \text{ J}$$

---

### Problem 2 (General — Parallel Axis Theorem)
> Find the MI of the same disc (M = 0.9 kg, R = 0.5 m) about a tangent perpendicular to its plane.

**Solution:**

Using parallel axis theorem with $d = R = 0.5$ m:

$$I_{tangent} = I_{cm} + Md^2 = \frac{1}{2}MR^2 + MR^2 = \frac{3}{2}MR^2$$

$$I = \frac{3}{2} \times 0.9 \times (0.5)^2 = \frac{3}{2} \times 0.9 \times 0.25 = \boxed{0.3375 \text{ kg·m}^2}$$

---

### Problem 3 (Conservation of Angular Momentum)
> A spinning disc has $I_1 = 0.4$ kg·m² and $\omega_1 = 10$ rad/s. A mass is added, making $I_2 = 0.8$ kg·m². Find the new angular velocity.

**Solution:**

No external torque → $L$ conserved:
$$I_1\omega_1 = I_2\omega_2$$

$$\omega_2 = \frac{I_1\omega_1}{I_2} = \frac{0.4 \times 10}{0.8} = \boxed{5 \text{ rad/s}}$$

---

## 📝 Quick Revision Summary

| Concept | Key Formula / Fact |
|---|---|
| Angular velocity | $\omega = d\theta/dt$, unit: rad/s |
| Linear-angular relation | $v = r\omega$, $a = r\alpha$ |
| RPM conversion | $\omega = 2\pi N/60$ |
| Moment of inertia | $I = \sum mr^2$; resists rotation like mass resists translation |
| Torque | $\tau = I\alpha = dL/dt$ |
| Angular momentum | $L = I\omega$; conserved when $\tau_{ext} = 0$ |
| Disc MI (center, ⊥ plane) | $I = \frac{1}{2}MR^2$ ← **most important** |
| Parallel axis theorem | $I = I_{cm} + Md^2$ |
| Perpendicular axis theorem | $I_z = I_x + I_y$ (plane lamina only) |
| Rotational KE | $\frac{1}{2}I\omega^2$ |

---

*Notes compiled from exam questions: 2021 | Physics-I, Rotational Mechanics*
