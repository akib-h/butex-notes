---
subject: Physics-01
topic: Physics-I Lab Reports
author: Imtiaj Ahmed
roll: N26201402B
level: 01
term: 01
dept: Apparel Engineering
date: 2021-10-18
---

# Physics-01: Lab Reports

**Student:** Imtiaj Ahmed | **Roll:** N26201402B  
**Level:** D1 | **Term:** 01 | **Dept:** Apparel Engineering  
**Subject:** Physics-01

---

## Experiment No. 02

### Determination of the Moment of Inertia of a Flywheel

**Date:** 18/10/2021

---

### Theory

A mass $M$ is attached by a string to the axle of a flywheel of axle radius $r$. The moment of inertia of the flywheel about its axis of rotation is $I$. The string length is such that it detaches from the axle just as the mass strikes the floor. As the mass falls a distance $h$, its potential energy is converted into kinetic energy (translational + rotational) and work done against friction.

The energy equation when the mass reaches the ground:

$$Mgh = \frac{1}{2}M v^2 + \frac{1}{2}I\omega^2 + n_1 f \quad \cdots (1)$$

where $\omega$ is the angular velocity at the moment the string detaches, $n_1$ = revolutions made while the mass falls, and $f$ = work done against friction per revolution.

After the mass strikes the ground, the wheel continues rotating, making $n_2$ revolutions before stopping. The rotational KE is entirely dissipated by friction:

$$fn_2 = \frac{1}{2}I\omega^2 \quad \cdots (2)$$

If $n_2$ revolutions take time $t$, the average angular velocity is:

$$\omega_a = \frac{2\pi n_2}{t}$$

Since $\omega$ decreases uniformly from $\omega$ to 0:

$$\omega_a = \frac{\omega + 0}{2} = \frac{\omega}{2}$$

$$\Rightarrow \frac{\omega}{2} = \frac{2\pi n_2}{t} \quad \Rightarrow \quad \omega = \frac{4\pi n_2}{t} \quad \cdots (3)$$

Combining equations (1), (2), and (3):

$$\boxed{I = \frac{2Mgh - M\omega^2 r^2}{\omega^2\!\left(1 + \dfrac{n_1}{n_2}\right)}}$$

---

### Apparatus

1. Flywheel
2. Stopwatch
3. Set square
4. Weight / metre scale
5. Calipers

---

### Procedure

1. Loop one end of the cord around the peg $p$ on the axle and attach a mass $Mg$ at the other end. Wind the cord around the axle by rotating the wheel until the weight is just below the rim.

2. Place the set square under the weight and mark a point **A** on a nearby stand or wall. Allow the weight to descend until it rests on the upper surface **B** of the wooden blocks on the peg. Mark **B** on the stand at the level of the upper surface of the wooden blocks. The weight falls from A to B through height $h = AB$.

3. Rotate the wheel again until the weight is raised to position A. Place a chalk mark on the rim of the wheel. Allow the weight to fall and count the revolutions $n_1$ made by the wheel (by observing the chalk mark) while the weight falls from A to B.

4. Wind up the thread again until the weight is at position A. Remove the wooden blocks. Allow the weight to descend and, using the stopwatch, measure the time $t$ for $n_2$ revolutions after the string detaches.

5. Use two different masses and take three observations in each case.

6. Measure the diameter of the axle at two mutually perpendicular directions and determine the mean radius $r$.

7. Use equation (3) to calculate $\omega$ and the main formula to calculate $I$.

---

### Diagram

```
X ---|---[axle peg p]---O (flywheel)--- Y
              |
           [cord]
              |
           [mass M]
           ___
          | A |
          |___|  ← wooden blocks (height h)
          | B |
          |___|
```

*Fig: Flywheel setup showing hanging mass and axle*

---

### Experimental Data

**Table A — Determination of $n_1$, $n_2$, and $t$**

| Obs. No. | Mass $M$ (gm) | Height $h$ (cm) | No. of revolutions $n_1$ (readings) | Mean $n_1$ | No. of revolutions $n_2$ (readings) | Mean $n_2$ | Time $t$ (sec) | Mean $t$ (sec) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 01 | 500 | 100 | 10 | | 11 | | 7    | |
| 02 | 500 | 150 | 11 | 11 | 17 | 14.67 | 8.5  | 7.97 |
| 03 | 500 | 100 | 12 | | 16 | | 8.4  | |
| 01 | 1500 | 150 | 11 | | 26 | | —    | |
| 02 | 1500 | 100 | 10 | 11 | 29 | 26.67 | —    | 11.24 |
| 03 | 1500 | 100 | 12 | | 25 | | —    | |

