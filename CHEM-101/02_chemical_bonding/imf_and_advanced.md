# Intermolecular Forces and Advanced Topics

## Part I: Intermolecular Forces (IMF)

### Overview

**Intermolecular forces** are electrostatic interactions between molecules that are much weaker than intramolecular bonds (ionic, covalent, metallic) but crucial for determining physical properties.

### Comparison: IMF vs. Intramolecular Bonds

| Property | Intramolecular | Intermolecular |
|----------|---------------|----------------|
| Strength | 50-1000 kJ/mol | 1-50 kJ/mol |
| Range | Within molecule | Between molecules |
| Effect of breaking | Chemical change | Physical change |
| Examples | C-C, C=O, ionic | H-bonds, dipole-dipole |

## 1. Types of Intermolecular Forces

### Hierarchy of IMF Strength

```
Ion-Dipole > Hydrogen Bonding > Dipole-Dipole > London Dispersion
   50 kJ/mol    10-40 kJ/mol      5-25 kJ/mol       1-10 kJ/mol
```

### 1.1 London Dispersion Forces (LDF)

**Also known as**: Van der Waals forces, induced dipole-induced dipole forces

#### Mechanism

1. **Electron cloud fluctuation**: Instantaneous, random
2. **Temporary dipole**: Creates δ+ and δ- regions
3. **Induced dipole**: Nearby molecule polarized
4. **Attractive force**: Opposite charges attract

```
Time t₁:  [Molecule A: uniform]  [Molecule B: uniform]
Time t₂:  [δ- ← δ+]  →→  [δ- ← δ+]
```

#### Quantitative Description

**Energy**:
```
E_disp = -C/r⁶
```

Where:
- C = constant depending on polarizability
- r = distance between molecules

**London Formula** (1930):
```
E_disp = -(3/4) × (α²I)/(4πε₀)² × (1/r⁶)
```

Where:
- α = polarizability
- I = ionization energy

#### Factors Affecting LDF Strength

**1. Molecular Size/Mass**
- Larger molecule → more electrons → higher polarizability → stronger LDF

**Example**:
| Molecule | M (g/mol) | B.P. (°C) |
|----------|-----------|-----------|
| CH₄ | 16 | -162 |
| C₂H₆ | 30 | -89 |
| C₃H₈ | 44 | -42 |
| C₄H₁₀ | 58 | -0.5 |

**2. Molecular Shape**
- Greater surface contact → stronger LDF

**Example**: n-pentane (b.p. 36°C) vs. neopentane (b.p. 10°C)
- Same formula (C₅H₁₂)
- n-pentane: linear (more contact)
- neopentane: spherical (less contact)

**3. Polarizability (α)**
```
α ∝ (molecular volume) ∝ (# electrons)
```

#### Characteristics

✓ Present in ALL molecules (even nonpolar)  
✓ Weakest intermolecular force  
✓ Only significant force in noble gases and nonpolar molecules  
✓ Rapidly decreases with distance (r⁶)  

### 1.2 Dipole-Dipole Forces

**Definition**: Attractive force between permanent dipoles in polar molecules.

#### Requirements

1. Molecules must be **polar** (μ ≠ 0)
2. Permanent charge separation
3. Molecular alignment (partial)

#### Energy Expression

```
E_dd = -(2μ₁²μ₂²)/(3kT(4πε₀)²r⁶)
```

For identical molecules:
```
E_dd ∝ -μ⁴/(kTr⁶)
```

Where:
- μ = dipole moment (Debye)
- k = Boltzmann constant
- T = temperature
- r = separation distance

#### Temperature Dependence

**Key insight**: E_dd ∝ 1/T
- Higher temperature → More thermal motion → Less alignment → Weaker interaction
- Contrast with LDF (temperature-independent)

#### Examples

