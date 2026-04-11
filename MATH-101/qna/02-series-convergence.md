# Chapter 2: Infinite Series & Convergence

> **Covered in:** Part A, Q2 of most exams (2012–2019)  
> **Marks:** 4 marks per sub-question

---

## 📖 Theory & Convergence Tests

### 2.1 Definitions

An **infinite series** is $\displaystyle\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots$

- **Partial sum:** $S_N = \displaystyle\sum_{n=1}^{N} a_n$
- **Convergent** if $\lim_{N\to\infty} S_N = S$ (finite)
- **Divergent** otherwise

---

### 2.2 Summary of Convergence Tests

| Test | Condition | Conclusion |
|------|-----------|------------|
| **n-th term** | $\lim_{n\to\infty} a_n \neq 0$ | Diverges |
| **Geometric** | $\sum ar^n$, $\|r\|<1$ | Converges to $\frac{a}{1-r}$ |
| **p-series** | $\sum \frac{1}{n^p}$ | Converges iff $p>1$ |
| **D'Alembert Ratio** | $L = \lim\frac{a_{n+1}}{a_n}$ | $L<1$: conv; $L>1$: div; $L=1$: inconclusive |
| **Root (Cauchy)** | $L = \lim (a_n)^{1/n}$ | Same as ratio |
| **Comparison** | $a_n \leq b_n$, $\sum b_n$ conv. | $\sum a_n$ converges |
| **Limit Comparison** | $\lim \frac{a_n}{b_n} = c > 0$ | Both conv. or both div. |
| **Integral Test** | $f$ pos., decr., $\int_1^\infty f\,dx$ | Same convergence |
| **Alternating (Leibniz)** | $a_n\searrow 0$ alternating | Converges |
| **Raabe's Test** | $L = \lim n\!\left(1-\frac{a_{n+1}}{a_n}\right)$ | $L>1$: conv; $L<1$: div |

![Convergence Tests Flowchart](https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Comparison_of_convergence.png/500px-Comparison_of_convergence.png)
*Figure 2.1 — Comparing convergence rates (Wikimedia Commons)*

---

### 2.3 Key Standard Results

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}, \qquad \sum_{n=0}^{\infty} r^n = \frac{1}{1-r}\; (|r|<1)$$

$$\sum_{n=1}^{\infty} \frac{1}{n(n+1)} = 1, \qquad \sum_{n=1}^{\infty} \frac{1}{n} = \infty \text{ (harmonic, diverges)}$$

---

## 📝 Past Exam Questions & Solutions

---

### ✏️ 2019 — Q2(a)

Test for convergence: $\displaystyle\sum_{n=1}^{\infty}\frac{3^n}{5^n - 1}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Method: Limit Comparison Test**

Compare with $b_n = \left(\dfrac{3}{5}\right)^n$:

$$\lim_{n\to\infty}\frac{a_n}{b_n} = \lim_{n\to\infty}\frac{3^n/(5^n-1)}{(3/5)^n} = \lim_{n\to\infty}\frac{3^n \cdot 5^n}{(5^n-1)\cdot 3^n} = \lim_{n\to\infty}\frac{5^n}{5^n-1} = 1 > 0$$

Since $\displaystyle\sum_{n=1}^{\infty}\left(\dfrac{3}{5}\right)^n$ is a geometric series with $r = 3/5 < 1$ (converges), by the Limit Comparison Test, $\displaystyle\sum_{n=1}^{\infty}\dfrac{3^n}{5^n-1}$ **converges**. ✓

**Alternatively (D'Alembert Ratio Test):**

$$\frac{a_{n+1}}{a_n} = \frac{3^{n+1}}{5^{n+1}-1}\cdot\frac{5^n-1}{3^n} = \frac{3(5^n-1)}{5^{n+1}-1}$$

As $n\to\infty$: $\dfrac{3\cdot 5^n}{5\cdot 5^n} = \dfrac{3}{5} < 1$. **Converges.** ✓

</details>

---

### ✏️ 2018 — Q2(b)

Examine convergence: $\displaystyle\frac{1}{3} + \frac{1.2}{3.5} + \frac{1.2.3}{3.5.7} + \frac{1.2.3.4}{3.5.7.9} + \cdots$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

**Identify the general term:**

$$a_n = \frac{n!}{3\cdot5\cdot7\cdots(2n+1)} = \frac{n!}{\prod_{k=1}^{n}(2k+1)}$$

**Ratio Test:**

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)!}{\prod_{k=1}^{n+1}(2k+1)} \cdot \frac{\prod_{k=1}^{n}(2k+1)}{n!} = \frac{n+1}{2n+3}$$

