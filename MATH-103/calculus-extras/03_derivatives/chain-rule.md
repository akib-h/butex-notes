# The Chain Rule

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Prerequisites](#prerequisites)
- [1. Motivation](#1-motivation)
- [2. Intuition](#2-intuition)
- [3. Geometric Interpretation](#3-geometric-interpretation)
- [4. Formal Statement and Proof](#4-formal-statement-and-proof)
- [5. Nested Functions and Repeated Composition](#5-nested-functions-and-repeated-composition)
- [6. The Composite Function Decision Tree](#6-the-composite-function-decision-tree)
- [7. Worked Examples](#7-worked-examples)
- [Common Mistakes](#common-mistakes)
- [Exam Tips](#exam-tips)
- [Exercises](#exercises)
- [Summary](#summary)
- [Navigation](#navigation)

## Learning Objectives

- State the Chain Rule in both Lagrange and Leibniz notation
- Explain the Chain Rule intuitively as "multiplying rates of change"
- Prove the Chain Rule (standard proof, with a note on its subtlety)
- Differentiate deeply nested compositions of functions
- Apply the Chain Rule repeatedly ("outside-in") for multiple compositions
- Recognize composite-function structure quickly using a decision-tree strategy

## Prerequisites

- [`differentiation-rules.md`](differentiation-rules.md)
- Function composition, $(f\circ g)(x) = f(g(x))$

## 1. Motivation

The rules in `differentiation-rules.md` differentiate simple functions like $x^3$, $\sin x$, or $e^x$. But most real functions are **compositions**: $\sin(x^2)$, $e^{3x+1}$, $\sqrt{\tan x}$, $\ln(\cos x)$. None of the earlier rules directly handle a function stuffed *inside* another function. The Chain Rule is the tool that makes composite functions differentiable using only the derivatives of their pieces.

## 2. Intuition

Suppose $y$ depends on $u$, and $u$ depends on $x$. If $u$ changes twice as fast as $x$, and $y$ changes three times as fast as $u$, then $y$ changes $3 \times 2 = 6$ times as fast as $x$. Rates of change **multiply** through a chain of dependencies:

$$
\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}
$$

> **Intuition in one sentence:** If gears are linked so that gear A turns 3× for every turn of gear B, and gear B turns 2× for every turn of gear C, then gear A turns $3\times2=6$ times for every turn of gear C.

## 3. Geometric Interpretation

If $y = f(u)$ and $u = g(x)$, the composite $y = f(g(x))$ has a tangent-line slope that is the **product** of the two "local" tangent slopes: the slope of $f$ at the point $u=g(x)$, times the slope of $g$ at the point $x$. Zooming into the graph of $f\circ g$ near a point, the curve locally looks like a straight line whose slope is exactly this product — because zooming into $g$ near $x$ makes it look linear with slope $g'(x)$, and then zooming into $f$ near $u=g(x)$ makes *that* look linear with slope $f'(u)$; composing two linear maps multiplies their slopes.

```
   x  ──g──▶  u = g(x)  ──f──▶  y = f(g(x))
   │            │                  │
   │  slope g'(x)     slope f'(u)  │
   └─────────────  slope = f'(u)·g'(x)  ─────────┘
```

## 4. Formal Statement and Proof

**Statement (Chain Rule).** If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then $f\circ g$ is differentiable at $x$ and

$$
(f\circ g)'(x) = f'(g(x))\cdot g'(x)
$$

Equivalently, in Leibniz notation, if $y = f(u)$ and $u = g(x)$:

$$
\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}
$$

**Proof sketch (the "naïve" argument).** Consider

$$
\frac{f(g(x+h)) - f(g(x))}{h} = \frac{f(g(x+h))-f(g(x))}{g(x+h)-g(x)} \cdot \frac{g(x+h)-g(x)}{h}
$$

(valid whenever $g(x+h)\neq g(x)$). As $h\to0$, $g(x+h)\to g(x)$ (continuity, since $g$ is differentiable), so the first factor tends to $f'(g(x))$ (the difference quotient of $f$ evaluated at the point $u=g(x)$), and the second factor tends to $g'(x)$ by definition. Multiplying the limits gives $f'(g(x))g'(x)$.

> **Important subtlety:** This "naïve" argument has a gap — it silently divides by $g(x+h)-g(x)$, which can be **zero** for infinitely many $h$ arbitrarily close to $0$ even when $g'(x)\ne 0$ (e.g., if $g$ oscillates). A fully rigorous proof defines an auxiliary function
> $$
> Q(u) = \begin{cases}\dfrac{f(u)-f(g(x))}{u-g(x)} & u\neq g(x)\\ f'(g(x)) & u = g(x)\end{cases}
> $$
> which is continuous at $u=g(x)$ by differentiability of $f$, and rewrites $f(g(x+h))-f(g(x)) = Q(g(x+h))\cdot[g(x+h)-g(x)]$ — an identity that holds even when the bracket is zero. Dividing by $h$ and taking the limit then gives the result without any division-by-zero issue. The conclusion is the same; the proof sketch above captures the essential intuition.

## 5. Nested Functions and Repeated Composition

### 5.1 Single Composition

For $y = f(g(x))$:
$$
y' = f'(g(x))\cdot g'(x)
$$

### 5.2 Double Nesting (Three Functions Deep)

For $y = f(g(h(x)))$, apply the Chain Rule twice — "peel the onion from the outside in":

$$
y' = f'(g(h(x)))\cdot g'(h(x))\cdot h'(x)
$$

**Derivation.** Let $u = h(x)$ and $v = g(u)$, so $y = f(v)$. Then
$$
\frac{dy}{dx} = \frac{dy}{dv}\cdot\frac{dv}{du}\cdot\frac{du}{dx} = f'(v)\cdot g'(u)\cdot h'(x) = f'(g(h(x)))\cdot g'(h(x))\cdot h'(x)
$$

### 5.3 General $n$-Fold Composition

For $y = f_1(f_2(f_3(\cdots f_n(x)\cdots)))$:

$$
y' = f_1'\big(f_2(f_3(\cdots))\big)\cdot f_2'\big(f_3(\cdots)\big)\cdots f_{n-1}'(f_n(x))\cdot f_n'(x)
$$

Each factor is the derivative of one "layer," evaluated at everything *inside* it, and all factors are multiplied together.

## 6. The Composite Function Decision Tree

Use this procedure whenever you see a composite function:

```
Is the function of the form f(g(x))?
        │
        ├── NO → use the appropriate basic rule from differentiation-rules.md
        │
        └── YES → identify the OUTERMOST operation (last thing "applied" to x)
                    │
                    ├── Differentiate the OUTER function,
                    │   leaving the INNER function untouched inside it
                    │
                    ├── Multiply by the derivative of the INNER function
                    │
                    └── Is the inner function ITSELF composite?
                            │
                            ├── YES → repeat this whole process on the inner function
                            │
                            └── NO → done — simplify algebraically
```

**Worked identification example:** for $y = \sin(e^{x^2})$:

1. Outermost operation: $\sin(\,\cdot\,)$ → derivative factor: $\cos(e^{x^2})$
2. Next layer in: $e^{(\cdot)}$ → derivative factor: $e^{x^2}$
3. Innermost layer: $x^2$ → derivative factor: $2x$

$$
y' = \cos(e^{x^2}) \cdot e^{x^2} \cdot 2x
$$

## 7. Worked Examples

### Example 1

#### Problem

Differentiate $y = (3x^2+1)^5$.

<details><summary>Hint</summary>

Outer function: $(\cdot)^5$. Inner function: $3x^2+1$.

</details>

<details><summary>Solution</summary>

Outer derivative (Power Rule, leaving inner untouched): $5(3x^2+1)^4$. Inner derivative: $6x$.

$$
y' = 5(3x^2+1)^4 \cdot 6x = 30x(3x^2+1)^4
$$

</details>

### Example 2

#### Problem

Differentiate $y = \sin(4x)$.

<details><summary>Hint</summary>

Outer function: $\sin(\cdot)$. Inner function: $4x$.

</details>

<details><summary>Solution</summary>

$$
y' = \cos(4x)\cdot 4 = 4\cos(4x)
$$

</details>

### Example 3

#### Problem

Differentiate $y = e^{-x^2}$.

<details><summary>Hint</summary>

Outer function: $e^{(\cdot)}$. Inner function: $-x^2$.

</details>

<details><summary>Solution</summary>

$$
y' = e^{-x^2}\cdot(-2x) = -2xe^{-x^2}
$$

</details>

### Example 4

#### Problem

Differentiate $y = \sqrt{\tan x}$.

<details><summary>Hint</summary>

Rewrite as $(\tan x)^{1/2}$ before applying the Chain Rule.

</details>

<details><summary>Solution</summary>

$$
y' = \frac12(\tan x)^{-1/2}\cdot \sec^2 x = \frac{\sec^2 x}{2\sqrt{\tan x}}
$$

</details>

### Example 5 (Double Nesting)

#### Problem

Differentiate $y = \cos^3(5x)$ — that is, $y = [\cos(5x)]^3$.

<details><summary>Hint</summary>

Three layers: cube $\to$ cosine $\to$ linear. Work from the outside in.

</details>

<details><summary>Solution</summary>

Layer 1 (outermost, cube): $3[\cos(5x)]^2$
Layer 2 (cosine): $\times\,(-\sin(5x))$
Layer 3 (linear): $\times\, 5$

$$
y' = 3\cos^2(5x)\cdot(-\sin(5x))\cdot 5 = -15\cos^2(5x)\sin(5x)
$$

</details>

### Example 6 (Chain Rule + Product Rule Combined)

#### Problem

Differentiate $y = x^2 e^{3x}$.

<details><summary>Hint</summary>

This needs the Product Rule *and* the Chain Rule (for the $e^{3x}$ factor).

</details>

<details><summary>Solution</summary>

Let $u = x^2$ ($u'=2x$) and $v = e^{3x}$ ($v' = 3e^{3x}$ by the Chain Rule).

$$
y' = u'v + uv' = 2xe^{3x} + x^2\cdot 3e^{3x} = xe^{3x}(2+3x)
$$

</details>

### Example 7 (Triple Nesting)

#### Problem

Differentiate $y = \ln\big(\sin(x^2+1)\big)$.

<details><summary>Hint</summary>

Layers: $\ln(\cdot) \to \sin(\cdot) \to x^2+1$.

</details>

<details><summary>Solution</summary>

$$
y' = \frac{1}{\sin(x^2+1)}\cdot\cos(x^2+1)\cdot 2x = \frac{2x\cos(x^2+1)}{\sin(x^2+1)} = 2x\cot(x^2+1)
$$

</details>

## Common Mistakes

> **Common mistake #1 — "forgetting the inner derivative":** Writing $\dfrac{d}{dx}[\sin(3x)] = \cos(3x)$ and stopping there. You must still multiply by the derivative of the inside, $3$.

> **Common mistake #2 — differentiating the wrong layer first:** For $y=(x^2+1)^5$, some students mistakenly differentiate $x^2+1$ first, getting confused about ordering. Always identify the **outermost** operation first, then work inward.

> **Common mistake #3 — dropping factors in multi-layer chains:** In a triple (or higher) composition, it is easy to multiply only two of the three required factors. Explicitly list every layer before multiplying (see the decision tree, §6).

> **Common mistake #4 — confusing Chain Rule with Product Rule:** $(fg)' \ne f'g'$ (Product Rule needed), and $f(g(x))' \ne f'(x)g'(x)$ (must evaluate $f'$ *at* $g(x)$, not at $x$).

## Exam Tips

- Say the layers out loud (or write them as a list) before differentiating anything — "outer: square root; middle: sine; inner: $2x$" — to avoid missing a factor.
- After computing, sanity-check the total number of multiplied factors against the number of nested layers you identified.
- Many exam problems intentionally combine Chain Rule with Product or Quotient Rule (Example 6 above) — always ask "is any *factor* here itself a composite function?"

## Exercises

### Beginner

1. Differentiate $y = (2x+3)^4$.

<details><summary>Answer</summary>$y' = 8(2x+3)^3$</details>

2. Differentiate $y = \cos(7x)$.

<details><summary>Answer</summary>$y' = -7\sin(7x)$</details>

3. Differentiate $y = e^{5x}$.

<details><summary>Answer</summary>$y' = 5e^{5x}$</details>

### Intermediate

4. Differentiate $y = \ln(x^2+4)$.

<details><summary>Answer</summary>$y' = \dfrac{2x}{x^2+4}$</details>

5. Differentiate $y = \tan(3x^2-1)$.

<details><summary>Answer</summary>$y' = 6x\sec^2(3x^2-1)$</details>

6. Differentiate $y = \sqrt{5x+2}$.

<details><summary>Answer</summary>$y' = \dfrac{5}{2\sqrt{5x+2}}$</details>

7. Differentiate $y = x\sin(2x)$ (Chain Rule + Product Rule).

<details><summary>Answer</summary>$y' = \sin(2x) + 2x\cos(2x)$</details>

### Advanced

8. Differentiate $y = \sin^4(3x)$.

<details><summary>Answer</summary>$y' = 4\sin^3(3x)\cdot\cos(3x)\cdot3 = 12\sin^3(3x)\cos(3x)$</details>

9. Differentiate $y = e^{\sin(x^2)}$.

<details><summary>Answer</summary>$y' = e^{\sin(x^2)}\cdot\cos(x^2)\cdot 2x = 2x\cos(x^2)e^{\sin(x^2)}$</details>

10. Differentiate $y = \dfrac{1}{\sqrt{4-x^2}}$.

<details><summary>Answer</summary>

Rewrite as $(4-x^2)^{-1/2}$: $y' = -\tfrac12(4-x^2)^{-3/2}\cdot(-2x) = \dfrac{x}{(4-x^2)^{3/2}}$

</details>

### Challenge

11. Differentiate $y = \ln\Big(\cos\big(\sqrt{x^2+1}\big)\Big)$ (four layers deep).

<details><summary>Answer</summary>

Layers: $\ln(\cdot) \to \cos(\cdot) \to \sqrt{\cdot} \to x^2+1$.

$$
y' = \frac{1}{\cos(\sqrt{x^2+1})}\cdot\Big(-\sin(\sqrt{x^2+1})\Big)\cdot\frac{1}{2\sqrt{x^2+1}}\cdot 2x = \frac{-x\tan(\sqrt{x^2+1})}{\sqrt{x^2+1}}
$$

</details>

12. Derive a general formula for $\dfrac{d}{dx}\big[f(x)^{g(x)}\big]$ in the special case where $g(x)=n$ is constant, using only the Chain Rule (not logarithmic differentiation), and explain why this method does **not** extend to non-constant $g(x)$.

<details><summary>Answer</summary>

When $g(x)=n$ is constant, $f(x)^n$ is a direct composition (outer function $u^n$, inner function $f(x)$), so the Chain Rule gives $\frac{d}{dx}[f(x)^n] = n f(x)^{n-1}f'(x)$ — the "Generalized Power Rule."

This method fails when $g(x)$ is non-constant because $f(x)^{g(x)}$ is no longer a simple composition of one outer and one inner function — the variable $x$ appears in *both* the base and the exponent simultaneously. The Chain Rule as stated only handles a single "outer(inner(x))" structure; a genuinely different technique (logarithmic differentiation, see `logarithmic-differentiation.md`) is required to handle variable exponents correctly.

</details>

## Summary

- The Chain Rule states $(f\circ g)'(x) = f'(g(x))\cdot g'(x)$, or in Leibniz form, $\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$.
- Geometrically, composing two functions multiplies their local tangent slopes.
- For deeply nested compositions, apply the rule repeatedly from the outside in, multiplying one factor per layer.
- The Chain Rule combines constantly with the Product and Quotient Rules on real problems — always check whether any factor is itself composite.
- A rigorous proof requires care around division by zero; the intuitive "rates multiply" argument captures the right idea even though the fully rigorous proof is more delicate.

## Navigation

← Previous: [`differentiation-rules.md`](differentiation-rules.md) | Up: [`README.md`](README.md) | Next: [`implicit-differentiation.md`](implicit-differentiation.md) →
