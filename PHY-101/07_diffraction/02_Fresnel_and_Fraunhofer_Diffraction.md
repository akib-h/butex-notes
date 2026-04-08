# Fresnel & Fraunhofer Diffraction
*Date: April 8, 2026*

---

## 1. Overview

Diffraction patterns are classified into two regimes based on the relative distances between the **source**, the **diffracting aperture**, and the **observation screen**:

| Feature | Fresnel Diffraction | Fraunhofer Diffraction |
|---|---|---|
| Other name | Near-field diffraction | Far-field diffraction |
| Distance to source/screen | Finite | Effectively infinite (or lens used) |
| Wavefront type | Spherical / Cylindrical | Plane |
| Mathematical complexity | High (Fresnel integrals) | Moderate (Fourier transform) |
| Fresnel number $N_F$ | $\gg 1$ | $\ll 1$ |

---

## 2. Fresnel Number

The **Fresnel number** is the key dimensionless parameter that determines which regime applies:

$$\boxed{N_F = \frac{a^2}{L\lambda}}$$

Where:
- $a$ = characteristic size of the aperture (e.g., slit half-width or radius)
- $L$ = distance from aperture to observation screen
- $\lambda$ = wavelength of light

| Fresnel Number | Regime |
|---|---|
| $N_F \gg 1$ | Fresnel (near-field) |
| $N_F \approx 1$ | Intermediate |
| $N_F \ll 1$ | Fraunhofer (far-field) |

---

## 3. Fresnel Diffraction

### 3.1 Conceptual Basis

In Fresnel diffraction, the observation point $P$ is **close** to the aperture, so the wavefronts are **curved** (spherical or cylindrical). The path difference between secondary wavelets from different parts of the aperture to $P$ cannot be simplified using small-angle (paraxial) approximations alone.

The **Huygens–Fresnel integral** in its general form:

$$U(P) = -\frac{i}{\lambda} \iint_\Sigma \frac{U(\mathbf{r}_0)}{r_{01}} e^{ikr_{01}} K(\chi)\, dS$$

Where:
- $U(\mathbf{r}_0)$ = field at aperture point
- $r_{01}$ = distance from aperture point to observation point
- $K(\chi)$ = obliquity (inclination) factor $= \frac{1}{2}(1 + \cos\chi)$
- $k = 2\pi/\lambda$

### 3.2 Fresnel Approximation

For points not too far off-axis (paraxial approximation), the distance $r$ from aperture point $(x_0, y_0)$ to observation point $(x, y)$ at distance $z$ is approximated using **binomial expansion**:

$$r \approx z + \frac{(x - x_0)^2 + (y - y_0)^2}{2z}$$

The **Fresnel diffraction integral** becomes:

$$U(x,y) = \frac{e^{ikz}}{i\lambda z} \iint U(x_0, y_0)\, e^{i\frac{k}{2z}[(x-x_0)^2 + (y-y_0)^2]}\, dx_0\, dy_0$$

This is a **convolution** of the aperture field with the Fresnel propagation kernel.

### 3.3 Fresnel Integrals

For a **1D slit** (infinite in $y$), the integral reduces to the **Cornu spiral** representation:

$$C(u) = \int_0^u \cos\left(\frac{\pi t^2}{2}\right) dt, \quad S(u) = \int_0^u \sin\left(\frac{\pi t^2}{2}\right) dt$$

Where the variable $u$ is related to position:

$$u = x_0 \sqrt{\frac{2}{\lambda z}}$$

The **intensity** at a point is:

$$I = I_0 \left[\left(C(u_2) - C(u_1)\right)^2 + \left(S(u_2) - S(u_1)\right)^2\right]$$

Where $u_1$ and $u_2$ correspond to the two edges of the slit.

### 3.4 Cornu Spiral

The **Cornu spiral** (or Euler spiral) is the parametric plot of $S(u)$ vs. $C(u)$:

```
S(u)
  |           ●●●● (∞)
  |       ●●●●
  |     ●●
  |   ●●
  | ●●
  ●●————————————— C(u)
 ●●
  ●●
    ●●
      ●●●
         ●●●● (-∞)
```

- The two **asymptotic points** are at $(\pm 0.5, \pm 0.5)$.
- The **chord length** between two points on the spiral gives the amplitude at observation point $P$; chord² gives the intensity.
- As the slit opens wider, the chord grows toward the full spiral length.

