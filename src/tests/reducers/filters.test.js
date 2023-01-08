import filterReducer from "../../reducers/filters";
import moment from "moment";

test('should set up default filter values',()=>{
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({ 
        sortBy: 'date',
        text: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})

test('should set sortBy to amount values',()=>{
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})


test('should set sortBy to date values',()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        sortBy: 'amount',
        endDate: undefined
    }
    const action = {  type: 'SORT_BY_DATE' }
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})


test('should set text filter',()=>{
    
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'rent'})
    expect(state.text).toBe('rent')
})


test('should set startdate filter',()=>{
    
    const state = filterReducer(undefined, { type: 'SET_START_DATE', date: moment(0)})
    expect(state.startDate).toEqual(moment(0))
})

test('should set enddate filter',()=>{
    
    const state = filterReducer(undefined, { type: 'SET_END_DATE', date: moment(0)})
    expect(state.endDate).toEqual(moment(0))
})