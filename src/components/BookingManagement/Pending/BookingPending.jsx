import DataList from '../../Database/BookingData';
import {useState, useEffect} from 'react';
import ViewBooking from './ViewBooking';
import DeleteBookingModal from './DeleteBookingModal';
import DeletedBookingModal from './DeletedBookingModal';
import BookingManagementTable from '../../Tables/BookingManagementTable';

const BookingPending = (props) => {

    const [viewBooking, setViewBooking] = useState(false);
    const [deleteBooking, setDeleteBooking] = useState(false);

    const [deleteBookingId, setDeleteBookingId] = useState("");
    const [bookingDeleted, setBookingDeleted] = useState(false);

    const [bookingDetails, setBookingDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {
                    viewBooking ? <p><span className="text-[#4B465C90]">Bookings / Pending</span> / View </p> : (
                        <p className="text-[22px] text-[#4B465C] font-semibold"><span className="text-[#4B465C90]">Bookings</span> / Pending</p>
                    )
                }

            </p> 

            {
                viewBooking ? (
                    <ViewBooking setViewBooking = {setViewBooking} bookingDetails = {bookingDetails} />
                ) : (
                    <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                        <BookingManagementTable 
                            DataList={DataList} 
                            setViewBooking = {setViewBooking} 
                            setBookingDetails = {setBookingDetails}
                            setDeleteBooking = {setDeleteBooking}
                            setDeleteBookingId = {setDeleteBookingId}
                        />
                    </div>
                )
            }

            {
                deleteBooking ? (
                    <DeleteBookingModal deleteBookingId = {deleteBookingId} setDeleteBooking = {setDeleteBooking} setBookingDeleted = {setBookingDeleted}  />
                ) :null
            }
            {
                bookingDeleted ? (
                    <DeletedBookingModal deleteBookingId = {deleteBookingId} setDeleteBooking = {setDeleteBooking} setBookingDeleted = {setBookingDeleted} />
                ) : null
            }

        </div>
    );
}

export default BookingPending;