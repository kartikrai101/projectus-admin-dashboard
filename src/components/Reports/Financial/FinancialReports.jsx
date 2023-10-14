import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale, //x-axis
    LinearScale, // y-axis
    PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import DataList from '../../Database/FinancialData';
import FinancialReportsTable from '../../Tables/FinancialReportsTable';
import {useState, useEffect} from 'react';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale
);

const FinancialReports = (props) => {

    const revenueData = [300, 432, 211, 90, 540, 200, 800]
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Total Vendors',
            data: revenueData,
            backgroundColor: '#28C76F',
            borderColor: '#28C76F',
            pointBorderColor: '#28C76F',
        }]
    }

    let totalRevenue = 0;

    revenueData.map((data, index) => {
        totalRevenue = totalRevenue + data;
    })

    const options = {
        plugins: {
            legend:{
                display: false
            }
        }
    }

    const [activeDropdown, setActiveDropdown] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="px-[30px] py-[30px]">
                <p className="text-[#4B465C] font-semibold text-[20px]">Reports</p>
                <div className="flex items-center justify-between w-full mt-[10px] space-x-3">
                    <div className="custom-shadow rounded-[5px] relative p-[10px]">
                        <div className='mt-[120px]'>
                            <Line 
                                data = {data}
                                options = {options}
                            ></Line>
                        </div>
                        <div className='absolute flex flex-col items-start top-[10px]'>
                            <p className='text-[#4B465C] text-[24px] font-semibold'>Total Revenue</p>
                            <p className='text-[#4B465C80] text-[18px]'>₹ 1,23,122</p>
                            <img src="/Images/TotalRevenueIcon.png" className='w-[25px] mt-[10px]' />
                        </div>
                    </div>
                    <div className="custom-shadow space-y-2 flex flex-col items-start justify-between p-[10px] w-full">
                        <div className='flex flex-col items-start text-[#4B465C]'>
                            <p className='text-[24px] font-semibold'>Bookings</p>
                            <div className='relative'>
                                <div onClick={() => setActiveDropdown(!activeDropdown)} className='flex items-center cursor-pointer justify-center space-x-5 cursor-pointer'>
                                    <p className='text-[14px]'>Weekly Earnings Overview</p> 
                                    <img src="/Images/chevron-down.png" className='w-[20px]' />
                                </div>
                                {
                                    activeDropdown ? (
                                        <div className='bg-white rounded-[3px] custom-shadow absolute w-[210px] top-[25px]'>
                                        <p className='text-center text-[#4B465C] border-b-[1px] border-b-[#4B465C] py-[3px]'>Daily</p>
                                        <p className='text-center text-[#4B465C] border-b-[1px] border-b-[#4B465C] py-[3px]'>Weekly</p>
                                        <p className='text-center text-[#4B465C] border-b-[1px] border-b-[#4B465C] py-[3px]'>Monthly</p>
                                        <p className='text-center text-[#4B465C] py-[3px]'>Yearly</p>
                                    </div>
                                    ) : null
                                }
                            </div>
                        </div>
                        <div className='flex w-full flex-col items-start text-[#4B465C]'>
                            <div className='flex w-full justify-start items-end space-x-2'>
                                <p className='text-[45px] font-semibold'>468</p> 
                                <div className='bg-[#28C76F29] rounded-[3px] flex justify-center items-center px-[8px] h-[30px] mb-[10px]'>
                                    <p className='text-[#28C76F] text-center text-[16px] font-semibold'>+4.2%</p>
                                </div>
                            </div>
                            <p className='text-[15px] text-[#4B465C] w-[200px]'>You informed of this week compared to last week</p>
                        </div>
                        <div className='p-[10px] border-[1px] border-[#DBDADE] w-full flex justify-between items-center rounded-[7px]'>
                            <div className='flex flex-col items-start w-[33%]'>
                                <p className='text-[30px] text-[#4B465C] font-semibold'>256</p>
                                <div className='flex items-center justify-center space-x-2'>
                                    <img src="/Images/PendingIcon.png" className='w-[20px]' />
                                    <p className='text-[18px] text-[#4B465C] font-semibold'>Pending</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start w-[33%]'>
                                <p className='text-[30px] text-[#4B465C] font-semibold'>256</p>
                                <div className='flex items-center justify-center space-x-2'>
                                    <img src="/Images/ClosedIcon.png" className='w-[20px]' />
                                    <p className='text-[18px] text-[#4B465C] font-semibold'>Closed</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start w-[33%]'>
                                <p className='text-[30px] text-[#4B465C] font-semibold'>256</p>
                                <div className='flex items-center justify-center space-x-2'>
                                    <img src="/Images/RescheduledIcon.png" className='w-[20px]' />
                                    <p className='text-[18px] text-[#4B465C] font-semibold'>Reschedules</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[30px]'>
                <FinancialReportsTable DataList={DataList} />
            </div>
        </div>
    );
}

export default FinancialReports;