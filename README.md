# react-spin-wheel

<img width=300 src="https://github.com/CamWang/react-spin-wheel/blob/main/public/demo.gif?raw=true">

Simple React solution for a spin wheel game.

Run into a project that requires a spin wheel game, but didn't really find 
compatible and flexible solutions for React. So I made this light weight spin 
wheel component that doesn't rely on libraries other than React and React DOM.

## Dependencies
- React 16.8+
- React DOM 16.8+

That's really it

## Usage

1. Import SpinWheel component and style file
```jsx
import { SpinWheel } from "react-spin-wheel"
import "react-spin-wheel/dist/index.css"
```
2. Use the component with available props

## Props
Customize at least `items`, and `onFinishSpin` prop to use spin wheel.
| **Property**       | **Type**                                                | **Default**                 | **Description**                                           |
|--------------------|---------------------------------------------------------|-----------------------------|-----------------------------------------------------------|
| items              | Object list with mandatory name property or string list | Default list of happy words | Options that spin wheel draw from                         |
| itemColors         | Color string list                                       | Default list of five colors | List of background colors the wheel options will have     |
| borderColor        | Color string                                            | #666                        | Color for spin wheel border and shadow                    |
| spinActionName     | string                                                  | spin                        | Name of spin button, will be capitalized                  |
| resetActionName    | string                                                  | reset                       | Name of reset button, will be capitalized                 |
| size               | number                                                  | 400                         | px size of spin wheel                                     |
| spinTime           | number(ms)                                              | 3000                        | Wheel spin time for each spin in Milliseconds             |
| onResult           | callback, (item) => null                                | null                        | Will be called with spin result item once user click spin |
| onFinishSpin       | callback, (item) => null                                | null                        | Will be called with spin result item once animation stop  |
| onReset            | callback, () => null                                    | null                        | Will be called when user click reset                      |
| spinContainerStyle | style object                                            |                             | Customize spin wheel container                            |
| spinWheelStyle     | style object                                            |                             | Customize spin wheel                                      |
| spinButtonStyle    | style object                                            |                             | Customize spin button                                     |
| resetButtonStyle   | style object                                            |                             | Customize reset button                                    |
| spinFontStyle      | style object                                            |                             | Customize button font                                     |
| spinItemStyle      | style object                                            |                             | Customize spin items style                                |


## Example

```jsx
import { SpinWheel } from "react-spin-wheel"
import "react-spin-wheel/dist/index.css"

function App() {

  return (
    <>
      <SpinWheel 
        items={
          ["United States", "Brazil", "India", "China", "Russia", "Australia", "Japan", "Canada", "France", "Germany"]
        }
        onFinishSpin={(item) => {
          alert(item);
        }}
      />
    </>
  )
}

export default App
```

# Contact
Github: [react-spin-wheel](https://github.com/CamWang/react-spin-wheel/tree/main/src/spinwheel)
Email: camwang@outlook.com

Feel free to raise issues