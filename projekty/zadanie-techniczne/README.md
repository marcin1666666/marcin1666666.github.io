# Zadanie rekrutacyjne Frontend 11/2017

Pracę nad zadaniem rozpocząłem od przemyślenia tematu, układu i zadań grup oraz poszczególnych elementów w tych grupach. Następnie kiedy miałem już koncepcję strony przystąpiłem do pozyskania z pliku projektu (psd) potrzebnych informacji (np: kolory, czcionki itd.) oraz grafik do projektu. Mając gotowe potrzebne do pracy materiały mogłem przystąpić do programowania strony.

## Programowanie strony
Programowanie strony wyglądało następująco:
  - Podzieliłem stronę na dwie części:
```sh
"side_section" + "main"
```
Ogólnie do rozmieszczenia elementów na stronie można użyc paru sposobów, natomiast ja wybrałem połaczenie właściwości:
```sh
"width" oraz "float"
```
  - Następnie w side_section umieściłem menu navigacyjne oraz droopboxa z 2 linkami informacynymi. Menu posiada "pod menu", które rozwija sie po kliknięciu w element o nazwie "Oferta". Do uzyskania takiego układu menu i "pod menu" użyłem pozycji:
```sh
"relative" oraz "absolute" 
```

 Do utworzenia "szarych plusów" pomiędy kafelkami "pod menu" użyłem pseudo-elementów:
```sh
"::after" oraz "::before"
```

  - Podobnie do utworzenia "strzałek" z szarym "borderem" w "dymku" tekstowym  tooltipa użyłem pseudo-elementów:
```sh
"::after" oraz "::before"
```

 - Dolną część menu pt: "Aktualności" wykonałem w formie:
```sh
"dropdown menu"
```
Z dwoma linkami do wyboru.

  - Do określenia szrekości elementów używałem głównie jednostek: "%" oraz "vw", ktore pomagają skalować elemen tak by wyswietlal sie wg. rozdzielczości.
  - Do dokumentu pobrałem i załączyłem potrzebne fonty regułą: 
```sh
"@font-face "
```