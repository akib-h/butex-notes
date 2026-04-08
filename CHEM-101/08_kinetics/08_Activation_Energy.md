# 📘 08 — Activation Energy and Activated Complex

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. Activation Energy ($E_a$)

### Definition

**Activation energy** is the **minimum amount of energy** that the reacting molecules must possess for the reaction to occur. It is the energy required to initiate the breaking of old bonds.

More precisely, $E_a$ is the energy difference between the **average energy of reactant molecules** and the **energy of the transition state (activated complex)**:

$$\boxed{E_a = E_{\text{transition state}} - E_{\text{reactants}}}$$

From the Arrhenius equation: $k = Ae^{-E_a/RT}$

### Units

$$E_a \text{ is expressed in } \text{J mol}^{-1} \text{ or } \text{kJ mol}^{-1}$$

Typical values:
| Reaction Type | $E_a$ (kJ/mol) |
|--------------|----------------|
| Ionic reactions in solution | 10–20 |
| Enzyme-catalyzed reactions | 20–60 |
| Typical organic reactions | 60–150 |
| Very slow reactions | 150–300 |
| Uncatalyzed biological reactions | 50–120 |
| Reduction with catalyst | ~50% of uncatalyzed |

---

## 2. The Activated Complex (Transition State)

### Definition

The **activated complex** is the **unstable, high-energy species** formed at the top of the potential energy barrier during the conversion of reactants to products. It represents the **transition state** of the reaction.

For the reaction $A + B-C \rightarrow A-B + C$:

$$A + B-C \rightarrow [\underbrace{A \cdots B \cdots C}_{\text{Activated Complex}}]^{\ddagger} \rightarrow A-B + C$$

### Characteristics of the Activated Complex

| Property | Description |
|----------|-------------|
| **Existence** | Too unstable to isolate; very short-lived ($\sim 10^{-13}$ s) |
| **Energy** | At maximum of energy profile |
| **Structure** | Partial bonds — old bonds partially broken, new bonds partially formed |
| **Reversibility** | Can decompose back to reactants or forward to products |
| **Not an intermediate** | Unlike reaction intermediates, cannot be isolated |

---

## 3. Potential Energy Diagrams

### 3.1 Exothermic Reaction

In an exothermic reaction, the **potential energy of products < potential energy of reactants**.

```
Potential
Energy
    |
    |          [A---B---C]‡  ← Activated Complex
    |         /             \
    |        /   Ea(fwd)     \
    |       /                 \   Ea(rev)
    |      / A + B-C           \
    |     /  (Reactants)        \
    |    /                       \ A-B + C
    |   /                         \ (Products)
    |  /                           \
    | /            ΔH < 0           \
    |/                               \
    +---------------------------------> Reaction Coordinate
```

- $E_a(\text{forward}) = E_{\text{TS}} - E_{\text{reactants}}$
- $E_a(\text{reverse}) = E_{\text{TS}} - E_{\text{products}}$
- $\Delta H = E_{\text{products}} - E_{\text{reactants}} < 0$ (exothermic)
- $E_a(\text{fwd}) < E_a(\text{rev})$ for exothermic reactions

### 3.2 Endothermic Reaction

In an endothermic reaction, the **potential energy of products > potential energy of reactants**.

```
Potential
Energy
    |
    |          [A---B---C]‡
    |         /             \
    |        /   Ea(fwd)     \   A-B + C
    |       /                 \ /  (Products)
    | A+B-C/      Ea(rev)      *
    |  (Reactants)
    |
    +---------------------------------> Reaction Coordinate
```

- $\Delta H > 0$ (endothermic)
- $E_a(\text{fwd}) > E_a(\text{rev})$

### 3.3 Reaction with Catalyst

A **catalyst** provides an **alternative pathway** with **lower $E_a$**:

```
Potential
Energy
    |
    |        * ← Uncatalyzed transition state (high Ea)
    |       * *
    |      *   *
    |     *  * ← Catalyzed transition state (low Ea')
    |    * * * *
    |   *         *
    |  *             *
    | * (Reactants)   * (Products)
    +---------------------------------> Reaction Coordinate
```

The catalyst **lowers $E_a$** but **does not change $\Delta H$** (the reactants and products are the same).

---

## 4. Maxwell-Boltzmann Distribution and Activation Energy

The distribution of molecular speeds (and energies) at temperature $T$:

```
Number
of
molecules
    |  T₁              T₂ > T₁
    | /\             /\
    |/  \          /    \
    |    \        /      \
    |     \      /        \___
    |      \____/              \____
    +-----|------|----------|------> Energy
         E_a   (Area under curve = molecules with E ≥ Ea)
```

At higher temperature $T_2$:
- Distribution broadens and shifts right
- **More molecules** have energy $\geq E_a$
- Reaction rate increases dramatically

---

## 5. Mathematical Relationship Between $E_a$ and Reaction Rate

