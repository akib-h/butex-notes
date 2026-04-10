# 08 — Significant Figure Convention

*Course: Analytical Analysis*
*Date: April 9, 2026*

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [What Are Significant Figures?](#2-what-are-significant-figures)
3. [Rules for Identifying Significant Figures](#3-rules-for-identifying-significant-figures)
   - 3.1 [Non-Zero Digits](#31-non-zero-digits)
   - 3.2 [Zeros Between Non-Zero Digits](#32-zeros-between-non-zero-digits)
   - 3.3 [Leading Zeros](#33-leading-zeros)
   - 3.4 [Trailing Zeros with Decimal Point](#34-trailing-zeros-with-decimal-point)
   - 3.5 [Trailing Zeros Without Decimal Point](#35-trailing-zeros-without-decimal-point)
   - 3.6 [Scientific Notation](#36-scientific-notation)
   - 3.7 [Exact Numbers](#37-exact-numbers)
4. [Significant Figures in Mathematical Operations](#4-significant-figures-in-mathematical-operations)
   - 4.1 [Addition and Subtraction](#41-addition-and-subtraction)
   - 4.2 [Multiplication and Division](#42-multiplication-and-division)
   - 4.3 [Mixed Operations](#43-mixed-operations)
   - 4.4 [Logarithms and Antilogarithms](#44-logarithms-and-antilogarithms)
5. [Rounding Rules](#5-rounding-rules)
6. [Significant Figures and Uncertainty](#6-significant-figures-and-uncertainty)
7. [Common Mistakes and Pitfalls](#7-common-mistakes-and-pitfalls)
8. [Significant Figures in Analytical Reporting](#8-significant-figures-in-analytical-reporting)
9. [Comprehensive Worked Examples](#9-comprehensive-worked-examples)
10. [Practice Problems](#10-practice-problems)
11. [References](#11-references)

---

## 1. Introduction

In analytical chemistry, every measurement carries **inherent uncertainty**. Significant figures (sig. figs.) are a **convention for communicating the precision of a measurement** — they tell the reader **how many digits in a reported number are meaningful** (i.e., reliably known).

Reporting too many digits **implies false precision**; reporting too few **discards information and reduces the usefulness of the result**.

> "The number of significant figures in a result is defined as the number of digits known with certainty plus one uncertain (estimated) digit."
> — Harris, *Quantitative Chemical Analysis*

**Why it matters in analytical chemistry:**
- A balance reading of 12.5 g means the measurement is uncertain in the tenths place → the result is known to ±0.1 g.
- A balance reading of 12.500 g means the measurement is uncertain in the thousandths place → the result is known to ±0.001 g.
- These two readings represent **fundamentally different levels of precision**.

---

## 2. What Are Significant Figures?

**Significant figures (significant digits)** are all the digits in a measured or calculated quantity that carry meaning contributing to its **measurement precision**.

They include:
- All digits that are **definitively known**
- The **last digit**, which is estimated (uncertain by ±1)

**Key principle:** A number should be written with only as many significant figures as are justified by the **precision of the measurement**.

### Examples:

| Measurement | Sig. Figs. | Interpretation |
|-------------|-----------|----------------|
| 25.4 cm | 3 | Certain: 25, Uncertain: .4 |
| 0.0045 g | 2 | Certain: 4, Uncertain: 5 |
| 100.00 mL | 5 | Certain: 100.0, Uncertain: 0 |
| 3.0 × 10³ | 2 | Certain: 3, Uncertain: 0 |
| 6.022 × 10²³ | 4 | Avogadro's number (4 sig. figs.) |

---

## 3. Rules for Identifying Significant Figures

---

### 3.1 Non-Zero Digits

> **All non-zero digits are always significant.**

| Number | Sig. Figs. |
|--------|-----------|
| 1823 | **4** |
| 9.67 | **3** |
| 45.21 | **4** |
| 7 | **1** |

---

### 3.2 Zeros Between Non-Zero Digits (Captive Zeros)

> **All zeros between non-zero digits are significant** (they are "trapped" and cannot be omitted).

| Number | Sig. Figs. | Explanation |
|--------|-----------|-------------|
| 1004 | **4** | The two zeros are between 1 and 4 |
| 20.08 | **4** | Zero is between 2 and 8 |
| 4007.3 | **5** | Two zeros between 4 and 7 |
| 10.01 | **4** | Zero between 1 and 1 |

---

### 3.3 Leading Zeros

> **Zeros that appear before the first non-zero digit are NOT significant.** They are merely **placeholders** indicating the position of the decimal point.

| Number | Sig. Figs. | Explanation |
|--------|-----------|-------------|
| 0.0045 | **2** | Leading zeros (0.00) are not significant; only 4 and 5 are |
| 0.070 | **2** | Leading zero not significant; 7 and trailing 0 after decimal ARE |
| 0.123 | **3** | Leading zero is not significant |
| 0.00100 | **3** | Leading zeros not significant; 1, 0, 0 after are significant |

**Memory aid:** "Leading zeros never count — they just move the decimal."

---

### 3.4 Trailing Zeros WITH a Decimal Point

> **Trailing zeros that appear AFTER the decimal point ARE significant.** They indicate that the measurement was made with that level of precision.

| Number | Sig. Figs. | Explanation |
|--------|-----------|-------------|
| 2.50 | **3** | Trailing zero after decimal is significant |
| 12.000 | **5** | All four trailing zeros are significant |
| 100. | **3** | Decimal point indicates all three digits are significant |
| 0.050 | **2** | Leading zero not significant; 5 and trailing 0 are |
| 3.1400 | **5** | All digits including trailing zeros are significant |

---

### 3.5 Trailing Zeros WITHOUT a Decimal Point (Ambiguous!)

> **Trailing zeros in a whole number WITHOUT a decimal point are AMBIGUOUS** — it is unclear whether they are significant.

| Number | Ambiguity |
|--------|----------|
| 1000 | Could be 1, 2, 3, or 4 sig. figs. |
| 500 | Could be 1, 2, or 3 sig. figs. |
| 200. | 3 sig. figs. (decimal point present → unambiguous) |

**Solution: Use scientific notation to remove ambiguity:**

| Intended Precision | Scientific Notation | Sig. Figs. |
|-------------------|--------------------|-----------| 
| 1000 ± 1 | $1.000 \times 10^3$ | 4 |
| 1000 ± 10 | $1.00 \times 10^3$ | 3 |
| 1000 ± 100 | $1.0 \times 10^3$ | 2 |
| 1000 ± 1000 | $1 \times 10^3$ | 1 |

---

### 3.6 Scientific Notation

> **All digits explicitly written in the coefficient (mantissa) of a scientific notation number are significant.**

Scientific notation removes all ambiguity about significant figures.

| Scientific Notation | Sig. Figs. |
|--------------------|-----------|
| $3.40 \times 10^2$ | **3** |
| $6.02 \times 10^{23}$ | **3** |
| $1.0000 \times 10^{-3}$ | **5** |
| $7 \times 10^4$ | **1** |

**Format:** The coefficient must be ≥ 1 and < 10: $1.23 \times 10^4$ ✅ not $12.3 \times 10^3$ ❌

---

### 3.7 Exact Numbers

> **Exact numbers have infinite significant figures** and do not limit the number of sig. figs. in a calculation.

Exact numbers arise from:
- **Counting** (e.g., 5 students, 3 trials)
- **Defined relationships** (e.g., 1 kg = 1000 g exactly; 1 inch = 2.54 cm exactly)
- **Mathematical constants** used in derivations

**Example:**
If 3 aliquots are analyzed (exact), $c_{\text{avg}} = \frac{c_1 + c_2 + c_3}{3}$
The "3" in the denominator is exact and does not reduce sig. figs.

---

## 4. Significant Figures in Mathematical Operations

---

### 4.1 Addition and Subtraction

> **The result is rounded to the SAME DECIMAL PLACE as the measurement with the FEWEST decimal places.**

The precision of the answer is limited by the **least precisely known** quantity.

**Rule:** Align the decimal points, and the result's last significant digit is in the column of the **least precise measurement**.

**Example 1:**

```
  23.1    ← 1 decimal place (±0.1)
+  0.047  ← 3 decimal places (±0.001)
+ 53.26   ← 2 decimal places (±0.01)
─────────
  76.407  → Round to 1 decimal place → 76.4
```

**Example 2:**
$$14.85 - 14.81 = 0.04$$

Notice: Both have 4 sig. figs., but the result has only **1 sig. fig.** This is the phenomenon of **catastrophic cancellation** — subtracting two nearly equal numbers drastically reduces significant figures. This is a major source of precision loss in analytical calculations.

**Example 3:**
$$1002.7 + 0.003 = 1002.703 \rightarrow 1002.7 \quad \text{(1 decimal place)}$$

---

### 4.2 Multiplication and Division

> **The result has the SAME NUMBER OF SIGNIFICANT FIGURES as the measurement with the FEWEST SIGNIFICANT FIGURES.**

**Example 1:**
$$4.56 \times 1.4 = 6.384 \rightarrow \boxed{6.4}$$

(1.4 has 2 sig. figs. → answer rounded to 2 sig. figs.)

**Example 2:**
$$\frac{22.4}{4.50} = 4.978 \rightarrow \boxed{4.98}$$

(Both have 3 sig. figs. → answer has 3 sig. figs.)

**Example 3 — Beer-Lambert Law calculation:**
$$c = \frac{A}{\varepsilon \cdot b} = \frac{0.720}{1.80 \times 10^4 \times 1.000} = 4.00 \times 10^{-5} \text{ mol/L}$$

- $A = 0.720$ (3 sig. figs.)
- $\varepsilon = 1.80 \times 10^4$ (3 sig. figs.)
- $b = 1.000$ cm (4 sig. figs.)
- Answer: 3 sig. figs. → $4.00 \times 10^{-5}$ mol/L

---

### 4.3 Mixed Operations

When a calculation involves both addition/subtraction AND multiplication/division, follow this procedure:

1. Perform operations in the correct mathematical order.
2. At each step, note the implied precision (but **do not round intermediate results** — carry at least one extra digit through intermediate calculations to avoid rounding errors).
3. Round **only the final answer**.

**Example:**
$$y = \frac{(14.8 - 0.2) \times 3.17}{2.00}$$

Step 1: $14.8 - 0.2 = 14.6$ (limited to 1 decimal place; 3 sig. figs. in result)

Step 2: $14.6 \times 3.17 = 46.282$ (carry extra digit in intermediate step)

Step 3: $\frac{46.282}{2.00} = 23.141$

The limiting step is step 1 (3 sig. figs.) → final answer: **23.1**

---

### 4.4 Logarithms and Antilogarithms

For logarithms, the rule concerns the **mantissa** (decimal part) of the log, not the characteristic (integer part before the decimal):

> **For $y = \log(x)$:** The number of sig. figs. in $x$ equals the number of **decimal places in the mantissa of $\log(x)$**.

**Why?** The characteristic (integer part) of a logarithm gives only the **order of magnitude** (power of 10), not precision information.

| Measurement $x$ | Sig. Figs. in $x$ | $\log(x)$ | Decimal places in mantissa |
|-----------------|------------------|----------|--------------------------|
| $1.2 \times 10^{-4}$ | 2 | −3.92 | **2** |
| $2.50 \times 10^{3}$ | 3 | 3.398 | **3** |
| $1.000 \times 10^{-7}$ | 4 | −7.0000 | **4** |

**Example — pH calculation:**
$$[H^+] = 4.7 \times 10^{-3} \text{ M} \quad (\text{2 sig. figs.})$$
$$\text{pH} = -\log(4.7 \times 10^{-3}) = 2.3279... \rightarrow \boxed{2.33} \quad (\text{2 decimal places in mantissa})$$

**Antilog:**
$$\text{pH} = 4.37 \quad (\text{2 decimal places}) \rightarrow [H^+] = 10^{-4.37} = 4.3 \times 10^{-5} \text{ M} \quad (2 \text{ sig. figs.})$$

---

## 5. Rounding Rules

When reducing sig. figs., the following rounding conventions are used:

### Standard Rounding (Round Half Up):
1. If the digit to be dropped is **< 5**: Round **down** (keep previous digit).
2. If the digit to be dropped is **> 5**: Round **up** (increase previous digit by 1).
3. If the digit to be dropped is **exactly 5** with non-zero following digits: Round **up**.
4. If the digit to be dropped is **exactly 5** with all-zero following digits (or no following digits): Apply **Banker's Rounding (Round Half to Even)**.

### Banker's Rounding (Round Half to Even) — preferred in science:
When the digit to drop is exactly 5 (with nothing after, or only zeros after), round to make the preceding digit **even**.

| Value | Round to units | Result | Reason |
|-------|---------------|--------|--------|
| 2.5 | Round to units | **2** | 2 is even |
| 3.5 | Round to units | **4** | 4 is even |
| 4.5 | Round to units | **4** | 4 is even |
| 5.5 | Round to units | **6** | 6 is even |
| 12.50 | Round to units | **12** | 12 is even |
| 13.50 | Round to units | **14** | 14 is even |

**Why Banker's Rounding?** Standard "round half up" introduces a **systematic upward bias** when applied to many values ending in .5. Banker's rounding eliminates this bias over large datasets.

### Practical rounding examples:
| Original | Round to 3 sig. figs. | Result |
|----------|----------------------|--------|
| 4.5672 | → 4.57 | Standard rounding |
| 0.083426 | → 0.0834 | Leading zeros not counted |
| 123,500 | → 1.24 × 10⁵ | Ambiguity avoided by sci. notation |
| 0.027450 | → 0.0275 (or 0.0274 by banker's) | Last dropped digit is 5 |

---

## 6. Significant Figures and Uncertainty

Significant figures are a **simplified communication tool** for uncertainty. In rigorous work, uncertainty is expressed explicitly:

$$\text{Result: } 12.36 \pm 0.05 \text{ mg/L}$$

The uncertainty (±0.05) has only **1 significant figure**, and the result should be reported to the same **decimal place** as the uncertainty:
- 12.36 mg/L (not 12.3567 or 12.4)

**General rule for reporting with uncertainty:**
> Report uncertainty to **1 (or at most 2) significant figures**, then round the result to the same decimal place.

| Calculated result | Uncertainty | Correct Reporting |
|-------------------|------------|------------------|
| 14.7823 | ±0.1 | $14.8 \pm 0.1$ |
| 0.005234 | ±0.0003 | $0.0052 \pm 0.0003$ |
| 142,567 | ±2000 | $(1.43 \pm 0.02) \times 10^5$ |
| 8.3126 | ±0.015 | $8.31 \pm 0.02$ (or $8.31 \pm 0.01$) |

---

## 7. Common Mistakes and Pitfalls

| Mistake | Example | Correct Approach |
|---------|---------|-----------------|
| Counting leading zeros as significant | 0.003 → 3 sig. figs. | Only 1 sig. fig. |
| Rounding intermediate results | Round each step | Round only the FINAL answer |
| Adding quantities with different units | 5.2 cm + 3.10 m | Convert to same unit first |
| Forgetting the decimal point rule | 100 vs 100. | 100 is ambiguous; 100. has 3 sig. figs. |
| Applying multiplication rules to addition | 3.1 + 2.35 → 2 sig. figs. | Use decimal place rule → 5.5 (1 d.p.) |
| Treating pH as having direct sig. fig. rule | pH = 4.5 → 2 sig. figs. | pH mantissa rule: 4.5 gives 1 d.p. in mantissa → 1 sig. fig. in [H⁺] |
| Catastrophic cancellation not recognized | 10.01 − 9.99 = 0.02 | Result has only 1 sig. fig. despite 4 in inputs |

---

## 8. Significant Figures in Analytical Reporting

In professional analytical chemistry, significant figure conventions are observed in:

### Instrument Readings:
- **Analytical balance (4 decimal places, e.g., 12.3456 g):** 6 sig. figs.
- **Burette (graduated to 0.1 mL, read to ±0.02 mL):** Record to 2 decimal places: 22.45 mL
- **Volumetric flask (250 mL, ±0.12 mL tolerance):** 3 sig. figs.

### Calibration Data:
When calculating concentrations from a calibration curve ($A = mc + b$):

The slope $m$ and intercept $b$ from regression are used to calculate $c = \frac{A-b}{m}$. Apply propagation of errors or significant figure rules to determine the correct precision of reported concentrations.

### Regulatory/Pharmacopoeial Reporting:
- The **United States Pharmacopeia (USP)** and other regulatory bodies specify how many significant figures results should be reported with.
- Environmental reports often specify reporting to a set number of decimal places or significant figures depending on the regulatory limit.

### Significant Figures in Standard Solutions:
A 1000 ppm standard prepared from 1.0000 g of dried primary standard in 1000.0 mL:
- 1.0000 g: 5 sig. figs.
- 1000.0 mL: 5 sig. figs.
- Concentration: $(1.0000 \text{ g} / 1000.0 \text{ mL}) \times 10^6 = 1000.0$ ppm (5 sig. figs.)

---

## 9. Comprehensive Worked Examples

### Example 1 — Counting Significant Figures

| Number | Sig. Figs. | Reasoning |
|--------|-----------|-----------|
| 3840 | 3 | Trailing zero ambiguous; written without decimal |
| 3840. | 4 | Decimal point present; all 4 digits significant |
| 0.003840 | 4 | Leading zeros not significant; 3, 8, 4, 0 are |
| 3.840 × 10⁻³ | 4 | All digits in coefficient are significant |
| 1.0080 | 5 | All digits including both zeros |
| 70.0 | 3 | Trailing zero after decimal significant |
| 0.090 | 2 | Leading zero not significant; 9 and 0 significant |

---

### Example 2 — Gravimetric Calculation

A student performs a gravimetric analysis for sulfate. Data:
- Mass of empty crucible: 15.2341 g
- Mass of crucible + BaSO₄ precipitate: 15.5624 g
- Mass of sample taken: 0.5128 g

**Step 1 — Mass of precipitate (subtraction):**
$$m_{\text{BaSO}_4} = 15.5624 - 15.2341 = 0.3283 \text{ g}$$

(Both have 4 decimal places → result has 4 decimal places, 4 sig. figs.)

**Step 2 — Gravimetric factor:**
$$GF = \frac{M_{SO_4}}{M_{BaSO_4}} = \frac{96.06}{233.39} = 0.41168$$

(5 sig. figs. in molecular masses → 5 sig. figs. in GF)

**Step 3 — Mass of SO₄ in sample (multiplication):**
$$m_{SO_4} = 0.3283 \times 0.41168 = 0.13515 \text{ g}$$

(0.3283 has 4 sig. figs.; GF has 5 → answer limited to 4 sig. figs.: **0.1352 g**)

**Step 4 — % SO₄ in sample:**
$$\% SO_4 = \frac{0.1352}{0.5128} \times 100 = 26.37\%$$

(0.1352 has 4 sig. figs.; 0.5128 has 4 sig. figs. → answer: 4 sig. figs.: **26.37%**)

---

### Example 3 — pH and Antilog

A solution is found to have $[OH^-] = 2.4 \times 10^{-3}$ M (2 sig. figs.).

**pOH:**
$$pOH = -\log(2.4 \times 10^{-3}) = 2.619... \rightarrow 2.62$$

(2 sig. figs. in $[OH^-]$ → **2 decimal places** in pOH mantissa)

**pH (at 25°C, pKw = 14.00):**
$$pH = 14.00 - pOH = 14.00 - 2.62 = 11.38$$

(Addition: both have 2 decimal places → 2 decimal places in pH)

**[H⁺]:**
$$[H^+] = 10^{-11.38} = 4.169 \times 10^{-12} \text{ M}$$

2 decimal places in mantissa of pH → **2 sig. figs.** in [H⁺]:
$$[H^+] = 4.2 \times 10^{-12} \text{ M}$$

---

## 10. Practice Problems

1. How many significant figures are in each of the following?
   a) 0.000503 b) 7000 c) 7000. d) 7.000 × 10³ e) 100.0 f) 0.08040

2. Perform the following calculations and report answers with correct sig. figs.:
   a) $12.256 + 0.93 + 218.1$
   b) $4.0023 \times 6.12 \times 0.3$
   c) $\frac{(14.7 - 13.1)}{3.45}$
   d) $-\log(3.7 \times 10^{-8})$
   e) $\log\left(\frac{0.0350}{0.1050}\right)$

3. A burette reading at the start is 0.12 mL and at the end is 24.37 mL. What volume of titrant was used? Express with the correct number of sig. figs.

4. A 250.0 mL volumetric flask is filled to the mark with a solution containing 0.5000 g of solute. Calculate the concentration in g/L to the correct number of sig. figs.

*(Answers: 1: a=3, b=1-4 ambiguous, c=4, d=4, e=4, f=4 | 3: 24.25 mL | 4: 2.000 g/L)*

---

## 11. References

### Textbooks
- Skoog, D.A., Holler, F.J., & Crouch, S.R. (2017). *Principles of Instrumental Analysis* (7th ed.). Cengage Learning. Appendix 1.
- Harris, D.C. (2015). *Quantitative Chemical Analysis* (9th ed.). W.H. Freeman. Ch. 3.
- Zumdahl, S.S. & DeCoste, D.J. (2017). *Chemical Principles* (8th ed.). Cengage Learning. Ch. 1.

### Online Resources
- [LibreTexts — Significant Figures](https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_(Harvey)/02%3A_Basic_Tools_of_Analytical_Chemistry/2.02%3A_Significant_Figures)
- [ChemTeam — Significant Figures](https://www.chemteam.info/SigFigs/SigFigs.html)
- [Khan Academy — Significant Figures](https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/cc-6th-significant-figures/a/significant-figures-review)
- [NIST — Significant Figures and Uncertainty](https://www.nist.gov/pml/weights-and-measures/metric-si/si-units)

---

*End of File 08 — Significant Figure Convention*
