const calculateMonthlyPayment = (calcVariables: CalculationVariables) => {
  const {
    msrp,
    negotiatedPrice,
    downPayment,
    residualValuePercentage,
    financePercentage,
    leaseMonths,
    salesTax,
  } = calcVariables;

  const residualValue = msrp * (residualValuePercentage / 100);
  const adjustedCost = negotiatedPrice - downPayment;

  const depreciationAmount = adjustedCost - residualValue;
  const basePayment = depreciationAmount / leaseMonths;

  const moneyFactor = financePercentage / 2400;
  const rentCharge = (adjustedCost + residualValue) * moneyFactor;

  return (basePayment + rentCharge) * (1 + salesTax / 100);
};

export { calculateMonthlyPayment };
