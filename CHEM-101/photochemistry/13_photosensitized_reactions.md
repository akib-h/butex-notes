# Photosensitized Reactions

*Last Updated: January 7, 2026*

## Table of Contents
1. [Introduction](#introduction)
2. [Fundamental Principles](#fundamental-principles)
3. [Energy Transfer Mechanisms](#energy-transfer-mechanisms)
4. [Electron Transfer Mechanisms](#electron-transfer-mechanisms)
5. [Types of Photosensitized Reactions](#types-of-photosensitized-reactions)
6. [Photosensitizers](#photosensitizers)
7. [Applications](#applications)
8. [Mathematical Treatment](#mathematical-treatment)
9. [Examples](#examples)
10. [References](#references)

---

## Introduction

**Photosensitized reactions** are photochemical processes where light absorption by one molecule (the **photosensitizer**) leads to chemical transformation in another molecule (the **substrate**) through energy or electron transfer.

### Why Photosensitization?

1. **Extended Wavelength Range**: Allows reactions of molecules that don't absorb available light
2. **Selective Activation**: Can target specific substrates while leaving others intact
3. **Lower Energy Requirements**: Uses visible light instead of UV radiation
4. **Enhanced Efficiency**: Can increase quantum yields through triplet state chemistry
5. **Catalytic Process**: Photosensitizer is typically regenerated

### General Scheme

```
Sens + hν → ¹Sens* → ³Sens* (ISC)
³Sens* + Substrate → Sens + Substrate* (Energy Transfer)
OR
³Sens* + Substrate → Sens•± + Substrate•∓ (Electron Transfer)
```

---

## Fundamental Principles

### Energy Level Requirements

For effective photosensitization:

**Energy Transfer Requirement**:
```
E_T(Sens) ≥ E_T(Substrate)
```

The triplet energy of sensitizer must be equal to or greater than that of the substrate.

**Electron Transfer Requirement**:
```
For Oxidation: E_ox(Substrate) < E_ox(³Sens*)
For Reduction: E_red(Substrate) > E_red(³Sens*)
```

### Wigner Spin Conservation Rule

Energy transfer between molecules must conserve total spin:

```
Allowed: ³Sens* + ¹Substrate → Sens + ³Substrate*
Forbidden: ¹Sens* + ¹Substrate → Sens + ³Substrate*
```

Therefore, triplet photosensitization is most common.

### Key Characteristics

1. **Sens absorbed all the light**: Substrate may not absorb at irradiation wavelength
2. **Catalytic role**: Sensitizer is regenerated after each cycle
3. **Distance-dependent**: Requires molecular contact or proximity
4. **Oxygen effects**: Can compete with or participate in sensitization

---

## Energy Transfer Mechanisms

### 1. Dexter (Exchange) Energy Transfer

**Mechanism**: Simultaneous exchange of electrons between donor and acceptor

```
³D* + ¹A → D + ³A*
```

**Characteristics**:
- Requires orbital overlap (short-range, typically <10 Å)
- Follows exponential distance dependence
- Can transfer both singlet and triplet energy
- Spin-allowed for triplet-triplet transfer

**Rate Expression**:
```
k_ET = K × J × exp(-2r/L)
```

Where:
- K = orbital interaction factor
- J = spectral overlap integral
- r = donor-acceptor distance
- L = effective Bohr radius

### 2. Förster (Coulombic) Energy Transfer

**Mechanism**: Dipole-dipole coupling between donor and acceptor

```
¹D* + ¹A → D + ¹A*
```

**Characteristics**:
- Long-range (up to ~100 Å)
- r⁻⁶ distance dependence
- Only for singlet-singlet transfer
- Does not require orbital overlap

**Förster Equation**:
```
k_FRET = (1/τ_D) × (R₀/r)⁶
```

**Förster Radius (R₀)**:
```
R₀⁶ = (9000 × ln(10) × κ² × Φ_D × J) / (128π⁵ × N_A × n⁴)
```

Where:
- τ_D = donor lifetime
- R₀ = distance at which transfer efficiency = 50%
- κ² = orientation factor (typically 2/3 for random orientation)
- Φ_D = donor fluorescence quantum yield
- J = spectral overlap integral
- n = refractive index

**Spectral Overlap Integral**:
```
J = ∫₀^∞ F_D(λ) × ε_A(λ) × λ⁴ dλ
```

Where:
- F_D(λ) = normalized donor emission spectrum
- ε_A(λ) = acceptor molar extinction coefficient

### 3. Triplet-Triplet Energy Transfer (TTET)

Most common mechanism in photosensitization:

```
³Sens* + ¹Sub → Sens + ³Sub*
```

**Energy Requirement**:
```
ΔE = E_T(Sens) - E_T(Sub) ≥ 0
```

**Typical Rate Constants**:
- Diffusion-controlled: k ≈ 10⁹ - 10¹⁰ M⁻¹ s⁻¹
- Requires collision between molecules

**Example - Benzophenone Sensitization**:
```
Ph₂CO + hν → ³(Ph₂CO)*
³(Ph₂CO)* + Alkene → Ph₂CO + ³Alkene*
³Alkene* → Products
```

---

## Electron Transfer Mechanisms

### 1. Photoinduced Electron Transfer (PET)

Transfer of electron between excited sensitizer and ground-state substrate.

**Oxidative Quenching** (Substrate as electron acceptor):
```
³Sens* + Acceptor → Sens•⁺ + Acceptor•⁻
```

**Reductive Quenching** (Substrate as electron donor):
```
³Sens* + Donor → Sens•⁻ + Donor•⁺
```

### 2. Marcus Theory of Electron Transfer

Predicts electron transfer rate based on thermodynamics and reorganization energy.

**Free Energy Change**:
```
ΔG° = E_ox - E_red - E₀₀
```

Where:
- E_ox = oxidation potential of donor
- E_red = reduction potential of acceptor
- E₀₀ = excitation energy (0-0 transition)

**Rate Constant**:
```
k_ET = A × exp[-(ΔG‡)²/(4λk_BT)]
```

**Activation Energy**:
```
ΔG‡ = (λ + ΔG°)²/(4λ)
```

Where:
- λ = reorganization energy
- ΔG° = free energy change

**Marcus Regions**:
1. **Normal region** (ΔG° < λ): rate increases as ΔG° becomes more negative
2. **Optimal region** (ΔG° = -λ): maximum rate
3. **Inverted region** (ΔG° > λ): rate decreases as ΔG° becomes more negative

---

## Types of Photosensitized Reactions

### Type I Photosensitization

**Mechanism**: Involves electron or hydrogen atom transfer

```
Sens + hν → ¹Sens* → ³Sens*
³Sens* + Substrate → Sens•± + Substrate•∓
```

**In Presence of O₂**:
```
Substrate•⁻ + O₂ → Substrate + O₂•⁻ (superoxide)
O₂•⁻ + H⁺ → HO₂•
2HO₂• → H₂O₂ + O₂
H₂O₂ + Fe²⁺ → OH• + OH⁻ + Fe³⁺ (Fenton reaction)
```

**Key Features**:
- Generates radical species (Sens•±, Substrate•∓)
- Forms reactive oxygen species (ROS): O₂•⁻, HO₂•, OH•
- Substrate-dependent mechanism
- Important in photodynamic therapy

### Type II Photosensitization

**Mechanism**: Involves singlet oxygen (¹O₂) generation

```
Sens + hν → ¹Sens* → ³Sens*
³Sens* + ³O₂ → Sens + ¹O₂*
¹O₂* + Substrate → Oxidized Products
```

**Singlet Oxygen Properties**:
- Electronic configuration: (πg*)²↑↓ (¹Δg state)
- Energy: ~94 kJ/mol above ground state (³Σg⁻)
- Lifetime: 3-4 μs in water, up to ms in organic solvents
- Highly reactive electrophile

**Typical Reactions of ¹O₂**:
1. **Ene reaction** with alkenes
2. **Cycloaddition** [2+2] and [4+2]
3. **Oxidation** of sulfides, amines
4. **Addition** to conjugated dienes

**Example**:
```
¹O₂ + R¹R²C=CR³R⁴ → R¹R²C-CR³R⁴-OOH (allylic hydroperoxide)
```

### Comparison: Type I vs Type II

| Feature | Type I | Type II |
|---------|--------|---------|
| Mechanism | Electron/H transfer | Energy transfer |
| Primary Species | Radicals (•+, •−) | Singlet oxygen (¹O₂) |
| Oxygen Requirement | Optional (enhanced) | Essential |
| Distance | Contact required | Can be distant |
| Quenching | Radical scavengers | ¹O₂ quenchers (azide, β-carotene) |
| pH Sensitivity | Often significant | Minimal |
| Applications | PDT, degradation | Oxidation, synthesis, PDT |

---

## Photosensitizers

### Properties of Effective Photosensitizers

1. **Strong absorption** in desired wavelength region
2. **High intersystem crossing quantum yield** (Φ_ISC > 0.5)
3. **Long triplet lifetime** (>μs range)
4. **Appropriate triplet energy** for target reaction
5. **Chemical stability** (resist photodegradation)
6. **Solubility** in reaction medium

### Classification by Structure

#### 1. Aromatic Ketones

**Benzophenone (Ph₂CO)**:
- E_T = 289 kJ/mol (69 kcal/mol)
- λ_max = 350 nm
- Φ_ISC ≈ 1.0
- τ_T ≈ 6 μs (benzene)
- Used for alkene triplet sensitization

**Acetophenone Derivatives**:
- E_T = 310-330 kJ/mol
- Photoreduction, hydrogen abstraction

#### 2. Polycyclic Aromatics

**Anthracene**:
- E_T = 178 kJ/mol (42.5 kcal/mol)
- For low-energy triplet substrates
- Φ_ISC = 0.70

**Naphthalene**:
- E_T = 255 kJ/mol (61 kcal/mol)
- τ_T = 2.3 s in rigid glass

#### 3. Transition Metal Complexes

**Ru(bpy)₃²⁺**:
- Visible light absorption (λ_max = 452 nm)
- ³MLCT excited state
- E_T ≈ 210 kJ/mol
- Long τ (0.6 μs in aerated water)
- Photoredox catalysis

**Iridium Complexes** [fac-Ir(ppy)₃]:
- Efficient visible light absorber
- High Φ_ISC (≈ 1.0)
- Used in energy transfer photocatalysis

#### 4. Porphyrins and Phthalocyanines

**Porphyrins** (e.g., Tetraphenylporphyrin):
- Strong absorption (Soret band ~420 nm, Q bands 500-700 nm)
- High Φ_ISC (>0.6)
- Excellent ¹O₂ generators (Φ_Δ ~ 0.6-0.7)
- Used in photodynamic therapy

**Phthalocyanines**:
- Red/near-IR absorption (650-850 nm)
- High extinction coefficients
- Φ_Δ ≈ 0.4-0.6
- Better tissue penetration for PDT

#### 5. Rose Bengal and Eosin

**Rose Bengal**:
- λ_max = 549 nm
- Φ_Δ ≈ 0.75 (excellent ¹O₂ generator)
- Water-soluble
- Heavy atom effect from iodine atoms

**Eosin Y**:
- Visible light sensitizer (λ_max = 539 nm)
- Photoredox catalysis
- Water-soluble

#### 6. Methylene Blue

- Absorption: 600-700 nm
- Φ_Δ ≈ 0.52
- Medical applications (antimicrobial, PDT)
- Cationic dye

### Triplet Energy Scale

Important triplet energies for reference:

```
Benzene: 353 kJ/mol (84 kcal/mol)
Benzophenone: 289 kJ/mol (69 kcal/mol)
Naphthalene: 255 kJ/mol (61 kcal/mol)
Anthracene: 178 kJ/mol (42.5 kcal/mol)
Tetracene: 125 kJ/mol (30 kcal/mol)
```

---

## Applications

### 1. Photodynamic Therapy (PDT)

Treatment of cancer and infections using photosensitizers:

**Mechanism**:
```
1. Photosensitizer accumulates in target tissue
2. Light irradiation → ³Sens*
3. Type I/II reactions → ROS generation
4. Cell death (apoptosis, necrosis)
```

**Approved Photosensitizers**:
- Photofrin (hematoporphyrin derivative)
- Foscan (meta-tetrahydroxyphenylchlorin)
- Levulan (5-aminolevulinic acid → protoporphyrin IX)
- Visudyne (verteporfin)

**Advantages**:
- Spatially selective (only irradiated area affected)
- Minimal systemic toxicity
- Can be repeated
- Preserves healthy tissue

### 2. Organic Synthesis

**[2+2] Photocycloadditions**:
```
³Sens* + 2 Alkenes → Sens + Cyclobutane
```

Example: Synthesis of cyclobutane derivatives

**Photoredox Catalysis**:
- C-H activation
- Cross-coupling reactions
- Polymerization (PET-RAFT)
- Fluorination, trifluoromethylation

**Oxidation Reactions**:
```
¹O₂ + Substrate → Oxygenated Products
```

Examples:
- Hydroxylation
- Epoxidation
- Oxygenation of sulfides to sulfoxides

### 3. Environmental Applications

**Water Treatment**:
```
Photosensitizer + hν → ROS → Pollutant Degradation
```

- Degradation of pesticides
- Removal of pharmaceuticals
- Disinfection

**Self-Cleaning Surfaces**:
- Photosensitizer-coated materials
- Antibacterial surfaces
- Photocatalytic coatings

### 4. Solar Energy Conversion

**Dye-Sensitized Solar Cells (DSSC)**:
```
Dye + hν → Dye*
Dye* + TiO₂ → Dye⁺ + e⁻(TiO₂)
```

**Artificial Photosynthesis**:
- Water splitting
- CO₂ reduction
- Hydrogen generation

### 5. Photopolymerization

**PET-RAFT Polymerization**:
```
Photocatalyst + hν → PC*
PC* + RAFT agent → Controlled polymerization
```

**Applications**:
- 3D printing
- Coatings
- Dental materials

### 6. Imaging and Diagnostics

**Fluorescence Imaging**:
- Upconversion via triplet-triplet annihilation (TTA-UC)
- Time-resolved imaging using phosphorescence

**Photoacoustic Imaging**:
- NIR photosensitizers
- Deep tissue imaging

---

## Mathematical Treatment

### Stern-Volmer Kinetics

For photosensitized reactions:

**Quenching of Excited State**:
```
Sens + hν → ³Sens*
³Sens* + Q → Sens + Q* (or products)
³Sens* → Sens (decay)
```

**Stern-Volmer Equation**:
```
τ₀/τ = 1 + k_q × τ₀ × [Q]
τ₀/τ = 1 + K_SV × [Q]
```

**For Quantum Yield**:
```
Φ₀/Φ = 1 + K_SV × [Q]
```

**Determination of k_q**:

Plot τ₀/τ vs [Q]:
- Slope = K_SV = k_q × τ₀
- If τ₀ is known → k_q can be calculated

**Example Calculation**:

Given:
- τ₀ = 1 × 10⁻⁶ s
- At [Q] = 0.01 M, τ = 5 × 10⁻⁷ s

```
τ₀/τ = 1 + K_SV[Q]
(1×10⁻⁶)/(5×10⁻⁷) = 1 + K_SV(0.01)
2 = 1 + K_SV(0.01)
K_SV = 100 M⁻¹

k_q = K_SV/τ₀ = 100/(1×10⁻⁶) = 1×10⁸ M⁻¹ s⁻¹
```

### Energy Transfer Efficiency

**Förster Efficiency**:
```
E_FRET = R₀⁶/(R₀⁶ + r⁶)
```

**Dexter Efficiency**:
```
E_Dexter = 1/(1 + τ_D/τ_ET)

where τ_ET = 1/(k_ET[A])
```

### Quantum Yield of Sensitization

```
Φ_sens = Φ_ISC × Φ_ET × Φ_rxn
```

Where:
- Φ_ISC = intersystem crossing quantum yield of sensitizer
- Φ_ET = energy/electron transfer efficiency
- Φ_rxn = quantum yield of substrate reaction

---

## Examples

### Example 1: Triplet Energy Transfer - Acetone Sensitization

**Problem**: Acetone (E_T = 332 kJ/mol) is used to sensitize the isomerization of trans-but-2-ene (E_T = 251 kJ/mol). Is this feasible?

**Solution**:

Energy requirement: E_T(Sens) ≥ E_T(Substrate)

```
E_T(Acetone) = 332 kJ/mol
E_T(but-2-ene) = 251 kJ/mol

332 > 251 ✓

Energy transfer is thermodynamically favorable.
```

**Mechanism**:
```
CH₃COCH₃ + hν → ³(CH₃COCH₃)*
³(CH₃COCH₃)* + trans-C₄H₈ → CH₃COCH₃ + ³(trans-C₄H₈)*
³(trans-C₄H₈)* → cis-C₄H₈
```

### Example 2: Singlet Oxygen Generation

**Problem**: Calculate the rate of singlet oxygen production when 1 mM Rose Bengal is irradiated with I = 1 × 10⁻⁶ Einstein/s, given Φ_Δ = 0.75.

**Solution**:

```
Rate of photon absorption = I (assuming all light absorbed)
Rate of ¹O₂ generation = Φ_Δ × I

Rate = 0.75 × 1 × 10⁻⁶ Einstein/s
Rate = 7.5 × 10⁻⁷ mol/s

Number of ¹O₂ molecules = 7.5×10⁻⁷ × 6.022×10²³
= 4.52 × 10¹⁷ molecules/s
```

### Example 3: Stern-Volmer Analysis

**Problem**: The fluorescence lifetime of a photosensitizer is τ₀ = 5 ns. In the presence of 0.1 M quencher, τ = 2 ns. Calculate k_q.

**Solution**:

```
K_SV = (τ₀/τ) - 1 = (5/2) - 1 = 1.5

K_SV = k_q × τ₀
k_q = K_SV/τ₀ = 1.5/(5×10⁻⁹) = 3×10⁸ M⁻¹ s⁻¹

At [Q] = 0.1 M:
k_q = 1.5/(0.1 × 5×10⁻⁹) = 3×10⁹ M⁻¹ s⁻¹
```

This is close to diffusion-controlled limit (~10¹⁰ M⁻¹ s⁻¹ in water).

### Example 4: Photoredox Catalysis

**Reaction**: Oxidation of benzylamine using Ru(bpy)₃²⁺

**Mechanism**:
```
Ru(bpy)₃²⁺ + hν → *Ru(bpy)₃²⁺ → ³Ru(bpy)₃²⁺
³Ru(bpy)₃²⁺ + PhCH₂NH₂ → Ru(bpy)₃⁺ + PhCH₂NH₂•⁺
PhCH₂NH₂•⁺ → PhCH=NH₂⁺ + H⁺ + e⁻
Ru(bpy)₃⁺ + O₂ → Ru(bpy)₃²⁺ + O₂•⁻
PhCH=NH₂⁺ + H₂O → PhCHO + NH₃
```

Net: PhCH₂NH₂ + O₂ + hν → PhCHO + NH₃

### Example 5: Förster Distance Calculation

**Problem**: Calculate R₀ for FRET between fluorescein (donor) and rhodamine (acceptor).

**Given**:
- Φ_D = 0.90
- n = 1.33 (water)
- κ² = 2/3 (random orientation)
- J = 3 × 10⁻¹³ M⁻¹ cm³

**Solution**:

```
R₀⁶ = (9000 × ln(10) × κ² × Φ_D × J)/(128π⁵ × N_A × n⁴)

R₀⁶ = (9000 × 2.303 × 0.667 × 0.90 × 3×10⁻¹³)/(128π⁵ × 6.022×10²³ × 1.77)

R₀⁶ = (4.15 × 10⁻⁹)/(1.37 × 10²⁶) = 3.03 × 10⁻³⁵ cm⁶

R₀ = (3.03 × 10⁻³⁵)^(1/6) = 5.5 × 10⁻⁶ cm = 55 Å
```

---

## Summary

### Key Concepts

1. **Photosensitization** enables reactions of non-absorbing substrates
2. **Energy transfer** (Dexter and Förster) is distance-dependent
3. **Triplet states** are crucial for most photosensitized reactions
4. **Type I** (electron transfer) vs **Type II** (singlet oxygen) mechanisms
5. **Applications** span medicine, synthesis, energy, and environment

### Selection Criteria for Photosensitizers

| Application | Key Requirements | Examples |
|-------------|-----------------|----------|
| PDT | High Φ_Δ, red absorption, biocompatible | Porphyrins, phthalocyanines |
| Organic synthesis | High E_T, stable, appropriate λ | Benzophenone, Ru(bpy)₃²⁺ |
| Photoredox | Visible absorption, reversible redox | Ir complexes, Eosin Y |
| Solar cells | Broad absorption, long-lived excited state | Ru dyes, organic dyes |

---

## References

### Primary Literature
1. Turro, N. J., Ramamurthy, V., & Scaiano, J. C. (2010). *Modern Molecular Photochemistry of Organic Molecules*. University Science Books.
2. Braslavsky, S. E., et al. (2011). "Photochemical &amp; photobiological sciences." *Photochem. Photobiol. Sci.*, 10, 1515-1517.

### Recent Research (2024)
3. Baptista, M. S., et al. classify photosensitization reactions into four processes: oxygen-dependent (type I and type II) and oxygen-independent mechanisms including triplet-triplet energy transfer and photoadduct formation
4. Recent advances show photodynamic therapy uses photosensitizers that upon light exposure initiate photochemical reactions leading to cell death through Type I mechanisms generating radical species or Type II mechanisms producing singlet oxygen

### Textbooks
5. Balzani, V., & Scandola, F. (1991). *Supramolecular Photochemistry*. Ellis Horwood.
6. Rohatgi-Mukherjee, K. K. (2006). *Fundamentals of Photochemistry*. New Age International.
7. Kalyanasundaram, K. (1992). *Photochemistry of Polypyridine and Porphyrin Complexes*. Academic Press.

### Online Resources
8. ACS Photochemistry: https://pubs.acs.org/journal/acscatal
9. Photochemistry and Photobiology Journal: https://onlinelibrary.wiley.com/journal/17511097
10. IUPAC Photochemistry Guidelines: https://iupac.org/what-we-do/divisions/division-details/photochemistry/
11. PDT Database: https://www.photobiology.info/

### Review Articles
12. Romero, N. A., & Nicewicz, D. A. (2016). "Organic photoredox catalysis." *Chem. Rev.*, 116, 10075-10166.
13. Zhao, J., Wu, W., Sun, J., & Guo, S. (2013). "Triplet photosensitizers." *Chem. Soc. Rev.*, 42, 5323-5351.

---

*For experimental protocols on photosensitization techniques, refer to the laboratory manual in the supplementary materials.*