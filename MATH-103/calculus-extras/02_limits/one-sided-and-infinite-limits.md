# One-Sided and Infinite Limits

## 1. Learning objectives

- Evaluate left-hand and right-hand limits and use them to determine
  whether a two-sided limit exists
- Evaluate limits that equal +∞ or −∞, and understand this means the limit
  *does not exist as a real number* (∞ is not a value)
- Evaluate limits *at* infinity (x → ±∞) and connect them to horizontal
  asymptotes
- Identify vertical asymptotes from infinite one-sided limits

## 2. Prerequisites

- [`introduction.md`](introduction.md)
- [`limit-laws.md`](limit-laws.md)

## 3. Intuition before mathematics

Sometimes a function behaves differently depending on which direction you
approach from — like a piecewise function with a jump, or 1/x, which shoots
up on one side of 0 and down on the other. One-sided limits let us describe
each direction separately. Infinite limits and limits at infinity extend
the same "approaching" idea to unbounded behavior: either the *output* runs
off to infinity, or the *input* does.

## 4. Formal definitions

**Right-hand limit:** lim(x→a⁺) f(x) = L means f(x) → L as x approaches a
*from values greater than a only*.

**Left-hand limit:** lim(x→a⁻) f(x) = L means f(x) → L as x approaches a
*from values less than a only*.

**Two-sided existence:** lim(x→a) f(x) = L exists iff both one-sided
limits exist and equal the same L.

**Infinite limit:** lim(x→a) f(x) = ∞ means f(x) grows without bound as
x → a (formally: for every M > 0 there's a δ > 0 such that
0 < |x−a| < δ ⟹ f(x) > M). lim(x→a) f(x) = −∞ is defined symmetrically.

**Limit at infinity:** lim(x→∞) f(x) = L means f(x) gets arbitrarily close
to L as x grows without bound (formally: for every ε > 0 there's an N such
that x > N ⟹ |f(x) − L| < ε). lim(x→−∞) f(x) = L is defined symmetrically.

**Asymptotes.** x = a is a **vertical asymptote** if lim(x→a⁻)f(x) or
lim(x→a⁺)f(x) is ±∞. y = L is a **horizontal asymptote** if
lim(x→∞)f(x) = L or lim(x→−∞)f(x) = L.

## 5. Theorems

**Rational function limits at infinity.** For a rational function
p(x)/q(x) with deg(p) = m, deg(q) = n, and leading coefficients aₘ, bₙ:

- If m < n: lim(x→±∞) p(x)/q(x) = 0
- If m = n: lim(x→±∞) p(x)/q(x) = aₘ/bₙ
- If m > n: the limit is ±∞ (sign determined by leading terms)

This follows from dividing numerator and denominator by xⁿ and applying
the limit law lim(x→∞) 1/xᵏ = 0 for k > 0.

## 6. Proof sketch

**Why lim(x→∞) 1/xᵏ = 0 (k > 0):** given ε > 0, we need 1/xᵏ < ε for large
x, i.e. x > (1/ε)^(1/k). Taking N = (1/ε)^(1/k) satisfies the formal
definition directly. This one fact, combined with algebraic manipulation
(dividing by the highest power of x), is the engine behind every rational
function limit at infinity.

## 7. Visual explanation

```text
Vertical asymptote at x = a:              Horizontal asymptote y = L:

  f(x)                                      f(x)
   │      •                                  │  •───────────────
   │     •                                   │ •
   │    •                                    │•
   │   •                                  L ─┤──────────────────  (y=L)
───┼──•───────── x = a                       │
   │ •                                       │
   │•                                        └───────────────── x
  •│                                        (f(x) → L as x → ∞)
   │
lim(x→a⁻) f(x) = +∞
```

## 8. Step-by-step derivations

**Evaluate lim(x→∞) (3x² + 5x)/(2x² − 7):**

1. Identify degrees: numerator degree 2, denominator degree 2 (equal).
2. Divide every term by x² (the highest power present):
   (3 + 5/x)/(2 − 7/x²).
3. As x → ∞, 5/x → 0 and 7/x² → 0 (by the 1/xᵏ fact above).
4. Limit becomes (3 + 0)/(2 − 0) = 3/2.
5. So y = 3/2 is a horizontal asymptote.

