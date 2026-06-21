<span class="kicker">Complément en ligne</span>

# Scénarios types : que faire face aux situations les plus fréquentes

<div class="meta-card" markdown>
<div class="meta-cell" markdown>
<span class="meta-label">Pour qui</span>
<span class="meta-value">Dirigeant et comité de direction</span>
</div>
<div class="meta-cell" markdown>
<span class="meta-label">Pour quoi</span>
<span class="meta-value">Disposer d’une fiche d’action pour cinq situations courantes</span>
</div>
<div class="meta-cell" markdown>
<span class="meta-label">Durée</span>
<span class="meta-value">Cinq fiches à consulter au besoin</span>
</div>
</div>

Ces cinq fiches de scénarios répondent aux situations auxquelles les dirigeants et managers sont confrontés le plus fréquemment. Chaque fiche suit le même format : diagnostic de la situation, pièges à éviter, actions prioritaires, indicateurs de succès. Elles ne remplacent pas une analyse de contexte approfondie, mais donnent un cadre de départ robuste.

## Scénario 1 : Mon SI est vieillissant. Par où commencer ?

**Diagnostic de la situation**

Un SI vieillissant se reconnaît à plusieurs symptômes : la dette technique dépasse 25 % du budget Run ; des projets simples prennent deux à trois fois plus de temps qu’ailleurs ; les équipes IT passent plus de temps à maintenir qu’à construire ; les utilisateurs développent des contournements (tableurs, outils non sanctionnés) faute d’outils adaptés ; les recrutements deviennent difficiles car les technologies employées ne sont plus attractives.

!!! warning "Pièges à éviter"
    - Le grand soir : lancer une refonte totale du SI en un seul programme. C’est presque toujours une erreur. Ces programmes durent trop longtemps, coûtent deux à trois fois le budget initial et délivrent rarement la valeur promise.
    - L’inaction par paralysie : attendre d’avoir une feuille de route parfaite avant d’agir. Pendant ce temps, la dette s’accumule et les équipes se découragent.
    - La modernisation technique sans vision métier : remplacer les technologies pour elles-mêmes, sans lier la modernisation à des bénéfices fonctionnels et organisationnels mesurables.

**Actions prioritaires**

1. Cartographier la dette technique : identifier les composants en fin de vie, les applications critiques sans documentation, les compétences rares à risque de départ. Prioriser par criticité métier et niveau de risque.
2. Définir une cible architecturale à 3-5 ans : ce que le SI doit permettre de faire, pas une liste de technologies à remplacer. La cible est co-construite avec les métiers.
3. Construire une feuille de route par paliers stables : chaque palier doit délivrer de la valeur métier visible. Éviter les projets infrastructure pure qui n’ont pas de sponsor métier.
4. Allouer explicitement un budget de réduction de la dette : entre 15 et 25 % du budget Change, sanctuarisé et non prélevable pour les urgences opérationnelles.
5. Communiquer la trajectoire au comité de direction : la modernisation du SI est un investissement stratégique pluriannuel, pas un problème technique de la DSI.

**Indicateurs de succès**

| Indicateur | Cible |
| --- | --- |
| Réduction de la dette technique | La part de la dette technique dans le budget Run diminue d’au moins 3 points par an. |
| Délai de livraison | Le délai moyen de livraison des projets se réduit de 20 % dans les 18 mois suivant le lancement de la feuille de route. |
| Satisfaction utilisateurs | La satisfaction des utilisateurs sur les outils métiers clés progresse d’au moins 0,5 point sur 5 en 12 mois. |

## Scénario 2 : Nous voulons lancer un nouveau service numérique en moins d’un an.

**Diagnostic de la situation**

Le dirigeant fixe une ambition forte : un nouveau service numérique (portail client, application mobile, service en ligne, marketplace) doit être opérationnel dans moins d’un an. Cette ambition est légitime mais elle entre souvent en collision avec la réalité du SI existant, la qualité des données disponibles et la capacité organisationnelle à absorber le changement.

