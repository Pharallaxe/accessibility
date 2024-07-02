/*********************************************************************************
 * PARTIE OUTILS
 *********************************************************************************/

// Fonction pour créer les objets CssSimpleProperty
function createCssSimpleProperties(cssProperties) {
    cssProperties.forEach(property => {
        new CssSimpleProperty(property[0], property[1], property[2],)
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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


const CSS_PROPERTIES = [["--font-size-title", 2, "px"], // fontSizeTitle{In-Decrease}Button
    ["--font-size-text", 2, "px"], // fontSizeText{In-Decrease}Button
    ["--line-height", 0.1, ""], // lineHeight{In-Decrease}Button
    ["--letter-spacing", 0.05, "em"], // letterSpacing{In-Decrease}Button
    ["--word-spacing", 0.1, "em"], // wordSpacing{In-Decrease}Button
    ["--margin", 5, "px"], // margin{In-Decrease}Button
    ["--padding", 5, "px"], // padding{In-Decrease}Button
    ["--border-radius", 4, "px"], // borderRadius{In-Decrease}Button
];


/*********************************************************************************
 * PARTIE ENREGISTREMENT
 *********************************************************************************/

/**
 * Enregistre les paramètres d'accessibilité dans le localStorage.
 * @param {string} cssProperty - La propriété CSS à enregistrer.
 * @param {string} cssValue - La valeur de la propriété CSS à enregistrer.
 */
function saveAccessibilitySettings(cssProperty, cssValue) {
    const existingAccessibilitySettings = JSON.parse(localStorage.getItem(Config.accessibilityStorageName)) || {};
    existingAccessibilitySettings[cssProperty] = cssValue;
    localStorage.setItem(Config.accessibilityStorageName, JSON.stringify(existingAccessibilitySettings));
}

/*********************************************************************************
 * PARTIE CLASSE
 *********************************************************************************/

class CssProperty {
    #propertyName;

    constructor(propertyName) {
        this.#propertyName = propertyName;
    }

    getPropertyName() {
        return this.#propertyName;
    }
}

class CssSimpleProperty extends CssProperty {
    #value;
    #unit;
    #delayAnimation;
    #classAnimation;
    #decreaseButton;
    #increaseButton;

    constructor(propertyName, value, unit = "px") {
        super(propertyName);
        this.#value = value;
        this.#unit = unit;
        this.getCssPropertyButtons(propertyName)
        this.#delayAnimation = 300;
        this.#classAnimation = "animate";
        this.#initialize();
    }

    getValue() {
        return this.#value;
    }

    getUnit() {
        return this.#unit;
    }

    getDecreaseButton() {
        return this.#decreaseButton;
    }

    setDecreaseButton(value) {
        this.#decreaseButton = $(value);
    }

    getIncreaseButton() {
        return this.#increaseButton;
    }

    setIncreaseButton(value) {
        this.#increaseButton = $(value);
    }

    getDelayAnimation() {
        return this.#delayAnimation;
    }

    getClassAnimation() {
        return this.#classAnimation;
    }

    getCssPropertyButtons(cssProperty) {

        // Récupérer les termes de la propriété
        const parts = cssProperty.split('-').slice(2);

        // Construire le préfixe en camelCase.
        const buttonPrefix = parts[0] + parts
            .slice(1)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');

        this.setDecreaseButton(`#${buttonPrefix}DecreaseButton`);
        this.setIncreaseButton(`#${buttonPrefix}IncreaseButton`);
    }

    /**
     * Initialise l'ajustement de la propriété CSS.
     * Ajoute des écouteurs d'événement "click" aux boutons de diminution et d'augmentation de la valeur.
     */
    #initialize() {
        this.#addEventButton(this.getDecreaseButton(), -1 * this.getValue());
        this.#addEventButton(this.getIncreaseButton(), this.getValue());
    }

    #addEventButton(element, value) {
        element.addEventListener("click", () => {
            this.#adjustRoot(value);
            element.classList.add(this.getClassAnimation());
            setTimeout(() => {
                element.classList.remove(this.getClassAnimation());
            }, this.getDelayAnimation());
        });
    }

    /**
     * Ajuste la valeur d'une propriété CSS sur l'élément racine (root) et enregistre les
     * paramètres d'accessibilitédans le localStorage.
     * @param {number} adjustmentValue - La valeur d'ajustement à ajouter à la propriété CSS.
     */
    #adjustRoot(adjustmentValue) {
        const rootElement = document.documentElement;
        const currentRootValue = parseFloat(getComputedStyle(rootElement)
            .getPropertyValue(this.getPropertyName()));
        const newPropertyValue = currentRootValue + adjustmentValue;
        const newPropertyValueWithUnit = `${newPropertyValue}${this.getUnit()}`;
        rootElement.style.setProperty(this.getPropertyName(), newPropertyValueWithUnit);
        saveAccessibilitySettings(this.getPropertyName(), newPropertyValueWithUnit);
    }
}

