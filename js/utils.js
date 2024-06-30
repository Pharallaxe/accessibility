/*********************************************************************************
 * PARTIE OUTILS
 *********************************************************************************/

/**
 * Fonction utilitaire pour sélectionner un élément du DOM.
 * @param {string} selector - Le sélecteur CSS de l'élément à sélectionner.
 * @returns {Element} L'élément correspondant au sélecteur.
 */
export function $(selector) {
    return document.querySelector(selector);
}

/*********************************************************************************
 * PARTIE CONSTANTES
 *********************************************************************************/

/**
 * Référence à l'élément HTML avec l'ID "accessibilityPanel".
 * @type {Element}
 */
export const accessibilityPanel = $("#accessibilityPanel");

/**
 * Référence au nom de la variable en LocalStorage.
 * @type {string}
 */
export const accessibilityStorageName = "accessibility";



/**
 * Classe contenant les références aux éléments HTML liés aux paramètres d'accessibilité.
 */
export class Buttons {
    /**
     * Bouton pour diminuer la taille de police.
     * @type {Element}
     */
    static fontSizeDecrease = $("#fontSizeDecreaseButton");

    /**
     * Bouton pour augmenter la taille de police.
     * @type {Element}
     */
    static fontSizeIncrease = $("#fontSizeIncreaseButton");

    /**
     * Bouton pour diminuer la hauteur de ligne.
     * @type {Element}
     */
    static lineHeightDecrease = $("#lineHeightDecreaseButton");

    /**
     * Bouton pour augmenter la hauteur de ligne.
     * @type {Element}
     */
    static lineHeightIncrease = $("#lineHeightIncreaseButton");

    /**
     * Bouton pour diminuer l'espacement des lettres.
     * @type {Element}
     */
    static letterSpacingDecrease = $("#letterSpacingDecreaseButton");

    /**
     * Bouton pour augmenter l'espacement des lettres.
     * @type {Element}
     */
    static letterSpacingIncrease = $("#letterSpacingIncreaseButton");

    /**
     * Bouton pour diminuer l'espacement des mots.
     * @type {Element}
     */
    static wordSpacingDecrease = $("#wordSpacingDecreaseButton");

    /**
     * Bouton pour augmenter l'espacement des mots.
     * @type {Element}
     */
    static wordSpacingIncrease = $("#wordSpacingIncreaseButton");

    /**
     * Select pour choisir la famille de polices.
     * @type {Element}
     */
    static fontFamilySelect = $("#fontFamilySelect");
}

/**
 * Classe contenant les propriétés CSS liées aux paramètres d'accessibilité.
 */
export class Properties {
    /**
     * Propriété CSS pour la taille de police.
     * @type {string}
     */
    static fontSize = "--font-size";

    /**
     * Propriété CSS pour la hauteur de ligne.
     * @type {string}
     */
    static lineHeight = "--line-height";

    /**
     * Propriété CSS pour l'espacement des lettres.
     * @type {string}
     */
    static letterSpacing = "--letter-spacing";

    /**
     * Propriété CSS pour l'espacement des mots.
     * @type {string}
     */
    static wordSpacing = "--word-spacing";

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
export const fontFamilies = [
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