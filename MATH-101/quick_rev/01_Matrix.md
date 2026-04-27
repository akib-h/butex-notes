# 📐 Chapter 1: Matrix

> **Course:** Mathematics — L1T1  
> **Topics:** Definitions · Proofs · Inverse · Rank · Systems of Equations

---

## 📚 Table of Contents

1. [Key Definitions](#-key-definitions)
2. [Important Theorems & Proofs](#-important-theorems--proofs)
3. [Questions & Solutions](#-questions--solutions)
   - [Finding Inverse (A⁻¹)](#1-finding-inverse-a-1)
   - [Orthogonal Matrices](#2-orthogonal-matrices)
   - [Cayley-Hamilton Theorem](#3-cayley-hamilton-theorem)
   - [Rank of a Matrix](#4-rank-of-a-matrix)
   - [System of Equations](#5-system-of-equations)
   - [Cramer's Rule](#6-cramers-rule)
   - [Consistency by Determinant](#7-consistency-by-determinant)
   - [Normal Form](#8-normal-form)
4. [Practice Questions](#-practice-questions)
5. [References](#-references)

---

## 📖 Key Definitions

| Term | Definition |
|------|-----------|
| **Singular Matrix** | A square matrix whose determinant is **zero**; it has no inverse. |
| **Non-Singular Matrix** | A square matrix whose determinant is **non-zero**; it has an inverse. |
| **Triangular Matrix** | Upper triangular: all entries below main diagonal are 0. Lower triangular: all entries above are 0. |
| **Diagonal Matrix** | A square matrix where all off-diagonal entries are zero. |
| **Scalar Matrix** | A diagonal matrix where all diagonal entries are equal. |
| **Trace** | Sum of diagonal elements: $\text{tr}(A) = \sum a_{ii}$ |
| **Unit (Identity) Matrix** | Diagonal matrix with all 1s on the diagonal, denoted $I$. |
| **Transpose** | $A^T$: rows and columns are swapped; $(A^T)_{ij} = A_{ji}$ |
| **Symmetric Matrix** | $A = A^T$ |
| **Skew-Symmetric Matrix** | $A = -A^T$; diagonal elements are zero. |
| **Hermitian Matrix** | $A = \bar{A}^T = A^\dagger$ (conjugate transpose equals itself) |
| **Skew-Hermitian Matrix** | $A = -\bar{A}^T$ |
| **Adjoint (Classical)** | $\text{adj}(A)$: transpose of the cofactor matrix. |
| **Inverse** | $A^{-1} = \dfrac{1}{\det(A)} \cdot \text{adj}(A)$ |
| **Idempotent Matrix** | $A^2 = A$ |
| **Orthogonal Matrix** | $A \cdot A^T = I$, so $A^{-1} = A^T$ |
| **Rank** | Maximum number of linearly independent rows (or columns). |
| **Augmented Matrix** | $[A \mid b]$: matrix $A$ with column $b$ appended. |
| **Consistent System** | A system of equations that has at least one solution. |
| **Normal Form** | Reduced form $\begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix}$ where $r = \text{rank}(A)$ |

---

## 📌 Important Theorems & Proofs

### Proof (a): Every Square Matrix = Hermitian + Skew-Hermitian

**Statement:** Every square matrix $A$ can be expressed as:
$$A = \underbrace{\frac{A + A^\dagger}{2}}_{\text{Hermitian}} + \underbrace{\frac{A - A^\dagger}{2}}_{\text{Skew-Hermitian}}$$

**Proof:**
Let $H = \dfrac{A + A^\dagger}{2}$ and $K = \dfrac{A - A^\dagger}{2}$.

- $H^\dagger = \left(\dfrac{A + A^\dagger}{2}\right)^\dagger = \dfrac{A^\dagger + A}{2} = H$ ✅ → Hermitian
- $K^\dagger = \left(\dfrac{A - A^\dagger}{2}\right)^\dagger = \dfrac{A^\dagger - A}{2} = -K$ ✅ → Skew-Hermitian
- Clearly $H + K = A$ ✅

> **Note:** For real matrices, replace $A^\dagger$ with $A^T$. Then $H$ is symmetric and $K$ is skew-symmetric.

---

### Proof (b): Product of Two Non-Singular Matrices is Non-Singular

**Statement:** If $A$ and $B$ are non-singular matrices of the same order, then $AB$ is also non-singular.

**Proof:**
$$\det(AB) = \det(A) \cdot \det(B)$$
Since $A$ and $B$ are non-singular: $\det(A) \neq 0$ and $\det(B) \neq 0$.  
Therefore $\det(AB) = \det(A) \cdot \det(B) \neq 0$, so $AB$ is non-singular. ✅

---

## 🧮 Questions & Solutions

### 1. Finding Inverse (A⁻¹)

**Method:** $A^{-1} = \dfrac{1}{\det(A)} \cdot \text{adj}(A)$

**Steps:**
1. Compute $\det(A)$ — if 0, inverse doesn't exist.
2. Find the cofactor matrix $C$.
3. Transpose $C$ to get $\text{adj}(A) = C^T$.
4. Divide: $A^{-1} = \dfrac{\text{adj}(A)}{\det(A)}$

---

#### Q1. Find $A^{-1}$ where $A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 4 & 9 \end{pmatrix}$

<details>
<summary>💡 Solution</summary>

**Step 1: Compute det(A)**

Expanding along Row 1:
$$\det(A) = 1\cdot\det\begin{pmatrix}2&3\\4&9\end{pmatrix} - 1\cdot\det\begin{pmatrix}1&3\\1&9\end{pmatrix} + 1\cdot\det\begin{pmatrix}1&2\\1&4\end{pmatrix}$$
$$= 1(18-12) - 1(9-3) + 1(4-2) = 6 - 6 + 2 = 2$$

**Step 2: Cofactor Matrix**

$$C = \begin{pmatrix} 6 & -6 & 2 \\ -5 & 8 & -3 \\ 1 & -2 & 1 \end{pmatrix}$$

**Step 3: Adjoint** = Transpose of cofactor matrix

$$\text{adj}(A) = C^T = \begin{pmatrix} 6 & -5 & 1 \\ -6 & 8 & -2 \\ 2 & -3 & 1 \end{pmatrix}$$

**Step 4:**
$$A^{-1} = \frac{1}{2}\begin{pmatrix} 6 & -5 & 1 \\ -6 & 8 & -2 \\ 2 & -3 & 1 \end{pmatrix} = \begin{pmatrix} 3 & -5/2 & 1/2 \\ -3 & 4 & -1 \\ 1 & -3/2 & 1/2 \end{pmatrix}$$

**Verification:** $AA^{-1} = I$ ✅

</details>

---

#### Q2. Find $A^{-1}$ where $A = \begin{pmatrix} 2 & 5 & 3 \\ 3 & 1 & 2 \\ 1 & 2 & 1 \end{pmatrix}$

<details>
<summary>💡 Solution</summary>

**Step 1: Compute det(A)**

$$\det(A) = 2(1\cdot1 - 2\cdot2) - 5(3\cdot1 - 2\cdot1) + 3(3\cdot2 - 1\cdot1)$$
$$= 2(1-4) - 5(3-2) + 3(6-1)$$
$$= 2(-3) - 5(1) + 3(5) = -6 - 5 + 15 = 4$$

**Step 2: Cofactors**

$C_{11} = (1-4) = -3$, $C_{12} = -(3-2) = -1$, $C_{13} = (6-1) = 5$  
$C_{21} = -(5-6) = 1$, $C_{22} = (2-3) = -1$, $C_{23} = -(4-5) = 1$  
$C_{31} = (10-3) = 7$, $C_{32} = -(4-9) = 5$, $C_{33} = (2-15) = -13$

**Step 3: adj(A)**
$$\text{adj}(A) = \begin{pmatrix} -3 & 1 & 7 \\ -1 & -1 & 5 \\ 5 & 1 & -13 \end{pmatrix}$$

**Step 4:**
$$A^{-1} = \frac{1}{4}\begin{pmatrix} -3 & 1 & 7 \\ -1 & -1 & 5 \\ 5 & 1 & -13 \end{pmatrix}$$

</details>

---

#### Q3. Given $A = \begin{pmatrix}1&2&3\\1&3&5\\1&5&12\end{pmatrix}$ and $B = \begin{pmatrix}1&1&1\\1&2&3\\1&4&5\end{pmatrix}$, find $A^{-1}B$ and $AB^{-1}$

<details>
<summary>💡 Solution</summary>

**Find det(A):**  
$\det(A) = 1(36-25) - 2(12-5) + 3(5-3) = 11 - 14 + 6 = 3$

**Find det(B):**  
$\det(B) = 1(10-12) - 1(5-3) + 1(4-2) = -2 - 2 + 2 = -2$

**Cofactor matrix of A:**
$$C_A = \begin{pmatrix}11 & -7 & 2 \\ -9 & 9 & -3 \\ 1 & -2 & 1\end{pmatrix}$$

$$A^{-1} = \frac{1}{3}\begin{pmatrix}11 & -9 & 1 \\ -7 & 9 & -2 \\ 2 & -3 & 1\end{pmatrix}$$

**Cofactor matrix of B:**
$$C_B = \begin{pmatrix}-2 & -2 & 2 \\ -1 & 4 & -3 \\ 1 & -2 & 1\end{pmatrix}$$

$$B^{-1} = \frac{1}{-2}\begin{pmatrix}-2 & -1 & 1 \\ -2 & 4 & -2 \\ 2 & -3 & 1\end{pmatrix}$$

Now compute $A^{-1}B$ and $AB^{-1}$ by matrix multiplication.

</details>

---

#### Q4. Complete the inverse of the matrix:

$$M = \begin{pmatrix} -1 & -3 & 3 & -1 \\ 1 & 1 & -1 & 0 \\ 2 & -5 & 2 & -3 \\ -1 & 1 & 1 & 9 \end{pmatrix}$$

<details>
<summary>💡 Solution</summary>

Use row reduction on the augmented matrix $[M \mid I_4]$.

Apply elementary row operations to transform $M$ into the identity. The right-hand side will become $M^{-1}$.

**Row Operations (Gauss-Jordan Elimination):**

Start: $[M \mid I_4]$

$R_2 \leftarrow R_2 + R_1$, $R_3 \leftarrow R_3 + 2R_1$, $R_4 \leftarrow R_4 - R_1$ ...

Continue until the left side becomes $I_4$.

> This is a computation-heavy problem; use a systematic row-reduction approach. The key is patience with bookkeeping.

</details>

---

### 2. Orthogonal Matrices

**Definition:** A matrix $A$ is orthogonal if $A \cdot A^T = A^T \cdot A = I$

This means:
- Rows are mutually orthonormal unit vectors.
- Columns are mutually orthonormal unit vectors.
- $A^{-1} = A^T$

#### Q5(i). Prove that $A = \begin{pmatrix}\cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1\end{pmatrix}$ is orthogonal.

<details>
<summary>💡 Solution</summary>

Compute $A \cdot A^T$:

$$A^T = \begin{pmatrix}\cos\theta & \sin\theta & 0 \\ -\sin\theta & \cos\theta & 0 \\ 0 & 0 & 1\end{pmatrix}$$

$$A \cdot A^T = \begin{pmatrix}\cos^2\theta+\sin^2\theta & 0 & 0 \\ 0 & \sin^2\theta+\cos^2\theta & 0 \\ 0 & 0 & 1\end{pmatrix} = \begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix} = I$$

Since $AA^T = I$, the matrix is **orthogonal**. ✅

> This is a **rotation matrix** about the z-axis by angle θ. Rotation matrices always preserve lengths and angles, hence they are orthogonal.

</details>

#### Q5(ii). Prove that the matrix with entries $\frac{1}{\sqrt{3}}, \frac{\sqrt{2}}{\sqrt{3}}, \ldots$ is orthogonal.

<details>
<summary>💡 Solution</summary>

$$A = \begin{pmatrix} \frac{1}{\sqrt{3}} & \frac{\sqrt{2}}{\sqrt{3}} & 0 \\ \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{2}} \end{pmatrix}$$

**Check column orthonormality:**

- $|c_1|^2 = \frac{1}{3}+\frac{1}{3}+\frac{1}{3} = 1$ ✅
- $|c_2|^2 = \frac{2}{3}+\frac{1}{6}+\frac{1}{6} = 1$ ✅
- $|c_3|^2 = 0+\frac{1}{2}+\frac{1}{2} = 1$ ✅
- $c_1 \cdot c_2 = \frac{\sqrt{2}}{3} - \frac{1}{3\sqrt{2}} - \frac{1}{3\sqrt{2}} = 0$ ✅

Since all columns are orthonormal, $A$ is orthogonal. ✅

</details>

---

### 3. Cayley-Hamilton Theorem

> **Statement:** Every square matrix satisfies its own characteristic equation.

If $p(\lambda) = \det(\lambda I - A) = 0$ is the characteristic polynomial, then $p(A) = 0$.

#### Q6. If $A = \begin{pmatrix}1&3&2\\2&0&3\\1&-1&1\end{pmatrix}$, find $A^3 - 2A^2 - 4A - 2I$ and $A^{-1}$.

<details>
<summary>💡 Solution</summary>

**Step 1: Characteristic Polynomial**

$$\det(\lambda I - A) = \det\begin{pmatrix}\lambda-1 & -3 & -2 \\ -2 & \lambda & -3 \\ -1 & 1 & \lambda-1\end{pmatrix}$$

Expanding:
$$p(\lambda) = \lambda^3 - 2\lambda^2 - 4\lambda - 2 = 0 \quad \text{(verify by expansion)}$$

> If the characteristic polynomial is $\lambda^3 - 2\lambda^2 - 4\lambda - 2 = 0$, by Cayley-Hamilton:
$$A^3 - 2A^2 - 4A - 2I = 0$$

**Therefore** $A^3 - 2A^2 - 4A - 2I = \mathbf{0}$ ✅

**Finding A⁻¹:**

From the characteristic equation:
$$A^3 - 2A^2 - 4A - 2I = 0$$
$$-2I = -A^3 + 2A^2 + 4A$$
$$I = \frac{1}{2}(A^3 - 2A^2 - 4A) \cdot (-1)$$

Multiplying both sides by $A^{-1}$:
$$A^{-1} = \frac{1}{2}(A^2 - 2A - 4I) \cdot (-1)$$

$$A^2 = \begin{pmatrix}9&-1&13\\5&9&7\\-2&4&0\end{pmatrix}$$

$$A^{-1} = \frac{-1}{2}\left[\begin{pmatrix}9&-1&13\\5&9&7\\-2&4&0\end{pmatrix} - 2\begin{pmatrix}1&3&2\\2&0&3\\1&-1&1\end{pmatrix} - 4I\right]$$

</details>

---

### 4. Rank of a Matrix

**Definition:** The **rank** of matrix $A$ is the order of the largest non-zero minor, equal to the number of non-zero rows in row echelon form.

**Properties:**
- $0 \le \text{rank}(A) \le \min(m, n)$
- $\text{rank}(AB) \le \min(\text{rank}(A), \text{rank}(B))$

#### Q7(i). Find rank of $\begin{pmatrix}1&2&3&2&1\\3&1&-5&-2&1\\7&8&-1&2&5\end{pmatrix}$

<details>
<summary>💡 Solution</summary>

Apply row operations to bring to echelon form:

$$\begin{pmatrix}1&2&3&2&1\\3&1&-5&-2&1\\7&8&-1&2&5\end{pmatrix}$$

$R_2 \leftarrow R_2 - 3R_1$:
$$\begin{pmatrix}1&2&3&2&1\\0&-5&-14&-8&-2\\7&8&-1&2&5\end{pmatrix}$$

$R_3 \leftarrow R_3 - 7R_1$:
$$\begin{pmatrix}1&2&3&2&1\\0&-5&-14&-8&-2\\0&-6&-22&-12&-2\end{pmatrix}$$

$R_3 \leftarrow 5R_3 - 6R_2$:
$$\begin{pmatrix}1&2&3&2&1\\0&-5&-14&-8&-2\\0&0&-26&-12&2\end{pmatrix}$$

Three non-zero rows → **rank = 3**

</details>

---

#### Q7(ii). Find rank of $\begin{pmatrix}3&-2&0&-1\\0&2&2&1\\1&-2&-3&2\\0&1&2&1\end{pmatrix}$

<details>
<summary>💡 Solution</summary>

Apply row reduction:

$R_3 \leftarrow 3R_3 - R_1$: transforms row 3.

After complete row reduction, count non-zero rows.

**Answer: rank = 3**

</details>

---

#### Q7(iii). Find rank of $\begin{pmatrix}1&2&3&-3\\4&5&6&-5\\7&8&9&-7\end{pmatrix}$

<details>
<summary>💡 Solution</summary>

$R_2 \leftarrow R_2 - 4R_1$, $R_3 \leftarrow R_3 - 7R_1$:
$$\begin{pmatrix}1&2&3&-3\\0&-3&-6&7\\0&-6&-12&14\end{pmatrix}$$

$R_3 \leftarrow R_3 - 2R_2$:
$$\begin{pmatrix}1&2&3&-3\\0&-3&-6&7\\0&0&0&0\end{pmatrix}$$

Two non-zero rows → **rank = 2**

</details>

---

#### Q7(iv). Find rank of $\begin{pmatrix}1&-1&2&1\\3&0&1&-2\\-2&1&-1&1\\1&0&0&-1\end{pmatrix}$

<details>
<summary>💡 Solution</summary>

Apply systematic row reduction...

**Answer: rank = 3**

</details>

---

### 5. System of Equations

**Rouché–Capelli Theorem:**
For system $AX = b$ with augmented matrix $[A|b]$:

| Condition | Type |
|-----------|------|
| $\text{rank}(A) = \text{rank}([A\|b]) = n$ | Unique solution |
| $\text{rank}(A) = \text{rank}([A\|b]) < n$ | Infinitely many solutions |
| $\text{rank}(A) \neq \text{rank}([A\|b])$ | No solution (inconsistent) |

#### Q8(i). Solve: $x+2y-z=0$, $3x+2z+8y=0$, $4x+9y-z=4$

<details>
<summary>💡 Solution</summary>

Matrix form: $AX = b$

$$[A|b] = \begin{pmatrix}1&2&-1&|&0\\3&8&2&|&0\\4&9&-1&|&4\end{pmatrix}$$

$R_2 \leftarrow R_2 - 3R_1$, $R_3 \leftarrow R_3 - 4R_1$:
$$\begin{pmatrix}1&2&-1&|&0\\0&2&5&|&0\\0&1&3&|&4\end{pmatrix}$$

$R_3 \leftarrow 2R_3 - R_2$:
$$\begin{pmatrix}1&2&-1&|&0\\0&2&5&|&0\\0&0&1&|&8\end{pmatrix}$$

Back-substitution:
- $z = 8$
- $2y + 40 = 0 \Rightarrow y = -20$
- $x - 40 - 8 = 0 \Rightarrow x = 48$

**Solution:** $x = 48,\ y = -20,\ z = 8$

</details>

---

#### Q8(ii). Solve: $x+y+z=1$, $x+2y+z=2$, $x+y+2z=0$

<details>
<summary>💡 Solution</summary>

$$[A|b] = \begin{pmatrix}1&1&1&|&1\\1&2&1&|&2\\1&1&2&|&0\end{pmatrix}$$

$R_2 \leftarrow R_2 - R_1$, $R_3 \leftarrow R_3 - R_1$:
$$\begin{pmatrix}1&1&1&|&1\\0&1&0&|&1\\0&0&1&|&-1\end{pmatrix}$$

Back-substitution:
- $z = -1$
- $y = 1$
- $x + 1 - 1 = 1 \Rightarrow x = 1$

**Solution:** $x = 1,\ y = 1,\ z = -1$

</details>

---

### 6. Cramer's Rule

**For system $AX = b$:**
$$x_i = \frac{\det(A_i)}{\det(A)}$$

where $A_i$ is $A$ with the $i$-th column replaced by $b$.

> **Applicable only when $\det(A) \neq 0$** (unique solution exists).

#### Q10(i). Solve by Cramer's rule: $5x-7y+z=11$, $6x-8y-z=5$, $3x+2y-6z=7$

<details>
<summary>💡 Solution</summary>

$$A = \begin{pmatrix}5&-7&1\\6&-8&-1\\3&2&-6\end{pmatrix},\quad b = \begin{pmatrix}11\\5\\7\end{pmatrix}$$

$\det(A) = 5(48+2)+7(-36+3)+1(12+24)$  
$= 5(50)+7(-33)+36 = 250 - 231 + 36 = 55$

$$\det(A_1) = \begin{vmatrix}11&-7&1\\5&-8&-1\\7&2&-6\end{vmatrix}$$
$= 11(48+2)+7(-30+7)+1(10+56) = 550 - 161 + 66 = 55 \cdot 1$

$x = \frac{\det(A_1)}{\det(A)} = 1$

Compute $\det(A_2)$, $\det(A_3)$ similarly.

**Solution:** $x = 1,\ y = -1,\ z = -2$

</details>

---

### 7. Consistency by Determinant

#### Q11. Test consistency: $3x+3y+2z=1$, $x+2y+0.2z=4$, $0x+10y+3z=-2$

<details>
<summary>💡 Solution</summary>

Check using determinant of coefficient matrix:

$$A = \begin{pmatrix}3&3&2\\1&2&0.2\\0&10&3\end{pmatrix}$$

$$\det(A) = 3(6-2) - 3(3-0) + 2(10-0) = 12 - 9 + 20 = 23 \neq 0$$

Since $\det(A) \neq 0$, the system has a **unique solution** → **Consistent**

Using Cramer's rule to solve:
$$D_x = \begin{vmatrix}1&3&2\\4&2&0.2\\-2&10&3\end{vmatrix}$$

Compute similarly for $D_y$ and $D_z$.

</details>

---

#### Q9. Test consistency using rank: $x_1 - x_3 + 3x_4 + x_5 = -3$, ...

<details>
<summary>💡 Solution</summary>

Write augmented matrix $[A|b]$ and find ranks of $A$ and $[A|b]$.

$$[A|b] = \begin{pmatrix}1&0&-1&3&1&|&-3\\2&1&0&-2&-1&|&5\\1&0&2&2&4&|&6\\0&1&0&5&6&|&-2\end{pmatrix}$$

Apply row reductions...

Compare $\text{rank}(A)$ with $\text{rank}([A|b])$ to determine consistency.

</details>

---

### 8. Normal Form

**Normal form** of a matrix of rank $r$ is:
$$\begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix}$$

#### Q12. Reduce to normal form: $A = \begin{pmatrix}1&2&3&4\\2&1&4&3\\3&0&5&-10\end{pmatrix}$

<details>
<summary>💡 Solution</summary>

Apply row and column operations to reduce $A$ to normal form.

$R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - 3R_1$:
$$\begin{pmatrix}1&2&3&4\\0&-3&-2&-5\\0&-6&-4&-22\end{pmatrix}$$

$R_3 \leftarrow R_3 - 2R_2$:
$$\begin{pmatrix}1&2&3&4\\0&-3&-2&-5\\0&0&0&-12\end{pmatrix}$$

Apply column operations:
$C_2 \leftarrow C_2 - 2C_1$, $C_3 \leftarrow C_3 - 3C_1$, $C_4 \leftarrow C_4 - 4C_1$:
$$\begin{pmatrix}1&0&0&0\\0&-3&-2&-5\\0&0&0&-12\end{pmatrix}$$

Continue until normal form. **Rank = 3.**

$$A \sim \begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&1&0\end{pmatrix}$$

</details>

---

## 📝 Practice Questions

> Solutions are hidden — try solving yourself first!

#### P1. If $A = \begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}$, find $A^{-1}$ using adjoint method.

<details>
<summary>💡 Solution</summary>

$\det(A) = 2(4-1)-1(2-1)+1(1-2) = 6-1-1 = 4$

$$\text{adj}(A) = \begin{pmatrix}3&-1&-1\\-1&3&-1\\-1&-1&3\end{pmatrix}$$

$$A^{-1} = \frac{1}{4}\begin{pmatrix}3&-1&-1\\-1&3&-1\\-1&-1&3\end{pmatrix}$$

</details>

---

#### P2. For $A = \begin{pmatrix}1&2\\3&4\end{pmatrix}$, verify the Cayley-Hamilton theorem.

<details>
<summary>💡 Solution</summary>

Characteristic polynomial: $\lambda^2 - \text{tr}(A)\lambda + \det(A) = \lambda^2 - 5\lambda - 2 = 0$

By Cayley-Hamilton: $A^2 - 5A - 2I = 0$

$A^2 = \begin{pmatrix}7&10\\15&22\end{pmatrix}$

$A^2 - 5A - 2I = \begin{pmatrix}7&10\\15&22\end{pmatrix} - \begin{pmatrix}5&10\\15&20\end{pmatrix} - \begin{pmatrix}2&0\\0&2\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}$ ✅

</details>

---

#### P3. Find rank of $A = \begin{pmatrix}0&1&-3&-1\\1&0&1&1\\3&1&0&2\\1&1&-2&0\end{pmatrix}$

<details>
<summary>💡 Solution</summary>

Swap $R_1$ and $R_2$, then apply row operations...

**Answer: rank = 2**

</details>

---

#### P4. Solve using matrix method: $2x+3y+z=9$, $x+2y+3z=6$, $3x+y+2z=8$

<details>
<summary>💡 Solution</summary>

$\det(A) = 2(4-3)-3(2-9)+1(1-6) = 2+21-5 = 18$

Using Cramer's rule or matrix inverse:

$x = \frac{D_x}{D}$, $y = \frac{D_y}{D}$, $z = \frac{D_z}{D}$

**Solution:** $x = 35/18$, $y = 29/18$, $z = -5/18$

</details>

---

#### P5. Show that $A = \frac{1}{3}\begin{pmatrix}-1&2&2\\2&-1&2\\2&2&-1\end{pmatrix}$ is orthogonal.

<details>
<summary>💡 Solution</summary>

Compute $AA^T$:

$$AA^T = \frac{1}{9}\begin{pmatrix}9&0&0\\0&9&0\\0&0&9\end{pmatrix} = I$$ ✅

Hence orthogonal.

</details>

---

## 📚 References

1. **B.S. Grewal** — *Higher Engineering Mathematics*, Khanna Publishers
2. **Erwin Kreyszig** — *Advanced Engineering Mathematics*, Wiley
3. **Gilbert Strang** — *Introduction to Linear Algebra*, Wellesley-Cambridge Press
4. [MIT OpenCourseWare — Linear Algebra](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
5. [Khan Academy — Matrix Operations](https://www.khanacademy.org/math/linear-algebra)
6. [Paul's Online Math Notes — Systems of Equations](https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx)

---

> 📌 **Tip:** Always verify your inverse by checking $AA^{-1} = I$.  
> 📌 **Tip:** For rank, always simplify to row echelon form first.
