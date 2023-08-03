# OCR-P14-DROPDOWN-NPM

The OCR-P14-DROPDOWN-NPM component is a React Dropdown component wich is a custom dropdown list that allows users to select items from a list of choices. It is fully styled using styled-components and supports search functionality to filter displayed items.
The component handle z-index so you can have multiple dropdowns and opening one will cover the other one.

## Requirements

To use this component, you need to install it in a React project and have already installed:

- react
- react-dom
- styled-components
- prop-types

If you don't have these installed, refer yourself to the documentation of each one to install them in your project or use npm command:
`npm i react react-dom styled-components prop-types`

## Installation

To install the React Dropdown component in your project, you can use npm or yarn:

`npm i ocr-p14-dropdown-npm`

`yarn add ocr-p14-dropdown-npm`

## Usage

Here's how you can use the React Dropdown component in your application:

### Basic Example

```
import React, { useState } from "react";
import Dropdown from "ocr-p14-dropdown-npm";

export default const YourComponent = () => {
    const [selectedItem, setSelectedItem] = useState("");

    const arrOfStrOrNum = ["Option 1", "Option 2", "Option 3", "Option 4"]; // arr of data to pass

    return (
        <div>
            <h1>Example of using the Dropdown component</h1>
            <Dropdown
                dropdownData={arrOfStrOrNum}
                onChange={(selection) => setSelectedItem(selection)}
            />
        </div>
    );
};
```

### Example with reset dropdown selection

If for example, the user submit a form and you want to reset the dropdown component to its original state, you can add a state and pass the onReset props to true.

```
import React, { useState, useEffect } from "react";
import Dropdown from "ocr-p14-dropdown-npm";

export default const YourComponent = () => {
    const [selectedItem, setSelectedItem] = useState("");
    const [onResetState, setOnResetState] = useState(false);

    useEffect(() => {
        if(onResetState) {
            setOnResetState(false);
        }
    }, [onResetState])

    const arrOfStrOrNum = ["Option 1", "Option 2", "Option 3", "Option 4"];

    return (
        <div>
            <h1>Example of using the Dropdown component</h1>
            <Dropdown
                dropdownData={arrOfStrOrNum}
                onChange={(selection) => setSelectedItem(selection)}
                onReset={onResetState}
            />
            <button onClick={() => setOnResetState(true)}>Reset dropdown selection</button>
        </div>
    );
};
```

### Props

The Dropdown component takes the following props:

- dropdownData (array, required): An array of options to display in the dropdown menu. Each element can be a string or a number.

- onChange (function, required): A callback function called when the user selects an item in the dropdown. The function receives the text of the selected item as a parameter.

- onReset (variable/state, optional): A boolean wich when is "true" will reset the user's selection to a default value (the first of the array of data passed).

- name (variable/state, optional): a string wich will be the name of the input (for label for example)

- id (variable/state, optional): a string wich will be the id of the input

### Styling

The React Dropdown component is fully styled using styled-components. You can customize the styles by adding your on CSS.

### Limitations

The component is not optimized for very large lists of options, as it will render all the elements in the list. Its dropdown menu's height is limited to 25vh. For large amounts of data, we recommend using a virtualization library to optimize performance.

### Notes

Make sure to handle changes to the parent component's state using the onChange.

The component has some default styling, feel free to add your own styles to match your application's theme.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it under the terms of the MIT License.
