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

import { Doughnut, Pie,  Line} from 'react-chartjs-2';
import ReportsTable from '../../Tables/ReportsTable';
import DataList from '../../Database/ReportsTableData';
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

const GeneralReports = () => {

    const data = {
        labels: ['Closed', 'Rescheduled', 'Pending'],
        datasets: [{
          label: 'Bookings',
          data: [22, 28, 50],
          backgroundColor: ['#F8F7FA', '#E57E38', '#2A4F6D'],
          borderColor: ['#F8F7FA', '#E57E38', '#2A4F6D'],
          borderWidth: 1,
        }]
    }
    const options = {
        cutout: 95,
        plugins: {
            legend:{
                align: 'center',
                reverse: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    boxHeight: 6,
                    boxWidth: 6
                }
            }
        }
    };


    const vendorData = [300, 432, 211, 90, 540, 200, 800]
    const dataLine1 = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Total Vendors',
            data: vendorData,
            backgroundColor: '#28C76F',
            borderColor: '#28C76F',
            pointBorderColor: '#28C76F',
        }]
    }

    let totalVendors = 0;

    vendorData.map((data, index) => {
        totalVendors = totalVendors + data;
    })

    const optionsLine1 = {
        plugins: {
            legend:{
                display: false
            }
        }
    }

    const userData = [300, 432, 211, 90, 540, 200, 800]
    const dataLine2 = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Total Users',
            data: userData,
            backgroundColor: '#28C76F',
            borderColor: '#28C76F',
            pointBorderColor: '#28C76F',
        }]
    }

    const optionsLine2 = {
        plugins: {
            legend:{
                display: false
            }
        }
    }

    let totalUsers = 0;

    userData.map((data, index) => {
        totalUsers = totalUsers + data;
    })

    const pieData = {
        labels: ['Architecture', 'Vastu Consultant', 'Interior Designer', 'Legal Consultant', 'Financial Consultant', 'General Consultant', 'Civil Supervisor', 'Civil Engineer'],
        datasets: [
            {
                data: [17.31, 17.04, 15.76, 14.44, 14.00, 9.40, 7.74, 4.31],
                backgroundColor: ['#FF6B00', '#EB973E', '#F6D2BA', '#FF6B00A6', '#FEB580', '#E25100', '#A94700', '#E8587D']
            }
        ]
    }

    const pieOptions = {
        plugins: {
            legend:{
                align: 'center',
                reverse: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    boxHeight: 6,
                    boxWidth: 6
                }
            }
        }
    }


    const [viewReport, setViewReport] = useState(false);    
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [activeDropdownUser, setActiveDropdownUser] = useState(false);

    return (
        <>  
        <div className="flex flex-col">
            <div className="px-[30px] py-[30px]">
                <p className="text-[#4B465C] font-semibold text-[20px]">Reports</p>
                <div className="flex items-start justify-between w-full mt-[10px]">
                    <div className='relative space-y-3 custom-shadow p-[10px] rounded-[5px] w-[33%]'>
                        <p className="text-[18px] text-[#4B465C] font-semibold">Total Bookings</p>
                        <Doughnut 
                            data = {data}
                            options = {options}
                        ></Doughnut>
                        <div className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-[#4B465C] flex flex-col items-center justify-center space-x-1'>
                            <p className='font-semibold'>Total Bookings</p>
                            <p className=''>1860</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-between space-y-2 w-[33%]  h-full'>
                        <div className='relative h-full custom-shadow p-[10px]'>
                            <div className='mt-[80px]'>
                                <Line
                                    data = {dataLine1}
                                    options = {optionsLine1}
                                ></Line>
                            </div>
                            <div className='absolute top-[10px] px-[10px] w-full flex justify-center space-x-12 items-center'>
                                <div className='flex flex-col items-start'>
                                    <p className='text-[24px] font-semibold text-[#4B465C]'>{totalVendors}</p>
                                    <div className='flex items-center space-x-2 relative'>
                                        <p className='text-[#4B465C80] text-[14px]'>Weekly</p> 
                                        <img onClick = {() => setActiveDropdown(!activeDropdown)} src="/Images/chevron-down.png" className='w-[15px] cursor-pointer' />
                                        {
                                            activeDropdown ? (
                                                <div className='flex absolute top-[25px] mb flex-col border-[1px] custom-shadow rounded-[3px] w-[100px] bg-white'>
                                                    <p className='px-[3px] py-[4px] text-center border-b-[1px] border-b-[#A5A2AD] text-[#A5A2AD] text-[14px]'>Daily</p>
                                                    <p className='px-[3px] py-[4px] text-center border-b-[1px] border-b-[#A5A2AD] text-[#A5A2AD] text-[14px]'>Weekly</p>
                                                    <p className='px-[3px] py-[4px] text-center border-b-[1px] border-b-[#A5A2AD] text-[#A5A2AD] text-[14px]'>Monthly</p>
                                                    <p className='px-[3px] py-[4px] text-center  text-[#A5A2AD] text-[14px]'>Yearly</p>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <p className='text-[18px] font-semibold text-[#4B465C]'>Total Vendors</p>
                                    <p className='text-[14px] text-[#4B465C]'>Total {totalVendors} Vendors</p>
                                    <div className='rounded-[5px] bg-[#DBF4E6] px-[7px] py-[2px] flex justify-between items-center'><p className='text-[13px] text-[#28C76F]'>+12.2%</p></div>
                                </div>
                            </div>
                        </div>
                        <div className='relative h-full p-[10px] custom-shadow'>
                            <div className='mt-[80px]'>
                                <Line
                                    data = {dataLine2}
                                    options = {optionsLine2}
                                ></Line>
                            </div>
                            <div className='absolute top-[10px] px-[10px] w-full flex justify-center space-x-12 items-center'>
                                <div className='flex flex-col items-start'>
                                    <p className='text-[24px] font-semibold text-[#4B465C]'>{totalUsers}</p>
                                    <div className='flex items-center space-x-2 relative'>
                                        <p className='text-[#4B465C80] text-[14px]'>Weekly</p> 
                                        <img onClick = {() => setActiveDropdownUser(!activeDropdownUser)} src="/Images/chevron-down.png" className='w-[15px] cursor-pointer' />
                                        {
                                            activeDropdownUser ? (
                                                <div className='flex absolute top-[25px] mb flex-col border-[1px] custom-shadow rounded-[3px] w-[100px] bg-white'>
                                                    <p className='px-[3px] py-[4px] text-center border-b-[1px] border-b-[#A5A2AD] text-[#A5A2AD] text-[14px]'>Daily</p>
                                                    <p className='px-[3px] py-[4px] text-center border-b-[1px] border-b-[#A5A2AD] text-[#A5A2AD] text-[14px]'>Weekly</p>
                                                    <p className='px-[3px] py-[4px] text-center border-b-[1px] border-b-[#A5A2AD] text-[#A5A2AD] text-[14px]'>Monthly</p>
                                                    <p className='px-[3px] py-[4px] text-center  text-[#A5A2AD] text-[14px]'>Yearly</p>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <p className='text-[18px] font-semibold text-[#4B465C]'>Total Users</p>
                                    <p className='text-[14px] text-[#4B465C]'>Total {totalUsers} Users</p>
                                    <div className='rounded-[5px] bg-[#DBF4E6] px-[7px] py-[2px] flex justify-between items-center'><p className='text-[13px] text-[#28C76F]'>+12.2%</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[33%] custom-shadow p-[10px] h-full '>
                        <p className='text-[18px] text-[#4B465C] font-semibold'>Service Usage</p>
                        <Pie 
                            data={pieData}
                            options = {pieOptions}
                        >
                        </Pie>
                    </div>
                </div>
            </div>
            <div className="px-[30px] pb-[30px]">
                <ReportsTable DataList={DataList} setViewReport={setViewReport}   />
            </div>
        </div>
        </>
    );
}

export default GeneralReports;