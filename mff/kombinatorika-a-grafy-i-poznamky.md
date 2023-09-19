---
layout: page
nav_exclude: true
title: Kombinatorika a grafy 1
author: Tomáš Turek
---

*Přednáška 1*

* * *

## Odhady faktoriálu
- $n \in \mathbb{N}: n!$
- Poskládání $n$ prvků.

### Tvrzení 1.1
- $\forall n \in \mathbb{N}: n^{n/2} \leq n! \leq n^n$

<!--
#### *Důkaz:*
- *Horní odhad se dá napsat jako: $n! = \prod_{i=1}^{n}i \leq \prod_{i=1}^{n} n = n^{n}$.*
- *Dolní odhad použijeme, že $i(n+1 - i) \geq n$ (to platí pro $i=1$ a $i=n$).*
- *Potom pro $2 \leq i \leq \lceil \frac{n}{2} \rceil$ máme $i(n+1-i) \geq 2 \frac{n}{2} = n$.*
- *Obdobný odhad je i pro $\lceil \frac{n}{2} \rceil \leq i \leq n$.*
- *Následně $(n!)^2 = n1 \cdot n2 \dots 2(n-1) \cdot 1n \geq n^{n}$.*
- *Potom platí, že $n! \geq n^{n/2}$.*
- $\Box$
-->

### Věta 1.2:
- $\forall n \in \mathbb{N}: e (\frac{n}{e})^n \leq n! \leq en(\frac{n}{e})^n$

<!--
#### *Důkaz:*
1. *Horní odhad*
	- *pro $n = 1$ platí $(1 = 1! \leq e 1 \left( \frac{1}{e} \right)^{1} = 1)$*
	- *nechť $n \geq 2$*
	- *$n! = n (n-1)! \leq n e (n-1)\left( \frac{n-1}{e} \right)^{n-1} = e n \left( \frac{n}{e} \right)^{n}e \left( \frac{n-1}{n} \right)^{n} - \left( \frac{n-1}{n} \right)^{n} = e \left( 1 - \frac{1}{n} \right)^{n} \leq e \left( e^{\frac{-1}{n}} \right)^{n} = 1$*
2. *Dolní odhad*
	- *pro $n = 1$ platí $(1 = \left( \frac{1}{n} \right)^{1} \leq 1! = 1)$*
	- *nechť $n \geq 2$*
	- *$n! = n(n-1)! \geq n e \left( \frac{n-1}{e} \right)^{n-1} = e \left( \frac{n}{e} \right)^{n} e \left( \frac{n-1}{n} \right)^{n-1} - \left( \frac{n-1}{n} \right)^{n-1} \geq 1 \Leftrightarrow \frac{1}{e} \left( \frac{n}{n-1} \right)^{n-1} \leq 1$*
	- *$\frac{1}{e} \left( \frac{n}{n-1} \right)^{n-1} = \frac{1}{e} \left( 1 + \frac{1}{n-1} \right)^{n-1} \leq \frac{1}{e} \left( e^{\frac{1}{n-1}} \right)^{n-1}$*
- $\Box$
-->

### Lemma 1.3:
- $1+x \leq e^x$

<!--
#### *Důkaz:*
- *$f9x0 := e^x - (x+1)$ - chceme ukázat, že $f(x) \geq 0$ pro $\forall x \in \mathbb{R}$*
- *$f'(x) = e^x - 1 \Rightarrow (f'(x) = 0 \Leftrightarrow x = 0)$*
- *$f''(x) = e^x$*
- *$f''(x) = 1 > 0 \Rightarrow$ v bodě $x = 0$ je globální minimum pro $f \Rightarrow f(x) \geq 0$ pro $\forall x \in \mathbb{R}$*
- $\Box$
-->

### Věta 1.4 (Stirlingův vzorec):
$$
n! \approx n \sqrt{2\pi n} (\frac{n}{e})^n
$$
$$
\lim_{n \to \infty} \frac{n!}{\sqrt{2\pi n}(\frac{n}{e})^n} = 1
$$

<!--
#### *Bez důkazu*
-->

## Binomický koeficient
- počet $k$-prvkových podmnožin $n$-prvkových množin
- $n,k \in \mathbb{N}: \binom{n}{k}=\frac{n!}{k!(n-k)!}$

### Pozorování 1.5:
1. $\forall n,k \in \mathbb{N}: (\frac{n}{k})^k \leq \binom{n}{k} \leq n^k$
2. největší prvek $\binom{n}{\lceil \frac{n}{2} \rceil} = \binom{n}{\lfloor \frac{n}{k} \rfloor}$

<!--
#### *Důkaz:*
- $\Box$
-->

### Binomická věta
$$
\frac{2^{2m}}{2m+1} \leq \binom{2m}{m} \leq 2^{2m}
$$

### Věta 1.6:
$\forall m \in \mathbb{N}: \frac{2^{2m}}{2\sqrt{m}} \leq \binom{2m}{m} \leq \frac{2^{2m}}{\sqrt{2m}}$

- užití Stirlingového vzorce: $\binom{2m}{m} \approx \frac{2^{2m}}{\sqrt{\pi m}}$
- $\forall k,n \in \mathbb{N}: n > k, \binom{n}{k} \leq (\frac{en}{k})^k$

<!--
#### *Důkaz:*
- $\Box$
-->

### Aplikace (náhodné procházky)
- $n$ kroků a v každém bodě mám $50%$ že půjdu doprava anebo doleva
- střední hodnota počtu návratů do $0$
- $X$ - počet návratů do $0$
- $A_{2n}=$ jev po $2n$ krocích se dostanu do $0$
- $X = \sum_{n=1}^{\infty} I_{A_{2n}}$
- $Pr[A_{2n}]=\frac{\binom{2n}{n}}{2^2n}$
$$
\mathbb{E}[X] = \mathbb{E}[\sum_{n=1}^{\infty}I_{A_{2n}}] = \sum_{n=1}^{\infty} \mathbb{E} [I_{A_{2n}}] = 
$$
$$
= \sum_{n=1}^{\infty} Pr [I_{A_{2n}}] = \sum_{n=1}^{\infty} \frac{\binom{2n}{n}}{2^2n} \geq \sum_{n=1}^{\infty} \frac{1}{2\sqrt{n}} = \infty
$$


*Přednáška 2*

* * *

## Vytvořující funkce
- početní metoda, kde spojitými funkcemi vyjadřujeme posloupnosti

### Definice
- Pro posloupnost $(a_{i})_{i=0}^{\infty}$ je mocninnou řadou $a(x) = \sum_{i=0}^{\infty}a_{i}x^{i}$.

- Posloupnost lze převést na funkci, ale při převodu nazpátek je třeba aby posloupnost nerostal moc rychle.

### Příklady:
1. $a_i = 1$ pokud $0 \leq i \leq n$ jinak $a_i = 0$. Tedy $(a_i)_{i=0}^{\infty}=(1,\dots,1,0,0,\dots)$. Potom funkce je $\frac{1-x^{n+1}}{1-x}$ z geometrické řady.
2. $\forall i: a_i = 1$ to je potom nekonečná geometrická řada, takže je to $\frac{1}{1-x}$.
3. $a_i = \binom{n}{i}$ potom funkce vychází z binomické věty, takže je $(1+x)^{n}$.

