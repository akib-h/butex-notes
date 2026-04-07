# 📘 12 — Catalysis Retardation and Poisoning

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. Introduction

While catalysts are generally designed to speed up reactions, several phenomena can **reduce or completely eliminate catalytic activity**. Understanding these phenomena is critical for industrial chemistry and environmental science.

The key terms in this context are:

| Term | Meaning |
|------|---------|
| **Catalysis retardation** | Gradual decrease in catalytic activity over time |
| **Catalyst poisoning** | Specific chemical deactivation of catalyst active sites |
| **Promoter** | Substance that increases catalyst activity |
| **Inhibitor** | Substance that decreases catalyst activity |

---

## 2. Catalysis Retardation (Inhibition)

### Definition

**Catalysis retardation** (or **negative catalysis**) is the **decrease in the rate** of a reaction caused by certain substances that reduce or eliminate catalytic activity.

A **negative catalyst** (inhibitor) **slows down** a reaction, sometimes to an essential stop.

### Types of Retardation

#### 2.1 Chemical Inhibition
A substance chemically reacts with the catalyst or intermediate to reduce its effectiveness.

**Example:** Glycerol slows down the decomposition of H₂O₂:
$$2\text{H}_2\text{O}_2 \xrightarrow{\text{I}^-} 2\text{H}_2\text{O} + \text{O}_2$$
Addition of glycerol retards this reaction by complexing with the iodide catalyst.

#### 2.2 Physical Inhibition
An inhibitor physically blocks access to the catalyst surface without forming a strong chemical bond.

#### 2.3 Competitive Retardation
Inhibitor competes with the substrate for the catalyst's active site (common in enzyme inhibition).

### Examples of Negative Catalysis (Retardation)

| Reaction | Inhibitor | Effect |
|----------|-----------|--------|
| Oxidation of Na₂SO₃ by O₂ | Traces of alcohol | Slows oxidation significantly |
| Decomposition of H₂O₂ | Acetanilide, phosphoric acid | Stabilizes H₂O₂ |
| Fermentation of glucose | HgCl₂ | Inhibits enzyme activity |
| Chain reactions (combustion) | Tetraethyl lead (historical) | Prevents engine knocking |
| Corrosion of metals | Passivation agents | Slow down oxidation |
| Polymerization | Hydroquinone (inhibitor) | Prevents premature polymerization |

### Industrial Importance

Adding inhibitors to industrial chemicals:
- **Stabilizers** in H₂O₂, acrylic acid, styrene to prevent polymerization during storage
- **Antioxidants** in rubber, food, and plastics
- **Corrosion inhibitors** in metals and piping

---

## 3. Catalyst Poisoning

### Definition

**Catalyst poisoning** is the **strong, often irreversible adsorption** of a substance (poison) at the **active sites** of a catalyst, thereby permanently or semi-permanently destroying its catalytic activity.

Catalyst poisons are also called **antipromoters**.

### Mechanism of Poisoning

In heterogeneous catalysis:
1. The poison molecule has a **high affinity** for the catalyst's active sites
2. It adsorbs **strongly** (chemisorbs) at active sites
3. This **blocks** the surface from adsorbing reactant molecules
4. The catalyst loses its ability to accelerate the reaction

```
Normal catalyst surface:     Poisoned surface:

[ ] [ ] [ ] [ ]             [P] [P] [P] [P]
 ↑   ↑   ↑   ↑               ↑   ↑   ↑   ↑
S₁  S₂  S₃  S₄             Poison at all sites
(Active sites bind S)        (No room for S)
```

---

## 4. Types of Catalyst Poisons

### 4.1 For Metal Catalysts (Heterogeneous)

| Poison | Catalyst Affected | Reaction |
|--------|------------------|----------|
| Sulfur (S), H₂S | Ni, Fe, Pt, Pd, Rh | All hydrogenation reactions |
| CO | Fe | Haber process (NH₃ synthesis) |
| CO | Pt, Rh | Catalytic converters |
| Lead (Pb) | Pt, Rh | Catalytic converters |
| Arsenic (As) | Pt | Contact process (SO₃ synthesis) |
| Phosphorus (P) | Ni | Hydrogenation |
| Oxygen (O₂) | Fe | Some reduction reactions |
| Halogens | Various metals | Multiple industrial reactions |

### 4.2 For Enzyme Catalysts (Biological)

| Poison | Target Enzyme | Disease/Effect |
|--------|--------------|----------------|
| CN⁻ (cyanide) | Cytochrome oxidase | Blocks cellular respiration (lethal) |
| CO (carbon monoxide) | Hemoglobin (not enzyme) | Prevents O₂ binding |
| Hg²⁺, Pb²⁺, As³⁺ | Many enzymes (binds -SH groups) | Heavy metal poisoning |
| Organophosphates | Acetylcholinesterase | Nerve agent, insecticide |
| Aspirin | Cyclooxygenase (COX) | Anti-inflammatory (intentional) |
| Penicillin | Transpeptidase (bacterial) | Antibiotic mechanism |

---

## 5. Selective (Partial) Poisoning

