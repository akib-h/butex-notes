# 📘 02 — Order and Molecularity of a Reaction

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. Order of a Reaction

### Definition

The **order of a reaction** is the **sum of the powers (exponents)** of the concentration terms in the experimentally determined rate law.

For the rate law:

$$\text{Rate} = k[A]^m[B]^n$$

$$\text{Overall Order} = m + n$$

### Key Points

1. Order is always determined **experimentally** — it cannot be inferred from stoichiometry alone.
2. Order can be **zero, positive integer, fractional, or even negative**.
3. The order with respect to each reactant is called the **partial order**.

### Examples

| Reaction | Rate Law | Order w.r.t each | Overall Order |
|----------|----------|------------------|---------------|
| $2A + B \rightarrow$ Products | $k[A]^m[B]^n$ | $m$ w.r.t A, $n$ w.r.t B | $m+n$ |
| $2\text{N}_2\text{O}_5 \rightarrow 4\text{NO}_2 + \text{O}_2$ | $k[\text{N}_2\text{O}_5]$ | 1 w.r.t N₂O₅ | **1st order** |
| $\text{H}_2 + \text{I}_2 \rightarrow 2\text{HI}$ | $k[\text{H}_2][\text{I}_2]$ | 1 each | **2nd order** |
| $2\text{NO}_2 \rightarrow 2\text{NO} + \text{O}_2$ | $k[\text{NO}_2]^2$ | 2 w.r.t NO₂ | **2nd order** |
| $2\text{NO} + 2\text{H}_2 \rightarrow \text{N}_2 + 2\text{H}_2\text{O}$ | $k[\text{H}_2][\text{NO}]^2$ | 1 w.r.t H₂, 2 w.r.t NO | **3rd order** |
| $\text{CHCl}_3 + \text{Cl}_2 \rightarrow \text{CCl}_4 + \text{HCl}$ | $k[\text{CHCl}_3][\text{Cl}_2]^{1/2}$ | 1, ½ | **3/2 order** |

> 📌 Order of reaction ranges from **1 to 3** and can be **fractional**.

---

## 2. Units of Rate Constant $k$ for Different Orders

From: $\text{Rate} = k[A]^n$

$$k = \frac{\text{Rate}}{[A]^n} = \frac{\text{mol L}^{-1}\text{s}^{-1}}{(\text{mol L}^{-1})^n} = \text{mol}^{1-n}\text{L}^{n-1}\text{s}^{-1}$$

| Order ($n$) | Unit of $k$ |
|-------------|-------------|
| 0 | mol L⁻¹ s⁻¹ |
| 1 | s⁻¹ |
| 2 | L mol⁻¹ s⁻¹ (or M⁻¹s⁻¹) |
| 3 | L² mol⁻² s⁻¹ |
| $n$ | mol^(1−n) L^(n−1) s⁻¹ |

---

## 3. Molecularity of a Reaction

### Definition

**Molecularity** is the **number of reacting species** (atoms, ions, or molecules) that **simultaneously collide** in an **elementary step** (single-step) reaction.

$$A + B \rightarrow \text{Products} \quad \Rightarrow \quad \text{Molecularity} = 2 \text{ (Bimolecular)}$$

$$A + 2B \rightarrow \text{Products} \quad \Rightarrow \quad \text{Molecularity} = 3 \text{ (Termolecular)}$$

### Types of Molecularity

| Type | Molecularity | Example |
|------|-------------|---------|
| **Unimolecular** | 1 | $\text{N}_2\text{O}_5 \rightarrow \text{NO}_2 + \text{NO}_3$ |
| **Bimolecular** | 2 | $\text{NO} + \text{O}_3 \rightarrow \text{NO}_2 + \text{O}_2$ |
| **Termolecular** | 3 | $2\text{NO} + \text{O}_2 \rightarrow 2\text{NO}_2$ |

> ⚠️ Molecularity > 3 is **essentially zero** in practice because the simultaneous collision of 4 or more molecules is statistically improbable.

---

## 4. Difference Between Order and Molecularity

| Property | **Order** | **Molecularity** |
|----------|-----------|-----------------|
| Definition | Sum of powers of concentration in the rate law | Number of reacting species colliding simultaneously in an elementary step |
| Basis | **Experimental** determination | **Theoretical** concept |
| Fractional value | ✅ Can be fractional | ❌ Cannot be fractional |
| Zero value | ✅ Can be zero | ❌ Cannot be zero (minimum = 1) |
| Negative value | ✅ Possible (rare) | ❌ Not possible |
| Changes with conditions | ✅ Can vary (e.g., pseudo-order) | ❌ Fixed for an elementary step |
| Depends on | Pressure, temperature, concentration | Nature of the reaction step |

---

## 5. Elementary vs. Complex Reactions

### Elementary Reaction

A reaction that occurs in a **single step** — the rate law can be written directly from the stoichiometry.

