import React from 'react'
import Dropzone from 'react-dropzone'
import {useState, useEffect} from 'react';

const ViewBanner = ({setViewBanner, bannerDetails}) => {

    const [uploaded, setUploaded] = useState(false);
    const [uploadedName, setUploadedName] = useState("");

    return (
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[30px]">
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Banner Title</p>
                            <input disabled type="text" name="title" placeholder="Enter your banner title" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">CTA Text</p>
                            <input disabled type="text" name="text" placeholder="Enter the CTA text" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">CTA Link</p> 
                            <input disabled type="text" name="link" placeholder="Paste the CTA link" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className='text-[14px] text-[#4B465C]'>Banner Image</p>
                            <div disabled className=''>
                                <img src="/Images/UploadedImage.png" className='w-full max-w-[260px]' alt="uploadedImage" />
                            </div>
                            {/* Integration Tip: Go to React-Dropzone documentation on npm to see how to get this media file that has been uploaded by the user  */}
                        </div>
                    </div>
                </div>
            </form>

            <div className="flex w-full justify-center items-center mt-[30px]">
                <div onClick={() => {setViewBanner(false)}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer text-[15px] font-medium">Back</div>
            </div>
        </div>
    );
}

export default ViewBanner;