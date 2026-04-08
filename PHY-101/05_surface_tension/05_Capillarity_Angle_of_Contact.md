# 05 — Capillarity & Angle of Contact

> **Course:** Physics II | **Topic:** Surface Tension  
> **Date:** 2026-04-08  
> **Syllabus Reference:** Unit 5 — Capillarity & The Angle of Contact

---

## Table of Contents

1. [Capillarity](#1-capillarity)
2. [Angle of Contact](#2-angle-of-contact)
3. [Meniscus Formation](#3-meniscus-formation)
4. [Relationship Between Angle of Contact and Capillary Behaviour](#4-relationship-between-angle-of-contact-and-capillary-behaviour)
5. [Factors Affecting Angle of Contact](#5-factors-affecting-angle-of-contact)
6. [Jurin's Law (Capillary Rise Formula)](#6-jurins-law-capillary-rise-formula)
7. [Worked Examples](#7-worked-examples)
8. [References](#8-references)

---

## 1. Capillarity

### Definition

> **Capillarity** (কৈশিকতা) is the **property of rise or depression of a liquid inside a narrow tube** (capillary tube) when it is dipped in the liquid. The phenomenon is also called **capillary action**.

The word "capillary" comes from the Latin *capillus* meaning hair — referring to the hair-thin tubes in which the effect is observed.

### Physical Description

When a narrow glass tube (capillary tube) of internal radius $r$ is inserted into a liquid:

- **If the liquid wets the glass** (adhesion > cohesion, e.g., water in glass): the liquid **rises** inside the tube.
- **If the liquid does not wet the glass** (cohesion > adhesion, e.g., mercury in glass): the liquid **is depressed** (falls below the outer level) inside the tube.

```
      Water in Glass              Mercury in Glass
    (Adhesion > Cohesion)      (Cohesion > Adhesion)

    ┌──┬──┐  ┌─────┐         ┌──┬──┐  ┌─────┐
    │  │  │  │     │         │  │  │  │     │
    │  │↑ │  │     │         │  │  │  │     │
    │ ╰──╯│  │     │         │  │↓ │  │     │
    │ h   │  │     │         │  │  │  │     │
    │     │  │  ══ │(level)  │  │  │  │  ══ │(level)
    │     │  │     │         │  ╭──╮  │     │
    └─────┘  └─────┘         │  │h'│  └─────┘
                              └──┴──┘

    Concave meniscus           Convex meniscus
    Level rises by h           Level depressed by h'
```

### Why Does Capillarity Occur?

**Case 1 — Water in glass (rise):**
- Adhesive force (water–glass) > Cohesive force (water–water)
- Water molecules cling to the glass walls → pull the water column up
- This continues until the weight of the liquid column balances the upward force of surface tension

**Case 2 — Mercury in glass (depression):**
- Cohesive force (mercury–mercury) > Adhesive force (mercury–glass)
- Mercury molecules prefer to stay together → mercury at the wall is pulled **inward** (downward)
- The liquid level is depressed below the outer level

### Importance of Capillarity

| Domain | Example of Capillarity |
|---|---|
| Biology | Water transport in plant xylem (capillary channels carry water upward) |
| Geology | Water movement through soil pores |
| Medicine | Blood flow in capillaries; lab diagnostics using capillary tubes |
| Engineering | Wicking in fabrics, paper, and candle wicks |
| Construction | Rising damp in walls |
| Ink writing | Ink rises up fountain pen nibs |

---

## 2. Angle of Contact

### Definition

> The **angle of contact** (স্পর্শ কোণ) $\theta$ is defined as the **angle made by the tangent to the liquid surface at the point of contact, with the solid surface inside the liquid**.

More precisely:
> It is the angle between the **tangent plane to the liquid surface** at the line of contact and the **solid surface**, measured **through the liquid**.

```
         Solid wall
              │
              │
     ─────────┼──────── (solid surface)
    Liquid    │   Air
              │  ╲
              │   ╲  ← Tangent to liquid surface
              │    ╲
              │  θ  ╲
    ══════════╪══════╲══════ (liquid level in bulk)

   θ is measured inside the liquid (left side here)
```

### Formal Definition (from handnotes)

The angle of contact is:
> The angle made by the **tangent at the point of contact of the liquid surface** with the **tangent plane to the solid surface inside the liquid**.

---

## 3. Meniscus Formation

The **meniscus** is the curved upper surface of a liquid in a tube. Its shape depends on the angle of contact:

### Concave Meniscus (e.g., Water in Glass)

```
         │       │
         │  ╭───╮│
         │ ╱     ╲│
         │╱   θ<90°╲
         ╲           ╱
    ─────────────────── (tangent to solid at contact line)
    θ = angle of contact (measured inside liquid = left side)
```

For water on glass: $\theta \approx 0°$ (perfectly wetting)

The liquid **rises** because the concave meniscus has a net upward component of surface tension.

### Convex Meniscus (e.g., Mercury in Glass)

```
         │       │
         ╱       ╲
        ╱    θ>90°╲
       │             │
         ───────────
    ─────────────────── (solid surface at contact line)
```

For mercury on glass: $\theta \approx 135°–140°$

The liquid is **depressed** because the convex meniscus has a net downward component.

### Flat Meniscus

When $\theta = 90°$: no rise or fall. Surface tension acts purely horizontally.

---

## 4. Relationship Between Angle of Contact and Capillary Behaviour

| Angle of Contact $\theta$ | Meniscus | Liquid Behaviour | Example |
|---|---|---|---|
| $0°$ | Concave (max) | Maximum rise | Water on clean glass |
| $0° < \theta < 90°$ | Concave | Liquid rises | Water in glass |
| $\theta = 90°$ | Flat | No rise or fall | Some special pairs |
| $90° < \theta < 180°$ | Convex | Liquid depressed | Mercury in glass |
| $\theta = 180°$ | Convex (max) | Maximum depression | Mercury on certain metals |

### Thermodynamic Origin (Young's Equation)

The angle of contact is determined by the balance of three surface tensions at the contact line:

- $T_{SL}$ = solid–liquid interfacial tension
- $T_{SV}$ = solid–vapour interfacial tension  
- $T_{LV}$ = liquid–vapour surface tension (= $T$)

**Young's equation:**

$$\boxed{\cos\theta = \frac{T_{SV} - T_{SL}}{T_{LV}}}$$

- If $T_{SV} > T_{SL}$: $\cos\theta > 0$ → $\theta < 90°$ → wetting (liquid rises)
- If $T_{SV} < T_{SL}$: $\cos\theta < 0$ → $\theta > 90°$ → non-wetting (liquid depressed)

---

## 5. Factors Affecting Angle of Contact

1. **Nature of the solid and liquid**: Fundamentally determined by the intermolecular forces between solid and liquid.

2. **Cleanliness of the solid surface**: Contamination (grease, oil) dramatically changes $\theta$. Clean glass has $\theta \approx 0°$ for water; greasy glass has $\theta \approx 30°–40°$.

3. **Temperature**: Higher temperature generally decreases $\theta$ (liquids wet better when hot) because surface tension decreases.

4. **Dissolved substances (surfactants)**: Detergents reduce $T_{LV}$ and $T_{SL}$, generally decreasing $\theta$ and improving wetting.

5. **Pressure**: Very slight effect for most practical purposes.

---

## 6. Jurin's Law (Capillary Rise Formula)

The height $h$ to which a liquid rises (or falls) in a capillary tube of radius $r$ is given by:

$$\boxed{h = \frac{2T\cos\theta}{\rho g r}}$$

Where:
- $h$ = height of rise (positive) or depression (negative)
- $T$ = surface tension of liquid
- $\theta$ = angle of contact
- $\rho$ = density of liquid
- $g$ = acceleration due to gravity
- $r$ = radius of capillary tube

### Derivation

**Upward force** due to surface tension:

The surface tension acts along the circumference of the meniscus at angle $\theta$ to the vertical:

$$F_{\uparrow} = T \cdot 2\pi r \cdot \cos\theta \quad \text{...(1)}$$

**Downward force** = weight of liquid column (including meniscus):

Volume of liquid column (cylinder + meniscus correction):

$$V = \pi r^2 h + \frac{2}{3}\pi r^3 - \frac{1}{2}\pi r^3 \cdot \frac{2}{3} = \pi r^2 h + \frac{\pi r^3}{3}$$

For most practical purposes (thin tubes), the meniscus volume $\frac{\pi r^3}{3}$ is small. The effective height is taken as $\left(h + \frac{r}{3}\right)$ for a hemispherical meniscus.

Weight of liquid:

$$W = \pi r^2 \left(h + \frac{r}{3}\right) \rho g \quad \text{...(2)} \qquad \text{(for } \theta = 0°\text{)}$$

**Equilibrium** ($F_\uparrow = W$):

$$2\pi r T\cos\theta = \pi r^2 \left(h + \frac{r}{3}\right)\rho g$$

$$2T\cos\theta = r\left(h + \frac{r}{3}\right)\rho g$$

For very narrow tubes where $r \ll h$, the $r/3$ term is negligible:

$$\boxed{h = \frac{2T\cos\theta}{\rho g r}}$$

### Jurin's Law Statement

> The height of liquid in a capillary tube is **inversely proportional to the radius** of the tube.

$$h \propto \frac{1}{r}$$

This means: **thinner the tube, higher the liquid rises**.

### For a U-tube with Different Radii

For a U-tube with two limbs of radii $r_1$ and $r_2$ ($r_1 < r_2$):

$$h_1 - h_2 = \frac{2T\cos\theta}{\rho g}\left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$

---

## 7. Worked Examples

### Example 1: Capillary rise of water

A capillary tube of radius $r = 0.1$ mm is dipped in water ($T = 72 \times 10^{-3}$ N/m, $\theta = 0°$, $\rho = 1000$ kg/m³).

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 72 \times 10^{-3} \times 1}{1000 \times 9.8 \times 0.1 \times 10^{-3}}$$

$$h = \frac{144 \times 10^{-3}}{9.8 \times 10^{-1}} = \frac{0.144}{0.98} = 0.1469 \text{ m} \approx 14.7 \text{ cm}$$

### Example 2: U-tube difference in levels (from handnotes — Problem 16)

**Q:** A U-tube has two limbs of internal radii 0.5 cm and 1 cm respectively. Find the difference in water levels. $T = 7.2 \times 10^{-2}$ N/m.

$$r_1 = 0.5 \text{ cm} = 0.005 \text{ m}, \quad r_2 = 1 \text{ cm} = 0.01 \text{ m}$$

$$P = 2T\left(\frac{1}{r_1} - \frac{1}{r_2}\right) \implies h\rho g = 2T\left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$

$$h = \frac{2T}{\rho g}\left(\frac{1}{r_1} - \frac{1}{r_2}\right) = \frac{2 \times 7.2 \times 10^{-2}}{1000 \times 9.8}\left(\frac{1}{0.005} - \frac{1}{0.01}\right)$$

$$= \frac{0.144}{9800} \times (200 - 100) = \frac{0.144 \times 100}{9800}$$

$$\boxed{h = 1.47 \times 10^{-3} \text{ m} = 1.47 \text{ mm}}$$

### Example 3: Rise of liquid with angle of contact (from handnotes — Problem 18)

**Q:** A liquid of density 1.05 g/cc and angle of contact 20° has a vertical capillary tube of 2 mm diameter. Surface tension = 235 dyne/cm. Find the rise.

$$r = 1 \text{ mm} = 0.1 \text{ cm}, \quad \theta = 20°, \quad T = 235 \text{ dyne/cm}$$

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 235 \times \cos 20°}{1.05 \times 980 \times 0.1}$$

$$= \frac{470 \times 0.9397}{102.9} = \frac{441.7}{102.9} = \boxed{4.29 \text{ cm}}$$

### Example 4: Density from U-tube (from handnotes — Problem 21)

**Q:** A U-tube made of two capillaries of bore 1 mm and 2 mm is partially filled with a liquid of surface tension 49 dyne/cm and zero contact angle. Difference in meniscus levels = 1.25 cm. Find density.

$$r_1 = 0.5 \text{ mm} = 0.05 \text{ cm}, \quad r_2 = 1 \text{ mm} = 0.1 \text{ cm}$$

$$h_1 - h_2 = \frac{2T}{\rho g}\left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$

$$1.25 = \frac{2 \times 49}{\rho \times 980}\left(\frac{1}{0.05} - \frac{1}{0.1}\right) = \frac{98}{\rho \times 980}(20 - 10)$$

$$1.25 = \frac{98 \times 10}{\rho \times 980} = \frac{980}{\rho \times 980} = \frac{1}{\rho}$$

$$\boxed{\rho = 0.8 \text{ g/cc}}$$

---

## 8. References

| Resource | Link |
|---|---|
| HyperPhysics — Capillary Action | http://hyperphysics.phy-astr.gsu.edu/hbase/surten.html#c3 |
| OpenStax — Capillarity | https://openstax.org/books/university-physics-volume-1/pages/14-introduction |
| Khan Academy — Capillary Action | https://www.khanacademy.org |
| LibreTexts — Capillary Rise | https://phys.libretexts.org |
| Britannica — Capillarity | https://www.britannica.com/science/capillarity |
| Young, T. (1805). *Phil. Trans. R. Soc. London* — Original paper on contact angle | Historical reference |
| Jurin, J. (1719). *Phil. Trans. R. Soc. London* — Original paper on capillary rise | Historical reference |

---

*Previous: [04 — Excess Pressure](./04_Excess_Pressure.md) | Next: [06 — Capillary Rise Method](./06_Capillary_Rise_Method.md)*
