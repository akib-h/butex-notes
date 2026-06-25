---
subject: PHY-103
topic: Flow of A.C. Through Inductor, Capacitor and Resistance in Series
date: 2026-06-23
tags: [physics, electricity, series-rlc, impedance, resonance, quality-factor]
---

# Flow of A.C. Through Inductor, Capacitor and Resistance in Series

## 1. Introduction

When a resistor $R$, inductor $L$, and capacitor $C$ are connected in **series** across an AC source, each element imposes its own voltage and phase relationship on the circuit. Because $v_R$, $v_L$, and $v_C$ are not in phase with each other, they cannot be added algebraically — they must be combined as **phasors**. The net opposition to AC current is called **impedance** $Z$, and the frequency at which the circuit draws maximum current — **series resonance** — occurs when the inductive and capacitive reactances cancel exactly.

## 2. Circuit and Governing Equation

**Series R-L-C circuit:**
```
  ┌──[R]──[L]──[C]──┐
  │                  │
[v=Vm sin(ωt)]       │
  │                  │
  └──────────────────┘
          i →
```

Applying KVL:

$$v = v_R + v_L + v_C = iR + L\frac{di}{dt} + \frac{q}{C} \tag{1}$$

Differentiating (with $i = dq/dt$) and noting $v = V_m\sin(\omega t)$, the steady-state current is sinusoidal at the same frequency:

$$i(t) = I_m\sin(\omega t - \phi) \tag{2}$$

where $I_m$ and $\phi$ are determined by the circuit parameters and source frequency.

## 3. Phasor Analysis

Take current $i = I_m\sin(\omega t)$ as the reference phasor. The voltages across each element are:

- $v_R = I_m R\sin(\omega t)$ — **in phase** with $i$; phasor $\vec{V}_R$ along reference axis, magnitude $I_m R$
- $v_L = I_m X_L\sin(\omega t + 90°)$ — **leads** $i$ by 90°; phasor $\vec{V}_L$ upward, magnitude $I_m X_L$
- $v_C = I_m X_C\sin(\omega t - 90°)$ — **lags** $i$ by 90°; phasor $\vec{V}_C$ downward, magnitude $I_m X_C$

**Phasor diagram (assuming $X_L > X_C$, inductive circuit):**
```
        VL
        ↑
        │  ╲ V (resultant)
        │   ╲
        │    ╲ ← Vm
        │     ╲
  ──────●──────╲────→ (reference, direction of I)
       VR      ╲ φ
        │        ╲
        │         (net reactive voltage = VL − VC)
        ↓
       VC

  V²m = V²R + (VL − VC)²
```

**Resultant (source) voltage:**

$$V_m = \sqrt{V_R^2 + (V_L - V_C)^2} = I_m\sqrt{R^2 + (X_L - X_C)^2} \tag{3}$$

## 4. Impedance

Define **impedance** $Z$ as the total opposition to AC current:

$$\boxed{Z = \sqrt{R^2 + (X_L - X_C)^2}} \quad (\Omega) \tag{4}$$

with:

$$X_L = \omega L, \qquad X_C = \frac{1}{\omega C}, \qquad X = X_L - X_C \text{ (net reactance)}$$

Peak and rms current:

$$I_m = \frac{V_m}{Z}, \qquad I_{\text{rms}} = \frac{V_{\text{rms}}}{Z} \tag{5}$$

**Phase angle** (angle by which $v$ leads $i$):

$$\boxed{\tan\phi = \frac{X_L - X_C}{R}} \tag{6}$$

| Condition | Net reactance | Phase | Circuit nature |
|:----------|:-------------|:------|:---------------|
| $X_L > X_C$ | $X > 0$ | $v$ leads $i$ ($\phi > 0$) | Inductive |
| $X_L < X_C$ | $X < 0$ | $v$ lags $i$ ($\phi < 0$) | Capacitive |
| $X_L = X_C$ | $X = 0$ | In phase ($\phi = 0$) | Purely resistive (resonance) |

**Impedance triangle:**
```
         Z (hypotenuse)
        ╱|
       ╱ |
      ╱  | X = XL − XC
     ╱ φ |
    ╱────┘
       R
  Z² = R² + X²
```

## 5. Series Resonance

Resonance occurs when $X_L = X_C$:

$$\omega_0 L = \frac{1}{\omega_0 C} \implies \omega_0^2 = \frac{1}{LC}$$

$$\boxed{\omega_0 = \frac{1}{\sqrt{LC}}\,\text{rad s}^{-1}, \qquad f_0 = \frac{1}{2\pi\sqrt{LC}}\,\text{Hz}} \tag{7}$$

**At resonance:**
- $Z = R$ (minimum impedance)
- $I = V/R$ (maximum current)
- $\phi = 0$ (unity power factor)
- $V_L = I X_L = V \cdot (X_L/R)$ — can far exceed $V$ if $X_L \gg R$
- $V_C = I X_C = V \cdot (X_C/R)$ — same magnitude as $V_L$, equal and opposite

> The voltages across $L$ and $C$ at resonance can exceed the supply voltage $V$ by a factor $Q$ (the quality factor). This **voltage magnification** is exploited in tuned radio receivers.

