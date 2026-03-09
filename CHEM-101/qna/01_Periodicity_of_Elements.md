# ⚛️ Chapter 1: Periodicity of the Elements

> **Topics Covered:** Atomic Structure · Quantum Numbers · Orbital Shapes · Hybridization · Periodic Trends · Covalency

---

## 📋 Table of Contents
- [Quantum Numbers](#-quantum-numbers)
- [Heisenberg's Uncertainty Principle](#-heisenbergs-uncertainty-principle)
- [Orbital Shapes and Orientation](#-shapes-and-orientation-of-orbitals)
- [Hybridization (SP³ in CH₄)](#-sp³-hybridization-in-ch₄)
- [Overlapping of Orbitals](#-overlapping-of-orbitals)
- [Modern Periodic Law](#-modern-periodic-law)
- [Classification of Elements](#-classification-of-elements-by-electronic-configuration)
- [Periodic Trends](#-periodic-trends)
- [Covalency & Fajan's Rule](#-why-is-agi-more-covalent-than-agcl)
- [Practice Questions](#-practice-questions-with-solutions)
- [References](#-references)

---

## 🔢 Quantum Numbers

Quantum numbers are a set of **four numerical values** that completely describe the state and position of an electron in an atom.

### The Four Quantum Numbers

| Symbol | Name | Values | Describes |
|--------|------|--------|-----------|
| **n** | Principal Quantum Number | 1, 2, 3, … | Energy level / shell size |
| **ℓ** | Azimuthal (Angular Momentum) | 0 to (n−1) | Shape of orbital / subshell |
| **mₗ** | Magnetic Quantum Number | −ℓ to +ℓ | Orientation of orbital in space |
| **mₛ** | Spin Quantum Number | +½ or −½ | Spin of the electron |

---

### 📊 When n = 3 (All Relationships)

```
n = 3
├── ℓ = 0  (s subshell)
│     mₗ = 0
│     Number of orbitals = 1
│
├── ℓ = 1  (p subshell)
│     mₗ = -1, 0, +1
│     Number of orbitals = 3
│
└── ℓ = 2  (d subshell)
      mₗ = -2, -1, 0, +1, +2
      Number of orbitals = 5
```

**Total orbitals when n = 3** = n² = 9  
**Maximum electrons** = 2n² = 18

---

### 📊 When n = 4 (Complete Table)

| n | ℓ | Subshell | mₗ values | No. of Orbitals | Max electrons |
|---|---|----------|-----------|-----------------|---------------|
| 4 | 0 | 4s | 0 | 1 | 2 |
| 4 | 1 | 4p | −1, 0, +1 | 3 | 6 |
| 4 | 2 | 4d | −2, −1, 0, +1, +2 | 5 | 10 |
| 4 | 3 | 4f | −3, −2, −1, 0, +1, +2, +3 | 7 | 14 |
| **Total** | | | | **16** | **32** |

> 💡 **Formula:** Total orbitals = n², Maximum electrons = 2n²

---

### Mathematical Notation Summary

```
n = 1, 2, 3, 4, ...
ℓ = 0, 1, 2, ..., (n−1)
mₗ = −ℓ, ..., 0, ..., +ℓ    [total: 2ℓ+1 values]
mₛ = +½ or −½
```

---

## 🌀 Heisenberg's Uncertainty Principle

### Statement
> *"It is impossible to simultaneously determine the exact position and exact momentum (or velocity) of a sub-atomic particle with absolute precision."*

### Mathematical Expression

$$\Delta x \cdot \Delta p \geq \frac{h}{4\pi}$$

Where:
- **Δx** = uncertainty in position
- **Δp** = uncertainty in momentum (= mΔv)
- **h** = Planck's constant (6.626 × 10⁻³⁴ J·s)

An equivalent form:

$$\Delta E \cdot \Delta t \geq \frac{h}{4\pi}$$

### Explanation

```
┌─────────────────────────────────────────────────┐
│  If Δx is SMALL (position well-known)           │
│      → Δp is LARGE (momentum very uncertain)   │
│                                                  │
│  If Δp is SMALL (momentum well-known)           │
│      → Δx is LARGE (position very uncertain)   │
└─────────────────────────────────────────────────┘
```

### Significance
- It is NOT a limitation of instruments but a **fundamental property of nature**
- Explains why electrons cannot exist inside the nucleus
- Leads to the concept of **orbitals** (probability regions) rather than fixed orbits

---

## 🔵 Shapes and Orientation of Orbitals

### s-Orbital (ℓ = 0)

```
        ●
       ███
      █████
       ███
        ●
  Spherically symmetric
  No directional preference
  mₗ = 0 (only one orientation)
```

- **Shape:** Sphere
- **Node:** (n−1) radial nodes
- **Example:** 1s, 2s, 3s

---

### p-Orbital (ℓ = 1)

Three p-orbitals oriented along x, y, z axes:

```
         pz              px              py
          |
    +  ┌──┴──┐  +      ──●──        ●
       │  ●  │          ─────
    -  └──┬──┘  -
          |
  Dumbbell shape along z   along x    along y
```

**Visual diagram:**

```
      z          z          z
      │          │          │
  +   │   +      │          │
 ─────●─────    ─●─  ───●───  
  -   │   -      │          │
      │          │  +    +  │
     pz          px         py
```

- **Shape:** Dumbbell (two lobes)
- **Number:** 3 orbitals (px, py, pz)
- **mₗ:** −1, 0, +1

---

### d-Orbital (ℓ = 2) — Five orientations

```
  dxy        dxz        dyz       dx²-y²     dz²
  ╔══╗       ╔══╗       ╔══╗      ╔══╗       ╔═╗
  ║╳╳║       ║╱╲║       ║╱╲║      ║╋╋║       ║●║
  ╚══╝       ╚══╝       ╚══╝      ╚══╝       ╚═╝
  (between  (xz plane) (yz plane) (along     (along
   axes)                           axes)      z + ring)
```

| Orbital | Shape | Orientation |
|---------|-------|-------------|
| dxy | Cloverleaf | Between x and y axes |
| dxz | Cloverleaf | Between x and z axes |
| dyz | Cloverleaf | Between y and z axes |
| dx²-y² | Cloverleaf | Along x and y axes |
| dz² | Dumbbell + torus ring | Along z axis |

> 📷 **Reference image:** [Orbital shapes — LibreTexts Chemistry](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Quantum_Mechanics/10%3A_Multi-electron_Atoms/Atomic_Orbitals)

---

## 🔗 Overlapping of Orbitals

### Definition
> Overlapping of orbitals is the **partial merging of atomic orbitals** of two bonding atoms in such a way that their electron clouds overlap to form a covalent bond.

### Types of Overlap

#### 1. Sigma (σ) Bond — Head-on overlap

```
  Atom A    Atom B
    ●   →←   ●       s-s overlap
   [●●]─[●●]

    |   →←   |       p-p (axial) overlap
   [║║]─[║║]
```

#### 2. Pi (π) Bond — Lateral/sideways overlap

```
   ╔═╗   ╔═╗
   ║+║   ║+║      p-p lateral overlap
   ╚═╝   ╚═╝      (above and below)
    ●─────●
   ╔═╗   ╔═╗
   ║-║   ║-║
   ╚═╝   ╚═╝
```

### S-S Overlap Energy Diagram

```
Energy
  │
  │    ──── σ* (antibonding)
  │   /
  │  /  ↑ destabilization
  │ /
  │── 1s ─── ── 1s
  │ \
  │  \  ↓ stabilization
  │   \
  │    ──── σ (bonding)
  │
  └────────────────────
       Bond Formation
```

| | Bonding (σ) | Antibonding (σ*) |
|--|--|--|
| Energy | Lower than atomic orbitals | Higher than atomic orbitals |
| Electron density | Between nuclei | Outside nuclei (node present) |
| Effect | Stabilizes molecule | Destabilizes molecule |

---

## 🔶 SP³ Hybridization in CH₄

### What is Hybridization?
> The process of **mixing atomic orbitals of similar energy** to form new hybrid orbitals of equivalent energy and shape.

### SP³ Hybridization

**Carbon electron configuration:** 1s² 2s² 2p²

```
Before hybridization (Carbon):
  2s:  [↑↓]    2p:  [↑][↑][ ]

After promotion:
  2s:  [↑]     2p:  [↑][↑][↑]

After sp³ hybridization:
  sp³: [↑][↑][↑][↑]   (4 equivalent orbitals)
```

### Geometry of CH₄

```
        H
        |
    H ─ C ─ H
        |
        H

  Bond angle: 109.5°
  Shape: Tetrahedral
```

```
        H
       /│\
      / │ \
    H──────H
      \ │ /
       \│/
        H
   (3D Tetrahedral)
```

### Energy Diagram of SP³ Hybridization

```
Energy
  │                   [sp³][sp³][sp³][sp³]
  │              ↗  (4 equivalent hybrid orbitals)
  │    2p [─][↑][↑]
  │    2s [↑↓]
  │
  │    Carbon          sp³ Carbon
  └─────────────────────────────
```

| Property | Value |
|----------|-------|
| Hybridization | sp³ |
| Shape | Tetrahedral |
| Bond angle | 109.5° |
| Bond type | σ (sigma) |
| Number of bonds | 4 C−H bonds |

---

## 📅 Modern Periodic Law

### Statement
> *"The physical and chemical properties of elements are a **periodic function of their atomic numbers**."*

(Proposed by **Moseley**, replacing Mendeleev's original based on atomic mass)

### Modern Periodic Table Structure

```
┌──────────────────────────────────────────────┐
│ Period 1: H, He                              │
│ Period 2: Li → Ne  (s and p block, 8 elem.) │
│ Period 3: Na → Ar  (s and p block, 8 elem.) │
│ Period 4: K → Kr   (includes d block, 18)   │
│ Period 5: Rb → Xe  (includes d block, 18)   │
│ Period 6: Cs → Rn  (includes f block, 32)   │
│ Period 7: Fr → Og  (includes f block, 32)   │
└──────────────────────────────────────────────┘
```

---

## 🗂️ Classification of Elements by Electronic Configuration

### Four Blocks of the Periodic Table

| Block | Last electron fills | Examples | Properties |
|-------|---------------------|----------|------------|
| **s-block** | s-orbital | Group 1 (alkali), Group 2 (alkaline earth) | Highly reactive metals |
| **p-block** | p-orbital | Groups 13–18 | Metals, non-metals, metalloids |
| **d-block** | d-orbital (penultimate shell) | Groups 3–12 (transition metals) | Variable valency |
| **f-block** | f-orbital (antepenultimate shell) | Lanthanides, Actinides | Inner transition metals |

### General Formula

```
s-block:  [Noble gas] ns¹ or ns²
p-block:  [Noble gas] ns² np¹⁻⁶
d-block:  [Noble gas] (n-1)d¹⁻¹⁰ ns¹⁻²
f-block:  [Noble gas] (n-2)f¹⁻¹⁴ (n-1)d⁰⁻¹ ns²
```

**d-block general formula:** `[Noble gas] (n-1)d^(1-10) ns^(0-2)`  
**f-block general formula:** `[Noble gas] (n-2)f^(1-14) (n-1)d^(0-1) ns²`

---

## 📈 Periodic Trends

### 1. Atomic Radius

```
Trend across Period (→): DECREASES
  Li > Be > B > C > N > O > F > Ne
  (Increasing nuclear charge pulls electrons closer)

Trend down Group (↓): INCREASES
  Li < Na < K < Rb < Cs
  (New electron shells added)
```

### 2. Ionization Potential (IP)

> **Definition:** The minimum energy required to remove the **outermost electron** from a neutral gaseous atom.

$$M_{(g)} + \text{Energy} \rightarrow M^+_{(g)} + e^-$$

```
Trend in Period (→):  Generally INCREASES
  Li < Be < B < C < N > O < F < Ne
         ↑                   ↑
  Exception: N > O (half-filled 2p is extra stable)

Trend in Group (↓):   DECREASES
  (Atomic radius increases, electron farther from nucleus)
```

#### Why is IP of Nitrogen higher than Oxygen?

```
N: 1s² 2s² 2p³   → Half-filled 2p (extra stable — symmetric)
O: 1s² 2s² 2p⁴   → One paired electron in 2p (electron-electron repulsion)

N configuration:  2p [↑][↑][↑]   → Extra stable
O configuration:  2p [↑↓][↑][↑] → Paired electron is easier to remove

∴ IP(N) > IP(O)
```

### 3. Electron Affinity (EA)

> **Definition:** Energy released when an electron is added to a neutral gaseous atom.

$$X_{(g)} + e^- \rightarrow X^-_{(g)} + \text{Energy}$$

```
Trend in Period (→): Generally INCREASES
  (More nuclear charge → greater attraction for incoming electron)
  Exception: Noble gases (EA ≈ 0), N has lower EA than O

Trend in Group (↓): DECREASES
  (Larger atoms attract electrons less strongly)
```

### 4. Comparison of Ionic Sizes

| Comparison | Explanation |
|------------|-------------|
| **Fe vs Fe²⁺** | Fe > Fe²⁺ (removing electrons reduces size; less repulsion between remaining electrons) |
| **Cl vs Cl⁻** | Cl < Cl⁻ (gaining electron increases repulsion; electron cloud expands) |

```
Fe:   [Ar] 3d⁶ 4s²   →  Radius: ~126 pm
Fe²⁺: [Ar] 3d⁶        →  Radius: ~77 pm  (smaller — lost 2 electrons)

Cl:   [Ne] 3s² 3p⁵   →  Radius: ~99 pm
Cl⁻:  [Ne] 3s² 3p⁶   →  Radius: ~181 pm (larger — gained 1 electron)
```

### 5. Radioactive Elements Classification

| Type | Characteristics | Examples |
|------|-----------------|---------|
| **Natural** | Occur naturally, Z > 83 | U-238, Ra-226, Th-232 |
| **Artificial** | Made by nuclear reactions | Tc-99, Np-237 |
| **α emitters** | Emit helium nuclei | Ra-226, U-238 |
| **β emitters** | Emit electrons | C-14, P-32 |
| **γ emitters** | Emit high-energy photons | Co-60, Cs-137 |

---

## ⚗️ Why is AgI More Covalent than AgCl?

This is explained by **Fajan's Rules**.

### Fajan's Rules Summary

Covalent character increases when:
1. **Cation is small** (high charge density → high polarizing power)
2. **Cation has high charge**
3. **Anion is large** (easily polarizable — high polarizability)
4. **Cation has 18-electron configuration** (pseudo-noble gas — extra polarizing power)

### Comparison: AgI vs AgCl

| Factor | AgCl | AgI | More Covalent? |
|--------|------|-----|----------------|
| Cation (Ag⁺) | Same | Same | — |
| Anion size | Cl⁻ (181 pm) | I⁻ (220 pm) | **AgI** (I⁻ larger → more polarizable) |
| Anion polarizability | Lower | **Higher** | **AgI** |

```
Ag⁺ (small, 18-e config) distorts:
  Cl⁻ (smaller) → less distortion → more ionic
  I⁻ (larger)   → more distortion → more covalent
```

**∴ AgI is more covalent than AgCl** because I⁻ is larger and more polarizable than Cl⁻, so Ag⁺ can distort its electron cloud more, giving significant covalent character.

---

## 📝 Principles Governing Electron Distribution

### 1. Aufbau Principle
> Electrons fill orbitals in **order of increasing energy**.

```
Energy order: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d ...
```

### 2. Pauli Exclusion Principle
> No two electrons in an atom can have the **same set of four quantum numbers**.

```
An orbital can hold maximum 2 electrons with opposite spins:
   [↑↓]  ✓  Allowed
   [↑↑]  ✗  Not allowed
```

### 3. Hund's Rule of Maximum Multiplicity
> Electrons fill **degenerate orbitals singly** before pairing, with **parallel spins**.

```
Nitrogen (2p³):
  2p: [↑][↑][↑]   ✓ Correct (singly occupied, parallel)
  2p: [↑↓][↑][ ]  ✗ Incorrect
```

---

## 🧪 Practice Questions with Solutions

### Q1. Write all quantum numbers for the last electron of Cl (Z=17)

**Solution:**
- Electronic config of Cl: [Ne] 3s² 3p⁵
- Last electron is in 3p orbital
- n = 3, ℓ = 1, mₗ = +1 (or −1), mₛ = −½

**Answer:** n=3, ℓ=1, mₗ=+1, mₛ=−½

---

### Q2. Explain why the electron affinity of Fluorine is less than Chlorine despite F being more electronegative

**Solution:**

| Property | F | Cl |
|----------|---|-----|
| Atomic radius | Very small | Larger |
| Electron affinity | 328 kJ/mol | 349 kJ/mol |

F has a very small 2p orbital. Adding an electron causes **high electron-electron repulsion** due to the compact size, reducing the energy released. Cl has a larger 3p orbital with less repulsion.

**∴ EA(Cl) > EA(F)**

---

### Q3. Arrange in increasing order of atomic radius: Na, Mg, Al, Si

**Solution:**
All in Period 3. Across a period, nuclear charge increases → radius decreases.

```
Si < Al < Mg < Na
(111 pm) < (143 pm) < (160 pm) < (186 pm)
```

---

### Q4. How many radial and angular nodes does a 3p orbital have?

**Solution:**
- Radial nodes = n − ℓ − 1 = 3 − 1 − 1 = **1**
- Angular nodes = ℓ = **1**
- Total nodes = n − 1 = **2**

---

### Q5. Calculate the uncertainty in velocity of an electron if uncertainty in position is 10⁻¹⁰ m

**Solution:**

Using Heisenberg's principle:
$$\Delta x \cdot m\Delta v \geq \frac{h}{4\pi}$$

$$\Delta v \geq \frac{h}{4\pi \cdot m \cdot \Delta x}$$

$$\Delta v \geq \frac{6.626 \times 10^{-34}}{4 \times 3.14159 \times 9.109 \times 10^{-31} \times 10^{-10}}$$

$$\Delta v \geq \frac{6.626 \times 10^{-34}}{1.143 \times 10^{-39}} \approx 5.8 \times 10^5 \text{ m/s}$$

---

### Q6. Why are d-block elements called transition elements?

**Solution:**
d-block elements are called **transition elements** because they represent a transition between the highly electropositive s-block metals and the less electropositive p-block elements. Their properties (ionization energy, electronegativity, atomic size) show gradual changes, "bridging" the two blocks. They have incompletely filled d-orbitals either in elemental form or in their common ions (e.g., Fe: [Ar]3d⁶4s² → Fe²⁺: [Ar]3d⁶).

---

## 📚 References

1. **Atkins, P. & de Paula, J.** — *Physical Chemistry*, 10th Ed., Oxford University Press. [https://global.oup.com/academic/product/physical-chemistry-9780198769866](https://global.oup.com/academic/product/physical-chemistry-9780198769866)

2. **Chang, R. & Goldsby, K.** — *Chemistry*, 12th Ed., McGraw-Hill. [https://www.mheducation.com/highered/product/chemistry-chang-goldsby/M9780078021510.html](https://www.mheducation.com/highered/product/chemistry-chang-goldsby/M9780078021510.html)

3. **LibreTexts Chemistry** — Atomic Orbitals and Quantum Numbers. [https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Quantum_Mechanics](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Quantum_Mechanics)

4. **NIST Atomic Spectra Database** — Ionization Energies. [https://physics.nist.gov/PhysRefData/ASD/ionEnergy.html](https://physics.nist.gov/PhysRefData/ASD/ionEnergy.html)

5. **Khan Academy** — Electronic Structure of Atoms. [https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:atomic-structure-and-properties](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:atomic-structure-and-properties)

6. **Housecroft, C.E. & Sharpe, A.G.** — *Inorganic Chemistry*, 5th Ed., Pearson. [https://www.pearson.com/en-gb/subject-catalog/p/inorganic-chemistry/P200000004916](https://www.pearson.com/en-gb/subject-catalog/p/inorganic-chemistry/P200000004916)

7. **Royal Society of Chemistry** — Periodic Table. [https://www.rsc.org/periodic-table](https://www.rsc.org/periodic-table)

---

> 🖼️ **Orbital Shape Diagrams:** [https://chem.libretexts.org](https://chem.libretexts.org) (Creative Commons Licensed)  
> 🖼️ **Periodic Trends Chart:** [https://www.chemguide.co.uk/atoms/properties/atradius.html](https://www.chemguide.co.uk/atoms/properties/atradius.html)

---

*Last updated: 2024 | For educational use | Based on past exam papers 2017–2023*
