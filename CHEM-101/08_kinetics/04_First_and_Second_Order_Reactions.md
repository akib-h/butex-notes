# 📘 04 — First and Second Order Reactions: Mathematical Formulation

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## Part A: First Order Reaction

---

### 1. Definition

A **first order reaction** is one in which the rate depends on the **first power of the concentration** of a single reactant.

$$\text{Rate} = k[A]^1 = k[A]$$

---

### 2. Mathematical Derivation (Rate Equation)

Consider:

$$A \longrightarrow \text{Products}$$

| State | [A] | Time |
|-------|-----|------|
| Initial | $a$ | $0$ |
| At time $t$ | $a - x$ | $t$ |

Rate expression:

$$\frac{dx}{dt} = k(a-x)^1 = k(a-x)$$

Separating variables:

$$\frac{dx}{a-x} = k \, dt$$

Integrating both sides:

$$\int_0^x \frac{dx}{a-x} = \int_0^t k \, dt$$

$$-\ln(a-x)\Big|_0^x = kt$$

$$[-\ln(a-x) + \ln(a)] = kt$$

$$\ln\frac{a}{a-x} = kt$$

$$\therefore \boxed{k = \frac{1}{t} \ln\frac{a}{a-x} = \frac{2.303}{t} \log\frac{a}{a-x}}$$

**In terms of concentration** (where $[A] = a-x$):

$$\boxed{k = \frac{1}{t}\ln\frac{[A]_0}{[A]} = \frac{2.303}{t}\log\frac{[A]_0}{[A]}}$$

Or equivalently:

$$\boxed{[A] = [A]_0 \, e^{-kt}}$$

---

### 3. Half-Life of First Order Reaction

When $t = t_{1/2}$, $[A] = \dfrac{[A]_0}{2}$:

$$k = \frac{2.303}{t_{1/2}} \log \frac{[A]_0}{[A]_0/2} = \frac{2.303}{t_{1/2}} \log 2$$

$$t_{1/2} = \frac{2.303 \log 2}{k} = \frac{2.303 \times 0.3010}{k}$$

$$\boxed{t_{1/2} = \frac{0.693}{k}}$$

> ✅ **Key property:** For a first-order reaction, $t_{1/2}$ is **independent of initial concentration**. It remains constant throughout the reaction.

---

### 4. Units of $k$ (First Order)

$$k = \frac{1}{t}\ln\frac{[A]_0}{[A]} = \frac{\text{mol L}^{-1}}{\text{time} \times \text{mol L}^{-1}} = \text{time}^{-1} = \text{s}^{-1}$$

---

### 5. Proof that 1st Order Reaction Never Completes

From the integrated rate law:

$$k = \frac{1}{t}\ln\frac{a}{a-x}$$

If the reaction totally completes: $a - x = 0$

$$\therefore kt = \ln\frac{a}{0} = \ln\infty = \infty$$

$$\therefore t = \infty$$

The reaction would take **infinite time** to complete. Hence, **first order reactions never complete theoretically**.

---

### 6. Graphical Representations

#### [A] vs. $t$ — Exponential Decay

```
[A]
 |
[A]₀|*.
     |   *.
     |      *.
[A]₀/2|-------*. 
     |          *.
     |             *.
     +-----|-----------> t
          t½
```

#### $\ln[A]$ vs. $t$ — Straight Line

From $[A] = [A]_0 e^{-kt}$:

$$\ln[A] = \ln[A]_0 - kt$$

This has the form $y = mx + c$ with **slope = $-k$**.

```
ln[A]
 |*
 |  *
 |    *        slope = -k
 |      *
 |        *
 +------------> t
```

---

### 7. Examples of First Order Reactions

