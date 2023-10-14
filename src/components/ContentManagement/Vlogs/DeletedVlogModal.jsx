import ReactDom from 'react-dom';

const DeletedVlogModal = ({setBannerDeleted, deleteBannerName}) => {
    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 z-1000 bg-[#D9D9D980]"></div>
            <div className='min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl'>
                <div className='flex justify-between space-x-4 items-center mt-[10px]'>
                    <img src="/Images/AlertTriangle.png" alt="alertIcon" className='w-[40px]' />
                    <p className='text-[26px] text-[#4B465C] text-center'>Deleted vlog "{deleteBannerName}"!</p>
                </div>
                <p className='text-[#4B465C] text-[14px] mt-[15px]'>{deleteBannerName} has been sucessfully deleted.</p>
                <div className='flex justify-center items-center space-x-3 mt-[30px]'>
                    <button onClick={() => setBannerDeleted(false)} className='bg-[#DC7A39] text-white px-[15px] py-[5px] rounded-[5px] text-center text-[15px] font-medium'>Done</button>
                </div>
            </div>
        </>, document.getElementById('portal')
    );
}

export default DeletedVlogModal;