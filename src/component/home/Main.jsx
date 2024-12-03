
import { UserInfoProvider } from "./Provider";
import WritePostContainer from "./WritePost";
import Posts from '../posts/Posts';


function Main() {

 
  return (
    <div className="col-span-12 lg:col-span-6 md:col-start-4 md:col-end-10">
      <UserInfoProvider>
        <WritePostContainer  />
      </UserInfoProvider>
      <Posts/>
    </div>
  );
}

export default Main;
