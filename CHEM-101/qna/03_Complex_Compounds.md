# 🧬 Chapter 3: Complex Compounds (Coordination Chemistry)

> **Topics Covered:** Werner's Theory · EAN Rule · CFT · Isomerism · Magnetic Properties · Applications

---

## 📋 Table of Contents
- [Key Definitions](#-key-definitions)
- [Werner's Theory](#-werners-theory-of-complex-compounds)
- [Effective Atomic Number (EAN) Rule](#-effective-atomic-number-ean-rule)
- [Crystal Field Theory (CFT)](#-crystal-field-theory-cft--d-orbital-splitting)
- [Magnetic Properties of Complexes](#-magnetic-properties-of-complexes)
- [Isomerism in Complexes](#-isomerism-in-complex-compounds)
- [Structural Formulae of Complexes](#-structural-formulae-of-complexes)
- [Applications of Coordination Compounds](#-applications-of-coordination-compounds)
- [Practice Questions](#-practice-questions-with-solutions)
- [References](#-references)

---

## 📖 Key Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Complex Compound** | A compound containing a central metal atom/ion surrounded by ligands | [Fe(CN)₆]⁴⁻ |
| **Ligand** | A molecule or ion that donates a lone pair to the central metal | CN⁻, NH₃, Cl⁻ |
| **Coordination Number** | Total number of donor atoms directly bonded to the central metal | 6 in [Co(NH₃)₆]³⁺ |
| **Coordination Sphere** | Central metal + all ligands, enclosed in square brackets | [Co(NH₃)₆] in [Co(NH₃)₆]Cl₃ |
| **Chelating Agent** | A polydentate ligand that forms ring structures with the metal | EDTA, en |

---

### Complex Compound Structure

```
[Co(NH₃)₆]Cl₃

   ┌─────────────────┐
   │   Co(NH₃)₆  ³⁺ │   +   3 Cl⁻
   └─────────────────┘
    Coordination Sphere        Counter ions
    (inner sphere)             (outer sphere)
    
Primary valency: 3 (satisfied by Cl⁻ — ionizable)
Secondary valency: 6 (satisfied by NH₃ — non-ionizable, directed in space)
```

---

## 🏗️ Werner's Theory of Complex Compounds

Proposed by **Alfred Werner (1893)** — Nobel Prize 1913.

### Main Postulates

1. **Two types of valencies:**
   - **Primary valency** (ionizable) — satisfied by anions, shown by dashed lines
   - **Secondary valency** (non-ionizable) — satisfied by ligands, fixed in number and directed in space

2. **Coordination number:** Equal to the secondary valency; constant for a given metal in a given oxidation state

3. **Spatial arrangement:** Secondary valencies are directed in fixed geometry around the metal

4. **Coordination sphere:** Atoms/groups satisfying secondary valency are enclosed in square brackets

### Application to [Co(NH₃)₆]Cl₃

```
[Co(NH₃)₆]Cl₃:
  Primary valency = 3    (3 Cl⁻ are ionizable — satisfy primary valency)
  Secondary valency = 6  (6 NH₃ satisfy secondary valency → octahedral)
  Coordination number = 6
  Shape: Octahedral

       NH₃                NH₃
        │                  │
NH₃─── Co ───NH₃    or   NH₃─── Co ───NH₃
        │                  │
       NH₃                NH₃
    (octahedral arrangement)
```

### Application to [Co(NH₃)Cl₂]Cl

```
Primary valency = 3
Secondary valency = ?

Werner's analysis:
  [Co(NH₃)Cl₂]Cl  →  [Co(NH₃)Cl₂]⁺ + Cl⁻
  
  Inside sphere: 1 NH₃ + 2 Cl⁻ satisfy secondary valency
  Outside sphere: 1 Cl⁻ satisfies primary valency
  Coordination number = 3
```

---

## ⚛️ Effective Atomic Number (EAN) Rule

### Sidgwick's EAN Rule

> Proposed by **N.V. Sidgwick**. A metal complex is stable when the central metal ion achieves the **electron configuration of the nearest noble gas** by accepting electron pairs from ligands.

### Formula

$$\text{EAN} = Z - n + 2L$$

Where:
- **Z** = atomic number of the metal
- **n** = number of electrons lost (oxidation state)
- **L** = total electron pairs donated by all ligands

**For stable complex: EAN = Noble gas electron count (36, 54, or 86)**

### Noble Gas Reference

| Noble Gas | Z | EAN target |
|-----------|---|-----------|
| Kr | 36 | 36 |
| Xe | 54 | 54 |
| Rn | 86 | 86 |

---

### EAN Calculation — K₄[Fe(CN)₆]

```
Complex: [Fe(CN)₆]⁴⁻

Fe:  Z = 26
Charge on complex = 4−
Fe²⁺ (each CN⁻ has charge -1, 6 CN⁻ = -6, total = 2+ for Fe)
  Electrons on Fe²⁺ = 26 − 2 = 24
  Electrons from 6 CN⁻ (each donates 2e) = 6 × 2 = 12

  EAN = 24 + 12 = 36 = Kr configuration ✓
  → K₄[Fe(CN)₆] is STABLE
```

### EAN Calculation — K₃[Fe(CN)₆]

```
Complex: [Fe(CN)₆]³⁻

Fe³⁺: electrons = 26 − 3 = 23
Electrons from 6 CN⁻ = 12

EAN = 23 + 12 = 35 ≠ 36

→ Does NOT satisfy EAN rule
→ Less stable than K₄[Fe(CN)₆], but still exists (EAN rule has exceptions)
```

---

## 🔮 Crystal Field Theory (CFT) — d-Orbital Splitting

### Why Do d-Orbitals Split?

In a free metal ion, all **five d-orbitals are degenerate** (same energy).

When ligands approach:
1. Electrons in ligands create an electrostatic field
2. d-orbitals facing ligands experience **more repulsion** → higher energy
3. d-orbitals NOT facing ligands experience **less repulsion** → lower energy
4. This causes splitting into two groups: **eg** and **t₂g**

### Octahedral Field Splitting

```
Energy
         ────────  dx²-y²  ┐
                   dz²     ┘  eg (higher energy)
    ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  (barycentre / average energy)
         ─────── dxy  ┐
                 dxz  ┤  t₂g (lower energy)
                 dyz  ┘

        ΔO or 10Dq
    (Crystal field splitting energy)
```

### eg vs t₂g

| Group | Orbitals | Points | Energy |
|-------|----------|--------|--------|
| **eg** | dx²-y² , dz² | Directly toward ligands | Higher (destabilized) |
| **t₂g** | dxy , dxz , dyz | Between ligand axes | Lower (stabilized) |

```
eg orbitals:
  dx²-y²: lobes along x and y axes → directly face ligands
  dz²: lobes along z axis → directly face ligands

t₂g orbitals:
  dxy: lobes between x and y axes → face gaps between ligands
  dxz: lobes between x and z axes
  dyz: lobes between y and z axes
```

### High Spin vs Low Spin

| ΔO vs pairing energy | Configuration | Unpaired e⁻ |
|---------------------|---------------|-------------|
| ΔO < P (weak field ligands) | **High spin** (more unpaired) | Maximum |
| ΔO > P (strong field ligands) | **Low spin** (more paired) | Minimum |

**Spectrochemical series (increasing ΔO):**
```
I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO
       weak field                                    strong field
```

---

## 🧲 Magnetic Properties of Complexes

### Paramagnetic vs Diamagnetic

| Property | Paramagnetic | Diamagnetic |
|----------|-------------|-------------|
| Unpaired electrons | Present | Absent |
| Attraction to field | Attracted | Weakly repelled |
| Magnetic moment | μ > 0 | μ ≈ 0 |
| Example | [Fe(H₂O)₆]³⁺ | [Fe(CN)₆]⁴⁻ |

### Magnetic Moment Formula

$$\mu = \sqrt{n(n+2)} \text{ BM}$$

Where n = number of unpaired electrons, BM = Bohr Magneton

---

### K₄[Fe(CN)₆] — Diamagnetic

```
Fe²⁺: [Ar] 3d⁶  →  config: d⁶

CN⁻ is a STRONG FIELD ligand → ΔO > P → LOW SPIN

t₂g⁶ eg⁰:
  t₂g: [↑↓][↑↓][↑↓]    eg: [ ][ ]
  
  Unpaired electrons = 0 → DIAMAGNETIC
  μ = √(0×2) = 0 BM
```

### K₃[Fe(CN)₆] — Paramagnetic

```
Fe³⁺: [Ar] 3d⁵  →  config: d⁵

CN⁻ is strong field → LOW SPIN

t₂g⁵ eg⁰:
  t₂g: [↑↓][↑↓][↑]    eg: [ ][ ]
  
  Unpaired electrons = 1 → PARAMAGNETIC (weakly)
  μ = √(1×3) = 1.73 BM
```

### Why [Co(NH₃)₆]Cl₃ is Stable

```
Co³⁺: [Ar] 3d⁶
NH₃ = moderate to strong field ligand
EAN = 27 - 3 + (6×2) = 36 = Kr → Satisfies EAN ✓

Low spin d⁶:
  t₂g: [↑↓][↑↓][↑↓]   eg: [ ][ ]
  
  CFSE (Crystal Field Stabilization Energy) is very high → very stable
  [Co(NH₃)₆]³⁺ is one of the most stable octahedral complexes
```

---

## 🔄 Isomerism in Complex Compounds

### Types of Isomerism

```
Isomerism in Complexes
├── Structural Isomerism
│   ├── Ionization Isomerism
│   ├── Hydrate (Solvate) Isomerism
│   ├── Linkage Isomerism
│   └── Coordination Isomerism
└── Stereoisomerism
    ├── Geometrical Isomerism (cis-trans)
    └── Optical Isomerism
```

### 1. Ionization Isomerism

> Same molecular formula but different ions inside and outside the coordination sphere.

```
[Co(NH₃)₅Br]SO₄       vs    [Co(NH₃)₅SO₄]Br
 (SO₄²⁻ is outer sphere)     (Br⁻ is outer sphere)

 Ag⁺ test: gives BaSO₄↓      Ag⁺ test: gives AgBr↓
```

### 2. Hydrate Isomerism

> Different positions of water molecules (inside or outside sphere).

```
[Cr(H₂O)₆]Cl₃             violet   (3 free Cl⁻, no free H₂O)
[Cr(H₂O)₅Cl]Cl₂·H₂O       blue-green (2 free Cl⁻, 1 free H₂O)
[Cr(H₂O)₄Cl₂]Cl·2H₂O      dark green (1 free Cl⁻, 2 free H₂O)
```

### 3. Geometrical Isomerism (cis-trans)

For **square planar [MA₂B₂]:**

```
cis isomer:                trans isomer:
    B   B                      B   A
     \ /                        \ /
  A─ M ─A                    A─ M ─B
     │ │                        │ │
   (B and B adjacent)         (B opposite to B)

cis-[Pt(NH₃)₂Cl₂] = cisplatin (anticancer drug!)
```

For **octahedral [MA₄B₂]:**

```
cis: B atoms adjacent (90°)
trans: B atoms opposite (180°)
```

---

## 🔢 Structural Formulae of Complexes

### 4-Coordinate Complexes

```
Square planar (e.g., [PtCl₄]²⁻):

     Cl          Cl
      \          |
  Cl─ Pt ─Cl   Pt   (4 Cl arranged in plane)
      /          |
     Cl          Cl

Tetrahedral (e.g., [ZnCl₄]²⁻):

       Cl
        \
    Cl─ Zn
       / \
      Cl   Cl
```

### 6-Coordinate Complexes (Octahedral)

```
[Co(NH₃)₆]³⁺:

        NH₃
         │
NH₃─────Co─────NH₃
    /    │     \
  NH₃  NH₃    NH₃
         (octahedral)

         NH₃
          |
  NH₃──  Co  ──NH₃
  /      |       \
NH₃     NH₃      NH₃
```

---

## 🌟 Applications of Coordination Compounds

### 1. Medicine
- **Cisplatin** [cis-Pt(NH₃)₂Cl₂] — cancer chemotherapy
- **EDTA complexes** — treatment of heavy metal poisoning (chelation therapy)
- **Haemoglobin** — Fe(II) complex that carries O₂ in blood
- **Vitamin B₁₂** — Co(III) corrin complex

### 2. Industry
- **Ni(CO)₄** — Mond process for nickel purification
- **TiCl₄/Al(C₂H₅)₃** — Ziegler-Natta catalyst for polymerization
- **[Ag(CN)₂]⁻** — Silver plating / photography
- **[Au(CN)₂]⁻** — Gold extraction from ores

### 3. Agriculture
- **Copper sulfate complexes** — fungicides (Bordeaux mixture)
- **Iron EDTA** — treating iron deficiency in plants

### 4. Analytical Chemistry
- **EDTA** — complexometric titration for Ca²⁺, Mg²⁺
- **[Fe(SCN)]²⁺** — qualitative test for Fe³⁺ (blood red color)
- **Prussian blue** [KFe[Fe(CN)₆]] — pigment, Fe²⁺ test

### 5. Biological Systems
- **Chlorophyll** — Mg(II) porphyrin complex (photosynthesis)
- **Cytochrome** — Fe complex (electron transport chain)

---

## 🧪 Practice Questions with Solutions

### Q1. Calculate EAN of [Ni(CO)₄]

**Solution:**
```
Ni: Z = 28, oxidation state = 0
Electrons on Ni⁰ = 28
CO is a ligand donating 2 electrons each, 4 CO:  4 × 2 = 8

EAN = 28 + 8 = 36 = Kr ✓  → Very stable complex
```

---

### Q2. Explain why [Fe(H₂O)₆]³⁺ is paramagnetic but [Fe(CN)₆]³⁻ has lower paramagnetism

**Solution:**

```
Fe³⁺: d⁵ configuration

[Fe(H₂O)₆]³⁺: H₂O is WEAK field → HIGH SPIN
  t₂g³ eg²: [↑][↑][↑] [↑][↑]
  5 unpaired electrons → μ = √(5×7) = 5.92 BM (strongly paramagnetic)

[Fe(CN)₆]³⁻: CN⁻ is STRONG field → LOW SPIN
  t₂g⁵ eg⁰: [↑↓][↑↓][↑] [ ][ ]
  1 unpaired electron → μ = √(1×3) = 1.73 BM (weakly paramagnetic)
```

---

### Q3. Write the formula of the complex with the name tetraamminecopper(II) sulfate

**Solution:**
- Central metal: Cu²⁺
- Ligands: 4 NH₃ (tetraammine)
- Anion: SO₄²⁻

**Formula: [Cu(NH₃)₄]SO₄**

---

### Q4. Distinguish between ionization and linkage isomerism

**Solution:**

| Feature | Ionization Isomerism | Linkage Isomerism |
|---------|---------------------|------------------|
| Cause | Different ions in/out sphere | Ambidentate ligand bonded through different atoms |
| Ligand type | Different ligands swap | Same ambidentate ligand |
| Example | [Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br | [Co(NH₃)₅NO₂]²⁺ (N-bonded) vs [Co(NH₃)₅ONO]²⁺ (O-bonded) |

---

### Q5. Why does cisplatin (cis-isomer of [Pt(NH₃)₂Cl₂]) work as an anticancer drug, not the trans-isomer?

**Solution:**
Cisplatin works by binding to **two adjacent guanine bases in DNA** (cross-linking), distorting the DNA double helix and preventing cancer cell replication. The **cis arrangement** allows both Cl⁻ ligands to be replaced by DNA nitrogen donors simultaneously. In the **trans-isomer**, the two Cl⁻ are too far apart (opposite sides) to bind to adjacent DNA bases simultaneously. Hence only the cis-isomer is biologically active.

---

## 📚 References

1. **Miessler, G.L., Fischer, P.J. & Tarr, D.A.** — *Inorganic Chemistry*, 5th Ed., Pearson, 2014.

2. **Shriver, D. & Atkins, P.** — *Inorganic Chemistry*, 5th Ed., Freeman, 2010.

3. **Werner's Original Paper (1893)** — Z. anorg. Chem., 3, 267. Historical reference.

4. **LibreTexts: Coordination Chemistry** — [https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Coordination_Chemistry](https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Coordination_Chemistry)

5. **Royal Society of Chemistry** — Cisplatin and cancer: [https://www.rsc.org/education/teachers/resources/chemicallandmarks/cisplatin/](https://www.rsc.org/education/teachers/resources/chemicallandmarks/cisplatin/)

6. **IUPAC Nomenclature of Inorganic Chemistry (Red Book)** — [https://iupac.org/what-we-do/books/redbook/](https://iupac.org/what-we-do/books/redbook/)

7. **Khan Academy: Coordination Compounds** — [https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:transition-metals-and-coordination-complexes](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:transition-metals-and-coordination-complexes)

---

> 🖼️ **CFT Diagrams:** [https://chem.libretexts.org](https://chem.libretexts.org) (CC BY-NC-SA)  
> 🖼️ **Cisplatin Structure:** [https://www.rcsb.org](https://www.rcsb.org)  
> 🖼️ **Complex Isomer Diagrams:** [https://www.chemguide.co.uk/inorganic/complexions/isomerism.html](https://www.chemguide.co.uk/inorganic/complexions/isomerism.html)

---

*Last updated: 2024 | For educational use | Based on past exam papers 2017–2023*
