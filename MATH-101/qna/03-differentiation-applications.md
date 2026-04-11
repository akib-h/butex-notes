# Chapter 3: Differentiation & Applications

> **Covered in:** Part A, Q2 of every exam  
> **Topics:** Stationary points, increasing/decreasing intervals, local extrema

---

## 📖 Theory

### 3.1 Critical Points and Stationary Points

For $f(x)$:
- **Critical points:** where $f'(x) = 0$ or $f'(x)$ does not exist
- **Stationary points:** where $f'(x) = 0$

### 3.2 First Derivative Test

| Sign change of $f'$ at $c$ | Nature of $c$ |
|---------------------------|---------------|
| $+ \to -$ | Local **maximum** |
| $- \to +$ | Local **minimum** |
| No change | **Inflection point** |

### 3.3 Second Derivative Test

At a critical point $c$ where $f'(c) = 0$:

| $f''(c)$ | Nature |
|----------|--------|
| $f''(c) < 0$ | Local **maximum** |
| $f''(c) > 0$ | Local **minimum** |
| $f''(c) = 0$ | Inconclusive — use first derivative test |

### 3.4 Increasing / Decreasing

$$f'(x) > 0 \text{ on } (a,b) \implies f \text{ is increasing on } (a,b)$$
$$f'(x) < 0 \text{ on } (a,b) \implies f \text{ is decreasing on } (a,b)$$

![Increasing Decreasing Function](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Monotone_function.svg/400px-Monotone_function.svg.png)  
*Figure 3.1 — Increasing and decreasing intervals (Wikimedia Commons)*

---

## 📝 Past Exam Questions & Solutions

---

### ✏️ 2019 — Q2(b)

Find all stationary points for $f(x) = 2x^3 - 6x^2 - 18x + 7$. Discuss increasing/decreasing intervals and local extrema. **[4 marks]**

<details>
<summary>✅ Solution</summary>

$$f'(x) = 6x^2 - 12x - 18 = 6(x^2 - 2x - 3) = 6(x-3)(x+1)$$

**Stationary points:** $f'(x) = 0 \Rightarrow x = 3$ or $x = -1$

**Sign analysis of $f'(x)$:**

```
x:      (−∞, −1)   x=−1   (−1, 3)   x=3   (3, +∞)
f'(x):     +          0       −         0      +
f(x):    ↗ inc.    local max  ↘ dec.  local min  ↗ inc.
```

**Function values:**
- $f(-1) = 2(-1) - 6(1) - 18(-1) + 7 = -2 - 6 + 18 + 7 = \mathbf{17}$ ← local maximum
- $f(3) = 2(27) - 6(9) - 18(3) + 7 = 54 - 54 - 54 + 7 = \mathbf{-47}$ ← local minimum

**Summary:**
- Increasing on $(-\infty, -1)$ and $(3, +\infty)$
- Decreasing on $(-1, 3)$
- Local max at $x = -1$: $f(-1) = 17$
- Local min at $x = 3$: $f(3) = -47$

</details>

---

### ✏️ 2018 — Q2(a)

Find the interval in which $f(x) = x^4 - 8x^2 + 16$ is increasing or decreasing. Find local minima/maxima. **[4 marks]**

<details>
<summary>✅ Solution</summary>

$$f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2)$$

**Critical points:** $x = 0, 2, -2$

**Sign of $f'(x)$:**

| Interval | $4x$ | $(x-2)$ | $(x+2)$ | $f'(x)$ | $f$ |
|----------|------|---------|---------|---------|-----|
| $(-\infty,-2)$ | − | − | − | **−** | ↘ dec |
| $(-2, 0)$ | − | − | + | **+** | ↗ inc |
| $(0, 2)$ | + | − | + | **−** | ↘ dec |
| $(2, +\infty)$ | + | + | + | **+** | ↗ inc |

