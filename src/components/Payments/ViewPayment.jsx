const ViewPayment = ({setViewPayment, paymentDetails, viewPayment}) => {
    return (
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[20px]">
                    <div className="flex justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input disabled type="text" name="name" value = {paymentDetails.name} className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">VendorName</p>
                            <input disabled type="email" name="email" value = {paymentDetails.vendorName}  className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Transaction ID</p>
                            <input disabled type="text" name="transaction" value = {paymentDetails.transactionId}  className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Service</p>
                            <input disabled type="text" value = {paymentDetails.service}  className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Sub Service</p>
                            <input disabled type="text" value = {paymentDetails.subService}  className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Amount</p>
                            <input disabled type="text" value = {paymentDetails.amount}  className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 w-[66%] mt-[10px]">
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">Date</p>
                            <input disabled type="text" value = {paymentDetails.date}  className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">Status</p>
                            <input disabled type="text" value = {paymentDetails.status}  className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {setViewPayment(false)}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer text-[15px] font-medium">Back</div>
                </div>
            </form>
        </div>
    );
}

export default ViewPayment;