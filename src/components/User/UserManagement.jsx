import UserManagementTable from "../Tables/UserManagementTable";
import {useState, useEffect} from 'react';
import DataList from '../Database/UserManagementData';
import AddUser from "./AddUser";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import BlockUserModal from './BlockUserModal';
import BlockedUserModal from './BlockedUserModal';
import UnblockUserModal from './UnblockUserModal';
import UnblockedUserModal from './UnblockedUserModal';

const UserManagement = (props) => {

    const [addUser, setAddUser] = useState(false);
    const [viewUser, setViewUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const [blockUser, setBlockUser] = useState(false);
    const [blockUserId, setBlockUserId] = useState(-1);
    const [unblockUserId, setUnblockUserId] = useState(-1);

    const [blockUserName, setBlockUserName] = useState("");
    const [userBlocked, setUserBlocked] = useState(false);

    const [unblockUser, setUnblockUser] = useState(false);
    const [unblockUserName, setUnblockUserName] = useState(false);
    const [userUnblocked, setUserUnblocked] = useState(false);


    const [userDetails, setUserDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {addUser ? <p><span className="text-[#4B465C90]">User Management</span> / Add </p> : (
                    viewUser ? <p><span className="text-[#4B465C90]">User Management</span> / View </p> : (
                        editUser ? <p><span className="text-[#4B465C90]">User Management</span> / Edit </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold">User Management</p>
                        )
                    )
                ) }

            </p>
            {
                !addUser ? (
                    <div className="w-full flex justify-end">
                        <button onClick = {() => setAddUser(true)} className="px-[8px] py-[2px] text-center text-[17px] font-medium text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px]">+  Add User</button>
                    </div>
                ) : null
            }   

            {
                addUser ? (
                    <AddUser setAddUser = {setAddUser} />  
                ) : (
                    viewUser ? (
                        <ViewUser setViewUser = {setViewUser} userDetails = {userDetails} />
                    ) : (
                        editUser ? (
                            <EditUser setEditUser = {setEditUser} userDetails = {userDetails} />
                        ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                                <UserManagementTable 
                                    DataList={DataList} 
                                    setViewUser = {setViewUser} 
                                    setEditUser = {setEditUser}
                                    setBlockUser = {setBlockUser}
                                    setBlockUserName = {setBlockUserName}
                                    setUserDetails = {setUserDetails}
                                    setBlockUserId = {setBlockUserId}
                                    setUnblockUserId = {setUnblockUserId}
                                    setUnblockUser = {setUnblockUser}
                                    setUnblockUserName = {setUnblockUserName}
                                />
                            </div>
                        )
                    )
                )
            }

            {
                blockUser ? (
                    <BlockUserModal blockUserName = {blockUserName} setBlockUser = {setBlockUser} setUserBlocked = {setUserBlocked} blockUserId = {blockUserId}  />
                ) :null
            }
            {
                userBlocked ? (
                    <BlockedUserModal blockUserName = {blockUserName} setBlockUser = {setBlockUser} setUserBlocked = {setUserBlocked} />
                ) : null
            }
            {
                unblockUser ? (
                    <UnblockUserModal unblockUserName = {blockUserName} setUnblockUser = {setUnblockUser} setUserUnblocked = {setUserUnblocked} unblockUserId = {unblockUserId} />
                ) : null
            }
            {
                userUnblocked ? (
                    <UnblockedUserModal unblockUserName = {blockUserName} setUnblockUser = {setUnblockUser} setUserUnblocked = {setUserUnblocked} />
                ) : null
            }
        </div>
    );
}

export default UserManagement;