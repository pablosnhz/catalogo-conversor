"use strict";
var bAdd = document.querySelector('#bAdd');
var inputTitle = document.querySelector('#title');
var inputCost = document.querySelector('#cost');
var inputCurrency = document.querySelector('#currency');
var expenses = new Expenses('USD');
bAdd.addEventListener('click', function (e) {
    if (inputTitle.value != '' && inputCost.value != '' && !isNaN(parseFloat(inputCost.value))) {
        var title = inputTitle.value;
        var cost = parseFloat(inputCost.value);
        var currency = (inputCurrency.value);
        expenses.add({ title: title, cost: { number: cost, currency: currency } });
    }
});
