import React, { Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';



export const ExpenseList = (props) =>{
    
    const [data, setData] = useState([])
    const [isLoaded, setLoading] = useState(false)
    const [isFirst,setFirst] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{ 
            setLoading(true)
            setFirst(false)
        }, 5000)
        setData(props.expenses)
        
        
    },[props.expenses])
        
    
    
    return (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>

        
        <div className="list-body">
        
        

        {((!isFirst && data.length ===0) ? (
            <div className="list-item__message">
                <span>No expense added</span>
            </div>
            ) : 
        
        (
            
            data.map((expense)=>{
                return (
                    <div key={expense.id}>
                    
                        <ExpenseListItem  { ...expense}/>
                    
                    
                    </div>
                )
            })
            
        ))
    }
    {!isLoaded && <div className="loadinglist"> <img className="loader__image--list" src="/img/loader.gif"></img></div>}
    
    
    </div>
    </div>
)}

const mapStateToProps = (state)=>{
    return  {
        expenses: selectExpenses(state.expenses,state.filters),
    }
}

export default connect(mapStateToProps)(ExpenseList);

