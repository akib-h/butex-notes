# 05 — Osmosis and Osmotic Pressure

> **Course:** Physical Chemistry — Dilute Solutions
> **Topic Area:** Colligative Properties
> **Last Updated:** April 10, 2026
> **Reference Notes:** Mahir, IPE-50 Hand Notes

---

## Table of Contents

1. [Osmosis — Definition and Phenomenon](#1-osmosis--definition-and-phenomenon)
2. [Semi-Permeable Membrane (SPM)](#2-semi-permeable-membrane-spm)
3. [Osmotic Pressure — Definition](#3-osmotic-pressure--definition)
4. [Van't Hoff's Laws of Osmotic Pressure](#4-vant-hoffs-laws-of-osmotic-pressure)
5. [Mathematical Derivation — Van't Hoff Equation](#5-mathematical-derivation--vant-hoff-equation)
6. [Osmotic Pressure as a Colligative Property](#6-osmotic-pressure-as-a-colligative-property)
7. [Types of Solutions: Isotonic, Hypertonic, Hypotonic](#7-types-of-solutions-isotonic-hypertonic-hypotonic)
8. [Reverse Osmosis](#8-reverse-osmosis)
9. [Determination of Molecular Mass from Osmotic Pressure](#9-determination-of-molecular-mass-from-osmotic-pressure)
10. [Experimental Determination (Berkeley-Hartley Method)](#10-experimental-determination-berkeley-hartley-method)
11. [Osmosis vs Diffusion — Key Differences](#11-osmosis-vs-diffusion--key-differences)
12. [Biological and Industrial Significance](#12-biological-and-industrial-significance)
13. [Worked Examples](#13-worked-examples)
14. [Online References](#14-online-references)

---

## 1. Osmosis — Definition and Phenomenon

**Osmosis** is defined as:

> **The spontaneous flow of solvent molecules through a semi-permeable membrane from a region of lower solute concentration (higher solvent concentration / lower osmotic pressure) to a region of higher solute concentration (lower solvent concentration / higher osmotic pressure).**

In simpler terms: pure solvent (or dilute solution) passes into a more concentrated solution through a SPM.

### Visualisation

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Pure Water          │SPM│       Sugar Solution        │
│   (or dilute soln)    │   │       (concentrated)        │
│                       │   │                             │
│   High [solvent]      │→→→│       Low [solvent]         │
│   Low [solute]        │   │       High [solute]         │
│                       │   │                             │
│                       │   │   ↑ Level rises             │
└─────────────────────────────────────────────────────────┘

SPM = Semi-Permeable Membrane
→→→ = Net flow of water (osmosis)
```

The solution side rises in level because water is flowing into it. The **hydrostatic pressure** of the rising column eventually opposes further osmosis.

### Why Osmosis Occurs — Thermodynamic Explanation

The **chemical potential** of the solvent in a solution is lower than in pure solvent:

$$\mu_{\text{solvent in solution}} = \mu_{\text{pure solvent}}^* + RT \ln x_1 < \mu_{\text{pure solvent}}^*$$

Solvent molecules spontaneously flow from higher to lower chemical potential — i.e., from pure solvent to solution — just as water flows downhill. This is the thermodynamic driving force of osmosis.

---

## 2. Semi-Permeable Membrane (SPM)

A **semi-permeable membrane** is a membrane that allows the passage of small molecules (typically solvent, e.g., water) but blocks larger molecules (solute, e.g., sugar, proteins).

### Natural SPMs:
- Cell membranes (phospholipid bilayer)
- Parchment paper (treated)
- Pig's bladder (used historically by Pfeffer in 1877)
- Egg membrane

### Artificial/Synthetic SPMs:
- **Copper ferrocyanide** [Cu₂Fe(CN)₆] deposited in a porous pot — most commonly used in lab.
- Cellulose acetate membranes
- Reverse osmosis membranes (polyamide)
- Zeolite membranes (inorganic, for industrial gas separation)

### Properties of a Good SPM:
- Mechanically strong
- Insoluble in solvent
- Highly selective (allows only solvent through)
- Chemically inert

---

## 3. Osmotic Pressure — Definition

**Osmotic pressure** ($\pi$) is defined as:

> **The minimum external pressure that must be applied on the solution side of a semi-permeable membrane to prevent the flow of solvent from pure solvent into the solution (i.e., to just stop osmosis).**

Equivalently, it equals the **excess hydrostatic pressure** the solution develops (above the pure solvent) when osmosis is allowed to proceed until equilibrium.

$$\boxed{\pi = h \rho g}$$

Where:
- $h$ = equilibrium height difference of liquid columns
- $\rho$ = density of solution
- $g$ = acceleration due to gravity

Osmotic pressure is a **colligative property** because it depends on the number of solute particles, not their identity.

---

## 4. Van't Hoff's Laws of Osmotic Pressure

In 1887, **Jacobus Henricus van't Hoff** (Nobel Prize in Chemistry, 1901) proposed three laws for osmotic pressure, by analogy with ideal gas laws:

### First Law (Boyle-van't Hoff Law)
> **"At constant temperature, the osmotic pressure of a dilute solution is directly proportional to its concentration."**

$$\pi \propto C \quad \text{(at constant T)}$$

$$\pi \propto \frac{n}{V} \quad \Rightarrow \quad \pi V = \text{constant}$$

*(Analogous to Boyle's Law: $PV$ = constant)*

### Second Law (Charles-van't Hoff Law)
> **"At constant concentration, the osmotic pressure of a dilute solution is directly proportional to its absolute temperature."**

$$\pi \propto T \quad \text{(at constant C)}$$

$$\frac{\pi}{T} = \text{constant}$$

*(Analogous to Charles's Law: $V/T$ = constant)*

### Third Law (Avogadro-van't Hoff Law)
> **"Solutions having the same osmotic pressure at the same temperature contain the same number of solute particles per unit volume."**

In other words: **equal osmotic pressure at equal temperature implies equal molar concentration** (regardless of the chemical nature of the solute).

This is the definition of **isotonic solutions** and mirrors Avogadro's hypothesis for gases.

---

## 5. Mathematical Derivation — Van't Hoff Equation

### Combining the Three Laws

Combining the first and second laws:

$$\pi \propto C \cdot T$$

$$\pi = k' \cdot C \cdot T = k' \cdot \frac{n}{V} \cdot T$$

$$\pi V = k' n T$$

**Van't Hoff showed that $k'$ has the same numerical value as the universal gas constant $R$:**

$$k' = R = 8.314 \text{ J mol}^{-1}\text{K}^{-1}$$

Therefore:

$$\boxed{\pi V = nRT}$$

Or equivalently:

$$\boxed{\pi = CRT = \frac{n}{V} RT}$$

Where:
- $\pi$ = osmotic pressure (Pa or atm)
- $V$ = volume of solution (L or m³)
- $n$ = moles of solute
- $R$ = gas constant = 8.314 J mol⁻¹ K⁻¹ = 0.0821 L·atm·mol⁻¹·K⁻¹
- $T$ = absolute temperature (K)
- $C$ = molar concentration (mol/L or mol/m³)

> **Note:** This equation is formally identical to the **ideal gas equation** ($PV = nRT$). Van't Hoff's insight was that dissolved solute molecules behave (in a thermodynamic sense) like gas molecules occupying the volume of solution.

### With Van't Hoff Factor (for electrolytes):

$$\boxed{\pi = i \cdot CRT}$$

---

## 6. Osmotic Pressure as a Colligative Property

Osmotic pressure is the **most sensitive** of the four colligative properties, making it especially useful for:

- **Very dilute solutions** (e.g., biological macromolecules at low concentrations)
- **High molecular weight compounds** (proteins, polymers) — where VP lowering and ΔTb are immeasurably small, osmotic pressure is still significant.

**Comparison of sensitivity:**

For a 1% (w/v) solution of a polymer with M = 100,000 g/mol:

| Property | Predicted Change |
|----------|-----------------|
| VP lowering | ~0.0001 mmHg ← barely measurable |
| BP elevation | ~0.0001°C ← barely measurable |
| FP depression | ~0.0002°C ← barely measurable |
| **Osmotic pressure** | **~2.5 mmHg ← easily measurable** |

This is why osmotic pressure is the preferred method for **polymer molecular mass determination**.

---

## 7. Types of Solutions: Isotonic, Hypertonic, Hypotonic

These terms compare the osmotic pressure of a solution **relative to another** (or relative to cell fluid):

### Isotonic Solutions
- **Same osmotic pressure** as the reference solution (e.g., blood plasma, ~7.6 atm at 37°C, corresponding to ≈ 0.9% NaCl or ≈ 5% glucose)
- No net osmosis across the membrane
- Cells maintain their shape and size
- **Example:** Normal saline (0.9% NaCl), 5% glucose in IV drips

### Hypertonic Solutions
- **Higher osmotic pressure** than the reference
- Water flows **out** of the cell (into the solution)
- Cells **shrink** (plasmolysis in plants, crenation in blood cells)
- **Example:** Seawater vs. freshwater fish cells — marine fish must constantly drink water

### Hypotonic Solutions
- **Lower osmotic pressure** than the reference
- Water flows **into** the cell
- Cells **swell and may burst** (haemolysis in blood cells, cytolysis in plants)
- **Example:** Pure water vs. blood cells — blood cells placed in pure water will burst

```
         Hypotonic            Isotonic          Hypertonic
         (cell swells)      (no net flow)       (cell shrinks)
         
      ┌───────┐            ┌───────┐            ┌───────┐
      │  ●●●  │            │  ●●●  │            │  ●●●  │
      │ Water→│ →→→        │       │            │→Water │ ←←←
      │  cell │            │  cell │            │  cell │
      └───────┘            └───────┘            └───────┘
```

---

## 8. Reverse Osmosis

If external pressure **greater than** the osmotic pressure is applied on the solution side, the flow of solvent is **reversed** — solvent molecules are forced from the concentrated solution to the pure solvent side.

$$P_{\text{applied}} > \pi \Rightarrow \text{Reverse Osmosis (RO)}$$

### Applications of Reverse Osmosis:
1. **Desalination of seawater** — producing drinking water from the sea (major freshwater source in arid regions)
2. **Purification of drinking water** — removal of bacteria, viruses, heavy metals
3. **Wastewater treatment** — industrial effluent purification
4. **Food industry** — concentrating fruit juices without heat

> Typical seawater osmotic pressure ≈ 25 atm. RO plants operate at 54–80 atm.

---

## 9. Determination of Molecular Mass from Osmotic Pressure

From $\pi V = nRT$ and $n = \dfrac{w_2}{M_2}$:

$$\pi V = \frac{w_2}{M_2} RT$$

Solving for $M_2$:

$$\boxed{M_2 = \frac{w_2 RT}{\pi V}}$$

Where:
- $w_2$ = mass of solute dissolved (g)
- $R$ = 0.0821 L·atm·mol⁻¹·K⁻¹ (if $\pi$ in atm and $V$ in litres)
- $T$ = absolute temperature (K)
- $\pi$ = measured osmotic pressure (atm)
- $V$ = volume of solution (L)

This is the **most accurate** method for determining molar masses of **high-molecular-weight** substances like proteins, synthetic polymers, and colloids.

---

## 10. Experimental Determination (Berkeley-Hartley Method)

### Principle
Apply external pressure to the solution to exactly balance and prevent osmosis. The applied pressure equals the osmotic pressure.

### Apparatus
- A **porous pot** coated with copper ferrocyanide (SPM)
- The pot is submerged in pure solvent
- A piston applies pressure to the solution inside

### Procedure
1. Fill inner tube with solution; outer vessel with pure solvent.
2. Gradually increase the pressure on the solution side using a piston.
3. When the solvent level on both sides remains constant (no net osmosis), the applied pressure = osmotic pressure $\pi$.
4. Read $\pi$ from the pressure gauge.

### Advantage over Simple Osmometer
- Measures pressure **directly** rather than inferring it from height of risen column.
- Faster equilibrium.
- More accurate for high $\pi$ values.

---

## 11. Osmosis vs Diffusion — Key Differences

| Feature | Osmosis | Diffusion |
|---------|---------|-----------|
| Particles moved | Solvent only | Any molecule (solvent or solute) |
| Membrane required | Yes (semi-permeable) | No |
| Direction | Low → high solute conc. | High → low conc. (any species) |
| Driving force | Chemical potential of solvent | Concentration gradient |
| Net movement stops when | Osmotic equilibrium (pressures balance) | Concentrations equalise |
| Can be reversed | Yes (reverse osmosis with pressure) | Not easily |

---

## 12. Biological and Industrial Significance

### Biological

| Phenomenon | Role of Osmosis |
|-----------|----------------|
| Water absorption by plant roots | Osmosis from soil water into root cells |
| Turgor pressure in plants | Osmotic entry of water keeps cells rigid |
| Kidney function (water reabsorption) | Osmotic gradient in kidney tubules |
| Digestion | Osmotic water flow in intestines |
| Nerve impulse transmission | Osmotic balance of Na⁺/K⁺ ions |
| Preservation (salting fish/meat) | Hypertonic salt draws water out by osmosis |

### Medical

- **IV fluids** must be isotonic (~0.9% NaCl) to avoid cell damage.
- **Peritoneal dialysis** uses osmotic principles to remove waste from blood.
- **Eye drops** must be isotonic with tear fluid.

### Industrial

| Industry | Application |
|----------|-------------|
| Water treatment | Reverse osmosis for desalination |
| Food processing | Osmotic dehydration of fruits/vegetables |
| Pharmaceuticals | Drug delivery through osmotic pumps |
| Dairy | Concentrating milk by osmosis |

---

## 13. Worked Examples

### Example 1 — Basic Osmotic Pressure

**Q:** 1.8 g of glucose (M = 180 g/mol) is dissolved in water to make 100 mL of solution at 27°C. Calculate the osmotic pressure.

**Solution:**

$$T = 27 + 273 = 300 \text{ K}$$

$$n = \frac{1.8}{180} = 0.01 \text{ mol}, \quad V = 0.1 \text{ L}$$

$$\pi = \frac{nRT}{V} = \frac{0.01 \times 0.0821 \times 300}{0.1} = \frac{0.2463}{0.1} = \boxed{2.463 \text{ atm}}$$

---

### Example 2 — Molecular Mass from Osmotic Pressure

**Q:** 0.5 g of a polymer is dissolved in 200 mL of water at 27°C. The osmotic pressure is found to be 0.0102 atm. Find the molar mass of the polymer.

**Solution:**

$$M_2 = \frac{w_2 RT}{\pi V} = \frac{0.5 \times 0.0821 \times 300}{0.0102 \times 0.200}$$

$$= \frac{12.315}{0.00204} = \boxed{6036 \text{ g/mol}}$$

---

### Example 3 — Isotonic Comparison

**Q:** A glucose solution and a NaCl solution are isotonic at 25°C. If the glucose (M = 180) concentration is 18 g/L, what is the concentration of NaCl (M = 58.5, i = 2)?

**Solution:**

Osmotic pressure of glucose solution:
$$C_{\text{glucose}} = \frac{18}{180} = 0.1 \text{ mol/L}$$
$$\pi_{\text{glucose}} = 0.1 \times 0.0821 \times 298 = 2.45 \text{ atm}$$

For NaCl (isotonic means same $\pi$):
$$\pi_{\text{NaCl}} = i \cdot C_{\text{NaCl}} \cdot RT = 2 \times C_{\text{NaCl}} \times 0.0821 \times 298 = 2.45$$

$$C_{\text{NaCl}} = \frac{2.45}{2 \times 24.46} = 0.05 \text{ mol/L}$$

$$\text{Mass concentration} = 0.05 \times 58.5 = \boxed{2.925 \text{ g/L}}$$

---

### Example 4 — Comparing All Four Colligative Properties

**Q:** For 0.1 mol/kg glucose in water at 25°C, calculate all four colligative properties.
Data: $P^0$ = 23.8 mmHg, $K_b$ = 0.512, $K_f$ = 1.86 K·kg·mol⁻¹, $R$ = 0.0821 L·atm/mol·K, assume density ≈ 1 g/mL.

**Solution:**

**(a) VP Lowering:**
$N_{\text{water}} ≈ 55.5$ mol, $n = 0.1$ mol
$$x_2 = \frac{0.1}{55.5 + 0.1} = 1.80 \times 10^{-3}$$
$$\Delta P = x_2 \times P^0 = 1.80 \times 10^{-3} \times 23.8 = \boxed{0.043 \text{ mmHg}}$$

**(b) BP Elevation:**
$$\Delta T_b = 0.512 \times 0.1 = \boxed{0.0512°C}$$

**(c) FP Depression:**
$$\Delta T_f = 1.86 \times 0.1 = \boxed{0.186°C}$$

**(d) Osmotic Pressure:**
$$C \approx 0.1 \text{ mol/L (dilute)}$$
$$\pi = 0.1 \times 0.0821 \times 298 = \boxed{2.45 \text{ atm}} = 1861 \text{ mmHg}$$

**Comparison:**

| Property | Value |
|----------|-------|
| VP Lowering | 0.043 mmHg |
| BP Elevation | 0.051°C |
| FP Depression | 0.186°C |
| **Osmotic Pressure** | **2.45 atm = 1861 mmHg** |

Osmotic pressure is by far the **most sensitive and measurable** colligative property!

---

## 14. Online References

1. **Wikipedia — Osmosis:**
   [https://en.wikipedia.org/wiki/Osmosis](https://en.wikipedia.org/wiki/Osmosis)

2. **Wikipedia — Osmotic Pressure:**
   [https://en.wikipedia.org/wiki/Osmotic_pressure](https://en.wikipedia.org/wiki/Osmotic_pressure)

3. **Wikipedia — Colligative Properties (Osmotic Pressure section):**
   [https://en.wikipedia.org/wiki/Colligative_properties#Osmotic_pressure](https://en.wikipedia.org/wiki/Colligative_properties#Osmotic_pressure)

4. **LibreTexts — Osmotic Pressure:**
   [https://chem.libretexts.org/.../8.05:__Colligative_Properties_-_Osmotic_Pressure](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/08:_Solutions/8.05:__Colligative_Properties_-_Osmotic_Pressure)

5. **Khan Academy — Osmosis:**
   [https://www.khanacademy.org/science/ap-biology/cell-structure-and-function/membrane-permeability/a/osmosis](https://www.khanacademy.org/science/ap-biology/cell-structure-and-function/membrane-permeability/a/osmosis)

6. **BYJU'S — Osmotic Pressure:**
   [https://byjus.com/jee/osmotic-pressure/](https://byjus.com/jee/osmotic-pressure/)

7. **Purdue University — Osmotic Pressure:**
   [https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php](https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch15/colligative.php)

8. **LibreTexts — Reverse Osmosis:**
   [https://chem.libretexts.org/.../8.06:__Reverse_Osmosis](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/08:_Solutions/8.06:__Reverse_Osmosis)

---

> **← Previous:** [04 — Depression of Freezing Point](./04_Depression_of_Freezing_Point.md)
> **← Back to Introduction:** [01 — Colligative Properties Introduction](./01_Colligative_Properties_Introduction.md)

---

*Prepared for university-level Physical Chemistry. All equations follow IUPAC notation.*
