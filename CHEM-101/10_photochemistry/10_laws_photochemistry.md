# Laws of Photochemistry

*Last Updated: January 7, 2026*

## Table of Contents
1. [Introduction](#introduction)
2. [Grotthuss-Draper Law](#grotthuss-draper-law)
3. [Stark-Einstein Law](#stark-einstein-law)
4. [Lambert-Beer Law](#lambert-beer-law)
5. [Mathematical Examples](#mathematical-examples)
6. [Applications](#applications)
7. [References](#references)

---

## Introduction

Photochemistry is the branch of chemistry concerned with the chemical effects of light. Three fundamental laws govern photochemical processes, establishing the relationship between light absorption and chemical transformation.

---

## Grotthuss-Draper Law (First Law of Photochemistry)

### Statement
**Only the light that is absorbed by a molecule can bring about a photochemical change.**

### Historical Context
- Formulated independently by Theodor Grotthuss (1817) and John William Draper (1843)
- Also known as the **Principle of Photochemical Activation**

### Explanation
Light that is:
- **Transmitted** through a substance → No chemical effect
- **Reflected** from a substance → No chemical effect  
- **Absorbed** by a substance → Potential for chemical reaction

### Mathematical Representation

```
I_absorbed = I_incident - I_transmitted - I_reflected
```

Where:
- I_absorbed = intensity of absorbed light
- I_incident = intensity of incident light
- I_transmitted = intensity of transmitted light
- I_reflected = intensity of reflected light

### Example
When chlorine gas (Cl₂) is exposed to sunlight in the presence of hydrogen:
- **UV-visible light absorbed** → Photochemical reaction occurs (H₂ + Cl₂ → 2HCl)
- **Infrared light** → Passes through without causing reaction (not absorbed at these wavelengths)

### Practical Implications
1. **Wavelength Selection**: Only specific wavelengths that match electronic transitions cause reactions
2. **Photochemical Yield**: Depends on absorption spectrum of reactants
3. **Photosensitizers**: Used to absorb light and transfer energy to non-absorbing molecules

---

## Stark-Einstein Law (Second Law of Photochemistry)

### Statement
**Each molecule that takes part in a photochemical reaction absorbs one quantum (photon) of radiation causing the reaction.**

### Historical Context
- Proposed by Johannes Stark (1908) and Albert Einstein (1912)
- Also called the **Law of Photochemical Equivalence** or **Einstein's Law of Photochemical Activation**

### Quantum Mechanical Basis

The energy of one photon is given by:

```
E = hν = hc/λ
```

Where:
- E = energy of one photon (Joules)
- h = Planck's constant (6.626 × 10⁻³⁴ J·s)
- ν = frequency of light (Hz)
- c = speed of light (3.0 × 10⁸ m/s)
- λ = wavelength (m)

### One Photon - One Molecule Relationship

For N molecules activated:
```
N photons are absorbed
```

Energy absorbed by one mole of molecules (Einstein per mole):
```
E_molar = N_A × hν = N_A × hc/λ
```

Where N_A = Avogadro's number (6.022 × 10²³ mol⁻¹)

### Example Calculation

**Problem**: Calculate the energy absorbed by one mole of molecules when irradiated with light of wavelength 500 nm.

**Solution**:
```
λ = 500 nm = 500 × 10⁻⁹ m

E_molar = (6.022 × 10²³ mol⁻¹) × (6.626 × 10⁻³⁴ J·s) × (3.0 × 10⁸ m/s) / (500 × 10⁻⁹ m)

E_molar = 2.39 × 10⁵ J/mol = 239 kJ/mol
```

### Important Notes

1. **Primary Process**: The law applies strictly to the primary photochemical act
2. **Secondary Reactions**: Subsequent dark reactions may involve many molecules per photon absorbed
3. **Quantum Yield**: The ratio of molecules reacted to photons absorbed can be ≠ 1

```
Φ = Number of molecules reacted / Number of photons absorbed
```

- Φ < 1: Non-radiative deactivation occurs
- Φ = 1: Each photon causes one molecular transformation
- Φ > 1: Chain reactions amplify the initial photochemical event

---

## Lambert-Beer Law

### Statement
**The absorption of light by a medium is exponentially related to the concentration of the absorbing species and the path length through the medium.**

### Mathematical Form

```
A = log₁₀(I₀/I) = εcl
```

Or equivalently:
```
I = I₀ × 10⁻ᵉᶜˡ
```

Where:
- A = absorbance (dimensionless)
- I₀ = incident light intensity
- I = transmitted light intensity
- ε = molar extinction coefficient (L mol⁻¹ cm⁻¹)
- c = concentration of absorbing species (mol L⁻¹)
- l = path length through sample (cm)

### Alternative Form (Natural Logarithm)

```
I = I₀ × e⁻ᵃᶜˡ
```

Where a = absorption coefficient = 2.303ε

### Derivation

Consider a thin layer of thickness dx at distance x from the entrance:

The decrease in intensity dI is proportional to:
- The incident intensity I
- The concentration c
- The thickness dx

```
-dI ∝ I × c × dx
-dI = k × I × c × dx
```

Integrating from x = 0 (where I = I₀) to x = l (where I = I):

```
∫(dI/I) = -kc∫dx
ln(I/I₀) = -kcl
I = I₀ × e⁻ᵏᶜˡ
```

Converting to base 10:
```
log₁₀(I₀/I) = kcl/2.303 = εcl
```

Where ε = k/2.303

### Example Calculation

**Problem**: A solution of concentration 0.001 M in a 1 cm cell transmits 50% of incident light at 450 nm. Calculate the molar extinction coefficient.

**Solution**:
```
Given:
- c = 0.001 M = 0.001 mol/L
- l = 1 cm
- I/I₀ = 0.50 (50% transmission)

A = log₁₀(I₀/I) = log₁₀(1/0.50) = log₁₀(2) = 0.301

Using A = εcl:
ε = A/(cl) = 0.301/(0.001 × 1) = 301 L mol⁻¹ cm⁻¹
```

### Limitations

The Lambert-Beer Law holds under these conditions:
1. **Monochromatic light** (single wavelength)
2. **Dilute solutions** (typically c < 0.01 M)
3. **No chemical interaction** between absorbing molecules
4. **No scattering** of light
5. **Uniform medium**

Deviations occur due to:
- Aggregation of molecules at high concentration
- Dissociation or association reactions
- Fluorescence or phosphorescence
- Thermal lensing effects
- Refractive index changes

---

## Mathematical Examples

### Example 1: Photon Energy and Wavelength

**Problem**: Determine the wavelength range that provides energy between 150-300 kJ/mol (typical bond energies).

**Solution**:
```
E = N_A × hc/λ

For E = 150 kJ/mol = 150,000 J/mol:
λ = (6.022 × 10²³ × 6.626 × 10⁻³⁴ × 3.0 × 10⁸) / 150,000
λ = 797 × 10⁻⁹ m = 797 nm (Near-infrared)

For E = 300 kJ/mol:
λ = 399 nm (Violet visible light)
```

**Conclusion**: Wavelengths from 400-800 nm provide photochemically useful energy.

### Example 2: Quantum Yield in Chain Reaction

**Problem**: In the photochemical chlorination of methane, 10,000 molecules of CH₃Cl are formed per photon absorbed. Calculate the quantum yield.

**Solution**:
```
Φ = (Number of product molecules) / (Number of photons absorbed)
Φ = 10,000 / 1 = 10,000
```

This high quantum yield indicates a **chain reaction mechanism**:
1. Initiation: Cl₂ + hν → 2Cl·
2. Propagation: Cl· + CH₄ → HCl + CH₃·
3. Propagation: CH₃· + Cl₂ → CH₃Cl + Cl·
4. Termination: Cl· + Cl· → Cl₂

### Example 3: Absorption and Photochemical Rate

**Problem**: A photochemical reactor uses 500 nm light with intensity 1 × 10⁻⁶ Einstein/s. If the quantum yield is 0.5, how many moles of product form per second?

**Solution**:
```
1 Einstein = 1 mole of photons

Photons absorbed = 1 × 10⁻⁶ mol/s

Φ = (Moles of product) / (Moles of photons absorbed)

Moles of product = Φ × Moles of photons
Moles of product = 0.5 × 1 × 10⁻⁶ = 5 × 10⁻⁷ mol/s
```

---

## Applications

### 1. Photosynthesis
- Chlorophyll absorbs red and blue light (Grotthuss-Draper Law)
- Each photon excites one chlorophyll molecule (Stark-Einstein Law)
- Quantum yield of O₂ evolution ≈ 0.1 (8-10 photons per O₂ molecule)

### 2. Photography
- Silver halide crystals absorb light proportional to intensity (Lambert-Beer Law)
- Image formation requires quantum efficiency >1 through chemical amplification

### 3. Photopolymerization
- Initiators absorb specific wavelengths
- Each photon generates radicals that initiate chain polymerization (Φ > 1000)

### 4. Environmental Photochemistry
- Ozone depletion: O₃ + hν(λ<320 nm) → O₂ + O·
- Photodegradation of pollutants requires UV absorption

### 5. Photodynamic Therapy
- Photosensitizers absorb light and generate reactive oxygen species
- Quantum yield of singlet oxygen generation determines therapeutic efficiency

---

## Summary Table

| Law | Statement | Key Equation | Application |
|-----|-----------|--------------|-------------|
| Grotthuss-Draper | Only absorbed light causes reaction | I_absorbed = I_incident - I_transmitted | Wavelength selection |
| Stark-Einstein | One photon activates one molecule | E = hν, Φ = n/N | Energy requirements |
| Lambert-Beer | Absorption ∝ concentration × path length | A = εcl | Concentration determination |

---

## References

### Primary Literature
1. Einstein, A. (1912). "Thermodynamic proof of the law of photochemical equivalence." *Annalen der Physik*, 37, 832-838.
2. Stark, J. (1908). "The relationship between the quantum of light and the elementary action." *Physikalische Zeitschrift*, 9, 85-94.

### Textbooks
3. Turro, N. J., Ramamurthy, V., & Scaiano, J. C. (2010). *Modern Molecular Photochemistry of Organic Molecules*. University Science Books.
4. Atkins, P., & de Paula, J. (2014). *Physical Chemistry* (10th ed.). Oxford University Press.
5. Rohatgi-Mukherjee, K. K. (2006). *Fundamentals of Photochemistry* (Revised Edition). New Age International.

### Online Resources
6. IUPAC Gold Book: https://goldbook.iupac.org/terms/view/P04588
7. ChemLibreTexts - Photochemistry: https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry
8. Photochemical & Photobiological Sciences Journal: https://www.springer.com/journal/43630
9. Journal of Photochemistry and Photobiology: https://www.sciencedirect.com/journal/journal-of-photochemistry-and-photobiology

### Research Articles
10. Braslavsky, S. E. (2007). "Glossary of terms used in photochemistry, 3rd edition." *Pure and Applied Chemistry*, 79(3), 293-465.

---

*For questions or contributions to this guide, please refer to the repository issues page.*