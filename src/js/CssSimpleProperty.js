import {CssProperty} from "./CssProperty";
import {$, saveAccessibilitySettings} from "./utils";

export class CssSimpleProperty extends CssProperty {
    #value;
    #unit;
    #delayAnimation;
    #classAnimation;
    #decreaseButton;
    #increaseButton;
    #min;
    #max;

    /**
     * Constructeur de la classe CssNumberProperty.
     *
     * @param {string} propertyName - Le nom de la propriété CSS (ex: "my-custom-property").
     * @param {number} value - La valeur initiale de la propriété CSS.
     * @param {string} [unit=px] - L'unité de la propriété CSS (par défaut : "px").
     * @param {number} min - La valeur minimale.
     * @param {string} max - La valeur maximale.
     */
    constructor(propertyName, value, unit = "px", min, max) {
        super(propertyName);
        this.#value = value;
        this.#unit = unit;
        this.#min = min;
        this.#max = max;
        this.setCssPropertyButtons(propertyName);
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

    getMax() {
        return this.#max;
    }

    getMin() {
        return this.#min;
    }

    /**
     * Définit les boutons d'augmentation et de diminution pour une propriété CSS.
     *
     * @param {string} cssProperty - La propriété CSS complète (ex: "--my-custom-property-buttons").
     */
    setCssPropertyButtons(cssProperty) {
        const parts = cssProperty.split('-').slice(2);
        const buttonPrefix = this.capitalizePrefix(parts)

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

    /**
     * Ajoute un événement de clic à un élément et ajuste la racine du document en fonction de la valeur passée.
     *
     * @param {HTMLElement} element - L'élément auquel l'événement de clic doit être ajouté.
     * @param {any} value - La valeur à utiliser pour ajuster la racine du document.
     */
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
        let newPropertyValue = currentRootValue + adjustmentValue;

        // Paramétrages
        if (newPropertyValue >= this.getMax()) newPropertyValue = this.getMax();
        if (newPropertyValue <= this.getMin()) newPropertyValue = this.getMin();

        const newPropertyValueWithUnit = `${newPropertyValue}${this.getUnit()}`;
        rootElement.style.setProperty(this.getPropertyName(), newPropertyValueWithUnit);
        saveAccessibilitySettings("range", this.getPropertyName(), newPropertyValueWithUnit);
    }
}
