import React from "react";
import{ shallow } from "enzyme";
import { EditExpense } from "../../components/EditExpense";
import expenses from "../fixtures/expenses";
import ExpenseForm from "../../components/ExpenseForm";

let navigate, match, startEditExpense, startRemoveExpense,wrapper 

beforeEach(()=>{
    navigate = jest.fn()
    match = { id: expenses[0].id }
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    wrapper = shallow(<EditExpense 
        startEditExpense={startEditExpense} 
        navigate={navigate}
        startRemoveExpense={startRemoveExpense}
        match={match}
        expenses={expenses}
        />)

})

test('should render EditExpense compenent correctly', () => {
    expect(wrapper).toMatchSnapshot()
})


test('should handle starteditExpense handler correctly', () => {
    const updatedExpense = {
        ...expenses[0],
        amount:2000
    }
    wrapper.find(ExpenseForm).prop('onSubmit')(updatedExpense)
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id , updatedExpense)
    expect(navigate).toHaveBeenLastCalledWith("/")
})

test('should handle removeExpense handler correctly', () => {

    wrapper.find('button').prop('onClick')(expenses[0].id)
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id:expenses[0].id})
    expect(navigate).toHaveBeenLastCalledWith("/")
})