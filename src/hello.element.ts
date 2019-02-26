
export class HelloElement extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `<div>Hello !</div>`
    }

}
