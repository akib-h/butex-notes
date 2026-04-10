# Heterogeneous Equilibrium
*Date: April 10, 2026*
*Course: Chemical Equilibrium | University-Level Chemistry*

---

## Table of Contents
1. [Definition and Introduction](#1-definition-and-introduction)
2. [Homogeneous vs. Heterogeneous Equilibrium](#2-homogeneous-vs-heterogeneous-equilibrium)
3. [Rule for Pure Solids and Pure Liquids](#3-rule-for-pure-solids-and-pure-liquids)
4. [Writing $K_c$ and $K_p$ for Heterogeneous Systems](#4-writing-k_c-and-k_p-for-heterogeneous-systems)
5. [Important Examples of Heterogeneous Equilibria](#5-important-examples-of-heterogeneous-equilibria)
   - 5.1 [Decomposition of Calcium Carbonate (CaCO₃)](#51-decomposition-of-calcium-carbonate)
   - 5.2 [Formation of Carbon Dioxide from Coke](#52-formation-of-carbon-dioxide-from-coke)
   - 5.3 [Dissolution of Sparingly Soluble Salts ($K_{sp}$)](#53-dissolution-of-sparingly-soluble-salts)
   - 5.4 [Water–Gas Reaction](#54-watergas-reaction)
   - 5.5 [Reduction of Metal Oxides](#55-reduction-of-metal-oxides)
   - 5.6 [Equilibrium Involving Pure Liquid Water](#56-equilibrium-involving-pure-liquid-water)
6. [Effect of Adding Pure Solid or Liquid on Equilibrium](#6-effect-of-adding-pure-solid-or-liquid-on-equilibrium)
7. [Relationship Between $K_c$ and $K_p$ in Heterogeneous Systems](#7-relationship-between-k_c-and-k_p-in-heterogeneous-systems)
8. [Worked Examples](#8-worked-examples)
9. [Summary](#9-summary)
10. [References](#10-references)

---

## 1. Definition and Introduction

A **heterogeneous equilibrium** is a chemical equilibrium in which the reactants and products are present in **two or more different phases** (e.g., solid–gas, solid–liquid, liquid–gas, or solid–liquid–gas).

In contrast to homogeneous equilibria (all species in the same phase), heterogeneous equilibria require special treatment of species that appear as **pure solids** or **pure liquids**, because their concentrations remain effectively constant throughout the reaction.

> **Real-world examples of heterogeneous equilibria:**
> - Decomposition of limestone (CaCO₃) in kilns
> - Dissolution of sparingly soluble ionic compounds
> - Reduction of metal oxides in blast furnaces
> - Formation of calcium oxide in cement manufacturing

---

## 2. Homogeneous vs. Heterogeneous Equilibrium

| Feature | Homogeneous Equilibrium | Heterogeneous Equilibrium |
|---------|------------------------|--------------------------|
| Phases | Single phase | Two or more phases |
| Example | H₂(g) + I₂(g) ⇌ 2HI(g) | CaCO₃(s) ⇌ CaO(s) + CO₂(g) |
| All species in $K$ expression | Yes | No — solids/pure liquids excluded |
| $K_c$ depends on volume? | Yes (concentrations change with V) | Partially — only gaseous/dissolved species |

---

## 3. Rule for Pure Solids and Pure Liquids

### The Fundamental Rule:

> **The concentrations of pure solids and pure liquids do not appear in the equilibrium constant expression because they are constant.**

### Thermodynamic Justification:

The thermodynamic activity of a substance is defined as:

$$a_X = \frac{\mu_X - \mu_X^\circ}{RT}$$

More practically:

$$a_X = \frac{[X]}{c^\circ} \quad \text{(for solutes)}$$

For a **pure solid** or **pure liquid**, the chemical potential is constant and independent of the amount present. Therefore:

$$a_{\text{pure solid}} = a_{\text{pure liquid}} = 1$$

This means they are incorporated into the equilibrium constant and do not appear explicitly.

### Important Distinction:

| Substance | Included in $K$? | Reason |
|-----------|-----------------|--------|
| Dissolved solute | ✅ Yes | Concentration varies |
| Gas | ✅ Yes | Concentration/pressure varies |
| Pure solid (e.g., CaCO₃, C) | ❌ No (= 1) | Constant density and molar mass |
| Pure liquid solvent (e.g., H₂O in aqueous) | ❌ No (= 1) | Effectively constant |
| Water as a reactant/product in dilute solutions | ❌ No | Concentration essentially constant |

---

## 4. Writing $K_c$ and $K_p$ for Heterogeneous Systems

### General Procedure:

1. Write the balanced equation
2. Identify the phase of each species
3. **Exclude** pure solids and pure liquids from the $K$ expression
4. Write $K$ using only gases (for $K_p$) or dissolved species + gases (for $K_c$)

### Illustrative Example:

$$\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g)$$

- CaCO₃ = pure solid → excluded
- CaO = pure solid → excluded
- CO₂ = gas → included

$$K_c = [\text{CO}_2] \qquad K_p = p_{\text{CO}_2}$$

> This means the equilibrium in a CaCO₃ decomposition system depends **only on the CO₂ pressure**, not on how much CaCO₃ or CaO is present (as long as both solids are present).

---

## 5. Important Examples of Heterogeneous Equilibria

### 5.1 Decomposition of Calcium Carbonate

$$\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g)$$

$$K_c = [\text{CO}_2] \qquad K_p = p_{\text{CO}_2}$$

**Industrial Context:** This reaction occurs in lime kilns at ~840°C. The CO₂ produced must be continuously removed to drive the reaction forward.

**Key data:**

| Temperature (°C) | $K_p$ (atm) |
|-----------------|------------|
| 500             | $\sim 10^{-5}$ |
| 700             | 0.015       |
| 840             | ~1.0        |
| 900             | ~2.0        |

At $K_p = 1.0$ atm (840°C), the partial pressure of CO₂ equals atmospheric pressure — this is the **decomposition temperature** (calcination point).

**Relationship:**

$$K_p = K_c \cdot RT \quad (\Delta n = +1)$$

---

### 5.2 Formation of Carbon Dioxide from Coke

#### Reaction 1: Complete Combustion

$$\text{C}(s) + \text{O}_2(g) \rightleftharpoons \text{CO}_2(g)$$

$$K_p = \frac{p_{\text{CO}_2}}{p_{\text{O}_2}} \qquad K_c = \frac{[\text{CO}_2]}{[\text{O}_2]}$$

$\Delta n = 1 - 1 = 0$, so $K_p = K_c$

#### Reaction 2: Boudouard Reaction (Partial Combustion)

$$\text{C}(s) + \text{CO}_2(g) \rightleftharpoons 2\text{CO}(g) \qquad \Delta H = +172 \text{ kJ/mol}$$

$$K_p = \frac{(p_{\text{CO}})^2}{p_{\text{CO}_2}} \qquad K_c = \frac{[\text{CO}]^2}{[\text{CO}_2]}$$

$\Delta n = 2 - 1 = +1$, so $K_p = K_c \cdot RT$

**Significance:** The Boudouard reaction is important in metallurgical processes and affects the efficiency of blast furnaces. At high temperatures ($>700°C$), CO dominates; at low temperatures, CO₂ dominates.

---

### 5.3 Dissolution of Sparingly Soluble Salts

For a sparingly soluble salt dissolving in water:

$$\text{AgCl}(s) \rightleftharpoons \text{Ag}^+(aq) + \text{Cl}^-(aq)$$

$$K_{sp} = [\text{Ag}^+][\text{Cl}^-]$$

(AgCl solid is excluded)

The **solubility product** $K_{sp}$ is a special case of the heterogeneous equilibrium constant.

#### More Examples:

| Salt | Dissolution Equation | $K_{sp}$ Expression | $K_{sp}$ at 25°C |
|------|---------------------|---------------------|------------------|
| AgCl | AgCl(s) ⇌ Ag⁺ + Cl⁻ | $[\text{Ag}^+][\text{Cl}^-]$ | $1.8 \times 10^{-10}$ |
| BaSO₄ | BaSO₄(s) ⇌ Ba²⁺ + SO₄²⁻ | $[\text{Ba}^{2+}][\text{SO}_4^{2-}]$ | $1.1 \times 10^{-10}$ |
| CaF₂ | CaF₂(s) ⇌ Ca²⁺ + 2F⁻ | $[\text{Ca}^{2+}][\text{F}^-]^2$ | $3.9 \times 10^{-11}$ |
| PbI₂ | PbI₂(s) ⇌ Pb²⁺ + 2I⁻ | $[\text{Pb}^{2+}][\text{I}^-]^2$ | $9.8 \times 10^{-9}$ |

#### Calculating Molar Solubility from $K_{sp}$:

For CaF₂: Let $s$ = molar solubility.

$$[\text{Ca}^{2+}] = s, \quad [\text{F}^-] = 2s$$

$$K_{sp} = (s)(2s)^2 = 4s^3 = 3.9 \times 10^{-11}$$

$$s = \left(\frac{3.9 \times 10^{-11}}{4}\right)^{1/3} = (9.75 \times 10^{-12})^{1/3} \approx \boxed{2.14 \times 10^{-4} \text{ mol/L}}$$

---

### 5.4 Water–Gas Reaction

$$\text{C}(s) + \text{H}_2\text{O}(g) \rightleftharpoons \text{CO}(g) + \text{H}_2(g) \qquad \Delta H = +131 \text{ kJ/mol}$$

$$K_c = \frac{[\text{CO}][\text{H}_2]}{[\text{H}_2\text{O}]} \qquad K_p = \frac{p_{\text{CO}} \cdot p_{\text{H}_2}}{p_{\text{H}_2\text{O}}}$$

C(s) is excluded from both expressions.

**Industrial Significance:** The water-gas reaction is used to produce **synthesis gas (syngas)** — a mixture of CO and H₂ used as a feedstock for:
- Methanol synthesis
- Fischer-Tropsch synthesis (liquid fuels)
- Ammonia production (combined with Haber process)

---

### 5.5 Reduction of Metal Oxides

#### Iron Ore Reduction in Blast Furnace:

$$\text{Fe}_2\text{O}_3(s) + 3\text{CO}(g) \rightleftharpoons 2\text{Fe}(s) + 3\text{CO}_2(g)$$

$$K_p = \frac{(p_{\text{CO}_2})^3}{(p_{\text{CO}})^3} = \left(\frac{p_{\text{CO}_2}}{p_{\text{CO}}}\right)^3$$

Fe₂O₃(s) and Fe(s) are both excluded.

#### Zinc Oxide Reduction:

$$\text{ZnO}(s) + \text{CO}(g) \rightleftharpoons \text{Zn}(g) + \text{CO}_2(g)$$

$$K_p = \frac{p_{\text{Zn}} \cdot p_{\text{CO}_2}}{p_{\text{CO}}}$$

(Zn is a gas at high temperatures; ZnO is solid.)

---

### 5.6 Equilibrium Involving Pure Liquid Water

#### Autoionization of Water:

$$\text{H}_2\text{O}(l) \rightleftharpoons \text{H}^+(aq) + \text{OH}^-(aq)$$

$$K_w = [\text{H}^+][\text{OH}^-] = 1.0 \times 10^{-14} \text{ at } 25°C$$

Pure liquid water is excluded.

#### Hydrolysis Reactions:

$$\text{CH}_3\text{COO}^-(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{CH}_3\text{COOH}(aq) + \text{OH}^-(aq)$$

$$K_b = \frac{[\text{CH}_3\text{COOH}][\text{OH}^-]}{[\text{CH}_3\text{COO}^-]}$$

Water excluded because it is the pure liquid solvent.

---

## 6. Effect of Adding Pure Solid or Liquid on Equilibrium

> **Adding more of a pure solid or pure liquid to a system at equilibrium does NOT shift the equilibrium.**

### Why?

Because the activity (and hence effective concentration) of a pure solid or liquid is always unity — it does not change with the amount added. The equilibrium constant expression is unchanged.

**Example:** Adding more CaCO₃ to the system:

$$\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g)$$

The $p_{\text{CO}_2}$ at equilibrium (= $K_p$) is **unchanged**. The reaction quotient $Q$ remains equal to $K$.

**Important caveat:** The solid must be present in **at least some amount**. If all of the solid is consumed, the heterogeneous equilibrium no longer applies.

---

## 7. Relationship Between $K_c$ and $K_p$ in Heterogeneous Systems

The relationship $K_p = K_c (RT)^{\Delta n}$ still applies, but $\Delta n$ is calculated **only from the gaseous species**:

$$\Delta n = \text{(moles of gaseous products)} - \text{(moles of gaseous reactants)}$$

**Example — CaCO₃ decomposition:**

$$\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g)$$

$\Delta n = 1$ (only CO₂ is a gas; solids do not count)

$$K_p = K_c \cdot RT$$

**Example — Boudouard reaction:**

$$\text{C}(s) + \text{CO}_2(g) \rightleftharpoons 2\text{CO}(g)$$

$\Delta n_{\text{gas}} = 2 - 1 = 1$

$$K_p = K_c \cdot RT$$

---

## 8. Worked Examples

### Example 8.1 — CaCO₃ Decomposition

At 900°C, $K_p = 1.04$ atm for CaCO₃ decomposition.

a) What is $K_c$?

$$K_c = \frac{K_p}{RT} = \frac{1.04}{(0.0821)(1173)} = \frac{1.04}{96.3} = \boxed{0.0108 \text{ mol/L}}$$

b) What partial pressure of CO₂ is needed to prevent decomposition at 900°C?

Since $K_p = p_{\text{CO}_2} = 1.04$ atm, any CO₂ pressure **above 1.04 atm** will suppress decomposition (push reaction left).

---

### Example 8.2 — Solubility Product Calculation

The molar solubility of Ag₂CrO₄ is $6.5 \times 10^{-5}$ mol/L at 25°C. Find $K_{sp}$.

$$\text{Ag}_2\text{CrO}_4(s) \rightleftharpoons 2\text{Ag}^+(aq) + \text{CrO}_4^{2-}(aq)$$

$$[\text{Ag}^+] = 2s = 2(6.5 \times 10^{-5}) = 1.30 \times 10^{-4} \text{ mol/L}$$

$$[\text{CrO}_4^{2-}] = s = 6.5 \times 10^{-5} \text{ mol/L}$$

$$K_{sp} = [\text{Ag}^+]^2[\text{CrO}_4^{2-}] = (1.30 \times 10^{-4})^2 (6.5 \times 10^{-5})$$

$$= (1.69 \times 10^{-8})(6.5 \times 10^{-5}) = \boxed{1.10 \times 10^{-12}}$$

---

### Example 8.3 — Water-Gas Reaction

At 1000°C, $K_p = 2.40$ for the water-gas reaction.

$$\text{C}(s) + \text{H}_2\text{O}(g) \rightleftharpoons \text{CO}(g) + \text{H}_2(g)$$

If the initial partial pressure of H₂O is 0.500 atm, find the equilibrium partial pressures.

Let $x$ = decrease in $p_{\text{H}_2\text{O}}$:

| Species | Initial (atm) | Change | Equilibrium (atm) |
|---------|--------------|--------|-------------------|
| H₂O(g)  | 0.500        | $-x$   | $0.500 - x$       |
| CO(g)   | 0            | $+x$   | $x$               |
| H₂(g)  | 0            | $+x$   | $x$               |

$$K_p = \frac{(x)(x)}{0.500 - x} = 2.40$$

$$x^2 = 2.40(0.500 - x) = 1.20 - 2.40x$$

$$x^2 + 2.40x - 1.20 = 0$$

$$x = \frac{-2.40 + \sqrt{(2.40)^2 + 4(1.20)}}{2} = \frac{-2.40 + \sqrt{5.76 + 4.80}}{2} = \frac{-2.40 + 3.25}{2} \approx \boxed{0.425 \text{ atm}}$$

$$p_{\text{CO}} = p_{\text{H}_2} = 0.425 \text{ atm}, \quad p_{\text{H}_2\text{O}} = 0.500 - 0.425 = 0.075 \text{ atm}$$

---

## 9. Summary

| Key Principle | Statement |
|---------------|-----------|
| Pure solid/liquid activity | Always = 1; excluded from $K$ expression |
| Effect of adding more solid | No effect on equilibrium position |
| $\Delta n$ for $K_p = K_c(RT)^{\Delta n}$ | Count gaseous species only |
| $K_{sp}$ | Special case of heterogeneous equilibrium for slightly soluble salts |
| Equilibrium depends on | Only the gaseous or dissolved species present |

---

## 10. References

1. Atkins, P. & de Paula, J. (2014). *Physical Chemistry* (10th ed.). Oxford University Press. Chapter 6.
2. Chang, R. & Goldsby, K. (2016). *Chemistry* (12th ed.). McGraw-Hill. Chapter 14 & 16.
3. Zumdahl, S.S. & Zumdahl, S.A. (2014). *Chemistry* (9th ed.). Cengage Learning. Chapter 14.
4. [ChemLibreTexts — Heterogeneous Equilibria](https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/15%3A_Chemical_Equilibrium/15.04%3A_Heterogeneous_Equilibria)
5. [ChemLibreTexts — Solubility Product ($K_{sp}$)](https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Equilibria/Solubilty/Solubility_Product_Constant_Ksp)
6. [Khan Academy — Heterogeneous Equilibria](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:equilibrium/x2eef969c74e0d802:equilibrium-constant/a/heterogeneous-equilibria)
7. NIST Chemistry WebBook. (2023). [https://webbook.nist.gov/](https://webbook.nist.gov/)
8. [Royal Society of Chemistry — Solubility Rules](https://www.rsc.org/learn-chemistry)

---

*File: `04_Heterogeneous_Equilibrium.md` | Topic: Chemical Equilibrium | Contributor: x86 Team*