$$L = \lim_{n\to\infty}\frac{n+1}{2n+3} = \frac{1}{2} < 1$$

By the Ratio Test, the series **converges**. ✓

</details>

---

### ✏️ 2017 — Q2(b)

Test convergence: (i) $\displaystyle\sum_{n=1}^{\infty}\frac{n-1}{2n+1}$ and (ii) $\displaystyle\sum_{n=1}^{\infty}\frac{n^2}{(2n+1)!}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

**(i)** $a_n = \dfrac{n-1}{2n+1}$

**n-th term test:**
$$\lim_{n\to\infty}\frac{n-1}{2n+1} = \frac{1}{2} \neq 0$$

Since the limit is non-zero, the series **diverges** by the n-th term test. ✓

**(ii)** $a_n = \dfrac{n^2}{(2n+1)!}$

**Ratio Test:**
$$\frac{a_{n+1}}{a_n} = \frac{(n+1)^2}{(2n+3)!}\cdot\frac{(2n+1)!}{n^2} = \frac{(n+1)^2}{n^2}\cdot\frac{1}{(2n+3)(2n+2)}$$

$$L = \lim_{n\to\infty}\frac{(n+1)^2}{n^2}\cdot\frac{1}{4n^2+\cdots} = 1 \cdot 0 = 0 < 1$$

The series **converges**. ✓

</details>

---

### ✏️ 2017 — Q2(c)

Evaluate $\displaystyle\lim_{x\to 0}\frac{e^x + e^{-x} - 2}{x^2}$ **[4 marks]**

<details>
<summary>✅ Solution</summary>

Form $0/0$. Apply L'Hôpital twice:

$$\lim_{x\to 0}\frac{e^x+e^{-x}-2}{x^2} \xrightarrow{\text{L'H}} \lim_{x\to 0}\frac{e^x-e^{-x}}{2x} \xrightarrow{\text{L'H}} \lim_{x\to 0}\frac{e^x+e^{-x}}{2} = \frac{1+1}{2} = \boxed{1}$$

**Alternatively (Taylor series):**
$e^x + e^{-x} - 2 = \left(1+x+\frac{x^2}{2}+\cdots\right)+\left(1-x+\frac{x^2}{2}+\cdots\right)-2 = x^2 + \frac{x^4}{12}+\cdots$

$$\frac{x^2+\frac{x^4}{12}+\cdots}{x^2} \to 1$$

</details>

---

### ✏️ 2016 (Supple.) — Q1(b)

If $y = e^{m\cos^{-1}x}$, show that $(1-x^2)y_{n+2} - (2n+1)xy_{n+1} - (n^2+m^2)y_n = 0$. **[4 marks]**

<details>
<summary>✅ Solution</summary>

Let $y = e^{m\cos^{-1}x}$.

**Step 1:** $y_1 = y' = e^{m\cos^{-1}x}\cdot\dfrac{-m}{\sqrt{1-x^2}} = \dfrac{-my}{\sqrt{1-x^2}}$

So $y_1\sqrt{1-x^2} = -my$. Squaring: $y_1^2(1-x^2) = m^2y^2$.

**Step 2:** Differentiate: $2y_1y_2(1-x^2) + y_1^2(-2x) = 2m^2yy_1$

Dividing by $2y_1$: $y_2(1-x^2) - xy_1 = m^2y$

i.e., $(1-x^2)y_2 - xy_1 - m^2y = 0$. ← base case

**Step 3:** Apply Leibnitz's theorem (differentiate $n$ times):

$$\frac{d^n}{dx^n}\big[(1-x^2)y_2\big] = (1-x^2)y_{n+2} + n(-2x)y_{n+1} + \frac{n(n-1)}{2}(-2)y_n$$

$$\frac{d^n}{dx^n}[-xy_1] = -xy_{n+1} - ny_n$$

$$\frac{d^n}{dx^n}[-m^2y] = -m^2y_n$$

Adding all terms:
$$(1-x^2)y_{n+2} - 2nxy_{n+1} - n(n-1)y_n - xy_{n+1} - ny_n - m^2y_n = 0$$

$$(1-x^2)y_{n+2} - (2n+1)xy_{n+1} - (n^2 - n + n + m^2)y_n = 0$$

$$\boxed{(1-x^2)y_{n+2} - (2n+1)xy_{n+1} - (n^2+m^2)y_n = 0}$$ ✓

</details>

---

### ✏️ 2016 (Supple.) — Q2(c)

