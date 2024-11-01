import { UserInfoProvider } from "./Provider";

import ProfileInfoCard from "./ProfileInfoCard";

function LeftSideBar() {
  return ( 
    <div className=" rounded-lg w-full sm:w-[225px] " >
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
