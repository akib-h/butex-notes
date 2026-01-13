# Molecular Orbital Theory (MOT)

## 7.1 Introduction

### Limitations of Valence Bond Theory

While VBT successfully explains many molecular properties, it fails to account for:
1. **Paramagnetism of O₂** (VBT predicts diamagnetic)
2. **Odd-electron molecules** (NO, NO₂)
3. **Fractional bond orders** (O₂⁺, O₂⁻)
4. **Spectroscopic properties**

### Molecular Orbital Theory

**MOT Postulates:**
1. Atomic orbitals combine to form **molecular orbitals (MOs)**
2. MOs belong to entire molecule, not individual atoms
3. Number of MOs formed = Number of AOs combined
4. MOs filled following Aufbau, Pauli, and Hund's rules
5. Electrons in bonding MOs stabilize molecule
6. Electrons in antibonding MOs destabilize molecule

## 7.2 Formation of Molecular Orbitals

### Linear Combination of Atomic Orbitals (LCAO)

Molecular orbitals are mathematical combinations of atomic orbitals:

$$\psi_{MO} = c_1\psi_{AO_1} + c_2\psi_{AO_2}$$

Where:
- $\psi_{MO}$ = molecular orbital wave function
- $\psi_{AO}$ = atomic orbital wave functions
- $c_1, c_2$ = coefficients (determined by calculation)

### Two Types of Combinations

**1. Bonding Molecular Orbital (BMO)**

Constructive interference (in-phase):
$$\psi_b = \psi_A + \psi_B$$

- **Lower energy** than original AOs
- **Electron density concentrated** between nuclei
- **Stabilizes** the molecule

**2. Antibonding Molecular Orbital (ABMO)**

Destructive interference (out-of-phase):
$$\psi_a^* = \psi_A - \psi_B$$

- **Higher energy** than original AOs
- **Node** between nuclei (zero electron density)
- **Destabilizes** the molecule
- Denoted with asterisk (*)

### Energy Relationship

$$E(\psi_a^*) > E(\psi_{AO}) > E(\psi_b)$$

The energy difference:
$$\Delta E = E(\psi_a^*) - E(\psi_b)$$

Larger ΔE → Stronger bonding

## 7.3 Types of Molecular Orbitals

### σ (Sigma) Molecular Orbitals

**Formation:** Head-on (end-to-end) overlap along internuclear axis

**Types:**
1. **σ (bonding):** From s-s, s-p, or p-p head-on overlap
2. **σ* (antibonding):** Corresponding antibonding orbital

**From s orbitals:**
- σ1s and σ*1s (for H₂, He₂)
- σ2s and σ*2s (for Li₂, Be₂)

**From p orbitals:**
- σ2p and σ*2p (from 2pz orbitals)

### π (Pi) Molecular Orbitals

**Formation:** Side-by-side (lateral) overlap perpendicular to internuclear axis

**Types:**
1. **π (bonding):** From parallel p orbital overlap
2. **π* (antibonding):** Corresponding antibonding orbital

**From p orbitals:**
- π2p and π*2p (from 2px and 2py orbitals)
- Two sets of π orbitals (degenerate)

### Energy Ordering

**For O₂, F₂, Ne₂:**
$$\sigma1s < \sigma^*1s < \sigma2s < \sigma^*2s < \sigma2p_z < \pi2p_{x,y} < \pi^*2p_{x,y} < \sigma^*2p_z$$

**For B₂, C₂, N₂ (s-p mixing):**
$$\sigma1s < \sigma^*1s < \sigma2s < \sigma^*2s < \pi2p_{x,y} < \sigma2p_z < \pi^*2p_{x,y} < \sigma^*2p_z$$

**Key difference:** π2p fills before σ2p when s-p mixing occurs

## 7.4 Bond Order

### Definition

**Bond Order (BO):** A measure of bond strength calculated from MO diagram

$$\text{Bond Order} = \frac{N_b - N_a}{2}$$

Where:
- $N_b$ = number of electrons in bonding MOs
- $N_a$ = number of electrons in antibonding MOs

### Interpretation

| Bond Order | Bond Type | Stability |
|------------|-----------|-----------|
| 0 | No bond | Unstable |
| 0.5 | Half bond | Weak |
| 1 | Single bond | Stable |
| 1.5 | Between single & double | Moderate |
| 2 | Double bond | Strong |
| 2.5 | Between double & triple | Very strong |
| 3 | Triple bond | Very strong |

### Properties Related to Bond Order

**1. Bond Strength:**
$$\text{Bond Energy} \propto \text{Bond Order}$$

**2. Bond Length:**
$$\text{Bond Length} \propto \frac{1}{\text{Bond Order}}$$

**3. Stability:**
Higher bond order → More stable molecule

## 7.5 Molecular Orbital Diagrams

### Hydrogen Molecule (H₂)

**Electronic Configuration:**
- Total electrons = 2
- Configuration: (σ1s)²

**Bond Order Calculation:**
$$BO = \frac{2 - 0}{2} = 1$$

