---
subject: MATH-101
topic: Functions, Domain & Range
date: 2026-03-08
tags: [math, calculus, functions, domain, range, MATH-101]
---

# 1. Functions, Domain & Range

## 1.1 What is a Function?

A **function** is a rule that assigns to each element $x$ in a set $A$ **exactly one** element $y$ in a set $B$. In formal terms:

> If a variable $y$ is so related to a variable $x$ that whenever a numerical value is assigned to $x$, there is a **unique value** of $y$ determined, then $y$ is said to be a **function** of the independent variable $x$.

This relationship is written as:

$$y = f(x)$$

where:
- $x$ → **independent variable** (input) — Domain lives here
- $y$ → **dependent variable** (output) — Range lives here

### Mapping Notation

$$f : A \to B$$

This reads: "$f$ maps set $A$ to set $B$."

---

## 1.2 Types of Functions

| Type | Definition | Example |
|:-----|:-----------|:--------|
| **One-to-One (Injective)** | Each input has a unique output; no two inputs share the same output | $f(x) = 2x + 1$ |
| **Onto (Surjective)** | Every element in the codomain is mapped to by at least one input | $f : \mathbb{R} \to \mathbb{R},\ f(x) = x^3$ |
| **Bijective** | Both one-to-one and onto | $f(x) = x$ |
| **Even Function** | $f(-x) = f(x)$ | $f(x) = x^2$ |
| **Odd Function** | $f(-x) = -f(x)$ | $f(x) = x^3$ |
| **Piecewise** | Defined by different rules on different intervals | Absolute value |
| **Composite** | $f(g(x))$, a function within a function | $f(g(x)) = \sin(x^2)$ |

---

## 1.3 Domain

> **Definition:** The **domain** of a function is the complete set of all possible input values (values of $x$) for which the function is defined.

### Rules for Finding the Domain

1. **Denominator ≠ 0** — Division by zero is undefined
2. **Radicand ≥ 0** — Even roots of negative numbers are not real
3. **Logarithm argument > 0** — $\ln(x)$ requires $x > 0$
4. **No restrictions** for polynomials, exponentials: domain is $\mathbb{R}$

---

## 1.4 Range

> **Definition:** The **range** of a function is the complete set of all possible output values ($y$-values) that the function can produce.

### Strategy to Find Range

Set $y = f(x)$, then **solve for $x$ in terms of $y$**, and find which $y$-values make $x$ valid/real.

---

## 1.5 Worked Examples

### Example 1

**Find the domain and range of** $f(x) = \dfrac{\sqrt{x+2}}{x^2 - 9}$

**Solution:**

**Domain:** 
The denominator cannot be zero.
$$2x + 1 \neq 0 \Rightarrow x \neq -\frac{1}{2}$$
$$D_f = \mathbb{R} - \left\{-\frac{1}{2}\right\}$$

**Range:** 
Let $y = \frac{x-3}{2x+1}$. Solving for $x$:
$$y(2x + 1) = x - 3 \implies 2xy - x = -3 - y \implies x(2y-1) = -(3+y)$$
$$x = \frac{-(3+y)}{2y - 1}$$
This is undefined when $2y - 1 = 0 \Rightarrow y = \frac{1}{2}$.
$$\boxed{R_f = \mathbb{R} - \left\{\frac{1}{2}\right\}}$$

---

### Example 2

**Find the domain and range of** $f(x) = \dfrac{x - 3}{2x + 1}$

**Solution:**

**Domain:** $2x + 1 \neq 0 \Rightarrow x \neq -\dfrac{1}{2}$

$$D_f = \mathbb{R} - \left\{-\frac{1}{2}\right\}$$

**Range:** Let $y = \dfrac{x-3}{2x+1}$

Solving for $x$:

$$y(2x + 1) = x - 3 \implies 2xy - x = -3 - y \implies x(2y-1) = -(3+y)$$

$$x = \frac{-(3+y)}{2y - 1}$$

This is undefined when $2y - 1 = 0 \Rightarrow y = \dfrac{1}{2}$

$$\boxed{R_f = \mathbb{R} - \left\{\frac{1}{2}\right\}}$$

---

### Example 3

**Find the domain and range of the piecewise function:**

$$f(x) = \begin{cases} -x & \text{if } x \leq 0 \\ x & \text{if } 0 < x \leq 1 \\ 2 - x & \text{if } x > 1 \end{cases}$$

**Solution:**

**Domain:** All three pieces together cover $(-\infty, 0] \cup (0,1] \cup (1,\infty) = \mathbb{R}$

$$D_f = \mathbb{R}$$

**Range:**
- Piece 1: $x \leq 0 \Rightarrow -x \geq 0$, so outputs $[0, \infty)$
- Piece 2: $0 < x \leq 1 \Rightarrow$ outputs $(0, 1]$
- Piece 3: $x > 1 \Rightarrow 2 - x < 1$, so outputs $(-\infty, 1)$

$$R_f = \mathbb{R}$$

---

### Example 4

**Find the domain and range of** $f(x) = \ln\!\left(\dfrac{4+x}{4-x}\right)$

**Solution:**

**Domain:** We need $\dfrac{4+x}{4-x} > 0$

This holds when **both numerator and denominator are positive**, or **both are negative**:
- Case 1: $4 + x > 0$ and $4 - x > 0 \Rightarrow -4 < x < 4$
- Case 2: $4 + x < 0$ and $4 - x < 0 \Rightarrow x < -4$ and $x > 4$ — **impossible**

$$\boxed{D_f = (-4, 4)}$$

**Range:** Let $y = \ln\!\left(\dfrac{4+x}{4-x}\right) \Rightarrow e^y = \dfrac{4+x}{4-x}$

Solving: $x = \dfrac{4(e^y - 1)}{e^y + 1}$, which is valid for all $y \in \mathbb{R}$

$$\boxed{R_f = \mathbb{R}}$$

---

## 1.6 Practice Problems

1. Find domain and range of $f(x) = \dfrac{2}{3-x}$
2. Find domain and range of $f(x) = \sqrt{4 - x^2}$
3. Find domain and range of $f(x) = x \sin\!\dfrac{1}{x}$
4. Find domain and range of:
$$f(x) = \begin{cases} 1-x & -1 \leq x \leq 1 \\ 0 & 1 \leq x \leq 2 \\ x^2 - 4 & x > 2 \end{cases}$$

---

## 1.7 References & Further Reading

- 📘 **Stewart, J.** — *Calculus: Early Transcendentals*, 8th Ed., Chapter 1
- 📘 **Thomas, G.B.** — *Thomas' Calculus*, 14th Ed., Section 1.1
- 🌐 [Paul's Online Math Notes — Functions](https://tutorial.math.lamar.edu/Classes/CalcI/ReviewFcns.aspx)
- 🌐 [Khan Academy — Domain and Range](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/x2f8bb11595b61c86:domain-and-range/a/intro-to-domain-and-range)
- 🌐 [MIT OpenCourseWare — Single Variable Calculus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/)
- 🌐 [Wolfram MathWorld — Function](https://mathworld.wolfram.com/Function.html)
