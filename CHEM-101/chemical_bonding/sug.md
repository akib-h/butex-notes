# CHEMICAL BONDING – S
**GitHub-Friendly Markdown Format**  
**Topic Coverage**: Lewis approach → VBT → Hybridisation → Overlapping → VSEPR → Fajans Rule → MOT → Bond Order (including N₂, O₂, Ne₂) → Detailed VBT vs MOT comparison  

---

## 1. Why Atoms Form Bonds – The Driving Force
- Achieve noble gas configuration (octet/duet rule) → minimum energy state  
- Bond formation is exothermic (energy released > energy required to promote electrons)  
- Lower potential energy = greater stability  

---

## 2. Types of Chemical Bonds (Classification)

| Type              | Nature                  | Example          | Key Feature                          |
|-------------------|-------------------------|------------------|--------------------------------------|
| Ionic             | Electrostatic (cation–anion) | NaCl, MgO       | Complete electron transfer           |
| Covalent          | Electron sharing        | Cl₂, CH₄         | Shared pairs (single, double, triple)|
| Coordinate/Dative | Both electrons from one atom | NH₄⁺, H₃O⁺     | Lone pair donation                   |
| Metallic          | Delocalised electrons   | Cu, Fe           | Electron sea model                   |

---

## 3. Valence Bond Theory (VBT) – Heitler-London + Pauling Extension

### Core Ideas
1. Bond forms by maximum overlap of half-filled atomic orbitals  
2. Overlapping orbitals must have opposite spins (Pauli principle)  
3. Greater the overlap → stronger the bond  
4. Orbitals retain their identity but electron density increases in overlap region  

### Hybridisation (Pauling’s biggest contribution)

| Molecule/Ion | Geometry         | Hybridisation | Example   |
|--------------|------------------|---------------|-----------|
| BeCl₂        | Linear           | sp            | BeCl₂     |
| BCl₃         | Trigonal planar  | sp²           | BF₃       |
| CH₄          | Tetrahedral      | sp³           | CCl₄      |
| PCl₅         | Trigonal bipyramidal | sp³d      | PCl₅      |
| SF₆          | Octahedral       | sp³d²         | SF₆       |
| IF₇          | Pentagonal bipyramidal | sp³d³   | IF₇       |

### Limitations of Pure VBT
- Cannot explain paramagnetic O₂  
- Fails for odd-electron molecules  
- Cannot explain bond energy variations accurately  
- No explanation for excited states or spectra  

---

## 4. Overlapping of Orbitals – The Heart of VBT

| Type          | Orbital Combination     | Bond Type | Strength | Example     |
|---------------|-------------------------|-----------|----------|-------------|
| s–s           | s + s                   | σ         | Strong   | H₂          |
| s–p           | s + p                   | σ         | Strong   | HCl         |
| p–p head-on   | p + p (along axis)      | σ         | Very strong | F₂       |
| p–p sideways  | p + p (perpendicular)   | π         | Weaker than σ | O₂, N₂   |

**π-bond is always accompanied by a σ-bond** (except in very rare cases).  
Maximum overlap order: σ(p–p) > σ(s–p) > σ(s–s) > π(p–p)

---

## 5. Molecular Orbital Theory (MOT) – Hund-Mulliken Theory

### Key Principles
1. Atomic orbitals combine to form Molecular Orbitals (LCAO)  
2. Number of MOs formed = Number of AOs combined  
3. MOs are filled following Aufbau, Pauli, and Hund’s rules  
4. Bonding MOs (lower energy) and Antibonding MOs (higher energy)

### MO Configuration & Bond Order for Second Period Homonuclear Molecules

| Molecule | Total e⁻ | MO Order (up to N₂) → σ1s σ*1s σ2s σ*2s π2pₓ=π2pᵧ σ2p_z π*2pₓ=π*2pᵧ σ*2p_z  
|----------|----------|-------------------------------------------------------------|
|          |          | MO Order (O₂, F₂) → σ1s σ*1s σ2s σ*2s σ2p_z π2pₓ=π2pᵧ π*2pₓ=π*2pᵧ σ*2p_z |
| N₂       | 14       | KK (σ2s)² (σ*2s)² (π2p)⁴ (σ2p)² → Bond Order = (10–4)/2 = **3**  
| O₂       | 16       | KK (σ2s)² (σ*2s)² (σ2p_z)² (π2p)⁴ (π*2p)² → Bond Order = (10–6)/2 = **2** (paramagnetic)  
| O₂⁺      | 15       | Same as O₂ but remove one π* → Bond Order = **2.5** (stronger & shorter than O₂)  
| O₂⁻      | 17       | One extra π* → Bond Order = **1.5** (superoxide)  
| O₂²⁻     | 18       | (π*2p)⁴ → Bond Order = **1** (peroxide)  
| Ne₂      | 20       | All bonding & antibonding filled → Bond Order = (10–10)/2 = **0** (does not exist)  

