import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const UserManagementTable = ({DataList, setViewUser, setEditUser, setBlockUser, setBlockUserName, setUserDetails, setBlockUserId, setUnblockUser, setUnblockUserName, setUnblockUserId}) => {

    const [openOptions, setOpenOptions] = useState(-1);
    const [open, setOpen] = useState(false);

    function optionsHandler(index){
        if(open == true){
            setOpenOptions(-1);
            setOpen(false);
        }else{
            setOpenOptions(index);
            setOpen(true);
        }
    }

    useEffect(() => {
        // let table = new DataTable('#myTable', {
        //     retrieve: true,
        // });

        let table = new DataTable('#myTable', {
            retrieve: true,
            initComplete: function () {
                this.api()
                    .columns()
                    .every(function () {
                        let column = this;
                        let title = column.footer().textContent;
                        if(title === "action" || title === "serial"){
                            return null;
                        }
         
                        // Create input element
                        let input = document.createElement('input');
                        input.placeholder = title;
                        column.footer().replaceChildren(input);
         
                        // Event listener for user input
                        input.addEventListener('keyup', () => {
                            if (column.search() !== this.value) {
                                column.search(input.value).draw();
                            }
                        });
                    });
            }
        });
    }, []);


    return (
        <table id="myTable" class="display custom-class">
            <thead>
                <tr>
                    <th className="text-[#656565] text-[18px]">S.NO.</th>
                    <th className="text-[#656565] text-[18px]">FULL NAME</th>
                    <th className="text-[#656565] text-[18px]">MOBILE </th>
                    <th className="text-[#656565] text-[18px]">EMAIL</th>
                    <th className="text-[#656565] text-[18px]">REGISTER DATE</th>
                    <th className="text-[#656565] text-[18px]">ACTION</th>
                </tr>
            </thead>
            <tfoot style={{display: "table-header-group"}}>
                <tr className="text-[18px]">
                    <th className="invisible">serial</th>
                    <th className="text-[#4B465C] custom-black-text">Search</th>
                    <th className="text-[#4B465C] custom-black-text">Search</th>
                    <th className="text-[#4B465C] custom-black-text">Search</th>
                    <th className="text-[#4B465C] custom-black-text">Search</th>
                    <th className="invisible">action</th>
                </tr>
            </tfoot>
            <tbody>
                {
                    DataList.map((data, index) => {
                    return (
                        <tr className="bg-white py-[10px] text-[#4B465C] text-[18px]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">{data.name}</td>
                            <td className="bg-white">{data.mobile}</td>
                            <td className="bg-white">{data.email}</td>
                            <td className="bg-white">{data.date}</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setViewUser(true)
                                    setUserDetails({
                                        name: data.name,
                                        mobile: data.mobile,
                                        email: data.email,
                                    })
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => {
                                    setEditUser(true)
                                    setUserDetails({
                                        name: data.name,
                                        mobile: data.mobile,
                                        email: data.email,
                                    })
                                }} src="/Images/EditIcon.png" alt="icon" className="w-[20px]" />
                                {
                                    !data.blocked ? 
                                        <img onClick={() => {
                                            setBlockUser(true)
                                            setBlockUserName(data.name)
                                            setBlockUserId(index)
                                        }} src="/Images/RemoveIcon.png" alt="icon" className="w-[20px] cursor-pointer" /> : (
                                            <img src="/Images/UnblockIcon.png" alt="images" className="w-[20px] cursor-pointer"
                                                onClick = {() => {
                                                    setUnblockUser(true)
                                                    setUnblockUserName(data.name)
                                                    setUnblockUserId(index)
                                                }}
                                            />
                                        )
                                }
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default UserManagementTable;