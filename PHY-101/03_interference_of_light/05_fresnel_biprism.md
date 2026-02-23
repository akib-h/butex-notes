# 05. Fresnel's Biprism

> **Date:** February 23, 2025
> **Topic:** Fresnel's Biprism — Construction, Theory, Determination of Wavelength and Virtual Source Separation

---

## 📑 Table of Contents

1. [Introduction to Fresnel's Biprism](#1-introduction-to-fresnels-biprism)
2. [Construction and Description](#2-construction-and-description)
3. [Working Principle](#3-working-principle)
4. [Theory — Fringe Width and Wavelength](#4-theory--fringe-width-and-wavelength)
5. [Determination of Wavelength (λ)](#5-determination-of-wavelength-λ)
6. [Determination of Virtual Source Separation (d)](#6-determination-of-virtual-source-separation-d)
7. [Second Method Using Prism Angle](#7-second-method-using-prism-angle)
8. [Advantages over Young's Experiment](#8-advantages-over-youngs-experiment)
9. [Worked Examples](#9-worked-examples)
10. [Online References](#10-online-references)

---

## 1. Introduction to Fresnel's Biprism

**Augustin-Jean Fresnel** (1788–1827) devised the biprism as an elegant method to produce two coherent virtual sources from a single real source. The biprism experiment:

- Demonstrates **interference of light** conclusively
- Is used to **determine the wavelength** of monochromatic light
- Allows determination of the **thickness of thin transparent sheets**
- Overcomes the difficulty of making two fine slits (as in Young's experiment)

The application of Fresnel's Biprism is based on the **phenomenon of interference of light waves**.

---

## 2. Construction and Description

### What is a Biprism?

> A **Fresnel biprism** is a combination of **two acute-angled prisms** placed base-to-base. In practice, it is constructed as a **single prism** with:
> - **Obtuse angle** at the center: `≈ 179°`
> - **Acute angles** on both sides: `≈ 30'` (30 minutes, i.e., 0.5°) each

```
         ┌──────────────────────┐
         │                      │
    30'  │      Biprism         │  30'
   acute │                      │ acute
    angle│    Obtuse: 179°      │ angle
         │                      │
         └──────────────────────┘
         ←── base ───────────────→
```

Because the apex angle is very small (about 30' on each side), the **deviation** of light produced is also very small, which is necessary for producing interference fringes.

---

## 3. Working Principle

### Setup

```
S (slit) → Biprism → Screen (Eye Piece)
     ←a→ ← b →  ←────────────────────→
     ←──────── D = a + b ─────────────→

S₁ ─────────── (virtual source above) ───────
   \                                         Illuminated
    \            ┌──────────┐                Region
     \           │ Biprism  │
      ────────── └──────────┘ ────────────
    /                                         (fringes here)
S₂ ─────────── (virtual source below) ───────

Eye piece at distance D from S
```

**Key variables:**
- `S` = primary source (narrow vertical slit)
- `a` = distance from source `S` to biprism
- `b` = distance from biprism to eye piece (screen)
- `D = a + b` = total distance from source to screen
- `d` = separation between two virtual coherent sources `S₁` and `S₂`

### How it Works

1. A **narrow vertical slit S** is illuminated by a monochromatic source.
2. The biprism is placed with its **refracting edge parallel to slit S**.
3. The **upper half** of the biprism refracts light downward → appears to come from virtual source **S₁** (above the real source axis).
4. The **lower half** of the biprism refracts light upward → appears to come from virtual source **S₂** (below the real source axis).
5. **S₁ and S₂** are **coherent virtual sources** — they are derived from the same real source `S`.
6. The light from S₁ and S₂ overlaps in the **illuminated region** and produces bright and dark interference fringes.
7. An **eye piece** (with cross-wires) is placed to observe and measure fringes.

---

## 4. Theory — Fringe Width and Wavelength

The fringe pattern produced by Fresnel's biprism follows the **same theory** as Young's double slit experiment, since we have two coherent virtual sources `S₁` and `S₂` separated by distance `d`.

### Fringe Width

$$\beta = \frac{\lambda D}{d}$$

where `D = a + b` is the total source-to-screen distance.

Therefore:

$$\boxed{\lambda = \frac{\beta d}{D}}$$

The fringe width `β` is measured by the eye piece. The position of any point will be at the centre of a bright fringe if its distance from D is:

$$\beta_n = \frac{n\lambda D}{d}, \quad n = 0, 1, 2, 3, \ldots$$

The point will be at the centre of a dark fringe if:

$$\beta_n = \frac{(2n+1)\lambda D}{2d}$$

---

## 5. Determination of Wavelength (λ)

### Procedure

**Step 1:** Set up the optical bench with the source slit `S`, biprism, and eye piece.

**Step 2:** Adjust the biprism so that its refracting edge is **parallel to the slit** and `S` is horizontal.

**Step 3:** **Measure fringe width `β`:** Move the eye piece horizontally to determine the fringe width.

For crossing `n` bright fringes, the eye piece moves through a distance `l`:
$$\beta = \frac{l}{n}$$

**Step 4:** **Measure D:** Measure the distance from the slit `S` to the plane of the eye piece cross-wires.

**Step 5:** **Measure d** (virtual source separation): Use the displacement method (see Section 6).

**Step 6:** **Calculate λ:**
$$\lambda = \frac{\beta d}{D}$$

---

## 6. Determination of Virtual Source Separation (d)

Since S₁ and S₂ are **virtual** sources (they don't physically exist), we cannot directly measure `d`. The **displacement method** using a convex lens is used.

### Displacement Method

```
S₁ ────────────────[LENS L]────────── Eye piece
S₂          m       ←n→

S₁ ─────────[LENS L']─────────────── Eye piece
S₂    m'              n'
      ←───── total distance ────────→
```

**Procedure:**

1. Place a **convex lens** between the biprism and the eye piece at position `L₁` such that **both virtual sources** S₁ and S₂ are clearly imaged in the eye piece field of view.

2. Measure the distance between the two images: let it be `d₁`.

3. By the lens equation in position `L₁`:
$$\frac{d_1}{d} = \frac{v}{u} = \frac{n}{m} \quad \cdots (i)$$

where `m` = distance from S₁S₂ to lens, `n` = distance from lens to image.

4. **Move the lens** to another position `L₂` (closer to eye piece) such that images of S₁S₂ are seen again (the lens forms another real image). Measure image separation `d₂`.

5. In position `L₂`:
$$\frac{d_2}{d} = \frac{v'}{u'} = \frac{m}{n} \quad \cdots (ii)$$

(Object and image distances are interchanged.)

6. **Multiplying (i) and (ii):**
$$\frac{d_1}{d} \times \frac{d_2}{d} = \frac{n}{m} \times \frac{m}{n} = 1$$

$$\frac{d_1 d_2}{d^2} = 1$$

$$\boxed{d = \sqrt{d_1 d_2}}$$

`d` is the **geometric mean** of `d₁` and `d₂`.

> **Note:** `d₁ > d₂` always (or `d₁ > d > d₂`). In position L₁ (lens farther from source), `d₁ > d`. In position L₂ (lens closer to source), `d₂ < d`.

Once `d` is known, `λ = βd/D` can be calculated.

---

## 7. Second Method Using Prism Angle

Another method to find `d` is to **measure the refracting angle `α`** of the biprism.

From the relation between prism angle `α`, refractive index `μ`, and deviation `δ`:

$$\delta = (\mu - 1)\alpha$$

The total angle between the two deviated beams (S₁ and S₂) = `2δ = 2(μ-1)α`.

If the distance from biprism to slit is `a`:

$$d = 2(\mu - 1)\alpha \cdot a$$

$$\boxed{d = 2a(\mu - 1)\alpha}$$

From the geometry (using `tan δ ≈ δ` for small angles):
$$\tan\delta = \frac{d/2}{a} \quad \Rightarrow \quad d = 2a \tan\delta \approx 2a\delta = 2a(\mu-1)\alpha$$

Therefore:
$$\boxed{\beta = \frac{\lambda D}{d} = \frac{\lambda(a+b)}{2a(\mu-1)\alpha}}$$

This gives the fringe width in terms of known optical constants of the biprism.

**Fringe width from biprism parameters:**
$$\beta = \frac{\lambda(a+b)}{2a(\mu-1)\alpha}$$

---

## 8. Advantages over Young's Experiment

| Feature | Young's Double Slit | Fresnel's Biprism |
|---------|--------------------|--------------------|
| Coherent sources | Two physical slits | Two virtual sources (via refraction) |
| Slit preparation | Difficult to make equal slits | No slits needed — only biprism |
| Intensity | Lower (slits restrict light) | Higher (more light gets through) |
| Fringe visibility | Good | Excellent |
| Practical ease | Harder to align | Easier with optical bench |
| Wavelength accuracy | Good | Better (more precise) |

---

## 9. Worked Examples

### Example 1: Finding Wavelength

**Problem:** In a Fresnel biprism experiment, the fringe width is `β = 0.2 mm`, the slit-to-screen distance is `D = 1.5 m`, and the virtual source separation is `d = 0.3 mm`. Find the wavelength of light.

**Solution:**
$$\lambda = \frac{\beta d}{D} = \frac{0.2 \times 10^{-3} \times 0.3 \times 10^{-3}}{1.5}$$
$$\lambda = \frac{6 \times 10^{-8}}{1.5} = 4 \times 10^{-8} \text{ m}$$
$$\boxed{\lambda = 4000 \text{ Å} = 400 \text{ nm}}$$

This is in the **violet** region. ✓

---

### Example 2: Finding Virtual Source Separation

**Problem:** In a biprism experiment, a convex lens placed between biprism and eye piece gives two images of the virtual sources separated by `d₁ = 4.5 mm` in one position and `d₂ = 2.0 mm` in another position. Find the actual separation `d` of the virtual sources.

**Solution:**
$$d = \sqrt{d_1 d_2} = \sqrt{4.5 \times 2.0} = \sqrt{9.0} = 3.0 \text{ mm}$$

$$\boxed{d = 3.0 \text{ mm}}$$

---

### Example 3: Finding d from biprism parameters

**Problem:** A Fresnel biprism of refractive index `μ = 1.5` and refracting angle `α = 1°` is placed at `a = 20 cm` from the slit. The screen is at `D = 150 cm` from the slit. Sodium light (`λ = 589 nm`) is used. Find: (a) virtual source separation `d`, (b) fringe width `β`.

**Solution:**

**(a) Virtual source separation:**
$$\alpha = 1° = \frac{\pi}{180} \text{ rad} = 0.01745 \text{ rad}$$
$$d = 2a(\mu - 1)\alpha = 2 \times 20 \times (1.5 - 1) \times 0.01745 \text{ cm}$$
$$d = 2 \times 20 \times 0.5 \times 0.01745 = 0.349 \text{ cm} = 3.49 \text{ mm}$$

**(b) Fringe width:**
$$\beta = \frac{\lambda D}{d} = \frac{589 \times 10^{-9} \times 1.5}{3.49 \times 10^{-3}}$$
$$\beta = \frac{883.5 \times 10^{-9}}{3.49 \times 10^{-3}} = 2.53 \times 10^{-4} \text{ m} = 0.253 \text{ mm}$$

---

## 10. Online References

- 📘 [HyperPhysics — Fresnel Biprism](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/frebi.html)
- 📘 [LibreTexts — Fresnel Biprism](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/03%3A_Interference)
- 📘 [NCERT Exemplar — Interference](https://ncert.nic.in/textbook.php?leph2=10-10)
- 📘 [Britannica — Fresnel](https://www.britannica.com/biography/Augustin-Jean-Fresnel)
- 📘 [Physics Stack Exchange — Fresnel Biprism Discussion](https://physics.stackexchange.com/questions/tagged/interference)

---

*← [Young's Experiment](../04_youngs_experiment/README.md) | Back to [Main Index](../README.md) | Next: [Newton's Rings →](../06_newtons_rings/README.md)*