| Reaction | Notes |
|----------|-------|
| $2\text{N}_2\text{O}_5 \rightarrow 4\text{NO}_2 + \text{O}_2$ | Classic gas-phase first order |
| $\text{H}_2\text{O}_2 \rightarrow \text{H}_2\text{O} + \frac{1}{2}\text{O}_2$ | Catalytic decomposition |
| Radioactive decay: ${}^{14}\text{C} \rightarrow {}^{14}\text{N} + \beta$ | All radioactive decays are 1st order |
| Hydrolysis of esters (pseudo-first order) | e.g., CH₃COOC₂H₅ + H₂O |
| Inversion of cane sugar | Pseudo-first order |

---

### 8. Worked Examples

#### Problem 1
A first order reaction has a half-life of 100 s. How long will it take for the reaction to be 75% complete?

**Solution:**

$$t_{1/2} = 100 \text{ s} \Rightarrow k = \frac{0.693}{100} = 6.93 \times 10^{-3} \text{ s}^{-1}$$

Let $a = 100$, $x = 75$, $a - x = 25$

$$t = \frac{2.303}{k}\log\frac{a}{a-x} = \frac{2.303}{6.93 \times 10^{-3}}\log\frac{100}{25}$$

$$= \frac{2.303}{6.93 \times 10^{-3}} \times \log 4 = \frac{2.303 \times 0.6021}{6.93 \times 10^{-3}}$$

$$\boxed{t = 200 \text{ s}}$$

> Note: 75% completion = two half-lives → $t = 2 \times t_{1/2} = 200$ s ✓

#### Problem 2
A first order reaction is 25% complete in 30 minutes. Calculate:
1. Rate constant
2. Half-life
3. Time for 75% completion

**Solution:**

$a = 100$, $x = 25$, $a - x = 75$, $t = 30$ min

**(1) Rate constant:**
$$k = \frac{2.303}{30}\log\frac{100}{75} = \frac{2.303}{30} \times \log(1.333)$$
$$= \frac{2.303 \times 0.1249}{30} = 9.59 \times 10^{-3} \text{ min}^{-1}$$

**(2) Half-life:**
$$t_{1/2} = \frac{0.693}{9.59 \times 10^{-3}} = 72.26 \text{ min}$$

**(3) Time for 75% completion:**
$$x = 75, \quad a - x = 25$$
$$t = \frac{2.303}{9.59 \times 10^{-3}}\log\frac{100}{25} = \frac{2.303 \times 0.6021}{9.59 \times 10^{-3}} = 144.56 \text{ min}$$

---

## Part B: Second Order Reaction

---

### 9. Definition

A **second order reaction** is one where the rate depends on the **square of the concentration** of one reactant, or the **product of concentrations** of two different reactants.

$$\text{Type I:} \quad \text{Rate} = k[A]^2 \quad \text{(one reactant)}$$

$$\text{Type II:} \quad \text{Rate} = k[A][B] \quad \text{(two reactants)}$$

---

### 10. Mathematical Derivation — Type I ($2A \rightarrow$ Products)

$$2A \longrightarrow \text{Products}$$

| State | [A] | Time |
|-------|-----|------|
| Initial | $a$ | $0$ |
| At time $t$ | $a-x$ | $t$ |

$$\frac{dx}{dt} = k(a-x)^2$$

Separating variables:

$$\frac{dx}{(a-x)^2} = k \, dt$$

$$\int_0^x (a-x)^{-2} dx = \int_0^t k \, dt$$

$$\left[\frac{(a-x)^{-1}}{-1}\right]_0^x = kt$$

$$\frac{1}{a-x} - \frac{1}{a} = kt$$

$$kt = \frac{x}{a(a-x)}$$

$$\therefore \boxed{k = \frac{1}{t} \cdot \frac{x}{a(a-x)}}$$

**In terms of concentration:**

$$\boxed{k = \frac{1}{t}\left(\frac{1}{[A]} - \frac{1}{[A]_0}\right)}$$

Or:

$$\frac{1}{[A]} = \frac{1}{[A]_0} + kt$$

---

### 11. Half-Life of Second Order Reaction

When $t = t_{1/2}$, $x = \dfrac{a}{2}$:

