---
title: "Physical Chemistry — Theory of Dilute Solutions"
course: CHEM-102
topic: 05
tags: [chemistry, colligative-properties, Raoult's-law, osmotic-pressure, boiling-point, freezing-point, butex]
---

# Chapter 5 — Physical Chemistry: Theory of Dilute Solutions

> **Syllabus Coverage:** Colligative properties · Raoult's law · Vapour pressure lowering · Boiling point elevation · Freezing point depression · Osmotic pressure · Molecular weight determination

---

## Table of Contents
1. [Colligative Properties — Introduction](#1-colligative-properties--introduction)
2. [Raoult's Law — Vapour Pressure Lowering](#2-raoults-law--vapour-pressure-lowering)
3. [Elevation of Boiling Point](#3-elevation-of-boiling-point)
4. [Depression of Freezing Point](#4-depression-of-freezing-point)
5. [Osmotic Pressure](#5-osmotic-pressure)
6. [Relationships Between Colligative Properties](#6-relationships-between-colligative-properties)
7. [Ideal and Real Solutions](#7-ideal-and-real-solutions)
8. [Isotonic, Hypotonic, Hypertonic Solutions](#8-isotonic-hypotonic-hypertonic-solutions)
9. [Molecular Weight Determination](#9-molecular-weight-determination)
10. [Practice Questions](#practice-questions)
11. [References](#references)

---

## 1. Colligative Properties — Introduction

**Colligative properties** are properties of solutions that depend only on the **number of solute particles** dissolved, not on the **nature (identity)** of the solute.

> *Colligare* = Latin for "to bind together" — the particles act collectively.

### 1.1 The Four Colligative Properties

| Property | Symbol | Effect of adding non-volatile solute |
|----------|--------|--------------------------------------|
| Vapour pressure lowering | ΔP | Decreases |
| Boiling point elevation | ΔTb | Increases |
| Freezing point depression | ΔTf | Decreases |
| Osmotic pressure | π | Increases |

**Key requirement:** The solute must be **non-volatile** (does not significantly contribute to vapour pressure).

**Concentration unit used:** **Molality (m)** — preferred because it is independent of temperature.

$$m = \frac{\text{moles of solute}}{\text{kg of solvent}}$$

---

## 2. Raoult's Law — Vapour Pressure Lowering

### 2.1 Statement of Raoult's Law

> *"The partial vapour pressure of a solvent over a solution is directly proportional to the mole fraction of the solvent in the solution."*

$$P_A = P_A^0 \cdot x_A$$

Where:
- $P_A$ = vapour pressure of solvent **over solution**
- $P_A^0$ = vapour pressure of **pure solvent**
- $x_A$ = mole fraction of solvent

### 2.2 Vapour Pressure Lowering (ΔP)

$$\Delta P = P_A^0 - P_A = P_A^0 - P_A^0 x_A = P_A^0(1 - x_A)$$

Since $x_A + x_B = 1$ (where B = solute): $1 - x_A = x_B$

$$\boxed{\Delta P = P_A^0 \cdot x_B}$$

**Relative lowering of vapour pressure:**

$$\frac{\Delta P}{P_A^0} = \frac{P_A^0 - P_A}{P_A^0} = x_B = \frac{n_B}{n_A + n_B}$$

For dilute solutions ($n_B \ll n_A$):

$$\frac{\Delta P}{P_A^0} \approx \frac{n_B}{n_A} = \frac{w_B/M_B}{w_A/M_A}$$

This is the basis for **molecular weight determination** from vapour pressure data.

### 2.3 Limitations of Raoult's Law

| Limitation | Explanation |
|-----------|------------|
| Only for ideal solutions | Real solutions deviate (positive or negative deviation) |
| Only for non-volatile solute | Volatile solutes have their own vapour pressure |
| Only for dilute solutions | Concentrated solutions show significant deviations |
| Does not account for ionization | Electrolytes give more particles (NaCl → 2 ions) |

### 2.4 Vapour Pressure — Phase Diagram

```
Pressure (P)
↑
P₀ |--------\  ← pure solvent vapour pressure curve
   |         \
P  |----\     \  ← solution vapour pressure curve (lower)
   |     \   ΔP = P₀ - P
   |      \   \
   +-------+---+-------→ Temperature
           Tb  Tb'
           (solution BP elevated)
```

---

## 3. Elevation of Boiling Point

### 3.1 Concept

A solution boils when its vapour pressure equals atmospheric pressure. Since the solution has **lower vapour pressure** than pure solvent, it must be heated to a **higher temperature** to reach atmospheric pressure.

$$\Delta T_b = T_b(\text{solution}) - T_b^0(\text{pure solvent}) > 0$$

### 3.2 Derivation — Proof that ΔTb ∝ m

Starting from thermodynamic treatment of vapour pressure:

Using the Clausius-Clapeyron relationship and Raoult's law:

For a dilute solution, the boiling point elevation is:

$$\Delta T_b = \frac{RT_b^{0^2} M_A}{\Delta H_{vap}} \cdot m$$

Where:
- R = 8.314 J mol⁻¹ K⁻¹ (gas constant)
- $T_b^0$ = boiling point of pure solvent (K)
- $M_A$ = molar mass of solvent (kg/mol)
- $\Delta H_{vap}$ = enthalpy of vaporization of solvent (J/mol)
- m = molality of solution

The term $\frac{RT_b^{0^2} M_A}{\Delta H_{vap}}$ is a **constant** for a given solvent, called the **ebullioscopic constant** $K_b$.

$$\boxed{\Delta T_b = K_b \cdot m}$$

Since $K_b$ is constant for a given solvent, **ΔTb is directly proportional to m** ∝ (number of solute particles).

### 3.3 Derivation (Step-by-step)

**Step 1:** From Raoult's law:
$$\frac{\Delta P}{P_A^0} = x_B \approx \frac{n_B}{n_A} = \frac{m \cdot M_A}{1000}$$

(where m = molality, $M_A$ = molar mass of solvent in g/mol)

**Step 2:** From Clausius-Clapeyron equation:
$$\ln\frac{P_A^0}{P} = \frac{\Delta H_{vap}}{R}\left(\frac{1}{T_b} - \frac{1}{T_b^0}\right)$$

**Step 3:** For small ΔP:
$$\frac{\Delta P}{P_A^0} \approx \frac{\Delta H_{vap} \cdot \Delta T_b}{RT_b^{0^2}}$$

**Step 4:** Combining:
$$\frac{m \cdot M_A}{1000} = \frac{\Delta H_{vap} \cdot \Delta T_b}{RT_b^{0^2}}$$

**Step 5:** Solving for ΔTb:
$$\Delta T_b = \frac{R T_b^{0^2} M_A}{1000 \cdot \Delta H_{vap}} \cdot m = K_b \cdot m$$

∴ **ΔTb ∝ m** (QED) ✓

### 3.4 Common Ebullioscopic Constants

| Solvent | Boiling point (°C) | Kb (°C·kg/mol) |
|---------|-------------------|---------------|
| Water | 100 | 0.512 |
| Benzene | 80.1 | 2.53 |
| Ethanol | 78.4 | 1.22 |
| Acetone | 56.5 | 1.71 |
| Chloroform | 61.2 | 3.63 |

---

## 4. Depression of Freezing Point

### 4.1 Concept

A solution freezes at a **lower temperature** than pure solvent because the solute disrupts the formation of the ordered solid lattice.

$$\Delta T_f = T_f^0(\text{pure solvent}) - T_f(\text{solution}) > 0$$

### 4.2 Derivation — Proof that ΔTf ∝ m

By identical thermodynamic reasoning to boiling point elevation (but applied to solid-liquid equilibrium):

$$\Delta T_f = \frac{RT_f^{0^2} M_A}{\Delta H_{fus}} \cdot m = K_f \cdot m$$

Where:
- $T_f^0$ = freezing point of pure solvent (K)
- $\Delta H_{fus}$ = enthalpy of fusion of solvent (J/mol)
- $K_f$ = cryoscopic constant (freezing point depression constant)

$$\boxed{\Delta T_f = K_f \cdot m}$$

Since $K_f$ is constant for a given solvent, **ΔTf ∝ m** ✓

### 4.3 Common Cryoscopic Constants

| Solvent | Freezing point (°C) | Kf (°C·kg/mol) |
|---------|---------------------|---------------|
| Water | 0 | 1.86 |
| Benzene | 5.5 | 5.12 |
| Acetic acid | 16.6 | 3.90 |
| Cyclohexane | 6.5 | 20.0 |
| Camphor | 178.4 | 37.7 |

### 4.4 Applications

- **Anti-freeze** in car radiators (ethylene glycol lowers freezing point of water)
- **Salting roads** in winter (NaCl lowers the freezing point of water)
- **Determination of molecular weight** (best done with camphor as solvent due to large Kf)

---

## 5. Osmotic Pressure

### 5.1 Osmosis

**Osmosis** is the spontaneous flow of solvent molecules through a **semipermeable membrane** from a region of **lower solute concentration** to **higher solute concentration**.

```
Semipermeable membrane
         |
  pure   |   solution
 solvent |   (higher concentration)
         |
  H₂O → | → (spontaneous flow)
         |
  (lower conc.)  (higher conc.)
```

### 5.2 Osmotic Pressure (π)

**Osmotic pressure** is the **minimum external pressure** that must be applied to the solution to stop osmosis.

### 5.3 Laws of Osmotic Pressure

**Van't Hoff's Laws:**

**1. Boyle-Van't Hoff Law (at constant T):**
$$\pi \propto C \quad \text{or} \quad \pi V = \text{constant}$$

**2. Charles-Van't Hoff Law (at constant C):**
$$\pi \propto T$$

**3. Van't Hoff Law (combining both):**
$$\pi = CRT$$

Where:
- π = osmotic pressure (Pa or atm)
- C = molar concentration of solute (mol/L)
- R = 0.0821 L·atm·mol⁻¹·K⁻¹
- T = absolute temperature (K)

$$\boxed{\pi = CRT = \frac{n}{V}RT = MRT}$$

**4. Avogadro-Van't Hoff Law:**
At same T and π, equal volumes of different solutions contain equal numbers of solute particles (analogous to Avogadro's law for gases).

### 5.4 Sample Calculation

**Q:** Calculate osmotic pressure of 0.1 M glucose solution at 25°C.

$$\pi = CRT = 0.1 \times 0.0821 \times (25 + 273)$$
$$\pi = 0.1 \times 0.0821 \times 298 = 2.45 \text{ atm}$$

---

## 6. Relationships Between Colligative Properties

### 6.1 Osmotic Pressure ∝ Lowering of Vapour Pressure

**Proof:**

From Raoult's law: $\frac{\Delta P}{P_A^0} = x_B$

For dilute solution: $x_B \approx \frac{n_B}{n_A}$

Since: $n_A = \frac{V \cdot d}{M_A}$ (moles of solvent), and Van't Hoff: $\pi = \frac{n_B RT}{V}$

$$n_B = \frac{\pi V}{RT}$$

$$\frac{\Delta P}{P_A^0} = \frac{n_B}{n_A} = \frac{\pi V / RT}{n_A}$$

$$\Delta P = P_A^0 \cdot \frac{\pi V}{n_A RT}$$

Since the right-hand side contains only constants and π at fixed T and V:

$$\boxed{\Delta P \propto \pi}$$

Osmotic pressure is proportional to lowering of vapour pressure ✓

### 6.2 Osmotic Pressure ∝ Relative Lowering of Vapour Pressure

$$\frac{P_A^0 - P_A}{P_A^0} = \frac{\Delta P}{P_A^0} = x_B = \frac{n_B}{n_A + n_B}$$

For dilute solutions:

$$\frac{\Delta P}{P_A^0} \approx \frac{n_B}{n_A} = \frac{n_B V}{n_A V} = \frac{C_B M_A}{\rho_A}$$

And since $\pi = C_B RT$:

$$C_B = \frac{\pi}{RT}$$

$$\frac{\Delta P}{P_A^0} = \frac{\pi M_A}{\rho_A RT}$$

Since $M_A, \rho_A, R, T$ are constants:

$$\boxed{\frac{\Delta P}{P_A^0} \propto \pi}$$

∴ **Osmotic pressure is proportional to relative lowering of vapour pressure** ✓

### 6.3 Relationship Between Boiling Point Elevation and Vapour Pressure Lowering

$$\Delta T_b = \frac{RT_b^{0^2}}{\Delta H_{vap} \cdot P_A^0} \cdot \Delta P$$

∴ $\Delta T_b \propto \Delta P$ (vapour pressure lowering)

### 6.4 Summary of Relationships

```
           Vapour pressure lowering (ΔP)
                  /       |       \
                 /        |        \
        ΔTb     ∝    ΔP/P₀    ∝     ΔTf
         ↕                              ↕
    (mol. wt)        ∝   π        (mol. wt)
                         ↕
                  Osmotic pressure
```

All four colligative properties are interconnected and proportional to solute concentration.

---

## 7. Ideal and Real Solutions

### 7.1 Ideal Solution
- Obeys Raoult's law perfectly at all concentrations
- $\Delta H_{mixing} = 0$ (no heat evolved or absorbed)
- $\Delta V_{mixing} = 0$ (no volume change)
- Intermolecular forces A-A = B-B = A-B
- Example: Benzene + toluene; hexane + heptane

### 7.2 Real Solutions — Deviations from Raoult's Law

**Positive deviation ($P > P_{ideal}$):**
- A-B interactions weaker than A-A and B-B
- Solution has higher vapour pressure than ideal
- $\Delta H_{mixing} > 0$ (endothermic)
- Example: Ethanol + water; acetone + carbon disulphide

**Negative deviation ($P < P_{ideal}$):**
- A-B interactions stronger than A-A and B-B
- Solution has lower vapour pressure than ideal
- $\Delta H_{mixing} < 0$ (exothermic)
- Example: Chloroform + acetone; HCl + water; H₂SO₄ + water

```
    P
    ↑
    |    Positive deviation            Negative deviation
    |      /                              \
P°A |----/--------                         --------\----
    |   /  ideal                  ideal             \
    |  /   line               line                   \
P°B |  |   \                  /                       |
    |  |    \                /                        |
    +--+-----+---          --+------------------------+--→ xB
       0     1              0                         1
```

---

## 8. Isotonic, Hypotonic, Hypertonic Solutions

| Term | Definition | Osmotic pressure | Effect on cells |
|------|-----------|-----------------|----------------|
| **Isotonic** | Same osmotic pressure as reference (e.g., blood) | Equal | No net osmosis; cells maintain normal shape |
| **Hypotonic** | Lower osmotic pressure than reference | Lower than blood | Water enters cells → cells swell → lysis (haemolysis in RBCs) |
| **Hypertonic** | Higher osmotic pressure than reference | Higher than blood | Water leaves cells → cells shrink → crenation in RBCs |

**Examples:**
- Normal saline (0.9% NaCl) = isotonic with blood
- 5% glucose = approximately isotonic
- Seawater (3.5% NaCl) = hypertonic (drinking dehydrates you)
- Distilled water = hypotonic

```
     Hypotonic         Isotonic         Hypertonic
     (Cell swells)    (No change)      (Cell shrinks)
     
      ( ((●)) )          (●)              (•)
       swollen          normal           shrunken
```

---

## 9. Molecular Weight Determination

### 9.1 From Boiling Point Elevation

$$\Delta T_b = K_b \cdot m = K_b \cdot \frac{w_B \times 1000}{M_B \times w_A}$$

$$\boxed{M_B = \frac{K_b \times w_B \times 1000}{\Delta T_b \times w_A}}$$

Where:
- $w_B$ = mass of solute (g)
- $w_A$ = mass of solvent (g)
- $M_B$ = molar mass of solute (g/mol)

**Example:**
2.0 g of a substance dissolved in 100 g water. ΔTb = 0.102°C. Kb(water) = 0.512 °C·kg/mol.

$$M_B = \frac{0.512 \times 2.0 \times 1000}{0.102 \times 100} = \frac{1024}{10.2} = 100.4 \text{ g/mol}$$

### 9.2 From Osmotic Pressure

$$\pi = MRT = \frac{w_B RT}{M_B V}$$

$$\boxed{M_B = \frac{w_B RT}{\pi V}}$$

---

## Practice Questions

### PQ1. Calculate the vapour pressure of a solution of 20 g urea (M=60 g/mol) in 200 g water at 25°C. (P°water at 25°C = 23.76 mmHg)

<details>
<summary>Solution</summary>

Moles of urea: $n_B = 20/60 = 0.333$ mol  
Moles of water: $n_A = 200/18 = 11.11$ mol  

Mole fraction of solvent: $x_A = \frac{11.11}{11.11 + 0.333} = \frac{11.11}{11.443} = 0.9709$

By Raoult's law:
$$P_A = P_A^0 \times x_A = 23.76 \times 0.9709 = 23.07 \text{ mmHg}$$

Vapour pressure lowering:
$$\Delta P = 23.76 - 23.07 = 0.69 \text{ mmHg}$$

</details>

---

### PQ2. How many grams of ethylene glycol (M=62 g/mol) must be added to 1.0 kg water to lower the freezing point by 3.72°C? Kf(water) = 1.86 °C·kg/mol.

<details>
<summary>Solution</summary>

$$\Delta T_f = K_f \cdot m$$
$$3.72 = 1.86 \times m$$
$$m = 2.00 \text{ mol/kg}$$

Moles of ethylene glycol needed = 2.00 mol (per kg water = per 1 kg water)

Mass = 2.00 mol × 62 g/mol = **124 g**

</details>

---

### PQ3. Prove that ΔTf = Kf × m by deriving the cryoscopic constant from first principles.

<details>
<summary>Solution</summary>

**Derivation:**

At the freezing point of the solution, the chemical potential of solvent in solid = chemical potential in solution.

From thermodynamics:
$$\mu_A^{solid} = \mu_A^{liq} = \mu_A^{0,liq} + RT\ln x_A$$

At equilibrium:
$$\mu_A^{0,solid} = \mu_A^{0,liq} + RT\ln x_A$$

$$\ln x_A = \frac{\mu_A^{0,solid} - \mu_A^{0,liq}}{RT} = \frac{-\Delta G_{fus}}{RT}$$

Since $\Delta G_{fus} = \Delta H_{fus} - T\Delta S_{fus}$ and at $T_f^0$: $\Delta S_{fus} = \Delta H_{fus}/T_f^0$

$$\ln x_A = \frac{-\Delta H_{fus}}{R}\left(\frac{1}{T} - \frac{1}{T_f^0}\right) = \frac{\Delta H_{fus}}{R} \cdot \frac{\Delta T_f}{T_f^0 \cdot T}$$

For dilute solution: $\ln x_A \approx \ln(1 - x_B) \approx -x_B \approx -\frac{n_B}{n_A} = -\frac{m M_A}{1000}$

Therefore:
$$\frac{m M_A}{1000} = \frac{\Delta H_{fus} \cdot \Delta T_f}{R T_f^{0^2}}$$

$$\Delta T_f = \frac{R T_f^{0^2} M_A}{1000 \Delta H_{fus}} \cdot m = K_f \cdot m$$

∴ $\Delta T_f \propto m$ (QED) ✓

</details>

---

### PQ4. A solution of 0.5 g of a polymer in 100 mL water shows an osmotic pressure of 0.40 atm at 27°C. Calculate the molecular weight of the polymer.

<details>
<summary>Solution</summary>

$$\pi = \frac{w_B RT}{M_B V}$$

$$M_B = \frac{w_B RT}{\pi V} = \frac{0.5 \times 0.0821 \times 300}{0.40 \times 0.100}$$

$$M_B = \frac{12.315}{0.040} = 307.9 \approx 308 \text{ g/mol}$$

Note: Osmotic pressure is the preferred colligative property for high molecular weight substances (like polymers) because the effect is measurable even at very low concentrations.

</details>

---

### PQ5. Why is depression of freezing point preferred over elevation of boiling point for molecular weight determination of unstable compounds?

<details>
<summary>Solution</summary>

**Reasons:**

1. **Stability:** Many organic compounds decompose at elevated temperatures (near boiling point). Freezing point measurements are done at lower temperatures (e.g., 0°C for water), protecting unstable compounds.

2. **Larger Kf:** For most solvents, Kf > Kb. For water, Kf = 1.86 vs Kb = 0.512. Larger constant → more measurable temperature change per mole of solute → greater precision.

3. **Camphor advantage:** Camphor has Kf = 37.7 °C·kg/mol — extremely large — making even small amounts of solute measurable (Rast method).

4. **Accuracy:** Freezing point can be measured more precisely than boiling point because boiling is affected by atmospheric pressure variations.

</details>

---

## References

1. Atkins, P. & de Paula, J. (2014). *Atkins' Physical Chemistry* (10th ed.). Oxford University Press.
2. Levine, I.N. (2014). *Physical Chemistry* (6th ed.). McGraw-Hill.
3. Castellan, G.W. (1983). *Physical Chemistry* (3rd ed.). Addison-Wesley.
4. Chang, R. (2016). *Chemistry* (12th ed.). McGraw-Hill.
5. Van't Hoff, J.H. (1887). "The role of osmotic pressure in the analogy between solutions and gases." *Zeitschrift für physikalische Chemie*, 1, 481–508.
6. LibreTexts — Colligative Properties: https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Solutions_and_Mixtures/Colligative_Properties

---

*Last updated: 2025 | BUTEX — CHEM-102 | Level 1, Term 1*
