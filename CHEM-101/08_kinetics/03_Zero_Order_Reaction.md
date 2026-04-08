# 📘 03 — Zero Order Reaction

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. Definition

A **zero order reaction** is one in which the **rate of reaction is independent of the concentration** of the reactant(s). The concentration of the reactant changes at a **constant rate** with time.

$$\text{Rate} = k[A]^0 = k \cdot 1 = k$$

The rate equals the rate constant $k$ — it does not change as concentration changes.

---

## 2. General Rate Equation (Mathematical Derivation)

Consider the reaction:

$$A \longrightarrow \text{Products}$$

| State | Concentration of A | Time |
|-------|--------------------|------|
| Initial | $a$ | $0$ |
| After time $t$ | $a - x$ | $t$ |

Where $x$ = amount of A decomposed at time $t$.

**Rate expression:**

$$\frac{dx}{dt} = k(a-x)^n$$

For **zero order** ($n = 0$):

$$\frac{dx}{dt} = k(a-x)^0 = k$$

**Integrating both sides:**

$$\int dx = \int k \, dt$$

$$x = kt + C \quad \cdots (1)$$

**Applying initial conditions:** When $t = 0$, $x = 0$:

$$0 = k(0) + C \Rightarrow C = 0$$

Substituting back into (1):

$$\boxed{x = kt}$$

$$\therefore \boxed{k = \frac{x}{t}}$$

This means the **rate constant equals the amount decomposed per unit time**.

---

## 3. Integrated Rate Law in Terms of Concentration

Using $[A] = a - x$, i.e. $x = a - [A]$:

$$a - [A] = kt$$

$$\boxed{[A] = [A]_0 - kt}$$

This is a **linear equation** in time — concentration decreases linearly with time.

---

## 4. Half-Life of Zero Order Reaction

The **half-life** ($t_{1/2}$) is the time required for the concentration to fall to **half** its initial value.

When $t = t_{1/2}$, $x = \dfrac{a}{2}$:

$$k = \frac{x}{t} = \frac{a/2}{t_{1/2}}$$

$$\boxed{t_{1/2} = \frac{a}{2k} = \frac{[A]_0}{2k}}$$

> 📌 For zero order reactions, **half-life is directly proportional to the initial concentration** $[A]_0$.

---

## 5. Units of Rate Constant for Zero Order

$$k = \frac{x}{t} = \frac{\text{mol L}^{-1}}{\text{sec}} = \text{mol L}^{-1} \text{s}^{-1}$$

---

## 6. Characteristics of Zero Order Reactions

| Property | Value |
|----------|-------|
| Rate law | $r = k$ |
| Integrated rate law | $[A] = [A]_0 - kt$ |
| Half-life | $t_{1/2} = \dfrac{[A]_0}{2k}$ |
| Units of $k$ | mol L⁻¹ s⁻¹ |
| $[A]$ vs $t$ plot | **Straight line** with negative slope |
| Rate vs $[A]$ plot | **Horizontal line** (rate is constant) |

---

## 7. Graphical Representation

### Concentration vs. Time (Linear Graph)

```
[A]
 |
a|*
 |  *
 |    *        slope = -k
 |      *
a/2|-------*
 |          *
 |            *
 +-----|-----|--> t
      t½    t
```

The graph of $[A]$ vs $t$ is a **straight line with slope = $-k$** and y-intercept = $[A]_0$.

### Rate vs. Concentration

```
Rate
 |
 |__________  ← Rate = k (constant, independent of [A])
 |
 +-----------> [A]
```

---

## 8. Examples of Zero Order Reactions

### Example 1: Photochemical Reaction
$$\text{H}_2 + \text{Cl}_2 \xrightarrow{h\nu} 2\text{HCl}$$
Rate = $k$ (independent of concentrations, depends only on light intensity)

### Example 2: Catalytic Surface Reaction (Langmuir kinetics)
$$\text{NO}_2 + \text{CO} \xrightarrow{\text{Pt surface}} \text{NO} + \text{CO}_2$$

$$\text{Rate} = k[\text{NO}_2]^2 \quad \text{(but at high [NO}_2\text{], surface is saturated)}$$

When the catalyst surface is **fully saturated** with reactant molecules, additional increases in concentration do not affect the rate → effectively **zero order**.

### Example 3: Enzyme-Catalyzed Reaction (at saturation)

When substrate concentration is very high and all enzyme active sites are occupied, the reaction becomes zero order with respect to substrate.

### Example 4: Decomposition of ammonia on Platinum

$$2\text{NH}_3 \xrightarrow{\text{Pt}} \text{N}_2 + 3\text{H}_2$$

$$\text{Rate} = k \quad \text{(zero order at high pressure)}$$

---

## 9. Worked Numerical Examples

### Problem 1
The rate constant of a zero order reaction is $2.0 \times 10^{-3}$ mol L⁻¹ s⁻¹. If the initial concentration is $0.10$ mol/L, calculate the half-life and the time at which the concentration will be $0.04$ mol/L.

**Solution:**

Half-life:
$$t_{1/2} = \frac{[A]_0}{2k} = \frac{0.10}{2 \times 2.0 \times 10^{-3}} = \frac{0.10}{4.0 \times 10^{-3}} = 25 \text{ s}$$

Time for $[A] = 0.04$ M:
$$x = [A]_0 - [A] = 0.10 - 0.04 = 0.06 \text{ mol/L}$$
$$t = \frac{x}{k} = \frac{0.06}{2.0 \times 10^{-3}} = 30 \text{ s}$$

---

### Problem 2
A zero order reaction has an initial concentration of 0.50 M and a rate constant of 0.025 mol L⁻¹ min⁻¹. How long will it take for the reactant to be completely consumed?

**Solution:**

$$x = a = 0.50 \text{ M} \quad (100\% \text{ completion})$$

$$t = \frac{x}{k} = \frac{0.50}{0.025} = 20 \text{ min}$$

> 📌 Unlike first-order reactions, **zero-order reactions do complete** in finite time.

---

## 10. Comparison of Zero Order with Other Orders

| Feature | Zero Order | First Order | Second Order |
|---------|------------|-------------|--------------|
| Rate law | $r = k$ | $r = k[A]$ | $r = k[A]^2$ |
| $[A]$ vs $t$ | Straight line | Exponential decay | Hyperbolic |
| $\ln[A]$ vs $t$ | Curved | Straight line | Curved |
| $1/[A]$ vs $t$ | Curved | Curved | Straight line |
| $t_{1/2}$ | $\propto [A]_0$ | Independent of $[A]_0$ | $\propto 1/[A]_0$ |
| Completion | In finite time | Never complete | Never complete |

---

## 11. References

| Resource | URL |
|----------|-----|
| LibreTexts — Zero-Order Reactions | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/02%3A_Reaction_Rates/2.05%3A_Zero-Order_Reactions |
| Khan Academy — Reaction Orders | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics |
| ChemGuide — Zero Order | https://www.chemguide.co.uk/physical/basicrates/zero.html |

---

[⬅️ Back: Order & Molecularity](./02_Order_and_Molecularity.md) | [➡️ Next: 1st & 2nd Order Reactions](./04_First_and_Second_Order_Reactions.md)
