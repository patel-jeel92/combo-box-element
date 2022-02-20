class ComboBox extends HTMLElement {
  constructor() {
    super();

    // attaches shadow tree and returns shadow root reference
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("div");

    shadow.appendChild(template);
  }

  connectedCallback() {}
}

window.customElements.define("combo-box", ComboBox);
