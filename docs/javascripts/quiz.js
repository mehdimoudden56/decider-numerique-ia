/* ==========================================================================
   Quiz auto-évaluation, scoring temps réel et interprétation
   ========================================================================== */
(function () {
  function initQuiz() {
    var form = document.getElementById('quiz-form');
    if (!form) return;

    var scoreEl = document.getElementById('score-courant');
    var nbEl = document.getElementById('nb-repondu');
    var barFill = document.getElementById('bar-fill');
    var resultatEl = document.getElementById('resultat');
    var resultatTitre = document.getElementById('resultat-titre');
    var resultatScore = document.getElementById('resultat-score');
    var resultatCorps = document.getElementById('resultat-corps');

    var nbQuestions = parseInt(form.getAttribute('data-nb-questions') || '20', 10);
    var scoreMax = nbQuestions * 3;

    var interpretations = [
      {
        max: Math.round(scoreMax * 0.25),
        titre: 'Maturité initiale, fonctionnement réactif',
        texte: "<p>Votre organisation se situe dans une logique principalement <strong>réactive</strong> face au numérique. Le système d'information est traité comme un sujet d'expert, peu remonté au comité de direction. Les décisions se prennent par à-coups, souvent en situation de crise.</p><p><strong>Priorité immédiate</strong> : créer une instance de pilotage stratégique du SI réunissant la direction générale et la DSI au moins une fois par trimestre.</p>"
      },
      {
        max: Math.round(scoreMax * 0.5),
        titre: 'Maturité émergente, premiers fondamentaux',
        texte: "<p>Votre organisation a posé <strong>quelques fondamentaux</strong>, mais la gouvernance numérique n'a pas atteint un niveau de structuration suffisant pour résister aux turbulences. Les arbitrages restent largement conjoncturels.</p><p><strong>Priorités</strong> : formaliser le schéma directeur numérique, expliciter les trois mandats de la DSI, instaurer un tableau de bord SI régulier pour le comité de direction.</p>"
      },
      {
        max: Math.round(scoreMax * 0.75),
        titre: 'Maturité structurée, gouvernance opérante',
        texte: "<p>Votre organisation dispose d'une <strong>gouvernance numérique opérante</strong>. Les instances existent, les indicateurs sont suivis, la conformité est tenue. C'est une situation solide.</p><p><strong>Axes de progrès</strong> : renforcer la dimension stratégique du SI, industrialiser la conduite du changement, professionnaliser le pilotage des prestataires et la maîtrise de la dette technique.</p>"
      },
      {
        max: scoreMax,
        titre: 'Maturité avancée, gouvernance pilotée',
        texte: "<p>Votre organisation présente une <strong>gouvernance numérique avancée</strong>, pilotée et améliorée en continu. C'est un profil rare.</p><p><strong>Vigilance</strong> : ne pas confondre maturité structurelle et invulnérabilité. La meilleure gouvernance ne supprime pas le risque, elle le rend gouvernable. La complaisance est le premier signal de régression.</p>"
      }
    ];

    function update() {
      var total = 0, nb = 0;
      for (var i = 1; i <= nbQuestions; i++) {
        var checked = form.querySelector('input[name="q' + i + '"]:checked');
        if (checked) { total += parseInt(checked.value, 10); nb += 1; }
      }
      if (scoreEl) scoreEl.textContent = total;
      if (nbEl) nbEl.textContent = nb;
      if (barFill) barFill.style.width = ((nb / nbQuestions) * 100) + '%';

      if (nb === nbQuestions && resultatEl) {
        var interp = interpretations.find(function (it) { return total <= it.max; });
        if (interp) {
          resultatTitre.textContent = interp.titre;
          resultatScore.textContent = total;
          resultatCorps.innerHTML = interp.texte;
          resultatEl.classList.add('is-revealed');
          setTimeout(function () {
            resultatEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 250);
        }
      } else if (resultatEl) {
        resultatEl.classList.remove('is-revealed');
      }
    }

    form.addEventListener('change', update);
  }

  // MkDocs Material navigation.instant recharge le DOM en SPA :
  // on réinitialise à chaque changement de page.
  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(initQuiz);
  } else {
    document.addEventListener('DOMContentLoaded', initQuiz);
  }
})();
