import {$, capitalizeFirstLetter, saveAccessibilitySettings} from "./utils";

export class CssReadGuideProperty {
    #height;
    #backgroundColor;
    #opacity;
    #readGuideBottom;
    #readGuideTop;

    /**
     * Crée une nouvelle instance de CssReadGuideProperty.
     *
     * @param {number} height - La hauteur du guide de lecture.
     * @param {string} backgroundColor - La couleur de fond du guide de lecture au format hexadécimal (ex: "#FFFFFF").
     * @param {number} opacity - L'opacité du guide de lecture (valeur entre 0 et 1).
     */
    constructor(height, backgroundColor, opacity) {
        this.#height = height;
        this.#opacity = opacity;
        this.#backgroundColor = this.createBackgroundColor(backgroundColor);
        this.#readGuideBottom = this.createReadGuide("bottom");
        this.#readGuideTop = this.createReadGuide("top");
        this.addEventMouse();
    }

    getReadGuideBottom() {
        return this.#readGuideBottom;
    }

    getReadGuideTop() {
        return this.#readGuideTop;
    }

    getHeight() {
        return this.#height;
    }

    getBackgroundColor() {
        return this.#backgroundColor;
    }

    getOpacity() {
        return this.#opacity;
    }

    /**
     * Crée la couleur de fond du guide de lecture au format RGBA.
     *
     * @param {string} backgroundColor - La couleur de fond au format hexadécimal (ex: "#FFFFFF").
     * @returns {string} La couleur de fond au format RGBA.
     */
    createBackgroundColor(backgroundColor) {
        const r = parseInt(backgroundColor.slice(1, 3), 16);
        const g = parseInt(backgroundColor.slice(3, 5), 16);
        const b = parseInt(backgroundColor.slice(5, 7), 16);
        const hetToRGB = `${r}, ${g}, ${b}`;
        return `rgba(${hetToRGB}, ${this.getOpacity()})`;
    }

    /**
     * Crée un élément de guide de lecture.
     *
     * @param {string} type - Le type de guide de lecture ("top" ou "bottom").
     * @returns {HTMLElement} L'élément de guide de lecture créé.
     */
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

    /**
     * Ajoute un événement de clic sur le bouton "readGuideButton" pour afficher/masquer les guides de lecture.
     */
    addEventMouse() {
        document.addEventListener("mousemove", (event) => {
            const middleHeight = this.getHeight() / 2;
            this.getReadGuideBottom().style.top = `${event.clientY + this.getHeight() / 2}px`;
            this.getReadGuideTop().style.bottom = `${window.innerHeight - event.clientY + this.getHeight() / 2}px`;
        });
    }

    addEventListeners() {
        $("#readGuideButton").addEventListener("click", () => {
            const currentValue = document.documentElement.style.getPropertyValue("--read-guide-display");
            const newValue = currentValue === "block" ? "none" : "block";
            document.documentElement.style.setProperty("--read-guide-display", newValue);
            saveAccessibilitySettings("boolean", "--read-guide-display", newValue);
        });
    }
}
