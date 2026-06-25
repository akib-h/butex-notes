---
subject: PHY-103
topic: Application of Kirchhoff's Laws to Wheatstone Bridge
date: 2026-06-23
tags: [physics, electricity, wheatstone-bridge, kirchhoff, resistance-measurement]
---

# Application of Kirchhoff's Laws to Wheatstone Bridge

## 1. Introduction

The Wheatstone bridge is a precision electrical circuit devised by Samuel Hunter Christie in 1833 and later popularised by Sir Charles Wheatstone in 1843. It provides one of the most accurate methods available for measuring an unknown electrical resistance by balancing two legs of a bridge circuit until the detector (galvanometer) reads zero. The balance condition is derived rigorously from Kirchhoff's Current and Voltage Laws, making this topic the natural capstone application after studying KCL and KVL.

## 2. Circuit Description

The Wheatstone bridge consists of four resistors — $P$, $Q$, $R$, and $S$ — arranged in a diamond (rhombus) formation. A galvanometer $G$ connects the two midpoints of the diamond; a battery (EMF $\varepsilon$, internal resistance $r$) drives the circuit across the outer diagonal.

```
              A
             /|\
            / | \
           P  |  R
          /   |   \
         /    |    \
        B─────G─────D
         \    |    /
           Q  |  S
            \ | /
             \|/
              C
           [ε, r]

  Arms: P (A→B),  Q (B→C),  R (A→D),  S (D→C)
  Galvanometer: B ─ G ─ D
  Battery:      A (positive) to C (negative)
```

**Branch currents (general, unbalanced case):**

| Branch | Resistor | Current |
|:-------|:---------|:--------|
| A→B | $P$ | $I_1$ |
| B→C | $Q$ | $I_2$ |
| A→D | $R$ | $I_3$ |
| D→C | $S$ | $I_4$ |
| B→D | $G$ | $I_g$ |

## 3. Derivation of the Balance Condition Using Kirchhoff's Laws

At balance the galvanometer deflects to zero, meaning no current flows through it:

$$I_g = 0$$

**KCL at node B:**

$$I_1 = I_2 + I_g = I_2 \quad (\text{since } I_g = 0) \tag{1}$$

**KCL at node D:**

$$I_3 = I_4 + I_g = I_4 \quad (\text{since } I_g = 0) \tag{2}$$

So at balance, the same current $I_1$ flows through $P$ and $Q$, and the same current $I_3$ flows through $R$ and $S$.

**KVL around loop ABD (left–top loop, clockwise):**

$$I_1 P - I_g G - I_3 R = 0$$

Since $I_g = 0$:

$$I_1 P = I_3 R \tag{3}$$

**KVL around loop BCD (right–bottom loop, clockwise):**

$$I_2 Q - I_4 S + I_g G = 0$$

Since $I_g = 0$ and $I_2 = I_1$, $I_4 = I_3$:

$$I_1 Q = I_3 S \tag{4}$$

**Dividing (3) by (4):**

$$\frac{I_1 P}{I_1 Q} = \frac{I_3 R}{I_3 S}$$

$$\boxed{\frac{P}{Q} = \frac{R}{S}} \qquad \text{(Balance condition)}$$

Equivalently: $P \cdot S = Q \cdot R$.

> **Notation note:** Some texts (e.g., HRW) label the unknown arm $X$ and the standard arm $S$, writing $P/Q = X/S$, so that $X = S(P/Q)$. Other sources (notably Serway) place the unknown in the arm opposite the standard and invert the ratio. The physics is identical; only labelling differs. Here we follow the convention common in South Asian undergraduate courses: $P$, $Q$ are the ratio arms, $R$ is the standard (known), and $S$ is the unknown.

**Finding the unknown $S$:**

$$S = \frac{Q \cdot R}{P} \tag{5}$$

The ratio $P/Q$ is selected to be a known, convenient value (e.g., 1 : 1, 1 : 10, 10 : 1), $R$ is varied until the galvanometer reads zero, and $S$ follows from equation (5).

## 4. Sensitivity of the Wheatstone Bridge

The sensitivity is highest when all four arms are of comparable magnitude ($P \approx Q \approx R \approx S$). Extreme ratios reduce sensitivity because the current through the galvanometer per unit change in $S$ decreases. The galvanometer sensitivity (current per unit deflection) and the source voltage also affect the precision of the null measurement.

## 5. Unbalanced Bridge — Finding Galvanometer Current

When the bridge is slightly off balance, the Thevenin equivalent seen by the galvanometer can be found:

- **Thevenin voltage** across B–D (galvanometer open):

$$V_{\text{th}} = \varepsilon \left(\frac{P}{P + Q} - \frac{R}{R + S}\right) \tag{6}$$

- **Thevenin resistance** (battery replaced by internal resistance $r$):

$$R_{\text{th}} = \frac{PQ}{P + Q} + \frac{RS}{R + S} \tag{7}$$

- **Galvanometer current:**

$$I_g = \frac{V_{\text{th}}}{R_{\text{th}} + G} \tag{8}$$

## 6. Worked Example 1 — Verifying Balance (Simple)

**Problem:** In a Wheatstone bridge, $P = 10\,\Omega$, $Q = 5\,\Omega$, $R = 8\,\Omega$, $S = 4\,\Omega$. Is the bridge balanced?

**Solution:**

$$\frac{P}{Q} = \frac{10}{5} = 2, \qquad \frac{R}{S} = \frac{8}{4} = 2$$

Since $P/Q = R/S$, the bridge **is balanced** and $I_g = 0$.

## 7. Worked Example 2 — Finding Unknown Resistance (Intermediate)

