# Differentiation Rules

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Prerequisites](#prerequisites)
- [1. Motivation](#1-motivation)
- [2. Intuition](#2-intuition)
- [3. Algebraic Rules](#3-algebraic-rules)
- [4. Exponential and Logarithmic Functions](#4-exponential-and-logarithmic-functions)
- [5. Trigonometric Functions](#5-trigonometric-functions)
- [6. Inverse Trigonometric Functions](#6-inverse-trigonometric-functions)
- [7. Hyperbolic Functions](#7-hyperbolic-functions)
- [8. Inverse Hyperbolic Functions](#8-inverse-hyperbolic-functions)
- [9. Master Reference Table](#9-master-reference-table)
- [10. Worked Examples](#10-worked-examples)
- [Common Mistakes](#common-mistakes)
- [Exam Tips](#exam-tips)
- [Exercises](#exercises)
- [Summary](#summary)
- [Navigation](#navigation)

## Learning Objectives

- Differentiate constants, powers, and constant multiples of functions
- Apply the Sum, Difference, Product, and Quotient Rules
- Recall and derive the derivatives of exponential and logarithmic functions
- Recall and derive the derivatives of all six trigonometric functions
- Recall the derivatives of the six inverse trigonometric functions
- Recall and derive the derivatives of hyperbolic and inverse hyperbolic functions

## Prerequisites

- [`definition.md`](definition.md) — the limit definition of the derivative
- Trigonometric identities (angle sum formulas, Pythagorean identities)
- Properties of exponentials and logarithms
- Definitions of $\sinh$, $\cosh$, $\tanh$ and their inverses (helpful, reviewed briefly here)

## 1. Motivation

Deriving every function from the limit definition, as in `definition.md`, is rigorous but slow. Mathematicians long ago proved a small set of **rules** that let you differentiate almost any elementary function by pattern-matching, without ever writing a limit. This file collects and derives that toolbox.

## 2. Intuition

Each rule below encodes a structural fact about how "slopes combine":

- Adding functions adds their slopes.
- Scaling a function scales its slope by the same factor.
- Multiplying two functions has a more subtle effect (the Product Rule) because *both* factors are changing simultaneously.
- Dividing two functions is like the product rule "in reverse" (the Quotient Rule).

## 3. Algebraic Rules

### 3.1 Constant Rule

**Statement.** If $f(x) = c$ for a constant $c$, then $f'(x) = 0$.

**Proof.** $f'(x) = \lim_{h\to0}\dfrac{c - c}{h} = \lim_{h\to0} 0 = 0.$ $\blacksquare$

*Intuition:* a constant function's graph is a horizontal line; horizontal lines have slope $0$ everywhere.

### 3.2 Power Rule

**Statement.** For any real number $n$, $\dfrac{d}{dx}\big[x^n\big] = n x^{n-1}$.

**Proof (for positive integers $n$, via the Binomial Theorem).**

$$
f'(x) = \lim_{h\to0} \frac{(x+h)^n - x^n}{h}
$$

By the Binomial Theorem,
$$
(x+h)^n = x^n + nx^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \cdots + h^n
$$

so
$$
(x+h)^n - x^n = nx^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \cdots + h^n = h\left[nx^{n-1} + \binom{n}{2}x^{n-2}h + \cdots + h^{n-1}\right]
$$

Dividing by $h$ and letting $h \to 0$, every term except the first vanishes (each remaining term still has a factor of $h$):

$$
f'(x) = nx^{n-1}
$$

$\blacksquare$

> **Note:** The Power Rule holds for *all* real exponents $n$ (negative, fractional, irrational), though the proof for non-integer $n$ requires logarithmic differentiation or the general exponential rule (see `logarithmic-differentiation.md`).

### 3.3 Constant Multiple Rule

**Statement.** $\dfrac{d}{dx}\big[c\, f(x)\big] = c\, f'(x)$.

**Proof.**
$$
\frac{d}{dx}[cf(x)] = \lim_{h\to0}\frac{cf(x+h)-cf(x)}{h} = c\lim_{h\to0}\frac{f(x+h)-f(x)}{h} = c f'(x)
$$
$\blacksquare$

### 3.4 Sum Rule

**Statement.** $\dfrac{d}{dx}\big[f(x)+g(x)\big] = f'(x) + g'(x)$.

**Proof.**
$$
\lim_{h\to0}\frac{[f(x+h)+g(x+h)] - [f(x)+g(x)]}{h} = \lim_{h\to0}\left[\frac{f(x+h)-f(x)}{h} + \frac{g(x+h)-g(x)}{h}\right] = f'(x)+g'(x)
$$
(using the Sum Law for limits). $\blacksquare$

### 3.5 Difference Rule

**Statement.** $\dfrac{d}{dx}\big[f(x)-g(x)\big] = f'(x) - g'(x)$. Proof is identical to the Sum Rule with a sign change.

### 3.6 Product Rule

**Statement.**
$$
\frac{d}{dx}\big[f(x)g(x)\big] = f'(x)g(x) + f(x)g'(x)
$$

**Proof.** Add and subtract $f(x+h)g(x)$ in the numerator of the difference quotient:

$$
\frac{f(x+h)g(x+h) - f(x)g(x)}{h} = \frac{f(x+h)g(x+h) - f(x+h)g(x) + f(x+h)g(x) - f(x)g(x)}{h}
$$

$$
= f(x+h)\cdot\frac{g(x+h)-g(x)}{h} + g(x)\cdot\frac{f(x+h)-f(x)}{h}
$$

As $h\to0$: $f(x+h) \to f(x)$ (since $f$ is differentiable, hence continuous), the first fraction $\to g'(x)$, and the second fraction $\to f'(x)$. So the whole expression tends to

$$
f(x)g'(x) + g(x)f'(x)
$$
$\blacksquare$

> **Intuition:** Think of $f(x)g(x)$ as the area of a rectangle with side lengths $f$ and $g$. If both sides change slightly, the change in area comes from *two* thin strips — one from each side changing — which is exactly the two terms in the Product Rule.

### 3.7 Quotient Rule

**Statement.**
$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}, \qquad g(x)\neq0
$$

**Proof (via the Product Rule).** Write $\dfrac{f(x)}{g(x)} = f(x)\cdot[g(x)]^{-1}$. By the Product Rule,

$$
\frac{d}{dx}\left[f(x)[g(x)]^{-1}\right] = f'(x)[g(x)]^{-1} + f(x)\cdot\frac{d}{dx}\big[g(x)^{-1}\big]
$$

By the Chain Rule (previewed here; formally derived in `chain-rule.md`) with the Power Rule, $\dfrac{d}{dx}[g(x)^{-1}] = -[g(x)]^{-2}g'(x)$. Substituting:

$$
= \frac{f'(x)}{g(x)} - \frac{f(x)g'(x)}{[g(x)]^2} = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$
$\blacksquare$

> **Exam tip:** Memorize the Quotient Rule as "**LO D-HI minus HI D-LO, over LO-LO**" — (LOw times Derivative of HIgh, minus HIgh times Derivative of LOw, all over LOw squared) — where "LO" = $g(x)$ (the denominator) and "HI" = $f(x)$ (the numerator).

## 4. Exponential and Logarithmic Functions

### 4.1 The Natural Exponential

**Statement.** $\dfrac{d}{dx}\big[e^x\big] = e^x$.

**Proof sketch.** By definition,
$$
\frac{d}{dx}[e^x] = \lim_{h\to0} \frac{e^{x+h}-e^x}{h} = e^x \lim_{h\to0}\frac{e^h - 1}{h}
$$
The remaining limit, $\lim_{h\to0}\frac{e^h-1}{h}$, equals $1$ — this is in fact one common *definition* of the number $e$ (the base for which this limit is exactly $1$). Hence $\frac{d}{dx}[e^x] = e^x \cdot 1 = e^x$. $\blacksquare$

*This is the unique function (up to constant multiples) that is its own derivative — the reason $e^x$ is central to differential equations and exponential growth models.*

### 4.2 General Exponential Base

**Statement.** For $a>0$, $\dfrac{d}{dx}\big[a^x\big] = a^x \ln a$.

**Derivation.** Write $a^x = e^{x\ln a}$ (since $a = e^{\ln a}$). By the Chain Rule,
$$
\frac{d}{dx}\big[e^{x\ln a}\big] = e^{x\ln a}\cdot \ln a = a^x \ln a
$$

### 4.3 The Natural Logarithm

**Statement.** $\dfrac{d}{dx}\big[\ln x\big] = \dfrac{1}{x}$, for $x > 0$.

**Derivation (via inverse function differentiation).** Let $y = \ln x$, so $x = e^y$. Differentiate both sides with respect to $x$, treating $y$ as a function of $x$ (implicit differentiation, formally covered in `implicit-differentiation.md`):
$$
1 = e^y \cdot \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{e^y} = \frac{1}{x}
$$

### 4.4 General Logarithmic Base

**Statement.** For $a > 0$, $a \neq 1$: $\dfrac{d}{dx}\big[\log_a x\big] = \dfrac{1}{x \ln a}$.

**Derivation.** Using the change-of-base formula $\log_a x = \dfrac{\ln x}{\ln a}$:
$$
\frac{d}{dx}\left[\frac{\ln x}{\ln a}\right] = \frac{1}{\ln a}\cdot\frac{1}{x} = \frac{1}{x\ln a}
$$

## 5. Trigonometric Functions

### 5.1 Two Key Limits

The derivations below rely on two classical trigonometric limits (proven geometrically in Module 02 using the Squeeze Theorem):

$$
\lim_{h\to0}\frac{\sin h}{h} = 1, \qquad \lim_{h\to0}\frac{\cos h - 1}{h} = 0
$$

### 5.2 Derivative of $\sin x$

**Derivation.** Using the angle-sum identity $\sin(x+h) = \sin x\cos h + \cos x \sin h$:

$$
\frac{d}{dx}[\sin x] = \lim_{h\to0}\frac{\sin(x+h)-\sin x}{h} = \lim_{h\to0}\frac{\sin x\cos h + \cos x\sin h - \sin x}{h}
$$

$$
= \lim_{h\to0}\left[\sin x \cdot \frac{\cos h - 1}{h} + \cos x\cdot\frac{\sin h}{h}\right] = \sin x \cdot 0 + \cos x \cdot 1 = \cos x
$$

### 5.3 Derivative of $\cos x$

**Derivation.** Using $\cos(x+h) = \cos x\cos h - \sin x\sin h$, an analogous computation gives
$$
\frac{d}{dx}[\cos x] = -\sin x
$$

### 5.4 The Remaining Four (via Quotient Rule)

| Function | Derivative | Derivation sketch |
|----------|-----------|--------------------|
| $\tan x = \dfrac{\sin x}{\cos x}$ | $\sec^2 x$ | Quotient Rule: $\dfrac{\cos x\cdot\cos x - \sin x\cdot(-\sin x)}{\cos^2 x} = \dfrac{\cos^2x+\sin^2x}{\cos^2x} = \dfrac{1}{\cos^2 x} = \sec^2 x$ |
| $\cot x = \dfrac{\cos x}{\sin x}$ | $-\csc^2 x$ | Quotient Rule, analogous steps |
| $\sec x = \dfrac{1}{\cos x}$ | $\sec x \tan x$ | Quotient Rule with numerator $1$: $\dfrac{0\cdot\cos x - 1\cdot(-\sin x)}{\cos^2x} = \dfrac{\sin x}{\cos^2x} = \sec x\tan x$ |
| $\csc x = \dfrac{1}{\sin x}$ | $-\csc x\cot x$ | Quotient Rule, analogous steps |

## 6. Inverse Trigonometric Functions

These are derived using implicit differentiation (full technique in `implicit-differentiation.md`); the results are stated here for reference, with one worked derivation as illustration.

### 6.1 Derivative of $\arcsin x$

**Derivation.** Let $y = \arcsin x$, so $\sin y = x$, with $y \in [-\pi/2, \pi/2]$. Differentiate both sides with respect to $x$:
$$
\cos y \cdot \frac{dy}{dx} = 1 \implies \frac{dy}{dx} = \frac{1}{\cos y}
$$
Since $\cos y \ge 0$ on $[-\pi/2,\pi/2]$, use $\cos y = \sqrt{1-\sin^2 y} = \sqrt{1-x^2}$:
$$
\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}}
$$

### 6.2 Full Table

| Function | Derivative |
|----------|-----------|
| $\arcsin x$ | $\dfrac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | $-\dfrac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\dfrac{1}{1+x^2}$ |
| $\text{arccot}\, x$ | $-\dfrac{1}{1+x^2}$ |
| $\text{arcsec}\, x$ | $\dfrac{1}{\lvert x\rvert\sqrt{x^2-1}}$ |
| $\text{arccsc}\, x$ | $-\dfrac{1}{\lvert x\rvert\sqrt{x^2-1}}$ |

## 7. Hyperbolic Functions

**Definitions.** $\sinh x = \dfrac{e^x - e^{-x}}{2}, \qquad \cosh x = \dfrac{e^x+e^{-x}}{2}, \qquad \tanh x = \dfrac{\sinh x}{\cosh x}$

### 7.1 Derivative of $\sinh x$

**Derivation.**
$$
\frac{d}{dx}[\sinh x] = \frac{d}{dx}\left[\frac{e^x - e^{-x}}{2}\right] = \frac{e^x - (-e^{-x})}{2} = \frac{e^x+e^{-x}}{2} = \cosh x
$$

### 7.2 Full Table

| Function | Derivative |
|----------|-----------|
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |
| $\tanh x$ | $\text{sech}^2 x$ |
| $\coth x$ | $-\text{csch}^2 x$ |
| $\text{sech}\, x$ | $-\text{sech}\,x\tanh x$ |
| $\text{csch}\, x$ | $-\text{csch}\,x\coth x$ |

> **Note the pattern:** the hyperbolic derivative rules mirror the trigonometric ones almost exactly, but **without** the alternating minus signs on $\cosh$ (compare $\frac{d}{dx}\cos x = -\sin x$ vs. $\frac{d}{dx}\cosh x = +\sinh x$).

## 8. Inverse Hyperbolic Functions

| Function | Derivative | Domain note |
|----------|-----------|-------------|
| $\text{arcsinh}\, x = \ln(x+\sqrt{x^2+1})$ | $\dfrac{1}{\sqrt{x^2+1}}$ | all $x$ |
| $\text{arccosh}\, x = \ln(x+\sqrt{x^2-1})$ | $\dfrac{1}{\sqrt{x^2-1}}$ | $x>1$ |
| $\text{arctanh}\, x = \frac12\ln\frac{1+x}{1-x}$ | $\dfrac{1}{1-x^2}$ | $\lvert x\rvert<1$ |

**Sample derivation ($\text{arcsinh}$).** Let $y = \text{arcsinh}\, x$, so $\sinh y = x$. Differentiate implicitly: $\cosh y \cdot y' = 1$, so $y' = \dfrac{1}{\cosh y}$. Using the hyperbolic identity $\cosh^2 y - \sinh^2 y = 1$, we get $\cosh y = \sqrt{1+x^2}$ (positive since $\cosh \ge 1$ always), so $y' = \dfrac{1}{\sqrt{1+x^2}}$.

## 9. Master Reference Table

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\log_a x$ | $1/(x\ln a)$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x\tan x$ |
| $\csc x$ | $-\csc x\cot x$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ |
| $\arccos x$ | $-1/\sqrt{1-x^2}$ |
| $\arctan x$ | $1/(1+x^2)$ |
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |
| $\tanh x$ | $\text{sech}^2 x$ |
| $\text{arcsinh}\, x$ | $1/\sqrt{x^2+1}$ |
| $\text{arccosh}\, x$ | $1/\sqrt{x^2-1}$ |
| $\text{arctanh}\, x$ | $1/(1-x^2)$ |

## 10. Worked Examples

### Example 1

#### Problem

Differentiate $f(x) = 5x^4 - 3x^2 + 7x - 2$.

<details><summary>Hint</summary>

Differentiate term by term using the Power, Constant Multiple, Sum, and Difference Rules.

</details>

<details><summary>Solution</summary>

$$
f'(x) = 5(4x^3) - 3(2x) + 7(1) - 0 = 20x^3 - 6x + 7
$$

</details>

### Example 2

#### Problem

Differentiate $g(x) = x^3 e^x$.

<details><summary>Hint</summary>

Product Rule: identify $u = x^3$ and $v = e^x$.

</details>

<details><summary>Solution</summary>

With $u = x^3$, $u' = 3x^2$; with $v = e^x$, $v' = e^x$.

$$
g'(x) = u'v + uv' = 3x^2 e^x + x^3 e^x = x^2 e^x(3+x)
$$

</details>

### Example 3

#### Problem

Differentiate $h(x) = \dfrac{\sin x}{x^2+1}$.

<details><summary>Hint</summary>

Quotient Rule with "HI" $=\sin x$ and "LO" $=x^2+1$.

</details>

<details><summary>Solution</summary>

$$
h'(x) = \frac{\cos x\,(x^2+1) - \sin x\,(2x)}{(x^2+1)^2}
$$

</details>

### Example 4

#### Problem

Differentiate $f(x) = 4^x + \log_2 x$.

<details><summary>Hint</summary>

Use the general exponential and general logarithm rules.

</details>

<details><summary>Solution</summary>

$$
f'(x) = 4^x \ln 4 + \frac{1}{x\ln 2}
$$

</details>

### Example 5

#### Problem

Differentiate $g(x) = \sec x - 3\tan x$.

<details><summary>Hint</summary>

Apply the trigonometric derivative table term by term.

</details>

<details><summary>Solution</summary>

$$
g'(x) = \sec x\tan x - 3\sec^2 x
$$

</details>

### Example 6

#### Problem

Differentiate $f(x) = \dfrac{e^x}{\cosh x}$.

<details><summary>Hint</summary>

Quotient Rule; recall $\dfrac{d}{dx}[\cosh x] = \sinh x$.

</details>

<details><summary>Solution</summary>

$$
f'(x) = \frac{e^x\cosh x - e^x \sinh x}{\cosh^2 x} = \frac{e^x(\cosh x - \sinh x)}{\cosh^2 x}
$$

Since $\cosh x - \sinh x = e^{-x}$ (a standard hyperbolic identity), this simplifies to
$$
f'(x) = \frac{e^x\cdot e^{-x}}{\cosh^2 x} = \frac{1}{\cosh^2 x} = \text{sech}^2 x
$$

</details>

## Common Mistakes

> **Common mistake #1:** Applying the Product Rule as "just multiply the derivatives" ($f'g'$). This is **wrong** — the correct rule is $f'g + fg'$.

> **Common mistake #2:** Misremembering the sign in the Quotient Rule (swapping the order of the subtraction in the numerator). The "HI" term's derivative always comes first.

> **Common mistake #3:** Writing $\dfrac{d}{dx}[a^x] = x\,a^{x-1}$ — this confuses the *exponential* rule with the *power* rule. $a^x$ is exponential (variable in the exponent); its derivative involves $\ln a$, not the Power Rule.

> **Common mistake #4:** Forgetting the negative signs on $\cos x$, $\cot x$, and $\csc x$'s derivatives.

## Exam Tips

- Build a personal flash-card set from the Master Reference Table (§9) — these must become instant recall.
- When a function is a quotient but the denominator is a *constant*, prefer the Constant Multiple Rule over the full Quotient Rule (it's faster and less error-prone).
- Always double check whether a problem needs the Chain Rule *in addition to* these rules — most real exam problems combine several rules (see `chain-rule.md`).

## Exercises

### Beginner

1. Differentiate $f(x) = 6x^5 - 2x + 9$.

<details><summary>Answer</summary>$f'(x) = 30x^4 - 2$</details>

2. Differentiate $f(x) = 3\sin x + 4\cos x$.

<details><summary>Answer</summary>$f'(x) = 3\cos x - 4\sin x$</details>

3. Differentiate $f(x) = e^x + \ln x$.

<details><summary>Answer</summary>$f'(x) = e^x + 1/x$</details>

### Intermediate

4. Differentiate $f(x) = x^2\cos x$.

<details><summary>Answer</summary>$f'(x) = 2x\cos x - x^2\sin x$</details>

5. Differentiate $f(x) = \dfrac{x+1}{x-1}$.

<details><summary>Answer</summary>$f'(x) = \dfrac{(1)(x-1)-(x+1)(1)}{(x-1)^2} = \dfrac{-2}{(x-1)^2}$</details>

6. Differentiate $f(x) = 5^x - \log_5 x$.

<details><summary>Answer</summary>$f'(x) = 5^x\ln 5 - \dfrac{1}{x\ln5}$</details>

7. Differentiate $f(x) = \tan x \cdot e^x$.

<details><summary>Answer</summary>$f'(x) = \sec^2x\cdot e^x + \tan x\cdot e^x = e^x(\sec^2 x + \tan x)$</details>

### Advanced

8. Differentiate $f(x) = \dfrac{\sinh x}{x}$.

<details><summary>Answer</summary>$f'(x) = \dfrac{x\cosh x - \sinh x}{x^2}$</details>

9. Differentiate $f(x) = x^3 \arctan x$.

<details><summary>Answer</summary>$f'(x) = 3x^2\arctan x + \dfrac{x^3}{1+x^2}$</details>

10. Differentiate $f(x) = \dfrac{\arcsin x}{\sqrt{1-x^2}}$.

<details><summary>Answer</summary>

Using the Quotient Rule with $u = \arcsin x,\ u' = \frac{1}{\sqrt{1-x^2}}$, and $v=\sqrt{1-x^2} = (1-x^2)^{1/2}$, $v' = \frac{-x}{\sqrt{1-x^2}}$:
$$
f'(x) = \frac{\frac{1}{\sqrt{1-x^2}}\cdot\sqrt{1-x^2} - \arcsin x\cdot\frac{-x}{\sqrt{1-x^2}}}{1-x^2} = \frac{1 + \dfrac{x\arcsin x}{\sqrt{1-x^2}}}{1-x^2}
$$

</details>

### Challenge

11. Prove the Quotient Rule directly from the limit definition (without using the Product Rule as a shortcut).

<details><summary>Answer</summary>

$$
\left(\frac{f}{g}\right)'(x) = \lim_{h\to0}\frac{1}{h}\left[\frac{f(x+h)}{g(x+h)} - \frac{f(x)}{g(x)}\right] = \lim_{h\to0}\frac{f(x+h)g(x) - f(x)g(x+h)}{h\, g(x+h)g(x)}
$$

Add and subtract $f(x)g(x)$ in the numerator:
$$
f(x+h)g(x) - f(x)g(x) + f(x)g(x) - f(x)g(x+h) = g(x)[f(x+h)-f(x)] - f(x)[g(x+h)-g(x)]
$$

Dividing by $h$ and taking the limit (using continuity of $g$ so $g(x+h)\to g(x)$):
$$
= \frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}
$$

</details>

12. Derive $\dfrac{d}{dx}[\cot x] = -\csc^2 x$ directly from the Quotient Rule applied to $\dfrac{\cos x}{\sin x}$.

<details><summary>Answer</summary>

$$
\frac{d}{dx}\left[\frac{\cos x}{\sin x}\right] = \frac{-\sin x\cdot\sin x - \cos x\cdot\cos x}{\sin^2 x} = \frac{-(\sin^2x+\cos^2x)}{\sin^2x} = \frac{-1}{\sin^2x} = -\csc^2 x
$$

</details>

## Summary

| Rule | Formula |
|---|---|
| Constant | $\frac{d}{dx}[c] = 0$ |
| Power | $\frac{d}{dx}[x^n] = nx^{n-1}$ |
| Constant multiple | $\frac{d}{dx}[cf] = cf'$ |
| Sum/Difference | $(f\pm g)' = f'\pm g'$ |
| Product | $(fg)' = f'g+fg'$ |
| Quotient | $(f/g)' = \frac{f'g-fg'}{g^2}$ |

Plus the full tables of exponential, logarithmic, trigonometric, inverse trigonometric, hyperbolic, and inverse hyperbolic derivatives in §9. These rules, combined with the Chain Rule (next lesson), let you differentiate virtually any elementary function without returning to the limit definition.

## Navigation

← Previous: [`definition.md`](definition.md) | Up: [`README.md`](README.md) | Next: [`chain-rule.md`](chain-rule.md) →
