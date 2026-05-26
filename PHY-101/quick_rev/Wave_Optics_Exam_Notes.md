# 📡 Wave Optics — Exam Notes (2017–2023)

---

## 1. KEY DEFINITIONS

| Term | Definition |
|------|-----------|
| **Wavefront** | Locus of all particles vibrating in the same phase at the same instant |
| **Coherent Sources** | Two sources emitting light of same frequency, same wavelength, and constant phase difference |
| **Interference** | Redistribution of light energy due to superposition of two coherent waves |
| **Constructive Interference** | Crest meets crest → maximum intensity (bright fringe) |
| **Destructive Interference** | Crest meets trough → zero intensity (dark fringe) |
| **Thin Film** | An optical medium whose thickness is comparable to the wavelength of light |
| **Newton's Ring** | Circular interference fringes formed between a plano-convex lens and flat glass plate |
| **Biprism (Fresnel)** | A prism with apex angle nearly 180° that splits a single source into two virtual coherent sources |

---

## 2. HUYGENS' PRINCIPLE

- Every point on a wavefront is a source of secondary wavelets.
- Secondary wavelets spread in all directions with the speed of light.
- New wavefront = envelope of all secondary wavelets.

**Snell's Law derivation (Huygens):**
- For incident wavefront hitting boundary: `sin i / sin r = v₁/v₂ = n₂/n₁`
- Where `n = c/v` (refractive index)

---

## 3. INTERFERENCE — THEORY & CONDITIONS

### Conditions for Sustained Interference:
1. Sources must be **coherent** (same frequency, constant phase difference)
2. Sources must be **monochromatic**
3. Amplitudes should be equal (for maximum contrast)
4. Sources must be very close to each other

### Path Difference & Phase Difference:
$$\Delta\phi = \frac{2\pi}{\lambda} \times \Delta x$$

- **Constructive:** Δx = nλ → Phase diff = 2nπ
- **Destructive:** Δx = (2n−1)λ/2 → Phase diff = (2n−1)π

### Intensity Formula:
$$I = 4a^2\cos^2\!\left(\frac{\delta}{2}\right)$$

- **I_max = 4a²** (when δ = 2nπ)
- **I_min = 0** (when δ = (2n−1)π)

---

## 4. YOUNG'S DOUBLE SLIT EXPERIMENT (YDSE)

```
S₁ }         Screen
    }  ← D →  |
S₂ }          |
 ↕d            |
```

### Fringe Width:
$$\boxed{\beta = \frac{\lambda D}{d}}$$

- λ = wavelength, D = slit-to-screen distance, d = slit separation

### Position of Bright Fringes:
$$x_n = \frac{n\lambda D}{d} \quad (n = 0, 1, 2, ...)$$

### Position of Dark Fringes:
$$x_n = \frac{(2n-1)\lambda D}{2d}$$

### Distance between any bright & dark fringe = β/2
**Proof:**
- nth bright: xₙ = nλD/d
- nth dark: xₙ' = (2n−1)λD/2d
- Distance between consecutive bright-dark = β/2 = λD/2d ✓
- **Distance between any two consecutive bright (or dark) = β = λD/d** ✓

---

## 5. NEWTON'S RINGS

### Setup:
Plano-convex lens (radius R) placed on flat glass → air wedge forms → circular rings in reflected light.

### Why center is dark (reflected light):
At center, air film thickness t = 0.
- Ray reflected from bottom of lens: no phase change
- Ray reflected from top of flat glass: phase change of π (½λ path difference)
- Net path difference = λ/2 → **destructive → dark center**

### Geometry:
For air film of thickness `t` at radius `r`:
$$r^2 = 2Rt \quad \Rightarrow \quad t = \frac{r^2}{2R} = \frac{D^2}{8R}$$

### Conditions (reflected light):
| Ring | Condition | Formula |
|------|-----------|---------|
| Dark | 2t = nλ | **Dₙ² = 4nλR** |
| Bright | 2t = (2n−1)λ/2 | **Dₙ² = (2n−1)2λR** |

