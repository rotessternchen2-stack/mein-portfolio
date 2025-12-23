# Maria Portfolio - React

Ein modernes, mehrsprachiges Portfolio für Designer und Kreative, gebaut mit React 19, Vite und Tailwind CSS.

## 🎨 Features

- ✅ **Vollständig in React entwickelt** mit funktionalen Komponenten und Hooks
- 🌍 **Mehrsprachigkeit** (Deutsch/Englisch) mit Context API
- 📱 **Responsive Design** - optimiert für Desktop, Tablet und Mobile
- ♿ **Accessibility** - ARIA-Labels, semantisches HTML, Keyboard-Navigation
- 🎯 **Type-Safety** mit PropTypes für alle Komponenten
- ✨ **Moderne UI/UX** mit Tailwind CSS
- 📝 **Formular-Validierung** mit Echtzeit-Feedback
- 🛡️ **Error Boundary** für robustes Error-Handling
- 🎭 **Wiederverwendbare Komponenten** - modular und wartbar

## 🏗️ Projektstruktur

```
src/
├── components/          # Wiederverwendbare UI-Komponenten
│   ├── ErrorBoundary.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── InputField.jsx
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   ├── PrimaryButton.jsx
│   ├── SecondaryButton.jsx
│   ├── Section.jsx
│   └── ServiceItem.jsx
├── contexts/           # React Context für State Management
│   └── LanguageContext.jsx
├── hooks/             # Custom React Hooks
│   ├── useClickOutside.js
│   └── useTranslation.js
├── pages/             # Seiten-Komponenten
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   └── Portfolio.jsx
├── translations/      # Übersetzungsdateien
│   ├── accessibility.js
│   ├── common.js
│   ├── contact.js
│   ├── footer.js
│   ├── home.js
│   ├── nav.js
│   ├── pages.js
│   └── index.js
└── assets/           # Bilder und SVGs
```

## 🚀 Installation & Start

### Voraussetzungen

- Node.js (Version 20+)
- npm oder yarn

### Installation

```bash
# Repository klonen
git clone <repository-url>

# In das Projektverzeichnis wechseln
cd mein-portfolio-maria

# Dependencies installieren
npm install
```

### Entwicklungsserver starten

```bash
npm run dev
```

Die Anwendung läuft auf `http://localhost:5173`

### Production Build erstellen

```bash
npm run build
```

### Production Build testen

```bash
npm run preview
```

## 🧩 Komponenten-Übersicht

### Core-Komponenten

- **Hero** - Vollbild Hero-Section mit Overlay
- **Section** - Wiederverwendbare Section-Wrapper
- **ServiceItem** - Item für Services/Leistungen
- **InputField** - Intelligentes Input-Feld mit Validierung und Error-Handling
- **PrimaryButton / SecondaryButton** - Styled Buttons mit verschiedenen Varianten
- **ErrorBoundary** - Fängt React-Fehler ab und zeigt Fallback UI
- **Loading** - Loading-Indikator für asynchrone Operationen

### Features

#### 🌐 Mehrsprachigkeit

Das Projekt nutzt einen custom `useTranslation` Hook mit React Context:

```jsx
const { t, currentLanguage, changeLanguage } = useTranslation();
const text = t('nav.home'); // Zugriff auf Übersetzungen
changeLanguage('en'); // Sprache wechseln
```

#### 📝 Formular mit Validierung

Das Kontaktformular bietet:
- Echtzeit-Validierung
- Fehler-Anzeige pro Feld
- E-Mail-Format-Prüfung
- Submit-Status-Feedback
- Loading-State während des Sendens

#### ♿ Accessibility

- ARIA-Labels und Rollen
- Semantisches HTML
- Keyboard-Navigation
- Screen-Reader-Unterstützung
- Focus-Management

## 🛠️ Technologie-Stack

- **React 19** - UI-Framework
- **Vite** - Build-Tool und Dev-Server
- **React Router DOM** - Client-Side Routing
- **Tailwind CSS** - Utility-First CSS-Framework
- **PropTypes** - Runtime Type-Checking
- **ESLint** - Code-Qualität und Linting

## 📦 Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.4.1",
  "prop-types": "^15.8.1"
}
```

## 🎨 Styling

Das Projekt verwendet Tailwind CSS mit einem custom Design-System:

- **Farbschema**: Grün-Töne (green-100 bis green-900)
- **Responsive Breakpoints**: Mobile-first Approach
- **Custom Utilities**: Wiederverwendbare CSS-Klassen

## 🔧 Entwicklung

### Code-Qualität

```bash
# ESLint ausführen
npm run lint
```

### Best Practices

- ✅ Funktionale Komponenten mit Hooks
- ✅ PropTypes für alle Komponenten
- ✅ Custom Hooks für wiederverwendbare Logik
- ✅ Komponentenbasierte Architektur
- ✅ Accessibility-First Development
- ✅ Mobile-First Responsive Design

## 📄 Lizenz

Alle Rechte vorbehalten © 2024 Maria - Designer Portfolio

## 👤 Autor

Maria - Designer & Frontend Developer

---

Erstellt mit ❤️ und React
