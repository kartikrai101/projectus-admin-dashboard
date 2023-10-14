import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const ServiceManagementTable = ({DataList, setViewService, setDeleteServiceName, setEditService, setServiceDetails, setDeleteService}) => {

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
                    <th className="text-[#656565] text-[18px]">ICON</th>
                    <th className="text-[#656565] text-[18px]">SERVICES </th>
                    <th className="text-[#656565] text-[18px]">RATING</th>
                    <th className="text-[#656565] text-[18px]">ACTION</th>
                </tr>
            </thead>
            <tfoot style={{display: "table-header-group"}}>
                <tr>
                    <th className="invisible">serial</th>
                    <th className="invisible">serial</th>
                    <th className="text-[#4B465C] custom-black-text">Search</th>
                    <th className="invisible">serial</th>
                    <th className="invisible">action</th>
                </tr>
            </tfoot>
            <tbody>
                {
                    DataList.map((data, index) => {
                    return (
                        <tr className="bg-white py-[10px] text-[18px] text-[#4B465C]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">
                                <img src={data.icon} alt="icon" className="w-[30px]" />
                            </td>
                            <td className="bg-white">{data.service}</td>
                            <td className="bg-white">
                                <img src="/Images/RatingIcon.png" className="w-[100px]" alt="rating" />
                            </td>
                            <td className="bg-white flex items-center space-x-4">
                                <img onClick={() => {
                                    setViewService(true)
                                    setServiceDetails({
                                        name: data.name,
                                        mobile: data.mobile,
                                        email: data.email,
                                    })
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => {
                                    setEditService(true)
                                    setServiceDetails({
                                        name: data.name,
                                        mobile: data.mobile,
                                        email: data.email,
                                    })
                                }} src="/Images/EditIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick = {() => {
                                    setDeleteService(true)
                                    setDeleteServiceName(data.service)
                                }} src="/Images/DeleteIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default ServiceManagementTable;