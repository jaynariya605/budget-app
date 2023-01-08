import  expensesReducer  from '../reducers/expenses';
import filterReducer  from '../reducers/filters';
import { createStore, combineReducers, applyMiddleware, compose }  from 'redux';
import thunk from 'redux-thunk';
import auth from '../reducers/auth'

//Store Creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    return store
}


