---
title: C Operators
course_code: MDM-102
chapter: C Programming
topic_number: 3
date: 2026-06-23
tags: [c, operators, precedence, expressions, MDM-102]
prerequisites: ["01-simple-c-programs.md", "02-variables-datatypes-constants.md"]
---

# Topic 3: C Operators

## Overview
An *operator* is a symbol that directs the compiler to perform a specific computation on one or
more *operands* and produce a result. C has a rich set of operators covering arithmetic,
comparison, logic, bit manipulation, memory, and assignment. Understanding operator precedence
and associativity is essential for writing expressions that behave as intended — a misread
precedence rule is one of the most common sources of subtle bugs.

---

## Definitions & Key Terms

1. **Operator** — A symbol (`+`, `*`, `&&`, etc.) that specifies an operation on operands.  
   *Plain English:* the action to perform.

2. **Operand** — The value(s) an operator acts on.  
   *Plain English:* the data being operated on.

3. **Unary operator** — Takes one operand: `-x`, `!flag`, `++i`.  
   *Plain English:* one-input operation.

4. **Binary operator** — Takes two operands: `a + b`, `x == y`.  
   *Plain English:* two-input operation.

5. **Ternary operator** — The only three-operand operator in C: `condition ? expr1 : expr2`.  
   *Plain English:* an inline if-else that produces a value.

6. **Precedence** — The order in which operators are evaluated in a complex expression;
   higher-precedence operators bind tighter (like BODMAS/PEMDAS).  
   *Plain English:* which operation runs first.

7. **Associativity** — When operators have equal precedence, associativity determines grouping:
   left-to-right (`a - b - c` = `(a-b)-c`) or right-to-left (assignment `a = b = 5`).  
   *Plain English:* which direction ties are broken.

8. **Integer division** — The `/` operator applied to two integers truncates toward zero:
   `7 / 2 == 3` (not `3.5`).  
   *Plain English:* dividing two whole numbers gives a whole number (remainder discarded).

---

## Core Results

### Operator Categories

```mermaid
graph TD
    A[C Operators] --> B[Arithmetic\n+ - * / %]
    A --> C[Relational\n== != < > <= >=]
    A --> D[Logical\n&& || !]
    A --> E[Bitwise\n& | ^ ~ << >>]
    A --> F[Assignment\n= += -= *= /= %=\n&= |= ^= <<= >>=]
    A --> G[Other\n++ -- ? : sizeof & * ,]
```

*Alt text: Tree classifying C operators into arithmetic, relational, logical, bitwise,
assignment, and miscellaneous (increment/decrement, ternary, sizeof, address, dereference, comma).*

### Precedence Table (highest → lowest, partial)

| Level | Operators | Associativity |
|---|---|---|
| 1 (highest) | `()` `[]` `.` `->` | left→right |
| 2 | Unary `+` `-` `!` `~` `++` `--` `(type)` `sizeof` `&` `*` | right→left |
| 3 | `*` `/` `%` | left→right |
| 4 | `+` `-` | left→right |
| 5 | `<<` `>>` | left→right |
| 6 | `<` `<=` `>` `>=` | left→right |
| 7 | `==` `!=` | left→right |
| 8 | `&` | left→right |
| 9 | `^` | left→right |
| 10 | `\|` | left→right |
| 11 | `&&` | left→right |
| 12 | `\|\|` | left→right |
| 13 | `?:` | right→left |
| 14 (lowest) | `=` `+=` `-=` … | right→left |

> When in doubt, use parentheses to make intent explicit.

### Key Operator Behaviours

**Arithmetic:**
```c
int a = 7, b = 2;
printf("%d\n", a / b);    /* integer division → 3  (truncates)  */
printf("%d\n", a % b);    /* modulus (remainder)  → 1            */
printf("%f\n", (double)a / b);  /* cast first → 3.500000          */
```

**Relational & Logical:**
```c
/* Relational operators return 1 (true) or 0 (false) */
int x = 5;
printf("%d\n", x > 3);    /* 1 */
printf("%d\n", x > 3 && x < 10);  /* 1 (AND: both true) */
printf("%d\n", x < 3 || x > 4);   /* 1 (OR: second true) */
printf("%d\n", !(x == 5));         /* 0 (NOT: negation of true) */
```

**Bitwise:**
```c
unsigned int a = 0b00001100;   /* 12 */
unsigned int b = 0b00001010;   /* 10 */
printf("%d\n", a & b);   /* AND:  0b00001000 = 8  */
printf("%d\n", a | b);   /* OR:   0b00001110 = 14 */
printf("%d\n", a ^ b);   /* XOR:  0b00000110 = 6  */
printf("%d\n", a << 1);  /* LEFT SHIFT: 0b00011000 = 24 (×2) */
printf("%d\n", a >> 1);  /* RIGHT SHIFT: 0b00000110 = 6 (÷2) */
```

**Ternary:**
```c
int max = (a > b) ? a : b;   /* evaluates to a if a>b, else b */
```

---

