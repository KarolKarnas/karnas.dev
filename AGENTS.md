# Zasady pracy nad karnas.dev

## Cel i charakter projektu

To osobiste portfolio Karola Karnasa z blogiem, inspirowane Visual Studio Code
i motywem Monokai. Interfejs edytora jest częścią tożsamości strony: explorer,
zakładki plików, breadcrumbs, podział edytora, terminal i pasek statusu mają
działać jako spójna całość.

- Zachowuj tę koncepcję przy zmianach UI. Rozwijaj istniejący język wizualny,
  zamiast wprowadzać niezależny motyw lub przebudowywać stronę w landing page.
- Treści strony są po angielsku (`lang="en"`). Komunikuj się z użytkownikiem
  w języku jego wiadomości.
- Aktualne pozycjonowanie autora to **Full-stack Engineer** z hasłem
  **From client requirements to production.** Specjalizacje: **Backend systems ·
  Modern interfaces · AI integrations**. `src/utils/profile.ts` jest wspólnym
  źródłem roli, hasła i ogólnego opisu dla metadanych, stopki, sidebara i terminala.
  Nie zmieniaj faktów o autorze,
  doświadczeniu, klientach, kursach ani wynikach projektów bez podstawy w zadaniu.
- Pokazuj zakres od rozmowy z klientem przez interfejs i backend po testy oraz
  wdrożenie. Projekt „Housing Platform for HOME” opisuje pracę przez Kruko dla
  HOME z El Paso. DMS jest częścią szerszej platformy; zachowuj slug
  `dms-housing-authority` dla istniejących linków. Zachowuj faktyczny zakres
  konkretnego projektu: wkład w portal i DMS obejmuje React,
  Next.js i Django; Data Bid Machine opisuje wkład backendowy. Oddzielaj wkład
  autora od architektury i pracy całego zespołu. Nie dopisuj C# ani .NET jako
  umiejętności autora: zmiany w tym ekosystemie były wspomagane przez AI i nie
  stanowią deklaracji znajomości języka.
- O asystentach kodowania pisz krótko w About, z naciskiem na decyzje, przegląd
  zmian i weryfikację autora. Herdr i szczegóły własnego orkiestratora pozostaw
  na osobny, konkretny wpis, gdy autor zdecyduje się go przygotować. Istniejące
  recenzje kursów AI mogą omawiać narzędzia z ich programu.
- Meggie M. Art to side project dla niezależnej ilustratorki (żony autora),
  nie studio ani zespół. Ilustracje i oryginalny znak są jej autorstwa;
  wkład Karola obejmuje stronę, CMS i wdrożenie. Publiczny kontakt korzysta
  z e-maila i Google Forms; nie przedstawiaj historycznego kalkulatora ani
  backendu zgłoszeń jako aktywnych funkcji.
- Przed edycją sprawdź `git status` i zachowaj zastane zmiany. Ogranicz zakres
  do zadania; nie łącz go z masowym formatowaniem ani niepowiązanymi poprawkami.

## Stos i uruchomienie

Źródłem prawdy o wersjach są `package.json` i `package-lock.json`.
Projekt używa Next.js App Router, Reacta, TypeScriptu w trybie strict,
Sass/CSS Modules, gray-matter i Zod. Treść jest lokalna; nie ma CMS,
bazy danych ani konfiguracji logowania. Vercel jest opisanym miejscem wdrożenia.

Używaj npm i Node.js >=22. Zachowuj jeden lockfile; po zmianie zależności
aktualizuj również `package-lock.json`.

```bash
npm ci
npm run dev
npm run gen:nav
npx tsc --noEmit
NEXT_PUBLIC_BASE_URL=https://www.karnas.dev npm run build
npm start
```

- `npm run dev` uruchamia Turbopack; `npm start` wymaga gotowego buildu.
- `predev` i `prebuild` uruchamiają generator nawigacji. To nie jest watcher:
  po zmianie frontmatter podczas pracy serwera uruchom `npm run gen:nav` ponownie.
- `NEXT_PUBLIC_BASE_URL` jest używane przez `sitemap.ts` i `robots.ts`.
  Ustaw właściwy pełny adres dla docelowego środowiska; bez niego build może
  przejść, ale adresy w tych plikach będą zawierać `undefined`.
- Root layout pobiera Roboto Mono przez `next/font/google`; czysty build może
  wymagać dostępu do Google Fonts. Obrazy pochodzą m.in. z Cloudinary.
