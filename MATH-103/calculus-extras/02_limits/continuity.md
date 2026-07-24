# Continuity

## 1. Learning objectives

- State the three-part definition of continuity at a point
- Classify discontinuities as removable, jump, or infinite
- Determine continuity on an interval, and identify where common function
  types are continuous
- Use continuity to justify direct substitution when evaluating limits

## 2. Prerequisites

- [`introduction.md`](introduction.md)
- [`one-sided-and-infinite-limits.md`](one-sided-and-infinite-limits.md)

## 3. Intuition before mathematics

A function is continuous at a point if you can draw its graph through that
point without lifting your pen. This is intuitive but imprecise — "without
lifting your pen" needs to be translated into a statement about limits,
since that's the only tool rigorous enough to capture it (a function could,
for instance, have infinitely many wiggles arbitrarily close to a point).

## 4. Formal definitions

**Continuity at a point.** f is continuous at x = a if all three hold:

1. f(a) is defined (a is in the domain)
2. lim(x→a) f(x) exists
3. lim(x→a) f(x) = f(a)

If any one of these fails, f is **discontinuous** at a.

**Continuity on an interval.** f is continuous on (b, c) if it's
continuous at every point in (b, c). f is continuous on a closed interval
[b, c] if it's continuous on (b, c) and lim(x→b⁺)f(x)=f(b),
lim(x→c⁻)f(x)=f(c) (one-sided continuity at the endpoints).

**Types of discontinuity:**

- **Removable:** lim(x→a) f(x) exists but either f(a) is undefined or
  ≠ the limit. "Fixable" by redefining f(a).
- **Jump:** both one-sided limits exist but disagree.
- **Infinite:** at least one one-sided limit is ±∞ (vertical asymptote).

## 5. Theorems

**Continuity of standard functions.** Polynomials, rational functions
(on their domain), root functions (on their domain), trig functions (on
their domain), exponentials, and logarithms are all continuous everywhere
they're defined. This follows directly from the limit laws in
[`limit-laws.md`](limit-laws.md) — each law's conclusion is exactly the
continuity condition when the pieces are themselves continuous.

**Algebra of continuous functions.** If f and g are continuous at a, so
are f±g, f·g, f/g (with g(a)≠0), and — if g is continuous at a and f is
continuous at g(a) — the composition f(g(x)).

## 6. Proof sketch

**Composition of continuous functions is continuous:** since g is
continuous at a, lim(x→a) g(x) = g(a). Since f is continuous at g(a), the
composition law from `limit-laws.md` gives
lim(x→a) f(g(x)) = f(lim(x→a) g(x)) = f(g(a)), which is exactly the
continuity condition for f∘g at a.

## 7. Visual explanation

```text
Removable            Jump                 Infinite
                                      
   •  ← hole            •  •──          |
    ╲                  ╱   │            |
     ╲    ○ (f(a)≠L)   ╲   │            | ← vertical
      ╲                 ╲  │            |    asymptote
       •                  •              /│\
                                        ╱  │  ╲
lim exists,             lim(x→a⁻)      one-sided
f(a) wrong               ≠ lim(x→a⁺)   limit = ±∞
or missing
```

## 8. Step-by-step derivations

**Classify the discontinuity of f(x) = (x²−1)/(x−1) at x=1, and fix it if
possible:**

1. f(1) is undefined (denominator is 0) — domain fails, so already
   discontinuous by condition 1.
2. Check the limit: (x²−1)/(x−1) = (x−1)(x+1)/(x−1) = x+1 for x≠1, so
   lim(x→1) f(x) = 1+1 = 2 — the limit *does* exist.
3. Since the limit exists but f(1) doesn't, this is a **removable**
   discontinuity.
4. Fix: define a new function g(x) = f(x) for x≠1 and g(1) = 2. Now g is
   continuous at x=1.

## 9. Worked examples

### Example 1 — classifying via piecewise definition

Let f(x) = x² for x < 1, f(x) = 3 for x = 1, f(x) = 2−x for x > 1.
Classify the discontinuity at x = 1.

<details>
<summary>Hint</summary>

Compute both one-sided limits and compare to f(1).

</details>

<details>
<summary>Solution</summary>

lim(x→1⁻)f(x) = 1² = 1. lim(x→1⁺)f(x) = 2−1 = 1. Both one-sided limits
agree at 1, so lim(x→1)f(x) = 1 exists — but f(1) = 3 ≠ 1. This is a
**removable** discontinuity (redefining f(1) = 1 would fix it).

</details>

### Example 2 — interval of continuity

Find the interval(s) on which f(x) = √(x−2) is continuous.

<details>
<summary>Hint</summary>

Root functions are continuous on their domain — start by finding the
domain.

</details>

<details>
<summary>Solution</summary>

Domain requires x−2 ≥ 0, i.e. x ≥ 2. Since root functions are continuous
throughout their domain, f is continuous on [2, ∞).

</details>

## 10. Practice problems

1. Classify the discontinuity of f(x) = 1/(x−3) at x = 3.
2. Classify the discontinuity of f(x) = ⌊x⌋ (floor function) at x = 2.
3. For what value of k is g(x) = x+1 (x<2), k (x=2), 5−x (x>2)
   continuous at x = 2?

<details>
<summary>Answers</summary>

1. Infinite (lim(x→3⁻) = −∞, lim(x→3⁺) = +∞) — vertical asymptote.
2. Jump (lim(x→2⁻)=1, lim(x→2⁺)=2, they disagree).
3. k = 3 (both one-sided limits equal 3: 2+1=3 and 5−2=3).

</details>

## 11. Challenge problems

1. Construct a function that is continuous at exactly one point (x = 0)
   and discontinuous everywhere else.
2. Prove that if f is continuous at a and f(a) > 0, then f(x) > 0 for all
   x in some interval around a (this is the "sign-preserving" property,
   used heavily in root-finding arguments).

<details>
<summary>Hints</summary>

1. Classic example: f(x) = x for rational x, f(x) = 0 for irrational x.
2. Use the ε–δ definition with ε = f(a)/2.

</details>

## 12. Common mistakes

- Confusing "the limit exists" with "the function is continuous" — the
  limit existing is only one of three required conditions.
- Assuming all discontinuities are "holes" — jump and infinite
  discontinuities are not fixable by redefining a single point.
- Forgetting to check domain restrictions (a function isn't continuous
  where it isn't even defined).

## 13. Exam tips

- To justify direct substitution in a limit problem, explicitly state "f
  is continuous at a" — this is the formal reason substitution is valid,
  and graders look for it.
- When classifying discontinuities, always check *both* one-sided limits
  first; that single check tells you which of the three categories you're
  in.
- Removable discontinuities are the only kind where "redefine the
  function at one point" is a valid fix.

## 14. Summary

- Continuity at a point requires: f(a) defined, the limit exists, and they
  match.
- Discontinuities split into removable (fixable), jump (one-sided limits
  disagree), and infinite (unbounded one-sided limit).
- Polynomials, rational, root, trig, exponential, and log functions are
  continuous throughout their natural domains, and continuity is preserved
  under addition, multiplication, division (denominator ≠0), and
  composition.
- Continuity is exactly the formal justification for evaluating limits by
  direct substitution.

## 15. Navigation

← [`squeeze-theorem.md`](squeeze-theorem.md) · [`intermediate-value-theorem.md`](intermediate-value-theorem.md) →
