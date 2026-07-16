# Trigonometry Refresher

![Level](https://img.shields.io/badge/level-pre--calculus-lightgrey)

## 1. Learning objectives

By the end of this lesson you should be able to:

- Recall exact trig values at all standard unit-circle angles from memory
- Prove and apply the Pythagorean and double-angle identities
- Convert between degrees and radians fluently
- Sketch and read `sin`, `cos`, and `tan` graphs, including amplitude/period
- Evaluate inverse trig functions and know their restricted domains

## 2. Prerequisites

[`algebra.md`](algebra.md) — for identity manipulation.

## 3. Intuition before mathematics

Trig identities look like memorization, but they're really just consequences
of one picture: a point moving around a unit circle. Once you can *see*
`sin θ` and `cos θ` as the vertical and horizontal coordinates of that point,
almost every identity becomes something you can re-derive in ten seconds
instead of something you have to recall under exam pressure. Trigonometric
functions dominate Chapters 3, 4, 6, and 8 of this repository — derivatives
of `sin`/`cos`, integration by trig substitution, and Taylor series all lean
on the identities below.

## 4. Formal definitions

For a point at angle `θ` on the unit circle: `cos θ` is the x-coordinate,
`sin θ` is the y-coordinate, and `tan θ = sin θ / cos θ` (undefined where
`cos θ = 0`).

**Radian measure:** `θ` in radians is the arc length subtended on a unit
circle. `π radians = 180°`.

## 5. Theorems (core identities)

| Identity | Statement |
|---|---|
| Pythagorean | `sin²θ + cos²θ = 1` |
| Pythagorean (derived) | `1 + tan²θ = sec²θ`, `1 + cot²θ = csc²θ` |
| Sum formulas | `sin(A±B) = sinA cosB ± cosA sinB` |
| | `cos(A±B) = cosA cosB ∓ sinA sinB` |
| Double angle | `sin 2θ = 2 sinθ cosθ` |
| | `cos 2θ = cos²θ − sin²θ = 1 − 2sin²θ = 2cos²θ − 1` |
| Half angle | `sin²θ = (1 − cos2θ)/2` |
| | `cos²θ = (1 + cos2θ)/2` |
| Even/Odd | `cos` is even, `sin` and `tan` are odd |

**Unit circle reference table:**

| `θ` (deg) | `θ` (rad) | `sin θ` | `cos θ` | `tan θ` |
|---|---|---|---|---|
| 0° | 0 | 0 | 1 | 0 |
| 30° | π/6 | 1/2 | √3/2 | 1/√3 |
| 45° | π/4 | √2/2 | √2/2 | 1 |
| 60° | π/3 | √3/2 | 1/2 | √3 |
| 90° | π/2 | 1 | 0 | undefined |

## 6. Proof sketch

*Pythagorean identity* follows immediately from the unit circle's equation
`x² + y² = 1`: since `x = cosθ` and `y = sinθ` for a point on that circle,
substitution gives `cos²θ + sin²θ = 1` directly — this isn't a separate fact
to memorize, it's the definition of the unit circle rewritten.

*Double-angle for sine* follows from the sum formula: set `A = B = θ` in
`sin(A+B) = sinA cosB + cosA sinB` to get `sin(2θ) = 2 sinθ cosθ`.

## 7. Visual explanation

```text
                    (0,1)
                     90°
              120°    │    60°
        (−1/2,√3/2)   │   (1/2,√3/2)
                       │
   180° ───────────────┼─────────────── 0°/360°
        (−1,0)         │            (1,0)
              240°     │    300°
        (−1/2,−√3/2)   │   (1/2,−√3/2)
                     270°
                    (0,−1)

Point at angle θ = (cos θ, sin θ)
```

```text
Which identity do I need?

Given an expression with sin/cos
   │
   ├── sin²θ or cos²θ alone? → use Pythagorean or half-angle
   ├── sin(A+B) / cos(A+B) form? → use sum/difference formula
   ├── sin2θ / cos2θ form? → use double-angle formula
   └── Need to lower a power (e.g. sin⁴θ)? → apply half-angle repeatedly
```

## 8. Step-by-step derivations

**Deriving `cos 2θ = 1 − 2sin²θ`** from the Pythagorean identity and the
double-angle formula:

```text
cos 2θ = cos²θ − sin²θ                 (double angle, standard form)
        = (1 − sin²θ) − sin²θ          (Pythagorean: cos²θ = 1 − sin²θ)
        = 1 − 2sin²θ
```

## 9. Worked examples

### Example 1 — Exact value using sum formula

Find the exact value of `sin(75°)`.

<details>
<summary>Hint</summary>

Write `75° = 45° + 30°` and use the sum formula for sine.

</details>

<details>
<summary>Solution</summary>

```
sin(75°) = sin(45° + 30°) = sin45°cos30° + cos45°sin30°
         = (√2/2)(√3/2) + (√2/2)(1/2)
         = (√6 + √2)/4
```

</details>

### Example 2 — Simplifying with an identity

Simplify `(1 − cos²x)/sinx` for `sinx ≠ 0`.

<details>
<summary>Hint</summary>

Rewrite `1 − cos²x` using the Pythagorean identity.

</details>

<details>
<summary>Solution</summary>

`1 − cos²x = sin²x`, so:

```
sin²x / sinx = sinx
```

</details>

### Example 3 — Inverse trig evaluation

Evaluate `arccos(−1/2)`.

<details>
<summary>Hint</summary>

The range of `arccos` is `[0, π]`. Where in that range does cosine equal
`−1/2`?

</details>

<details>
<summary>Solution</summary>

`cos θ = −1/2` at `θ = 2π/3` within `[0, π]` (second quadrant reference
angle `π/3`). **`arccos(−1/2) = 2π/3`.**

</details>

## 10. Practice problems

1. Find the exact value of `tan(15°)`.
2. Prove `1 + tan²θ = sec²θ` starting from `sin²θ + cos²θ = 1`.
3. Simplify `cos2x / (cosx − sinx)`.
4. Evaluate `arcsin(√3/2)`.
5. Convert `210°` to radians.

<details>
<summary>Solutions</summary>

1. `tan15° = tan(45°−30°) = (1 − 1/√3)/(1 + 1/√3) = (√3−1)/(√3+1) = 2 − √3`
2. Divide `sin²θ + cos²θ = 1` by `cos²θ`: `tan²θ + 1 = 1/cos²θ = sec²θ`
3. `cos2x = cos²x − sin²x = (cosx−sinx)(cosx+sinx)`, so
   `cos2x/(cosx − sinx) = cosx + sinx` (for `cosx ≠ sinx`)
4. `arcsin(√3/2) = π/3` (range of arcsin is `[−π/2, π/2]`)
5. `210° × (π/180°) = 7π/6`

</details>

## 11. Challenge problems

1. Show that `sin⁴θ = (3 − 4cos2θ + cos4θ)/8` using half-angle identities
   twice.
2. Solve `2sin²x − sinx − 1 = 0` for `x ∈ [0, 2π)`.
3. Find all solutions of `cos2x = cosx` on `[0, 2π)`.

<details>
<summary>Solutions</summary>

1. `sin²θ = (1−cos2θ)/2`, so `sin⁴θ = [(1−cos2θ)/2]² =
   (1 − 2cos2θ + cos²2θ)/4`. Then `cos²2θ = (1+cos4θ)/2`, giving
   `(1 − 2cos2θ + (1+cos4θ)/2)/4 = (3 − 4cos2θ + cos4θ)/8`. ∎
2. Let `u = sinx`: `2u² − u − 1 = 0 → (2u+1)(u−1) = 0 → u = −1/2` or `u = 1`.
   `sinx = 1 → x = π/2`. `sinx = −1/2 → x = 7π/6, 11π/6`.
   **Solutions: `x = π/2, 7π/6, 11π/6`.**
3. `cos2x = 2cos²x − 1`, so `2cos²x − 1 = cosx → 2cos²x − cosx − 1 = 0
   → (2cosx+1)(cosx−1) = 0`. `cosx = 1 → x = 0`.
   `cosx = −1/2 → x = 2π/3, 4π/3`.
   **Solutions: `x = 0, 2π/3, 4π/3`.**

</details>

## 12. Common mistakes

- **Mixing degrees and radians** in the same calculation — decide one unit
  and convert everything to it first.
- **Forgetting the restricted range of inverse trig functions.** `arcsin`
  and `arctan` output only `[−π/2, π/2]`; `arccos` outputs only `[0, π]`.
  `arcsin(sin(2π))` is **not** `2π`.
- **Sign errors from quadrant** when finding reference angles — always
  determine the quadrant first, then attach the correct sign.
- **Treating `sin²x` as `sin(x²)`.** They are unrelated; `sin²x` means
  `(sinx)²`.

## 13. Exam tips

- Rebuild the unit circle from scratch on scratch paper rather than
  memorizing all 12+ values independently — one picture generates all of
  them.
- When simplifying trig expressions, check first whether the Pythagorean
  identity applies; it resolves the majority of simplification problems in
  one step.
- Memorize the derivatives `d/dx sinx = cosx` and `d/dx cosx = −sinx` now —
  Chapter 3 assumes instant recall of these.

## 14. Summary

Trigonometry in this course is a toolbox of identities that let you rewrite
an expression in a more useful form — usually to make a limit, derivative,
or integral tractable. The unit circle is the single source of truth behind
every identity above; when in doubt, rebuild from the circle rather than
guessing a remembered formula.

## 15. Navigation

**Previous:** [`functions.md`](functions.md) · **Next:** [`limits-review.md`](limits-review.md)
