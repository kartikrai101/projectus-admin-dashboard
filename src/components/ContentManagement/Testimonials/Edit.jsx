import React from 'react'
import Dropzone from 'react-dropzone'
import {useState, useEffect, useRef} from 'react';

const Edit = ({setViewBanner, bannerDetails, setEditBanner}) => {

    const [uploaded, setUploaded] = useState(false);
    const [uploadedName, setUploadedName] = useState("");
    const rating = bannerDetails.rating;

    const ratingRef = useRef();
    const reviewRef = useRef();
    const nameRef = useRef();

    return (
        <div className=" mt-[20px]">
            <form>
            <div className=" mt-[20px]">
            <form>
                <div className="mt-[30px] w-[66%]">
                    <div className="w-full flex flex-col items-start">
                        <p className="text-[14px] text-[#4B465C]">Profile Photo</p>
                        <Dropzone onDrop={acceptedFiles => {
                                console.log(acceptedFiles[0].name)
                                setUploaded(true);
                                setUploadedName(acceptedFiles[0].name)
                            }}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div {...getRootProps()} className="flex flex-col items-center justify-center border-[1px] border-[#DBDADE] rounded-[5px] ">
                                    <input {...getInputProps()} />
                                    {
                                        uploaded ? (
                                            <p className='text-[#4B465C99] font-semibold'>{uploadedName}</p>
                                        ) : (
                                            <>
                                                <img src="/Images/ProfilePicture.png" alt ="upload" className="w-[70px]" />
                                            </>
                                        )
                                    }
                                </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">User Name</p>
                            <input defaultValue={bannerDetails.name} ref={nameRef} type="text" name="title" placeholder="Enter the username" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C90]" />
                        </div>
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">Rating</p>
                            <input required ref={ratingRef} defaultValue={bannerDetails.rating} type="number" min="0" max="5" name="rating" placeholder="Rate between 0-5" className=" border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C90]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[100%]">
                            <p className='text-[14px] text-[#4B465C]'>Review</p>
                            <textarea ref={reviewRef} defaultValue={bannerDetails.review} name="review" placeholder='Add your review' className='min-h-[120px] border-[1px] border-[#DBDADE] rounded-[5px] w-[50%] px-[10px] py-[3px] text-[#4B465C90]'></textarea>
                            {/* Integration Tip: Go to React-Dropzone documentation on npm to see how to get this media file that has been uploaded by the user  */}
                        </div>
                    </div>
                </div>
            </form>
        </div>
            </form>

            <div className="flex w-full justify-center items-center mt-[30px] space-x-4">
                    <div onClick={() => {setEditBanner(false)}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer text-[15px] font-medium">Save</div>
                    <div onClick={() => {setEditBanner(false)}} className="bg-[#A8AAAE29] text-[#3C3836] text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer font-medium">Cancel</div>
                </div>
        </div>
    );
}

export default Edit;