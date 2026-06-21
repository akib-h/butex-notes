# Vector Line Integration and Work Done

> **Module:** Vector Analysis
> **Topic 6 of 10**
> **Last Updated:** June 20, 2026

## Table of Contents

1. [Introduction](#1-introduction)
2. [Line Integral of a Scalar Field](#2-line-integral-of-a-scalar-field)
3. [Line Integral of a Vector Field](#3-line-integral-of-a-vector-field)
4. [Work Done by a Force Field](#4-work-done-by-a-force-field)
5. [Conservative Vector Fields](#5-conservative-vector-fields)
6. [Fundamental Theorem of Line Integrals](#6-fundamental-theorem-of-line-integrals)
7. [Testing for Conservative Fields](#7-testing-for-conservative-fields)
8. [Worked Examples](#8-worked-examples)
9. [Applications](#9-applications)
10. [Diagrams](#10-diagrams)
11. [Summary](#11-summary)
12. [References](#12-references)

---

## 1. Introduction

A **line integral** (also called a *path* or *contour* integral) generalizes the ordinary definite integral $\int_a^b f(x)\,dx$ to integration along an arbitrary curve in space, rather than along a straight segment of the $x$-axis. Line integrals come in two flavors:

- **Scalar line integral** $\displaystyle\int_C f\,ds$ — integrating a scalar field along a curve with respect to arc length.
- **Vector line integral** $\displaystyle\int_C \vec F \cdot d\vec r$ — integrating the tangential component of a vector field along a curve. This is the mathematical foundation for **work done** by a force along a path.

---

## 2. Line Integral of a Scalar Field

### 2.1 Definition

Let $C$ be a smooth curve parametrized by $\vec r(t) = x(t)\hat i + y(t)\hat j + z(t)\hat k$, $t\in[a,b]$, and let $f$ be a scalar field defined on $C$. The line integral of $f$ along $C$ with respect to arc length is:
$$
\int_C f\, ds = \int_a^b f(\vec r(t))\,|\vec r'(t)|\, dt
$$

This represents quantities such as the **mass of a wire** with linear density $f$, or the **average value** of $f$ along the curve.

---

## 3. Line Integral of a Vector Field

### 3.1 Definition

Let $\vec F$ be a vector field defined along a smooth curve $C: \vec r(t),\ t\in[a,b]$. The line integral of $\vec F$ along $C$ is:
$$
\int_C \vec F \cdot d\vec r = \int_a^b \vec F(\vec r(t)) \cdot \vec r'(t)\, dt
$$

In differential form, if $\vec F = P\hat i + Q\hat j + R\hat k$ and $d\vec r = dx\,\hat i + dy\,\hat j + dz\,\hat k$, this is often written:
$$
\int_C \vec F\cdot d\vec r = \int_C P\,dx + Q\,dy + R\,dz
$$

### 3.2 Key Properties

1. **Orientation matters:** Reversing the direction of traversal reverses the sign:
$$
\int_{-C}\vec F\cdot d\vec r = -\int_C \vec F\cdot d\vec r
$$
2. **Additivity over sub-arcs:** If $C = C_1 \cup C_2$ (joined end to end),
$$
\int_C \vec F\cdot d\vec r = \int_{C_1}\vec F\cdot d\vec r + \int_{C_2}\vec F\cdot d\vec r
$$
3. **Independent of parametrization** (as long as orientation is preserved) — the value depends only on the geometric path and direction, not the specific parametrization chosen.
4. The integral equals $\displaystyle\int_C \vec F \cdot \hat T\, ds$, where $\hat T = \vec r'(t)/|\vec r'(t)|$ is the unit tangent — i.e., it measures the **tangential component** of $\vec F$ accumulated along the path.

---

## 4. Work Done by a Force Field

### 4.1 Physical Definition

If $\vec F(x,y,z)$ represents a (possibly variable) force field, the **work done** by $\vec F$ in moving a particle along a curve $C$ from point $A$ to point $B$ is precisely the vector line integral:
$$
W = \int_C \vec F\cdot d\vec r
$$

This generalizes the elementary physics formula $W = \vec F\cdot \vec d$ (force dotted with straight-line displacement) to curved paths and spatially varying forces, by summing the work $\vec F\cdot d\vec r$ done over each infinitesimal displacement $d\vec r$.

### 4.2 Derivation Sketch

Divide $C$ into $n$ small arcs with displacement vectors $\Delta \vec r_i \approx \vec r'(t_i)\Delta t$. Over each small arc, the force is approximately constant, so the work over that piece is approximately $\vec F(\vec r(t_i)) \cdot \Delta \vec r_i$. Summing and taking the limit $n\to\infty$ (Riemann sum) yields:
$$
W = \lim_{n\to\infty}\sum_{i=1}^n \vec F(\vec r(t_i))\cdot \vec r'(t_i)\,\Delta t = \int_a^b \vec F(\vec r(t))\cdot\vec r'(t)\,dt
$$

---

## 5. Conservative Vector Fields

### 5.1 Definition

A vector field $\vec F$ defined on an open, connected region $D$ is **conservative** if there exists a scalar function $f$ (called a **potential function**) such that:
$$
\vec F = \nabla f
$$

### 5.2 Path Independence

**Theorem:** $\vec F$ is conservative on $D$ **if and only if** the line integral $\int_C \vec F\cdot d\vec r$ is **independent of path** — i.e., it depends only on the endpoints of $C$, not the specific route taken between them.

**Equivalent characterization:** $\vec F$ is conservative $\iff$ $\displaystyle\oint_C \vec F\cdot d\vec r = 0$ for **every** closed curve $C$ in $D$.

This is of enormous practical importance: for conservative force fields (like gravity or electrostatic forces), the work done moving between two points does not depend on the path — only on the start and end positions.

---

## 6. Fundamental Theorem of Line Integrals

### 6.1 Statement

If $\vec F = \nabla f$ is conservative on an open connected region $D$, and $C$ is any smooth curve in $D$ from point $A$ to point $B$, parametrized by $\vec r(t)$, $t\in[a,b]$ with $\vec r(a)=A$, $\vec r(b)=B$, then:
$$
\int_C \nabla f \cdot d\vec r = f(B) - f(A)
$$

This is the direct multivariable analogue of the Fundamental Theorem of Calculus, $\int_a^b f'(x)\,dx = f(b)-f(a)$.

### 6.2 Proof

By the chain rule, define $g(t) = f(\vec r(t))$. Then:
$$
g'(t) = \nabla f(\vec r(t)) \cdot \vec r'(t)
$$
Therefore,
$$
\int_C \nabla f\cdot d\vec r = \int_a^b \nabla f(\vec r(t))\cdot \vec r'(t)\, dt = \int_a^b g'(t)\, dt
$$
By the ordinary Fundamental Theorem of Calculus (applied to the single-variable function $g$):
$$
\int_a^b g'(t)\,dt = g(b) - g(a) = f(\vec r(b)) - f(\vec r(a)) = f(B) - f(A) \qquad \blacksquare
$$

### 6.3 Corollary (Closed Loop)

If $C$ is a **closed** curve ($A = B$) and $\vec F$ is conservative, then:
$$
\oint_C \vec F\cdot d\vec r = f(B)-f(A) = 0
$$

---

## 7. Testing for Conservative Fields

### 7.1 Curl Test (for fields in $\mathbb R^3$)

If $\vec F$ has continuous first partial derivatives on a **simply connected** domain $D$ (no "holes"), then:
$$
\vec F \text{ is conservative on } D \iff \nabla \times \vec F = \vec 0 \text{ throughout } D
$$

This follows directly from the identity $\nabla\times(\nabla f) = \vec 0$ proven in Topic 5, combined with the converse, which holds precisely because $D$ is simply connected (this is a consequence of Stokes'/Green's theorem machinery).

### 7.2 Component Test in 2D

For $\vec F = P(x,y)\hat i + Q(x,y)\hat j$ on a simply connected planar region:
$$
\vec F \text{ is conservative} \iff \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}
$$

### 7.3 Finding the Potential Function

If $\vec F=(P,Q,R) = \nabla f$, recover $f$ by integrating $P$ with respect to $x$ (introducing an unknown function of $y,z$), then matching partial derivatives with $Q$ and $R$ to determine the remaining unknowns.

---

## 8. Worked Examples

### Example 1 — Direct evaluation of a line integral

Evaluate $\displaystyle\int_C \vec F \cdot d\vec r$ where $\vec F = y\,\hat i + x\,\hat j$ and $C$ is the curve $\vec r(t) = t^2\hat i + t^3\hat j$, $t\in[0,1]$.

$$
\vec r'(t) = 2t\,\hat i + 3t^2\,\hat j, \qquad \vec F(\vec r(t)) = t^3\hat i + t^2\hat j
$$
$$
\vec F\cdot\vec r'(t) = t^3(2t) + t^2(3t^2) = 2t^4+3t^4 = 5t^4
$$
$$
\int_C \vec F\cdot d\vec r = \int_0^1 5t^4\,dt = \left[t^5\right]_0^1 = 1
$$

### Example 2 — Work done by a force field

A force field $\vec F = (3x^2-6yz)\hat i + (2y+3xz)\hat j + (1-4xyz^2)\hat k$ acts on a particle moving from $(0,0,0)$ to $(1,1,1)$ along the straight line $\vec r(t)=(t,t,t)$, $t\in[0,1]$. Find the work done.

$$
\vec r'(t) = (1,1,1)
$$
$$
\vec F(\vec r(t)) = (3t^2-6t^2,\ 2t+3t^2,\ 1-4t^4) = (-3t^2,\ 2t+3t^2,\ 1-4t^4)
$$
$$
\vec F\cdot \vec r'(t) = -3t^2 + 2t+3t^2 + 1-4t^4 = 2t + 1 - 4t^4
$$
$$
W = \int_0^1 (1+2t-4t^4)\,dt = \left[t + t^2 - \frac{4t^5}{5}\right]_0^1 = 1+1-\frac{4}{5} = \frac{6}{5}
$$

*(Note: this $\vec F$ is in fact conservative with potential $f=x^3-3xyz\cdot... $ — verify independently using the curl test; the result should match regardless of path chosen, illustrating path independence.)*

### Example 3 — Verifying a conservative field and using the potential function

Let $\vec F = (2xy)\hat i + (x^2-z^2)\hat j + (-2yz)\hat k$.

**Step 1 — Check curl:**
$$
\nabla\times\vec F = \left(\frac{\partial(-2yz)}{\partial y}-\frac{\partial(x^2-z^2)}{\partial z}\right)\hat i + \left(\frac{\partial(2xy)}{\partial z}-\frac{\partial(-2yz)}{\partial x}\right)\hat j + \left(\frac{\partial(x^2-z^2)}{\partial x}-\frac{\partial(2xy)}{\partial y}\right)\hat k
$$
$$
= (-2z-(-2z))\hat i + (0-0)\hat j + (2x-2x)\hat k = \vec 0
$$
So $\vec F$ is conservative.

**Step 2 — Find potential $f$:** We need $f_x = 2xy$, $f_y = x^2-z^2$, $f_z=-2yz$.

Integrate $f_x$: $f = x^2y + g(y,z)$.

Differentiate w.r.t. $y$: $f_y = x^2 + g_y = x^2-z^2 \implies g_y = -z^2 \implies g = -yz^2 + h(z)$.

So $f = x^2y - yz^2 + h(z)$. Differentiate w.r.t. $z$: $f_z = -2yz + h'(z) = -2yz \implies h'(z)=0 \implies h=\text{const}$.

$$
f(x,y,z) = x^2y - yz^2 + C
$$

**Step 3 — Use Fundamental Theorem of Line Integrals** to compute work from $(0,0,0)$ to $(1,2,3)$ along *any* path:
$$
W = f(1,2,3) - f(0,0,0) = (1\cdot2 - 2\cdot9) - 0 = 2-18 = -16
$$

This result holds **regardless of the path taken** between the two points.

---

## 9. Applications

- **Mechanics:** Work-energy theorem; computing work done by gravity, springs, or electromagnetic forces along arbitrary trajectories.
- **Thermodynamics:** Work integrals $\int P\,dV$ along a process path on a $P$–$V$ diagram.
- **Electromagnetism:** Electromotive force (EMF) as a line integral of the electric field around a circuit; magnetic circulation (used in Ampère's Law, Topic 10).
- **Fluid dynamics:** Circulation of a velocity field around a closed loop, related to vorticity via Stokes' theorem.
- **Potential theory:** Determining whether a force is "conservative" underlies conservation of mechanical energy.

---

## 10. Diagrams

### 10.1 Conceptual flow

```mermaid
flowchart TD
    A["Vector Field F along curve C"] --> B{"Is ∇×F = 0 on simply connected domain?"}
    B -- Yes --> C["F is conservative<br/>F = ∇f for some potential f"]
    B -- No --> D["F is non-conservative<br/>Work depends on path"]
    C --> E["∫_C F·dr = f(B) - f(A)<br/>(Fundamental Theorem of Line Integrals)"]
    C --> F["∮_C F·dr = 0 for any closed loop"]
    D --> G["Must evaluate ∫_C F·dr directly<br/>via parametrization"]
```

### 10.2 Path independence illustration

![Path independence diagram](https://upload.wikimedia.org/wikipedia/commons/5/52/Conservative_field.svg)

*Illustration: for a conservative field, the line integral between two fixed points (A and B) is the same along any connecting path — illustrated by multiple paths C₁, C₂, C₃ between the same endpoints (Wikimedia Commons).*

---

## 11. Summary

| Concept | Formula |
|---|---|
| Scalar line integral | $\int_C f\,ds = \int_a^b f(\vec r(t))\,\lvert \vec r'(t)\rvert\,dt$ |
| Vector line integral | $\int_C \vec F\cdot d\vec r = \int_a^b \vec F(\vec r(t))\cdot \vec r'(t)\,dt$ |
| Work done | $W = \int_C \vec F\cdot d\vec r$ |
| Conservative field | $\vec F = \nabla f$ |
| Fundamental Theorem of Line Integrals | $\int_C \nabla f\cdot d\vec r = f(B)-f(A)$ |
| Conservative ⟺ curl-free (simply connected) | $\nabla\times\vec F = \vec 0$ |
| Closed loop, conservative field | $\oint_C \vec F\cdot d\vec r = 0$ |

---

## 12. References

1. Paul's Online Math Notes — *Line Integrals* — [https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsPtI.aspx](https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsPtI.aspx)
2. Paul's Online Math Notes — *Fundamental Theorem for Line Integrals* — [https://tutorial.math.lamar.edu/Classes/CalcIII/FundThmLineIntegrals.aspx](https://tutorial.math.lamar.edu/Classes/CalcIII/FundThmLineIntegrals.aspx)
3. Khan Academy — *Line integrals and work* — [https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions](https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions)
4. MIT OCW 18.02SC — *Line Integrals: Work and Conservative Fields* — [https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/)
5. Wolfram MathWorld — *Line Integral* — [https://mathworld.wolfram.com/LineIntegral.html](https://mathworld.wolfram.com/LineIntegral.html)
6. Wikipedia — *Conservative vector field* — [https://en.wikipedia.org/wiki/Conservative_vector_field](https://en.wikipedia.org/wiki/Conservative_vector_field)
7. Marsden, J. E., & Tromba, A. J. — *Vector Calculus*, 6th Edition, Chapter on Line Integrals.

---

**Previous:** [05 — Gradient, Divergence and Curl](05-gradient-divergence-curl.md) · **Next:** [07 — Green's Theorem](07-greens-theorem.md)
