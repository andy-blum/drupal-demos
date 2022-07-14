import { s, $ } from './lit-element-7efdff0b.js';

class MyAccordion extends s {
  connectedCallback() {
    const {
      handleAccordionToggle
    } = this;
    super.connectedCallback();
    this.addEventListener("accordionToggle", handleAccordionToggle);
  }

  handleAccordionToggle(event) {
    const {
      item: toggledItem,
      status: toggledItemStatus
    } = event.detail;

    if (toggledItemStatus) {
      Array.from(this.querySelectorAll("my-accordion-item")).filter(item => item !== toggledItem).forEach(item => {
        item.open = false;
      });
    }
  }

  render() {
    return $`
      <slot></slot>
    `;
  }

}

customElements.define('my-accordion', MyAccordion);
