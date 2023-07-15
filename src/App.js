import "./App.css";
import { useState } from "react";

function App() {
  const [tanks, setTanks] = useState([
    "M60",
    "M48Patton",
    "T110E5",
    "T110E4",
    "Sheridan",
  ]);
  const Remove = (index) => {
    if (Math.random() >= 0.5) {
      const New = tanks.slice();
      New.splice(index, 1);
      alert("Kill " + tanks[index]);
      setTanks(New);
    } else {
      alert("Asshole");
    }
  };
  const Nie = tanks.map((item, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          Remove(index);
        }}
      >
        {item}
      </li>
    );
  });
  return (
    <div>
      <ul>{Nie}</ul>
    </div>
  );
}

export default App;
