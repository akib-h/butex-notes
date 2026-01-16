# Valence Bond Theory (VBT): Fundamentals

## Historical Development

### Origins
- **1927**: Walter Heitler and Fritz London developed quantum mechanical treatment of H₂ molecule
- **1930s**: Linus Pauling extended the theory using hybridization concept
- **1954**: Pauling received Nobel Prize for work on chemical bonding

### Significance
- First quantum mechanical theory of covalent bonding
- Explains molecular geometry and bond properties
- Foundation for understanding organic chemistry

## 1. Core Postulates of VBT

### Postulate 1: Orbital Overlap
> **A covalent bond forms when two half-filled atomic orbitals overlap, allowing electrons to be shared between atoms.**

### Postulate 2: Electron Pairing
> **The electrons in the overlapping orbitals must have opposite spins (Pauli Exclusion Principle).**

### Postulate 3: Maximum Overlap
> **The strength of a covalent bond is proportional to the extent of orbital overlap. Greater overlap = Stronger bond.**

### Postulate 4: Directionality
> **Covalent bonds are directional, occurring along the axis of maximum overlap.**

## 2. Types of Orbital Overlap

### σ (Sigma) Bonds

**Definition**: Head-to-head (end-to-end) overlap of atomic orbitals along the internuclear axis.

**Characteristics**:
- **Cylindrical symmetry** around bond axis
- **Strongest type** of covalent bond
- Can rotate without breaking bond
- Electron density concentrated between nuclei

**Types of σ Overlap**:

1. **s-s overlap**: H-H in H₂
   ```
   (s)---(s)  →  [σ-bond]
   ```
   
2. **s-p overlap**: H-Cl
   ```
   (s)---(p)  →  [σ-bond]
   ```
   
3. **p-p overlap** (head-on): Cl-Cl
   ```
   (p)---(p)  →  [σ-bond]
   ```

### π (Pi) Bonds

**Definition**: Side-by-side (lateral) overlap of parallel p-orbitals perpendicular to internuclear axis.

**Characteristics**:
- **Weaker** than σ bonds
- **Restricts rotation** (breaking π bond requires energy)
- Electron density above and below bond axis
- Always accompanied by a σ bond

**Formation**:
```
    │     │
  (pz)  (pz)    →    [π-bond]
    │     │
```

### δ (Delta) Bonds

**Advanced**: Found in quadruple bonds (rare)
- d-orbital overlap
- Example: Cr₂ molecule

## 3. Comparison: σ vs. π Bonds

| Property | σ Bond | π Bond |
|----------|--------|--------|
| Overlap type | Head-to-head | Side-by-side |
| Symmetry | Cylindrical | Planar |
| Strength | Stronger | Weaker |
| Rotation | Free | Restricted |
| Number per bond | Always 1 | 0, 1, or 2 |
| Electron density | Between nuclei | Above/below axis |

## 4. Bond Strength and Overlap

### Quantitative Relationship

Bond strength ∝ Overlap integral (S)

```
S = ∫ ψ₁(r) ψ₂(r) dτ
```

Where:
- ψ₁, ψ₂ = atomic orbital wavefunctions
- dτ = volume element

### Overlap Efficiency

**Ranking**:
```
σ(p-p, head-on) > σ(s-p) > σ(s-s) > π(p-p)
```

### Experimental Bond Energies

| Bond | Type | Bond Energy (kJ/mol) |
|------|------|---------------------|
| H-H | σ(s-s) | 436 |
| C-C | σ(sp³-sp³) | 348 |
| C=C | σ + π | 614 (σ: 348, π: 266) |
| C≡C | σ + 2π | 839 (σ: 348, 2π: 491) |
| C-H | σ(sp³-s) | 413 |

## 5. Hybridization: The Core Concept

### Why Hybridization?

**Problem**: Ground state orbitals don't explain observed molecular geometries.

**Example - Carbon**:
- Ground state: 1s² 2s² 2p²
- Only 2 unpaired electrons → should form only 2 bonds
- **BUT**: Carbon forms 4 bonds in CH₄!

**Solution**: Hybridization

### Definition

> **Hybridization** is the mathematical mixing of atomic orbitals to form new hybrid orbitals with different shapes, energies, and orientations suitable for bonding.

### Key Principles

1. **Conservation**: Number of hybrid orbitals = Number of atomic orbitals mixed
2. **Energy**: Hybrid orbitals have intermediate energy
3. **Geometry**: Hybrids orient to minimize repulsion
4. **Equivalence**: All hybrids from same mix are equivalent

### Mathematical Treatment

For sp³ hybridization:
```
Ψ(sp³)₁ = ½(Ψs + Ψpx + Ψpy + Ψpz)
Ψ(sp³)₂ = ½(Ψs + Ψpx - Ψpy - Ψpz)
Ψ(sp³)₃ = ½(Ψs - Ψpx + Ψpy - Ψpz)
Ψ(sp³)₄ = ½(Ψs - Ψpx - Ψpy + Ψpz)
```

## 6. Types of Hybridization

### sp Hybridization

**Mix**: 1s + 1p = 2 sp hybrid orbitals

**Geometry**: Linear

**Angle**: 180°

**Character**: 50% s, 50% p

**Remaining**: 2 unhybridized p orbitals

**Example**: BeCl₂, CO₂, HC≡CH

```
Energy ↑
       2p  [_][_][_]
       2s  [↑↓]

Promotion & Hybridization ↓

       2p      [↑] [↑]  (unhybridized)
       sp  [↑] [↑]      (hybridized)
```

