import  selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';



test('should return 0 with no expenses', () =>{
    const total = selectExpensesTotal([])
    expect(total).toBe(0)
})

test('should return single expenses with corerct amount', () =>{
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(expenses[0].amount)
})


test('should return  expenses with corerct amount', () =>{
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
})