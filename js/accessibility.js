/*********************************************************************************
 * PARTIE CHARGEMENT
 *********************************************************************************/

/**
 * Lit les paramètres d'accessibilité depuis le localStorage et met à jour les styles en conséquence.
 * Si le panel de réglages de la famille de polices existe, il crée les options du select avec
 * la valeur actuelle sélectionnée.
 */
function readAccessibilitySettings() {
    const accessibilitySettings = JSON.parse(localStorage.getItem(accessibilityStorageName)) || {};

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


/**
 * Crée les options du select de la famille de polices et sélectionne l'option correspondant à la valeur actuelle.
 * @param {string} currentFontFamily - La famille de polices actuellement sélectionnée.
 */
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
 * @param {string} cssValue - La valeur de la propriété CSS à enregistrer.
 */
function saveAccessibilitySettings(cssProperty, cssValue) {
    const existingAccessibilitySettings = JSON.parse(localStorage.getItem(accessibilityStorageName)) || {};
    existingAccessibilitySettings[cssProperty] = cssValue;
    localStorage.setItem(accessibilityStorageName, JSON.stringify(existingAccessibilitySettings));
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
    element.addEventListener("click", () => {
        adjustRoot(property, value, unit);
        // Ajouter la classe 'animate' au bouton cliqué
        element.classList.add('animate');

        // Retirer la classe 'animate' après 300 millisecondes (durée de l'animation)
        setTimeout(() => {
            element.classList.remove('animate');
        }, 300);
    });
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

/**
 * Initialise l'événement 'change' sur le select de la famille de polices.
 * Lorsque l'utilisateur sélectionne une nouvelle famille de polices :
 * - La valeur du select est appliquée à sa propre police de caractères pour un aperçu en temps réel
 * - La propriété CSS "--font-family" est mise à jour avec la nouvelle valeur
 * - Les paramètres d'accessibilité sont enregistrés dans le localStorage avec la nouvelle famille de polices
 */
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
