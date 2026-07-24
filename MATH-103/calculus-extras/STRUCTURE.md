# Repository Structure — `calculus-extras`

```text
calculus-extras/
│
├── README.md
├── ROADMAP.md
├── WORKFLOW.md
├── LICENSE
│
├── 01-prerequisites/
│   ├── README.md
│   ├── algebra.md
│   ├── functions.md
│   ├── trigonometry.md
│   └── limits-review.md
│
├── 02-limits/
│   ├── README.md
│   ├── introduction.md
│   ├── limit-laws.md
│   ├── one-sided-and-infinite-limits.md
│   ├── squeeze-theorem.md
│   ├── continuity.md
│   ├── intermediate-value-theorem.md
│   └── examples.md
│
├── 03-derivatives/
│   ├── README.md
│   ├── definition.md
│   ├── differentiation-rules.md
│   ├── chain-rule.md
│   ├── implicit-differentiation.md
│   ├── logarithmic-differentiation.md
│   ├── higher-order-derivatives.md
│   ├── related-rates.md
│   ├── linear-approximation-and-differentials.md
│   └── examples.md
│
├── 04-applications-of-derivatives/
│   ├── README.md
│   ├── extrema-and-critical-points.md
│   ├── mean-value-theorem.md
│   ├── first-derivative-test.md
│   ├── second-derivative-test-and-concavity.md
│   ├── curve-sketching.md
│   ├── optimization.md
│   ├── lhopitals-rule.md
│   └── examples.md
│
├── 05-integrals/
│   ├── README.md
│   ├── antiderivatives.md
│   ├── riemann-sums.md
│   ├── definite-integral.md
│   ├── fundamental-theorem-of-calculus.md
│   ├── substitution-rule.md
│   └── examples.md
│
├── 06-techniques-of-integration/
│   ├── README.md
│   ├── integration-by-parts.md
│   ├── trigonometric-integrals.md
│   ├── trigonometric-substitution.md
│   ├── partial-fractions.md
│   ├── rationalizing-substitutions.md
│   ├── numerical-integration.md
│   └── examples.md
│
├── 07-improper-integrals/
│   ├── README.md
│   ├── infinite-limits-of-integration.md
│   ├── discontinuous-integrands.md
│   ├── comparison-tests.md
│   └── examples.md
│
├── 08-sequences-series/
│   ├── README.md
│   ├── sequences.md
│   ├── series-and-convergence.md
│   ├── integral-test.md
│   ├── comparison-tests.md
│   ├── ratio-and-root-tests.md
│   ├── alternating-series.md
│   ├── power-series.md
│   ├── taylor-and-maclaurin-series.md
│   └── examples.md
│
├── 09-parametric-polar/
│   ├── README.md
│   ├── parametric-curves.md
│   ├── calculus-with-parametric-curves.md
│   ├── polar-coordinates.md
│   ├── calculus-in-polar-coordinates.md
│   └── examples.md
│
├── 10-multivariable/
│   ├── README.md
│   ├── functions-of-several-variables.md
│   ├── partial-derivatives.md
│   ├── chain-rule-multivariable.md
│   ├── directional-derivatives-and-gradient.md
│   ├── multiple-integrals.md
│   ├── double-integrals-polar.md
│   ├── triple-integrals.md
│   └── examples.md
│
├── 11-vector-calculus/
│   ├── README.md
│   ├── vector-fields.md
│   ├── line-integrals.md
│   ├── fundamental-theorem-for-line-integrals.md
│   ├── greens-theorem.md
│   ├── curl-and-divergence.md
│   ├── surface-integrals.md
│   ├── stokes-theorem.md
│   └── divergence-theorem.md
│
├── 12-differential-equations/
│   └── overview.md
│
├── roadmaps/
│   ├── complete-roadmap.md
│   ├── semester-roadmap.md
│   ├── weekly-roadmap.md
│   ├── daily-roadmap.md
│   ├── exam-revision-roadmap.md
│   └── one-page-visual-roadmap.md
│
├── cheatsheets/
│   ├── differentiation-rules.md
│   ├── integration-formulas.md
│   ├── trigonometric-identities.md
│   ├── hyperbolic-identities.md
│   ├── taylor-maclaurin-series.md
│   ├── vector-identities.md
│   ├── coordinate-conversions.md
│   └── limit-identities.md
│
├── practice/
│   ├── beginner-exercises.md
│   ├── intermediate-exercises.md
│   ├── advanced-exercises.md
│   ├── mixed-review-sets.md
│   ├── previous-year-style-questions.md
│   └── challenge-problems.md
│
└── appendix/
    ├── formulas.md
    ├── identities.md
    ├── cheatsheet.md
    ├── glossary.md
    ├── common-mistakes.md
    └── exam-tips.md
```

**File count:** ~110 Markdown files across 15 top-level directories.

**Numbering convention:** `NN-topic-name/` folders are numbered in the order a
standard two-semester Calculus sequence (Calc I → Calc II → Calc III) is taught.
`12-differential-equations/` is intentionally a single-file overview/bridge,
since your `01_ode` and `02_vector` folders already cover that material in
depth elsewhere in `butex-notes/MATH-103`.

Next file to generate: **README.md**. Say the word and I'll start on
`01-prerequisites/` section by section.
