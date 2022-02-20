# combo-box-element

A custom combo box element implemented using HTML custom elements

## Notes

1. This example is not optimized for production use.
2. The `<combo-box-element>` element is not supported in Safari.

## To Run

1. Clone this repository to your local machine
2. Navigate to the root of the repository
3. Simple double click `index.html` file to open the page

## Bonus

This implementation is using HTML Custom Elements to define a custom `combo-box` element. To reuse in other projects, you can use the following code:

```js
id: string
placeholder: string
items: array of objects where display is the value to display and value is the value to return
```

```html
<combo-box id="combo-box" placeholder="Choose a fruit:"></combo-box>

<script type="text/javascript">
  // NOTE: Have to use setters to pass in
  //  data in a sane manner: https://itnext.io/handling-data-with-web-components-9e7e4a452e6e
  let comboBox = document.getElementById("combo-box");
  comboBox.items = [
    { display: "Volvo", value: "Volvo" },
    { display: "C Class", value: "Mercedes" },
    { display: "Accord Hybrid", value: "Honda" },
    { display: "Rav 4", value: "Toyota" },
  ];
</script>
<!--- Bring in our custom element -->
<script type="text/javascript" src="./combo-box.js"></script>
```

Make sure to import the combo-box.js file after you set the items property.
