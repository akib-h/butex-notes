# 📘 10 — Acid-Base Catalysis

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. Introduction

**Acid-base catalysis** is a type of **homogeneous catalysis** in which the reaction is catalyzed by proton donors (acids) or proton acceptors (bases). It is one of the most important and widely occurring forms of catalysis in both chemistry and biochemistry.

---

## 2. Types of Acid-Base Catalysis

### 2.1 Specific Acid Catalysis (SAC)

**Definition:** The reaction is catalyzed **exclusively by H⁺ ions** (protons, or hydronium ions H₃O⁺), not by undissociated acid molecules.

$$\text{Rate} = k_H[\text{H}^+][\text{Substrate}]$$

- Rate depends on $[\text{H}^+]$ only
- Effective in buffered solutions where $[\text{H}^+]$ is controlled
- **Independent of buffer concentration** at constant pH

**Example:** Mutarotation of glucose:

$$\alpha\text{-glucose} \xrightarrow{\text{H}^+} \beta\text{-glucose}$$

Rate increases proportionally with $[\text{H}^+]$ only.

### 2.2 Specific Base Catalysis (SBC)

**Definition:** The reaction is catalyzed **exclusively by OH⁻ ions**.

$$\text{Rate} = k_{OH}[\text{OH}^-][\text{Substrate}]$$

**Example:** Aldol condensation:

$$2\text{CH}_3\text{CHO} \xrightarrow{\text{OH}^-} \text{CH}_3\text{CH(OH)CH}_2\text{CHO}$$

### 2.3 General Acid Catalysis (GAC)

**Definition:** The reaction is catalyzed by **all proton donors** present in solution — the conjugate acid of the buffer, undissociated acids, etc.

$$\text{Rate} = k_0 + k_H[\text{H}^+] + \sum_i k_{AH_i}[\text{AH}_i]$$

Where $\sum k_{AH_i}[\text{AH}_i]$ represents contributions from all acids $\text{AH}_i$.

**Example:** Decomposition of acetaldehyde hydrate; mutarotation in buffer solutions.

### 2.4 General Base Catalysis (GBC)

**Definition:** The reaction is catalyzed by **all proton acceptors** — OH⁻, buffer anions, etc.

$$\text{Rate} = k_0 + k_{OH}[\text{OH}^-] + \sum_i k_{B_i}[\text{B}_i]$$

**Example:** Bromination of acetone in buffer solutions.

---

## 3. Brønsted Catalysis Law

For **general acid catalysis**, the Brønsted relationship links the catalytic rate constant $k_A$ of an acid to its acid dissociation constant $K_A$:

$$\log k_A = \alpha \log K_A + C$$

$$\boxed{k_A = G_A \cdot K_A^{\alpha}}$$

For **general base catalysis**:

$$k_B = G_B \cdot K_B^{\beta}$$

Where:
| Symbol | Meaning |
|--------|---------|
| $\alpha$, $\beta$ | Brønsted exponents ($0 < \alpha < 1$, $0 < \beta < 1$) |
| $G_A$, $G_B$ | Constants for a given reaction |
| $K_A$, $K_B$ | Acid/base dissociation constants |

**Physical meaning:**
- $\alpha \approx 0$: Specific acid catalysis (only very strong acids catalyze)
- $\alpha \approx 1$: Proton transfer is the rate-determining step
- $0 < \alpha < 1$: General acid catalysis (transition state involves partial proton transfer)

---

## 4. Mechanism of Acid Catalysis

### 4.1 General Mechanism (Proton Transfer)

In acid catalysis, the acid **protonates** the substrate to form a reactive intermediate:

$$\text{S} + \text{H}^+ \rightarrow \text{SH}^+ \quad \text{(Protonation — fast, reversible)}$$
$$\text{SH}^+ \rightarrow \text{Products} + \text{H}^+ \quad \text{(Rate-determining step)}$$

The proton is **regenerated** in the second step, confirming the acid acts as a catalyst.

### 4.2 Mechanism of Acid-Catalyzed Ester Hydrolysis

$$\text{RCOOR'} + \text{H}_2\text{O} \xrightarrow{\text{H}^+} \text{RCOOH} + \text{R'OH}$$

**Step-by-step:**

1. Protonation of carbonyl oxygen:
$$\text{RCOOR'} + \text{H}^+ \rightleftharpoons \text{RC(OH}^+\text{)OR'}$$

2. Nucleophilic attack of water:
$$\text{RC(OH}^+\text{)OR'} + \text{H}_2\text{O} \rightarrow \text{RC(OH)(OH}_2^+\text{)(OR')}$$

