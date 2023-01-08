import {LoginPage} from "../../components/LoginPage";
import React from "react";
import { shallow } from 'enzyme';

test('should render login page correctly',()=>{
    const wrapper = shallow(<LoginPage user={{}}/>)
    expect(wrapper).toMatchSnapshot()
})


test('should call startlogin  render login page correctly',()=>{
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage user={{}} startLogin={startLogin}/>)
    wrapper.find('button').prop('onClick')()
    expect(startLogin).toHaveBeenCalled()
   
    
})