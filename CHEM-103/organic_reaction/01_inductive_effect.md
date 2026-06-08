---
subject: CHEM-101
topic: Organic Reactions and their Mechanisms
subtopic: Inductive Effect
module: 11
date: 2026-06-06
tags: [notes, CHEM-101, organic-chemistry, inductive-effect, electronic-effects, acidity, basicity]
---

# ⚗️ 1. Inductive Effect

**[🔗 Module README](README.md)** | **[🔗 Next → Electromeric Effect](02_electromeric_effect.md)**

---

## 1. Definition

> **The Inductive Effect** is the permanent, partial displacement (polarisation) of electron density along a chain of σ (sigma) bonds, caused by the difference in electronegativity between atoms bonded together in a molecule.

The effect was first systematically described by **Christopher Ingold** (1930s) as part of his theory of electronic displacements in organic molecules. It is denoted by the symbol **I**.

Key characteristics:
1. It operates through σ bonds only (not π bonds — that is the mesomeric effect).
2. It is a **permanent** effect present in the ground state of the molecule, observable as a dipole moment.
3. Its magnitude **decreases rapidly with distance** — typically negligible beyond the 3rd carbon from the substituent.
4. It is a **relative** effect: all substituent effects are measured relative to hydrogen (H) as the standard of zero inductive effect.

---

## 2. Physical Basis

When two atoms of **different electronegativities** are bonded covalently, the more electronegative atom pulls the shared electron pair toward itself:

```
    δ+       δ-
    C ———→ Cl
         (electron displacement)
```

This creates a **dipole** along the bond. This partial charge on carbon then induces a smaller displacement in the next bond, and so on — like a chain reaction that weakens with each step:

```
      δδδ+   δδ+    δ+   δ-
  H₃C ——— CH₂ ——— CH₂ ——— Cl
      ←←←←←←←←←←←←←←← (electron pull direction)
```

The induced polarity at each successive carbon becomes progressively smaller:

$$
|\delta_{C_1}| > |\delta_{C_2}| > |\delta_{C_3}| \approx 0
$$

---

## 3. Types of Inductive Effect

### 3.1 Negative Inductive Effect (−I Effect) — Electron Withdrawal

Groups that are **more electronegative than hydrogen** withdraw electron density from the carbon chain. This is denoted **−I** (or **−I effect**).

#### Common −I groups (in decreasing order of strength):

$$
\text{−NR}_3^+ > \text{−NO}_2 > \text{−CN} > \text{−SO}_3\text{H} > \text{−CHO} > \text{−COOH} > \text{−F} > \text{−Cl} > \text{−Br} > \text{−I} > \text{−OH} > \text{−OR} > \text{−NH}_2
$$

> 💡 **Note on halogens**: The −I order follows electronegativity: **F > Cl > Br > I**. Even though iodine is weakly electronegative, it still has a small −I effect.

#### Effect on molecule:
```
      δ+   δ-
  CH₃ ——— F
      ←←← (electrons pulled toward F)
```
The carbon bearing the −I group becomes electron-deficient (δ+).

---

### 3.2 Positive Inductive Effect (+I Effect) — Electron Donation

Groups that are **less electronegative than hydrogen**, or that donate electron density into the σ-bond framework, are said to have a **+I effect**.

#### Common +I groups (in increasing order of strength):

$$
\text{H} < \text{−CH}_3 < \text{−C}_2\text{H}_5 < \text{−(CH}_3)_2\text{CH} < \text{−(CH}_3)_3\text{C}
$$

Also: **−O⁻**, **−COO⁻**, **−NH⁻** (negatively charged groups have strong +I effects)

#### Why do alkyl groups have +I effect?
- The C−H bonds in alkyl groups allow **slight electron donation** into adjacent σ-bonds via **hyperconjugation** (σ-bond hyperconjugation / Baker-Nathan effect).
- Alkyl groups are therefore net electron-donating compared to H.
- The +I effect increases with the number of alkyl substituents: **tertiary > secondary > primary > methyl**

#### Effect on molecule:
```
      δ-    δ+
  CH₃ ——— C(central)
      →→→ (electrons donated)
```

---

## 4. Comparison: +I vs −I

| Feature | +I Effect | −I Effect |
|:--------|:----------|:----------|
| Electron flow | Away from substituent, toward chain | Toward substituent, away from chain |
| Carbon bearing group | Electron-enriched (δ−) | Electron-deficient (δ+) |
| Common groups | Alkyl, −O⁻, −COO⁻ | Halogens, −NO₂, −CN, −COOH, −OH |
| Effect on acidity | **Decreases** acid strength | **Increases** acid strength |
| Effect on basicity | **Increases** base strength | **Decreases** base strength |
| Effect on carbocations | **Stabilises** (disperses +ve charge) | Destabilises |
| Effect on carbanions | Destabilises | **Stabilises** (disperses −ve charge) |

