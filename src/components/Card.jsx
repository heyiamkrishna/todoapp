import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownloadCloud } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import {  motion } from "framer-motion"
function Card(props) {
  const { completed, description, buttonColor, text, fileSize } = props.data;
  return (
    <motion.div drag dragConstraints={props.refc}  className="relative bg-zinc-900/20 h-[40vh] w-[14vw] rounded-[40px] text-white overflow-hidden ">
      <div className=" px-[20px] py-8">
        <FaRegFileLines />
        <h2 className="text-yellow-200">{text}</h2>
        <p className="pt-2">{description}</p>
      </div>
      <div className="bg-green-600 absolute bottom-0 w-full ">
        <div className="footer py-4 flex items-center justify-between w-full px-4 ">
          <h5>{fileSize}</h5>

          <span className="rounded-full bg-green-600 flex justify-center items-center">
            {completed ? <IoIosClose size='1.2em' /> :<LuDownloadCloud size="1.2em"   /> }
            {/* <LuDownloadCloud size="1.2em" color="red" /> */}
          </span>
        </div>


        
        
        <div className="flex justify-center items-center capitalize bg-blue-600 w-full py-4 ">
          downlaod now
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
