# Guide de déploiement pas à pas, pour débutant

Ce guide vous accompagne du fichier zip jusqu'au site en ligne sur `decider-numerique-ia.fr`. Aucune connaissance préalable de GitHub n'est requise. Comptez une heure la première fois, puis quelques minutes pour les mises à jour suivantes.

Votre configuration : Windows 11, pas de droits administrateur, compte GitHub `mehdimoudden56`, domaine `decider-numerique-ia.fr` chez OVH.

---

## Vue d'ensemble : les 6 grandes étapes

1. Préparer le dossier du site sur votre PC.
2. Le publier sur GitHub avec GitHub Desktop.
3. Activer la publication automatique (GitHub Pages).
4. Créer le « secret » du mot de passe.
5. Configurer le domaine chez OVH.
6. Brancher le domaine et activer le HTTPS.

Faites-les dans l'ordre. Ne sautez aucune étape.

---

## Étape 0 : vérifier votre outil

Vous avez installé un outil Git en version graphique. Le plus simple pour ce projet est **GitHub Desktop**. Pour vérifier que c'est bien celui-là, cherchez « GitHub Desktop » dans le menu Démarrer de Windows.

Si vous avez GitHub Desktop, parfait, continuez. Si vous avez installé autre chose (par exemple « Git GUI » tout court), installez plutôt GitHub Desktop : rendez-vous sur `desktop.github.com`, téléchargez, installez. L'installation se fait dans votre dossier utilisateur et ne demande pas de droits administrateur.

Au premier lancement, GitHub Desktop vous demande de vous connecter : utilisez votre compte `mehdimoudden56`.

---

## Étape 1 : préparer le dossier du site

1. Repérez le fichier `decider-numerique-ia_lot1.zip` que vous avez téléchargé.
2. Faites un clic droit dessus, puis « Extraire tout ». Choisissez un emplacement simple, par exemple votre dossier `Documents`.
3. Vous obtenez un dossier nommé `decider-numerique-ia` contenant des fichiers et sous-dossiers (`docs`, `mkdocs.yml`, `README.md`, etc.). Ne renommez rien.

Notez bien où se trouve ce dossier, vous en aurez besoin à l'étape suivante.

---

## Étape 2 : créer le dépôt sur GitHub et y mettre vos fichiers

### 2a. Créer le dépôt vide sur le site GitHub

1. Ouvrez votre navigateur, allez sur `github.com`, connectez-vous avec `mehdimoudden56`.
2. En haut à droite, cliquez sur le bouton `+` puis « New repository ».
3. Dans « Repository name », tapez exactement : `decider-numerique-ia`
4. Laissez la description vide.
5. Choisissez **Public**. C'est obligatoire : les comptes gratuits ne peuvent pas publier de site depuis un dépôt privé.
6. Ne cochez aucune case (« Add a README », etc.). Laissez tout décoché.
7. Cliquez « Create repository ».

Vous arrivez sur une page qui dit « Quick setup ». Laissez cet onglet ouvert, vous y reviendrez.

### 2b. Relier ce dépôt à votre PC avec GitHub Desktop

1. Ouvrez GitHub Desktop.
2. Menu « File » puis « Clone repository ».
3. Dans la liste, trouvez `mehdimoudden56/decider-numerique-ia`. S'il n'apparaît pas, cliquez sur « Refresh » ou l'onglet « GitHub.com ».
4. Dans « Local path », choisissez un dossier de destination, par exemple `Documents`. GitHub Desktop va créer un sous-dossier `decider-numerique-ia` à cet endroit.
5. Cliquez « Clone ».

Vous avez maintenant un dossier `decider-numerique-ia` vide (ou presque) géré par GitHub Desktop.

### 2c. Copier les fichiers du site dans ce dossier

