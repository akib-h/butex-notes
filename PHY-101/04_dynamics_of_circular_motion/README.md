# Physics I — Dynamics of Circular Motion

> **Course:** Physics I
> **Topic:** Dynamics of Circular Motion — Moment of Inertia
> **Date Updated:** April 08, 2026
> **Level:** University / Undergraduate

---

## Overview

This repository contains comprehensive, well-structured lecture notes on the **Dynamics of Circular Motion**, specifically focused on the concept of **Moment of Inertia** and related theorems. All notes are derived from university-level coursework, supported by handwritten notes, and enhanced with derivations, examples, diagrams, and online references.

---

## Syllabus Coverage

| # | Topic | File |
|---|-------|------|
| 01 | Moment of Inertia | [01_Moment_of_Inertia.md](./01_Moment_of_Inertia.md) |
| 02 | Radius of Gyration | [02_Radius_of_Gyration.md](./02_Radius_of_Gyration.md) |
| 03 | Theorem of Perpendicular Axes | [03_Perpendicular_Axis_Theorem.md](./03_Perpendicular_Axis_Theorem.md) |
| 04 | Theorem of Parallel Axes | [04_Parallel_Axis_Theorem.md](./04_Parallel_Axis_Theorem.md) |
| 05 | M.I. of Uniform Circular Disc | [05_MI_Uniform_Circular_Disc.md](./05_MI_Uniform_Circular_Disc.md) |
| 06 | M.I. of Hollow Cylinder | [06_MI_Hollow_Cylinder.md](./06_MI_Hollow_Cylinder.md) |
| 07 | M.I. of Solid Sphere | [07_MI_Solid_Sphere.md](./07_MI_Solid_Sphere.md) |
| 08 | M.I. of Flywheel | [08_MI_Flywheel.md](./08_MI_Flywheel.md) |

---

## Quick Reference: Standard MI Formulas

| Body | Axis | Formula |
|------|------|---------|
| Thin ring (R) | Center, ⊥ plane | $MR^2$ |
| Uniform disc (R) | Center, ⊥ plane | $\frac{1}{2}MR^2$ |
| Uniform disc (R) | Diameter | $\frac{1}{4}MR^2$ |
| Annular disc ($R_1$, $R_2$) | Center, ⊥ plane | $\frac{1}{2}M(R_1^2+R_2^2)$ |
| Solid cylinder (R) | Own axis | $\frac{1}{2}MR^2$ |
| Hollow cylinder ($R_1$, $R_2$) | Own axis | $\frac{1}{2}M(R_1^2+R_2^2)$ |
| Solid sphere (R) | Diameter | $\frac{2}{5}MR^2$ |
| Hollow sphere (R) | Diameter | $\frac{2}{3}MR^2$ |
| Thin rod (L) | Center, ⊥ | $\frac{1}{12}ML^2$ |
| Thin rod (L) | One end, ⊥ | $\frac{1}{3}ML^2$ |

---

## Key Theorems

### Perpendicular Axis Theorem _(Plane bodies only)_
$$I_z = I_x + I_y$$

### Parallel Axis Theorem _(All bodies)_
$$I = I_{cm} + Mh^2$$

---

## How to Use These Notes

1. Start with **01_Moment_of_Inertia.md** for the conceptual foundation
2. Proceed to **02_Radius_of_Gyration.md** for the geometric description
3. Study the **theorems (03, 04)** — these are essential tools for all derivations
4. Work through the **specific bodies (05–08)** in order
5. Attempt all **worked examples** before checking solutions

---

## Contributing

Contributions are welcome! If you find any errors, want to add more examples, or improve explanations:

1. Fork the repository
2. Create a new branch: `git checkout -b fix/topic-name`
3. Make your changes in the relevant `.md` file
4. Commit with a descriptive message: `git commit -m "Add example to solid sphere MI"`
5. Open a Pull Request

Please maintain the existing format:
- LaTeX math in `$...$` (inline) and `$$...$$` (display)
- Ordered topic sections with Table of Contents
- At least 2 worked examples per file
- Online references at the end of each file

---

## References

- Halliday, Resnick & Krane — *Physics* (5th Ed.)
- Irodov — *Problems in General Physics*
- HyperPhysics: http://hyperphysics.phy-astr.gsu.edu/
- MIT OpenCourseWare 8.01: https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/
- LibreTexts Physics: https://phys.libretexts.org/
- Wikipedia: https://en.wikipedia.org/wiki/Moment_of_inertia
