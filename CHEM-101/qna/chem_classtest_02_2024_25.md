---
subject: CHEM-101
topic: Colligative Properties, Chemical Equilibrium, Crystal Field Theory, Organic Reagents
date: 2026-02-28
tags: [notes, CHEM-101, colligative-properties, equilibrium, crystal-field-theory, lewis-acids]
---

# Chemistry-I (CHEM-101) — 2nd Class Test Solutions & Study Guide

> **Course:** B.Sc in Textile Engineering, Level-1 Term-1
> **College:** Gopalganj & Sheikh Rehana Textile Engineering College, Gopalganj
> **Exam:** 2nd Class Test, 2024 | Time: 30 min | Total Marks: 10 (5+5)

---

## Table of Contents

1. [Key Definitions](#1-key-definitions)
2. [Paper 1 — Solutions](#2-paper-1--solutions)
3. [Paper 2 — Solutions](#3-paper-2--solutions)
4. [Practice Questions with Solutions](#4-practice-questions-with-solutions)
5. [Quick Formula Reference](#5-quick-formula-reference)
6. [References & Further Reading](#6-references--further-reading)

---

## 1. Key Definitions

### 1.1 Colligative Properties

**Colligative properties** are properties of solutions that depend **only on the number of dissolved particles** (molecules or ions), not on the chemical identity of the solute.

The four colligative properties are:

| Property | Symbol | Effect |
|:---------|:------:|:-------|
| Relative Lowering of Vapour Pressure | $\Delta P / P^0$ | Decreases |
| Elevation of Boiling Point | $\Delta T_b$ | Increases |
| Depression of Freezing Point | $\Delta T_f$ | Decreases |
| Osmotic Pressure | $\Pi$ | Builds up across membrane |

> **Key Idea:** Add salt to water — it takes more energy to boil it (boiling point rises) but it freezes at a lower temperature. Neither the colour of the salt nor its smell matters — only how many particles dissolve.

---

### 1.2 Osmosis and Osmotic Pressure

**Osmosis** is the net flow of solvent molecules through a **semipermeable membrane** from a region of lower solute concentration (pure solvent side) to a region of higher solute concentration (solution side).

**Osmotic Pressure ($\Pi$)** is the minimum pressure that must be applied to the solution side to stop the flow of solvent through the membrane.

$$\Pi = MRT = \frac{n}{V} RT$$

Where:
- $\Pi$ = osmotic pressure (atm)
- $M$ = molarity of solution (mol/L)
- $R$ = ideal gas constant = 0.0821 L·atm·mol⁻¹·K⁻¹
- $T$ = absolute temperature (K)
- $n/V$ = molar concentration of solute

> **Textile Application:** Osmotic pressure is used in understanding diffusion of dyes into fibres. In dyeing, water and dye molecules must pass through the semi-permeable structure of the fibre.

---

### 1.3 Chemical Equilibrium

**Chemical equilibrium** is the state of a reversible reaction in which the rate of the forward reaction equals the rate of the reverse reaction, so the concentrations of reactants and products remain constant over time.

$$\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}$$

At equilibrium, the ratio of concentrations is constant — this constant ratio is the **equilibrium constant**.

---

### 1.4 Paramagnetic and Diamagnetic Complexes

**Paramagnetic:** A complex with **one or more unpaired electrons** in its d-orbitals. It is attracted to a magnetic field.

**Diamagnetic:** A complex in which **all electrons are paired** in its d-orbitals. It is weakly repelled by a magnetic field.

The magnetic character depends on the crystal field splitting energy ($\Delta_o$) relative to the electron pairing energy ($P$):
- If $\Delta_o > P$ → **low spin** → electrons pair up → often **diamagnetic**
- If $\Delta_o < P$ → **high spin** → electrons spread out → often **paramagnetic**

---

### 1.5 Electrophilic and Nucleophilic Reagents

**Electrophile** (electron-lover): A species that is **electron-deficient** and attacks electron-rich centres. It accepts an electron pair.

Examples: $\text{H}^+$, $\text{Br}^+$, $\text{NO}_2^+$, $\text{BF}_3$, $\text{AlCl}_3$, carbocations

**Nucleophile** (nucleus-lover): A species that is **electron-rich** and attacks electron-deficient centres. It donates an electron pair.

Examples: $\text{OH}^-$, $\text{CN}^-$, $\text{NH}_3$, $\text{H}_2\text{O}$, $\text{Cl}^-$, alkenes

> **Memory Tip:** Electrophiles are positively charged or electron-deficient — they *love electrons*. Nucleophiles are negatively charged or have lone pairs — they *love positive nuclei*.

---

## 2. Paper 1 — Solutions

### Question 1 — Colligative Properties, Osmosis & Boiling Point Elevation (5 Marks)

#### Part A: What Are Colligative Properties?

Colligative properties depend on the **concentration of solute particles**, not their identity. See Section 1.1 for the four types.

---

#### Part B: Raoult's Law

**Raoult's Law** states that the vapour pressure of a solution ($P_s$) is equal to the mole fraction of the solvent ($X_{\text{solvent}}$) multiplied by the vapour pressure of the pure solvent ($P^0$):

$$P_s = X_{\text{solvent}} \cdot P^0$$

Since $X_{\text{solvent}} = 1 - X_{\text{solute}}$, the **lowering of vapour pressure** is:

$$\Delta P = P^0 - P_s = X_{\text{solute}} \cdot P^0$$

This shows that adding a non-volatile solute always reduces the vapour pressure, which is the root cause of boiling point elevation.

---

#### Part C: Proof that $\Delta T_b \propto m$ (molar concentration)

**Setup:** A liquid boils when its vapour pressure equals the external pressure (1 atm). Adding a non-volatile solute lowers the vapour pressure below 1 atm at the original boiling point. The solution must be heated to a higher temperature $T_b'$ to restore vapour pressure to 1 atm.

**Step 1:** Using Clausius-Clapeyron equation, relate the vapour pressure change to a temperature change near the boiling point $T_b$:

$$\ln\left(\frac{P^0}{P_s}\right) = \frac{\Delta H_{vap}}{R}\left(\frac{1}{T_b} - \frac{1}{T_b'}\right)$$

**Step 2:** For dilute solutions, $X_{\text{solute}} \ll 1$, so from Raoult's Law:

$$\ln\left(\frac{P^0}{P_s}\right) \approx X_{\text{solute}} \approx \frac{n_{\text{solute}}}{n_{\text{solvent}}}$$

**Step 3:** Let $\Delta T_b = T_b' - T_b \ll T_b$, so:

$$\frac{1}{T_b} - \frac{1}{T_b'} = \frac{\Delta T_b}{T_b \cdot T_b'} \approx \frac{\Delta T_b}{T_b^2}$$

**Step 4:** Combining Steps 2 and 3:

$$X_{\text{solute}} = \frac{\Delta H_{vap}}{R} \cdot \frac{\Delta T_b}{T_b^2}$$

**Step 5:** For dilute solutions, convert mole fraction to **molality** $m$ (mol solute / kg solvent):

$$X_{\text{solute}} \approx \frac{n_{\text{solute}}}{n_{\text{solvent}}} = \frac{m \cdot M_A}{1000}$$

where $M_A$ is the molar mass of the solvent in g/mol.

**Step 6:** Substituting and rearranging:

$$\Delta T_b = \frac{R T_b^2 M_A}{1000 \Delta H_{vap}} \cdot m = K_b \cdot m$$

$$\boxed{\Delta T_b = K_b \cdot m}$$

Where $K_b = \dfrac{R T_b^2 M_A}{1000 \Delta H_{vap}}$ is the **ebullioscopic constant** (a property of the solvent only).

This proves that $\Delta T_b \propto m$ (molar concentration). ✅

> For water: $K_b = 0.512\ °\text{C·kg/mol}$

---

### Question 2 — Chemical Equilibrium & Law of Mass Action (5 Marks)

#### Part A: Chemical Equilibrium

See Section 1.3.

At equilibrium, for $\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}$:

$$K_c = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}$$

---

#### Part B: Law of Mass Action

Proposed by **Guldberg and Waage (1864)**: *The rate of a chemical reaction is directly proportional to the product of the active masses (molar concentrations) of the reactants, each raised to the power of its stoichiometric coefficient.*

For the reaction $\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}$:

$$r_{\text{forward}} = k_f[\text{A}]^a[\text{B}]^b$$

$$r_{\text{reverse}} = k_r[\text{C}]^c[\text{D}]^d$$

At equilibrium: $r_{\text{forward}} = r_{\text{reverse}}$

$$k_f[\text{A}]^a[\text{B}]^b = k_r[\text{C}]^c[\text{D}]^d$$

$$\frac{k_f}{k_r} = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b} = K_c$$

---

#### Part C: Proof that $K_c = K_p = K_x$

These three forms of the equilibrium constant are **not always equal** — they are equal only under the special condition $\Delta n_g = 0$. The general relationships are:

$$K_p = K_c(RT)^{\Delta n_g}$$

$$K_p = K_x \cdot P^{\Delta n_g}$$

**Derivation of $K_p = K_c(RT)^{\Delta n_g}$:**

For an ideal gas, the partial pressure and molar concentration are related by:

$$P_i = C_i RT$$

(since $PV = nRT \Rightarrow P = \frac{n}{V}RT = C \cdot RT$)

For $\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}$:

$$K_p = \frac{P_C^c \cdot P_D^d}{P_A^a \cdot P_B^b} = \frac{(C_C RT)^c(C_D RT)^d}{(C_A RT)^a(C_B RT)^b}$$

$$K_p = \frac{[C]^c[D]^d}{[A]^a[B]^b} \cdot (RT)^{(c+d)-(a+b)}$$

$$\boxed{K_p = K_c(RT)^{\Delta n_g}}$$

where $\Delta n_g = (\text{moles of gaseous products}) - (\text{moles of gaseous reactants})$

**Derivation of $K_p = K_x \cdot P^{\Delta n_g}$:**

By Dalton's Law: $P_i = X_i \cdot P$, where $X_i$ is the mole fraction and $P$ is total pressure.

$$K_p = \frac{(X_C P)^c(X_D P)^d}{(X_A P)^a(X_B P)^b} = K_x \cdot P^{(c+d)-(a+b)}$$

$$\boxed{K_p = K_x \cdot P^{\Delta n_g}}$$

**When $K_c = K_p = K_x$:** This holds when $\Delta n_g = 0$ (equal moles of gas on both sides), since $(RT)^0 = 1$ and $P^0 = 1$.

---

#### Part D: Calculate $K_c$, $K_p$, $K_x$ for the reaction

$$\text{N}_2(\text{g}) + 3\text{H}_2(\text{g}) \rightleftharpoons 2\text{NH}_3(\text{g})$$

> **Note:** The question asks to calculate $K_c$, $K_p$, $K_x$. Since no equilibrium concentrations are given, this part asks us to **write and relate the expressions**, and demonstrate their forms.

**Equilibrium constant expressions:**

$$K_c = \frac{[\text{NH}_3]^2}{[\text{N}_2][\text{H}_2]^3}$$

$$K_p = \frac{P_{\text{NH}_3}^2}{P_{\text{N}_2} \cdot P_{\text{H}_2}^3}$$

$$K_x = \frac{X_{\text{NH}_3}^2}{X_{\text{N}_2} \cdot X_{\text{H}_2}^3}$$

**Calculate $\Delta n_g$:**

$$\Delta n_g = 2 - (1 + 3) = 2 - 4 = -2$$

**Relationships:**

$$K_p = K_c(RT)^{-2} = \frac{K_c}{(RT)^2}$$

$$K_p = K_x \cdot P^{-2} = \frac{K_x}{P^2}$$

**Numerical Example** (using $K_p = 4.3 \times 10^{-4}$ at $375°\text{C} = 648\text{ K}$, a standard reference value):

$$K_c = K_p \cdot (RT)^2 = 4.3 \times 10^{-4} \times (0.0821 \times 648)^2$$

$$K_c = 4.3 \times 10^{-4} \times (53.2)^2 = 4.3 \times 10^{-4} \times 2830 \approx 1.22$$

$$K_x = K_p \cdot P^2 \quad \text{(depends on total pressure } P\text{)}$$

At $P = 1\ \text{atm}$: $K_x = K_p \cdot 1^2 = K_p = 4.3 \times 10^{-4}$

> **Industrial Note:** The synthesis of ammonia (Haber process) uses high pressure and a catalyst (iron). Since $\Delta n_g = -2$, increasing pressure shifts equilibrium to the right (towards products), increasing yield.

---

## 3. Paper 2 — Solutions

### Question 1 — Paramagnetic/Diamagnetic Properties & Crystal Field Theory (5 Marks)

#### Part A: Paramagnetic and Diamagnetic Properties

See Section 1.4.

The **magnetic moment** ($\mu$) of a complex is given by the spin-only formula:

$$\mu = \sqrt{n(n+2)}\ \text{BM}$$

Where $n$ = number of unpaired electrons, and BM = Bohr Magneton.

| Unpaired electrons ($n$) | Magnetic moment ($\mu$/BM) | Property |
|:---:|:---:|:---:|
| 0 | 0 | Diamagnetic |
| 1 | 1.73 | Paramagnetic |
| 2 | 2.83 | Paramagnetic |
| 3 | 3.87 | Paramagnetic |
| 4 | 4.90 | Paramagnetic |
| 5 | 5.92 | Paramagnetic (max for d⁵) |

---

#### Part B: Crystal Field Theory (CFT)

**Crystal Field Theory** is an electrostatic model that describes the effect of ligands on the energies of the d-orbitals of a central transition metal ion in a coordination complex.

**Core Idea:** Ligands are treated as **point charges** (negative ions or dipoles). Their electrostatic repulsion causes the five degenerate d-orbitals to split into groups of different energy levels.

**In an Octahedral Complex:**

The six ligands approach along the x, y, z axes. This repels:
- $d_{x^2-y^2}$ and $d_{z^2}$ orbitals (point directly at ligands) → higher energy → $e_g$ set
- $d_{xy}$, $d_{xz}$, $d_{yz}$ orbitals (point between ligand axes) → lower energy → $t_{2g}$ set

```
Energy
  |          ___   ___
  |         | eg (dx²-y², dz²)      ↑ +0.6Δo
  |  ─────  |
  | (free   |
  |  ion)   ↓ -0.4Δo
  |         |___  ___  ___
  |         | t₂g (dxy, dxz, dyz)
```

The energy gap is called the **Crystal Field Splitting Energy, $\Delta_o$**.

**High Spin vs. Low Spin:**

- **Weak field ligands** (e.g., $\text{F}^-$, $\text{Cl}^-$, $\text{H}_2\text{O}$): Small $\Delta_o$ → electrons spread across all orbitals → **high spin** → more unpaired electrons → **paramagnetic**
- **Strong field ligands** (e.g., $\text{CN}^-$, $\text{CO}$, $\text{NO}_2^-$): Large $\Delta_o$ → electrons pair in $t_{2g}$ first → **low spin** → fewer unpaired electrons → often **diamagnetic**

**Spectrochemical Series** (weak to strong field ligands):

$$\text{I}^- < \text{Br}^- < \text{Cl}^- < \text{F}^- < \text{OH}^- < \text{H}_2\text{O} < \text{NH}_3 < \text{en} < \text{NO}_2^- < \text{CN}^- < \text{CO}$$

---

#### Part C: Applications of Crystal Field Theory

CFT explains several important properties of coordination compounds:

**1. Colour of Complexes**
When light hits a complex, electrons absorb photons of energy equal to $\Delta_o$ and jump from $t_{2g}$ to $e_g$. The complementary colour of the absorbed light is what we observe. This is why $[\text{Cu(H}_2\text{O)}_6]^{2+}$ appears blue (absorbs orange/red light).

**2. Magnetic Properties**
CFT directly predicts whether a complex is paramagnetic or diamagnetic by determining the electron arrangement in split d-orbitals (see above).

**3. Stability of Complexes**
The Crystal Field Stabilisation Energy (CFSE) is the extra stability gained when electrons occupy the lower $t_{2g}$ orbitals rather than remaining degenerate. Higher CFSE = more stable complex.

$$\text{CFSE} = -0.4n_{t_{2g}} \cdot \Delta_o + 0.6n_{e_g} \cdot \Delta_o$$

**4. Geometry of Complexes**
CFT helps predict why certain metal ions prefer octahedral, tetrahedral, or square planar geometries based on their d-electron count and ligand field strength.

> **Textile Application:** Many textile dyes are transition metal complexes. Chrome mordant dyes (e.g., those containing $\text{Cr}^{3+}$) bind to fibres by coordinate bonding. CFT explains their bright colours and stability.

---

### Question 2 — Electrophilic/Nucleophilic Reagents, Lewis Concept & Acid-Base Strength (5 Marks)

#### Part A: Electrophilic and Nucleophilic Reagents

See Section 1.5.

**Electrophilic Substitution (SE):** The attacking agent is an electrophile.

Example — Nitration of benzene:

$$\text{C}_6\text{H}_6 + \text{NO}_2^+ \rightarrow \text{C}_6\text{H}_5\text{NO}_2 + \text{H}^+$$

**Nucleophilic Substitution (SN):** The attacking agent is a nucleophile.

Example — Hydrolysis of alkyl halide (SN2):

$$\text{CH}_3\text{Br} + \text{OH}^- \rightarrow \text{CH}_3\text{OH} + \text{Br}^-$$

---

#### Part B: Lewis Concept of Acids and Bases

Proposed by **G.N. Lewis (1923)**, this is the broadest acid-base definition:

**Lewis Acid:** A species that **accepts** an electron pair.
$$\text{Examples: } \text{BF}_3,\ \text{AlCl}_3,\ \text{FeCl}_3,\ \text{H}^+,\ \text{Ag}^+$$

**Lewis Base:** A species that **donates** an electron pair.
$$\text{Examples: } \text{NH}_3,\ \text{H}_2\text{O},\ \text{OH}^-,\ \text{F}^-,\ \text{amines}$$

**Lewis Acid-Base Reaction:**

$$\underbrace{\text{BF}_3}_{\text{Lewis acid}} + \underbrace{:\text{NH}_3}_{\text{Lewis base}} \rightarrow \text{F}_3\text{B} \leftarrow \text{NH}_3$$

The Lewis base donates a lone pair to form a **coordinate covalent bond** with the Lewis acid.

> **Connection to CFT:** In coordination chemistry, the metal ion acts as a **Lewis acid** (electron pair acceptor) and the ligands act as **Lewis bases** (electron pair donors). This is why understanding Lewis theory is essential for coordination chemistry.

**Comparison of Acid-Base Theories:**

| Theory | Acid | Base | Limitation |
|:-------|:-----|:-----|:-----------|
| Arrhenius | Produces $\text{H}^+$ in water | Produces $\text{OH}^-$ in water | Only aqueous solutions |
| Brønsted-Lowry | $\text{H}^+$ donor (proton donor) | $\text{H}^+$ acceptor (proton acceptor) | Only proton transfer |
| Lewis | Electron pair acceptor | Electron pair donor | Broadest — includes all above |

---

#### Part C: Measuring the Strength of Acids and Bases

**Acid Strength ($K_a$):**

For a weak acid $\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-$:

$$K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}$$

$$\text{p}K_a = -\log K_a$$

Larger $K_a$ (smaller $\text{p}K_a$) = stronger acid.

**Base Strength ($K_b$):**

For a weak base $\text{B} + \text{H}_2\text{O} \rightleftharpoons \text{BH}^+ + \text{OH}^-$:

$$K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}$$

