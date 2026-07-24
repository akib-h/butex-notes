# Mixed Examples — Limits

This file deliberately mixes techniques from every lesson in this chapter.
Unlike the individual lesson files, problems here are **not** labeled by
which technique applies — deciding that is part of the exercise. Attempt
each problem cold before expanding the solution.

---

### Problem 1

Evaluate lim(x→5) (x² − 25)/(x − 5).

<details>
<summary>Hint</summary>

0/0 on direct substitution — what does that suggest?

</details>

<details>
<summary>Solution</summary>

Factor: (x−5)(x+5)/(x−5) = x+5 for x≠5. Limit = 5+5 = **10**.
(Technique: factoring, from `introduction.md`.)

</details>

---

### Problem 2

Evaluate lim(x→∞) (7x⁴ − 3x)/(2x⁴ + x² + 1).

<details>
<summary>Hint</summary>

Compare degrees of numerator and denominator.

</details>

<details>
<summary>Solution</summary>

Equal degree (4 and 4) — limit is the ratio of leading coefficients:
**7/2**. (Technique: rational function limit at infinity, from
`one-sided-and-infinite-limits.md`.)

</details>

---

### Problem 3

Evaluate lim(x→0) x·sin(1/x²).

<details>
<summary>Hint</summary>

sin of anything is bounded, no matter how the argument behaves.

</details>

<details>
<summary>Solution</summary>

−|x| ≤ x·sin(1/x²) ≤ |x| for x≠0; both bounds → 0. By the Squeeze Theorem,
limit = **0**. (Technique: Squeeze Theorem, from `squeeze-theorem.md`.)

</details>

---

### Problem 4

Let f(x) = (x²−9)/(x−3) for x≠3, and f(3) = 5. Classify the behavior of f
at x = 3 and state whether f is continuous there.

<details>
<summary>Hint</summary>

Compute the limit first, then compare to the defined value f(3).

</details>

<details>
<summary>Solution</summary>

lim(x→3) f(x) = lim (x−3)(x+3)/(x−3) = lim(x+3) = 6. But f(3) = 5 ≠ 6.
The limit exists but doesn't match f(3), so this is a **removable
discontinuity** — f is **not continuous** at x=3 as defined. (Technique:
continuity classification, from `continuity.md`.)

</details>

---

### Problem 5

Show that f(x) = x³ + 4x − 2 has a root somewhere in [0, 1].

<details>
<summary>Hint</summary>

Continuity + sign change on the endpoints.

</details>

<details>
<summary>Solution</summary>

f is a polynomial, so continuous everywhere. f(0) = −2 < 0. f(1) = 1+4−2 =
3 > 0. Opposite signs ⟹ by IVT there's a root in (0,1). (Technique: IVT,
from `intermediate-value-theorem.md`.)

</details>

---

### Problem 6

Evaluate lim(x→2⁻) (x−3)/(x−2) and lim(x→2⁺) (x−3)/(x−2). Does the
two-sided limit exist? Is there a vertical asymptote?

<details>
<summary>Hint</summary>

Check the sign of numerator and denominator separately on each side.

</details>

<details>
<summary>Solution</summary>

As x→2⁻: numerator →−1 (negative), denominator→0⁻ (negative), ratio→+∞.
As x→2⁺: numerator→−1 (negative), denominator→0⁺ (positive), ratio→−∞.
One-sided limits disagree (+∞ vs −∞), so the two-sided limit **does not
exist**; there **is** a vertical asymptote at x = 2 (an infinite
discontinuity). (Technique: one-sided/infinite limits, from
`one-sided-and-infinite-limits.md`.)

</details>

---

### Problem 7

Evaluate lim(x→0) sin(4x)/tan(2x).

<details>
<summary>Hint</summary>

Rewrite tan as sin/cos, then engineer sin(u)/u forms.

</details>

<details>
<summary>Solution</summary>

sin(4x)/tan(2x) = sin(4x)·cos(2x)/sin(2x). Split as
[sin(4x)/(4x)]·4x·cos(2x) / {[sin(2x)/(2x)]·2x} = [4·sin(4x)/(4x)·cos(2x)]
/ [2·sin(2x)/(2x)] → (4·1·1)/(2·1) = **2**. (Technique: Squeeze-derived
trig limit lim sin(u)/u=1, combined with limit laws.)

</details>

---

### Problem 8

Given g(x) = (√(x+9) − 3)/x for x≠0, evaluate lim(x→0) g(x) and determine
whether g could be extended to a continuous function at x=0.

<details>
<summary>Hint</summary>

Rationalize, then check what the limit equals versus what g(0) would need
to be.

</details>

<details>
<summary>Solution</summary>

Multiply by conjugate: (x+9−9)/[x(√(x+9)+3)] = x/[x(√(x+9)+3)] =
1/(√(x+9)+3) for x≠0. Limit as x→0: 1/(3+3) = **1/6**. Since the limit
exists, defining g(0) = 1/6 would make g continuous at 0 — this is exactly
a removable discontinuity being repaired. (Technique: rationalizing +
continuity.)

</details>

---

### Problem 9

A function h is continuous on [1, 4] with h(1) = −2 and h(4) = 6. Can you
conclude h(2.5) = 0? Can you conclude *some* point in [1,4] has h(c) = 0?

<details>
<summary>Hint</summary>

Think carefully about what IVT does and doesn't guarantee.

</details>

<details>
<summary>Solution</summary>

You **cannot** conclude h(2.5) = 0 specifically — IVT guarantees existence
of *some* c, not that it's at any particular point like 2.5. You **can**
conclude some c in (1,4) has h(c) = 0, since 0 is between h(1)=−2 and
h(4)=6 and h is continuous on the closed interval. (Technique: correctly
scoping what IVT proves, from `intermediate-value-theorem.md`.)

</details>

---

### Problem 10 — challenge, combines several ideas

Let f(x) = (x² − 4)/(x − 2) for x ≠ 2. (a) Evaluate lim(x→2) f(x).
(b) Define f(2) so that f becomes continuous at 2. (c) With that
definition, does f then satisfy the hypotheses needed to apply IVT on
[0, 3], and if so, does it guarantee a root there?

<details>
<summary>Hint</summary>

Work through (a) with factoring, (b) is immediate from (a), and (c) needs
you to check the sign of f at both endpoints after the redefinition.

</details>

<details>
<summary>Solution</summary>

(a) f(x) = (x−2)(x+2)/(x−2) = x+2 for x≠2, so lim(x→2) f(x) = 4.
(b) Define f(2) = 4; this matches the limit, so f is now continuous at 2
(and, since f agrees with x+2 everywhere, continuous on all of ℝ).
(c) f(0) = 0+2 = 2 > 0, f(3) = 3+2 = 5 > 0. Both endpoint values are
positive — no sign change — so IVT does **not** guarantee a root in
[0, 3] (and in fact f(x) = x+2 has its only root at x=−2, outside this
interval). This shows IVT's hypotheses being met (continuity) doesn't
automatically mean its most common corollary (root existence) applies —
you still need the sign change. (Technique: full pipeline — factoring,
continuity repair, and correctly checking IVT's corollary conditions.)

</details>

---

## Navigation

← [`intermediate-value-theorem.md`](intermediate-value-theorem.md) · [`README.md`](README.md) · Next chapter: [`03-derivatives/`](../03-derivatives/) →
