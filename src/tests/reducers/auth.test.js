import auth from "../../reducers/auth";

test('should set uid for login', ()=>{
    const action = {
        type:'LOGIN',
        uid:'abc'
    }
    const state = auth({}, action)
    expect(state.uid).toBe(action.uid)
})


test('should clear uid for logout', ()=>{
    const action = {
        type:'LOGOUT',
    }
    const state = auth({uid: 'abc'}, action)
    expect(state).toEqual({})
    
})