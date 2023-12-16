export const useWorkerUpdateValues = (worker) => {
    // const {worker} = useSelector((state) => state.worker)
    console.log(worker);
    // const {name, email, province, aboutuser,lastName, job,experience,phoneNumber1,phoneNumber2, } = wo
    return (
     {
        name: worker?.name,
        lastName: worker?.lastName,
        email:worker?.email,
        job: worker?.job,
        experience: worker?.experience,
        phoneNumber1: worker?.phoneNumber1,
        phoneNumber2: worker?.phoneNumber2,
        profileImage: worker?.profileImage,
        province: worker?.province,
        personalInfo: worker?.aboutuser,
    }
    )
}