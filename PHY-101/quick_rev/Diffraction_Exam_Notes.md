# ⚡ DIFFRACTION — Exam Notes

---

## 🔑 KEY DEFINITIONS

**Diffraction**: Bending of light around edges/obstacles and spreading into the geometrical shadow region.

**Diffraction Grating**: A surface with a large number of parallel, equidistant slits (lines) used to disperse light.

**Zone Plate**: An optical device with alternately transparent and opaque concentric zones that focuses light by diffraction (acts like a convex lens).

**Dispersive Power**: Ability of a grating to separate two nearby wavelengths.

**Resolving Power**: Ability of a grating to distinguish two nearby spectral lines.

**Fresnel Diffraction**: Source and screen are at finite distances from the obstacle. No lenses needed.

**Fraunhofer Diffraction**: Source and screen are at infinite distances (parallel rays). Lenses are used.

---

## 📐 KEY FORMULAS

### 1. Grating Equation
```
(a + b) sin θ = nλ
```
- `a + b` = grating element (distance between consecutive slits)
- `θ` = angle of diffraction
- `n` = order of spectrum
- `λ` = wavelength

> If N = total lines, grating element = 1/N (per cm)

---

### 2. Dispersive Power
```
dθ/dλ = n / [(a+b) cos θ]
```
Also written as:
```
dθ/dλ = [ ((a+b)/n)² − λ² ]^(−1/2)  × 1/n
```
(from 2017 question formula)

**Higher order → higher dispersive power**

---

### 3. Resolving Power of Grating
```
RP = λ/dλ = nN
```
- `n` = order of spectrum
- `N` = total number of lines on grating
- `dλ` = minimum resolvable wavelength difference

**Resolving Power = Number of lines × Order of spectrum**

---

### 4. Zone Plate — Radius of nth Zone
```
rₙ = √(nλf)
```
- `rₙ` = radius of nth zone
- `λ` = wavelength
- `f` = focal length

---

### 5. Bragg's Law (X-ray Diffraction)
```
2d sin θ = nλ
```
- `d` = interplanar spacing
- `θ` = glancing angle
- `n` = order of reflection

---

## 🧮 SOLVED NUMERICALS

### ✅ Q: Radius of 1st zone plate — focal length 20 cm, λ = 5000 Å

**Given:** n = 1, f = 20 cm = 0.20 m, λ = 5000 Å = 5000 × 10⁻¹⁰ m

```
r₁ = √(nλf)
r₁ = √(1 × 5000×10⁻¹⁰ × 0.20)
r₁ = √(1×10⁻⁷)
r₁ = 3.16 × 10⁻⁴ m = 0.316 mm
```

---

### ✅ Q: Minimum lines to resolve sodium lines (λ = 5890 Å, 5896 Å) in 1st order

**Given:** λ = 5890 Å, dλ = 5896 − 5890 = 6 Å, n = 1

```
RP = λ/dλ = 5890/6 ≈ 982
RP = nN  →  N = RP/n = 982/1 ≈ 982 lines
```
**Minimum lines required ≈ 982**

---

### ✅ Q: Dispersive power — grating 4000 lines/cm, 3rd order, λ = 5000 Å

**Given:** N = 4000/cm → (a+b) = 1/4000 cm = 2.5×10⁻⁴ cm = 2.5×10⁻⁶ m  
n = 3, λ = 5000 Å = 5×10⁻⁷ m

First find θ:
```
sin θ = nλ/(a+b) = (3 × 5×10⁻⁷)/(2.5×10⁻⁶) = 0.6  → θ = 36.87°
cos θ = 0.8
```
```
dθ/dλ = n/[(a+b) cos θ] = 3/(2.5×10⁻⁶ × 0.8)
       = 3/2×10⁻⁶ = 1.5×10⁶ rad/m
```

---

### ✅ Q: Wavelength of sodium light — grating 4250 lines/cm, 2nd order, θ = 30°

**Given:** N = 4250/cm → (a+b) = 1/4250 cm = 2.35×10⁻⁶ m  
n = 2, θ = 30° → sin 30° = 0.5

```
λ = (a+b) sin θ / n = (2.35×10⁻⁶ × 0.5)/2
λ = 5.88×10⁻⁷ m = 5880 Å
```

---

## 📊 COMPARISON TABLES

### Fresnel vs Fraunhofer Diffraction

| Feature | Fresnel | Fraunhofer |
|---|---|---|
| Source distance | Finite | Infinite |
| Screen distance | Finite | Infinite |
| Wavefront | Spherical/Cylindrical | Plane |
| Lenses used? | No | Yes |
| Complexity | More complex | Simpler |

### Interference vs Diffraction

| Feature | Interference | Diffraction |
|---|---|---|
| Origin | Two separate sources | Single slit/obstacle |
| Fringes | Equal width & intensity | Unequal, central max is brightest |
| Minima | Perfectly dark | Not perfectly dark |

### Zone Plate vs Convex Lens

| Feature | Zone Plate | Convex Lens |
|---|---|---|
| Works by | Diffraction | Refraction |
| Multiple foci | Yes | No |
| Material | Opaque & transparent zones | Glass |

---

## 📌 HUYGENS' PRINCIPLE

> **Every point on a wavefront acts as a secondary source of wavelets. The new wavefront is the common tangent (envelope) to all secondary wavelets.**

**Application — Snell's Law of Refraction:**
Using Huygens' principle, if the incident wavefront hits the interface, the refracted wavefront satisfies:
```
sin i / sin r = v₁/v₂ = n₂/n₁ = n (refractive index)
```

---

## ⭐ QUICK REVISION

| Formula | Use |
|---|---|
| `(a+b) sinθ = nλ` | Grating equation |
| `RP = nN` | Resolving power |
| `dθ/dλ = n/[(a+b)cosθ]` | Dispersive power |
| `rₙ = √(nλf)` | Zone plate radius |
| `2d sinθ = nλ` | Bragg's law |

---

*Good luck on your exam! 🎯*
