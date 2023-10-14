const ViewBooking = ({setViewBooking, bookingDetails}) => {
    return (
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[10px]">
                    <div className="flex mt-[15px] justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Booking Id</p>
                            <input disabled type="text" value={bookingDetails.id} name="id" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input disabled type="text" name="name" value={bookingDetails.name} className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Vendor Name</p> 
                            <input disabled type="text" name="vendor" value={bookingDetails.vendorName} className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>

                    <div className="flex mt-[15px] justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Street</p>
                            <input disabled type="text" value={bookingDetails.street} name="street" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">City</p>
                            <input disabled type="text" name="city" value={bookingDetails.city}  className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">State</p> 
                            <input disabled type="text" name="state" value={bookingDetails.state} className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>

                    <div className="flex mt-[15px] justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Pin Code</p>
                            <input disabled type="text" value={bookingDetails.pin} name="pin" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Country</p>
                            <input disabled type="text" name="country" value={bookingDetails.country}  className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Project</p> 
                            <input disabled type="text" name="project" value={bookingDetails.project}  className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>

                    <div className="flex mt-[15px] justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Service</p>
                            <input disabled type="text" value={bookingDetails.service} name="service" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Sub Service</p>
                            <input disabled type="text" name="subService" value={bookingDetails.subService}  className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Date</p> 
                            <input disabled type="text" name="date" value={bookingDetails.date}  className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>

                    <div className="flex mt-[15px] justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input disabled type="text" value={bookingDetails.mobile} name="mobile" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Time</p>
                            <input disabled type="text" name="time" value={bookingDetails.time}  className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Amount</p> 
                            <input disabled type="text" name="amount" value={bookingDetails.amount}  className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>

                    <div className="flex mt-[15px] justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Additional Document</p>
                            <input disabled type="file" name="document" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>

                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {setViewBooking(false)}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer text-[15px] font-medium">Back</div>
                </div>
            </form>
        </div>
    );
}

export default ViewBooking;