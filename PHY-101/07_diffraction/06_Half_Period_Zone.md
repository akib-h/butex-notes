# Half Period Zone
*Date: April 8, 2026*

---

## 1. Introduction

The **half-period zone** (also called **Fresnel zone**) concept is a powerful tool to understand how a spherical wavefront propagates in free space and how it produces the observed intensity at a given point. It underpins the theory of zone plates, diffraction at circular apertures, and the Huygens–Fresnel principle in a quantitative way.

The construction was developed by **Augustin-Jean Fresnel** in the early 19th century to explain why light appears to travel in straight lines despite being a wave, and to quantify diffraction effects.

---

## 2. Construction of Half-Period Zones

### 2.1 Setup

Consider a point source $S$ emitting monochromatic light of wavelength $\lambda$. Spherical wavefronts expand outward. We wish to find the amplitude of the wave at an observation point $P$ at distance $b$ from the wavefront.

Let the wavefront (of radius $r_0$) have its pole (closest point to $P$) at $O$. The distance $OP = b$.

### 2.2 Definition of the $m$-th Fresnel Zone

The **$m$-th half-period zone** is the annular region on the wavefront bounded by circles whose distances from $P$ differ by $m\lambda/2$ and $(m-1)\lambda/2$ from the pole $O$:

- Inner boundary of zone $m$: $OP + (m-1)\dfrac{\lambda}{2}$ from $P$
- Outer boundary of zone $m$: $OP + m\dfrac{\lambda}{2}$ from $P$

In other words, the outer edge of the $m$-th zone is at distance:

$$r_m = b + \frac{m\lambda}{2}$$

from point $P$.

### 2.3 Radius of the $m$-th Zone

Using the geometry (right triangle with the wavefront):

$$\rho_m^2 + (r_0)^2 = (r_0 + r_m - b)^2$$

For a plane wave or using the approximation (ignoring $\lambda^2$ terms), the radius $\rho_m$ of the $m$-th zone on the wavefront is:

$$\boxed{\rho_m = \sqrt{m\lambda b}}$$

For a general case (source at distance $a$, observation at distance $b$):

$$\boxed{\rho_m = \sqrt{\frac{m\lambda ab}{a+b}}}$$

Where:
- $m$ = zone number
- $\lambda$ = wavelength
- $a$ = distance from source $S$ to wavefront
- $b$ = distance from wavefront to point $P$

---

## 3. Area of Each Zone

The **area** of the $m$-th zone:

$$A_m = \pi(\rho_m^2 - \rho_{m-1}^2) = \pi\left(m\lambda b - (m-1)\lambda b\right) = \pi\lambda b$$

**Remarkable result:** All half-period zones have approximately **equal area** ($\pi\lambda b$), independent of zone number $m$!

This equal area means each zone sends approximately the same amount of energy toward $P$.

---

## 4. Phase and Amplitude of Each Zone

### 4.1 Phase Relationship

The path difference between the outer edge of zone $m$ and zone $m-1$ is $\lambda/2$. This corresponds to a **phase difference of $\pi$** (half a period).

Therefore:
- Zone 1 and Zone 2 are **out of phase** by $\pi$ → their contributions partially cancel.
- Zone 1 and Zone 3 are **in phase** → they reinforce.
- Odd zones and even zones are in **anti-phase**.

### 4.2 Amplitude from Each Zone

Let $a_m$ be the amplitude contribution of the $m$-th zone to point $P$. Due to:
1. The slightly **increasing distance** $r_m$ from successive zones → amplitude slightly decreases.
2. The slightly **increasing obliquity factor** (zones near the edge of the wavefront send less light forward).

The amplitudes form a slowly decreasing sequence:

$$a_1 > a_2 > a_3 > \cdots > a_m > \cdots \to 0$$

### 4.3 Total Amplitude: Superposition

Since consecutive zones are out of phase by $\pi$, the total amplitude from the full (unobstructed) wavefront:

$$A = a_1 - a_2 + a_3 - a_4 + a_5 - \cdots$$

Grouping terms cleverly (assuming slowly decreasing amplitudes):

$$A = \frac{a_1}{2} + \frac{a_1 - 2a_2 + a_3}{2} + \frac{a_3 - 2a_4 + a_5}{2} + \cdots$$

Since $a_m \approx \frac{a_{m-1} + a_{m+1}}{2}$ (slowly varying), each bracket $\approx 0$:

$$\boxed{A = \frac{a_1}{2} + \frac{a_N}{2} \approx \frac{a_1}{2}}$$

(The last zone $N$ contributes $a_N/2 \to 0$ as $N \to \infty$.)

### 4.4 Intensity from Full Wavefront

$$\boxed{I = A^2 = \frac{a_1^2}{4}}$$

Compare with a single zone alone (amplitude = $a_1$, intensity = $a_1^2$):

$$I_{\text{full}} = \frac{a_1^2}{4} = \frac{I_1}{4}$$

And with just the first zone open (amplitude = $a_1$):
$$I_1 = a_1^2 = 4 I_{\text{full}}$$

**The first zone alone produces 4 times the intensity of the full unobstructed wavefront!**

This is the principle behind the **zone plate**.

---

## 5. Significance of the Half-Period Zone Construction

1. **Explains rectilinear propagation:** The unobstructed wavefront gives amplitude $a_1/2$, consistent with light appearing to travel in straight lines (all contributions except the first zone cancel in pairs).