**Problem:** In a balanced Wheatstone bridge, the ratio arm $P/Q = 100\,\Omega / 10\,\Omega$. The standard resistance $R$ is adjusted to $47.3\,\Omega$ to produce null deflection. Find the unknown resistance $S$ and state the accuracy class of the measurement.

**Solution:**

$$\frac{P}{Q} = \frac{100}{10} = 10$$

From the balance condition:

$$S = R \cdot \frac{Q}{P} = 47.3 \times \frac{10}{100} = 47.3 \times 0.1 = \boxed{4.73\,\Omega}$$

Since the null method does not depend on the galvanometer calibration or the exact EMF of the source, the result is limited only by the accuracy of the standard resistor $R$ — typically $\pm 0.01\%$ in a laboratory bridge, far better than any deflection method.

## 8. Worked Example 3 — Unbalanced Bridge with Galvanometer Current (Advanced)

**Problem:** A Wheatstone bridge has $P = 10\,\Omega$, $Q = 10\,\Omega$, $R = 10\,\Omega$, $S = 11\,\Omega$ (slightly off balance). The battery EMF is $\varepsilon = 2\,\text{V}$ (internal resistance $r = 0$) and the galvanometer resistance is $G = 20\,\Omega$. Find the galvanometer current $I_g$.

**Solution:**

*Step 1 — Thevenin voltage across B–D (eq. 6):*

$$V_{\text{th}} = 2\left(\frac{10}{10 + 10} - \frac{10}{10 + 11}\right) = 2\left(0.5 - \frac{10}{21}\right) = 2\left(\frac{21 - 20}{42}\right) = \frac{2}{42} = \frac{1}{21}\,\text{V}$$

*Step 2 — Thevenin resistance (eq. 7):*

$$R_{\text{th}} = \frac{10 \times 10}{10 + 10} + \frac{10 \times 11}{10 + 11} = 5 + \frac{110}{21} = 5 + 5.238 = 10.238\,\Omega$$

*Step 3 — Galvanometer current (eq. 8):*

$$I_g = \frac{V_{\text{th}}}{R_{\text{th}} + G} = \frac{1/21}{10.238 + 20} = \frac{0.04762}{30.238} \approx \boxed{1.575\,\text{mA}}$$

This small current confirms that even a 10 % imbalance produces only a milliamp-scale deflection when the bridge elements are in the tens-of-ohms range.

## 9. Balanced vs Unbalanced Bridge

| Feature | Balanced Bridge | Unbalanced Bridge |
|:--------|:----------------|:-----------------|
| Galvanometer current | $I_g = 0$ | $I_g \neq 0$ |
| Condition | $P/Q = R/S$ | $P/Q \neq R/S$ |
| Analysis method | KCL + KVL directly | Thevenin equivalent |
| Practical use | Precise resistance measurement | Transducer output (e.g., strain gauge) |
| Sensitivity to $\varepsilon$ | None (null method) | $I_g$ proportional to $\varepsilon$ |

## 10. Applications

- **Laboratory resistance measurement:** Standard bridge (Kelvin bridge for low-resistance variants).
- **Strain gauges:** One arm is a strain-sensitive resistor; imbalance current is proportional to mechanical strain.
- **Temperature sensors (thermistor / RTD bridges):** Resistance change with temperature produces a bridge imbalance read as a voltage.
- **Pressure and load cells:** Same principle; the bridge imbalance encodes the physical quantity.

## 11. Practice Problems

1. In a Wheatstone bridge, $P = 50\,\Omega$, $Q = 25\,\Omega$, and balance is achieved when $R = 60\,\Omega$. Find the unknown resistance $S$.

2. A bridge has $P = Q = 100\,\Omega$, $R = 500\,\Omega$, and $S = 502\,\Omega$. The supply is $\varepsilon = 5\,\text{V}$ (negligible internal resistance) and $G = 50\,\Omega$. Calculate the galvanometer current.

3. Show that if all four arms of a balanced bridge are increased by the same factor $k$, the bridge remains balanced but the sensitivity changes. How does $I_g$ per unit change in $S$ scale with $k$?

4. A Wheatstone bridge is used to measure the resistance of a copper coil at two temperatures. At $20\,°\text{C}$, balance is at $S_1 = 25.0\,\Omega$; at $80\,°\text{C}$, balance is at $S_2 = 29.8\,\Omega$ (ratio arm fixed at $P/Q = 10$, $R$ adjusted). Find the temperature coefficient of resistance of the coil.

5. Derive equation (6) for the Thevenin voltage across B–D from first principles using KVL, without using the superposition theorem.

## 12. References

1. Halliday, D., Resnick, R., & Walker, J. *Fundamentals of Physics*, 10th ed. Wiley, 2014 — Chapter 27, §27-6 (Networks and Meters).
2. Serway, R. A., & Jewett, J. W. *Physics for Scientists and Engineers*, 9th ed. Cengage, 2014 — Chapter 28, §28-4 (RC Circuits and Measuring Instruments); bridge discussed as worked example.
3. Young, H. D., & Freedman, R. A. *University Physics*, 14th ed. Pearson, 2016 — Chapter 26, §26-3 (Kirchhoff's Rules); Wheatstone bridge example.
4. HyperPhysics — Wheatstone Bridge: <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/wheat.html>
5. MIT OpenCourseWare 8.02 — Problem Set 7, Wheatstone Bridge problems: <https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/>
6. Khan Academy — Wheatstone Bridge: <https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-dc-circuit-analysis/a/ee-wheatstone-bridge>
7. NIST Reference on Resistance Measurement Techniques: <https://www.nist.gov/calibrations/resistance>