class FontFamily {
    #fontFamilySelect;
    #propertyName;
    #fontFamilies;

    constructor() {
        this.#propertyName = "--font-family";
        this.#fontFamilySelect = $("#fontFamilySelect");
        this.#fontFamilies = ["Times \n\tNew \nRoman", "Arial", "Verdana", "Georgia", "Courier \nNew", "Roboto", "Comic Sans MS", "Ms Gothic", "Garamond",];
    }

    getFontFamilySelect() {
        return this.#fontFamilySelect
    }

    getPropertyName() {
        return this.#propertyName
    }

    getFontFamilies() {
        return this.#fontFamilies
    }

    /**
     * Initialise l'événement 'change' sur le select de la famille de polices.
     * Lorsque l'utilisateur sélectionne une nouvelle famille de polices :
     * - La valeur du select est appliquée à sa propre police de caractères pour un aperçu en temps réel
     * - La propriété CSS "--font-family" est mise à jour avec la nouvelle valeur
     * - Les paramètres d'accessibilité sont enregistrés dans le localStorage avec la nouvelle famille de polices
     */
    initialize() {
        this.getFontFamilySelect().addEventListener("change", () => {
            const selectedFontFamily = this.getFontFamilySelect().value;
            this.getFontFamilySelect().style.fontFamily = this.getFontFamilySelect().value;
            document.documentElement.style.setProperty(this.getPropertyName(), selectedFontFamily);
            saveAccessibilitySettings(this.getPropertyName(), selectedFontFamily);
        });
    }

    /**
     * Crée les options du select de la famille de polices et sélectionne l'option correspondant
     * à la valeur actuelle.
     */
    createFontFamilyOptions(accessibilitySettings) {
        const currentFontFamily = accessibilitySettings[this.getPropertyName()] || this.getFontFamilies()[0];

        // Supprimer les options existantes
        this.getFontFamilySelect().innerHTML = "";

        // Créer les options pour chaque famille de polices
        this.getFontFamilies().forEach(fontFamily => {
            const option = document.createElement("option");
            option.value = fontFamily;
            option.text = fontFamily;

            if (fontFamily === currentFontFamily) {
                option.selected = true;
            }
            option.style.fontFamily = fontFamily;
            this.getFontFamilySelect().add(option);
        });

        this.getFontFamilySelect().style.fontFamily = currentFontFamily;
    }
}

class BackgroundColor {
    #backgroundColorSelect;
    #propertyName;
    #backgroundColors;

    constructor() {
        this.#propertyName = "--font-family";
        this.#backgroundColorSelect = $("#backgroundColorSelect");
        this.#backgroundColors = ["blue", "green", "purple", "red", "black", "yellow"];
    }

    getBackgroundColorSelect() {
        return this.#backgroundColorSelect
    }

    getPropertyName() {
        return this.#propertyName
    }

    getBackgroundColors() {
        return this.#backgroundColors
    }

    /**
     * Initialise l'événement 'change' sur le select de la famille de polices.
     * Lorsque l'utilisateur sélectionne une nouvelle famille de polices :
     * - La valeur du select est appliquée à sa propre police de caractères pour un aperçu en temps réel
     * - La propriété CSS "--font-family" est mise à jour avec la nouvelle valeur
     * - Les paramètres d'accessibilité sont enregistrés dans le localStorage avec la nouvelle famille de polices
     */
    initialize() {
        this.getBackgroundColorSelect().addEventListener("change", () => {
            const selectedBackgroundColor = this.getBackgroundColorSelect().value;
            this.getBackgroundColorSelect().style.backgroundColor= this.getBackgroundColorSelect().value;
            document.documentElement.style.setProperty(this.getPropertyName(), selectedBackgroundColor);
            saveAccessibilitySettings(this.getPropertyName(), selectedBackgroundColor);
        });
    }

