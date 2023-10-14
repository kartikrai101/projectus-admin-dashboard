import {useState, useEffect, useRef} from 'react';
import SuccessModal from './SuccessModal';

const AddUser = ({setAddUser}) => {

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const addressRef = useRef();
    const stateRef = useRef();
    const countryRef = useRef();
    const cityRef = useRef();
    const pinRef = useRef();

    const [showSuccessBanner, setShowSucccessBanner] = useState(false);

    const addUserHandler = () => {
        const name = nameRef.current.value;
        
        setShowSucccessBanner(true);
    }

    return (
        <>
        <div className=" mt-[20px] text-[#4B465C]">
            <form>
                <div className="w-full flex flex-col items-start">
                    <p className="text-[14px] text-[#4B465C]">Profile Photo</p>
                    <div className="">
                        <img src="/Images/ProfilePhotoIcon.png" alt="picture" className="w-[70px]" />
                    </div>
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
                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Address</p>
                            <input required ref={addressRef} type="text" name="address" placeholder="Enter your address" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Country</p>
                            <input required ref={countryRef} type="text" name="country" placeholder="Enter your country" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">State</p>
                            <input required ref={stateRef} type="text" name="state" placeholder="Enter your state" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                    </div>
                    <div className="flex  space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">City</p>
                            <input required ref={cityRef} type="text" name="city" placeholder="Enter your city" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Pin Code</p>
                            <input required ref={pinRef} type="text" name="pin" placeholder="Enter the pincode" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {addUserHandler()}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[5px] text-[15px] text-[15px] font-medium font-medium">Save</div>
                </div>
            </form>
        </div>
        {
            showSuccessBanner ? 
            <SuccessModal setAdd={setAddUser} name={"User"} /> : null
        }
        </>
    );
}

export default AddUser;