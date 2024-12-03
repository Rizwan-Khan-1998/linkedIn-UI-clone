import { UserInfoProvider } from "./Provider";

import ProfileInfoCard from "./ProfileInfoCard";

function LeftSideBar() {
  return ( 
    <div className="rounded-lg hidden md:block col-span-12 md:col-span-3 " >
      <ProfileInfoContainer />
    </div>
   );
}



function ProfileInfoContainer() {
  return (
    <UserInfoProvider> 
      <ProfileInfoCard />
    </UserInfoProvider>
    
  );
}

export default LeftSideBar;
