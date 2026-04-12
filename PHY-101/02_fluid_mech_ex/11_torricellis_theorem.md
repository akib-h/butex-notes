# 11. Speed of Efflux — Torricelli's Theorem

> **Date:** April 10, 2026 | **Topic:** 11 of 12 | [← Bernoulli's Equation](./10_bernoullis_equation.md) | [Next: Venturimeter →](./12_venturimeter.md)

---

## 📋 Table of Contents

1. [Introduction & History](#1-introduction--history)
2. [Statement of Torricelli's Theorem](#2-statement-of-torricellis-theorem)
3. [Derivation from Bernoulli's Equation](#3-derivation-from-bernoullis-equation)
4. [Physical Interpretation](#4-physical-interpretation)
5. [Range of Horizontal Jet](#5-range-of-horizontal-jet)
6. [Coefficient of Velocity and Discharge](#6-coefficient-of-velocity-and-discharge)
7. [Time to Empty a Tank](#7-time-to-empty-a-tank)
8. [Worked Examples](#8-worked-examples)
9. [References](#9-references)

---

## 1. Introduction & History

**Evangelista Torricelli** (1608–1647), Italian physicist and mathematician, discovered this theorem in 1643. He was a student of Galileo and is famous for inventing the barometer.

**Torricelli's Theorem** relates the **speed of fluid exiting** (efflux) from a container through a small opening to the **height of the fluid** above that opening.

```
           FREE SURFACE
     ┌─────────────────────┐
     │                     │
     │     h (height)      │
     │                     │
     │                     │
     └──────────┬──────────┘
                │ ← small orifice
                ▼
               ●●● → → →
               jet of fluid
               
  Torricelli (1643): v = √(2gh)
```

---

## 2. Statement of Torricelli's Theorem

> **Torricelli's Theorem:** The speed of efflux of a liquid through a small orifice in a tank is equal to the speed that the liquid would acquire if it fell freely from the free surface to the level of the orifice.

$$\boxed{v = \sqrt{2gh}}$$

Where:
- $v$ = velocity of efflux (m/s)
- $g$ = acceleration due to gravity (9.81 m/s²)
- $h$ = height of the free liquid surface above the orifice (m)

**Equivalently:** This is the speed acquired by free fall through height $h$:
$$v = \sqrt{2gh} \quad \Leftrightarrow \quad v^2 = 2gh$$

---

## 3. Derivation from Bernoulli's Equation

### Setup

Consider a large open tank with:
- **Point 1:** Free surface (top of water)
- **Point 2:** The orifice (small hole at the bottom/side)

```
         Point 1 (free surface)
         ─────────────────────   ← P₁ = P_atm
         │                   │      v₁ ≈ 0 (large tank)
         │        h          │      h₁ = h (above datum)
         │                   │
         └──────────┬────────┘
                    │ ← Point 2 (orifice)
                    ▼         P₂ = P_atm
                   →→→        v₂ = ? (efflux velocity)
                              h₂ = 0 (datum)
```

### Applying Bernoulli's Equation (Point 1 → Point 2)

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$

### Simplifying

1. **Pressures:** Both surfaces are open to atmosphere → $P_1 = P_2 = P_{atm}$
   (These cancel from both sides)

2. **Surface velocity:** Large tank area $A_{tank} \gg A_{orifice}$, so by continuity:
   $$v_1 = v_2 \frac{A_{orifice}}{A_{tank}} \approx 0 \quad \text{(approximately zero)}$$

3. **Heights:** Take the orifice level as datum → $h_2 = 0$, $h_1 = h$

Substituting:
$$\cancel{P_{atm}} + \frac{1}{2}\rho(\cancelto{0}{v_1^2}) + \rho g h = \cancel{P_{atm}} + \frac{1}{2}\rho v_2^2 + 0$$

$$\rho g h = \frac{1}{2}\rho v_2^2$$

$$v_2^2 = 2gh$$

$$\boxed{v_2 = v = \sqrt{2gh}}$$

**Torricelli's Theorem is proved.** ✓

---

## 4. Physical Interpretation

Torricelli's theorem says: **the kinetic energy per unit mass of the efflux jet equals the loss in potential energy per unit mass from height $h$.**

$$\frac{1}{2}v^2 = gh$$

This is exactly the same as an object **freely falling** from height $h$:
$$v_{freefall} = \sqrt{2gh}$$

The fluid "falls" through the height $h$ — but inside the tank, converting pressure energy into kinetic energy at the exit.

### Diagram — Energy Conversion

```
At Surface (Point 1):        At Orifice (Point 2):
─────────────────────        ─────────────────────
KE = 0                       KE = ½ρv²
PE = ρgh (per unit vol)      PE = 0
P  = P_atm                   P  = P_atm

Total = P_atm + ρgh          Total = P_atm + ½ρv²

Since Total is conserved:
ρgh = ½ρv²  →  v = √(2gh)
```

---

## 5. Range of Horizontal Jet

If the orifice is located at height $H$ above the ground, and the liquid surface is at height $h$ above the orifice:

```
  Free surface ─────────────────────
                                    h (efflux height)
  Orifice ──────────────────────── ●──────────────────
                                    │ ↗ parabolic path
                              H     │    of jet
  Ground ─────────────────────────────────────────────
  
  Horizontal range = R = v × t_fall
```

**Horizontal velocity of jet:** $v_x = \sqrt{2gh}$

**Time to fall height $H$ to ground:**
$$H = \frac{1}{2}g t^2 \Rightarrow t = \sqrt{\frac{2H}{g}}$$

**Horizontal range:**

$$R = v_x \times t = \sqrt{2gh} \times \sqrt{\frac{2H}{g}}$$

$$\boxed{R = 2\sqrt{hH}}$$

### Maximum Range

The range depends on both $h$ (efflux height above orifice) and $H$ (height of orifice above ground).

If the total tank height is $L$ (from orifice-level to surface is $h$, from ground to orifice is $H$, with $h + H = L$):

$$R = 2\sqrt{h \cdot H} = 2\sqrt{h(L-h)}$$

Maximizing: $\frac{dR}{dh} = 0 \Rightarrow L - 2h = 0 \Rightarrow h = \frac{L}{2}$

**Maximum range** occurs when the orifice is at the **midpoint** of the liquid depth:

$$R_{max} = 2\sqrt{\frac{L}{2} \cdot \frac{L}{2}} = 2 \cdot \frac{L}{2} = L$$

So $R_{max} = L$ = total water depth when orifice is at midpoint.

---

## 6. Coefficient of Velocity and Discharge

In practice, the actual efflux velocity is slightly less than theoretical due to energy losses and the **vena contracta** effect:

### Vena Contracta

The jet contracts after leaving the orifice due to convergence of streamlines. The narrowest point of the jet (minimum cross-section) is called the **vena contracta**.

```
          │ Orifice area A₀
          │
   ───────┤●──────────────────
          │  ╲──────────────   ← Jet expands here
          │   ╲             
          │    ╲── Vena Contracta (area = Cc × A₀)
          │     
   ───────┤
```

### Coefficients

**Coefficient of velocity** ($C_v$):
$$C_v = \frac{v_{actual}}{v_{theoretical}} = \frac{v_{actual}}{\sqrt{2gh}}$$

Typical value: $C_v \approx 0.97$ to $0.99$

**Coefficient of contraction** ($C_c$):
$$C_c = \frac{A_{vena \, contracta}}{A_{orifice}}$$

Typical value: $C_c \approx 0.61$ to $0.64$

**Coefficient of discharge** ($C_d$):
$$C_d = C_v \times C_c$$

Typical value: $C_d \approx 0.61$ to $0.65$

**Actual discharge:**
$$Q_{actual} = C_d \times A_0 \times \sqrt{2gh}$$

---

## 7. Time to Empty a Tank

For a tank of cross-section $A_T$ with orifice of area $A_0$ at the bottom:

At any instant with water height $h$, efflux velocity is $v = \sqrt{2gh}$

Conservation of mass:
$$A_T \frac{dh}{dt} = -C_d A_0 \sqrt{2gh}$$

Separating variables:
$$\frac{dh}{\sqrt{h}} = -\frac{C_d A_0 \sqrt{2g}}{A_T} dt$$

Integrating from $h = H_0$ (initial) to $h = H_f$ (final):

$$2(\sqrt{H_f} - \sqrt{H_0}) = -\frac{C_d A_0 \sqrt{2g}}{A_T} T$$

$$\boxed{T = \frac{2A_T}{C_d A_0 \sqrt{2g}}(\sqrt{H_0} - \sqrt{H_f})}$$

To completely empty a tank ($H_f = 0$):

$$\boxed{T_{empty} = \frac{2A_T}{C_d A_0 \sqrt{2g}} \sqrt{H_0} = \frac{A_T}{C_d A_0}\sqrt{\frac{2H_0}{g}}}$$

---

## 8. Worked Examples

### Example 8.1 — Speed of Efflux

**Problem:** A water tank has a hole at its side. The water surface is 3.2 m above the hole. Find the speed of efflux. (Assume ideal conditions)

**Solution:**

$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 3.2} = \sqrt{62.784} = \boxed{7.92 \text{ m/s}}$$

---

### Example 8.2 — Horizontal Range

**Problem:** A large tank has water to a height of 8 m. A small hole is made at a height of 2 m from the bottom of the tank. Find the horizontal range of the water jet on the ground.

**Solution:**

Here:
- $H$ = height of orifice above ground = 2 m
- $h$ = height of water surface above orifice = 8 - 2 = 6 m

**Efflux velocity:**
$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 6} = \sqrt{117.72} = 10.85 \text{ m/s}$$

**Time to fall height H:**
$$t = \sqrt{\frac{2H}{g}} = \sqrt{\frac{2 \times 2}{9.81}} = \sqrt{0.4077} = 0.6385 \text{ s}$$

**Range:**
$$R = v \times t = 10.85 \times 0.6385 = \boxed{6.93 \text{ m}}$$

**Using formula directly:** $R = 2\sqrt{hH} = 2\sqrt{6 \times 2} = 2\sqrt{12} = 2 \times 3.464 = 6.93$ m ✓

---

### Example 8.3 — Maximum Range

**Problem:** A cylindrical tank of height 4 m is filled with water. At what height from the bottom should a hole be made to get maximum horizontal range on the ground?

**Solution:**

Let orifice height from ground = $H$, then height of water above orifice = $h = 4 - H$

Range: $R = 2\sqrt{hH} = 2\sqrt{(4-H) \cdot H}$

For maximum range: $H = \frac{4}{2} = \boxed{2 \text{ m from bottom}}$

Maximum range: $R_{max} = 4 \text{ m}$ (= total depth of water)

---

### Example 8.4 — With Coefficient of Discharge

**Problem:** A tank has water at height 4 m above a circular orifice of 3 cm diameter. $C_d = 0.62$. Find the actual discharge.

**Solution:**

$$A_0 = \frac{\pi(0.03)^2}{4} = 7.069 \times 10^{-4} \text{ m}^2$$

Theoretical velocity:
$$v_{th} = \sqrt{2 \times 9.81 \times 4} = \sqrt{78.48} = 8.859 \text{ m/s}$$

Actual discharge:
$$Q = C_d \times A_0 \times v_{th} = 0.62 \times 7.069 \times 10^{-4} \times 8.859$$

$$\boxed{Q = 3.882 \times 10^{-3} \text{ m}^3/\text{s} = 3.88 \text{ L/s}}$$

---

### Example 8.5 — Time to Empty a Tank

**Problem:** A cylindrical tank (diameter 1.5 m) has water initially at height 4 m. A circular orifice (diameter 5 cm) is at the bottom. $C_d = 0.62$. Find the time to drain fully.

**Solution:**

$$A_T = \frac{\pi (1.5)^2}{4} = 1.7671 \text{ m}^2$$

$$A_0 = \frac{\pi (0.05)^2}{4} = 1.9635 \times 10^{-3} \text{ m}^2$$

$$T = \frac{2 A_T}{C_d A_0 \sqrt{2g}}\sqrt{H_0}$$

$$T = \frac{2 \times 1.7671}{0.62 \times 1.9635 \times 10^{-3} \times \sqrt{2 \times 9.81}}\sqrt{4}$$

$$T = \frac{3.5343}{0.62 \times 1.9635 \times 10^{-3} \times 4.429} \times 2$$

$$T = \frac{3.5343 \times 2}{5.383 \times 10^{-3}} = \frac{7.069}{5.383 \times 10^{-3}}$$

$$\boxed{T = 1313 \text{ s} \approx 21.9 \text{ minutes}}$$

---

### Example 8.6 — Connecting Torricelli to Free Fall

**Problem:** Prove that $v = \sqrt{2gh}$ is equivalent to free fall. A water droplet falls freely from the surface height $h$. Show its landing speed equals the Torricelli efflux velocity.

**Solution:**

For free fall from rest through height $h$:
$$v^2 = u^2 + 2gh = 0 + 2gh$$
$$v = \sqrt{2gh} \quad ✓$$

This is identical to Torricelli's formula. The efflux velocity equals the free-fall speed from the same height — this is the profound insight of Torricelli's theorem.

---

## 9. References

- 📘 Halliday, Resnick & Krane — *Physics*, Fluid Mechanics chapter
- 📘 Frank M. White — *Fluid Mechanics*, Chapter 3
- 📘 Munson, Young & Okiishi — *Fundamentals of Fluid Mechanics*
- 📘 Douglas, Gasiorek & Swaffield — *Fluid Mechanics* (Torricelli applications)
- 🌐 [HyperPhysics — Torricelli's Theorem](http://hyperphysics.phy-astr.gsu.edu/hbase/flobj.html)
- 🌐 [Khan Academy — Torricelli and Bernoulli](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/what-is-bernoullis-equation)
- 🌐 [Torricelli's Theorem — Wikipedia](https://en.wikipedia.org/wiki/Torricelli%27s_theorem)
- 🌐 [Physics LibreTexts — Bernoulli Applications](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics/14.06:_Fluid_Dynamics)

---

[← Bernoulli's Equation](./10_bernoullis_equation.md) | [← Back to Index](./README.md) | [Next: Venturimeter →](./12_venturimeter.md)
