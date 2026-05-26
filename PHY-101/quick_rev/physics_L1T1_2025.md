# Bangladesh University of Textiles
## Physics-I (PHY 101) — Final Examination 2025
### Complete Solutions

---

# PART A

---

## Question 1

### (a) What is fluid? Explain the types of Flows in a Pipe.

**Fluid:** A fluid is any substance that cannot resist shear stress and continuously deforms (flows) when a shear force is applied. Liquids and gases are both fluids.

**Types of Flow in a Pipe:**

1. **Laminar Flow (Streamline Flow):**
   - Fluid particles move in parallel layers (streamlines) without mixing.
   - Orderly, smooth flow.
   - Occurs at low velocities.
   - Reynolds number: **Re < 2000**
   - Velocity profile is parabolic.

2. **Turbulent Flow:**
   - Fluid particles move in irregular, chaotic paths with mixing between layers.
   - Occurs at high velocities.
   - Reynolds number: **Re > 4000**
   - Higher energy loss due to eddies and vortices.

3. **Transitional Flow:**
   - Flow is neither fully laminar nor fully turbulent.
   - Reynolds number: **2000 < Re < 4000**

**Reynolds Number:**
$$Re = \frac{\rho v D}{\eta}$$
where ρ = density, v = velocity, D = diameter, η = viscosity

---

### (b) Derive Bernoulli's Equation with Necessary Assumptions

**Assumptions:**
- Flow is steady (streamline).
- Fluid is incompressible (density = constant).
- Fluid is non-viscous (ideal fluid).
- Flow is irrotational.
- No energy loss due to friction.

**Derivation:**

Consider fluid flowing through a pipe from point 1 (cross-section A₁, height h₁, pressure P₁, velocity v₁) to point 2 (cross-section A₂, height h₂, pressure P₂, velocity v₂).

**Work done by pressure forces:**
$$W_{pressure} = P_1 A_1 \Delta x_1 - P_2 A_2 \Delta x_2 = (P_1 - P_2)\Delta V$$

**Work done against gravity:**
$$W_{gravity} = -\rho \Delta V \cdot g(h_2 - h_1)$$

**Change in kinetic energy:**
$$\Delta KE = \frac{1}{2}\rho \Delta V (v_2^2 - v_1^2)$$

**Applying Work-Energy Theorem:**
$$(P_1 - P_2)\Delta V - \rho g \Delta V(h_2 - h_1) = \frac{1}{2}\rho \Delta V(v_2^2 - v_1^2)$$

Rearranging:

$$\boxed{P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2 = \text{constant}}$$

This is **Bernoulli's Equation**.

---

### (c) Pressure Difference in Inclined Pipe

**Given:**
- Length of pipe, L = 5 m
- Angle with horizontal, θ = 15°
- Diameter at lower (smaller) end, d₁ = 80 mm = 0.08 m
- Diameter at upper (larger) end, d₂ = 240 mm = 0.24 m
- Velocity at lower end, v₁ = 1 m/s
- ρ_water = 1000 kg/m³, g = 9.8 m/s²

**Step 1: Find velocity at upper end using continuity equation:**
$$A_1 v_1 = A_2 v_2$$
$$\frac{\pi d_1^2}{4} v_1 = \frac{\pi d_2^2}{4} v_2$$
$$v_2 = v_1 \left(\frac{d_1}{d_2}\right)^2 = 1 \times \left(\frac{0.08}{0.24}\right)^2 = 1 \times \frac{1}{9} = 0.111 \text{ m/s}$$

**Step 2: Find height difference:**
$$h_2 - h_1 = L\sin\theta = 5 \times \sin 15° = 5 \times 0.2588 = 1.294 \text{ m}$$

**Step 3: Apply Bernoulli's equation:**
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$

$$P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2) + \rho g(h_2 - h_1)$$

$$P_1 - P_2 = \frac{1}{2}(1000)(0.111^2 - 1^2) + (1000)(9.8)(1.294)$$

$$P_1 - P_2 = \frac{1000}{2}(0.01232 - 1) + 12681.2$$

