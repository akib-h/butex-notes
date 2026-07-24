# Squeeze (Sandwich) Theorem

## 1. Learning objectives

- State the Squeeze Theorem precisely
- Use it to evaluate limits that resist direct algebraic manipulation,
  especially trig limits
- Derive lim(x→0) sin(x)/x = 1 and lim(x→0) (1−cos x)/x = 0 using it

## 2. Prerequisites

- [`introduction.md`](introduction.md)
- [`limit-laws.md`](limit-laws.md)
- [`01-prerequisites/trigonometry.md`](../01-prerequisites/trigonometry.md)

## 3. Intuition before mathematics

If a function is always trapped between two other functions, and those two
"bounding" functions squeeze together to the same value at a point, the
trapped function has no choice but to go there too — like a person walking
down a hallway that narrows to a single point; wherever the walls end up,
so does the person.

## 4. Formal definitions

**Squeeze Theorem.** If g(x) ≤ f(x) ≤ h(x) for all x near a (except
possibly at a itself), and lim(x→a) g(x) = lim(x→a) h(x) = L, then
lim(x→a) f(x) = L also.

## 5. Theorems

**The fundamental trig limit.** lim(x→0) sin(x)/x = 1.

**Companion limit.** lim(x→0) (1 − cos x)/x = 0.

Both are proved directly via the Squeeze Theorem in section 6/8 below, and
are the building blocks for differentiating sin(x) and cos(x) from first
principles in [`03-derivatives/definition.md`](../03-derivatives/definition.md).

## 6. Proof sketch

**lim(x→0) sin(x)/x = 1**, sketch: for 0 < x < π/2, comparing areas of a
small triangle, a circular sector, and a larger triangle in the unit circle
gives sin(x) < x < tan(x). Dividing through by sin(x) (positive in this
range) and inverting flips the inequalities into
cos(x) < sin(x)/x < 1. Since lim(x→0) cos(x) = 1 and the constant function 1
trivially has limit 1, the Squeeze Theorem forces lim(x→0⁺) sin(x)/x = 1.
An even-function symmetry argument extends this to x → 0⁻, giving the
two-sided result.

## 7. Visual explanation

```text
      h(x)  ┌─────•
            │    /
      f(x)  │   •   ← trapped between g and h near x = a
            │  /
      g(x)  └─•

At x = a:  g(a) = h(a) = L, and g(x) ≤ f(x) ≤ h(x) everywhere nearby
           ⟹  f(x) is forced to L as well.
```

## 8. Step-by-step derivations

**Evaluate lim(x→0) x²·sin(1/x):**

1. sin(1/x) is undefined at x=0 but always satisfies −1 ≤ sin(1/x) ≤ 1 for
   x ≠ 0, no matter how wildly it oscillates.
2. Multiply the inequality by x² ≥ 0 (safe since x² doesn't flip
   inequality direction): −x² ≤ x²·sin(1/x) ≤ x².
3. lim(x→0) (−x²) = 0 and lim(x→0) x² = 0 — both bounding functions
   squeeze to 0.
4. By the Squeeze Theorem, lim(x→0) x²·sin(1/x) = 0.

This is a case where direct substitution and factoring both fail (sin(1/x)
oscillates infinitely near 0), but the Squeeze Theorem handles it cleanly.

## 9. Worked examples

### Example 1 — using sin(x)/x → 1

Evaluate lim(x→0) sin(3x)/x.

<details>
<summary>Hint</summary>

Multiply and divide to create a sin(3x)/(3x) term.

</details>

<details>
<summary>Solution</summary>

sin(3x)/x = 3 · sin(3x)/(3x). Let u = 3x; as x→0, u→0, so
sin(3x)/(3x) = sin(u)/u → 1. Therefore the limit is 3 · 1 = 3.

</details>

### Example 2 — a bounded-oscillation squeeze

Evaluate lim(x→0) x·cos(1/x²).

<details>
<summary>Hint</summary>

cos of anything is bounded between −1 and 1, regardless of the argument.

</details>

<details>
<summary>Solution</summary>

−|x| ≤ x·cos(1/x²) ≤ |x| for x ≠ 0 (since −1≤cos(1/x²)≤1, multiply by |x|,
careful with sign — use |x| as the bound rather than x directly to keep
inequalities valid for both x>0 and x<0). Both −|x| and |x| → 0 as x→0, so
by the Squeeze Theorem the limit is 0.

</details>

## 10. Practice problems

1. Evaluate lim(x→0) tan(x)/x.
2. Evaluate lim(x→0) sin(5x)/sin(2x).
3. Evaluate lim(x→0) x²·cos(1/x).

<details>
<summary>Answers</summary>

1. 1 (write tan x = sin x / cos x, split into [sin x/x]·[1/cos x] → 1·1)
2. 5/2 (multiply/divide both by their arguments: [5·sin(5x)/(5x)] /
   [2·sin(2x)/(2x)] → 5/2)
3. 0 (squeeze between −x² and x²)

</details>

## 11. Challenge problems

1. Use the Squeeze Theorem to show lim(x→0) (1 − cos x)/x² = 1/2 (hint:
   multiply numerator and denominator by 1 + cos x first).
2. Show that lim(x→∞) sin(x)/x = 0 using the Squeeze Theorem (this is a
   limit *at infinity*, not at 0 — the bounding argument is different).

<details>
<summary>Hints</summary>

1. After rationalizing you'll get (1−cos²x)/[x²(1+cos x)] = sin²x /
   [x²(1+cos x)] = [sin x/x]² · 1/(1+cos x); take the limit of each factor.
2. For x > 0, −1/x ≤ sin(x)/x ≤ 1/x; both bounds → 0 as x → ∞.

</details>

## 12. Common mistakes

- Forgetting the squeeze bounds must hold *near* a (not necessarily
  everywhere), and must themselves have the *same* limit at a.
- Trying to squeeze with bounds that don't actually converge to the same
  value — this proves nothing.
- Sign errors when multiplying inequalities by a variable expression that
  could be negative (always split into cases or use |x| as done above).

## 13. Exam tips

- Squeeze Theorem is the go-to tool whenever a limit involves sin, cos,
  or another bounded oscillating function multiplied by something that
  → 0.
- Memorize lim(x→0) sin(x)/x = 1 and lim(x→0) (1−cos x)/x = 0 outright —
  they show up constantly, including inside derivative-from-first-
  principles proofs.
- When asked to "prove" a trig limit, the expected answer is almost always
  a Squeeze Theorem argument, not a calculator check.

## 14. Summary

- The Squeeze Theorem lets you evaluate a limit by trapping the function
  between two simpler functions that converge to the same value.
- It's the standard tool for limits involving bounded oscillation (sin,
  cos of a blowing-up argument) multiplied by something vanishing.
- lim(x→0) sin(x)/x = 1 and lim(x→0) (1−cos x)/x = 0 are proved this way
  and used repeatedly throughout the rest of the course.

## 15. Navigation

← [`one-sided-and-infinite-limits.md`](one-sided-and-infinite-limits.md) · [`continuity.md`](continuity.md) →
