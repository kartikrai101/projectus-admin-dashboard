import DataList from "../../Database/ServiceManagementData";
import {useState, useEffect} from 'react';
import AddService from './AddService';
import EditService from './EditService';
import ViewService from './ViewService';
import ServiceManagementTable from "../../Tables/ServiceManagementTable";
import DeleteServiceModal from "./DeleteServiceModal";
import DeletedServiceModal from "./DeletedServiceModal";

const ServiceManagement = (props) => {

    const [addService, setAddService] = useState(false);
    const [viewService, setViewService] = useState(false);
    const [editService, setEditService] = useState(false);
    const [deleteService, setDeleteService] = useState(false);

    const [deleteServiceName, setDeleteServiceName] = useState("");
    const [serviceDeleted, setServiceDeleted] = useState(false);

    const [serviceDetails, setServiceDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {addService ? <p><span className="text-[#4B465C90]">Service Management / Service</span> / Add </p> : (
                    viewService ? <p><span className="text-[#4B465C90]">Service Management / Service</span> / View </p> : (
                        editService ? <p><span className="text-[#4B465C90]">Service Management / Service</span> / Edit </p> : (
                            <p className="text-[22px] text-[#4B465C] font-semibold">Service Management / Service</p>
                        )
                    )
                ) }

            </p>
            {
                !addService ? (
                    <div className="w-full flex justify-end">
                        <button onClick = {() => setAddService(true)} className="px-[8px] py-[2px] text-center text-[16px] text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px] font-medium cursor-pointer">+  Add Service</button>
                    </div>
                ) : null
            }   

            {
                addService ? (
                    <AddService setAddService = {setAddService} />  
                ) : (
                    viewService ? (
                        <ViewService setViewService = {setViewService} serviceDetails = {serviceDetails} />
                    ) : (
                        editService ? (
                            <EditService setEditService= {setEditService} serviceDetails = {serviceDetails} />
                        ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[10px]">
                                <ServiceManagementTable 
                                    DataList={DataList} 
                                    setViewService = {setViewService} 
                                    setEditService = {setEditService}
                                    setServiceDetails = {setServiceDetails}
                                    setDeleteService = {setDeleteService}
                                    setDeleteServiceName = {setDeleteServiceName}
                                />
                            </div>
                        )
                    )
                )
            }

            {
                deleteService ? (
                    <DeleteServiceModal deleteServiceName = {deleteServiceName} setDeleteService = {setDeleteService} setServiceDeleted = {setServiceDeleted}  />
                ) :null
            }
            {
                serviceDeleted ? (
                    <DeletedServiceModal deleteServiceName = {deleteServiceName} setDeleteService = {setDeleteService} setServiceDeleted = {setServiceDeleted} />
                ) : null
            }

        </div>
    );
}


export default ServiceManagement;