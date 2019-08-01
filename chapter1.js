const spendingCap = 1000;
const taxRate = 0.08;
const phonePrice = 699.99;
const accessoryPrice = 39.99;

let bankBalance = 1500.00;
let amount = 0;

function calculateTax(amount) {
    return amount * taxRate;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < bankBalance) {
    amount = amount + phonePrice;

    if(amount < spendingCap) {
        amount = amount + accessoryPrice;
    }
}

amount = amount + calculateTax(amount);

