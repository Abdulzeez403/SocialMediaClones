import Buttons from "../../../components/Buttons/button";
import Input from "../../../components/Inputs/input";
import {BsStars, BsEmojiSmile} from 'react-icons/bs';
import {GrImage} from 'react-icons/gr';
import ListPost from "./list";


const Post = () => {
  return ( 
    <div className='w-[55%] border'>
  <div className=''>
       <div className='flex justify-between px-3   my-2'>
       <header className='font-bold text-lg '>Home</header>
       <BsStars color='skyblue'size={30} />
       </div>
       <div className='w-full h-[2px] bg-slate-300 p-0'></div>

       <div className="flex mt-2 gap-x-[2rem] px-3">
        <figure className="items-start">
          <img src="././moon.jpg" alt=""
          className="rounded-full  w-[5.5rem]" />
        </figure>
            <div className=" w-full">
           <Input
             className=' mt-[1.8rem] placeholder:text-lg outline-0 '
             placeholder="What's happening?"
             />

<div className="flex justify-between items-center my-5 ">
              <div className="flex gap-x-[1rem]">
              <GrImage color='skyblue'size={35}/>
              <BsEmojiSmile color='skyblue'size={35} />
              <BsEmojiSmile color='skyblue'size={35} />
              <BsEmojiSmile color='skyblue'size={35} />
              </div>
              <Buttons
             className='bg-blue-400 border-1 rounded-full text-white font-bold p-2 px-4'
             buttonTitle='Tweet'
             />

             </div>
            </div>
       </div>
       </div>
       <div className='w-full h-[8px] bg-slate-200 p-0'></div>

       <ListPost/>
    </div>
   );
}
 
export default Post;