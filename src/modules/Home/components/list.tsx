import {BsHeart} from 'react-icons/bs';
import {FaRetweet} from'react-icons/fa';
import {BiMessageRounded, BiDownload} from 'react-icons/bi'
import {FiChevronDown} from "react-icons/fi"

const ListPost = () => {
  return ( 
    <div>
      <div className="flex mt-2 gap-x-[2rem] px-3 ">
        <figure className="items-start">
          <img src="././moon.jpg" alt=""
          className="rounded-full  w-[5.5rem]" />
        </figure>
        <div className="flex justify-between ">
          <div>
          <h4 className="font-bold">Paul Johnson <span className="text-italize text-slate-300">@paul2345566</span>  <time className="text-italize text-slate-300">3m</time></h4>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe dolorem enim repellat perferendis explicabo aliquid possimus voluptates quod ad!</p>
        </div>
        <FiChevronDown size={33} />
        </div>

            </div>
            <div className='flex justify-between px-10 mt-[1rem]'>
              <div className='flex gap-x-1 items-center'>
              <BiMessageRounded size={30}/>
                 <h4>10</h4>
              </div>
              <div className='flex gap-x-1 items-center'>
              <FaRetweet size={30}/>
                 <h4>22</h4>
              </div> 
              <div className='flex gap-x-1 items-center'>
              <BsHeart size={30}/>
                 <h4>15</h4>
              </div> 
              <div className='flex gap-x-1 items-center'>
              <BiDownload size={30}/>
                 <h4>7</h4>
              </div>
              

            </div>
            <div className='w-full h-[2px] bg-slate-200 mt-2'></div>
            </div>
      
   );
}
 
export default ListPost;