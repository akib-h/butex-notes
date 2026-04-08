# 01 — Molecular Forces: Cohesion, Adhesion, Molecular Range & Sphere of Influence

> **Course:** Physics II | **Topic:** Surface Tension  
> **Date:** 2026-04-08  
> **Syllabus Reference:** Unit 1 — Molecular Forces

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Cohesive Force](#2-cohesive-force)
3. [Adhesive Force](#3-adhesive-force)
4. [Comparison: Cohesion vs Adhesion](#4-comparison-cohesion-vs-adhesion)
5. [Molecular Range](#5-molecular-range)
6. [Sphere of Influence](#6-sphere-of-influence)
7. [Intermolecular Force vs Distance Graph](#7-intermolecular-force-vs-distance-graph)
8. [Examples and Applications](#8-examples-and-applications)
9. [References](#9-references)

---

## 1. Introduction

All matter is composed of molecules that exert forces on one another. These **intermolecular forces** are responsible for a wide range of macroscopic phenomena — from surface tension and capillarity to viscosity and elasticity.

Understanding these forces at the molecular scale is the foundation for understanding **surface tension** — the tendency of a liquid surface to contract and behave like a stretched elastic membrane.

There are two fundamental types of intermolecular forces relevant to liquids:

- **Cohesive Force** — between molecules of the *same* substance
- **Adhesive Force** — between molecules of *different* substances

---

## 2. Cohesive Force

### Definition

> **Cohesive force** (আংশিক বল) is the **force of attraction between molecules of the same substance**.

It is the force that holds the molecules of a substance together, giving it structural integrity.

### Key Characteristics

| Property | Detail |
|---|---|
| Acts between | Molecules of the **same** substance |
| Nature | Attractive (short-range) |
| Examples | Water–water, mercury–mercury, glass–glass |
| Effect | Keeps the substance together |

### Examples

- **Water molecules** attract each other via hydrogen bonds — a strong form of cohesion.
- **Mercury** has very high cohesion — mercury droplets bead up instead of spreading.
- **Solids** (e.g., steel, glass) maintain their rigid shape due to strong cohesive forces among their atoms/molecules.

### Mathematical Note

The potential energy between two non-polar molecules (Lennard-Jones model) is:

$$U(r) = 4\varepsilon \left[ \left(\frac{\sigma}{r}\right)^{12} - \left(\frac{\sigma}{r}\right)^{6} \right]$$

Where:
- $r$ = separation between molecules
- $\varepsilon$ = depth of the potential well (energy scale)
- $\sigma$ = finite distance at which $U = 0$

The $r^{-12}$ term → repulsion at very close range  
The $r^{-6}$ term → attraction (van der Waals/London dispersion) at moderate range

The **force** derived from this potential:

$$F(r) = -\frac{dU}{dr} = \frac{24\varepsilon}{\sigma} \left[ 2\left(\frac{\sigma}{r}\right)^{13} - \left(\frac{\sigma}{r}\right)^{7} \right]$$

At $r = r_0 = 2^{1/6}\sigma$, the force is zero (equilibrium separation). For $r < r_0$: repulsive. For $r > r_0$: attractive.

---

## 3. Adhesive Force

### Definition

> **Adhesive force** (আসঞ্জন বল) is the **force of attraction between molecules of different substances**.

It acts at the interface between two unlike substances.

### Key Characteristics

| Property | Detail |
|---|---|
| Acts between | Molecules of **different** substances |
| Nature | Attractive (short-range) |
| Examples | Water–glass, ink–paper, glue–wood |
| Effect | Causes wetting, sticking, capillary rise |

### Examples

- **Water on glass**: Water spreads on glass because water–glass adhesion > water–water cohesion.
- **Ink on paper**: Ink adheres to paper fibers due to adhesive forces.
- **Paint on walls**: Paint sticks because adhesive force between paint molecules and wall molecules is dominant.
- **Mercury on glass**: Mercury does NOT wet glass — cohesion between mercury atoms is stronger than adhesion to glass.

---

## 4. Comparison: Cohesion vs Adhesion

| Feature | Cohesion | Adhesion |
|---|---|---|
| Definition | Force between like molecules | Force between unlike molecules |
| Bangla term | আংশিক বল | আসঞ্জন বল |
| Acts between | Same substance | Different substances |
| Common example | Water–water | Water–glass |
| Result if dominant | Liquid beads up (e.g., mercury) | Liquid spreads/wets (e.g., water on glass) |
| Role in capillarity | Determines meniscus curvature | Determines whether liquid rises or falls |

### Practical Consequences

```
Cohesion > Adhesion  →  Convex meniscus, liquid is depressed (e.g., mercury in glass)
Adhesion > Cohesion  →  Concave meniscus, liquid rises (e.g., water in glass)
```

---

## 5. Molecular Range

### Definition

> **Molecular range** (আণবিক পরিসর) is the **maximum distance between two molecules up to which the cohesive force of attraction is appreciably felt**.

Beyond this distance, the intermolecular force becomes negligibly small (effectively zero).

$$\text{Molecular Range} \approx 10^{-9} \text{ m} = 10^{-7} \text{ cm} = 1 \text{ nm}$$

### Key Points

- For most liquids and solids, the molecular range is of the order of **$10^{-9}$ m** or **$10^{-7}$ cm**.
- At distances greater than the molecular range, molecules are effectively **non-interacting**.
- This is why surface tension is a **surface phenomenon** — only the top few molecular layers are affected.

### Why the Range is Finite

The intermolecular attractive force falls off very rapidly with distance (as $\sim r^{-7}$ for induced dipoles). Beyond ~1 nm, thermal energy $kT$ dominates over the potential energy, so molecules are statistically free from each other's influence.

---

## 6. Sphere of Influence

### Definition

> **Sphere of influence** (প্রভাব-গোলক) is an **imaginary sphere drawn around a molecule, with that molecule as the centre and a radius equal to the molecular range**.

Any molecule **inside** this sphere will experience a cohesive force from the central molecule. Any molecule **outside** this sphere will not be significantly attracted.

```
         . . . . .
      .             .
    .    Molecular    .
   .       Range (r)   .
  .    ___________      .
  .   /             \   .
  |  |   MOLECULE   |  |  ← Sphere of Influence
  .   \___________/   .
   .                 .
    .               .
      .           .
         . . . . .

  r ≈ 10⁻⁹ m
```

### Three Positions of a Molecule Relative to the Surface

Consider a liquid with a flat upper surface:

```
                 Vapour / Air
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← Surface
   [A]          [B]       [C]
                              ↕ Molecular Range
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              Liquid bulk
```

**Case A — Molecule deep in the bulk:**
- Surrounded on all sides by other molecules within its sphere of influence.
- Net cohesive force = **zero** (symmetric → all forces cancel).
- This molecule is in a stable, low-energy state.

**Case B — Molecule at/near the surface (within molecular range of surface):**
- The sphere of influence is **partially in vapour** (few molecules above).
- Net cohesive force is directed **downward** (into the liquid).
- This molecule has **higher potential energy** than a bulk molecule.
- This asymmetry is the **origin of surface tension**.

**Case C — Molecule above the surface (in vapour):**
- Sphere of influence may straddle the surface.
- Experiences a net attractive force **downward** into the liquid.
- This is why evaporated molecules can be recaptured (condensation).

### Energy Consequence

Since molecules at the surface have higher potential energy than those in the bulk, **work must be done to bring a molecule from the bulk to the surface**. This is related to the concept of **surface energy** (covered in `03_Surface_Energy.md`).

$$W = E_{\text{surface}} - E_{\text{bulk}} > 0$$

Minimizing this energy means the surface area tends to **minimize** — the liquid surface behaves like a stretched membrane.

---

## 7. Intermolecular Force vs Distance Graph

```
  Force F
  (Attractive +)
  |
  |                    Equilibrium
  |                    separation r₀
  |       ___________/
  |      /           |
  |     /            |
  |____/             |___________  → r (distance)
  |                  |
  | (Repulsive −)    |
  |                  |
  
  F = 0  at  r = r₀ ≈ 2-3 Å
  F > 0  (attractive) for r > r₀  up to molecular range
  F < 0  (repulsive) for r < r₀
  F → 0  for r >> molecular range
```

The **molecular range** is where $F \to 0$ on the attractive side (right side of the curve).

---

## 8. Examples and Applications

### Example 1: Why do water droplets form spherical shapes?

**Answer:** Cohesive forces between water molecules pull all surface molecules inward, creating surface tension. The surface area is minimized when the shape is a **sphere** (minimum surface area for a given volume). This is a direct consequence of cohesion being greater than adhesion with air.

### Example 2: Why does mercury not wet glass?

**Answer:** The cohesive force between mercury atoms (metallic bonds, very strong) > adhesive force between mercury and glass. So mercury molecules prefer to stay together rather than spread on glass. This leads to a **convex meniscus** and mercury is **depressed** in a glass capillary.

### Example 3: Why does water wet glass?

**Answer:** Adhesive force between water and glass (silicon-oxygen bonds interacting with water's hydrogen bonds) > cohesive force between water molecules. Water spreads across glass, forming a **concave meniscus**, and **rises** in a glass capillary.

### Example 4: Estimating the number of molecules in the sphere of influence

Given:
- Molecular range $\approx 10^{-9}$ m
- Volume of water molecule $\approx \frac{4}{3}\pi r_m^3$ where $r_m \approx 1.5 \times 10^{-10}$ m

Volume of sphere of influence:
$$V_{\text{sphere}} = \frac{4}{3}\pi (10^{-9})^3 \approx 4.19 \times 10^{-27} \text{ m}^3$$

Volume of one water molecule:
$$V_m \approx \frac{4}{3}\pi (1.5 \times 10^{-10})^3 \approx 1.41 \times 10^{-29} \text{ m}^3$$

Number of molecules $\approx \dfrac{4.19 \times 10^{-27}}{1.41 \times 10^{-29}} \approx 297$ molecules

So each bulk molecule is influenced by approximately **~300 neighbouring molecules**.

---

## 9. References

| Resource | Link |
|---|---|
| Halliday, Resnick & Krane — *Physics* Vol. 1, Ch. 16 | Standard university textbook |
| Irodov — *Problems in General Physics* | Problems on surface tension |
| HyperPhysics — Surface Tension | http://hyperphysics.phy-astr.gsu.edu/hbase/surten.html |
| Khan Academy — States of Matter | https://www.khanacademy.org/science/ap-chemistry/states-of-matter-ap |
| LibreTexts Physics — Cohesion and Adhesion | https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/Book%3A_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14%3A_Fluid_Mechanics/14.04%3A_Viscosity_and_Turbulence |
| OpenStax University Physics Vol. 1 — Fluid Mechanics | https://openstax.org/books/university-physics-volume-1/pages/14-introduction |
| Britannica — Surface Tension | https://www.britannica.com/science/surface-tension |
| NIST Chemistry WebBook | https://webbook.nist.gov |

---

*Next: [02 — Surface Tension: Definition, Properties & Units](./02_Surface_Tension.md)*
