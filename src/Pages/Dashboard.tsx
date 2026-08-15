import { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const Dashboard = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            
            <SideBar/>
        </div>
    )
};

export default Dashboard;