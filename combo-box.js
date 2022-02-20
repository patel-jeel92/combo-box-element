class ComboBox extends HTMLElement {
  constructor() {
    super();

    // attaches shadow tree and returns shadow root reference
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("div");

    // user getter to get items
    const listItems = this.items;

    // add html to the template
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
    <input list="custom-items" name="combo-box" placeholder="${
      this.placeholder
    }" />
    <datalist id="custom-items">
    ${listItems
      .map(
        (item) => `
        <option value="${item}">${item}</option>
        `
      )
      .join("")}
    </datalist>
    `;
    shadow.appendChild(template);
  }

  // fires after the element has been attached to the DOM
  connectedCallback() {}

  // gather data from element attributes
  get placeholder() {
    return this.getAttribute("placeholder") || "Choose an item:";
  }

  get id() {
    return this.getAttribute("id") || "combo-box-id";
  }

  get items() {
    const items = [];
    let inputItems = this.getAttribute("items") || [];
    inputItems.forEach((item) => {
      items.push(item);
    });

    return items;
  }

  set items(value) {
    this.items = value;
  }
}

// let the browser know about the custom element
window.customElements.define("combo-box", ComboBox);
