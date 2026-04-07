# 📘 07 — Theories of Chemical Reaction Rate

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## Overview

Two major theoretical frameworks explain why and how chemical reactions occur:

1. **Collision Theory** (Arrhenius / Lewis)
2. **Transition State Theory** (Eyring / Evans-Polanyi)

---

## Part A: Collision Theory

### 1. Basic Postulates

Collision theory was developed by **Arrhenius (1889)** and later formalized by **Max Trautz and William Lewis (1916-18)**. The fundamental postulates are:

1. **Reactant molecules must collide** with each other for a reaction to occur.
2. Not every collision leads to a reaction — only **active (effective) collisions** do.
3. An **active collision** requires:
   - (a) Energy equal to or greater than the **activation energy** $E_a$
   - (b) Correct **spatial orientation** of colliding molecules

4. After an active collision, the reactant molecules go through a **transition state** (activated complex) to form products.

### 2. Collision Frequency

The **collision frequency ($Z_{AB}$)** is the number of collisions per unit volume per unit time between molecules A and B:

$$Z_{AB} = N_A N_B \sigma_{AB} \sqrt{\frac{8k_BT}{\pi\mu}}$$

Where:
| Symbol | Meaning |
|--------|---------|
| $N_A$, $N_B$ | Number densities of A and B |
| $\sigma_{AB}$ | Collision cross section = $\pi(r_A + r_B)^2$ |
| $k_B$ | Boltzmann constant |
| $T$ | Absolute temperature |
| $\mu$ | Reduced mass $= \frac{m_Am_B}{m_A+m_B}$ |

### 3. Fraction of Molecules with Energy $\geq E_a$

From the Maxwell-Boltzmann distribution:

$$f = e^{-E_a/RT}$$

Only this fraction of all collisions are energetically sufficient.

### 4. Rate Constant from Collision Theory

$$k = p \cdot Z_{AB} \cdot e^{-E_a/RT}$$

Where $p$ is the **steric factor** (probability of correct orientation):

$$\boxed{k = p \cdot A \cdot e^{-E_a/RT}}$$

This **reproduces the Arrhenius equation**, confirming:
- $A = p \cdot Z_{AB}/[A][B]$ (frequency factor)
- $e^{-E_a/RT}$ = energy factor

### 5. Steric Factor $p$

| Reaction Type | $p$ value |
|--------------|-----------|
| Simple atom + atom | ~1 |
| Small molecules (H₂ + I₂) | 0.1 – 0.5 |
| Complex molecules | $10^{-3}$ to $10^{-8}$ |

Example: For $\text{H}_2 + \text{I}_2 \rightarrow 2\text{HI}$, $p \approx 0.28$

### 6. Limitations of Collision Theory

| Limitation | Reason |
|-----------|--------|
| Cannot predict $A$ from first principles for complex reactions | Steric factor $p$ is empirical |
| Treats molecules as hard spheres | Ignores internal degrees of freedom |
| Cannot explain reactions with $p > 1$ | Some reactions are faster than collision theory predicts |
| No information about bond rearrangement | Does not describe the path from reactants to products |

---

## Part B: Transition State Theory (TST)

### 7. Overview

Also called **Activated Complex Theory** or **Absolute Rate Theory**, developed by **Henry Eyring, Michael Polanyi, and M.G. Evans (1935)**.

TST is more sophisticated and provides a detailed picture of the **energy profile** along the **reaction coordinate**.

### 8. Postulates of Transition State Theory

1. Reacting molecules form a **transition state** (or **activated complex**) at the **top of the energy barrier**.
2. The activated complex is in **quasi-equilibrium** with the reactants.
3. The activated complex **decomposes** into products along one specific **normal mode of vibration**.
4. There is a **reaction coordinate** — a path in multidimensional space connecting reactants to products.

### 9. The Reaction Coordinate Diagram

For the reaction $A + B-C \rightarrow A-B + C$:

```
                [A---B---C]‡
                  (Transition State)
                      *
                    *   *
                  *       *
Potential       *           *
Energy     A+BC *             * AB+C
            (Reactants)         (Products)
                 -----> Reaction Coordinate
```

