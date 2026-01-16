# Contributing to BUTEX Notes

Welcome! This guide will help you contribute to this personal study notes repository. Whether you're fixing a typo, adding examples, or creating new content, your contributions help improve the learning experience.

---

## 📋 Table of Contents

1. [Getting Started](#-getting-started)
2. [How to Contribute](#-how-to-contribute)
3. [Style Guide](#-style-guide)
4. [Content Guidelines](#-content-guidelines)
5. [File Naming Conventions](#-file-naming-conventions)
6. [Commit Message Guidelines](#-commit-message-guidelines)
7. [Quality Checklist](#-quality-checklist)
8. [Resources](#-resources)

---

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Git** installed on your system
- A **GitHub account**
- A **Markdown editor** (VS Code, Neovim, Obsidian, or Typora)
- Basic knowledge of **Markdown** and **LaTeX** syntax
- Familiarity with the **course structure** at BUTEX

### Setup Your Environment

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/butex-notes.git
cd butex-notes

# 3. Add upstream remote
git remote add upstream https://github.com/itachi-re/butex-notes.git

# 4. Make scripts executable
chmod +x scripts/new_note.sh
chmod +x scripts/build_all.sh

# 5. Create a new branch for your contribution
git checkout -b feature/your-feature-name
```

---

## 🤝 How to Contribute

### Types of Contributions Welcome

| Type | Description | Examples |
|:---|:---|:---|
| ✅ **Fix Errors** | Correct typos, grammar, or factual mistakes | Fixing equation syntax, correcting definitions |
| ✅ **Add Examples** | Include solved problems and real-world applications | Numerical examples, case studies |
| ✅ **Improve Explanations** | Clarify complex concepts | Adding diagrams, simplifying language |
| ✅ **Create Practice Problems** | Add exercises with solutions | End-of-chapter problems, quizzes |
| ✅ **Add Diagrams** | Visual representations using Mermaid or images | Flowcharts, process diagrams, graphs |
| ✅ **Enhance Formatting** | Improve readability and structure | Better headings, tables, callouts |
| ✅ **Add Cross-References** | Link related topics across courses | Connecting Math → Physics → YE topics |

### Contribution Workflow

```bash
# 1. Sync with upstream
git fetch upstream
git merge upstream/master

# 2. Create a new branch
git checkout -b fix/chemistry-bonding-typo

# 3. Make your changes
# Use scripts/new_note.sh for new notes
./scripts/new_note.sh CHEM-101 02_ionic_bonding

# 4. Test your changes
# - Preview Markdown rendering
# - Verify LaTeX equations render correctly
# - Check internal links work

# 5. Commit with descriptive message
git add .
git commit -m "fix(CHEM-101): correct ionic bond energy formula"

# 6. Push to your fork
git push origin fix/chemistry-bonding-typo

# 7. Open a Pull Request on GitHub
# - Provide clear description
# - Reference any related issues
# - Add screenshots if applicable
```

---

## 📝 Style Guide

### Markdown Formatting

#### Headings Hierarchy

```markdown
# Main Title (H1) - Course/Topic Name
## Section (H2) - Major concepts
### Subsection (H3) - Detailed topics
#### Sub-subsection (H4) - Specific points
```

**Rules:**
- Use **ONE H1** per file (the main topic title)
- Use **H2** for major sections
- Keep heading levels consistent and logical
- Don't skip heading levels (H2 → H4)

#### Lists

```markdown
<!-- Unordered lists for general items -->
- Item one
- Item two
  - Nested item
  
<!-- Ordered lists for sequential steps -->
1. First step
2. Second step
3. Third step

<!-- Definition lists for terms -->
**Term**: Definition of the term with explanation.
```

#### Emphasis

```markdown
**Bold** - For important terms, definitions, key concepts
*Italic* - For emphasis, variables, foreign terms
***Bold Italic*** - For critical warnings or highlights
`Code` - For inline code, formulas, technical terms
```

#### Code Blocks

````markdown
```python
# Python code example
def calculate_viscosity(force, area, velocity_gradient):
    return force / (area * velocity_gradient)
```

```bash
# Shell commands
./scripts/new_note.sh PHY-101 06_optics
```
````

### LaTeX Mathematical Expressions

#### Inline Math

```markdown
Use `$...$` for inline equations: The force is given by $F = ma$.
```

#### Display Math

```markdown
Use `$$...$$` for display equations:

$$
\eta = \frac{F/A}{dv/dx} = \frac{\tau}{\dot{\gamma}}
$$
```

#### Common LaTeX Patterns

```latex
<!-- Fractions -->
$\frac{numerator}{denominator}$

<!-- Subscripts and Superscripts -->
$x_1$, $x^2$, $x_i^j$

<!-- Greek letters -->
$\alpha, \beta, \gamma, \Delta, \omega$

<!-- Operators -->
$\sum_{i=1}^{n}$, $\int_{a}^{b}$, $\lim_{x \to \infty}$

<!-- Matrices -->
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

<!-- Systems of equations -->
$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$
```

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|:---------|:--------:|---------:|
| Left     | Center   | Right    |
| aligned  | aligned  | aligned  |
```

**Alignment:**
- `:---` Left-aligned
- `:---:` Center-aligned
- `---:` Right-aligned

### Callouts and Blockquotes

```markdown
> **Note:** Important information that needs attention.

> **Warning:** Critical points to remember for exams.

> **Example:** Practical application of the concept.

> **Definition:** Formal definition of a term.
```

---

## 📚 Content Guidelines

### Note Structure Template

Every note should follow this consistent structure:

```markdown
---
subject: COURSE-CODE
topic: Specific Topic Name
date: YYYY-MM-DD
tags: [notes, course-code, topic-keyword]
---

# Topic Title

## 1. Introduction
Brief overview of the topic and its relevance.

## 2. Key Concepts
### 2.1 Concept One
Definition and explanation.

### 2.2 Concept Two
Definition and explanation.

## 3. Formulas & Equations
List important formulas with explanations:

$$
F = ma
$$

Where:
- $F$ = Force (Newton)
- $m$ = Mass (kg)
- $a$ = Acceleration (m/s²)

## 4. Examples
### Example 1: [Problem Title]
**Given:** ...
**Find:** ...
**Solution:**
Step-by-step solution...

## 5. Important Notes
> Critical information for exams and practical applications.

## 6. Practice Problems
1. Problem statement...
2. Problem statement...

**Solutions:** [Link to solutions or included below]

## 7. References
- Textbook: Chapter X, Pages Y-Z
- Lecture: Date and topic
- Additional resources
```

### Writing Guidelines

#### Language and Tone

- Write in **clear, concise English**
- Use **active voice** when possible
- Define technical terms on first use
- Avoid unnecessary jargon
- Write as if teaching a peer

#### Content Quality

1. **Accuracy First**
   - Double-check formulas and equations
   - Verify facts against official course materials
   - Cite sources when appropriate

2. **Completeness**
   - Cover all key aspects of the topic
   - Include units for all numerical values
   - Provide context for formulas

3. **Clarity**
   - Break complex topics into smaller sections
   - Use examples to illustrate abstract concepts
   - Add diagrams where helpful

4. **Consistency**
   - Use consistent notation throughout
   - Follow the same structure across similar topics
   - Maintain uniform formatting

### Department-Specific Guidelines

#### Fabric Engineering Focus

Since this repository emphasizes **Fabric Engineering**, when contributing:

- **Textile Context**: Relate physics/chemistry/math concepts to textile applications
- **Industry Standards**: Reference textile testing standards (ASTM, ISO)
- **Practical Examples**: Include real-world fabric/yarn manufacturing scenarios
- **Cross-Course Links**: Connect foundation courses to textile engineering

**Example:**
```markdown
### Viscosity in Textile Finishing

The concept of viscosity is crucial in textile wet processing:

$$
\eta = \frac{\tau}{\dot{\gamma}}
$$

In **dyeing operations**, the viscosity of dye liquor affects:
- Penetration rate into fibers
- Uniformity of dye distribution
- Processing time and efficiency

**Typical viscosity ranges:**
- Reactive dyes: 5-15 cP
- Disperse dyes: 10-25 cP
```

---

## 📁 File Naming Conventions

### Standard Format

```
[NN]_[topic-name].md
```

Where:
- `NN` = Two-digit sequence number (01, 02, 03...)
- `topic-name` = Descriptive name in **kebab-case**

### Examples

```
✅ GOOD:
PHY-101/01_fluid_mechanics.md
CHEM-101/03_ionic_bonding.md
YE-201/01_testing_and_moisture.md

❌ BAD:
PHY-101/fluid mechanics.md          # No number, spaces
CHEM-101/Ionic_Bonding.md           # PascalCase
YE-201/testing-and-moisture.md      # No sequence number
```

### Directory Structure Rules

- **Course directories**: Use official course codes (CHEM-101, PHY-101, YE-201)
- **Subdirectories**: Use kebab-case for topic grouping (chemical_bonding, fluid-mechanics)
- **Asset directories**: Keep images/diagrams in `assets/` or `images/` subdirectory

### Using the Script

```bash
# Automated note creation (recommended)
./scripts/new_note.sh COURSE-CODE topic-name

# Examples:
./scripts/new_note.sh YE-101 05_wool_properties
./scripts/new_note.sh MATH-101 03_determinants
./scripts/new_note.sh CHEM-101 15_electrochemistry
```

---

## 💬 Commit Message Guidelines

### Format

```
type(scope): short description

[optional body]

[optional footer]
```

### Types

- **feat**: New content or notes
- **fix**: Corrections to existing content
- **docs**: Documentation updates
- **style**: Formatting changes (no content change)
- **refactor**: Restructuring notes
- **test**: Adding examples or practice problems
- **chore**: Maintenance tasks

### Scope

The course code or topic area (e.g., CHEM-101, fluid-mechanics, scripts)

### Examples

```bash
# Adding new content
git commit -m "feat(PHY-101): add notes on surface tension"

# Fixing errors
git commit -m "fix(CHEM-101): correct Lewis structure in ionic bonding"

# Improving formatting
git commit -m "style(YE-201): improve table formatting in moisture regain section"

# Multiple files
git commit -m "feat(MATH-101): add notes on eigenvalues and eigenvectors

- Add theoretical foundations
- Include 3 solved examples
- Add practice problems"

# Script updates
git commit -m "chore(scripts): update new_note.sh to include date validation"
```

### Writing Good Commit Messages

**DO:**
- Use imperative mood ("add", "fix", not "added", "fixed")
- Be specific about what changed
- Keep first line under 50 characters
- Reference issue numbers if applicable

**DON'T:**
- Write vague messages ("update stuff", "changes")
- Include multiple unrelated changes in one commit
- Use commit messages as a todo list

---

## ✅ Quality Checklist

Before submitting a pull request, verify:

### Content Quality

- [ ] All formulas render correctly in LaTeX
- [ ] Units are included for all numerical values
- [ ] Examples include complete solutions
- [ ] Technical terms are defined on first use
- [ ] Content is factually accurate
- [ ] References/sources are cited where appropriate

### Formatting

- [ ] Follows the standard note template structure
- [ ] Uses consistent heading hierarchy
- [ ] Tables are properly formatted
- [ ] Code blocks have language specified
- [ ] No trailing whitespace
- [ ] Line length under 100 characters (where practical)

### File Management

- [ ] File follows naming conventions (kebab-case)
- [ ] Placed in correct course directory
- [ ] Sequence number is correct
- [ ] Frontmatter is complete and accurate

### Git Best Practices

- [ ] Commits are atomic (one logical change per commit)
- [ ] Commit messages follow guidelines
- [ ] Branch name is descriptive
- [ ] No merge conflicts with master
- [ ] Large binary files avoided (use Git LFS if needed)

### Testing

- [ ] Markdown renders correctly on GitHub
- [ ] Internal links work
- [ ] LaTeX equations display properly
- [ ] PDF export works (run `./scripts/build_all.sh`)

---

## 📖 Resources

### Markdown References

- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Markdown Guide](https://www.markdownguide.org/)
- [CommonMark Spec](https://commonmark.org/)

### LaTeX References

- [LaTeX Math Symbols](https://www.cmor-faculty.rice.edu/~heinken/latex/symbols.pdf)
- [MathJax Documentation](https://docs.mathjax.org/)
- [Overleaf LaTeX Guide](https://www.overleaf.com/learn)

### Git Resources

- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Conventional Commits](https://www.conventionalcommits.org/)

### Textile Engineering References

- [ASTM Textile Standards](https://www.astm.org/products-services/standards-and-publications/)
- [ISO Textile Standards](https://www.iso.org/committee/45564.html)

---

## 🤔 Questions or Issues?

If you have questions or encounter issues:

1. **Check existing notes** for similar formatting/structure
2. **Review this guide** thoroughly
3. **Open an issue** on GitHub for clarification
4. **Contact via Telegram**: [@itachi_re](https://t.me/itachi_re)

---

## 🙏 Recognition

Contributors who make significant improvements will be acknowledged in:
- Repository README
- Course-specific README files
- Release notes

Thank you for helping improve these study materials for the BUTEX community!

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the repository (see [LICENSE](LICENSE) file).

---

<div align="center">

**Made with 📚 for Engineering students at BUTEX**

[Report Bug](https://github.com/itachi-re/butex-notes/issues) · [Request Feature](https://github.com/itachi-re/butex-notes/issues)

</div>
