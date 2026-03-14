---
subject: MATH-101
topic: Gaussian Elimination Method — Solving Linear Systems
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, gaussian-elimination, gauss-jordan]
---

# 06. Gaussian Elimination Method

> **Syllabus Reference:** Linear Algebra → Solution of a system of linear equations, Gaussian elimination method

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Row Echelon Form (REF)](#2-row-echelon-form-ref)
3. [Reduced Row Echelon Form (RREF)](#3-reduced-row-echelon-form-rref)
4. [Gaussian Elimination — Step-by-Step](#4-gaussian-elimination--step-by-step)
5. [Gauss-Jordan Elimination](#5-gauss-jordan-elimination)
6. [Back-Substitution](#6-back-substitution)
7. [Special Cases: Free Variables](#7-special-cases-free-variables)
8. [Homogeneous Systems](#8-homogeneous-systems)
9. [Worked Examples](#9-worked-examples)
10. [Practice Problems](#10-practice-problems)
11. [References](#11-references)

---

## 1. Introduction

**Gaussian Elimination** is a systematic algorithm that uses **elementary row operations** to transform the augmented matrix $[A \mid b]$ into **Row Echelon Form**, from which the solution is obtained by **back-substitution**.

**Gauss-Jordan Elimination** extends this to **Reduced Row Echelon Form**, giving the solution directly without back-substitution.

> **Named after:** Carl Friedrich Gauss (1777–1855), who formalized the method, and Wilhelm Jordan (1842–1899), who developed the full reduction.

---

## 2. Row Echelon Form (REF)

A matrix is in **Row Echelon Form** if:

1. All zero rows are at the **bottom**
2. The **leading entry** (pivot) in each non-zero row is **strictly to the right** of the leading entry in the row above
3. All entries **below** each pivot are zero

$$
\text{REF Example:} \quad
\begin{bmatrix} \mathbf{2} & 3 & -1 & 5 \\ 0 & \mathbf{1} & 4 & 2 \\ 0 & 0 & \mathbf{3} & 7 \\ 0 & 0 & 0 & 0 \end{bmatrix}
$$

Pivots are shown in **bold**.

---

## 3. Reduced Row Echelon Form (RREF)

A matrix is in **Reduced Row Echelon Form** if it satisfies all REF conditions **plus**:

4. Each **pivot is 1**
5. All entries **above** each pivot are also zero (entire column is cleared)

$$
\text{RREF Example:} \quad
\begin{bmatrix} \mathbf{1} & 0 & 0 & 3 \\ 0 & \mathbf{1} & 0 & -1 \\ 0 & 0 & \mathbf{1} & 2 \end{bmatrix}
$$

This directly gives: $x_1 = 3$, $x_2 = -1$, $x_3 = 2$.

---

## 4. Gaussian Elimination — Step-by-Step

### Algorithm

**Input:** Augmented matrix $[A \mid b]$

**Process:**

1. Find the leftmost non-zero column (pivot column)
2. If needed, swap rows so the **pivot position** has a non-zero entry
3. Use Type 3 row operations to create **zeros below** the pivot
4. Move to the next row and repeat for the sub-matrix below
5. Continue until REF is achieved
6. Solve using **back-substitution**

---

## 5. Gauss-Jordan Elimination

Continues from REF to RREF:

7. Scale each pivot row so the pivot equals **1**
8. Use Type 3 operations to create **zeros above** each pivot as well

The result directly encodes the solution.

---

## 6. Back-Substitution

Once the system is in REF, solve from the **last non-zero row upward**:

- The last pivot equation gives the last variable directly
- Substitute back into the equation above
- Continue upward until all variables are found

---

## 7. Special Cases: Free Variables

If after elimination, some variable has **no pivot in its column**, it is a **free variable** — it can take any value (parameter), and the other variables are expressed in terms of it.

**Number of free variables** = $n - \text{rank}(A)$

---

## 8. Homogeneous Systems

The system $Ax = 0$ is always consistent (trivial solution $x = 0$ always exists).

- If $\text{rank}(A) = n$ → **only trivial solution** $x = 0$
- If $\text{rank}(A) < n$ → **infinitely many solutions** (non-trivial solutions exist)

---

## 9. Worked Examples

### Example 1 — Gaussian Elimination (Unique Solution)

**System:**

$$
\begin{cases}
x_1 + 2x_2 - x_3 = 1 \\
2x_1 + 5x_2 + 2x_3 = 2 \\
-x_1 + x_2 + 3x_3 = -1
\end{cases}
$$

**Augmented matrix:**

$$
\left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 2 & 5 & 2 & 2 \\ -1 & 1 & 3 & -1 \end{array}\right]
$$

**Step 1:** $R_2 \leftarrow R_2 - 2R_1$; $R_3 \leftarrow R_3 + R_1$:

$$
\left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 1 & 4 & 0 \\ 0 & 3 & 2 & 0 \end{array}\right]
$$

**Step 2:** $R_3 \leftarrow R_3 - 3R_2$:

$$
\left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 1 & 4 & 0 \\ 0 & 0 & -10 & 0 \end{array}\right]
$$

This is **REF**. Now back-substitute:

$$
-10x_3 = 0 \implies x_3 = 0
$$

$$
x_2 + 4(0) = 0 \implies x_2 = 0
$$

$$
x_1 + 2(0) - 0 = 1 \implies x_1 = 1
$$

**Solution:** $(x_1, x_2, x_3) = (1, 0, 0)$

---

### Example 2 — Gauss-Jordan (Unique Solution)

**System:**

$$
\begin{cases}
x + y + z = 6 \\
2x + y - z = 3 \\
x - y + 2z = 5
\end{cases}
$$

**Augmented matrix:**

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & 1 & -1 & 3 \\ 1 & -1 & 2 & 5 \end{array}\right]
$$

**Forward elimination:**

$R_2 \leftarrow R_2 - 2R_1$; $R_3 \leftarrow R_3 - R_1$:

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -3 & -9 \\ 0 & -2 & 1 & -1 \end{array}\right]
$$

$R_2 \leftarrow -R_2$; $R_3 \leftarrow R_3 - 2R_2$:

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & 3 & 9 \\ 0 & 0 & 7 & 17 \end{array}\right]
$$

$R_3 \leftarrow \frac{1}{7}R_3$:

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & 3 & 9 \\ 0 & 0 & 1 & 17/7 \end{array}\right]
$$

**Back-elimination (to RREF):**

$R_2 \leftarrow R_2 - 3R_3$; $R_1 \leftarrow R_1 - R_3$:

$$
\left[\begin{array}{ccc|c} 1 & 1 & 0 & 25/7 \\ 0 & 1 & 0 & 12/7 \\ 0 & 0 & 1 & 17/7 \end{array}\right]
$$

$R_1 \leftarrow R_1 - R_2$:

$$
\left[\begin{array}{ccc|c} 1 & 0 & 0 & 13/7 \\ 0 & 1 & 0 & 12/7 \\ 0 & 0 & 1 & 17/7 \end{array}\right]
$$

**Solution:** $x = \frac{13}{7}$, $y = \frac{12}{7}$, $z = \frac{17}{7}$

---

### Example 3 — Free Variables (Infinitely Many Solutions)

**System:**

$$
\begin{cases}
x + 2y + 3z = 4 \\
2x + 4y + 6z = 8
\end{cases}
$$

**Augmented matrix:**

$$
\left[\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 2 & 4 & 6 & 8 \end{array}\right]
\xrightarrow{R_2 - 2R_1}
\left[\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 0 \end{array}\right]
$$

Rank = 1, $n = 3$, so $3 - 1 = 2$ free variables.

Let $y = s$, $z = t$ (free parameters).

From row 1: $x = 4 - 2s - 3t$

**General solution:**

$$
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
= \begin{pmatrix} 4 \\ 0 \\ 0 \end{pmatrix}
+ s\begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}
+ t\begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix}
$$

---

## 10. Practice Problems

1. Solve using Gaussian elimination:
$$\begin{cases} 2x + y = 5 \\ x - 3y = -4 \end{cases}$$

2. Solve using Gauss-Jordan elimination:
$$\begin{cases} x + y - z = 2 \\ 2x - y + z = 3 \\ -x + 2y + z = 4 \end{cases}$$

3. Find the general solution (including free variables):
$$\begin{cases} x_1 + 2x_2 - x_3 + x_4 = 0 \\ 2x_1 + 4x_2 - 2x_3 = 1 \end{cases}$$

4. For which value of $k$ does the system have: (a) a unique solution, (b) no solution, (c) infinitely many solutions?
$$\begin{cases} x + ky = 2 \\ kx + y = 3 \end{cases}$$

---

## 11. References

- **Textbook:** Gilbert Strang, *Introduction to Linear Algebra*, 5th Ed. — Chapter 2
- **Online:**
  - [MIT OCW — Elimination with Matrices](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - [Khan Academy — Gaussian Elimination](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/matrices-elimination)
  - [Paul's Online Notes — Gaussian Elimination](https://tutorial.math.lamar.edu/Classes/Alg/SystemsOfEquations.aspx)
  - [3Blue1Brown — Linear Systems](https://www.youtube.com/watch?v=uQhTuRlWMxw)

---

> **Previous:** [05 — Elementary Operations](./05_elementary_operations.md) | **Next:** [07 — Cramer's Rule](./07_cramers_rule.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
