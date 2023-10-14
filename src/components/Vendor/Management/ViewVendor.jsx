import {useState, useEffect, useRef} from 'react';
import SuccessModal from '../../User/SuccessModal';
import CategoryCard from '../../Assets/CategoryCard';

const ActiveClass = "w-[50%] px-[10px] py-[3px] text-white bg-[#DC7A39] cursor-pointer rounded-[5px]";
const InactiveClass = "w-[50%] px-[10px] py-[3px] text-[#4B465C80] cursor-pointer rouded-[5px]";

const categoryList = [
    "Account Consultant"
]

const ViewVendor = ({setViewVendor}) => {
    return (
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[20px]">
                    <div className="flex justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input disabled type="text" name="name" placeholder="Enter your name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Email</p>
                            <input disabled type="email" name="email" placeholder="Enter your email" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input disabled type="number" name="mobile" placeholder="Enter your contact" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Address</p>
                            <input disabled type="text" name="address" placeholder="Enter your address" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">City</p>
                            <input disabled type="text" name="city" placeholder="Enter your city" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">State</p>
                            <input disabled type="text" name="state" placeholder="Enter your state" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex  space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Pin Code</p>
                            <input disabled type="text" name="pin" placeholder="Enter the pin code" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Country</p>
                            <input disabled type="text" name="country" placeholder="Enter country name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Gender</p>
                            <div className="flex border-[1px] border-[#DBDADE] rounded-[5px] w-full">
                                <div 
                                    className={ActiveClass}
                                >Female</div>
                                <div className={InactiveClass}>Male</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Aadhar Card</p>
                            <input disabled type="file" name="address" placeholder="Attach file" className="border-[1px] text-[15px] text-[#4B465C90] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Pan Card</p>
                            <input disabled type="file" name="state" placeholder="Attach file" className="border-[1px] text-[15px] text-[#4B465C90] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Other Attachments</p>
                            <input disabled type="file" name="country" placeholder="Attach file" className="border-[1px] text-[15px] text-[#4B465C90] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                    </div>

                    <div className="flex justify-between space-x-3 mt-[10px]">
                    <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Category</p>
                            <div className='w-full relative flex justify-between items-center'>
                                <input type="text" placeholder="Add Category" className='border-[1px] border-[#DBDADE] text-[15px] text-[#4B465C90] rounded-[5px] w-full px-[10px] py-[3px]' />
                                <img className='w-[45px] cursor-pointer' src="/Images/AddCategoryIcon.png" alt="add" />
                            </div>
                            <div className='w-full grid grid-cols-2 max-h-[100px] overflow-y-scroll'>
                                {
                                    categoryList.map((category) => {
                                        return <CategoryCard>{category}</CategoryCard>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => setViewVendor(false)} className="cursor-pointer bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] text-[15px] font-medium">Back</div>
                </div>
            </form>
        </div>
    );
}

export default ViewVendor;