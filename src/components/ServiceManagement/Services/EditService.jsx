import {useState, useEffect, useRef} from 'react';
import SuccessModal from '../../User/SuccessModal';

const EditService = ({setEditService}) => {

    const nameRef = useRef();
    const iconRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const chatRef = useRef();
    const callRef = useRef();
    const videoRef = useRef();
    const visitRef = useRef();

    const [showSuccessBanner, setShowSucccessBanner] = useState(false);

    const addServiceHandler = () => {
        const name = nameRef.current.value;
        
        setShowSucccessBanner(true);
    }

    return (
        <>
            <div className=" mt-[20px]">
                <form>
                    <div className="w-full flex justify-start">
                        <p className="text-[22px] text-[#4B465C] font-semibold">Service</p>
                    </div>
                    <div className="mt-[10px]">
                        <div className="flex justify-between space-x-3">
                            <div className="flex flex-col items-start w-[33%]">
                                <p className="text-[14px] text-[#4B465C]">Full Name</p>
                                <input required ref={nameRef} type="text" name="name" placeholder="Enter your name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                            </div>
                            <div className="flex flex-col items-start w-[33%]">
                                <p className="text-[14px] text-[#4B465C]">Icon</p>
                                <input required ref={iconRef} type="file" name="icon" placeholder="Attach file" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                            </div>
                            <div className="flex flex-col items-start w-[33%]">
                                <p className="text-[14px] text-[#4B465C]">Image</p> 
                                <input required ref={imageRef} type="file" name="image" placeholder="Attach file" className="text-[#4B465C80] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                            </div>
                        </div>
                        <div className="flex justify-between space-x-3 mt-[10px]">
                            <div className="flex flex-col items-start w-[33%]">
                                <p className="text-[14px] text-[#4B465C]">Description</p>
                                <textarea ref={descriptionRef} name="description" placeholder="Add description" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] min-h-[150px]"></textarea>
                            </div>
                        </div>
                        <div className='flex justify-start mt-[30px]'>
                            <p className='text-[22px] text-[#4B465C] font-semibold'>Sub Service</p>
                        </div>
                        <div className="flex  space-x-3 mt-[10px]">
                            <div className="flex flex-col items-start w-[33%]">
                                <p className="text-[14px] text-[#4B465C]">Chat</p>
                                <input ref={chatRef} type="number" name="chat" placeholder="Enter Amount in Rupees" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                            </div>
                            <div className="flex flex-col items-start w-[33%]">
                                <p className="text-[14px] text-[#4B465C]">Call</p>
                                <input ref={callRef} type="number" name="call" placeholder="Enter Amount in Rupees" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                            </div>
                            <div className="flex flex-col items-start w-[33%]">
                                <p className="text-[14px] text-[#4B465C]">Video Call</p>
                                <input ref={videoRef} type="number" name="video" placeholder="Enter Amount in Rupees" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                            </div>
                        </div>

                        <div className="flex justify-between space-x-3 mt-[10px]">
                            <div className="flex flex-col items-start w-[33%]">
                                <p className="text-[14px] text-[#4B465C]">Visit</p>
                                <input ref={visitRef} type="number" name="visit" placeholder="Enter Amount in Rupees" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex w-full justify-center items-center mt-[30px]">
                        <div onClick={() => {addServiceHandler()}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px] cursor-pointer">Edit Service</div>
                    </div>
                </form>
            </div>
            {
                showSuccessBanner ? 
                <SuccessModal setAdd={setEditService} name={"Service"} /> : null
            }
        </>
    );
}

export default EditService;