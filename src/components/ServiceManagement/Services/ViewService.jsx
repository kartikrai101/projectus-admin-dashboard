const ViewService = ({setViewService, serviceDetails}) => {
    return (
        <div className=" mt-[20px]">
            <form>
                <div className="w-full flex justify-start">
                    <p className="text-[22px] text-[#4B465C] font-semibold">Service</p>
                </div>
                <div className="mt-[10px]">
                    <div className="flex justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input disabled type="text" value={serviceDetails.name} name="name" placeholder="Enter your name" className="text-[15px] text-[#4B465C90] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Icon</p>
                            <input disabled type="file" name="icon" value={serviceDetails.icon} placeholder="Attach file" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Image</p> 
                            <input disabled type="file" name="image" value={serviceDetails.image} placeholder="Attach file" className="text-[15px] text-[#4B465C90] text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Description</p>
                            <textarea disabled name="description" value={serviceDetails.description} placeholder="Add description" className="text-[15px] text-[#4B465C90] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] min-h-[150px]"></textarea>
                        </div>
                    </div>
                    <div className='flex justify-start mt-[30px]'>
                        <p className='text-[22px] text-[#4B465C]'>Sub Service</p>
                    </div>
                    <div className="flex  space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Chat</p>
                            <input disabled type="number" value="1200.00" name="chat" placeholder="Enter Amount in Rupees" className="text-[15px] text-[#4B465C90] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Call</p>
                            <input disabled  type="number" value="1300.00" name="call" placeholder="Enter Amount in Rupees" className="text-[15px] text-[#4B465C90] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Video Call</p>
                            <input disabled  type="number" value="1500.00" name="video" placeholder="Enter Amount in Rupees" className="text-[15px] text-[#4B465C90] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                    </div>

                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Visit</p>
                            <input disabled type="number" value="3500.00" name="visit" placeholder="Enter Amount in Rupees" className="text-[15px] text-[#4B465C90] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {setViewService(false)}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer text-[15px] font-medium">Back</div>
                </div>
            </form>
        </div>
    );
}

export default ViewService;