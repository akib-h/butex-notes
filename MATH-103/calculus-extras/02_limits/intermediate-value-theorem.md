# Intermediate Value Theorem (IVT)

## 1. Learning objectives

- State the Intermediate Value Theorem precisely, including its hypotheses
- Use IVT to prove a root exists in a given interval without solving for it
- Recognize why continuity is essential to the theorem
- Apply IVT-based root-narrowing (bisection-style reasoning)

## 2. Prerequisites

- [`continuity.md`](continuity.md)

## 3. Intuition before mathematics

If you're at the bottom of a hill (elevation −10 m) and later at the top
(elevation +50 m), and your elevation changed continuously along the way
(no teleporting), then at some moment you must have been at exactly 0 m —
you can't skip over a value without passing through it. IVT is this idea
applied to any continuous function on an interval.

## 4. Formal definitions

**Intermediate Value Theorem.** If f is continuous on the closed interval
[a, b], and N is any value between f(a) and f(b) (inclusive of neither
endpoint if f(a)≠f(b), i.e. strictly between), then there exists at least
one c in [a, b] such that f(c) = N.

**Corollary (existence of roots).** If f is continuous on [a, b] and
f(a) and f(b) have opposite signs, then f has at least one root
(f(c) = 0) in (a, b).

## 5. Theorems

IVT itself is the central theorem here; its main corollary — root
existence via a sign change — is the version used constantly in practice
and is really just IVT with N = 0.

## 6. Proof sketch

**Sketch of IVT's proof** (relies on the completeness of the real numbers,
a topic beyond this lesson's scope, but the outline): consider
S = {x in [a,b] : f(x) < N} (assuming f(a) < N < f(b)). This set is
nonempty (contains a) and bounded above (by b), so by completeness it has
a least upper bound c = sup(S). One then shows, using continuity of f at
c, that f(c) cannot be less than N (points arbitrarily close to c on the
right would also be in S, contradicting c being an upper bound) and cannot
be greater than N either (points arbitrarily close to c on the left would
be excluded from S, contradicting c being the *least* upper bound) — so
f(c) = N exactly.

## 7. Visual explanation

```text
   f(x)
    │
f(b)┤                    •
    │                   ╱
  N ┤- - - - - - - -  •  (f is forced through N somewhere
    │              ╱  ↑   between a and b — no jump allowed)
f(a)┤        •  ╱      c
    │
    └────────┼─────────┼──── x
              a         b
```

Because f is continuous (unbroken curve), it cannot get from f(a) to f(b)
without crossing every value N in between — including 0, if f(a) and f(b)
have opposite signs.

## 8. Step-by-step derivations

**Show f(x) = x³ − x − 1 has a root in [1, 2]:**

1. Check continuity: f is a polynomial, so it's continuous on all of ℝ,
   in particular on [1, 2].
2. Evaluate the endpoints: f(1) = 1 − 1 − 1 = −1. f(2) = 8 − 2 − 1 = 5.
3. f(1) = −1 < 0 and f(2) = 5 > 0 — opposite signs.
4. By the IVT corollary, there exists c in (1, 2) with f(c) = 0.

This proves a root exists in [1, 2] *without ever solving the cubic*.

## 9. Worked examples

### Example 1 — direct application

Show that f(x) = cos(x) − x has a root in [0, 1].

<details>
<summary>Hint</summary>

Check continuity, then evaluate f(0) and f(1) and compare signs.

</details>

<details>
<summary>Solution</summary>

f is continuous everywhere (cos and the identity function are both
continuous, and differences of continuous functions are continuous).
f(0) = cos(0) − 0 = 1 > 0. f(1) = cos(1) − 1 ≈ 0.540 − 1 = −0.460 < 0.
Opposite signs, so by IVT there's a root c in (0, 1).

</details>

### Example 2 — narrowing a root by bisection reasoning

Given f(x) = x³ − x − 1 has a root in (1, 2) (from section 8), narrow the
interval by evaluating f(1.5).

<details>
<summary>Hint</summary>

f(1.5) tells you which half of [1,2] the sign change is in.

</details>

<details>
<summary>Solution</summary>

f(1.5) = 3.375 − 1.5 − 1 = 0.875 > 0. Since f(1) < 0 and f(1.5) > 0, the
sign change (and therefore the root) is in (1, 1.5), a tighter interval
than the original (1, 2). Repeating this process is the basis of the
bisection method for numerically approximating roots.

</details>

## 10. Practice problems

1. Show f(x) = x⁵ + 2x − 1 has a root in [0, 1].
2. Show f(x) = eˣ − 3x has at least one root in [0, 1] (using f(0)=1>0
   and f(1)=e−3<0).
3. Explain why IVT does *not* guarantee a root for g(x) = 1/x on [−1, 1]
   even though g(−1) = −1 and g(1) = 1 have opposite signs.

<details>
<summary>Answers</summary>

1. f(0) = −1 < 0, f(1) = 2 > 0, f continuous (polynomial) ⟹ root exists in
   (0,1) by IVT.
2. f continuous (exponential minus linear), f(0)=1>0, f(1)=e−3≈−0.28<0 ⟹
   root exists in (0,1) by IVT.
3. g(x) = 1/x is not continuous on [−1,1] — it's undefined (and has an
   infinite discontinuity) at x=0, which is inside the interval, so IVT's
   hypothesis fails and its conclusion isn't guaranteed.

</details>

## 11. Challenge problems

1. Use IVT to show that every continuous function f:[0,1]→[0,1] has a
   fixed point (some c with f(c) = c). (Hint: apply IVT to g(x)=f(x)−x.)
2. A continuous function f satisfies f(0) = f(1). Show there exist
   x₁, x₂ in [0,1] with x₂ − x₁ = 1/2 and f(x₁) = f(x₂). (This is a classic
   "opposite ends of the table" / rotating-table style problem.)

<details>
<summary>Hints</summary>

1. g(0) = f(0)−0 ≥ 0 and g(1) = f(1)−1 ≤ 0 (since f maps into [0,1]);
   apply IVT to g to find where g(c)=0.
2. Define g(x) = f(x+1/2) − f(x) on [0, 1/2]; show g(0) and g(1/2) are
   negatives of each other, then apply IVT.

</details>

## 12. Common mistakes

- Forgetting to verify continuity explicitly before invoking IVT — it's a
  required hypothesis, not automatic.
- Concluding IVT gives a *unique* root — it only guarantees *at least one*;
  there could be several.
- Applying IVT to a value N outside the range [f(a), f(b)] — the theorem
  only guarantees intermediate values are attained, not extrapolated ones.

## 13. Exam tips

- The standard IVT proof-writing template: (1) state f is continuous on
  [a,b] and why, (2) evaluate f(a) and f(b), (3) note the sign
  change/target value is between them, (4) conclude by IVT that c exists.
- IVT problems almost never ask you to *find* the root — only to prove it
  exists. Don't waste time trying to solve the equation exactly.
- Watch for hidden discontinuities (like 1/x or tan(x)) inside the given
  interval — these silently invalidate IVT.

## 14. Summary

- IVT says a continuous function on [a,b] hits every value between f(a)
  and f(b) at least once somewhere in the interval.
- The most common use is the root-existence corollary: if f(a) and f(b)
  have opposite signs, f has a root in (a,b).
- Continuity is essential — without it, the function could "jump over" the
  target value.
- IVT proves existence only; finding the root numerically (e.g. by
  bisection) is a separate, follow-up process.

## 15. Navigation

← [`continuity.md`](continuity.md) · [`examples.md`](examples.md) →
