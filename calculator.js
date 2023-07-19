// Function to remove commas from a number
function removeCommas(number) {
  return number.replace(/,/g, "");
}

// Function to add commas to a number
function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to format the input value with commas
function formatNumberInput(input) {
  const value = removeCommas(input.value); // Remove existing commas
  const formattedValue = addCommas(value);
  input.value = formattedValue;
}

// Function to calculate and display the results
function calculate() {
  const grossIncomeInput = document.getElementById('grossIncome');
  const rentalIncomeInput = document.getElementById('rentalIncome');

  const grossIncome = parseFloat(removeCommas(grossIncomeInput.value)) || 0;
  const rentalIncome = parseFloat(removeCommas(rentalIncomeInput.value)) || 0;

  const advertising = parseFloat(removeCommas(document.getElementById('advertising').value)) || 0;
  const councilRates = parseFloat(removeCommas(document.getElementById('councilRates').value)) || 0;
  const waterRates = parseFloat(removeCommas(document.getElementById('waterRates').value)) || 0;
  const landTax = parseFloat(removeCommas(document.getElementById('landTax').value)) || 0;
  const strataFees = parseFloat(removeCommas(document.getElementById('strataFees').value)) || 0;
  const insurance = parseFloat(removeCommas(document.getElementById('insurance').value)) || 0;
  const interestLoan = parseFloat(removeCommas(document.getElementById('interestLoan').value)) || 0;
  const propertyManagerFees = parseFloat(removeCommas(document.getElementById('propertyManagerFees').value)) || 0;
  const repairsMaintenance = parseFloat(removeCommas(document.getElementById('repairsMaintenance').value)) || 0;
  const propertyDepreciation = parseFloat(removeCommas(document.getElementById('propertyDepreciation').value)) || 0;
  const cleaningPestControl = parseFloat(removeCommas(document.getElementById('cleaningPestControl').value)) || 0;

  const totalExpenses = advertising + councilRates + waterRates + landTax + strataFees + insurance + interestLoan + propertyManagerFees + repairsMaintenance + propertyDepreciation + cleaningPestControl;

  const preTaxCashFlow = rentalIncome - totalExpenses;

  const taxRate = calculateTaxRate(grossIncome);
  const taxBenefit = (-preTaxCashFlow) * taxRate;

  document.getElementById('rentalIncomeResult').textContent = `Rental Income: $${addCommas(rentalIncome.toFixed(2))}`;
  document.getElementById('totalExpensesResult').textContent = `Total Expenses: $${addCommas(totalExpenses.toFixed(2))}`;
  document.getElementById('preTaxCashFlowResult').textContent = `Pre-Tax Cash Flow: $${addCommas(preTaxCashFlow.toFixed(2))}`;
  document.getElementById('taxBenefitResult').textContent = `Tax Benefit: $${addCommas(taxBenefit.toFixed(2))}`;
}

// Function to calculate the tax rate based on the gross income
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

// Add event listeners to input fields for dynamic result calculation
const inputFields = document.querySelectorAll('input[data-format="number"]');
inputFields.forEach((input) => {
  input.addEventListener('input', () => {
    formatNumberInput(input);
    calculate();
  });
});

// Initial calculation on page load
calculate();