Sometimes **controlled poisoning** is used beneficially — a **selective poison** deactivates unwanted active sites while leaving desired ones active.

**Example: Lindlar Catalyst**

Pd on CaCO₃, poisoned with lead acetate and quinoline:
$$\text{Alkyne} \xrightarrow{\text{Lindlar's catalyst}} \text{cis-Alkene (only)}$$

- Pt without poison: alkyne → alkane (over-reduction)
- Lindlar catalyst: alkyne → *cis*-alkene (selective partial reduction)

The poison **reduces the activity just enough** to stop at the alkene stage.

---

## 6. Catalyst Deactivation — Summary of Mechanisms

| Mechanism | Description | Reversible? |
|-----------|-------------|-------------|
| **Poisoning** | Strong chemisorption of impurities on active sites | Sometimes |
| **Fouling / Coking** | Carbon deposition on surface blocks pores | Yes (by regeneration) |
| **Sintering** | Loss of surface area due to high-temperature agglomeration | No |
| **Leaching** | Active metal dissolves into liquid phase | No |
| **Attrition** | Mechanical breakdown of catalyst particles | No |
| **Thermal degradation** | Structural changes at high T | Sometimes |

### Fouling (Coking)
Carbon deposits (coke) form on the catalyst surface, blocking active sites. Common in:
- Petroleum cracking (zeolite catalysts)
- Steam reforming (Ni catalysts)

**Regeneration:** Catalysts deactivated by coking can often be regenerated by **burning off the carbon** at high temperature in air.

---

## 7. Promoters (Contrast to Poisons)

A **promoter** is a substance that, although **not a catalyst itself**, **enhances the activity** of a catalyst when added in small amounts.

| Reaction | Catalyst | Promoter | Effect |
|----------|----------|----------|--------|
| Haber process: N₂ + H₂ → NH₃ | Fe | Al₂O₃, K₂O | Increases surface area and electron density |
| Fischer-Tropsch: CO + H₂ → hydrocarbons | Fe or Co | K₂O, ThO₂ | Enhances activity and selectivity |
| Contact process: SO₂ → SO₃ | V₂O₅ | K₂SO₄ | Stabilizes V⁵⁺ state |

### How Promoters Work

1. **Structural promoters:** Prevent sintering by separating catalyst crystallites → maintain high surface area
   - Example: Al₂O₃ in Haber's Fe catalyst
2. **Electronic promoters:** Modify the electronic properties of the catalyst
   - Example: K₂O donates electrons to Fe, increasing N₂ adsorption
3. **Chemical promoters:** React with poisons to prevent them from reaching the active site

---

## 8. Industrial Case Studies

### 8.1 Poisoning of Catalytic Converters in Cars

The catalytic converter uses **Pt, Pd, Rh** to convert:
$$2\text{CO} + 2\text{NO} \rightarrow 2\text{CO}_2 + \text{N}_2$$
$$2\text{C}_x\text{H}_y + (2x + y/2)\text{O}_2 \rightarrow 2x\text{CO}_2 + y\text{H}_2\text{O}$$

**Poison:** Lead (Pb) from leaded gasoline permanently poisons Pt/Rh → reason for ban on leaded gasoline.

### 8.2 Haber Process Poisoning

Iron catalyst for NH₃ synthesis is poisoned by:
- Sulfur compounds
- Oxygen
- CO (carbon monoxide)

This is why **strict gas purification** is required before the synthesis gas enters the reactor.

### 8.3 Food Industry — Hydrogenation

Partial hydrogenation of vegetable oils using Ni catalysts:
$$\text{Unsaturated fat} + \text{H}_2 \xrightarrow{\text{Ni}} \text{Partially saturated fat}$$

Sulfur impurities in the oil poison the Ni catalyst → feedstock purification is critical.

---

## 9. Comparison: Promoters, Poisons, Inhibitors

| Feature | **Promoter** | **Catalyst Poison** | **Inhibitor** |
|---------|-------------|---------------------|---------------|
| Effect on rate | Increases | Decreases/Destroys | Decreases |
| Reversibility | May be permanent | Often irreversible | Often reversible |
| Mechanism | Structural/electronic enhancement | Blocks active sites | Competitive/allosteric |
| Amount needed | Trace amounts | Trace amounts | Variable |
| Example | K₂O for Fe in Haber | Pb for Pt converter | Glycerol for I⁻/H₂O₂ |

---

## 10. References

| Resource | URL |
|----------|-----|
| LibreTexts — Catalyst Deactivation | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/06%3A_Modeling_Reaction_Kinetics/6.04%3A_Catalysis |
| ChemGuide — Catalysts and Poisoning | https://www.chemguide.co.uk/physical/basicrates/catalyst.html |
| Somorjai & Li — "Introduction to Surface Chemistry and Catalysis" | Standard textbook reference |
| NIST Chemistry WebBook | https://webbook.nist.gov/ |

---

[⬅️ Back: Enzyme Catalysis](./11_Enzyme_Catalysis.md) | [⬆️ Back to Index](./README.md)
