import { LitElement, html } from 'lit-element';

class Button extends LitElement {
  static get properties() {
    return { 
      type: { type: String },
      id: { type: String },
      title: { type: String },
      href: { type: String },
      target: { type: String },
      icon: { type: String }
    };
  }

  constructor() {
    super();
    this.type = this.type || 'flat';
  }

  // Remove Shadow Dom
  createRenderRoot() {
    return this;
  }

  returnTypes() {
    let tmp = this.type.replace(/, /g, ',').split(',');
    let str = '';
    let allowArr = [
      'dense',
      'flat',
      'default',
      'primary',
      'destructive'
    ];
    tmp.forEach((o) => {
      if (allowArr.indexOf(o) > -1) {
        str += `btn-${o} `
      } else {
        str += `${o} `
      }
    });
    return `btn ${str}`;
  }

  returnInnerText() {
    return (this.title) ? this.title : this.innerText;
  }

  returnProperTag() {
    let iconTemplate = '';
    if (this.icon) {
      iconTemplate = html `<i class="${this.icon}"></i>`
    }
    if (this.href) {
      return html `<a href="${this.href}" target="${this.target || ''}" class="${this.returnTypes()}" id="${this.id || ''}">${iconTemplate}${this.returnInnerText()}</a>`;
    } else {
      return html `<button class="${this.returnTypes()}" id="${this.id || ''}">${iconTemplate}${this.returnInnerText()}</button>`;
    }
  }

  render() {
    return html`
      ${this.returnProperTag()}
    `;
  }
}

export default function TurnTableButton() {
  customElements.define('tt-button', Button);
}
