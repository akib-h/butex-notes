# Comprehensive Differential Calculus Notes

**Author:** University Mathematics Study Guide  
**Last Updated:** January 2026  
**Course Level:** Undergraduate Mathematics

---

## Table of Contents

1. [Introduction to Differential Calculus](#1-introduction-to-differential-calculus)
2. [Fundamental Concepts](#2-fundamental-concepts)
3. [Limits and Continuity](#3-limits-and-continuity)
4. [The Derivative](#4-the-derivative)
5. [Differentiation Rules](#5-differentiation-rules)
6. [Applications of Derivatives](#6-applications-of-derivatives)
7. [Advanced Topics](#7-advanced-topics)
8. [Important Theorems](#8-important-theorems)
9. [Practice Problems](#9-practice-problems)
10. [References](#10-references)

---

## 1. Introduction to Differential Calculus

### 1.1 What is Differential Calculus?

Differential calculus is a branch of mathematics that studies how functions change when their inputs change. It focuses on the concept of the **derivative**, which measures the instantaneous rate of change of a function.

**Historical Context:**
- Developed independently by Isaac Newton (1642-1727) and Gottfried Wilhelm Leibniz (1646-1716) in the late 17th century
- Newton approached it through physics and motion
- Leibniz developed the notation we use today (dy/dx)

### 1.2 Applications

Differential calculus has widespread applications in:
- **Physics:** Motion, velocity, acceleration, force
- **Engineering:** Optimization, control systems, signal processing
- **Economics:** Marginal cost, marginal revenue, elasticity
- **Biology:** Population growth, disease spread
- **Computer Science:** Machine learning, computer graphics
- **Medicine:** Drug dosage optimization, tumor growth modeling

---

## 2. Fundamental Concepts

### 2.1 Functions

A function f is a relation that assigns to each element x in a set D (the domain) exactly one element f(x) in a set R (the range).

**Notation:**
- f(x) - functional notation (Lagrange)
- y = f(x) - equation form
- f: D → R - mapping notation

**Types of Functions:**
1. **Polynomial functions:** f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀
2. **Rational functions:** f(x) = p(x)/q(x)
3. **Trigonometric functions:** sin(x), cos(x), tan(x), etc.
4. **Exponential functions:** f(x) = aˣ
5. **Logarithmic functions:** f(x) = logₐ(x)

### 2.2 Real Numbers

The real number system (ℝ) forms the foundation of calculus. Key subsets include:
- **Natural numbers (ℕ):** {1, 2, 3, ...}
- **Integers (ℤ):** {..., -2, -1, 0, 1, 2, ...}
- **Rational numbers (ℚ):** Numbers that can be expressed as p/q where p, q ∈ ℤ, q ≠ 0
- **Irrational numbers:** Real numbers that cannot be expressed as fractions (e.g., √2, π, e)

---

## 3. Limits and Continuity

### 3.1 The Concept of a Limit

The limit describes the behavior of a function as its input approaches a certain value.

**Definition (Informal):**
We write lim(x→a) f(x) = L if f(x) gets arbitrarily close to L as x gets arbitrarily close to a (but not equal to a).

**Definition (Formal - ε-δ definition):**
For every ε > 0, there exists a δ > 0 such that if 0 < |x - a| < δ, then |f(x) - L| < ε.

### 3.2 Limit Laws

If lim(x→a) f(x) = L and lim(x→a) g(x) = M, then:

1. **Sum Rule:** lim(x→a) [f(x) + g(x)] = L + M
2. **Difference Rule:** lim(x→a) [f(x) - g(x)] = L - M
3. **Product Rule:** lim(x→a) [f(x) · g(x)] = L · M
4. **Quotient Rule:** lim(x→a) [f(x)/g(x)] = L/M (provided M ≠ 0)
5. **Constant Multiple Rule:** lim(x→a) [c · f(x)] = c · L
6. **Power Rule:** lim(x→a) [f(x)]ⁿ = Lⁿ

### 3.3 One-Sided Limits

- **Right-hand limit:** lim(x→a⁺) f(x) = L (approaching from the right)
- **Left-hand limit:** lim(x→a⁻) f(x) = L (approaching from the left)

**Theorem:** lim(x→a) f(x) = L if and only if lim(x→a⁺) f(x) = lim(x→a⁻) f(x) = L

### 3.4 Limits at Infinity

- lim(x→∞) f(x) = L means f(x) approaches L as x increases without bound
- lim(x→-∞) f(x) = L means f(x) approaches L as x decreases without bound

**Example:**
```
lim(x→∞) 1/x = 0
lim(x→∞) (3x² + 2x)/(x² + 1) = 3
```

### 3.5 Continuity

A function f is **continuous at a point a** if:
1. f(a) is defined
2. lim(x→a) f(x) exists
3. lim(x→a) f(x) = f(a)

A function is **continuous on an interval** if it is continuous at every point in that interval.

**Properties:**
- Polynomial functions are continuous everywhere
- Rational functions are continuous on their domains
- Trigonometric functions are continuous on their domains
- If f and g are continuous at a, then f + g, f - g, f · g are continuous at a
- If g is continuous at a and f is continuous at g(a), then f ∘ g is continuous at a

**Intermediate Value Theorem:**
If f is continuous on [a, b] and N is any number between f(a) and f(b), then there exists c ∈ (a, b) such that f(c) = N.

---

## 4. The Derivative

### 4.1 Definition of the Derivative

The **derivative** of a function f at a point x is defined as:

```
f'(x) = lim(h→0) [f(x + h) - f(x)]/h
```

provided this limit exists.

**Alternative Definition:**
```
f'(a) = lim(x→a) [f(x) - f(a)]/(x - a)
```

**Notation:**
- f'(x) - Lagrange notation
- dy/dx - Leibniz notation
- df/dx - Leibniz notation
- Df(x) - operator notation
- ẏ - Newton notation (for time derivatives)

### 4.2 Geometric Interpretation

The derivative f'(a) represents:
- The **slope of the tangent line** to the graph of f at the point (a, f(a))
- The **instantaneous rate of change** of f at x = a

**Equation of the tangent line at (a, f(a)):**
```
y - f(a) = f'(a)(x - a)
```

### 4.3 Physical Interpretation

If s(t) represents position at time t, then:
- s'(t) = velocity at time t
- s''(t) = acceleration at time t

### 4.4 Differentiability

A function f is **differentiable at a** if f'(a) exists.

**Important Relationship:**
If f is differentiable at a, then f is continuous at a.

**Counterexample:** 
The converse is not true. f(x) = |x| is continuous at x = 0 but not differentiable there.

**Common Non-Differentiable Points:**
1. **Corners:** f(x) = |x| at x = 0
2. **Cusps:** f(x) = x^(2/3) at x = 0
3. **Vertical tangents:** f(x) = x^(1/3) at x = 0
4. **Discontinuities:** Any discontinuous function

---

## 5. Differentiation Rules

### 5.1 Basic Derivatives

| Function | Derivative |
|----------|-----------|
| f(x) = c (constant) | f'(x) = 0 |
| f(x) = x | f'(x) = 1 |
| f(x) = xⁿ | f'(x) = nxⁿ⁻¹ |
| f(x) = eˣ | f'(x) = eˣ |
| f(x) = aˣ | f'(x) = aˣ ln(a) |
| f(x) = ln(x) | f'(x) = 1/x |
| f(x) = logₐ(x) | f'(x) = 1/(x ln(a)) |

### 5.2 Trigonometric Derivatives

| Function | Derivative |
|----------|-----------|
| f(x) = sin(x) | f'(x) = cos(x) |
| f(x) = cos(x) | f'(x) = -sin(x) |
| f(x) = tan(x) | f'(x) = sec²(x) |
| f(x) = cot(x) | f'(x) = -csc²(x) |
| f(x) = sec(x) | f'(x) = sec(x)tan(x) |
| f(x) = csc(x) | f'(x) = -csc(x)cot(x) |

### 5.3 Inverse Trigonometric Derivatives

| Function | Derivative |
|----------|-----------|
| f(x) = sin⁻¹(x) | f'(x) = 1/√(1-x²) |
| f(x) = cos⁻¹(x) | f'(x) = -1/√(1-x²) |
| f(x) = tan⁻¹(x) | f'(x) = 1/(1+x²) |
| f(x) = cot⁻¹(x) | f'(x) = -1/(1+x²) |
| f(x) = sec⁻¹(x) | f'(x) = 1/(|x|√(x²-1)) |
| f(x) = csc⁻¹(x) | f'(x) = -1/(|x|√(x²-1)) |

### 5.4 Differentiation Rules

**1. Constant Multiple Rule:**
```
[cf(x)]' = cf'(x)
```

**2. Sum/Difference Rule:**
```
[f(x) ± g(x)]' = f'(x) ± g'(x)
```

**3. Product Rule:**
```
[f(x)g(x)]' = f'(x)g(x) + f(x)g'(x)
```

**Proof:**
Let h(x) = f(x)g(x). Then:
```
h'(x) = lim(Δx→0) [f(x+Δx)g(x+Δx) - f(x)g(x)]/Δx
      = lim(Δx→0) [f(x+Δx)g(x+Δx) - f(x)g(x+Δx) + f(x)g(x+Δx) - f(x)g(x)]/Δx
      = lim(Δx→0) [g(x+Δx)(f(x+Δx) - f(x))/Δx + f(x)(g(x+Δx) - g(x))/Δx]
      = g(x)f'(x) + f(x)g'(x)
```

**4. Quotient Rule:**
```
[f(x)/g(x)]' = [f'(x)g(x) - f(x)g'(x)]/[g(x)]²
```

**5. Chain Rule:**

If y = f(u) and u = g(x), then:
```
dy/dx = dy/du · du/dx
```

Or equivalently:
```
[f(g(x))]' = f'(g(x)) · g'(x)
```

**Example:**
Find the derivative of h(x) = (x² + 1)⁵

Let u = x² + 1, then h(x) = u⁵
```
h'(x) = 5u⁴ · (2x) = 5(x² + 1)⁴ · 2x = 10x(x² + 1)⁴
```

### 5.5 Implicit Differentiation

When a function is defined implicitly (e.g., x² + y² = 25), we differentiate both sides with respect to x, treating y as a function of x.

**Example:**
Find dy/dx for x² + y² = 25

Differentiate both sides:
```
2x + 2y(dy/dx) = 0
dy/dx = -x/y
```

### 5.6 Logarithmic Differentiation

Useful for functions involving products, quotients, or powers where the variable appears in both base and exponent.

**Procedure:**
1. Take the natural logarithm of both sides
2. Use logarithm properties to simplify
3. Differentiate implicitly
4. Solve for dy/dx

**Example:**
Find the derivative of y = x^x

```
ln(y) = ln(x^x) = x ln(x)
1/y · dy/dx = ln(x) + x · 1/x = ln(x) + 1
dy/dx = y(ln(x) + 1) = x^x(ln(x) + 1)
```

### 5.7 Higher-Order Derivatives

The **second derivative** is the derivative of the derivative:
```
f''(x) = d²f/dx² = d/dx[df/dx]
```

**Notations:**
- First derivative: f'(x), dy/dx, y', Df
- Second derivative: f''(x), d²y/dx², y'', D²f
- Third derivative: f'''(x), d³y/dx³, y'''
- nth derivative: f⁽ⁿ⁾(x), dⁿy/dxⁿ

**Physical Interpretation:**
- If s(t) = position, then s'(t) = velocity, s''(t) = acceleration

---

## 6. Applications of Derivatives

### 6.1 Related Rates

Related rates problems involve finding the rate at which one quantity changes with respect to time, given information about the rate at which other related quantities change.

**Strategy:**
1. Identify all quantities and their rates
2. Write an equation relating the quantities
3. Differentiate both sides with respect to time
4. Substitute known values and solve

**Example:**
A ladder 10 ft long rests against a vertical wall. If the bottom slides away from the wall at 1 ft/s, how fast is the top sliding down when the bottom is 6 ft from the wall?

Let x = distance from wall to bottom, y = height of top
Given: dx/dt = 1 ft/s, ladder length = 10 ft
Find: dy/dt when x = 6

Equation: x² + y² = 100

Differentiate:
```
2x(dx/dt) + 2y(dy/dt) = 0
dy/dt = -x(dx/dt)/y
```

When x = 6: y = √(100-36) = 8
```
dy/dt = -6(1)/8 = -3/4 ft/s
```

The top is sliding down at 3/4 ft/s.

### 6.2 Linear Approximation and Differentials

The **linear approximation** (tangent line approximation) of f near a is:
```
L(x) = f(a) + f'(a)(x - a)
```

**Differentials:**
- dy = f'(x)dx
- Δy ≈ dy for small Δx

**Example:**
Approximate √26 using linear approximation.

Let f(x) = √x, a = 25
```
f(25) = 5
f'(x) = 1/(2√x), so f'(25) = 1/10
L(x) = 5 + (1/10)(x - 25)
L(26) = 5 + (1/10)(1) = 5.1
```

Actual value: √26 ≈ 5.099

### 6.3 Maxima and Minima

**Definitions:**
- f has a **local maximum** at c if f(c) ≥ f(x) for all x near c
- f has a **local minimum** at c if f(c) ≤ f(x) for all x near c
- f has an **absolute maximum** at c if f(c) ≥ f(x) for all x in the domain
- f has an **absolute minimum** at c if f(c) ≤ f(x) for all x in the domain

**Critical Points:**
A point c is a **critical point** of f if:
- f'(c) = 0, or
- f'(c) does not exist

**Fermat's Theorem:**
If f has a local maximum or minimum at c, and f'(c) exists, then f'(c) = 0.

**Extreme Value Theorem:**
If f is continuous on a closed interval [a, b], then f attains both an absolute maximum and an absolute minimum on [a, b].

**Finding Absolute Extrema on [a, b]:**
1. Find all critical points in (a, b)
2. Evaluate f at all critical points and at the endpoints a and b
3. The largest value is the absolute maximum; the smallest is the absolute minimum

### 6.4 First Derivative Test

Let c be a critical point of a continuous function f.

1. If f' changes from positive to negative at c, then f has a local maximum at c
2. If f' changes from negative to positive at c, then f has a local minimum at c
3. If f' does not change sign at c, then f has no local extremum at c

### 6.5 Second Derivative Test

Let f'' be continuous near c with f'(c) = 0.

1. If f''(c) > 0, then f has a local minimum at c
2. If f''(c) < 0, then f has a local maximum at c
3. If f''(c) = 0, the test is inconclusive

### 6.6 Concavity and Inflection Points

**Concavity:**
- f is **concave up** on an interval if f'' > 0 on that interval (curve bends upward)
- f is **concave down** on an interval if f'' < 0 on that interval (curve bends downward)

**Inflection Point:**
A point (c, f(c)) is an **inflection point** if the concavity changes at x = c.

### 6.7 Optimization Problems

**Strategy:**
1. Understand the problem and identify the quantity to optimize
2. Draw a diagram if applicable
3. Introduce variables and write the objective function
4. Use constraints to express the objective function in terms of one variable
5. Find critical points by setting the derivative equal to zero
6. Use the first or second derivative test to verify that you have a maximum or minimum
7. Answer the question

**Example:**
Find the dimensions of a rectangle with perimeter 100 m that has maximum area.

Let x = length, y = width
Constraint: 2x + 2y = 100, so y = 50 - x
Objective: Maximize A = xy = x(50 - x) = 50x - x²

```
dA/dx = 50 - 2x = 0
x = 25
```

Since d²A/dx² = -2 < 0, this is a maximum.
y = 50 - 25 = 25

The rectangle is a square with side length 25 m.

### 6.8 L'Hôpital's Rule

If lim(x→a) f(x)/g(x) is of indeterminate form 0/0 or ∞/∞, then:
```
lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)
```
provided the limit on the right exists.

**Example:**
```
lim(x→0) sin(x)/x = lim(x→0) cos(x)/1 = 1
```

---

## 7. Advanced Topics

### 7.1 Parametric Equations

If x = f(t) and y = g(t), then:
```
dy/dx = (dy/dt)/(dx/dt) = g'(t)/f'(t)
```

### 7.2 Polar Coordinates

In polar coordinates (r, θ):
```
x = r cos(θ)
y = r sin(θ)
```

The slope of the tangent line:
```
dy/dx = (dr/dθ · sin(θ) + r cos(θ))/(dr/dθ · cos(θ) - r sin(θ))
```

### 7.3 Partial Derivatives

For functions of several variables f(x, y), partial derivatives are:
```
∂f/∂x = lim(h→0) [f(x+h, y) - f(x, y)]/h
∂f/∂y = lim(h→0) [f(x, y+h) - f(x, y)]/h
```

### 7.4 Taylor Polynomials

The **nth-degree Taylor polynomial** of f centered at a is:
```
Pₙ(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ... + f⁽ⁿ⁾(a)(x-a)ⁿ/n!
```

**Maclaurin polynomial** (centered at 0):
```
Pₙ(x) = f(0) + f'(0)x + f''(0)x²/2! + ... + f⁽ⁿ⁾(0)xⁿ/n!
```

**Common Taylor Series:**
```
eˣ = 1 + x + x²/2! + x³/3! + ...
sin(x) = x - x³/3! + x⁵/5! - ...
cos(x) = 1 - x²/2! + x⁴/4! - ...
```

---

## 8. Important Theorems

### 8.1 Rolle's Theorem

**Statement:**
Let f be a function that satisfies:
1. f is continuous on [a, b]
2. f is differentiable on (a, b)
3. f(a) = f(b)

Then there exists at least one c ∈ (a, b) such that f'(c) = 0.

**Geometric Interpretation:**
If a continuous, differentiable function has equal values at two points, then somewhere between those points the tangent line is horizontal.

### 8.2 Mean Value Theorem

**Statement:**
Let f be a function that satisfies:
1. f is continuous on [a, b]
2. f is differentiable on (a, b)

Then there exists at least one c ∈ (a, b) such that:
```
f'(c) = [f(b) - f(a)]/(b - a)
```

**Geometric Interpretation:**
There exists a point where the tangent line is parallel to the secant line connecting the endpoints.

**Applications:**
- Proving functions are constant if their derivative is zero
- Proving inequalities
- Speed limit enforcement (if average speed exceeds limit, instantaneous speed must have exceeded it)

**Example:**
A car travels 100 miles in 2 hours. The Mean Value Theorem guarantees that at some point during the trip, the speedometer read exactly 50 mph.

### 8.3 Fundamental Theorem of Calculus

**Part 1 (Derivative of an Integral):**
If f is continuous on [a, b] and F(x) = ∫ₐˣ f(t) dt, then:
```
F'(x) = f(x)
```

**Part 2 (Evaluation of Definite Integrals):**
If f is continuous on [a, b] and F is any antiderivative of f, then:
```
∫ₐᵇ f(x) dx = F(b) - F(a)
```

**Significance:**
The Fundamental Theorem of Calculus establishes the relationship between differentiation and integration, showing they are inverse operations.

**Proof Sketch (Part 2):**
From Part 1, we know G(x) = ∫ₐˣ f(t) dt is an antiderivative of f.
Any other antiderivative F differs from G by a constant: F(x) = G(x) + k
Therefore:
```
F(b) - F(a) = [G(b) + k] - [G(a) + k] = G(b) - G(a)
            = ∫ₐᵇ f(t) dt - ∫ₐᵃ f(t) dt = ∫ₐᵇ f(t) dt
```

### 8.4 Extreme Value Theorem

**Statement:**
If f is continuous on a closed interval [a, b], then f attains both an absolute maximum value M and an absolute minimum value m at some numbers in [a, b].

### 8.5 Intermediate Value Theorem

**Statement:**
Suppose f is continuous on [a, b] and N is any number between f(a) and f(b). Then there exists a number c in (a, b) such that f(c) = N.

**Application:**
Used to prove the existence of roots of equations.

---

## 9. Practice Problems

### 9.1 Limits

**Problem 1:**
Evaluate lim(x→2) (x² - 4)/(x - 2)

**Solution:**
```
= lim(x→2) (x + 2)(x - 2)/(x - 2)
= lim(x→2) (x + 2)
= 4
```

**Problem 2:**
Evaluate lim(x→∞) (3x² + 5x - 1)/(2x² - x + 3)

**Solution:**
Divide numerator and denominator by x²:
```
= lim(x→∞) (3 + 5/x - 1/x²)/(2 - 1/x + 3/x²)
= 3/2
```

### 9.2 Derivatives Using the Definition

**Problem 3:**
Find f'(x) for f(x) = x² using the limit definition.

**Solution:**
```
f'(x) = lim(h→0) [(x+h)² - x²]/h
      = lim(h→0) [x² + 2xh + h² - x²]/h
      = lim(h→0) [2xh + h²]/h
      = lim(h→0) (2x + h)
      = 2x
```

### 9.3 Differentiation Rules

**Problem 4:**
Find dy/dx for y = (3x² + 5)(x³ - 2x)

**Solution:**
Using the product rule:
```
dy/dx = (6x)(x³ - 2x) + (3x² + 5)(3x² - 2)
      = 6x⁴ - 12x² + 9x⁴ - 6x² + 15x² - 10
      = 15x⁴ - 3x² - 10
```

**Problem 5:**
Find dy/dx for y = sin(3x²)

**Solution:**
Using the chain rule:
```
dy/dx = cos(3x²) · 6x = 6x cos(3x²)
```

**Problem 6:**
Find dy/dx for y = e^(x²) ln(x)

**Solution:**
Using the product rule:
```
dy/dx = 2xe^(x²) ln(x) + e^(x²) · 1/x
      = e^(x²)[2x ln(x) + 1/x]
```

### 9.4 Implicit Differentiation

**Problem 7:**
Find dy/dx for x³ + y³ = 6xy

**Solution:**
Differentiate both sides:
```
3x² + 3y²(dy/dx) = 6y + 6x(dy/dx)
3y²(dy/dx) - 6x(dy/dx) = 6y - 3x²
dy/dx = (6y - 3x²)/(3y² - 6x)
      = (2y - x²)/(y² - 2x)
```

### 9.5 Related Rates

**Problem 8:**
A spherical balloon is being inflated. If the radius increases at 2 cm/s, how fast is the volume increasing when r = 5 cm?

**Solution:**
V = (4/3)πr³

Differentiate with respect to time:
```
dV/dt = 4πr²(dr/dt)
```

When r = 5 and dr/dt = 2:
```
dV/dt = 4π(25)(2) = 200π cm³/s
```

### 9.6 Optimization

**Problem 9:**
A farmer has 100 m of fencing and wants to enclose a rectangular area next to a barn (using the barn as one side). What dimensions maximize the area?

**Solution:**
Let x = width, y = length parallel to barn
Constraint: x + 2y = 100, so x = 100 - 2y
Objective: A = xy = (100 - 2y)y = 100y - 2y²

```
dA/dy = 100 - 4y = 0
y = 25 m
x = 100 - 2(25) = 50 m
```

Maximum area = 1250 m²

### 9.7 Mean Value Theorem

**Problem 10:**
Verify the Mean Value Theorem for f(x) = x³ - 3x + 2 on [0, 2].

**Solution:**
f is polynomial, so continuous on [0, 2] and differentiable on (0, 2).

```
f(0) = 2, f(2) = 8 - 6 + 2 = 4
[f(2) - f(0)]/(2 - 0) = 2/2 = 1
```

Find c where f'(c) = 1:
```
f'(x) = 3x² - 3
3c² - 3 = 1
c² = 4/3
c = 2/√3 ≈ 1.155
```

Since 0 < c < 2, the MVT is verified.

### 9.8 L'Hôpital's Rule

**Problem 11:**
Evaluate lim(x→0) (1 - cos(x))/x²

**Solution:**
This is 0/0 form. Apply L'Hôpital's Rule:
```
= lim(x→0) sin(x)/(2x)
```
Still 0/0, apply again:
```
= lim(x→0) cos(x)/2 = 1/2
```

### 9.9 Taylor Polynomials

**Problem 12:**
Find the second-degree Taylor polynomial for f(x) = eˣ centered at a = 0.

**Solution:**
```
f(x) = eˣ, f(0) = 1
f'(x) = eˣ, f'(0) = 1
f''(x) = eˣ, f''(0) = 1

P₂(x) = 1 + x + x²/2
```

### 9.10 Additional Practice Problems

**Problem 13:**
Find all critical points of f(x) = x⁴ - 4x³ + 10.

**Answer:**
```
f'(x) = 4x³ - 12x² = 4x²(x - 3)
Critical points: x = 0, x = 3
```

**Problem 14:**
A rectangle is inscribed in a semicircle of radius 5. Find the maximum area of the rectangle.

**Hint:** Use the relationship between x and y from the circle equation, then maximize A = 2xy.

**Answer:** Maximum area = 25 m²

**Problem 15:**
For what values of a and b is the function f(x) = {ax² + b, x < 1; x³, x ≥ 1} both continuous and differentiable at x = 1?

**Solution:**
For continuity: a + b = 1
For differentiability: 2a = 3
Therefore: a = 3/2, b = -1/2

---

## 10. References

### 10.1 Textbooks and Primary Sources

1. **Stewart, J.** (2020). *Calculus: Early Transcendentals* (9th ed.). Cengage Learning.

2. **Thomas, G. B., Weir, M. D., Hass, J., & Heil, C.** (2018). *Thomas' Calculus* (14th ed.). Pearson.

3. **Feldman, J.** (2024). *Differential Calculus Notes for Mathematics 100 and 180*. University of British Columbia. Available at: https://personal.math.ubc.ca/~feldman/m101/clp/clp_notes_100.pdf

4. **Dawkins, P.** (2024). *Paul's Online Math Notes - Calculus I*. Lamar University. Available at: https://tutorial.math.lamar.edu/classes/calci/

5. **OpenStax** (2016). *Calculus Volume 1*. Rice University. Available at: https://openstax.org/books/calculus-volume-1/

### 10.2 Academic Resources

6. **AMSI** (Australian Mathematical Sciences Institute). *Introduction to Differential Calculus*. Available at: https://amsi.org.au/ESA_Senior_Years/PDF/IntroDiffCall3b.pdf

7. **Mathematics LibreTexts** (2025). *Calculus Course Materials*. Available at: https://math.libretexts.org/

8. **University of Sydney** (2024). *Calculus Study Guide*. Mathematics Learning Centre.

### 10.3 Online Learning Platforms

9. **Khan Academy**. *Differential Calculus Course*. Available at: https://www.khanacademy.org/math/differential-calculus

10. **MIT OpenCourseWare**. *Single Variable Calculus*. Massachusetts Institute of Technology.

11. **3Blue1Brown** (Grant Sanderson). *Essence of Calculus* video series. YouTube.

### 10.4 Historical References

12. **Boyer, C. B., & Merzbach, U. C.** (2011). *A History of Mathematics* (3rd ed.). Wiley.

13. **Katz, V. J.** (2009). *A History of Mathematics: An Introduction* (3rd ed.). Addison-Wesley.

### 10.5 Problem Collections

14. **Strang, G.** (2016). *Calculus* (3rd ed.). Wellesley-Cambridge Press.

15. **Spivak, M.** (2008). *Calculus* (4th ed.). Publish or Perish.

### 10.6 Applied Mathematics

16. **Zill, D. G., & Wright, W. S.** (2021). *Calculus: Early Transcendentals* (5th ed.). Jones & Bartlett Learning.

17. **Varberg, D., Purcell, E. J., & Rigdon, S. E.** (2013). *Calculus* (9th ed.). Pearson.

### 10.7 Web Resources

18. **Wolfram MathWorld**. *Calculus and Analysis*. Available at: https://mathworld.wolfram.com/topics/Calculus.html

19. **Paul's Online Notes - Practice Problems**. Available at: https://tutorial.math.lamar.edu/Problems/CalcI/CalcI.aspx

20. **The Math Page**. *Differential Calculus Topics*. Available at: http://www.themathpage.com/

### 10.8 Research Articles and Papers

21. **Gregory, J.** (1668). *Geometriae Pars Universalis*. [Historical document on early calculus]

22. **Newton, I.** (1687). *Philosophiæ Naturalis Principia Mathematica*. [Foundational work in calculus and physics]

23. **Leibniz, G. W.** (1684). *Nova Methodus pro Maximis et Minimis*. [Introduction of differential notation]

---

## Appendix A: Common Mistakes to Avoid

1. **Forgetting the chain rule** when differentiating composite functions
2. **Confusing** f(x + h) with f(x) + f(h)
3. **Not checking** if conditions for theorems are met (continuity, differentiability)
4. **Canceling** terms incorrectly in limit problems
5. **Forgetting** to test endpoints when finding absolute extrema
6. **Misapplying** L'Hôpital's Rule to forms other than 0/0 or ∞/∞
7. **Arithmetic errors** when applying the product or quotient rule
8. **Not simplifying** after differentiation

## Appendix B: Differentiation Formula Summary

**Power Rule:** d/dx[xⁿ] = nxⁿ⁻¹

**Product Rule:** d/dx[uv] = u'v + uv'

**Quotient Rule:** d/dx[u/v] = (u'v - uv')/v²

**Chain Rule:** d/dx[f(g(x))] = f'(g(x))g'(x)

**Exponential:** d/dx[eˣ] = eˣ

**Logarithmic:** d/dx[ln x] = 1/x

**Trigonometric:**
- d/dx[sin x] = cos x
- d/dx[cos x] = -sin x
- d/dx[tan x] = sec² x

## Appendix C: Study Tips

1. **Practice regularly** - Calculus requires consistent practice
2. **Understand concepts** before memorizing formulas
3. **Draw diagrams** for geometric problems
4. **Check your work** by substituting back or using alternative methods
5. **Work through proofs** to understand why theorems are true
6. **Form study groups** to discuss difficult concepts
7. **Use multiple resources** - different explanations can provide clarity
8. **Start assignments early** to allow time for questions
9. **Keep a formula sheet** but understand where formulas come from
10. **Review previous material** regularly to maintain understanding

---

**End of Notes**

*These notes are intended as a comprehensive study guide for undergraduate differential calculus. Students should supplement these notes with their course textbook, lectures, and additional practice problems. For questions or corrections, please consult with your instructor.*
