# Photochemistry — Exam Revision Notes

---

## 1. Key Definitions

| Term | Definition |
|------|-----------|
| **Photochemical Reaction** | A reaction that occurs due to energy acquired by interaction of electromagnetic radiation with matter |
| **Photochemistry** | Branch of chemistry dealing with reactions and physical effects brought about by direct/indirect interaction of radiation with substances |

---

## 2. Laws of Photochemistry

### ① Grotthus–Draper Law (1817)
> *"Only that radiation which is absorbed by a substance is effective in producing a photochemical reaction."*

### ② Einstein–Stark Law of Photochemical Equivalence
> *"When a substance undergoes a photochemical reaction, each photon (quantum) of radiation absorbed results in the decomposition of only one molecule."*

- Applied quantum theory to photochemical reactions
- One photon → activates one molecule (primary act)

---

## 3. Beer–Lambert Law

### Lambert's Law
When light passes through a medium, intensity decreases with thickness:
$$-\frac{dI}{dx} = aI \quad \Rightarrow \quad I = I_0 e^{-ax}$$

### Beer's Law
For a solution, absorbance also depends on **concentration**:
$$I = I_0 e^{-bc}$$

### Combined Beer–Lambert Law
$$\boxed{\log \frac{I_0}{I} = \varepsilon c x}$$

| Symbol | Meaning |
|--------|---------|
| $I_0$ | Incident light intensity |
| $I$ | Transmitted intensity |
| $c$ | Molar concentration |
| $x$ | Path length (thickness) |
| $\varepsilon$ | Molar extinction coefficient |

- **Valid for:** monochromatic radiation and dilute solutions
- **Basis of:** all colorimetric and spectrophotometric measurements

---

## 4. Consequences of Light Absorption

When light is absorbed, the following may occur:

1. **Heat** — kinetic energy of molecules increases → temperature rises
2. **Excitation** — electrons raised to higher energy levels
3. **Dissociation** — molecule breaks into smaller molecules, atoms, or free radicals
4. **Fluorescence/Phosphorescence** — absorbed radiation re-emitted

---

## 5. Quantum Efficiency / Quantum Yield (φ)

$$\boxed{\phi = \frac{\text{No. of molecules reacted/decomposed}}{\text{No. of photons (quanta) absorbed}}}$$

### High Quantum Yield
- No. of molecules reacting >> No. of photons absorbed
- Chain reactions are the common cause
- **Example:** H₂ + Cl₂ reaction (φ = 10⁶)

### Low Quantum Yield
- No. of molecules reacting < 1 per photon absorbed
- **Reasons:**
  1. Deactivation of excited molecules before reaction
  2. Excited molecules may not receive sufficient energy to react
  3. Dissociation fragments may recombine → low apparent yield

---

## 6. Decomposition of Hydrogen Halides (HI / HBr)

### HI Decomposition
- Absorbs radiation in range **2100–2820 Å**
- **Primary reaction:**
$$\text{HI} + h\nu \rightarrow \text{H} + \text{I}^* \text{ (excited)}$$

- **Secondary reactions (at ordinary temperature):**
$$\text{HI} + \text{H} \rightarrow \text{H}_2 + \text{I}$$
$$\text{I} + \text{I} \rightarrow \text{I}_2$$

- **Net reaction:**
$$2\text{HI} + h\nu \rightarrow \text{H}_2 + \text{I}_2 \quad \text{(Quantum yield = 2)}$$

> One photon decomposes **two** HI molecules → φ = 2

- **HBr** behaves similarly; same mechanism, same quantum efficiency.

---

## 7. Photo-decomposition Mechanisms

### ③ Acetone (Vapour, λ = 3000 Å)
$$\text{CH}_3\text{COCH}_3 + h\nu \rightarrow \text{C}_2\text{H}_6 + \text{CO}$$
**Products:** Ethane, diacetyl, free radicals, CO

**Mechanism:**
- **(a) Primary:** CH₃COCH₃ + hν → •CH₃ + CH₃CO* 
- **(b–e) Secondary:**
  - CH₃• + CH₃• → C₂H₆
  - CH₃CO* + CH₃CO* → (CH₃CO)₂
  - CH₃CO* → •CH₃ + CO
  - CH₃• + CH₃CO* → CH₃COCH₃

### ④ Ammonia (λ = 2144 Å)
$$\text{NH}_3 + h\nu \rightarrow \text{N}_2 + \text{H}_2 + \text{N}_2\text{H}_4$$
**Products:** N₂, H₂, Hydrazine

**Mechanism:**
- **(a) Primary:** NH₃ + hν → NH₂• + H•
- **(b) Secondary:**
  - NH₂• + NH₂• → N₂ + 2H₂
  - NH₂• + NH₂• → N₂H₄ (Hydrazine)
  - H• + H• → H₂

---

## 8. Luminescence

> Absorption of light excites molecules/atoms. If no photochemical reaction occurs, energy is re-emitted as **radiation** → the substance shows **luminescence**.

