import React from "react";
import { shallow } from 'enzyme';
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";


test('shoud renser expenselist item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})