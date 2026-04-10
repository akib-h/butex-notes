# 05 — Precision and Accuracy

*Course: Analytical Analysis*
*Date: April 9, 2026*

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Accuracy](#2-accuracy)
   - 2.1 [Definition](#21-definition)
   - 2.2 [Measures of Accuracy](#22-measures-of-accuracy)
   - 2.3 [Absolute Error](#23-absolute-error)
   - 2.4 [Relative Error](#24-relative-error)
3. [Precision](#3-precision)
   - 3.1 [Definition](#31-definition)
   - 3.2 [Types of Precision](#32-types-of-precision)
   - 3.3 [Measures of Precision](#33-measures-of-precision)
4. [The Accuracy–Precision Distinction: The Target Analogy](#4-the-accuracyprecision-distinction-the-target-analogy)
5. [Relationship Between Precision and Accuracy](#5-relationship-between-precision-and-accuracy)
6. [Factors Affecting Accuracy](#6-factors-affecting-accuracy)
7. [Factors Affecting Precision](#7-factors-affecting-precision)
8. [Improving Accuracy and Precision](#8-improving-accuracy-and-precision)
9. [Uncertainty vs. Error](#9-uncertainty-vs-error)
10. [Worked Examples](#10-worked-examples)
11. [References](#11-references)

---

## 1. Introduction

In any quantitative analytical measurement, two fundamental concepts govern the quality of the result:

- **Accuracy:** How close the measured value is to the **true (accepted) value**.
- **Precision:** How close **repeated measurements** are to each other, regardless of whether they are close to the true value.

These are **independent** properties:
- A method can be precise but inaccurate (consistent, but consistently wrong).
- A method can be accurate on average but imprecise (scattered results that happen to average near the truth).
- A good analytical method aims to be **both accurate AND precise**.

---

## 2. Accuracy

### 2.1 Definition

> **Accuracy** is the degree of agreement between a **measured (experimental) value** and the **true (accepted/reference) value** of the quantity being measured.

It expresses the **closeness of the measurement to reality**. High accuracy implies the result is free from systematic error (bias).

In practice, the "true value" is often taken as:
- A certified reference material (CRM) value
- The mean of many highly precise measurements
- A known standard solution concentration

---

### 2.2 Measures of Accuracy

Accuracy is expressed through **error** — specifically, how far the measured result deviates from the true value.

---

### 2.3 Absolute Error

$$E_a = x_i - \mu$$

Where:
- $E_a$ = absolute error
- $x_i$ = experimentally measured value
- $\mu$ = true (accepted) value

The absolute error retains the **same units** as the measurement.

**Sign:**
- **Positive error** ($E_a > 0$): Result is higher than the true value.
- **Negative error** ($E_a < 0$): Result is lower than the true value.

**Example:**
True value of iron in a certified steel sample = **18.50%**
Measured value = **18.73%**

$$E_a = 18.73 - 18.50 = +0.23\%$$

The result is **0.23% too high** (positive bias).

---

### 2.4 Relative Error

The **relative error** expresses accuracy as a **fraction or percentage** of the true value — more meaningful when comparing methods for different analyte concentrations.

$$E_r = \frac{x_i - \mu}{\mu} \times 100\%$$

**Example (continuing from above):**

$$E_r = \frac{18.73 - 18.50}{18.50} \times 100\% = \frac{0.23}{18.50} \times 100\% = +1.24\%$$

**Another example:**
True concentration of Pb = 0.200 ppm; Measured = 0.196 ppm

$$E_a = 0.196 - 0.200 = -0.004 \text{ ppm}$$
$$E_r = \frac{-0.004}{0.200} \times 100\% = -2.0\%$$

---

## 3. Precision

### 3.1 Definition

> **Precision** is the degree of agreement among a set of **replicate measurements** made under identical conditions. It is a measure of the **reproducibility or repeatability** of the data.

Precision does **not** require knowledge of the true value. It is evaluated entirely from **repeated measurements of the same sample**.

---

### 3.2 Types of Precision

| Type | Definition | Conditions vary? |
|------|-----------|-----------------|
| **Repeatability** | Precision under identical, short-term conditions (same analyst, same day, same instrument) | No |
| **Intermediate Precision** (Ruggedness) | Precision within a laboratory but with variation in analyst, day, equipment | Yes (within lab) |
| **Reproducibility** | Precision across different laboratories (inter-lab study) | Yes (across labs) |

Repeatability gives the **best (tightest)** precision; reproducibility gives the **poorest**.

---

### 3.3 Measures of Precision

#### a) Range (w)
The simplest measure: difference between the largest and smallest values in a data set.

$$w = x_{\max} - x_{\min}$$

Simple but not robust (highly influenced by outliers).

---

#### b) Deviation from the Mean ($d_i$)

$$d_i = x_i - \bar{x}$$

Where $\bar{x}$ is the sample mean. Note: $\sum d_i = 0$ always.

---

#### c) Average Deviation (Mean Absolute Deviation, MAD)

$$\bar{d} = \frac{\sum_{i=1}^{n} |d_i|}{n} = \frac{\sum_{i=1}^{n} |x_i - \bar{x}|}{n}$$

---

#### d) Variance ($s^2$)

The **sample variance** is the most important statistical measure of spread:

$$s^2 = \frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n-1}$$

The denominator is $(n-1)$ — the **degrees of freedom** — not $n$, because we use the sample mean $\bar{x}$ (which is itself estimated from the data, consuming one degree of freedom).

---

#### e) Standard Deviation ($s$)

$$s = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n-1}}$$

- Most widely used precision measure
- Has the **same units** as the measurements
- Smaller $s$ → higher precision

---

#### f) Relative Standard Deviation (RSD) / Coefficient of Variation (CV)

Expresses standard deviation as a **percentage of the mean** — allows comparison of precision for measurements of different magnitudes.

$$RSD = \frac{s}{\bar{x}} \times 100\%$$

**Example:**
- Method A: $\bar{x} = 10.0 \text{ ppm}$, $s = 0.1 \text{ ppm}$ → $RSD = 1.0\%$
- Method B: $\bar{x} = 1000 \text{ ppm}$, $s = 5 \text{ ppm}$ → $RSD = 0.5\%$

Method B is more precise relative to its measurement level.

---

#### g) Pooled Standard Deviation

When combining replicate data from **multiple small sets** to get a better estimate of population standard deviation:

$$s_{\text{pooled}} = \sqrt{\frac{\sum_{i=1}^{k}(n_i - 1)s_i^2}{\sum_{i=1}^{k}(n_i - 1)}}$$

---

## 4. The Accuracy–Precision Distinction: The Target Analogy

Consider four scenarios of an archer shooting at a bullseye target:

```
Scenario 1: High Accuracy, High Precision
    All arrows clustered tightly at the bullseye.
    → Best analytical result. Both systematic and random errors are small.

Scenario 2: Low Accuracy, High Precision
    All arrows clustered tightly, but FAR from the bullseye.
    → Precise but biased. Systematic error is present (e.g., miscalibration).

Scenario 3: High Accuracy, Low Precision
    Arrows scattered all around the bullseye, but centered on it.
    → Average is correct, but individual results are unreliable. Large random error.

Scenario 4: Low Accuracy, Low Precision
    Arrows scattered randomly, far from the bullseye.
    → Worst case. Both systematic and random errors are large.
```

| Scenario | Accuracy | Precision | Error Type |
|----------|----------|-----------|------------|
| 1 | High | High | Minimal |
| 2 | Low | High | Systematic (bias) |
| 3 | High | Low | Random |
| 4 | Low | Low | Both |

---

## 5. Relationship Between Precision and Accuracy

**Key insight:**
> Precision is a **prerequisite** for accuracy, but does not guarantee it.
> Accuracy requires the **elimination of systematic errors**.

**A precise method with a bias:**
- Can be made accurate by applying a **correction factor**.
- Example: Systematic calibration error of +2% → correct all results by −2%.

**An imprecise (scattered) method:**
- Cannot be corrected for random scatter.
- Increasing the number of replicates reduces the **uncertainty in the mean**, but cannot improve individual measurement precision.

**Standard Error of the Mean (SEM):**
$$s_{\bar{x}} = \frac{s}{\sqrt{n}}$$

By increasing $n$ (more replicates), the mean becomes more reliable, even if individual measurements are imprecise.

---

## 6. Factors Affecting Accuracy

Accuracy is degraded by **systematic errors (bias)**:

1. **Instrumental errors:** Faulty calibration, detector non-linearity, signal drift.
2. **Method errors:** Non-stoichiometric reactions, co-precipitation of impurities, incomplete extraction.
3. **Personal (operator) errors:** Reading instruments at an angle (parallax), color-blindness at titration endpoint.
4. **Matrix effects:** Suppression/enhancement of signal due to sample matrix.
5. **Contamination:** Addition of analyte from reagents (reagent blank), laboratory environment.
6. **Analyte losses:** Volatilization, adsorption on container walls, photodegradation.

---

## 7. Factors Affecting Precision

Precision is degraded by **random errors**:

1. **Instrumental noise:** Electronic noise in detectors, thermal fluctuations.
2. **Operator variability:** Slight differences between successive readings.
3. **Environmental fluctuations:** Temperature and humidity changes, vibrations.
4. **Sample heterogeneity:** Variation in composition between aliquots of an inhomogeneous sample.
5. **Pipetting and weighing variability.**

---

## 8. Improving Accuracy and Precision

| Goal | Strategy |
|------|---------|
| Improve accuracy | Calibrate instruments, use CRMs, run blanks, validate method |
| Correct systematic error | Standard addition method, matrix matching, recovery experiments |
| Improve precision | Increase replicates (reduces SEM), control temperature, reduce analyst variability |
| Detect bias | Compare with reference method, spike recovery, CRM analysis |
| Minimize contamination | Procedural blanks, clean lab techniques, trace-clean reagents |

---

## 9. Uncertainty vs. Error

| Concept | Definition |
|---------|-----------|
| **Error** | The difference between a measured result and the true value (exact; requires knowing the true value) |
| **Uncertainty** | A quantified estimate of the **range** within which the true value is expected to lie (a statistical interval) |

The **expanded uncertainty (U)** at 95% confidence level:
$$U = k \cdot u_c$$
Where $k$ = coverage factor (usually 2 for ~95% CI) and $u_c$ = combined standard uncertainty.

Results are reported as: $\bar{x} \pm U$

---

## 10. Worked Examples

### Example 1 — Calculating Standard Deviation and RSD

Five replicate measurements of Mg in a water sample (mg/L):
28.4, 29.0, 28.6, 28.9, 28.7

**Step 1 — Mean:**
$$\bar{x} = \frac{28.4 + 29.0 + 28.6 + 28.9 + 28.7}{5} = \frac{143.6}{5} = 28.72 \text{ mg/L}$$

**Step 2 — Deviations and squared deviations:**

| $x_i$ | $d_i = x_i - \bar{x}$ | $d_i^2$ |
|--------|----------------------|---------|
| 28.4 | −0.32 | 0.1024 |
| 29.0 | +0.28 | 0.0784 |
| 28.6 | −0.12 | 0.0144 |
| 28.9 | +0.18 | 0.0324 |
| 28.7 | −0.02 | 0.0004 |
| **Sum** | 0.00 | **0.2280** |

**Step 3 — Variance:**
$$s^2 = \frac{0.2280}{5-1} = \frac{0.2280}{4} = 0.0570$$

**Step 4 — Standard Deviation:**
$$s = \sqrt{0.0570} = 0.239 \text{ mg/L}$$

**Step 5 — RSD:**
$$RSD = \frac{0.239}{28.72} \times 100\% = 0.832\%$$

---

### Example 2 — Absolute and Relative Error
True concentration of NaCl = 15.00 mg/L.
Measured by an analyst: 14.62 mg/L.

$$E_a = 14.62 - 15.00 = -0.38 \text{ mg/L}$$
$$E_r = \frac{-0.38}{15.00} \times 100\% = -2.53\%$$

The result is **2.53% below** the true value (negative bias). This may be due to an uncorrected blank.

---

### Example 3 — Standard Error of the Mean
Using the Mg data from Example 1 ($s = 0.239$, $n = 5$):

$$s_{\bar{x}} = \frac{0.239}{\sqrt{5}} = \frac{0.239}{2.236} = 0.107 \text{ mg/L}$$

Report: $\bar{x} = 28.72 \pm 0.107$ mg/L (standard error)

At 95% CI (using t-value for 4 degrees of freedom, $t_{4, 0.025} = 2.776$):
$$\text{CI} = \bar{x} \pm t \cdot s_{\bar{x}} = 28.72 \pm 2.776 \times 0.107 = 28.72 \pm 0.297 \text{ mg/L}$$

Reported: $28.72 \pm 0.30$ mg/L at 95% confidence.

---

## 11. References

### Textbooks
- Skoog, D.A., Holler, F.J., & Crouch, S.R. (2017). *Principles of Instrumental Analysis* (7th ed.). Cengage Learning. Ch. 5.
- Harris, D.C. (2015). *Quantitative Chemical Analysis* (9th ed.). W.H. Freeman. Ch. 3–4.
- Miller, J.N. & Miller, J.C. (2010). *Statistics and Chemometrics for Analytical Chemistry* (6th ed.). Pearson.

### Online Resources
- [LibreTexts — Precision, Accuracy, Mean and Standard Deviation](https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_(Harvey)/04%3A_Evaluating_Analytical_Data)
- [NIST/SEMATECH e-Handbook of Statistical Methods](https://www.itl.nist.gov/div898/handbook/)
- [IUPAC Compendium of Chemical Terminology (Gold Book)](https://goldbook.iupac.org/terms/view/A00043)
- [Khan Academy — Precision and Accuracy](https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/cc-6th-significant-figures/a/significant-figures-review)

---

*End of File 05 — Precision and Accuracy*
