"use client"
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from "react";

const Notification = ({data,status}) => {

    const[fgcolor,setFgcolor] = useState("")
    const[bgcolor,setBgcolor] = useState("")

    useEffect(()=>{
    if(status=="sucess"){
        setFgcolor("#e3fcef");
        setBgcolor("#36b37e");
    }else{
        setFgcolor("#ffebe6")
        setBgcolor("#c94626")
    }
    },[]);

  return (
    <>
      <div className="absolute flex h-16 ml-2 bg-white rounded w-72 animate-slide-in">
        <div className="h-full w-[15%] flex justify-center rounded items-center" style={{backgroundColor: bgcolor}}>
        {(status=="sucess") ? <DoneIcon style={{color : fgcolor}}/>: <ErrorIcon style={{color : fgcolor}}/>}
        </div> 
        <div className="flex items-center justify-center w-full p-5 text-base rounded" style={{backgroundColor:fgcolor,color:bgcolor }}>
           {data}
        </div>
      </div>
    </>
  );
};
export default Notification;
