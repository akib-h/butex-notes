# Determination of Coefficient of Viscosity of a Liquid by the Capillary Flow Method

*Date: April 8, 2026*
*Course: Physics / Fluid Mechanics*
*Topic Series: Viscosity & Fluid Flow*

---

## Table of Contents

1. [Introduction & Principle](#1-introduction--principle)
2. [Apparatus Description](#2-apparatus-description)
3. [Theory — Working Formula Derivation](#3-theory--working-formula-derivation)
4. [Experimental Procedure](#4-experimental-procedure)
5. [Observation Table](#5-observation-table)
6. [Calculations](#6-calculations)
7. [Sources of Error & Precautions](#7-sources-of-error--precautions)
8. [Comparison Methods — Ostwald Viscometer](#8-comparison-methods--ostwald-viscometer)
9. [Advanced Variant — Ubbelohde Viscometer](#9-advanced-variant--ubbelohde-viscometer)
10. [Worked Example — Full Calculation](#10-worked-example--full-calculation)
11. [Applications of the Method](#11-applications-of-the-method)
12. [Diagrams](#12-diagrams)
13. [References](#13-references)

---

## 1. Introduction & Principle

The **capillary flow method** (also known as the **efflux method**) is one of the most accurate and widely used techniques for measuring the **coefficient of dynamic viscosity** $\eta$ of a liquid.

### Principle

The method is based directly on the **Hagen-Poiseuille equation**:

$$Q = \frac{\pi R^4 \Delta P}{8\eta L}$$

The liquid is allowed to flow through a fine **capillary tube** of known dimensions under a known pressure head. By measuring the **volume of liquid collected per unit time**, the viscosity can be calculated.

### Why a Capillary?

A narrow capillary ensures:
1. Flow remains **laminar** (small $Re$)
2. Flow resistance is **large** → measurable pressure needed → accurate results
3. Surface effects are emphasised, but can be corrected

---

## 2. Apparatus Description

### 2.1 Components

1. **Capillary tube** — precision-bore glass tube of known radius $R$ and length $L$
2. **Constant-head device** (Mariotte's bottle or overflow reservoir) — maintains constant $\Delta P$
3. **Graduated measuring cylinder** — to collect and measure volume of outflow
4. **Stop watch / digital timer** — to measure time $t$
5. **Thermometer** — to monitor temperature (since $\eta$ is temperature-sensitive)
6. **Water bath / thermostat** — to maintain constant temperature
7. **Traveling microscope or micrometer** — to accurately measure capillary radius $R$
8. **Ruler / vernier caliper** — to measure capillary length $L$ and head $h$
9. **Spirit level** — to ensure horizontal alignment

### 2.2 Setup Diagram

```
 Reservoir (constant head)
 ┌───────────────────────┐
 │  Water/liquid level   │ ← h (head above capillary centre)
 │                       │
 └──────────┬────────────┘
            │
            ▼ (overflow to maintain constant level)
   ┌────────┤  inlet tube
   │  ┌─────────────────────────┐ ────────── Capillary tube ──────────── outlet
   │  │← ────── L ──────────── →│
   │  │      radius R            │──────────────────────────────► liquid drip
   │  └─────────────────────────┘                                 │
   │                                                              ▼
   │                                               Measuring cylinder
   └── Thermostat water bath (maintains constant T)
```

---

## 3. Theory — Working Formula Derivation

### 3.1 Setting Up the Pressure Difference

The driving pressure difference $\Delta P$ across the capillary is provided by the **hydrostatic head** $h$ of liquid above the capillary exit:

$$\Delta P = \rho g h$$

Where:
- $\rho$ = density of the liquid
- $g$ = acceleration due to gravity
- $h$ = vertical height of liquid above the capillary exit (kept constant)

### 3.2 Substituting into Hagen-Poiseuille Equation

$$Q = \frac{\pi R^4 \Delta P}{8\eta L} = \frac{\pi R^4 \rho g h}{8\eta L}$$

Since $Q = V/t$ (volume $V$ collected in time $t$):

$$\frac{V}{t} = \frac{\pi R^4 \rho g h}{8\eta L}$$

### 3.3 Solving for $\eta$

$$\boxed{\eta = \frac{\pi R^4 \rho g h t}{8VL}}$$

This is the **working formula** for the simple (uncorrected) capillary flow method.

### 3.4 Full Corrected Working Formula

Including Hagenbach and Couette corrections:

$$\boxed{\eta = \frac{\pi R^4 \rho g h t}{8VL} \cdot \frac{L}{L + n'R} - \frac{m\rho V}{8\pi t(L + n'R)}}$$

Simplified (with $n' = 1.64$ for both ends → $n'_{total} = 3.28$, usually written as $n'R$ with $n' = 1.64$ for each end):

$$\eta = \frac{\pi R^4 \rho g h t}{8V(L + 1.64R)} - \frac{m\rho V}{8\pi t(L + 1.64R)}$$

For a well-designed long capillary where $L \gg R$ and flow rate is small, corrections are minor and the simplified formula is sufficient.

---

## 4. Experimental Procedure

### Step 1: Preparation

1. **Clean the capillary** — wash with distilled water, then the test liquid. Ensure no air bubbles.
2. **Measure capillary dimensions:**
   - Length $L$: measure with a ruler or travelling microscope
   - Radius $R$: use a travelling microscope to measure the bore diameter at several positions; take the mean. **This is the most critical measurement** since $Q \propto R^4$.
3. **Level the apparatus** using a spirit level to ensure the capillary is horizontal.
4. **Set up the thermostat** and allow the liquid and apparatus to reach thermal equilibrium (wait 10–15 minutes).
5. **Record the temperature** $T$ with a thermometer.

### Step 2: Adjusting the Head

1. Fill the reservoir and adjust the **overflow tube** to set the desired constant head $h$.
2. Measure $h$ = vertical distance from the liquid surface to the **capillary outlet**.
3. Verify that the liquid level remains constant during the experiment (constant head condition).

### Step 3: Taking Readings

1. Place the measuring cylinder under the capillary outlet.
2. Allow a small amount of liquid to flow first to **flush the capillary** and establish steady state.
3. Start the **timer** and simultaneously begin collecting liquid in the measuring cylinder.
4. After a measured time $t$ (e.g., 30–60 seconds), stop collection.
5. **Read the volume** $V$ collected.
6. Repeat **at least 5 times** and calculate the mean $Q = V/t$.

### Step 4: Varying Parameters (Optional)

To increase accuracy and check consistency:
- Repeat at **different heads** $h$ (plot $Q$ vs $h$ — should be linear).
- Repeat at **different temperatures** to get $\eta(T)$.

### Step 5: Measuring Density

Measure the density $\rho$ of the liquid using a **density bottle (pycnometer)** or **hydrometer** at the same temperature.

---

## 5. Observation Table

### Table 1: Capillary Dimensions

| Measurement | Trial 1 | Trial 2 | Trial 3 | Mean |
|-------------|---------|---------|---------|------|
| Capillary length $L$ (m) | | | | |
| Capillary diameter $2R$ (mm) | | | | |
| Capillary radius $R$ (mm) | | | | |

### Table 2: Flow Rate Measurements

| Trial | Head $h$ (m) | Volume $V$ (m³) | Time $t$ (s) | $Q = V/t$ (m³/s) |
|-------|-------------|-----------------|-------------|-----------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| Mean | | | | |

### Table 3: Density Measurement

| Trial | Mass of empty bottle (g) | Mass with liquid (g) | Mass with water (g) | $\rho$ (kg/m³) |
|-------|--------------------------|---------------------|---------------------|----------------|
| 1 | | | | |
| 2 | | | | |
| Mean | | | | |

### Table 4: Temperature

| Temperature | $T$ (°C) | $\rho$ (kg/m³) |
|-------------|----------|----------------|
| Initial | | |
| Final | | |
| Mean | | |

---

## 6. Calculations

### Step 1: Calculate mean $Q$

$$\bar{Q} = \frac{\sum Q_i}{n}$$

### Step 2: Verify Laminar Flow

Compute Reynolds number to confirm $Re < 2000$:

$$Re = \frac{4\rho Q}{\pi R \eta} \approx \frac{4\rho \bar{Q}}{\pi R \eta_{approx}}$$

(Use a rough estimate of $\eta$ first; confirm the assumption after calculation.)

### Step 3: Compute $\eta$ (uncorrected)

$$\eta = \frac{\pi R^4 \rho g h}{8\bar{Q} L}$$

### Step 4: Apply Corrections

Hagenbach correction to pressure:

$$\Delta P_{KE} = \frac{m\rho \bar{Q}^2}{\pi^2 R^4}, \quad m = 1.12$$

Effective pressure:

$$\Delta P_{eff} = \rho g h - \Delta P_{KE}$$

Effective length (Couette):

$$L_{eff} = L + 2 \times 0.82R = L + 1.64R$$

Note: $1.64R$ is the sum for both ends (0.82R per end is commonly used in some texts; other texts use $1.64R$ per end — follow your course convention).

Corrected viscosity:

$$\eta_{corr} = \frac{\pi R^4 \Delta P_{eff}}{8\bar{Q} L_{eff}}$$

### Step 5: Error Analysis

**Percentage error in $\eta$:**

Since $\eta \propto R^4$, the error in $R$ is amplified fourfold:

$$\frac{\delta\eta}{\eta} = 4\frac{\delta R}{R} + \frac{\delta(\Delta P)}{\Delta P} + \frac{\delta Q}{Q} + \frac{\delta L}{L}$$

The measurement of $R$ is **the most critical step** — a 1% error in $R$ causes a 4% error in $\eta$.

---

## 7. Sources of Error & Precautions

### 7.1 Sources of Error

| Source | Effect on Result |
|--------|----------------|
| Inaccurate measurement of $R$ | $\eta \propto R^4$ — dominant error source |
| Non-constant head $h$ | Variable $\Delta P$ → irreproducible $Q$ |
| Temperature fluctuation | $\eta$ changes significantly with $T$ |
| Turbulent flow (if $Re > 2000$) | Poiseuille's equation not valid |
| Air bubbles in capillary | Blocks flow, reduces effective cross-section |
| Non-horizontal capillary | Additional gravity head introduces error |
| Wall effects / adsorption | Especially for surfactant solutions |
| Surface tension at outlet meniscus | Extra pressure at exit |

### 7.2 Precautions

1. **Measure $R$ at multiple positions** along the capillary and take the mean — bore irregularity is common.
2. **Use a thermostatic water bath** and wait for thermal equilibrium before taking readings.
3. **Ensure constant head** — check liquid level before and after each trial.
4. **Clean capillary thoroughly** — grease or contamination changes the effective radius.
5. **Avoid vibrations** — mechanical disturbances can trigger early transition to turbulence.
6. **Check horizontality** — use a spirit level along the capillary axis.
7. **Collect multiple readings** — use statistical averaging to reduce random errors.
8. **Verify laminar flow** — compute $Re$ to ensure $Re < 2000$.

---

## 8. Comparison Methods — Ostwald Viscometer

The **Ostwald viscometer** is a practical evolution of the capillary flow method designed for **relative viscosity** measurements.

### 8.1 Principle

Instead of measuring absolute values, the Ostwald viscometer compares the flow time of the **unknown liquid** with the flow time of a **reference liquid** (usually distilled water) of known viscosity.

### 8.2 Working Formula

From Poiseuille's equation, for two liquids through the same capillary:

$$\frac{\eta_1}{\eta_2} = \frac{\rho_1 t_1}{\rho_2 t_2}$$

Where subscripts 1 and 2 refer to the unknown and reference liquids respectively.

**Derivation:**

For each liquid:

$$Q = \frac{V}{t} = \frac{\pi R^4 \rho g h}{8\eta L}$$

Since the **same volume** $V$ flows through the **same capillary** (same $R$, $L$, $h \propto 1/\rho$ if driving head is the liquid itself):

$$\eta \propto \rho \cdot t$$

Therefore:

$$\boxed{\frac{\eta_1}{\eta_2} = \frac{\rho_1 t_1}{\rho_2 t_2}}$$

If $\eta_2$ (e.g., water) is known:

$$\eta_1 = \eta_2 \cdot \frac{\rho_1 t_1}{\rho_2 t_2}$$

### 8.3 Advantages of Ostwald Method

- Cancels out the need to accurately know $R$ and $L$ (critical systematic errors cancel)
- Faster and simpler procedure
- Very widely used in industry (ASTM, BS standards)

### 8.4 Ostwald Viscometer Diagram

![Ostwald viscometer](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ostwald_viscometer.svg/400px-Ostwald_viscometer.svg.png)

*Figure: Ostwald viscometer — liquid flows from bulb B through capillary C; time is measured between marks M1 and M2.*

---

## 9. Advanced Variant — Ubbelohde Viscometer

The **Ubbelohde viscometer** (suspended level viscometer) improves on the Ostwald design:

- A **third tube** acts as a **pressure equaliser**, suspending the liquid level below the capillary outlet.
- This means the **driving head is independent of the volume** of liquid — so different sample sizes can be used.
- Particularly useful for **concentration-dependent viscosity** studies (polymer solutions, dilution series).

**Working formula** remains:

$$\frac{\eta_1}{\eta_2} = \frac{\rho_1 t_1}{\rho_2 t_2}$$

but with the advantage that the same result is obtained regardless of fill volume.

---

## 10. Worked Example — Full Calculation

**Problem:**

A capillary tube has:
- Radius $R = 0.4\ \text{mm} = 4.0 \times 10^{-4}\ \text{m}$
- Length $L = 0.15\ \text{m}$
- Driving head $h = 0.12\ \text{m}$

Liquid properties: $\rho = 850\ \text{kg/m}^3$

Collected volume $V = 3.2 \times 10^{-6}\ \text{m}^3$ in time $t = 60\ \text{s}$.

Take $g = 9.81\ \text{m/s}^2$.

**Find $\eta$ (a) without corrections and (b) with Hagenbach correction.**

---

### Part (a): Uncorrected

$$Q = \frac{V}{t} = \frac{3.2 \times 10^{-6}}{60} = 5.33 \times 10^{-8}\ \text{m}^3/\text{s}$$

$$\Delta P = \rho g h = 850 \times 9.81 \times 0.12 = 1000.6\ \text{Pa}$$

$$\eta = \frac{\pi R^4 \Delta P}{8QL}$$

$$= \frac{\pi \times (4\times10^{-4})^4 \times 1000.6}{8 \times 5.33\times10^{-8} \times 0.15}$$

$$= \frac{\pi \times 2.56\times10^{-14} \times 1000.6}{6.4\times10^{-8}}$$

$$= \frac{8.047\times10^{-11}}{6.4\times10^{-8}}$$

$$= 1.26 \times 10^{-3}\ \text{Pa·s} = \mathbf{1.26\ \text{mPa·s}}$$

### Part (b): With Hagenbach Correction

$$\Delta P_{KE} = \frac{m\rho Q^2}{\pi^2 R^4} = \frac{1.12 \times 850 \times (5.33\times10^{-8})^2}{\pi^2 \times (4\times10^{-4})^4}$$

$$= \frac{1.12 \times 850 \times 2.84\times10^{-15}}{9.87 \times 2.56\times10^{-14}}$$

$$= \frac{2.704\times10^{-12}}{2.527\times10^{-13}} \approx 10.7\ \text{Pa}$$

$$\Delta P_{eff} = 1000.6 - 10.7 = 989.9\ \text{Pa}$$

$$\eta_{corr} = \frac{\pi R^4 \Delta P_{eff}}{8QL} = \eta_{uncorr} \times \frac{989.9}{1000.6} \approx 1.26 \times 0.9893 \approx \mathbf{1.246\ \text{mPa·s}}$$

The Hagenbach correction reduces $\eta$ by ~$1.1\%$ in this case.

### Verify Laminar Flow

$$Re = \frac{4\rho Q}{\pi R \eta} = \frac{4 \times 850 \times 5.33\times10^{-8}}{\pi \times 4\times10^{-4} \times 1.26\times10^{-3}}$$

$$= \frac{1.812\times10^{-4}}{1.583\times10^{-6}} \approx 114$$

Since $Re \approx 114 \ll 2000$, the flow is indeed **laminar** ✓

---

## 11. Applications of the Method

| Application | Details |
|-------------|---------|
| **Quality control in industry** | Viscosity of oils, fuels, coatings measured against specifications |
| **Pharmaceutical industry** | Viscosity of syrups, eye drops, injectables for quality assurance |
| **Food technology** | Viscosity of honey, sauces, dairy products for process design |
| **Polymer science** | Intrinsic viscosity of polymer solutions relates to molecular weight |
| **Petroleum industry** | Crude oil and refined product grading by viscosity (ASTM D445) |
| **Biomedical research** | Blood viscosity changes indicating cardiovascular disease |
| **Cosmetics** | Ensuring correct consistency of creams and lotions |

---

## 12. Diagrams

**Constant-head capillary viscometer setup:**

![Capillary viscometer](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Glass_capillary_viscometer.jpg/320px-Glass_capillary_viscometer.jpg)

*Figure 1: Glass capillary viscometer in a constant-temperature bath.*

**Ostwald viscometer design:**

![Ostwald Viscometer](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ostwald_viscometer.svg/300px-Ostwald_viscometer.svg.png)

*Figure 2: Schematic of an Ostwald viscometer showing the bulbs, capillary section, and timing marks.*

---

## 13. References

### Textbooks
1. Halliday, D., Resnick, R., & Krane, K.S. *Physics*, Vol. 1, 5th ed. Wiley, 2002. — Ch. 15.
2. White, F.M. *Fluid Mechanics*, 8th ed. McGraw-Hill, 2016. — §6.4 & §6.9.
3. Atkins, P. & de Paula, J. *Physical Chemistry*, 10th ed. Oxford University Press, 2014. — §19B Viscosity.
4. Young, H.D. & Freedman, R.A. *University Physics*, 14th ed. Pearson, 2016.
5. Coulson, J.M. & Richardson, J.F. *Chemical Engineering*, Vol. 1, 6th ed. Butterworth-Heinemann, 1999.

### Standards & Procedures
6. ASTM D445: *Standard Test Method for Kinematic Viscosity of Transparent and Opaque Liquids.* ASTM International.
7. ISO 3104: *Petroleum products — Transparent and opaque liquids — Determination of kinematic viscosity.*

### Online Sources
8. HyperPhysics — Viscosity Measurement: <http://hyperphysics.phy-astr.gsu.edu/hbase/fluids/viscosity.html>
9. Engineering Toolbox — Viscosity Measurement Methods: <https://www.engineeringtoolbox.com/viscosity-measurement-d_1702.html>
10. IUPAC — Viscometry: <https://iupac.org/recommendation/viscometry>
11. Brookfield Engineering — Viscosity Guide: <https://www.brookfieldengineering.com/learning/viscosity>

---

*← [Corrections of Poiseuille's Equation](05_corrections_of_poiseuilles_equation.md)*

---

> **End of Viscosity Topic Series**
> Files: [01 Viscosity](01_viscosity.md) → [02 Newton's Law](02_newtons_law_coefficient_of_viscosity.md) → [03 Critical Velocity](03_critical_velocity.md) → [04 Poiseuille's Equation](04_poiseuilles_equation.md) → [05 Corrections](05_corrections_of_poiseuilles_equation.md) → **06 Capillary Method**
