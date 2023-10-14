import {useState, useEffect, useRef} from 'react';
import SuccessModal from '../../User/SuccessModal';
import Dropzone from 'react-dropzone'

const Add = ({setAdd}) => {

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
                        <p className="text-[14px] text-[#4B465C]">Add Photo</p>
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
                                                <img src="/Images/ProfilePhotoIcon.png" alt ="upload" className="w-[70px]" />
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
                            <input required ref={nameRef} type="text" name="name" placeholder="Enter your name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Email</p>
                            <input required ref={emailRef} type="email" name="email" placeholder="Enter your email" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input required ref={mobileRef} type="number" name="mobile" placeholder="Enter your contact" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px] w-[67%]">
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">Assigned Role</p>
                            <input required ref={roleRef} type="text" name="address" placeholder="Select your assigned role" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">City</p>
                            <input required ref={cityRef} type="text" name="state" placeholder="Enter your city" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px] space-x-5">
                    <div onClick={() => {addUserHandler()}} className="bg-[#3C3836] text-white text-center cursor-pointer rounded-[5px] px-[20px] py-[5px] font-medium">Add</div>
                    <div onClick={() => setAdd(false)} className="bg-[#A8AAAE29] text-[#3C3836] cursor-pointer text-center rounded-[5px] px-[20px] py-[5px] font-medium">Cancel</div>
                </div>
            </form>
        </div>
        {
            showSuccessBanner ? 
            <SuccessModal setAdd={setAdd} name={"Subadmin"} /> : null
        }
        </>
    );
}

export default Add;