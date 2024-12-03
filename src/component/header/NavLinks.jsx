import { useEffect, useState } from "react";
import MenuLink from "./MenuLink";

function NavLinks() {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width > 430) {
      setIsMobile(true);
    }
  }, [])
  return (
    <div className="flex fixed bottom-0 px-8 left-0 right-0 md:static  h-14 bg-white items-center justify-between">
      <MenuLink
        to="/"
        imageActive="images/activeHome.png"
        image="images/home.png"
        title="Home"
      
      />
      <MenuLink
        to="/network"
        imageActive="images/activeNetwork.png"
        image="images/network.png"
        title="Network"
      />
      <MenuLink
        to="/jobs"
        imageActive="images/activeJobs.png"
        image="images/jobs.png"
        title="Jobs"
      />
      {isMobile && (
      <MenuLink
        to="/messages"
        imageActive="images/activeMessages.png"
        image="images/messanging.png"
        title="Messaging"

      />)}
      <MenuLink
        to="/notification"
        imageActive="images/activeNotification.png"
        image="images/notifi.png"
        title="Notifications"
      />
    </div>
  );
}

export default NavLinks;