$$K_a \times K_b = K_w = 1.0 \times 10^{-14}\ \text{at 25°C}$$

**pH Scale:**

$$\text{pH} = -\log[\text{H}^+], \quad \text{pOH} = -\log[\text{OH}^-], \quad \text{pH} + \text{pOH} = 14$$

**Factors Affecting Acid Strength:**

1. **Bond strength:** Weaker H-A bond = stronger acid (e.g., HI > HBr > HCl > HF)
2. **Electronegativity:** More electronegative atom = more stable $\text{A}^-$ = stronger acid
3. **Resonance:** Resonance stabilisation of the conjugate base increases acid strength (e.g., carboxylic acids are stronger than alcohols)
4. **Inductive effect:** Electron-withdrawing groups near the acidic site increase acid strength

> **Example:** Trichloroacetic acid ($\text{CCl}_3\text{COOH}$) is much stronger than acetic acid ($\text{CH}_3\text{COOH}$) because the three chlorine atoms withdraw electron density, stabilising the carboxylate anion.

---

## 4. Practice Questions with Solutions

### Practice Set A — Colligative Properties & Osmosis

---

**P1.** The boiling point of a solution of 3.0 g of a non-volatile solute in 100 g of water is 100.156 °C. Find the molar mass of the solute. ($K_b$ for water = 0.512 °C·kg/mol)