Key features:
- **Reactants** are at a local energy minimum
- **Transition state (‡)** is at the energy maximum (saddle point)
- **Products** are at another energy minimum
- **$E_a$ (forward)** = energy difference: transition state − reactants
- **$E_a$ (reverse)** = energy difference: transition state − products
- **$\Delta H$** = energy difference: products − reactants

### 10. The Eyring Equation

TST derives the rate constant as:

$$\boxed{k = \frac{k_B T}{h} \cdot K^{\ddagger} = \frac{k_B T}{h} \cdot e^{-\Delta G^{\ddagger}/RT}}$$

Since $\Delta G^{\ddagger} = \Delta H^{\ddagger} - T\Delta S^{\ddagger}$:

$$k = \frac{k_B T}{h} \cdot e^{\Delta S^{\ddagger}/R} \cdot e^{-\Delta H^{\ddagger}/RT}$$

Where:
| Symbol | Meaning |
|--------|---------|
| $k_B$ | Boltzmann constant ($1.38 \times 10^{-23}$ J/K) |
| $h$ | Planck's constant ($6.63 \times 10^{-34}$ J·s) |
| $\Delta G^{\ddagger}$ | Gibbs free energy of activation |
| $\Delta H^{\ddagger}$ | Enthalpy of activation |
| $\Delta S^{\ddagger}$ | Entropy of activation |

### 11. Comparison: Arrhenius vs. Eyring

| Feature | Arrhenius | Eyring (TST) |
|---------|-----------|-------------|
| Rate constant | $k = Ae^{-E_a/RT}$ | $k = \frac{k_BT}{h}e^{-\Delta G^{\ddagger}/RT}$ |
| $A$ factor | Empirical | $A = \frac{k_BT}{h}e^{\Delta S^{\ddagger}/R}$ |
| $E_a$ | Empirical | $E_a \approx \Delta H^{\ddagger} + RT$ |
| Molecular picture | Limited | Detailed (energy surface) |

### 12. Thermodynamic Quantities in TST

$$\Delta G^{\ddagger} = -RT\ln K^{\ddagger}$$

$$\ln k = \ln\frac{k_BT}{h} + \frac{\Delta S^{\ddagger}}{R} - \frac{\Delta H^{\ddagger}}{RT}$$

From the **Eyring plot** ($\ln(k/T)$ vs. $1/T$):
- Slope $= -\Delta H^{\ddagger}/R$ → gives enthalpy of activation
- Intercept $= \ln(k_B/h) + \Delta S^{\ddagger}/R$ → gives entropy of activation

---

## Part C: Comparison of Both Theories

| Feature | Collision Theory | Transition State Theory |
|---------|-----------------|------------------------|
| Year | 1916–1918 | 1935 |
| Basis | Kinetic molecular theory | Statistical mechanics + thermodynamics |
| Key concept | Effective collisions | Activated complex / saddle point |
| Activation energy | Energy threshold for collision | Energy barrier on potential energy surface |
| Predictions | Rate ∝ collision frequency × $e^{-E_a/RT}$ | Rate via partition functions |
| Structural information | None | Transition state geometry and energetics |
| Steric factor | Empirical ($p$) | Included via $\Delta S^{\ddagger}$ |
| Applicability | Simple bimolecular reactions | Broad (gas, liquid, enzyme catalysis) |

---

## 13. Potential Energy Surface (PES)

In TST, we think of a **multidimensional potential energy surface**:

```
    E
    |           ‡ Saddle point (Transition State)
    |          * *
    |        *     *
    |      *         *
    |   *               *
    |*                     *
    |  Reactants              Products
    +-------------------------> Reaction Coordinate
```

The **reaction path** follows the minimum energy path through the saddle point on the PES.

---

## 14. References

| Resource | URL |
|----------|-----|
| LibreTexts — Collision Theory | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/06%3A_Modeling_Reaction_Kinetics/6.01%3A_Collision_Theory |
| LibreTexts — Transition State Theory | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/06%3A_Modeling_Reaction_Kinetics/6.03%3A_The_Eyring_Equation |
| Khan Academy — Collision Theory | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics/x2eef969c74e0d802:collision-model/a/collision-model |

---

[⬅️ Back: Effect of Temperature](./06_Effect_of_Temperature.md) | [➡️ Next: Activation Energy](./08_Activation_Energy.md)
