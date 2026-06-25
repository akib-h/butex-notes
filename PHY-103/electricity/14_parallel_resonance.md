---
subject: PHY-103
topic: Resonance in Parallel Circuit
date: 2026-06-23
tags: [physics, electricity, parallel-resonance, impedance, rejector-circuit, bandwidth]
---

# Resonance in Parallel Circuit

## 1. Introduction

A parallel resonant circuit consists of an inductor and a capacitor connected in parallel, typically with resistance either distributed within the inductor coil or placed in parallel across the combination. Unlike the series resonant circuit — which draws *maximum* current at resonance — the parallel resonant circuit presents *maximum impedance* at resonance and draws *minimum* current from the source. This "current rejection" behaviour makes the parallel resonant circuit the foundation of bandstop (notch) filters, tank circuits in oscillators, and IF stages in radio receivers, where it is called a **rejector circuit** or **tank circuit**.

## 2. Ideal Parallel LC Circuit

Consider a pure (lossless) inductor $L$ in parallel with a pure capacitor $C$, driven by an AC source of rms voltage $V$.

**Circuit:**
```
        ┌────[L]────┐
        │           │
[V, ω] ─┤           ├─ (load)
        │           │
        └────[C]────┘
             IL↓  IC↑
```

Branch currents:

$$I_L = \frac{V}{X_L} = \frac{V}{\omega L} \quad (\text{lags } V \text{ by } 90°)$$

$$I_C = \frac{V}{X_C} = V\omega C \quad (\text{leads } V \text{ by } 90°)$$

The total supply current is the phasor sum:

$$I = I_C - I_L = V\!\left(\omega C - \frac{1}{\omega L}\right) \tag{1}$$

**Resonance condition** (total current = 0):

$$\omega_0 C = \frac{1}{\omega_0 L} \implies \boxed{\omega_0 = \frac{1}{\sqrt{LC}},\qquad f_0 = \frac{1}{2\pi\sqrt{LC}}} \tag{2}$$

At resonance $I = 0$ theoretically — the inductor and capacitor exchange energy back and forth with no net demand from the source. The impedance is theoretically **infinite**. In practice, coil resistance limits the impedance to a large but finite value.

## 3. Practical Parallel Circuit — Coil with Series Resistance

The real-world case replaces the ideal inductor with a coil having inductance $L$ and series resistance $r$ (coil resistance). The capacitor is assumed ideal.

**Circuit:**
```
        ┌────[r]─[L]────┐
        │               │
[V, ω] ─┤               ├─
        │               │
        └──────[C]──────┘
```

**Admittances** of each branch:

$$Y_L = \frac{1}{r + j\omega L} = \frac{r - j\omega L}{r^2 + \omega^2 L^2} = \frac{r}{r^2 + \omega^2 L^2} - j\frac{\omega L}{r^2 + \omega^2 L^2}$$

$$Y_C = j\omega C$$

**Total admittance:**

$$Y = Y_L + Y_C = \underbrace{\frac{r}{r^2 + \omega^2 L^2}}_{G} + j\underbrace{\left(\omega C - \frac{\omega L}{r^2 + \omega^2 L^2}\right)}_{B} \tag{3}$$

## 4. Resonance Condition for Practical Parallel Circuit

At resonance the imaginary part of $Y$ vanishes ($B = 0$):

$$\omega_0 C = \frac{\omega_0 L}{r^2 + \omega_0^2 L^2}$$

$$\omega_0^2(r^2 + \omega_0^2 L^2)C = \omega_0 L \cdot \omega_0 \quad \implies \quad \omega_0^2\left(1 - \frac{r^2 C}{L}\right) = \frac{1}{LC}$$

$$\boxed{\omega_0 = \sqrt{\frac{1}{LC} - \frac{r^2}{L^2}} = \frac{1}{\sqrt{LC}}\sqrt{1 - \frac{r^2 C}{L}}} \tag{4}$$

For a high-$Q$ coil ($r \ll \omega_0 L$, i.e., $r^2C/L \ll 1$):

$$\omega_0 \approx \frac{1}{\sqrt{LC}} \tag{5}$$

This is the same as the ideal case and the series resonant frequency for the same $L$, $C$.

## 5. Dynamic Impedance at Resonance

At resonance $B = 0$, so $Y = G = r/(r^2 + \omega_0^2 L^2)$. For $Q \gg 1$, $r^2 \ll \omega_0^2 L^2$:

$$Y_0 \approx \frac{r}{\omega_0^2 L^2}$$

$$\boxed{Z_0 = \frac{1}{Y_0} \approx \frac{\omega_0^2 L^2}{r} = \frac{L}{Cr}} \tag{6}$$

This quantity $Z_0 = L/(Cr)$ is called the **dynamic impedance** or **dynamic resistance** of the parallel resonant circuit. It is purely resistive and is the *maximum* impedance the circuit presents to the source.

**In terms of Q factor:**

