# 🧪 PHYSICS-I — Viscosity & Surface Tension
### Complete Exam Preparation Notes (2017–2022)

---

## 📌 TABLE OF CONTENTS
1. [Viscosity — Core Definitions](#1-viscosity--core-definitions)
2. [Newton's Law of Viscous Flow](#2-newtons-law-of-viscous-flow)
3. [Coefficient of Viscosity](#3-coefficient-of-viscosity)
4. [Velocity Gradient](#4-velocity-gradient)
5. [Torricelli's Theorem](#5-torricellis-theorem)
6. [Determination of Viscosity by Capillary Flow Method](#6-determination-of-viscosity-by-capillary-flow-method)
7. [Surface Tension & Surface Energy](#7-surface-tension--surface-energy)
8. [Capillary Rise — Derivation](#8-capillary-rise--derivation)
9. [All Key Formulas at a Glance](#9-all-key-formulas-at-a-glance)
10. [Solved Numerical Problems](#10-solved-numerical-problems)

---

## 1. Viscosity — Core Definitions

### 1.1 What is Viscosity?
> **Viscosity** is the property of a fluid (liquid or gas) by virtue of which it opposes the relative motion between its adjacent layers. It is the internal friction of a fluid.

**Analogy:** Just as friction opposes relative motion between solid surfaces, viscosity opposes relative motion between fluid layers.

**Key points:**
- Viscosity is a measure of a fluid's resistance to flow
- Honey has high viscosity; water has low viscosity
- For liquids: viscosity **decreases** with increasing temperature
- For gases: viscosity **increases** with increasing temperature
- Unit of viscosity: **Pa·s** (Pascal-second) or **N·s/m²** or **poise** (CGS: 1 poise = 0.1 Pa·s)

### 1.2 Critical Velocity (Brief Review)
> The velocity below which fluid flow is laminar and above which it becomes turbulent.

$$v_c = \frac{K\eta}{\rho r}$$

---

## 2. Newton's Law of Viscous Flow

### Statement
> The tangential viscous force (F) between two adjacent layers of a fluid is directly proportional to:
> 1. The area (A) of the layers in contact
> 2. The velocity gradient (dv/dx) between the layers
>
> and acts in a direction opposing the relative motion.

$$\boxed{F = \eta A \frac{dv}{dx}}$$

### Explanation with Diagram

Consider fluid flowing in layers over a surface:

```
 v_max ──────────────────►  (top layer, fastest)
 v  ──────────────────►
      ──────────────►
       ────────────►
 v=0  ════════════════════  (bottom layer, stationary — wall)
```

- Bottom layer (at wall): velocity = 0 (no-slip condition)
- Each successive layer moves faster than the one below
- The force resisting this relative sliding motion is the **viscous force**

### Newton's Law — Full Expression

$$F = \eta \cdot A \cdot \frac{dv}{dx}$$

Where:
| Symbol | Quantity | SI Unit |
|---|---|---|
| $F$ | Viscous force | N |
| $\eta$ | Coefficient of viscosity | Pa·s = N·s/m² |
| $A$ | Area of contact between layers | m² |
| $\frac{dv}{dx}$ | Velocity gradient (rate of change of velocity with distance) | s⁻¹ |

**Viscous stress (shear stress):**
$$\tau = \frac{F}{A} = \eta \frac{dv}{dx}$$

Fluids that obey Newton's law are called **Newtonian fluids** (e.g., water, air, most oils).  
Fluids that do not obey it (e.g., blood, paint, ketchup) are called **non-Newtonian fluids**.

---

## 3. Coefficient of Viscosity

### Definition
> The **coefficient of viscosity** ($\eta$) of a fluid is defined as the tangential viscous force per unit area required to maintain a unit velocity gradient between two adjacent layers.

From Newton's law:
$$F = \eta A \frac{dv}{dx}$$

$$\boxed{\eta = \frac{F}{A \cdot \frac{dv}{dx}} = \frac{F \cdot dx}{A \cdot dv}}$$

### Units

**SI unit:**
$$[\eta] = \frac{\text{N} \cdot \text{m}}{\text{m}^2 \cdot \text{m/s}} = \frac{\text{N·s}}{\text{m}^2} = \text{Pa·s}$$

**CGS unit:** poise (P)  
$$1 \text{ Pa·s} = 10 \text{ poise}$$

### Dimensions
$$[\eta] = \frac{[F][x]}{[A][v]} = \frac{MLT^{-2} \cdot L}{L^2 \cdot LT^{-1}} = ML^{-1}T^{-1}$$

### Effect of Temperature on Viscosity

| Fluid Type | Effect of ↑Temperature |
|---|---|
| Liquid | Viscosity **decreases** (inter-molecular forces weaken) |
| Gas | Viscosity **increases** (molecular collision rate increases) |

---

## 4. Velocity Gradient

### Definition
> **Velocity gradient** is the rate of change of velocity with respect to the perpendicular distance between adjacent fluid layers.

$$\boxed{\text{Velocity Gradient} = \frac{dv}{dx}}$$

**Unit:** m/s per m = **s⁻¹** (per second)

**Physical meaning:**
- Represents how rapidly velocity changes across the thickness of the fluid
- A large velocity gradient means neighboring layers have very different speeds
- It is the cause of viscous shear stress

**Example:** If velocity changes from 0 to 10 m/s over a distance of 2 mm:
$$\frac{dv}{dx} = \frac{10 - 0}{2 \times 10^{-3}} = 5000 \text{ s}^{-1}$$

---

## 5. Torricelli's Theorem

### Statement
> The velocity of efflux of a liquid through an orifice (hole) in the wall of a vessel is equal to the velocity that a freely falling body would attain in falling through a height equal to the depth of the orifice below the free surface of the liquid.

$$\boxed{v = \sqrt{2gh}}$$

where $h$ is the depth of the orifice below the free surface.

### Proof (Using Bernoulli's Theorem)

**Setup:**
- Large open tank, free surface at height $h$ above orifice
- Orifice (small hole) in the side
- Let point **1** = free surface of liquid
- Let point **2** = orifice (exit point)

**Conditions:**
- Both surfaces are open to atmosphere → $P_1 = P_2 = P_{atm}$
- Tank is large → $v_1 \approx 0$ (surface drops very slowly)
- Take orifice level as reference → $h_2 = 0$, $h_1 = h$

**Applying Bernoulli's theorem:**
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$

$$P_{atm} + 0 + \rho g h = P_{atm} + \frac{1}{2}\rho v_2^2 + 0$$

$$\rho g h = \frac{1}{2}\rho v_2^2$$

$$v_2^2 = 2gh$$

$$\boxed{v = \sqrt{2gh}}$$

This is identical to the velocity of a body falling freely from height $h$ — hence called Torricelli's theorem.

### Range of Efflux

If the orifice is at height $H'$ above the ground, and tank height is $H$:
- Depth of orifice below surface: $h = H - H'$
- Time to reach ground: $t = \sqrt{\frac{2H'}{g}}$
- Horizontal range: $x = v \cdot t = \sqrt{2gh} \cdot \sqrt{\frac{2H'}{g}}$

$$\boxed{x = 2\sqrt{h \cdot H'} = 2\sqrt{(H-H')H'}}$$

Maximum range occurs when $H' = H/2$ (orifice at mid-height).

---

## 6. Determination of Viscosity by Capillary Flow Method

### Principle
Based on **Poiseuille's law**:
$$Q = \frac{\pi \Delta P r^4}{8 \eta l}$$

Rearranging:
$$\eta = \frac{\pi \Delta P r^4}{8 Q l}$$

### Apparatus
- A long, narrow horizontal capillary tube of known radius $r$ and length $l$
- A constant-head tank (to maintain steady pressure)
- A graduated measuring cylinder (to collect liquid)
- A manometer or pressure gauge to measure $\Delta P$

### Procedure

1. **Set up:** Connect the capillary tube to the constant-head tank. Ensure horizontal alignment.

2. **Measure flow rate:** Collect the liquid issuing from the tube in a measuring cylinder for a known time $t$. Calculate:
   $$Q = \frac{V}{t}$$
   where $V$ = volume collected.

3. **Measure pressure difference:** Use a manometer. If a liquid column of height $h$ and density $\rho$ creates the pressure:
   $$\Delta P = \rho g h$$

4. **Measure tube dimensions:** Use a travelling microscope to measure the internal radius $r$ accurately. Measure length $l$ with a ruler.

5. **Calculate viscosity:**
$$\boxed{\eta = \frac{\pi \rho g h r^4}{8 Q l} = \frac{\pi \rho g h r^4 t}{8 V l}}$$

### Precautions
- Tube must be **perfectly horizontal** (to avoid gravity effects)
- Flow must be **laminar** (check: Re < 2000)
- Apply **end correction**: use $l_{eff} = l + 1.64r$ instead of $l$
- Apply **Hagenbach correction** for kinetic energy of exiting fluid
- Temperature must be kept **constant** (viscosity is temperature-sensitive)
- Use a **uniform bore** tube

### Sources of Error
- Non-uniform bore of tube
- Temperature fluctuations
- Turbulent flow at high speeds
- End effects not corrected for

---

## 7. Surface Tension & Surface Energy

### 7.1 Surface Tension

> **Surface tension** ($T$) is the property of a liquid surface by which it tends to contract and occupy the minimum possible area. It is defined as the force per unit length acting along the surface of a liquid in a direction perpendicular to any imaginary line drawn on the surface.

$$\boxed{T = \frac{F}{l}}$$

**Unit:** N/m  
**Dimension:** MT⁻²

**Molecular explanation:**
- A molecule in the **bulk** of a liquid is surrounded on all sides → net force = 0
- A molecule on the **surface** has fewer neighbors above → net inward force
- This creates a "stretched membrane" effect at the surface
- The surface behaves like an elastic skin under tension

### 7.2 Surface Energy

> **Surface energy** is the potential energy per unit area of the liquid surface. It is the energy required to increase the surface area of a liquid by unity.

$$\boxed{E_s = \frac{W}{A} = \frac{\text{Work done}}{\text{Increase in area}}}$$

**Unit:** J/m²

### 7.3 Proof: Surface Energy per Unit Area = Surface Tension

**Consider a rectangular frame** with a movable wire of length $l$:

```
|←————— l —————→|
|                |  ↑
|                |  dx (displacement)
|                |  ↓
════════════════  (movable wire)
```

Force needed to pull the wire outward (two surfaces, so force = $T \times 2l$):
$$F = 2Tl$$

Work done to move wire by distance $dx$:
$$W = F \cdot dx = 2Tl \cdot dx$$

Increase in surface area (two surfaces):
$$\Delta A = 2l \cdot dx$$

Surface energy per unit area:
$$\frac{W}{\Delta A} = \frac{2Tl \cdot dx}{2l \cdot dx} = T$$

$$\boxed{\text{Surface energy per unit area} = T \text{ (Surface tension)}}$$

✅ **Conclusion:** Surface energy per unit area of a surface is numerically equal to the surface tension of the liquid.

### 7.4 Contact Angle

> **Contact angle** ($\theta$) is the angle between the tangent to the liquid surface at the point of contact and the solid surface, measured inside the liquid.

| Contact Angle | Behavior | Example |
|---|---|---|
| $\theta < 90°$ | Liquid wets the surface (concave meniscus) | Water in glass |
| $\theta > 90°$ | Liquid does not wet (convex meniscus) | Mercury in glass |
| $\theta = 0°$ | Perfect wetting | Water on clean glass |

---

## 8. Capillary Rise — Derivation

### Definition of Capillary Action
> **Capillarity** is the phenomenon of rise or fall of a liquid in a narrow tube (capillary tube) due to surface tension.

- Liquid **rises** in capillary if it wets the tube ($\theta < 90°$) — e.g., water in glass
- Liquid **falls** in capillary if it does not wet the tube ($\theta > 90°$) — e.g., mercury in glass

### Derivation of Height of Capillary Rise

**Setup:**
- Capillary tube of radius $r$, dipped in liquid
- Surface tension = $T$, contact angle = $\theta$
- Density of liquid = $\rho$
- Height of rise = $h$

**Method 1 — Force Balance**

The upward force due to surface tension acts along the meniscus. The vertical component supports the weight of liquid in the tube.

Upward force = surface tension × contact length × $\cos\theta$:
$$F_{up} = T \cdot 2\pi r \cdot \cos\theta$$

Weight of liquid column in tube:
$$W = \rho g \cdot \pi r^2 h$$

(ignoring the small amount of liquid in the meniscus)

At equilibrium:
$$T \cdot 2\pi r \cos\theta = \rho g \pi r^2 h$$

$$\boxed{h = \frac{2T\cos\theta}{\rho g r}}$$

**Method 2 — Pressure Balance**

The curved meniscus creates excess pressure inside the liquid (Laplace pressure):
$$\Delta P = \frac{2T\cos\theta}{r}$$

This pressure supports the liquid column of height $h$:
$$\Delta P = \rho g h$$

Therefore:
$$\frac{2T\cos\theta}{r} = \rho g h$$

$$\boxed{h = \frac{2T\cos\theta}{\rho g r}}$$

### Key Observations from $h = \dfrac{2T\cos\theta}{\rho g r}$

| Relationship | Meaning |
|---|---|
| $h \propto T$ | Larger surface tension → greater rise |
| $h \propto \dfrac{1}{r}$ | Narrower tube → greater rise |
| $h \propto \dfrac{1}{\rho}$ | Less dense liquid → greater rise |
| $h \propto \cos\theta$ | Smaller contact angle → greater rise |
| $\theta = 0°$ → $h = \dfrac{2T}{\rho g r}$ | Maximum rise (perfect wetting) |
| $\theta = 90°$ → $h = 0$ | No rise |
| $\theta > 90°$ → $h < 0$ | Depression (e.g., mercury) |

---

## 9. All Key Formulas at a Glance

$$\text{Newton's viscous law:} \quad F = \eta A \frac{dv}{dx}$$

$$\text{Coefficient of viscosity:} \quad \eta = \frac{F \cdot dx}{A \cdot dv}$$

$$\text{Shear stress:} \quad \tau = \eta \frac{dv}{dx}$$

$$\text{Torricelli's theorem:} \quad v = \sqrt{2gh}$$

$$\text{Efflux range:} \quad x = 2\sqrt{h(H-h)}$$

$$\text{Poiseuille's law:} \quad Q = \frac{\pi \Delta P r^4}{8\eta l}$$

$$\text{Viscosity from experiment:} \quad \eta = \frac{\pi \rho g h r^4}{8 Q l}$$

$$\text{Surface tension:} \quad T = \frac{F}{l}$$

$$\text{Surface energy = Surface tension:} \quad \frac{W}{\Delta A} = T$$

$$\text{Capillary rise:} \quad h = \frac{2T\cos\theta}{\rho g r}$$

$$\text{Laplace pressure:} \quad \Delta P = \frac{2T}{R} \quad \text{(for sphere)} \quad = \frac{2T\cos\theta}{r} \quad \text{(for capillary)}$$

$$\text{Excess pressure in bubble (soap):} \quad \Delta P = \frac{4T}{R} \quad \text{(two surfaces)}$$

---

## 10. Solved Numerical Problems

---

### Problem 1 (2022, 2020, 2017)
> A plate of metal of area **10⁻² m²** rests on a layer of castor oil **2×10⁻³ m** thick, whose coefficient of viscosity is **1.55 N·s/m²**. Calculate the horizontal force required to move the plate with a uniform speed of **3×10⁻² m/s**.

**Solution:**

Given:
- Area, $A = 10^{-2}$ m²
- Thickness of oil layer (distance), $dx = 2 \times 10^{-3}$ m
- Coefficient of viscosity, $\eta = 1.55$ N·s/m²
- Velocity of plate, $dv = 3 \times 10^{-2}$ m/s (velocity of top layer; bottom layer is stationary, so $dv = v - 0$)

**Velocity gradient:**
$$\frac{dv}{dx} = \frac{3 \times 10^{-2}}{2 \times 10^{-3}} = 15 \text{ s}^{-1}$$

**Applying Newton's law:**
$$F = \eta A \frac{dv}{dx}$$

$$F = 1.55 \times 10^{-2} \times 15$$

$$F = 1.55 \times 0.15$$

$$\boxed{F = 0.2325 \text{ N} \approx 0.23 \text{ N}}$$

---

### Problem 2 (2021 — Surface Tension)
> Calculate the height to which a liquid will rise in a capillary tube of radius **0.22 mm** when surface tension of liquid is **26 × 10³ N/m** and density **1000 kg/m³**. Angle of contact = **0°**.

> *(Note: The value 26 × 10³ N/m appears to be a misprint in the paper. The standard value for water-like liquid is around 0.026 N/m = 26 × 10⁻³ N/m. Solving with T = 26 × 10⁻³ N/m)*

**Solution:**

Given:
- Radius, $r = 0.22 \text{ mm} = 0.22 \times 10^{-3}$ m
- Surface tension, $T = 26 \times 10^{-3}$ N/m
- Density, $\rho = 1000$ kg/m³
- Contact angle, $\theta = 0°$ → $\cos 0° = 1$
- $g = 9.8$ m/s²

Using capillary rise formula:
$$h = \frac{2T\cos\theta}{\rho g r}$$

$$h = \frac{2 \times 26 \times 10^{-3} \times 1}{1000 \times 9.8 \times 0.22 \times 10^{-3}}$$

$$h = \frac{52 \times 10^{-3}}{1000 \times 9.8 \times 0.22 \times 10^{-3}}$$

$$h = \frac{52 \times 10^{-3}}{2.156}$$

$$\boxed{h \approx 0.0241 \text{ m} = 2.41 \text{ cm}}$$

---

### Problem 3 (2019 — Surface Tension)
> Calculate the height to which a liquid will rise in a capillary tube of radius **0.2 mm** when surface tension is **26 × 10⁻³ N/m** and density **800 kg/m³**. Contact angle = **0°**.

**Solution:**

Given:
- $r = 0.2 \times 10^{-3}$ m
- $T = 26 \times 10^{-3}$ N/m
- $\rho = 800$ kg/m³
- $\theta = 0°$, $g = 9.8$ m/s²

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 26 \times 10^{-3} \times 1}{800 \times 9.8 \times 0.2 \times 10^{-3}}$$

$$h = \frac{52 \times 10^{-3}}{800 \times 9.8 \times 2 \times 10^{-4}}$$

$$h = \frac{52 \times 10^{-3}}{1.568}$$

$$\boxed{h \approx 0.0332 \text{ m} = 3.32 \text{ cm}}$$

---

### Problem 4 (2018 — Poiseuille / Viscosity)
> Water flows through a horizontal capillary tube of **1 mm** internal diameter and **70 cm** length under pressure of a column of water **30 cm** in height. Find the rate of flow of water through the capillary tube. Viscosity = **10⁻³ N·s/m²**.

*(This problem also appears in Fluid Mechanics notes — solved there. Refer to Problem 4 in fluid mechanics notes.)*

$$Q \approx 1.03 \times 10^{-7} \text{ m}^3/\text{s}$$

---

### Torricelli Problem (General)
> A tank of water has an orifice at a depth of **1.8 m** below the free surface. Find the velocity of efflux.

**Solution:**

$$v = \sqrt{2gh} = \sqrt{2 \times 9.8 \times 1.8} = \sqrt{35.28} \approx \boxed{5.94 \text{ m/s}}$$

---

## 📝 Quick Revision Summary

| Concept | Key Formula / Fact |
|---|---|
| Viscosity | Internal friction of fluid opposing layer motion |
| Newton's viscous law | $F = \eta A \frac{dv}{dx}$ |
| Coefficient of viscosity | $\eta = \frac{F \cdot dx}{A \cdot dv}$, unit: Pa·s |
| Velocity gradient | $\frac{dv}{dx}$, unit: s⁻¹ |
| Temperature effect | Liquid: $\eta$ ↓ with T ↑; Gas: $\eta$ ↑ with T ↑ |
| Torricelli's theorem | $v = \sqrt{2gh}$ — proved via Bernoulli |
| Capillary flow method | $\eta = \frac{\pi \rho g h r^4}{8Ql}$ |
| Surface tension | Force per unit length: $T = F/l$, unit: N/m |
| Surface energy | $= T$ (surface tension) per unit area |
| Contact angle $< 90°$ | Wetting — liquid rises in capillary |
| Contact angle $> 90°$ | Non-wetting — liquid depresses in capillary |
| Capillary rise | $h = \frac{2T\cos\theta}{\rho g r}$ |
| Poiseuille's law | $Q = \frac{\pi \Delta P r^4}{8\eta l}$ |

---

*Notes compiled from exam questions: 2017–2022 | Physics-I, Viscosity & Surface Tension*