$$P_1 - P_2 = 500 \times (-0.9877) + 12681.2$$

$$P_1 - P_2 = -493.85 + 12681.2$$

$$\boxed{P_1 - P_2 \approx 12187 \text{ Pa} \approx 12.19 \text{ kPa}}$$

The pressure at the lower (smaller) end is higher than at the upper end.

---

## Question 2

### (a) Define Viscosity. Explain Newton's Law of Viscosity.

**Viscosity:** Viscosity is the property of a fluid that resists the relative motion between adjacent layers of the fluid. It is a measure of internal friction in the fluid. SI unit: **Pascal-second (Pa·s)** or **Ns/m²**.

**Newton's Law of Viscosity:**
When two adjacent layers of a fluid move with different velocities, a tangential (shear) force exists between them. Newton's law states:

The shear stress (τ) between adjacent fluid layers is directly proportional to the velocity gradient (dv/dy) perpendicular to the flow direction:

$$\tau = \eta \frac{dv}{dy}$$

where:
- τ = shear stress (N/m²)
- η = coefficient of dynamic viscosity (Pa·s)
- dv/dy = velocity gradient (s⁻¹)

Fluids that obey this law are called **Newtonian fluids** (e.g., water, air, oil).

---

### (b) Critical Velocity & Derive Poiseuille's Equation

**Critical Velocity:**
Critical velocity is the velocity of fluid flow below which the flow is laminar and above which it becomes turbulent. It depends on the nature of the fluid and the dimensions of the pipe:

$$v_c = \frac{\eta \cdot Re}{\rho D}$$

**Derivation of Poiseuille's Equation:**

Consider fluid flowing through a horizontal cylindrical pipe of radius R and length L under a pressure difference (P₁ - P₂).

Consider a coaxial cylindrical shell of radius r and thickness dr:
- Shear force on this shell: $F = \eta \cdot 2\pi r L \cdot \frac{dv}{dr}$
- Driving pressure force: $F = (P_1 - P_2)\pi r^2$

Equating and integrating from r to R (with v = 0 at r = R):

$$v(r) = \frac{(P_1-P_2)}{4\eta L}(R^2 - r^2)$$

Volume flow rate through the shell element dQ = v · 2πr dr:

$$Q = \int_0^R \frac{(P_1-P_2)}{4\eta L}(R^2-r^2) \cdot 2\pi r\, dr$$

$$Q = \frac{\pi(P_1-P_2)}{2\eta L} \int_0^R (R^2 r - r^3)\,dr$$

$$Q = \frac{\pi(P_1-P_2)}{2\eta L} \left[\frac{R^4}{2} - \frac{R^4}{4}\right] = \frac{\pi(P_1-P_2)R^4}{8\eta L}$$

$$\boxed{Q = \frac{\pi (P_1 - P_2) R^4}{8 \eta L}}$$

This is **Poiseuille's equation**.

---

### (c) Horizontal Force to Move Metal Plate

**Given:**
- Area of plate, A = 4 m²
- Velocity, v = 3 m/s
- Oil layer thickness, y = 2×10⁻³ m
- Coefficient of viscosity, η = 2 Ns/m²

**Using Newton's Law of Viscosity:**
$$F = \eta A \frac{dv}{dy}$$

$$F = 2 \times 4 \times \frac{3}{2 \times 10^{-3}}$$

$$F = 8 \times 1500$$

$$\boxed{F = 12000 \text{ N} = 12 \text{ kN}}$$

---

## Question 3

### (a) Poisson's Ratio — Range Between -1 and 1/2

**Definition:** Poisson's ratio (σ) is defined as the ratio of lateral strain to longitudinal strain:
$$\sigma = -\frac{\text{Lateral Strain}}{\text{Longitudinal Strain}} = -\frac{\varepsilon_{lateral}}{\varepsilon_{longitudinal}}$$

**Proof that -1 ≤ σ ≤ 1/2:**

For an isotropic elastic material, the bulk modulus K must be positive (material compresses under pressure):
$$K = \frac{Y}{3(1-2\sigma)} > 0 \implies \sigma < \frac{1}{2}$$

