---
subject: PHY-103
topic: Coulomb's Law & Electric Field
date: 2026-06-03
tags: [physics, electricity, coulombs-law, electric-field, electrostatics]
---

# Coulomb's Law & Electric Field

## 1. Introduction

Electricity is the branch of physics dealing with electric charges, their interactions, and the phenomena they produce. At its foundation lies the concept of **electric charge** — an intrinsic property of matter that causes it to experience force in an electromagnetic field.

> **Key Fact:** There are two types of electric charge — **positive** (+) and **negative** (−). Like charges repel; unlike charges attract.

---

## 2. Electric Charge

### 2.1 Properties of Electric Charge

- Charge is quantized: $q = ne$, where $n$ is an integer and $e = 1.602 \times 10^{-19}$ C (elementary charge)
- Charge is conserved: the total charge in an isolated system is constant
- Charge is invariant: independent of the observer's frame of reference

### 2.2 The Coulomb (Unit)

The SI unit of charge is the **Coulomb (C)**.

From current and time:

$$i = \frac{q}{t} \implies q = it$$

**Definition:** One coulomb is the amount of charge that flows in 1 second when there is a steady current of 1 ampere.

$$1 \text{ C} = 1 \text{ A} \cdot \text{s}$$

---

## 3. Coulomb's Law

### 3.1 Statement

> *"The electrostatic force acting between two point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them."*

```
        q₁            q₂
        O──────────────O
               d
```

Mathematically:

$$F \propto q_1 q_2 \qquad \text{and} \qquad F \propto \frac{1}{d^2}$$

Combining:

$$\boxed{F = k\frac{q_1 q_2}{d^2} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{q_1 q_2}{d^2}}$$

### 3.2 Constants

| Symbol | Name | Value |
|:------:|:-----|:------|
| $k$ | Coulomb's constant | $8.99 \times 10^9 \ \text{N·m}^2/\text{C}^2$ |
| $\varepsilon_0$ | Permittivity of free space | $8.854 \times 10^{-12} \ \text{C}^2/\text{N·m}^2$ |

Relationship: $k = \dfrac{1}{4\pi\varepsilon_0}$

### 3.3 Vector Form

The force on charge $q_1$ due to $q_2$ is:

$$\vec{F}_{12} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{q_1 q_2}{r_{12}^2} \hat{r}_{12}$$

where $\hat{r}_{12}$ is the unit vector pointing **from** $q_2$ **to** $q_1$.

> **Sign Convention:**
> - $F > 0$ → repulsive (charges same sign)
> - $F < 0$ → attractive (charges opposite sign)

### 3.4 Superposition Principle

The net force on a charge due to multiple charges is the **vector sum** of individual forces:

$$\vec{F}_1 = \vec{F}_{12} + \vec{F}_{13} + \vec{F}_{14} + \cdots = \sum_{i \neq 1} \vec{F}_{1i}$$

---

## 4. Electric Field

### 4.1 Definition

The **electric field** $\vec{E}$ at a point is defined as the force per unit positive test charge $q_0$ placed at that point:

$$\vec{E} = \frac{\vec{F}}{q_0} = \lim_{q_0 \to 0} \frac{\vec{F}}{q_0}$$

SI unit: **N/C** or equivalently **V/m**

### 4.2 Electric Field due to a Point Charge

From Coulomb's law, if charge $q$ is at the origin and test charge $q_0$ is at distance $r$:

$$F = \frac{1}{4\pi\varepsilon_0} \cdot \frac{q \cdot q_0}{r^2}$$

Since $E = F/q_0$:

$$\boxed{E = \frac{1}{4\pi\varepsilon_0} \cdot \frac{q}{r^2}}$$

In vector form:

$$\vec{E} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{q}{r^2} \hat{r}$$

### 4.3 Superposition of Electric Fields

For a system of $n$ charges:

$$\vec{E} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + \cdots = \sum_{i=1}^{n} \vec{E}_i$$

For a continuous charge distribution:

$$dE = \frac{1}{4\pi\varepsilon_0} \cdot \frac{dq}{r^2} \implies E = \int dE$$

### 4.4 Electric Field Lines

```
         Positive Charge          Negative Charge
         ↗  ↑  ↖                   ↘  ↓  ↙
        →   (+)  ←                 →   (-)  ←
         ↘  ↓  ↙                   ↗  ↑  ↖
         (outward)                 (inward)
```

