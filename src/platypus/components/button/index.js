import { LitElement, html } from 'lit-element';

class Button extends LitElement {
  render(){
    return html`
      <p>A paragraph</p>
    `;
  }
}

export default function PlatypusButton() {
  customElements.define('platypus-button', Button);
}