| Molecule | Dipole (D) | B.P. (°C) | Explanation |
|----------|-----------|-----------|-------------|
| CH₃Cl | 1.87 | -24 | Polar, dipole-dipole |
| CH₄ | 0 | -162 | Nonpolar, only LDF |
| CH₃F | 1.85 | -78 | Despite similar μ, lighter |
| CH₃Br | 1.81 | 4 | Heavier, stronger LDF |

#### Orientation

Molecules align to maximize attraction:

```
Attractive:    δ+ --- δ-  ←→  δ+ --- δ-
Repulsive:     δ+ --- δ-  ←→  δ- --- δ+
```

Average energy considering thermal rotation included in formula above.

### 1.3 Hydrogen Bonding

**Definition**: Exceptionally strong dipole-dipole interaction involving hydrogen bonded to N, O, or F.

#### Requirements (Must satisfy ALL three)

1. **Hydrogen bonded to**: N, O, or F (high electronegativity)
2. **H-donor molecule**: H-N, H-O, or H-F bond
3. **Acceptor**: Lone pair on N, O, or F of another molecule

```
General form:  X-H ··· :Y
               donor  acceptor

Where X, Y = N, O, or F
```

#### Why So Strong?

1. **High electronegativity**: F (4.0), O (3.5), N (3.0)
   - Creates very polar H-X bond
   
2. **Small size of H**: 
   - Nucleus exposed when bonded
   - δ+ charge highly concentrated
   - Can approach acceptor closely
   
3. **Partial covalent character**:
   - Some orbital overlap
   - Directional (typically linear: 180°)

#### Energy Range

**Typical**: 10-40 kJ/mol (stronger than other IMF, weaker than covalent)

**Comparison**:
- O-H covalent bond: ~460 kJ/mol
- O-H···O hydrogen bond: ~20 kJ/mol
- O···O van der Waals: ~2 kJ/mol

#### Types of Hydrogen Bonds

**1. Intermolecular**

```
H₂O: H-O-H ··· O-H-H ··· O-H-H
          H           H
```

**2. Intramolecular**

```
Salicylic acid:
     O
     ║
     C-OH
    /
   C
  / \
 C   C-OH
  \ /
   C
   |
  H ··· O (intramolecular H-bond)
```

#### Effects of Hydrogen Bonding

**1. Elevated Boiling Points**

| Group 16 Hydrides | B.P. (°C) |
|-------------------|-----------|
| H₂O | 100 |
| H₂S | -60 |
| H₂Se | -41 |
| H₂Te | -2 |

H₂O anomalously high due to H-bonding!

**2. Lower Density of Ice**

- Ice: Open tetrahedral network
- Each water forms 4 H-bonds
- Maximum separation at 0°C
- Density(ice) < Density(water) → Ice floats!

**3. Biological Significance**

- **DNA**: Double helix held by H-bonds (A-T: 2 bonds, G-C: 3 bonds)
- **Proteins**: Secondary structure (α-helix, β-sheet)
- **Enzyme specificity**: H-bond recognition

#### Geometric Parameters

**Typical H-bond lengths**:
- O-H···O: 1.7-2.0 Å
- N-H···N: 1.9-2.2 Å
- O-H···N: 1.8-2.1 Å

**Angles**:
- Ideal: 180° (linear)
- Acceptable: >140°

### 1.4 Ion-Dipole Forces

**Definition**: Interaction between ion and permanent dipole.

**Not strictly IMF** (involves ions), but often included.

#### Energy

```
E_ion-dipole = -|q|μ/(4πε₀r²)
```

**Note**: ∝ 1/r² (longer range than IMF ∝ 1/r⁶)

#### Examples

**Hydration of ions**:
```
Na⁺ + nH₂O → [Na(H₂O)ₙ]⁺

Ion-dipole attractions:
    δ-      δ+
     O=H
    / \
Na⁺  H
    \ /
     O=H
    δ-  δ+
```

**Hydration enthalpy**:
- Na⁺: -406 kJ/mol
- Mg²⁺: -1922 kJ/mol (higher charge)
- Cl⁻: -364 kJ/mol

