import ReactDom from 'react-dom';

const DeleteBannerModal = ({deleteBannerName, setDeleteBanner, setBannerDeleted}) => {
    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 z-1000 bg-[#D9D9D980]"></div>
            <div className='min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl'>
                <div className='flex flex-col items-center mt-[10px]'>
                    <p className='text-[26px] text-[#4B465C] text-center font-semibold'>Are you sure you want to delete "{deleteBannerName}"?</p>
                    <p className='text-[#4B465C] text-[14px] mt-[20px]'>{deleteBannerName} will be deleted.</p>
                </div>
                <div className='flex justify-center items-center space-x-3 mt-[35px]'>
                    <button onClick={() => setDeleteBanner(false)} className='px-[15px] py-[5px] text-center text-[#A8AAAE] rounded-[5px] bg-[#A8AAAE29] font-medium'>CANCEL</button>
                    <button onClick={() => {
                        setDeleteBanner(false)
                        setBannerDeleted(true)
                    }} className='bg-[#DC7A39] text-white px-[15px] py-[5px] rounded-[5px] text-center font-medium'>DELETE</button>
                </div>
            </div>
        </>, document.getElementById('portal')
    );
}

export default DeleteBannerModal;