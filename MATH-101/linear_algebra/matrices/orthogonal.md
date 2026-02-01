**Claim:**
If ( A ) is an orthogonal matrix, then

1. ( A^T ) is orthogonal
2. ( A^{-1} ) is orthogonal

---

## 🔹 Definition (key idea)

A matrix ( A ) is **orthogonal** if
[
A^T A = I
]
From this, an important consequence follows:
[
A^{-1} = A^T
]

---

## 🔹 1. Prove that ( A^T ) is orthogonal

To show ( A^T ) is orthogonal, we must prove:
[
(A^T)^T (A^T) = I
]

Now,
[
(A^T)^T = A
]

So,
[
(A^T)^T (A^T) = A A^T
]

But since ( A ) is orthogonal,
[
A^T A = I
]

Taking transpose on both sides:
[
(A^T A)^T = I^T
]
[
A A^T = I
]

Hence,
[
(A^T)^T (A^T) = I
]

✅ Therefore, **( A^T ) is orthogonal**.

---

## 🔹 2. Prove that ( A^{-1} ) is orthogonal

To show ( A^{-1} ) is orthogonal, we must prove:
[
(A^{-1})^T A^{-1} = I
]

Since ( A ) is orthogonal:
[
A^{-1} = A^T
]

Substitute:
[
(A^{-1})^T A^{-1} = (A^T)^T A^T
]
[
= A A^T
]

From earlier,
[
A A^T = I
]

So,
[
(A^{-1})^T A^{-1} = I
]

✅ Therefore, **( A^{-1} ) is orthogonal**.

---

## 🔹 Final Conclusion

If ( A ) is an orthogonal matrix, then:

* ( A^T ) is orthogonal
* ( A^{-1} ) is orthogonal

✨ Proven.


