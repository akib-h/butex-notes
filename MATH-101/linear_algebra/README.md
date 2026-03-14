---
subject: MATH-101
topic: Linear Algebra — Module README
date: 2026-03-13
tags: [readme, MATH-101, linear-algebra, index]
---

# 📐 MATH-101 — Linear Algebra Module

> **Course:** Mathematics - I (MATH-101) | Bangladesh University of Textiles (BUTEX)  
> **Department:** Fabric Engineering  
> **Last Updated:** 2026-03-13

---

## 📋 Syllabus Reference

> **3. Linear Algebra:** Matrix, Determinant, Inverse matrix, System of linear equations, Consistent and inconsistent system, Elementary operations, Solution of a system of linear equations, Gaussian elimination method, Cramer's rule, Matrix inversion method, Triangular, Echelon and canonical form of matrix, Rank of matrix, Test of consistency of a system of linear equations using rank of matrix.

---

## 🗂️ Topic Index

| # | File | Topic | Status |
|:---:|:---|:---|:---:|
| 01 | [01_matrix_fundamentals.md](./01_matrix_fundamentals.md) | Matrix — Types, Operations, Transpose | ✅ |
| 02 | [02_determinant.md](./02_determinant.md) | Determinant — Minors, Cofactors, Properties | ✅ |
| 03 | [03_inverse_matrix.md](./03_inverse_matrix.md) | Inverse Matrix — Adjoint & Gauss-Jordan Methods | ✅ |
| 04 | [04_system_linear_equations.md](./04_system_linear_equations.md) | System of Linear Equations — Consistent & Inconsistent | ✅ |
| 05 | [05_elementary_operations.md](./05_elementary_operations.md) | Elementary Row & Column Operations | ✅ |
| 06 | [06_gaussian_elimination.md](./06_gaussian_elimination.md) | Gaussian & Gauss-Jordan Elimination | ✅ |
| 07 | [07_cramers_rule.md](./07_cramers_rule.md) | Cramer's Rule | ✅ |
| 08 | [08_echelon_canonical_form.md](./08_echelon_canonical_form.md) | Triangular, Echelon & Canonical Form | ✅ |
| 09 | [09_rank_of_matrix.md](./09_rank_of_matrix.md) | Rank of a Matrix | ✅ |
| 10 | [10_consistency_test_rank.md](./10_consistency_test_rank.md) | Test of Consistency Using Rank | ✅ |

---

## 🔗 Key Concepts Map

```
MATRIX
 ├── Types (Square, Diagonal, Identity, Triangular, Symmetric...)
 ├── Operations (Addition, Multiplication, Scalar)
 └── Transpose

DETERMINANT
 ├── 2×2 and 3×3 formulas
 ├── Minors & Cofactors
 ├── Cofactor Expansion (Laplace)
 └── Properties (swap sign, scale, product rule...)

INVERSE MATRIX
 ├── Adjoint Method → A⁻¹ = adj(A)/det(A)
 └── Gauss-Jordan Method → [A|I] → [I|A⁻¹]

SYSTEM Ax = b
 ├── Elementary Operations (3 types)
 ├── Gaussian Elimination → REF → Back-substitution
 ├── Gauss-Jordan → RREF → Direct solution
 ├── Cramer's Rule → xⱼ = det(Aⱼ)/det(A)
 └── Matrix Inversion → x = A⁻¹b

FORMS
 ├── Triangular (Upper / Lower)
 ├── Row Echelon Form (REF)
 ├── Reduced Row Echelon Form (RREF = Canonical)
 └── Normal Form [Ir | 0; 0 | 0]

RANK
 ├── Definition: # of non-zero rows in REF
 ├── Properties
 ├── Rank-Nullity Theorem: rank + nullity = n
 └── Consistency Test: rank(A) vs rank([A|b])
         ├── ≠ → No solution
         ├── = r = n → Unique solution
         └── = r < n → Infinite solutions
```

---

## 📚 Recommended Study Order

1. Start with **matrices** (types and operations) — foundational
2. Learn **determinants** — needed for Cramer's Rule and inverse
3. Study **inverse matrix** — needed to solve $Ax = b$ via $x = A^{-1}b$
4. Understand **elementary operations** — the mechanics of all algorithms
5. Practice **Gaussian elimination** — the most general solving method
6. Apply **Cramer's Rule** — for small exact problems
7. Master **echelon forms** — understand structure of solutions
8. Compute **rank** — fundamental to understanding solution spaces
9. Apply **consistency tests** — combine everything

---

## 🧮 Quick Formula Reference

| Concept | Formula |
|:---|:---|
| 2×2 Determinant | $\det = ad - bc$ |
| 2×2 Inverse | $A^{-1} = \frac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$ |
| General Inverse | $A^{-1} = \frac{1}{\det(A)}\text{adj}(A)$ |
| Cramer's Rule | $x_j = \det(A_j) / \det(A)$ |
| Rank-Nullity | $\text{rank}(A) + \text{nullity}(A) = n$ |
| Consistency | System consistent $\iff \text{rank}(A) = \text{rank}([A\|b])$ |
| Unique solution | $\text{rank}(A) = \text{rank}([A\|b]) = n$ |
| Infinite solutions | $\text{rank}(A) = \text{rank}([A\|b]) < n$ |

---

## 🌐 Key References

- [MIT OCW 18.06 — Linear Algebra (Gilbert Strang)](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
- [3Blue1Brown — Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
- [Khan Academy — Linear Algebra](https://www.khanacademy.org/math/linear-algebra)
- [Paul's Online Notes — Linear Algebra](https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx)

---

*Made with 📚 for BUTEX Fabric Engineering | MATH-101 Linear Algebra*
