# Matfyz

Tady je menší rozcestník pro matfyzácké věci. Jak už moje zápisky nebo odkazy na předměty, které mám zapsané.

## Zápisky

Občas stihnu sepsat nějaké zápisky z přednášky a pokud stojí (aspoň trochu) za to, tak se tady budou nacházet. Veškeré texty lze najív v repozitáři na [GitHubu](https://github.com/metury/notes).

- [Flows, paths and cuts](./mff/fpc.pdf)
- [Geometric Representations of Graphs](./mff/grg.pdf)
- [Kombinatorika a grafy](./mff/kg.pdf)
- [Probability and statistics 2](./mff/past-ii.pdf)
- [Polyhedral combinatorics](./mff/polyhedra.pdf)
- [Teorie množin](./mff/temno.pdf)

## Odkazy na předměty

| Předmět                                              | Odkazy |
|:----------------------------------------------------:|:------:|
| **2425 - Zimní semestr**                             | **--** |
| Constraint programming                               | [Web](https://ktiml.mff.cuni.cz/~bartak/podminky/) [Cvičení](https://jbulin.github.io/teaching/fall/nopt042/) |
| Introduction to Parameterized Algorithms             | [Web](https://research.koutecky.name/db/teaching:intro_par_alg2324) [Kniha](https://www.mimuw.edu.pl/~malcin/book/parameterized-algorithms.pdf) [Cvičení](https://iuuk.mff.cuni.cz/~tung/teaching/fpt-ws2324/) |
| Programování v jazyce Rust                           | [Web](https://d3s.mff.cuni.cz/teaching/nprg082/) |
| **2324 - Letní semestr**                             | **--** |
| Teorie Matroidů                                      | [Web](https://iuuk.mff.cuni.cz/~pangrac/vyuka/) [Cviceni](https://kam.mff.cuni.cz/~cerny/teach/23-24/matroids.html) |
| Datove struktury 2                                   | [Web](https://mj.ucw.cz/vyuka/2324/ds2/) [Skripta](https://mj.ucw.cz/vyuka/dsnotes/ds.pdf) |
| Matematické programování a polyedrální kombinatorika | [Web](https://kam.mff.cuni.cz/~kolman/matprog23.html) [úkol](https://iti.mff.cuni.cz/series/2013/601.pdf) |
| Matematické struktury                                | [Web](https://kam.mff.cuni.cz/~klazar/MSTR24.html) |
| Grafové minory a stromové dekompozice                | [Web](https://kam.mff.cuni.cz/~fiala/index.shtml.cs) [Skripta](https://kam.mff.cuni.cz/~fiala/tw.pdf) |
| Grafové algoritmy 2                                  | [Web](https://mj.ucw.cz/vyuka/2324/ga2/) [Skripta](https://mj.ucw.cz/vyuka/ga/ga.pdf) a [Linear-Time Pointer-Machine Algorithms ](http://adambuchsbaum.com/papers/ptrs-stoc98.pdf)|
| Geometrická reprezentace grafů 2                     | [Moodle](https://dl1.cuni.cz/course/view.php?id=16103) |
| **2324 - Zimní semestr**                             | **--** |
| ~~Pravděpodobnostní techniky~~                       | ~~[Web](https://kam.mff.cuni.cz/~tyomkyn/teaching/PT/PT.html) [Skripta](https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf) [Úkoly](https://kam.mff.cuni.cz/~dbulavka/teaching/ws2324/pt.html)~~ |
| Barevnost grafů                                      | [Web](https://iuuk.mff.cuni.cz/~rakdver/index.php?which=uceni&subject=bar) |
| Geometrická reprezentace grafů                       | [Zápisky na SISu](https://is.cuni.cz/studium/predmety/index.php?id=b1110fec60a34e4c9eff4fbd6f73920d&tid=&do=predmet&kod=NDMI037&skr=2023&fak=11320) |
| Datove struktury                                     | [Web](https://mj.ucw.cz/vyuka/2324/ds1/) [Skripta](https://mj.ucw.cz/vyuka/dsnotes/ds.pdf) |
| Základy složitosti a vyčíslitelnosti                 | [Skripta](https://ktiml.mff.cuni.cz/~kucerap/NTIN090/NTIN090-poznamky.pdf) [Cvičení](https://kti.mff.cuni.cz/~maj/) [Moodle](https://dl1.cuni.cz/course/view.php?id=10131) |
| Grafové algoritmy                                    | [Web](https://mj.ucw.cz/vyuka/2324/ga/) [Skripta](https://mj.ucw.cz/vyuka/ga/ga.pdf) a [ET]([90](https://mj.ucw.cz/papers/saga/saga.pdf#page=90)) |
| Kombinatorika a grafy 3                              | [Web](https://iuuk.mff.cuni.cz/~rakdver/index.php?which=uceni&subject=kg3) [úkoly](http://gaubian.xyz/) |
| Intervalove metody                                   | [Web](https://kam.mff.cuni.cz/~hladik/IA/) [Skripta](https://kam.mff.cuni.cz/~hladik/IA/text_ia.pdf) |
| Toky, cesty a řezy                                   | [Web](https://kam.mff.cuni.cz/~kolman/tokyrezy23.html) |

## Další užitečné odkazy

- [Průvodce labyrintem algoritmů](https://pruvodce.ucw.cz/)
- Dobré poznámky má také [Tomáš Sláma](https://slama.dev/)
- Některé odkazy lze najít na [Matfyzácké wiki](https://wiki.matfyz.cz/Home)

## CVRP

- [Presentation](./mff/cvrp/cvrp-presentation.pdf)
- [Text](./mff/cvrp/cvrp.pdf)
- [Rust parser](./mff/cvrp/main.rs)

```rust
{{#include ./mff/cvrp/main.rs:225:295}}
```

- [Shell script](./mff/cvrp/solver.sh)

```sh
{{#include ./mff/cvrp/solver.sh:52:112}}
```

- [Python checker](./mff/cvrp/checker.py)

```python
{{#include ./mff/cvrp/checker.py:48:55}}
```

## Thesis links

- [My notes on connected cuts](./mff/connected-cuts.pdf)
- [Max cut](https://dl.acm.org/doi/pdf/10.1145/195058.195216)
- [Min max and small set expansion](https://epubs.siam.org/doi/abs/10.1137/120873996)
- [\\(s-t\\) connected cuts](https://www.researchgate.net/publication/2513735_Multicommodity_Flows_and_Approximation_Algorithms)
- [\\(k\\) cuts](https://arxiv.org/abs/1807.07143v2) a [PDF](https://arxiv.org/pdf/1807.07143v2)
- [Petr Kolman STC](https://kam.mff.cuni.cz/~kolman/papers/STC-2024.pdf)
- [Petr Kolman - other aproximation](https://kam.mff.cuni.cz/~kolman/papers/stc-ext-arx.pdf)
