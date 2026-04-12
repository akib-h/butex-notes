# 01 — Chemical Bonding
### Chemistry-I (CHEM 101 / AS 109) | Bangladesh University of Textiles
> **Syllabus coverage:** Electronic theory · Valence Bond Theory (VBT) · Molecular Orbital Theory (MOT) · LCAO · Bond order · Ionic vs. covalent character · Fajan's rules · Isomorphism

---

## Table of Contents
1. [Electronic Theory of Chemical Bond](#1-electronic-theory-of-chemical-bond)
2. [Valence Bond Theory (VBT)](#2-valence-bond-theory-vbt)
3. [Molecular Orbital Theory (MOT) & LCAO](#3-molecular-orbital-theory-mot--lcao)
4. [Bond Order](#4-bond-order)
5. [Ionic vs. Covalent Character — Fajan's Rules](#5-ionic-vs-covalent-character--fajans-rules)
6. [Isomorphism](#6-isomorphism)
7. [Types of Bonds in Complex Compounds](#7-types-of-bonds-in-complex-compounds)
8. [Exam Questions & Model Answers](#8-exam-questions--model-answers)
9. [Visual Aids](#9-visual-aids)
10. [Practice Questions](#10-practice-questions)
11. [References](#11-references)

---

## 1. Electronic Theory of Chemical Bond

The **Electronic Theory of Chemical Bonding** was proposed by **W. Kossel** (ionic bonds) and **G.N. Lewis** (covalent bonds) in 1916.

### Key Postulates
- Atoms combine to attain the stable **noble-gas configuration** (octet rule).
- Electrons are transferred (**ionic bond**) or shared (**covalent bond**) to achieve this stability.
- The **Lewis dot structure** represents valence electrons around atoms.

### Types of Chemical Bonds

| Bond Type | Mechanism | Example | Typical ΔEN |
|-----------|-----------|---------|-------------|
| Ionic | Electron transfer | NaCl, MgO | > 1.7 |
| Covalent | Electron sharing | H₂, CH₄ | < 1.7 |
| Coordinate/Dative | Both electrons from one atom | NH₄⁺, [Cu(NH₃)₄]²⁺ | — |
| Metallic | Delocalized electron sea | Fe, Cu | — |
| Hydrogen Bond | Dipole–dipole (N/O/F–H) | H₂O, HF | — |
| Van der Waals | Instantaneous dipoles | Noble gases, CH₄(l) | — |

### Lewis Structures — Rules
1. Count total valence electrons.
2. Draw single bonds between all bonded atoms.
3. Complete octets on terminal atoms first (H needs only 2).
4. Place remaining electrons on central atom.
5. Convert lone pairs to multiple bonds if central atom lacks octet.

---

## 2. Valence Bond Theory (VBT)

Proposed by **Heitler and London (1927)**, extended by **Pauling and Slater**.

### Postulates
1. A covalent bond forms by the **overlap of half-filled atomic orbitals** of two atoms.
2. The electrons in the overlapping orbitals must have **opposite spins**.
3. Greater the overlap → stronger the bond.
4. Bonds can be σ (sigma) or π (pi) type.

### σ vs. π Bonds

```
σ Bond: Head-on overlap (along internuclear axis)
        ○━━━○   (s-s, s-p, p-p axial)

π Bond: Lateral (side-by-side) overlap
        ═══     (p-p sideways)
```

| Property | σ Bond | π Bond |
|----------|--------|--------|
| Overlap | Along axis | Perpendicular to axis |
| Rotation | Free rotation | Restricted rotation |
| Strength | Stronger | Weaker |
| Example | All single bonds | Double/triple bonds |

### Advantages of VBT
- Explains directional nature and geometry of bonds.
- Accounts for bond lengths and strengths.
- Hybridization concept explains geometry.

### Limitations of VBT
- Cannot explain the **paramagnetic** nature of O₂.
- Does not satisfactorily explain color in transition metal complexes.
- Fails for delocalized electrons (benzene, etc.).

---

## 3. Molecular Orbital Theory (MOT) & LCAO

### LCAO — Linear Combination of Atomic Orbitals

When two atomic orbitals (AOs) combine, they form **molecular orbitals (MOs)**:

$$\Psi_{bonding} = \Psi_A + \Psi_B \quad \text{(constructive interference — lower energy)}$$

$$\Psi_{antibonding} = \Psi_A - \Psi_B \quad \text{(destructive interference — higher energy)}$$

**Key rules for effective LCAO:**
1. AOs must have **similar energy**.
2. AOs must have **proper symmetry** (same sign overlap region).
3. AOs must have **significant overlap**.

### MO Energy Diagram for H₂ (Homonuclear diatomic)

```
         ___  σ*1s  (antibonding)
          ↑
  1s [↑] —         — [↑] 1s
          ↓
         ___  σ1s   (bonding — 2 electrons fill here)
```

### MO Filling Order (for Z ≤ 7, i.e., up to N₂)

```
σ1s < σ*1s < σ2s < σ*2s < (π2px = π2py) < σ2pz < (π*2px = π*2py) < σ*2pz
```

> **Note:** For O₂ and F₂, σ2pz is lower than π2p.

### MO Diagram — O₂

```
                 σ*2pz
                  ___
            π*2px  _  π*2py  ← 2 unpaired electrons (paramagnetic!)
                  ___
                 σ2pz
            π2px  _  π2py
                  ___
                 σ*2s
                  ___
                 σ2s
                  ___
                 σ*1s
                  ___
                 σ1s
```

### MO Diagram — CO

CO is **isoelectronic** with N₂ (10 electrons each).

```
    Atom C              MO                Atom O
    2p ↑_ ↑_ ↑_   →  σ*2p               2p ↑↓ ↑↓ ↑↓
                       π*2p  π*2p
                       σ2p
                       π2p   π2p
    2s ↑↓          →  σ*2s               2s ↑↓
                       σ2s
    1s ↑↓          →  σ*1s               1s ↑↓
                       σ1s
```

---

## 4. Bond Order

$$\text{Bond Order} = \frac{N_b - N_a}{2}$$

Where:
- **Nᵦ** = electrons in bonding MOs
- **Nₐ** = electrons in antibonding MOs

### Calculations for Common Molecules

#### Bond Order of N₂
Electronic config: (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(π2px)²(π2py)²(σ2pz)²

| | Bonding (Nᵦ) | Antibonding (Nₐ) |
|---|---|---|
| σ1s | 2 | |
| σ*1s | | 2 |
| σ2s | 2 | |
| σ*2s | | 2 |
| π2px + π2py | 4 | |
| σ2pz | 2 | |

$$\text{BO}_{N_2} = \frac{10 - 4}{2} = \boxed{3}$$

∴ N₂ has a **triple bond** — very stable (BE = 945 kJ/mol).

#### Bond Order of CO
CO is isoelectronic with N₂ → **Bond Order = 3**

#### Bond Order of O₂
Config: (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(σ2pz)²(π2px)²(π2py)²(π*2px)¹(π*2py)¹

$$\text{BO}_{O_2} = \frac{8+2-4-2}{2} = \frac{10-6}{2} = \boxed{2}$$

O₂ has a **double bond** and is **paramagnetic** (2 unpaired electrons in degenerate π* orbitals).

#### Bond Order Summary Table

| Molecule | Nᵦ | Nₐ | Bond Order | Bond Type | Magnetic |
|----------|----|----|-----------|-----------|---------|
| H₂ | 2 | 0 | 1 | Single | Diamagnetic |
| He₂ | 2 | 2 | 0 | No bond | — |
| N₂ | 10 | 4 | 3 | Triple | Diamagnetic |
| O₂ | 8+2 | 4+2 | 2 | Double | **Paramagnetic** |
| F₂ | 10 | 8 | 1 | Single | Diamagnetic |
| CO | 10 | 4 | 3 | Triple | Diamagnetic |
| NO | 10 | 5 | 2.5 | 2.5 | Paramagnetic |

---

## 5. Ionic vs. Covalent Character — Fajan's Rules

Even "ionic" compounds have partial covalent character due to **polarization**.

### Fajan's Rules
A compound becomes more **covalent** when:

| Factor | More Covalent If... | Reason |
|--------|--------------------|---------| 
| **Cation charge** | Higher charge (e.g., Al³⁺ > Na⁺) | More polarizing power |
| **Cation size** | Smaller cation | Greater charge density |
| **Anion charge** | Higher charge (e.g., O²⁻ > Cl⁻) | More polarizable |
| **Anion size** | Larger anion | More polarizable |
| **Cation config** | Pseudo-noble gas (18e⁻) > noble gas (8e⁻) | d-electrons less shielding |

### Example: AlF₃ vs. AlCl₃
- **AlF₃:** F⁻ is small and not easily polarized → remains ionic.
- **AlCl₃:** Cl⁻ is larger and more polarizable → Al³⁺ (small, 3+ charge) distorts Cl⁻ electron cloud → **covalent character dominates**.

### Melting Points of Ionic Compounds
Ionic compounds have **high melting points** because:
- Strong electrostatic forces (lattice energy) hold oppositely charged ions.
- Lattice Energy ∝ (q⁺ × q⁻) / r
- Large energy input needed to overcome the lattice structure.

---

## 6. Isomorphism

**Isomorphous** compounds have:
- The **same crystal structure**
- The **same general formula**
- Ions of **similar size** substituting for each other

### Example: NaF and MgO
- NaF: Na⁺ (r = 102 pm), F⁻ (r = 133 pm) — **NaCl-type** (rock salt) structure
- MgO: Mg²⁺ (r = 72 pm), O²⁻ (r = 140 pm) — **NaCl-type** structure
- Both have coordination number **6** (octahedral), same space group (Fm3m)
- Na⁺ and Mg²⁺ have similar ionic radii; F⁻ and O²⁻ have similar radii
→ **NaF is isomorphous with MgO** ✓

---

## 7. Types of Bonds in Complex Compounds

### [Co(NH₃)₆]Cl₃
| Bond | Type | Description |
|------|------|-------------|
| Co–N | **Coordinate (dative) covalent** | NH₃ donates lone pair to Co³⁺ |
| N–H | **Covalent (polar)** | Shared electron pair |
| Co³⁺–Cl⁻ (outer) | **Ionic** | Electrostatic attraction |

### [Fe(OH₂)₆]Cl₃
| Bond | Type |
|------|------|
| Fe–O | Coordinate covalent (O donates lone pair) |
| O–H | Polar covalent |
| [complex]³⁺ — Cl⁻ | Ionic |

---

## 8. Exam Questions & Model Answers

### Q1. What is LCAO? *(2019, Part A, Q1a — 1 mark)*

**LCAO** stands for **Linear Combination of Atomic Orbitals**. It is a quantum-mechanical approximation method for constructing molecular orbitals (MOs) from atomic orbitals (AOs). When two AOs overlap, they combine linearly to give two MOs: one **bonding MO** (in-phase, lower energy) and one **antibonding MO** (out-of-phase, higher energy). The molecular wavefunction is: Ψ_MO = c₁Ψ_A ± c₂Ψ_B, where c₁ and c₂ are coefficients.

---

### Q2. Write down the electronic theory of chemical bond. *(2019 Q1b; 2012 Q1a)*

*(See Section 1 above for full detail)*

**Summary answer:**
The electronic theory (Lewis-Kossel, 1916) states that atoms form bonds to attain noble-gas configuration. Kossel proposed **ionic bonds** via electron transfer; Lewis proposed **covalent bonds** via electron sharing. Lewis dot structures show valence electrons. The **octet rule** (8 electrons around each atom) drives bond formation. Exceptions: H (duet), Be, B (incomplete octet), P, S, Cl (expanded octet).

---

### Q3. Indicate various types of bonds for [Co(NH₃)₆]Cl₃. *(2019 Q1c — 3 marks)*

*(See Section 7 above)*

---

### Q4. Calculate bond order of CO and N₂ by MOT. *(2019 Q1d — 5 marks)*

*(See Section 4 above — full calculations shown)*

**CO:** Bond Order = **3** (triple bond, similar to N₂, isoelectronic)
**N₂:** Bond Order = **3** (triple bond, most stable diatomic)

---

### Q5. Determine bonding, non-bonding, and anti-bonding electrons of O₂ by MOT. *(2018 Q4a — 4 marks)*

O₂ has **16 electrons** total.

MO configuration:
(σ1s)²(σ\*1s)²(σ2s)²(σ\*2s)²(σ2pz)²(π2px)²(π2py)²(π\*2px)¹(π\*2py)¹

| Category | Orbitals | Electrons |
|----------|----------|-----------|
| **Bonding** | σ1s, σ2s, σ2pz, π2px, π2py | 2+2+2+2+2 = **10** |
| **Antibonding** | σ\*1s, σ\*2s, π\*2px, π\*2py | 2+2+1+1 = **6** |
| **Non-bonding** | None in O₂ | **0** |

Bond Order = (10−6)/2 = **2**; O₂ is **paramagnetic** (2 unpaired e⁻ in degenerate π\*).

---

### Q6. 1st electron affinity for nonmetals is exothermic but 2nd is always endothermic — explain. *(2018 Q1c)*

- **1st EA (exothermic):** Adding an electron to a neutral atom is favorable because the nucleus still exerts attractive force on the incoming electron (net nuclear charge is positive relative to the electron). Energy is **released**.
- **2nd EA (endothermic):** Adding a 2nd electron to an already negatively charged anion (e.g., O⁻ → O²⁻) requires overcoming the **electron–electron repulsion** of the existing negative charge. Work must be **done against** this repulsion, so energy must be **supplied**. The process is always endothermic.

---

### Q7. Covalent character increases with increase in cation charge — Explain. *(2018 Q4d)*

By **Fajan's Rules**: A higher cation charge means:
1. Greater **polarizing power** (charge/radius ratio increases).
2. The cation distorts the electron cloud of the anion more severely.
3. This electron cloud distortion = **polarization** = partial sharing of electrons = covalent character.

**Example:** 
- Na⁺ (charge +1) → NaCl is ionic
- Mg²⁺ (charge +2) → MgCl₂ has more covalent character
- Al³⁺ (charge +3) → AlCl₃ is largely covalent

---

### Q8. Explain the paramagnetic nature of O₂ according to MOT. *(2016 Q3b)*

VBT predicts O₂ to be diamagnetic (all electrons paired in the O=O double bond), but experimental data shows O₂ is **paramagnetic**.

MOT explains this correctly:
- After filling all lower MOs, the last 2 electrons enter the **degenerate** (equal energy) π\*2px and π\*2py orbitals.
- By **Hund's rule**, they occupy these separately with **parallel spins** (↑ and ↑).
- These **2 unpaired electrons** make O₂ paramagnetic.
- This is one of MOT's greatest successes over VBT.

---

### Q9. NaF is isomorphous with MgO — Explain. *(2012 Q1c)*

*(See Section 6 above)*

---

### Q10. Compare properties of ionic bond and covalent bond compound. *(2012 Q3b)*

| Property | Ionic Compound | Covalent Compound |
|----------|---------------|-------------------|
| Bond formation | Electron transfer | Electron sharing |
| Melting/boiling point | High (strong lattice) | Low (weak intermolecular) |
| Solubility | Soluble in polar solvents | Soluble in non-polar solvents |
| Electrical conductivity | Conducts (molten/dissolved) | Poor conductor |
| Crystal structure | Crystalline, brittle | Soft or waxy |
| Isomorphism | Common | Rare |
| Directionality | Non-directional | Directional |

---

### Q11. Discuss importance of Valence Bond Theory (VBT). *(2018 Q4c — 3 marks)*

**Importance / Advantages of VBT:**
1. Explains the **directional nature** of covalent bonds (bond angles, geometry).
2. Accounts for **bond strength** and **bond length** through overlap extent.
3. Hybridization concept (sp, sp², sp³, sp³d, sp³d²) explains molecular shapes (VSEPR-compatible).
4. Explains **resonance** structures (e.g., benzene, SO₃).
5. Successfully explains most organic and simple inorganic molecules.

**Limitations:**
- Cannot explain paramagnetism of O₂.
- Fails to adequately explain delocalized bonding.
- Does not provide energy level diagrams.

---

## 9. Visual Aids

### MO Energy Level Diagram (O₂)
![MO diagram for O2](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/MOdiagram_O2.svg/400px-MOdiagram_O2.svg.png)
*Source: Wikimedia Commons — MO diagram showing the two unpaired electrons in π\* orbitals of O₂*

### LCAO Wavefunction Overlap
![LCAO bonding and antibonding](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Molecular_orbital_diagram_for_dihydrogen.svg/300px-Molecular_orbital_diagram_for_dihydrogen.svg.png)
*Source: Wikimedia Commons — Bonding (constructive) and antibonding (destructive) overlap in H₂*

### Sigma and Pi Bond Overlap
![Sigma and pi bonds](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Covalent_bond_hydrogen.svg/300px-Covalent_bond_hydrogen.svg.png)
*Source: Wikimedia Commons — Head-on (σ) vs. lateral (π) overlap*

### Fajan's Rules — Polarization Diagram
```
Small cation     Large anion
   (+)             (-)
   [ ]  ------  [ : : : ]   → electron cloud distorted → covalent character
   Al³⁺            Cl⁻
   high polarizing   high polarizability
```

---

## 10. Practice Questions

> 💡 **Instructions:** Try each question before revealing the solution.

---

**Q1.** Write the MO electronic configuration of NO and calculate its bond order. Is it diamagnetic or paramagnetic?

<details>
<summary>✅ Solution</summary>

NO has 7+8 = **15 electrons**.

MO config: (σ1s)²(σ\*1s)²(σ2s)²(σ\*2s)²(π2px)²(π2py)²(σ2pz)²(π\*2px)¹

Nᵦ = 2+2+2+2+2 = 10; Nₐ = 2+2+1 = 5

**Bond Order = (10−5)/2 = 2.5**

NO has **1 unpaired electron** in π\*2px → **paramagnetic**.

</details>

---

**Q2.** Explain why He₂ does not exist using MOT.

<details>
<summary>✅ Solution</summary>

He₂ would have 4 electrons: (σ1s)²(σ\*1s)²

Nᵦ = 2, Nₐ = 2 → **Bond Order = (2−2)/2 = 0**

A bond order of zero means **no net stabilization** — the molecule would be no more stable than separate He atoms. Hence He₂ **does not exist**.

</details>

---

**Q3.** What are the three conditions for effective LCAO?

<details>
<summary>✅ Solution</summary>

1. **Energy similarity:** The combining AOs must have similar energies.
2. **Symmetry compatibility:** The AOs must have the same symmetry with respect to the bond axis (e.g., both s-type or both p-type along the axis).
3. **Significant overlap:** The AOs must overlap sufficiently in space (large overlap integral S > 0).

</details>

---

**Q4.** Calculate bond order of F₂ and predict whether it is diamagnetic or paramagnetic.

<details>
<summary>✅ Solution</summary>

F₂ has 18 electrons.

MO config: (σ1s)²(σ\*1s)²(σ2s)²(σ\*2s)²(σ2pz)²(π2px)²(π2py)²(π\*2px)²(π\*2py)²

Nᵦ = 10, Nₐ = 8

**Bond Order = (10−8)/2 = 1** (single bond)

All electrons are paired → **diamagnetic**. Bond is weak because of lone-pair repulsions.

</details>

---

**Q5.** Using Fajan's rules, arrange the following in order of increasing covalent character: NaCl, MgCl₂, AlCl₃, SiCl₄.

<details>
<summary>✅ Solution</summary>

The cation charge increases: Na⁺ < Mg²⁺ < Al³⁺ < Si⁴⁺

Higher charge → higher polarizing power → more covalent character.

**Order of increasing covalent character:**
**NaCl < MgCl₂ < AlCl₃ < SiCl₄**

NaCl is ionic; SiCl₄ is essentially covalent (bp 57°C, non-conducting liquid).

</details>

---

**Q6.** Draw the Lewis structure of SO₃ and identify the formal charges.

<details>
<summary>✅ Solution</summary>

SO₃ has 6+3(6) = 24 valence electrons.

Resonance structures exist. In one resonance form:
- S forms a double bond with one O and single bonds (dative) with two O atoms.
- Each single-bonded O carries a formal charge of −1; S carries +2 in pure ionic picture, but resonance delocalizes.

Best representation: S is at center with 3 equivalent S−O bonds (bond order ~1.33) due to resonance. The molecule is **trigonal planar** (sp² hybridization).

</details>

---

**Q7.** Why does BF₃ act as a Lewis acid despite having only 6 electrons around B?

<details>
<summary>✅ Solution</summary>

BF₃ has only **6 valence electrons** around B (incomplete octet). This leaves an **empty p orbital** on B. Since Lewis acid = electron-pair acceptor, BF₃ readily accepts a lone pair from a donor (e.g., NH₃) to complete its octet. The empty orbital is the site of electrophilic attack.

BF₃ + NH₃ → F₃B←NH₃ (coordinate bond formed)

</details>

---

**Q8.** Compare σ and π bonds in terms of rotation, strength, and overlap type.

<details>
<summary>✅ Solution</summary>

| Property | σ Bond | π Bond |
|----------|--------|--------|
| Overlap | Head-on (axial) | Lateral (side-to-side) |
| Rotation | Freely rotate around bond | Rotation breaks the bond |
| Relative strength | Stronger | Weaker (less overlap) |
| Electron distribution | Symmetric about internuclear axis | Above and below internuclear axis |
| Can exist alone? | Yes (all single bonds have σ) | No (always accompanied by σ) |

</details>

---

**Q9.** The bond length of N₂ is 110 pm and that of N₂⁺ is 112 pm. Explain using bond order.

<details>
<summary>✅ Solution</summary>

- **N₂:** BO = 3, bond length = 110 pm
- **N₂⁺** (15 electrons): Remove 1 electron from a bonding MO (π2py): Nᵦ = 9, Nₐ = 4 → **BO = 2.5**

Lower bond order → weaker bond → **longer bond length** (112 pm > 110 pm). ✓

This confirms: higher bond order ↔ shorter, stronger bond.

</details>

---

**Q10.** Explain why ionic compounds are brittle.

<details>
<summary>✅ Solution</summary>

In an ionic crystal, layers of alternating cations and anions are held by electrostatic forces. When a **mechanical stress** is applied:
1. The layers shift relative to each other.
2. Like-charged ions (+ with +, − with −) come into alignment.
3. Repulsive forces cause the crystal to **cleave along a plane** rather than deform.

This shattering along cleavage planes is called **brittleness**. Unlike metals (delocalized electrons allow layer gliding), ionic compounds cannot deform plastically.

</details>

---

**Q11.** What is bond multiplicity? Show that bond order of nitrogen is 3.

<details>
<summary>✅ Solution</summary>

**Bond multiplicity (bond order)** = the number of shared electron pairs between two bonded atoms, calculated as (Nᵦ − Nₐ)/2 in MOT.

For N₂ (14 electrons):
MO config: (σ1s)²(σ\*1s)²(σ2s)²(σ\*2s)²(π2px)²(π2py)²(σ2pz)²

Nᵦ = 2+2+2+2+2 = 10
Nₐ = 2+2 = 4

BO = (10−4)/2 = **3** ✓

N₂ has a **triple bond** (one σ + two π), consistent with its very high bond energy (945 kJ/mol) and short bond length (110 pm).

</details>

---

**Q12.** Why is the melting point of MgO much higher than NaCl, though both have the same crystal structure?

<details>
<summary>✅ Solution</summary>

Both have **NaCl-type (rock salt)** structure. Melting point depends on lattice energy:

$$U \propto \frac{q^+ \times q^-}{r^+ + r^-}$$

| Compound | Cation charge | Anion charge | q⁺×q⁻ | Lattice Energy |
|----------|--------------|-------------|--------|----------------|
| NaCl | +1 | −1 | 1 | ~787 kJ/mol |
| MgO | +2 | −2 | 4 | ~3795 kJ/mol |

MgO has **4× the charge product** → much higher lattice energy → much higher melting point (~2852°C vs. ~801°C for NaCl).

</details>

---

## 11. References

1. Atkins, P., & de Paula, J. (2014). *Physical Chemistry* (10th ed.). Oxford University Press.
2. Chang, R., & Goldsby, K. (2016). *Chemistry* (12th ed.). McGraw-Hill Education.
3. Huheey, J. E., Keiter, E. A., & Keiter, R. L. (1993). *Inorganic Chemistry: Principles of Structure and Reactivity* (4th ed.). HarperCollins.
4. Miessler, G. L., Fischer, P. J., & Tarr, D. A. (2014). *Inorganic Chemistry* (5th ed.). Pearson.
5. Housecroft, C. E., & Sharpe, A. G. (2018). *Inorganic Chemistry* (5th ed.). Pearson.
6. LibreTexts Chemistry. (2023). *Molecular Orbital Theory*. https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Chemical_Bonding/Molecular_Orbital_Theory
7. Khan Academy. (2023). *Molecular orbital theory*. https://www.khanacademy.org/science/ap-chemistry/chemical-bonds-ap/molecular-orbital-theory-ap/a/molecular-orbital-mo-theory-overview
8. Fajan, K. (1923). Polarization and its role in chemistry. *Naturwissenschaften, 11*, 165–172.

---

*Last updated: 2025 | Repository: BUTex Chemistry-I Study Notes*

[← Back to Index](../README.md) | [Next: Periodic Properties →](./02_Periodic_Properties.md)
