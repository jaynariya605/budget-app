import {  addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses,startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from'../../firebase/firebase';
import { ref, set, push, onValue, get, onChildRemoved } from "firebase/database";
const  creteMockStore = configureMockStore([thunk]);
const uid ="thisismyuid"

beforeEach((done) =>{
    const expenseData = {}
    expenses.forEach(({ id, description, note, amount, createdAt})=>{
        expenseData[id] = { description, note, amount, createdAt }
    })
    set(ref(db,`users/${uid}/expenses`), expenseData).then(()=> done())
})


test('should  setyp remove expense action object', () =>{
    const action = removeExpense({ id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    }) 
})


test(('should  remove to database and store'), (done) => {
    
    const store = creteMockStore({auth: {uid}})

    store.dispatch(startRemoveExpense({id: expenses[0].id})).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenses[0].id
        })
        get(ref(db, `users/${uid}/expenses/${actions[0].id}`)).then((snapshot)=>{    
            expect(snapshot.val()).toEqual(null)
            done()
        })
     

        
    })

})

test('should able to add nerw note value',()=>{
    const action = editExpense('123abc', { note: 'new note value'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    })

})


test(('should edit to database and store'), (done) => {
    const editexpenseData = {
        description:'edited',
        amount: 3000,
        note:" this one is better",
        createdAt: 1000
    }
    const store = creteMockStore({auth: {uid}})

    store.dispatch(startEditExpense(expenses[0].id, editexpenseData)).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[0].id,
            updates: editexpenseData
        })
        get(ref(db, `users/${uid}/expenses/${actions[0].id}`)).then((snapshot)=>{    
            expect(snapshot.val()).toEqual(editexpenseData)
            done()
        })
     

        
    })

})

test('should setup add expense action object with provided values ', ()=>{
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:expenses[2]
    })

})


// test('should setup add expense action object with default values ',()=>{
//     const action =  addExpense()

//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description:'',
//             amount: 0,
//             createdAt: 0,
//             note:'',
//             id: expect.any(String)
//         }
//     })
// })

test(('should add expense to database and store'), (done) => {
    const store = creteMockStore({auth:{uid}})
    const addexpenseData = {
        description:'mouse',
        amount: 3000,
        note:" this one is better",
        createdAt: 1000
    }
    store.dispatch(startAddExpense(addexpenseData)).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...addexpenseData
            }
        })
        get(ref(db, `users/${uid}/expenses/${actions[0].expense.id}`)).then((snapshot)=>{
            expect(snapshot.val()).toEqual(addexpenseData)
            done()
        })
     

        
    })

})


test('should add expense with defaults to database and store expense data ',(done) =>{
    const store = creteMockStore({auth:{uid}})
    const expenseDatadefault = {
        description : '', 
        note : '',
        amount : 0, 
        createdAt : 0 
    }
    store.dispatch(startAddExpense()).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDatadefault
            }
        })
        get(ref(db, `users/${uid}/expenses/${actions[0].expense.id}`)).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDatadefault)
            done()
        })

        
    })
})

test('should setup set expense action object with data', () =>{
    const actions = setExpenses(expenses);
    expect(actions).toEqual({
        type:'SET_EXPENSES',
        expenses
    })

})

test('should fetch  expense from database', (done) =>{
    const store = creteMockStore({auth: {uid}})
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})