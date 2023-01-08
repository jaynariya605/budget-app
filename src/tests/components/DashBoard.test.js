import React from 'react';
import { shallow } from 'enzyme';
import {DashBoard} from '../../components/DashBoard';




test('should render Dashboard correctly', ()=>{
    const wrapper = shallow(<DashBoard user={{uid: '12233'}} />)
    expect(wrapper).toMatchSnapshot()

})