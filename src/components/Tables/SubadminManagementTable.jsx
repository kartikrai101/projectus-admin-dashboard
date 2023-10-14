import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const SubadminManagementTable = ({DataList, setView, setEdit, setDeleteSubadmin, setDeleteName, setDetails}) =>{

    function EditDetailsHandler(data){
        setDetails(data)
        setEdit(true)
    }

    useEffect(() => {
        let table = new DataTable('#myTable', {
            retrieve: true,
            // orderCellsTop: true,
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
                    <th className="text-[#656565] text-[18px]">EMAIL </th>
                    <th className="text-[#656565] text-[18px]">MOBILE</th>
                    <th className="text-[#656565] text-[18px]">ASSIGNED ROLE</th>
                    <th className="text-[#656565] text-[18px]">USERS ASSIGNED</th>
                    <th className="text-[#656565] text-[18px]">ACTION</th>
                </tr>
            </thead>
            <tfoot style={{display: "table-header-group"}}>
                <tr>
                    <th className="invisible">serial</th>
                    <th className="text-[#4B465C] custom-black-text">Search</th>
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
                        <tr className="bg-white py-[10px] text-[18px] text-[#4B465C]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">{data.name}</td>
                            <td className="bg-white">{data.email}</td>
                            <td className="bg-white">{data.mobile}</td>
                            <td className="bg-white">{data.assignedRole}</td>
                            <td className="bg-white">{data.usersAssigned}</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setView(true)
                                    setDetails(data)
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => EditDetailsHandler(data)} src="/Images/EditIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => {
                                    setDeleteSubadmin(true)
                                    setDeleteName(data.name)
                                }} src="/Images/DeleteIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default SubadminManagementTable;