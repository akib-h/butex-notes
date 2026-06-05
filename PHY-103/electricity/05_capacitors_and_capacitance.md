---
subject: PHY-103
topic: Capacitors and Capacitance
date: 2026-06-03
tags: [physics, electricity, capacitor, capacitance, parallel-plate, spherical, series, parallel]
---

# Capacitors and Capacitance

## 1. What is a Capacitor?

A **capacitor** is a device that **stores electric energy** in the form of an electric field between two conducting plates (or surfaces) carrying equal and opposite charges.

```
     Conductive Plates
          ↓         ↓
     ┌─────────┐
     │ + + + + │  ← Plate A (+Q)
     │         │  ← Dielectric (or vacuum)
     │ − − − − │  ← Plate B (-Q)
     └─────────┘
          ↑
     Electric field E between plates
```

### 1.1 Basic Properties

- Two conductors (plates) separated by an insulating medium
- When connected to a battery: plate connected to + terminal gets charge $+Q$; other plate gets $-Q$
- Stores energy in the **electric field** between the plates

---

## 2. Capacitance

### 2.1 Definition

**Capacitance** is the ability of a capacitor to store charge per unit voltage:

$$q \propto \Delta V \implies q = C \Delta V$$

$$\boxed{C = \frac{q}{\Delta V}}$$

Where:
- $C$ = capacitance (Farads, F)
- $q$ = charge on one plate (Coulombs, C)
- $\Delta V$ = potential difference between the plates (Volts, V)

**SI Unit:** Farad (F) = C/V

> **Note:** 1 Farad is a very large unit. Practical capacitors are typically in the range of μF (microfarad = $10^{-6}$ F), nF, or pF (picofarad = $10^{-12}$ F).

### 2.2 Factors Affecting Capacitance

The capacitance **does NOT** depend on:
- The charge on the plates
- The applied voltage

It **depends on:**

1. The **geometry** of each plate
2. The **spatial relationship** between the plates (separation, shape)
3. The **medium** (dielectric material) between the plates

---

## 3. Parallel-Plate Capacitor

### 3.1 Derivation using Gauss's Law

```
   Gaussian Surface (pillbox)
         ↓
   ┌─────────────────────────┐  h
   │ + + + + + + + + + + + + │  ← +Q plate (area A)
   │   E → → → → → → → → →  │
   │   E → → → → → → → → →  │  d = plate separation
   │                         │
   │ − − − − − − − − − − − − │  ← -Q plate
   └─────────────────────────┘
   
   Path of integration ↕
```

From Gauss's Law for the positive plate:

$$\varphi_E = E \cdot A = \frac{q}{\varepsilon_0} \implies E = \frac{q}{\varepsilon_0 A} = \frac{\sigma}{\varepsilon_0}$$

where $\sigma = q/A$ is the surface charge density.

> Only the Gaussian surface **between** the plates contributes flux (outside fields cancel for real parallel plates).

The potential difference:

$$V = E \cdot d = \frac{q}{\varepsilon_0 A} \cdot d = \frac{qd}{\varepsilon_0 A}$$

Therefore, capacitance:

$$C = \frac{q}{V} = \frac{q}{\dfrac{qd}{\varepsilon_0 A}}$$

$$\boxed{C = \frac{\varepsilon_0 A}{d}}$$

**Observations:**
- $C \propto A$ — larger plates → more capacitance
- $C \propto 1/d$ — smaller separation → more capacitance

---

## 4. Spherical Capacitor

### 4.1 Setup

Two concentric spherical shells: inner radius $a$ (charge $+q$), outer radius $b$ (charge $-q$).

```
         ─ ─ ─ ─
       ─   ╭───╮   ─
      ─    │ + │ b   ─  ← outer shell (-q)
      ─    │ + │         ← inner shell (+q) radius a
      ─    ╰───╯ a   ─
       ─         ─
         ─ ─ ─ ─
         
   Gaussian Surface (sphere, radius r: a < r < b)
```

Apply Gauss's Law between the shells ($a < r < b$):

$$E(4\pi r^2) = \frac{q}{\varepsilon_0} \implies E = \frac{q}{4\pi\varepsilon_0 r^2}$$

Potential difference (integrating from $+$ to $-$, i.e., $a$ to $b$):

$$V = \int_a^b \vec{E} \cdot d\vec{s} = \int_a^b \frac{q}{4\pi\varepsilon_0 r^2} \, dr = \frac{q}{4\pi\varepsilon_0}\left(\frac{1}{a} - \frac{1}{b}\right) = \frac{q}{4\pi\varepsilon_0}\left(\frac{b-a}{ab}\right)$$

Capacitance:

$$C = \frac{q}{V} = \frac{q}{\dfrac{q}{4\pi\varepsilon_0}\cdot\dfrac{b-a}{ab}} = 4\pi\varepsilon_0\left(\frac{ab}{b-a}\right)$$

$$\boxed{C = 4\pi\varepsilon_0 \frac{ab}{b-a}}$$

**Special Case:** Isolated sphere ($b \to \infty$):

$$C = 4\pi\varepsilon_0 a$$

---

## 5. Capacitors in Series and Parallel

### 5.1 Capacitors in Series

```
    +Q  -Q +Q  -Q +Q  -Q
  a |C₁| b |C₂| c |C₃| f
  ──┤  ├───┤  ├───┤  ├──
     V₁      V₂     V₃
     ←──────── V ─────→
```

**Key Property:**
- Same charge $Q$ on each capacitor
- Voltages add: $V = V_1 + V_2 + V_3$

Since $V_1 = Q/C_1$, $V_2 = Q/C_2$, $V_3 = Q/C_3$:

