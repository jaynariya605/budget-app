import expenses from "../tests/fixtures/expenses";

export default (expenses)=> {

    if(expenses.length === 0 || !expenses){
        return 0 
    }

    return expenses.map((expense)=> expense.amount).reduce((sum, val)=> sum + val, 0)

}