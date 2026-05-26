# Chemical Kinetics — Exam Notes

---

## 1. Rate of Reaction (Velocity of Reaction)

> Change in concentration of reactant/product per unit time.

- For **A → Products**:
  - Rate = `dx/dt` (product formed) = `−dc/dt` (reactant consumed)
- **Rate law:** `−dc/dt = Kcⁿ` or `dx/dt = Kcⁿ`
  - **K** = specific rate constant / velocity constant
  - **n** = order of reaction
  - **c** = concentration of reactant; **x** = concentration of product
- `K = dn/dt` → *K equals rate when concentration = 1*
- Rates can be obtained from the **slope of tangent** to the concentration-time curve.

> 📝 **Example:** For 2NO₂ → 2NO + O₂, if [NO₂] decreases from 0.1 mol/L to 0.08 mol/L in 10s:
> Rate = −Δ[NO₂]/Δt = (0.1 − 0.08)/10 = **0.002 mol L⁻¹ s⁻¹**

---

## 2. Order of Reaction

> **Sum of powers** of concentration terms in the rate law.

- For `mA + nB → Products`: `Rate = K[A]ᵐ[B]ⁿ` → **Order = (m + n)**
- `−dc/dt = Kcⁿ`

| n | Order |
|---|-------|
| 0 | Zero |
| 1 | First |
| 2 | Second |
| 3 | Third |

> Order is **experimentally determined**; can be fractional or zero.

> 📝 **Example:** If Rate = K[A]²[B]¹ → order w.r.t A = 2, w.r.t B = 1, **overall order = 3**

> 📝 **Example:** For H₂ + Cl₂ → 2HCl; Rate = K[H₂][Cl₂]½ → **overall order = 1.5 (fractional)**

---

## 3. Molecularity of a Reaction

> **Total number of molecules** taking part in the rate-determining step.

| Type | Molecularity | Example |
|------|-------------|---------|
| Unimolecular | 1 | PCl₅ → PCl₃ + Cl₂ |
| Bimolecular | 2 | 2HI → H₂ + I₂ |
| Termolecular | 3 | 2NO + O₂ → 2NO₂ |

- Molecularity is always a **whole number**; never zero or fractional.
- For **complex reactions**, molecularity = molecules in the **slowest (rate-determining) step**.

> 📝 **Example — Complex Reaction (N₂O₅ decomposition):**
> Overall: 2N₂O₅ → 4NO₂ + O₂
> - Step 1: 2N₂O₅ → 2NO₂ + 2NO₃ (slow)
> - Step 2: NO₂ + NO₃ → NO + NO₂ + O₂ (slow)
> - Step 3: NO + NO₃ → 2NO₂ (fast)
>
> Molecularity of rate-determining step (Step 2) = **2** (bimolecular)

### Order vs. Molecularity
| Order | Molecularity |
|-------|-------------|
| Experimental | Theoretical |
| Can be fractional/zero | Always whole number |
| Applies to overall reaction | Applies to elementary step |

---

## 4. Zero Order Reaction

> Rate is **independent** of reactant concentration.

- `dx/dt = K[C]⁰ = K`
- Integrated: **`x = Kt`** (when t=0, x=0)
- **K = x/t** (units: mol L⁻¹ s⁻¹)
- In zero order: **rate constant = rate** at all concentrations.

> 📝 **Examples:**
> - CH₃COCH₃ + Br₂ → CH₃COCH₂Br + HBr *(bromination of acetone)*
> - HI(g) decomposition on gold (Au) surface
> - Photochemical reactions: H₂ + Cl₂ → 2HCl *(in light)*

> 📝 **Numerical:** If 0.02 mol/L of reactant is consumed in 100s in a zero order reaction:
> K = x/t = 0.02/100 = **2 × 10⁻⁴ mol L⁻¹ s⁻¹**

---

## 5. First Order Reaction

> Rate depends on **first power** of concentration.

- `−dc/dt = Kc`
- Integrated rate equations:

$$K = \frac{1}{t_2 - t_1} \ln\frac{c_1}{c_2} = \frac{2.303}{t_2-t_1} \log\frac{c_1}{c_2}$$

$$K = \frac{1}{t}\ln\frac{c_0}{c} = \frac{2.303}{t}\log\frac{c_0}{c}$$

**Alternative (using initial conc. *a* and amount reacted *x*):**

$$K = \frac{2.303}{t}\log\frac{a}{a-x}$$

- **Units of K:** s⁻¹ (time⁻¹)

> 📝 **Common First Order Reactions:**
> - Radioactive decay: ²²⁶Ra → ²²²Rn + ⁴He
> - Decomposition of N₂O₅: N₂O₅ → 2NO₂ + ½O₂
> - Decomposition of H₂O₂: 2H₂O₂ → 2H₂O + O₂
> - Hydrolysis of sucrose in dilute acid

