# 04. Non-Uniform Motion in Fluids

> **Date:** April 10, 2026 | **Topic:** 4 of 12 | [← Uniform Motion](./03_uniform_motion.md) | [Next: Steady Motion →](./05_steady_motion.md)

---

## 📋 Table of Contents

1. [Definition](#1-definition)
2. [Mathematical Condition](#2-mathematical-condition)
3. [Types of Non-Uniform Flow](#3-types-of-non-uniform-flow)
4. [Convective Acceleration](#4-convective-acceleration)
5. [Examples in Nature and Engineering](#5-examples-in-nature-and-engineering)
6. [Comparison: Uniform vs Non-Uniform](#6-comparison-uniform-vs-non-uniform)
7. [Worked Examples](#7-worked-examples)
8. [References](#8-references)

---

## 1. Definition

> **Non-Uniform Flow:** A flow is said to be **non-uniform** if the **velocity** of fluid changes from point to point along the direction of flow at any given instant.

$$\frac{\partial \vec{v}}{\partial s} \neq 0$$

Even if the flow is **steady** (not changing with time), it can still be non-uniform if velocity changes with position.

```
NON-UNIFORM FLOW — velocity changes from point to point
──────────────────────────────────────────────────────────
                                           ↑ narrowing
  ╔═════════════════════╗
  ║  →→  →→→  →→→→  →→→→→→→→  ║   Velocity increases
  ║  →→  →→→  →→→→  →→→→→→→→  ║   as pipe narrows
  ╚═══════════════════╝
                         ↑ smaller area, higher velocity
──────────────────────────────────────────────────────────
  v₁ < v₂ < v₃   (NON-UNIFORM)
```

---

## 2. Mathematical Condition

$$\frac{\partial v}{\partial s} \neq 0$$

where $s$ is the coordinate along the flow direction.

From the **continuity equation** for incompressible flow:

$$A_1 v_1 = A_2 v_2 = Q = \text{constant}$$

If $A$ changes, then $v$ **must** change:

$$v = \frac{Q}{A}$$

Therefore, any **change in cross-section** produces **non-uniform flow**.

---

## 3. Types of Non-Uniform Flow

### 3.1 Spatially Accelerating (Converging) Flow

Pipe narrows → area decreases → velocity increases:

```
   ╔═════════════════╗
   ║                 ╚════════╗
   ║  v₁ →        v₂ →→      ║  v₂ > v₁
   ║                 ╔════════╝
   ╚═════════════════╝
   (Converging nozzle — velocity increases)
```

$$A_1 > A_2 \Rightarrow v_2 = v_1 \frac{A_1}{A_2} > v_1$$

### 3.2 Spatially Decelerating (Diverging) Flow

Pipe widens → area increases → velocity decreases:

```
   ╔═════╗
   ║      ╚═══════════════╗
   ║  v₁ →→→→    v₂ →     ║  v₂ < v₁
   ║      ╔═══════════════╝
   ╚═════╝
   (Diverging diffuser — velocity decreases)
```

### 3.3 Flow Over a Curved Surface

Even at constant cross-section, a curved path means velocity direction changes — this is also non-uniform in the strict vector sense.

---

## 4. Convective Acceleration

In non-uniform flow, a fluid particle experiences **convective acceleration** (acceleration due to change in position):

$$a_s = v \frac{\partial v}{\partial s}$$

The full material acceleration (for 1D steady non-uniform flow):

$$a = v \frac{\partial v}{\partial x}$$

This term is called the **convective** (or advective) acceleration term. It is **zero for uniform flow** but **non-zero for non-uniform flow**.

---

## 5. Examples in Nature and Engineering

| Situation | Type |
|-----------|------|
| Water flowing through a converging nozzle | Non-uniform (accelerating) |
| River narrowing near a bridge | Non-uniform (accelerating) |
| Blood flowing through narrowed artery (stenosis) | Non-uniform (accelerating) |
| Air flowing over an airplane wing | Non-uniform |
| Venturimeter throat section | Non-uniform |
| Flow over a dam spillway | Non-uniform |

---

## 6. Comparison: Uniform vs Non-Uniform

| Feature | Uniform Flow | Non-Uniform Flow |
|---------|-------------|-----------------|
| Velocity along stream | $\partial v/\partial s = 0$ | $\partial v/\partial s \neq 0$ |
| Cross-section | Constant | Varying |
| Convective acceleration | Zero | Non-zero |
| Streamlines | Parallel | Converging or diverging |
| Examples | Straight constant-area pipe | Nozzle, diffuser, bends |
| Analysis complexity | Simpler | More complex |

---

## 7. Worked Examples

### Example 7.1 — Velocity Change in a Converging Pipe

**Problem:** Water enters a pipe of diameter 30 cm with velocity 1 m/s. It exits through a nozzle of diameter 10 cm. Find the exit velocity. Is this uniform or non-uniform flow?

**Solution:**

By continuity:

$$A_1 v_1 = A_2 v_2$$

$$\frac{\pi d_1^2}{4} v_1 = \frac{\pi d_2^2}{4} v_2$$

$$v_2 = v_1 \left(\frac{d_1}{d_2}\right)^2 = 1 \times \left(\frac{30}{10}\right)^2 = 1 \times 9 = \boxed{9 \text{ m/s}}$$

The velocity changes from 1 m/s to 9 m/s → **This is non-uniform flow.**

---

### Example 7.2 — Convective Acceleration

**Problem:** In a converging nozzle, the velocity varies linearly from v = 2 m/s at x = 0 to v = 6 m/s at x = 0.4 m. Find the convective acceleration at x = 0.2 m.

**Solution:**

Velocity profile: $v(x) = 2 + \frac{6-2}{0.4} x = 2 + 10x$ m/s

At $x = 0.2$ m: $v = 2 + 10(0.2) = 4$ m/s

$$\frac{\partial v}{\partial x} = 10 \text{ s}^{-1}$$

$$a = v \frac{\partial v}{\partial x} = 4 \times 10 = \boxed{40 \text{ m/s}^2}$$

---

### Example 7.3 — Diffuser Problem

**Problem:** A diffuser expands from diameter 8 cm to 20 cm. If the inlet velocity is 5 m/s, find the exit velocity.

**Solution:**

$$v_2 = v_1 \left(\frac{d_1}{d_2}\right)^2 = 5 \times \left(\frac{8}{20}\right)^2 = 5 \times 0.16 = \boxed{0.8 \text{ m/s}}$$

Velocity decreases (decelerating non-uniform flow — diffuser action).

---

## 8. References

- 📘 Frank M. White — *Fluid Mechanics*, McGraw-Hill
- 📘 Streeter & Wylie — *Fluid Mechanics*
- 🌐 [HyperPhysics — Fluid Flow](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html)
- 🌐 [Physics LibreTexts — Fluid Dynamics](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics/14.06:_Fluid_Dynamics)

---

[← Uniform Motion](./03_uniform_motion.md) | [← Back to Index](./README.md) | [Next: Steady Motion →](./05_steady_motion.md)
