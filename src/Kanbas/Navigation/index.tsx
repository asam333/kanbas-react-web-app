import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router";
export default function KanbasNavigation() {
    const { pathname } = useLocation();
    return (
        <div id="wd-kanbas-navigation" 
        className="list-group rounded-0 position-fixed bottom-0 top-0
        d-none d-md-block z-2 bg-black"
        style={{ width: '110px'}}>
            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" /> </a>
            <a id="wd-account-link" href="#/Kanbas/Account"
                className={`list-group-item text-center border-0 
                ${pathname.includes("Account") ? "bg-white text-danger" : "text-white bg-black"}`}>
                <FaRegCircleUser className="fs-1 text text-white" /><br />
                Account </a>
            <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
                className={`list-group-item text-center border-0 
                    ${pathname.includes("Dashboard") ? "bg-white text-danger" : "text-white bg-black"}`}>
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard </a>
            <a id="wd-course-link" href="#/Kanbas/Courses"
                className={`list-group-item text-center border-0 
                    ${pathname.includes("Courses") ? "bg-white text-danger" : "text-white bg-black"}`}>
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses </a>
            {/* complete styling the rest of the links */}
            <a id="wd-calendar-link" href="#/Kanbas/Calendar"
                className={`list-group-item text-center border-0 
                    ${pathname.includes("Calendar") ? "bg-white text-danger" : "text-white bg-black"}`}>
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar </a>
            <a id="wd-inbox-link" href="#/Kanbas/Inbox"
                className={`list-group-item text-center border-0 
                    ${pathname.includes("Inbox") ? "bg-white text-danger" : "text-white bg-black"}`}>
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox </a>
            <a id="wd-settings-link" href="#/Labs"
                className="list-group-item text-center border-0
                   bg-black text-white">
                <LiaCogSolid className="fs-1 text-danger" /><br />
                Labs </a>
        </div>
    );
}

