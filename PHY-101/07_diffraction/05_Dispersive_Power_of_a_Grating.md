# Dispersive Power of a Grating
*Date: April 8, 2026*

---

## 1. Definition

The **dispersive power** (also called **angular dispersion**) of a diffraction grating measures how effectively the grating **separates light of different wavelengths** in terms of angle.

Formally, the dispersive power $D$ is defined as the rate of change of the diffraction angle $\theta$ with respect to wavelength $\lambda$:

$$\boxed{D = \frac{d\theta}{d\lambda}}$$

It has units of **radians per metre** (rad/m) or **degrees per nanometre** (°/nm).

A **higher** dispersive power means that two closely spaced wavelengths are separated by a larger angle — making it easier to distinguish them.

---

## 2. Derivation of Dispersive Power

### 2.1 Starting from the Grating Equation

For normal incidence, the grating equation is:

$$d\sin\theta = m\lambda \quad \cdots (1)$$

Differentiate both sides with respect to $\lambda$ (treating $d$ and $m$ as constants):

$$d \cos\theta \cdot \frac{d\theta}{d\lambda} = m$$

$$\frac{d\theta}{d\lambda} = \frac{m}{d\cos\theta}$$

$$\boxed{D = \frac{d\theta}{d\lambda} = \frac{m}{d\cos\theta}}$$

### 2.2 Interpretation

- $D$ increases with **order** $m$ (higher orders → greater angular separation)
- $D$ increases as $d$ decreases (finer grating → greater separation)
- $D$ increases as $\theta$ increases (at grazing diffraction angles, dispersion is maximum)

---

## 3. Alternative Form

Using the grating equation $\sin\theta = m\lambda/d$, we can write:

$$\cos\theta = \sqrt{1 - \sin^2\theta} = \sqrt{1 - \left(\frac{m\lambda}{d}\right)^2}$$

Substituting into the dispersive power formula:

$$D = \frac{m}{d\sqrt{1 - (m\lambda/d)^2}}$$

This shows that dispersive power **increases rapidly** as $m\lambda \to d$ (i.e., as the angle $\theta \to 90°$).

---

## 4. Linear Dispersion

In practice, for a screen or detector at distance $L$ from the grating (or at the focal plane of a lens of focal length $f$), the **linear dispersion** describes the physical separation of wavelengths per unit wavelength on the screen:

$$\frac{dx}{d\lambda} = L \cdot \frac{d\theta}{d\lambda} = \frac{mL}{d\cos\theta} = \frac{mf}{d\cos\theta}$$

Where $x = L\tan\theta \approx L\theta$ (small angle approximation for the linear position).

Units: mm/nm or μm/nm.

---

## 5. Reciprocal Linear Dispersion

Spectrograph performance is often quoted in terms of the **reciprocal linear dispersion** (or **plate factor** / **spectral resolution**):

$$P = \frac{d\lambda}{dx} = \frac{d\cos\theta}{mf}$$

Units: nm/mm.

A smaller plate factor means finer wavelength resolution per millimetre of detector width.

---

## 6. Factors Affecting Dispersive Power

| Factor | Effect on $D = m/(d\cos\theta)$ |
|---|---|
| Order $m$ | $D \propto m$ — higher order, more dispersion |
| Grating spacing $d$ | $D \propto 1/d$ — finer grating, more dispersion |
| Diffraction angle $\theta$ | $D \propto 1/\cos\theta$ — larger angle, more dispersion |
| Wavelength $\lambda$ | Indirectly (affects $\theta$ through grating equation) |
| Focal length $f$ of camera lens | Affects linear dispersion, not angular |

---

## 7. Comparison: Grating vs. Prism Dispersion

### 7.1 Grating Dispersive Power
$$D_{\text{grating}} = \frac{m}{d\cos\theta}$$

This is nearly **linear** in $\lambda$ (because $\cos\theta$ varies slowly for small $\theta$).

### 7.2 Prism Dispersive Power
For a prism of apex angle $A$, the angular deviation $\delta$ of a ray depends on $\lambda$ through the refractive index $n(\lambda)$:

$$D_{\text{prism}} = \frac{d\delta}{d\lambda} = \frac{2\sin(A/2)}{\sqrt{1-n^2\sin^2(A/2)}} \cdot \frac{dn}{d\lambda}$$

Prism dispersion is **highly non-linear** (greater dispersion at shorter wavelengths due to anomalous dispersion of glass).

| Property | Grating | Prism |
|---|---|---|
| Dispersion formula | $D = m/(d\cos\theta)$ | $D = f(n, A, \lambda)$ |
| Linearity | Nearly linear in $\lambda$ | Highly non-linear |
| Range | Entire EM spectrum | Visible + limited IR/UV |
| Tunability | Change $m$ or $d$ | Fixed for given glass |
| Typical $D$ | $10^5$ to $10^7$ rad/m | $10^4$ to $10^5$ rad/m |

---

## 8. Relationship Between Resolving Power and Dispersive Power

The resolving power $R$ and angular dispersion $D$ are related through the **angular width of a diffraction maximum** $\delta\theta$:

$$R = \frac{\lambda}{\Delta\lambda} = \frac{\lambda \cdot D}{\delta\theta} = mN$$

The **Rayleigh limit** sets $\delta\theta = \lambda/(Nd\cos\theta)$ (angular half-width of principal maximum), so:

$$R = D \cdot \frac{Nd\cos\theta}{1} \cdot \frac{1}{\lambda} \cdot \lambda = mN \quad \checkmark$$

This confirms consistency: for a fixed $m$ and $d$, a grating with more lines ($N$) has better resolving power but the same angular dispersion per order.

