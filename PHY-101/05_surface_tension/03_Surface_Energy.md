# 03 — Surface Tension & Surface Energy of a Liquid

> **Course:** Physics II | **Topic:** Surface Tension  
> **Date:** 2026-04-08  
> **Syllabus Reference:** Unit 3 — Surface Tension & Free Energy of a Surface

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Surface Energy: Definition](#2-surface-energy-definition)
3. [Relation Between Surface Tension and Surface Energy](#3-relation-between-surface-tension-and-surface-energy)
4. [Thermodynamic Proof (Mechanical Part of Energy)](#4-thermodynamic-proof-mechanical-part-of-energy)
5. [Surface Tension = Mechanical Part of Surface Energy](#5-surface-tension--mechanical-part-of-surface-energy)
6. [Free Energy, Work, and Heat in Surface Formation](#6-free-energy-work-and-heat-in-surface-formation)
7. [Energy Released When Drops Merge](#7-energy-released-when-drops-merge)
8. [Energy Required to Break a Drop into Smaller Drops](#8-energy-required-to-break-a-drop-into-smaller-drops)
9. [Worked Examples](#9-worked-examples)
10. [References](#10-references)

---

## 1. Introduction

When a liquid surface is stretched (i.e., when new surface area is created), work must be done against the **cohesive forces** that pull surface molecules inward. This work is stored in the surface as **potential energy** — called **surface energy**.

The concept of surface energy is central to understanding why:
- Liquid drops form spheres
- Soap bubbles have two surfaces
- Energy is released when small drops merge
- Energy must be supplied to atomise a liquid

---

## 2. Surface Energy: Definition

### Definition

> **Surface energy** (পৃষ্ঠ শক্তি) is the **extra potential energy possessed by the molecules on the free surface of a liquid** as compared to molecules in the bulk interior.

Equivalently:

> **Surface energy** is the **work done per unit area** in creating a new surface (or in increasing the area of a liquid surface by unity), at constant temperature.

$$\boxed{E_s = \frac{W}{\Delta A}} \quad \text{[J/m² or N/m]}$$

### Physical Origin

A molecule at the surface has:
- Fewer neighbours than a bulk molecule (half the sphere of influence is in vapour)
- Higher potential energy (fewer attractive bonds)
- Energy deficit ≈ $\frac{1}{2} \varepsilon_{\text{bulk}}$ per surface molecule

This extra energy per unit area is the surface energy.

---

## 3. Relation Between Surface Tension and Surface Energy

### Experiment: Rectangular Wire Frame

Consider a rectangular wire frame ABCD, with wire CD free to slide (movable), dipped in a soap solution:

```
    A ──────────────────── B
    |                      |
    |   Soap film (area)   |
    |                      |
    D ──────────────────── C
              ↕
         length l of wire CD
         ←────── x ──────→
                  F (applied force)
```

**Setup:**
- Wire CD has length $l$
- Soap film has **two surfaces** (top and bottom) → total active length = $2l$
- Wire CD is pulled outward by small distance $\delta x$

**Force balance:**
Since the film has two surfaces, the total surface tension force opposing the motion:

$$F = T \times 2l$$

**Work done** in displacing wire CD by $\delta x$:

$$W = F \cdot \delta x = 2Tl \cdot \delta x$$

**Increase in surface area:**

$$\delta A = 2l \cdot \delta x \quad \text{(both surfaces increase by } l \cdot \delta x \text{ each)}$$

**Surface energy per unit area:**

$$E_s = \frac{W}{\delta A} = \frac{2Tl \cdot \delta x}{2l \cdot \delta x} = T$$

$$\boxed{E_s = T}$$

### Conclusion

**Surface tension $T$ = Surface energy per unit area $E_s$**

They are numerically equal and have the same units:

$$T \left[\frac{N}{m}\right] = E_s \left[\frac{J}{m^2}\right]$$

---

## 4. Thermodynamic Proof (Mechanical Part of Energy)

### Question: Is surface tension exactly equal to total surface energy, or just a part of it?

From thermodynamics, the **Helmholtz free energy** $F$ of a system at constant temperature is:

$$F = U - TS_{\text{entropy}}$$

For a surface of area $A$:

$$\left(\frac{\partial F}{\partial A}\right)_{T,V} = T_{\text{surface tension}}$$

The **total surface energy** $U_s$ (internal energy per unit area) is:

$$U_s = T_{\text{surface tension}} - \theta \frac{dT_{\text{surface tension}}}{d\theta}$$

Where $\theta$ is the absolute temperature. This can be rewritten:

$$U_s = T_{\text{surface tension}} + T_{\text{entropy part}}$$

So total surface energy = Mechanical (tension) part + Thermal part

Since surface tension decreases with temperature ($dT/d\theta < 0$):

$$T_{\text{entropy part}} = -\theta \frac{dT}{d\theta} > 0$$

Therefore: **Total surface energy > Surface tension**

The **surface tension** is the **mechanical (Helmholtz free energy) part** of the total surface energy.

### Physical Meaning

When you stretch a liquid surface **isothermally** (at constant temperature):
- You do mechanical work $W = T \cdot \Delta A$
- The surface also **absorbs heat** $Q$ from surroundings (to keep temperature constant)
- Total energy stored = $W + Q = E_s \cdot \Delta A$

$$T = E_s - \frac{Q}{\Delta A} \leq E_s$$

The surface tension $T$ is the **mechanical fraction** of the total surface energy.

---

## 5. Surface Tension = Mechanical Part of Surface Energy

### Derivation from the Wire Frame Experiment

From the wire frame experiment (page 2 of your handnotes):

**Mechanical work done:**
$$W_{\text{mech}} = F \cdot x = 2Tl \cdot x$$

**Heat absorbed** (at constant temperature, some thermal energy flows in):
$$Q = \text{heat from surroundings}$$

**Total energy of new surface area** $2lx$:
$$E_{\text{total}} \cdot 2lx = W_{\text{mech}} + Q = 2Tlx + Q$$

**Surface tension as mechanical part:**

From thermodynamics:
$$2Tlx + Q = E \cdot 2lx$$

$$\Rightarrow 2xT + Q = E \quad \text{(per unit area)}$$

$$\Rightarrow \boxed{T = E - Q}$$

Where:
- $E$ = total surface energy per unit area
- $Q$ = heat energy absorbed per unit area
- $T$ = surface tension = **mechanical part of surface energy**

### General Definition

> **Surface tension** may be defined in general as the **mechanical part of the surface energy required to create unit area of the film**.

This is the most physically complete definition of surface tension from a thermodynamic perspective.

---

## 6. Free Energy, Work, and Heat in Surface Formation

| Quantity | Symbol | Physical Meaning |
|---|---|---|
| Surface tension | $T$ | Mechanical work per unit new area |
| Total surface energy | $E_s$ | Total internal energy per unit new area |
| Heat absorbed | $Q/\Delta A$ | Heat from surroundings per unit area |
| Relation | $T = E_s - Q/\Delta A$ | Gibbs–Duhem type relation |

### Note on Sign

- For most liquids, $dT/d\theta < 0$ (surface tension decreases with temperature)
- Therefore $Q > 0$ → liquid **absorbs heat** when surface is created isothermally
- This means $E_s > T$ → total surface energy > surface tension

At **very low temperatures**, $Q \to 0$ and $T \approx E_s$.

---

## 7. Energy Released When Drops Merge

When $N$ small drops of radius $r$ merge into one large drop of radius $R$:

**Volume conservation:**

$$N \cdot \frac{4}{3}\pi r^3 = \frac{4}{3}\pi R^3 \implies R = N^{1/3} r$$

**Surface area before merging:**

$$A_i = N \cdot 4\pi r^2$$

**Surface area after merging:**

$$A_f = 4\pi R^2 = 4\pi N^{2/3} r^2$$

**Decrease in surface area:**

$$\Delta A = A_i - A_f = 4\pi r^2 (N - N^{2/3}) = 4\pi r^2 N^{2/3}(N^{1/3} - 1)$$

**Energy released** (this energy goes into heat — the drop becomes slightly warmer):

$$\boxed{E_{\text{released}} = T \cdot \Delta A = 4\pi T r^2 N^{2/3}(N^{1/3} - 1)}$$

Alternatively, using $R = N^{1/3}r$:

$$E_{\text{released}} = 4\pi T (N r^2 - R^2) = 4\pi T (N r^2 - N^{2/3}r^2)$$

### Temperature Rise of the merged drop

If the liquid has specific heat capacity $c$ and density $\rho$:

Mass of large drop: $m = \frac{4}{3}\pi R^3 \rho$

$$mc \cdot \Delta\theta = E_{\text{released}}$$

$$\Delta\theta = \frac{3T(N^{1/3}-1)r \cdot 4\pi r^2}{c \cdot \frac{4}{3}\pi R^3 \rho} \cdot \frac{N}{N} = \frac{3T}{r\rho c}\left(1 - \frac{1}{N^{1/3}}\right)$$

For large $N$:

$$\boxed{\Delta\theta \approx \frac{3T}{\rho c} \left(\frac{1}{r} - \frac{1}{R}\right)}$$

---

## 8. Energy Required to Break a Drop into Smaller Drops

When one large drop of radius $R$ is broken (atomised) into $N$ small drops of radius $r$:

$$N = \left(\frac{R}{r}\right)^3$$

**Energy required** = increase in surface energy:

$$\boxed{W = T \cdot \Delta A = 4\pi T (N r^2 - R^2)}$$

Substituting $N = (R/r)^3$:

$$W = 4\pi T \left(\frac{R^3}{r^3} \cdot r^2 - R^2\right) = 4\pi T R^2 \left(\frac{R}{r} - 1\right)$$

$$\boxed{W = 4\pi T R^2 \left(\frac{R}{r} - 1\right)}$$

---

## 9. Worked Examples

### Example 1: Surface energy of a soap bubble

Find the surface energy of a soap bubble of radius $r = 3$ cm, surface tension $T = 25 \times 10^{-3}$ N/m.

A soap bubble has **two** surfaces.

$$E_s = T \times 2 \times 4\pi r^2 = 0.025 \times 8\pi \times (0.03)^2$$

$$E_s = 0.025 \times 8 \times 3.14159 \times 9 \times 10^{-4}$$

$$\boxed{E_s = 5.655 \times 10^{-4} \text{ J} \approx 5.66 \times 10^{-4} \text{ J}}$$

---

### Example 2: Work done in blowing a soap bubble (from handnotes)

Work done in blowing a soap bubble from radius 0 to $r_1 = 10$ cm, and additional work to increase to $r_2 = 15$ cm. Given $T = 30$ dyne/cm.

**Work done to create bubble of radius $r_1$:**

$$W_1 = 2 \times 4\pi r_1^2 \times T = 8\pi r_1^2 T$$

$$W_1 = 8\pi \times (10)^2 \times 30 = 8 \times 3.14159 \times 100 \times 30$$

$$W_1 = 75398 \text{ erg} = 75.398 \times 10^3 \text{ erg}$$

**Work done to create bubble of radius $r_2$:**

$$W_2 = 8\pi r_2^2 T = 8\pi \times (15)^2 \times 30 = 169646 \text{ erg} = 169.65 \times 10^3 \text{ erg}$$

**Additional work:**

$$\Delta W = W_2 - W_1 = 169646 - 75398 = 94248 \text{ erg} \approx 94252 \text{ erg}$$

---

### Example 3: Energy released when 1000 drops merge (from handnotes — Problem 12)

1000 drops of water, each of diameter 0.2 mm, combine to form a single drop. Surface tension of water = 72 dyne/cm. Find energy liberated.

**Given:**
- $n = 1000$ small drops, $r_{\text{small}} = 0.1 \text{ mm} = 0.01 \text{ cm}$
- $T = 72$ dyne/cm

**Volume conservation:**

$$N \cdot \frac{4}{3}\pi r^3 = \frac{4}{3}\pi R^3 \implies R = N^{1/3} r = 10 \times 0.01 = 0.1 \text{ cm}$$

**Energy liberated:**

$$E = T \times 4\pi (Nr^2 - R^2) = 4\pi \times 72 \times [1000 \times (0.01)^2 - (0.1)^2]$$

$$= 4\pi \times 72 \times [1000 \times 10^{-4} - 10^{-2}]$$

$$= 4\pi \times 72 \times [0.1 - 0.01] = 4\pi \times 72 \times 0.09$$

$$= 4 \times 3.14159 \times 72 \times 0.09 = \boxed{81.43 \text{ ergs}}$$

---

### Example 4: Energy needed to atomise petrol (from handnotes — Problem 11)

Break a drop of petrol of volume $V = 10^{-6}$ m³ into $10^9$ drops of equal size. Surface tension of petrol = $26 \times 10^{-3}$ N/m.

**Find radius of large drop:**

$$\frac{4}{3}\pi R^3 = 10^{-6} \implies R = \sqrt[3]{\frac{3 \times 10^{-6}}{4\pi}} = 6.2035 \times 10^{-3} \text{ m}$$

**Find radius of small drops:**

$$N \cdot \frac{4}{3}\pi r^3 = 10^{-6} \implies r = \frac{R}{N^{1/3}} = \frac{6.2035 \times 10^{-3}}{10^3} = 6.2035 \times 10^{-6} \text{ m}$$

**Energy needed:**

$$E = 4\pi T (Nr^2 - R^2)$$

$$= 4\pi \times 26\times10^{-3} \times [10^9 \times (6.2035 \times 10^{-6})^2 - (6.2035 \times 10^{-3})^2]$$

$$= 4\pi \times 0.026 \times [10^9 \times 3.848 \times 10^{-11} - 3.848 \times 10^{-5}]$$

$$= 4\pi \times 0.026 \times [38.48 - 3.848] \times 10^{-5} \times 10^3$$

$$\approx \boxed{0.0125 \text{ J}}$$

---

## 10. References

| Resource | Link |
|---|---|
| HyperPhysics — Surface Energy | http://hyperphysics.phy-astr.gsu.edu/hbase/surten2.html |
| Atkins & de Paula — *Physical Chemistry*, 10th Ed., Ch. 16 | Thermodynamics of surfaces |
| OpenStax — Fluid Mechanics | https://openstax.org/books/university-physics-volume-1/pages/14-introduction |
| LibreTexts — Surface Tension and Energy | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/States_of_Matter/Properties_of_Liquids/Surface_Tension |
| Adamson & Gast — *Physical Chemistry of Surfaces*, 6th Ed. | Advanced reference |
| Israelachvili — *Intermolecular and Surface Forces* | Graduate-level reference |

---

*Previous: [02 — Surface Tension](./02_Surface_Tension.md) | Next: [04 — Excess Pressure](./04_Excess_Pressure.md)*