$$V = Q\left(\frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3}\right)$$

Equivalent capacitance:

$$C_{eq} = \frac{Q}{V} = \frac{Q}{Q\left(\frac{1}{C_1}+\frac{1}{C_2}+\frac{1}{C_3}\right)}$$

$$\boxed{\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} = \sum_{j=1}^{m}\frac{1}{C_j}}$$

> **Note:** $C_{eq} < C_{min}$ — series combination gives **smaller** capacitance.

### 5.2 Capacitors in Parallel

```
    a ─────────────────── b
      |     |     |     |
     C₁    C₂    C₃    V (battery)
      |     |     |     |
      q₁    q₂    q₃   
    ─────────────────────
         V = V_{ab}
```

**Key Property:**
- Same voltage $V$ across each capacitor
- Charges add: $q = q_1 + q_2 + q_3$

Since $q_1 = C_1 V$, $q_2 = C_2 V$, $q_3 = C_3 V$:

$$q = (C_1 + C_2 + C_3)V$$

Equivalent capacitance:

$$\boxed{C_{eq} = C_1 + C_2 + C_3 = \sum_{j=1}^{m} C_j}$$

> **Note:** $C_{eq} > C_{max}$ — parallel combination gives **larger** capacitance.

### 5.3 Quick Comparison

| Property | Series | Parallel |
|:---------|:------:|:--------:|
| Charge | Same ($Q$) | Different |
| Voltage | Different | Same ($V$) |
| $C_{eq}$ formula | $\frac{1}{C_{eq}} = \sum\frac{1}{C_i}$ | $C_{eq} = \sum C_i$ |
| Result | $C_{eq} < $ smallest | $C_{eq} > $ largest |

---

## 6. Energy Stored in a Capacitor

### 6.1 Derivation

Suppose charge $q'$ has been transferred. The potential difference is:

$$V' = \frac{q'}{C}$$

To transfer additional charge $dq'$, work done:

$$dW = V' \, dq' = \frac{q'}{C} \, dq'$$

Total work to charge capacitor from 0 to final charge $Q$:

$$W = \int_0^Q \frac{q'}{C} \, dq' = \frac{1}{C} \cdot \frac{Q^2}{2} = \frac{Q^2}{2C}$$

This work is stored as potential energy $U$:

$$U = \frac{Q^2}{2C}$$

Since $Q = CV$:

$$\boxed{U = \frac{Q^2}{2C} = \frac{1}{2}CV^2 = \frac{1}{2}QV}$$

### 6.2 Energy Density

The energy stored per unit volume between the plates:

$$u = \frac{U}{\text{Volume}} = \frac{\frac{1}{2}CV^2}{Ad} = \frac{\frac{1}{2}\cdot\frac{\varepsilon_0 A}{d}\cdot(Ed)^2}{Ad}$$

$$\boxed{u = \frac{1}{2}\varepsilon_0 E^2}$$

This result holds universally — energy is stored in the **electric field** anywhere in space.

---

## 7. Worked Example (From Class Notes)

**Problem:** A storage capacitor on a random access memory (RAM) chip has a capacitance of $C = 0.055$ pF and is charged to $V = 5.3$ V. How many excess electrons are there on the negative plate?

**Solution:**

$$Q = CV = (0.055 \times 10^{-12})(5.3) = 2.915 \times 10^{-13} \text{ C}$$

Number of electrons:

$$n = \frac{Q}{e} = \frac{2.915 \times 10^{-13}}{1.602 \times 10^{-19}} \approx 1.82 \times 10^6 \text{ electrons}$$

---

## 8. Summary of Formulas

$$C = \frac{q}{V} \qquad C_{\text{parallel-plate}} = \frac{\varepsilon_0 A}{d} \qquad C_{\text{sphere}} = 4\pi\varepsilon_0\frac{ab}{b-a}$$

$$\text{Series: } \frac{1}{C_{eq}} = \sum\frac{1}{C_i} \qquad \text{Parallel: } C_{eq} = \sum C_i$$

$$U = \frac{1}{2}CV^2 = \frac{Q^2}{2C} \qquad u = \frac{1}{2}\varepsilon_0 E^2$$

---

## 9. Practice Problems

1. A parallel-plate capacitor has plates of area $0.04$ m² separated by $1.0$ mm. Find $C$ and the charge when connected to 100 V.

2. Three capacitors $C_1 = 2 \, \mu\text{F}$, $C_2 = 4 \, \mu\text{F}$, $C_3 = 6 \, \mu\text{F}$ are connected in series. Find $C_{eq}$ and the charge on each.

3. The same capacitors are connected in parallel. Find $C_{eq}$ and the charge on each when $V = 12$ V.

4. A capacitor stores $50 \, \mu\text{J}$ of energy when charged to 100 V. Find its capacitance.

5. Find the capacitance of a spherical capacitor with inner radius 5 cm and outer radius 8 cm.

---

## 10. References

- Halliday, Resnick & Walker — *Fundamentals of Physics*, 10th Ed., Chapter 25
- Young & Freedman — *University Physics*, 14th Ed., Chapter 24
- HyperPhysics — [Capacitance](http://hyperphysics.phy-astr.gsu.edu/hbase/electric/pplate.html)
- Khan Academy — [Capacitors](https://www.khanacademy.org/science/ap-physics-2/ap-circuits-topic/capacitors-and-capacitance-ap/a/what-is-a-capacitor)
- PhET Simulation — [Capacitor Lab](https://phet.colorado.edu/en/simulations/capacitor-lab-basics)
- LibreTexts — [Capacitance](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/08:_Capacitance)
