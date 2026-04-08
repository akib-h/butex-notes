# X-ray Diffraction
*Date: April 8, 2026*

---

## 1. Introduction

**X-ray diffraction (XRD)** is the elastic scattering of X-rays by the electrons in a crystalline material, producing a characteristic diffraction pattern that reveals the **atomic structure** of the material. It is one of the most powerful techniques in materials science, chemistry, biology, and physics.

X-rays have wavelengths in the range of **0.01–10 nm** (typically 0.05–0.25 nm = 0.5–2.5 Å for crystallographic use), which is comparable to the **interatomic spacings** in crystals (typically 1–5 Å). This makes X-rays ideal for probing crystal lattices — just as visible light diffracts from a grating with spacing $\sim \lambda$.

---

## 2. Historical Background

| Year | Discovery | Scientist |
|---|---|---|
| 1895 | Discovery of X-rays | Wilhelm Röntgen (Nobel Prize 1901) |
| 1912 | X-ray diffraction by crystals predicted and observed | Max von Laue (Nobel Prize 1914) |
| 1913 | Bragg's law derived; crystal structures solved | W.H. & W.L. Bragg (Nobel Prize 1915) |
| 1953 | DNA double helix structure | Watson, Crick, Franklin, Wilkins (using XRD) |
| 1958 | First protein structure (myoglobin) | John Kendrew (Nobel Prize 1962) |
| 2003 | Human ribosome structure | Ramakrishnan, Steitz, Yonath (Nobel Prize 2009) |

---

## 3. Crystal Structure and Lattice Planes

### 3.1 Crystal Lattice

A **crystal** is a solid in which atoms are arranged in a periodic, repeating pattern in three dimensions. The **unit cell** is the smallest repeating unit.

Examples:
- NaCl: Face-centered cubic (FCC), $a = 5.64$ Å
- Diamond: FCC with basis, $a = 3.57$ Å
- Graphite: Hexagonal, $a = 2.46$ Å, $c = 6.71$ Å

### 3.2 Miller Indices

Planes in a crystal are described by **Miller indices** $(hkl)$:
- Defined by the intercepts of the plane with the unit cell axes
- The interplanar spacing for cubic crystals:

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

| Plane $(hkl)$ | Formula | Example (NaCl, $a = 5.64$ Å) |
|---|---|---|
| (100) | $d = a/1$ | 5.64 Å |
| (110) | $d = a/\sqrt{2}$ | 3.99 Å |
| (111) | $d = a/\sqrt{3}$ | 3.26 Å |
| (200) | $d = a/2$ | 2.82 Å |

---

## 4. The Mechanism of X-ray Diffraction

### 4.1 Scattering by Electrons

An X-ray photon incident on an atom causes its electrons to **oscillate** and re-radiate (scatter) X-rays of the same frequency (elastic/coherent scattering = Thomson scattering). Each atom acts as a point scatterer.

### 4.2 Constructive Interference

The diffracted beams from different atoms are in phase only for specific angles. This is determined by the **path difference** between waves scattered from successive planes of atoms.

For two parallel atomic planes separated by distance $d$, a wave incident at angle $\theta$ (measured from the plane, not from the normal):

```
Incident rays  →→→→→→→→→
                θ    θ
——————————————————————————— Plane 1 (atoms)
         d  ↕
——————————————————————————— Plane 2 (atoms)
```

**Path difference** between the ray reflected from plane 2 vs. plane 1:

$$\Delta = 2d\sin\theta$$