**Extrema:**
- $x=-2$: $f'$ changes $-\to+$ → **local min**, $f(-2) = 16 - 32 + 16 = 0$
- $x=0$: $f'$ changes $+\to-$ → **local max**, $f(0) = 16$
- $x=2$: $f'$ changes $-\to+$ → **local min**, $f(2) = 16 - 32 + 16 = 0$

</details>

---

### ✏️ 2017 — Q2(a)

Find increasing/decreasing intervals and local extrema for $f(x) = 2x^3 - 5x^2 + 4x - 7$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

$$f'(x) = 6x^2 - 10x + 4 = 2(3x^2 - 5x + 2) = 2(3x-2)(x-1)$$

**Critical points:** $x = \dfrac{2}{3}$, $x = 1$

**Sign table:**

| Interval | $(3x-2)$ | $(x-1)$ | $f'(x)$ | $f$ |
|----------|----------|---------|---------|-----|
| $(-\infty, 2/3)$ | − | − | + | ↗ inc |
| $(2/3, 1)$ | + | − | − | ↘ dec |
| $(1, +\infty)$ | + | + | + | ↗ inc |

**Extrema:**
- Local max at $x = 2/3$: $f(2/3) = 2(8/27) - 5(4/9) + 4(2/3) - 7 = \dfrac{16}{27} - \dfrac{20}{9} + \dfrac{8}{3} - 7$

  $= \dfrac{16}{27} - \dfrac{60}{27} + \dfrac{72}{27} - \dfrac{189}{27} = \dfrac{16-60+72-189}{27} = \dfrac{-161}{27} \approx -5.96$

- Local min at $x = 1$: $f(1) = 2 - 5 + 4 - 7 = -6$

</details>

---

### ✏️ 2016 — Q2(b)

For $f(x) = 2x^3 - 15x^2 + 36x + 10$, find stationary points, increasing/decreasing intervals, and local max/min. **[4 marks]**

<details>
<summary>✅ Solution</summary>

$$f'(x) = 6x^2 - 30x + 36 = 6(x^2 - 5x + 6) = 6(x-2)(x-3)$$

**Critical points:** $x = 2$ and $x = 3$

**Sign analysis:**

| Interval | $f'(x)$ | $f$ |
|----------|---------|-----|
| $(-\infty,2)$ | + | ↗ increasing |
| $(2,3)$ | − | ↘ decreasing |
| $(3,+\infty)$ | + | ↗ increasing |

**Extrema:**
- Local max at $x=2$: $f(2) = 16 - 60 + 72 + 10 = \mathbf{38}$
- Local min at $x=3$: $f(3) = 54 - 135 + 108 + 10 = \mathbf{37}$

**Using second derivative test:**
$f''(x) = 12x - 30$
- $f''(2) = 24-30 = -6 < 0$ → local maximum ✓
- $f''(3) = 36-30 = 6 > 0$ → local minimum ✓

</details>

---

### ✏️ 2015 — Q2(c)

For $f(x) = x^3 - 6x^2 + 9x - 8$, find critical numbers and relative extrema. **[6 marks]**

<details>
<summary>✅ Solution</summary>

$$f'(x) = 3x^2 - 12x + 9 = 3(x^2-4x+3) = 3(x-1)(x-3)$$

**Critical numbers:** $x = 1$, $x = 3$

$f''(x) = 6x - 12$

- $f''(1) = -6 < 0$ → **local maximum** at $x=1$, $f(1) = 1-6+9-8 = -4$
- $f''(3) = 6 > 0$ → **local minimum** at $x=3$, $f(3) = 27-54+27-8 = -8$

**Sketch:**
```
   y
   |    local max (-4)
   |   /\
   |  /  \
   | /    \  local min (-8)
   |/      \/
───┼──1──2──3──► x
   |
```

</details>

---

### ✏️ 2014 — Q2(c)

Find increasing/decreasing intervals and extrema for $f(x) = x^4 + 2x^3 - 3x^2 - 4x + 4$. **[7 marks]**

<details>
<summary>✅ Solution</summary>

$$f'(x) = 4x^3 + 6x^2 - 6x - 4 = 2(2x^3 + 3x^2 - 3x - 2)$$

