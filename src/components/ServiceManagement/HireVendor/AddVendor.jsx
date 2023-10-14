import {useState, useRef, useEffect} from 'react';
import SuccessModal from '../../User/SuccessModal';

const AddVendor = ({setAddVendor}) => {

    const nameRef = useRef();
    const mobileRef = useRef();
    const cityRef = useRef();
    const designationRef = useRef();

    const [showSuccessBanner, setShowSucccessBanner] = useState(false);

    const addVendorHandler = () => {
        const name = nameRef.current.value;
        
        setShowSucccessBanner(true);
    }

    return (
        <>
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[30px]">
                    <div className="flex justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input required ref={nameRef} type="text" name="name" placeholder="Enter your name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input required ref={mobileRef} type="number" name="mobile" placeholder="Enter your mobile number" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">City</p> 
                            <input required ref={cityRef} type="text" name="city" placeholder="Enter your city" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Designation</p> 
                            <select ref={designationRef} required name="designation" className='text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]'>
                                <option name="architect" className=''>Architect</option>
                                <option name="architect" className=''>General Advisor</option>
                                <option name="architect" className=''>Financial Advisor</option>
                            </select>
                            {/* <input required ref={designationRef} type="text" name="designation" placeholder="Select your designation" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" /> */}
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {addVendorHandler()}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer font-medium">Add Vendor</div>
                </div>
            </form>
        </div>
        {
            showSuccessBanner ? 
            <SuccessModal setAdd={setAddVendor} name={"Vendor"} /> : null
        }
        </>
    );
}

export default AddVendor;