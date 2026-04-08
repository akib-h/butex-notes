# 07 — Determination of Surface Tension of Water

> **Course:** Physics II | **Topic:** Surface Tension  
> **Date:** 2026-04-08  
> **Syllabus Reference:** Unit 7 — Determination of Surface Tension of Water

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Method 1: Capillary Rise Method](#2-method-1-capillary-rise-method)
3. [Method 2: Drop Weight Method](#3-method-2-drop-weight-method)
4. [Method 3: Jaeger's Method (Maximum Bubble Pressure)](#4-method-3-jaegers-method-maximum-bubble-pressure)
5. [Method 4: Ripple Method (Kelvin)](#5-method-4-ripple-method-kelvin)
6. [Surface Tension of Water at Different Temperatures](#6-surface-tension-of-water-at-different-temperatures)
7. [Complete Worked Example — Lab Calculation](#7-complete-worked-example--lab-calculation)
8. [Comparison of Methods](#8-comparison-of-methods)
9. [References](#9-references)

---

## 1. Introduction

The **surface tension of water** is one of the most important physical properties of water, responsible for:

- Supporting the weight of small insects and objects
- Capillary action in plants, soils, and biological systems
- The spherical shape of raindrops
- Surface waves and ripples

**Standard value at 20°C:**

$$T_{\text{water}} = 72.8 \times 10^{-3} \text{ N/m} = 72.8 \text{ dyne/cm}$$

Several experimental methods exist to measure this quantity precisely. The most common for a university Physics II lab is the **capillary rise method**.

---

## 2. Method 1: Capillary Rise Method

This is the method described in your handnotes and the most commonly used in undergraduate labs.

### Theory

From the equilibrium of forces in a capillary tube:

$$T = \frac{r\rho g\left(h + \dfrac{r}{3}\right)}{2\cos\theta}$$

For water on clean glass, $\theta \approx 0°$, so $\cos\theta = 1$:

$$\boxed{T = \frac{r\rho g}{2}\left(h + \frac{r}{3}\right)}$$

where:
- $r$ = internal radius of capillary tube
- $h$ = height of capillary rise (bottom of meniscus to external liquid level)
- $\rho$ = density of water at the experimental temperature
- $g$ = local acceleration due to gravity ($\approx 9.8$ m/s²)

### Derivation Recap

**Force equilibrium** in the capillary tube:

```
    ┌─────────────────────────────┐
    │  Capillary Tube (radius r)  │
    │                             │
    │   ↑ T cosθ   ↑ T cosθ      │
    │    ╲    θ  θ   ╱            │
    │     ────╮╭────              │
    │         ││     ← Meniscus   │
    │         ││                  │
    │         ││ h (rise)         │
    │         ││                  │
    ═══════════╪══════════════════ ← External level
               │
```

Surface tension force (upward) along circumference:

$$F_\uparrow = 2\pi r \cdot T\cos\theta \qquad \cdots (1)$$

Weight of liquid column (downward), including meniscus correction:

$$W = \pi r^2 \left(h + \frac{r}{3}\right)\rho g \qquad \cdots (2)$$

At equilibrium, $F_\uparrow = W$:

$$2\pi r T\cos\theta = \pi r^2\left(h + \frac{r}{3}\right)\rho g$$

$$T = \frac{r\rho g\left(h + \frac{r}{3}\right)}{2\cos\theta}$$

### Experimental Determination for Water

**Given / Measured:**
- Radius of capillary: $r$ (m)
- Height of rise: $h$ (m) 
- Density of water: $\rho = 1000$ kg/m³ (at ~4°C), or from tables at experimental temperature
- $g = 9.8$ m/s²
- $\theta = 0°$ (clean glass + water)

**Sample calculation:**

If $r = 0.5 \times 10^{-3}$ m, $h = 0.029$ m (2.9 cm), $\rho = 1000$ kg/m³:

$$T = \frac{0.5 \times 10^{-3} \times 1000 \times 9.8}{2}\left(0.029 + \frac{0.5 \times 10^{-3}}{3}\right)$$

$$= \frac{4.9}{1}\left(0.029 + 0.000167\right)$$

$$= 4.9 \times 0.02917 = 0.07291 \text{ N/m} \approx 72.9 \times 10^{-3} \text{ N/m}$$

This matches the known value of $72.8 \times 10^{-3}$ N/m very well.

---

## 3. Method 2: Drop Weight Method

### Principle

When a liquid drop falls from a capillary tip (of radius $r$), the weight of the drop at the moment of detachment equals the surface tension force holding it:

$$mg = 2\pi r T$$

$$\boxed{T = \frac{mg}{2\pi r}}$$

### Procedure

1. Mount a capillary tube (tip downward) of known tip radius $r$.
2. Let water drip slowly — collect and count exactly $N$ drops into a pre-weighed container.
3. Weigh the container with the $N$ drops — subtract tare to get total mass $M = Nm$.
4. Calculate:

$$T = \frac{Mg}{2\pi r N} = \frac{mg}{2\pi r}$$

Where $m = M/N$ is the average mass of one drop.

### Correction Factor

The drop does not detach cleanly — a small satellite drop remains. Harkins & Brown correction factor $\phi(r/V^{1/3})$ is applied:

$$T = \frac{mg}{2\pi r} \cdot \frac{1}{\phi}$$

Where $\phi$ is tabulated based on $r/V^{1/3}$ ($V$ = drop volume). For most practical purposes, $\phi \approx 0.6$–$0.75$.

---

## 4. Method 3: Jaeger's Method (Maximum Bubble Pressure)

### Principle

Air is slowly blown through a capillary tube dipped in the liquid. The maximum pressure needed to detach a bubble corresponds to when the bubble radius equals the capillary radius $r$.

At maximum pressure (hemispherical bubble):

$$P_{\max} = \frac{2T}{r} + h\rho g$$

Where $h$ is the depth of the capillary tip below the liquid surface.

$$\boxed{T = \frac{r(P_{\max} - h\rho g)}{2}}$$

### Advantages

- Applicable to liquids that are difficult to purify
- Can measure surface tension at elevated temperatures
- Gives a "fresh surface" (no contamination effects)

---

## 5. Method 4: Ripple Method (Kelvin)

### Principle

The velocity of ripples (surface capillary waves) on a liquid surface depends on surface tension:

$$v = \sqrt{\frac{2\pi T}{\lambda \rho}}$$

For waves of wavelength $\lambda$ on a liquid of density $\rho$:

$$\boxed{T = \frac{v^2 \lambda \rho}{2\pi}}$$

By measuring wave velocity and wavelength (using stroboscope + vibrating needle), $T$ can be calculated. This is a non-contact method.

---

## 6. Surface Tension of Water at Different Temperatures

| Temperature (°C) | Surface Tension (N/m) | Surface Tension (dyne/cm) |
|---|---|---|
| 0 | 0.07564 | 75.64 |
| 5 | 0.07493 | 74.93 |
| 10 | 0.07422 | 74.22 |
| 15 | 0.07349 | 73.49 |
| 20 | 0.07275 | 72.75 |
| 25 | 0.07197 | 71.97 |
| 30 | 0.07118 | 71.18 |
| 40 | 0.06960 | 69.60 |
| 50 | 0.06794 | 67.94 |
| 60 | 0.06620 | 66.20 |
| 70 | 0.06440 | 64.40 |
| 80 | 0.06260 | 62.60 |
| 100 | 0.05885 | 58.85 |

**Observation:** Surface tension of water decreases approximately linearly with temperature.

**Empirical formula (approximate):**

$$T(\theta) \approx 75.6 - 0.16\theta \quad \text{dyne/cm}$$

Where $\theta$ is temperature in °C.

---

## 7. Complete Worked Example — Lab Calculation

### Problem (from handnotes)

The surface tension of water is to be determined using the capillary rise method. Suppose for a particular capillary:
- Radius = $r$
- Height of water = $h$  
- Density of water = $\rho$

Find the surface tension at room temperature.

### Solution

Taking $\theta = 0°$ (water on clean glass):

**Step 1:** Write equilibrium condition:

$$2\pi r T = \pi r^2\left(h + \frac{r}{3}\right)\rho g$$

**Step 2:** Solve for $T$:

$$T = \frac{r\rho g}{2}\left(h + \frac{r}{3}\right) = \frac{\pi r \rho g\left(h + \frac{r}{3}\right)}{2}$$

Wait — simplifying:

$$\boxed{T = \frac{r\rho g}{2}\left(h + \frac{r}{3}\right)}$$

**Numerical example (typical lab values):**

- $r = 0.5$ mm $= 5 \times 10^{-4}$ m
- $h = 2.95$ cm $= 2.95 \times 10^{-2}$ m
- $\rho = 1000$ kg/m³
- $g = 9.8$ m/s²

$$T = \frac{5 \times 10^{-4} \times 1000 \times 9.8}{2} \times \left(2.95 \times 10^{-2} + \frac{5 \times 10^{-4}}{3}\right)$$

$$= 2.45 \times \left(0.0295 + 0.0001\overline{6}\right)$$

$$= 2.45 \times 0.02967 = 0.07268 \text{ N/m}$$

$$\boxed{T \approx 72.7 \times 10^{-3} \text{ N/m} \approx 72.7 \text{ dyne/cm}}$$

**Comparison with standard:** $72.8 \times 10^{-3}$ N/m at 20°C → **0.14% error** — excellent agreement!

---

### Problem: Soap bubble problem using surface tension of water

**Q:** A soap bubble of 0.7 cm diameter has its pressure 8 mm of water above atmospheric. Calculate the surface tension of soap solution.

**Solution:**

Excess pressure $= h\rho g$:

$$P_e = \frac{8}{10} \text{ cm} \times 1 \text{ g/cc} \times 980 \text{ cm/s}^2 = 784 \text{ dyne/cm}^2$$

For soap bubble (two surfaces), $P_e = \dfrac{4T}{r}$:

$$r = \frac{0.7}{2} = 0.35 \text{ cm}$$

$$T = \frac{P_e \cdot r}{4} = \frac{784 \times 0.35}{4} = \frac{274.4}{4} = \boxed{68.6 \text{ dyne/cm}}$$

---

## 8. Comparison of Methods

| Method | Principle | Accuracy | Advantages | Disadvantages |
|---|---|---|---|---|
| Capillary Rise | Force balance | ±1–3% | Simple apparatus, direct formula | Difficult to clean tube, meniscus reading |
| Drop Weight | Weight at detachment | ±1–2% | No tube radius needed | Correction factor required |
| Jaeger's (Max Bubble Pressure) | Excess pressure | ±0.1–1% | Fresh surface, high temperature capable | More complex apparatus |
| Ripple Method | Wave velocity | ±0.1% | Non-contact | Requires oscillator, stroboscope |
| Wilhelmy Plate | Force on plate | ±0.01% | High accuracy, used in research | Expensive equipment |
| Du Noüy Ring | Force on ring | ±0.1% | Standard industrial method | Correction factor needed |

---

## 9. References

| Resource | Link |
|---|---|
| HyperPhysics — Surface Tension Measurement | http://hyperphysics.phy-astr.gsu.edu/hbase/surten.html |
| NIST Chemistry WebBook — Water Surface Tension | https://webbook.nist.gov/cgi/fluid.cgi?Action=Load&ID=C7732185&Type=SatT |
| Vargaftik et al., *J. Phys. Chem. Ref. Data*, 1983 | Surface tension data table for water |
| OpenStax — Fluid Statics | https://openstax.org/books/university-physics-volume-1 |
| LibreTexts — Capillary Rise | https://phys.libretexts.org |
| Adam, N.K. — *The Physics and Chemistry of Surfaces* | Classic reference |
| Adamson & Gast — *Physical Chemistry of Surfaces*, 6th Ed. | Advanced reference |

---

*Previous: [06 — Capillary Rise Method](./06_Capillary_Rise_Method.md) | Next: [08 — Worked Examples](./08_Worked_Examples.md)*
