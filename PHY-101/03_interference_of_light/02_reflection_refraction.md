# 02. Laws of Reflection & Refraction via Huygens' Principle

> **Date:** February 23, 2025
> **Topic:** Interpretation of Laws of Reflection and Refraction using Huygens' Principle

---

## 📑 Table of Contents

1. [Introduction](#1-introduction)
2. [Law of Reflection — Proof by Huygens' Principle](#2-law-of-reflection--proof-by-huygens-principle)
3. [Law of Refraction — Proof by Huygens' Principle (Snell's Law)](#3-law-of-refraction--proof-by-huygens-principle-snells-law)
4. [Comparison: Corpuscular Theory vs Wave Theory](#4-comparison-corpuscular-theory-vs-wave-theory)
5. [Worked Examples](#5-worked-examples)
6. [Summary](#6-summary)
7. [Online References](#7-online-references)

---

## 1. Introduction

One of the greatest triumphs of Huygens' wave theory was its ability to **derive** (not just state) the laws of reflection and refraction geometrically. The laws were already known empirically, but Huygens gave them a **theoretical foundation** using his wave construction.

The **corpuscular theory** (Newton) had to assume forces to explain refraction and predicted light should **speed up** in denser media — which is incorrect. The wave theory correctly predicts that light **slows down** in denser media.

---

## 2. Law of Reflection — Proof by Huygens' Principle

### Statement of the Law

> **Law of Reflection:** The angle of incidence equals the angle of reflection, and the incident ray, reflected ray, and normal all lie in the same plane.
> $$i = r$$

### Setup

```
Incident wave front         Reflected wave front
       AB                          CD
        \                          /
         \    N (normal)          /
    A ----\------------ C -------/
          i\           /r
            \         /
    B         \       /
               \ E   /
    XY (reflecting surface)
```

- `XY` = plane reflecting surface
- `AB` = incident plane wave front striking the surface
- `i` = angle of incidence (angle between incident ray and normal)
- `r` = angle of reflection

### Proof

**Step 1:** Let the incident wave front `AB` be oblique to the reflecting surface `XY`. The ray from `B` hits the surface at point `E` first, while the ray from `A` hits at `C` later.

**Step 2:** In the time the disturbance from `A` travels to `C` (distance `AC`), the secondary wavelet from `B` has traveled the **same distance** `BD = AC` (since both are in the same medium with the same speed `v`).

**Step 3:** Draw a sphere of radius `BD = AC` centered at `B`. Draw the tangent `CD` from point `C` to this sphere. Then `CD` is the **new reflected wave front**.

**Step 4 — Geometric Proof (i = r):**

Consider triangles `△BAC` and `△BDC`:
- `BC` is **common** to both triangles
- `BD = AC` (established in Step 2)
- `∠BAC = ∠BDC = 90°` (wave front is perpendicular to ray)

By **RHS congruence**: `△BAC ≅ △BDC`

Therefore:
$$\angle ABC = \angle DCB$$

But `∠ABC = i` (angle of incidence) and `∠DCB = r` (angle of reflection)

$$\boxed{i = r}$$

The **angle of incidence equals the angle of reflection**. ✓

### Key Result

Huygens' construction proves that the **wave front of the reflected wave** makes the same angle with the reflecting surface as the incident wave front, naturally giving us the law of reflection without any additional assumptions.

---

## 3. Law of Refraction — Proof by Huygens' Principle (Snell's Law)

### Statement of the Law

> **Snell's Law (Law of Refraction):** When light passes from medium 1 to medium 2:
> $$\mu_1 \sin i = \mu_2 \sin r$$
> or equivalently: $\dfrac{\sin i}{\sin r} = \dfrac{v_1}{v_2} = \dfrac{\mu_2}{\mu_1} = {}_1\mu_2$

### Setup

```
Medium 1 (refractive index μ₁, speed v₁)
  ─────────────────────────────────
       B ──── incident wavefront ──── A
        \                            /
    i    \                          /   
          \                        /   XY (interface)
  ─ ─ ─ ─ X ─ ─ ─ ─ ─ ─ ─ ─ ─ Y ─ ─ ─ ─ ─ ─
          /                         \
    r    /                           \
        /                             \
  ─────────────────────────────────────────────
Medium 2 (refractive index μ₂ > μ₁, speed v₂ < v₁)
```

- `APB` = incident plane wave front
- `i` = angle of incidence, `r` = angle of refraction

### Proof

**Step 1:** Let the incident wave front `AB` be oblique, hitting the surface `XY`. Ray from `B` hits at point `E` (or we can call it the foot), ray from `A` hits at point `C` later.

Let the time taken for ray from `A` to reach `C` be `t`.

So: `BC = v₁ · t` (distance in medium 1)

**Step 2:** In the same time `t`, the secondary wavelet from `B` has traveled into medium 2 a distance:
`AD = v₂ · t` (distance in medium 2, where `v₂ ≠ v₁`)

**Step 3:** Draw a sphere of radius `AD = v₂t` centered at `B`. Draw tangent `CD` from `C` to this sphere. Then `CD` is the **refracted wave front** in medium 2.

**Step 4 — Geometric Proof (Snell's Law):**

In `△ABC`:
$$\sin i = \frac{BC}{AC} = \frac{v_1 t}{AC}$$

In `△ACD`:
$$\sin r = \frac{AD}{AC} = \frac{v_2 t}{AC}$$

Dividing:
$$\frac{\sin i}{\sin r} = \frac{v_1 t / AC}{v_2 t / AC} = \frac{v_1}{v_2}$$

Since refractive index `μ = c/v`:

$$\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{c/\mu_1}{c/\mu_2} = \frac{\mu_2}{\mu_1}$$

Therefore:
$$\boxed{\mu_1 \sin i = \mu_2 \sin r}$$

This is **Snell's Law**. ✓

### Critical Comparison with Corpuscular Theory

| Feature | Corpuscular Theory (Newton) | Wave Theory (Huygens) | Experimental Fact |
|---------|----|----|-----|
| Speed in denser medium | Greater (`v₂ > v₁`) | Less (`v₂ < v₁`) | Less ✓ |
| Basis of bending | Force at interface | Wave speed change | Wave speed change ✓ |
| Predicts Snell's Law? | Yes (with wrong speed) | Yes (correctly) | ✓ |
| Can explain interference? | No | Yes | ✓ |

The corpuscular theory's prediction that light speeds up in denser media was **experimentally disproved** by Foucault (1850), firmly establishing the wave nature of light.

---

## 4. Comparison: Corpuscular Theory vs Wave Theory

### Corpuscular Theory (Newton, 1666)

On corpuscular theory, Snell's law was derived as:

$$\frac{\sin i}{\sin r} = \frac{v'}{v} = \mu$$

where `v'` is speed in the **second (denser)** medium and `v` is speed in air. This **incorrectly requires** `v' > v` (light faster in denser media).

From the notes:
$$v \sin i = v' \sin r \quad \Rightarrow \quad \frac{\sin i}{\sin r} = \frac{v'}{v}$$

This equals the refractive index only if `v' > v`, which contradicts experiment.

### Wave Theory (Huygens, 1678)

Correctly gives:
$$\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{\mu_2}{\mu_1}$$

where `v₂ < v₁` in a denser medium — consistent with experiment.

---

## 5. Worked Examples

### Example 1: Verify Snell's Law using speeds

**Problem:** Light passes from air (μ₁ = 1) into glass (μ₂ = 1.5) at an angle of incidence of 30°. Find the angle of refraction.

**Solution using Huygens derivation:**

$$\mu_1 \sin i = \mu_2 \sin r$$
$$1 \times \sin 30° = 1.5 \times \sin r$$
$$\sin r = \frac{\sin 30°}{1.5} = \frac{0.5}{1.5} = 0.333$$
$$r = \sin^{-1}(0.333) = 19.47° \approx 19.5°$$

Speed in glass:
$$v_{glass} = \frac{c}{\mu_2} = \frac{3 \times 10^8}{1.5} = 2 \times 10^8 \text{ m/s}$$

This is **less** than `c` — consistent with wave theory ✓

---

### Example 2: Critical Angle

**Problem:** Find the critical angle for a glass-air interface (μ_glass = 1.5).

**Solution:**

At critical angle `θ_c`, the refracted ray grazes the surface (`r = 90°`):

$$\mu_{glass} \sin \theta_c = \mu_{air} \sin 90°$$
$$1.5 \times \sin \theta_c = 1 \times 1$$
$$\sin \theta_c = \frac{1}{1.5} = \frac{2}{3}$$
$$\theta_c = \sin^{-1}(0.667) = 41.8°$$

For angles greater than `41.8°`, **total internal reflection** occurs — explained naturally by Huygens' wave theory (secondary wavelets cannot propagate back into the denser medium at angles beyond `θ_c`).

---

### Example 3: Wave Front Refraction

**Problem:** An incident plane wave front makes an angle of 45° with a glass surface. The refractive index of glass is 1.414. Find the angle the refracted wave front makes with the surface.

**Solution:**

Angle of incidence (with normal) = 90° - 45° = 45°

Using Snell's Law:
$$\sin r = \frac{\sin 45°}{1.414} = \frac{0.707}{1.414} = 0.5$$
$$r = 30°$$

The refracted wave front makes an angle of (90° - 30°) = **60°** with the glass surface.

---

## 6. Summary

| Law | Huygens' Result | Formula |
|-----|----------------|---------|
| Reflection | `i = r` (from congruent triangles) | `∠incidence = ∠reflection` |
| Refraction | `μ₁ sin i = μ₂ sin r` (from speed ratio) | Snell's Law |
| Speed in medium | Light slows in denser medium | `v = c/μ` |
| Wave front | Always ⊥ to ray direction | Geometrical optics |

**Why Huygens' proof is superior to corpuscular theory:**
- Correctly predicts `v₂ < v₁` in denser media
- Naturally explains reflection without assuming mysterious surface forces
- Provides the foundation for understanding interference and diffraction

---

## 7. Online References

- 📘 [HyperPhysics — Huygens' Principle & Snell's Law](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/huygen.html)
- 📘 [LibreTexts — Huygens's Principle and Diffraction](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/01%3A_The_Nature_of_Light/1.07%3A_Huygens%27s_Principle)
- 📘 [NCERT Wave Optics — Refraction Proof](https://ncert.nic.in/textbook.php?leph2=10-10)
- 📘 [Khan Academy — Snell's Law](https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/a/what-is-snells-law)
- 📘 [Britannica — Snell's Law](https://www.britannica.com/science/Snells-law)

---

*← [Wave Front & Huygens](../01_wavefront_huygens/README.md) | Back to [Main Index](../README.md) | Next: [Interference →](../03_interference/README.md)*
