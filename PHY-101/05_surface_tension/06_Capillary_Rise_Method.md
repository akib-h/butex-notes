# 06 — Capillary Rise Method: Determination of Surface Tension

> **Course:** Physics II | **Topic:** Surface Tension  
> **Date:** 2026-04-08  
> **Syllabus Reference:** Unit 6 — Capillary Rise: Determination of Surface Tension

---

## Table of Contents

1. [Principle](#1-principle)
2. [Full Derivation of the Formula](#2-full-derivation-of-the-formula)
3. [Meniscus Correction](#3-meniscus-correction)
4. [Final Formula](#4-final-formula)
5. [Experimental Procedure](#5-experimental-procedure)
6. [Sources of Error](#6-sources-of-error)
7. [Precautions](#7-precautions)
8. [Worked Examples](#8-worked-examples)
9. [References](#9-references)

---

## 1. Principle

When a clean glass capillary tube of radius $r$ is dipped vertically into a wetting liquid (e.g., water), the liquid rises to a height $h$ inside the tube due to capillary action.

**At equilibrium**, the upward force due to surface tension equals the downward weight of the liquid column.

By measuring $r$, $h$, and knowing $\rho$ and $g$, we can calculate $T$:

$$T = \frac{h \rho g r}{2\cos\theta}$$

If the angle of contact $\theta = 0°$ (for water on clean glass):

$$T = \frac{h \rho g r}{2}$$

---

## 2. Full Derivation of the Formula

### Setup

```
              ↑  T cosθ        T cosθ ↑
              |                      |
         T ╲ |θ                θ| ╱ T
              ╲|                |╱
     ─────────────────────────────── ← Meniscus
              |                |
              |    r (radius)  |
              |                |
              |    h (height)  |
              |                |
              |    Column of   |
              |    liquid      |
    ══════════╪════════════════╪═══ ← External liquid level
    
    Cross-sectional area = πr²h
```

**Force Components:**

Surface tension $T$ acts along the glass wall at angle $\theta$ to the vertical at every point on the circumference $2\pi r$.

**Upward component of surface tension force** (per unit length):

$$T_{\text{vertical}} = T\cos\theta$$

**Total upward force** acting around the circumference:

$$F_{\uparrow} = T\cos\theta \times 2\pi r = 2\pi r T\cos\theta \quad ...(1)$$

**Weight of liquid in the column** (downward force):

Volume of liquid = (cylinder of height $h$) + (liquid in meniscus)

Volume of cylindrical column:

$$V_{\text{cylinder}} = \pi r^2 h$$

Volume of hemispherical meniscus (for $\theta = 0°$):

$$V_{\text{meniscus}} = \frac{2}{3}\pi r^3 - \frac{1}{3}\pi r^3 = \frac{1}{3}\pi r^3$$

Wait — more carefully: the meniscus of a concave surface (for water) is approximately a hemisphere minus a cone:

$$V_{\text{meniscus}} = \frac{2}{3}\pi r^3 - \frac{1}{3}\pi r^2 \cdot r = \frac{2}{3}\pi r^3 - \frac{1}{3}\pi r^3 = \frac{\pi r^3}{3}$$

Total volume of liquid:

$$V = \pi r^2 h + \frac{\pi r^3}{3} = \pi r^2\left(h + \frac{r}{3}\right)$$

**Total weight** (downward force):

$$W = \rho g V = \pi r^2\left(h + \frac{r}{3}\right)\rho g \quad ...(2)$$

---

## 3. Meniscus Correction

The liquid in the meniscus region is not at height $h$ — it forms a curved surface. We must account for this extra liquid.

### For a Hemispherical Meniscus ($\theta = 0°$)

The volume of the meniscus = $\frac{2}{3}\pi r^3$ (hemisphere) minus the volume that would be in a flat-ended cylinder = effective correction is $\frac{\pi r^3}{3}$.

Equivalent height of meniscus liquid:

$$h_{\text{meniscus}} = \frac{V_{\text{meniscus}}}{\pi r^2} = \frac{\pi r^3/3}{\pi r^2} = \frac{r}{3}$$

So the effective height for weight calculation is:

$$h_{\text{eff}} = h + \frac{r}{3}$$

### For General Angle $\theta$

The meniscus is not a perfect hemisphere but an oblique meniscus. The correction varies with $\theta$, but for small $r$, the term is often negligible.

---

## 4. Final Formula

**Equating upward force = downward force** (equilibrium):

$$2\pi r T\cos\theta = \pi r^2\left(h + \frac{r}{3}\right)\rho g$$

$$2T\cos\theta = r\left(h + \frac{r}{3}\right)\rho g$$

$$\boxed{T = \frac{r\rho g\left(h + \dfrac{r}{3}\right)}{2\cos\theta}}$$

### Special Case: $\theta = 0°$

$$\boxed{T = \frac{r\rho g}{2}\left(h + \frac{r}{3}\right)}$$

### Simplified Formula (when $r \ll h$)

$$\boxed{T \approx \frac{r\rho g h}{2\cos\theta}}$$

---

## 5. Experimental Procedure

### Apparatus

- Clean glass capillary tube (known radius $r$, determined with travelling microscope)
- Liquid (usually water)
- Travelling microscope (for measuring $h$)
- Vernier callipers / screw gauge (for measuring $r$)
- Plumb line / spirit level (to ensure tube is vertical)
- Beaker / dish for the liquid

### Step-by-Step Method

**Step 1:** Clean the capillary tube thoroughly (to ensure $\theta \approx 0°$ for water).

**Step 2:** Mount the tube vertically in a clamp stand. Verify verticality with a plumb line.

**Step 3:** Dip the lower end of the tube into the liquid in the beaker.

**Step 4:** Using a travelling microscope, note the position of the meniscus inside the tube. Let this be reading $R_1$.

**Step 5:** Tilt the tube (or use a reference mark) to measure the level of the liquid outside. Let this be reading $R_2$.

$$h = R_1 - R_2$$

**Step 6:** Using a travelling microscope (focused on the cross-section of the tube), measure the internal diameter $d$ of the capillary:

$$r = \frac{d}{2}$$

**Step 7:** Note the temperature of the liquid (for density $\rho$ from tables).

**Step 8:** Calculate $T$:

$$T = \frac{r\rho g}{2}\left(h + \frac{r}{3}\right) \qquad [\text{for } \theta = 0°]$$

### Measurements to Record

| Quantity | Measured By | Typical Value |
|---|---|---|
| Capillary radius $r$ | Travelling microscope | 0.05–0.5 mm |
| Height of rise $h$ | Travelling microscope | 1–30 cm |
| Temperature | Thermometer | 20–30 °C |
| Liquid density $\rho$ | Hydrometer / tables | 1000 kg/m³ (water) |
| Angle of contact $\theta$ | Assumed 0° for clean glass | ~0° |

---

## 6. Sources of Error

| Error Source | Effect | Remedy |
|---|---|---|
| Dirty capillary tube | $\theta \neq 0°$, reducing accuracy | Clean with chromic acid, then rinse with distilled water |
| Tube not vertical | $h$ measured incorrectly | Use plumb line |
| Incorrect measurement of $r$ | Direct impact on $T$ | Use travelling microscope carefully |
| Parallax in reading meniscus height | Error in $h$ | Use crosshairs of microscope carefully |
| Dust/contamination in liquid | Alters surface tension | Use fresh, clean liquid |
| Temperature variation | $T$ varies with temperature | Maintain constant temperature |
| Ignoring meniscus correction | ~2–5% error for small $h/r$ | Always include $r/3$ correction |

---

## 7. Precautions

1. The capillary tube must be **perfectly clean** — clean with chromic acid, rinse with distilled water, then dry.
2. The tube must be **perfectly vertical** — any tilt reduces the effective $h$.
3. The **internal radius must be uniform** throughout the tube — verify with microscope.
4. The liquid should be **pure and uncontaminated**.
5. Measurements of $h$ should be made **at the bottom of the meniscus** (lowest point of concave meniscus).
6. **Repeat measurements** at least 3–5 times and take the average.
7. Temperature should be **noted and controlled**, as $T$ varies significantly with temperature.

---

## 8. Worked Examples

### Example 1: Standard calculation (from handnotes)

**Q:** Suppose for a particular capillary, the radius is $r$, the height of water is $h$, and the density of water is $\rho$. Find the surface tension at room temperature.

Taking $\theta = 0°$, $\cos\theta = 1$:

$$T = \frac{r\rho g}{2}\left(h + \frac{r}{3}\right)$$

For water: $\rho = 1000$ kg/m³, $g = 9.8$ m/s²

This is the working formula used in the lab experiment.

---

### Example 2: Capillary tube in water (from handnotes — Problem 17)

**Q:** A capillary tube of 0.5 mm bore stands vertically in a wide vessel containing a liquid of surface tension 30 dyne/cm. The liquid wets the tube ($\theta = 0°$) and has specific gravity 0.8. Calculate the rise.

$$r = 0.25 \text{ mm} = 0.025 \text{ cm}, \quad T = 30 \text{ dyne/cm}, \quad \rho = 0.8 \text{ g/cc}, \quad g = 980 \text{ cm/s}^2$$

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 30 \times 1}{0.8 \times 980 \times 0.025}$$

$$= \frac{60}{19.6} = \boxed{3.061 \text{ cm}}$$

---

### Example 3: Mercury depression (from handnotes — Problem 19)

**Q:** In a capillary tube, water rises to a height of 0.1 m. In the same capillary tube, mercury is depressed by $3.42 \times 10^{-2}$ m. Angle of contact for mercury = 135°. Find surface tension of mercury, given surface tension of water = $72 \times 10^{-3}$ N/m and density of mercury = $13.6 \times 10^3$ kg/m³.

**For water** ($\theta_1 = 0°$, $\rho_1 = 1000$ kg/m³, $h_1 = 0.1$ m):

$$T_1 = \frac{h_1\rho_1 g r}{2\cos\theta_1} = \frac{h_1\rho_1 g r}{2}$$

**For mercury** ($\theta_2 = 135°$, $\rho_2 = 13.6 \times 10^3$ kg/m³, $h_2 = -3.42 \times 10^{-2}$ m):

$$T_2 = \frac{h_2\rho_2 g r}{2\cos\theta_2}$$

Dividing:

$$\frac{T_2}{T_1} = \frac{h_2\rho_2}{h_1\rho_1 \cos\theta_2} \quad (\cos\theta_1 = 1)$$

$$T_2 = \frac{h_2\rho_2 T_1}{h_1\rho_1 \cos\theta_2}$$

$$= \frac{3.42 \times 10^{-2} \times 13.6 \times 10^3 \times 72 \times 10^{-3}}{0.1 \times 1000 \times \cos 135°}$$

$$= \frac{3.42 \times 10^{-2} \times 13600 \times 0.072}{100 \times (-0.7071)}$$

$$= \frac{33.48}{-70.71} \approx -0.473 \text{ N/m}$$

Taking magnitude: $\boxed{T_2 \approx 0.47 \text{ N/m}}$

---

### Example 4: Small hole radius (from handnotes — Problem 14)

**Q:** There is a minute circular hole at the bottom of a small hollow vessel. The vessel has to be immersed in water to a depth of 0.4 m so that no water penetrates inside. Calculate the radius of the hole. $T = 72 \times 10^{-3}$ N/m.

The excess pressure to prevent water entry = hydrostatic pressure at that depth.

For the circular hole, treating it as a capillary (one surface):

$$P = \frac{2T}{r} \implies h\rho g = \frac{2T}{r}$$

$$r = \frac{2T}{h\rho g} = \frac{2 \times 72 \times 10^{-3}}{0.4 \times 1000 \times 9.8}$$

$$= \frac{0.144}{3920} = \boxed{3.67 \times 10^{-5} \text{ m} = 3.67 \times 10^{-3} \text{ cm}}$$

---

## 9. References

| Resource | Link |
|---|---|
| NCERT Physics — Mechanical Properties of Fluids | https://ncert.nic.in |
| HyperPhysics — Capillary Rise | http://hyperphysics.phy-astr.gsu.edu/hbase/surten.html |
| LibreTexts — Capillary Rise Method | https://phys.libretexts.org |
| OpenStax Physics — Surface Tension | https://openstax.org/books/university-physics-volume-1/pages/14-introduction |
| Halliday, Resnick — *Fundamentals of Physics*, 10th Ed. | University textbook |
| Young & Freedman — *University Physics*, 14th Ed. | University textbook |
| Irodov — *Problems in General Physics* | Problems 2.127–2.135 |

---

*Previous: [05 — Capillarity & Angle of Contact](./05_Capillarity_Angle_of_Contact.md) | Next: [07 — Determination of Surface Tension of Water](./07_Determination_ST_Water.md)*
