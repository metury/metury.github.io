---
layout: page
nav_exclude: true
title: Kombinatorika a grafy 2
author: Tomáš Turek
---

*Přednáška 1*

* * *

# Párování v grafech

## Definice:

**Párování** v grafu $G=(V,E)$ je množina hran $M \subseteq E$ taková, že každý vrchol z $G$ je obsažen v nejvýš jedné hraně v $M$.

## Definice:

**Vrcholové pokrytí** v grafu $G=(V,E)$ je množina vrcholů $T \subseteq V$ t.ž. každá hrana obsahuje aspoň jeden vrchol z $T$.

- $\mu (G) :=$ velikost největšího párování v grafu $G$
- $\tau (G) :=$ velikost nejmenšího vrcholového pokrytí v grafu $G$

<!--
### *Cvičení*

- *Nechť $G=(V,E)$ je bipartitni graf s partitami $A,B, |A| \leq |B|$, souvislý. Jaké nerovnosti (nebo rovnosti) platí mezi $\mu (G), \tau (G), |A|$:*
	- *$\mu (G) \leq |A|$*
	- *$\mu (G) = \tau (G)$ (plyne z König-Egarvaryho vety)*
-->

### Pozorování

- $\mu (G) \leq \tau (G)$ v libovolném grafu $G$

<!--
### *Cvičení*

- *Dokažte*
	1. *$\exists G: \mu (G) \neq \tau (G)$*
		- *$K4$ s tím že uprostřed je vrchol (má $\mu (G) = 2$ a $\tau (G) = 3$)*
	2. *$\forall G: \tau (G) \leq 2 \mu (G)$*
		- *v nejhorším případě vezmu oba vrcholy všech hran z $M$*
-->

## Definice:

- **volný vrchol:** vrchol nesousedící s žádnou hranou z $M$
- **volná střídavá cesta:** cesta spojující dva volné vrcholy na níž se střídají párovácí($\in M$) a nepárovácí($\notin M$) hrany

## Lemma

Nechť $M$ je párování v $G$. Potom $M$ je největší párování v $G \Leftrightarrow$ v $G$ neexistuje volná střídající se cesta pro $M$.

### Důkaz:

- $\Rightarrow$ Pokud v $G$ existuje VSC pak lze tyto hrany přehodit. Potom je to spor s tím, že je největší.
- $\Leftarrow$ Nechť $M$ není největší potom existuje $N$ větší párování než $M$. Uvažme graf s hranami $M \cup N$. Každá komponenta grafu je buď:
	1. izolovaná hrana v $M \cap N$
	2. kružnice sudé délky, kde se střídají $M$ a $N$
	3. cesta na níž se střídají $M$ a $N$
- Protože $|N| > |M|$ v $M \cup N$ musí být komponenta $K$, která má víc hran z $N$ než z $M$. $K$ je cesta liché délky, která začíná a končí hranou z $N$, tedy $K$ je VSC pro $M$.
$$
\Box
$$

## Definice:

**Kytka** v grafu $G$ a párování $M$ je podgraf tvořený **stonkem** $S$ a **květem** $K$, kde $S$ je cesta sudé délky mezi dvěma vrcholy $x$ a $y$, kde $x$ je volný a $y \in K$, navíc na $S$ se střídají párovací a nepárovací hrany. $K$ je lichá kružnice, která neobsahuje žádný vrchol z $S$ a střídají se na ni párovací a nepárovací hrany (u $y$ má dvě nepárovací hrany).

- Může nastat ze $x=y$ a $S=\{x\}$.

### Pozorováni

- Hrany z květu jsou nepárovací. Jinak by se nejednalo o párování.

## Definice:

**Kontrakce** květu $K$ nahradí $K$ jedním vrcholem $y$, smaže všechny hrany indukované $K$ a každou hranu $\{u,v\}$, kde $u \in K$ a $v \notin K$ nahradí hranou $\{y,v\}$. Označme $G.K$ graf vzniklý z $G$ kontrakcí květu $K$, $M.K$ pak párování vznikle z $M$ odstraněním všech hran $K$.

### Lemma:

Nechť $M$ je párování v grafu $G$ obsahující kytku se stonkem $S$ a květem $K$. Potom $M$ je největší párování v $G \Leftrightarrow M.K$ je největší párování v $G.K$.

- Nebo-li: *$M$ má VSC v $G \Leftrightarrow M.K$ má VSC v $G.K$.*
- Navíc z VSC v $M.K$ v $G.K$ lze v polynomiálním čase najít VSC v $M$ a $G$.

### Důkaz:

- $\Rightarrow$ (v alternativním znění) Nechť $P$ je VSC v $M.K$. Potom:
	1. $y \in P \Rightarrow P$ je i VSC v M
	2. $y$ je vnitřní vrchol v $P$, potom lze nahradit obloukem z $K$ (jsou dva oblouky, protože je tam celkově lichý počet hran, tak jedna cesta musí být lichá a druhá sudá, tudíž to lze spojit)
	3. $y$ je koncový vrchol v $P$, potom $y$ musí být volný, tudíž $x=y$, poté prakticky stejný postup jako u 2.
- $\Leftarrow$ $G$ má VSC $\Rightarrow G.K$ má VSC, pokud $S$ má délku $0$, to jest $y$ je volný vrchol. Následně to pak už není cesta ale sled. Začnu tedy z konce cesty a poprvé co se dostanu do $y$ tak skončím.
- $M \triangle S:$ Párování v $G$ vznikne tak, že se na $S$ prohodí párovací a nepárovací hrany.
- Pozorování: V $M \triangle S$ je květ $K$ kytka se stonkem délky $0$.
- Pozorování: $|M \triangle S| = |M|$.
- $G$ má VSC $\Rightarrow G.K$ má VSC, navíc $S$ má délku $0$.
- $(G,M)$ má VSC $\Leftrightarrow (G, M \triangle S)$ má VSC $\Rightarrow (G.K, (M \triangle S).K)$ má VSC $\Leftrightarrow (G.K, M.K)$ má VSC.
$$
\Box
$$

*Přednáška 2*

* * *

## Procedura `NajdiVSCneboKytku`

- Vstup: graf $G= (V,E)$ párování $M$
- Výstup: buď VSC $P$ pro $(G,M)$, nebo kytka $S \cup K$ v $(G,M)$, nebo "M je největší párování v G".
- Používáme frontu vrcholů `F`, pro každý vrchol $x \in V$ máme hladinu $h(x) \in \mathbb{N}_{0}$ a rodiče $r(x) \in V$.
- Na začátku `F` $= \emptyset, h(x)$ a $r(x)$ jsou nedefinované.
- Pro každý volný vrchol $x$ proveď:
	- Zařaď $x$ do `F`, $h(x) = 0$.
- Dokud `F` $\neq \emptyset$: odebereme $x$ z `F`
	1. Pokud $h(x)$ je lichá. Nechť $y$ je vrchol spojený s $x$ hranou $M$.
		1. Pokud $h(y)$ není definovaná: $h(y) = h(x) +1$, $r(y)=x$, zařaď $y$ do `F`.
		2. Pokud $h(y)$ je sudá: *to nemůže nastat*
		3. Pokud $h(y)$ je lichá: $Px=$ cesta $x, r(x), r(r(x)), \dots$, $Py$ je cesta $y, r(y), r(r(y)), \dots$ obě cesty vedou až do volného vrcholu.
			1. Pokud $Px \cap Py = \emptyset$ tak potom $Px \cup Py \cup \{x,y\}$ je **VSC**, konec.
			2. Pokud $Px \cap Py \neq \emptyset$ našli jsme **kytku** $Px \cap Py \cap \{x,y\}$, konec.
	2. Pokud $h(x)$ je sudá. Pro každý $y$ t.z. $\{xy\} \notin M$:
		1. Pokud $h(y)$ není definovaná: $h(y) = h(x) +1$, $r(y) = x$, vlož $y$ do `F`.
		2. Pokud $h(y)$ je lichá, tak nedělej nic.
		3. Pokud $h(y)$ je sudá: najdi VSC nebo kytku jako v 1.3,konec.
- Pokud dojdeme do stavu, že $F = \emptyset$, napiš "M je největší", konec.

## Lemma

Pokud `NajdiVSCneboKytku` napíše "M je největší", tak $M$ je největší.

### Důkaz:

- Pokud $M$ není největší, tak obsahuje VSC $v_{0} v_{1} \dots v_{k} \in V$, dokážeme indukci podle $i$, že každý z vrcholů $v_{0} \dots v_{k}$ dostal přidělenou hladinu $h(v_{i})$ splňující $h(v_{i}) \equiv i \mod 2$.
- Pro $i=0$ $v_{0}$ je volný, tedy $h(v_{0})= 0$. Hotovo.
- Pro $i > 0$, $i$ liché, indukční předpoklad je $h(v_{i-1})$ je sudá: tak z algoritmu buď už $v_{i}$ měla lichou $h(v_{i})$ nebo ji dostala. (Kdyby sudá, tak vyhodí VSC nebo Kytku.)
- Pro $i>0$ $i$ je sudé, indukční předpoklad, že $h(v_{i-1})$ je lichá: tak obdobně bude $h(v_{i})$ sudé. Jistě $k$ je liché, tedy $h(v_{k})$ je lichá, ale $v_{k}$ je volný vrchol, tedy $h(v_{k}) =0$ a to je spor.
$$
\Box
$$

## Procedura `ZvětšiPárování`

- vstup: $G,M$
- výstup: párování $M'$ v $G$, $|M'| > |M|$ nebo "M je největší"
1. Procedura `NajdiVSCneboKytku(G,M)`
2. $M$ je největší, tak konec
3. VSC, invertuji a zvětši M, konec
4. Kytka, `ZvětšiPárování(G.K,M.K)`
	1. $M.K$ je největší, potom i $M$ je největší
	2. $M'$ je větší párování v $G.K$ než $M.K$: $M^\ast := M' \cup (\frac{|k|-1}{2} \text{ hran květu })$ tak aby to šlo.

# Algoritmus pro hledání největšího párování

- vstup: $G$
- výstup: největší párování v $G$
1. $M:=$ libovolné párování (buď prázdné, nebo hladově nějaké)
2. Opakuj `ZvětšiPárování(G,M)` dokud to jde.
3. Vypiš nalezéné párování.

## Definice:

**Perfektní párování** v grafu $G$ je párování v němž každý vrchol sousedí s právě jednou párovací hranou.

### Pozorování

- Perfektní párování je největší párování.

### Pozorování

- Ne každý graf má perfektní párování (trojúhelník).

## Definice:

- **Lichá komponenta** grafu $G$ je komponenta s lichým počtem vrcholů.
- **$\text{odd}(G)$** := počet lichých komponent v $G$
- Pro graf $G= (V,E)$ a množinu $S \subseteq V : G-S = (V \setminus S, E \cap \binom{V \setminus S}{2})$.

## Věta **Tutte**

Pro každý $G=(V,E)$ platí $G$ má perfektní párování $\Leftrightarrow \forall S \subseteq V: \text{odd}(G-S) \leq |S|$.

- Druhá část se nazývá *Tutteova podmínka*.

### Důkaz:

- $\Rightarrow$ Nechť $G$ má perfektní párování $M$. Pro spor, nechť $\exists S \subseteq V: \text{odd}(G-S) >|S|$. Potom ale z každé liché komponenty $G-S$ vede aspoň jedna hrana z $M$ do $S$, tudíž $\text{odd}(G-S) \leq |S|$ a to je spor.
- $\Leftarrow$ Nechť $G$ splňuje Tutteovu podmínku.
- Pozorování: $\text{odd}(G) = 0$, jinak spor $S = \emptyset$.
- Chci dokázat, že $G$ má perfektní párování a to pomocí indukce podle $|\binom{V}{2} \setminus E|$.
	- Pro $|\binom{V}{2} \setminus E| = 0$: $G$ je úplný graf, navíc $\text{odd}(G) = 0$. Tudíž zjevně má perfektní párování.
	- Pro $|\binom{V}{2} \setminus E| > 0: S:= \{x \in V: \deg (x) = |V|-1\}$.
	- Rozliším dva případy:
	1. Každá komponenta $G-S$ je úplný graf: $G$ snadno najdu perfektní párování, díky tomu, že $\text{odd}(G-S) \leq |S|$.
	2. Existuje komponenta $Q$ grafu $G-S$, která není úplná. V $Q$ lze najít dva nesousední vrcholy $x,y$, které mají společného souseda z $Q$. Protože $z \notin S, \exists w: w$ nesousedí se $z$. Označme $G_{1} = (V, E \cup \{xy\}), G_{2} = (V, E \cup \{zw\})$.
	- Pozorování $G_{1}, G_{2}$ splňují Tutteovu podmínku.
	- Pak z indukčního předpokladu $G_{1}$ má perfektní párování $M_{1}$ a $G_{2}$ má $M_{2}$. Pokud $M_{1}$ neobsahuje hranu $\{xy\}$, tak $M_{1}$ je perfektní párování v $G$. Tak je to hotové.
	- Pokud ale $\{xy\} \in M_{1}$ tak podobně předpokládám, že $\{zw\} \in M_{2}$. Uvažme graf $H = (V, M_{1} \cup M_{2})$: každá komponenta $H$ je buď hrana patřící $M_{1} \cap M_{2}$, nebo sudá kružnice na níž se střídají hrany z $M_{1}$ a $M_{2}$.
	- V každé komponentě $H$ neobsahující hranu $\{xy\}$ můžu vrcholy spárovat pomocí hran $M_{1}$. Nechť $C$ je komponenta $H$ obsahující $\{xy\}$. Pokud $C$ neobsahuje $\{zw\}$, vrcholy spáruji pomocí $M_{2}$, hotovo.
	- Ve zbylém případu v $C$ použijeme jednu z hran $\{xy\}, \{zw\}$ a zbytek lze spárovat pomocí $M_{1} \setminus \{xy\} \text{ a } M_{2} \setminus \{zw\}$.
	- Tedy $G$ má perfektní párování.
$$
\Box
$$

*Přednáška 3*

* * *

## Definice:

- Graf je **d-regulární**, pokud všechny jeho vrcholy mají stupeň $d$.
- Graf je (vrcholově) **k-souvislý**, pokud má aspoň $k+1$ vrcholů a nemá vrcholový řez velikosti $< k$.

## Lemma

Nechť $G = (V,E)$ je graf, jehož každý vrchol má lichý stupeň, nechť $A \subseteq V$ je množina liché velikosti. Potom $G$ obsahuje lichý počet hran z $A$ do $V \setminus A$.

### Důkaz:

- $S = 2k + \text{ ven}$ je součet stupňů v $A$. Ten musí být lichý.
- $2k$ je pro každou hranu, která má oba vrcholy v $A$.
- Tudíž `ven` musí být liché.
$$
\Box
$$

## Věta (Petersen)

Každý 3-regulární a 2-souvislý graf má perfektní párování.

