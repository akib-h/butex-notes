---
subject: PHY-103
module: Electricity
date: 2026-06-23
---

# ⚡ PHY-103 — Electricity

![Subject](https://img.shields.io/badge/Subject-PHY--103-blue?style=flat-square)
![Module](https://img.shields.io/badge/Module-Electricity-yellow?style=flat-square)
![Topics](https://img.shields.io/badge/Topics-14%20%2F%2014-brightgreen?style=flat-square)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=flat-square)
![Last Updated](https://img.shields.io/badge/Last%20Updated-2026--06--23-informational?style=flat-square)

---

## About

This module covers the **Electricity** chapter of **PHY-103 (Physics – II)**, a
3-credit, 45-hour second-year course at BUTEX. Topics progress from electrostatics
(Coulomb's Law, Gauss's Law, electric dipoles, capacitors) through steady-current
circuit analysis (Ohm's Law, Kirchhoff's Laws, Wheatstone Bridge), into transient
and alternating-current circuits (L-R growth/decay, AC fundamentals, series RLC),
and close with parallel-circuit resonance.

All 14 syllabus topics are complete. Each file contains derivations, worked examples,
ASCII/Mermaid diagrams, and practice problems.

---

## 📋 Official Syllabus

> - Coulomb's law
> - Electric flux
> - Gauss's law and its applications
> - Electric dipole in an electric field
> - Capacitors and capacitance
> - Capacitors with dielectrics
> - Charging and discharging of a capacitor
> - Ohm's law
> - Kirchhoff's laws
> - Application of Kirchhoff's laws to Wheatstone bridge
> - Growth and decay of current in L-R circuit
> - Alternating current (A.C.) fundamentals
> - Flow of A.C. through inductor, capacitor and resistance in series
> - Resonance in parallel circuit

---

## 📑 Topic Index

| # | Topic | File |
|:--|:------|:-----|
| 1 | Coulomb's Law | [01\_coulombs\_law.md](01_coulombs_law.md) |
| 2 | Electric Flux | [02\_electric\_flux.md](02_electric_flux.md) |
| 3 | Gauss's Law and Its Applications | [03\_gauss\_law.md](03_gauss_law.md) |
| 4 | Electric Dipole in an Electric Field | [04\_electric\_dipole.md](04_electric_dipole.md) |
| 5 | Capacitors and Capacitance | [05\_capacitors\_and\_capacitance.md](05_capacitors_and_capacitance.md) |
| 6 | Capacitors with Dielectrics | [06\_capacitors\_with\_dielectrics.md](06_capacitors_with_dielectrics.md) |
| 7 | Charging and Discharging of a Capacitor | [07\_charging\_discharging\_capacitor.md](07_charging_discharging_capacitor.md) |
| 8 | Ohm's Law | [08\_ohms\_law.md](08_ohms_law.md) |
| 9 | Kirchhoff's Laws | [09\_kirchhoffs\_laws.md](09_kirchhoffs_laws.md) |
| 10 | Application of Kirchhoff's Laws to Wheatstone Bridge | [10\_wheatstone\_bridge.md](10_wheatstone_bridge.md) |
| 11 | Growth and Decay of Current in L-R Circuit | [11\_lr\_circuit\_growth\_decay.md](11_lr_circuit_growth_decay.md) |
| 12 | Alternating Current (A.C.) Fundamentals | [12\_ac\_fundamentals.md](12_ac_fundamentals.md) |
| 13 | Flow of A.C. Through Inductor, Capacitor and Resistance in Series | [13\_series\_rlc\_circuit.md](13_series_rlc_circuit.md) |
| 14 | Resonance in Parallel Circuit | [14\_parallel\_resonance.md](14_parallel_resonance.md) |

---

## 🔢 Quick Formula Reference

### Electrostatics

| Quantity | Formula | Units |
|:---------|:--------|:------|
| Coulomb force | $F = k\dfrac{q_1 q_2}{r^2}$ | N |
| Electric field | $E = \dfrac{F}{q_0} = k\dfrac{q}{r^2}$ | N C⁻¹ |
| Electric flux | $\Phi_E = \vec{E} \cdot \vec{A} = EA\cos\theta$ | N m² C⁻¹ |
| Gauss's law | $\oint \vec{E} \cdot d\vec{A} = \dfrac{q_{\text{enc}}}{\varepsilon_0}$ | — |
| Dipole moment | $\vec{p} = q\vec{d}$ | C m |
| Dipole torque | $\vec{\tau} = \vec{p} \times \vec{E}$ | N m |
| Dipole potential energy | $U = -\vec{p} \cdot \vec{E}$ | J |

### Capacitors

| Quantity | Formula | Units |
|:---------|:--------|:------|
| Capacitance | $C = \dfrac{Q}{V}$ | F |
| Parallel-plate (vacuum) | $C = \varepsilon_0 \dfrac{A}{d}$ | F |
| With dielectric | $C = \kappa\,\varepsilon_0 \dfrac{A}{d}$ | F |
| Energy stored | $U = \dfrac{1}{2}CV^2 = \dfrac{Q^2}{2C}$ | J |
| Charging voltage | $V(t) = V_0\!\left(1 - e^{-t/RC}\right)$ | V |
| Discharging voltage | $V(t) = V_0\,e^{-t/RC}$ | V |
| RC time constant | $\tau = RC$ | s |

### DC Circuits

| Quantity | Formula | Units |
|:---------|:--------|:------|
| Ohm's Law | $V = IR$ | V |
| Resistivity | $R = \rho\,\dfrac{L}{A}$ | Ω |
| KCL (junction) | $\sum I_{\text{in}} = \sum I_{\text{out}}$ | A |
| KVL (loop) | $\sum V = 0$ | V |
| Wheatstone balance | $\dfrac{P}{Q} = \dfrac{R}{S}$ | — |

### L-R Circuit

| Quantity | Formula | Units |
|:---------|:--------|:------|
| Current growth | $i(t) = \dfrac{\mathcal{E}}{R}\!\left(1 - e^{-Rt/L}\right)$ | A |
| Current decay | $i(t) = I_0\,e^{-Rt/L}$ | A |
| Inductive time constant | $\tau_L = \dfrac{L}{R}$ | s |
| Back-EMF | $\mathcal{E}_L = -L\dfrac{di}{dt}$ | V |

### AC Circuits

| Quantity | Formula | Units |
|:---------|:--------|:------|
| Instantaneous EMF | $e = E_0\sin(\omega t)$ | V |
| Angular frequency | $\omega = 2\pi f$ | rad s⁻¹ |
| RMS voltage / current | $V_{\text{rms}} = \dfrac{V_0}{\sqrt{2}}$, $\;I_{\text{rms}} = \dfrac{I_0}{\sqrt{2}}$ | V, A |
| Inductive reactance | $X_L = \omega L$ | Ω |
| Capacitive reactance | $X_C = \dfrac{1}{\omega C}$ | Ω |
| Impedance (series RLC) | $Z = \sqrt{R^2 + (X_L - X_C)^2}$ | Ω |
| Phase angle | $\tan\phi = \dfrac{X_L - X_C}{R}$ | — |
| Power factor | $\cos\phi = \dfrac{R}{Z}$ | — |
| Average power | $P_{\text{avg}} = V_{\text{rms}}\,I_{\text{rms}}\cos\phi$ | W |

### Resonance

| Quantity | Formula | Units |
|:---------|:--------|:------|
| Series resonant frequency | $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$ | Hz |
| Parallel resonant frequency | $f_r = \dfrac{1}{2\pi}\sqrt{\dfrac{1}{LC} - \dfrac{R^2}{L^2}}$ | Hz |
| Quality factor | $Q = \dfrac{\omega_0 L}{R} = \dfrac{1}{R}\sqrt{\dfrac{L}{C}}$ | — |
| Bandwidth | $\Delta f = \dfrac{f_0}{Q}$ | Hz |
| Dynamic impedance (parallel) | $Z_D = \dfrac{L}{CR}$ | Ω |

---

## 🔬 Key Constants

| Constant | Symbol | Value |
|:---------|:-------|:------|
| Coulomb's constant | $k = \dfrac{1}{4\pi\varepsilon_0}$ | $8.988 \times 10^{9}$ N m² C⁻² |
| Permittivity of free space | $\varepsilon_0$ | $8.854 \times 10^{-12}$ C² N⁻¹ m⁻² |
| Permeability of free space | $\mu_0$ | $4\pi \times 10^{-7}$ H m⁻¹ |
| Elementary charge | $e$ | $1.602 \times 10^{-19}$ C |
| Speed of light | $c$ | $2.998 \times 10^{8}$ m s⁻¹ |

---

## 📚 Core Textbooks and References

1. Halliday, D., Resnick, R., & Walker, J. — *Fundamentals of Physics*, 10th ed., Wiley.
   Ch. 21–23 (electrostatics), 24–25 (capacitors), 26–28 (DC circuits), 30–32 (AC circuits & resonance).
2. Serway, R. A., & Jewett, J. W. — *Physics for Scientists and Engineers*, 9th ed., Cengage.
   Ch. 23–28 (electrostatics–DC circuits), 32–33 (AC circuits).
3. Young, H. D., & Freedman, R. A. — *University Physics with Modern Physics*, 14th ed., Pearson.
   Ch. 21–32 (full electricity coverage).

**Web Resources**

- [HyperPhysics — Electricity and Magnetism](http://hyperphysics.phy-astr.gsu.edu/hbase/emcon.html)
- [MIT OCW 8.02 — Physics II: Electricity and Magnetism (Spring 2007)](https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/)
- [Khan Academy — Electrical Engineering](https://www.khanacademy.org/science/electrical-engineering)
- [Paul's Online Notes — Second-Order DEs (L-R-C applications)](https://tutorial.math.lamar.edu/Classes/DE/Vibrations.aspx)

---

**Last Updated:** 2026-06-23

---

<div align="center">

**[⬆ PHY-103 Course Index](../README.md)** · **[⬆ Repository Root](../../README.md)**

</div>
