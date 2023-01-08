import React from "react";
import { shallow } from 'enzyme';
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test('should renser ExpenseLIst with expnses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
})


test('should renser ExpenseLIst with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot();
})