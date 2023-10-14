import TestimonialsTable from "../../Tables/TestimonialsTable";
import {useState, useEffect} from 'react';
import DataList from '../../Database/TestimonialsData';
import Add from "./Add";
import View from "./View";
import Edit from "./Edit";
import DeleteModal from './DeleteModal';
import DeletedModal from './DeletedModal';

const Testimonials = (props) => {

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
                {addBanner ? <p><span className="text-[#4B465C90]">Content Management / Testimonials</span> / Add </p> : (
                    viewBanner ? <p><span className="text-[#4B465C90]">Content Management / Testimonials</span> / View </p> : (
                        editBanner ? <p><span className="text-[#4B465C90]">Content Management / Testimonials</span> / Edit </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold"><span className="text-[#4B465C90]">Content Management</span> / Testimonials</p>
                        )
                    )
                ) }

            </p>
            {
                !addBanner ? (
                    <div className="w-full flex justify-end">
                        <button onClick = {() => setAddBanner(true)} className="px-[8px] py-[2px] text-center text-[16px] text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px] font-medium">+  Add Testimonial</button>
                    </div>
                ) : null
            }   

            {
                addBanner ? (
                    <Add setAddBanner = {setAddBanner} />  
                ) : (
                    viewBanner ? (
                        <View setViewBanner = {setViewBanner} bannerDetails = {bannerDetails} />
                    ) : (
                        editBanner ? (
                            <Edit setEditBanner = {setEditBanner} bannerDetails = {bannerDetails} />
                        ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                                <TestimonialsTable 
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
                    <DeleteModal deleteBannerName = {deleteBannerName} setDeleteBanner = {setDeleteBanner} setBannerDeleted = {setBannerDeleted}  />
                ) :null
            }
            {
                bannerDeleted ? (
                    <DeletedModal deleteBannerName = {deleteBannerName} setDeleteBanner = {setDeleteBanner} setBannerDeleted = {setBannerDeleted} />
                ) : null
            }
        </div>
    );
}

export default Testimonials;