<details>
<summary>📋 Solution</summary>

**Given:**
- Mass of solute $w_2 = 3.0$ g
- Mass of solvent $w_1 = 100$ g = 0.1 kg
- $\Delta T_b = 100.156 - 100 = 0.156$ °C
- $K_b = 0.512$ °C·kg/mol

**Using $\Delta T_b = K_b \cdot m$:**

$$m = \frac{\Delta T_b}{K_b} = \frac{0.156}{0.512} = 0.3047 \text{ mol/kg}$$

**Moles of solute = molality × kg of solvent:**

$$n = 0.3047 \times 0.1 = 0.03047 \text{ mol}$$

**Molar mass:**

$$M = \frac{w_2}{n} = \frac{3.0}{0.03047} \approx \boxed{98.5 \text{ g/mol}}$$

</details>

---

**P2.** Calculate the osmotic pressure of a 0.2 M glucose solution at 27°C. ($R = 0.0821$ L·atm·mol⁻¹·K⁻¹)

<details>
<summary>📋 Solution</summary>

**Given:** $M = 0.2$ mol/L, $T = 27 + 273 = 300$ K

$$\Pi = MRT = 0.2 \times 0.0821 \times 300$$

$$\boxed{\Pi = 4.93 \text{ atm}}$$

This is roughly 5 atmospheres — equivalent to the pressure at 50 m depth in water — demonstrating why osmotic pressure is significant even for dilute solutions.