> 📝 **Solved Problem (from your notes — H₂O₂ decomposition):**
> H₂O₂ titrated against KMnO₄ at different times:
>
> | t (min) | Vol. KMnO₄ |
> |---------|-----------|
> | 0 | 23.8 mL |
> | 10 | 14.7 mL |
> | 20 | 9.1 mL |
>
> a = 23.8; (a−x) at t=10 → 14.7; at t=20 → 9.1
>
> K at t=10: K = (2.303/10) × log(23.8/14.7) = 0.2303 × 0.2093 = **0.04820 min⁻¹**
>
> K at t=20: K = (2.303/20) × log(23.8/9.1) = 0.10165 × 0.4171 = **0.04810 min⁻¹**
>
> K is nearly constant → **1st order reaction confirmed** ✓

### Proof: First Order Reaction is Never Finished
From `ln(c₀/c) = Kt` → when c→0, t→∞. **∴ theoretically never complete.**

---

## 6. Second Order Reaction

Minimum **2 molecules** required. Types:

### Type I: A + A → Products (equal initial conc.)
$$K = \frac{1}{t} \cdot \frac{x}{a(a-x)}$$

### Type II: A + B → Products (different initial conc. *a* and *b*)
$$K = \frac{2.303}{t(a-b)}\log\frac{b(a-x)}{a(b-x)}$$

- **Units of K:** L mol⁻¹ s⁻¹

> 📝 **Common Second Order Reactions:**
> - 2HI(g) → H₂(g) + I₂(g)
> - NO₂ + CO → NO + CO₂
> - Saponification of ester: CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH

> 📝 **Solved Problem (from your notes — Ethyl acetate hydrolysis):**
> a = 16.00 mL, using K = (1/t) · x / a(a−x)
>
> | t (min) | (a−x) | x | K |
> |---------|-------|---|---|
> | 5 | 10.24 | 5.76 | (1/5) × 5.76/(16×10.24) = **0.00700** |
> | 15 | 6.13 | 9.85 | (1/15) × 9.85/(16×6.13) = **0.00672** |
> | 25 | 4.32 | 11.68 | (1/25) × 11.68/(16×4.32) = **0.00675** |
>
> K fairly constant → **Second order confirmed** ✓

### When b >>> a (2nd order → 1st order):
When one reactant is in **large excess**, the equation reduces to 1st order → **pseudo-first order reaction**.

---

## 7. Third Order Reaction

For `3A → Products`:

$$K = \frac{1}{t} \cdot \frac{x(2a-x)}{2a^2(a-x)^2}$$

- **Units of K:** L² mol⁻² s⁻¹

> 📝 **Examples:**
> - 2FeCl₃(aq) + SnCl₂(aq) → 2FeCl₂ + SnCl₄
> - 2NO(g) + O₂(g) → 2NO₂(g) *(rate = K[NO]²[O₂])*
> - 2NO(g) + Cl₂(g) → 2NOCl(g)

---

## 8. Half-Life (t½)

> Time for concentration to fall to **half its initial value**.

### First Order:
$$t_{1/2} = \frac{0.693}{K}$$
- **Independent** of initial concentration.
- Inversely proportional to K.

### Second Order:
$$t_{1/2} = \frac{1}{Ka}$$
- **Inversely proportional** to initial concentration *a*.

> 📝 **Numerical (1st order):** K = 6.93 × 10⁻³ min⁻¹
> t½ = 0.693 / (6.93 × 10⁻³) = **100 min**

> 📝 **Numerical (find K from t½):** t½ = 30 min → K = 0.693/30 = **0.0231 min⁻¹**

> 📝 **Radioactive decay:** ¹⁴C has t½ = 5730 yr → K = 0.693/5730 = **1.21 × 10⁻⁴ yr⁻¹**

### Proof: t½ of 2nd order ∝ 1/a
From K = 1/t · x/a(a−x); at t=t½, x = a/2:
→ K·t½ = (a/2)/[a·(a/2)] = 1/a → **t½ = 1/Ka** ✓

---

## 9. Determination of Order of Reaction

### (a) Van't Hoff's Differential Method
For two concentrations c₁ and c₂:

$$n = \frac{\log(-dc_1/dt) - \log(-dc_2/dt)}{\log c_1 - \log c_2}$$

> 📝 **Example:** At c₁ = 0.4, rate₁ = 2×10⁻²; at c₂ = 0.2, rate₂ = 1×10⁻²
> n = (log 2×10⁻² − log 1×10⁻²) / (log 0.4 − log 0.2) = log2/log2 = **1** → First order

### (b) Half-Change Method (Equifractional Parts)
With different initial concentrations a₁, a₂:

$$n = 1 + \frac{\log(t_2/t_1)}{\log(a_1/a_2)}$$

> 📝 **Example:** a₁ = 1.0 M, t½ = 50 min; a₂ = 0.5 M, t½ = 100 min
> n = 1 + log(100/50)/log(1.0/0.5) = 1 + log2/log2 = **2** → Second order

---

## 10. Pseudo-Order Reaction

> When **experimental order ≠ actual order** because one reactant is in large excess (treated as constant).

> 📝 **Examples:**

1. **Hydrolysis of ester (Pseudo-1st order):**
   - CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH
   - Actual: rate = K[ester][H₂O] → 2nd order
   - H₂O in large excess → effective rate = K'[ester] → **Pseudo-1st order**

