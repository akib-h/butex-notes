# 📚 BUTEX University Notes

![Last Commit](https://img.shields.io/github/last-commit/itachi-re/butex-notes?style=flat-square&color=blue)
![Repo Size](https://img.shields.io/github/repo-size/itachi-re/butex-notes?style=flat-square&color=orange)
![License](https://img.shields.io/github/license/itachi-re/butex-notes?style=flat-square&color=green)
![Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg?style=flat-square)

> **Personal study notes for B.Sc. in Textile Engineering (Fabric Engineering Department)**  
> Maintained by **itachi_re** | Bangladesh University of Textiles (BUTEX)

---

## 📖 About This Repository

This repository contains comprehensive course notes from my journey through the **Fabric Engineering Department** at BUTEX. The notes are written in Markdown with LaTeX support for mathematical expressions, making them easy to version control, share, and export to various formats.

### 🎯 Key Features

- 📝 **Structured Markdown Notes** - Clean, readable format with proper hierarchy
- 🧮 **LaTeX Math Support** - Full equation and formula rendering
- 🔄 **Version Controlled** - Track changes and improvements over time
- 📄 **PDF Export Ready** - Automated scripts to convert notes to PDF
- 🏷️ **Tagged & Organized** - Easy navigation with course codes and topics
- 🔍 **Searchable** - Quick find using Git search or GitHub search features

---

## 🗂️ Course Index

### 📐 Core Sciences & Mathematics

| Course Code | Course Title | Status | Topics Covered |
| :--- | :--- | :---: | :--- |
| **CHEM-101** | Chemistry - I | 🟡 In Progress | Periodicity, Bonding, Acids/Bases |
| **PHY-101** | Physics - I | 🟡 In Progress | Fluid Mechanics, Viscosity, Optics |
| **MATH-101** | Mathematics - I | 🟢 Active | Matrices, Calculus, Linear Algebra |
| **AS-102** | Physics - I (Practical) | ⚪ Pending | Lab Reports & Experimental Data |

### 🧵 Yarn Engineering (Fabric Department Focus)

| Course Code | Course Title | Status | Topics Covered |
| :--- | :--- | :---: | :--- |
| **YE-101** | Natural Textile Fibres | 🟢 Active | Cotton, Jute, Silk, Wool, Fiber Properties |
| **YE-201** | Fibre & Yarn Testing | 🟢 Active | Moisture Regain, Sampling Methods, Quality Control |

**Status Legend:**  
🟢 Active - Regularly updated | 🟡 In Progress - Being developed | ⚪ Pending - Not started

---

## 🛠️ Workflow & Usage

### 📝 Creating a New Note

Use the automated script to create properly formatted notes:

```bash
# Syntax: ./scripts/new_note.sh [COURSE_CODE] [FILE_NAME]
./scripts/new_note.sh YE-201 02_fiber_length_testing

# This creates: YE-201/02_fiber_length_testing.md
# With pre-filled template including date, course info, and structure
```

**Manual Method:**
```bash
cp _templates/note_template.md COURSE-CODE/topic_name.md
# Edit the frontmatter and add your content
```

### 📤 Exporting to PDF

Convert all notes to PDF format with proper formatting:

```bash
# Export all markdown notes to PDF
./scripts/build_all.sh

# Output will be in: exported_pdfs/
# Maintains directory structure: exported_pdfs/YE-101/01_natural_fibres.pdf
```

## 🖥️ System Requirements

### 🐧 Linux (Recommended)
- Any modern Linux distribution
  - Ubuntu / Debian
  - Arch Linux / Manjaro
  - Fedora
  - openSUSE (Leap / Tumbleweed)
- Core tools:
  - `git`
  - `bash` or `zsh`
  - `python` (if scripts/tools are included)
- Optional:
  - `docker` (for containerized workflows)
  - `make`

---

### 🪟 Windows
- Windows 10 / 11 (64-bit)
- Required:
  - Git for Windows
  - PowerShell or Windows Terminal
- Recommended:
  - **WSL2** (Ubuntu or openSUSE)
  - Python 3.x
- Optional:
  - Docker Desktop (WSL2 backend)

---

### 🍎 macOS
- macOS 12+ (Monterey or newer)
- Required:
  - Xcode Command Line Tools  
    ```bash
    xcode-select --install
    ```
- Recommended:
  - Homebrew
  - Git
  - Python 3.x
- Optional:
  - Docker Desktop

---

### 🌐 Platform-Independent
- A modern web browser (Chrome / Firefox / Brave)
- Markdown viewer or editor:
  - VS Code
  - Obsidian
  - Typora
- PDF reader (for exported notes)

---

### 📦 Recommended Editors
- **VS Code** (Markdown + Git extensions)
- **Neovim** (for terminal users)
- **Obsidian** (knowledge base style)

### 📂 Repository Structure

```
butex-notes/
├── CHEM-101/              # Chemistry notes
│   └── 01_periodicity.md
├── PHY-101/               # Physics notes
│   └── 01_fluid_mechanics.md
├── MATH-101/              # Mathematics notes
│   └── 01_matrices.md
├── YE-101/                # Natural Textile Fibres
│   └── 01_natural_fibres.md
├── YE-201/                # Fibre & Yarn Testing
│   └── 01_testing_and_moisture.md
├── AS-102-Practical/      # Physics Lab
├── scripts/               # Automation scripts
│   ├── new_note.sh       # Create new note from template
│   └── build_all.sh      # Export all notes to PDF
├── _templates/            # Note templates
│   └── note_template.md  # Standard note format
├── exported_pdfs/         # PDF exports (auto-generated)
└── README.md
```

---

## 📋 Note Template Structure

Each note follows a consistent structure for better organization:

```markdown
---
subject: YE-101
topic: Natural Fibres
date: 2024-12-10
tags: [notes, YE-101, fabric-engineering]
---

# Topic Title

## 1. Key Concepts
- Main ideas and definitions

## 2. Formulas / Equations
$$
E = mc^2
$$

## 3. Important Notes
> Critical information and exam tips
```

---

## 🎓 Department Focus: Fabric Engineering

As a **Fabric Engineering** student, this repository emphasizes:

- 🧵 **Yarn Engineering** - Fiber properties, yarn structure, testing methods
- 🧪 **Textile Testing** - Quality control, standard testing procedures
- 📊 **Technical Analysis** - Data interpretation, statistical methods
- 🏭 **Manufacturing Processes** - Spinning, weaving, finishing

While foundation courses (Math, Physics, Chemistry) are included, the primary focus is on textile-specific subjects relevant to fabric manufacturing and quality assurance.

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/itachi-re/butex-notes.git
cd butex-notes
```

### Make Scripts Executable

```bash
chmod +x scripts/new_note.sh
chmod +x scripts/build_all.sh
```

### Start Taking Notes

```bash
# Create a new note
./scripts/new_note.sh YE-101 03_fiber_identification

# Edit with your preferred editor
nano YE-101/03_fiber_identification.md
# or
nvim YE-101/03_fiber_identification.md
```

---

## 🔧 Tools & Technologies

- **Markdown** - Note formatting
- **LaTeX** - Mathematical equations
- **Pandoc** - Document conversion
- **Git** - Version control
- **Bash** - Automation scripts
- **GitHub** - Hosting & collaboration

---

## 📚 Study Tips

1. **Regular Updates** - Commit notes after each lecture
2. **Clear Formatting** - Use headings, lists, and emphasis consistently
3. **Include Examples** - Add solved problems and diagrams
4. **Tag Properly** - Use relevant tags for easy searching
5. **Review & Refine** - Update notes during exam preparation
6. **Cross-Reference** - Link related topics across courses

---

## 🤝 Contributing

While this is a personal note repository, suggestions and corrections are welcome!

- 🐛 Found an error? Open an issue
- 💡 Have a suggestion? Create a pull request
- 📖 Want to share resources? Add them to discussions

---

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

**Note:** These are personal study notes. While effort is made to ensure accuracy, they should be used as supplementary material alongside official course resources.

---

## 🔗 Connect

[![GitHub](https://img.shields.io/badge/GitHub-itachi--re-181717?style=flat&logo=github)](https://github.com/itachi-re)
[![Repo](https://img.shields.io/badge/Repo-butex--notes-blue?style=flat&logo=github)](https://github.com/itachi-re/butex-notes)
[![Telegram Study](https://img.shields.io/badge/Telegram-Study%20Resources-26A5E4?style=flat&logo=telegram)](https://t.me/itachi_reinc)
[![Telegram Contact](https://img.shields.io/badge/Telegram-Contact-26A5E4?style=flat&logo=telegram)](https://t.me/itachi_re)

---

## 📊 Repository Stats

```
Total Notes: Growing
Last Updated: Regularly
Export Format: Markdown → PDF
Department: Fabric Engineering
University: BUTEX
```

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with 📝 and ☕ by a Fabric Engineering student

</div>