From the Arrhenius equation:

$$\frac{d\ln k}{dT} = \frac{E_a}{RT^2}$$

This is the **Arrhenius equation in differential form**. Integrating between $T_1$ and $T_2$:

$$\int_{k_1}^{k_2} d\ln k = \int_{T_1}^{T_2} \frac{E_a}{RT^2} dT$$

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right) = \frac{E_a(T_2-T_1)}{RT_1T_2}$$

$$\boxed{\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)}$$

---

## 6. Effect of Activation Energy on Rate

At constant temperature $T = 300$ K, $R = 8.314$ J/mol/K:

$$k \propto e^{-E_a/RT}$$

| $E_a$ (kJ/mol) | $e^{-E_a/RT}$ | Relative Rate |
|----------------|---------------|---------------|
| 0 | 1.0 | $\infty$ fast |
| 20 | $3.0 \times 10^{-4}$ | moderate |
| 40 | $8.8 \times 10^{-8}$ | slow |
| 80 | $7.7 \times 10^{-15}$ | very slow |
| 120 | $6.7 \times 10^{-22}$ | extremely slow |

**A difference of 40 kJ/mol in $E_a$ changes the rate by about 10 million-fold at 300 K.**

---

## 7. Multi-Step Reactions and Energy Profiles

For reactions with multiple steps, there are **multiple transition states** and possibly **reaction intermediates**:

```
Potential
Energy
    |          TS1        TS2
    |           *          *
    |          * *        * *
    |         *   *      *   *
    |        *     *    *     *
    |       *  Int  ****       *
    |      * (Intermediate)    *
    | React.*                   *Product
    +---------------------------------> Reaction Coordinate
```

- **Transition state** (TS1, TS2): Energy maxima, **cannot** be isolated
- **Intermediate**: Energy minimum between TS1 and TS2, **can potentially** be isolated
- The **rate-determining step** is the one with the **highest energy transition state**

---

## 8. Worked Numerical Examples

### Example 1
Calculate the activation energy if the rate constant at 300 K is $2.0 \times 10^{-3}$ s⁻¹ and $A = 5.0 \times 10^{12}$ s⁻¹.

**Solution:**

$$k = Ae^{-E_a/RT}$$

$$e^{-E_a/RT} = \frac{k}{A} = \frac{2.0 \times 10^{-3}}{5.0 \times 10^{12}} = 4.0 \times 10^{-16}$$

$$-\frac{E_a}{RT} = \ln(4.0 \times 10^{-16}) = -35.45$$

$$E_a = 35.45 \times RT = 35.45 \times 8.314 \times 300$$

$$\boxed{E_a = 88,395 \text{ J mol}^{-1} \approx 88.4 \text{ kJ mol}^{-1}}$$

### Example 2
The activation energy of a reaction is 93.6 kJ/mol. At what temperature will the rate constant be double its value at 300 K?

**Solution:**

$$\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{T_2-T_1}{T_1T_2}\right)$$

$$\log 2 = \frac{93600}{2.303 \times 8.314}\left(\frac{T_2-300}{300 T_2}\right)$$

$$0.3010 = 4887\left(\frac{T_2-300}{300T_2}\right)$$

$$\frac{T_2-300}{300T_2} = 6.16 \times 10^{-5}$$

Solving: $T_2 - 300 = 0.01848 T_2$

$$0.98152 T_2 = 300 \Rightarrow T_2 = 305.6 \text{ K}$$

The rate doubles at approximately **306 K** (only ~6 K higher than 300 K).

---

## 9. Summary Table

| Concept | Definition/Formula |
|---------|-------------------|
| Activation Energy ($E_a$) | Min energy needed for reaction; $E_a = E_{TS} - E_{reactants}$ |
| Activated Complex | Unstable species at transition state; contains partial bonds |
| Arrhenius Equation | $k = Ae^{-E_a/RT}$ |
| Two-Temperature Form | $\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left[\frac{T_2-T_1}{T_1T_2}\right]$ |
| Graphical $E_a$ | Slope of $\log k$ vs $1/T$ = $-E_a/(2.303R)$ |
| Catalyst effect | Lowers $E_a$, does not change $\Delta H$ |

---

## 10. References

| Resource | URL |
|----------|-----|
| LibreTexts — Activation Energy | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/06%3A_Modeling_Reaction_Kinetics/6.02%3A_Temperature_Dependence_of_Reaction_Rates/6.2.01%3A_Activation_Parameters |
| Khan Academy — Activation Energy | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics/x2eef969c74e0d802:collision-model/a/activation-energy |
| ChemGuide — Activation Energy | https://www.chemguide.co.uk/physical/basicrates/catalyst.html |

---

[⬅️ Back: Theories](./07_Theories_of_Reaction_Rate.md) | [➡️ Next: Catalysis](./09_Homogeneous_Heterogeneous_Catalysis.md)
