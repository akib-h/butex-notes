# 08 — Worked Examples: Surface Tension

> **Course:** Physics II | **Topic:** Surface Tension  
> **Date:** 2026-04-08  
> **Syllabus Reference:** All Units — Mathematical Problems

---

## Table of Contents

- [Formula Sheet](#formula-sheet)
- [QB (Question Bank) Problems](#qb-question-bank-problems)
- [Class Problems](#class-problems)
- [Additional Practice Problems](#additional-practice-problems)

---

## Formula Sheet

| Formula | Description |
|---|---|
| $T = F / l$ | Surface tension = force per unit length |
| $T = W / \Delta A$ | Surface tension = work per unit area |
| $P = 2T/r$ | Excess pressure — liquid drop / air bubble (spherical) |
| $P = 4T/r$ | Excess pressure — soap bubble (spherical) |
| $P = T(1/r_1 + 1/r_2)$ | Young-Laplace: one surface |
| $P = 2T(1/r_1 + 1/r_2)$ | Young-Laplace: two surfaces (soap film) |
| $W = 8\pi r^2 T$ | Work to blow soap bubble of radius $r$ |
| $W = T \cdot \Delta A = 4\pi T(Nr^2 - R^2)$ | Work in atomisation / merging drops |
| $E = 2 \times 4\pi r^2 \times T$ | Surface energy of soap bubble |
| $h = 2T\cos\theta / \rho g r$ | Capillary rise height |
| $T = r\rho g(h + r/3) / 2\cos\theta$ | Surface tension from capillary rise |
| $h_1 - h_2 = (2T/\rho g)(1/r_1 - 1/r_2)$ | Difference in levels in U-tube |

---

## QB (Question Bank) Problems

These are marked **QB** in your handnotes — high-priority exam problems.

---

### QB Problem 1: Work done in blowing a soap bubble

**Q:** What is the work done in blowing a soap bubble of radius 10 cm? What additional work will be performed in further blowing it so that its radius becomes 15 cm? $T = 30$ dyne/cm.

**Solution:**

**Work done to blow bubble of radius $r_1 = 10$ cm:**

$$W_1 = 2 \times 4\pi r_1^2 \times T = 8\pi \times (10)^2 \times 30$$

$$W_1 = 8 \times 3.14159 \times 100 \times 30 = 75398 \text{ erg}$$

$$\boxed{W_1 = 75.398 \times 10^3 \text{ erg}}$$

**Work done to blow bubble of radius $r_2 = 15$ cm:**

$$W_2 = 8\pi \times (15)^2 \times 30 = 8\pi \times 225 \times 30 = 169646 \text{ erg}$$

$$\boxed{W_2 = 169.65 \times 10^3 \text{ erg}}$$

**Additional work (from $r_1$ to $r_2$):**

$$\Delta W = W_2 - W_1 = 169646 - 75398 = 94248 \text{ erg}$$

$$\boxed{\Delta W \approx 94252 \text{ erg}}$$

---

### QB Problem 2: Excess pressure and surface energy of soap bubble

**Q:** Calculate the excess pressure inside a soap bubble of radius $3 \times 10^{-3}$ m. Surface tension of soap solution = $20 \times 10^{-3}$ N/m. Calculate also the surface energy of the soap bubble.

**Solution:**

**Excess pressure** (soap bubble has 2 surfaces):

$$P_e = \frac{4T}{r} = \frac{4 \times 20 \times 10^{-3}}{3 \times 10^{-3}} = \frac{80 \times 10^{-3}}{3 \times 10^{-3}}$$

$$\boxed{P_e = 26.67 \text{ N/m}^2}$$

**Surface energy:**

$$E = 2 \times 4\pi r^2 \times T = 8\pi \times (3 \times 10^{-3})^2 \times 20 \times 10^{-3}$$

$$= 8 \times 3.14159 \times 9 \times 10^{-6} \times 0.02$$

$$= 8 \times 3.14159 \times 1.8 \times 10^{-7}$$

$$\boxed{E = 4.52 \times 10^{-6} \text{ J}}$$

---

### QB Problem 4 (also Class): Work done in spraying mercury

**Q:** Calculate the work done in spraying a spherical drop of mercury of radius $R = 10^{-3}$ m into $N = 10^6$ drops of equal size. $T = 550 \times 10^{-3}$ N/m.

**Solution:**

**Find radius of small drops** (volume conservation):

$$\frac{4}{3}\pi R^3 = N \cdot \frac{4}{3}\pi r^3 \implies r^3 = \frac{R^3}{N}$$

$$r = \frac{R}{N^{1/3}} = \frac{10^{-3}}{(10^6)^{1/3}} = \frac{10^{-3}}{100} = 10^{-5} \text{ m}$$

**Increase in surface area:**

$$\Delta A = 4\pi(Nr^2 - R^2) = 4\pi[10^6 \times (10^{-5})^2 - (10^{-3})^2]$$

$$= 4\pi[10^6 \times 10^{-10} - 10^{-6}] = 4\pi[10^{-4} - 10^{-6}]$$

$$= 4\pi \times 99 \times 10^{-6} \approx 4\pi \times 10^{-4}$$

**Work done:**

$$W = T \cdot \Delta A = 550 \times 10^{-3} \times 4\pi \times 99 \times 10^{-6}$$

$$= 0.55 \times 4 \times 3.14159 \times 9.9 \times 10^{-5}$$

$$= 0.55 \times 1.2441 \times 10^{-3}$$

$$\boxed{W \approx 6.84 \times 10^{-4} \text{ J}}$$

---

### QB Problem 11: Energy to atomise petrol

**Q:** Calculate the amount of energy needed to break a drop of petrol of volume $10^{-6}$ m³ into a thousand million ($10^9$) drops of equal size. Surface tension of petrol = $26 \times 10^{-3}$ N/m.

**Solution:**

**Radius of large drop:**

$$\frac{4}{3}\pi R^3 = 10^{-6} \implies R = \left(\frac{3 \times 10^{-6}}{4\pi}\right)^{1/3} = 6.2035 \times 10^{-3} \text{ m}$$

**Radius of small drops** ($N = 10^9$):

$$r = \frac{R}{N^{1/3}} = \frac{6.2035 \times 10^{-3}}{10^3} = 6.2035 \times 10^{-6} \text{ m}$$

**Energy needed:**

$$E = 4\pi T(Nr^2 - R^2)$$

$$= 4\pi \times 26 \times 10^{-3} \times [10^9 \times (6.2035 \times 10^{-6})^2 - (6.2035 \times 10^{-3})^2]$$

$$= 4\pi \times 0.026 \times [10^9 \times 3.8483 \times 10^{-11} - 3.8483 \times 10^{-5}]$$

$$= 4\pi \times 0.026 \times [38.483 \times 10^{-3} - 3.8483 \times 10^{-5}]$$

$$\approx 4\pi \times 0.026 \times 38.483 \times 10^{-3}$$

$$= 4 \times 3.14159 \times 0.026 \times 0.038483$$

$$\boxed{E = 0.0125 \text{ J} = 12.5 \text{ mJ}}$$

---

### QB Problem 12: 1000 drops merging

**Q:** 1000 drops of water, each of diameter 0.2 mm, combine to form a single drop. Calculate the loss of energy (or energy liberated) in forming the larger drop. Surface tension of water = 72 dyne/cm.

**Solution:**

$$r_{\text{small}} = \frac{0.2}{2} \text{ mm} = 0.1 \text{ mm} = 0.01 \text{ cm}, \quad N = 1000$$

**Radius of large drop:**

$$N \cdot \frac{4}{3}\pi r^3 = \frac{4}{3}\pi R^3 \implies R = N^{1/3} r = 10 \times 0.01 = 0.1 \text{ cm}$$

**Energy liberated = decrease in surface energy:**

$$E = 4\pi T(Nr^2 - R^2) = 4\pi \times 72 \times [1000 \times (0.01)^2 - (0.1)^2]$$

$$= 4\pi \times 72 \times [1000 \times 10^{-4} - 10^{-2}]$$

$$= 4\pi \times 72 \times [0.1 - 0.01]$$

$$= 4\pi \times 72 \times 0.09 = 4 \times 3.14159 \times 6.48$$

$$\boxed{E = 81.43 \text{ erg}}$$

---

### QB Problem 16: U-tube water levels

**Q:** A U-tube has two limbs of internal radii 0.5 cm and 1 cm respectively. Calculate the difference in the water levels in the two limbs. Surface tension of water = $7.2 \times 10^{-2}$ N/m.

**Solution:**

$$r_1 = 0.5 \text{ cm} = 5 \times 10^{-3} \text{ m}, \quad r_2 = 1 \text{ cm} = 10^{-2} \text{ m}$$

The pressure difference is balanced by height difference:

$$h\rho g = 2T\left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$

$$h = \frac{2T}{\rho g}\left(\frac{1}{r_1} - \frac{1}{r_2}\right) = \frac{2 \times 7.2 \times 10^{-2}}{1000 \times 9.8}\left(\frac{1}{5 \times 10^{-3}} - \frac{1}{10^{-2}}\right)$$

$$= \frac{0.144}{9800}\left(200 - 100\right) = \frac{0.144 \times 100}{9800}$$

$$\boxed{h = 1.469 \times 10^{-3} \text{ m} \approx 1.47 \text{ mm}}$$

---

### QB Problem 21: Density from U-tube

**Q:** A U-tube is made up of two capillaries of bore 1 mm and 2 mm respectively. The tube is held vertically and partially filled with a liquid of surface tension 49 dyne/cm and zero contact angle. Calculate the density of the liquid, if the difference in levels of the meniscus is 1.25 cm.

**Solution:**

$$r_1 = 0.5 \text{ mm} = 0.05 \text{ cm}, \quad r_2 = 1 \text{ mm} = 0.1 \text{ cm}$$
$$T = 49 \text{ dyne/cm}, \quad \theta = 0°, \quad g = 980 \text{ cm/s}^2$$

$$h_1 - h_2 = \frac{2T}{\rho g}\left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$

$$1.25 = \frac{2 \times 49}{\rho \times 980}\left(\frac{1}{0.05} - \frac{1}{0.1}\right) = \frac{98}{\rho \times 980}(20 - 10)$$

$$1.25 = \frac{98 \times 10}{\rho \times 980} = \frac{980}{980\rho} = \frac{1}{\rho}$$

$$\boxed{\rho = 0.8 \text{ g/cm}^3 = 800 \text{ kg/m}^3}$$

---

## Class Problems

These are labeled **Class** in your handnotes.

---

### Class Problem 3: Depth of air bubble

**Q:** Calculate the depth of water at which an air bubble of radius $4 \times 10^{-4}$ m may remain in equilibrium. Surface tension of water = $70 \times 10^{-3}$ N/m.

**Solution:**

Air bubble (one surface): $P_e = 2T/r$

At equilibrium, excess pressure = hydrostatic pressure:

$$h\rho g = \frac{2T}{r}$$

$$h = \frac{2T}{\rho g r} = \frac{2 \times 70 \times 10^{-3}}{1000 \times 9.8 \times 4 \times 10^{-4}}$$

$$= \frac{0.14}{3.92} = \boxed{35.71 \times 10^{-3} \text{ m} = 3.571 \text{ cm}}$$

---

### Class Problem 5: Pressure inside air bubble

**Q:** What would be the pressure inside a small air bubble of 0.1 mm radius situated just below the surface of water? Surface tension of water = 72 dyne/cm, atmospheric pressure = $1.013 \times 10^6$ dyne/cm².

**Solution:**

$$r = 0.1 \text{ mm} = \frac{0.1}{10} \text{ cm} = 0.01 \text{ cm}$$

Air bubble has **one surface**:

$$P_e = \frac{2T}{r} = \frac{2 \times 72}{0.01} = 14400 \text{ dyne/cm}^2$$

Total pressure inside:

$$P_{\text{inside}} = P_{\text{outside}} + P_e = 1.013 \times 10^6 + 14400$$

$$\boxed{P_{\text{inside}} = 1.0274 \times 10^6 \text{ dyne/cm}^2}$$

---

### Class Problem 6: Surface tension of soap solution (from bubble pressure)

**Q:** The pressure of air inside a soap bubble of 0.7 cm diameter is 8 mm of water above atmospheric pressure. Calculate the surface tension of soap solution.

**Solution:**

Excess pressure (8 mm water column):

$$P_e = h\rho g = 0.8 \text{ cm} \times 1 \text{ g/cc} \times 980 \text{ cm/s}^2 = 784 \text{ dyne/cm}^2$$

For soap bubble: $P_e = 4T/r$, where $r = 0.35$ cm:

$$T = \frac{P_e \times r}{4} = \frac{784 \times 0.35}{4} = \frac{274.4}{4}$$

$$\boxed{T = 68.6 \text{ dyne/cm}}$$

---

### Class Problem 7: Surface tension from soap bubble pressure (variant)

**Q:** The pressure inside a soap bubble of radius 1 cm balances a 1.4 mm column of oil of specific gravity 0.80. Calculate the surface tension of the soap solution.

**Solution:**

$$P_e = h\rho g = 0.14 \text{ cm} \times 0.80 \text{ g/cc} \times 980 \text{ cm/s}^2 = 109.76 \text{ dyne/cm}^2$$

For soap bubble: $P_e = 4T/r$, $r = 1$ cm:

$$T = \frac{P_e \times r}{4} = \frac{109.76 \times 1}{4}$$

$$\boxed{T = 27.44 \text{ dyne/cm}}$$

---

### Class Problem 8: Drop breaking into 64 drops

**Q:** A liquid drop of radius $R$ breaks up into 64 small drops. Calculate the change in energy.

**Solution:**

**Find radius of small drops:**

$$64 \times \frac{4}{3}\pi r^3 = \frac{4}{3}\pi R^3 \implies r^3 = \frac{R^3}{64} \implies r = \frac{R}{4}$$

**Change in energy:**

$$E = 4\pi T(Nr^2 - R^2) = 4\pi T\left[64 \times \left(\frac{R}{4}\right)^2 - R^2\right]$$

$$= 4\pi T\left[64 \times \frac{R^2}{16} - R^2\right] = 4\pi T[4R^2 - R^2]$$

$$= 4\pi T \times 3R^2$$

$$\boxed{\Delta E = 12\pi R^2 T}$$

---

### Class Problem 9: Soap bubble — monometer difference

**Q:** A soap bubble 2 mm in diameter is blown at the end of a tube which is connected at the other end to a U-tube manometer containing oil of specific gravity 0.8. Find the difference in the level in the two limbs of the manometer. Surface tension of soap solution = 25 dyne/cm.

**Solution:**

$$r = 1 \text{ mm} = 0.1 \text{ cm}, \quad T = 25 \text{ dyne/cm}, \quad \rho_{\text{oil}} = 0.8 \text{ g/cc}, \quad g = 980 \text{ cm/s}^2$$

Excess pressure inside soap bubble:

$$P_e = \frac{4T}{r} = \frac{4 \times 25}{0.1} = 1000 \text{ dyne/cm}^2$$

This pressure is balanced by the height of oil column:

$$h \cdot \rho_{\text{oil}} \cdot g = P_e$$

$$h = \frac{P_e}{\rho_{\text{oil}} \cdot g} = \frac{1000}{0.8 \times 980} = \frac{1000}{784}$$

$$\boxed{h = 1.2755 \text{ cm}}$$

---

### Class Problem 10: Mercury drop atomised

**Q:** A mercury drop of radius 1 cm is sprayed into one million drops of the same size. Calculate the energy expended. $T = 35 \times 10^{-3}$ N/m.

**Solution:**

$$R = 1 \text{ cm} = 0.01 \text{ m}, \quad N = 10^6$$

**Radius of small drops:**

$$r = \frac{R}{N^{1/3}} = \frac{0.01}{100} = 10^{-4} \text{ m}$$

**Energy expended:**

$$E = 4\pi T(Nr^2 - R^2) = 4\pi \times 35 \times 10^{-3} \times [10^6 \times (10^{-4})^2 - (0.01)^2]$$

$$= 4\pi \times 0.035 \times [10^6 \times 10^{-8} - 10^{-4}]$$

$$= 4\pi \times 0.035 \times [10^{-2} - 10^{-4}]$$

$$= 4\pi \times 0.035 \times 9.9 \times 10^{-3}$$

$$\boxed{E = 4.35 \times 10^{-3} \text{ J}}$$

---

### Class Problem 13: Work done in enlarging soap bubble

**Q:** A soap bubble is slowly enlarged from a radius of 0.01 m to 0.1 m. Calculate the work done or energy in the process. Surface tension of soap solution = $26 \times 10^{-3}$ N/m.

**Solution:**

$$W = 2 \times 4\pi(\pi_2^2 - \pi_1^2) \times T = 8\pi(r_2^2 - r_1^2)T$$

$$= 8\pi \times [(0.1)^2 - (0.01)^2] \times 26 \times 10^{-3}$$

$$= 8\pi \times [0.01 - 0.0001] \times 0.026$$

$$= 8\pi \times 0.0099 \times 0.026$$

$$= 8 \times 3.14159 \times 2.574 \times 10^{-4}$$

$$\boxed{W = 6.47 \times 10^{-3} \text{ J}}$$

---

### Class Problem 14: Radius of hole in vessel

**Q:** There is a minute circular hole at the bottom of a small hollow vessel. The vessel has to be immersed in water to a depth of 0.4 m so that no water penetrates inside. Calculate the radius of the hole. $T = 72 \times 10^{-3}$ N/m.

**Solution:**

$$r = \frac{2T}{h\rho g} = \frac{2 \times 72 \times 10^{-3}}{0.4 \times 1000 \times 9.8} = \frac{0.144}{3920}$$

$$\boxed{r = 3.67 \times 10^{-5} \text{ m}}$$

---

### Class Problem 15: Pressure difference and evaporation

**Q:** Assuming the surface tension of rain water to be 72 dyne/cm, find the difference of pressure inside and outside a rain drop of diameter 0.02 cm. What would this difference of pressure amount to, if the drop were to decrease by evaporation to a diameter of 0.000002 cm?

**Solution:**

**Initial drop** ($\pi_1 = 0.01$ cm):

$$P_1 = \frac{2T}{r_1} = \frac{2 \times 72}{0.01} = 14400 \text{ dyne/cm}^2$$

**After evaporation** ($r_2 = 0.000001$ cm $= 10^{-6}$ cm):

$$P_2 = \frac{2T}{r_2} = \frac{2 \times 72}{10^{-6}} = 1.44 \times 10^8 \text{ dyne/cm}^2$$

$$\boxed{P_1 = 14400 \text{ dyne/cm}^2, \quad P_2 = 14.4 \times 10^6 \text{ dyne/cm}^2}$$

The pressure inside the tiny evaporated drop is **~1000 times** larger — this shows why tiny droplets are thermodynamically unstable and evaporate faster (Kelvin effect).

---

### Class Problem 17: Capillary rise with specific gravity

**Q:** A capillary tube of 0.5 mm bore stands vertically in a wide vessel containing a liquid of surface tension 30 dyne/cm. The liquid wets the tube and has a specific gravity of 0.8. Calculate the rise of the liquid in the tube.

**Solution:**

$$r = 0.25 \text{ mm} = 0.025 \text{ cm}, \quad T = 30 \text{ dyne/cm}, \quad \rho = 0.8 \text{ g/cc}, \quad g = 980 \text{ cm/s}^2, \quad \theta = 0°$$

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 30 \times 1}{0.8 \times 980 \times 0.025} = \frac{60}{19.6}$$

$$\boxed{h = 3.061 \text{ cm}}$$

---

### Class Problem 18: Rise with angle of contact

**Q:** A liquid of density 1.05 gm/cc and angle of contact 20° has a vertical capillary tube of 2 mm diameter dipping into it. If the surface tension of the liquid be 235 dyne/cm, find the rise of the liquid in the capillary tube.

**Solution:**

$$r = 1 \text{ mm} = 0.1 \text{ cm}, \quad T = 235 \text{ dyne/cm}, \quad \theta = 20°, \quad \rho = 1.05 \text{ g/cc}, \quad g = 980 \text{ cm/s}^2$$

$$h = \frac{2T\cos\theta}{\rho g r} = \frac{2 \times 235 \times \cos 20°}{1.05 \times 980 \times 0.1}$$

$$\cos 20° = 0.9397$$

$$h = \frac{470 \times 0.9397}{102.9} = \frac{441.6}{102.9}$$

$$\boxed{h = 4.29 \text{ cm}}$$

---

### Class Problem 19: Surface tension of mercury

**Q:** In a capillary tube water rises to a height of 0.1 m. In the same capillary tube mercury is depressed by $3.42 \times 10^{-2}$ m. Angle of contact for mercury = 135°. Find the surface tension of mercury given that surface tension of water = $72 \times 10^{-3}$ N/m and density of mercury = $13.6 \times 10^3$ kg/m³.

**Solution:**

For water ($\theta_1 = 0°$, $\cos\theta_1 = 1$, $h_1 = 0.1$ m, $\rho_1 = 1000$ kg/m³):

$$T_1 = \frac{h_1\rho_1 g r}{2}$$

For mercury ($\theta_2 = 135°$, $h_2 = 3.42 \times 10^{-2}$ m, $\rho_2 = 13.6 \times 10^3$ kg/m³):

$$T_2 = \frac{h_2\rho_2 g r}{2\cos\theta_2}$$

Dividing:

$$\frac{T_2}{T_1} = \frac{h_2\rho_2}{h_1\rho_1\cos\theta_2}$$

$$T_2 = T_1 \times \frac{h_2\rho_2}{h_1\rho_1\cos\theta_2}$$

$$= 72 \times 10^{-3} \times \frac{3.42 \times 10^{-2} \times 13.6 \times 10^3}{0.1 \times 1000 \times \cos 135°}$$

$$= 72 \times 10^{-3} \times \frac{465.12}{100 \times (-0.7071)}$$

$$= 72 \times 10^{-3} \times \frac{465.12}{-70.71}$$

Taking magnitude:

$$T_2 = 72 \times 10^{-3} \times 6.577 = 473.5 \times 10^{-3}$$

$$\boxed{T_2 \approx 0.47 \text{ N/m} = 470 \text{ mN/m}}$$

---

### Class Problem 20: Mercury levels in U-tube

**Q:** Find the difference in the levels of mercury in the two limbs of a U-tube if the diameter of the bore of one limb is 1 mm and of the other 8 mm. The surface tension of mercury is 440 CGS units, its density is 13.6 g/cc and the angle of contact with the walls of the tube is 140°.

**Solution:**

$$r_1 = 0.5 \text{ mm} = 0.05 \text{ cm}, \quad r_2 = 4 \text{ mm} = 0.4 \text{ cm}$$
$$T = 440 \text{ dyne/cm}, \quad \rho = 13.6 \text{ g/cc}, \quad \theta = 140°, \quad g = 980 \text{ cm/s}^2$$

$$h_2 - h_1 = \frac{2T\cos\theta}{\rho g}\left(\frac{1}{r_2} - \frac{1}{r_1}\right)$$

$$= \frac{2 \times 440 \times \cos 140°}{13.6 \times 980}\left(\frac{1}{0.4} - \frac{1}{0.05}\right)$$

$$\cos 140° = -0.766$$

$$= \frac{880 \times (-0.766)}{13328}\left(2.5 - 20\right)$$

$$= \frac{-674.08}{13328} \times (-17.5) = \frac{674.08 \times 17.5}{13328}$$

$$= \frac{11796.4}{13328} = 0.8851 \text{ cm}$$

$$\boxed{h_2 - h_1 \approx 0.885 \text{ cm}}$$

---

## Additional Practice Problems

### P1: Change in radius of rain drop after evaporation

A spherical rain drop of radius $R = 2$ mm evaporates until its radius becomes $R' = 0.5$ mm. Calculate the change in surface energy. $T_{\text{water}} = 72$ dyne/cm.

$$\Delta E = T \times 4\pi(R'^2 - R^2) = 72 \times 4\pi[(0.05)^2 - (0.2)^2] \text{ cm}$$

$$= 72 \times 4\pi[0.0025 - 0.04] = 72 \times 4\pi \times (-0.0375)$$

$$\Delta E = -33.93 \text{ erg} \quad \text{(energy released)}$$

---

### P2: Jurin's law verification

In a capillary tube of radius $r = 0.1$ mm, water rises to height $h_1 = 14.9$ cm. In a capillary of radius $r_2 = 0.3$ mm, predict the height $h_2$.

By Jurin's law: $hr = \text{constant}$

$$h_2 = \frac{h_1 r_1}{r_2} = \frac{14.9 \times 0.1}{0.3} = \boxed{4.97 \text{ cm}}$$

---

### P3: Energy comparison

Calculate the ratio of surface energy of a large single drop (radius $R$) to the total surface energy of $N = 10^6$ small drops of radius $r = R/100$.

$$\frac{E_{\text{large}}}{E_{\text{small total}}} = \frac{4\pi R^2 T}{N \times 4\pi r^2 T} = \frac{R^2}{N \cdot (R/100)^2} = \frac{R^2}{10^6 \times R^2/10^4} = \frac{1}{100}$$

The million small drops have **100 times** more surface energy than the single large drop.

---

*Previous: [07 — Determination of Surface Tension of Water](./07_Determination_ST_Water.md)*
