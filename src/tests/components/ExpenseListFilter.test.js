import React from 'react';
import { shallow } from "enzyme";
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from "../fixtures/expenses";
import { filters, altfilters } from "../fixtures/filters";
import { DateRangePicker } from 'react-dates';
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        onTextChange={setTextFilter}
        onSortChange={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />)
})  

test('should render ExpenseListFilters correctyl', () =>{
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with altfiler correctyl', () =>{
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()
})


test('should handle text change', () =>{
    const value = "rent"
    wrapper.find('input').simulate('change',{ target : { value }})
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle sort by date ', () =>{
    const value = "date"
    wrapper.setProps({
        filters: altfilters
    })

    wrapper.find('select').simulate('change',{ target : { value }})
    expect(sortByDate).toHaveBeenCalled()
})

test('should handle sort by amount ', () =>{
    const value = "amount"
    wrapper.setProps({
        onSortChange: sortByAmount
    })
    wrapper.find('select').prop('onChange')({ target : { value }})
    expect(sortByAmount).toHaveBeenCalled()
})


test('should handle date change ', () =>{

    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate : altfilters.startDate , endDate :  altfilters.endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(altfilters.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(altfilters.endDate)
})


test('should handle date focused', () =>{

    wrapper.find(DateRangePicker).prop('onFocusChange')(true)
    expect(wrapper.state('calanderFocused')).toBe(true)
   
})