# Introduction to Limits

## 1. Learning objectives

By the end of this lesson you should be able to:

- Explain, in plain language, what "the limit of f(x) as x approaches a" means
- Read and write the formal ε–δ definition of a limit
- Evaluate simple limits by direct substitution, factoring, and rationalizing
- Recognize when a limit fails to exist

## 2. Prerequisites

- [`01-prerequisites/functions.md`](../01-prerequisites/functions.md) — function notation, domain
- [`01-prerequisites/algebra.md`](../01-prerequisites/algebra.md) — factoring, rationalizing

## 3. Intuition before mathematics

Imagine walking toward a wall but never quite touching it — getting closer
and closer, 1 meter away, then 10 cm, then 1 mm. The limit is the wall's
position: the value you're being crowded toward, even if you never step on
it.

For a function, "the limit of f(x) as x → a is L" means: as x gets closer
and closer to a (from either side), f(x) gets closer and closer to L — no
matter what f(a) actually is, or even if f(a) is undefined.

**Key point:** limits describe *behavior near* a point, not necessarily
*the value at* that point.

## 4. Formal definitions

**Informal definition.** We write

lim(x→a) f(x) = L

if f(x) can be made arbitrarily close to L by making x sufficiently close
to (but not equal to) a.

**Formal (ε–δ) definition.** lim(x→a) f(x) = L means:

> For every ε > 0, there exists a δ > 0 such that whenever 0 < |x − a| < δ,
> it follows that |f(x) − L| < ε.

In words: no matter how small a tolerance ε you demand around L, I can find
a window δ around a (excluding a itself) that guarantees f(x) lands inside
that tolerance.

## 5. Theorems

**Uniqueness of limits.** If lim(x→a) f(x) = L₁ and lim(x→a) f(x) = L₂,
then L₁ = L₂. A limit, if it exists, is unique.

**One-sided/two-sided equivalence.** lim(x→a) f(x) = L if and only if
lim(x→a⁻) f(x) = L and lim(x→a⁺) f(x) = L (both one-sided limits exist and
agree). This is proved fully in
[`one-sided-and-infinite-limits.md`](one-sided-and-infinite-limits.md).

## 6. Proof sketch

**Why direct substitution works for polynomials.** For a polynomial p(x),
one can show directly from the ε–δ definition that lim(x→a) p(x) = p(a):
choose δ = min(1, ε / M) where M bounds the local growth rate of p near a
(using the fact that |p(x) − p(a)| factors as (x − a) times a bounded
polynomial in x near a). The details are mechanical once the limit laws
(next lesson) are available — this is really the base case they build on.

## 7. Visual explanation

```text
        f(x)
         │              •  ← f(x) values crowd toward L
     L+ε ┤- - - - - - •
         │           •
       L ┤- - - - - •  (tunnel of width 2ε around L)
         │         •
     L-ε ┤- - - •
         │
         └──────┼───┼───┼──── x
              a-δ   a  a+δ
                (window of width 2δ around a)
```

Every x inside the δ-window (except possibly a itself) produces an f(x)
inside the ε-tunnel.

## 8. Step-by-step derivations

**Evaluating lim(x→2) (x² − 4)/(x − 2):**

1. Try direct substitution: (2² − 4)/(2 − 2) = 0/0 — indeterminate, not
   "no limit." This just means the function isn't algebraically simplified.
2. Factor the numerator: x² − 4 = (x − 2)(x + 2).
3. Cancel the common factor (valid for x ≠ 2, which is exactly the domain
   the limit cares about): (x − 2)(x + 2)/(x − 2) = x + 2.
4. Now substitute directly: lim(x→2) (x + 2) = 4.

So the limit is 4, even though the original function is undefined at x = 2.

## 9. Worked examples

### Example 1 — direct substitution

Evaluate lim(x→3) (2x² − 5x + 1).

<details>
<summary>Hint</summary>

Is this function continuous everywhere? If so, substitution is valid.

</details>

<details>
<summary>Solution</summary>

Polynomials are continuous everywhere, so substitute directly:
2(3)² − 5(3) + 1 = 18 − 15 + 1 = 4.

</details>

### Example 2 — rationalizing

Evaluate lim(x→0) (√(x+4) − 2)/x.

<details>
<summary>Hint</summary>

Multiply numerator and denominator by the conjugate √(x+4) + 2.

</details>

<details>
<summary>Solution</summary>

Multiply by conjugate:

(√(x+4) − 2)(√(x+4) + 2) / [x(√(x+4) + 2)] = (x+4−4) / [x(√(x+4)+2)]
= x / [x(√(x+4)+2)] = 1/(√(x+4)+2) for x ≠ 0.

Now substitute x = 0: 1/(√4 + 2) = 1/4.

</details>

## 10. Practice problems

1. Evaluate lim(x→1) (x³ − 1)/(x − 1).
2. Evaluate lim(x→4) (x − 4)/(√x − 2).
3. Determine whether lim(x→0) |x|/x exists.

<details>
<summary>Answers</summary>

1. 3 (factor as (x−1)(x²+x+1), cancel, substitute)
2. 4 (rationalize denominator)
3. Does not exist — left limit is −1, right limit is +1.

</details>

## 11. Challenge problems

1. Prove, using the ε–δ definition, that lim(x→3) (2x + 1) = 7.
2. Construct a function f such that lim(x→0) f(x) exists but f is
   undefined at x = 0 *and* discontinuous at every other point.

<details>
<summary>Hints</summary>

1. Given ε, solve |(2x+1) − 7| < ε for |x − 3| to find a working δ.
2. Think of a function that's a constant except on the rationals, then
   patch x = 0 specifically.

</details>

## 12. Common mistakes

- Treating 0/0 as automatically "no limit exists" instead of "algebraic
  simplification needed."
- Assuming lim(x→a) f(x) = f(a) always — only true when f is continuous
  at a.
- Forgetting that a limit requires the *same* value from both sides.
- Sign errors when rationalizing (forgetting the conjugate flips a sign).

## 13. Exam tips

- If direct substitution gives a determinate value (not 0/0 or ∞/∞), you're
  done — that's the answer.
- If you get 0/0, try factoring first; if that fails, try rationalizing.
- Always state *which* technique you used — graders reward the method, not
  just the number.

## 14. Summary

- A limit describes the value a function *approaches*, not necessarily its
  value at that point.
- The formal ε–δ definition makes "approaches" precise: arbitrarily small
  ε-tolerance around L achievable via some δ-window around a.
- Direct substitution works whenever the function is continuous at a;
  otherwise, factor or rationalize to remove the indeterminate form first.
- A limit is unique when it exists, and requires both one-sided limits to
  agree.

## 15. Navigation

← [`README.md`](README.md) · [`limit-laws.md`](limit-laws.md) →
