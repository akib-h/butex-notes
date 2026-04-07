# 📘 11 — Enzyme Catalysis

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. Introduction to Enzyme Catalysis

**Enzyme catalysis** is a special type of **homogeneous catalysis** in which the catalyst is a biological molecule called an **enzyme**. Enzymes are protein molecules (sometimes RNA — ribozymes) that catalyze biochemical reactions with extraordinary **specificity** and **efficiency**.

### Key Features

| Property | Description |
|----------|-------------|
| **High specificity** | Each enzyme catalyzes a specific reaction or class of reactions |
| **High efficiency** | Increase rates by $10^6$ to $10^{12}$ times |
| **Mild conditions** | Work at physiological temperature (~37°C) and pH (~7.4) |
| **Regulation** | Activity can be switched on/off by regulatory molecules |
| **Biological origin** | Produced by living cells |

---

## 2. Terminology

| Term | Definition |
|------|------------|
| **Enzyme (E)** | The biological catalyst (protein) |
| **Substrate (S)** | The reactant that binds to the enzyme |
| **Active site** | The specific region on the enzyme where S binds |
| **Enzyme-Substrate complex (ES)** | Intermediate formed when S binds to E |
| **Product (P)** | The molecule formed after catalysis |
| **Cofactor** | Non-protein helper molecule (e.g., metal ions) |
| **Coenzyme** | Organic non-protein cofactor (e.g., NAD⁺) |

---

## 3. Lock-and-Key Theory

Proposed by **Emil Fischer (1894)**:

- The **active site** of the enzyme has a **rigid, complementary shape** to the substrate
- The substrate fits into the active site like a **key in a lock**
- Highly specific — only the right substrate can bind

```
Active Site           Substrate         ES Complex
    ___                   *              ___
   |   |  +  [*] →       |   | ←→ | *  |
   |___|                              |___|
   Enzyme                              E-S
```

**Limitation:** Does not explain how the enzyme can catalyze different sized substrates.

---

## 4. Induced Fit Theory

Proposed by **Daniel Koshland (1958)**:

- The active site is **flexible** and **changes shape** upon substrate binding
- The enzyme **molds itself** around the substrate
- More accurately describes most enzyme behavior

```
Enzyme (open)  +  Substrate  →  ES Complex (induced fit)
    ⌒                *               ⌒*⌒
   /  \         +   [*]   →         / *  \
                                  (conformation changes)
```

---

## 5. Michaelis-Menten Kinetics

### 5.1 The Michaelis-Menten Mechanism

The most fundamental model of enzyme kinetics, developed by **Leonor Michaelis and Maud Menten (1913)**:

$$E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \xrightarrow{k_2} E + P$$

Where:
- $k_1$ = rate constant for ES formation
- $k_{-1}$ = rate constant for ES dissociation (back to E + S)
- $k_2$ = rate constant for product formation (= $k_{cat}$ or turnover number)

### 5.2 Derivation of Michaelis-Menten Equation

**Assumptions:**
1. $[S] \gg [E]_0$ (substrate is in large excess)
2. **Steady-state approximation**: $d[ES]/dt \approx 0$ (ES concentration is constant)
3. Product does not convert back to substrate (irreversible)

**Step 1:** Rate of ES formation:

$$\frac{d[ES]}{dt} = k_1[E][S] - k_{-1}[ES] - k_2[ES]$$

**Step 2:** Apply steady-state: $d[ES]/dt = 0$

$$k_1[E][S] = (k_{-1} + k_2)[ES]$$

**Step 3:** Total enzyme concentration: $[E]_T = [E] + [ES]$, so $[E] = [E]_T - [ES]$

$$k_1([E]_T - [ES])[S] = (k_{-1} + k_2)[ES]$$

$$k_1[E]_T[S] - k_1[ES][S] = (k_{-1} + k_2)[ES]$$

$$k_1[E]_T[S] = [ES](k_{-1} + k_2 + k_1[S])$$

$$[ES] = \frac{k_1[E]_T[S]}{k_1[S] + k_{-1} + k_2} = \frac{[E]_T[S]}{[S] + \frac{k_{-1}+k_2}{k_1}}$$

**Step 4:** Define the **Michaelis constant**:

$$\boxed{K_m = \frac{k_{-1} + k_2}{k_1}}$$

Therefore:

$$[ES] = \frac{[E]_T[S]}{K_m + [S]}$$

**Step 5:** Reaction velocity (rate of product formation):

$$v = k_2[ES] = \frac{k_2[E]_T[S]}{K_m + [S]}$$

Since maximum velocity $V_{max} = k_2[E]_T$ (when all enzyme is in ES form):

$$\boxed{v = \frac{V_{max}[S]}{K_m + [S]}}$$

This is the **Michaelis-Menten equation**.

---

### 5.3 Physical Meaning of $K_m$