The shear modulus G must also be positive:
$$G = \frac{Y}{2(1+\sigma)} > 0 \implies \sigma > -1$$

Therefore: **-1 ≤ σ ≤ 1/2**

In practice, most materials have σ between 0 and 0.5.

---

### (b) Derive Y = 2η(1 + σ)

**Symbols:**
- Y = Young's modulus
- η = Modulus of rigidity (shear modulus)
- σ = Poisson's ratio

**Derivation:**

Consider a cube subjected to a pure shear stress τ along one face. This is equivalent to equal and opposite principal stresses of magnitude τ along diagonals at 45°.

Strain along the tensile diagonal:
$$\varepsilon_1 = \frac{\tau}{Y} - \sigma\left(-\frac{\tau}{Y}\right) = \frac{\tau(1+\sigma)}{Y}$$

From the definition of shear modulus η:
$$\text{Shear strain} = \frac{\tau}{\eta}$$

The shear strain is related to the diagonal strains:
$$\frac{\tau}{\eta} = 2\varepsilon_1 = \frac{2\tau(1+\sigma)}{Y}$$

$$\frac{1}{\eta} = \frac{2(1+\sigma)}{Y}$$

$$\boxed{Y = 2\eta(1+\sigma)}$$

---

### (c) Maximum Energy per Unit Volume in Metal

**Given:**
- Young's modulus, Y = 2×10¹¹ N/m²
- Breaking stress, σ_b = 1.078×10⁸ N/m²

**Energy stored per unit volume (strain energy density):**
$$u = \frac{\sigma^2}{2Y}$$

At maximum stretch (breaking stress):
$$u = \frac{(1.078 \times 10^8)^2}{2 \times 2 \times 10^{11}}$$

$$u = \frac{1.162 \times 10^{16}}{4 \times 10^{11}}$$

$$\boxed{u = 2.9 \times 10^4 \text{ J/m}^3 = 29000 \text{ J/m}^3}$$

---

## Question 4

### (a) Angle of Contact & Surface Tension = Surface Energy

**Angle of Contact:** The angle of contact (θ) is the angle measured through the liquid between the tangent to the liquid surface at the point of contact with the solid wall and the solid surface itself.
- θ < 90°: Liquid wets the surface (e.g., water in glass)
- θ > 90°: Liquid does not wet the surface (e.g., mercury in glass)

**Proof that Surface Tension = Surface Energy:**

Consider a rectangular frame with a movable wire. A soap film of length L is stretched by moving the wire a distance dx.

Work done against surface tension:
$$W = F \cdot dx = T \cdot 2L \cdot dx \quad (\text{factor 2 for two surfaces})$$

Increase in surface area:
$$\Delta A = 2L \cdot dx$$

Surface energy per unit area:
$$E = \frac{W}{\Delta A} = \frac{T \cdot 2L \cdot dx}{2L \cdot dx} = T$$

$$\boxed{T = \text{Surface Energy per unit area}}$$

Hence, surface tension equals surface energy per unit area.

---

### (b) Capillary Rise Formula

Consider a capillary tube of radius r dipped in a liquid of surface tension T, density ρ, and angle of contact θ.

The meniscus is approximately spherical with radius of curvature R = r/cosθ.

**Upward force** due to surface tension along the contact line:
$$F_{up} = T \cos\theta \cdot 2\pi r$$

**Weight of liquid column of height h:**
$$W = \rho g \pi r^2 h$$

At equilibrium:
$$T\cos\theta \cdot 2\pi r = \rho g \pi r^2 h$$

$$\boxed{h = \frac{2T\cos\theta}{\rho g r}}$$

---

### (c) Height of Liquid in Capillary Tube

**Given:**
- Diameter = 0.6 mm → radius r = 0.3 mm = 3×10⁻⁴ m
- Surface tension T = 35 dyne/cm = 35×10⁻³ N/m
- Specific gravity = 0.8 → ρ = 800 kg/m³
- Contact angle θ = 0° → cosθ = 1
- g = 9.8 m/s²

