---
subject: PHY-103
topic: Growth and Decay of Current in L-R Circuit
date: 2026-06-23
tags: [physics, electricity, inductor, lr-circuit, transient-response, time-constant]
---

# Growth and Decay of Current in L-R Circuit

## 1. Introduction

When a circuit contains both resistance $R$ and inductance $L$, the current does not change instantaneously in response to a switched EMF. The inductor opposes any change in current by generating a back-EMF proportional to the rate of change of current ($V_L = L\,di/dt$). As a result, the current grows gradually toward its steady-state value after a battery is connected, and decays gradually toward zero after it is disconnected. These transient behaviours are described by first-order differential equations whose solutions define the characteristic **time constant** $\tau = L/R$.

## 2. Growth of Current (Switch Closed)

**Circuit:**
```
  ┌────[S]────[R]────┐
  │                  │
[ε]               [L]
  │                  │
  └──────────────────┘
     t < 0: switch open, i = 0
     t = 0: switch S closes
```

At the instant $t = 0$ the switch closes, applying KVL around the loop:

$$\varepsilon = iR + L\frac{di}{dt} \tag{1}$$

**Solving the ODE:**

Rearrange: $\dfrac{di}{\varepsilon - iR} = \dfrac{dt}{L}$

Integrate both sides (left from 0 to $i$; right from 0 to $t$):

$$-\frac{1}{R}\ln\!\left(\varepsilon - iR\right)\Big|_0^i = \frac{t}{L}$$

$$-\frac{1}{R}\left[\ln(\varepsilon - iR) - \ln\varepsilon\right] = \frac{t}{L}$$

$$\ln\!\left(1 - \frac{iR}{\varepsilon}\right) = -\frac{Rt}{L}$$

$$\boxed{i(t) = \frac{\varepsilon}{R}\!\left(1 - e^{-Rt/L}\right) = I_0\!\left(1 - e^{-t/\tau}\right)} \tag{2}$$

where:
- $I_0 = \varepsilon/R$ is the **steady-state current** (as $t \to \infty$)
- $\tau = L/R$ is the **time constant** (unit: seconds, since $[L/R] = \text{H}/\Omega = \text{s}$)

**Voltage across the inductor** during growth:

$$V_L = L\frac{di}{dt} = \varepsilon\,e^{-t/\tau} \tag{3}$$

At $t = 0$: $V_L = \varepsilon$ (inductor takes the full EMF).  
As $t \to \infty$: $V_L \to 0$ (resistor takes all the voltage).

**Growth curve:**
```
  i(t)
    │
I₀ ┤ · · · · · · · · · ─ ─ ─ ─ ─ ─ ─
   │              ╱
0.865 I₀ ─────╱
   │         ╱
0.632 I₀ ──╱
   │      ╱ ← slope at t=0 is I₀/τ
   │    ╱
   │  ╱
   │╱
   ┼────────┬────────┬────────┬────→ t
   0        τ       2τ       3τ

  i(τ)  = I₀(1 − 1/e) ≈ 0.632 I₀
  i(2τ) = I₀(1 − 1/e²) ≈ 0.865 I₀
  i(5τ) ≈ 0.993 I₀  (effectively steady state)
```

## 3. Decay of Current (EMF Disconnected)

At some instant (re-define as $t = 0$) the EMF is removed and the inductor drives current through the resistor via its stored energy.

**KVL (no source):**

$$0 = iR + L\frac{di}{dt} \implies \frac{di}{i} = -\frac{R}{L}\,dt$$

Integrating (from $I_0$ to $i$ and 0 to $t$):

$$\boxed{i(t) = I_0\,e^{-t/\tau}} \tag{4}$$

**Voltage across the inductor** (back-EMF during decay):

$$V_L = -L\frac{di}{dt} = I_0 R\,e^{-t/\tau} = \varepsilon\,e^{-t/\tau} \tag{5}$$

The sign is reversed relative to the growth phase: the inductor now acts as a source.

**Decay curve:**
```
  i(t)
    │
I₀ ┤ ●
   │  ╲
0.368 I₀ ─────────╲
   │                ╲
0.135 I₀ ─────────────────╲
   │                        ╲ · · · · ─ ─ ─ ─ ─ ─
   ┼────────┬────────┬────────┬────────→ t
   0        τ       2τ       3τ

  i(τ)  = I₀/e  ≈ 0.368 I₀
  i(2τ) = I₀/e² ≈ 0.135 I₀
```

## 4. The Time Constant $\tau = L/R$

