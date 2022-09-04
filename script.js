class StateButton {
    static cssSelector = 'state-button';

    /** @type HTMLButtonElement */
    button = null;

    /** @type HTMLInputElement */
    input = null;

    /** @type boolean */
    isFirstState = true;

    constructor(button) {
        this.button = button;
        this.setStateFromValue();
        this.setColors();
        this.setInput();
        this.setIcons();
        this.setCssState();
        this.updateInput();
        this.handleClick();
    }

    /** @return HTMLLIElement */
    get firstStateElement() {
        return this.button.querySelector('ul li:first-child');
    }

    /** @return HTMLLIElement */
    get secondStateElement() {
        return this.button.querySelector('ul li:last-child');
    }

    setColors() {
        let firstState = this.firstStateElement;
        let secondState = this.secondStateElement;

        if (this.isFirstState) {
            if (firstState.dataset.color) {
                this.button.style.color = firstState.dataset.color;
            }
            if (firstState.dataset.bg) {
                this.button.style.backgroundColor = firstState.dataset.bg;
            }
        } else {
            if (secondState.dataset.color) {
                this.button.style.color = secondState.dataset.color;
            }
            if (secondState.dataset.bg) {
                this.button.style.backgroundColor = secondState.dataset.bg;
            }
        }
    }

    setIcons() {
        let states = [this.firstStateElement, this.secondStateElement];

        for (let state of states) {
            if (state.dataset.icon) {
                let i = document.createElement('i');
                i.classList.add(state.dataset.icon);
                state.prepend(i);
            }
        }
    }

    setInput() {
        let name = this.button.dataset.name;
        let value = this.getButtonValue();

        if (name) {
            let i = document.createElement('input');
            i.setAttribute('type', 'hidden');
            i.setAttribute('name', name);
            i.setAttribute('value', value);
            i.classList.add('state-button__input');
            this.input = i;
            this.button.prepend(this.input);
        }
    }

    updateInput() {
        if (this.input) {
            if (this.isFirstState) {
                this.setValue(this.firstStateElement.dataset.value);
            } else {
                this.setValue(this.secondStateElement.dataset.value);
            }
        }
    }

    getButtonValue() {
        return this.button.dataset.value;
    }

    setValue(value) {
        this.button.dataset.value = value;
        this.input.value = value;
    }

    setCssState() {
        if (this.isFirstState) {
            this.button.classList.remove('clicked');
        } else {
            this.button.classList.add('clicked');
        }
    }

    handleClick() {
        this.button.addEventListener('click', _ => {
            this.isFirstState = !this.isFirstState;
            this.setColors();
            this.setCssState();
            this.updateInput();
        });
    }

    setStateFromValue() {
        this.isFirstState = this.getButtonValue() === this.firstStateElement.dataset.value ||
            typeof this.getButtonValue() === 'undefined' ||
            this.getButtonValue().length === 0;
    }

    static init(data = {parent: document, selector: this.cssSelector}) {
        data.parent.querySelectorAll(`.${data.selector}`).forEach(button => {
            new StateButton(button);
        });
    }
}
