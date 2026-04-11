# 03 — Elevation of Boiling Point (Ebullioscopy)

> **Course:** Physical Chemistry — Dilute Solutions
> **Topic Area:** Colligative Properties
> **Last Updated:** April 10, 2026
> **Reference Notes:** Mahir, IPE-50 Hand Notes

---

## Table of Contents

1. [Boiling Point of a Liquid — Definition](#1-boiling-point-of-a-liquid--definition)
2. [Why the Boiling Point is Elevated](#2-why-the-boiling-point-is-elevated)
3. [Phase Diagram Explanation](#3-phase-diagram-explanation)
4. [Mathematical Derivation of ΔTb](#4-mathematical-derivation-of-δtb)
5. [Ebullioscopic Constant (Kb) — Molal Elevation Constant](#5-ebullioscopic-constant-kb--molal-elevation-constant)
6. [Determination of Molecular Mass from ΔTb](#6-determination-of-molecular-mass-from-δtb)
7. [Experimental Determination (Beckmann Method)](#7-experimental-determination-beckmann-method)
8. [Table of Kb Values for Common Solvents](#8-table-of-kb-values-for-common-solvents)
9. [Worked Examples](#9-worked-examples)
10. [Online References](#10-online-references)

---

## 1. Boiling Point of a Liquid — Definition

The **boiling point** of a liquid is defined as:

> **The temperature at which the vapour pressure of the liquid becomes equal to the atmospheric (external) pressure.**

For pure water at standard conditions:
- Normal boiling point = **100°C** (at 1 atm = 1.013 bar)
- VP of water at 100°C = 760 mmHg = 1 atm

**Key facts about boiling point:**

- It is a **purity indicator** — a pure substance has a sharp, well-defined boiling point.
- It **increases with external pressure** (pressure cookers work on this principle).
- It increases with **greater intermolecular forces** — e.g., water (100°C) boils much higher than ethane (−89°C) due to H-bonding.

---

## 2. Why the Boiling Point is Elevated

When a **non-volatile solute** is dissolved in a solvent:
1. The vapour pressure of the solution **decreases** (Raoult's Law) — because solute molecules at the surface block solvent evaporation.
2. At the normal boiling point of the pure solvent ($T_b^0$), the solution's VP is now **less than 1 atm** — it cannot yet boil.
3. To restore the VP to 1 atm (to achieve boiling), we must **increase the temperature**.
4. This extra temperature needed is the **elevation of boiling point**, $\Delta T_b$.

```
Vapour Pressure
     ^
1atm |-----•-----------•------
     |    /|           |
     |   / |           |
     |  /  |           |
     | /   |           |
     |/    |           |
     +-----+-----+-----+------→ Temperature
           Tb°   ΔTb   Tb
           
Tb°  = Boiling point of pure solvent
Tb   = Boiling point of solution
ΔTb  = Tb - Tb°  (elevation)
```

The solution's VP curve is **shifted downward** relative to pure solvent, and therefore crosses the 1 atm line at a **higher temperature**.

> **Core Relationship:** Elevation of BP is directly related to lowering of VP, which is a function of solute concentration. Hence, $\Delta T_b$ is a **colligative property**.

---

## 3. Phase Diagram Explanation

In the temperature–vapour pressure phase diagram:
- The VP curve of the **solution** lies **below** the VP curve of the **pure solvent** at every temperature.
- At the boiling point, both curves must equal 1 atm.
- Since the solution's curve is displaced downward, it meets 1 atm at a **higher temperature** $T_b > T_b^0$.

This is a direct consequence of Raoult's Law:

$$P_{\text{solution}} = P^0 \cdot x_1 < P^0 \quad \text{(since } x_1 < 1\text{)}$$

---

## 4. Mathematical Derivation of ΔTb

### Empirical Relationship (from experiment)

Experiments show that the elevation in boiling point is **directly proportional to the molality** of the solution:

$$\Delta T_b \propto m$$

$$\boxed{\Delta T_b = K_b \cdot m}$$

Where:
- $\Delta T_b = T_b - T_b^0$ = elevation of boiling point (K or °C)
- $K_b$ = molal boiling point elevation constant (ebullioscopic constant)
- $m$ = molality of solution (mol of solute per kg of solvent)

### Expanding Molality

Molality is defined as:

$$m = \frac{\text{moles of solute}}{\text{mass of solvent in kg}} = \frac{n_2}{W_1 \text{ (kg)}} = \frac{w_2 / M_2}{W_1}$$

So:

$$\Delta T_b = K_b \cdot \frac{w_2}{M_2 \cdot W_1}$$

### Thermodynamic Derivation of Kb

Using the **Clausius–Clapeyron equation** and the condition for boiling (chemical potential equality), it can be shown that:

$$K_b = \frac{R T_b^{0^2} M_1}{1000 \cdot \Delta H_{\text{vap}}}$$

Where:
- $R$ = universal gas constant = 8.314 J mol⁻¹ K⁻¹
- $T_b^0$ = boiling point of pure solvent (in Kelvin)
- $M_1$ = molar mass of solvent (g/mol)
- $\Delta H_{\text{vap}}$ = molar enthalpy of vaporisation of solvent (J/mol)
- Factor 1000 converts g to kg in molality

> **Important:** $K_b$ depends **only on the solvent**, not the solute. It is a solvent-specific constant.

---

## 5. Ebullioscopic Constant (Kb) — Molal Elevation Constant

**Definition:**

> The **ebullioscopic constant** $K_b$ is the elevation in boiling point produced when **1 mole of a non-volatile, non-electrolyte solute** is dissolved in **1 kg (1000 g) of the solvent**.

**Unit of $K_b$:** K·kg·mol⁻¹ (or °C·kg·mol⁻¹)

**Physical meaning:** A larger $K_b$ means the solvent's boiling point is more sensitive to the addition of solute.

---

## 6. Determination of Molecular Mass from ΔTb

From $\Delta T_b = K_b \cdot m$:

$$\Delta T_b = K_b \cdot \frac{w_2 / M_2}{W_1}$$

Rearranging for $M_2$:

$$\boxed{M_2 = \frac{K_b \cdot w_2}{W_1 \cdot \Delta T_b}}$$

Where:
- $w_2$ = mass of solute (g)
- $W_1$ = mass of solvent (kg)
- $\Delta T_b$ = observed elevation in BP (K or °C)
- $M_2$ = molar mass of solute (g/mol) ← **the unknown**

This is how **ebullioscopy** (boiling point method) is used to determine molecular masses of dissolved substances.

---

## 7. Experimental Determination (Beckmann Method)

### Apparatus

- **Beckmann thermometer** — a differential thermometer readable to ±0.001°C, designed to measure small temperature changes (not absolute temperatures).
- An inner tube containing solvent/solution.
- An outer jacket to prevent heat loss.
- A stirrer and a small heating source.

### Procedure

1. Fill the inner tube with a known mass $W_1$ of pure solvent.
2. Heat gently and note the boiling point $T_b^0$ of the pure solvent.
3. Add a known mass $w_2$ of solute and allow it to dissolve completely.
4. Heat the solution and note its boiling point $T_b$.
5. Calculate $\Delta T_b = T_b - T_b^0$.
6. Use the formula above to find $M_2$.

### Sources of Error

- **Superheating** of the liquid (can be reduced by stirring)
- Evaporation of solvent changes concentration
- Volatile solutes give incorrect results
- Decomposition of solute at elevated temperatures

---

## 8. Table of Kb Values for Common Solvents

| Solvent | Normal BP (°C) | $K_b$ (K·kg·mol⁻¹) |
|---------|---------------|---------------------|
| Water | 100.0 | **0.512** |
| Ethanol | 78.4 | 1.22 |
| Benzene | 80.1 | **2.53** |
| Chloroform | 61.2 | 3.63 |
| Carbon tetrachloride | 76.7 | 5.03 |
| Acetic acid | 118.1 | **3.07** |
| Cyclohexane | 80.7 | 2.79 |
| Acetone | 56.2 | 1.71 |
| Diethyl ether | 34.6 | 2.02 |

> 💡 Note that water has a **very small** $K_b$ (0.512). Benzene and acetic acid are preferred solvents for ebullioscopy because their larger $K_b$ gives a more measurable $\Delta T_b$.

---

## 9. Worked Examples

### Example 1 — Basic Boiling Point Elevation

**Q:** 2.0 g of a non-volatile solute (M = 40 g/mol) is dissolved in 100 g of water. What is the boiling point of the solution? ($K_b$ for water = 0.512 K·kg·mol⁻¹)

**Solution:**

$$n_{\text{solute}} = \frac{2.0}{40} = 0.05 \text{ mol}$$

$$m = \frac{0.05 \text{ mol}}{0.1 \text{ kg}} = 0.5 \text{ mol/kg}$$

$$\Delta T_b = K_b \cdot m = 0.512 \times 0.5 = 0.256 \text{ K}$$

$$T_b = 100 + 0.256 = \boxed{100.256°C}$$

---

### Example 2 — Finding Molecular Mass

**Q:** 3.0 g of an organic compound is dissolved in 100 g of benzene. The boiling point rises by 0.6°C. Calculate the molecular mass of the compound. ($K_b$ for benzene = 2.53 K·kg·mol⁻¹)

**Solution:**

$$M_2 = \frac{K_b \cdot w_2}{W_1 \cdot \Delta T_b} = \frac{2.53 \times 3.0}{0.1 \times 0.6} = \frac{7.59}{0.06} = \boxed{126.5 \text{ g/mol}}$$

---

### Example 3 — Electrolyte (Van't Hoff Factor)

**Q:** What is the boiling point elevation of 0.1 m MgCl₂ solution in water? ($K_b$ = 0.512 K·kg·mol⁻¹, assume complete dissociation)

**Solution:**

MgCl₂ → Mg²⁺ + 2Cl⁻, so $i = 3$

$$\Delta T_b = i \cdot K_b \cdot m = 3 \times 0.512 \times 0.1 = \boxed{0.154 \text{ K}}$$

---

### Example 4 — Reverse Problem (finding Kb)

**Q:** 1 mol of glucose dissolved in 1000 g of acetic acid raises the boiling point by 3.07°C. Confirm the value of $K_b$ for acetic acid.

**Solution:**

$$m = \frac{1 \text{ mol}}{1 \text{ kg}} = 1 \text{ mol/kg}$$

$$K_b = \frac{\Delta T_b}{m} = \frac{3.07}{1} = \boxed{3.07 \text{ K·kg·mol}^{-1}} ✓$$

---

### Example 5 — Verification via Thermodynamic Formula

**Q:** Verify $K_b$ for water using: $R$ = 8.314 J/mol·K, $T_b^0$ = 373 K, $M_1$ = 18 g/mol, $\Delta H_{\text{vap}}$ = 40,700 J/mol.

**Solution:**

$$K_b = \frac{R T_b^{0^2} M_1}{1000 \cdot \Delta H_{\text{vap}}} = \frac{8.314 \times (373)^2 \times 18}{1000 \times 40700}$$

$$= \frac{8.314 \times 139129 \times 18}{40{,}700{,}000} = \frac{20{,}810{,}000}{40{,}700{,}000} \approx \boxed{0.513 \text{ K·kg·mol}^{-1}}$$

This matches the experimental value of 0.512 K·kg·mol⁻¹ for water. ✓

---

## 10. Online References

1. **Wikipedia — Boiling Point Elevation:**
   [https://en.wikipedia.org/wiki/Boiling-point_elevation](https://en.wikipedia.org/wiki/Boiling-point_elevation)

2. **LibreTexts — Boiling Point Elevation & Freezing Point Depression:**
   [https://chem.libretexts.org/.../8.04:_Colligative_Properties-_Boiling_Point_Elevation_and_Freezing_Point_Depression](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/08:_Solutions/8.04:_Colligative_Properties-_Boiling_Point_Elevation_and_Freezing_Point_Depression)

3. **BYJU'S — Elevation of Boiling Point:**
   [https://byjus.com/chemistry/elevation-boiling-point/](https://byjus.com/chemistry/elevation-boiling-point/)

4. **Purdue University — Boiling Point Elevation:**
   [https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php](https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php)

5. **Khan Academy — Boiling Point Elevation:**
   [https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:intermolecular-forces-and-properties/x2eef969c74e0d802:properties-of-mixtures/a/boiling-point-elevation-and-freezing-point-depression](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:intermolecular-forces-and-properties/x2eef969c74e0d802:properties-of-mixtures/a/boiling-point-elevation-and-freezing-point-depression)

---

> **← Previous:** [02 — Lowering of Vapour Pressure](./02_Lowering_of_Vapour_Pressure.md)
> **Next →** [04 — Depression of Freezing Point](./04_Depression_of_Freezing_Point.md)

---

*Prepared for university-level Physical Chemistry. All equations follow IUPAC notation.*
