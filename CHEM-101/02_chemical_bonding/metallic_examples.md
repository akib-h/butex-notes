# Metallic Bonding: Worked Examples and Problems

## Example 1: Sodium (Na) Metal

### Electronic Structure and Bonding

**Atomic Configuration**: 1s² 2s² 2p⁶ 3s¹

### Band Formation
1. Each Na atom contributes one 3s electron
2. In solid Na, ~10²³ atoms combine
3. 10²³ atomic 3s orbitals → 10²³ molecular orbitals forming a band
4. Only 10²³ electrons available to fill 2×10²³ possible positions
5. Result: **Band is half-filled** → excellent conductor

### Properties
- Melting point: 97.8°C (low, due to only 1 valence electron)
- Density: 0.97 g/cm³ (floats on water!)
- Crystal structure: BCC
- Very reactive (easily loses single valence electron)

### Calculation: Fermi Energy of Sodium

**Given**:
- Electron density n = 2.65 × 10²⁸ m⁻³
- Electron mass m = 9.11 × 10⁻³¹ kg
- Planck's constant h = 6.626 × 10⁻³⁴ J·s

**Solution**:
```
E_F = (h²/2m)(3π²n)^(2/3)
E_F = [(6.626 × 10⁻³⁴)²/(2 × 9.11 × 10⁻³¹)] × (3π² × 2.65 × 10²⁸)^(2/3)
E_F = 5.10 × 10⁻¹⁹ J
E_F = 3.18 eV
```

## Example 2: Magnesium (Mg) Metal

### Electronic Structure
**Atomic Configuration**: [Ne] 3s²

### Band Structure Problem
- If only 3s orbitals considered: band would be completely filled → **should be insulator**
- **BUT** Mg is actually a good conductor!

### Solution: Band Overlap
- 3s and 3p bands **overlap in energy**
- Combined band capacity: 8 electrons per atom
- Only 2 electrons per atom available
- Band is **1/4 filled** → conductor

### Properties Comparison: Na vs. Mg

| Property | Na (1e⁻) | Mg (2e⁻) | Explanation |
|----------|----------|----------|-------------|
| m.p. (°C) | 98 | 650 | More e⁻ in sea → stronger bonding |
| Density (g/cm³) | 0.97 | 1.74 | Higher nuclear charge |
| Hardness | Soft | Harder | Stronger metallic bonding |
| Reactivity | Very high | High | Mg²⁺ more stable than Mg⁺ |

## Example 3: Transition Metals - Iron (Fe)

### Electronic Structure
**Atomic Configuration**: [Ar] 3d⁶ 4s²

### Complex Band Structure
- **4s electrons**: Completely delocalized
- **3d electrons**: Partially delocalized
- Both contribute to metallic bonding
- d-electrons provide **additional bonding**

### Properties
- Melting point: 1538°C (very high)
- High mechanical strength
- Ferromagnetic (unpaired d-electrons)
- Multiple oxidation states (Fe²⁺, Fe³⁺)

### Calculation: Why Fe has high melting point

**Factors**:
1. 8 valence electrons (4s² 3d⁶)
2. d-orbitals contribute to bonding
3. Small atomic radius
4. High nuclear charge

**Result**: Very strong metallic bonding

## Example 4: Copper (Cu) vs. Silver (Ag) vs. Gold (Au)

### Comparison Table

| Property | Cu [Ar]3d¹⁰4s¹ | Ag [Kr]4d¹⁰5s¹ | Au [Xe]4f¹⁴5d¹⁰6s¹ |
|----------|----------------|----------------|---------------------|
| Conductivity (S/m) | 5.96×10⁷ | 6.30×10⁷ | 4.52×10⁷ |
| m.p. (°C) | 1085 | 962 | 1064 |
| Density (g/cm³) | 8.96 | 10.5 | 19.3 |
| Color | Reddish | White | Yellow |
| Reactivity | Moderate | Low | Very low |

### Why Silver has highest conductivity?

