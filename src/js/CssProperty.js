export class CssProperty {
    #propertyName;

    constructor(propertyName) {
        this.#propertyName = propertyName;
    }

    getPropertyName() {
        return this.#propertyName;
    }

    capitalizePrefix(words) {
        return words[0] + words
            .slice(1)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
    }
}
