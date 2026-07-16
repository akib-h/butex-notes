# Algebra Refresher

![Level](https://img.shields.io/badge/level-pre--calculus-lightgrey)

## 1. Learning objectives

By the end of this lesson you should be able to:

- Factor quadratics, differences of squares, and sums/differences of cubes
- Simplify and combine rational expressions
- Apply exponent and logarithm rules fluently
- Solve linear, quadratic, exponential, and logarithmic equations by hand
- Recognize when an algebraic simplification is *invalid* (e.g. dividing by
  an expression that could be zero)

## 2. Prerequisites

None — this is the floor of the roadmap. Basic arithmetic and familiarity
with variables only.

## 3. Intuition before mathematics

Calculus asks questions like "what happens as `x` gets close to 3?" or "what
is the instantaneous rate of change here?" Almost every time you answer
those questions, you'll be handed a messy expression and the *actual*
calculus step is trivial — the work is in simplifying the expression first.
Algebra, in this course, is not background knowledge. It is the majority of
the arithmetic you will do.

## 4. Formal definitions

**Polynomial:** an expression of the form
`aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀`, where `n` is a non-negative integer and
`aₙ ≠ 0`. `n` is the **degree**.

**Rational expression:** a quotient `P(x)/Q(x)` of two polynomials, defined
for all `x` where `Q(x) ≠ 0`.

**Exponent rules** (for `a, b > 0` and real `m, n`):

| Rule | Statement |
|------|-----------|
| Product | `aᵐ · aⁿ = aᵐ⁺ⁿ` |
| Quotient | `aᵐ / aⁿ = aᵐ⁻ⁿ` |
| Power of a power | `(aᵐ)ⁿ = aᵐⁿ` |
| Power of a product | `(ab)ⁿ = aⁿbⁿ` |
| Negative exponent | `a⁻ⁿ = 1/aⁿ` |
| Zero exponent | `a⁰ = 1` |
| Fractional exponent | `a^(1/n) = ⁿ√a` |

**Logarithm rules** (for `a, b > 0`, `a ≠ 1`):

| Rule | Statement |
|------|-----------|
| Product | `logₐ(xy) = logₐx + logₐy` |
| Quotient | `logₐ(x/y) = logₐx − logₐy` |
| Power | `logₐ(xⁿ) = n·logₐx` |
| Change of base | `logₐx = ln(x)/ln(a)` |
| Inverse relationship | `logₐ(aˣ) = x` and `a^(logₐx) = x` |

## 5. Theorems

**Factor Theorem.** A polynomial `P(x)` has `(x − r)` as a factor if and
only if `P(r) = 0`.

**Zero Product Property.** If `A · B = 0`, then `A = 0` or `B = 0`. This is
the entire reason factoring is useful for solving equations — it turns one
hard equation into two easy ones.

## 6. Proof sketch

*Factor Theorem:* If `P(r) = 0`, polynomial division of `P(x)` by `(x − r)`
leaves a remainder equal to `P(r) = 0` (this is the Remainder Theorem), so
`(x − r)` divides evenly into `P(x)`. Conversely, if `(x − r)` is a factor,
substituting `x = r` makes that factor zero, forcing `P(r) = 0`.

## 7. Visual explanation

```text
Solving an equation? Start here.

Equation
   │
   ├── Linear (x appears to power 1)?
   │        └── Isolate x directly
   │
   ├── Quadratic (x² term present)?
   │        ├── Factorable? → Zero Product Property
   │        └── Not factorable? → Quadratic Formula
   │
   ├── Exponential (x in the exponent)?
   │        └── Take log of both sides
   │
   └── Logarithmic (log of x)?
            └── Rewrite in exponential form
```

## 8. Step-by-step derivations

**Deriving the Quadratic Formula** from `ax² + bx + c = 0` (completing the
square):

```text
ax² + bx + c = 0
x² + (b/a)x = −c/a                    divide by a
x² + (b/a)x + (b/2a)² = (b/2a)² − c/a  complete the square
(x + b/2a)² = (b² − 4ac) / 4a²
x + b/2a = ± √(b² − 4ac) / 2a
x = [−b ± √(b² − 4ac)] / 2a
```

## 9. Worked examples

### Example 1 — Factoring a quadratic

Factor `x² − 5x + 6`.

<details>
<summary>Hint</summary>

Find two numbers that multiply to 6 and add to −5.

</details>

<details>
<summary>Solution</summary>

We need `p · q = 6` and `p + q = −5`. Testing factor pairs of 6:
`(−2)(−3) = 6` and `(−2) + (−3) = −5`. ✓

So `x² − 5x + 6 = (x − 2)(x − 3)`.

</details>

### Example 2 — Simplifying a rational expression

Simplify `(x² − 9)/(x² + x − 6)` and state any restrictions.

<details>
<summary>Hint</summary>

Factor both numerator and denominator before canceling anything.

</details>

<details>
<summary>Solution</summary>

Numerator: `x² − 9 = (x − 3)(x + 3)` (difference of squares).

Denominator: `x² + x − 6 = (x + 3)(x − 2)`.

So:

```
(x − 3)(x + 3)
──────────────  =  (x − 3)/(x − 2),  x ≠ −3, x ≠ 2
(x + 3)(x − 2)
```

Both restrictions must be stated even after `(x + 3)` cancels — the original
expression was still undefined at `x = −3`.

</details>

### Example 3 — Solving an exponential equation

Solve `3ˣ⁺¹ = 81`.

<details>
<summary>Hint</summary>

Write 81 as a power of 3.

</details>

<details>
<summary>Solution</summary>

`81 = 3⁴`, so `3ˣ⁺¹ = 3⁴`. Since the bases match, exponents must be equal:

`x + 1 = 4 → x = 3`.

</details>

## 10. Practice problems

1. Factor `x² − 7x + 12`.
2. Factor `x³ − 8` (sum/difference of cubes).
3. Simplify `(2x² + 5x − 3)/(x² − 9)` and state restrictions.
4. Solve `2^(2x) = 32`.
5. Solve `log₃(x) = 4`.

<details>
<summary>Solutions</summary>

1. `(x − 3)(x − 4)`
2. Using `a³ − b³ = (a − b)(a² + ab + b²)`: `(x − 2)(x² + 2x + 4)`
3. `x² − 9 = (x−3)(x+3)`; `2x² + 5x − 3 = (2x − 1)(x + 3)`. Simplified:
   `(2x − 1)/(x − 3)`, `x ≠ 3, x ≠ −3`
4. `32 = 2⁵`, so `2x = 5 → x = 5/2`
5. `x = 3⁴ = 81`

</details>

## 11. Challenge problems

1. Solve `4ˣ − 2ˣ⁺¹ − 8 = 0`. *(Hint: substitute `u = 2ˣ`.)*
2. Factor completely: `x⁴ − 16`.
3. Simplify `1/(x−1) − 1/(x+1)` into a single rational expression.

<details>
<summary>Solutions</summary>

1. `u² − 2u − 8 = 0 → (u−4)(u+2) = 0 → u = 4` (reject `u = −2`, since
   `2ˣ > 0` always). So `2ˣ = 4 → x = 2`.
2. `x⁴ − 16 = (x² − 4)(x² + 4) = (x−2)(x+2)(x² + 4)` — the last factor is
   irreducible over the reals.
3. Common denominator `(x−1)(x+1)`:
   `[(x+1) − (x−1)] / [(x−1)(x+1)] = 2/(x² − 1)`

</details>

## 12. Common mistakes

- **Canceling terms instead of factors.** `(x + 3)/(x)` does **not** simplify
  to `1 + 3`. Only common *factors* cancel, never terms inside a sum.
- **Forgetting domain restrictions** after canceling a factor from a
  rational expression — the simplified expression is only equivalent to the
  original away from the canceled zero.
- **Sign errors in the Quadratic Formula**, especially with negative `b`.
  Write `−b` explicitly before substituting numbers.
- **Treating `logₐ(x + y)` as `logₐx + logₐy`.** There is no such rule —
  logs distribute over multiplication and division only, never addition.

## 13. Exam tips

- If a limit or derivative problem looks unsolvable, factor first — most
  "impossible" calculus problems are disguised algebra problems.
- Always factor numerator *and* denominator fully before canceling.
- Memorize the special factoring patterns below; they appear constantly in
  Chapters 2–6:

| Pattern | Factorization |
|---|---|
| `a² − b²` | `(a − b)(a + b)` |
| `a³ − b³` | `(a − b)(a² + ab + b²)` |
| `a³ + b³` | `(a + b)(a² − ab + b²)` |
| `a² + 2ab + b²` | `(a + b)²` |

## 14. Summary

Algebra is the load-bearing skill under every calculus technique. Fluency
in factoring, rational-expression simplification, and exponent/log rules
determines how much of your calculus time is spent on calculus versus on
arithmetic cleanup. Diagnose your gaps honestly using the checklist in the
folder [`README.md`](README.md) before moving on.

## 15. Navigation

**Previous:** [`README.md`](README.md) · **Next:** [`functions.md`](functions.md)