For constructive interference (Bragg's condition):

$$\boxed{2d\sin\theta = n\lambda}$$

This is **Bragg's Law** (treated in detail in the next section).

---

## 5. Types of X-ray Diffraction Methods

### 5.1 Laue Method
- **White (polychromatic) X-rays** on a **stationary single crystal**.
- Multiple wavelengths satisfy Bragg's condition for fixed $d$ and $\theta$.
- Produces a pattern of spots (Laue spots) on a flat film.
- Use: Determines crystal orientation; first method used historically.

### 5.2 Rotating Crystal Method
- **Monochromatic X-rays** on a **single crystal that rotates**.
- As the crystal rotates, different planes come into Bragg condition for the fixed $\lambda$.
- Produces layer lines on cylindrical film.
- Use: Early protein crystallography.

### 5.3 Powder Method (Debye-Scherrer Method)
- **Monochromatic X-rays** on a **powdered (polycrystalline) sample**.
- The powder contains crystallites in all orientations; some are always at the correct Bragg angle.
- Produces rings (Debye-Scherrer rings) on film, or peaks in a diffractometer scan.
- Use: Phase identification, unit cell determination, stress/strain analysis.

### 5.4 X-ray Diffractometer (XRD)
- Modern instrument: **monochromatic** X-ray tube (Cu K$\alpha$, $\lambda = 1.5406$ Å most common).
- $\theta$–$2\theta$ scan: specimen rotates by $\theta$, detector by $2\theta$.
- Records diffracted intensity vs. $2\theta$ angle.
- Output: **diffractogram** — a plot of intensity vs. $2\theta$.

---

## 6. Structure Factor

The **structure factor** $F_{hkl}$ determines the amplitude of the X-ray beam diffracted from planes $(hkl)$:

$$F_{hkl} = \sum_j f_j \exp\left[2\pi i (hx_j + ky_j + lz_j)\right]$$

Where:
- $f_j$ = **atomic form factor** of atom $j$ (depends on atomic number and scattering angle)
- $(x_j, y_j, z_j)$ = fractional coordinates of atom $j$ in the unit cell

The **intensity** of the diffracted beam:
$$I_{hkl} \propto |F_{hkl}|^2$$

**Systematic absences** occur when $F_{hkl} = 0$ due to destructive interference from the crystal basis:
- Body-centered cubic (BCC): $h+k+l$ = odd → $F = 0$
- Face-centered cubic (FCC): mixed parities → $F = 0$

These absences are used to identify crystal structure type.

---

## 7. Scherrer Equation (Crystallite Size)

The width of XRD peaks is related to crystallite size by the **Scherrer equation**:

$$\boxed{D = \frac{K\lambda}{\beta\cos\theta}}$$

Where:
- $D$ = mean crystallite size (in nm or Å)
- $K$ = Scherrer constant ($\approx 0.9$ for spherical crystallites)
- $\lambda$ = X-ray wavelength
- $\beta$ = full width at half maximum (FWHM) of the diffraction peak in radians
- $\theta$ = Bragg angle

Broader peaks → smaller crystallites. Perfect crystals → infinitely narrow peaks.

---

## 8. Information Obtained from XRD

1. **Phase identification:** Match diffractogram against JCPDS/ICDD database (~1,000,000 entries).
2. **Unit cell parameters:** Lattice constants ($a, b, c, \alpha, \beta, \gamma$) from peak positions.
3. **Crystal structure:** Atom positions from Rietveld refinement.
4. **Crystallite size:** From peak width (Scherrer equation).
5. **Microstrain:** Causes additional peak broadening.
6. **Texture (preferred orientation):** Relative peak intensities.
7. **Stress:** Peak shifts under applied load.
8. **Composition:** Vegard's law for solid solutions.
9. **Amorphous content:** Broad hump vs. sharp peaks.

---

## 9. Applications

### 9.1 Materials Science
- Identification of phases in steel, ceramics, polymers, semiconductors.
- Characterization of thin films and coatings.
- Study of phase transformations and reactions.

### 9.2 Pharmaceuticals
- Identification of drug polymorphs (different crystal forms of the same drug have different bioavailability and solubility).
- FDA requires XRD characterization of drug substances.
- Example: Ritonavir (HIV drug) unexpected polymorph appearance caused manufacturing crisis.

### 9.3 Geology and Mineralogy
- Identification of minerals in rock samples, soils, clays.
- Study of geological processes (metamorphism, sedimentation).
- Forensic geology.

### 9.4 Biology and Medicine
- Protein crystallography: Determination of 3D structures of proteins, enzymes, viruses.
- Over 200,000 structures deposited in the Protein Data Bank (PDB).
- Drug design: Structure-based drug discovery using XRD-determined protein active sites.
- Example: Discovery of penicillin structure (Dorothy Hodgkin, Nobel Prize 1964).

### 9.5 Nanotechnology
- Characterization of nanoparticles (size, phase, crystal structure).
- Study of quantum dots, graphene, 2D materials.

### 9.6 Archaeology
- Analysis of pigments in ancient paintings.
- Dating and authentication of artifacts.

---

## 10. X-ray Sources

| Source | Wavelength | Brightness | Use |
|---|---|---|---|
| Sealed X-ray tube (Cu) | $1.54$ Å | Low | Lab XRD |
| Rotating anode | $1.54$ Å | Medium | Lab protein crystallography |
| Synchrotron | Tunable $\sim$0.5–2 Å | Very high | Advanced research |
| Free-electron laser (XFEL) | $\sim$1 Å, ultrashort pulses | Extreme | Single-molecule imaging |

---

## 11. Numerical Examples

### Example 1 — Interplanar Spacing
**Calculate the interplanar spacing for the (111) planes of NaCl crystal ($a = 5.64$ Å).**

$$d_{111} = \frac{a}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{5.64}{\sqrt{3}} = \frac{5.64}{1.732} = 3.256\ \text{Å}$$

---

### Example 2 — Bragg Angle
**X-rays of $\lambda = 1.54$ Å are incident on NaCl (100) planes ($d = 2.82$ Å). Find the first-order Bragg angle.**

$$\sin\theta = \frac{n\lambda}{2d} = \frac{1 \times 1.54}{2 \times 2.82} = \frac{1.54}{5.64} = 0.2730$$

$$\theta = \arcsin(0.2730) = 15.84°$$

The diffraction peak appears at $2\theta = 31.68°$.

---

### Example 3 — Crystallite Size (Scherrer)
**An XRD peak at $2\theta = 38.2°$ has FWHM $= 0.5° = 0.00873$ rad. $\lambda = 1.54$ Å. Find crystallite size.**

$$D = \frac{K\lambda}{\beta\cos\theta} = \frac{0.9 \times 1.54 \times 10^{-10}}{0.00873 \times \cos(19.1°)}$$

$$= \frac{1.386 \times 10^{-10}}{0.00873 \times 0.9446} = \frac{1.386 \times 10^{-10}}{8.247 \times 10^{-3}} = 16.8\ \text{nm}$$

---

### Example 4 — Lattice Constant from XRD
**A cubic crystal gives a diffraction peak at $2\theta = 44.5°$ for the (110) plane, using Cu K$\alpha$ radiation ($\lambda = 1.5406$ Å). Find the lattice constant.**

$$\sin\theta = \sin(22.25°) = 0.3784$$

$$d = \frac{\lambda}{2\sin\theta} = \frac{1.5406}{2 \times 0.3784} = 2.036\ \text{Å}$$

$$a = d_{110} \times \sqrt{1^2 + 1^2 + 0^2} = 2.036 \times \sqrt{2} = 2.879\ \text{Å}$$

This matches the lattice constant of **iron (BCC)**: $a = 2.87$ Å. ✓

---

## 12. Diagram

```
X-ray beam                Crystal Planes
     ↘   θ  θ  ↗
——————●——————●——————  ← Plane 1 (atoms spaced d₀)
        d↕
——————●——————●——————  ← Plane 2

Path difference = 2d sinθ
When 2d sinθ = nλ → Bragg peak (constructive interference)
```

![X-ray diffraction pattern](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/X_ray_diffraction_pattern_3clpro.jpg/640px-X_ray_diffraction_pattern_3clpro.jpg)

*Figure: X-ray diffraction pattern (Laue spots) from a protein crystal. Each spot corresponds to diffraction from one set of crystal planes. Thousands of spots together allow reconstruction of the 3D electron density.*

---

## 13. References

1. Cullity, B. D. & Stock, S. R. *Elements of X-Ray Diffraction*, 3rd ed. Prentice Hall, 2001.
2. Hammond, C. *The Basics of Crystallography and Diffraction*, 4th ed. Oxford University Press, 2015.
3. Warren, B. E. *X-Ray Diffraction*. Dover Publications, 1990.
4. Giacovazzo, C. et al. *Fundamentals of Crystallography*, 3rd ed. Oxford University Press, 2011.
5. [HyperPhysics – X-ray Diffraction](http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/xray.html)
6. [IUCr – Introduction to X-ray Crystallography](https://www.iucr.org/)
7. [Physics LibreTexts – X-ray Diffraction](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/04%3A_Diffraction/4.07%3A_X-Ray_Diffraction)
8. [RCSB Protein Data Bank](https://www.rcsb.org/)
