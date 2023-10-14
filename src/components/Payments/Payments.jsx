import DataList from "../Database/PaymentsData";
import {useState, useEffect} from 'react';
import ViewPayment from './ViewPayment';
import PaymentsTable from "../Tables/PaymentsTable";

const activeClass = "bg-[#DC7A39] rounded-[20px] w-[40px] h-[23px] flex p-[4px] justify-end cursor-pointer";
const inactiveClass = "bg-[#DC7A39] rounded-[20px] w-[40px] h-[23px] flex p-[4px] justify-start cursor-pointer";

const activeText = "text-[#DC7A39] text-[14px]";
const inactiveText = "text-[14px] text-[#000000]";


const Payments = (props) => {

    const [viewPayment, setViewPayment] = useState(false);

    const [paymentDetails, setPaymentDetails] = useState({});

    const [withdrawalActive, setWithdrawalActive] = useState(false);

    return (
        <div className="relative px-[30px] py-[30px]">
            <div className="flex justify-between">
                <p className="text-[22px] text-[#4B465C] font-semibold">
                    {
                        viewPayment ? <p><span className="text-[#4B465C90]">Payments</span> / View </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold">Payments</p>    
                        )
                    }
                </p>
                <div className="flex justify-center space-x-2 items-center mt-[30px]">
                    <p className={withdrawalActive ? inactiveText : activeText}>Withdrawal off</p>
                    <div onClick = {() => setWithdrawalActive(!withdrawalActive)} className={withdrawalActive ? activeClass : inactiveClass}>
                        <div className="rounded-[50%] bg-white w-[15px]"></div>
                    </div>
                    <p className={withdrawalActive ? activeText : inactiveText}>Withdrawal on</p>
                </div>
            </div>

            {
                    viewPayment ? (
                        <ViewPayment setViewPayment = {setViewPayment} paymentDetails = {paymentDetails} />
                    ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[30px]">
                                <PaymentsTable 
                                    DataList={DataList} 
                                    setViewPayment = {setViewPayment} 
                                    setPaymentDetails = {setPaymentDetails}
                                />
                            </div>
                    )
            }
        </div>
    );
}

export default Payments;