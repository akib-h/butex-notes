# 05. Steady Motion (Steady Flow)

> **Date:** April 10, 2026 | **Topic:** 5 of 12 | [← Non-Uniform](./04_non_uniform_motion.md) | [Next: Unsteady →](./06_unsteady_motion.md)

---

## 📋 Table of Contents

1. [Definition](#1-definition)
2. [Mathematical Condition](#2-mathematical-condition)
3. [Characteristics of Steady Flow](#3-characteristics-of-steady-flow)
4. [Flow Classification Matrix](#4-flow-classification-matrix)
5. [Examples of Steady Flow](#5-examples-of-steady-flow)
6. [Local and Convective Acceleration](#6-local-and-convective-acceleration)
7. [Worked Examples](#7-worked-examples)
8. [References](#8-references)

---

## 1. Definition

> **Steady Flow:** A flow is said to be **steady** if the flow properties (velocity, pressure, density, etc.) at any given point do **not change with time**.

Although different points may have different velocities, as long as the velocity at each point is **constant over time**, the flow is steady.

$$\frac{\partial \vec{v}}{\partial t} = 0 \quad \text{at every point}$$

Also:
$$\frac{\partial P}{\partial t} = 0, \quad \frac{\partial \rho}{\partial t} = 0$$

```
STEADY FLOW — properties at each point constant over time

Time t₁:   →→→→  →→→→→→  →→→→→→→→
Time t₂:   →→→→  →→→→→→  →→→→→→→→   ← SAME
Time t₃:   →→→→  →→→→→→  →→→→→→→→
                         
At any fixed point P, the velocity arrow never changes:
  P: v = 3 m/s at t=1s, t=2s, t=3s ... → STEADY
```

---

## 2. Mathematical Condition

For **steady flow**:

$$\frac{\partial}{\partial t}(\text{any flow variable}) = 0$$

Specifically:

$$\frac{\partial u}{\partial t} = 0, \quad \frac{\partial v}{\partial t} = 0, \quad \frac{\partial w}{\partial t} = 0$$

$$\frac{\partial P}{\partial t} = 0, \quad \frac{\partial \rho}{\partial t} = 0, \quad \frac{\partial T}{\partial t} = 0$$

The **local acceleration** (time derivative) is **zero** in steady flow.

---

## 3. Characteristics of Steady Flow

| Property | Steady Flow |
|---------|------------|
| Time dependence of velocity | $\partial v/\partial t = 0$ |
| Local acceleration | Zero |
| Streamlines | Fixed in space (don't move) |
| Pathlines = Streamlines? | Yes (for steady flow) |
| Mathematical complexity | Simpler (no time derivatives) |
| Bernoulli applicable? | Yes (along streamline) |

### Important Note

**Steady ≠ Uniform**

- A steady flow can be **non-uniform** (e.g., steady flow through a narrowing pipe)
- A non-steady flow can be **uniform** (e.g., flow in a constant-section pipe where velocity changes with time during valve operation)

---

## 4. Flow Classification Matrix

```
                    ┌────────────────────────────────────────┐
                    │        SPATIAL VARIATION               │
                    │   Uniform      │    Non-Uniform         │
    ┌───────────────┼────────────────┼────────────────────────┤
    │    Steady     │ Steady-Uniform │ Steady Non-Uniform     │
    │               │ (straight pipe,│ (nozzle with const.    │
    │               │ const. area)   │ discharge)             │
    ├───────────────┼────────────────┼────────────────────────┤
    │   Unsteady    │ Unsteady-      │ Unsteady Non-Uniform   │
    │               │ Uniform        │ (flood wave, starting  │
    │               │ (pipe flow,    │ pump in variable pipe) │
    │               │ opening valve) │                        │
    └───────────────┴────────────────┴────────────────────────┘
```

---

## 5. Examples of Steady Flow

1. **Steady pipe flow** from a constant-head tank
2. **Flow in a river** during constant rainfall (approximately)
3. **Flow through a venturimeter** at constant pump speed
4. **Blood flow in arteries** during a heartbeat cycle (approximately steady for mean analysis)
5. **Wind at constant speed** over a fixed landscape

---

## 6. Local and Convective Acceleration

The **material derivative** (total acceleration) is:

$$\frac{D\vec{v}}{Dt} = \underbrace{\frac{\partial \vec{v}}{\partial t}}_{\text{local}} + \underbrace{(\vec{v} \cdot \nabla)\vec{v}}_{\text{convective}}$$

| Flow Type | Local Acceleration | Convective Acceleration |
|-----------|-------------------|------------------------|
| Steady + Uniform | 0 | 0 |
| Steady + Non-uniform | 0 | ≠ 0 |
| Unsteady + Uniform | ≠ 0 | 0 |
| Unsteady + Non-uniform | ≠ 0 | ≠ 0 |

---

## 7. Worked Examples

### Example 7.1

**Problem:** Water flows steadily through a horizontal pipe of constant diameter. At point A, velocity = 2 m/s, pressure = 200 kPa. At point B (same height, same diameter), what is the velocity and pressure?

**Solution:**

Since the flow is **steady and uniform** (constant diameter), by continuity:
$$v_B = v_A = 2 \text{ m/s}$$

Since steady, incompressible, no elevation change, same velocity → by Bernoulli:
$$P_B = P_A = 200 \text{ kPa}$$

**Velocity and pressure are the same at A and B.** (Uniform steady flow — no changes along pipe.)

---

### Example 7.2 — Checking Steadiness

**Problem:** Flow at a point has velocity: $v = 3t$ m/s where $t$ is time. Is this steady?

**Solution:**

$$\frac{\partial v}{\partial t} = 3 \neq 0$$

**Not steady** — the flow is **unsteady** because velocity changes with time.

---

## 8. References

- 📘 Frank M. White — *Fluid Mechanics*
- 📘 Munson, Young & Okiishi — *Fundamentals of Fluid Mechanics*
- 🌐 [HyperPhysics — Steady Flow](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html)
- 🌐 [Khan Academy — Steady Flow](https://www.khanacademy.org/science/physics/fluids)

---

[← Non-Uniform Motion](./04_non_uniform_motion.md) | [← Back to Index](./README.md) | [Next: Unsteady Motion →](./06_unsteady_motion.md)
