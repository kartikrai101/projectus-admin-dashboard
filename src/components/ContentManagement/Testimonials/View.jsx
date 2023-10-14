import React from 'react'
import Dropzone from 'react-dropzone'
import {useState, useEffect} from 'react';

const View = ({setViewBanner, bannerDetails}) => {

    const [uploaded, setUploaded] = useState(false);
    const [uploadedName, setUploadedName] = useState("");
    const rating = bannerDetails.rating;

    return (
        <div className=" mt-[20px]">
            <form>
            <div className=" mt-[20px]">
            <form>
                <div className="mt-[30px] w-[66%]">
                    <div className="w-full flex flex-col items-start">
                        <p className="text-[14px] text-[#4B465C]">Profile Photo</p>
                        <img src="/Images/ProfilePicture.png" alt="profile" className="w-[70px]" />
                    </div>
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">User Name</p>
                            <input disabled value={bannerDetails.name} type="text" name="title" placeholder="Enter the username" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">Rating</p>
                            <div disabled name="rating" className="flex justify-between items-center border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[15px] text-[#4B465C90]">
                                <p className=''>{rating}</p>
                                <img src="/Images/RatingIcon.png" alt="rating" className='w-[100px]' />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[100%]">
                            <p className='text-[14px] text-[#4B465C]'>Review</p>
                            <textarea value={bannerDetails.review} name="review" placeholder='Add your review' disabled className='min-h-[120px] border-[1px] border-[#DBDADE] rounded-[5px] w-[50%] px-[10px] py-[3px] text-[15px] text-[#4B465C90]'></textarea>
                            {/* Integration Tip: Go to React-Dropzone documentation on npm to see how to get this media file that has been uploaded by the user  */}
                        </div>
                    </div>
                </div>
            </form>
        </div>
            </form>

            <div className="flex w-full justify-center items-center mt-[30px]">
                <div onClick={() => {setViewBanner(false)}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer text-[15px] font-medium">Back</div>
            </div>
        </div>
    );
}

export default View;