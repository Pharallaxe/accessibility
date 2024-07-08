import {CssProperty} from "./CssProperty";
import {$, saveAccessibilitySettings} from "./utils";

export class CssSelectProperty extends CssProperty {
    #propertyStyle;
    #valuesArray;
    #propertySelect;

    /**
     * Constructeur de la classe CssSelectProperty.
     *
     * @param {string} propertyName - Le nom de la propriété CSS.
     * @param {string} propertyStyle - Le style de la propriété CSS.
     * @param {string[]} valueArray - Le tableau de valeurs de la propriété CSS.
     */
    constructor(propertyName, propertyStyle, valueArray,) {
        super(propertyName)
        this.#propertyStyle = propertyStyle;
        this.#valuesArray = valueArray;
        this.setCssPropertySelect(propertyName)
    }

    getPropertySelect() {
        return this.#propertySelect;
    }

    setPropertySelect(value) {
        this.#propertySelect = $(value);
    }

    getValuesArray() {
        return this.#valuesArray;
    }

    getPropertyStyle() {
        return this.#propertyStyle;
    }

    /**
     * Définit la propriété CSS sélectionnée.
     *
     * @param {string} cssProperty - La propriété CSS complète.
     */
    setCssPropertySelect(cssProperty) {
        const parts = cssProperty.split('-').slice(2);
        const selectPrefix = this.capitalizePrefix(parts);
        this.setPropertySelect(`#${selectPrefix}Select`);
    }

    /**
     * Initialise l'événement 'change' sur le select de la famille de polices.
     * Lorsque l'utilisateur sélectionne une nouvelle famille de polices :
     * - La valeur du select est appliquée à sa propre police de caractères pour un aperçu en temps réel
     * - La propriété CSS "--font-family" est mise à jour avec la nouvelle valeur
     * - Les paramètres d'accessibilité sont enregistrés dans le localStorage avec la nouvelle famille de polices
     */
    initialize() {
        this.getPropertySelect().addEventListener("change", () => {
            const selectedProperty = this.getPropertySelect().value;
            this.getPropertySelect().style[this.getPropertyStyle()] = this.getPropertySelect().value;
            document.documentElement.style.setProperty(this.getPropertyName(), selectedProperty);
            saveAccessibilitySettings("select", this.getPropertyName(), selectedProperty);
        });
    }

    /**
     * Crée les options du select de la famille de polices et sélectionne l'option correspondant
     * à la valeur actuelle.
     */
    createPropertyOptions(settings) {
        const currentValue = settings[this.getPropertyName()] || this.getValuesArray()[0];

        // Supprimer les options existantes
        this.getPropertySelect().innerHTML = "";

        // Créer les options pour chaque famille de polices
        this.getValuesArray().forEach(value => {
            const option = document.createElement("option");
            option.value = value;
            option.text = value;

            if (value === currentValue) {
                option.selected = true;
            }
            option.style[this.getPropertyStyle()] = value;
            this.getPropertySelect().add(option);
        });

        this.getPropertySelect().style[this.getPropertyStyle()] = currentValue;
    }
}
