# Guide de déploiement par le navigateur, sans rien installer

Cette méthode se fait entièrement sur le site `github.com`, dans votre navigateur. Aucun logiciel à installer. Idéale pour une première mise en ligne.

Votre configuration : compte GitHub `mehdimoudden56`, domaine `decider-numerique-ia.fr` chez OVH.

Comptez environ une heure la première fois.

---

## Vue d'ensemble : les 7 étapes

1. Décompresser le zip sur votre PC.
2. Créer le dépôt sur GitHub.
3. Téléverser les fichiers du site (glisser-déposer).
4. Créer le fichier d'automatisation (le « workflow »).
5. Activer la publication automatique.
6. Créer le secret du mot de passe.
7. Configurer le domaine OVH et activer le HTTPS.

Faites-les dans l'ordre.

---

## Étape 1 : décompresser le zip

1. Repérez `decider-numerique-ia_lot1.zip`.
2. Clic droit, « Extraire tout », vers un endroit simple comme `Documents`.
3. Vous obtenez un dossier `decider-numerique-ia`. Ouvrez-le. Vous devez voir : le dossier `docs`, les fichiers `mkdocs.yml`, `requirements.txt`, `README.md`, les guides, et `WORKFLOW_a_copier.txt`.

Gardez cette fenêtre ouverte.

---

## Étape 2 : créer le dépôt sur GitHub

1. Allez sur `github.com`, connectez-vous avec `mehdimoudden56`.
2. En haut à droite, bouton `+`, puis « New repository ».
3. « Repository name » : tapez exactement `decider-numerique-ia`.
4. Choisissez **Public**. C'est obligatoire pour publier un site avec un compte gratuit.
5. Ne cochez rien d'autre.
6. Cliquez « Create repository ».

---

## Étape 3 : téléverser les fichiers du site

Sur la page qui s'affiche après la création, cherchez le lien « uploading an existing file » (dans la phrase « Get started by ... uploading an existing file »). Cliquez dessus.

Vous arrivez sur une page avec une grande zone « Drag files here ».