1. Ouvrez l'explorateur de fichiers Windows.
2. Allez dans le dossier extrait à l'étape 1 (`Documents\decider-numerique-ia` issu du zip).
3. Sélectionnez **tout son contenu** : les dossiers (`docs`, `.github`) et les fichiers (`mkdocs.yml`, `README.md`, `requirements.txt`, `.gitignore`, et ce guide).
4. Copiez (Ctrl+C).
5. Allez dans le dossier cloné par GitHub Desktop à l'étape 2b.
6. Collez (Ctrl+V). Si Windows demande de fusionner ou remplacer, acceptez.

Astuce : le dossier `.github` commence par un point. S'il n'apparaît pas, activez « Éléments masqués » dans l'onglet « Affichage » de l'explorateur Windows.

### 2d. Envoyer les fichiers sur GitHub

1. Revenez dans GitHub Desktop. Il détecte automatiquement tous les fichiers ajoutés : ils apparaissent dans la colonne de gauche.
2. En bas à gauche, dans le champ « Summary », tapez : `Lot 1, mise en ligne initiale`
3. Cliquez le bouton bleu « Commit to main ».
4. En haut, cliquez « Push origin ». C'est l'envoi vers GitHub.

Vos fichiers sont maintenant sur GitHub. Pour vérifier, rafraîchissez la page du dépôt sur `github.com` : vous devez voir tous vos fichiers.

---

## Étape 3 : activer la publication automatique

1. Sur `github.com`, sur la page de votre dépôt `decider-numerique-ia`.
2. Cliquez l'onglet « Settings » (en haut à droite de la barre d'onglets du dépôt).
3. Dans le menu de gauche, cliquez « Pages ».
4. Sous « Build and deployment », rubrique « Source », choisissez **GitHub Actions** dans le menu déroulant.

C'est tout pour cette étape. Le robot de GitHub va maintenant construire et publier votre site automatiquement.

### Vérifier que la construction fonctionne

1. Cliquez l'onglet « Actions » du dépôt.
2. Vous voyez une ligne « Lot 1, mise en ligne initiale » avec un rond. Orange = en cours, vert = réussi, rouge = échec.
3. Attendez le vert (une à trois minutes). Si rouge, cliquez dessus pour voir le message, et signalez-le moi.

Une fois au vert, votre site est en ligne à l'adresse temporaire `https://mehdimoudden56.github.io/decider-numerique-ia/`. Ouvrez-la pour vérifier. Le domaine définitif viendra aux étapes 5 et 6.

---

## Étape 4 : créer le secret du mot de passe

Cette étape protège le mot de passe des téléchargements pour qu'il ne soit pas visible dans le code public.

1. Sur la page du dépôt, onglet « Settings ».
2. Menu de gauche : « Secrets and variables », puis « Actions ».
3. Bouton vert « New repository secret ».
4. Dans « Name », tapez exactement : `SITE_PASSWORD`
5. Dans « Secret », tapez le mot de passe provisoire : `gouverner-2027`
6. Cliquez « Add secret ».

Note : si vous sautez cette étape, le site fonctionne quand même avec le mot de passe provisoire `gouverner-2027` par défaut. Mais ce mot de passe par défaut serait alors visible dans le code public. Créer le secret est donc recommandé, et indispensable le jour où vous figerez le mot de passe définitif imprimé dans le livre.

Pour que le secret prenne effet, relancez une construction : onglet « Actions », cliquez la dernière construction, bouton « Re-run all jobs ». Ou attendez votre prochaine modification.

---

## Étape 5 : configurer le domaine chez OVH

L'objectif : dire à votre domaine `decider-numerique-ia.fr` de pointer vers les serveurs de GitHub.

1. Connectez-vous à votre espace client OVH, sur `www.ovh.com/manager`.
2. Dans le menu « Web Cloud », cliquez « Noms de domaine », puis `decider-numerique-ia.fr`.
3. Cliquez l'onglet « Zone DNS ».

Vous voyez un tableau de lignes. Voici ce qu'il faut faire.

### 5a. Supprimer les lignes de redirection par défaut d'OVH

