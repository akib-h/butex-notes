# PHY101: Physics-I — Class Test Answer Bank
> Gopalganj / Sheikh Rebana Textile Engineering College  
> Compiled for exam revision and GitHub study reference

---

## 📚 Table of Contents

- [Class Test 1 — Optics (Interference)](#class-test-1--optics-interference)
  - [Set A](#set-a-interference)
  - [Set B](#set-b-interference)
- [Class Test 2 — Properties of Matter](#class-test-2--properties-of-matter)
  - [Set A — Surface Tension](#set-a-surface-tension)
  - [Set B — Elasticity](#set-b-elasticity)
- [Practice Questions](#practice-questions)
- [References](#references)

---

# Class Test 1 — Optics (Interference)

## Set A (Interference)

---

### Q1. What is interference? Explain its classifications. `[3 marks]`

#### Definition
**Interference of light** is the phenomenon in which two or more coherent light waves superpose to produce a resultant wave whose amplitude (and hence intensity) is either greater or less than that of the individual waves.

It is a direct consequence of the **superposition principle**:

$$\vec{E}_{resultant} = \vec{E}_1 + \vec{E}_2$$

#### Classifications

Interference is broadly classified into two types:

| Type | Description | Example |
|------|-------------|---------|
| **Constructive Interference** | Waves meet **in phase** (path difference = nλ); amplitude and intensity are *maximum* | Bright fringes in Young's experiment |
| **Destructive Interference** | Waves meet **out of phase** (path difference = (2n−1)λ/2); amplitude and intensity are *minimum* | Dark fringes in Young's experiment |

Based on the **method of production**, interference is also classified as:

1. **Division of Wavefront** — The original wavefront is divided into two parts which act as coherent sources.  
   *Example:* Young's Double Slit Experiment, Fresnel's Biprism, Lloyd's Mirror.

2. **Division of Amplitude** — The amplitude of an incoming wave is divided into two parts by partial reflection and refraction at surfaces.  
   *Example:* Newton's Rings, Thin Film Interference, Michelson Interferometer.

> **Key condition for interference:** The two sources must be **coherent** (constant phase difference) and must have the same frequency and nearly equal amplitudes.

---

### Q2. Show that the distance between any two bright and dark fringes is equal. `[4 marks]`

#### Setup (Young's Double Slit)

Let:
- `d` = slit separation
- `D` = distance from slits to screen
- `λ` = wavelength of light

#### Position of Bright Fringes

For constructive interference, path difference = nλ:

$$y_n^{bright} = \frac{n\lambda D}{d}, \quad n = 0, \pm1, \pm2, \ldots$$

The fringe width (distance between consecutive bright fringes):

$$\beta = y_{n+1}^{bright} - y_n^{bright} = \frac{(n+1)\lambda D}{d} - \frac{n\lambda D}{d} = \frac{\lambda D}{d}$$

#### Position of Dark Fringes

For destructive interference, path difference = (2n−1)λ/2:

$$y_n^{dark} = \frac{(2n-1)\lambda D}{2d}, \quad n = 1, 2, 3, \ldots$$

The fringe width between consecutive dark fringes:

$$\beta = y_{n+1}^{dark} - y_n^{dark} = \frac{(2(n+1)-1)\lambda D}{2d} - \frac{(2n-1)\lambda D}{2d} = \frac{2\lambda D}{2d} = \frac{\lambda D}{d}$$

#### Conclusion

$$\boxed{\beta = \frac{\lambda D}{d}}$$

The fringe width β is the **same for both bright and dark fringes**, and is independent of the order `n`. Therefore, all bright and dark fringes are **equally spaced**.

---

### Q3. Newton's Rings: λ = 5.9×10⁻⁵ cm, Diameter of 10th dark ring = 0.5 cm. Find (a) Radius of curvature R and (b) Thickness of air film. `[3 marks]`

#### Given:
- Wavelength: λ = 5.9 × 10⁻⁵ cm = 5.9 × 10⁻⁷ m
- Diameter of 10th dark ring: D₁₀ = 0.5 cm → Radius r₁₀ = 0.25 cm = 2.5 × 10⁻³ m
- n = 10

#### (a) Radius of Curvature R

For the nth dark ring in Newton's rings (reflected light):

$$D_n^2 = 4n\lambda R$$

$$R = \frac{D_n^2}{4n\lambda}$$

$$R = \frac{(0.5 \times 10^{-2})^2}{4 \times 10 \times 5.9 \times 10^{-7}}$$

$$R = \frac{25 \times 10^{-6}}{23.6 \times 10^{-6}}$$

$$\boxed{R \approx 1.059 \text{ m} \approx 105.9 \text{ cm}}$$

#### (b) Thickness of Air Film (t)

For the nth dark ring, the air film thickness at that ring is:

$$r_n^2 = 2Rt \implies t = \frac{r_n^2}{2R}$$

Or equivalently using the dark ring condition: $2t = n\lambda$

$$t = \frac{n\lambda}{2} = \frac{10 \times 5.9 \times 10^{-7}}{2}$$

$$\boxed{t = 2.95 \times 10^{-6} \text{ m} = 2.95 \text{ μm}}$$

---

## Set B (Interference)

---

### Q1. Explain the conditions of interference. `[3 marks]`

For sustained and observable interference, the following conditions must be satisfied:

1. **Coherence:** The two sources must be coherent — they must have a **constant phase difference** over time. In practice, this is achieved by deriving both sources from a single source.

2. **Same Frequency:** The two interfering waves must have **exactly the same frequency** (or wavelength). Waves of different frequencies produce a shifting pattern too fast to observe.

3. **Nearly Equal Amplitudes:** The amplitudes of the two waves should be **equal or nearly equal** so that the minima are nearly zero and the contrast (visibility) of fringes is high:
$$V = \frac{I_{max} - I_{min}}{I_{max} + I_{min}} = \frac{2A_1 A_2}{A_1^2 + A_2^2}$$
   Maximum visibility V = 1 when A₁ = A₂.

4. **Narrow Sources:** Sources should be narrow (ideally point sources) to produce well-defined wavefronts.

5. **Monochromatic Light:** Light should be monochromatic (single wavelength) for distinct fringes. White light gives coloured fringes due to overlapping patterns of different wavelengths.

6. **Small Path Difference:** The path difference should be small (within the coherence length of the source) for interference to occur.

---

### Q2. Elucidate how the energy conservation law is followed by the interference phenomenon. `[4 marks]`

This is one of the most elegant aspects of wave optics.

#### The Apparent Paradox

In destructive interference, intensity at dark fringes = 0. This might suggest that energy is being destroyed. But this would violate the law of conservation of energy.

#### Resolution

Consider two interfering beams each of intensity `I₀`. The resultant intensity at any point is:

$$I = 4I_0 \cos^2\left(\frac{\delta}{2}\right)$$

where δ is the phase difference.

- At **bright fringes** (δ = 0, 2π, ...): $I_{max} = 4I_0$
- At **dark fringes** (δ = π, 3π, ...): $I_{min} = 0$

#### Average Intensity Over the Screen

The average value of $\cos^2(\delta/2)$ over a complete cycle is $\frac{1}{2}$:

$$\langle I \rangle = 4I_0 \times \frac{1}{2} = 2I_0$$

This equals the **sum of the individual intensities** ($I_0 + I_0 = 2I_0$).

#### Conclusion

> Energy is **not created or destroyed** — it is merely **redistributed** from regions of destructive interference (dark fringes) to regions of constructive interference (bright fringes).

The total energy falling on the screen is **conserved**. Interference is simply a spatial redistribution of energy, fully consistent with the law of conservation of energy.

---

### Q3. Double slit: λ = 5189 Å, screen at D = 200 cm, total width of 10 fringes = 2 cm. Find slit separation d. `[3 marks]`

#### Given:
- Wavelength: λ = 5189 Å = 5189 × 10⁻¹⁰ m = 5.189 × 10⁻⁷ m
- Distance to screen: D = 200 cm = 2 m
- Total width of 10 fringes = 2 cm

#### Fringe Width β

$$\beta = \frac{\text{Total width of 10 fringes}}{10} = \frac{2 \text{ cm}}{10} = 0.2 \text{ cm} = 2 \times 10^{-3} \text{ m}$$

#### Using the Fringe Width Formula

$$\beta = \frac{\lambda D}{d} \implies d = \frac{\lambda D}{\beta}$$

$$d = \frac{5.189 \times 10^{-7} \times 2}{2 \times 10^{-3}}$$

$$d = \frac{10.378 \times 10^{-7}}{2 \times 10^{-3}}$$

$$\boxed{d = 5.189 \times 10^{-4} \text{ m} \approx 0.519 \text{ mm}}$$

---

# Class Test 2 — Properties of Matter

## Set A (Surface Tension)

---

### Q1. What is surface tension and surface energy? Show that surface energy per unit area equals surface tension. `[3 marks]`

#### Surface Tension (T)

**Surface tension** is the property of a liquid surface by which it tends to contract to a minimum area, behaving like a stretched elastic membrane.

Mathematically, it is defined as the **force per unit length** acting tangentially along the surface:

$$T = \frac{F}{l} \quad \text{[N/m or J/m²]}$$

#### Surface Energy (E)

**Surface energy** is the **extra potential energy** possessed by the molecules on the surface compared to those in the interior, due to the net inward attractive force (cohesive forces).

$$E = T \times A \quad \text{[Joules]}$$

#### Proof: Surface Energy per Unit Area = Surface Tension

Consider a rectangular wire frame ABCD with a sliding wire PQ of length `l`. A soap film is formed on this frame.

- To stretch the film by a small distance `dx`, an external force `F` must be applied against the surface tension.
- Since the film has **two surfaces**, the total length along which T acts = 2l.

Force required:

$$F = T \times 2l$$

Work done to move PQ by dx:

$$dW = F \cdot dx = T \times 2l \times dx$$

Increase in area of film:

$$dA = 2l \times dx$$

Therefore, surface energy per unit area:

$$\frac{dW}{dA} = \frac{T \times 2l \times dx}{2l \times dx} = T$$

$$\boxed{\text{Surface Energy per unit area} = T \text{ (Surface Tension)}}$$

Hence proved. The SI unit of surface tension (N/m) = J/m² confirms this dimensional equivalence.

---

### Q2. Express the equation of surface tension of water using the capillarity rise method. `[4 marks]`

#### Setup

When a capillary tube of radius `r` is dipped in water (a liquid that wets glass), water rises to a height `h` due to surface tension.

Let:
- `T` = surface tension of liquid
- `θ` = contact angle (≈ 0° for water on glass)
- `ρ` = density of liquid
- `g` = acceleration due to gravity
- `r` = radius of capillary tube

#### Derivation

The upward force due to surface tension acts along the inner circumference of the tube, resolved vertically:

$$F_{up} = T \cos\theta \times 2\pi r$$

The weight of the liquid column (downward):

$$W = \pi r^2 h \rho g$$

At equilibrium, upward force = weight:

$$T \cos\theta \times 2\pi r = \pi r^2 h \rho g$$

$$\boxed{T = \frac{r h \rho g}{2 \cos\theta}}$$

For water on glass, θ ≈ 0°, so cos θ = 1:

$$T = \frac{r h \rho g}{2}$$

> **Note:** A small correction for the meniscus volume gives: $T = \frac{r \rho g}{2\cos\theta}\left(h + \frac{r}{3}\right)$

---

### Q3. U-tube capillary: diameters 0.6 cm and 1.2 cm, T = 7.2×10⁻² N/m, ρ = 10³ kg/m³. Find difference in levels. `[3 marks]`

#### Given:
- Diameter of tube 1: d₁ = 0.6 cm → r₁ = 0.3 cm = 3 × 10⁻³ m
- Diameter of tube 2: d₂ = 1.2 cm → r₂ = 0.6 cm = 6 × 10⁻³ m
- Surface tension: T = 7.2 × 10⁻² N/m
- Density: ρ = 10³ kg/m³
- g = 9.8 m/s², θ = 0° (water-glass)

#### Using Capillary Rise Formula

For each tube: $h = \frac{2T\cos\theta}{r\rho g}$

**Height in tube 1 (r₁ = 3×10⁻³ m):**

$$h_1 = \frac{2 \times 7.2 \times 10^{-2} \times 1}{3 \times 10^{-3} \times 10^3 \times 9.8} = \frac{0.144}{29.4} = 4.898 \times 10^{-3} \text{ m}$$

**Height in tube 2 (r₂ = 6×10⁻³ m):**

$$h_2 = \frac{2 \times 7.2 \times 10^{-2} \times 1}{6 \times 10^{-3} \times 10^3 \times 9.8} = \frac{0.144}{58.8} = 2.449 \times 10^{-3} \text{ m}$$

#### Difference in Levels:

$$\Delta h = h_1 - h_2 = 4.898 \times 10^{-3} - 2.449 \times 10^{-3}$$

$$\boxed{\Delta h \approx 2.45 \times 10^{-3} \text{ m} = 0.245 \text{ cm}}$$

---

## Set B (Elasticity)

---

### Q1. State and explain Hooke's Law of Elasticity. `[3 marks]`

#### Statement

> *"Within the elastic limit, the stress developed in a body is directly proportional to the strain produced in it."*

$$\text{Stress} \propto \text{Strain}$$

$$\frac{\text{Stress}}{\text{Strain}} = E = \text{constant (Modulus of Elasticity)}$$

#### Explanation of Terms

| Term | Definition | Formula | Unit |
|------|-----------|---------|------|
| **Stress** | Restoring force per unit area | σ = F/A | N/m² (Pascal) |
| **Strain** | Fractional deformation | ε = ΔL/L | Dimensionless |
| **Elastic Limit** | Maximum stress up to which Hooke's law holds | — | N/m² |

#### Stress-Strain Curve

```
Stress ↑
        |      * Fracture point
        |    *  (Ultimate strength)
        |  *
        | * ← Elastic limit
        |*
        |  ← Hooke's law region (linear)
        +------------------------→ Strain
```

- In the **linear (Hooke's) region**: $\sigma = E \cdot \varepsilon$
- Beyond the elastic limit, the material shows **plastic deformation**
- The slope of the linear region = **Young's Modulus (Y)**

#### Types of Elastic Moduli

1. **Young's Modulus (Y):** Longitudinal stress/longitudinal strain = $\frac{F/A}{\Delta L/L}$
2. **Bulk Modulus (K):** Volume stress/volume strain
3. **Rigidity/Shear Modulus (η):** Shearing stress/shearing strain

---

### Q2. Prove Y = 2η(1 + σ) for a homogeneous isotropic medium. `[4 marks]`

Where Y = Young's modulus, η = Rigidity modulus (shear modulus), σ = Poisson's ratio.

#### Proof

Consider a cube subjected to a **pure shear stress** τ. This is equivalent to a system of equal tensile and compressive stresses along the diagonal directions (at 45°).

**Step 1:** Under pure shear stress τ, the shear strain γ is:
$$\gamma = \frac{\tau}{\eta}$$

**Step 2:** Resolve the shear into principal stresses. Along the two diagonal directions:
- Tensile stress: +τ (along one diagonal)
- Compressive stress: −τ (along the other diagonal)

**Step 3:** The tensile strain along the diagonal due to the tensile stress +τ:

$$\varepsilon_1 = \frac{\tau}{Y}$$

The compressive stress −τ also contributes a tensile strain along the same direction (Poisson effect):

$$\varepsilon_2 = \sigma \cdot \frac{\tau}{Y}$$

Total diagonal strain:

$$\varepsilon_{diagonal} = \frac{\tau}{Y} + \sigma \frac{\tau}{Y} = \frac{\tau(1+\sigma)}{Y}$$

**Step 4:** Relate diagonal strain to shear strain. From geometry of a sheared square:

$$\gamma = 2\varepsilon_{diagonal}$$

$$\frac{\tau}{\eta} = 2 \cdot \frac{\tau(1+\sigma)}{Y}$$

**Step 5:** Cancel τ and rearrange:

$$\frac{1}{\eta} = \frac{2(1+\sigma)}{Y}$$

$$\boxed{Y = 2\eta(1 + \sigma)}$$

**Hence proved.** This relation connects Young's modulus, shear modulus and Poisson's ratio for any homogeneous isotropic elastic material.

---

### Q3. Calculate the work done in stretching a wire: A = 10⁻⁶ m², L = 1.5 m, extension x = 4×10⁻³ m, Y = 2×10¹¹ N/m². `[3 marks]`

#### Given:
- Cross-sectional area: A = 10⁻⁶ m²
- Original length: L = 1.5 m
- Extension: x = Δl = 4 × 10⁻³ m
- Young's modulus: Y = 2 × 10¹¹ N/m²

#### Method

The restoring force at extension `l` from the equilibrium is:

$$F = \frac{YA}{L} \cdot l$$

Work done in stretching the wire from 0 to x:

$$W = \int_0^x F \, dl = \int_0^x \frac{YA}{L} l \, dl = \frac{YA}{L} \cdot \frac{x^2}{2}$$

$$W = \frac{1}{2} \cdot \frac{YA}{L} \cdot x^2$$

#### Calculation:

$$W = \frac{1}{2} \times \frac{2 \times 10^{11} \times 10^{-6}}{1.5} \times (4 \times 10^{-3})^2$$

$$W = \frac{1}{2} \times \frac{2 \times 10^{5}}{1.5} \times 16 \times 10^{-6}$$

$$W = \frac{1}{2} \times 1.333 \times 10^{5} \times 16 \times 10^{-6}$$

$$W = \frac{1}{2} \times 2.133$$

$$\boxed{W \approx 1.067 \text{ J}}$$

---

# Practice Questions

## 🔬 Optics — Extra Practice

1. In Young's double slit experiment, the fringe width is 0.3 mm when the screen is at 1.5 m. If the slit separation is 2 mm, find the wavelength of light used.

2. In Newton's Rings experiment, the diameter of the 5th dark ring is 0.3 cm and the diameter of the 15th dark ring is 0.62 cm. Find the radius of curvature of the lens. (Hint: Use $R = \frac{D_m^2 - D_n^2}{4(m-n)\lambda}$)

3. Explain why two independent light sources cannot produce interference fringes.

4. What happens to the fringe width if:
   - The screen is moved farther away?
   - The slit separation is increased?
   - The wavelength of light is decreased?

5. Derive the expression for the diameter of the nth bright ring in Newton's Rings experiment.

6. A parallel beam of sodium light (λ = 5893 Å) is incident on a thin glass plate of μ = 1.5 such that the angle of refraction is 60°. Find the smallest thickness of the plate which will make it appear dark by reflection.

## 🌊 Surface Tension — Extra Practice

1. A soap bubble of radius 2 cm is formed. If the surface tension of soap solution is 0.04 N/m, find the excess pressure inside the bubble.

2. Two soap bubbles of radii 3 cm and 4 cm coalesce. Find the radius of the resulting bubble if the temperature remains constant.

3. Water rises to a height of 4 cm in a capillary tube of radius 0.05 cm. Calculate the surface tension of water. (ρ = 1000 kg/m³, g = 9.8 m/s²)

4. Define angle of contact. How does it vary for wetting and non-wetting liquids?

5. Explain why the surface tension of a liquid decreases with increase in temperature.

## 🔩 Elasticity — Extra Practice

1. A steel wire 2 m long and 1 mm in diameter is stretched by a force of 50 N. Find the extension. (Y = 2×10¹¹ N/m²)

2. A rubber ball of bulk modulus K = 9.8×10⁸ Pa is taken to a depth of 100 m in water. Find the fractional decrease in volume. (ρ_water = 10³ kg/m³)

3. Two wires, one of steel and one of copper, have the same length and same cross-section. If the same force stretches them, compare their extensions. (Y_steel = 2×10¹¹ N/m², Y_copper = 1.2×10¹¹ N/m²)

4. Prove the relation: $K = \frac{Y}{3(1-2\sigma)}$

5. Show that the work done per unit volume in stretching a wire = $\frac{1}{2} \times \text{stress} \times \text{strain}$

---

# References

> Use these resources to deepen your understanding:

## 📘 Textbooks

| Title | Author(s) | Publisher | Notes |
|-------|-----------|-----------|-------|
| *Concepts of Modern Physics* | Arthur Beiser | McGraw-Hill | Great for optics fundamentals |
| *University Physics* | Young & Freedman | Pearson | Vol. 1 covers elasticity & surface tension; Vol. 2 covers optics |
| *Optics* | Ajoy Ghatak | McGraw-Hill | Excellent for interference derivations |
| *Engineering Physics* | S.O. Pillai | New Age International | Tailored for engineering students |
| *Properties of Matter* | D.S. Mathur | S. Chand & Co. | Detailed coverage of elasticity and surface tension |
| *A Text Book of Optics* | Brijlal & Subramanyam | S. Chand | Standard for BSc/BTech interference topics |

## 🌐 Online Resources

| Resource | URL | Topics |
|----------|-----|--------|
| HyperPhysics — Interference | http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/interf.html | Interference, Young's experiment |
| HyperPhysics — Surface Tension | http://hyperphysics.phy-astr.gsu.edu/hbase/surten.html | Surface tension, capillarity |
| HyperPhysics — Elasticity | http://hyperphysics.phy-astr.gsu.edu/hbase/permot2.html | Hooke's Law, elastic moduli |
| NPTEL Lectures — Engineering Physics | https://nptel.ac.in/courses/115/105/115105110/ | Full course video lectures |
| Khan Academy — Waves & Optics | https://www.khanacademy.org/science/physics | Beginner-friendly explanations |
| MIT OpenCourseWare — 8.03 | https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ | Advanced wave optics |
| PhET Simulations | https://phet.colorado.edu | Interactive simulations for interference |

## 📄 Key Formulae Summary

### Interference
| Formula | Description |
|---------|-------------|
| $\beta = \frac{\lambda D}{d}$ | Fringe width in Young's DSE |
| $y_n^{bright} = \frac{n\lambda D}{d}$ | Position of nth bright fringe |
| $y_n^{dark} = \frac{(2n-1)\lambda D}{2d}$ | Position of nth dark fringe |
| $D_n^2 = 4nR\lambda$ | Diameter of nth dark Newton's ring |
| $t = \frac{n\lambda}{2}$ | Thickness at nth dark ring |

### Surface Tension
| Formula | Description |
|---------|-------------|
| $T = \frac{F}{l}$ | Definition of surface tension |
| $h = \frac{2T\cos\theta}{r\rho g}$ | Capillary rise |
| $\Delta P = \frac{4T}{r}$ | Excess pressure in soap bubble |
| $\Delta P = \frac{2T}{r}$ | Excess pressure in liquid drop |

### Elasticity
| Formula | Description |
|---------|-------------|
| $Y = \frac{FL}{A\Delta L}$ | Young's Modulus |
| $Y = 2\eta(1+\sigma)$ | Relation between Y, η, σ |
| $Y = 3K(1-2\sigma)$ | Relation between Y, K, σ |
| $W = \frac{1}{2}\frac{YA}{L}\Delta L^2$ | Work done in stretching |
| $w = \frac{1}{2}\times\text{stress}\times\text{strain}$ | Work done per unit volume |

---

*📝 Prepared for PHY101 exam revision | Gopalganj Textile Engineering College*  
*Last updated: 2026 | Feel free to open a PR to add more questions!*
