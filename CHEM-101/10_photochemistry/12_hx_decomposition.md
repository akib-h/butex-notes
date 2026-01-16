# Photochemical Decomposition of Hydrogen Halides

*Last Updated: January 7, 2026*

## Table of Contents
1. [Introduction](#introduction)
2. [Thermodynamic Considerations](#thermodynamic-considerations)
3. [Photochemical Mechanisms](#photochemical-mechanisms)
4. [Quantum Yield Analysis](#quantum-yield-analysis)
5. [Kinetic Treatment](#kinetic-treatment)
6. [Comparison of HCl, HBr, and HI](#comparison-of-hcl-hbr-and-hi)
7. [Experimental Studies](#experimental-studies)
8. [Applications](#applications)
9. [References](#references)

---

## Introduction

The photochemical decomposition of hydrogen halides (HX, where X = Cl, Br, I) represents classic examples of **photochemical chain reactions** with quantum yields significantly greater than unity. These reactions demonstrate key principles of photochemistry including primary photochemical acts, chain propagation, and termination mechanisms.

### General Reaction

```
2HX + hν → H₂ + X₂
```

Where X = Cl, Br, or I

### Historical Significance

- Early studies by **Nernst and Bodenstein** (1907) on HBr decomposition
- **Chapman and MacMahon** (1910) studied HI photodecomposition
- Established the concept of **photochemical chain reactions**
- Provided experimental validation of **quantum theory** in chemistry

---

## Thermodynamic Considerations

### Bond Dissociation Energies

The strength of H-X bonds decreases down the halogen group:

| Compound | Bond Energy (kJ/mol) | Bond Energy (kcal/mol) | Wavelength for Dissociation (nm) |
|----------|---------------------|------------------------|----------------------------------|
| HF | 569 | 136 | <210 |
| HCl | 431 | 103 | <277 |
| HBr | 366 | 87.5 | <327 |
| HI | 298 | 71.3 | <401 |

### Energy Calculation

Energy required for bond dissociation:

```
E = hc/λ = hν

λ_threshold = hc/E_bond
```

**Example for HI**:
```
E_bond = 298 kJ/mol = 298,000 J/mol

For 1 molecule:
E = 298,000 / (6.022 × 10²³) = 4.95 × 10⁻¹⁹ J

λ = hc/E = (6.626 × 10⁻³⁴ × 3.0 × 10⁸) / (4.95 × 10⁻¹⁹)
λ = 4.01 × 10⁻⁷ m = 401 nm
```

### Thermodynamic Feasibility

Gibbs free energy for decomposition at 298 K:

```
2HX(g) → H₂(g) + X₂(g)
```

| Reaction | ΔG° (kJ/mol) | Spontaneous? |
|----------|--------------|--------------|
| 2HF → H₂ + F₂ | +542 | No (highly unfavorable) |
| 2HCl → H₂ + Cl₂ | +191 | No |
| 2HBr → H₂ + Br₂ | +107 | No |
| 2HI → H₂ + I₂ | +3.2 | Nearly thermoneutral |

**Conclusion**: Photochemical energy input required for all hydrogen halides, but HI is most easily decomposed thermodynamically.

---

## Photochemical Mechanisms

### 1. Hydrogen Iodide (HI) Decomposition

#### Overall Reaction
```
2HI + hν → H₂ + I₂
```

#### Detailed Mechanism

**Initiation** (Primary Photochemical Act):
```
HI + hν → H· + I·                     Φ_primary = 1 per HI molecule
                                      (2 radicals per photon)
```

**Chain Propagation**:
```
H· + HI → H₂ + I·                     k₁ (fast)
I· + HI → I₂ + H·                     k₂ (slower)
```

**Alternative Propagation**:
```
I· + I· + M → I₂ + M                  k₃ (three-body collision)
```

**Chain Termination**:
```
H· + I· + M → HI + M                  k₄
I· + I· + M → I₂ + M                  k₅
H· + H· + M → H₂ + M                  k₆
Wall recombination of radicals         k_wall
```

#### Quantum Yield

```
Φ_overall = 2 to 3 (typically)
```

**Explanation**:
- Primary act generates 2 radicals
- Short chain length due to efficient termination
- Relatively low quantum yield compared to HCl

### 2. Hydrogen Bromide (HBr) Decomposition

#### Overall Reaction
```
2HBr + hν → H₂ + Br₂
```

#### Mechanism

**Initiation**:
```
HBr + hν → H· + Br·
```

**Propagation**:
```
H· + HBr → H₂ + Br·                   (fast, exothermic)
Br· + HBr → Br₂ + H·                  (slow, rate-determining)
```

**Termination**:
```
H· + Br· → HBr
Br· + Br· → Br₂
```

#### Quantum Yield

```
Φ_overall = 10 to 100
```

Moderate chain length due to:
- Faster propagation than HI
- Competitive termination reactions

### 3. Hydrogen Chloride (HCl) Decomposition

#### Overall Reaction
```
2HCl + hν → H₂ + Cl₂
```

#### Mechanism

**Initiation**:
```
HCl + hν → H· + Cl·
```

**Propagation**:
```
H· + HCl → H₂ + Cl·                   (very fast)
Cl· + HCl → Cl₂ + H·                  (very fast)
```

**Termination**:
```
H· + Cl· → HCl
Cl· + Cl· → Cl₂
```

#### Quantum Yield

```
Φ_overall = 10⁴ to 10⁶ (up to 1 million!)
```

Extremely long chains because:
- Very fast propagation steps
- Low termination rate
- High activation barriers for reverse reactions

### 4. Hydrogen-Chlorine Photochemical Synthesis

This is the reverse reaction, also photochemically initiated:

```
H₂ + Cl₂ + hν → 2HCl
```

**Initiation**:
```
Cl₂ + hν → 2Cl·                       (λ < 500 nm)
```

**Propagation**:
```
Cl· + H₂ → HCl + H·                   ΔH = -4 kJ/mol (slightly exothermic)
H· + Cl₂ → HCl + Cl·                  ΔH = -183 kJ/mol (highly exothermic)
```

**Quantum Yield**:
```
Φ = 10⁴ to 10⁶
```

This reaction is explosively fast under sunlight!

---

## Quantum Yield Analysis

### Mathematical Treatment

For a chain reaction, the overall quantum yield:

```
Φ_overall = (Rate of product formation) / (Rate of photon absorption)
```

### Chain Length

Define **chain length** (v):

```
v = (Number of propagation cycles) / (Number of initiation events)
```

For HX decomposition:

```
Φ_overall = 2 × v

where factor of 2 accounts for 2 HX molecules decomposing per cycle
```

### Derivation of Quantum Yield

**Initiation rate**:
```
R_i = I_abs × Φ_primary
```

Where I_abs = photons absorbed per unit time

**Propagation rate** (assuming steady state):
```
R_p = v × R_i
```

**Termination rate** (second order in radical concentration):
```
R_t = k_t[R·]²
```

**Steady state condition**:
```
R_i = R_t

I_abs × Φ_primary = k_t[R·]²

[R·] = (I_abs × Φ_primary / k_t)^(1/2)
```

**Overall rate of HX decomposition**:
```
-d[HX]/dt = 2 × k_p × [R·] × [HX]

Φ_overall = (-d[HX]/dt) / I_abs

Φ_overall = 2 × k_p × [HX] × (Φ_primary / (k_t × I_abs))^(1/2)
```

### Example Calculation

**Problem**: Calculate the quantum yield for HI decomposition if:
- Light intensity: I₀ = 1.0 × 10⁻⁶ Einstein/s
- [HI] = 0.1 M
- k_p = 1.0 × 10⁸ L mol⁻¹ s⁻¹
- k_t = 1.0 × 10⁹ L mol⁻¹ s⁻¹
- Φ_primary = 1

**Solution**:
```
Φ_overall = 2 × k_p × [HI] × (Φ_primary / (k_t × I₀))^(1/2)

Φ_overall = 2 × (1.0 × 10⁸) × 0.1 × (1 / (1.0 × 10⁹ × 1.0 × 10⁻⁶))^(1/2)

Φ_overall = 2 × 10⁷ × (1 / 10³)^(1/2)

Φ_overall = 2 × 10⁷ × (10⁻³)^(1/2) = 2 × 10⁷ × 0.0316

Φ_overall ≈ 6.3 × 10⁵
```

This high value indicates a long chain reaction.

---

## Kinetic Treatment

### Rate Law Derivation

For the generalized mechanism:

**Step 1**: Initiation
```
HX + hν → H· + X·           Rate = I_abs
```

**Step 2**: Propagation
```
H· + HX → H₂ + X·           Rate = k₁[H·][HX]
X· + HX → X₂ + H·           Rate = k₂[X·][HX]
```

**Step 3**: Termination
```
H· + X· → HX                Rate = k_t[H·][X·]
```

### Steady-State Approximation

Assume radical concentrations remain constant:

```
d[H·]/dt = I_abs + k₂[X·][HX] - k₁[H·][HX] - k_t[H·][X·] = 0
d[X·]/dt = I_abs + k₁[H·][HX] - k₂[X·][HX] - k_t[H·][X·] = 0
```

Adding these equations:
```
2I_abs - 2k_t[H·][X·] = 0

[H·][X·] = I_abs / k_t
```

### Overall Rate

```
Rate = -d[HX]/dt = k₁[H·][HX] + k₂[X·][HX]

For equal radical concentrations: [H·] = [X·] = (I_abs/k_t)^(1/2)

Rate = (k₁ + k₂) × [HX] × (I_abs/k_t)^(1/2)
```

### Temperature Dependence

```
k = A × exp(-E_a/RT)
```

**Activation energies**:
- HI propagation: E_a ≈ 10-20 kJ/mol (low barrier)
- HBr propagation: E_a ≈ 20-40 kJ/mol
- HCl propagation: E_a ≈ 5-15 kJ/mol (very low)

Lower E_a → faster propagation → higher quantum yield

---

## Comparison of HCl, HBr, and HI

### Summary Table

| Property | HF | HCl | HBr | HI |
|----------|-----|------|------|------|
| Bond Energy (kJ/mol) | 569 | 431 | 366 | 298 |
| λ_threshold (nm) | <210 | <277 | <327 | <401 |
| Typical Φ_overall | N/A* | 10⁴-10⁶ | 10-100 | 2-3 |
| Chain Length | N/A | Very long | Moderate | Short |
| Propagation Rate | N/A | Very fast | Moderate | Slow |
| ΔG° (kJ/mol) | +542 | +191 | +107 | +3.2 |

*HF not typically studied due to extreme thermodynamic unfavorability and handling hazards

### Trends

1. **Bond Strength**: Decreases down the group (F > Cl > Br > I)
   - Easier to dissociate with longer wavelengths

2. **Quantum Yield**: Decreases down the group (Cl >> Br > I)
   - Despite easier dissociation, HI has shorter chains
   - Due to higher termination rates

3. **Thermodynamics**: More favorable down the group
   - HI nearly thermoneutral
   - HF highly unfavorable

4. **Chain Length**: Cl > Br > I
   - HCl: Extremely long chains (explosive)
   - HI: Short chains (stable)

### Why Does HCl Have Higher Φ Than HI?

Despite HI being easier to dissociate:

**HCl advantages**:
- Very fast propagation (low E_a)
- Highly exothermic propagation steps
- Low probability of reverse reactions
- Efficient radical transfer

**HI disadvantages**:
- Slower propagation steps
- Higher termination probability
- Weaker driving force
- Easier radical recombination (I· larger, more polarizable)

---

## Experimental Studies

### 1. Absorption Spectrum Measurements

Measure the absorption spectrum to determine:
- Wavelengths that can initiate photodecomposition
- Extinction coefficients (ε)

**HI Absorption**:
- Strong absorption: 220-280 nm
- Weaker absorption: 280-400 nm
- Onset of photodecomposition: λ < 400 nm

### 2. Product Analysis

**Techniques**:
- Gas chromatography (GC) for H₂ and X₂ quantification
- UV-Vis spectroscopy for X₂ formation
- Pressure measurements in closed systems

**Expected Stoichiometry**:
```
2HX → H₂ + X₂

Mole ratio H₂:X₂ = 1:1
```

### 3. Quantum Yield Determination

**Method 1**: Chemical Actinometry
- Use ferrioxalate actinometer to measure light intensity
- Measure HX decomposed
- Calculate Φ

**Procedure**:
```
1. Irradiate HX sample with known I₀
2. Measure [HX] before and after (spectroscopy or titration)
3. Calculate: Φ = Δn(HX) / (2 × n(photons))
   (Factor of 2 because 2 HX per photon ideally)
```

**Method 2**: Time-Resolved Spectroscopy
- Monitor radical formation using flash photolysis
- Measure chain length directly
- Calculate quantum yield from kinetics

### 4. Temperature Dependence Studies

Plot ln(Rate) vs 1/T (Arrhenius plot):

```
ln(Rate) = ln(A) - E_a/RT

Slope = -E_a/R
```

**Observations**:
- HCl: Weak temperature dependence (low E_a)
- HI: Stronger temperature dependence (higher E_a)

### 5. Pressure Effects

At higher pressures:
- Increased three-body collisions
- More efficient termination
- Lower quantum yields

```
Φ ∝ P^(-1/2) for three-body termination
```

---

## Applications

### 1. Photochemical Hydrogen Production

Photolyzing HI as part of thermochemical water-splitting cycles:

```
Thermal: SO₂ + I₂ + 2H₂O → H₂SO₄ + 2HI    (120°C)
Photochemical: 2HI + hν → H₂ + I₂          (ambient T)
Thermal: H₂SO₄ → SO₂ + H₂O + ½O₂         (850°C)
---------------------------------------------------
Net: H₂O + hν → H₂ + ½O₂
```

**Advantages**:
- Lower thermal energy required than pure thermal cycles
- Hybrid photochemical-thermal process

### 2. Semiconductor Etching

HCl photodecomposition used in:
- Silicon etching
- III-V semiconductor processing
- Photolithography

### 3. Atmospheric Chemistry

**Hydrogen chloride** in stratosphere:
```
HCl + hν → H· + Cl·                   (λ < 277 nm)
Cl· + O₃ → ClO· + O₂                  (ozone depletion)
```

Important for understanding:
- Chlorine activation in polar stratosphere
- Ozone hole formation

### 4. Isotope Separation

Photochemical methods for separating hydrogen isotopes:

```
HD + hν → H· + D·
```

Deuterium enrichment in special applications.

### 5. Radical Chemistry Studies

HX photolysis serves as clean source of radicals:
- Mechanistic studies
- Reaction kinetics
- Spectroscopic characterization

---

## Worked Examples

### Example 1: Wavelength Requirement

**Problem**: What is the maximum wavelength that can dissociate HBr?

**Given**: D(H-Br) = 366 kJ/mol

**Solution**:
```
E_photon = hc/λ must equal or exceed bond energy

λ_max = hc/E

E per molecule = 366,000 / (6.022 × 10²³) = 6.08 × 10⁻¹⁹ J

λ_max = (6.626 × 10⁻³⁴ × 3.0 × 10⁸) / (6.08 × 10⁻¹⁹)
λ_max = 327 nm (UV region)
```

### Example 2: Quantum Yield from Experimental Data

**Problem**: 0.1 moles of HI is irradiated with 1.0 × 10⁻³ Einstein of 365 nm light. After irradiation, 0.005 moles of H₂ is produced. Calculate Φ.

**Solution**:
```
HI decomposed = 2 × moles of H₂ = 2 × 0.005 = 0.01 moles

Φ = (moles HI decomposed) / (2 × moles photons absorbed)
Φ = 0.01 / (2 × 1.0 × 10⁻³)
Φ = 0.01 / 0.002 = 5

Or simply: Φ = (moles H₂) / (moles photons) = 0.005 / 0.001 = 5
```

This indicates a small chain reaction with chain length ≈ 2.5.

### Example 3: Chain Length Calculation

**Problem**: If Φ_overall = 100 for HBr decomposition, calculate the average chain length.

**Solution**:
```
Φ_overall = 2 × v

where v = chain length

v = Φ_overall / 2 = 100 / 2 = 50

Each photon initiates a chain that undergoes 50 propagation cycles on average.
```

---

## Summary

### Key Takeaways

1. **Photochemical decomposition** of HX demonstrates chain reaction mechanisms
2. **Quantum yields** vary dramatically: HCl (10⁴-10⁶) >> HBr (10-100) > HI (2-3)
3. **Bond strength** and **reaction energetics** determine photochemical behavior
4. **Chain length** depends on balance between propagation and termination rates
5. **Applications** span hydrogen production, semiconductor processing, and atmospheric chemistry

### Mechanism Summary

```
Initiation:     HX + hν → H· + X·
Propagation:    H· + HX → H₂ + X·
                X· + HX → X₂ + H·
Termination:    H· + X· → HX
                X· + X· → X₂
```

---

## References

### Classical Papers
1. Nernst, W., & Bodenstein, M. (1907). "Photochemical decomposition of hydrogen bromide." *Z. Elektrochem.*, 13, 527.
2. Chapman, D. L., & MacMahon, P. C. (1910). "Photochemical decomposition of hydrogen iodide." *J. Chem. Soc.*, 97, 844.

### Textbooks
3. Turro, N. J., Ramamurthy, V., & Scaiano, J. C. (2010). *Modern Molecular Photochemistry of Organic Molecules*. University Science Books.
4. Wayne, R. P. (1988). *Principles and Applications of Photochemistry*. Oxford University Press.
5. Rohatgi-Mukherjee, K. K. (2006). *Fundamentals of Photochemistry*. New Age International.

### Research Articles
6. Baulch, D. L., et al. (2005). "Evaluated kinetic data for combustion modeling: Supplement II." *J. Phys. Chem. Ref. Data*, 34, 757-1397.
7. Sullivan, J. H. (1959). "Photochemical decomposition of hydrogen iodide." *J. Chem. Phys.*, 30, 1292-1295.

### Online Resources
8. NIST Chemical Kinetics Database: https://kinetics.nist.gov/
9. IUPAC Photochemistry: https://iupac.org/what-we-do/divisions/division-details/photochemistry/
10. JPL Chemical Kinetics Database: https://jpldataeval.jpl.nasa.gov/

---

*For experimental protocols and safety information, consult the supplementary documents.*