import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const ReportsTable = ({DataList, setViewReport}) => {

    //const [viewPayment, setViewPayment] = useState(false);
    //const [paymentDetails, setPaymentDetails] = useState({});
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
                    <th className="text-[#656565] text-[18px]">TRANSACTION ID</th>
                    <th className="text-[#656565] text-[18px]">BOOKING ID </th>
                    <th className="text-[#656565] text-[18px]">AMOUNT</th>
                    <th className="text-[#656565] text-[18px]">STATUS</th>
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
                    <th className="invisible">action</th>
                </tr>
            </tfoot>
            <tbody>
                {
                    DataList.map((data, index) => {
                    return (
                        <tr className="bg-white py-[10px] text-[18px] text-[#4B465C]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">{data.transactionId}</td>
                            <td className="bg-white">{data.bookingId}</td>
                            <td className="bg-white">{data.amount}</td>
                            <td className="bg-white">{
                                data.status === "credited" ? <div className="text-[#1BB55C] bg-[#1BB55C29] rounded-[3px] px-[3px] py-[3px] text-center">Credited</div> : <div className="text-[#EA5455] bg-[#EA545529] rounded-[3px] px-[3px] py-[3px] text-center">Debited</div>
                            }</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setViewReport(true)
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default ReportsTable;