- Przy aktualizacjach narzędzi sprawdzaj peer dependencies. Obecnie TypeScript
  jest na 6.x ze względu na parser `typescript-eslint`, ESLint na 9.x ze względu
  na wtyczki React/import/accessibility, a `@types/node` odpowiada linii Node 22.
  Ponownie sprawdź ograniczenia, zanim przejdziesz na kolejną główną wersję.

## Mapa repozytorium

| Miejsce | Odpowiedzialność |
| --- | --- |
| `src/app/layout.tsx` | Font, globalne SCSS, metadane, Analytics, `AppearanceProvider` i `SplitViewProvider` |
| `src/app/(main)/layout.tsx` | Powłoka edytora: sidebar, header, zawartość, terminal i status bar |
| `src/app/(main)/` | Home, about, skills, contact, blog i dwie sekcje projektów |
| `src/app/(embedded)/embedded/` | Wersje stron dla iframe prawego panelu, bez powłoki głównego edytora |
| `src/app/_components/` | Współdzielone komponenty wraz z lokalnymi plikami `.module.scss` |
| `src/app/scss/` | Kolory Monokai, spacing, font sizes, breakpointy, mixiny i reset globalny |
| `_posts/`, `_projects/`, `_professional/` | Blog, projekty osobiste i projekty zawodowe w plikach `.md` |
| `src/lib/api.ts` | Serwerowy odczyt plików, parsowanie frontmatter, walidacja Zod, sortowanie |
| `src/utils/schemas.ts`, `types.ts` | Schematy treści i typy aplikacji |
| `scripts/gen-nav.mjs` | Generator menu z frontmatter |
| `src/utils/generated-nav.ts` | Wersjonowany wynik generatora; nie edytuj ręcznie |
| `src/utils/constants.tsx` | `SIDENAV_ITEMS`, sociale, grupy umiejętności i cytat |
| `src/utils/info.tsx` | Dane widoku „about.json” i deklaracja danych kontaktowych |
| `src/utils/profile.ts` | Wspólna rola, hasło, specjalizacje i opis autora |
| `src/icons/` | Ikony technologii, brandu, sociali i UI oraz eksporty zbiorcze |
| `src/app/api/content/route.ts` | Publiczne dane wpisów i projektów dla terminala |
| `src/app/_components/appearance/` | Motywy, ustawienia, inicjalizacja przed pierwszym renderem i synchronizacja iframe |
| `public/` | Lokalne zdjęcia, ilustracje, placeholdery i favicony |

## Treść, ikony i nawigacja

1. Dodawaj treść w odpowiednim katalogu `.md`, wzorując się na istniejącym wpisie
   i schemacie w `src/utils/schemas.ts`. Nazwa pliku bez `.md` jest slugiem URL;
   zachowuj istniejące slugi przy zmianach tytułów.
2. Wspólne wymagane pola frontmatter: `author_name`, `title`, `sub_title`,
   `content_title`, `main_image`, `category`, `tags`, `date`, `fields`.
   Projekty wymagają też `main_icon` i `icons_stack`; `stack` jest opcjonalne.
   `live_demo` i `repo` są opcjonalne i domyślnie stają się pustym stringiem.
3. Używaj dat jako cytowanych stringów ISO. Odczyt treści i generator sortują
   daty malejąco przez porównanie stringów; zachowuj spójny format.
4. Ustaw `nav_title` i `nav_icon`. Schemat dopuszcza ich brak, ale generator
   pomija wtedy wpis z ostrzeżeniem. `nav_title` jest etykietą pliku w edytorze,
   np. `about.json` lub `hands_on_llms.epub`, a niekoniecznie tytułem artykułu.
5. `nav_icon` i elementy `icons_stack` muszą dokładnie odpowiadać nazwom eksportów
   z `src/icons/index.ts`, np. `nextJs`, `python`, `typeScriptAlt`. Zod sprawdza
   tu stringi, nie istnienie ikon; błędna nazwa może zepsuć renderowanie.
6. Nowa ikona powinna pasować do kontraktu `IconText` (`icon` i `text`). Dodaj
   eksport w indeksie właściwej kategorii i w `src/icons/index.ts`. Dla SVG
   z gradientami lub maskami stosuj unikalne ID, np. `useId()` jak w `python.tsx`.
7. Uruchom generator i uwzględnij zmiany `generated-nav.ts`. Menu zasila także
   home, zakładki, breadcrumbs i język wyświetlany na pasku statusu.