Factor: test $x=1$: $2+3-3-2=0$ ✓ → $(x-1)$ is a factor.

$$2x^3+3x^2-3x-2 = (x-1)(2x^2+5x+2) = (x-1)(2x+1)(x+2)$$

**Critical points:** $x = 1, -\dfrac{1}{2}, -2$

**Sign analysis of $f'(x) = 2(x-1)(2x+1)(x+2)$:**

| Interval | $f'(x)$ | $f$ |
|----------|---------|-----|
| $(-\infty,-2)$ | + | ↗ |
| $(-2,-1/2)$ | − | ↘ |
| $(-1/2,1)$ | + | ↗ |
| $(1,+\infty)$ | − | ... wait |

Let me recheck signs. At $x=0$ (in $(-1/2,1)$): $f'(0) = 2(-1)(1)(2) = -4 < 0$.

Correction:

| Interval | factor signs | $f'$ |
|----------|-------------|------|
| $x < -2$ | $(-)(-)(-)$ | $-$ | ↘ |
| $-2<x<-1/2$ | $(-)(-)( +)$ | $+$ | ↗ |
| $-1/2<x<1$ | $(-)(+)(+)$ | $-$ | ↘ |
| $x>1$ | $(+)(+)(+)$ | $+$ | ↗ |

**Extrema:**
- $x=-2$: $-\to+$ → **local min**, $f(-2) = 16-16-12+8+4 = 0$
- $x=-1/2$: $+\to-$ → **local max**, $f(-1/2) = 1/16 - 1/4 - 3/4 + 2 + 4 = 5.0625$
- $x=1$: $-\to+$ → **local min**, $f(1) = 1+2-3-4+4 = 0$

</details>

---

### ✏️ 2013 (Supple.) — Q2(b)

Find maximum and minimum of $u = \dfrac{4}{x} + \dfrac{36}{y}$ subject to $x + y = 2$. **[5 marks]**

<details>
<summary>✅ Solution</summary>

Substitute $y = 2 - x$:

$$u(x) = \frac{4}{x} + \frac{36}{2-x}$$

$$u'(x) = -\frac{4}{x^2} + \frac{36}{(2-x)^2} = 0$$

$$\frac{36}{(2-x)^2} = \frac{4}{x^2} \implies \frac{9}{(2-x)^2} = \frac{1}{x^2}$$

$$3x = 2-x \implies 4x = 2 \implies x = \frac{1}{2}, \quad y = \frac{3}{2}$$

$u''(x) = \dfrac{8}{x^3} + \dfrac{72}{(2-x)^3}$

At $x=1/2$: $u'' = 64 + 64/27 > 0$ → **local minimum**

$$u_{\min} = \frac{4}{1/2} + \frac{36}{3/2} = 8 + 24 = \mathbf{32}$$

</details>

---

## 🧪 Practice Problems

---

**P1.** Find all critical points and classify them for $f(x) = x^3 - 3x + 2$.

<details><summary>Solution</summary>

$f'(x)=3x^2-3=3(x-1)(x+1)$. Critical: $x=\pm1$.  
$f''(x)=6x$; $f''(-1)=-6<0$ → local max $f(-1)=4$; $f''(1)=6>0$ → local min $f(1)=0$.

</details>

---

**P2.** Find intervals of increase/decrease for $f(x) = \sin x - x$ on $[0,2\pi]$.

<details><summary>Solution</summary>

$f'(x) = \cos x - 1 \leq 0$ always (equals 0 only at $x=0,2\pi$).  
$f$ is **decreasing** on $[0,2\pi]$.

</details>

---

**P3.** Classify all extrema of $f(x) = x^4 - 4x^3$.

<details><summary>Solution</summary>