**Most important takeaway**: Inversion of σ2p_z and π2p occurs after N₂ due to s–p mixing.

---

## 6. Detailed Comparison – VBT vs MOT (Exam Favourite Table)

| Feature                        | Valence Bond Theory (VBT)               | Molecular Orbital Theory (MOT)                     |
|--------------------------------|-----------------------------------------|----------------------------------------------------|
| Electron location              | Localised between two atoms             | Delocalised over entire molecule                   |
| Explains paramagnetism of O₂   | Fails (needs resonance)                 | Easily explains (2 unpaired e⁻ in π* orbitals)     |
| Bond order concept             | No direct formula                       | Precise formula (½)(Nb – Na)                       |
| Odd-electron molecules         | Difficult                               | Easily explained                                   |
| Excited states & spectra       | Cannot explain                          | Excellent (promotion to antibonding MOs)           |
| Hypervalent molecules (PCl₅)   | Needs d-orbital participation           | Uses multicentre bonding (3c–4e bonds)             |
| Resonance                      | Requires multiple structures            | Single MO diagram suffices                         |
| Quantitative accuracy          | Poor                                    | Very good (computational chemistry basis)          |

**Verdict (University level)**: MOT is superior and modern; VBT is pedagogically useful for geometry.

---

## 7. Fajan’s Rules – Predicting Covalent Character in Ionic Compounds  
(1923–1924, Kasimir Fajans)

A compound is more covalent if:

1. **Small cation** → high charge density → greater polarising power  
2. **Large anion** → more polarisable  
3. **High charge** on cation or anion (or both)  
4. **Cation with pseudo noble gas configuration** (ns² np⁶ nd¹⁰) → poor shielding → high polarising power (e.g., Cu⁺, Ag⁺, Au⁺, Sn²⁺, Pb²⁺)

### Order of Polarising Power (common cations)
Cu⁺ > Al³⁺ > Mg²⁺ > Na⁺  
(Why CuCl is colourless but CuCl₂ coloured? Cu⁺ has higher polarising power than Cu²⁺ due to d¹⁰ configuration)

### Applications (Exam Questions)
- AgCl, AgBr, AgI → increasing covalent character → colour intensifies  
- AlCl₃ dimerises (covalent) but AlF₃ ionic  
- SnCl₂ more covalent than SnCl₄ (Sn²⁺ has higher charge density due to inert pair)

---

## 8. Frequently Asked University Exam Questions & Answers

**Q1.** Why is bond length O₂⁺ < O₂ < O₂⁻ < O₂²⁻?  
**Ans.** Bond order: O₂⁺ (2.5) > O₂ (2) > O₂⁻ (1.5) > O₂²⁻ (1). Higher bond order → shorter & stronger bond.

**Q2.** Why is N₂ diamagnetic but O₂ paramagnetic?  
**Ans.** N₂ has all paired electrons (bond order 3). O₂ has two unpaired electrons in π*2p orbitals (bond order 2).

**Q3.** VBT fails to explain magnetic property of O₂. Explain.  
**Ans.** VBT predicts O=O with all paired electrons → diamagnetic, but experiment shows paramagnetic (2 unpaired electrons). MOT correctly predicts.

**Q4.** Why is BeCl₂ linear but SnCl₂ bent?  
**Ans.** BeCl₂ → sp hybridised (linear). SnCl₂ → Sn²⁺ has lone pair + inert pair effect → greater repulsion → bent (VSEPR).

**Q5.** Arrange in increasing order of covalent character: NaCl, MgCl₂, AlCl₃, SiCl₄  
**Ans.** NaCl < MgCl₂ < AlCl₃ < SiCl₄ (charge increases, size decreases → Fajans)

---

## 9. References & Recommended Reading

1. J.D. Lee – Concise Inorganic Chemistry (5th Ed.)  
2. Atkins’ Physical Chemistry (11th Ed.) – Chapter 13 (MO Theory)  
3. Cotton, Wilkinson & Gaus – Basic Inorganic Chemistry  
4. Huheey, Keiter & Keiter – Inorganic Chemistry (4th Ed.)  
5. NCERT Class XI Chemistry Part II – Chapter 4 (excellent summary)  
6. Purdue University ChemLibreTexts – Molecular Orbital Theory  
7. MIT OpenCourseWare 5.111 (Principles of Chemical Science) – Lecture on MO Theory  

