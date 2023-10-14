import VlogsTable from "../../Tables/VlogsTable";
import {useState, useEffect} from 'react';
import DataList from '../../Database/BannerData';
import AddVlog from "./AddVlog";
import ViewVlog from "./ViewVlog";
import EditVlog from "./EditVlog";
import DeleteVlogModal from './DeleteVlogModal';
import DeletedVlogModal from './DeletedVlogModal';

const Vlogs = (props) => {

    const [addBanner, setAddBanner] = useState(false);
    const [viewBanner, setViewBanner] = useState(false);
    const [editBanner, setEditBanner] = useState(false);
    const [deleteBanner, setDeleteBanner] = useState(false);

    const [deleteBannerName, setDeleteBannerName] = useState("");
    const [bannerDeleted, setBannerDeleted] = useState(false);

    const [bannerDetails, setBannerDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {addBanner ? <p><span className="text-[#4B465C90]">Content Management / Vlogs</span> / Add </p> : (
                    viewBanner ? <p><span className="text-[#4B465C90]">Content Management / Vlogs</span> / View </p> : (
                        editBanner ? <p><span className="text-[#4B465C90]">Content Management / Vlogs</span> / Edit </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold"><span className="text-[#4B465C90]">Content Management</span> / Vlogs</p>
                        )
                    )
                ) }

            </p>
            {
                !addBanner ? (
                    <div className="w-full flex justify-end">
                        <button onClick = {() => setAddBanner(true)} className="px-[8px] py-[2px] text-center text-[16px] text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px] font-medium">+  Add Vlog</button>
                    </div>
                ) : null
            }   

            {
                addBanner ? (
                    <AddVlog setAddBanner = {setAddBanner} />  
                ) : (
                    viewBanner ? (
                        <ViewVlog setViewBanner = {setViewBanner} bannerDetails = {bannerDetails} />
                    ) : (
                        editBanner ? (
                            <EditVlog setEditBanner = {setEditBanner} bannerDetails = {bannerDetails} />
                        ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                                <VlogsTable 
                                    DataList={DataList} 
                                    setViewBanner = {setViewBanner} 
                                    setEditBanner = {setEditBanner}
                                    setDeleteBanner = {setDeleteBanner}
                                    setDeleteBannerName = {setDeleteBannerName}
                                    setBannerDetails = {setBannerDetails}
                                />
                            </div>
                        )
                    )
                )
            }

            {
                deleteBanner ? (
                    <DeleteVlogModal deleteBannerName = {deleteBannerName} setDeleteBanner = {setDeleteBanner} setBannerDeleted = {setBannerDeleted}  />
                ) :null
            }
            {
                bannerDeleted ? (
                    <DeletedVlogModal deleteBannerName = {deleteBannerName} setDeleteBanner = {setDeleteBanner} setBannerDeleted = {setBannerDeleted} />
                ) : null
            }
        </div>
    );
}

export default Vlogs;