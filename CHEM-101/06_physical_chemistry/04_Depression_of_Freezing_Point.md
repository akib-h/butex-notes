# 04 — Depression of Freezing Point (Cryoscopy)

> **Course:** Physical Chemistry — Dilute Solutions
> **Topic Area:** Colligative Properties
> **Last Updated:** April 10, 2026
> **Reference Notes:** Mahir, IPE-50 Hand Notes

---

## Table of Contents

1. [Freezing Point — Definition](#1-freezing-point--definition)
2. [Why the Freezing Point is Depressed](#2-why-the-freezing-point-is-depressed)
3. [Phase Diagram Explanation](#3-phase-diagram-explanation)
4. [Mathematical Derivation of ΔTf](#4-mathematical-derivation-of-δtf)
5. [Cryoscopic Constant (Kf) — Molal Depression Constant](#5-cryoscopic-constant-kf--molal-depression-constant)
6. [Determination of Molecular Mass from ΔTf](#6-determination-of-molecular-mass-from-δtf)
7. [Experimental Determination (Beckmann / Rast Method)](#7-experimental-determination-beckmann--rast-method)
8. [Table of Kf Values for Common Solvents](#8-table-of-kf-values-for-common-solvents)
9. [Real-World Applications](#9-real-world-applications)
10. [Worked Examples](#10-worked-examples)
11. [Online References](#11-online-references)

---

## 1. Freezing Point — Definition

The **freezing point** (or melting point) of a pure substance is:

> **The temperature at which the solid and liquid phases of the substance have the same vapour pressure**, and exist in dynamic equilibrium with each other.

At the freezing point:
- Vapour pressure of solid solvent = Vapour pressure of liquid solvent
- Chemical potential of solid = Chemical potential of liquid
- $\mu_{\text{solid}} = \mu_{\text{liquid}}$

For pure water: Normal freezing point = **0°C** (273.15 K) at 1 atm.

---

## 2. Why the Freezing Point is Depressed

When a **non-volatile solute** is dissolved in a solvent:

1. The **vapour pressure** of the liquid solution decreases (Raoult's Law).
2. The vapour pressure of the **solid pure solvent** is unaffected (solute doesn't enter the solid lattice — for ideal dilute solutions).
3. The **solid VP curve** and **solution VP curve** now intersect at a **lower temperature** than where pure solid VP meets pure liquid VP.
4. This new intersection point (where equilibrium is re-established) is the **depressed freezing point** $T_f$.

$$\Delta T_f = T_f^0 - T_f > 0$$

Where:
- $T_f^0$ = freezing point of pure solvent
- $T_f$ = freezing point of solution

> **Note:** The depression is always **positive** because $T_f < T_f^0$ — the solution freezes at a *lower* temperature.

```
Vapour Pressure
      ^
      |  \  Solid(pure)
      |   \
      |    \-------  Liquid(solution)  [below pure liquid VP]
      |     \     .../
      |      \ .../  Liquid(pure)
      |       X'  X
      |       |   |
      +-------+---+---→ Temperature
              Tf  Tf°

X  = Freezing point of pure solvent (solid VP = liquid VP)
X' = Freezing point of solution (solid VP = solution VP) ← LOWER
```

---

## 3. Phase Diagram Explanation

In the **Temperature vs Vapour Pressure** diagram:

- The **solid VP curve** is steep and represents VP of the **pure solid solvent** — unaffected by solute.
- The **liquid VP curve** of the solution is displaced **downward** compared to pure liquid.
- The new intersection of solid VP with the solution's liquid VP occurs at a **lower temperature** $T_f < T_f^0$.

From a **chemical potential** perspective:
- Dissolving solute lowers the chemical potential of the solvent in the liquid phase.
- To restore equilibrium with the solid (whose chemical potential is unchanged), the temperature must drop.
- Hence, the solution remains liquid at temperatures where pure solvent would already be solid.

This is also why **liquid solutions below their solvent's normal freezing point are stable** — adding solute stabilises the liquid phase.

---

## 4. Mathematical Derivation of ΔTf

### Empirical Relationship

Experiments (e.g., by Blagden in 1788, later formalised by Raoult in 1882) show:

$$\Delta T_f \propto m$$

$$\boxed{\Delta T_f = K_f \cdot m}$$

Where:
- $\Delta T_f = T_f^0 - T_f$ = depression in freezing point (K or °C)
- $K_f$ = molal freezing point depression constant (cryoscopic constant)
- $m$ = molality (mol of solute per kg of solvent)

### Derivation from Thermodynamics

At the freezing point of the solution, the chemical potential of the solid solvent equals that of the solvent in solution:

$$\mu_{\text{solid}}(T_f) = \mu_{\text{liquid}}^*(T_f) + RT_f \ln x_1$$

Through manipulation using the Gibbs-Helmholtz equation and the approximation $\ln x_1 \approx -x_2 \approx -\dfrac{n_2}{n_1}$ for dilute solutions, one arrives at:

$$\Delta T_f = \frac{R (T_f^0)^2 M_1}{1000 \cdot \Delta H_{\text{fus}}} \cdot m$$

Therefore:

$$\boxed{K_f = \frac{R (T_f^0)^2 M_1}{1000 \cdot \Delta H_{\text{fus}}}}$$

Where:
- $R$ = 8.314 J mol⁻¹ K⁻¹
- $T_f^0$ = freezing point of pure solvent (K)
- $M_1$ = molar mass of solvent (g/mol)
- $\Delta H_{\text{fus}}$ = molar enthalpy of fusion of solvent (J/mol)
- Factor 1000 converts g to kg for molality

**Key observation:** $K_f$ (like $K_b$) depends **only on the solvent**, not the solute.

---

## 5. Cryoscopic Constant (Kf) — Molal Depression Constant

**Definition:**

> The **cryoscopic constant** $K_f$ is the depression in freezing point when **1 mole** of a non-volatile, non-electrolyte solute is dissolved in **1 kg (1000 g)** of the solvent.

**Unit:** K·kg·mol⁻¹ (equivalently, °C·kg·mol⁻¹)

**Comparison with $K_b$:**

| Property | $K_b$ (Water) | $K_f$ (Water) |
|----------|--------------|--------------|
| Value | 0.512 | **1.86** |

$K_f$ for water is about **3.6× larger** than $K_b$. This makes **cryoscopy** (freezing point method) more sensitive and more popular for molecular mass determination than ebullioscopy.

---

## 6. Determination of Molecular Mass from ΔTf

From $\Delta T_f = K_f \cdot m$:

$$\Delta T_f = K_f \cdot \frac{w_2 / M_2}{W_1}$$

Solving for $M_2$:

$$\boxed{M_2 = \frac{K_f \cdot w_2}{\Delta T_f \cdot W_1}}$$

Where:
- $w_2$ = mass of solute (g)
- $W_1$ = mass of solvent (kg)
- $\Delta T_f$ = observed depression in freezing point (K)
- $M_2$ = molar mass of unknown solute (g/mol)

This is the fundamental equation of **cryoscopy** (from Greek *kryos* = frost, *scopein* = to look at).

---

## 7. Experimental Determination (Beckmann / Rast Method)

### A. Beckmann Cryoscopic Method

**Apparatus:**
- **Beckmann thermometer** (reads to ±0.001°C; suitable for small ΔT)
- Freezing tube containing solvent
- Outer cooling bath (ice + salt)
- Stirrer

**Procedure:**
1. Determine the freezing point $T_f^0$ of pure solvent precisely.
2. Add a known mass $w_2$ of solute. Stir until dissolved.
3. Allow the solution to cool with stirring. Note the new freezing point $T_f$.
4. Calculate $\Delta T_f = T_f^0 - T_f$.
5. Apply formula to get $M_2$.

**Challenge:** Solutions often **supercool** (cool below $T_f$ without freezing), then suddenly crystallise and jump back to $T_f$. The highest temperature reached after supercooling is taken as the true $T_f$.

### B. Rast's Camphor Method

Camphor ($K_f$ = 39.7 K·kg·mol⁻¹!) is used as the solvent.

**Advantages:**
- Enormous $K_f$ gives large, easily measurable $\Delta T_f$ even with tiny samples.
- Only a few milligrams of solute required.
- Temperature can be measured with a regular thermometer (not Beckmann).

**Procedure:**
1. Melt camphor and solute together, allow to solidify.
2. Determine MP of pure camphor and of the mixture.
3. Calculate $M_2$ from the depression.

---

## 8. Table of Kf Values for Common Solvents

| Solvent | Normal FP (°C) | $K_f$ (K·kg·mol⁻¹) |
|---------|---------------|---------------------|
| **Water** | 0.0 | **1.86** |
| Benzene | 5.5 | **5.12** |
| Acetic acid | 16.6 | 3.90 |
| Cyclohexane | 6.5 | 20.2 |
| **Camphor** | 179.5 | **39.7** |
| Naphthalene | 80.2 | 6.94 |
| Phenol | 40.5 | 7.27 |
| p-Dichlorobenzene | 53.1 | 7.10 |
| Nitrobenzene | 5.7 | 6.90 |
| Carbon tetrachloride | −22.9 | 32.0 |

> 💡 **Camphor's enormous $K_f$** = 39.7 makes it the gold standard solvent for Rast's method — a tiny amount of solute gives a large, precisely measurable temperature depression.

---

## 9. Real-World Applications

### 1. Antifreeze in Car Radiators
Ethylene glycol (C₂H₆O₂, M = 62 g/mol) is added to water to prevent the radiator fluid from freezing in winter. A 50:50 mixture lowers the freezing point to around −37°C.

### 2. De-icing of Roads
NaCl and CaCl₂ are spread on icy roads. They dissolve in thin water films, lowering the freezing point. CaCl₂ (i = 3) is more effective per mole than NaCl (i = 2) and also releases heat on dissolution.

### 3. Ice Cream Making
Salt is packed around the ice cream container. Salt + ice creates a **brine** whose freezing point is lower than 0°C, rapidly freezing the cream inside.

### 4. Determination of Molar Mass
Blood plasma proteins, polymers, and complex organic molecules with high molecular weights are characterised by their freezing point depression.

### 5. Seawater Freezing
Seawater (≈3.5% NaCl) freezes at approximately −1.9°C instead of 0°C due to dissolved salts.

---

## 10. Worked Examples

### Example 1 — Basic Calculation

**Q:** 1.8 g of glucose (M = 180 g/mol) is dissolved in 100 g of water. Find the freezing point of the solution. ($K_f$ = 1.86 K·kg·mol⁻¹)

**Solution:**

$$n_{\text{glucose}} = \frac{1.8}{180} = 0.01 \text{ mol}$$

$$m = \frac{0.01}{0.1} = 0.1 \text{ mol/kg}$$

$$\Delta T_f = K_f \cdot m = 1.86 \times 0.1 = 0.186 \text{ K}$$

$$T_f = 0 - 0.186 = \boxed{-0.186°C}$$

---

### Example 2 — Molecular Mass Determination

**Q:** 5.0 g of a non-electrolyte solute dissolved in 250 g of benzene lowers the freezing point of benzene by 0.40°C. Calculate the molar mass of the solute. ($K_f$ for benzene = 5.12 K·kg·mol⁻¹)

**Solution:**

$$M_2 = \frac{K_f \cdot w_2}{\Delta T_f \cdot W_1} = \frac{5.12 \times 5.0}{0.40 \times 0.250} = \frac{25.6}{0.10} = \boxed{256 \text{ g/mol}}$$

---

### Example 3 — Electrolyte Solution

**Q:** What is the freezing point of a 0.2 m NaCl solution? ($K_f$ = 1.86 K·kg·mol⁻¹, assume $i$ = 1.87 from experiment)

**Solution:**

$$\Delta T_f = i \cdot K_f \cdot m = 1.87 \times 1.86 \times 0.2 = 0.696 \text{ K}$$

$$T_f = 0 - 0.696 = \boxed{-0.696°C}$$

*(Note: $i$ = 1.87 instead of theoretical 2.0, because of partial ion association at 0.2 m)*

---

### Example 4 — Using Camphor (Rast's Method)

**Q:** 0.200 g of an organic compound dissolved in 10.0 g of camphor (Kf = 39.7) lowers the MP of camphor by 2.0°C. Find the molecular mass.

**Solution:**

$$M_2 = \frac{K_f \cdot w_2}{\Delta T_f \cdot W_1} = \frac{39.7 \times 0.200}{2.0 \times 0.0100} = \frac{7.94}{0.020} = \boxed{397 \text{ g/mol}}$$

---

### Example 5 — Thermodynamic Verification of Kf for Water

**Q:** Verify $K_f$ for water using thermodynamic data: $T_f^0$ = 273 K, $M_1$ = 18 g/mol, $\Delta H_{\text{fus}}$ = 6020 J/mol.

**Solution:**

$$K_f = \frac{R (T_f^0)^2 M_1}{1000 \cdot \Delta H_{\text{fus}}} = \frac{8.314 \times (273)^2 \times 18}{1000 \times 6020}$$

$$= \frac{8.314 \times 74529 \times 18}{6{,}020{,}000} = \frac{11{,}143{,}000}{6{,}020{,}000} \approx \boxed{1.85 \text{ K·kg·mol}^{-1}}$$

Very close to experimental value of 1.86. ✓

---

## 11. Online References

1. **Wikipedia — Freezing Point Depression:**
   [https://en.wikipedia.org/wiki/Freezing-point_depression](https://en.wikipedia.org/wiki/Freezing-point_depression)

2. **LibreTexts — BP Elevation and FP Depression:**
   [https://chem.libretexts.org/.../8.04:_Colligative_Properties-_Boiling_Point_Elevation_and_Freezing_Point_Depression](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/08:_Solutions/8.04:_Colligative_Properties-_Boiling_Point_Elevation_and_Freezing_Point_Depression)

3. **Khan Academy — Freezing Point Depression:**
   [https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:intermolecular-forces-and-properties/x2eef969c74e0d802:properties-of-mixtures/a/boiling-point-elevation-and-freezing-point-depression](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:intermolecular-forces-and-properties/x2eef969c74e0d802:properties-of-mixtures/a/boiling-point-elevation-and-freezing-point-depression)

4. **BYJU'S — Freezing Point Depression:**
   [https://byjus.com/chemistry/depression-freezing-point/](https://byjus.com/chemistry/depression-freezing-point/)

5. **AskIITians — FP Depression and Molecular Mass:**
   [https://www.askiitians.com/iit-jee-solutions/colligative-properties-of-dilute-solutions/](https://www.askiitians.com/iit-jee-solutions/colligative-properties-of-dilute-solutions/)

6. **FSU Chemistry — Cryoscopy:**
   [https://www.chem.fsu.edu/chemlab/chm1046course/colligative.html](https://www.chem.fsu.edu/chemlab/chm1046course/colligative.html)

---

> **← Previous:** [03 — Elevation of Boiling Point](./03_Elevation_of_Boiling_Point.md)
> **Next →** [05 — Osmosis and Osmotic Pressure](./05_Osmosis_and_Osmotic_Pressure.md)

---

*Prepared for university-level Physical Chemistry. All equations follow IUPAC notation.*
