# Ionic Bonding

## 2.1 Formation of Ionic Bonds

### Definition and Mechanism

**Ionic Bond:** An electrostatic attraction between oppositely charged ions formed by complete electron transfer from one atom to another.

**Formation Process:**
1. **Electron loss** (ionization) from metal atom
2. **Electron gain** by nonmetal atom
3. **Electrostatic attraction** between resulting ions

### General Equation:

$$M_{(s)} + \frac{1}{2}X_{2(g)} \rightarrow M^{n+}X^{n-}_{(s)}$$

Where M = metal, X = nonmetal, n = charge

### Example: Formation of NaCl

**Step 1: Ionization of Sodium**
$$Na_{(g)} \rightarrow Na^+_{(g)} + e^- \quad \Delta H_1 = +496 \text{ kJ/mol (IE)}$$

**Step 2: Electron Affinity of Chlorine**
$$Cl_{(g)} + e^- \rightarrow Cl^-_{(g)} \quad \Delta H_2 = -349 \text{ kJ/mol (EA)}$$

**Step 3: Lattice Formation**
$$Na^+_{(g)} + Cl^-_{(g)} \rightarrow NaCl_{(s)} \quad \Delta H_3 = -787 \text{ kJ/mol (Lattice Energy)}$$

**Net Reaction:**
$$Na_{(g)} + Cl_{(g)} \rightarrow NaCl_{(s)} \quad \Delta H_{net} = -640 \text{ kJ/mol}$$

## 2.2 Lattice Energy

### Definition

**Lattice Energy (U):** The energy required to completely separate one mole of solid ionic compound into gaseous ions, OR the energy released when gaseous ions combine to form one mole of ionic solid.

**Endothermic Definition:**
$$M^{n+}X^{n-}_{(s)} \rightarrow M^{n+}_{(g)} + X^{n-}_{(g)} \quad \Delta H = U > 0$$

**Exothermic Definition:**
$$M^{n+}_{(g)} + X^{n-}_{(g)} \rightarrow M^{n+}X^{n-}_{(s)} \quad \Delta H = -U < 0$$

### Born-Landé Equation

The theoretical lattice energy can be calculated using:

$$U = -\frac{N_A M z^+ z^- e^2}{4\pi\epsilon_0 r_0}\left(1 - \frac{1}{n}\right)$$

Where:
- $N_A$ = Avogadro's number (6.022 × 10²³ mol⁻¹)
- $M$ = Madelung constant (depends on crystal structure)
- $z^+$ = charge on cation
- $z^-$ = charge on anion
- $e$ = electron charge (1.602 × 10⁻¹⁹ C)
- $\epsilon_0$ = permittivity of free space (8.854 × 10⁻¹² C²/J·m)
- $r_0$ = shortest interionic distance
- $n$ = Born exponent (typically 5-12)

### Simplified Kapustinskii Equation

For quick estimates:

$$U = \frac{1202 \times z^+ \times z^- \times \nu}{r^+ + r^-}\left(1 - \frac{0.345}{r^+ + r^-}\right) \text{ kJ/mol}$$

Where:
- $\nu$ = number of ions per formula unit
- $r^+$, $r^-$ = ionic radii in pm

### Factors Affecting Lattice Energy

**1. Ionic Charges**

$$U \propto z^+ \times z^-$$

Higher charges → Higher lattice energy

**Example:**
- NaCl (1+ × 1-): U = 787 kJ/mol
- MgO (2+ × 2-): U = 3850 kJ/mol
- Al₂O₃ (3+ × 2-): U ≈ 15,300 kJ/mol

**2. Ionic Sizes**

$$U \propto \frac{1}{r_0}$$

Smaller ions → Higher lattice energy

**Example (all 1:1 compounds):**
- LiF: U = 1037 kJ/mol (small Li⁺, small F⁻)
- LiI: U = 759 kJ/mol (small Li⁺, large I⁻)
- CsI: U = 604 kJ/mol (large Cs⁺, large I⁻)

**3. Crystal Structure**

Different arrangements affect Madelung constant (M):
- NaCl structure: M = 1.748
- CsCl structure: M = 1.763
- ZnS (zinc blende): M = 1.638
- Fluorite: M = 2.519

## 2.3 Born-Haber Cycle

### Concept

An application of **Hess's Law** to calculate lattice energy indirectly by breaking compound formation into measurable steps.

### General Cycle Components

1. **Sublimation/Atomization of metal:**
   $$M_{(s)} \rightarrow M_{(g)} \quad \Delta H_{sub}$$

2. **Dissociation of nonmetal:**
   $$\frac{1}{2}X_{2(g)} \rightarrow X_{(g)} \quad \frac{1}{2}\Delta H_{diss}$$

3. **Ionization of metal:**
   $$M_{(g)} \rightarrow M^{n+}_{(g)} + ne^- \quad \sum IE$$