**Evaluate lim(x→3⁺) 1/(x−3):**

1. As x → 3⁺, x − 3 → 0⁺ (a small *positive* number).
2. 1 divided by a small positive number is a large positive number.
3. So lim(x→3⁺) 1/(x−3) = +∞ — vertical asymptote at x = 3.

## 9. Worked examples

### Example 1 — piecewise one-sided limits

Given f(x) = x + 1 for x < 2 and f(x) = 5 − x for x ≥ 2, does
lim(x→2) f(x) exist?

<details>
<summary>Hint</summary>

Compute lim(x→2⁻) and lim(x→2⁺) separately using each piece.

</details>

<details>
<summary>Solution</summary>

lim(x→2⁻) f(x) = 2+1 = 3 (using the x<2 piece). lim(x→2⁺) f(x) = 5−2 = 3
(using the x≥2 piece). Both sides agree at 3, so lim(x→2) f(x) = 3 exists.

</details>

### Example 2 — limit at infinity, degree comparison

Evaluate lim(x→−∞) (4x + 1)/(x² − 9).

<details>
<summary>Hint</summary>

Compare the degree of numerator and denominator.

</details>

<details>
<summary>Solution</summary>

Numerator degree 1, denominator degree 2 — denominator degree wins.
Dividing by x²: (4/x + 1/x²)/(1 − 9/x²) → (0+0)/(1−0) = 0.

</details>

## 10. Practice problems

1. Evaluate lim(x→0⁻) 1/x and lim(x→0⁺) 1/x. Does lim(x→0) 1/x exist?
2. Evaluate lim(x→∞) (5x³ − x)/(2x² + 1).
3. Find all vertical and horizontal asymptotes of f(x) = (2x+1)/(x−4).

<details>
<summary>Answers</summary>

1. lim(x→0⁻)1/x = −∞, lim(x→0⁺)1/x = +∞; two-sided limit does not exist
   (both directions diverge, and they diverge to different signs).
2. +∞ (numerator degree exceeds denominator degree, leading term positive)
3. Vertical asymptote x = 4; horizontal asymptote y = 2 (degrees equal,
   ratio of leading coefficients 2/1).

</details>

## 11. Challenge problems

1. Construct a rational function with vertical asymptotes at x = −1 and
   x = 3, and horizontal asymptote y = 0.
2. Prove that if lim(x→a⁻)f(x) = +∞ and lim(x→a⁺)f(x) = −∞, then x = a
   is a vertical asymptote but lim(x→a) f(x) does not exist even as ±∞.

<details>
<summary>Hints</summary>

1. Put (x+1)(x−3) in the denominator and any lower-degree numerator on top.
2. Use the formal definitions directly — show no single value (finite or
   infinite) can satisfy both one-sided behaviors simultaneously.

</details>

## 12. Common mistakes

- Writing "lim = ∞" and treating ∞ as if it were a number you can then
  plug into further arithmetic — it's shorthand for unbounded growth, not
  a limit value.
- Forgetting to check *both* one-sided limits when asked whether a
  two-sided limit exists.
- Comparing degrees incorrectly, or forgetting to divide by the *highest*
  power present in the whole expression (not just the numerator).

## 13. Exam tips

- For limits at infinity of rational functions, degree comparison
  (numerator vs. denominator) is a fast shortcut — but show the
  divide-by-xⁿ work if the problem asks you to justify it.
- Vertical asymptote candidates come from zeros of the denominator that
  are *not* also zeros of the numerator (after cancellation).
- If a one-sided limit problem gives a piecewise function, always identify
  which piece applies on each side *before* substituting.

## 14. Summary

- One-sided limits examine behavior from a single direction; a two-sided
  limit exists only if both one-sided limits agree.
- Infinite limits (lim = ±∞) signal unbounded growth, not a numeric value,
  and indicate a vertical asymptote.
- Limits at infinity describe end behavior and correspond to horizontal
  asymptotes; for rational functions, compare numerator/denominator degree.
- Dividing by the highest power of x is the standard technique for limits
  at infinity of rational functions.

## 15. Navigation

← [`limit-laws.md`](limit-laws.md) · [`squeeze-theorem.md`](squeeze-theorem.md) →
