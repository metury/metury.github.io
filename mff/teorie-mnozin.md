---
layout: page
katex: True
---

### Tomáš Turek

*Poznámka: Následující text jsou moje osobní zápisky z Teorie množin z roku 2021-2022. V textu se můžou vyskytovat jak gramatické chyby, tak i technicé chyby (jako ne zcela správný důkaz apod.), tím pádem berte text jako doplňek přednášky.*

$$
\text{Přednáška 1}
$$

* * *

## Jazyk teorie množin

- Jazyk teorie $x \in Y$.
- Také se bude používat *metajazyk* jako například: “definovat”, “formule” a “třída”.

### Symboly

- Proměnné pro množiny $X,Y,Z,x_{1},x_{2}, \dots$.
- Binární predikátový (relační) symbol $=$ a taky $\in$ (náležení).
- Dále také logické spojky: $\neg ,\land ,\lor ,\rightarrow , \leftarrow (\Leftarrow , \Rightarrow)$.
- Také kvantifikátory: $\forall \text{ a } \exists$.
- Samozřejmě i závorky $(), []$.

### Formule

- Atomické formule $x = y \text{ a } x \in y$.

1.  Jsou-li $\varphi, \psi$ formule, pak $\neg \varphi , \varphi \lor \psi , \varphi \land \psi , \varphi \rightarrow \psi , \varphi \leftrightarrow \psi$ jsou také formule (popřípadě i uzávorkované).
2.  Je-li $\varphi$ formule, pak $(\forall x) \varphi \text{ a } (\exists x)\varphi$ jsou také formule.

- Každá formule pak lze dostat z atomických formulí konečně mnoha pravidly 1 a 2.

### Rozšíření jazyka (zkratky)

- $x \neq y$ je pro $\neg (x = y)$.
- $x \notin y$ je pro $\neg (x \in y)$.
- $x \subseteq y$ je pro "$x$ je podmnožina y" $(\forall u)(u \in x \rightarrow u \in y)$.
- $x \subset y$ je pro "$x$ je vlastní podmnožina" $(x \subseteq y \land x \neq y)$.

### *Cvičeni*

*Napište formulí “množina $x$ je prázdná”.*

## Axiomy logiky (“jak se chovají logické symboly”)

- Axiomy výrokové logiky např.: schéma axiomů: Jsou-li $\varphi , \psi$ formule, pak

$$
\varphi \rightarrow (\psi \rightarrow \varphi)
$$

- je **axiom**.
- Axiomy predikátové logiky např.: Schéma axiomů: Jsou-li $\varphi, \psi$ formule, $x$ proměnná, která není volná ve $\varphi$, pak

$$
(\forall x) (\varphi \rightarrow \psi) \rightarrow (\varphi \rightarrow (\forall x)\psi)
$$

- je axiom.
- Axiomy pro rovnost:
    - $x$ je proměnná, pak $x=x$ je axiom.
    - $x,y,z$ jsou proměnné, $R$ je relační symbol, pak

$$
(x=y) \rightarrow (\forall z)(R(x,z) \leftrightarrow R(y,z))
$$

$$
(x=y) \rightarrow (\forall z)(x \in z \leftrightarrow y \in z)
$$

$$
(x=y) \rightarrow (\forall z)(z \in x \leftrightarrow z \in y)
$$

- Odvozovací pravidla:
    - Z $\varphi, \varphi \rightarrow \psi$ odvoď $\psi$.
    - Z $\varphi'$ odvoď $(\forall x)\varphi$.

# Axiomy teorie množin

## “Jak se chová $\in$.” “Jaké množiny existují.”

- *Zermelo-Fraenkelova teorie*, zkráceně **ZF** má celkem 9 axiomů (resp. 7 axiomů a 2 schémata).
- Pak je ještě 10.axiom výběru (**AC**) to pak je \*ZF+AC=\***ZFC**.

## 1.Axiom existence množin

- “Existuje množina.”

$$
(\forall x)(x=x)
$$

## 2.Axiom extenzionality

- Udává souvislost mezi $\in \text{ a } =$.
- “Množina je určena svými prvky.”

$$
(\forall z)(z \in x \leftrightarrow z \in y) \rightarrow x = y
$$

### *Cvičeni*

*Dokažte $((x \subseteq y) \land (y \subseteq z)) \rightarrow x \subset z$.*

$$
\text{Přednáška 2}
$$

* * *

## 3.Schéma axiomu vydělení

Je-li $\varphi(x)$ formule, která neobsahuje volnou proměnnou $z$. Pak:

