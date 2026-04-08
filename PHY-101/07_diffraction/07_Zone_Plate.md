# Zone Plate
*Date: April 8, 2026*

---

## 1. Introduction

A **zone plate** is a specially constructed optical device that uses diffraction rather than refraction to focus light. It consists of a series of concentric opaque and transparent rings, alternating to **block either the odd or even Fresnel zones**.

By blocking the zones that would destructively interfere at a focal point, a zone plate allows only the constructive contributions to reach the focus — dramatically increasing the intensity. The concept was first described by **Lord Rayleigh (John William Strutt)** in 1871, and independently implemented by **Charles Vernon Boys** in 1881.

---

## 2. Construction of a Zone Plate

### 2.1 Positive Zone Plate (Opaque Even Zones Blocked)

The zone plate is constructed such that:
- **Odd zones (1, 3, 5, ...)** are **transparent**
- **Even zones (2, 4, 6, ...)** are **opaque**

This prevents the destructive interference from even zones, leaving only constructive contributions.

### 2.2 Negative Zone Plate (Opaque Odd Zones Blocked)

- **Even zones** are **transparent**
- **Odd zones** are **opaque**

Produces a virtual focus and an inverted phase structure.

### 2.3 Phase Zone Plate

Instead of blocking alternate zones, a **phase zone plate** introduces a phase shift of $\pi$ in alternate zones using a transparent material of appropriate thickness. This is more efficient (no light absorbed) and achieves higher intensity at the focus.

---

## 3. Radii of Zones on the Zone Plate

For a zone plate used with a **plane wave** (source at infinity):

$$\boxed{r_m = \sqrt{m\lambda f}}$$

Where:
- $r_m$ = outer radius of the $m$-th zone
- $m$ = zone number
- $\lambda$ = wavelength
- $f$ = focal length (first principal focus)

For a general setup (source at distance $u$, image at distance $v$):

$$\frac{1}{f} = \frac{1}{u} + \frac{1}{v} \quad \text{(as for a lens)}$$

And:
$$r_m = \sqrt{\frac{m\lambda uv}{u+v}} = \sqrt{m\lambda f}$$

---

## 4. Focal Length of a Zone Plate

From the zone radii formula $r_m^2 = m\lambda f$:

$$\boxed{f = \frac{r_m^2}{m\lambda}}$$

In particular, from the first zone ($m=1$):

$$f = \frac{r_1^2}{\lambda}$$

### 4.1 Multiple Foci

A zone plate has **multiple focal points**. The principal focus is at $f$, but there are also secondary foci at:

$$f_p = \frac{f}{p}, \quad p = 1, 3, 5, \ldots \text{(odd integers only)}$$

| Focus | Focal Length | Order |
|---|---|---|
| Principal | $f$ | $p = 1$ |
| 2nd | $f/3$ | $p = 3$ |
| 3rd | $f/5$ | $p = 5$ |

The intensities at secondary foci: $I_p \propto 1/p^2$.

There are also **virtual foci** at $-f, -f/3, -f/5, \ldots$ on the same side as the incoming light.

### 4.2 Wavelength Dependence of Focal Length

$$f = \frac{r_1^2}{\lambda}$$

Since $f \propto 1/\lambda$, a zone plate acts like a **dispersive lens** — different wavelengths are focused at different distances:
- Shorter $\lambda$ (blue): Focused farther away (large $f$)
- Longer $\lambda$ (red): Focused closer (small $f$)

This is **opposite** to chromatic aberration in a normal (converging) glass lens!

---

## 5. Amplitude and Intensity at the Focus

### 5.1 With $n$ Zones Open

If a zone plate has $n$ transparent zones (odd zones 1, 3, 5, ..., $2n-1$), the amplitude at the focus:

$$A_{\text{zone plate}} = a_1 + a_3 + a_5 + \cdots + a_{2n-1} \approx n \cdot a_1$$

(since odd zones are all in phase, and $a_m \approx a_1$ for the first few zones)

Intensity:
$$I_{\text{zone plate}} = n^2 a_1^2$$

### 5.2 Comparison

| Configuration | Amplitude | Intensity |
|---|---|---|
| Unobstructed wavefront | $a_1/2$ | $a_1^2/4$ |
| Zone plate ($n$ zones open) | $\approx n \cdot a_1$ | $\approx n^2 a_1^2$ |
| Ratio | $2n$ | $4n^2$ |

**A zone plate with $n$ open zones produces $4n^2$ times the intensity of the unobstructed wavefront at the focal point.** For $n = 10$: intensity is 400 times greater!

---

## 6. Zone Plate as a Lens

The zone plate obeys the **thin lens equation**:

$$\frac{1}{v} - \frac{1}{u} = \frac{1}{f} \quad \text{(using sign convention)}$$

Or equivalently:

$$\frac{1}{u} + \frac{1}{v} = \frac{1}{f} = \frac{\lambda}{r_1^2}$$

Where $u$ = object distance, $v$ = image distance.

The zone plate:
- Forms **real images** (like a converging lens)
- Forms **virtual images** (like a diverging lens — at $-f, -f/3, \ldots$)
- Has severe **chromatic aberration** ($f \propto 1/\lambda$)

---

## 7. Types of Zone Plates

### 7.1 Amplitude Zone Plate
Alternating transparent and opaque rings. Approximately 25% efficiency (only one set of alternating zones contributes to the main focus).

