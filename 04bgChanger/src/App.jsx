import { useState } from "react";

function App() {

  const [color, setColor] = useState("pink");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button style={{backgroundColor: "red"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("red")}}>red</button>
          <button style={{backgroundColor: "green"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("green")}}>green</button>
          <button style={{backgroundColor: "blue"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("blue")}}>blue</button>
          <button style={{backgroundColor: "black"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("black")}}>red</button>
          <button style={{backgroundColor: "yellow"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("yellow")}}>green</button>
          <button style={{backgroundColor: "orange"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => {setColor("orange")}}>blue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