$$
(\forall a)(\forall x)(\exists z)(x \in z \leftrightarrow (x \in a \land \varphi(x)) 
$$

je axiom.

- “Z množiny $a$ vybereme prvky s vlastností $\varphi(x)$ a ty vytvoří novou množinu $z$.”
- Díky axiomu extenzionality je taková $z$ právě jedna.

### Značení:

- $\{x; x \in a \land \varphi(x)\}$ je zkrácení.
- $\{x \in a; \varphi(x)\}$ "Množina všech prvků $a$ splňující $\varphi(x).$"

## Definice:

- Průnik: $a \cap b$ je $\{x, x \in a \land x \in b\}$.
- Rozdíl: $a \setminus b$ je $\{x, x \in a \land x \notin b\}$

### *Cvičení*

- *Napište formulí “množina $a$ je jednoprvková”.*
- *Dokažte, že množina všech množin neexistuje.*

## 4.Axiom dvojice

$$
(\forall a)(\forall b)(\exists z)(\forall x)(x \in z \leftrightarrow (x=a \lor x=b))
$$

- “(Ne)každým dvěma množinám $a,b$ existuje množina $z$, která má za prvky právě $a,b$.”

## Definice:

- $\{a,b\}$ je **neuspořádaná dvojice** množin $a,b$, jakožto dvouprvková množina s prvky $a,b$ (pokud $a \neq b$).
- $\{a\}$ znamená $\{a,a\}$, nebo-li jednoprvková množina s prvkem $a$.

### *Příklad:*

*Můžeme vytvořit $\{\emptyset\},\{\{\emptyset\}\}, \{\emptyset,\{\emptyset\}\}, \dots$*

### *Cvičení*

*Dokažte $(\forall z)(x \in z \leftrightarrow y \in z) \rightarrow x = y$.*

## Definice:

$(a,b)$ je **uspořádaná dvojice** množin $a,b$. To je pak množina $\{\{a\},\{a,b\}\}$

### *Poznámka:*

*Pro $a = b$ je $(a,b) = \{\{a\},\{a,a\}\} = \{\{a\},\{a\}\} = \{\{a\}\}$.*

## Lemma

$$
(x,y) = (u,v) \leftrightarrow (x = u \land y = v)
$$

### Důkaz:

- $\leftarrow$
    - $\{x\} = \{u\}$ plyne z axiomu extenzionality.
    - $\{x,y\} = \{u,v\}; \{\{x\},\{x,y\}\} = \{\{u\},\{u,v\}\}$
- $\rightarrow$
    - $\{\{x\},\{x,y\}\} = \{\{u\},\{u,v\}\}$ to pak znamená, že $\{x\} = \{u\} \lor \{x\} = \{u,v\}$ kde v obou případech $x=u$.
    - $\{u,v\} = \{x\} \lor \{u,v\} = \{x,y\}$ tedy $v = x \lor v = y$
    - Pokud $v=x$ pak z $x = u$ plyne, že $v=u=x$.

$$
\Box
$$

## Definice:

Jsou-li $a_{1},a_{2},a_{3}, \dots ,a_{n}$ množiny, definujeme **uspořádanou $n$-tici** $(a_{1},a_{2},a_{3}, \dots ,a_{n})$. Následně $(a_{1})$ znamená $a_{1}$ a je-li definována $(a_{1}, \dots ,a_{k})$ pak $(a_{1}, \dots ,a_{k}, a_{k+1})$ je $((a_{1}, \dots ,a_{k}), a_{k+1})$.

## Lemma

$$
(a_{1},a_{2},a_{3}, \dots ,a_{n}) = (b_{1},b_{2},b_{3}, \dots ,b_{n}) \leftrightarrow (a_{1} = b_{1} \land \dots a_{n} = b_{n})
$$

### Důkaz:

- Jako *cvičení*.

## 5.Axiom sumy (*axiom of the union*)

$$
(\forall a)(\exists z)(\forall x)(x \in z \leftrightarrow (\exists y)(x \in y \land y \in a))
$$

## Definice:

$\bigcup a$ je **suma** množiny $a$. Tzn “$\{x, (\exists y)(x \in y \land y \in a)\}$”.

### Pozorování

Pokud $a = \{b,c\}$, pak $\bigcup \{b,c\} = \{x, x \in b \lor x \in c\}$.

## Definice:

$b \cup c$ je $\bigcup \{b,c\}$ sjednocení množin $b,c$.

## Definice:

Jsou-li $a_{1}, \dots a_{n}$ množiny, definujeme **neuspořádanou $n$-tici** $\{a_{1}, \dots a_{n}\}$ ($n$-prvkovou množinu, pokud každé $a_{i}$ je různé) rekurzivně. Je-li definovaná $\{ a_{1}, \dots a_{k}\}$ pro $k \geq 2$, pak $\{ a_{1}, \dots a_{k}, a_{k+1}\}$ je $\{ a_{1}, \dots a_{k}\} \cup \{a_{k+1}\}$.

## 6.Axiom potence (*power set*, *potenční množina*)

$$
(\forall a)(\exists z)(\forall x)(x \in z \leftrightarrow x \subseteq a)
$$

- “Existuje množina $z$ jejichž prvky jsou právě podmnožiny množiny $a$.”

## Definice:

$\mathcal{P}(a)$ je “$\{x; x \subseteq a\}$” potenční množina $[2^{a}]$ množiny $a$ (potence $a$).

### *Příklad:*

*$\mathcal{P}(\emptyset) = \{\emptyset\}$ a $\mathcal{P}(\{\emptyset\}) = \{\emptyset, \{\emptyset\}\}$*

### *Cvičení*

*Co je $\mathcal{P}(\bigcup a)$ a jestli $\bigcup (\mathcal{P}(a)) = a$?*

## 7.Schéma axiomu nahrazení

- “Obraz množiny funkcí je množina.”
    Je-li $\psi(u,v)$ formule, která neobsahuje volné proměnné $w,z$, pak

$$
(\forall u)(\forall v)(\forall w)((\psi(u,v) \land \psi (u,w)) \rightarrow v = w) \rightarrow (\forall a)(\forall z)(\forall v)(v \in z \leftrightarrow (\exists u)(u \in a \land \psi(u,v)))
$$

je axiom.

- “Je-li $\psi$ funkce (částečná) určená formulí: $\psi (u,v) \text{ je } f(u)=v$, pak obrazem $a$ touto funkcí je opět množina (z).”
- Také implikuje schéma vydělení: $\varphi (u) \land u = v$.
- Poznámka: *transfinitní rekurze, konstrukce $\omega + \omega$, Zornovo lemma, věta o dobrém uspořádání*.

$$
\text{Přednáška 3}
$$

* * *

## 8.Axiom fundovanosti (*foundation, regularity*)

$$
(\forall a)(a \neq \emptyset \rightarrow (\exists x)(x \in a \land x \cap a = \emptyset))
$$

- “Každá množina má prvek, který je s ní disjunktní.”

### *Cvičení*

*Ukažte, že Axiom fundovanosti zakazuje existenci konečných cyklů relace $\in$. Tedy množiny $y$ takové, že $y \in y$, ale i $y_{1},y_{2}, \dots ,y_{n}$ takové, že $y_{1} \in y_{2} \in \dots \in y_{n} \in y_{1}$.*

- Díky axiomu fundovanosti lze všechny množiny vygenerovat z prázdné množiny operacemi $\mathcal{P}, \bigcup$.

# Třídy

## Definice:

$\varphi(x)$ je formule a $\{x; \varphi(x)\}$ označuje “seskupení” množin, pro které platí $\varphi(x)$.

- Pokud $\varphi(x)$ je tvaru $x \in a \land \psi(x)$, pak je to množina (axiom vydělení).
- $\{x; \varphi(x) \}$ je třídový term, soubor které označuje je **třída** určená formulí $\varphi(x)$.
    - “Definovatelný soubor množin.”
- Je-li $y$ množina, pak $y = \{x; x \in y \land x = x\}$ je třída.
    - Tedy každá množina je i třída.
- **Vlastní třída** je třída, která není množinou.

### Rozšíření jazyka:

- Ve formulích na místě volných proměnných připustíme třídové termy.
- Navíc proměnné pro třídy jsou $X,Y, \dots$ (nebude možné je kvantifikovat).

#### Atomické proměnné

- $x = y, x \in y, x = X, x \in X, X \in x, X=Y, X \in Y$
- Plus ještě výrazy vzniklé nahrazením $\{x, \varphi(x)\}$ za $x$ a $\{y, \varphi(y)\}$ za $y$.
- Ostatní formule rozšířeného jazyka vznikají pomocí logických spojek $(\neg, \lor, \land, \leftarrow, \rightarrow, \leftrightarrow)$ a kvantifikací množinových proměnných $((\forall x)\dots(\exists y)\dots)$.
- Formule s třídovými termy bez třídových proměnných označován jako “zkrácený zápis” formule základního jazyka.
- Formule s třídovými proměnnými označované jako “schéma formulí” základního (popř. rozšířeného) jazyka.

#### Eliminace třídových termů

- $x,y,z,X,Y$ jsou proměnné a $\varphi(x), \psi(x)$ formule základního jazyka. $X$ zastupuje $\{x, \varphi(x)\}$ a $Y$ zastupuje $\{y, \varphi(y)\}$.

1.  $z \in X$ zastupuje $z \in \{x, \varphi(x)\}$.
    - "$z$ je prvkem třídy všech množin, splňující $\varphi(x)$."
    - Nahradíme: $\varphi (z)$.
2.  $z = X$ zastupuje $z = \{x, \varphi(x)\}$.
    - “Množina $z$ se rovná třídě $X$.”
    - Nahradíme: $(\forall u)( u \in z \leftrightarrow \varphi(u))$.
3.  $X \in Y$ zastupuje $\{x, \varphi(x)\} \in \{y, \psi(y)\}$.
    - Nahradíme: $(\exists u)(\forall v)((v \in u \leftrightarrow \varphi (v)) \land \psi(u))$.
4.  $X \in y$ zastupuje $\{x, \varphi(x)\} \in y$.
    - Nahradíme: $(\exists u)(\forall v)((v \in u \leftrightarrow \varphi (v)) \land u \in y)$.
5.  $X = Y$ zastupuje $\{x, \varphi(x)\} = \{y, \psi(y)\}$.
    - Nahradíme: $(\forall u)(\varphi(u) \leftrightarrow \psi(v))$

### Meta pozorování

Formule rozšířeného jazyka určují stejné třídy jako formule základního jazyka. Příklad $\{x; x \notin \{z, \psi(z)\}\} \rightarrow \{x; \neg \psi(x)\}$.

## Třídové operace

## Definice:

- $A \cap B$ je $\{x, x \in A \land x \in B\}$.
- $A \cup B$ je $\{x, x \in A \lor x \in B\}$.
- $A \setminus B$ je $\{x, x \in A \land x \notin B\}$.
- Pokud $A = \{x, \varphi(x)\}$ a $B = \{y, \psi(y)\}$, pak $A \cap B = \{z, \varphi(z) \land \psi(z)\}$.

## Definice:

$\{x; x = x\}$ je **univerzální třída**, která se značí jako **$V$**.

- $A$ je třída, (absolutní) doplněk $A$ je $V \setminus A$, který se značí jako $-A$.
- $A \subseteq B, A \subset B$ značí, že $A$ je podtřídou $B$ (popř. vlastní podtřídou).

### *Cvičení*

*Rozepište v základním jazyce teorie množin.*

1.  *$\bigcup A$ nebo-li suma třídy $A$ je $\{x, (\exists a)(a \in A \land x = a)\}$*
2.  *$\bigcap A$ nebo-li průnik třídy $A$ je $\{x, (\forall a)(a \in A \rightarrow x = a)\}$*
3.  *$\mathcal{P}(A)$ nebo-li potenciál třídy $A$ je $\{a, a \subseteq A\}$.*

- *$\bigcap \emptyset = V$, protože $\{x, (\forall a)(a \in \emptyset \rightarrow x \in a)\}.$*

### *Cvičení*

*$a \neq \emptyset$, je $\bigcap a$ množina?*

### *Cvičení*

*Je $\mathcal{P}(V) = V^{2}$?*

## Lemma

Univerzální třída $V$ není množina.

### Důkaz:

*Cvičení.*

## Lemma

Je-li $A$ třída $a$ množina, průnik $A \cap a$ je množina.

### Důkaz:

Schéma axiomu vydělení $A = \{x, \varphi(x)\}, a \cap A = \{x, x \in a \land \varphi(x)\}$.

$$
\Box
$$

## Definice:

**Kartézský součin tříd** $A,B$ značen $A \times B$ je $\{(a,b), a \in A \land b \in B\}$ což je zkrácený zápis pro $\{x, (\exists a)(\exists b)(x = (a,b) \land a \in A \land b \in B)\}$.

## Lemma

Jsou-li $a,b$ množiny pak i $a \times b$ je množina.

### Důkaz:

- Platí $a \times b \subseteq \mathcal{P}(\mathcal{P}( a \cup b))$.
- Vpravo je množina axiomu dvojice , sumy, dvakrát potence.
- Pak podle lemma (axiomu vydělení) $A = a \times b, a = \mathcal{P}(\mathcal{P}(a \cup b))$ tedy $a \times b$ je množina.
- Pokud $u \in a, v \in b$, pak $\{u\},\{u,v\} \subseteq a \cup b$ tedy $\{u\},\{u,v\} \in \mathcal{P}(a \cup b)$, stejně pak $\{\{u\}, \{u,v\}\} \subseteq \mathcal{P}(a \cup b)$ a $\{\{u\}, \{u,v\}\} \in \mathcal{P}(\mathcal{P}(a \cup b))$.

$$
\Box
$$

## Definice:

$X$ je třída, pak $X^{1} = X$, induktivně pak $X^{n} = X^{n-1} \times X$.

- $X^{n}$ je třída všech uspořádaných $n$-tic prvků $X$.

### Pozorování

$V^{n} \subseteq V^{n-1} \subseteq \dots \subseteq V^{1} = V$

### *Cvičení*

*Ukažte, že obecně neplatí $X \times X^{2} = X^{3}$. Například pro $X = \{\emptyset\}$.*

$$
\text{Přednáška 4}
$$

* * *

# Relace

## Definice:

- Třída $R$ je (binární) **relace**, pokud $R \subseteq V \times V$.
- $x R y$ zkratka za $(x,y) \in R$.
- $n$-ární relace je $R \subseteq V^{n}$.

### *Příklad:*

- *Relace náležení $E$ je $\{(x,y), x \in y \}$.*
- *Relace identity $Id$ je $\{(x,y),x = y \}$.*

## Definice:

Je-li $X$ relace (libovolná třída), pak:

- $Dom (X)$ je $\{u,(\exists v)(u,v) \in X\}$
- $Rng (X)$ je $\{v, (\exists u)(u,v) \in X\}$
- Je-li $Y$ třída, pak $X \shortparallel Y (X [Y])$ je $\{z, (\exists y)(y \in Y \land (y,z) \in X\}$.
    - Nebo-li obraz třídy $Y$ třídou $X$.
- $X \upharpoonright Y$ je $\{(y,z), y \in Y \land (y,z) \in X\}$.
    - Zúžení třídy $X$ na třídu $Y$. (restrikce, parcelizace)

## Lemma

Je-li $x$ množina, $Y$ třída, pak $Dom(x), Rng(x), x \upharpoonright Y, x \shortparallel Y$ jsou množiny.

### Důkaz:

- Vnoříme do větší množiny.
- Platí $Dom(x) \subseteq \bigcup( \bigcup(x))$.
    - Když $u \in Dom(x)$ pak $(\exists v)(u,v) \in x$ a $u \in \{u\} \in (u,v) \in x$. Tedy $\{u\} \in \bigcup (x)$, tedy $u \in \bigcup(\bigcup(x))$.
- Podobně i pro $Rng(x) \subseteq \bigcup(\bigcup(x))$.
    - $v \in Rng(x): (\exists u)(u,v) \in x$
    - $v \in \{u,v\} \in (u,v) \in x$ tedy $v \in \bigcup(\bigcup(x))$.
- Pak už jenom $x \upharpoonright Y \subseteq x; x \shortparallel Y \subseteq Rng(x)$

$$
\Box
$$

## Definice:

- $R,S$ jsou relace. Pak $R^{-1}$ je $\{(u,v), (v,u) \in R\}$.
    - Nebo-li relace **inverzní** k $R$.
- $R \circ S$ je $\{(u,v); (\exists w)((u,w)\in R \land (w,v) \in S)\}$.
    - Nebo-li složení relací $R$ a $S$.

### *Poznámka:*

$(f \circ g)(x) = g(f(x))$

### *Cvičení*

- *Ověřte, že pro libovolnou relaci $R$ je $Id \circ R = R = R \circ Id$.*
- *$(x,y) \in E \circ E \leftrightarrow x \in \bigcup y$*

## Definice:

Relace $F$ je **zobrazení (funkce)** pokud:

$$
(\forall u)(\forall v)(\forall w)(((u,v) \in F \land (u,w) \in F) \rightarrow v = w)
$$

- “Pro každé $v \in Dom(F)$ existuje právě jedna množina $v$ taková, že $(u,v) \in F$.”
- Píšeme $F(u) = v$.

## Definice:

- $F$ je zobrazení třídy $X$ **do** třídy $Y$; $F: X \to Y$, pokud $Dom(F) = X$ a $Rng(F) \subseteq Y$.
- $F$ je zobrazení třídy $X$ **na** třídu $Y$; pokud navíc platí $Rng(F) = Y$.
- $F$ je **prosté** zobrazení pokud $F^{-1}$ je zobrazení.
    - Pokud $(\forall v)(\forall u)(\forall w)((F(u) = w \land F(v) = w) \rightarrow u = v)$.
    - “Každý prvek $Rng(F)$ má právě jeden vzor.”

### Pozorování

Pokud $F$ je prosté zobrazení, pak $F^{-1}$ je také prosté zobrazení.

## Definice:

$A$ je třída, $\varphi$ je formule pak:

- $(\exists x \in A) \varphi$ je zkratka za $(\exists x)(x \in A \land \varphi)$.
- $(\forall x \in A) \varphi$ je zkratka za $(\forall x)(x \in A \rightarrow \varphi)$.

### Značení:

**Obraz / vzor** třídy $X$ zobrazením $F$.

- $F[X]$ místo $F \shortparallel X$ : $F[X] = \{y, (\exists x \in X) y = F(x)\}$
- $F^{-1}[X]$ místo $F^{-1} \shortparallel X$ : $F^{-1}[X] = \{y, (\exists x \in X) x = F(y)\}$

## Definice:

$A$ je třída, $a$ je množina, pak $^{a}A$ je $\{f; f: a \to A\}$, třída všech zobrazení z $a$ do $A$.

### *Poznámka:*

- *Z axiomu nahrazení $Rng(f)$ je množina, $f \subseteq a \times Rng(f)$, tedy $f$ je množina.*
- *Nelze definovat $^{B}A$ pokud $B$ je vlastní třída a $A \neq \emptyset$, protože je-li $Dom(f)$ vlastní třída, pak je i $f$.*
- *$^{\emptyset}A = \{\emptyset\}$*
- *$^{x}\emptyset = \emptyset$*

## Lemma

1.  Pro libovolné množiny $x,y$ je $^{x}y$ množina.
2.  Je-li $x \neq \emptyset, Y$ je vlastní třída, pak $^{x}Y$ je vlastní třída.

### Důkaz:

1.  Pokud $f: x \to y$. pak $f \subseteq x \times y$, tedy $f \in \mathcal{P}(x \times y)$. Tedy $^{x}y \subseteq \mathcal{P}(x \times y)$.
2.  Pro $y \in Y$ definujeme konstantní zobrazení $K_{y}: x \to Y$ tak, že $(\forall u \in x)(K_{y}(u) = y)$. $K_{y} = x \times {y}$, protože $x \neq \emptyset$, pro $y \neq y'$ platí $K_{y} \neq K_{y'}$. $K = \{K_{y}, y \in Y\}$ máme $K \subseteq ^{x}Y$.
    - Teď sporem: Pokud $^{x}Y$ je množina, pak $K$ je množina. Definujeme $F: K \to Y$ jako $F(K_{y})=y$. Z axiomu nahrazení $Y$ je množina a to je spor.

$$
\Box
$$

# Uspořádání

## Definice:

Relace $R (\subseteq V \times V)$ je na třídě $A$:

- Reflexivní:

$$
(\forall x \in A)((x,x) \in R)
$$

- Antireflexivní:

$$
(\forall x \in A)((x,x) \notin R)
$$

- Symetrická:

$$
(\forall x, y \in A)((x,y) \in R \leftrightarrow (y,x) \in R)
$$

- Slabě antisymetrická:

$$
(\forall x, y \in A)(((x,y) \in R \land (y,x) \in R) \rightarrow y = x)
$$

- Antisymetrická

$$
(\forall x \in A)(\forall y \in A)(x R y \rightarrow \neg (y R x))
$$

- Trichotomická:

$$
(\forall x \in A)( \forall y \in A)(xRy \lor yRx \lor x = y)
$$

- Tranzitivní:

$$
(\forall x,y,z \in A)((xRy \land yRz) \rightarrow xRz)
$$

### Pozorování

Tyto vlastnosti jsou **dědičné**, to znamená, že platí na každé podtřídě $B \subseteq A$.

## Definice:

- Relace $R$ je **uspořádání na třídě $A$**, pokud $R$ je reflexivní, slabě antisymetrická a tranzitivní.
- $x,y \in A$ jsou **porovnatelné (srovnatelné)** relací $R$ pokud $xRy \lor yRx$.

### Značení:

$x \leq_{R} y$ znamená $xRy$.

- "$x$ je menší nebo rovno $y$ vzhledem k $R$."

## Definice:

- Uspořádání $R$ je **lineární** pokud $R$ je trichotomické.
- $R'$ je **ostré** uspořádání pokud je tvaru $R \setminus Id$ (je antireflexivní, antisymetricá a tranzitivní).
- $x <_{R} y$ značí $x R' y$

### *Cvičení*

- *Doplňte tabulku ANO/NE.*

| *Relace* | *Uspořádání?* | *Ostré?* |
|----------|---------------|----------|
| *$E$*    |               |          |
| *$Id$*   |               |          |

$$
\text{Přednáška 5}
$$

* * *

## Definice:

Nechť $R$ je uspořádání na třídě $A$ a nechť $X \subseteq A$. Řekněme, že $a \in A$ je (vzhledem k $R$ a $A$):

- **Majorita (horní mez)** třídy $X$, pokud $(\forall x \in X)(x \leq_{R} a)$.
- *Minoranta (dolní mez)* třídy $X$, pokud $(\forall x \in X)(a \leq_{R} x)$.
- **Maximální prvek** třídy $X$, pokud $a \in X \land (\forall x \in X)(\neg (a <_{R} x))$.
- *Minimální prvek* třídy $X$, pokud $a \in X \land (\forall x \in X)(\neg (x <_{R} a))$.
- **Největší prvek** třídy $X$, pokud $a \in X$ a $a$ je majoranta $X$.
- *Největší prvek* třídy $X$, pokud $a \in X$ a $a$ je minoranta $X$.
- **Supremum** třídy $X$, pokud $a$ je nejmenší prvek třídy všech majorant $X$.
- *Infimum* třídy $X$, pokud $a$ je největší prvek třídy všech minorant $X$.

### Pozorování

- Největší implikuje maximální, pokud $R$ je lineární, tak platí i opačná implikace.
- Největší a supremum je vždy nejvýše 1. Lze značit jako $a = \max_{R}(X)$ a $a = \sup_{R}(X)$.

## Definice:

- $X$ je **shora omezená**, pokud existuje majoranta $X$ v $A$.
- $X$ je *zdola omezená*, pokud existuje minoranta $X$ v $A$.
- $X$ je **dolní množina**, pokud $(\forall x \in X)(\forall y \in A)(y \leq_{R} x \rightarrow y \in X)$.
- Analogicky i *horní množina*.
- $x \in A$, pak $| \leftarrow, x]$ je $\{y, y \in A \land y \leq_{R} x\}$. Nebo-li horní ideál omezená $x$.

