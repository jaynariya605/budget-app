import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginRouter = ({user , children}) => {
    if(user.uid){
        return <Navigate to="/dashboard"/>
    }
    return children
}

const mapStateToProps = (state) => ({
    user: state.auth
})

export default connect(mapStateToProps)(LoginRouter)