The time constant is the fundamental parameter of an L-R circuit:

| Time elapsed | Current during growth | Current during decay |
|:------------|:---------------------|:--------------------|
| $t = \tau$  | $0.632\,I_0$ | $0.368\,I_0$ |
| $t = 2\tau$ | $0.865\,I_0$ | $0.135\,I_0$ |
| $t = 3\tau$ | $0.950\,I_0$ | $0.050\,I_0$ |
| $t = 5\tau$ | $0.993\,I_0$ | $0.007\,I_0$ |

In practice, a circuit is considered to have reached steady state after approximately $5\tau$.

**Physical interpretation of $\tau$:** At $t = \tau$ during growth, the tangent to $i(t)$ at the origin intersects the asymptote $i = I_0$. In other words, $\tau$ is the time it would take for the current to reach $I_0$ if it continued at its initial rate of change $di/dt\big|_{t=0} = \varepsilon/L = I_0/\tau$.

## 5. Energy Stored and Dissipated

**Energy stored in the inductor** at any instant:

$$U_L = \frac{1}{2}L i^2 \tag{6}$$

At steady state (growth complete): $U_L = \frac{1}{2}L I_0^2$

**Energy balance during growth (0 to $\infty$):**

Total energy from source:

$$W_{\text{source}} = \int_0^\infty \varepsilon\,i\,dt = \int_0^\infty \varepsilon I_0(1-e^{-t/\tau})\,dt = \varepsilon I_0 \cdot \tau\!\left[t + \frac{\tau}{1}e^{-t/\tau}\right]_0^\infty$$

This evaluates to $\varepsilon I_0 \tau / 1 \cdot \tau = L I_0^2 = 2 \times \frac{1}{2}L I_0^2$. Exactly half is stored in the inductor; the other half is dissipated as heat in the resistor — regardless of the value of $R$.

**Energy dissipated in resistor during decay (0 to $\infty$):**

$$W_R = \int_0^\infty i^2 R\,dt = I_0^2 R \int_0^\infty e^{-2t/\tau} dt = I_0^2 R \cdot \frac{\tau}{2} = \frac{1}{2}L I_0^2 \checkmark$$

All the energy stored in the inductor is eventually dissipated in the resistor.

## 6. Worked Example 1 — Finding Time Constant and Steady-State Current (Simple)

**Problem:** A coil of inductance $L = 0.5\,\text{H}$ and resistance $R = 10\,\Omega$ is connected in series with a $20\,\text{V}$ battery. Find (a) the time constant $\tau$, (b) the steady-state current $I_0$, and (c) the current at $t = 0.1\,\text{s}$.

**Solution:**

**(a)** $\tau = L/R = 0.5/10 = \boxed{0.05\,\text{s}}$

**(b)** $I_0 = \varepsilon/R = 20/10 = \boxed{2\,\text{A}}$

**(c)** $t/\tau = 0.1/0.05 = 2$

$$i(0.1) = 2(1 - e^{-2}) = 2(1 - 0.1353) = 2 \times 0.8647 = \boxed{1.73\,\text{A}}$$

## 7. Worked Example 2 — Current at a Specified Fraction of Steady State (Intermediate)

**Problem:** In an L-R circuit with $L = 2\,\text{H}$ and $R = 4\,\Omega$ driven by $\varepsilon = 24\,\text{V}$, find (a) the time for the current to reach $80\%$ of its steady-state value during growth, and (b) the energy stored in the inductor at that instant.

**Solution:**

$\tau = L/R = 2/4 = 0.5\,\text{s}$, $I_0 = 24/4 = 6\,\text{A}$

**(a)** We need $i = 0.80 I_0$:

$$0.80 I_0 = I_0(1 - e^{-t/\tau})$$

$$e^{-t/\tau} = 0.20 \implies -\frac{t}{\tau} = \ln(0.20) = -1.609$$

$$t = 1.609 \times 0.5 = \boxed{0.805\,\text{s}} \approx 1.61\tau$$

**(b)** Current at $t = 0.805\,\text{s}$: $i = 0.80 \times 6 = 4.8\,\text{A}$

$$U_L = \frac{1}{2}Li^2 = \frac{1}{2}(2)(4.8)^2 = \frac{1}{2}(2)(23.04) = \boxed{23.04\,\text{J}}$$

## 8. Worked Example 3 — Decay After Steady State; Voltage Spike (Advanced)

