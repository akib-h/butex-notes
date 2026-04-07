# 📘 01 — Rate of Reaction

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. Definition

**Chemical Kinetics** is the branch of physical chemistry that deals with the **rate of chemical reactions**, the factors that influence the rate, and the **mechanism** (sequence of steps) by which a reaction occurs.

**Rate of Reaction** is defined as the change in concentration of any reactant or product per unit time.

$$\text{Rate of Reaction} = \frac{\text{Change in Concentration}}{\text{Time}}$$

---

## 2. Mathematical Expression

For a general reaction:

$$A \longrightarrow B$$

| Time | Concentration of A | Concentration of B |
|------|-------------------|--------------------|
| $t = 0$ | $[A]_0$ | $0$ |
| $t = t$ | $[A]_t$ | $[B]_t$ |

The **instantaneous rate** is expressed as:

$$\text{Rate} = -\frac{d[A]}{dt} = +\frac{d[B]}{dt}$$

> **Sign Convention:**
> - **Negative sign** for reactants: concentration **decreases** with time
> - **Positive sign** for products: concentration **increases** with time

---

## 3. Rate for Stoichiometrically Complex Reactions

For a reaction with stoichiometric coefficients:

$$aA + bB \longrightarrow cC + dD$$

$$\text{Rate} = -\frac{1}{a}\frac{d[A]}{dt} = -\frac{1}{b}\frac{d[B]}{dt} = +\frac{1}{c}\frac{d[C]}{dt} = +\frac{1}{d}\frac{d[D]}{dt}$$

### Example 1

For the reaction:

$$2\text{NO}_2 \longrightarrow 2\text{NO} + \text{O}_2$$

$$\text{Rate} = -\frac{1}{2}\frac{d[\text{NO}_2]}{dt} = +\frac{1}{2}\frac{d[\text{NO}]}{dt} = +\frac{d[\text{O}_2]}{dt}$$

### Example 2

For the Haber process:

$$\text{N}_2 + 3\text{H}_2 \longrightarrow 2\text{NH}_3$$

$$\text{Rate} = -\frac{d[\text{N}_2]}{dt} = -\frac{1}{3}\frac{d[\text{H}_2]}{dt} = +\frac{1}{2}\frac{d[\text{NH}_3]}{dt}$$

---

## 4. Units of Rate of Reaction

$$\text{Unit of Rate} = \frac{\text{Concentration}}{\text{Time}} = \frac{\text{mol L}^{-1}}{\text{sec}} = \text{mol L}^{-1} \text{sec}^{-1}$$

Other common units: `mol dm⁻³ s⁻¹` or `M s⁻¹`

---

## 5. Average Rate vs. Instantaneous Rate

| Type | Definition | Formula |
|------|------------|---------|
| **Average Rate** | Change in concentration over a finite time interval | $\bar{r} = -\dfrac{\Delta[A]}{\Delta t}$ |
| **Instantaneous Rate** | Rate at a specific moment in time | $r = -\dfrac{d[A]}{dt}$ |

### Graphical Representation

The instantaneous rate at any time $t$ is the **slope of the tangent** to the concentration–time curve at that point.

```
[A]
 |\.
 |  \.
 |    \.___  <-- slope = instantaneous rate at t
 |         \___
 +--------------> time (t)
```

> 📊 See: [Concentration vs Time Graph — LibreTexts](https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/14%3A_Chemical_Kinetics/14.02%3A_Reaction_Rates)

---

## 6. Factors Affecting Rate of Reaction

| Factor | Effect |
|--------|--------|
| **Concentration** | Higher concentration → more collisions → faster rate |
| **Temperature** | Higher temperature → more kinetic energy → faster rate |
| **Surface Area** | Greater surface area (solid reactants) → faster rate |
| **Catalyst** | Lowers activation energy → increases rate without being consumed |
| **Nature of Reactants** | Ionic reactions are faster than covalent bond-breaking reactions |
| **Pressure** (gaseous) | Higher pressure increases effective concentration → faster rate |
| **Light** | Some reactions are photosensitive (photochemical reactions) |

---

## 7. Rate Law (Rate Expression)

The **rate law** states that the rate of a reaction is directly proportional to the product of the concentrations of the reactants, each raised to some power:

$$\text{Rate} \propto [A]^m[B]^n$$

$$\boxed{\text{Rate} = k[A]^m[B]^n}$$

Where:
- $k$ = **rate constant** (specific rate constant)
- $m$, $n$ = orders with respect to A and B respectively
- $m + n$ = **overall order** of the reaction

> ⚠️ The powers $m$ and $n$ are **experimentally determined** and are generally **not equal** to the stoichiometric coefficients.

---

## 8. Worked Numerical Example

**Problem:** For the reaction $\text{H}_2 + \text{I}_2 \rightarrow 2\text{HI}$, the following data were collected:

| Experiment | $[\text{H}_2]$ (M) | $[\text{I}_2]$ (M) | Rate (M/s) |
|------------|--------------------|--------------------|------------|
| 1 | 0.10 | 0.10 | $2.5 \times 10^{-4}$ |
| 2 | 0.20 | 0.10 | $5.0 \times 10^{-4}$ |
| 3 | 0.10 | 0.20 | $5.0 \times 10^{-4}$ |

**Solution:**

Comparing Exp 1 and Exp 2 (doubling $[\text{H}_2]$, rate doubles):
$$m = \frac{\log(5.0/2.5)}{\log(0.20/0.10)} = \frac{\log 2}{\log 2} = 1$$

Comparing Exp 1 and Exp 3 (doubling $[\text{I}_2]$, rate doubles):
$$n = 1$$

So: $\text{Rate} = k[\text{H}_2][\text{I}_2]$

Finding $k$:
$$k = \frac{2.5 \times 10^{-4}}{(0.10)(0.10)} = 2.5 \times 10^{-2} \text{ M}^{-1}\text{s}^{-1}$$

---

## 9. References

| Resource | URL |
|----------|-----|
| LibreTexts — Reaction Rates | https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/14%3A_Chemical_Kinetics/14.02%3A_Reaction_Rates |
| Khan Academy — Reaction Rates | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics/x2eef969c74e0d802:reaction-rates/a/reaction-rates-article |
| ChemGuide — Rates of Reaction | https://www.chemguide.co.uk/physical/basicrates/whatis.html |

---

[⬅️ Back to Index](./README.md) | [➡️ Next: Order and Molecularity](./02_Order_and_Molecularity.md)
