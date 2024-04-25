import './App.css'
import { SpinWheel } from './spinwheel';

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
