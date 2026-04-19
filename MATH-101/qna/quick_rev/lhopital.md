# L'Hôpital's Rule — Shortcut Rules Sheet

> A compact, exam-focused cheat sheet to **recognize patterns fast and solve limits under time pressure**.  
> Use this as a decision aid: substitute first, identify the indeterminate form, transform if needed, then apply L'Hôpital only when appropriate.

---

## When You Can Apply L'Hôpital Directly

**Only** apply L'Hôpital for the forms:

$$\frac{0}{0} \quad \text{or} \quad \frac{\infty}{\infty}$$

**Then:**

$$\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$$

---

## When You Must Transform First

### Product Form

Common patterns: $x\ln x,\; x^2\ln x,\; (\ln x)\cdot f(x)$

**Trick:**

$$x\ln x = \frac{\ln x}{1/x}$$

### Difference Form — $\infty - \infty$

**Tricks:**
- Rationalize expressions like $\sqrt{x^2+x}-x$
- Combine terms into a single fraction before applying L'Hôpital

### Power Forms — Most Important

| Form | Strategy |
|------|----------|
| $0^0$ | Take $\ln$ |
| $1^\infty$ | Take $\ln$ |
| $\infty^0$ | Take $\ln$ |

---

## Standard Log Trick — Memorize

If $y = f(x)^{g(x)}$, then:

$$\ln y = g(x)\ln f(x)$$

Take limits on $\ln y$, then exponentiate.

---

## Critical Limits You Must Know

**Fundamental Limits:**

$$\lim_{x\to 0}\frac{\sin x}{x}=1$$

$$\lim_{x\to 0}\frac{e^x-1}{x}=1$$

$$\lim_{x\to 0}\frac{\ln(1+x)}{x}=1$$

**Log Behavior:**

$$\lim_{x\to 0^+} x\ln x = 0$$

**Exponential Limit:**

$$\lim_{x\to\infty}\left(1+\frac{1}{x}\right)^x = e$$

---

## Power Type Shortcut — High Value

If $\lim_{x\to 0^+} x^{f(x)}$ and $f(x)\to 0$, then the limit usually equals **1** because $f(x)\ln x\to 0$.

---

## When NOT to Use L'Hôpital

Avoid L'Hôpital when:

- The expression is **not indeterminate** (e.g., $\frac{5}{0},\; \frac{\infty}{5}$)
- **Simpler algebra** works (e.g., factor $\frac{x^2-4}{x-2}$)
- A **standard limit** applies directly (e.g., $\frac{\sin x}{x}$)

---

## Fast Decision Flow — Exam Method

**Step 1:** Substitute the value.  
**Step 2:** Identify the form.

| Form | Action |
|------|--------|
| $\dfrac{0}{0},\;\dfrac{\infty}{\infty}$ | L'Hôpital |
| Product | Convert to fraction |
| $\infty-\infty$ | Rationalize |
| Power | Take log |

**Step 3:** Simplify before differentiating.  
**Step 4:** Apply L'Hôpital only if necessary.

---

## Ultra-Fast Recognition Patterns

| Expression | Limit Point | Answer |
|------------|-------------|--------|
| $x\ln x$ | $x\to 0^+$ | $0$ |
| $x^x$ | $x\to 0^+$ | $1$ |
| $(1+x)^{1/x}$ | $x\to 0$ | $e$ |
| $\left(1+\dfrac{1}{x}\right)^x$ | $x\to\infty$ | $e$ |
| $(\sin x)^x$ | $x\to 0^+$ | $1$ |

---

## Final Insight

Most students **overuse L'Hôpital**. Top scorers:
- Recognize patterns quickly
- Use known limits and approximations
- Avoid unnecessary differentiation

---

## Trap Problems

> Designed to **break shortcut thinking** and force correct reasoning. Each includes why the shortcut fails and the correct approach.

---

### Trap 1 — Looks Like $x^x$ But Isn't

**Problem:**

$$\lim_{x\to 0^+} (2x)^x$$

**Why It's a Trap:**  
You might assume $x^x\to 1$ and jump to the same conclusion without justification.

**Solution:**

Let $y=(2x)^x$. Then:

