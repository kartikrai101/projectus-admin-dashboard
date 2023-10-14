import {useState, useEffect, useRef} from 'react';
import SuccessModal from '../../User/SuccessModal';
import Dropzone from 'react-dropzone'

const Edit = ({setEdit, details}) => {

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const roleRef = useRef();
    const cityRef = useRef();

    const [showSuccessBanner, setShowSucccessBanner] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [uploadedName, setUploadedName] = useState("");

    const addUserHandler = () => {
        const name = nameRef.current.value;
        
        setShowSucccessBanner(true);
    }

    return (
        <>
        <div className=" mt-[20px]">
            <form>
                <div className="w-full flex flex-col items-start">
                        <p className="text-[14px] text-[#4B465C]">Profile Photo</p>
                        <Dropzone onDrop={acceptedFiles => {
                                console.log(acceptedFiles[0].name)
                                setUploaded(true);
                                setUploadedName(acceptedFiles[0].name)
                            }}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div {...getRootProps()} className="flex flex-col items-center justify-center border-[1px] border-[#DBDADE] rounded-[5px] ">
                                    <input {...getInputProps()} />
                                    {
                                        uploaded ? (
                                            <p className='text-[#4B465C99] font-semibold'>{uploadedName}</p>
                                        ) : (
                                            <>
                                                <img src="/Images/ProfilePicture.png" alt ="upload" className="w-[70px]" />
                                            </>
                                        )
                                    }
                                </div>
                                </section>
                            )}
                        </Dropzone>
                </div>
                <div className="mt-[20px]">
                    <div className="flex justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input required defaultValue={details.name} ref={nameRef} type="text" name="name" placeholder="Enter your name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Email</p>
                            <input required defaultValue={details.email} ref={emailRef} type="email" name="email" placeholder="Enter your email" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input required defaultValue={details.mobile} ref={mobileRef} type="number" name="mobile" placeholder="Enter your contact" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px] w-[67%]">
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">Assigned Role</p>
                            <input required defaultValue={details.assignedRole} ref={roleRef} type="text" name="address" placeholder="Select your assigned role" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">City</p>
                            <input required defaultValue={details.city} ref={cityRef} type="text" name="state" placeholder="Enter your city" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[#4B465C90]" />
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px] space-x-5">
                    <div onClick={() => setEdit(false)} className="bg-[#3C3836] text-white text-center cursor-pointer rounded-[5px] px-[20px] py-[5px] text-[15px] font-medium">Save</div>
                    <div onClick={() => setEdit(false)} className="bg-[#A8AAAE29] text-[#3C3836] cursor-pointer text-center rounded-[5px] px-[20px] py-[5px] font-medium">Cancel</div>
                </div>
            </form>
        </div>
        </>
    );
}

export default Edit;