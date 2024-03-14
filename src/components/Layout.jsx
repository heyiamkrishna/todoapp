import React, { useRef, useState } from "react";
import Card from "./Card";
function Layout(props) {
  const ref = useRef(null);

  
  const data= [
    {
      id: 1,
      text: "Buy groceries",
      completed: false,
      fileSize: "0.4 MB",
      description: "A task to purchase essential food items.",
    },
    {
      id: 2,
      text: "Finish React tutorial",
      completed: false,
      fileSize: "0.2 MB",
      description: "An ongoing task related to learning React.",
    },
    {
      id: 3,
      text: "Walk the dog",
      completed: true,
      fileSize: "0.1 MB",
      description: "A completed task involving taking the dog for a walk.",
    },
    // Add more items as needed
  ]
  return (
    
    <div className="layoutDetails grid grid-cols-3 gap-4 md:grid-cols-3 text-white z-10 w-screen h-screen relative overflow-hidden py-[4vh] px-4">
  
      {data.map((item,index)=>(
        <Card key={item.id} refc={props.ref} data={item} />
      ))}
    </div>
  );
}

export default Layout;
