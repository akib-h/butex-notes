# VSEPR Theory: Principles and Fundamentals

## Overview

**Valence Shell Electron Pair Repulsion (VSEPR) Theory** is a model used to predict the three-dimensional geometry of molecules based on the repulsion between electron pairs in the valence shell of the central atom.

### Historical Development

- **1939**: Ryutaro Tsuchida (Japan) first proposed correlation between geometry and electron pairs
- **1940**: Nevil Sidgwick and Herbert Powell (Oxford) presented similar ideas (Bakerian Lecture)
- **1957**: Ronald Gillespie and Ronald Nyholm (University College London) developed comprehensive theory
- **Present**: Known as VSEPR or Gillespie-Nyholm theory

## 1. Fundamental Postulates

### Core Principle

> **Electron pairs in the valence shell of an atom repel each other and arrange themselves to minimize repulsion, thereby maximizing the distance between them.**

### Key Assumptions

1. **Electron pairs occupy space** around the central atom
2. **Repulsion minimization** determines molecular geometry
3. **All electron pairs** (bonding and lone pairs) must be considered
4. **Pauli exclusion principle** is more important than electrostatic repulsion (Gillespie, 1957)

## 2. Types of Electron Pairs

### Bonding Pairs (BP)
- Shared between two atoms
- Forms covalent bond
- **Occupies region between nuclei**

### Lone Pairs (LP) / Nonbonding Pairs
- Located on central atom only
- **Not shared with other atoms**
- Occupies more space than bonding pairs

### Multiple Bonds
- Double bonds (C=O)
- Triple bonds (C≡N)
- **Treated as single electron domains** in VSEPR

## 3. Repulsion Hierarchy

### Relative Repulsion Strengths

```
LP-LP > LP-BP > BP-BP
```

Where:
- **LP-LP**: Lone pair - Lone pair (strongest repulsion)
- **LP-BP**: Lone pair - Bonding pair (intermediate)
- **BP-BP**: Bonding pair - Bonding pair (weakest)

### Explanation

1. **Lone pairs** are closer to central atom nucleus
2. **Bonding pairs** are pulled away by two nuclei
3. **Lone pairs occupy more angular space**
4. Greater angular space → stronger repulsion

### Quantitative Comparison

```
Relative repulsion strengths:
LP-LP : LP-BP : BP-BP ≈ 1.0 : 0.9 : 0.8
```

## 4. VSEPR Notation: AXₘEₙ

### Notation System

**A**: Central atom
**X**: Bonded atoms (ligands)
**E**: Lone pairs on central atom
**m**: Number of bonded atoms
**n**: Number of lone pairs

### Examples

| Formula | Notation | Name | Example |
|---------|----------|------|---------|
| BeCl₂ | AX₂ | Linear | BeCl₂ |
| BF₃ | AX₃ | Trigonal planar | BF₃ |
| CH₄ | AX₄ | Tetrahedral | CH₄ |
| NH₃ | AX₃E | Trigonal pyramidal | NH₃ |
| H₂O | AX₂E₂ | Bent | H₂O |
| PCl₅ | AX₅ | Trigonal bipyramidal | PCl₅ |
| SF₆ | AX₆ | Octahedral | SF₆ |

## 5. Steric Number

### Definition

**Steric Number (SN)** = Number of atoms bonded to central atom + Number of lone pairs on central atom

```
SN = m + n
```

### Importance

The steric number determines the **electron-pair geometry** (also called electron domain geometry).

| Steric Number | Electron-Pair Geometry |
|---------------|----------------------|
| 2 | Linear |
| 3 | Trigonal planar |
| 4 | Tetrahedral |
| 5 | Trigonal bipyramidal |
| 6 | Octahedral |

## 6. Electron-Pair Geometry vs. Molecular Geometry

### Definitions

**Electron-Pair Geometry**: Arrangement of ALL electron pairs (bonding + lone pairs) around central atom

**Molecular Geometry**: Arrangement of ONLY ATOMS (bonding pairs define positions)

### Key Distinction

```
Same electron-pair geometry can yield different molecular geometries
depending on number of lone pairs!
```

### Example: Tetrahedral Electron-Pair Geometry (SN = 4)

| Notation | Lone Pairs | Molecular Geometry | Example |
|----------|-----------|-------------------|---------|
| AX₄ | 0 | Tetrahedral | CH₄ |
| AX₃E | 1 | Trigonal pyramidal | NH₃ |
| AX₂E₂ | 2 | Bent | H₂O |
| AXE₃ | 3 | Linear | HF |

## 7. Systematic VSEPR Procedure

### Step 1: Draw Lewis Structure
- Count valence electrons
- Place atoms with central atom
- Distribute electrons to satisfy octet rule

### Step 2: Count Electron Domains
- Count bonding pairs (single/double/triple count as ONE domain)
- Count lone pairs

### Step 3: Determine Steric Number
```
SN = (bonding domains) + (lone pairs)
```

### Step 4: Determine Electron-Pair Geometry
Use SN to find arrangement

### Step 5: Determine Molecular Geometry
Remove lone pairs from electron-pair geometry to see atomic arrangement

### Step 6: Predict Bond Angles
Apply repulsion rules to modify ideal angles

## 8. Bond Angle Modifications

### Ideal vs. Actual Angles

| Geometry | Ideal Angle | Modified by LP |
|----------|-------------|---------------|
| Tetrahedral | 109.5° | <109.5° (with LP) |
| Trigonal planar | 120° | <120° (with LP) |
| Octahedral | 90° | Usually ~90° |

### Angle Reduction Rules

**Each lone pair** reduces bond angle by approximately:
- 2-3° for first lone pair
- Additional reduction for subsequent lone pairs

