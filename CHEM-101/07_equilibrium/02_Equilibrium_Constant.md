# Equilibrium Constant
*Date: April 10, 2026*
*Course: Chemical Equilibrium | University-Level Chemistry*

---

## Table of Contents
1. [Definition](#1-definition)
2. [Types of Equilibrium Constants](#2-types-of-equilibrium-constants)
3. [Expression for $K_c$](#3-expression-for-k_c)
4. [Expression for $K_p$](#4-expression-for-k_p)
5. [Relationship Between $K_c$ and $K_p$](#5-relationship-between-k_c-and-k_p)
6. [Thermodynamic Equilibrium Constant $K^\circ$](#6-thermodynamic-equilibrium-constant-k)
7. [Properties of the Equilibrium Constant](#7-properties-of-the-equilibrium-constant)
8. [Magnitude of K and Extent of Reaction](#8-magnitude-of-k-and-extent-of-reaction)
9. [Reaction Quotient Q and Predicting Direction](#9-reaction-quotient-q-and-predicting-direction)
10. [Relationship Between K and Gibbs Free Energy](#10-relationship-between-k-and-gibbs-free-energy)
11. [Worked Examples](#11-worked-examples)
12. [References](#12-references)

---

## 1. Definition

The **Equilibrium Constant** ($K$) is a dimensionless numerical value that quantifies the ratio of the concentrations (or partial pressures) of products to reactants at **chemical equilibrium** at a given temperature, each raised to the power of its stoichiometric coefficient.

> **Key Principle:** $K$ is **constant** at a fixed temperature for a given reaction, regardless of the initial concentrations of reactants or products, or the direction from which equilibrium is approached.

At equilibrium for:

$$aA + bB \rightleftharpoons cC + dD$$

$$K = \frac{[\text{products}]^{\text{stoich. coeff.}}}{[\text{reactants}]^{\text{stoich. coeff.}}}$$

---

## 2. Types of Equilibrium Constants

| Symbol | Name | Based On |
|--------|------|----------|
| $K_c$ | Concentration equilibrium constant | Molar concentrations (mol L⁻¹) |
| $K_p$ | Pressure equilibrium constant | Partial pressures (atm or Pa) |
| $K_x$ | Mole fraction equilibrium constant | Mole fractions |
| $K^\circ$ | Thermodynamic equilibrium constant | Activities (dimensionless) |
| $K_a$ | Acid dissociation constant | Concentration (special case) |
| $K_b$ | Base dissociation constant | Concentration (special case) |
| $K_{sp}$ | Solubility product | Concentration (special case) |

---

## 3. Expression for $K_c$

For the reaction:

$$aA + bB \rightleftharpoons cC + dD$$

$$\boxed{K_c = \frac{[C]^c \, [D]^d}{[A]^a \, [B]^b}}$$

Where $[X]$ denotes the **equilibrium molar concentration** of species $X$ in mol L⁻¹.

### Rules for Writing $K_c$:

1. **Products appear in the numerator**, reactants in the denominator.
2. **Stoichiometric coefficients** become exponents.
3. **Pure solids and pure liquids** are excluded (their activity = 1).
4. The expression is valid **only at equilibrium**.
5. $K_c$ depends **only on temperature**, not on concentration or pressure.

### Example — Synthesis of SO₃:

$$2\text{SO}_2(g) + \text{O}_2(g) \rightleftharpoons 2\text{SO}_3(g)$$

$$K_c = \frac{[\text{SO}_3]^2}{[\text{SO}_2]^2 [\text{O}_2]}$$

---

## 4. Expression for $K_p$

For gas-phase reactions, the equilibrium constant can be expressed in terms of **partial pressures**:

$$\boxed{K_p = \frac{(p_C)^c \, (p_D)^d}{(p_A)^a \, (p_B)^b}}$$

Where $p_X$ is the **partial pressure** of gas $X$ at equilibrium (in atm, or relative to standard pressure $p^\circ = 1 \text{ atm}$).

### Example — Haber Process:

$$\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)$$

$$K_p = \frac{(p_{\text{NH}_3})^2}{(p_{\text{N}_2})(p_{\text{H}_2})^3}$$

---

## 5. Relationship Between $K_c$ and $K_p$

Using the ideal gas law, $pV = nRT$, the partial pressure of a gas is:

$$p_X = [X] \cdot RT$$

Substituting into $K_p$:

$$K_p = K_c \cdot (RT)^{\Delta n}$$

$$\boxed{K_p = K_c (RT)^{\Delta n}}$$

Where:
- $R = 0.0821 \text{ L atm mol}^{-1} \text{K}^{-1}$ (or $8.314 \text{ J mol}^{-1} \text{K}^{-1}$ if pressures in Pa)
- $T$ = absolute temperature in Kelvin
- $\Delta n = \text{(moles of gaseous products)} - \text{(moles of gaseous reactants)}$

### Three Cases:

| $\Delta n$ | Relationship |
|------------|-------------|
| $\Delta n = 0$ | $K_p = K_c$ |
| $\Delta n > 0$ | $K_p > K_c$ |
| $\Delta n < 0$ | $K_p < K_c$ |

### Worked Derivation — N₂ + 3H₂ ⇌ 2NH₃:

$$\Delta n = 2 - (1 + 3) = 2 - 4 = -2$$

$$K_p = K_c (RT)^{-2} = \frac{K_c}{(RT)^2}$$

---

## 6. Thermodynamic Equilibrium Constant $K^\circ$

In rigorous thermodynamics, concentrations are replaced by **dimensionless activities**:

$$a_X = \frac{[X]}{c^\circ} \quad \text{(for solutes, } c^\circ = 1 \text{ mol/L)}$$

$$a_X = \frac{p_X}{p^\circ} \quad \text{(for gases, } p^\circ = 1 \text{ atm or 1 bar)}$$

The **thermodynamic equilibrium constant** is:

$$K^\circ = \frac{(a_C)^c (a_D)^d}{(a_A)^a (a_B)^b}$$

For ideal systems, $K^\circ = K_c$ (when all concentrations referenced to 1 mol/L) or $K^\circ = K_p$ (when all pressures referenced to 1 bar). This is why $K$ is strictly dimensionless.

---

## 7. Properties of the Equilibrium Constant

### 7.1 Effect of Reversing a Reaction

If the **reaction is reversed**, $K$ becomes its reciprocal:

For $aA + bB \rightleftharpoons cC + dD$, $K_1 = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}$

For $cC + dD \rightleftharpoons aA + bB$, $K_2 = \dfrac{[A]^a[B]^b}{[C]^c[D]^d} = \dfrac{1}{K_1}$

$$\boxed{K_{\text{reverse}} = \frac{1}{K_{\text{forward}}}}$$

### 7.2 Effect of Multiplying Stoichiometry by a Factor $n$

If all coefficients are multiplied by $n$:

$$K_{\text{new}} = (K_{\text{original}})^n$$

### 7.3 Adding Reactions (Hess's Law for K)

For reactions added in series:

$$K_{\text{overall}} = K_1 \times K_2 \times K_3 \cdots$$

### 7.4 Temperature Dependence

$K$ depends **only on temperature**, governed by the **van't Hoff equation**:

$$\frac{d(\ln K)}{dT} = \frac{\Delta H^\circ}{RT^2}$$

Integrated form (between $T_1$ and $T_2$):

$$\ln \frac{K_2}{K_1} = -\frac{\Delta H^\circ}{R} \left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

---

## 8. Magnitude of K and Extent of Reaction

The magnitude of $K$ directly indicates how far a reaction proceeds toward completion:

| Value of $K$ | Interpretation |
|-------------|---------------|
| $K \gg 1$ (e.g., $> 10^3$) | Equilibrium lies far to the **right** (products favoured) |
| $K \approx 1$ | Significant amounts of **both** reactants and products |
| $K \ll 1$ (e.g., $< 10^{-3}$) | Equilibrium lies far to the **left** (reactants favoured) |

### Visual Representation:

```
Reactants ◄────────────── K << 1
                 K ≈ 1
Products  ──────────────► K >> 1
```

---

## 9. Reaction Quotient Q and Predicting Direction

The **Reaction Quotient** ($Q$) has the same mathematical form as $K_c$, but uses **non-equilibrium** concentrations:

$$Q_c = \frac{[C]^c [D]^d}{[A]^a [B]^b} \quad \text{(at any point in time)}$$

### Comparing Q and K:

| Condition | Meaning | Direction of Reaction |
|-----------|---------|----------------------|
| $Q < K$ | Too many reactants | Reaction proceeds **forward** (→) |
| $Q = K$ | System is at equilibrium | **No net change** |
| $Q > K$ | Too many products | Reaction proceeds **backward** (←) |

---

## 10. Relationship Between K and Gibbs Free Energy

The equilibrium constant is fundamentally linked to **Gibbs free energy** ($\Delta G$):

$$\Delta G = \Delta G^\circ + RT \ln Q$$

At equilibrium, $\Delta G = 0$ and $Q = K$:

$$0 = \Delta G^\circ + RT \ln K$$

$$\boxed{\Delta G^\circ = -RT \ln K}$$

This equation is one of the most important in chemical thermodynamics:

| $\Delta G^\circ$ | $K$ | Meaning |
|-----------------|-----|---------|
| $\Delta G^\circ < 0$ | $K > 1$ | Products favoured |
| $\Delta G^\circ = 0$ | $K = 1$ | Neither favoured |
| $\Delta G^\circ > 0$ | $K < 1$ | Reactants favoured |

---

## 11. Worked Examples

### Example 11.1 — Calculate $K_c$

At 500°C, the following equilibrium concentrations are measured:

$$\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)$$

| Species | Equilibrium Concentration |
|---------|--------------------------|
| N₂      | 0.50 mol/L               |
| H₂      | 0.75 mol/L               |
| NH₃     | 0.10 mol/L               |

$$K_c = \frac{[\text{NH}_3]^2}{[\text{N}_2][\text{H}_2]^3} = \frac{(0.10)^2}{(0.50)(0.75)^3}$$

$$= \frac{0.010}{(0.50)(0.4219)} = \frac{0.010}{0.2109} = \boxed{0.047}$$

---

### Example 11.2 — Calculate $K_p$ from $K_c$

For the above reaction at 500°C ($T = 773$ K):

$$\Delta n = 2 - (1 + 3) = -2$$

$$K_p = K_c (RT)^{\Delta n} = 0.047 \times (0.0821 \times 773)^{-2}$$

$$= 0.047 \times (63.46)^{-2} = 0.047 \times \frac{1}{4027.2} = \boxed{1.17 \times 10^{-5} \text{ atm}^{-2}}$$

---

### Example 11.3 — Predicting Direction Using Q

For the reaction: $\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)$, $K_c = 55.6$ at 425°C.

Initial concentrations: $[\text{H}_2] = 0.10$ mol/L, $[\text{I}_2] = 0.10$ mol/L, $[\text{HI}] = 0.50$ mol/L.

$$Q_c = \frac{(0.50)^2}{(0.10)(0.10)} = \frac{0.25}{0.01} = 25$$

Since $Q_c = 25 < K_c = 55.6$, the reaction proceeds **forward** to produce more HI.

---

### Example 11.4 — Using $\Delta G^\circ = -RT \ln K$

For a reaction at 298 K, $K = 1.8 \times 10^{-5}$.

$$\Delta G^\circ = -(8.314)(298) \ln(1.8 \times 10^{-5})$$

$$= -(2477.6) \times (-10.93) = +27,073 \text{ J/mol} = \boxed{+27.1 \text{ kJ/mol}}$$

The positive $\Delta G^\circ$ confirms reactants are favoured.

---

## 12. References

1. Atkins, P. & de Paula, J. (2014). *Physical Chemistry* (10th ed.). Oxford University Press. Chapter 6.
2. Zumdahl, S.S. & Zumdahl, S.A. (2014). *Chemistry* (9th ed.). Cengage Learning.
3. Chang, R. & Goldsby, K. (2016). *Chemistry* (12th ed.). McGraw-Hill. Chapter 14.
4. [ChemLibreTexts — The Equilibrium Constant](https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/15%3A_Chemical_Equilibrium/15.02%3A_The_Equilibrium_Constant)
5. [Khan Academy — Equilibrium Constant](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:equilibrium/x2eef969c74e0d802:equilibrium-constant/a/calculating-keq)
6. [NIST WebBook — Equilibrium Constants](https://webbook.nist.gov/)
7. Levine, I.N. (2009). *Physical Chemistry* (6th ed.). McGraw-Hill.

---

*File: `02_Equilibrium_Constant.md` | Topic: Chemical Equilibrium | Contributor: x86 Team*
