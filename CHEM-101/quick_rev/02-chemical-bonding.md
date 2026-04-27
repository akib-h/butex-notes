---
title: "Chemical Bonding"
course: CHEM-102
topic: 02
tags: [chemistry, chemical-bonding, MOT, VBT, hybridization, bond-order, butex]
---

# Chapter 2 — Chemical Bonding

> **Syllabus Coverage:** Types of chemical bonds · MOT vs VBT · Bond order · Hybridization · Fajan's rule · PCl₅ vs NCl₅

---

## Table of Contents
1. [What is a Chemical Bond?](#1-what-is-a-chemical-bond)
2. [Types of Chemical Bonds](#2-types-of-chemical-bonds)
3. [Valence Bond Theory (VBT)](#3-valence-bond-theory-vbt)
4. [Molecular Orbital Theory (MOT)](#4-molecular-orbital-theory-mot)
5. [MOT vs VBT — Comparison](#5-mot-vs-vbt--comparison)
6. [Bond Order](#6-bond-order)
7. [Hybridization](#7-hybridization)
8. [Why PCl₅ Exists but NCl₅ Does Not](#8-why-pcl₅-exists-but-ncl₅-does-not)
9. [Fajan's Rule](#9-fajans-rule)
10. [Practice Questions](#practice-questions)
11. [References](#references)

---

## 1. What is a Chemical Bond?

A **chemical bond** is the attractive force that holds atoms together in a molecule or compound. Bonds form because the bonded state has **lower energy** than the separate atoms.

**Driving force:** Atoms bond to achieve a stable noble-gas (octet) configuration or to lower their overall potential energy.

$$\text{Energy of bonded state} < \text{Energy of isolated atoms}$$

---

## 2. Types of Chemical Bonds

```
                      Chemical Bonds
                     /       |        \
               Ionic      Covalent    Metallic
                          /     \
                      Polar   Non-polar
                                  |
                              Coordinate
                              (Dative)
                  
Also: Hydrogen bond, Van der Waals forces (intermolecular)
```

### 2.1 Ionic Bond
- Formed by **complete transfer** of electrons from metal to non-metal
- Results in cation (+) and anion (−) held by electrostatic attraction
- Example: Na⁺Cl⁻ (NaCl)
- High melting/boiling point; conducts electricity in molten/solution state

### 2.2 Covalent Bond
- Formed by **sharing** of electron pairs between atoms
- Between non-metals or metalloids
- Example: H₂, O₂, CH₄, H₂O
- Can be single (σ), double (σ + π), or triple (σ + 2π)

### 2.3 Coordinate (Dative) Bond
- A covalent bond where **both electrons are donated by one atom** (donor)
- Example: NH₄⁺ (N donates lone pair to H⁺)

### 2.4 Metallic Bond
- Sea of delocalized electrons surrounding positively charged metal ions (lattice)
- Accounts for conductivity, malleability, lustre
- Example: Cu, Fe, Al

### 2.5 Comparison Table

| Property | Ionic | Covalent | Metallic |
|----------|-------|---------|---------|
| Formation | Electron transfer | Electron sharing | Electron sea |
| Participants | Metal + non-metal | Non-metals | Metal atoms |
| Bond strength | High | Moderate–High | Moderate–Very High |
| Melting point | High | Low–Moderate | High |
| Conductivity | Molten/dissolved | Poor (usually) | Excellent |
| Solubility | Water-soluble | Organic solvents | Insoluble |
| Example | NaCl, MgO | CO₂, H₂O | Fe, Cu |

---

## 3. Valence Bond Theory (VBT)

**Proposed by:** Heitler, London, Pauling (1927–1931)

**Key postulates:**
1. A covalent bond forms when **half-filled orbitals** of two atoms overlap
2. The greater the overlap → the stronger the bond
3. Bonding electrons are **localized** between the two bonded atoms
4. The overlapping orbitals must have compatible symmetry and similar energy

**Types of overlap:**

| Type | Description | Bond formed |
|------|-------------|------------|
| s-s | Two s orbitals overlap | σ bond (e.g., H-H) |
| s-p | s overlaps with p lobe | σ bond (e.g., H-F) |
| p-p (head-on) | p orbitals along axis | σ bond |
| p-p (sideways) | p orbitals perpendicular | π bond |

```
σ bond (head-on overlap):
    [s] --- [s]    OR    [p]---|---[p]
              ↑ internuclear axis

π bond (sideways overlap):
      [p]
       |   ← bond forms above and below
      [p]
```

**Limitation of VBT:**
- Cannot explain paramagnetism of O₂
- Does not fully explain delocalized bonding (e.g., benzene)

---

## 4. Molecular Orbital Theory (MOT)

**Proposed by:** Mulliken, Hund (1932)

**Basic principles:**
1. Atomic orbitals (AOs) **combine linearly** to form molecular orbitals (MOs)
2. Number of MOs = Number of AOs combined
3. MOs are spread over the **entire molecule** (delocalized)
4. Electrons fill MOs in order of increasing energy (Aufbau principle applies)
5. Each MO can hold **max 2 electrons** with opposite spins

**Types of MOs:**

| MO Type | Formation | Energy vs AOs | Symbol |
|---------|----------|--------------|--------|
| Bonding MO | Constructive interference | Lower (more stable) | σ, π |
| Antibonding MO | Destructive interference | Higher (less stable) | σ*, π* |
| Non-bonding MO | No interaction | Same as AO | n |

### 4.1 MO Energy Diagram for H₂

```
      AO (H)    MO        AO (H)
        ↑      ___         
       1s     σ*1s    ← antibonding (empty)
               
        ↑↓     ___     ↑↓
              σ1s     ← bonding (2 electrons)
              
Energy increases upward ↑
```

### 4.2 MO Diagram for HF (Bonding, Antibonding, Non-bonding)

```
H(1s)                          F(2p)
                                
  ↑     ___                        
 1s     σ*                    ↑   2p (non-bonding, n)
                               
  ↑↓    ___     ↑↓             ↑   2p (non-bonding, n)
        σ
                               ↑↓  2s (non-bonding, n)
```

- σ bonding MO: 2 electrons → bond formed
- 2 × non-bonding MOs: 4 electrons → lone pairs on F
- Net bond order = 1

---

## 5. MOT vs VBT — Comparison

| Feature | VBT | MOT |
|---------|-----|-----|
| Concept | Localized electron pairs | Delocalized molecular orbitals |
| Treatment | Electron stays between 2 atoms | Electrons spread over whole molecule |
| Resonance | Uses resonance structures | Not needed (inherently delocalized) |
| Paramagnetism | Cannot explain O₂ paramagnetism | Correctly predicts O₂ paramagnetism |
| Geometry | Uses hybridization to predict geometry | Geometry from orbital symmetry |
| Ease of use | Simpler, qualitative | More complex, quantitative |
| Strength | Good for simple molecules | Better for complex/delocalized systems |
| Examples predicted | CH₄, H₂O structure | Bond order, magnetic properties |

---

## 6. Bond Order

$$\text{Bond Order (BO)} = \frac{N_b - N_a}{2}$$

Where:
- $N_b$ = number of electrons in **bonding** MOs
- $N_a$ = number of electrons in **antibonding** MOs

**Interpretation:**
- BO = 1 → single bond
- BO = 2 → double bond
- BO = 3 → triple bond
- BO = 0 → molecule does not exist (unstable)

### 6.1 Bond Order of N₂ (Z=7, total 14 electrons)

**MO filling sequence (2nd period homonuclear):**
$$\sigma_{1s}^2\, \sigma_{1s}^{*2}\, \sigma_{2s}^2\, \sigma_{2s}^{*2}\, \pi_{2p}^2\, \pi_{2p}^2\, \sigma_{2p}^2$$

(For N₂, π fills before σ₂p)

```
MO Diagram for N₂:
                        
  ___↑↓  σ*2p          (antibonding)
                        
  ___↑   π*2p    ___↑  (antibonding, degenerate) — EMPTY
                        
  ___↑↓  σ2p           (bonding)
                        
  ___↑↓  π2p    ___↑↓  (bonding, degenerate)
                        
  ___↑↓  σ*2s          (antibonding)
  ___↑↓  σ2s           (bonding)
  ___↑↓  σ*1s          (antibonding)
  ___↑↓  σ1s           (bonding)
```

Nb = 8 (σ1s², σ2s², π2p⁴, σ2p²)  
Na = 4 (σ*1s², σ*2s²)

$$\text{BO}(\text{N}_2) = \frac{8 - 4}{2} = \frac{10 - 4}{2} = 3$$

N₂ has a **triple bond** — very stable (bond energy = 945 kJ/mol)

### 6.2 Bond Order of O₂ (Z=8, total 16 electrons)

**MO filling:**
$$\sigma_{1s}^2\, \sigma_{1s}^{*2}\, \sigma_{2s}^2\, \sigma_{2s}^{*2}\, \sigma_{2p}^2\, \pi_{2p}^4\, \pi_{2p}^{*1}\,\pi_{2p}^{*1}$$

```
MO Diagram for O₂:

  ___↑   π*2p    ___↑   (antibonding, 2 unpaired electrons → PARAMAGNETIC!)
  
  ___↑↓  σ2p            (bonding)
  ___↑↓  π2p    ___↑↓  (bonding)
  ___↑↓  σ*2s          
  ___↑↓  σ2s           
  ___↑↓  σ*1s          
  ___↑↓  σ1s           
```

Nb = 8, Na = 6

$$\text{BO}(\text{O}_2) = \frac{8 - 6}{2} = \frac{16 - 4 - 6}{2} = 2$$

O₂ has a **double bond** and **2 unpaired electrons → paramagnetic** (VBT cannot explain this!)

### 6.3 Summary Table

| Molecule | Total e⁻ | Nb | Na | BO | Magnetic |
|---------|---------|----|----|-------|---------|
| H₂ | 2 | 2 | 0 | 1 | Diamagnetic |
| He₂ | 4 | 2 | 2 | 0 | Does not exist |
| Li₂ | 6 | 4 | 2 | 1 | Diamagnetic |
| N₂ | 14 | 10 | 4 | 3 | Diamagnetic |
| O₂ | 16 | 10 | 6 | 2 | **Paramagnetic** |
| F₂ | 18 | 10 | 8 | 1 | Diamagnetic |
| Ne₂ | 20 | 10 | 10 | 0 | Does not exist |

---

## 7. Hybridization

**Definition:** The mixing of **atomic orbitals of similar energy** in the same atom to form new orbitals (**hybrid orbitals**) of equal energy and shape, directed in space for better bonding.

### 7.1 sp³ Hybridization

- One s + three p orbitals → **4 sp³ hybrid orbitals**
- Geometry: **Tetrahedral** (bond angle 109.5°)
- Example: CH₄, NH₃, H₂O

```
     H
     |
 H - C - H        Bond angle: 109.5°
     |
     H
     
4 sp³ orbitals point toward corners of a tetrahedron
```

**NH₃:** 3 bonding pairs + 1 lone pair → trigonal pyramidal (bond angle 107°)  
**H₂O:** 2 bonding pairs + 2 lone pairs → bent (bond angle 104.5°)

![sp3 hybridization](https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/AX4E0-3D-balls.png/300px-AX4E0-3D-balls.png)
*Figure 2.1: sp³ hybridization in methane (Source: Wikimedia Commons)*

### 7.2 dsp² Hybridization

- One d + one s + two p orbitals → **4 dsp² hybrid orbitals**
- Geometry: **Square planar** (bond angle 90°)
- Involves **d orbital from inner shell**
- Example: [Ni(CN)₄]²⁻, [PtCl₄]²⁻, [Cu(NH₃)₄]²⁺

```
       L
       |
  L -- M -- L      Square planar; all 4 bonds in one plane
       |              bond angle = 90°
       L

(M = metal, L = ligand)
```

**Why dsp² and not sp³ in [Ni(CN)₄]²⁻?**
CN⁻ is a strong field ligand → forces pairing of 3d electrons → one 3d orbital becomes available for dsp² hybridization.

### 7.3 Other Hybridizations

| Hybridization | AOs mixed | Geometry | Bond angle | Example |
|--------------|-----------|---------|-----------|---------|
| sp | s + p | Linear | 180° | BeCl₂, C₂H₂ |
| sp² | s + 2p | Trigonal planar | 120° | BF₃, C₂H₄ |
| sp³ | s + 3p | Tetrahedral | 109.5° | CH₄, CCl₄ |
| sp³d | s + 3p + d | Trigonal bipyramidal | 90°, 120° | PCl₅ |
| sp³d² | s + 3p + 2d | Octahedral | 90° | SF₆ |
| dsp² | d + s + 2p | Square planar | 90° | [PtCl₄]²⁻ |

---

## 8. Why PCl₅ Exists but NCl₅ Does Not

**PCl₅ (Phosphorus pentachloride) — Exists ✓**

- P (Z=15): [Ne] 3s² 3p³ **3d⁰** — has empty **3d orbitals** available
- Hybridization: **sp³d** (uses one 3d orbital)
- In excited state: 3s¹ 3p³ 3d¹ → 5 unpaired electrons available for bonding
- Forms 5 covalent bonds with Cl: trigonal bipyramidal structure

```
P ground state:  [Ne] 3s² 3p³ 3d⁰
                       ↑↓   ↑ ↑ ↑  ( )( )( )( )( )
                       3s   3p       3d (empty)

P excited state: [Ne] 3s¹ 3p³ 3d¹
                       ↑    ↑ ↑ ↑   ↑ ( )( )( )( )
                       3s   3p       3d
                  → 5 unpaired electrons → 5 bonds with Cl ✓
```

**NCl₅ (Nitrogen pentachloride) — Does NOT Exist ✗**

- N (Z=7): [He] 2s² 2p³ — **NO d orbitals** in n=2 shell
- 2nd period elements (n=2) have only s and p subshells (ℓ = 0 and 1 only)
- No available 2d orbitals → cannot expand valence shell beyond 4
- Maximum covalency of N = 4 (as in NH₄⁺)

```
N ground state:  [He] 2s² 2p³
                       ↑↓   ↑ ↑ ↑
                       2s   2p   (NO d orbitals!)

Maximum 4 bonds possible (using sp³ hybridization)
→ Cannot form NCl₅ ✗
```

**Conclusion:** P has accessible 3d orbitals for valence shell expansion; N does not because n=2 has no d subshell.

---

## 9. Fajan's Rule

**Fajan's rules** predict the extent of **covalent character in ionic bonds**.

> An ionic bond becomes more covalent when the cation **polarizes** the electron cloud of the anion (i.e., distorts it toward the cation).

**Polarization** = Distortion of anion's electron cloud by the cation

### 9.1 Factors Increasing Covalent Character (Fajan's Rules)

| Factor | Condition favoring covalency | Reason |
|--------|------------------------------|--------|
| 1. Small cation | Small cation size | High charge density → greater polarizing power |
| 2. High cation charge | High positive charge | Greater attraction on anion's electrons |
| 3. Large anion | Large anion size | Outer electrons loosely held → easily polarized |
| 4. High anion charge | High negative charge | More electron cloud to distort |
| 5. Electronic configuration | Cations with 18e⁻ or (18+2)e⁻ config | Incomplete d-shell → less shielding → more polarizing |

**Polarizing power of cation** ∝ charge/radius ratio (charge density)

### 9.2 Why MgCl₂ is More Covalent than NaCl

| Property | Na⁺ | Mg²⁺ |
|----------|-----|------|
| Charge | +1 | +2 |
| Ionic radius (pm) | 102 | 72 |
| Charge density | Low | **High** |
| Polarizing power | Low | **High** |

- Mg²⁺ has **higher charge** (+2 vs +1) and **smaller radius** (72 vs 102 pm)
- → much higher charge density → greater polarizing power
- → greater distortion of Cl⁻ electron cloud
- → **more covalent character** in MgCl₂

### 9.3 Effect of Anion Size

- Larger anion (e.g., I⁻ > Cl⁻ > F⁻) → more polarizable → more covalent character
- Example: AgI > AgBr > AgCl > AgF in covalent character

---

## Practice Questions

### PQ1. Calculate the bond order of O₂⁻ (superoxide ion) and predict its magnetic character.

<details>
<summary>Solution</summary>

O₂⁻ has 16 + 1 = **17 electrons**

MO filling:
σ1s² σ*1s² σ2s² σ*2s² σ2p² π2p⁴ **π*2p³**

Nb = 10 (counting bonding electrons)
Na = 4 + 3 = 7 (counting antibonding)

$$\text{BO} = \frac{10 - 7}{2} = 1.5$$

Since there is **1 unpaired electron** in π*2p → **paramagnetic**

</details>

---

### PQ2. What type of hybridization does SF₆ have? Draw its geometry.

<details>
<summary>Solution</summary>

S (Z=16): [Ne] 3s² 3p⁴ 3d⁰

In SF₆, S expands its valence shell using 3d orbitals:
Hybridization = **sp³d²** (1s + 3p + 2d → 6 equivalent orbitals)

Geometry = **Octahedral**, bond angle = 90°

```
       F
       |
  F -- S -- F
  |    |    |
  F    F    F
  
6 F atoms, all 90° apart
```

Bond energy of S-F = 327 kJ/mol
SF₆ is extremely inert due to its symmetric structure.

</details>

---

### PQ3. Using Fajan's rules, arrange AlCl₃, NaCl, and MgCl₂ in order of increasing covalent character.

<details>
<summary>Solution</summary>

Compare the cations:

| Cation | Charge | Radius (pm) | Charge density |
|--------|--------|-------------|---------------|
| Na⁺ | +1 | 102 | Low |
| Mg²⁺ | +2 | 72 | Medium |
| Al³⁺ | +3 | 53 | **High** |

Greater charge and smaller size → more polarizing → more covalent

**Order of increasing covalent character:**
$$\text{NaCl} < \text{MgCl}_2 < \text{AlCl}_3$$

</details>

---

### PQ4. Explain why the bond angle in H₂O (104.5°) is less than in NH₃ (107°), which is less than in CH₄ (109.5°).

<details>
<summary>Solution</summary>

All three use **sp³ hybridization**, but lone pairs affect bond angles:

| Molecule | Bonding pairs | Lone pairs | Bond angle |
|---------|--------------|-----------|-----------|
| CH₄ | 4 | 0 | 109.5° |
| NH₃ | 3 | 1 | 107° |
| H₂O | 2 | 2 | 104.5° |

**Lone pair-lone pair repulsion > lone pair-bond pair repulsion > bond pair-bond pair repulsion** (VSEPR rule)

Each lone pair compresses the bond angles. H₂O has 2 lone pairs → most compression → smallest angle.

</details>

---

### PQ5. Using MOT, explain why He₂ does not exist but He₂⁺ does.

<details>
<summary>Solution</summary>

**He₂** (4 electrons): σ1s² σ*1s²  
$$\text{BO} = \frac{2-2}{2} = 0$$ → **does not exist** ✗

**He₂⁺** (3 electrons): σ1s² σ*1s¹  
$$\text{BO} = \frac{2-1}{2} = 0.5$$ → **exists as transient species** ✓

A bond order of 0.5 means a weak but real bond, confirmed experimentally.

</details>

---

## References

1. Atkins, P. & de Paula, J. (2014). *Atkins' Physical Chemistry* (10th ed.). Oxford University Press.
2. Clayden, J., Greeves, N. & Warren, S. (2012). *Organic Chemistry* (2nd ed.). Oxford University Press.
3. Miessler, G.L., Fischer, P.J. & Tarr, D.A. (2014). *Inorganic Chemistry* (5th ed.). Pearson.
4. Cotton, F.A. & Wilkinson, G. (1988). *Advanced Inorganic Chemistry* (5th ed.). Wiley.
5. Pauling, L. (1960). *The Nature of the Chemical Bond* (3rd ed.). Cornell University Press.
6. LibreTexts Chemistry — MOT: https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Chemical_Bonding/Molecular_Orbital_Theory

---

*Last updated: 2025 | BUTEX — CHEM-102 | Level 1, Term 1*
