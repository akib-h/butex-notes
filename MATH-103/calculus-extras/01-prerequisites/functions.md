# Functions Refresher

![Level](https://img.shields.io/badge/level-pre--calculus-lightgrey)

## 1. Learning objectives

By the end of this lesson you should be able to:

- Determine the domain and range of a function algebraically
- Compose two functions and evaluate `(f∘g)(x)`
- Determine whether a function has an inverse, and find it when it does
- Work with piecewise-defined functions
- Classify functions as even, odd, or neither

## 2. Prerequisites

[`algebra.md`](algebra.md) — factoring and solving equations are used
throughout.

## 3. Intuition before mathematics

A function is a rule: put a number in, get exactly one number out. Calculus
is entirely about *how the output changes as the input changes* — so before
you can ask "how fast does `f` change," you need to be completely sure what
`f` accepts as input (its domain) and how it behaves when you feed one
function's output into another (composition). Almost every "trick" question
in early calculus is really a domain question in disguise.

## 4. Formal definitions

**Function:** a rule `f: D → R` assigning to each `x ∈ D` exactly one value
`f(x) ∈ R`. `D` is the **domain**, and the set of actual outputs is the
**range**.

**Composition:** `(f ∘ g)(x) = f(g(x))`. Domain of `f∘g` is the set of `x`
in the domain of `g` such that `g(x)` is in the domain of `f`.

**Inverse function:** `f⁻¹` exists if and only if `f` is **one-to-one**
(injective) — no two distinct inputs give the same output. If it exists,
`f⁻¹(f(x)) = x` and `f(f⁻¹(x)) = x`.

**Even function:** `f(−x) = f(x)` for all `x` (symmetric about the y-axis).

**Odd function:** `f(−x) = −f(x)` for all `x` (symmetric about the origin).

## 5. Theorems

**Horizontal Line Test.** A function is one-to-one (and therefore invertible)
if and only if no horizontal line intersects its graph more than once.

**Domain of a composition.** `x` is in the domain of `f∘g` exactly when `x`
is in the domain of `g`, *and* `g(x)` is in the domain of `f`. Both
conditions must be checked — this is the single most common source of
domain errors involving compositions.

## 6. Proof sketch

*Horizontal Line Test follows directly from injectivity:* if a horizontal
line `y = k` hits the graph twice, at `x = a` and `x = b` with `a ≠ b`, then
`f(a) = f(b) = k`, so `f` is not one-to-one and no inverse function exists.
If every horizontal line hits at most once, no two inputs share an output,
so `f` is one-to-one and `f⁻¹` is well-defined.

## 7. Visual explanation

```text
Is f invertible?

     Graph of f
         │
   Draw any horizontal line
         │
   Does it cross the graph more than once anywhere?
   │                              │
  Yes                             No
   │                              │
No inverse exists           f⁻¹ exists
(unless domain is           Reflect graph across y = x
 restricted)                to obtain f⁻¹
```

```text
Composition domain check for (f∘g)(x):

  x
   │
   ▼
Is x in domain of g?
   │
  Yes → compute g(x)
   │
   ▼
Is g(x) in domain of f?
   │
  Yes → (f∘g)(x) = f(g(x)) is defined
```

## 8. Step-by-step derivations

**Finding an inverse function** — algorithm, applied to `f(x) = (2x + 3)/(x − 1)`:

```text
1. Write y = f(x):        y = (2x + 3)/(x − 1)
2. Swap x and y:           x = (2y + 3)/(y − 1)
3. Solve for y:
       x(y − 1) = 2y + 3
       xy − x = 2y + 3
       xy − 2y = x + 3
       y(x − 2) = x + 3
       y = (x + 3)/(x − 2)
4. State the inverse:      f⁻¹(x) = (x + 3)/(x − 2)
```

## 9. Worked examples

### Example 1 — Domain of a composite function

Let `f(x) = √x` and `g(x) = x − 4`. Find the domain of `(f ∘ g)(x)`.

<details>
<summary>Hint</summary>

You need `g(x)` to land inside the domain of `f`, which requires
`g(x) ≥ 0`.

</details>

<details>
<summary>Solution</summary>

`(f∘g)(x) = f(g(x)) = √(x − 4)`.

Domain of `f` is `[0, ∞)`, so we need `g(x) = x − 4 ≥ 0`, i.e. `x ≥ 4`.

**Domain: `[4, ∞)`.**

</details>

### Example 2 — Domain with a rational and a root

Find the domain of `h(x) = √(x + 2) / (x − 3)`.

<details>
<summary>Hint</summary>

Two conditions must hold simultaneously: the expression under the root must
be non-negative, and the denominator cannot be zero.

</details>

<details>
<summary>Solution</summary>

Condition 1: `x + 2 ≥ 0 → x ≥ −2`.

Condition 2: `x − 3 ≠ 0 → x ≠ 3`.

**Domain: `[−2, 3) ∪ (3, ∞)`.**

</details>

### Example 3 — Even, odd, or neither

Classify `f(x) = x³ + x`.

<details>
<summary>Hint</summary>

Compute `f(−x)` and compare to `f(x)` and `−f(x)`.

</details>

<details>
<summary>Solution</summary>

`f(−x) = (−x)³ + (−x) = −x³ − x = −(x³ + x) = −f(x)`.

Since `f(−x) = −f(x)` for all `x`, `f` is **odd**.

</details>

## 10. Practice problems

1. Find the domain of `f(x) = ln(x − 1)`.
2. Find the domain of `g(x) = 1/√(4 − x²)`.
3. Given `f(x) = x² + 1` and `g(x) = x − 2`, find `(g∘f)(x)` and `(f∘g)(x)`.
4. Find the inverse of `f(x) = 3x − 5`.
5. Classify `f(x) = x⁴ − 3x²` as even, odd, or neither.

<details>
<summary>Solutions</summary>

1. Need `x − 1 > 0 → x > 1`. **Domain: `(1, ∞)`.**
2. Need `4 − x² > 0` (strict, since it's under a root *and* in a
   denominator) `→ x² < 4 → −2 < x < 2`. **Domain: `(−2, 2)`.**
3. `(g∘f)(x) = g(f(x)) = (x² + 1) − 2 = x² − 1`.
   `(f∘g)(x) = f(g(x)) = (x − 2)² + 1 = x² − 4x + 5`.
   (Note they're different — composition is not commutative in general.)
4. `y = 3x − 5 → x = 3y − 5 → y = (x + 5)/3`. So `f⁻¹(x) = (x + 5)/3`.
5. `f(−x) = (−x)⁴ − 3(−x)² = x⁴ − 3x² = f(x)`. **Even.**

</details>

## 11. Challenge problems

1. Let `f(x) = 1/(x − 1)` and `g(x) = 1/x`. Find `(f∘g)(x)` and simplify
   fully, stating its domain.
2. Prove that the composition of two odd functions is odd.
3. Find the domain of `f(x) = √(x² − 5x + 6)`.

<details>
<summary>Solutions</summary>

1. `(f∘g)(x) = f(1/x) = 1/((1/x) − 1) = 1/((1 − x)/x) = x/(1 − x)`.
   Domain: need `x ≠ 0` (domain of `g`) and `g(x) = 1/x ≠ 1` (domain of `f`
   excludes input 1), i.e. `x ≠ 1`. **Domain: `x ≠ 0, x ≠ 1`.**
2. Let `f, g` be odd. `(f∘g)(−x) = f(g(−x)) = f(−g(x)) = −f(g(x)) =
   −(f∘g)(x)`. Since `(f∘g)(−x) = −(f∘g)(x)`, the composition is odd. ∎
3. Factor: `x² − 5x + 6 = (x−2)(x−3) ≥ 0`. This holds when both factors are
   non-negative or both non-positive: `x ≤ 2` or `x ≥ 3`.
   **Domain: `(−∞, 2] ∪ [3, ∞)`.**

</details>

## 12. Common mistakes

- **Finding the domain of `f∘g` using only the domain of `g`.** You must
  also exclude any `x` where `g(x)` falls outside the domain of `f`.
- **Assuming every function has an inverse.** Only one-to-one functions do;
  otherwise the domain must be restricted first (e.g. `x²` restricted to
  `x ≥ 0`).
- **Confusing `f⁻¹(x)` with `1/f(x)`.** These are almost never the same
  function.
- **Sign error in even/odd classification** by forgetting to distribute the
  negative sign through every term when computing `f(−x)`.

## 13. Exam tips

- Domain questions are the single most common "free points lost" on
  calculus exams — they show up disguised inside limit and derivative
  problems, not just as standalone questions.
- When asked for the domain of a composition, write both conditions
  explicitly before combining them — don't try to do it in your head.
- If a function is odd, its graph passes through the origin only if
  `f(0)` is defined (then `f(0) = 0` automatically, since `f(−0) = −f(0)`).

## 14. Summary

A function is fully specified by its domain and its rule. Composition and
inverses are operations *on* functions, and both come with their own domain
restrictions that are easy to overlook. Every limit and derivative question
later in this repo implicitly assumes you can answer "where is this function
even defined?" — that's exactly what this lesson trains.

## 15. Navigation

**Previous:** [`algebra.md`](algebra.md) · **Next:** [`trigonometry.md`](trigonometry.md)
