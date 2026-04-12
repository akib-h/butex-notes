# 06. Unsteady Motion (Unsteady Flow)

> **Date:** April 10, 2026 | **Topic:** 6 of 12 | [← Steady Motion](./05_steady_motion.md) | [Next: Streamline Motion →](./07_streamline_motion.md)

---

## 📋 Table of Contents

1. [Definition](#1-definition)
2. [Mathematical Condition](#2-mathematical-condition)
3. [Types of Unsteady Flow](#3-types-of-unsteady-flow)
4. [Physical Interpretation](#4-physical-interpretation)
5. [Quasi-Steady Approximation](#5-quasi-steady-approximation)
6. [Worked Examples](#7-worked-examples)
7. [References](#8-references)

---

## 1. Definition

> **Unsteady Flow:** A flow is said to be **unsteady** if the flow properties (velocity, pressure, density) at any given point **change with time**.

$$\frac{\partial \vec{v}}{\partial t} \neq 0$$

```
UNSTEADY FLOW — properties at a fixed point change over time

Time t₁:   →→         (slow flow early)
Time t₂:   →→→→→→     (flow increases)  
Time t₃:   →→→→→→→→→  (fast flow later)

At fixed point P: v₁ ≠ v₂ ≠ v₃  → UNSTEADY
```

---

## 2. Mathematical Condition

$$\frac{\partial v}{\partial t} \neq 0$$

The **local (temporal) acceleration** is non-zero.

---

## 3. Types of Unsteady Flow

### 3.1 Transient Flow

Flow that changes during a startup or shutdown phase and eventually reaches a steady state.

**Example:** Opening a water tap — flow rate increases until steady.

```
  Q
  │       ___________steady state
  │      /
  │     /
  │    /  transient phase
  │   /
  │__/
  └──────────────── t
  
  (Valve opens at t=0)
```

### 3.2 Periodic (Oscillatory) Flow

Flow that repeats in a cycle — velocity oscillates with time.

**Example:** Blood flow (pulsatile), tidal flow, oscillating pistons.

$$v(t) = V_0 + V_1 \sin(\omega t)$$

```
  v
  │    ╭─╮     ╭─╮     ╭─╮
  │   ╭╯ ╰╮   ╭╯ ╰╮   ╭╯ ╰╮
  │───╯    ╰───╯    ╰───╯    ╰──  t
  
  (Oscillating/periodic unsteady flow)
```

### 3.3 Truly Unsteady (Random/Turbulent Fluctuations)

Random, non-repeating velocity fluctuations characteristic of turbulent flow.

---

## 4. Physical Interpretation

| Scenario | Flow Type |
|----------|-----------|
| Opening/closing a valve | Unsteady (transient) |
| Pump starting up | Unsteady |
| Flood wave in river | Unsteady |
| Tidal currents | Unsteady (periodic) |
| Blood flow in heart cycle | Unsteady (periodic) |
| Aircraft gust response | Unsteady |
| Constant-speed river (approx.) | Steady |

---

## 5. Quasi-Steady Approximation

When the rate of change is **very slow**, the unsteady flow may be analyzed using **quasi-steady** approximation: treating each instant as if it were a momentary steady state.

**Example:** Slowly draining a large tank — at each instant, the flow is approximately steady.

**Condition for quasi-steady validity:**

$$\frac{1}{v}\frac{\partial v}{\partial t} \ll \frac{\partial v}{\partial s}$$

(Rate of time change ≪ spatial variation)

---

## 6. Worked Examples

### Example 6.1 — Identifying Unsteady Flow

**Problem:** Velocity at a point in a pipe is given by $v = (3 + 2t)$ m/s. Is the flow steady or unsteady?

**Solution:**

$$\frac{\partial v}{\partial t} = 2 \neq 0 \quad \Rightarrow \text{UNSTEADY FLOW}$$

At $t = 0$: $v = 3$ m/s; At $t = 2$s: $v = 7$ m/s → velocity changes with time.

---

### Example 6.2 — Periodic Flow

**Problem:** Blood flow velocity in an artery is described by $v(t) = 0.3 + 0.2\sin(2\pi t)$ m/s, where $t$ is in seconds. 
- (a) Is this steady or unsteady?
- (b) What is the mean velocity?
- (c) What is the period?

**Solution:**

**(a):** $\frac{\partial v}{\partial t} = 0.2 \times 2\pi \cos(2\pi t) \neq 0$ → **Unsteady (periodic)**

**(b):** Mean = $0.3$ m/s (the constant term; the sine averages to zero)

**(c):** Period = $\frac{2\pi}{2\pi} = 1$ second (corresponds to heart rate ~60 bpm)

---

### Example 6.3 — Draining Tank (Quasi-Steady)

**Problem:** A large tank (cross-section $A_T = 1 \text{ m}^2$) has a small orifice ($A_o = 0.01 \text{ m}^2$) at the bottom. Initial water height $h_0 = 4$ m. Using Torricelli's theorem $v = \sqrt{2gh}$, find how long it takes to drain to $h = 1$ m. (Quasi-steady analysis)

**Solution:**

At any instant: $v = \sqrt{2gh}$, outflow $= A_o \sqrt{2gh}$

Conservation:
$$A_T \frac{dh}{dt} = -A_o \sqrt{2gh}$$

$$\int_{h_0}^{h_f} \frac{dh}{\sqrt{h}} = -\frac{A_o}{A_T}\sqrt{2g} \int_0^T dt$$

$$2(\sqrt{h_f} - \sqrt{h_0}) = -\frac{A_o}{A_T}\sqrt{2g} \cdot T$$

$$T = \frac{2 A_T}{A_o \sqrt{2g}}(\sqrt{h_0} - \sqrt{h_f})$$

$$T = \frac{2 \times 1}{0.01 \times \sqrt{2 \times 9.81}}(\sqrt{4} - \sqrt{1})$$

$$T = \frac{2}{0.01 \times 4.429}(2 - 1) = \frac{2}{0.04429} = \boxed{45.2 \text{ s}}$$

---

## 7. References

- 📘 White — *Fluid Mechanics*, McGraw-Hill
- 📘 Munson et al. — *Fundamentals of Fluid Mechanics*
- 🌐 [MIT OCW — Unsteady Flows](https://ocw.mit.edu/courses/2-20-marine-hydrodynamics-13-021-spring-2005/)
- 🌐 [HyperPhysics — Fluid Flow](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html)

---

[← Steady Motion](./05_steady_motion.md) | [← Back to Index](./README.md) | [Next: Streamline Motion →](./07_streamline_motion.md)
