# Properties of Colloids
*Date: April 10, 2026*
*Course: Physical Chemistry | University Level*

---

## Table of Contents
1. [Overview](#1-overview)
2. [Optical Properties — Tyndall Effect](#2-optical-properties--tyndall-effect)
3. [Kinetic Properties — Brownian Motion](#3-kinetic-properties--brownian-motion)
4. [Kinetic Properties — Diffusion, Sedimentation & Osmosis](#4-kinetic-properties--diffusion-sedimentation--osmosis)
5. [Electrical Properties — Electrokinetic Phenomena](#5-electrical-properties--electrokinetic-phenomena)
6. [Colloidal Stability — The DLVO Theory](#6-colloidal-stability--the-dlvo-theory)
7. [Coagulation / Flocculation](#7-coagulation--flocculation)
8. [Adsorption Properties](#8-adsorption-properties)
9. [Numerical Examples](#9-numerical-examples)
10. [Diagrams](#10-diagrams)
11. [References](#11-references)

---

## 1. Overview

Colloidal systems exhibit a unique set of properties that arise directly from their **intermediate particle size** (1–1000 nm) and their **large surface area-to-volume ratio**. These properties are broadly classified as:

| Category | Properties |
|----------|-----------|
| Optical | Tyndall effect, color, opalescence |
| Kinetic | Brownian motion, diffusion, sedimentation |
| Electrical | Electrophoresis, electro-osmosis, streaming potential, sedimentation potential |
| Mechanical/Rheological | Viscosity, gel formation |
| Thermodynamic | Osmotic pressure, colligative properties |

---

## 2. Optical Properties — Tyndall Effect

### 2.1 The Tyndall Effect

When a **beam of light** is passed through a colloidal solution and viewed at right angles to the light beam, a **luminous cone** (known as the **Tyndall cone**) is observed. This phenomenon is called the **Tyndall Effect**, discovered by **John Tyndall** in 1869.

**Why does it occur?**

Colloidal particles (1–1000 nm) have dimensions **comparable to the wavelength of visible light** (400–700 nm). This causes the particles to **scatter light** in all directions (Rayleigh and Mie scattering). This scattering makes the path of the light beam visible.

**Rayleigh Scattering Law:**

For particles much smaller than the wavelength of light (d << λ), the intensity of scattered light is:

$$I_s = \frac{I_0 \cdot 8\pi^4 \cdot N \cdot d^6}{\lambda^4 \cdot r^2} \cdot \left(\frac{n_p^2 - n_m^2}{n_p^2 + 2n_m^2}\right)^2$$

Where:
- $I_0$ = incident light intensity
- $N$ = number of particles
- $d$ = particle diameter
- $\lambda$ = wavelength of incident light
- $r$ = distance to observer
- $n_p, n_m$ = refractive index of particle and medium

**Key implications of Rayleigh Law:**
1. Scattering ∝ 1/λ⁴ → **shorter wavelengths scatter more** → blue sky!
2. Scattering ∝ d⁶ → **larger particles scatter far more** → colloidal particles scatter light detectably.

### 2.2 Ultramicroscope

- Developed by **Siedentopf and Zsigmondy** (1903); Zsigmondy received the **Nobel Prize in Chemistry 1925** for this work.
- An ultramicroscope uses the **Tyndall effect**: the sample is illuminated from the side with an intense beam, and scattered light is observed at 90°.
- Individual colloidal particles appear as **bright specks of light** against a dark background (dark-field microscopy principle).
- It **cannot reveal the shape** of particles, only their presence and number.

### 2.3 Differentiation Using Tyndall Effect

| System | Tyndall Effect | Reason |
|--------|---------------|--------|
| True solution (NaCl) | Absent | Particles too small to scatter visible light |
| **Colloidal solution** | **Present (distinct cone)** | Particles in 1–1000 nm range |
| Suspension | Absent (scattering without clear beam) | Particles too large; light blocked/absorbed |

### 2.4 Color of Colloidal Solutions

The color of a colloidal solution depends on:
1. **Nature of the dispersed phase** (electronic absorption).
2. **Particle size** (size-dependent scattering and absorption — quantum confinement in nanoparticles).

| Colloid | Color | Cause |
|---------|-------|-------|
| Gold sol (small particles, ~5 nm) | Deep red / ruby red | Plasmon resonance absorption at ~520 nm |
| Gold sol (larger particles, ~50 nm) | Purple/blue | Red-shift of plasmon resonance |
| Silver sol | Yellow | Plasmon resonance at ~400 nm |
| Fe(OH)₃ sol | Reddish brown | d-d electronic transitions in Fe³⁺ |
| Sulfur sol | Yellow | Absorption of blue/violet light |
| As₂S₃ sol | Yellow | Absorption of blue light |

---

## 3. Kinetic Properties — Brownian Motion

### 3.1 Discovery

**Robert Brown** (1827) first observed that pollen grains suspended in water showed **continuous, random, zigzag motion** under a microscope.

### 3.2 Cause

Colloidal particles are continuously bombarded by the molecules of the dispersion medium. Since the particles are small, the bombardment is **unequal from different sides** at any instant, resulting in a **net unbalanced force** that drives the particle in a random direction.

```
         ← molecule hits
         ↑ 
particle ●  → molecule hits       Net force = Vector sum ≠ 0
         ↓ 
                    ← molecule hits
```

As the medium molecules change positions rapidly, the net force changes direction continuously → **random walk motion**.

### 3.3 Einstein-Smoluchowski Theory (1905)

Einstein derived the **mean square displacement** of a Brownian particle:

$$\langle x^2 \rangle = 2Dt$$

Where:
- $\langle x^2 \rangle$ = mean square displacement in one dimension (m²)
- $D$ = diffusion coefficient (m²/s)
- $t$ = time (s)

For three-dimensional Brownian motion:
$$\langle r^2 \rangle = 6Dt$$

### 3.4 Stokes-Einstein Equation for D

The diffusion coefficient D of a spherical colloidal particle is:

$$D = \frac{k_B T}{6\pi \eta r}$$

Where:
- $k_B$ = Boltzmann constant = 1.381 × 10⁻²³ J/K
- $T$ = absolute temperature (K)
- $η$ = dynamic viscosity of medium (Pa·s)
- $r$ = hydrodynamic radius of particle (m)

**Physical meaning:** Larger particles diffuse more slowly; higher temperature → faster diffusion.

### 3.5 Significance of Brownian Motion

1. **Explains colloidal stability:** Brownian motion keeps particles in perpetual motion, preventing sedimentation.
2. **Verified kinetic theory:** Perrin's experiments (1908) used Brownian motion to determine Avogadro's number accurately.
3. **Foundation of colloidal science:** The perpetual motion of colloidal particles is the basis of all kinetic theories of colloids.

---

## 4. Kinetic Properties — Diffusion, Sedimentation & Osmosis

### 4.1 Diffusion

Colloidal particles undergo diffusion (net movement from high to low concentration) according to **Fick's First Law**:

$$J = -D \frac{dC}{dx}$$

Where:
- $J$ = flux (mol·m⁻²·s⁻¹)
- $D$ = diffusion coefficient
- $dC/dx$ = concentration gradient

Colloidal particles diffuse much more slowly than small molecules because of their larger size and smaller D value.

### 4.2 Sedimentation — Svedberg Equation

Under gravity, colloidal particles sediment (settle). The **terminal velocity** of sedimentation is given by **Stokes' Law**:

$$v = \frac{2r^2(\rho_p - \rho_m)g}{9\eta}$$

Where:
- $r$ = particle radius
- $\rho_p, \rho_m$ = density of particle and medium
- $g$ = gravitational acceleration
- $\eta$ = viscosity of medium

For colloidal particles, sedimentation under gravity is negligibly slow (Brownian motion > gravitational force), so an **ultracentrifuge** must be used.

**Svedberg Unit (S):**

The sedimentation coefficient $s$ is defined as:

$$s = \frac{v}{\omega^2 r_{cen}} = \frac{M(1 - \bar{v}\rho)}{N_A f}$$

Where $1S = 10^{-13}$ s (Svedberg unit). Used extensively in characterizing proteins, viruses, and macromolecular colloids.

### 4.3 Osmotic Pressure

For colloidal solutions, the osmotic pressure is **very low** because the particle concentration (in mol/L) is much smaller than the equivalent mass concentration. The van't Hoff equation applies:

$$\Pi = MRT$$

Where $\Pi$ is osmotic pressure, $M$ is molar concentration of colloidal particles.

**Example:** For a gold sol where 1 g of Au is dispersed per liter as 20-nm particles:
- Volume of one particle: (4/3)π(10×10⁻⁹)³ = 4.19 × 10⁻²⁴ m³
- Mass of one particle: ρ × V = 19,300 × 4.19 × 10⁻²⁴ = 8.09 × 10⁻²⁰ kg = 8.09 × 10⁻¹⁷ g
- Number of particles per liter: 1 g / 8.09 × 10⁻¹⁷ g = 1.24 × 10¹⁶
- Molar concentration: 1.24 × 10¹⁶ / 6.022 × 10²³ = 2.06 × 10⁻⁸ mol/L
- Osmotic pressure: Π = MRT = 2.06 × 10⁻⁸ × 8.314 × 298 ≈ 5.1 × 10⁻⁵ atm (negligible!)

---

## 5. Electrical Properties — Electrokinetic Phenomena

### 5.1 Zeta Potential & Electrical Double Layer

Colloidal particles carry a **surface charge**. This attracts counter-ions from solution, forming a **diffuse electrical double layer** (Gouy-Chapman-Stern model):

```
  ─────────────────────────────────────────────────────►  distance from surface
  
  SURFACE  │ Stern Layer │     Diffuse Layer         │  Bulk Solution
  ─────────┼─────────────┼──────────────────────────────────────────
  ─────────  +++++++++    +++  ++ +   +    +  +  +         neutral
  Negative  (bound cations) (mobile cations)
  surface

  Potential │
            │
  ψ₀ ──────┐
            │
  ψ_d ─────┼────┐ (zeta potential, ζ)
            │    │
            │    └──────────────────────────────────── distance
            │
  Shear plane (slipping plane): 
  The plane at which motion occurs; potential at this plane = ζ (zeta potential)
```

**Zeta potential (ζ):**
- The electrical potential at the **shear plane** (or slipping plane) between the moving particle and the stationary liquid.
- Measured in millivolts (mV).
- **Key stability indicator:**

| ζ (mV) | Stability |
|--------|-----------|
| 0 to ±10 | Rapid coagulation |
| ±10 to ±30 | Incipient instability |
| ±30 to ±40 | Moderate stability |
| ±40 to ±60 | Good stability |
| > ±61 | Excellent, long-term stability |

### 5.2 Electrophoresis

**Definition:** The movement of **colloidal particles** under the influence of an **applied electric field** is called **electrophoresis** (also called cataphoresis).

- **Positively charged particles** (e.g., Fe(OH)₃) move toward the **cathode** (negative electrode).
- **Negatively charged particles** (e.g., Au sol, As₂S₃ sol) move toward the **anode** (positive electrode).

**Helmholtz-Smoluchowski equation** for electrophoretic mobility:

$$\mu_E = \frac{\varepsilon \zeta}{\eta}$$

Where:
- $\mu_E$ = electrophoretic mobility (m²·V⁻¹·s⁻¹)
- $\varepsilon$ = permittivity of medium (F/m)
- $\zeta$ = zeta potential (V)
- $\eta$ = viscosity of medium (Pa·s)

**Applications:**
- **Gel electrophoresis:** Separation of DNA and proteins by size and charge.
- **Industrial electrophoretic deposition:** Electrocoating of car bodies (cathodic electrodeposition).
- **Medical diagnostics:** Serum protein electrophoresis to diagnose myeloma, liver disease.
- **Environmental:** Removal of colloidal pollutants from wastewater.

### 5.3 Electro-osmosis

**Definition:** The movement of the **dispersion medium** through a **stationary** colloidal system (e.g., a gel or charged membrane) under an applied electric field.

- It is the inverse of electrophoresis.
- Used in **dewatering of peat, clay, and sludge** (electroosmotic dewatering).
- Used in **microfluidics** to pump fluids through capillaries without mechanical pumps.

### 5.4 Streaming Potential

**Definition:** When a liquid is forced under **pressure** through a capillary or porous plug (that carries a surface charge), an **electric potential difference** develops between the two ends.

- This is the **reverse of electro-osmosis**.
- Used to study the zeta potential of surfaces and membranes.

### 5.5 Sedimentation Potential (Dorn Effect)

**Definition:** When colloidal particles **settle** under gravity or a centrifugal force, they create an **electric potential** between top and bottom of the solution.

- Reverse of electrophoresis.
- Rarely of practical importance but fundamentally important in electrokinetic theory.

---

## 6. Colloidal Stability — The DLVO Theory

The **DLVO Theory** (Derjaguin, Landau, Verwey, and Overbeek, 1940s) explains the stability of lyophobic colloidal systems by considering **two opposing interactions**:

### 6.1 Two Competing Forces

1. **Van der Waals Attractive Force (V_A):**
   - Always attractive between colloidal particles.
   - Decreases with distance approximately as: $V_A \approx -\frac{A}{12\pi D^2}$ (per unit area)
   - Where A = Hamaker constant and D = separation distance.

2. **Electrostatic Repulsive Force (V_R):**
   - Arises from the overlap of electrical double layers.
   - Decreases exponentially with distance: $V_R \approx 64\pi\varepsilon r (k_BT/ze)^2 \tanh^2(ze\zeta/4k_BT) \cdot e^{-\kappa D}$
   - Where κ⁻¹ = Debye length (thickness of double layer).

### 6.2 Total Interaction Energy

$$V_{total} = V_A + V_R$$

```
Energy  
(V)     
        │       V_R (repulsion)
        │         ╱─────╲
        │        ╱       ╲
        │       ╱         ╲
  VMAX ─┼─────╱    primary  ╲──────
        │    ╱  maximum      ╲
   0 ───┼───╱─────────────────╲─────
        │  ╱                   ╲
        │ ╱   secondary         ╲
        │╱    minimum         V_A \──────  
        │                    (attraction)
        └──────────────────────────────►  D (distance)
```

- **Primary maximum (V_max):** Energy barrier that prevents coagulation. If V_max >> k_BT, the sol is stable.
- **Secondary minimum:** Can cause **flocculation** (loosely held aggregates that can be redispersed).
- **Primary minimum:** Deep attractive well where irreversible coagulation occurs.

### 6.3 Effect of Electrolyte on Stability (Schulze-Hardy Rule)

Adding electrolyte **compresses the double layer** (reduces Debye length κ⁻¹):
$$\kappa^{-1} = \sqrt{\frac{\varepsilon k_BT}{2N_Ae^2I}}$$

Where I = ionic strength = (1/2)Σcᵢzᵢ²

**Schulze-Hardy Rule:** The **coagulating power of an ion increases dramatically with its valence**.

| Ion Valence | Example | Relative Coagulating Power |
|-------------|---------|---------------------------|
| 1+ (monovalent) | Na⁺, K⁺ | 1 |
| 2+ (divalent) | Ca²⁺, Mg²⁺ | ~60 |
| 3+ (trivalent) | Al³⁺, Fe³⁺ | ~700 |

**Mathematical relationship:** Coagulating concentration (CCC) ∝ 1/z⁶ for symmetrical electrolytes.

---

## 7. Coagulation / Flocculation

### 7.1 Definition

**Coagulation** (or flocculation) is the **irreversible aggregation** of colloidal particles into larger masses (precipitate) as a result of loss of stability.

### 7.2 Causes of Coagulation

1. **Addition of electrolytes:** The added ions neutralize the surface charge of colloidal particles (reduces zeta potential) → particles come together under van der Waals forces.
   
2. **Mutual coagulation (mixing oppositely charged sols):**
   ```
   Fe(OH)₃ sol (+) + As₂S₃ sol (−) → coagulation of both
   ```

3. **Heating:** Increases kinetic energy; particles collide more frequently and with greater force; thermal energy overcomes the energy barrier.

4. **Persistent electrodialysis:** Removes ALL electrolyte → destabilizes lyophobic sols (which need trace electrolyte for stability).

5. **Mechanical agitation:** Increases collision frequency.

6. **Addition of non-electrolytes:** Alcohols reduce the dielectric constant of the medium → reduces the range of electrostatic repulsion.

### 7.3 Hardy-Schulze Law

The minimum concentration of an electrolyte (expressed in millimoles per liter) required to cause coagulation of a sol within a given time is called the **Critical Coagulation Concentration (CCC)** or **flocculation value**.

**Hardy-Schulze Rule:** The **greater the valence of the precipitating ion (the ion with opposite charge to the sol), the greater is its coagulating power.**

**Example for a negatively charged As₂S₃ sol:**

| Electrolyte | Precipitating Ion | Valence | CCC (mmol/L) |
|-------------|-------------------|---------|--------------|
| NaCl | Na⁺ | +1 | 51 |
| MgCl₂ | Mg²⁺ | +2 | 0.72 |
| AlCl₃ | Al³⁺ | +3 | 0.093 |

### 7.4 Applications of Coagulation

1. **Water treatment:** Alum [KAl(SO₄)₂·12H₂O] is added to turbid water. Al³⁺ and Al(OH)₃ sol coagulate the negatively charged clay and silt particles.
2. **Sewage treatment:** FeCl₃ or Al₂(SO₄)₃ added to sewage to flocculate suspended organic matter.
3. **Cheese making:** Milk (lyophilic sol) is coagulated by adding rennet (enzyme) or HCl.
4. **Rubber industry:** Latex (negatively charged rubber sol) is coagulated with formic acid or acetic acid.
5. **Blood clotting:** Fibrinogen (protein) in blood forms colloidal threads that coagulate around the wound.
6. **Delta formation:** River water (carrying negatively charged clay sol) meets seawater (rich in Na⁺, Mg²⁺) → coagulation of clay → river delta deposits.

---

## 8. Adsorption Properties

Colloidal particles have an **enormous surface area** per unit mass (specific surface area), which gives them exceptional **adsorption capacity**.

### 8.1 Specific Surface Area Calculation

For spherical particles of radius r and density ρ:
$$\text{Specific surface area} = \frac{3}{r\rho}$$

**Example:** For gold particles of r = 10 nm = 10⁻⁸ m and ρ = 19,300 kg/m³:
$$S = \frac{3}{10^{-8} \times 19300} = \frac{3}{1.93 \times 10^{-4}} \approx 15,544 \text{ m}^2/\text{kg} = 15.5 \text{ m}^2/\text{g}$$

This is a remarkably large surface area for just 1 gram of material!

### 8.2 Ion Exchange by Adsorption

- Colloidal particles selectively adsorb specific ions that determine their charge.
- **Fajans-Paneth Rule:** The ion that is adsorbed preferentially is the one that **forms an insoluble compound** with the surface ions, or the one **common to the lattice** of the surface.

---

## 9. Numerical Examples

### Problem 1 — Stokes-Einstein Diffusion
**Q:** Calculate the diffusion coefficient of a spherical protein (approximate colloid) of radius 5 nm in water at 25°C. η(water) = 8.9 × 10⁻⁴ Pa·s.

```
D = k_B T / (6πηr)
  = (1.381 × 10⁻²³ J/K × 298 K) / (6 × π × 8.9 × 10⁻⁴ Pa·s × 5 × 10⁻⁹ m)
  = (4.115 × 10⁻²¹) / (8.387 × 10⁻¹¹)
  = 4.91 × 10⁻¹¹ m²/s
  ≈ 4.9 × 10⁻¹¹ m²/s

This is about 100× smaller than the diffusion coefficient of a small ion like Na⁺ (~1.3 × 10⁻⁹ m²/s).
```

### Problem 2 — Sedimentation Velocity
**Q:** A spherical silica particle of radius 200 nm (density = 2200 kg/m³) sediments in water (density = 1000 kg/m³, η = 8.9 × 10⁻⁴ Pa·s) at 25°C. Calculate terminal sedimentation velocity.

```
v = 2r²(ρ_p - ρ_m)g / (9η)
  = 2 × (200×10⁻⁹)² × (2200-1000) × 9.81 / (9 × 8.9×10⁻⁴)
  = 2 × 4×10⁻¹⁴ × 1200 × 9.81 / (8.01×10⁻³)
  = 2 × 4×10⁻¹⁴ × 11772 / 8.01×10⁻³
  = 9.417×10⁻¹⁰ / 8.01×10⁻³
  = 1.18×10⁻⁷ m/s ≈ 0.42 mm/hour

This is extremely slow → colloidal behavior; practically stable under gravity.
```

### Problem 3 — Coagulation (Hardy-Schulze)
**Q:** Given CCC of NaCl for As₂S₃ sol = 51 mmol/L, estimate CCC of MgCl₂ using Hardy-Schulze (z⁶ rule).

```
CCC ∝ 1/z⁶
CCC(MgCl₂) / CCC(NaCl) = (z_Na)⁶ / (z_Mg)⁶ = 1⁶/2⁶ = 1/64

CCC(MgCl₂) = 51/64 ≈ 0.80 mmol/L

(Experimental value is ~0.72 mmol/L — very good agreement!)
```

---

## 10. Diagrams

**Figure 1: Tyndall Effect**
```
  Light beam enters →  [False/True solution]       No visible cone
                                               
  Light beam enters →  [Colloidal solution]         VISIBLE CONE
                              ████████████
                             ██ Tyndall  ██
                            ██   Cone    ██
                             ████████████
  Observed at 90° to beam
```

**Figure 2: Electrophoresis**
```
  [−] Cathode ──────────────────────── Anode [+]
         │                                  │
         │    ←←← Fe(OH)₃ (+) particles     │
         │                                  │
         │    Au sol (−) particles →→→      │
         │                                  │
  ───────────────────────────────────────────
                   U-tube apparatus
```

**Figure 3: DLVO Potential Energy Curve**
```
  V(D)
  ↑
  │          ╭──╮   ← Primary maximum (V_max) = energy barrier
  │         ╱    ╲
  │        ╱      ╲
  │       ╱        ╲
  │──────╱────────────────────────────── D (distance)
  │                  ╲
  │          secondary╲──╮
  │             minimum    ╲────────────── V_A (primary minimum)
  ↓
```

**Online Reference Image:**
![Tyndall effect in colloidal solution](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tyndall_effect.jpg/640px-Tyndall_effect.jpg)
*Figure 4: Tyndall effect — scattering of laser beam through colloidal solution (Wikimedia Commons)*

---

## 11. References

### Textbooks
1. Atkins, P. & de Paula, J. (2014). *Atkins' Physical Chemistry* (10th ed.). Oxford University Press. Chapters 19–20.
2. Puri, B. R., Sharma, L. R., & Pathania, M. S. (2012). *Principles of Physical Chemistry* (47th ed.). Vishal Publishing.
3. Hiemenz, P. C. & Rajagopalan, R. (1997). *Principles of Colloid and Surface Chemistry* (3rd ed.). CRC Press. Chapters 3–12.
4. Israelachvili, J. N. (2011). *Intermolecular and Surface Forces* (3rd ed.). Academic Press.
5. Hunter, R. J. (1989). *Foundations of Colloid Science* (2nd ed.). Oxford University Press.

### Online Resources
- [LibreTexts – Properties of Colloids](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Solutions_and_Mixtures/Colloid/Properties_of_Colloids)
- [Britannica – Tyndall Effect](https://www.britannica.com/science/Tyndall-effect)
- [NCERT Surface Chemistry](https://ncert.nic.in/textbook.php?lech1=5-5)
- [ScienceDirect – DLVO Theory](https://www.sciencedirect.com/topics/chemistry/dlvo-theory)
- [Zeta Potential – Malvern Instruments](https://www.malvernpanalytical.com/en/learn/knowledge-center/whitepapers/zeta-potential)
- [Electrophoresis – Khan Academy](https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/biotechnology/a/gel-electrophoresis)

---
*End of File 03 — Properties of Colloids*
*Previous: [02_Preparation_and_Purification_of_Colloids.md](./02_Preparation_and_Purification_of_Colloids.md)*
*Next: [04_Protective_Action_and_Applications.md](./04_Protective_Action_and_Applications.md)*
