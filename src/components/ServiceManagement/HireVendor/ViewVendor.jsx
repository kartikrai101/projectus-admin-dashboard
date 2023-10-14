const ViewVendor = ({setViewVendor, vendorDetails}) => {
    return (
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[30px]">
                    <div className="flex justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input disabled value={vendorDetails.name} type="text" name="name" placeholder="Enter your name" className="border-[1px] border-[#DBDADE] text-[15px] text-[#4B465C90] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input disabled value={vendorDetails.mobile} type="number" name="mobile" placeholder="Enter your mobile number" className="text-[15px] text-[#4B465C90] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">City</p> 
                            <input disabled value={vendorDetails.city} type="text" name="city" placeholder="Enter your city" className="text-[15px] text-[#4B465C90] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Designation</p> 
                            <select disabled value={vendorDetails.designation} required name="designation" className='text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]'>
                                <option name="architect" className='text-[15px] text-[#4B465C90]'>Architect</option>
                                <option name="architect" className='text-[15px] text-[#4B465C90]'>General Advisor</option>
                                <option name="architect" className='text-[15px] text-[#4B465C90]'>Financial Advisor</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {setViewVendor(false)}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer text-[15px] font-medium">Back</div>
                </div>
            </form>
        </div>
    );
}

export default ViewVendor;