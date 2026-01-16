# Metallic Bond Theory

## Overview

Metallic bonding is a unique type of chemical bonding that occurs between metal atoms, where valence electrons are delocalized across a lattice of metal cations. This explains the characteristic properties of metals such as electrical conductivity, malleability, ductility, and metallic luster.

## Historical Development

### Early Models
- **Paul Drüde (1900s)**: Proposed the electron sea model, modeling metals as atomic cores (nuclei + inner electrons) surrounded by mobile valence electrons
- This model predated even Rutherford's nuclear model and Lewis' octet rule

### Quantum Mechanical Development
- **Felix Bloch (1928)**: Applied quantum theory to solids
- **Walter Heitler and Fritz London (1927)**: Explained how atomic orbitals combine to form bands
- Led to the development of modern band theory

## 1. Electron Sea Model (Classical Model)

### Core Concept
Metal atoms donate their valence electrons to form a "sea" of delocalized electrons that move freely throughout the metallic structure. The metal consists of:
- **Atomic cores**: Positive nuclei + inner shell electrons (fixed in position)
- **Electron sea**: Delocalized valence electrons (mobile)

### Mathematical Representation
For a metal atom M:
```
M → M⁺ + e⁻ (delocalized)
```

The metal is represented as: **M = M⁺ + e⁻_sea**
(NOT M⁺, as the electrons are still present in the structure)

### Key Features
1. **Delocalization**: Valence electrons are not bound to specific atoms
2. **Free Movement**: Electrons can migrate throughout the entire structure
3. **Equal Energy**: Delocalized electrons have approximately the same energy
4. **Electrostatic Bonding**: Attraction between positive cores and negative electron sea

### Limitations
- Oversimplified view of electron behavior
- Cannot explain quantitative properties
- Does not account for different energy bands
- Fails to explain semiconductor behavior

## 2. Band Theory (Quantum Mechanical Model)

### Formation of Bands

When N atoms come together to form a metal:

**For a single metal atom:**
- Has discrete atomic orbitals (s, p, d)

**For two metal atoms:**
- Atomic orbitals overlap → 2 molecular orbitals form (bonding and antibonding)

**For N atoms (where N ≈ 10²³):**
- N atomic orbitals combine → N molecular orbitals
- These N orbitals are so close in energy they form a continuous band

### Energy Band Structure

```
        ← Conduction Band (empty or partially filled)
        ─────────────────────────────────────
        
        Band Gap (may be zero in metals)
        
        ─────────────────────────────────────
        ← Valence Band (filled or partially filled)
```

#### For Example: Sodium (Na)
- Electronic configuration: 1s² 2s² 2p⁶ 3s¹
- The 3s orbitals from all Na atoms overlap to form a band
- This band is only half-filled (one electron per atom, capacity of two)
- Half-filled band → excellent conductor

#### For Example: Magnesium (Mg)
- Electronic configuration: [Ne] 3s²
- The 3s band would be completely filled
- However, 3s and 3p bands overlap
- The combined band is only 1/4 filled → excellent conductor

### Band Filling and Properties

| Metal | Valence e⁻ | Band Filling | Conductivity |
|-------|-----------|--------------|--------------|
| Na | 1 | 1/8 (s+p combined) | Excellent |
| Mg | 2 | 1/4 (s+p combined) | Excellent |
| Al | 3 | 3/8 (s+p combined) | Excellent |

### Mathematical Description

For N atoms with one valence orbital each:
- **Number of MOs formed**: N
- **Energy spacing**: ΔE = (E_top - E_bottom)/N

As N → 10²³, ΔE → 0, forming a continuous band

### Band Overlap Diagram

```
Energy ↑
      │
      │   ┌─────────┐
      │   │ 3p band │  ← Empty or partially filled
      │   │ ░░░░░░░ │
      │   └─────────┘
      │   ┌─────────┐
      │   │ 3s band │  ← Overlaps with 3p
      │   │ ███████ │
      │   └─────────┘
      └──────────────→
```