**Properties:**
- Single bond
- Diamagnetic (all paired)
- Stable molecule

### Helium Molecule (He₂)

**Electronic Configuration:**
- Total electrons = 4
- Configuration: (σ1s)²(σ*1s)²

**Bond Order Calculation:**
$$BO = \frac{2 - 2}{2} = 0$$

**Properties:**
- No bond
- Does not exist
- Unstable

### Nitrogen Molecule (N₂)

**Electronic Configuration:**
- Total electrons = 10 (5 from each N)
- Configuration: (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(π2px)²(π2py)²(σ2pz)²

**Bond Order Calculation:**
$$BO = \frac{8 - 2}{2} = 3$$

**Properties:**
- Triple bond (N≡N)
- Diamagnetic
- Very stable (high bond energy: 945 kJ/mol)
- Very short bond (109.8 pm)

### Oxygen Molecule (O₂)

**Electronic Configuration:**
- Total electrons = 12 (6 from each O)
- Configuration: (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(σ2pz)²(π2px)²(π2py)²(π*2px)¹(π*2py)¹

**Bond Order Calculation:**
$$BO = \frac{8 - 4}{2} = 2$$

**Properties:**
- Double bond (O=O)
- **Paramagnetic** (2 unpaired electrons in π* orbitals)
- Stable
- Bond energy: 498 kJ/mol
- Bond length: 121 pm

**This explains O₂ paramagnetism!** (VBT cannot)

### Fluorine Molecule (F₂)

**Electronic Configuration:**
- Total electrons = 14 (7 from each F)
- Configuration: (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(σ2pz)²(π2px)²(π2py)²(π*2px)²(π*2py)²

**Bond Order Calculation:**
$$BO = \frac{8 - 6}{2} = 1$$

**Properties:**
- Single bond (F-F)
- Diamagnetic
- Weakest halogen bond (158 kJ/mol)
- Longest halogen bond (142 pm)

## 7.6 Heteronuclear Diatomic Molecules

### Carbon Monoxide (CO)

**Electronic Configuration:**
- C: 6 electrons, O: 8 electrons → Total: 14
- Configuration: (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(π2px)²(π2py)²(σ2pz)²

**Bond Order:**
$$BO = \frac{8 - 2}{2} = 3$$

**Properties:**
- Triple bond (C≡O)
- Isoelectronic with N₂
- Diamagnetic
- Very stable (BO = 3)

### Nitric Oxide (NO)

**Electronic Configuration:**
- N: 7 electrons, O: 8 electrons → Total: 15 (odd!)
- Configuration: (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(σ2pz)²(π2px)²(π2py)²(π*2px)¹

**Bond Order:**
$$BO = \frac{8 - 3}{2} = 2.5$$

**Properties:**
- Bond order 2.5 (between double and triple)
- **Paramagnetic** (1 unpaired electron)
- Radical species
- Can lose electron to form NO⁺ (BO = 3)

## 7.7 Ions and Bond Order Changes

### Oxygen Species Comparison

| Species | Electrons | Configuration | Bond Order | Magnetic | Bond Length |
|---------|-----------|---------------|------------|----------|-------------|
| O₂²⁺ | 10 | ...π²π² | 3 | Diamagnetic | Shortest |
| O₂⁺ | 11 | ...π²π²π*¹ | 2.5 | Paramagnetic | Short |
| O₂ | 12 | ...π²π²π*²| 2 | Paramagnetic | Medium |
| O₂⁻ | 13 | ...π²π²π*³ | 1.5 | Paramagnetic | Long |
| O₂²⁻ | 14 | ...π²π²π*⁴ | 1 | Diamagnetic | Longest |

**Trends:**
- **Removing electrons:** Increases BO, decreases bond length, increases stability
- **Adding electrons:** Decreases BO, increases bond length, decreases stability

### Example: N₂ vs N₂⁺

**N₂:**
- Electrons: 10
- Configuration: (σ2pz)²
- BO = 3
- Diamagnetic

**N₂⁺:**
- Electrons: 9
- Configuration: (σ2pz)¹
- BO = 2.5
- Paramagnetic

**Ionization Effect:**
Removing electron from highest occupied MO (σ2pz) decreases bond order from 3 to 2.5.

## 7.8 Magnetic Properties

### Diamagnetism

**Definition:** All electrons paired; weakly repelled by magnetic field

**Examples:**
- N₂: All electrons paired, BO = 3
- F₂: All electrons paired, BO = 1
- CO: All electrons paired, BO = 3

### Paramagnetism

**Definition:** Contains unpaired electrons; attracted to magnetic field

**Magnetic moment:**
$$\mu = \sqrt{n(n+2)} \text{ BM}$$

Where:
- $\mu$ = magnetic moment in Bohr magnetons (BM)
- $n$ = number of unpaired electrons

**Examples:**

**O₂:** 2 unpaired electrons
$$\mu = \sqrt{2(2+2)} = \sqrt{8} = 2.83 \text{ BM}$$

**NO:** 1 unpaired electron
$$\mu = \sqrt{1(1+2)} = \sqrt{3} = 1.73 \text{ BM}$$

**B₂:** 2 unpaired electrons
$$\mu = \sqrt{2(2+2)} = 2.83 \text{ BM}$$

## 7.9 Solved Examples

### Example 1: He₂⁺ Ion

**Problem:** Determine if He₂⁺ can exist. If so, calculate bond order and predict magnetic properties.

**Solution:**

**Electron count:** 
- 2 He atoms = 4 electrons
- Remove 1 for +1 charge
- Total = 3 electrons

**Configuration:** (σ1s)²(σ*1s)¹

**Bond Order:**
$$BO = \frac{2 - 1}{2} = 0.5$$

**Conclusions:**
- **Can exist** (BO > 0)
- **Weak bond** (half bond)
- **Paramagnetic** (1 unpaired electron)

### Example 2: Comparing N₂, O₂, F₂

**Problem:** Arrange N₂, O₂, F₂ in order of:
a) Increasing bond order
b) Increasing bond length
c) Increasing bond strength

**Solution:**

**Bond Orders:**
- N₂: BO = 3
- O₂: BO = 2
- F₂: BO = 1

**a) Increasing Bond Order:**
F₂ < O₂ < N₂

**b) Increasing Bond Length:** (BO ∝ 1/length)
N₂ < O₂ < F₂