## 2. Quantitative Treatment of IMF

### 2.1 van der Waals Equation

Real gas behavior incorporating IMF:

```
(P + a(n/V)²)(V - nb) = nRT
```

Where:
- a = measure of attractive forces
- b = molecular volume

### 2.2 Lennard-Jones Potential

**Complete description** of intermolecular potential:

```
V(r) = 4ε[(σ/r)¹² - (σ/r)⁶]
       repulsion  attraction
```

Where:
- ε = depth of potential well
- σ = distance at V = 0
- r⁶ term: attraction (dispersion + dipole)
- r¹² term: repulsion (Pauli exclusion)

## 3. Applications and Properties

### 3.1 Boiling Points

**Trend**: Stronger IMF → Higher boiling point

**Reasoning**: More energy needed to overcome intermolecular attractions

**Prediction algorithm**:
1. Identify IMF type(s) present
2. Rank by strength
3. Consider molecular weight (for LDF)
4. Consider molecular shape

**Example problem**:

Rank by increasing boiling point: CH₄, NH₃, H₂O, HF

**Solution**:
- CH₄: Only LDF, small molecule → lowest
- NH₃: H-bonding (N-H), intermediate
- HF: Strong H-bonding (H-F), but small molecule
- H₂O: Extensive H-bonding network → highest

**Answer**: CH₄ < NH₃ < HF < H₂O
**Actual**: -162°C < -33°C < 20°C < 100°C ✓

### 3.2 Solubility

**"Like dissolves like"** - IMF similarity determines solubility.

**Polar/H-bonding solvents**: Dissolve polar/ionic solutes
**Nonpolar solvents**: Dissolve nonpolar solutes

**Thermodynamic requirement**:
```
ΔG_solution < 0
ΔG = ΔH - TΔS
```

For dissolution to occur:
- Breaking solute-solute IMF (endothermic)
- Breaking solvent-solvent IMF (endothermic)
- Forming solute-solvent IMF (exothermic)

**Net effect** must be favorable.

### 3.3 Viscosity

**Definition**: Resistance to flow

**Relationship**: Stronger IMF → Higher viscosity

**Examples**:
| Liquid | IMF Type | Viscosity (cP, 20°C) |
|--------|----------|---------------------|
| Hexane | LDF | 0.31 |
| Water | H-bonding | 1.00 |
| Glycerol | Extensive H-bonding | 1490 |

---

## Part II: Advanced Topics

## 4. Resonance

### 4.1 Definition and Theory

**Resonance**: When a single Lewis structure cannot adequately represent electron distribution, the true structure is a weighted average (hybrid) of multiple contributing structures.

#### Key Principles

1. **Resonance structures are NOT real** - they don't exist, don't equilibrate
2. **Only electrons move** - nuclei positions fixed
3. **Same molecular formula** - only electron arrangements differ
4. **Energy**: Hybrid is more stable than any contributing structure
5. **Delocalization**: Electrons spread over multiple atoms

#### Resonance vs. Related Concepts

| Concept | Definition | Atoms move? | Energy |
|---------|-----------|-------------|---------|
| **Resonance** | Different electron arrangements | NO | Single minimum |
| **Isomers** | Different atomic arrangements | YES | Different minima |
| **Tautomers** | Equilibrating isomers | YES | Interconvert |

### 4.2 Drawing Resonance Structures

#### Rules

1. **Octet rule** should be satisfied (exceptions noted)
2. **Only move**: π electrons, lone pairs, and unpaired electrons
3. **Never move**: σ bonds, nuclei
4. **Formal charges**: Track and minimize
5. **Same connectivity**: Bonding sequence unchanged

#### Curved Arrow Notation

**Single-headed arrow** (⤻): Movement of one electron (radicals)  
**Double-headed arrow** (⇌): Movement of electron pair  

**Arrow rules**:
- **Tail**: Where electrons come from
- **Head**: Where electrons go to

### 4.3 Major Examples

#### Example 1: Ozone (O₃)