**Using the capillary rise formula:**
$$h = \frac{2T\cos\theta}{\rho g r}$$

$$h = \frac{2 \times 35 \times 10^{-3} \times 1}{800 \times 9.8 \times 3 \times 10^{-4}}$$

$$h = \frac{70 \times 10^{-3}}{800 \times 9.8 \times 3 \times 10^{-4}}$$

$$h = \frac{0.07}{0.2352}$$

$$\boxed{h \approx 0.2976 \text{ m} \approx 29.8 \text{ cm}}$$

---

# PART B

---

## Question 5

### (a) Moment of Inertia of a Flywheel

**Moment of Inertia:** The moment of inertia (I) of a body about an axis is defined as the sum of the products of the mass of each particle and the square of its distance from the axis:
$$I = \sum m_i r_i^2 = \int r^2 \, dm$$

It is the rotational analogue of mass. SI unit: **kg·m²**

**Flywheel — Moment of Inertia:**

A flywheel consists of:
- A heavy rim of mass M₁, radius R
- A thin hub of mass M₂, radius r
- Spokes connecting them

**Moment of inertia of rim** (thin ring): $I_{rim} = M_1 R^2$

**Moment of inertia of hub** (solid cylinder): $I_{hub} = \frac{1}{2}M_2 r^2$

**For each spoke** (thin rod of mass m, length L rotating about one end):
$$I_{spoke} = \frac{1}{3}m L^2 \quad (L = R - r)$$

**Total:**
$$I_{total} = M_1 R^2 + \frac{1}{2}M_2 r^2 + n \cdot \frac{1}{3}m(R-r)^2$$

where n = number of spokes.

---

### (b) Types of Elasticity

1. **Young's Modulus (Y) — Longitudinal Elasticity:**
   - Ratio of longitudinal stress to longitudinal strain.
   $$Y = \frac{\text{Tensile Stress}}{\text{Tensile Strain}} = \frac{F/A}{\Delta L/L}$$

2. **Bulk Modulus (K) — Volume Elasticity:**
   - Ratio of volumetric (hydrostatic) stress to volumetric strain.
   $$K = -\frac{\Delta P}{\Delta V / V}$$

3. **Modulus of Rigidity (η) — Shear Elasticity:**
   - Ratio of shear stress to shear strain.
   $$\eta = \frac{\tau}{\theta} = \frac{F/A}{\phi}$$

4. **Poisson's Ratio (σ):**
   - Ratio of lateral strain to longitudinal strain (dimensionless).

---

### (c) Moment of Inertia of a Solid Sphere

Consider a solid sphere of mass M and radius R, rotating about a diameter.

Divide the sphere into thin discs perpendicular to the axis of rotation. A disc at distance x from the centre has:
- Radius: $a = \sqrt{R^2 - x^2}$
- Thickness: dx
- Mass: $dm = \rho \pi a^2 \, dx = \rho \pi (R^2 - x^2) \, dx$

Moment of inertia of this disc about the axis:
$$dI = \frac{1}{2} a^2 \, dm = \frac{1}{2}\rho\pi(R^2 - x^2)^2 \, dx$$

Total moment of inertia:
$$I = \int_{-R}^{R} \frac{1}{2}\rho\pi(R^2-x^2)^2\,dx = \rho\pi \int_0^R (R^2-x^2)^2\,dx$$

$$I = \rho\pi \int_0^R (R^4 - 2R^2x^2 + x^4)\,dx$$

$$I = \rho\pi \left[R^4 x - \frac{2R^2 x^3}{3} + \frac{x^5}{5}\right]_0^R$$

$$I = \rho\pi R^5\left(1 - \frac{2}{3} + \frac{1}{5}\right) = \rho\pi R^5 \cdot \frac{8}{15}$$

Since total mass $M = \frac{4}{3}\pi R^3 \rho$, we get $\rho = \frac{3M}{4\pi R^3}$:

$$I = \frac{3M}{4\pi R^3} \cdot \pi R^5 \cdot \frac{8}{15}$$

$$\boxed{I = \frac{2}{5}MR^2}$$

