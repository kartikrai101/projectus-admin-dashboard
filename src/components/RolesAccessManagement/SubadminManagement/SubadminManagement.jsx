import DataList from "../../Database/SubadminData";
import Add from "./Add";
import Edit from './Edit';
import View from './View';
import DeleteModal from './DeleteModal';
import DeletedModal from "./DeletedModal";
import {useState, useEffect} from 'react';
import SubadminManagementTable from '../../Tables/SubadminManagementTable';

const SubadminManagement = () => {

    const [add, setAdd] = useState(false);
    const [view, setView] = useState(false);
    const [edit, setEdit] = useState(false);
    const [deleteSubadmin, setDeleteSubadmin] = useState(false);

    const [deleteName, setDeleteName] = useState("");
    const [deleted, setDeleted] = useState(false);

    const [details, setDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
        <p className="text-[22px] text-[#4B465C] font-semibold">
            {add ? <p><span className="text-[#4B465C90]">Subadmin Management</span> / Add </p> : (
                view ? <p><span className="text-[#4B465C90]">Subadmin Management</span> / View </p> : (
                    edit ? <p><span className="text-[#4B465C90]">Subadmin Management</span> / Edit </p> : (
                        <p className="text-[22px] text-[#4B465C] font-semibold">Subadmin Management</p>
                    )
                )
            ) }

        </p>
        {
            !add ? (
                <div className="w-full flex justify-end">
                    <button onClick = {() => setAdd(true)} className="px-[8px] py-[2px] text-center text-[16px] text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px] font-medium">+  Add Subadmin</button>
                </div>
            ) : null
        }   

        {
            add ? (
                <Add setAdd = {setAdd} />  
            ) : (
                view ? (
                    <View setView = {setView} details = {details} />
                ) : (
                    edit ? (
                        <Edit setEdit= {setEdit} details = {details} />
                    ) : (
                        <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                            <SubadminManagementTable 
                                DataList={DataList} 
                                setView = {setView} 
                                setEdit = {setEdit}
                                setDetails = {setDetails}
                                setDeleteSubadmin = {setDeleteSubadmin}
                                setDeleteName = {setDeleteName}

                            />
                        </div>
                    )
                )
            )
        }

        {
            deleteSubadmin ? (
                <DeleteModal deleteName = {deleteName} setDeleteSubadmin = {setDeleteSubadmin} setDeleted = {setDeleted}  />
            ) :null
        }
        {
            deleted ? (
                <DeletedModal deleteName = {deleteName} setDeleteSubadmin = {setDeleteSubadmin} setDeleted = {setDeleted} />
            ) : null
        }

    </div>
    );
}

export default SubadminManagement;