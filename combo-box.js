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
        <option value="&#127822 Apple"></option>
        <option value="&#127820 Banana"></option>
        <option value="&#127817 Watermelon"></option>
        <option value="&#127815 Grape"></option>
        <option value="&#127818 Orange"></option>
        <option value="&#127821 Pineapple"></option>
        <option value="&#127827 Strawberry"></option>
        <option value="&#127826 Cherry"></option>
        
    </datalist>
    `;
    shadow.appendChild(template);
  }

  connectedCallback() {}
}

window.customElements.define("combo-box", ComboBox);
