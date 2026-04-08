# 📘 09 — Homogeneous and Heterogeneous Catalysis

> **Subject:** Chemistry-I | **Topic:** Chemical Kinetics  
> **Date:** April 07, 2025

---

## 1. Catalysis — Introduction

### Definition

**Catalysis** is the **acceleration of a chemical reaction** by a substance called a **catalyst**, which is neither consumed nor permanently altered in the reaction.

$$\text{Rate with catalyst} \gg \text{Rate without catalyst}$$

### Catalyst

A **catalyst** is a substance that:
- **Increases the rate** of a reaction
- Is **not consumed** (regenerated at the end)
- Does **not change** the thermodynamic equilibrium (same $K_{eq}$, same $\Delta G$, same $\Delta H$)
- Provides an **alternative reaction pathway** with **lower activation energy**

### Promoters and Inhibitors

| Term | Effect | Example |
|------|--------|---------|
| **Promoter** | Enhances activity of catalyst | Al₂O₃ for Fe in Haber process |
| **Inhibitor (poison)** | Reduces activity of catalyst | S, CO for Pt catalyst |

---

## 2. How a Catalyst Works

A catalyst provides an alternative reaction pathway with a **lower activation energy** $E_a'$:

```
Potential
Energy
    |         * ← TS (uncatalyzed), Ea
    |        * *
    |       *   *
    |      *  *  ← TS (catalyzed), Ea'
    |     * *  * *
    |    *        *
    | Reactants    Products  (same ΔH)
    +---------------------------------> Reaction Coordinate
```

**Key points:**
- $E_a' < E_a$ (catalyst lowers energy barrier)
- $\Delta H$ remains unchanged (catalyst does not change thermodynamics)
- $K_{eq}$ remains unchanged (both forward and reverse rates increased equally)
- Catalyst accelerates **both forward and reverse** reactions by the same factor

---

## 3. Types of Catalysis

| Type | Definition | Example |
|------|------------|---------|
| **Homogeneous** | Catalyst in same phase as reactants | NO(g) in SO₂ oxidation |
| **Heterogeneous** | Catalyst in different phase from reactants | Fe(s) in Haber process |
| **Enzymatic** | Biological catalyst (enzyme) | Amylase, pepsin |
| **Autocatalysis** | Product acts as catalyst | Permanganate oxidation of oxalic acid |

---

## 4. Homogeneous Catalysis

### Definition

In **homogeneous catalysis**, the catalyst and the reactants are in the **same phase** (both gaseous or both in solution).

$$\text{All species in one phase (gas or liquid)}$$

### Mechanism

The catalyst typically forms an **intermediate** with one of the reactants, and this intermediate then reacts to give the product and regenerate the catalyst:

$$A + \text{Cat} \rightarrow [\text{Intermediate}] \rightarrow B + \text{Cat}$$

### Examples

#### Example 1: Gas Phase — Oxidation of SO₂ (Lead Chamber Process)

$$2\text{SO}_2(g) + \text{O}_2(g) \xrightarrow{\text{NO}(g)} 2\text{SO}_3(g)$$

Mechanism:
$$2\text{NO}(g) + \text{O}_2(g) \rightarrow 2\text{NO}_2(g) \quad \text{(fast)}$$
$$\text{NO}_2(g) + \text{SO}_2(g) \rightarrow \text{SO}_3(g) + \text{NO}(g) \quad \text{(slow)}$$

NO is regenerated → acts as catalyst.

#### Example 2: Liquid Phase — Acid-catalyzed esterification

$$\text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH} \xrightarrow{\text{H}^+(\text{aq})} \text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O}$$

H⁺ (proton) is the homogeneous catalyst — it is in the same liquid phase.

#### Example 3: Iodine-catalyzed decomposition of chloroform

$$\text{CHCl}_3 + \text{Cl}_2 \xrightarrow{\text{I}_2} \text{CCl}_4 + \text{HCl}$$

#### Example 4: Decomposition of $\text{H}_2\text{O}_2$ by $\text{I}^-$ (Iodide ions)

$$2\text{H}_2\text{O}_2 \xrightarrow{\text{I}^-(\text{aq})} 2\text{H}_2\text{O} + \text{O}_2$$

Mechanism:
- Step 1: $\text{H}_2\text{O}_2 + \text{I}^- \rightarrow \text{IO}^- + \text{H}_2\text{O}$ (slow)
- Step 2: $\text{H}_2\text{O}_2 + \text{IO}^- \rightarrow \text{I}^- + \text{H}_2\text{O} + \text{O}_2$ (fast)

I⁻ is regenerated in step 2.

### Advantages of Homogeneous Catalysis

| Advantage | Explanation |
|-----------|-------------|
| High selectivity | Good contact between catalyst and reactants |
| Mild conditions | Often works at lower T and P |
| Mechanistic insight | Easier to study mechanism |

### Disadvantages

