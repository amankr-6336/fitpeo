import React from "react";
import { FaBucket } from "react-icons/fa6";
import { RiArrowUpSFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import "./DashInfo.scss";
import { IoIosAddCircle } from "react-icons/io";



function DashInfoBox({ logo, icon, loss ,text,color,bg,val,iconc}) {
  return (
    <div className="dashinfobox">
      <div className="top-info">
        <div className="info-icon" style={{backgroundColor:bg}} >
         
          <div className="logo" style={ {backgroundColor:bg, color:color}} >{logo}</div>
        
          <div id="add" style={{color:iconc,backgroundColor:"white"}}>{icon}</div>
        </div>
        <p>{text}</p>
      </div>
      <div className="bottom-info">
        <div id="val">
          <p>{val}</p>
        </div>
        <div className="vary" style={{color:  loss? "#0DC38E":"#E84C53"}}>
          <IoMdArrowDropdown id="inc-dec" />
          <p>3%</p>
        </div>
      </div>
    </div>
  );
}

export default DashInfoBox;