2. **Hydrolysis of sucrose:**
   - C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ + C₆H₁₂O₆
   - Same reasoning → **Pseudo-1st order**

3. **Acetyl chloride + water:**
   - CH₃COCl + H₂O → CH₃COOH + HCl → **Pseudo-1st order**

---

## 11. Activation Energy & Activated Complex

### Activation Energy (Eₐ)
> Minimum energy colliding molecules must possess for a **fruitful collision**. Denoted **Eₐ**.

- **Arrhenius Equation:** K = A·e^(−Eₐ/RT)

$$\log\frac{K_2}{K_1} = \frac{E_a}{2.303R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

> 📝 **Numerical:** Rate constant doubles from 300K to 310K. Find Eₐ.
> log(2) = Eₐ/(2.303 × 8.314) × (1/300 − 1/310)
> **Eₐ ≈ 52.9 kJ/mol**

### Activated Complex
> Unstable, short-lived, high-energy intermediate between reactants and products.

- AB + C → **[A---B---C]‡** → AC + B

### Energy Profile:
```
       Exothermic                    Endothermic
       
          ‡                               ‡
         /\                              /\
        /  \                            /  \
  Eₐ→ /    \                     Eₐ→ /    \
      /      \ ←ΔE              AB+C /      \
  AB+C        \                            AC+B
               AC+B (lower)           (higher, ΔE absorbed)
```

- **Exothermic:** products lower in energy, ΔE released (e.g., combustion)
- **Endothermic:** products higher in energy, ΔE absorbed (e.g., decomposition of CaCO₃)

---

## 12. Catalysis

> A **catalyst** alters the rate of reaction without being permanently changed in chemical properties or mass.

| Type | Name |
|------|------|
| Increases rate | Positive catalyst |
| Decreases rate | Negative catalyst |
| Product acts as catalyst | Autocatalysis |

> 📝 **Autocatalysis:** Oxidation of oxalic acid by KMnO₄ — Mn²⁺ produced acts as catalyst.
> **Negative catalyst:** Glycerol slows decomposition of H₂O₂.
> **Key mechanism:** Catalyst provides **alternative pathway with lower Eₐ**.

### Types of Catalysis:

#### 1. Homogeneous Catalysis
Catalyst and reactants in the **same phase**.

| Reaction | Catalyst | Note |
|----------|----------|------|
| 2SO₂ + O₂ → 2SO₃ | NO(g) | Lead Chamber process |
| CH₃COOC₂H₅ + H₂O → ... | H⁺(aq) or NaOH(aq) | Ester hydrolysis |
| Sucrose → glucose + fructose | HNO₃(aq) | Inversion of sugar |
| 2N₂O → 2N₂ + O₂ | Cl₂(g) | Gas phase |

#### 2. Heterogeneous Catalysis
Catalyst in a **different phase**. Reaction at the **interface**.

| Reaction | Catalyst | Process |
|----------|----------|---------|
| N₂ + 3H₂ → 2NH₃ | Fe(s) | Haber process |
| 2SO₂ + O₂ → 2SO₃ | V₂O₅ or Pt(s) | Contact process |
| Hydrogenation of oils | Ni or Pt(s) | Fat hardening |
| 2H₂O₂ → 2H₂O + O₂ | MnO₂(s) | Lab O₂ prep |
| 2KClO₃ → 2KCl + 3O₂ | MnO₂(s) | Lab O₂ prep |

#### 3. Enzyme Catalysis (Biological Catalysts)
Highly specific (lock-and-key model); work at mild conditions.

| Enzyme | Reaction |
|--------|----------|
| Zymase (yeast) | C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (fermentation) |
| Invertase | Sucrose → glucose + fructose |
| Amylase | Starch → maltose (saliva) |
| Pepsin | Proteins → peptides (stomach) |

---

## Quick Formula Summary

| Order | Rate Law | Integrated Eq. | K units | t½ |
|-------|----------|---------------|---------|-----|
| 0 | K | x = Kt | mol L⁻¹ s⁻¹ | a/2K |
| 1 | Kc | K = (2.303/t)log(a/a−x) | s⁻¹ | 0.693/K |
| 2 | Kc² | K = x/[t·a(a−x)] | L mol⁻¹ s⁻¹ | 1/Ka |
| 3 | Kc³ | K = x(2a−x)/[2ta²(a−x)²] | L² mol⁻² s⁻¹ | 3/2Ka² |

---

## Key Points to Remember

1. **Order** is experimental; **Molecularity** is theoretical.
2. First order reaction is **theoretically never complete** (t→∞ as c→0).
3. Half-life of **1st order is independent** of initial concentration; **2nd order ∝ 1/a**.
4. Pseudo-order arises when one reactant is in **large excess**.
5. A catalyst **lowers Eₐ**, increasing rate **without** shifting equilibrium position.
6. **Autocatalysis**: product of reaction acts as catalyst.
7. To confirm order: calculate K at multiple time points — if K is **constant**, that order is correct.
8. **Units of K change with order** — common MCQ trap.
