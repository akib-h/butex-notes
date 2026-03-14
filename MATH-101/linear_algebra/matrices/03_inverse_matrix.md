---
subject: MATH-101
topic: Inverse Matrix — Definition, Methods & Properties
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, inverse-matrix, mathematics]
---

# 03. Inverse Matrix — Definition, Methods & Properties

> **Syllabus Reference:** Linear Algebra → Inverse Matrix, Matrix Inversion Method

---

## Table of Contents

1. [Definition of Inverse Matrix](#1-definition-of-inverse-matrix)
2. [Conditions for Invertibility](#2-conditions-for-invertibility)
3. [Inverse of a 2×2 Matrix](#3-inverse-of-a-2x2-matrix)
4. [Adjoint (Adjugate) Method](#4-adjoint-adjugate-method)
5. [Row Reduction (Gauss-Jordan) Method](#5-row-reduction-gauss-jordan-method)
6. [Properties of Inverse Matrices](#6-properties-of-inverse-matrices)
7. [Worked Examples](#7-worked-examples)
8. [Practice Problems](#8-practice-problems)
9. [References](#9-references)

---

## 1. Definition of Inverse Matrix

For a square matrix $A$ of order $n \times n$, the **inverse** (if it exists) is the matrix $A^{-1}$ such that:

$$
A A^{-1} = A^{-1} A = I_n
$$

where $I_n$ is the $n \times n$ identity matrix.

> **Note:** The inverse exists only for **square, non-singular** matrices ($\det(A) \neq 0$). If $\det(A) = 0$, the matrix is called **singular** and has no inverse.

---

## 2. Conditions for Invertibility

A square matrix $A$ is invertible if and only if **any one** of these equivalent conditions holds:

1. $\det(A) \neq 0$
2. $\text{rank}(A) = n$ (full rank)
3. The rows (or columns) of $A$ are linearly independent
4. The system $Ax = 0$ has only the trivial solution $x = 0$
5. $A$ can be reduced to $I$ using elementary row operations

---

## 3. Inverse of a 2×2 Matrix

For:
$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}
$$

$$
\boxed{A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}}
$$

where $ad - bc = \det(A) \neq 0$.

**Memory aid:** Swap the main diagonal elements, negate the off-diagonal, divide by the determinant.

**Example:**

$$
A = \begin{bmatrix} 3 & 1 \\ 5 & 2 \end{bmatrix}
$$

$$
\det(A) = 6 - 5 = 1
$$

$$
A^{-1} = \frac{1}{1}\begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix} = \begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix}
$$

**Verification:**

$$
A A^{-1} = \begin{bmatrix} 3 & 1 \\ 5 & 2 \end{bmatrix}\begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix} = \begin{bmatrix} 6-5 & -3+3 \\ 10-10 & -5+6 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I \checkmark
$$

---

## 4. Adjoint (Adjugate) Method

For an $n \times n$ matrix, the inverse is given by:

$$
\boxed{A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)}
$$

### Step-by-Step Procedure

**Step 1:** Check that $\det(A) \neq 0$.

**Step 2:** Find the **cofactor matrix** $C$ where $C_{ij} = (-1)^{i+j} M_{ij}$.

**Step 3:** The **adjoint** (adjugate) is the **transpose of the cofactor matrix**:

$$
\text{adj}(A) = C^T
$$

**Step 4:** Compute $A^{-1} = \dfrac{1}{\det(A)} \cdot \text{adj}(A)$.

---

### Complete Example — 3×3 Inverse via Adjoint

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 1 & 0 & 6 \end{bmatrix}
$$

**Step 1:** $\det(A) = 22$ (calculated in Topic 02).

**Step 2:** Compute all cofactors:

$$
C_{11} = +\begin{vmatrix} 4 & 5 \\ 0 & 6 \end{vmatrix} = 24
\quad
C_{12} = -\begin{vmatrix} 0 & 5 \\ 1 & 6 \end{vmatrix} = 5
\quad
C_{13} = +\begin{vmatrix} 0 & 4 \\ 1 & 0 \end{vmatrix} = -4
$$

$$
C_{21} = -\begin{vmatrix} 2 & 3 \\ 0 & 6 \end{vmatrix} = -12
\quad
C_{22} = +\begin{vmatrix} 1 & 3 \\ 1 & 6 \end{vmatrix} = 3
\quad
C_{23} = -\begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} = 2
$$

$$
C_{31} = +\begin{vmatrix} 2 & 3 \\ 4 & 5 \end{vmatrix} = -2
\quad
C_{32} = -\begin{vmatrix} 1 & 3 \\ 0 & 5 \end{vmatrix} = -5
\quad
C_{33} = +\begin{vmatrix} 1 & 2 \\ 0 & 4 \end{vmatrix} = 4
$$

**Step 3:** Cofactor matrix:

$$
C = \begin{bmatrix} 24 & 5 & -4 \\ -12 & 3 & 2 \\ -2 & -5 & 4 \end{bmatrix}
$$

Adjoint = $C^T$:

$$
\text{adj}(A) = \begin{bmatrix} 24 & -12 & -2 \\ 5 & 3 & -5 \\ -4 & 2 & 4 \end{bmatrix}
$$

**Step 4:**

$$
A^{-1} = \frac{1}{22}\begin{bmatrix} 24 & -12 & -2 \\ 5 & 3 & -5 \\ -4 & 2 & 4 \end{bmatrix}
$$

---

## 5. Row Reduction (Gauss-Jordan) Method

This is a more efficient method for larger matrices.

**Procedure:** Form the augmented matrix $[A \mid I]$ and apply row operations until the left side becomes $I$. The right side then becomes $A^{-1}$.

$$
[A \mid I] \xrightarrow{\text{row operations}} [I \mid A^{-1}]
$$

**Example:**

$$
A = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}
$$

Form $[A \mid I]$:

$$
\left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 5 & 3 & 0 & 1 \end{array}\right]
$$

