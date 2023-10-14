const View = ({details, setView}) => {
    return (
        <div className=" mt-[20px]">
            <form>
                <div className="w-full flex flex-col items-start">
                    <p className="text-[14px] text-[#4B465C]">Add Photo</p>
                    <img src="/Images/ProfilePicture.png" alt="profile" className="w-[70px]" />
                </div>
                <div className="mt-[20px]">
                    <div className="flex justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input disabled type="text" value={details.name} name="name" placeholder="Enter your name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Email</p>
                            <input disabled type="email" value={details.email} name="email" placeholder="Enter your email" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input disabled type="text" value={details.mobile} name="mobile" placeholder="Enter your contact" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px] w-[67%]">
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">Assigned Role</p>
                            <input disabled type="text" value={details.assignedRole} name="role" placeholder="Select your assigned role" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">City</p>
                            <input disabled type="text" value={details.city} name="city" placeholder="Enter your city" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px] space-x-5">
                    <div onClick={() => setView(false)} className="bg-[#3C3836] text-white text-center cursor-pointer rounded-[5px] px-[20px] py-[5px] text-[15px] font-medium">Back</div>
                </div>
            </form>
        </div>
    );
}

export default View;