**Properties:**
- Field lines originate on positive charges and terminate on negative charges
- Field lines never cross
- Density of lines indicates field strength
- Field lines are perpendicular to equipotential surfaces

---

## 5. Electric Field due to a Uniform Line Charge

Consider an infinite line of charge with linear charge density $\lambda$ (C/m). At a perpendicular distance $y$ from the wire:

**Setup:** Consider element $dx$ at position $x$ along wire.

Charge element: $dq = \lambda \, dx$

Field contribution: $dE = \dfrac{1}{4\pi\varepsilon_0} \cdot \dfrac{dq}{r^2}$, where $r^2 = x^2 + y^2$

The field resolves into:

$$dE_x = -dE\sin\theta \qquad dE_y = dE\cos\theta$$

By symmetry, $E_x = 0$ (contributions cancel from $+x$ and $-x$ halves).

For $E_y$:

$$E_y = 2\int_0^{\infty} \frac{\lambda \, dx}{4\pi\varepsilon_0(x^2+y^2)} \cdot \cos\theta$$

**Substitution:** Let $x = y\tan\theta$, so $dx = y\sec^2\theta \, d\theta$ and $r = y\sec\theta$:

$$E_y = 2\int_0^{\pi/2} \frac{\lambda}{4\pi\varepsilon_0} \cdot \frac{y\sec^2\theta \, d\theta}{y^2\sec^2\theta} \cdot \cos\theta = \frac{\lambda}{2\pi\varepsilon_0 y}\int_0^{\pi/2}\cos\theta \, d\theta$$

$$\boxed{E = \frac{\lambda}{2\pi\varepsilon_0 r}}$$

where $r$ is the perpendicular distance from the wire.

---

## 6. Worked Examples

### Example 1: Force Between Two Charges

**Given:** $q_1 = +2.0 \, \mu\text{C}$, $q_2 = -3.0 \, \mu\text{C}$, $d = 0.10$ m

**Find:** Force between them.

**Solution:**

$$F = \frac{1}{4\pi\varepsilon_0} \cdot \frac{|q_1||q_2|}{d^2} = (8.99\times10^9) \cdot \frac{(2.0\times10^{-6})(3.0\times10^{-6})}{(0.10)^2}$$

$$F = (8.99\times10^9) \cdot \frac{6.0\times10^{-12}}{0.01} = 5.39 \text{ N (attractive)}$$

---

### Example 2: Three-Charge Problem (From Class Notes)

**Given:**

| Quantity | Value |
|:---------|:------|
| $q_1$ | $-1.0 \times 10^{-6}$ C (at origin) |
| $q_2$ | $+3.0 \times 10^{-6}$ C (on +x axis) |
| $q_3$ | $-2.0 \times 10^{-6}$ C (upper-left at angle 30°) |
| $r_{1,2}$ | 15 cm = 0.15 m |
| $r_{1,3}$ | 10 cm = 0.10 m |
| $\theta$ | 30° |

**Find:** Net force $\vec{F}_1$ on $q_1$.

**Step 1:** Force $F_{1,2}$ between $q_1$ and $q_2$:

$$F_{1,2} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{|q_1||q_2|}{r_{1,2}^2} = (8.99\times10^9) \cdot \frac{(1.0\times10^{-6})(3.0\times10^{-6})}{(0.15)^2}$$

$$F_{1,2} = (8.99\times10^9) \cdot \frac{3\times10^{-12}}{0.0225} = 1.2 \text{ N}$$

Since $q_2 > q_1$ (opposite signs), $\vec{F}_{1,2}$ points in **+x direction**.

**Step 2:** Force $F_{1,3}$ between $q_1$ and $q_3$:

$$F_{1,3} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{|q_1||q_3|}{r_{1,3}^2} = (8.99\times10^9) \cdot \frac{(1.0\times10^{-6})(2.0\times10^{-6})}{(0.10)^2}$$

$$F_{1,3} = 1.8 \text{ N}$$

Since $q_1$ and $q_3$ have the same sign (both negative), $\vec{F}_{1,3}$ is **repulsive** — directed away from $q_3$.

**Step 3:** Resolve into components.

$q_3$ is at angle $\theta = 30°$ above $-x$ direction, so the force on $q_1$ from $q_3$ points in the **fourth quadrant** (lower-left direction from $q_3$ to $q_1$, but repulsive so downward-right from $q_1$):

