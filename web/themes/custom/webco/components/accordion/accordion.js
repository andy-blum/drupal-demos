import {LitElement, html} from 'lit';

class MyAccordion extends LitElement {

  connectedCallback() {
    const { handleAccordionToggle } = this;
    super.connectedCallback();

    this.addEventListener("accordionToggle", handleAccordionToggle);
  }

  handleAccordionToggle(event) {
    const { item: toggledItem, status: toggledItemStatus } = event.detail;

    if (toggledItemStatus) {
      Array.from(this.querySelectorAll("my-accordion-item"))
        .filter((item) => item !== toggledItem)
        .forEach((item) => {
          item.open = false;
        });
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
customElements.define('my-accordion', MyAccordion);