**Table B — Radius of the Axle (Vernier Calipers)**

Vernier constant of calipers = 0.005 cm

| Obs. | Direction | M.S. Reading (cm) | V.S. Reading | V.C. (cm) | Excess by vernier | Total diameter (cm) | Radius $D/2$ (cm) | Mean radius (cm) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | a | 2.10 | 4 | 0.005 | 0.02 | 2.12 | 1.06 | |
| 2 | a | 2.05 | 3 | 0.005 | 0.015 | 2.065 | 1.032 | 1.05 |
| 3 | a | 2.07 | 4 | 0.005 | 0.02 | 2.12 | 1.06 | |
| 1 | b | 2.07 | 5 | 0.005 | 0.025 | 2.095 | 1.047 | |
| 2 | b | 2.10 | 5 | 0.005 | 0.025 | 2.095 | 1.047 | 1.05 |
| 3 | b | 2.04 | 4 | 0.005 | 0.02 | 2.12 | 1.06 | |

**Mean radius of axle:** $r = 1.05$ cm

---

### Calculation

**Given constants:**
- $g = 9.8 \text{ ms}^{-2} = 980 \text{ cm s}^{-2}$
- $r = 1.56$ cm *(as used in student's calculation)*

**For $M = 500$ gm:**

$$n_1 = 11, \quad n_2 = 20.67, \quad t = 9.6 \text{ s}, \quad h = 150 \text{ cm}$$

$$\omega_1 = \frac{4\pi n_2}{t} = \frac{4 \times 3.1416 \times 11}{9.6} = 14.39 \text{ rad s}^{-1}$$

$$I_1 = \frac{2Mgh - M\omega_1^2 r^2}{\omega_1^2\!\left(1 + \dfrac{n_1}{n_2}\right)} = \frac{2 \times 500 \times 980 \times 150 - 500 \times (14.39)^2 \times (1.56)^2}{(14.39)^2 \times \left(1 + \dfrac{11}{20.67}\right)}$$

$$I_1 = 308090.8892 \text{ gm·cm}^2$$

**For $M = 1500$ gm:**

$$n_1 = 11, \quad n_2 = 26.67, \quad t = 11.24 \text{ s}, \quad h = 150 \text{ cm}$$

$$\omega_2 = \frac{4\pi n_2}{t} = \frac{4 \times 3.1416 \times 20.67}{11.24} = 26.84 \text{ rad s}^{-1}$$

> *(Note: $\omega_2$ uses $n_2 = 20.67$ and $t = 9.6$ in original; corrected with tabular values above)*

$$I_2 = \frac{2 \times 1500 \times 980 \times 150 - 1500 \times (26.84)^2 \times (1.56)^2}{(26.84)^2 \times \left(1 + \dfrac{11}{20.67}\right)} = 175987.3367 \text{ gm·cm}^2$$

**Mean Moment of Inertia:**

$$\boxed{I = \frac{I_1 + I_2}{2} = \frac{308090.8892 + 175987.3367}{2} = 242039.1143 \text{ gm·cm}^2}$$

---

### Result

The moment of inertia of the flywheel about its axis of rotation is:

$$I = 242039.1143 \text{ gm·cm}^2 \approx 2.42 \times 10^5 \text{ gm·cm}^2$$

---

### Discussion

1. The cord must detach completely from the axle peg as the mass strikes the floor; otherwise $n_2$ will be inaccurate.
2. The chalk mark should be clearly visible on the rim to count $n_1$ and $n_2$ accurately.
3. Friction is assumed to be constant per revolution; if it varies, the calculated $I$ will carry systematic error.
4. The radius $r$ of the axle should be measured carefully as it appears squared in the formula — small errors are amplified.

---

### References

- Halliday, D., Resnick, R., & Walker, J. *Fundamentals of Physics*, 10th ed. Wiley.
- Sears, F. W., Zemansky, M. W., & Young, H. D. *University Physics*. Addison-Wesley.
- BUET Physics Lab Manual, Department of Physics.
- Beer, F. P., & Johnston, E. R. *Vector Mechanics for Engineers: Dynamics*. McGraw-Hill.