### 7.2 Phase Zone Plate
Alternating zones of different optical thickness. Phase of alternate zones shifted by $\pi$. Efficiency approaches 40% (theoretical maximum for binary phase). Used widely in X-ray optics.

### 7.3 Blazed (Kinoform) Zone Plate
Zones have a continuous phase profile (sawtooth cross-section). Can achieve near 100% efficiency for a specific wavelength. Used in high-performance X-ray microscopy.

---

## 8. Applications of Zone Plates

### 8.1 X-ray Optics
- **X-ray microscopy:** Glass lenses don't work for X-rays ($n \approx 1$). Zone plates made of gold or nickel (fabricated using electron-beam lithography) focus X-rays with nanometre resolution.
- **Synchrotron beamlines:** Fresnel zone plates as X-ray focusing elements at ESRF, ALS, NSLS.
- Achieved resolution: ~10 nm with hard X-rays.

### 8.2 EUV Lithography
- Zone plates used as focusing elements in extreme ultraviolet (EUV, $\lambda \approx 13.5\ \text{nm}$) semiconductor lithography.

### 8.3 Neutron Optics
- Neutron Fresnel zone plates used at neutron sources for neutron focusing and imaging.

### 8.4 Terahertz Optics
- Zone plates used to focus THz waves ($\lambda \sim 1\ \text{mm}$) where traditional lenses are lossy.

### 8.5 Diffractive Optical Elements (DOEs)
- Camera lenses, spectacle lenses, and laser optics use zone-plate-like diffractive surfaces to reduce aberrations and weight.

### 8.6 Historical Use
- Zone plates used in early UV spectroscopy (before multi-layer mirrors were developed).

---

## 9. Numerical Examples

### Example 1 — Focal Length
**A zone plate has its 1st zone radius $r_1 = 1\ \text{mm}$ and is used with light of $\lambda = 550\ \text{nm}$. Find the focal length.**

$$f = \frac{r_1^2}{\lambda} = \frac{(10^{-3})^2}{550 \times 10^{-9}} = \frac{10^{-6}}{5.5 \times 10^{-7}} = 1.818\ \text{m}$$

---

### Example 2 — Zone Radii
**Design a zone plate with focal length $f = 20\ \text{cm}$ for $\lambda = 500\ \text{nm}$. Find the radii of the first 5 zones.**

$$r_m = \sqrt{m\lambda f} = \sqrt{m \times 500 \times 10^{-9} \times 0.2} = \sqrt{m \times 10^{-7}}\ \text{m} = \sqrt{m} \times 3.162 \times 10^{-4}\ \text{m}$$

| Zone $m$ | Radius $r_m$ |
|---|---|
| 1 | $0.316\ \text{mm}$ |
| 2 | $0.447\ \text{mm}$ |
| 3 | $0.548\ \text{mm}$ |
| 4 | $0.632\ \text{mm}$ |
| 5 | $0.707\ \text{mm}$ |

---

### Example 3 — Image Location
**An object is placed $40\ \text{cm}$ in front of a zone plate with $f = 60\ \text{cm}$. Find the image distance.**

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{60} - \frac{1}{40} = \frac{2-3}{120} = -\frac{1}{120}$$

$$v = -120\ \text{cm}$$

The negative sign indicates a **virtual image** at 120 cm on the same side as the object.

---

### Example 4 — Intensity Gain
**A zone plate has 20 transparent zones. By what factor is the intensity at the focus greater than with an unobstructed wavefront?**

$$\frac{I_{\text{zp}}}{I_{\text{unobstructed}}} = \frac{n^2 a_1^2}{a_1^2/4} = 4n^2 = 4 \times 400 = 1600$$

The zone plate produces **1600 times** greater intensity at the focus.

---

## 10. Diagram

```
Zone Plate (cross-section view):
  
  ████   ██████   ████████   ██████████  ...  ← Opaque rings (even zones)
 ░░░░░ ░░░░░░░░ ░░░░░░░░░░ ░░░░░░░░░░░  ...  ← Transparent rings (odd zones)
  
 |←r₁→|←r₂→|←——r₃——→|←———r₄———→| ...
 
 Zone 1: r = 0 to r₁     (transparent)
 Zone 2: r = r₁ to r₂    (opaque)
 Zone 3: r = r₂ to r₃    (transparent)
 ...
 
Light →  [Zone Plate]  → Focus at distance f
```

![Fresnel zone plate](https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Zone_plate.png/320px-Zone_plate.png)

*Figure: A Fresnel zone plate. The concentric alternating opaque and transparent rings focus diffracted light to a point.*

---

## 11. References

1. Born, M. & Wolf, E. *Principles of Optics*, 7th ed. Cambridge University Press, 1999. (Section 8.3)
2. Hecht, E. *Optics*, 5th ed. Addison-Wesley, 2017. (Section 10.3.3)
3. Jenkins, F. A. & White, H. E. *Fundamentals of Optics*, 4th ed. McGraw-Hill, 2001.
4. Kirz, J. *Zone Plates for X-ray Microscopy*, Journal of the Optical Society of America, 1974.
5. [HyperPhysics – Zone Plate](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/zone.html)
6. [Physics LibreTexts – Fresnel Zones](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction)
7. [X-ray microscopy and zone plates – ESRF](https://www.esrf.eu/home/UsersAndScience/Experiments/XNP/ID21/optics.html)
