# 📐 Mathematics-1 (Ms-101) — Class Test Solutions

> **Institution:** Gopalganj Textile Engineering College & Sheikh Rehana Textile Engineering College  
> **Program:** B.Sc in Textile Engineering | Level-1, Term-1  
> **Subject:** Mathematics-1 (Ms-101) | 2nd Class Test  
> **Full Marks:** 10 | **Time:** 30 minutes

---

## 📋 Table of Contents

- [Paper 1 — Gopalganj Textile Engineering College](#paper-1)
  - [Q1: Continuity and Differentiability at x = 1](#q1-paper1)
  - [Q2: Evaluate the Limit](#q2-paper1)
  - [Q3: Homogeneous Function & Euler's Theorem](#q3-paper1)
- [Paper 2 — Sheikh Rehana Textile Engineering College](#paper-2)
  - [Q1: Maximum and Minimum Value (Lagrange / Substitution)](#q1-paper2)
  - [Q2: Continuity and Differentiability at x = 0](#q2-paper2)
  - [Q3a: Differentiation of $x^{\sin^{-1}x}$ w.r.t. $\sin^{-1}x$](#q3a-paper2)
  - [Q3b: Differentiation of a composite function](#q3b-paper2)
- [🧪 Practice Questions](#practice-questions)
- [📚 References](#references)

---

<a name="paper-1"></a>
## 📄 Paper 1 — Gopalganj Textile Engineering College

---

<a name="q1-paper1"></a>
### Q1 (4 marks) — Continuity & Differentiability of f(x) at x = 1

**Question:** Define Continuity. Test the continuity and differentiability of $f(x)$ at $x = 1$ where:

$$f(x) = \begin{cases} x & \text{for } 0 < x < 1 \\ 2 - x & \text{for } 1 \leq x \leq 2 \\ x - \tfrac{1}{2}x^2 & \text{for } x > 2 \end{cases}$$

---

#### 📖 Definition of Continuity

A function $f(x)$ is said to be **continuous at a point** $x = a$ if all three conditions hold:

1. $f(a)$ is defined
2. $\displaystyle\lim_{x \to a} f(x)$ exists (i.e., Left-Hand Limit = Right-Hand Limit)
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

---

#### ✅ Test for Continuity at x = 1

**Left-Hand Limit (LHL):**
$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} x = 1$$

**Right-Hand Limit (RHL):**
$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (2 - x) = 2 - 1 = 1$$

**Value of f(1):** Since $1 \leq 1 \leq 2$, we use $f(x) = 2 - x$:
$$f(1) = 2 - 1 = 1$$

Since $\text{LHL} = \text{RHL} = f(1) = 1$,

> ✅ **$f(x)$ is continuous at $x = 1$.**

---

#### ✅ Test for Differentiability at x = 1

**Left-Hand Derivative (LHD):**
$$\text{LHD} = \lim_{h \to 0^-} \frac{f(1+h) - f(1)}{h}$$

For $h < 0$: $1 + h < 1$, so $f(1+h) = 1 + h$

$$\text{LHD} = \lim_{h \to 0^-} \frac{(1+h) - 1}{h} = \lim_{h \to 0^-} \frac{h}{h} = \boxed{1}$$

**Right-Hand Derivative (RHD):**
$$\text{RHD} = \lim_{h \to 0^+} \frac{f(1+h) - f(1)}{h}$$

For $h > 0$: $1 + h > 1$, so $f(1+h) = 2 - (1+h) = 1 - h$

$$\text{RHD} = \lim_{h \to 0^+} \frac{(1-h) - 1}{h} = \lim_{h \to 0^+} \frac{-h}{h} = \boxed{-1}$$

Since $\text{LHD} \neq \text{RHD}$ (i.e., $1 \neq -1$),

> ❌ **$f(x)$ is NOT differentiable at $x = 1$.**

**Summary:** $f(x)$ is **continuous but not differentiable** at $x = 1$. (The graph has a "corner" at this point.)

---

<a name="q2-paper1"></a>
### Q2 (3 marks) — Evaluate the Limit

**Question:** Evaluate $\displaystyle\lim_{x \to 1} (1 - x^2)^{\dfrac{1}{\log(1-x)}}$

---

#### 🔍 Solution

Let:
$$L = \lim_{x \to 1} (1 - x^2)^{\frac{1}{\log(1-x)}}$$

Taking the natural logarithm of both sides:
$$\ln L = \lim_{x \to 1} \frac{\ln(1 - x^2)}{\log(1 - x)}$$

Factor: $1 - x^2 = (1-x)(1+x)$, so $\ln(1-x^2) = \ln(1-x) + \ln(1+x)$

$$\ln L = \lim_{x \to 1} \frac{\ln(1-x) + \ln(1+x)}{\ln(1-x)}$$

$$\ln L = \lim_{x \to 1} \left[1 + \frac{\ln(1+x)}{\ln(1-x)}\right]$$

As $x \to 1$:
- $\ln(1+x) \to \ln 2$ (a finite number)
- $\ln(1-x) \to -\infty$

Therefore:
$$\frac{\ln(1+x)}{\ln(1-x)} \to \frac{\ln 2}{-\infty} = 0$$

$$\ln L = 1 + 0 = 1$$

$$\boxed{L = e^1 = e}$$

---

<a name="q3-paper1"></a>
### Q3 (3 marks) — Homogeneous Function & Euler's Theorem

**Question:** Define Homogeneous Function. If $u = \cos^{-1}\!\left\{\dfrac{x+y}{\sqrt{x}+\sqrt{y}}\right\}$, show that:
$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} + \frac{1}{2}\cot u = 0$$

---

#### 📖 Definition of Homogeneous Function

A function $f(x, y)$ is said to be a **homogeneous function of degree $n$** if:
$$f(tx, ty) = t^n \cdot f(x, y) \quad \text{for all } t > 0$$

---

#### 🔍 Solution

Let $F(x, y) = \dfrac{x+y}{\sqrt{x}+\sqrt{y}}$

**Check homogeneity:**
$$F(tx, ty) = \frac{tx + ty}{\sqrt{tx}+\sqrt{ty}} = \frac{t(x+y)}{\sqrt{t}(\sqrt{x}+\sqrt{y})} = t^{1/2} \cdot \frac{x+y}{\sqrt{x}+\sqrt{y}} = t^{1/2} F(x,y)$$

So $F(x,y)$ is **homogeneous of degree $n = \tfrac{1}{2}$**.

Now, $u = \cos^{-1}(F)$, which means $\cos u = F(x, y)$ — a homogeneous function of degree $\tfrac{1}{2}$.

**Applying Euler's Theorem** to $G = \cos u$:
$$x\frac{\partial G}{\partial x} + y\frac{\partial G}{\partial y} = n \cdot G = \frac{1}{2}\cos u$$

Compute partial derivatives of $G = \cos u$:
$$\frac{\partial G}{\partial x} = -\sin u \cdot \frac{\partial u}{\partial x}, \qquad \frac{\partial G}{\partial y} = -\sin u \cdot \frac{\partial u}{\partial y}$$

Substituting:
$$x\left(-\sin u \cdot \frac{\partial u}{\partial x}\right) + y\left(-\sin u \cdot \frac{\partial u}{\partial y}\right) = \frac{1}{2}\cos u$$

$$-\sin u \left(x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y}\right) = \frac{1}{2}\cos u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = -\frac{\cos u}{2\sin u} = -\frac{1}{2}\cot u$$

$$\boxed{x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} + \frac{1}{2}\cot u = 0} \quad \blacksquare$$

---

<a name="paper-2"></a>
## 📄 Paper 2 — Sheikh Rehana Textile Engineering College

---

<a name="q1-paper2"></a>
### Q1 (3 marks) — Maximum and Minimum Value

**Question:** Find the maximum and minimum value of $u$ where:
$$u = \frac{4}{x} + \frac{36}{y}, \quad x + y = 2$$

---

#### 🔍 Solution (Substitution Method)

From the constraint: $y = 2 - x$

Substitute:
$$u(x) = \frac{4}{x} + \frac{36}{2-x}$$

**First derivative:**
$$\frac{du}{dx} = -\frac{4}{x^2} + \frac{36}{(2-x)^2}$$

**Set $\dfrac{du}{dx} = 0$:**
$$\frac{36}{(2-x)^2} = \frac{4}{x^2}$$
$$\frac{9}{(2-x)^2} = \frac{1}{x^2}$$
$$\frac{3}{2-x} = \frac{1}{x} \quad \text{(taking positive square root)}$$
$$3x = 2 - x \implies 4x = 2 \implies x = \frac{1}{2}, \quad y = \frac{3}{2}$$

**Second derivative test:**
$$\frac{d^2u}{dx^2} = \frac{8}{x^3} + \frac{72}{(2-x)^3}$$

At $x = \tfrac{1}{2}$: $\dfrac{d^2u}{dx^2} = \dfrac{8}{(1/2)^3} + \dfrac{72}{(3/2)^3} = 64 + \dfrac{72}{27/8} = 64 + \dfrac{64}{3} > 0$

So this is a **minimum**.

**Minimum value:**
$$u_{\min} = \frac{4}{1/2} + \frac{36}{3/2} = 8 + 24 = \boxed{32}$$

> **Note:** As $x \to 0^+$ or $x \to 2^-$, $u \to \infty$. Hence, there is **no finite maximum** — the function has only a minimum of $u = 32$ at $x = \tfrac{1}{2},\ y = \tfrac{3}{2}$.

---

<a name="q2-paper2"></a>
### Q2 (3 marks) — Continuity and Differentiability at x = 0

**Question:** Test continuity and differentiability of $f(x)$ at $x = 0$ where:
$$f(x) = \begin{cases} 1 + \sin x & \text{for } 0 \leq x < \dfrac{\pi}{2} \\ 1 & \text{for } x < 0 \end{cases}$$

---

#### ✅ Test for Continuity at x = 0

**Left-Hand Limit (LHL):**
$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} 1 = 1$$

**Right-Hand Limit (RHL):**
$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (1 + \sin x) = 1 + \sin 0 = 1$$

**Value at x = 0:**
$$f(0) = 1 + \sin 0 = 1$$

Since $\text{LHL} = \text{RHL} = f(0) = 1$,

> ✅ **$f(x)$ is continuous at $x = 0$.**

---

#### ✅ Test for Differentiability at x = 0

**Left-Hand Derivative (LHD):**
$$\text{LHD} = \lim_{h \to 0^-} \frac{f(0+h) - f(0)}{h} = \lim_{h \to 0^-} \frac{1 - 1}{h} = 0 \implies \boxed{0}$$

**Right-Hand Derivative (RHD):**
$$\text{RHD} = \lim_{h \to 0^+} \frac{f(0+h) - f(0)}{h} = \lim_{h \to 0^+} \frac{(1 + \sin h) - 1}{h} = \lim_{h \to 0^+} \frac{\sin h}{h} = 1 \implies \boxed{1}$$

Since $\text{LHD} \neq \text{RHD}$ (i.e., $0 \neq 1$),

> ❌ **$f(x)$ is NOT differentiable at $x = 0$.**

**Summary:** Continuous but **not differentiable** at $x = 0$.

---

<a name="q3a-paper2"></a>
### Q3a (2 marks) — Differentiate $x^{\sin^{-1}x}$ w.r.t. $\sin^{-1}x$

---

#### 🔍 Solution

Let $y = x^{\sin^{-1}x}$ and $t = \sin^{-1}x$, so $x = \sin t$.

Then:
$$y = (\sin t)^t$$

Take natural log:
$$\ln y = t \ln(\sin t)$$

Differentiate w.r.t. $t$:
$$\frac{1}{y}\frac{dy}{dt} = \ln(\sin t) + t \cdot \frac{\cos t}{\sin t} = \ln(\sin t) + t\cot t$$

Therefore:
$$\frac{dy}{dt} = y\left[\ln(\sin t) + t\cot t\right] = x^{\sin^{-1}x}\left[\ln x + \sin^{-1}x \cdot \cot(\sin^{-1}x)\right]$$

Now simplify $\cot(\sin^{-1}x)$: if $\sin^{-1}x = t$, then $\sin t = x$, $\cos t = \sqrt{1-x^2}$, so:
$$\cot(\sin^{-1}x) = \frac{\sqrt{1-x^2}}{x}$$

$$\boxed{\frac{dy}{d(\sin^{-1}x)} = x^{\sin^{-1}x}\left[\ln x + \frac{\sqrt{1-x^2}}{x} \cdot \sin^{-1}x\right]}$$

---

<a name="q3b-paper2"></a>
### Q3b (2 marks) — Differentiate $y = \dfrac{e^{x^2}\tan^{-1}x}{\sqrt{1+x^2}}$

---

#### 🔍 Solution (Logarithmic Differentiation)

$$y = \frac{e^{x^2}\tan^{-1}x}{\sqrt{1+x^2}}$$

Take natural log:
$$\ln y = x^2 + \ln(\tan^{-1}x) - \frac{1}{2}\ln(1+x^2)$$

Differentiate w.r.t. $x$:
$$\frac{1}{y}\frac{dy}{dx} = 2x + \frac{1}{(1+x^2)\tan^{-1}x} - \frac{x}{1+x^2}$$

Therefore:
$$\boxed{\frac{dy}{dx} = \frac{e^{x^2}\tan^{-1}x}{\sqrt{1+x^2}}\left[2x + \frac{1}{(1+x^2)\tan^{-1}x} - \frac{x}{1+x^2}\right]}$$

---

<a name="practice-questions"></a>
## 🧪 Practice Questions

> Additional problems to prepare for similar exams.

---

### 🔹 Topic: Continuity & Differentiability

1. Test the continuity and differentiability of $f(x) = |x - 2|$ at $x = 2$.

2. Examine continuity at $x = 0$:
$$f(x) = \begin{cases} \dfrac{\sin 3x}{x} & x \neq 0 \\ 3 & x = 0 \end{cases}$$

3. Is $f(x) = x^{2/3}$ differentiable at $x = 0$?

4. Find values of $a$ and $b$ such that:
$$f(x) = \begin{cases} x + a\sqrt{2}\sin x & 0 \leq x < \pi/4 \\ 2x\cot x + b & \pi/4 \leq x \leq \pi/2 \\ a\cos 2x - b\sin x & \pi/2 < x \leq \pi \end{cases}$$
is continuous on $[0, \pi]$.

---

### 🔹 Topic: Limits

5. Evaluate $\displaystyle\lim_{x \to 0} (1 + \sin x)^{\cot x}$

6. Evaluate $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{\ln(1+x)}$

7. Evaluate $\displaystyle\lim_{x \to 0} \left(\frac{1}{x}\right)^{\tan x}$

8. Find $\displaystyle\lim_{x \to 0} x^x$

---

### 🔹 Topic: Euler's Theorem (Homogeneous Functions)

9. If $u = \sin^{-1}\!\left(\dfrac{x+y}{\sqrt{x}+\sqrt{y}}\right)$, show that $x u_x + y u_y = \tfrac{1}{2}\tan u$.

10. If $u = x^3 y^2 \ln\!\left(\dfrac{y}{x}\right)$, verify Euler's theorem.

11. If $u = f\!\left(\dfrac{y}{x}\right)$, find $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y}$.

12. If $z = x^n f\!\left(\dfrac{y}{x}\right)$, show that $x\dfrac{\partial^2 z}{\partial x^2} + y\dfrac{\partial^2 z}{\partial x \partial y} = (n-1)\dfrac{\partial z}{\partial x}$.

---

### 🔹 Topic: Optimization (Max/Min with Constraint)

13. Find the minimum value of $u = x^2 + y^2$ subject to $x + y = 1$.

14. Maximize $xyz$ subject to $x + y + z = 12$.

15. Find the maximum and minimum value of $u = \dfrac{9}{x} + \dfrac{4}{y}$ where $x + y = 13$.

---

### 🔹 Topic: Logarithmic & Chain Rule Differentiation

16. Differentiate $y = x^{\ln x}$ w.r.t. $x$.

17. If $y = \dfrac{x\sqrt{x^2+1}}{(x+1)^{2/3}}$, find $\dfrac{dy}{dx}$ using logarithmic differentiation.

18. Find $\dfrac{dy}{dx}$ if $x^y = y^x$.

19. Differentiate $(\sin x)^{\cos x}$ w.r.t. $x$.

20. Differentiate $\sqrt{\dfrac{(x-1)(x-2)}{(x-3)(x-4)}}$ w.r.t. $x$.

---

### 📝 Answer Key (Practice Problems)

| # | Answer |
|---|--------|
| 1 | Continuous, not differentiable at $x=2$ |
| 2 | Continuous at $x=0$ |
| 5 | $e$ |
| 6 | $1$ |
| 8 | $1$ |
| 11 | $0$ |
| 13 | $u_{\min} = \tfrac{1}{2}$ at $x = y = \tfrac{1}{2}$ |
| 14 | Max $= 64$ at $x = y = z = 4$ |
| 15 | Min $= 25$ at $x = 9, y = 4$ |

---

<a name="references"></a>
## 📚 References & Further Reading

| Topic | Resource |
|-------|----------|
| Continuity & Differentiability | Thomas, G.B. & Finney, R.L. — *Calculus and Analytic Geometry*, 9th ed., Addison-Wesley |
| Limits (1-form indeterminate) | Stewart, J. — *Calculus: Early Transcendentals*, 8th ed., Cengage Learning |
| Euler's Theorem | Kreyszig, E. — *Advanced Engineering Mathematics*, 10th ed., Wiley |
| Homogeneous Functions | Malik, S.C. & Arora, S. — *Mathematical Analysis*, 5th ed., New Age International |
| Optimization (Lagrange Multipliers) | Anton, H., Bivens, I., Davis, S. — *Calculus*, 10th ed., Wiley |
| Logarithmic Differentiation | Das, B.C. & Mukherjee, B.N. — *Differential Calculus* (classic South Asian text) |
| Partial Derivatives & Euler's Theorem (online) | [Khan Academy — Multivariable Calculus](https://www.khanacademy.org/math/multivariable-calculus) |
| Limits (online) | [Paul's Online Math Notes — Limits](https://tutorial.math.lamar.edu/Classes/CalcI/Limits.aspx) |
| MIT OpenCourseWare | [18.01 Single Variable Calculus](https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/) |
| NPTEL India (IIT Lectures) | [NPTEL Mathematics Courses](https://nptel.ac.in/courses/111) |

---

> 💡 **Tip for Exam Preparation:**  
> For questions involving $x\partial u/\partial x + y\partial u/\partial y$, always first identify whether the function is homogeneous or can be written as $g(\text{homogeneous function})$ — then apply **Euler's Theorem** or its corollary for composite functions.  
> For limits of the form $1^\infty$, always take logarithm and use L'Hôpital or standard limit results.

---

*Last Updated: February 2026 | Prepared for GitHub Repository — University Exam Practice*
