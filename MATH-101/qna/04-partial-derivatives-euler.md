# Chapter 4: Partial Derivatives & Euler's Theorem

> **Covered in:** Part A, Q2(c) and Q2(c) of most exams  
> **Marks:** 4 marks per sub-question

---

## 📖 Theory

### 4.1 Partial Derivatives

For $f(x,y)$, the partial derivatives are:

$$\frac{\partial f}{\partial x} = \lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}, \qquad \frac{\partial f}{\partial y} = \lim_{k\to 0}\frac{f(x,y+k)-f(x,y)}{k}$$

**Notation:** $f_x = \dfrac{\partial f}{\partial x}$, $\quad f_y = \dfrac{\partial f}{\partial y}$

**Second-order partials:**
$$f_{xx} = \frac{\partial^2 f}{\partial x^2}, \quad f_{yy} = \frac{\partial^2 f}{\partial y^2}, \quad f_{xy} = \frac{\partial^2 f}{\partial x\partial y}$$

**Clairaut's Theorem:** $f_{xy} = f_{yx}$ (under continuity conditions)

---

### 4.2 Homogeneous Functions

A function $f(x,y)$ is **homogeneous of degree $n$** if:

$$f(tx, ty) = t^n f(x,y) \quad \forall\, t > 0$$

**Examples:**
- $f(x,y) = x^2 + xy + y^2$ is homogeneous of degree $2$
- $f(x,y) = \dfrac{x^3+y^3}{x+y}$ is homogeneous of degree $2$
- $f(x,y) = \sin\!\left(\dfrac{x}{y}\right)$ is homogeneous of degree $0$

---

### 4.3 Euler's Theorem on Homogeneous Functions

> **Theorem:** If $f(x,y)$ is homogeneous of degree $n$, then:
> $$x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = n\cdot f$$

**Extended form (second order):**
$$x^2\frac{\partial^2 f}{\partial x^2} + 2xy\frac{\partial^2 f}{\partial x\partial y} + y^2\frac{\partial^2 f}{\partial y^2} = n(n-1)f$$

### 4.4 Laplace's Equation

$$\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$

Functions satisfying this are called **harmonic functions**.

---

## 📝 Past Exam Questions & Solutions

---

### ✏️ 2019 — Q2(c)

State Euler's theorem on homogeneous functions. If $u = \sin^{-1}\!\left(\dfrac{x^2+y^2}{x+y}\right)$, show that $x\dfrac{\partial u}{\partial x} + y\dfrac{\partial u}{\partial y} = \tan u$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Euler's Theorem Statement:** If $u(x,y)$ is homogeneous of degree $n$, then $x u_x + y u_y = nu$.

**Proof of the result:**

Let $v = \sin u = \dfrac{x^2+y^2}{x+y}$.

Check if $v$ is homogeneous:
$$v(tx,ty) = \frac{t^2x^2+t^2y^2}{tx+ty} = \frac{t^2(x^2+y^2)}{t(x+y)} = t\cdot\frac{x^2+y^2}{x+y} = t\cdot v(x,y)$$

So $v = \sin u$ is homogeneous of degree $n=1$.

By Euler's theorem applied to $v$:
$$x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} = 1\cdot v = \sin u$$

Now $v = \sin u$, so:
$$\frac{\partial v}{\partial x} = \cos u\cdot \frac{\partial u}{\partial x}, \quad \frac{\partial v}{\partial y} = \cos u\cdot\frac{\partial u}{\partial y}$$

Substituting:
$$\cos u\left(x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y}\right) = \sin u$$

$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \frac{\sin u}{\cos u} = \tan u \qquad \blacksquare$$

</details>

---

### ✏️ 2018 — Q2(c)

If $U = \ln(x^2+y^2)$, show that $\dfrac{\partial^2 U}{\partial x^2} + \dfrac{\partial^2 U}{\partial y^2} = 0$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

$$\frac{\partial U}{\partial x} = \frac{2x}{x^2+y^2}$$

$$\frac{\partial^2 U}{\partial x^2} = \frac{2(x^2+y^2) - 2x\cdot 2x}{(x^2+y^2)^2} = \frac{2y^2 - 2x^2}{(x^2+y^2)^2}$$

By symmetry:
$$\frac{\partial^2 U}{\partial y^2} = \frac{2x^2 - 2y^2}{(x^2+y^2)^2}$$

