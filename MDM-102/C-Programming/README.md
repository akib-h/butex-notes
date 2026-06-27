# MDM-102 · C Programming

> **Course:** MDM-102 — Introduction to C Programming  
> **Institution:** BUTEX  
> **Notes by:** [itachi-re](https://github.com/itachi-re)  
> **Status:** ![Topics](https://img.shields.io/badge/topics-11%20%2F%2011-brightgreen) ![Language](https://img.shields.io/badge/language-C11-blue) ![License](https://img.shields.io/badge/notes-open--access-orange)

Structured lecture notes covering the full MDM-102 syllabus — from a minimal Hello World to
graphics and game development. Each file follows a consistent template: definitions, core theory,
Mermaid diagrams, worked examples with annotated code, applications, practice problems with
solutions, and curated references.

---

## Table of Contents

- [Topics at a Glance](#topics-at-a-glance)
- [Learning Path](#learning-path)
- [Quick Reference — Compile & Run](#quick-reference--compile--run)
- [Standard Headers Cheat Sheet](#standard-headers-cheat-sheet)
- [Notes Format](#notes-format)
- [Repository Layout](#repository-layout)
- [Resources](#resources)

---

## Topics at a Glance

| # | File | Topic | Key Concepts |
|---|------|--------|--------------|
| 01 | [`01-simple-c-programs.md`](01-simple-c-programs.md) | Writing Simple C Programs | `main()`, `printf`, `scanf`, compilation pipeline |
| 02 | [`02-variables-datatypes-constants.md`](02-variables-datatypes-constants.md) | Variables, Data Types & Constants | `int`, `float`, `char`, `#define`, `const`, `sizeof` |
| 03 | [`03-operators.md`](03-operators.md) | Operators | Arithmetic, relational, logical, bitwise, ternary, precedence |
| 04 | [`04-decision-control-conditional-operators.md`](04-decision-control-conditional-operators.md) | Decision Control | `if`/`else if`/`else`, `switch`, fall-through, dangling else |
| 05 | [`05-loop-control-statements.md`](05-loop-control-statements.md) | Loop Control Statements | `for`, `while`, `do-while`, `break`, `continue` |
| 06 | [`06-library-and-user-defined-functions.md`](06-library-and-user-defined-functions.md) | Functions | Prototypes, definitions, pass-by-value, scope, standard library |
| 07 | [`07-recursion.md`](07-recursion.md) | Recursion | Base case, call stack, factorial, Fibonacci, Tower of Hanoi |
| 08 | [`08-pointers-and-arrays.md`](08-pointers-and-arrays.md) | Pointers & Arrays | `&`, `*`, pointer arithmetic, array decay, strings, `NULL` |
| 09 | [`09-user-defined-data-types.md`](09-user-defined-data-types.md) | User-Defined Data Types | `struct`, `union`, `enum`, `typedef`, padding, arrow operator |
| 10 | [`10-exception-handling.md`](10-exception-handling.md) | Exception Handling | Return codes, `errno`, `perror`, `assert`, `setjmp`/`longjmp` |
| 11 | [`11-c-graphics-game-development.md`](11-c-graphics-game-development.md) | Graphics & Game Development | BGI `graphics.h`, game loop, animation, collision detection |

---

## Learning Path

The topics build on each other. The recommended reading order follows the prerequisite chain:

```
01 ──► 02 ──► 03 ──► 04 ──► 05 ──► 06 ──► 07
                                    │
                                    ▼
                              08 ──► 09 ──► 10
                                    │
                              05 ──► 11
```

| Stage | Topics | What you gain |
|-------|--------|---------------|
| **Foundations** | 01 – 03 | Compile and run programs; understand types, operators, and expressions |
| **Control Flow** | 04 – 05 | Branch and loop; write non-trivial algorithms |
| **Abstraction** | 06 – 07 | Decompose programs into functions; understand recursion and the call stack |
| **Memory** | 08 – 09 | Manipulate memory directly; model real-world data with structs |
| **Robustness** | 10 | Write programs that fail gracefully |
| **Applied** | 11 | Build animated graphics programs and simple games |

---

## Quick Reference — Compile & Run

```bash
# Recommended flags for all topics
gcc -Wall -Wextra -std=c11 -o program program.c

# Link math library (Topic 06, 09)
gcc -Wall -Wextra -std=c11 -o program program.c -lm

# Stop at preprocessing stage (Topic 01)
gcc -E program.c -o program.i

# Stop at assembly stage (Topic 01)
gcc -S program.c -o program.s

# Compile to object file only (Topic 01)
gcc -c program.c -o program.o

# Disable assertions in release builds (Topic 10)
gcc -DNDEBUG -O2 -std=c11 -o program program.c

# Run with Valgrind for memory checks (Topic 08)
valgrind --leak-check=full ./program
```

### Format Specifiers (Topic 02)

| Type | Format | Example |
|------|--------|---------|
| `int` | `%d` | `printf("%d", 42)` |
| `long` | `%ld` | `printf("%ld", 1000000L)` |
| `long long` | `%lld` | `printf("%lld", fact)` |
| `float` | `%f` / `%.2f` | `printf("%.2f", 3.14f)` |
| `double` | `%lf` / `%.4f` | `printf("%.4f", 3.1416)` |
| `char` | `%c` | `printf("%c", 'A')` |
| `string` | `%s` | `printf("%s", name)` |
| `pointer` | `%p` | `printf("%p", (void*)ptr)` |
| `size_t` | `%zu` | `printf("%zu", sizeof(int))` |

---

## Standard Headers Cheat Sheet

| Header | Include when you need… |
|--------|------------------------|
| `<stdio.h>` | `printf`, `scanf`, `fgets`, `fopen`, `fprintf`, `perror` |
| `<stdlib.h>` | `malloc`, `free`, `atoi`, `rand`, `exit`, `qsort` |
| `<string.h>` | `strlen`, `strcpy`, `strcmp`, `strcat`, `strstr`, `memset` |
| `<math.h>` | `sqrt`, `pow`, `fabs`, `sin`, `cos`, `log` *(link `-lm`)* |
| `<ctype.h>` | `isalpha`, `isdigit`, `toupper`, `tolower` |
| `<limits.h>` | `INT_MAX`, `INT_MIN`, `CHAR_MAX` |
| `<float.h>` | `FLT_MAX`, `DBL_MAX`, `DBL_EPSILON` |
| `<stdint.h>` | `uint8_t`, `int32_t`, `uint64_t` (fixed-width types) |
| `<stdbool.h>` | `bool`, `true`, `false` (C99+) |
| `<errno.h>` | `errno`, `ENOENT`, `EACCES`, `ENOMEM` |
| `<assert.h>` | `assert()` |
| `<setjmp.h>` | `setjmp`, `longjmp`, `jmp_buf` |
| `<time.h>` | `time`, `clock`, `difftime` |

---

## Notes Format

Every topic file follows this consistent structure:

```
---
YAML front matter (title, course_code, topic_number, date, tags, prerequisites)
---

# Topic N: Title

## Overview          ← motivation and context (3–5 sentences)
## Definitions       ← numbered glossary with plain-English paraphrase
## Core Results      ← theory, diagrams (Mermaid), tables, key code snippets
## Worked Examples   ← 3 fully annotated, runnable programs
## Applications      ← domain connections (textile engineering, embedded, etc.)
## Practice Problems ← 4 problems with collapsible solutions
## References        ← 5 curated sources (books, docs, courses)
```

Diagrams are written in [Mermaid](https://mermaid.js.org/) and render natively on GitHub.
All code targets **ISO C11** and compiles cleanly under `gcc -Wall -Wextra -std=c11`.

---

## Repository Layout

```
butex-notes/
└── MDM-102/
    └── C-Programming/
        ├── README.md                                   ← you are here
        ├── 01-simple-c-programs.md
        ├── 02-variables-datatypes-constants.md
        ├── 03-operators.md
        ├── 04-decision-control-conditional-operators.md
        ├── 05-loop-control-statements.md
        ├── 06-library-and-user-defined-functions.md
        ├── 07-recursion.md
        ├── 08-pointers-and-arrays.md
        ├── 09-user-defined-data-types.md
        ├── 10-exception-handling.md
        └── 11-c-graphics-game-development.md
```

---

## Resources

### Primary Textbook
- **Kernighan & Ritchie — *The C Programming Language*, 2nd ed. (1988)**  
  The definitive reference; every topic cites the relevant chapter.

### Online References
- [cppreference.com](https://en.cppreference.com/w/c) — Complete, up-to-date C standard library reference
- [Beej's Guide to C Programming](https://beej.us/guide/bgc/) — Accessible, well-illustrated companion text
- [GNU GCC Manual](https://gcc.gnu.org/onlinedocs/gcc/) — Compiler flags, warnings, and extensions

### Courses
- [Harvard CS50](https://cs50.harvard.edu/x/) — Free intro course with video walkthroughs
- [MIT OCW 6.087 — Practical Programming in C](https://ocw.mit.edu/courses/6-087-practical-programming-in-c/) — Lecture notes and exercises

### Standards & Safety
- [ISO/IEC 9899:2018 (C17)](https://www.iso.org/standard/74528.html) — Normative C standard
- [SEI CERT C Coding Standard](https://wiki.sei.cmu.edu/confluence/display/c) — Industry safety rules

### Tools
- [Valgrind](https://valgrind.org/) — Memory error detector (Topics 08, 10)
- [GDB](https://www.sourceware.org/gdb/) — GNU debugger
- [Compiler Explorer (godbolt.org)](https://godbolt.org/) — See assembly output for any C snippet

### Graphics (Topic 11)
- [raylib](https://www.raylib.com/) — Modern, cross-platform alternative to BGI
- [SDL2](https://wiki.libsdl.org/SDL2/FrontPage) — Industry-standard multimedia library

---

*Part of [`itachi-re/butex-notes`](https://github.com/itachi-re/butex-notes) — open course notes for BUTEX students.*