$$\ln y = x\ln(2x)=x(\ln 2+\ln x)=x\ln 2 + x\ln x$$

Both terms tend to $0$, so $\ln y\to 0$ and $y\to 1$.

> **Lesson:** Even if the limit equals $1$, justify it via logs.

$$\boxed{1}$$

---

### Trap 2 — Product That Looks Harmless

**Problem:**

$$\lim_{x\to 0^+} \ln x\cdot \sin x$$

**Why It's a Trap:**  
$\ln x\to -\infty$ and $\sin x\to 0$ — the product is indeterminate.

**Solution:**

Rewrite as a fraction:

$$\ln x\cdot \sin x = \frac{\ln x}{1/\sin x}$$

Apply L'Hôpital:

$$\frac{1/x}{-\cos x/\sin^2 x} = -\frac{\sin^2 x}{x\cos x}$$

As $x\to 0$: numerator $\sim x^2$, denominator $\sim x$, so the expression $\to 0$.

$$\boxed{0}$$

---

### Trap 3 — $0^0$ But Not 1

**Problem:**

$$\lim_{x\to 0^+} e^{-1/x}$$

**Why It's a Trap:**  
Do not force a $0^0$ heuristic.

**Solution:**  
As $x\to 0^+$, $-1/x\to -\infty$, so $e^{-1/x}\to 0$.

$$\boxed{0}$$

---

### Trap 4 — Looks Like a Standard Limit But Isn't

**Problem:**

$$\lim_{x\to 0} \frac{\ln(1+x^2)}{x}$$

**Why It's a Trap:**  
$\ln(1+x)/x\to 1$ is **not** the same as $\ln(1+x^2)/x$.

**Solution:**  
$\ln(1+x^2)\sim x^2$, so:

$$\frac{\ln(1+x^2)}{x} \sim \frac{x^2}{x} = x \to 0$$

$$\boxed{0}$$

---

### Trap 5 — Hidden $\infty - \infty$

**Problem:**

$$\lim_{x\to\infty} \bigl(x-\ln x\bigr)$$

**Why It's a Trap:**  
Subtraction of two infinities might suggest a finite limit.

**Solution:**  
Compare growth rates: $x$ dominates $\ln x$, so the difference $\to\infty$.

$$\boxed{\infty}$$

---

### Trap 6 — Fake $1^\infty$

**Problem:**

$$\lim_{x\to\infty}\left(1+\frac{1}{x^2}\right)^x$$

**Why It's a Trap:**  
Looks like $(1+\text{small})^{\text{large}}$, so students guess $e$.

**Solution:**

Let $y=\left(1+\dfrac{1}{x^2}\right)^x$. Then:

$$\ln y = x\ln\left(1+\frac{1}{x^2}\right)\sim x\cdot\frac{1}{x^2}=\frac{1}{x}\to 0$$

So $y\to 1$.

$$\boxed{1}$$

---

### Trap 7 — Ratio With Hidden Behavior

**Problem:**

$$\lim_{x\to 0^+}\frac{x^x-1}{x}$$

**Why It's a Trap:**  
$x^x\to 1$ suggests $0/0$, but the numerator has a subtle divergence.

**Solution:**

Use expansion:

$$x^x = e^{x\ln x}\approx 1 + x\ln x$$

Then:

$$\frac{x^x-1}{x}\approx \frac{x\ln x}{x}=\ln x\to -\infty$$

$$\boxed{-\infty}$$

---

### Trap 8 — Oscillation

**Problem:**

$$\lim_{x\to 0^+} x\sin\left(\frac{1}{x}\right)$$

**Why It's a Trap:**  
$\sin(1/x)$ oscillates wildly — L'Hôpital cannot be applied.

**Solution:**  
Use the Squeeze Theorem:

$$-|x|\le x\sin\left(\frac{1}{x}\right)\le |x|$$

Both bounds $\to 0$, so by squeeze:

$$\boxed{0}$$

---

## Master-Level Takeaways

- **Never** blindly apply pattern heuristics — always verify via logs or expansions
- **Growth rates matter:** $\ln x \ll x \ll e^x$
- **Approximation is powerful:** $\ln(1+x)\sim x,\quad \sin x\sim x$
