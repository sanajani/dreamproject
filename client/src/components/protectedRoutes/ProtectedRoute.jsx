/* eslint-disable react/prop-types */
import {Navigate} from 'react-router-dom'

const ProtectedRoute = (props) => {
    const userdataToken =  localStorage.getItem('userdataToken')
    console.log(userdataToken);
    if(userdataToken) {
        console.log("this is protect ProtectedRoute file")
        return props.children
    }else{
        console.log('and this is not ProtectedRoute file');
        return <Navigate to='/' />
    }
}

export default ProtectedRoute