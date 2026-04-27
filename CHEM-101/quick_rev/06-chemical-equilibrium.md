---
title: "Chemical Equilibrium"
course: CHEM-102
topic: 06
tags: [chemistry, chemical-equilibrium, Kc, Kp, Kx, Le-Chatelier, law-of-mass-action, butex]
---

# Chapter 6 — Chemical Equilibrium

> **Syllabus Coverage:** Law of mass action · Equilibrium constants Kc, Kp, Kx · Relationships · Degree of dissociation · Le Chatelier's principle · Dynamic equilibrium · Activity

---

## Table of Contents
1. [Chemical Equilibrium — Introduction](#1-chemical-equilibrium--introduction)
2. [Law of Mass Action](#2-law-of-mass-action)
3. [Equilibrium Constants — Kc, Kp, Kx](#3-equilibrium-constants--kc-kp-kx)
4. [Relationship Between Kp, Kc, and Kx](#4-relationship-between-kp-kc-and-kx)
5. [Calculations with Equilibrium Constants](#5-calculations-with-equilibrium-constants)
6. [Degree of Dissociation (α)](#6-degree-of-dissociation-α)
7. [Le Chatelier's Principle](#7-le-chateliers-principle)
8. [Dynamic Equilibrium](#8-dynamic-equilibrium)
9. [Activity and Activity Coefficient](#9-activity-and-activity-coefficient)
10. [Practice Questions](#practice-questions)
11. [References](#references)

---

## 1. Chemical Equilibrium — Introduction

### 1.1 Definition

**Chemical equilibrium** is the state of a reversible reaction where the **rate of the forward reaction equals the rate of the reverse reaction**, and the concentrations of reactants and products remain **constant over time** (but not necessarily equal).

$$\text{Reactants} \underset{k_r}{\stackrel{k_f}{\rightleftharpoons}} \text{Products}$$

At equilibrium: $k_f[\text{Reactants}] = k_r[\text{Products}]$

### 1.2 Dynamic Equilibrium

At equilibrium, the reaction does **not stop** — it is a dynamic state:
- Forward reaction continues at rate $r_f$
- Reverse reaction continues at rate $r_r$
- $r_f = r_r$ → **net change = 0**, but both processes occur simultaneously

**Proof of dynamic nature:**
Using radioactive isotopes: if ³¹P is added to a PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) equilibrium at equilibrium, ³¹P appears in both PCl₃ and Cl₂ over time — proving the reaction is still occurring in both directions.

```
Rate
 ↑   |                    ← rf (forward rate)
     |  \
     |   \
     |    \             ____ rf = rr (equilibrium)
     |     \           /
     |      \         /
     |       \       /  ← rr (reverse rate)
     |        \     /
     |         \   /
     |          \_/
     +------------------→ Time
     ^
   start
```

---

## 2. Law of Mass Action

**Proposed by:** Guldberg and Waage (1864)

> *"The rate of a chemical reaction is proportional to the product of the molar concentrations of the reactants, each raised to a power equal to its stoichiometric coefficient in the balanced equation."*

For a general reaction:
$$aA + bB \rightleftharpoons cC + dD$$

**Forward rate:** $r_f = k_f[A]^a[B]^b$  
**Reverse rate:** $r_r = k_r[C]^c[D]^d$

At equilibrium, $r_f = r_r$:
$$k_f[A]^a[B]^b = k_r[C]^c[D]^d$$

$$K_c = \frac{k_f}{k_r} = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

---

## 3. Equilibrium Constants — Kc, Kp, Kx

### 3.1 Kc (Concentration Equilibrium Constant)

$$K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

Units depend on reaction (often written as dimensionless by using standard concentrations).

### 3.2 Kp (Pressure Equilibrium Constant)

Expressed in terms of **partial pressures** for gas-phase reactions:

$$K_p = \frac{p_C^c \cdot p_D^d}{p_A^a \cdot p_B^b}$$

### 3.3 Kx (Mole Fraction Equilibrium Constant)

Expressed in terms of **mole fractions**:

$$K_x = \frac{x_C^c \cdot x_D^d}{x_A^a \cdot x_B^b}$$

### 3.4 Notes on Equilibrium Expressions

- **Pure solids and pure liquids** are excluded (their concentration = constant = 1)
- Example: CaCO₃(s) ⇌ CaO(s) + CO₂(g)

$$K_p = p_{CO_2} \quad \text{(only gas included)}$$

$$K_c = [CO_2]$$

- **Large K** → products favoured at equilibrium
- **Small K** → reactants favoured at equilibrium
- **K = 1** → roughly equal amounts of products and reactants

---

## 4. Relationship Between Kp, Kc, and Kx

### 4.1 Kp and Kc

Using ideal gas law: $p_i = \frac{n_i RT}{V} = [i]RT$

For reaction aA + bB ⇌ cC + dD:

$$K_p = K_c \cdot (RT)^{\Delta n}$$

Where:
$$\Delta n = (c + d) - (a + b) = \text{moles of gaseous products} - \text{moles of gaseous reactants}$$

$$\boxed{K_p = K_c(RT)^{\Delta n}}$$

**Cases:**
- $\Delta n = 0$: $K_p = K_c$ (e.g., H₂ + I₂ ⇌ 2HI, Δn = 2−2 = 0)
- $\Delta n > 0$: $K_p > K_c$
- $\Delta n < 0$: $K_p < K_c$

### 4.2 Kp and Kx

Since $p_i = x_i \cdot P_{total}$ (Dalton's law):

$$K_p = K_x \cdot P^{\Delta n}$$

$$\boxed{K_x = K_p \cdot P^{-\Delta n} = \frac{K_p}{P^{\Delta n}}}$$

### 4.3 Kc and Kx

$$K_c = K_x \cdot \left(\frac{P}{RT}\right)^{\Delta n}$$

### 4.4 Prove Kc = Kp = Kx when Δn = 0

When $\Delta n = 0$:
$$K_p = K_c(RT)^0 = K_c$$
$$K_x = K_p \cdot P^{0} = K_p$$

$$\therefore K_c = K_p = K_x \text{ when } \Delta n = 0$$ ✓

**Example:** H₂(g) + I₂(g) ⇌ 2HI(g), Δn = 2 − 2 = **0**

$$K_c = K_p = K_x$$

---

## 5. Calculations with Equilibrium Constants

### 5.1 Calculate Kp for: 2N₂O₅(g) ⇌ 4NO₂(g) + O₂(g)

Δn = (4 + 1) − 2 = **3**

$$K_p = K_c(RT)^3$$

If Kc = 0.0025 at 300 K:
$$K_p = 0.0025 \times (0.0821 \times 300)^3 = 0.0025 \times (24.63)^3 = 0.0025 \times 14930 = 37.3 \text{ atm}^3$$

### 5.2 Calculate Kp for: CaCO₃(s) ⇌ CaO(s) + CO₂(g)

- Solid species excluded from equilibrium expression
- Only CO₂ is a gas
- Δn = 1 − 0 = **1** (1 mole gas product, 0 moles gas reactant)

$$K_p = p_{CO_2}$$

$$K_c = [CO_2] = \frac{K_p}{RT}$$

### 5.3 Calculate Kx for: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) at P = 10 atm

Δn = 2 − (1 + 3) = **−2**

$$K_x = \frac{K_p}{P^{\Delta n}} = K_p \cdot P^2$$

$$K_x = K_p \times (10)^2 = 100 K_p$$

---

## 6. Degree of Dissociation (α)

**Degree of dissociation (α)** = fraction of initial molecules that dissociate at equilibrium.

$$\alpha = \frac{\text{moles dissociated}}{\text{initial moles}} \quad (0 \leq \alpha \leq 1)$$

### 6.1 PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)

Let initial moles of PCl₅ = 1, degree of dissociation = α

| Species | Initial | Equilibrium |
|---------|---------|------------|
| PCl₅ | 1 | 1 − α |
| PCl₃ | 0 | α |
| Cl₂ | 0 | α |
| **Total** | **1** | **1 + α** |

Mole fractions:
$$x_{PCl_5} = \frac{1-\alpha}{1+\alpha}, \quad x_{PCl_3} = x_{Cl_2} = \frac{\alpha}{1+\alpha}$$

Partial pressures ($p_i = x_i P$):

$$K_p = \frac{p_{PCl_3} \cdot p_{Cl_2}}{p_{PCl_5}} = \frac{\left(\frac{\alpha}{1+\alpha}P\right)^2}{\frac{1-\alpha}{1+\alpha}P} = \frac{\alpha^2 P}{1 - \alpha^2}$$

For small α:
$$K_p \approx \alpha^2 P$$

$$\alpha \approx \sqrt{\frac{K_p}{P}} \propto \frac{1}{\sqrt{P}}$$

**∴ Degree of dissociation decreases with increasing pressure** (as expected from Le Chatelier's principle — dissociation produces more moles of gas).

### 6.2 N₂(g) + 3H₂(g) ⇌ 2NH₃(g)

Let α = degree of dissociation of N₂. Starting with 1 mol N₂, 3 mol H₂:

| Species | Initial | Equilibrium |
|---------|---------|------------|
| N₂ | 1 | 1 − α |
| H₂ | 3 | 3 − 3α |
| NH₃ | 0 | 2α |
| Total | 4 | 4 − 2α |

$$K_p = \frac{x_{NH_3}^2}{x_{N_2} \cdot x_{H_2}^3} \cdot P^{-2}$$

This can be simplified to show α depends on both Kp and P.

---

## 7. Le Chatelier's Principle

**Stated by:** Henry Louis Le Chatelier (1888); also independently by Karl Ferdinand Braun.

> *"If a system at equilibrium is subjected to a stress (change in conditions), the equilibrium will shift in the direction that tends to counteract or relieve that stress."*

### 7.1 Effect of Concentration Change

| Change | Equilibrium shifts |
|-------|------------------|
| Add reactant | Toward products (forward) |
| Remove reactant | Toward reactants (reverse) |
| Add product | Toward reactants (reverse) |
| Remove product | Toward products (forward) |

**Example:** N₂ + 3H₂ ⇌ 2NH₃

Adding N₂ → forward reaction favoured → more NH₃ produced

### 7.2 Effect of Pressure Change (Gas-phase reactions)

| Change | Equilibrium shifts | Condition |
|-------|------------------|-----------|
| Increase P | Toward side with fewer moles of gas | Δn ≠ 0 |
| Decrease P | Toward side with more moles of gas | Δn ≠ 0 |
| Increase/Decrease P | No shift | Δn = 0 |

**Example:** N₂ + 3H₂ ⇌ 2NH₃ (Δn = 2 − 4 = −2)

Increasing P → shifts toward fewer moles → toward products → more NH₃

**Example:** PCl₅ ⇌ PCl₃ + Cl₂ (Δn = +1)

Increasing P → shifts toward fewer moles → toward PCl₅ (reverse) → less dissociation

### 7.3 Effect of Temperature Change

| Change | Equilibrium shifts | Note |
|-------|------------------|------|
| Increase T | Toward endothermic direction | Absorbs heat to counteract |
| Decrease T | Toward exothermic direction | Releases heat to counteract |

- **K changes with temperature** (unlike K changes with pressure for ideal gases)
- Exothermic reaction: increasing T → K decreases
- Endothermic reaction: increasing T → K increases

**Example:** N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ/mol (exothermic)

Increasing T → favors reverse (endothermic) → less NH₃ at equilibrium

*Note: Temperature increase always increases rate but may decrease yield for exothermic reactions.*

### 7.4 Effect of Adding Inert Gas

- At **constant volume**: No effect (concentrations and partial pressures of reactants unchanged)
- At **constant pressure**: Shifts toward more moles of gas (partial pressures decrease → system tries to restore)

### 7.5 Effect of Catalyst

- **No effect on equilibrium position or K**
- Catalyst lowers activation energy → increases rates of both forward and reverse equally → equilibrium reached **faster** but at same position

### 7.6 Summary Table

| Stress | Shift | Effect on K |
|--------|-------|------------|
| Increase [reactant] | Forward | None |
| Increase P (Δn < 0) | Forward (toward products) | None |
| Increase T (exothermic) | Reverse | K decreases |
| Increase T (endothermic) | Forward | K increases |
| Add catalyst | None | None |

---

## 8. Dynamic Equilibrium

Dynamic equilibrium is confirmed by:

1. **Isotope labeling experiments:** In the esterification equilibrium:
$$\text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH} \rightleftharpoons \text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O}$$
Adding ¹⁸O-labelled ethanol shows ¹⁸O appears in ester even at equilibrium.

2. **N₂O₄ ⇌ 2NO₂ color experiment:** The brown color (NO₂) does not disappear at equilibrium — both dissociation and association occur continuously.

3. **Rate measurements:** Forward and reverse rates can be measured separately and are indeed equal at equilibrium.

---

## 9. Activity and Activity Coefficient

### 9.1 Activity (a)

**Activity** is an effective (thermodynamic) concentration that accounts for non-ideal behavior.

$$a_i = \gamma_i \cdot \frac{C_i}{C^0}$$

Where:
- $\gamma_i$ = activity coefficient (dimensionless)
- $C_i$ = molar concentration of species i
- $C^0$ = standard concentration (1 mol/L)

**For ideal solutions:** $\gamma_i = 1$, so $a_i = C_i/C^0$

**For pure solids/liquids:** $a = 1$ (by convention)

### 9.2 Thermodynamic Equilibrium Constant (K)

$$K = \frac{a_C^c \cdot a_D^d}{a_A^a \cdot a_B^b}$$

This K is truly dimensionless and is the fundamental equilibrium constant.

### 9.3 Activity Coefficient (γ)

- For ideal/dilute solutions: γ → 1
- For concentrated/non-ideal solutions: γ ≠ 1
- γ < 1: negative deviation (attractive interactions)
- γ > 1: positive deviation (repulsive interactions)

Activity coefficients are calculated using the Debye-Hückel theory for electrolyte solutions:
$$\log \gamma_{\pm} = -A|z_+z_-|\sqrt{I}$$

Where I = ionic strength = $\frac{1}{2}\sum c_i z_i^2$

---

## Practice Questions

### PQ1. For the reaction H₂(g) + I₂(g) ⇌ 2HI(g), Kc = 49.7 at 458°C. If [H₂] = [I₂] = 0.1 M initially, find the equilibrium concentrations.

<details>
<summary>Solution</summary>

Let x = moles per liter of H₂ and I₂ that react.

|  | H₂ | I₂ | 2HI |
|--|----|----|-----|
| Initial | 0.1 | 0.1 | 0 |
| Change | −x | −x | +2x |
| Eq | 0.1−x | 0.1−x | 2x |

$$K_c = \frac{(2x)^2}{(0.1-x)^2} = 49.7$$

$$\frac{2x}{0.1-x} = \sqrt{49.7} = 7.05$$

$$2x = 0.705 - 7.05x$$
$$9.05x = 0.705$$
$$x = 0.0779 \text{ M}$$

Equilibrium concentrations:
- [H₂] = [I₂] = 0.1 − 0.0779 = **0.0221 M**
- [HI] = 2 × 0.0779 = **0.156 M**

</details>

---

### PQ2. Explain, using Le Chatelier's principle, why the Haber process uses high pressure and moderate temperature for ammonia synthesis.

<details>
<summary>Solution</summary>

**Reaction:** N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ/mol

**High pressure:**
- Δn = 2 − 4 = −2 (fewer moles on right)
- Le Chatelier: Increasing pressure shifts equilibrium toward fewer moles → toward products → more NH₃ ✓
- Industrial: 150–300 atm used

**Moderate temperature (~450°C):**
- Reaction is exothermic (ΔH < 0)
- Increasing T shifts equilibrium backward (toward reactants) → less NH₃ thermodynamically
- But very low T → reaction is too slow (kinetic barrier)
- Compromise: moderate T (~450°C) gives acceptable rate with acceptable yield

**Catalyst (Fe):**
- Does not shift equilibrium
- Increases rate so equilibrium is reached faster at the moderate temperature

</details>

---

### PQ3. If Kc for N₂O₄ ⇌ 2NO₂ is 4.64 × 10⁻³ at 25°C, find Kp. (R = 0.0821 L·atm·mol⁻¹·K⁻¹)

<details>
<summary>Solution</summary>

$$\Delta n = 2 - 1 = 1$$

$$K_p = K_c (RT)^{\Delta n} = 4.64 \times 10^{-3} \times (0.0821 \times 298)^1$$

$$K_p = 4.64 \times 10^{-3} \times 24.47 = 0.1135 \text{ atm}$$

</details>

---

### PQ4. For PCl₅ ⇌ PCl₃ + Cl₂, if α = 0.6 at P = 1 atm, calculate Kp.

<details>
<summary>Solution</summary>

$$K_p = \frac{\alpha^2 P}{1 - \alpha^2} = \frac{(0.6)^2 \times 1}{1 - (0.6)^2} = \frac{0.36}{1 - 0.36} = \frac{0.36}{0.64} = 0.5625 \text{ atm}$$

</details>

---

## References

1. Atkins, P. & de Paula, J. (2014). *Atkins' Physical Chemistry* (10th ed.). Oxford University Press.
2. Chang, R. (2016). *Chemistry* (12th ed.). McGraw-Hill.
3. Levine, I.N. (2014). *Physical Chemistry* (6th ed.). McGraw-Hill.
4. Le Chatelier, H.L. (1888). "Sur un énoncé général des lois des équilibres chimiques." *Comptes rendus de l'Académie des sciences*, 99, 786–789.
5. LibreTexts — Chemical Equilibrium: https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/15%3A_Chemical_Equilibrium

---

*Last updated: 2025 | BUTEX — CHEM-102 | Level 1, Term 1*
