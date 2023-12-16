/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'

const ProtectedRoute = (props) => {
    const {worker} = useSelector((state) => state.worker)
    console.log(worker);
    const userdataToken =  localStorage.getItem('userdataToken')
    console.log(userdataToken);
    if(userdataToken && !worker) {
        console.log("this is protect ProtectedRoute file")
        return props.children
    }else{
        console.log('and this is not ProtectedRoute file');
        return <Navigate to='/' />
    }
}

export default ProtectedRoute