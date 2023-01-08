import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import {  useNavigate } from "react-router-dom";


export const AddExpense =(props)=>{
    const navigate = useNavigate()
    const onSubmit = (expense) =>{
       props.startAddExpense(expense)
        navigate("/dashboard")
    }

    
        return (
      
                <div>
                    <div className="page-header">
                        <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                        </div>
                    </div>
                    <div className="content-container">
                        <ExpenseForm 
                        onSubmit = {onSubmit}
                        />
                    </div>
                    
                </div>
                
           
            
        )
    

}


const mapDispatchToprops = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
    })


export default connect(undefined,mapDispatchToprops )(AddExpense)