---
subject: MATH-101
topic: Test of Consistency of a System of Linear Equations Using Rank
date: 2026-03-13
tags: [notes, MATH-101, linear-algebra, consistency, rank, rouche-capelli]
---

# 10. Test of Consistency of a Linear System Using Rank

> **Syllabus Reference:** Linear Algebra → Test of Consistency of a System of Linear Equations Using Rank of Matrix

---

## Table of Contents

1. [Overview and Motivation](#1-overview-and-motivation)
2. [The Rouché-Capelli Theorem](#2-the-rouche-capelli-theorem)
3. [Complete Classification of Solutions](#3-complete-classification-of-solutions)
4. [Step-by-Step Test Procedure](#4-step-by-step-test-procedure)
5. [Homogeneous Systems and Rank](#5-homogeneous-systems-and-rank)
6. [Summary Chart](#6-summary-chart)
7. [Worked Examples](#7-worked-examples)
8. [Practice Problems](#8-practice-problems)
9. [References](#9-references)

---

## 1. Overview and Motivation

When we have a system of linear equations $Ax = b$, we need to determine:

1. **Does a solution exist?** (Consistency check)
2. **How many solutions exist?** (Uniqueness check)

The **rank** of the coefficient matrix $A$ and the **augmented matrix** $[A \mid b]$ together give a complete and definitive answer. This is the most powerful and general method to test consistency.

---

## 2. The Rouché-Capelli Theorem

> **Theorem (Rouché-Capelli / Kronecker-Capelli):**
>
> The system $Ax = b$ (with $m$ equations, $n$ unknowns) is **consistent** (has at least one solution) **if and only if**:
>
> $$\boxed{\text{rank}(A) = \text{rank}([A \mid b])}$$
>
> If consistent:
> - **Unique solution** if $\text{rank}(A) = n$
> - **Infinitely many solutions** if $\text{rank}(A) < n$, with $n - \text{rank}(A)$ free parameters

---

## 3. Complete Classification of Solutions

Let $r = \text{rank}(A)$, $\tilde{r} = \text{rank}([A \mid b])$, and $n$ = number of unknowns.

| $r$ vs $\tilde{r}$ | $r$ vs $n$ | System Type | Number of Solutions |
|:---:|:---:|:---|:---|
| $r \neq \tilde{r}$ | — | **Inconsistent** | None |
| $r = \tilde{r}$ | $r = n$ | **Consistent & Determined** | Exactly one |
| $r = \tilde{r}$ | $r < n$ | **Consistent & Underdetermined** | Infinitely many ($n-r$ parameters) |

---

## 4. Step-by-Step Test Procedure

### Procedure

**Step 1:** Write the coefficient matrix $A$ and the augmented matrix $[A \mid b]$.

**Step 2:** Row-reduce both (row-reduce $[A \mid b]$; $A$ reduces automatically as the left part).

**Step 3:** Count the number of non-zero rows in each:
- $\text{rank}(A)$ = non-zero rows in REF of $A$
- $\text{rank}([A \mid b])$ = non-zero rows in REF of $[A \mid b]$

**Step 4:** Apply the theorem:
- If $\text{rank}(A) \neq \text{rank}([A \mid b])$ → **No solution** (inconsistent)
- If $\text{rank}(A) = \text{rank}([A \mid b]) = n$ → **Unique solution**
- If $\text{rank}(A) = \text{rank}([A \mid b]) = r < n$ → **Infinite solutions** (find $n - r$ free variables)

---

## 5. Homogeneous Systems and Rank

For the homogeneous system $Ax = 0$:

- $[A \mid 0]$ always has the same rank as $A$ (the zero column never creates a new non-zero row)
- Therefore homogeneous systems are **always consistent**
- Trivial solution ($x = 0$) always exists

Additionally:

| Condition | Solution |
|:---|:---|
| $\text{rank}(A) = n$ | Only trivial solution $x = 0$ |
| $\text{rank}(A) < n$ | Infinitely many solutions (including non-trivial) |

---

## 6. Summary Chart

```
System: Ax = b (m equations, n unknowns)
            |
            | Compute rank(A) and rank([A|b])
            |
     ________v________
    |                 |
 rank(A) ≠        rank(A) =
 rank([A|b])      rank([A|b]) = r
    |                 |
INCONSISTENT     _____|_____
No solution     |           |
               r = n       r < n
                |           |
           UNIQUE       INFINITELY MANY
           SOLUTION      SOLUTIONS
                        (n - r parameters)
```

---

## 7. Worked Examples

### Example 1 — Unique Solution

**System:**

$$
\begin{cases}
x + y + z = 6 \\
2x - y + z = 3 \\
x + 2y - z = 2
\end{cases}
$$

**Augmented matrix:**

$$
[A \mid b] = \left[\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
2 & -1 & 1 & 3 \\
1 & 2 & -1 & 2
\end{array}\right]
$$

Row reduce ($R_2 - 2R_1$; $R_3 - R_1$):

$$
\left[\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & -3 & -1 & -9 \\
0 & 1 & -2 & -4
\end{array}\right]
$$

Swap $R_2 \leftrightarrow R_3$; then $R_3 + 3R_2$:

$$
\left[\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -2 & -4 \\
0 & 0 & -7 & -21
\end{array}\right]
$$

**$\text{rank}(A) = 3$** (3 non-zero rows in left part)

**$\text{rank}([A \mid b]) = 3$** (3 non-zero rows overall)

$r = \tilde{r} = 3 = n$ → **Unique solution exists.**

Back-substitute:

$$
-7z = -21 \implies z = 3
$$

$$
y - 2(3) = -4 \implies y = 2
$$

$$
x + 2 + 3 = 6 \implies x = 1
$$

**Solution:** $(x, y, z) = (1, 2, 3)$

---

### Example 2 — No Solution (Inconsistent)

**System:**

$$
\begin{cases}
x + 2y - z = 3 \\
2x + 4y - 2z = 7 \\
x - y + z = 1
\end{cases}
$$

**Augmented matrix:**

$$
\left[\begin{array}{ccc|c}
1 & 2 & -1 & 3 \\
2 & 4 & -2 & 7 \\
1 & -1 & 1 & 1
\end{array}\right]
$$

$R_2 - 2R_1$:

$$
\left[\begin{array}{ccc|c}
1 & 2 & -1 & 3 \\
0 & 0 & 0 & 1 \\
1 & -1 & 1 & 1
\end{array}\right]
$$

**$\text{rank}(A)$:** The left part of row 2 is $[0\ 0\ 0]$ → rank of $A = ?$... continue with $R_3 - R_1$:

$$
\left[\begin{array}{ccc|c}
1 & 2 & -1 & 3 \\
0 & 0 & 0 & 1 \\
0 & -3 & 2 & -2
\end{array}\right]
$$

Looking at coefficient matrix only:
- Row 1: non-zero → contributes
- Row 2: $[0, 0, 0]$ → zero
- Row 3: $[0, -3, 2]$ → non-zero

$\text{rank}(A) = 2$

But row 2 of $[A \mid b]$ is $[0\ 0\ 0\ |\ 1]$ — the augmented matrix has a row with coefficient zeros but non-zero RHS.

$\text{rank}([A \mid b]) = 3$ (the zero row in $A$ becomes non-zero in $[A|b]$)

$\text{rank}(A) = 2 \neq 3 = \text{rank}([A \mid b])$ → **INCONSISTENT. No solution.**

---

### Example 3 — Infinitely Many Solutions

**System:**

$$
\begin{cases}
x + 2y + 3z = 4 \\
2x + 4y + 6z = 8 \\
x - y + z = 2
\end{cases}
$$

**Augmented matrix:**

$$
\left[\begin{array}{ccc|c}
1 & 2 & 3 & 4 \\
2 & 4 & 6 & 8 \\
1 & -1 & 1 & 2
\end{array}\right]
$$

$R_2 - 2R_1$; $R_3 - R_1$:

$$
\left[\begin{array}{ccc|c}
1 & 2 & 3 & 4 \\
0 & 0 & 0 & 0 \\
0 & -3 & -2 & -2
\end{array}\right]
$$

Swap $R_2 \leftrightarrow R_3$:

$$
\left[\begin{array}{ccc|c}
1 & 2 & 3 & 4 \\
0 & -3 & -2 & -2 \\
0 & 0 & 0 & 0
\end{array}\right]
$$

$\text{rank}(A) = 2$, $\text{rank}([A \mid b]) = 2$ → **Consistent!**

$r = 2 < n = 3$ → **Infinitely many solutions** with $3 - 2 = 1$ free variable.

Let $z = t$:

From Row 2: $-3y - 2t = -2 \implies y = \frac{2 - 2t}{3}$

From Row 1: $x = 4 - 2y - 3t = 4 - \frac{4 - 4t}{3} - 3t = \frac{8 + 4t - 9t}{3} = \frac{8 - 5t}{3}$

**General solution:**

$$
\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 8/3 \\ 2/3 \\ 0 \end{pmatrix} + t\begin{pmatrix} -5/3 \\ -2/3 \\ 1 \end{pmatrix}, \quad t \in \mathbb{R}
$$

---

### Example 4 — Homogeneous System

**System:**

$$
\begin{cases}
x + 2y + 3z = 0 \\
4x + 5y + 6z = 0 \\
7x + 8y + 9z = 0
\end{cases}
$$

We already know from Topic 02 that this coefficient matrix has $\det = 0$, so $\text{rank}(A) < 3$.

Row reducing gives rank 2. Since $n = 3$, nullity $= 1$, so there is a **1-parameter family** of non-trivial solutions.

Solving (let $z = t$): $y = -2t$, $x = t$.

**General solution:** $(x, y, z) = t(1, -2, 1)$, $t \in \mathbb{R}$.

---

## 8. Practice Problems

1. Test for consistency and solve (if consistent):
$$\begin{cases} x + y + z = 3 \\ 2x - y + z = 0 \\ 3x + y + 2z = 4 \end{cases}$$

2. Test for consistency:
$$\begin{cases} x + 2y + 3z = 1 \\ 2x + 3y + 4z = 2 \\ 3x + 5y + 7z = 4 \end{cases}$$

3. For what values of $k$ is the following system consistent?
$$\begin{cases} x + 2y = k \\ 3x + 6y = 12 \end{cases}$$

4. Show that $Ax = 0$ (homogeneous) always satisfies $\text{rank}(A) = \text{rank}([A \mid 0])$.

5. A system has 4 equations and 3 unknowns with $\text{rank}(A) = 3$. Under what condition on $\text{rank}([A|b])$ does a solution exist, and how many solutions are there?

---

## 9. References

- **Textbook:** Howard Anton, *Elementary Linear Algebra*, 11th Ed. — Section 1.2 & 4.6
- **Online:**
  - [MIT OCW — Complete Theory of Consistency](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - [Khan Academy — Rank and Solutions](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/null-column-space/v/null-space-2-calculating-the-null-space-of-a-matrix)
  - [Brilliant.org — Rouché-Capelli Theorem](https://brilliant.org/wiki/rouche-capelli-theorem/)
  - [Wolfram MathWorld — Rank](https://mathworld.wolfram.com/MatrixRank.html)

---

> **Previous:** [09 — Rank of a Matrix](./09_rank_of_matrix.md)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
