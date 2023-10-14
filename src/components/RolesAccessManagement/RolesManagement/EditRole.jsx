const EditRole = ({setEditRole, roleDetails}) => {
    return (
        <div className="w-full">
            <div className="w-full flex justify-between space-x-4">
                <div className="w-[33%]">
                    <p className="text-[#4B465C]">Role ID</p>
                    <input type="text" defaultValue={roleDetails.roleId} className="rounded-[5px] text-[#4B465C] border-[1px] px-[10px] h-[36px] border-[#DBDADE] w-full" />
                </div>
                <div className="w-[33%]">
                    <p className="text-[#4B465C]">Role Name</p>
                    <input type="text" defaultValue={roleDetails.roleName} className="rounded-[5px] text-[#4B465C] border-[1px] px-[10px] h-[36px] border-[#DBDADE] w-full" />
                </div>
                <div className="w-[33%]">
                    <p className="text-[#4B465C]">Total Permissions</p>
                    <input type="number" defaultValue={roleDetails.totalPermissions} className="rounded-[5px] text-[#4B465C] px-[10px] h-[36px] border-[1px] border-[#DBDADE] w-full" />
                </div>
            </div>

            <div className="w-1/2 mt-[30px]">
                <p className="text-[20px] text-[#4B465C] font-semibold">Role Permissions</p>
                <div className="w-full">
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

                        {/* <div className='flex items-center mt-[25px] space-x-5 justify-center'>
                            <button onClick={() => setAddRole(false)} className='bg-[#3C3836] text-white text-center w-[70px] py-[3px] rounded-[5px]'>Add</button>
                            <button onClick={() => setAddRole(false)} className='bg-[#3C3836] text-white text-center w-[70px] py-[3px] rounded-[5px]'>Cancel</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-[25px] space-x-5 justify-center'>
                <button onClick={() => setEditRole(false)} className='bg-[#3C3836] text-white text-center w-[80px] py-[3px] rounded-[5px] text-[15px] font-medium'>Save</button>
                <button onClick={() => setEditRole(false)} className='bg-[#A8AAAE29] text-[#3C3836] text-center w-[80px] py-[3px] rounded-[5px] font-medium'>Cancel</button>
            </div>
        </div>
    );
}

export default EditRole;