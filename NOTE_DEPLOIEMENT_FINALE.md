# Note de déploiement consolidée, site compagnon (Lot 3 complet + ressources)

Paquet du site COMPLET (Lot 1 corrigé + Lot 2 + Lot 3 + ressources téléchargeables).
Téléverser docs/ et mkdocs.yml dans mehdimoudden56/decider-numerique-ia via l'interface
web de GitHub, en conservant l'arborescence. GitHub Actions reconstruit le site.

## Build de référence
mkdocs build --strict : code retour 0, 0 lien cassé, 0 avertissement, 72 pages HTML,
5 ressources téléchargeables copiées dans /ressources/.

## Ressources téléchargeables (nouveau)
Cinq fichiers générés à partir du contenu du site, dans docs/ressources/ :
- action-30-jours-chapitre-1.pdf
- bonnes-questions-chapitre-1.pdf
- grille-auto-evaluation-20-questions.pdf (version imprimable, 20 questions, barème, paliers)
- grille-scoring-multi-evaluateurs.xlsx (6 évaluateurs, calcul des écarts, profils ; 80 formules, 0 erreur)
- trame-animation-comite.pdf (déroulé d'atelier 2 h, assemblé depuis le mode d'emploi et l'action chapitre 1)

La page docs/telecharger.md liste ces fichiers et reste protégée par mot de passe
(en-tête password: __SITE_PASSWORD__, remplacé par le secret GitHub Actions au build).

## IMPORTANT, modèle de protection réel (à connaître)
Le plugin encryptcontent chiffre le CONTENU HTML de la page telecharger (AES côté client).
Conséquence : sans le mot de passe, un visiteur ne voit NI les liens NI les URL des fichiers.
La découverte des ressources est donc bien fermée par le mot de passe.

En revanche, les fichiers eux-mêmes (PDF, XLSX) sont des ressources statiques servies par
GitHub Pages et ne sont PAS chiffrés : quiconque CONNAÎT déjà l'URL exacte d'un fichier
(par exemple parce qu'un lecteur la lui a transmise) peut le télécharger sans mot de passe.
Cela équivaut, en pratique, à un lecteur qui partagerait directement le fichier.

Si une protection cryptographique au niveau des fichiers est souhaitée (les fichiers
n'existant qu'après déchiffrement de la page), il faudrait les embarquer encodés en base64
dans la page chiffrée. C'est plus lourd (page volumineuse, ergonomie de téléchargement
différente) et non mis en place ici. À décider si le modèle actuel ne suffit pas.

## Contenu du Lot 3 (rappel)
Glossaire 62 concepts ; 10 sections reformatées (6 articles, 1 veille, 3 outils) ;
7 concepts originaux (mention INPI Soleau DSO2026014317) ; 5 pages articles (3 teasers de
genèse + 2 adaptés) ; cas Val d'Armorique ; bibliographie commentée (Annexe F) ;
5 ressources téléchargeables. Lot 1 : balayage typographique (apostrophes + un tiret cadratin).

## Conformité globale vérifiée
0 apostrophe droite (corps), 0 tiret cadratin, 0 demi-cadratin, NBSP conformes,
aucune mention d'employeur. NotPetya uniquement comme entrée de glossaire (définition générique).

## Points à valider par l'auteur (rappel)
Meta-cards déduites (3 outils) ; SEC-08 grille de maturité vs quiz 20 questions ;
chiffre marché ERP (caveat date) ; concepts en présentation seulement ;
terminologie 2e défi (formuler/convaincre) ; attribution corrigée des critères qualité 2021
(article de décembre) ; source v8_6 et non v8_8s ; un article auteur (Expertise vs
Decision-Making) cité en bibliographie sans page dédiée.

## Suite hors site
Insérer les vrais numéros de page dans les blocs « Référence dans le livre » à la parution.
