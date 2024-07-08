import {Config} from "./Config";

/*********************************************************************************
 * PARTIE OUTILS
 *********************************************************************************/

/**
 * Capitalise la première lettre d'une chaîne de caractères.
 *
 * @param {string} string - La chaîne de caractères à capitaliser.
 * @returns {string} La chaîne de caractères avec la première lettre capitalisée.
 */
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Fonction utilitaire pour sélectionner un élément du DOM.
 * @param {string} selector - Le sélecteur CSS de l'élément à sélectionner.
 * @returns {Element} L'élément correspondant au sélecteur.
 */
export function $(selector) {
    return document.querySelector(selector);
}

export function $All(selector) {
    return document.querySelectorAll(selector);
}

/*********************************************************************************
 * PARTIE ENREGISTREMENT
 *********************************************************************************/

/**
 * Enregistre les paramètres d'accessibilité dans le localStorage.
 * @param {string} cssCategory - La catégorie du paramètre (select, range, ou boolean).
 * @param {string} cssProperty - La propriété CSS à enregistrer.
 * @param {string|number|boolean} cssValue - La valeur de la propriété CSS à enregistrer.
 */
export function saveAccessibilitySettings(cssCategory, cssProperty, cssValue) {
    const existingAccessibilitySettings = JSON.parse(localStorage.getItem(Config.accessibilityStorageName)) || {};
    // Assurez-vous que la catégorie existe
    if (!existingAccessibilitySettings[cssCategory]) {
        existingAccessibilitySettings[cssCategory] = {};
    }

    // Enregistrez la valeur dans la catégorie appropriée
    existingAccessibilitySettings[cssCategory][cssProperty] = cssValue;

    // Sauvegardez les paramètres mis à jour
    localStorage.setItem(Config.accessibilityStorageName, JSON.stringify(existingAccessibilitySettings));
}
