import {useState, useRef, useEffect} from 'react';
import SuccessModal from '../../User/SuccessModal';
import React from 'react'
import Dropzone from 'react-dropzone'

const Add = ({setAddBanner}) => {

    const titleRef = useRef();
    const nameRef = useRef();
    const ratingRef = useRef();

    const [showSuccessBanner, setShowSucccessBanner] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [uploadedName, setUploadedName] = useState("");

    const addBannerHandler = () => {
        const title = nameRef.current.value;
        
        setShowSucccessBanner(true);
    }

    return (
        <>
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[30px] w-[66%]">
                    <div className="w-full flex flex-col items-start">
                        <p className="text-[14px] text-[#4B465C]">Add Photo</p>
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
                                                <img src="/Images/ProfilePhotoIcon.png" alt ="upload" className="w-[70px]" />
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
                            <input required ref={nameRef} type="text" name="title" placeholder="Enter the username" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[50%]">
                            <p className="text-[14px] text-[#4B465C]">Rating</p>
                            <input required ref={ratingRef} type="number" min="0" max="5" name="rating" placeholder="Rate between 0-5" className=" border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[100%]">
                            <p className='text-[14px] text-[#4B465C]'>Review</p>
                            <textarea name="review" placeholder='Add your review' required className='min-h-[120px] border-[1px] border-[#DBDADE] rounded-[5px] w-[50%] px-[10px] py-[3px]'></textarea>
                            {/* Integration Tip: Go to React-Dropzone documentation on npm to see how to get this media file that has been uploaded by the user  */}
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {addBannerHandler()}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer font-medium">Add Testimonial</div>
                </div>
            </form>
        </div>
        {
            showSuccessBanner ? 
            <SuccessModal setAdd={setAddBanner} name={"Testimonial"} /> : null
        }
        </>
    );
}

export default Add;