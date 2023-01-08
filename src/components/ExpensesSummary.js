import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from"../selectors/expenses";
import getTotalExpenses from"../selectors/expenses-total"
import numeral from "numeral";
import  { Link } from 'react-router-dom'

export const ExpenseSummary= ({ expenseCount, expensesTotal }) =>{
    const formatedTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"> There are total <span>{expenseCount}</span> expenses of <span>{formatedTotal}</span> . </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
                
            </div>
            
        </div>
    )
}

const MapstateToProps = (state) =>{
    const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getTotalExpenses(visibleExpenses)
    }
}

export default connect(MapstateToProps)(ExpenseSummary)