$$F_{1,x} = F_{1,2}\cos 0° + F_{1,3}\sin\theta = 1.2 + 1.8\times\sin 30° = 1.2 + 1.8 \times 0.5 = 2.1 \text{ N}$$

$$F_{1,y} = F_{1,2}\cdot 0 - F_{1,3}\cos\theta = 0 - 1.8\cos30° = -1.8\times\frac{\sqrt{3}}{2} = -1.56 \text{ N}$$

**Step 4:** Magnitude:

$$F_1 = \sqrt{F_{1,x}^2 + F_{1,y}^2} = \sqrt{(2.1)^2 + (1.56)^2} = \sqrt{4.41 + 2.43} \approx 2.61 \text{ N}$$

**Step 5:** Direction angle $\alpha$:

$$\alpha = \tan^{-1}\left(\frac{F_{1,3}\sin\theta}{F_{1,2} + F_{1,3}\cos\theta}\right) = \tan^{-1}\left(\frac{1.8\sin30°}{1.2 + 1.8\cos30°}\right) = \tan^{-1}\left(\frac{0.9}{2.76}\right) \approx 18.0°$$

> **Result:** $F_1 \approx 2.61$ N at $18.07°$ below the +x axis.

---

### Example 3: Electric Field of a Point Charge

**Given:** $q = +5.0 \, \mu\text{C}$, find $E$ at $r = 0.30$ m.

$$E = \frac{1}{4\pi\varepsilon_0}\cdot\frac{q}{r^2} = (8.99\times10^9)\cdot\frac{5.0\times10^{-6}}{(0.30)^2} = \frac{4.495\times10^4}{0.09} \approx 5.0\times10^5 \text{ N/C}$$

Direction: radially outward from $q$.

---

## 7. Comparison: Coulomb's Law vs. Newton's Gravitational Law

| Feature | Coulomb's Law | Newton's Law |
|:--------|:-------------|:-------------|
| Force type | Electrostatic | Gravitational |
| Formula | $F = k\frac{q_1 q_2}{r^2}$ | $F = G\frac{m_1 m_2}{r^2}$ |
| Can be repulsive? | Yes | No |
| Constant | $k = 8.99\times10^9$ | $G = 6.67\times10^{-11}$ |
| Relative strength | Much stronger | Much weaker |

---

## 8. Practice Problems

1. Two point charges $q_1 = +4 \, \mu\text{C}$ and $q_2 = -2 \, \mu\text{C}$ are placed 0.20 m apart. Find the force between them.

2. Three charges $q_1 = +1 \, \mu\text{C}$, $q_2 = -1 \, \mu\text{C}$, $q_3 = +1 \, \mu\text{C}$ are placed at the corners of an equilateral triangle of side 0.10 m. Find the net force on $q_1$.

3. An electron and proton are separated by $5.3 \times 10^{-11}$ m (Bohr radius). Find the electrostatic force between them.

4. The electric field at a point in space is $E = 500$ N/C directed eastward. What is the force on a $+2 \, \mu\text{C}$ charge placed there?

---

## 9. Summary of Key Formulas

$$F = \frac{1}{4\pi\varepsilon_0}\cdot\frac{q_1 q_2}{r^2} \qquad E = \frac{F}{q_0} = \frac{1}{4\pi\varepsilon_0}\cdot\frac{q}{r^2}$$

$$\text{Superposition: } \vec{F}_{net} = \sum_i \vec{F}_i \qquad \vec{E}_{net} = \sum_i \vec{E}_i$$

$$\text{Line charge: } E = \frac{\lambda}{2\pi\varepsilon_0 r}$$

---

## 10. References

- Halliday, Resnick & Walker — *Fundamentals of Physics*, 10th Ed., Chapter 21–22
- Young & Freedman — *University Physics*, 14th Ed., Chapter 21
- Serway & Jewett — *Physics for Scientists and Engineers*, 8th Ed., Chapter 23
- Khan Academy — [Electric charge, field, and potential](https://www.khanacademy.org/science/ap-physics-2/ap-electric-force-electric-field-and-potential)
- HyperPhysics — [Coulomb's Law](http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elefor.html)
- MIT OpenCourseWare — [8.02 Physics II: Electricity and Magnetism](https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/)
- Paul's Online Notes — [Electric Fields](https://tutorial.math.lamar.edu/)
