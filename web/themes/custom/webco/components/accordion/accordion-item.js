import {LitElement, html, css} from 'lit';
import { property } from '../../node_modules/lit/decorators';
import { classMap } from '../../node_modules/lit/directives/class-map';

class MyAccordionItem extends LitElement {
  @property({ attribute: 'title', reflect: true })
  title;

  @property({ attribute: 'open', reflect: true })
  open = false;

  clickHandler(event) {
    this.open = !this.open;

    const accordionToggleEvent = new CustomEvent("accordionToggle", {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {
        item: this,
        status: this.open
      }
    });

    this.dispatchEvent(accordionToggleEvent);
  }

  render() {
    const { title, open } = this;

    const classes = {
      "accordion-content": true,
      "accordion-content--open": open
    };

    return html`
      <button @click=${this.clickHandler}>
        <h2>${title}</h2>
        <slot name="icon"></slot>
      </button>

      <div class="${classMap(classes)}">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    button {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    .accordion-content {
      display: none;
    }

    .accordion-content--open {
      display: block;
    }

    ::slotted([slot="icon"]) {
      width: 30px;
      height: 30px;
    }
  `;
}
customElements.define('my-accordion-item', MyAccordionItem);