### Důkaz:

- Nechť $G = (V,E)$ je 3-regulární a 2-souvislý graf. Tvrdíme: $\forall S \subseteq V: \text{ odd}(G-S) \leq |S|$.
- Pro $S = \emptyset$ Tutteova podmínka platí: $|V|$ je sudá (z principu sudosti grafů) a taky souvislý $\Rightarrow \text{ odd}(G)=0$.
- $S \neq \emptyset, l := \text{ odd}(G-S)$ nechť $Q_{1},\dots,Q_{l}$ jsou liché komponenty $G-S$. Nechť $p$ je počet hran mezi $S$ a $Q_{1} \cap \dots \cap Q_{l}$.
- Pozorování: $p \leq 3|S|$ - plyne z toho, že je 3-regulární.
- Pozorování: z každé $Q_{i}$ vedou aspoň 2 hrany do $S$ to plyne z toho, že je $G$ 2-souvislý, jinak by existovala artikulace.
- Pozorování: z každé $Q_{i}$ vedou aspoň 3 hrany do $S$. To plyne z lemma.
- $\Rightarrow p \geq 3l \Rightarrow l \leq |S|$. A ještš použít Tutteovu větu.
$$
\Box
$$

<!-- Cvičení -->

# Kontrakce a minory

## Definice:

Nechť $G = (V,E)$ je graf, $e = \{x,y\} \in E$ pak **kontrakce** hrany $e$ je operace, která vrcholy $x,y$ nahradí jedním vrcholem $v_{e}$ a pro každý vrchol $z \in V \setminus \{x,y\}$ sousedící s $x$ nebo $y$ se hrany $\{xz\},\{yz\}$ nahradí $\{v_{e}z\}$. Výsledek se značí $G.e$.

## Lemma (*"o kontrahovatelné hraně"*)

V každém 3-souvislém grafu $G = (V,E)$, který není izomorfní $K_{4}$ existuje hrana $e \in E$ taková, že $G.e$ je opět 3-souvislý graf.

### Důkaz:

- Pro spor nechť $G = (V,E)$ je protipříklad.

### Pomocné tvrzení

- Pro každou hranu $e = \{xy\} \in E$ existuje vrchol $z \in V \setminus \{x,y\}$ takový, že $G - \{x,y,z\}$ je nesouvislý, navíc každý z vrcholů $\{x,y,z\}$ má aspoň jednoho souseda v každé komponentě $G-\{x,y,z\}$.

#### Důkaz tvrzení:

- Víme, že $G.e$ není 3-souvislý, navíc $|V(G.e)| \geq 4$ jinak je to $K_{4}$, tedy existuje v $G.e$ vrcholový řez $R$ velikosti nejvýše 2.
- Jistě $v_{e} \in R$ jinak by $R$ byl řez v $G$> $R \neq \{v_{e}\}$ jinak by $\{x,y\}$ byl řez v $G$.
- Tedy $R = \{v_{e},z\}$ a $\{x,y,z\}$ je řez v $G$. Kdyby např. $x$ neměl žádného souseda v nějaké komponentě $C$ grafu $G - \{x,y,z\}$, tak $G - \{y,z\}$ je nesouvislý, spor s tím, že $G$ má být 3-souvislý.
$$
\Box
$$

- Volme $e = \{x,y\} \in E$ a vrchol $z \in V$, komponentu $C$ grafu $G - \{x,y,z\}$ tak, aby $C$ mělo co nejméně vrcholů. Nechť $w$ je vrchol $C$ sousedící se $z$.
- Pro hranu $f = \{z,w\}$ použiji pomocné tvrzení: $\exists v \in V \setminus \{z,w\}: G -\{z,w,v\}$ je nesouvislý a každá jeho komponenta obsahuje vrchol sousedící s $w$.
- Nechť $D$ je komponenta $G - \{z,v,w\}$ neobsahující $x$ ani $y$. Tedy $D \subseteq C \setminus \{w\}: D$ obsahuje souseda $w$, ten musí být uvnitř $C$, žádná cesta uvnitř $D$ neobsahuje $x,y,z,w$ tedy $D$ je uvnitř jediné komponenty $G -\{x,y,z\}$, tedy $D$ je uvnitř $C$, tedy i uvnitř $C \setminus \{w\}$.
- To je spor s minimalitou $C$.
$$
\Box
$$

## Věta (Tutteova charakterizace 3-souvislých grafů)

Graf $G = (V,E)$ je 3-souvislý $\Leftrightarrow \exists$ posloupnost grafů $G_{0},G_{1},\dots ,G_{k}$, kde:

1. $G_{0} \cong K_{4}, G_{k} \cong G$.
2. $\forall i = 1, \dots , k: G_{i}$ obsahuje hranu $e = \{x,y\}$ spojující dva vrcholy $x,y$ stupně $\geq 3$, $\deg(x) = \deg(y) = 3$ a $G_{i-1} \cong G_{i}.e$.

*Přednáška 4*

* * *

### Důkaz:
- $\Rightarrow$ Opakovaná aplikace lemma o kontrahovatelné hraně.
- $\Leftarrow$ Nechť $G_{0}, \dots ,G_{k}$ splňuje podmínky na pravé straně. Dokážeme, že všechny grafy $G_{0}, \dots ,G_{k}$ jsou 3-souvislé. Indukcí pdole $i$ dokážeme, že $G_{i}$ je 3-souvislý.
	- $i = 0 : K_{4}$ je 3-souvislý.
	- $i > 0$ předpokládáme, že $G_{i-1}$ je 3-souvislý, pro spor nechť $G_{i}$ není 3-souvislý, $\exists u,v \in V(G_{i}): G_{i} - \{u,v\}$ je nesouvislý, navíc $\exists e = \{x,y\} \in E(G_{i}) = G_{i}.e = G_{i-1}$.
	- Případy:
	1. $\{u,v\} \cap \{x,y\} = \emptyset$ $G_{i-1}$ pak není 3-souvislý. Spor.
	2. $\{u,v\} = \{x,y\}$ pak $G_{i-1}$ je 1-souvislý. Spor.
	3. $|\{u,v\} \cap \{x,y\}| = 1$ BŮNO: $x = u$: nelze, protože $\deg (y) \geq 3$, tedy komponenta $G_{i} - \{u,v\}$ obsahující $y$ má aspoň 2 vrcholy, tedy $G_{i}.e = G_{i-1}$ má řez $\{v, v_{e}\}$. Spor.
$$
\Box
$$

<!-- Cvičení -->

## Definice:

Graf $H$ je **minor** rafu $G$ pokud $H$ lze vyrobit z $G$ posloupností mazání hrany, kontrakce hrany, mazání vrcholu. Značení: $H \leq_{m} G$.

## Definice:

Graf $F$ je **dělení** grafu $H$, pokud $F$ vznikne z $H$ tak, že se každá hrana $\{x,y\} \in E(H)$ nahradí cestou délky $\geq 1$.

## Definice:

Graf $H$ je **topologický minor** grafu $G$, pokud $G$ obsahuje nějaké dělení grafu $H$ jako podgraf. Značení $H \leq_{t} G$.

## Definice:

Graf $H$ je **indukovaný podgraf** grafu $G$, pokud je $H$ podgraf grafu $G$ a zároveň má všechny hrany původního grafu indukované vrcholům grafu $H$. Značení $H \leq_{i} G$.

- $H$ je **podgraf** grafu $G$. Značení $H \subseteq G$.

### Pozorování

- Platí implikace $H \leq_{i} G \Rightarrow H \subseteq G \Rightarrow H \leq_{t} G \Rightarrow H \leq_{m} G$. Ale neplatí žádná opačná implikace.

## Lemma

$H = (V_{H}, E_{H})$ je graf, $V_{H} = \{x_{1}, x_{2}, \dots, x_{k}\}, G=(V_{G},E_{G})$ je graf. Potom $H \leq_{m} G$ iff $G$ obsahuje $k$ disjunktních souvislých neprázdných podgrafů $B_{1}, B_{2}, \dots , B_{k}$ takových, že pokud $\{x_{i}, x_{j}\} \in E_{H}$, tak $G$ obsahuje aspoň jednu hranu spojující vrchol $B_{I}$ s vrcholem $B_{j}$.

### Důkaz:

- *Danou vlastnost si označíme jako vlastnost p.*
- $\Leftarrow$ Zkontrahuji všechny hrany v $B_{i}$. Nadbytečné hrany a vrcholy odstraním.
- $\Rightarrow$ Nechť $H \leq_{M} G$, tj. existuje posloupnost grafů $G_{0}, G_{1}, \dots ,G_{p}$, kde $H \cong G_{0}, G_{p} \cong G$ a pro $\forall i = 1, \dots, p: G_{i-1}$ vznikne z $G_{i}$ smazáním hrany nebo vrcholu anebo kontrakcí hrany.
- Dokážeme indukcí podle $i = 0, \dots, p$, že $G_{i}$ má vlastnost p.
	- $i = 0: \forall j = 1, \dots ,k: \{x_{j}\} = B_{j}$
	- $i > 0$ předpokládejme $G_{i-1}$ splňuje vlastnost p.
	- Pak přidáním vrcholu nebo hrany - nic neděláme, zůstávají stejné.
	- Dekontrakce hrany. Pokud není v $B_{j}$ tak hotovo (zůstane stejné). Pokud ale je v $B_{j}$ tak oba nové vrcholy přidáme do $B_{j}$ a ostatní stejné.
$$
\Box
$$

<!-- Cvičení -->

*Přednáška 5*

* * *

### Značení:

Pro uspořádání $\leq$ a množinu grafů $F = \{F_{1}, F_{2}, \dots\}$ označím $\mathcal{F}\text{orb}_{\leq}(F) := \{G \text{ graf}; \forall H \in F: H \nleq G\}$.

- Plyne ze slova Forbidden, nebo-li zakázané.

<!-- Cvičení -->

## Definice:

Třída grafů $\mathcal{G}$ je **uzavřená** vůči uspořádání $\leq$ pokud $\forall G \in \mathcal{G}$ $\forall H \leq G: H \in \mathcal{G}$.

### Pozorování

Třída $\mathcal{G}$ se dá přepsat jako $\mathcal{F}\text{orb}_{\leq}(F)$ pro nějakou množinu $F$ iff $\mathcal{G}$ je uzavřená vůči $\leq$.

### Fakt

- Rovinné grafy jsou uzavřené vůči $\subseteq, \leq_{i}, \leq_{t}, \leq_{m}$.

### Připomenutí:

- $G = (V,E)$ rovinný, souvislý, má nakreslení mající $f$ stěn, potom $|V|-|E| + f = 2$.
- Pokud $|V| \geq 3$ tak $|E| \leq 3|V| - 6$.
- Pokud $|V| \geq 4$ a $G$ neobsahuje trojůhelník jako podgraf, tak $|E| \leq 2|V| - 4$.

## Věta (Kuratowski, Wagner)

Pro graf $G = (V,E)$ je ekvivalentní:

1. $G$ je rovinný,
2. $G \in \mathcal{F}\text{orb}_{\leq_{t}}(K_{5},K_{3,3})$,
3. $G \in \mathcal{F}\text{orb}_{\leq_{m}}(K_{5},K_{3,3})$.

### Důkaz:

- $1 \Rightarrow 2: G$ je rovinný $\Rightarrow$ každý topologický minor je rovinný $\Rightarrow K_{5} \not\leq_{t} G \land K_{3,3} \not\leq_{t} G \Rightarrow G \in \mathcal{F}\text{orb}_{\leq_{t}}(K_{5},K_{3,3})$.
- $1 \Rightarrow 3:$ Obdobně jako předchozí.
- $3 \Rightarrow 2: H \leq_{t} J \Rightarrow H \leq_{m} J$ a taky $H \nleq_{m} J \Rightarrow H \nleq_{t} J$.
	- $J \in \mathcal{F}\text{orb}_{\leq_{m}}(H) \Rightarrow J \in \mathcal{F}\text{orb}_{\leq_{t}}(H)$ nebo-li $\mathcal{F}\text{orb}_{\leq_{m}}(H) \subseteq \mathcal{F}\text{orb}_{\leq_{t}}(H)$.