Test convergence of $\displaystyle\left(\frac{1}{3}\right)^2+\left(\frac{1.4}{3.6}\right)^2+\left(\frac{1.4.7}{3.6.9}\right)^2+\cdots$ **[6 marks]**

<details>
<summary>✅ Solution</summary>

**General term:**
$$a_n = \left(\frac{1\cdot4\cdot7\cdots(3n-2)}{3\cdot6\cdot9\cdots(3n)}\right)^2$$

Let $u_n = \dfrac{1\cdot4\cdot7\cdots(3n-2)}{3\cdot6\cdot9\cdots(3n)}$.

**Ratio:**
$$\frac{u_{n+1}}{u_n} = \frac{3n+1}{3n+3} = \frac{3n+1}{3(n+1)}$$

$$\frac{a_{n+1}}{a_n} = \left(\frac{3n+1}{3n+3}\right)^2 \to 1^2 = 1 \quad \text{as } n\to\infty$$

Ratio test is **inconclusive**. Use **Raabe's Test**:

$$n\left(1 - \frac{a_{n+1}}{a_n}\right) = n\left(1 - \frac{(3n+1)^2}{(3n+3)^2}\right) = n\cdot\frac{(3n+3)^2-(3n+1)^2}{(3n+3)^2}$$

$(3n+3)^2-(3n+1)^2 = [(3n+3)-(3n+1)][(3n+3)+(3n+1)] = 2(6n+4)$

$$= n\cdot\frac{2(6n+4)}{(3n+3)^2} = \frac{n\cdot 2(6n+4)}{9(n+1)^2} \to \frac{2\cdot6}{9} = \frac{12}{9} = \frac{4}{3} > 1$$

By Raabe's Test, the series **converges**. ✓

</details>

---

### ✏️ 2015 — Q6(c) / 2014 — Q6(c)

Examine convergence: $\displaystyle\frac{1}{3} + \frac{1.2}{3.5} + \frac{1.2.3}{3.5.7} + \cdots$ **[8.5 marks]**

(Same series as 2018 Q2(b) — see solution above.)

---

### ✏️ 2014 — Q2(c)

Find the interval of increase/decrease and extrema for $f(x) = x^4 + 2x^3 - 3x^2 - 4x + 4$. **[7 marks]**

*(See Chapter 3 for solution.)*

---

### ✏️ 2012 — Q2(a)

Test convergence/divergence of $\displaystyle\frac{x}{1\cdot2} + \frac{x^2}{3\cdot4} + \frac{x^3}{5\cdot6} + \frac{x^4}{7\cdot8} + \cdots$ **[6 marks]**

<details>
<summary>✅ Solution</summary>

General term: $a_n = \dfrac{x^n}{(2n-1)(2n)}$

**Ratio Test (for $x > 0$):**

$$\frac{a_{n+1}}{a_n} = \frac{x^{n+1}}{(2n+1)(2n+2)}\cdot\frac{(2n-1)(2n)}{x^n} = x\cdot\frac{(2n-1)(2n)}{(2n+1)(2n+2)} \to x \cdot 1 = x$$

- If $|x| < 1$: **Converges**
- If $|x| > 1$: **Diverges**
- If $x = 1$: $a_n = \dfrac{1}{(2n-1)(2n)} \sim \dfrac{1}{4n^2}$, which converges (p-series, $p=2>1$). **Converges at $x=1$.**
- If $x = -1$: Alternating series with $|a_n|\to 0$. **Converges at $x=-1$.**

**Interval of convergence:** $\boxed{-1 \leq x \leq 1}$

</details>

---

## 🧪 Practice Problems

---

**P1.** Test for convergence: $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{n^n}$

<details><summary>Solution</summary>

Ratio test: $\dfrac{(n+1)!/( n+1)^{n+1}}{n!/n^n} = \dfrac{n+1}{(n+1)^{n+1}/n^n} = \dfrac{n^n}{(n+1)^n} = \left(\dfrac{n}{n+1}\right)^n \to e^{-1} < 1$.  
**Converges.**

</details>

---

**P2.** Test for convergence: $\displaystyle\sum_{n=1}^{\infty}\frac{2^n}{n^2}$

<details><summary>Solution</summary>

Ratio test: $\dfrac{2^{n+1}/(n+1)^2}{2^n/n^2} = 2\left(\dfrac{n}{n+1}\right)^2 \to 2 > 1$.  
**Diverges.**

</details>

---

**P3.** Test: $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{\sqrt{n}}$

<details><summary>Solution</summary>