Therefore:
$$\frac{\partial^2 U}{\partial x^2} + \frac{\partial^2 U}{\partial y^2} = \frac{2y^2-2x^2+2x^2-2y^2}{(x^2+y^2)^2} = 0 \qquad \blacksquare$$

</details>

---

### ✏️ 2016 — Q2(c)

If $u = \ln(x^2+y^2)$, show that $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = 0$. **[4 marks]**

*(Same as 2018 Q2(c) — see solution above.)*

---

### ✏️ 2013 — Q2(c)

Define homogeneous function. If $u = \cot^{-1}\!\left(\dfrac{x+y}{\sqrt{x}+\sqrt{y}}\right)$, show that $x\dfrac{\delta u}{\delta x} + y\dfrac{\delta u}{\delta y} + \dfrac{1}{4}\sin 2u = 0$. **[4.5 marks]**

<details>
<summary>✅ Solution</summary>

Let $v = \cot u = \dfrac{x+y}{\sqrt{x}+\sqrt{y}}$.

Check homogeneity:
$$v(tx,ty) = \frac{tx+ty}{\sqrt{tx}+\sqrt{ty}} = \frac{t(x+y)}{\sqrt{t}(\sqrt{x}+\sqrt{y})} = t^{1/2}\cdot\frac{x+y}{\sqrt{x}+\sqrt{y}} = t^{1/2}v$$

So $v = \cot u$ is homogeneous of degree $n = \dfrac{1}{2}$.

By Euler's theorem:
$$x\frac{\partial v}{\partial x}+y\frac{\partial v}{\partial y} = \frac{1}{2}v = \frac{1}{2}\cot u$$

Since $v = \cot u$:
$$\frac{\partial v}{\partial x} = -\csc^2 u\cdot\frac{\partial u}{\partial x}, \quad \frac{\partial v}{\partial y} = -\csc^2 u\cdot\frac{\partial u}{\partial y}$$

So:
$$-\csc^2 u\left(x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}\right) = \frac{1}{2}\cot u$$

$$x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y} = -\frac{\cot u}{2\csc^2 u} = -\frac{\cos u/\sin u}{2/\sin^2 u} = -\frac{\cos u\sin u}{2} = -\frac{\sin 2u}{4}$$

$$\therefore\; x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+\frac{1}{4}\sin 2u = 0 \qquad \blacksquare$$

</details>

---

### ✏️ 2016 (Supple.) — Q2(b)

If $u = x^2y + y^2z + z^2x$, show that $\dfrac{\partial u}{\partial x}+\dfrac{\partial u}{\partial y}+\dfrac{\partial u}{\partial z} = (x+y+z)^2$. **[6 marks]**

<details>
<summary>✅ Solution</summary>

$$\frac{\partial u}{\partial x} = 2xy + z^2$$

$$\frac{\partial u}{\partial y} = x^2 + 2yz$$

$$\frac{\partial u}{\partial z} = y^2 + 2zx$$

**Sum:**
$$\frac{\partial u}{\partial x}+\frac{\partial u}{\partial y}+\frac{\partial u}{\partial z} = 2xy+z^2+x^2+2yz+y^2+2zx$$
$$= x^2+y^2+z^2+2xy+2yz+2zx = (x+y+z)^2 \qquad \blacksquare$$

</details>

---

### ✏️ 2012 — Q8(a)

If $z = \dfrac{x^2y^2}{x+y}$, prove that $x\dfrac{\delta z}{\delta x}+y\dfrac{\delta z}{\delta y} = 3z$ and $x^2\dfrac{\delta^2z}{\delta x^2}+2xy\dfrac{\delta^2z}{\delta x\delta y}+y^2\dfrac{\delta^2z}{\delta y^2} = 6z$. **[10 marks]**

<details>
<summary>✅ Solution</summary>

**Step 1:** Check degree of homogeneity.

$$z(tx,ty) = \frac{(tx)^2(ty)^2}{tx+ty} = \frac{t^4x^2y^2}{t(x+y)} = t^3\cdot\frac{x^2y^2}{x+y} = t^3 z$$

So $z$ is homogeneous of degree $n=3$.

**Part 1:** By Euler's theorem: $x z_x + y z_y = 3z$ ✓

**Part 2:** By the extended Euler's theorem formula:
$$x^2z_{xx}+2xyz_{xy}+y^2z_{yy} = n(n-1)z = 3(2)z = 6z \qquad \blacksquare$$

