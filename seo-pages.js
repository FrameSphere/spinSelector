/**
 * seo-pages.js – Hilfsfunktionen für SEO-Content-Seiten
 * SpinSelector · spinselector.pages.dev
 */

// Farbpalette – identisch mit script.js
var WHEEL_COLORS = [
    '#FF6B6B','#4ECDC4','#45B7D1','#FFA07A','#98D8C8',
    '#F7DC6F','#BB8FCE','#85C1E2','#F8B739','#52B788',
    '#FF8B94','#A8DADC','#E76F51','#2A9D8F','#E9C46A',
    '#F4A261','#8E7CC3','#6A994E','#BC4749','#457B9D'
];

/**
 * Optionen ins Glücksrad laden und zur Hauptseite weiterleiten.
 * @param {string[]} texts - Array von Optionsbezeichnungen
 * @param {string}   target - Ziel-URL (Standard: /de/)
 */
function loadToWheel(texts, target) {
    var dest = target || '/de/';
    var opts = texts.map(function(t, i) {
        return {
            text: t,
            color: WHEEL_COLORS[i % WHEEL_COLORS.length],
            id: Date.now() + i
        };
    });
    try {
        localStorage.setItem('wheelOptions', JSON.stringify(opts));
    } catch (e) {
        console.error('Konnte Optionen nicht speichern:', e);
    }
    window.location.href = dest;
}
