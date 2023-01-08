import {  setEndDate, 
    setStartDate, 
    sortByDate, 
    setTextFilter, 
    sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})


test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(100))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(100)
    })
})


test('should generate set text filter action object', ()=>{
    const action = setTextFilter('Rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    })
})

test('should generate set text filter no argument action object', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate action object for sort by date', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})


test('should generate action object for sort by amount', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})