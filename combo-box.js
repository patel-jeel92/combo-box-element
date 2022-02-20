class ComboBox extends HTMLElement {
  constructor() {
    super();

    // attaches shadow tree and returns shadow root reference
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("div");

    template.innerHTML = `
    <style>
        input::-webkit-calendar-picker-indicator {
            opacity: 100;
        }
        input {
            background-color: lightgray;
            padding: auto;
            height: 30px;
            width: 200px;
            border-radius: 5px;
        }    
    </style>
    <input list="fruits" id="fruit-choice" name="fruit-choice" placeholder="Choose a Fruit:" />
    <datalist id="fruits">
        <option value="Apple"></option>
        <option value="Banana"></option>
        <option value="Blueberry"></option>
        <option value="Mango"></option>
        <option value="Watermelon"></option>
        <option value="Grape"></option>
        <option value="Orange"></option>
        <option value="Pineapple"></option>
    </datalist>
    `;
    shadow.appendChild(template);
  }

  connectedCallback() {}
}

window.customElements.define("combo-box", ComboBox);
