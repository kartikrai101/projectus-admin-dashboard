import {useState, useRef, useEffect} from 'react';
import SuccessModal from '../../User/SuccessModal';
import React from 'react';
import Dropzone from 'react-dropzone';

const EditBanner = ({setEditBanner, bannerDetails}) => {

    const titleRef = useRef();
    const textRef = useRef();
    const linkRef = useRef();
    const imageRef = useRef();
    const selectionRef = useRef();

    const [showSuccessBanner, setShowSucccessBanner] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [uploadedName, setUploadedName] = useState("");

    const addBannerHandler = () => {
        const title = titleRef.current.value;
        
        setEditBanner(false);
    }

    return (
        <>
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[30px]">
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Banner Title</p>
                            <input required defaultValue={bannerDetails.title} ref={titleRef} type="text" name="title" placeholder="Enter your banner title" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">CTA Text</p>
                            <input required defaultValue={bannerDetails.ctaText} ref={textRef} type="text" name="text" placeholder="Enter the CTA text" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">CTA Link</p> 
                            <input required defaultValue={bannerDetails.ctaLink} ref={linkRef} type="text" name="link" placeholder="Paste the CTA link" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className='text-[14px] text-[#4B465C]'>Banner Image</p>
                            <div className=''>
                            <img src="/Images/UploadedImage.png" className='w-full max-w-[260px]' alt="uploadedImage" />
                            </div>
                            {/* Integration Tip: Go to React-Dropzone documentation on npm to see how to get this media file that has been uploaded by the user  */}
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px] space-x-4">
                    <div onClick={() => {addBannerHandler()}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer text-[15px] font-medium">Save</div>
                    <div onClick={() => {addBannerHandler()}} className="bg-[#A8AAAE29] text-[#3C3836] text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer font-medium">Cancel</div>
                </div>
            </form>
        </div>
        {/* {
            showSuccessBanner ? 
            <SuccessModal setAdd={setAddBanner} name={"Banner"} /> : null
        } */}
        </>
    );
}

export default EditBanner;