**Direct Verification of Part 1:**

$$z_x = \frac{2xy^2(x+y)-x^2y^2}{(x+y)^2} = \frac{xy^2(2x+y)}{(x+y)^2} \cdot \frac{x+y}{x+y}$$

Actually, simpler: write $z = \dfrac{x^2y^2}{x+y}$

$$z_x = \frac{2xy^2(x+y)-x^2y^2}{(x+y)^2} = \frac{y^2(x^2+2xy)}{(x+y)^2} = \frac{xy^2(x+2y)}{(x+y)^2}$$

$$z_y = \frac{2x^2y(x+y)-x^2y^2}{(x+y)^2} = \frac{x^2y(2y+x) }{(x+y)^2} = \frac{x^2y(2y+x)}{(x+y)^2}$$

$$xz_x + yz_y = \frac{x^2y^2(x+2y) + x^2y^2(2y+x)}{(x+y)^2} = \frac{x^2y^2 \cdot 2(x+2y... }{(x+y)^2}$$

Hmm let me redo:
$$xz_x = \frac{x^2y^2(x+2y)}{(x+y)^2}, \quad yz_y = \frac{x^2y^2(2y+x)}{(x+y)^2}$$

$$xz_x+yz_y = \frac{x^2y^2[(x+2y)+(2y+x)]}{(x+y)^2} \text{ ... }$$

Wait: $x+2y$ vs $x+2y$. Let me be careful:

$z_x = \dfrac{2xy^2(x+y)-x^2y^2 \cdot 1}{(x+y)^2} = \dfrac{xy^2(2x+2y-x)}{(x+y)^2} = \dfrac{xy^2(x+2y)}{(x+y)^2}$

$z_y = \dfrac{2x^2y(x+y)-x^2y^2}{(x+y)^2} = \dfrac{x^2y(2y+x)}{(x+y)^2}$

$xz_x+yz_y = \dfrac{x^2y^2(x+2y)+x^2y^2(2y+x)}{(x+y)^2}$

Hmm: $x\cdot z_x = x\cdot\dfrac{xy^2(x+2y)}{(x+y)^2} = \dfrac{x^2y^2(x+2y)}{(x+y)^2}$

$y\cdot z_y = y\cdot\dfrac{x^2y(2y+x)}{(x+y)^2} = \dfrac{x^2y^2(2y+x)}{(x+y)^2}$

Note $x+2y \neq 2y+x$... they're equal! Both are $x+2y$.

So $xz_x+yz_y = \dfrac{x^2y^2(x+2y) + x^2y^2(x+2y)}{(x+y)^2}$... that's wrong.

Let me recheck $z_y$: denominator $(x+y)^2$:

$z_y = \dfrac{2x^2y(x+y)-x^2y^2\cdot 1}{(x+y)^2} = \dfrac{x^2y(2x+2y-y)}{(x+y)^2} = \dfrac{x^2y(2x+y)}{(x+y)^2}$

So:
$$xz_x+yz_y = \frac{x^2y^2(x+2y)+x^2y^2(2x+y)}{(x+y)^2} = \frac{x^2y^2(3x+3y)}{(x+y)^2} = \frac{3x^2y^2(x+y)}{(x+y)^2} = \frac{3x^2y^2}{x+y} = 3z \qquad \blacksquare$$

</details>

---

## 🧪 Practice Problems

---

**P1.** If $u = x^3 + y^3 + z^3 - 3xyz$, verify Euler's theorem.

<details><summary>Solution</summary>

$u$ is homogeneous of degree 3. By Euler: $xu_x+yu_y+zu_z=3u$.  
$u_x=3x^2-3yz$, $u_y=3y^2-3xz$, $u_z=3z^2-3xy$.  
$xu_x+yu_y+zu_z=3x^3-3xyz+3y^3-3xyz+3z^3-3xyz=3(x^3+y^3+z^3-3xyz)=3u$. ✓

</details>

---

**P2.** If $u=\tan^{-1}\!\left(\dfrac{y}{x}\right)$, find $u_x$ and $u_y$.

<details><summary>Solution</summary>

$u_x = \dfrac{1}{1+(y/x)^2}\cdot\left(-\dfrac{y}{x^2}\right) = \dfrac{-y}{x^2+y^2}$  
$u_y = \dfrac{1}{1+(y/x)^2}\cdot\dfrac{1}{x} = \dfrac{x}{x^2+y^2}$

</details>

---

**P3.** If $f(x,y)=x^2\sin(y/x)$, verify Euler's theorem.

<details><summary>Solution</summary>

$f(tx,ty)=t^2x^2\sin(ty/tx)=t^2x^2\sin(y/x)=t^2f$. So $n=2$.  
Euler: $xf_x+yf_y=2f$.  
$f_x=2x\sin(y/x)+x^2\cos(y/x)\cdot(-y/x^2)=2x\sin(y/x)-y\cos(y/x)$  
$f_y=x^2\cos(y/x)\cdot(1/x)=x\cos(y/x)$  
$xf_x+yf_y=2x^2\sin(y/x)-xy\cos(y/x)+xy\cos(y/x)=2x^2\sin(y/x)=2f$ ✓

</details>

---

**P4.** Show that $u = e^{x/y}$ satisfies $xu_x+yu_y=0$.

<details><summary>Solution</summary>

$u(tx,ty)=e^{tx/ty}=e^{x/y}=t^0\cdot u$. Homogeneous of degree 0.  
By Euler: $xu_x+yu_y=0\cdot u=0$. ✓

</details>

---

**P5.** If $u=\sin^{-1}\!\sqrt{\dfrac{x-y}{x+y}}$, find $xu_x+yu_y$.

<details><summary>Solution</summary>

$v=\sin u=\sqrt{\dfrac{x-y}{x+y}}$; $v(tx,ty)=\sqrt{\dfrac{tx-ty}{tx+ty}}=v$, so $v$ is homogeneous of degree 0.  
$xv_x+yv_y=0$. Then $\cos u(xu_x+yu_y)=0$, so $xu_x+yu_y=0$.

</details>

---

**P6.** Verify that $u=x^3y-2xy^3$ is harmonic (satisfies Laplace's equation).

<details><summary>Solution</summary>

$u_x=3x^2y-2y^3$; $u_{xx}=6xy$  
$u_y=x^3-6xy^2$; $u_{yy}=-12xy$  
$u_{xx}+u_{yy}=6xy-12xy$... that's $-6xy\neq0$.  
So $u=x^3y-2xy^3$ is NOT harmonic. Actually $u=x^3-3xy^2$ is harmonic: $u_{xx}=6x$, $u_{yy}=-6x$, sum=0.

</details>

---

**P7.** If $u=f(x^2+y^2)$, show that $yu_x=xu_y$.

<details><summary>Solution</summary>

Wait: $u_x=2xf'$, $u_y=2yf'$. Then $yu_x=2xyf'$ and $xu_y=2xyf'$. So $yu_x=xu_y$. ✓

</details>

---

**P8.** Find $\partial^2z/\partial x\partial y$ for $z=x^3y^2-x^2y^3$.

<details><summary>Solution</summary>

$z_y=2x^3y-3x^2y^2$; $\partial^2z/\partial x\partial y = 6x^2y-6xy^2=6xy(x-y)$.

</details>

---

**P9.** If $z=\ln(e^x+e^y)$, show that $z_x+z_y=1$.

<details><summary>Solution</summary>

$z_x=\dfrac{e^x}{e^x+e^y}$, $z_y=\dfrac{e^y}{e^x+e^y}$.  
$z_x+z_y=\dfrac{e^x+e^y}{e^x+e^y}=1$ ✓

</details>

---

**P10.** For $u = x^n f(y/x)$, prove $xu_x+yu_y=nu$.

<details><summary>Solution</summary>

$u(tx,ty)=(tx)^nf(ty/tx)=t^nx^nf(y/x)=t^nu$. Homogeneous of degree $n$.  
By Euler: $xu_x+yu_y=nu$. ✓

</details>

---

## 📖 References

1. **Thomas' Calculus** — §14.3: Partial Derivatives; §14.1: Functions of Several Variables
2. **Kreyszig: Advanced Eng. Mathematics** — Ch. 9: Partial Differentiation
3. **Paul's Online Notes** — [Partial Derivatives](https://tutorial.math.lamar.edu/Classes/CalcIII/PartialDerivatives.aspx)
4. **Khan Academy** — [Partial Derivatives](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/introduction-to-partial-derivatives)
5. **MIT 18.02SC** — [Multivariable Calculus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/)
6. **Wolfram MathWorld** — [Euler's Homogeneous Function Theorem](https://mathworld.wolfram.com/EulersHomogeneousFunctionTheorem.html)
