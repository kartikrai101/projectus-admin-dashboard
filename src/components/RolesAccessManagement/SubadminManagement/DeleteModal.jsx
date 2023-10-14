import ReactDom from 'react-dom';

const DeleteModal = ({deleteName, setDeleteSubadmin, setDeleted}) => {
    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 z-1000 bg-[#D9D9D980]"/>
            <div className="min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl">
                {/* <img src="/Images/BlockUserAlert.png" alt="alertIcon" className='w-[40px]' /> */}
                <div className='flex flex-col items-start mt-[20px]'>
                    <p className='text-[26px] text-[#4B465C] text-center font-semibold'>Are you sure you want to delete {deleteName}?</p>
                    <p className='text-[#4B465C] mt-[20px] text-[14px]'>{deleteName} will be permanently deleted.</p>
                </div>
                <div className='flex justify-center items-center space-x-3 mt-[35px]'>
                    <button onClick={() => setDeleteSubadmin(false)} className='bg-[#A8AAAE29] text-[#A8AAAE] px-[15px] py-[5px] text-center rounded-[5px] font-medium'>CANCEL</button>
                    <button onClick={() => {
                        setDeleteSubadmin(false)
                        setDeleted(true)
                    }} className='bg-[#DC7A39] text-white px-[15px] py-[5px] rounded-[5px] text-center font-medium'>DELETE</button> 
                </div>
            </div>
        </>, document.getElementById('portal')
    );
}

export default DeleteModal;