# 02 — Surface Tension: Definition, Properties & Units

> **Course:** Physics II | **Topic:** Surface Tension  
> **Date:** 2026-04-08  
> **Syllabus Reference:** Unit 2 — Surface Tension

---

## Table of Contents

1. [Definition of Surface Tension](#1-definition-of-surface-tension)
2. [Physical Interpretation](#2-physical-interpretation)
3. [SI Units and Dimensions](#3-si-units-and-dimensions)
4. [Surface Tension as a Tangential Force](#4-surface-tension-as-a-tangential-force)
5. [Properties of Surface Tension](#5-properties-of-surface-tension)
6. [Factors Affecting Surface Tension](#6-factors-affecting-surface-tension)
7. [Surface Tension Values of Common Liquids](#7-surface-tension-values-of-common-liquids)
8. [Phenomena Due to Surface Tension](#8-phenomena-due-to-surface-tension)
9. [Examples](#9-examples)
10. [References](#10-references)

---

## 1. Definition of Surface Tension

### Formal Definition

> **Surface tension** (পৃষ্ঠটান) is defined as the **tangential force per unit length** acting across any imaginary line drawn on the free surface of a liquid, perpendicular to that line and tending to pull the surface apart along the line.

Mathematically:

$$\boxed{T = \frac{F}{l}}$$

Where:
- $T$ = Surface tension
- $F$ = Force acting tangentially along the surface
- $l$ = Length of the line across which the force acts

### Alternative Definition (Energy Perspective)

> Surface tension is also defined as the **work done per unit area** in increasing the surface area of a liquid by a unit amount, under isothermal conditions.

$$T = \frac{W}{\Delta A} \quad \text{(at constant temperature)}$$

Both definitions give identical numerical values and are dimensionally equivalent:

$$\frac{\text{Force}}{\text{Length}} = \frac{N}{m} \equiv \frac{J}{m^2} = \frac{\text{Work}}{\text{Area}}$$

---

## 2. Physical Interpretation

### The Stretched Membrane Analogy

A liquid surface behaves like a **stretched elastic membrane** — it is always in a state of tension. However, unlike a rubber sheet, the tension does **not increase as the surface stretches** (it remains constant for a given liquid at a given temperature). This is because:

- When the surface stretches, new molecules from the bulk migrate up to fill the surface.
- The surface tension is an **intrinsic molecular property** of the liquid, not a mechanical pre-stress.

### Why the Surface is in Tension

As established in `01_Molecular_Forces.md`, molecules at the surface experience a **net inward cohesive force** (since the vapour above has far fewer molecules). This asymmetry means:

- Surface molecules are in a **higher energy state**.
- The system naturally tries to **minimise surface area** to minimise total energy.
- Minimising surface area is equivalent to the surface behaving as if it were **under tension**.

```
     VAPOUR (few molecules above)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
←←←←←←←←←←←←←←←←←←←←←←←←←←←←  ← Tension forces along surface
→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     LIQUID BULK (many molecules)
```

The arrows represent the tangential forces across any imaginary line on the surface.

---

## 3. SI Units and Dimensions

### SI Unit

$$[T] = \frac{[F]}{[l]} = \frac{\text{Newton}}{\text{metre}} = \text{N m}^{-1} = \text{J m}^{-2}$$

### CGS Unit

$$[T]_{\text{CGS}} = \frac{\text{dyne}}{\text{cm}} = \text{erg cm}^{-2}$$

### Conversion

$$1 \text{ N/m} = 1000 \text{ dyne/cm}$$

### Dimensional Formula

$$[T] = [M^1 L^0 T^{-2}]$$

**Derivation:**

$$[T] = \frac{[F]}{[l]} = \frac{MLT^{-2}}{L} = MT^{-2}$$

---

## 4. Surface Tension as a Tangential Force

Consider a rectangular wire frame with one movable side (wire BC of length $l$), dipped in a soap solution:

```
     A ─────────────── D
     |                 |
     |   Soap film     |
     |                 |
     B ─────────────── C
          ↕ l (movable)
           ←── x ──→
               F
```

When wire BC is pulled outward by distance $x$:

- The film has **two surfaces** (front and back).
- The force needed to hold the wire in place:

$$F = T \times 2l \quad \text{(factor 2 for two surfaces)}$$

- Work done in stretching:

$$W = F \cdot x = 2Tl \cdot x$$

- Increase in surface area:

$$\Delta A = 2l \cdot x$$

- Surface energy per unit area:

$$E = \frac{W}{\Delta A} = \frac{2Tlx}{2lx} = T$$

This confirms the equivalence of both definitions.

---

## 5. Properties of Surface Tension

1. **Surface tension is a scalar quantity** — it has no preferred direction along the surface; it acts equally in all directions perpendicular to any imaginary line.

2. **Surface tension acts tangentially** — always along the surface and perpendicular to any line element on the surface.

3. **Surface tension is an intrinsic property of the liquid** — it depends only on the nature of the liquid and its temperature, not on the size or shape of the container.

4. **Surface tension decreases with increasing temperature** — higher temperature → increased molecular thermal energy → weaker cohesive bonds → lower surface tension.

5. **Surface tension is zero at the critical temperature** — at the critical point, the distinction between liquid and vapour disappears.

6. **Surface tension decreases when impurities are added** — surfactants (soap, detergents) dramatically reduce surface tension. This is the working principle of soaps and detergents.

7. **Surface tension is isotropic** (same in all directions along the surface).

8. **Surface tension creates a pressure difference** across a curved surface (excess pressure — see `04_Excess_Pressure.md`).

---

## 6. Factors Affecting Surface Tension

### 6.1 Temperature

The relationship between surface tension and temperature is approximately linear (Eötvös–Ramsay–Shields law):

$$T(t) = T_0 \left(1 - \frac{t}{t_c}\right)^n$$

Where $t_c$ is the critical temperature and $n \approx 1.22$ (empirically).

For a simpler approximation:

$$T = T_0 - \alpha \cdot \theta$$

Where $\alpha$ is a small positive constant and $\theta$ is temperature. As $\theta \uparrow$, $T \downarrow$.

**Effect:** Hot water cleans better partly because reduced surface tension helps it penetrate fabrics.

### 6.2 Impurities / Solutes

- **Inorganic salts** (e.g., NaCl in water): slightly **increase** surface tension.
- **Organic compounds, soaps, detergents (surfactants)**: strongly **decrease** surface tension.
  - Surfactant molecules orient at the surface with hydrophilic heads in water and hydrophobic tails in air — disrupting cohesive forces and lowering $T$.

### 6.3 Presence of Dissolved Gases

Dissolved gases generally **decrease** surface tension slightly.

### 6.4 Electrification / Electric Fields

Strong electric fields can reduce surface tension — relevant in electrospray phenomena.

---

## 7. Surface Tension Values of Common Liquids

| Liquid | Temperature (°C) | Surface Tension (N/m) | Surface Tension (dyne/cm) |
|---|---|---|---|
| Water | 20 | 0.0728 | 72.8 |
| Water | 100 | 0.0589 | 58.9 |
| Mercury | 20 | 0.4866 | 486.6 |
| Ethanol | 20 | 0.0223 | 22.3 |
| Glycerol | 20 | 0.0634 | 63.4 |
| Soap solution | 20 | ~0.025 | ~25 |
| Blood | 37 | 0.058 | 58.0 |
| Olive oil | 20 | 0.032 | 32.0 |

---

## 8. Phenomena Due to Surface Tension

| Phenomenon | Explanation |
|---|---|
| Spherical water droplets | Minimum surface area for given volume → sphere |
| Soap bubbles | Thin liquid film with two surfaces, maintained by surface tension |
| Walking on water (water strider insects) | Insect weight < restoring force from surface tension |
| Capillary rise/fall | Interplay of surface tension, adhesion, cohesion |
| Needle floating on water | Needle deforms surface; upward component of $T$ balances weight |
| Camphor moving on water | Camphor lowers local surface tension → net force toward higher $T$ regions |
| Tear of wine | Surface tension + evaporation of alcohol creates wine drops on glass |
| Lung alveoli | Surfactant (dipalmitoyl phosphatidylcholine) reduces $T$ → prevents collapse |

### The Floating Needle Experiment

A steel needle (density $\sim 7800$ kg/m³, much denser than water) floats if placed carefully:

If needle length = $l$, radius = $r$:
- Weight: $W = \rho_{\text{needle}} \cdot \pi r^2 l \cdot g$
- Surface tension force (two sides, contact angle $\theta$): $F_T = 2lT\cos\theta$

For floating: $F_T \geq W$

$$2lT \geq \rho \pi r^2 l g \implies T \geq \frac{\rho \pi r^2 g}{2}$$

For a needle with $r = 0.5$ mm:
$$T_{\min} = \frac{7800 \times \pi \times (5\times10^{-4})^2 \times 9.8}{2} \approx 0.030 \text{ N/m}$$

Water's surface tension (0.073 N/m) > 0.030 N/m → **needle floats**.

---

## 9. Examples

### Example 1: Force on a wire in a soap film

A wire of length 10 cm is pulled across a soap film. If $T = 25 \times 10^{-3}$ N/m, find the force required.

$$F = T \times 2l = 25 \times 10^{-3} \times 2 \times 0.10 = 5 \times 10^{-3} \text{ N} = 5 \text{ mN}$$

### Example 2: Work done to blow a soap bubble

Work done in creating a soap bubble of radius $r$:

$$W = T \times \Delta A = T \times 2 \times 4\pi r^2 = 8\pi r^2 T$$

(Factor 2 because bubble has inner + outer surface)

For $r = 2$ cm, $T = 25 \times 10^{-3}$ N/m:

$$W = 8\pi \times (0.02)^2 \times 0.025 = 8\pi \times 4 \times 10^{-4} \times 0.025$$
$$W = 8\pi \times 10^{-5} \approx 2.51 \times 10^{-4} \text{ J}$$

### Example 3: Energy of a water drop

Energy stored in the surface of a water drop of radius $R = 1$ mm, $T = 72.8 \times 10^{-3}$ N/m:

$$E = T \times 4\pi R^2 = 72.8 \times 10^{-3} \times 4\pi \times (10^{-3})^2$$
$$E = 72.8 \times 10^{-3} \times 1.257 \times 10^{-5} \approx 9.15 \times 10^{-7} \text{ J}$$

---

## 10. References

| Resource | Link |
|---|---|
| HyperPhysics — Surface Tension | http://hyperphysics.phy-astr.gsu.edu/hbase/surten.html |
| OpenStax University Physics — Surface Tension | https://openstax.org/books/university-physics-volume-1/pages/14-4-viscosity-and-turbulence |
| LibreTexts — Surface Tension | https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book%3A_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14%3A_Fluid_Mechanics |
| Britannica — Surface Tension | https://www.britannica.com/science/surface-tension |
| The Physics Classroom — Surface Tension | https://www.physicsclassroom.com |
| Young & Freedman — *University Physics*, 14th Ed., Ch. 14 | Standard university textbook |
| Irodov — *Problems in General Physics*, Section 2.2 | Advanced problems |

---

*Previous: [01 — Molecular Forces](./01_Molecular_Forces.md) | Next: [03 — Surface Energy](./03_Surface_Energy.md)*