## Worked Examples

### Example 1 — Arithmetic Pitfalls

**Task:** Compute the average of three exam scores correctly.

```c
#include <stdio.h>

int main(void) {
    int s1 = 70, s2 = 85, s3 = 90;

    int   wrong   = (s1 + s2 + s3) / 3;       /* integer division */
    double correct = (s1 + s2 + s3) / 3.0;    /* 3.0 forces double division */

    printf("Wrong  average : %d\n",   wrong);   /* 81 */
    printf("Correct average: %.2f\n", correct); /* 81.67 */
    return 0;
}
```

---

### Example 2 — Operator Precedence

**Task:** Predict and verify the output of mixed-operator expressions.

```c
#include <stdio.h>

int main(void) {
    printf("%d\n", 2 + 3 * 4);       /* 14: * before + */
    printf("%d\n", (2 + 3) * 4);     /* 20: parentheses override */
    printf("%d\n", 10 - 4 - 2);      /* 4:  left-to-right: (10-4)-2 */
    printf("%d\n", 1 + 2 > 0);       /* 1:  + before >, so (3)>0 = 1 */
    printf("%d\n", 4 == 2 + 2);      /* 1:  + before ==, so 4==4 = 1 */
    return 0;
}
```

---

### Example 3 — Increment / Decrement and Bitwise Tricks

**Task:** Demonstrate pre- vs post-increment, and a power-of-2 bit test.

```c
#include <stdio.h>

int main(void) {
    int i = 5;
    printf("i++  : %d (prints 5, then i becomes 6)\n", i++);
    printf("now i: %d\n", i);
    printf("++i  : %d (i becomes 7, then prints 7)\n", ++i);

    /* Check if n is a power of 2: (n & (n-1)) == 0, for n > 0 */
    int n = 16;
    if (n > 0 && (n & (n - 1)) == 0)
        printf("%d is a power of 2\n", n);

    return 0;
}
```

---

## Applications

- **Textile manufacturing:** Modulo (`%`) is used to cycle through colour patterns or stripe
  counts in fabric design algorithms.
- **Networking / protocols:** Bitwise operators (`&`, `|`, `<<`, `>>`) are fundamental to IP
  address masking and flag manipulation.
- **Embedded control:** Left-shift (`<<`) and right-shift (`>>`) replace multiplication/division
  by powers of 2 with a single clock cycle on most MCUs.

---

## Practice Problems

**P1.** Without running the program, state the output:
```c
int x = 10;
printf("%d %d %d\n", x > 5, x == 10, x != 10);
```

<details>
<summary>Solution</summary>

```
1 1 0
```
- `x > 5` → `10 > 5` → `1` (true)
- `x == 10` → `1` (true)
- `x != 10` → `0` (false)
</details>

---

**P2.** Write a program that reads an integer and determines whether it is even using the bitwise
AND operator (not the `%` operator).

<details>
<summary>Solution</summary>

```c
#include <stdio.h>
int main(void) {
    int n;
    scanf("%d", &n);
    if (n & 1)
        printf("%d is odd\n",  n);
    else
        printf("%d is even\n", n);
    return 0;
}
```
The least significant bit of any even integer is 0, so `n & 1 == 0` means even.
</details>

---

**P3.** Rewrite the following using the ternary operator and print the result:
```c
int a = 7, b = 3, max;
if (a > b) max = a;
else       max = b;
```

<details>
<summary>Solution</summary>

```c
#include <stdio.h>
int main(void) {
    int a = 7, b = 3;
    int max = (a > b) ? a : b;
    printf("max = %d\n", max);   /* 7 */
    return 0;
}
```
</details>

---

**P4.** Explain the difference between `=`, `==`, and `===` in C.

<details>
<summary>Solution</summary>

- `=` is the **assignment** operator: `x = 5` stores 5 in x.
- `==` is the **equality comparison** operator: `x == 5` evaluates to 1 if x equals 5, else 0.
- `===` does **not exist** in C (it exists in JavaScript). Using `==` is the C way to compare.

The common bug is writing `if (x = 5)` (always true — assigns 5 and tests the non-zero value)
instead of `if (x == 5)` (comparison). Compile with `-Wall` to catch this.
</details>

---

## References

1. **Kernighan & Ritchie — *The C Programming Language*, 2nd ed.** — Chapter 2 provides the
   complete operator precedence table and detailed examples.
2. **cppreference — Operator precedence** (<https://en.cppreference.com/w/c/language/operator_precedence>)
   — Definitive, up-to-date precedence and associativity table.
3. **Beej's Guide to C Programming** (<https://beej.us/guide/bgc/>) — Chapter 4 explains
   operators with clear worked examples and common pitfall warnings.
4. **GNU GCC Warnings** (<https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html>) —
   `-Wparentheses` warns about ambiguous operator groupings; valuable for catching precedence bugs.
5. **ISO/IEC 9899:2018 §6.5** — Normative specification of all C expressions and operator
   semantics, including undefined behaviour in integer overflow.
