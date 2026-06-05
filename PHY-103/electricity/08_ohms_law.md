---
subject: PHY-103
topic: Ohm's Law
date: 2026-06-03
tags: [physics, electricity, ohms-law, resistance, current, voltage, resistivity]
---

# Ohm's Law

## 1. Introduction — Electric Current

Before Ohm's Law, we must understand **electric current** — the flow of electric charge.

### 1.1 Electric Current

$$\boxed{I = \frac{q}{t}} \qquad \text{or} \qquad \boxed{I = \frac{dq}{dt}}$$

- SI Unit: **Ampere (A)** = C/s
- Direction: **conventional** current flows from $+$ to $-$ (opposite to electron flow)

### 1.2 Current Density

Current per unit cross-sectional area:

$$J = \frac{I}{A} \qquad \text{(A/m}^2\text{)}$$

---

## 2. Ohm's Law

### 2.1 Statement

> *"The current passing through a conductor between two points is directly proportional to the voltage across the two points."*

$$I \propto V \implies \boxed{I = \frac{V}{R}}$$

Or equivalently:

$$\boxed{V = IR}$$

Where $R$ is the **resistance** of the conductor (constant for a given conductor at constant temperature).

```
     R
   ─[╲╱╱]─
  +        -
   ↑V       
   I → → →
```

### 2.2 Resistance

$$\boxed{R = \frac{V}{I}}$$

**SI Unit:** Ohm (Ω) = V/A

The **conductance** $G = 1/R$ is measured in Siemens (S).

---

## 3. Microscopic View of Ohm's Law

### 3.1 Drift Velocity

Free electrons in a metal undergo random thermal motion (~$10^6$ m/s), but when a field is applied, they acquire a small net **drift velocity** $v_d$ (~$10^{-4}$ m/s).

For a conductor of cross-section $A$, with $n$ free electrons per unit volume:

$$I = nqv_d A$$

### 3.2 Microscopic Form of Ohm's Law

$$\vec{J} = \sigma \vec{E}$$

Where $\sigma$ is the **electrical conductivity** (S/m). The resistivity is:

$$\rho = \frac{1}{\sigma}$$

This gives the microscopic statement:

$$\vec{E} = \rho \vec{J}$$

---

## 4. Resistance and Resistivity

### 4.1 Resistance of a Wire

For a uniform wire of length $L$ and cross-section $A$:

$$\boxed{R = \rho \frac{L}{A}}$$

Where $\rho$ is the **resistivity** of the material (Ω·m).

| Material | Resistivity $\rho$ (Ω·m) |
|:---------|:------------------------:|
| Silver | $1.59 \times 10^{-8}$ |
| Copper | $1.72 \times 10^{-8}$ |
| Aluminum | $2.82 \times 10^{-8}$ |
| Tungsten | $5.6 \times 10^{-8}$ |
| Nichrome | $1.0 \times 10^{-6}$ |
| Silicon | ~$640$ |
| Glass | ~$10^{12}$ |

### 4.2 Temperature Dependence

Resistance increases with temperature (for metals):

$$R(T) = R_0[1 + \alpha(T - T_0)]$$

Where $\alpha$ is the **temperature coefficient of resistance** (°C⁻¹).

For copper: $\alpha \approx 3.9 \times 10^{-3}$ °C⁻¹

---

## 5. Ohmic vs. Non-Ohmic Devices

```
   Current (I)                 Current (I)
       ↑                           ↑
       │  /                        │  ╱
       │ /  (linear)               │╱     (non-linear)
       │/                          ╰─────────────→ V
       ╰─────────────→ V
   
   Ohmic (e.g., resistor)       Non-Ohmic (e.g., diode, bulb)
   R = V/I = constant           R = V/I varies with V
```

**Ohmic devices:** Resistors, metallic conductors (at constant temperature)

**Non-ohmic devices:** Diodes, transistors, lightbulb filament, electrolytes

---

## 6. Power in Electrical Circuits

### 6.1 Power Dissipated in a Resistor

Power = Rate of energy dissipation:

$$P = IV = I(IR) = I^2 R$$

Also:

$$P = IV = \left(\frac{V}{R}\right)V = \frac{V^2}{R}$$

$$\boxed{P = IV = I^2R = \frac{V^2}{R}}$$

SI Unit: Watt (W) = J/s

### 6.2 Energy Dissipated

$$E = Pt = I^2Rt = \frac{V^2}{R}t$$

---

## 7. Resistors in Series and Parallel

### 7.1 Series Connection