$$k = \frac{1}{t_{1/2}} \cdot \frac{a/2}{a(a - a/2)} = \frac{1}{t_{1/2}} \cdot \frac{a/2}{a \cdot a/2} = \frac{1}{t_{1/2} \cdot a}$$

$$\boxed{t_{1/2} = \frac{1}{ka} = \frac{1}{k[A]_0}}$$

> 📌 For second-order reactions, **half-life is inversely proportional to initial concentration**. As the reaction proceeds and $[A]$ decreases, the half-life increases.

---

### 12. Units of $k$ (Second Order)

$$k = \frac{1}{t} \cdot \frac{1}{[A]} = \frac{1}{\text{s} \cdot \text{mol L}^{-1}} = \text{L mol}^{-1}\text{s}^{-1} = \text{M}^{-1}\text{s}^{-1}$$

---

### 13. Graphical Representation — Second Order

#### $1/[A]$ vs. $t$ — Straight Line

From $\dfrac{1}{[A]} = \dfrac{1}{[A]_0} + kt$:

**slope = $+k$**, y-intercept = $1/[A]_0$

```
1/[A]
 |             *
 |           *
 |         *        slope = +k
 |       *
1/[A]₀|*
 +--------------> t
```

---

### 14. Examples of Second Order Reactions

| Reaction | Rate Law |
|----------|---------|
| $2\text{NO}_2 \rightarrow 2\text{NO} + \text{O}_2$ | $r = k[\text{NO}_2]^2$ |
| $\text{H}_2 + \text{I}_2 \rightarrow 2\text{HI}$ | $r = k[\text{H}_2][\text{I}_2]$ |
| $\text{CH}_3\text{CHO} \rightarrow \text{CH}_4 + \text{CO}$ | $r = k[\text{CH}_3\text{CHO}]^2$ |
| Alkaline hydrolysis of esters | $r = k[\text{ester}][\text{OH}^-]$ |
| $\text{OH}^- + \text{CH}_3\text{Br} \rightarrow \text{CH}_3\text{OH} + \text{Br}^-$ | $r = k[\text{OH}^-][\text{CH}_3\text{Br}]$ |

---

### 15. Comprehensive Comparison Table

| Property | **Zero Order** | **First Order** | **Second Order** |
|----------|--------------|----------------|-----------------|
| Rate law | $r = k$ | $r = k[A]$ | $r = k[A]^2$ |
| Integrated law | $[A] = [A]_0 - kt$ | $[A] = [A]_0 e^{-kt}$ | $\frac{1}{[A]} = \frac{1}{[A]_0} + kt$ |
| $k$ formula | $k = \frac{x}{t}$ | $k = \frac{1}{t}\ln\frac{a}{a-x}$ | $k = \frac{1}{t}\cdot\frac{x}{a(a-x)}$ |
| Units of $k$ | mol L⁻¹ s⁻¹ | s⁻¹ | L mol⁻¹ s⁻¹ |
| $t_{1/2}$ | $\frac{[A]_0}{2k}$ | $\frac{0.693}{k}$ | $\frac{1}{k[A]_0}$ |
| Linear plot | $[A]$ vs $t$ | $\ln[A]$ vs $t$ | $1/[A]$ vs $t$ |
| Completion | Finite time | Infinite time | Infinite time |

---

## 16. References

| Resource | URL |
|----------|-----|
| LibreTexts — First-Order Reactions | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/02%3A_Reaction_Rates/2.06%3A_First-Order_Reactions |
| LibreTexts — Second-Order Reactions | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/02%3A_Reaction_Rates/2.07%3A_Second-Order_Reactions |
| ChemGuide — Rate Equations | https://www.chemguide.co.uk/physical/basicrates/orders.html |
| Khan Academy — Integrated Rate Laws | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics/x2eef969c74e0d802:integrated-rate-laws |

---

[⬅️ Back: Zero Order](./03_Zero_Order_Reaction.md) | [➡️ Next: Determination of Order](./05_Determination_of_Order.md)
