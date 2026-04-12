# 03. Uniform Motion in Fluids

> **Date:** April 10, 2026 | **Topic:** 3 of 12 | [← Rate of Flow](./02_rate_of_flow.md) | [Next: Non-Uniform →](./04_non_uniform_motion.md)

---

## 📋 Table of Contents

1. [Definition of Uniform Flow](#1-definition-of-uniform-flow)
2. [Mathematical Condition](#2-mathematical-condition)
3. [Examples of Uniform Flow](#3-examples-of-uniform-flow)
4. [Characteristics](#4-characteristics)
5. [Worked Examples](#5-worked-examples)
6. [References](#6-references)

---

## 1. Definition of Uniform Flow

> **Uniform Flow:** A flow is said to be **uniform** if the **velocity** of fluid particles does **not change** from point to point in the direction of flow at any given instant of time.

In other words: at any given instant, the velocity vector is the same at every point along the flow path.

$$\frac{\partial \vec{v}}{\partial s} = 0 \quad \text{(at any instant)}$$

where $s$ is distance along the flow direction.

```
UNIFORM FLOW — velocity same everywhere along direction
─────────────────────────────────────────────────────
     →→→→→→    →→→→→→    →→→→→→    →→→→→→
     →→→→→→    →→→→→→    →→→→→→    →→→→→→
     →→→→→→    →→→→→→    →→→→→→    →→→→→→
     →→→→→→    →→→→→→    →→→→→→    →→→→→→
─────────────────────────────────────────────────────
(All arrows same length and direction — UNIFORM)

     v₁ = v₂ = v₃ = ... (same magnitude)
```

---

## 2. Mathematical Condition

For uniform flow, the velocity does not change along the streamline:

$$\frac{\partial v}{\partial s} = 0$$

Also, the **cross-sectional area** of flow must be **constant** (for internal flow in pipes/channels):

$$A = \text{constant} \Rightarrow v = \frac{Q}{A} = \text{constant}$$

---

## 3. Examples of Uniform Flow

1. **Flow in a straight pipe of constant diameter** — classic example of uniform flow
2. **Flow in a wide, straight open channel** of constant depth and slope
3. **Flow over a flat surface** far from the leading edge
4. **Wind in the open atmosphere** far from obstacles

### Diagram: Uniform Flow in a Constant-Area Pipe

```
       v₁              v₂              v₃
       ↓               ↓               ↓
   ╔═══════════════════════════════════════╗
   ║  →→→→→→   →→→→→→   →→→→→→   →→→→→→ ║  A = constant
   ║  →→→→→→   →→→→→→   →→→→→→   →→→→→→ ║
   ╚═══════════════════════════════════════╝
   
       v₁ = v₂ = v₃  (UNIFORM)
       A₁ = A₂ = A₃
```

---

## 4. Characteristics

| Feature | Uniform Flow |
|---------|-------------|
| Velocity gradient along flow | $\partial v/\partial s = 0$ |
| Cross-section | Constant |
| Pressure gradient | Constant (or zero for ideal) |
| Streamlines | Parallel and equally spaced |
| Analysis | Simpler (no convective acceleration) |

---

## 5. Worked Examples

### Example 5.1

**Problem:** Water flows through a 15 cm diameter horizontal pipe at 2.5 m/s. Is this uniform flow? Calculate Q.

**Solution:**

Since the pipe has a **constant diameter** and the flow is in a **straight** section with constant velocity 2.5 m/s, this **is uniform flow**.

$$A = \frac{\pi d^2}{4} = \frac{\pi (0.15)^2}{4} = 1.767 \times 10^{-2} \text{ m}^2$$

$$Q = A \times v = 1.767 \times 10^{-2} \times 2.5 = \boxed{0.0442 \text{ m}^3/\text{s}}$$

### Example 5.2

**Problem:** In a 30 m long straight channel of constant rectangular cross-section (width = 0.8 m, depth = 0.4 m), water flows at 1.2 m/s. Confirm this is uniform flow and find Q.

**Solution:**

- The channel has **constant cross-section** and is **straight** → **Uniform flow** ✓
- $A = 0.8 \times 0.4 = 0.32 \text{ m}^2$
- $Q = 0.32 \times 1.2 = \boxed{0.384 \text{ m}^3/\text{s}}$

---

## 6. References

- 📘 Munson et al. — *Fundamentals of Fluid Mechanics*
- 🌐 [HyperPhysics — Flow Types](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html)

---

[← Rate of Flow](./02_rate_of_flow.md) | [← Back to Index](./README.md) | [Next: Non-Uniform Motion →](./04_non_uniform_motion.md)
