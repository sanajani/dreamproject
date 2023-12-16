/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'

const ProtectedRoute = (props) => {
    const {worker} = useSelector((state) => state.worker)
    const {user} = useSelector((state) => state.token)
    console.log(worker.length > 0);
    // console.log(user);
    if(user && !worker.length > 0) {
        console.log("this is protect ProtectedRoute file")
        return props.children
    }else{
        console.log('and this is not ProtectedRoute file');
        return <Navigate to='/' />
    }
}

export default ProtectedRoute