### Pozorování

$R$ uspořádání na $A$, pak pro libovolné $x,y \in A$ platí $x \leq_{R} y \leftrightarrow |\leftarrow,x] \subseteq |\leftarrow,y]$.

### *Poznámka:*

- *Konstrukce $\mathbb{R}$ z $\mathbb{Q}$: **Dedekindovy řezy**.*
- *$X \subseteq \mathbb{Q}, X$ je dolní množina (vzhledem k $\subseteq$) a navíc existuje-li $\sup X$, pak $\sup X \subseteq X$.*

## Definice:

Uspořádání $R$ na třídě $A$ je **dobré**, pokud každá neprázdná podmnožina $A: (u \subseteq A)$ má nejmenší prvek vzhledem k $R$.

### *Cvičení*

*Napsat definice pomocí logických formulí.*

### Pozorování

- “Dobré” je dědičná vlastnost.
- Dobré implikuje lineární.

### *Cvičení*

*Najděte nějaké množiny, na nichž je $E$ dobré ostré uspořádání.*

## Definice:

**Ekvivalence** je pokud je reflexivní, symetrická a tranzitivní.

# Srovnávání mohutností

## Definice:

- Množiny $x,y$ mají **stejnou mohutnost** (psáno $x \approx y$) pokud existuje prosté zobrazení $x$ na $y$ (nebo-li bijekce). Někdy označováno jako $x$ je *ekvivalentní* $y$.
- Množina $x$ má **mohutnost menší nebo rovnou** mohutnosti $y$ (psáno $x \preceq y$) pokud existuje prosté zobrazení $x$ do $y$. Někdy označováno jako $x$ je *subvalentní* $y$.
- $x$ má **menší mohutnost** než $y$ (psáno $x \prec y$) pokud platí $x \preceq y \land \neg (x \approx y))$.

### Pozorování

- $x \subseteq y \rightarrow x \preceq y$ (identita)
- $x \subset y \rightarrow x \preceq y$ (ne $x \prec y$, například $\mathbb{N} \approx \mathbb{N}\setminus\{1\})$

### *Poznámka:*

*To jestli $\preceq$ je trichotomická v **ZF** nelze rozhodnout. Přidáím axiomu výběru už ale ano.*

## Lemma

Jsou-li $x,y,z$ množiny, potom:

1.  $x \approx x$
2.  $x \approx y \rightarrow y \approx x$
3.  $((x \approx y) \land (y \approx z)) \rightarrow x \approx z$, tedy $\approx$ je ekvivalence.
4.  $x \preceq x$
5.  $x \preceq y \land y \preceq z \rightarrow x \preceq z$

### Důkaz:

- Prakticky jen triviální, stačí najít dané zobrazení.\
    1.  $Id$
    2.  $F \rightarrow F^{-1}$
    3.  $F \land G \rightarrow F \circ G$
    4.  $Id$
    5.  $F \land G \rightarrow F \circ G$

$$
\Box
$$

### Pozorování

$x \approx y \rightarrow (x \preceq y \land y \preceq x)$

$$
\text{Přednáška 6}
$$

* * *

## Věta (Cantor-Bernstein)

$$
(x \preceq y \land y \preceq x) \rightarrow x \approx x
$$

### Důkaz:

- Důkaz se provede pomocí grafů. Také bude potřeba dodatečné lemma, které bude později.
- Jako graf si představíme bipartitní, kde jedna partita je $x$ a druhá $y$. Následně přidáme orientované hrany jakožto funkce $f$ a $g$, kde $f: x \to y, g: y \to x$ jsou prosté zobrazení.
- Teď se podíváme na komponenty grafu.
    1.  Buď může být kružnice sudé délky.
    2.  Nebo cesta s počátkem.
    3.  Anebo cesty obousměrné.
