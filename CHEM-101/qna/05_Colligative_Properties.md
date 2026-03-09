# 💧 Chapter 5: Colligative Properties of Solutions

> **Topics Covered:** Raoult's Law · Osmotic Pressure · Boiling Point Elevation · Freezing Point Depression · Van't Hoff Factor · Solved Numericals

---

## 📋 Table of Contents
- [Colligative Properties — Introduction](#-colligative-properties--introduction)
- [Raoult's Law](#-raoults-law)
- [Vapour Pressure Lowering](#-lowering-of-vapour-pressure)
- [Elevation of Boiling Point](#-elevation-of-boiling-point)
- [Depression of Freezing Point](#-depression-of-freezing-point)
- [Osmotic Pressure](#-osmotic-pressure)
- [Van't Hoff's Law of Osmotic Pressure](#-vant-hoffs-law--πv--nrt)
- [Isotonic Solutions](#-isotonic-solutions)
- [Ideal vs Real Solutions](#-ideal-vs-real-solutions)
- [Solved Numericals](#-solved-numericals)
- [Practice Questions](#-practice-questions-with-solutions)
- [References](#-references)

---

## 🌊 Colligative Properties — Introduction

### Definition
> **Colligative properties** are physical properties of a solution that depend **only on the number (concentration) of solute particles**, not on their identity or nature.

The word "colligative" comes from Latin *colligatus* = bound together (implying they're tied to particle count).

### Four Main Colligative Properties

```
┌─────────────────────────────────────────────────────┐
│  1. Relative Lowering of Vapour Pressure (RLVP)    │
│  2. Elevation of Boiling Point (ΔTb)               │
│  3. Depression of Freezing Point (ΔTf)             │
│  4. Osmotic Pressure (π)                            │
└─────────────────────────────────────────────────────┘
All increase with increasing solute concentration.
```

### When are Colligative Laws Valid?

Colligative laws are valid when the solution is:

1. **Dilute** — solute particles do not interact with each other significantly
2. **Ideal** (or nearly ideal) — solute-solvent interactions ≈ solvent-solvent interactions
3. **Non-volatile solute** — solute does not contribute to vapour pressure
4. **Non-electrolyte** (for simple derivations) — no dissociation or association
5. **No chemical reaction** between solute and solvent

> ⚠️ For electrolytes, **Van't Hoff factor (i)** must be applied.

---

## 📉 Raoult's Law

### Statement
> *"The partial vapour pressure of any volatile component of a solution is equal to the vapour pressure of the pure component multiplied by its mole fraction in the solution."*

### Mathematical Expression

$$P_A = P_A^0 \cdot X_A$$

Where:
- **P_A** = vapour pressure of component A in solution
- **P₀_A** = vapour pressure of pure solvent A
- **X_A** = mole fraction of A in solution

### For a Binary Solution (solvent A + solute B)

$$P_{total} = P_A^0 X_A + P_B^0 X_B$$

For a **non-volatile solute** (P₀_B ≈ 0):

$$P_{solution} = P_A^0 \cdot X_A = P_A^0 (1 - X_B)$$

```
P⁰ ─────────────────────────────────────────────
    │                                           /
    │              pure solvent                /
P   │                                         /  ← Raoult's law line
    │                        +  solution      /
    │                          ↗             /
    │                         ↗
    └──────────────────────────────────────────→
    0                XB (mole fraction solute)  1
```

---

## 📊 Lowering of Vapour Pressure

### Definition
> The **lowering of vapour pressure** is the decrease in vapour pressure of a solvent when a non-volatile solute is dissolved.

$$\Delta P = P_A^0 - P_A$$

### Relative Lowering of Vapour Pressure (RLVP)

$$\frac{\Delta P}{P_A^0} = \frac{P_A^0 - P_A}{P_A^0} = X_B$$

Where X_B = mole fraction of solute

### Derivation

$$X_A + X_B = 1 \Rightarrow X_A = 1 - X_B$$

$$P_A = P_A^0 X_A = P_A^0(1 - X_B)$$

$$\frac{P_A^0 - P_A}{P_A^0} = X_B = \frac{n_B}{n_A + n_B}$$

For dilute solutions (n_B << n_A):

$$\frac{\Delta P}{P_A^0} \approx \frac{n_B}{n_A} = \frac{w_B/M_B}{w_A/M_A}$$

---

## ☁️ Elevation of Boiling Point

### Why does Solution Boil at Higher Temperature?

```
                   │
Vapour pressure    │ ← Pure solvent curve (higher VP)
                   │
                   │ ← Solution curve (lower VP)
Atmospheric P ─────┼──────
                   │    │
                   │    │  ΔTb (elevation)
                   │    │
                   └────┴─────────────────→
                   Tb(solution) > Tb(pure solvent)
```

The solution has **lower vapour pressure** than pure solvent at the same temperature. To reach atmospheric pressure, the solution must be heated to a **higher temperature**.

### Relation between ΔTb and Kb

$$\Delta T_b = K_b \cdot m$$

Where:
- **ΔTb** = elevation of boiling point
- **Kb** = molal elevation constant (ebullioscopic constant) of solvent
- **m** = molality of solution (mol solute / kg solvent)

### Derivation (Clausius-Clapeyron approach)

From thermodynamics:

$$K_b = \frac{R \cdot T_b^{*2} \cdot M_1}{1000 \cdot \Delta H_{vap}}$$

Where:
- T_b* = boiling point of pure solvent (K)
- M₁ = molar mass of solvent (g/mol)
- ΔH_vap = enthalpy of vaporization (J/mol)

### Calculating Kb for Water

```
For water:
  T*b = 373.15 K
  ΔHvap = 40,700 J/mol
  M₁ = 18 g/mol
  R = 8.314 J/mol·K

Kb = (8.314 × 373.15² × 18) / (1000 × 40700)
   = 8.314 × 139240.9 × 18 / 40,700,000
   = 0.512 K·kg/mol ✓

Kb(water) = 0.52 °C·kg/mol
```

### Molal Elevation Constants (Kb)

| Solvent | Kb (°C·kg/mol) | Normal BP (°C) |
|---------|----------------|----------------|
| Water | 0.512 | 100 |
| Benzene | 2.53 | 80.1 |
| Ethanol | 1.22 | 78.4 |
| Chloroform | 3.63 | 61.2 |
| Acetone | 1.71 | 56.0 |

---

## ❄️ Depression of Freezing Point

### Why does Solution Freeze at Lower Temperature?

The solution has lower vapour pressure → its freezing point (where solid and liquid have equal VP) is **lower** than the pure solvent.

$$\Delta T_f = K_f \cdot m$$

Where Kf = molal depression constant (cryoscopic constant)

### Molal Depression Constants (Kf)

| Solvent | Kf (°C·kg/mol) | Normal FP (°C) |
|---------|----------------|----------------|
| Water | 1.86 | 0 |
| Benzene | 5.12 | 5.5 |
| Acetic acid | 3.90 | 16.6 |
| Camphor | 40.0 | 179 |

> 💡 The larger the Kf, the more sensitive the measurement → Camphor is often used for molar mass determination

---

## 🫧 Osmotic Pressure

### Osmosis
> The spontaneous movement of solvent molecules through a **semi-permeable membrane** from a region of **lower solute concentration** to a region of **higher solute concentration**.

```
Pure Water │ Semi-permeable │ Sugar Solution
           │   membrane     │
     H₂O → │      →→→      │
     H₂O → │      →→→      │
            │               │
      
  Osmosis: water moves from pure side to solution side
  
  Osmotic pressure (π): excess pressure needed on solution 
  side to stop osmosis
```

### Definition of Osmotic Pressure
> **Osmotic pressure** is the **minimum excess pressure** that must be applied to a solution to prevent osmosis through a semi-permeable membrane from pure solvent.

---

## 🔭 Van't Hoff's Law — πV = nRT

### Derivation and Statement

Van't Hoff (1886) found that osmotic pressure obeys the same equation as ideal gases:

$$\pi V = nRT$$

Or equivalently:

$$\pi = CRT = \frac{n}{V}RT$$

Where:
- **π** = osmotic pressure (atm or Pa)
- **V** = volume of solution (L)
- **n** = moles of solute
- **R** = 0.0821 L·atm/mol·K
- **T** = temperature (K)
- **C** = molar concentration (mol/L)

### For Molar Mass Determination

$$\pi = \frac{w}{M \cdot V} RT \Rightarrow M = \frac{wRT}{\pi V}$$

Where:
- w = mass of solute (g)
- M = molar mass of solute (g/mol)

---

### Relation: Osmotic Pressure ∝ Lowering of Vapour Pressure

**Proof:**

From Raoult's law:
$$\frac{\Delta P}{P_0} = X_B \approx \frac{n_B}{n_A} = \frac{n_B V_A}{V} \cdot \frac{1}{V_A^0 \rho}$$

From thermodynamics (Van't Hoff):
$$\pi = X_B \cdot \frac{RT}{V_A^0}$$

At the same temperature and concentration:
$$\pi \propto \frac{\Delta P}{P_0}$$

**∴ Osmotic pressure is directly proportional to the lowering of vapour pressure.** ✓

---

## 🔗 Isotonic Solutions

### Definition
> Two solutions are **isotonic** (isosmotic) if they have the **same osmotic pressure** at the same temperature.

$$\pi_1 = \pi_2 \Rightarrow C_1 = C_2$$

### Physiological Importance

```
Normal saline: 0.9% NaCl = 0.154 M → same osmolarity as blood plasma (~ 0.308 Osm/L)
5% glucose:                           → isotonic with blood cells
```

| Solution Type | Osmotic pressure relative to cell | Effect on Red Blood Cell |
|--------------|-----------------------------------|--------------------------|
| **Isotonic** | Same | Normal, unchanged |
| **Hypotonic** | Lower (than cell) | Swells, may lyse (hemolysis) |
| **Hypertonic** | Higher (than cell) | Shrinks (crenation) |

---

## 💧 Ideal vs Real Solutions

### Ideal Solution

A solution that **obeys Raoult's law** perfectly over all concentrations.

**Conditions:**
- Solute-solvent interactions = solvent-solvent interactions
- **ΔH_mix = 0** (no heat of mixing)
- **ΔV_mix = 0** (no volume change on mixing)

**Examples:** Benzene + toluene, ethanol + methanol, n-hexane + n-heptane

---

### Real (Non-ideal) Solution

Deviates from Raoult's law.

| Type | Cause | ΔH_mix | VP | Example |
|------|-------|--------|----|---------| 
| **Positive deviation** | Solute-solvent interactions < solvent-solvent | Endothermic | Higher than Raoult's | Acetone + CS₂ |
| **Negative deviation** | Solute-solvent interactions > solvent-solvent | Exothermic | Lower than Raoult's | Acetone + CHCl₃ |

```
Vapour Pressure vs Composition:

Positive Deviation:          Negative Deviation:
  P                            P
  │   ╭─────╮                  │         Raoult's line
  │  ╱       ╲                 │ ────────────────────
  │ ╱  Raoult's╲              │╲
  │╱     line   ╲             │ ╲
  └──────────────→             └──────────────→
     X(solute)                    X(solute)
  VP > expected                VP < expected
```

---

## 🧮 Solved Numericals

### Numerical 1 (From Exam — 2023 & 2020)

> **Problem:** 0.440 g of a substance dissolved in 22.2 g benzene lowers the freezing point by 0.567 °C. Calculate the molecular weight. (Kf = 5.12 °C/mol)

**Solution:**

$$\Delta T_f = K_f \cdot m = K_f \cdot \frac{w_2 / M_2}{w_1 / 1000}$$

Rearranging for M₂:

$$M_2 = \frac{K_f \times w_2 \times 1000}{\Delta T_f \times w_1}$$

Substituting values:
```
Kf = 5.12 °C·kg/mol
w₂ = 0.440 g      (solute)
w₁ = 22.2 g       (solvent, benzene)
ΔTf = 0.567 °C

M₂ = (5.12 × 0.440 × 1000) / (0.567 × 22.2)
M₂ = 2252.8 / 12.5874
M₂ = 178.97 ≈ 179 g/mol
```

**∴ Molecular weight = 179 g/mol**

> 💡 This is close to the molar mass of **naphthalene (C₁₀H₈ = 128 g/mol)** or **anthracene (C₁₄H₁₀ = 178 g/mol)**. The answer suggests **anthracene**.

---

### Numerical 2 (From Exam — 2021)

> **Problem:** Calculate osmotic pressure of 3% glucose solution at 25 °C.

**Solution:**

3% glucose solution means 3 g glucose per 100 mL solution.

```
Molar mass of glucose (C₆H₁₂O₆) = 180 g/mol
w = 3 g
V = 100 mL = 0.1 L
T = 25 + 273 = 298 K
R = 0.0821 L·atm/mol·K

Moles of glucose = 3/180 = 0.01667 mol

π = nRT/V
π = (0.01667 × 0.0821 × 298) / 0.1
π = 0.4078 / 0.1
π = 4.08 atm
```

**∴ Osmotic pressure = 4.08 atm**

---

### Numerical 3: Calculating Kb of Water from Given Data

> **Given:** Boiling point of water = 100°C, ΔH_vap = 40.7 kJ/mol

**Solution:**

$$K_b = \frac{R \cdot T_b^{*2} \cdot M_1}{1000 \cdot \Delta H_{vap}}$$

```
R = 8.314 J/(mol·K)
T*b = 373.15 K
M₁ = 18 g/mol (water)
ΔHvap = 40700 J/mol

Kb = (8.314 × 373.15² × 18) / (1000 × 40700)
   = (8.314 × 139241 × 18) / 40,700,000
   = 20,818,847 / 40,700,000
   = 0.5116 ≈ 0.512 °C·kg/mol
```

**∴ Kb(water) = 0.512 °C·kg/mol ✓**

---

### Numerical 4: Molar Mass from Osmotic Pressure

> **Problem:** 2.0 g of a polymer is dissolved in 500 mL of water at 27°C, and the osmotic pressure is 0.082 atm. Find the molar mass.

**Solution:**

$$M = \frac{wRT}{\pi V}$$

```
w = 2.0 g
R = 0.0821 L·atm/mol·K
T = 300 K
π = 0.082 atm
V = 0.5 L

M = (2.0 × 0.0821 × 300) / (0.082 × 0.5)
M = 49.26 / 0.041
M = 1201 g/mol ≈ 1200 g/mol
```

---

### Numerical 5: Boiling Point Elevation

> **Problem:** What is the boiling point of a solution containing 5 g of glucose in 250 g of water? Kb = 0.52 °C·kg/mol

**Solution:**

```
M(glucose) = 180 g/mol
Molality = (5/180) / (250/1000) = 0.02778 / 0.250 = 0.1111 mol/kg

ΔTb = Kb × m = 0.52 × 0.1111 = 0.0578 °C

BP of solution = 100 + 0.0578 = 100.058 °C
```

---

## 🧪 Practice Questions with Solutions

### Q1. Why is the freezing point of a solution lower than that of pure solvent?

**Answer:**
When a non-volatile solute is dissolved, it lowers the vapour pressure of the solution. The solid-liquid equilibrium (where both phases have equal vapour pressure) now occurs at a **lower temperature** than for pure solvent. This is because the solid solvent has a higher vapour pressure than the solution at the normal freezing point, so equilibrium shifts to a lower temperature.

```
VP
│  ←─── ice
│        
│               ←─── pure water
│                        ←─── solution
│
└──────────────────────────────→ Temperature
   Tf(solution) < Tf(pure water)
```

---

### Q2. Calculate the molality of a 10% (w/w) NaCl solution

**Solution:**
```
10 g NaCl in 90 g water (per 100 g solution)
Molar mass NaCl = 58.5 g/mol
Moles NaCl = 10/58.5 = 0.1709 mol
Mass of solvent = 90 g = 0.090 kg

Molality = 0.1709/0.090 = 1.90 mol/kg
```

---

### Q3. Prove that πV = nRT from basic principles

**Proof (Van't Hoff):**

From Raoult's law:
$$\frac{\Delta P}{P_0} = X_B = \frac{n_B}{n_A + n_B} \approx \frac{n_B}{n_A}$$

From thermodynamics, the osmotic pressure relates to vapour pressure difference:
$$\pi = \frac{RT}{V_{molar,A}} \cdot \ln\left(\frac{P_0}{P}\right)$$

For dilute solutions: ln(P₀/P) ≈ ΔP/P₀ = X_B = n_B/(n_A + n_B) ≈ n_B·V_A/V

$$\pi \approx \frac{RT \cdot n_B}{V} \Rightarrow \pi V = n_B RT$$

$$\boxed{\pi V = nRT}$$  ✓

---

### Q4. What mass of urea (M = 60 g/mol) should be dissolved in 500 g water to lower freezing point by 1.86°C?

**Solution:**
```
ΔTf = Kf × m
1.86 = 1.86 × m
m = 1.00 mol/kg

Moles urea needed per kg water = 1.00 mol
For 500 g (0.5 kg) water:
Moles = 1.00 × 0.5 = 0.50 mol
Mass = 0.50 × 60 = 30 g
```

**∴ 30 g of urea should be dissolved**

---

## 📚 References

1. **Atkins, P. & de Paula, J.** — *Physical Chemistry*, 10th Ed., Oxford University Press, 2014.  
   [https://global.oup.com](https://global.oup.com)

2. **Chang, R.** — *Chemistry*, 12th Ed., McGraw-Hill. Chapter 12: Physical Properties of Solutions.

3. **Castellan, G.W.** — *Physical Chemistry*, 3rd Ed., Addison-Wesley.

4. **LibreTexts: Colligative Properties** —  
   [https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.05%3A_Colligative_Properties](https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.05%3A_Colligative_Properties)

5. **Van't Hoff, J.H. (1887)** — "The Role of Osmotic Pressure in the Analogy between Solutions and Gases", *Z. Phys. Chem.*, 1, 481.

6. **Khan Academy: Colligative Properties** —  
   [https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:solutions/x2eef969c74e0d802:colligative-properties-ap/a/colligative-properties](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:solutions/x2eef969c74e0d802:colligative-properties-ap/a/colligative-properties)

7. **Raoult's Law — ChemGuide** —  
   [https://www.chemguide.co.uk/physical/phaseeqia/raoult.html](https://www.chemguide.co.uk/physical/phaseeqia/raoult.html)

---

> 🖼️ **Phase diagrams and VP curves:** [https://chem.libretexts.org](https://chem.libretexts.org) (CC BY-NC-SA)  
> 🖼️ **Osmosis diagrams:** [https://www.khanacademy.org](https://www.khanacademy.org)  
> 🖼️ **Boiling point elevation graph:** [https://www.chemguide.co.uk](https://www.chemguide.co.uk)

---

*Last updated: 2024 | For educational use | Based on past exam papers 2017–2023*