Pliki `.md` mają YAML frontmatter oraz tekst po zamykającym `---`. Szczegółowe
sekcje artykułu są przechowywane w `fields`: `title`, `content`, `second_content`,
`list`, `image`, `links`. `DetailFields` renderuje je wspólnie dla bloga i projektów.
Główna grafika wpisu jest domyślnie widoczna w całości (`main_image_fit: "contain"`).
Dla świadomego szerokiego kadru zdjęcia ustaw `main_image_fit: "cover"`; nie kadruj
w ten sposób okładek książek i grafik z tekstem. Kliknięcie otwiera lightbox.
Obrazy galerii oznaczaj `data-lightbox` na linku do oryginału, wewnątrz
`data-image-gallery`. Galeria obejmuje okładkę i obrazy sekcji bieżącego wpisu/projektu;
strzałki zmieniają obraz, Escape zamyka. W iframe lightbox otwiera się w rodzicu
po wiadomości z potwierdzonego same-origin iframe. Modyfikatory kliknięcia nadal
pozwalają otworzyć oryginał w nowej karcie.
Body jest obecnie renderowane w `<p>` jako tekst. `src/lib/markdownToHtml.ts`
istnieje, ale nie jest używany: nie zakładaj, że Markdown, HTML czy fenced code
blocks zostaną sformatowane bez zmiany ścieżki renderowania.

`src/lib/api.ts` używa `fs` i waliduje dane podczas odczytu. Trzymaj odczyt
plików po stronie serwera; dane klienta dostarczaj przez props lub `/api/content`.
Dodając sekcję lub trasę, sprawdź również `SIDENAV_ITEMS`, dispatcher i parametry
statyczne `/embedded/[...slug]`, komendy terminala, API treści oraz sitemapę.
Dynamiczne strony używają asynchronicznego `params` i `generateStaticParams`.

## Styl i komponenty

- Zachowuj Roboto Mono, ciemne tła Monokai, kolorowe ikony plików, kompaktowe
  zakładki i stany aktywne/hover. Korzystaj z tokenów w `src/app/scss/` przez
  Sass `@use`; nowe style komponentu umieszczaj obok niego w CSS Module.
- Layout powłoki dostosowuj do viewportu. Zawartość stron i kart dostosowuj
  przede wszystkim do szerokości kontenera (`cq-*` w `_breakpoints.scss`),
  ponieważ panel podziału może być wąski nawet na dużym monitorze.
- Zachowuj `container-type: inline-size`, `min-width: 0`, ograniczenia overflow
  i osobne obszary scrollowania. Główny dokument ma zablokowany scroll,
  a lewy panel i dokument iframe przewijają się niezależnie.
- JS używa `LG_BREAKPOINT = 1024` z `src/utils/breakpoints.ts`; SCSS ma też
  inne progi dla konkretnych elementów. Przy zmianie responsywności sprawdzaj
  obie warstwy zamiast zakładać jeden wspólny próg.
- Współdziel istniejące `ProjectList`, `ProjectDetail`, `DetailFields`,
  `AuthorFooter`, nagłówki i `StackIcons`, zamiast kopiować ich implementację.
- Nowe komponenty domyślnie pozostawiaj serwerowe. `"use client"` dodawaj tam,
  gdzie potrzebne są hooki, eventy lub API przeglądarki. Używaj aliasu `@/` do `src/`.
- Styl TypeScriptu: dwa odstępy, podwójne cudzysłowy, bez średników,
  zgodnie z `prettier.config.cjs`. Pliki i katalogi komponentów używają kebab-case.
  Konfiguracja Prettiera zawiera opcje sortowania importów, ale nie ma aktywnej
  wtyczki (`plugins: []`); nie zakładaj, że importy sortują się automatycznie.
- Zachowuj dostępność: etykiety przycisków ikonowych, klawiaturę, focus,
  czytelność tekstu i alternatywne opisy obrazów. Nie dodawaj zagnieżdżonych linków.
  Dla nowych hostów `next/image` zaktualizuj `remotePatterns` w `next.config.js`;
  obecnie są tam `res.cloudinary.com` i `raw.githubusercontent.com`.

## Zachowania edytora wymagające uwagi

- **Foldery explorera:** na home domyślnie zwijaj professional projects, side projects
  i blog przy pierwszej wizycie. Ręczny stan każdego folderu zapisuj pod kluczem
  `explorer-folders`. Wejście do sekcji lub jej wpisu rozwija odpowiadający folder,
  bez zamykania pozostałych. Dotyczy to także zakładek, terminala i prawego panelu.
  Ręczne zwinięcie utrzymuj do kolejnej nawigacji do tej sekcji; sam rerender i
  odświeżenie nie powinny ponownie rozwijać folderu. Przy odtwarzaniu strony
  przywracaj zapisany stan, a przy zablokowanym storage zachowuj go w pamięci sesji.
