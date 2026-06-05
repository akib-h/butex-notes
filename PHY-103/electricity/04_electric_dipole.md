---
subject: PHY-103
topic: A Dipole in an Electric Field
date: 2026-06-03
tags: [physics, electricity, dipole, electric-field, torque, potential-energy]
---

# A Dipole in an Electric Field

## 1. What is an Electric Dipole?

An **electric dipole** consists of two equal and opposite charges $+q$ and $-q$ separated by a small distance $2a$ (or $d$).

```
     +q ●────────────────● -q
         ←──── 2a ────→
         
    Dipole vector p⃗ points from -q to +q
```

> **Definition:** Two equal and opposite charges separated by a small distance form an **electric dipole**.

### 1.1 Dipole Moment

The **electric dipole moment** $\vec{p}$ is defined as:

$$\boxed{\vec{p} = q\vec{d}}$$

where $\vec{d}$ points **from the negative charge to the positive charge**.

- Magnitude: $p = qd = q(2a)$
- SI Unit: **C·m**
- Direction: from $-q$ to $+q$ (by convention)

```
    Direction of p⃗:
    
    (-q) ●────→────● (+q)
              p⃗
    negative → positive
```

---

## 2. Electric Field due to an Electric Dipole

### 2.1 Setup

```
     +q ●
      a  \  θ     √(a²+r²)
          \
    ───────●──────────── P
    -q ●    r             (field point, r >> a)
```

At a point $P$ along the perpendicular bisector (equatorial axis), at distance $r$ from center:

**Field from $+q$:** $E_1 = \dfrac{1}{4\pi\varepsilon_0}\cdot\dfrac{q}{a^2+r^2}$ (directed away from $+q$)

**Field from $-q$:** $E_2 = \dfrac{1}{4\pi\varepsilon_0}\cdot\dfrac{q}{a^2+r^2}$ (directed toward $-q$)

Since $E_1 = E_2$:

$$E = 2E_1\cos\theta$$

where $\cos\theta = \dfrac{a}{\sqrt{a^2+r^2}}$

Therefore:

$$E = \frac{2}{4\pi\varepsilon_0}\cdot\frac{q}{a^2+r^2}\cdot\frac{a}{\sqrt{a^2+r^2}} = \frac{1}{4\pi\varepsilon_0}\cdot\frac{2qa}{(a^2+r^2)^{3/2}}$$

**For $r >> a$** (dipole approximation):

$$\boxed{E \approx \frac{1}{4\pi\varepsilon_0}\cdot\frac{p}{r^3}}$$

where $p = 2qa$ is the dipole moment.

> **Compare:** Point charge $E \propto 1/r^2$; Dipole $E \propto 1/r^3$. The dipole field falls off faster!

---

## 3. A Dipole in a Uniform External Electric Field

### 3.1 Setup

When an electric dipole is placed in a uniform external field $\vec{E}$:

```
     →  →  →  →
     →  →  →  →
              +qF⃗  (force upward)
     → →    / 
           / 2a
     → →  /  θ (angle between p⃗ and E⃗)
     → →  \
           \ 
     →  →  -qF⃗  (force downward)
     → →  -F⃗
     
     Equal & opposite forces → torque (couple)
     Net force = 0 (uniform field)
```

The forces on the charges:
- On $+q$: $\vec{F} = +q\vec{E}$ (in direction of $\vec{E}$)
- On $-q$: $\vec{F} = -q\vec{E}$ (opposite to $\vec{E}$)

Since $F = qE$ and $-F = -qE$:
- **Net force = 0** (no translational motion in uniform field)
- **Net torque ≠ 0** (rotational effect)

### 3.2 Torque on the Dipole

The torque of a couple (two equal and opposite forces separated by perpendicular distance):

$$\tau = F \times \text{(perpendicular distance)} = qE \times 2a\sin\theta$$

$$\boxed{\tau = pE\sin\theta}$$

In vector form:

$$\boxed{\vec{\tau} = \vec{p} \times \vec{E}}$$

**Interpretation:**
- $\theta = 0°$: $\tau = 0$ — dipole aligned with field (stable equilibrium)
- $\theta = 90°$: $\tau = pE$ — maximum torque
- $\theta = 180°$: $\tau = 0$ — dipole anti-aligned (unstable equilibrium)

### 3.3 The Torque Tends to Align the Dipole

```mermaid
graph LR
    A["Dipole at angle θ to E⃗"] --> B["Torque τ = pE sinθ"]
    B --> C["Torque rotates dipole"]
    C --> D["θ → 0: Dipole aligns with E⃗"]
    D --> E["Minimum potential energy state"]
```

---

## 4. Potential Energy of a Dipole in an Electric Field

### 4.1 Work Done to Rotate the Dipole

The work done to rotate the dipole from angle $\theta_0$ to angle $\theta$ against the restoring torque:

$$W = \int dW = \int_{\theta_0}^{\theta} \tau \, d\theta = \int_{\theta_0}^{\theta} pE\sin\theta \, d\theta$$

