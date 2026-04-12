# 07 — Chemical Equilibrium
### Chemistry-I (CHEM 101 / AS 109) | Bangladesh University of Textiles
> **Syllabus coverage:** Law of mass action · Kc & Kp · Relationship between Kc, Kp, Kx · Le Chatelier's principle · Reaction quotient Q · Homogeneous & heterogeneous equilibrium · Contact process

---

## Table of Contents
1. [Chemical Equilibrium — Concept](#1-chemical-equilibrium--concept)
2. [Law of Mass Action & Equilibrium Constant (Kc)](#2-law-of-mass-action--equilibrium-constant-kc)
3. [Equilibrium Constant Kp](#3-equilibrium-constant-kp)
4. [Relation Between Kc, Kp, and Kx](#4-relation-between-kc-kp-and-kx)
5. [Reaction Quotient (Q)](#5-reaction-quotient-q)
6. [Le Chatelier's Principle](#6-le-chateliers-principle)
7. [Homogeneous vs. Heterogeneous Equilibrium](#7-homogeneous-vs-heterogeneous-equilibrium)
8. [Factors Influencing Equilibrium Constant](#8-factors-influencing-equilibrium-constant)
9. [Concentration vs. Time Graphs](#9-concentration-vs-time-graphs)
10. [Exam Questions & Model Answers](#10-exam-questions--model-answers)
11. [Visual Aids](#11-visual-aids)
12. [Practice Questions](#12-practice-questions)
13. [References](#13-references)

---

## 1. Chemical Equilibrium — Concept

**Chemical equilibrium** is the state in a reversible reaction where the **rate of the forward reaction equals the rate of the reverse reaction**, resulting in no net change in the concentrations of reactants or products.

$$A + B \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} C + D$$

At equilibrium: $k_1[A][B] = k_{-1}[C][D]$

### Does Equilibrium Mean Reaction Stops?
**No.** At equilibrium, both forward and reverse reactions continue at equal rates — it is a **dynamic equilibrium**. The macroscopic concentrations appear constant, but the microscopic processes continue.

### Characteristics of Equilibrium
1. Concentrations of reactants and products are constant but not necessarily equal.
2. Can be approached from either direction (from reactants or from products).
3. The state has minimum Gibbs free energy (ΔG = 0 at equilibrium).
4. Applies to closed systems.

---

## 2. Law of Mass Action & Equilibrium Constant (Kc)

### Law of Mass Action (Guldberg & Waage, 1864)
> The rate of a chemical reaction is proportional to the product of the **active masses** (concentrations) of the reacting substances, each raised to the power of its stoichiometric coefficient.

### Equilibrium Constant Kc

For the general reaction: $aA + bB \rightleftharpoons cC + dD$

$$K_c = \frac{[C]^c [D]^d}{[A]^a [B]^b}$$

**Important notes:**
- Pure solids and pure liquids are **excluded** (their activity = 1).
- Kc is **dimensionless** in the thermodynamic sense (activities).
- Kc depends only on **temperature**.

### Magnitude of Kc

| Kc value | Implication |
|----------|-------------|
| Kc >> 1 | Equilibrium favors **products** (reaction goes to completion) |
| Kc << 1 | Equilibrium favors **reactants** (reaction barely occurs) |
| Kc ≈ 1 | Significant amounts of both reactants and products at equilibrium |

### Kc Expressions for Specific Reactions

#### (i) Cu(s) + 2Ag⁺(aq) ⇌ Cu²⁺(aq) + 2Ag(s) *(2018 Q8b)*

$$K_c = \frac{[Cu^{2+}]}{[Ag^+]^2}$$

(Cu(s) and Ag(s) are pure solids → not included)

#### (ii) 2H₂(g) + O₂(g) ⇌ 2H₂O(l) *(2018 Q8b)*

$$K_c = \frac{1}{[H_2]^2 [O_2]}$$

(H₂O is a pure liquid → not included)

---

## 3. Equilibrium Constant Kp

For gas-phase reactions, Kp uses **partial pressures** instead of concentrations:

$$K_p = \frac{P_C^c \cdot P_D^d}{P_A^a \cdot P_B^b}$$

---

## 4. Relation Between Kc, Kp, and Kx

### Kp and Kc Relationship

Using ideal gas law: $PV = nRT \Rightarrow P = \frac{n}{V}RT = [A]RT$

$$K_p = K_c (RT)^{\Delta n}$$

Where:
$$\Delta n = (c + d) - (a + b) = \text{moles of gaseous products} - \text{moles of gaseous reactants}$$

**Cases:**
- Δn = 0 → Kp = Kc (e.g., H₂ + I₂ ⇌ 2HI)
- Δn > 0 → Kp > Kc (e.g., PCl₅ ⇌ PCl₃ + Cl₂)
- Δn < 0 → Kp < Kc (e.g., N₂ + 3H₂ ⇌ 2NH₃)

### Kx (Mole Fraction Equilibrium Constant)

$$K_x = \frac{x_C^c \cdot x_D^d}{x_A^a \cdot x_B^b}$$

Relation: $K_p = K_x \cdot P^{\Delta n}$ and $K_p = K_c (RT)^{\Delta n}$

### Kp and Kc for Ammonia Synthesis

$$N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$$

$$K_c = \frac{[NH_3]^2}{[N_2][H_2]^3} \quad K_p = \frac{P_{NH_3}^2}{P_{N_2} \cdot P_{H_2}^3}$$

$$\Delta n = 2 - (1+3) = -2$$

$$K_p = K_c (RT)^{-2} = \frac{K_c}{(RT)^2}$$

### Kp and Kc for HI Synthesis

$$H_2(g) + I_2(g) \rightleftharpoons 2HI(g)$$

$$\Delta n = 2 - 2 = 0 \Rightarrow K_p = K_c$$

### Derive Kp and Kc for HI Equilibrium *(2012 Q6c)*

At equilibrium, let initial moles: H₂ = a, I₂ = a (equal), HI = 0.

At equilibrium: H₂ = (a − x), I₂ = (a − x), HI = 2x

$$K_c = \frac{[HI]^2}{[H_2][I_2]} = \frac{(2x)^2}{(a-x)^2} = \left(\frac{2x}{a-x}\right)^2$$

Since Δn = 0: **Kp = Kc**

---

## 5. Reaction Quotient (Q)

### Definition
The **reaction quotient (Qc)** has the same mathematical form as Kc but uses **current concentrations** (not necessarily equilibrium ones):

$$Q_c = \frac{[C]^c [D]^d}{[A]^a [B]^b} \bigg|_{\text{at any time}}$$

### Using Q to Predict Reaction Direction

| Comparison | Meaning | Direction |
|-----------|---------|-----------|
| Q < Kc | Too many reactants relative to equilibrium | Reaction proceeds **forward** (→) |
| Q = Kc | System is at equilibrium | No net change |
| Q > Kc | Too many products relative to equilibrium | Reaction proceeds **reverse** (←) |

### Worked Problem *(2019 Q6c)*

**Given:** SO₂Cl₂(g) ⇌ SO₂(g) + Cl₂(g), Kc = 0.078 at 100°C

Moles: SO₂ = 0.035, SO₂Cl₂ = 0.500, Cl₂ = 0.080 in a 5.00L flask.

**Concentrations:**
- [SO₂Cl₂] = 0.500/5.00 = 0.100 M
- [SO₂] = 0.035/5.00 = 0.0070 M
- [Cl₂] = 0.080/5.00 = 0.016 M

$$Q_c = \frac{[SO_2][Cl_2]}{[SO_2Cl_2]} = \frac{(0.0070)(0.016)}{0.100} = \frac{1.12 \times 10^{-4}}{0.100} = 1.12 \times 10^{-3}$$

**Q (0.00112) < Kc (0.078)** → Reaction proceeds **forward** (→) to produce more SO₂ and Cl₂.

### Worked Problem *(2018 Q8b)*

**Given:** CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g); K = 1.0

Concentrations: CO = 1.0, H₂O = 1.1, CO₂ = 14.8, H₂ = 15.0 M

$$Q = \frac{[CO_2][H_2]}{[CO][H_2O]} = \frac{14.8 \times 15.0}{1.0 \times 1.1} = \frac{222}{1.1} = 201.8$$

**Q (201.8) >> K (1.0)** → Reaction proceeds **reverse** (←), producing more CO and H₂O.

---

## 6. Le Chatelier's Principle

### Statement
> When a system at equilibrium is subjected to a stress (a change in conditions), the system will shift in a direction that **relieves or reduces the stress** and establishes a new equilibrium.

### Types of Stresses

| Stress | System Response |
|--------|----------------|
| Add reactant | Equilibrium shifts **forward** |
| Add product | Equilibrium shifts **backward** |
| Remove reactant | Equilibrium shifts **backward** |
| Remove product | Equilibrium shifts **forward** |
| Increase pressure (gas) | Shifts toward side with **fewer gas moles** |
| Decrease pressure | Shifts toward side with **more gas moles** |
| Increase temperature | Shifts in **endothermic** direction |
| Decrease temperature | Shifts in **exothermic** direction |
| Add catalyst | No shift — only speeds equilibrium attainment |

### Contact Process for SO₃ (Le Chatelier's Application) *(2016 Q5a)*

$$2SO_2(g) + O_2(g) \underset{V_2O_5}{\overset{\Delta}{\rightleftharpoons}} 2SO_3(g) \quad \Delta H = -197 \text{ kJ/mol}$$

**Applying Le Chatelier's Principle to maximize SO₃ yield:**

| Condition | Effect | Industrial choice |
|-----------|--------|-------------------|
| High pressure | Shifts right (3 mol → 2 mol gas) | ~1-3 atm (compromise) |
| Low temperature | Favors exothermic forward reaction (↑ Kc) | ~450°C (compromise for rate) |
| Remove SO₃ (absorption) | Shifts equilibrium right | SO₃ absorbed in H₂SO₄ |
| Excess O₂ | Pushes equilibrium right | Used industrially |

---

## 7. Homogeneous vs. Heterogeneous Equilibrium

### Homogeneous Equilibrium
All species in the **same phase**.

**Example:**
$$H_2(g) + I_2(g) \rightleftharpoons 2HI(g)$$
$$N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$$

$$K_c = \frac{[NH_3]^2}{[N_2][H_2]^3}$$

### Heterogeneous Equilibrium
Species in **different phases** — pure solids/liquids omitted from K expression.

**Examples:**

$$CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g) \quad K_p = P_{CO_2}$$

$$2H_2(g) + O_2(g) \rightleftharpoons 2H_2O(l) \quad K_c = \frac{1}{[H_2]^2[O_2]}$$

**Rule:** Activity of a pure solid or pure liquid = 1, so they don't appear in the equilibrium expression.

### Kp Expressions for Heterogeneous Equilibria (Examples) *(2017 Q8c)*

$$CH_4(g) + H_2O(g) \rightleftharpoons CO(g) + 3H_2(g) \quad K_p = \frac{P_{CO} \cdot P_{H_2}^3}{P_{CH_4} \cdot P_{H_2O}}$$

$$PCl_5(g) \rightleftharpoons PCl_3(g) + Cl_2(g) \quad K_p = \frac{P_{PCl_3} \cdot P_{Cl_2}}{P_{PCl_5}}$$

---

## 8. Factors Influencing Equilibrium Constant

**Kc/Kp depends ONLY on temperature.** It does NOT change with:
- Changes in concentration
- Changes in pressure
- Addition of catalyst (only affects rate, not equilibrium)

| Factor | Effect on K | Effect on equilibrium position |
|--------|------------|-------------------------------|
| Temperature increase (exothermic rxn) | K **decreases** | Shifts backward |
| Temperature increase (endothermic rxn) | K **increases** | Shifts forward |
| Concentration change | K unchanged | Position shifts |
| Pressure change (gas) | K unchanged | Position shifts |
| Catalyst | K unchanged | No shift |
| Inert gas addition (const V) | K unchanged | No shift |

---

## 9. Concentration vs. Time Graphs

### Graph for Kc = 1 (equal concentrations at equilibrium)
```
Conc ↑
     |  [A]──────────────────────
     |     \   (decreasing)
     |      \
     |       ─ ─ ─ ─ ─ ─ ─ ─  [equil]
     |                      /
     |   (increasing)      /
     |       ─ ─ ─ ─ ─ ─ ─
     |  [B] ________________/ [equil]
     +──────────────────────────→ Time
                          ↑
                    equilibrium reached
```

### Graph for Kc > 1 (products favored)
```
Conc ↑
     |  [A]─────────────── equilibrium (low)
     |     \
     |      ─────────
     |           products [B] at high concentration at equilibrium
     +──────────────────────→ Time
```

### Graph for Kc < 1 (reactants favored)
```
Conc ↑
     |  [A] starts high, remains high at equilibrium
     |  ──────────────────────
     |                   products [B] stay low
     |                   ─────────────────
     +──────────────────────→ Time
```

Larger Kc → larger yield of **products**.

---

## 10. Exam Questions & Model Answers

### Q1. Draw concentration vs. time graph for Kc = 1, Kc > 1, Kc < 1. Which favors larger yield? *(2019 Q6a)*

*(See Section 9 above — three graphs)*

**Kc > 1 favors larger yield of products.**

---

### Q2. Define homogeneous and heterogeneous equilibrium. Write Kc expressions. *(2019 Q6b)*

*(See Section 7 above)*

---

### Q3. Calculate Q for SO₂Cl₂ equilibrium; in which direction will the reaction proceed? *(2019 Q6c; 2017 Q8b)*

*(See Section 5 — worked problem: Q = 0.00112 < Kc = 0.078 → **forward**)*

---

### Q4. Draw energy profile for endothermic and exothermic reactions (transition state theory). *(2019 Q6d; 2018 Q7c)*

**Transition State Theory:** Reactions proceed through an activated complex (transition state) at the energy maximum on the potential energy surface.

**Exothermic reaction:**
```
Energy
  ↑          ‡ (transition state/activated complex)
  |         /\
  |        /  \
  |       /    \  Ea (activation energy, forward)
  | Reactants    \
  |               \    Products (lower energy)
  |                \──────────
  +──────────────────────────→ Reaction coordinate
  
  ΔH = negative (products lower than reactants)
```

**Endothermic reaction:**
```
Energy
  ↑          ‡
  |         /\
  |        /  \
  |       /    \______ Products (higher energy)
  | Reactants          
  |────────             
  +──────────────────────────→ Reaction coordinate
  
  ΔH = positive (products higher than reactants)
```

---

### Q5. State Le Chatelier's principle with example. *(2014 Q7a; 2012 Q6a)*

*(See Section 6)*

---

### Q6. Distinguish reversible and irreversible reactions with examples. *(2017 Q8a)*

| | Reversible Reaction | Irreversible Reaction |
|--|---------------------|----------------------|
| Direction | Can proceed in both directions | Proceeds only in one direction |
| Products | Equilibrium mixture of reactants & products | Reaction goes to completion |
| Kc | Finite value (neither 0 nor ∞) | Kc → ∞ (essentially) |
| Example | N₂ + 3H₂ ⇌ 2NH₃ | 2H₂ + O₂ → 2H₂O (explosion) |
| Symbol | ⇌ | → |

---

### Q7. Equilibrium constant Kc at 700K for HI dissociation is 0.134. Amount of HI remaining after starting with 12.8g. *(2014 Q7c)*

**Given:** 2HI(g) ⇌ H₂(g) + I₂(g); Kc = 0.134 at 700K

Initial: n(HI) = 12.8/128 = 0.1 mol (M(HI) = 128 g/mol)

Let x mol H₂ and x mol I₂ form at equilibrium.

At equilibrium in volume V:
- HI: (0.1 − 2x)/V
- H₂: x/V
- I₂: x/V

$$K_c = \frac{[H_2][I_2]}{[HI]^2} = \frac{(x/V)(x/V)}{((0.1-2x)/V)^2} = \frac{x^2}{(0.1-2x)^2} = 0.134$$

$$\sqrt{0.134} = \frac{x}{0.1-2x} = 0.366$$

$$x = 0.366(0.1 - 2x) = 0.0366 - 0.732x$$

$$1.732x = 0.0366 \Rightarrow x = 0.02114 \text{ mol}$$

**HI remaining = 0.1 − 2(0.02114) = 0.0577 mol**

**Mass of HI remaining = 0.0577 × 128 = 7.39 g**

---

### Q8. Write Kc for 2A₂B₅(g) ⇌ 4AB₂(g) + B₂(g). *(2015 Q6a)*

$$K_c = \frac{[AB_2]^4[B_2]}{[A_2B_5]^2}$$

---

### Q9. Derive Kp and Kc for synthesis of HI. *(2015 Q6b adapted)*

*(See Section 4 — full derivation)*

**Summary:** For H₂(g) + I₂(g) ⇌ 2HI(g): Δn = 0, so **Kp = Kc**

---

## 11. Visual Aids

### Equilibrium Position vs. Kc
![Equilibrium position diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Equilibrium_concept_diagram.png/400px-Equilibrium_concept_diagram.png)
*Source: Wikimedia Commons — Dynamic equilibrium showing forward and reverse rates becoming equal*

### Energy Profile Diagram
```
Exothermic:              Endothermic:
    ‡                        ‡
   /\                       /\
  /  \                     /  \──── Products
─/    \── Products      ─/        
Reactants                Reactants
ΔH < 0                   ΔH > 0
```

### Le Chatelier Stress-Response Summary
```
         STRESS                    RESPONSE
         ──────                    ────────
  Add reactants         →   Shift right (→)
  Add products          →   Shift left (←)
  Increase pressure     →   Shift to fewer gas moles
  Increase temperature  →   Shift endothermic direction
  Add catalyst          →   No shift (faster equilibrium)
```

---

## 12. Practice Questions

**Q1.** Write the equilibrium expression for: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Calculate Kp if Kc = 0.041 at 400K.

<details>
<summary>✅ Solution</summary>

$$K_c = \frac{[PCl_3][Cl_2]}{[PCl_5]}$$

Δn = (1+1) − 1 = 1

$$K_p = K_c(RT)^{\Delta n} = 0.041 \times (0.0821 \times 400)^1 = 0.041 \times 32.84 = \mathbf{1.35 \text{ atm}}$$

</details>

---

**Q2.** For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kc = 0.50 at 400°C. If [N₂] = 0.10 M, [H₂] = 0.30 M at some point, and [NH₃] = 0.02 M, which way does the reaction proceed?

<details>
<summary>✅ Solution</summary>

$$Q_c = \frac{(0.02)^2}{(0.10)(0.30)^3} = \frac{4 \times 10^{-4}}{(0.10)(0.027)} = \frac{4 \times 10^{-4}}{2.7 \times 10^{-3}} = 0.148$$

Q (0.148) > Kc (0.50)? → No, Q < Kc.

Wait: 0.148 < 0.50 → **Q < K** → **Reaction proceeds forward** (more NH₃ forms).

</details>

---

**Q3.** State and explain the law of mass action with an example.

<details>
<summary>✅ Solution</summary>

**Law of Mass Action (Guldberg & Waage, 1864):** The rate of a chemical reaction at constant temperature is proportional to the product of the concentrations (active masses) of the reacting substances, each raised to its stoichiometric coefficient.

**Example:**
For: $2NO(g) + O_2(g) \rightarrow 2NO_2(g)$

Rate (forward) = k[NO]²[O₂]

At equilibrium (forward rate = reverse rate):
$$K_c = \frac{[NO_2]^2}{[NO]^2[O_2]}$$

</details>

---

**Q4.** A reaction has Kc = 1.8 × 10⁻⁵ at 25°C. Is the reaction favorable? Justify.

<details>
<summary>✅ Solution</summary>

**No, the reaction is NOT favorable** at 25°C in the forward direction.

Kc = 1.8 × 10⁻⁵ << 1 → At equilibrium, the concentrations of **reactants are much greater** than products. The reaction barely proceeds to the right. The equilibrium lies far to the left (reactant side).

This corresponds to a large positive ΔG° (ΔG° = −RT ln K → ΔG° = −8.314×298×ln(1.8×10⁻⁵) ≈ +27.1 kJ/mol > 0).

</details>

---

**Q5.** Write two examples of heterogeneous equilibrium with their Kp expressions.

<details>
<summary>✅ Solution</summary>

**(i)** $CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)$

$$K_p = P_{CO_2}$$

(CaCO₃ and CaO are pure solids → omitted)

**(ii)** $C(s) + H_2O(g) \rightleftharpoons CO(g) + H_2(g)$ (water gas reaction)

$$K_p = \frac{P_{CO} \cdot P_{H_2}}{P_{H_2O}}$$

(C is a pure solid → omitted)

</details>

---

**Q6.** How does increasing temperature affect Kc for an exothermic reaction?

<details>
<summary>✅ Solution</summary>

For an exothermic reaction (ΔH < 0): Heat is a product.

$$A + B \rightleftharpoons C + D + \text{heat}$$

Increasing temperature adds heat → Le Chatelier shifts equilibrium **backward** (to consume extra heat) → fewer products, more reactants → **Kc decreases**.

Mathematically: van't Hoff equation:
$$\frac{d \ln K}{dT} = \frac{\Delta H^\circ}{RT^2}$$

For ΔH < 0 (exothermic): dln K/dT < 0 → K decreases as T increases. ✓

</details>

---

**Q7.** What is the effect of a catalyst on equilibrium position?

<details>
<summary>✅ Solution</summary>

A catalyst **does not change the equilibrium position** or Kc/Kp. It:
1. Lowers the activation energy for **both** the forward and reverse reactions equally.
2. Increases the rate of **both** directions by the same factor.
3. Therefore, equilibrium is reached **faster** but at the **same composition**.
4. The value of K is unchanged (depends only on temperature).

**Practical importance:** In the Contact Process, V₂O₅ catalyst speeds up SO₃ production but does not change Kp. Without catalyst, equilibrium would take too long to reach at 450°C.

</details>

---

**Q8.** For the reaction 2HI(g) ⇌ H₂(g) + I₂(g), starting with 0.5 mol HI in a 1L flask, 0.1 mol H₂ is found at equilibrium. Calculate Kc.

<details>
<summary>✅ Solution</summary>

Initial: [HI] = 0.5 M, [H₂] = 0, [I₂] = 0

At equilibrium: [H₂] = 0.1 M → [I₂] = 0.1 M (equal), [HI] = 0.5 − 2(0.1) = 0.3 M

$$K_c = \frac{[H_2][I_2]}{[HI]^2} = \frac{(0.1)(0.1)}{(0.3)^2} = \frac{0.01}{0.09} = \mathbf{0.111}$$

</details>

---

**Q9.** What is a reversible reaction? Give an example with K_p expression.

<details>
<summary>✅ Solution</summary>

A **reversible reaction** can proceed in both the forward and reverse directions and reaches a state of **dynamic equilibrium** at which both forward and reverse rates are equal.

**Example:**
$$N_2O_4(g) \rightleftharpoons 2NO_2(g)$$

$$K_p = \frac{P_{NO_2}^2}{P_{N_2O_4}}$$

At room temperature, an equilibrium mixture of colorless N₂O₄ and brown NO₂ exists. Changing temperature or pressure shifts the equilibrium.

</details>

---

**Q10.** Why does equilibrium reaction NOT stop at equilibrium?

<details>
<summary>✅ Solution</summary>

At **chemical equilibrium**, the reaction appears to stop macroscopically (concentrations don't change), but at the **molecular level**, the forward and reverse reactions are still occurring continuously:

- Forward: A + B → C + D at rate = r₁
- Reverse: C + D → A + B at rate = r₂

At equilibrium: r₁ = r₂ (rates are equal, not zero)

This is called **dynamic equilibrium** — ongoing microscopic activity with no net macroscopic change. Proof: isotope labeling studies show atoms continue to exchange between reactants and products even at equilibrium.

</details>

---

## 13. References

1. Atkins, P., & de Paula, J. (2014). *Physical Chemistry* (10th ed.). Oxford University Press.
2. Chang, R., & Goldsby, K. (2016). *Chemistry* (12th ed.). McGraw-Hill Education.
3. Guldberg, C. M., & Waage, P. (1864). Studies concerning affinity. *Forhandlinger i Videnskabs-Selskabet i Christiania*, 35.
4. Le Chatelier, H. L. (1884). A general statement of the laws of chemical equilibrium. *Comptes Rendus de l'Académie des Sciences, 99*, 786.
5. LibreTexts Chemistry. (2023). *Chemical Equilibrium*. https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_-_The_Central_Science_(Brown_et_al.)/15._Chemical_Equilibrium
6. Khan Academy. (2023). *Equilibrium constant*. https://www.khanacademy.org/science/ap-chemistry/equilibrium-ap

---

*Last updated: 2025 | Repository: BUTex Chemistry-I Study Notes*

[← Previous: Colligative Properties](./06_Colligative_Properties.md) | [Next: Colloids →](./08_Colloids.md)