    /**
     * Crée les options du select de la famille de polices et sélectionne l'option correspondant
     * à la valeur actuelle.
     */
    createBackgroundColorOptions(accessibilitySettings) {
        const currentBacgroundColor = accessibilitySettings[this.getPropertyName()] || this.getBackgroundColors()[0];

        // Supprimer les options existantes
        this.getBackgroundColorSelect().innerHTML = "";

        // Créer les options pour chaque famille de polices
        this.getBackgroundColors().forEach(backgroundColor => {
            const option = document.createElement("option");
            option.value = backgroundColor;
            option.text = backgroundColor;

            if (backgroundColor === currentBacgroundColor) {
                option.selected = true;
            }
            option.style.backgroundColor = backgroundColor;
            this.getBackgroundColorSelect().add(option);
        });

        this.getBackgroundColorSelect().style.backgroundColor = currentBacgroundColor;
    }
}

class FloatingElements {
    #height;
    #backgroundColor;
    #opacity;
    #readGuideBottom;
    #readGuideTop;

    constructor(height, backgroundColor, opacity) {
        this.#height = height;
        this.#opacity = opacity;
        this.#backgroundColor = this.createBackgroundColor(backgroundColor);
        this.#readGuideBottom = this.createReadGuide("bottom");
        this.#readGuideTop = this.createReadGuide("top");
        this.addEventListeners();
    }

    getReadGuideBottom() { return this.#readGuideBottom;}
    getReadGuideTop() { return this.#readGuideTop;}
    getHeight() { return this.#height;}
    getBackgroundColor() { return this.#backgroundColor;}
    getOpacity() { return this.#opacity; }

    createBackgroundColor(backgroundColor) {
        const r = parseInt(backgroundColor.slice(1, 3), 16);
        const g = parseInt(backgroundColor.slice(3, 5), 16);
        const b = parseInt(backgroundColor.slice(5, 7), 16);
        const hetToRGB =  `${r}, ${g}, ${b}`;
        console.log(`rgba(${hetToRGB}, ${this.getOpacity()})`)
        return `rgba(${hetToRGB}, ${this.getOpacity()})`;
    }


    createReadGuide(type) {
        let guideElement = document.createElement("div");
        guideElement.id = "readGuide" + capitalizeFirstLetter(type);
        guideElement.style.position = "fixed";
        guideElement.style.width = "100%";
        guideElement.style.height = "100%";
        guideElement.style.left = "0";
        guideElement.style.backgroundColor = this.getBackgroundColor();
        guideElement.style.display = "block";
        guideElement.style.zIndex = "9999";
        $("#readGuideContainer").appendChild(guideElement);
        return guideElement;
    }

    addEventListeners() {
        $("#readGuideButton").addEventListener("click", () => {
            $("#readGuideContainer").classList.toggle("remove-none");
        });

        document.addEventListener("mousemove", (event) => {
            const middleHeight = this.getHeight() / 2;
            this.getReadGuideBottom().style.top = `${event.clientY + this.getHeight() / 2}px`;
            this.getReadGuideTop().style.bottom = `${window.innerHeight - event.clientY + this.getHeight() / 2}px`;
        });
    }
}

function createCssSelectProperties(accessibilitySettings) {
    const fontFamilySelect = new FontFamily();
    fontFamilySelect.initialize();
    fontFamilySelect.createFontFamilyOptions(accessibilitySettings);

    const backgroundColorSelect = new BackgroundColor();
    backgroundColorSelect.initialize();
    backgroundColorSelect.createBackgroundColorOptions(accessibilitySettings);
}

/*********************************************************************************
 * PARTIE ENREGISTREMENT
 *********************************************************************************/

/**
 * Lit les paramètres d'accessibilité depuis le localStorage et met à jour les styles en conséquence.
 * Si le panel de réglages de la famille de polices existe, il crée les options du select avec
 * la valeur actuelle sélectionnée.
 */
function readAccessibilitySettings() {
    const accessibilitySettings = JSON.parse(localStorage.getItem(Config.accessibilityStorageName)) || {};

    // Mettre à jour les variables CSS avec les valeurs enregistrées
    for (const [property, value] of Object.entries(accessibilitySettings)) {
        document.documentElement.style.setProperty(property, value);
    }


    if (!Config.accessibilityPanel) return;

    // Créer le comportement des propriétés css simple à valeur
    createCssSimpleProperties(CSS_PROPERTIES);

    // Créer le comportement des selects
    createCssSelectProperties(accessibilitySettings)

    // Créer le comportement du reset
    $("#resetButton").addEventListener("click", () => {
        localStorage.removeItem(Config.accessibilityStorageName);
        location.reload();
    });

    new FloatingElements(100, "#000000", 0.6);

}

readAccessibilitySettings();