| Disadvantage | Explanation |
|-------------|-------------|
| Separation | Difficult to separate catalyst from products |
| Recycling | Often not recyclable |
| Corrosion | Liquid-phase acid/base catalysts can be corrosive |

---

## 5. Heterogeneous Catalysis

### Definition

In **heterogeneous catalysis**, the catalyst and reactants are in **different phases**. The catalyst is most commonly a **solid** and the reactants are gases or liquids.

$$\text{Solid catalyst + Gas or Liquid reactants}$$

### Mechanism — Adsorption Theory (Langmuir)

The mechanism involves **adsorption** of reactants onto the catalyst surface:

1. **Diffusion** — Reactant molecules diffuse to the catalyst surface
2. **Adsorption** — Reactant molecules adsorb on active sites of the surface
3. **Surface Reaction** — Adsorbed molecules react on the surface (bonds broken/formed)
4. **Desorption** — Products desorb from the surface
5. **Diffusion** — Products diffuse away from the surface

```
Step 1: Reactant diffuses to surface
        A(g) ──→ A(surface region)

Step 2: Adsorption onto active site
        A + [ ] ──→ [A] (chemisorption)

Step 3: Surface reaction
        [A] + [B] ──→ [AB] (or [A] ──→ [C])

Step 4: Desorption
        [C] ──→ C + [ ]

Step 5: Product diffuses away
        C(surface) ──→ C(bulk)
```

### Types of Adsorption

| Type | Binding | Reversibility | $\Delta H$ |
|------|---------|---------------|-----------|
| **Physisorption** | van der Waals forces | Reversible | Low (< 40 kJ/mol) |
| **Chemisorption** | Covalent/ionic bonds | Less reversible | High (40–400 kJ/mol) |

> Chemisorption is responsible for **catalytic activity** — it activates the reactant molecules by weakening their bonds.

### Examples of Heterogeneous Catalysis

| Reaction | Catalyst | Phase of catalyst | Phase of reactants |
|----------|----------|------------------|--------------------|
| Haber process: $\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3$ | Fe (+ Al₂O₃, K₂O) | Solid | Gas |
| Contact process: $2\text{SO}_2 + \text{O}_2 \rightarrow 2\text{SO}_3$ | V₂O₅ | Solid | Gas |
| Hydrogenation: $\text{C}_2\text{H}_4 + \text{H}_2 \rightarrow \text{C}_2\text{H}_6$ | Ni, Pt, Pd | Solid | Gas/Liquid |
| Catalytic converter: $2\text{CO} + 2\text{NO} \rightarrow 2\text{CO}_2 + \text{N}_2$ | Pt, Rh, Pd | Solid | Gas |
| Cracking of petroleum | Zeolites / Al₂O₃ | Solid | Gas/Liquid |
| Ostwald process: $4\text{NH}_3 + 5\text{O}_2 \rightarrow 4\text{NO} + 6\text{H}_2\text{O}$ | Pt-Rh gauze | Solid | Gas |

### Active Sites

Not all surface atoms are equally active. **Active sites** are specific locations on the surface (corners, edges, defects) where catalysis occurs. This is why:
- Higher surface area → more active sites → faster catalysis
- Nanoparticle catalysts are more effective than bulk material

### Advantages of Heterogeneous Catalysis

| Advantage | Explanation |
|-----------|-------------|
| Easy separation | Catalyst is solid; products are gas/liquid |
| Recyclable | Solid catalyst can be reused |
| High stability | Can withstand high temperatures |
| Industrial scale | Used in most industrial processes |

### Disadvantages

| Disadvantage | Explanation |
|-------------|-------------|
| Poisoning | Surface can be deactivated by impurities |
| Less selective | Multiple products possible |
| Diffusion limitations | Mass transfer can limit rate |

---

## 6. Comparison: Homogeneous vs. Heterogeneous Catalysis

| Feature | Homogeneous | Heterogeneous |
|---------|-------------|---------------|
| Phase of catalyst | Same as reactants | Different from reactants |
| Separation | Difficult | Easy |
| Recyclability | Poor | Good |
| Selectivity | High | Lower (generally) |
| Mechanistic study | Easier | Complex |
| Operating conditions | Mild | Often high T and P |
| Industrial use | Specialty chemicals | Bulk chemicals, petroleum |
| Examples | Wilkinson's catalyst, acid catalysis | Haber, Contact, catalytic converter |

---

## 7. References

| Resource | URL |
|----------|-----|
| LibreTexts — Heterogeneous Catalysis | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/06%3A_Modeling_Reaction_Kinetics/6.04%3A_Catalysis |
| ChemGuide — Heterogeneous Catalysis | https://www.chemguide.co.uk/physical/basicrates/catalyst.html |
| Khan Academy — Catalysis | https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics/x2eef969c74e0d802:catalysis/a/catalysis-article |

---

[⬅️ Back: Activation Energy](./08_Activation_Energy.md) | [➡️ Next: Acid-Base Catalysis](./10_Acid_Base_Catalysis.md)
