# 🧪 University Chemistry: Colligative Properties, Chemical Kinetics & Equilibrium

> **Complete Study Guide** | GitHub Markdown Format | With Practice Questions & Solutions

---

## 📚 Table of Contents

1. [Colligative Properties & Solutions](#1-colligative-properties--solutions)
   - [What Are Colligative Properties?](#11-what-are-colligative-properties)
   - [Proof: P ∝ X₁ (Raoult's Law)](#12-proof-p--x-raoults-law)
   - [Raoult's Law – Lowering of Vapour Pressure](#13-raoults-law--lowering-of-vapour-pressure)
   - [Elevation of Boiling Point](#14-elevation-of-boiling-point--tb--m)
   - [Depression of Freezing Point](#15-depression-of-freezing-point--tf--m)
   - [Osmosis & Osmotic Pressure](#16-osmosis--osmotic-pressure)
   - [Proof: (P - Pₛ)/P ∝ π](#17-proof-p---ps--p--osmotic-pressure-)
2. [Chemical Kinetics & Equilibrium](#2-chemical-kinetics--equilibrium)
   - [Rate, Order & Molecularity](#21-rate-order--molecularity)
   - [Determination of Order of Reaction](#22-determination-of-order-of-reaction)
   - [Law of Mass Action & Kc Proof](#23-law-of-mass-action--kc-proof)
   - [Calculations: Kc, Kp, Kx](#24-calculations-kc-kp-kx)
3. [Practice Questions with Solutions](#3-practice-questions-with-solutions)
4. [References](#4-references)

---

## 1. Colligative Properties & Solutions

### 1.1 What Are Colligative Properties?

**Colligative properties** are physical properties of solutions that depend **only on the number (concentration) of solute particles** dissolved in a given amount of solvent — **not** on the chemical nature or identity of the solute.

> 💡 The word "colligative" comes from the Latin *colligatus* meaning "bound together."

**The four main colligative properties are:**

| Property | Symbol | Description |
|----------|--------|-------------|
| Relative Lowering of Vapour Pressure | ΔP/P° | Addition of solute lowers vapour pressure |
| Elevation of Boiling Point | ΔTb | Solution boils at higher T than pure solvent |
| Depression of Freezing Point | ΔTf | Solution freezes at lower T than pure solvent |
| Osmotic Pressure | π | Pressure needed to stop osmotic flow |

**Key Points:**
- These properties are **independent of the nature of solute** but depend on **quantity**.
- Useful for calculating **molar masses** of unknown substances.
- For **electrolytes**, the Van't Hoff factor `i` (number of ions produced) must be considered:
  - `i > 1` for dissociation (e.g., NaCl → Na⁺ + Cl⁻, i = 2)
  - `i < 1` for association (e.g., acetic acid in benzene)
  - `i = 1` for non-electrolytes

![Colligative Properties Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Raoult_law_1.svg/800px-Raoult_law_1.svg.png)

*Figure 1: Vapour pressure diagram illustrating Raoult's Law for ideal solutions. Source: Wikimedia Commons*

---

### 1.2 Proof: P ∝ X₁ (Raoult's Law)

**Statement:** The partial vapour pressure of any component of an ideal solution is proportional to its mole fraction in the solution.

**Derivation:**

Consider a solution with a non-volatile solute (component 2) dissolved in a volatile solvent (component 1).

Let:
- `P°` = vapour pressure of pure solvent
- `Pₛ` = vapour pressure of solution
- `X₁` = mole fraction of solvent = n₁ / (n₁ + n₂)
- `X₂` = mole fraction of solute = n₂ / (n₁ + n₂)

**Raoult's Law states:**

```
Pₛ = P° × X₁
```

**Proof of proportionality:**

Since `P°` is a constant at a fixed temperature:

```
Pₛ = P° × X₁
⟹ Pₛ ∝ X₁    (since P° = constant at fixed T)
```

**Verification:**
- When X₁ = 1 (pure solvent): Pₛ = P° ✓
- When X₁ < 1 (solution): Pₛ < P° ✓ (vapour pressure is lowered)
- When X₁ = 0: Pₛ = 0 ✓

**Physical Interpretation:**

In pure solvent, all surface molecules are solvent molecules available to escape into vapour phase. When solute is added, solute molecules occupy surface sites, reducing the number of solvent molecules at the surface. This reduces the rate of evaporation, lowering vapour pressure.

---

### 1.3 Raoult's Law – Lowering of Vapour Pressure

**Statement of Raoult's Law:**

> *The relative lowering of vapour pressure of a dilute solution containing a non-volatile, non-electrolyte solute is equal to the mole fraction of the solute.*

**Mathematical Derivation:**

From Raoult's Law: `Pₛ = P° · X₁`

Since `X₁ + X₂ = 1`, we have `X₁ = 1 - X₂`

```
Pₛ = P°(1 - X₂)
Pₛ = P° - P°X₂
P° - Pₛ = P°X₂

Dividing both sides by P°:

(P° - Pₛ) / P° = X₂
```

This is the **Relative Lowering of Vapour Pressure (RLVP)**:

```
ΔP / P° = X₂ = n₂ / (n₁ + n₂)
```

For dilute solutions where n₂ << n₁:

```
ΔP / P° ≈ n₂ / n₁ = (w₂/M₂) / (w₁/M₁)
```

Where:
- `w₁, w₂` = masses of solvent and solute
- `M₁, M₂` = molar masses of solvent and solute

**Application – Finding Molar Mass of Solute:**

```
M₂ = (w₂ × M₁ × P°) / (w₁ × ΔP)
```

---

**Limitations of Raoult's Law:**

| Limitation | Explanation |
|------------|-------------|
| **Only dilute solutions** | At higher concentrations, solute-solvent interactions deviate from ideal behaviour |
| **Non-volatile solute only** | If solute is volatile, it also contributes to vapour pressure (use modified form) |
| **No association/dissociation** | Electrolytes increase particle count; associated solutes decrease it |
| **Ideal solutions only** | Real solutions show **positive** or **negative deviations** |

**Deviations from Raoult's Law:**

- **Positive Deviation:** `Pₛ > P°X₁` — solute-solvent interactions weaker than pure component interactions (e.g., ethanol + water). ΔHmix > 0.
- **Negative Deviation:** `Pₛ < P°X₁` — stronger solute-solvent interactions (e.g., acetone + chloroform). ΔHmix < 0.

![Raoult's Law Deviations](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Raoult_positive.svg/600px-Raoult_positive.svg.png)

*Figure 2: Positive deviation from Raoult's Law. Source: Wikimedia Commons*

---

### 1.4 Elevation of Boiling Point (ΔTb ∝ m)

**Concept:**

The boiling point is the temperature at which the vapour pressure of the liquid equals atmospheric pressure. When a non-volatile solute is dissolved, vapour pressure decreases. To restore vapour pressure to atmospheric level, a **higher temperature** is required.

```
ΔTb = Tb(solution) - Tb°(pure solvent) > 0
```

![Boiling Point Elevation Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Boiling_point_elevation_osm.svg/600px-Boiling_point_elevation_osm.svg.png)

*Figure 3: Vapour pressure curve showing boiling point elevation. Source: Wikimedia Commons*

**Derivation using Clausius-Clapeyron Equation:**

For pure solvent at boiling point Tb°, the Clausius-Clapeyron equation gives:

```
ln(P°/Pₛ) = (ΔHvap/R) × (1/Tb° - 1/Tb)
```

For small elevation ΔTb = Tb - Tb°:

```
ln(P°/Pₛ) ≈ (ΔHvap × ΔTb) / (R × Tb°²)
```

From Raoult's Law, for dilute solutions:

```
ln(P°/Pₛ) = ln(1/X₁) = -ln(X₁) = -ln(1 - X₂) ≈ X₂ ≈ n₂/n₁
```

Equating:

```
n₂/n₁ = (ΔHvap × ΔTb) / (R × Tb°²)

ΔTb = (R × Tb°² × n₂) / (ΔHvap × n₁)
```

Expressing in terms of molality `m = n₂ / (w₁/1000)` = moles of solute per kg solvent:

```
ΔTb = (R × Tb°² × M₁) / (1000 × ΔHvap) × m
```

Let **Kb** (ebullioscopic/boiling point elevation constant) = `(R × Tb°² × M₁) / (1000 × ΔHvap)`

```
∴ ΔTb = Kb × m
```

Since Kb is a **constant for a given solvent**:

```
ΔTb ∝ m    (Proved) ✓
```

**Common Kb Values:**

| Solvent | Boiling Point (°C) | Kb (°C·kg/mol) |
|---------|-------------------|----------------|
| Water | 100 | 0.52 |
| Benzene | 80.1 | 2.53 |
| Ethanol | 78.4 | 1.22 |
| Chloroform | 61.2 | 3.63 |

---

### 1.5 Depression of Freezing Point (ΔTf ∝ m)

**Concept:**

The freezing point is where the vapour pressure of the liquid and solid phases are equal. When solute is added, the vapour pressure of the solution is lower than that of the solid solvent at any temperature, so the solution must be **cooled further** before it freezes.

```
ΔTf = Tf°(pure solvent) - Tf(solution) > 0
```

![Freezing Point Depression](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Freezing_point_depression_osm.svg/600px-Freezing_point_depression_osm.svg.png)

*Figure 4: Phase diagram showing freezing point depression and boiling point elevation. Source: Wikimedia Commons*

**Derivation:**

Using the same thermodynamic approach as boiling point elevation, but now involving enthalpy of fusion (ΔHfus):

At the freezing point, chemical potential of liquid = chemical potential of solid.

For a dilute solution:

```
ln(Xsolvent) = (ΔHfus/R) × (1/Tf° - 1/Tf)
```

For small depression ΔTf = Tf° - Tf:

```
-X₂ ≈ (-ΔHfus × ΔTf) / (R × Tf°²)

ΔTf = (R × Tf°² × X₂) / ΔHfus
```

Converting to molality:

```
ΔTf = (R × Tf°² × M₁) / (1000 × ΔHfus) × m
```

Let **Kf** (cryoscopic constant) = `(R × Tf°² × M₁) / (1000 × ΔHfus)`

```
∴ ΔTf = Kf × m
```

Since Kf is constant for a given solvent:

```
ΔTf ∝ m    (Proved) ✓
```

**Common Kf Values:**

| Solvent | Freezing Point (°C) | Kf (°C·kg/mol) |
|---------|---------------------|----------------|
| Water | 0 | 1.86 |
| Benzene | 5.5 | 5.12 |
| Acetic acid | 16.7 | 3.90 |
| Camphor | 179.0 | 37.7 |

**Applications:**
- Antifreeze in car radiators (ethylene glycol in water)
- Salting of icy roads
- Determining molar masses of polymers

---

### 1.6 Osmosis & Osmotic Pressure

#### Osmosis

**Definition:** Osmosis is the **spontaneous flow of solvent molecules** through a semi-permeable membrane from a region of **lower solute concentration** (higher solvent concentration) to a region of **higher solute concentration** (lower solvent concentration).

**Types:**
- **Osmosis (Endosmosis):** Solvent flows *into* the solution (net flow inward)
- **Exosmosis:** Solvent flows *out* of the solution (e.g., RBC in hypertonic solution)
- **Reverse Osmosis:** External pressure greater than osmotic pressure forces solvent from concentrated to dilute side (used in water purification)

![Osmosis Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Osmosis_diagram.svg/600px-Osmosis_diagram.svg.png)

*Figure 5: Illustration of osmosis across a semi-permeable membrane. Source: Wikimedia Commons*

#### Osmotic Pressure (π)

**Definition:** The **minimum excess pressure** that must be applied on the solution side to **just prevent** the flow of solvent through a semi-permeable membrane. Alternatively, it is the pressure required to stop osmosis.

**Van't Hoff Laws of Osmotic Pressure:**

| Law | Statement | Expression |
|-----|-----------|------------|
| **First Law** | At constant T, osmotic pressure is proportional to concentration | π ∝ C |
| **Second Law** | At constant C, osmotic pressure is proportional to absolute temperature | π ∝ T |
| **Combined** | | π = CRT |

Where:
- `C` = molar concentration (mol/L)
- `R` = gas constant (0.0821 L·atm/mol·K or 8.314 J/mol·K)
- `T` = absolute temperature (K)

**Since C = n/V:**

```
π = (n/V)RT
πV = nRT    (analogous to ideal gas equation PV = nRT)
```

**Isotonic, Hypertonic, Hypotonic Solutions:**

- **Isotonic:** Same osmotic pressure (π₁ = π₂) — no net osmosis
- **Hypertonic:** Higher osmotic pressure than reference solution
- **Hypotonic:** Lower osmotic pressure than reference solution

---

### 1.7 Proof: (P - Pₛ) / P ∝ Osmotic Pressure (π)

**To Prove:** Relative lowering of vapour pressure ∝ osmotic pressure

**Derivation:**

**Step 1: From Raoult's Law**

```
(P° - Pₛ) / P° = X₂ = n₂ / (n₁ + n₂)
```

For dilute solutions (n₂ << n₁):

```
(P° - Pₛ) / P° ≈ n₂/n₁    ... (i)
```

Since n₁ = w₁/M₁ (moles of solvent) and V is volume of solution:

```
n₂/n₁ = (n₂/V) × (V/n₁) = C₂ × (M₁/ρ₁)    ... (ii)
```

Where ρ₁ is density of solvent.

**Step 2: From Osmotic Pressure**

```
π = CRT = (n₂/V)RT    ... (iii)
```

**Step 3: Combining**

From (i) and (ii):

```
(P° - Pₛ) / P° ≈ n₂/n₁ ∝ n₂/V ∝ C₂
```

From (iii):

```
π ∝ C₂    (at constant T)
```

Since **both the relative lowering of vapour pressure and osmotic pressure are proportional to solute concentration C₂**:

```
(P° - Pₛ) / P° ∝ π    (Proved) ✓
```

**Quantitative Relationship:**

```
(P° - Pₛ) / P° = π × M₁ / (ρ₁ × RT)
```

This shows that any colligative property can, in principle, be related to any other, since all depend on the mole fraction (or concentration) of the solute.

---

## 2. Chemical Kinetics & Equilibrium

### 2.1 Rate, Order & Molecularity

#### Rate of Reaction

**Definition:** The rate of a chemical reaction is the **change in concentration of a reactant or product per unit time**.

For a reaction: `aA + bB → cC + dD`

```
Rate = -(1/a)(d[A]/dt) = -(1/b)(d[B]/dt) = +(1/c)(d[C]/dt) = +(1/d)(d[D]/dt)
```

**Units:** mol L⁻¹ s⁻¹ (or mol L⁻¹ min⁻¹, etc.)

**Types of Rate:**
- **Average Rate:** Change in concentration over a finite time interval: `Δ[C]/Δt`
- **Instantaneous Rate:** Rate at a specific moment: `d[C]/dt` (slope of concentration–time curve)
- **Initial Rate:** Rate at t = 0 (before significant concentration change)

#### Order of Reaction

**Definition:** The order of a reaction with respect to a particular reactant is the **power (exponent) of that reactant's concentration** in the experimentally determined rate law. The **overall order** is the sum of all individual orders.

For the rate law: `Rate = k[A]^m[B]^n`

- Order with respect to A = m
- Order with respect to B = n
- **Overall order = m + n**
- `k` = rate constant (units depend on order)

| Order | Rate Law | Units of k | Half-life t½ |
|-------|----------|-----------|--------------|
| 0 | Rate = k | mol L⁻¹ s⁻¹ | [A]₀/2k |
| 1 | Rate = k[A] | s⁻¹ | ln2/k = 0.693/k |
| 2 | Rate = k[A]² | L mol⁻¹ s⁻¹ | 1/(k[A]₀) |

**Important Notes:**
- Order is **experimentally determined**, not from stoichiometry
- Order can be 0, 1, 2, 3, or even fractional (e.g., 0.5, 1.5)
- Order can be negative (rate decreases with increasing concentration)

#### Molecularity

**Definition:** Molecularity is the **number of reacting species** (atoms, ions, or molecules) that **collide simultaneously** in an elementary step of a reaction.

| Molecularity | Name | Example |
|-------------|------|---------|
| 1 | Unimolecular | N₂O₄ → 2NO₂ |
| 2 | Bimolecular | H₂ + I₂ → 2HI |
| 3 | Termolecular | 2NO + O₂ → 2NO₂ |

**Key Differences: Order vs Molecularity**

| Aspect | Order | Molecularity |
|--------|-------|--------------|
| Determined by | Experiment | Reaction mechanism |
| Can be fractional? | Yes | No (always integer) |
| Can be zero? | Yes | No (min = 1) |
| Applies to | Overall reaction | Elementary steps only |
| Can be negative? | Yes | No |

---

### 2.2 Determination of Order of Reaction

#### Method 1: Initial Rate Method (Method of Isolation)

**Procedure:**
1. Keep all reactant concentrations constant except one
2. Vary that one concentration and measure initial rate
3. Repeat for each reactant

**Example:** For `Rate = k[A]^m[B]^n`

Run two experiments varying [A] while keeping [B] constant:

```
Rate₁ = k[A₁]^m[B]^n
Rate₂ = k[A₂]^m[B]^n

Rate₂/Rate₁ = ([A₂]/[A₁])^m

∴ m = log(Rate₂/Rate₁) / log([A₂]/[A₁])
```

#### Method 2: Integrated Rate Law Method

Integrate the rate equation and compare with experimental concentration–time data:

**Zero Order:** `[A] = [A]₀ - kt`
→ Plot [A] vs t → **straight line** with slope = -k

**First Order:** `ln[A] = ln[A]₀ - kt`  
→ Plot ln[A] vs t → **straight line** with slope = -k

**Second Order:** `1/[A] = 1/[A]₀ + kt`  
→ Plot 1/[A] vs t → **straight line** with slope = k

#### Method 3: Half-Life Method

The half-life `t½` is related to initial concentration by:

```
t½ ∝ [A]₀^(1-n)
```

Where n = order of reaction.

| Order (n) | t½ Dependence |
|-----------|---------------|
| 0 | t½ ∝ [A]₀ (increases with concentration) |
| 1 | t½ = constant (independent of [A]₀) |
| 2 | t½ ∝ 1/[A]₀ (decreases with concentration) |

#### Method 4: Graphical Method

Plot `log(t½)` vs `log[A]₀`:

```
log(t½) = log(constant) + (1-n) × log[A]₀
```

Slope = (1 - n), so **n = 1 - slope**

---

### 2.3 Law of Mass Action & Kc Proof

#### Law of Mass Action

**Statement (Guldberg & Waage, 1864):**

> *The rate of a chemical reaction is proportional to the product of the "active masses" (molar concentrations) of the reacting species, each raised to a power equal to its stoichiometric coefficient in the balanced equation.*

For: `aA + bB → products`

```
Rate ∝ [A]^a × [B]^b
Rate = k × [A]^a × [B]^b
```

#### Chemical Equilibrium

A **dynamic equilibrium** is established when the rate of the forward reaction equals the rate of the reverse reaction, and the concentrations of all species remain constant over time.

**Characteristics:**
- Dynamic (both reactions still occurring)
- Concentrations constant (not necessarily equal)
- Only reached in **closed systems**
- Temperature-dependent

#### Proof: Kc = kf/kb

**For a reversible reaction:** `A + B ⇌ C + D`

**Forward reaction:** `A + B → C + D`

By Law of Mass Action:
```
Rf = kf[A][B]    ... (1)
```

**Backward reaction:** `C + D → A + B`

By Law of Mass Action:
```
Rb = kb[C][D]    ... (2)
```

**At Equilibrium:** `Rf = Rb`

```
kf[A][B] = kb[C][D]

kf/kb = [C][D] / [A][B]
```

Since `kf`, `kb` are constants at fixed temperature, their ratio is also a constant:

```
Kc = kf/kb = [C][D] / [A][B]    (Proved) ✓
```

**For a general reaction:** `aA + bB ⇌ cC + dD`

```
Kc = [C]^c [D]^d / [A]^a [B]^b
```

---

### 2.4 Calculations: Kc, Kp, Kx

#### Relationship Between Kp, Kc, and Kx

For ideal gases:

```
Kp = Kc(RT)^Δn
Kp = Kx × P^Δn
Kx = Kc(RT/P)^Δn
```

Where:
- `Δn = moles of gaseous products - moles of gaseous reactants`
- `R = 0.0821 L·atm/mol·K`
- `P = total pressure (atm)`
- `T = temperature (K)`

---

#### (i) N₂O₄(g) ⇌ 2NO₂(g)

**Δn = 2 - 1 = +1**

**Setting up ICE table:**

Let α = degree of dissociation, starting with 1 mole N₂O₄, total pressure P:

| Species | Initial | Change | Equilibrium |
|---------|---------|--------|-------------|
| N₂O₄ | 1 | -α | 1-α |
| NO₂ | 0 | +2α | 2α |
| **Total** | **1** | | **1+α** |

**Mole fractions:**
```
X(N₂O₄) = (1-α)/(1+α)
X(NO₂) = 2α/(1+α)
```

**Partial pressures** (pi = Xi × P):
```
P(N₂O₄) = (1-α)P/(1+α)
P(NO₂) = 2αP/(1+α)
```

**Kp:**
```
Kp = [P(NO₂)]² / [P(N₂O₄)]
   = [2αP/(1+α)]² / [(1-α)P/(1+α)]
   = 4α²P² / (1+α)² × (1+α) / [(1-α)P]
   = 4α²P / (1-α²)
```

**Kx:**
```
Kx = [X(NO₂)]² / [X(N₂O₄)]
   = [2α/(1+α)]² / [(1-α)/(1+α)]
   = 4α² / (1-α²)
```

**Kc:**
```
Kc = Kp / (RT)^Δn = Kp / (RT)
   = 4α²P / [(1-α²)(RT)]
```

---

#### (ii) N₂(g) + 3H₂(g) ⇌ 2NH₃(g)

**Δn = 2 - (1+3) = 2 - 4 = -2**

**ICE Table:** Starting with a moles N₂ and b moles H₂ (stoichiometric ratio 1:3, so let a = 1, b = 3):

Let x = moles of N₂ reacted at equilibrium:

| Species | Initial | Change | Equilibrium |
|---------|---------|--------|-------------|
| N₂ | 1 | -x | 1-x |
| H₂ | 3 | -3x | 3-3x = 3(1-x) |
| NH₃ | 0 | +2x | 2x |
| **Total** | **4** | | **4-2x** |

**Mole fractions:**
```
X(N₂) = (1-x)/(4-2x)
X(H₂) = 3(1-x)/(4-2x)
X(NH₃) = 2x/(4-2x)
```

**Kx:**
```
Kx = [X(NH₃)]² / [X(N₂) × X(H₂)³]
   = [2x/(4-2x)]² / {[(1-x)/(4-2x)] × [3(1-x)/(4-2x)]³}
   = 4x² (4-2x)² / [27(1-x)⁴]
```

Simplifying with substitution `2-x notation`:

```
Kx = 4x²(4-2x)² / [27(1-x)⁴]
```

**Kp:**
```
Kp = Kx × P^Δn = Kx × P^(-2) = Kx / P²
```

**Kc:**
```
Kc = Kp / (RT)^Δn = Kp × (RT)^2     [since Δn = -2]
   = Kx × (RT)^(-2) × (RT)^2 ... 
```

Using the direct formula:
```
Kp = Kc(RT)^(-2)
∴ Kc = Kp × (RT)²
```

**Physical Interpretation:**
Since Δn = -2 (fewer moles of gas on product side):
- `Kp < Kc` (higher pressure favours products — Le Chatelier's principle)
- High pressure favours NH₃ formation (Haber process runs at 200 atm)

---

## 3. Practice Questions with Solutions

### 🟢 Section A: Colligative Properties

---

**Q1.** Calculate the boiling point elevation of a solution containing 18 g of glucose (M = 180 g/mol) dissolved in 100 g of water. (Kb for water = 0.52°C·kg/mol)

<details>
<summary>Solution ▼</summary>

```
Moles of glucose = 18/180 = 0.1 mol
Mass of solvent = 100 g = 0.1 kg
Molality m = 0.1/0.1 = 1 mol/kg

ΔTb = Kb × m = 0.52 × 1 = 0.52°C

New boiling point = 100 + 0.52 = 100.52°C
```
</details>

---

**Q2.** The vapour pressure of pure water at 25°C is 23.8 mmHg. What is the vapour pressure of a solution made by dissolving 4.5 g of glucose (M = 180) in 180 g of water?

<details>
<summary>Solution ▼</summary>

```
n(glucose) = 4.5/180 = 0.025 mol
n(water) = 180/18 = 10 mol

X₂ (solute) = 0.025 / (10 + 0.025) = 0.025/10.025 ≈ 0.00249

ΔP/P° = X₂
ΔP = 23.8 × 0.00249 = 0.0593 mmHg

Pₛ = 23.8 - 0.0593 = 23.74 mmHg
```
</details>

---

**Q3.** A solution of NaCl (2.34 g in 200 g water) shows a freezing point depression of 0.372°C. Kf for water = 1.86. Calculate the degree of ionisation of NaCl.

<details>
<summary>Solution ▼</summary>

```
Molar mass of NaCl = 58.5 g/mol
Moles of NaCl = 2.34/58.5 = 0.04 mol
m = 0.04/0.2 = 0.2 mol/kg

Theoretical ΔTf (no ionization) = 1.86 × 0.2 = 0.372°C

Observed ΔTf = 0.372°C

Van't Hoff factor i = Observed ΔTf / Theoretical ΔTf = 0.372/0.372 = 1

Wait: if i = 1, degree of ionization α = ?
For NaCl → Na⁺ + Cl⁻ (2 ions)
i = 1 + α(n-1) = 1 + α(2-1) = 1 + α

If i = 1, then α = 0 (no ionization in this case)
But normally NaCl fully ionizes. If ΔTf were 0.744°C, then i = 2, α = 1 (100%)

Note: In this problem, the data gives i = 1, which is inconsistent with NaCl's known behavior.
Likely intended answer: degree of ionisation = 0% (or the data tests calculation skill).
```
</details>

---

**Q4.** An aqueous solution of urea has an osmotic pressure of 7.4 atm at 27°C. Calculate the molar concentration and mass of urea (M = 60 g/mol) in 500 mL of solution.

<details>
<summary>Solution ▼</summary>

```
π = CRT
7.4 = C × 0.0821 × 300
C = 7.4 / (0.0821 × 300) = 7.4 / 24.63 = 0.3005 mol/L

Moles in 500 mL = 0.3005 × 0.5 = 0.15025 mol

Mass of urea = 0.15025 × 60 = 9.015 g ≈ 9.02 g
```
</details>

---

**Q5.** Two solutions have osmotic pressures π₁ = 3 atm and π₂ = 5 atm at the same temperature. When mixed in equal volumes, what is the osmotic pressure of the mixture?

<details>
<summary>Solution ▼</summary>

```
π = CRT → C = π/RT

C₁ = π₁/RT = 3/RT
C₂ = π₂/RT = 5/RT

After mixing equal volumes V:
Total moles = C₁V + C₂V = (C₁ + C₂)V
Total volume = 2V

C_mix = (C₁ + C₂)/2 = (3/RT + 5/RT)/2 = 4/RT

π_mix = C_mix × RT = (4/RT) × RT = 4 atm
```
</details>

---

### 🟡 Section B: Chemical Kinetics

---

**Q6.** In the reaction `2H₂O₂ → 2H₂O + O₂`, the rate of decomposition of H₂O₂ is 0.04 mol/L/s. Find the rate of formation of O₂.

<details>
<summary>Solution ▼</summary>

```
Rate = -(1/2) d[H₂O₂]/dt = +(1/1) d[O₂]/dt

Rate of decomposition of H₂O₂ = 0.04 mol/L/s
⟹ -d[H₂O₂]/dt = 0.04 mol/L/s

Rate of formation of O₂:
d[O₂]/dt = (1/2) × 0.04 = 0.02 mol/L/s
```
</details>

---

**Q7.** For a first order reaction, the initial concentration of reactant is 0.5 mol/L. After 20 minutes, the concentration is 0.25 mol/L. Find (a) the rate constant k, and (b) the concentration after 60 minutes.

<details>
<summary>Solution ▼</summary>

```
(a) For first order: t½ = ln2/k
Since concentration halved in 20 min: t½ = 20 min

k = 0.693/20 = 0.03465 min⁻¹

(b) Using: [A] = [A]₀ × e^(-kt)
After 60 min (= 3 half-lives):
[A] = 0.5 × (1/2)³ = 0.5/8 = 0.0625 mol/L
```
</details>

---

**Q8.** The following data was obtained for the reaction `A + B → Products`:

| Experiment | [A] (M) | [B] (M) | Rate (M/s) |
|------------|---------|---------|------------|
| 1 | 0.1 | 0.1 | 2.0 × 10⁻⁴ |
| 2 | 0.2 | 0.1 | 4.0 × 10⁻⁴ |
| 3 | 0.1 | 0.2 | 8.0 × 10⁻⁴ |

Find the order with respect to each reactant and the rate constant.

<details>
<summary>Solution ▼</summary>

```
Rate = k[A]^m[B]^n

Order with respect to A (experiments 1 & 2, [B] constant):
4.0×10⁻⁴ / 2.0×10⁻⁴ = (0.2/0.1)^m
2 = 2^m → m = 1 (first order in A)

Order with respect to B (experiments 1 & 3, [A] constant):
8.0×10⁻⁴ / 2.0×10⁻⁴ = (0.2/0.1)^n
4 = 2^n → n = 2 (second order in B)

Overall order = 1 + 2 = 3

Rate constant k (from Experiment 1):
2.0×10⁻⁴ = k × (0.1)¹ × (0.1)²
2.0×10⁻⁴ = k × 0.001
k = 0.2 L²·mol⁻²·s⁻¹
```
</details>

---

### 🔴 Section C: Chemical Equilibrium

---

**Q9.** At 500°C, the equilibrium constant Kc for `H₂ + I₂ ⇌ 2HI` is 49. If 1 mol H₂ and 1 mol I₂ are placed in a 1 L vessel, find the equilibrium concentrations of all species.

<details>
<summary>Solution ▼</summary>

```
H₂ + I₂ ⇌ 2HI
Initial:  1     1      0   (mol/L)
Change:  -x    -x    +2x
Equil:  1-x   1-x    2x

Kc = [HI]² / [H₂][I₂]
49 = (2x)² / (1-x)²
7 = 2x/(1-x)    (taking square root)
7(1-x) = 2x
7 - 7x = 2x
7 = 9x
x = 7/9 = 0.778

[H₂] = [I₂] = 1 - 0.778 = 0.222 mol/L
[HI] = 2 × 0.778 = 1.556 mol/L

Verification: (1.556)² / (0.222)² = 2.42 / 0.049 ≈ 49 ✓
```
</details>

---

**Q10.** For `PCl₅ ⇌ PCl₃ + Cl₂`, the degree of dissociation is 0.4 at 1 atm. Calculate Kp, Kc, and Kx at 500 K.

<details>
<summary>Solution ▼</summary>

```
α = 0.4, P = 1 atm, Δn = 1

ICE (1 mole PCl₅ initially):
PCl₅: 1-α = 0.6
PCl₃: α = 0.4
Cl₂: α = 0.4
Total: 1+α = 1.4

Mole fractions:
X(PCl₅) = 0.6/1.4
X(PCl₃) = X(Cl₂) = 0.4/1.4

Kx = X(PCl₃)×X(Cl₂) / X(PCl₅)
   = (0.4/1.4)(0.4/1.4) / (0.6/1.4)
   = (0.16/1.96) / (0.6/1.4)
   = (0.16/1.96) × (1.4/0.6)
   = 0.224/1.176 = 0.1905

Kp = Kx × P^Δn = 0.1905 × 1 = 0.1905 atm
   Or: Kp = α²P / (1-α²) = 0.16×1 / (1-0.16) = 0.16/0.84 = 0.190

Kc = Kp / (RT) = 0.1905 / (0.0821 × 500)
   = 0.1905 / 41.05 = 0.00464 mol/L
```
</details>

---

## 4. References

### Textbooks

1. **Atkins, P. & de Paula, J.** (2014). *Atkins' Physical Chemistry* (10th ed.). Oxford University Press.
2. **Chang, R. & Goldsby, K.** (2016). *Chemistry* (12th ed.). McGraw-Hill Education.
3. **Castellan, G.W.** (1983). *Physical Chemistry* (3rd ed.). Addison-Wesley.
4. **Maron, S.H. & Lando, J.B.** (1974). *Fundamentals of Physical Chemistry*. Macmillan.
5. **Kapoor, K.L.** (2015). *A Textbook of Physical Chemistry*, Vol. 2 (Solutions). Macmillan India.

### Online Resources

6. **NCERT Chemistry Class XII** – Chapter 2 (Solutions) & Chapter 3 (Electrochemistry). Available at: https://ncert.nic.in
7. **LibreTexts Chemistry** – Colligative Properties. Available at: https://chem.libretexts.org
8. **Khan Academy** – Chemical Kinetics & Equilibrium. Available at: https://www.khanacademy.org/science/ap-chemistry
9. **Royal Society of Chemistry** – LearnChemistry Resources. Available at: https://edu.rsc.org
10. **Journal of Chemical Education** – "Raoult's Law and Colligative Properties" (ACS Publications)

### Image Sources

- Figure 1: Wikimedia Commons – [Raoult's Law SVG](https://commons.wikimedia.org/wiki/File:Raoult_law_1.svg) (CC BY-SA)
- Figure 2: Wikimedia Commons – [Positive deviation from Raoult's Law](https://commons.wikimedia.org/wiki/File:Raoult_positive.svg) (CC BY-SA)
- Figure 3: Wikimedia Commons – [Boiling point elevation diagram](https://commons.wikimedia.org/wiki/File:Boiling_point_elevation_osm.svg) (CC BY-SA)
- Figure 4: Wikimedia Commons – [Freezing point depression phase diagram](https://commons.wikimedia.org/wiki/File:Freezing_point_depression_osm.svg) (CC BY-SA)
- Figure 5: Wikimedia Commons – [Osmosis diagram](https://commons.wikimedia.org/wiki/File:Osmosis_diagram.svg) (CC BY-SA)

---

## 📝 Quick Reference Summary

```
COLLIGATIVE PROPERTIES
──────────────────────────────────────────
Raoult's Law:         Pₛ = P° × X₁
Rel. Lowering VP:     (P° - Pₛ)/P° = X₂
Boiling Pt Elev.:     ΔTb = Kb × m
Freezing Pt Dep.:     ΔTf = Kf × m
Osmotic Pressure:     π = CRT = nRT/V

KINETICS
──────────────────────────────────────────
Rate:                 Rate = k[A]^m[B]^n
1st order t½:         t½ = 0.693/k
1st order:            ln[A] = ln[A]₀ - kt

EQUILIBRIUM
──────────────────────────────────────────
Kc:                   [products]^p / [reactants]^r
Kp = Kc(RT)^Δn
Kx = Kc(RT/P)^Δn
```

---

*Document compiled for university chemistry coursework and reference. All derivations are based on standard thermodynamic and kinetic principles. For corrections or contributions, please open a GitHub issue.*
