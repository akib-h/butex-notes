# Quantum Yield in Photochemistry

*Last Updated: January 7, 2026*

## Table of Contents
1. [Introduction](#introduction)
2. [Definition and Significance](#definition-and-significance)
3. [Types of Quantum Yield](#types-of-quantum-yield)
4. [Mathematical Framework](#mathematical-framework)
5. [Measurement Techniques](#measurement-techniques)
6. [Factors Affecting Quantum Yield](#factors-affecting-quantum-yield)
7. [Examples and Case Studies](#examples-and-case-studies)
8. [Applications](#applications)
9. [References](#references)

---

## Introduction

Quantum yield (Φ) is a fundamental concept in photochemistry that quantifies the efficiency of a photochemical or photophysical process. It represents the relationship between the number of events occurring and the number of photons absorbed by the system.

### Historical Development
- Introduced in early 20th century following Einstein's work on photochemical equivalence
- Critical for understanding energy conversion efficiency in photochemical systems
- Essential parameter in fields ranging from photobiology to solar energy conversion

---

## Definition and Significance

### General Definition

**Quantum Yield (Φ)** is defined as:

```
Φ = (Number of defined events) / (Number of photons absorbed)
```

### Mathematical Expression

```
Φ = n_events / N_photons
```

Where:
- n_events = number of specific molecular events (reactions, emissions, etc.)
- N_photons = number of photons absorbed by the system

### Significance

1. **Efficiency Measure**: Indicates how effectively absorbed light energy is converted
2. **Mechanistic Insight**: Provides information about reaction pathways
3. **Practical Applications**: Critical for designing photochemical processes
4. **Quality Control**: Used to optimize photoactive materials and devices

### Range of Quantum Yields

```
0 ≤ Φ ≤ ∞
```

- **Φ = 0**: No events occur (complete non-radiative decay)
- **Φ = 1**: Each photon causes exactly one event (ideal simple process)
- **Φ > 1**: Chain reactions amplify the initial photochemical event
- **Φ >> 1**: Can reach values of 10³-10⁶ in radical chain reactions

---

## Types of Quantum Yield

### 1. Primary Quantum Yield (Φ_primary)

Refers to the **initial photochemical act** only.

```
Φ_primary = (Number of molecules initially activated) / (Number of photons absorbed)
```

**Characteristics**:
- Generally Φ_primary ≤ 1
- Accounts for the Stark-Einstein Law
- Excludes secondary dark reactions

**Example**: 
```
I₂ + hν → 2I·
Φ_primary = 1 (one molecule dissociates per photon)
```

### 2. Overall Quantum Yield (Φ_overall)

Refers to the **total chemical change** including secondary reactions.

```
Φ_overall = (Total number of product molecules formed) / (Number of photons absorbed)
```

**Characteristics**:
- Can be much greater than 1
- Includes chain reactions and secondary processes
- More relevant for practical applications

**Example**:
```
H₂ + Cl₂ + hν → 2HCl
Φ_overall ≈ 10⁶ (chain reaction amplification)
```

### 3. Fluorescence Quantum Yield (Φ_f)

Efficiency of fluorescent emission.

```
Φ_f = (Number of photons emitted as fluorescence) / (Number of photons absorbed)
```

Typical ranges:
- Fluorescent dyes: Φ_f = 0.5 - 1.0
- Many organic molecules: Φ_f = 0.001 - 0.1
- Heavily quenched systems: Φ_f < 0.001

### 4. Phosphorescence Quantum Yield (Φ_p)

Efficiency of phosphorescent emission.

```
Φ_p = (Number of photons emitted as phosphorescence) / (Number of photons absorbed)
```

Generally Φ_p << Φ_f due to competing non-radiative processes.

### 5. Intersystem Crossing Quantum Yield (Φ_ISC)

Efficiency of singlet-to-triplet conversion.

```
Φ_ISC = (Number of molecules undergoing ISC) / (Number of photons absorbed)
```

Important for:
- Photosensitization
- Triplet-triplet annihilation
- Delayed fluorescence

### 6. Photochemical Reaction Quantum Yield (Φ_r)

Efficiency of chemical product formation.

```
Φ_r = (Number of product molecules formed) / (Number of photons absorbed)
```

---

## Mathematical Framework

### Conservation of Quantum Yield

For a molecule in excited state S₁, all decay pathways must sum to unity:

```
Φ_f + Φ_IC + Φ_ISC + Φ_r = 1
```

Where:
- Φ_f = fluorescence quantum yield
- Φ_IC = internal conversion quantum yield
- Φ_ISC = intersystem crossing quantum yield
- Φ_r = photochemical reaction quantum yield

### Relationship with Rate Constants

```
Φ_f = k_f / (k_f + k_IC + k_ISC + k_r)
```

Where:
- k_f = fluorescence rate constant
- k_IC = internal conversion rate constant
- k_ISC = intersystem crossing rate constant
- k_r = photochemical reaction rate constant

### Fluorescence Lifetime and Quantum Yield

```
Φ_f = k_f × τ_f

τ_f = 1 / (k_f + k_IC + k_ISC + k_r)
```

Where τ_f is the fluorescence lifetime.

### Stern-Volmer Equation for Quenching

When a quencher is present:

```
Φ₀/Φ = 1 + K_SV[Q]

K_SV = k_q × τ₀
```

Where:
- Φ₀ = quantum yield without quencher
- Φ = quantum yield with quencher
- [Q] = quencher concentration
- K_SV = Stern-Volmer constant
- k_q = bimolecular quenching rate constant
- τ₀ = lifetime without quencher

---

## Measurement Techniques

### 1. Chemical Actinometry

Uses a **chemical standard reaction** with known quantum yield.

**Common Actinometers**:

| Actinometer | Wavelength Range | Φ | Reaction |
|-------------|------------------|---|----------|
| Ferrioxalate | 250-500 nm | 1.24 (at 365 nm) | Fe³⁺ → Fe²⁺ |
| Uranyl oxalate | 250-435 nm | 0.57 (at 365 nm) | Oxalate decomposition |
| Reinecke's salt | 315-750 nm | Variable | NH₃ formation |

**Procedure**:
1. Irradiate actinometer with known intensity
2. Measure chemical change (spectrophotometry)
3. Calculate photon flux:

```
I₀ = (Δn × N_A) / (Φ_act × t)
```

Where:
- I₀ = photon flux (Einstein/s)
- Δn = moles of product formed
- N_A = Avogadro's number
- Φ_act = actinometer quantum yield
- t = irradiation time

### 2. Spectroscopic Methods

**For Fluorescence Quantum Yield**:

Comparative method using a standard fluorophore:

```
Φ_x = Φ_st × (F_x/F_st) × (A_st/A_x) × (n_x²/n_st²)
```

Where:
- x = unknown sample
- st = standard
- F = integrated fluorescence intensity
- A = absorbance at excitation wavelength
- n = refractive index of solvent

**Common Standards**:
- Quinine sulfate in 0.1 M H₂SO₄: Φ_f = 0.54 (at 350 nm)
- Fluorescein in 0.1 M NaOH: Φ_f = 0.95 (at 490 nm)
- Rhodamine 6G in ethanol: Φ_f = 0.94 (at 488 nm)

### 3. Time-Resolved Spectroscopy

Measures excited state lifetimes to determine quantum yields:

```
Φ_f = τ_measured / τ_radiative

τ_radiative = 1 / k_f
```

---

## Factors Affecting Quantum Yield

### 1. Wavelength of Excitation

Different wavelengths can populate different excited states:

```
S₀ + hν₁ → S₁ (lower energy, possibly higher Φ)
S₀ + hν₂ → S₂ (higher energy, possibly lower Φ)
```

**Kasha's Rule**: Emission typically occurs from the lowest excited state (S₁ or T₁), regardless of excitation wavelength.

### 2. Temperature

Temperature affects:
- **Rate constants**: k = A × exp(-E_a/RT)
- **Thermal activation**: Increases k_IC and k_ISC
- **Viscosity**: Affects bimolecular quenching

**Example**:
```
At higher T:
- k_IC increases → Φ_f decreases
- k_ISC increases → Φ_p may increase
```

### 3. Solvent Effects

**Polarity**:
- Polar solvents stabilize charge-transfer states
- Can increase or decrease quantum yields depending on state character

**Viscosity**:
```
High viscosity → Reduced collisional quenching → Higher Φ_f
```

**Heavy Atom Effect**:
- Heavy atoms enhance spin-orbit coupling
- Increases Φ_ISC, decreases Φ_f

### 4. Concentration

**Self-Quenching** at high concentrations:
```
Φ = Φ₀ / (1 + K[S])
```

**Aggregation**:
- Formation of dimers/excimers
- Different photophysical properties

### 5. Oxygen

Oxygen is a triplet-state quencher:
```
³S* + ³O₂ → S + ¹O₂*
```

Effects:
- Reduces Φ_p significantly
- Can reduce Φ_r for triplet-mediated reactions
- Minimal effect on Φ_f (singlet processes too fast)

### 6. pH

Affects:
- Protonation states of molecules
- Absorption spectra
- Excited state properties

**Example - Fluorescein**:
```
pH < 4: Φ_f ≈ 0.1 (protonated form)
pH > 9: Φ_f ≈ 0.95 (deprotonated form)
```

---

## Examples and Case Studies

### Example 1: Hydrogen Iodide Decomposition

**Reaction**:
```
2HI + hν → H₂ + I₂
```

**Mechanism**:
```
Initiation:  HI + hν → H· + I·           (Φ_primary = 2)
Propagation: H· + HI → H₂ + I·
Propagation: I· + HI → I₂ + H·
Termination: H· + I· → HI
             I· + I· → I₂
```

**Calculation**:

Given: One photon absorbed, 2 HI molecules decompose in primary step
If chain continues for n cycles:

```
Total HI decomposed = 2 + 2n
Φ_overall = 2(1 + n)

Typical experimental values: Φ = 2-3
(Short chain length due to efficient termination)
```

### Example 2: Hydrogen-Chlorine Reaction

**Reaction**:
```
H₂ + Cl₂ + hν → 2HCl
```

**Mechanism**:
```
Initiation:  Cl₂ + hν → 2Cl·           (Φ_primary = 2)
Propagation: Cl· + H₂ → HCl + H·       (fast)
             H· + Cl₂ → HCl + Cl·       (very fast)
Termination: Cl· + Cl· → Cl₂
             H· + Cl· → HCl
```

**Quantum Yield**:
```
Φ_overall ≈ 10⁴ - 10⁶

Each photon initiates ~10³-10⁵ cycles before termination
```

**Problem**: Calculate HCl molecules formed if 1 mole of photons is absorbed with Φ = 10⁵.

**Solution**:
```
N_photons = 6.022 × 10²³ photons

N_HCl = Φ × N_photons = 10⁵ × 6.022 × 10²³ = 6.022 × 10²⁸ molecules

Moles of HCl = 6.022 × 10²⁸ / 6.022 × 10²³ = 10⁵ moles
```

### Example 3: Fluorescence Quantum Yield Determination

**Problem**: A solution has absorbance A = 0.05 at 450 nm. Using excitation at 450 nm, the integrated fluorescence intensity is 1500 units. A standard (fluorescein, Φ_st = 0.95) with A = 0.05 gives 2000 units under identical conditions. Both in the same solvent. Calculate Φ_f.

**Solution**:
```
Φ_x = Φ_st × (F_x/F_st) × (A_st/A_x) × (n_x²/n_st²)

Since same solvent: n_x = n_st
Since same absorbance: A_x = A_st

Φ_x = 0.95 × (1500/2000) × 1 × 1
Φ_x = 0.95 × 0.75 = 0.71
```

### Example 4: Photopolymerization

**Photoinitiator**: Benzoin methyl ether

```
Initiator + hν → 2R·                 (Φ_i = 0.5)
R· + Monomer → R-M·                  (initiation)
R-M· + nM → R-M_n·                   (propagation, n ≈ 1000)
R-M_n· + R-M_m· → Polymer            (termination)
```

**Overall Quantum Yield**:
```
Φ_overall = Φ_i × n_propagation
Φ_overall = 0.5 × 1000 = 500

500 monomer units incorporated per photon absorbed
```

### Example 5: Photosynthesis

**Overall Reaction**:
```
6CO₂ + 6H₂O + hν → C₆H₁₂O₆ + 6O₂
```

**Quantum Requirement**:
- Theoretical minimum: 8-10 photons per O₂ molecule
- Actual experimental: 10-12 photons per O₂

**Quantum Yield Calculation**:
```
Φ(O₂) = 1 / (10 to 12) ≈ 0.08 - 0.10

Only 8-10% efficient in converting photons to chemical products
```

---

## Applications

### 1. Solar Energy Conversion

**Dye-Sensitized Solar Cells (DSSC)**:
```
Φ_electron_injection = (electrons in TiO₂) / (photons absorbed)

Target: Φ > 0.85 for efficient cells
```

**Organic Photovoltaics (OPV)**:
```
Φ_charge_separation = (free charge carriers) / (photons absorbed)

Best OPVs: Φ ≈ 0.90
```

### 2. Photodynamic Therapy

**Requirement**: High Φ_ISC for singlet oxygen generation

```
³Sensitizer* + ³O₂ → Sensitizer + ¹O₂*

Ideal photosensitizers: Φ_ISC > 0.5, Φ(¹O₂) > 0.5
```

**Examples**:
- Porphyrins: Φ(¹O₂) ≈ 0.6-0.7
- Methylene Blue: Φ(¹O₂) ≈ 0.52

### 3. Fluorescence Imaging

**Bioimaging Requirements**:
- High Φ_f (>0.5) for bright signals
- Photostability (resist photobleaching)
- Biocompatibility

**Green Fluorescent Protein (GFP)**:
```
Φ_f ≈ 0.79 (wild-type)
Φ_f ≈ 0.64 (EGFP variant)
```

### 4. Photocatalysis

**TiO₂ Photocatalysis**:
```
Φ_degradation = (molecules degraded) / (photons absorbed)

For organic pollutants: Φ typically 0.01-0.10
```

**Water Splitting**:
```
Φ(H₂) = (H₂ molecules evolved) / (photons absorbed)

Best photocatalysts: Φ(H₂) ≈ 0.3-0.5 under optimal conditions
```

### 5. Optogenetics

**Channelrhodopsin**:
```
Φ_channel_opening ≈ 0.23

Number of ions per photon = ~10³-10⁴
(due to channel remaining open)
```

---

## Summary

### Key Points

1. **Quantum yield quantifies efficiency** of photochemical and photophysical processes
2. **Primary quantum yield** (Φ ≤ 1) refers to initial photochemical act
3. **Overall quantum yield** (Φ can >> 1) includes secondary reactions
4. **Measurement requires** careful actinometry or comparative methods
5. **Multiple factors** (wavelength, temperature, solvent, concentration) affect Φ
6. **Applications** span solar energy, medicine, imaging, and catalysis

### Comparison Table

| Process | Typical Φ Range | Mechanism |
|---------|----------------|-----------|
| Fluorescence | 0.01 - 1.0 | S₁ → S₀ + hν |
| Phosphorescence | 0.001 - 0.5 | T₁ → S₀ + hν |
| Photoisomerization | 0.1 - 0.7 | Conformational change |
| Photodissociation | 0.1 - 1.0 | Bond breaking |
| Chain reactions | 10² - 10⁶ | Radical propagation |
| Internal conversion | Variable | Non-radiative decay |

---

## References

### Primary Literature
1. Turro, N. J. (1978). *Modern Molecular Photochemistry*. Benjamin/Cummings.
2. Braslavsky, S. E. (2007). "Glossary of terms used in photochemistry." *Pure Appl. Chem.*, 79(3), 293-465.
3. Kuhn, H. J., Braslavsky, S. E., & Schmidt, R. (2004). "Chemical actinometry." *Pure Appl. Chem.*, 76(12), 2105-2146.

### Textbooks
4. Turro, N. J., Ramamurthy, V., & Scaiano, J. C. (2010). *Modern Molecular Photochemistry of Organic Molecules*. University Science Books.
5. Balzani, V., & Scandola, F. (1991). *Supramolecular Photochemistry*. Ellis Horwood.
6. Gilbert, A., & Baggott, J. (1991). *Essentials of Molecular Photochemistry*. Blackwell Scientific.

### Online Resources
7. IUPAC Photochemistry Glossary: https://goldbook.iupac.org/
8. Photochemistry Portal: https://photochemistry.wordpress.com/
9. Journal of Photochemistry and Photobiology: https://www.sciencedirect.com/journal/journal-of-photochemistry-and-photobiology-a-chemistry
10. Photochemical & Photobiological Sciences: https://pubs.rsc.org/en/journals/journalissues/pp

### Databases
11. NIST Webbook: https://webbook.nist.gov/ (Spectroscopic data)
12. PhotochemCAD Database: http://www.photochemcad.com/ (Spectral properties and quantum yields)

---

*For detailed experimental protocols and additional examples, please refer to the supplementary materials in the repository.*