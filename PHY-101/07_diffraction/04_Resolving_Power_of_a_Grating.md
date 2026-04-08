# Resolving Power of a Grating
*Date: April 8, 2026*

---

## 1. Definition

The **resolving power** (or **spectral resolution**) of a diffraction grating is its ability to **distinguish two spectral lines of nearly equal wavelengths** as separate.

Formally, the resolving power $R$ is defined as:

$$\boxed{R = \frac{\lambda}{\Delta\lambda}}$$

Where:
- $\lambda$ = wavelength being observed (mean wavelength)
- $\Delta\lambda$ = minimum resolvable wavelength difference (the **limit of resolution**)

A higher $R$ means the grating can separate lines that are very close together in wavelength.

---

## 2. The Rayleigh Criterion for a Grating

Two spectral lines of wavelengths $\lambda$ and $\lambda + \Delta\lambda$ are said to be **just resolved** (by the **Rayleigh criterion**) when the **principal maximum** of one wavelength falls exactly on the **first minimum** of the other.

---

## 3. Derivation of Resolving Power

### 3.1 Position of Principal Maximum

For wavelength $\lambda$ in order $m$, the grating equation gives the principal maximum at angle $\theta$:

$$d\sin\theta = m\lambda \quad \cdots (1)$$

### 3.2 Position of First Minimum Adjacent to the Principal Maximum

For a grating of $N$ slits, the first minimum adjacent to the $m$-th order principal maximum occurs when the total path difference across all $N$ slits shifts by one extra wavelength:

$$Nd\sin\theta' = Nm\lambda + \lambda \quad \cdots (2)$$

This is because the condition for the first minimum next to the $m$-th order maximum is:

$$d\sin\theta' = m\lambda + \frac{\lambda}{N}$$

### 3.3 Condition for Just Resolution

For just resolution, the principal maximum of $\lambda + \Delta\lambda$ coincides with the first minimum adjacent to the principal maximum of $\lambda$:

$$d\sin\theta' = m(\lambda + \Delta\lambda) \quad \cdots (3)$$

Setting (2) equal to (3):

$$m\lambda + \frac{\lambda}{N} = m(\lambda + \Delta\lambda)$$

$$m\lambda + \frac{\lambda}{N} = m\lambda + m\Delta\lambda$$

$$\frac{\lambda}{N} = m\Delta\lambda$$

$$\frac{\lambda}{\Delta\lambda} = mN$$

$$\boxed{R = \frac{\lambda}{\Delta\lambda} = mN}$$

Where:
- $m$ = order of diffraction
- $N$ = total number of slits (lines) on the grating

### 3.4 Key Insight

The resolving power depends only on:
1. The **order** of diffraction $m$
2. The **total number of slits** $N$

It does **not** directly depend on the grating spacing $d$ or the slit width $a$ (though these affect which orders are accessible).

---

## 4. Factors Affecting Resolving Power

| Factor | Effect on $R$ |
|---|---|
| Number of slits $N$ | $R \propto N$ — more slits → better resolution |
| Order $m$ | $R \propto m$ — higher orders → better resolution |
| Grating width $W = Nd$ | $R = mW/d \cdot 1/d$... effectively $R$ increases with total grating width |
| Wavelength $\lambda$ | Determines the scale; does not affect $R$ itself |

**Physical interpretation:** With more slits, the principal maxima become narrower (sharper), so two nearby wavelengths are more easily separated.

---

## 5. Relationship Between Resolving Power and Grating Width

The total width of the grating illuminated is $W = Nd$. For order $m$:

$$R = mN = m \cdot \frac{W}{d} = \frac{W \cdot m}{d}$$

From the grating equation: $d\sin\theta = m\lambda$, so $m/d = \sin\theta/\lambda$:

$$R = \frac{W\sin\theta}{\lambda}$$

This shows that the resolving power equals the **optical path difference** (in units of $\lambda$) across the full width of the grating at the diffraction angle.

---

## 6. Minimum Resolvable Wavelength Difference

From $R = mN$:

$$\Delta\lambda_{\min} = \frac{\lambda}{mN}$$

This is the **smallest wavelength separation** the grating can resolve.

---

## 7. Comparison with Other Optical Instruments

| Instrument | Resolving Power Formula |
|---|---|
| Diffraction grating | $R = mN$ |
| Prism | $R = b \cdot \dfrac{dn}{d\lambda}$ ($b$ = base length) |
| Fabry–Pérot etalon | $R = m\mathcal{F}$ ($\mathcal{F}$ = finesse) |
| Telescope/microscope | $R = \dfrac{\lambda}{1.22\lambda/D} = D/1.22\lambda$ |

For a high-quality ruled grating (e.g., $N = 100{,}000$ slits, $m = 2$): $R = 200{,}000$. This can resolve the sodium doublet ($\Delta\lambda \approx 0.6\ \text{nm}$) and much finer structure.

---

## 8. Chromatic Resolving Power in Practice

### 8.1 Sodium D Doublet
The sodium D doublet has two lines:
- $\lambda_1 = 589.0\ \text{nm}$
- $\lambda_2 = 589.6\ \text{nm}$

$$\Delta\lambda = 0.6\ \text{nm}, \quad \lambda \approx 589\ \text{nm}$$

$$R_{\min} = \frac{\lambda}{\Delta\lambda} = \frac{589}{0.6} \approx 982$$

