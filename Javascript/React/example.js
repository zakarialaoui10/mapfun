import React, { useState } from "react";
import ReactDOM from 'react-dom/client'
import mapFun from "./mapFun.js"

const NumberList = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const square = (x) => {
    return x * x;
  };
  const squaredNumbers = mapFun(square, numbers);
  return (
    <div>
      <h1>Squared Numbers:</h1>
      <ul>
        {squaredNumbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NumberList />
	</React.StrictMode>
)