**Key distinction:**
- **Angular dispersion $D$** = how far apart wavelengths are *spatially* spread (independent of $N$).
- **Resolving power $R$** = whether two closely spaced wavelengths are *distinguishable* (depends on $N$).

Both are needed for good spectroscopy: high $D$ spreads the spectrum, high $R$ makes individual lines sharp.

---

## 9. Numerical Examples

### Example 1 — Angular Dispersion
**A grating has $d = 2\ \mu\text{m}$ (500 lines/mm). Light of $\lambda = 500\ \text{nm}$ is diffracted in first order. Find the angular dispersion.**

First, find $\theta$:
$$\sin\theta = \frac{m\lambda}{d} = \frac{1 \times 500 \times 10^{-9}}{2 \times 10^{-6}} = 0.25 \implies \theta = 14.48°$$

$$\cos\theta = \cos(14.48°) = 0.9682$$

$$D = \frac{m}{d\cos\theta} = \frac{1}{2 \times 10^{-6} \times 0.9682} = 5.16 \times 10^{5}\ \text{rad/m}$$

Converting: $D = 5.16 \times 10^5\ \text{rad/m} = 0.516\ \text{rad/mm} = 29.6°/\text{mm}$

---

### Example 2 — Separation of Sodium D Lines
**Using the grating from Example 1 ($d = 2\ \mu\text{m}$, first order), calculate the angular separation of the sodium doublet ($\lambda_1 = 589.0\ \text{nm}$, $\lambda_2 = 589.6\ \text{nm}$).**

$$D = \frac{m}{d\cos\theta} \approx \frac{1}{2 \times 10^{-6} \times \cos(17.1°)} = \frac{1}{2 \times 10^{-6} \times 0.956} = 5.23 \times 10^5\ \text{rad/m}$$

$$\Delta\theta = D \cdot \Delta\lambda = 5.23 \times 10^5 \times 0.6 \times 10^{-9} = 3.14 \times 10^{-4}\ \text{rad} \approx 0.018°$$

---

### Example 3 — Linear Dispersion on Screen
**A grating spectrometer has a camera lens with $f = 500\ \text{mm}$, $d = 1.667\ \mu\text{m}$ (600 lines/mm), first order, $\theta = 20.7°$ at $\lambda = 589\ \text{nm}$. Find the linear dispersion.**

$$\frac{dx}{d\lambda} = \frac{mf}{d\cos\theta} = \frac{1 \times 500}{1.667 \times 10^{-3} \times \cos(20.7°)} \approx \frac{500}{1.667 \times 10^{-3} \times 0.9354}$$

$$= \frac{500}{1.559 \times 10^{-3}} = 3.21 \times 10^5\ \text{mm/m} = 0.321\ \text{mm/nm}$$

Plate factor: $P = 1/0.321 \approx 3.12\ \text{nm/mm}$

---

### Example 4 — Comparing Two Gratings
**Grating A: 300 lines/mm; Grating B: 1200 lines/mm. Both used in first order at $\lambda = 550\ \text{nm}$. Compare their angular dispersions.**

Grating A: $d_A = 1/300\ \text{mm} = 3333\ \text{nm}$, $\sin\theta_A = 550/3333 = 0.165$, $\cos\theta_A = 0.986$
$$D_A = \frac{1}{3333 \times 10^{-9} \times 0.986} = 3.04 \times 10^5\ \text{rad/m}$$

Grating B: $d_B = 1/1200\ \text{mm} = 833\ \text{nm}$, $\sin\theta_B = 550/833 = 0.660$, $\cos\theta_B = 0.751$
$$D_B = \frac{1}{833 \times 10^{-9} \times 0.751} = 1.60 \times 10^6\ \text{rad/m}$$

Grating B has **5.3×** greater angular dispersion.

---

## 10. Diagram

```
Angular position θ
    |
    |                         ← Violet (λ=400nm) at smaller θ
    |        ●                       ↑ Large D → widely spaced
    |     ●
    |  ●                      ← Red (λ=700nm) at larger θ
    |
    |
    ●——————————————— λ (wavelength)
    
    High D: widely spread spectrum (good for spectroscopy)
    Low D:  narrowly spread spectrum
```

---

## 11. Summary Table

| Quantity | Formula | Meaning |
|---|---|---|
| Angular dispersion | $D = \dfrac{d\theta}{d\lambda} = \dfrac{m}{d\cos\theta}$ | Angular separation per unit $\Delta\lambda$ |
| Linear dispersion | $\dfrac{dx}{d\lambda} = \dfrac{mf}{d\cos\theta}$ | Physical separation on focal plane per unit $\Delta\lambda$ |
| Plate factor (reciprocal) | $P = \dfrac{d\cos\theta}{mf}$ | Wavelength per mm on detector |
| Resolving power | $R = mN$ | Minimum resolvable $\lambda/\Delta\lambda$ |

---

## 12. References

1. Hecht, E. *Optics*, 5th ed. Addison-Wesley, 2017. (Section 10.2.5)
2. Jenkins, F. A. & White, H. E. *Fundamentals of Optics*, 4th ed. McGraw-Hill, 2001.
3. Born, M. & Wolf, E. *Principles of Optics*, 7th ed. Cambridge University Press, 1999.
4. Ghatak, A. *Optics*, 6th ed. McGraw-Hill Education, 2017.
5. Palmer, C. *Diffraction Grating Handbook*, 8th ed. Newport Corporation, 2020.
6. [HyperPhysics – Grating Dispersion](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/grating.html)
7. [Physics LibreTexts – Diffraction Gratings](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction/4.04%3A_Diffraction_Gratings)
