# Corrections of Poiseuille's Equation

*Date: April 8, 2026*
*Course: Physics / Fluid Mechanics*
*Topic Series: Viscosity & Fluid Flow*

---

## Table of Contents

1. [Why Corrections Are Needed](#1-why-corrections-are-needed)
2. [Kinetic Energy (End) Correction — Hagenbach's Correction](#2-kinetic-energy-end-correction--hagenbachs-correction)
3. [End-Effect (Entry Length) Correction — Couette's Correction](#3-end-effect-entry-length-correction--couettes-correction)
4. [Combined Corrected Equation](#4-combined-corrected-equation)
5. [Rayleigh's Correction for Radial Flow](#5-rayleighs-correction-for-radial-flow)
6. [Surface Tension Correction](#6-surface-tension-correction)
7. [Gravity (Head) Correction](#7-gravity-head-correction)
8. [Complete Corrected Formula for Experimental Use](#8-complete-corrected-formula-for-experimental-use)
9. [Worked Examples](#9-worked-examples)
10. [Summary Table of All Corrections](#10-summary-table-of-all-corrections)
11. [References](#11-references)

---

## 1. Why Corrections Are Needed

The idealised **Hagen-Poiseuille equation**:

$$Q = \frac{\pi R^4 \Delta P}{8\eta L}$$

is derived under strict assumptions. In real laboratory experiments, several physical effects **deviate from these assumptions**, causing the measured results to differ from theoretical predictions. To obtain accurate values of $\eta$, these deviations must be corrected.

### Sources of Error in the Ideal Equation

| Assumption Made | Real Situation |
|-----------------|----------------|
| Fluid enters with zero velocity | Fluid accelerates at the inlet → kinetic energy consumed |
| Fully developed flow throughout | Entry region exists where profile develops |
| Pressure gradient drives flow only | Surface tension at the exit meniscus contributes to effective pressure |
| Flow in fully horizontal pipe | Slight inclinations or gravity head differences exist |
| No radial velocity component | Fluid converges/diverges near ends |

---

## 2. Kinetic Energy (End) Correction — Hagenbach's Correction

### 2.1 Origin

In the ideal derivation, the applied pressure difference $\Delta P$ is assumed to **entirely overcome viscous resistance**. However, in a real setup:

- The fluid at the **inlet** must be **accelerated** from rest (or from a large reservoir) to the average pipe velocity $\bar{u}$.
- This acceleration requires a portion of the pressure energy to be converted into **kinetic energy**.
- At the **outlet**, the kinetic energy of the flowing fluid is lost (dissipated) as the jet emerges.

This kinetic energy consumed per unit volume is:

$$\Delta P_{KE} = \frac{1}{2}\rho \bar{u}^2 \times m$$

where $m$ is a correction coefficient. For laminar pipe flow, the **Hagenbach correction factor** gives:

$$\Delta P_{KE} = \frac{\rho \bar{u}^2}{2} \times \frac{1}{K_{H}}$$

More precisely, the **kinetic energy correction pressure** is:

$$\Delta P_{KE} = \frac{n \rho Q^2}{8 \pi^2 R^4}$$

where $n$ is the **kinetic energy correction factor**. For the parabolic (Poiseuille) velocity profile:

$$n = 2$$

(since the kinetic energy flux $= \frac{1}{2}\rho \int u^3 \, dA = 2 \times \frac{1}{2}\rho\bar{u}^2 \times \pi R^2$)

### 2.2 Hagenbach's Correction Term

The corrected effective pressure is:

$$\Delta P_{eff} = \Delta P - \Delta P_{KE}$$

Hagenbach (1860) showed that for laminar flow, the kinetic energy correction is:

$$\Delta P_{KE} = \frac{\rho Q^2}{\pi^2 R^4} \cdot m = \frac{m\rho \bar{u}^2}{2}$$

The corrected equation becomes:

$$Q = \frac{\pi R^4}{8\eta L}\left(\Delta P - \frac{m\rho Q^2}{\pi^2 R^4}\right)$$

Simplifying (using $m = 1.12$ for entrance + exit):

$$\boxed{Q = \frac{\pi R^4}{8\eta L}\left(\Delta P - \frac{1.12 \rho Q^2}{\pi^2 R^4}\right)}$$

Or written as:

$$\Delta P = \frac{8\eta L Q}{\pi R^4} + \frac{m\rho Q^2}{\pi^2 R^4}$$

### 2.3 Hagenbach Correction Factor $m$

For a **single end** (exit only): $m = 1.0$

For **both ends** (entry + exit): $m \approx 1.12$ (empirically determined; sometimes taken as $1.0$ for simplicity).

---

## 3. End-Effect (Entry Length) Correction — Couette's Correction

### 3.1 Entry Length Phenomenon

The Poiseuille velocity profile (parabola) is not established **immediately** at the pipe inlet. It requires a certain **entry length** $L_e$ for the profile to develop from a flat (uniform) inlet profile to the parabolic distribution.

### 3.2 Hydrodynamic Entry Length

For laminar flow, the entry length is approximately:

$$L_e \approx 0.06 \cdot Re \cdot D = 0.06 \cdot Re \cdot 2R$$

Or in terms of pipe radius:

$$L_e \approx 0.12 \cdot Re \cdot R$$

**Example:** For water at $Re = 1000$ in a 1 cm diameter pipe:

$$L_e \approx 0.06 \times 1000 \times 0.01 = 0.6\ \text{m}$$

This shows that for short pipes, the **entire pipe** may be in the entry region, making Poiseuille's law **invalid**.

### 3.3 Couette's Correction

Couette proposed that the apparent (effective) length of the pipe is greater than the physical length by an amount that accounts for the entry effect:

$$L_{eff} = L + n'R$$

Where $n'$ is Couette's **end correction coefficient**:
- Theoretically, $n' \approx 1.64$ for one end
- For both ends: $n' \approx 3.28$ (i.e., effective length increases by $\approx 1.64R$ per end)

### 3.4 Corrected Equation with Couette's Correction

$$Q = \frac{\pi R^4 \Delta P}{8\eta (L + n'R)}$$

Or equivalently, to find $\eta$:

$$\eta = \frac{\pi R^4 \Delta P}{8Q(L + n'R)}$$

---

## 4. Combined Corrected Equation

Incorporating **both** the Hagenbach kinetic energy correction and the Couette end-length correction:

$$\boxed{\eta = \frac{\pi R^4 \Delta P}{8Q(L + n'R)} - \frac{m\rho Q}{8\pi(L + n'R)}}$$

This is the **practically used corrected Poiseuille formula** in laboratory measurements.

### Rearranged Form

Let $\Delta P$ be the driving pressure, $Q$ the measured flow rate, $R$ the capillary radius, $L$ the length. Then:

$$\Delta P = \frac{8\eta Q}{\pi R^4}(L + n'R) + \frac{m \rho Q^2}{\pi^2 R^4}$$

Setting $A = \frac{8Q(L+n'R)}{\pi R^4}$ and $B = \frac{mQ^2}{\pi^2 R^4}$:

$$\Delta P = A\eta + B\rho$$

This linear relationship is used in **Rayleigh's graphical method** to determine $\eta$ experimentally.

---

## 5. Rayleigh's Correction for Radial Flow

**Lord Rayleigh** identified that near the ends of the capillary, the fluid has **radial velocity components** in addition to axial flow. The fluid converges from the reservoir into the narrow capillary and diverges at the exit.

This creates additional viscous dissipation not accounted for by the simple Poiseuille model.

Rayleigh's correction modifies the effective length:

$$L_{eff} = L + \alpha R$$

Where $\alpha \approx 1.64$ per end (same value as Couette; the two corrections overlap and are sometimes treated together).

**Note:** For pipes where $L \gg R$ (long thin capillaries), Rayleigh's correction is negligible:

$$\frac{\alpha R}{L} \ll 1 \quad \text{for } L \gg R$$

This is why viscometers are designed with **long, thin capillaries** — to minimise end effects.

---

## 6. Surface Tension Correction

In experiments using the **capillary flow method** (e.g., Ostwald viscometer), liquid levels are observed through the curved meniscus in glass tubes.

### 6.1 Effect

- At the **inlet** (upper meniscus): surface tension creates a **downward force** (if concave meniscus), contributing an additional pressure:

$$\Delta P_{ST} = \frac{2T\cos\theta}{R}$$

where $T$ = surface tension coefficient, $\theta$ = contact angle, $R$ = tube radius.

### 6.2 Correction

If both menisci have the **same radius and contact angle**, they cancel each other out in the pressure difference.

For **unequal menisci** (different tube diameters or asymmetric setup):

$$\Delta P_{net,ST} = \frac{2T\cos\theta}{R_1} - \frac{2T\cos\theta}{R_2}$$

In well-designed Ostwald viscometers with matched arms, this correction is **zero or negligible**.

---

## 7. Gravity (Head) Correction

If the flow is **not perfectly horizontal**, gravity contributes to the driving pressure via the hydrostatic head.

For a pipe inclined at angle $\theta$ to horizontal:

$$\Delta P_{total} = \Delta P_{applied} + \rho g L \sin\theta$$

In vertical arrangements (e.g., falling head viscometers):

$$\Delta P_{total} = \rho g h$$

where $h$ = height of the liquid column driving the flow.

The corrected Poiseuille equation becomes:

$$Q = \frac{\pi R^4}{8\eta L}(\Delta P_{applied} + \rho g L \sin\theta)$$

---

## 8. Complete Corrected Formula for Experimental Use

Combining all significant corrections (Hagenbach + Couette, surface tension assumed negligible):

$$\boxed{\eta = \frac{\pi R^4 \rho g h t}{8V(L + 1.64R)} - \frac{m \rho V}{8\pi t (L + 1.64R)}}$$

Where (for a time-based measurement):
- $V$ = volume of fluid collected in time $t$
- $h$ = driving head (pressure head in equivalent height)
- $g$ = gravitational acceleration
- $t$ = time of collection

Noting $Q = V/t$:

The **first term** is the ideal Poiseuille term with Couette correction.

The **second term** is the Hagenbach kinetic energy correction (always subtracted — it reduces the apparent viscosity).

### Simplified Form (if $L \gg R$ and $Re$ is small)

$$\eta \approx \frac{\pi R^4 \Delta P}{8QL}$$

This approximation is valid when:
- $L/R > 100$ (long pipe)
- $Re < 100$ (very slow flow)

---

## 9. Worked Examples

### Example 1: Applying Hagenbach's Correction

**Problem:** A capillary of radius $R = 0.5\ \text{mm}$, length $L = 0.1\ \text{m}$ carries water ($\rho = 1000\ \text{kg/m}^3$) at $Q = 5 \times 10^{-8}\ \text{m}^3/\text{s}$. Driving pressure $\Delta P = 800\ \text{Pa}$. Find $\eta$ (a) without and (b) with Hagenbach correction ($m = 1.12$).

**Solution:**

**(a) Without correction:**

$$\eta = \frac{\pi R^4 \Delta P}{8QL} = \frac{\pi \times (5\times10^{-4})^4 \times 800}{8 \times 5\times10^{-8} \times 0.1}$$

$$= \frac{\pi \times 6.25\times10^{-14} \times 800}{4\times10^{-8}} = \frac{1.571\times10^{-10}}{4\times10^{-8}} \approx 3.93\times10^{-3}\ \text{Pa·s}$$

**(b) Hagenbach correction:**

$$\Delta P_{KE} = \frac{m\rho Q^2}{\pi^2 R^4} = \frac{1.12 \times 1000 \times (5\times10^{-8})^2}{\pi^2 \times (5\times10^{-4})^4}$$

$$= \frac{1.12\times1000\times2.5\times10^{-15}}{9.87\times 6.25\times10^{-14}} = \frac{2.8\times10^{-12}}{6.17\times10^{-13}} \approx 4.54\ \text{Pa}$$

$$\Delta P_{eff} = 800 - 4.54 = 795.46\ \text{Pa}$$

$$\eta_{corrected} = \frac{\pi R^4 \Delta P_{eff}}{8QL} \approx 3.91\times10^{-3}\ \text{Pa·s}$$

The correction here is small ($< 1\%$) because the flow rate is small. At higher $Q$, Hagenbach's correction becomes more significant.

---

### Example 2: Couette End Correction

**Problem:** A capillary has $R = 0.3\ \text{mm}$ and $L = 50\ \text{mm}$. Compute the percentage correction to $L$ due to Couette's end effect.

**Solution:**

$$n'R = 1.64 \times 2 \times 0.3\ \text{mm} = 0.984\ \text{mm}$$

(factor of 2 for both ends)

$$\frac{n'R}{L} \times 100\% = \frac{0.984}{50} \times 100\% = \mathbf{1.97\%}$$

A nearly 2% correction — significant for precision measurements, and why long capillaries are preferred.

---

## 10. Summary Table of All Corrections

| Correction | Name | Term Added to Eq. | Typical Magnitude |
|------------|------|--------------------|-------------------|
| Kinetic energy | Hagenbach | $-\frac{m\rho Q^2}{\pi^2 R^4}$ from $\Delta P$ | Small at low $Q$; ~1–5% |
| Entry length | Couette | $L \to L + 1.64R$ per end | ~1–5% for $L/R \sim 100$ |
| Radial flow at ends | Rayleigh | Same as Couette | Included in Couette |
| Surface tension | — | $\frac{2T\cos\theta}{R}$ | Negligible in matched arms |
| Gravity head | — | $\pm\rho g L \sin\theta$ | Depends on tilt |

---

## 11. References

### Textbooks
1. Hagenbach, E. (1860). *Über die Bestimmung der Zähigkeit einer Flüssigkeit durch den Ausfluss aus Röhren.* Annalen der Physik, 185(3), 385–426.
2. Couette, M. (1890). *Études sur le frottement des liquides.* Annales de chimie et de physique, 21, 433–510.
3. Sutera, S.P. & Skalak, R. (1993). *The History of Poiseuille's Law.* Annual Review of Fluid Mechanics, 25, 1–20.
4. White, F.M. *Fluid Mechanics*, 8th ed. McGraw-Hill, 2016. — §6.4.
5. Denn, M.M. *Process Fluid Mechanics*. Prentice Hall, 1980.

### Online Sources
6. LibreTexts — Viscous Flow Corrections: <https://eng.libretexts.org>
7. IUPAC — Viscometry: <https://iupac.org/recommendation/viscometry>
8. NPL — Viscosity Measurement: <https://www.npl.co.uk/flow/viscosity>

---

*← [Poiseuille's Equation](04_poiseuilles_equation.md) | Next: [Determination of Coefficient of Viscosity by Capillary Flow Method →](06_determination_coefficient_viscosity_capillary.md)*
