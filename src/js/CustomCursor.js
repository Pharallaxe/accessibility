import {$, $All} from "./utils";

export class CustomCursor {
    constructor() {
        this.cursor = $('#cursor');
        this.body = $("#cursor-body");
        this.allHandTargets = $All(".cursor-pointer");
        this.allPenTargets = $All(".cursor-text");
        this.color = '';
    }

    init(value) {
        value = parseInt(value);
        this.cursor.classList.remove("cursor-white", "cursor-black");
        this.color = ["white", "black"][value];

        if (value === 0 || value === 1) {
            this.setupCustomCursor();
        } else {
            this.resetToDefaultCursor();
        }
    }

    setupCustomCursor() {
        this.cursor.style.background = `url('./dist/img/cursor-hand-${this.color}.svg')`;
        this.cursor.style.backgroundSize = "100% 100%";
        this.cursor.classList.remove("cursor-hidden");
        this.cursor.classList.add(`cursor-${this.color}`);
        this.body.style.cursor = "none";

        this.addEventListeners();
        this.addMouseMoveListener();
        this.addScrollListener();
    }

    resetToDefaultCursor() {
        this.body.style.cursor = "auto";
        this.cursor.classList.add("cursor-hidden");
        this.removeEventListeners();
        this.resetTargetCursors();
    }

    handleMouse(type) {
        this.cursor.style.background = `url('./dist/img/cursor-${type}-${this.color}.svg')`;
        this.cursor.style.backgroundSize = "100% 100%";
    }

    handleHandMouseEnter() { this.handleMouse("hand"); }
    handleMouseLeave() { this.handleMouse("arrow"); }
    handlePenMouseEnter() { this.handleMouse("pen"); }

    addEventListeners() {
        this.addListenersToTargets(this.allHandTargets, this.handleHandMouseEnter.bind(this), this.handleMouseLeave.bind(this));
        this.addListenersToTargets(this.allPenTargets, this.handlePenMouseEnter.bind(this), this.handleMouseLeave.bind(this));
    }

    addListenersToTargets(targets, enterHandler, leaveHandler) {
        if (targets) {
            targets.forEach(target => {
                target.classList.add("cursor-none");
                target.addEventListener('mouseenter', enterHandler);
                target.addEventListener('mouseleave', leaveHandler);
            });
        }
    }

    removeEventListeners() {
        this.removeListenersFromTargets(this.allHandTargets);
        this.removeListenersFromTargets(this.allPenTargets);
    }

    removeListenersFromTargets(targets) {
        if (targets) {
            targets.forEach(target => {
                target.classList.remove("cursor-none");
            });
        }
    }

    addMouseMoveListener() {
        document.addEventListener('mousemove', (e) => {
            if (this.cursor.style.background.includes("pen")) {
                this.cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 43}px)`;
            } else {
                this.cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY}px)`;
            }
        });
    }

    addScrollListener() {
        document.addEventListener('scroll', () => {
            this.handleMouseLeave();
            const x = this.cursor.getBoundingClientRect().left + this.cursor.getBoundingClientRect().width / 2;
            const y = this.cursor.getBoundingClientRect().top + this.cursor.getBoundingClientRect().height / 2;
            const elementUnderMouse = document.elementFromPoint(x, y);

            if (elementUnderMouse.classList.contains('cursor-pointer')) {
                this.handleHandMouseEnter();
            } else if (elementUnderMouse.classList.contains('cursor-text')) {
                this.handlePenMouseEnter();
            }
        });
    }

    resetTargetCursors() {
        this.resetCursorForTargets(this.allHandTargets);
        this.resetCursorForTargets(this.allPenTargets);
    }

    resetCursorForTargets(targets) {
        if (targets) {
            targets.forEach(target => {
                target.classList.remove("cursor-none");
            });
        }
    }
}
