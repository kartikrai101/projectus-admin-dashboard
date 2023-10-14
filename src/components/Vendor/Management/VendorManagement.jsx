import VendorManagementTable from "../../Tables/VendorManagementTable";
import {useState, useEffect} from 'react';
import DataList from '../../Database/VendorManagementData';
import AddVendor from "./AddVendor";
import ViewVendor from "./ViewVendor";
import EditVendor from "./EditVendor";
import BlockVendorModal from './BlockVendorModal';
import UnblockVendorModal from "./UnblockVendorModal";
import BlockedVendorModal from './BlockedVendorModal';
import UnblockedVendorModal from "./UnblockedVendorModal";

const VendorManagement = (props) => {

    const [addVendor, setAddVendor] = useState(false);
    const [viewVendor, setViewVendor] = useState(false);
    const [editVendor, setEditVendor] = useState(false);
    const [blockVendor, setBlockVendor] = useState(false);
    const [unblockVendor, setUnblockVendor] = useState(false);
    const [unblockVendorName, setUnblockVendorName] = useState(false);
    const [blockVendorId, setBlockVendorId] = useState(-1);
    const [unblockVendorId, setUnblockVendorId] = useState(-1);

    const [blockVendorName, setBlockVendorName] = useState("");
    const [vendorBlocked, setVendorBlocked] = useState(false);
    const [vendorUnblocked, setVendorUnblocked] = useState(false);

    const [vendorDetails, setVendorDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {addVendor ? <p><span className="text-[#4B465C90]">Vendor Management</span> / Add </p> : (
                    viewVendor ? <p><span className="text-[#4B465C90]">Vendor Management</span> / View </p> : (
                        editVendor ? <p><span className="text-[#4B465C90]">Vendor Management</span> / Edit </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold">Vendor Management</p>
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
                            <EditVendor setEditVendor = {setEditVendor} vendorDetails = {vendorDetails} />
                        ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                                <VendorManagementTable 
                                    DataList={DataList} 
                                    setViewVendor = {setViewVendor} 
                                    setEditVendor = {setEditVendor}
                                    setBlockVendor = {setBlockVendor}
                                    setBlockVendorName = {setBlockVendorName}
                                    setVendorDetails = {setVendorDetails}
                                    setUnblockVendor = {setUnblockVendor}
                                    setUnblockVendorName = {setUnblockVendorName}
                                    setBlockVendorId = {setBlockVendorId}
                                    setUnblockVendorId = {setUnblockVendorId}
                                />
                            </div>
                        )
                    )
                )
            }

            {
                blockVendor ? (
                    <BlockVendorModal blockVendorName = {blockVendorName} setBlockVendor = {setBlockVendor} setVendorBlocked = {setVendorBlocked} blockVendorId = {blockVendorId}  />
                ) :null
            }
            {
                vendorBlocked ? (
                    <BlockedVendorModal blockVendorName = {blockVendorName} setBlockVendor = {setBlockVendor} setVendorBlocked = {setVendorBlocked} />
                ) : null
            }
            {
                unblockVendor ? (
                    <UnblockVendorModal unblockVendorName = {unblockVendorName} setUnblockVendor = {setUnblockVendor} setVendorUnblocked = {setVendorUnblocked} unblockVendorId = {unblockVendorId} />
                ) : null
            }
            {
                vendorUnblocked ? (
                    <UnblockedVendorModal unblockVendorName = {unblockVendorName} setUnblockVendor = {setUnblockVendor} setVendorUnblocked = {setVendorUnblocked} />
                ) : null
            }

        </div>
    );
}

export default VendorManagement;