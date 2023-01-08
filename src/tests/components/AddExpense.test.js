import React from "react";
import { shallow } from "enzyme"
import { AddExpense } from "../../components/AddExpense";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses'

let startAddExpense, navigate, wrapper

beforeEach(()=>{
    startAddExpense = jest.fn()
    navigate = jest.fn()
    wrapper = shallow(<AddExpense user={{uid: '123u'}} startAddExpense={startAddExpense} navigate={navigate}/>)
})

test('should add render AddExpense compenent correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle AddExpense onSubmit correctly', () => {

    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0])
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0])
    expect(navigate).toHaveBeenLastCalledWith('/')
    
})