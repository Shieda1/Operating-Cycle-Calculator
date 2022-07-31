// https://calculator.swiftutors.com/operating-cycle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const operatingCycleRadio = document.getElementById('operatingCycleRadio');
const daysPayableOutstandingRadio = document.getElementById('daysPayableOutstandingRadio');
const daysInventoryOutstandingRadio = document.getElementById('daysInventoryOutstandingRadio');
const daysSalesOutstandingRadio = document.getElementById('daysSalesOutstandingRadio');

let operatingCycle;
let daysPayableOutstanding = v1;
let daysInventoryOutstanding = v2;
let daysSalesOutstanding = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

operatingCycleRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Payable Outstanding';
  variable2.textContent = 'Days Inventory Outstanding';
  variable3.textContent = 'Days Sales Outstanding';
  daysPayableOutstanding = v1;
  daysInventoryOutstanding = v2;
  daysSalesOutstanding = v3;
  result.textContent = '';
});

daysPayableOutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Cycle';
  variable2.textContent = 'Days Inventory Outstanding';
  variable3.textContent = 'Days Sales Outstanding';
  operatingCycle = v1;
  daysInventoryOutstanding = v2;
  daysSalesOutstanding = v3;
  result.textContent = '';
});

daysInventoryOutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Cycle';
  variable2.textContent = 'Days Payable Outstanding';
  variable3.textContent = 'Days Sales Outstanding';
  operatingCycle = v1;
  daysPayableOutstanding = v2;
  daysSalesOutstanding = v3;
  result.textContent = '';
});

daysSalesOutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Cycle';
  variable2.textContent = 'Days Payable Outstanding';
  variable3.textContent = 'Days Inventory Outstanding';
  operatingCycle = v1;
  daysPayableOutstanding = v2;
  daysInventoryOutstanding = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(operatingCycleRadio.checked)
    result.textContent = `Operating Cycle = ${computeOperatingCycle().toFixed(2)} Days`;

  else if(daysPayableOutstandingRadio.checked)
    result.textContent = `Days Payable Outstanding = ${computeDaysPayableOutstanding().toFixed(2)}`;

  else if(daysInventoryOutstandingRadio.checked)
    result.textContent = `Days Inventory Outstanding = ${computeDaysInventoryOutstanding().toFixed(2)}`;

  else if(daysSalesOutstandingRadio.checked)
    result.textContent = `Days Sales Outstanding = ${computeDaysSalesOutstanding().toFixed(2)}`;
})

// calculation

function computeOperatingCycle() {
  return Number(daysPayableOutstanding.value) - Number(daysInventoryOutstanding.value) + Number(daysSalesOutstanding.value);
}

function computeDaysPayableOutstanding() {
  return Number(operatingCycle.value) + Number(daysInventoryOutstanding.value) - Number(daysSalesOutstanding.value);
}

function computeDaysInventoryOutstanding() {
  return (Number(operatingCycle.value) - Number(daysPayableOutstanding.value) - Number(daysSalesOutstanding.value)) * -1;
}

function computeDaysSalesOutstanding() {
  return Number(operatingCycle.value) - Number(daysPayableOutstanding.value) + Number(daysInventoryOutstanding.value);
}