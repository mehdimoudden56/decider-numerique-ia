# Note de déploiement, Lot 2

Outils opérationnels du site compagnon. Tout est validé en build strict local (`mkdocs build --strict`, 0 lien cassé, 0 avertissement de navigation).

## Contenu du zip

31 pages nouvelles + 2 fichiers modifiés.

| Fichier | Nature | Action GitHub |
|---|---|---|
| `docs/outils/action-30-jours-ch02.md` à `ch16.md` (15 fichiers) | Nouveau | Ajouter |
| `docs/outils/bonnes-questions-ch03, 04, 06, 08, 09, 10, 11, 12, 13, 14, 16.md` (11 fichiers) | Nouveau | Ajouter |
| `docs/outils/check-list-maturite-si.md` | Nouveau (Conclusion A) | Ajouter |
| `docs/outils/auto-diagnostic-dirigeant.md` | Nouveau (Conclusion B) | Ajouter |
| `docs/outils/tableau-bord-codir-si.md` | Nouveau (Conclusion C) | Ajouter |
| `docs/outils/scenarios-types.md` | Nouveau (Conclusion D) | Ajouter |
| `docs/glossaire/glossaire-essentiel.md` | Nouveau (Conclusion E) | Ajouter |
| `docs/outils/index.md` | Modifié | Remplacer |
| `mkdocs.yml` | Modifié (navigation) | Remplacer |

## Marche à suivre, interface web GitHub

1. Dépôt `mehdimoudden56/decider-numerique-ia`, bouton `Add file` puis `Upload files`.
2. Glisser les fichiers en respectant l'arborescence : tous les `.md` d'outils vont dans `docs/outils/`, le glossaire essentiel dans `docs/glossaire/`.
3. Pour les deux fichiers modifiés (`docs/outils/index.md`, `mkdocs.yml`), ouvrir chaque fichier existant, `Edit`, coller le nouveau contenu, `Commit`. Le téléversement direct écrase aussi si le chemin est identique.
4. Le workflow GitHub Actions se déclenche seul. Vérifier la coche verte, puis le rendu en ligne.

## Périmètre couvert

- Action dans les 30 jours : chapitres 2 à 16 (15 pages). Le chapitre 1 était déjà en ligne.
- Bonnes questions à poser : chapitres 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 16 (11 pages). Les chapitres 2, 5, 7 et 15 n'ont pas de bloc questions dans le manuscrit source ; rien n'a été inventé.
- Conclusion outillée, 5 pages A à E regroupant les 7 outils (les deux check-lists cohabitent sous A, le tableau de bord et la trame de comité sous C).

## Points de vigilance pour ta relecture

- Les méta-fiches « Pour quoi » et « Durée » sont rédigées par déduction fidèle des titres de chapitre et du texte des actions. À ajuster si tu veux une autre formulation.
- Renvois livre : placeholders « page à préciser à la parution », comme au Lot 1.
- Les contenus sont extraits du v7.37 ; relecture éditoriale conseillée avant publication (artefacts d'extraction possibles sur les tableaux denses : auto-diagnostic 20 questions, check-list maturité, glossaire).
- Hors périmètre Lot 2, signalé pour mémoire : un titre parasite « Chapitre 13, industrialisation de l'IA » est incrusté dans l'annexe bibliographie du v7.37.
- Le problème des fichiers téléchargeables accessibles par URL directe sur dépôt public reste entier ; non concerné ici, le Lot 2 ne livre que des pages.

© 2026 Mehdi Moudden.
