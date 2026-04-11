# 07 — Crystal Field Theory (CFT) / Ligand Field Theory (LFT)

> **Last Updated:** April 10, 2025
> **Reference:** Hand notes (Sayim, 2023) | LibreTexts | Wikipedia – Crystal Field Theory | Purdue Chem
> **Developed by:** Hans Bethe (1929), John Van Vleck (1930s), Leslie Orgel (1950s)

---

## 1. Introduction

**Crystal Field Theory (CFT)** — also called **Ligand Field Theory (LFT)** in its extended form — is a model that describes the electronic structure of transition metal complexes.

### Core Statement

> **"The attraction between the central atom and the ligands in a complex compound is purely electrostatic (ionic)."**

- CFT treats ligands as **point charges** (or point dipoles for neutral ligands).
- There is **no covalent character** considered between metal and ligand (this is CFT's main assumption).
- The key idea: the electrostatic field of the ligands **splits** the otherwise degenerate d-orbitals of the metal into groups of different energies.

---

## 2. Assumptions of Crystal Field Theory

| # | Assumption |
|---|-----------|
| 1 | Ligands are treated as **point charges** (point dipoles for neutral molecules) |
| 2 | **No interaction** (overlap) between metal orbitals and ligand orbitals |
| 3 | The d-orbitals of the free metal ion are all **degenerate** (same energy) |
| 4 | The attraction between the central metal and ligands is **purely electrostatic** |

---

## 3. The Five d-Orbitals

Before applying CFT, we must know the shapes and orientations of the five d-orbitals:

| d-Orbital | Orientation | Shape |
|-----------|-------------|-------|
| d_z² | Along z-axis | Dumbbell along z + "donut" in xy-plane |
| d_x²-y² | Along x and y axes | Dumbbell along x and y |
| d_xy | Between x and y axes (45°) | Four-leaf clover in xy-plane |
| d_xz | Between x and z axes | Four-leaf clover in xz-plane |
| d_yz | Between y and z axes | Four-leaf clover in yz-plane |

**Key grouping:**
- `d_z²` and `d_x²-y²` → point **along** the axes → called the **e_g set**
- `d_xy`, `d_xz`, `d_yz` → point **between** the axes → called the **t₂g set**

---

## 4. Crystal Field Splitting in Octahedral Complexes

In an octahedral complex `[ML₆]ⁿ⁺`, six ligands are placed along the ±x, ±y, ±z axes:

```
         L
         |
    L — M — L
        |
        L
   (+ 2 more along y-axis, not shown for simplicity)
```

**Effect on d-orbitals:**

- `e_g` orbitals (`d_z²`, `d_x²-y²`) point **directly at** the ligands
  → Experience **maximum repulsion** → **higher energy**

- `t₂g` orbitals (`d_xy`, `d_xz`, `d_yz`) point **between** the ligands
  → Experience **less repulsion** → **lower energy**

**Energy Diagram:**

```
              ─────  ─────
                e_g  (d_z², d_x²-y²)
                         ↑ +0.6Δ₀
    Barycenter ──────────────────────
    (avg energy)         ↓ -0.4Δ₀
                t₂g  (d_xy, d_xz, d_yz)
              ─────  ─────  ─────
```

- The gap between `t₂g` and `e_g` is called **Δ₀** (or **Δ_oct** or **10Dq**).
- `t₂g` is **stabilised by 0.4Δ₀** (below barycentre)
- `e_g` is **destabilised by 0.6Δ₀** (above barycentre)
- **Net energy change = 0** (the splitting doesn't change total energy)

$$\Delta_{\text{oct}} = E(e_g) - E(t_{2g}) = 10Dq$$

$$E(e_g) = +0.6\Delta_0 = +6Dq \text{ per electron}$$
$$E(t_{2g}) = -0.4\Delta_0 = -4Dq \text{ per electron}$$

---

## 5. High-Spin and Low-Spin Octahedral Complexes

For d⁴ to d⁷ configurations, electrons can fill the orbitals in two ways:

### The Decision Criterion

Compare the **Crystal Field Splitting Energy (Δ₀)** with the **Pairing Energy (P)**:

| Condition | Configuration | Name |
|-----------|--------------|------|
| **Δ₀ > P** | Electrons pair in t₂g before entering e_g | **Low-spin** (strong field) |
| **Δ₀ < P** | Electrons occupy e_g before pairing | **High-spin** (weak field) |

```
High-spin d⁵ (Δ₀ < P):       Low-spin d⁵ (Δ₀ > P):
                               
  e_g  ↑  ↑                    e_g  __  __
  t₂g  ↑  ↑  ↑                 t₂g  ↑↓  ↑↓  ↑
  
  5 unpaired electrons          1 unpaired electron
  (paramagnetic)                (paramagnetic, less so)
```

**Spectrochemical Series** (weak field → strong field):
```
I⁻ < Br⁻ < S²⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ ≈ CO
(small Δ₀, high spin)                             (large Δ₀, low spin)
```

---

## 6. Crystal Field Stabilisation Energy (CFSE)

The **CFSE** is the extra stability gained by a complex due to the d-orbital splitting:

$$\text{CFSE} = n_{t_{2g}} \times (-0.4\Delta_0) + n_{e_g} \times (+0.6\Delta_0)$$

Where $n_{t_{2g}}$ and $n_{e_g}$ are the number of electrons in each set.

**Example — d³ configuration (e.g., Cr³⁺ in [Cr(NH₃)₆]³⁺):**

```
t₂g: ↑ ↑ ↑     e_g: __ __

CFSE = 3 × (−0.4Δ₀) + 0 × (+0.6Δ₀)
     = −1.2Δ₀
```

This complex has a CFSE of −1.2Δ₀ → 1.2Δ₀ of extra stabilisation.

**Example — d⁶ low-spin (e.g., [Co(NH₃)₆]³⁺):**

```
t₂g: ↑↓ ↑↓ ↑↓    e_g: __ __

CFSE = 6 × (−0.4Δ₀) + 0 × (+0.6Δ₀)
     = −2.4Δ₀
```

This is very stable — explains why [Co(NH₃)₆]³⁺ is so stable.

---

## 7. Crystal Field Splitting in Tetrahedral Complexes

In a tetrahedral complex, **four ligands** are placed at alternate corners of a cube (none along the axes directly):

```
         L
        / \
       /   \
      L—–M—–L
          \
           L
```

**Key differences from octahedral:**

- The **e** set (d_z², d_x²-y²) is **lower** in energy (less repulsion — ligands between axes)
- The **t₂** set (d_xy, d_xz, d_yz) is **higher** in energy (more repulsion — ligands closer to these orbitals)
- **Splitting is inverted** compared to octahedral!

**Energy Diagram:**

```
         ─────  ─────  ─────
              t₂ set  (d_xy, d_xz, d_yz)
                          ↑ +0.4Δ_t
         Barycenter ──────────────────
                          ↓ -0.6Δ_t
              e set   (d_z², d_x²-y²)
              ─────  ─────
```

**Key relationship:**
$$\Delta_t \approx \frac{4}{9}\Delta_0$$

Tetrahedral splitting is only about **4/9** of octahedral splitting for the same metal and ligands. Therefore:
- Tetrahedral complexes are almost always **high-spin** (Δ_t is too small to force pairing).

---

## 8. Crystal Field Splitting in Square Planar Complexes

A **square planar** geometry can be derived from an **octahedral** geometry by removing the two axial (z-axis) ligands:

```
Octahedral → Remove two L along z-axis → Square Planar

(before)         (after)
   L                
   |              
L-M-L   →    L-M-L  (in xy plane only)
   |              
   L                
  (L)       ← removed
```

**Effect on d-orbitals:**

When z-ligands are removed:
- Orbitals with z-components (d_z², d_xz, d_yz) are **stabilised** (less repulsion)
- d_x²-y² is **maximally destabilised** (4 ligands directly along x and y axes)
- d_xy is next in energy (45° to x and y axes, but in the same plane)

**Energy Diagram (approximate):**

```
         _____
          d_x²-y²         (highest — points at ligands)
         _____
          d_xy             (in xy-plane, close to ligands)
    
         _____
          d_z²             (no ligands on z → stabilised)
         _____  _____
          d_xz    d_yz     (lowest — between axes and no z-ligands)
```

**Key points:**
- **Δ_sp > Δ_oct** (square planar splitting is the largest)
- Most square planar complexes are **low-spin**
- d⁸ complexes (Ni²⁺, Pd²⁺, Pt²⁺, Au³⁺) strongly prefer square planar geometry

---

## 9. Comparison of Splitting Patterns

```
                Octahedral    Tetrahedral   Square Planar
                  [ML₆]         [ML₄]          [ML₄]
                  
Highest E         e_g set       t₂ set         d_x²-y²
                  (d_z²,        (d_xy,         (highest)
                   d_x²-y²)      d_xz,
                                 d_yz)

Lower E           t₂g set        e set         d_xy → d_z² → d_xz,d_yz
                  (d_xy,         (d_z²,        (4 levels for square planar)
                   d_xz,          d_x²-y²)
                   d_yz)

Splitting         Δ₀            Δ_t ≈ 4/9Δ₀   Δ_sp > Δ₀
Magnitude

Spin tendency     Low or High   Almost always  Almost always
                                high spin      low spin
```

---

## 10. Colours of Coordination Complexes

CFT explains the colours of transition metal complexes:

- When white light passes through a complex, electrons absorb photons of a specific energy to jump from `t₂g → e_g` (octahedral).
- The **complementary colour** of the absorbed light is what we observe.

$$\Delta_0 = h\nu = \frac{hc}{\lambda}$$

**Example:**
```
[Ti(H₂O)₆]³⁺  — absorbs green light (~500 nm) → appears violet/purple
[Cu(H₂O)₆]²⁺  — absorbs red/yellow light → appears blue
[Ni(H₂O)₆]²⁺  — absorbs multiple wavelengths → appears green
```

**d⁰ and d¹⁰ complexes are colourless** because:
- d⁰: no electrons to transition
- d¹⁰: no empty d-orbitals to accept an electron

---

## 11. Applications of Crystal Field Theory

From notes:

| # | Application |
|---|------------|
| 1 | Explains the **colour** of transition metal complexes |
| 2 | Explains **magnetic properties** (high-spin = paramagnetic, low-spin = diamagnetic or less paramagnetic) |
| 3 | Explains **thermodynamic and kinetic** properties (CFSE affects enthalpy of hydration, lattice energies) |
| 4 | Explains **stereo** and chemical properties |
| 5 | Explains **tetragonal distortion (Jahn–Teller effect)** in octahedral complexes |

---

## 12. Limitations of Crystal Field Theory

From notes:

| # | Limitation |
|---|-----------|
| 1 | Considers **only d-orbitals** of metal ion; ignores p-orbitals (p_x, p_y, p_z) |
| 2 | **No explanation** of relative ligand field strength (why CN⁻ > Cl⁻ in spectrochemical series) — purely electrostatic argument fails |
| 3 | **No consideration** of ligand–ligand repulsion and steric effects |
| 4 | **No consideration** of charge-transfer spectra (metal → ligand or ligand → metal electron transfer) |
| 5 | **No consideration** of the possibility of π-bonding in complexes |
| 6 | Treats metal–ligand bonds as purely ionic — but real bonds have **covalent character** |

> LFT (Ligand Field Theory) was developed to address limitations 2, 4, and 5 by incorporating molecular orbital theory concepts.

---

## 13. Summary

| Aspect | CFT Explanation |
|--------|----------------|
| d-orbital splitting | Electrostatic repulsion from ligand point charges |
| Octahedral splitting | e_g higher, t₂g lower; Δ₀ = 10Dq |
| Tetrahedral splitting | Inverse of octahedral; Δ_t ≈ 4/9 Δ₀ |
| Square planar | d_x²-y² highest; largest splitting |
| Colour | d-d electronic transitions absorb specific wavelengths |
| Magnetic properties | High vs low spin → unpaired electrons |
| CFSE | Extra stability from occupying lower-energy d-orbitals |

---

## 14. Practice Problems

1. Draw the d-orbital splitting diagram for `[Cr(H₂O)₆]³⁺` and calculate CFSE (d³ configuration).
2. Is `[CoF₆]³⁻` high-spin or low-spin? Explain using the spectrochemical series. (d⁶)
3. Why is `[Ni(CN)₄]²⁻` square planar but `[NiCl₄]²⁻` tetrahedral?
4. A complex absorbs light at 590 nm (orange). What colour does it appear? What is the Δ₀ in kJ/mol?
   `(E = hc/λ = (6.626×10⁻³⁴ × 3×10⁸) / (590×10⁻⁹) = 3.37×10⁻¹⁹ J per photon)`

---

## 📖 Further Reading

- [Wikipedia — Crystal Field Theory](https://en.wikipedia.org/wiki/Crystal_field_theory)
- [LibreTexts — Crystal Field Theory](https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Crystal_Field_Theory/Crystal_Field_Theory)
- [Purdue — Crystal Field Theory](https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch12/crystal.php)
- [LibreTexts — Tetrahedral vs Square Planar](https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Crystal_Field_Theory/Tetrahedral_vs._Square_Planar_Complexes)

---

*← [06 Werner's Theory](./06_Werners_Theory.md) | Next → [08 Isomerism](./08_Isomerism.md)*
