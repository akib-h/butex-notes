# 07. Streamline Motion (Laminar Flow)

> **Date:** April 10, 2026 | **Topic:** 7 of 12 | [← Unsteady Motion](./06_unsteady_motion.md) | [Next: Turbulent Motion →](./08_turbulent_motion.md)

---

## 📋 Table of Contents

1. [Streamlines — Definition](#1-streamlines--definition)
2. [Laminar Flow Definition](#2-laminar-flow-definition)
3. [Mathematical Description of Streamlines](#3-mathematical-description-of-streamlines)
4. [Streamlines vs Pathlines vs Streaklines](#4-streamlines-vs-pathlines-vs-streaklines)
5. [Hagen-Poiseuille Law](#5-hagen-poiseuille-law)
6. [Reynolds Number](#6-reynolds-number)
7. [Properties of Laminar Flow](#7-properties-of-laminar-flow)
8. [Worked Examples](#8-worked-examples)
9. [References](#9-references)

---

## 1. Streamlines — Definition

> **Streamline:** An imaginary line in the fluid such that the **tangent at every point is in the direction of the velocity vector** at that point at a given instant.

```
STREAMLINES in pipe flow:

   ─────────────────────────────────────────────
   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
   ─────────────────────────────────────────────
   
   (Parallel straight lines for uniform pipe flow)
   
STREAMLINES around an object:

         ─────╮  ╭─────
        ────╮ ╰──╯ ╭───
       ────╮╰──────╯╭──
        ────╰───────╯──
        
   (Streamlines curve around obstacle)
```

### Key Properties of Streamlines

1. Streamlines **cannot cross** each other (would imply two velocities at one point)
2. Fluid flows **along** streamlines — never across them
3. For **steady flow**, streamlines are **fixed** in space
4. Closely spaced streamlines → high velocity (narrow flow tube)
5. Widely spaced streamlines → low velocity (wide flow tube)

---

## 2. Laminar Flow Definition

> **Laminar (Streamline) Flow:** Flow in which fluid moves in smooth, parallel layers (**laminae**) without mixing between layers. Each layer glides over adjacent layers.

Named after Latin *lamina* = thin plate/layer.

```
LAMINAR FLOW (Streamline Motion):

   Pipe Wall ────────────────────────────────────────
              ─────────────────────────────── (fast layer)
              ──────────────────────────────
              ─────────────────────────── (middle)
              ──────────────────────────────
              ─────────────────────────────── (slow near wall)
   Pipe Wall ────────────────────────────────────────
   
   Layers move parallel, no mixing, smooth flow
   
   Velocity profile: parabolic (Hagen-Poiseuille)
   
   v(r) = v_max × (1 - r²/R²)
```

---

## 3. Mathematical Description of Streamlines

For 2D flow with velocity components $(u, v)$, the equation of a streamline is:

$$\frac{dx}{u} = \frac{dy}{v}$$

or equivalently:

$$u \, dy - v \, dx = 0$$

For 3D flow with velocity $(u, v, w)$:

$$\frac{dx}{u} = \frac{dy}{v} = \frac{dz}{w}$$

### Stream Function (ψ)

For 2D incompressible flow, a **stream function** $\psi$ is defined such that:

$$u = \frac{\partial \psi}{\partial y}, \quad v = -\frac{\partial \psi}{\partial x}$$

Lines of constant $\psi$ are streamlines.

The flow rate between two streamlines $\psi_1$ and $\psi_2$:

$$Q = \psi_2 - \psi_1$$

---

## 4. Streamlines vs Pathlines vs Streaklines

| Line Type | Definition | Same as Streamline? |
|-----------|------------|-------------------|
| **Streamline** | Tangent = velocity direction (at one instant) | — |
| **Pathline** | Actual path traced by a fluid particle | Only in **steady** flow |
| **Streakline** | Locus of all particles that passed through a fixed point | Only in **steady** flow |

> **For steady flow:** Streamline = Pathline = Streakline

```
PATHLINE: path traced by one particle (like long-exposure photo of one dot)
STREAKLINE: like dye injected at one point (shows where all previous particles went)
STREAMLINE: instantaneous velocity direction map
```

---

## 5. Hagen-Poiseuille Law

For laminar flow in a circular pipe, the **Hagen-Poiseuille equation** gives the volumetric flow rate:

### Derivation

Consider a cylindrical fluid element of radius $r$ and length $L$ in a pipe of radius $R$. At steady state, pressure force = viscous drag force:

$$\Delta P \cdot \pi r^2 = \tau \cdot 2\pi r L$$

$$\tau = \frac{\Delta P \cdot r}{2L}$$

Using Newton's law: $\tau = -\mu \frac{du}{dr}$ (negative sign because $u$ decreases with $r$):

$$-\mu \frac{du}{dr} = \frac{\Delta P \cdot r}{2L}$$

Integrating with $u = 0$ at $r = R$ (no-slip at wall):

$$u(r) = \frac{\Delta P}{4\mu L}(R^2 - r^2)$$

**Maximum velocity (at center, r = 0):**

$$\boxed{u_{max} = \frac{\Delta P \cdot R^2}{4\mu L}}$$

**Volume flow rate:**

$$Q = \int_0^R u(r) \cdot 2\pi r \, dr = \int_0^R \frac{\Delta P}{4\mu L}(R^2 - r^2) \cdot 2\pi r \, dr$$

$$Q = \frac{\pi \Delta P}{2\mu L} \int_0^R (R^2 r - r^3) \, dr = \frac{\pi \Delta P}{2\mu L} \left[\frac{R^4}{2} - \frac{R^4}{4}\right]$$

$$\boxed{Q = \frac{\pi R^4 \Delta P}{8\mu L} = \frac{\pi d^4 \Delta P}{128 \mu L}}$$

This is the **Hagen-Poiseuille Law**.

**Average velocity:**

$$\bar{v} = \frac{Q}{A} = \frac{R^2 \Delta P}{8 \mu L} = \frac{u_{max}}{2}$$

---

## 6. Reynolds Number

Osborne Reynolds (1883) found that the transition from laminar to turbulent depends on the dimensionless **Reynolds Number**:

$$\boxed{Re = \frac{\rho v D}{\mu} = \frac{v D}{\nu}}$$

Where:
- $\rho$ = fluid density (kg/m³)
- $v$ = mean flow velocity (m/s)
- $D$ = pipe diameter (m)
- $\mu$ = dynamic viscosity (Pa·s)
- $\nu = \mu/\rho$ = kinematic viscosity (m²/s)

### Flow Regimes

| Reynolds Number | Flow Regime |
|----------------|-------------|
| $Re < 2000$ | **Laminar** (streamline) |
| $2000 < Re < 4000$ | **Transitional** (unstable) |
| $Re > 4000$ | **Turbulent** |

### Physical Meaning of Re

$$Re = \frac{\text{Inertial forces}}{\text{Viscous forces}}$$

- Small Re → viscous forces dominate → laminar
- Large Re → inertial forces dominate → turbulent

---

## 7. Properties of Laminar Flow

| Property | Laminar Flow |
|----------|-------------|
| Velocity profile | Parabolic (in circular pipe) |
| Average velocity | $\bar{v} = u_{max}/2$ |
| Mixing between layers | None |
| Energy loss | Due to viscosity only |
| Pressure drop | $\Delta P \propto v$ (linear) |
| Re | < 2000 |
| Visual appearance | Smooth, dye forms straight lines |
| Analysis | Exact analytical solutions exist |

---

## 8. Worked Examples

### Example 8.1 — Reynolds Number

**Problem:** Water (ρ = 1000 kg/m³, μ = 0.001 Pa·s) flows in a 5 cm diameter pipe at 0.03 m/s. Is it laminar or turbulent?

**Solution:**

$$Re = \frac{\rho v D}{\mu} = \frac{1000 \times 0.03 \times 0.05}{0.001} = \frac{1.5}{0.001} = 1500$$

Since $Re = 1500 < 2000$ → **Laminar Flow** ✓

---

### Example 8.2 — Critical Velocity

**Problem:** Find the maximum velocity below which flow remains laminar in a 10 cm diameter pipe carrying oil (ρ = 900 kg/m³, μ = 0.06 Pa·s).

**Solution:**

At the critical condition for laminar flow: $Re = 2000$

$$v_{critical} = \frac{Re \cdot \mu}{\rho \cdot D} = \frac{2000 \times 0.06}{900 \times 0.10}$$

$$v_{critical} = \frac{120}{90} = \boxed{1.33 \text{ m/s}}$$

Flow is laminar as long as $v < 1.33$ m/s.

---

### Example 8.3 — Hagen-Poiseuille

**Problem:** Oil (μ = 0.05 Pa·s) flows through a 2 cm diameter, 50 m long horizontal pipe. If the pressure drop is 40 kPa, find the flow rate.

**Solution:**

$$Q = \frac{\pi d^4 \Delta P}{128 \mu L}$$

$$Q = \frac{\pi \times (0.02)^4 \times 40{,}000}{128 \times 0.05 \times 50}$$

$$Q = \frac{\pi \times 1.6 \times 10^{-7} \times 40{,}000}{320}$$

$$Q = \frac{\pi \times 6.4 \times 10^{-3}}{320} = \frac{2.011 \times 10^{-2}}{320}$$

$$\boxed{Q = 6.28 \times 10^{-5} \text{ m}^3/\text{s} = 0.0628 \text{ L/s}}$$

**Verification (check laminar):**
$$A = \pi(0.01)^2 = 3.14 \times 10^{-4} \text{ m}^2$$
$$\bar{v} = Q/A = 6.28 \times 10^{-5} / 3.14 \times 10^{-4} = 0.2 \text{ m/s}$$
$$Re = \frac{\rho v D}{\mu}$$

Assuming ρ = 850 kg/m³ for oil:
$$Re = \frac{850 \times 0.2 \times 0.02}{0.05} = \frac{3.4}{0.05} = 68 \ll 2000 \quad \checkmark \text{ Laminar}$$

---

### Example 8.4 — Velocity Profile

**Problem:** In laminar pipe flow, the maximum centerline velocity is 0.6 m/s in a pipe of radius R = 0.03 m. Find the velocity at r = 0.015 m (midpoint) and the flow rate.

**Solution:**

$$u(r) = u_{max}\left(1 - \frac{r^2}{R^2}\right)$$

At $r = 0.015$ m:
$$u = 0.6 \times \left(1 - \frac{(0.015)^2}{(0.03)^2}\right) = 0.6 \times \left(1 - \frac{1}{4}\right) = 0.6 \times 0.75 = \boxed{0.45 \text{ m/s}}$$

Flow rate:
$$\bar{v} = \frac{u_{max}}{2} = 0.3 \text{ m/s}$$
$$Q = \pi R^2 \bar{v} = \pi (0.03)^2 \times 0.3 = 8.48 \times 10^{-4} \text{ m}^3/\text{s}$$

---

## 9. References

- 📘 White — *Fluid Mechanics*, Chapter 6
- 📘 Munson, Young & Okiishi — *Fundamentals of Fluid Mechanics*
- 📘 Streeter & Wylie — *Fluid Mechanics*
- 🌐 [Khan Academy — Laminar and Turbulent Flow](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/a/laminar-and-turbulent-flow)
- 🌐 [HyperPhysics — Poiseuille's Law](http://hyperphysics.phy-astr.gsu.edu/hbase/ppois.html)
- 🌐 [Physics LibreTexts — Viscosity and Laminar Flow](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book:_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14:_Fluid_Mechanics/14.07:_Viscosity_and_Turbulence)
- 🌐 [Reynolds Number — Wikipedia](https://en.wikipedia.org/wiki/Reynolds_number)

---

[← Unsteady Motion](./06_unsteady_motion.md) | [← Back to Index](./README.md) | [Next: Turbulent Motion →](./08_turbulent_motion.md)
