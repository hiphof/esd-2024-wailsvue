# Präsentation: Wails Framework und Vue.js

## 1. Wails Framework

### Was ist Wails?
- Framework für die Entwicklung von Desktop-Apps mit Frontend-Technologien.
- Ermöglicht die Nutzung von modernen Web-Frameworks für Frontend in Kombination mit Go für Backend.
- Desktop-Apps, die leichtgewichtig und performant sind.

### Electron als Competitor
- Electron ist eine etablierte Alternative.
- Unterschiede zu Wails:
  - **Leichteres Package**: Wails generiert kleinere Anwendungen.
  - **Native Integration** in Go, ohne zusätzliche Layers wie Node.js.

### Warum Wails?
- **Vorteile gegenüber anderen Frameworks:**
  - **Schnelligkeit**: Weniger Overhead im Vergleich zu Electron.
  - **Go als Backend**: Starke Performance und moderne Sprache.
  - **Kleinerer Footprint**: Geringerer Speicherbedarf als Electron.
  - **Keine Node.js-Abhängigkeit**: Vereinfachter Stack.

### Architektur
- Beschreibung der Architektur und Funktionsweise von Wails (Frontend/Backend-Kopplung, API-Aufrufe).

---

## 2. Vue.js (als eine der Optionen für Frontend)

### Was ist Vue.js?
- **Vue.js** ist ein einfaches, flexibles und performantes Frontend-Framework.
- Vorteile:
  - **Reaktivität**: Automatische Aktualisierung der UI bei Datenänderungen.
  - **Einfache Integration**: Funktioniert problemlos mit anderen Projekten und Bibliotheken.
  - **Komponenten-basiertes System**: Bietet Wiederverwendbarkeit und Modularität.

### Grundkonzepte
1. **Reaktivität**:
   - Zwei-Wege-Datenbindung mit `v-model`.
   - Automatische Synchronisation zwischen View und Model.
2. **Direktiven**:
   - Beispiele:
     - `v-if`: Bedingte Darstellung von Elementen.
     - `v-for`: Iteration über Listen.
     - `v-bind`: Dynamisches Binden von Attributen.
     - `v-on`: Event-Handling.
3. **Komponenten**:
   - Erstellung von wiederverwendbaren und modularen UI-Bausteinen.
   - Verbesserung von Wartbarkeit und Struktur.
4. **Lifecycle Hooks**:
   - Überblick über wichtige Hooks, z. B. `mounted()`: Wird aufgerufen, wenn die Komponente in die DOM eingefügt wurde.

