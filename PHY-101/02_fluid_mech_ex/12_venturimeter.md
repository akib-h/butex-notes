# 12. Venturimeter

> **Date:** April 10, 2026 | **Topic:** 12 of 12 | [← Torricelli's Theorem](./11_torricellis_theorem.md) | [← Back to Index](./README.md)

---

## 📋 Table of Contents

1. [Introduction & History](#1-introduction--history)
2. [Construction and Working Principle](#2-construction-and-working-principle)
3. [Derivation of Flow Rate Formula](#3-derivation-of-flow-rate-formula)
4. [Coefficient of Discharge](#4-coefficient-of-discharge)
5. [Differential Manometer Reading](#5-differential-manometer-reading)
6. [Inclined Venturimeter](#6-inclined-venturimeter)
7. [Comparison with Other Flow Meters](#7-comparison-with-other-flow-meters)
8. [Worked Examples](#8-worked-examples)
9. [References](#9-references)

---

## 1. Introduction & History

The **venturimeter** (also spelled venturi meter) is a device used to **measure the flow rate** of a fluid in a pipe. It was invented by **Giovanni Battista Venturi** (1746–1822), Italian physicist, who discovered the principle in 1797. It was later developed practically by **Clemens Herschel** (1886).

The device works on the principle of **Bernoulli's equation** and the **equation of continuity**.

> **Principle:** When a fluid flows through a constriction in a pipe, its velocity increases and pressure decreases. Measuring this pressure drop allows calculation of the flow rate.

---

## 2. Construction and Working Principle

### Parts of a Venturimeter

```
         INLET      CONVERGING   THROAT   DIVERGING    OUTLET
         SECTION    SECTION      SECTION  SECTION      SECTION
         
    ═══╗                                               ╔═══
       ║════╗                               ╔════║════║
       ║    ╚════╗               ╔════╝    ╝    ║
    D₁ ║         ╚═══════════════╝          ║   D₁
       ║         ←─── throat ───→           ║
    ═══╝                 D₂                 ╚═══
              P₁                  P₂
              │                   │
              │   (P₁ > P₂)       │
              ▼                   ▼
       ┌──────┴───────────────────┴──────┐
       │         DIFFERENTIAL            │
       │          MANOMETER              │
       └─────────────────────────────────┘
       
       Pressure difference = ρgh (manometer reading)
```

### Three Parts of a Venturimeter

1. **Converging Section:** Narrows from pipe diameter $D_1$ to throat diameter $D_2$
   - Standard cone angle: 15°–20°

2. **Throat:** The narrowest section (diameter $D_2$)
   - Velocity is maximum here
   - Pressure is minimum here

3. **Diverging Section:** Gradually expands back to $D_1$
   - Cone angle: 5°–7° (gentler to minimize turbulence and head loss)

### Working Principle

- Fluid at inlet (section 1): **low velocity, high pressure** ($P_1$)
- Fluid at throat (section 2): **high velocity, low pressure** ($P_2$)
- The **pressure difference** $\Delta P = P_1 - P_2$ is measured by a differential manometer
- This pressure difference is used to calculate the flow rate $Q$

---

## 3. Derivation of Flow Rate Formula

### Given

- Section 1 (inlet): area $A_1 = \frac{\pi D_1^2}{4}$, velocity $v_1$, pressure $P_1$, height $h_1$
- Section 2 (throat): area $A_2 = \frac{\pi D_2^2}{4}$, velocity $v_2$, pressure $P_2$, height $h_2$

### Step 1: Apply Continuity Equation

$$A_1 v_1 = A_2 v_2$$

$$v_1 = \frac{A_2}{A_1} v_2 \quad \ldots (1)$$

### Step 2: Apply Bernoulli's Equation

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$

Rearranging:

$$\frac{P_1 - P_2}{\rho g} + (h_1 - h_2) = \frac{v_2^2 - v_1^2}{2g}$$

Define the **differential head**:
$$H = \frac{P_1 - P_2}{\rho g} + (h_1 - h_2)$$

So:
$$H = \frac{v_2^2 - v_1^2}{2g} \quad \ldots (2)$$

### Step 3: Substitute Continuity into Bernoulli

From (1): $v_1 = \frac{A_2}{A_1} v_2$

Substituting into (2):

$$H = \frac{v_2^2 - \left(\frac{A_2}{A_1}\right)^2 v_2^2}{2g} = \frac{v_2^2}{2g}\left[1 - \left(\frac{A_2}{A_1}\right)^2\right]$$

$$2gH = v_2^2 \left[1 - \frac{A_2^2}{A_1^2}\right] = v_2^2 \left[\frac{A_1^2 - A_2^2}{A_1^2}\right]$$

$$v_2 = \frac{A_1}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH}$$

### Step 4: Theoretical Flow Rate

$$Q_{theoretical} = A_2 v_2 = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH}$$

$$\boxed{Q_{theoretical} = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH}}$$

This can also be written as:

$$Q_{theoretical} = A_2 \sqrt{\frac{2gH}{1 - (A_2/A_1)^2}} = A_2 \sqrt{\frac{2gH}{1 - (D_2/D_1)^4}}$$

---

## 4. Coefficient of Discharge

In practice, the actual flow rate is less than theoretical due to:
- Friction losses in the venturimeter
- Non-uniformity of velocity distribution

$$Q_{actual} = C_d \times Q_{theoretical}$$

$$\boxed{Q_{actual} = \frac{C_d A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH}}$$

**Typical value:** $C_d = 0.95$ to $0.99$ for venturimeters (higher than orifice meters because of smooth converging section)

---

## 5. Differential Manometer Reading

A **U-tube differential manometer** is connected between the inlet and throat:

```
       Pipe ──────────────────────────────────────
              Section 1              Section 2
              ┬                      ┬
              │ P₁                   │ P₂
              │                      │
              └──────────┬───────────┘
                         │
                    ┌────┴────┐
                    │         │
                    │  ~~~    │  ← manometer fluid (heavy)
                    │~~~~~~~~~│     usually mercury (Hg)
                    └─────────┘
                    ← x (manometer deflection) →
```

### For a Horizontal Venturimeter

For a differential U-tube manometer with manometer fluid of density $\rho_m$:

$$H = h\left(\frac{\rho_m}{\rho} - 1\right)$$

Where $h$ = manometer deflection (difference in mercury levels).

For **mercury manometer** in water pipe ($\rho_m = 13,600$ kg/m³, $\rho = 1000$ kg/m³):

$$H = h\left(\frac{13600}{1000} - 1\right) = 12.6 \cdot h$$

### For an Inclined/Vertical Venturimeter

$$H = \left(\frac{P_1}{\rho g} + h_1\right) - \left(\frac{P_2}{\rho g} + h_2\right)$$

where $h_1$, $h_2$ are the heights of inlet and throat above datum.

For a mercury manometer in an inclined venturimeter:

$$H = x\left(\frac{\rho_m}{\rho} - 1\right)$$

where $x$ is the manometer deflection.

---

## 6. Inclined Venturimeter

For an inclined venturimeter (not horizontal):

```
                        Section 2 (throat)
                     ╔════════════════════╗
                    ╗╝                    ╚╗
          h₂ ↑     ╗╝   v₂, P₂, A₂       ╚╗   ↑ h₂
               ╔═══╝                        ╚═══╗
    h₁ ↑      ╗ Section 1                    ╗
               ╚                              ╚
   Datum ────────────────────────────────────────
```

Bernoulli's equation:
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$

The differential head $H$ now includes both pressure and elevation terms:

$$H = \left(\frac{P_1}{\rho g} + h_1\right) - \left(\frac{P_2}{\rho g} + h_2\right)$$

The flow rate formula has the **same form**:

$$Q_{actual} = \frac{C_d A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH}$$

This means the venturimeter formula works for **any orientation** as long as $H$ accounts for both pressure and elevation differences.

---

## 7. Comparison with Other Flow Meters

| Device | $C_d$ | Head Loss | Cost | Applications |
|--------|-------|-----------|------|-------------|
| **Venturimeter** | 0.95–0.99 | Low (5–10%) | High | Water, oil, gas pipelines |
| **Orifice plate** | 0.60–0.65 | High (40–60%) | Low | Simple industrial applications |
| **Flow nozzle** | 0.96–0.99 | Medium | Medium | High-velocity, steam |
| **Rotameter** | — | Low | Low | Low flow rates, labs |
| **Electromagnetic** | — | Very low | High | Conductive liquids |
| **Ultrasonic** | — | Zero | Very high | Non-intrusive applications |

---

## 8. Worked Examples

### Example 8.1 — Basic Venturimeter

**Problem:** A horizontal venturimeter has inlet diameter 30 cm and throat diameter 15 cm. The pressure at inlet is 15 kPa (gauge) and at throat is 6 kPa (gauge). $C_d = 0.98$. Find the flow rate of water.

**Solution:**

$$A_1 = \frac{\pi (0.30)^2}{4} = 0.07069 \text{ m}^2$$

$$A_2 = \frac{\pi (0.15)^2}{4} = 0.01767 \text{ m}^2$$

**Differential head (horizontal):**
$$H = \frac{P_1 - P_2}{\rho g} = \frac{(15 - 6) \times 10^3}{1000 \times 9.81} = \frac{9000}{9810} = 0.9174 \text{ m}$$

**Theoretical flow:**
$$Q_{th} = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH}$$

$$\sqrt{A_1^2 - A_2^2} = \sqrt{(0.07069)^2 - (0.01767)^2} = \sqrt{4.997 \times 10^{-3} - 3.122 \times 10^{-4}}$$

$$= \sqrt{4.685 \times 10^{-3}} = 0.06843 \text{ m}^2$$

$$Q_{th} = \frac{0.07069 \times 0.01767}{0.06843} \times \sqrt{2 \times 9.81 \times 0.9174}$$

$$= \frac{1.249 \times 10^{-3}}{0.06843} \times \sqrt{18.00}$$

$$= 0.01825 \times 4.243 = 7.743 \times 10^{-2} \text{ m}^3/\text{s}$$

**Actual flow:**
$$Q_{actual} = C_d \times Q_{th} = 0.98 \times 7.743 \times 10^{-2} = \boxed{7.588 \times 10^{-2} \text{ m}^3/\text{s}}$$

$$= \boxed{75.9 \text{ L/s}}$$

---

### Example 8.2 — Venturimeter with Mercury Manometer

**Problem:** A horizontal venturimeter has pipe diameter 20 cm and throat diameter 10 cm. A mercury differential manometer connected to inlet and throat shows a deflection of 20 cm. $C_d = 0.96$. Find the discharge. (ρ_water = 1000 kg/m³, ρ_mercury = 13,600 kg/m³)

**Solution:**

$$A_1 = \frac{\pi (0.20)^2}{4} = 3.142 \times 10^{-2} \text{ m}^2$$

$$A_2 = \frac{\pi (0.10)^2}{4} = 7.854 \times 10^{-3} \text{ m}^2$$

**Differential head (mercury manometer, water pipe):**
$$H = h\left(\frac{\rho_m}{\rho_w} - 1\right) = 0.20 \times \left(\frac{13600}{1000} - 1\right) = 0.20 \times 12.6 = 2.52 \text{ m of water}$$

$$\sqrt{A_1^2 - A_2^2} = \sqrt{(3.142 \times 10^{-2})^2 - (7.854 \times 10^{-3})^2}$$

$$= \sqrt{9.871 \times 10^{-4} - 6.169 \times 10^{-5}} = \sqrt{9.254 \times 10^{-4}} = 3.042 \times 10^{-2} \text{ m}^2$$

$$Q_{th} = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH} = \frac{3.142 \times 10^{-2} \times 7.854 \times 10^{-3}}{3.042 \times 10^{-2}} \times \sqrt{2 \times 9.81 \times 2.52}$$

$$= \frac{2.468 \times 10^{-4}}{3.042 \times 10^{-2}} \times \sqrt{49.45} = 8.112 \times 10^{-3} \times 7.032$$

$$Q_{th} = 5.704 \times 10^{-2} \text{ m}^3/\text{s}$$

$$Q_{actual} = 0.96 \times 5.704 \times 10^{-2} = \boxed{5.476 \times 10^{-2} \text{ m}^3/\text{s} \approx 54.8 \text{ L/s}}$$

---

### Example 8.3 — Finding Manometer Reading

**Problem:** A venturimeter (D₁ = 25 cm, D₂ = 12.5 cm, Cd = 0.98) carries water at 0.05 m³/s. Find the manometer deflection if the manometer uses mercury. (ρ_Hg = 13,600 kg/m³)

**Solution:**

$$A_1 = \frac{\pi(0.25)^2}{4} = 4.909 \times 10^{-2} \text{ m}^2$$

$$A_2 = \frac{\pi(0.125)^2}{4} = 1.227 \times 10^{-2} \text{ m}^2$$

From the flow formula, solve for $H$:

$$Q_{actual} = C_d \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH}$$

$$0.05 = 0.98 \times \frac{4.909 \times 10^{-2} \times 1.227 \times 10^{-2}}{\sqrt{(4.909 \times 10^{-2})^2 - (1.227 \times 10^{-2})^2}} \times \sqrt{2 \times 9.81 \times H}$$

$$\sqrt{A_1^2 - A_2^2} = \sqrt{2.410 \times 10^{-3} - 1.505 \times 10^{-4}} = \sqrt{2.259 \times 10^{-3}} = 4.753 \times 10^{-2}$$

$$0.05 = 0.98 \times \frac{6.023 \times 10^{-4}}{4.753 \times 10^{-2}} \times \sqrt{19.62 H}$$

$$0.05 = 0.98 \times 1.267 \times 10^{-2} \times \sqrt{19.62 H}$$

$$0.05 = 1.242 \times 10^{-2} \times \sqrt{19.62 H}$$

$$\sqrt{19.62 H} = \frac{0.05}{1.242 \times 10^{-2}} = 4.027$$

$$19.62 H = 16.22 \Rightarrow H = 0.8267 \text{ m}$$

**Manometer deflection:**
$$H = x\left(\frac{\rho_m}{\rho_w} - 1\right)$$

$$0.8267 = x \times 12.6$$

$$\boxed{x = 0.0656 \text{ m} = 6.56 \text{ cm}}$$

---

### Example 8.4 — Inclined Venturimeter

**Problem:** A venturimeter is inclined. Inlet (D₁ = 20 cm) is at elevation 2 m, pressure 30 kPa (gauge). Throat (D₂ = 10 cm) is at elevation 5 m, pressure 10 kPa (gauge). Cd = 0.95. Find flow rate.

**Solution:**

**Differential head:**
$$H = \left(\frac{P_1}{\rho g} + h_1\right) - \left(\frac{P_2}{\rho g} + h_2\right)$$

$$H = \left(\frac{30,000}{9810} + 2\right) - \left(\frac{10,000}{9810} + 5\right)$$

$$H = (3.058 + 2) - (1.019 + 5) = 5.058 - 6.019 = -0.961 \text{ m}$$

*Negative H means pressure at inlet is enough to drive flow upward despite the height change.*

Take $|H| = 0.961$ m:

$$A_1 = 3.142 \times 10^{-2} \text{ m}^2, \quad A_2 = 7.854 \times 10^{-3} \text{ m}^2$$

$$Q = 0.95 \times \frac{3.142 \times 10^{-2} \times 7.854 \times 10^{-3}}{3.042 \times 10^{-2}} \times \sqrt{2 \times 9.81 \times 0.961}$$

$$= 0.95 \times 8.112 \times 10^{-3} \times \sqrt{18.857}$$

$$= 0.95 \times 8.112 \times 10^{-3} \times 4.343$$

$$\boxed{Q = 3.35 \times 10^{-2} \text{ m}^3/\text{s} = 33.5 \text{ L/s}}$$

---

## Summary: Venturimeter Formula

$$\boxed{Q = \frac{C_d A_1 A_2}{\sqrt{A_1^2 - A_2^2}} \sqrt{2gH}}$$

where:
- $A_1 = \frac{\pi D_1^2}{4}$ (inlet area)
- $A_2 = \frac{\pi D_2^2}{4}$ (throat area)
- $H$ = differential head (m of flowing fluid)
- $C_d$ = coefficient of discharge (0.95–0.99)

For mercury manometer: $H = x\left(\frac{\rho_{Hg}}{\rho_f} - 1\right)$

---

## 9. References

- 📘 Frank M. White — *Fluid Mechanics*, Chapter 6
- 📘 Munson, Young & Okiishi — *Fundamentals of Fluid Mechanics*
- 📘 Douglas, Gasiorek & Swaffield — *Fluid Mechanics*
- 📘 Streeter & Wylie — *Fluid Mechanics*
- 🌐 [HyperPhysics — Venturimeter](http://hyperphysics.phy-astr.gsu.edu/hbase/pber.html)
- 🌐 [Khan Academy — Venturi Effect](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/what-is-bernoullis-equation)
- 🌐 [Venturi Effect — Wikipedia](https://en.wikipedia.org/wiki/Venturi_effect)
- 🌐 [Venturimeter — Wikipedia](https://en.wikipedia.org/wiki/Venturi_meter)
- 🌐 [Physics LibreTexts — Applications of Bernoulli](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics/14.06:_Fluid_Dynamics)

---

[← Torricelli's Theorem](./11_torricellis_theorem.md) | [← Back to Index](./README.md)

---

*🎓 End of Fluid Mechanics Notes — All 12 Topics Covered*
*Last updated: April 10, 2026*
