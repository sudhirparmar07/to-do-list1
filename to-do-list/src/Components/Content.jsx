import React, { useState } from "react";
import Tasks from "./Tasks";
import SideBar from "./SideBar";

const Content = () => {
  const [selectedTab, setSelectedTab] = useState("INBOX");
  return (
    <section className="content">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tasks selectedTab={selectedTab} />
    </section>
  );
};

export default Content;
