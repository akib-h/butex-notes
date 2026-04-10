# Law of Mass Action
*Date: April 10, 2026*
*Course: Chemical Equilibrium | University-Level Chemistry*

---

## Table of Contents
1. [Historical Background](#1-historical-background)
2. [Statement of the Law](#2-statement-of-the-law)
3. [Mathematical Formulation](#3-mathematical-formulation)
4. [Active Mass (Molar Concentration)](#4-active-mass-molar-concentration)
5. [Rate Expressions from the Law](#5-rate-expressions-from-the-law)
6. [Derivation of Equilibrium from Rate Laws](#6-derivation-of-equilibrium-from-rate-laws)
7. [Limitations of the Law of Mass Action](#7-limitations-of-the-law-of-mass-action)
8. [Worked Examples](#8-worked-examples)
9. [References](#9-references)

---

## 1. Historical Background

The **Law of Mass Action** was formulated in **1864** by two Norwegian scientists:

- **Cato Maximilian Guldberg** (mathematician)
- **Peter Waage** (chemist)

Their work, published in Norwegian and later in French (1867) and German (1879), established a quantitative relationship between the concentrations (active masses) of reactants and products and the rate of a chemical reaction. Despite initial neglect by the scientific community, the law was independently corroborated by **Jacobus Henricus van't Hoff** in 1877, cementing its place in chemical thermodynamics.

> **Context:** Before this law, chemists had no systematic way to predict how far a reaction would proceed or how fast it would occur in quantitative terms. Guldberg and Waage bridged this gap.

---

## 2. Statement of the Law

> **"At a constant temperature, the rate of a chemical reaction is directly proportional to the product of the active masses (molar concentrations) of the reactants, each raised to the power of its stoichiometric coefficient in the balanced chemical equation."**

The term **"active mass"** originally referred to what we now call **molar concentration** (mol/L or mol dm⁻³), sometimes denoted with square brackets: `[X]`.

---

## 3. Mathematical Formulation

Consider a general reversible reaction:

$$aA + bB \rightleftharpoons cC + dD$$

Where:
- $A$, $B$ = reactants
- $C$, $D$ = products
- $a$, $b$, $c$, $d$ = stoichiometric coefficients

### 3.1 Rate of Forward Reaction

$$r_f = k_f \cdot [A]^a \cdot [B]^b$$

### 3.2 Rate of Reverse Reaction

$$r_r = k_r \cdot [C]^c \cdot [D]^d$$

Where:
- $k_f$ = rate constant of the forward reaction
- $k_r$ = rate constant of the reverse reaction
- $[A]$, $[B]$, $[C]$, $[D]$ = molar concentrations (active masses) at a given instant

> **Important Note:** The exponents $a$, $b$, $c$, $d$ in the rate expressions above apply strictly when the reaction is **elementary** (occurs in a single step). For complex (multi-step) mechanisms, the exponents are determined experimentally and may differ from stoichiometric coefficients.

---

## 4. Active Mass (Molar Concentration)

**Active mass** is defined as the molar concentration of a species in a reaction mixture:

$$\text{Active mass of } X = [X] = \frac{\text{moles of } X}{\text{volume of solution (in litres)}} \quad \text{(mol L}^{-1}\text{)}$$

### Special Cases for Active Mass:

| Phase | Active Mass |
|-------|-------------|
| Dissolved solute in solution | Molar concentration $[X]$ in mol/L |
| Gas | Partial pressure $p_X$ in atm or Pa (for $K_p$) |
| Pure solid | **Unity (1)** — concentration is constant |
| Pure liquid (solvent) | **Unity (1)** — concentration is constant |

> **Why pure solids/liquids = 1?** Their concentration (density/molar mass) remains constant throughout the reaction and is thus absorbed into the equilibrium constant.

---

## 5. Rate Expressions from the Law

### Example: Decomposition of HI

$$2\text{HI}(g) \rightleftharpoons \text{H}_2(g) + \text{I}_2(g)$$

- Forward rate: $\quad r_f = k_f [\text{HI}]^2$
- Reverse rate: $\quad r_r = k_r [\text{H}_2][\text{I}_2]$

### Example: Synthesis of Ammonia (Haber Process)

$$\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)$$

- Forward rate: $\quad r_f = k_f [\text{N}_2][\text{H}_2]^3$
- Reverse rate: $\quad r_r = k_r [\text{NH}_3]^2$

---

## 6. Derivation of Equilibrium from Rate Laws

At **chemical equilibrium**, the forward and reverse reaction rates are equal:

$$r_f = r_r$$

$$k_f [A]^a [B]^b = k_r [C]^c [D]^d$$

Rearranging:

$$\frac{k_f}{k_r} = \frac{[C]^c [D]^d}{[A]^a [B]^b}$$

Since $k_f$ and $k_r$ are constants at a given temperature, their ratio is also a constant, called the **Equilibrium Constant** $K_c$:

$$\boxed{K_c = \frac{k_f}{k_r} = \frac{[C]^c [D]^d}{[A]^a [B]^b}}$$

This is the fundamental bridge between the **Law of Mass Action** and the **Equilibrium Constant** — the two are inseparable conceptually.

---

## 7. Limitations of the Law of Mass Action

While enormously useful, the law has several limitations that must be understood at the university level:

1. **Applies strictly to elementary reactions only.**
   - For complex reactions, rate orders must be determined experimentally; they do not automatically match stoichiometric coefficients.

2. **Assumes ideal behaviour.**
   - In real systems, especially at high concentrations or pressures, interactions between ions/molecules deviate from ideality. The law uses **concentrations**, but thermodynamically rigorous treatment requires **activities** (see Section below).

3. **Temperature dependence not captured in the equation.**
   - Rate constants $k_f$ and $k_r$ (and therefore $K$) are temperature-dependent (described by the **Arrhenius equation**).

4. **Does not account for the mechanism of reaction.**
   - The law says nothing about *how* the reaction proceeds — it only describes the macroscopic state at equilibrium.

5. **Not applicable to reactions in heterogeneous systems without modification.**
   - Active masses of pure solids and liquids must be set to unity.

### 7.1 Activity vs. Concentration (Thermodynamic Correction)

In rigorous thermodynamics, concentration $[X]$ is replaced by **thermodynamic activity** $a_X$:

$$a_X = \gamma_X \cdot \frac{[X]}{c^\circ}$$

Where:
- $\gamma_X$ = activity coefficient (= 1 for ideal solutions)
- $c^\circ$ = standard concentration (1 mol/L)

For dilute ideal solutions, $\gamma_X \approx 1$, so $a_X \approx [X]$, and the Law of Mass Action holds in its simple form.

---

## 8. Worked Examples

### Example 8.1 — Writing Rate Expressions

**Reaction:**
$$\text{PCl}_5(g) \rightleftharpoons \text{PCl}_3(g) + \text{Cl}_2(g)$$

Write the rate expressions for the forward and reverse reactions.

**Solution:**
- Forward rate: $r_f = k_f [\text{PCl}_5]$
- Reverse rate: $r_r = k_r [\text{PCl}_3][\text{Cl}_2]$

---

### Example 8.2 — Deriving the Equilibrium Constant

**Reaction:**
$$\text{N}_2(g) + \text{O}_2(g) \rightleftharpoons 2\text{NO}(g)$$

At equilibrium, $r_f = r_r$:

$$k_f [\text{N}_2][\text{O}_2] = k_r [\text{NO}]^2$$

$$K_c = \frac{k_f}{k_r} = \frac{[\text{NO}]^2}{[\text{N}_2][\text{O}_2]}$$

---

### Example 8.3 — Numerical Problem

At equilibrium in a 2 L vessel, the following concentrations are measured for:

$$\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)$$

| Species | Moles at Equilibrium |
|---------|---------------------|
| H₂      | 0.50 mol            |
| I₂      | 0.50 mol            |
| HI      | 3.00 mol            |

**Find $K_c$.**

**Solution:**

$$[\text{H}_2] = \frac{0.50}{2} = 0.25 \text{ mol/L}$$

$$[\text{I}_2] = \frac{0.50}{2} = 0.25 \text{ mol/L}$$

$$[\text{HI}] = \frac{3.00}{2} = 1.50 \text{ mol/L}$$

$$K_c = \frac{[\text{HI}]^2}{[\text{H}_2][\text{I}_2]} = \frac{(1.50)^2}{(0.25)(0.25)} = \frac{2.25}{0.0625} = \boxed{36}$$

---

## 9. References

1. Atkins, P. & de Paula, J. (2014). *Physical Chemistry* (10th ed.). Oxford University Press.
2. Chang, R. & Goldsby, K. (2016). *Chemistry* (12th ed.). McGraw-Hill Education.
3. Guldberg, C.M. & Waage, P. (1864/1879). "Studies Concerning Affinity." *Journal of Chemical Education*.
4. [ChemLibreTexts — Law of Mass Action](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/The_Law_of_Mass_Action)
5. [Khan Academy — Equilibrium and the Law of Mass Action](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:equilibrium/x2eef969c74e0d802:equilibrium-constant/a/law-of-mass-action)
6. [NIST Chemistry WebBook](https://webbook.nist.gov/chemistry/)
7. Silbey, R.J., Alberty, R.A., & Bawendi, M.G. (2004). *Physical Chemistry* (4th ed.). Wiley.

---

*File: `01_Law_of_Mass_Action.md` | Topic: Chemical Equilibrium | Contributor: x86 Team*
