import DataList from "../../Database/HireVendorData";
import AddVendor from "./AddVendor";
import EditVendor from './EditVendor';
import ViewVendor from './ViewVendor';
import DeleteVendorModal from './DeleteVendorModal';
import DeletedVendorModal from "./DeletedVendorModal";
import {useState, useEffect} from 'react';
import VendorManagementTable from '../../Tables/HireVendorTable';

const HireVendor = ({}) => {

    const [addVendor, setAddVendor] = useState(false);
    const [viewVendor, setViewVendor] = useState(false);
    const [editVendor, setEditVendor] = useState(false);
    const [deleteVendor, setDeleteVendor] = useState(false);

    const [deleteVendorName, setDeleteVendorName] = useState("");
    const [vendorDeleted, setVendorDeleted] = useState(false);

    const [vendorDetails, setVendorDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {addVendor ? <p><span className="text-[#4B465C90]">Service Management / Hire Vendor</span> / Add </p> : (
                    viewVendor ? <p><span className="text-[#4B465C90]">Service Management / Hire Vendor</span> / View </p> : (
                        editVendor ? <p><span className="text-[#4B465C90]">Service Management / Hire Vendor</span> / Edit </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold">Service Management / Hire Vendor</p>
                        )
                    )
                ) }

            </p>
            {
                !addVendor ? (
                    <div className="w-full flex justify-end">
                        <button onClick = {() => setAddVendor(true)} className="px-[8px] py-[2px] text-center text-[16px] text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px] cursor-pointer font-medium">+  Add Vendor</button>
                    </div>
                ) : null
            }   

            {
                addVendor ? (
                    <AddVendor setAddVendor = {setAddVendor} />  
                ) : (
                    viewVendor ? (
                        <ViewVendor setViewVendor = {setViewVendor} vendorDetails = {vendorDetails} />
                    ) : (
                        editVendor ? (
                            <EditVendor setEditVendor= {setEditVendor} vendorDetails = {vendorDetails} />
                        ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                                <VendorManagementTable 
                                    DataList={DataList} 
                                    setViewVendor = {setViewVendor} 
                                    setEditVendor = {setEditVendor}
                                    setVendorDetails = {setVendorDetails}
                                    setDeleteVendor = {setDeleteVendor}
                                    setDeleteVendorName = {setDeleteVendorName}
                                />
                            </div>
                        )
                    )
                )
            }

            {
                deleteVendor ? (
                    <DeleteVendorModal deleteVendorName = {deleteVendorName} setDeleteVendor = {setDeleteVendor} setVendorDeleted = {setVendorDeleted}  />
                ) :null
            }
            {
                vendorDeleted ? (
                    <DeletedVendorModal deleteVendorName = {deleteVendorName} setDeleteVendor = {setDeleteVendor} setVendorDeleted = {setVendorDeleted} />
                ) : null
            }

        </div>
    );
}

export default HireVendor;