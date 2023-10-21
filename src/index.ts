const bAdd          = document.querySelector('#bAdd') as HTMLButtonElement;
const inputTitle    = document.querySelector('#title') as HTMLInputElement;
const inputCost     = <HTMLInputElement>document.querySelector('#cost');
const inputCurrency: HTMLInputElement = <HTMLInputElement>document.querySelector('#currency');

const expenses = new Expenses('USD');

bAdd!.addEventListener('click', e => {
    if(inputTitle!.value != '' && inputCost!.value != '' && !isNaN(parseFloat(inputCost.value))){
        const title = inputTitle!.value;
        const cost:number = parseFloat(inputCost!.value);
        const currency:Currency = <Currency>(inputCurrency!.value);

        expenses.add({title: title, cost: {number:cost, currency: currency}})
    }
});