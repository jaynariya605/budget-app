import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header'
import DashBoard from '../components/DashBoard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import LoginPage from '../components/LoginPage';
import ProtectedRoute from'./ProtectedRoute';
import LoginRouter from'./LoginRouter';



const AppRouter = createBrowserRouter([
    {
        path:"/",
        element: <LoginRouter><LoginPage /></LoginRouter>,
    },{
        path: "/dashboard",
        element:<> <Header/> <ProtectedRoute><DashBoard/> </ProtectedRoute> </>
    },{
        path: "/create",
        element:<> <Header/> <ProtectedRoute><AddExpense/> </ProtectedRoute> </>
    },{
        path:"/edit/:id",
        element:<> <Header/> <ProtectedRoute><EditExpense/> </ProtectedRoute> </>
    }
])



export default AppRouter