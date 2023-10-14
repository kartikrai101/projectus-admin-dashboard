import {useState, useRef, useEffect} from 'react';
import SuccessModal from '../../User/SuccessModal';
import React from 'react'
import Dropzone from 'react-dropzone'

const AddVlog = ({setAddBanner}) => {

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
        
        setShowSucccessBanner(true);
    }

    return (
        <>
        <div className=" mt-[20px]">
            <form>
                <div className="mt-[30px]">
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Vlog Title</p>
                            <input required ref={titleRef} type="text" name="title" placeholder="Enter your banner title" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">CTA Text</p>
                            <input required ref={textRef} type="text" name="text" placeholder="Enter the CTA text" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">YouTube Link</p> 
                            <input required ref={linkRef} type="text" name="link" placeholder="Paste the youtube link" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[15px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className='text-[14px] text-[#4B465C]'>Vlog Thumbnail</p>
                            <div className=''>
                                <Dropzone onDrop={acceptedFiles => {
                                    console.log(acceptedFiles[0].name)
                                    setUploaded(true);
                                    setUploadedName(acceptedFiles[0].name)
                                }}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                        <div {...getRootProps()} className="flex flex-col items-center justify-center border-[1px] border-[#DBDADE] rounded-[5px] min-w-[260px] min-h-[200px]">
                                            <input {...getInputProps()} />
                                            {
                                                uploaded ? (
                                                    <p className='text-[#4B465C99] font-semibold'>{uploadedName}</p>
                                                ) : (
                                                    <>
                                                        <img src="/Images/UploadIcon.png" alt ="upload" className="w-[40px]" />
                                                        <p className='text-[#4B465C99] font-semibold'>Drop files here or click to upload</p>
                                                    </>
                                                )
                                            }
                                        </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                            {/* Integration Tip: Go to React-Dropzone documentation on npm to see how to get this media file that has been uploaded by the user  */}
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {addBannerHandler()}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer font-medium">Add Vlog</div>
                </div>
            </form>
        </div>
        {
            showSuccessBanner ? 
            <SuccessModal setAdd={setAddBanner} name={"Vlog"} /> : null
        }
        </>
    );
}

export default AddVlog;