- Nyní uvažme “indukovaná” zobrazení: $(\hat{f}): \mathcal{P}(x) \to \mathcal{P}(y)$.
- Tahle funkce je monotónní vzhledem k inkluzi.
- Definujeme $H: \mathcal{P}(x) \to \mathcal{P}(x)$ takto: Pro $u \subseteq x$ nechť $H(u) = x - g[y - f[u]]$.
- $H$ je monotónní vzhledem k inkluzi.
    - $u_{1} \subseteq u_{2} \Rightarrow f[u_{1}] \subseteq f[u_{2}] \Rightarrow y - f[u_{1}] \supseteq y - f[u_{2}] \Rightarrow$
    - $\Rightarrow g[y - f[u_{1}] \supseteq g[y - f[u_{2}] \Rightarrow H(u_{1}) \subseteq H(u_{2})$.
- Podle lemma o pevném bodě $(\exists c)(H(c) = c)$, tedy $x - g[y - f[c]] = c \Rightarrow x - c = g[y - f[c]]$.
- Tedy $g^{-1}$ je prosté zobrazení $x\setminus c$ na $y \setminus f[c]$.
- Stačí definovat $h: x \to y$ jako:

$$
h(u) =
\left\{
\begin{array}{ll}
f(u) & \text{pokud } u = c \\
g^{-1}(u) & \text{jinak}
\end{array}
\right.
$$

- $h$ je prosté zobrazení $x$ na $y$.

$$
\Box
$$

## Definice:

Zobrazení $H: \mathcal{P}(x) \to \mathcal{P}(x)$ je **monotónní** (vzhledem k inkluzi) pokud pro každé dvě množiny $u,v \subseteq x$ platí $u \subseteq v \rightarrow H(u) \subseteq H(v)$.

## Lemma

Je-li $H: \mathcal{P}(x) \to \mathcal{P}(x)$ zobrazení monotónní vzhledem k inkluzi, pak existuje podmnožina $c \subseteq x$ taková, že $H(c) = c$. Též označován jako **pevný bod**.

### Důkaz:

- $A = \{u, u \subseteq x \land u \subseteq H(u)\}$
- $c = \bigcup A$ neboli supremum.
- $u \in A$ pak dostanu dvě možnosti:
    1.  $u \subseteq c$
    2.  $u \subseteq H(u) \subseteq H(c)$ (díky tomu, že $H$ je monotónní)
- Z toho pak plyne, že $H(c)$ je majoranta a tedy $c \subseteq H(c)$.
- Pak z monotonie platí $H(c) \subseteq H(H(c))$, tedy $H(c) \in A$, takže $H(c) \subseteq c$, nebo-li $c$ je majoranta.
- Z obou inkluzí pak plyne, že $c = H(c)$.

$$
\Box
$$

### *Cvičení*

*Ilustrace monotńní funkce $h: [0,1] \to [0,1]$.*

### *Cvičení*

*$A \subseteq \mathcal{P}(x)$ a uspořádání $\subseteq$, pak $\sup_{\subseteq} A = \bigcup A$ a $\inf_{\subseteq} A = \bigcap A$.*

### *Příklad:*

- *$\omega = \mathbb{N}_{0}$ pak $\omega \approx \omega \times \omega$*
- *$f: \omega \to \omega \times \omega$ jako $f(n) = (0,n)$*
- *$g: \omega\times\omega \to \omega$ jako $g((m,n)) = 2^{m}3^{n}$*
- *Podle Věty platí $\omega \approx \omega \times \omega$.*
- *$h: \omega\to\omega\times\omega$ jako $h((m,n)) = 2^{m}(2n+1)-1$*

### *Cvičení*

*Ověřte, že $g$ je prosté a $h$ je bijekce.*

### *Cvičení*

$\mathbb{N} \approx \mathbb{Q}$

### *Cvičení*

$[0,1] \approx [0,1] \times [0,1]$

## Lemma

Nechť $x,y,z,x_{1},y_{1}$ jsou množiny, pak:

1.  $x \times y \approx y \times x$
2.  $x \times (y \times z) \approx (x \times y) \times z$
3.  $(x \approx x_{1} \land y \approx y_{1}) \rightarrow (x \times y \approx x_{1} \times y_{1})$
4.  $x \approx y \rightarrow \mathcal{P}(x) \approx \mathcal{P}(y)$
5.  $\mathcal{P}(X) \approx ^{x}2$, kde $2 = \{\emptyset,\{\emptyset\}\}$

### Důkaz:

- Vždy jde o to najít vhodné funkce.

1.  $(u,v) \to (v,u)$
2.  $(u,(b,c)) \to ((u,b),c)$
3.  $f: x \to x_{1}, g: y \to y_{1}: (a,b) \to (f(a),g(b))$
4.  $f:x \to y, u \to f[u]$ (izomorfismus vzhledem k inkluzi)
5.  Pro $u \subseteq x$ definujeme charakteristickou funkci $\chi_{a}:x \to 2$, kde;

$$
\chi_{a}(v) =
\left\{
\begin{array}{ll}
1 & v \in a \\
0 & v \notin a
\end{array}
\right.
$$

- Zobrazení $\{(a, \chi_{a}); a \subseteq x\}$ je prosté a zobrazuje $\mathcal{P}(x)$ na $^{x}2$.

$$
\Box
$$

# Konečné množiny

## Definice: (*Tarski*)

Množina $x$ je **konečná**, označíme $Fin(x)$, pokud každá neprázdná podmnožina $\mathcal{P}(x)$ má **maximální** prvek vzhledem k inkluzi.

### *Cvičení*

*Napište definici pomocí formule.*

$$
\text{Přednáška 7}
$$

* * *

### Pozorování

$x$ je konečná právě tehdy, když každá neprázdná podmnožina $\mathcal{P}(x)$ má minimální prvek vzhledem k inkluzi.

### Důkaz:

- Uvažme $d: \mathcal{P}(x) \to \mathcal{P}(x)$ jako $d(u) = x \setminus u$.
- $u \subseteq v \Leftrightarrow d(u) \supseteq d(v)$

$$
\Box
$$

## Definice:

Množina $a$ je **Dedekindovsky konečná** pokud má větší mohutnost než každá vlastní podmnožina $b \subset a$. (Nebo-li neexistuje prosté zobrazení $a$ na $b$.)

## Lemma

Je-li množina $a$ konečná tak je i Dedekindovsky konečná.

### Důkaz:

- Nutno dokázat, že pokud $b \subset a$ pak $b \preceq a$.
- Sporem: $b \approx a$.
- Nechť $y = \{b, b \subset a \land b \approx a\}, y \neq \emptyset, y \in \mathcal{P}(a)$. Nechť $c \in y$ je minimální prvek $y$ vzhledem k $\subseteq$.
- Nechť $f: a \to a$ je prosté zobrazení $a$ na $c$. $d = f[c]$.
- $f \upharpoonright c$ je prosté zobrazení $c$ na $d$. Tedy $c \approx d$, tedy $d \in y$.
- $d \subseteq c: (\exists x)( x \in a \setminus c)$ pak $f(x) \in c \setminus d$.
- Spor s minimalitou volby $c$.

$$
\Box
$$

### *Poznámka:*

*Opačná implikace v **ZF** není dokazatelná.*

- Existuje lineární uspořádání $\leq$, které je dobré, pak i $\geq$ je dobré.
- Existuje lineární uspořádání a každá 2 lineární uspořádání jsou izomorfní.
- $x$ je konečná $\Leftrightarrow \mathcal{P}(\mathcal{P}(x))$ je dedekindovsky konečná

## Věta

1.  Je-li $a$ konečná uspořádaná množina (relací $\leq$) pak každá její neprázdná podmnožina $b \subseteq a$ má maximální prvek.
2.  Každé lineární uspořádání na konečné množině je dobré.

### Důkaz:

1.  Pro každé $x \in a$ uvažme $| \leftarrow , x] = \{y, y \in a \land y \leq x\}$.

- $u = \{|\leftarrow , x], x \in b\}, u \subseteq \mathcal{P}(a), u \neq \emptyset$
- Z konečnosti $a$ existuje $m \in b$ takové, že $| \leftarrow ,m]$ je maximální prvek vzhledem k $\subseteq$.
- $x \leq y \Leftrightarrow | \leftarrow , x] < | \leftarrow , y]$
- Tedy $m$ je maximální prvek $b$ vzhledem k $\subseteq$.
- *Minimální prvek se najde podobně, akorát to bude horní množina a minimální prvek.*

2.  Minimální prvek v lineárním uspořádání je už nejmenší.

$$
\Box
$$

## Definice:

$F$ je zobrazení $A_{1}$ do $A_{2}$, $R_{1},R_{2}$ jsou relace. $F$ je **izomorfismus** tříd $A_{1},A_{2}$ vzhledem k $R_{1},R_{2}$ pokud $F$ je prosté zobrazení $A_{1}$ na $A_{2}$ a $(\forall x \in A_{1})(\forall y \in A_{2})(x,y) \in R_{1} \leftrightarrow (F(x),F(y)) \in R_{2}$.

## Definice:

- $A$ je mmožina uspořádaná relací $R$.
- $B$ je mmožina uspořádaná relací $S$.
- Zobrazení $F$ je **počátkové vnoření** $A$ do $B$, pokud $A_{1} = Dom(F)$ je dolní podmnožina $A$ a $B_{1} = Rng(F)$ je dolní podmnožina $B$.
- A $F$ je izomorfismus $A_{1}$ a $B_{1}$ vzhledem k $R,S$.

## Lemma

Nechť $F,G$ jsou počátkové vnoření dobře uspořádané množiny $A$ do dobře uspořádané množiny $B$. Potom $F \subseteq G$ nebo $G \subseteq F$.

### Důkaz:

- Nechť $R$ je dobré uspořádání množiny $A$.
- Nechť $S$ je dobré uspořádání množiny $B$.
- $Dom(F), Dom(G)$ jsou dolní podmnožiny $A$.
- $R$ je lineární, tedy $Dom(F) \leq Dom(G) \lor Dom(G) \leq Dom(F)$. (BÚNO: $Dom(F) \leq Dom(G)$, jinak přejmenuji množiny).
- Dokážeme $(\forall x \in Dom(F)) F(x) = G(x)$.
- Sporem Nechť $x$ je nejmenší (vzhledem k $R$) prvek množiny $\{z, z \in A \land G(z) \neq F(z)\}$.
- Tedy $\forall y <_{R} x : F(y) = G(y)$.
- Z linearity $S$ je $F(x) <_{S} G(x) \lor G(x) <_{S} F(x)$ (BÚNO: $F(x) <_{S} G(x)$).
- Nechť $b = F(x)$.
- Je-li $z \in Dom(G)$ pak buď:
    - $z <_{R} x$ $G(z) = F(z)$
    - $z \geq_{R} x$ $F(x) = b$
- Pak $G(z) \geq_{S} G(x) >_{S} F(x) = b$.
- V obou případech $b \notin Rng(G)$ a tedy $Rng(G)$ není dolní množina a to je spor.

$$
\Box
$$

### *Cvičení*

*Lineární uspořádání jsou každé dvě dolní množiny porovnatelné inkluzí.*

### *Cvičení*

*Co když místo dobrého uspořádání bude jen lineární uspořádání.*

## Věta (*O porovnávání dobrých uspořádání.*)

- $A$ je množina dobře uspořádaná relací $R$.
- $B$ je množina dobře uspořádaná relací $S$.
- Pak existuje právě jedno zobrazení $F$, které je izomorfismus $A$ a dolní množiny $B$, nebo $B$ a dolní množiny $A$.

### Důkaz:

- $P$ je množina všech počátečních vnoření $A$ do $B$. Nechť $F = \bigcup P$.
- $F$ je zobrazení: Když $(x,y_{1})(x,y_{2}) \in F$ existuje počáteční vnoření $F_{1}, F_{2}$, že $(x,y_{1}) \in F_{1}, (x,y_{2}) \in F_{2}$. Podle lemma $F_{1} \subseteq F_{2}$ nebo naopak. Předpokládejme, že nastala tato situace.
- Tedy $(x,y_{1}) \in F_{2}; F_{2}$ je zobrazení, tedy $y_{1} = y_{2}$.
- $F$ je počáteční vnoření: Když $x_{1} <_{R} x_{2} \in Dom(F)$ tak existuje počáteční vnoření $F'$ že $x_{2} \in Dom(F')$. Tedy $x_{1} \in Dom(F') \subseteq Dom(F)$.
- Podobně pro $Rng(F) = \bigcup Rng(F')$ je dolní.
- $F(x_{1}) = F'(x_{1}) <_{S} F'(x_{2}) = F(x_{2})$
- $Dom (F) = A \lor Rng(F) = B$.
- Sporem: $A \setminus Dom(F), B \setminus Rng(F)$ jsou neprázdné, mající nejmenší prvky $a,b$.
- Definujeme $F'= F \cup \{(a,b)\}$ je počáteční vnoření $F' \in P, F' \subseteq F$ a to je spor.

$$
\Box
$$

### *Cvičení*

*Jednoznačnost $F$.*

### *Cvičení*

*Sjednocení dolních množin je dolní množina.*

$$
\text{Přednáška 8}
$$

* * *

## Věta

$a$ je konečná množina, pak každé lineární uspořádání na $a$ jsou izomorfní.

### Důkaz:

- $R,S$ jsou dvě lineární uspořádání a také dobrá uspořádání.
- $(a,R)$ je izomorfní dolní množině $(a,S)$ nebo dolní množina $(a,R)$ je izomorfní $(a,S)$.
- Dolní množina $b, b \approx a$, z Dedekindovy konečnosti platí, že $a = b$.

$$
\Box
$$

## Lemma (*Zachovávání konečnosti.*)

1.  $(Fin(x) \land y \subseteq x) \rightarrow Fin(y)$
2.  $(Fin(x) \land y \approx x) \rightarrow Fin(y)$
3.  $(Fin(x) \land y \preceq x) \rightarrow Fin(y)$

### Důkaz:

1.  $w \subseteq \mathcal{P}(y) \subseteq \mathcal{P}(x)$
2.  $\mathcal{P}(y)$ je izomorfní $\mathcal{P}(x)$
3.  Plyne z 1 a 2.

$$
\Box
$$

## Lemma (*sjednocení konečných množin*)

1.  $Fin(x) \land Fin(y) \rightarrow Fin(x \cup y)$
2.  $Fin(x) \rightarrow (\forall y) Fin(x \cup \{y\})$

### Důkaz:

- $w \subseteq \mathcal{P}(x \cup y)$ neprázdná
- $w_{1} = \{ u, (\exists t \in w)( u = t \cap x)\} \subseteq \mathcal{P}(x)$
    - Má maximální prvek $v_{1}$.
- $w_{2} = \{u, (\exists t \in w)( t \cap x = v_{1} \land t \cap y = u)\} \subseteq \mathcal{P}(y)$
    - Má maximální prvek $v_{2}$.
- $v_{1} \cup v_{2}$ je maximální prvek $w$.

$$
\Box
$$

## Definice:

Třída všech konečných množin $Fin = \{x, Fin(x)\}$.

## Věta (**Princip indukce pro konečné množiny**)

Je-li $X$ třída, pro kterou platí:

1.  $\emptyset \in X$,
2.  $x \in X \rightarrow (\forall y)(x \cup \{y\} \in X)$, pak $Fin \subseteq X$.

### Důkaz:

- Sporem: Pokud $x \in Fin \setminus X$. nechť $w = \{v, v \subseteq x \land v \in X\}$.
- Podle 1: $\emptyset \in w$
- $w \subseteq \mathcal{P}(x)$, neprázdná.
- $w$ má maximální prvek $v_{0}$.
- $v_{0} \subseteq x$
- $v_{0} \in X$, tedy $v_{0} \neq x$ a $v_{0} \subset X$.
- Tedy existuje $y \in x \setminus v_{0}$.
- Nechť $v_{1} = v_{0} \cup \{y\}$.
- Podle 2: $v_{1} \in X$.
- Tedy $v_{1} \in w$, spor s maximalitou $v_{0}$.

$$
\Box
$$

## Lemma

$Fin (x) \rightarrow Fin(\mathcal{P}(x))$

### Důkaz:

- Indukcí: Nechť $X = \{x, Fin(\mathcal{P}(x))\}$.
- $\emptyset \in X$, protože $\mathcal{P}(\emptyset) = \{\emptyset\}$ je konečná.
- Nechť $x \in X, y$ je množina. Chceme aby $x \cup \{y\} \in X$.
- BÚNO: $y \notin x$ (jinak triviální).
- Rozdělíme $\mathcal{P}(x \cup \{y\})$ na dvě části:
    - $\mathcal{P}(x \cup \{y\}) = \mathcal{P}(x) \cup (\mathcal{P}(x \cup \{y\}) \setminus \mathcal{P}(x))$
- Platí $\mathcal{P}(x) \approx z$, kde $z$ se rovná předchozímu druhému prvku v sjednocení.
- Pro $u \in \mathcal{P}(x)$ definujeme $f(u) = u \cup \{y\}$.
    - $f$ je prosté zobrazení $\mathcal{P}(x)$ na $z$.
- Podle předpokladu $Fin(\mathcal{P}(x))$.
- Podle lemma $Fin(z)$.
- Podle lemma o sjednocení $Fin(\mathcal{P}(x) \cup z)$.
- Podle principu indukce $Fin \subseteq X$.

$$
\Box
$$

### Důsledek:

$Fin(x) \cap Fin(y) \rightarrow Fin(x \times y)$

### Důkaz:

- Nechť $z = x \cup y$, víme $Fin(z)$.
- $x \times y \subseteq z \times z \subseteq \mathcal{P}(\mathcal{P}(z))$.

$$
\Box
$$

## Lemma (“sjednocení konečně mnoha konečných množin je konečná množina”)

Je-li $Fin(a)$ a $(\forall b \in a) Fin(b)$, pak $Fin(\bigcup a)$.

### Důkaz:

- Indukcí: $X = \{x, x \subseteq Fin \rightarrow Fin(\bigcup x)\}$.

1.  $\emptyset \in X$, protože $\bigcup \emptyset = \emptyset$.
2.  Nechť $x \in X, y$ množina. Chceme aby $x \cup \{y\} \in X$.

- Předpokládejme, že $x \cup \{y\} \subseteq Fin$. Speciálně $x \subseteq Fin$.
- $\bigcup (x \cup \{y\}) = \bigcup x \cup y$
    - Obě dvě jsou konečné a sjednocení tím pádem je také konečné.
- Tedy $x \cup \{y\} \in X$.
- Podle principu indukce $Fin \subseteq X$.

$$
\Box
$$

### Důsledek: (Dirichletův princip pro konečné množiny.)

Je-li nekonečná množina sjednocení konečně mnoha množin, pak jedna z nich musí být nekonečná.

## Lemma (“Každá konečná množina je srovnatelná se všemi množinami.”)

$Fin(x) \rightarrow (\forall y)( y \preceq x \lor x \preceq y)$

### Důkaz:

- Indukcí: $x = \{x, (\forall y)(y \preceq x \lor x \preceq y)\}$

1.  $\emptyset \in X$, protože $(\forall y) \emptyset \subseteq y$ tedy $\emptyset \preceq y$.
2.  Nechť $x \in X, u$ je množina. BÚNO: $u \notin X$. Chceme $x \cup \{u\} \in X$, nechť $X$ je množina.

- Když $y \preceq x$, pak $x \preceq x \cup \{u\}$ z tranzitivity $y \preceq x \cup \{u\}$.
- Nechť $x \prec y$. $g$ je prosté zobrazení $x$ do $y$.
- Nechť $v \in X \setminus Rng(g)$.
- Definujeme $h = g \cup \{(u,v)\}, h$ je prosté zobrazení $x \cup \{u\}$ do $y$.
- Tedy $x \cup \{u\} \preceq y$.
- Z principu indukce $Fin \subseteq X$.

$$
\Box
$$

### *Cvičení*

*$Fin(x)$ a $f: x \to y$, pak $Rng (f) \preceq x$ (pomocí indukce).*

### *Cvičení*

*$(\forall x) Fin(x)$ lze dobře uspořádat (indukcí).*

# Přirozená čísla

## Definice: (von Neumann)

- Myšlenka: *“Přirozené číslo je množina všech menších přirozených čísel.”*
- $0 = \emptyset; 1 = \{0\} = \{\emptyset\}; 2 = \{0,1\} = \{\emptyset, \{\emptyset \}\}; 3 = \{0,1,2\} = \dots$

## Definice:

$w$ je **induktivní množina**, pokud $\emptyset \in w \land (\forall v \in w)(v \cup \{v\} \in w)$.

## 9.Axiom nekonečna (“Existuje induktivní množina.”)

$$
(\exists z)(0 \in z \land (\forall x)(x \in z \rightarrow x \cup \{x\} \in z))
$$

## Definice:

**Množina všech přirozených čísel** $\omega$ je $\bigcap\{w, w \text{ je induktivní množina}\}$.

## Lemma

$\omega$ je nejmenší induktivní množina.

### Důkaz:

- $0 \in \omega$
- $x \in \omega, x$ patří do každé induktivní množiny.
- $x \cup \{x\}$ patří do každé induktivní množiny.
- $x \cup \{x\} \in \omega$.

$$
\Box
$$

- Prvky $\omega$ jsou **přirozená čísla** v teorii množin.

$$
\text{Přednáška 9}
$$

* * *

## Definice:

Funkce následník $S: \omega\to\omega$. Pro $v \in \omega: S(v) = v \cup \{v\}$.

- *“Následník čísla $v$.”*

## Věta **Princip (*slabé*) indukce pro přirozená čísla.**

Je-li $X \subseteq \omega$ taková, že platí:

1.  $0 \in X$,
2.  $x \in X \rightarrow S(x) \in X$. Pak $X = \omega$.

### Důkaz:

- 1 a 2 dohromady říká, že $X$ je induktivní, tedy $\omega \subseteq X$.

$$
\Box
$$

### *Příklad:*

- *Důkaz indukcí:*
    - *Chceme dokázat: $(\forall n \in \omega)(\varphi(n))$.*
    - *Dokazujeme: 1. $\varphi(0)$ a 2. $(\forall n \in \omega)(\varphi(n) \rightarrow \varphi(S(n)))$.*

### *Poznámka:*

*Princip silné indukce: 2: $((\forall m \in \omega) m \in X) \rightarrow n \in X$.*

## Lemma "$\in$ je ostré uspořádání"

Pro libovolné $m,n \in \omega$ platí:

1.  $n \in \omega \rightarrow n \subseteq \omega$
    - *“Prvky přirozených čísel jsou přirozená čísla.”*
2.  $m \in n \rightarrow m \subseteq n$
    - *“Náležení je tranzitivní na $\omega$.”*
3.  $n \nsubseteq n$
    - *"$\in$ je antireflexivní na $\omega$."*

- Z toho všeho plyne, že se jedná o ostré uspořádání.

### Důkaz:

- Indukcí:

1.  $0 \subseteq \omega$, a indukční krok $n \in \omega$, předpokládáme, že $n \subseteq \omega$. Pak $\{n\} \subseteq \omega$ tedy $n \cup \{n\} \subseteq \omega$.
2.  Indukcí podle $n$:
    - 1.  Krok: $m \notin 0$ tím pádem implikace splněna.
    - 2.  Krok $X = \{n, n \in \omega \land (\forall m)(m \in n \rightarrow m \subseteq n)\}$.
    - Víme $0 \in X$.
    - Nechť $n \in X$, víme $S(n) \in \omega$.
    - Nechť $m \in S(n) = n \cup \{n\}$. Pak buď $m \in n$ a z IP pak $m \subseteq n$ anebo $m = n$ tím pádem také $m \subseteq n \subseteq S(n)$.
3.  $0 \nsubseteq 0$ platí, nechť $n \in \omega$ a $n \nsubseteq n$.
    - Sporem $S(n) \subseteq S(n) = n \cup \{n\}$. Z toho pak plyne, že buď $S(n) \subseteq \{n\}$ anebo $S(n) \subseteq n$. V obou případech je $S(n) \subseteq n$, ale to pak znamená, že $n \in S(n) \subseteq n$ což je spor s předpokladem.

$$
\Box
$$

## Lemma

Každé přirozené číslo je konečná množina.

### Důkaz:

Indukcí: $Fin(\emptyset)$ víme. Podle lemma $Fin(x) \rightarrow (\forall y)Fin(x \cup \{y\})$, speciálně pro $Fin(x \cup \{x\})$ a to je následník.

$$
\Box
$$

## Věta

Množina $x$ je konečná právě tehdy, když $(\exists n \in \omega) x \approx n$.

### Důkaz:

- $\Leftarrow Fin(n)$ tedy $Fin(x)$.
- $\Rightarrow$ indukcí:
    - $X = \{x; (\exists n \in \omega) x \approx n\}$
    - Víme, že $0 \in X$ protože $0 \approx 0$.
    - Nechť $x \in X, y$ množina. Víme, že $(\exists n \in \omega) n \approx x$.
    - $y \in x$ pak $x \cup \{y\} = x \approx n$
    - $y \notin x$ pak $x \cup \{y\} \approx S(n) = n \cup \{n\}$
    - K bijekci $x$ a $n$ přidáme $(y,n)$.
    - Tedy $Fin \subseteq X$.

$$
\Box
$$

## Lemma

Množina $\omega$ i každá induktivní množina je nekonečná.

### Důkaz:

- Podle lemma: 1 $n \in \omega \rightarrow n \subseteq \omega$, tedy $n \in \mathcal{P}(n)$ tedy $\omega \subseteq \mathcal{P}(n), \omega$ je neprázdná ale nemá maximální prvek vzhledem k inkluzi. Když $n \subseteq \omega$ pak podle lemma 3. $n \nsubseteq n$ a tedy $n \subset n \cup \{n\} = S(n)$.
- $\omega \subseteq W$ tedy i induktivní množiny.

$$
\Box
$$

### *Cvičení*

*$\omega$ je Dedekindovsky nekonečná.*

## Lemma (Linearita $\in$ na $\omega$.)

- $m,n \in \omega$
- Platí:
    1.  $m \in n \leftrightarrow m \subset n$
    2.  $m \in n \lor m = n \lor n \in m$ (*trichotomie*)

### Důkaz:

1.  $\rightarrow$ plyne z lemma 2 $m \in n \rightarrow m \subset n \land n \nsubseteq n$
    - $\leftarrow$ indukcí podle $n$; $n = 0$ nelze splnit.
    - Indukční krok. Nechť platí pro nějaké $n$ a $\forall m$.
    - Nechť $m \subset S(n) = n \cup \{n\}$ a $m \subseteq n$, kdyby ne pak $n \in m$ tedy $n \subseteq m$ tedy $S(n) = n \cup \{n\} \subseteq m$ a to je spor.
    - $m \subset n$ z IP $m \in n \subseteq S(n)$ tedy $m \in S(n)$
    - $m = n$ pak $n \in S(n)$
2.  Pro $n \in \omega$ nechť $A(n) = \{m \in \omega, m \in n \lor m =n \lor n \in m\}$.
    - Dokážeme, že $A(n)$ je induktivní, indukcí podle $m$.
    - $n = 0: 0 \in A(0)$, protože $0 = 0$
    - Je-li $m \in A(0)$, pak: $m = 0: 0 \in \{m\}$ anebo $0 \in m$ a z obou plyne $0 \in m \cup \{m\} = S(n)$.
    - Tedy $S(n) \in A(0)$.
    - Tedy $A(0) = \omega$.
    - Tedy také $(\forall n \in \omega) 0 \in A(n)$.
    - $n \in \omega, m \in \omega$, předpokládejme, že $m \in A(n)$. Ukážeme, že $S(m) \in A(n)$.
        - $m \in n \rightarrow m \subset n; \{m\} \subseteq n$ tedy $S(m) \subseteq n$ z toho plyne, že $S(m) = n \lor S(m) \in n$.
        - $m = n \lor n \in m$ potom $n \in m \cup \{m\} = S(m)$
    - Ve všech případech ke $S(m) \in A(n)$.

$$
\Box
$$

## Věta

Množina $\omega$ je dobře (ostře) uspořádaná relací $\in$.

### Důkaz:

- Nechť $a \subseteq \omega, a \neq \emptyset$. Zvolme $n \in a$.
- Není-li $n$ nejmenší (minimální), tak definuji $b = n \cap a$. $n$ je konečná, tak i $b$ je konečná a neprázdná.
- $b \subseteq \omega$ tedy $b$ má minimální prvek $m$ vzhledem k náležení.
- $m$ je minimální i v množině $a$: kdyby $(\exists x \in a) x \in m$, tak víme, že $m \in n$, tedy $m \subseteq n$, tedy $x \in n$, tedy $x \in b$. To je spor s minimalitou $m$ v $b$.
- $\in$ je lineární na $\omega$, tedy $m$ je nejmenší prvek v $a$. Tedy $\in$ je dobré uspořádání.

$$
\Box
$$

### *Poznámka:*

*Nekonečná množina $A$ s lineárním (ostrým) uspořádáním $<$ pro každé $a \in A: |\leftarrow, a]$ je konečná. Pak $<$ je dobré a $(A,<)$ je izomorfní $(\omega, \in)$.*

$$
\text{Přednáška 10}
$$

* * *

## Věta (Charakterizace uspořádání $\in$ na $\omega$)

Nechť $A$ je nekonečná množina, lineárně uspořádaná (ostře) relací $<$ tak, že pro každé $a \in A$ je dolní množina $|\leftarrow , a]$ konečná. Pak $<$ je dobré a množiny $A, \omega$ jsou izomorfní vzhledem k $<, \in$.