!!! warning "Pièges à éviter"
    - Sous-estimer la dette de données : le nouveau service a besoin de données propres, unifiées et accessibles. Si le SI existant gère les clients par leurs comptes et non par leur relation globale, le service numérique héritera de cette limite dès le premier jour.
    - Traiter la conduite du changement comme un problème de communication : un nouveau service numérique change les processus, les rôles et les habitudes. Sans accompagnement structuré, le service technique peut être déployé et rester inutilisé.
    - Ignorer les contraintes d’intégration : un service numérique fonctionne rarement en isolation. Il doit s’intégrer aux systèmes existants. Ces intégrations prennent du temps et génèrent des risques.

**Actions prioritaires**

1. Démarrer par un diagnostic de faisabilité en 4 semaines : données disponibles, contraintes d’intégration, capacité des équipes, conformité RGPD. Ce diagnostic conditionne la promesse réelle de délai.
2. Adopter une approche MVP (produit minimum viable) : définir la version minimale du service qui crée de la valeur réelle pour l’utilisateur, et la livrer. Les fonctionnalités secondaires viennent ensuite.
3. Identifier un sponsor métier fort avec du temps disponible : le sponsor n’est pas seulement le signataire du dossier économique ; il doit être présent dans les arbitrages hebdomadaires pendant toute la durée du projet.
4. Planifier la conduite du changement dès le cadrage : formation, communication, accompagnement des utilisateurs. Budgéter 15 à 20 % du budget projet pour la conduite du changement.
5. Définir les indicateurs de succès avant le lancement : taux d’adoption du service, satisfaction utilisateur, volume de transactions, coût par transaction. Ces indicateurs sont mesurés à 3, 6 et 12 mois après le lancement.

**Indicateurs de succès**

| Indicateur | Cible |
| --- | --- |
| Taux d’adoption | Proportion d’utilisateurs cibles actifs au moins une fois par mois à 3 mois. |
| Satisfaction utilisateurs | Satisfaction utilisateur sur le nouveau service : supérieure à 4/5 à 6 mois. |
| Retour sur investissement | Délai de retour sur investissement cohérent avec le dossier économique initial, mesuré à 12 mois. |

## Scénario 3 : Nous avons subi une cyberattaque. Que changer structurellement ?

**Diagnostic de la situation**

Une cyberattaque significative (ransomware, exfiltration de données, interruption d’activité) est toujours un révélateur : elle met en lumière des fragilités qui existaient avant l’incident. La question n’est pas seulement ’comment s’est-elle produite ?’ mais ’pourquoi nos défenses n’ont-elles pas fonctionné ?’ et ’qu’est-ce que cela dit de notre gouvernance de la sécurité ?’

!!! warning "Pièges à éviter"
    - Traiter l’incident comme un problème technique isolé : investir uniquement dans des outils de sécurité supplémentaires sans adresser les causes racines organisationnelles et de gouvernance.
    - Chercher un bouc émissaire : attribuer l’incident à un individu ou à la DSI sans reconnaître la responsabilité collective et notamment la responsabilité de gouvernance de la direction générale.
    - Surinvestir dans la sécurité à court terme puis oublier : le pic d’investissement post-incident est souvent suivi d’un relâchement de vigilance 18 mois plus tard, quand la pression retombe.

**Actions prioritaires**

1. Conduire un post-mortem sans complaisance dans les 30 jours : timeline de l’incident, surface d’attaque exploitée, failles de détection et de réponse, impact métier réel. Ce document est présenté au comité de direction.
2. Évaluer la maturité cyber de l’organisation sur 5 dimensions : identification des actifs critiques, protection, détection, réponse, récupération. Identifier les 3 à 5 lacunes les plus critiques.
3. Investir en priorité dans la détection et la réponse : la prévention totale est impossible. La capacité à détecter rapidement et à contenir l’incident détermine l’ampleur des dégâts.
4. Tester le PCA/PRA dans les 6 mois : la cyberattaque a révélé que le plan existant n’était pas suffisant. Un exercice de simulation réaliste, avec participation du comité de direction, est indispensable.
5. Instaurer une revue sécurité trimestrielle au niveau de la direction générale : la cybersécurité n’est pas un sujet technique ; c’est un sujet de gouvernance qui mérite une attention régulière du plus haut niveau.

