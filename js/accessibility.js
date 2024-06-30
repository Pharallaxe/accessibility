function $(selector) {
    return document.querySelector(selector);
}


class Button {
    static fontSizeDecrease = $("#fontSizeDecreaseButton");
    static fontSizeIncrease = $("#fontSizeIncreaseButton");

    static lineHeightDecrease = $("#lineHeightDecreaseButton");
    static lineHeightIncrease = $("#lineHeightIncreaseButton");

    static letterSpacingDecrease = $("#letterSpacingDecreaseButton");
    static letterSpacingIncrease = $("#letterSpacingIncreaseButton");

    static wordSpacingDecrease = $("#wordSpacingDecreaseButton");
    static wordSpacingIncrease = $("#wordSpacingIncreaseButton");
}

class Property {
    static fontSize = "--font-size";
    static lineHeight = "--line-height";
    static letterSpacing = "--letter-spacing";
    static wordSpacing = "--word-spacing";
}


/**
 * Ajuste la valeur d'une propriété CSS sur l'élément racine (root).
 * @param {string} property - La propriété CSS à ajuster.
 * @param {number} adjustment - La valeur d'ajustement à ajouter à la propriété CSS.
 * @param {string} [unit='px'] - L'unité de la valeur d'ajustement (par défaut : 'px').
 */
function adjustRoot(property, adjustment, unit = 'px') {
    console.log(property, adjustment, unit);
    const root = document.documentElement;
    root.style.setProperty(property, `${parseFloat(getComputedStyle(root).getPropertyValue(property)) + adjustment}${unit}`);
}

/**
 * Ajoute un écouteur d'événement 'click' à un élément et ajuste une propriété CSS sur l'élément racine (root) lors du clic.
 * @param {HTMLElement} element - L'élément auquel ajouter l'écouteur d'événement.
 * @param {string} property - La propriété CSS à ajuster sur l'élément racine.
 * @param {number} value - La valeur d'ajustement à ajouter à la propriété CSS.
 * @param {string} [unit='px'] - L'unité de la valeur d'ajustement (par défaut : 'px').
 */
function addEventButton(element, property, value, unit = 'px') {
    element.addEventListener('click', () => adjustRoot(property, value, unit));
}

/**
 * Initialise l'ajustement de la taille de police.
 * Ajoute des écouteurs d'événement 'click' aux boutons de diminution et d'augmentation de la taille de police.
 */
function initializeFontSize() {
    addEventButton(Button.fontSizeDecrease, Property.fontSize, -2);
    addEventButton(Button.fontSizeIncrease, Property.fontSize,  2);
}

/**
 * Initialise l'ajustement de la hauteur de ligne.
 * Ajoute des écouteurs d'événement 'click' aux boutons de diminution et d'augmentation de la hauteur de ligne.
 */
function initializeLineHeight() {
    addEventButton(Button.lineHeightDecrease, Property.lineHeight, -0.1, "");
    addEventButton(Button.lineHeightIncrease, Property.lineHeight,  0.1, "");
}

/**
 * Initialise l'ajustement de l'espacement des lettres.
 * Ajoute des écouteurs d'événement 'click' aux boutons de diminution et d'augmentation de l'espacement des lettres.
 */
function initializeLetterSpacing() {
    addEventButton(Button.letterSpacingDecrease, Property.letterSpacing, -0.05, 'em');
    addEventButton(Button.letterSpacingIncrease, Property.letterSpacing,  0.05, 'em');
}

/**
 * Initialise l'ajustement de l'espacement des mots.
 * Ajoute des écouteurs d'événement 'click' aux boutons de diminution et d'augmentation de l'espacement des mots.
 */
function initializeWordSpacing() {
    addEventButton(Button.wordSpacingDecrease, Property.wordSpacing, -0.1, 'em');
    addEventButton(Button.wordSpacingIncrease, Property.wordSpacing,  0.1, 'em');
}


initializeFontSize();
initializeLetterSpacing();
initializeLineHeight();
initializeWordSpacing();