$$Z_0 = \frac{L}{Cr} = \frac{\omega_0 L}{r} \cdot \frac{L}{\omega_0 C L} = Q \cdot \omega_0 L = Q^2 r \tag{7}$$

> **Notation note:** For parallel resonance, the Q factor is sometimes defined as $Q = R_p/(\omega_0 L)$ (where $R_p$ is an equivalent parallel resistance), which equals $\omega_0 C R_p$. When the resistance is the *series* coil resistance $r$, $Q = \omega_0 L / r$ — the same definition as in series resonance. Serway and HRW both use $Q = \omega_0 L/r$ for the coil. Young & Freedman reserves a separate discussion for parallel circuits. All sources agree that $Z_0 = Q^2 r$ for high-$Q$ practical parallel circuits.

## 6. Current at Resonance

Current drawn from the source at resonance:

$$I_0 = \frac{V}{Z_0} = \frac{V \cdot Cr}{L} \tag{8}$$

This is the **minimum** supply current — far less than either branch current $I_L$ or $I_C$, which are approximately equal and opposite (circulating current).

**Circulating current** inside the tank:

$$I_{\text{circ}} \approx I_C = V\omega_0 C = \frac{V}{X_{C_0}} \approx Q \cdot I_0 \tag{9}$$

The tank circuit can sustain a circulating current $Q$ times the supply current — current magnification, analogous to voltage magnification in series resonance.

## 7. Quality Factor and Bandwidth

For the practical parallel circuit:

$$\boxed{Q = \frac{\omega_0 L}{r} = \frac{1}{\omega_0 C r}} \tag{10}$$

Half-power bandwidth (same formula as series):

$$\Delta\omega = \frac{\omega_0}{Q}, \qquad \Delta f = \frac{f_0}{Q} \tag{11}$$

But the meaning is inverted: the half-power points for a parallel circuit are where the **impedance** falls to $Z_0/\sqrt{2}$ (current rises to $\sqrt{2}\,I_0$).

```
  Z
  │
Z₀┤─────────────●─────────────
   │            ╱│╲
Z₀/√2 ──────  ╱  │  ╲  ───────
   │         ╱   │   ╲
   │─────────┬───┼───┬─────── f
            f₁  f₀  f₂
             └─ Δf ─┘
```

## 8. Worked Example 1 — Resonant Frequency and Dynamic Impedance (Simple)

**Problem:** A parallel resonant circuit has $L = 100\,\text{mH}$, $C = 0.1\,\mu\text{F}$, and the coil resistance $r = 5\,\Omega$. Find (a) the resonant frequency $f_0$, (b) the Q factor, (c) the dynamic impedance $Z_0$.

**Solution:**

**(a)** (Using the high-$Q$ approximation, verified in step (b)):

$$f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{0.1 \times 0.1\times10^{-6}}} = \frac{1}{2\pi\sqrt{10^{-8}}} = \frac{1}{2\pi \times 10^{-4}} \approx \boxed{1591.5\,\text{Hz}}$$

**(b)**

$$\omega_0 = 2\pi f_0 \approx 10000\,\text{rad s}^{-1}$$

$$Q = \frac{\omega_0 L}{r} = \frac{10000 \times 0.1}{5} = \frac{1000}{5} = \boxed{200}$$

Since $Q = 200 \gg 1$, the high-$Q$ approximation is valid ($r^2C/L = 25 \times 10^{-6}/0.1 = 2.5\times10^{-4} \ll 1$).

**(c)**

$$Z_0 = \frac{L}{Cr} = \frac{0.1}{0.1\times10^{-6}\times5} = \frac{0.1}{5\times10^{-7}} = \boxed{200\,\text{k}\Omega}$$

Check: $Z_0 = Q^2 r = 200^2 \times 5 = 200\,\text{k}\Omega\;\checkmark$

## 9. Worked Example 2 — Supply Current and Circulating Current (Intermediate)

**Problem:** The circuit from Example 1 is connected to a $10\,\text{V}$ (rms) AC source at the resonant frequency. Find (a) the supply current $I_0$, (b) the circulating current in the tank, (c) the bandwidth.

**Solution:**

**(a)** $I_0 = V/Z_0 = 10/(200\times10^3) = \boxed{50\,\mu\text{A}}$

**(b)** Circulating current:

$$I_{\text{circ}} \approx Q \cdot I_0 = 200 \times 50\times10^{-6} = \boxed{10\,\text{mA}}$$

Alternatively: $I_C = V\omega_0 C = 10 \times 10000 \times 10^{-7} = 10\,\text{mA}\;\checkmark$

**(c)**

$$\Delta f = \frac{f_0}{Q} = \frac{1591.5}{200} \approx \boxed{7.96\,\text{Hz}}$$

This extremely narrow bandwidth (less than 8 Hz around 1591 Hz) shows why high-$Q$ parallel circuits are excellent frequency-selective filters.

## 10. Worked Example 3 — Designing a Parallel Tank for a Given Frequency and Bandwidth (Advanced)

