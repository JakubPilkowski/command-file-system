# Założenia

1. generator poszczególnych plików:

- component template (jsx/tsx) MVP
- index template (js/ts) MVP
- style template (scss) MVP
- test template (tsx/jsx/ts/js) MVP
- hook template (ts/js) MVP
- types tempalte (ts/js) MVP

2. generator katalogów:

- component (component template + index template + types template + scss template + test template) MVP
- hook (hook template + types template + index template) MVP
- hoc (hoc template + types tempalte + index template + scss template) MVP

3. templatki

- forma listy stringów MVP
- pliki typu .rf FUTURE

4. struktura templatki

- variables w formie {{VARIABLE_NAME}} MVP
- miejsce na implementacje customowej logiki (importy) [%NAME_OF_DYNAMIC_CONTENT%] FUTURE
- optional value [?CONDITION?] FUTURE

5. plik konfiguracyjny:
   5.1. dla każdego katalogu/pliku:

- extension MVP
- template FUTURE
  5.2 dla poszczególnych katalogów:
- plugins FUTURE (później przerzucić)
- rules FUTURE
- other settings FUTURE
- working directory MVP

6. publikacja w npm MVP
