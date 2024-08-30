const billEl = document.getElementById('bill');
const tipAmountEl = document.getElementById('tip-amount');
const totalAmountEl = document.getElementById('total-amount');
const totalPeopleEl = document.getElementById('people')
const resetEl = document.getElementById('reset')
const customTipEl = document.getElementById('tip');

const tipRates = document.querySelectorAll('input[name="tip"]')

function getTotals() {
    const billAmount = getBill()
    const tipPercentage = getTipPercentage()
    const totalPeople = parseInt(totalPeopleEl.value || '1');
    const tipAmount = (tipPercentage / 100) * billAmount;
    const tipAmountPerPerson = tipAmount / totalPeople;
    const total = billAmount + tipAmount;
    const totalPerPerson = total / totalPeople;
    totalAmountEl.innerText = `$${totalPerPerson.toFixed(2)}`;
    tipAmountEl.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
}

function getBill() {
    return parseFloat(billEl.value || '0');
}

function getTipPercentage() {
    const selectedTip = document.querySelector('input[name="tip"]:checked');
    if (selectedTip && selectedTip.value !== 'custom') {
        return parseFloat(selectedTip.value) || 0;
    }
    return parseFloat(customTipEl.value || '0');
}


billEl.addEventListener('input', (e) => {
    getTotals();
})

totalPeopleEl.addEventListener('input', (e) => {
    getTotals();
})


tipRates.forEach((t) => {
    t.addEventListener('change', (e) => {
        getTotals()
    })
})

resetEl.addEventListener('click', () => {
    document.getElementById('tip-form').reset();
    document.querySelectorAll('input[name="tip"]').forEach((tip) => {
        tip.checked = false;
    })
    customTipEl.value = '';
    getTotals();
})
