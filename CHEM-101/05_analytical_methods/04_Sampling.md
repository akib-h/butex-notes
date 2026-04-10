# 04 — Sampling

*Course: Analytical Analysis*
*Date: April 9, 2026*

---

## Table of Contents

1. [Introduction and Importance of Sampling](#1-introduction-and-importance-of-sampling)
2. [Key Definitions](#2-key-definitions)
3. [The Sampling Process: Step-by-Step](#3-the-sampling-process-step-by-step)
4. [Types of Samples](#4-types-of-samples)
5. [Sampling Methods / Techniques](#5-sampling-methods--techniques)
   - 5.1 [Random Sampling](#51-random-sampling)
   - 5.2 [Systematic Sampling](#52-systematic-sampling)
   - 5.3 [Stratified Sampling](#53-stratified-sampling)
   - 5.4 [Judgement (Purposive) Sampling](#54-judgement-purposive-sampling)
   - 5.5 [Composite Sampling](#55-composite-sampling)
   - 5.6 [Grab Sampling](#56-grab-sampling)
   - 5.7 [Continuous/Time-Proportional Sampling](#57-continuoustime-proportional-sampling)
6. [Sampling Solids, Liquids, and Gases](#6-sampling-solids-liquids-and-gases)
7. [Sample Size Determination](#7-sample-size-determination)
8. [Sampling Errors](#8-sampling-errors)
9. [Sample Preservation, Storage, and Chain of Custody](#9-sample-preservation-storage-and-chain-of-custody)
10. [Worked Examples](#10-worked-examples)
11. [References](#11-references)

---

## 1. Introduction and Importance of Sampling

**Sampling** is the process of selecting a **representative portion** from a larger bulk of material (the population or lot) for analysis. It is arguably the **most critical step** in the entire analytical process because:

> "Even the most sophisticated and precise analytical method is useless if the sample analyzed is not representative of the material being studied."
> — Skoog, Holler & Crouch

Errors introduced during sampling are **irreversible** — no amount of careful laboratory analysis can correct for a non-representative sample.

### The Analytical Process Hierarchy

```
1. Define the problem / analyte / population
        ↓
2. Sampling (select representative portion) ← CRITICAL STEP
        ↓
3. Sample preservation / transport
        ↓
4. Sample preparation (digestion, extraction)
        ↓
5. Measurement (instrumental/chemical)
        ↓
6. Data analysis and interpretation
        ↓
7. Reporting
```

The **total analytical error** is:

$$\sigma^2_{\text{total}} = \sigma^2_{\text{sampling}} + \sigma^2_{\text{sample prep}} + \sigma^2_{\text{measurement}}$$

In many real-world analyses, $\sigma^2_{\text{sampling}}$ dominates over $\sigma^2_{\text{measurement}}$.

---

## 2. Key Definitions

| Term | Definition |
|------|-----------|
| **Population (Lot)** | The entire bulk of material from which a sample is drawn (e.g., a tanker of crude oil, a field of wheat) |
| **Gross Sample (Field Sample)** | The initial, large sample collected from the lot; not homogeneous |
| **Laboratory Sample** | A portion of the gross sample submitted to the laboratory |
| **Test Portion (Aliquot)** | The exact weight/volume taken from the laboratory sample for a single analysis |
| **Analyte** | The chemical species being determined |
| **Matrix** | Everything else in the sample besides the analyte |
| **Blank** | A sample containing no analyte, processed identically to real samples |
| **Spiked Sample** | A real sample to which a known amount of analyte is added (for recovery testing) |
| **Representative Sample** | A sample whose composition faithfully reflects that of the bulk material being sampled |

---

## 3. The Sampling Process: Step-by-Step

### Step 1 — Define the Sampling Target
- What is the **population** being characterized?
- What is the **analyte** and its expected concentration range?
- What **precision and confidence level** is required?
- What **spatial or temporal** variability is expected?

### Step 2 — Develop a Sampling Plan
A written sampling plan includes:
- Number of samples to collect
- Location and time of collection
- Method of collection
- Containers and preservation protocols
- Chain of custody documentation

### Step 3 — Collect the Gross Sample
Using appropriate tools (auger, sampling probe, thief sampler, grab sampler, automatic composite sampler).

### Step 4 — Reduce to Laboratory Sample
The gross sample is too large for direct analysis and must be reduced while maintaining representativeness. This is done by:

**Coning and Quartering** (solids):
1. Form the gross sample into a cone.
2. Flatten the cone into a circular disk.
3. Divide into 4 equal quadrants.
4. Discard two opposite quadrants.
5. Recombine remaining two quadrants.
6. Repeat until desired sample size is reached.

**Riffle Splitter:**
A mechanical device that splits a stream of granular material into two equal halves; repeated splitting reduces sample size.

### Step 5 — Prepare the Laboratory Sample for Analysis
Grinding, drying, sieving, dissolution, extraction, etc.

### Step 6 — Take Test Portions (Aliquots) for Analysis

---

## 4. Types of Samples

### 4.1 Based on Time
| Type | Description |
|------|-------------|
| **Grab Sample** | Single sample collected at one time and one location |
| **Composite Sample** | Mixture of several grab samples collected at different times/locations |
| **Continuous Sample** | Collected over time (e.g., 24-hour composite via automatic sampler) |

### 4.2 Based on Physical State
| Physical State | Examples |
|----------------|---------|
| **Solid** | Soil, ore, cement, food, tablets |
| **Liquid** | Water, blood, industrial effluent, beverages |
| **Gas** | Air, stack emissions, headspace |
| **Slurry/Paste** | Sludge, toothpaste, paint |

### 4.3 Based on Homogeneity
| Type | Characteristic |
|------|---------------|
| **Homogeneous** | Composition is uniform throughout (well-mixed solution) |
| **Heterogeneous** | Composition varies from point to point (ore, soil, biological tissue) |

Heterogeneous samples require **more samples and careful sampling design** to obtain representative results.

---

## 5. Sampling Methods / Techniques

---

### 5.1 Random Sampling

Each unit of the population has an **equal probability** of being selected. This is the most statistically defensible approach.

**How to implement:**
- Assign a number to every unit in the population.
- Use a **random number table** or computer-generated random numbers to select units.

**Advantages:**
- Unbiased
- Statistical analysis is straightforward

**Disadvantages:**
- May not be practical for large, heterogeneous lots
- May miss localized contamination

**Example:**
A grain warehouse with 500 bags. Use random numbers to select 25 bags for analysis.

---

### 5.2 Systematic Sampling

Samples are collected at **regular intervals** (every nth unit, every nth distance, or every nth time interval).

**Formula for sampling interval:**
$$k = \frac{N}{n}$$
Where $N$ = population size, $n$ = desired sample number.

**Example:**
Sample every 10th truck in a convoy of 100 cement delivery trucks.
$$k = \frac{100}{10} = 10$$

**Advantages:**
- Easy to implement
- Even coverage across the population

**Disadvantages:**
- Periodic pattern in the population may coincide with sampling interval → biased results.

---

### 5.3 Stratified Sampling

The population is divided into **subgroups (strata)** based on known characteristics, and samples are drawn from each stratum.

**Types:**
- **Proportional:** Number of samples from each stratum ∝ stratum size
- **Equal:** Equal number of samples from each stratum regardless of size

**Example:**
Monitoring water quality in a river basin with three distinct zones: upstream (clean), industrial discharge zone, and downstream (mixed). Stratify by zone and sample each proportionally.

**Advantages:**
- Ensures all sub-populations are represented
- Reduces variance compared to simple random sampling for heterogeneous lots

---

### 5.4 Judgement (Purposive) Sampling

Based on **expert judgment** about where to collect samples. Not statistically random, but often practical when the analyst has prior knowledge.

**Example:**
A health inspector suspects contamination near a specific discharge pipe. Samples are collected purposefully near and around the suspected source.

**Disadvantages:**
- Inherently biased
- Cannot support formal statistical inference

---

### 5.5 Composite Sampling

Multiple grab samples are **combined into a single composite sample** before analysis. The composite is analyzed once to give an average over time, space, or units.

**Example:**
A 24-hour composite wastewater sample is formed by combining hourly grab samples (volume proportional to flow rate).

$$c_{\text{composite}} = \frac{\sum_{i=1}^{n} c_i V_i}{\sum_{i=1}^{n} V_i}$$

**Advantages:**
- Reduces cost (fewer analyses)
- Provides time-averaged concentration

**Disadvantages:**
- Hides variability (cannot detect individual high-concentration episodes)

---

### 5.6 Grab Sampling

A **single sample** collected at one specific time and place. Gives a snapshot of conditions at that instant.

**Applications:**
- Emergency spill assessment
- Spot checks
- Situations where compositing is impractical

---

### 5.7 Continuous/Time-Proportional Sampling

Automated samplers collect **proportional volumes** at regular time intervals. Used extensively in environmental monitoring (wastewater treatment plants, rivers).

---

## 6. Sampling Solids, Liquids, and Gases

### 6.1 Sampling Solids

Challenges: **Heterogeneity, particle size variation, stratification.**

| Material | Common Sampling Tool |
|----------|---------------------|
| Granular materials (ore, grain) | Riffler splitter, riffle divider, scoop |
| Core samples (soil, rock, concrete) | Coring tube, drill |
| Powders (cement, flour) | Thief sampler, auger |
| Large irregular pieces (coal, stone) | Jaw crusher then coning & quartering |

**Gy's Sampling Theory** (fundamental sampling error for particulate materials):

$$\sigma^2_{\text{FSE}} = C \cdot \frac{(1-f)}{m_{\text{sample}}}$$

Where $C$ is the sampling constant (depends on particle size, mineralogy, shape), $f$ is the sampling fraction, and $m_{\text{sample}}$ is the sample mass. Increasing sample mass **reduces sampling error**.

---

### 6.2 Sampling Liquids

Challenges: **Stratification, phase separation, dissolved gases, volatile analytes.**

| Type | Tool |
|------|------|
| Surface water | Grab sampler (bottle), automatic composite sampler |
| Groundwater | Bailer, low-flow peristaltic pump |
| Wastewater | ISCO automatic sampler |
| Industrial tanks | Thief (zone) sampler at multiple depths |
| Blood/biological | Syringe, vacutainer |

**Key considerations:**
- Sample above the bottom (sediment disturbance)
- Fill containers completely (minimize headspace for volatile organics)
- Avoid air bubbles when collecting dissolved oxygen samples

---

### 6.3 Sampling Gases

Challenges: **Low analyte concentrations, reactive analytes, particle-laden streams.**

| Method | Description | Application |
|--------|-------------|-------------|
| Impinger/absorber | Gas bubbled through absorbing solution | SO₂, HCl in stack gas |
| Solid sorbent tube | Analytes trapped on Tenax/XAD | VOCs in air |
| Grab bag | Tedlar/Teflon bag filled with gas | General air quality |
| Direct-reading instruments | Real-time sensors | CO, O₂, LEL (flammable gases) |

---

## 7. Sample Size Determination

The **minimum number of samples** required for a given confidence level and allowable sampling error can be estimated using:

$$n = \frac{z^2 \cdot s^2}{e^2}$$

Where:
- $n$ = minimum number of samples
- $z$ = z-score for desired confidence level (e.g., 1.96 for 95% CI)
- $s$ = standard deviation of the population (estimated from pilot study)
- $e$ = allowable error (absolute)

### Worked Calculation:
A pilot study on soil lead content shows $s = 12$ ppm. How many samples are needed to estimate the mean with 95% confidence and ±5 ppm error?

$$n = \frac{(1.96)^2 \times (12)^2}{(5)^2} = \frac{3.8416 \times 144}{25} = \frac{553.2}{25} = 22.1 \approx 23 \text{ samples}$$

---

## 8. Sampling Errors

### 8.1 Random Sampling Error
Due to natural variability in the population. Reduced by **increasing the number of samples**.

### 8.2 Systematic Sampling Error (Bias)
A consistent, directional error introduced by:
- **Improper sampling location** (always near the surface; analyte stratifies)
- **Contamination from sampling tools** (metal probe contaminates trace metal samples)
- **Loss of analyte** during collection (volatilization, adsorption on container walls)
- **Cross-contamination** between samples
- **Unrepresentative timing** (sampling only during daytime, missing night-shift discharges)

### 8.3 Preservation Errors
Analyte **changes after collection** due to:
- Microbial degradation (biochemical oxygen demand)
- Photodegradation (light-sensitive compounds)
- Oxidation (Fe²⁺ → Fe³⁺)
- Volatilization (mercury, benzene)
- Adsorption on container walls (trace metals adsorb on polyethylene)

---

## 9. Sample Preservation, Storage, and Chain of Custody

### Preservation Methods

| Analyte | Preservation Method | Container |
|---------|--------------------|-----------| 
| Trace metals | Acidify to pH < 2 (HNO₃) | HDPE plastic |
| Organic compounds (VOCs) | 4°C, no headspace, sodium thiosulfate | Amber glass with Teflon cap |
| Nitrate/Nitrite | 4°C, analyze within 48 h | Plastic |
| Mercury | HCl + K₂Cr₂O₇, 4°C | Glass |
| Dissolved Oxygen | Fix on-site (Winkler method) | BOD bottle |
| Microbiological | 4°C, sterile bottles, analyze within 6 h | Sterile plastic |

### Chain of Custody (CoC)
A documented record that tracks the **collection, handling, transfer, and analysis** of a sample. Required for:
- Legal/regulatory compliance
- Forensic analysis
- Environmental enforcement

The CoC form includes: sample ID, collection date/time, collector name, preservation used, each person who handled the sample, and final destination.

---

## 10. Worked Examples

### Example 1 — Gross Sample Mass for Ore Analysis
Pierre Gy's rule of thumb: for granular material with maximum particle diameter $d$ (cm):

$$m_{\text{min}} \approx 0.5 \cdot d^3 \text{ (kg)}$$

An iron ore with maximum fragment diameter 2 cm:
$$m_{\text{min}} \approx 0.5 \times (2)^3 = 0.5 \times 8 = 4 \text{ kg}$$

The gross sample should be at least **4 kg** before reduction.

---

### Example 2 — Systematic Sampling Interval
A 2000-kg batch of wheat is to be sampled. Target: 20 samples. A conveyor belt moves 1 kg/s.

Total time on belt = 2000 s. 
Sampling interval:
$$k = \frac{2000 \text{ s}}{20} = 100 \text{ s (one sample every 100 s)}$$

---

### Example 3 — Composite Sample Calculation
Three grab samples from a river are collected. Concentrations and volumes:

| Sample | Concentration (mg/L) | Volume (L) |
|--------|---------------------|-----------|
| A | 5.2 | 1.0 |
| B | 8.7 | 2.0 |
| C | 3.1 | 1.5 |

$$c_{\text{composite}} = \frac{(5.2 \times 1.0) + (8.7 \times 2.0) + (3.1 \times 1.5)}{1.0 + 2.0 + 1.5}$$
$$= \frac{5.2 + 17.4 + 4.65}{4.5} = \frac{27.25}{4.5} = 6.06 \text{ mg/L}$$

---

## 11. References

### Textbooks
- Skoog, D.A., Holler, F.J., & Crouch, S.R. (2017). *Principles of Instrumental Analysis* (7th ed.). Cengage Learning.
- Harris, D.C. (2015). *Quantitative Chemical Analysis* (9th ed.). W.H. Freeman. (Chapter 28: Sampling)
- Gy, P. (1998). *Sampling for Analytical Purposes*. Wiley.
- Keith, L.H. (Ed.). (1996). *Principles of Environmental Sampling* (2nd ed.). ACS Professional Reference Book.

### Online Resources
- [EPA Sampling Guidance Documents](https://www.epa.gov/quality/guidance-sampling)
- [LibreTexts — Analytical Chemistry: Sampling and Statistics](https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_(Harvey)/07%3A_Collecting_and_Preparing_Samples)
- [Eurachem Guide on Sampling](https://www.eurachem.org/index.php/publications/guides)
- [IUPAC Recommendations on Sampling](https://iupac.org/what-we-do/databases-and-nomenclature/sampling/)

---

*End of File 04 — Sampling*
