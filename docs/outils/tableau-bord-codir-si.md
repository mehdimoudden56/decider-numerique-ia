<span class="kicker">Conclusion outillée · Outil C</span>

# Modèles de tableaux de bord et de comités

<div class="meta-card" markdown>
<div class="meta-cell" markdown>
<span class="meta-label">Pour qui</span>
<span class="meta-value">Dirigeant, DSI et secrétariat du comité</span>
</div>
<div class="meta-cell" markdown>
<span class="meta-label">Pour quoi</span>
<span class="meta-value">Équiper le comité de direction d’un tableau de bord et d’une trame de pilotage</span>
</div>
<div class="meta-cell" markdown>
<span class="meta-label">Durée</span>
<span class="meta-value">À mettre en place sur un cycle de comité</span>
</div>
</div>

## Modèle de tableau de bord SI et numérique pour comité de direction

Un tableau de bord SI efficace pour un comité de direction répond à deux exigences contradictoires : être suffisamment synthétique pour être lu en moins de cinq minutes, et suffisamment précis pour permettre des décisions éclairées. Le modèle ci-dessous s’organise en quatre quadrants couvrant la santé opérationnelle, la performance économique, la transformation en cours et la sécurité/conformité.

| Indicateur | Ce qu’il mesure | Fréquence | Seuil d’alerte |
| --- | --- | --- | --- |
| QUADRANT 1 : SANTÉ OPÉRATIONNELLE | QUADRANT 1 : SANTÉ OPÉRATIONNELLE | QUADRANT 1 : SANTÉ OPÉRATIONNELLE | QUADRANT 1 : SANTÉ OPÉRATIONNELLE |
| Disponibilité des systèmes critiques | Taux de disponibilité réelle vs SLA contractuels, par système critique. | Mensuelle | Disponibilité inférieure à 99,5 % sur 2 mois consécutifs. |
| Satisfaction utilisateurs | Score de satisfaction des utilisateurs internes vis-à-vis des outils et du support SI. | Trimestrielle | Score inférieur à 3,5/5 ou dégradation de plus de 0,5 point en un trimestre. |
| Volume et délai de résolution des incidents | Nombre d’incidents par criticité et délai moyen de résolution par niveau de priorité. | Mensuelle | Augmentation de 20 % du volume d’incidents P1/P2 ou dépassement des SLA de résolution. |
| Taux de succès des mises en production | Pourcentage de mises en production sans incident majeur dans les 48 h suivant le déploiement. | Mensuelle | Taux inférieur à 90 % sur deux mois consécutifs. |
| QUADRANT 2 : PERFORMANCE ÉCONOMIQUE | QUADRANT 2 : PERFORMANCE ÉCONOMIQUE | QUADRANT 2 : PERFORMANCE ÉCONOMIQUE | QUADRANT 2 : PERFORMANCE ÉCONOMIQUE |
| Exécution budgétaire Run/Change/Build | Consommé vs budget par catégorie, avec projection fin d’année et identification des écarts. | Trimestrielle | Dépassement de 15 % ou sous-consommation de 20 % sur le Change (signal de blocage). |
| Avancement du portefeuille de projets | Statut des projets significatifs : vert (dans les clous), orange (risque identifié), rouge (en difficulté). | Trimestrielle | Plus de 30 % du portefeuille en orange ou rouge. Tout projet rouge non recadré depuis deux comités. |
| Part de la dette technique | Pourcentage du budget Run consacré à la maintenance corrective de systèmes obsolètes ou en fin de vie. | Semestrielle | Part supérieure à 25 % du budget Run total : signal de dégradation de la capacité à innover. |
| ROI des projets livrés | Bilan post-projet des 3 à 5 projets les plus significatifs livrés dans les 12 mois : bénéfices réalisés vs bénéfices prévus. | Annuelle | Bénéfices réalisés inférieurs à 60 % des bénéfices prévus sur la majorité des projets évalués. |
| QUADRANT 3 : TRANSFORMATION ET INNOVATION | QUADRANT 3 : TRANSFORMATION ET INNOVATION | QUADRANT 3 : TRANSFORMATION ET INNOVATION | QUADRANT 3 : TRANSFORMATION ET INNOVATION |
| Avancement du SDSI | Pourcentage des jalons du Schéma Directeur atteints à date, avec projection sur les 12 prochains mois. | Semestrielle | Retard de plus de 6 mois sur les jalons stratégiques ou révision majeure non anticipée. |
| Maturité et usage de l’IA | Nombre d’initiatives IA en production, en pilote et en étude. ROI mesuré sur les initiatives en production. | Semestrielle | Absence de cas d’usage IA en production après 18 mois de programme IA. |
| Culture numérique des équipes | Taux de managers formés aux outils numériques prioritaires. Niveau de satisfaction des métiers dans la co-construction des projets SI. | Annuelle | Taux de formation inférieur à 60 % ou satisfaction des métiers en dégradation continue. |
| QUADRANT 4 : SÉCURITÉ ET CONFORMITÉ | QUADRANT 4 : SÉCURITÉ ET CONFORMITÉ | QUADRANT 4 : SÉCURITÉ ET CONFORMITÉ | QUADRANT 4 : SÉCURITÉ ET CONFORMITÉ |
| Niveau de risque cyber | Synthèse des vulnérabilités critiques non corrigées, des incidents de sécurité et du niveau de maturité RSSI. | Trimestrielle | Vulnérabilités critiques non traitées depuis plus de 30 jours. Incident de sécurité non divulgué. |
| Conformité réglementaire numérique | État d’avancement des chantiers de mise en conformité RGPD, NIS2, DORA (selon secteur), AI Act. | Semestrielle | Chantier de conformité critique en retard de plus de 6 mois sur le calendrier réglementaire. |
| Couverture PCA/PRA | Pourcentage des systèmes critiques couverts par un PCA/PRA testé dans les 12 derniers mois. | Annuelle | Systèmes critiques non couverts ou PCA non testé depuis plus de 24 mois. |