- $2 \Rightarrow 3:$  Připomenutí: Pro graf $H$ s maximálním stupněm $\leq 3$. $H \leq_{t} G \Leftrightarrow H \leq_{m} G$. A taky $K_{5} \leq_{m} H \Rightarrow ((K_{5} \leq_{t} H) \lor (K_{3,3} \leq_{t} H))$.
	- Pak dokážeme obměnu ($\neg 3 \Rightarrow \neg 2$) $K_{5} \leq_{m} G \lor K_{3,3} \leq_{m} G \Rightarrow K_{5} \leq_{t} G \lor K_{3,3} \leq_{m} G \Rightarrow G \notin \mathcal{F}\text{orb}(K_{5},K_{3,3}$.
- $3 \Rightarrow 1$ Indukcí podle $|V|$.
	- $|V| \leq 4:$ Jistě $G$ ke rovinný.
	- Předpoklad, že $|V| \geq 5$ a $G \in \mathcal{F}\text{orb}_{\leq_{m}}(K_{5},K_{3,3})$. Nechť $k$ je vrcholová souvislost.
	- Rozlišíme případy:
	1. $k=0$: každá komponenta je dle indukčního předpokladu rovinná $\Rightarrow G$ je rovinný.
	2. $k=1$: Lze rozdělit graf $G$ na dva grafy $G_{1}, G_{2}$ podle dané artikulace $x$. S tím, že oba grafy mají i daný vrchol $x$. Podle IP jsou oba grafy rovinné, navíc jdou nakreslit tak, že $x$ bude vždy na vnější stěně (pomocí projekce na sféru), potom je můžeme "slepit" dohromady a máme stále rovinný graf.
	3. $k = 2$ Obdobně rozdělím graf na $G_{1}, G_{2}$ a z nich vytvořím $G_{1}^{+}:= G_{1} \cup \{xy\}$ a $G_{2}^{+}:= G_{2} \cup \{xy\}$. Následně tvrdím: $G_{1}^{+}, G_{2}^{+} \in \mathcal{F}\text{orb}_{\leq_{m}}(K_{5},K_{3,3}).$ $G_{1}$ i $G_{2}$ obsahuje cestu $P_{1}$ a $P_{2}$ z $x$ do $y$ (jinak by $x$ nebo $y$ obsahovalo řez).
	- $G_{1}^{+} \leq_{m} G$ (dokonce $G_{1}^{+} \leq_{m} G1 \cup P_{2} \subseteq G$).
	- $G_{1}^{+} \in \mathcal{F}\text{orb}_{\leq_{m}}(K_{5},K_{3,3})$ kdyby např. $K_{5} \leq_{m} G_{1}^{+} \leq_{m} G$, tak $K_{5} \leq_{m} G$ a to je spor. Dle IP $G_{1}^{+}$ i $G_{2}^{+}$ jsou rovinné, oba se dají nakreslit tak, že hrana $\{xy\}$ je na vnější stěně. Následně pak slepím $G_{1}^{+}$ a $G_{2}^{+}$ a popřípadě smažu hranu $\{xy\}$ a získám rovinný graf.
	4. $k \geq 3:$ $G$ je 3-souvislý: Fakt: v rovinném nakreslení 2-souvislého grafu je každá stěna ohraničená kružnicí. A taky lemma o kontrahovatenlné hraně: $\exists e =\{xy\} \in E$ taková, že $G.e$ je 3-souvislý, tedy $G.e - v_{e}$ je 2-souvislý.
	- Pozorování: $G.e - v_{e} = G - \{x,y\}$. Dle IP $G.e$ je rovinný. Zvolme rovinné nakreslení $G.e$. V $G.e - v_{e}$ je stěna, z níž byl smazán $v_{e}$ ohraničená kružnicí $C$. Do stěny ohraničné $C$ nakreslíme vrchol $x$. Každý soused $v_{e}$ v grafu $G.e$ leží na $C$, tedy každý soused $x$ v grafu $G$ různý od $y$ leží na $C$. Označme $N_{C}(x):$ sousedé $x$ na $C$ a podobně $N_{C}(y)$.
	- Teď rozdělme případy.
		1. $|N_{C}(x) \cap N_{C}(y)| \geq 3:$ to nelze, $C \cup \{x,y\}$ indukují dělení $K_{5}$.
		2. $\exists a_{1},a_{2} \in N_{C}(x), b_{1}, b_{2} \in N_{C}(y): |\{a_{1},a_{2},b_{1},b_{2}\}| = 4$ leží na $C$ v pořadí $a_{1}, b_{1}, a_{2}, b_{2}$: to taky nelze, pak je tam $K_{3,3}$.
		3. Nenastane ani jedna z předchozích možností. Vrcholy $N_{c}(x)$ rozdělí $C$ na cesty $P_{1},P_{2}, \dots, P_{k}, \exists j: N_{C}(y) \subseteq P_{j}$.
$$
\Box
$$

# Kreslení grafů na plochy

## Definice:

- Nechť $X \subseteq \mathbb{R}^{n}, Y \subseteq \mathbb{R}^{m}$. Zobrazení $f: X \to Y$ je **homeomorfismus** pokud $f$ je pojitá bijekce $X$ na $Y$ a $f^{-1}$ je spojitá bijekce $Y$ na $X$.
- $X,Y$ jsou **homeomorfní**, pokud existuje homeomorfismus $X$ na $Y$. Značím $X \cong Y$.

<!-- Příklady -->

### Fakt

Homeomorfismus zachovává kompaktnost, uzavřenost a otevřenost. Ne však omezenst.

## Definice:

**Plocha** je souvislá kompaktní 2-rozměrná varieta bez hranic.

- Příklady: sféra, torus.
- Nepříklady: $\mathbb{R}^{2}$, otevřený kruh, dvě separátní sféry.

## Definice operací s plochami:

1. Přidání ucha:
	- "Odebrání dvou kruhů a přidáním válce mezi ně."
	- Na diagramu se kreslí, že mají orientaci opačným směrem.
2. Přidání křižítka:
	- "Odebrání jednoho kruhu a přidání křižítka, tj. že se jeden bod propojí s přesně opačným bodem na druhé straně, ale nikdy se nepřekříží."
<!-- obrázky -->

*Přednáška 6*

* * *

## Definice:

- **Orientovatelná plocha** rodu $g$, značená $\Sigma_{g} (g \geq 0)$, je plocha vzniklá ze sféry přidáním $g$ uší.
- **Neorientovatelná plocha** rodu $g$, značená $\Pi_{g} (g \geq 1)$, je plocha vzniklá ze sféry přídáním $g$ křižítek.

### Fakt

Plocha vzniklá ze sféry přidáním $k \geq 1$ křižítek a $l \geq 0$ uší je $\Pi_{k+2l}$.

### Fakt

Každá plocha je homeomorfní právě jedné ploše z posloupnosti $\Sigma_{0}, \Pi_{1}, \Sigma_{1}, \Pi_{2}, \dots$.

## Defince:

- $\Sigma_{0}$ je **sféra**.
- $\Sigma_{1}$ je **torus**.
- $\Sigma_{2}$ je **dvojitý torus**.
- $\Pi_{1}$ je **projektivní rovina**.
- $\Pi_{2}$ je **kleinova láhev**.

## Definice:

Nakreslení grafu $G = (V,E)$ na plochu $\Gamma$ je zobrazení $\mathcal{G}$, které:

1. vrcholům $x \in V$ přiřadí bod $\bar{x} \in \Gamma$,
2. hraně $e = \{xy\} \in E$ přiřadí křivku $\bar{e} \subseteq \Gamma$ spojující $\bar{x}$ a $\bar{y}$. ("Křivka" je homeomorfní kopie intervalu $[0,1]$.)

Navíc platí:

1. $x,y \in V, x \neq y \Rightarrow \bar{x} \neq \bar{y}$,
2. pro $x \in V, e \in E: \bar{x} \in \bar{e} \Rightarrow x \in e$,
3. pro $e, f \in E, e \neq f: \bar{e} \cap \bar{f} \neq \emptyset \Rightarrow \bar{e} \cap \bar{f} = \{\bar{x}\}$, kde $e \cap f = \{x\}$.

## Definice:

**Stěna** je souvislá komponenta $\Gamma \setminus (\bigcup_{x \in V} \bar{x} \cup \bigcup_{e \in E} \bar{e})$.

## Definice:

Nakreslení je **buňkové** (*2-cell*), pokud každá jeho stěna je homeomorfní otevřenému kruhu.

### Fakt

Nakreslení $\mathcal{G}$ na $\Sigma_{0}$ je buňkové iff nakreslený graf je souvislý.

<!-- Cvičení -->

## Definice:

**Eulerova chrakteristika** plochy $\Gamma$ značená $\chi (\Gamma)$, je:
$$
\chi(\Gamma) =
\left\{
\begin{array}{ll}
2 - 2g & \text{pro } \Gamma \cong \Sigma_{g} \\
2 - g & \text{pro } \Gamma \cong \Pi_{g} \\
\end{array}
\right.
$$

## Věta (*Zobecněná Eulerova formule*)

Nechť $\mathcal{G}$ je buňkové nakreslení grafu $G=(V,E)$ na ploše $\Gamma$ a označme $h(\mathcal{G}) = |V|, e(\mathcal{G}) = |E|, f(\mathcal{G})=\text{\# stěn }\mathcal{G}$. Potom $h(\mathcal{G}) - e(\mathcal{G}) + f(\mathcal{G}) = \chi(\Gamma)$.

### Důkaz:

- Předpokládáme, že $\Gamma \cong \Sigma_{g}$ (případně $\Gamma \cong \Pi_{g}$ je podobný). Indukcí podle $g$.
- $g=0:$ Eulerova formule pro rovinné grafy. Hotovo.
- $g>0:$ Zafixujeme si ucho reprezentované kružnicemi $u,u'$. Nechť $e_{1},e_{2},\dots,e_{k}$ jsou hrany křížící $u,u'$ v pořadí daným orientací $u,u'$ ($e_{1},e_{2}, \dots, e_{k}$ nejsou nutně různé).
- Jistě $k \geq 1$, jinak by nakreslení nebylo buňkové. Označme $\text{LS}(\mathcal{G}) = n(\mathcal{G}) - e(\mathcal{G}) + f(\mathcal{G})$. Nechť $\mathcal{G}_{1}$ vznikne z $\mathcal{G}$ tak, že se na každou $e_{i}$ přidají dělící vrcholy $x_{i}$ a $y_{i}$, těsně k $u$ a $u'$. $\text{LS}(\mathcal{G}_{1}) = \text{LS}(\mathcal{G})$.
- Nechť $\mathcal{G}_{2}$ vznikne z $\mathcal{G}_{1}$ tak, že pro $\forall i = 1, \dots , k$ přidám cestu délky 3 z $x_{i}$ do $x_{i+1}$ a z $y_{i}$ do $y_{i+1}$ a $x_{k}$ do $x_{i}$ a $y_{k}$ do $y_{i}$, cesty jsou těsně u $u$ a $u'$.
- $\text{LS}(\mathcal{G}_{2}) = \text{LS}(\mathcal{G}_{1})$
- $\mathcal{G}_{3}$ nakreslení na $\Sigma_{g-1}$ vzniklé z $\mathcal{G}_{2}$ odstraněním $u,u'$ a všech hran, které ho kříží.
- $n(\mathcal{G}_{2}) = n(\mathcal{G}_{3}), e(\mathcal{G}_{2}) - k = e(\mathcal{G}_{3}), f(\mathcal{G}_{2}) = f(\mathcal{G}_{3}) - 2 + k$
- $\text{LS}(\mathcal{G}_{2}) = \text{LS}(\mathcal{G}_{3}) - 2 =^{IP} \chi(\Sigma_{g-1}) - 2 = \chi(\Sigma_{g})$
$$
\Box
$$

### Fakt

Pro nebuňkové nakreslení $\mathcal{G}$ platí: $h(\mathcal{G}) - e(\mathcal{G}) + f(\mathcal{G}) > \chi(\Gamma)$.

### Důsledek:

Nechť $G+(V,E)$ je graf, který má nakreslení $\mathcal{G}$ na $\Gamma$, nechť $|V| \geq 3$. Potom:

1. $|E| \leq 3 |V| - 3 \chi (\Gamma)$,
2. (průměrný stupeň $G = \frac{2|E|}{|V|}$)$\leq 6 - \frac{6 \chi(\Gamma)}{|V|}$.

#### Důkaz:

1. BŮNO $\mathcal{G}$ je buňkové, každá stěna je incidentní s aspoň 3mi hranami, každá hrana je incidentní s nejvýš dvěma stěnami. Tedy $3 f(\mathcal{G}) \leq$ počet incidencí "hrana-stěna": $\leq 2 e(\mathcal{G}) \Rightarrow f(\mathcal{G}) \leq \frac{2}{3} e(\mathcal{G})$. Tedy: $\chi(\Gamma) \leq |V| - \frac{1}{3}|E|$.
$$
\Box
$$

<!-- Cvičení -->

Pro plochu $\Gamma$ označme:

$$
H_{\Gamma} := \left\lfloor \frac{5+\sqrt{49-24 \chi(\Gamma)}}{2} \right\rfloor
$$

## Věta

Nechť $\Gamma$ je plocha, $\Gamma \ncong \Sigma_{0}$. Potom každý graf, který má nakreslení na $\Gamma$ obsahuje vrchol stupně $\leq H_{\Gamma}$.

### Důkaz:

- $\Gamma \cong \Pi_{1}:$ průměrný stupeň nakreslení $\mathcal{G}$ na $\Gamma$ je $\leq 6 - \frac{6}{n(\mathcal{G})} < 6 \Rightarrow \exists$ vrchol stupně $\leq 5 = H_{\Pi_{1}}$.
- $\Gamma \cong \Pi_{2}$ nebo $\Gamma \cong \Sigma_{1}:$ průměrný stupeň $\leq 6$. Hotovo.
- $\chi(\Gamma) < 0:$ Mějme nakreslení $\mathcal{G}$ na $\Gamma$, uvažme pro minimální stupeň $\delta$ nakreslení $\mathcal{G}$ dva odhady.
1. $\delta \leq 6 - \frac{6 \chi(\Gamma)}{n(\mathcal{G})}$
2. $\delta \leq n(\mathcal{G}) -1$
- tedy $\delta \leq \min \{6 - \frac{6 \chi(\Gamma)}{n(\mathcal{G})}, n(\mathcal{G}) -1\}$.
- Budeme zkoumat $\max_{n \in \mathbb{N}}(\min \{6 - \frac{6 \chi(\Gamma)}{n(\mathcal{G})}, n(\mathcal{G}) -1\} \leq \lfloor \delta_{0} \rfloor)$.
- Hledáme $n_{0}: 6 - \frac{6 \chi(\Gamma)}{n_{0}} = n_{0} -1 \Leftrightarrow 6n_{0} - 6\chi(\Gamma) = n_{0}^{2} - n_{0} \Leftrightarrow n_{0}^{2} - 7n_{0} + 6\chi(\Gamma) = 0$.
- $n_{0} = \frac{7+\sqrt{49-24\chi(\Gamma)}}{2}$
- $\delta_{0} = n_{0} - 1 = \frac{5+\sqrt{49-24\chi(\Gamma)}}{2}$
$$
\Box
$$

## Definice:

Graf $G=(V,E)$ je **d-degenerovaný**, pokud každý jeho podgraf obsahuje vrchol stupně $\leq d$.

### Důsledek:

Každý graf nakreslitelný na plochu $\Gamma \ncong \Sigma_{0}$ je $H_{\Gamma}$-degenerovaný.

### Pozorování

Každý d-degenerovaný graf má barevnost $\leq d+1$.

### Důsledek: (*Heawood*)

Každý graf nakreslitelný na $\Gamma \ncong \Sigma_{0}$ má barevnost $\leq H_{\Gamma} + 1$.

### Fakt (*Ringel-Youngs*)

Na každou plochu $\Gamma \ncong \Pi_{2}$ se dá nakreslit $K_{H_{\Gamma}+1}$.

*Přednáška 7*

* * *

# Barvení grafů

### Značení:

- $\Delta(G)$ - největší stupeň v $G$
- $\delta(G)$ - nejmenší stupeň v $G$
- $\chi(G)$ - barevnost $G$
- $d(G)$ - degenerovanost $G$
	- nebo-li nejmenší $d \in \mathbb{N}_{0}$ takové, že $G$ je $d$-degenerovaný.
	- $G$ je $d$-degenerovaný: každý jeho neprázdný podgraf má vrchol stupně $\leq d$.

<!-- Cvičení -->

### Pozorování

$$
\delta (G) \leq d(G) \leq \Delta (G)
$$

### Pozorování

$$
\chi (G) \leq d(G) +1 \leq \Delta (G) + 1
$$

## Lemma

Nechť $G$ je souvislý graf, který má aspoň jeden vrchol stupně menšího než $\Delta (G)$. Potom $\chi(G) \leq \Delta(G)$.

### Důkaz:

- Nechť $x \in V(G)$ je vrchol stupně $< \Delta (G)$. Tvrdím: $\delta (G) \leq \Delta (G) -1$. Zvolme libovolný podgraf $H$. Dva případy:
1. $x \in H$ tak hotovo, protože $\deg_{H}(x) \leq \deg_{G}(x) \leq \Delta(G) -1$.
2. $x \notin H$ Protože $G$ je souvislý, tak existuje $y \in V(H)$, který má v $G$ souseda, který nepatří do $H$ $\deg_{H}(y) \leq \deg_{G}(y) - 1 \leq \Delta(G) - 1 \Rightarrow \chi(G) \leq d(G) + 1\ leq \Delta (G)$.
$$
\Box
$$

## Věta (*Brooks*)

Pro každý souvislý graf $G$, který není ani úplný graf ani lichá kružnice, platí $\chi(G) \leq \Delta (G)$.

### Důkaz:

- Nechť $k$ je vrcholová souvislost $G$. Potom zavedeme $\Delta := \Delta (G)$.
1. Pokud $k = 1$, tak existuje artikulace $x$. Graf $G$ rozdělíme na $G_{1}$ a $G_{2}$ podle dané artikulace s tím, že $x$ je v oubou grafech.
- Z toho pak plyne, že $\deg_{G_{1}}(x) < \Delta$ a $\deg_{G_{2}}(x) < \Delta$.
- Pak po použití lemma máme $\chi(G_{1}) \leq \Delta \land \chi(G_{2}) \leq \Delta:$ obarvím $G_{1}$ obarvením $f_{1}$ pomocí $\Delta$ barev, stejně i pro $G_{2}$ s $f_{2}$. BŮNO: $f_{1}(x) = f_{2}(x)$, jinak udělám permutaci barev. Pak mám obarvení celého $G$.
2. Pro $k=2$ udělám to stejné, akorát rozdělím grafy podle $x,y$, které jsou právě vrcholovým řezem grafu $G$. BŮNO: $\deg_{G_{1}}(x) \geq \deg_{G_{2}}(x)$.
- *Poznámka:* podgrafy $G$ s $\Delta(G) \leq 2$ věta platí, předp. $\Delta(G) = \Delta \geq 3$.
- Nyní mám možnosti:
	1. $\{xy\}$ patří do $E(G)$ (i $E(G_{1}) \land E(G_{2})$) pomocí lemma obarvíme $G_{1}$ i $G_{2}$ pomocí $\Delta$ barev, $x$ má jinou barvu než $y$ a dostanu i obarvení $G$.
	2. $\deg_{G_{1}}(x) \leq \Delta - 2$ nebo $\deg_{G_{1}}(y) \leq \Delta - 2$, přidám $\{xy\}$ a pořád platí obarvení pomocí lemma.
	3. $\deg_{G_{1}}(x) = \deg_{G_{1}}(y) = \Delta - 1 \Rightarrow \deg_{G_{2}}(x) = \deg_{G_{2}}(y) = 1$, tak místo $xy$ použiji $\{vy\}$, kde $v$ je soused $x$ z $G_{2}$. dále viz 2).
3. $k \geq 3: G$ souvislý, není úplný $\Rightarrow G$ obsahuje 2 nesousedící vrcholy $x$ a $y$, které mají společného souseda $z$.
- $G - x - y$ je souvislý, tedy jeho vrcholy lze uspořádat do posloupnosti $v_{1},v_{2}, \dots, v_{n-2}$ tak, že $v_{n-2} = z$ a každý $v_{i} \in \{v_{1}, \dots, v_{n-3}\}$ má aspoň jednoho souseda mezi $v_{i+1}, \dots, v_{n-2}$.
- Vrcholy tedy uspořádám $x,y,v_{1},v_{2},\dots,v_{n-2}$ a obarvím $G$ hladově zleva doprava pomocí $\Delta$ barev.
$$
\Box
$$

## Definice:

**Hranové obarvení** grafu $G = (V,E)$ je funkce $f: E \to \mathbb{Z}$ taková, že pro 2 různé hrany $e, e' \in E$ sdílející vrchol platí $f(e) \neq f(e')$. **Hranová barevnost** grafu $G$ značená $\chi_{e}(G)$ je nejmenší $k$ takové, že $G$ má hranové obarvení používající $k$ barev.

<!-- Cvičení -->

## Definice:

**Line graph** značen jako $L(G)$ vznikne z grafu $G$.
$$
L(G) = (E, \{ef\} \in \binom{E}{2}; e \cap f \neq \emptyset)
$$

## Pozorování

$$
\chi_{e}(G) = \chi(L(G)) \leq \Delta(L(G)) + 1 \leq 2 \Delta (G) - 1
$$

## Věta (*Vizing*)

$$
\forall G: \chi_{e}(G) \leq \Delta(G) + 1
$$

### Důkaz:

- Mějme $G = (V,E), \Delta = \Delta(G)$. Nechť $H = (V,E_{H})$ je co největší podgraf $G$, který lze hranově obarvit pomocí $\Delta + 1$ barev, nechť $f_{H}$ je takové hranové obarvení.
- Pokud $H=G$ jsme hotovi. Pro spor nechť existuje $e_{0} = \{xy_{0}\} \in E \setminus E_{H}$.
- Řeknu, že barva $\beta \in \{1,2,\dots, \Delta + 1\}$ je *volná* u vrcholu $w$, pokud žádná hrana $H$ incidentí s $w$ nemá barvu $\beta$.
- *Pozorování:* Každý vrchol má $\geq 1$ volnou barvu.
- Nechť $e_{0}, e_{1}, e_{2}, \dots, e_{k}$ je co nejdelší posloupnost různých hran, kde $e_{i} = \{xy_{i}\}$, pro každé $i = 1, \dots, k: f_{H}(e_{1})$ je barva, která je volná u $y_{i-1}$. Nechť $\beta$ je volná barva u $y_{k}$. Pak jsou případy:
1. $\beta$ je volná u $x$
	- $e_{k}$ obarvím $\beta$ a pro $j = 0, \dots, k-1$ hranu $e_{j}$ obarvím $f_{H}(e_{j+1})$. To je ale spor s maximalitou $H$.
2. $\beta$ je použitá na nějaké hraně $\tilde{e}$ incidentní s $x$, nepatřící do $\{e_{0}, e_{1}, \dots, e_{k}\}$
	- $e_{k+1} := \tilde{e}$ Opět spor s maximalitou $e_{0}, e_{1}, \dots, e_{k}$.
3. $\beta$ je použitá na nějaké hraně $e_{j} \in \{e_{1}, \dots, e_{k-1}\}$
	- Nechť $\alpha$ je volná barva u $x$. Dle předpokladu $\alpha \neq \beta$. Nechť $P$ je co největší souvislý podgraf $H$ na jehož hranách jsou jen barvy $\alpha$ a $\beta$ a který obsahuje hranu $e_{j}$. $P$ má maximální stupeň $\leq 2$, $\deg_{P}(x) = 1 \Rightarrow P$ je cesta, která má začátek v $x$.
	- Nechť $z$ je druhý konec $P$. Uvažujeme obarvení $\tilde{f_{H}}: E_{H} \to \{1, \dots, \Delta + 1\}$ vznikne z $f_{H}$ tak, že na $P$ prohodíme barvy $\alpha$ a $\beta$. 2 podpříklady:
		1. $z = y_{j-1}:$ v $\tilde{f_{H}}$ je $\beta$ volná u $x$ i u $y_{k}$. $\alpha$ je volná u $y_{j-1}$ a použitá na $e_{j} \Rightarrow$ nastává případ 1) pro $e_{0}, \dots, e_{k}$.
		2. $z \neq y_{j-1}:$ v $\tilde{f_{H}}$ je $\beta$ volná u $x$ i u $y_{j-1} \Rightarrow$ nastává případ 1 pro $e_{0}, \dots, e_{j-1}$.
