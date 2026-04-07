# 📘 05 — Determination of Order of Reaction

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## Overview

The order of a reaction **cannot be determined from the balanced equation** — it must be established **experimentally**. Several methods are used:

1. Integrated Rate Equation Method
2. Graphical Method
3. Half-Life Method
4. Initial Rate Method
5. Ostwald Isolation Method

---

## Method 1: Using Integrated Rate Equations

### Procedure

1. Run the reaction and measure concentration $[A]$ at regular time intervals $t$.
2. Substitute the experimental values of $a$ (initial conc.), $(a-x)$ (conc. at time $t$), and $t$ into the integrated rate equations for 1st, 2nd, and 3rd order.
3. The equation that gives a **constant value of $k$** corresponds to the correct order.

### Integrated Rate Laws (Summary)

| Order | Test Equation |
|-------|--------------|
| Zero | $k = \dfrac{x}{t}$ |
| First | $k = \dfrac{2.303}{t}\log\dfrac{a}{a-x}$ |
| Second | $k = \dfrac{1}{t}\cdot\dfrac{x}{a(a-x)}$ |
| Third | $k = \dfrac{1}{t}\cdot\dfrac{x(2a-x)}{2a^2(a-x)^2}$ |

### Example

For the decomposition of $\text{H}_2\text{O}_2$:

| $t$ (min) | $[A]$ (mol/L) | $x$ | $k_0$ | $k_1$ | $k_2$ |
|-----------|--------------|-----|--------|--------|--------|
| 0 | 0.100 | — | — | — | — |
| 10 | 0.050 | 0.050 | 0.0050 | 0.0693 | 10.0 |
| 20 | 0.025 | 0.075 | 0.00375 | 0.0693 | 20.0 |
| 40 | 0.00625 | 0.09375 | 0.00234 | 0.0693 | 60.0 |

Since $k_1 = 0.0693$ min⁻¹ is **constant**, the reaction is **first order**.

---

## Method 2: Graphical Method

Each order produces a characteristic **straight-line plot**:

| Order | Linear Plot | Slope | Intercept |
|-------|------------|-------|-----------|
| Zero | $[A]$ vs $t$ | $-k$ | $[A]_0$ |
| First | $\ln[A]$ vs $t$ | $-k$ | $\ln[A]_0$ |
| Second | $1/[A]$ vs $t$ | $+k$ | $1/[A]_0$ |
| Third | $1/[A]^2$ vs $t$ | $+2k$ | $1/[A]_0^2$ |

### Visual Guide

```
ZERO ORDER          FIRST ORDER         SECOND ORDER
[A]                 ln[A]               1/[A]
 |*.                 |*.                  |        *
 |   *.              |   *.               |      *
 |      *.           |      *.            |    *
 |         *.        |         *.         |  *
 +---------->t       +---------->t        +---------->t
  (straight)          (straight)           (straight)
```

If only one graph gives a **straight line**, that determines the order.

### Worked Example

For a reaction, the following data were obtained:

| $t$ (s) | $[A]$ (M) | $\ln[A]$ | $1/[A]$ (M⁻¹) |
|---------|-----------|---------|----------------|
| 0 | 1.000 | 0.000 | 1.000 |
| 100 | 0.606 | −0.500 | 1.650 |
| 200 | 0.368 | −1.000 | 2.717 |
| 300 | 0.223 | −1.500 | 4.484 |

- $[A]$ vs $t$: Curved → NOT zero order
- $\ln[A]$ vs $t$: **Straight line** with slope $= -0.005$ s⁻¹ → **First order**, $k = 0.005$ s⁻¹
- $1/[A]$ vs $t$: Curved → NOT second order

---

## Method 3: Half-Life Method

The half-life $t_{1/2}$ is related to the initial concentration $[A]_0$ by:

$$t_{1/2} \propto \frac{1}{[A]_0^{n-1}}$$

Where $n$ = order of reaction. Specifically:

| Order | Half-life formula | Dependence on $[A]_0$ |
|-------|------------------|-----------------------|
| 0 | $t_{1/2} = \dfrac{[A]_0}{2k}$ | $\propto [A]_0$ |
| 1 | $t_{1/2} = \dfrac{0.693}{k}$ | Independent |
| 2 | $t_{1/2} = \dfrac{1}{k[A]_0}$ | $\propto 1/[A]_0$ |
| $n$ | $t_{1/2} = \dfrac{2^{n-1}-1}{(n-1)k[A]_0^{n-1}}$ | $\propto 1/[A]_0^{n-1}$ |

### Using Two Half-Life Measurements

For two experiments with different initial concentrations $A_1$ and $A_2$:

$$\frac{t_{1/2,1}}{t_{1/2,2}} = \left(\frac{A_2}{A_1}\right)^{n-1}$$

Taking logarithm:

