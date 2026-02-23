# 07. Colours of Thin Films — Interference in Thin Films

> **Date:** February 23, 2025
> **Topic:** Thin Film Interference — Reflected and Transmitted Light, Conditions, Applications

---

## 📑 Table of Contents

1. [Introduction — Why Do Thin Films Show Colours?](#1-introduction--why-do-thin-films-show-colours)
2. [Thin Film Interference — Basic Concept](#2-thin-film-interference--basic-concept)
3. [Interference Due to Reflected Light — Derivation](#3-interference-due-to-reflected-light--derivation)
4. [Conditions for Bright and Dark in Reflected Light](#4-conditions-for-bright-and-dark-in-reflected-light)
5. [Interference Due to Transmitted Light](#5-interference-due-to-transmitted-light)
6. [Conditions for Bright and Dark in Transmitted Light](#6-conditions-for-bright-and-dark-in-transmitted-light)
7. [Colours of Thin Films](#7-colours-of-thin-films)
8. [Phase Change on Reflection — Stokes' Law](#8-phase-change-on-reflection--stokes-law)
9. [Worked Examples](#9-worked-examples)
10. [Applications](#10-applications)
11. [Online References](#11-online-references)

---

## 1. Introduction — Why Do Thin Films Show Colours?

We observe beautiful **colors** in everyday life due to thin film interference:
- Colors in **soap bubbles**
- The iridescent sheen of **oil films** on water
- Colors on **compact discs (CDs)**
- Colors on **butterfly wings** and **beetle shells**
- **Anti-reflection coatings** on camera lenses

All these arise because light waves reflected from the **two surfaces** of a thin film **interfere** with each other. Depending on the film thickness and wavelength, different colors (wavelengths) are either reinforced (constructive) or cancelled (destructive), producing the observed colors.

> Interference of light is a **special phenomenon** reflecting the wave nature of light. When light from inner and outer surfaces combine, they will interfere with each other — removing or reinforcing some parts of white light by destructive or constructive interference.

---

## 2. Thin Film Interference — Basic Concept

### The Setup

```
      Incident light I →
                        ↓
              ──────────────────── Air (μ = 1)
       Ray 1 ↑↑         Ray 2
(reflected  )         (enters film)
              ──────────────────── Film (μ, thickness t)
                        ↓↑ (reflects off bottom)
              ──────────────────── Air (μ = 1) or glass
```

When a ray of light hits a thin film:
- **Part is reflected** from the top surface (Ray 1)
- **Part is transmitted** into the film, reflects off the bottom surface, and then exits as (Ray 2)

These two rays (**Ray 1** and **Ray 2**) are **coherent** (from the same source) and will interfere constructively or destructively depending on their **optical path difference**.

### Key Considerations

1. The film has thickness `t` and refractive index `μ`
2. Light may undergo **phase changes** at the interfaces (see Section 8)
3. The optical path difference depends on:
   - Film thickness `t`
   - Angle of refraction `r` inside the film
   - Refractive index `μ`

---

## 3. Interference Due to Reflected Light — Derivation

### Setup for Reflected Light

```
         A        C         F
         |        |         |
         i\   i  /         / ← Incident ray
            \   /         /
  Air ────── M──────────E────────────── (top surface of film)
     μ=1      \         /
               \       /
       Film     \   r /  ← Refracted rays inside film
       (μ, t)    \   /
  ──────────────── B ────────────────── (bottom surface of film)
     Air            ↓
     μ=1       (refracted, not shown)
```

**Variables:**
- `i` = angle of incidence (in air)
- `r` = angle of refraction (in film)
- `t` = thickness of film
- `μ` = refractive index of film
- `MABC...` = path of light inside film

### Geometric Path Difference

Let light incident at `M` on the top surface. Part is reflected (Ray MA → Ray 1). Part is refracted into the film along `MB`. At `B` (bottom surface), part is reflected back along `BC`. At `C` (top surface), it refracts out along `CF` (Ray 2).

Draw `BN ⊥ MC` (normal from B to the refracted ray `MC`).

**Geometric path difference** between Ray 2 and Ray 1:
$$\Delta_{geometric} = (MB + BC)_{film} - (MA)_{air}$$

**Step 1:** In the film:
$$MB = \frac{t}{\cos r} \quad \text{(from geometry, since film thickness is } t \text{ and angle in film is } r\text{)}$$

Since `MB = BC = t/cos r` (by symmetry, since light reflects at B at same angle):
$$MB + BC = \frac{2t}{\cos r} \quad \cdots (iii)$$

**Step 2:** Finding `MA`:

From the geometry, `BE = 2t \tan r` (horizontal spread at bottom surface).

In triangle `BME`: `ME = t \tan r`, so `ME = BE/2`... more carefully:

Actually, `ME = t \tan r` and `ME = BL` where `BL = t \tan r`.

So `BE = 2t \tan r`, and `MA = BE \cdot \sin i = 2t \tan r \sin i`

Using Snell's law: `sin i = μ sin r`

$$MA = 2t \tan r \cdot \mu \sin r = \frac{2\mu t \sin^2 r}{\cos r} \quad \cdots (iv)$$

**Step 3:** Optical path difference:
$$\Delta = \mu(MB + BC) - MA = \mu \cdot \frac{2t}{\cos r} - \frac{2\mu t \sin^2 r}{\cos r}$$
$$\Delta = \frac{2\mu t}{\cos r}(1 - \sin^2 r) = \frac{2\mu t \cos^2 r}{\cos r}$$

$$\boxed{\Delta = 2\mu t \cos r} \quad \cdots (vi)$$

### Including Phase Change

Ray 1 (reflecting at top surface, air→film, rarer→denser): undergoes **phase change of π** → extra path = `λ/2`

Ray 2 (reflecting at bottom surface, film→air, denser→rarer): **no phase change**

Net phase change = π (equivalent to extra path `λ/2`)

Therefore, **total effective optical path difference** for reflected light:

$$\boxed{\Delta = 2\mu t \cos r + \frac{\lambda}{2}}$$

Or equivalently (depending on sign convention):

$$\Delta = 2\mu t \cos r - \frac{\lambda}{2}$$

---

## 4. Conditions for Bright and Dark in Reflected Light

### For Normal Incidence (`i = 0`, so `r = 0`, `cos r = 1`)

Effective path difference becomes:
$$\Delta = 2\mu t \pm \frac{\lambda}{2}$$

### Constructive Interference (Bright Fringe)

Total path difference = `nλ`:
$$2\mu t \cos r + \frac{\lambda}{2} = n\lambda$$
$$2\mu t \cos r = (2n - 1)\frac{\lambda}{2} = \left(n - \frac{1}{2}\right)\lambda$$

$$\boxed{2\mu t \cos r = (2n-1)\frac{\lambda}{2}} \quad n = 1, 2, 3, \ldots$$

For normal incidence:
$$\boxed{2\mu t = (2n-1)\frac{\lambda}{2}}$$

### Destructive Interference (Dark Fringe)

Total path difference = `(n + 1/2)λ` → but let's derive properly:
$$2\mu t \cos r + \frac{\lambda}{2} = \left(n + \frac{1}{2}\right)\lambda$$
$$2\mu t \cos r = n\lambda$$

$$\boxed{2\mu t \cos r = n\lambda} \quad n = 0, 1, 2, 3, \ldots$$

For normal incidence:
$$\boxed{2\mu t = n\lambda}$$

### Summary Table — Reflected Light

| Condition | Formula | Result |
|-----------|---------|--------|
| Constructive (bright) | `2μt cos r = (2n−1)λ/2` | Bright (color reinforced) |
| Destructive (dark) | `2μt cos r = nλ` | Dark (color cancelled) |

At `t = 0`: condition gives `0 = 0` which satisfies `2μt = nλ` with `n = 0` → **dark** (same as Newton's rings center)

---

## 5. Interference Due to Transmitted Light

### Setup

```
         S (source)
          ↓
 Air ─────A──────────── Top surface
           \   Film (μ, t)
            B──────────── Bottom surface
           /    ↑ partial reflection at bottom
          C ──── (Ray going back up, partial reflection at top)
           \
   Air ─────D (Ray 2 exits below as transmitted ray DQ)

  Also, Ray BR exits directly as (Ray 1, transmitted without reflection)
```

Consider a thin transparent film:
- Ray `SA` enters, refracts to `AB`
- At `B`, partly **refracted** (transmitted) along `BR` → **Ray 1**
- At `B`, partly reflected along `BC`, then at `C` partly transmitted → **Ray 2** (DQ)

**Both reflections** (at B and C) are from **denser to rarer** (film to air) → **no phase change** at either interface.

**Optical path difference** for transmitted light:
$$\Delta = \mu(BC + CD) - BN$$

Following the same derivation as reflected light (but without phase change):

$$\Delta = 2\mu t \cos r$$

**No extra `λ/2` term** (since no net phase change in transmitted light):

$$\boxed{\Delta_{transmitted} = 2\mu t \cos r}$$

---

## 6. Conditions for Bright and Dark in Transmitted Light

### Constructive Interference (Bright in transmission)

$$2\mu t \cos r = n\lambda \quad n = 0, 1, 2, 3, \ldots$$

For normal incidence:
$$\boxed{2\mu t = n\lambda}$$

### Destructive Interference (Dark in transmission)

$$2\mu t \cos r = (2n+1)\frac{\lambda}{2} \quad n = 0, 1, 2, 3, \ldots$$

For normal incidence:
$$\boxed{2\mu t = (2n+1)\frac{\lambda}{2}}$$

### Complementary Nature: Reflected vs Transmitted

| Condition | Reflected Light | Transmitted Light |
|-----------|----------------|------------------|
| Bright | `2μt = (2n-1)λ/2` | `2μt = nλ` |
| Dark | `2μt = nλ` | `2μt = (2n-1)λ/2` |

> **Key result:** The conditions for bright and dark in **reflected** light are exactly the **opposite** of those in **transmitted** light. When a film appears **bright** in reflected light, it appears **dark** in transmitted light, and vice versa. This ensures **conservation of energy**.

> In case of transmitted light, the fringes are **less distinct** (less visible) because the difference in amplitudes of BR and DQ is very large. However, when the angle of incidence is nearly 45°, the fringes become more distinct.

---

## 7. Colours of Thin Films

### Why Different Colors Appear

White light contains all wavelengths (400 nm to 700 nm). For a thin film of given thickness `t` and refractive index `μ`:

- Some wavelengths satisfy the **constructive condition** → those colors appear **bright** (reinforced)
- Other wavelengths satisfy the **destructive condition** → those colors are **absent** (cancelled)

The remaining colors combine to produce the observed color of the film.

### Effect of Film Thickness on Color

| Film Thickness | Colors Reinforced in Reflection | Observed Color |
|---------------|-------------------------------|----------------|
| Very thin (`t → 0`) | None (all destructive for reflected) | Black/dark |
| `t = λ/4μ` (quarter-wave film) | Specific λ reinforced | Color of that λ |
| `t = λ/2μ` (half-wave film) | Conditions shift | Complementary color |
| Thicker films | Multiple wavelengths reinforced | Mixed/complex colors |

### Why Soap Bubbles Show Changing Colors

As a soap bubble thins (water drains due to gravity):
- Thickness `t` continuously changes
- Different wavelengths are successively reinforced
- Colors shift from blue → green → yellow → orange → red → ultimately black (when extremely thin, just before bursting)

### Oil Film on Water

An oil film (`μ ≈ 1.4–1.5`) on water:
- Both interfaces: oil-air (top) and oil-water (bottom) have different phase change conditions
- Since `μ_water > μ_oil`, the bottom reflection (oil to water, rarer to denser) also involves a phase change
- Net phase difference = 0 (both reflections change phase) → condition changes accordingly

For oil on water (both boundaries cause phase change → net phase change = 0):
- **Bright:** `2μt cos r = nλ`
- **Dark:** `2μt cos r = (2n+1)λ/2`

---

## 8. Phase Change on Reflection — Stokes' Law

### Stokes' Law of Reflection

> When light reflects at a boundary going from a **rarer to denser** medium (e.g., air to glass), it undergoes a **phase change of π** (equivalent to a path difference of `λ/2`).
>
> When light reflects at a boundary going from a **denser to rarer** medium (e.g., glass to air), there is **no phase change**.

This can be summarized:

| Reflection at | Phase Change | Extra Path |
|--------------|-------------|-----------|
| Rarer → Denser (e.g., air→glass) | π (180°) | λ/2 |
| Denser → Rarer (e.g., glass→air) | 0 | 0 |

**Mnemonic:** "Reflection from a denser medium is like reflection from a fixed end — it gets flipped (phase change). Reflection from a rarer medium is like reflection from a free end — no flip."

### Application to Different Cases

| Case | Top reflection | Bottom reflection | Net extra path |
|------|---------------|------------------|----------------|
| Air film (Newton's rings) | Rarer→Denser (glass) → π | Denser→Rarer (air) → 0 | λ/2 |
| Oil on water | Air→Oil (Rarer→Denser) → π | Oil→Water (depends on μ) → π (since μ_water > μ_oil) | 0 |
| Glass coating on camera | Air→Coating → π | Coating→Glass → π (if μ_coating < μ_glass) | 0 |

---

## 9. Worked Examples

### Example 1: Reflected light — Condition check

**Problem:** A soap film of thickness `t = 1500 Å` and refractive index `μ = 1.33` is illuminated by white light at normal incidence. Which wavelengths in the visible range (400–700 nm) will appear bright in reflected light?

**Solution:**

For bright fringes in reflected light (with phase change):
$$2\mu t = (2n-1)\frac{\lambda}{2}$$
$$\lambda = \frac{4\mu t}{2n-1} = \frac{4 \times 1.33 \times 1500}{2n-1} = \frac{7980}{2n-1} \text{ Å}$$

| n | λ (Å) | In visible range (4000–7000 Å)? |
|---|-------|-------------------------------|
| 1 | 7980 | No (infrared) |
| 2 | 2660 | No (UV) |

Hmm — let me try with `n = 1`:
`λ = 4 × 1.33 × 1500 / 1 = 7980 Å = 798 nm` → infrared, not visible.

For `n = 1` with the formula written as `2μt = (2n-1)λ/2`:
When `n = 1`: `2 × 1.33 × 1500 = 1 × λ/2` → `λ = 7980 Å` (infrared)

Actually let me use: for n=1: λ = 4μt/(2×1-1) = 4μt = 7980 Å
For n=2: λ = 4μt/3 = 7980/3 = 2660 Å (UV)

So with this film, **no visible wavelength** is strongly reinforced. The film would appear **dark** in reflected white light.

---

### Example 2: Minimum thickness for color

**Problem:** Find the minimum thickness of a soap bubble film (`μ = 1.33`) that will appear **green** (`λ = 546 nm`) in reflected light.

**Solution:**

For bright reflection (minimum thickness → `n = 1`):
$$2\mu t = (2 \times 1 - 1)\frac{\lambda}{2} = \frac{\lambda}{2}$$
$$t_{min} = \frac{\lambda}{4\mu} = \frac{546}{4 \times 1.33} = \frac{546}{5.32} = 102.6 \text{ nm}$$

$$\boxed{t_{min} \approx 103 \text{ nm}}$$

This is a **quarter-wave film** — the minimum thickness that produces constructive reflection for green light.

---

### Example 3: Anti-reflection coating

**Problem:** A glass lens (`μ_glass = 1.5`) is coated with MgF₂ (`μ_coat = 1.38`). What minimum thickness of coating will minimize reflection for yellow light (`λ = 550 nm`)?

**Solution:**

Both interfaces: Air→MgF₂ (rarer→denser, phase change π) and MgF₂→Glass (rarer→denser since `μ_coat < μ_glass`, phase change π).

Net phase change = π + π = 2π = 0 → No net phase difference.

Condition for **destructive** interference in reflected light (to minimize reflection = anti-reflection):
$$2\mu_{coat} t = (2n-1)\frac{\lambda}{2}$$

For minimum thickness `n = 1`:
$$t = \frac{\lambda}{4\mu_{coat}} = \frac{550}{4 \times 1.38} = \frac{550}{5.52} = 99.6 \text{ nm}$$

$$\boxed{t \approx 100 \text{ nm}}$$

This is why camera lenses appear **purple/magenta** — the coating cancels yellow and reflects the complementary (red + blue) colors.

---

### Example 4: Dark film in reflected light

**Problem:** A thin air film between two glass plates (`μ = 1.5`) has thickness `t = λ/2`. What is the path difference, and is the film bright or dark in reflected light?

**Solution:**

Top surface (air → glass): phase change π → extra path `λ/2`  
Bottom surface (glass → air): no phase change

Geometric path difference = `2μt cos r` = `2 × 1 × (λ/2) × 1` = `λ` (for air film, μ = 1, normal incidence)

Total effective path difference = `λ + λ/2 = 3λ/2`

Since `3λ/2 = (2×1+1)λ/2` → **destructive condition** → **dark** ✓

---

## 10. Applications

| Application | Principle | Effect |
|-------------|-----------|--------|
| Anti-reflection coatings (camera lenses) | Destructive interference in reflected light | Reduces glare, more light transmitted |
| High-reflectance coatings (mirrors) | Constructive interference in reflected light | Near-100% reflection |
| Soap bubble colors | Constructive for specific λ depending on t | Beautiful iridescent colors |
| Oil on water colors | Thin film interference | Color patterns |
| CD/DVD data reading | Interference patterns encode data | Digital reading |
| Butterfly wing iridescence | Thin layers of chitin | Structural color (not pigment) |
| Testing optical flats | Newton's rings pattern | Surface quality measurement |

---

## 11. Online References

- 📘 [HyperPhysics — Thin Film Interference](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/thinfilm.html)
- 📘 [LibreTexts — Thin Film Interference](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/03%3A_Interference/3.07%3A_Thin-Film_Interference)
- 📘 [Khan Academy — Thin Film Interference](https://www.khanacademy.org/science/physics/light-waves/interference-of-light-waves/a/thin-film-interference)
- 📘 [MIT OCW — Thin Film and Phase Changes](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/)
- 📘 [NCERT — Colours of Thin Films](https://ncert.nic.in/textbook.php?leph2=10-10)
- 📘 [The Physics Classroom — Thin Film Interference](https://www.physicsclassroom.com/class/light/Lesson-3/Thin-Film-Interference)
- 📘 [Science Museum — Soap Bubbles and Light](https://www.sciencemuseum.org.uk/)

---

*← [Newton's Rings](../06_newtons_rings/README.md) | Back to [Main Index](../README.md)*

---

## 🎯 Quick Revision Card

```
THIN FILM INTERFERENCE SUMMARY
═══════════════════════════════

Setup: Film (μ, thickness t), angle of refraction r

Optical path difference (geometric): Δ = 2μt·cos r

Phase change at interface:
  Rarer → Denser: +λ/2 (phase shift π)
  Denser → Rarer: No change

REFLECTED LIGHT (one boundary changes phase, net: +λ/2):
  Bright: 2μt·cos r = (2n-1)λ/2  [n = 1,2,3...]
  Dark:   2μt·cos r = nλ          [n = 0,1,2...]

TRANSMITTED LIGHT (no net phase change):
  Bright: 2μt·cos r = nλ          [n = 0,1,2...]
  Dark:   2μt·cos r = (2n-1)λ/2  [n = 1,2,3...]

For NORMAL INCIDENCE: cos r = 1, so 2μt·cos r = 2μt

KEY: Bright reflected ↔ Dark transmitted (complementary)
     Energy is always conserved!
```
