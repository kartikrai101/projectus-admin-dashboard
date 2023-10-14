import DataList from "../../Database/RolesData";
import AddRole from "./AddRole";
import EditRole from './EditRole';
import ViewRole from './ViewRole';
import DeleteModal from './DeleteModal';
import DeletedModal from "./DeletedModal";
import {useState, useEffect} from 'react';
import RolesManagementTable from '../../Tables/RolesManagementTable';

const RolesManagement = () => {

    const [addRole, setAddRole] = useState(false);
    const [viewRole, setViewRole] = useState(false);
    const [editRole, setEditRole] = useState(false);
    const [deleteRole, setDeleteRole] = useState(false);

    const [deleteRoleId, setDeleteRoleId] = useState("");
    const [roleDeleted, setRoleDeleted] = useState(false);

    const [roleDetails, setRoleDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {addRole ? <p><span className="text-[#4B465C90]">Role Management</span> / Add </p> : (
                    viewRole ? <p><span className="text-[#4B465C90]">Role Management</span> / View </p> : (
                        editRole ? <p><span className="text-[#4B465C90]">Role Management</span> / Edit </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold">Role Management</p>
                        )
                    )
                ) }

            </p>
            {
                !addRole ? (
                    <div className="w-full flex justify-end">
                        <button onClick = {() => setAddRole(true)} className="px-[8px] py-[2px] text-center text-[16px] text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px] font-medium">+  Add Role</button>
                    </div>
                ) : null
            }   

            {
                addRole ? (
                    <AddRole setAddRole = {setAddRole} />  
                ) : (
                    viewRole ? (
                        <ViewRole setViewRole = {setViewRole} roleDetails = {roleDetails} />
                    ) : (
                        editRole ? (
                            <EditRole setEditRole= {setEditRole} roleDetails = {roleDetails} />
                        ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                                <RolesManagementTable 
                                    DataList={DataList} 
                                    setViewRole = {setViewRole} 
                                    setEditRole = {setEditRole}
                                    setRoleDetails = {setRoleDetails}
                                    setDeleteRole = {setDeleteRole}
                                    setDeleteRoleId = {setDeleteRoleId}

                                />
                            </div>
                        )
                    )
                )
            }

            {
                deleteRole ? (
                    <DeleteModal deleteRoleId = {deleteRoleId} setDeleteRole = {setDeleteRole} setRoleDeleted = {setRoleDeleted}  />
                ) :null
            }
            {
                roleDeleted ? (
                    <DeletedModal deleteRoleId = {deleteRoleId} setDeleteRole = {setDeleteRole} setRoleDeleted = {setRoleDeleted} />
                ) : null
            }

        </div>
    );
}

export default RolesManagement