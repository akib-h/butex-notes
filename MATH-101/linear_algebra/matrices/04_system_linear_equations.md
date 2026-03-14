---
subject: MATH-101
topic: System of Linear Equations — Consistent & Inconsistent Systems
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, linear-equations, consistent, inconsistent]
---

# 04. System of Linear Equations — Consistent & Inconsistent Systems

> **Syllabus Reference:** Linear Algebra → System of linear equations, Consistent and inconsistent system

---

## Table of Contents

1. [Definition of a Linear System](#1-definition-of-a-linear-system)
2. [Matrix Form of a Linear System](#2-matrix-form-of-a-linear-system)
3. [Augmented Matrix](#3-augmented-matrix)
4. [Types of Solutions](#4-types-of-solutions)
5. [Consistent Systems](#5-consistent-systems)
6. [Inconsistent Systems](#6-inconsistent-systems)
7. [Geometric Interpretation](#7-geometric-interpretation)
8. [Conditions for Consistency — Rouché-Capelli Theorem](#8-conditions-for-consistency--rouche-capelli-theorem)
9. [Worked Examples](#9-worked-examples)
10. [Practice Problems](#10-practice-problems)
11. [References](#11-references)

---

## 1. Definition of a Linear System

A **system of $m$ linear equations in $n$ unknowns** $x_1, x_2, \ldots, x_n$ has the general form:

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\
\quad \vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m
\end{cases}
$$

where:
- $a_{ij}$ are the **coefficients** (known constants)
- $x_j$ are the **unknowns** (variables to solve for)
- $b_i$ are the **constants** on the right-hand side

A **solution** is a set of values $(x_1, x_2, \ldots, x_n)$ that satisfies **all** equations simultaneously.

---

## 2. Matrix Form of a Linear System

The system can be written compactly as:

$$
Ax = b
$$

where:

$$
A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & & & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}, \quad
x = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}, \quad
b = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}
$$

- $A$ is called the **coefficient matrix**
- $x$ is the **variable (unknown) vector**
- $b$ is the **right-hand side (constant) vector**

**Special case:** When $b = 0$ (all $b_i = 0$), the system $Ax = 0$ is called **homogeneous**.

---

## 3. Augmented Matrix

The **augmented matrix** combines $A$ and $b$ into one matrix:

$$
[A \mid b] = \left[\begin{array}{cccc|c}
a_{11} & a_{12} & \cdots & a_{1n} & b_1 \\
a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\
\vdots & & & \vdots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} & b_m
\end{array}\right]
$$

Row operations on the augmented matrix correspond exactly to operations on the system of equations.

---

## 4. Types of Solutions

A linear system $Ax = b$ has exactly one of three outcomes:

| Outcome | Description | Condition |
|:---|:---|:---|
| **Unique Solution** | Exactly one solution exists | $\text{rank}(A) = \text{rank}([A|b]) = n$ |
| **Infinitely Many Solutions** | A family of solutions (free variables) | $\text{rank}(A) = \text{rank}([A|b]) < n$ |
| **No Solution** | The system is contradictory | $\text{rank}(A) \neq \text{rank}([A|b])$ |

---

## 5. Consistent Systems

A system is **consistent** if it has **at least one solution** (either unique or infinitely many).

$$
\text{Consistent} \iff \text{rank}(A) = \text{rank}([A \mid b])
$$

### Case 1 — Unique Solution (Consistent & Determined)

$$
\text{rank}(A) = \text{rank}([A \mid b]) = n
$$

**Example:**

$$
\begin{cases} x + y = 3 \\ x - y = 1 \end{cases}
$$

Adding: $2x = 4 \implies x = 2$, and $y = 1$.

Unique solution: $(x, y) = (2, 1)$.

### Case 2 — Infinitely Many Solutions (Consistent & Underdetermined)

$$
\text{rank}(A) = \text{rank}([A \mid b]) = r < n
$$

There are $n - r$ **free variables**, leading to infinitely many solutions.

**Example:**

$$
\begin{cases} x + y + z = 6 \\ x + 2y + 3z = 14 \end{cases}
$$

From these 2 equations, 3 unknowns → at least one free variable.

Row reduce:

$$
\begin{bmatrix} 1 & 1 & 1 & | & 6 \\ 1 & 2 & 3 & | & 14 \end{bmatrix}
\xrightarrow{R_2 - R_1}
\begin{bmatrix} 1 & 1 & 1 & | & 6 \\ 0 & 1 & 2 & | & 8 \end{bmatrix}
$$

Let $z = t$ (free). Then $y = 8 - 2t$, $x = 6 - y - z = 6 - (8-2t) - t = -2 + t$.

Infinite solutions: $(x, y, z) = (-2+t,\ 8-2t,\ t)$ for any $t \in \mathbb{R}$.

---

## 6. Inconsistent Systems

A system is **inconsistent** if it has **no solution**.

$$
\text{Inconsistent} \iff \text{rank}(A) < \text{rank}([A \mid b])
$$

Geometrically, the equations represent **parallel planes or lines** that never intersect.

**Example:**

$$
\begin{cases} x + y = 2 \\ x + y = 5 \end{cases}
$$

Subtracting: $0 = 3$, which is a contradiction. **No solution.**

**Augmented matrix check:**

$$
[A \mid b] = \begin{bmatrix} 1 & 1 & | & 2 \\ 1 & 1 & | & 5 \end{bmatrix}
\xrightarrow{R_2 - R_1}
\begin{bmatrix} 1 & 1 & | & 2 \\ 0 & 0 & | & 3 \end{bmatrix}
$$

The row $[0\ 0\ |\ 3]$ reads $0 = 3$ → contradiction → **inconsistent**.

---

## 7. Geometric Interpretation

### In Two Variables (2D — Two Lines)

| Type | Geometric Meaning | Solution |
|:---|:---|:---|
| Unique | Two lines intersect at one point | $(x_0, y_0)$ |
| Infinite | Two lines are identical (coincident) | Entire line |
| None | Two lines are parallel (never meet) | No solution |

### In Three Variables (3D — Three Planes)

| Type | Geometric Meaning |
|:---|:---|
| Unique | Three planes meet at one point |
| Infinite (1 free var) | Three planes meet at a line |
| Infinite (2 free var) | Three planes are the same (coincident) |
| None | Planes are parallel or form a triangular prism |

---

## 8. Conditions for Consistency — Rouché-Capelli Theorem

> **Rouché-Capelli (Kronecker-Capelli) Theorem:**
>
> The system $Ax = b$ is consistent **if and only if**:
>
> $$\text{rank}(A) = \text{rank}([A \mid b])$$

Furthermore:
- If consistent and $\text{rank}(A) = n$ → **unique solution**
- If consistent and $\text{rank}(A) < n$ → **infinitely many solutions** (with $n - \text{rank}(A)$ free parameters)

---

## 9. Worked Examples

### Example 1 — Classify the system

$$
\begin{cases} 2x + y - z = 3 \\ x - y + 2z = 1 \\ 3x + 2y - 3z = 5 \end{cases}
$$

Augmented matrix:

$$
\left[\begin{array}{ccc|c} 2 & 1 & -1 & 3 \\ 1 & -1 & 2 & 1 \\ 3 & 2 & -3 & 5 \end{array}\right]
$$

Swap $R_1 \leftrightarrow R_2$:

$$
\left[\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 2 & 1 & -1 & 3 \\ 3 & 2 & -3 & 5 \end{array}\right]
$$

$R_2 \leftarrow R_2 - 2R_1$; $R_3 \leftarrow R_3 - 3R_1$:

$$
\left[\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 0 & 3 & -5 & 1 \\ 0 & 5 & -9 & 2 \end{array}\right]
$$

$R_3 \leftarrow 3R_3 - 5R_2$:

$$
\left[\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 0 & 3 & -5 & 1 \\ 0 & 0 & -2 & 1 \end{array}\right]
$$

$\text{rank}(A) = \text{rank}([A|b]) = 3 = n$ → **Consistent with unique solution.**

Back-substituting: $z = -1/2$, $y = -\frac{1}{2}$, $x = 0$.

---

### Example 2 — Inconsistent system detection

$$
\begin{cases} x + 2y + 3z = 4 \\ 2x + 4y + 6z = 9 \end{cases}
$$

$$
\left[\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 2 & 4 & 6 & 9 \end{array}\right]
\xrightarrow{R_2 - 2R_1}
\left[\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 1 \end{array}\right]
$$

Row 2 reads $0 = 1$ → **Inconsistent. No solution.**

---

## 10. Practice Problems

1. Determine if the system is consistent or inconsistent:
$$\begin{cases} x + y = 4 \\ 2x + 2y = 8 \end{cases}$$

2. Classify and solve:
$$\begin{cases} x + 2y = 5 \\ 3x + 6y = 15 \end{cases}$$

3. Show that the system below has no solution:
$$\begin{cases} x - y + z = 1 \\ 2x - 2y + 2z = 3 \end{cases}$$

4. For what value of $k$ is the system consistent?
$$\begin{cases} x + 2y = 3 \\ 2x + 4y = k \end{cases}$$

5. Given $Ax = b$ where $A$ is $3\times3$ with $\det(A) \neq 0$, explain why exactly one solution exists.

---

## 11. References

- **Textbook:** Howard Anton, *Elementary Linear Algebra*, 11th Ed. — Chapter 2
- **Online:**
  - [MIT OCW — System of Linear Equations](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - [Khan Academy — Systems of Equations](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations)
  - [Paul's Online Notes — Linear Systems](https://tutorial.math.lamar.edu/Classes/Alg/SystemsOfEquations.aspx)
  - [Brilliant.org — Linear Systems](https://brilliant.org/wiki/linear-equations/)

---

> **Previous:** [03 — Inverse Matrix](./03_inverse_matrix.md) | **Next:** [05 — Elementary Operations](./05_elementary_operations.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
