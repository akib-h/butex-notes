---
subject: MATH-101
topic: Rank of a Matrix — Definition, Methods & Properties
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, rank, row-space, column-space]
---

# 09. Rank of a Matrix

> **Syllabus Reference:** Linear Algebra → Rank of Matrix

---

## Table of Contents

1. [Definition of Rank](#1-definition-of-rank)
2. [Row Rank and Column Rank](#2-row-rank-and-column-rank)
3. [Methods to Find Rank](#3-methods-to-find-rank)
4. [Properties of Rank](#4-properties-of-rank)
5. [Rank-Nullity Theorem](#5-rank-nullity-theorem)
6. [Rank and Invertibility](#6-rank-and-invertibility)
7. [Worked Examples](#7-worked-examples)
8. [Practice Problems](#8-practice-problems)
9. [References](#9-references)

---

## 1. Definition of Rank

The **rank** of a matrix $A$ (denoted $\text{rank}(A)$ or $\rho(A)$) is the **maximum number of linearly independent rows** (equivalently, linearly independent columns) of $A$.

Equivalently:

$$
\text{rank}(A) = \text{number of non-zero rows in REF of } A = \text{number of pivot positions}
$$

> **Key insight:** Rank measures the "effective dimension" or the amount of genuine information contained in the matrix.

For an $m \times n$ matrix:

$$
0 \leq \text{rank}(A) \leq \min(m, n)
$$

- **Full row rank:** $\text{rank}(A) = m$ (every row is linearly independent)
- **Full column rank:** $\text{rank}(A) = n$ (every column is linearly independent)
- **Full rank:** $\text{rank}(A) = \min(m, n)$

---

## 2. Row Rank and Column Rank

- **Row rank**: Maximum number of linearly independent **rows**
- **Column rank**: Maximum number of linearly independent **columns**

> **Fundamental Theorem:** For any matrix $A$:
>
> $$\text{row rank}(A) = \text{column rank}(A)$$
>
> This common value is simply called **rank**.

**Proof sketch:** Row operations preserve the row space. The REF of $A$ has the same non-zero rows as the pivot rows, and these correspond exactly to the pivot columns which give the column rank. The equality follows from the structure of the RREF. $\blacksquare$

---

## 3. Methods to Find Rank

### Method 1 — Row Reduction to REF

1. Apply elementary row operations to reduce $A$ to REF
2. Count the number of **non-zero rows** in REF

This is the most systematic method.

### Method 2 — Determinant Method (Submatrix Method)

The rank of $A$ equals the order of the **largest non-zero minor** (determinant of a square submatrix):

$$
\text{rank}(A) = r \iff \begin{cases} \exists \text{ an } r \times r \text{ submatrix with non-zero determinant} \\ \text{all } (r+1) \times (r+1) \text{ submatrices have determinant } 0 \end{cases}
$$

### Method 3 — From RREF

After reducing to RREF, rank = number of **leading 1s** (pivots).

---

## 4. Properties of Rank

| Property | Statement |
|:---|:---|
| Non-negativity | $\text{rank}(A) \geq 0$ |
| Bound | $\text{rank}(A) \leq \min(m, n)$ |
| Transpose | $\text{rank}(A^T) = \text{rank}(A)$ |
| Zero matrix | $\text{rank}(O) = 0$ |
| Identity | $\text{rank}(I_n) = n$ |
| Row operations | Rank unchanged by elementary row/column operations |
| Product | $\text{rank}(AB) \leq \min(\text{rank}(A), \text{rank}(B))$ |
| Sum | $\text{rank}(A+B) \leq \text{rank}(A) + \text{rank}(B)$ |

### Proof: Rank is Preserved by Row Operations

Row operations correspond to pre-multiplication by elementary matrices, which are invertible. Multiplying by an invertible matrix does not change the row space, hence does not change the rank. $\blacksquare$

### Proof: $\text{rank}(A^T) = \text{rank}(A)$

Row rank = column rank (shown in Section 2). The row rank of $A^T$ = column rank of $A$ = rank of $A$. $\blacksquare$

---

## 5. Rank-Nullity Theorem

The **nullity** of $A$ is the dimension of the null space (the solution space of $Ax = 0$):

$$
\text{nullity}(A) = n - \text{rank}(A)
$$

> **Rank-Nullity Theorem:** For an $m \times n$ matrix $A$:
>
> $$\text{rank}(A) + \text{nullity}(A) = n$$

This means: **number of pivots + number of free variables = total number of variables**.

**Example:** A $3 \times 5$ matrix with rank 2 has nullity $5 - 2 = 3$. The system $Ax = 0$ has a 3-dimensional solution space.

---

## 6. Rank and Invertibility

For an $n \times n$ square matrix $A$:

| Condition | Equivalent Statement |
|:---|:---|
| $\text{rank}(A) = n$ | $A$ is invertible (non-singular) |
| $\text{rank}(A) < n$ | $A$ is singular, not invertible |
| $\text{rank}(A) = n$ | $\det(A) \neq 0$ |
| $\text{rank}(A) < n$ | $\det(A) = 0$ |
| $\text{rank}(A) = n$ | Columns (rows) are linearly independent |

---

## 7. Worked Examples

### Example 1 — Find rank by row reduction

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 3 & 5 \end{bmatrix}
$$

Row reduce:

$R_2 \leftarrow R_2 - 2R_1$; $R_3 \leftarrow R_3 - R_1$:

$$
\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 1 & 2 \end{bmatrix}
$$

Swap $R_2 \leftrightarrow R_3$:

$$
\begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{bmatrix}
$$

**Non-zero rows: 2**

$$
\boxed{\text{rank}(A) = 2}
$$

Observation: Row 1 of original $A$ is $(1, 2, 3)$, row 2 is $2 \times$ row 1 — they are linearly **dependent**, confirming rank $< 3$.

---

### Example 2 — Rank by determinant method

$$
B = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}
$$

Check $3 \times 3$ determinant:

$$
\det(B) = 1(45-48) - 2(36-42) + 3(32-35) = -3 + 12 - 9 = 0
$$

So rank $< 3$. Check $2 \times 2$ submatrix:

$$
\begin{vmatrix} 1 & 2 \\ 4 & 5 \end{vmatrix} = 5 - 8 = -3 \neq 0
$$

A non-zero $2 \times 2$ determinant exists → $\text{rank}(B) = 2$.

---

### Example 3 — Rank-Nullity Application

Matrix $A$ is $4 \times 6$ with $\text{rank}(A) = 3$.

- **Nullity** $= 6 - 3 = 3$ (three free variables in $Ax = 0$)
- The null space is **3-dimensional**
- The system $Ax = b$ (if consistent) has a 3-parameter family of solutions

---

### Example 4 — Rank and Linear Dependence

**Question:** Are the vectors $v_1 = (1, 2, 3)$, $v_2 = (2, 4, 6)$, $v_3 = (0, 1, -1)$ linearly dependent?

Form the matrix with these as rows and find rank:

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & -1 \end{bmatrix}
$$

$R_2 \leftarrow R_2 - 2R_1$:

$$
\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 1 & -1 \end{bmatrix}
$$

$\text{rank}(A) = 2 < 3$ → the vectors are **linearly dependent** ($v_2 = 2v_1$).

---

## 8. Practice Problems

1. Find the rank of:
$$A = \begin{bmatrix} 2 & -1 & 3 \\ 1 & 0 & -1 \\ 3 & -1 & 2 \end{bmatrix}$$

2. For what value of $k$ does $A = \begin{bmatrix} 1 & 2 \\ 3 & k \end{bmatrix}$ have rank 1?

3. A $5 \times 7$ matrix has rank 4. What is its nullity? How many free variables are in $Ax = 0$?

4. Prove: $\text{rank}(AB) \leq \text{rank}(A)$ for any matrices $A, B$.

5. Is the following set of vectors linearly independent? Use rank to decide.
$$\{(1, 1, 0),\ (0, 1, 1),\ (1, 0, -1)\}$$

---

## 9. References

- **Textbook:** Gilbert Strang, *Introduction to Linear Algebra*, 5th Ed. — Chapter 3
- **Online:**
  - [MIT OCW — Rank & Dimension](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - [Khan Academy — Matrix Rank](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/null-column-space/v/column-space-of-a-matrix)
  - [Paul's Online Notes — Rank](https://tutorial.math.lamar.edu/Classes/LinAlg/Rank.aspx)
  - [Brilliant.org — Rank of a Matrix](https://brilliant.org/wiki/rank-of-a-matrix/)

---

> **Previous:** [08 — Echelon & Canonical Form](./08_echelon_canonical_form.md) | **Next:** [10 — Test of Consistency Using Rank](./10_consistency_test_rank.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