Alternating series; $a_n = 1/\sqrt{n}$ is decreasing with $a_n\to 0$.  
**Converges** (by Alternating Series Test). (Conditionally convergent, since $\sum 1/\sqrt{n}$ diverges.)

</details>

---

**P4.** Test: $\displaystyle\sum_{n=1}^{\infty}\frac{\ln n}{n^2}$

<details><summary>Solution</summary>

For large $n$, $\ln n < n^{1/2}$, so $\dfrac{\ln n}{n^2} < \dfrac{n^{1/2}}{n^2} = \dfrac{1}{n^{3/2}}$.  
Since $\sum 1/n^{3/2}$ converges (p=3/2>1), by comparison, **Converges**.

</details>

---

**P5.** Test: $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^2}$

<details><summary>Solution</summary>

Integral test: $\int_2^\infty \dfrac{dx}{x(\ln x)^2} = \left[-\dfrac{1}{\ln x}\right]_2^\infty = \dfrac{1}{\ln 2} < \infty$.  
**Converges.**

</details>

---

**P6.** Test: $\displaystyle\sum_{n=1}^{\infty}\left(\frac{n}{n+1}\right)^{n^2}$

<details><summary>Solution</summary>

Root test: $\left[\left(\dfrac{n}{n+1}\right)^{n^2}\right]^{1/n} = \left(\dfrac{n}{n+1}\right)^n = \left(1 - \dfrac{1}{n+1}\right)^n \to e^{-1} < 1$.  
**Converges.**

</details>

---

**P7.** Test: $\displaystyle\frac{1}{2}+\frac{1\cdot3}{2\cdot4}+\frac{1\cdot3\cdot5}{2\cdot4\cdot6}+\cdots$

<details><summary>Solution</summary>

$a_n = \prod_{k=1}^{n}\dfrac{2k-1}{2k}$. Ratio: $\dfrac{a_{n+1}}{a_n} = \dfrac{2n+1}{2n+2}\to 1$.  
Raabe: $n\left(1-\dfrac{2n+1}{2n+2}\right) = \dfrac{n}{2n+2}\to\dfrac{1}{2}<1$.  
**Diverges.**

</details>

---

**P8.** Test: $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}$ (Gregory's series, $|x|\leq 1$)

<details><summary>Solution</summary>

Alternating series with $a_n = \dfrac{x^{2n+1}}{2n+1}$, decreasing to 0 for $|x|\leq 1$.  
**Converges for** $|x|\leq 1$. (This is $\tan^{-1}x$.)

</details>

---

**P9.** Find the sum: $\displaystyle 1 - \frac{1}{2} + \frac{1}{4} - \frac{1}{8} + \cdots$

<details><summary>Solution</summary>

Geometric series: $a=1$, $r=-1/2$. Sum $= \dfrac{1}{1-(-1/2)} = \dfrac{1}{3/2} = \dfrac{2}{3}$.

</details>

---

**P10.** Test: $\displaystyle\sum_{n=1}^{\infty}\frac{4^n\cdot n!^2}{(2n)!}$

<details><summary>Solution</summary>

By Wallis-type analysis or Stirling: $\dfrac{4^n (n!)^2}{(2n)!} \sim \dfrac{4^n \cdot 2\pi n (n/e)^{2n}}{4\pi n (2n/e)^{2n}} \cdot\sqrt{\pi n} = \sqrt{\pi n}\to\infty$.  
Alternatively, ratio test: $\dfrac{a_{n+1}}{a_n} = \dfrac{4(n+1)^2}{(2n+2)(2n+1)} = \dfrac{4(n+1)^2}{4(n+1)(n+1/2)} = \dfrac{n+1}{n+1/2}\to 1$.  
Apply Raabe: $n(1-\frac{n+1}{n+1/2}) = n\cdot\dfrac{-1/2}{n+1/2}\to -1/2 < 1$. **Diverges.**

</details>

---

## 📖 References

1. **Thomas' Calculus** — Chapter 10: Infinite Sequences and Series
2. **Arfken & Weber** *Mathematical Methods for Physicists* — Ch. 5
3. **Paul's Online Notes** — [Series & Convergence Tests](https://tutorial.math.lamar.edu/Classes/CalcII/ConvergenceOfSeries.aspx)
4. **MIT 18.01SC** — [Series](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/)
5. **Wolfram MathWorld** — [Convergence Tests](https://mathworld.wolfram.com/ConvergenceTests.html)
6. **Khan Academy** — [AP Calculus BC: Infinite Series](https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new)
