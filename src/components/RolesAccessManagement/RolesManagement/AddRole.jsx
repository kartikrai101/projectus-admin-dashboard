import ReactDom from 'react-dom';

const AddRole = ({setAddRole}) => {
    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 z-1000 bg-[#D9D9D980]"></div>
            <div className='min-w-[600px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl'>
                <p className='text-[22px] text-[#4B465C] font-semibold'>Add New Role</p>
                <p className='text-[15px] text-[#4B465C] mt-[px]'>Set role permissions</p>

                <div className='w-full flex flex-col items-start'>
                    <p className='text-[#4B465C]'>Role ID</p>
                    <input type="number" disabled value = {234153} className="w-full px-[5px] h-[35px] text-[#4B465C] mt-[5px] border-[1px] border-[#DBDADE] rounded-[5px]" />
                </div>

                <div className='w-full mt-[10px]'>
                    <p className='text-[#4B465C]'>Role Name</p>
                    <input type="text" placeholder='Role Name' className="w-full mt-[5px] px-[5px] h-[35px] text-[#4B465C] border-[1px] border-[#DBDADE] rounded-[5px]" />
                </div>

                <div className='mt-[15px] flex justify-start w-full'>
                    <p className='text-[#4B465C] font-semibold'>Role Permissions</p>
                </div>

                <div className='w-full mt-[15px]'>
                    <div className='flex justify-between mb-[5px]'>
                        <div className='text-[#4B465C99] font-semibold'>Administrator Access</div>
                        <div className='flex items-center'>
                            <input id="all" type="checkbox" name="selectAll" />
                            <label htmlFor='all' className='ml-[7px] text-[#4B465C]'>Select All</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>User Management</div>
                        <div className='flex items-center'>
                            <input id="userView" type="checkbox" name="selectAll" />
                            <label htmlFor='userView' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="aluserEditl" type="checkbox" name="selectAll" />
                            <label htmlFor='userEdit' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="userManage" type="checkbox" name="selectAll" />
                            <label htmlFor='userManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>Vendor Verification</div>
                        <div className='flex items-center'>
                            <input id="vendorVerifyView" type="checkbox" name="selectAll" />
                            <label htmlFor='vendorVerifyView' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="vendorVerifyEdit" type="checkbox" name="selectAll" />
                            <label htmlFor='vendorVerifyEdit' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="vendorVerifyManage" type="checkbox" name="selectAll" />
                            <label htmlFor='vendorVerifyManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>Vendor Management</div>
                        <div className='flex items-center'>
                            <input id="vendorView" type="checkbox" name="selectAll" />
                            <label htmlFor='vendorView' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="vendorEdit" type="checkbox" name="selectAll" />
                            <label htmlFor='vendorEdit' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="vendorManage" type="checkbox" name="selectAll" />
                            <label htmlFor='vendorManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>Service Management</div>
                        <div className='flex items-center'>
                            <input id="serviceView" type="checkbox" name="selectAll" />
                            <label htmlFor='serviceView' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="alserviceEditl" type="checkbox" name="selectAll" />
                            <label htmlFor='serviceEdit' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="serviceManage" type="checkbox" name="selectAll" />
                            <label htmlFor='serviceManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>Hire a Vendor</div>
                        <div className='flex items-center'>
                            <input id="hireView" type="checkbox" name="selectAll" />
                            <label htmlFor='hireView' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="hireEdit" type="checkbox" name="selectAll" />
                            <label htmlFor='hireEdit' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="hireManage" type="checkbox" name="selectAll" />
                            <label htmlFor='hireManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>Booking Management</div>
                        <div className='flex items-center'>
                            <input id="abookingAddll" type="checkbox" name="selectAll" />
                            <label htmlFor='bookingAdd' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="bookingEdit" type="checkbox" name="selectAll" />
                            <label htmlFor='bookingEdit' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="bookingManage" type="checkbox" name="selectAll" />
                            <label htmlFor='bookingManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>
                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>Content Management</div>
                        <div className='flex items-center'>
                            <input id="contentView" type="checkbox" name="selectAll" />
                            <label htmlFor='contentView' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="contentEdit" type="checkbox" name="selectAll" />
                            <label htmlFor='contentEdit' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="contentManage" type="checkbox" name="selectAll" />
                            <label htmlFor='contentManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>Role/Access</div>
                        <div className='flex items-center'>
                            <input id="roleView" type="checkbox" name="selectAll" />
                            <label htmlFor='roleView' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="roleEdit" type="checkbox" name="selectAll" />
                            <label htmlFor='roleroleEditManage' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="roleManage" type="checkbox" name="selectAll" />
                            <label htmlFor='roleManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex justify-between mt-[10px]'>
                        <div className='text-[#4B465C99] font-semibold'>Payments Management</div>
                        <div className='flex items-center'>
                            <input id="paymentView" type="checkbox" name="selectAll" />
                            <label htmlFor='paymentView' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>View</label>

                            <input id="paymentEdit" type="checkbox" name="selectAll" />
                            <label htmlFor='paymentEdit' className='ml-[4px] mr-[20px] text-[#4B465C] cursor-pointer'>Edit</label>

                            <input id="paymentManage" type="checkbox" name="selectAll" />
                            <label htmlFor='paymentManage' className='ml-[4px] text-[#4B465C] cursor-pointer'>Manage</label>
                        </div>
                    </div>
                    <hr/>

                    <div className='flex items-center mt-[25px] space-x-5 justify-center'>
                        <button onClick={() => setAddRole(false)} className='bg-[#3C3836] text-white text-center w-[70px] py-[3px] rounded-[5px] font-medium'>Add</button>
                        <button onClick={() => setAddRole(false)} className='bg-[#3C3836] text-white text-center w-[70px] py-[3px] rounded-[5px] font-medium'>Cancel</button>
                    </div>
                </div>
            </div>
        </>, document.getElementById('portal')
    );
}

export default AddRole;