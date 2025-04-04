# EASE Growth - Site Vitrine

## 🌍 Présentation
**EASE Growth** est un site vitrine développé pour une agence digitale, mettant en avant ses services, son expertise et son identité de marque. Ce projet a été conçu avec **React**, **Vite**, et **Tailwind CSS**, et intègre des éléments générés via **Lovable.ai**. L'application est hébergée sur **Hostinger**.

## 🚀 Technologies utilisées
- **React** : Framework JavaScript pour une interface utilisateur réactive.
- **Vite** : Outil de build rapide pour le développement.
- **Tailwind CSS** : Framework CSS utility-first pour un design moderne et responsive.
- **Lovable.ai** : Génération de contenu et d'éléments assistée par IA.
- **Hostinger** : Hébergement du site web.

## 📂 Installation et exécution locale
### 1️⃣ Prérequis
Avant de commencer, assure-toi d'avoir **Node.js** installé.

### 2️⃣ Cloner le projet
```sh
git clone https://github.com/ton-projet/EASE-Growth.git
cd EASE-Growth
```

### 3️⃣ Installer les dépendances
```sh
npm install
```

### 4️⃣ Lancer le serveur en mode développement
```sh
npm run dev
```
Le site sera accessible sur `http://localhost:5173/` par défaut.

## 📦 Déploiement
Le site est hébergé sur **Hostinger**. Voici comment le déployer :

### 1️⃣ Générer les fichiers de build
```sh
npm run build
```
Un dossier `dist/` sera créé.

### 2️⃣ Transférer les fichiers sur Hostinger
- Se connecter à l'hébergement via **FTP** ou **File Manager**.
- Uploader le contenu du dossier `dist/` dans le dossier **public_html**.

### 3️⃣ Configurer le fichier `.htaccess` (si nécessaire)
Si le site ne charge pas correctement, ajouter un fichier `.htaccess` dans `public_html` :
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule .* /index.html [L]
```

## 📌 Améliorations futures
- Optimisation SEO et performances.
- Ajout d'une section blog ou portfolio.
- Intégration d'un CMS pour la gestion du contenu dynamique.

## 🛠️ Contribuer
Les contributions sont les bienvenues !
- **Fork** le projet
- Crée une branche : `git checkout -b feature-amélioration`
- Fais tes modifications et pousse-les : `git push origin feature-amélioration`
- Ouvre une Pull Request

## 📧 Contact
Pour toute question ou suggestion, tu peux me contacter via **[ton email ou lien de contact]**.

