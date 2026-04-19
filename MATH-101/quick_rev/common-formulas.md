# Common Formulas — Master Reference Sheet

> **BUTex | Mathematics-I (MS 101 / AS 101) | Level-1 Term-I**  
> Algebraic identities, trigonometric identities, logarithm & exponent laws, and everything shared across Differential and Integral Calculus.

---

## Table of Contents

1. [Algebraic Identities](#1-algebraic-identities)
2. [Logarithm & Exponent Laws](#2-logarithm--exponent-laws)
3. [Trigonometric Identities](#3-trigonometric-identities)
4. [Inverse Trigonometric Identities](#4-inverse-trigonometric-identities)
5. [Hyperbolic Functions](#5-hyperbolic-functions)
6. [Binomial Theorem](#6-binomial-theorem)
7. [Coordinate Geometry Essentials](#7-coordinate-geometry-essentials)
8. [Factorial & Double Factorial](#8-factorial--double-factorial)
9. [Greek Letters Used in Calculus](#9-greek-letters-used-in-calculus)

---

## 1. Algebraic Identities

### 1.1 Basic Expansions

$$a^2 - b^2 = (a+b)(a-b)$$

$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$

$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$

$$(a+b)^2 = a^2 + 2ab + b^2$$

$$(a-b)^2 = a^2 - 2ab + b^2$$

$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

$$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$$

### 1.2 Completing the Square

$$ax^2 + bx + c = a\!\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a}$$

**Discriminant:** $\Delta = b^2 - 4ac$

**Roots of** $ax^2 + bx + c = 0$:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### 1.3 Partial Fraction Decomposition

| Denominator Factor | Partial Fraction Term |
|--------------------|-----------------------|
| $(ax + b)$ | $\dfrac{A}{ax+b}$ |
| $(ax + b)^n$ | $\dfrac{A_1}{ax+b} + \dfrac{A_2}{(ax+b)^2} + \cdots + \dfrac{A_n}{(ax+b)^n}$ |
| $(ax^2 + bx + c)$ irreducible | $\dfrac{Ax + B}{ax^2+bx+c}$ |
| $(ax^2+bx+c)^n$ irreducible | $\dfrac{A_1x+B_1}{ax^2+bx+c} + \cdots + \dfrac{A_nx+B_n}{(ax^2+bx+c)^n}$ |

> **Note:** If degree of numerator $\geq$ degree of denominator, perform polynomial long division first.

### 1.4 AM–GM–HM Inequalities (2014, 2013 Exam)

For positive numbers $a, b$:

$$\text{AM} = \frac{a+b}{2}, \quad \text{GM} = \sqrt{ab}, \quad \text{HM} = \frac{2ab}{a+b}$$

$$\text{HM} \leq \text{GM} \leq \text{AM}$$

For three positive numbers $a, b, c$:

$$\frac{a+b+c}{3} \geq \sqrt[3]{abc}$$

**Weierstrass inequality (2014):** For positive integers:

$$\frac{b+c}{a} + \frac{c+a}{b} + \frac{a+b}{c} > 6$$

If $2S = a+b+c$, then $S^3 > 27(S-a)(S-b)(S-c)$.

---

## 2. Logarithm & Exponent Laws

### 2.1 Logarithm Rules

$$\log_a(mn) = \log_a m + \log_a n$$

$$\log_a\!\left(\frac{m}{n}\right) = \log_a m - \log_a n$$

$$\log_a(m^n) = n\log_a m$$

$$\log_a m = \frac{\log_b m}{\log_b a} \quad \text{(change of base)}$$

$$\log_a m = \frac{1}{\log_m a}$$

$$\log_a 1 = 0, \qquad \log_a a = 1$$

$$a^{\log_a x} = x, \qquad \log_a(a^x) = x$$

### 2.2 Natural Logarithm

$$\ln e = 1, \qquad \ln 1 = 0$$

$$\ln(e^x) = x, \qquad e^{\ln x} = x$$

$$\ln\!\left(\frac{1}{x}\right) = -\ln x$$

### 2.3 Exponent Rules

$$a^m \cdot a^n = a^{m+n}$$

$$\frac{a^m}{a^n} = a^{m-n}$$

$$(a^m)^n = a^{mn}$$

$$(ab)^n = a^n b^n$$

$$a^{-n} = \frac{1}{a^n}, \qquad a^0 = 1$$

$$a^{1/n} = \sqrt[n]{a}, \qquad a^{m/n} = \sqrt[n]{a^m}$$

---

## 3. Trigonometric Identities

### 3.1 Fundamental Identities

$$\sin^2\theta + \cos^2\theta = 1$$

$$1 + \tan^2\theta = \sec^2\theta$$

$$1 + \cot^2\theta = \csc^2\theta$$

$$\sin\theta = \frac{1}{\csc\theta}, \quad \cos\theta = \frac{1}{\sec\theta}, \quad \tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{1}{\cot\theta}$$

### 3.2 Angle Addition & Subtraction

$$\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$$

$$\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$$

$$\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$$

### 3.3 Double Angle Formulas

$$\sin 2A = 2\sin A\cos A$$

$$\cos 2A = \cos^2 A - \sin^2 A = 1 - 2\sin^2 A = 2\cos^2 A - 1$$

$$\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$$

### 3.4 Half-Angle Formulas

$$\sin^2\frac{A}{2} = \frac{1 - \cos A}{2}, \qquad \cos^2\frac{A}{2} = \frac{1 + \cos A}{2}$$

$$\tan\frac{A}{2} = \frac{\sin A}{1 + \cos A} = \frac{1 - \cos A}{\sin A}$$

### 3.5 Power-Reducing (Integration Essential)

$$\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}$$

$$\sin^3 x = \frac{3\sin x - \sin 3x}{4}, \qquad \cos^3 x = \frac{3\cos x + \cos 3x}{4}$$

$$\sin^4 x = \frac{3 - 4\cos 2x + \cos 4x}{8}, \qquad \cos^4 x = \frac{3 + 4\cos 2x + \cos 4x}{8}$$

### 3.6 Product-to-Sum

$$\sin A\sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$$

$$\cos A\cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$$

$$\sin A\cos B = \frac{1}{2}[\sin(A+B) + \sin(A-B)]$$

### 3.7 Sum-to-Product

$$\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2}$$

$$\sin A - \sin B = 2\cos\frac{A+B}{2}\sin\frac{A-B}{2}$$

$$\cos A + \cos B = 2\cos\frac{A+B}{2}\cos\frac{A-B}{2}$$

$$\cos A - \cos B = -2\sin\frac{A+B}{2}\sin\frac{A-B}{2}$$

### 3.8 Triple Angle

$$\sin 3A = 3\sin A - 4\sin^3 A$$

$$\cos 3A = 4\cos^3 A - 3\cos A$$

$$\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$$

### 3.9 Weierstrass / Half-Angle Substitution ($t = \tan\frac{x}{2}$)

$$\sin x = \frac{2t}{1+t^2}, \qquad \cos x = \frac{1-t^2}{1+t^2}, \qquad \tan x = \frac{2t}{1-t^2}, \qquad dx = \frac{2\,dt}{1+t^2}$$

### 3.10 Standard Values

| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $\dfrac{3\pi}{2}$ |
|----------|-----|---------|---------|---------|---------|------|--------|
| $\sin\theta$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ | $-1$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ | $0$ |
| $\tan\theta$ | $0$ | $\frac{1}{\sqrt{3}}$ | $1$ | $\sqrt{3}$ | $\infty$ | $0$ | $\infty$ |

---

## 4. Inverse Trigonometric Identities

### 4.1 Domain & Range

| Function | Domain | Principal Range |
|----------|--------|----------------|
| $\sin^{-1} x$ | $[-1, 1]$ | $[-\pi/2, \pi/2]$ |
| $\cos^{-1} x$ | $[-1, 1]$ | $[0, \pi]$ |
| $\tan^{-1} x$ | $(-\infty, \infty)$ | $(-\pi/2, \pi/2)$ |
| $\cot^{-1} x$ | $(-\infty, \infty)$ | $(0, \pi)$ |
| $\sec^{-1} x$ | $|x| \geq 1$ | $[0,\pi] \setminus \{\pi/2\}$ |
| $\csc^{-1} x$ | $|x| \geq 1$ | $[-\pi/2,\pi/2] \setminus \{0\}$ |

### 4.2 Complementary Pairs

$$\sin^{-1} x + \cos^{-1} x = \frac{\pi}{2}$$

$$\tan^{-1} x + \cot^{-1} x = \frac{\pi}{2}$$

$$\sec^{-1} x + \csc^{-1} x = \frac{\pi}{2}$$

### 4.3 Addition Formulas

$$\tan^{-1} x + \tan^{-1} y = \begin{cases} \tan^{-1}\!\left(\dfrac{x+y}{1-xy}\right) & xy < 1 \\[6pt] \pi + \tan^{-1}\!\left(\dfrac{x+y}{1-xy}\right) & xy > 1,\; x > 0 \end{cases}$$

$$\tan^{-1} x - \tan^{-1} y = \tan^{-1}\!\left(\frac{x-y}{1+xy}\right)$$

$$2\tan^{-1} x = \tan^{-1}\!\left(\frac{2x}{1-x^2}\right) = \sin^{-1}\!\left(\frac{2x}{1+x^2}\right) = \cos^{-1}\!\left(\frac{1-x^2}{1+x^2}\right)$$

### 4.4 Gregory's Series

$$\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots = \tan^{-1}(1)$$

$$\tan^{-1} x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots, \quad |x| \leq 1$$

---

## 5. Hyperbolic Functions

### 5.1 Definitions

$$\sinh x = \frac{e^x - e^{-x}}{2}, \qquad \cosh x = \frac{e^x + e^{-x}}{2}$$

$$\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}$$

### 5.2 Identities

$$\cosh^2 x - \sinh^2 x = 1$$

$$1 - \tanh^2 x = \text{sech}^2 x$$

$$\sinh(x \pm y) = \sinh x\cosh y \pm \cosh x\sinh y$$

$$\cosh(x \pm y) = \cosh x\cosh y \pm \sinh x\sinh y$$

$$\sinh 2x = 2\sinh x\cosh x, \qquad \cosh 2x = \cosh^2 x + \sinh^2 x$$

### 5.3 Derivatives & Integrals

| $f(x)$ | $f'(x)$ | $\int f(x)\,dx$ |
|--------|---------|----------------|
| $\sinh x$ | $\cosh x$ | $\cosh x + C$ |
| $\cosh x$ | $\sinh x$ | $\sinh x + C$ |
| $\tanh x$ | $\text{sech}^2 x$ | $\ln\cosh x + C$ |

### 5.4 Inverse Hyperbolic (Logarithmic Forms)

$$\sinh^{-1} x = \ln\!\left(x + \sqrt{x^2+1}\right)$$

$$\cosh^{-1} x = \ln\!\left(x + \sqrt{x^2-1}\right), \quad x \geq 1$$

$$\tanh^{-1} x = \frac{1}{2}\ln\frac{1+x}{1-x}, \quad |x| < 1$$

---

## 6. Binomial Theorem

### 6.1 Positive Integer $n$

$$(a + b)^n = \sum_{r=0}^{n}\binom{n}{r}a^{n-r}b^r$$

$$= a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + b^n$$

**General term:** $T_{r+1} = \binom{n}{r}a^{n-r}b^r$

**Binomial coefficient:** $\binom{n}{r} = \dfrac{n!}{r!(n-r)!}$

### 6.2 General Binomial (Fractional / Negative $n$)

$$(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots, \quad |x| < 1$$

**Useful expansions:**

$$(1+x)^{-1} = 1 - x + x^2 - x^3 + \cdots$$

$$(1-x)^{-1} = 1 + x + x^2 + x^3 + \cdots$$

$$(1+x)^{-2} = 1 - 2x + 3x^2 - 4x^3 + \cdots$$

$$(1+x)^{1/2} = 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} - \cdots$$

$$(1+x)^{-1/2} = 1 - \frac{x}{2} + \frac{3x^2}{8} - \frac{5x^3}{16} + \cdots$$

### 6.3 Pascal's Triangle Relations

$$\binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{1} = n$$

$$\binom{n}{r} = \binom{n}{n-r}, \qquad \binom{n}{r} + \binom{n}{r+1} = \binom{n+1}{r+1}$$

$$\sum_{r=0}^{n}\binom{n}{r} = 2^n, \qquad \sum_{r=0}^{n}(-1)^r\binom{n}{r} = 0$$

---

## 7. Coordinate Geometry Essentials

### 7.1 Distance & Division

**Distance:** $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$

**Midpoint:** $\left(\dfrac{x_1+x_2}{2}, \dfrac{y_1+y_2}{2}\right)$

**Section formula (internal):** $\left(\dfrac{mx_2+nx_1}{m+n}, \dfrac{my_2+ny_1}{m+n}\right)$

### 7.2 Straight Lines

**Slope:** $m = \tan\theta = \dfrac{y_2-y_1}{x_2-x_1}$

**Slope-intercept:** $y = mx + c$

**Point-slope:** $y - y_1 = m(x - x_1)$

**Two-point form:** $\dfrac{y-y_1}{y_2-y_1} = \dfrac{x-x_1}{x_2-x_1}$

**Intercept form:** $\dfrac{x}{a} + \dfrac{y}{b} = 1$

**Normal form:** $x\cos\alpha + y\sin\alpha = p$

**Distance from point $(x_0,y_0)$ to line $ax+by+c=0$:**

$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2+b^2}}$$

**Angle between two lines with slopes $m_1, m_2$:**

$$\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$$

Parallel: $m_1 = m_2$. Perpendicular: $m_1 m_2 = -1$.

### 7.3 Pair of Straight Lines

**General second-degree:** $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$

Represents two straight lines if:

$$\Delta = \begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = 0$$

**Angle between the pair** $ax^2 + 2hxy + by^2 = 0$:

$$\tan\theta = \frac{2\sqrt{h^2-ab}}{a+b}$$

- Coincident if $h^2 = ab$
- Perpendicular if $a + b = 0$

**Invariants under rotation:**

$$a + b = a' + b' \quad \text{and} \quad ab - h^2 = a'b' - h'^2$$

### 7.4 Conics — Standard Forms

| Conic | Equation | Key Feature |
|-------|----------|-------------|
| Circle | $(x-h)^2+(y-k)^2=r^2$ | Centre $(h,k)$, radius $r$ |
| Parabola | $y^2=4ax$ | Focus $(a,0)$, vertex $(0,0)$ |
| Ellipse | $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ | $a>b$, eccentricity $e=\sqrt{1-b^2/a^2}$ |
| Hyperbola | $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ | $e=\sqrt{1+b^2/a^2}$ |

**Rotation to remove $xy$ term** from $ax^2+2hxy+by^2$:

$$\tan 2\alpha = \frac{2h}{a-b}$$

Rotate axes by angle $\alpha$; principal axes coincide with eigenvectors of $\begin{bmatrix}a&h\\h&b\end{bmatrix}$.

### 7.5 3D — Lines & Planes

**Direction cosines** $l, m, n$ of a line: $l^2 + m^2 + n^2 = 1$

**Angle between two lines** with d.c.'s $(l_1,m_1,n_1)$, $(l_2,m_2,n_2)$:

$$\cos\theta = |l_1 l_2 + m_1 m_2 + n_1 n_2|$$

**Equation of plane** through $(x_0,y_0,z_0)$ with normal $(a,b,c)$:

$$a(x-x_0)+b(y-y_0)+c(z-z_0)=0$$

**Distance from point $(x_1,y_1,z_1)$ to plane $ax+by+cz+d=0$:**

$$d = \frac{|ax_1+by_1+cz_1+d|}{\sqrt{a^2+b^2+c^2}}$$

**Shortest distance between skew lines** $\mathbf{r} = \mathbf{a}_1 + \lambda\mathbf{b}_1$ and $\mathbf{r} = \mathbf{a}_2 + \mu\mathbf{b}_2$:

$$\text{SD} = \frac{|(\mathbf{a}_2 - \mathbf{a}_1)\cdot(\mathbf{b}_1\times\mathbf{b}_2)|}{|\mathbf{b}_1\times\mathbf{b}_2|}$$

**Diagonals of a cube** — angle $\alpha$ between any two:

$$\cos\alpha = \frac{1}{3} \implies \alpha = \cos^{-1}\!\left(\frac{1}{3}\right)$$

Sum of squares of direction cosines with four diagonals:

$$\cos^2\alpha + \cos^2\beta + \cos^2\gamma + \cos^2\delta = \frac{4}{3}$$

---

## 8. Factorial & Double Factorial

### 8.1 Factorial

$$n! = n \cdot (n-1) \cdot (n-2) \cdots 2 \cdot 1$$

$$0! = 1, \qquad 1! = 1$$

$$n! = n\cdot(n-1)!$$

### 8.2 Double Factorial

$$n!! = \begin{cases} n\cdot(n-2)\cdot(n-4)\cdots4\cdot2 & n \text{ even} \\ n\cdot(n-2)\cdot(n-4)\cdots3\cdot1 & n \text{ odd} \end{cases}$$

**Quick values:**

| $n$ | $n!!$ |
|-----|-------|
| $1$ | $1$ |
| $2$ | $2$ |
| $3$ | $3$ |
| $4$ | $8$ |
| $5$ | $15$ |
| $6$ | $48$ |
| $7$ | $105$ |
| $8$ | $384$ |
| $14$ | $645120$ |
| $15$ | $2027025$ |

**Wallis connection:**

$$\int_0^{\pi/2}\sin^n x\,dx = \frac{(n-1)!!}{n!!}\times\begin{cases}\dfrac{\pi}{2} & n \text{ even}\\[6pt] 1 & n \text{ odd}\end{cases}$$

### 8.3 Gamma–Factorial Connection

$$\Gamma(n+1) = n!, \qquad \Gamma\!\left(\frac{1}{2}\right) = \sqrt{\pi}$$

$$\Gamma\!\left(n+\frac{1}{2}\right) = \frac{(2n-1)!!}{2^n}\sqrt{\pi} = \frac{1\cdot3\cdot5\cdots(2n-1)}{2^n}\sqrt{\pi}$$

**Key values:**

| $n$ | $\Gamma(n)$ |
|-----|------------|
| $1$ | $1$ |
| $2$ | $1$ |
| $3$ | $2$ |
| $4$ | $6$ |
| $5$ | $24$ |
| $1/2$ | $\sqrt{\pi}$ |
| $3/2$ | $\sqrt{\pi}/2$ |
| $5/2$ | $3\sqrt{\pi}/4$ |

---

## 9. Greek Letters Used in Calculus

| Symbol | Name | Common Use |
|--------|------|-----------|
| $\alpha, \beta, \gamma$ | alpha, beta, gamma | angles, roots, direction cosines |
| $\delta, \Delta$ | delta | small change, discriminant |
| $\varepsilon$ | epsilon | error, tolerance in limits |
| $\theta, \phi$ | theta, phi | angles in polar/trig |
| $\lambda, \mu$ | lambda, mu | eigenvalues, parameters |
| $\pi$ | pi | $\approx 3.14159\ldots$ |
| $\rho$ | rho | radius of curvature, polar $r$ |
| $\sigma$ | sigma | summation (as $\Sigma$) |
| $\omega$ | omega | complex roots of unity |
| $\Gamma$ | Gamma | Gamma function |
| $\nabla$ | nabla | gradient / Laplacian operator |
| $\infty$ | infinity | unbounded limit |
| $\partial$ | partial | partial derivative |

---

## Cheat Box — Numbers Worth Memorizing

$$e \approx 2.71828 \qquad \pi \approx 3.14159 \qquad \sqrt{2} \approx 1.41421 \qquad \sqrt{3} \approx 1.73205$$

$$\ln 2 \approx 0.6931 \qquad \ln 10 \approx 2.3026 \qquad \log_{10} e \approx 0.4343$$

$$e^\pi \approx 23.14 \qquad \pi^e \approx 22.46 \qquad \frac{1}{\sqrt{2\pi}} \approx 0.3989$$

---

*Made for BUTex x86 study group — MS 101 / AS 101*
