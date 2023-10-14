import BannersTable from "../../Tables/BannersTable";
import {useState, useEffect} from 'react';
import DataList from '../../Database/BannerData';
import AddBanner from "./AddBanner";
import ViewBanner from "./ViewBanner";
import EditBanner from "./EditBanner";
import DeleteBannerModal from './DeleteBannerModal';
import DeletedBannerModal from './DeletedBannerModal';

const Banners = (props) => {

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
                {addBanner ? <p><span className="text-[#4B465C90]">Content Management / Banners</span> / Add </p> : (
                    viewBanner ? <p><span className="text-[#4B465C90]">Content Management / Banners</span> / View </p> : (
                        editBanner ? <p><span className="text-[#4B465C90]">Content Management / Banners</span> / Edit </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold"><span className="text-[#4B465C90]">Content Management</span> / Banners</p>
                        )
                    )
                ) }

            </p>
            {
                !addBanner ? (
                    <div className="w-full flex justify-end">
                        <button onClick = {() => setAddBanner(true)} className="px-[8px] py-[2px] text-center text-[17px] text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px] font-medium">+  Add Banner</button>
                    </div>
                ) : null
            }   

            {
                addBanner ? (
                    <AddBanner setAddBanner = {setAddBanner} />  
                ) : (
                    viewBanner ? (
                        <ViewBanner setViewBanner = {setViewBanner} bannerDetails = {bannerDetails} />
                    ) : (
                        editBanner ? (
                            <EditBanner setEditBanner = {setEditBanner} bannerDetails = {bannerDetails} />
                        ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                                <BannersTable 
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
                    <DeleteBannerModal deleteBannerName = {deleteBannerName} setDeleteBanner = {setDeleteBanner} setBannerDeleted = {setBannerDeleted}  />
                ) :null
            }
            {
                bannerDeleted ? (
                    <DeletedBannerModal deleteBannerName = {deleteBannerName} setDeleteBanner = {setDeleteBanner} setBannerDeleted = {setBannerDeleted} />
                ) : null
            }
        </div>
    );
}

export default Banners;