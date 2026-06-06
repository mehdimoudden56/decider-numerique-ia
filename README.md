# decider-numerique-ia

Site compagnon du livre « Gouverner le numérique et l'IA sans être expert. Le guide du dirigeant qui décide sans subir ».

Site documentaire statique généré avec MkDocs Material, hébergé sur GitHub Pages, domaine `decider-numerique-ia.fr`.

---

## Contenu de ce dépôt

- `mkdocs.yml` : configuration du site (thème, plugins, navigation).
- `docs/` : toutes les pages au format Markdown.
- `docs/stylesheets/extra.css` : charte visuelle navy/or.
- `docs/javascripts/quiz.js` : moteur du questionnaire d'auto-évaluation.
- `docs/CNAME` : domaine personnalisé (lu par GitHub Pages).
- `docs/robots.txt` : interdit l'indexation de la page de téléchargement.
- `.github/workflows/deploy.yml` : déploiement automatique à chaque push.
- `requirements.txt` : dépendances Python.

---

## État de ce lot (Lot 1, squelette déployable)

Pages réelles produites :

- Accueil, Le livre (3 pages), Contact, Mentions légales.
- Auto-évaluation en 20 questions (interactive, scoring temps réel).
- Action dans les 30 jours, chapitre 1 (contenu extrait du manuscrit).
- Bonnes questions à poser, chapitre 1 (contenu extrait du manuscrit).
- Page de téléchargement, chiffrée (mot de passe provisoire `gouverner-2027`).
- Index de rubriques (Outils, Articles, Cas, Glossaire, Bibliographie, Veille, Concepts originaux).

Les lots 2 et 3 ajouteront les outils des chapitres 2 à 16, les 10 sections supprimées, le glossaire étendu, les concepts originaux et les cas.

---

## Prévisualiser en local

Prérequis : Python 3.11 ou plus.

```bash
# Créer un environnement virtuel (recommandé)
python3 -m venv .venv
source .venv/bin/activate        # sous Windows : .venv\Scripts\activate

# Installer les dépendances
pip install -r requirements.txt

# Lancer le serveur local
mkdocs serve
```

Le site est consultable sur `http://localhost:8000`.

---

## Deux façons de déployer

Deux guides détaillés sont inclus dans ce dossier :

- **`GUIDE_DEPLOIEMENT_WEB.md`** (recommandé pour débuter) : tout se fait dans le navigateur sur github.com, sans rien installer.
- **`GUIDE_DEPLOIEMENT_GITHUB_DESKTOP.md`** : avec le logiciel GitHub Desktop, pratique pour les mises à jour fréquentes.

La procédure ci-dessous est un résumé technique. Pour un pas à pas complet, suivez l'un des deux guides.

## Déployer sur GitHub Pages

### Étape 1 : créer le dépôt GitHub

Créer un dépôt nommé `decider-numerique-ia` sous votre compte. Important : le dépôt doit être OBLIGATOIREMENT PUBLIC, car les comptes GitHub gratuits ne peuvent pas publier de site depuis un dépôt privé.

### Étape 2 : pousser ce dossier

Depuis la racine de ce dossier :

```bash
git init
git add .
git commit -m "Lot 1 : squelette déployable"
git branch -M main
git remote add origin https://github.com/mehdimoudden56/decider-numerique-ia.git
git push -u origin main
```

Cette commande utilise déjà votre identifiant GitHub `mehdimoudden56`.

### Étape 3 : activer GitHub Pages

Dans le dépôt sur github.com : `Settings` puis `Pages`. Sous `Build and deployment`, choisir `Source : GitHub Actions`.

Le workflow `.github/workflows/deploy.yml` se déclenche automatiquement au push suivant et déploie le site.

### Étape 4 : configurer le domaine chez OVH

Dans la zone DNS de `decider-numerique-ia.fr` chez OVH, créer :

Quatre enregistrements A pour le domaine racine :

```
@   A   185.199.108.153
@   A   185.199.109.153
@   A   185.199.110.153
@   A   185.199.111.153
```

Un enregistrement CNAME pour le sous-domaine www :

```
www   CNAME   mehdimoudden56.github.io.
```

(Le point final du CNAME est volontaire.)

### Étape 5 : valider le domaine dans GitHub

Dans `Settings` puis `Pages`, champ `Custom domain`, saisir `decider-numerique-ia.fr`. Attendre la vérification DNS (de quelques minutes à 24 heures). Cocher `Enforce HTTPS` une fois disponible.

Le fichier `docs/CNAME` est déjà présent : il indique le domaine à GitHub Pages.

---

## Modifier le contenu

Chaque page est un fichier `.md` dans `docs/`. Pour modifier un texte, éditer le fichier, puis :

```bash
git add .
git commit -m "Description de la modification"
git push
```

Le site se reconstruit et se redéploie automatiquement en une à trois minutes.

---

## Changer le mot de passe de la page de téléchargement

Le mot de passe est défini dans l'en-tête de `docs/telecharger.md` :

```yaml
---
password: gouverner-2027
---
```

Remplacer la valeur, committer, pousser. Pour figer le mot de passe définitif avant l'impression du livre, choisir une valeur, la reporter ici, et l'imprimer dans la page de colophon de l'ouvrage.

---

## Contraintes typographiques

Le site respecte les mêmes règles que le manuscrit : pas de tiret cadratin ni demi-cadratin, apostrophes typographiques, espaces insécables avant les deux-points, points-virgules, points d'interrogation et d'exclamation, guillemets français. Vérifier ces règles à chaque ajout de contenu.

---

© 2026 Mehdi Moudden. L'auteur s'exprime à titre personnel.
