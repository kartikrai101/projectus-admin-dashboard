import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const FinancialReportsTable = ({DataList}) => {

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
                    <th className="text-[#656565] text-[18px]">VENDOR NAME</th>
                    <th className="text-[#656565] text-[18px]">SERVICE AMOUNT</th>
                    <th className="text-[#656565] text-[18px]">DATE</th>
                    <th className="text-[#656565] text-[18px]">STATUS</th>
                    <th className="text-[#656565] text-[18px]">NO. OF CUSTOMER CASES</th>
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
                </tr>
            </tfoot>
            <tbody>
                {
                    DataList.map((data, index) => {
                    return (
                        <tr className="bg-white py-[10px] text-[18px] text-[#4B465C]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">{data.vendorName}</td>
                            <td className="bg-white">{data.serviceAmount}</td>
                            <td className="bg-white">{data.date}</td>
                            <td className="bg-white">{
                                data.status === "paid" ? <div className="text-[#1BB55C] bg-[#1BB55C29] rounded-[3px] px-[3px] py-[3px] text-center">Paid</div> : <div className="text-[#EA5455] bg-[#EA545529] rounded-[3px] px-[3px] py-[3px] text-center">Unpaid</div>
                            }</td>
                            <td className="bg-white">{data.cases}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default FinancialReportsTable;