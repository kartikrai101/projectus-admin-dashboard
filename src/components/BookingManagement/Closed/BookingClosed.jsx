import DataList from '../../Database/BookingData';
import {useState, useEffect} from 'react';
import ViewBooking from './ViewBooking';
import BookingClosedTable from '../../Tables/BookingClosedTable';

const BookingClosed = (props) => {

    const [viewBooking, setViewBooking] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {
                    viewBooking ? <p><span className="text-[#4B465C90]">Bookings / Closed</span> / View </p> : (
                        <p className="text-[22px] text-[#4B465C] font-semibold"><span className="text-[#4B465C90]">Bookings</span> / Closed</p>
                    )
                }

            </p> 

            {
                viewBooking ? (
                    <ViewBooking setViewBooking = {setViewBooking} bookingDetails = {bookingDetails} />
                ) : (
                    <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                        <BookingClosedTable 
                            DataList={DataList} 
                            setViewBooking = {setViewBooking} 
                            setBookingDetails = {setBookingDetails}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default BookingClosed;