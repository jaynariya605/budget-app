import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";


test('should set default state', () =>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})


test('should remmove expense by id ', () =>{

    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remmove expense by id f not found ', () =>{

    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('should add expense ', () =>{
    const expense = {
        id:'2',
        description: 'rent',
        amount:1095,
        createdAt: moment(0).subtract(4,'days').valueOf()
    
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})


test('should edit expense ', () =>{
    const updates = {
        amount:100,
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
        
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(updates.amount)
})

test('should not edit expense if id not found ', () =>{
    const updates = {
        amount:100,
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
        
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('should set expense ', () =>{
    const action = {
        type: 'SET_EXPENSES',
        expenses
        
    }
    const state = expensesReducer([], action)
    expect(state).toEqual(expenses)
})