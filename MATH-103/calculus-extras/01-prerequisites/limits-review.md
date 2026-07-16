# Limits — Intuitive Preview

![Level](https://img.shields.io/badge/level-pre--calculus-lightgrey)

> This is a plain-language preview of limits, written for readers who
> haven't seen the concept formally yet. The rigorous treatment — laws,
> proofs, epsilon-delta — lives in [`02-limits/introduction.md`](../02-limits/introduction.md).
> This file exists only so `02-limits/` doesn't have to start from zero.

## 1. Learning objectives

By the end of this lesson you should be able to:

- Explain in plain language what `lim(x→a) f(x) = L` means
- Estimate a limit numerically using a table of values
- Estimate a limit graphically by reading a graph
- Recognize the difference between a limit existing and a function being
  defined at that point

## 2. Prerequisites

[`functions.md`](functions.md) — you need to know what it means for a
function to be defined (or undefined) at a point.

## 3. Intuition before mathematics

Imagine you're watching the outputs of `f(x) = (x² − 1)/(x − 1)` as `x`
creeps closer and closer to 1, without ever actually landing on 1. The
function itself is undefined exactly at `x = 1` (division by zero) — but
that doesn't stop us from asking: *what value are the outputs approaching?*

That question — "what does the function approach, ignoring what happens (or
doesn't happen) exactly at the point?" — is the entire idea of a limit.
Calculus is built almost entirely on this one move: instead of asking "what
is `f` doing right here," we ask "what is `f` doing infinitesimally close to
here." Derivatives, integrals, and series are all limits in disguise.

## 4. Formal definitions

**Informal definition (this file's level):** `lim(x→a) f(x) = L` means that
as `x` gets arbitrarily close to `a` (from either side, without necessarily
equaling `a`), `f(x)` gets arbitrarily close to `L`.

The precise `ε–δ` definition is deferred to
[`02-limits/introduction.md`](../02-limits/introduction.md).

## 5. Theorems

None yet — this file is purely conceptual. The limit laws (sum, product,
quotient rules for limits) are stated and proved in
[`02-limits/limit-laws.md`](../02-limits/limit-laws.md).

## 6. Proof sketch

Not applicable at this level.

## 7. Visual explanation

```text
f(x) = (x² − 1)/(x − 1),  undefined at x = 1

x:      0.9    0.99   0.999   →  1  ←   1.001   1.01   1.1
f(x):   1.9    1.99   1.999   → ? ←     2.001   2.01   2.1

Both sides approach 2, even though f(1) itself is undefined.

lim(x→1) f(x) = 2
```

```text
Graph shape (open circle marks the undefined point):

f(x)
 2 ┤            o   ← open circle at (1, 2): the limit, not the value
   │         ╱
   │      ╱
   │   ╱
 0 ┼────────────── x
   0      1
```

## 8. Step-by-step derivations

**Estimating `lim(x→1) (x² − 1)/(x − 1)` algebraically** (a preview of what
[`02-limits/`](../02-limits/) formalizes):

```text
(x² − 1)/(x − 1) = (x − 1)(x + 1)/(x − 1) = x + 1,  valid for x ≠ 1

As x → 1, x + 1 → 2

So lim(x→1) (x² − 1)/(x − 1) = 2
```

Note that we factored and canceled — the same algebra skill from
[`algebra.md`](algebra.md) — to remove the point of undefinedness *before*
evaluating.

## 9. Worked examples

### Example 1 — Reading a limit from a table

Using the table below, estimate `lim(x→2) f(x)`.

| x | 1.9 | 1.99 | 1.999 | 2.001 | 2.01 | 2.1 |
|---|---|---|---|---|---|---|
| f(x) | 5.9 | 5.99 | 5.999 | 6.001 | 6.01 | 6.1 |

<details>
<summary>Hint</summary>

Look at what value `f(x)` is approaching from both directions.

</details>

<details>
<summary>Solution</summary>

From the left, `f(x) → 6`. From the right, `f(x) → 6`. Both sides agree, so
**`lim(x→2) f(x) = 6`**, regardless of what `f(2)` itself equals (or whether
it's even defined).

</details>

### Example 2 — Limit exists but function value doesn't match

Let `f(x) = x + 1` for `x ≠ 3`, and `f(3) = 100` (defined separately). Find
`lim(x→3) f(x)`.

<details>
<summary>Hint</summary>

The limit only cares about values *near* 3, not the value *at* 3.

</details>

<details>
<summary>Solution</summary>

As `x → 3` (from either side, `x ≠ 3`), `f(x) = x + 1 → 4`.

**`lim(x→3) f(x) = 4`**, even though `f(3) = 100`. The limit and the
function value are two different questions.

</details>

## 10. Practice problems

1. Using a table of values around `x = 0`, estimate `lim(x→0) sinx/x`.
2. True or false: if `lim(x→a) f(x) = L`, then `f(a)` must equal `L`.
3. Estimate `lim(x→4) (x² − 16)/(x − 4)` by factoring first.

<details>
<summary>Solutions</summary>

1. Numerically, `sinx/x → 1` as `x → 0` (this is proved rigorously with the
   Squeeze Theorem in [`02-limits/squeeze-theorem.md`](../02-limits/squeeze-theorem.md)).
2. **False.** `f(a)` might not even be defined, or might be defined to a
   different value entirely (see Example 2 above).
3. `(x²−16)/(x−4) = (x−4)(x+4)/(x−4) = x+4 → 8` as `x → 4`.

</details>

## 11. Challenge problems

1. Explain, without computing anything, why `lim(x→0) 1/x` does **not**
   exist as a finite number.
2. Give an example of a function where the limit from the left and the
   limit from the right at some point are different numbers.

<details>
<summary>Solutions</summary>

1. As `x → 0⁺`, `1/x → +∞`; as `x → 0⁻`, `1/x → −∞`. The two one-sided
   behaviors don't agree on a single finite value, so no single number `L`
   satisfies "`f(x)` gets close to `L` from both sides." (Formal treatment
   of infinite limits: [`02-limits/one-sided-and-infinite-limits.md`](../02-limits/one-sided-and-infinite-limits.md).)
2. `f(x) = |x|/x` (equivalently, the sign function): as `x → 0⁻`, `f(x) = −1`;
   as `x → 0⁺`, `f(x) = 1`. The one-sided limits disagree, so
   `lim(x→0) f(x)` does not exist.

</details>

## 12. Common mistakes

- **Confusing "the limit exists" with "the function is defined there."**
  These are independent facts about a function.
- **Plugging in the value first and stopping there** when the result is
  `0/0` — that's not "no limit," it's a signal to factor and simplify
  before concluding anything.
- **Only checking one side.** A two-sided limit requires the left-hand and
  right-hand limits to agree; checking only one direction is not enough.

## 13. Exam tips

- Whenever direct substitution gives `0/0`, that is *never* your final
  answer — it means more algebra (factoring, rationalizing, or a known
  identity) is required before the limit can be evaluated.
- Get comfortable reading limits off a graph: an open circle at a point
  means the function is undefined there, but the limit can still exist if
  both sides approach the same height.

## 14. Summary

A limit describes the value a function approaches near a point — not
necessarily the value it has *at* that point. This distinction, small as it
sounds, is the foundation the entire derivative and integral machinery is
built on. [`02-limits/`](../02-limits/) picks up here and formalizes
everything with precise definitions and provable laws.

## 15. Navigation

**Previous:** [`trigonometry.md`](trigonometry.md) · **Next:** [`02-limits/`](../02-limits/)
