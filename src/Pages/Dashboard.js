import { DashboardContent } from "../components/DashboardContent"
import { Sidebar } from "../components/Sidebar"

export const Dashboard = () => {
    return (
        <div className="container">
        <Sidebar></Sidebar>
        <DashboardContent></DashboardContent>
        </div>
    )
}