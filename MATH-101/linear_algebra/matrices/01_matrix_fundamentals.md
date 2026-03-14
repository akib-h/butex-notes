---
subject: MATH-101
topic: Matrix — Fundamentals, Types, and Operations
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, matrix, mathematics]
---

# 01. Matrix — Fundamentals, Types & Operations

> **Syllabus Reference:** Linear Algebra → Matrix

---

## Table of Contents

1. [Definition of a Matrix](#1-definition-of-a-matrix)
2. [Matrix Notation and Order](#2-matrix-notation-and-order)
3. [Types of Matrices](#3-types-of-matrices)
4. [Matrix Operations](#4-matrix-operations)
5. [Properties of Matrix Operations](#5-properties-of-matrix-operations)
6. [Transpose of a Matrix](#6-transpose-of-a-matrix)
7. [Worked Examples](#7-worked-examples)
8. [Practice Problems](#8-practice-problems)
9. [References](#9-references)

---

## 1. Definition of a Matrix

A **matrix** is a rectangular array of numbers, symbols, or expressions arranged in **rows** and **columns**, enclosed in square brackets (or parentheses). Each individual entry is called an **element** or **entry**.

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

- **$a_{ij}$** denotes the element in the $i$-th row and $j$-th column.
- The matrix $A$ above has $m$ rows and $n$ columns → **order** $m \times n$.

---

## 2. Matrix Notation and Order

A matrix with $m$ rows and $n$ columns is called an **$m \times n$ matrix** (read "m by n").

$$
A_{m \times n} = [a_{ij}], \quad 1 \leq i \leq m, \quad 1 \leq j \leq n
$$

> **Example:** A $3 \times 2$ matrix has 3 rows and 2 columns, giving $3 \times 2 = 6$ total elements.

### Special Sizes

| Description | Order |
|:---|:---|
| Row matrix (row vector) | $1 \times n$ |
| Column matrix (column vector) | $m \times 1$ |
| Square matrix | $n \times n$ |

---

## 3. Types of Matrices

### 3.1 Zero (Null) Matrix

All elements are zero.

$$
O = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}
$$

### 3.2 Square Matrix

Number of rows equals number of columns ($m = n$).

$$
A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \quad (2 \times 2)
$$

### 3.3 Diagonal Matrix

A square matrix where all off-diagonal elements are zero.

$$
D = \begin{bmatrix} d_1 & 0 & 0 \\ 0 & d_2 & 0 \\ 0 & 0 & d_3 \end{bmatrix}
$$

### 3.4 Identity (Unit) Matrix

A diagonal matrix with all diagonal entries equal to 1. Denoted $I_n$.

$$
I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$

**Key property:** $AI = IA = A$ for any compatible matrix $A$.

### 3.5 Scalar Matrix

A diagonal matrix where all diagonal entries are equal to the same scalar $k$.

$$
S = \begin{bmatrix} k & 0 \\ 0 & k \end{bmatrix}
$$

### 3.6 Upper Triangular Matrix

All elements **below** the main diagonal are zero.

$$
U = \begin{bmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{bmatrix}
$$

### 3.7 Lower Triangular Matrix

All elements **above** the main diagonal are zero.

$$
L = \begin{bmatrix} a & 0 & 0 \\ b & c & 0 \\ d & e & f \end{bmatrix}
$$

### 3.8 Symmetric Matrix

$A^T = A$, i.e., $a_{ij} = a_{ji}$ for all $i, j$.

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 5 & 4 \\ 3 & 4 & 6 \end{bmatrix}
$$

### 3.9 Skew-Symmetric Matrix

$A^T = -A$, i.e., $a_{ij} = -a_{ji}$. The diagonal entries must all be zero.

$$
A = \begin{bmatrix} 0 & 2 & -3 \\ -2 & 0 & 5 \\ 3 & -5 & 0 \end{bmatrix}
$$

### 3.10 Orthogonal Matrix

$A^T A = A A^T = I$, which means $A^{-1} = A^T$.

### 3.11 Idempotent Matrix

$A^2 = A$.

**Example:**
$$
A = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \quad A^2 = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = A \checkmark
$$

### 3.12 Singular and Non-Singular Matrix

- **Singular:** $\det(A) = 0$. The matrix has no inverse.
- **Non-singular:** $\det(A) \neq 0$. The inverse exists.

---

## 4. Matrix Operations

### 4.1 Matrix Addition and Subtraction

Two matrices can be added/subtracted only if they have the **same order**.

$$
(A + B)_{ij} = a_{ij} + b_{ij}
$$

**Example:**

$$
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}
$$

### 4.2 Scalar Multiplication

$$
(kA)_{ij} = k \cdot a_{ij}
$$

**Example:**

$$
3 \begin{bmatrix} 1 & -2 \\ 0 & 4 \end{bmatrix} = \begin{bmatrix} 3 & -6 \\ 0 & 12 \end{bmatrix}
$$

### 4.3 Matrix Multiplication

$A$ is $m \times p$ and $B$ is $p \times n$ → $C = AB$ is $m \times n$.

$$
c_{ij} = \sum_{k=1}^{p} a_{ik} \cdot b_{kj}
$$

> **Key Rule:** The **number of columns of $A$** must equal the **number of rows of $B$**.

**Example:**

$$
A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}
$$

$$
AB = \begin{bmatrix}
1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\
3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8
\end{bmatrix}
= \begin{bmatrix}
19 & 22 \\
43 & 50
\end{bmatrix}
$$

---

## 5. Properties of Matrix Operations

### Addition Properties

| Property | Statement |
|:---|:---|
| Commutative | $A + B = B + A$ |
| Associative | $(A + B) + C = A + (B + C)$ |
| Additive Identity | $A + O = A$ |
| Additive Inverse | $A + (-A) = O$ |

### Multiplication Properties

| Property | Statement |
|:---|:---|
| Associative | $(AB)C = A(BC)$ |
| Distributive | $A(B+C) = AB + AC$ |
| Identity | $AI = IA = A$ |
| **NOT Commutative** | $AB \neq BA$ in general |

> **Warning:** Matrix multiplication is **not commutative** in general. Always maintain the order!

### Proof that $AB \neq BA$ in General

$$
A = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}, \quad B = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}
$$

$$
AB = \begin{bmatrix} 2 & 1 \\ 1 & 0 \end{bmatrix}, \quad BA = \begin{bmatrix} 0 & 1 \\ 1 & 2 \end{bmatrix}
$$

Since $AB \neq BA$, the multiplication is non-commutative. $\blacksquare$

---

## 6. Transpose of a Matrix

The **transpose** of an $m \times n$ matrix $A$ is the $n \times m$ matrix $A^T$ obtained by switching rows and columns:

$$
(A^T)_{ij} = a_{ji}
$$

**Example:**

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}_{2 \times 3}
\implies
A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}_{3 \times 2}
$$

### Properties of Transpose

1. $(A^T)^T = A$
2. $(A + B)^T = A^T + B^T$
3. $(kA)^T = k A^T$
4. $(AB)^T = B^T A^T$ ← **Reverse order!**

**Proof of Property 4:**

Let $C = AB$ where $A$ is $m \times p$ and $B$ is $p \times n$.

$$
(C^T)_{ij} = c_{ji} = \sum_{k=1}^{p} a_{jk} b_{ki}
$$

$$
(B^T A^T)_{ij} = \sum_{k=1}^{p} (B^T)_{ik}(A^T)_{kj} = \sum_{k=1}^{p} b_{ki} a_{jk}
$$

These are equal, so $(AB)^T = B^T A^T$. $\blacksquare$

---

## 7. Worked Examples

### Example 1 — Matrix Multiplication

**Given:**
$$
A = \begin{bmatrix} 2 & -1 \\ 3 & 0 \end{bmatrix}, \quad B = \begin{bmatrix} 1 & 4 \\ -2 & 3 \end{bmatrix}
$$

**Find:** $AB$ and $BA$.

**Solution:**

$$
AB = \begin{bmatrix}
2(1)+(-1)(-2) & 2(4)+(-1)(3) \\
3(1)+0(-2) & 3(4)+0(3)
\end{bmatrix}
= \begin{bmatrix} 4 & 5 \\ 3 & 12 \end{bmatrix}
$$

$$
BA = \begin{bmatrix}
1(2)+4(3) & 1(-1)+4(0) \\
(-2)(2)+3(3) & (-2)(-1)+3(0)
\end{bmatrix}
= \begin{bmatrix} 14 & -1 \\ 5 & 2 \end{bmatrix}
$$

Confirming $AB \neq BA$.

---

### Example 2 — Verify Symmetric Matrix

**Claim:** If $A$ is any matrix, then $A + A^T$ is always symmetric.

**Proof:**

Let $S = A + A^T$. We need to show $S^T = S$.

$$
S^T = (A + A^T)^T = A^T + (A^T)^T = A^T + A = A + A^T = S
$$

Therefore $S$ is symmetric. $\blacksquare$

---

### Example 3 — Textile Context

In textile manufacturing, a **production matrix** can represent the output of different products per machine:

$$
P = \begin{bmatrix}
\text{Cotton yarn} & \text{Polyester yarn} \\
120 & 80 \\
95 & 110
\end{bmatrix}
$$

Here rows represent machines, columns represent yarn types (in kg/day). Matrix operations allow quick calculation of total weekly output, cost analysis, etc.

---

## 8. Practice Problems

1. If $A = \begin{bmatrix} 1 & 3 \\ 2 & -1 \end{bmatrix}$ and $B = \begin{bmatrix} 2 & 0 \\ -1 & 4 \end{bmatrix}$, find $AB$, $BA$, and $A + B$.

2. Show that the matrix $A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ satisfies $A^2 = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$.

3. Prove that for any square matrix $A$, $A - A^T$ is always skew-symmetric.

4. If $A = \begin{bmatrix} 2 & 1 \\ -1 & 3 \end{bmatrix}$, verify $(A^T)^T = A$.

5. Find $x$ and $y$ if $\begin{bmatrix} x+y & 2 \\ 3 & x-y \end{bmatrix} = \begin{bmatrix} 5 & 2 \\ 3 & 1 \end{bmatrix}$.

---

## 9. References

- **Textbook:** Howard Anton, *Elementary Linear Algebra*, 11th Edition — Chapter 1
- **Online:**
  - [MIT OpenCourseWare — Linear Algebra (18.06)](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - [Khan Academy — Matrices](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices)
  - [Paul's Online Math Notes — Matrices & Systems](https://tutorial.math.lamar.edu/Classes/Alg/Matrices.aspx)
  - [3Blue1Brown — Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

---

> **Next Topic:** [02 — Determinant](./02_determinant.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
