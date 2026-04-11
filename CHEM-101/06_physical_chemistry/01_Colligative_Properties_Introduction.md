# 01 — Colligative Properties of Dilute Solutions

> **Course:** Physical Chemistry — Dilute Solutions
> **Topic Area:** Colligative Properties
> **Last Updated:** April 10, 2026
> **Reference Notes:** Mahir, IPE-50 Hand Notes

---

## Table of Contents

1. [What is a Dilute Solution?](#1-what-is-a-dilute-solution)
2. [Definition of Colligative Properties](#2-definition-of-colligative-properties)
3. [Etymology and Historical Background](#3-etymology-and-historical-background)
4. [Types of Colligative Properties](#4-types-of-colligative-properties)
5. [Key Assumptions for Ideal Dilute Solutions](#5-key-assumptions-for-ideal-dilute-solutions)
6. [Why Colligative Properties Depend on Particle Count, Not Identity](#6-why-colligative-properties-depend-on-particle-count-not-identity)
7. [Van't Hoff Factor (i) — Electrolytes & Dissociation](#7-vant-hoff-factor-i--electrolytes--dissociation)
8. [Interconnection Among Colligative Properties](#8-interconnection-among-colligative-properties)
9. [Applications at a Glance](#9-applications-at-a-glance)
10. [Worked Examples](#10-worked-examples)
11. [Summary Table](#11-summary-table)
12. [Online References](#12-online-references)

---

## 1. What is a Dilute Solution?

A **dilute solution** is one in which the amount of solute is very small compared to the amount of solvent. Mathematically, in a dilute solution:

$$n_{\text{solute}} \ll N_{\text{solvent}}$$

Where:
- $n$ = moles of solute
- $N$ = moles of solvent

**Key Characteristics of Dilute Solutions:**

- Behave as **ideal solutions** — heat and volume changes on mixing are negligible.
- Obey **Raoult's Law** accurately.
- The solute is assumed **non-volatile** (does not contribute to vapour pressure).
- The solid solvent that separates on freezing is assumed to be **pure** (solute does not co-crystallise).

> 💡 **Analogy:** Think of a pinch of salt in a full swimming pool of water. The salt particles are so few relative to water molecules that they barely disturb the water's structure — yet they still measurably change certain physical properties!

---

## 2. Definition of Colligative Properties

> **Colligative properties** are those physical properties of a dilute solution that depend **only on the number (concentration) of solute particles** present in a given amount of solvent, and **not on the chemical nature or identity** of the solute.

In other words:
- 1 mole of glucose and 1 mole of urea dissolved separately in the same mass of water produce **identical** changes in vapour pressure, boiling point, freezing point, and osmotic pressure.
- This is because both produce **the same number of particles** (1 mole of molecules each).

The word **"colligative"** literally means **"tied together"** — all four colligative properties are intimately connected to one another, as they all originate from the same root cause: **the lowering of solvent chemical potential** caused by dissolving a solute.

---

## 3. Etymology and Historical Background

| Year | Scientist | Contribution |
|------|-----------|--------------|
| 1886 | **François-Marie Raoult** (French) | Established the relationship between vapour pressure lowering and mole fraction (Raoult's Law) |
| 1887 | **Jacobus van't Hoff** (Dutch, Nobel 1901) | Formulated the osmotic pressure equation analogous to ideal gas law |
| 1891 | **Wilhelm Ostwald** (German) | Coined the term **"colligative"** from Latin *co-ligare* (to bind together) |

Ostwald classified solute properties into three categories:
1. **Colligative** — depend only on solute concentration
2. **Additive** — sums of properties of constituent particles (e.g., mass)
3. **Constitutional** — depend on molecular structure/arrangement

---

## 4. Types of Colligative Properties

There are **four** colligative properties of dilute solutions:

```
Colligative Properties
│
├── (i)  Lowering of Vapour Pressure          [Raoult's Law]
├── (ii) Elevation of Boiling Point           [Ebullioscopy]
├── (iii) Depression of Freezing Point        [Cryoscopy]
└── (iv) Osmotic Pressure                     [Van't Hoff Equation]
```

| Property | Symbol | Formula | Unit |
|----------|--------|---------|------|
| Relative Lowering of VP | $\Delta P / P^0$ | $= x_2$ (mole fraction of solute) | dimensionless |
| Boiling Point Elevation | $\Delta T_b$ | $= K_b \cdot m$ | K or °C |
| Freezing Point Depression | $\Delta T_f$ | $= K_f \cdot m$ | K or °C |
| Osmotic Pressure | $\pi$ | $= CRT$ | Pa or atm |

---

## 5. Key Assumptions for Ideal Dilute Solutions

For the colligative property equations to hold strictly, we assume:

1. The **solute is non-volatile** — it does not exert any significant vapour pressure.
2. The **solution is dilute** — solute–solvent interactions are similar to solvent–solvent interactions.
3. The **solute does not dissociate or associate** (unless Van't Hoff factor $i$ is applied).
4. The **solid that separates on freezing is the pure solvent** (solute is excluded from the crystal lattice).
5. The system follows **Raoult's Law** for the solvent component.

---

## 6. Why Colligative Properties Depend on Particle Count, Not Identity

The molecular-level explanation lies in **entropy and chemical potential**:

When a solute dissolves in a solvent:
- Solute molecules occupy positions at the **surface** of the liquid, displacing solvent molecules.
- Fewer solvent molecules can escape into the vapour phase → **vapour pressure decreases**.
- The entropy of the liquid phase increases (mixing entropy), reducing the tendency of solvent to escape.
- Since the chemical potential of the solvent in solution is **lower** than pure solvent:
  - The liquid is stabilised above its normal boiling point → **boiling point rises**.
  - The liquid is stabilised below its normal freezing point → **freezing point falls**.
  - A pressure must be applied to prevent flow through a semipermeable membrane → **osmotic pressure**.

> The key insight: all of these effects scale with how many solute particles are present, not what those particles are. One molecule of glucose "blocks" the surface just as effectively as one molecule of urea.

---

## 7. Van't Hoff Factor (i) — Electrolytes & Dissociation

For **electrolytes** (ionic compounds), one formula unit dissolves into **multiple ions**, multiplying the effective particle count.

$$i = \frac{\text{actual number of particles in solution}}{\text{number of formula units dissolved}}$$

| Solute | Dissociation | Theoretical $i$ |
|--------|-------------|-----------------|
| Glucose (non-electrolyte) | None | 1 |
| NaCl | Na⁺ + Cl⁻ | 2 |
| CaCl₂ | Ca²⁺ + 2Cl⁻ | 3 |
| K₂SO₄ | 2K⁺ + SO₄²⁻ | 3 |
| Al₂(SO₄)₃ | 2Al³⁺ + 3SO₄²⁻ | 5 |

**Modified colligative equations with Van't Hoff factor:**

$$\Delta T_b = i \cdot K_b \cdot m$$

$$\Delta T_f = i \cdot K_f \cdot m$$

$$\pi = i \cdot CRT$$

> ⚠️ In reality, $i$ is slightly less than the theoretical value for strong electrolytes due to **ion-pairing** (ion association) at finite concentrations. Only at infinite dilution does $i$ reach the theoretical value.

---

## 8. Interconnection Among Colligative Properties

All four properties share a **common root** — the lowering of vapour pressure of the solvent. This can be visualised as follows:

```
Dissolution of non-volatile solute
            │
            ▼
  Lowering of Vapour Pressure (ΔP)
     /              \            \
    ▼                ▼            ▼
Boiling Point    Freezing Point  Osmotic
Elevation (ΔTb)  Depression (ΔTf) Pressure (π)
```

Because they are all proportional to the mole fraction (or molality) of the solute, measuring **any one** of them allows you to calculate the **molecular mass** of the solute — this is one of the most important practical applications.

---

## 9. Applications at a Glance

| Application | Colligative Property Used |
|-------------|--------------------------|
| Antifreeze in car radiators (ethylene glycol) | Freezing Point Depression |
| De-icing roads with NaCl/CaCl₂ | Freezing Point Depression |
| Sugar in ice cream prevents crystallisation | Freezing Point Depression |
| Determining molar mass of unknown compounds | All four properties |
| Reverse osmosis for water purification | Osmotic Pressure |
| IV drips must be isotonic with blood | Osmotic Pressure |
| Pressure cookers raise boiling point | Boiling Point Elevation concept |
| Pasta cooks faster in salted water (slight effect) | Boiling Point Elevation |

---

## 10. Worked Examples

### Example 1 — Identifying a Colligative Property

**Q:** 0.5 mol of NaCl is dissolved in 1 kg of water. How many moles of particles are effectively present?

**Solution:**

NaCl → Na⁺ + Cl⁻, so $i = 2$

Effective moles of particles = $i \times n = 2 \times 0.5 = 1.0$ mol

Thus, 0.5 mol NaCl has the same colligative effect as 1.0 mol of a non-electrolyte (e.g., glucose).

---

### Example 2 — Van't Hoff Factor from Experimental Data

**Q:** The observed freezing point depression of a 0.1 m CaCl₂ solution is 0.51°C. $K_f$ for water = 1.86 K·kg·mol⁻¹. Calculate the Van't Hoff factor.

**Solution:**

$$\Delta T_f = i \cdot K_f \cdot m$$

$$0.51 = i \times 1.86 \times 0.1$$

$$i = \frac{0.51}{0.186} \approx 2.74$$

The theoretical value for CaCl₂ is 3. The observed $i = 2.74$ suggests **partial ion association** at this concentration.

---

## 11. Summary Table

| Property | Cause | Formula | Measurement Technique |
|----------|-------|---------|----------------------|
| VP Lowering | Solute occupies surface, reduces solvent escape | $\frac{P^0-P}{P^0} = x_2$ | Manometry / Ostwald–Walker method |
| BP Elevation | VP lowered, higher T needed to reach 1 atm | $\Delta T_b = K_b m$ | Ebullioscopy (Beckmann thermometer) |
| FP Depression | VP curve crosses solid VP curve at lower T | $\Delta T_f = K_f m$ | Cryoscopy (Beckmann thermometer) |
| Osmotic Pressure | Chemical potential gradient across membrane | $\pi V = nRT$ | Osmometer (Berkeley-Hartley) |

---

## 12. Online References

1. **Wikipedia — Colligative Properties:**
   [https://en.wikipedia.org/wiki/Colligative_properties](https://en.wikipedia.org/wiki/Colligative_properties)

2. **LibreTexts Chemistry — Colligative Properties (Raoult's Law):**
   [https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/08:_Solutions/8.03:_Colligative_Properties-_Raoult's_Law](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/08:_Solutions/8.03:_Colligative_Properties-_Raoult's_Law)

3. **Purdue University — Colligative Properties:**
   [https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php](https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php)

4. **BYJU'S — Colligative Properties:**
   [https://byjus.com/jee/colligative-properties/](https://byjus.com/jee/colligative-properties/)

5. **FSU Chemistry — Colligative Properties Detailed:**
   [https://www.chem.fsu.edu/chemlab/chm1046course/colligative.html](https://www.chem.fsu.edu/chemlab/chm1046course/colligative.html)

6. **DeVoe Thermodynamics (LibreTexts) — Advanced Treatment:**
   [https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/DeVoes_Thermodynamics_and_Chemistry/12:_Equilibrium_Conditions_in_Multicomponent_Systems/12.04:_Colligative_Properties_of_a_Dilute_Solution](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/DeVoes_Thermodynamics_and_Chemistry/12:_Equilibrium_Conditions_in_Multicomponent_Systems/12.04:_Colligative_Properties_of_a_Dilute_Solution)

---

> **Next Topic →** [02 — Lowering of Vapour Pressure (Raoult's Law)](./02_Lowering_of_Vapour_Pressure.md)

---

*Prepared for university-level Physical Chemistry. All equations follow IUPAC notation.*