$$X + h\nu \rightarrow X^* \quad \text{(excited)}$$
$$X^* \rightarrow X + h\nu \quad \text{(re-emitted)}$$

---

## 9. Fluorescence

> *"Emission of light by excited atoms/molecules soon after excitation has stopped."*

- Lifetime of excited state: **~10⁻⁶ seconds or less**
- Emission ceases **immediately** when incident radiation stops
- Emitted wavelength **> incident wavelength** (lower energy)
- **Examples:** Uranium, glass, petroleum, quinine sulphate, sodium/mercury vapour, iodine

**Mechanism (successive stages):**
$$X^* \rightarrow X'^* + h\nu' \quad \text{(first emission)}$$
$$X'^* \rightarrow X + h\nu'' \quad \text{(second emission)}$$

---

## 10. Phosphorescence

> *"Emission of light that continues even after the source of exciting radiation is cut off."*

- Duration: **seconds or more** after irradiation stops
- Due to **forbidden transitions** (slow)
- Mainly found in **solids** (collision frequency is low → energy cannot dissipate easily)
- **Examples:** Sulphides of alkaline earth metals (Ca, Sr, Ba)

**Transitions (Energy level diagram):**
- F → N: Fluorescence
- F → P and P → F: Phosphorescence
- P → N and N → P: **Forbidden** transitions

**Quenching agents** — third bodies that absorb energy from excited molecules, reducing/stopping phosphorescence and fluorescence.

**Key difference:**

| Feature | Fluorescence | Phosphorescence |
|---------|-------------|----------------|
| Persists after source removed? | No | Yes |
| Lifetime | ~10⁻⁶ s | Seconds to hours |
| Transition type | Allowed | Forbidden |
| Common in | Solutions/gases | Solids |

---

## 11. Chemiluminescence

> *"Emission of light as a result of certain chemical reactions at ordinary temperature."*

Also called **"cold light"**.

- **Example 1:** Slow oxidation of white phosphorus (yellow phosphorus produces cold light)
- **Example 2:** H₂O₂ in alkaline medium → bright green luminescence

**Mechanism:** Heat of reaction activates some molecules → excited molecules revert to ground state by emitting light.

---

## 12. Photosensitization & Photosensitized Reactions

> *"A substance which can absorb light and induce a photochemical change without itself taking part in the reaction is called a **sensitiser**, and the phenomenon is called **photosensitisation**."*

- The reactions are called **Photosensitised Reactions**

**Classic example — H₂ dissociation by mercury:**
$$\text{Hg} + h\nu \rightarrow \text{Hg}^* \text{ (activated mercury)}$$
$$\text{Hg}^* + \text{H}_2 \rightarrow \text{Hg} + 2\text{H}$$

- H₂ alone does **not** dissociate at λ = 2537 Å
- In presence of Hg vapour (sensitiser) → dissociation occurs

**Example 2 — Ozone decomposition (sensitised by Cl₂):**
$$\text{Cl}_2 + h\nu \rightarrow \text{Cl}_2^* \text{ (activated chlorine)}$$
$$\text{Cl}_2^* + \text{O}_3 \rightarrow \text{Cl}_2 + \text{O}_2 + \text{O}$$
$$\text{O} + \text{O}_3 \rightarrow 2\text{O}_2$$

---

## 13. Sources of Photochemical Radiation

1. Sunlight
2. Arc light
3. Mercury Vapour Lamp *(richest in UV)*

---

## 14. Worked Example Questions

---

### 📘 Beer–Lambert Law Problems

---

**Q1. Find concentration from absorbance.**

> A solution has molar extinction coefficient ε = 50,000 L mol⁻¹ cm⁻¹ at 450 nm. A 1 cm cuvette shows absorbance A = 0.75. Find concentration.

**Formula:** A = εcx → c = A / (ε × x)

$$c = \frac{0.75}{50000 \times 1} = 1.5 \times 10^{-5} \text{ mol/L}$$

**Answer: c = 1.5 × 10⁻⁵ mol/L**

---

**Q2. Find % transmittance.**

> A solution absorbs 80% of incident light. What is the % transmittance and absorbance?

- % Transmittance = 100 − 80 = **20%**
- T = 20/100 = 0.20

$$A = \log \frac{I_0}{I} = \log \frac{1}{0.20} = \log 5 = 0.699$$

**Answer: T = 20%, A = 0.699**

---

**Q3. Find transmitted intensity.**

> Incident intensity I₀ = 100 units, ε = 200 L mol⁻¹ cm⁻¹, c = 0.01 mol/L, x = 1 cm. Find I.

$$\log \frac{I_0}{I} = \varepsilon c x = 200 \times 0.01 \times 1 = 2$$

$$\frac{I_0}{I} = 10^2 = 100 \Rightarrow I = \frac{100}{100} = 1 \text{ unit}$$

**Answer: I = 1 unit (99% absorbed)**

---

**Q4. Find molar extinction coefficient.**