## 3. Mathematical Treatment of Metallic Bonding

### Bond Energy in Metals

The lattice energy (U) in metallic bonding can be approximated by:

```
U = -NZe²α/r₀(1 - 1/n)
```

Where:
- N = number of atoms
- Z = number of valence electrons
- e = electron charge
- α = Madelung constant (geometry-dependent)
- r₀ = nearest neighbor distance
- n = Born exponent

### Density of States

For a three-dimensional metal:

```
g(E) = (2π(2m*)^(3/2)/h³) × √E
```

Where:
- g(E) = density of states
- m* = effective mass of electron
- h = Planck's constant

### Fermi Energy

The Fermi energy (E_F) is the highest occupied energy level at T = 0 K:

```
E_F = (h²/2m*)(3π²n)^(2/3)
```

Where n = electron density

## 4. Comparison with Other Bond Types

| Property | Metallic | Ionic | Covalent |
|----------|----------|-------|----------|
| Electron behavior | Delocalized | Transferred | Shared/Localized |
| Electrical conductivity | High (solid & liquid) | Low (solid), High (liquid) | Generally low |
| Directionality | Non-directional | Non-directional | Directional |
| Bond strength | Moderate-High | High | Variable |
| Typical bond energy | 75-1000 kJ/mol | 400-4000 kJ/mol | 150-1000 kJ/mol |

## 5. Factors Affecting Metallic Bond Strength

### 1. Number of Valence Electrons
- More valence electrons → more electrons in sea → stronger bonding
- Example: Mg (2e⁻) forms stronger bonds than Na (1e⁻)

### 2. Size of Metal Cation
- Smaller cation → higher charge density → stronger attraction
- Example: Be (stronger) vs. Ba (weaker)

### 3. Nuclear Charge
- Higher nuclear charge → stronger attraction to electron sea
- Example: Al³⁺ attracts electrons more strongly than Na⁺

### 4. Band Filling
- Groups 6-9 (6-9 valence electrons) have highest melting points
- These elements fill bonding orbitals without filling many antibonding orbitals

## 6. Experimental Evidence

### 1. Electrical Conductivity Measurements
- Metals conduct electricity in solid state
- Conductivity increases as temperature decreases (opposite to semiconductors)

### 2. Thermal Conductivity
- Follows Wiedemann-Franz Law: κ/σT = constant
- Where κ = thermal conductivity, σ = electrical conductivity

### 3. Photoelectric Effect
- Demonstrates free electrons can be ejected from metal surface
- Work function relates to binding energy of electrons

### 4. X-ray Crystallography
- Confirms regular lattice structure
- Determines atomic spacing and coordination numbers

## 7. Advanced Concepts

### Density Functional Theory (DFT)
Modern computational method for calculating electronic structure:
- Solves Schrödinger equation for many-body systems
- Predicts band structures, bonding energies, and material properties
- Basis for materials design

### Electron-Phonon Interactions
- Phonons = quantized lattice vibrations
- Electron-phonon coupling affects:
  - Electrical resistance
  - Superconductivity (at low temperatures)
  - Heat capacity

### Nearly-Free Electron Model
- Treats electrons as nearly free but affected by periodic potential of lattice
- Explains why band gaps form at Brillouin zone boundaries

## References

1. Drude, P. (1900). "Zur Elektronentheorie der Metalle"
2. Bloch, F. (1928). "Über die Quantenmechanik der Elektronen in Kristallgittern"
3. Chemistry LibreTexts: Metallic Bonding (https://chem.libretexts.org)
4. Ashcroft, N. W., & Mermin, N. D. (1976). "Solid State Physics"
5. Kittel, C. (2004). "Introduction to Solid State Physics"
6. Petrucci et al. "General Chemistry: Principles and Modern Applications"

---

**Next**: [Properties of Metallic Bonds](properties.md)