$$\log\left(\frac{t_{1/2,1}}{t_{1/2,2}}\right) = (n-1)\log\left(\frac{A_2}{A_1}\right)$$

$$\boxed{n = 1 + \frac{\log(t_{1/2,1}/t_{1/2,2})}{\log(A_2/A_1)}}$$

### Example

For a reaction, $t_{1/2} = 15$ s when $[A]_0 = 20$ M, and $t_{1/2} = 30$ s when $[A]_0 = 10$ M.

$$n - 1 = \frac{\log(15/30)}{\log(10/20)} = \frac{\log 0.5}{\log 0.5} = \frac{-0.301}{-0.301} = 1$$

$$n = 2 \quad \text{(Second order)}$$

---

## Method 4: Initial Rate Method

This is the most commonly used method in practice.

### Procedure

1. Perform several experiments with **different initial concentrations** of each reactant.
2. Measure the **initial rate** (rate at $t = 0$) for each experiment.
3. Compare rates between experiments where only **one concentration changes at a time**.

### Mathematical Basis

For rate = $k[A]^m[B]^n$:

Keeping $[B]$ constant, varying $[A]$:

$$\frac{r_2}{r_1} = \left(\frac{[A]_2}{[A]_1}\right)^m \Rightarrow m = \frac{\log(r_2/r_1)}{\log([A]_2/[A]_1)}$$

### Example — Rate Law from Experimental Data

For the reaction: $\text{BrO}_3^- + 5\text{Br}^- + 6\text{H}^+ \rightarrow 3\text{Br}_2 + 3\text{H}_2\text{O}$

| Exp | $[\text{BrO}_3^-]$ | $[\text{Br}^-]$ | $[\text{H}^+]$ | Rate (M/s) |
|-----|--------------------|-----------------|-----------------|------------|
| 1 | 0.10 | 0.10 | 0.10 | $1.2 \times 10^{-3}$ |
| 2 | 0.20 | 0.10 | 0.10 | $2.4 \times 10^{-3}$ |
| 3 | 0.10 | 0.30 | 0.10 | $3.6 \times 10^{-3}$ |
| 4 | 0.10 | 0.10 | 0.20 | $4.8 \times 10^{-3}$ |

**Order w.r.t $\text{BrO}_3^-$** (Exp 1 vs 2):
$$\frac{2.4}{1.2} = \left(\frac{0.20}{0.10}\right)^m \Rightarrow 2 = 2^m \Rightarrow m = 1$$

**Order w.r.t $\text{Br}^-$** (Exp 1 vs 3):
$$\frac{3.6}{1.2} = \left(\frac{0.30}{0.10}\right)^n \Rightarrow 3 = 3^n \Rightarrow n = 1$$

**Order w.r.t $\text{H}^+$** (Exp 1 vs 4):
$$\frac{4.8}{1.2} = \left(\frac{0.20}{0.10}\right)^p \Rightarrow 4 = 2^p \Rightarrow p = 2$$

$$\boxed{\text{Rate} = k[\text{BrO}_3^-][\text{Br}^-][\text{H}^+]^2} \quad \text{(4th order overall)}$$

---

## Method 5: Ostwald Isolation Method (Flooding Method)

When a reaction involves **multiple reactants**, this method isolates one at a time.

### Procedure

1. Keep the concentrations of all reactants except one in **large excess** (they remain approximately constant throughout).
2. Measure the apparent (pseudo) order, which equals the partial order for the isolated reactant.
3. Repeat with each reactant isolated in turn.

### Example

For $r = k[A]^m[B]^n[C]^p$:

- Flood with excess B and C: $r = k'[A]^m$ → find $m$
- Flood with excess A and C: $r = k''[B]^n$ → find $n$
- Flood with excess A and B: $r = k'''[C]^p$ → find $p$

---

## Summary Flow Chart

```
Collect [A] vs t data
         |
         ▼
Plot [A] vs t — straight? → Zero Order (slope = -k)
         |
         ▼
Plot ln[A] vs t — straight? → First Order (slope = -k)
         |
         ▼
Plot 1/[A] vs t — straight? → Second Order (slope = +k)
         |
         ▼
Plot 1/[A]² vs t — straight? → Third Order (slope = +2k)
```

---

## References

| Resource | URL |
|----------|-----|
| LibreTexts — Methods to Determine Order | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/02%3A_Reaction_Rates/2.08%3A_The_Integrated_Rate_Law |
| ChemGuide — Determining Order | https://www.chemguide.co.uk/physical/basicrates/halflife.html |
| Khan Academy — Method of Initial Rates | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics/x2eef969c74e0d802:rate-laws/v/method-of-initial-rates |

---

[⬅️ Back: 1st & 2nd Order](./04_First_and_Second_Order_Reactions.md) | [➡️ Next: Effect of Temperature](./06_Effect_of_Temperature.md)
