# Difference Between Zone Plate & Convex Lens
*Date: April 8, 2026*

---

## 1. Introduction

Both a **zone plate** and a **convex (converging) lens** can focus light to a point. However, their underlying mechanisms, physical properties, and practical characteristics are fundamentally different. Understanding these differences is crucial for selecting the appropriate optical element for a given application.

| | Zone Plate | Convex Lens |
|---|---|---|
| **Focusing principle** | Diffraction | Refraction |
| **Physical mechanism** | Interference of diffracted wavelets | Bending of rays at curved surfaces |
| **Historical basis** | Fresnel zone construction | Snell's Law |

---

## 2. Principle of Operation

### 2.1 Zone Plate

A zone plate focuses light by **blocking alternate Fresnel zones**, so that all remaining zones contribute **constructively** (in phase) at the focal point. The focusing is entirely a **diffraction** (wave) phenomenon.

The condition for focusing arises from the constructive interference of waves from successive unblocked zones.

$$r_m = \sqrt{m\lambda f}$$

Focusing is wavelength-dependent: $f \propto \frac{r_1^2}{\lambda}$

### 2.2 Convex Lens

A convex lens focuses light by **refracting** rays at two curved surfaces. The thicker center causes more retardation of the optical path, which curves the wavefront toward the optical axis.

Focusing described by the **lensmaker's equation**:

$$\frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

Focusing is approximately wavelength-dependent only through $n(\lambda)$ (chromatic aberration).

---

## 3. Comprehensive Comparison Table

| Property | Zone Plate | Convex Lens |
|---|---|---|
| **Focusing mechanism** | Diffraction (wave interference) | Refraction (geometric optics) |
| **Governing equation** | $r_m = \sqrt{m\lambda f}$ | $\frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$ |
| **Image equation** | $\frac{1}{u} + \frac{1}{v} = \frac{1}{f}$ (same form) | $\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$ |
| **Chromatic aberration** | Severe ($f \propto 1/\lambda$, blue focused farther) | Moderate ($f$ varies weakly with $\lambda$ through $n(\lambda)$) |
| **Direction of chromatic aberration** | Opposite to lens (blue: larger $f$; red: smaller $f$) | Normal (blue: smaller $f$; red: larger $f$) |
| **Multiple foci** | Yes — principal at $f$, secondary at $f/3, f/5, \ldots$ | No — single principal focus |
| **Efficiency** | ~25% (amplitude zone plate) to ~40% (phase zone plate) | ~90–99% (with AR coatings) |
| **Wavelength range** | Entire EM spectrum (X-ray to radio) | Limited by material transparency |
| **Applicability at X-ray** | Excellent (gold/nickel zone plates) | Essentially impossible ($n \approx 1$ for X-rays) |
| **Wavefront quality** | Limited by fabrication accuracy of rings | Limited by surface figure and glass homogeneity |
| **Aberrations** | Spherical, coma, distortion present | Can be minimized by design; well-characterized |
| **Depth of focus** | Shallow (strong wavelength and order dependence) | Moderate (determined by $f$-number) |
| **Fabrication** | Photolithography, electron-beam lithography | Glass grinding/polishing, molding (plastic) |
| **Cost** | High for precision (nanoscale features) | Low to moderate |
| **Size/weight** | Very compact, flat (thin film) | Bulky, heavy glass element |
| **Light loss** | 50–75% absorbed/scattered (amplitude type) | Low (AR-coated: <1% per surface) |
| **Sensitivity to alignment** | High (zones must be precisely centered) | Moderate |
| **Temperature dependence** | Low (mainly through substrate expansion) | Moderate ($n$ changes with $T$) |

---

## 4. Chromatic Aberration: Opposite Signs

This is the most striking difference:

### 4.1 Zone Plate (Diffractive)
$$f = \frac{r_1^2}{\lambda}$$

- Shorter wavelength $\lambda$ (blue, ~450 nm) → **larger** focal length $f$
- Longer wavelength $\lambda$ (red, ~650 nm) → **smaller** focal length $f$

$$f_{\text{blue}} > f_{\text{red}} \quad \text{(zone plate)}$$

### 4.2 Convex Lens (Refractive)
$$f \propto \frac{1}{n(\lambda)-1}$$

- Shorter wavelength $\lambda$ (blue) → higher $n$ → **smaller** focal length $f$
- Longer wavelength $\lambda$ (red) → lower $n$ → **larger** focal length $f$

$$f_{\text{blue}} < f_{\text{red}} \quad \text{(lens)}$$

### 4.3 Achromatic Combination

This opposite chromatic behavior is exploited in **hybrid diffractive-refractive lenses** (achromatic doublets):
- A zone plate element and a refractive lens element are combined.
- The chromatic aberrations cancel each other over a range of wavelengths.
- Used in modern camera lenses, eyeglass designs, and lithographic objectives.

---

## 5. Multiple Foci of Zone Plate vs. Single Focus of Lens

| Aspect | Zone Plate | Convex Lens |
|---|---|---|
| Principal focus | $f$ | $f$ |
| Additional real foci | $f/3, f/5, f/7, \ldots$ | None |
| Virtual foci | $-f, -f/3, -f/5, \ldots$ | None (unless combined system) |
| Cause | Higher diffraction orders ($m = 1, 3, 5, \ldots$) | Only one refraction path |