3. Proton loss and C–O bond cleavage:
$$\rightarrow \text{RCOOH} + \text{R'OH} + \text{H}^+$$

Net: Ester hydrolyzed; H⁺ regenerated.

---

## 5. Mechanism of Base Catalysis

In base catalysis, the base **removes a proton** from the substrate:

$$\text{SH} + \text{B} \rightarrow \text{S}^- + \text{BH}^+ \quad \text{(Deprotonation)}$$
$$\text{S}^- \rightarrow \text{Products} \quad \text{(Rate-determining)}$$
$$\text{BH}^+ \rightarrow \text{B} + \text{H}^+ \quad \text{(Regeneration)}$$

### Base-Catalyzed Aldol Condensation (Example)

$$2\text{CH}_3\text{CHO} \xrightarrow{\text{OH}^-} \text{CH}_3\text{CH(OH)CH}_2\text{CHO}$$

Step 1: OH⁻ abstracts α-proton:
$$\text{CH}_3\text{CHO} + \text{OH}^- \rightarrow {}^-\text{CH}_2\text{CHO} + \text{H}_2\text{O}$$

Step 2: Carbanion attacks carbonyl:
$${}^-\text{CH}_2\text{CHO} + \text{CH}_3\text{CHO} \rightarrow \text{CH}_3\text{CH(O}^-\text{)CH}_2\text{CHO}$$

Step 3: Protonation:
$$\text{CH}_3\text{CH(O}^-\text{)CH}_2\text{CHO} + \text{H}_2\text{O} \rightarrow \text{CH}_3\text{CH(OH)CH}_2\text{CHO} + \text{OH}^-$$

OH⁻ regenerated → acts as catalyst.

---

## 6. Important Examples of Acid-Base Catalysis

| Reaction | Catalyst | Type |
|----------|----------|------|
| Hydrolysis of esters | H⁺ or OH⁻ | Specific acid or base |
| Hydrolysis of acetals | H⁺ | Specific acid |
| Mutarotation of glucose | H⁺ and OH⁻ | Both specific |
| Aldol condensation | OH⁻ | Base |
| Bromination of acetone | H⁺ and general acids | General acid |
| Keto-enol tautomerism | H⁺ or OH⁻ | Specific acid/base |
| Hydration of alkenes | H⁺ | Acid |
| Saponification of fats | OH⁻ | Base |
| Ring opening of epoxides | H⁺ | Acid |

---

## 7. Acid-Base Catalysis in Biochemistry

Many enzyme-catalyzed reactions use **amino acid residues** as acid-base catalysts:

| Amino Acid | Role | pKa |
|-----------|------|-----|
| Histidine (His) | General acid-base (most versatile) | ~6 |
| Aspartate (Asp) | Acid catalyst | ~3.9 |
| Glutamate (Glu) | Acid catalyst | ~4.1 |
| Lysine (Lys) | Acid catalyst | ~10.5 |
| Serine (Ser) | Nucleophile + base | ~13 |

**Example — Chymotrypsin:** Uses a **catalytic triad** of Ser-His-Asp for acid-base catalysis during peptide bond hydrolysis.

---

## 8. pH Dependence of Acid-Base Catalyzed Reactions

For a reaction showing both acid and base catalysis:

$$\text{Rate} = (k_0 + k_H[\text{H}^+] + k_{OH}[\text{OH}^-])[\text{Substrate}]$$

A **rate-pH profile** shows a characteristic shape:

```
log(Rate)
    |          *
    |        *   *
    |       *     *
    |      *       *
    |    *           *
    +--0--2--4--6--8--10--12---> pH
         acid       base
         region     region
```

- At **low pH**: acid catalysis dominates
- At **intermediate pH**: uncatalyzed (slowest)
- At **high pH**: base catalysis dominates
- **V-shape** or **U-shape** on log(rate) vs. pH plot

---

## 9. Comparison: Acid vs. Base Catalysis

| Feature | Acid Catalysis | Base Catalysis |
|---------|----------------|----------------|
| Catalyst | H⁺ (or proton donors) | OH⁻ (or proton acceptors) |
| Mechanism | Protonation of substrate | Deprotonation of substrate |
| Intermediate | Protonated species (cation) | Carbanion or anion |
| pH condition | Low pH (acidic) | High pH (basic) |
| Example | Ester hydrolysis | Aldol condensation |
| Industrial | Sulfonation, nitration | Soap making (saponification) |

---

## 10. References

| Resource | URL |
|----------|-----|
| LibreTexts — Acid-Base Catalysis | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Advanced_Statistical_Mechanics_(Tokmakoff)/07%3A_Kinetics/7.05%3A_Acid_Base_Catalysis |
| ChemGuide — Catalysis | https://www.chemguide.co.uk/physical/basicrates/catalyst.html |
| IUPAC — Brønsted Catalysis Law | https://goldbook.iupac.org/terms/view/B00740 |

---

[⬅️ Back: Catalysis](./09_Homogeneous_Heterogeneous_Catalysis.md) | [➡️ Next: Enzyme Catalysis](./11_Enzyme_Catalysis.md)