### Examples

| Molecule | Notation | Ideal Angle | Actual Angle | Difference |
|----------|----------|-------------|--------------|------------|
| CH₄ | AX₄ | 109.5° | 109.5° | 0° |
| NH₃ | AX₃E | 109.5° | 107° | -2.5° |
| H₂O | AX₂E₂ | 109.5° | 104.5° | -5° |

## 9. Multiple Bonds and VSEPR

### Treatment of Multiple Bonds

**Important Rule**: Multiple bonds count as **ONE electron domain**

### Reason

- Multiple bonds (σ + π) occupy same general region of space
- All electrons between two atoms repel as a single unit

### Examples

**CO₂**: O=C=O
- 2 double bonds = 2 electron domains
- SN = 2
- Geometry: Linear

**CH₂O** (Formaldehyde): 
```
    O
    ║
H - C - H
```
- 2 C-H single bonds + 1 C=O double bond = 3 domains
- SN = 3
- Geometry: Trigonal planar

## 10. Exceptions and Limitations

### When VSEPR Fails or Needs Modification

#### 1. Transition Metals
- d-electrons complicate predictions
- Crystal field theory needed
- Example: [Fe(H₂O)₆]³⁺ - octahedral regardless of d-electron count

#### 2. Stereochemically Inactive Lone Pairs
- Lone pairs in transition metals often don't affect geometry
- Example: Zn²⁺ complexes (d¹⁰ configuration)

#### 3. π-Bonding Effects
- Hyperconjugation and resonance not considered
- May affect actual geometry

#### 4. Relativistic Effects
- Heavy elements (Period 6+)
- Example: TlH₃ predicted trigonal planar, actually pyramidal

### Superheavy Elements

For elements beyond Period 7:
- Relativistic effects become significant
- Orbital energies dramatically altered
- Examples:
  - NhF₃ (Nihonium trifluoride): T-shaped (not trigonal planar like BF₃)
  - OgF₄ (Oganesson tetrafluoride): Tetrahedral (unlike XeF₄ square planar)

## 11. Expanded Octets (Period 3 and Beyond)

### Justification

- Central atoms in Period 3+ can have >8 electrons
- Historically attributed to d-orbital participation (controversial)
- Modern view: attributed to size and electronegativity

### Common Examples

| Molecule | Central Atom | Valence e⁻ | Geometry |
|----------|--------------|-----------|----------|
| PCl₅ | P | 10 | Trigonal bipyramidal |
| SF₆ | S | 12 | Octahedral |
| IF₇ | I | 14 | Pentagonal bipyramidal |
| XeF₄ | Xe | 12 (8+4) | Square planar |

## 12. Relationship with Quantum Chemical Topology

### Modern Validation

VSEPR predictions validated by:

1. **Electron Localization Function (ELF)**
   - Maps regions of high electron pair probability
   - Confirms electron pair positions predicted by VSEPR

2. **Quantum Theory of Atoms in Molecules (QTAIM)**
   - Analyzes electron density topology
   - Shows electron pair repulsion effects

3. **Natural Bond Orbital (NBO) Analysis**
   - Confirms lone pair and bonding pair locations

## Mathematical Treatment (Advanced)

### Electrostatic Repulsion Energy

For point charges at distance r:

```
E = k(q₁q₂)/r
```

For VSEPR, minimizing total energy:

```
E_total = Σ E_repulsion(all pairs)
```

### Angular Optimization

For n electron pairs, minimize:

```
E(θ₁, θ₂, ..., θₙ) = Σ(i<j) k/r_ij
```

Where r_ij depends on angles between electron pairs

## Summary Table: Complete VSEPR Geometries

| SN | e⁻ Geom | Notation | Molecular Geom | Bond Angle | Example |
|----|---------|----------|----------------|------------|---------|
| 2 | Linear | AX₂ | Linear | 180° | BeCl₂ |
| 3 | Trig planar | AX₃ | Trigonal planar | 120° | BF₃ |
| 3 | Trig planar | AX₂E | Bent | <120° | SO₂ |
| 4 | Tetrahedral | AX₄ | Tetrahedral | 109.5° | CH₄ |
| 4 | Tetrahedral | AX₃E | Trig pyramidal | ~107° | NH₃ |
| 4 | Tetrahedral | AX₂E₂ | Bent | ~104.5° | H₂O |
| 5 | Trig bipyramidal | AX₅ | Trig bipyramidal | 90°, 120° | PCl₅ |
| 5 | Trig bipyramidal | AX₄E | Seesaw | <90°, <120° | SF₄ |
| 5 | Trig bipyramidal | AX₃E₂ | T-shaped | <90° | ClF₃ |
| 5 | Trig bipyramidal | AX₂E₃ | Linear | 180° | XeF₂ |
| 6 | Octahedral | AX₆ | Octahedral | 90° | SF₆ |
| 6 | Octahedral | AX₅E | Square pyramidal | <90° | BrF₅ |
| 6 | Octahedral | AX₄E₂ | Square planar | 90° | XeF₄ |

## References

1. Gillespie, R. J., & Nyholm, R. S. (1957). "Inorganic Stereochemistry". *Quarterly Reviews*, 11(4), 339-380.
2. Gillespie, R. J., & Hargittai, I. (2012). "The VSEPR Model of Molecular Geometry"
3. IUPAC Gold Book: VSEPR Theory
4. Chemistry LibreTexts: VSEPR Theory (https://chem.libretexts.org)
5. Petrucci et al. "General Chemistry: Principles and Modern Applications"
6. MIT OpenCourseWare: Principles of Chemical Science - Lecture 12

---

**Next**: [Molecular Geometry](molecular-geometry.md)