- **Zakładki:** `header.tsx` synchronizuje trasę i otwarte pliki. Zamknięcie
  ostatniej zakładki pokazuje pusty edytor; gdy prawy panel ma pliki, są one
  przenoszone do nagłówka. Zachowuj osłonę przed ponownym otwarciem zamkniętej
  zakładki przez spóźnioną aktualizację pathname.
- **Drag and drop:** header, sidebar i split view współdzielą typy
  `text/x-split-view*` oraz oznaczenia reorder/source. Zmiany protokołu muszą
  obejmować nadawcę i odbiorcę. Eventy `close-header-tab` i
  `move-header-tabs-to-right` koordynują przenoszenie plików. Snapshot
  `paneTabsAfter` chroni przed użyciem starego stanu podczas synchronicznego dropu.
- **Prawy panel:** iframe otwiera `/embedded${url}`. Te trasy współdzielą
  komponenty stron głównych, ale nie powinny dostać kolejnego sidebara,
  nagłówka ani terminala. Wewnętrzne linki przekazują `split-view-navigate`
  do rodzica. Zachowuj kontrolę `event.origin` i konkretny origin w `postMessage`.
- **Scroll i resize:** embedded layout przywraca scroll dokumentu zablokowany
  przez globalny reset. Nakładka na iframe podczas zmiany rozmiaru zapobiega
  przechwytywaniu ruchu myszy. Sprawdzaj ją również podczas resize terminala.
- **Powrót na górę:** `BackToTop` śledzi scroll lewego panelu przez ref, a w iframe
  scroll dokumentu. Trzymaj kontrolkę poza przewijaną treścią; każdy panel ma
  własny przycisk i pierścień postępu. Respektuj ograniczenie ruchu aplikacji
  oraz systemu i przenoś fokus na początek treści po aktywacji klawiaturą.
- **Animowane tło:** `AmbientNetwork` należy do powłoki panelu, a nie poszczególnych
  stron. Canvas pozostaje pod treścią, nie przechwytuje kliknięć i ma osobną
  instancję w iframe. Kolory pobieraj po zastosowaniu motywu. Ograniczenie ruchu
  aplikacji/systemu oznacza statyczną sieć; ukryta karta i niewidoczny panel
  zatrzymują animację. Zachowuj limit liczby punktów, 30 FPS i DPR do 2.
  Tło oraz interakcje są domyślnie wyłączone. Przełączniki tła, reakcji na kursor
  i dodawania punktów kliknięciem należą do `AppearanceSettings` i zapisują się
  w `karnas-appearance`. Wyłączenie tła usuwa canvas i jego nasłuchy. Kliknięcia
  kontrolek, linków i zaznaczonego tekstu nie mogą dodawać punktów.
  Terminal udostępnia `particles [on|off|status]`, `particles cursor on|off`
  i `particles click on|off` przez ten sam `AppearanceProvider`; zachowuj
  zgodność z przełącznikami Settings i uzupełnianiem Tab.
- **Stan lokalny:** klucze to `sidebar-width`, `split-view-state` i
  `terminal-state`. Preferencje wyglądu zapisuje `karnas-appearance`. Split view odtwarza stan po mount; terminal zapisuje tylko
  wysokość, nie historię ani otwarcie. Nie przenoś dostępu do `localStorage`
  do renderowania serwerowego i nie nadpisuj zapisanego stanu przed hydratacją.
- **Terminal:** to symulacja w przeglądarce, nie shell systemowy. Komendy mają
  wspólny kontrakt i rejestr w `terminal/commands/index.ts`; treść pobierają
  z `/api/content`. `TerminalProvider` należy do main layoutu, dlatego
  `TerminalTrigger` w iframe korzysta z komunikatu `split-view-open-terminal`.
- **Katalog terminala:** `terminal-filesystem.ts` mapuje wygenerowaną nawigację
  na katalogi i pliki o nazwach zgodnych z explorerem. Bieżący katalog żyje w
  sesji terminala niezależnie od strony: `cd` zmienia katalog i otwiera sekcję,
  `open` otwiera plik bez zmiany katalogu, `ls` bez argumentów listuje bieżący
  katalog. Obsługuj `..`, `.`, `/`, `~` i ścieżki względne; nie wysyłaj błędnych
  ścieżek do routera. Każdy wpis historii zapisuje ścieżkę z momentu wykonania.
  Wynik `ls` jest typowanym listingiem renderowanym przez `TerminalListing`,
  a nie HTML-em w stringu. Tab uzupełnia nazwy i ścieżki; Shift+Tab pozostaje
  dostępny do opuszczenia inputu. Odczyt treści czeka na dane i pozwala ponowić
  nieudaną prośbę; listowanie plików działa także przed załadowaniem API.
