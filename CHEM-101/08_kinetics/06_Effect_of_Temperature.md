# 📘 06 — Effect of Temperature on Rate of Reaction

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. General Observation

Increasing temperature generally **increases the rate** of a chemical reaction. As a rule of thumb:

> **Van't Hoff Rule (approximate):** For every 10°C rise in temperature, the reaction rate approximately **doubles** (rate increases by a factor of 2).

This ratio is called the **temperature coefficient ($\mu$)**:

$$\mu = \frac{k_{T+10}}{k_T} \approx 2 \text{ to } 3$$

However, this is only an approximation. The exact mathematical relationship is given by the **Arrhenius Equation**.

---

## 2. Kinetic Molecular Theory — Why Temperature Affects Rate

From kinetic molecular theory, the **average kinetic energy** of gas molecules is:

$$\overline{KE} = \frac{3}{2}k_B T$$

Where $k_B$ is the Boltzmann constant. When temperature increases:
- Molecules move faster → more collisions per second
- More molecules have energy exceeding the **activation energy barrier**
- Both effects contribute to a faster reaction rate

---

## 3. The Arrhenius Equation

In 1889, **Svante Arrhenius** proposed a quantitative relationship between the rate constant $k$ and temperature $T$:

$$\boxed{k = A e^{-E_a/RT}}$$

Where:
| Symbol | Meaning | Units |
|--------|---------|-------|
| $k$ | Rate constant | depends on order |
| $A$ | Pre-exponential (frequency) factor | same units as $k$ |
| $E_a$ | Activation energy | J mol⁻¹ or kJ mol⁻¹ |
| $R$ | Universal gas constant | 8.314 J mol⁻¹ K⁻¹ |
| $T$ | Absolute temperature | Kelvin (K) |

The factor $A$ (also called the **Arrhenius factor** or **frequency factor**) represents:
- The frequency of collisions with correct orientation
- The fraction of collisions with proper geometry for reaction

The term $e^{-E_a/RT}$ = fraction of molecules that have energy $\geq E_a$

---

## 4. Logarithmic Form of the Arrhenius Equation

Taking natural logarithm of both sides:

$$\ln k = \ln A - \frac{E_a}{RT}$$

Converting to $\log_{10}$:

$$\log k = \log A - \frac{E_a}{2.303RT}$$

This has the form of a straight line: $y = mx + c$

| Variable | Corresponds to |
|----------|----------------|
| $y$ | $\log k$ |
| $x$ | $1/T$ |
| slope ($m$) | $-E_a / (2.303R)$ |
| intercept ($c$) | $\log A$ |

### Graphical Determination of $E_a$ and $A$

Plot $\log k$ vs. $1/T$:

```
log k
 |*
 |  *
 |    *              slope = -Ea/(2.303R)
 |      *
 |        *
 +-----------> 1/T
  (straight line — Arrhenius plot)
```

From slope:

$$E_a = -2.303R \times \text{slope} = -2.303 \times 8.314 \times \text{slope}$$

---

## 5. Two-Temperature Form of Arrhenius Equation

If $k_1$ and $k_2$ are rate constants at temperatures $T_1$ and $T_2$:

$$\log k_1 = \log A - \frac{E_a}{2.303RT_1}$$
$$\log k_2 = \log A - \frac{E_a}{2.303RT_2}$$

Subtracting:

$$\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$\boxed{\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left[\frac{T_2 - T_1}{T_1 T_2}\right]}$$

This is the **two-temperature Arrhenius equation** — widely used to calculate $E_a$.

---

## 6. Physical Interpretation

| $E_a$ Value | Meaning | Rate at room temp |
|------------|---------|------------------|
| Very low ($< 40$ kJ/mol) | Many molecules have sufficient energy | Fast reaction |
| Moderate ($40-150$ kJ/mol) | Typical chemical reactions | Moderate rate |
| Very high ($> 150$ kJ/mol) | Very few molecules have sufficient energy | Very slow |

For catalyzed reactions: $E_a$ is **reduced**, so $e^{-E_a/RT}$ **increases** → faster rate.

---

## 7. Worked Examples