OVH crée par défaut des lignes A et AAAA qui pointent vers une page de parking. Repérez les lignes de type **A** dont la cible est une adresse IP commençant par autre chose que `185.199`. Pour chacune, cliquez les trois points à droite, puis « Supprimer ». Faites de même pour les lignes **AAAA** par défaut si elles pointent vers le parking OVH.

Ne touchez pas aux lignes de type MX, NS, TXT, CNAME existantes, sauf instruction ci-dessous.

### 5b. Ajouter les 4 enregistrements A de GitHub

Cliquez « Ajouter une entrée », choisissez le type **A**, et créez ces quatre lignes (laissez le sous-domaine vide pour viser le domaine racine) :

```
A    (vide)    185.199.108.153
A    (vide)    185.199.109.153
A    (vide)    185.199.110.153
A    (vide)    185.199.111.153
```

Validez chaque ligne.

### 5c. Ajouter l'enregistrement CNAME pour www

Cliquez « Ajouter une entrée », type **CNAME**, sous-domaine `www`, cible :

```
mehdimoudden56.github.io.
```

Attention au point final, il fait partie de la valeur.

### 5d. Patienter

Les changements DNS mettent de quelques minutes à quelques heures à se propager (parfois jusqu'à 24 heures). Vous pouvez continuer à l'étape 6, mais la vérification finale peut demander d'attendre.

Note : les adresses IP de GitHub ci-dessus sont celles publiées de longue date par GitHub. Si vous voulez les revérifier, la page officielle est `docs.github.com`, recherche « apex domain ».

---

## Étape 6 : brancher le domaine et activer le HTTPS

Le fichier `CNAME` inclus dans votre site indique déjà le domaine à GitHub. Au premier déploiement, GitHub a donc normalement déjà renseigné le domaine. Vérifions.

1. Sur `github.com`, dépôt, onglet « Settings », menu « Pages ».
2. Rubrique « Custom domain » : le champ doit afficher `decider-numerique-ia.fr`. S'il est vide, tapez-le et cliquez « Save ».
3. GitHub lance une vérification DNS. Tant que la propagation OVH n'est pas terminée, un message d'erreur orange peut s'afficher. C'est normal, repassez plus tard.
4. Une fois la vérification réussie (coche verte), cochez la case « Enforce HTTPS ». Si elle est grisée, attendez encore : le certificat de sécurité se génère automatiquement, cela peut prendre jusqu'à 24 heures.

Quand tout est vert, ouvrez `https://decider-numerique-ia.fr`. Votre site est en ligne.

---

## Faire une mise à jour plus tard (lots 2 et 3)

Quand je vous livrerai les lots suivants, la procédure sera bien plus courte :

1. Décompressez le nouveau zip.
2. Copiez son contenu dans votre dossier `decider-numerique-ia` géré par GitHub Desktop (en remplaçant les fichiers existants).
3. Dans GitHub Desktop : tapez un résumé (par exemple « Lot 2 »), « Commit to main », puis « Push origin ».
4. Le site se met à jour tout seul en une à trois minutes.

---

## En cas de problème

- **La construction est rouge dans l'onglet Actions** : cliquez dessus, copiez le message d'erreur, envoyez-le moi.
- **Le site temporaire `mehdimoudden56.github.io/decider-numerique-ia` ne s'affiche pas** : vérifiez que la Source est bien « GitHub Actions » à l'étape 3, et que la construction est verte.
- **Le domaine `decider-numerique-ia.fr` affiche une erreur** : la propagation DNS n'est probablement pas terminée. Attendez quelques heures et réessayez.
- **« Enforce HTTPS » reste grisé** : le certificat n'est pas encore prêt. Patientez jusqu'à 24 heures.
- **Le mot de passe des téléchargements ne marche pas** : vérifiez que le secret `SITE_PASSWORD` est créé (étape 4) et relancez une construction.

---

© 2026 Mehdi Moudden. L'auteur s'exprime à titre personnel.
