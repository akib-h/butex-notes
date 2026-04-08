# Diffraction
*Date: April 8, 2026*

---

## 1. Definition

**Diffraction** is the bending, spreading, and interference of waves when they encounter an obstacle, edge, or aperture whose size is comparable to (or smaller than) the wavelength of the wave. It is an intrinsic property of all wave phenomena — light, sound, water waves, X-rays, and matter waves (electrons, neutrons).

> *"Diffraction is the deviation of waves from rectilinear propagation that cannot be interpreted as reflection or refraction."*
> — Arnold Sommerfeld

Unlike reflection or refraction, diffraction does **not** require a boundary between two media. It arises from the **wave nature** of the propagating disturbance.

---

## 2. Historical Background

1. **Francesco Maria Grimaldi (1618–1663):** First observed and named diffraction. He noticed that the shadow of a rod illuminated by sunlight was wider than expected from geometrical optics, with colored fringes at the edges.
2. **Christiaan Huygens (1678):** Proposed the *Huygens' Principle* — every point on a wavefront acts as a source of secondary spherical wavelets.
3. **Augustin-Jean Fresnel (1816):** Combined Huygens' principle with the principle of interference to give a quantitative theory of diffraction (Huygens–Fresnel principle).
4. **Joseph von Fraunhofer (1821):** Studied diffraction at large distances (far field) and introduced the diffraction grating.
5. **Gustav Kirchhoff (1882):** Placed Fresnel's scalar theory on a rigorous mathematical foundation using Green's theorem.

---

## 3. Physical Explanation: Huygens–Fresnel Principle

**Huygens' Principle** states:
> Every point on a primary wavefront serves as a source of spherical secondary *wavelets*, and the new wavefront at any later time is the envelope of these secondary wavelets.

**Fresnel's addition:** The secondary wavelets can interfere with each other (both constructively and destructively). Diffraction patterns arise from this interference.

When a plane wave of wavelength $\lambda$ passes through an aperture of width $a$:
- If $a \gg \lambda$: The wave travels in a nearly straight line (geometrical optics regime).
- If $a \sim \lambda$: Significant spreading and interference occur — **diffraction dominates**.
- If $a \ll \lambda$: The aperture acts like a point source; the wave spreads in all directions.

---

## 4. Conditions for Diffraction

For noticeable diffraction to occur:

$$\boxed{\frac{\lambda}{a} \gtrsim 1}$$

Where:
- $\lambda$ = wavelength of the wave
- $a$ = size of the obstacle or aperture

| Wave Type | Typical Wavelength | Typical Diffracting Object |
|---|---|---|
| Visible light | 400–700 nm | Slits, gratings, human hair |
| Sound | 1 cm – 10 m | Doorways, buildings |
| X-rays | 0.01–10 nm | Crystal lattice planes |
| Microwaves | 1 mm – 30 cm | Metal meshes |
| Electrons | 0.001–1 nm | Crystal lattice |

---

## 5. Types of Diffraction

Diffraction is broadly classified based on the geometry of the source and the observation screen:

### 5.1 Fresnel Diffraction (Near-Field)
- Source and/or screen are at a **finite** distance from the diffracting aperture.
- Wavefronts are **spherical** or **cylindrical**.
- Mathematical analysis is more complex (involves Fresnel integrals).
- Example: Diffraction pattern seen very close to a slit.

### 5.2 Fraunhofer Diffraction (Far-Field)
- Source and screen are at **effectively infinite** distance (or made so using lenses).
- Wavefronts incident on and emerging from the aperture are treated as **plane waves**.
- Simpler mathematical analysis (Fourier transform relationship).
- Example: Diffraction pattern observed far from a slit or with a converging lens.

**Transition criterion** — the Fresnel number $N_F$:

$$N_F = \frac{a^2}{L\lambda}$$

Where $L$ is the distance to the observation plane. 

- $N_F \gg 1$: Fresnel (near-field) regime.
- $N_F \ll 1$: Fraunhofer (far-field) regime.
- $N_F \approx 1$: Intermediate regime.

---

## 6. Single-Slit Diffraction (Fraunhofer)

### 6.1 Setup
A plane wave of wavelength $\lambda$ is incident normally on a single slit of width $a$. A converging lens focuses the diffracted light onto a screen.

### 6.2 Derivation of Intensity Pattern

Divide the slit into $N$ infinitesimal Huygens sources. Each element $dy$ at position $y$ contributes a wavelet. The path difference between the wave from the top and bottom of the slit to a point $P$ at angle $\theta$:

$$\Delta = a \sin\theta$$

Define the **phase parameter**:
$$\beta = \frac{\pi a \sin\theta}{\lambda}$$

Summing (integrating) all contributions with their phase differences:

$$E(\theta) = E_0 \int_{-a/2}^{a/2} e^{i(2\pi/\lambda) y \sin\theta}\, dy = E_0 a \cdot \frac{\sin\beta}{\beta}$$

The **intensity distribution**:

$$\boxed{I(\theta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2}$$

Where $I_0$ is the central maximum intensity and $\beta = \dfrac{\pi a \sin\theta}{\lambda}$.

### 6.3 Key Features

| Feature | Condition | Angle |
|---|---|---|
| Central maximum | $\beta = 0$, i.e., $\theta = 0$ | $\theta = 0$ |
| Minima (dark fringes) | $a \sin\theta = m\lambda$, $m = \pm 1, \pm 2, \ldots$ | $\sin\theta = m\lambda/a$ |
| Secondary maxima | $\tan\beta = \beta$ (approximately $\beta \approx (2m+1)\pi/2$) | Between minima |

**Intensities of secondary maxima** relative to central:

| Secondary maximum | Relative intensity |
|---|---|
| 1st ($m=1$) | $\approx 4.72\%$ |
| 2nd ($m=2$) | $\approx 1.65\%$ |
| 3rd ($m=3$) | $\approx 0.83\%$ |

### 6.4 Width of Central Maximum

The **half-angular width** of the central maximum (from center to first minimum):
$$\sin\theta_1 = \frac{\lambda}{a} \implies \theta_1 \approx \frac{\lambda}{a} \text{ (for small angles)}$$

**Linear width** on a screen at distance $D$:
$$w = 2D\tan\theta_1 \approx \frac{2D\lambda}{a}$$

---

## 7. Double-Slit Diffraction

When two slits, each of width $a$, separated by distance $d$ (center to center), are illuminated:

$$I(\theta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2 \cos^2\delta$$

Where:
- $\beta = \dfrac{\pi a \sin\theta}{\lambda}$ — single-slit diffraction envelope term
- $\delta = \dfrac{\pi d \sin\theta}{\lambda}$ — double-slit interference term

**Interference maxima** (bright fringes): $d\sin\theta = n\lambda$, $n = 0, \pm1, \pm2, \ldots$

**Missing orders** occur when an interference maximum coincides with a diffraction minimum:

$$\frac{d}{a} = \frac{n}{m} \implies \text{order } n \text{ is missing}$$

---

## 8. Diffraction vs. Interference

| Property | Interference | Diffraction |
|---|---|---|
| Origin | Superposition of waves from discrete sources | Superposition of wavelets from a continuous wavefront |
| Fringe width | Uniform | Non-uniform (central max is wider) |
| Fringe intensity | All maxima equal | Intensity decreases away from center |
| Number of sources | 2 (or more discrete sources) | Effectively infinite (continuous aperture) |

---

## 9. Real-World Applications

1. **X-ray crystallography:** Determination of crystal structures (Watson & Crick's DNA discovery).
2. **Diffraction gratings:** Spectroscopy — separation of light into component wavelengths.
3. **Laser beam shaping:** Spatial light modulators use diffraction to shape beams.
4. **Holography:** Recording and reconstructing 3D images.
5. **Radio astronomy:** Very Long Baseline Interferometry (VLBI) exploits diffraction limits.
6. **Medical imaging:** Ultrasound and MRI use wave diffraction principles.
7. **Compact discs and DVDs:** Data read by laser diffraction from surface pits.
8. **Bird feather iridescence:** Structural coloration from diffraction by microscopic barbules.

---

## 10. Numerical Examples

### Example 1
**A single slit of width $0.3\ \text{mm}$ is illuminated by light of wavelength $589\ \text{nm}$. Find the angular position of the first minimum.**

$$\sin\theta_1 = \frac{\lambda}{a} = \frac{589 \times 10^{-9}}{0.3 \times 10^{-3}} = 1.963 \times 10^{-3}$$

$$\theta_1 = \arcsin(1.963 \times 10^{-3}) \approx 0.1124° \approx 6.74'$$

---

### Example 2
**Light of wavelength $500\ \text{nm}$ falls on a slit of width $2\ \mu\text{m}$. A lens of focal length $40\ \text{cm}$ focuses the pattern. Find the width of the central maximum.**

$$\sin\theta_1 = \frac{500 \times 10^{-9}}{2 \times 10^{-6}} = 0.25 \implies \theta_1 = 14.48°$$

$$\text{Half-width} = f \tan\theta_1 = 0.4 \times \tan(14.48°) = 0.4 \times 0.2582 \approx 0.103\ \text{m}$$

$$\text{Total width} = 2 \times 0.103 = 0.206\ \text{m} = 20.6\ \text{cm}$$

---

### Example 3
**Calculate the Fresnel number for a slit of width $1\ \text{mm}$, $\lambda = 500\ \text{nm}$, at distance $L = 2\ \text{m}$.**

$$N_F = \frac{a^2}{L\lambda} = \frac{(10^{-3})^2}{2 \times 500 \times 10^{-9}} = \frac{10^{-6}}{10^{-6}} = 1.0$$

This is in the **intermediate regime** (neither purely Fresnel nor Fraunhofer).

---

## 11. Diagram

```
Incident          Aperture           Screen
plane wave           |               |
→→→→→→→→→→→  ←——a——→  |     ~~~~~     |  Central max (bright)
→→→→→→→→→→→         |   ~~~   ~~~   |  Secondary maxima
→→→→→→→→→→→         |  ~         ~  |  Minima (dark)
```

![Single slit diffraction pattern](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Single_slit_diffraction.png/640px-Single_slit_diffraction.png)

*Figure: Intensity distribution for single-slit Fraunhofer diffraction. The central maximum is twice as wide as the secondary maxima.*

---

## 12. References

1. Hecht, E. *Optics*, 5th ed. Addison-Wesley, 2017. (Chapters 9–10)
2. Born, M. & Wolf, E. *Principles of Optics*, 7th ed. Cambridge University Press, 1999.
3. Jenkins, F. A. & White, H. E. *Fundamentals of Optics*, 4th ed. McGraw-Hill, 2001.
4. Ghatak, A. *Optics*, 6th ed. McGraw-Hill Education, 2017.
5. [HyperPhysics – Diffraction](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/diffrac.html)
6. [Physics LibreTexts – Diffraction](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction)
7. [MIT OpenCourseWare – Waves and Optics](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/)
8. [Khan Academy – Diffraction](https://www.khanacademy.org/science/physics/light-waves/diffraction-and-interference-of-light/a/diffraction-and-interference)