</details>

---

**P3.** A 0.5 m NaCl solution in water has what approximate boiling point? ($K_b = 0.512$ °C·kg/mol, van't Hoff factor $i = 2$ for NaCl)

<details>
<summary>📋 Solution</summary>

NaCl dissociates completely: $\text{NaCl} \rightarrow \text{Na}^+ + \text{Cl}^-$, so $i = 2$.

$$\Delta T_b = i \cdot K_b \cdot m = 2 \times 0.512 \times 0.5 = 0.512 \text{ °C}$$

$$T_b = 100 + 0.512 = \boxed{100.512 \text{ °C}}$$

</details>

---

### Practice Set B — Chemical Equilibrium

---

**P4.** Write the equilibrium constant expressions for the following reactions:

(a) $\text{H}_2(\text{g}) + \text{I}_2(\text{g}) \rightleftharpoons 2\text{HI}(\text{g})$

(b) $\text{N}_2\text{O}_4(\text{g}) \rightleftharpoons 2\text{NO}_2(\text{g})$

(c) $\text{Fe}_3\text{O}_4(\text{s}) + 4\text{H}_2(\text{g}) \rightleftharpoons 3\text{Fe}(\text{s}) + 4\text{H}_2\text{O}(\text{g})$

<details>
<summary>📋 Solution</summary>

**(a)** $\Delta n_g = 2 - 2 = 0$, so $K_c = K_p = K_x$

$$K_c = \frac{[\text{HI}]^2}{[\text{H}_2][\text{I}_2]}, \quad K_p = \frac{P_{\text{HI}}^2}{P_{\text{H}_2} \cdot P_{\text{I}_2}}$$

**(b)** $\Delta n_g = 2 - 1 = +1$

$$K_c = \frac{[\text{NO}_2]^2}{[\text{N}_2\text{O}_4]}, \quad K_p = K_c(RT)^1$$

**(c)** Pure solids ($\text{Fe}_3\text{O}_4$ and $\text{Fe}$) have activity = 1 and do not appear in the expression. $\Delta n_g = 4 - 4 = 0$

$$K_c = \frac{[\text{H}_2\text{O}]^4}{[\text{H}_2]^4}$$

</details>

---

**P5.** For the reaction $\text{CO}(\text{g}) + 2\text{H}_2(\text{g}) \rightleftharpoons \text{CH}_3\text{OH}(\text{g})$, if $K_c = 10.5$ at 220°C, calculate $K_p$.

<details>
<summary>📋 Solution</summary>

$T = 220 + 273 = 493$ K, $R = 0.0821$ L·atm·mol⁻¹·K⁻¹

$\Delta n_g = 1 - (1 + 2) = 1 - 3 = -2$

$$K_p = K_c(RT)^{\Delta n_g} = 10.5 \times (0.0821 \times 493)^{-2}$$

$$= 10.5 \times (40.5)^{-2} = \frac{10.5}{1640} \approx \boxed{6.4 \times 10^{-3}}$$

</details>

---

**P6.** State Le Chatelier's Principle and predict the effect on $\text{N}_2 + 3\text{H}_2 \rightleftharpoons 2\text{NH}_3$ ($\Delta H = -92$ kJ/mol) when: (a) pressure is increased, (b) temperature is increased, (c) $\text{NH}_3$ is removed continuously.

<details>
<summary>📋 Solution</summary>

**Le Chatelier's Principle:** If a system at equilibrium is subjected to a change (concentration, pressure, temperature), the equilibrium shifts in the direction that tends to counteract the change.

**(a) Increase in pressure:** Total moles of gas: reactants = 4, products = 2. Increasing pressure favours the side with fewer moles of gas → **shifts right (towards NH₃)** → yield increases ✅

**(b) Increase in temperature:** The forward reaction is exothermic ($\Delta H < 0$). Increasing temperature favours the endothermic reverse reaction → **shifts left** → yield decreases ❌

**(c) Continuous removal of NH₃:** Removing a product lowers its concentration. By Le Chatelier's principle → **shifts right** to restore equilibrium → reaction continues forward → increases yield ✅

This is why the Haber process uses high pressure, moderately high temperature, and continuous removal of ammonia.

</details>

---

### Practice Set C — Crystal Field Theory & Coordination Chemistry

---

**P7.** Determine whether $[\text{Fe}(\text{CN})_6]^{4-}$ is paramagnetic or diamagnetic. ($\text{Fe}^{2+}$ has a d⁶ configuration)

<details>
<summary>📋 Solution</summary>

**Step 1:** $\text{Fe}^{2+}$ has electron configuration [Ar] 3d⁶.

**Step 2:** $\text{CN}^-$ is a **strong field ligand** (high $\Delta_o$, promotes low spin).

**Step 3:** In a low-spin d⁶ octahedral complex, all 6 electrons fill the $t_{2g}$ level:

```
eg  :  [  ] [  ]       (empty)
t₂g:  [↑↓][↑↓][↑↓]   (all paired)
```

**Step 4:** No unpaired electrons → **diamagnetic** ✅

$$\mu = \sqrt{0(0+2)} = 0 \text{ BM}$$

</details>

---

**P8.** Determine whether $[\text{Fe}(\text{F})_6]^{3-}$ is paramagnetic or diamagnetic. ($\text{Fe}^{3+}$ has a d⁵ configuration)

<details>
<summary>📋 Solution</summary>

**Step 1:** $\text{Fe}^{3+}$ has electron configuration [Ar] 3d⁵.

**Step 2:** $\text{F}^-$ is a **weak field ligand** (small $\Delta_o$, promotes high spin).

**Step 3:** In a high-spin d⁵ octahedral complex, electrons fill all orbitals singly first (Hund's rule):

```
eg  :  [↑ ] [↑ ]
t₂g:  [↑ ][↑ ][↑ ]
```

**Step 4:** 5 unpaired electrons → **paramagnetic** ✅

$$\mu = \sqrt{5(5+2)} = \sqrt{35} \approx 5.92 \text{ BM}$$

</details>

---

### Practice Set D — Lewis Concept & Acid-Base

---

**P9.** Identify the Lewis acid and Lewis base in the following reactions:

(a) $\text{AlCl}_3 + \text{Cl}^- \rightarrow [\text{AlCl}_4]^-$

(b) $\text{Ag}^+ + 2:\text{NH}_3 \rightarrow [\text{Ag(NH}_3)_2]^+$

(c) $\text{BF}_3 + \text{F}^- \rightarrow [\text{BF}_4]^-$

<details>
<summary>📋 Solution</summary>

**(a)** $\text{AlCl}_3$ = **Lewis acid** (accepts electron pair from $\text{Cl}^-$), $\text{Cl}^-$ = **Lewis base** (donates lone pair)

**(b)** $\text{Ag}^+$ = **Lewis acid** (empty orbital accepts $\text{NH}_3$ lone pairs), $\text{NH}_3$ = **Lewis base** (donates lone pair on N)

**(c)** $\text{BF}_3$ = **Lewis acid** (boron has empty p-orbital), $\text{F}^-$ = **Lewis base** (donates lone pair)

Note: In all three reactions, a coordinate covalent bond forms between the Lewis base and Lewis acid.

</details>

---

**P10.** Arrange the following acids in increasing order of acid strength: $\text{CH}_3\text{COOH}$, $\text{ClCH}_2\text{COOH}$, $\text{Cl}_2\text{CHCOOH}$, $\text{Cl}_3\text{CCOOH}$

<details>
<summary>📋 Solution</summary>

The $-\text{Cl}$ group has a strong **electron-withdrawing inductive effect** (–I). More chlorines withdraw more electron density from the $\text{O-H}$ bond, making the proton easier to release, and stabilise the carboxylate anion $\text{RCOO}^-$ more strongly.

**Increasing acid strength:**

$$\text{CH}_3\text{COOH} < \text{ClCH}_2\text{COOH} < \text{Cl}_2\text{CHCOOH} < \text{Cl}_3\text{CCOOH}$$

With $K_a$ values (approximate):

| Acid | $K_a$ |
|:-----|:------|
| Acetic acid | $1.8 \times 10^{-5}$ |
| Chloroacetic acid | $1.4 \times 10^{-3}$ |
| Dichloroacetic acid | $5.0 \times 10^{-2}$ |
| Trichloroacetic acid | $2.0 \times 10^{-1}$ |

</details>

---

**P11.** Distinguish between electrophilic and nucleophilic substitution. Give one textile chemistry example for each.

<details>
<summary>📋 Solution</summary>

**Electrophilic Substitution (SE):**
- An electrophile attacks an electron-rich centre
- Common in aromatic rings (benzene chemistry)
- Example: Nitration of dye intermediates in textile dye synthesis — the $\text{NO}_2^+$ (electrophile) attacks the aromatic ring of naphthalene to form nitronaphthalene, a key step in making azo dyes

**Nucleophilic Substitution (SN):**
- A nucleophile attacks an electron-deficient centre
- Common in reactive dye-fibre bonding
- Example: Reactive dyes bond to cotton via nucleophilic substitution — the $-\text{OH}$ groups of cellulose ($\text{Cell-OH}$, acting as nucleophiles) attack the reactive carbon of the dye molecule (e.g., a triazine ring), displacing $\text{Cl}^-$ and forming a permanent covalent dye-fibre bond

</details>

---

## 5. Quick Formula Reference

| Concept | Formula |
|:--------|:--------|
| Raoult's Law | $P_s = X_{\text{solvent}} \cdot P^0$ |
| Vapour pressure lowering | $\Delta P = X_{\text{solute}} \cdot P^0$ |
| Boiling point elevation | $\Delta T_b = K_b \cdot m$ (or $= i K_b m$ for electrolytes) |
| Freezing point depression | $\Delta T_f = K_f \cdot m$ |
| Osmotic pressure | $\Pi = MRT$ |
| Equilibrium constant | $K_c = \dfrac{[\text{products}]^{\text{coeff}}}{[\text{reactants}]^{\text{coeff}}}$ |
| $K_p$ and $K_c$ relation | $K_p = K_c(RT)^{\Delta n_g}$ |
| $K_p$ and $K_x$ relation | $K_p = K_x \cdot P^{\Delta n_g}$ |
| Magnetic moment | $\mu = \sqrt{n(n+2)}$ BM |
| Crystal field (octahedral) | $e_g$ = +0.6$\Delta_o$; $t_{2g}$ = −0.4$\Delta_o$ |
| Lewis acid-base | Acid accepts $e^-$ pair; Base donates $e^-$ pair |
| Acid dissociation | $K_a = \dfrac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}$ |
| pH relation | $\text{pH} + \text{pOH} = 14$ at 25°C |

---

## 6. References & Further Reading

1. **LibreTexts — Colligative Properties: Boiling Point Elevation & Osmosis**
   [https://chem.libretexts.org/...Colligative_Properties](https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_General_Chemistry_(Petrucci_et_al.)/13:_Solutions/13.6)
   *Full derivation of $\Delta T_b = K_b m$ and osmotic pressure with diagrams.*

2. **Purdue University — Colligative Properties**
   [https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php](https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php)
   *Raoult's law proof, boiling point elevation, osmosis explained with phase diagrams.*

3. **Vedantu — Relation between $K_p$ and $K_c$**
   [https://www.vedantu.com/physics/relation-between-kp-and-kc](https://www.vedantu.com/physics/relation-between-kp-and-kc)
   *Step-by-step derivation for undergraduate level.*

4. **LibreTexts — Crystal Field Theory**
   [https://chem.libretexts.org/.../Crystal_Field_Theory](https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Crystal_Field_Theory/Crystal_Field_Theory)
   *Octahedral, tetrahedral, and square planar splitting diagrams with worked examples.*

5. **LibreTexts — Magnetic Properties & CFT**
   [https://chem.libretexts.org/.../24.06:_Magnetic_Properties](https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_General_Chemistry_(Petrucci_et_al.)/24:_Complex_Ions_and_Coordination_Compounds/24.06)
   *High-spin vs low-spin classification, measurement of paramagnetism.*

6. **Wikipedia — Crystal Field Theory**
   [https://en.wikipedia.org/wiki/Crystal_field_theory](https://en.wikipedia.org/wiki/Crystal_field_theory)
   *Comprehensive overview including CFSE, spectrochemical series, and applications.*

7. **BYJU's — Law of Mass Action**
   [https://byjus.com/chemistry/law-of-mass-action-or-law-of-chemical-equilibrium/](https://byjus.com/chemistry/law-of-mass-action-or-law-of-chemical-equilibrium/)
   *Kinetic derivation of $K_c$, $K_p$, $K_x$ and their interrelationships.*

8. **LibreTexts — The Equilibrium Constant**
   [https://chem.libretexts.org/.../The_Equilibrium_Constant](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/The_Equilibrium_Constant)
   *Constructing $K_c$ and $K_p$ expressions, reaction quotient Q, heterogeneous equilibria.*

---

> **Study Tip:** For CHEM-101, always link theory to textile applications in your answers. Examiners appreciate when you connect osmosis to dyeing, crystal field theory to dye colour, or Lewis acids to mordant chemistry. It shows deeper understanding and adds value beyond rote definitions.

---

*Last updated: February 2026 | Chemistry-I CHEM-101 | B.Sc Textile Engineering, BUTEX*