$$W = U = pE\left[-\cos\theta\right]_{\theta_0}^{\theta} = pE(\cos\theta_0 - \cos\theta)$$

Taking $\theta_0 = 90°$ as reference (where $U = 0$):

$$\boxed{U = -pE\cos\theta = -\vec{p} \cdot \vec{E}}$$

**Energy Table:**

| $\theta$ | $U$ | State |
|:--------:|:----|:------|
| $0°$ | $-pE$ (minimum) | Stable equilibrium |
| $90°$ | $0$ | Reference |
| $180°$ | $+pE$ (maximum) | Unstable equilibrium |

---

## 5. Worked Example (From Class Notes)

**Problem 1:** An electric dipole consists of two opposite charges of magnitude $q = 1.0 \times 10^{-6}$ C separated by $d = 2.0$ cm. The dipole is placed in an external field of $1.0 \times 10^5$ N/C.

**(a) What maximum torque does the field exert on the dipole?**

Dipole moment:

$$p = qd = (1.0 \times 10^{-6})(2.0 \times 10^{-2}) = 2.0 \times 10^{-8} \text{ C·m}$$

Maximum torque (at $\theta = 90°$):

$$\tau_{max} = pE\sin 90° = pE = (2.0 \times 10^{-8})(1.0 \times 10^5) = 2 \times 10^{-3} \text{ N·m}$$

$$\boxed{\tau_{max} = 2 \times 10^{-3} \text{ N·m}}$$

**(b) How much work must an external agent do to turn the dipole end for end, starting from $\theta_0 = 0°$ (aligned with field)?**

$$W = U_{180°} - U_0 = (-pE\cos 180°) - (-pE\cos 0°)$$

$$W = pE - (-pE) = 2pE = 2(2.0 \times 10^{-8})(1.0 \times 10^5)$$

$$\boxed{W = 4.0 \times 10^{-3} \text{ J}}$$

---

## 6. Dipoles in Nature and Technology

### 6.1 Water Molecule — A Permanent Dipole

The water molecule (H₂O) has a permanent dipole moment:

```
         O (δ-)
        / \
       /   \
  H (δ+)  H (δ+)
  
  p ≈ 6.2 × 10⁻³⁰ C·m
```

This explains why water is an excellent solvent and has high dielectric constant.

### 6.2 Applications

| Application | Role of Dipole |
|:------------|:---------------|
| Microwave ovens | Rotate water dipoles → heat generation |
| Capacitor dielectrics | Polar molecules align to reduce field |
| Antennas | Oscillating dipoles radiate EM waves |
| Polar molecules | Chemical bonding and solubility |

---

## 7. Dipole Radiation

A dipole that oscillates (time-varying $\vec{p}$) radiates electromagnetic energy. This is the **simplest model for an antenna**.

The radiated power:

$$P = \frac{p_0^2 \omega^4}{12\pi\varepsilon_0 c^3}$$

where $p_0$ is the amplitude and $\omega$ the angular frequency of oscillation.

---

## 8. Summary of Key Formulas

$$p = qd \qquad \vec{\tau} = \vec{p} \times \vec{E} \qquad \tau = pE\sin\theta$$

$$U = -\vec{p}\cdot\vec{E} = -pE\cos\theta$$

$$E_{\text{dipole}} \approx \frac{p}{4\pi\varepsilon_0 r^3} \quad (r \gg a)$$

$$W = \Delta U = pE(\cos\theta_1 - \cos\theta_2)$$

---

## 9. Practice Problems

1. A dipole of moment $p = 3.0 \times 10^{-29}$ C·m is in a uniform field $E = 4.0 \times 10^4$ N/C. Find the torque when: (a) $\theta = 30°$, (b) $\theta = 90°$.

2. Find the work done to rotate the above dipole from $\theta_0 = 0°$ to $\theta = 180°$.

3. A water molecule has dipole moment $p = 6.2 \times 10^{-30}$ C·m. What torque does a $5000$ N/C field exert on it when $\theta = 60°$?

4. Show that for a dipole on the axial line (at distance $r$ along the dipole axis, $r \gg a$): $E = \dfrac{1}{4\pi\varepsilon_0}\cdot\dfrac{2p}{r^3}$

---

## 10. References

- Halliday, Resnick & Walker — *Fundamentals of Physics*, 10th Ed., Chapter 22
- Young & Freedman — *University Physics*, 14th Ed., Chapter 21
- Griffiths — *Introduction to Electrodynamics*, 4th Ed., Chapter 4
- HyperPhysics — [Electric Dipole](http://hyperphysics.phy-astr.gsu.edu/hbase/electric/dipole.html)
- Khan Academy — [Electric Dipoles](https://www.khanacademy.org/science/ap-physics-2/ap-electric-force-electric-field-and-potential/electric-potential-ap/a/electric-potential-and-electric-potential-energy)
- LibreTexts — [Dipoles in Electric Fields](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/05:_Electric_Charges_and_Fields/5.07:_Electric_Dipoles)