**Indicateurs de succès**

| Indicateur | Cible |
| --- | --- |
| Délai de détection | Délai moyen de détection d’un incident de sécurité : objectif de réduction de 50 % en 12 mois. |
| Couverture PCA/PRA | Pourcentage des systèmes critiques couverts par un PCA/PRA testé : objectif 100 % dans les 12 mois. |
| Vulnérabilités critiques | Taux de vulnérabilités critiques non traitées dans les délais définis : objectif inférieur à 5 %. |

## Scénario 4 : Nous lançons un programme IA. Comment éviter les pièges classiques ?

**Diagnostic de la situation**

L’IA générative et agentique crée une pression forte sur les organisations : concurrents qui annoncent des déploiements, collaborateurs qui utilisent des outils IA en dehors du cadre officiel, consultants qui vendent des transformations en 90 jours. Dans ce contexte, le risque est double : ne rien faire (perte de compétitivité) ou faire n’importe quoi (gaspillage et risques réglementaires). Un programme IA réussi commence par la clarté sur ce que l’IA peut réellement faire pour l’organisation, et par la qualité des données sur lesquelles elle s’appuie.

!!! warning "Pièges à éviter"
    - Commencer par la technologie et chercher les cas d’usage ensuite : déployer un outil IA générique et demander aux équipes de trouver comment l’utiliser. Cette approche produit des usages superficiels et un ROI introuvable.
    - Ignorer la qualité des données : l’IA ne peut pas compenser des données mal qualifiées, non standardisées ou fragmentées entre silos. Avant de déployer un modèle, il faut vérifier les quatre critères de qualité : pertinence des concepts, exactitude des observations, unicité des référentiels, fiabilité des algorithmes de traitement.
    - Promettre un ROI immédiat : le retour sur investissement de l’IA suit une courbe d’apprentissage organisationnel. Promettre des gains dès le trimestre 1 conduit à mesurer les mauvaises choses et à décourager l’expérimentation.
    - Négliger la gouvernance éthique et réglementaire : l’AI Act européen crée des obligations selon le niveau de risque des systèmes IA déployés. Les systèmes qui affectent des décisions ayant un impact sur les personnes sont soumis à des exigences spécifiques d’explicabilité, de documentation et d’audit.

**Actions prioritaires**

1. Commencer par un inventaire des cas d’usage prioritaires : pour chaque fonction métier, identifier les tâches répétitives à haute valeur cognitive, les décisions qui bénéficieraient d’une aide à l’analyse, les processus ralentis par le volume d’information à traiter.
2. Évaluer la qualité des données disponibles : avant de sélectionner un cas d’usage pour un pilote, vérifier que les données nécessaires existent, sont accessibles et respectent les quatre critères de qualité.
3. Choisir 2 à 3 cas d’usage pilotes à fort impact et faible risque : éviter les projets à enjeux réglementaires ou éthiques élevés pour les premiers déploiements. Construire la confiance organisationnelle progressivement.
4. Définir une politique IA dès le début : principes d’usage autorisés et interdits, périmètre des données utilisables, exigences d’explicabilité, processus de validation humaine des recommandations de l’IA.
5. Mesurer le ROI de manière réaliste à 6 et 12 mois : gains de temps documentés, amélioration de la qualité des décisions, réduction des erreurs, satisfaction des utilisateurs. Mettre à jour les dossiers économiques à la lumière des résultats réels.

**Indicateurs de succès**