**Lewis structures**:
```
Structure A:        Structure B:
   ⁻                    ⁺
O = O - O            O - O = O
⁺                        ⁻
```

**Resonance hybrid**:
```
      δ-         δ-
O ===== O ===== O
   1.5     1.5
   ⁺
```

**Experimental data**:
- Both O-O bonds equal: 127.8 pm
- Intermediate between single (148 pm) and double (121 pm)
- Bond order: 1.5 each

#### Example 2: Carbonate Ion (CO₃²⁻)

**Three equivalent structures**:
```
    O⁻               O               O⁻
    ║               ║               ║
O = C - O⁻    ←→   O⁻- C = O   ←→   O = C - O⁻
```

**Resonance hybrid**:
```
        O⁻(⅔)
       ≋≋≋
O⁻(⅔)- C - O⁻(⅔)
       ≋≋≋
```

**Consequences**:
- All C-O bonds identical: 129 pm
- Bond order: 4/3 ≈ 1.33 each
- Each O bears -⅔ charge
- Trigonal planar geometry (120°)

#### Example 3: Benzene (C₆H₆)

**Kekulé structures** (1865):
```
   H         H
   |         |
H-C     C-H     ←→    (alternate)
  ||    ||
H-C     C-H
   |         |
   H         H
```

**Resonance hybrid representation**:
```
      H
      |
   H-C    -H
    ⬡ 
   H-C    -H
      |
      H
```

**Experimental facts**:
- All C-C bonds equal: 139 pm
- Intermediate between single (154 pm) and double (134 pm)
- Highly stable (resonance energy: 152 kJ/mol)
- Planar hexagonal structure
- Undergoes substitution, not addition

#### Example 4: Nitrate Ion (NO₃⁻)

**Three equivalent structures**:
```
   O⁻              O               O⁻
   ║              ║               ║
O=N-O⁻   ←→   O⁻-N=O   ←→   O=N-O⁻
```

**Hybrid**:
- Bond order: 4/3
- Each N-O: 122 pm (intermediate)
- Trigonal planar, 120° angles

### 4.4 Evaluating Resonance Structures

#### Major Contributors (More Important)

✓ **Maximum octets** satisfied  
✓ **Minimum formal charges**  
✓ **Negative charge on more electronegative atom**  
✓ **Positive charge on less electronegative atom**  
✓ **Like charges separated**  
✓ **Fewer formal charges** overall  

#### Minor Contributors (Less Important)

✗ Incomplete octets (especially on C, N, O)  
✗ Large formal charges  
✗ Adjacent like charges  
✗ Negative on electropositive atom  

#### Example: Acetate Ion (CH₃COO⁻)

```
Structure A (major):     Structure B (major):
     O⁻                      O
     ║                      ║
H₃C-C-O         ←→      H₃C-C-O⁻

Structure C (minor):
     O⁻
     |
H₃C-C⁺=O⁻
```

**Analysis**:
- A and B: Equal energy, major contributors (50% each)
- C: Positive charge on electronegative O → minor

### 4.5 Resonance Energy

**Definition**: Energy difference between actual molecule and most stable contributing structure.

**Calculation** (experimental):
```
Resonance Energy = ΔH_f(actual) - ΔH_f(predicted from single structure)
```

**Examples**:
| Molecule | Resonance Energy (kJ/mol) |
|----------|--------------------------|
| Benzene | 152 |
| Naphthalene | 255 |
| CO₃²⁻ | ~80 |

**Significance**: Greater resonance energy → more stable

---

## 5. Molecular Polarity

### 5.1 Dipole Moment

**Definition**: Measure of charge separation in molecule.

```
μ = q × d
```

Where:
- μ = dipole moment (Debye, D)
- q = magnitude of charge
- d = separation distance

**Units**: 1 D = 3.336 × 10⁻³⁰ C·m

### 5.2 Determining Polarity

#### Requirements for Polar Molecule

