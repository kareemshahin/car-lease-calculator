const sectionData = (calcVariables: CalculationVariables) : Section[] => {
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
};

export {sectionData};