The multiple foci of a zone plate cause **ghost images** in imaging applications — light from the unwanted foci appears as a diffuse halo or background noise around the main image.

---

## 6. Efficiency Comparison

### 6.1 Zone Plate (Amplitude)
- Approximately **half** the wavefront area is blocked → 50% of incident light is absorbed.
- Of the transmitted 50%, only the fraction going to the principal focus is useful (~25% of total incident light for the amplitude zone plate).

Efficiency of order $p$:

$$\eta_p = \frac{1}{p^2\pi^2}$$

For $p = 1$: $\eta_1 \approx 10.1\%$

### 6.2 Zone Plate (Phase)
By shifting phase instead of blocking, efficiency improves:

- Binary phase: $\eta_1 = 4/\pi^2 \approx 40.5\%$
- Kinoform (blazed): $\eta_1 \approx 100\%$ (for a single wavelength)

### 6.3 Convex Lens
- A well-designed glass lens with anti-reflection (AR) coatings: >98% transmission.
- Without AR coating: ~96% per surface (4% reflection at each glass-air interface).

---

## 7. X-ray and UV Applications: Zone Plate Wins

For wavelengths below ~100 nm (X-ray, EUV), materials have:
- Refractive index $n \approx 1$ (refractive lens effectively useless)
- High absorption (mirrors must be used at grazing incidence)

Zone plates made from **high-Z materials** (gold, nickel, tantalum) with nanometre-scale features can focus X-rays efficiently. This is why zone plates are **the standard focusing element** in X-ray microscopy (e.g., at synchrotron facilities like ESRF, APS, Diamond).

Achievable resolutions: ~10 nm (soft X-ray), ~50 nm (hard X-ray).

---

## 8. Summary: When to Use Each

| Application | Best Choice | Reason |
|---|---|---|
| Visible light imaging (camera, microscope) | Convex lens | High efficiency, low aberrations, single focus |
| X-ray / EUV focusing | Zone plate | Only practical option |
| Terahertz optics | Zone plate | Lightweight, flat, tunable |
| Achromatic optical design | Hybrid (diffractive + refractive) | Opposite chromatic dispersions cancel |
| Compact flat optic | Zone plate (metalens) | Eliminates bulk |
| High-power laser | Convex lens (or reflective mirror) | Zone plate absorbs too much energy |
| Teaching wave optics | Zone plate | Clearly demonstrates diffraction |

---

## 9. Numerical Example

**A zone plate has $f = 30\ \text{cm}$ for green light $\lambda_g = 550\ \text{nm}$. Find the focal length for (a) blue light $\lambda_b = 450\ \text{nm}$ and (b) red light $\lambda_r = 650\ \text{nm}$.**

Using $f = r_1^2/\lambda$ → $r_1^2 = f \cdot \lambda = 0.30 \times 550 \times 10^{-9} = 1.65 \times 10^{-7}\ \text{m}^2$

(a) Blue:
$$f_b = \frac{r_1^2}{\lambda_b} = \frac{1.65 \times 10^{-7}}{450 \times 10^{-9}} = 0.367\ \text{m} = 36.7\ \text{cm}$$

(b) Red:
$$f_r = \frac{r_1^2}{\lambda_r} = \frac{1.65 \times 10^{-7}}{650 \times 10^{-9}} = 0.254\ \text{m} = 25.4\ \text{cm}$$

**Zone plate: $f_b > f_r$ (blue focused farther — opposite to a glass lens)**

For a glass lens (crown glass, $n_g = 1.518$, $n_b = 1.524$, $n_r = 1.514$), the blue is focused closer ($f_b < f_r$).

---

## 10. Diagram

```
CONVEX LENS                          ZONE PLATE
-----------                          ----------

   /\                                ⊙ ○ ⊙ ○ ⊙
  /  \  ← curved                    (concentric
 | ● |  refracting                   rings)
  \  /  surfaces
   \/
   
White → [Lens] → [Focus] ●          White → [Zone Plate] → [Focus] ●
Blue closer (f_b < f_r)              Blue farther (f_b > f_r)
Single focus only                    Multiple foci: f, f/3, f/5, ...
~98% efficient                       ~10-40% efficient
Works for visible only               Works from X-ray to radio
```

---

## 11. References

1. Born, M. & Wolf, E. *Principles of Optics*, 7th ed. Cambridge University Press, 1999.
2. Hecht, E. *Optics*, 5th ed. Addison-Wesley, 2017.
3. Jenkins, F. A. & White, H. E. *Fundamentals of Optics*, 4th ed. McGraw-Hill, 2001.
4. O'Shea, D. C., et al. *Diffractive Optics: Design, Fabrication, and Test*. SPIE Press, 2004.
5. [HyperPhysics – Zone Plate vs. Lens](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/zone.html)
6. [Thorlabs – Diffractive Optics Tutorial](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=6973)
7. [ESRF X-ray Zone Plates](https://www.esrf.eu/home/UsersAndScience/Experiments/XNP/ID21/optics.html)