Both must be true:
1. **Polar bonds** (ΔEN ≠ 0)
2. **Asymmetric geometry** (dipoles don't cancel)

#### Vector Addition

Molecular dipole = **vector sum** of bond dipoles

**Example 1: CO₂** (Linear)
```
O ← C → O
←μ    μ→

Net: μ_net = 0 (nonpolar)
```

**Example 2: H₂O** (Bent)
```
    O
   ↗ ↖  
  H   H
  
Net: μ_net ≠ 0 (polar)
μ = 1.85 D
```

### 5.3 Polarity Prediction Algorithm

1. **Draw Lewis structure**
2. **Determine molecular geometry** (VSEPR)
3. **Identify polar bonds** (check ΔEN)
4. **Assess symmetry**:
   - Symmetric → nonpolar
   - Asymmetric → polar
5. **Calculate/measure dipole moment**

### 5.4 Examples

| Molecule | Geometry | Polar Bonds? | Symmetric? | Polar? | μ (D) |
|----------|----------|--------------|-----------|--------|-------|
| CO₂ | Linear | Yes | Yes | No | 0 |
| H₂O | Bent | Yes | No | Yes | 1.85 |
| NH₃ | Trig pyramid | Yes | No | Yes | 1.47 |
| CH₄ | Tetrahedral | Yes | Yes | No | 0 |
| CCl₄ | Tetrahedral | Yes | Yes | No | 0 |
| CHCl₃ | Tetrahedral | Yes | No | Yes | 1.04 |

### 5.5 Applications

**1. Solubility**: Polar dissolves polar, nonpolar dissolves nonpolar

**2. Intermolecular forces**: Polar → dipole-dipole + LDF

**3. Biological function**: 
   - Protein folding (hydrophobic/hydrophilic)
   - Membrane structure (amphipathic molecules)
   - Drug design (polarity matching)

---

## Practice Problems

### Problem 1: IMF Identification

Identify all IMF present in: (a) HF, (b) CO₂, (c) NH₃, (d) CH₃OH

**Solution**:
(a) HF: Hydrogen bonding, dipole-dipole, LDF  
(b) CO₂: LDF only (nonpolar)  
(c) NH₃: Hydrogen bonding, dipole-dipole, LDF  
(d) CH₃OH: Hydrogen bonding, dipole-dipole, LDF  

### Problem 2: Boiling Point Ranking

Rank by increasing b.p.: Ne, HF, H₂, H₂O

**Solution**:
- Ne: LDF only, small → lowest
- H₂: LDF only, very small → second
- HF: H-bonding, but small molecule → third
- H₂O: Extensive H-bonding network → highest

**Answer**: Ne < H₂ < HF < H₂O

### Problem 3: Resonance Structures

Draw resonance structures for NO₂⁻ (nitrite ion).

**Solution**:
```
   O⁻              O
   ║              ║
O=N    ←→    O⁻-N=O

Both are equivalent major contributors.
Hybrid: N-O bond order = 1.5 each
```

### Problem 4: Polarity Prediction

Determine if polar: (a) CCl₄, (b) CHCl₃, (c) SF₆, (d) SF₄

**Solution**:
(a) CCl₄: Tetrahedral, symmetric → **nonpolar**  
(b) CHCl₃: Tetrahedral, asymmetric → **polar** (μ = 1.04 D)  
(c) SF₆: Octahedral, symmetric → **nonpolar**  
(d) SF₄: Seesaw, asymmetric → **polar** (μ = 0.63 D)  

---

## References

1. Israelachvili, J. N. (2011). "Intermolecular and Surface Forces"
2. Stone, A. J. (2013). "The Theory of Intermolecular Forces"
3. Pauling, L. (1960). "The Nature of the Chemical Bond"
4. Chemistry LibreTexts: Intermolecular Forces
5. Atkins, P., & de Paula, J. "Physical Chemistry"

---

**Complete!** This covers IMF types, quantitative treatments, resonance theory with major examples, and molecular polarity.