```
    I →    R₁     R₂     R₃
   ─────[╲╱╱]──[╲╱╱]──[╲╱╱]─
   +V               V₁+V₂+V₃  -
```

- Same current through all: $I$
- Voltages add: $V = V_1 + V_2 + V_3 = IR_1 + IR_2 + IR_3$

$$\boxed{R_{eq} = R_1 + R_2 + R_3 + \cdots = \sum_i R_i}$$

### 7.2 Parallel Connection

```
    I →   ──[R₁]──
         │──[R₂]──│
         │──[R₃]──│
   + ────╯         ╰──── -
              V
```

- Same voltage across all: $V$
- Currents add: $I = I_1 + I_2 + I_3 = V/R_1 + V/R_2 + V/R_3$

$$\boxed{\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \cdots = \sum_i \frac{1}{R_i}}$$

For **two resistors in parallel**: $R_{eq} = \dfrac{R_1 R_2}{R_1 + R_2}$

---

## 8. EMF and Internal Resistance

A real battery has an internal resistance $r$:

```
    ┌─────────────────────────┐
    │  ε                      │
    │  ─  Internal resistance │
    │  +  r                   │
    └────────────┬────────────┘
                 │
           External R
```

Terminal voltage when current $I$ flows:

$$V_{terminal} = \mathcal{E} - Ir$$

When charging (current reversed):

$$V_{terminal} = \mathcal{E} + Ir$$

---

## 9. Worked Example

**Problem:** A circuit has a battery $\mathcal{E} = 12$ V, internal resistance $r = 1$ Ω, connected to external resistors $R_1 = 3\,\Omega$ (series) and parallel combination $R_2 = 6\,\Omega$, $R_3 = 6\,\Omega$.

**Solution:**

Parallel combination: $R_{23} = \dfrac{6 \times 6}{6+6} = 3\,\Omega$

Total resistance: $R_{total} = r + R_1 + R_{23} = 1 + 3 + 3 = 7\,\Omega$

Total current: $I = \mathcal{E}/R_{total} = 12/7 \approx 1.71$ A

Terminal voltage: $V = \mathcal{E} - Ir = 12 - (1.71)(1) = 10.29$ V

Voltage across $R_{23}$: $V_{23} = I \cdot R_{23} = 1.71 \times 3 = 5.14$ V

Current through each of $R_2, R_3$: $I_{2} = I_3 = V_{23}/R_2 = 5.14/6 \approx 0.857$ A

---

## 10. Ohm's Law — A Deeper Look

Ohm's Law is an **empirical** law, not a fundamental law like Coulomb's Law. It holds for many materials but has limitations:

- Fails at very high currents (heating changes $R$)
- Fails for semiconductors (diodes, transistors)
- Not valid for superconductors (R = 0)
- Not valid for plasma

---

## 11. Summary

$$V = IR \qquad R = \rho\frac{L}{A} \qquad P = IV = I^2R = \frac{V^2}{R}$$

$$\text{Series: } R_{eq} = \sum R_i \qquad \text{Parallel: } \frac{1}{R_{eq}} = \sum\frac{1}{R_i}$$

$$\text{Microscopic: } \vec{J} = \sigma\vec{E} = \frac{\vec{E}}{\rho}$$

---

## 12. Practice Problems

1. A resistor has $V = 15$ V and $I = 0.5$ A. Find $R$ and power dissipated.

2. A wire of copper ($\rho = 1.72 \times 10^{-8}$ Ω·m) has length 2.0 m and diameter 1.0 mm. Find its resistance.

3. Three resistors $R_1 = 10\,\Omega$, $R_2 = 20\,\Omega$, $R_3 = 30\,\Omega$ are in parallel. Find $R_{eq}$.

4. A 60 W bulb operates at 120 V. Find its resistance and current.

5. A battery of $\mathcal{E} = 9$ V, $r = 0.5\,\Omega$ is connected to $R = 8.5\,\Omega$. Find terminal voltage and current.

---

## 13. References

- Halliday, Resnick & Walker — *Fundamentals of Physics*, 10th Ed., Chapter 26–27
- Young & Freedman — *University Physics*, 14th Ed., Chapter 25–26
- HyperPhysics — [Ohm's Law](http://hyperphysics.phy-astr.gsu.edu/hbase/electric/ohmlaw.html)
- Khan Academy — [Ohm's Law](https://www.khanacademy.org/science/ap-physics-2/ap-circuits-topic/current-and-resistance/a/ohms-law-article)
- All About Circuits — [Ohm's Law](https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/voltage-current-resistance-relate/)
