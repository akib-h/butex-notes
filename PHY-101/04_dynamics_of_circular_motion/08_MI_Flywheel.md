# 08. Moment of Inertia of a Flywheel

> **Subject:** Physics I — Dynamics of Circular Motion
> **Date:** April 08, 2026
> **Level:** University / Undergraduate

---

## Table of Contents

1. [What is a Flywheel?](#1-what-is-a-flywheel)
2. [Structure and Components](#2-structure-and-components)
3. [Moment of Inertia of a Flywheel](#3-moment-of-inertia-of-a-flywheel)
4. [Experimental Determination of MI of a Flywheel](#4-experimental-determination-of-mi-of-a-flywheel)
5. [Energy Stored in a Flywheel](#5-energy-stored-in-a-flywheel)
6. [Applications of Flywheel](#6-applications-of-flywheel)
7. [Worked Examples](#7-worked-examples)
8. [Online References](#8-online-references)

---

## 1. What is a Flywheel?

A **flywheel** is a heavy rotating mechanical device used to store **rotational kinetic energy**. It acts as a **rotational energy reservoir** — absorbing energy when excess is available and releasing it when needed.

> A flywheel resists changes in angular velocity due to its large moment of inertia.

### Key Characteristics:

| Feature | Description |
|---------|-------------|
| High mass | Concentrated at rim for maximum I |
| Large radius | Rim-heavy design maximizes I |
| Material | Cast iron, steel, carbon fiber (modern) |
| Purpose | Energy storage, smoothing torque fluctuations |
| Rotation | About own axis (symmetry axis) |

---

## 2. Structure and Components

A typical flywheel consists of:

```
             ┌─────────────────────────────┐
             │  ← R₂ (outer/rim radius) →  │
             │                             │
             │    ┌─────────────────┐      │
             │    │  Rim (heavy)    │      │ ← thick heavy rim
             │    └─────────────────┘      │
             │              │               │
             │         Spokes               │
             │              │               │
             │    ┌─────────────────┐      │
             │    │   Hub/Axle      │      │ ← thin hub, radius R₁
             │    └─────────────────┘      │
             └─────────────────────────────┘
```

**Components:**
1. **Rim** — Thick, heavy outer ring. Carries most of the mass for maximum I.
2. **Hub** — Central cylinder connected to the axle.
3. **Spokes** — Connect the hub to the rim. Usually thin (low mass).
4. **Axle** — Central shaft on which the flywheel rotates.

For calculation purposes, spokes and hub are often neglected (or treated separately) since the rim carries ~80–90% of the total mass.

---

## 3. Moment of Inertia of a Flywheel

### 3.1 Simple Model — Flywheel as a Thick Ring (Annular Disc)

The flywheel is modeled as an **annular disc** (thick ring) with:
- Inner radius (hub/bore): $R_1$
- Outer radius (rim): $R_2$
- Total mass: $M$

From the annular disc formula:

$$\boxed{I = \frac{1}{2}M(R_1^2 + R_2^2)}$$

### 3.2 More Realistic Model — Separate Components

For precision, compute I for each component:

$$I_{total} = I_{rim} + I_{spokes} + I_{hub}$$

**For the rim** (modeled as thin ring of radius $R_{rim}$, mass $m_{rim}$):
$$I_{rim} = m_{rim} R_{rim}^2$$

**For n spokes** (each a thin rod of length $L$, mass $m_s$, fixed at hub):

$$I_{spoke} = \frac{1}{3}m_s L^2 \quad \text{(about one end)}$$

$$I_{spokes} = n \cdot \frac{1}{3}m_s L^2$$

**For hub** (solid cylinder, mass $m_h$, radius $r_h$):

$$I_{hub} = \frac{1}{2}m_h r_h^2$$

**Total:**

$$\boxed{I_{flywheel} = m_{rim}R_{rim}^2 + \frac{n \cdot m_s L^2}{3} + \frac{m_h r_h^2}{2}}$$

---

## 4. Experimental Determination of MI of a Flywheel

This is an important **lab experiment** for measuring I directly.

### Setup

```
         ┌──────────┐
         │  Flywheel│ ← mounted on axle (radius r)
         └────┬─────┘
              │  ← axle
              │
    ┌─────────┴──────────┐
    │   String wound     │
    │   around axle      │
    └─────────┬──────────┘
              │
           ┌──┴──┐
           │  m  │ ← hanging mass
           └─────┘
```

### Theory

A mass $m$ is attached to a string wound around the axle (radius $r$). The mass falls a height $h$.

**When mass falls height h from rest:**

Using energy conservation (with friction torque $\tau_f$):

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2 + W_{friction}$$

If the string detaches when mass hits the ground (at velocity $v$, angular velocity $\omega = v/r$):

The flywheel then decelerates from $\omega$ to rest due to friction alone.

**Let:**
- $n_1$ = number of rotations while mass falls height $h$
- $n_2$ = number of rotations after string detaches until flywheel stops
- $v$ = velocity when mass reaches ground

**Step 1 — After string detaches (flywheel decelerating):**

$$\frac{1}{2}I\omega^2 = W_{friction} = \tau_f \times 2\pi n_2$$

$$I\omega^2 = 4\pi n_2 \tau_f \quad \cdots (1)$$

**Step 2 — While mass descends:**

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2 + \tau_f \times 2\pi n_1$$

From (1): $\frac{1}{2}I\omega^2 = 2\pi n_2 \tau_f$

Substituting and solving:

$$\tau_f = \frac{mgh - \frac{1}{2}mv^2}{2\pi(n_1 + n_2)}$$

And:

$$I = \frac{m(2gh - v^2) \cdot n_2}{\omega^2(n_1 + n_2)}$$

Since $v = \omega r$:

$$\boxed{I = \frac{mr^2(2gh/v^2 - 1) \cdot n_2}{n_1 + n_2}}$$

> This is the standard flywheel experiment formula used in university physics labs.

---

## 5. Energy Stored in a Flywheel

The **rotational kinetic energy** stored in a flywheel:

$$\boxed{E = \frac{1}{2}I\omega^2 = \frac{1}{2}MK^2\omega^2}$$

where $K$ is the radius of gyration.

### Useful Energy (Energy Between Two Speeds)

If a flywheel speeds up from $\omega_1$ to $\omega_2$, it absorbs energy; when slowing from $\omega_2$ to $\omega_1$, it releases:

$$\Delta E = \frac{1}{2}I(\omega_2^2 - \omega_1^2)$$

### Coefficient of Fluctuation of Speed

$$C_s = \frac{\omega_{max} - \omega_{min}}{\omega_{mean}} = \frac{\omega_2 - \omega_1}{\bar{\omega}}$$

Energy fluctuation:

$$\Delta E = I\bar{\omega}^2 C_s$$

---

## 6. Applications of Flywheel

| Application | How Flywheel Helps |
|-------------|-------------------|
| **Steam engines / IC engines** | Smooths torque pulses between power strokes |
| **Punch presses / forging machines** | Stores energy between punching operations |
| **Grid-scale energy storage** | Modern magnetic-bearing flywheels store MW·h |
| **Electric vehicles (KERS)** | Kinetic Energy Recovery System — braking energy stored |
| **Spacecraft attitude control** | Reaction wheels (mini-flywheels) control orientation |
| **UPS Systems** | Flywheel UPS provides instantaneous backup power |
| **Potter's wheel** | Heavy flywheel at base maintains smooth rotation |

---

## 7. Worked Examples

### Example 1 — Simple Flywheel (Annular Ring)

**Problem:** A flywheel in the form of an annular disc of mass 50 kg has inner radius 0.2 m and outer radius 0.5 m. Calculate:
- (a) Moment of Inertia
- (b) Kinetic energy stored at 300 rpm
- (c) Radius of gyration

**Solution:**

(a) M.I.:
$$I = \frac{1}{2}M(R_1^2 + R_2^2) = \frac{1}{2} \times 50 \times [(0.2)^2 + (0.5)^2]$$
$$= 25 \times [0.04 + 0.25] = 25 \times 0.29 = 7.25 \text{ kg·m}^2$$

(b) Angular velocity:
$$\omega = \frac{300 \times 2\pi}{60} = 10\pi \approx 31.42 \text{ rad/s}$$

KE:
$$E = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 7.25 \times (10\pi)^2 = \frac{7.25 \times 100\pi^2}{2} \approx 3574 \text{ J}$$

$$\boxed{E \approx 3574 \text{ J} = 3.574 \text{ kJ}}$$

(c) Radius of gyration:
$$K = \sqrt{\frac{I}{M}} = \sqrt{\frac{7.25}{50}} = \sqrt{0.145} \approx 0.381 \text{ m}$$

$$\boxed{K \approx 0.381 \text{ m}}$$

---

### Example 2 — Flywheel with Components

**Problem:** A flywheel has a rim of mass 8 kg at radius 0.4 m, 6 spokes each of mass 0.5 kg and length 0.4 m, and a hub of mass 1 kg and radius 0.05 m. Find total M.I. about the axle.

**Solution:**

$I_{rim} = m_{rim}R^2 = 8 \times (0.4)^2 = 1.28$ kg·m²

$I_{spokes} = 6 \times \frac{1}{3}m_s L^2 = 6 \times \frac{1}{3} \times 0.5 \times (0.4)^2 = 6 \times \frac{0.5 \times 0.16}{3} = 6 \times 0.0267 = 0.16$ kg·m²

$I_{hub} = \frac{1}{2}m_h r_h^2 = \frac{1}{2} \times 1 \times (0.05)^2 = 0.00125$ kg·m²

$$I_{total} = 1.28 + 0.16 + 0.00125 \approx 1.441 \text{ kg·m}^2$$

$$\boxed{I_{total} \approx 1.44 \text{ kg·m}^2}$$

Note: The rim contributes **88.8%** of the total M.I. — justifying the simplified annular disc model.

---

### Example 3 — Flywheel Experiment (Lab)

**Problem:** In a flywheel experiment:
- Mass hung: $m = 0.5$ kg
- Axle radius: $r = 0.02$ m
- Height fallen: $h = 1.5$ m
- Velocity when mass hits ground: $v = 1.0$ m/s
- $n_1 = 15$ rotations while mass falls
- $n_2 = 40$ rotations after string detaches

Find the moment of inertia of the flywheel.

**Solution:**

$$I = \frac{mr^2(2gh/v^2 - 1) \cdot n_2}{n_1 + n_2}$$

$$= \frac{0.5 \times (0.02)^2 \times \left(\frac{2 \times 9.8 \times 1.5}{1.0^2} - 1\right) \times 40}{15 + 40}$$

$$= \frac{0.5 \times 4\times10^{-4} \times (29.4 - 1) \times 40}{55}$$

$$= \frac{0.5 \times 4\times10^{-4} \times 28.4 \times 40}{55}$$

$$= \frac{2\times10^{-4} \times 1136}{55} = \frac{0.2272}{55} \approx 0.00413 \text{ kg·m}^2$$

$$\boxed{I \approx 4.13 \times 10^{-3} \text{ kg·m}^2}$$

---

### Example 4 — Energy Release

**Problem:** A flywheel of moment of inertia 12 kg·m² slows from 1200 rpm to 900 rpm in 10 seconds. Find:
- (a) Energy released
- (b) Average power output

**Solution:**

$$\omega_1 = \frac{1200 \times 2\pi}{60} = 40\pi \text{ rad/s}$$
$$\omega_2 = \frac{900 \times 2\pi}{60} = 30\pi \text{ rad/s}$$

(a) Energy released:
$$\Delta E = \frac{1}{2}I(\omega_1^2 - \omega_2^2) = \frac{1}{2} \times 12 \times [(40\pi)^2 - (30\pi)^2]$$

$$= 6 \times \pi^2[(1600) - (900)] = 6 \times 9.87 \times 700$$

$$\approx 6 \times 9.87 \times 700 = 41454 \text{ J}$$

$$\boxed{\Delta E \approx 41.5 \text{ kJ}}$$

(b) Average power:
$$P = \frac{\Delta E}{\Delta t} = \frac{41454}{10} \approx 4145 \text{ W}$$

$$\boxed{P \approx 4.15 \text{ kW}}$$

---

## 8. Online References

- 📖 [HyperPhysics — Flywheel](http://hyperphysics.phy-astr.gsu.edu/hbase/mi.html)
- 📖 [Wikipedia — Flywheel](https://en.wikipedia.org/wiki/Flywheel)
- 📖 [Wikipedia — Flywheel Energy Storage](https://en.wikipedia.org/wiki/Flywheel_energy_storage)
- 📖 [Engineering Toolbox — Flywheel Kinetic Energy](https://www.engineeringtoolbox.com/flywheel-energy-d_945.html)
- 📖 [LibreTexts — Rotational Kinetic Energy](https://phys.libretexts.org/)
- 🎥 [Real Engineering — Flywheel Energy Storage](https://www.youtube.com/watch?v=gBxzWe3qp0Y)

---

> **← Previous:** [07. MI of Solid Sphere](./07_MI_Solid_Sphere.md)
> **↑ Back to Index:** [README](./README.md)
