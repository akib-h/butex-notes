# 03. Interference of Light — Theory & Analytical Treatment

> **Date:** February 23, 2025
> **Topic:** Interference, Superposition, Coherent Sources, Analytical Treatment, Conditions

---

## 📑 Table of Contents

1. [Superposition Principle](#1-superposition-principle)
2. [What is Interference?](#2-what-is-interference)
3. [Types of Interference](#3-types-of-interference)
4. [Coherent Sources](#4-coherent-sources)
5. [Phase Difference and Path Difference](#5-phase-difference-and-path-difference)
6. [Analytical Treatment of Interference](#6-analytical-treatment-of-interference)
7. [Intensity Distribution](#7-intensity-distribution)
8. [Energy Distribution and Conservation](#8-energy-distribution-and-conservation)
9. [Conditions for Interference](#9-conditions-for-interference)
10. [Worked Examples](#10-worked-examples)
11. [Online References](#11-online-references)

---

## 1. Superposition Principle

### Statement

> **Principle of Superposition:** When two or more waves simultaneously pass through any point in a medium, the **resultant displacement** of the particle at that point at any instant is the **algebraic (vector) sum** of the individual displacements due to each wave separately.

Mathematically:
$$\vec{y} = \vec{y}_1 + \vec{y}_2 + \vec{y}_3 + \cdots$$

For two waves:
$$y = y_1 + y_2$$

### Physical Basis

This principle holds because the **wave equation is linear** — its solutions can be added together to form new solutions. It is valid for:
- Electromagnetic waves (light, radio waves)
- Sound waves (small amplitudes)
- Water waves (small amplitudes)

---

## 2. What is Interference?

### Definition

> **Interference of light** is the phenomenon of **redistribution of energy** in the region of superposition of two or more coherent light waves, resulting in alternating regions of maximum intensity (**bright fringes**) and minimum intensity (**dark fringes**).

More precisely: When two or more wave trains act simultaneously on any particle in a medium, the displacement at any instant is due to the **superposition of all wave fronts**. This phenomenon is called **interference of light**.

### Historical Note

- **Thomas Young** (1801) first demonstrated interference of light with his double-slit experiment, providing decisive evidence for the **wave nature of light**.
- Interference **cannot** be explained by the corpuscular (particle) theory — this was one of Newton's theory's greatest failures.

---

## 3. Types of Interference

### 3.1 Constructive Interference (Bright Fringe)

When two waves meet **in phase** (crest meets crest, trough meets trough):

```
Wave 1:  ╭──╮      ╭──╮
         │  │      │  │
─────────┤  ╰──────╯  ├─────  (amplitude = A)
                  +
Wave 2:  ╭──╮      ╭──╮
         │  │      │  │
─────────┤  ╰──────╯  ├─────  (amplitude = A)
                  =
Result:  ╭────╮    ╭────╮
         │    │    │    │
─────────┤    ╰────╯    ├───  (amplitude = 2A) ← Constructive
```

- **Amplitude** of resultant = `A + A = 2A`
- **Intensity** ∝ (2A)² = `4A²` → **maximum** (brightness)
- Crest + Crest = 2A (total amplitude)
- Trough + Trough = −A − A = −2A (same magnitude)

### 3.2 Destructive Interference (Dark Fringe)

When two waves meet **out of phase** (crest meets trough):

```
Wave 1:  ╭──╮      ╭──╮
         │  │      │  │
─────────┤  ╰──────╯  ├─────  (amplitude = +A)
                  +
Wave 2:     ╰──╯      ╰──╯
         ────┤  ╭──────╯  ├── (amplitude = −A, phase shifted by π)
                  =
Result:  ─────────────────── (amplitude = 0) ← Destructive
```

- **Amplitude** of resultant = `A − A = 0`
- **Intensity** ∝ 0² = `0` → **minimum** (darkness)
- Crest + Trough = A − A = 0

### Summary

| Type | Phase Difference | Path Difference | Amplitude | Intensity |
|------|-----------------|-----------------|-----------|-----------|
| Constructive | `0, 2π, 4π, ...` i.e. `2nπ` | `0, λ, 2λ, ...` i.e. `nλ` | `2A` | `4A²` (max) |
| Destructive | `π, 3π, 5π, ...` i.e. `(2n+1)π` | `λ/2, 3λ/2, ...` i.e. `(2n+1)λ/2` | `0` | `0` (min) |

---

## 4. Coherent Sources

### Definition

> **Coherent sources** are sources that emit light waves of the **same frequency**, **nearly the same amplitude**, and maintain a **constant phase relationship** (constant phase difference) with each other.

Two coherent sources must emit radiation of the same color (wavelength). 

### Why Can't Two Independent Sources Be Coherent?

In practice, it is **impossible** to have two independent sources that are perfectly coherent because:
- Atoms emit light in random bursts of about 10⁻⁸ seconds
- Different atoms have random phase relationships
- Even two separate lasers drift in phase relative to each other

### How to Obtain Coherent Sources (Methods)

Two techniques are used to split a single source into two coherent virtual sources:

| Method | Technique | Example |
|--------|-----------|---------|
| **Wave front division** | Split the wave front into two parts | Young's double slit, Fresnel biprism |
| **Amplitude division** | Split the amplitude at each point | Thin film interference, Newton's rings, Michelson interferometer |

---

## 5. Phase Difference and Path Difference

### Relationship

> If the **path difference** between two waves is `λ`, the corresponding **phase difference** is `2π`.

For a path difference `x`, the phase difference `δ` is:

$$\frac{\delta}{2\pi} = \frac{x}{\lambda}$$

$$\boxed{\delta = \frac{2\pi}{\lambda} \times x}$$

Or equivalently:

$$\frac{\text{Phase difference}}{2\pi} = \frac{\text{Path difference}}{\lambda}$$

### Conditions in Terms of Path Difference

- **Constructive interference:** path difference `= nλ` where `n = 0, 1, 2, 3, ...`
- **Destructive interference:** path difference `= (2n+1)λ/2` where `n = 0, 1, 2, 3, ...`

### Example

If λ = 600 nm and path difference = 1800 nm:
$$\delta = \frac{2\pi}{600} \times 1800 = 6\pi = 3 \times 2\pi$$
This is constructive interference (n = 3). ✓

---

## 6. Analytical Treatment of Interference

### Setup

Consider two coherent sources producing waves at a point P with the **same amplitude `a`** but a **phase difference `δ`**.

Let the displacements be:
$$y_1 = a \sin \omega t$$
$$y_2 = a \sin(\omega t + \delta)$$

### Resultant Displacement

By superposition:
$$y = y_1 + y_2 = a\sin\omega t + a\sin(\omega t + \delta)$$

Expanding `sin(ωt + δ)`:
$$y = a\sin\omega t + a(\sin\omega t \cos\delta + \cos\omega t \sin\delta)$$
$$y = a\sin\omega t(1 + \cos\delta) + a\cos\omega t \sin\delta$$

### Using Phasor (Amplitude Substitution)

Let:
$$a(1 + \cos\delta) = R\cos\theta \quad \cdots (i)$$
$$a\sin\delta = R\sin\theta \quad \cdots (ii)$$

Then:
$$y = R\cos\theta \sin\omega t + R\sin\theta \cos\omega t = R\sin(\omega t + \theta) \quad \cdots (iii)$$

This is **simple harmonic motion** of amplitude `R`. ✓

### Finding Resultant Amplitude R

Squaring and adding equations (i) and (ii):
$$R^2 = a^2(1+\cos\delta)^2 + a^2\sin^2\delta$$
$$R^2 = a^2(1 + 2\cos\delta + \cos^2\delta + \sin^2\delta)$$
$$R^2 = a^2(1 + 2\cos\delta + 1)$$
$$R^2 = 2a^2(1 + \cos\delta)$$

Using the identity `1 + cosδ = 2cos²(δ/2)`:

$$\boxed{R^2 = 4a^2\cos^2\frac{\delta}{2}}$$

---

## 7. Intensity Distribution

Since **intensity** is proportional to the **square of amplitude**:

$$I = R^2 = 4a^2\cos^2\frac{\delta}{2}$$

$$\boxed{I = 4a^2\cos^2\frac{\delta}{2}}$$

### Special Cases

#### Case 1: Constructive Interference (Maximum Intensity)

Phase difference `δ = 0, 2π, 4π, ..., 2nπ`  
(Path difference `x = 0, λ, 2λ, ..., nλ`)

$$\cos\frac{\delta}{2} = \cos 0 = 1$$
$$\boxed{I_{max} = 4a^2}$$

#### Case 2: Destructive Interference (Minimum Intensity)

Phase difference `δ = π, 3π, 5π, ..., (2n+1)π`  
(Path difference `x = λ/2, 3λ/2, ..., (2n+1)λ/2`)

$$\cos\frac{\delta}{2} = \cos\frac{\pi}{2} = 0$$
$$\boxed{I_{min} = 0}$$

### Intensity Distribution Graph

```
I ↑
4a²|    ╭──╮        ╭──╮        ╭──╮
   |   /    \      /    \      /    \
   |  /      \    /      \    /      \
   | /        \  /        \  /        \
0  |/          \/          \/          \──
   ──────────────────────────────────────→ δ
   -4π  -3π  -2π  -π   0   π   2π  3π  4π
```

---

## 8. Energy Distribution and Conservation

### Where Does the "Lost" Energy Go?

From `I = 4a²cos²(δ/2)`:
- At **bright fringes**: `I = 4a²` (twice the average)
- At **dark fringes**: `I = 0`

**Average intensity** over one full period:
$$\langle I \rangle = 4a^2 \langle \cos^2\frac{\delta}{2} \rangle = 4a^2 \times \frac{1}{2} = 2a^2$$

If two sources each had intensity `I₀ = a²`, the total without interference would be:
$$I_{total} = I_0 + I_0 = 2a^2$$

The **average** with interference is also `2a²` — **energy is conserved**! ✓

> Energy is **redistributed**, not created or destroyed. Bright fringes gain at the expense of dark fringes.

This was critically important — it showed interference doesn't violate conservation of energy, addressing early critics of the wave theory.

---

## 9. Conditions for Interference

### A. Conditions for Sustained (Stable) Interference

1. **Same frequency:** The two waves must have the **same frequency** (same color). Waves of different frequencies produce a rapidly changing pattern that washes out.

2. **Coherent sources:** The two sources must be **coherent** — maintaining a constant phase difference over time.

3. **Path difference within coherence length:** The path difference between interfering waves must be **less than the coherence length** of the light. For sodium light, coherence length ≈ 3 cm.

4. **Same polarization:** If the two wave sets are plane polarized, their **planes of polarization must be the same** (or at least not perpendicular). Waves polarized at 90° to each other cannot interfere.

### B. Conditions for a Distinct Fringe Pattern

1. **Sources must be close together:** Two coherent sources must be **close to each other** in order to observe the fringe pattern (as fringe width `β = λD/d` — too large `d` makes `β` too small).

2. **Screen must be far from sources:** The screen must be at a **large distance** from the sources to make the fringes wide enough to observe.

3. **Vector sum of electric fields = 0 in dark regions:** The vector sum of the overlapping electric field vectors must be zero in the dark regions.

---

## 10. Worked Examples

### Example 1: Resultant Amplitude

**Problem:** Two coherent waves of equal amplitude `a = 3 units` meet at a point with a phase difference of `60°`. Find the resultant amplitude.

**Solution:**

$$R^2 = 4a^2\cos^2\frac{\delta}{2} = 4 \times 9 \times \cos^2 30°$$
$$R^2 = 36 \times \left(\frac{\sqrt{3}}{2}\right)^2 = 36 \times \frac{3}{4} = 27$$
$$R = \sqrt{27} = 3\sqrt{3} \approx 5.2 \text{ units}$$

---

### Example 2: Intensity Ratio

**Problem:** Show that if two waves have the same amplitude `a`, the ratio of maximum to minimum intensity is `∞ : 0` (or undefined — the dark fringe has zero intensity).

**Solution:**

$$I_{max} = 4a^2 \quad (\text{when } \delta = 0, 2\pi, \ldots)$$
$$I_{min} = 0 \quad (\text{when } \delta = \pi, 3\pi, \ldots)$$
$$\frac{I_{max}}{I_{min}} = \frac{4a^2}{0} \rightarrow \infty$$

For two sources of **unequal** amplitudes `a₁` and `a₂`:
$$I_{max} = (a_1 + a_2)^2, \quad I_{min} = (a_1 - a_2)^2$$
$$\frac{I_{max}}{I_{min}} = \left(\frac{a_1 + a_2}{a_1 - a_2}\right)^2$$

---

### Example 3: Path Difference to Phase Difference

**Problem:** Monochromatic light of wavelength `λ = 500 nm` illuminates two slits. At a point P, the path difference is `750 nm`. Is P bright or dark?

**Solution:**

$$\frac{\text{path difference}}{\lambda} = \frac{750}{500} = 1.5 = \frac{3}{2} = \frac{(2 \times 1 + 1)}{2}$$

Since path difference `= (2n+1)λ/2` with `n = 1`, this is **destructive interference** → **dark fringe**. ✓

Phase difference:
$$\delta = \frac{2\pi}{\lambda} \times 750 = \frac{2\pi \times 750}{500} = 3\pi$$

Since `3π = (2×1+1)π`, confirmed destructive. ✓

---

## 11. Online References

- 📘 [HyperPhysics — Interference of Light](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/interf.html)
- 📘 [MIT OCW — Lecture on Interference](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-ii-electromagnetic-waves/lecture-20/)
- 📘 [LibreTexts — Interference](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/03%3A_Interference)
- 📘 [Khan Academy — Interference](https://www.khanacademy.org/science/physics/light-waves/interference-of-light-waves/a/what-is-light-interference)
- 📘 [NCERT — Interference (Wave Optics)](https://ncert.nic.in/textbook.php?leph2=10-10)
- 📘 [The Physics Classroom — Interference](https://www.physicsclassroom.com/class/light/Lesson-3/Interference-of-Waves)

---

*← [Reflection & Refraction](../02_reflection_refraction/README.md) | Back to [Main Index](../README.md) | Next: [Young's Experiment →](../04_youngs_experiment/README.md)*
