import { HelloElement } from './hello.element';

describe('HelloElement', () => {

    beforeEach(() => {
        customElements.define('wt-hello', HelloElement);
    })

    it('should be polite', () => {
        const hello = new HelloElement();
        hello.connectedCallback();
        expect(hello.textContent).toEqual('Hello !');
    });

});
