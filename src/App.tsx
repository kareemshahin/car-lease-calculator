import './App.css';

import {useState} from 'react';
import Calculator from "./components/Calculator";
import Payment from "./components/Payment";

import {calculateMonthlyPayment} from "./lib/calculator";

import {sectionData} from "./lib/sections";

const initState = {
  msrp: 50000,
  negotiatedPrice: 45000,
  downPayment: 2000,
  residualValuePercentage: 57,
  financePercentage: 2.01,
  leaseMonths: 36,
  salesTax: 7.75,
};

function App() {
  const [calcVariables, setCalcVariables] = useState<CalculationVariables>(initState);
  const [sum, setSum] = useState(calculateMonthlyPayment(initState));

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.target.id;
    const val = event.target.value;

    const newState = {...calcVariables, [id]: val};
    setCalcVariables(newState)

    const newSum = calculateMonthlyPayment(newState);
    setSum(newSum);
  }

  return (
    <div className="App">
      <Calculator sections={sectionData(calcVariables)} handleInputChange={handleClick}/>
      <Payment payment={sum}/>
    </div>
  );
}

export default App;
