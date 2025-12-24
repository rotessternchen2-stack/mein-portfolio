# 🚀 GitHub & Vercel Deployment - Schritt für Schritt

## ✅ SCHRITT 1: Git aufräumen & committen

```bash
cd /Volumes/MARIA/mein-portfolio-maria

# Alle Änderungen hinzufügen
git add .

# Commit mit Nachricht
git commit -m "Portfolio komplett - bereit für Deployment"
```

---

## ✅ SCHRITT 2: GitHub Repository erstellen

1. Gehe zu: **https://github.com/**
2. Klicke oben rechts auf **"+"** → **"New repository"**
3. **Repository Name**: `mein-portfolio` (oder wie du willst)
4. **Description**: "Mein Portfolio - Mediendesignerin"
5. **Public** oder **Private** (deine Wahl)
6. ❌ **NICHT** "Initialize with README" anklicken (haben wir schon!)
7. **Create repository**

---

## ✅ SCHRITT 3: Repository mit GitHub verbinden

Nach dem Erstellen zeigt GitHub dir Commands - **NUTZE DIESE:**

```bash
# Füge GitHub als Remote hinzu
git remote add origin https://github.com/DEIN-USERNAME/mein-portfolio.git

# Pushe zum ersten Mal
git branch -M main
git push -u origin main
```

**Ersetze `DEIN-USERNAME`** mit deinem GitHub-Username!

---

## ✅ SCHRITT 4: Auf Vercel deployen

1. Gehe zu: **https://vercel.com/**
2. **Sign Up** / **Login** mit GitHub
3. Klicke **"Add New..."** → **"Project"**
4. **Import Git Repository** → Wähle `mein-portfolio`
5. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (Standard)
   - Build Command: `npm run build` (Standard)
   - Output Directory: `dist` (Standard)

---

## ⚠️ WICHTIG: Environment Variables auf Vercel setzen!

**BEVOR du auf "Deploy" klickst:**

1. Scrolle runter zu **"Environment Variables"**
2. Füge hinzu:

```
VITE_EMAILJS_PUBLIC_KEY = aFfFKp-yzkp1sSa0U
VITE_EMAILJS_SERVICE_ID = service_hbgirka
VITE_EMAILJS_ADMIN_TEMPLATE = template_14zub5o
VITE_EMAILJS_CONFIRMATION_TEMPLATE = template_3n1vomi
```

3. **Klicke "Deploy"**

---

## ✅ SCHRITT 5: Warten & Testen

Vercel baut deine Website (dauert 1-2 Minuten):

1. ✅ Build erfolgreich? → Du bekommst eine URL (z.B. `mein-portfolio.vercel.app`)
2. **Öffne die URL** und teste:
   - [ ] Website lädt
   - [ ] Alle Seiten funktionieren
   - [ ] Kontaktformular sendet Emails
   - [ ] Bilder werden angezeigt

---

## 🎯 FERTIG!

Dein Portfolio ist jetzt live! 🎉

**Deine URL:** `https://mein-portfolio.vercel.app` (oder wie Vercel sie nennt)

---

## 📝 Für zukünftige Updates:

```bash
# Änderungen machen
# Dann:
git add .
git commit -m "Update: Beschreibung der Änderung"
git push

# Vercel deployed automatisch! 🚀
```

---

## 🔧 Troubleshooting

### Build schlägt fehl?
- Prüfe ob alle Dependencies in `package.json` sind
- Prüfe Environment Variables

### Kontaktformular funktioniert nicht?
- Prüfe Environment Variables auf Vercel
- Prüfe EmailJS Templates

### 404 Fehler?
- Vercel Settings → Rewrites hinzufügen:
  - Source: `/*`
  - Destination: `/index.html`



