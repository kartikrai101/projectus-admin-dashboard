import {useState, useEffect} from 'react';
import VendorVerificationTable from '../../Tables/VendorVerificationTable';
import DataList from '../../Database/VendorVerificationData';
import ViewVendor from './ViewVendor';

const VendorVerification = () => {

    const [addVendor, setAddVendor] = useState(false);
    const [viewVendor, setViewVendor] = useState({
        show: false,
        vendorId: -1,
    });
    const [vendorDetails, setVendorDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {addVendor ? <p><span className="text-[#4B465C90]">Vendor Verification</span> / Add </p> : (
                    viewVendor.show ? <p><span className="text-[#4B465C90]">Vendor Verification</span> / View </p> : (
                        <p className="text-[22px] text-[#4B465C] font-semibold">Vendor Verification</p>
                    )
                ) }

            </p>

            {
                    viewVendor.show ? (
                        <ViewVendor 
                            setViewVendor = {setViewVendor} 
                            vendorDetails = {vendorDetails} 
                            viewVendor = {viewVendor} 
                        />
                    ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[30px]">
                                <VendorVerificationTable 
                                    DataList={DataList} 
                                    setViewVendor = {setViewVendor} 
                                    setVendorDetails = {setVendorDetails}
                                />
                            </div>
                    )
                
            }
        </div>
    );
}

export default VendorVerification;