> A 0.005 mol/L solution in a 2 cm cell has absorbance = 0.80. Find ε.

$$\varepsilon = \frac{A}{c \times x} = \frac{0.80}{0.005 \times 2} = \frac{0.80}{0.01} = 80 \text{ L mol}^{-1}\text{cm}^{-1}$$

**Answer: ε = 80 L mol⁻¹ cm⁻¹**

---

### 📗 Quantum Yield Problems

---

**Q5. Calculate quantum yield.**

> In a photochemical reaction, 1.5 × 10²⁰ molecules decomposed when 3.0 × 10²⁰ photons were absorbed. Find φ.

$$\phi = \frac{1.5 \times 10^{20}}{3.0 \times 10^{20}} = 0.5$$

**Answer: φ = 0.5 (low quantum yield)**

---

**Q6. Quantum yield from energy absorbed.**

> A photochemical reaction uses monochromatic light of λ = 300 nm. 100 J of energy is absorbed and 0.01 mol of product forms. Find φ.

**Step 1:** Energy of one photon:
$$E = \frac{hc}{\lambda} = \frac{6.626 \times 10^{-34} \times 3 \times 10^8}{300 \times 10^{-9}} = 6.626 \times 10^{-19} \text{ J}$$

**Step 2:** Total photons absorbed:
$$N = \frac{100}{6.626 \times 10^{-19}} = 1.51 \times 10^{20} \text{ photons}$$

**Step 3:** Moles of photons (1 mol = 6.022 × 10²³):
$$n_{photons} = \frac{1.51 \times 10^{20}}{6.022 \times 10^{23}} = 2.51 \times 10^{-4} \text{ mol}$$

**Step 4:** Quantum yield:
$$\phi = \frac{0.01}{2.51 \times 10^{-4}} \approx 39.8$$

**Answer: φ ≈ 40 (high quantum yield — chain reaction)**

---

**Q7. HI decomposition quantum yield.**

> When 2HI + hν → H₂ + I₂, one photon causes decomposition of 2 HI molecules. What is φ?

$$\phi = \frac{\text{molecules decomposed}}{\text{photons absorbed}} = \frac{2}{1} = 2$$

**Answer: φ = 2** *(standard result — always remember this)*

---

### 📙 Photon Energy Problems

---

**Q8. Energy of a photon.**

> Calculate energy of a photon of green light, λ = 550 nm. (h = 6.626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)

$$E = \frac{hc}{\lambda} = \frac{6.626 \times 10^{-34} \times 3 \times 10^8}{550 \times 10^{-9}}$$

$$E = \frac{1.988 \times 10^{-25}}{5.5 \times 10^{-7}} = 3.61 \times 10^{-19} \text{ J}$$

**Answer: E = 3.61 × 10⁻¹⁹ J per photon**

---

**Q9. Energy per mole of photons (Einstein).**

> Find energy per mole of photons at λ = 400 nm.

$$E = \frac{hcN_A}{\lambda} = \frac{6.626 \times 10^{-34} \times 3 \times 10^8 \times 6.022 \times 10^{23}}{400 \times 10^{-9}}$$

$$E = \frac{1.197 \times 10^{-7}}{4 \times 10^{-7}} \approx 299 \text{ kJ/mol}$$

**Answer: ≈ 299 kJ per mole of photons**

---

### 📕 Short Answer / Theory Questions

---

**Q10.** State and explain Beer–Lambert Law. Derive log(I₀/I) = εcx.
→ *Combine Lambert's law (I = I₀e⁻ᵃˣ) and Beer's law (I = I₀e⁻ᵇᶜ), then convert from natural log to log₁₀.*

**Q11.** Why does HI have quantum yield of 2?
→ *One photon decomposes one HI (primary step), then the H radical attacks another HI molecule (secondary step) → 2 molecules total per photon.*

**Q12.** Distinguish fluorescence and phosphorescence with examples.
→ *See Section 9 & 10 table.*

**Q13.** What is photosensitisation? Give one example.
→ *Mercury-sensitised dissociation of H₂. Hg absorbs the photon, transfers energy to H₂, and is itself regenerated.*

**Q14.** Give three reasons for low quantum yield.
→ *(i) Deactivation before reaction (ii) Insufficient energy (iii) Recombination of dissociation fragments*

---

## Quick-Recall Summary

| Topic | Key Point |
|-------|-----------|
| Grotthus-Draper | Only **absorbed** light causes reaction |
| Einstein-Stark | 1 photon → 1 molecule |
| Beer-Lambert | log(I₀/I) = εcx |
| Quantum yield | φ = molecules reacted / photons absorbed |
| HI decomposition | φ = 2 (one photon, two molecules) |
| Fluorescence | Stops when light stops; ~10⁻⁶ s |
| Phosphorescence | Continues after light stops; seconds+ |
| Chemiluminescence | Light from chemical reaction (cold light) |
| Photosensitiser | Absorbs light, triggers reaction, not consumed |
