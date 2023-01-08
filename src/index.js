import React from 'react'; //require(react) ES5 and theese ES-6 
import { createRoot } from 'react-dom/client';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase'
import { getAuth } from 'firebase/auth';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import { RouterProvider } from 'react-router-dom';
import { app } from './firebase/firebase';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

const store = configureStore()

const jsx= (
    <Provider store={store}>
        <RouterProvider router={AppRouter}/>
    </Provider>
)

let hasRendered = false

export  const renderApp = () => {
    if(!hasRendered){
        root.render(jsx);
        hasRendered = true
    }
}

root.render(<LoadingPage />);
const auth = getAuth(app)


auth.onAuthStateChanged((user)=>{
    if(user){
        console.log('Loggin')
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp()
        })
    }else{
        console.log('Logout')
        store.dispatch(logout())
        renderApp()
    }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
