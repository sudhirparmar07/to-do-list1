import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const SideBar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="sidebar">
      <div
        className={selectedTab === "INBOX" ? "active" : ""}
        onClick={() => setSelectedTab("INBOX")}
      >
        <FaInbox className="icons" />
        Inbox
      </div>
      <div
        className={selectedTab === "TODAY" ? "active" : ""}
        onClick={() => setSelectedTab("TODAY")}
      >
        <FaRegCalendarAlt className="icons" />
        Today
      </div>
      <div
        className={selectedTab === "NEXT_7" ? "active" : ""}
        onClick={() => setSelectedTab("NEXT_7")}
      >
        <FaRegCalendar className="icons" />
        Next 7 days
      </div>
    </div>
  );
};

export default SideBar;
