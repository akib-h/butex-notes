---
subject: MATH-101
topic: Differentiability and Derivatives
date: 2026-03-08
tags: [math, calculus, differentiation, derivatives, MATH-101]
---

# 3. Differentiability and Derivatives

## 3.1 What is Differentiation?

**Differentiation** is the process of finding the **rate of change** of a function with respect to its variable. Geometrically, the derivative at a point gives the **slope of the tangent line** to the curve at that point.

> A function $f(x)$ is **differentiable at $x = a$** if $f'(a)$ exists, i.e., if the Left-Hand Derivative (LHD) equals the Right-Hand Derivative (RHD).

---

## 3.2 Definition of the Derivative

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

This is also written as:

$$\frac{dy}{dx} = y' = Dy = f'(x) = y_1$$

**One-sided derivatives:**

$$\text{LHD} = f'(x^-) = \lim_{h \to 0} \frac{f(x-h) - f(x)}{-h}$$

$$\text{RHD} = f'(x^+) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

> **Differentiability implies Continuity**, but continuity does **not** imply differentiability.
> 
> *Example:* $f(x) = |x|$ is continuous at $x = 0$ but not differentiable there.

---

## 3.3 Standard Differentiation Formulas

### Algebraic

$$\frac{d}{dx}[c] = 0 \qquad \frac{d}{dx}[x^n] = nx^{n-1} \qquad \frac{d}{dx}[\sqrt{x}] = \frac{1}{2\sqrt{x}}$$

### Trigonometric

$$\frac{d}{dx}[\sin x] = \cos x \qquad \frac{d}{dx}[\cos x] = -\sin x$$

$$\frac{d}{dx}[\tan x] = \sec^2 x \qquad \frac{d}{dx}[\cot x] = -\csc^2 x$$

$$\frac{d}{dx}[\sec x] = \sec x \tan x \qquad \frac{d}{dx}[\csc x] = -\csc x \cot x$$

### Inverse Trigonometric

$$\frac{d}{dx}[\sin^{-1} x] = \frac{1}{\sqrt{1-x^2}} \qquad \frac{d}{dx}[\cos^{-1} x] = \frac{-1}{\sqrt{1-x^2}}$$

$$\frac{d}{dx}[\tan^{-1} x] = \frac{1}{1+x^2} \qquad \frac{d}{dx}[\cot^{-1} x] = \frac{-1}{1+x^2}$$

### Exponential & Logarithmic

$$\frac{d}{dx}[e^x] = e^x \qquad \frac{d}{dx}[a^x] = a^x \ln a$$

$$\frac{d}{dx}[\ln x] = \frac{1}{x} \qquad \frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}$$

---

## 3.4 Rules of Differentiation

### Sum / Difference Rule

$$\frac{d}{dx}[f \pm g] = f' \pm g'$$

### Product Rule

$$\frac{d}{dx}[fg] = f'g + fg'$$

### Quotient Rule

$$\frac{d}{dx}\!\left[\frac{f}{g}\right] = \frac{f'g - fg'}{g^2}, \quad g \neq 0$$

### Chain Rule

If $y = f(u)$ and $u = g(x)$:

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = f'(g(x)) \cdot g'(x)$$

### Logarithmic Differentiation

Used when the function is of the form $[f(x)]^{g(x)}$:

$$\text{Take } \ln y = g(x)\ln f(x), \text{ then differentiate both sides.}$$

---

## 3.5 Successive (Higher-Order) Differentiation

If $y = f(x)$, the derivatives are denoted:

| Order | Notation |
|:------|:---------|
| 1st | $y_1,\ y',\ f'(x),\ \dfrac{dy}{dx},\ Dy$ |
| 2nd | $y_2,\ y'',\ f''(x),\ \dfrac{d^2y}{dx^2},\ D^2y$ |
| $n$th | $y_n,\ f^{(n)}(x),\ \dfrac{d^n y}{dx^n},\ D^n y$ |

### $n$th Derivative of Common Functions

$$\frac{d^n}{dx^n}[x^n] = n! \qquad \frac{d^n}{dx^n}[e^{ax}] = a^n e^{ax}$$

$$\frac{d^n}{dx^n}[\sin(ax+b)] = a^n \sin\!\left(ax + b + \frac{n\pi}{2}\right)$$

$$\frac{d^n}{dx^n}[\cos(ax+b)] = a^n \cos\!\left(ax + b + \frac{n\pi}{2}\right)$$

**Proof that $\dfrac{d^n}{dx^n}[x^n] = n!$:**

$$y = x^n$$
$$y_1 = nx^{n-1}, \quad y_2 = n(n-1)x^{n-2}, \quad y_3 = n(n-1)(n-2)x^{n-3}$$
$$\vdots$$
$$y_n = n(n-1)(n-2)\cdots 3 \cdot 2 \cdot 1 = n!$$

