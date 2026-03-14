---
subject: MATH-101
topic: Triangular, Echelon & Canonical Form of a Matrix
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, echelon-form, canonical-form, triangular]
---

# 08. Triangular, Echelon & Canonical Form of a Matrix

> **Syllabus Reference:** Linear Algebra → Triangular, Echelon and Canonical Form of Matrix

---

## Table of Contents

1. [Triangular Form](#1-triangular-form)
2. [Row Echelon Form (REF)](#2-row-echelon-form-ref)
3. [Reduced Row Echelon Form — Canonical Form (RREF)](#3-reduced-row-echelon-form--canonical-form-rref)
4. [Relationship Between the Forms](#4-relationship-between-the-forms)
5. [Uniqueness of RREF](#5-uniqueness-of-rref)
6. [Normal (Canonical) Form](#6-normal-canonical-form)
7. [Pivot Positions and Free Columns](#7-pivot-positions-and-free-columns)
8. [Worked Examples](#8-worked-examples)
9. [Practice Problems](#9-practice-problems)
10. [References](#10-references)

---

## 1. Triangular Form

### Upper Triangular Matrix

A matrix where all entries **below** the main diagonal are zero:

$$
U = \begin{bmatrix}
u_{11} & u_{12} & u_{13} & u_{14} \\
0 & u_{22} & u_{23} & u_{24} \\
0 & 0 & u_{33} & u_{34} \\
0 & 0 & 0 & u_{44}
\end{bmatrix}
$$

**Key property:** $\det(U) = u_{11} \cdot u_{22} \cdot u_{33} \cdot u_{44}$

### Lower Triangular Matrix

All entries **above** the main diagonal are zero:

$$
L = \begin{bmatrix}
l_{11} & 0 & 0 & 0 \\
l_{21} & l_{22} & 0 & 0 \\
l_{31} & l_{32} & l_{33} & 0 \\
l_{41} & l_{42} & l_{43} & l_{44}
\end{bmatrix}
$$

### LU Decomposition

Gaussian elimination essentially factors any matrix $A$ (with suitable row permutations) into:

$$
A = LU
$$

where $L$ is lower triangular and $U$ is upper triangular. This is extremely useful for solving systems with multiple right-hand sides.

---

## 2. Row Echelon Form (REF)

### Definition

A matrix is in **Row Echelon Form (REF)** if:

1. All **zero rows** are at the bottom
2. The **leading entry** (first non-zero element) of each non-zero row is strictly to the **right** of the leading entry in the row above it
3. All entries **below** each leading entry are **zero**

The leading entries are called **pivots**.

### General Structure of REF

$$
\begin{bmatrix}
\boxed{*} & * & * & * & * \\
0 & \boxed{*} & * & * & * \\
0 & 0 & 0 & \boxed{*} & * \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

$\boxed{*}$ = pivot (non-zero), $*$ = any value, and empty positions in rows below pivots are zero.

**Staircase pattern:** The pivots form a "staircase" going down and to the right.

### Example

$$
A = \begin{bmatrix}
1 & 3 & -2 & 5 \\
0 & 0 & 4 & 1 \\
0 & 0 & 0 & 7 \\
0 & 0 & 0 & 0
\end{bmatrix} \quad \checkmark \text{ REF}
$$

Pivots are in columns 1, 3, 4. Column 2 is a **free column** (no pivot).

---

## 3. Reduced Row Echelon Form — Canonical Form (RREF)

### Definition

A matrix is in **Reduced Row Echelon Form (RREF)** (also called **canonical form** or **row canonical form**) if it satisfies all REF conditions **plus**:

4. Every **pivot is exactly 1**
5. All entries **above** each pivot are also **zero** (the entire pivot column has zeros except at the pivot)

### General Structure of RREF

$$
\begin{bmatrix}
\mathbf{1} & * & 0 & 0 & * \\
0 & 0 & \mathbf{1} & 0 & * \\
0 & 0 & 0 & \mathbf{1} & * \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

Pivot columns contain exactly one $1$ and all other entries are $0$.

### RREF Examples

**3×3 (unique solution case):**

$$
\begin{bmatrix}
1 & 0 & 0 & | & 3 \\
0 & 1 & 0 & | & -1 \\
0 & 0 & 1 & | & 2
\end{bmatrix}
\implies x_1 = 3,\ x_2 = -1,\ x_3 = 2
$$

**3×4 (free variable case):**

$$
\begin{bmatrix}
1 & 2 & 0 & 3 \\
0 & 0 & 1 & -4 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

Pivots in columns 1, 3. Column 2 is free ($x_2 = t$):

$$
x_1 = 3 - 2t - 3x_4,\quad x_3 = -4 + 4x_4
$$

---

## 4. Relationship Between the Forms

$$
\text{Triangular Matrix} \subseteq \text{REF} \subseteq \text{RREF}
$$

| Property | Triangular | REF | RREF |
|:---|:---:|:---:|:---:|
| Zeros below pivots | ✓ | ✓ | ✓ |
| Staircase pivot pattern | Not required | ✓ | ✓ |
| Pivots equal to 1 | ✗ | ✗ | ✓ |
| Zeros above pivots | ✗ | ✗ | ✓ |
| Unique for each matrix | ✗ | ✗ | ✓ |

---

## 5. Uniqueness of RREF

> **Theorem:** Every matrix has a **unique** Reduced Row Echelon Form, regardless of the sequence of row operations used to obtain it.

This is a deep theorem. By contrast, REF is **not unique** — different sequences of row operations can lead to different REFs for the same matrix.

---

## 6. Normal (Canonical) Form

The **Normal Form** of an $m \times n$ matrix $A$ of rank $r$ is:

$$
N = \begin{bmatrix} I_r & O \\ O & O \end{bmatrix}
$$

where $I_r$ is the $r \times r$ identity matrix and $O$ represents zero blocks.

This is obtained using **both** row and column operations (not just row operations).

**Example:** If $A$ is $3 \times 4$ with rank 2:

$$
N = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}
$$

The normal form completely characterizes a matrix up to row and column equivalence.

---

## 7. Pivot Positions and Free Columns

### Pivot Columns and Rows

- **Pivot column**: A column containing a pivot
- **Free column**: A column with no pivot
- **Number of pivots** = rank of the matrix

### Free Variables

In the system $Ax = b$:
- Variables corresponding to **pivot columns** → **basic (dependent) variables**
- Variables corresponding to **free columns** → **free variables** (parameters)
- Number of free variables = $n - \text{rank}(A)$

---

## 8. Worked Examples

### Example 1 — Reduce to REF and RREF

$$
A = \begin{bmatrix} 0 & 3 & -6 & 6 & 4 \\ 3 & -7 & 8 & -5 & 8 \\ 3 & -9 & 12 & -9 & 6 \end{bmatrix}
$$

**Step 1:** Swap $R_1 \leftrightarrow R_2$:

$$
\begin{bmatrix} 3 & -7 & 8 & -5 & 8 \\ 0 & 3 & -6 & 6 & 4 \\ 3 & -9 & 12 & -9 & 6 \end{bmatrix}
$$

**Step 2:** $R_3 \leftarrow R_3 - R_1$:

$$
\begin{bmatrix} 3 & -7 & 8 & -5 & 8 \\ 0 & 3 & -6 & 6 & 4 \\ 0 & -2 & 4 & -4 & -2 \end{bmatrix}
$$

**Step 3:** $R_3 \leftarrow 3R_3 + 2R_2$:

$$
\begin{bmatrix} 3 & -7 & 8 & -5 & 8 \\ 0 & 3 & -6 & 6 & 4 \\ 0 & 0 & 0 & 0 & 2 \end{bmatrix}
$$

**Step 4:** Scale: $\frac{1}{3}R_1$; $\frac{1}{3}R_2$; $\frac{1}{2}R_3$:

$$
\text{REF:} \quad \begin{bmatrix} 1 & -7/3 & 8/3 & -5/3 & 8/3 \\ 0 & 1 & -2 & 2 & 4/3 \\ 0 & 0 & 0 & 0 & 1 \end{bmatrix}
$$

**Step 5:** Clear above pivot 3 ($R_2 \leftarrow R_2 - \frac{4}{3}R_3$; $R_1 \leftarrow R_1 - \frac{8}{3}R_3$):

$$
\begin{bmatrix} 1 & -7/3 & 8/3 & -5/3 & 0 \\ 0 & 1 & -2 & 2 & 0 \\ 0 & 0 & 0 & 0 & 1 \end{bmatrix}
$$

**Step 6:** $R_1 \leftarrow R_1 + \frac{7}{3}R_2$:

$$
\text{RREF:} \quad \begin{bmatrix} 1 & 0 & -6 & 9/3 & 0 \\ 0 & 1 & -2 & 2 & 0 \\ 0 & 0 & 0 & 0 & 1 \end{bmatrix}
= \begin{bmatrix} 1 & 0 & -6 & 3 & 0 \\ 0 & 1 & -2 & 2 & 0 \\ 0 & 0 & 0 & 0 & 1 \end{bmatrix}
$$

Pivots in columns 1, 2, 5. Columns 3 and 4 are free.

---

### Example 2 — Identify REF vs Non-REF

Which matrices are in REF? Which are in RREF?

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 1 \\ 0 & 1 & 2 \end{bmatrix}
$$

**Not REF** — the pivot in row 3 (column 2) is to the **left** of the pivot in row 2 (column 3). The staircase goes backward.

$$
B = \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & -3 \\ 0 & 0 & 0 \end{bmatrix}
$$

**RREF** ✓ — pivots are 1, in columns 1 and 2, with zeros above and below.

---

## 9. Practice Problems

1. Reduce to REF:
$$A = \begin{bmatrix} 2 & 4 & -2 \\ 1 & 3 & 0 \\ -2 & -3 & 5 \end{bmatrix}$$

2. Reduce to RREF:
$$B = \begin{bmatrix} 1 & 2 & -1 & 3 \\ 2 & 4 & 0 & 8 \\ 0 & 1 & 1 & 3 \end{bmatrix}$$

3. How many free variables are in the RREF with pivots in columns 1, 3, 5 for a $3 \times 6$ system?

4. True or False: Every matrix has a unique REF. Explain.

5. Find the normal form of $A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}$.

---

## 10. References

- **Textbook:** Gilbert Strang, *Introduction to Linear Algebra*, 5th Ed. — Chapter 2.2
- **Online:**
  - [Khan Academy — Row Echelon Form](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/matrices-elimination/v/matrices-reduced-row-echelon-form-1)
  - [MIT OCW — RREF and Pivot Columns](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - [Paul's Online Notes — RREF](https://tutorial.math.lamar.edu/Classes/LinAlg/SystemsEqns.aspx)
  - [Wolfram MathWorld — Reduced Row Echelon Form](https://mathworld.wolfram.com/ReducedRowEchelonForm.html)

---

> **Previous:** [07 — Cramer's Rule](./07_cramers_rule.md) | **Next:** [09 — Rank of a Matrix](./09_rank_of_matrix.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