1. Filled d-subshell (4d¹⁰) → minimal d-electron scattering
2. Single s-electron easily delocalized
3. Optimal lattice structure (FCC)
4. Low electron-phonon coupling

### Why Gold is yellow?

**Relativistic Effects**:
- 6s orbital contracts due to relativistic effects
- 5d-6s gap decreases
- Absorbs blue light (~450 nm)
- Reflects red/yellow → appears golden

## Example 5: Alloy Problems

### Problem A: Bronze (Cu-Sn Alloy)

**Composition**: 90% Cu, 10% Sn (by mass)

**Question**: Why is bronze harder than pure copper?

**Solution**:
1. Sn atoms (radius = 140 pm) larger than Cu (radius = 128 pm)
2. Sn atoms distort Cu lattice
3. **Lattice distortion** inhibits dislocation movement
4. Result: Harder, less ductile than pure Cu

**Quantitative Analysis**:
```
Hardness_bronze / Hardness_Cu ≈ 2.5-3.0
Tensile strength increased by ~30-40%
```

### Problem B: Steel (Fe-C Alloy)

**Composition**: <2% C in Fe

**Question**: Calculate maximum C atoms in interstitial sites.

**Solution**:
1. Fe has BCC structure at room temp
2. Octahedral holes per unit cell: 6 (but small)
3. Tetrahedral holes per unit cell: 12 (tiny, C barely fits)
4. C radius (77 pm) vs. hole size
5. Maximum C solubility: ~0.02% at room temp, ~2% at 1130°C

**Result**: Small amounts of C dramatically increase strength!

## Example 6: Temperature Effects on Conductivity

### Problem: Copper Wire Resistance

**Given**:
- Resistance at 20°C: R₂₀ = 1.00 Ω
- Temperature coefficient: α = 0.00393 K⁻¹
- Final temperature: 80°C

**Question**: Find resistance at 80°C.

**Solution**:
```
R_T = R₀[1 + α(T - T₀)]
R₈₀ = 1.00[1 + 0.00393(80 - 20)]
R₈₀ = 1.00[1 + 0.00393(60)]
R₈₀ = 1.00[1 + 0.236]
R₈₀ = 1.24 Ω
```

**Interpretation**: 24% increase in resistance → explains why electronics overheat!

## Example 7: Crystal Structure and Density

### Problem: Calculate Aluminum Density

**Given**:
- Crystal structure: FCC
- Lattice parameter: a = 4.05 Å
- Atomic mass: 26.98 g/mol

**Solution**:

**Step 1**: Atoms per unit cell (FCC)
```
Z = 4 atoms/unit cell
```

**Step 2**: Unit cell volume
```
V = a³ = (4.05 × 10⁻⁸ cm)³ = 6.64 × 10⁻²³ cm³
```

**Step 3**: Mass of unit cell
```
m = (Z × M)/N_A
m = (4 × 26.98 g/mol)/(6.022 × 10²³ mol⁻¹)
m = 1.79 × 10⁻²² g
```

**Step 4**: Density
```
ρ = m/V = (1.79 × 10⁻²² g)/(6.64 × 10⁻²³ cm³)
ρ = 2.70 g/cm³
```

**Compare to experimental**: 2.70 g/cm³ ✓

## Example 8: Work Function and Photoelectric Effect

### Problem: Sodium Photoelectric Effect

**Given**:
- Work function of Na: Φ = 2.28 eV
- Incident light: λ = 400 nm

**Question**: 
a) Will photoelectrons be emitted?
b) If yes, what is maximum kinetic energy?

**Solution**:

**Part a**: Check if E_photon > Φ
```
E = hc/λ
E = (6.626 × 10⁻³⁴ J·s)(3.00 × 10⁸ m/s)/(400 × 10⁻⁹ m)
E = 4.97 × 10⁻¹⁹ J = 3.10 eV

Since 3.10 eV > 2.28 eV → YES, electrons emitted!
```