---

## 5. Distance Dependence of the Inductive Effect

The inductive effect falls off **exponentially** with the number of intervening bonds. Consider the pKₐ values of aminobutyric acids with the amino group at different positions:

| Acid | Position of NH₂ | pKₐ |
|:-----|:----------------|:----|
| 4-Aminobutyric acid | Position 4 (4 bonds away) | 4.23 |
| 3-Aminopropionic acid | Position 3 (3 bonds away) | 3.60 |
| 2-Aminoacetic acid (Glycine) | Position 2 (2 bonds away) | 2.35 |

> As the −NH₃⁺ group (−I effect) moves closer to the COOH group, the pKₐ decreases (stronger acid). By position 4, the effect is already very weak.

A rough empirical rule: **each additional carbon reduces the inductive effect by ~60–70%**.

---

## 6. Mathematical Examples and Calculations

### 6.1 Effect on Acidity of Carboxylic Acids

The **−I effect** stabilises the carboxylate anion (COO⁻) formed when an acid loses H⁺. A more stable conjugate base means a **stronger acid** (lower pKₐ).

**Data: pKₐ values of haloacetic acids**

| Acid | Formula | pKₐ at 25°C | Relative Acidity |
|:-----|:--------|:------------|:-----------------|
| Acetic acid | CH₃COOH | 4.74 | Reference |
| Fluoroacetic acid | FCH₂COOH | 2.59 | ~14× stronger |
| Chloroacetic acid | ClCH₂COOH | 2.86 | ~8× stronger |
| Bromoacetic acid | BrCH₂COOH | 2.90 | ~7× stronger |
| Iodoacetic acid | ICH₂COOH | 3.18 | ~4× stronger |
| Dichloroacetic acid | Cl₂CHCOOH | 1.48 | ~182× stronger |
| Trichloroacetic acid | Cl₃CCOOH | 0.66 | ~1200× stronger |

**Interpretation**:
- Each Cl added progressively increases acidity (lower pKₐ) because each additional −I substituent further stabilises COO⁻.
- F has the strongest −I effect per atom (highest electronegativity), so fluoroacetic acid is stronger than chloroacetic acid despite having only one fluorine.
- The cumulative effect of three Cl atoms makes trichloroacetic acid almost as strong as mineral acids (pKₐ ≈ 0.66).

**Calculation of relative acidity using ΔpKₐ:**

$$
\Delta\text{pK}_a = \text{pK}_a(\text{CH}_3\text{COOH}) - \text{pK}_a(\text{ClCH}_2\text{COOH}) = 4.74 - 2.86 = 1.88
$$

$$
\text{Ratio} = 10^{\Delta\text{pK}_a} = 10^{1.88} \approx 75.9
$$

This means chloroacetic acid is about **76 times stronger** than acetic acid.

---

### 6.2 Effect on Basicity of Amines

The **+I effect** of alkyl groups increases electron density on nitrogen → nitrogen donates its lone pair more readily → **stronger base** (higher pKb / lower pKa of conjugate acid).

| Amine | Formula | pKₐ of conjugate acid (RNH₃⁺) | Base Strength |
|:------|:--------|:-------------------------------|:--------------|
| Ammonia | NH₃ | 9.25 | Weakest |
| Methylamine | CH₃NH₂ | 10.64 | Stronger |
| Dimethylamine | (CH₃)₂NH | 10.73 | Strongest (gas phase) |
| Trimethylamine | (CH₃)₃N | 9.76 | Slightly weaker (steric & solvation) |
| Aniline (PhNH₂) | C₆H₅NH₂ | 4.63 | Very weak (−M effect of ring) |