---

## Question 6

### (a) Wave and Wave Front — Importance for Interference

**Wave:** A wave is a disturbance that travels through a medium transferring energy without the bulk transfer of matter. Characterized by wavelength (λ), frequency (f), amplitude (A), and speed (v = fλ).

**Wave Front:** A wavefront is the locus of all points in the medium that are in the same phase of vibration at a given instant of time. Types:
- **Spherical wavefront** — from a point source
- **Cylindrical wavefront** — from a line source
- **Plane wavefront** — at a large distance from the source

**Importance for Interference:**
- Interference requires two coherent sources (same frequency, constant phase difference).
- Wavefronts help identify regions of constructive and destructive interference.
- Each point on a wavefront acts as a secondary source (Huygens' principle), producing new wavelets whose superposition determines the interference pattern.
- Flat wavefronts make analysis of path differences simpler and more predictable.

---

### (b) Huygens' Principle for Interference

**Huygens' Principle states:**
1. Every point on a wavefront acts as a new secondary source of spherical wavelets.
2. The new wavefront at a later time is the common tangent (envelope) to all these secondary wavelets.

**Application to Interference:**
- When two coherent wavefronts overlap, the secondary wavelets from each superpose.
- At points where the path difference is an integral multiple of λ (i.e., nλ): **Constructive interference** → bright fringe.
- At points where the path difference is an odd multiple of λ/2 (i.e., (2n-1)λ/2): **Destructive interference** → dark fringe.
- This explains the alternating bright and dark fringe pattern in Young's Double Slit Experiment.

---

### (c) Wavelength of Light by Fresnel's Biprism Method

**Setup:**
- A narrow slit S is illuminated by monochromatic light.
- A biprism (two prisms base-to-base) refracts light from S into two virtual coherent sources S₁ and S₂.
- The two beams overlap on a screen, producing interference fringes.

**Fringe Width:**
$$\beta = \frac{\lambda D}{d}$$
where D = distance from slit to screen, d = distance between virtual sources S₁S₂.

**Measurement of d (separation of virtual sources):**
Using a convex lens placed between biprism and screen in two positions, the separation d is found from:
$$d = \sqrt{d_1 \cdot d_2}$$
where d₁ and d₂ are image separations for the two lens positions.

**Wavelength:**
$$\boxed{\lambda = \frac{\beta \cdot d}{D}}$$

By measuring β (fringe width with micrometer eyepiece), D (with a metre scale), and d, the wavelength is determined accurately.

---

## Question 7

### (a) Distinguish Between Fresnel and Fraunhofer Diffraction

| Feature | Fresnel Diffraction | Fraunhofer Diffraction |
|---|---|---|
| Source distance | Finite (near field) | Infinite (far field) |
| Screen distance | Finite | Infinite |
| Wavefront | Spherical or cylindrical | Plane |
| Lenses needed | Not required | Required (to focus parallel rays) |
| Mathematical treatment | Complex (uses Fresnel zones) | Simpler |
| Example | Diffraction by a straight edge | Diffraction grating pattern |

---

### (b) Resolving Power of a Plane Diffraction Grating

**Resolving Power (R):** The ability of a grating to separate two spectral lines of nearly equal wavelengths λ and λ+dλ:
$$R = \frac{\lambda}{d\lambda}$$

**Derivation:**

For a diffraction grating with N slits and grating equation:
$$d\sin\theta = n\lambda$$

The principal maximum for wavelength λ at order n occurs at angle θ, and the next minimum occurs when one extra path difference of λ/N is introduced. By Rayleigh's criterion, two wavelengths are just resolved when the maximum of one falls on the first minimum of the other.

The principal maximum for λ+dλ:
$$d\sin\theta' = n(\lambda + d\lambda)$$

For resolution:
$$nN\,d\lambda = \lambda$$

$$\boxed{R = \frac{\lambda}{d\lambda} = nN}$$

where n = order of diffraction and N = total number of rulings on the grating.

---

### (c) Wavelength of Light from Diffraction Grating

**Given:**
- Grating: 500 lines/cm → grating element d = 1/500 cm = 2×10⁻³ cm = 2×10⁻⁵ m
- Order n = 2
- Diffraction angle θ = 30°

**Using grating equation:**
$$d\sin\theta = n\lambda$$

$$\lambda = \frac{d\sin\theta}{n} = \frac{2 \times 10^{-5} \times \sin 30°}{2}$$

$$\lambda = \frac{2 \times 10^{-5} \times 0.5}{2}$$

$$\lambda = \frac{1 \times 10^{-5}}{2}$$

$$\boxed{\lambda = 5 \times 10^{-6} \text{ m} = 5000 \text{ Å} = 500 \text{ nm}}$$

This wavelength corresponds to **green light** in the visible spectrum.

---

## Question 8

### (a) Specific Rotation

**Specific Rotation** is defined as the angle of rotation of the plane of polarization produced by a solution of length 1 decimetre (dm) and concentration 1 g/cm³ (or 1 g/mL), measured at a specific temperature and wavelength:

$$[\alpha]_\lambda^T = \frac{\theta}{l \cdot c}$$

where:
- θ = observed angle of rotation (degrees)
- l = length of solution in decimetres (dm)
- c = concentration in g/cm³

SI unit: **degree·dm⁻¹·(g/cm³)⁻¹**

---

### (b) Brewster's Law

**Statement:** When unpolarized light is incident on a plane surface at a specific angle (the polarizing angle or Brewster's angle iB), the reflected light is completely plane polarized, with the electric field vector perpendicular to the plane of incidence.

**Brewster's Law:**
$$\tan i_B = n = \frac{n_2}{n_1}$$

where n is the refractive index of the denser medium with respect to the rarer medium, and iB is Brewster's angle.

**Key feature:** At Brewster's angle, the reflected and refracted rays are mutually perpendicular:
$$i_B + r = 90°$$

---

### (c) Nicol Prism — Construction and Working Principle

**Construction:**
- A Nicol prism is made from a calcite (Iceland spar) crystal, which is a doubly refracting (birefringent) material.
- The crystal is cut at an angle of 68° to its principal axis and then cut diagonally along a specific plane.
- The two halves are cemented together with **Canada balsam** (refractive index n = 1.55).
- Refractive index of calcite: ordinary ray (O-ray) nₒ = 1.658, extraordinary ray (E-ray) nₑ = 1.486

**Working Principle:**
- When unpolarized light enters the Nicol prism, it splits into two refracted rays due to double refraction:
  - **Ordinary ray (O-ray):** vibrates perpendicular to the principal section; nₒ = 1.658
  - **Extraordinary ray (E-ray):** vibrates in the principal section; nₑ = 1.486
- The O-ray strikes the Canada balsam layer at an angle greater than the critical angle for the O-ray (because nₒ > n_balsam = 1.55), so it undergoes **total internal reflection** and is absorbed by blackened sides.
- The E-ray has nₑ < n_balsam, so it passes through the Canada balsam and emerges as completely **plane-polarized light**.
- The emerging beam is plane polarized and vibrates in the principal section.

---

### (d) Angle of Refraction at Polarizing Angle

**Given:**
- Refractive index of liquid, n = 1.33
- Light is incident at the polarizing angle (Brewster's angle)

**Step 1: Find Brewster's angle:**
$$\tan i_B = n = 1.33$$
$$i_B = \tan^{-1}(1.33) = 53.06°$$

**Step 2: Find angle of refraction:**
At Brewster's angle, the reflected and refracted rays are perpendicular:
$$i_B + r = 90°$$
$$r = 90° - i_B = 90° - 53.06°$$

$$\boxed{r = 36.94° \approx 37°}$$

**Verification using Snell's Law:**
$$n = \frac{\sin i_B}{\sin r} = \frac{\sin 53.06°}{\sin 36.94°} = \frac{0.7997}{0.6008} \approx 1.33 ✓$$

---

*End of Solutions*

> **Note:** All solutions are based on standard physics principles. Numerical answers may vary slightly depending on the values used for physical constants (g, etc.).