### Example 1
The rate constant for a reaction at 25°C is $1.0 \times 10^{-3}$ s⁻¹. At 35°C, it is $2.0 \times 10^{-3}$ s⁻¹. Calculate the activation energy.

**Solution:**

$$T_1 = 298 \text{ K}, \quad T_2 = 308 \text{ K}$$
$$k_1 = 1.0 \times 10^{-3}, \quad k_2 = 2.0 \times 10^{-3}$$

$$\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left[\frac{T_2 - T_1}{T_1 T_2}\right]$$

$$\log\frac{2.0 \times 10^{-3}}{1.0 \times 10^{-3}} = \frac{E_a}{2.303 \times 8.314}\left[\frac{308 - 298}{298 \times 308}\right]$$

$$\log 2 = \frac{E_a}{19.147}\left[\frac{10}{91,784}\right]$$

$$0.3010 = \frac{E_a \times 1.089 \times 10^{-4}}{19.147}$$

$$E_a = \frac{0.3010 \times 19.147}{1.089 \times 10^{-4}} = \frac{5.763}{1.089 \times 10^{-4}}$$

$$\boxed{E_a \approx 52,920 \text{ J mol}^{-1} \approx 52.9 \text{ kJ mol}^{-1}}$$

---

### Example 2
The activation energy for a reaction is 75.0 kJ/mol. By what factor does the rate constant increase when temperature rises from 25°C to 35°C?

**Solution:**

$$\log\frac{k_2}{k_1} = \frac{75000}{2.303 \times 8.314}\left[\frac{10}{298 \times 308}\right]$$

$$= \frac{75000}{19.147} \times \frac{10}{91784}$$

$$= 3918.9 \times 1.089 \times 10^{-4} = 0.4267$$

$$\frac{k_2}{k_1} = 10^{0.4267} = 2.67$$

Rate increases by a factor of **2.67** for a 10°C rise.

---

### Example 3 — Finding $A$ from Arrhenius equation

For a reaction, $E_a = 80$ kJ/mol and $k = 2.5 \times 10^{-3}$ s⁻¹ at 300 K. Find $A$.

$$k = Ae^{-E_a/RT}$$

$$A = k \cdot e^{E_a/RT} = 2.5 \times 10^{-3} \times e^{80000/(8.314 \times 300)}$$

$$= 2.5 \times 10^{-3} \times e^{32.07}$$

$$= 2.5 \times 10^{-3} \times 8.72 \times 10^{13}$$

$$\boxed{A = 2.18 \times 10^{11} \text{ s}^{-1}}$$

---

## 8. Exceptional Behavior — Negative Temperature Dependence

Some reactions exhibit **decreased rate with increased temperature**:

| Reaction Type | Behavior | Reason |
|--------------|---------|--------|
| Enzyme reactions (above optimum T) | Rate decreases | Enzyme denaturation |
| Combustion (some) | Rate decreases temporarily | Radical recombination |
| $2\text{NO} + \text{O}_2 \rightarrow 2\text{NO}_2$ | Rate decreases | Pre-equilibrium mechanism |
| Explosions | Non-Arrhenius | Chain-branching mechanisms |

These are called **non-Arrhenius reactions**.

---

## 9. Effect on Equilibrium

From Arrhenius equation for forward and reverse reactions:

$$K_{eq} = \frac{k_f}{k_r} = \frac{A_f}{A_r} e^{-(E_{a,f} - E_{a,r})/RT} = \frac{A_f}{A_r} e^{-\Delta H/RT}$$

This connects kinetics with thermodynamics via the **van't Hoff equation**.

---

## 10. References

| Resource | URL |
|----------|-----|
| LibreTexts — Arrhenius Equation | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/06%3A_Modeling_Reaction_Kinetics/6.02%3A_Temperature_Dependence_of_Reaction_Rates/6.2.03%3A_The_Arrhenius_Law |
| Khan Academy — Arrhenius Equation | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics/x2eef969c74e0d802:arrhenius-equation/v/arrhenius-equation |
| ChemGuide — Arrhenius | https://www.chemguide.co.uk/physical/basicrates/temperature.html |

---

[⬅️ Back: Determination of Order](./05_Determination_of_Order.md) | [➡️ Next: Theories of Reaction Rate](./07_Theories_of_Reaction_Rate.md)
