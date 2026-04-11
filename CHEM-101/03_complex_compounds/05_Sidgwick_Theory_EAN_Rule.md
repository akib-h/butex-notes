# 05 — Sidgwick Theory & EAN Rule (Electronic Theory of Complexes)

> **Last Updated:** April 10, 2025
> **Reference:** Hand notes (Sayim, 2023) | Wikipedia | Chemistry Explained
> **Exam Years Mentioned in Notes:** 2018, 2019

---

## 1. Sidgwick Theory (Electronic Theory of Complexes)

### Background

**Nevil Vincent Sidgwick** (1873–1952), a British chemist, proposed the electronic theory of complexes in **1927** to explain the formation and stability of coordination compounds. His theory is based on the concept of **electron pair donation** from ligands to the metal.

---

### Statement of Sidgwick Theory

> **"The central atom will continue accepting electron pairs from the ligand until the total number of electrons of the metal equals that of the nearest higher noble gas."**

This concept is also known as the **Effective Atomic Number (EAN) rule** or the **18-electron rule** in its modern formulation.

---

## 2. Key Concept: Lone Pair Donation

In forming a complex:
- Ligands are **Lewis bases** — they donate lone pairs of electrons.
- The metal ion is a **Lewis acid** — it accepts electron pairs.
- The bond formed is a **coordinate (dative) covalent bond**.

```
Ligand:  NH₃  →  donates 1 lone pair (2 electrons)
                 ↓
              Co³⁺ (central metal)
                 ↑
accepts electron pair → forms Co–N bond
```

For a complex like `[Co(NH₃)₆]³⁺`:
- Co³⁺ accepts **6 lone pairs** (one from each NH₃)
- Each NH₃ donates **2 electrons**
- Total electrons gained = 6 × 2 = 12

---

## 3. Effective Atomic Number (EAN)

### Definition

> The **Effective Atomic Number (EAN)** is the **total number of electrons** possessed by the central metal atom after accepting electrons from all the ligands in the complex.

EAN was proposed by Sidgwick as a criterion for the **stability** of complexes.

### Formula

$$\text{EAN} = Z - C + L$$

Where:
| Symbol | Meaning |
|--------|---------|
| Z | Atomic number of the central metal |
| C | Charge on the metal (electrons **lost** = oxidation state) |
| L | Electrons **gained** from all ligands = (number of ligands) × (electrons donated per ligand) |

For **monodentate ligands**, each donates **2 electrons**, so:

$$L = \text{(number of ligands)} \times 2$$

---

### Stability Criterion

> A complex is **stable** if its EAN equals the atomic number of the **next higher noble gas** (the nearest noble gas with a higher atomic number than the metal).

| Noble Gas | Atomic Number |
|-----------|--------------|
| He | 2 |
| Ne | 10 |
| Ar | 18 |
| **Kr** | **36** ← most important for transition metals |
| **Xe** | **54** ← for 4d metals |
| Rn | 86 |

---

## 4. Worked Examples

### Example 1: `[Fe(NH₃)₆]²⁺` (from notes, 2019)

```
Metal: Fe²⁺
Z (Fe) = 26
Charge on metal: C = +2 (Fe²⁺ lost 2 electrons)
Ligands: 6 × NH₃, each donates 2e⁻ → L = 6 × 2 = 12

EAN = Z - C + L
EAN = 26 - 2 + 12
EAN = 36 = Kr's atomic number

∴ EAN = 36 = Kr (Z = 36)
→ Stable ✓
```

---

### Example 2: `[Fe(CN)₆]³⁻` (from notes, 2018)

```
Metal: Fe³⁺
Z (Fe) = 26
Charge: C = +3 (lost 3 electrons)
Ligands: 6 × CN⁻, each donates 2e⁻ → L = 6 × 2 = 12

EAN = 26 - 3 + 12
EAN = 35

35 ≠ 36 (Kr)
∴ EAN ≠ noble gas atomic number → NOT stable by EAN rule
```

> Note: `[Fe(CN)₆]³⁻` is actually kinetically stable in practice due to strong CN⁻ field — showing a limitation of the EAN rule.

---

### Example 3: `[Rh(NH₃)₆]³⁺` (from notes, 2018)

```
Metal: Rh³⁺
Z (Rh) = 45
Charge: C = +3
Ligands: 6 × NH₃ → L = 6 × 2 = 12

EAN = 45 - 3 + 12
EAN = 54 = Xe's atomic number (Z = 54)

∴ EAN = Xe → Stable ✓
```

---

### Example 4: `[Co(NH₃)₆]Cl₃` — Stability by EAN (2019 exam question)

```
[Co(NH₃)₆]³⁺

Metal: Co³⁺ (Z = 27)
Charge: C = +3
Ligands: 6 × NH₃ → L = 6 × 2 = 12
Also: Co³⁺ lost 3 electrons, so C = 3

EAN = 27 - 3 + 12
EAN = 36 = Kr's atomic number

→ Stable ✓ (matches Kr, Z = 36)
```

---

