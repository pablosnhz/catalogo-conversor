type Currency = 'ARS'|'USD'

interface Price {
    number: number,
    currency: Currency
}

interface ExpensesItem {
    id: number,
    titulo: string,
    costo: Price
}

interface IExpenses {
    
}

class Expenses {
    
}