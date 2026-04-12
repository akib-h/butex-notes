# 06 — Colligative Properties of Solutions
### Chemistry-I (CHEM 101 / AS 109) | Bangladesh University of Textiles
> **Syllabus coverage:** Raoult's law · Boiling point elevation · Freezing point depression · Osmosis & osmotic pressure · Van't Hoff factor · Molecular weight determination

---

## Table of Contents
1. [Introduction to Colligative Properties](#1-introduction-to-colligative-properties)
2. [Vapor Pressure Lowering — Raoult's Law](#2-vapor-pressure-lowering--raoults-law)
3. [Boiling Point Elevation](#3-boiling-point-elevation)
4. [Freezing Point Depression](#4-freezing-point-depression)
5. [Osmosis and Osmotic Pressure](#5-osmosis-and-osmotic-pressure)
6. [Van't Hoff Factor (i)](#6-vant-hoff-factor-i)
7. [Molecular Weight Determination](#7-molecular-weight-determination)
8. [Exam Questions & Model Answers](#8-exam-questions--model-answers)
9. [Visual Aids](#9-visual-aids)
10. [Practice Questions](#10-practice-questions)
11. [References](#11-references)

---

## 1. Introduction to Colligative Properties

**Colligative properties** depend only on the **number** of solute particles (molecules, ions) in a solution, **not** on the nature (identity) of the solute.

### The Four Colligative Properties
1. **Vapor pressure lowering** (ΔP)
2. **Boiling point elevation** (ΔTb)
3. **Freezing point depression** (ΔTf)
4. **Osmotic pressure** (π)

### Why Only Number Matters?
- A non-volatile solute occupies surface positions in the liquid.
- This reduces the fraction of solvent molecules at the surface that can escape into vapor.
- The effect depends only on HOW MANY solute particles are present, not what they are.

---

## 2. Vapor Pressure Lowering — Raoult's Law

### Raoult's Law (1882)
The vapor pressure of the solvent above a solution equals the mole fraction of the solvent multiplied by the vapor pressure of the pure solvent:

$$P_{solution} = \chi_{solvent} \times P^*_{solvent}$$

Where:
- $P_{solution}$ = vapor pressure of solution
- $\chi_{solvent}$ = mole fraction of solvent
- $P^*_{solvent}$ = vapor pressure of pure solvent

### Vapor Pressure Lowering

$$\Delta P = P^*_{solvent} - P_{solution} = \chi_{solute} \times P^*_{solvent}$$

$$\frac{\Delta P}{P^*_{solvent}} = \chi_{solute} = \frac{\text{Relative lowering of vapor pressure}}{}$$

### Why Vapor Pressure of Solution < Pure Solvent?

1. **Surface dilution:** Solute particles occupy some surface sites → fewer solvent molecules at surface → fewer can escape to vapor phase.
2. **Intermolecular attraction:** Solute-solvent interactions (solvation) hold solvent molecules more tightly.
3. The presence of solute lowers the **escaping tendency** (chemical potential) of solvent molecules.

```
Pure solvent surface:         Solution surface:
🔵🔵🔵🔵🔵🔵🔵              🔵🔴🔵🔵🔴🔵🔵
🔵🔵🔵🔵🔵🔵🔵              🔵🔵🔴🔵🔵🔵🔴
↑↑↑↑↑↑↑ Many escape         ↑ ↑  ↑ ↑  ↑ Fewer escape
Higher vapor pressure         Lower vapor pressure
🔵 = solvent   🔴 = solute
```

### State Raoult's Law for Lowering of Vapor Pressure — Molecular Weight Determination

$$\frac{\Delta P}{P^*} = \frac{n_{solute}}{n_{solute} + n_{solvent}} \approx \frac{n_{solute}}{n_{solvent}} \text{ (dilute solution)}$$

$$\frac{\Delta P}{P^*} = \frac{w/M}{W/M_s}$$

Where:
- w = mass of solute, M = molar mass of solute
- W = mass of solvent, Mₛ = molar mass of solvent

Rearranging for M (molar mass of unknown solute):

$$M = \frac{w \times M_s \times P^*}{W \times \Delta P}$$

---

## 3. Boiling Point Elevation

### Definition
A solution **boils at a higher temperature** than the pure solvent because the vapor pressure of the solution is lower — a higher temperature is needed to make the solution's vapor pressure equal to atmospheric pressure.

### Equation

$$\Delta T_b = T_{b,solution} - T_{b,solvent} = K_b \times m$$

Where:
- **ΔTb** = boiling point elevation (°C or K)
- **Kb** = ebullioscopic (boiling point elevation) constant of solvent (°C·kg/mol)
- **m** = molality of solution (mol solute / kg solvent)

### Common Kb Values

| Solvent | Normal Boiling Point (°C) | Kb (°C·kg/mol) |
|---------|---------------------------|-----------------|
| Water | 100 | 0.512 |
| Benzene | 80.1 | 2.53 |
| Ether | 34.5 | 2.02 |
| Chloroform | 61.2 | 3.63 |

### Derivation of ΔTb Equation

From Raoult's law, the boiling point elevation is derived using the Clausius-Clapeyron equation:

$$\Delta T_b = \frac{R \cdot T_b^{*2}}{\Delta H_{vap}} \times \frac{n_{solute}}{n_{solvent}} = K_b \times m$$

Where Kb = R·Tb²·Msolvent / (1000·ΔHvap).

### Illustrate How a Nonvolatile Solute Rises the Boiling Point

When a **nonvolatile solute** is dissolved:
- The vapor pressure curve of the solution is shifted **downward** by ΔP at all temperatures.
- The boiling point = temperature at which vapor pressure = 1 atm.
- For the solution, the vapor pressure curve intersects 1 atm at a **higher temperature** → elevated boiling point.

---

## 4. Freezing Point Depression

### Definition
A solution **freezes at a lower temperature** than the pure solvent. The solute molecules disrupt crystal formation.

### Equation

$$\Delta T_f = T_{f,solvent} - T_{f,solution} = K_f \times m$$

Where:
- **ΔTf** = freezing point depression (°C or K)
- **Kf** = cryoscopic (freezing point depression) constant of solvent (°C·kg/mol)
- **m** = molality of solution (mol solute / kg solvent)

### Common Kf Values

| Solvent | Normal Freezing Point (°C) | Kf (°C·kg/mol) |
|---------|---------------------------|-----------------|
| Water | 0 | 1.86 |
| Benzene | 5.5 | 5.12 |
| Acetic acid | 16.6 | 3.90 |
| Camphor | 178.4 | 37.7 |

### Vapor Pressure vs. Temperature Diagram (Freezing Point Depression)

```
Vapor Pressure
↑
|  ────────────────── Pure solvent (liquid)
|                \
|  ─ ─ ─ ─ ─ ─ ─ \ ─ ─  Solution (liquid)  ← shifted down
|              \ ↘  \
|   Pure        ↘    \
|   solid        ↘    \
|         (solid)\  ↘  \
|                 ↘  ↘  \
+─────────────────────────→ Temperature
       ↑    ↑
    T_f(sol) T_f(pure)   ← depression: T_f(pure) > T_f(solution)
       ←───→
        ΔTf
```

### Establishment of Freezing Point Depression and Molecular Weight

$$M_{solute} = \frac{K_f \times w_{solute} \times 1000}{\Delta T_f \times W_{solvent}(g)}$$

---

## 5. Osmosis and Osmotic Pressure

### Definitions

**Osmosis:** The spontaneous flow of solvent molecules from a region of **lower solute concentration** (higher solvent concentration) to **higher solute concentration** (lower solvent concentration) through a **semipermeable membrane**.

**Osmotic Pressure (π):** The pressure that must be applied to the solution side to **stop osmosis**.

### Van't Hoff Equation for Osmotic Pressure

$$\pi = MRT$$

Where:
- **π** = osmotic pressure (atm)
- **M** = molar concentration of solute (mol/L)
- **R** = gas constant = 0.0821 L·atm/mol·K
- **T** = absolute temperature (K)

This resembles the **ideal gas law** (PV = nRT → P = nRT/V = MRT).

### Isotonic Solutions

Two solutions with the **same osmotic pressure** at the same temperature are **isotonic**.

$$\pi_1 = \pi_2 \Rightarrow M_1 R T = M_2 R T \Rightarrow M_1 = M_2$$

→ Isotonic solutions at the same temperature have **equimolar concentrations**.

### Osmotic Pressure of Blood — Worked Problem *(2019 Q5d)*

**Given:** π(blood) = 7.65 atm at 37°C = 310 K; solute = glucose (M = 180 g/mol)

$$\pi = MRT$$
$$7.65 = M \times 0.0821 \times 310$$
$$M = \frac{7.65}{25.45} = 0.3006 \text{ mol/L}$$

**Moles of glucose per liter:** 0.3006 mol

**Grams of glucose per liter:**
$$m = 0.3006 \times 180 = \boxed{54.1 \text{ g/L}}$$

→ About 54.1 g of glucose per liter is needed for an intravenous glucose solution isotonic with blood.

---

## 6. Van't Hoff Factor (i)

### Definition
The **Van't Hoff factor (i)** accounts for the effect of solute dissociation or association on colligative properties:

$$i = \frac{\text{actual number of particles in solution}}{\text{number of formula units dissolved}}$$

### Modified Colligative Property Equations

$$\Delta T_b = i \times K_b \times m$$
$$\Delta T_f = i \times K_f \times m$$
$$\pi = i \times M \times R \times T$$

### Van't Hoff Factor Values

| Electrolyte | Expected i | Actual i (dilute) |
|-------------|-----------|-------------------|
| Glucose (non-electrolyte) | 1 | ~1 |
| NaCl (→ Na⁺ + Cl⁻) | 2 | ~1.9 |
| BaCl₂ (→ Ba²⁺ + 2Cl⁻) | 3 | ~2.7 |
| NaNO₃ (→ Na⁺ + NO₃⁻) | 2 | ~1.9 |
| K₂SO₃ (→ 2K⁺ + SO₃²⁻) | 3 | ~2.6 |

### Maximum Freezing Point Depression — Worked Problem *(2019 Q5c)*

**Four aqueous solutions:**

| Solution | Concentration (M) | Solute | i | Effective particles |
|----------|------------------|--------|---|---------------------|
| A | 2.0 | BaCl₂ | 3 | 2.0 × 3 = **6.0** |
| B | 2.0 | NaNO₃ | 2 | 2.0 × 2 = **4.0** |
| C | 1.0 | C₆H₁₂O₆ | 1 | 1.0 × 1 = **1.0** |
| D | 1.0 | K₂SO₃ | 3 | 1.0 × 3 = **3.0** |

**ΔTf = i × Kf × m** → maximum freezing point depression = **highest i × m product**.

**Ranking by effective particles:** A (6.0) > B (4.0) > D (3.0) > C (1.0)

**Solution A (BaCl₂, 2.0 M) has the maximum freezing point depression.** ✓

---

## 7. Molecular Weight Determination

### From Boiling Point Elevation

$$M = \frac{K_b \times w \times 1000}{\Delta T_b \times W}$$

### Worked Example *(2012 Q5c)*

A solution of 0.30g of substance X in 25.0g of ether shows boiling point elevation of 0.22K. Kb(ether) = 2.22 K·kg/mol.

$$M = \frac{K_b \times w_{solute}(g) \times 1000}{\Delta T_b \times W_{solvent}(g)} = \frac{2.22 \times 0.30 \times 1000}{0.22 \times 25.0}$$

$$M = \frac{666}{5.5} = \boxed{121 \text{ g/mol}}$$

### From Freezing Point Depression

$$M = \frac{K_f \times w \times 1000}{\Delta T_f \times W}$$

### Worked Example — NaCl in Water *(2017 Q5d)*

**Find boiling point and freezing point of a solution of 98.0g NaCl in 383g water.**

- Moles NaCl = 98.0 / 58.44 = 1.677 mol
- Molality = 1.677 / 0.383 = 4.378 mol/kg
- Van't Hoff factor i for NaCl = 2 (→ Na⁺ + Cl⁻)

**Boiling point elevation:**
$$\Delta T_b = i \times K_b \times m = 2 \times 0.512 \times 4.378 = 4.49°C$$
$$T_b = 100 + 4.49 = \boxed{104.49°C}$$

**Freezing point depression:**
$$\Delta T_f = i \times K_f \times m = 2 \times 1.86 \times 4.378 = 16.29°C$$
$$T_f = 0 - 16.29 = \boxed{-16.29°C}$$

---

## 8. Exam Questions & Model Answers

### Q1. Illustrate how a nonvolatile solute rises the boiling point of a solvent. *(2019 Q5a — 2 marks)*

*(See Section 3 — full explanation with vapor pressure diagram)*

The solute lowers the solution's vapor pressure (Raoult's law). Since boiling occurs when vapor pressure = atmospheric pressure (1 atm), the solution requires more thermal energy (higher temperature) to achieve this condition. Therefore the **boiling point is elevated**.

---

### Q2. Draw and explain vapor pressure vs. temperature graph showing freezing point depression. *(2019 Q5b — 3 marks)*

*(See Section 4 — VP vs T diagram)*

The vapor pressure curve of the solution lies below that of the pure solvent. The intersection with the solid's vapor pressure curve (where solid and liquid are in equilibrium) occurs at a **lower temperature** → freezing point is depressed.

---

### Q3. Define Van't Hoff factor. Which solution has max freezing point depression? *(2019 Q5c — 3.5 marks)*

*(See Section 6 — full table and answer: Solution A = BaCl₂, 2.0M)*

---

### Q4. Osmotic pressure of blood is 7.65 atm at 37°C. How much glucose per liter? *(2019 Q5d — 3.5 marks)*

*(See Section 5 — worked problem: **54.1 g/L**)*

---

### Q5. Why is the vapor pressure of solution lower than that of pure solvent? *(2018 Q5a — 3.5 marks)*

*(See Section 2 — explanation with surface diagram)*

The solute molecules dilute the solvent molecules at the surface. Fewer solvent molecules per unit area → fewer can escape to the vapor phase → lower vapor pressure (Raoult's Law).

---

### Q6. Which observations reflect colligative properties and how? *(2018 Q5b)*

| Observation | Colligative Property | Explanation |
|-------------|---------------------|-------------|
| (I) 0.5 m NaBr **higher VP** than 0.5 m BaCl₂ | VP lowering | BaCl₂ (i=3) gives more particles than NaBr (i=2) → BaCl₂ lowers VP more. Statement says NaBr has **higher** VP → ✓ CORRECT |
| (II) 0.5 m NaOH freezes at **lower T** than pure water | FP depression | True — any solute lowers FP. ✓ CORRECT |
| (III) Pure water freezes at **higher T** than pure methanol | Not colligative | This is a pure substance property — pure water (0°C) vs. pure methanol (−98°C). ✓ CORRECT (but not strictly a colligative property — pure substance comparison) |

Observations (I) and (II) clearly reflect colligative properties.

---

### Q7. Establish the Vant Hoff equation for osmotic pressure. *(2018 Q5c — 3.5 marks)*

**Derivation:**

From the equality of chemical potentials at osmotic equilibrium:

$$\mu_{solvent}^{pure}(P) = \mu_{solvent}^{solution}(P + \pi)$$

Using thermodynamics:
$$\mu^* + RT \ln(\chi_{solvent}) + V_m \pi = \mu^*$$

For dilute solution: $\ln(\chi_{solvent}) \approx -\chi_{solute} \approx -n_{solute}/n_{solvent}$

$$V_m \pi = RT \frac{n_{solute}}{n_{solvent}}$$

$$\pi = \frac{n_{solute} R T}{V} = MRT$$

$$\boxed{\pi = MRT}$$

This resembles the ideal gas equation PV = nRT, where the solute behaves like an ideal gas exerting pressure = osmotic pressure.

---

### Q8. Find boiling and freezing point of NaCl solution (98.0g in 383g water). *(2017 Q5d)*

*(See Section 7 — worked example: Tb = 104.49°C, Tf = −16.29°C)*

---

### Q9. Establish freezing point depression and molecular weight relationship. *(2015 Q5a; 2012 Q8a)*

$$\Delta T_f = K_f \times m = K_f \times \frac{n_{solute}}{W_{solvent}(kg)} = K_f \times \frac{w_{solute}/M}{W_{solvent}/1000}$$

Rearranging for M:

$$\boxed{M = \frac{K_f \times w_{solute} \times 1000}{\Delta T_f \times W_{solvent}(g)}}$$

This allows determination of molar mass of an unknown solute from freezing point depression data.

---

## 9. Visual Aids

### Vapor Pressure vs. Temperature Diagram
![Colligative properties VP diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Vapor_pressure_diagram.png/500px-Vapor_pressure_diagram.png)
*Source: Wikimedia Commons — Vapor pressure lowering, boiling point elevation, and freezing point depression shown together*

### Osmosis Diagram
![Osmosis semipermeable membrane](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Osmotic_pressure_on_blood_cells_diagram.svg/400px-Osmotic_pressure_on_blood_cells_diagram.svg.png)
*Source: Wikimedia Commons — Osmosis across a semipermeable membrane*

### Boiling Point Elevation Diagram
```
Vapor pressure (atm)
1.0 ──────────────────────────────────
   |        Pure solvent curve ↗
   |     Solution curve ↗ (lower)
   |  
   +──────────────────────────────────→ Temperature
              ↑        ↑
           Tb(pure)  Tb(solution)
              ←───────→
                 ΔTb (elevation)
```

### Freezing Point Depression — Summary

```
Property     Formula           Application
──────────────────────────────────────────────────
ΔTf = Kf·m   Tf(solution) = Tf(solvent) - ΔTf
              Used: antifreeze, road salt de-icing

ΔTb = Kb·m   Tb(solution) = Tb(solvent) + ΔTb
              Used: cooking (salted water), industrial processes

π = MRT      Used: IV fluids, dialysis, reverse osmosis
```

---

## 10. Practice Questions

**Q1.** Calculate the freezing point of a solution containing 25.0g of glucose (M = 180) dissolved in 250g of water (Kf = 1.86°C·kg/mol).

<details>
<summary>✅ Solution</summary>

Moles glucose = 25.0 / 180 = 0.1389 mol

Molality = 0.1389 / 0.250 = 0.556 mol/kg

ΔTf = Kf × m = 1.86 × 0.556 = **1.03°C**

Freezing point = 0 − 1.03 = **−1.03°C**

</details>

---

**Q2.** A solution of 0.500g of a compound in 30.0g of benzene (Kf = 5.12°C·kg/mol) depresses the freezing point by 0.342°C. Find the molar mass.

<details>
<summary>✅ Solution</summary>

$$M = \frac{K_f \times w \times 1000}{\Delta T_f \times W} = \frac{5.12 \times 0.500 \times 1000}{0.342 \times 30.0} = \frac{2560}{10.26} = \mathbf{249.5 \approx 250 \text{ g/mol}}$$

</details>

---

**Q3.** Explain why seawater has a lower freezing point than freshwater.

<details>
<summary>✅ Solution</summary>

Seawater contains dissolved salts (~3.5% by mass, primarily NaCl, MgCl₂, etc.). These electrolytes dissociate → more particles → greater colligative effect.

By ΔTf = i·Kf·m:
- Freshwater: ΔTf ≈ 0 → Tf = 0°C
- Seawater (~0.6 m NaCl equivalent): ΔTf ≈ 2 × 1.86 × 0.6 ≈ 2.2°C → Tf ≈ **−2°C**

The dissolved salts cause a **freezing point depression**, so seawater freezes at approximately −2°C.

</details>

---

**Q4.** What is reverse osmosis? How is it used in water purification?

<details>
<summary>✅ Solution</summary>

**Reverse osmosis:** Applying external pressure greater than the osmotic pressure to the solution side, forcing solvent molecules to flow **from solution to pure solvent** (reverse of natural osmosis direction) through a semipermeable membrane.

$$P_{applied} > \pi \Rightarrow \text{solvent flows from concentrated → dilute}$$

**Application in water purification:**
- Pressurizing seawater or brackish water forces pure water through a semipermeable membrane.
- Dissolved salts, minerals, and contaminants are left behind (concentrated brine).
- The purified water (permeate) is collected for drinking or industrial use.
- Used in desalination plants and household water filters.

</details>

---

**Q5.** Calculate the osmotic pressure of a 0.025 M NaCl solution at 25°C.

<details>
<summary>✅ Solution</summary>

NaCl → Na⁺ + Cl⁻, so i = 2

$$\pi = iMRT = 2 \times 0.025 \times 0.0821 \times 298 = \mathbf{1.22 \text{ atm}}$$

</details>

---

**Q6.** Show that isotonic solutions at the same temperature have equimolar concentrations.

<details>
<summary>✅ Solution</summary>

Two solutions are **isotonic** when π₁ = π₂

$$\pi_1 = M_1 R T \quad \text{and} \quad \pi_2 = M_2 R T$$

At the same temperature (T is the same for both):
$$M_1 R T = M_2 R T$$
$$\Rightarrow M_1 = M_2 \quad \blacksquare$$

Isotonic solutions have **equal molar concentrations** at the same temperature. ✓

Example: Normal saline (0.9% NaCl) is isotonic with blood plasma (π ≈ 7.7 atm at 37°C).

</details>

---

**Q7.** Why does adding salt to road ice melt it?

<details>
<summary>✅ Solution</summary>

When NaCl is spread on ice:
- A small amount of ice melts (temperature is near 0°C).
- NaCl dissolves in this water → salty brine solution forms.
- The salt solution has a **depressed freezing point** (ΔTf = i·Kf·m ≈ 3.7°C per mol/kg for NaCl).
- The brine remains liquid at temperatures below 0°C (as low as about −21°C for saturated NaCl).
- The melting is facilitated by the colligative effect.

This is the **principle of freezing point depression** applied to ice management.

</details>

---

**Q8.** The boiling point of a solution of 10.0g of a solute in 200g of water is 100.26°C. What is the molar mass of the solute? (Kb(water) = 0.512°C·kg/mol)

<details>
<summary>✅ Solution</summary>

ΔTb = 100.26 − 100.00 = 0.26°C

$$M = \frac{K_b \times w \times 1000}{\Delta T_b \times W} = \frac{0.512 \times 10.0 \times 1000}{0.26 \times 200}$$

$$M = \frac{5120}{52} = \mathbf{98.5 \approx 98 \text{ g/mol}}$$

(This could be H₂SO₄ with M = 98 g/mol)

</details>

---

**Q9.** Which of the following will have the highest boiling point: 1M NaCl, 1M glucose, 0.5M CaCl₂?

<details>
<summary>✅ Solution</summary>

ΔTb = i × Kb × m

Effective molality (i × m):
- 1M NaCl: i = 2, effective = 2 × 1 = 2
- 1M glucose: i = 1, effective = 1 × 1 = 1
- 0.5M CaCl₂: i = 3 (→ Ca²⁺ + 2Cl⁻), effective = 3 × 0.5 = 1.5

**Ranking by ΔTb:** NaCl (2) > CaCl₂ (1.5) > glucose (1)

**1M NaCl has the highest boiling point.** ✓

</details>

---

**Q10.** A 0.10 m acetic acid solution has a freezing point depression of 0.188°C. Calculate the Van't Hoff factor and degree of dissociation. (Kf water = 1.86°C·kg/mol)

<details>
<summary>✅ Solution</summary>

$$\Delta T_f = i \times K_f \times m$$
$$0.188 = i \times 1.86 \times 0.10$$
$$i = \frac{0.188}{0.186} = 1.011$$

Since acetic acid partially dissociates (CH₃COOH ⇌ CH₃COO⁻ + H⁺), i = 1 + α (where α = degree of dissociation for a 1:1 electrolyte):

$$\alpha = i - 1 = 1.011 - 1 = 0.011$$

**Degree of dissociation = 1.1%** — acetic acid is a weak acid, mostly undissociated at 0.10 m. ✓

</details>

---

## 11. References

1. Atkins, P., & de Paula, J. (2014). *Physical Chemistry* (10th ed.). Oxford University Press.
2. Chang, R., & Goldsby, K. (2016). *Chemistry* (12th ed.). McGraw-Hill Education.
3. Zumdahl, S. S., & Zumdahl, S. A. (2014). *Chemistry* (9th ed.). Cengage Learning.
4. Levine, I. N. (2009). *Physical Chemistry* (6th ed.). McGraw-Hill.
5. LibreTexts Chemistry. (2023). *Colligative Properties*. https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_-_The_Central_Science_(Brown_et_al.)/13._Properties_of_Solutions/13.5:_Colligative_Properties
6. Van't Hoff, J. H. (1887). The role of osmotic pressure in the analogy between solutions and gases. *Zeitschrift für physikalische Chemie, 1*, 481–508.
7. Raoult, F. M. (1882). Law of vapor pressures of solvents. *Comptes rendus de l'Académie des Sciences, 95*, 521.

---

*Last updated: 2025 | Repository: BUTex Chemistry-I Study Notes*

[← Previous: Analytical Chemistry](./05_Analytical_Chemistry.md) | [Next: Chemical Equilibrium →](./07_Chemical_Equilibrium.md)
