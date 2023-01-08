import React from "react";
import { EnzymeAdapter, shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses"
import moment from "moment";
import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm correctly', () =>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render data ExpenseForm correctly', () =>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid ExpenseForm ', () =>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => {}
     })
     expect(wrapper.state('error').length).toBeGreaterThan(0)
     expect(wrapper).toMatchSnapshot()

})

test('should set descriptiom for input change', () =>{
    const wrapper = shallow(<ExpenseForm />)
    const value = 'No description'
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(0).simulate('change', { 
        target: { value }
     })
     expect(wrapper.state('description')).toBe(value)
     expect(wrapper).toMatchSnapshot()

})


test('should set note for note change', () =>{
    const wrapper = shallow(<ExpenseForm />)
    const value = 'Testing Notes'
    expect(wrapper).toMatchSnapshot()
    wrapper.find('textarea').simulate('change', { 
        target: { value }
     })
     expect(wrapper.state('note')).toBe(value)
     expect(wrapper).toMatchSnapshot()

})

test('should set valid amount for amount change', () =>{
    const wrapper = shallow(<ExpenseForm />)
    const value = '100.2'
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change', { 
        target: { value }
     })
     expect(wrapper.state('amount')).toBe(value)
     expect(wrapper).toMatchSnapshot()

})

test('should not set invalid amount for amount change', () =>{
    const wrapper = shallow(<ExpenseForm />)
    const value = '10.0.2'
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change', { 
        target: { value }
     })
     expect(wrapper.state('amount')).not.toBe(value)
     expect(wrapper).toMatchSnapshot()

})


test('should call onSubmit prop for valid form submission', () =>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => {}
     })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('should set new date on date change', ()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})


test('should set calanderFocused on  change', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused: true})
    expect(wrapper.state('calanderFocused')).toBe(true)
})