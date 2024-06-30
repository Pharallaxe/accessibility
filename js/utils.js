/*********************************************************************************
 * PARTIE OUTILS
 *********************************************************************************/

/**
 * Fonction utilitaire pour sélectionner un élément du DOM.
 * @param {string} selector - Le sélecteur CSS de l'élément à sélectionner.
 * @returns {Element} L'élément correspondant au sélecteur.
 */
function $(selector) {
    return document.querySelector(selector);
}

/*********************************************************************************
 * PARTIE CONSTANTES
 *********************************************************************************/

class Config {
    static accessibilityPanel = $("#accessibilityPanel");
    static accessibilityStorageName = "accessibility";
}

/**
 * Classe contenant les références aux éléments HTML liés aux paramètres d'accessibilité.
 */
class Buttons {
    /**
     * Select pour choisir la famille de polices.
     * @type {Element}
     */
    static fontFamilySelect = $("#fontFamilySelect");
}

/**
 * Classe contenant les propriétés CSS liées aux paramètres d'accessibilité.
 */
class Properties {
    /**
     * Propriété CSS pour la famille de polices.
     * @type {string}
     */
    static fontfamily = "--font-family";
}

/**
 * Tableau des familles de polices disponibles.
 * @type {string[]}
 */
const fontFamilies = [
    "Times New Roman",
    "Arial",
    "Verdana",
    "Georgia",
    "Courier New",
    "Roboto",
    "Comic Sans MS",
    "Ms Gothic",
    "Garamond",
];