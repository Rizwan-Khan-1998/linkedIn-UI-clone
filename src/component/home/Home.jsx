import LeftSideBar from "./LeftSideBar";
import Main from "./Main";
import Messages  from "./Messages";
import RightBar from "./RightBar";




function Home() {
  return (
    <div className="w-screen lg:mx-auto lg:max-w-[1128px] page-layout">
      <LeftSideBar />
      <Main />
      <RightBar />
      <Messages/>
    </div>
  );
}
export default Home;