$$
\Box
$$

<!-- Cvičení -->

*Přednáška 8*

* * *

# Perfektní grafy

### Značení:

- $\omega(G)$ - klikovost $G$, nebo-li velikost největší kliky v $G$.
- $\alpha(G)$ - nezávislost $G$, nebo-li velikost největší nezávislé množiny v $G$
- Doplněk grafu $G =(V,E)$ je graf $\bar{G}=(V, \binom{V}{2} \setminus E)$.

### Pozorování

$$
\begin{array}{cc}
\omega (G) = \alpha (\bar{G}) & \omega(\bar{G}) = \alpha(G)
\end{array}
$$

### Pozorování

$$
\chi(G) \geq \omega(G)
$$

### Pozorování

$$
\omega(C_{2k+1}) > 2
$$

<!-- Cvičení -->

## Definice:

Graf $G = (V,E)$ je **perfektní**, pokud pro každý indukovaný podgraf $H$ grafu $G$ platí $\omega(H) = \chi(H)$.

### Pozorování

$G$ perfektní graf, $G' \leq_{i} G \Rightarrow G'$ je perfektní.

### Důsledek:

$G$ obsahuje $C_{2k+1}$ nebo $\overline{C_{2k+1}}$ jako indukovaný podgraf $\Rightarrow G$ není perfektní.

## Silná věta o perfektníc grafech

$G$ je perfektní iff $G$ neobsahuje $C_{2k+1}$ ani $\overline{C_{2k+1}}$ (pro $k \geq 2$) jako indukovaný podgraf.

*Bez důkazu.*

## Definice:

Nezávislá množina $N$ v grafu $G = (V,E)$ je **rozlehlá**, pokud každá klika $G$ velikosti $\omega(G)$ obsahuje vrchol z $N$.

- Ekvivalentně: $\omega(G-N) = \omega(G)-1$.

## Lemma 1

Pro graf $G = (V,E)$ jsou následující tvrzení ekvivalentní:

1. $G$ je perfektní,
2. $\forall H \leq_{i} G: H$ má rozlehlou nezávislou množinu,
3. $\forall H \leq_{i} G, \forall x \in V(H):H$ má rolehlou nezávislou množinu obsahující $x$.

### Důkaz:

