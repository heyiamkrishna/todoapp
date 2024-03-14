import React from 'react'
import { LuDownload } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
function Card(props) {
  return (
    <div>
      <motion.div  drag dragConstraints={props.ref} whileDrag={{scale:1.1}}  className=" card relative capitalize bg-zinc-900/20 h-[40vh] w-[55vw] sm:h-[40vh] sm:w-[40vw] md:h-[40vh] md:w-[32vw] lg:h-[40vh] lg:w-[14vw]  rounded-[40px] text-white overflow-hidden ">
      <div className=" px-[20px] py-8">
      <span className='pb-4 my-2'>
          <FaRegFileAlt size="1.1em"/>
        </span>
        <h2 className="text-yellow-200">{props.data.text}</h2>
        <h4 className="text-yellow-200">{props.data.id}</h4>
        <p className="pt-2">{props.data.description}</p>
      </div>
      <div className="bg-green-600 absolute bottom-0 w-full ">
        <div className="footer py-4 flex items-center justify-between w-full px-4 ">
          <h5>{props.data.fileSize}</h5>

          <span className="rounded-full bg-green-600 flex justify-center items-center">
          {props.data.completed? <LuDownload/>:<IoCloseCircleOutline/> }
          </span>
        </div>
        
        
        <div className="flex justify-center items-center capitalize bg-blue-600 w-full py-4 ">
          {props.data.completed ?"downlaod now" :null}
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default Card