### Tvrzení 2.1:
- Pokud pro $(a_i)_{i=0}^{\infty} \exists k \in \mathbb(R)$ takové, že $\forall i: |a_i| \leq k^i$, pak pro všechna $x \in (\frac{-1}{k}, \frac{1}{k})$ řada $a(x) = \sum_{i=0}^{\infty}a_ix^i$ konverguje absolutně a na libovolném $\epsilon$ okolí 0 určuje i $koeficienty_a$, protože $i_a = \frac{a^{(i)}(0)}{i!}$.

<!-- #### *Bez důkazu* -->

### Postup
1. kombinatorický objekt s neznámým počtem
2. vytvořující funkce
3. rozklad na vytvořující funkce se známými koeficienty
4. určení hodnoty

#### Tabulka
| Operace                  | Posloupnosti                                       | Funkce                                                                          |
| :----------------        |  :-----------------------------                    | :-----------------------------------------------:                               |
| Součet                   | $(a_0+b_0, a_1+b_1, \dots)$                        | $(a+b)(x) = \sum_{i=0}^{\infty}(a_i+b_i)x^i$                                    |
| $\alpha$-násobek         | $(\alpha a_0, \alpha a_1, \dots)$                  | $\alpha a(x) = \sum_{i=0}^{\infty}(\alpha a_i)x^i$                              |
| Posun vpravo o $n$ pozic | $(0,0,\dots ,a_0, a_1, \dots)$                     | $x^na(x)\sum_{i=0}^{\infty}a_ix^{i+n}$                                          |
| Posun vlevo o $n$ pozic  | $(a_n, a_{n+1}, dots )$                            | $\sum_{i=0}^{\infty}(a_{i+n}x^i = \frac{a(x) - \sum_{i=0}^{\infty}a_ix^i}{x^n}$ |
| Dosazení $\alpha x$      | $(a_0, \alpha a_1, \alpha^2 a_2, \dots)$           | $a(\alpha x) = \sum_{i=0}^{\infty}a_i+ \alpha^i x^i$                            |
| Dosazení $x^n$           | $(a_0, 0, \dots, 0, a_1, 0, \dots, 0, a_2, \dots)$ | $a(x^n) = \sum_{i=0}^{\infty}a_ix^ni$                                           |
| Derivace                 | $(a_1, 2a_2, 3a_3, \dots)$                         | $a'(x) = \sum_{i=1}^{\infty}ia_ix^{i-1}$                                        |
| Integrál                 | $(0, a_0, \frac{a_1}{2}, \frac{a_2}{3}, \dots)$    | $\int_{0}^{x} a(x) \mathtt{d} x = \sum_{i=0}^{\infty}\frac{a_i}{i+1}x^{i+1}$            |
| Součin                   | $(c_0, c_1, c_2, \dots)$                           | $a(x)b(x) = \sum_{i=0}^{\infty}(c_i)x^i$                                        |


### Řešení rekurentních rovnic
- ukázka na Fibonacciho čísle
- určíme $F_n$ jako koeficient funkce $F(x)=\sum_{i=0}^{\infty}F_ix^i$
- máme $F_{n+2} = F_{n+1} + F_{n}, \forall n\geq 0$
- **vynásobíme rovnici $x^n$:** $F_{n+2} x^n= F_{n+1} x^n + F_{n} x^n$
- **sčítáme přes $n \geq 0$:** $\sum_{n \geq 0} F_{n+2} x^n= \sum_{n \geq 0} F_{n+1} x^n + \sum_{n \geq 0} F_{n} x^n$
- to se rovná
$$
\frac{F(x)-F_0 - F_1}{x^2} = \frac{F(x)-F_0}{x} +F(x)
$$
- teď určíme
$$
F(x) = \frac{x}{1-x-x^2} = \frac{x}{(1 - \frac{1 + \sqrt{5}}{2}x)(1 - \frac{1 - \sqrt{5}}{2}} = \frac{\frac{1}{\sqrt{5}}}{1 - \frac{1 + \sqrt{5}}{2}x} - \frac{\frac{1}{\sqrt{5}}}{1 - \frac{1 - \sqrt{5}}{2}x}
$$
- to už lze převést
$$
F_n = \frac{1}{\sqrt{5}}\left[ \left( \frac{1+\sqrt{5}}{2} \right)^n - \left( \frac{1-\sqrt{5}}{2} \right)^n \right]
$$
- to je tzv. **Binetův vzorec**
- tento postup funguje pro všechny **Homogenní lineární rekurence k-tého stupně s konstantními koeficienty**, tedy typu $a_{n+k} = \alpha_{k-1}a_{n+k-1} + \dots + \alpha_0 a_n, k \in \mathbb{N}, \alpha_{k-1}, \dots, \alpha_0 \in \mathbb{R}$

*Přednáška 3*

* * *

## Aplikace vytvořujících funkcí
- nadefinujeme zobecněnou **binomickou vět** pro $n \in \mathbb{R}, r \in \mathbb{Z}_{0}^{+}: \binom{n}{r}:= \frac{n(n-1)(n-2)\dots(n-r+1)}{r!}$, speciálně $\binom{n}{0}=1$

### Věta 3.1 (Zobecněná binomická věta):
$\forall r \in \mathbb{R}$ je $(1+x)^r$ vytvořující funkcí posloupnosti $\left( \binom{r}{0}, \binom{r}{1}, \binom{r}{2}, \dots \right)$ a řada $\sum_{i=0}^{\infty}\binom{r}{i}x^{i}$ konverguje pro $\forall x \in (-1, 1)$.

<!--
#### *Důkaz:*
- $\Box$
-->

### Důsledek 3.2:
$\forall n \in \mathbb{N} \ \forall x \in (-1,1)$ platí $\frac{1}{(1-x)^{n}}=\sum_{i=0}^{\infty}\binom{n+i-1}{n-1} x^{i}$.

<!--
#### *Důkaz:*
- $\Box$
-->

### Aplikace - počítání binárních zakořeněných stromů
- **Zakořeněný binární strom** - buď je prázdný, nebo obsahuje speciální vrchol zvaný **kořen** a pár zakořeněných stromů, které tvoří **levý** a **pravý podstrom**.
- $b_{n}$ = počet bin. zak. stromů na $n \in \mathbb{N}_{0}$ vrcholech
- potom $b(x) = \sum_{n = 0}^{\infty}b_{n} x^{n}$ je příslušná vytvořující funkce

### Věta 3.3:
- Pro každé $n \in \mathbb{N}_{0}$ platí $b_{n}=\frac{1}{n+1}\binom{2n}{n}$. Kde se $\frac{1}{n+1}\binom{2n}{n}$ značí jako $C_n$ a říká se mu n-té **Catalanovo číslo**.

<!--
#### *Důkaz:*
- $\Box$
-->

- Catalanova čísla mají mnoho interpretací, například počet triviálních uzávorkování s $n$ páry závorek anebo počet triangulací.

*Přednáška 4*

* * *

## Konečně projektivní roviny (KPR)
- jistá nová struktura, která je velice symetrická a vzácná
- jedná se o množinový systém (**hypergraf** - zobecnění grafu, kde hrany mohou být k-tice)
- využívá se v samoopravných kódech
- přichází z geometrie

##### Eukleidovy axiomy
1. každé 2 body určují přímku
2. každou úsečku lzze prodloužit na přímku
3. ze zadaného bodu lze opsat kružnici procházejícím druhým zadaným bodem
4. všechny pravé úhly jsou stejné
5. bodem lze k přímce vést právě 1 rovnoběžku

### Definice KPR:
- Konečná množina $\mathcal{X}$ a systém $\mathcal{P}$ podmnožin $\mathcal{X}$ tvoří KPR $(\mathcal{X}, \mathcal{P})$ = (body, přímky) pokud splňuje tyto tři axiomy:
1. $\forall x,y \in \mathcal{X}, x \neq y, \exists !P \in \mathcal{P}: \{x,y\} \subseteq P$
	- každé 2 body určují právě jednu přímku
2. $\forall P,Q \in \mathcal{P}, P \neq Q: |P \cap Q| = 1$
	- každé 2 přímky se protínají právě v 1 bodě
3. $\exists C \subseteq \mathcal{X}, |C| = 4, \forall P \in \mathcal{P}: |C \cap P| \leq 2$
	- existují 4 body v obecné poloze

- Jako příklad je **Fanova rovina**, která má 7 přímek a 7 bodů.

### Tvrzení 4.1:
- V KPR obsahuje každá přímka stejný počet bodů. $\forall P,Q \in \mathcal{P} |P|=|Q|$

<!--
#### *Důkaz:*
- $\Box$
-->

### Řád projektivní roviny:
- $(\mathcal{X}, \mathcal{P})$ je $|P|-1$ pro $P \in \mathcal{P}$

### Tvrzení 4.2:
- Je-li $(\mathcal{X}, \mathcal{P})$ KPR řádu $n$, pak platí:
1. každým bodem prochází právě $n+1$ přímek
2. $|\mathcal{X}| = n^{2} + n + 1$
3. $|\mathcal{P}| = n^{2} + n + 1$

<!--
#### *Důkaz:*
- $\Box$
-->

### Dualita KPR
- "přechod z přímek na body a z bodů na přímky"
- **duální množinový systém** k množinovému systému $(\mathcal{X}, \mathcal{P})$ je $(\mathcal{P}, \{ \{P \in \mathcal{P} : x \in P \}: x \in \mathcal{X} \})$, zkráceně **duál**

### Tvrzení 4.3:
- Duálem KPR řádu $n$ je KPR řádu $n$.

<!--
#### *Důkaz:*
- $\Box$
-->

### Existence KPR:
- Kromě Fanovy roviny zatím neznáme žádné další příklady konečných projektivních rovin. Ale samozřejmě se ví o dalších které existují jmenovitě pro $(2,3,4,5,7,8,9,11)$ a $12$ už se neví.

#### Domněnka
- KPR řádu $n$ existuje $\Leftrightarrow$ $n$ je mocnina prvočísla
- pořád otevřené

### Věta 4.4:
- Pokud existuje algebraické těleso o $n$ prvcích, potom existuje KPR řádu $n$.

<!--
#### *Důkaz:*
- $\Box$
-->

- konstrukce funguje nad každým tělesem a například nad $\mathbb{R}$ dává **reálnou projektivní rovinu**

*Přednáška 5*

* * *

## Latinský čtverec
- řádu $n \in \mathbb{N}$ je tabulka $n \times n$ čísel z $\{ 1, \dots, n\}$, ve které se žádné číslo neopakuje v žádném řádku ani sloupci.

### Ortogonalita
- Latinský čtverce $L, L'$ stejného řádu jsou **ortogonální**, pokud pro každé $l, l' \in \{ 1, \dots , n\}$ existují $i,j \in \{ 1, \dots , n\}$, takové že $L_{ij} = l, L'_{ij}=l'$.
- zapisuje se jako $L  \perp L'$

### Pozorování 5.2:
- Pro ortogonální latinské čtverce $L, L'$ řádu $n$ a pár $(l,l') \in \{ 1, \dots , n\} \times \{ 1, \dots , n\}$ je pozice $(l,l')$ s $L_{ij}=l, L'_{ij}=l'$ určena jednoznačně.

<!--
#### *Důkaz:*
- *počet párů $(l,l')$ je $n^{2}$, stejně jako počet párů $(i,j)$*
- $\Box$
-->

### Pozorování 5.3:
- Je-li $L = (L_{ij})_{i,j = 1}^n$ latinský čtverec a $\Pi : \{ 1, \dots , n\} \to \{ 1, \dots , n \}$ permutace, tak potom $\Pi (L) := (\Pi (L_{ij})_{i,j =1}^n$ je latinský čtverec stejného řádu.

<!-- #### *Triviální důkaz* -->

- $\Rightarrow$ BŮNO první řádek je vžzdy vzestupná řada
- $\Rightarrow$ Je-li $L \perp L'$, pak $\Pi (L) \perp L'$

### Důsledek 5.4:
- Počet **navzájem ortogonálních** nanejvýš čtverců řádu $n \in \mathbb{N}$ je $n-1$.

<!--
#### *Důkaz:*
- $\Box$
-->

### Věta 5.5:
- Konečná projektivní rovina řádu $n \geq 2$ existuje $\Leftrightarrow$ existuje $n-1$ navzájem ortogonálních latinských čtverců řádu $n$.

<!--
#### *Důkaz:*
- $\Box$
-->

*Přednáška 6*

* * *

## Toky v sítích
- Síť je čtveřice $(G, z, s, c)$, kde **$G = (V, E)$** je orientovaný graf (tedy $V \subseteq V \times V$), $z \in V$ je **zdroj**, $s \in V$ je **stok** ($z \neq s$) a $c: E \to \mathbb{R}_{0}^{+}$. Hodnotu $c(e)$ nazýváme **kapacitou** hrany $e \in E$.
- Tok v síti $(G = (V, E), z, s, c)$ je $f: E \to \mathbb{R}_{0}^{+}$ splňující následující podmínky:
1. $\forall r \in E : 0 \leq f(e) \leq c(e)$
	- velikost toku je omezená kapacitou
2. $\forall u \in V \setminus \{ z, s\}: \sum_{v:(u,v) \in E} f(u,v) - \sum_{v:(v, u) \in E} f(v,u) = 0$
	- **Kirchhoffův zákon** co přitéká do vrcholu, musí odtéct
- **Velikost toku** $f$ je $w(f) = \sum_{v:(z,v) \in E} f(z,v) - \sum_{v:(v, z) \in E} f(v,z)$

### Tvrezení 6.1:
- Pro každou síť existuje maximální tok.

<!--
#### *Náčrt důkazu:*
- *z analýzy víme, že spojitá funkce na kompaktní množině nabývá maxima*
- *množina $\mathcal{F} \subseteq \mathbb{R}^{|E|}$ všech toků je kompaktní funkce $w: \mathcal{F} \to \mathbb{R}$ je spojitá*
- $\Box$
-->

### Řez v síti $(G, z, s, c)$
- je $R \subseteq E$ taková, že každá orientovaná cesta ze zdroje $z$ do stoku $s$ používá aspoň jednu hranu z $R$.
- speciálně hrany vycházející ze $z$ či hrany vycházející do $s$ tvoří řez
- **kapacita řezu** $R$ je $c(R) = \sum_{e \in R}c(e)$
- řezu je jen konečně mnoho $\Rightarrow$ jistě existuje řez minimální kapacity

### Věta 6.2 (hlavní věta o tocích):
- Velikost maximálního toku = kapacita minimálního řezu, nebo-li, pro každou síť platí: $\max \ w(f) = \min \ c(R)$, kde $f$ je tok a $R$ řez.

### Elementární řez
- pro $A \subseteq V$, kde $z \in A$ a $s \notin A$, nazveme množinu $R_A = \{ e = (u,v) \in E: u \in A, v \notin A\}$ **elementárním řezem**
- opravdu se jedná o řez, protože pokaždé su musí nějak opustit $A$

### Pozorování 6.3:
- Každý řez $R$ obsahuje elementární řez.

<!--
#### *Důkaz:*
- *zvolme $A$ jako množinu vrcholů dosažitelných po orientované cestě ze zdroje v grafu $(V, E \setminus R)$*
- *potom $z \in A, s \notin A$, protože $R$ je řez $\Rightarrow R_A$ existuje*
- *$(u,v) \in R_A \Leftrightarrow u \in A, v \notin A \Rightarrow (u,v) \in R$*
- *tedy $R_A \subseteq R$*
- $\Box$
-->

### Pozorování 6.4:
- Každý **v inkluzi minimální** řez $R$ je elementární. Nebo-li $R \setminus \{ e \}$ není řezem pro $\forall e \in R$.

<!--
#### *Důkaz:*
- *z pozorování 6.3 musí $R$ obsahovat elementární řez $R_A \subseteq R$*
- z minimality platí $R_A = R$
- $\Box$
-->

### Lemma 6.5:
- Je-li $f$ tok a $R_A$ elementární řez, pak platí
$$
w(f) = \sum_{u \in A, v \notin A, (u,v) \in E}f(u,v) - \sum_{u \in A, v \notin A, (v, u) \in E} f(v,u)
$$

<!--
#### *Důkaz:*
- $\Box$
-->

<!--
#### *Důkaz věty 6.2:*
- $\Box$
-->

### Fordův-Fulkersonův algoritmus
1. Nastav $f(e) = 0$ pro $\forall e \in E$
2. Dokud $\exists$ zlepšující cesta $P$, vylepšuj po ní tok o $\epsilon_P$
3. Stávající tok $f$ vrať jako maximální

### Věta 6.6 (věta o celočíselnosti):
- Jsou-li kapacity celočíselné, pak F.F. najde max. tok po konečně mnoha krocáích a navíc má takový tok celočíselnou velikost.

<!--
#### *Důkaz:*
- *tok se vždy zlepší o celé číslo $\epsilon_P >$ a $w(f) < \infty$*
- $\Box$
-->

- existují sítě s iracionálními kapacitami, kde F.F nenajde max. tok a ani nekonverguje k výsledku
- v síti s celočíselnými kapacitami má F.F. alg. časovou složitost $O(w(f)(|V|+|E|))$, kde $f$ je tok
	- takže je to v čase $O(|V|+|E|)$
- pokud bychom specifikovali výběr zlepšující cesty na nejkratší dostaneme **Edmondsův-Karpův algoritmus**, který má časovou složitost $0(|V|+|E|^2)$

*Přednáška 7*

* * *

## Königova-Egerváryho věta
- V grafu $G = (V,E)$ nazveme množinu $C \subseteq V$ **vrcholovým pokrytím**, pokud $C \cap e \neq \emptyset$ pro $\forall e \in E$.
- Zjistit minimální velikost vrcholové pokrytí je NP-těžká úloha.
- **Párováním** v $G$ je podgraf tvořený disjunktními hranami.

### Věta 7.1 (Königova-Egerváryho věta):
- V bipartitiním grafu je velikost min. vrcholového pokrytí rovna velikosti maximálního párování (do počtu hran).

<!--
#### *Důkaz:*
- $\Box$
-->

## Hallova věta
- Mějme konečné množiny $X$ a $I$.
- **Množinový systém** $\mathcal{M}$ je $(M_{i}: i \in I)$, kde $M_{i} \subseteq X$.
- **Systém ruzných reprezentantů (SRR)** pro $\mathcal{M}$ je prosté zobrazení $f: I \to X$ takové, že $\forall i \in I : f(i) \in M_{i}$.
	- tedy $f$ je výběr jednoho prvku z každé $M_{i}$ takový, že žádný prvek nevybereme víckrát
- **Incidenční graf** systému $\mathcal{M}$ je bipartitní graf $G_{\mathcal{M}}=(I \cup X, E)$, kde $E = \{ \{ i,x\}: i \in I, x \in X, x \in M_{i} \}$
- Pokud $\mathcal{M}$ má SSR $\Leftrightarrow$ $S_{\mathcal{M}}$ obsahuje párování velikosti $|I|$.

### Věta 7.2 (Hallova věta):
- $\mathcal{M}$ má SSR $\Leftrightarrow \forall J \subseteq I: |\cup_{j \in J}M_{j}| \geq |J|$
- pravé části se říká **Hallova podmínka**
- také se věta označuje jako **Hall's marriage theorem**

<!--
#### *Důkaz:*
- $\Box$
-->

- s axiomem výběru by šlo dokázat variantu s konečnými $M_{i}$ a nekonečnými $I,X$
	- s nekonečnými $I,X$ to platit nemusí

### Rozšiřování latinských obdélníků
### Důsledek 7.3:
- V každém bipartitním grafu $G =  (A \cup B, E)$ s $E \neq \emptyset$ a $\mathtt{deg}_{G}(x) \geq \mathtt{deg}_{G}(y)$ pro každé $x \in A, y \in B$ existuje párování velikosti $|A|$.

<!--
#### *Důkaz:*
- $\Box$
-->

### Latinský obdélník
- typu $k \times n$ pro $k \leq n$ je tabulka s řádky s $n$ sloupci vyplněnými symboly $1, \dots, n$ tak, že se v žádném řádku ani sloupci žádný symbol neopakuje.

### Věta 7.4:
- Každý latinský obdélník typu $k \times n$ lze doplnit na latinský čtverec řádu  $n$.

<!--
#### *Důkaz:*
- $\Box$
-->

*Přednáška 8*

* * *

## Míra souvislosti grafu
- graf je **souvislý** pokud jsou každé dva vrcholy spojené cestou, jinak je graf **nesouvislý** a je rozložen na aspoň dvě **komponenty souvislosti**
- budeme zkoumat jak moc je graf odolný proti rozpadnutí po odebrání hrany nebo vrcholu
- **Hranovým řez** v grafu $G = (V,E)$ je množina hran $F \subseteq E$ taková, že graf $G - F = (V, E \setminus F)$ je nesouvislý. (Také se někdy nazývá jako **separátor**.)
- **Vrcholovým řezem** v grafu $G = (V,E)$ je množina vrcholů $A \subseteq V$ taková, že graf $G - A = (V \setminus A, E \cap \binom{V \setminus A}{2})$ je nesouvislý.
- **Hranová souvislost** grafu $G = (V,E)$ je
$$
k_{e}(G) =
\left\{
\begin{array}{ll}
\min\{|F|: F \text{ je hranový řez v }G \} \\
k_{e}(G) = 1 \text{ pokud } G \equiv K_{1}
\end{array}
\right.
$$
- **Vrcholová souvislost** grafu $G = (V,E)$ je
$$
k_{v}(G) =
\left\{
\begin{array}{ll}
\min\{|A|: A \text{ je vrcholový řez v }G \} \\ 
k_{v}(G) = 1 \text{ pokud } G \equiv K_{1} \\
k_{v}(G) = n-1 \text{ pokud } G \equiv K_{n}, n \geq 2
\end{array}
\right.
$$
- *nesouvislé grafy mají vrch. i hran. souvislost 0*
- pro $r \in \mathbb{N}_{0}$ je graf **hranově $r$-souvislý**, pokud $k_{e}(G) \geq r$
- pro $r \in \mathbb{N}_{0}$ je graf **vrcholově $r$-souvislý**, pokud $k_{v}(G) \geq r$
- $\forall G = (V,E), G \neq K_{1}: k_{e}(G), k_{v}(G) \leq \min \{ \mathtt{deg}_{G}(v), v \in V \}$

### Lemma 8.1:
- $\forall G = (V,E) \forall e \in E: k_{e}(G) -1 \leq k_{e}(G-e) \leq k_{e}(G)$
- Po odebrání hrany klesne hranová souvislost maximálně o 1.

<!--
#### *Důkaz:*
- $\Box$
-->

### Lemma 8.2:
- $\forall G = (V,E) \ \forall e \in E: k_{v}(G) -1 \leq k_{v}(G-e) \leq k_{v}(G)$
- Po odebrání hrany klesne vrcholová souvislost maximálně o 1.

<!--
#### *Důkaz:*
- $\Box$
-->

### Důsledek 8.3:
- $\forall G=(V,E): k_{v}(G) \leq k_{e}(G)$
- vrcholová souvislost je maximálně stejná jako hranová souvislost

<!--
#### *Důkaz:*
- $\Box$
-->

- nerovnost může být ostrá ("motýlek")

### Věta 8.4 (Ford-Fulkersonova věta):
- $\forall G \ \forall t \in \mathbb{N}: k_{e} \geq t \Leftrightarrow$ mezi každými $2$ vrcholy grafu $G$ $\exists$ $\geq t$ hranově disjunktních cest

<!--
#### *Důkaz:*
- $\Box$
-->

- varianat Fordovy-Fulkersonovy věty platí i pro vrcholovou souvislost

### Věta 8.5 (Menserova věta):
- $\forall G \ \forall t \in \mathbb{N}: k_{e}(G) \geq t \Leftrightarrow$ mezi každými $2$ vrcholy grafu $G$ $\exists$ $\geq t$ vrcholově disjunktních cest (mimo $u,v$)

<!--
#### *Důkaz:*
- $\Box$
-->

- jelikož lze zjistit tok maximální velikost v polynomiálním čase, tak máme algoritmus na zjištení $k_{e}(G), k_{v}(G)$ také v polynomiálním čase

*Přednáška 9*

* * *

## 2-souvislost podrobněji
- hranový řez velikosti $1$ se nazývá **most**
- vrcholový řez velikosti  $1$ se nazývá **artikulace**
- pro graf $G=(V,E)$ s $e \in E$ označme $C \div e$ graf vzniklýz $G$ operací **podrozdělení hrany** $e$ na cestu délky $2$

### Lemma 9.1:
- Pro každý graf $G=(V,E)$ a pro každou hranu $e \in E$ platí:
- $G$ je vrcholově $2$-souvislý $\Leftrightarrow G \div e$ je vrcholově $2$-souvislý

<!--
#### *Důkaz:*
- $\Box$
-->

### Věta 9.2 (Ušaté lemma):
- graf $G$ je vrcholově $2$-souvislý $\Leftrightarrow G$ lze vytvořit z $K_{3}$ operacemi přidávání a podrozdělování hran
- Proč "Ušaté lemma"?
	- Přidání hrany a její podrozdělení odpovídám přidání cesty mezi 2 vrcholy (="přiepení ucha").

#### Alternativní znění věty 9.2:
- $G$ je vrcholově $2$-souvislý $\Leftrightarrow G$ lze vytvořit z cyklu přidáváním uší
- protože přidávání ucha lze symulovat přidáním hrany a jejím podrozdělení

<!--
#### *Důkaz:*
- $\Box$
-->

## Počítání dvěma způsoby
- Metoda důkazů v kombinatorice.
- Určíme nějaký neznámý počet $X$ vyjádřením nějakého počtu $Z$ dvěma výrazy, z nichž jeden $X$ obsahuje a druhý ne $\Rightarrow$ máme vyjádření pro $X$

### Cayleyho vzorec
- Kolika způsoby lze vytvořit strom na vrcholech $\{ 1, \dots , n \}$?
- Nebo-li jaká je počet koster $\kappa (n)$ grafu $K_{n}$?
	- Kostra grafu $G = (V, E)$ je strom $T = (V, E')$ s $E' \subseteq E$

### Věta 9.3 (Cayleyho vzorec):
- Pro každé $n \geq 1$ platí $\kappa (n) = n^{n-2}$.
- Existuje řada důkazů s velmi odlišnými myšlenkami, ukážeme si nejjednodušší založený na počítání dvěma způsoby.

<!--
#### *Důkaz:*
- $\Box$
-->

### Věta 9.4:
 - Graf $K_{n}-e$ má $(n-2)n^{n-3}$ koster pro $n \geq 2$.

<!--
#### *Důkaz:*
- $\Box$
-->

- Počet koster $\kappa (G)$ grafu $G = (\{ 1, \dots , n \}, E)$ lze určit pomocí determinantu.
- Uvažme **Laplacián $L(G)$** grafu $G$, tedy matici $L(G) = (L_{ij})_{i,j=1}^{\infty}$, kde 
$$
L_{ij} =
\left\{
\begin{array}{ll}
\mathtt{deg}_{G}(i) \text{ pokud } i=j \\
-1 \text{ pokud } (i,j) \in E \\
0 \text{ jinak }
\end{array}
\right.
$$

### Věta 9.5 (Kirchhoffova věta):
- $\forall G : \kappa (G) = \det (L(G)^{1,1})$, kde $(L(G)^{1,1})$ je Laplacián $L(G)$ bez 1. řádků a 1. sloupce.

<!-- #### *Bez důkazu* -->

*Přednáška 10*

* * *

## Spernerova věta
- systém $\mathcal{M} \subseteq 2^{ \{ 1, \dots , n \} }$ podmnožin $n$-prvkové množiny $\{ 1, \dots , n \}$ je **nezávislý**, pokud platí: $\forall A, B \in \mathcal{M}, A \neq B: A \nsubseteq B \land A \nsupseteq B$

### Věta 10.1 (Spernerova věta):
- Každý nezávislý systém v $2^{ \{ 1, \dots , n \} }$ obsahuje $\leq \binom{n}{\lceil \frac{n}{2}\rceil}$ množin a tento odhad je těsný.
- Ekvivalentně: Nejdelší antiřetězec v $(2^{ \{ 1, \dots , n \} }, \leq)$ má právě $\binom{n}{\lceil \frac{n}{2}\rceil}$ prvků.

<!--
#### *Důkaz:*
- $\Box$
-->

## Úvod do Ramseyovy teorie
- "Každý velký systém obsahuje homogenní podsystém" dané velikosti.
- **obarvení** množiny $X$ $r$ barvami (zkráceně $r$-obarvení) je libovolné zobrazení přiřazující každému prvku z $X$ jednu z $r$ barev

### Věta 10.2 (Dirichletův princip, Pigeonhole principle):
- $\forall r, n_{1}, \dots , n_{r} \in \mathbb{N}$: obarvíme-li prvky množiny $X$ $r$ barvami, pak je-li $|X| \geq 1+ \sum_{i = 1}^{r}(n_{i} - 1)$, $X$ obsahuje $n_{i}$ prvků $i$-té barvy

<!--
#### *Důkaz je triviální:*
- $\Box$
-->

- Co kdybychom chtěli obarvit dvojice?
- Pro $k,l \in \mathbb{N}$ buď $R(k,l)$ nejmenší $N \in \mathbb{N}$ takové, že každé $2$-obarvení *(BÚNO: červené a modré obarvení)* $E(K_{N})$ obsahuje červené $K_{k}$ nebo modré $K_{l}$ jako podgraf.

### Věta 10.3 (Ramseyova věta pro $2$ barvy):
- $\forall k,l \in \mathbb{N}: R(k,l)$ je konečné. Dokonce $R(k,l) \leq \binom{k+l-2}{k-1} = \binom{k+l-2}{l-1}$

<!--
#### *Důkaz :*
- $\Box$
-->

- určit Ramseyovská čísla $R(k,l)$ přesně je velice obtížné (už pro malé případy)
- známá čísla $R(3,3) = 6$, $R(4,4) = 18$

### Věta 10.4:
- $\forall k \geq 3: R(k,k) > 2^{k/2}$

<!--
#### *Důkaz :*
- $\Box$
-->

*Přednáška 11*

* * *

- rozšíření Ramseyovy věty na více barev a také na barvení $p$-tic vrcholů
- pro čísla $p,r,n_{1}, \dots , n_{r} \in \mathbb{N}$ ($p$ - velikost barevných množin, $r$ - počet barev, $n_{i}$ - velikost 1-barevných podstruktur, které chceme najít) definujeme **Ramseyovo číslo** $R_{p}(n_{1}, \dots , n_{n})$ jako nejmenší $N \in \mathbb{N}$ takové, že pro každou množinu $X$ s $|X| \geq N$ a každé $r$-obarvení množiny $\binom{X}{p}$ existuje $i \in \{ 1, \dots , n \}$ a $Y \subseteq X$ takové, že $|Y_{i}| = n_{i}$ a všechny $p$-tice z $\binom{Y}{p}$ mají $i$-tou barvu

### Věta 11.1 (Ramseyova věta pro $p$-tice):
- Pro každé $p,r,n_{1}, \dots , n_{n}$ je $R_{p}(n_{1}, \dots , n_{n})$ konečné.

<!--
#### *Důkaz :*
- $\Box$
-->

### Aplikace - Erdösova-Szekeresova věta:
- $P$ = konečná množina bodů v rovině $\mathbb{R}^{2}$
	- $P$ je v **obecné poloze**, pokud neobsahuje 3 body na přímce
	- $P$ je v **konvexní poloze**, pokud tvoří množinu vrcholů konvexního mnohoúhelníku

### Lemma 11.2:
- Každá množina 5 bodů v $\mathbb{R}^{2}$ v obecné poloze obsahuje 4 body v konvexní poloze.

<!--
#### *Důkaz :*
- $\Box$
-->

### Věta 11.3 (Erdösova-Szekeresova věta):
- Pro každé $r \in \mathbb{N}$ existuje nejmenší **$ES(r) \in \mathbb{N}$** takové, že každá konečná množina s $\geq ES(r)$ body v $\mathbb{R}^{2}$ b obecné poloze obsahuje $r$ bodů v konvexní poloze.

<!--
#### *Důkaz :*
- $\Box$
-->

- Erdösova-Szekeresova domněnka je že $\forall r \geq 2: ES(r) = 2^{r-2}+1$.
- Zatím se zná, že to je dolní odhad a horní jako $\leq 2^{r+o(r)}$.

### Věta 11.4 (Nekonečná verze Ramseyovy věty):
- Pro každé $p,r \in \mathbb{N}$ a pro každé $r$-obarvení množiny $\binom{\mathbb{N}}{p}$ existuje nekonečná $A \subseteq \mathbb{N}$ taková, že všechny její $p$-tice mají v daném $r$-obarvení stejnou barvu.

<!--
#### *Důkaz :*
- $\Box$
-->

- Nekonečná verze implikuje konečnou. Dá se dokázat sporem, my si ji ukážeme pro $n_{1} = \dots = n_{n} = n$.

### Lemma 11.5 (Königovo lemma):
- V každém zakořeněném stromě, který má nekonečně mnoho vrcholů ale jen konečné stupně existuje nekonečná cest začínající v kořeni.

<!-- #### *Bez důkazu* -->

<!--
#### *Důkaz implikace konečné věty:*
- $\Box$
-->

*Přednáška 12*

* * *

## Samoopravné kódy
- **abeceda** $\Sigma$ = konečná množina symbolů
- **slovo** délky $n$ = posloupnost $n$ symbolů
- $\Sigma^n$ = množina všech slov délky $n$
- **Hammingova vzdálenost**
	- $x,y \in \Sigma^n : d(x,y) = |{i \in \{1,\dots ,n\}: x_i \neq y_i}|$
	- počet pozic, kde se $x$ a $y$ liší
	- $d$ je metrika
- $(\Sigma^n, d)$ je metrický prostor
- **(blokový) kód** je $C \subseteq \Sigma^n$
	- prvky $C$ jsou **kódova slova**
- pomocí $C$ umíme opravit $\leq t$ chyb, pokud $\forall y \in \Sigma^n \exists \text{nanejvys 1 slovo} x \in C \text{t.ž.} d(x,y)\leq t$
- parametry kódu
	1. délka = $n$
	2. velikost abecedy $q = |\Sigma|$
	3. dimenze $k = \log_q|C|$
	4. vzdálenost $d = \min_{x, x' \in C, x \neq x'} d(x, x')$
- kód s parametry $n,k,d,q$ značíme $(n,k,d)_q$
- v kódu s parametry $(n,k,d)_q$ dokážeme opravit $\leq \lfloor \frac{d-1}{2} \rfloor$ chyb
	- množiny slov ve vzdálenosti $\leq \lfloor \frac{d-1}{2} \rfloor$ od kódových slov jsou navzájem disjunktní
	- pokud $d \leq n$, tak dokážeme opravit $\leq \lfloor \frac{n-1}{2} \rfloor$

### Příklady kódů:
1. opakovací kód
	- každý symbol $n$-krát zopakujeme
	- paramtery: $(n, 1, n)_q$
2. charakteristický vektory KPR
	- kódová slova $P$ - $\{0,1\}$ - vektor, kde na pozici $x$ je $1 \leftrightarrow x \in P$
	- $(X, \mathcal{P})$ - KPR řádu $n$
	- parametry: $(n^2 + n + 1, \log_{2} (n^2+n+1), 2n)_{2}$
	- $|X| = n^2+n+1$ a $|C|=|\mathbb{P}| = n^2+n+1$
	- $d = 2n$
		- 2 kódove slova sdílí jednu jedničku, na zbytku se liší na $2n$ pozicích 
3. hadamardovy kódy
	- hadamardova matice řádu $n$ je $H \in \{-1, 1\}$, kde $H \cdot H^T = n \cdot I_n$
	- každý 2 různy řádky se liší na $n/2$ pozicích
	- zvolme $C=\{\text{řádky} H\} \cup \{-\text{řádky}H\}$
	- parametry: $(n, 1+\log_2(n), \frac{n}{2})_2$
$$
H_1 = 1
$$
$$
H_2 =
\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}
$$
Sylvestrova konstrukce hadamardovy matice:
$$
H_{n+1} = 
\begin{pmatrix}
H_n & H_n \\
H_n & - H_n
\end{pmatrix}
$$
*Hadamardova domněnka:* pro $\forall k \in \mathbb{N} \exists \text{hadamardova matice radu} 4k$

- kody $C, C'$ jsou ekvivalentní, pokud se liší jen pořadím pozic
	- $\exists \Pi \in S_n: X = (x_1, \dots, x_n) \in C \leftrightarrow \Pi(X) = (X_{\Pi(1), \dots, X_{\Pi(n)} \in C}$
- pro jaké parametry existuje kód?
	- kombinatorická koule je středem $X \in \Sigma^n$ a poloměrem $t$ je $B(X,t) = \{y \in \Sigma^n : d(x,y) \leq t\}$

### Lemma 12.1:
Je-li $C$ kód se vzdáleností $2t+1$, pak $\forall X,X' \in C: B(X,t) \cap B(X',t) = \emptyset$

<!--
#### *Důkaz:*
- *Sporem - $\exists z \in B(x, t) \cap B(x', t) \implies d(x, x') \leq d(x,z) + d(x', z) \leq t+t = 2t$, kde $d(x, x')$ je $\geq 2t+1$, takze celkove je $2t+1 \leq 2t$.*
- $\Box$
-->

### Věta 12.2 (Hammingův odhad):
$\forall \text{ kód } C$ s parametrama $(n,k,d)_q$ plati, že $|C| \leq \frac{q^n}{V(t)}$

<!--
#### *Důkaz:*
- *$d = 2t +1 \implies$ koule okolo kódovych slov s poloměrem $t$ jsou disjunktní*
- *$\implies |C| \cdot |V(t)| \leq |\Sigma^n| \implies |C| \leq \frac{|\Sigma^n|}{|V(t)|} = \frac{|q^n|}{|V(t)|}$*
- $\Box$
-->

**perfektní kód** = kód s parametry $(n,k, 2t+1)_q$ a s $|C| = \frac{q^n}{V(t)}$
- opakovací kód s $q=2$ a lichou delkou

### Věta 12.3 (Gilbertův - Varshalův odhad):
$\forall n,q,d \in \mathbb{N}: \exists \text{ kód } C$ s parametry $(n,k,d)_q$, kde $|C| \geq \frac{q^n}{V(d-1)}$

<!--
#### *Důkaz:*
- *stačí iterativně odebírat slova z $\Sigma^n$ spolu se slovy v Hammingové vzdálenosti $\leq d-1$*
- *proces skončí po $\geq \frac{q^n}{V(d-1)}$ krocích, protože odebírané koule jsou nanejvýš disjunktní*
- $\Box$
-->

**linearní kódy** - jako abecedu použít konečné těleso $\mathbb{K} = \Sigma^n$
- podprostor vektorového prostoru $\mathbb{K}^n$
- s parametry $n,k,d,q$ značíme $[n,k,d]_q$

### Příklady:
1. opakovací kódy nad $\mathbb{Z}_p$
2. char. vektory KPR
	- nejsou linearní
3. hadamardovy kódy
	- obecně ne, ze Sylvestrovy konstrukce ano

*Přednáška 13*

* * *

## Lineární kódy
- Víme, že každé těleso $\mathbb{K}$ odpovídá <!-- Galoisovu --> tělesu $\mathbb{F}_{q}$
- $\forall x,y,z \in \mathbb{K}^{n}: d(x,y) = d(x+z, y+z) = d(x-y,0)$
- $\Rightarrow$ minimální vzdálenost $d$ se rovná $\min_{x,y \in C, x \neq y} \{ d(x-y,0) = \min_{x \in C, x \neq 0} \{ d(x,0) \} \}$
	- $\Rightarrow$ ke zjištění $d$ není třeba zkoumat všechny dvojice, stačí počítat nenulové složky kódových slov
- Výhodou lineárních kódů je úsporný popis, namísto všech $q^{r}$ prvků kódu stačí uvést $r$ prvků nějaké jeho báze
- **Generující matice** kódu $C$ = matice $M \in \Sigma^{r \times n}$ jejíž řádky tvoří bázi kódu $C$
- V prostoru $\mathbb{F}_{q}^{n}$ definujeme **skalární součin** $<x,y> = \sum_{i=1}^{n}x_{i}y_{i}$ pro $x = (x_{1}, \dots , x_{n}), y = (y_{1}, \dots , y_{n}) \in \mathbb{F}_{q}^{n}$.
	- Nejedná se o klasický skalární součin podle klasické definice, protože neplatí $<x,x> = 0 \Leftrightarrow x=0$ (třeba $x = (1,1,0,0)$ nad $\mathbb{F}_{2}^{4}$).
- **Duálním kódem** k lineárnímu kódu $C$ je jeho ortogonální doplněk

$$
C^{\bot} = \{ x \in \mathbb{F}_{q}^{n}: <x,y> = 0 \text{ pro každé } y \in C \}
$$

- Z povahy našeho skalárního součinu nemusí platit $C \cap C^{\bot} = \{ 0 \}$.
	- Platí $\dim(C^{\bot}) + \dim(C) = n$ a $(C^{\bot})^{\bot} = C$
- Generující matice $M^{\bot}$ kódu $C^{\bot}$ se nazývá **kontrolní matice**.
	- Řádky kontrolní matice určují lineární rovnice, které musí každé slovo z $C$ splňovat (a naopak každý vektor z $\mathbb{F}_{q}^{n}$, který je splňuje, je kódovým slovem v $C$).
	- Nebo-li $C = \{ x \in \mathbb{F}_{q}^{n}: M^{\bot}x = 0 \}$.

- Mějme lineární kód $C$ s parametry $[n,r,d]_{q}$.

### Kódování lineární kódy:
- Ze vstupního slova $z \in \mathbb{F}_{q}^{n}$ chceme vytvořit kódové slovo $x \in C \subseteq \mathbb{F}_{q}^{n}$.
- Nechť $M \in \mathbb{F}_{q}^{r \times n}$ je generující matice kódu $C$.
- Pro každý lineární kód existuje ekvivalentní kód, jehož generující matice má tvar:
$$
\begin{pmatrix}
I{r} & B
\end{pmatrix}
$$
- Kde výška je $r$ a šířka $n$. Říká se jí **standardní forma**.
	- Stačí generující matici upravit Gaussovou eliminací a popřípadě zpermutovat sloupce.
- $\Rightarrow$ BŮNO: Matice $M$ je ve standardní formě.
- Jako kódové slovo zvolíme $x = M^{\top}z \in C$
	- $\Rightarrow x$ má na prvních $r$ souřadnicích slovo $z$ (**indormační symboly**) a na zbylých $n-r$ souřadnicích obsahuje **kontrolní symboly**
$$
\begin{matrix}
 &
\begin{pmatrix}
z
\end{pmatrix} \\
\begin{pmatrix}
I_{r} \\
B^{\top}
\end{pmatrix}
&
\begin{pmatrix}
z \\
.
\end{pmatrix}
\end{matrix}
$$

### Dekódování lineárních kódů:
- po odeslání $x \in C$ bylo přijato $y \in \mathbb{F}_{q}^{n}$
- příjemce zná pouze $y$ a chce najít kódové slovo, které je mu nejblíž
- nechť $M^{\bot}$ je kontrolní matice kódu $C$, pokud je matice $M$ve standardní formě pak
$$
M^{\bot} =
\begin{pmatrix}
-B{\top} & I_{n-r}
\end{pmatrix}
$$
- kde šířka je $r$ a výška $n-r$, protože pak $M^{\bot} M^{\top} = -B^{\top}I_{r} + I_{n-r}B^{\top}=0$
- jako **syndrom slova** $y \in \mathbb{F}_{q}^{n}$ nazveme součin $M^{\bot}y$
- protože $C = \{ x \in \mathbb{F}_{q}^{n}:M^{\bot}x=0 \}$, tak máme určené lineární zobrazení $S:\mathbb{F}_{q}^{n} \to \mathbb{F}_{q}^{n-r}$ splňující $C = Ker(S)$
- zobrazení $S$ nazveme **syndrom**
	- zobrazení $S$ je na, protože platí $\dim(Ker(S)) + \dim(Im(S)) = \dim(\mathbb{F}_{q}^{n})$, kde $Im(S)$ je obraz $S$

### Lemma 13.1:
- Zobrazení $S$ je prosté na $B(0,t)$ kde $t=\lfloor \frac{d-1}{2} \rfloor$.

<!--
#### *Důkaz:*
- $\Box$
-->

- podle lemma 13.1. tedy k $S \restriction B(0,t)$ existuje inverzní zobrazení
- $S^{-1}: S(B(0,t)) \to B(0,t)$
	- $S^{-1}$ není lineární, ale jde popsat tabulkou s $q^{n-k}$ prvky z $B(0,t)$ a v této tabulce je pro každý syndrom slova uloženo nějaké slovo s minimální vahou a s daným syndromem

#### Co víme:
1. Pro $y \in B(x,t)$ máme $S(y-x) = S(y) - S(x) = S(y)$ (díky linearitě a toho že $x \in Ker(S)$).
	- neboli $y$ a vzniklá chyba $y-x$ mají stejný syndrom
2. Pro $y \in B(x,t)$ máme $y-x \in B(0,t)$ a tedy $y-x = S^{-1}(S(y-x))$.
	- neboli vzniklou chybu jde vyjádřit pomocí $S$
3. $x = y - (y - x) = y - S^{-1}(S(y-x)) = y - S^{-1}(S(y))$
	- nezávisý na $x$
	- pro dané $y$ pomocí syndromu $S(y)$ dokážeme určit kódové slovo $x$, ze kterého vzniklo, nastalo-li $\leq t$ chyb

#### Jak dekódovat
- Pro přijaté slovo $y \in \mathbb{F}_{q}^{n}$ spočítat $x = y - S^{-1}(M^{\bot}y)$, kde $M^{\bot}$ je kontrolní matice a zobrazení $S^{-1}$ máme připravené jako tabulku.
- Nastane-li $\leq t$ chyb, je $x$ kódové slovo, ze kterého $y$ vzniklo.

### Tvrzení 13.2:
- Vzdálenost $d$ kódu $C$ = minimální počet lineárně závislých sloupců kontrolní matice $M^{\bot}$.

<!--
#### *Důkaz:*
- *víme, že $d$ = minimální počet nenulových symbolů v nenulovém slově $x$ z $C$*
- *$x \in C \Leftrightarrow M^{\bot}x = 0$ tedy sliupce $M^{\bot}$ vybrané nenulovými složkami $x$ jsou lineárně závislé*
- $\Box$
-->

### Hammingovy kódy
- Příklad lineárních kódů, které jsou dokonce perfektní.
- Jejich nevýhodou je, že nedokáží opravit příliš mnoho chyb
- Například nad tělesem $\mathbb{F}_{2}$.
- Mějme parametr $r = 3$
- Generující matice:
$$
M =
\begin{pmatrix}
 &  &  & - & l_{1} & - \\
 & I_{2^{r}-r-1} &  & - & l_{2} & - \\
 &  &  & - & l_{3} & -
\end{pmatrix}
$$
- Kde $l_{i}$ jsou všechny nenulové vektory z $\mathbb{F}_{2}^{r}$ různé od vektorů kanonické báze.
- Kontrolní matice:
$$
M^{\bot} =
\begin{pmatrix}
| & | & | &  &  &  \\
l_{1} & l_{2} & l_{3} &  & I_{r} &  \\
| & | & | &  &  & 
\end{pmatrix}
$$
- Parametry matic jsou $r$ a $2^{r}-r-1$.
- Dva vektory z $\mathbb{F}_{2}^{r} \setminus \{0\}$ jsou lineárně závislé $\Leftrightarrow$ jsou totožné $\Rightarrow$ minimální počet lineárně závislých sloupců v $M^{\bot}$ je $3$ a podle tvrzení 13.2. je vzdálenost kódu $3$.
- $\Rightarrow$ jedná se o kód s parametry $[2^{r}, 2^{r}-r-1, 3]_{2}$, takže opraví $\leq 1$ chybu

#### Příklad
- pro  $r=3$ dostaneme kód s parametry $[7,4,3]_{2}$
- jedná se o kód sestavený z Fanovy roviny přidáním počátku a doplňků

#### Hommingovy kódy jsou perfektní:
- stačí ukázat, že Hammingův odhad $|C| \leq \frac{q^{n}}{V(t)}$ je těsný
- $t = \lfloor \frac{d-1}{2} \rfloor = \lfloor \frac{3-1}{2} \rfloor = 1$
- $V(t) = V(1) = \sum_{i=0}^{t} = (q-1) = 1 + (2^{r}-1) = 2^{r}$
- $\frac{q^n}{V(1)} = \frac{2^{@^{r}-1}}{2^{r}} = 2^{2^{r}-r-1}$
- $|C| = 2^{r} = 2^{2^{r}-r-1}$ takže Hammingův je skutečně pro Hammingovy kódy těsný

#### Lepší reprezentace funkce $S^{-1}$
- tabulka reprezentující $S^{-1}$ má pouze $2^{n-r} = 2^{2^{r}-1-(2^{r}-r-1)} = 2^{r} = n + 1$ prvků
- ve skutečnosti tabulku vůbec nepotřebujeme
- zpermutujeme-li sloupce a řádky $M^{\bot}$ pak, aby $i$-tý sloupec byl binárním zápisem čísla $i$, pak $S(y)$ určuje pozici na níž nastala chyba
- $\Rightarrow$ lze dékodovat tak, že pokud $S(y) = 0$, pak $x=y$, jinak je $S(y)$ binárním zápisem čísla $i$ a pak $x =$ slovo vzniklé z $y$ výměnnou bitu, který je v $y$ na pozici $i$