$f'=4x^3-12x^2=4x^2(x-3)$. Critical: $x=0,3$.  
At $x=0$: $f'$ doesn't change sign ($+\to+$... wait: for $x<0$: $4x^2>0$, $(x-3)<0$ → $f'<0$; for $0<x<3$: $f'>4(0)(neg)<0$ → still $<0$). So $x=0$ is neither max nor min (inflection).  
At $x=3$: $f'$ changes $-\to+$ → **local min**, $f(3)=81-108=-27$.

</details>

---

**P4.** Find the global max and min of $f(x) = x^3 - 3x$ on $[-2,3]$.

<details><summary>Solution</summary>

$f'=3x^2-3=0 \Rightarrow x=\pm1$.  
$f(-2)=-2, f(-1)=2, f(1)=-2, f(3)=18$.  
Global max = $18$ at $x=3$; global min = $-2$ at $x=-1$ or $x=1$ ... actually min is $-2$ at $x=1$ and $-2$.

</details>

---

**P5.** Find the relative extrema of $f(x)=x^2e^{-x}$.

<details><summary>Solution</summary>

$f'=2xe^{-x}-x^2e^{-x}=xe^{-x}(2-x)$. Critical: $x=0,2$.  
$x=0$: $-\to+$ → local min, $f(0)=0$; $x=2$: $+\to-$ → local max, $f(2)=4e^{-2}$.

</details>

---

**P6.** Find all stationary points of $f(x)=3x^4-16x^3+24x^2-5$.

<details><summary>Solution</summary>

$f'=12x^3-48x^2+48x=12x(x^2-4x+4)=12x(x-2)^2$.  
Critical: $x=0$ (local min since $f'$ changes $-\to+$), and $x=2$ (inflection, $f'$ doesn't change sign).  
$f(0)=-5$ (local min); $f(2)=48-128+96-5=11$ (inflection point).

</details>

---

**P7.** A box with a square base and open top has volume $32$ cm³. Find dimensions to minimize surface area.

<details><summary>Solution</summary>

Let base = $x$, height = $h$. $V=x^2h=32 \Rightarrow h=32/x^2$.  
$S = x^2 + 4xh = x^2 + 128/x$.  
$S'=2x-128/x^2=0 \Rightarrow x^3=64 \Rightarrow x=4$ cm, $h=2$ cm.  
$S_{\min}=16+32=48$ cm².

</details>

---

**P8.** Find the point on the parabola $y=x^2$ closest to $(3,0)$.

<details><summary>Solution</summary>

$D^2=(x-3)^2+x^4$. $(D^2)'=2(x-3)+4x^3=0$.  
Try $x=1$: $-4+4=0$ ✓. Point: $(1,1)$.

</details>

---

**P9.** Find intervals of concavity and inflection points of $f(x) = x^4 - 6x^2$.

<details><summary>Solution</summary>

$f''=12x^2-12=12(x-1)(x+1)$.  
Concave up: $x<-1$ or $x>1$; concave down: $-1<x<1$.  
Inflection points: $x=\pm1$.

</details>

---

**P10.** Find absolute max/min of $f(x)=x\ln x$ on $[1/e,\, e]$.

<details><summary>Solution</summary>

$f'=\ln x+1=0 \Rightarrow x=1/e$.  
$f(1/e)=(1/e)(-1)=-1/e\approx-0.368$.  
$f(e)=e\cdot1=e\approx2.718$.  
Absolute min: $-1/e$ at $x=1/e$; absolute max: $e$ at $x=e$.

</details>

---

## 📖 References

1. **Thomas' Calculus** — §4.1–4.4: Applications of Derivatives
2. **Stewart's Calculus** — Chapter 4: Applications of Differentiation
3. **Paul's Online Notes** — [Critical Points](https://tutorial.math.lamar.edu/Classes/CalcI/CriticalPoints.aspx) | [Min/Max Values](https://tutorial.math.lamar.edu/Classes/CalcI/AbsExtrema.aspx)
4. **3Blue1Brown** — [Derivatives visually](https://www.youtube.com/watch?v=9vKqVkMQHKk)
5. **Khan Academy** — [Increasing/Decreasing Intervals](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-5-3/v/increasing-decreasing-intervals-review)