## 6. Quality Factor and Bandwidth

**Quality factor** of a series RLC circuit:

$$\boxed{Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 C R} = \frac{1}{R}\sqrt{\frac{L}{C}}} \tag{8}$$

$Q$ quantifies how sharply the circuit resonates:
- High $Q$: narrow resonance peak, high voltage magnification, low energy loss per cycle
- Low $Q$: broad resonance, low magnification, high energy loss

**Half-power bandwidth:**

The frequencies $\omega_1$ and $\omega_2$ at which $I = I_{\max}/\sqrt{2}$ (power = half maximum):

$$\omega_1 = \omega_0 - \frac{R}{2L}, \qquad \omega_2 = \omega_0 + \frac{R}{2L}$$

$$\boxed{\Delta\omega = \omega_2 - \omega_1 = \frac{R}{L} = \frac{\omega_0}{Q}} \tag{9}$$

$$\Delta f = \frac{f_0}{Q} = \frac{R}{2\pi L} \tag{10}$$

```
  I
  │
Im ┤───────────────●───────────────
   │              ╱│╲
Im/√2 ───────── ╱  │  ╲ ──────────
   │           ╱   │   ╲
   │          ╱    │    ╲
   │─────────┼─────┼─────┼─────── f
            f₁    f₀    f₂
             └─── Δf ───┘
                 Q = f₀/Δf
```

**Voltage magnification at resonance:**

$$V_L = V_C = Q\,V \tag{11}$$

> **Notation note:** Some references (notably Serway) define $Q$ as $\omega_0 L / R$ for *series* circuits, while the same symbol $Q$ for *parallel* circuits is $R/(\omega_0 L)$. These are different quantities. In this file, $Q$ always refers to the series definition.

## 7. Average Power

$$P = I_{\text{rms}}^2 R = \frac{V_{\text{rms}}^2 R}{Z^2} = V_{\text{rms}} I_{\text{rms}} \cos\phi \tag{12}$$

Only the resistor dissipates power; $L$ and $C$ exchange energy with the source reactive. At resonance, $\cos\phi = 1$ and $P = V^2/R$ (maximum for given $V$ and $R$).

## 8. Worked Example 1 — Impedance and Current (Simple)

**Problem:** A series RLC circuit has $R = 40\,\Omega$, $L = 0.1\,\text{H}$, $C = 50\,\mu\text{F}$. It is driven by $v = 200\sin(200\pi t)\,\text{V}$. Find (a) $X_L$, $X_C$, and $Z$; (b) peak and rms current; (c) phase angle and state the circuit nature; (d) average power.

**Solution:**

$V_m = 200\,\text{V}$, $\omega = 200\pi\,\text{rad s}^{-1}$, $f = 100\,\text{Hz}$

**(a)**

$$X_L = \omega L = 200\pi \times 0.1 = 20\pi \approx 62.83\,\Omega$$

$$X_C = \frac{1}{\omega C} = \frac{1}{200\pi \times 50\times10^{-6}} = \frac{1}{0.03142} \approx 31.83\,\Omega$$

$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{40^2 + (62.83 - 31.83)^2} = \sqrt{1600 + 961} = \sqrt{2561} \approx \boxed{50.6\,\Omega}$$

**(b)**

$$I_m = \frac{V_m}{Z} = \frac{200}{50.6} \approx \boxed{3.95\,\text{A}}, \qquad I_{\text{rms}} = \frac{I_m}{\sqrt{2}} \approx \boxed{2.80\,\text{A}}$$

**(c)**

$$\tan\phi = \frac{X_L - X_C}{R} = \frac{31.00}{40} = 0.775 \implies \phi = \tan^{-1}(0.775) \approx \boxed{37.8°}$$

$\phi > 0$: voltage leads current → circuit is **inductive**.

**(d)**

$$P = I_{\text{rms}}^2 R = (2.80)^2 \times 40 \approx \boxed{313.6\,\text{W}}$$

## 9. Worked Example 2 — Series Resonance and Voltage Magnification (Intermediate)

**Problem:** A series RLC circuit with $R = 5\,\Omega$, $L = 20\,\text{mH}$, $C = 0.5\,\mu\text{F}$ is driven by $V_{\text{rms}} = 10\,\text{V}$. Find (a) the resonant frequency $f_0$, (b) the rms current at resonance, (c) the Q factor and bandwidth, and (d) the voltage across $L$ and $C$ at resonance.

**Solution:**

**(a)**

$$f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{0.020 \times 0.5\times10^{-6}}} = \frac{1}{2\pi\sqrt{10^{-8}}} = \frac{1}{2\pi \times 10^{-4}} \approx \boxed{1591.5\,\text{Hz}}$$

**(b)**

At resonance $Z = R = 5\,\Omega$:

$$I_{\text{rms}} = \frac{V_{\text{rms}}}{R} = \frac{10}{5} = \boxed{2\,\text{A}}$$

**(c)**

$$\omega_0 = 2\pi f_0 = 2\pi \times 1591.5 \approx 10000\,\text{rad s}^{-1}$$

