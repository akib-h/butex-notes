# Bragg's Law
*Date: April 8, 2026*

---

## 1. Introduction

**Bragg's Law** is the fundamental equation governing X-ray (and neutron/electron) diffraction from crystalline materials. It was derived in 1913 by **William Lawrence Bragg** (age 22) and his father **William Henry Bragg**, for which they shared the **Nobel Prize in Physics in 1915** — the only Nobel Prize awarded to a father-and-son pair for a joint discovery.

Bragg's Law provides a simple, elegant relationship between:
- The **wavelength** of X-rays ($\lambda$)
- The **interplanar spacing** of the crystal ($d$)
- The **angle** of incidence/diffraction ($\theta$)

It is the cornerstone of **X-ray crystallography** and all diffraction-based structure determination.

---

## 2. Physical Basis

### 2.1 Reflection Analogy

Bragg treated X-ray diffraction as **specular reflection** from parallel planes of atoms in a crystal. Just as light reflects from mirrors, X-rays "reflect" from crystallographic planes — but only at specific angles where constructive interference occurs.

### 2.2 Path Difference Construction

Consider two parallel crystallographic planes separated by distance $d$ (interplanar spacing). An X-ray beam is incident at a **glancing angle** $\theta$ (measured from the plane surface, not the normal).

```
Incident X-rays          Reflected X-rays
     ↘ θ               θ ↗
——————A——————B—————————A'——————  ← Plane 1 (atoms)
       \   /
        \ /
    d↕   P
        / \
       /   \
——————C——————D——————————C'——————  ← Plane 2 (atoms)
```

Ray 2 (from Plane 2) travels an extra path $CP + PD$ compared to Ray 1 (from Plane 1).

**Geometric derivation:**

From the right triangles:
$$CP = PD = d\sin\theta$$

Therefore, the **total path difference**:

$$\Delta = CP + PD = 2d\sin\theta$$

---

## 3. Bragg's Law

For **constructive interference**, the path difference must equal an integer number of wavelengths:

$$\boxed{2d\sin\theta = n\lambda}$$

Where:
- $d$ = interplanar spacing (distance between adjacent parallel planes of atoms)
- $\theta$ = **glancing angle** (Bragg angle) — angle between the incident beam and the **plane** surface
- $n$ = order of reflection ($n = 1, 2, 3, \ldots$)
- $\lambda$ = wavelength of X-rays

> **Important:** $\theta$ in Bragg's Law is the **glancing angle** (measured from the plane), NOT the angle of incidence measured from the normal. In many optics conventions the angle is from the normal, but in crystallography it is always from the plane.

The diffracted beam exits at the same glancing angle $\theta$ on the other side. The total angle between the incident and diffracted beams (the **scattering angle**) is $2\theta$.

---

## 4. Conditions and Constraints

### 4.1 Maximum Order of Diffraction
Since $\sin\theta \leq 1$:

$$n \leq \frac{2d}{\lambda}$$

For $n = n_{\max}$: $\sin\theta = 1$, $\theta = 90°$ (grazing incidence, practically unobservable).

### 4.2 Minimum Wavelength for Diffraction
For a given $d$, diffraction is only possible if:

$$\lambda \leq 2d$$

For $d = 2$ Å (typical atomic spacing), need $\lambda \leq 4$ Å = 0.4 nm. This lies in the X-ray range.

### 4.3 First-Order vs. Higher Orders

In practice, higher orders ($n > 1$) from spacing $d$ are equivalent to first-order diffraction from spacing $d/n$:

$$2d\sin\theta = n\lambda \equiv 2\left(\frac{d}{n}\right)\sin\theta = \lambda$$

This is why Bragg's law is often written as $n = 1$ with the convention that multiple orders are included by defining effective spacings.

---

## 5. Derivation Using Reciprocal Lattice (Advanced)

In the modern formulation (von Laue), diffraction occurs when the **scattering vector** $\mathbf{Q} = \mathbf{k}_f - \mathbf{k}_i$ equals a **reciprocal lattice vector** $\mathbf{G}_{hkl}$:

$$\mathbf{Q} = \mathbf{G}_{hkl}$$

The magnitude condition:

$$|\mathbf{Q}| = \frac{4\pi\sin\theta}{\lambda} = \frac{2\pi n}{d}$$

$$\Rightarrow 2d\sin\theta = n\lambda \quad \checkmark$$

This shows Bragg's Law is a special case of the more general Laue condition.

---

## 6. Ewald Sphere Construction

The **Ewald sphere** (reflection sphere) is a geometric construction that identifies which crystallographic planes satisfy Bragg's condition for given $\lambda$ and crystal orientation:

