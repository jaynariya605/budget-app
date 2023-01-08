import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { useNavigate  } from "react-router-dom";


export const EditExpense =(props)=>{
    const navigate = useNavigate()
    const onSubmit = (update)=>{
        props.startEditExpense(props.match.id, update)
        navigate("/dashboard")
    }

    const onClick = ()=> {
        props.startRemoveExpense({ id : props.match.id })
       navigate("/dashboard")
    }

  
    const expense = props.expenses.find((expense) => expense.id === props.match.id)

        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense={expense}
                    onSubmit={onSubmit}/>
                    <button className="button button--secondary" onClick={onClick}>Remove</button>
                </div>
            </div>
                
           
    )
    

}

const Wrapper = (props) => {
    let params = useParams()
    return (<EditExpense { ...props } match={params} />)
}



const mapStateToProps = (state) =>{
    return {
        expenses: state.expenses, 
    }
}

const mapDispatchToprops = (dispatch) =>{
    return {
        startEditExpense: (id, update) => dispatch(startEditExpense(id, update)),
        startRemoveExpense: ({id}) => dispatch(startRemoveExpense({id}))
    }
}

export  default connect(mapStateToProps, mapDispatchToprops)(Wrapper)