### Důkaz:

- $<$ je dobré: $\emptyset \neq c \in A$. Nechť $a \in c$, předpokládejme, že $a$ není minimální v $c$, pak definujeme $b = c \cap |\leftarrow, a]$. $b$ je konečná. Tedy má minimální prvek $m, m$ je minimální i v $c$.
- Protože $m \leq a$, pak $x \leq a$ tedy $x \in |\leftarrow, a]$ tedy $x \in b$ a to je spor.
- Izomorfismus: podle věty o porovnávání dobrých uspořádání jsou 2 možnosti:

1.  $A$ je izomorfní s dolní podmnožinou $B \subseteq \omega$, pak $B$ není shora omezená. Neexistuje $n \in \omega (\forall b \in B) b \in n$. Sporem $B \subseteq S(n)$ tedy $B$ by byla konečná a to je spor.

- To znamená, že $(\forall n \in \omega)$ je menší než nějaký prvek $b \in B$. $B$ je dolní množina, tedy $n \in B \rightarrow \omega \subseteq B \rightarrow \omega = B$.

2.  $\omega$ je izomorfní dolní podmnožině $C \subseteq A$. $C$ není shora omezená, kdyby ano, tak $\exists a \in A : C \subseteq |\leftarrow, a], C$ by byla konečná, spor. $(\forall a \in A, \exists c \in C: a \subseteq c, C$ je dolní, tedy $C= A$.

$$
\Box
$$

# Spočetné množiny

## Definice:

- Množina $x$ je **spočetná**, pokud $x \approx \omega$.
- Množina $x$ je **nejvýše spočetná**, pokud je konečná nebo spočetná.
- Jinak je množina **nespočetná**.

## Věta

1.  Každá shora omezená množina $A \subseteq \omega$ je konečná, každá shora neomezená $A \subseteq \omega$ je spočetná.
2.  Každá podmnožina spočetné množiny je nejvýše spočetná.

### Důkaz:

1.  $A$ omezená, to znamená, že $\exists n: A \subseteq S(n)$. Takže $Fin(S(n)) \rightarrow Fin(A)$.

- Pokud je $A$ neomezená, pak je nekonečná. To lze dokázat sporem, že kdyby byla konečná, pak má $A$ maximální prvek $m$, tedy je shora omezená $m$, to je spor.
- $A$ je lineárně uspořádaná $\in$. Pro každé $n \in A$ je $|\leftarrow ,n] \subseteq S(n)$, tedy $|\leftarrow ,n ]$ je konečná. Podle charakterizační věty $A$ je izomorfní $\omega$. Takže $A \approx \omega$.

2.  $A$ je spočetná $f: A \to \omega$ (bijekce). $B \subseteq A$, pak $B \approx f[B] \subseteq \omega$. Podle 1) je $f[B]$ spočetná anebo konečná.

$$
\Box
$$

### *Příklad:*

***Lexikografické uspořádání** na $\omega \times \omega$.*

$$
(m_{1},n_{1}) <_{L} (m_{2},n_{2}) \leftrightarrow (m_{1} \in m_{2} \lor ((m_{1} = m_{2}) \land (n_{1} \in n_{2})))
$$

### *Cvičení*

*Ověřte, že $<_{L}$ je dobré uspořádání na $\omega \times \omega$.*

### *Cvičení*

*Ověřte, že $<_{L}$ na $\omega \times 2$ je izomorfní s $(\omega, \in)$.*

### *Cvičení*

*Ověřte, že $<_{L}$ na $2 \times \omega$ není izomorfní s $(\omega, \in)$.*

## Definice:

**Maximo-lexikografické uspořádání** na $\omega \times \omega$ je:

