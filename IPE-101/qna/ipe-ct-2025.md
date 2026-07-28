# Engineering Materials (IPE101) – Class Test Answers

**Level-1, Term-2**

---

# 1. Define Fatigue and Creep

## Fatigue

### Definition
**Fatigue** is the progressive failure of a material caused by repeated or cyclic loading, even when the applied stress is lower than the material's yield strength or ultimate tensile strength. Over time, small cracks initiate and grow until the material fractures suddenly. :contentReference[oaicite:0]{index=0}

### Characteristics
- Occurs under cyclic or fluctuating stress.
- Crack initiation is usually at stress concentration points.
- Failure occurs after a large number of loading cycles.
- Common in machine components such as shafts, gears, springs, and aircraft wings.

### Example
A rotating shaft in an electric motor experiences repeated bending stresses and may fail due to fatigue after millions of rotations.

---

## Creep

### Definition
**Creep** is the slow, permanent deformation of a material when subjected to a constant load or stress over a long period, especially at high temperatures (typically above 40% of the material's melting temperature in Kelvin). :contentReference[oaicite:1]{index=1}

### Characteristics
- Occurs under constant stress.
- Most significant at elevated temperatures.
- Has three stages:
  1. Primary Creep
  2. Secondary (Steady-State) Creep
  3. Tertiary Creep

### Example
Steam turbine blades and jet engine components experience creep due to prolonged operation at high temperatures.

---

# 2. Atomic Packing Factor (APF) and FCC Structure

## Definition of Atomic Packing Factor (APF)

### Definition
**Atomic Packing Factor (APF)** is the fraction of the unit cell volume occupied by atoms.

### Formula

\[
\boxed{\text{APF}=\frac{\text{Volume occupied by atoms}}{\text{Volume of unit cell}}}
\]

---

## Face-Centered Cubic (FCC) Structure

### Number of Atoms per Unit Cell

In an FCC unit cell:

- 8 corner atoms × 1/8 = 1 atom
- 6 face-centered atoms × 1/2 = 3 atoms

Therefore,

\[
\boxed{\text{Number of atoms}=1+3=4}
\]

---

## Calculation of APF for FCC

Relationship between edge length and atomic radius:

\[
a=2\sqrt{2}\,r
\]

### Volume occupied by atoms

There are 4 atoms in one FCC unit cell.

Volume of one atom:

\[
\frac{4}{3}\pi r^3
\]

Total atomic volume:

\[
4\times\frac{4}{3}\pi r^3
=
\frac{16}{3}\pi r^3
\]

---

### Volume of Unit Cell

\[
a^3=(2\sqrt2r)^3
=
16\sqrt2\,r^3
\]

---

### APF Calculation

\[
\text{APF}
=
\frac{\frac{16}{3}\pi r^3}{16\sqrt2r^3}
=
\frac{\pi}{3\sqrt2}
\]

\[
\boxed{\text{APF}=0.74}
\]

or

\[
\boxed{\text{APF}=74\%}
\]

---

### Final Answer

| Property | FCC |
|-----------|-----|
| Number of atoms per unit cell | **4** |
| Atomic Packing Factor | **0.74 (74%)** |

---

# 3. Fe–Fe₃C Equilibrium Diagram

## Definition

The **Fe–Fe₃C (Iron–Iron Carbide) equilibrium diagram** is a phase diagram showing the phases present in iron-carbon alloys under equilibrium cooling conditions. It is widely used in metallurgy to study steels and cast irons. :contentReference[oaicite:2]{index=2}

---

## Neatly Labeled Sketch

```text
Temperature (°C)

1600 |                               Liquid
     |                                 /\
1538 |--------------------------------/  \----------------
     |                              /      \
1493 |-----------Peritectic--------/        \
     |                            /          \
1394 |-----------δ Ferrite--------            \
     |                                        \
1147 |----------------------Eutectic-----------●
     |                         (4.3%C)          \
     |                                           \
 912 |-----------γ (Austenite)--------------------\
     |                                             \
 727 |================Eutectoid=====================●
     |                 (0.76%C)                     \
     |                                             Fe₃C
     |
     | α + Pearlite      Pearlite      Pearlite + Cementite
     |
     +------------------------------------------------------------>
      0      0.76      2.11        4.3              6.67
                   Carbon Content (wt%)
```

---

## Important Phases

- **Liquid (L)**
- **δ-Ferrite (BCC)**
- **γ-Austenite (FCC)**
- **α-Ferrite (BCC)**
- **Cementite (Fe₃C)**

---

## Important Invariant Reactions

### Peritectic Reaction

- Temperature: **1493°C**
- Carbon: **0.16%**

\[
\boxed{L+\delta \rightarrow \gamma}
\]

---

### Eutectic Reaction

- Temperature: **1147°C**
- Carbon: **4.3%**

\[
\boxed{L \rightarrow \gamma + Fe_3C}
\]

---

### Eutectoid Reaction

- Temperature: **727°C**
- Carbon: **0.76%**

\[
\boxed{\gamma \rightarrow \alpha + Fe_3C}
\]

The eutectoid product is called **Pearlite**.

---

## Applications

- Selection of heat treatment temperatures.
- Prediction of steel microstructures.
- Design of steels and cast irons.
- Understanding phase transformations during cooling and heating.

---

# Short Exam Answers

## Q1

**Fatigue:** Failure caused by repeated cyclic loading below the yield strength.

**Creep:** Slow permanent deformation under constant load at high temperature.

---

## Q2

**Atomic Packing Factor (APF):**

\[
\boxed{\text{APF}=\frac{\text{Volume of atoms}}{\text{Volume of unit cell}}}
\]

For FCC:

- Number of atoms = **4**
- APF = **0.74 (74%)**

---

## Q3

Draw and label the Fe–Fe₃C equilibrium diagram showing:

- Liquid
- δ-Ferrite
- γ-Austenite
- α-Ferrite
- Cementite (Fe₃C)
- Peritectic point (1493°C)
- Eutectic point (1147°C, 4.3%C)
- Eutectoid point (727°C, 0.76%C)