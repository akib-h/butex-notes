# 02 — Lowering of Vapour Pressure (Raoult's Law)

> **Course:** Physical Chemistry — Dilute Solutions
> **Topic Area:** Colligative Properties
> **Last Updated:** April 10, 2026
> **Reference Notes:** Mahir, IPE-50 Hand Notes

---

## Table of Contents

1. [Vapour Pressure — A Quick Recap](#1-vapour-pressure--a-quick-recap)
2. [Why Vapour Pressure is Lowered by a Solute](#2-why-vapour-pressure-is-lowered-by-a-solute)
3. [Key Definitions](#3-key-definitions)
4. [Raoult's Law — Statement and Formula](#4-raoults-law--statement-and-formula)
5. [Mathematical Proof / Derivation](#5-mathematical-proof--derivation)
6. [Raoult's Law for Miscible Binary Liquid Mixtures](#6-raoults-law-for-miscible-binary-liquid-mixtures)
7. [Determination of Molecular Mass from VP Lowering](#7-determination-of-molecular-mass-from-vp-lowering)
8. [Ideal vs Non-Ideal Solutions & Deviations from Raoult's Law](#8-ideal-vs-non-ideal-solutions--deviations-from-raoults-law)
9. [Limitations of Raoult's Law](#9-limitations-of-raoults-law)
10. [Experimental Determination of VP Lowering](#10-experimental-determination-of-vp-lowering)
11. [Worked Examples](#11-worked-examples)
12. [Online References](#12-online-references)

---

## 1. Vapour Pressure — A Quick Recap

When a liquid is placed in a **closed container**, molecules continuously evaporate from the surface into the gas phase. Simultaneously, gas-phase molecules condense back into the liquid. At **dynamic equilibrium**, the rate of evaporation equals the rate of condensation.

The pressure exerted by this equilibrium vapour is called the **vapour pressure** (or equilibrium vapour pressure) of the liquid.

**Factors affecting vapour pressure of a pure liquid:**

| Factor | Effect |
|--------|--------|
| Temperature ↑ | Vapour pressure ↑ (Clausius-Clapeyron) |
| Intermolecular forces ↑ | Vapour pressure ↓ |
| Pressure of surroundings | Little direct effect on VP |
| Addition of non-volatile solute | Vapour pressure ↓ ← **our focus** |

> A liquid **boils** when its vapour pressure equals the external (atmospheric) pressure. Pure water at 100°C has VP = 1 atm = 1.013 bar.

---

## 2. Why Vapour Pressure is Lowered by a Solute

When a **non-volatile solute** is dissolved in a volatile solvent:

1. Solute molecules occupy positions **at the surface** of the liquid alongside solvent molecules.
2. The fraction of surface covered by **solvent molecules decreases**.
3. Fewer solvent molecules can escape into the vapour phase per unit time.
4. Equilibrium is re-established at a **lower vapour pressure**.

```
Pure Solvent surface:          Solution surface:
[S][S][S][S][S][S]             [S][U][S][S][U][S]
 ↑  ↑  ↑  ↑  ↑  ↑              ↑     ↑  ↑     ↑
 Evaporation high              Evaporation reduced

S = Solvent molecule
U = Solute (non-volatile) molecule
```

**Thermodynamic explanation:** Dissolving a solute increases the **entropy of the liquid phase** (mixing entropy). Since the liquid is already more disordered, molecules have less thermodynamic driving force to escape into the gas phase → lower vapour pressure.

---

## 3. Key Definitions

| Symbol | Meaning |
|--------|---------|
| $P^0$ (or $P_1^0$) | Vapour pressure of **pure solvent** |
| $P$ (or $P_s$) | Vapour pressure of the **solution** |
| $P^0 - P$ | **Lowering of vapour pressure** |
| $\dfrac{P^0 - P}{P^0}$ | **Relative lowering of vapour pressure** (dimensionless) |
| $x_2$ | **Mole fraction of solute** |
| $x_1$ | **Mole fraction of solvent** |
| $n$ | Moles of solute |
| $N$ | Moles of solvent |

---

## 4. Raoult's Law — Statement and Formula

In **1886**, the French chemist **François-Marie Raoult** studied vapour pressure of solutions experimentally using various solvents (water, benzene, ether) and established the following law:

> ### Raoult's Law (for non-volatile solute)
> **"The relative lowering of vapour pressure of a dilute solution is equal to the mole fraction of the solute."**

$$\boxed{\frac{P^0 - P}{P^0} = x_2 = \frac{n}{n + N}}$$

Equivalently:

$$P = P^0 \cdot x_1 = P^0 \cdot \frac{N}{n + N}$$

Where:
- $x_1 = \dfrac{N}{N+n}$ = mole fraction of solvent
- $x_2 = \dfrac{n}{N+n}$ = mole fraction of solute
- Note that $x_1 + x_2 = 1$

**Interpretation:** The vapour pressure of a solution is proportional to the mole fraction of the **solvent** in the solution. The solute reduces the "effective concentration" of the solvent at the surface.

---

## 5. Mathematical Proof / Derivation

### Setup

Let:
- $n$ = moles of non-volatile solute
- $N$ = moles of volatile solvent
- $P^0$ = vapour pressure of pure solvent
- $P$ = vapour pressure of solution

**Mole fractions:**

$$x_1 = \frac{N}{N+n} \quad \text{(solvent)}, \qquad x_2 = \frac{n}{N+n} \quad \text{(solute)}$$

Note: $x_1 + x_2 = 1$

### Step-by-Step Derivation

From Raoult's Law:

$$P = P^0 \cdot x_1 \tag{1}$$

Dividing both sides by $P^0$:

$$\frac{P}{P^0} = x_1 \tag{2}$$

Subtracting both sides from 1:

$$1 - \frac{P}{P^0} = 1 - x_1 \tag{3}$$

$$\frac{P^0 - P}{P^0} = x_2 \tag{4}$$

Since $1 - x_1 = x_2$, this gives us:

$$\boxed{\frac{P^0 - P}{P^0} = x_2 = \frac{n}{n + N}}$$

### Approximation for Dilute Solutions

In a dilute solution, $n \ll N$, so:

$$x_2 = \frac{n}{n + N} \approx \frac{n}{N}$$

Therefore:

$$\frac{P^0 - P}{P^0} \approx \frac{n}{N} \tag{5}$$

Substituting $n = \dfrac{w_2}{M_2}$ and $N = \dfrac{w_1}{M_1}$:

$$\frac{P^0 - P}{P^0} = \frac{w_2 / M_2}{w_1 / M_1} = \frac{w_2 M_1}{w_1 M_2} \tag{6}$$

Where:
- $w_1$ = mass of solvent, $M_1$ = molar mass of solvent
- $w_2$ = mass of solute, $M_2$ = molar mass of solute (unknown)

This is how Raoult's Law enables **molecular mass determination** of unknown solutes.

---

## 6. Raoult's Law for Miscible Binary Liquid Mixtures

When **both components are volatile** (e.g., benzene + toluene), Raoult's Law applies to **each component**:

$$P_A = P_A^0 \cdot x_A \quad \text{and} \quad P_B = P_B^0 \cdot x_B$$

**Total vapour pressure** of the solution:

$$P_{\text{total}} = P_A + P_B = P_A^0 x_A + P_B^0 x_B$$

Since $x_A + x_B = 1 \Rightarrow x_B = 1 - x_A$:

$$P_{\text{total}} = P_A^0 x_A + P_B^0(1 - x_A) = P_B^0 + (P_A^0 - P_B^0) x_A$$

This shows $P_{\text{total}}$ varies **linearly** with $x_A$ — the hallmark of an ideal (Raoult's Law) solution.

> **Example:** Benzene ($P^0 = 120$ mmHg at 40°C) + Toluene ($P^0 = 60$ mmHg at 40°C):
> At $x_{\text{benzene}} = 0.5$: $P = 120(0.5) + 60(0.5) = 60 + 30 = 90$ mmHg ✓

---

## 7. Determination of Molecular Mass from VP Lowering

From equation (6):

$$\frac{P^0 - P}{P^0} = \frac{w_2 M_1}{w_1 M_2}$$

Rearranging for $M_2$ (molar mass of solute):

$$\boxed{M_2 = \frac{w_2 M_1 P^0}{w_1 (P^0 - P)}}$$

This is the standard formula used in the **Ostwald-Walker** and related experimental methods to find the molecular weight of dissolved substances.

---

## 8. Ideal vs Non-Ideal Solutions & Deviations from Raoult's Law

### Ideal Solutions

Follow Raoult's Law perfectly. Conditions:
- Solute–solvent interactions ≈ solvent–solvent interactions
- $\Delta H_{\text{mix}} = 0$, $\Delta V_{\text{mix}} = 0$
- Examples: Benzene–Toluene, n-Hexane–n-Heptane

### Non-Ideal Solutions — Positive Deviation

- Actual VP > Raoult's Law prediction
- Solute–solvent interactions **weaker** than pure component interactions
- Molecules "prefer" to escape → higher VP
- Example: Ethanol–Water, Acetone–Carbon disulfide

$$P_{\text{actual}} > P_A^0 x_A + P_B^0 x_B$$

### Non-Ideal Solutions — Negative Deviation

- Actual VP < Raoult's Law prediction
- Solute–solvent interactions **stronger** than pure component interactions
- Molecules "prefer" to stay in solution → lower VP
- Example: Acetone–Chloroform (H-bond formation), HCl–Water

$$P_{\text{actual}} < P_A^0 x_A + P_B^0 x_B$$

```
VP
 ^
 |    ... Positive Deviation
 |   /  (above Raoult's line)
 |  /------- Raoult's Law (ideal)
 | /_______ Negative Deviation
 |/         (below Raoult's line)
 +-----------> x_A (mole fraction)
 0            1
```

> **Henry's Law:** At very low concentrations, the solute obeys Henry's Law ($P_{\text{solute}} = K_H x_{\text{solute}}$), while the solvent obeys Raoult's Law. These two laws are complementary limits.

---

## 9. Limitations of Raoult's Law

1. Valid only for **dilute solutions** (low solute concentrations).
2. Assumes the solute is **non-volatile** (when applied to colligative properties).
3. Assumes **ideal behaviour** — fails for solutions with strong solute–solvent interactions.
4. Does not account for **ionic dissociation** without the Van't Hoff correction.
5. Fails at **high concentrations** where solute–solvent interactions become significant.

---

## 10. Experimental Determination of VP Lowering

### Method 1: Ostwald–Walker Dynamic Method (Gas Saturation Method)

**Principle:** A stream of dry gas is bubbled through:
1. A bulb containing the **solution** → gas picks up solvent vapour proportional to $P$
2. A bulb containing the **pure solvent** → gas picks up additional solvent proportional to $(P^0 - P)$
3. A desiccant (CaCl₂/H₂SO₄) absorbs all vapour → mass gained proportional to $P^0$

**Measurement:**

$$\frac{P^0 - P}{P^0} = \frac{\text{mass gain in pure solvent bulb}}{\text{total mass gain (solution + solvent bulbs)}}$$

### Method 2: Barometric (Static) Method

Simply measure the VP of pure solvent and solution manometrically at the same temperature.

### Method 3: Dew-Point Method (Walker's modification)

Compare dew points of vapour over solution and pure solvent.

---

## 11. Worked Examples

### Example 1 — Basic Raoult's Law

**Q:** 90 g of glucose (M = 180 g/mol) is dissolved in 900 g of water. The vapour pressure of pure water at 25°C is 23.8 mmHg. Calculate the vapour pressure of the solution.

**Solution:**

$$n_{\text{glucose}} = \frac{90}{180} = 0.5 \text{ mol}, \quad N_{\text{water}} = \frac{900}{18} = 50 \text{ mol}$$

$$x_{\text{water}} = \frac{N}{N+n} = \frac{50}{50 + 0.5} = \frac{50}{50.5} = 0.9901$$

$$P = P^0 \cdot x_{\text{water}} = 23.8 \times 0.9901 = \boxed{23.57 \text{ mmHg}}$$

Lowering: $\Delta P = 23.8 - 23.57 = 0.23$ mmHg

---

### Example 2 — Finding Molecular Mass

**Q:** 6.0 g of a non-volatile solute is dissolved in 100 g of water. The vapour pressure of pure water at 40°C is 55.3 mmHg and the VP of the solution is 54.9 mmHg. Find the molecular mass of the solute.

**Solution:**

$$\frac{P^0 - P}{P^0} = \frac{55.3 - 54.9}{55.3} = \frac{0.4}{55.3} = 7.23 \times 10^{-3}$$

Using: $\dfrac{P^0 - P}{P^0} = \dfrac{w_2 M_1}{w_1 M_2}$

$$7.23 \times 10^{-3} = \frac{6.0 \times 18}{100 \times M_2}$$

$$M_2 = \frac{6.0 \times 18}{100 \times 7.23 \times 10^{-3}} = \frac{108}{0.723} = \boxed{149.4 \text{ g/mol}}$$

---

### Example 3 — Binary Volatile Mixture

**Q:** At 25°C, $P^0_{\text{benzene}} = 75$ mmHg and $P^0_{\text{toluene}} = 25$ mmHg. A mixture contains 2 mol benzene and 3 mol toluene. Find the total VP and composition of the vapour.

**Solution:**

$$x_{\text{benz}} = \frac{2}{2+3} = 0.4, \quad x_{\text{tol}} = 0.6$$

$$P_{\text{benz}} = 75 \times 0.4 = 30 \text{ mmHg}$$
$$P_{\text{tol}} = 25 \times 0.6 = 15 \text{ mmHg}$$
$$P_{\text{total}} = 30 + 15 = \boxed{45 \text{ mmHg}}$$

Vapour composition:

$$y_{\text{benz}} = \frac{P_{\text{benz}}}{P_{\text{total}}} = \frac{30}{45} = 0.667 \quad (66.7\% \text{ benzene in vapour})$$

The vapour is enriched in the **more volatile** component (benzene) compared to the liquid phase (40%).

---

### Example 4 — Electrolyte Solution (Van't Hoff Factor)

**Q:** Calculate the VP of a solution of NaCl (5.85 g, M = 58.5 g/mol) in 1000 g of water at 25°C. $P^0_{\text{water}} = 23.8$ mmHg. Assume complete dissociation.

**Solution:**

$$n_{\text{NaCl}} = \frac{5.85}{58.5} = 0.1 \text{ mol}$$

NaCl → Na⁺ + Cl⁻, so effective moles = $0.1 \times 2 = 0.2$ mol (i = 2)

$$N_{\text{water}} = \frac{1000}{18} = 55.56 \text{ mol}$$

$$x_{\text{water}} = \frac{55.56}{55.56 + 0.2} = \frac{55.56}{55.76} = 0.99641$$

$$P = 23.8 \times 0.99641 = \boxed{23.72 \text{ mmHg}}$$

---

## 12. Online References

1. **Wikipedia — Raoult's Law:**
   [https://en.wikipedia.org/wiki/Raoult%27s_law](https://en.wikipedia.org/wiki/Raoult%27s_law)

2. **LibreTexts — Changes in Vapor Pressure, Raoult's Law:**
   [https://chem.libretexts.org/.../Changes_In_Vapor_Pressure_Raoult's_Law](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Solutions_and_Mixtures/Ideal_Solutions/Changes_In_Vapor_Pressure_Raoult's_Law)

3. **LibreTexts — Colligative Properties, Raoult's Law (Chem1):**
   [https://chem.libretexts.org/...8.03:_Colligative_Properties-_Raoult's_Law](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/08:_Solutions/8.03:_Colligative_Properties-_Raoult's_Law)

4. **AskIITians — Detailed Derivation:**
   [https://www.askiitians.com/iit-jee-solutions/colligative-properties-of-dilute-solutions/](https://www.askiitians.com/iit-jee-solutions/colligative-properties-of-dilute-solutions/)

5. **BYJU'S — Raoult's Law & VP Lowering:**
   [https://byjus.com/jee/colligative-properties/](https://byjus.com/jee/colligative-properties/)

6. **Purdue University — Vapor Pressure:**
   [https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php](https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php)

---

> **← Previous:** [01 — Introduction to Colligative Properties](./01_Colligative_Properties_Introduction.md)
> **Next →** [03 — Elevation of Boiling Point](./03_Elevation_of_Boiling_Point.md)

---

*Prepared for university-level Physical Chemistry. All equations follow IUPAC notation.*
