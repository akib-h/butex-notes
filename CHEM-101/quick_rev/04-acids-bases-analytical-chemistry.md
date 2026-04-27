---
title: "Acids, Bases and Analytical Chemistry"
course: CHEM-102
topic: 04
tags: [chemistry, acids, bases, HSAB, analytical-chemistry, pH, buffers, butex]
---

# Chapter 4 — Acids, Bases and Analytical Chemistry

> **Syllabus Coverage:** Arrhenius · Brønsted-Lowry · Lewis concepts · Acid/base strength · Amphiprotic species · HSAB · Electrophiles & nucleophiles · Precision/Accuracy · Significant figures

---

## Table of Contents
1. [Concepts of Acids and Bases](#1-concepts-of-acids-and-bases)
2. [Measuring Strength of Acids and Bases](#2-measuring-strength-of-acids-and-bases)
3. [Amphiprotic Species](#3-amphiprotic-species)
4. [Conjugate Acid-Base Pairs](#4-conjugate-acid-base-pairs)
5. [Electrophiles and Nucleophiles](#5-electrophiles-and-nucleophiles)
6. [Hard and Soft Acids and Bases (HSAB)](#6-hard-and-soft-acids-and-bases-hsab)
7. [Relative Acid Strengths](#7-relative-acid-strengths)
8. [Buffer Solutions and pH](#8-buffer-solutions-and-ph)
9. [Analytical Chemistry — Precision and Accuracy](#9-analytical-chemistry--precision-and-accuracy)
10. [Errors, Significant Figures](#10-errors-significant-figures)
11. [Practice Questions](#practice-questions)
12. [References](#references)

---

## 1. Concepts of Acids and Bases

### 1.1 Arrhenius Concept (1884)

> **Acid:** A substance that produces H⁺ (protons) when dissolved in water.  
> **Base:** A substance that produces OH⁻ (hydroxide ions) when dissolved in water.

**Examples:**
$$\text{HCl} \rightarrow \text{H}^+ + \text{Cl}^-$$
$$\text{NaOH} \rightarrow \text{Na}^+ + \text{OH}^-$$

**Limitations:**
- Only applies to **aqueous solutions**
- Cannot explain basicity of NH₃ (does not contain OH⁻)
- Cannot explain acid-base reactions in non-aqueous solvents

### 1.2 Brønsted-Lowry Concept (1923)

> **Acid (proton donor):** A species that **donates a proton (H⁺)** to another species.  
> **Base (proton acceptor):** A species that **accepts a proton (H⁺)** from another species.

$$\text{HA} + \text{B} \rightleftharpoons \text{A}^- + \text{BH}^+$$

**Examples:**

| Reaction | Acid | Base |
|---------|------|------|
| HCl + H₂O → H₃O⁺ + Cl⁻ | HCl (donates H⁺) | H₂O (accepts H⁺) |
| NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ | H₂O (donates H⁺) | NH₃ (accepts H⁺) |
| HCO₃⁻ + OH⁻ → CO₃²⁻ + H₂O | HCO₃⁻ (donates H⁺) | OH⁻ (accepts H⁺) |

**Water — Amphiprotic (acts as both acid and base):**
$$\text{H}_2\text{O} + \text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{OH}^-$$
*(one H₂O acts as acid, the other as base)*

**Advantages over Arrhenius:** Works in non-aqueous solvents; explains NH₃ as base.

**Limitation:** Does not explain species like AlCl₃, BF₃ that show acidic behavior without H⁺.

### 1.3 Lewis Concept (1923)

> **Lewis acid:** A species that **accepts an electron pair** (electrophile).  
> **Lewis base:** A species that **donates an electron pair** (nucleophile).

$$\text{Lewis base} \xrightarrow{\text{lone pair}} \text{Lewis acid}$$

**Examples:**

| Reaction | Lewis Acid | Lewis Base |
|---------|-----------|-----------|
| BF₃ + :NH₃ → F₃B←NH₃ | BF₃ (accepts lone pair) | NH₃ (donates lone pair) |
| Al³⁺ + 6H₂O → [Al(H₂O)₆]³⁺ | Al³⁺ | H₂O |
| Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺ | Cu²⁺ | NH₃ |
| H⁺ + OH⁻ → H₂O | H⁺ | OH⁻ |

**Advantages:**
- Broadest definition — includes all Brønsted and Arrhenius acids/bases
- Explains Lewis acid catalysis, complex formation, and organic reactions
- Does not require proton transfer

### 1.4 Comparison of Acid-Base Concepts

| Feature | Arrhenius | Brønsted-Lowry | Lewis |
|---------|-----------|---------------|-------|
| Acid definition | Produces H⁺ in water | Proton donor | Electron pair acceptor |
| Base definition | Produces OH⁻ in water | Proton acceptor | Electron pair donor |
| Medium required | Aqueous only | Not required | Not required |
| Scope | Narrowest | Intermediate | Broadest |
| Explains NH₃ base | No | Yes | Yes |
| Explains BF₃ acid | No | No | Yes |
| Example of acid | HCl | HCl, H₂O (sometimes) | BF₃, Al³⁺, H⁺ |

---

## 2. Measuring Strength of Acids and Bases

### 2.1 Acid Dissociation Constant (Ka)

$$\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^- \quad K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}$$

- Larger Ka → stronger acid (more dissociation)
- $\text{p}K_a = -\log K_a$ → smaller pKa = stronger acid

### 2.2 Base Dissociation Constant (Kb)

$$\text{B} + \text{H}_2\text{O} \rightleftharpoons \text{BH}^+ + \text{OH}^- \quad K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}$$

**Relationship:** $K_a \times K_b = K_w = 10^{-14}$ (at 25°C)

### 2.3 pH Scale

$$\text{pH} = -\log[\text{H}^+]$$

$$\text{pOH} = -\log[\text{OH}^-]$$

$$\text{pH} + \text{pOH} = 14 \text{ (at 25°C)}$$

```
    Acidic ←——————————→ Alkaline
    0   1   2   3   4   5   6   7   8   9   10  11  12  13  14
    |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
   HCl stomach  vinegar  rain  pure  blood  baking  bleach  NaOH
         acid            water  water        soda
```

### 2.4 Common Acid Strengths

| Acid | Ka | pKa | Strength |
|------|-----|-----|---------|
| HClO₄ | ~10⁷ | ~−7 | Strong |
| HCl | ~10⁶ | ~−6 | Strong |
| H₂SO₄ (1st) | ~10³ | ~−3 | Strong |
| HNO₃ | ~40 | ~−1.4 | Strong |
| H₃PO₄ | 7.5 × 10⁻³ | 2.12 | Weak |
| HF | 6.8 × 10⁻⁴ | 3.17 | Weak |
| CH₃COOH | 1.8 × 10⁻⁵ | 4.74 | Weak |
| H₂CO₃ | 4.3 × 10⁻⁷ | 6.37 | Very weak |
| H₃BO₃ | 5.4 × 10⁻¹⁰ | 9.27 | Very weak |
| H₂O | 10⁻¹⁶ | 16 | Extremely weak |

**Why HClO₄ is stronger than H₃PO₄:**
- HClO₄: Cl in highest oxidation state (+7), 4 highly electronegative O atoms withdraw electron density from Cl-OH bond → very weak O-H bond → easy H⁺ donation
- H₃PO₄: P in +5 state, only 1 P=O (less withdrawal), stronger O-H bond → weaker acid

$$\text{HClO}_4 \gg \text{HClO}_3 > \text{HClO}_2 > \text{HClO}$$

*More oxygen atoms on central atom → more electron withdrawal → stronger acid*

---

## 3. Amphiprotic Species

An **amphiprotic** (or amphoteric) species can act as **both an acid and a base**, depending on the reaction partner.

### 3.1 Examples

| Species | As Acid (donates H⁺) | As Base (accepts H⁺) |
|---------|---------------------|---------------------|
| **H₂O** | H₂O → H⁺ + OH⁻ | H₂O + H⁺ → H₃O⁺ |
| **HCO₃⁻** | HCO₃⁻ → H⁺ + CO₃²⁻ | HCO₃⁻ + H⁺ → H₂CO₃ |
| **H₂PO₄⁻** | H₂PO₄⁻ → H⁺ + HPO₄²⁻ | H₂PO₄⁻ + H⁺ → H₃PO₄ |
| **HSO₄⁻** | HSO₄⁻ → H⁺ + SO₄²⁻ | HSO₄⁻ + H⁺ → H₂SO₄ |
| **NH₃** (Amphoteric in liquid NH₃) | NH₃ → NH₂⁻ + H⁺ | NH₃ + H⁺ → NH₄⁺ |
| **Amino acids** | -COOH donates H⁺ | -NH₂ accepts H⁺ |

**H₂O auto-ionization (amphiprotic behavior):**
$$\text{H}_2\text{O} + \text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{OH}^-$$
*(One H₂O is acid, one is base)*

---

## 4. Conjugate Acid-Base Pairs

A **conjugate acid-base pair** differs by exactly **one proton (H⁺)**.

$$\text{Acid} \rightleftharpoons \text{H}^+ + \text{Conjugate base}$$

$$\text{Base} + \text{H}^+ \rightleftharpoons \text{Conjugate acid}$$

### 4.1 Examples

| Acid | Conjugate Base | | Base | Conjugate Acid |
|------|---------------|--|------|---------------|
| HCl | Cl⁻ | | Cl⁻ | HCl |
| H₂SO₄ | HSO₄⁻ | | HSO₄⁻ | H₂SO₄ |
| H₂O | OH⁻ | | OH⁻ | H₂O |
| NH₄⁺ | NH₃ | | NH₃ | NH₄⁺ |
| HCO₃⁻ | CO₃²⁻ | | CO₃²⁻ | HCO₃⁻ |
| H₃PO₄ | H₂PO₄⁻ | | H₂PO₄⁻ | H₃PO₄ |

**Key relationships:**
- Stronger acid → weaker conjugate base
- Stronger base → weaker conjugate acid
- $K_a(\text{acid}) \times K_b(\text{conjugate base}) = K_w$

---

## 5. Electrophiles and Nucleophiles

### 5.1 Electrophiles (Lewis Acids)
> Species that are **electron-poor** and **accept** an electron pair.

- Contain a positively charged carbon or atom with incomplete octet
- Attack regions of high electron density
- Examples: H⁺, Br⁺, NO₂⁺, BF₃, AlCl₃, carbocations (R⁺), carbonyl carbon (C=O)

### 5.2 Nucleophiles (Lewis Bases)
> Species that are **electron-rich** and **donate** an electron pair.

- Contain lone pairs or π electrons
- Attack regions of low electron density
- Examples: OH⁻, CN⁻, NH₃, H₂O, halide ions (Cl⁻, Br⁻, I⁻), alkenes

### 5.3 Comparison

| Feature | Electrophile | Nucleophile |
|---------|-------------|------------|
| Electron nature | Electron-poor | Electron-rich |
| Charge | Often + or partial + | Often − or neutral with lone pairs |
| Lewis concept | Lewis acid | Lewis base |
| Attacks | Electron-rich sites | Electron-poor sites |
| Examples | H⁺, BF₃, R⁺, NO₂⁺ | OH⁻, NH₃, CN⁻, H₂O |

---

## 6. Hard and Soft Acids and Bases (HSAB)

**Pearson's HSAB principle (1963):**
> **Hard acids prefer hard bases; soft acids prefer soft bases.**

### 6.1 Classification

**Hard Acids (small, high charge, low polarizability):**
- H⁺, Li⁺, Na⁺, Mg²⁺, Al³⁺, Ti⁴⁺, Fe³⁺, Cr³⁺, BF₃, SO₃

**Soft Acids (large, low charge, high polarizability):**
- Cu⁺, Ag⁺, Hg²⁺, Pd²⁺, Pt²⁺, carbenes, π-acceptors

**Borderline Acids:**
- Fe²⁺, Co²⁺, Ni²⁺, Cu²⁺, Zn²⁺, Rh³⁺

**Hard Bases (small, high electronegativity, low polarizability):**
- F⁻, OH⁻, H₂O, NH₃, RO⁻, Cl⁻ (borderline), CO₃²⁻, PO₄³⁻

**Soft Bases (large, low electronegativity, high polarizability):**
- I⁻, SCN⁻, CN⁻, CO, RS⁻, S²⁻, PR₃, alkenes

| | Hard | Borderline | Soft |
|-|------|-----------|------|
| **Acids** | H⁺, Al³⁺, Fe³⁺, BF₃ | Fe²⁺, Cu²⁺, Ni²⁺ | Cu⁺, Ag⁺, Hg²⁺ |
| **Bases** | F⁻, OH⁻, NH₃, H₂O | Br⁻, NO₂⁻, SO₃²⁻ | I⁻, CN⁻, CO, S²⁻ |

### 6.2 Applications of HSAB

1. **Stability of complexes:** Fe³⁺ (hard acid) prefers F⁻, OH⁻ (hard bases); Pt²⁺ (soft acid) prefers I⁻, CN⁻ (soft bases)
2. **Biological systems:** Hard metal Mg²⁺ binds to hard O-donors (phosphate in DNA); soft Hg²⁺ binds to soft S-donors (cysteine in proteins — toxicity mechanism)
3. **Symbiosis:** Hard acids tend to bond to multiple hard ligands; soft acids to soft ligands
4. **Textile dyeing:** Metal-mordant interaction follows HSAB — Cr³⁺ (hard) coordinates with O and N donors in mordant dyes

---

## 7. Relative Acid Strengths

### 7.1 Factors Affecting Acid Strength

| Factor | Stronger acid when... | Reason |
|--------|----------------------|--------|
| Bond polarity | More polar O-H or H-A bond | H dissociates more easily |
| Bond strength | Weaker H-A bond | Lower energy to break |
| Electronegativity of A | Higher electronegativity | Stabilizes A⁻ better |
| Oxidation state of central atom | Higher oxidation state | More electron withdrawal |
| Number of O atoms | More O atoms | More electron withdrawal from O-H |
| Inductive effect | Electron-withdrawing groups on A | Stabilize A⁻ |

### 7.2 Arranging Acids in Order of Strength

**Oxyacids with same central atom (e.g., Cl):**
$$\text{HClO}_4 > \text{HClO}_3 > \text{HClO}_2 > \text{HClO}$$

**From exam syllabus — H₃BO₃, H₂SO₄, HNO₃:**
$$\text{H}_2\text{SO}_4 > \text{HNO}_3 \gg \text{H}_3\text{BO}_3$$

- H₂SO₄: Strong diprotic acid (Ka₁ very large → fully dissociates 1st proton)
- HNO₃: Strong monoprotic acid (Ka ≈ 40)
- H₃BO₃: Very weak acid (Ka = 5.4 × 10⁻¹⁰); actually a Lewis acid (accepts OH⁻, not donates H⁺)

**Other comparisons:**
- HI > HBr > HCl > HF (in aqueous): Larger halide → weaker H-X bond → stronger acid
- HF > HCl > HBr > HI (in gas phase): Electronegativity dominates → HF more polar

---

## 8. Buffer Solutions and pH

A **buffer solution** resists changes in pH when small amounts of acid or base are added.

**Types:**
- **Acidic buffer:** Weak acid + its salt (conjugate base), e.g., CH₃COOH + CH₃COONa; pH < 7
- **Basic buffer:** Weak base + its salt (conjugate acid), e.g., NH₃ + NH₄Cl; pH > 7

**Henderson-Hasselbalch equation:**

$$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$$

**Working of buffer:**
- Added acid (H⁺): Reacts with A⁻ → HA (neutralized)
- Added base (OH⁻): Reacts with HA → A⁻ + H₂O (neutralized)
- pH change is minimal because both weak acid and its conjugate base are present

**Applications in textile:** Dyeing baths are often buffered to maintain optimal pH for dye uptake.

---

## 9. Analytical Chemistry — Precision and Accuracy

### 9.1 Accuracy

> **Accuracy** refers to how **close a measured value is to the true/accepted value**.

High accuracy = small systematic error

### 9.2 Precision

> **Precision** refers to how **close repeated measurements are to each other** (reproducibility).

High precision = small random error

### 9.3 Accuracy vs Precision — Diagram

```
         Low Accuracy         High Accuracy        High Accuracy
         Low Precision        Low Precision         High Precision
         
           •    •               •                        •
         •         •          •   •                     •
           •   •           •         •                   •
         
         Scattered far         Clustered far            Clustered close
         from target           from target              to target (ideal)
```

| Scenario | Accuracy | Precision |
|---------|---------|---------|
| Measurements spread around true value | Low | Low |
| Measurements tightly clustered but wrong | Low | High |
| Measurements scattered around true value | High | Low |
| Measurements tightly clustered at true value | High (ideal) | High (ideal) |

### 9.4 Mean and Median

**Mean (arithmetic average):**
$$\bar{x} = \frac{\sum x_i}{n} = \frac{x_1 + x_2 + \ldots + x_n}{n}$$

**Median:** The middle value when data is arranged in order.
- Odd n: middle value
- Even n: average of two middle values

**Example:** Data: 2.31, 2.33, 2.35, 2.32, 2.34

Mean = (2.31 + 2.33 + 2.35 + 2.32 + 2.34)/5 = 11.65/5 = **2.33**

Sorted: 2.31, 2.32, **2.33**, 2.34, 2.35 → Median = **2.33**

---

## 10. Errors, Significant Figures

### 10.1 Types of Errors

| Error type | Definition | Cause |
|-----------|-----------|-------|
| **Systematic (determinate)** | Consistent shift in one direction | Faulty instrument, wrong calibration, bias |
| **Random (indeterminate)** | Unpredictable fluctuations | Environmental noise, human reading variation |
| **Gross error** | Outlier due to major blunder | Misreading, contamination |

### 10.2 Absolute Error and Relative Error

$$\text{Absolute Error} = |x_\text{measured} - x_\text{true}|$$

$$\text{Relative Error} = \frac{|x_\text{measured} - x_\text{true}|}{x_\text{true}} \times 100\%$$

**Example:**
- True value: 25.00 mL; Measured: 24.75 mL
- Absolute error = |24.75 − 25.00| = **0.25 mL**
- Relative error = (0.25/25.00) × 100% = **1.0%**

### 10.3 Significant Figures

**Definition:** All digits in a measured number that are certain plus **one estimated (uncertain) digit**.

**Rules for counting significant figures:**

| Rule | Example | Sig. Figs. |
|------|---------|-----------|
| All non-zero digits | 2.345 | 4 |
| Zeros between non-zeros | 2.005 | 4 |
| Leading zeros (before first non-zero) | 0.0023 | 2 |
| Trailing zeros after decimal | 2.3400 | 5 |
| Trailing zeros before decimal (ambiguous) | 2300 | 2, 3, or 4 (specify!) |

**Significant vs Insignificant Figures:**
- **Significant:** All digits that convey meaningful information about precision
- **Insignificant (leading zeros):** Placeholders only, convey no additional precision

**Example:** 0.00450 g
- Zeros before 4: insignificant (leading zeros)
- Zero after 5: significant (trailing zero after decimal)
- Significant figures = 3 (4, 5, 0)

**Arithmetic rules:**
- Addition/subtraction: Round to **fewest decimal places**
- Multiplication/division: Round to **fewest significant figures**

---

## Practice Questions

### PQ1. Write the conjugate base of each: H₂SO₄, HCO₃⁻, H₂O, NH₄⁺.

<details>
<summary>Solution</summary>

| Acid | Conjugate base (lose one H⁺) |
|------|------------------------------|
| H₂SO₄ | HSO₄⁻ |
| HCO₃⁻ | CO₃²⁻ |
| H₂O | OH⁻ |
| NH₄⁺ | NH₃ |

</details>

---

### PQ2. Identify the Lewis acid and Lewis base in: Fe³⁺ + 6H₂O → [Fe(H₂O)₆]³⁺

<details>
<summary>Solution</summary>

- **Lewis acid:** Fe³⁺ — accepts lone pairs from water (empty 3d orbitals)
- **Lewis base:** H₂O — donates lone pair from oxygen to Fe³⁺

This is also a complex formation reaction (coordination chemistry).

The resulting ion [Fe(H₂O)₆]³⁺ is an octahedral complex.

</details>

---

### PQ3. A sample of NaOH was analyzed 5 times. The results (in g) were: 2.41, 2.42, 2.40, 2.43, 2.39. Calculate mean, absolute error for each measurement (true value = 2.42 g), and relative error of the mean.

<details>
<summary>Solution</summary>

**Mean:**
$$\bar{x} = \frac{2.41+2.42+2.40+2.43+2.39}{5} = \frac{12.05}{5} = 2.41 \text{ g}$$

**Absolute errors:**
| Measurement | Value | |x − 2.42| |
|------------|-------|---------|
| 1 | 2.41 | 0.01 |
| 2 | 2.42 | 0.00 |
| 3 | 2.40 | 0.02 |
| 4 | 2.43 | 0.01 |
| 5 | 2.39 | 0.03 |

**Relative error of mean:**
$$\text{RE} = \frac{|2.41 - 2.42|}{2.42} \times 100\% = \frac{0.01}{2.42} \times 100\% = 0.41\%$$

</details>

---

### PQ4. Classify as hard acid, soft acid, hard base, or soft base: Ag⁺, F⁻, Hg²⁺, NH₃, I⁻, Al³⁺, CN⁻, H₂O

<details>
<summary>Solution</summary>

| Species | Classification | Reason |
|---------|---------------|--------|
| Ag⁺ | Soft acid | Large, low charge, highly polarizable |
| F⁻ | Hard base | Small, high electronegativity |
| Hg²⁺ | Soft acid | Large, highly polarizable |
| NH₃ | Hard base | Small N, moderate electronegativity |
| I⁻ | Soft base | Large, very polarizable |
| Al³⁺ | Hard acid | Small, high charge |
| CN⁻ | Soft base | Large, low electronegativity, polarizable |
| H₂O | Hard base | Small O, high electronegativity |

</details>

---

### PQ5. Determine the number of significant figures: (a) 0.004020, (b) 400.0, (c) 6.02 × 10²³, (d) 1000

<details>
<summary>Solution</summary>

| Number | Sig. Figs. | Reasoning |
|--------|-----------|---------|
| 0.004020 | **4** | Leading zeros not significant; trailing zero after decimal is significant (4, 0, 2, 0) |
| 400.0 | **4** | Trailing zeros with decimal point all count (4, 0, 0, 0) |
| 6.02 × 10²³ | **3** | Coefficient only; 6, 0, 2 |
| 1000 | **1** (ambiguous) | Trailing zeros without decimal — could be 1, 2, 3, or 4; write as 1.000 × 10³ for 4 sig. figs. |

</details>

---

## References

1. Skoog, D.A., West, D.M., Holler, F.J. & Crouch, S.R. (2014). *Fundamentals of Analytical Chemistry* (9th ed.). Cengage Learning.
2. Zumdahl, S.S. & DeCoste, D.J. (2017). *Chemical Principles* (8th ed.). Cengage Learning.
3. Pearson, R.G. (1963). "Hard and Soft Acids and Bases." *Journal of the American Chemical Society*, 85(22), 3533–3539.
4. Chang, R. & Goldsby, K. (2016). *Chemistry* (12th ed.). McGraw-Hill.
5. Miessler, G.L., Fischer, P.J. & Tarr, D.A. (2014). *Inorganic Chemistry* (5th ed.). Pearson.
6. LibreTexts — Acid-Base Theories: https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_General_Chemistry_(Petrucci_et_al.)/16%3A_Acids_and_Bases

---

*Last updated: 2025 | BUTEX — CHEM-102 | Level 1, Term 1*
