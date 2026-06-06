# ⚡ Topic 02 — Magnetic Force on a Current-Carrying Conductor

> **Course:** PHY-103 · Physics II | **Dept:** Textile Engineering, BUTEX
> **Topics:** Lorentz Force · F = BIL sinθ · Force Between Parallel Conductors · Definition of Ampere
> **Date:** 2026-06-04

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [The Lorentz Force](#2-the-lorentz-force)
3. [Force on a Current-Carrying Conductor](#3-force-on-a-current-carrying-conductor)
4. [Derivation: F = BIL sinθ](#4-derivation-f--bil-sinθ)
5. [Force Between Two Parallel Current-Carrying Conductors](#5-force-between-two-parallel-current-carrying-conductors)
6. [Definition of the Ampere](#6-definition-of-the-ampere)
7. [Worked Examples](#7-worked-examples)
8. [Summary of Formulas](#8-summary-of-formulas)
9. [References](#9-references)

---

## 1. Introduction

When a current-carrying conductor is placed in an external magnetic field, a **force** is exerted on it. This is the fundamental principle behind electric motors, galvanometers, loudspeakers, and countless other devices. The force arises because the magnetic field exerts individual forces on each of the moving charge carriers (electrons) within the conductor — the **Lorentz force** — and these aggregate into a macroscopic force on the conductor.

---

## 2. The Lorentz Force

### 2.1 Definition

A charged particle moving through a magnetic field experiences a force called the **Lorentz Force**:

$$\boxed{\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})}$$

In a purely magnetic field ($\vec{E} = 0$):

$$\vec{F} = q\vec{v} \times \vec{B}$$

### 2.2 Key Properties

| Property | Detail |
|:---------|:-------|
| **Direction** | Perpendicular to both $\vec{v}$ and $\vec{B}$ (right-hand rule) |
| **Magnitude** | $F = qvB\sin\alpha$ where $\alpha$ = angle between $\vec{v}$ and $\vec{B}$ |
| **Work done** | Zero — force is always ⊥ to velocity (no change in kinetic energy) |
| **Effect** | Changes direction of motion (circular/helical path), not speed |

### 2.3 Motion of a Charged Particle in a Uniform Magnetic Field

When a particle enters perpendicular to $\vec{B}$, it undergoes **uniform circular motion**:

- Lorentz force provides centripetal force: $qvB = \dfrac{mv^2}{r}$

$$r = \frac{mv}{qB} \qquad \text{(radius of circular motion)}$$

$$T = \frac{2\pi m}{qB} \qquad \text{(period — independent of velocity!)}$$

$$\omega_c = \frac{qB}{m} \qquad \text{(cyclotron frequency)}$$

```
  Charged Particle (+q) in B (into page):

    ×  ×  ×  ×  ×  ×
    ×    ↗→↘     ×      Particle follows
    ×  ↑  ○  ↓  ×      circular orbit
    ×    ↖←↙     ×      (CCW for +q)
    ×  ×  ×  ×  ×  ×
```

---

## 3. Force on a Current-Carrying Conductor

### 3.1 Physical Picture

A current-carrying conductor contains mobile charges (electrons) drifting with drift velocity $\vec{v}_d$ along the wire. When placed in an external magnetic field $\vec{B}$, each electron experiences a Lorentz force. Since the electrons cannot leave the conductor, this force is transmitted to the wire itself.

### 3.2 Formula

For a straight conductor of length $L$ carrying current $I$ at angle $\theta$ to field $\vec{B}$:

$$\boxed{\vec{F} = I(\vec{L} \times \vec{B})}$$

Scalar magnitude:

$$\boxed{F = BIL\sin\theta}$$

where:
| Symbol | Meaning |
|:-------|:--------|
| $B$ | External magnetic flux density (T) |
| $I$ | Current in conductor (A) |
| $L$ | Length of conductor in field (m) |
| $\theta$ | Angle between current direction and $\vec{B}$ |

**Special Cases:**

| Condition | Force |
|:----------|:------|
| $\theta = 90°$ (⊥ to field) | $F = BIL$ (maximum) |
| $\theta = 0°$ (∥ to field) | $F = 0$ (zero) |
| $\theta = 180°$ (antiparallel) | $F = 0$ (zero) |

---

## 4. Derivation: F = BIL sinθ

**From first principles using Lorentz Force:**

Consider a conductor of length $L$ and cross-sectional area $A$ carrying current $I$ in a uniform field $\vec{B}$.

1. Let $n$ = number density of charge carriers (electrons/m³), each with drift velocity $\vec{v}_d$.

2. Current: $I = nqv_d A$ (where $q = e$ for electrons)

3. Force on a single charge carrier: $f = qv_d B\sin\theta$

4. Number of carriers in length $L$: $N = nAL$

5. Total macroscopic force on conductor:

$$F = N \cdot f = (nAL)(qv_d B\sin\theta)$$

$$F = (nqv_d A) \cdot LB\sin\theta = I \cdot LB\sin\theta$$

$$\boxed{F = BIL\sin\theta} \qquad \checkmark$$

---

## 5. Force Between Two Parallel Current-Carrying Conductors

### 5.1 Setup

Consider two infinite parallel straight wires separated by distance $d$, carrying currents $I_1$ and $I_2$.

```
         I₁ ↑          I₂ ↑
             |    d     |
           Wire 1     Wire 2
           (×   ×   ×  B₁ at Wire 2, pointing left ←)
```

### 5.2 Derivation

**Step 1:** Field $B_1$ produced by wire 1 at the location of wire 2:

$$B_1 = \frac{\mu_0 I_1}{2\pi d}$$

**Step 2:** Force per unit length on wire 2 due to field $B_1$:

$$\frac{F}{L} = I_2 B_1 = I_2 \cdot \frac{\mu_0 I_1}{2\pi d}$$

$$\boxed{\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}}$$

### 5.3 Direction of Force (Attraction vs. Repulsion)

| Currents | Direction of force | Effect |
|:---------|:------------------|:-------|
| Same direction ($I_1, I_2$ both ↑) | Toward each other | **Attraction** |
| Opposite direction ($I_1$ ↑, $I_2$ ↓) | Away from each other | **Repulsion** |

```
  Parallel wires — force visualization:

  Same direction:          Opposite direction:
    I₁↑    I₂↑              I₁↑    I₂↓
     |      |                |      |
     |→←    |               |→→    ←←|
    ATTRACT              REPEL
```

> 🔑 **Memory Tip:** "Like currents attract, unlike currents repel" — note this is **opposite** to like charges (which repel).

---

## 6. Definition of the Ampere

### 6.1 Classical Definition (pre-2019)

> **One Ampere** is defined as the constant current which, if maintained in two infinite straight parallel conductors of negligible circular cross-section placed 1 metre apart in vacuum, would produce between them a force of $2 \times 10^{-7}$ newtons per metre of length.

This is derived from the parallel-conductor force formula:

$$\frac{F}{L} = \frac{\mu_0 I^2}{2\pi d}$$

Setting $I_1 = I_2 = 1$ A, $d = 1$ m:

$$\frac{F}{L} = \frac{(4\pi \times 10^{-7})(1)(1)}{2\pi(1)} = 2 \times 10^{-7} \text{ N/m} \checkmark$$

### 6.2 Modern Definition (SI, 2019)

Since the 2019 SI redefinition, the **Ampere** is defined by fixing the elementary charge:

$$e = 1.602176634 \times 10^{-19} \text{ C (exact)}$$

> One Ampere is exactly $1 / 1.602176634 \times 10^{-19}$ elementary charges per second.

---

## 7. Worked Examples

### Example 1 — Force on a Horizontal Wire

**Problem:** A horizontal wire of length 0.5 m carries a current of 8 A. It is placed in a uniform horizontal magnetic field of 0.3 T directed at 60° to the current. Find the force on the wire.

**Solution:**

$I = 8$ A, $L = 0.5$ m, $B = 0.3$ T, $\theta = 60°$

$$F = BIL\sin\theta = (0.3)(8)(0.5)\sin 60°$$

$$F = 1.2 \times \frac{\sqrt{3}}{2} = 1.2 \times 0.866$$

$$\boxed{F \approx 1.039 \text{ N}}$$

---

### Example 2 — Force Between Parallel Wires

**Problem:** Two long parallel wires separated by 8 cm carry currents of 5 A and 12 A in the same direction. Find the force per unit length between them. Is it attractive or repulsive?

**Solution:**

$I_1 = 5$ A, $I_2 = 12$ A, $d = 0.08$ m

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{(4\pi \times 10^{-7})(5)(12)}{2\pi (0.08)}$$

$$= \frac{4\pi \times 10^{-7} \times 60}{2\pi \times 0.08} = \frac{4 \times 60 \times 10^{-7}}{2 \times 0.08} = \frac{240 \times 10^{-7}}{0.16}$$

$$\boxed{\frac{F}{L} = 1.5 \times 10^{-4} \text{ N/m}}$$

Since currents are in the **same direction**, the force is **attractive**.

---

### Example 3 — Circular Orbit Radius

**Problem:** An electron with kinetic energy 5 keV enters a uniform magnetic field of $B = 0.02$ T perpendicular to the field. Find the radius of its circular orbit.
(Given: $m_e = 9.11 \times 10^{-31}$ kg, $e = 1.6 \times 10^{-19}$ C, 1 keV = $1.6 \times 10^{-16}$ J)

**Solution:**

KE $= 5 \times 1.6 \times 10^{-16} = 8 \times 10^{-16}$ J

$$v = \sqrt{\frac{2 \times KE}{m_e}} = \sqrt{\frac{2 \times 8 \times 10^{-16}}{9.11 \times 10^{-31}}} = \sqrt{1.756 \times 10^{15}} \approx 4.19 \times 10^7 \text{ m/s}$$

$$r = \frac{m_e v}{eB} = \frac{(9.11 \times 10^{-31})(4.19 \times 10^7)}{(1.6 \times 10^{-19})(0.02)}$$

$$r = \frac{3.817 \times 10^{-23}}{3.2 \times 10^{-21}} = \boxed{0.01193 \text{ m} \approx 1.19 \text{ cm}}$$

---

### Example 4 — Direction by Right-Hand Rule / Fleming's Left-Hand Rule

**Fleming's Left-Hand Rule** (for motors): Point left hand with:
- **F**ore-finger → field $\vec{B}$ direction
- **M**iddle finger → current $I$ direction
- **TH**umb → force $\vec{F}$ direction

```
  Fleming's Left-Hand Rule:

        F (Force) = Thumb ↑
       /
      /
     ● ──── B (Field) = Forefinger →
      \
       \
        I (Current) = Middle finger (into page ×)
```

---

## 8. Summary of Formulas

| Formula | Meaning |
|:--------|:--------|
| $\vec{F} = q\vec{v} \times \vec{B}$ | Lorentz force on a charge |
| $F = qvB\sin\alpha$ | Magnitude (α = angle between v and B) |
| $r = mv/qB$ | Radius of circular orbit |
| $\omega_c = qB/m$ | Cyclotron frequency |
| $\vec{F} = I(\vec{L} \times \vec{B})$ | Force on conductor (vector form) |
| $F = BIL\sin\theta$ | Force magnitude (θ = angle between I and B) |
| $F/L = \mu_0 I_1 I_2/(2\pi d)$ | Force per unit length between parallel wires |

---

## 9. References

1. Halliday, Resnick & Krane — *Physics*, Vol. 2, Chapter 29
2. Serway & Jewett — *Physics for Scientists and Engineers*, 8th Ed., §29.2–29.4
3. **HyperPhysics** — [Magnetic Force](http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/magfor.html)
4. **HyperPhysics** — [Force Between Parallel Conductors](http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/wirfor.html)
5. **Khan Academy** — [Force on a current-carrying conductor](https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnetic-force-on-current-carrying-wire/a/magnetic-force-on-current-carrying-conductors-review)
6. **LibreTexts Physics** — [Magnetic Force on Current-Carrying Conductor](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II/11%3A_Magnetic_Forces_and_Fields/11.03%3A_Magnetic_Force_on_a_Current-Carrying_Conductor)
7. **Wikipedia** — [Lorentz force](https://en.wikipedia.org/wiki/Lorentz_force) · [Ampere's force law](https://en.wikipedia.org/wiki/Amp%C3%A8re%27s_force_law)
8. **MIT OCW 8.02** — [Lecture 10: Magnetic Force](https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2019/)

---

*← [Previous: Magnetic Induction](01_magnetic_induction.md) · [Back to Magnetism README](README.md) · [Next: Torque on Current Loop →](03_torque_current_loop.md)*