2. **Explains diffraction:** When an obstacle blocks some zones, the cancellation is incomplete, and the amplitude at $P$ changes dramatically.

3. **Basis of zone plate design:** By blocking alternate zones, the cancellations are eliminated, dramatically increasing intensity at $P$.

4. **Poisson/Arago spot:** When a circular disc blocks the first $m$ zones, the $(m+1)$-th zone acts like a new "first zone," giving a bright spot at the center of the geometrical shadow.

---

## 6. Half-Period Zones for Different Wavefront Types

### 6.1 Spherical Wavefront (General)
$$\rho_m = \sqrt{\frac{m\lambda ab}{a+b}}$$

### 6.2 Plane Wavefront ($a \to \infty$)
$$\rho_m = \sqrt{m\lambda b}$$

### 6.3 Convergent Wavefront ($b$ is the distance to focal point beyond $P$)
The zone construction applies with modified radii; focal properties become important for zone plates.

---

## 7. Half-Period Zone Thickness

The **radial width** of the $m$-th zone:

$$\Delta\rho_m = \rho_m - \rho_{m-1} = \sqrt{m\lambda b} - \sqrt{(m-1)\lambda b}$$

For large $m$:

$$\Delta\rho_m \approx \frac{\sqrt{\lambda b}}{2\sqrt{m}} = \frac{\rho_1}{2\sqrt{m}}$$

The zones become **progressively narrower** at larger $m$ — which is why fabricating fine zone plates (many narrow outer zones) is technically challenging.

---

## 8. Numerical Examples

### Example 1 — Radius of First Zone
**Find the radius of the first Fresnel zone for a plane wave of $\lambda = 550\ \text{nm}$ incident on a wavefront, observed at $b = 1\ \text{m}$.**

$$\rho_1 = \sqrt{\lambda b} = \sqrt{550 \times 10^{-9} \times 1} = \sqrt{5.5 \times 10^{-7}} = 7.42 \times 10^{-4}\ \text{m} = 0.742\ \text{mm}$$

---

### Example 2 — Radius of 10th Zone
**Using the same setup ($\lambda = 550\ \text{nm}$, $b = 1\ \text{m}$, plane wave):**

$$\rho_{10} = \sqrt{10 \times 550 \times 10^{-9} \times 1} = \sqrt{5.5 \times 10^{-6}} = 2.345 \times 10^{-3}\ \text{m} = 2.345\ \text{mm}$$

Note: $\rho_{10} = \sqrt{10} \cdot \rho_1 = 3.162 \times 0.742 = 2.346\ \text{mm}$ ✓

---

### Example 3 — General Case (Point Source)
**A point source is at $a = 2\ \text{m}$ from a wavefront. An observer is at $b = 3\ \text{m}$. $\lambda = 600\ \text{nm}$. Find radius of 5th zone.**

$$\rho_5 = \sqrt{\frac{5 \times 600 \times 10^{-9} \times 2 \times 3}{2+3}} = \sqrt{\frac{5 \times 600 \times 10^{-9} \times 6}{5}}$$

$$= \sqrt{5 \times 600 \times 10^{-9} \times 1.2} = \sqrt{3.6 \times 10^{-6}} = 1.897 \times 10^{-3}\ \text{m} \approx 1.90\ \text{mm}$$

---

### Example 4 — Number of Zones Across Aperture
**An aperture of diameter $3\ \text{mm}$ is placed in a plane wave ($\lambda = 500\ \text{nm}$) at $b = 2\ \text{m}$. How many Fresnel zones does it contain?**

$$\rho_m = \sqrt{m\lambda b} \implies m = \frac{\rho^2}{\lambda b} = \frac{(1.5 \times 10^{-3})^2}{500 \times 10^{-9} \times 2} = \frac{2.25 \times 10^{-6}}{10^{-6}} = 2.25$$

So the aperture contains approximately **2 complete zones**. This means $N_F \approx 2.25$ (Fresnel regime). ✓

---

## 9. Diagram

```
Source S                  Wavefront                    Point P
  ●  ————————————————————[  Zones  ]——————————————————  ●
         a                    ↑                   b
                        Zone 1 (inner)
                        Zone 2 (annular ring)
                        Zone 3
                        ...
                        
  Zones: ⊙ ○ ⊙ ○ ⊙ ...  (alternating odd/even)
  Odd zones (1,3,5,...): constructive contribution to P
  Even zones (2,4,6,...): destructive contribution to P
```

![Fresnel zones diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Fresnel_zone_construction.svg/640px-Fresnel_zone_construction.svg.png)

*Figure: Fresnel half-period zones on a spherical wavefront. The zones alternate in phase, and their cumulative effect determines the amplitude at P.*

---

## 10. References

1. Born, M. & Wolf, E. *Principles of Optics*, 7th ed. Cambridge University Press, 1999. (Section 8.2)
2. Hecht, E. *Optics*, 5th ed. Addison-Wesley, 2017. (Section 10.3)
3. Jenkins, F. A. & White, H. E. *Fundamentals of Optics*, 4th ed. McGraw-Hill, 2001.
4. Ghatak, A. *Optics*, 6th ed. McGraw-Hill Education, 2017.
5. [HyperPhysics – Fresnel Zones](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/fresnelzone.html)
6. [Physics LibreTexts – Huygens–Fresnel Principle](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction/4.02%3A_Huygens-Fresnel_Principle)
7. [MIT OCW 8.03 – Waves](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/)
