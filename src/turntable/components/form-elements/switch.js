// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class Switch extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      checked: { type: Boolean },
      value: { type: String },
      disabled: { type: Boolean },
      type: { type: String }
    };
  }

  constructor() {
    super();
  }

  // Remove Shadow Dom
  createRenderRoot() {
    return this;
  }

  returnStyles(initialClass, type) {
    if (!type)  return initialClass;
    let tmp = type.split(',')
    let str = '';
    tmp.forEach((o) => {
      str += `${o} `
    });
    return `${initialClass} ${str.trim()}`
  }

  preFlight() {
    this.disabled = (this.type && this.type.indexOf('disabled') > -1) ? true : false;
  }

  render() {
    this.preFlight();
    return html`
    <label class="tt-switch">
        <input
          type="checkbox"
          name="${ this.name }"
          value="${ this.value }"
          .checked="${ this.checked }"
          .disabled="${ this.disabled }"
        >
        <span class="${ this.returnStyles('slider', this.type) }"></span>
      </label>
    `;
  }
}

export default function TurnTableSwitch() {
  customElements.define('tt-switch', Switch);
}
