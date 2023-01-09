import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import { useEffect } from "react";


export const DashBoard =  () => {
            return (<div>
            <ExpensesSummary/>
            <ExpenseListFilters/>
            <ExpenseList />
            </div>)
      

};


export default DashBoard

