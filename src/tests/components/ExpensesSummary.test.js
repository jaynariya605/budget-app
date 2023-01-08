import { ExpenseSummary } from "../../components/ExpensesSummary";
import React from "react";
import { shallow } from "enzyme";

test('should render correctl ExepenssSummary ', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})