So a grating must have $R \geq 982$ to resolve the sodium doublet.

For first order ($m = 1$): need $N \geq 982$ slits.
For second order ($m = 2$): need only $N \geq 491$ slits.

### 8.2 Hydrogen Balmer Series
The $H_\alpha$ line can be split by fine structure:
- $\lambda_1 = 656.272\ \text{nm}$, $\lambda_2 = 656.285\ \text{nm}$

$$\Delta\lambda = 0.013\ \text{nm}, \quad R = \frac{656.28}{0.013} \approx 50{,}483$$

Need $N \approx 50{,}000$ slits in first order.

---

## 9. Numerical Examples

### Example 1 — Minimum slits for resolution
**How many lines must a diffraction grating have to just resolve the sodium doublet ($\lambda_1 = 589.0\ \text{nm}$, $\lambda_2 = 589.6\ \text{nm}$) in the second order?**

$$R = mN \implies N = \frac{R}{m} = \frac{\lambda / \Delta\lambda}{m} = \frac{589/0.6}{2} = \frac{981.7}{2} \approx 491$$

**Minimum 491 lines** needed in second order.

---

### Example 2 — Resolving power of a given grating
**A diffraction grating has 5000 lines/cm and is 4 cm wide. Find its resolving power in the third order.**

$$N = 5000 \times 4 = 20{,}000\ \text{slits}$$

$$R = mN = 3 \times 20{,}000 = 60{,}000$$

$$\Delta\lambda_{\min} = \frac{\lambda}{R} = \frac{589 \times 10^{-9}}{60{,}000} \approx 9.8 \times 10^{-12}\ \text{m} \approx 0.0098\ \text{nm}$$

---

### Example 3 — Can a grating resolve two lines?
**A grating with 3000 lines/cm and width 2 cm is used in second order. Can it resolve two lines at $\lambda_1 = 600.000\ \text{nm}$ and $\lambda_2 = 600.010\ \text{nm}$?**

$$N = 3000 \times 2 = 6000$$

$$R = mN = 2 \times 6000 = 12{,}000$$

$$R_{\text{required}} = \frac{\lambda}{\Delta\lambda} = \frac{600}{0.010} = 60{,}000$$

Since $R_{\text{grating}} = 12{,}000 < 60{,}000 = R_{\text{required}}$, the grating **cannot** resolve these two lines.

---

### Example 4 — Minimum resolvable wavelength difference
**A grating has 600 lines/mm and is 10 cm wide. Find minimum resolvable $\Delta\lambda$ at $\lambda = 500\ \text{nm}$ in first order.**

$$N = 600 \times 100 = 60{,}000$$

$$R = mN = 1 \times 60{,}000 = 60{,}000$$

$$\Delta\lambda_{\min} = \frac{500\ \text{nm}}{60{,}000} \approx 0.00833\ \text{nm} = 8.33 \times 10^{-3}\ \text{nm}$$

---

## 10. Comparison: Resolving Power of Grating vs. Prism

| Property | Grating | Prism |
|---|---|---|
| Formula | $R = mN$ | $R = b\,\frac{dn}{d\lambda}$ |
| Dependence | Order × number of slits | Physical size × dispersion of glass |
| Typical $R$ | $10^4$ to $10^6$ | $10^3$ to $10^5$ |
| Tunability | Change order or number of illuminated lines | Fixed for given glass type |
| Wavelength range | All (reflection gratings) | Limited by glass transmission |

For a glass prism with base $b = 5\ \text{cm}$ and $dn/d\lambda = 800\ \text{/m}$ at $\lambda = 589\ \text{nm}$:

$$R_{\text{prism}} = b \cdot \frac{dn}{d\lambda} = 0.05 \times 800 = 40{,}000$$

---

## 11. Free Spectral Range

The **free spectral range (FSR)** is the range of wavelengths within a given order that do not overlap with adjacent orders:

$$\text{FSR} = \frac{\lambda}{m}$$

For example, for $\lambda = 500\ \text{nm}$, $m = 2$: $\text{FSR} = 250\ \text{nm}$. Within this range, second-order wavelengths 500–750 nm are unambiguous.

---

## 12. Diagram

```
Intensity
  |
  |     λ₁      λ₂
  |      |        |           (not resolved)
  |    ~~~~     ~~~~
  |   ~    ~ ~ ~    ~
  |____________________ θ
  
  |
  |   λ₁           λ₂
  |    |             |        (just resolved — Rayleigh criterion)
  |   ~|~           ~|~
  |  ~ | ~         ~ | ~
  |____________________ θ
```

---

## 13. References

1. Hecht, E. *Optics*, 5th ed. Addison-Wesley, 2017. (Section 10.2.6)
2. Born, M. & Wolf, E. *Principles of Optics*, 7th ed. Cambridge University Press, 1999. (Chapter 8)
3. Jenkins, F. A. & White, H. E. *Fundamentals of Optics*, 4th ed. McGraw-Hill, 2001.
4. Ghatak, A. *Optics*, 6th ed. McGraw-Hill Education, 2017.
5. [HyperPhysics – Grating Resolving Power](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/gratres.html)
6. [Physics LibreTexts – Resolving Power of a Grating](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction/4.04%3A_Diffraction_Gratings#Resolving_Power_of_a_Diffraction_Grating)
7. [Newport – Resolution of Diffraction Gratings](https://www.newport.com/n/diffraction-grating-handbook)
