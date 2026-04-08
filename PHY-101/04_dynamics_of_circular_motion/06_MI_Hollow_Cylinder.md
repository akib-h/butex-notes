# 06. Moment of Inertia of a Hollow Cylinder

> **Subject:** Physics I — Dynamics of Circular Motion
> **Date:** April 08, 2026
> **Level:** University / Undergraduate

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Case I: About Its Own Axis](#2-case-i-about-its-own-axis)
3. [Case II: About an Axis Through Center Perpendicular to Length](#3-case-ii-about-an-axis-through-center-perpendicular-to-length)
4. [Special Cases](#4-special-cases)
5. [Summary Table](#5-summary-table)
6. [Comparison: Hollow vs Solid Cylinder](#6-comparison-hollow-vs-solid-cylinder)
7. [Worked Examples](#7-worked-examples)
8. [Online References](#8-online-references)

---

## 1. Introduction

A **hollow cylinder** (also called a thick-walled cylinder or cylindrical shell) is defined by:
- Mass: $M$
- Height: $h$
- Inner radius: $R_1$
- Outer radius: $R_2$

```
         ┌──────────────────────┐
        /│          │dx        /│
       / │          ↑         / │
      /  │         R₂        /  │
     ╔═══╪═══════════════════╗  │
     ║   │    ←R₁→           ║  │ h
     ║   │    hollow         ║  │
     ║   │    core           ║  │
     ╚═══╪═══════════════════╝  │
      \  │                    \ │
       \ │                     \│
        \└──────────────────────┘
              Own axis (Z) ↕
```

- **Volume** of the hollow cylinder: $V = \pi(R_2^2 - R_1^2)h$
- **Mass per unit volume** (density): $\rho = \dfrac{M}{\pi(R_2^2 - R_1^2)h}$

---

## 2. Case I: About Its Own Axis

The **own axis** = the axis along the length of the cylinder, passing through the centers of the two circular faces.

### Derivation by Integration

**Step 1: Take a thin cylindrical shell element at radius x, thickness dx, height h**

Volume of the element:
$$dV = 2\pi x \cdot dx \cdot h$$

Mass of the element:
$$dm = \rho \cdot dV = \frac{M}{\pi(R_2^2 - R_1^2)h} \cdot 2\pi x \cdot dx \cdot h = \frac{2M}{R_2^2 - R_1^2} \cdot x \cdot dx$$

**Step 2: Moment of inertia of this thin cylindrical shell**

All mass of this shell is at distance $x$ from the axis:
$$dI = x^2 \cdot dm = \frac{2M}{R_2^2 - R_1^2} x^3 \, dx$$

**Step 3: Integrate from $R_1$ to $R_2$**

$$I = \int_{R_1}^{R_2} \frac{2M}{R_2^2 - R_1^2} x^3 \, dx$$

$$= \frac{2M}{R_2^2 - R_1^2} \cdot \frac{x^4}{4}\Bigg|_{R_1}^{R_2}$$

$$= \frac{2M}{R_2^2 - R_1^2} \cdot \frac{R_2^4 - R_1^4}{4}$$

**Step 4: Simplify** using $R_2^4 - R_1^4 = (R_2^2 + R_1^2)(R_2^2 - R_1^2)$:

$$= \frac{2M}{R_2^2 - R_1^2} \times \frac{(R_2^2 + R_1^2)(R_2^2 - R_1^2)}{4}$$

$$= \frac{M(R_2^2 + R_1^2)}{2}$$

$$\boxed{I_{own axis} = \frac{1}{2}M(R_1^2 + R_2^2)}$$

---

## 3. Case II: About an Axis Through Center Perpendicular to Length

This axis passes through the midpoint of the cylinder, perpendicular to the cylindrical axis.

### Derivation

Consider a thin disc-like element at distance $x$ from the center along the cylinder's axis, with thickness $dx$.

**Mass of the element:**
$$dm = \frac{M}{h} dx$$

Each disc element has:
- Inner radius $R_1$, outer radius $R_2$
- MI of an annular disc about its own diameter: $\frac{1}{4}dm(R_1^2 + R_2^2)$

But the disc is at distance $x$ from the transverse axis, so by **Parallel Axis Theorem**:

$$dI = \frac{1}{4}dm(R_1^2 + R_2^2) + dm \cdot x^2$$

Wait — more precisely, for the annular disc element about its own diameter:
$$dI_{cm} = \frac{1}{4}(R_1^2 + R_2^2)dm$$

Then by parallel axis theorem (shifting by $x$):
$$dI = \frac{1}{4}(R_1^2 + R_2^2)dm + x^2 \cdot dm$$

Integrating from $-h/2$ to $h/2$:

$$I = \int_{-h/2}^{h/2} \left[\frac{1}{4}(R_1^2 + R_2^2) + x^2\right] \frac{M}{h} dx$$

$$= \frac{M}{h}\left[\frac{1}{4}(R_1^2 + R_2^2) \cdot h + \frac{h^3}{12}\right]$$

$$\boxed{I_{\perp} = \frac{M}{4}(R_1^2 + R_2^2) + \frac{Mh^2}{12}}$$

---

## 4. Special Cases

### 4.1 Solid Cylinder (Set $R_1 = 0$, $R_2 = R$)

$$I_{own axis} = \frac{1}{2}M(0 + R^2) = \frac{1}{2}MR^2$$

$$\boxed{I_{solid cyl, own axis} = \frac{1}{2}MR^2}$$

$$I_{\perp} = \frac{MR^2}{4} + \frac{Mh^2}{12} = M\left(\frac{R^2}{4} + \frac{h^2}{12}\right)$$

### 4.2 Thin Cylindrical Shell ($R_1 \approx R_2 = R$)

$$I_{own axis} = \frac{1}{2}M(R^2 + R^2) = MR^2$$

$$\boxed{I_{thin shell, own axis} = MR^2}$$

### 4.3 Long Thin Rod ($R_1 = R_2 \to 0$)

$$I_{\perp} = 0 + \frac{Mh^2}{12} = \frac{Mh^2}{12}$$

This reduces to the thin rod formula. ✓

---

## 5. Summary Table

| Shape | Axis | Moment of Inertia |
|-------|------|-------------------|
| Hollow cylinder (radii $R_1$, $R_2$) | Own axis | $\frac{1}{2}M(R_1^2+R_2^2)$ |
| Hollow cylinder (radii $R_1$, $R_2$, height $h$) | Transverse through center | $\frac{M}{4}(R_1^2+R_2^2) + \frac{Mh^2}{12}$ |
| Solid cylinder (radius $R$) | Own axis | $\frac{1}{2}MR^2$ |
| Solid cylinder (radius $R$, height $h$) | Transverse through center | $\frac{MR^2}{4} + \frac{Mh^2}{12}$ |
| Thin cylindrical shell (radius $R$) | Own axis | $MR^2$ |

---

## 6. Comparison: Hollow vs Solid Cylinder

For same mass M and outer radius R:

| Property | Solid Cylinder | Hollow Cylinder ($R_1 = R/2$) |
|----------|---------------|-------------------------------|
| $I_{own axis}$ | $\frac{1}{2}MR^2$ | $\frac{1}{2}M\left(\frac{R^2}{4}+R^2\right) = \frac{5}{8}MR^2$ |
| Relative I | $0.5 MR^2$ | $0.625 MR^2$ |

**Conclusion:** For the same mass and outer radius, the hollow cylinder has a **greater** moment of inertia (more mass near the rim → more rotational resistance). This is why hollow shafts are used in engineering to maximize $I$ while minimizing weight.

---

## 7. Worked Examples

### Example 1 (from notes)

**Problem:** A hollow cylinder of mass M has inner radius $R_1$ and outer radius $R_2$. Find its M.I. about its own axis.

**Solution:** (General formula derived above)

$$\boxed{I = \frac{1}{2}M(R_1^2 + R_2^2)}$$

---

### Example 2

**Problem:** A hollow cylinder of mass 5 kg has inner radius 5 cm and outer radius 10 cm. Calculate its moment of inertia about its own axis.

**Solution:**

$$I = \frac{1}{2}M(R_1^2 + R_2^2) = \frac{1}{2} \times 5 \times [(0.05)^2 + (0.10)^2]$$

$$= \frac{1}{2} \times 5 \times [0.0025 + 0.01]$$

$$= \frac{1}{2} \times 5 \times 0.0125 = 0.03125 \text{ kg·m}^2$$

$$\boxed{I = 3.125 \times 10^{-2} \text{ kg·m}^2}$$

---

### Example 3 — Solid Cylinder Rolling

**Problem:** A solid cylinder of mass 4 kg and radius 0.2 m rolls without slipping. Find the total kinetic energy when its center moves at 3 m/s.

**Solution:**

$$I_{cm} = \frac{1}{2}MR^2 = \frac{1}{2} \times 4 \times (0.2)^2 = 0.08 \text{ kg·m}^2$$

$$\omega = \frac{v}{R} = \frac{3}{0.2} = 15 \text{ rad/s}$$

$$KE = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2$$

$$= \frac{1}{2}(4)(3)^2 + \frac{1}{2}(0.08)(15)^2$$

$$= 18 + 9 = 27 \text{ J}$$

$$\boxed{KE_{total} = 27 \text{ J}}$$

> Note: Total KE = $\frac{3}{4}Mv^2 = \frac{3}{4} \times 4 \times 9 = 27$ J ✓

---

### Example 4

**Problem:** A hollow cylinder (mass 3 kg, $R_1 = 0.1$ m, $R_2 = 0.2$ m, height = 0.4 m) rotates about:
- (a) Its own axis
- (b) A transverse axis through its center

**Solution:**

(a) Own axis:
$$I = \frac{1}{2}(3)[(0.1)^2 + (0.2)^2] = \frac{3}{2}[0.01 + 0.04] = \frac{3}{2}(0.05) = 0.075 \text{ kg·m}^2$$

(b) Transverse axis:
$$I_\perp = \frac{M}{4}(R_1^2 + R_2^2) + \frac{Mh^2}{12}$$
$$= \frac{3}{4}(0.05) + \frac{3 \times 0.16}{12} = 0.0375 + 0.04 = 0.0775 \text{ kg·m}^2$$

---

## 8. Online References

- 📖 [HyperPhysics — Cylinder Moment of Inertia](http://hyperphysics.phy-astr.gsu.edu/hbase/icyl.html)
- 📖 [Wikipedia — List of Moments of Inertia](https://en.wikipedia.org/wiki/List_of_moments_of_inertia)
- 📖 [LibreTexts — Calculating Moments of Inertia](https://phys.libretexts.org/)
- 📖 [Engineering Toolbox — Hollow Cylinder](https://www.engineeringtoolbox.com/moment-inertia-torque-d_913.html)
- 🎥 [YouTube — MI of Cylinder Derivation](https://www.youtube.com/results?search_query=moment+of+inertia+hollow+cylinder+derivation)

---

> **← Previous:** [05. MI of Uniform Circular Disc](./05_MI_Uniform_Circular_Disc.md)
> **→ Next:** [07. MI of Solid Sphere](./07_MI_Solid_Sphere.md)
