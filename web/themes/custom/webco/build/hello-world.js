import { s, $ } from './lit-element-7efdff0b.js';

class MyElement extends s {
  render() {
    return $`
      <div>Hello from MyElement!</div>
    `;
  }

}

customElements.define('my-element', MyElement);
