---
subject: MATH-101
topic: Elementary Operations on Matrices
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, elementary-operations, row-operations]
---

# 05. Elementary Operations on Matrices

> **Syllabus Reference:** Linear Algebra → Elementary Operations

---

## Table of Contents

1. [What Are Elementary Operations?](#1-what-are-elementary-operations)
2. [Three Types of Elementary Row Operations](#2-three-types-of-elementary-row-operations)
3. [Elementary Column Operations](#3-elementary-column-operations)
4. [Elementary Matrices](#4-elementary-matrices)
5. [Effect on Determinant](#5-effect-on-determinant)
6. [Row Equivalence](#6-row-equivalence)
7. [Worked Examples](#7-worked-examples)
8. [Practice Problems](#8-practice-problems)
9. [References](#9-references)

---

## 1. What Are Elementary Operations?

**Elementary operations** (also called **elementary row/column operations**) are the three fundamental operations that can be applied to rows or columns of a matrix without changing the solution set of the corresponding linear system.

They are the building blocks of:
- **Gaussian Elimination** (solving linear systems)
- **Gauss-Jordan Elimination** (finding inverses)
- **Row Echelon Form** computation
- **Rank** calculation

---

## 2. Three Types of Elementary Row Operations

### Type 1 — Row Interchange (Swap)

**Operation:** Swap row $i$ and row $j$.

**Notation:** $R_i \leftrightarrow R_j$

**Effect on determinant:** Multiplies $\det$ by $-1$.

**Example:**

$$
\begin{bmatrix} 0 & 1 & 3 \\ 2 & -1 & 4 \\ 1 & 0 & 5 \end{bmatrix}
\xrightarrow{R_1 \leftrightarrow R_2}
\begin{bmatrix} 2 & -1 & 4 \\ 0 & 1 & 3 \\ 1 & 0 & 5 \end{bmatrix}
$$

> **Purpose:** Bring a non-zero pivot to the top.

---

### Type 2 — Row Scaling (Scalar Multiplication)

**Operation:** Multiply row $i$ by a non-zero scalar $k$.

**Notation:** $R_i \leftarrow k R_i$, $k \neq 0$

**Effect on determinant:** Multiplies $\det$ by $k$.

**Example:**

$$
\begin{bmatrix} 2 & 4 & 6 \\ 1 & 3 & 5 \end{bmatrix}
\xrightarrow{\frac{1}{2}R_1}
\begin{bmatrix} 1 & 2 & 3 \\ 1 & 3 & 5 \end{bmatrix}
$$

> **Purpose:** Scale a row to create a leading 1 (pivot).

---

### Type 3 — Row Addition (Linear Combination)

**Operation:** Replace row $i$ with row $i$ plus $k$ times row $j$ (where $i \neq j$).

**Notation:** $R_i \leftarrow R_i + k R_j$

**Effect on determinant:** **No change** to the determinant.

**Example:**

$$
\begin{bmatrix} 1 & 2 & 3 \\ 2 & 5 & 8 \\ -1 & 0 & 4 \end{bmatrix}
\xrightarrow{R_2 - 2R_1}
\begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ -1 & 0 & 4 \end{bmatrix}
$$

$$
\xrightarrow{R_3 + R_1}
\begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 2 & 7 \end{bmatrix}
$$

> **Purpose:** Eliminate variables to create zeros below pivots.

---

## 3. Elementary Column Operations

The same three operations apply to **columns** as well:

| Operation | Row Version | Column Version |
|:---|:---|:---|
| Swap | $R_i \leftrightarrow R_j$ | $C_i \leftrightarrow C_j$ |
| Scale | $R_i \leftarrow k R_i$ | $C_j \leftarrow k C_j$ |
| Add | $R_i \leftarrow R_i + k R_j$ | $C_i \leftarrow C_i + k C_j$ |

> **Important:** In solving linear systems, we apply **row operations only**, to preserve the solution structure. Column operations change the variables.

---

## 4. Elementary Matrices

An **elementary matrix** $E$ is obtained by performing a **single** elementary row operation on the identity matrix $I$.

Pre-multiplying a matrix $A$ by $E$ performs that same row operation on $A$:

$$
E \cdot A = \text{(result of applying the operation to } A\text{)}
$$

### Type 1 Elementary Matrix (Row Swap)

$$
I \xrightarrow{R_1 \leftrightarrow R_2} E_1 = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$

### Type 2 Elementary Matrix (Row Scale)

$$
I \xrightarrow{3R_2} E_2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$

### Type 3 Elementary Matrix (Row Addition)

$$
I \xrightarrow{R_3 + 5R_1} E_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 5 & 0 & 1 \end{bmatrix}
$$

### Key Property

Every elementary matrix is **invertible**. The inverse of an elementary matrix is another elementary matrix of the same type, performing the **reverse operation**:

| Operation | Inverse Operation |
|:---|:---|
| $R_i \leftrightarrow R_j$ | $R_i \leftrightarrow R_j$ (same swap) |
| $R_i \leftarrow k R_i$ | $R_i \leftarrow \frac{1}{k} R_i$ |
| $R_i \leftarrow R_i + k R_j$ | $R_i \leftarrow R_i - k R_j$ |

---

## 5. Effect on Determinant

| Operation | Effect on $\det(A)$ |
|:---|:---|
| $R_i \leftrightarrow R_j$ | $\det \rightarrow -\det$ |
| $R_i \leftarrow k R_i$ | $\det \rightarrow k \cdot \det$ |
| $R_i \leftarrow R_i + k R_j$ | $\det$ unchanged |

**Practical use:** After reducing $A$ to upper triangular $U$ using elementary operations, keep track of sign changes and scaling to recover $\det(A)$.

---

## 6. Row Equivalence

Two matrices are **row equivalent** if one can be obtained from the other by a finite sequence of elementary row operations.

**Key Theorem:** Every matrix is row equivalent to a unique matrix in **Reduced Row Echelon Form (RREF)**. Row-equivalent matrices have the same row space, same rank, and the same solution set for $Ax = b$.

---

## 7. Worked Examples

### Example 1 — Sequence of Operations

Reduce the following using elementary row operations:

$$
A = \begin{bmatrix} 2 & 6 & -2 \\ 1 & 2 & -3 \\ 0 & 4 & 7 \end{bmatrix}
$$

**Step 1:** $R_1 \leftrightarrow R_2$ (bring smaller leading entry to top):

$$
\begin{bmatrix} 1 & 2 & -3 \\ 2 & 6 & -2 \\ 0 & 4 & 7 \end{bmatrix}
$$

**Step 2:** $R_2 \leftarrow R_2 - 2R_1$:

$$
\begin{bmatrix} 1 & 2 & -3 \\ 0 & 2 & 4 \\ 0 & 4 & 7 \end{bmatrix}
$$

**Step 3:** $\frac{1}{2}R_2$:

$$
\begin{bmatrix} 1 & 2 & -3 \\ 0 & 1 & 2 \\ 0 & 4 & 7 \end{bmatrix}
$$

**Step 4:** $R_3 \leftarrow R_3 - 4R_2$:

$$
\begin{bmatrix} 1 & 2 & -3 \\ 0 & 1 & 2 \\ 0 & 0 & -1 \end{bmatrix}
$$

This is now in **Row Echelon Form (REF)**.

**Operations performed:** Type 1, Type 3, Type 2, Type 3.

---

### Example 2 — Determinant via Operations

Compute $\det(A)$ where:

$$
A = \begin{bmatrix} 2 & 6 & -2 \\ 1 & 2 & -3 \\ 0 & 4 & 7 \end{bmatrix}
$$

Using the reduced form from Example 1:

- $R_1 \leftrightarrow R_2$: determinant sign flips → factor of $-1$
- $\frac{1}{2}R_2$: determinant scaled by $\frac{1}{2}$ → must multiply back by $2$

Upper triangular result: diagonal is $(1)(1)(-1) = -1$.

$$
\det(A) = (-1) \times 2 \times (-1) = 2
$$

---

## 8. Practice Problems

1. List all three types of elementary row operations and give an example of each.

2. Apply row operations to reduce:
$$A = \begin{bmatrix} 0 & 2 & 4 \\ 1 & 3 & 2 \\ 3 & 5 & 1 \end{bmatrix}$$

3. Write the elementary matrix corresponding to $R_2 \leftarrow R_2 - 3R_1$ for a $3\times3$ system.

4. If $A$ is $4\times4$ and you swap rows twice and scale one row by 5, what is the relation between $\det(\text{result})$ and $\det(A)$?

5. Prove that every elementary matrix is invertible.

---

## 9. References

- **Textbook:** Howard Anton, *Elementary Linear Algebra*, 11th Ed. — Section 1.6
- **Online:**
  - [Khan Academy — Row Operations](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/matrices-elimination/v/matrices-to-solve-a-system-of-equations)
  - [MIT OCW — Elimination](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - [Paul's Online Notes — Elementary Row Operations](https://tutorial.math.lamar.edu/Classes/LinAlg/ElementaryMatrices.aspx)
  - [Wolfram — Elementary Matrix](https://mathworld.wolfram.com/ElementaryMatrix.html)

---

> **Previous:** [04 — System of Linear Equations](./04_system_linear_equations.md) | **Next:** [06 — Gaussian Elimination](./06_gaussian_elimination.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
