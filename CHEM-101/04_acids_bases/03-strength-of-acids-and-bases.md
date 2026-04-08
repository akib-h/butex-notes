# 💪 Topic 3: Strength of Acids and Bases

> **Course:** Chemistry — Acids and Bases Unit  
> **Team:** x86  
> **Date:** April 05, 2026  
> **Reference Level:** University / Undergraduate

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Acid Strength — Ka and pKa](#acid-strength--ka-and-pka)
3. [Base Strength — Kb and pKb](#base-strength--kb-and-pkb)
4. [Strong Acids and Bases](#strong-acids-and-strong-bases)
5. [Weak Acids and Bases](#weak-acids-and-weak-bases)
6. [Relationship: Ka, Kb, and Kw](#relationship-ka-kb-and-kw)
7. [pH and pOH Calculations](#ph-and-poh-calculations)
8. [Factors Affecting Acid Strength](#factors-affecting-acid-strength)
9. [Common pKa Values](#common-pka-values-table)
10. [Superacids and Superbases](#superacids-and-superbases)
11. [Practice Problems](#practice-problems)
12. [References](#references)

---

## Introduction

The **strength** of an acid or base refers to its tendency to donate or accept protons (in the Brønsted-Lowry sense) or electrons (in the Lewis sense) in solution. This is distinct from **concentration** — a strong acid can be dilute, and a concentrated acid can still be weak.

| Property | Determined by |
|----------|--------------|
| **Strength** | Degree of ionisation (intrinsic property) |
| **Concentration** | Amount dissolved per volume (independent of strength) |

> 📌 **Common misconception:** "Concentrated" does not mean "strong." Concentrated acetic acid (glacial acetic acid) is still a **weak acid**, while very dilute HCl is still a **strong acid**.

---

## Acid Strength — Ka and pKa

When a weak acid HA dissolves in water, it partially ionises:

```
HA  +  H₂O  ⇌  H₃O⁺  +  A⁻
```

The **acid dissociation constant (Ka)** quantifies this equilibrium:

$$K_a = \frac{[\text{H}_3\text{O}^+][\text{A}^-]}{[\text{HA}]}$$

- **Large Ka** → stronger acid (more ionised)
- **Small Ka** → weaker acid (less ionised)

The **pKa** is defined as:

$$\text{pK}_a = -\log_{10}(K_a)$$

- **Lower pKa** → stronger acid
- **Higher pKa** → weaker acid

### pKa Scale (Relative Acid Strength)

```
Stronger acid
     ↑
     │  pKa < 0    → Very strong acids (complete ionisation, e.g., HCl, HNO₃)
     │  pKa 0–2    → Strong–moderate acids
     │  pKa 2–7    → Moderately weak acids (e.g., CH₃COOH, pKa = 4.75)
     │  pKa 7–14   → Weak acids (e.g., H₂CO₃, NH₄⁺)
     │  pKa > 14   → Very weak acids (e.g., H₂O, NH₃, hydrocarbons)
     ↓
Weaker acid
```

---

## Base Strength — Kb and pKb

When a weak base B dissolves in water:

```
B  +  H₂O  ⇌  BH⁺  +  OH⁻
```

The **base dissociation constant (Kb)**:

$$K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}$$

$$\text{pK}_b = -\log_{10}(K_b)$$

- **Large Kb, small pKb** → stronger base
- **Small Kb, large pKb** → weaker base

---

## Strong Acids and Strong Bases

### Strong Acids

Strong acids **dissociate completely** in water — essentially 100% ionisation:

```
HA  →  H⁺  +  A⁻    (→ one-way arrow, essentially complete)
```

**The 7 Common Strong Acids:**

| Acid | Formula | Notes |
|------|---------|-------|
| Hydrochloric acid | HCl | pKa ≈ −7 |
| Hydrobromic acid | HBr | pKa ≈ −9 |
| Hydroiodic acid | HI | pKa ≈ −10 |
| Nitric acid | HNO₃ | pKa ≈ −1.4 |
| Perchloric acid | HClO₄ | pKa ≈ −10 (strongest of common acids) |
| Sulfuric acid (1st ionisation) | H₂SO₄ | pKa₁ ≈ −3; pKa₂ = +1.99 |
| Chloric acid | HClO₃ | pKa ≈ −1 |

> 📌 For strong acids at concentration C: `[H⁺] = C` (direct relationship)

### Strong Bases

Strong bases **dissociate completely** in water:

```
MOH  →  M⁺  +  OH⁻    (complete dissociation)
```

**Common Strong Bases:**

| Base | Formula | Notes |
|------|---------|-------|
| Lithium hydroxide | LiOH | Slightly limited solubility |
| Sodium hydroxide | NaOH | Most common laboratory strong base |
| Potassium hydroxide | KOH | |
| Rubidium hydroxide | RbOH | |
| Cesium hydroxide | CsOH | |
| Barium hydroxide | Ba(OH)₂ | Diprotic base |
| Calcium hydroxide | Ca(OH)₂ | Sparingly soluble but fully ionised |

> 📌 For strong bases at concentration C: `[OH⁻] = C` (or 2C for diprotic)

---

## Weak Acids and Weak Bases

### Weak Acids

Weak acids **partially ionise** in water (typically < 5% at typical concentrations):

```
HA  ⇌  H⁺  +  A⁻     Ka << 1
```

### Calculating [H⁺] for a Weak Acid

For weak acid HA at concentration C:

```
         Ka = x² / (C − x)
```

Where x = [H⁺] = [A⁻]

**If Ka << C (less than ~5% ionisation):**

$$x = [\text{H}^+] = \sqrt{K_a \cdot C}$$

$$\text{pH} = \frac{1}{2}(\text{pK}_a - \log C)$$

**Worked Example:**

Calculate pH of 0.10 M acetic acid (Ka = 1.8 × 10⁻⁵):

```
x = √(1.8 × 10⁻⁵ × 0.10) = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ M

Check: (1.34 × 10⁻³ / 0.10) × 100% = 1.34%  → valid (< 5%)

pH = −log(1.34 × 10⁻³) = 2.87
```

### Weak Bases

```
B  +  H₂O  ⇌  BH⁺  +  OH⁻     Kb << 1
```

**Worked Example:**

Calculate pH of 0.10 M ammonia (Kb = 1.8 × 10⁻⁵):

```
x = [OH⁻] = √(Kb × C) = √(1.8 × 10⁻⁵ × 0.10) = 1.34 × 10⁻³ M

pOH = −log(1.34 × 10⁻³) = 2.87
pH = 14 − pOH = 14 − 2.87 = 11.13
```

---

## Relationship: Ka, Kb, and Kw

For a conjugate acid-base pair:

$$K_a \times K_b = K_w = 1.0 \times 10^{-14} \text{ (at 25°C)}$$

$$\text{pK}_a + \text{pK}_b = \text{pK}_w = 14 \text{ (at 25°C)}$$

This means:

- **Stronger the acid → weaker its conjugate base**
- **Stronger the base → weaker its conjugate acid**

**Example:**

```
CH₃COOH:  Ka = 1.8 × 10⁻⁵  →  pKa = 4.74
CH₃COO⁻:  Kb = Kw/Ka = 1.0×10⁻¹⁴ / 1.8×10⁻⁵ = 5.6 × 10⁻¹⁰  →  pKb = 9.25

Check: pKa + pKb = 4.74 + 9.25 ≈ 14 ✓
```

### Ka–Kb–Kw Relationship Table

| Acid | Ka | pKa | Conjugate Base | Kb | pKb |
|------|----|-----|---------------|----|-----|
| HCl | ~10⁷ | ~−7 | Cl⁻ | ~10⁻²¹ | ~21 |
| H₂SO₄ | ~10³ | ~−3 | HSO₄⁻ | ~10⁻¹⁷ | ~17 |
| HF | 6.8×10⁻⁴ | 3.17 | F⁻ | 1.5×10⁻¹¹ | 10.83 |
| CH₃COOH | 1.8×10⁻⁵ | 4.74 | CH₃COO⁻ | 5.6×10⁻¹⁰ | 9.25 |
| H₂CO₃ | 4.3×10⁻⁷ | 6.37 | HCO₃⁻ | 2.3×10⁻⁸ | 7.63 |
| NH₄⁺ | 5.6×10⁻¹⁰ | 9.25 | NH₃ | 1.8×10⁻⁵ | 4.74 |
| HCN | 6.2×10⁻¹⁰ | 9.21 | CN⁻ | 1.6×10⁻⁵ | 4.79 |
| H₂O | 1.0×10⁻¹⁶ | 16 | OH⁻ | 1.0 (strong) | ~0 |

---

## pH and pOH Calculations

The pH scale measures the acidity of a solution:

$$\text{pH} = -\log_{10}[\text{H}^+]$$

$$\text{pOH} = -\log_{10}[\text{OH}^-]$$

$$\text{pH} + \text{pOH} = 14 \text{ (at 25°C)}$$

```
pH scale:
0 ─────────────────────────────────────────────────────── 14
Most acidic        Neutral (pH=7)                Most basic
[H⁺] = 1M         [H⁺] = 10⁻⁷M               [OH⁻] = 1M
```

### pH Calculations Summary

| System | Formula |
|--------|---------|
| Strong acid (conc. C) | pH = −log(C) |
| Strong base (conc. C) | pOH = −log(C), pH = 14 − pOH |
| Weak acid (conc. C, Ka) | pH = ½(pKa − log C) |
| Weak base (conc. C, Kb) | pOH = ½(pKb − log C), pH = 14 − pOH |
| Buffer (Henderson-Hasselbalch) | pH = pKa + log([A⁻]/[HA]) |

### Henderson-Hasselbalch Equation

For a buffer solution containing a weak acid HA and its conjugate base A⁻:

$$\text{pH} = \text{pK}_a + \log\left(\frac{[\text{A}^-]}{[\text{HA}]}\right)$$

**Example:** Calculate pH of a buffer with 0.10 M CH₃COOH and 0.15 M CH₃COO⁻ (pKa = 4.74):

```
pH = 4.74 + log(0.15/0.10)
pH = 4.74 + log(1.5)
pH = 4.74 + 0.176 = 4.92
```

---

## Factors Affecting Acid Strength

(See also Topic 6 for structural effects in detail)

### 1. Bond Polarity and Bond Strength

The H–A bond must be polarised (H⁺ character) and not too strong for the acid to donate H⁺ easily.

For binary acids HX (across period 2):

```
H₂O < HF  (both period 2, but HF is more acidic due to greater electronegativity of F)
```

For binary acids HX (down group 7):

```
HF << HCl << HBr << HI
(acidity increases down group despite decreasing electronegativity — bond length and strength dominate)
```

### 2. Electronegativity of Central Atom

More electronegative central atoms stabilise the conjugate base → **stronger acid**:

```
CH₄ < NH₃ < H₂O < HF    (acidity increases left to right across period 2)
pKa: ~50    ~38    ~15.7    3.17
```

### 3. Resonance Stabilisation of Conjugate Base

If the conjugate base is stabilised by resonance → weaker base → stronger acid:

```
CH₃CH₂OH vs CH₃COOH
   pKa 16      pKa 4.74

Acetate ion (CH₃COO⁻) is stabilised by resonance over two O atoms → CH₃COOH is much stronger acid
```

### 4. Inductive Effect

Electronegative substituents withdraw electrons from the conjugate base → stabilise it → increase acidity:

```
Acetic acid:          pKa = 4.74
Chloroacetic acid:    pKa = 2.86  (Cl withdraws electrons)
Dichloroacetic acid:  pKa = 1.48
Trichloroacetic acid: pKa = 0.64
```

### 5. Hybridisation

More s-character in the orbital holding the lone pair → more tightly held → more electronegative:

```
sp³ C–H (alkane): pKa ~50  (least acidic)
sp² C–H (alkene): pKa ~44
sp  C–H (alkyne): pKa ~25  (most acidic, most s-character)
```

### 6. Charge Effect

For polyprotic acids, successive Ka values decrease:

```
H₂SO₄:  pKa₁ ≈ −3    (strong)
HSO₄⁻:  pKa₂ = 1.99  (weak)
```

It is harder to remove a proton from a **negatively charged** species.

---

## Common pKa Values Table

| Compound | pKa | Strength |
|----------|-----|---------|
| HClO₄ (perchloric) | ≈ −10 | Very strong |
| HI | ≈ −10 | Very strong |
| HBr | ≈ −9 | Very strong |
| HCl | ≈ −7 | Strong |
| H₂SO₄ | ≈ −3 | Strong |
| HNO₃ | ≈ −1.4 | Strong |
| HClO₃ | ≈ −1 | Strong |
| CCl₃COOH | 0.64 | Moderately strong |
| CHCl₂COOH | 1.48 | Moderate |
| H₂SO₃ | 1.81 | Moderate |
| HF | 3.17 | Weak |
| HNO₂ | 3.37 | Weak |
| CH₂ClCOOH | 2.86 | Weak |
| HCOOH | 3.75 | Weak |
| CH₃COOH | 4.74 | Weak |
| H₂CO₃ | 6.37 | Weak |
| H₂S | 7.00 | Weak |
| H₂PO₄⁻ | 7.20 | Weak |
| HCN | 9.21 | Very weak |
| NH₄⁺ | 9.25 | Very weak |
| HCO₃⁻ | 10.33 | Very weak |
| H₂O₂ | 11.65 | Very weak |
| H₂O | 15.74 | Extremely weak |
| NH₃ | 38 | Essentially non-acid |
| CH₄ | ~50 | Essentially non-acid |

---

## Levelling Effect

In a given solvent, **all strong acids appear equally strong** because they are completely levelled by the solvent.

In water:
- HCl, HBr, HI, HNO₃, HClO₄ all appear equally "strong"
- To differentiate their intrinsic strengths, a weaker base solvent must be used (e.g., glacial acetic acid)

In glacial acetic acid:

```
HClO₄ > HBr > H₂SO₄ > HCl > HNO₃
```

This is because acetic acid is a weaker proton acceptor than water, so the solvent does not completely "level" the acids.

---

## Superacids and Superbases

### Superacids

**Superacids** are acids stronger than 100% sulfuric acid (H₀ < −12 for H₂SO₄).

| Superacid | H₀ (Hammett) | Notes |
|-----------|-------------|-------|
| Fluoroantimonic acid (HF·SbF₅) | −28 | Strongest known superacid |
| Magic acid (HSO₃F·SbF₅) | −23 | Named by Olah |
| Trifluoromethanesulfonic acid (CF₃SO₃H) | −14 | Common in lab |
| 100% H₂SO₄ | −12 | Reference |

> The term **superacid** was coined by James Bryant Conant in 1927.

### Superbases

Superbases are stronger than sodium hydroxide:

- **Butyllithium (n-BuLi)** — pKa conjugate acid ~50
- **Sodium amide (NaNH₂)** — very strong
- **Lithium diisopropylamide (LDA)** — widely used in organic synthesis

---

## Practice Problems

**Problem 1:** Calculate the pH of 0.050 M HNO₃.

```
HNO₃ is a strong acid → [H⁺] = 0.050 M
pH = −log(0.050) = 1.30
```

---

**Problem 2:** Calculate the pH of 0.025 M Ba(OH)₂.

```
Ba(OH)₂ → Ba²⁺ + 2OH⁻   (strong base, complete dissociation)
[OH⁻] = 2 × 0.025 = 0.050 M
pOH = −log(0.050) = 1.30
pH = 14.00 − 1.30 = 12.70
```

---

**Problem 3:** What is the pH of 0.20 M formic acid (HCOOH, Ka = 1.77 × 10⁻⁴)?

```
HCOOH ⇌ H⁺ + HCOO⁻    Ka = x²/(0.20 − x)

x = √(Ka × C) = √(1.77 × 10⁻⁴ × 0.20)
  = √(3.54 × 10⁻⁵)
  = 5.95 × 10⁻³ M

% ionisation = 5.95 × 10⁻³ / 0.20 × 100% = 2.97% → valid (<5%)

pH = −log(5.95 × 10⁻³) = 2.23
```

---

**Problem 4:** The Ka of acetic acid is 1.8 × 10⁻⁵. Find the Kb of acetate ion (CH₃COO⁻).

```
Kb = Kw / Ka = 1.0 × 10⁻¹⁴ / 1.8 × 10⁻⁵ = 5.56 × 10⁻¹⁰

pKb = −log(5.56 × 10⁻¹⁰) = 9.25

Note: pKa + pKb = 4.74 + 9.25 ≈ 14 ✓
```

---

**Problem 5:** Arrange in order of increasing acid strength: HF, HCl, HBr, HI

```
HF < HCl < HBr < HI

Reason: Going down Group 17, bond length increases → bond becomes weaker
→ easier to break → acid is stronger.
Electronegativity decreases but bond strength effect dominates.
```

---

## References

1. **LibreTexts — Acid-Base Equilibria:**  
   https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_General_Chemistry_(Petrucci_et_al.)/16:_Acids_and_Bases

2. **LibreTexts — Inorganic: Brønsted and Lewis Acids:**  
   https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Introduction_to_Inorganic_Chemistry_(Wikibook)/03:_Acid-Base_Chemistry

3. **Pearson, R.G. (1968):** "Hard and Soft Acids and Bases, HSAB," J. Chem. Educ., 45, 581–643.

4. **Atkins, P. & de Paula, J. (2010):** *Physical Chemistry*, 9th Ed. W.H. Freeman.

5. **Zumdahl, S.S. (2013):** *Chemistry: An Atoms-First Approach*. Brooks Cole.

6. **OpenStax Chemistry 2e — Acids and Bases:**  
   https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases

---

*📅 Last Updated: April 05, 2026 | Team x86*