### Example 5: `K₄[Fe(CN)₆]` — Stability (2018 exam question)

```
[Fe(CN)₆]⁴⁻

Metal: Fe²⁺ (charge from compound: K₄ gives 4+, complex is 4−, so Fe = 2+)
Z (Fe) = 26
Charge: C = +2 (electron lost = 2)
  But wait — in [Fe(CN)₆]⁴⁻:
  Fe must balance 6 × CN⁻ (each −1) = −6
  Total complex charge = −4
  So Fe charge = −4 − (−6) = +2

EAN = 26 - 2 + 12
    = 36 = Kr

→ Stable ✓
```

---

### Example 6: Exceptional Case — `Mn₂(CO)₁₀`

```
This is a metal-metal bonded compound.
Each Mn(CO)₅ unit is considered half, with Mn = 0 (no charge).

Mn(CO)₅ fragment:
Z (Mn) = 25
Charge: C = 0
Ligands: 5 × CO → L = 5 × 2 = 10
Metal–metal bond provides: 1 extra electron per Mn

EAN = 25 - 0 + 10 + 1
    = 36 = Kr

→ Stable ✓ (by including M–M bond electron)
```

---

## 5. EAN and the 18-Electron Rule

The EAN rule for transition metals is equivalent to the **18-electron rule**:

> When EAN = 36 (Kr), the metal has an electron configuration equivalent to:
> `[Ar] 3d¹⁰ 4s² 4p⁶` → 10 + 2 + 6 = 18 electrons in the outermost shells

This is also called the **noble gas rule** or **18e⁻ rule** in organometallic chemistry.

```
Example: Ferrocene [Fe(C₅H₅)₂]
Fe (Z=26) + 2 × Cp⁻ (each donates 6e⁻)
EAN = 26 - 2 + 12 = 36 (but actually ferrocene uses a different counting)
Modern counting: Fe(0) = 8e⁻, each Cp⁻ = 6e⁻ → 8 + 12 = 20? 
→ Use ionic counting: Fe²⁺ (6e⁻) + 2 Cp⁻ (each 6e⁻) = 6 + 12 = 18 ✓
```

---

## 6. Applications of Sidgwick Theory / EAN Rule

1. **Predicts stability** of metal complexes (if EAN = noble gas Z → stable).
2. **Gives the concept of EAN** itself as a property.
3. Explains why certain coordination numbers are preferred for specific metals.
4. Foundation for the modern **18-electron rule** in organometallic chemistry.

---

## 7. Limitations of Sidgwick Theory / EAN Rule

| # | Limitation |
|---|-----------|
| 1 | Many stable complexes do **not** satisfy the EAN rule (e.g., `[Fe(CN)₆]³⁻`, EAN = 35) |
| 2 | Gives **no information** about the **geometric shape** of the complex |
| 3 | **No indication** of **magnetic properties** (paramagnetic vs diamagnetic) |
| 4 | **No indication** of the **colour** of the compound |
| 5 | Does not explain why specific coordination numbers are adopted |
| 6 | Fails for many d⁰ and d¹⁰ complexes |

---

## 8. Summary Table of EAN Calculations

| Complex | Z | Charge (C) | L (electrons from ligands) | EAN | Noble Gas | Stable? |
|---------|---|------------|----------------------------|-----|-----------|---------|
| [Fe(NH₃)₆]²⁺ | 26 | 2 | 12 | **36** | Kr | ✓ |
| [Fe(CN)₆]⁴⁻ | 26 | 2 | 12 | **36** | Kr | ✓ |
| [Fe(CN)₆]³⁻ | 26 | 3 | 12 | **35** | — | ✗ |
| [Co(NH₃)₆]³⁺ | 27 | 3 | 12 | **36** | Kr | ✓ |
| [Rh(NH₃)₆]³⁺ | 45 | 3 | 12 | **54** | Xe | ✓ |
| [Co(CO)₄]⁻ | 27 | -1 | 8 | **36** | Kr | ✓ |

---

## Practice Questions

1. Calculate the EAN of `[Ni(CO)₄]` (Z of Ni = 28, charge = 0, 4 CO ligands).
2. Is `[Cr(CO)₆]` stable by EAN rule? (Z of Cr = 24).
3. Explain why `[Mn(CO)₅]` alone is not as stable as `Mn₂(CO)₁₀`.
4. Calculate EAN for `[Cu(NH₃)₄]²⁺` (Z of Cu = 29) and comment on stability.

---

## 📖 Further Reading

- [Wikipedia — Effective Atomic Number (chemistry)](https://en.wikipedia.org/wiki/Effective_atomic_number_(chemistry))
- [Wikipedia — 18-electron rule](https://en.wikipedia.org/wiki/18-electron_rule)
- [Chemistry Explained — Coordination Compounds (EAN)](https://www.chemistryexplained.com/Co-Di/Coordination-Compounds.html)

---

*← [04 Factors Affecting](./04_Factors_Affecting_Complex_Compounds.md) | Next → [06 Werner's Theory](./06_Werners_Theory.md)*
