# Diffraction Grating and Its Use
*Date: April 8, 2026*

---

## 1. Introduction

A **diffraction grating** is an optical element with a periodic structure that splits and diffracts light into several beams traveling in different directions. The directions of these beams depend on the spacing of the grating and the wavelength of the light, making the grating an extremely powerful tool for **spectral analysis**.

> *"The grating is to optics what the prism is to spectroscopy — but far more powerful."*

---

## 2. Construction

### 2.1 Transmission Grating
- Consists of a large number of **parallel, equally spaced slits** (transparent regions) ruled on an opaque substrate.
- Modern gratings: ruled on glass or plastic using a diamond ruling engine, then replicated.
- Typical: 300–2400 lines/mm.

### 2.2 Reflection Grating
- Ruled on a **reflective** surface (polished metal or aluminized glass).
- Light is diffracted upon reflection.
- Used in most modern spectrometers (especially in UV and IR where glass is opaque).

### 2.3 Parameters
- $N$ = total number of slits (lines)
- $d$ = grating element (slit spacing, center-to-center)
- $a$ = width of each transparent slit (or ruled groove)
- $b$ = width of each opaque region
- $d = a + b$

Typical values: $d \sim 1/600\ \text{mm} \approx 1.67\ \mu\text{m}$

---

## 3. The Grating Equation

### 3.1 Derivation

Consider a diffraction grating with $N$ slits, each of width $a$, spaced $d$ apart. A plane wave of wavelength $\lambda$ is incident at angle $i$ (measured from the normal to the grating).

The **path difference** between corresponding rays from adjacent slits to a point P at angle $\theta$ (diffraction angle):

$$\Delta = d(\sin i + \sin\theta)$$

For **constructive interference** (principal maxima), this path difference must be an integer multiple of $\lambda$:

$$\boxed{d(\sin i + \sin\theta) = m\lambda}$$

Where:
- $d$ = grating element (spacing between slits)
- $i$ = angle of incidence (measured from normal)
- $\theta$ = angle of diffraction
- $m$ = order of diffraction ($m = 0, \pm1, \pm2, \ldots$)
- $\lambda$ = wavelength of light

For **normal incidence** ($i = 0$):

$$\boxed{d \sin\theta_m = m\lambda}$$

### 3.2 Orders of Diffraction

| Order $m$ | Description |
|---|---|
| $m = 0$ | Zeroth order — straight-through, all wavelengths coincide (white light if used) |
| $m = \pm 1$ | First order — most commonly used |
| $m = \pm 2$ | Second order — higher resolution but lower intensity |
| Higher orders | Increasingly weak; possible overlap with lower orders |

**Sign convention:** $\theta$ and $i$ are positive on the same side of the normal, negative on opposite sides.

---

## 4. Intensity Distribution from a Grating

The full intensity pattern for an $N$-slit grating combines the **single-slit diffraction envelope** and the **$N$-slit interference** pattern:

$$I(\theta) = I_0 \underbrace{\left(\frac{\sin\beta}{\beta}\right)^2}_{\text{single-slit envelope}} \cdot \underbrace{\left(\frac{\sin(N\delta)}{\sin\delta}\right)^2}_{N\text{-slit interference}}$$

Where:
$$\beta = \frac{\pi a \sin\theta}{\lambda}, \quad \delta = \frac{\pi d \sin\theta}{\lambda}$$

### 4.1 Principal Maxima
Occur when $\delta = m\pi$, i.e., $d\sin\theta = m\lambda$ (grating equation). At these angles:
$$\left(\frac{\sin(N\delta)}{\sin\delta}\right)^2 \to N^2$$

So peak intensity $\propto N^2$.

### 4.2 Minima
Occur when $N\delta = p\pi$ (integer $p$ not a multiple of $N$):
$$\sin\theta = \frac{p\lambda}{Nd}$$

Between two adjacent principal maxima, there are $(N-1)$ minima and $(N-2)$ weak secondary maxima.

### 4.3 Width of Principal Maxima

The **angular half-width** of a principal maximum:
$$\Delta\theta = \frac{\lambda}{Nd\cos\theta}$$

As $N$ increases, the maxima become **sharper** (narrower), enabling better spectral resolution.

---

## 5. Missing Orders

A principal maximum of order $m$ is **missing** (falls on a single-slit minimum) when:

$$\frac{d}{a} = \frac{m}{p} \quad (p = 1, 2, 3, \ldots)$$

For example, if $d = 2a$ (slit width = half the grating period), then orders $m = 2, 4, 6, \ldots$ are missing.

---

## 6. Blazed Gratings

A **blazed grating** (echelon or echelle grating) has grooves cut at a specific angle (blaze angle $\theta_B$) so that specular reflection from the groove facets coincides with the desired diffraction order.

This concentrates most of the diffracted energy into a single useful order, dramatically improving efficiency (up to 80–90%).

**Blaze condition:**
$$\lambda_B = \frac{2d \sin\theta_B}{m}$$

---

## 7. Uses of Diffraction Gratings

### 7.1 Spectroscopy
- **Monochromators:** Isolate narrow wavelength bands for scientific measurement.
- **Spectrographs:** Record full spectra simultaneously (e.g., astronomical spectroscopy).
- **Spectrophotometers:** Measure absorption spectra for chemical identification.
- Example: Fraunhofer absorption lines in solar spectrum identified using gratings.

### 7.2 Wavelength Measurement
- Gratings provide the most accurate method of measuring wavelengths of light.
- Formula rearranged: $\lambda = \frac{d\sin\theta_m}{m}$

### 7.3 Telecommunications
- **Wavelength-division multiplexing (WDM):** Gratings separate/combine multiple wavelength channels in optical fiber networks.
- Arrayed waveguide gratings (AWGs) are the key component in fiber optic multiplexers.