---

# Chemical Bonding: Suggestions

**Subject:** Inorganic Chemistry  
**Topic:** Chemical Bonding & Molecular Structure  
**Level:** Undergraduate / University  

---

## Table of Contents

1. [Introduction to Chemical Bonding](#introduction-to-chemical-bonding)
2. [Fajans' Rules: Covalent Character in Ionic Bonds](#fajans-rules-covalent-character-in-ionic-bonds)
3. [Valence Bond Theory (VBT) & Orbital Overlapping](#valence-bond-theory-vbt--orbital-overlapping)
4. [Molecular Orbital Theory (MOT)](#molecular-orbital-theory-mot)
5. [Comparison: VBT vs. MOT](#comparison-vbt-vs-mot)
6. [Bond Order: Concept & Calculations (N<sub>2</sub>, O<sub>2</sub>, Ne<sub>2</sub>)](#bond-order-concept--calculations)
7. [Practice Questions & Answers](#practice-questions--answers)
8. [References](#references)

---

## Introduction to Chemical Bonding

Chemical bonding describes the attractive forces that hold atoms, ions, or molecules together. The driving force behind bond formation is the lowering of the system's potential energy, often by acquiring a stable electronic configuration (octet rule). [web:4]

### Primary Types of Bonds

- **Ionic Bond:** Electrostatic attraction between cations and anions (formed by electron transfer). Non-directional.
- **Covalent Bond:** Formed by the sharing of electron pairs between atoms. Directional.
- **Metallic Bond:** Attraction between fixed positive metal ions ("kernels") and a "sea" of delocalized electrons.
- **Coordinate (Dative) Bond:** A covalent bond where both shared electrons come from the same atom.

---

## Fajans' Rules: Covalent Character in Ionic Bonds

Though a bond may be formally ionic, no bond is 100% ionic. Fajans' rules predict the partial **covalent character** in ionic compounds based on the **polarization** of the anion by the cation. [web:1][web:3][web:9]

### The Concept of Polarization

- **Cation:** Has "Polarizing Power" (ability to distort the anion's electron cloud).
- **Anion:** Has "Polarizability" (susceptibility to distortion).

When the anion's electron cloud is distorted toward the cation, electron density builds up between the nuclei, creating covalent character.

### The Rules

Greater covalent character is favored by:

1. **Small Size of Cation:** High charge density (charge/radius) pulls electrons more strongly.
    - *Example:* LiCl is more covalent than NaCl because Li<sup>+</sup> is smaller than Na<sup>+</sup>. [web:1]
2. **Large Size of Anion:** Valence electrons are loosely held and easily distorted.
    - *Example:* LiI is more covalent than LiF because I<sup>-</sup> is larger than F<sup>-</sup>. [web:3]
3. **High Charge on Ions:** Higher charge increases electrostatic attraction and distortion.
    - *Example:* AlCl<sub>3</sub> (Al<sup>3+</sup>) is more covalent than NaCl (Na<sup>+</sup>). [web:1]
4. **Electronic Configuration (Pseudo-noble gas):** Cations with 18 valence electrons (ns<sup>2</sup>np<sup>6</sup>nd<sup>10</sup>) polarize more than those with 8 valence electrons (ns<sup>2</sup>np<sup>6</sup>) due to poor shielding by d-electrons.
    - *Example:* CuCl (Cu<sup>+</sup>) is more covalent than NaCl (Na<sup>+</sup>). [web:5]

---

## Valence Bond Theory (VBT) & Orbital Overlapping

Proposed by Heitler and London (1927) and developed by Pauling. [web:2]

### Core Postulates

1. A covalent bond forms due to the **overlap** of half-filled atomic orbitals (AOs) containing electrons with opposite spins.
2. The strength of the bond is directly proportional to the **extent of overlapping**.
3. Bonds are **directional** (except s-s overlap) because orbitals (p, d, f) have specific orientations.

### Types of Orbital Overlapping

Overlapping creates a region of high electron density between nuclei.

#### 1. Sigma (`σ`) Bond (Axial/Head-on Overlap)

Formed by end-to-end overlap along the internuclear axis. Stronger than `π` bonds.

- **s-s overlap:** Two s-orbitals overlap (e.g., H<sub>2</sub>). Non-directional.
- **s-p overlap:** One s and one p orbital overlap (e.g., HF).
- **p-p (axial) overlap:** Two p-orbitals overlap head-to-head (e.g., F<sub>2</sub>, Cl<sub>2</sub>).

#### 2. Pi (`π`) Bond (Sideways/Lateral Overlap)

Formed by the sideways overlap of parallel p-orbitals perpendicular to the internuclear axis.

- Electron density is present **above and below** the internuclear axis, but zero on the axis (nodal plane).
- Always formed *after* a `σ` bond (in double/triple bonds).
- Weaker than `σ` bonds due to less efficient overlap.

> **Note:** A single bond is always `σ`. A double bond is `1σ + 1π`. A triple bond is `1σ + 2π`.

---

## Molecular Orbital Theory (MOT)

Developed by Hund and Mulliken (1932). It treats the **molecule as a whole**, not just localized atoms. [web:2]

### Core Postulates (LCAO - Linear Combination of Atomic Orbitals)

1. Atomic orbitals combine to form **Molecular Orbitals (MOs)**.
2. Number of MOs formed = Number of combining AOs.
3. **Bonding MO (`σ`, `π`):** Lower energy, constructive interference (`ψ`<sub>A</sub> + `ψ`<sub>B</sub>), concentrates electron density *between* nuclei.
4. **Antibonding MO (`σ*`, `π*`):** Higher energy, destructive interference (`ψ`<sub>A</sub> - `ψ`<sub>B</sub>), has a node *between* nuclei.
5. Electrons fill MOs from lowest to highest energy (Aufbau principle) and obey Hund’s Rule and Pauli’s Exclusion Principle.

### Energy Level Diagrams (Important Distinction)

The order of MO energies depends on **s-p mixing**.

**Case A: Molecules with ≤ 14 electrons (B<sub>2</sub>, C<sub>2</sub>, N<sub>2</sub>)**  
Significant s-p mixing pushes `σ`<sub>2p</sub> higher in energy.

```
σ1s < σ*1s < σ2s < σ*2s < π2px = π2py < σ2pz < π*2px = π*2py < σ*2pz
```

**Case B: Molecules with > 14 electrons (O<sub>2</sub>, F<sub>2</sub>, Ne<sub>2</sub>)**  
S-p mixing is negligible. `σ`<sub>2p</sub> is lower than `π`<sub>2p</sub>.

```
σ1s < σ*1s < σ2s < σ*2s < σ2pz < π2px = π2py < π*2px = π*2py < σ*2pz
```

---

## Comparison: VBT vs. MOT

| Feature          | Valence Bond Theory (VBT)                          | Molecular Orbital Theory (MOT)                     |
|------------------|----------------------------------------------------|----------------------------------------------------|
| **Electron Location** | Electrons are **localized** between two specific atoms. | Electrons are **delocalized** over the entire molecule. [web:2] |
| **Identity**     | Atomic orbitals retain their character (monocentric). | Atomic orbitals lose identity; new MOs form (polycentric). |
| **Magnetic Nature** | Often fails to explain paramagnetism (e.g., predicts O<sub>2</sub> is diamagnetic). | Successfully explains paramagnetism (e.g., O<sub>2</sub> has unpaired e<sup>-</sup>). |
| **Resonance**    | Requires "resonance hybrids" to explain delocalization. | Delocalization is inherent in the theory; no resonance structures needed. |
| **Calculation**  | Mathematically simpler, visualizes bond formation. | Computationally complex, but more accurate for spectra/energy. |
| **Existence**    | Cannot predict if a molecule like He<sub>2</sub> doesn't exist. | Predicts non-existence via Bond Order = 0. |

---

## Bond Order: Concept & Calculations

**Bond Order (B.O.)** is half the difference between the number of electrons in bonding MOs (N<sub>b</sub>) and antibonding MOs (N<sub>a</sub>).

**Bond Order = (N<sub>b</sub> - N<sub>a</sub>) / 2**

- **B.O. > 0:** Molecule is stable.
- **B.O. = 0:** Molecule is unstable/does not exist.
- **Significance:** Higher B.O. → Stronger bond, Shorter bond length.

### Calculation Examples

#### 1. Nitrogen Molecule (N<sub>2</sub>)

- **Total Electrons:** 14
- **Configuration (Order for ≤14e<sup>-</sup>):**  
  `(σ1s)<sup>2</sup> (σ*1s)<sup>2</sup> (σ2s)<sup>2</sup> (σ*2s)<sup>2</sup> (π2px<sup>2</sup> = π2py<sup>2</sup>) (σ2pz)<sup>2</sup>`
- **N<sub>b</sub> (Bonding):** 10
- **N<sub>a</sub> (Antibonding):** 4
- **B.O. = (10 - 4)/2 = 3**  
  *Result:* N ≡ N triple bond. Diamagnetic (no unpaired electrons).

#### 2. Oxygen Molecule (O<sub>2</sub>)

- **Total Electrons:** 16
- **Configuration (Order for >14e<sup>-</sup>):**  
  `(σ1s)<sup>2</sup> (σ*1s)<sup>2</sup> (σ2s)<sup>2</sup> (σ*2s)<sup>2</sup> (σ2pz)<sup>2</sup> (π2px<sup>2</sup> = π2py<sup>2</sup>) (π*2px<sup>1</sup> = π*2py<sup>1</sup>)`
- **N<sub>b</sub>:** 10
- **N<sub>a</sub>:** 6
- **B.O. = (10 - 6)/2 = 2**  
  *Result:* O = O double bond. **Paramagnetic** (due to 2 unpaired electrons in `π*` orbitals).

#### 3. Neon Molecule (Ne<sub>2</sub>)

- **Total Electrons:** 20
- **Configuration:**  
  `(σ1s)<sup>2</sup> (σ*1s)<sup>2</sup> (σ2s)<sup>2</sup> (σ*2s)<sup>2</sup> (σ2pz)<sup>2</sup> (π2px<sup>2</sup> = π2py<sup>2</sup>) (π*2px<sup>2</sup> = π*2py<sup>2</sup>) (σ*2pz)<sup>2</sup>`
- **N<sub>b</sub>:** 10
- **N<sub>a</sub>:** 10
- **B.O. = (10 - 10)/2 = 0**  
  *Result:* Ne<sub>2</sub> **does not exist**.

---

## Practice Questions & Answers

**Q1: Why is O<sub>2</sub> paramagnetic while N<sub>2</sub> is diamagnetic despite both having even numbers of electrons?**

**Answer:** According to MOT, for O<sub>2</sub> (16 electrons), the last two electrons enter the degenerate antibonding `π*` orbitals singly (Hund’s Rule). These unpaired electrons cause paramagnetism. In N<sub>2</sub> (14 electrons), all electrons are paired in the lower energy bonding orbitals. [web:2]

**Q2: Arrange O<sub>2</sub>, O<sub>2</sub><sup>+</sup>, O<sub>2</sub><sup>-</sup>, O<sub>2</sub><sup>2-</sup> in increasing order of stability.**

**Answer:** Calculate Bond Orders:  
- O<sub>2</sub> (16e): BO = 2.0  
- O<sub>2</sub><sup>+</sup> (15e): BO = 2.5  
- O<sub>2</sub><sup>-</sup> (17e): BO = 1.5  
- O<sub>2</sub><sup>2-</sup> (18e): BO = 1.0  
**Order:** O<sub>2</sub><sup>2-</sup> < O<sub>2</sub><sup>-</sup> < O<sub>2</sub> < O<sub>2</sub><sup>+</sup>

**Q3: Using Fajans' Rules, explain why SnCl<sub>2</sub> is a solid while SnCl<sub>4</sub> is a volatile liquid.**

**Answer:** Sn<sup>4+</sup> in SnCl<sub>4</sub> has a higher charge and smaller size than Sn<sup>2+</sup> in SnCl<sub>2</sub>. According to Fajans' rules, higher positive charge leads to greater polarization of the anion (Cl<sup>-</sup>), resulting in higher covalent character. High covalent character implies weak intermolecular forces (Van der Waals) compared to the strong electrostatic forces in ionic solids, making SnCl<sub>4</sub> volatile. [web:1][web:5]

**Q4: Differentiate between a Sigma and a Pi bond regarding rotation.**

**Answer:** A sigma bond allows for free rotation of atoms around the internuclear axis because the electron distribution is cylindrically symmetrical. A pi bond restricts rotation because rotating one atom would break the parallel overlap of the p-orbitals.

---

## References

1. **Atkins, P., & de Paula, J.** *Atkins' Physical Chemistry*. Oxford University Press.
2. **Huheey, J. E., Keiter, E. A., & Keiter, R. L.** *Inorganic Chemistry: Principles of Structure and Reactivity*. Pearson.
3. **Miessler, G. L., & Tarr, D. A.** *Inorganic Chemistry*. Pearson Education.
4. **Lee, J. D.** *Concise Inorganic Chemistry*. Wiley-Blackwell.
```