### Wavelength by Newton's Rings:
$$\boxed{\lambda = \frac{D_n^2 - D_m^2}{4R(n-m)}}$$

### Air film thickness:
$$t = \frac{D_n^2}{8R} \quad \text{or} \quad t_n = \frac{n\lambda}{2}$$

---

## 6. FRESNEL BIPRISM

- Single slit S → Biprism splits into two virtual sources S₁ and S₂
- S₁S₂ = d (separation of virtual sources)
- If slit-to-biprism = a, biprism-to-eyepiece = b:

$$D = a + b$$
$$\beta = \frac{\lambda D}{d} = \frac{\lambda(a+b)}{d}$$

### Finding d:
Using conjugate position method with convex lens:
$$d = \sqrt{d_1 \times d_2}$$
(d₁, d₂ are image separations in two lens positions)

---

## 7. THIN FILM INTERFERENCE

For film of thickness `t`, refractive index `µ`, angle of refraction `r`:

| Reflected Light | Condition |
|----------------|-----------|
| Dark (destructive) | 2µt cos r = nλ |
| Bright (constructive) | 2µt cos r = (2n−1)λ/2 |

For transmitted light: conditions reverse.

---

## ✅ ALL NUMERICALS — FULLY SOLVED

---

### N1 — Newton's Rings: Find R and t
> **2023(c) / 2019(c) / 2017(c)**
> λ = 5.9×10⁻⁵ cm, D₁₀ (dark) = 0.5 cm, n = 10. Find R and t.

**Formula:** Dₙ² = 4nλR

$$R = \frac{D_{10}^2}{4 \times 10 \times \lambda} = \frac{(0.5)^2}{40 \times 5.9 \times 10^{-5}}$$

$$R = \frac{0.25}{2.36 \times 10^{-3}} = \boxed{105.9 \text{ cm} \approx 106 \text{ cm}}$$

**Thickness:** 2t = nλ

$$t = \frac{n\lambda}{2} = \frac{10 \times 5.9 \times 10^{-5}}{2} = \boxed{2.95 \times 10^{-4} \text{ cm}}$$

---

### N2 — YDSE: Find Slit Separation
> **2022(d) / 2020(d)**
> λ = 5100 Å, D = 200 cm, 10β = 2 cm. Find d.

$$\beta = \frac{2}{10} = 0.2 \text{ cm} = 2 \times 10^{-3} \text{ m}$$

$$\lambda = 5100 \times 10^{-10} \text{ m} = 5.1 \times 10^{-7} \text{ m}, \quad D = 2 \text{ m}$$

$$d = \frac{\lambda D}{\beta} = \frac{5.1 \times 10^{-7} \times 2}{2 \times 10^{-3}} = \boxed{5.1 \times 10^{-4} \text{ m} = 0.51 \text{ mm}}$$

---

### N3 — YDSE Fringe Width
> **2021(c)**
> d = 0.8 mm, D = 1 m, λ = 5890×10⁻¹⁰ m. Find β.

$$\beta = \frac{\lambda D}{d} = \frac{5890 \times 10^{-10} \times 1}{0.8 \times 10^{-3}} = \boxed{7.36 \times 10^{-4} \text{ m} \approx 0.74 \text{ mm}}$$

---

### N4 — Newton's Rings: Find λ
> **2021(c)**
> D₁₅ = 0.59 cm, D₅ = 0.336 cm, R = 100 cm. Find λ.

$$\lambda = \frac{D_{15}^2 - D_5^2}{4R(15-5)}$$

$$= \frac{(0.59)^2 - (0.336)^2}{4 \times 100 \times 10} = \frac{0.3481 - 0.1129}{4000}$$

$$= \frac{0.2352}{4000} = 5.88 \times 10^{-5} \text{ cm} = \boxed{5880 \text{ Å}}$$

---

### N5 — YDSE (D = 20 cm): Find Slit Separation
> **2019(d)**
> λ = 5100 Å, D = 20 cm = 0.2 m, 10β = 2 cm → β = 0.2 cm = 2×10⁻³ m

