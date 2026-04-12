# 08. Turbulent Motion (Turbulent Flow)

> **Date:** April 10, 2026 | **Topic:** 8 of 12 | [← Streamline Motion](./07_streamline_motion.md) | [Next: Continuity Equation →](./09_equation_of_continuity.md)

---

## 📋 Table of Contents

1. [Definition of Turbulent Flow](#1-definition-of-turbulent-flow)
2. [Characteristics of Turbulence](#2-characteristics-of-turbulence)
3. [Reynolds Decomposition](#3-reynolds-decomposition)
4. [Turbulent Velocity Profile](#4-turbulent-velocity-profile)
5. [Eddy Viscosity (Turbulent Viscosity)](#5-eddy-viscosity-turbulent-viscosity)
6. [Friction Factor and Head Loss](#6-friction-factor-and-head-loss)
7. [Comparison: Laminar vs Turbulent](#7-comparison-laminar-vs-turbulent)
8. [Examples in Real Life](#8-examples-in-real-life)
9. [Worked Examples](#9-worked-examples)
10. [References](#10-references)

---

## 1. Definition of Turbulent Flow

> **Turbulent Flow:** Flow characterized by **chaotic, irregular, three-dimensional velocity fluctuations** and vigorous mixing between fluid layers.

In turbulent flow, the fluid no longer moves in smooth parallel layers. Instead, eddies and vortices form, carrying momentum and energy in all directions.

```
LAMINAR vs TURBULENT:

Laminar:   ─────────────────────────────── (smooth dye line)
           ─────────────────────────────────
           ─────────────────────────────────
           
Turbulent: ~~~~~~~~~~~~~~~~~~~~~~~~~~~────  (dye disperses)
           ╰──────∿∿∿∿∿∿∿∿∿∿∿╮─────────
           ──────╰∿∿∿∿∿∿∿∿∿∿∿∿╯──────
           (chaotic mixing, eddies everywhere)
```

**Occurs when:** Re > 4000 (in pipes)

---

## 2. Characteristics of Turbulence

1. **Randomness:** Velocity fluctuates randomly in both magnitude and direction
2. **Three-dimensionality:** Eddies exist in all three spatial dimensions
3. **Diffusivity:** Turbulence greatly enhances mixing and transport of momentum, heat, and mass
4. **Energy cascade:** Energy flows from large eddies → smaller eddies → molecular dissipation
5. **Dissipation:** Kinetic energy is ultimately converted to heat through viscous action at small scales
6. **Continuum phenomenon:** Turbulence occurs at scales much larger than molecular scale

### The Energy Cascade (Kolmogorov, 1941)

```
Energy input at large scales (L)
        ↓
   Large eddies
        ↓
   Medium eddies
        ↓
   Small eddies (η — Kolmogorov scale)
        ↓
   Viscous dissipation (heat)

Kolmogorov microscale: η = (ν³/ε)^(1/4)
where ε = energy dissipation rate, ν = kinematic viscosity
```

---

## 3. Reynolds Decomposition

Osborne Reynolds proposed decomposing the instantaneous velocity into **mean** and **fluctuating** parts:

$$\vec{v} = \overline{\vec{v}} + \vec{v}'$$

where:
- $\overline{\vec{v}}$ = time-averaged (mean) velocity
- $\vec{v}'$ = turbulent fluctuation (zero time-average: $\overline{v'} = 0$)

**Time average:**
$$\bar{u} = \frac{1}{T}\int_0^T u \, dt$$

**Turbulence intensity:**
$$I = \frac{\sqrt{\overline{u'^2}}}{\bar{u}} = \frac{u'_{rms}}{\bar{u}}$$

Typical values: $I = 1\%$ (low turbulence wind tunnel) to $>20\%$ (strongly turbulent flows)

---

## 4. Turbulent Velocity Profile

Unlike the parabolic laminar profile, turbulent pipe flow has a **flatter** profile:

### Power Law Profile

$$\frac{u}{u_{max}} = \left(1 - \frac{r}{R}\right)^{1/n}$$

where $n \approx 7$ for $Re \approx 10^5$

$$\bar{v} = \frac{2n^2}{(n+1)(2n+1)} u_{max}$$

For $n = 7$: $\bar{v} \approx 0.817 \, u_{max}$

### Log Law (Law of the Wall)

In the turbulent region near the wall:

$$\frac{u}{u^*} = \frac{1}{\kappa}\ln\left(\frac{y u^*}{\nu}\right) + B$$

where:
- $u^* = \sqrt{\tau_w / \rho}$ = friction velocity
- $\kappa \approx 0.41$ = von Kármán constant
- $B \approx 5.0$ = empirical constant
- $y$ = distance from wall

```
VELOCITY PROFILES COMPARISON:

r/R │                              
 1  │ Wall                         
    │ ╲   Turbulent (flat top)     
    │  ╲  ─────────────            
    │   ╲/                         
    │   / ╲ Laminar (parabola)     
    │  /   ╲                       
 0  │ ──────────────────── u/u_max 
    0       0.5        1.0         
    
Turbulent: flatter, steeper near wall
Laminar: parabolic
```

---

## 5. Eddy Viscosity (Turbulent Viscosity)

For turbulent flow, the effective shear stress includes **turbulent (Reynolds) stresses**:

$$\tau_{total} = \tau_{viscous} + \tau_{turbulent}$$

$$\tau_{total} = (\mu + \mu_t)\frac{d\bar{u}}{dy}$$

where $\mu_t$ is the **eddy viscosity** (turbulent viscosity).

**Boussinesq approximation:**
$$-\rho \overline{u'v'} = \mu_t \frac{d\bar{u}}{dy}$$

The **Reynolds stress** $-\rho \overline{u'v'}$ is usually much larger than the viscous stress in turbulent flow.

---

## 6. Friction Factor and Head Loss

### Darcy-Weisbach Equation

The head loss due to friction in a pipe of length $L$, diameter $D$:

$$\boxed{h_f = f \frac{L}{D} \frac{v^2}{2g}}$$

Where $f$ is the **Darcy friction factor**.

### Friction Factor

**Laminar flow:** $f = \frac{64}{Re}$

**Turbulent flow (smooth pipe — Blasius correlation):**
$$f = \frac{0.316}{Re^{0.25}} \quad (Re < 10^5)$$

**Turbulent flow (Colebrook-White equation):**
$$\frac{1}{\sqrt{f}} = -2\log\left(\frac{\varepsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}}\right)$$

where $\varepsilon$ = pipe roughness.

### Moody Diagram

The **Moody diagram** plots $f$ vs $Re$ for various relative roughness $\varepsilon/D$:

- Laminar: straight line $f = 64/Re$
- Turbulent: curves depending on roughness

---

## 7. Comparison: Laminar vs Turbulent

| Property | Laminar | Turbulent |
|---------|---------|----------|
| Re | < 2000 | > 4000 |
| Velocity profile | Parabolic | Flat with steep wall region |
| Mixing | None | Vigorous |
| Friction factor | $64/Re$ | $\sim Re^{-0.25}$ |
| Pressure drop | $\propto v$ | $\propto v^{1.75}$ to $v^2$ |
| Heat/mass transfer | Low | High |
| Noise | Quiet | Noisy |
| Dye injection | Straight lines | Disperses rapidly |
| Energy loss | Lower | Higher |

---

## 8. Examples in Real Life

| Situation | Re (approx.) | Type |
|-----------|-------------|------|
| Blood in capillaries | ~0.001 | Laminar |
| Water from tap (low) | ~1000 | Laminar |
| Water from tap (high) | ~10,000 | Turbulent |
| River flow | ~10⁶ | Turbulent |
| Aircraft boundary layer | ~10⁷ | Turbulent |
| Wind around buildings | ~10⁷ | Turbulent |
| Air in lungs | ~2000 | Transitional |

---

## 9. Worked Examples

### Example 9.1 — Identifying Turbulent Flow

**Problem:** Water (ρ = 1000 kg/m³, μ = 0.001 Pa·s) flows at 2 m/s in a 5 cm pipe. Determine the flow regime.

**Solution:**

$$Re = \frac{\rho v D}{\mu} = \frac{1000 \times 2 \times 0.05}{0.001} = 100{,}000$$

Since $Re = 10^5 \gg 4000$ → **Turbulent Flow**

---

### Example 9.2 — Friction Factor and Head Loss

**Problem:** Water flows at 3 m/s through a 10 cm diameter, 100 m smooth pipe. Find the head loss using the Blasius equation.

**Solution:**

$$Re = \frac{1000 \times 3 \times 0.10}{0.001} = 300{,}000$$

Blasius friction factor:
$$f = \frac{0.316}{Re^{0.25}} = \frac{0.316}{(3 \times 10^5)^{0.25}} = \frac{0.316}{23.40} = 0.01350$$

Darcy-Weisbach head loss:
$$h_f = f \frac{L}{D} \frac{v^2}{2g} = 0.01350 \times \frac{100}{0.10} \times \frac{3^2}{2 \times 9.81}$$

$$h_f = 0.01350 \times 1000 \times \frac{9}{19.62} = 13.5 \times 0.4587 = \boxed{6.19 \text{ m}}$$

---

### Example 9.3 — Turbulence Intensity

**Problem:** In a turbulent flow, the mean velocity is $\bar{u} = 5$ m/s and the rms fluctuation is $u'_{rms} = 0.4$ m/s. Find the turbulence intensity.

**Solution:**

$$I = \frac{u'_{rms}}{\bar{u}} = \frac{0.4}{5} = 0.08 = \boxed{8\%}$$

This is moderate turbulence.

---

### Example 9.4 — Power Law Profile

**Problem:** In turbulent pipe flow at $Re = 10^5$, the maximum velocity is 4 m/s. Using the 1/7 power law, find the average velocity and flow rate in a 20 cm pipe.

**Solution:**

For $n = 7$:
$$\bar{v} = \frac{2 \times 7^2}{(7+1)(2\times7+1)} u_{max} = \frac{98}{120} \times 4 = 0.817 \times 4 = \boxed{3.27 \text{ m/s}}$$

$$A = \frac{\pi (0.20)^2}{4} = 0.03142 \text{ m}^2$$

$$Q = A\bar{v} = 0.03142 \times 3.27 = \boxed{0.1027 \text{ m}^3/\text{s}}$$

---

## 10. References

- 📘 Frank White — *Fluid Mechanics*, Chapters 6 & 8
- 📘 Munson et al. — *Fundamentals of Fluid Mechanics*
- 📘 Pope S.B. — *Turbulent Flows*, Cambridge University Press
- 🌐 [Khan Academy — Turbulence](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/laminar-and-turbulent-flow)
- 🌐 [HyperPhysics — Turbulent Flow](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html)
- 🌐 [Reynolds Number — Wikipedia](https://en.wikipedia.org/wiki/Reynolds_number)
- 🌐 [Turbulence — Wikipedia](https://en.wikipedia.org/wiki/Turbulence)
- 🌐 [Physics LibreTexts — Viscosity and Turbulence](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics/14.07:_Viscosity_and_Turbulence)

---

[← Streamline Motion](./07_streamline_motion.md) | [← Back to Index](./README.md) | [Next: Equation of Continuity →](./09_equation_of_continuity.md)