## Trame type de comité de pilotage SI et IA

Un comité de pilotage SI efficace est un lieu de décision, pas de présentation. Cette trame définit l’ordre du jour type, les décisions à prendre et les documents à exiger. Elle est adaptable selon que le comité est stratégique (trimestriel, niveau DG) ou opérationnel (mensuel, niveau DSI/directeurs métiers).

| Rubrique | Durée | Objectif | Document requis | Décision attendue |
| --- | --- | --- | --- | --- |
| Tableau de bord synthétique | 10 min | Prise de connaissance rapide de la santé du SI, du portefeuille et des alertes actives. | Tableau de bord selon le modèle ci-dessus, transmis 48 h avant le comité. | Prise d’acte ou déclenchement de points d’attention spécifiques. |
| Points chauds et alertes | 15 min | Traitement des sujets en rouge ou orange identifiés dans le tableau de bord. Décisions de recadrage. | Fiche de situation par projet ou sujet en difficulté : état, causes, options, recommandation. | Décision de recadrage, réallocation de ressources, escalade ou arrêt de projet. |
| Arbitrages sur le portefeuille | 20 min | Priorisation des nouvelles demandes, arbitrage entre projets en compétition pour les mêmes ressources. | Grille de priorisation mise à jour, avec scoring valeur/risque/faisabilité par demande. | Décisions de lancement, de report ou de dé-priorisation, avec justification documentée. |
| Point stratégique SI | 15 min | Un sujet de fond par comité : avancement SDSI, enjeu de dette technique, programme IA, souveraineté numérique, etc. | Note de synthèse de 2 pages maximum : contexte, enjeux, options, recommandation. | Orientation stratégique, demande d’étude complémentaire ou décision définitive. |
| Clôture et actions | 5 min | Confirmation des décisions prises, attribution des actions, date du prochain comité. | Compte rendu synthétique : décisions, actions, responsables, délais. | Validation du compte rendu en séance ou par retour dans les 48 h. |

<p class="disclaimer">L’auteur s’exprime à titre personnel. © 2026 Mehdi Moudden.</p>
