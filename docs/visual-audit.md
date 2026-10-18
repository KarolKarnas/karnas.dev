# Audyt wizualny i wdrożone zmiany

Data: 18 października 2026. Zakres: karnas.dev, lokalny podgląd aplikacji,
przegląd komponentów i stylów oraz dostarczone zrzuty ekranu.

## Cel

Portfolio ma pokazywać jakość pracy inżynierskiej już przez jakość samego
interfejsu. Zachowano koncepcję VS Code i Monokai, a nacisk przesunięto na
czytelną prezentację autora, konkretnych realizacji i sposobu pracy.

## Ustalenia i realizacja

| Priorytet | Obserwacja przed zmianami | Wdrożone rozwiązanie |
| --- | --- | --- |
| Wysoki | Home powielał explorer; trudno było od razu rozpoznać specjalizację i znaleźć najważniejsze realizacje. | Wyraźne przedstawienie autora, krótki komunikat o backendzie i AI, odnośniki do realizacji i kontaktu, dwie wybrane realizacje oraz podręczny stack. Nawigacja plikowa pozostała jako część workspace. |
| Wysoki | Style nawigacji nadpisywały `fill` wszystkich ścieżek i grup SVG. Wielokolorowe i wycinane znaki traciły szczegóły. | Usunięcie globalnego przemalowywania ścieżek. Ograniczone rozmiary ikon, zachowanie proporcji, koloru i ujemnej przestrzeni. |
| Wysoki | Django, Pandas, Sentry i inne ciemne znaki zlewały się z tłem; białe logotypy znikały w jasnym wariancie. | Monochromatyczne fragmenty korzystają z `currentColor`. Dotyczy to również GitHub, AWS, Next.js, OpenAI i Prisma. Wielokolorowe fragmenty pozostają wielokolorowe. Flower otrzymał osobny symbol zamiast kopii ikony Celery. |
| Wysoki | Skills był serią szerokich, identycznych pasów. Wszystkie grupy miały taki sam ciężar, a ikony wyglądały jak zbiór badge’y. | Siatka sześciu kategorii, krótkie opisy zastosowania, spójne kafelki narzędzi i czytelne etykiety. Osobna sekcja łączy kompetencje AI, embeddings i retrieval z backendem. |
| Wysoki | Karty projektów miały grube obramowania, kilka zagnieżdżonych powierzchni, mocne kolory i duże przyciski konkurujące z treścią. | Pojedyncza powierzchnia, cienka ramka, równe odstępy i czytelna kolejność: materiał wizualny → typ projektu i rok → tytuł → opis → stack → przejście do szczegółów. |
| Wysoki | Zawodowe realizacje prezentowały przede wszystkim duże logotypy dostawców chmury. | Dwa schematy oparte na istniejących opisach: intake/extract/validate oraz campaigns/signals/insights. Są ilustracjami przepływu, bez fikcyjnych danych, metryk i screenów produktu. Projekty osobiste zachowują rzeczywiste zrzuty aplikacji. |
| Średni | Blog i szczegóły wpisów stosowały duże hero, nakładki i wyśrodkowane, miejscami justowane bloki tekstu. | Spokojniejsza lista journal, krótsze okładki, lewostronna typografia, kontrolowana szerokość czytania i spójne odstępy między sekcjami. |
| Średni | About i Contact były wizualnie oderwane od prezentacji realizacji. | About zachowuje metaforę `about.json`, otrzymuje ramę pliku, portret i kontakt. Contact ma czytelny adres mailowy, telefon, sociale i powrót do realizacji. |
| Średni | Motyw był rozproszony po stałych kolorach Sass. | Semantyczne tokeny w `_themes.scss`, domyślny Monokai, Dark Modern i Light. Dotychczasowe zmienne Sass mapują się na tokeny aplikacji. |
| Średni | Powłoka miała niespójne breakpointy, ciężkie stany aktywne i niewygodne zakładki na małych ekranach. | Spójne zachowanie explorera przy 1024 px, scrollowana lista plików, stałe dolne narzędzia, delikatne zaznaczenia, semantyczne przyciski zamykania i przewinięcie aktywnej zakładki wewnątrz nagłówka. |
| Średni | Zmiana rozmiarów była dostępna tylko myszą. | Separatory explorera, edytora i terminala obsługują klawiaturę oraz mają etykiety i wartości ARIA. Mobilne menu ma nazwany przycisk, Escape i zamykane tło. |