$$
\max(m,n) =
\left\{
\begin{array}{ll}
m & n \in m \\
n & \text{ jinak}
\end{array}
\right.
$$

$$
\begin{array}{c}
(m_{1},n_{1}) <_{ML} (m_{2},n_{2}) \\
\updownarrow \\
((\max(m_{1},n_{1}) \in \max(m_{2},n_{2})) \lor ((\max(m_{1},n_{1}) = \max(m_{2},n_{2})) \land ((m_{1},n_{1}) <_{L} (m_{2},n_{2}))))
\end{array}
$$

### *Cvičení*

*Ověřte, že $\omega \times \omega <_{ML}$ je izomorfní $(\omega, \in)$.*

## Věta

Jsou-li $A,B$ spočetné množiny, pak $A \cup B$ a $A \times B$ jsou spočetné.

### Důkaz:

- $f: A \to \omega$ a $g: B \to \omega$ jsou bijekce.
- Definujeme $h: A \cup B \to \omega \times 2 \approx \omega$ jako:

$$
h(x) =
\left\{
\begin{array}{ll}
(f(x),0) & x \in A \\
(g(x),1) & x \in B \setminus A
\end{array}
\right.
$$

- $h$ je prosté. Tedy $A \cup B \subseteq \omega \times 2 \approx \omega \land \omega \preceq A \preceq A \cup B$ a z Cantor-Bernsteinovy věty implikuje, že $\omega \approx A \cup B$.
- $A \times B$ definujeme $k: A \times B \to \omega \times \omega$ jako $k((a,b)) = (f(a),g(b)), k$ je bijekce.
- Opět mám $A \times B \approx \omega \times \omega \approx \omega$.

$$
\Box
$$

### Důsledek:

$\mathbb{Z}, \mathbb{Q}$ jsou spočetné. Kde $\mathbb{Z}$ lze modelovat jako množinu dvojic, kde první je číslo a druhé bool jestli je kladné nebo ne. A $\mathbb{Q}$ jako množinu dvojic $(m,n)$ kde je číslo nejmenší společný dělitel $(m,n) = 1$ a číslo je $\frac{m}{n}$.

### Důsledek:

- Konečná sjednocení, konečné součiny jsou spočetné.
- **Dirichletův princip**: je-li $A$ nespočetná, $A = A_{1} \cup A_{2} \cup \dots \cup A_{n}$, potom aspoň jedna množina $A_{i}$ je nespočetná.
- Konečná podmnožina $[A]^{< \omega}$ konečné posloupnosti jsou spočetné.

### *Cvičení*

*Je-li $A$ nespočetné, $B$ spočetná, $C$ konečná, potom $A \cup C, A \setminus C$ jsou nespočetné a $B \cup C, B \setminus C$ jsou spočetné, $A \cup B, A \setminus B$ jsou nespočetné.*

### *Poznámka:*

*Spočetné sjednocení spočetně mnoha množin $\bigcup A$, kde $A$ je spočetná a $(\forall a \in A)$ jsou spočetné.*

$$
\text{Přednáška 11}
$$

* * *

## Věta (*Cantor*)

$$
x \prec \mathcal{P}(x)
$$

### Důkaz:

- Pomocí *diagonální metody*.
- $\preceq : f(y) = \{y\}, f: x \to \mathcal{P}(x)$ je prosté.
- Definujme $y = \{t, t \in x \land t \notin f(t)\}$. Potom $y \subseteq \mathcal{P}(x)$ nemá vzor při $f$. Kdyby

$$
f(v) = y:
\left\{
\begin{array}{llr}
v \in y & \text{ pak } v \notin f(v) = y & \text{ SPOR} \\
v \notin y = f(v) & \text{ tedy } v \in y & \text{ SPOR}
\end{array}
\right.
$$

$$
\Box
$$

### Důsledek:

$\mathcal{P}(\omega)$ je nespočetná.

### Důsledek:

$V$ není množina: $\mathcal{P}(V) \subseteq V$, kdyby byla množina, pak by musela platit Cantorova věta.

## Věta

$$
\mathcal{P}(\omega) \approx \mathbb{R} \approx [0,1]
$$

### Důkaz:

- Víme $\mathcal{P}(\omega) \approx ^{\omega}2$ podmnožiny $\leftrightarrow$ charakteristická funkce $\leftrightarrow$ posloupnosti $(a_{0},a_{1},a_{2},\dots)$, kde $a_{i} \in \{0,1\}$.
- $[0,1] \approx ^{\omega}2: a \in [0,1]$ zapíšu v binární soustavě tak, že pokud je to nula, tak je to nekonečně nul a jinak vždy tak, aby obsahovalo nekonečno jedniček.
- $\leftarrow$ použijeme trojkovou soustavu. $(a_{0},a_{1},a_{2},\dots) \to a = \sum_{n = 0}^{\infty} \frac{a_{n}}{3^{n+1}}$.
- Cantor-Bernstein $\rightarrow [0,1] \approx ^{\omega}2$. (*pozn.: Cantorovo diskontinuum*).
- $[0,1] \subseteq \mathbb{R}$
- $\mathbb{E} \to [0,1]$ nějakou vhodnou funkci např. $\frac{\pi / 2 - \arctan(x)}{\pi}$.

$$
\Box
$$

### *Poznámka:*

*Množina algebraických čísel (tj. kořeny polynomů s racionálními koeficienty) je spočetná.*

### *Cvičení*

- *Pokrytí $N$ intervaly.*

1.  *Konečně.*
    - $A \subseteq I_{1} \cup I_{2} \cup \dots \cup I_{n}$ *pak* $\sum (b_{i} - a_{i} \geq 1$
2.  *Nekonečně.*
    - $\forall \epsilon > 0: \exists I_{1},I_{2}, \dots, A \subseteq \bigcup I_{i}; \sum (b_{i} - a_{i}) < \epsilon$

### *Poznámka:*

***Hypotéza kontinua** je, že každá nekonečná podmnožina $\mathbb{R}$ je buď spočetná anebo ekvivalentní s $\mathbb{R}$.*

# Axiom výběru

## Princip výběru

Pro každý rozklad $r$ množiny $x$ existuje **výběrová množina**. To jest $v \subseteq x$, pro kterou platí $(\forall u \in r)(\exists x)( v \cap u = \{x\})$.

## Definice:

Je-li $X$ množina, pak funkce $f$ definovaná na $X$ splňující $(y \in X \land y \neq \emptyset) \rightarrow f(y) \in y$ se nazývá **selektor** na množině $X$.

## 10.Axiom výběru (*AC - axiom of choice*)

Na každé množině existuje selektor.

### Ekvivalentně

- Každou množinu lze dobře uspořádat.
- $\leq$ je trichotomická.
- Zornovo lemma.

### Důsledky:

- Každý vektorový prostor má bázi.
- Součin kompaktních topologických prostorů je kompaktní.
- Hahn-Banachova věta.
- Princip kompaktnosti.
- Banach Tarski (rozdělení koule na malé části a vytvoření dvou stejně velkých koulí).

## Definice:

(Indexový) soubor množin $<F_{j}; j \in J>$. Kde $F$ je zobrazení s definovaným obrazem $J$. Pro $j \in J: F_{j} = F(j)$. $J$ je **indexová třída** a jeho prvky jsou **indexy**.

- Lze definovat:

$$
\left\{
\begin{array}{l}
\bigcup_{j \in J} F_{j} \text{ jako } \{x, (\exists j \in J) x \in F_{j})\} \\
\bigcup_{j \in J} F_{j} = \bigcup Rng(F)
\end{array}
\right.
$$

$$
\left\{
\begin{array}{l}
\bigcap_{j \in J} F_{j} \text{ jako } \{x, (\forall j \in J) x \in F_{j})\} \\
\bigcap_{j \in J} F_{j} = \bigcap Rng(F)
\end{array}
\right.
$$

- Kartézský součin souboru množin indexovaného množinou $J$ je $X_{j \in J} F_{j} : \{f, f: J \to \bigcup_{j \in J} F_{j} \land (\forall j \in J)f(j) \in F_{j}\}$.

## Lemma

Je-li $J$ množina, pak $XF_{j}$ je množina. Je-li $(\forall j \in J) F_{j} = Y$, pak $X_{j \in J}F_{j} = ^{J}Y$.

### Důkaz:

- Axiom nahrazení. $Rng(F)$ je množina, $\bigcup Rng(F)$ je množina. $^{J}\bigcup_{j\in J}F_{j}$ je množina. $XF_{j} \subseteq ^{J}\bigcup_{j \in J} F_{j}$.

$$
\Box
$$

$$
\text{Přednáška 12}
$$

* * *

## Lemma

NTJE: (Následující tvrzení jsou si ekvivalentní.)

1.  Axiom výběru.
2.  Princip výběru.
3.  Pro každou množinovou relaci $s$ existuje funkce $f \subseteq s$ taková, že $Dom(f) = Dom(s)$.
4.  Kartézský součin $X_{i \in x} a_{i}$ neprázdného souboru neprázdných množin je neprázdný.

### Důkaz:

- $1 \Rightarrow 2:$ $r$ rozklad $X$, podle 1 existuje selektor $f$ na $r$. Pak $Rng(f)$ je výběrová množina.
- $2 \Rightarrow 3:$ BÚNO: $s \neq \emptyset$. Vytvoříme rozklad $s$.
    - $n = \{\{i\}\times s \shortparallel\{i\}; i \in Dom(s)\} = \{\{(i,x),(i,x) \in s\}, i \in Dom(s)\}$
    - Výběrová množina $n$ je funkce, která je podmnožina $s$ a má stejný definiční obor.
- $3 \Rightarrow 4:$ Máme soubor množin $<a_{i}, i \in x>$. Vytvoříme relaci $s = \{(i,y), i \in x \land y \in a_{i}\}$.
    - Funkce $f \subseteq s: Dom(f) = Dom(s) = x$ je prvkem $X_{i \in x}a_{i}$.
- $4 \Rightarrow 1:$ $x$ množina. BÚNO: $x \neq \emptyset, \emptyset \in X$. $ID \upharpoonright x$ určuje soubor $<y;y \in x>$. Každý prvek $X_{y \in x}y$ je selektor na $x$.

$$
\Box
$$

## Lemma

Sjednocení spočetného souboru spočetných množin je spočetné. (Popřípadě je všude místo ~~spočetné~~ *nejvýše spočetné*.)

### Důkaz:

- Soubor $<B_{j};j \in J>$. BŮNO: $I = \omega$.
- Najděme prosté zobrazení $\bigcup_{j \in \omega} B_{j}$ do $\omega \times \omega$.
- Uvažujme soubor $<E_{j}; j \in \omega>$ kde $E_{j}$ je množina všech prostých zobrazení $B_{j}$ do $\omega$.
- Podle lemma 4) je $X_{j \in \omega}E_{j}$ neprázdný, tedy existuje soubor $<f_{j}; j \in \omega>$, kde $f_{j} \in F_{j}$.
- Definujme $h; \bigcup_{j \in \omega}B_{j} \to \omega\times\omega$ jako $h(x) = (j, f_{j}(x))$. Kde $j$ je nejmenší prvek $\omega$ pro který $x \in B_{j}$.

$$
\Box
$$

### *Poznámka:*

*Bez AC je bezesporné ZF a to, že "$\mathbb{R}$ jsou spočetným sjednocením spočetných množin".*

# Princip maximality (*PM*)

- AC $\leftrightarrow$ PM
- Je-li $A$ množina uspořádaná relací $\leq$ tak, že každý řetězec má horní mez.
- Pak pro každé $a \in A$ existuje maximální prvek $b \in A$ takový, že $a \leq b$.

## Definice:

$B \subseteq A$ je **řetězec** pokud $B$ je lineárně uspořádaná $\leq$.

### *Poznámka:*

*V aplikacích často pro $(A, \subseteq); A \subseteq \mathcal{P}(x)$ stačí ověřit, že $\bigcup B \in A$.*

### *Cvičení*

*Ukažte pomocí PM: Je-li $(A, \leq)$ uspořádaná množina, pak pro každý řetězec $B \subseteq A$ existuje maximální řetězec $C$ splňující $B \subseteq C \subseteq A$.*

## Princip maximality II (*PMS*)

Je-li $(A, \leq)$ uspořádaná množina, kde každý řetězec má suprémum, pak pro každé $a \in A$ existuje $b \in A$ maximální prvek splňující $a \leq b$.

### *Cvičení*

*Dokažte: PM$\leftrightarrow$PMS.*

## Princip trichotomie $\preceq$ (*PT*)

Pro každé dvě množiny $x,y$ platí $x \preceq y$ nebo $y \preceq x$.

## Lemma

PM $\rightarrow$ PT.

### Důkaz:

- Definuji množinu $D = \{f, f \text{ prosté zobrazení } \land Dom(f) \subseteq x \land Rng(f) \subseteq y \}$.
- $(D, \subseteq)$ splňuje předpoklady PM.
- Tedy má maximální prvek $g$.
- Kdyby $x \setminus Dom(f) \neq \emptyset$ a $y \setminus Rng(f) \neq \emptyset$, pak lze $g$ rozšířit o novou dvojici $(u,v)$, spor s maximalitou $g$.
- Pokud $Dom(f) = x$, pak $x \preceq y$.
- Pokud $Rng(f) = y$, pak $g^{-1}$ je prosté zobrazení $y$ do $x$, tedy $y \preceq y$.

$$
\Box
$$

### *Cvičení:*

*Sjednocení řetězce prostých zobrazení je prosté zobrazení.*

## Princip dobrého uspořádání (*VVO*)

- Každou množinu lze dobře uspořádat.
- Známo jako Zermelova věta.
- AC $\leftrightarrow$ VVO

## Lemma

VVO $\rightarrow$ AC

### Důkaz:

- $x \neq \emptyset, \emptyset \notin x$ podle VVO máme dobré uspořádání na $\bigcup x$.
- Každý $y \in x$ je neprázdná podmnožina $\bigcup x$, tedy má nejmenší prvek $\min_{\leq}y$.
- Definujeme $f: x \to \bigcup x$ jako $f(y) = \min_{\leq}(y)$. Tato $f$ je selektorem na množině $x$.

$$
\Box
$$

### *Cvičení*

*PM $\rightarrow$ VVO*

# Ordinální čísla

## “Typy dobře uspořádaných množin.”

- Kardinální čísla $\subseteq$ ordinální čísla. Mohutnosti dobře uspořádaných množin. S (AC) mohutnosti všech množin.
- Ordinální čísla jsou dobře uspořádaná $\in$, platí pro ně princip transfinitní indukce.

## Definice:

Třída $X$ je **tranzitivní** pokud $x \in X \rightarrow x \subseteq X$.

### *Příklad:*

*$\omega$ i každé $n \in \omega$ jsou tranzitivní i $V$.*

### *Cvičení*

*$X$ tranzitivní $\leftrightarrow \bigcup X \subseteq X$*

## Lemma

1.  Jsou-li $X,Y$ tranzitivní pak $X \cap Y, X \cup Y$ jsou tranzitivní.
2.  $X$ třída, pro kterou každé $x \in X$ je tranzitivní množina, pak $\bigcap X \text{ a } \bigcup X$ jsou tranzitivní.
3.  Je-li $X$ tranzitivní třída, pak $\in$ je tranzitivní na $X \leftrightarrow$ každý $x \in X$ je tranzitivní množina.

### Důkaz:

1.  Je pozorování.
2.  Plyne analogicky z 1.
3.  Jako *Cvičení*.

$$
\Box
$$

## Definice:

Množina $x$ je **ordinální číslo (ordinála)** pokud $x$ je tranzitivní množina a $\in$ je dobré uspořádání na $x$.

- Třídu všech ordinálních čísel značíme $On$.

### *Příklad:*

*$\omega$ a každé $n \in \omega$ je ordinální číslo.*

$$
\text{Přednáška 13}
$$

* * *

### Důsledek:

Pro každou nekonečnou množinu $x$ platí $\omega \preceq x$.

## Lemma

$On$ je tranzitivní třída.

### Důkaz:

- $y \in x \in On$. Máme $y \leq x, \in$ je dobré ostré uspořádání na $y$.
- $\in$ je dobré ostré na $x$.
- Z lemma 3) je $y$ tranzitivní množina.
- $y$ je ordinála.

$$
\Box
$$

## Lemma

$\in$ je tranzitivní na $On$.

## Lemma

$x,y \in On$, pak:

1.  $x \notin x$
2.  $x \cap y \in On$
3.  $x \in y \leftrightarrow x \subset y$

### Důkaz:

1.  Sporem z antireflexivity $\in$ na $x$.
2.  Přímo z definice.
3.  $\rightarrow$ z tranzitivity $y$ a 1)

- $\leftarrow y \setminus x \neq \emptyset \subseteq y, y \setminus x$ má nejmenší prvek $z$. Platí $z = x$ (*Cvičení*).

$$
\Box
$$

## Věta

$\in$ je dobré ostré uspořádání třídy $On$.

### Důkaz:

- Antireflexivita z lemma 1), tranzitivita pak dohromady dává ostré uspořádání.
- Trichotomie: $x \neq y \in On$ podle lemma 2) $x \cap y \in On$. Sporem kdyby $x \cap y \subset x \land x \subset y$ pak $x \cap y \in y \land x \cap y \in x$, tedy $x \cap y \in x \cap y$ a to je spor s lemma 1).
- Když tedy $x \cap y = x$ pak $x \subset y$ tedy $x \in y$. Z toho plyne, že se jedná o lineární uspořádání.
- Pro dobrost stačí existence minimálního prvku (*Cvičení*).

