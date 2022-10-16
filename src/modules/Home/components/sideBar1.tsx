import Input from "../../../components/Inputs/input";
import {BsSearch} from 'react-icons/bs'
import {AiFillSetting} from "react-icons/ai"


const SideBar = () => {
  const style={
    headerStyle: "text-slate-500 text-sm font-bold",
    subHeaderStyle: "font-bold text-md"
  }
  return ( 
    <div className="w-[25%] p-2 ">
  
      <div className="flex items-center bg-slate-200 rounded-full px-3 py-2 gap-x-2">
        <BsSearch color='grey' size={20} />
        <Input 
        className="  bg-slate-200 outline-0 "
      placeholder="Search tweets"
      />
      </div>

      <div className="bg-slate-200 rounded-md p-3 pt-0 mt-2">
      <div className='py-2'>
        <div className='flex justify-between border-b-2 border-slate-400 my-3'>
        <header className="font-bold text-lg">Trends for you</header>
          <AiFillSetting color='skyblue' size={20}/>
        </div>

        <div>
        <div className='text-left mt-3 '>
        <h4 className={style.headerStyle}>Trending Discussion</h4>
          <h4 className={style.subHeaderStyle}>#BreakingNews</h4>
        </div>

        <div className="flex justify-between text-left border-2 rounded-lg border-slate-400">
          <div className="p-1">
            <h4>Space</h4>
            <h5 className="text-sm font-bold">Lunar photography improves the discover of the moon</h5>
          </div>
          <figure>
          <img src='.\.\moon.jpg' alt="moon" 
          className='w-[8rem] h-[5rem] rounded-r-5'/>
          </figure>
        </div>
        <p className="text-left text-sm px-[.2rem]">10,904 persons are talking about this</p>
        </div>
        
      </div>
       <div>
       <div className='text-left my-5'>
        <h4 className={style.headerStyle}>Trending Discussion</h4>
          <h4 className={style.subHeaderStyle}>#WorldNews</h4>
          <h4 className="text-lg">126k Tweet</h4>
          <p className="text-left text-sm px-[.2rem]">10,904 persons are talking about this</p>
        </div>
       </div>
     
    </div>
    </div>

   );
}
 
export default SideBar;