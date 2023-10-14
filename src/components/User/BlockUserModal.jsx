import ReactDom from 'react-dom';
import DataList from '../Database/UserManagementData';

const BlockUser = ({blockUserName, setBlockUser, setUserBlocked, blockUserId}) => {

    const blockUserHandler = () => {
        DataList[blockUserId].blocked = true;
    }

    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#D9D9D980] z-1000" />
            <div className="min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl">
                <img src="/Images/BlockUserAlert.png" alt="alertIcon" className='w-[40px]' />
                <div className='flex flex-col items-center mt-[10px]'>
                    <p className='text-[26px] text-[#4B465C] text-center font-semibold'>Block User {blockUserName}?</p>
                    <p className='text-[#4B465C] text-[14px] text-center'>This will block the user</p>
                </div>
                <div className='flex justify-center items-center space-x-3 mt-[15px]'>
                    <button onClick={() => {
                        setBlockUser(false)
                        setUserBlocked(true)
                        blockUserHandler()
                    }} className='bg-[#DC7A39] text-white px-[15px] py-[5px] rounded-[5px] text-center font-medium'>Confirm</button>
                    <button onClick={() => setBlockUser(false)} className='px-[15px] py-[5px] text-center rounded-[5px] font-medium border-[1px] border-[#2A4F6D] font-medium'>Cancel</button>
                </div>
            </div>
        </>, document.getElementById("portal")
    );
}

export default BlockUser;