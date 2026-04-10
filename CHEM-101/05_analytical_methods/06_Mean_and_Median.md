# 06 — Mean and Median

*Course: Analytical Analysis*
*Date: April 9, 2026*

---

## Table of Contents

1. [Introduction: Measures of Central Tendency](#1-introduction-measures-of-central-tendency)
2. [The Mean](#2-the-mean)
   - 2.1 [Arithmetic Mean (Sample Mean)](#21-arithmetic-mean-sample-mean)
   - 2.2 [Population Mean vs. Sample Mean](#22-population-mean-vs-sample-mean)
   - 2.3 [Weighted Mean](#23-weighted-mean)
   - 2.4 [Geometric Mean](#24-geometric-mean)
   - 2.5 [Trimmed Mean](#25-trimmed-mean)
   - 2.6 [Grand Mean](#26-grand-mean)
3. [The Median](#3-the-median)
   - 3.1 [Definition and Calculation](#31-definition-and-calculation)
   - 3.2 [Properties of the Median](#32-properties-of-the-median)
4. [Mean vs. Median: When to Use Which](#4-mean-vs-median-when-to-use-which)
5. [Other Measures of Central Tendency](#5-other-measures-of-central-tendency)
   - 5.1 [Mode](#51-mode)
   - 5.2 [Midrange](#52-midrange)
6. [Confidence Intervals for the Mean](#6-confidence-intervals-for-the-mean)
7. [The Role of Mean and Median in Outlier Detection](#7-the-role-of-mean-and-median-in-outlier-detection)
8. [Worked Examples](#8-worked-examples)
9. [References](#9-references)

---

## 1. Introduction: Measures of Central Tendency

When a set of **replicate analytical measurements** is made, the results are not identical — they form a **distribution of values** around a central location. A single number that best represents the "typical" or "central" value of a dataset is called a **measure of central tendency**.

The two most important measures in analytical chemistry are:

| Measure | Key Property |
|---------|-------------|
| **Mean** | Uses all data values; best for symmetric, normally distributed data |
| **Median** | Uses only the middle value; robust to outliers and skewed distributions |

In analytical chemistry, most random errors follow a **Gaussian (normal) distribution**, and the **mean** is the primary measure used. The median gains importance when **outliers** or **asymmetric distributions** are present.

---

## 2. The Mean

### 2.1 Arithmetic Mean (Sample Mean)

The **arithmetic mean** (often simply "the mean") is the **sum of all measurements divided by the number of measurements**.

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} = \frac{x_1 + x_2 + x_3 + \cdots + x_n}{n}$$

Where:
- $\bar{x}$ = sample mean (read "x-bar")
- $x_i$ = individual measurement $i$
- $n$ = total number of measurements (sample size)

**Properties of the arithmetic mean:**
- All data points contribute **equally**.
- The sum of deviations from the mean is **always zero**: $\sum_{i=1}^{n}(x_i - \bar{x}) = 0$
- Sensitive to extreme values (outliers can distort the mean).
- Minimizes the **sum of squared deviations**: no other value of the center gives a smaller $\sum(x_i - c)^2$.

---

### 2.2 Population Mean vs. Sample Mean

| Quantity | Symbol | Formula | Meaning |
|----------|--------|---------|---------|
| Population mean | $\mu$ (mu) | $\mu = \frac{\sum_{i=1}^{N} x_i}{N}$ | True mean of **all possible measurements** (usually unknown) |
| Sample mean | $\bar{x}$ | $\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$ | Mean of the **observed data set** (our estimate of μ) |

In analytical chemistry, we can never perform an infinite number of measurements, so **$\bar{x}$ is always used as an estimate of $\mu$**.

As $n$ increases, $\bar{x}$ approaches $\mu$ (Law of Large Numbers).

---

### 2.3 Weighted Mean

When measurements have **different precisions or importance**, a **weighted mean** assigns more weight to the more precise (reliable) measurements.

$$\bar{x}_w = \frac{\sum_{i=1}^{n} w_i x_i}{\sum_{i=1}^{n} w_i}$$

Where $w_i$ is the weight assigned to measurement $x_i$.

**Common weighting choices:**
- Weight by inverse variance: $w_i = \frac{1}{s_i^2}$ (more weight to more precise measurement)
- Weight by number of replicates: $w_i = n_i$

**Example:**
Lab A reports $c = 12.5$ mg/L ($s = 0.3$); Lab B reports $c = 12.9$ mg/L ($s = 0.1$).

$$w_A = \frac{1}{(0.3)^2} = 11.1 \qquad w_B = \frac{1}{(0.1)^2} = 100$$

$$\bar{x}_w = \frac{(11.1 \times 12.5) + (100 \times 12.9)}{11.1 + 100} = \frac{138.9 + 1290}{111.1} = \frac{1428.9}{111.1} = 12.86 \text{ mg/L}$$

Lab B's result dominates due to its much higher precision.

---

### 2.4 Geometric Mean

Used when data span **orders of magnitude**, or when the data are log-normally distributed (common in environmental and biological data).

$$\bar{x}_g = \left(\prod_{i=1}^{n} x_i\right)^{1/n} = \exp\left(\frac{\sum_{i=1}^{n} \ln x_i}{n}\right)$$

**Example:**
Bacterial counts over 4 days: 100, 1,000, 10,000, 100,000 CFU/mL.

$$\bar{x}_g = (100 \times 1000 \times 10000 \times 100000)^{1/4} = (10^{2+3+4+5})^{1/4} = 10^{14/4} = 10^{3.5} = 3162 \text{ CFU/mL}$$

The arithmetic mean would give 27,775 CFU/mL — misleadingly dominated by the largest value.

---

### 2.5 Trimmed Mean

A **trimmed mean** removes a fixed percentage of the **extreme values** (both high and low) before calculating the mean. This reduces the influence of outliers while retaining more data than the median.

**Example (10% trimmed mean):**
Dataset (10 values): 14.1, 14.3, 14.5, 14.6, 14.7, 14.8, 14.9, 15.0, 15.1, 17.8

Remove bottom 10% (1 value): 14.1  
Remove top 10% (1 value): 17.8  
Calculate mean of remaining 8 values:

$$\bar{x}_{\text{trimmed}} = \frac{14.3+14.5+14.6+14.7+14.8+14.9+15.0+15.1}{8} = \frac{117.9}{8} = 14.74$$

Compare: Arithmetic mean of all 10 = **15.38** (pulled up by outlier 17.8)

---

### 2.6 Grand Mean

When $k$ groups of measurements are combined, the **grand mean** is the overall average:

$$\bar{\bar{x}} = \frac{\sum_{j=1}^{k} n_j \bar{x}_j}{\sum_{j=1}^{k} n_j}$$

Used in ANOVA and inter-laboratory studies.

---

## 3. The Median

### 3.1 Definition and Calculation

> **The median** is the **middle value** of a data set arranged in ascending (or descending) order.

**Steps to calculate the median:**

**Step 1:** Arrange all values in **ascending order**.

**Step 2:**
- If $n$ is **odd**: Median = middle value = value at position $\frac{n+1}{2}$
- If $n$ is **even**: Median = **average of two middle values** at positions $\frac{n}{2}$ and $\frac{n}{2}+1$

**Formula:**

For $n$ odd:
$$\tilde{x} = x_{\left(\frac{n+1}{2}\right)}$$

For $n$ even:
$$\tilde{x} = \frac{x_{\left(\frac{n}{2}\right)} + x_{\left(\frac{n}{2}+1\right)}}{2}$$

Where $x_{(k)}$ denotes the $k$-th ordered value.

---

**Example — Odd n:**
Dataset: 22.1, 21.8, 22.5, 21.9, 23.1 (n = 5)

Ordered: 21.8, 21.9, **22.1**, 22.5, 23.1

Median position = $\frac{5+1}{2}$ = 3rd value

$$\tilde{x} = 22.1$$

---

**Example — Even n:**
Dataset: 15.3, 14.9, 15.7, 15.1, 15.4, 15.0 (n = 6)

Ordered: 14.9, 15.0, **15.1, 15.3**, 15.4, 15.7

Median positions: 3rd and 4th values

$$\tilde{x} = \frac{15.1 + 15.3}{2} = 15.2$$

---

### 3.2 Properties of the Median

1. **Robustness to outliers:** The median is unaffected by extreme values.
   > Example: {2, 3, 4, 5, 100} → Median = 4; Mean = 22.8. The median far better represents the "center" of this distribution.

2. **Minimizes the sum of absolute deviations:** The median minimizes $\sum |x_i - c|$, whereas the mean minimizes $\sum (x_i - c)^2$.

3. **For a symmetric distribution:** Mean = Median = Mode.

4. **For a right-skewed distribution** (long right tail): Mean > Median.

5. **For a left-skewed distribution** (long left tail): Mean < Median.

6. **Efficiency:** For normally distributed data, the median is **less efficient** than the mean (requires more observations to achieve the same precision). The **relative efficiency** of the median vs. mean is approximately 64% for a normal distribution.

---

## 4. Mean vs. Median: When to Use Which

| Situation | Recommended Measure | Reason |
|-----------|--------------------|---------| 
| Symmetric distribution, no outliers | **Mean** | More efficient, uses all data |
| Skewed distribution | **Median** | Robust to skew |
| Suspected outliers present | **Median** (or trimmed mean) | Outlier-resistant |
| Reporting environmental contamination data | **Median** | Skewed distributions common |
| Reporting replicate analytical measurements | **Mean** | Normally distributed random errors |
| Log-normally distributed data (environmental, biological) | **Geometric mean** or median | Better representation |
| Calibration data, standard curves | **Mean (via least squares regression)** | Minimizes squared deviations |
| Interlaboratory proficiency testing | **Median** (robust statistics) | Resistant to individual lab bias |

---

## 5. Other Measures of Central Tendency

### 5.1 Mode

The **mode** is the value that occurs **most frequently** in the dataset.

- Useful for categorical data or discrete distributions.
- Rare in analytical chemistry (measurements are continuous).
- A dataset can have **no mode** (all values unique), **one mode** (unimodal), or **multiple modes** (bimodal, multimodal).

**Example:** 15.1, 15.3, 15.3, 15.4, 15.5 → Mode = 15.3

---

### 5.2 Midrange

$$\text{Midrange} = \frac{x_{\max} + x_{\min}}{2}$$

Simple but highly sensitive to outliers. Rarely used in serious analytical work.

---

## 6. Confidence Intervals for the Mean

The **confidence interval (CI)** defines a range within which the true population mean $\mu$ is expected to fall with a stated probability.

$$\text{CI}: \bar{x} \pm t_{(n-1, \alpha/2)} \cdot \frac{s}{\sqrt{n}}$$

Where:
- $t_{(n-1, \alpha/2)}$ = t-critical value from Student's t-distribution with $n-1$ degrees of freedom
- $\alpha$ = significance level (e.g., $\alpha = 0.05$ for 95% CI)
- $\frac{s}{\sqrt{n}}$ = standard error of the mean (SEM)

### t-Table Values (two-tailed, 95% CI):

| Degrees of Freedom ($\nu = n-1$) | $t_{0.025}$ |
|----------------------------------|------------|
| 1 | 12.706 |
| 2 | 4.303 |
| 3 | 3.182 |
| 4 | 2.776 |
| 5 | 2.571 |
| 9 | 2.262 |
| 19 | 2.093 |
| ∞ | 1.960 |

**Note:** As $n$ increases, the t-value approaches the z-value (1.960), and the CI narrows.

---

## 7. The Role of Mean and Median in Outlier Detection

### Grubbs Test (G-test)
Tests whether the value most extreme from the mean is a statistical outlier.

$$G = \frac{|x_{\text{suspect}} - \bar{x}|}{s}$$

Compare $G$ to a critical value $G_c$ (tabulated for given $n$ and confidence level). If $G > G_c$, the value is declared an **outlier** and may be rejected.

### Q-Test (Dixon's Q Test)
For small datasets ($n = 3$–10):

$$Q = \frac{x_{\text{suspect}} - x_{\text{nearest}}}{x_{\max} - x_{\min}}$$

If $Q > Q_c$ (tabulated critical value), the suspect value is rejected.

### Role of Median in Outlier Detection
- The median (and IQR) are used in **box-and-whisker plots** to visually identify outliers.
- Values beyond $Q_3 + 1.5 \cdot IQR$ or below $Q_1 - 1.5 \cdot IQR$ are flagged as potential outliers.
  - $IQR = Q_3 - Q_1$ (interquartile range)

---

## 8. Worked Examples

### Example 1 — Mean, Median, Standard Deviation
Calcium content (%) in 7 replicate analyses of a limestone sample:
38.9, 39.2, 38.8, 39.5, 39.1, 38.7, 40.6

**Arithmetic Mean:**
$$\bar{x} = \frac{38.9+39.2+38.8+39.5+39.1+38.7+40.6}{7} = \frac{274.8}{7} = 39.26\%$$

**Median:** Ordered: 38.7, 38.8, 38.9, **39.1**, 39.2, 39.5, 40.6
$$\tilde{x} = 39.1\%$$

**Observation:** The mean (39.26%) is pulled higher than the median (39.1%) by the possible outlier 40.6%.

**Variance and Standard Deviation:**

| $x_i$ | $d_i = x_i - 39.26$ | $d_i^2$ |
|--------|---------------------|---------|
| 38.9 | −0.36 | 0.1296 |
| 39.2 | −0.06 | 0.0036 |
| 38.8 | −0.46 | 0.2116 |
| 39.5 | +0.24 | 0.0576 |
| 39.1 | −0.16 | 0.0256 |
| 38.7 | −0.56 | 0.3136 |
| 40.6 | +1.34 | 1.7956 |
| | **Sum** | **2.5372** |

$$s^2 = \frac{2.5372}{6} = 0.4229$$
$$s = 0.650\%$$

$$RSD = \frac{0.650}{39.26} \times 100\% = 1.66\%$$

---

### Example 2 — Grubbs Test for Outlier (40.6%)
$G = \frac{|40.6 - 39.26|}{0.650} = \frac{1.34}{0.650} = 2.06$

Critical value for $n = 7$ at 95% confidence: $G_c = 2.020$.

Since $G = 2.06 > G_c = 2.020$: The value **40.6% is a statistical outlier** at the 95% confidence level and may be rejected.

After removal ($n = 6$): New mean = 39.03%, new $s = 0.283\%$, $RSD = 0.73\%$.

---

### Example 3 — Confidence Interval
Using the original 7 values (including 40.6%): $\bar{x} = 39.26\%$, $s = 0.650$, $n = 7$.

$t_{6, 0.025} = 2.447$

$$CI = 39.26 \pm 2.447 \times \frac{0.650}{\sqrt{7}} = 39.26 \pm 2.447 \times 0.246 = 39.26 \pm 0.60\%$$

Reported: $\bar{x} = 39.26 \pm 0.60\%$ Ca at 95% confidence.

---

## 9. References

### Textbooks
- Skoog, D.A., Holler, F.J., & Crouch, S.R. (2017). *Principles of Instrumental Analysis* (7th ed.). Cengage Learning. Appendix 1.
- Harris, D.C. (2015). *Quantitative Chemical Analysis* (9th ed.). W.H. Freeman. Ch. 4.
- Miller, J.N. & Miller, J.C. (2010). *Statistics and Chemometrics for Analytical Chemistry* (6th ed.). Pearson. Ch. 2.
- Analytical Methods Committee (1989). *Robust Statistics — How Not to Reject Outliers*. Analyst, 114, 1693–1697.

### Online Resources
- [LibreTexts — Basic Statistics for Analytical Chemistry](https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_(Harvey)/04%3A_Evaluating_Analytical_Data/4.02%3A_Characterizing_Experimental_Errors)
- [NIST/SEMATECH — Measures of Location (Mean and Median)](https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm)
- [IUPAC Gold Book — Mean](https://goldbook.iupac.org/terms/view/M03790)

---

*End of File 06 — Mean and Median*