## Ustawienia wyglądu

Zębatka znajduje się na dole explorera. Panel pozwala wybrać motyw, rozmiar
tekstu i ograniczenie ruchu. Wybór jest zapisywany lokalnie na urządzeniu.

- Preferencje są walidowane, także przy uszkodzonym lub starym zapisie.
- Motyw inicjalizuje się przed pierwszym renderem, a nie dopiero po montowaniu komponentów.
- Otwarte iframe i pozostałe karty tego samego originu odbierają zmiany przez storage events.
- Dialog zapewnia natywną obsługę focusu, Escape i powrotu do przycisku otwierającego.
- Ograniczenie animacji respektuje zarówno ustawienie aplikacji, jak i preferencję systemową.
- Brak dostępu do storage nie blokuje renderowania aplikacji.

## Weryfikacja

| Kontrola | Wynik |
| --- | --- |
| Build produkcyjny Next.js z poprawnym `NEXT_PUBLIC_BASE_URL` | OK, 56 stron |
| TypeScript `--noEmit` | OK |
| Kompilacja wszystkich 40 plików CSS Modules, również nieużywanych aktualnie przez routing | OK |
| Testy `node --test tests/appearance.test.mjs` | 4/4: kombinacje motywów i rozmiarów, niepoprawny zapis, whitelist atrybutów, zablokowany storage |
| Viewporty 320, 390, 768, 1280 i 1920 px | Sprawdzone właściwe układy; brak poziomego przepełnienia dokumentu na kontrolowanych stronach |
| Nawigacja mobilna | Menu zamyka się po wyborze strony |
| Motyw, rozmiar tekstu i redukcja ruchu | Zmiana w UI i zachowanie po odświeżeniu potwierdzone |
| Motyw w split view | Parent i iframe mają ten sam motyw; sprawdzono również zmianę przy otwartym iframe |
| Zakładki | Przenoszenie do prawego panelu, zamykanie aktywnej, promocja plików z prawego panelu, pusty edytor i ponowne otwarcie z explorera |
| Resize | Klawiatura i mysz; ograniczenia szerokości; nakładka iframe znika po zakończeniu przeciągania |
| Terminal | `help`, lista projektów, `cd skills`, historia, Ctrl+L, resize i otwarcie przez komunikat z iframe |
| Długi wpis | 17 sekcji; niezależne przewijanie dokumentu iframe do końca; brak niedoładowanych obrazów w kontrolowanym widoku |
| ESLint uruchomiony jawnie z konfiguracją Next/TypeScript | Brak nowych zgłoszeń; pozostają wcześniejsze 5 błędów `set-state-in-effect` i 1 ostrzeżenie o zależnościach efektu |

### Kontrast tokenów tekstowych

Wartości obliczono z luminancji kolorów zapisanych w tokenach. Poniżej stosunek
kontrastu na podstawowym tle i powierzchni kart; zakres obejmuje obie powierzchnie.

| Motyw | Tekst podstawowy | Tekst pomocniczy | Drobne podpisy |
| --- | --- | --- | --- |
| Monokai | 9,48–10,29 | 5,52–5,99 | 5,36–5,81 |
| Dark Modern | 10,06–10,89 | 6,71–7,26 | 6,10–6,60 |
| Light | 8,45–9,01 | 5,32–5,68 | 5,00–5,33 |

## Utrzymanie

Nowe strony i komponenty powinny używać istniejących tokenów, kart i odstępów.
Wąski panel edytora wymaga container queries, nawet na dużym monitorze.
Nie nadpisuj zbiorczo kolorów wewnętrznych ścieżek SVG. Schematy realizacji są
zdefiniowane tylko dla dwóch opisanych projektów; pozostałe korzystają z własnych
obrazów. Dane o autorze i realizacjach pozostają oparte na treści repozytorium.