$$d = \frac{\lambda D}{\beta} = \frac{5.1 \times 10^{-7} \times 0.2}{2 \times 10^{-3}} = \boxed{5.1 \times 10^{-5} \text{ m} = 0.051 \text{ mm}}$$

---

### N6 — Fresnel Biprism: Fringe Width
> **2019(c)**
> Slit to biprism = 5 cm, λ = 5890 Å, d = 0.05 cm, eyepiece at 75 cm from biprism.

$$D = 5 + 75 = 80 \text{ cm}$$

$$\beta = \frac{\lambda D}{d} = \frac{5890 \times 10^{-8} \times 80}{0.05}$$

$$= \frac{4712 \times 10^{-6}}{0.05} = \boxed{9.42 \times 10^{-2} \text{ cm} \approx 0.094 \text{ cm}}$$

---

### N7 — Sodium Lamp: Find Slit Separation
> **2021(7d) / 2018(8d)**
> λ = 589 nm, D = 0.8 m, β = 0.35 cm. Find d.

$$d = \frac{\lambda D}{\beta} = \frac{589 \times 10^{-9} \times 0.8}{0.35 \times 10^{-2}}$$

$$= \frac{4.712 \times 10^{-7}}{3.5 \times 10^{-3}} = \boxed{1.35 \times 10^{-4} \text{ m} \approx 0.135 \text{ mm}}$$

---

### N8 — YDSE: Find Wavelength
> **2018(5d)**
> d = 0.18 mm, D = 90 cm, 3rd bright fringe at 8.1 mm from center.

$$x_3 = \frac{3\lambda D}{d}$$

$$\lambda = \frac{x_3 \cdot d}{3D} = \frac{8.1 \times 10^{-3} \times 0.18 \times 10^{-3}}{3 \times 0.9}$$

$$= \frac{1.458 \times 10^{-6}}{2.7} = \boxed{5.4 \times 10^{-7} \text{ m} = 5400 \text{ Å}}$$

---

### N9 — Refractive Index / Snell's Law
> **2023(8c)** µ_water = 1.33, µ_glass = 1.53. Light from water to glass. Find angle of refraction.

$$\frac{\sin i}{\sin r} = \frac{\mu_{glass}}{\mu_{water}} = \frac{1.53}{1.33} = 1.150$$

If i = 90° (grazing): sin r = 1/1.150 → r = sin⁻¹(0.87) ≈ **60.3°**

For normal incidence i = 0°: r = 0°.  
*(Use Snell's law: n₁ sin i = n₂ sin r)*

---

## 📋 QUICK FORMULA SHEET

```
β  = λD/d                    (fringe width)
Δφ = (2π/λ) × Δx             (phase-path relation)
I  = 4a²cos²(δ/2)            (intensity)
I_max = 4a²,  I_min = 0

Newton's Rings (dark):   Dₙ² = 4nλR
Newton's Rings (bright): Dₙ² = (2n−1)2λR
λ = (Dₙ²−Dₘ²) / 4R(n−m)     (wavelength)
t = nλ/2                     (air film thickness, dark)
r² = 2Rt  →  t = D²/8R       (geometry)

Biprism: D = a+b,  β = λ(a+b)/d
d = √(d₁·d₂)                 (conjugate lens method)

Snell's Law: n₁sinθ₁ = n₂sinθ₂
```

---

## ⭐ HIGH-FREQUENCY EXAM TOPICS (appears every year)

| Topic | Years |
|-------|-------|
| Newton's Rings numerical (R and t) | 2017,2019,2023 |
| YDSE slit separation (5100 Å, 10 fringes) | 2019,2020,2022 |
| Show bright-dark distance equal (β proof) | 2019,2020,2022 |
| Sodium lamp slit separation | 2018,2021 |
| Constructive/destructive interference | Every year |
| What is Newton's ring | Every year |
| Coherent source / Thin film | 2018,2019,2021 |

---

*End of Notes — Good luck, master! 🎯*
