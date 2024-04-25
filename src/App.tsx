import './App.css'
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
