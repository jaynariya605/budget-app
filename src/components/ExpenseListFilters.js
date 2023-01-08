import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
//import 'react-dates-2/initialize';
import { DateRangePicker } from 'react-dates-2';
import 'react-dates-2/lib/css/_datepicker.css';


export class ExpenseListFilters extends React.Component{

    state = {
        calanderFocused: null,
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calanderFocused) => {
        this.setState(()=> ({ calanderFocused }))
    }
    
    onTextChange = (e)=>{
        this.props.onTextChange(e.target.value)
    }

    onSortChange = (e)=>{
        const select = e.target.value === 'date' ? sortByDate : sortByAmount
        this.props.onSortChange(select)
    }
    render () {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                    <input placeholder="Search Expenses" className="text-input" type="text" defaultValue={this.props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" defaultValue={this.props.filters.sortBy} onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        
                        <DateRangePicker
                        startDateId="MyDatePicker"
                        startDate={this.props.filters.startDate}
                        endDateId="MyDatePicker"
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput= {this.state.calanderFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        />
                            
                    </div>
                </div>
                

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSortChange: (select) => dispatch(select()),
        onTextChange: (text)=>dispatch(setTextFilter(text)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)