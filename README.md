# OCR-P14-DROPDOWN-NPM

The OCR-P14-DROPDOWN-NPM component is a React Dropdown component wich is a custom dropdown list that allows users to select items from a list of choices. It is fully styled using styled-components and supports search functionality to filter displayed items.

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

```
import React, { useState } from "react";
import Dropdown from "your-path-to-dropdown-component";

const YourComponent = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (selected) => {
    setSelectedItem(selected);
  };

  const handleReset = () => {
    setSelectedItem("");
  };

  const dropdownData = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div>
      <h1>Example of using the Dropdown component</h1>
      <Dropdown
        dropdownData={dropdownData}
        onChange={handleChange}
        onReset={handleReset}
      />
      <p>Selected Item: {selectedItem}</p>
    </div>
  );
};

export default YourComponent;
```

Props
The Dropdown component takes the following props:

dropdownData (array, required): An array of options to display in the dropdown menu. Each element can be a string or a number.

onChange (function, required): A callback function called when the user selects an item in the dropdown. The function receives the text of the selected item as a parameter.

onReset (function, optional): A callback function called when you want to reset the dropdown selection. Use this function if you need to reset the user's selection to a default value.

Styling
The React Dropdown component is fully styled using styled-components. You can customize the styles by adjusting the CSS properties of the styled components inside the component.

Limitations
The component is not optimized for very large lists of options, as it will render all the elements in the list. For large amounts of data, we recommend using a virtualization library to optimize performance.
Notes
Make sure to handle changes to the parent component's state using the onChange and onReset callback functions.

The component does not have any default styling, so make sure to add your own styles to match your application's theme.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute it under the terms of the MIT License.