**Problem:** An L-R circuit ($L = 0.4\,\text{H}$, $R_1 = 8\,\Omega$) reaches steady state with a $16\,\text{V}$ source. At $t = 0$ the source is suddenly disconnected and a resistor $R_2 = 40\,\Omega$ is switched across the inductor (forming a decay loop with $R_2$ only). Find (a) the initial current, (b) the new time constant, (c) the initial voltage across $R_2$, and (d) the time for the current to fall to $0.5\,\text{A}$.

**Solution:**

**(a)** Steady-state current: $I_0 = \varepsilon/R_1 = 16/8 = \boxed{2\,\text{A}}$

**(b)** New time constant (only $R_2$ in decay loop):

$$\tau' = \frac{L}{R_2} = \frac{0.4}{40} = \boxed{0.01\,\text{s}}$$

**(c)** Initial voltage across $R_2$:

$$V_{R_2}(0) = I_0 R_2 = 2 \times 40 = \boxed{80\,\text{V}}$$

This is far larger than the original source voltage (16 V) — a well-known hazard when an inductive circuit is suddenly opened. In practice, a **freewheeling diode** (flyback diode) is placed across the inductor to clamp this spike.

**(d)** Time to reach $i = 0.5\,\text{A}$:

$$0.5 = 2\,e^{-t/0.01} \implies e^{-t/0.01} = 0.25 \implies t = 0.01 \ln 4 = \boxed{0.01386\,\text{s} \approx 13.9\,\text{ms}}$$

## 9. Growth vs Decay at a Glance

| Feature | Growth | Decay |
|:--------|:-------|:------|
| Switch action | Closed (source connected) | Opened (source removed) |
| Governing equation | $\varepsilon = iR + L\,di/dt$ | $0 = iR + L\,di/dt$ |
| Solution | $i = I_0(1 - e^{-t/\tau})$ | $i = I_0\,e^{-t/\tau}$ |
| $i$ at $t=0$ | 0 | $I_0$ |
| $i$ as $t \to \infty$ | $I_0$ | 0 |
| $V_L$ at $t=0$ | $\varepsilon$ (maximum) | $-I_0 R$ (back-EMF) |
| Energy stored | Increases to $\frac{1}{2}LI_0^2$ | Decreases from $\frac{1}{2}LI_0^2$ to 0 |
| Shape of curve | Rising exponential | Falling exponential |

## 10. Practice Problems

1. An inductor of $L = 1\,\text{H}$ and $R = 20\,\Omega$ is connected to a $100\,\text{V}$ battery. Find the current at $t = 0.1\,\text{s}$ and the time constant.

2. An L-R circuit has $\tau = 0.2\,\text{s}$ and $I_0 = 5\,\text{A}$. Find the inductance if $R = 10\,\Omega$. Also find the energy stored at steady state.

3. A $50\,\text{V}$ source is applied to a series circuit with $L = 0.5\,\text{H}$ and $R = 25\,\Omega$. How long does it take the current to reach $1.5\,\text{A}$? What fraction of $I_0$ is this?

4. An inductor carrying a steady current of $4\,\text{A}$ is disconnected from its source and allowed to decay through a $100\,\Omega$ resistor. If $L = 0.8\,\text{H}$, find the voltage across the resistor at $t = 4\,\text{ms}$.

5. Show that the total heat dissipated in $R$ during the growth phase (from $t = 0$ to $\infty$) equals the energy stored in the inductor, $\frac{1}{2}LI_0^2$. (*Hint:* integrate $i^2 R$ from 0 to $\infty$ and use $\tau = L/R$.)

## 11. References

1. Halliday, D., Resnick, R., & Walker, J. *Fundamentals of Physics*, 10th ed. Wiley, 2014 — Chapter 30 (Induction and Inductance), §30-9 (RL Circuits).
2. Serway, R. A., & Jewett, J. W. *Physics for Scientists and Engineers*, 9th ed. Cengage, 2014 — Chapter 32 (Inductance), §32-2 (RL Circuits).
3. Young, H. D., & Freedman, R. A. *University Physics*, 14th ed. Pearson, 2016 — Chapter 30 (Inductance), §30-4 (The R-L Circuit).
4. HyperPhysics — RL Circuit: <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/RL.html>
5. MIT OpenCourseWare 8.02 — Lecture 16: Mutual Inductance and RL Circuits: <https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/>
6. Khan Academy — RL Natural and Step Response: <https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-natural-and-forced-response/a/ee-rl-natural-response>
7. Paul's Online Notes — First-Order Linear ODE (mathematical background): <https://tutorial.math.lamar.edu/Classes/DE/Linear.aspx>