### 7.4 Laser Systems
- Gratings in laser cavities provide wavelength selection and tuning.
- **Chirped pulse amplification (CPA):** Grating pairs stretch and compress ultrashort laser pulses (2018 Nobel Prize in Physics).

### 7.5 Astronomy
- High-dispersion echelle spectrographs measure stellar radial velocities to detect exoplanets (Doppler method).
- Space telescopes (Hubble, JWST) use gratings for spectroscopy.

### 7.6 Industrial and Chemical Analysis
- **Raman spectroscopy:** Gratings used to analyze molecular vibrations.
- **Fluorescence spectroscopy:** Medical diagnostics and material analysis.
- **Colorimetry:** Quality control in paint, printing, and food industries.

### 7.7 Security Holograms
- Holographic diffraction gratings produce the rainbow patterns on credit cards and passports.

---

## 8. Comparison: Grating vs. Prism

| Property | Diffraction Grating | Prism |
|---|---|---|
| Dispersion mechanism | Diffraction (wavelength-dependent angle) | Refraction (wavelength-dependent $n$) |
| Angular dispersion | Higher (tunable by choosing order) | Lower |
| Resolution | Very high (depends on $N$ and $m$) | Moderate |
| Free spectral range | Limited (order overlap possible) | Unlimited |
| Transmission | Some light in each order (loss) | Nearly all light in one beam |
| Cost | Low (replica gratings) | Higher (quality glass) |
| UV/IR capability | Excellent (reflection gratings) | Limited (glass opacity) |
| Linearity | Linear in $\sin\theta$ | Non-linear (anomalous dispersion) |

---

## 9. Numerical Examples

### Example 1 — Diffraction Angle
**A grating has 500 lines/mm. Find the angle of the first-order maximum for $\lambda = 589\ \text{nm}$ (sodium D line) with normal incidence.**

$$d = \frac{1\ \text{mm}}{500} = 2 \times 10^{-6}\ \text{m} = 2000\ \text{nm}$$

$$\sin\theta_1 = \frac{m\lambda}{d} = \frac{1 \times 589}{2000} = 0.2945$$

$$\theta_1 = \arcsin(0.2945) = 17.12°$$

---

### Example 2 — Maximum Order
**What is the maximum order of diffraction visible with the grating above ($\lambda = 589\ \text{nm}$, $d = 2000\ \text{nm}$)?**

Maximum order when $\sin\theta = 1$:

$$m_{\max} = \frac{d}{\lambda} = \frac{2000}{589} \approx 3.4$$

So maximum order visible is $m = 3$.

---

### Example 3 — Wavelength Measurement
**First-order diffraction maximum observed at $\theta = 30°$ from a grating with $d = 1.5\ \mu\text{m}$. Find $\lambda$.**

$$\lambda = d\sin\theta = 1.5 \times 10^{-6} \times \sin 30° = 1.5 \times 10^{-6} \times 0.5 = 750\ \text{nm}$$

This corresponds to **red light**.

---

### Example 4 — Missing Order
**A grating has $d = 3a$. Which orders are missing?**

Missing orders when $\frac{d}{a} = \frac{m}{p}$:

$$3 = \frac{m}{p} \implies m = 3p = 3, 6, 9, \ldots$$

Orders $m = 3, 6, 9, \ldots$ are missing.

---

### Example 5 — Number of Orders
**A grating of 600 lines/mm is illuminated by white light ($\lambda$ range 400–700 nm). How many orders are visible?**

$$d = \frac{10^6}{600} = 1666.7\ \text{nm}$$

For $\lambda = 700\ \text{nm}$ (red):
$$m_{\max} = \frac{d}{\lambda} = \frac{1666.7}{700} \approx 2.38 \implies m = 2$$

For $\lambda = 400\ \text{nm}$ (violet):
$$m_{\max} = \frac{1666.7}{400} \approx 4.17 \implies m = 4$$

Therefore, orders 1–2 are visible for the entire visible range; orders 3–4 partially visible (blue/violet only).

---

## 10. Diagram

```
         Incident light
              ↓ ↓ ↓ ↓ ↓
    |||||||||||||||||||||||||||  ← Grating (N slits, spacing d)
    
      m = -2    m = -1    m = 0    m = +1    m = +2
        ↙          ↙         ↓       ↘         ↘
     (blue)     (blue)    (white)   (blue)    (blue)
     (red)      (red)               (red)     (red)
```

![Diffraction grating spectrum](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Diffraction_grating_dispersion.svg/640px-Diffraction_grating_dispersion.svg.png)

*Figure: White light dispersed by a diffraction grating into multiple orders. Each order fans out with violet closest to center and red farthest.*

---

## 11. References

1. Hecht, E. *Optics*, 5th ed. Addison-Wesley, 2017. (Section 10.2)
2. Born, M. & Wolf, E. *Principles of Optics*, 7th ed. Cambridge University Press, 1999.
3. Palmer, C. *Diffraction Grating Handbook*, 8th ed. Newport Corporation, 2020. [Available free online at newport.com]
4. Jenkins, F. A. & White, H. E. *Fundamentals of Optics*, 4th ed. McGraw-Hill, 2001.
5. [HyperPhysics – Diffraction Grating](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/grating.html)
6. [Newport Diffraction Grating Handbook](https://www.newport.com/n/diffraction-grating-handbook)
7. [Physics LibreTexts – Diffraction Gratings](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction/4.04%3A_Diffraction_Gratings)
8. [NIST – Spectroscopy using gratings](https://www.nist.gov/pml/productsservices/spectroscopic-data)
