# Orthogonal Matrices: Properties and Problems

## 📘 Claim

If $A$ is an orthogonal matrix, then:
1. $A^T$ is orthogonal
2. $A^{-1}$ is orthogonal

---

## 🔑 Definition

A matrix $A$ is **orthogonal** if:

$$A^T A = I$$

From this, an important consequence follows:

$$A^{-1} = A^T$$

---

## ✅ Proof 1: $A^T$ is orthogonal

To show $A^T$ is orthogonal, we must prove:

$$(A^T)^T (A^T) = I$$

Now,

$$(A^T)^T = A$$

So,

$$(A^T)^T (A^T) = A A^T$$

But since $A$ is orthogonal,

$$A^T A = I$$

Taking transpose on both sides:

$$(A^T A)^T = I^T$$

$$A^T (A^T)^T = I$$

$$A A^T = I$$

Hence,

$$(A^T)^T (A^T) = I \quad \checkmark$$

**Therefore, $A^T$ is orthogonal.**

---

## ✅ Proof 2: $A^{-1}$ is orthogonal

To show $A^{-1}$ is orthogonal, we must prove:

$$(A^{-1})^T A^{-1} = I$$

Since $A$ is orthogonal:

$$A^{-1} = A^T$$

Substitute:

$$(A^{-1})^T A^{-1} = (A^T)^T A^T$$

$$= A A^T$$

From earlier,

$$A A^T = I$$

So,

$$(A^{-1})^T A^{-1} = I \quad \checkmark$$

**Therefore, $A^{-1}$ is orthogonal.**

---

## 🎯 Final Conclusion

If $A$ is an orthogonal matrix, then:
- $A^T$ is orthogonal
- $A^{-1}$ is orthogonal

✨ **Proven.**

---

# 📝 Practice Problems

## Problem 1: Product of Orthogonal Matrices

**Statement:** If $A$ and $B$ are orthogonal matrices of the same size, prove that $AB$ is also orthogonal.

<details>
<summary>💡 Solution</summary>

To prove $AB$ is orthogonal, we must show:

$$(AB)^T (AB) = I$$

**Proof:**

$$(AB)^T (AB) = B^T A^T A B$$

Since $A$ is orthogonal, $A^T A = I$:

$$= B^T I B = B^T B$$

Since $B$ is orthogonal, $B^T B = I$:

$$= I \quad \checkmark$$

**Therefore, $AB$ is orthogonal.**

</details>

---

## Problem 2: Determinant of Orthogonal Matrix

**Statement:** If $A$ is an orthogonal matrix, prove that $\det(A) = \pm 1$.

<details>
<summary>💡 Solution</summary>

**Proof:**

Since $A$ is orthogonal:

$$A^T A = I$$

Taking determinants on both sides:

$$\det(A^T A) = \det(I)$$

Using the property $\det(AB) = \det(A) \det(B)$:

$$\det(A^T) \det(A) = 1$$

Since $\det(A^T) = \det(A)$:

$$\det(A)^2 = 1$$

Therefore:

$$\det(A) = \pm 1 \quad \checkmark$$

</details>

---

## Problem 3: Preservation of Norm

**Statement:** If $A$ is an orthogonal matrix and $\mathbf{x}$ is any vector, prove that $\|A\mathbf{x}\| = \|\mathbf{x}\|$.

<details>
<summary>💡 Solution</summary>

**Proof:**

The norm squared is:

$$\|A\mathbf{x}\|^2 = (A\mathbf{x})^T (A\mathbf{x})$$

$$= \mathbf{x}^T A^T A \mathbf{x}$$

Since $A$ is orthogonal, $A^T A = I$:

$$= \mathbf{x}^T I \mathbf{x} = \mathbf{x}^T \mathbf{x}$$

$$= \|\mathbf{x}\|^2$$

Taking square roots:

$$\|A\mathbf{x}\| = \|\mathbf{x}\| \quad \checkmark$$

**This shows orthogonal matrices preserve lengths (norms).**

</details>

---

## Problem 4: Preservation of Dot Product

**Statement:** If $A$ is an orthogonal matrix and $\mathbf{x}, \mathbf{y}$ are any vectors, prove that $(A\mathbf{x}) \cdot (A\mathbf{y}) = \mathbf{x} \cdot \mathbf{y}$.

<details>
<summary>💡 Solution</summary>

**Proof:**

The dot product can be written as:

$$(A\mathbf{x}) \cdot (A\mathbf{y}) = (A\mathbf{x})^T (A\mathbf{y})$$

$$= \mathbf{x}^T A^T A \mathbf{y}$$

Since $A$ is orthogonal, $A^T A = I$:

$$= \mathbf{x}^T I \mathbf{y} = \mathbf{x}^T \mathbf{y}$$

$$= \mathbf{x} \cdot \mathbf{y} \quad \checkmark$$

**This shows orthogonal matrices preserve angles and inner products.**

</details>

---

## Problem 5: Power of Orthogonal Matrix

**Statement:** If $A$ is an orthogonal matrix, prove that $A^n$ is orthogonal for any positive integer $n$.

<details>
<summary>💡 Solution</summary>

**Proof by induction:**

**Base case:** $n = 1$

$A^1 = A$ is orthogonal by assumption. ✓

**Inductive step:** Assume $A^k$ is orthogonal. We need to prove $A^{k+1}$ is orthogonal.

$$A^{k+1} = A^k \cdot A$$

By **Problem 1**, the product of two orthogonal matrices is orthogonal.

Since $A^k$ is orthogonal (by induction hypothesis) and $A$ is orthogonal (given), their product $A^{k+1}$ is orthogonal. ✓

**Therefore, $A^n$ is orthogonal for all positive integers $n$.** $\checkmark$

</details>

---

## Problem 6: Orthogonal Matrix Example

**Statement:** Verify that the following rotation matrix is orthogonal:

$$A = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

<details>
<summary>💡 Solution</summary>

**Verification:**

First, find $A^T$:

$$A^T = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix}$$

Now compute $A^T A$:

$$A^T A = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

$$= \begin{pmatrix} \cos^2\theta + \sin^2\theta & -\cos\theta\sin\theta + \sin\theta\cos\theta \\ -\sin\theta\cos\theta + \cos\theta\sin\theta & \sin^2\theta + \cos^2\theta \end{pmatrix}$$

$$= \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I \quad \checkmark$$

**Therefore, the rotation matrix is orthogonal.**

</details>

---

## 🌟 Key Takeaways

1. **Orthogonal matrices preserve geometric properties:** lengths, angles, and volumes
2. **Columns (and rows) of orthogonal matrices form orthonormal sets**
3. **Orthogonal transformations are rigid motions:** rotations and reflections
4. **Computing inverses is trivial:** just take the transpose!

---

## 📚 Additional Resources

- Linear Algebra textbooks (Strang, Axler)
- MIT OpenCourseWare: Linear Algebra
- 3Blue1Brown: Essence of Linear Algebra (YouTube)
