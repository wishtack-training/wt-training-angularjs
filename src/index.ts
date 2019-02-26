
export class HelloComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `<div>Hello !</div>`
    }

}

customElements.define('wt-hello', HelloComponent);