### 3.5 Characteristic Features of Fresnel Diffraction

1. **Diffraction at a straight edge:** Intensity oscillates above the geometric shadow and decays monotonically inside the shadow. No simple minima/maxima pattern.
2. **Diffraction by a narrow obstacle (Babinet's principle):** The diffraction pattern of a complementary aperture is the same intensity as the original aperture (except at the exact forward direction).
3. **Circular aperture/obstacle:** Concentric ring (zone) pattern. For a circular disc, a bright **Poisson/Arago spot** appears at the center of the geometric shadow.
4. Pattern shape **changes with distance** from the aperture.

### 3.6 Babinet's Principle

If $U_a$ and $U_b$ are the diffracted fields from complementary apertures (aperture A + obstacle B = full, unobstructed wave $U_0$):

$$U_a + U_b = U_0$$

$$\Rightarrow I_a = I_b \quad \text{(except in the forward direction)}$$

**Application:** The diffraction pattern of a thin wire equals the pattern from a slit of the same width.

---

## 4. Fraunhofer Diffraction

### 4.1 Conceptual Basis

In Fraunhofer diffraction, both the source and the observation screen are at **infinite** distance from the aperture (or a lens is used to create this condition). The wavefronts on both sides of the aperture are effectively **plane waves**.

The far-field condition is satisfied when:

$$z \gg \frac{a^2}{\lambda} \quad \text{(i.e., } N_F \ll 1\text{)}$$

### 4.2 Fraunhofer Diffraction Integral

The **Fraunhofer approximation** simplifies the Fresnel integral by dropping the quadratic phase terms:

$$U(\mathbf{k}_\perp) = \frac{e^{ikz}}{i\lambda z} e^{i\frac{k}{2z}(x^2+y^2)} \iint U(x_0, y_0)\, e^{-i\frac{2\pi}{\lambda z}(x \cdot x_0 + y \cdot y_0)}\, dx_0\, dy_0$$

This is the **2D Fourier transform** of the aperture field evaluated at spatial frequencies $f_x = x/(\lambda z)$, $f_y = y/(\lambda z)$:

$$\boxed{U(f_x, f_y) \propto \mathcal{F}\{U_\text{aperture}(x_0, y_0)\}}$$

This is the fundamental mathematical result: **the Fraunhofer pattern is the Fourier transform of the aperture function**.

### 4.3 Single Slit

For a slit of width $a$ with uniform illumination $U_0$:

$$U(\theta) \propto \int_{-a/2}^{a/2} e^{i k x_0 \sin\theta}\, dx_0 = a \cdot \text{sinc}(\beta/\pi)$$

Where $\beta = \frac{\pi a \sin\theta}{\lambda}$.

$$\boxed{I(\theta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2}$$

### 4.4 Rectangular Aperture

For a rectangular aperture of width $a$ (in $x$) and height $b$ (in $y$):

$$I(\theta_x, \theta_y) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \left(\frac{\sin\beta}{\beta}\right)^2$$

Where $\alpha = \frac{\pi a \sin\theta_x}{\lambda}$, $\beta = \frac{\pi b \sin\theta_y}{\lambda}$.

### 4.5 Circular Aperture (Airy Pattern)

For a circular aperture of radius $R$ (diameter $D = 2R$):

$$I(\theta) = I_0 \left[\frac{2 J_1(\pi D \sin\theta / \lambda)}{\pi D \sin\theta / \lambda}\right]^2$$

Where $J_1$ is the first-order Bessel function of the first kind.

The pattern consists of a bright central disk (**Airy disk**) surrounded by concentric rings.

**First minimum** (edge of Airy disk):
$$\sin\theta_1 = 1.22 \frac{\lambda}{D}$$

This is the foundation of the **Rayleigh criterion** for resolution.

### 4.6 Double Slit

For two slits each of width $a$, separated by distance $d$:

$$I(\theta) = I_0 \underbrace{\left(\frac{\sin\beta}{\beta}\right)^2}_{\text{diffraction envelope}} \underbrace{\cos^2(\delta)}_{\text{interference fringes}}$$

Where $\beta = \frac{\pi a \sin\theta}{\lambda}$, $\delta = \frac{\pi d \sin\theta}{\lambda}$.

---

## 5. Side-by-Side Comparison: Fresnel vs. Fraunhofer

| Aspect | Fresnel | Fraunhofer |
|---|---|---|
| Distance | Finite $L$ | $L \to \infty$ (or lens used) |
| Wavefront shape | Curved (spherical) | Planar |
| Phase terms included | Quadratic + linear | Linear only |
| Mathematical tool | Fresnel integrals (Cornu spiral) | Fourier transform |
| Pattern shape vs. distance | Changes with $L$ | Fixed (scale changes only) |
| Central region | Not necessarily maximum | Always maximum (for open aperture) |
| Shadow edge | Oscillatory fringes | Well-defined central maximum |
| Experimental setup | Simple — no lens needed | Lens required (or large distance) |
| Fresnel number | $N_F \gg 1$ | $N_F \ll 1$ |
| Practical use | Near-field imaging, edge effects | Spectroscopy, optical instruments |

---

## 6. Experimental Realization of Fraunhofer Conditions

Since true infinity is impractical, Fraunhofer diffraction is achieved in the lab using a **converging lens**:

1. Place the source at the front focal plane of lens $L_1$ → produces a plane wave at the aperture.
2. Place the screen at the back focal plane of lens $L_2$ → focuses parallel rays to a point.

This setup makes the Fraunhofer pattern accessible at finite, manageable distances.

---

## 7. Numerical Examples

### Example 1 — Fresnel Regime Check
**A circular aperture of diameter $2\ \text{mm}$ is illuminated by $\lambda = 600\ \text{nm}$ light. An observer is at $L = 1\ \text{m}$. What regime?**

$$N_F = \frac{a^2}{L\lambda} = \frac{(10^{-3})^2}{1 \times 600 \times 10^{-9}} = \frac{10^{-6}}{6 \times 10^{-7}} \approx 1.67$$

$N_F \approx 1.67 > 1$ → **Fresnel (near-field)** regime.

---

### Example 2 — Fraunhofer Regime Check
**Same aperture but $L = 10\ \text{m}$:**

$$N_F = \frac{(10^{-3})^2}{10 \times 600 \times 10^{-9}} = \frac{10^{-6}}{6 \times 10^{-6}} \approx 0.167$$

$N_F \approx 0.167 \ll 1$ → **Fraunhofer (far-field)** regime.

---

### Example 3 — Airy Disk Radius
**A telescope objective lens has $D = 10\ \text{cm}$, $f = 1\ \text{m}$, $\lambda = 550\ \text{nm}$. Find the radius of the Airy disk on the focal plane.**

$$r = 1.22 \frac{\lambda f}{D} = 1.22 \times \frac{550 \times 10^{-9} \times 1}{0.1} = 6.71\ \mu\text{m}$$

---

### Example 4 — Fraunhofer Single Slit Width
**Slit width $a = 0.1\ \text{mm}$, $\lambda = 589\ \text{nm}$, screen at $D = 2\ \text{m}$ (with lens). Find half-width of central maximum.**

$$y = \frac{\lambda D}{a} = \frac{589 \times 10^{-9} \times 2}{0.1 \times 10^{-3}} = 11.78\ \text{mm}$$

Full width of central maximum $= 2y = 23.56\ \text{mm} \approx 2.36\ \text{cm}$.

---

## 8. Diagrams

![Fresnel vs Fraunhofer comparison](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Fraunhofer_diffraction.svg/640px-Fraunhofer_diffraction.svg.png)

*Figure 1: Fraunhofer diffraction setup using two lenses.*

![Cornu Spiral](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Cornu_Spiral.svg/400px-Cornu_Spiral.svg.png)

*Figure 2: The Cornu spiral used in Fresnel diffraction calculations.*

---

## 9. References

1. Born, M. & Wolf, E. *Principles of Optics*, 7th ed. Cambridge University Press, 1999. (Chapter 8)
2. Hecht, E. *Optics*, 5th ed. Addison-Wesley, 2017. (Chapters 9–10)
3. Goodman, J. W. *Introduction to Fourier Optics*, 3rd ed. Roberts & Company, 2005.
4. Jenkins, F. A. & White, H. E. *Fundamentals of Optics*, 4th ed. McGraw-Hill, 2001.
5. [HyperPhysics – Fraunhofer Diffraction](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/fraunhofcrit.html)
6. [HyperPhysics – Fresnel Diffraction](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/fresnelcon.html)
7. [Physics LibreTexts – Fraunhofer Diffraction](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction/4.02%3A_Huygens-Fresnel_Principle)
8. [MIT OCW – Diffraction](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-20/)