**Part b**: Maximum KE
```
KE_max = E_photon - Φ
KE_max = 3.10 eV - 2.28 eV
KE_max = 0.82 eV = 1.31 × 10⁻¹⁹ J
```

## Example 9: Thermal Conductivity Application

### Problem: Heat Sink Design

**Scenario**: Choosing material for CPU heat sink.

**Options**: Copper (κ = 401 W/m·K) or Aluminum (κ = 237 W/m·K)

**Given**:
- Heat dissipation required: P = 100 W
- Temperature difference allowed: ΔT = 30 K
- Contact area: A = 0.001 m²
- Thickness: L = 0.005 m

**Question**: Which material meets requirements?

**Solution**:

**Heat transfer rate**:
```
Q = (κ × A × ΔT)/L
```

**For Copper**:
```
Q_Cu = (401 × 0.001 × 30)/0.005
Q_Cu = 2406 W >> 100 W ✓
```

**For Aluminum**:
```
Q_Al = (237 × 0.001 × 30)/0.005
Q_Al = 1422 W >> 100 W ✓
```

**Conclusion**: Both work! Choose Al for lower cost and weight.

## Example 10: Galvanic Series and Corrosion

### Problem: Bimetallic Corrosion

**Scenario**: Steel bolt (Fe) in aluminum structure in seawater.

**Standard Reduction Potentials**:
- Al³⁺ + 3e⁻ → Al: E° = -1.66 V
- Fe²⁺ + 2e⁻ → Fe: E° = -0.44 V

**Question**: Which metal corrodes?

**Solution**:

**Step 1**: Identify anode and cathode
- Al more negative → **Al is anode** (oxidized)
- Fe less negative → **Fe is cathode** (protected)

**Step 2**: Cell potential
```
E°_cell = E°_cathode - E°_anode
E°_cell = (-0.44) - (-1.66) = +1.22 V
```

**Step 3**: Oxidation reaction
```
Anode: Al → Al³⁺ + 3e⁻
Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻
```

**Conclusion**: Aluminum corrodes, protecting steel (sacrificial anode principle)

## Practice Problems

### Problem 1
Calculate the number of free electrons per unit volume in copper, given:
- Density: 8.96 g/cm³
- Atomic mass: 63.55 g/mol
- One free electron per atom

**Answer**: 8.49 × 10²⁸ electrons/m³

### Problem 2
Why does tungsten (W) have the highest melting point (3422°C) among all metals?

**Answer**: 
- 6 valence electrons (5d⁴ 6s²)
- Strong d-orbital bonding
- Small atomic radius
- High nuclear charge
- Optimal bonding/antibonding balance

### Problem 3
Explain why graphene is not a metal despite having delocalized electrons.

**Answer**:
- Delocalized π-electrons confined to 2D plane
- Not truly 3D metallic bonding
- Semimetal with zero band gap at Dirac points
- Different electronic structure from typical metals

### Problem 4
A wire made of metal X has resistance R at temperature T. If temperature increases by 50 K, resistance increases to 1.2R. Find the temperature coefficient α.

**Solution**:
```
R_T = R₀(1 + αΔT)
1.2R = R(1 + α × 50)
0.2 = 50α
α = 0.004 K⁻¹
```

### Problem 5
Compare the band structure of sodium (good conductor) and diamond (insulator). Explain the difference.

**Answer**:
- **Sodium**: Partially filled band (half-filled 3s band) → conductor
- **Diamond**: Large band gap (5.5 eV) between filled valence band and empty conduction band → insulator
- Key difference: Band gap size and filling

## References

1. Ashcroft, N. W., & Mermin, N. D. (1976). "Solid State Physics"
2. Kittel, C. (2004). "Introduction to Solid State Physics"
3. Callister, W. D. (2020). "Materials Science and Engineering"
4. Atkins, P., & de Paula, J. (2014). "Physical Chemistry"
5. Chemistry LibreTexts: Worked Examples in Metallic Bonding

---

**Previous**: [Properties](properties.md) | **Next**: [VSEPR Theory](../05-vsepr-theory/vsepr-principles.md)