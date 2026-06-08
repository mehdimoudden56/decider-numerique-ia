<span class="kicker">Article</span>

# Par où commencer, choisir et séquencer ses cadres de référence

!!! note "Scénario SI"
    Un nouveau DSI prend ses fonctions dans une ETI de 800 personnes. Dès sa première semaine, il constate le même diagnostic dans trois domaines différents, les équipes de support traitent les mêmes incidents à répétition sans jamais en chercher la cause racine, les projets numériques dépassent systématiquement leurs budgets faute de priorisation rigoureuse, et les équipes de développement passent deux semaines à chaque déploiement à cause de processus de mise en production manuels et fragiles. Son prédécesseur avait tenté de résoudre chacun de ces problèmes séparément, avec des outils différents et des consultants différents. Le nouveau DSI prend une décision différente, il choisit trois cadres de référence adaptés à chaque problème (ITIL, COBIT, DevOps), et les déploie progressivement en commençant par les fondations.

La règle est simple : commencer par le problème le plus douloureux. Si les métiers se plaignent du support, commencer par ITIL. Si les projets dérivent, commencer par COBIT et la gouvernance de portefeuille. Si les délais de mise en production sont trop longs, commencer par DevOps. Le bon cadre est celui qui résout un problème réel, pas celui qui est à la mode.
Le choix des cadres à déployer est une décision stratégique conjointe de la direction générale et de la DSI. Il dépend de la maturité actuelle, des priorités stratégiques et de la capacité de transformation disponible. Trois principes le guident.

### Principe 1.

Commencer par les fondations. ITIL pour la gestion des services et COBIT pour la gouvernance forment les fondations sur lesquelles les autres cadres s’appuient. Une organisation qui veut déployer l’agilité sans gouvernance claire des décisions d’investissement court à l’échec.

### Principe 2.

Ne pas tout lancer en même temps. Chaque cadre demande un investissement en formation, en changement de pratiques et en outillage. Deux ou trois chantiers simultanés constituent un maximum. La règle de l’ACM (analyse de capacité des moyens) s’applique ici aussi : mieux vaut un cadre bien implanté que trois cadres à moitié adoptés.

### Principe 3.

Mesurer la maturité avant de choisir. Avant d’engager un nouveau cadre, objectiver le point de départ. Le MAGNum, présenté en section 7.8 et au chapitre 8, section 8.6, visualise les fragilités les plus importantes et priorise les chantiers sur une base factuelle.

**Figure 7.2. Choisir le bon cadre selon la situation**  
*Guide de sélection pratique pour le dirigeant.*

| Situation de l’organisation | Cadre prioritaire | Cadre complémentaire | Signal que le cadre est bien appliqué |
| --- | --- | --- | --- |
| La DSI n’a pas de catalogue de services et les métiers se plaignent du support. | ITIL 4 | Aucun prérequis | Un catalogue de services existe, chaque service a un SLA mesuré, les incidents sont classés par type. |
| Les projets SI dépassent systématiquement les budgets et les délais, les bénéfices ne se réalisent pas. | COBIT 2019 | PMO / Portefeuille | Chaque projet a un dossier économique validé, un sponsor métier, un bilan post-projet est systématique. |
| L’organisation veut accélérer ses livraisons numériques et réduire le time-to-market. | Agile / Scrum | DevOps | Des fonctionnalités sont livrées en production toutes les 2 à 4 semaines. Les métiers participent aux sprint reviews. |
| Plusieurs équipes agiles travaillent en parallèle sur des produits interdépendants. | SAFe | Agile / Scrum | Un PI Planning coordonne les équipes. Les dépendances inter-équipes sont visualisées et gérées. |
| Un client, un régulateur ou un partenaire exige une certification de sécurité. | ISO 27001 | COBIT 2019 | Un SMSI est en place, la politique de sécurité est révisée annuellement, un audit de certification est prévu. |
| Le conseil d’administration souhaite un cadre de gouvernance IT lisible et auditable. | ISO 38500 | COBIT 2019 | Les six principes de gouvernance sont documentés, un rapport annuel de gouvernance IT est présenté au conseil. |
| La direction générale veut mesurer sa maturité de gouvernance numérique sur l’ensemble de ses dimensions. | MAGNum | COBIT 2019 / ISO 38500 | Un radar de maturité sur 13 vecteurs est produit annuellement. Des plans d’action prioritaires sont définis et suivis. |

!!! note
    Cas concret, une ETI industrielle qui structure sa gouvernance SI avec les cadres de référence
    Une ETI industrielle de 500 personnes réalise un bilan de maturité de sa gouvernance numérique. Le diagnostic révèle trois fragilités critiques, pas de catalogue de services ni de SLA formalisés (les métiers ne savent pas à qui s’adresser ni dans quels délais), aucun processus de gouvernance de portefeuille (les projets sont lancés au gré des demandes), et des déploiements mensuels en production avec un taux d’incident post-déploiement de 30 %. Le plan retenu sur deux ans, année 1, implantation d’ITIL pour les services et structuration du portefeuille de projets selon les principes COBIT, année 2, déploiement de pratiques DevOps pour réduire les délais et le taux d’incident de déploiement. Résultats après deux ans, à titre d’ordre de grandeur représentatif de transformations comparables, satisfaction utilisateur passée de 3,2 sur 5 à 4,1 sur 5, taux d’incident post-déploiement réduit de 30 % à moins de 5 %, deux projets stratégiques livrés dans les délais et dans le budget pour la première fois en cinq ans. La leçon, les cadres de référence sont des multiplicateurs de performance, pas des remèdes miracles. Ils fonctionnent quand ils répondent à un problème réel avec une discipline de mise en œuvre.

<div class="ref-livre" markdown>
<span class="ref-livre-label">Référence dans le livre</span>
<p>Ce texte prolonge le chapitre 7, « Les cadres de référence : ITIL, COBIT, Agile, DevOps et les normes essentielles ». Page à préciser à la parution.</p>
</div>

<p class="disclaimer">L’auteur s’exprime à titre personnel. © 2026 Mehdi Moudden.</p>
