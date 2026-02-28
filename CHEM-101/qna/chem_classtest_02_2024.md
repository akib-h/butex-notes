# Chemistry-I (CHEM 101) - Solutions
## Gopalganj Textile Engineering College, Gopalganj
### 2nd Class Test Examination of L-1, T-1, 2024

---

## Question 1: Colligative Properties, Osmotic Pressure, and Raoult's Law

### Colligative Properties

**Colligative properties** are properties of solutions that depend on the number of solute particles present in the solution, rather than the nature or identity of the solute particles. These properties include:

1. **Vapor Pressure Lowering** - Addition of a non-volatile solute decreases the vapor pressure of the solvent
2. **Boiling Point Elevation** - The boiling point of a solution is higher than that of the pure solvent
3. **Freezing Point Depression** - The freezing point of a solution is lower than that of the pure solvent
4. **Osmotic Pressure** - The pressure required to prevent osmosis across a semipermeable membrane

### Osmosis and Osmotic Pressure

**Osmosis** is the spontaneous movement of solvent molecules through a semipermeable membrane from a region of lower solute concentration to a region of higher solute concentration.

**Osmotic Pressure (π)** is the minimum pressure that must be applied to a solution to prevent the inward flow of water across a semipermeable membrane. It is given by the van't Hoff equation:

```
π = iMRT
```

Where:
- π = osmotic pressure (atm)
- i = van't Hoff factor (number of particles per formula unit)
- M = molar concentration (mol/L)
- R = gas constant (0.0821 L·atm·mol⁻¹·K⁻¹)
- T = absolute temperature (K)

### Raoult's Law of Elevation of Boiling Point

**Raoult's Law** states that the vapor pressure of a solvent in an ideal solution is directly proportional to the mole fraction of the solvent.

```
P_solution = X_solvent × P°_solvent
```

Where:
- P_solution = vapor pressure of the solution
- X_solvent = mole fraction of solvent
- P°_solvent = vapor pressure of pure solvent

#### Derivation of Boiling Point Elevation

When a non-volatile solute is added to a solvent:

1. The vapor pressure of the solution decreases (Raoult's Law)
2. Since boiling occurs when vapor pressure equals atmospheric pressure, the solution must be heated to a higher temperature to reach this point
3. This increase in boiling point is called **boiling point elevation (ΔT_b)**

The relationship is given by:

```
ΔT_b = K_b × m × i
```

Where:
- ΔT_b = elevation in boiling point (°C or K)
- K_b = ebullioscopic constant (molal boiling point elevation constant)
- m = molality of the solution (mol/kg)
- i = van't Hoff factor

### Proof that ΔT_b ∝ m (molal concentration)

**Step 1:** According to Raoult's Law, the lowering of vapor pressure is:

```
P° - P_s = P° × X_solute
```

**Step 2:** For dilute solutions, the mole fraction of solute can be expressed as:

```
X_solute ≈ (n_solute)/(n_solvent) = (m × W_solvent)/1000
```

Where m is molality and W_solvent is the mass of solvent in kg.

**Step 3:** Using the Clausius-Clapeyron equation at the boiling point:

```
d(ln P)/dT = ΔH_vap/(RT²)
```

**Step 4:** For small temperature changes (ΔT_b):

```
Δ(ln P) ≈ (ΔH_vap)/(RT_b²) × ΔT_b
```

**Step 5:** Since ΔP/P° is small for dilute solutions:

```
(P° - P_s)/P° ≈ ln(P°/P_s) = (ΔH_vap)/(RT_b²) × ΔT_b
```

**Step 6:** Combining with Raoult's Law:

```
X_solute = (ΔH_vap)/(RT_b²) × ΔT_b
```

**Step 7:** Substituting X_solute ≈ m × (M_solvent/1000):

```
m × (M_solvent/1000) = (ΔH_vap)/(RT_b²) × ΔT_b
```

**Step 8:** Rearranging:

```
ΔT_b = [(R × T_b² × 1000)/(ΔH_vap × M_solvent)] × m
```

**Step 9:** The term in brackets is a constant for a given solvent, called K_b:

```
K_b = (R × T_b² × 1000)/(ΔH_vap × M_solvent)
```

**Therefore:**

```
ΔT_b = K_b × m
```

**This proves that the elevation of boiling point (ΔT_b) is directly proportional to the molal concentration (m) of the solution.**

---

## Question 2: Chemical Equilibrium and Law of Mass Action

### Chemical Equilibrium

**Chemical equilibrium** is a dynamic state in a reversible chemical reaction where the rate of the forward reaction equals the rate of the backward reaction, resulting in no net change in the concentrations of reactants and products over time.

#### Characteristics of Chemical Equilibrium:

1. **Dynamic Nature** - Both forward and backward reactions continue to occur at equal rates
2. **Macroscopic Properties** - Concentration, pressure, density, and color remain constant
3. **Reversible Reactions** - Can be approached from either direction
4. **Catalyst Effect** - Catalysts speed up the attainment of equilibrium but do not change the equilibrium position
5. **Closed System** - Equilibrium is achieved in a closed system at constant temperature

### Law of Mass Action

The **Law of Mass Action**, formulated by Guldberg and Waage (1864), states that:

> *"The rate of a chemical reaction is directly proportional to the product of the active masses (molar concentrations) of the reactants, each raised to the power equal to their stoichiometric coefficients in the balanced chemical equation."*

For a general reversible reaction:

```
aA + bB ⇌ cC + dD
```

At equilibrium, the equilibrium constant (K_c) is:

```
K_c = [C]^c × [D]^d / [A]^a × [B]^b
```

### Relationship between K_c, K_p, and K_x

For gaseous reactions, equilibrium can be expressed in terms of:
- **K_c** - Concentration equilibrium constant (mol/L)
- **K_p** - Pressure equilibrium constant (atm)
- **K_x** - Mole fraction equilibrium constant

#### Proof that K_c = K_p = K_x

**Step 1:** Starting with the ideal gas equation:

```
PV = nRT
P = (n/V)RT = CRT
```

Where C is the molar concentration (mol/L).

**Step 2:** For each component:

```
P_A = [A]RT
P_B = [B]RT
P_C = [C]RT
P_D = [D]RT
```

**Step 3:** For the reaction aA + bB ⇌ cC + dD:

```
K_p = (P_C^c × P_D^d)/(P_A^a × P_B^b)
```

**Step 4:** Substituting P = CRT:

```
K_p = ([C]^c × (RT)^c × [D]^d × (RT)^d) / ([A]^a × (RT)^a × [B]^b × (RT)^b)
```

```
K_p = ([C]^c × [D]^d) / ([A]^a × [B]^b) × (RT)^(c+d-a-b)
```

**Step 5:** Defining Δn = (c + d) - (a + b) (change in number of moles):

```
K_p = K_c × (RT)^Δn
```

**Important Note:** K_c = K_p only when Δn = 0 (equal number of gaseous moles on both sides)

#### For Mole Fraction (K_x):

**Step 6:** Partial pressure can be expressed as:

```
P_i = X_i × P_total
```

Where X_i is the mole fraction of component i.

**Step 7:** Therefore:

```
K_p = (X_C^c × X_D^d)/(X_A^a × X_B^b) × P_total^Δn
```

```
K_p = K_x × P_total^Δn
```

**Step 8:** Combining relationships:

```
K_c = K_p / (RT)^Δn = K_x × P_total^Δn / (RT)^Δn
```

### Calculation for the Given Reaction: N₂(gas) + H₂(gas) = 3NH₃(gas)

**Note:** The balanced equation should be:

```
N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
```

(The question appears to have a typo with coefficients)

#### For the corrected equation:

**K_c expression:**

```
K_c = [NH₃]² / ([N₂] × [H₂]³)
```

**K_p expression:**

```
K_p = (P_NH₃)² / (P_N₂ × P_H₂³)
```

**Relationship between K_c and K_p:**

```
Δn = 2 - (1 + 3) = 2 - 4 = -2
```

```
K_p = K_c × (RT)^(-2) = K_c / (RT)²
```

**K_x expression:**

```
K_x = (X_NH₃)² / (X_N₂ × X_H₂³)
```

**Relationship:**

```
K_p = K_x × P_total^(-2) = K_x / P_total²
```

**Complete relationship:**

```
K_c = K_p × (RT)² = K_x × P_total^(-2) × (RT)²
```

#### Example Calculation:

If at equilibrium (at 500°C = 773 K):
- [N₂] = 0.5 M
- [H₂] = 1.5 M
- [NH₃] = 0.8 M
- R = 0.0821 L·atm·mol⁻¹·K⁻¹

**Calculate K_c:**

```
K_c = (0.8)² / (0.5 × (1.5)³)
K_c = 0.64 / (0.5 × 3.375)
K_c = 0.64 / 1.6875
K_c = 0.379 M⁻²
```

**Calculate K_p:**

```
K_p = K_c × (RT)^(-2)
K_p = 0.379 × (0.0821 × 773)^(-2)
K_p = 0.379 × (63.48)^(-2)
K_p = 0.379 × (1/4029.7)
K_p = 9.41 × 10⁻⁵ atm⁻²
```

**Calculate K_x** (assuming P_total = 100 atm):

```
K_x = K_p × P_total²
K_x = 9.41 × 10⁻⁵ × (100)²
K_x = 9.41 × 10⁻⁵ × 10000
K_x = 0.941
```

---

## References

1. Atkins, P., & de Paula, J. (2014). *Physical Chemistry: Thermodynamics, Structure, and Change* (10th ed.). W.H. Freeman and Company.
   - Source: [LibreTexts Chemistry - Colligative Properties](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Solutions_and_Mixtures/Colligative_Properties)

2. Chang, R., & Goldsby, K. (2016). *Chemistry* (12th ed.). McGraw-Hill Education.
   - Source: [Chemistry LibreTexts - Osmotic Pressure](https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.6%3A_Colligative_Properties)

3. Silberberg, M. S., & Amateis, P. (2018). *Chemistry: The Molecular Nature of Matter and Change* (8th ed.). McGraw-Hill Education.
   - Source: [LibreTexts - Raoult's Law](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Solutions_and_Mixtures/Ideal_Solutions/Raoults_Law)

4. Levine, I. N. (2009). *Physical Chemistry* (6th ed.). McGraw-Hill.
   - Source: [Chemical Equilibrium - Khan Academy](https://www.khanacademy.org/science/chemistry/chemical-equilibrium)

5. McQuarrie, D. A., & Simon, J. D. (1997). *Physical Chemistry: A Molecular Approach*. University Science Books.
   - Source: [LibreTexts - Chemical Equilibrium](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria)

6. Petrucci, R. H., Herring, F. G., Madura, J. D., & Bissonnette, C. (2017). *General Chemistry: Principles and Modern Applications* (11th ed.). Pearson.
   - Source: [Law of Mass Action - Chemistry Stack Exchange](https://chemistry.stackexchange.com/questions/tagged/equilibrium)

7. Zumdahl, S. S., & Zumdahl, S. A. (2014). *Chemistry* (9th ed.). Cengage Learning.
   - Source: [Equilibrium Constants - Chemguide](https://www.chemguide.co.uk/physical/equilibria/kc.html)

8. Online Resources:
   - [Osmosis and Osmotic Pressure - Byju's](https://byjus.com/chemistry/osmosis-and-osmotic-pressure/)
   - [Colligative Properties - Chemistry LibreTexts](https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_ChemPRIME_(Moore_et_al.)/15%3A_Solutions/15.09%3A_Colligative_Properties)
   - [Chemical Equilibrium - Britannica](https://www.britannica.com/science/chemical-equilibrium)
   - [Equilibrium Constants Kp and Kc - Master Organic Chemistry](https://www.masterorganicchemistry.com/2021/02/17/equilibrium-constants-kp-and-kc/)

---

## Additional Notes

### Important Formulas Summary

**Colligative Properties:**
- Vapor pressure lowering: ΔP = P° × X_solute
- Boiling point elevation: ΔT_b = K_b × m × i
- Freezing point depression: ΔT_f = K_f × m × i
- Osmotic pressure: π = iMRT

**Equilibrium:**
- K_c: Concentration-based equilibrium constant
- K_p: Pressure-based equilibrium constant
- Relationship: K_p = K_c(RT)^Δn
- K_x: Mole fraction-based equilibrium constant
- Relationship: K_p = K_x × P_total^Δn

### Tips for Exam Preparation

1. **Understand the concepts** rather than memorizing formulas
2. **Practice derivations** step by step
3. **Work through numerical problems** with different scenarios
4. **Remember units** in calculations
5. **Check dimensional analysis** to verify your answers

---

**Document prepared for:** Gopalganj Textile Engineering College  
**Course:** Chemistry-I (CHEM 101)  
**Examination:** 2nd Class Test, L-1, T-1, 2024  
**Department:** Y+F+W+A

*Last updated: February 14, 2026*
