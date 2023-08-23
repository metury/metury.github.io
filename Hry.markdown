---
layout: page
title: Hry [CZ]
permalink: /hry/
---

# Paralyzér

Paralyzér je picí hra pro několik hráčů.

## Pravidla

- Hraje se v jakémkoliv počtu lidí. Počet lidí oznáčíme $l$ a lidi očíslujeme.
- $n$-té kolo se pije $k = c \cdot n$ krát, kde $c$ je předem zvolená konstanta. (většinou 1)
- Eso se počítá vždycky tak aby majitel byl v nevýhodě. To jest, že eso je volná proměnná a za ní se dosadí buď 1 nebo 11 tak aby nebyla splněna podmínka pro výhru (je-li to možné).
- Pokud človek prohraje pije $k$-krát. Pokud vyhraje rozděluje svůj příděl mezi ostatní, tak aby to byla přirozená čísla (včetně 0) a součet musí být $k$.
	- Nebo-li na $x_{1}, x_{2}, \dots x_{l} \in \mathbb{N}_{0}$, kde pak $\sum_{i = 1}^{l} x_{i} = k$.
- Jedna osoba tahá karty z balíčku a provádí dané akce podle daného kola. Většinou kartu vytáhne před každého jednotlivého člověka, který se účastní.

## Kola

1. Kolo červená / černá.
2. Kolo vyšší / nižší oproti předchozí.
3. Kolo vně / uvnitř vůči předchozím.
4. Kolo srdce / káry / kříže / piky.
5. Kolo - rozloží se dvě řady po šesti kartách, jedna řada je picí (odkryje se karta, kdo ji má, tak pije), druhá řada je určovací (odkryje se karta, kdo ji má, tak určuje).
