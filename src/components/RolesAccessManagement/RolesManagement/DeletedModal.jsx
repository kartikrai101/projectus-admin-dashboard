import ReactDom from 'react-dom';

const DeletedModal = ({setRoleDeleted, deleteRoleId}) => {
    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 z-1000 bg-[#D9D9D980]"></div>
            <div className='min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl'>
                <img src="/Images/BlockUserAlert.png" alt="alertIcon" className='w-[40px]' />
                <div className='flex flex-col items-center mt-[10px]'>
                    <p className='text-[26px] text-[#4B465C] text-center'>Role ID {deleteRoleId} Deleted</p>
                    <p className='text-[#4B465C] mt-[20px] text-[14px] text-center'>Role ID {deleteRoleId} successfully deleted.</p>
                </div>
                <div className='flex justify-center items-center space-x-3 mt-[15px]'>
                    <button onClick={() => setRoleDeleted(false)} className='bg-[#DC7A39] text-white px-[15px] py-[5px] rounded-[5px] text-center text-[15px] font-medium'>Done</button>
                </div>
            </div>
        </>, document.getElementById('portal')
    );
}

export default DeletedModal;