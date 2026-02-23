# 01. Wave Front & Huygens' Principle

> **Date:** February 23, 2025
> **Topic:** Wave Front, Types of Wave Fronts, Huygens' Principle

---

## 📑 Table of Contents

1. [What is a Wave Front?](#1-what-is-a-wave-front)
2. [Types of Wave Fronts](#2-types-of-wave-fronts)
3. [Huygens' Principle](#3-huygens-principle)
4. [Mathematical Treatment](#4-mathematical-treatment)
5. [Worked Examples](#5-worked-examples)
6. [Summary Table](#6-summary-table)
7. [Online References](#7-online-references)

---

## 1. What is a Wave Front?

### Definition

> **A wave front** is the locus of all points in a medium that are vibrating **in the same phase** and are displaced at the **same time**.

In other words, a wave front is a surface over which an optical wave has a **constant phase** at any given instant of time.

### Physical Intuition

When you throw a stone into still water, circular ripples spread outward. At any instant, the circle (or in 3D, a sphere) connecting all points at the same stage of vibration is the **wave front**.

For a point source `S` emitting light in all directions:
- At time `t`, light has traveled a distance `ct` in all directions
- All points at distance `ct` from `S` form a **spherical wave front**

```
         . . . . .
      .             .
    .       S         .     ← Spherical wave front
      .             .       (radius = ct)
         . . . . .
```

### Key Properties

- All points on a wave front are in the **same phase**
- The wave front is always **perpendicular** to the direction of wave propagation (the rays)
- Energy flows along the **rays**, which are normal to the wave front
- As a wave front travels, it carries **energy** with it but not the medium particles themselves

---

## 2. Types of Wave Fronts

### 2.1 Spherical Wave Front

- Produced by a **point source** in a homogeneous, isotropic medium
- The wave front is a **sphere** centered at the source
- All radii (rays) diverge from the source

```
        S (point source)
        |
       /|\
      / | \         ←── Rays (perpendicular to wavefront)
     /  |  \
    ●   ●   ●       ←── Points on spherical wavefront
```

**Equation:** For a point source at origin,  
$$r = ct \quad \Rightarrow \quad x^2 + y^2 + z^2 = c^2t^2$$

### 2.2 Cylindrical Wave Front

- Produced by a **line source** (e.g., a long luminous wire)
- The wave front is a **cylinder** coaxial with the source line
- Cross-section of the wave front is circular

### 2.3 Plane Wave Front

- Produced by a **point source at infinity** (or by a lens focusing parallel rays)
- The wave front is a **flat plane**, perpendicular to the direction of propagation
- All rays are parallel

```
→ → → → → → →      ←── Parallel rays
|_____________|     ←── Plane wave front
→ → → → → → →
```

**Equation:** A plane wave traveling in the `+x` direction:
$$\phi(x,t) = A\sin(kx - \omega t)$$

where all points with the same `x`-coordinate share the same phase.

### Summary of Wave Front Types

| Type | Source | Shape | Example |
|------|--------|-------|---------|
| Spherical | Point source (nearby) | Sphere | Candle flame, LED |
| Cylindrical | Line source | Cylinder | Long fluorescent tube |
| Plane | Point source at infinity | Flat plane | Sunlight, laser beam |

---

## 3. Huygens' Principle

### Statement

> **Huygens' Principle (1678):** Every point on a primary wave front acts as a **source of secondary spherical wavelets** (secondary disturbances) that spread out in the forward direction with the **same speed** as the original wave. The **envelope** (tangent surface) of all these secondary wavelets at any later time gives the **new (secondary) wave front**.

Proposed by **Christiaan Huygens** in 1678, this principle provided a geometrical method to determine the position of a wave front at any future time.

### Graphical Construction

**Step-by-step procedure:**

```
Step 1: Primary wave front AB at time t = 0
        A ────────── B

Step 2: Draw secondary wavelets (spheres of radius = v·Δt)
        from each point on AB

        A  ○  ○  ○  ○  ○  B
           (secondary wavelets)

Step 3: Draw the common tangent (envelope) to all wavelets
        A' ─────────── B'  ←── New wave front at t = Δt
```

### Mathematical Basis

If `v` is the wave speed and `Δt` is the time elapsed:
- Radius of each secondary wavelet = `v · Δt`
- The envelope of all wavelets = new wave front

### Important Clarification: The "Backward Wave" Problem

Huygens' principle as originally stated would also predict **backward wavelets** (traveling in the opposite direction). In practice, these are absent. Later refinements by **Fresnel** and **Kirchhoff** showed that secondary wavelets have an **obliquity factor** `K(θ)`:

$$K(\theta) = \frac{1 + \cos\theta}{2}$$

- When `θ = 0°` (forward direction): `K = 1` → maximum amplitude
- When `θ = 90°`: `K = 1/2`
- When `θ = 180°` (backward direction): `K = 0` → no backward wave ✓

This mathematically eliminates the backward wave problem.

---

## 4. Mathematical Treatment

### 4.1 Wave Equation

A monochromatic plane wave propagating in the `+x` direction is described by:

$$y(x, t) = A \sin\left(\omega t - kx + \phi_0\right)$$

where:
- `A` = amplitude
- `ω = 2πν` = angular frequency
- `k = 2π/λ` = wave number
- `φ₀` = initial phase

The **wave front** at time `t` is the surface where the **phase** `(ωt - kx + φ₀)` = constant.

### 4.2 Phase Velocity

The speed at which a wave front travels:

$$v = \frac{\omega}{k} = \frac{\lambda}{T} = \lambda\nu$$

In a medium of refractive index `μ`:

$$v = \frac{c}{\mu}$$

### 4.3 Optical Path

The **optical path** is the product of the geometric path length and the refractive index:

$$\text{Optical Path} = \mu \times \ell$$

Two points on the same wave front have **equal optical path lengths** from the source.

---

## 5. Worked Examples

### Example 1: Finding the New Wave Front

**Problem:** A spherical wave front has radius 2 cm at `t = 0`. The wave travels in air at `c = 3 × 10⁸ m/s`. Find the radius of the wave front after `t = 10⁻¹⁰ s`.

**Solution:**

Distance traveled in time `Δt`:
$$\Delta r = c \cdot \Delta t = 3 \times 10^8 \times 10^{-10} = 0.03 \text{ m} = 3 \text{ cm}$$

New radius:
$$r_{new} = r_{old} + \Delta r = 2 + 3 = 5 \text{ cm}$$

Each point on the original 2 cm sphere acts as a source of secondary wavelets of radius 3 cm. The envelope is a sphere of radius 5 cm. ✓

---

### Example 2: Plane Wave Front from Lens

**Problem:** A point source is placed at the focal point of a convex lens of focal length 20 cm. Describe the wave front emerging from the lens.

**Solution:**

When a point source is at the focal point of a convex lens:
- All rays become **parallel** after passing through the lens
- A parallel beam of rays corresponds to a **plane wave front**
- The wave front is flat and perpendicular to the optical axis

This is the principle used in search lights and parallel beam projectors.

---

### Example 3: Optical Path Calculation

**Problem:** Light travels through glass (μ = 1.5) of thickness 3 cm and then through water (μ = 1.33) of thickness 4 cm. Find the total optical path.

**Solution:**

$$\text{Optical path} = \mu_1 \ell_1 + \mu_2 \ell_2$$
$$= 1.5 \times 3 + 1.33 \times 4$$
$$= 4.5 + 5.32 = 9.82 \text{ cm}$$

The actual geometric path = 3 + 4 = 7 cm, but the optical path is 9.82 cm.

---

## 6. Summary Table

| Concept | Key Point |
|---------|-----------|
| Wave front | Locus of points in same phase |
| Huygens' Principle | Every point → source of secondary wavelets |
| New wave front | Envelope of secondary wavelets |
| Wave speed in medium | `v = c/μ` |
| Optical path | `μ × geometric path` |
| Forward vs backward wave | Obliquity factor `K(θ) = (1+cosθ)/2` eliminates backward wave |
| Plane wave front | From point source at infinity or focal point of lens |

---

## 7. Online References

- 📘 [HyperPhysics — Huygens' Principle](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/huygen.html)
- 📘 [MIT OpenCourseWare — Wave Optics Lecture](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-ii-electromagnetic-waves/lecture-16/)
- 📘 [NCERT Class 12 Physics — Wave Optics (Chapter 10)](https://ncert.nic.in/textbook.php?leph2=10-10)
- 📘 [PhysicsClassroom — Wave Fronts](https://www.physicsclassroom.com/class/light/Lesson-1/The-Wave-Behavior-of-Light)
- 📘 [Encyclopedia Britannica — Huygens' Principle](https://www.britannica.com/science/Huygens-principle)
- 📘 [LibreTexts Physics — Wave Fronts](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/01%3A_The_Nature_of_Light/1.07%3A_Huygens%27s_Principle)

---

*← Back to [Main Index](../README.md) | Next: [Reflection & Refraction →](../02_reflection_refraction/README.md)*
