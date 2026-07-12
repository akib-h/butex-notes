---
title: "Inter-relations between Van der Waals' Constants and Critical Constants"
course: "PHY-103"
course_title: "Physics – II"
unit: "kinetic_theory_of_gases"
topic_number: 12
credit: 3
hours_per_week: 3
total_hours: 45
level: 1
term: 0
course_type: "theory"
date: "2026-06-29"
tags:
  - phy-103
  - kinetic-theory-of-gases
  - van-der-waals
  - critical-constants
  - real-gas
---

# 12 — Inter-relations between Van der Waals' Constants and Critical Constants

## 1. Overview

The critical point is the end of the liquid-vapour coexistence curve. At the critical
point, the VdW isotherm has a horizontal inflection point, which imposes two conditions
whose solution yields exact expressions for the critical temperature $T_c$, pressure $P_c$,
and volume $V_c$ in terms of $a$ and $b$ (and vice versa). This topic is the analytical
foundation for [→ Critical Coefficient](13_critical_coefficient.md). Builds on
[→ Van der Waals' Equation](11_van_der_waals_equation_of_state.md).

> **Notation:** All equations are per mole ($n = 1$). $V_m$ is molar volume [m³ mol⁻¹].

---

## 2. Definitions & Key Terms

**1. Critical Temperature ($T_c$)** — *The temperature above which a gas cannot be
liquefied regardless of pressure.*

**2. Critical Pressure ($P_c$)** — *The pressure required to liquefy a gas at the
critical temperature.*

**3. Critical Volume ($V_c$)** — *The molar volume of a gas at the critical point.*

**4. Critical Point** — *The state $(P_c, V_c, T_c)$ at which the densities of liquid and
vapour become equal and the meniscus between phases disappears.*

**5. Inflection Point Condition** — *At the critical isotherm:
$({\partial P}/{\partial V_m})_{T_c} = 0$ and
$({\partial^2 P}/{\partial V_m^2})_{T_c} = 0$.*

---

## 3. Core Content

### 3.1 The Two Conditions at the Critical Point

The VdW equation (pressure-explicit form, per mole):

$$P = \frac{RT}{V_m - b} - \frac{a}{V_m^2} \quad \cdots (*)$$

At the critical point, the $P$–$V_m$ isotherm has a **horizontal inflection point**:

**Condition 1:** $\left(\frac{\partial P}{\partial V_m}\right)_{T_c} = 0$

**Condition 2:** $\left(\frac{\partial^2 P}{\partial V_m^2}\right)_{T_c} = 0$

---

### 3.2 Applying Condition 1

$$\frac{\partial P}{\partial V_m} = -\frac{RT}{(V_m - b)^2} + \frac{2a}{V_m^3} = 0$$

At the critical point ($V_m = V_c$, $T = T_c$):

$$\frac{RT_c}{(V_c - b)^2} = \frac{2a}{V_c^3} \quad \cdots \text{(I)}$$

---

### 3.3 Applying Condition 2

$$\frac{\partial^2 P}{\partial V_m^2} = \frac{2RT}{(V_m - b)^3} - \frac{6a}{V_m^4} = 0$$

At the critical point:

$$\frac{2RT_c}{(V_c - b)^3} = \frac{6a}{V_c^4} \quad \cdots \text{(II)}$$

---

### 3.4 Solving for $V_c$

Divide equation (II) by equation (I):

$$\frac{2RT_c/(V_c-b)^3}{RT_c/(V_c-b)^2} = \frac{6a/V_c^4}{2a/V_c^3}$$

$$\frac{2}{V_c - b} = \frac{3}{V_c}$$

$$2V_c = 3(V_c - b) = 3V_c - 3b$$

$$3b = 3V_c - 2V_c = V_c$$

$$\boxed{V_c = 3b}$$

---

### 3.5 Solving for $T_c$

Substitute $V_c = 3b$ into equation (I):

$$\frac{RT_c}{(3b - b)^2} = \frac{2a}{(3b)^3}$$

$$\frac{RT_c}{4b^2} = \frac{2a}{27b^3}$$

$$RT_c = \frac{8ab^2 \times 4b^2}{27b^3 \times 4b^2} \cdots$$

Let me redo this carefully:

$$RT_c = \frac{2a}{27b^3} \times 4b^2 = \frac{8a}{27b}$$

$$\boxed{T_c = \frac{8a}{27Rb}}$$

---

### 3.6 Solving for $P_c$

Substitute $V_c = 3b$ and $T_c = 8a/(27Rb)$ into $(*)$:

$$P_c = \frac{RT_c}{V_c - b} - \frac{a}{V_c^2}$$

$$= \frac{R \cdot \frac{8a}{27Rb}}{3b - b} - \frac{a}{(3b)^2}$$

$$= \frac{\frac{8a}{27b}}{2b} - \frac{a}{9b^2}$$

$$= \frac{8a}{54b^2} - \frac{a}{9b^2}$$

$$= \frac{4a}{27b^2} - \frac{3a}{27b^2}$$

$$= \frac{a}{27b^2}$$

$$\boxed{P_c = \frac{a}{27b^2}}$$

---

### 3.7 Summary: Forward Relations ($a, b \to $ critical constants)

$$\boxed{V_c = 3b} \qquad \boxed{T_c = \frac{8a}{27Rb}} \qquad \boxed{P_c = \frac{a}{27b^2}}$$

---

### 3.8 Inverse Relations (critical constants $\to a, b$)

From the above:

$$b = \frac{V_c}{3}$$

$$a = 3P_c V_c^2 = \frac{27R^2T_c^2}{64P_c}$$

$$R = \frac{8P_cV_c}{3T_c}$$

These allow determination of $a$ and $b$ from experimentally measured $P_c$, $T_c$,
and $V_c$.

---

### 3.9 Selected Critical Constants and VdW Coefficients

| Gas | $T_c$ (K) | $P_c$ (atm) | $V_c$ (L mol⁻¹) | $a$ (L² atm mol⁻²) | $b$ (L mol⁻¹) |
|-----|-----------|------------|-----------------|---------------------|--------------|
| He | 5.2 | 2.24 | 0.0578 | 0.0341 | 0.02370 |
| H₂ | 33.2 | 12.8 | 0.0650 | 0.2444 | 0.02661 |
| N₂ | 126.2 | 33.5 | 0.0899 | 1.352 | 0.03870 |
| O₂ | 154.8 | 50.1 | 0.0780 | 1.364 | 0.03186 |
| CO₂ | 304.2 | 72.8 | 0.0941 | 3.658 | 0.04286 |
| H₂O | 647.4 | 218.3 | 0.0566 | 5.464 | 0.03049 |

*(Source: Atkins & de Paula, *Physical Chemistry*, 10th ed., Table 1C.2)*

---

## 4. Worked Examples

### Example 1 — 🟢 Foundational

**Problem:** Using $a = 1.352\;\text{L}^2\text{atm mol}^{-2}$ and $b = 0.03870\;\text{L mol}^{-1}$
for N₂, calculate $T_c$, $P_c$, and $V_c$.
($R = 0.08206\;\text{L atm mol}^{-1}\text{K}^{-1}$)

**Solution**

$$V_c = 3b = 3 \times 0.03870 = \boxed{0.1161\;\text{L mol}^{-1}}$$

$$T_c = \frac{8a}{27Rb} = \frac{8
