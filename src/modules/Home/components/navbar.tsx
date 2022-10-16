import { Link } from "react-router-dom";
import {BsTwitter, BsBookmark} from 'react-icons/bs'
import {GrNotification} from "react-icons/gr"
import {BiHomeCircle} from "react-icons/bi"
import {MdOutlineMailOutline} from 'react-icons/md'
import {CgList, CgProfile, CgMoreO} from "react-icons/cg"
import Buttons from "../../../components/Buttons/button";
const Navbar = () => {
  const style ={
    listStyle: 'flex font-bold items-center gap-x-[1rem] text-lg my-[1rem]'   
  }
  return ( 
   <div className="w-[15%] ">
    <div className="p-[2rem] py-1 ">
    <div className="flex m-0 justify-center">
    <BsTwitter color="skyblue" size={50}/>
    </div>
      <nav>
      <ul className=" ">
      
        <div className={style.listStyle}>
        <BiHomeCircle  size={35}/>
         <li>Home</li>
        </div>
        <div className={style.listStyle}>
        <BiHomeCircle  size={35}/>
         <li>Explore</li>
        </div>
        <div className={style.listStyle}>
        <GrNotification size={35}/>

         <li>Notifcation</li>
        </div>
        <div className={style.listStyle}>
        <MdOutlineMailOutline  size={35}/>

         <li>Message</li>
        </div>
        <div className={style.listStyle}>
        <BsBookmark size={35}/>

         <li>Bookmark</li>
        </div>
        <div className={style.listStyle}>
        <CgList size={35}/>

         <li>List</li>
        </div>
        <div className={style.listStyle}>
        <CgProfile size={35}/>

         <li>Profile</li>
        </div>
        <div className={style.listStyle}>
        <CgMoreO size={35}/>

         <li>More</li>
        </div>
      </ul>
      </nav>

      <Buttons 
      className='bg-blue-700 px-[4rem] rounded-md text-white py-[.8rem] text-lg'
      buttonTitle='Tweet'
      />
      </div>
   </div>
   )
}
 
export default Navbar;