1. Draw the incident wave vector $\mathbf{k}_i$ with $|\mathbf{k}_i| = 1/\lambda$.
2. Draw a sphere of radius $1/\lambda$ (Ewald sphere).
3. Place the crystal's reciprocal lattice at the origin of $\mathbf{k}_i$.
4. Whenever a reciprocal lattice point lies **on the surface** of the Ewald sphere, Bragg's condition is satisfied for that set of planes.

This is the standard tool for planning and interpreting diffraction experiments.

---

## 7. Experimental Techniques Based on Bragg's Law

### 7.1 X-ray Diffractometer ($\theta$–$2\theta$ Scan)

The sample is rotated by $\theta$ and the detector by $2\theta$ simultaneously. A **diffractogram** (intensity vs. $2\theta$) is recorded.

Peak positions give interplanar spacings via:
$$d = \frac{n\lambda}{2\sin\theta}$$

### 7.2 Wavelength Determination
Rearranging Bragg's law:
$$\lambda = \frac{2d\sin\theta}{n}$$

If $d$ is known (from a standard crystal), $\lambda$ can be measured precisely.

### 7.3 Crystal Structure Determination
By measuring many ($hkl$) peaks, the complete set of interplanar spacings is determined, from which the unit cell parameters are extracted.

### 7.4 Neutron Diffraction
Neutrons have wavelengths $\sim 1$ Å at thermal energies. Bragg's law applies identically. Neutrons are sensitive to light atoms (H, Li) and magnetic moments — complementary to X-rays.

### 7.5 Electron Diffraction
Electrons of energy 50–300 keV have $\lambda \sim 0.002$–$0.008$ Å. Used in transmission electron microscopy (TEM/SAED patterns). Bragg's law applies but multiple scattering is important.

---

## 8. Crystal Systems and Bragg's Law

### 8.1 Cubic System (Most Symmetric)

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

Combined with Bragg's law:

$$\sin^2\theta = \frac{\lambda^2}{4a^2}(h^2 + k^2 + l^2)$$

This means $\sin^2\theta \propto (h^2 + k^2 + l^2)$, and the ratios of $\sin^2\theta$ values reveal the structure type:

| Ratio $h^2+k^2+l^2$ | SC | BCC | FCC |
|---|---|---|---|
| 1 | (100) | absent | absent |
| 2 | (110) | (110) | absent |
| 3 | (111) | absent | (111) |
| 4 | (200) | (200) | (200) |
| 5 | (210) | absent | absent |
| 6 | (211) | (211) | absent |
| 8 | (220) | (220) | (220) |

By examining which peaks are present/absent, the Bravais lattice type is identified.

### 8.2 Tetragonal, Orthorhombic, etc.

General formula for orthorhombic:
$$\frac{1}{d_{hkl}^2} = \frac{h^2}{a^2} + \frac{k^2}{b^2} + \frac{l^2}{c^2}$$

Combined with $d = \lambda/(2\sin\theta)$ from Bragg's law.

---

## 9. Bragg's Law and Spectroscopy: Crystal Spectrometers

Before modern grating spectrometers, X-ray wavelengths were measured using **crystal spectrometers** based on Bragg's law:

1. Use a crystal with known $d$ (e.g., NaCl, calcite).
2. Rotate the crystal until a diffraction peak is observed.
3. Measure $\theta$.
4. Calculate $\lambda = 2d\sin\theta/n$.

This is how Moseley's law (characteristic X-ray wavelengths vs. atomic number) was established in 1913–1914.

---

## 10. Numerical Examples

### Example 1 — Basic Application
**X-rays of wavelength $1.54$ Å are incident on a crystal with $d = 2.82$ Å (NaCl, 200 planes). Find the angle for first-order diffraction.**

$$\sin\theta = \frac{n\lambda}{2d} = \frac{1 \times 1.54}{2 \times 2.82} = \frac{1.54}{5.64} = 0.2730$$

$$\theta = 15.84°, \quad 2\theta = 31.68°$$

---

### Example 2 — Second Order
**Find the angle for second-order diffraction using the same values as Example 1.**

$$\sin\theta = \frac{2 \times 1.54}{2 \times 2.82} = \frac{3.08}{5.64} = 0.5461$$

$$\theta = 33.07°, \quad 2\theta = 66.14°$$

---

### Example 3 — Wavelength from Bragg's Law
**A crystal with $d = 3.5$ Å gives first-order diffraction at $\theta = 12.5°$. Find $\lambda$.**

$$\lambda = 2d\sin\theta = 2 \times 3.5 \times \sin(12.5°) = 7.0 \times 0.2164 = 1.515\ \text{Å}$$

---

