---
subject: MATH-101
topic: Cramer's Rule — Solving Linear Systems via Determinants
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, cramers-rule, determinants]
---

# 07. Cramer's Rule

> **Syllabus Reference:** Linear Algebra → Cramer's Rule

---

## Table of Contents

1. [Statement of Cramer's Rule](#1-statement-of-cramers-rule)
2. [Derivation / Proof](#2-derivation--proof)
3. [Applying Cramer's Rule — Procedure](#3-applying-cramers-rule--procedure)
4. [Cramer's Rule for 2×2 Systems](#4-cramers-rule-for-2x2-systems)
5. [Cramer's Rule for 3×3 Systems](#5-cramers-rule-for-3x3-systems)
6. [Limitations of Cramer's Rule](#6-limitations-of-cramers-rule)
7. [Worked Examples](#7-worked-examples)
8. [Practice Problems](#8-practice-problems)
9. [References](#9-references)

---

## 1. Statement of Cramer's Rule

**Cramer's Rule** provides an explicit formula for the solution of a system $Ax = b$ when $A$ is a square $n \times n$ matrix with $\det(A) \neq 0$.

> **Theorem (Cramer's Rule):** If $Ax = b$ is a system of $n$ linear equations in $n$ unknowns and $\det(A) \neq 0$, then the unique solution is:
>
> $$
> x_j = \frac{\det(A_j)}{\det(A)}, \quad j = 1, 2, \ldots, n
> $$
>
> where $A_j$ is the matrix obtained by **replacing the $j$-th column of $A$ with the column vector $b$**.

---

## 2. Derivation / Proof

Consider $Ax = b$ where $A$ is $n \times n$ and $\det(A) \neq 0$.

Since $\det(A) \neq 0$, $A^{-1}$ exists and $x = A^{-1} b$.

Using the adjoint formula:

$$
A^{-1} = \frac{1}{\det(A)} \text{adj}(A)
$$

$$
x = \frac{1}{\det(A)} \text{adj}(A) \cdot b
$$

The $j$-th component of $x$ is:

$$
x_j = \frac{1}{\det(A)} \sum_{i=1}^n (\text{adj}(A))_{ji} \cdot b_i
= \frac{1}{\det(A)} \sum_{i=1}^n C_{ij} \cdot b_i
$$

This sum $\sum_{i=1}^n b_i C_{ij}$ is exactly the **cofactor expansion of $\det(A_j)$** along column $j$ (with column $j$ replaced by $b$).

Therefore:

$$
\boxed{x_j = \frac{\det(A_j)}{\det(A)}}
\quad \blacksquare
$$

---

## 3. Applying Cramer's Rule — Procedure

**Given:** System $Ax = b$ with $n$ equations and $n$ unknowns.

1. Compute $D = \det(A)$. If $D = 0$, Cramer's Rule **does not apply**.
2. For each variable $x_j$, form matrix $A_j$ by replacing **column $j$ of $A$** with $b$.
3. Compute $D_j = \det(A_j)$.
4. The solution is:

$$
x_j = \frac{D_j}{D}
$$

---

## 4. Cramer's Rule for 2×2 Systems

**System:**

$$
\begin{cases}
a_1 x + b_1 y = c_1 \\
a_2 x + b_2 y = c_2
\end{cases}
$$

$$
A = \begin{bmatrix} a_1 & b_1 \\ a_2 & b_2 \end{bmatrix}, \quad b = \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}
$$

$$
D = \det(A) = a_1 b_2 - a_2 b_1
$$

$$
D_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix} = c_1 b_2 - c_2 b_1
$$

$$
D_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix} = a_1 c_2 - a_2 c_1
$$

$$
\boxed{x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}}
$$

---

## 5. Cramer's Rule for 3×3 Systems

**System:**

$$
\begin{cases}
a_1 x + b_1 y + c_1 z = d_1 \\
a_2 x + b_2 y + c_2 z = d_2 \\
a_3 x + b_3 y + c_3 z = d_3
\end{cases}
$$

$$
D = \det\begin{bmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{bmatrix}
$$

$$
D_x = \det\begin{bmatrix} d_1 & b_1 & c_1 \\ d_2 & b_2 & c_2 \\ d_3 & b_3 & c_3 \end{bmatrix}
\quad
D_y = \det\begin{bmatrix} a_1 & d_1 & c_1 \\ a_2 & d_2 & c_2 \\ a_3 & d_3 & c_3 \end{bmatrix}
\quad
D_z = \det\begin{bmatrix} a_1 & b_1 & d_1 \\ a_2 & b_2 & d_2 \\ a_3 & b_3 & d_3 \end{bmatrix}
$$

$$
\boxed{x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}, \quad z = \frac{D_z}{D}}
$$

---

## 6. Limitations of Cramer's Rule

| Limitation | Explanation |
|:---|:---|
| **Requires square system** | Only applies when $m = n$ (equal equations and unknowns) |
| **Requires $\det(A) \neq 0$** | Does not handle singular/inconsistent/underdetermined systems |
| **Computationally expensive** | Computing $n+1$ determinants of size $n \times n$ is $O(n!)$ naive — Gaussian elimination is $O(n^3)$ |
| **Best for small systems** | Practically efficient only for $n = 2$ or $n = 3$ |

> **Practical Note:** For large systems in engineering (e.g., analyzing fabric stress tensors), **Gaussian elimination** or **matrix inversion** is far more efficient. Cramer's Rule is mainly used for theoretical purposes and small problems.

---

## 7. Worked Examples

### Example 1 — 2×2 System

**Solve:**

$$
\begin{cases} 3x + y = 7 \\ x - 2y = 0 \end{cases}
$$

$$
D = \begin{vmatrix} 3 & 1 \\ 1 & -2 \end{vmatrix} = (3)(-2) - (1)(1) = -6 - 1 = -7
$$

$$
D_x = \begin{vmatrix} 7 & 1 \\ 0 & -2 \end{vmatrix} = (7)(-2) - (1)(0) = -14
$$

$$
D_y = \begin{vmatrix} 3 & 7 \\ 1 & 0 \end{vmatrix} = (3)(0) - (7)(1) = -7
$$

$$
x = \frac{D_x}{D} = \frac{-14}{-7} = 2, \quad y = \frac{D_y}{D} = \frac{-7}{-7} = 1
$$

**Solution:** $(x, y) = (2, 1)$

**Verification:** $3(2)+(1) = 7$ ✓ and $2 - 2(1) = 0$ ✓

---

### Example 2 — 3×3 System

**Solve:**

$$
\begin{cases}
x + y + z = 6 \\
2x - y + z = 3 \\
x + 2y - z = 2
\end{cases}
$$

$$
D = \begin{vmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{vmatrix}
$$

Expanding along Row 1:

$$
= 1[(-1)(-1)-(1)(2)] - 1[(2)(-1)-(1)(1)] + 1[(2)(2)-(-1)(1)]
$$

$$
= 1[1-2] - 1[-2-1] + 1[4+1] = -1 + 3 + 5 = 7
$$

$$
D_x = \begin{vmatrix} 6 & 1 & 1 \\ 3 & -1 & 1 \\ 2 & 2 & -1 \end{vmatrix}
$$

Expand along Row 1:

$$
= 6[(-1)(-1)-(1)(2)] - 1[(3)(-1)-(1)(2)] + 1[(3)(2)-(-1)(2)]
$$

$$
= 6(1-2) - 1(-3-2) + 1(6+2) = -6 + 5 + 8 = 7
$$

$$
D_y = \begin{vmatrix} 1 & 6 & 1 \\ 2 & 3 & 1 \\ 1 & 2 & -1 \end{vmatrix}
$$

$$
= 1[(3)(-1)-(1)(2)] - 6[(2)(-1)-(1)(1)] + 1[(2)(2)-(3)(1)]
$$

$$
= 1(-3-2) - 6(-2-1) + 1(4-3) = -5 + 18 + 1 = 14
$$

$$
D_z = \begin{vmatrix} 1 & 1 & 6 \\ 2 & -1 & 3 \\ 1 & 2 & 2 \end{vmatrix}
$$

$$
= 1[(-1)(2)-(3)(2)] - 1[(2)(2)-(3)(1)] + 6[(2)(2)-(-1)(1)]
$$

$$
= 1(-2-6) - 1(4-3) + 6(4+1) = -8 - 1 + 30 = 21
$$

$$
x = \frac{7}{7} = 1, \quad y = \frac{14}{7} = 2, \quad z = \frac{21}{7} = 3
$$

**Solution:** $(x, y, z) = (1, 2, 3)$

**Verification:** $1+2+3=6$ ✓, $2-2+3=3$ ✓, $1+4-3=2$ ✓

---

## 8. Practice Problems

1. Use Cramer's Rule to solve:
$$\begin{cases} 4x - y = 9 \\ 2x + 3y = 1 \end{cases}$$

2. Solve using Cramer's Rule:
$$\begin{cases} x + 2y - z = 4 \\ 2x + y + z = 7 \\ x - y + 2z = 2 \end{cases}$$

3. Under what condition does Cramer's Rule fail? What does this tell you about the system?

4. Compare solving a $2\times2$ system using: (a) substitution, (b) Gaussian elimination, (c) Cramer's Rule. Which is fastest?

5. Prove that if $D \neq 0$ and all $D_j = 0$, then the system has only the trivial solution.

---

## 9. References

- **Textbook:** Howard Anton, *Elementary Linear Algebra*, 11th Ed. — Section 2.1
- **Online:**
  - [Khan Academy — Cramer's Rule](https://www.khanacademy.org/math/linear-algebra/matrix-transformations/determinant-depth/v/cramer-s-rule-example)
  - [Paul's Online Notes — Cramer's Rule](https://tutorial.math.lamar.edu/Classes/Alg/SystemsOfEquationsCramersRule.aspx)
  - [Brilliant.org — Cramer's Rule](https://brilliant.org/wiki/cramers-rule/)
  - [Wolfram MathWorld — Cramer's Rule](https://mathworld.wolfram.com/CramersRule.html)

---

> **Previous:** [06 — Gaussian Elimination](./06_gaussian_elimination.md) | **Next:** [08 — Echelon & Canonical Forms](./08_echelon_canonical_form.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