- **Skróty:** Ctrl + backtick przełącza terminal, strzałki przeglądają historię,
  Ctrl+C czyści input, Ctrl+L czyści terminal. Ctrl + backslash wywołuje
  `toggleSplitView`, które obecnie zamyka aktywny podział; otwieranie panelu
  odbywa się przez drag and drop. Nie opisuj skrótu jako otwierania pustego splitu.
- Obsługa Ctrl + backtick należy do `TerminalProvider` i `terminal-controls.ts`.
  Rozpoznawaj fizyczny `code: Backquote` oraz znak backtick, ignoruj repeat, IME
  i AltGr; nasłuchuj w fazie capture. Embedded layout przekazuje skrót do rodzica.
  Wiadomości otwarcia i przełączenia terminala muszą pochodzić z istniejącego
  iframe tego samego originu. Nie dodawaj drugiego listenera w samym panelu.
- **Komendy i efekty:** `tree` korzysta z tej samej struktury co `ls`, `cd -`
  zamienia ostatnie dwa różne katalogi, a `theme` używa `AppearanceProvider`.
  Matrix działa jako czasowy efekt canvas w panelu, z wyjściem przez Escape,
  Ctrl+C lub przycisk. Po wyjściu przywracaj fokus, jeśli znajdował się w terminalu.
  Preferencje reduced motion (aplikacji i systemu) oznaczają statyczną klatkę.
  Zamykanie i czyszczenie terminala kończy efekt; odpinaj timery, ResizeObserver
  oraz requestAnimationFrame przy odmontowaniu.
- Przy zmianach profilu sprawdzaj spójność home, metadanych, about, skills,
  stopki autora, kontaktu i odpowiedzi terminala. Część danych jest powielona.

## Weryfikacja i istniejące ograniczenia

- Dla zmian kodu, treści lub zależności uruchom odpowiednio `npm run gen:nav`,
  `npx tsc --noEmit` i build produkcyjny. Samo przejście generatora nie waliduje
  całego frontmatter. Dla samej dokumentacji wystarcza sprawdzenie zgodności
  ze źródłami i `git diff --check`.
- Testy uruchamiaj przez `node --test tests/*.test.mjs` (wygląd, explorer,
  lightbox i komendy terminala).
  Repo nie ma obecnie skryptów `test`/`lint`, konfiguracji ESLinta ani pełnej suity E2E. Obecność ikon Jest/pytest/Playwright i wpisów
  na liście umiejętności nie oznacza, że te narzędzia testują to portfolio.
  Next.js build nie uruchamia ESLinta. Nie zgłaszaj lint/testów jako zaliczonych
  bez rzeczywistego wykonania właściwej kontroli.
- Kontrola standardową konfiguracją Next/TypeScript wykazała istniejące problemy
  `react-hooks/set-state-in-effect` w layout/header/contextach oraz zależność
  efektu w headerze. Przy pracy w tych miejscach odróżniaj zastane problemy
  od regresji; nie wyłączaj globalnie reguł dla uzyskania zielonego wyniku.
- Przy zmianach motywów edytuj tokeny w `src/app/scss/_themes.scss`. Zachowuj
  inicjalizację przed pierwszym renderem, walidację zapisanych wartości, synchronizację
  przez storage events i preferencję ograniczenia ruchu. Sprawdź też jasny motyw:
  monochromatyczne ikony powinny dziedziczyć `currentColor`, a wielokolorowe zachowywać detale.
- Wersję frameworka ustalaj z manifestu, nie z tekstów terminala ani opisów portfolio.
- Przy aktualizacji zależności wykonaj `npm audit` i oceń wynik. Nie stosuj
  automatycznie `npm audit fix --force`: sugerowane cofnięcie głównej wersji
  może być niezgodne z aktualnym frameworkiem. Raportuj nierozwiązane podatności.
- Dla zmian UI sprawdź desktop, telefon i wąski split: nawigację i mobile menu,
  otwieranie/zamykanie i kolejność zakładek, zamknięcie ostatniego pliku,
  przenoszenie między panelami, resize, scroll długiego wpisu w obu panelach,
  linki oraz terminal (`help`, `ls`, `cd`, `cat`, `find`, historia i clear).
  Dla zmian stanu sprawdź też odświeżenie strony z zapisanym stanem.
- Nie edytuj ręcznie artefaktów `.next/`, `next-env.d.ts`, `*.tsbuildinfo`
  ani `node_modules/`. W podsumowaniu podaj wykonane kontrole i ich rzeczywisty wynik.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
