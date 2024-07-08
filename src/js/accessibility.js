import {Config} from "./Config";
import { $, $All, capitalizeFirstLetter, saveAccessibilitySettings} from "./utils";
import { CustomCursor} from "./CustomCursor";
import { CssSimpleProperty } from "./CssSimpleProperty";
import { CssSelectProperty } from "./CssSelectProperty";
import { CssReadGuideProperty } from "./CssReadGuideProperty";

/*********************************************************************************
 * PARTIE CONSTANTES
 *********************************************************************************/

const CSS_SIMPLE_PROPERTIES = [
    ["--font-size-title", 2, "px", 10, 45], // fontSizeTitle{In-Decrease}Button
    ["--font-size-text", 2, "px", 10, 28],    // fontSizeText{In-Decrease}Button
    ["--line-height", 0.1, "", 0.85, 2.5],       // lineHeight{In-Decrease}Button
    ["--letter-spacing", 0.05, "em", -0.15, 0.7], // letterSpacing{In-Decrease}Button
    ["--word-spacing", 0.1, "em", 0, 1],    // wordSpacing{In-Decrease}Button
    ["--margin", 5, "px", 0, 45],            // margin{In-Decrease}Button
    ["--padding", 5, "px", 0, 35],           // padding{In-Decrease}Button
    ["--border-radius", 4, "px", 0, 50],     // borderRadius{In-Decrease}Button
];

const CSS_COMPLEXE_PROPERTIES = [
    ["--background-color", "backgroundColor", ["#F8F9FA", "#F5C3C2", "#A7D2E8", "#FEF0C3", "#C1E1C1", "#E6E6FA"]],
    ["--text-color", "color", ["#0c0c0c", "#720b0a", "#063c5a", "#695803", "#005602", "#4e4ef3"]],
    ["--font-family", "fontFamily", ["Arial", "Verdana", "Georgia", "Courier New", "Roboto", "Ms Gothic", "Garamond"]],
    ["--text-align", "textAlign", ["left", "right", "center", "justify"]],];

/*********************************************************************************
 * PARTIE INITIALISATION
 *********************************************************************************/

/**
 * Crée des objets CssSelectProperty à partir d'une liste de propriétés.
 *
 * @param {Array} properties - Liste de propriétés à créer. Chaque propriété est un tableau contenant trois éléments :
 *   - Le premier élément est le nom de la propriété.
 *   - Le deuxième élément est la valeur par défaut de la propriété.
 *   - Le troisième élément est la description de la propriété.
 */
function createCssSelectProperties(properties) {
    properties.forEach(property => {
        const selectProperty = new CssSelectProperty(property[0], property[1], property[2]);
        selectProperty.initialize();
        selectProperty.createPropertyOptions(property[1],);
    });
}

/**
 * Crée des objets CssSimpleProperty à partir d'une liste de propriétés.
 *
 * @param {Array} properties - Liste de propriétés à créer. Chaque propriété est un tableau contenant trois éléments :
 *   - Le premier élément est le nom de la propriété.
 *   - Le deuxième élément est la valeur par défaut de la propriété.
 *   - Le troisième élément est la description de la propriété.
 */
function createCssSimpleProperties(properties) {
    properties.forEach(property => {
        new CssSimpleProperty(property[0], property[1], property[2], property[3], property[4]);
    });
}

/**
 * Lit les paramètres d'accessibilité depuis le localStorage et met à jour les styles en conséquence.
 * Si le panel de réglages de la famille de polices existe, il crée les options du select avec
 * la valeur actuelle sélectionnée.
 */
function readAccessibilitySettings() {
    const accessibilitySettings = JSON.parse(localStorage.getItem(Config.accessibilityStorageName)) || {};
    let customCursor = new CustomCursor();

    // Mettre à jour les variables CSS avec les valeurs enregistrées
    for (const category in accessibilitySettings) {
        for (const [property, value] of Object.entries(accessibilitySettings[category])) {
            document.documentElement.style.setProperty(property, value);

            if (property === "--cursor-style") {
                customCursor.init(value); // où 'value' est 0, 1 ou une autre valeur
            }

        }
    }

    const read = new CssReadGuideProperty(100, "#000000", 0.6);

    if (!Config.accessibilityPanel) return;

    // Créer le comportement des propriétés css simple à valeur
    createCssSimpleProperties(CSS_SIMPLE_PROPERTIES);

    // Créer le comportement des selects
    createCssSelectProperties(CSS_COMPLEXE_PROPERTIES);

    // Créer le comportement du reset
    $("#resetButton").addEventListener("click", () => {
        localStorage.removeItem(Config.accessibilityStorageName);
        location.reload();
    });

    // Ajouter un écouteur d'événement sur le changement de sélection
    $("#cursorSelect").addEventListener("change", function () {
        // Récupérer la valeur sélectionnée
        const selectedValue = this.value;

        // Faire quelque chose avec la valeur récupérée
        console.log("Valeur sélectionnée :", selectedValue);

        // Appeler la fonction cursor avec la valeur récupérée
        customCursor.init(selectedValue); // où 'value' est 0, 1 ou une autre valeur

        saveAccessibilitySettings("range", "--cursor-style", selectedValue);

    });

    read.addEventListeners();
}

readAccessibilitySettings();
