# The Definition of the Derivative

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Prerequisites](#prerequisites)
- [1. Motivation](#1-motivation)
- [2. Intuition](#2-intuition)
- [3. Formal Mathematics](#3-formal-mathematics)
- [4. Derivations](#4-derivations)
- [5. Key Properties](#5-key-properties)
- [6. Important Theorems](#6-important-theorems)
- [7. Visual Intuition](#7-visual-intuition)
- [8. Worked Examples](#8-worked-examples)
- [9. Common Mistakes](#9-common-mistakes)
- [10. Exam Tips](#10-exam-tips)
- [Exercises](#exercises)
- [Summary](#summary)
- [Navigation](#navigation)

## Learning Objectives

By the end of this lesson you will be able to:

- Explain the derivative as an instantaneous rate of change and as the slope of a tangent line
- State the limit definition of the derivative at a point and as a function
- Compute derivatives directly from the limit definition (the "difference quotient")
- Determine whether a function is differentiable at a point
- Explain the relationship between differentiability and continuity

## Prerequisites

- Limits, including one-sided limits ([Module 02](../02-limits-and-continuity/README.md))
- Continuity of a function at a point
- Basic algebraic manipulation (factoring, rationalizing)
- Secant and tangent lines, slope of a line

## 1. Motivation

Calculus was born from a simple but stubborn question: **how fast is something changing right now?**

Average rate of change is easy — if a car travels 120 km in 2 hours, its average speed is 60 km/h. But what is its speed at the *exact instant* $t = 1$ hour? You cannot divide a distance by a time interval of zero. Newton and Leibniz independently resolved this paradox by asking what happens to the average rate of change over shorter and shorter intervals — that is, by taking a **limit**. The result is the derivative: the mathematical object that captures "instantaneous rate of change" rigorously.

## 2. Intuition

Picture the graph of a function $f$. Pick two points on the curve: $(a, f(a))$ and a nearby point $(a+h, f(a+h))$. The line through these two points is a **secant line**, and its slope is the average rate of change of $f$ over the interval $[a, a+h]$:

$$
\text{slope of secant} = \frac{f(a+h) - f(a)}{h}
$$

Now imagine sliding the second point closer and closer to the first — shrinking $h$ toward $0$. The secant line rotates and, for a "nice" (differentiable) function, settles into a limiting position: the **tangent line** at $(a, f(a))$. The slope of that tangent line is the derivative of $f$ at $a$.

> **Intuition in one sentence:** The derivative is the slope of the secant line, taken to the limit as the two points on the curve merge into one.

## 3. Formal Mathematics

### 3.1 The Derivative at a Point

**Definition.** The derivative of $f$ at $x = a$, denoted $f'(a)$, is

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

provided this limit exists. If it exists, $f$ is said to be **differentiable at $a$**.

### 3.2 The Alternate (Symmetric-Point) Form

An equivalent formulation replaces $a + h$ with a variable point $x$ approaching $a$:

$$
f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}
$$

This form is often more convenient for algebraic simplification, especially when factoring is easier than expanding.

### 3.3 The Derivative as a Function

Instead of fixing a single point $a$, we can let the point of evaluation vary, producing a new function $f'$:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

The domain of $f'$ is the set of all $x$ where this limit exists — a subset of the domain of $f$.

### 3.4 Notation

| Notation | Name | Common context |
|----------|------|-----------------|
| $f'(x)$ | Lagrange notation | General-purpose, function-centric |
| $\dfrac{dy}{dx}$ | Leibniz notation | Emphasizes the variables involved; natural for related rates and differentials |
| $\dfrac{d}{dx}\big[f(x)\big]$ | Leibniz operator notation | Applying differentiation as an operation |
| $Df(x)$ | Euler/operator notation | Common in linear algebra and differential equations |
| $\dot{y}$ | Newton notation | Derivatives with respect to time |

### 3.5 One-Sided Derivatives

Just as with limits, we define:

$$
f'_-(a) = \lim_{h \to 0^-} \frac{f(a+h)-f(a)}{h}, \qquad f'_+(a) = \lim_{h \to 0^+} \frac{f(a+h)-f(a)}{h}
$$

$f$ is differentiable at $a$ if and only if both one-sided derivatives exist **and are equal**.

## 4. Derivations

### 4.1 Derivative of $f(x) = x^2$ from First Principles

$$
f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h}
$$

Expand the numerator:

$$
(x+h)^2 - x^2 = x^2 + 2xh + h^2 - x^2 = 2xh + h^2
$$

So:

$$
f'(x) = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0} \frac{h(2x+h)}{h} = \lim_{h \to 0}(2x+h) = 2x
$$

The algebraic factoring of $h$ out of the numerator is the key step that removes the $\tfrac{0}{0}$ indeterminacy before the limit is taken.

### 4.2 Derivative of $f(x) = \sqrt{x}$ from First Principles (Rationalization)

$$
f'(x) = \lim_{h \to 0} \frac{\sqrt{x+h} - \sqrt{x}}{h}
$$

Multiply numerator and denominator by the conjugate $\sqrt{x+h} + \sqrt{x}$:

$$
= \lim_{h \to 0} \frac{(\sqrt{x+h} - \sqrt{x})(\sqrt{x+h} + \sqrt{x})}{h(\sqrt{x+h} + \sqrt{x})} = \lim_{h \to 0} \frac{(x+h) - x}{h(\sqrt{x+h}+\sqrt{x})}
$$

$$
= \lim_{h \to 0} \frac{h}{h(\sqrt{x+h}+\sqrt{x})} = \lim_{h \to 0} \frac{1}{\sqrt{x+h}+\sqrt{x}} = \frac{1}{2\sqrt{x}}
$$

### 4.3 Derivative of $f(x) = 1/x$ from First Principles

$$
f'(x) = \lim_{h \to 0} \frac{\frac{1}{x+h} - \frac{1}{x}}{h} = \lim_{h \to 0} \frac{\frac{x - (x+h)}{x(x+h)}}{h} = \lim_{h \to 0} \frac{-h}{h \cdot x(x+h)} = \lim_{h \to 0} \frac{-1}{x(x+h)} = -\frac{1}{x^2}
$$

## 5. Key Properties

- The derivative at a point, when it exists, is a **single real number** — the slope of the tangent line there.
- The derivative as a function, $f'(x)$, gives a slope value for every $x$ in its domain.
- A function can fail to be differentiable at a point for several reasons (see §6.2).
- Differentiability is a **local** property: it is defined pointwise, then extended over an interval if it holds at every point in that interval.

## 6. Important Theorems

### 6.1 Theorem: Differentiability Implies Continuity

**Statement.** If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

**Proof.**
We must show $\lim_{x \to a} f(x) = f(a)$, equivalently that $\lim_{x\to a}\big[f(x) - f(a)\big] = 0$.

$$
f(x) - f(a) = \frac{f(x)-f(a)}{x-a}\cdot (x - a) \quad \text{for } x \neq a
$$

Taking the limit as $x \to a$ and using the product rule for limits:

$$
\lim_{x\to a}\big[f(x)-f(a)\big] = \left(\lim_{x\to a}\frac{f(x)-f(a)}{x-a}\right)\left(\lim_{x\to a}(x-a)\right) = f'(a) \cdot 0 = 0
$$

Since $f'(a)$ exists (it is a finite real number) and $\lim_{x\to a}(x-a) = 0$, the product is $0$. Hence $\lim_{x\to a} f(x) = f(a)$, so $f$ is continuous at $a$. $\blacksquare$

> **Important:** The converse is **false**. Continuity does **not** imply differentiability — see $f(x) = |x|$ below.

### 6.2 Standard Non-Differentiability Examples

| Function | Point | Why it fails |
|----------|-------|--------------|
| $f(x) = \lvert x \rvert$ | $x = 0$ | Corner: left and right derivatives disagree ($-1$ vs. $1$) |
| $f(x) = x^{1/3}$ | $x = 0$ | Vertical tangent: the difference quotient diverges to $\pm\infty$ |
| $f(x) = \begin{cases} x \sin(1/x) & x \neq 0 \\ 0 & x = 0 \end{cases}$ | $x = 0$ | Difference quotient oscillates and has no limit |
| Any function with a jump discontinuity | at the jump | Not continuous there, so (by §6.1) cannot be differentiable |

## 7. Visual Intuition

Secant lines converging to the tangent line as $h \to 0$:

```
   f(x)
    │                              secant (h large)
    │                          ⟋
    │                      ⟋
    │                  ⟋   ← secant (h smaller)
    │              ⟋  ⟍
    │          ⟋   ⟍___tangent line (h → 0)
    │      ⟋
    │  •(a, f(a))
    │
    └───────────────────────────────── x
        a    a+h(small)   a+h(large)
```

As the second point slides toward $a$ along the curve, the secant's slope $\dfrac{f(a+h)-f(a)}{h}$ approaches the tangent's slope $f'(a)$.

The corner case of $f(x)=|x|$:

```
       \    │    /
        \   │   /
         \  │  /       left slope = −1
          \ │ /         right slope = +1
           \│/          → no single tangent line at 0
     ───────●───────
             0
```

## 8. Worked Examples

### Example 1

#### Problem

Use the limit definition to find $f'(x)$ for $f(x) = 3x + 5$.

<details>
<summary>Hint</summary>

Linear functions have constant slope — the difference quotient should simplify very quickly.

</details>

<details>
<summary>Solution</summary>

$$
f'(x) = \lim_{h\to 0} \frac{f(x+h)-f(x)}{h} = \lim_{h\to0} \frac{\big[3(x+h)+5\big] - \big[3x+5\big]}{h}
$$

Expand the numerator:

$$
3(x+h)+5 - 3x - 5 = 3x + 3h + 5 - 3x - 5 = 3h
$$

So:

$$
f'(x) = \lim_{h\to 0} \frac{3h}{h} = \lim_{h\to0} 3 = 3
$$

This matches geometric intuition: the slope of the line $y = 3x+5$ is its coefficient, $3$, everywhere.

</details>

### Example 2

#### Problem

Find $f'(2)$ for $f(x) = x^2 - 3x$ using the limit definition (point form).

<details>
<summary>Hint</summary>

Use $f'(a) = \lim_{x\to a} \dfrac{f(x)-f(a)}{x-a}$ and factor the numerator.

</details>

<details>
<summary>Solution</summary>

Here $a = 2$, so $f(a) = f(2) = 4 - 6 = -2$.

$$
f'(2) = \lim_{x\to 2} \frac{(x^2-3x) - (-2)}{x-2} = \lim_{x\to2} \frac{x^2 - 3x + 2}{x - 2}
$$

Factor the numerator: $x^2 - 3x + 2 = (x-1)(x-2)$.

$$
f'(2) = \lim_{x\to2} \frac{(x-1)(x-2)}{x-2} = \lim_{x\to2}(x-1) = 1
$$

So $f'(2) = 1$: the tangent line to $y = x^2 - 3x$ at $x=2$ has slope $1$.

</details>

### Example 3

#### Problem

Show that $f(x) = |x|$ is not differentiable at $x = 0$.

<details>
<summary>Hint</summary>

Compute the one-sided limits of the difference quotient separately.

</details>

<details>
<summary>Solution</summary>

$$
f'(0) = \lim_{h\to0} \frac{|0+h|-|0|}{h} = \lim_{h\to0} \frac{|h|}{h}
$$

From the right ($h \to 0^+$), $|h| = h$, so the quotient is $\dfrac{h}{h}=1$, giving a right-hand limit of $1$.

From the left ($h \to 0^-$), $|h| = -h$, so the quotient is $\dfrac{-h}{h}=-1$, giving a left-hand limit of $-1$.

Since the one-sided limits ($1$ and $-1$) disagree, $\lim_{h\to0}\frac{|h|}{h}$ does not exist. Therefore $f'(0)$ does not exist, and $f(x)=|x|$ is not differentiable at $0$ — even though it is continuous there.

</details>

### Example 4

#### Problem

Find $f'(x)$ from first principles for $f(x) = \dfrac{1}{x+1}$.

<details>
<summary>Hint</summary>

Combine the fractions in the numerator over a common denominator before simplifying.

</details>

<details>
<summary>Solution</summary>

$$
f'(x) = \lim_{h\to0}\frac{\frac{1}{x+h+1} - \frac{1}{x+1}}{h}
$$

Combine over a common denominator:

$$
\frac{1}{x+h+1} - \frac{1}{x+1} = \frac{(x+1) - (x+h+1)}{(x+h+1)(x+1)} = \frac{-h}{(x+h+1)(x+1)}
$$

So:

$$
f'(x) = \lim_{h\to0} \frac{1}{h}\cdot\frac{-h}{(x+h+1)(x+1)} = \lim_{h\to0} \frac{-1}{(x+h+1)(x+1)} = \frac{-1}{(x+1)^2}
$$

</details>

## 9. Common Mistakes

> **Common mistake #1:** Plugging $h = 0$ directly into $\dfrac{f(a+h)-f(a)}{h}$ without simplifying. This always gives $\tfrac{0}{0}$ — you must algebraically simplify (factor, expand, or rationalize) *before* taking the limit.

> **Common mistake #2:** Confusing average rate of change (secant slope over a *finite* interval) with instantaneous rate of change (the derivative, a *limit*).

> **Common mistake #3:** Assuming continuity implies differentiability. Continuity is *necessary* but not *sufficient* — corners, cusps, and vertical tangents are continuous but not differentiable.

> **Common mistake #4:** Forgetting to check *both* one-sided limits when a function is piecewise-defined near the point in question.

## 10. Exam Tips

- If asked to compute a derivative "from the definition" or "from first principles," you are expected to write out the limit explicitly — do not skip straight to a rule from `differentiation-rules.md`.
- When a difference quotient involves a square root, try rationalizing (multiply by the conjugate).
- When it involves a fraction, combine terms over a common denominator first.
- To disprove differentiability at a point, it is often fastest to show the one-sided derivative limits disagree.

## Exercises

### Beginner

1. Use the limit definition to find $f'(x)$ for $f(x) = 7$.

<details><summary>Answer</summary>

$f'(x) = 0$ for all $x$ (the difference quotient is $\frac{7-7}{h}=0$).

</details>

2. Use the limit definition to find $f'(x)$ for $f(x) = 4x - 1$.

<details><summary>Answer</summary>

$f'(x) = 4$.

</details>

3. Find $f'(3)$ for $f(x) = x^2$ using the limit definition.

<details><summary>Answer</summary>

$f'(3) = 6$.

</details>

### Intermediate

4. Use the limit definition to find $f'(x)$ for $f(x) = x^2 + 2x$.

<details><summary>Answer</summary>

$f'(x) = 2x + 2$.

</details>

5. Use the limit definition to find $f'(x)$ for $f(x) = x^3$. (Hint: expand $(x+h)^3$.)

<details><summary>Answer</summary>

$f'(x) = 3x^2$.

</details>

6. Determine whether $f(x) = x^{2/3}$ is differentiable at $x=0$.

<details><summary>Answer</summary>

No. The difference quotient $\frac{h^{2/3}}{h} = h^{-1/3}$ diverges as $h \to 0$ (a vertical tangent / cusp occurs at the origin).

</details>

### Advanced

7. Use the limit definition to find $f'(x)$ for $f(x) = \sqrt{x+2}$.

<details><summary>Answer</summary>

$f'(x) = \dfrac{1}{2\sqrt{x+2}}$, found by rationalizing the numerator.

</details>

8. Let $f(x) = \begin{cases} x^2 & x \le 1 \\ 2x - 1 & x > 1\end{cases}$. Show $f$ is differentiable at $x=1$.

<details><summary>Answer</summary>

Both pieces give value $1$ at $x=1$ (continuity holds), and the one-sided derivatives are $f'_-(1) = 2(1) = 2$ and $f'_+(1) = 2$. Since they agree, $f'(1) = 2$ and $f$ is differentiable there.

</details>

### Challenge

9. Prove that if $f$ is differentiable at $a$, then
$$
\lim_{h\to0} \frac{f(a+h) - f(a-h)}{2h} = f'(a).
$$
(This is the "symmetric difference quotient" used in numerical differentiation.) Is the converse true — does the existence of this symmetric limit imply $f$ is differentiable at $a$?

<details><summary>Answer</summary>

Write $\frac{f(a+h)-f(a-h)}{2h} = \frac12\left[\frac{f(a+h)-f(a)}{h} + \frac{f(a)-f(a-h)}{h}\right]$. Both bracketed terms tend to $f'(a)$ as $h\to0$ (the second is the definition of $f'(a)$ with $h$ replaced by $-h$ appropriately), so the average tends to $f'(a)$.

The converse is **false**: for $f(x)=|x|$ at $a=0$, the symmetric quotient is $\frac{|h|-|-h|}{2h} = 0$ for all $h\neq0$, so the symmetric limit exists and equals $0$, even though $f$ is not differentiable at $0$.

</details>

10. Using only the definition, show that if $f$ is differentiable at $a$ and $f(a) \neq 0$, then $g(x) = \dfrac{1}{f(x)}$ is differentiable at $a$ with $g'(a) = \dfrac{-f'(a)}{[f(a)]^2}$, assuming $f$ is continuous at $a$.

<details><summary>Answer</summary>

$$
g'(a) = \lim_{h\to0}\frac{\frac{1}{f(a+h)} - \frac{1}{f(a)}}{h} = \lim_{h\to0} \frac{f(a) - f(a+h)}{h\, f(a+h)f(a)} = \lim_{h\to0}\left(-\frac{f(a+h)-f(a)}{h}\right)\cdot \frac{1}{f(a+h)f(a)}
$$

Since $f$ is differentiable (hence continuous) at $a$, $f(a+h) \to f(a)$ as $h\to0$, so this tends to $-f'(a)\cdot\dfrac{1}{[f(a)]^2}$, i.e. $g'(a) = \dfrac{-f'(a)}{[f(a)]^2}$. (This is a special case of the Quotient Rule proven in `differentiation-rules.md`.)

</details>

## Summary

- The derivative of $f$ at $a$ is $f'(a) = \lim_{h\to0} \dfrac{f(a+h)-f(a)}{h}$, the limiting slope of secant lines — geometrically, the slope of the tangent line.
- The derivative can also be written $f'(x) = \lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}$, or as a function $f'(x) = \lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$.
- Differentiability at a point requires both one-sided difference-quotient limits to exist and agree.
- **Differentiable $\implies$ continuous**, but **not conversely** — corners, cusps, and vertical tangents are counterexamples.
- Direct computation from the definition (rather than shortcut rules) is essential for building intuition and is often tested explicitly on exams.

## Navigation

← Previous: [`02-limits-and-continuity`](../02-limits-and-continuity/README.md) | Up: [`README.md`](README.md) | Next: [`differentiation-rules.md`](differentiation-rules.md) →
