# Note de déploiement consolidée, site compagnon (Lot 3 complet)

Ce paquet contient le site COMPLET (Lot 1 corrigé + Lot 2 + Lot 3). Il remplace
l'état déployé. Téléverser le dossier docs/ et mkdocs.yml dans
mehdimoudden56/decider-numerique-ia via l'interface web de GitHub, en conservant
l'arborescence. Le déploiement GitHub Actions reconstruit le site.

## Build de référence

mkdocs build --strict sur le site complet : code retour 0, 0 lien cassé,
0 avertissement de navigation, 72 pages HTML générées.

## Ce qui a été produit dans cette session

1. Lot 1, conformité typographique. Balayage des apostrophes droites (U+0027) vers
   l'apostrophe typographique (U+2019) sur 13 pages de base + 4 occurrences de
   contenu dans mkdocs.yml (délimiteurs YAML préservés). Un tiret cadratin (U+2014)
   résiduel, utilisé comme glyphe de score par défaut dans la page d'auto-évaluation,
   a été remplacé par un tiret simple.

2. Glossaire étendu. 62 concepts (glossaire/index.md), chaque entrée avec définition,
   traduction managériale et renvoi de chapitre. Source : manuscrit v8_6.

3. Dix sections reformatées (contenus retirés à l'adaptation Eyrolles, source v7.37) :
   6 articles, 1 dossier de veille, 3 outils.

4. Sept concepts originaux (concepts-originaux/), niveau présentation : quatre défis
   épistémiques, DISDO, grille DISO, quatre critères de qualité des données,
   IT Scorecard adapté, sept convictions (verbatim), typologie des neuf cas.
   Mention INPI Soleau DSO2026014317 sur chaque page.

5. Articles fondateurs et adaptés (articles/) : 3 teasers de genèse (le défi
   épistémique, la donnée et l'empirisme, la nature de la numérisation) et 2 articles
   adaptés (explicabilité de l'IA, grandes directions de l'IA).

6. Cas Val d'Armorique (cas/val-d-armorique.md), cas pédagogique fictif d'ouverture
   du chapitre 9, retrouvé dans une table du v7.37.

7. Bibliographie commentée (bibliographie/index.md), l'Annexe F du livre :
   lectures recommandées par profil de dirigeant (8 profils) + articles de l'auteur,
   avec liens vers les pages d'articles du site.

## Vérifications globales (tout le site)

- Apostrophe droite U+0027 en corps de texte : 0.
- Tiret cadratin U+2014 : 0. Demi-cadratin U+2013 : 0.
- NBSP devant : ; ? ! et dans les guillemets « » : conformes.
- Mentions d'employeur (Saint-Gobain, Accenture, TotalEnergies, Société Générale) : aucune.
- NotPetya : présent uniquement comme entrée de glossaire (définition générique de
  l'attaque de 2017), aucune référence à un incident d'employeur, aucun chiffre associé.

## Points à valider par l'auteur (non tranchés, signalés)

1. META-CARD DES 3 OUTILS (documents du dirigeant, priorisation, grille de maturité) :
   les étiquettes Pour qui / Pour quoi / Durée sont DEDUITES, pas tirées du manuscrit.

2. SEC-08, grille de maturité projet et exploitation : c'est la section 6.8 du livre
   (grille six dimensions), distincte du quiz interactif 20 questions déjà en ligne.
   Titre du livre conservé, libellé de nav désambiguïsé. La reconstitution éventuelle
   des vraies 20 questions du quiz reste un sujet ouvert.

3. SEC-10 (ERP) : la phrase sur la taille du marché mondial ERP est conservée verbatim
   avec son auto-attribution. Un caveat « à la date de rédaction » serait prudent.

4. CONCEPTS ORIGINAUX : publiés en présentation (structure et squelette des grilles),
   sans le détail opérationnel ni les barèmes, qui restent la valeur du livre.

5. ARTICLES, terminologie du 2e défi : le glossaire l'indexe sous « Convaincre »,
   la Figure 1.1 sous « formuler » ; le corps du livre les réunit (« formuler et
   convaincre »), formulation retenue dans la page concept.

6. ARTICLES, attribution corrigée : les quatre critères de qualité version 2021 sont
   issus de l'article « Data-driven decision making value chain » (décembre 2021),
   et non de « Data Centricity as the new Empiricism » (octobre 2021). La page de
   genèse couvre désormais les deux articles avec la bonne attribution. La formulation
   2021 diffère de celle du livre (la page le signale).

7. SOURCE : l'ensemble du Lot 3 a été extrait du manuscrit v8_6, NON du canonique de
   soumission v8_8s (non fourni). À reconfirmer si v8_8s a modifié glossaire, Annexe F,
   ou les sections concernées.

8. BIBLIOGRAPHIE : l'Annexe F recommande cinq articles de l'auteur. Quatre ont une page
   sur le site et sont liés ; un (« Expertise vs. Decision-Making », janvier 2025) n'a
   pas de page dédiée (cité sans lien).

## Rappel des suites hors site

- Insérer les vrais numéros de page dans les blocs « Référence dans le livre » une fois
  la mise en page Eyrolles finalisée (actuellement « Page à préciser à la parution »).
