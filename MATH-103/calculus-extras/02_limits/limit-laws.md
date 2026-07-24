# Limit Laws

## 1. Learning objectives

- State and apply the standard algebraic limit laws
- Combine limit laws to evaluate limits of complicated expressions without
  going back to the ε–δ definition every time
- Know exactly when each law applies (and when it doesn't — e.g. quotient
  law requires nonzero denominator limit)

## 2. Prerequisites

- [`introduction.md`](introduction.md) — the formal limit definition these laws are proved from

## 3. Intuition before mathematics

If two processes each settle down to a stable value, then adding them,
multiplying them, or doing almost anything reasonable with them together
also settles down — to the combination of those stable values. Limit laws
are just this common-sense idea made rigorous, so you never have to redo
an ε–δ argument from scratch for every new function.

## 4. Formal definitions

Assume lim(x→a) f(x) = L and lim(x→a) g(x) = M both exist, and c is a
constant. Then:

- **Sum/Difference:** lim(x→a) [f(x) ± g(x)] = L ± M
- **Constant multiple:** lim(x→a) [c·f(x)] = c·L
- **Product:** lim(x→a) [f(x)·g(x)] = L·M
- **Quotient:** lim(x→a) [f(x)/g(x)] = L/M, provided M ≠ 0
- **Power:** lim(x→a) [f(x)]ⁿ = Lⁿ, for positive integers n
- **Root:** lim(x→a) ⁿ√f(x) = ⁿ√L, provided L > 0 when n is even
- **Composition:** if g is continuous at L, then lim(x→a) g(f(x)) = g(L)

Two immediate consequences worth memorizing directly:

- lim(x→a) c = c (limit of a constant is itself)
- lim(x→a) x = a (limit of the identity function is a)

## 5. Theorems

**Polynomial and rational function limits.** For any polynomial p(x),
lim(x→a) p(x) = p(a). For a rational function p(x)/q(x) with q(a) ≠ 0,
lim(x→a) p(x)/q(x) = p(a)/q(a). Both follow immediately from repeated
application of the sum, product, and quotient laws to lim(x→a) c = c and
lim(x→a) x = a.

## 6. Proof sketch

**Sum law**, from the ε–δ definition: given ε > 0, since lim f = L there's
a δ₁ with |f(x)−L| < ε/2 whenever 0<|x−a|<δ₁, and similarly a δ₂ for g with
tolerance ε/2. Take δ = min(δ₁, δ₂). Then for 0<|x−a|<δ, the triangle
inequality gives |(f(x)+g(x)) − (L+M)| ≤ |f(x)−L| + |g(x)−M| < ε/2 + ε/2 = ε.
The product and quotient laws follow a similar pattern but need an extra
boundedness argument (f is bounded near a since it has a limit there).

## 7. Visual explanation

```text
f(x) → L  ┐
          ├──►  f(x) + g(x) → L + M
g(x) → M  ┘

f(x) → L  ┐
          ├──►  f(x) · g(x) → L · M
g(x) → M  ┘

f(x) → L  ┐
          ├──►  f(x) / g(x) → L / M     (M ≠ 0 required)
g(x) → M  ┘
```

Each law is a "black box" combinator: feed in two convergent behaviors,
get out one convergent behavior for the combined expression.

## 8. Step-by-step derivations

**Evaluate lim(x→2) (3x² − 1)/(x + 5) using the laws explicitly:**

1. lim(x→2) x = 2, so lim(x→2) x² = 2² = 4 (power law).
2. lim(x→2) 3x² = 3·4 = 12 (constant multiple law).
3. lim(x→2) (3x² − 1) = 12 − 1 = 11 (difference law, using lim c = c).
4. lim(x→2) (x + 5) = 2 + 5 = 7 (sum law).
5. Since the denominator's limit (7) is nonzero, quotient law applies:
   lim(x→2) (3x² − 1)/(x + 5) = 11/7.

## 9. Worked examples

### Example 1 — combining several laws

Evaluate lim(x→−1) (2x³ + 3)/√(x² + 3).

<details>
<summary>Hint</summary>

Check the denominator's limit first — is it nonzero? Is the value under
the root positive?

</details>

<details>
<summary>Solution</summary>

Numerator: lim (2x³+3) = 2(−1)³+3 = 1. Denominator: lim (x²+3) = 1+3 = 4,
and √4 = 2 (root law valid since 4 > 0). Quotient law applies since
denominator limit ≠ 0: answer = 1/2.

</details>

### Example 2 — composition law

Given lim(x→5) f(x) = 2, evaluate lim(x→5) √(f(x) + 7).

<details>
<summary>Hint</summary>

Let g(u) = √(u+7) — is g continuous at u = 2?

</details>

<details>
<summary>Solution</summary>

g(u) = √(u+7) is continuous at u = 2 (2+7=9 > 0), so composition law gives
lim(x→5) g(f(x)) = g(2) = √9 = 3.

</details>

## 10. Practice problems

1. Evaluate lim(x→3) (x² + 2x)/(x − 1).
2. Given lim(x→0) f(x) = 4 and lim(x→0) g(x) = −2, evaluate
   lim(x→0) [3f(x) − g(x)²].
3. Explain why the quotient law does *not* directly evaluate
   lim(x→1) (x−1)/(x²−1), and what to do instead.

<details>
<summary>Answers</summary>

1. 15/2
2. 3(4) − (−2)² = 12 − 4 = 8
3. Denominator's limit is 0 at x=1, so the quotient law's hypothesis fails;
   factor x²−1=(x−1)(x+1) and cancel first, then apply the laws to the
   simplified expression (limit = 1/2).

</details>

## 11. Challenge problems

1. Prove the product law from the ε–δ definition (fill in the boundedness
   step skipped in section 6).
2. Show that if lim(x→a) f(x)/g(x) exists and lim(x→a) g(x) = 0, then
   lim(x→a) f(x) = 0 must also hold.

<details>
<summary>Hints</summary>

1. Write f(x)g(x) − LM = f(x)(g(x)−M) + M(f(x)−L), bound f(x) near a by
   L+1 using δ small enough, then bound each term separately.
2. Write f(x) = [f(x)/g(x)]·g(x) and apply the product law.

</details>

## 12. Common mistakes

- Applying the quotient law when the denominator's limit is 0 — check this
  *before* dividing.
- Forgetting the root law needs L > 0 (or L ≥ 0 with domain care) for even
  roots.
- Assuming composition law applies without checking continuity of the
  outer function at the inner limit value.

## 13. Exam tips

- State which law you're using at each step — partial credit depends on it.
- Always verify the quotient law's denominator condition explicitly; it's
  a common one-line loss of marks.
- When a limit law's hypothesis fails (denominator → 0, etc.), that's your
  cue to factor/rationalize, not evidence the limit doesn't exist.

## 14. Summary

- Limit laws let you evaluate limits of sums, products, quotients, powers,
  roots, and compositions directly from the limits of the pieces.
- Quotient law requires nonzero denominator limit; root law requires a
  positive value under even roots; composition law requires continuity of
  the outer function.
- Polynomials and rational functions (away from zeros of the denominator)
  can always be evaluated by direct substitution as a consequence.
- When a law's hypothesis fails, algebraic manipulation (factor/rationalize)
  usually restores the ability to apply the laws.

## 15. Navigation

← [`introduction.md`](introduction.md) · [`one-sided-and-infinite-limits.md`](one-sided-and-infinite-limits.md) →