**Actual values:**
- N₂: 109.8 pm
- O₂: 121 pm
- F₂: 142 pm

**c) Increasing Bond Strength:**
F₂ < O₂ < N₂

**Actual values:**
- F₂: 158 kJ/mol
- O₂: 498 kJ/mol
- N₂: 945 kJ/mol

### Example 3: Peroxide Ion (O₂²⁻)

**Problem:** Draw MO diagram for O₂²⁻ and determine:
a) Bond order
b) Magnetic properties
c) Compare stability with O₂

**Solution:**

**Electron count:** 
- O₂: 12 electrons
- Add 2 for 2- charge
- Total = 14 electrons

**Configuration:**
(σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(σ2pz)²(π2px)²(π2py)²(π*2px)²(π*2py)²

**a) Bond Order:**
$$BO = \frac{8 - 6}{2} = 1$$

**b) Magnetic Properties:**
All electrons paired → **Diamagnetic**

**c) Stability Comparison:**
- O₂: BO = 2
- O₂²⁻: BO = 1

**Conclusion:** O₂²⁻ is **less stable** than O₂ (lower bond order, longer bond)

### Example 4: CN⁻ Ion

**Problem:** Calculate bond order of CN⁻ and predict its stability.

**Solution:**

**Electron count:**
- C: 6 electrons
- N: 7 electrons
- Add 1 for negative charge
- Total = 14 electrons

**Configuration:**
Isoelectronic with CO and N₂
(σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(π2px)²(π2py)²(σ2pz)²

**Bond Order:**
$$BO = \frac{8 - 2}{2} = 3$$

**Conclusion:**
- **Triple bond** (very strong)
- **Highly stable**
- Isoelectronic with N₂ and CO
- Diamagnetic

## 7.10 MOT vs VBT Comparison

| Aspect | VBT | MOT |
|--------|-----|-----|
| **Orbital type** | Localized (between 2 atoms) | Delocalized (entire molecule) |
| **Explanation of O₂ paramagnetism** | Cannot explain | Correctly predicts |
| **Fractional bond orders** | Cannot handle | Can predict |
| **Resonance** | Requires resonance structures | Natural consequence |
| **Calculation** | Simpler, qualitative | Complex, quantitative |
| **Spectroscopy** | Limited prediction | Accurate prediction |
| **Best for** | Simple molecules, bonding description | Complex molecules, properties |

## Practice Problems

1. Draw MO diagram for C₂ and calculate bond order. Is it paramagnetic?

2. Compare bond lengths: O₂, O₂⁺, O₂⁻, O₂²⁻

3. Calculate magnetic moment of NO₂ (17 electrons).

4. Explain why Be₂ does not exist.

5. Which has higher bond energy: NO or NO⁺? Justify.

6. Draw MO diagram for CO and explain why BO = 3.

7. Predict whether the following exist:
   a) Li₂
   b) Be₂⁺
   c) C₂²⁺

8. Calculate bond order of: a) H₂⁺, b) H₂⁻

## References

1. Molecular Orbital Theory - Chemistry LibreTexts:
   https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Map:_Physical_Chemistry_for_the_Biosciences_(Chang)/12:_The_Chemical_Bond/12.05:_Molecular_Orbital_Theory

2. Bond Order Calculations - Pearson:
   https://www.pearson.com/channels/general-chemistry/learn/jules/ch-10-molecular-shapes-valence-bond-theory/mo-theory-bond-order

3. Atkins, P., & de Paula, J. (2014). *Physical Chemistry* (10th ed.). Oxford University Press.

4. Miessler, G. L., Fischer, P. J., & Tarr, D. A. (2014). *Inorganic Chemistry* (5th ed.). Pearson.

---

**Next:** [08 - Intermolecular Forces](../08-intermolecular-forces/types-of-imf.md)