### sp² Hybridization

**Mix**: 1s + 2p = 3 sp² hybrid orbitals

**Geometry**: Trigonal planar

**Angle**: 120°

**Character**: 33.3% s, 66.7% p

**Remaining**: 1 unhybridized p orbital

**Example**: BF₃, C₂H₄, CO₃²⁻

```
Energy ↑
       2p  [↑][_][_]
       2s  [↑↓]

Promotion & Hybridization ↓

       2p         [↑]  (unhybridized, perpendicular)
       sp² [↑][↑][↑]  (hybridized, planar)
```

### sp³ Hybridization

**Mix**: 1s + 3p = 4 sp³ hybrid orbitals

**Geometry**: Tetrahedral

**Angle**: 109.5°

**Character**: 25% s, 75% p

**Remaining**: No unhybridized orbitals

**Example**: CH₄, NH₃, H₂O

```
Energy ↑
       2p  [↑][_][_]
       2s  [↑↓]

Promotion & Hybridization ↓

       sp³ [↑][↑][↑][↑]  (all hybridized)
```

### sp³d Hybridization

**Mix**: 1s + 3p + 1d = 5 sp³d hybrid orbitals

**Geometry**: Trigonal bipyramidal

**Angles**: 90° and 120°

**Character**: 20% s, 60% p, 20% d

**Example**: PCl₅, SF₄

**IMPORTANT NOTE**: Recent research questions d-orbital involvement. Modern view suggests ionic character and three-center four-electron bonding.

### sp³d² Hybridization

**Mix**: 1s + 3p + 2d = 6 sp³d² hybrid orbitals

**Geometry**: Octahedral

**Angle**: 90°

**Character**: 16.7% s, 50% p, 33.3% d

**Example**: SF₆, [Fe(CN)₆]⁴⁻

## 7. Determination of Hybridization

### Method 1: Steric Number

```
Hybridization = Steric Number - 1
```

Where Steric Number = bonded atoms + lone pairs

| Steric # | Hybridization | Geometry |
|----------|--------------|----------|
| 2 | sp | Linear |
| 3 | sp² | Trigonal planar |
| 4 | sp³ | Tetrahedral |
| 5 | sp³d | Trigonal bipyramidal |
| 6 | sp³d² | Octahedral |

### Method 2: Count Electron Domains

**Rule**: Count all regions of electron density around central atom
- Single bond = 1 domain
- Double bond = 1 domain (for hybridization purposes)
- Triple bond = 1 domain
- Lone pair = 1 domain

### Method 3: VSEPR Integration

1. Draw Lewis structure
2. Determine electron-pair geometry
3. Assign hybridization based on geometry

## 8. Relationship with VSEPR

| VSEPR e⁻ Geometry | Hybridization | Molecular Examples |
|-------------------|---------------|-------------------|
| Linear | sp | BeCl₂, CO₂ |
| Trigonal planar | sp² | BF₃, NO₃⁻ |
| Tetrahedral | sp³ | CH₄, NH₃, H₂O |
| Trigonal bipyramidal | sp³d | PCl₅ |
| Octahedral | sp³d² | SF₆ |

**Key Point**: VSEPR predicts geometry; VBT explains bonding through hybridization.

## 9. Properties Explained by VBT

### Bond Angles

**Explained by hybridization**:
- sp: 180°
- sp²: 120°
- sp³: 109.5°

**Deviations**: Lone pair repulsion

### Bond Lengths

**Trend**: More s-character → Shorter bond

```
sp (50% s) < sp² (33% s) < sp³ (25% s)
```

**Example - C-C bonds**:
- C(sp)–C(sp) in HC≡C-C≡CH: 137 pm
- C(sp²)–C(sp²) in H₂C=CH₂: 154 pm
- C(sp³)–C(sp³) in H₃C-CH₃: 154 pm

### Bond Strength

More s-character → electrons closer to nucleus → stronger bond

### Acidity

More s-character → more stable anion → more acidic

```
HC≡CH (sp, pKa ≈ 25) > H₂C=CH₂ (sp², pKa ≈ 44) > CH₃-CH₃ (sp³, pKa ≈ 50)
```

## 10. Limitations of VBT

### 1. Magnetic Properties
- Cannot explain paramagnetism of O₂
- Molecular Orbital Theory needed

### 2. Resonance
- VBT requires multiple structures
- Doesn't explain delocalization naturally

### 3. Spectroscopic Data
- Doesn't predict electronic spectra well
- MOT more successful here

### 4. Expanded Octets
- d-orbital participation questionable
- Alternative explanations emerging

## 11. Comparison: VBT vs. MOT

| Aspect | VBT | MOT |
|--------|-----|-----|
| Orbitals | Localized | Delocalized |
| Bond formation | Atomic overlap | Linear combination |
| Resonance | Multiple structures | Single description |
| Magnetic properties | Limited | Accurate |
| Complexity | Simpler | More complex |
| Best for | Localized bonds | Delocalized systems |

## References

1. Pauling, L. (1931). "The Nature of the Chemical Bond"
2. Heitler, W., & London, F. (1927). "Wechselwirkung neutraler Atome"
3. Coulson, C. A. (1961). "Valence"
4. Chemistry LibreTexts: Valence Bond Theory
5. Petrucci et al. "General Chemistry: Principles and Modern Applications"
6. Atkins, P., & de Paula, J. "Physical Chemistry"

---

**Next**: [Hybridization Details](hybridization.md)