$$Q = \frac{\omega_0 L}{R} = \frac{10000 \times 0.020}{5} = \boxed{40}$$

$$\Delta f = \frac{f_0}{Q} = \frac{1591.5}{40} \approx \boxed{39.8\,\text{Hz}}$$

**(d)** Voltage magnification:

$$V_L = V_C = Q \cdot V_{\text{rms}} = 40 \times 10 = \boxed{400\,\text{V}}$$

These voltages are 40 times the supply voltage, illustrating why capacitors and inductors in resonant circuits must be rated well above the source voltage.

## 10. Worked Example 3 — Finding L and C for Specified Resonance and Q (Advanced)

**Problem:** Design a series RLC circuit to resonate at $f_0 = 1\,\text{MHz}$ with $Q = 100$ and $R = 10\,\Omega$. Find $L$, $C$, and the bandwidth. Also find the frequencies at which $Z = 2R$.

**Solution:**

**(a) Inductance:**

$$\omega_0 = 2\pi \times 10^6 \approx 6.283 \times 10^6\,\text{rad s}^{-1}$$

$$L = \frac{QR}{\omega_0} = \frac{100 \times 10}{6.283 \times 10^6} = \frac{1000}{6.283 \times 10^6} \approx \boxed{159.2\,\mu\text{H}}$$

**(b) Capacitance:**

$$C = \frac{1}{\omega_0^2 L} = \frac{1}{(6.283\times10^6)^2 \times 159.2\times10^{-6}} = \frac{1}{6.283\times10^{12} \times 10^{-4}} \approx \boxed{159.2\,\text{pF}}$$

**(c) Bandwidth:**

$$\Delta f = \frac{f_0}{Q} = \frac{10^6}{100} = \boxed{10\,\text{kHz}}$$

**(d) Frequencies where $Z = 2R$:** $Z = \sqrt{R^2 + X^2} = 2R \implies X^2 = 3R^2 \implies X = \pm R\sqrt{3}$

$$\omega L - \frac{1}{\omega C} = \pm R\sqrt{3}$$

This gives a quadratic in $\omega$. Since $\omega_0^2 = 1/(LC)$ and $Q = \omega_0 L/R$:

$$\omega^2 \mp \frac{\omega_0}{Q}\omega\sqrt{3} - \omega_0^2 = 0$$

$$\omega = \omega_0\sqrt{1 + \frac{3}{4Q^2}} \pm \frac{\omega_0\sqrt{3}}{2Q}$$

For $Q = 100$, the correction term $3/(4Q^2) \approx 7.5\times10^{-5}$ is negligible:

$$f \approx 10^6 \pm \frac{\sqrt{3} \times 10^6}{2 \times 100} \approx 10^6 \pm 8660\,\text{Hz}$$

$$f_+ \approx \boxed{1.00866\,\text{MHz}}, \qquad f_- \approx \boxed{0.99134\,\text{MHz}}$$

## 11. Practice Problems

1. A series circuit with $R = 30\,\Omega$, $L = 0.5\,\text{H}$, $C = 200\,\mu\text{F}$ is connected to $v = 100\sin(100t)\,\text{V}$. Find $X_L$, $X_C$, $Z$, $I_m$, and $\phi$.

2. Find the resonant frequency for an RLC circuit with $L = 10\,\text{mH}$ and $C = 10\,\mu\text{F}$.

3. At what frequency does a series RLC circuit with $R = 50\,\Omega$, $L = 0.2\,\text{H}$, $C = 25\,\mu\text{F}$ have unity power factor? Find the current at this frequency if $V_{\text{rms}} = 230\,\text{V}$.

4. A series RLC circuit with $Q = 50$ resonates at 500 Hz. If $C = 0.1\,\mu\text{F}$, find $R$, $L$, and the bandwidth.

5. The voltage across the capacitor in a series RLC circuit at resonance is 80 V when the source is 4 V rms. What is the Q factor? If $L = 1\,\text{mH}$ and $C = 1\,\text{nF}$, what is $R$?

## 12. References

1. Halliday, D., Resnick, R., & Walker, J. *Fundamentals of Physics*, 10th ed. Wiley, 2014 — Chapter 31 (Electromagnetic Oscillations and Alternating Current), §31-5 to §31-8.
2. Serway, R. A., & Jewett, J. W. *Physics for Scientists and Engineers*, 9th ed. Cengage, 2014 — Chapter 33 (Alternating-Current Circuits), §33-5 (The RLC Series Circuit) and §33-6 (Power in AC Circuits).
3. Young, H. D., & Freedman, R. A. *University Physics*, 14th ed. Pearson, 2016 — Chapter 31 (Alternating Current), §31-3 (The Series R-L-C Circuit) and §31-5 (Series Resonance).
4. HyperPhysics — Series RLC Resonance: <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/serres.html>
5. MIT OpenCourseWare 8.02 — Lecture 19: RLC Circuits: <https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/>
6. Khan Academy — AC Circuit Analysis: <https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-ac-analysis/a/ee-rlc-natural-response-derivation>
7. HyperPhysics — Q Factor for RLC: <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/serres.html#c3>
