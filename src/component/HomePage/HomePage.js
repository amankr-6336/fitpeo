import React, { useState } from "react";
import "./HomePage.scss";

import BarGraph from "../bargraph/BarGraph";
import one from '../../asset/one.jpg'
import { IoLogoFlickr } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { IoBagCheck } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

import { IoIosSearch} from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";


import { RiArrowUpSFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import DashInfoBox from "../dashinfo/DashInfoBox";


import { BsFillHandbagFill } from "react-icons/bs";
import { FaCircleCheck} from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaBucket } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import DonutChart from "../donutgraph/Donut";

import AnalysisComp from "../analysiscomp/AnalysisComp";

import { AiOutlineAim } from "react-icons/ai";
import { PiHamburgerLight } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

import { FaAngleRight } from "react-icons/fa6";
import OrderTable from "../ordertable/OrderTable";
import Feedback from "../feedback/FeedBack";

function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="page">
      <div className="navbar">
        <div className="top-navbar">
          <div className="logo">
            <IoLogoFlickr />
          </div>
        </div>

        <div className="bottom-navbar">
          <div className="b-n-top">
            <ul className="nav-tabs">
              <li
                className={`nav-tab ${activeTab === "home" ? "active" : ""}`}
                onClick={() => handleTabClick("home")}
              >
                <AiFillHome/>
              </li>
              <li
                className={`nav-tab ${activeTab === "about" ? "active" : ""}`}
                onClick={() => handleTabClick("about")}
              >
                <MdAnalytics/>
              </li>
              <li
                className={`nav-tab ${
                  activeTab === "services" ? "active" : ""
                }`}
                onClick={() => handleTabClick("services")}
              >
                <BiTask/>
              </li>
              <li
                className={`nav-tab ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => handleTabClick("contact")}
              >
                <BiWalletAlt/>
              </li>

              <li
                className={`nav-tab ${activeTab === "etc" ? "active" : ""}`}
                onClick={() => handleTabClick("etc")}
              >
                <IoBagCheck/>
              </li>
            </ul>
          </div>

          <div className="b-n-bottom">
            <p><AiOutlineLogout /></p>
          </div>
        </div>
      </div>

      <div className="right">
          
          <div className="search-section">
            <div className="search-bar">
              <input type="text" placeholder="Search.." />
              <IoIosSearch id="search" />
            </div>

            <div className="profile">
               <div className="profile-side-icons">
                   <IoIosSettings/>
               </div>
               <div className="profile-side-icons" id="notification">
                   <IoIosNotificationsOutline/>
                   <span id="indicate"></span>
               </div>
               <div className="profile-side-icons">
                   <CiMail/>
               </div>
               <div className="profile-side-icons">
                   <img src={one} alt="" />
               </div>
              
            </div>
          </div>

          <div className="heading">
            <h3>Dashboard</h3>
          </div>

          <div className="dashboard">
            <div className="dash-left">
                 <DashInfoBox logo={<FaBucket/>} icon={<IoIosAddCircle/>} loss={false} text="Total orders" color="#3d68FF" bg="#283565" iconc="#7683EB" val="75" />
                 <DashInfoBox logo={<BsFillHandbagFill/>} icon={<FaCircleCheck/>} loss={true} text="Total Delivered" color="#00cb8c" bg="#145347" iconc="#69E6C1" val="70"/>
                 <DashInfoBox logo={<BsFillHandbagFill/>} icon={<MdCancel/>} loss={false} text="Total Cancelled" color="#F35C5B" bg="#613339" iconc="#FA8288"val="5"/>
                 <DashInfoBox logo={<AiFillDollarCircle/>} loss={true} text="Total Cancelled" color="#E74AA2" bg="#602B4D" val="$12k"/>
            </div>

            <div className="dash-right">
               <div className="left-dash">
                  <p id="net">Net Profit</p>

                  <h2>$ 6334.3</h2>
                  
                  <div className="val">
                  <RiArrowUpSFill  id="inc-dec" />
                  <p>3%</p>
                  </div>
                  
               </div>
               <div className="right-dash">
                   <DonutChart/>
               </div>
            </div>
          </div>

          <div className="analysis">
            <div className="left-analy">
               <div className="title">
                <p>Activity</p>
                <button>week <IoMdArrowDropdown/> </button>
               </div>
               <div className="bargraph">
               <BarGraph/>
               </div>
              
            </div>
            <div className="right-analy">
                 <AnalysisComp icon={<AiOutlineAim/>} color="#E36523" bg="#5E3238" text="Goals" right={<FaAngleRight/>} />
                 <AnalysisComp icon={<PiHamburgerLight/>} color="#667ADF" bg="#2A3369" text="Popular Dishes" right={<FaAngleRight/>} />
                 <AnalysisComp icon={<BiDish/>} color="#2B94C1" bg="#204A60" text="Menus" right={<FaAngleRight/>} />

            </div>
          </div>

          <div className="order-feedback">
            <div className="left-order">
               <div className="title-o">
                <p>Orders</p>
               </div>
               <div className="table">
                 <OrderTable/>
               </div>
            </div>

            <div className="right-feedback">
               <div className="title-f">
                <p>Customer's Feedback</p>
               </div>
               <div className="feedbacks">
               <Feedback/>
               </div>
              
            </div>
          </div>
         


      </div>
    </div>
  );
}

export default HomePage;
