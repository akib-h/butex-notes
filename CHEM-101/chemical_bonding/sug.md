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

1. [Introduction to Chemical Bonding](#1-introduction-to-chemical-bonding)  
2. [Fajans' Rules: Covalent Character in Ionic Bonds](#2-fajans-rules-covalent-character-in-ionic-bonds)  
3. [Valence Bond Theory (VBT) & Orbital Overlapping](#3-valence-bond-theory-vbt--orbital-overlapping)  
4. [Molecular Orbital Theory (MOT)](#4-molecular-orbital-theory-mot)  
5. [Comparison: VBT vs. MOT](#5-comparison-vbt-vs-mot)  
6. [Bond Order: Concept & Calculations (N₂, O₂, Ne₂)](#6-bond-order-concept--calculations-n₂-o₂-ne₂)  
7. [Practice Questions & Answers](#7-practice-questions--answers)  
8. [References](#8-references)  

---

## 1. Introduction to Chemical Bonding

Chemical bonding describes the attractive forces that hold atoms, ions, or molecules together. The driving force behind bond formation is the lowering of the system's potential energy, often by acquiring a stable electronic configuration (octet rule).

### Primary Types of Bonds

- **Ionic Bond:** Electrostatic attraction between cations and anions (formed by electron transfer). Non‑directional.  
- **Covalent Bond:** Formed by the sharing of electron pairs between atoms. Directional.  
- **Metallic Bond:** Attraction between fixed positive metal ions (“kernels”) and a “sea” of delocalized electrons.  
- **Coordinate (Dative) Bond:** A covalent bond where both shared electrons come from the same atom.  

---

## 2. Fajans' Rules: Covalent Character in Ionic Bonds

Though a bond may be formally ionic, no bond is 100% ionic. Fajans' rules predict the partial **covalent character** in ionic compounds based on the **polarization** of the anion by the cation.

### The Concept of Polarization

- **Cation:** Has *polarizing power* (ability to distort the anion's electron cloud).  
- **Anion:** Has *polarizability* (susceptibility to distortion).  
- When the anion's electron cloud is distorted toward the cation, electron density builds up between the nuclei, creating covalent character.

### The Rules

Greater covalent character is favored by:

1. **Small Size of Cation**  
   High charge density (charge / radius) pulls electrons more strongly.  
   - Example: LiCl is more covalent than NaCl because Li⁺ is smaller than Na⁺.

2. **Large Size of Anion**  
   Valence electrons are loosely held and easily distorted.  
   - Example: LiI is more covalent than LiF because I⁻ is larger than F⁻.

3. **High Charge on Ions**  
   Higher charge increases electrostatic attraction and distortion.  
   - Example: AlCl₃ (Al³⁺) is more covalent than NaCl (Na⁺).

4. **Electronic Configuration (Pseudo‑noble gas)**  
   Cations with 18 outer electrons (ns² np⁶ nd¹⁰) polarize more than those with 8 outer electrons (ns² np⁶), due to poor shielding by d‑electrons.  
   - Example: CuCl (Cu⁺, 3d¹⁰) is more covalent than NaCl (Na⁺, no d electrons).

---

## 3. Valence Bond Theory (VBT) & Orbital Overlapping

Proposed by Heitler and London (1927) and developed by Pauling.

### Core Postulates

1. A covalent bond forms due to the **overlap** of half‑filled atomic orbitals (AOs) containing electrons with opposite spins.  
2. The strength of the bond is directly proportional to the **extent of overlapping**.  
3. Bonds are **directional** (except s–s overlap) because orbitals (p, d, f) have specific orientations.  

### Types of Orbital Overlapping

Overlapping creates a region of high electron density between nuclei.

#### 1. Sigma (σ) Bond – Axial / Head‑on Overlap

Formed by end‑to‑end overlap along the internuclear axis. Stronger than π bonds.

- **s–s overlap:** Two s‑orbitals overlap (e.g., H₂). Non‑directional.  
- **s–p overlap:** One s and one p orbital overlap (e.g., HF).  
- **p–p (axial) overlap:** Two p‑orbitals overlap head‑to‑head (e.g., F₂, Cl₂).  

#### 2. Pi (π) Bond – Sideways / Lateral Overlap

Formed by the sideways overlap of parallel p‑orbitals perpendicular to the internuclear axis.

- Electron density is present **above and below** the internuclear axis, with a nodal plane on the axis.  
- Always formed *after* a σ bond (in double / triple bonds).  
- Weaker than σ bonds due to less effective overlap.

> **Note:**  
> - Single bond = 1 σ  
> - Double bond = 1 σ + 1 π  
> - Triple bond = 1 σ + 2 π  

---

## 4. Molecular Orbital Theory (MOT)

Developed by Hund and Mulliken (1932). It treats the **molecule as a whole**, not just localized atoms.

### Core Postulates (LCAO – Linear Combination of Atomic Orbitals)

1. Atomic orbitals combine to form **molecular orbitals (MOs)**.  
2. Number of MOs formed = number of combining AOs.  
3. **Bonding MO (σ, π):**  
   - Lower energy  
   - Constructive combination (`ψA + ψB`)  
   - Electron density concentrated *between* the nuclei  
4. **Antibonding MO (σ\*, π\*):**  
   - Higher energy  
   - Destructive combination (`ψA − ψB`)  
   - Node between the nuclei  
5. Electrons fill MOs from lowest to highest energy (Aufbau principle) and obey Hund’s rule and Pauli’s exclusion principle.

### Energy Level Diagrams (s–p Mixing)

The order of MO energies depends on **s–p mixing**.

**Case A: Molecules with ≤ 14 electrons (B₂, C₂, N₂)**  
Significant s–p mixing pushes σ(2p) higher than π(2p).

`σ1s < σ*1s < σ2s < σ*2s < π2px = π2py < σ2pz < π*2px = π*2py < σ*2pz`

**Case B: Molecules with > 14 electrons (O₂, F₂, Ne₂)**  
s–p mixing is negligible. σ(2p) is lower than π(2p).

`σ1s < σ*1s < σ2s < σ*2s < σ2pz < π2px = π2py < π*2px = π*2py < σ*2pz`

(Here, `*` indicates antibonding MOs.)

---

## 5. Comparison: VBT vs. MOT

| Feature | Valence Bond Theory (VBT) | Molecular Orbital Theory (MOT) |
| :--- | :--- | :--- |
| **Electron Location** | Electrons are **localized** between two specific atoms. | Electrons are **delocalized** over the entire molecule. |
| **Orbital Identity** | Atomic orbitals retain their character (monocentric). | Atomic orbitals combine to form new MOs (polycentric). |
| **Magnetic Nature** | Often fails to explain paramagnetism (e.g., predicts O₂ is diamagnetic). | Successfully explains paramagnetism (e.g., O₂ has unpaired electrons). |
| **Resonance / Delocalization** | Requires “resonance structures” to explain delocalization. | Delocalization is built‑in; no extra resonance structures needed. |
| **Mathematical Treatment** | Conceptually simpler, good for basic shapes. | More complex, but more accurate for energies and spectra. |
| **Prediction of Existence** | Cannot easily show non‑existence of He₂, Ne₂, etc. | Predicts non‑existence via bond order = 0 (no net bonding). |

---

## 6. Bond Order: Concept & Calculations (N₂, O₂, Ne₂)

**Bond order (B.O.)** is defined as:

`Bond Order = (Nb − Na) / 2`

where:  
- `Nb` = number of electrons in bonding MOs  
- `Na` = number of electrons in antibonding MOs  

- If **B.O. > 0** → molecule is stable.  
- If **B.O. = 0** → molecule is unstable / does not exist.  
- Higher B.O. → stronger bond and shorter bond length.

### 6.1 Nitrogen Molecule (N₂)

- **Total electrons:** 14  
- **Applicable MO order:** (for ≤ 14 electrons)  
  `σ1s < σ*1s < σ2s < σ*2s < π2px = π2py < σ2pz < π*2px = π*2py < σ*2pz`

- **Electron configuration (valence region shown):**  
  Bonding MOs: `(σ2s)² (π2px)² (π2py)² (σ2pz)²`  
  Antibonding MOs: `(σ*2s)²`  

- `Nb = 2 (σ2s) + 4 (π2p) + 2 (σ2pz) = 8` (valence)  
  Including 1s core: total bonding electrons = 10  
- `Na = 2 (σ*1s) + 2 (σ*2s) = 4`  

`Bond Order = (10 − 4) / 2 = 3`

- Result: N≡N triple bond.  
- All electrons are paired → N₂ is **diamagnetic**.

### 6.2 Oxygen Molecule (O₂)

- **Total electrons:** 16  
- **Applicable MO order:** (for > 14 electrons)  
  `σ1s < σ*1s < σ2s < σ*2s < σ2pz < π2px = π2py < π*2px = π*2py < σ*2pz`

- **Electron configuration (valence region shown):**  
  Bonding MOs: `(σ2s)² (σ2pz)² (π2px)² (π2py)²`  
  Antibonding MOs: `(σ*2s)² (π*2px)¹ (π*2py)¹`

- `Nb = 2 (σ2s) + 2 (σ2pz) + 4 (π2p) = 8` (valence)  
  Including 1s core: total bonding electrons = 10  
- `Na = 2 (σ*1s) + 2 (σ*2s) + 2 (π*2p) = 6`  

`Bond Order = (10 − 6) / 2 = 2`

- Result: O=O double bond.  
- Two unpaired electrons in π\* orbitals → O₂ is **paramagnetic**.

### 6.3 Neon Molecule (Ne₂)

- **Total electrons:** 20  

All bonding MOs are filled and all corresponding antibonding MOs are also filled.

- `Nb = 10`  
- `Na = 10`  

`Bond Order = (10 − 10) / 2 = 0`

- Result: Ne₂ **does not exist** (no net stabilization from bonding).

---

## 7. Practice Questions & Answers

**Q1. Why is O₂ paramagnetic while N₂ is diamagnetic despite both having even numbers of electrons?**

**Answer:**  
According to MOT:

- In O₂ (16 electrons), the last two electrons occupy the degenerate antibonding π\* orbitals singly (Hund’s rule), resulting in **two unpaired electrons** → paramagnetic.  
- In N₂ (14 electrons), all electrons are paired in bonding MOs, with no electrons in π\* orbitals → **diamagnetic**.

---

**Q2. Arrange O₂, O₂⁺, O₂⁻, O₂²⁻ in increasing order of stability.**

**Answer:**  

Use bond order:

- O₂ (16 e⁻): B.O. = 2.0  
- O₂⁺ (15 e⁻): one electron removed from π\* → B.O. = 2.5  
- O₂⁻ (17 e⁻): one electron added to π\* → B.O. = 1.5  
- O₂²⁻ (18 e⁻): two electrons added to π\* → B.O. = 1.0  

Higher bond order → greater stability.

**Order (increasing stability):**  
O₂²⁻ < O₂⁻ < O₂ < O₂⁺

---

**Q3. Using Fajans' rules, explain why SnCl₂ is a solid while SnCl₄ is a volatile liquid.**

**Answer:**  

- SnCl₂ contains Sn²⁺; SnCl₄ contains Sn⁴⁺.  
- Sn⁴⁺ has higher charge and (effectively) higher charge density than Sn²⁺ → greater polarizing power.  
- According to Fajans' rules, greater polarizing power of Sn⁴⁺ leads to more covalent character in SnCl₄ compared to SnCl₂.  
- **SnCl₂**: more ionic, strong electrostatic attractions, forms an ionic lattice → high melting point, solid.  
- **SnCl₄**: more covalent, exists as discrete molecules with weaker intermolecular forces → low boiling point, volatile liquid.

---

**Q4. Differentiate between a sigma (σ) bond and a pi (π) bond regarding rotation.**

**Answer:**

- **Sigma (σ) bond:**  
  - Electron density is cylindrically symmetrical around the internuclear axis.  
  - Free rotation about the bond axis is generally possible without breaking the bond.  

- **Pi (π) bond:**  
  - Electron density lies above and below the internuclear axis due to sideways overlap of p‑orbitals.  
  - Rotation around the bond axis would break the parallel overlap of p‑orbitals, thus **restricting rotation**.

---

## 8. References

1. **Atkins, P., & de Paula, J.** *Atkins' Physical Chemistry*. Oxford University Press.  
2. **Huheey, J. E., Keiter, E. A., & Keiter, R. L.** *Inorganic Chemistry: Principles of Structure and Reactivity*. Pearson.  
3. **Miessler, G. L., & Tarr, D. A.** *Inorganic Chemistry*. Pearson Education.  
4. **Lee, J. D.** *Concise Inorganic Chemistry*. Wiley‑Blackwell.  

---