- $3 \Rightarrow 2$ triviálně.
- $2 \Rightarrow 1$ Nechť $G' \leq_{i} G$ a chceme $\omega(G') = \chi(G')$.
	- Obarvení $G'$ pomocí $\omega(G')$ barev najdeme takto: $N_{1}$ je rozlehlá NzMna v $G_{1}$ a té dáme barvu 1. Následně $N_{2} :=$ NzMna v $G' - N_{1}$ barvu 2 a tak dále opakujeme dokud nemáme obarvené celé $G'$.
	- $\omega(G' - N_{1}) = \omega(G') -1$,
	- $\omega(G' - (N_{1} \cup N_{2})) = \omega(G') -2$ a tak dále.
	- Proto použijeme právě $\omega(G')$ barev. Hotovo.
- $1 \Rightarrow 3$ Nechť $G$ je perfektní graf, mějme $H \leq_{i} G, \forall x \in V(H)$. Víme $\omega(H) = \chi(H)$.
	- Vrcholy $H$ barvy $f(x)$ jsou rozlehlá nezávislá množina.
	- Každá největší klika musí mít právě jeden vrchol s danou barvou.
$$
\Box
$$

## Definice:

Nechť $G= (V,E)$ je graf s vrcholem $x$. Nechť $k \in \mathbb{N}$. Potom **$k$-násobné nafouknutí** vrcholu $x$, která vytvoří $G^{+}$ takto:

1. Vrchol $x$ se nahradí $k$-ticí nových vrcholů $x_{1}, \dots x_{k}$ tvořící kliku.
2. Každý soused vrcholu $x$ v $G$ se spojí se všemi $x_{1}, \dots, x_{k}$.

## Lemma 2

Pokud $G$ je perfektní a $G^{+}$ je jeho nafouknutí, tak i $G^{+}$ je perfektní.

### Důkaz:

- Dokážeme, že $\forall H \leq_{i} G^{+}$ má rozlehlou nezávislou množinu. Pak ještě použijeme Lemma 1 a máme hotovo.
- Volme $H \leq_{i} G^{+}:$ Pokud $H$ obsahuje nejvýš jeden z $x_{1}, \dots, x_{k}$ tak $H \leq_{i} G$, takže $H$ má rozlehlou NzMnu dle Lemma 1. Předpokládejme, že $H$ obsahuje aspoň dva vrcholy z $x_{1}, \dots, x_{k}$.
- Potom $H$ je nfouknutí nějakého $H^{-} \leq_{i} G, x \in V(H^{-})$.
- Dle Lemma 1, $H^{-}$ obsahuje rozlehlou NzMnu $N^{-}$ obsahující $x$. BÚNO: $x_{1} \in V(H)$.
- Tvrdím: $N := (N^{-} \setminus \{x\}) \cup \{x_{1}\}$ je rozlehlá NzMna v $H$. Jistě $N$ je nezávislá. Nechť $K$ je klika $H$ velikosti $\omega(H)$. Pak jsou dvě možnosti:
1. $K \cap \{x_{1}, \dots, x_{k}\} = \emptyset$ v tom případě je $K$ i největší v $H^{-}$, tedy $N^{-} \cap K \neq \emptyset$, dokonce $(N^{-} \setminus \{x\}) \cap K \neq \emptyset, N \cap K \neq \emptyset$.
2. $K \cap \{x_{1}, \dots, x_{k}\} \neq \emptyset$ nutně $K$ obsahuje všechny vrcholy z $\{x_{1}, x_{2}, \dots ,x_{k}\}$ patřící do $H$, tedy i $x_{1} \in K$, tedy $K \cap N = \{x_{1}\} \neq \emptyset$.
	- Tedy $N$ he rozlehlá NzMna $H$.
$$
\Box
$$

### Značení:

$H <_{i} G := H \leq_{i} G \text{ \& } H \ncong G$ - $H$ je vlastní indukovaný podgraf $G$.

## Věta (*Slabá věta o perfektních grafech.*)

$G$ je perfektní iff $\bar{G}$ je perfektní.

### Důkaz:

- Sporem: $\exists$ perfektní graf $G = (V,E)$. ale $\bar{G}$ není perfektní. Volme $G$ tak, že $|V|$ je co nejmenší. Tedy $\forall H <_{i} G$ platí, že $H$ i $\bar{H}$ jsou perfektní. Jinak to je menší graf co do velikosti $|V|$.
- Protože $\bar{G}$ není perfektní, tak dle Lemma 1 $\exists G' \leq_{i} \bar{G}: G'$ nemá rozlehlou NzMnu.
- Tvrdím, že $G' \cong \bar{G}$, kdyby $G' <_{i} \bar{G}$ tak $G'$ není perfektní, ale $\bar{G'} <_{i} G$ tedy $\bar{G'}$ je perfektní, spor s minimalitou $G$.
- Tedy $\bar{G}$ nemá rozlehlou NzMnu. Tj. pro každou NzMnu $\bar{N}$ v $\bar{G}$ existuje v $\bar{G}$ klika velikosti $\omega(G)$ disjunktní s $\bar{N}$. Tedy pro každou kliku $K$ v $G$ existuje v $G$ NzMna velikosti $\alpha(G)$ disjunktní s $K$.
- Nechť $Q_{1},Q_{2}, \dots, Q_{t}$ je seznam všech klik v $G$. Nechť $N_{i}$ je NzMna $G$ velikosti $\alpha(G)$ disjunktní s $Q_{i}$, pro $i = 1,\dots, t$.
- Pro každý vrcholy $x \in V$ nechť $f(x)$ je počet indexů $i \in \{1, \dots, t\}$ takových, že $x \in N_{i}$.
- $G^{+}$ vznikne z $G$ tak, že se každý vrchol $x$ nafoukne $f(x)$-krát.
- Vrcholy $x \in V$ s $f(x) = 0$ se smažou.
- Dle Lemma 2 $G^{+}$ je stále perfektní.
- $|V(G^{+}| = t \alpha(G) = t \alpha(G^{+})$
- Víme: $\chi(G^{+}) \alpha(G^{+}) \geq |V(G^{+})| = t \alpha(G^{+})$
- Tedy $\chi(G^{+}) \geq t$. **(1)**
- Ale $\chi(G^{+}) = \omega(G^{+})$. **(2)**
- Nechť $Q^{+}$ je největší klika v $G^{+}$, ta musela vzniknout nafouknutím nějaké kliky $Q_{j}$ v $G$.
- **(3)** $|Q^{+}| = \sum_{x \in Q_{j}} f(x) = \sum_{x \in Q_{j}} \sum_{i=1}^{t}|N_{i} \cap \{x\}| = \sum_{i=1}^{t}\sum_{x \in Q_{j}} |N_{i} \cap \{x\}| = \sum_{i=1}^{t} |Q_{j} \cap N_{i} \leq t -1$
- Protože $Q_{j} \cap N_{j} = \emptyset$ dle definice $N_{j}$ a dohromady (1), (2) a (3) je spor.

$$
\Box
$$

<!-- Cvičení -->

*Přednáška 9*

* * *

### *Připomenutí*

- *Částečné uspořádaná množina $(X, \leq)$, kde $\leq$ je reflexivní, slabě antisymetrická a tranzitivní.*
- ***Řetězec:** podmnožina $X$, v níž každé dva prvky jsou porovnatelné.*
- ***Antiřetězec:** podmnožina $X$, v níž žádné dva prvky nejsou porovnatelné.*
- *Také je dobré znát **Hasseho diagram**.*

### *Cvičení*

*Dokažte: Pokud každý řetězec v $(X, \leq)$ má velikost $\leq k$, tak $(X,\leq)$ se dá rodělit na $\leq k$, antiřetězců.*

- *Indukcí dle $k$ (postupně se mažou maximální prvky).*

## Definice:

Pro částečně uspořádanou množinu $(X,\leq)$ definuji graf **porovnatelnosti** $G_{\leq} = (X,E)$, kde $E = \{\{xy\} \in \binom{X}{2}: x \leq y \lor y \leq x\}$.

### *Cvičení*

*Dokažte: $G_{\leq}$ je perfektní.*

- *Klikovost = nejdelší řětězec.*
- *Barevnost = počet antiřetězců.*
- *Použití předchozího cvičení.*

## Věta (*Dilworth*)

Pokud v částečně uspořádané množině $(X,\leq)$ má každý antiřetězec velikost $l$, tak $(X, \leq)$ se dá rozdělit na $\leq l$ řetězců.

### Důkaz:

- Každý $G_{\leq}$ je perfektní $\Rightarrow \bar{G_{\leq}}$ je perfektní.
- $\omega(\bar{G_{\leq}}) \leq l$ \& $\chi(\bar{G_{\leq}}) \leq l \Rightarrow l$ Nzmna $\to l$ klik $\Rightarrow$ řetězce v $(X, \leq)$.
$$
\Box
$$

### Pozorování

Bipartitní grafy jsou perfektní.

### Značení:

- $\text{m}(G):=$ velikost největšího párování v grafu $G$
- $\text{vp}(G):=$ veliksot nejmenšího vrcholového pokrytí v grafu $G$.

### Pozorování

$$
\text{m}(G) \leq \text{vp}(G)
$$

### *Připomenutí*

*Konig-Egerváryho věta: $G$ bipartitní: $\text{m}(G) = \text{vp}(G)$.*

<!-- Cvičení -->

## Definice:

Graf $G = (V,E)$ je **chordální**, pokud neobsahuje kružnici délky $\geq 4$ jako indukovaný podgraf.

### Pozorování

Graf $G$ je chordální a $H \leq_{i} G \Rightarrow H$ je chordální.

## Definice:

Nechť $G = (V,E)$ je graf, nechť $x$ a $y$ jsou dva nesousední vrcholy v $G$. **$xy$-řez** je množina $R \subseteq V$, t.ž. $x$ a $y$ jsou v různých komponentách $G-R$.

## Lemma

Graf $G= (V,E)$ je chordální iff pro každé dva nesousední vrcholy $x,y$ existuje $xy$-řez, který je klika v $G$.

### Důkaz:

- $\Leftarrow$ Nechť $G$ není chordální. Chceme dva nesousední vrcholy $x,y$, t.ž. žádný $xy$-řez není klika. Nechť $G$ obsahuje indukovanou kružnici $C$ délky $\geq 4$, nechť $x,y$ jsou nesousedící vrcholy na $C$.
	- Vždy musím odebrat aspoň 2 vrcholy z cyklu. Ale mezi nimi není hrana a tudíž nemůže se jednat o kliku. S tím, že odstraněné vrcholy musí přerušit dvě cesty $P_{1}, P_{2}$. Kde $P_{1}$ a $P_{2}$ je rozdělení $C$ dle $x,y$.
- $\Rightarrow$ Nechť $G$ je chordální, nechť $x,y$ jsou dva nesousedící vrcholy. Nechť $R$ je $xy$-řez minimální vzhledem k inkluzi. Ukážeme, že $R$ je klika v $G$.
	- Sporem: nechť existují nesousedící vrcholy $u,v \in R$. Nechť $G_{x}, G_{y}$ jsou komponenty $G-R$ obsahující $x$ respektive $y$.
	- *Pozorování:* $u$ i $v$ má aspoň jednoho souseda v $G_{x}$ i v $G_{y}$ z minimality řezu.
	- Nechť $P_{x}$ je co nejkratší csta z $u$ do $v$ jejichž vnitřní vrcholy patří do $G_{x}$. Podobně $P_{y}$. $P_{x} \cup P_{y}$ je indukovaná kružnice délky $\geq 4$, spor.
$$
\Box
$$

## Definice:

Vrchol $x$ grafu $G$ je **simpliciální**, pokud sousedi $x$ tvoří kliku v $G$.

### Pozorování

Vrchol stupně $\leq 1$ je simpliciální.

## Lemma

Každý chordální graf (s aspoň jedním vrcholem) má simpliciální vrchol.

### Důkaz:

- Dokážeme: $\forall$ chordální graf $G = (V,E)$ je buď úplný nebo má dva nesousední simpliciální vrcholy. Indukcí dle $|V|$.
- $|V|=1$ $G$ je úplný.
- $|V|>1$ Pokud $G$ není úplný (jinak triviálně platí). Volme $x,y$ nesousedící vrcholy v $G$. Nechť $R$ je $xy$-řez tvořící kliky v $G$ (Lemma).
	- $G_{x}, G_{y}$ jsou komponenty $G-R$ obsahující $x$ popř. $y$.
	- $G_{x}^{+},G_{y}^{+}$ jsou podgrafy $G$ indukované $G_{x} \cup R$ respektive $G_{y} \cup R$.
	- IP: $G_{x}^{+}$ je buď úplný, nebo obsahuje dva nesousedící simpliciální vrcholy.
	- V obou případech to znamená, že $G_{x}^{+}$ obsahuje simpliciální vrchol $s_{x}$ nepatřící do $R$. Obdobně $s_{y}$ je simpliciální vrchol v $G_{y}^{+}$ nepatřící do $R$.
	- V $G$ mají $s_{x}$ i $s_{y}$ stejné sousedy jako v $G_{x}^{+}$ resp. $G_{y}^{+}$, tedy $s_{x}$ a $s_{y}$ jsou dva nesousedící simpliciální vrcholy v $G$.
$$
\Box
$$

## Definice:

**Perfektní eliminační schéma** (*PES*) grafu $G$ je uspořádání vrcholů $G$ do posloupnosti $v_{1}, v_{2}, v_{3}, \dots, v_{n}$ takové, že $\forall i = 1, \dots ,n$ sousedi $v_{i}$ mezi $\{v_{1}, \dots, v_{i-1}\}$ tvoří kliky v $G$. (*Ekvivalentně: $v_{i}$ je simpliciální v indukovaném podgrafu $G$ $\{v_{1}, \dots, v_{i}\}$.*)

## Věta

Následující vlastnosti grafu $G = (V,E)$ jsou ekvivalentní:

1. $G$ je chordální,
2. $\forall H \leq_{i} G: H$ má simplic. vrchol,
3. $G$ má PES.

### Důkaz:

- $1 \Rightarrow 2: \forall H \leq_{i} G$ je chordální $\Rightarrow$ z Lemma $H$ má simpliciální vrchol.
- $2 \Rightarrow 3:$ Vezmu simpliciální vrchol v $G$ dám ho doprava v PES. Odeberu z $G$ a takhle pořád opakuji.
- $3 \Rightarrow 1: G$ s PES, pak každá $C$ s $|V| \geq 4$ musí mít chordu. Podívám se na poslední vrchol v PES. Pak z vlastnosti PES musí mít předchozí vrcholy chordu.
$$
\Box
$$

### Důsledek:

- Důkaz $2 \Rightarrow 3$ říká, že v polynomiálním čase lze pro dané $G$ najít PES nebo zjistit, že neexistuje.

## Věta

1. Každý chordální graf je perfektní.
2. Pro chordální graf $G$ lze v polynomiálním čase zjistit $\omega(G) = \chi(G)$, spolu s nevětší klikou a optimálním obarvením.

*Přednáška 10*

* * *

### Důkaz:

- Už víme, že lze vytvořit PES.
- Pro každý vrchol v PES platí, že jeho předchozí sousedi tvoří kliku a s daným vrcholem tvoří kliku o jedna větší.
- Pak již stačí najít vrchol s největším počtem předchozích vrcholů (značeno $k$) a potom $\omega(G) = k+1$.
- Pro spor vezmu největší kliku z algoritmu. Kdyby nebyl největší, tak lze přidat další, ale ten musí být sousedem a tudíž ho algoritmus musel najít.
- Pro obarvení budu postupovat zleva a danému vrcholu dám nejmenší možnou barvu. Zaznačím si největší barvu a novou barvu přidám jakmile vrchol bude mít v předchozích vrcholech právě tolik sousedů. Tím pádem nikdy nepřekročím velikost maximální kliky a tedy $\chi(G) = \omega(G)$.
- Najdu tedy obarvení, které je rovno klice a tedy je i perfektní.

$$
\Box
$$

# Extremální kombinatorika

## Definice:

Pro $n \in \mathbb{N}$ a graf $F$ definujeme $\text{ex}(n,F) :=$ největší počet hran v grafu na $n$ vrcholech, který neobsahuje $F$ jako podgraf. Nebo-li:
$$
\text{ex}(n,F) = \max\{|E|; G = (V,E): |V| = n, F \subseteq G\}
$$

## Definice:

**Turanův graf $T(n,r)$** je úplný $r$-partitní graf na $n$ vrcholech, jehož všechny partity mají velikost $\left\lfloor \frac{n}{r} \right\rfloor$ anebo $\left\lceil \frac{n}{r} \right\rceil$.

- Potom $t(n,r):=$ počet hran $T(n,r)$.

## Věta (*Turán*)

$$
\forall n,r \in \mathbb{N}: \text{ex}(n,K_{r+1}) = t(n,r)
$$

### Důkaz:

- *Pozorování:* $T(n,r)$ neobsahuje $K_{r+1}$, tedy $\text{ex}(n,K_{r+1}) \geq t(n,r)$.
- Stačí dokázat: $\text{ex}(n,K_{r+1})\leq t(n,r)$. Nechť $G = (V,E)$ je graf na $n$ vrcholech, $K_{r+1} \nsubseteq G$ a $|E| = \text{ex}(n,K_{r+1})$.
- Tvrzení 1: Každé 2 nesousedící vrcholy $x,y$ mají v $G$ stejný stupeň. Sporem kdyby $\deg(x) > \deg(y)$ tak $y$ odstraním sousedy a přidám mu sousedy $x$. Ten má ale více hran a protože $\{x,y\} \notin E$ a s $x$ nebyla klika, tak teď také žádná klika nevznikla s $y$. "Nebo-li $y$ nahradím kopií $x$."
- Tvrzení 2: Definujeme relaci $R := \{(x,y) \in V \times V: \{x,y\} \notin E\}$. Potom $R$ je ekvivalence.
	- Jistě je $R$ reflexivní, také symetrické.
	- Pro spor předpokládejme, že $R$ není tranzitivní: $\exists x,y,z: (x,y) \in R, (y,z) \in R \land (x,z) \notin R$. Dle Tvrzení 1: $\deg_{G}(x) = \deg_{G}(y) = \deg_{G}(z)$.
	- Potom "nahradím $x$ a $z$ kopiemi $y$". A platí $|E(G')| > |E|$. A $G'$ neobsahuje $K_{r+1}$ obdobným argumentem jako u Tvrzení 1.
	- Nyní nechť $P_{1}, P_{2}, \dots, P_{k}$ jsou třídy ekvivalence $R$.
- Tvrzení 3: $k=r$ (pokud $n \geq r$).
	- $k > r:$ tak $K_{r+1} \subseteq G$ a to je spor.
	- $k < r:$ tak lze partitu s $\geq 2$ vrcholy rozdělit na dvě menší partity a přidáme hrany mezi nimi a dostaneme $G'$, který $K_{r+1} \nsubseteq G'$ \& $|E(G')| > |E|$ opět spor.
- Tvrzení 4: BÚNO: $|P_{1}| \leq |P_{2}| \leq \dots \leq |P_{r}|$. Tvrdíme, že $|P_{1}| \leq |P_{r}| + 1$.
	- Kdyby nějaké dvě partity byly odlišné $\geq 2$. Potom vezmeme půlku přebytečných vrcholů a přehodíme je do předchozí partity. Následně spojíme hranami. Dostanu $G'$ kde $K_{r+1} \nsubseteq G$ a $|E(G')| > |E|$. *Poznámka: $(l+2) l < (l+1)(l+1)$.*
- Shrnutí: $G$ je úplný $r$-partitní graf, kde všechny partity jsou skoro stejné $\Rightarrow G \cong T(n,r)$.

$$
\Box
$$

## Ddefinice:

**Hypergraf** je dvojice $(V,E)$, kde prvky $E$ *("hyperhrany")* jsou podmnožiny $V$.

## Definice:

Hypergraf je **$k$-uniformní**, pokud všechny jeho hyperhrany mají $k$ vrcholů.

## Definice:

$f(n,k):=$ největší počet hyperhran v $k$-uniformním hypergrafu na $n$ vrcholech, v němž žádné dvě hyperhrany nejsou disjunktní.

### Pozorování

Pro $n < k: f(n,k) = 0$.

### Pozorování

Pro $k \leq n < 2k: f(n,k) = \binom{n}{k}$.

### Pozorování

Pro $n \geq 2k: f(n,k) \geq \binom{n-1}{k-1}$. (Vybereme předem jeden vrchol.)

## Definice:

Označme $V= \{1,2,3, \dots ,n\}$, na $V$ uvažujme sčítání modulo $n$. **Interval** je podmnožina $V$ tvaru $\{i,i+1,i+2, \dots, i+k\}$.

### Pozorování

Pro $n \geq 2k$ máme na $V$ přesně $n$ intervalů.

## Lemma

Nechť $V = \{1,2,3,\dots,n\}, n \geq 2k$ a $G = (V,E)$ je $k$-uniformní hypergraf jehož každá hyperhrana je interval a každé dvě hyperhrany se protínají. Potom $|E| \leq k$.

### Důkaz:

- BÚNO: $I = \{1,2,3,\dots,k\} \in E$.
- Označme $I_{j}^{-}:= \{j,j-1,j-2, \dots, j-k+1\}$ a $I_{j}^{+}:= \{j+1,j+2, \dots, j+k\}$.
- $I$ je protnutí $I_{1}^{-}, I_{2}^{-}, \dots, I_{k-1}^{-}$ \& $I_{1}^{+}, I_{2}^{+}, \dots, I_{k-1}^{+}$. Navíc z každé dvojice $I_{j}^{-},I_{j}^{+}$ nejvýše jeden patří do $E$, protože $I_{j}^{-} \cap I_{j}^{+} = \emptyset$. Tudíž $|E| \leq k$.
$$
\Box
$$

## Věta (*Erdös-Ko-Rado*)

Pro libovolné $k \in \mathbb{N}$ a $n \geq 2k$ platí $f(n,k) = \binom{n-1}{k-1}$.

### Důkaz:
- **Myšlenka:** $G = (V,E)$ je $k$-uniformní hypergraf na $n$ vrcholech, každé dvě hyperhrany se protínají $\to |E| \leq \binom{n-1}{k-1}$.
	- Ekvivalentně: **(1)**$\frac{|E|}{\binom{n}{k}} \leq \frac{\binom{n-1}{k-1}}{\binom{n}{k}} = \frac{k}{n}$.
	- Lemma: Když každá hyperhrana je interval $\frac{|E|}{n} \leq \frac{k}{n}$**(2)**.
	- Tyto dva zlomky jsou vlastně pravděpodobnosti. Takže náhodně očíslujeme vrcholy a mám stejnou pravděpodobnost v obou případech.
- **Důkaz:** Mějme $n \geq 2k$. Nechť $G= (V,E)$ je $k$-uniformní hypergraf v němž aždé 2 hyperhrany se protínají a $|E|$ je co největší. Chceme dokázat $|E| \leq \binom{n-1}{k-1}$. Nechť $X$ je počet dvojic $(e,\pi)$ t.ž. $e \in E$ a $\pi: V \to \{1,2,\dots,n\}$ taková, že $\pi$ zobrazí $e$ na intervalu. Potom pomocí počítání dvěma způsoby:
1. $X \leq n! \cdot k$ (dle lemma)
2. $X = |E| \cdot n \cdot k! \cdot (n-k)!$
- $|E| \cdot n \cdot k! \cdot (n-k)! \leq n! \cdot k$
- $|E| \leq \frac{k}{n} \binom{n}{k} = \binom{n-1}{k-1}$
$$
\Box
$$

*Přednáška 11*

* * *

## Definice:

**Slunečnice** (nebo $\Delta$-systém) se středem $S$ a $l$ lístky je $l$-tice množin $L_{1},L_{2},\dots,L_{l}$ taková, že $\forall i \neq j: L_{i} \cap L_{j} = S$.

- $s(k,l) := \sup \{|E|; G = (V,E) \text{ je }k \text{-uniformní hypergraf neobsahující žádnou slunečnici s } l \text{ lístky}\}$.

## Věta (*"lemma o slunečnici"*, *Erdös-Rado*)

$$
\forall k,l \in \mathbb{R}: s(k,l) < + \infty
$$

### Důkaz:

- Indukcí dle $k$.
- $k=1: s(k,l) = l -1$
- $k > 1:$ Nechť $G= (V,E)$ je $k$-uniformní hypergraf neobsahující slunečnici s $l$ lístky.
- Nechť $D \subseteq E$ je co největší množina po dvou disjunktních hyperhran v $G$.
- Jistě $|D| \leq l - 1$, jinak máme slunečnici s $|D| \geq l$ lístky.
- Označme $W := \bigcup_{d \in D} d \subseteq V, |W| = k \cdot |D| \leq k \cdot (l - 1)$.
- Jistě každá $e \in E$ obsahuje aspoň jeden vrchol $W$. Tedy existuje $x \in W$, který je obsažen v aspoň $\frac{|E|}{|W|} = \frac{|E|}{k \cdot(l-1)}$ hyperhranách z $E$.
- Označme $E_{x} := \{ e \in E, x \in e\}$ pak $E_{x}^{-} := \{ e \setminus \{x\}, e \in E_{x}\}$ a $G_{x}^{-} := (V,E_{x}^{-})$.
- $G_{x}^{-}$ je $(k-1)$-uniformní hypergraf, který neobsahuje slunečnici s $l$ lístky: kdyby $e_{1},e_{2}, \dots ,e_{l}$ byla slunečnice v $G_{x}^{-}$, tak $e_{1} \cup \{x\}, e_{2} \cup \{x\}, \dots, e_{l} \cup \{x\}$ je slunečnice v $G$.
- Tedy dle IP: $|E_{x}^{-}| = s(k-1,l) < + \infty$.
- Navíc $|E_{x}^{-}| = |E_{x}| \geq \frac{|E|}{k \cdot (l-1)}$, tedy $|E| \leq k \cdot (l-1) \cdot s(k-1,l)$.
- Tedy $s(k,l) \leq k \cdot (l-1) \cdot s(k-1,l)$.

$$
\Box
$$

### *Poznámka:*

*Důkaz nám dává odhad $s(k,l) \leq k!(l-1)^{k}$.*

#### *Hypotéza*

$$
(\forall l)(\exists c_{l}): s(k,l) \leq c_{l}^{k}
$$

## Definice:

**Hamiltonovská kružnice** v grafu $G = (V,E)$ je kružnice v $G$ obsahující všechny vrcholy $G$.

## Definice:

Pro $n \geq 3$ označme $h(n) := \max \{d \in \mathbb{N}_{0}, \exists \text{ graf na } n \text{ vrcholech s min stupněm } \geq d \text{, který neobsahuje hamiltonovskou kružnici.}\}$.

## Věta (*Bondy-Chvátal*)

Nechť $G = (V,E)$ je graf s $n \geq 3$ vrcholy, nechť $x,y \in V$ jsou nesousedící vrcholy $G$ takové, že $\deg_{G}(x) + \deg_{G}(y) \geq n$. Nechť $G^{+}:= (V,E\cup\{xy\})$. Potom $G$ je hamiltonovský iff $G^{+}$ je hamiltonovský.

### Důkaz:

- $\Rightarrow$ je triviální
- $\Leftarrow$ Označme $e_{0} = \{xy\}$. Nechť $G^{+}$ obsahuje hamiltonovskou kružnici $C$. Pokud $e_{0} \notin C$, tak $C$ je hamiltonovská kružnice v $G$.
- Předpoklad $e_{0} \in C$ jinak triviálně.
- Očíslujeme vrcholy a hrany $C$ takto:
	- $x = x_{1}, x_{2}, \dots, x_{n-1}, x_{n} = y$
	- $e_{0}, e_{1}, e_{2}, \dots , e_{n}, e_{0}$
- Cíl je najít $i \in \{1,2,3, \dots, n-1\}$ tak, že $x$ sousedí s $x_{i+1}$ a $y$ sousedí s $x_{i}$ v grafu $G$.
- Označme $S_{x} := \{i \in \{1,2,3,\dots,n-1\}, \{xx_{i+1}\} \in E\}$ z toho plyne, že $|S_{x}| = \deg_{G}(x)$ a taky $S_{y} := \{i \in \{1,2,3,\dots,n-1\}, \{yx_{i}\} \in E\}$ pak $|S_{y}| = \deg_{G}(
y)$.
- Tedy $|S_{x}| + |S_{y}| \geq n, |S_{x} \cup S_{y}| \leq |\{1,2,3, \dots, n-1\}| \leq n-1$, tudíž $\exists i \in S_{x} \cap S_{y}$.
- $(C \setminus \{e_{0},e_{i}\}) \cup \{\{xx_{i+1}\},\{yx_{i}\}\}$ je hamiltonovská kružnice v $G$.

$$
\Box
$$

### Důsledek: (*Dirac*)

Každý graf na $n \geq 3$ vrcholech s minimální stupněm $\geq \frac{n}{2}$ je hamiltonovský. (Nebo $h(n) < \frac{n}{2}$.)

#### Důkaz:

- $\forall x \neq y \in V: \deg_{G}(x) + \deg_{G}(y) \geq n$
- Pokud $G$ je úplný, tak hotovo. Jinak můžeme postupně přidávat hrany a vytvořit úplný graf. Pak pomocí Bondy-Chvátalovy věty jsou všechny tyto grafy v posloupnosti hamiltonovské.
$$
\Box
$$

<!-- Cvičení -->

## Definice:

- **Multigraf** je jako graf, ale můžu mít více hran mezi stejnou dvojicí vrcholů a můžu mít i smyčky.
- *Formálně:* Multigraf je dvojice množin $(V,E)$ spolu s incidenční funkcí $f: E \to \binom{V}{2} \cup \binom{V}{1}$, kde $V$ jsou vrcholy a $E$ hrany.

## Definice:

**Incidenční matice** multigrafu $G = (V,E)$ je matice $I_{G} \in \{0,1,2\}^{|V| \times |E|}$, kde v řádku odpovídajícímu vrcholu $x \in V$ a sloupci odpovídající hraně $e \in E$ je hodnota 2, pokud $e$ je smyčka u $x$, 1 pokud $x$ je jedna ze dvou konců $e$, 0 jinak.

<!-- Tvrzení -->
<!-- možná lepší dodělat -->

## Definice:

Mějme multigraf $G = (V,E)$ s maticí incidence $I_{G}$.

- Označme: $k(G) = k(V,E)$ počet komponent souvislosti $G$.
- Označme: $r(G) = r(VE)$ hodnost $I_{G}$. (nad $\mathbb{Z}_{2}$)
- Označme: $n(G) = n(V,E)$ dimenze jádra $\text{Ker}(I_{G})$ matice $I_{G}$, kde $\text{Ker}(I_{G}) = \{x \in (\mathbb{Z}_{2})^{|E|}: I_{g}x = 0\}$. Také se $n(G)$ nazývá nulita $G$.

### Pozorování

$$
r(V,E) = |V| - k(V,E)
$$

### Pozorování

$$
n(V,E) = |E| - r(V,E)
$$

<!-- Cvičení -->

## Definice:

$\text{Ker}(I_{G})$ **prostor cyklů** $G= (V,E)$.

## Definice:

$G = (V,E)$ multigraf $e \in E$. Pak:

- $G-e := (V, E \setminus \{e\})$
- $G / e$ (kontrakce hrany $y$) $:= G - e$, pokud $e$ je smyčka, jinak nový vrchol $v_{e}$ všechny hrany se projeví na novém vrcholu (protože máme multigraf).

### Pozorování

$G-e$ i $G/e$ má vždy o jednu hranu méně než $G$.

*Přednáška 12*

* * *

- $r(G) = |V| - k(G) = |F|$, kde $F \subseteq E$ je největší podmnožina $E$ neobsahující kružnici.
- $n(G) = |E| - r(G) = |F|$, kde $F \subseteq E$ je největší podmnožina $E$ taková, že $k(G-F) = k(G)$

$$
r(G-e) = 
\left\{
\begin{array}{ll}
r(G)-1 & e \text{ je most v } G \\
r(G) & \text{jinak}
\end{array}
\right.
$$

$$
n(G-e) = 
\left\{
\begin{array}{ll}
n(G) & e \text{ je most v } G \\
n(G) - 1 & \text{jinak}
\end{array}
\right.
$$

$$
r(G/e) = 
\left\{
\begin{array}{ll}
r(G) & e \text{ je smyčka v } G \\
r(G)-1 & \text{jinak}
\end{array}
\right.
$$

$$
n(G/e) = 
\left\{
\begin{array}{ll}
r(G)-1 & e \text{ je smyčka v } G \\
r(G) & \text{jinak}
\end{array}
\right.
$$

## Definice:

**Tutteův polynom** multigrafu $G=(V,E)$, značený $T_{G}(x,y)$ je definován:
$$
T_{G} = \sum_{F \subseteq E} (x-1)^{r(V,E)-r(V,F)} \cdot (y-1)^{n(V,F)}
$$

### *Poznámka:*

$x^{0}$ je konstantní funkce $\equiv 1$

### Pozorování

$T_{G}(1,1) =$ \# počet koster v souvislém grafu $G$.

### Tvrzení

Nechť $G_{1} =(V_{1},E_{1})$ a $G_{2} = (V_{2},E_{2})$ jsou multigrafy, kde $E_{1} \cap E_{2} = \emptyset$ a $|V_{1} \cap V_{2}| \leq 1$. Nechť $G = (V = V_{1} \cup V_{2}, E = E_{1} \cup E_{2})$. Potom $T_{G}(x,y) = T_{G_{1}}(x,y)T_{G_{2}}(x,y)$.

#### Důkaz:

- Nechť $V_{1} \cap V_{2} = \emptyset$ (situace $|V_{1} \cap V_{2}| = 1$ je obdobná).
- $T_{G}(x,y) = \sum_{F_{1} \subseteq E_{1}} \sum_{F_{2} \subseteq E_{2}} (x-1)^{r(V,E) - r(V, F_{1} \cup F_{2}} \cdot (y-1)^{n(V,F_{1} \cup F_{2}} =$ **(1)**
- $r(V, F_{1} \cup F_{2}) = r(V,F_{1}) + r(V,F_{2})$ stejně tak i pro $n(G)$

$$
(1) = \sum_{F_{1} \subseteq E_{1}} \sum_{F_{2}} (x-1)^{r(E_{1})+r(E_{2}) - (r(F_{1}) + r(F_{2}))} \cdot (y-1)^{n(F_{1}) + n(F_{2})} =
$$

$$
\left( \sum_{F_{1}\subseteq E_{1}} (x-1)^{r(E_{1}) - r(F_{1})} \cdot (y-1)^{n(F_{1})}\right) \left( \sum_{F_{2}\subseteq E_{2}} (x-1)^{r(E_{2}) - r(F_{2})} \cdot (y-1)^{n(F_{2})} \right) =
$$

$$
=T_{G_{1}}(x,y) T_{G_{2}}(x,y)
$$

$$
\Box
$$

#### Důsledek:

$e$ je most v $G+(V,E)$, tak $T_{G-e}(x,y) = T_{G/e}(x,y)$.

### Pozorování

$e$ je smyčka v $G$, potom $T_{G-e}(x,y) = T_{G/e}(x,y)$, protože $G-e = G/e$.

## Věta

Nechť $G = (V,E)$ je multigraf. Potom:

1. pokud $E = \emptyset$, tak $T_{G}(x,y) = 1$
2. pokud $e \in E$, tak
	1. pokud $e$ je smyčka, tak $T_{G}(x,y) = y \cdot T_{G-e}(x,y) = y \cdot T_{G/e}(x,y)$
	2. pokud $e$ je most, tak $T_{G}(x,y) = x \cdot T_{G-e}(x,y) = x \cdot T_{G /e}(x,y)$\
	3. jinak $T_{G}(x,y) = T_{G-e}(x,y) + T_{G/e}(x,y)$.

### Důkaz:

1. Plyne z definice.
2. Volme $e \in E$ potom:

$$
T_{G}(x,y) = \sum_{F \subseteq E; e \notin F} \dots + \sum_{F \subseteq E; e \in F} \dots = S_{1} + S_{2}
$$

$$
S_{1} = \sum_{F \subseteq E; e \notin F}(x-1)^{r(E \setminus \{e\}) - r(F)} \cdot (y-1)^{F}
$$

$$
S_{2} = \sum_{F \subseteq E; e \in F}(x-1)^{r(E \setminus \{e\}) - r(F)} \cdot (y-1)^{F}
$$

$$
T_{G-e}(x,y) = \sum_{F \subseteq E \setminus \{e\}}(x-1)^{r(E \setminus \{e\}) - r(F)} \cdot (y-1)^{F}
$$

$$
T_{G/e}(x,y) = \sum_{F \subseteq E \setminus \{e\}}(x-1)^{r(E \setminus \{e\}) - r(F)} \cdot (y-1)^{F}
$$

- Pokud $e$ není most v $G$ tak $r(E) = r(E \setminus \{e\})$, tedy $S_{1} = T_{G-e}(x,y)$.
- Pokud $e$ je most v $G$, tak $r(E) = r(E \setminus \{e\}) + 1$ a tedy $S_{1} = (x-1) \cdot T_{G-e}(x,y)$.
- Pokud $e$ je smyčka, tak $S_{2} = (y-1) \cdot T_{G/e}(x,y)$.
- Pokud $e$ není smyčka, tak $S_{2} = T_{G/e}(x,y)$.
- Takže pak celkově podle toho co je $e$:

$$
T_{G}(x,y) = S_{1} + S_{2} =
\left\{
\begin{array}{ll}
\text{most} & (x-1)T_{G-e} + T_{G/e} = x \cdot T_{G/e} = x \cdot T_{G-e} \\
\text{smyčka} & (y-1)T_{G/e} + T_{G-e} = y \cdot T_{G-e} = y \cdot T_{G/e} \\
\text{jinak} & T_{G-e} + T_{G/e}
\end{array}
\right.
$$

$$
\Box
$$

## Definice:

**Obarvení multigrafu** $G=(V,E)$ pomocí $b$ barev je funkce $f: V \to \{1,2,3, \dots ,b\}$ taková, že žádná hrana $e \in E$ nemá oba konce zbarvené na stejnou barvu. Pokud $G$ obsahuje smyčku, tak $G$ nemá žádné obarvení.

## Definice:

**Chromatický polynom** $G= (V,E)$ je funkce $\chi_{G}(z): \mathbb{N}_{0} \to \mathbb{N}_{0}$, kde $\chi_{G}(z)$ je počet obarvení $G$ pomocí $z$ barev.

### *Cvičení:*

- *$G = K_{n}$ tak $\chi_{G}(z) = \binom{z}{n}n! = z \cdot (z-1) \cdot \dots \cdot (z - n +1)$*
- *$H = \bar{K_{n}}$ tak $\chi_{H}(z) = z^{n}$*

### Tvrzení

Nechť $G = (V,E)$ je multigraf, $z \in \mathbb{N}_{0}$. Potom:

1. pokud $E = \emptyset$, tak $\chi_{G}(z) = z^{|V|}$
2. pokud $e \in E$, tak:
	1. pokud $e$ je smyčka tak $\chi_{G}(z) = 0$
	2. jinak $\chi_{G}(z) = \chi_{G-e}(z) - \chi_{G/e}(z)$.

#### Důkaz:

1. Triviálně.
2. 1. Plyne z definice.
- 2. jsou dvě možnosti:
	- Více hran: pak musí být stejné obarvení a to také platí, protože $\chi_{G/e}(z) = 0$ kvůli smyčce.
	- Jen jedna hrana, tak musíme odebrat obarvení, které dají oboum vrcholům stejnou barvu a to je přesně $\chi_{G/e}(z)$.
$$
\Box
$$

### Tvrzení

$\forall$ multigraf $G$:

$$
\chi_{G}(z) = (-1)^{|V| - k(G)} \cdot z^{k(G)} \cdot T_{G}(1-z,0)
$$

#### Důkaz:

- *Druhou stranu výrazu si označíme jako $PS_{G}(z)$. Pak jsou dva možné postupy.*
1. Opraví se $PS_{G}(z)$ a zjistí se, že $PS_{G}(z) = \sum_{F \subseteq E}(-1)^{|F|} \cdot z^{k(V,F)}$. Pak pomocí **principu inkluze a exkluze** (*PIE*) ze zdůvodnní, že ten výraz je roven $\chi_{G}(z)$.
2. Zkontroluje se, že $\chi_{G}(z)$ splní stejné podmínky rekurze jako $PS_{G}(z)$.
- *V tomto případě volíme první možnost.*
- Označme $\bar{\chi_{G}}(z) := \sum_{F \subseteq E}(-1)^{|F|} \cdot z^{k(V,F)}$ **(1)**.
- *Pozorování:* Pokud $G$ obsahuje smyčku $e$, tak $\bar{\chi_{G}}(z) = 0$, protože:

$$
\bar{\chi_{G}}(z) = \sum_{F \subseteq E \setminus \{e\}}((-1)^{|F|} \cdot z^{k(V,F)} + (-1)^{|F \cup \{e\}} \cdot z^{k(V,F)})
$$

- **(1)** Předpokládejme, že $G$ neobsahuje smyčku. Označme si $\mathcal{F}:=$ množina všech funkcí $|V| \to \{1,2,\dots, z\}$ $|\mathcal{F}|= z^{|V|}$. Pro hranu $e = \{xy\} \in E$ označím $\hat{S_{e}}:= \{f \in \mathcal{F}; f(x) = f(y)\}$.

$$
\chi_{G}(z) = |\mathcal{F} \setminus \bigcup_{e \in E}\hat{S_{e}}| = |\mathcal{F}| - |\bigcup_{e \in E}\hat{S_{e}}| =^{\text{PIE}}
$$

$$
=^{\text{PIE}} |\mathcal{F}| - (\sum_{\emptyset \neq F \subseteq E} (-1)^{|F|}+1 |\bigcap_{e \in E} \hat{S_{e}}|) = z^{|V|} + \sum_{\emptyset \neq F \subseteq E}(-1)^{|F|}|\bigcap_{e \in F}\hat{S_{e}}| =(1)
$$

- Obecně $|\bigcup_{e \in E} \hat{S_{e}}| = z^{k(V,E)}$, protože v komponentě musí být jedna barva.

$$
(1) = \sum_{F \subseteq E}(-1)^{F} z^{k(V,F)} = \bar{\chi_{G}}(z)
$$

$$
\Box
$$

# Vytvořující funkce

### *Připomenutí:*

$$
(a_{0}, a_{1}, \dots) \subseteq \mathbb{R} \to A(x) = a_{0} + x a_{1} + x^{2} a_{2} + \dots
$$

## Definice:

**Formální mocninná řada** reprezentující posloupnost reálných čísel $(a_{0}, a_{1}, a_{2}, \dots)$ je výraz tvaru $a_{0} + a_{1}x+ a_{2}x^{2}+ \dots = \sum_{n=0}^{\infty}a_{n}x^{n}$.

### Značení:

$[|\mathbb{R}|]$ je množina formálních mocninných řad (v proměnné $x$ nad $\mathbb{R}$).

- Pro $A(x) \in \mathbb{R}[|x|], A(x) = a_{0} + a_{1}x + a_{2} x^{2} + \dots$ je $[x^{n}]A(x)$ koeficient u $x^{n}$ v $A(x)$, tj. $a_n$.

## Operace s formálními mocninnými řadami

- násobení

$$
\alpha \in \mathbb{R}: \alpha A(x) = (\alpha a_{0}) + (\alpha a_{1}) x + (\alpha a_{2})x^{2} + \dots
$$

- sčítání

$$
A(x), B(x) \in \mathbb{R}[|x|], A(x) = a_{0} + a_{1}x + \dots, B(x) = b_{0} +b_{1}x + \dots
$$

$$
A(x) + B(x) = (a_{0} + b_{0}) + (a_{1} + b_{1})x + (a_{2} + b_{2}) x^{2} + \dots
$$

$$
0 = 0 + 0x + 0x^{2} + 0x^{3} + \dots \text{ má vlastnost:}
$$

$$
\forall A \in \mathbb{R}[|x|]: A + 0 = 0 + A = A
$$

- násobení

$$
A(x) \cdot B(x) = c_{0} + c_{1}x + c_{2}x^{2} + c_{3} x^{3} + \dots \text{, kde}
$$

$$
c_{n} = \sum_{k=0}^{n}a_{k}b_{n-k}
$$

$$
1 = 1 + 0x + 0x^{2} + 0x^{3} + \dots \text{, má vlastnost:}
$$

$$
\forall A \in \mathbb{R}[|x|]: A \cdot 1 = 1 \cdot A = A
$$

### Fakt

- $(A+B)C = AC + BC$
- $\mathbb{R}[|x|]$ je *okruh* (tj. komutativní okruh s jednotkou).

## Definice:

Pro $A \in \mathbb{R}[|x|]$ označme $A^{-1}$ (nebo $\frac{1}{A}$) mocninnou řadu $B \in \mathbb{R}[|x|]$ splňující $AB = 1 \in \mathbb{R}[|x|]$. $A^{-1}$ je **multiplikativní inverze (převrácená hodnota) $A$**.

*Přednáška 13*

* * *

### *Poznámka:*

- *Ne všechny FMŘ mají inverzní prvky, například $0$.*

### Tvrzení

Pokud $\mathbb{R}[|x|] \ni A(x) = a_{0} + a_{1} x + a_{2} x^{2} + \dots$ má $A^{-1}(x)$ v tom případě je $A^{-1}(x)$ jednoznačná.

#### Důkaz:

- $a_{0} = 0 \Rightarrow A^{-1}(x)$ neexistuje.
- Předpoklad $a_{0} \neq 0$ hledejme $b_{0},b_{1},b_{2},\dots \in \mathbb{R}$ tak, aby

$$
\begin{array}{c}
(a_{0} + a_{1} x + a_{2} x^{2} + \dots)(b_{0} + b_{1} x + b_{2} x^{2} + \dots) = 1 \\
\Updownarrow \\
a_{0}b_{0} = 1 \\
a_{1}b_{0} + a_{0}b_{1} = 0 \\
a_{2}b_{0} + a_{1}b_{1} + a_{0}b_{2} = 0 \\
\vdots \\
\Updownarrow \\
b_{0} = \frac{1}{a_{0}} \\
b_{1} = - \frac{1}{a_{0}} \cdot a_{1}b_{0} \\
b_{2} = - \frac{1}{a_{0}}(a_{2}b_{0} + a_{1}b_{1}) \\
\vdots \\
\Box
\end{array}
$$

## Definice:

Nechť $A_{1}(x), A_{2}(x), A_{3}(x), \dots$ je posloupnost FMŘ řeknu, že součet $A_{1}(x) + A_{2}(x) + A_{3}(x) + \dots$ je **konvergentní**, pokud $\forall n \in \mathbb{N}_{0}$ existuje jen konečně mnoho indexů $j \in \mathbb{N}_{0}$ takových, že $[x^{n}]A_{j}(x) \neq 0$. V takovém případě pak definuji $A_{1}(x) + A_{2}(x) + A_{3}(x) + \dots$ jako FMŘ $S(x) \in \mathbb{R}[|x|]$ splňující (jen konečně mnoho nenul):

$$
\forall n \in \mathbb{N}_{0}: [x^{n}]S(x) := [x^{n}]A_{1}(x) + [x^{n}]A_{2}(x) + [x^{n}]A_{3}(x) + \dots
$$

<!-- Cvičení -->

## Definice:

Mějme $A(x) = a_{0} + a_{1}x + a_{2}x^{2} + \dots, B(x) = b_{0} + b_{1} x + b_{2} x^{2} + \dots \in \mathbb{R}[|x|]$, nechť $b_{0} = 0$. Potom
$$
A(B(x)) = a_{0} + a_{1}B(x) + a_{2}B^{2}(x) + a_{3}B^{3}(x) + \dots = \sum_{n = 0}^{\infty}a_{n}B^{n}(x)
$$

### *Poznámka:*

*Pokud $b_{0} =0$, tak $B(x) = b_{1}x + b_{2}x^{2} + b_{3}x^{3} + \dots = x (b_{1} + b_{2} x + b_{3} x^{2} + \dots)$ a tedy $B^{n}(x) = x^{n}(b_{1} + b_{2} x + b_{3} x^{2} + \dots)$ má nulové koeficienty stupňů $0,1,2,3,4, \dots, n-1$.*

- Součet $A(B(x)) = a_{0} + a_{1}B(x) + a_{2}B^{2}(x) + \dots$, protože $\forall n \in \mathbb{N}_{0}$ pouze sčítance $a_{0}, a_{1}B(x, a_{2} B^{2}(x), \dots, a_{n}B^{n}(x)$ mohou mít nenulový koeficient u $x^{n}$.

## Definice:

**Kombinatorická třída** je množina $\mathcal{A}$ taková, že každý prvek $\alpha \in \mathcal{A}$ má definovanou velikost $|\alpha| \in \mathbb{N}_{0}$ a pro každé $n \in \mathbb{N}_{0}, \mathcal{A}$ má jen konečně mnoho prvků velikosti $n$. Značení: $\mathcal{A}_{n}:=\{\alpha \in \mathcal{A}; |\alpha| = n\}$.

## Definice:

**Obyčejná vytvořující funkce** kombinační třídy $\mathcal{A}$, značená $\text{OVF}(\mathcal{A})$ je FMŘ $\sum_{n = 0}^{\infty} |\mathcal{A}_{n}|x^{n}$.

### Pozorování

$$
\text{OVF}(\mathcal{A}) = \sum_{\alpha \in \mathcal{A}} x^{|\alpha|}
$$

### Pozorování

Pokud $\mathcal{A}$ a $\mathcal{B}$ disjunktní kombinační třídy, tak $\text{OVF}(\mathcal{A} \cup \mathcal{B}) = \text{OVF}(\mathcal{A}) + \text{OVF}(\mathcal{B})$.

## Definice:

Nechť $\mathcal{A}, \mathcal{B}$ jsou kombinační třídy. Potom $\mathcal{A} \times \mathcal{B} := \{(\alpha,\beta); \alpha \in \mathcal{A}, \beta \in \mathcal{B}\}$, kde $|(\alpha, \beta)| = |\alpha| + |\beta|$.

### Pozorování

$$
\text{OVF}(\mathcal{A} \times \mathcal{B}) = \text{OVF}(\mathcal{A}) \cdot \text{OVF}(\mathcal{B})
$$

#### Důkaz:

$$
\text{OVF}(\mathcal{A} \times \mathcal{B}) = \sum_{n=0}^{\infty} |(\mathcal{A} \times \mathcal{B})_{n}|x^{n} = \sum_{n=0}^{\infty}\left(\sum_{k=0}^{n}|\mathcal{A}_{k}| \cdot |\mathcal{B}_{n-k}|\right)x^{n} =
$$

$$
= \sum_{n=0}^{\infty} \sum_{k=0}^{n} |\mathcal{A}_{k}|x^{k} \cdot |\mathcal{B}_{n-k}|x^{n-k} = \text{OVF}(\mathcal{A}) \cdot \text{OVF}(\mathcal{B})
$$

$$
\Box
$$

### Pozorování

$$
\mathcal{A}^{k} = \mathcal{A} \times \mathcal{A} \times \dots \times \mathcal{A}, \text{OVF}(\mathcal{A}^{k}) = \text{OVF}(\mathcal{A})^{k}
$$

## Definice:

Nechť $\mathcal{A}$ je kombinační třída taková, že $\mathcal{A}_{0} = \emptyset$, potom:
$$
\text{Seq}(\mathcal{A}) = \{\emptyset\} \cup \mathcal{A}^{1} \cup \mathcal{A}^{2} \cup \dots
$$
tj. množina všech konečných posloupností prvků $\mathcal{A}$.

### Pozorování

$$
\text{OVF}(\text{Seq}(\mathcal{A})) = 1 + \text{OVF}(\mathcal{A}) + \text{OVF}(\mathcal{A})^{2} + \dots = \frac{1}{1 - \text{OVF}(\mathcal{A})}
$$

<!-- Příklady -->

## Definice:

**Labelovaná kombinatorická třída** je množina $\mathcal{A}$, jejíž každý prvek $\alpha$ má danou množinu vrcholů $V(\alpha)$, což je konečná množina $\mathbb{N}$, kde platí následující:

1. Označíme-li $\mathcal{A}_{V} := \{\alpha \in \mathcal{A}: V(\alpha) = V\}$, pak pro každé $V \subseteq \mathbb{N}$ konečné platí $|\mathcal{A}_{V}| < + \infty$.
2. Pro dvě konečné množiny vrcholů $V,W \subseteq \mathbb{N}$ takové, že $|V| = |W|$, platí $|\mathcal{A}_{V}| = |\mathcal{A}_{W}|$
- Značení: $\mathcal{A}_{n} := \mathcal{A}_{\{1,2,3, \dots , n\}}$ a $\mathcal{A}_{\ast} := \mathcal{A}_{0} \cup \mathcal{A}_{1} \cup \mathcal{A}_{2} \cup \dots$ pro $\alpha \in \mathcal{A}:|\alpha| := |V(\alpha)|$.

## Definice:

**Exponenciální vytvořující funkce** labelované kombinatorické třídy $\mathcal{A}$, značená $\text{EVF}(\mathcal{A})$ je
$$
\sum_{n=0}^{\infty}|\mathcal{A}_{n}|\frac{x^{n}}{n!} = \sum_{\alpha \in \mathcal{A}_{\ast}} \frac{x^{|\alpha|}}{|\alpha|!}
$$

### Pozorování

Pro labelované kombinatorické třídy $\mathcal{A}, \mathcal{B}$, které jsou disjunktní, platí $\text{EVF}(\mathcal{A} \cup \mathcal{B}) = \text{EVF}(\mathcal{A}) + \text{EVF}(\mathcal{B})$.

## Definice:

**Labelovaný součin** $\mathcal{A} \otimes \mathcal{B}$ labelovaných kombinačních tříd $\mathcal{A}, \mathcal{B}$ je labelovaná kombinační třída $\{(\alpha, \beta); \alpha \in \mathcal{A}, \beta \in \mathcal{B}, V(\alpha) \cap V(\beta) = \emptyset\}$, kde $V((\alpha, \beta)) := V(\alpha) \cup V(\beta)$.

<!-- Příklady -->

### Tvzrení

$$
\text{EVF}(\mathcal{A} \otimes \mathcal{B}) = \text{EVF}(\mathcal{A}) \cdot \text{EVF}(\mathcal{B})
$$

#### Důkaz:

- *Levou stranu si označím jako $LS(x)$ a pravou jako $PS(x)$.*
- $\forall n \in \mathbb{N}_{0}: [x^{n}] LS$ jestli se rovná $[x^{n}] PS$

$$
[x^{n}]LS = \frac{1}{n!} |(\mathcal{A} \otimes \mathcal{B})_{n}| = \frac{1}{n!} \sum_{V \subseteq \{1,2,3, \dots ,n\}} |\mathcal{A}_{V}| |\mathcal{B}_{\{1,\dots,n\} \setminus V}| =
$$

$$
= \frac{1}{n!} \sum_{k=0}^{n} \binom{n}{k} |\mathcal{A}_{k}| |\mathcal{B}_{n-k}| = \sum_{k = 0}^{n} \frac{|\mathcal{A}_{k}|}{k!} \frac{|\mathcal{B}_{n-k}|}{(n-k)!} =
$$

$$
= \sum_{k=0}^{n} [x^{k}]\text{EV}(\mathcal{A})[x^{n-k}]\text{EVF}(\mathcal{B}) = PS(x)
$$

$$
\Box
$$

<!-- Příklady -->

*Přednáška 14*

* * *

# Akce grup a počítání orbit

<!-- Příklady -->

### *Připomenutí*

Grupa $\Gamma$ je multiplikativní: $\alpha, \beta \in \Gamma$ tak i $\alpha\beta \in \Gamma$ součin je v $\Gamma$.

- $1_{\Gamma}$ neutrální prvek v $\Gamma$ ($\forall \alpha \in \Gamma: 1_{\Gamma} \alpha = \alpha 1_{\Gamma} = \alpha$)
- $\alpha^{-1}$ inverzní prvek k $\alpha \in \Gamma$ ($\alpha \alpha^{-1} = \alpha^{-1} \alpha = 1_{\Gamma}$)

## Definice:

**Akce** grupy $\Gamma$ na množině $\mathcal{M}$ je binární operace $(\_ \bullet \_):\Gamma \times \mathcal{M} \to \mathcal{M}$. Splňující:

1. $\forall p \in \mathcal{M}: 1_{\Gamma} \bullet p = p$
2. $\forall \alpha, \beta \in \Gamma, \forall p \in \mathcal{M}: \alpha \bullet (\beta \bullet p) = (\alpha \beta)\bullet p$.

### Pozorování

$\bullet$ je akce $\Gamma$ na $\mathcal{M}$:

1. pokud pro $\alpha \in \Gamma, p \in \mathcal{M}: \alpha \bullet p = q \in \mathcal{M}$, pak $(\alpha^{-1})\bullet q = p$. Protože $(\alpha^{-1}) \bullet q = (\alpha^{-1} \alpha) \bullet p 1_{\Gamma} p = p$
2. pro pevné $\alpha \in \Gamma$, funkce $p \to \alpha p$ je bijekce $\mathcal{M} \to \mathcal{M}$

<!-- Příklad -->

## Definice:

Mějme akci $\Gamma$ na $\mathcal{M}$. Prvky $p,q \in \mathcal{M}$ jsou **ekvivalentní** (vůči $\bullet$) pokud $\exists \alpha \in \Gamma: \alpha \bullet p = q$. Značení $p \simeq q$.

### Pozorování

$\simeq$ je ekvivalence na množině $\mathcal{M}$.

- $p \simeq p: 1_{\Gamma} \bullet p = p$
- $p \simeq q \Rightarrow q \simeq p: \alpha \bullet p = q \Rightarrow (\alpha^{-1}) \bullet q = p$
- $(p \simeq q \land q \simeq r) \Rightarrow p \simeq r: (\alpha \bullet p = q \land \beta \bullet q = r) \Rightarrow (\beta \alpha) \bullet p = r$

## Definice:

Třídy $\simeq$ se nazývají **orbity**, orbitu obsahující $p \in \mathcal{M}$ značím $[p]$ (nebo $[p]_{\mathcal{M},\bullet})$. Množinu orbit značím $\mathcal{M}/\Gamma$.

## Definice:

**Stabilizátor** prvku $p \in \mathcal{M}$, značený $\text{Stab}(p)$, je $\{\alpha \in \Gamma: \alpha \bullet p = p\}$.

### Pozorování

$\text{Stab}(p)$ je podgrupa $\Gamma$.

## Definice:

**Množina pevných bodů** pro $\alpha \in \Gamma$, značená $\text{Fix}(\alpha)$, je $\{p \in \mathcal{M}, \alpha \bullet p = p\}$.

<!-- Příklady -->

## Lemma (*o orbitě a stabilizátoru*)

Nechť $\Gamma$ je konečná grupa s akcí na $\mathcal{M}$. Potom
$$
\forall p \in \mathcal{M}: |[p]| \cdot |\text{Stab}(p)| = |\Gamma|
$$

### Důkaz:

- Volme $p \in \mathcal{M}$, nechť $k := |[p]|, [p] = \{q_{1},q_{2},\dots,q_{k}\}$, kde $q_{1}:=p$.
- Označme $\Gamma_{i} := \{\alpha \in \Gamma: \alpha \bullet p = q_{i}\}, i = 1,2,\dots,k$.
- Tedy $\Gamma_{1} = \text{Stab}(p)$. Zjevně $\Gamma_{1}, \Gamma_{2}, \dots , \Gamma_{k}$ jsou disjunktní a jejich sjednocení je $\Gamma$.
- Tvrdím, že $|\Gamma_{1}| = |\Gamma_{2}| = \dots = |\Gamma_{k}|$.
- Volme $i\geq 2$ a dokážeme $|\Gamma_{1}| = |\Gamma_{i}|$.
- Jistě $\Gamma_{i}$ je neprázdná, protože jinak by $p \not\simeq q_{i}$ a $q_{i} \notin [p]$.
- Volme libovolné $\alpha_{0} \in \Gamma_{i}$.
- Uvážím zobrazení $\Phi : \Gamma_{1} \to \Gamma_{i}$ definované pro $\beta \in \Gamma_{1}: \Phi(\beta) = \alpha_{0} \beta$.
- Tvrdím, že $\Phi$ je bijekce $\Gamma_{1} \to \Gamma_{i}$.
- Ověřme:
1. $\forall \beta \in \Gamma_{1} : \Phi(\beta) \in \Gamma_{i}$
$$
\Phi(\beta) \bullet p = (\alpha_{0}\beta) \bullet p = \alpha_{0} \bullet (\beta \bullet p) = q_{i}
$$
2. $\Phi$ je prosté
	- Předpokládejme, že $\exists \beta_{1},\beta_{2} \in \Gamma_{1}: \Phi(\beta_{1}) = \Phi(\beta_{2})$, tj. $\alpha_{0} \beta_{1} = \alpha_{0}\beta_{2}$, tj. $\beta_{1} = \beta_{2}$.
3. $\Phi$ je na
	- Volme $\gamma \in \Gamma_{i}$ hledejme $\beta \in \Gamma_{1}$ t.ž.

$$
\Phi(\beta) = \gamma \Leftrightarrow \alpha_{0} \beta = \gamma \Leftrightarrow \beta = \alpha_{0}^{-1} \gamma \in \Gamma_{1}
$$

$$
\Box
$$

## Věta (*"Burnsideovo lemma", "Cauchy-Froheriova fromule"*)

Nechť $\Gamma$ je koneřná grupa s akcí na množině $\mathcal{M}$. Potom:

1. (*jednoduchá verze*) pokud $\mathcal{M}$ je konečná, tak $|\mathcal{M}/\Gamma| = \frac{1}{|\Gamma| }\sum_{\alpha \in \Gamma} |\text{Fix}(\alpha)|$. Nebo-li "počet orbit je průměrný počet bodů".
2. (*obecná verze*) Nechť má každá orbita $o \in \mathcal{M}/\Gamma$ přiřazenou váhu $||o|| \in \mathbb{N}_{0}$ tak, že pro každé $n \in \mathbb{N}_{0}$ existuje jen konečně mnoho orbit váhy $n$. Potom:

$$
\sum_{o \in \mathcal{M}/\Gamma}x^{||o||} = \frac{1}{|\Gamma|}\sum_{\alpha \in \Gamma} \sum_{p \in \text{Fix}(\alpha)} x^{||[p]||}
$$

### Důkaz:

- *Levou stranu si označím $LS(x)$ a pravou $PS(x)$.*
- $2 \Rightarrow 1$ Zvolme $||o|| = 0$ pro každé $o \in \mathcal{M}/\Gamma$.
- Definujeme $\mathcal{D} := \{(\alpha ,p) \in \Gamma \times \mathcal{M}; \alpha \bullet p = p\}$ a $S = \sum_{(\alpha, p) \in \mathcal{D}}x^{||[p]||}$. Pak počítáme dvěma způsoby.

$$
(1) S = \sum_{\alpha \in \Gamma} \sum_{p \in \mathcal{M}; (\alpha,p) \in \mathcal{D}} x^{||[p]||} = \sum_{\alpha \in \Gamma}\sum_{p \in \text{Fix}(\alpha)} x^{||[p]||} = |\Gamma| \cdot PS(x)
$$

$$
(2) S = \sum_{p \in \mathcal{M}} \sum_{\alpha \in \Gamma; (\alpha, p) \in \mathcal{D}} x^{||[p]||} = \sum_{p \in \mathcal{M}} |\text{Stab}(p)| \cdot x^{||[p]||} =
$$

$$
= \sum_{p \in \mathcal{M}} \frac{|\Gamma|}{||[p]||}x^{||[p]||} = \sum_{o \in \mathcal{M}/\Gamma}\sum_{p \in o} \frac{|\Gamma|}{|o|}x^{||o||} = |\Gamma| \sum_{o \in \mathcal{M}/\Gamma}x^{||o||} = |\Gamma| \cdot LS(x)
$$

$$
\Box
$$
