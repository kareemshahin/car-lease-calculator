interface InputLabel {
  text: string;
  description?: string;
}

interface InputField {
  id: string;
  value: number;
}

interface Section {
  label: InputLabel;
  input: InputField;
}

interface CalculationVariables {
  msrp: number;
  negotiatedPrice: number;
  downPayment: number;
  residualValuePercentage: number;
  financePercentage: number;
  leaseMonths: number;
  salesTax: number;
}
