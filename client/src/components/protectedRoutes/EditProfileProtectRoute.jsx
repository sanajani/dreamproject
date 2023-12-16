/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";
const EditProfileProtectRoute = (props) => {
    const {worker} = useSelector((state) => state.worker)

    if(worker) {
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