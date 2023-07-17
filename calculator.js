function calculate() {
    const grossIncomeInput = document.getElementById('grossIncome');
    const rentalIncomeInput = document.getElementById('rentalIncome');

    const grossIncome = parseFloat(grossIncomeInput.value);
    const rentalIncome = parseFloat(rentalIncomeInput.value);

    if(isNaN(grossIncome) || isNaN(rentalIncome)){
        alert('Please enter values for both Gross Annual Income and Annual Rental Income');
        return;
    }

    const advertising = parseFloat(document.getElementById('advertising').value) || 0;
    const councilRates = parseFloat(document.getElementById('councilRates').value) || 0;
    const waterRates = parseFloat(document.getElementById('waterRates').value) || 0;
    const landTax = parseFloat(document.getElementById('landTax').value) || 0;
    const strataFees = parseFloat(document.getElementById('strataFees').value) || 0;
    const insurance = parseFloat(document.getElementById('insurance').value) || 0;
    const interestLoan = parseFloat(document.getElementById('interestLoan').value) || 0;
    const propertyManagerFees = parseFloat(document.getElementById('propertyManagerFees').value)|| 0;
    const repairsMaintenance = parseFloat(document.getElementById('repairsMaintenance').value) || 0;
    const propertyDepreciation = parseFloat(document.getElementById('propertyDepreciation').value) || 0;
    const cleaningPestControl = parseFloat(document.getElementById('cleaningPestControl').value) || 0; 
  
    const totalExpenses = advertising + councilRates + waterRates + landTax + strataFees + insurance + interestLoan + propertyManagerFees + repairsMaintenance + propertyDepreciation + cleaningPestControl;
  
    const preTaxCashFlow = rentalIncome - totalExpenses;
  
    const taxRate = calculateTaxRate(grossIncome);
    const taxBenefit = preTaxCashFlow * taxRate;
  
    document.getElementById('rentalIncomeResult').innerHTML = `Rental Income: ${rentalIncome.toFixed(2)}`;
    document.getElementById('totalExpensesResult').innerHTML = `Total Expenses: ${totalExpenses.toFixed(2)}`;
    document.getElementById('preTaxCashFlowResult').innerHTML = `Pre-Tax Cash Flow: ${preTaxCashFlow.toFixed(2)}`;
    document.getElementById('taxBenefitResult').innerHTML = `Tax Benefit: ${taxBenefit.toFixed(2)}`;
  }
  
  function calculateTaxRate(grossIncome) {
    if (grossIncome <= 18200) {
      return 0;
    } else if (grossIncome <= 45000) {
      return 0.19;
    } else if (grossIncome <= 120000) {
      return 0.325;
    } else if (grossIncome <= 180000) {
      return 0.37;
    } else {
      return 0.45;
    }
  }
  