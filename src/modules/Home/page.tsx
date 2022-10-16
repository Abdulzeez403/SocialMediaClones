import Navbar from "./components/navbar";
import Post from "./components/post";
import SideBar from "./components/sideBar1";

const MainPage = () => {
  return (  
    <div className="flex justify-center">
      <Navbar/>
      <Post/>
      <SideBar/>
      </div>
  );
}
 
export default MainPage;