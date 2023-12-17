import { useState } from "react";


function App() {

  //let counter = 5;

  let [count, setCount] = useState(5);

  const addValue = () => {
    if(!(count == 20)){
      setCount(count+1)
    }
    
    console.log("add Count = ",count);
  }

  function removeValue(){
    // counter = counter - 1;
    if(count != 0){
      setCount(count-1)
    }
    
    console.log("remove Count = ",count);
  }


  return (
     <>
      <h1>Learning Hooks</h1>

      <h3>Count is {count}</h3>

      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
     
     </>
  )
}

export default App