$$
\Box
$$

### Důsledek:

- $On$ je vlastní třída.
- Je-li $X$ vlastní třída, tranzitivní, dobře uspořádaná $\in$, pak $X = On$.

### Značení:

- $\alpha, \beta, \gamma, \dots$ jsou ordinální čísla.
- $\alpha < \beta$ místo $\alpha \in \beta$.
- $\alpha \leq \beta$ místo $\alpha \in beta \lor \alpha = \beta$.

## Lemma

1.  Množina $x \subseteq On$ je ordinální číslo $\leftrightarrow x$ je tranzitivní.
2.  $A \subseteq On, A \neq \emptyset$, pak $\bigcap A$ je nejmenší prvek $A$ vzhledem k $\leq$.
3.  $a \subseteq On$ množina, pak $\bigcup a \in On$ a $\bigcup a = \sup_{\leq}a$.

### Důkaz:

1.  $\rightarrow$ z definice, $\leftarrow$ z věty.
2.  Z věty a $\bigcap A = \inf A$.
3.  $\bigcup a$ je tranzitivní, $\bigcup a \subseteq On$ podle 1) je ordinální číslo.

$$
\Box
$$

### Důsledek:

$\omega$ je supremum množiny všech přirozených čísel v $On$. Konečné ordinály jsou právě přirozená čísla.

### *Cvičení*

*Důkaz: $\bigcup \omega \in On \land \bigcup \omega = \sup_{\leq}\omega$. Zbývá ověřit $\omega = \bigcup \omega$.*

## Lemma

$\alpha \in On$, pak $\alpha \cup \{\alpha\}$ je nejmenší ordinální číslo větší než $\alpha$.

### Důkaz:

- $\alpha \subseteq On$ protože $On$ je tranzitivní.
- $\alpha \cup \{\alpha\}$ je tranzitivní množina ordinálních čísel.
- Podle lemma 1) $\alpha \cup \{\alpha\}$ je ordinální číslo.
- Je-li $\beta \in On, \beta \in \alpha \{\alpha\}$, pak $\beta \in \alpha \lor \beta = \alpha$ tedy $\beta \subseteq \alpha$.

$$
\Box
$$

## Definice:

- $\alpha \cup \{\alpha\}$ je **následník** $\alpha$.
- $\alpha$ je **předchůdce** $\alpha \cup \{\alpha\}$.
- $\alpha$ je **izolované** pokud $\alpha = 0$ nebo pokud $\alpha$ má předchůdce,
- jinak je **limitní**.

## Věta (*O typu dobrého uspořádání.*)

Je-li $a$ množina dobře uspořádaná relací $r$, pak existuje právě jedno ordinální číslo $\alpha$ a právě jeden izomorfismus $(a,r)$ a $(\alpha, \leq)$.

### Bez důkazu.

## Definice:

$\alpha$ je **typ** dobrého uspořádání $r$.

### *Poznámka:*

*Na ${On}^{2} = On \times On$ lze definovat lexikografické uspořádání i maximo-lexikografické uspořádání.*

## Princip transfinitní indukce

Je-li $A \subseteq On$ třída splňující $(\forall \alpha \in On)(\alpha \subseteq A \rightarrow \alpha \in A)$, potom $A = On$.

### Důkaz:

Sporem: $On \setminus A \neq \emptyset$ díky dobrému uspořádání $\in$ existuje nejmenší prvek $\alpha \in On \setminus A$. Potom každé $\beta \in \alpha$ už je prvkem $A$, tedy $\alpha \subseteq A$, z předpokladu věty $\alpha \in A$ a to je spor.

$$
\Box
$$

## Věta (*Druhá verze principu transfinitní indukce.*)

Je-li $A \subseteq On$ třída splňující:

1.  $0 \in A$
2.  Pro každý $\alpha \in On$ platí $\alpha \in A \rightarrow \alpha \cup \{\alpha\} \in A$.
3.  Je-li $\alpha$ lineární pak $\alpha \subseteq A \rightarrow \alpha \in A$.

Pak $A = On$.

## Věta (*O konstrukci transfinitních rekurzí.*)

Je-li $G: V \to V$ třídové zobrazení, pak existuje právě jedno zobrazení $F: On \to V$ splňující $(\forall \alpha \in On) F(\alpha) = G(F \upharpoonright \alpha)$.

- Varianty:
    - $F(\alpha = G(F[\alpha])$
    - $F(\alpha) = G(\alpha , F \upharpoonright \alpha)$
    - $G_{1}(F(\beta))$ je-li $\alpha$ následník $\beta$, jinak $G_{2}(F[\alpha])$ je-li $\alpha$ limitní.

### Důkaz:

Je pomocí transfinitní indukce a axiomu nahrazení.

### *Příklad:*

- *$m + n: F(m) = n+m$ se dá nadefinovat jako $F(0) = n, F(S(m)) = S(F(m))$.*
- *AC $\to$ VVO: $A$ množina $g$ selektor na $\mathcal{P}(A)$ tak $f(0) = g(A)$ a $f(\beta) = g(A - f[\beta])$.*
