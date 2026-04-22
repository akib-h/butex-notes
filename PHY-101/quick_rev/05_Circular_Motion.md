# 🔄 Chapter 5: Dynamics of Circular Motion

> **Topics:** Moment of Inertia · Angular Velocity · Angular Momentum · Torque · Theorems of Axes · Radius of Gyration · Kinetic Energy

---

## Table of Contents
- [1. Angular Velocity and Angular Momentum](#1-angular-velocity-and-angular-momentum)
- [2. Torque and Moment of Inertia](#2-torque-and-moment-of-inertia)
- [3. Radius of Gyration](#3-radius-of-gyration)
- [4. Moment of Inertia of Common Bodies](#4-moment-of-inertia-of-common-bodies)
- [5. Theorem of Perpendicular Axes](#5-theorem-of-perpendicular-axes)
- [6. Theorem of Parallel Axes](#6-theorem-of-parallel-axes)
- [7. Kinetic Energy and Moment of Inertia](#7-kinetic-energy-and-moment-of-inertia)
- [8. Rolling Motion](#8-rolling-motion)
- [9. Solved Numerical Problems](#9-solved-numerical-problems)
- [References](#references)

---

## 1. Angular Velocity and Angular Momentum

### Q: Define angular velocity. *(2021)*

### Angular Velocity ($\omega$)

**Angular velocity** is the rate of change of angular displacement.

$$\boxed{\omega = \frac{d\theta}{dt}} \quad \text{(rad/s)}$$

For uniform circular motion with time period $T$:

$$\omega = \frac{2\pi}{T} = 2\pi f$$

Relation to linear velocity:

$$v = r\omega$$

### Angular Momentum ($L$)

**Angular momentum** is the rotational analog of linear momentum.

$$\boxed{L = I\omega}$$

Where $I$ = moment of inertia, $\omega$ = angular velocity.

Also: $L = mvr$ for a particle of mass $m$, speed $v$, at radius $r$.

**Conservation of Angular Momentum:** In the absence of external torque:
$$L = I\omega = \text{constant}$$

---

## 2. Torque and Moment of Inertia

### Q: Derive a relation between the angular momentum and the moment of inertia. *(2021, 2022)*
### Q: Derive a relation between torque and moment of inertia. *(2019)*

### Moment of Inertia

**Moment of inertia** ($I$) is the measure of a body's resistance to angular acceleration, analogous to mass in linear motion.

$$\boxed{I = \sum_i m_i r_i^2 = \int r^2 \, dm}$$

Where $r_i$ = perpendicular distance of mass element $m_i$ from the axis of rotation.

**SI Unit:** kg·m²

### Derivation: Torque and Moment of Inertia

Consider a rigid body rotating about a fixed axis. A particle of mass $m_i$ at distance $r_i$ has:

- Linear acceleration: $a_i = r_i \alpha$ (where $\alpha$ = angular acceleration)
- Force on particle: $F_i = m_i a_i = m_i r_i \alpha$
- Torque of this force: $\tau_i = F_i \times r_i = m_i r_i^2 \alpha$

Total torque:
$$\tau = \sum_i \tau_i = \left(\sum_i m_i r_i^2\right)\alpha = I\alpha$$

$$\boxed{\tau = I\alpha}$$

This is Newton's second law for rotation. Compare with $F = ma$.

### Derivation: Angular Momentum and Moment of Inertia

Torque = rate of change of angular momentum:
$$\tau = \frac{dL}{dt}$$

Since $\tau = I\alpha = I\frac{d\omega}{dt}$:

$$\frac{dL}{dt} = I\frac{d\omega}{dt}$$

Integrating (for constant $I$):

$$\boxed{L = I\omega}$$

---

## 3. Radius of Gyration

### Q: What is radius of gyration? *(2022, 2021, 2020, 2019)*

**Radius of gyration** ($k$) is the distance from the axis of rotation at which the entire mass of the body may be assumed to be concentrated to give the same moment of inertia as the actual body.

$$I = Mk^2 \implies \boxed{k = \sqrt{\frac{I}{M}}}$$

**SI Unit:** metres (m)

**Physical meaning:**
- If all mass $M$ were placed at distance $k$ from axis → same rotational inertia
- Depends on both the shape and the choice of axis

**Example:** For a solid disc about central axis:
$$I = \frac{1}{2}MR^2 \implies k = \frac{R}{\sqrt{2}} \approx 0.707R$$

---

## 4. Moment of Inertia of Common Bodies

### Q: Derive an equation of moment of inertia of a uniform circular disc passing through its center and perpendicular to its plane. *(2021, 2022)*

### Moment of Inertia of a Solid Disc

```
         ─────── R ───────
        ╱                 ╲
       │      ┌───┐         │
       │    r │   │r+dr     │  ← ring element
       │      └───┘         │
        ╲                 ╱
         ─────────────────
         
    Axis: ⊙ (perpendicular to plane, through center)
```

Consider a thin ring at radius $r$, width $dr$:
- Area of ring: $dA = 2\pi r \, dr$
- Mass of ring: $dm = \rho \cdot dA = \frac{M}{\pi R^2} \cdot 2\pi r \, dr = \frac{2Mr}{R^2} dr$

$$dI = r^2 \, dm = \frac{2Mr^3}{R^2} dr$$

$$I = \int_0^R \frac{2Mr^3}{R^2} dr = \frac{2M}{R^2} \cdot \frac{R^4}{4}$$

$$\boxed{I_{disc} = \frac{1}{2}MR^2}$$

### MOI of Other Common Bodies

| Body | Axis | Moment of Inertia |
|---|---|:---:|
| Solid disc | Central, ⊥ to plane | $\frac{1}{2}MR^2$ |
| Ring/Hoop | Central, ⊥ to plane | $MR^2$ |
| Solid sphere | Diameter | $\frac{2}{5}MR^2$ |
| Hollow sphere | Diameter | $\frac{2}{3}MR^2$ |
| Solid cylinder | Central axis | $\frac{1}{2}MR^2$ |
| Thin rod | End, ⊥ | $\frac{1}{3}ML^2$ |
| Thin rod | Center, ⊥ | $\frac{1}{12}ML^2$ |
| Disc | Diameter | $\frac{1}{4}MR^2$ |

---

## 5. Theorem of Perpendicular Axes

### Q: State and prove the theorem of perpendicular axes in moment of inertia. *(2023, 2022, 2021, 2020, 2018, 2017)*

### Statement

> *For a plane lamina, the moment of inertia about an axis perpendicular to its plane is equal to the sum of moments of inertia about two mutually perpendicular axes lying in the plane of the lamina, passing through the same point.*

$$\boxed{I_z = I_x + I_y}$$

Where $x$, $y$ are in the plane and $z$ is perpendicular to it.

### Proof

```
         z (⊥ to plane)
         ↑
         │
         │      • particle P (mass m)
         │     /╲ at (x, y)
         │    / ↑
         │   /  y
    ─────┼──/────────────────→ x
         │ /←x→
         │
     (plane lamina in x-y plane)
```

Consider a particle of mass $m$ at point $(x, y)$ in the lamina.

- Distance from $z$-axis: $r = \sqrt{x^2 + y^2}$
- Moment of inertia about $z$: $dI_z = mr^2 = m(x^2 + y^2)$
- Moment of inertia about $x$-axis: $dI_x = my^2$
- Moment of inertia about $y$-axis: $dI_y = mx^2$

$$dI_z = m(x^2 + y^2) = mx^2 + my^2 = dI_y + dI_x$$

Summing over all particles:

$$\boxed{I_z = I_x + I_y}$$

**Application:** For a disc — $I_x = I_y = \frac{1}{4}MR^2$ (by symmetry), so:
$$I_z = \frac{1}{4}MR^2 + \frac{1}{4}MR^2 = \frac{1}{2}MR^2 \checkmark$$

---

## 6. Theorem of Parallel Axes

### Q: State and prove the theorem of parallel axes in moment of inertia. *(2022, 2021, 2020, 2019, 2018, 2017)*

### Statement

> *The moment of inertia of a body about any axis is equal to the moment of inertia about a parallel axis through the center of mass, plus the product of the total mass and the square of the distance between the axes.*

$$\boxed{I = I_{cm} + Md^2}$$

Where:
- $I_{cm}$ = MOI about axis through center of mass
- $M$ = total mass
- $d$ = distance between the two parallel axes

### Proof

```
    CM axis (⊥ to page)     Parallel axis (⊥ to page)
         ↓                        ↓
    ─────●─────────────────────── ●─────
         CM                  P
         │←────── d ──────→│
```

Let CM be the center of mass. Let $P$ be any particle of mass $m_i$ at position $(x_i, y_i)$ from CM, where $d$ is along x-axis.

Distance from CM axis: $r_i = \sqrt{x_i^2 + y_i^2}$
Distance from new axis: $r_i' = \sqrt{(x_i - d)^2 + y_i^2}$

$$I = \sum m_i r_i'^2 = \sum m_i[(x_i - d)^2 + y_i^2]$$

$$= \sum m_i(x_i^2 + y_i^2) - 2d\sum m_i x_i + d^2 \sum m_i$$

Now:
- $\sum m_i(x_i^2 + y_i^2) = I_{cm}$
- $\sum m_i x_i = 0$ (since origin is at CM: $\sum m_i x_i = M \bar{x}_{cm} = 0$)
- $\sum m_i = M$

$$I = I_{cm} + 0 + Md^2$$

$$\boxed{I = I_{cm} + Md^2}$$

**Application:** MOI of disc about tangential axis (edge):
$$I_{tangent} = \frac{1}{2}MR^2 + MR^2 = \frac{3}{2}MR^2$$

---

## 7. Kinetic Energy and Moment of Inertia

### Q: Find out the relation between kinetic energy and moment of inertia. *(2023, 2022, 2021)*

### Rotational Kinetic Energy

For a body rotating with angular velocity $\omega$, each particle $m_i$ at radius $r_i$ has linear velocity $v_i = r_i\omega$.

$$KE = \sum \frac{1}{2}m_i v_i^2 = \sum \frac{1}{2}m_i r_i^2 \omega^2 = \frac{1}{2}\omega^2 \sum m_i r_i^2$$

$$\boxed{KE_{rot} = \frac{1}{2}I\omega^2}$$

Compare with: $KE_{linear} = \frac{1}{2}mv^2$

**Relating KE to Angular Momentum:**

Since $L = I\omega$:
$$KE = \frac{1}{2}I\omega^2 = \frac{(I\omega)^2}{2I} = \frac{L^2}{2I}$$

$$\boxed{KE = \frac{L^2}{2I}}$$

---

## 8. Rolling Motion

### Q: Show that the total kinetic energy of a disc rolling on a surface is 0.75 mv². *(2017)*

For a disc of mass $M$, radius $R$, rolling with velocity $v$ (no slip: $v = R\omega$):

$$KE_{total} = KE_{trans} + KE_{rot}$$

$$KE_{total} = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2$$

For a solid disc: $I = \frac{1}{2}MR^2$, $\omega = v/R$:

$$KE_{total} = \frac{1}{2}Mv^2 + \frac{1}{2} \times \frac{1}{2}MR^2 \times \frac{v^2}{R^2}$$

$$KE_{total} = \frac{1}{2}Mv^2 + \frac{1}{4}Mv^2$$

$$\boxed{KE_{total} = \frac{3}{4}Mv^2 = 0.75Mv^2}$$

---

## 9. Solved Numerical Problems

---

### Problem 1 *(2023, 2022, 2021)*
**A circular disc of mass 900 grams and radius 50 cm is revolving at 120 rpm about an axis through its center and perpendicular to its plane. Calculate the moment of inertia.**

**Given:**
- $M = 900 \, \text{g} = 0.9 \, \text{kg}$
- $R = 50 \, \text{cm} = 0.5 \, \text{m}$

**Solution:**

$$I = \frac{1}{2}MR^2 = \frac{1}{2} \times 0.9 \times (0.5)^2$$

$$I = \frac{1}{2} \times 0.9 \times 0.25$$

$$\boxed{I = 0.1125 \, \text{kg·m}^2}$$

---

### Problem 2 *(2023)*
**A circular disc of mass 100 grams and radius 10 cm is making 120 rpm about an axis passing through its center and perpendicular to its plane. Calculate its kinetic energy.**

**Given:**
- $M = 100 \, \text{g} = 0.1 \, \text{kg}$
- $R = 10 \, \text{cm} = 0.1 \, \text{m}$
- $n = 120 \, \text{rpm} = \frac{120}{60} = 2 \, \text{rev/s}$

**Solution:**

Angular velocity:
$$\omega = 2\pi n = 2\pi \times 2 = 4\pi \, \text{rad/s}$$

Moment of inertia:
$$I = \frac{1}{2}MR^2 = \frac{1}{2} \times 0.1 \times (0.1)^2 = 5 \times 10^{-4} \, \text{kg·m}^2$$

Kinetic energy:
$$KE = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 5 \times 10^{-4} \times (4\pi)^2$$

$$KE = \frac{1}{2} \times 5 \times 10^{-4} \times 16\pi^2$$

$$KE = \frac{1}{2} \times 5 \times 10^{-4} \times 157.9$$

$$\boxed{KE \approx 3.95 \times 10^{-2} \, \text{J} \approx 0.04 \, \text{J}}$$

---

### Problem 3 *(2020)*
**A flywheel of mass 100 kg and radius 0.5 m makes 10 revolutions per second. Calculate angular momentum.**

**Given:**
- $M = 100 \, \text{kg}$
- $R = 0.5 \, \text{m}$
- $f = 10 \, \text{rev/s}$

**Solution:**

$$\omega = 2\pi f = 2\pi \times 10 = 20\pi \, \text{rad/s}$$

Treating flywheel as solid disc:
$$I = \frac{1}{2}MR^2 = \frac{1}{2} \times 100 \times 0.25 = 12.5 \, \text{kg·m}^2$$

$$L = I\omega = 12.5 \times 20\pi$$

$$\boxed{L = 250\pi \approx 785.4 \, \text{kg·m}^2/\text{s}}$$

---

### Problem 4 *(2022)*
**A flywheel is accelerated by a steady torque of 25 N·m to make 3 revolutions in the first second. Mass = 15 kg. Calculate radius of gyration.**

**Given:**
- $\tau = 25 \, \text{N·m}$
- $\theta = 3 \, \text{rev} = 6\pi \, \text{rad}$ in $t = 1 \, \text{s}$ (starting from rest)
- $M = 15 \, \text{kg}$

**Solution:**

Angular acceleration (from $\theta = \frac{1}{2}\alpha t^2$ since $\omega_0 = 0$):
$$6\pi = \frac{1}{2}\alpha(1)^2 \implies \alpha = 12\pi \, \text{rad/s}^2$$

Using $\tau = I\alpha$:
$$I = \frac{\tau}{\alpha} = \frac{25}{12\pi} = \frac{25}{37.7} \approx 0.663 \, \text{kg·m}^2$$

Radius of gyration:
$$k = \sqrt{\frac{I}{M}} = \sqrt{\frac{0.663}{15}} = \sqrt{0.0442}$$

$$\boxed{k \approx 0.210 \, \text{m} \approx 21 \, \text{cm}}$$

---

### Problem 5 *(2018)*
**Calculate the moment of inertia of a solid sphere about its diameter.**

For a solid sphere of mass $M$ and radius $R$:

$$\boxed{I_{diameter} = \frac{2}{5}MR^2}$$

**Derivation sketch:**
Consider thin disc slices at height $y$ from center, radius $r = \sqrt{R^2 - y^2}$:
$$dI = \frac{1}{4}(dm)r^2 + (dm)y^2 = \frac{1}{4}r^2 dm + y^2 dm$$

Wait, for rotation about diameter (x-axis), using perpendicular axis theorem properly:
After integration from $-R$ to $R$: $I = \frac{2}{5}MR^2$

---

## References

1. Halliday, D., Resnick, R. — *Physics*, Ch. 10–11 (Rotational Dynamics), Wiley
2. Young, H.D. & Freedman, R.A. — *University Physics*, Ch. 10 (Rotation), Pearson
3. Feynman, R.P. — *The Feynman Lectures on Physics*, Vol. 1, Ch. 18–20
4. Beer, F.P. & Johnston, E.R. — *Vector Mechanics for Engineers: Dynamics*, McGraw-Hill
5. [HyperPhysics — Moment of Inertia](http://hyperphysics.phy-astr.gsu.edu/hbase/mi.html)
6. [PhysicsClassroom — Angular Momentum](https://www.physicsclassroom.com/class/circles)
7. [MIT OpenCourseWare — Rotational Dynamics](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)

---

*[← Elasticity](./04_Elasticity.md) | [Back to README](./README.md) | [Interference →](./06_Interference.md)*
