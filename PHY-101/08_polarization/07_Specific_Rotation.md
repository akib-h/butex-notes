# 07 — Specific Rotation

> **Course:** Physics — Optics Unit
> **Topic:** Specific Rotation and Optical Activity
> **Date:** April 11, 2026
> **Syllabus Reference:** Topic 7 of 8

---

## Table of Contents

1. [Introduction to Optical Activity](#1-introduction-to-optical-activity)
2. [Dextrorotatory and Levorotatory Substances](#2-dextrorotatory-and-levorotatory-substances)
3. [Factors Affecting Optical Rotation](#3-factors-affecting-optical-rotation)
4. [Definition of Specific Rotation](#4-definition-of-specific-rotation)
5. [Biot's Laws of Optical Rotation](#5-biots-laws-of-optical-rotation)
6. [Fresnel's Theory of Optical Activity](#6-fresnels-theory-of-optical-activity)
7. [Specific Rotation Formula and Units](#7-specific-rotation-formula-and-units)
8. [Specific Rotation of Common Substances](#8-specific-rotation-of-common-substances)
9. [Determination of Concentration Using Specific Rotation](#9-determination-of-concentration-using-specific-rotation)
10. [Chirality and Molecular Basis of Optical Activity](#10-chirality-and-molecular-basis-of-optical-activity)
11. [Worked Examples](#11-worked-examples)
12. [Summary](#12-summary)
13. [References & Further Reading](#13-references--further-reading)

---

## 1. Introduction to Optical Activity

**Optical activity** is the property of certain substances to **rotate the plane of polarization** of plane-polarized light when the light passes through them.

This phenomenon was first discovered by **Jean-Baptiste Biot** in 1811 in crystalline solids, and then in liquids and solutions. It arises from the **chirality** (handedness) of molecules — molecules that are non-superimposable on their mirror images.

### What Happens Physically

```
  Polarized light entering optically active substance:

  Input:                   Inside medium:           Output:
  ──────────────→          ─────────────→           ──────────────→
  Plane polarized          Plane rotates             Plane rotated
  (vertical plane)         continuously               by angle θ
  
  ↕ (vertical)             ↗ ↑ ↖ ←                  ↗ (rotated by θ)
```

**Key observation:** The rotation increases with:
- Greater **length** of the substance traversed
- Greater **concentration** of the optically active solute
- The nature of the substance

---

## 2. Dextrorotatory and Levorotatory Substances

| Type | Symbol | Rotation Direction | Example |
|------|--------|-------------------|---------|
| **Dextrorotatory** (right-rotating) | (+) or d- | Clockwise (when viewed by receiver) | Glucose (+112°), Sucrose (+66.5°) |
| **Levorotatory** (left-rotating) | (−) or l- | Counterclockwise (when viewed by receiver) | Fructose (−92°), L-Amino acids |

```
  VIEW FROM THE RECEIVER (looking toward the source):

  Dextrorotatory (+):         Levorotatory (−):
  
         │                           │
         │                           │
        ↗│ (clockwise)         ↖     │ (counterclockwise)
    ─────●─────               ─────●─────
        │                           │↙
  
  Rotation clockwise             Rotation counterclockwise
  when light comes toward you    when light comes toward you
```

### Racemic Mixture

A **racemic mixture** contains equal amounts of d- and l-forms of the same compound. The optical rotations cancel:

$$\theta_{racemic} = \frac{1}{2}(+\theta) + \frac{1}{2}(-\theta) = 0$$

→ No net rotation — optically **inactive**.

---

## 3. Factors Affecting Optical Rotation

The observed angle of rotation $\theta$ depends on:

1. **Nature of the substance** — different substances rotate differently
2. **Length of the light path** ($l$) — $\theta \propto l$
3. **Concentration** ($C$) — $\theta \propto C$ (for solutions)
4. **Temperature** ($T$) — specific rotation varies slightly with T
5. **Wavelength** ($\lambda$) — specific rotation is wavelength-dependent (optical rotatory dispersion, ORD)
6. **Solvent** — the solvent can affect the rotation

**Combined dependence:**

$$\theta = [\alpha]_\lambda^T \times l \times C$$

---

## 4. Definition of Specific Rotation

**Specific rotation** $[\alpha]$ is defined as the angle of rotation of the plane of polarization produced by a solution of **unit concentration** (1 g/mL) and **unit path length** (1 dm = 10 cm), at a specified temperature and wavelength.

$$\boxed{[\alpha]_\lambda^T = \frac{\theta}{l \cdot C}}$$

Where:
- $[\alpha]_\lambda^T$ = specific rotation at temperature $T$ and wavelength $\lambda$
- $\theta$ = observed angle of rotation (in degrees)
- $l$ = path length (in **decimeters**, 1 dm = 10 cm)
- $C$ = concentration of solution (in **g/mL** or **g/cm³**)

**Units:**

$$[\alpha] = \frac{°}{dm \cdot (g/mL)} = °\cdot mL \cdot g^{-1} \cdot dm^{-1}$$

Often written simply as degrees (°) with the understanding of the standard conditions.

**Standard conditions:** 
- Temperature: 20°C (T = 20)
- Wavelength: 589 nm (sodium D line)
- Notation: $[\alpha]_D^{20}$

---

## 5. Biot's Laws of Optical Rotation

**Jean-Baptiste Biot** (1774–1862) formulated the laws of optical rotation based on experiments:

### Law 1 (Path Length)

> The rotation of the plane of polarization is **directly proportional to the length** of the medium traversed.

$$\theta \propto l \Rightarrow \theta = k_1 \cdot l$$

```
  Rotation vs Path Length:

  θ (degrees)
  ↑
  |              /
  |            /
  |           /   Linear relationship
  |          /
  |        /
  |      /
  |    /
  |  /
  |/
  └─────────────────→ l (path length)
```

### Law 2 (Concentration)

> For solutions, the rotation is **directly proportional to the concentration** of the optically active substance.

$$\theta \propto C \Rightarrow \theta = k_2 \cdot C$$

```
  Rotation vs Concentration:

  θ (degrees)
  ↑
  |              /
  |            /
  |           /   Linear relationship
  |          /
  |        /
  |      /
  |    /
  |  /
  |/
  └─────────────────→ C (concentration)
```

### Combined Law

$$\theta = [\alpha] \cdot l \cdot C$$

This combined form gives the **specific rotation** as the proportionality constant.

---

## 6. Fresnel's Theory of Optical Activity

**Augustin-Jean Fresnel** (1788–1827) proposed an elegant theory to explain optical activity.

### Fresnel's Model

Plane-polarized light can be decomposed into **two circularly polarized components**:
- Right-hand circularly polarized (RHCP) with amplitude $E_R$
- Left-hand circularly polarized (LHCP) with amplitude $E_L$

$$\vec{E}_{plane} = \vec{E}_R + \vec{E}_L$$

```
  Decomposition of Plane-Polarized Light:

  Plane-polarized (vertical)  =  RHCP  +  LHCP
  
       ↑                        ↗          ↖
       |                       (clockwise  (counterclockwise
       |                        rotation)   rotation)
  E = E_R + E_L
  
  Both components have equal amplitude and add to give linear polarization.
```

### Propagation in Optically Active Medium

In an optically active medium:
- RHCP travels with velocity $v_R = c/n_R$ (refractive index $n_R$)
- LHCP travels with velocity $v_L = c/n_L$ (refractive index $n_L$)

If $n_R \neq n_L$ (circular birefringence), the two components travel at different speeds.

**Phase difference after traveling distance $l$:**

$$\phi_R = \frac{2\pi}{\lambda} n_R l, \quad \phi_L = \frac{2\pi}{\lambda} n_L l$$

$$\Delta\phi = \phi_R - \phi_L = \frac{2\pi}{\lambda}(n_R - n_L)l$$

**Effect on polarization plane:**

When the two components recombine, the plane of polarization has rotated by:

$$\theta = \frac{\Delta\phi}{2} = \frac{\pi}{\lambda}(n_R - n_L)l$$

$$\boxed{\theta = \frac{\pi l}{\lambda}(n_R - n_L)}$$

### Fresnel's Formula for Specific Rotation

$$[\alpha] = \frac{180°}{\lambda}(n_R - n_L)$$

Where $(n_R - n_L)$ is the **circular birefringence**.

**Physical interpretation:**
- If $n_R > n_L$: RHCP is slower → phase lags → effective clockwise rotation → **dextrorotatory** (+)
- If $n_R < n_L$: LHCP is slower → effective counterclockwise rotation → **levorotatory** (−)

```
  FRESNEL'S THEORY — DIAGRAM

  Entering medium:     In medium:              Exiting medium:
  
  E = E_R + E_L        E_R slowed if n_R>n_L    Resultant E has
  (vertical, linear)   E_L faster               rotated clockwise
  
        ↑                  ↗ (E_R)  (E_L) ↖         ↗ rotated by θ
```

---

## 7. Specific Rotation Formula and Units

### Standard Formula

$$\boxed{[\alpha]_\lambda^T = \frac{\theta}{l \cdot C}}$$

### For Pure Liquids

For pure optically active liquids (no solvent), concentration $C$ is replaced by density $d$:

$$[\alpha]_\lambda^T = \frac{\theta}{l \cdot d}$$

### For Solids

For solid crystalline materials:

$$[\alpha]_\lambda^T = \frac{\theta}{l \cdot \rho}$$

where $\rho$ is the density in g/cm³.

### Unit Analysis

$$[\alpha] = \frac{\theta}{l \cdot C} = \frac{(°)}{(dm)(g/cm^3)} = (°) \cdot cm^3 \cdot g^{-1} \cdot dm^{-1}$$

Since $1 \text{ dm} = 10 \text{ cm}$, sometimes written as:

$$[\alpha] = \frac{\theta \times 100}{l_{cm} \cdot C}$$

where $l_{cm}$ is in centimeters.

---

## 8. Specific Rotation of Common Substances

All values at 20°C, sodium D line (589.3 nm):

| Substance | $[\alpha]_D^{20}$ | Notes |
|-----------|-------------------|-------|
| **Sucrose (cane sugar)** | +66.5° | Dextrorotatory, widely studied |
| **Glucose (d-)** | +52.7° | Changes with time (mutarotation) |
| **Fructose** | −92.4° | Levorotatory, sweeter than glucose |
| **Lactose** | +52.6° | Milk sugar |
| **Lactic acid (L-)** | −3.8° | In sour milk |
| **Tartaric acid (d-)** | +12.7° | In wine making |
| **Camphor** | +41.5° | Solid, in ethanol |
| **Turpentine** | −37° | Pure liquid |
| **Quartz (left)** | −21.7° (per mm) | Crystalline |
| **Quartz (right)** | +21.7° (per mm) | Crystalline |

### Mutarotation of Glucose

Freshly dissolved glucose: $[\alpha] = +112°$

After equilibrium: $[\alpha] = +52.7°$

This change (mutarotation) occurs due to interconversion between α-D-glucose and β-D-glucose anomers.

---

## 9. Determination of Concentration Using Specific Rotation

**Rearranging Biot's law:**

$$C = \frac{\theta}{[\alpha] \cdot l}$$

This allows the **concentration of an unknown solution** to be determined from polarimetry.

### Application in Industry

**Sugar industry (saccharimetry):**
- Measure $\theta$ for unknown sugar solution
- Known: $[\alpha]_{sucrose} = +66.5°$, $l$ (tube length)
- Calculate: $C = \frac{\theta}{66.5 \times l}$

**Pharmaceutical industry:**
- Determine enantiomeric excess (EE) in chiral drugs
- Monitor fermentation processes
- Quality control of optically active APIs

---

## 10. Chirality and Molecular Basis of Optical Activity

### Chirality

A molecule is **chiral** if it cannot be superimposed on its mirror image — like left and right hands.

```
  CHIRAL MOLECULE (asymmetric carbon):

        H                  H
        |                  |
   Cl—C—Br            Br—C—Cl
        |                  |
       CH₃               CH₃
        
   R-enantiomer         S-enantiomer
   (mirror images, non-superimposable)
   
   One rotates plane clockwise, other counterclockwise.
```

### Requirements for Optical Activity

1. Molecule must be **chiral** (no plane of symmetry, no center of inversion)
2. One **enantiomer** in excess (pure compound or non-racemic mixture)

### Molecular Optical Activity

For a molecule with multiple chiral centers, the optical activity is the vector sum of contributions from all asymmetric centers. Complex molecules can have many centers with opposing contributions.

**Enantiomeric Excess (EE):**

$$EE = \frac{[R] - [S]}{[R] + [S]} \times 100\%$$

$$[\alpha]_{observed} = [\alpha]_{pure} \times EE$$

---

## 11. Worked Examples

### Example 1: Basic specific rotation calculation

**Problem:** A sugar solution of concentration 10 g per 100 mL is placed in a 20 cm tube. The observed rotation is 13.3°. Calculate the specific rotation.

**Solution:**

**Given:**
- $C = 10 \text{ g}/100\text{ mL} = 0.10 \text{ g/mL}$
- $l = 20 \text{ cm} = 2 \text{ dm}$
- $\theta = +13.3°$

**Using:**
$$[\alpha] = \frac{\theta}{l \cdot C} = \frac{13.3}{2 \times 0.10} = \frac{13.3}{0.20} = +66.5°$$

> **Answer:** $[\alpha] = +66.5°$ — consistent with the specific rotation of **sucrose**!

---

### Example 2: Finding concentration from polarimeter reading

**Problem:** A glucose solution gives an optical rotation of $+10.54°$ using a 20 cm tube. The specific rotation of glucose is $+52.7°$. Find the concentration.

**Solution:**

$$[\alpha] = \frac{\theta}{l \cdot C} \Rightarrow C = \frac{\theta}{[\alpha] \cdot l}$$

$$C = \frac{10.54}{52.7 \times 2} = \frac{10.54}{105.4} = 0.100 \text{ g/mL}$$

$$= 10.0 \text{ g per 100 mL} = 10\%$$

> **Answer:** Glucose concentration = **10 g/100 mL = 10%**

---

### Example 3: Fresnel's formula for circular birefringence

**Problem:** Sodium D light ($\lambda = 589$ nm) passes through 10 cm of a sugar solution. The plane of polarization is rotated by +6.65°. Find the circular birefringence $(n_R - n_L)$ of the solution.

**Solution:**

Using Fresnel's formula:
$$\theta = \frac{\pi l}{\lambda}(n_R - n_L)$$

Converting $\theta$ to radians: $\theta = 6.65° = 6.65 \times \frac{\pi}{180} = 0.1161 \text{ rad}$

$$n_R - n_L = \frac{\theta \lambda}{\pi l} = \frac{0.1161 \times 589 \times 10^{-9}}{\pi \times 0.10}$$

$$= \frac{6.836 \times 10^{-11}}{0.3142} = 2.176 \times 10^{-10}$$

> **Answer:** Circular birefringence $= 2.18 \times 10^{-10}$ (dimensionless, very small as expected)

---

### Example 4: Enantiomeric excess

**Problem:** A sample of tartaric acid shows $[\alpha]_{observed} = +7.62°$. The pure d-tartaric acid has $[\alpha] = +12.7°$. Find the enantiomeric excess.

**Solution:**

$$EE = \frac{[\alpha]_{observed}}{[\alpha]_{pure}} \times 100\% = \frac{7.62}{12.7} \times 100\% = 60\%$$

> **Answer:** EE = 60%, meaning the sample contains 80% d-form and 20% l-form:
> - $\frac{d-l}{d+l} = 0.60$, so $d - l = 0.60(d+l) \Rightarrow 0.40d = 1.60l \Rightarrow d/l = 4$
> - Fraction d = 80%, fraction l = 20%

---

### Example 5: Temperature effect on specific rotation of sucrose

**Problem:** The specific rotation of sucrose at 20°C is $+66.5°$. At temperature $T$, the rotation changes according to $[\alpha]_D^T = 66.5 - 0.012(T - 20)$. Find the rotation at 35°C.

**Solution:**

$$[\alpha]_D^{35} = 66.5 - 0.012(35 - 20) = 66.5 - 0.012 \times 15 = 66.5 - 0.18 = 66.32°$$

> **Answer:** $[\alpha]_D^{35} \approx +66.3°$ (small but measurable change)

---

## 12. Summary

```
  SPECIFIC ROTATION — SUMMARY

  ┌────────────────────────────────────────────────────────────┐
  │                                                            │
  │  Optical activity: Rotation of plane of polarized light   │
  │  by chiral substances                                      │
  │                                                            │
  │  (+) Dextrorotatory: Clockwise rotation                   │
  │  (−) Levorotatory: Counterclockwise rotation              │
  │                                                            │
  │  Biot's Laws:                                             │
  │    θ ∝ l (path length)                                    │
  │    θ ∝ C (concentration)                                  │
  │    θ = [α] × l × C                                       │
  │                                                            │
  │  Specific rotation: [α] = θ/(l·C)                        │
  │    l in decimeters (dm)                                    │
  │    C in g/mL                                              │
  │                                                            │
  │  Standard: [α]²⁰_D (20°C, sodium D line 589 nm)          │
  │                                                            │
  │  Fresnel theory: θ = (π l/λ)(nR − nL)                   │
  │                                                            │
  │  Applications: Sugar analysis (saccharimetry),            │
  │                pharmaceutical purity, food quality         │
  │                                                            │
  └────────────────────────────────────────────────────────────┘
```

---

## 13. References & Further Reading

| Resource | Link |
|----------|------|
| Wikipedia — Specific Rotation | https://en.wikipedia.org/wiki/Specific_rotation |
| Wikipedia — Optical Activity | https://en.wikipedia.org/wiki/Optical_activity |
| Wikipedia — Polarimeter | https://en.wikipedia.org/wiki/Polarimeter |
| ADB College BSc Notes — Polarization | https://www.adbcollege.org/images/POLARISATION.pdf |
| DNR College Specific Rotation Notes | https://dnrcollege.org/2024/eContent/PHY/5.5P.pdf |
| IAJPS — Specific Rotation Determination | https://www.iajps.com/wp-content/uploads/2024/07/02.IAJPS02072024.pdf |
| Lakhimpur Kheri University — Polarimetry | https://www.lkouniv.ac.in/site/writereaddata/siteContent/202004032250571287punit_phy_Polarimetry.pdf |
| HyperPhysics — Optical Activity | http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/optact.html |

---

*← [06 — Malus's Law](./06_Malus_Law.md) | [08 — Laurent's Half Shade Polarimeter →](./08_Laurents_Half_Shade_Polarimeter.md)*

---
*Notes compiled for university physics coursework — April 11, 2026*