- $K_m$ has units of **concentration** (mol/L)
- When $[S] = K_m$: $v = V_{max}/2$
- **$K_m$ = substrate concentration at half-maximum velocity**
- Low $K_m$ → High affinity (enzyme binds substrate tightly)
- High $K_m$ → Low affinity (enzyme binds substrate weakly)

### 5.4 Limiting Cases

**Case 1: $[S] \ll K_m$**

$$v \approx \frac{V_{max}}{K_m}[S] = k_{\text{cat}}^{\text{app}}[S]$$

Reaction is **first order** in $[S]$.

**Case 2: $[S] \gg K_m$**

$$v \approx V_{max}$$

Reaction is **zero order** in $[S]$ — enzyme is saturated.

---

### 5.5 Graphical Representation

#### Michaelis-Menten Plot

```
  v
  |
Vmax|..............................................
    |                                 *****
    |                         ********
    |                  ********
    |           ********
Vmax/2|----------*-
    |      ****   |
    |   ***       |
    |***           |
    +-------|------+-------> [S]
           Km
```

#### Lineweaver-Burk Plot (Double Reciprocal)

Taking reciprocal of Michaelis-Menten equation:

$$\frac{1}{v} = \frac{K_m}{V_{max}} \cdot \frac{1}{[S]} + \frac{1}{V_{max}}$$

This is a straight line:

| Quantity | Value |
|----------|-------|
| y-intercept | $1/V_{max}$ |
| x-intercept | $-1/K_m$ |
| slope | $K_m/V_{max}$ |

```
1/v
 |   *
 |     *
 |       *
 |         *
 |           *         slope = Km/Vmax
1/Vmax|           -------*
 |                        *
 +-----------|----------> 1/[S]
           -1/Km
```

---

## 6. Turnover Number ($k_{cat}$)

$$k_{cat} = \frac{V_{max}}{[E]_T}$$

$k_{cat}$ is the **number of substrate molecules** converted to product per enzyme molecule per second when the enzyme is **fully saturated**.

| Enzyme | $k_{cat}$ (s⁻¹) |
|--------|----------------|
| Carbonic anhydrase | $6 \times 10^5$ |
| Acetylcholinesterase | $1.4 \times 10^4$ |
| Chymotrypsin | 100 |
| Lysozyme | 0.5 |

---

## 7. Catalytic Efficiency — $k_{cat}/K_m$

The ratio $k_{cat}/K_m$ is the best measure of **enzyme efficiency**:

$$\text{Catalytic efficiency} = \frac{k_{cat}}{K_m} \text{ (units: M}^{-1}\text{s}^{-1}\text{)}$$

A "perfect enzyme" has $k_{cat}/K_m$ limited only by the diffusion rate of S to E, typically $\sim 10^8$ to $10^9$ M⁻¹s⁻¹.

---

## 8. Enzyme Inhibition

| Type | Description | Effect on $K_m$ | Effect on $V_{max}$ |
|------|-------------|-----------------|---------------------|
| **Competitive** | Inhibitor competes for active site | Increases | No change |
| **Uncompetitive** | Inhibitor binds only to ES complex | Decreases | Decreases |
| **Non-competitive** | Inhibitor binds to site other than active site | No change | Decreases |
| **Mixed inhibition** | Binds to both E and ES | Changes | Decreases |

---

## 9. Factors Affecting Enzyme Activity

| Factor | Effect |
|--------|--------|
| **Temperature** | Rate increases up to optimum (~37°C), then decreases due to denaturation |
| **pH** | Activity peaks at optimum pH; extremes cause denaturation |
| **Substrate concentration** | Increases rate until $V_{max}$ (saturation) |
| **Enzyme concentration** | Rate increases proportionally until S is limiting |
| **Inhibitors** | Decrease activity |
| **Activators/Cofactors** | Increase activity |

---

## 10. Enzymes in Industry and Medicine

| Application | Enzyme | Use |
|------------|--------|-----|
| Detergents | Proteases, lipases | Remove protein/fat stains |
| Food industry | Amylases | Starch digestion, bread making |
| Dairy | Lactase | Lactose-free milk |
| Medical diagnostics | Glucose oxidase | Blood glucose measurement |
| Pharmaceutical | Penicillin acylase | Antibiotic synthesis |
| Biofuel | Cellulase | Break down cellulose |

---

## 11. References

| Resource | URL |
|----------|-----|
| LibreTexts — Enzyme Kinetics | https://chem.libretexts.org/Bookshelves/Biological_Chemistry/Supplemental_Modules_(Biological_Chemistry)/Enzymes/Enzyme_Kinetics |
| Khan Academy — Enzymes | https://www.khanacademy.org/science/ap-biology/cellular-energetics/enzyme-structure-and-catalysis/a/enzymes-and-the-active-site |
| BRENDA Enzyme Database | https://www.brenda-enzymes.org/ |

---

[⬅️ Back: Acid-Base Catalysis](./10_Acid_Base_Catalysis.md) | [➡️ Next: Catalysis Retardation & Poisoning](./12_Catalysis_Retardation_and_Poisoning.md)
