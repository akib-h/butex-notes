# 05 — Analytical Chemistry (Errors, Sampling & Statistics)
### Chemistry-I (CHEM 101 / AS 109) | Bangladesh University of Textiles
> **Syllabus coverage:** Errors · Significant figures · Accuracy & Precision · Q-test · Sampling · Instrumental vs. chemical methods

---

## Table of Contents
1. [Types of Errors in Analysis](#1-types-of-errors-in-analysis)
2. [Accuracy and Precision](#2-accuracy-and-precision)
3. [Significant Figures](#3-significant-figures)
4. [Q-Test (Dixon's Q-Test)](#4-q-test-dixons-q-test)
5. [Sampling Techniques](#5-sampling-techniques)
6. [Instrumental vs. Chemical Analysis](#6-instrumental-vs-chemical-analysis)
7. [Exam Questions & Model Answers](#7-exam-questions--model-answers)
8. [Visual Aids](#8-visual-aids)
9. [Practice Questions](#9-practice-questions)
10. [References](#10-references)

---

## 1. Types of Errors in Analysis

### Definition
**Error** = Difference between the measured value and the true (accepted) value.

$$\text{Absolute Error} = X_{measured} - X_{true}$$
$$\text{Relative Error (\%)} = \frac{X_{measured} - X_{true}}{X_{true}} \times 100$$

### Classification of Errors

#### A. Determinate (Systematic) Errors
- Have a definite cause; **can be corrected**.
- Consistently make all results too high or too low (bias).

| Type | Description | Example |
|------|-------------|---------|
| Instrumental | Faulty calibration | Incorrectly calibrated burette |
| Method | Inherent error in procedure | Coprecipitation, solubility of precipitate |
| Personal/Operator | Observer bias | Incorrect endpoint detection (colour blindness) |
| Reagent | Impure chemicals | Oxidized standard solution |

**How to minimize determinate error:**
1. Calibrate all instruments carefully.
2. Run blank determinations.
3. Use high-purity reagents.
4. Employ alternative independent methods.
5. Recover/spike samples to check method accuracy.

#### B. Indeterminate (Random) Errors
- No specific cause; **cannot be eliminated** (only minimized by repetition).
- Follow Gaussian (normal) distribution.
- Caused by small uncontrollable fluctuations: humidity, temperature, vibration, reading scale.
- **Reduced by taking the mean** of many measurements.

#### C. Gross Errors (Blunders)
- Large mistakes due to operator carelessness.
- Examples: misreading scale, spilling, recording wrong digit.
- Detected by statistical tests (Q-test) or comparison with outliers.

---

## 2. Accuracy and Precision

### Definitions

| Term | Definition |
|------|-----------|
| **Accuracy** | Closeness of a measurement to the **true value** |
| **Precision** | Closeness of repeated measurements to **each other** (reproducibility) |

```
Target analogy:
●                    ●   ●               ● ●
        ●          ●  ●  ●            ●●  ●●
        ●            ●                 ●●●

  Poor accuracy     Poor accuracy      Good accuracy
  Poor precision    Good precision     Good precision
  (scattered,       (clustered, but    (clustered near
   off-center)       off-center)        center)
```

### Key Relationship
- High accuracy requires low systematic error.
- High precision requires low random error.
- You can have precision without accuracy (systematic error) but not accuracy without some precision.

### Comparison: Student A vs. Student B *(2017 Q3d)*

**Student A:** 10.0, 10.1, 10.0 (True value = 10.0)
**Student B:** 10.0, 11.0, 12.0

| | Student A | Student B |
|--|-----------|-----------|
| Mean | 10.03 | 11.0 |
| Deviation from true | 0.03 | 1.0 |
| **Accuracy** | **Better** (close to 10.0) | **Poor** (far from 10.0) |
| Range | 0.1 | 2.0 |
| **Precision** | **Better** (values close together) | **Poor** (scattered) |

Student A has both better accuracy AND better precision.

---

## 3. Significant Figures

### Rules for Significant Figures

1. **All non-zero digits** are significant: 123 → 3 sig figs
2. **Zeros between non-zero digits** are significant: 1023 → 4 sig figs
3. **Leading zeros** (before first non-zero digit) are **NOT significant**: 0.0023 → 2 sig figs
4. **Trailing zeros after a decimal point** ARE significant: 1.200 → 4 sig figs
5. **Trailing zeros without decimal** are ambiguous: 1200 → 2, 3, or 4 (use scientific notation)

### Why Leading Zeros Are Not Significant

Leading zeros serve only as **placeholders** to establish the position of the decimal point — they carry no information about the precision of the measurement.

**Example:** 0.0045 g
- The zeros merely show that the value is in the thousandths place.
- The actual measurement begins at the "4" — so there are only **2 significant figures** (4 and 5).
- Writing this as 4.5 × 10⁻³ makes it clear: 2 sig figs.

### Operations with Significant Figures

**Addition/Subtraction:** Keep the fewest **decimal places**.
$$23.45 + 1.2 = 24.65 \rightarrow 24.7 \text{ (1 decimal place)}$$

**Multiplication/Division:** Keep the fewest **significant figures**.
$$1.23 \times 4.5 = 5.535 \rightarrow 5.5 \text{ (2 sig figs)}$$

---

## 4. Q-Test (Dixon's Q-Test)

### Purpose
The **Q-test** (Dixon's Q-test) is a statistical method to determine whether a **suspected outlier** should be retained or discarded from a data set.

### Procedure

**Step 1:** Arrange data in ascending order: x₁ < x₂ < ... < xₙ

**Step 2:** Calculate the **Q-statistic** for the suspected outlier:

$$Q_{calc} = \frac{|x_{suspect} - x_{nearest}|}{x_{max} - x_{min}} = \frac{\text{Gap}}{\text{Range}}$$

**Step 3:** Compare Q_calc with the **critical value Q_critical** at the given confidence level.

| n | Q (90% confidence) | Q (95% confidence) |
|---|-------------------|-------------------|
| 3 | 0.941 | 0.970 |
| 4 | 0.765 | 0.829 |
| 5 | 0.642 | 0.710 |
| 6 | 0.560 | 0.625 |
| 7 | 0.507 | 0.568 |
| 8 | 0.468 | 0.526 |

**Step 4:** Decision rule:
- If **Q_calc > Q_critical** → **Reject** the outlier (it is statistically different).
- If **Q_calc < Q_critical** → **Retain** the outlier (insufficient evidence to discard it).

### Q-Test Worked Example *(2019 Q4b)*

**Data:** 100.0, 99.10, 99.70, 99.60 (%) — Student X's results.
**Suspected value:** 99.10% (questioned as careless)
**Confidence value (Q_critical):** 0.5

**Step 1:** Arrange: 99.10, 99.60, 99.70, 100.0 (n = 4)

**Step 2:** Calculate Q_calc:
$$Q_{calc} = \frac{|99.10 - 99.60|}{100.0 - 99.10} = \frac{0.50}{0.90} = 0.556$$

**Step 3:** Compare with Q_critical = 0.5 (given)

**Step 4:** Q_calc (0.556) > Q_critical (0.5)

**Decision: REJECT the value 99.10%** — it is statistically identified as an outlier and should be discarded as careless work.

---

## 5. Sampling Techniques

### What is Sampling?
**Sampling** is the process of selecting a representative portion of a population or batch for analysis. A good sample must be **representative** of the whole.

### Classification of Sampling Techniques

#### A. Probability Sampling (Random-based)
Every member of the population has a known, non-zero probability of being selected.

| Type | Description | When to Use |
|------|-------------|-------------|
| **Simple Random Sampling** | Each item has equal probability | Homogeneous populations |
| **Systematic Sampling** | Every nth item selected | Regular, ordered populations |
| **Stratified Sampling** | Population divided into strata; sample from each | Heterogeneous with known subgroups |
| **Cluster Sampling** | Population divided into clusters; entire clusters sampled | Large geographic populations |
| **Multi-stage Sampling** | Combination of methods in stages | Complex large populations |

#### B. Non-Probability Sampling
Selection is not random; relies on judgment.

| Type | Description |
|------|-------------|
| **Grab (Spot) Sample** | Single sample at one time/location |
| **Composite Sample** | Mix of several grab samples |
| **Judgement Sample** | Expert selects representative units |
| **Quota Sample** | Fixed number from subgroups |

### Types of Probability Samples (2 types, as commonly discussed)

1. **Simple Random Sample:** All items in the population have an equal chance of being selected. Example: Drawing numbers from a lottery.

2. **Systematic Sample:** Selecting items at regular intervals. Example: Testing every 10th tablet from a pharmaceutical production line.

3. **Stratified Sample:** Dividing the population into groups (strata) and taking random samples from each. Example: Analyzing cotton from each batch separately in a textile mill.

---

## 6. Instrumental vs. Chemical Analysis

### Chemical Analysis (Classical Methods)
Based on chemical reactions — gravimetry, titrimetry (volumetric analysis).

### Instrumental Methods
Based on measurement of physical properties (absorbance, emission, electrical response).

### Advantages of Instrumental Methods

1. **Sensitivity:** Can detect trace amounts (ppb, ppt levels).
2. **Speed:** Much faster than classical methods.
3. **Specificity:** Can distinguish between closely related species.
4. **Automation:** Can be automated for high-throughput analysis.
5. **Non-destructive:** Many methods don't destroy the sample.
6. **Simultaneous analysis:** Multiple components at once (e.g., ICP-MS).

### Disadvantages of Instrumental Methods

1. **Expensive equipment:** High initial cost of instruments.
2. **Calibration required:** Must be calibrated with standards.
3. **Maintenance:** Regular maintenance and skilled operators needed.
4. **Interference:** Spectral or matrix interferences.
5. **Relative measurements:** Most measure signal ratios, not absolute amounts.
6. **Complexity:** Requires training to operate and interpret data.

### Comparison Table

| Feature | Chemical Method | Instrumental Method |
|---------|-----------------|---------------------|
| Sensitivity | Moderate (mg level) | High (μg–ng level) |
| Cost | Low | High |
| Speed | Slow | Fast |
| Skill required | Moderate | High (training) |
| Automation | Difficult | Easy |
| Accuracy | High (primary standard) | Good (calibration-dependent) |

---

## 7. Exam Questions & Model Answers

### Q1. What is Q-test? Apply to decide if 99.10% should be retained or rejected (confidence = 0.5). *(2019 Q4b)*

*(See Section 4 — full worked example)*

**Result: REJECT 99.10%** since Q_calc (0.556) > Q_critical (0.5).

---

### Q2. Two students performed experiment. A got 10.0, 10.1, 10.0 and B got 10.0, 11.0, 12.0 (true value = 10.0). Compare accuracy and precision. *(2017 Q3d)*

*(See Section 2 — comparison table)*

Student A: Better accuracy (mean = 10.03, close to 10.0) and better precision (range = 0.1).
Student B: Poor accuracy (mean = 11.0, far from 10.0) and poor precision (range = 2.0).

---

### Q3. What is sampling? Classify sampling technique with example. *(2016 Q2c)*

*(See Section 5)*

**Sampling:** Process of selecting a representative portion of a total material for analysis.

**Classification:**
- **Probability sampling:** Simple random, systematic, stratified, cluster.
- **Non-probability:** Grab, composite, judgment.

**Example:** In textile quality control: take a systematic sample of 1 fabric roll every 50 from a production batch.

---

### Q4. Explain best two methods in your sense to minimize errors. *(2017 Q3c)*

1. **Replicate measurements (repetition):** Taking multiple measurements and using the mean reduces random error (indeterminate error). Standard deviation decreases as √n. Running at least 3–5 replicates is standard practice.

2. **Running blank determinations:** A blank contains all reagents but no analyte. Subtracting the blank signal from sample signal eliminates systematic errors from reagents, solvent, and vessel contamination (determinate error).

Other valid methods: calibration, standardization, method of standard addition.

---

### Q5. How do you determine the nature of salts? *(2019 Q4c(i))*

*(See also 04_Acids_and_Bases Section 8)*

Identify the acid and base from which the salt was formed:

| Salt | From | Nature |
|------|------|--------|
| NaCl | HCl (strong) + NaOH (strong) | Neutral (pH ≈ 7) |
| NH₄Cl | HCl (strong) + NH₃ (weak) | Acidic (pH < 7) |
| Na₂CO₃ | H₂CO₃ (weak) + NaOH (strong) | Basic (pH > 7) |
| NH₄CH₃COO | CH₃COOH (weak) + NH₃ (weak) | Near neutral |

Test in lab: use pH paper or universal indicator.

---

### Q6. Compare instrumental and chemical analysis techniques. *(2012 Q4a)*

*(See Section 6 — comparison table)*

---

### Q7. What is bond order? Show that bond order of nitrogen is 3. *(2015 Q4d)*

*(This is in 01_Chemical_Bonding — also relevant here as a short-answer cross-topic)*

Bond order = (Nᵦ − Nₐ)/2. For N₂: BO = (10−4)/2 = **3** (triple bond). ✓

---

### Q8. What is error? Classify error with example. *(2015 Q4a)*

**Error** = discrepancy between measured and true value.

**Classification:**
1. **Determinate (systematic):** Consistent bias; identifiable cause. Examples: uncalibrated burette, impure standard.
2. **Indeterminate (random):** Variable, no specific cause. Examples: reading parallax, temperature fluctuations.
3. **Gross (blunder):** Large mistakes. Examples: wrong calculation, spilling, wrong reagent.

---

## 8. Visual Aids

### Accuracy vs. Precision Targets
![Accuracy vs precision](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Accuracy_and_precision.svg/400px-Accuracy_and_precision.svg.png)
*Source: Wikimedia Commons — Four cases showing combinations of accuracy and precision*

### Normal Distribution of Random Errors
```
Frequency
  ↑
  |          ██
  |        ██████
  |      ██████████
  |    ██████████████
  | ████████████████████
  +──────────────────────→ Measurement value
             ↑
          True value
  
  Bell curve (Gaussian): random errors distribute symmetrically
  around the true value.
```

### Q-Test Illustration
```
Data: 99.10, 99.60, 99.70, 100.0

Range: |─────────────────────────| = 0.90
Gap:   |───|                       = 0.50

Q = Gap/Range = 0.50/0.90 = 0.556

Since 0.556 > Q_critical (0.5): REJECT 99.10%
```

---

## 9. Practice Questions

**Q1.** A student made four determinations of iron in a sample: 20.12%, 20.18%, 20.30%, 20.14%. Use the Q-test at 90% confidence (Q_critical = 0.765 for n=4) to determine if 20.30% should be rejected.

<details>
<summary>✅ Solution</summary>

Arrange: 20.12, 20.14, 20.18, 20.30 (ascending)
Suspected value: **20.30** (highest)

$$Q_{calc} = \frac{|20.30 - 20.18|}{20.30 - 20.12} = \frac{0.12}{0.18} = 0.667$$

Q_calc (0.667) < Q_critical (0.765) at 90% confidence

**Decision: RETAIN 20.30%** — insufficient evidence to reject it.

Mean (all 4) = (20.12 + 20.14 + 20.18 + 20.30)/4 = **20.185%**

</details>

---

**Q2.** How many significant figures are in: (a) 0.00450 (b) 1.040 × 10³ (c) 10300 (d) 120.010?

<details>
<summary>✅ Solution</summary>

(a) **0.00450:** Leading zeros not significant; trailing zero after decimal IS significant → **3 sig figs** (4, 5, 0)

(b) **1.040 × 10³:** 1, 0, 4, 0 — the trailing zero after 4 is significant → **4 sig figs**

(c) **10300:** Ambiguous (could be 3, 4, or 5); conventionally **3 sig figs** (1, 0, 3) unless specified

(d) **120.010:** All digits after 1 are counted (embedded zeros and trailing zeros after decimal) → **6 sig figs**

</details>

---

**Q3.** Differentiate between determinate and indeterminate errors.

<details>
<summary>✅ Solution</summary>

| | Determinate Error | Indeterminate Error |
|--|-------------------|---------------------|
| Also called | Systematic error | Random error |
| Cause | Specific, identifiable | Non-specific, variable |
| Direction | Always same way (all high or all low) | Random (some high, some low) |
| Can eliminate? | Yes, by correcting the source | No, only minimize by repetition |
| Statistics | Not reducible by averaging | Reduced by taking more measurements |
| Example | Incorrectly calibrated balance | Reading fluctuations |

</details>

---

**Q4.** Calculate: 24.567 + 3.21 − 0.1237 to the correct number of significant figures.

<details>
<summary>✅ Solution</summary>

In addition/subtraction, round to the fewest **decimal places**:

24.567 → 3 decimal places
3.21 → 2 decimal places ← fewest
0.1237 → 4 decimal places

24.567 + 3.21 − 0.1237 = 27.6533

Round to **2 decimal places:** **27.65**

</details>

---

**Q5.** What is stratified sampling? Give a textile industry example.

<details>
<summary>✅ Solution</summary>

**Stratified sampling** divides the population into homogeneous subgroups (strata) and takes random samples from each stratum proportionally.

**Textile example:** A factory produces fabric in 4 batches per day from different raw cotton suppliers (Batch A, B, C, D). Instead of randomly sampling from all batches combined, you take a proportional random sample from each batch separately. This ensures each supplier's fabric is represented in the analysis, which would catch quality differences between suppliers that a simple random sample might miss.

</details>

---

**Q6.** Why is it important to run a blank determination in quantitative analysis?

<details>
<summary>✅ Solution</summary>

A **blank determination** is performed using all reagents, solvents, and apparatus but **no analyte** (sample omitted).

**Purpose:**
- Detects and corrects for signals from reagents, solvents, contamination, or equipment.
- Eliminates **method blanks** and **reagent blanks**.
- The true analyte signal = (Sample signal) − (Blank signal).

**Example:** If a colorimetric reagent itself has slight absorbance, subtracting the blank corrects for this, giving the true absorbance due to the analyte alone.

This removes a source of **determinate (systematic) error**.

</details>

---

**Q7.** Results for iron analysis: 12.42%, 12.38%, 12.41%, 12.40%. Calculate (a) mean, (b) range, (c) standard deviation.

<details>
<summary>✅ Solution</summary>

Data: 12.42, 12.38, 12.41, 12.40 (n = 4)

**(a) Mean:**
$$\bar{x} = \frac{12.42 + 12.38 + 12.41 + 12.40}{4} = \frac{49.61}{4} = 12.4025 \approx \mathbf{12.40\%}$$

**(b) Range:**
$$R = x_{max} - x_{min} = 12.42 - 12.38 = \mathbf{0.04\%}$$

**(c) Standard deviation:**

| xᵢ | xᵢ − x̄ | (xᵢ − x̄)² |
|----|---------|-----------|
| 12.42 | +0.0175 | 0.000306 |
| 12.38 | −0.0225 | 0.000506 |
| 12.41 | +0.0075 | 0.0000563 |
| 12.40 | −0.0025 | 0.00000625 |

$$s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n-1}} = \sqrt{\frac{0.000875}{3}} = \sqrt{0.000292} \approx \mathbf{0.017\%}$$

</details>

---

**Q8.** What is the difference between a grab sample and a composite sample?

<details>
<summary>✅ Solution</summary>

| | Grab Sample | Composite Sample |
|--|------------|-----------------|
| Definition | Single sample at one specific time and location | Combination of multiple grab samples |
| Represents | Conditions at that instant/location only | Average conditions over time or area |
| Use | Quick spot-check; process monitoring | Effluent quality over 24 hours; batch average |
| Cost | Cheap | More expensive (multiple collections) |
| Example | Sampling dye bath at one moment | Mixing hourly wastewater samples from a dyeing unit |

</details>

---

**Q9.** Express 0.003450 in scientific notation and state how many significant figures it has.

<details>
<summary>✅ Solution</summary>

**Scientific notation:** 3.450 × 10⁻³

**Significant figures:** 4 (the digits 3, 4, 5, 0 — the trailing zero after the decimal in 3.450 is significant because it was measured/retained).

The leading zeros (0.00...) are placeholders only — they are **not** significant.

</details>

---

**Q10.** What are the advantages of using the mean of multiple measurements over a single measurement?

<details>
<summary>✅ Solution</summary>

1. **Reduces random error:** The standard deviation of the mean (standard error) = s/√n — it decreases as √n. More measurements → smaller uncertainty.

2. **Detects blunders:** Outliers become obvious when compared against the cluster of other results. The Q-test can then be applied.

3. **Statistical confidence:** A mean of n measurements allows calculation of confidence intervals, giving a quantitative estimate of the reliability of the result.

4. **Better representativeness:** Multiple samples from different portions of a sample better represent the whole.

**Practical note:** Usually 3–5 replicates are standard. Beyond ~10, the improvement per additional measurement becomes small.

</details>

---

## 10. References

1. Skoog, D. A., West, D. M., Holler, F. J., & Crouch, S. R. (2014). *Fundamentals of Analytical Chemistry* (9th ed.). Cengage Learning.
2. Harvey, D. (2016). *Modern Analytical Chemistry*. McGraw-Hill. https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Book:_Analytical_Chemistry_2.1_(Harvey)
3. Miller, J. N., & Miller, J. C. (2018). *Statistics and Chemometrics for Analytical Chemistry* (7th ed.). Pearson.
4. Dixon, W. J. (1951). Ratios involving extreme values. *The Annals of Mathematical Statistics, 22*(1), 68–78.
5. IUPAC. (2002). Nomenclature in evaluation of analytical methods including detection and quantification capabilities. *Pure and Applied Chemistry, 74*(5), 835–855.
6. LibreTexts Chemistry. (2023). *Analytical Chemistry: Introduction*. https://chem.libretexts.org/Bookshelves/Analytical_Chemistry

---

*Last updated: 2025 | Repository: BUTex Chemistry-I Study Notes*

[← Previous: Acids & Bases](./04_Acids_and_Bases.md) | [Next: Colligative Properties →](./06_Colligative_Properties.md)