**Operation 1:** $R_1 \leftarrow \frac{1}{2} R_1$:

$$
\left[\begin{array}{cc|cc} 1 & 1/2 & 1/2 & 0 \\ 5 & 3 & 0 & 1 \end{array}\right]
$$

**Operation 2:** $R_2 \leftarrow R_2 - 5R_1$:

$$
\left[\begin{array}{cc|cc} 1 & 1/2 & 1/2 & 0 \\ 0 & 1/2 & -5/2 & 1 \end{array}\right]
$$

**Operation 3:** $R_2 \leftarrow 2R_2$:

$$
\left[\begin{array}{cc|cc} 1 & 1/2 & 1/2 & 0 \\ 0 & 1 & -5 & 2 \end{array}\right]
$$

**Operation 4:** $R_1 \leftarrow R_1 - \frac{1}{2}R_2$:

$$
\left[\begin{array}{cc|cc} 1 & 0 & 3 & -1 \\ 0 & 1 & -5 & 2 \end{array}\right]
$$

Therefore:

$$
A^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}
$$

**Verification:** $\det(A) = 6 - 5 = 1$, so $A^{-1} = \frac{1}{1}\begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}$ ✓

---

## 6. Properties of Inverse Matrices

| Property | Formula |
|:---|:---|
| Inverse of inverse | $(A^{-1})^{-1} = A$ |
| Product inverse | $(AB)^{-1} = B^{-1} A^{-1}$ |
| Transpose inverse | $(A^T)^{-1} = (A^{-1})^T$ |
| Scalar inverse | $(kA)^{-1} = \frac{1}{k} A^{-1}$ |
| Determinant | $\det(A^{-1}) = \frac{1}{\det(A)}$ |
| Power inverse | $(A^n)^{-1} = (A^{-1})^n$ |

### Proof: $(AB)^{-1} = B^{-1} A^{-1}$

We verify by multiplying:

$$
(AB)(B^{-1} A^{-1}) = A(BB^{-1})A^{-1} = A I A^{-1} = A A^{-1} = I
$$

Similarly $(B^{-1} A^{-1})(AB) = I$. Therefore $(AB)^{-1} = B^{-1} A^{-1}$. $\blacksquare$

> **Note:** The **order reverses** for products — this is sometimes called the "shoes and socks" theorem (put socks on first, take shoes off first).

---

## 7. Worked Examples

### Example 1 — Find $A^{-1}$ using adjoint method

$$
A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}
$$

$$
\det(A) = 8 - 3 = 5
$$

$$
A^{-1} = \frac{1}{5}\begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} 4/5 & -3/5 \\ -1/5 & 2/5 \end{bmatrix}
$$

### Example 2 — Solving $AX = B$ using inverse

If $A = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}$ and $B = \begin{bmatrix} 4 \\ 7 \end{bmatrix}$, find $X$.

**Solution:** $X = A^{-1} B$

From earlier: $A^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}$

$$
X = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}\begin{bmatrix} 4 \\ 7 \end{bmatrix} = \begin{bmatrix} 12-7 \\ -20+14 \end{bmatrix} = \begin{bmatrix} 5 \\ -6 \end{bmatrix}
$$

---

## 8. Practice Problems

1. Find $A^{-1}$ if $A = \begin{bmatrix} 1 & 2 \\ 3 & 7 \end{bmatrix}$.

2. Find the inverse of $A = \begin{bmatrix} 1 & 0 & 2 \\ 2 & -1 & 3 \\ 4 & 1 & 8 \end{bmatrix}$ using Gauss-Jordan.

3. If $A^{-1} = \begin{bmatrix} 2 & 3 \\ 1 & 1 \end{bmatrix}$, find $A$.

4. Prove that if $A$ is symmetric and invertible, then $A^{-1}$ is also symmetric.

5. Show that $(A^T)^{-1} = (A^{-1})^T$.

---

## 9. References

- **Textbook:** Howard Anton, *Elementary Linear Algebra*, 11th Edition — Chapter 1.5
- **Online:**
  - [MIT OCW — Inverse Matrices](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - [Khan Academy — Inverse Matrix](https://www.khanacademy.org/math/algebra-home/alg-matrices/alg-intro-to-matrix-inverses/v/inverse-of-a-2x2-matrix)
  - [Paul's Online Notes — Inverse Matrix](https://tutorial.math.lamar.edu/Classes/Alg/SolveSystemsWithMatrices.aspx)
  - [Wolfram MathWorld — Matrix Inverse](https://mathworld.wolfram.com/MatrixInverse.html)

---

> **Previous:** [02 — Determinant](./02_determinant.md) | **Next:** [04 — System of Linear Equations](./04_system_linear_equations.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
