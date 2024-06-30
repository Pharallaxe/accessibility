function $(selector) {
    return document.querySelector(selector);
}

/*********************************************************************************
 * PARTIE CONSTANTE
 *********************************************************************************/

const accessibilityPanel = $("#accessibilityPanel");


class Buttons {
    static fontSizeDecrease = $("#fontSizeDecreaseButton");
    static fontSizeIncrease = $("#fontSizeIncreaseButton");

    static lineHeightDecrease = $("#lineHeightDecreaseButton");
    static lineHeightIncrease = $("#lineHeightIncreaseButton");

    static letterSpacingDecrease = $("#letterSpacingDecreaseButton");
    static letterSpacingIncrease = $("#letterSpacingIncreaseButton");

    static wordSpacingDecrease = $("#wordSpacingDecreaseButton");
    static wordSpacingIncrease = $("#wordSpacingIncreaseButton");

    static fontFamilySelect = $("#fontFamilySelect");
}

class Properties {
    static fontSize = "--font-size";
    static lineHeight = "--line-height";
    static letterSpacing = "--letter-spacing";
    static wordSpacing = "--word-spacing";
    static fontfamily = "--font-family"
}

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

/*********************************************************************************
 * PARTIE CHARGEMENT
 *********************************************************************************/

function readAccessibilitySettings() {
    const accessibilitySettings = JSON.parse(localStorage.getItem("accessibility")) || {};

    // Mettre à jour les variables CSS avec les valeurs enregistrées
    for (const [property, value] of Object.entries(accessibilitySettings)) {
        document.documentElement.style.setProperty(property, value);
    }

    // Gérer la création du panel font-family
    if (accessibilityPanel) {
        const currentFontFamily = accessibilitySettings[Properties.fontfamily] || fontFamilies[0];
        createFontFamilyOptions(currentFontFamily);
    }
}

// Fonction pour créer les options du select
function createFontFamilyOptions(currentFontFamily) {
    // Supprimer les options existantes
    Buttons.fontFamilySelect.innerHTML = "";

    // Créer les options pour chaque famille de polices
    fontFamilies.forEach(fontFamily => {
        const option = document.createElement("option");
        option.value = fontFamily;
        option.text = fontFamily;
        if (fontFamily === currentFontFamily) {
            option.selected = true;
        }
        option.style.fontFamily = fontFamily;
        Buttons.fontFamilySelect.add(option);
    });

    Buttons.fontFamilySelect.style.fontFamily = currentFontFamily;
}

/*********************************************************************************
 * PARTIE ENREGISTREMENT
 *********************************************************************************/

/**
 * Enregistre les paramètres d'accessibilité dans le localStorage.
 * @param {string} cssProperty - La propriété CSS à enregistrer.
 * @param {string} cssPropertyValue - La valeur de la propriété CSS à enregistrer.
 */
function saveAccessibilitySettings(cssProperty, cssPropertyValue) {
    const existingAccessibilitySettings = JSON.parse(localStorage.getItem("accessibility")) || {};
    existingAccessibilitySettings[cssProperty] = cssPropertyValue;
    localStorage.setItem("accessibility", JSON.stringify(existingAccessibilitySettings));
}

/**
 * Ajuste la valeur d'une propriété CSS sur l'élément racine (root) et enregistre les
 * paramètres d'accessibilitédans le localStorage.
 * @param {string} cssProperty - La propriété CSS à ajuster.
 * @param {number} adjustmentValue - La valeur d'ajustement à ajouter à la propriété CSS.
 * @param {string} [unit="px"] - L"unité de la valeur d"ajustement (par défaut : "px").
 */
function adjustRoot(cssProperty, adjustmentValue, unit = "px") {
    const rootElement = document.documentElement;
    const currentRootValue = parseFloat(getComputedStyle(rootElement).getPropertyValue(cssProperty));
    const newPropertyValue = `${currentRootValue + adjustmentValue}${unit}`;
    rootElement.style.setProperty(cssProperty, newPropertyValue);
    saveAccessibilitySettings(cssProperty, newPropertyValue);
}

/**
 * Ajoute un écouteur d'événement "click" à un élément et ajuste une propriété CSS sur
 * l'élément racine (root) lors du clic.
 * @param {HTMLElement} element - L'élément auquel ajouter l'écouteur d'événement.
 * @param {string} property - La propriété CSS à ajuster sur l'élément racine.
 * @param {number} value - La valeur d'ajustement à ajouter à la propriété CSS.
 * @param {string} [unit='px'] - L'unité de la valeur d'ajustement (par défaut : 'px').
 */
function addEventButton(element, property, value, unit = 'px'
) {
    element.addEventListener("click", () => adjustRoot(property, value, unit));
}

/**
 * Initialise l'ajustement de la taille de police.
 * Ajoute des écouteurs d'événement "click" aux boutons de diminution et d'augmentation de la taille de police.
 */
function initializeFontSize() {
    addEventButton(Buttons.fontSizeDecrease, Properties.fontSize, -2);
    addEventButton(Buttons.fontSizeIncrease, Properties.fontSize, 2);
}

/**
 * Initialise l'ajustement de la hauteur de ligne.
 * Ajoute des écouteurs d'événement "click" aux boutons de diminution et d'augmentation de la hauteur de ligne.
 */
function initializeLineHeight() {
    addEventButton(Buttons.lineHeightDecrease, Properties.lineHeight, -0.1, "");
    addEventButton(Buttons.lineHeightIncrease, Properties.lineHeight, 0.1, "");
}

/**
 * Initialise l'ajustement de l'espacement des lettres.
 * Ajoute des écouteurs d'événement "click" aux boutons de diminution et d'augmentation de l'espacement des lettres.
 */
function initializeLetterSpacing() {
    addEventButton(Buttons.letterSpacingDecrease, Properties.letterSpacing, -0.05, "em");
    addEventButton(Buttons.letterSpacingIncrease, Properties.letterSpacing, 0.05, "em");
}

/**
 * Initialise l'ajustement de l'espacement des mots.
 * Ajoute des écouteurs d'événement "click" aux boutons de diminution et d'augmentation de l'espacement des mots.
 */
function initializeWordSpacing() {
    addEventButton(Buttons.wordSpacingDecrease, Properties.wordSpacing, -0.1, "em");
    addEventButton(Buttons.wordSpacingIncrease, Properties.wordSpacing, 0.1, "em");
}

// Fonction pour ajuster la famille de polices
function initalizeFontFamily() {
    Buttons.fontFamilySelect.addEventListener("change", () => {
        const selectedFontFamily = Buttons.fontFamilySelect.value;
        Buttons.fontFamilySelect.style.fontFamily = Buttons.fontFamilySelect.value;
        document.documentElement.style.setProperty(Properties.fontfamily, selectedFontFamily);
        saveAccessibilitySettings(Properties.fontfamily, selectedFontFamily);
    });
}


/*********************************************************************************
 * PARTIE INITIALISATION
 *********************************************************************************/


if (accessibilityPanel) {
    initializeFontSize();
    initializeLetterSpacing();
    initializeLineHeight();
    initializeWordSpacing();
    initalizeFontFamily();
}

readAccessibilitySettings();
