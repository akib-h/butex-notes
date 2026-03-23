# 📋 Changelog — BUTEX Notes

All notable changes to the BUTEX Notes project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) with [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

> Changes staged but not yet committed to master.

### Planned
- [ ] Wool fiber mechanical properties (cross-reference with YE-101)
- [ ] Add practice problems to elasticity module
- [ ] Merge and deduplicate `02_fluid-mechanics/` and `02_fluid_mechanics/` directories
- [ ] Expand CHEM-101 module coverage
- [ ] Complete MATH-101 differential equations section
- [ ] Add HSS-101 humanities notes

---

## [0.0.3] — 2026-03-09

*Release Notes:* https://github.com/itachi-re/butex-notes/releases/tag/0.0.3

### Summary
Repository maintenance and documentation enhancements.

### Changed
- Repository structure refinement
- Documentation improvements

---

## [0.0.2] — 2026-03-08

*Release Notes:* https://github.com/itachi-re/butex-notes/releases/tag/0.0.2

### Summary
First major update with comprehensive documentation improvements and content additions.

### Added
- Link to auxetic materials in elasticity.md (#1)
- Refactored equations for clarity in questions_n_sols_2012_18 (#2)
- LaTeX formatting fixes in matrices documentation (#6)
- Updated table of contents with numbered sections (#7)

### Fixed
- Links in fluid_properties.md (#3)

### Changed
- Updated natural_textile_fibres_qb2012_19.md (#5)
- Updated repository statistics in README.md (#9)
- Updated total notes count in README (#8)

### New Contributors
- @akib-h (first contribution)

---

## [0.0.1] — 2026-01-16

*Release Notes:* https://github.com/itachi-re/butex-notes/releases/tag/0.0.1

### Summary
Initial project setup establishing comprehensive BUTEX course notes repository foundation.

### Added — Core Infrastructure
- **Project Foundation**
  - `README.md` — Comprehensive course index and project overview
  - `CHANGELOG.md` — Version history and project evolution
  - `CONTRIBUTING.md` — Contribution guidelines
  - `LICENSE` — Project licensing

- **Subject Directories** (6 courses)
  - PHY-101, CHEM-101, MATH-101, HSS-101, YE-101, YE-201

- **Supporting Infrastructure**
  - `lab_reports/` — Lab documentation
  - `pdfs/` — Reference materials
  - `scripts/` — Maintenance utilities
  - `_templates/` — Document templates
  - `tmp/` — Workspace

- **Physics I Module (PHY-101)**
  
  *Module 01: Elasticity*
  - `01_elasticity/elasticity.md` — Stress, Strain, Hooke's Law, Moduli, Poisson's ratio, elastic potential energy
  
  *Module 02: Fluid Mechanics (Dual Implementation)*
  - **Primary Set** `02_fluid-mechanics/` (11 files):
    - Overview, properties, flow types, fluid classification
    - Viscosity (detailed), Stokes' law, surface tension
    - Continuity equation, conservation laws
    - Bernoulli's theorem, applications
  
  - **Legacy Set** `02_fluid_mechanics/` (9 files):
    - Alternate implementation for flexibility
  
  - **Specialized Topics** (Added 2026-01-20):
    - `torricelli_theorem.md` — Efflux velocity
    - `venturimeter_guide.md` — Design and flow calculations
    - `rate_of_flow.md` — Volume flow rate equations
  
  *Module 03: Interference of Light* (Added 2026-02-23 onwards)
  - Wavefront & Huygens' principle
  - Reflection & refraction
  - Interference concepts
  - Young's double slit experiment
  - Fresnel biprism
  - Newton's rings (2026-02-28)
  - Thin film interference (2026-02-28)
  - Combined optics reference (2026-03-08)
  - Class test materials (2026-03-13)

- **Question Banks**
  - `qna/questions_n_sols_2012_18.md` — 2012–2018 exam questions
  - `qna/class_test_02_2024.md` — 2024 class test with solutions
  - `qna/ques_2017~23.md` — 2017–2023 questions compilation

---

## Version Scheme

`MAJOR.MINOR.PATCH`

| Level | When to bump |
|:------|:-------------|
| **MAJOR** | New module or major restructure |
| **MINOR** | New notes or files added |
| **PATCH** | Corrections, typo fixes, formatting |

---

## Project Timeline

- **2026-01-16** — v0.0.1: Project launch with PHY-101 foundation
- **2026-01-20** — Fluid mechanics expanded (Torricelli, venturimeter)
- **2026-02-23** — Interference of Light module begins (5 files)
- **2026-02-28** — Thin films & Newton's rings added
- **2026-03-08** — v0.0.2: Documentation refinements, 8 PRs merged
- **2026-03-09** — v0.0.3: Repository maintenance
- **2026-03-13** — Latest: Assessment materials added

---

<div align="center">

**[⬆ Back to Main README](README.md)** · **[View Releases](https://github.com/itachi-re/butex-notes/releases)**

</div>
