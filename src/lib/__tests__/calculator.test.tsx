import {calculateMonthlyPayment} from "../calculator";

describe("calculator", () => {
  describe("calculateMonthlyPayment", () => {
    it("calculates monthly payment with proper input", () => {
      const input = {
        msrp: 50000,
        negotiatedPrice: 45000,
        downPayment: 2000,
        residualValuePercentage: 60,
        financePercentage: 2,
        leaseMonths: 36,
        salesTax: 8,
      };

      const expectedSum = 455.70;

      expect(calculateMonthlyPayment(input)).toEqual(expectedSum);
    });
  });
});
