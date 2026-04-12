# 03 — Coordination Compounds & Complex Chemistry
### Chemistry-I (CHEM 101 / AS 109) | Bangladesh University of Textiles
> **Syllabus coverage:** Werner's theory · EAN rule · Sidgwick's theory · CFT & CFSE · Crystal field splitting · Spectrochemical series · Ligands · Isomerism · Stability

---

## Table of Contents
1. [Werner's Theory of Coordination](#1-werners-theory-of-coordination)
2. [Sidgwick's EAN Rule](#2-sidgwicks-ean-rule)
3. [Ligands & Classification](#3-ligands--classification)
4. [Crystal Field Theory (CFT)](#4-crystal-field-theory-cft)
5. [Crystal Field Stabilization Energy (CFSE)](#5-crystal-field-stabilization-energy-cfse)
6. [Spectrochemical Series](#6-spectrochemical-series)
7. [Isomerism in Complex Compounds](#7-isomerism-in-complex-compounds)
8. [Exam Questions & Model Answers](#8-exam-questions--model-answers)
9. [Visual Aids](#9-visual-aids)
10. [Practice Questions](#10-practice-questions)
11. [References](#11-references)

---

## 1. Werner's Theory of Coordination

**Alfred Werner (1893)** proposed the first satisfactory theory of coordination compounds, earning him the Nobel Prize in Chemistry (1913).

### Postulates of Werner's Theory

1. **Primary valence (ionizable valence):** The oxidation state of the metal — satisfied by anions that ionize in solution. Written outside the coordination sphere.

2. **Secondary valence (coordination valence):** The coordination number (CN) of the metal — satisfied by neutral molecules or anions that do NOT ionize. These occupy fixed positions around the metal (directional). Written inside the coordination sphere **[ ]**.

3. Secondary valence is **directional** → determines geometry:
   - CN = 2 → Linear
   - CN = 4 → Tetrahedral or Square planar
   - CN = 6 → Octahedral

4. Primary and secondary valences are always satisfied simultaneously.

### Application: CoCl₃·4NH₃

Formula: CoCl₃·4NH₃ → **[Co(NH₃)₄Cl₂]Cl** (after Werner's analysis)

- **Primary valence** (ionizable): 1 Cl⁻ ion (gives 1 Ag⁺ precipitate with AgNO₃)
- **Secondary valence** (coordination): 4 NH₃ + 2 Cl⁻ inside brackets → **CN = 6** (octahedral)
- **Geometry:** Octahedral
- **Primary valence of Co:** 3+ (Co³⁺)

> **Test:** CoCl₃·4NH₃ reacts with 1 mole AgNO₃ → 1 mole AgCl precipitate → 1 Cl⁻ is free (primary valence); other 2 Cl⁻ are inside complex (satisfy secondary valence).

### General Formula Interpretation

```
[Co(NH₃)₆]Cl₃
 ↓    ↓         ↓
Metal Ligands   Counter ions (primary valence = 3)

Secondary valence (CN) = 6 (6 NH₃ inside brackets)
Geometry: Octahedral
```

---

## 2. Sidgwick's EAN Rule

### Effective Atomic Number (EAN)

**N.V. Sidgwick** proposed that in stable complexes, the metal atom tends to accumulate electrons until its EAN equals that of the nearest noble gas.

$$EAN = Z - z + 2L$$

Where:
- **Z** = atomic number of metal
- **z** = oxidation state (electrons lost by metal)
- **L** = number of ligands × electrons donated per ligand (for monodentate = number of ligands since each donates 2e⁻, so **2L** = total donated electrons)

More precisely:
$$EAN = \text{electrons on metal ion} + \text{electrons donated by all ligands}$$

### Calculation & Stability Comparison

#### (i) [Fe(CN)₆]³⁻

- Fe³⁺: Z(Fe) = 26, oxidation = 3+ → electrons on Fe³⁺ = 26 − 3 = **23**
- Ligands: 6 CN⁻, each donates **2 electrons** → 6 × 2 = 12
- **EAN = 23 + 12 = 35** (Kr = 36) → not exact noble gas → **less stable**

#### (ii) [Co(NH₃)₆]³⁺

- Co³⁺: Z(Co) = 27, oxidation = 3+ → electrons on Co³⁺ = 27 − 3 = **24**
- Ligands: 6 NH₃, each donates 2 electrons → 6 × 2 = 12
- **EAN = 24 + 12 = 36** (= Kr, noble gas) → **more stable** ✓

#### [Co(NH₃)₆]Cl₃

EAN(Co) = (27 − 3) + (6 × 2) = 24 + 12 = **36** = Kr ✓ Very stable complex.

#### Stability Comparison
EAN matching noble gas = higher stability.
[Co(NH₃)₆]³⁺ (EAN=36) is **more stable** than [Fe(CN)₆]³⁻ (EAN=35).

### Limitations of Sidgwick's Theory
1. Does not explain geometry of complexes.
2. Many stable complexes don't satisfy EAN rule.
3. Cannot explain optical/color properties.
4. Fails for higher oxidation state complexes.

---

## 3. Ligands & Classification

### Definition
**Ligands** are Lewis bases (electron-pair donors) that coordinate to a central metal ion (Lewis acid) in a complex compound.

### Classification by Number of Donor Atoms (Denticity)

| Denticity | Name | Example Ligands |
|-----------|------|-----------------|
| 1 | Monodentate | Cl⁻, NH₃, H₂O, CN⁻, CO, F⁻, OH⁻ |
| 2 | Bidentate | en (ethylenediamine), ox²⁻ (oxalate), acac⁻ |
| 3 | Tridentate | dien, terpyridine |
| 4 | Tetradentate | trien, NTA³⁻ |
| 5 | Pentadentate | EDTA⁴⁻ (one arm free) |
| 6 | Hexadentate | EDTA⁴⁻ (fully coordinated) |

### Ambidentate Ligands

**Ambidentate ligands** have two or more **different** donor atoms, either of which can bond to the metal:

| Ligand | Donor via S | Donor via N |
|--------|-------------|-------------|
| SCN⁻ (thiocyanate) | –SCN (thiocyanato-S) | –NCS (thiocyanato-N) |
| NO₂⁻ (nitrite) | –ONO (nitrito-O) | –NO₂ (nitro-N) |
| CN⁻ (cyanide) | –NC (isocyanide) | –CN (cyanide) |

### Ambidentate Ligands — Pearson's HSAB Concept

**SCN⁻ with Pt⁴⁺:**
- Pt⁴⁺ is a **hard acid** (high charge, small size, not very polarizable).
  
  Wait — actually Pt⁴⁺ has high charge (+4), small size → **hard acid** features, BUT Pt is a 5d metal with large, polarizable d-orbitals → considered a **soft acid** in many contexts. Pt²⁺/Pt⁴⁺ are typically **soft acids**.
  
- SCN⁻: S is a **soft base** (large, polarizable); N is a **hard base** (small, less polarizable).
- **Pearson's rule:** Soft acid prefers soft base; hard acid prefers hard base.
- Pt⁴⁺ is a **soft acid** → prefers **S** (soft base end) → forms **S-bonded** complex: [Pt(NCS)₄]⁴⁻ → actually written as [Pt(SCN)₄]⁴⁻.

> **Note:** For hard acids (e.g., Cr³⁺, Co³⁺), N-bonded thiocyanate (–NCS) is preferred.

---

## 4. Crystal Field Theory (CFT)

### Assumptions
1. The central metal ion and ligands are treated as **point charges**.
2. Ligands are **negative point charges** (even if neutral, they have a negative end facing the metal).
3. Interaction is purely **electrostatic** (no orbital overlap).
4. The d-orbitals are split in energy by the ligand field.

### d-Orbital Types
The 5 d-orbitals:

| Orbital | Axes | Symbol |
|---------|------|--------|
| dz² | Along z-axis | Part of eg |
| dx²-y² | Along x and y axes | Part of eg |
| dxy | Between x and y axes | Part of t₂g |
| dxz | Between x and z axes | Part of t₂g |
| dyz | Between y and z axes | Part of t₂g |

### Why d-Orbitals Split in Octahedral Field?

In a **free metal ion**, all five d-orbitals are **degenerate** (equal energy).

In an **octahedral complex**, 6 ligands approach along **±x, ±y, ±z** axes:

```
         Ligand (−)
              |  z-axis
              |
Ligand (−) ── M ── Ligand (−)  x-axis
              |
              |
         Ligand (−)
```

- **eg orbitals (dz², dx²-y²):** Lobes point **directly toward** the approaching ligands → maximum repulsion → **higher energy**.
- **t₂g orbitals (dxy, dxz, dyz):** Lobes point **between** the ligand axes → less repulsion → **lower energy**.

### Octahedral Splitting Diagram

```
Energy
  ↑
  |          ___  ___     eg  (+0.6 Δo above barycenter)
  |         dz²  dx²-y²
  |
  |  ─ ─ ─ ─ ─ ─ ─ ─ ─  barycenter (energy before splitting)
  |
  |    ___  ___  ___      t₂g  (−0.4 Δo below barycenter)
  |   dxy  dxz  dyz
```

- **Δo (10Dq)** = crystal field splitting energy (octahedral)
- t₂g is stabilized by **0.4 Δo** (×3 orbitals)
- eg is destabilized by **0.6 Δo** (×2 orbitals)
- Net energy: 3(−0.4) + 2(+0.6) = 0 ✓ (barycenter maintained)

### d-Orbital Diagrams (Axial vs. Non-Axial)

**Axial d-orbitals (eg):** dz² and dx²-y²
- Point directly along Cartesian axes
- Stronger repulsion from axial ligands

**Non-Axial d-orbitals (t₂g):** dxy, dxz, dyz
- Point between Cartesian axes
- Weaker repulsion from axial ligands

```
dz² orbital:           dx²-y² orbital:
    |                     |   |
    |                  —  |  —
═══ M ═══              —  M  —
    |                     |
    |                     |
(dumbbell along z)    (4 lobes in xy plane)

dxy orbital:
  /   \
 /     \
M       (lobes between x and y axes at 45°)
 \     /
  \   /
```

---

## 5. Crystal Field Stabilization Energy (CFSE)

### Definition
**CFSE** = total energy gained by placing d-electrons in the lower-energy t₂g orbitals instead of the hypothetical barycenter.

$$\text{CFSE} = n_{t_{2g}} \times (-0.4\Delta_o) + n_{e_g} \times (+0.6\Delta_o)$$

### Filling Rules for d-electrons

| d-electrons | Low spin | High spin (weak field) |
|-------------|----------|----------------------|
| d¹ | t₂g¹ | t₂g¹ |
| d² | t₂g² | t₂g² |
| d³ | t₂g³ | t₂g³ |
| d⁴ | t₂g⁴ | t₂g³ eg¹ |
| d⁵ | t₂g⁵ | t₂g³ eg² |
| d⁶ | t₂g⁶ | t₂g⁴ eg² |
| d⁷ | t₂g⁶ eg¹ | t₂g⁵ eg² |
| d⁸ | t₂g⁶ eg² | t₂g⁶ eg² |
| d⁹ | t₂g⁶ eg³ | t₂g⁶ eg³ |
| d¹⁰ | t₂g⁶ eg⁴ | t₂g⁶ eg⁴ |

### CFSE Calculation: [FeCl₆]³⁻

- **Fe³⁺** → d⁵ configuration
- **Cl⁻** is a **weak field** ligand → **high spin**
- High spin d⁵: t₂g³ eg² (one electron in each orbital — half-filled)

$$\text{CFSE} = 3(-0.4\Delta_o) + 2(+0.6\Delta_o) = -1.2\Delta_o + 1.2\Delta_o = \boxed{0}$$

> CFSE = 0 for high-spin d⁵ — no net stabilization from crystal field! This is why high-spin Fe³⁺ complexes are often labile.

### CFSE for CFSE = 0 Cases
d⁰, d⁵ (high spin), d¹⁰ → CFSE = 0

---

## 6. Spectrochemical Series

The spectrochemical series ranks ligands by their ability to split the d-orbitals (by increasing Δo):

```
I⁻ < Br⁻ < S²⁻ < SCN⁻ < Cl⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < NH₃ 
< en < bipy < phen < NO₂⁻ < CN⁻ < CO
     ↑                                                              ↑
  Weak field                                                   Strong field
  (high spin)                                                  (low spin)
```

**Spectrochemical series for Cr³⁺ complexes:**

| Complex | Ligand field strength | Color |
|---------|----------------------|-------|
| [CrCl₆]³⁻ | Weakest (weak field) | Green |
| [Cr(H₂O)₆]³⁺ | Intermediate | Violet |
| [Cr(NH₃)₆]³⁺ | Stronger | Yellow |

Increasing Δo → shorter wavelength absorbed → different color observed.

---

## 7. Isomerism in Complex Compounds

### Types of Isomerism

#### A. Structural Isomers

**1. Ionization Isomers**
Same molecular formula, but different ions inside and outside coordination sphere.

Example:
- [Co(NH₃)₅Br]SO₄ → gives SO₄²⁻ in solution
- [Co(NH₃)₅SO₄]Br → gives Br⁻ in solution

**2. Hydration (Solvate) Isomers**
Different numbers of water molecules inside vs. outside coordination sphere.

Example (CrCl₃·6H₂O):
- [Cr(H₂O)₆]Cl₃ — violet (3 free Cl⁻)
- [Cr(H₂O)₅Cl]Cl₂·H₂O — blue-green (2 free Cl⁻)
- [Cr(H₂O)₄Cl₂]Cl·2H₂O — dark green (1 free Cl⁻)

**3. Linkage Isomers** (from ambidentate ligands)
Same formula, different donor atom of ambidentate ligand.

Example:
- [Co(NH₃)₅NO₂]Cl₂ — nitro (N-bonded NO₂)
- [Co(NH₃)₅ONO]Cl₂ — nitrito (O-bonded NO₂)

**4. Polymerization Isomers**
Compounds with the same empirical formula but different molecular formulas (multiples).

Example: [Co(NH₃)₃Cl₃] and [Co(NH₃)₆][CoCl₆] (both have empirical formula CoCl₃·3NH₃)

**5. Coordination Isomers**
Distribution of ligands between two different metal centers changes.

Example: [Co(NH₃)₆][Cr(CN)₆] vs. [Cr(NH₃)₆][Co(CN)₆]

#### B. Stereoisomers

**6. Geometric (cis-trans) Isomers**
Differ in the spatial arrangement of ligands relative to each other.

For square planar [MA₂B₂]:
```
cis form:               trans form:
    B                       A
    |                       |
A ─ M ─ A               B ─ M ─ B
    |                       |
    B                       A
(B's adjacent)          (B's opposite)
```

For octahedral [MA₄B₂]:
```
cis form: B's adjacent    trans form: B's on opposite sides
```

**7. Optical Isomers (Enantiomers)**
Non-superimposable mirror images. Rotate plane-polarized light in opposite directions.

Tris(bidentate) complexes: [Co(en)₃]³⁺ → Λ and Δ forms

### Isomerism in CrCl₃·6H₂O

Three hydration isomers:
1. **[Cr(H₂O)₆]Cl₃** — Violet; 3 free Cl⁻ precipitated by AgNO₃
2. **[Cr(H₂O)₅Cl]Cl₂·H₂O** — Blue-green; 2 free Cl⁻ precipitated
3. **[Cr(H₂O)₄Cl₂]Cl·2H₂O** — Dark green; 1 free Cl⁻ precipitated

### Isomerism in [Co(NH₃)₅Br]SO₄

This compound can exhibit **ionization isomerism** with [Co(NH₃)₅SO₄]Br.

---

## 8. Exam Questions & Model Answers

### Q1. What is ambidentate ligand? Would Pt⁴⁺ form S- or N-bonded complex with SCN⁻? *(2019 Q3a)*

**Ambidentate ligands** possess two or more different atoms capable of donating electrons to a metal center. SCN⁻ (thiocyanate) is the classic example — it can coordinate through S or N.

**Pt⁴⁺ with SCN⁻:**
- Pt⁴⁺ is a **soft acid** (large, polarizable 5d metal with high charge density at metal center, electron-rich d-orbitals → high polarizability).
- S in SCN⁻ is a **soft base** (large, polarizable sulfur).
- By **Pearson's HSAB principle:** Soft acid prefers soft base.
- **Pt⁴⁺ will form an S-bonded complex:** [Pt(SCN)n]

---

### Q2. Why do d-orbitals split into t₂g and eg in an octahedral ligand field? Sketch the splitting diagram. *(2019 Q3b)*

*(See Section 4 — complete explanation with diagram)*

The 6 ligands in an octahedral complex approach along the ±x, ±y, ±z axes. The **eg orbitals** (dz², dx²-y²) point directly at the incoming ligands → experience maximum repulsion → destabilized (higher energy). The **t₂g orbitals** (dxy, dxz, dyz) point between the ligand axes → less repulsion → stabilized (lower energy).

**Crystal Field Splitting Diagram — Octahedral:**

```
         Energy
           ↑
           |
    +0.6Δo |    ___  ___   ← eg (dz², dx²-y²)
           |   
  ─ ─ ─ ─ |─ ─ ─ ─ ─ ─   ← barycenter (Δo = 0)
           |
    −0.4Δo |  ___  ___  ___  ← t₂g (dxy, dxz, dyz)
           |
```

---

### Q3. Calculate CFSE for [FeCl₆]³⁻. *(2019 Q3c(ii) — 3 marks)*

*(See Section 5 — full calculation: CFSE = 0)*

---

### Q4. Difference between polymerization isomerism and ionization isomerism. *(2019 Q3c(i))*

| | Polymerization Isomers | Ionization Isomers |
|--|------------------------|-------------------|
| Formula | Same empirical, different molecular | Same molecular formula |
| Difference | Molecular weight multiples | Different free ions in solution |
| Example | [Co(NH₃)₃Cl₃] vs [Co(NH₃)₆][CoCl₆] | [Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br |
| Test | Mass spectrometry | Precipitation with AgNO₃ or BaSO₄ |

---

### Q5. Calculate EAN for [Fe(CN)₆]³⁻ and [Co(NH₃)₆]³⁺. Compare their stability. *(2018 Q3a)*

*(See Section 2 — full EAN calculations)*

[Co(NH₃)₆]³⁺ (EAN = 36 = Kr) is **more stable** than [Fe(CN)₆]³⁻ (EAN = 35).

---

### Q6. Sketch the spectrochemical series diagram for [Cr(NH₃)₆]³⁺, [Cr(H₂O)₆]³⁺, and [CrCl₆]³⁻. *(2018 Q3b)*

*(See Section 6)*

```
Increasing Δo (crystal field splitting):
[CrCl₆]³⁻ < [Cr(H₂O)₆]³⁺ < [Cr(NH₃)₆]³⁺

    Cl⁻ (weak)     H₂O (intermediate)     NH₃ (strong)
    Small Δo            Medium Δo             Large Δo
```

Stronger field ligand → larger Δo → absorbs shorter λ → different color.

---

### Q7. Complex compound CoCl₃·4NH₃ reacts with 1 mole AgNO₃. Predict geometry and determine primary and secondary valency. *(2018 Q3d)*

**Given:** CoCl₃·4NH₃ + 1 AgNO₃ → 1 AgCl↓

- 1 AgCl precipitate → **1 free Cl⁻** (ionizable = primary valency satisfier)
- Remaining: 2 Cl⁻ and 4 NH₃ → inside coordination sphere (secondary valency)

**Primary valency of Co:** 3 (oxidation state Co³⁺, balanced by 3 Cl⁻ total)

**Secondary valency (CN):** 4 NH₃ + 2 Cl⁻ = **6** → **Octahedral** geometry

**Formula:** [Co(NH₃)₄Cl₂]Cl

**Geometry:** Octahedral; exists as cis and trans isomers.

---

### Q8. CFSE is zero for Fe³⁺ in [FeCl₆]³⁺ — justify. *(2017 Q1b)*

Fe³⁺ is a d⁵ system. Cl⁻ is a weak-field ligand → **high-spin** configuration:

$$t_{2g}^3 \, e_g^2 \quad \text{(one electron in each of the five d-orbitals)}$$

$$\text{CFSE} = 3(-0.4\Delta_o) + 2(+0.6\Delta_o) = -1.2\Delta_o + 1.2\Delta_o = \boxed{0}$$

The half-filled d⁵ configuration distributes electrons symmetrically across all 5 d-orbitals, resulting in **no net crystal field stabilization**.

---

### Q9. Stability of [Co(NH₃)₆]Cl₃ in terms of Sidgwick theory. *(2013 Q1a)*

EAN = (27 − 3) + (6 × 2) = 24 + 12 = **36 = Kr (noble gas)**

Since EAN equals the atomic number of the nearest noble gas (krypton), this complex achieves noble-gas configuration → maximum stability according to Sidgwick's EAN rule. ✓

---

### Q10. Write some importance of complex compounds. *(2019 Q3c(iii); 2014 Q1c)*

1. **Medicine:** Cisplatin [Pt(NH₃)₂Cl₂] — anticancer drug; EDTA chelation therapy for heavy metal poisoning.
2. **Biology:** Haemoglobin [Fe-porphyrin] carries O₂; Chlorophyll [Mg-porphyrin] for photosynthesis; Vitamin B₁₂ [Co-corrin].
3. **Catalysis:** Wilkinson's catalyst [RhCl(PPh₃)₃] for hydrogenation; Ziegler–Natta catalysts for polymer synthesis.
4. **Analytical chemistry:** EDTA complexometry for water hardness; colorimetric analysis.
5. **Electroplating:** Cu, Ni, Ag, Au plating from complex solutions for uniform deposits.
6. **Extraction of metals:** Cyanide leaching of gold [Au(CN)₂]⁻; nickel extraction via [Ni(CO)₄].
7. **Photography:** Na₂S₂O₃ (hypo) dissolves unexposed AgBr by forming [Ag(S₂O₃)₂]³⁻.
8. **Dyes:** Metal complex dyes (azo-metal dyes) for textiles — high lightfastness.

---

## 9. Visual Aids

### Octahedral d-Orbital Splitting
![Octahedral crystal field splitting](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Crystal_field_splitting.svg/400px-Crystal_field_splitting.svg.png)
*Source: Wikimedia Commons — Energy diagram showing t₂g and eg orbital splitting in octahedral field*

### d-Orbital Shapes
![d-orbital shapes](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/D_orbitals.svg/400px-D_orbitals.svg.png)
*Source: Wikimedia Commons — Shapes of the five d-orbitals (dxy, dxz, dyz, dz², dx²-y²)*

### Spectrochemical Series
```
Weak field ←─────────────────────────────────────────────→ Strong field
I⁻  Br⁻  Cl⁻  F⁻  OH⁻  H₂O  NH₃   en  NO₂⁻  CN⁻   CO
 ←─────── High spin ───────────┼──────── Low spin ────────→
                               │
                          Crossover point
                          (depends on metal)
```

### Werner's Theory — Primary vs Secondary Valency
```
[Co(NH₃)₆]³⁺ Cl₃⁻   ← 3 Cl⁻: PRIMARY valence (ionic, ionizable)
 ────────────
 Coordination        
 sphere (secondary   
 valence = 6, CN=6)  
    Co³⁺ in center
    6 NH₃ ligands
    OCTAHEDRAL geometry
```

### cis-trans Isomers in Octahedral [Co(NH₃)₄Cl₂]⁺
```
      trans isomer:        cis isomer:
        Cl                    Cl
        |                     |
   NH₃─Co─NH₃           NH₃─Co─Cl
        |                     |
        Cl                    NH₃
   (Cl's 180° apart)     (Cl's 90° apart)
```

---

## 10. Practice Questions

**Q1.** Calculate the EAN of [Ni(CO)₄]. Is it stable? What noble gas does it match?

<details>
<summary>✅ Solution</summary>

Ni in [Ni(CO)₄]: Ni⁰ (CO is neutral ligand, no charge transfer in counting)

Wait — EAN for Ni(CO)₄:
- Ni: Z = 28, oxidation state = 0
- Electrons on Ni⁰ = 28
- CO donates 2 electrons each × 4 CO = 8 electrons
- **EAN = 28 + 8 = 36 = Kr** ✓

This matches krypton → **[Ni(CO)₄] is a very stable complex** (tetrahedral geometry).

</details>

---

**Q2.** What types of isomerism are shown by [Co(NH₃)₅Cl]SO₄?

<details>
<summary>✅ Solution</summary>

**Ionization isomer:** [Co(NH₃)₅SO₄]Cl
- Original: free SO₄²⁻ (gives BaSO₄ precipitate with BaCl₂)
- Isomer: free Cl⁻ (gives AgCl precipitate with AgNO₃)

Same formula (CoCl·SO₄·5NH₃) but different free ions in solution → **ionization isomerism**.

</details>

---

**Q3.** Calculate the CFSE for a d⁶ low-spin octahedral complex.

<details>
<summary>✅ Solution</summary>

Low-spin d⁶: all 6 electrons fill t₂g first → t₂g⁶ eg⁰

CFSE = 6(−0.4Δo) + 0(+0.6Δo) = **−2.4Δo**

This is the **maximum CFSE** for an octahedral d⁶ ion (e.g., [Fe(CN)₆]⁴⁻ — Fe²⁺, d⁶, strong field CN⁻).

</details>

---

**Q4.** What is the coordination number and geometry of [Zn(NH₃)₄]²⁺?

<details>
<summary>✅ Solution</summary>

- Central metal: Zn²⁺
- Ligands: 4 NH₃ (monodentate)
- **Coordination number = 4**
- Zn²⁺ has d¹⁰ configuration — no CFSE preference
- **Geometry: Tetrahedral** (sp³ hybridization)

Note: Zn²⁺ with 4 ligands adopts tetrahedral (not square planar) because d¹⁰ has no crystal field stabilization energy to favor square planar.

</details>

---

**Q5.** Explain why [Fe(CN)₆]⁴⁻ is diamagnetic but [Fe(H₂O)₆]²⁺ is paramagnetic.

<details>
<summary>✅ Solution</summary>

Fe²⁺ is d⁶ in both complexes.

- **CN⁻ is a strong field ligand** → large Δo → overcomes pairing energy → **low spin**
  - Configuration: t₂g⁶ eg⁰ → **0 unpaired electrons → diamagnetic**

- **H₂O is a weak field ligand** → small Δo → electrons avoid pairing → **high spin**
  - Configuration: t₂g⁴ eg² → **4 unpaired electrons → paramagnetic**

</details>

---

**Q6.** What is linkage isomerism? Give an example and draw both isomers.

<details>
<summary>✅ Solution</summary>

**Linkage isomerism** arises when an ambidentate ligand coordinates through different donor atoms.

Example with nitrite (NO₂⁻):
- **Nitro form:** [Co(NH₃)₅(NO₂)]²⁺ — N-bonded (N–O₂)
  ```
  Co–N=O with O at end
          |
          O
  ```
- **Nitrito form:** [Co(NH₃)₅(ONO)]²⁺ — O-bonded (O–N=O)
  ```
  Co–O–N=O
  ```

Both have the same formula but differ in which atom of NO₂⁻ is bonded to Co.

</details>

---

**Q7.** Define chelate ligand. Why are chelates more stable than complexes with monodentate ligands (chelate effect)?

<details>
<summary>✅ Solution</summary>

**Chelate ligand:** A polydentate ligand that forms a ring by bonding to the same metal ion through two or more donor atoms simultaneously (from Greek: chele = claw).

**Chelate effect:** Chelate complexes are thermodynamically more stable than analogous complexes with monodentate ligands.

**Reason:**
- **Entropic advantage:** Replacing n monodentate ligands with 1 chelating ligand with n donor atoms releases more free ligand molecules into solution → large increase in entropy (ΔS > 0).
- Example: [Ni(H₂O)₆]²⁺ + 3 en → [Ni(en)₃]²⁺ + 6 H₂O
  - 4 species → 7 species → ΔS >> 0 → large −TΔS contribution → very stable.

</details>

---

**Q8.** What is the hybridization and geometry of [Co(NH₃)₆]³⁺?

<details>
<summary>✅ Solution</summary>

Co³⁺: d⁶, NH₃ is strong field → low-spin

**VBT approach:**
- 6 bond pairs needed for 6 NH₃ ligands
- Co³⁺ uses inner d-orbitals (d²sp³ hybridization)

```
3d: [↑↓][↑↓][↑↓][ ][ ] → two 3d empty for hybridization
         ↓         ↓
    d²sp³ hybridization (uses 2 × 3d, 1 × 4s, 3 × 4p)
```

**Hybridization: d²sp³**
**Geometry: Regular octahedral**
**Magnetic character: Diamagnetic** (all d electrons paired in low-spin)

</details>

---

**Q9.** How many moles of AgCl precipitate when each of the following reacts with excess AgNO₃?
(a) [Co(NH₃)₆]Cl₃  (b) [Co(NH₃)₄Cl₂]Cl  (c) [Co(NH₃)₃Cl₃]

<details>
<summary>✅ Solution</summary>

AgNO₃ precipitates only **free (ionizable) Cl⁻** outside the coordination sphere:

(a) **[Co(NH₃)₆]Cl₃** → 3 free Cl⁻ → **3 moles AgCl**

(b) **[Co(NH₃)₄Cl₂]Cl** → 1 free Cl⁻ → **1 mole AgCl**

(c) **[Co(NH₃)₃Cl₃]** → 0 free Cl⁻ (all Cl inside brackets) → **0 moles AgCl**

</details>

---

**Q10.** Discuss the difference between primary and secondary valency with examples.

<details>
<summary>✅ Solution</summary>

| | Primary Valency | Secondary Valency |
|--|----------------|-------------------|
| Also called | Ionizable valency / oxidation state | Coordination valency / CN |
| Satisfied by | Anions that ionize in solution | Ligands inside the coordination sphere |
| In formula | Outside brackets [ ] | Inside brackets [ ] |
| Directional? | No (non-directional) | Yes (directional → geometry) |
| Example in [Co(NH₃)₆]Cl₃ | 3 (from 3 Cl⁻ outside) | 6 (from 6 NH₃ inside) |

</details>

---

**Q11.** Calculate CFSE for d³ configuration in an octahedral field.

<details>
<summary>✅ Solution</summary>

For **d³** (e.g., Cr³⁺): Both weak and strong field → same configuration (t₂g³ eg⁰), as 3 electrons fill t₂g singly before any pairing is needed.

Configuration: **t₂g³ eg⁰**

CFSE = 3(−0.4Δo) + 0(+0.6Δo) = **−1.2Δo**

Cr³⁺ complexes are among the most kinetically stable precisely because of this substantial CFSE.

</details>

---

## 11. References

1. Miessler, G. L., Fischer, P. J., & Tarr, D. A. (2014). *Inorganic Chemistry* (5th ed.). Pearson.
2. Housecroft, C. E., & Sharpe, A. G. (2018). *Inorganic Chemistry* (5th ed.). Pearson.
3. Werner, A. (1893). Beitrag zur Konstitution anorganischer Verbindungen. *Zeitschrift für anorganische Chemie, 3*, 267–330.
4. Pearson, R. G. (1963). Hard and soft acids and bases. *Journal of the American Chemical Society, 85*(22), 3533–3539.
5. Cotton, F. A., Wilkinson, G., Murillo, C. A., & Bochmann, M. (1999). *Advanced Inorganic Chemistry* (6th ed.). Wiley.
6. LibreTexts Chemistry. (2023). *Crystal Field Theory*. https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Crystal_Field_Theory
7. NIST WebBook. (2023). *NIST Standard Reference Database*. https://webbook.nist.gov
8. Khan Academy. (2023). *Introduction to coordination compounds*. https://www.khanacademy.org

---

*Last updated: 2025 | Repository: BUTex Chemistry-I Study Notes*

[← Previous: Periodic Properties](./02_Periodic_Properties.md) | [Next: Acids & Bases →](./04_Acids_and_Bases.md)
