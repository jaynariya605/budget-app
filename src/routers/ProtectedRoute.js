import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({user, children}) => {
    if(!user.uid){
        return <Navigate to="/" />
    }
    return children
}
const mapStateToProps= (state) => ({
    user: state.auth
})

export default connect(mapStateToProps)(ProtectedRoute)