---

## 3.6 Worked Examples

### Example 1 — Using Substitution

**Find $\dfrac{dy}{dx}$ if** $y = \tan^{-1}\!\left(\dfrac{\sqrt{1+x^2}-1}{x}\right)$

**Solution:** Let $x = \tan\theta \Rightarrow \theta = \tan^{-1}x$

$$y = \tan^{-1}\!\left(\frac{\sec\theta - 1}{\tan\theta}\right) = \tan^{-1}\!\left(\frac{1 - \cos\theta}{\sin\theta}\right)$$

Using half-angle identities: $\dfrac{1-\cos\theta}{\sin\theta} = \tan\dfrac{\theta}{2}$

$$y = \tan^{-1}\!\left(\tan\frac{\theta}{2}\right) = \frac{\theta}{2} = \frac{1}{2}\tan^{-1}x$$

$$\boxed{\frac{dy}{dx} = \frac{1}{2(1+x^2)}}$$

---

### Example 2 — Logarithmic Differentiation

**Find $\dfrac{dy}{dx}$ if** $y = \dfrac{e^{x^2}\tan^{-1}x}{\sqrt{1+x^2}}$

**Solution:** Take $\ln$ of both sides:

$$\ln y = x^2 + \ln(\tan^{-1}x) - \frac{1}{2}\ln(1+x^2)$$

Differentiating:

$$\frac{1}{y}\frac{dy}{dx} = 2x + \frac{1}{(1+x^2)\tan^{-1}x} - \frac{x}{1+x^2}$$

$$\boxed{\frac{dy}{dx} = \frac{e^{x^2}\tan^{-1}x}{\sqrt{1+x^2}}\left[2x + \frac{1}{(1+x^2)\tan^{-1}x} - \frac{x}{1+x^2}\right]}$$

---

### Example 3 — Differentiating $x^{\sin^{-1}x}$ w.r.t. $\sin^{-1}x$

Let $y = x^{\sin^{-1}x}$ and $z = \sin^{-1}x$. Find $\dfrac{dy}{dz}$.

$$\ln y = \sin^{-1}x \cdot \ln x$$

$$\frac{1}{y}\frac{dy}{dx} = \frac{\ln x}{\sqrt{1-x^2}} + \frac{\sin^{-1}x}{x}$$

$$\frac{dy}{dx} = x^{\sin^{-1}x}\left[\frac{\ln x}{\sqrt{1-x^2}} + \frac{\sin^{-1}x}{x}\right]$$

$$\frac{dz}{dx} = \frac{1}{\sqrt{1-x^2}}$$

$$\frac{dy}{dz} = \frac{dy/dx}{dz/dx} = x^{\sin^{-1}x}\left[\ln x + \frac{\sin^{-1}x \cdot \sqrt{1-x^2}}{x}\right]$$

---

### Example 4 — Finding the $n$th Derivative

**Find the $n$th derivative of $y = \sin 3x$.**

$$y_1 = 3\cos 3x = 3\sin\!\left(3x + \frac{\pi}{2}\right)$$

$$y_2 = -9\sin 3x = 3^2\sin\!\left(3x + \frac{2\pi}{2}\right)$$

$$y_n = 3^n \sin\!\left(3x + \frac{n\pi}{2}\right)$$

---

## 3.7 Practice Problems

Find $\dfrac{dy}{dx}$ for:

1. $y = (\sin x)^{(\sin x)^{\sin x \cdots \infty}}$
2. $y = \dfrac{x\cos 2x}{e^{3x}\sqrt{1+x^2}}$
3. $y = \ln\!\left[e^x\!\left(\dfrac{x-1}{x+1}\right)^{3/2}\right]$
4. $y = \tan[\ln(\sin e^{x^2})]$
5. $y = \tan^{-1}\!\dfrac{\cos x}{1 + \sin x}$
6. Differentiate $\tan^{-1}\!\dfrac{2x}{1-x^2}$ w.r.t. $\sin^{-1}\!\dfrac{2x}{1+x^2}$

---

## 3.8 References & Further Reading

- 📘 **Stewart, J.** — *Calculus*, Ch. 3 (Differentiation Rules)
- 📘 **Piskunov, N.** — *Differential and Integral Calculus*, Vol. 1
- 🌐 [Paul's Online Notes — Derivatives](https://tutorial.math.lamar.edu/Classes/CalcI/DerivativeIntro.aspx)
- 🌐 [Khan Academy — Derivatives](https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new)
- 🌐 [MIT OCW — Differentiation](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/)
- 🌐 [Wolfram MathWorld — Derivative](https://mathworld.wolfram.com/Derivative.html)
- 🌐 [Brilliant.org — Chain Rule](https://brilliant.org/wiki/chain-rule/)