4. **Electron affinity of nonmetal:**
   $$X_{(g)} + ne^- \rightarrow X^{n-}_{(g)} \quad \sum EA$$

5. **Lattice formation:**
   $$M^{n+}_{(g)} + X^{n-}_{(g)} \rightarrow MX_{(s)} \quad -U$$

6. **Direct formation:**
   $$M_{(s)} + \frac{1}{2}X_{2(g)} \rightarrow MX_{(s)} \quad \Delta H_f$$

### Born-Haber Equation

By Hess's Law:

$$\Delta H_f = \Delta H_{sub} + \frac{1}{2}\Delta H_{diss} + \sum IE + \sum EA - U$$

Rearranging for lattice energy:

$$U = \Delta H_{sub} + \frac{1}{2}\Delta H_{diss} + \sum IE + \sum EA - \Delta H_f$$

### Detailed Example: NaCl

**Given Data:**
- $\Delta H_f$(NaCl) = -411 kJ/mol
- $\Delta H_{sub}$(Na) = +108 kJ/mol
- $\Delta H_{diss}$(Cl₂) = +242 kJ/mol
- IE(Na) = +496 kJ/mol
- EA(Cl) = -349 kJ/mol

**Calculate:** Lattice energy of NaCl

**Solution:**

**Step 1:** Write all energy changes:

Na(s) → Na(g): +108 kJ/mol
½Cl₂(g) → Cl(g): ½(242) = +121 kJ/mol
Na(g) → Na⁺(g) + e⁻: +496 kJ/mol
Cl(g) + e⁻ → Cl⁻(g): -349 kJ/mol
Na⁺(g) + Cl⁻(g) → NaCl(s): -U
**Direct:** Na(s) + ½Cl₂(g) → NaCl(s): -411 kJ/mol

**Step 2:** Apply Hess's Law:

$$-411 = 108 + 121 + 496 - 349 - U$$
$$-411 = 376 - U$$
$$U = 376 + 411 = 787 \text{ kJ/mol}$$

**Answer:** Lattice energy of NaCl = **787 kJ/mol**

### Example: MgCl₂

**Given Data:**
- $\Delta H_f$(MgCl₂) = -641 kJ/mol
- $\Delta H_{sub}$(Mg) = +148 kJ/mol
- $\Delta H_{diss}$(Cl₂) = +242 kJ/mol
- IE₁(Mg) = +738 kJ/mol
- IE₂(Mg) = +1451 kJ/mol
- EA(Cl) = -349 kJ/mol (for each Cl)

**Calculate:** Lattice energy of MgCl₂

**Solution:**

**Energy changes:**
1. Mg(s) → Mg(g): +148 kJ/mol
2. Cl₂(g) → 2Cl(g): +242 kJ/mol
3. Mg(g) → Mg²⁺(g) + 2e⁻: +738 + 1451 = +2189 kJ/mol
4. 2Cl(g) + 2e⁻ → 2Cl⁻(g): 2(-349) = -698 kJ/mol
5. Mg²⁺(g) + 2Cl⁻(g) → MgCl₂(s): -U

**Hess's Law:**
$$-641 = 148 + 242 + 2189 - 698 - U$$
$$-641 = 1881 - U$$
$$U = 1881 + 641 = 2522 \text{ kJ/mol}$$

**Answer:** Lattice energy of MgCl₂ = **2522 kJ/mol**

## 2.4 Properties of Ionic Compounds

### 1. Physical State
- **Room temperature:** Generally solid
- **Reason:** Strong electrostatic forces

### 2. Melting and Boiling Points
- **High values** due to strong ionic bonds
- **Examples:**
  - NaCl: mp = 801°C, bp = 1413°C
  - MgO: mp = 2852°C, bp = 3600°C
  - KCl: mp = 770°C, bp = 1420°C

**Trend:** Higher lattice energy → Higher melting point

### 3. Electrical Conductivity

**Solid state:** Non-conductor (ions fixed in lattice)
**Molten state:** Good conductor (ions mobile)
**Aqueous solution:** Good conductor (ions dissociated)

$$NaCl_{(s)} \xrightarrow{H_2O} Na^+_{(aq)} + Cl^-_{(aq)}$$

### 4. Solubility

**In polar solvents (water):**
- Generally soluble
- **Condition:** $\Delta H_{hydration} > U$

**Hydration energy:** Energy released when ions are surrounded by water molecules

$$\Delta H_{solution} = U - \Delta H_{hydration}$$

**Examples:**
- NaCl: Soluble (ΔH_hyd overcomes U)
- AgCl: Sparingly soluble (very high U)

### 5. Mechanical Properties

**Hard but brittle:**
- Hard due to strong ionic bonds
- Brittle because slight displacement causes like-charge repulsion

### 6. Crystal Structure

**Common structures:**
- **Rock salt (NaCl):** 6:6 coordination
- **Cesium chloride (CsCl):** 8:8 coordination
- **Fluorite (CaF₂):** 8:4 coordination
- **Zinc blende (ZnS):** 4:4 coordination

