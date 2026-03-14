---
subject: MATH-101
topic: Determinant — Definition, Properties, and Calculation
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, determinant, mathematics]
---

# 02. Determinant — Definition, Properties & Calculation

> **Syllabus Reference:** Linear Algebra → Determinant

---

## Table of Contents

1. [Definition of Determinant](#1-definition-of-determinant)
2. [Determinant of 1×1 and 2×2 Matrices](#2-determinant-of-1x1-and-2x2-matrices)
3. [Determinant of a 3×3 Matrix](#3-determinant-of-a-3x3-matrix)
4. [Minors and Cofactors](#4-minors-and-cofactors)
5. [Cofactor Expansion (Laplace Expansion)](#5-cofactor-expansion-laplace-expansion)
6. [Properties of Determinants](#6-properties-of-determinants)
7. [Determinant of Special Matrices](#7-determinant-of-special-matrices)
8. [Worked Examples](#8-worked-examples)
9. [Practice Problems](#9-practice-problems)
10. [References](#10-references)

---

## 1. Definition of Determinant

The **determinant** is a scalar value computed from a **square matrix** that encodes fundamental algebraic properties of the matrix. It is denoted:

$$
\det(A) \quad \text{or} \quad |A|
$$

Geometrically, $|\det(A)|$ represents the **scaling factor** by which the linear transformation described by $A$ changes areas (in 2D) or volumes (in 3D).

> **Key Insight:** If $\det(A) = 0$, the matrix is **singular** (non-invertible). If $\det(A) \neq 0$, the matrix is **non-singular** (invertible).

---

## 2. Determinant of 1×1 and 2×2 Matrices

### 1×1 Matrix

$$
A = [a], \quad \det(A) = a
$$

### 2×2 Matrix

$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}
$$

$$
\det(A) = ad - bc
$$

This is the **cross-multiplication** rule.

**Example:**

$$
A = \begin{bmatrix} 3 & 2 \\ 1 & 4 \end{bmatrix}
$$

$$
\det(A) = (3)(4) - (2)(1) = 12 - 2 = 10
$$

---

## 3. Determinant of a 3×3 Matrix

### Sarrus' Rule (Diagonal Method)

For:
$$
A = \begin{bmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{bmatrix}
$$

$$
\det(A) = a_1(b_2 c_3 - b_3 c_2) - b_1(a_2 c_3 - a_3 c_2) + c_1(a_2 b_3 - a_3 b_2)
$$

**Example:**

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}
$$

$$
\det(A) = 1(5 \cdot 9 - 6 \cdot 8) - 2(4 \cdot 9 - 6 \cdot 7) + 3(4 \cdot 8 - 5 \cdot 7)
$$

$$
= 1(45 - 48) - 2(36 - 42) + 3(32 - 35)
$$

$$
= 1(-3) - 2(-6) + 3(-3) = -3 + 12 - 9 = 0
$$

> This matrix is **singular** (rows are in arithmetic progression, hence linearly dependent).

---

## 4. Minors and Cofactors

### Minor $M_{ij}$

The **minor** $M_{ij}$ of element $a_{ij}$ is the determinant of the submatrix obtained by **deleting row $i$ and column $j$**.

### Cofactor $C_{ij}$

$$
C_{ij} = (-1)^{i+j} M_{ij}
$$

The sign pattern for a $3 \times 3$ matrix:

$$
\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}
$$

**Example:** For $A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 1 & 0 & 6 \end{bmatrix}$

$$
M_{11} = \begin{vmatrix} 4 & 5 \\ 0 & 6 \end{vmatrix} = 24 - 0 = 24
$$

$$
C_{11} = (+1)^{1+1} \cdot 24 = 24
$$

$$
M_{12} = \begin{vmatrix} 0 & 5 \\ 1 & 6 \end{vmatrix} = 0 - 5 = -5
$$

$$
C_{12} = (-1)^{1+2} \cdot (-5) = +5
$$

---

## 5. Cofactor Expansion (Laplace Expansion)

The determinant can be expanded along **any row or column**:

**Along row $i$:**
$$
\det(A) = \sum_{j=1}^{n} a_{ij} C_{ij}
$$

**Along column $j$:**
$$
\det(A) = \sum_{i=1}^{n} a_{ij} C_{ij}
$$

> **Tip:** Choose the row or column with the **most zeros** to minimize calculation.

**Full Example:**

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 1 & 0 & 6 \end{bmatrix}
$$

Expanding along Row 1:

$$
\det(A) = 1 \cdot C_{11} + 2 \cdot C_{12} + 3 \cdot C_{13}
$$

$$
C_{11} = \begin{vmatrix} 4 & 5 \\ 0 & 6 \end{vmatrix} = 24
$$

$$
C_{12} = -\begin{vmatrix} 0 & 5 \\ 1 & 6 \end{vmatrix} = -(0-5) = 5
$$

$$
C_{13} = \begin{vmatrix} 0 & 4 \\ 1 & 0 \end{vmatrix} = (0-4) = -4
$$

$$
\det(A) = 1(24) + 2(5) + 3(-4) = 24 + 10 - 12 = \boxed{22}
$$

---

## 6. Properties of Determinants

### Property 1 — Transpose

$$
\det(A^T) = \det(A)
$$

### Property 2 — Row/Column Swap

Swapping two rows (or columns) **changes the sign** of the determinant:

$$
\text{If } B \text{ is } A \text{ with rows } i \text{ and } j \text{ swapped: } \det(B) = -\det(A)
$$

### Property 3 — Scalar Multiple

Multiplying **one row** by scalar $k$ multiplies the determinant by $k$:

$$
\det(kA) = k^n \det(A) \quad (\text{for an } n \times n \text{ matrix})
$$

### Property 4 — Repeated Rows/Columns

If two rows (or columns) are identical, $\det(A) = 0$.

**Proof:** Swapping the two identical rows gives $\det(B) = -\det(A)$. But $B = A$, so $\det(A) = -\det(A) \implies \det(A) = 0$. $\blacksquare$

### Property 5 — Row of Zeros

If any row (or column) is all zeros, $\det(A) = 0$.

### Property 6 — Row Addition

Adding a **multiple of one row to another** does **not** change the determinant. This is the basis of Gaussian elimination for determinants.

### Property 7 — Product Rule

$$
\det(AB) = \det(A) \cdot \det(B)
$$

**Proof sketch:** Uses the multiplicative nature of determinants over elementary matrices.

### Property 8 — Inverse Determinant

$$
\det(A^{-1}) = \frac{1}{\det(A)}
$$

This follows from $\det(A) \cdot \det(A^{-1}) = \det(I) = 1$.

### Summary Table

| Property | Formula |
|:---|:---|
| Transpose | $\det(A^T) = \det(A)$ |
| Row swap | $\det(B) = -\det(A)$ |
| Scalar multiple | $\det(kA) = k^n \det(A)$ |
| Repeated rows | $\det(A) = 0$ |
| Zero row | $\det(A) = 0$ |
| Row addition | Determinant unchanged |
| Product | $\det(AB) = \det(A)\det(B)$ |
| Inverse | $\det(A^{-1}) = 1/\det(A)$ |

---

## 7. Determinant of Special Matrices

### Triangular Matrix

The determinant of a **triangular matrix** (upper or lower) equals the **product of its diagonal entries**:

$$
\det(U) = u_{11} \cdot u_{22} \cdot u_{33} \cdots u_{nn}
$$

**Example:**

$$
U = \begin{bmatrix} 2 & 3 & 1 \\ 0 & 4 & 7 \\ 0 & 0 & 5 \end{bmatrix}
$$

$$
\det(U) = 2 \times 4 \times 5 = 40
$$

### Diagonal Matrix

$$
\det(D) = d_1 \cdot d_2 \cdots d_n
$$

### Identity Matrix

$$
\det(I_n) = 1
$$

---

## 8. Worked Examples

### Example 1 — Evaluate 3×3 determinant

$$
A = \begin{bmatrix} 2 & -1 & 3 \\ 1 & 4 & -2 \\ -3 & 2 & 1 \end{bmatrix}
$$

Expand along Row 1:

$$
\det(A) = 2\begin{vmatrix} 4 & -2 \\ 2 & 1 \end{vmatrix}
-(-1)\begin{vmatrix} 1 & -2 \\ -3 & 1 \end{vmatrix}
+3\begin{vmatrix} 1 & 4 \\ -3 & 2 \end{vmatrix}
$$

$$
= 2(4+4) + 1(1-6) + 3(2+12) = 2(8) + (-5) + 3(14)
$$

$$
= 16 - 5 + 42 = \boxed{53}
$$

### Example 2 — Prove $\det(A) = 0$

Show that if two rows of a matrix are proportional (one is a scalar multiple of another), the determinant is zero.

**Proof:** Suppose row 2 = $k \cdot$ row 1. Factor $k$ out of row 2:

$$
\det(A) = k \cdot \det(B)
$$

where $B$ has rows 1 and 2 identical. By Property 4, $\det(B) = 0$. Therefore $\det(A) = 0$. $\blacksquare$

---

## 9. Practice Problems

1. Find $\det(A)$ where $A = \begin{bmatrix} 5 & 3 \\ 2 & 4 \end{bmatrix}$.

2. Evaluate $\begin{vmatrix} 1 & 2 & 0 \\ 3 & -1 & 2 \\ 0 & 1 & 4 \end{vmatrix}$.

3. Without computing, explain why $\det\begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 2 \end{bmatrix} = 0$.

4. If $\det(A) = 6$, find $\det(3A)$ for a $3 \times 3$ matrix.

5. Prove: $\det(A^2) = [\det(A)]^2$.

---

## 10. References

- **Textbook:** Gilbert Strang, *Introduction to Linear Algebra*, 5th Edition — Chapter 4
- **Online:**
  - [MIT OCW — Determinants](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/lecture-notes/)
  - [Khan Academy — Determinants](https://www.khanacademy.org/math/linear-algebra/matrix-transformations/determinant-depth/v/linear-algebra-determinant-when-row-multiplied-by-scalar)
  - [Paul's Online Notes — Determinants](https://tutorial.math.lamar.edu/Classes/LinAlg/Determinants.aspx)
  - [Brilliant.org — Determinants](https://brilliant.org/wiki/determinants/)

---

> **Previous:** [01 — Matrix Fundamentals](./01_matrix_fundamentals.md) | **Next:** [03 — Inverse Matrix](./03_inverse_matrix.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