1. Dans votre fenêtre Windows ouverte à l'étape 1, sélectionnez ces éléments :
   - le dossier `docs`
   - le fichier `mkdocs.yml`
   - le fichier `requirements.txt`
   - le fichier `README.md`
   - le fichier `GUIDE_DEPLOIEMENT_WEB.md`
   - le fichier `GUIDE_DEPLOIEMENT_GITHUB_DESKTOP.md`

   Ne sélectionnez PAS `WORKFLOW_a_copier.txt` (il servira à l'étape 4 autrement). Ne cherchez pas les fichiers commençant par un point, ils se traitent à part.

2. Glissez-les dans la zone « Drag files here » du navigateur.
3. GitHub téléverse les fichiers en préservant la structure des dossiers. Patientez que tout apparaisse dans la liste.
4. Plus bas, dans « Commit changes », laissez le message par défaut.
5. Cliquez le bouton vert « Commit changes ».

Vous revenez sur la page du dépôt, qui contient maintenant vos fichiers.

Note : le glisser-déposer du dossier `docs` entier fonctionne dans Chrome et Edge. Si jamais la structure n'est pas préservée, glissez les sous-dossiers un par un.

---

## Étape 4 : créer le fichier d'automatisation

C'est le fichier qui dit à GitHub de construire et publier le site automatiquement. Il se trouve dans un dossier caché, donc on le crée à la main ici.

1. Sur la page du dépôt, cliquez le bouton « Add file », puis « Create new file ».
2. Dans le champ du nom de fichier (en haut, « Name your file... »), tapez exactement :

   ```
   .github/workflows/deploy.yml
   ```

   À mesure que vous tapez les barres obliques `/`, GitHub crée automatiquement les dossiers. C'est normal.

3. Maintenant il faut coller le contenu. Sur votre PC, ouvrez le fichier `WORKFLOW_a_copier.txt` (dans le dossier décompressé) avec le Bloc-notes : clic droit sur le fichier, « Ouvrir avec », « Bloc-notes ».
4. Dans le Bloc-notes, sélectionnez tout (Ctrl+A), copiez (Ctrl+C).
5. Revenez sur GitHub, cliquez dans la grande zone de texte sous le nom du fichier, et collez (Ctrl+V).
6. Vérifiez que la première ligne est bien `name: Déploiement du site`.
7. Plus bas, cliquez le bouton vert « Commit changes », puis confirmez « Commit changes » dans la fenêtre.

L'automatisation est en place.

---

## Étape 5 : activer la publication automatique

1. Sur le dépôt, onglet « Settings ».
2. Menu de gauche, « Pages ».
3. Sous « Build and deployment », rubrique « Source », choisissez **GitHub Actions**.

### Vérifier la construction

1. Onglet « Actions » du dépôt.
2. Une ligne apparaît avec un rond : orange = en cours, vert = réussi, rouge = échec.
3. Attendez le vert (une à trois minutes).

Une fois au vert, le site est visible à l'adresse temporaire :
`https://mehdimoudden56.github.io/decider-numerique-ia/`

Ouvrez-la pour vérifier. Le domaine définitif vient à l'étape 7.

Si c'est rouge, cliquez sur la ligne pour voir le message d'erreur, et signalez-le moi.

---

## Étape 6 : créer le secret du mot de passe

Pour que le mot de passe des téléchargements ne soit pas visible dans le code public.

1. Onglet « Settings », menu de gauche « Secrets and variables », puis « Actions ».
2. Bouton « New repository secret ».
3. « Name » : tapez exactement `SITE_PASSWORD`.
4. « Secret » : tapez `gouverner-2027`.
5. « Add secret ».

Puis relancez une construction pour qu'il soit pris en compte : onglet « Actions », cliquez la dernière construction, bouton « Re-run all jobs ».

Note : sans ce secret, le site marche quand même avec le mot de passe provisoire par défaut, mais celui-ci serait visible dans le code public. Le secret est donc recommandé, et obligatoire le jour où vous figerez le mot de passe définitif du livre.

---

## Étape 7 : configurer le domaine OVH et activer le HTTPS

### 7a. Zone DNS chez OVH

1. Connectez-vous sur `www.ovh.com/manager`.
2. « Noms de domaine », puis `decider-numerique-ia.fr`, onglet « Zone DNS ».
3. Supprimez les lignes de type **A** et **AAAA** créées par défaut par OVH (celles qui pointent vers le parking, dont l'adresse ne commence pas par `185.199`). Cliquez les trois points à droite de chaque ligne, « Supprimer ». Ne touchez pas aux lignes MX, NS, TXT.
4. Ajoutez quatre entrées de type **A** (bouton « Ajouter une entrée », sous-domaine laissé vide) :

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

5. Ajoutez une entrée de type **CNAME**, sous-domaine `www`, cible :

   ```
   mehdimoudden56.github.io.
   ```

   (Le point final fait partie de la valeur.)

La propagation prend de quelques minutes à 24 heures.

### 7b. Brancher le domaine dans GitHub

1. Dépôt, « Settings », « Pages ».
2. Rubrique « Custom domain » : le champ affiche normalement déjà `decider-numerique-ia.fr` (grâce au fichier CNAME inclus dans le site). S'il est vide, tapez-le et « Save ».
3. GitHub vérifie le DNS. Un message orange peut s'afficher tant que la propagation n'est pas finie : repassez plus tard.
4. Quand la vérification réussit, cochez « Enforce HTTPS ». Si la case est grisée, attendez : le certificat se génère seul, jusqu'à 24 heures.

Quand tout est vert, `https://decider-numerique-ia.fr` affiche votre site.

---

## Mises à jour futures (lots 2 et 3)

Toujours par le navigateur :

1. Sur le dépôt, allez dans le dossier concerné.
2. « Add file », « Upload files », glissez les nouveaux fichiers (ils remplacent les anciens de même nom).
3. « Commit changes ».
4. Le site se met à jour seul en une à trois minutes.

Pour modifier un texte existant : ouvrez le fichier sur GitHub, cliquez l'icône crayon en haut à droite, modifiez, « Commit changes ».

---

## En cas de souci

- **Construction rouge (onglet Actions)** : cliquez dessus, copiez le message, envoyez-le moi.
- **L'adresse temporaire ne s'affiche pas** : vérifiez que la Source est « GitHub Actions » (étape 5) et que la construction est verte.
- **Erreur sur le workflow à l'étape 4** : le contenu collé est peut-être incomplet. Rouvrez `WORKFLOW_a_copier.txt`, recopiez tout, et recréez le fichier.
- **Le domaine ne répond pas** : propagation DNS en cours, attendez quelques heures.
- **« Enforce HTTPS » grisé** : certificat en cours de génération, jusqu'à 24 heures.

---

© 2026 Mehdi Moudden. L'auteur s'exprime à titre personnel.