> In gas phase, the order is strictly: (CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃  
> In aqueous solution, solvation effects modify the order for trimethylamine.

---

### 6.3 Stability of Carbocations

Alkyl groups have a +I effect → they donate electron density to the electron-deficient C⁺ → **stabilise** the carbocation.

$$
\text{Stability:} \quad \underbrace{(CH_3)_3C^+}_{\text{3° (most stable)}} > \underbrace{(CH_3)_2CH^+}_{\text{2°}} > \underbrace{CH_3CH_2^+}_{\text{1°}} > \underbrace{CH_3^+}_{\text{methyl (least stable)}}
$$

---

## 7. Visual Summary: Inductive Effect in Chloroacetic Acid

```mermaid
graph LR
    A["Cl\n(δ−, high electronegativity)"] -->|"−I effect\npulls σ electrons"| B["CH₂\n(δ+)"]
    B -->|"weakened pull"| C["C=O / COOH\n(more δ+)"]
    C -->|"easier release"| D["H⁺ liberated\n(higher acidity)"]
    D --> E["COO⁻ stabilised\nby dispersed charge"]

    style A fill:#c0392b,color:#fff
    style B fill:#e67e22,color:#fff
    style E fill:#27ae60,color:#fff
```

**Charge distribution in acetic acid vs. chloroacetic acid:**

```
    CH₃ — C(=O) — OH          Cl — CH₂ — C(=O) — OH
     +I→         ←              −I→      ←
  Less stable COO⁻          More stable COO⁻
  weaker acid (pKa 4.74)    stronger acid (pKa 2.86)
```

---

## 8. Applications of the Inductive Effect

1. **Predicting acid strength of carboxylic acids**: −I substituents increase acidity; +I substituents decrease acidity.
2. **Predicting base strength of amines**: +I alkyl groups increase basicity; −I groups decrease basicity.
3. **Directing electrophilic aromatic substitution (EAS)**: +I alkyl groups activate the benzene ring toward EAS and direct to ortho/para positions.
4. **Explaining relative stability of carbocations**: +I groups stabilise carbocations (fundamental to SN1 and E1 reactions).
5. **Explaining relative stability of carbanions**: −I groups stabilise carbanions (relevant to acidity of C−H bonds).
6. **Hammett Equation**: The quantitative treatment of substituent effects on reaction rates and equilibria uses the Hammett σ constant, which incorporates inductive contributions:

$$
\log\frac{K}{K_0} = \sigma \cdot \rho
$$

Where $\sigma$ = substituent constant (electronic), $\rho$ = reaction constant (sensitivity).

---

## 9. Key Points Summary

1. The inductive effect is a **permanent** polarisation along σ bonds due to electronegativity differences.
2. **−I groups** (halogens, NO₂, CN, COOH, OH) withdraw electrons → increase acidity, decrease basicity.
3. **+I groups** (alkyl groups, O⁻) donate electrons → decrease acidity, increase basicity.
4. The effect **decreases with distance** — negligible beyond 3rd carbon.
5. The −I order of halogens: **F > Cl > Br > I** (follows electronegativity).
6. The +I order of alkyl groups: **(CH₃)₃C > (CH₃)₂CH > CH₃CH₂ > CH₃** (more substituted = stronger +I).
7. The inductive effect is separate from, and often opposed by, the mesomeric effect.

---

## 10. Practice Problems

1. Arrange the following acids in decreasing order of acidity and explain: CH₃COOH, CF₃COOH, CCl₃COOH, CBr₃COOH.
2. Explain why 2-chlorobutanoic acid is stronger than 3-chlorobutanoic acid, which is stronger than 4-chlorobutanoic acid.
3. Why is trimethylammonium ion a weaker acid than ammonium ion?
4. Using the inductive effect, predict which compound is more stable: CH₃CH₂⁺ or (CH₃)₃C⁺.
5. Calculate the approximate relative acidity of dichloroacetic acid (pKₐ = 1.48) compared to acetic acid (pKₐ = 4.74).

> **Answers hint for Q5**: $10^{(4.74-1.48)} = 10^{3.26} \approx 1820$ — dichloroacetic acid is ~1820× stronger.

---

## 11. References & Further Reading

1. **Clayden, Greeves, Warren** — *Organic Chemistry*, Ch. 5 — Conjugation, delocalization, and inductive effects
2. **LibreTexts** — Inductive Effects — [chem.libretexts.org](https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(OpenStax)/07:_Alkyl_Halides)
3. **ChemGuide** — Electronegativity and polarity — [chemguide.co.uk/atoms/bonding/electroneg.html](https://www.chemguide.co.uk/atoms/bonding/electroneg.html)
4. **Brilliant.org** — Inductive Effect — [brilliant.org/wiki/inductive-effect](https://brilliant.org/wiki/inductive-effect-electromeric-efffect-resonance/)
5. **IUPAC Gold Book** — Inductive effect definition — [goldbook.iupac.org/terms/view/I03021](https://goldbook.iupac.org/terms/view/I03021)
6. **Khan Academy** — Acid-base equilibria — [khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:acids-and-bases](https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:acids-and-bases)

---

| ← Previous | Module | Next → |
|:-----------|:-------|:-------|
| *(Start of module)* | [📋 README](README.md) | [02 Electromeric Effect →](02_electromeric_effect.md) |

> 📖 *Part of [BUTEX Notes](https://github.com/itachi-re/butex-notes) — CHEM-101 Module 11: Organic Reactions*
