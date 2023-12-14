/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"

const EditProfileProtectRoute = (props) => {
    const workerAccount = localStorage.getItem('workerAccount')
    const booleanValue = workerAccount === "true" ? true : false;
    console.log((booleanValue));
    if(booleanValue) {
        console.log('hi i am EditProfileProtectRoute');
        return props.children
    }
    else{
        console.log('hi i am EditProfileProtectRoute')
        return (
            <Navigate to='/' />
            )
        }
}

export default EditProfileProtectRoute