### Example 4 — Interplanar Spacing from Diffractogram
**An XRD scan of an unknown cubic material using Cu K$\alpha$ ($\lambda = 1.5406$ Å) shows a peak at $2\theta = 43.3°$. Find $d$.**

$$\theta = 21.65°, \quad \sin\theta = 0.3688$$

$$d = \frac{n\lambda}{2\sin\theta} = \frac{1.5406}{2 \times 0.3688} = \frac{1.5406}{0.7376} = 2.089\ \text{Å}$$

For FCC copper (known peak at $2\theta = 43.3°$ is (111) plane, $d_{111} = 2.087$ Å). ✓

---

### Example 5 — Maximum Order
**For X-rays with $\lambda = 0.71$ Å (Mo K$\alpha$) and $d = 1.81$ Å (diamond 111), what is the maximum diffraction order?**

$$n_{\max} = \frac{2d}{\lambda} = \frac{2 \times 1.81}{0.71} = \frac{3.62}{0.71} = 5.1$$

Maximum observable order: $n = 5$ (at $\theta = 79.2°$, near grazing).

---

### Example 6 — Lattice Constant of BCC Iron
**BCC iron gives a peak at $2\theta = 44.67°$ for (110) planes, using $\lambda = 1.5406$ Å. Find the lattice constant.**

$$\theta = 22.335°, \quad \sin\theta = 0.3796$$

$$d_{110} = \frac{\lambda}{2\sin\theta} = \frac{1.5406}{0.7592} = 2.029\ \text{Å}$$

$$a = d_{110}\sqrt{h^2+k^2+l^2} = 2.029 \times \sqrt{2} = 2.869\ \text{Å}$$

Literature value: $a_{\text{Fe}} = 2.867$ Å ✓

---

## 11. Bragg's Law in Different Wave Contexts

| Wave type | Typical $\lambda$ | Typical $d$ | Application |
|---|---|---|---|
| X-rays | 0.5–2.5 Å | 1–10 Å | Crystal structure, proteins |
| Neutrons | 1–3 Å | 1–10 Å | Hydrogen positions, magnetism |
| Electrons | 0.02–0.08 Å | 1–10 Å | TEM, nanostructure |
| Light | 400–700 nm | $\sim\lambda$ | Diffraction gratings (not Bragg) |

---

## 12. Limitations of Bragg's Law

1. **Assumes perfectly parallel, perfectly flat planes** — real crystals have strain, defects, mosaicity.
2. **Does not predict intensities** — only positions of peaks. Intensities require the structure factor $F_{hkl}$.
3. **Kinematic (single-scattering) approximation** — ignores multiple scattering (important for electrons).
4. **Does not account for thermal vibrations (Debye-Waller factor)** — atoms vibrate, reducing peak intensities.
5. **Requires a periodic structure** — not directly applicable to amorphous or liquid materials (use pair distribution function analysis instead).

---

## 13. Diagram

```
         Incident beam        Diffracted beam
              ↘ θ             θ ↗
—————●—————●—————●—————●————  ← Plane 1 (interplanar spacing d)
              \   /
         d ↕   ×           Path diff. = 2d sinθ
              /   \
—————●—————●—————●—————●————  ← Plane 2

    When: 2d sinθ = nλ → Bright spot in diffraction pattern
    When: 2d sinθ ≠ nλ → Destructive interference → No peak
```

![Bragg diffraction diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bragg_diffraction_2.svg/640px-Bragg_diffraction_2.svg.png)

*Figure: Bragg diffraction geometry showing reflection from two parallel atomic planes. The path difference equals 2d sinθ.*

---

## 14. References

1. Bragg, W.L. "The Diffraction of Short Electromagnetic Waves by a Crystal." *Proceedings of the Cambridge Philosophical Society*, 17 (1913): 43–57.
2. Cullity, B. D. & Stock, S. R. *Elements of X-Ray Diffraction*, 3rd ed. Prentice Hall, 2001.
3. Hammond, C. *The Basics of Crystallography and Diffraction*, 4th ed. Oxford University Press, 2015.
4. Kittel, C. *Introduction to Solid State Physics*, 8th ed. Wiley, 2004.
5. Warren, B. E. *X-Ray Diffraction*. Dover Publications, 1990.
6. [HyperPhysics – Bragg's Law](http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/bragg.html)
7. [Physics LibreTexts – Bragg's Law](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction/4.07%3A_X-Ray_Diffraction)
8. [Nobel Prize – W.H. and W.L. Bragg (1915)](https://www.nobelprize.org/prizes/physics/1915/summary/)
9. [IUCr – Bragg's Law](https://www.iucr.org/education/pamphlets/2/full-text)