## 2.5 Solved Examples

### Example 1: Comparing Lattice Energies

**Problem:** Arrange the following in order of increasing lattice energy:
NaF, NaCl, NaBr, NaI

**Solution:**

All compounds have Na⁺ (same charge and size), so lattice energy depends on anion size:

**Ionic radii:**
- F⁻: 133 pm (smallest)
- Cl⁻: 181 pm
- Br⁻: 196 pm
- I⁻: 220 pm (largest)

$$U \propto \frac{1}{r}$$

Smaller anion → Higher lattice energy

**Order:** NaI < NaBr < NaCl < NaF

**Actual values:**
- NaI: 682 kJ/mol
- NaBr: 732 kJ/mol
- NaCl: 787 kJ/mol
- NaF: 918 kJ/mol

### Example 2: Calculating Formation Enthalpy

**Problem:** Calculate $\Delta H_f$ for KBr using the Born-Haber cycle.

**Given:**
- Lattice energy (KBr) = 689 kJ/mol
- $\Delta H_{sub}$(K) = 89 kJ/mol
- $\Delta H_{diss}$(Br₂) = 193 kJ/mol
- IE(K) = 419 kJ/mol
- EA(Br) = -325 kJ/mol

**Solution:**

$$\Delta H_f = \Delta H_{sub} + \frac{1}{2}\Delta H_{diss} + IE + EA - U$$

$$\Delta H_f = 89 + \frac{193}{2} + 419 + (-325) - 689$$

$$\Delta H_f = 89 + 96.5 + 419 - 325 - 689$$

$$\Delta H_f = -409.5 \text{ kJ/mol}$$

**Answer:** $\Delta H_f$(KBr) ≈ **-410 kJ/mol**

### Example 3: Theoretical vs. Experimental Lattice Energy

**Problem:** The experimental lattice energy of AgCl is 912 kJ/mol, but the calculated (Born-Landé) value is 770 kJ/mol. Explain the discrepancy.

**Solution:**

The difference (912 - 770 = 142 kJ/mol) indicates **significant covalent character** in AgCl.

**Reasons:**
1. **Polarization:** Ag⁺ (soft cation) polarizes Cl⁻ (polarizable anion)
2. **Covalent contribution:** Partial orbital overlap beyond pure ionic bonding
3. **Fajans' Rules:** Small cation, large anion favor covalency

**Conclusion:** AgCl is not purely ionic; it has substantial covalent character.

## 2.6 Fajans' Rules

Predict covalent character in ionic compounds:

### 1. Small Cation
- High charge density
- Greater polarizing power
- Example: Li⁺ more polarizing than Cs⁺

### 2. Large Anion
- Easily polarizable
- More susceptible to distortion
- Example: I⁻ > Br⁻ > Cl⁻ > F⁻

### 3. High Charge
- Increased polarization
- Example: Al³⁺ > Mg²⁺ > Na⁺

### 4. Pseudo-noble Gas Configuration
- Cations with 18-electron shell (d¹⁰)
- More polarizing than noble gas configuration
- Example: Cu⁺, Ag⁺, Zn²⁺, Cd²⁺

### Application Examples

**More ionic:**
- NaF (large cation, small anion, low charge)
- BaCl₂ (large cation)

**More covalent:**
- AgI (polarizing Ag⁺, polarizable I⁻)
- AlCl₃ (high charge, polarizing Al³⁺)
- CuCl (pseudo-noble gas Cu⁺)

## Practice Problems

1. Calculate the lattice energy of LiF given:
   - $\Delta H_f$(LiF) = -617 kJ/mol
   - $\Delta H_{sub}$(Li) = 161 kJ/mol
   - $\Delta H_{diss}$(F₂) = 158 kJ/mol
   - IE(Li) = 520 kJ/mol
   - EA(F) = -328 kJ/mol

2. Arrange in order of decreasing lattice energy: MgO, CaO, SrO, BaO

3. Why does CaF (with Ca⁺) not exist, while CaF₂ (with Ca²⁺) is stable?

4. Calculate $\Delta H_{sub}$ for Na if:
   - $\Delta H_f$(NaBr) = -361 kJ/mol
   - U(NaBr) = 732 kJ/mol
   - Other values as needed

5. Explain why MgO has much higher lattice energy than NaCl despite similar sizes.

## References

1. Born, M., & Landé, A. (1918). *Verhandlungen der Deutschen Physikalischen Gesellschaft*.

2. Chemistry LibreTexts - Lattice Energy:
   https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Crystal_Lattices/Thermodynamics_of_Lattices/Lattice_Energy:_The_Born-Haber_cycle

3. Study.com - Born-Haber Cycle:
   https://study.com/learn/lesson/born-haber-cycle-equation-steps-lattice-energy.html

---

**Next:** [03 - Covalent Bonding](../03-covalent-bonding/covalent-bond-formation.md)