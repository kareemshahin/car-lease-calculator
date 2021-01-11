import './App.css';

import {useState} from 'react';
import Calculator from "./components/Calculator";
import Payment from "./components/Payment";

import {calculateMonthlyPayment} from "./lib/calculator";

function sectionData(calcVariables: CalculationVariables): Section[] {
  const sections: Section[] = [
    {
      label: {text: "MSRP"},
      input: {id: 'msrp', value: calcVariables.msrp},
    },
    {
      label: {text: "Negotiated Price"},
      input: {id: 'negotiatedPrice', value: calcVariables.negotiatedPrice},
    },
    {
      label: {text: "Down Payment"},
      input: {id: "downPayment", value: calcVariables.downPayment},
    },
    {
      label: {text: "Residual Value %"},
      input: {id: 'residualValuePercentage', value: calcVariables.residualValuePercentage},
    },
    {
      label: {text: "Finance Rate %"},
      input: {id: "financePercentage", value: calcVariables.financePercentage},
    },
    {
      label: {text: "Sales Tax %"},
      input: {id: "salesTax", value: calcVariables.salesTax},
    },
    {
      label: {text: "Lease Duration (months)"},
      input: {id: "leaseMonths", value: calcVariables.leaseMonths},
    },
  ];

  return sections;
}


function App() {
  const [calcVariables, setCalcVariables] = useState<CalculationVariables>({
    msrp: 50000,
    negotiatedPrice: 45000,
    downPayment: 2000,
    residualValuePercentage: 57,
    financePercentage: 2.01,
    leaseMonths: 36,
    salesTax: 7.75,
  });
  const [sum, setSum] = useState(0);

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
