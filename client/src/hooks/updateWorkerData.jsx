import { useSelector } from "react-redux";
export const useWorkerUpdateValues = () => {
    const {worker} = useSelector((state) => state.worker)
    console.log(worker);
    return (
     {
        name:worker?.name,
        lastName: worker?.lastName,
        email:worker?.email,
        job: worker?.job,
        experience: worker?.experience,
        phoneNumber1: worker?.phoneNumber1,
        phoneNumber2: worker?.phoneNumber2,
        profileImageURL: worker?.profileImageURL,
        province: worker?.province,
        personalInfo: worker?.aboutuser,
    }
    )
}