| Indicateur | Cible |
| --- | --- |
| Cas d’usage IA en production | Nombre de cas d’usage IA en production à 12 mois : objectif de 2 à 3 cas avec ROI positif démontré. |
| Taux d’adoption | Taux d’adoption des outils IA par les utilisateurs cibles : supérieur à 60 % d’utilisateurs actifs mensuels à 6 mois. |
| Conformité AI Act | Cartographie des systèmes IA par niveau de risque réalisée et plan de conformité validé par le comité de direction. |

## Scénario 5 : Notre DSI nous présente une migration cloud totale. Comment arbitrer ?

**Diagnostic de la situation**

Votre DSI propose une migration de l’ensemble du SI vers le cloud public. L’argument est convaincant : réduction des coûts d’infrastructure, élasticité, accès aux services IA natifs, modernisation du parc applicatif. Mais plusieurs dirigeants ayant engagé cette voie sans analyse approfondie découvrent après 18 à 24 mois que les coûts d’exploitation cloud dépassent les anticipations, que certaines données stratégiques posent des questions de souveraineté, et que la dépendance à un seul fournisseur crée une vulnérabilité nouvelle. La migration cloud est une décision stratégique, pas une décision technique.

!!! warning "Pièges à éviter"
    - Traiter la migration cloud comme une décision technique à déléguer entièrement à la DSI. Le choix d’hébergement engage l’organisation sur des questions de souveraineté des données, de coûts à long terme et de dépendance fournisseur qui appartiennent à la direction générale.
    - Approuver une migration totale sans classification des usages sous-tendus par criticité et sensibilité. Toutes les applications ne méritent pas la même approche : certaines peuvent aller sans restriction dans le cloud public, d’autres requièrent un hébergement souverain ou privé.
    - Ignorer la dimension FinOps. La promesse du cloud est un coût variable et optimisable. Sans gouvernance FinOps dédiée, les coûts cloud dépassent presque systématiquement les prévisions initiales de 30 à 50 % dans les 24 premiers mois.
    - Ne pas anticiper la question de réversibilité. Un système migré vers un cloud public sans architecture de réversibilité est un système dont vous ne pouvez plus sortir à un coût raisonnable.

**Actions prioritaires**

1. Demander une classification de tous les workloads en trois catégories : cloud public sans restriction, cloud souverain/certifié requis, hébergement privé ou on-premise obligatoire. Cette classification est faite conjointement par la DSI, la direction juridique et la direction des risques.
2. Vérifier la conformité avec le Cloud Act et le RGPD pour toutes les données personnelles et stratégiques. Les données soumises au Cloud Act américain chez un fournisseur américain peuvent être accédées par les autorités américaines sans autorisation européenne préalable.
3. Exiger un modèle financier TCO sur 5 ans comparant le scénario cloud avec l’alternative hybride ou privée. Inclure les coûts de migration, les coûts d’exploitation réels (pas théoriques), et les coûts de sortie éventuels.
4. Intégrer une démarche FinOps dès le début du programme. Le FinOps n’est pas une option à ajouter plus tard : c’est une discipline de gouvernance qui doit être opérationnelle dès le premier jour de migration.
5. Valider l’architecture de réversibilité : pour chaque workload migré, comment et à quel coût peut-on changer de fournisseur ou revenir à un hébergement privé dans 3 à 5 ans ?

**Indicateurs de succès**

| Indicateur | Cible |
| --- | --- |
| Classification des workloads | 100 % du parc applicatif classifié par niveau de souveraineté requis dans les 3 mois. |
| TCO cloud vs alternatif | Modèle financier TCO sur 5 ans produit et présenté au comité de direction avant validation du programme. |
| Couverture FinOps | Démarche FinOps opérationnelle dès le 1er jour de migration, avec alertes automatiques sur les dérives de coûts. |

<p class="disclaimer">L’auteur s’exprime à titre personnel. © 2026 Mehdi Moudden.</p>
