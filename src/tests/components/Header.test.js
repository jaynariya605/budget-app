import React from 'react';
import {Header} from '../../components/Header';
import { shallow } from 'enzyme';


test('should render Header correctly', ()=>{
    const wrapper = shallow(<Header startLogout={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()

    // const renderer =  new ShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})


test('should call startlogout  render login page correctly',()=>{
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').prop('onClick')()
    expect(startLogout).toHaveBeenCalled()
   
    
})