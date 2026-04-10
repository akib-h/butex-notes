# 07 — Types of Errors

*Course: Analytical Analysis*
*Date: April 9, 2026*

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Classification of Analytical Errors](#2-classification-of-analytical-errors)
3. [Systematic (Determinate) Errors](#3-systematic-determinate-errors)
   - 3.1 [Instrumental Errors](#31-instrumental-errors)
   - 3.2 [Method Errors](#32-method-errors)
   - 3.3 [Personal (Operator) Errors](#33-personal-operator-errors)
   - 3.4 [Characteristics of Systematic Errors](#34-characteristics-of-systematic-errors)
   - 3.5 [Detection and Correction of Systematic Errors](#35-detection-and-correction-of-systematic-errors)
4. [Random (Indeterminate) Errors](#4-random-indeterminate-errors)
   - 4.1 [Sources of Random Error](#41-sources-of-random-error)
   - 4.2 [The Gaussian Distribution](#42-the-gaussian-distribution)
   - 4.3 [Minimizing Random Errors](#43-minimizing-random-errors)
5. [Gross Errors (Blunders)](#5-gross-errors-blunders)
6. [Propagation of Errors](#6-propagation-of-errors)
   - 6.1 [Addition and Subtraction](#61-addition-and-subtraction)
   - 6.2 [Multiplication and Division](#62-multiplication-and-division)
   - 6.3 [Exponentiation and Logarithm](#63-exponentiation-and-logarithm)
7. [Error in the Context of Calibration](#7-error-in-the-context-of-calibration)
8. [Signal-to-Noise Ratio (S/N)](#8-signal-to-noise-ratio-sn)
9. [Worked Examples](#9-worked-examples)
10. [Summary Table](#10-summary-table)
11. [References](#11-references)

---

## 1. Introduction

In every analytical measurement, the **measured value ($x_i$)** will differ from the **true value ($\mu$)** to some extent. This difference is called **error**:

$$\text{Error} = x_i - \mu$$

Errors are **unavoidable**, but they can be:
- **Characterized** (understood in terms of their source)
- **Minimized** (through careful technique and instrument design)
- **Corrected** (for systematic components)
- **Quantified** (through uncertainty analysis)

Understanding the nature of errors is fundamental to critically evaluating analytical data.

---

## 2. Classification of Analytical Errors

```
                    Analytical Errors
                          │
          ┌───────────────┼──────────────────┐
          ▼               ▼                  ▼
  Systematic         Random              Gross
  (Determinate)   (Indeterminate)       (Blunders)
  
  Fixed direction  Random direction     Large, obvious
  and magnitude    and magnitude        mistakes
  
  Affects accuracy  Affects precision   Invalidate data
  
  Can be corrected  Reduced by          Data must be
                   replication         discarded
```

---

## 3. Systematic (Determinate) Errors

### Definition

> **Systematic errors** are errors that are **reproducible, directional** (always positive or always negative), and affect the **accuracy** of results. They arise from a **definite, assignable cause** and produce a **bias** in the data.

A systematic error shifts **all** replicate measurements in the **same direction** by approximately the **same magnitude**. Increasing the number of replicates does **not** reduce systematic error.

---

### 3.1 Instrumental Errors

Caused by **flaws or failures in the measuring instrument** or its calibration.

| Source | Example |
|--------|---------|
| Uncalibrated glassware | A 25 mL burette calibrated at 20°C delivers 25.05 mL at 30°C |
| Balance drift | Electronic balance gives consistently high or low readings due to faulty calibration or temperature effect |
| Detector non-linearity | Photodetector gives non-linear response above 1.5 absorbance units in UV-Vis |
| Lamp aging | Hollow cathode lamp intensity decreases with use → signal decreases → apparent concentration decreases |
| Electrode drift | pH electrode reading shifts over time due to reference junction contamination |
| Volume delivery errors | Automatic pipette not calibrated to deliver exact volume |

**Correction:** Regular calibration of all instruments with certified standards; maintenance logs.

---

### 3.2 Method Errors

Arise from **non-ideal chemical or physical behavior** in the analytical procedure itself.

| Source | Example |
|--------|---------|
| Non-stoichiometric reactions | Incomplete or side reactions in titrimetric analysis |
| Coprecipitation | In gravimetry, impurities are trapped in the precipitate, giving high results |
| Incomplete dissolution | Residual solids in digestion give low results |
| Incomplete extraction | Analyte not fully transferred to extract |
| Volatilization of analyte | Mercury volatilizes during acid digestion |
| Matrix interference | High dissolved solids suppress AAS signal |
| Indicator error in titrations | Visual endpoint does not coincide with true equivalence point |
| Adsorption losses | Trace metals adsorb onto container walls at very low concentrations |

**Method errors are the most difficult to detect** because they are inherent to the procedure.

**Detection:** Analysis of certified reference materials (CRMs), comparison with an independent method, spike recovery tests.

---

### 3.3 Personal (Operator) Errors

Caused by the **individual analyst's habits, biases, and limitations**.

| Source | Example |
|--------|---------|
| Parallax error | Reading a burette from an angle gives incorrect volume |
| Color blindness | Analyst cannot detect the correct endpoint color change |
| Number bias | Tendency to round readings to certain preferred digits (e.g., 0 or 5) |
| Anticipation of endpoint | Adding titrant too slowly/fast near expected endpoint |
| Transcription error | Writing 22.45 as 22.54 |
| Contamination from skin | Oils and metals transferred to sample containers |

**Mitigation:** Instrument-based endpoint detection (potentiometric titration), double-blind procedures, standardized protocols, training.

---

### 3.4 Characteristics of Systematic Errors

1. **Constant systematic error:** Error is the same magnitude regardless of analyte concentration.
   > Example: A reagent blank contributes a fixed signal (e.g., +0.010 absorbance units) regardless of sample concentration.

2. **Proportional systematic error:** Error is proportional to the analyte concentration.
   > Example: A primary standard was prepared at 99% purity but assumed to be 100%. All calibration points are off by 1%, and all sample results are 1% too high.

**Graphical representation:**

```
Calibration error types:

Signal
│               /  True line
│              /
│     Constant/   bias line (shifted up)
│             /
│────────────────── 0 ──────────────────── Concentration

Proportional error → slope is different (steeper or shallower)
Constant error → intercept is shifted from zero
```

---

### 3.5 Detection and Correction of Systematic Errors

| Strategy | How It Works |
|----------|-------------|
| **Certified Reference Materials (CRMs)** | Analyze a material with a known, certified value. Compare measured vs. certified value. |
| **Blank correction** | Measure a reagent blank (contains all reagents but no analyte). Subtract blank signal from sample signal. |
| **Standard addition method** | Add known amounts of analyte to the sample matrix. Corrects for matrix effects. |
| **Inter-laboratory comparison** | Compare results with other independent laboratories using the same sample. |
| **Independent method comparison** | Analyze same sample using a different, validated method. |
| **Spike recovery test** | Add a known amount of analyte to a real sample before analysis. Calculate % recovery. Ideal = 100%. |

$$\% \text{Recovery} = \frac{c_{\text{measured in spiked}} - c_{\text{unspiked}}}{c_{\text{added}}} \times 100\%$$

---

## 4. Random (Indeterminate) Errors

### Definition

> **Random errors** are errors that vary in an **unpredictable manner** (both direction and magnitude) from one measurement to the next. They cause **scatter** in replicate measurements and affect **precision**.

Random errors arise from **uncontrollable fluctuations** in the measurement system and environment. They cannot be traced to a single source, but their combined effect follows a **statistical distribution**.

---

### 4.1 Sources of Random Error

| Category | Specific Sources |
|----------|----------------|
| **Instrument noise** | Electronic noise (Johnson noise, shot noise), fluctuations in laser power, detector dark current |
| **Environmental** | Temperature variations, vibrations, air currents affecting the balance |
| **Operator** | Slight differences in reading a scale, pipetting technique |
| **Sample** | Inhomogeneity between aliquots of an imperfectly mixed sample |
| **Chemical** | Slight variation in reaction rates, equilibrium fluctuations |

---

### 4.2 The Gaussian Distribution

When many independent random errors are present, their sum follows a **Gaussian (normal) distribution** by the Central Limit Theorem.

The **probability density function (PDF)** is:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$

Where:
- $\mu$ = population mean (center of distribution)
- $\sigma$ = population standard deviation (width of distribution)
- Smaller $\sigma$ → narrower peak → higher precision

**Key areas under the Gaussian curve:**

| Interval | % of measurements within range |
|----------|-------------------------------|
| $\mu \pm 1\sigma$ | **68.27%** |
| $\mu \pm 2\sigma$ | **95.45%** |
| $\mu \pm 3\sigma$ | **99.73%** |

This means that if a method has $\sigma = 0.5$ ppm, approximately:
- 68% of results will fall within ±0.5 ppm of the true mean
- 95% within ±1.0 ppm
- 99.7% within ±1.5 ppm

**The Gaussian distribution is symmetric** about $\mu$, meaning random errors are equally likely to be positive or negative → averaging many results brings the mean close to $\mu$.

---

### 4.3 Minimizing Random Errors

1. **Increase number of replicates (n):** The standard error of the mean $s_{\bar{x}} = s/\sqrt{n}$ decreases. Each factor-of-4 increase in $n$ halves the standard error.

2. **Improve instrument stability:** Shield electronics, use temperature-controlled rooms, anti-vibration tables.

3. **Use better instrumentation:** Lower-noise detectors, more stable light sources.

4. **Improve analyst technique:** Consistent pipetting speed, use of volumetric glassware.

5. **Statistical averaging:** Average multiple readings of the same sample.

---

## 5. Gross Errors (Blunders)

### Definition

> **Gross errors** (blunders) are **large mistakes** that produce results obviously different from the rest of the dataset. They arise from **human mistakes, equipment failure, or sample mix-ups**.

Examples:
- Recording the wrong sample ID
- Forgetting to add a reagent
- Gross spillage during analysis
- Instrument failure (power outage during a run)
- Transcription errors (decimal point in wrong place)

### Treatment:
- Gross errors **should not be averaged** with valid results.
- Use **statistical outlier tests** (Grubbs, Q-test) to decide whether a suspected outlier is a gross error or merely an extreme random event.
- **Never discard data** without documented scientific justification and the use of an appropriate statistical test.
- In regulated labs (GMP, FDA), all discarded data must be documented with a scientifically defensible reason.

---

## 6. Propagation of Errors

When a result is **calculated from multiple measured quantities**, each with its own uncertainty, the errors **propagate** through the calculation. Understanding error propagation is essential for reporting uncertainties correctly.

---

### 6.1 Addition and Subtraction

For $y = a + b - c$ (where $a$, $b$, $c$ are independent measurements with absolute uncertainties $s_a$, $s_b$, $s_c$):

$$s_y = \sqrt{s_a^2 + s_b^2 + s_c^2}$$

The **absolute uncertainties add in quadrature**.

**Example:**
$y = (25.12 \pm 0.03) + (10.05 \pm 0.02) - (5.35 \pm 0.01)$ mL

$$s_y = \sqrt{(0.03)^2 + (0.02)^2 + (0.01)^2} = \sqrt{0.0009 + 0.0004 + 0.0001} = \sqrt{0.0014} = 0.037 \text{ mL}$$

$y = 29.82 \pm 0.04$ mL (rounded to 1 sig. fig. in uncertainty)

---

### 6.2 Multiplication and Division

For $y = \frac{a \times b}{c}$ (independent $a$, $b$, $c$ with relative uncertainties $\frac{s_a}{a}$, $\frac{s_b}{b}$, $\frac{s_c}{c}$):

$$\frac{s_y}{y} = \sqrt{\left(\frac{s_a}{a}\right)^2 + \left(\frac{s_b}{b}\right)^2 + \left(\frac{s_c}{c}\right)^2}$$

The **relative uncertainties add in quadrature**.

**Example:**
$$y = \frac{(2.54 \pm 0.02) \times (12.3 \pm 0.1)}{(4.56 \pm 0.03)}$$

Relative uncertainties:
$$\frac{0.02}{2.54} = 0.00787; \quad \frac{0.1}{12.3} = 0.00813; \quad \frac{0.03}{4.56} = 0.00658$$

$$\frac{s_y}{y} = \sqrt{(0.00787)^2 + (0.00813)^2 + (0.00658)^2} = \sqrt{6.19 \times 10^{-5} + 6.61 \times 10^{-5} + 4.33 \times 10^{-5}} = \sqrt{1.71 \times 10^{-4}} = 0.01308$$

Calculated $y = \frac{2.54 \times 12.3}{4.56} = 6.85$

$s_y = 0.01308 \times 6.85 = 0.090$

Result: $y = 6.85 \pm 0.09$

---

### 6.3 Exponentiation and Logarithm

**For $y = x^n$:**
$$\frac{s_y}{y} = n \cdot \frac{s_x}{x}$$

**For $y = \log_{10}(x)$:**
$$s_y = \frac{s_x}{x \cdot \ln 10} = \frac{0.4343 \cdot s_x}{x}$$

**For $y = \ln(x)$:**
$$s_y = \frac{s_x}{x}$$

**For $y = 10^x$:**
$$s_y = 2.303 \cdot s_x \cdot y$$

**Example — pH measurement:**
A pH electrode measures $\text{pH} = 4.52 \pm 0.02$. What is the uncertainty in $[H^+]$?

$$[H^+] = 10^{-\text{pH}} = 10^{-4.52} = 3.02 \times 10^{-5} \text{ M}$$

$$s_{[H^+]} = 2.303 \times 0.02 \times 3.02 \times 10^{-5} = 1.39 \times 10^{-6} \text{ M}$$

Result: $[H^+] = (3.02 \pm 0.14) \times 10^{-5}$ M

---

## 7. Error in the Context of Calibration

**Calibration errors** are a common source of systematic error in instrumental methods:

1. **Calibration blank error:** If the blank is not properly subtracted, a constant positive or negative bias is introduced.

2. **Standards purity error:** If the calibration standard is not as pure as assumed, all results are proportionally biased.

3. **Non-linearity:** Assuming a linear calibration range beyond the valid linear dynamic range introduces error at high concentrations.

4. **Extrapolation error:** Extrapolating the calibration curve beyond the calibrated range introduces error.

**Best practices:**
- Use at least 5 calibration points spanning the expected sample concentration range.
- Include a calibration blank (zero standard).
- Verify linearity with a coefficient of determination $R^2 \geq 0.999$.
- Bracket sample concentrations within the calibration range (no extrapolation).

---

## 8. Signal-to-Noise Ratio (S/N)

The **signal-to-noise ratio (S/N)** is a fundamental measure of random error in instrumental methods:

$$S/N = \frac{\bar{S}}{s_{\text{noise}}}$$

Where $\bar{S}$ is the mean signal and $s_{\text{noise}}$ is the standard deviation of the background (noise).

**Limit of Detection (LOD) — defined by IUPAC:**
$$c_{\text{LOD}} = \frac{3 s_{\text{noise}}}{m}$$

**Limit of Quantitation (LOQ):**
$$c_{\text{LOQ}} = \frac{10 s_{\text{noise}}}{m}$$

Where $m$ = slope of the calibration curve (sensitivity).

**Interpretation:**
- S/N = 3 → signal is barely detectable (LOD)
- S/N = 10 → signal is reliably quantifiable (LOQ)
- S/N > 10 → good quantitative precision

**Methods to improve S/N:**
- Signal averaging (n measurements: S/N improves by $\sqrt{n}$)
- Lock-in amplification
- Boxcar averaging
- Fourier transform methods (FT-NMR, FTIR)

---

## 9. Worked Examples

### Example 1 — Identifying Error Type
An analyst prepares a 1000 ppm Fe standard from iron wire that is actually only 99.2% pure (assumed 100%). All calibration standards are thus 0.8% too low.

- **Error type:** Systematic, proportional
- **Effect:** All sample results are **0.8% too high**
- **Detection:** Analysis of a certified reference material (CRM) with known Fe content
- **Correction:** Apply a correction factor, or rerun with properly prepared standards

---

### Example 2 — Random Error (Noise Reduction)
A UV-Vis measurement gives $s_{\text{noise}} = 0.002$ absorbance units. A sample has $\bar{S} = 0.008$ A.

$$S/N = \frac{0.008}{0.002} = 4$$

This is above the LOD (S/N = 3) but below the LOQ (S/N = 10). The analyte can be detected but not reliably quantified.

**To improve:** Average $n = 25$ spectra:
$$S/N_{\text{new}} = 4 \times \sqrt{25} = 4 \times 5 = 20 \quad (\text{above LOQ})$$

---

### Example 3 — Error Propagation (Titration)
An EDTA titration for hardness uses:
- Volume of EDTA: $V = 22.85 \pm 0.05$ mL
- Concentration of EDTA: $C = 0.01000 \pm 0.00003$ mol/L
- Sample volume: $V_s = 100.0 \pm 0.2$ mL

$$\text{Hardness (mmol/L)} = \frac{C \times V}{V_s} \times 1000 = \frac{0.01000 \times 22.85}{100.0} \times 1000 = 2.285 \text{ mmol/L}$$

Relative uncertainties:
$$\frac{s_C}{C} = \frac{0.00003}{0.01000} = 0.003 = 0.3\%$$
$$\frac{s_V}{V} = \frac{0.05}{22.85} = 0.00219 = 0.219\%$$
$$\frac{s_{Vs}}{V_s} = \frac{0.2}{100.0} = 0.002 = 0.2\%$$

$$\frac{s_{\text{hardness}}}{\text{hardness}} = \sqrt{(0.003)^2 + (0.00219)^2 + (0.002)^2} = \sqrt{9 \times 10^{-6} + 4.8 \times 10^{-6} + 4 \times 10^{-6}} = \sqrt{17.8 \times 10^{-6}} = 0.00422$$

$$s_{\text{hardness}} = 0.00422 \times 2.285 = 0.0096 \approx 0.010 \text{ mmol/L}$$

**Result: Hardness = $2.285 \pm 0.010$ mmol/L** (0.44% relative uncertainty)

---

## 10. Summary Table

| Feature | Systematic Error | Random Error | Gross Error |
|---------|-----------------|--------------|-------------|
| Also called | Determinate error, bias | Indeterminate error | Blunder |
| Direction | Fixed (always + or always −) | Variable (+ or −) | Unpredictable, large |
| Effect on | Accuracy | Precision | Both |
| Reproducibility | Reproducible | Not reproducible | Not reproducible |
| Detectable by | CRMs, spike recovery, inter-lab | Statistical analysis | Outlier tests, inspection |
| Correctable? | Yes, with calibration/correction | No (only minimized) | Discard and rerun |
| Reduced by | Calibration, method validation | More replicates, better instruments | Careful technique |
| Distribution shape | Shifts the mean of distribution | Broadens the distribution | Creates outlier points |

---

## 11. References

### Textbooks
- Skoog, D.A., Holler, F.J., & Crouch, S.R. (2017). *Principles of Instrumental Analysis* (7th ed.). Cengage Learning. Ch. 5.
- Harris, D.C. (2015). *Quantitative Chemical Analysis* (9th ed.). W.H. Freeman. Ch. 3.
- Miller, J.N. & Miller, J.C. (2010). *Statistics and Chemometrics for Analytical Chemistry* (6th ed.). Pearson. Ch. 2.
- Taylor, J.R. (1997). *An Introduction to Error Analysis* (2nd ed.). University Science Books.

### Online Resources
- [LibreTexts — Characterizing Experimental Errors](https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_(Harvey)/04%3A_Evaluating_Analytical_Data/4.02%3A_Characterizing_Experimental_Errors)
- [NIST Uncertainty of Measurement](https://www.nist.gov/itl/sed/uncertainty-measurement)
- [EURACHEM/CITAC Guide: Quantifying Uncertainty in Analytical Measurement](https://www.eurachem.org/index.php/publications/guides/quam)
- [IUPAC Recommendations on Error Analysis](https://www.iupac.org/publications/analytical_compendium/)

---

*End of File 07 — Types of Errors*