**Problem:** Design a parallel tank circuit to resonate at $f_0 = 455\,\text{kHz}$ (standard AM intermediate frequency) with a bandwidth of $\Delta f = 10\,\text{kHz}$. The coil resistance is $r = 20\,\Omega$. Find $L$, $C$, $Q$, and $Z_0$.

**Solution:**

**(a) Q factor required:**

$$Q = \frac{f_0}{\Delta f} = \frac{455}{10} = \boxed{45.5}$$

**(b) Inductance:**

$$\omega_0 = 2\pi \times 455\times10^3 \approx 2.859\times10^6\,\text{rad s}^{-1}$$

$$L = \frac{Qr}{\omega_0} = \frac{45.5 \times 20}{2.859\times10^6} = \frac{910}{2.859\times10^6} \approx \boxed{318.3\,\mu\text{H}}$$

**(c) Capacitance:**

$$C = \frac{1}{\omega_0^2 L} = \frac{1}{(2.859\times10^6)^2 \times 318.3\times10^{-6}} = \frac{1}{8.171\times10^{12} \times 3.183\times10^{-4}} \approx \boxed{384\,\text{pF}}$$

**(d) Dynamic impedance:**

$$Z_0 = Q^2 r = (45.5)^2 \times 20 = 2070.25 \times 20 \approx \boxed{41.4\,\text{k}\Omega}$$

This is a realistic AM IF transformer specification — circuits very close to these values are found in analogue AM radio receivers.

## 11. Series vs Parallel Resonance

| Feature | Series Resonance | Parallel Resonance |
|:--------|:----------------|:-------------------|
| Circuit element arrangement | R, L, C in series | L (with $r$), C in parallel |
| Impedance at resonance | Minimum ($Z = R$) | Maximum ($Z_0 = L/Cr = Q^2 r$) |
| Current at resonance | Maximum ($I = V/R$) | Minimum ($I_0 = V/Z_0$) |
| Power factor at resonance | Unity ($\cos\phi = 1$) | Unity ($\cos\phi = 1$) |
| Resonant frequency | $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$ | $f_0 \approx \dfrac{1}{2\pi\sqrt{LC}}$ (high $Q$) |
| Quality factor | $Q = \dfrac{\omega_0 L}{R}$ | $Q = \dfrac{\omega_0 L}{r}$ |
| Magnification | Voltage: $V_L = V_C = QV$ | Current: $I_{\text{circ}} = QI_0$ |
| Bandwidth | $\Delta f = f_0/Q$ | $\Delta f = f_0/Q$ |
| Common name | Acceptor circuit | Rejector / Tank circuit |
| Primary application | Tuning in (selects one frequency) | Filtering out (blocks one frequency) |
| Energy at resonance | Exchanged between L and C in series loop | Circulates between L and C in tank |

## 12. Practice Problems

1. A parallel circuit has $L = 50\,\text{mH}$, $C = 2\,\mu\text{F}$, $r = 10\,\Omega$. Find the resonant frequency, Q factor, and dynamic impedance.

2. For the circuit in Problem 1, a 5 V (rms) source operates at resonance. Find the supply current, circulating current, and half-power bandwidth.

3. A parallel tank circuit must reject signals at 10.7 MHz (FM IF frequency) with a bandwidth of 200 kHz. If $r = 5\,\Omega$, find the required $L$, $C$, and $Z_0$.

4. Two parallel resonant circuits have the same $L$ and $C$ but circuit A has $r_A = 5\,\Omega$ and circuit B has $r_B = 20\,\Omega$. Compare their $Q$ factors, dynamic impedances, and bandwidths.

5. Show that the circulating current in a parallel tank at resonance is $Q$ times the supply current. Hence explain why the components in a parallel resonant circuit must be rated for currents much larger than the supply current.

## 13. References

1. Halliday, D., Resnick, R., & Walker, J. *Fundamentals of Physics*, 10th ed. Wiley, 2014 — Chapter 31 (Electromagnetic Oscillations and Alternating Current), §31-9 (Damped Oscillations in an RLC Circuit); parallel tank discussed in context of LC oscillations.
2. Serway, R. A., & Jewett, J. W. *Physics for Scientists and Engineers*, 9th ed. Cengage, 2014 — Chapter 33 (Alternating-Current Circuits), §33-9 (Resonance in a Series RLC Circuit); parallel resonance derived from admittance analysis in Problems section.
3. Young, H. D., & Freedman, R. A. *University Physics*, 14th ed. Pearson, 2016 — Chapter 31 (Alternating Current), §31-5 (Power in AC Circuits) and §31-6 (Resonance and Power in AC Circuits).
4. HyperPhysics — Parallel RLC Resonance: <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/parres.html>
5. MIT OpenCourseWare 8.02 — Lecture 20: Driven RLC Circuits and Parallel Resonance: <https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/>
6. Khan Academy — Parallel RLC Circuits: <https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-ac-analysis/v/ee-impedance>
7. HyperPhysics — Tank Circuit: <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/tank.html>
