# Module 03 — Derivatives

> **Module status:** Complete
> **Prerequisite module:** [`02-limits-and-continuity`](../02-limits-and-continuity/README.md)
> **Next module:** [`04-applications-of-derivatives`](../04-applications-of-derivatives/README.md) *(coming soon)*

## Overview

This module builds the theory and machinery of **differentiation** — the mathematics of instantaneous rates of change. Starting from the limit definition of the derivative, we develop the full toolbox professional mathematicians, scientists, and engineers use to differentiate essentially any function encountered in practice: polynomials, exponentials, logarithms, trigonometric and hyperbolic functions, and arbitrary compositions, products, quotients, and implicitly-defined curves.

By the end of this module you will be able to differentiate almost any elementary function fluently, reason about higher-order derivatives and concavity, solve related-rates word problems, and use linear approximation to estimate function values and propagate error.

> **Note:** This module builds the *mechanics* of differentiation. Applications such as optimization, curve sketching, and L'Hôpital's Rule are covered in Module 04.

## Files in This Module

| # | File | Topic |
|---|------|-------|
| 1 | [`definition.md`](definition.md) | The limit definition of the derivative, differentiability, and its relationship to continuity |
| 2 | [`differentiation-rules.md`](differentiation-rules.md) | Constant, power, sum/difference, product, quotient rules; derivatives of exponential, logarithmic, trigonometric, inverse trigonometric, hyperbolic, and inverse hyperbolic functions |
| 3 | [`chain-rule.md`](chain-rule.md) | Differentiating compositions of functions, nested and repeated chain rule |
| 4 | [`implicit-differentiation.md`](implicit-differentiation.md) | Differentiating equations that are not solved for $y$ |
| 5 | [`logarithmic-differentiation.md`](logarithmic-differentiation.md) | Using logarithms to differentiate products, quotients, and variable exponents |
| 6 | [`higher-order-derivatives.md`](higher-order-derivatives.md) | Second, third, and $n$th derivatives; concavity and inflection points |
| 7 | [`related-rates.md`](related-rates.md) | Relating the rates of change of interdependent quantities |
| 8 | [`linear-approximation-and-differentials.md`](linear-approximation-and-differentials.md) | Tangent-line approximation, differentials, and error estimation |
| 9 | [`examples.md`](examples.md) | Standalone practice workbook: 50+ fully worked problems, mixed difficulty |

## Learning Roadmap

```
                    ┌───────────────────┐
                    │   definition.md   │
                    │ (limit definition │
                    │  of derivative)   │
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │ differentiation-  │
                    │    rules.md       │
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │  chain-rule.md    │
                    └─────────┬─────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
   ┌──────────▼─────────┐┌────▼──────────┐┌───▼──────────────────┐
   │ implicit-           ││ logarithmic-  ││ higher-order-         │
   │ differentiation.md  ││ differentiat- ││ derivatives.md        │
   │                     ││ ion.md        ││                       │
   └──────────┬──────────┘└────┬──────────┘└───┬───────────────────┘
              │                │                │
              └────────┬───────┴────────┬───────┘
                        │                │
             ┌──────────▼──────┐ ┌───────▼───────────────────────┐
             │ related-rates.md│ │ linear-approximation-and-      │
             │                 │ │ differentials.md               │
             └──────────┬──────┘ └───────┬─────────────────────────┘
                        │                │
                        └────────┬───────┘
                                 │
                       ┌─────────▼─────────┐
                       │   examples.md      │
                       │ (mixed practice)   │
                       └────────────────────┘
```

## Topic Dependency Graph

| File | Depends on |
|------|-----------|
| `definition.md` | Limits (Module 02) |
| `differentiation-rules.md` | `definition.md` |
| `chain-rule.md` | `differentiation-rules.md` |
| `implicit-differentiation.md` | `chain-rule.md` |
| `logarithmic-differentiation.md` | `chain-rule.md`, logarithm properties |
| `higher-order-derivatives.md` | `differentiation-rules.md`, `chain-rule.md` |
| `related-rates.md` | `chain-rule.md`, `implicit-differentiation.md` |
| `linear-approximation-and-differentials.md` | `definition.md`, `differentiation-rules.md` |
| `examples.md` | All of the above |

## Recommended Study Order

1. `definition.md`
2. `differentiation-rules.md`
3. `chain-rule.md`
4. `implicit-differentiation.md`
5. `logarithmic-differentiation.md`
6. `higher-order-derivatives.md`
7. `related-rates.md`
8. `linear-approximation-and-differentials.md`
9. `examples.md` (interleave with the above as reinforcement, then complete fully at the end)

## Estimated Study Time

| File | Estimated time |
|------|----------------|
| `definition.md` | 1.5 – 2 hours |
| `differentiation-rules.md` | 3 – 4 hours |
| `chain-rule.md` | 2 – 3 hours |
| `implicit-differentiation.md` | 1.5 – 2 hours |
| `logarithmic-differentiation.md` | 1 – 1.5 hours |
| `higher-order-derivatives.md` | 1.5 – 2 hours |
| `related-rates.md` | 2.5 – 3.5 hours |
| `linear-approximation-and-differentials.md` | 1.5 – 2 hours |
| `examples.md` | 4 – 6 hours (spread over the module) |
| **Total** | **~19 – 26 hours** |

> **Exam tip:** Differentiation is a *skill*, not just knowledge. Budget more time for repetition (the `examples.md` workbook and the exercise sets in each file) than for re-reading theory.

## Skills Gained

By completing this module, you will be able to:

- State and apply the limit definition of the derivative
- Differentiate polynomials, rational functions, exponentials, logarithms, trigonometric, inverse trigonometric, hyperbolic, and inverse hyperbolic functions
- Apply the product, quotient, and chain rules — including repeated and nested compositions
- Differentiate implicitly defined curves and find tangent lines to them
- Use logarithmic differentiation for products, quotients, and variable-exponent expressions
- Compute higher-order derivatives and interpret them via concavity and inflection points
- Set up and solve related-rates word problems systematically
- Approximate function values using linearization and estimate propagated error using differentials
- Recognize and avoid the most common differentiation mistakes

## Notation Conventions Used Throughout This Module

| Symbol | Meaning |
|--------|---------|
| $f'(x)$ | Derivative of $f$ with respect to $x$ (Lagrange notation) |
| $\dfrac{dy}{dx}$ | Derivative of $y$ with respect to $x$ (Leibniz notation) |
| $\dfrac{d}{dx}\big[f(x)\big]$ | The differentiation operator applied to $f(x)$ |
| $f''(x)$, $f'''(x)$, $f^{(n)}(x)$ | Second, third, and $n$th derivatives |
| $\dot{x}$ | Derivative with respect to time (Newton notation, used in related rates) |
| $dx$, $dy$ | Differentials |

---

**Next:** [`definition.md`](definition.md) →