$$A + B \rightarrow \text{Products} \quad \Rightarrow \quad r = k[A][B]$$

### Complex Reaction

A reaction that occurs in **multiple steps** (mechanism). The overall rate law must be determined experimentally and corresponds to the **rate-determining step** (slowest step).

**Example — Decomposition of $\text{H}_2\text{O}_2$:**

Overall: $2\text{H}_2\text{O}_2 \rightarrow 2\text{H}_2\text{O} + \text{O}_2$

Mechanism:
1. $\text{H}_2\text{O}_2 + \text{I}^- \xrightarrow{\text{slow}} \text{H}_2\text{O} + \text{IO}^-$ ← rate-determining
2. $\text{H}_2\text{O}_2 + \text{IO}^- \xrightarrow{\text{fast}} \text{H}_2\text{O} + \text{O}_2 + \text{I}^-$

Rate law (from step 1): $r = k[\text{H}_2\text{O}_2][\text{I}^-]$ → **2nd order overall**

---

## 6. Pseudo-Order Reactions

When one reactant is in **large excess**, its concentration remains essentially constant and is absorbed into the rate constant. The observed order is lower than the true order.

**Example:**

$$\text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O} \xrightarrow{\text{H}^+} \text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH}$$

True rate law: $r = k[\text{ester}][\text{H}_2\text{O}]$ → **2nd order**

Since $[\text{H}_2\text{O}]$ is in large excess (solvent), $[\text{H}_2\text{O}] \approx \text{constant}$:

$$r = k'[\text{ester}] \quad \text{where } k' = k[\text{H}_2\text{O}]$$

This is called a **pseudo-first order reaction**.

---

## 7. Relationship Between Molecularity and Order for Elementary Steps

For **elementary reactions only**:

| Molecularity | Rate Law | Order |
|-------------|----------|-------|
| Unimolecular: $A \rightarrow P$ | $r = k[A]$ | 1 |
| Bimolecular: $A + B \rightarrow P$ | $r = k[A][B]$ | 2 |
| Bimolecular: $2A \rightarrow P$ | $r = k[A]^2$ | 2 |
| Termolecular: $A + B + C \rightarrow P$ | $r = k[A][B][C]$ | 3 |

> ✅ For elementary reactions, **order = molecularity**.  
> ❌ For complex (multi-step) reactions, **order ≠ molecularity** in general.

---

## 8. Worked Example

**Problem:** The following rate data were obtained for:

$$2\text{NO}(g) + \text{Cl}_2(g) \rightarrow 2\text{NOCl}(g)$$

| Exp | [NO] (M) | [Cl₂] (M) | Initial Rate (M/s) |
|-----|----------|------------|---------------------|
| 1 | 0.10 | 0.10 | $1.2 \times 10^{-3}$ |
| 2 | 0.10 | 0.20 | $2.4 \times 10^{-3}$ |
| 3 | 0.20 | 0.20 | $9.6 \times 10^{-3}$ |

**Find order with respect to each reactant and overall order.**

**Solution:**

*Order w.r.t Cl₂ (Exp 1 → Exp 2, [NO] constant):*

$$\frac{r_2}{r_1} = \left(\frac{[\text{Cl}_2]_2}{[\text{Cl}_2]_1}\right)^n \Rightarrow \frac{2.4}{1.2} = \left(\frac{0.20}{0.10}\right)^n \Rightarrow 2 = 2^n \Rightarrow n = 1$$

*Order w.r.t NO (Exp 2 → Exp 3, [Cl₂] constant):*

$$\frac{r_3}{r_2} = \left(\frac{[\text{NO}]_3}{[\text{NO}]_2}\right)^m \Rightarrow \frac{9.6}{2.4} = \left(\frac{0.20}{0.10}\right)^m \Rightarrow 4 = 2^m \Rightarrow m = 2$$

**Rate Law:** $r = k[\text{NO}]^2[\text{Cl}_2]$ → **3rd order overall**

**Value of $k$:**

$$k = \frac{1.2 \times 10^{-3}}{(0.10)^2(0.10)} = \frac{1.2 \times 10^{-3}}{10^{-3}} = 1.2 \text{ M}^{-2}\text{s}^{-1} = 1.2 \text{ L}^2\text{mol}^{-2}\text{s}^{-1}$$

---

## 9. References

| Resource | URL |
|----------|-----|
| LibreTexts — Order of Reaction | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/02%3A_Reaction_Rates/2.10%3A_Reaction_Mechanisms |
| ChemGuide — Order of Reaction | https://www.chemguide.co.uk/physical/basicrates/orders.html |
| Khan Academy — Rate Laws | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics/x2eef969c74e0d802:rate-laws/a/rate-laws-article |

---

[⬅️ Back: Rate of Reaction](./01_Rate_of_Reaction.md) | [➡️ Next: Zero Order Reaction](./03_Zero_Order_Reaction.md)
