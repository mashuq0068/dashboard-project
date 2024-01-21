"use client"
import Image from "next/image";
import notification from '../../../public/assets/images/notification.png'
import profile from '../../../public/assets/images/profilePicture.png'
import './DashboardTop.scss'
import logo from '../../../public/assets/images/mainLogo.png'
import responsiveNav from '../../../public/assets/images/menu 1.png'
import DashboardNav from "../DashboardNav/DashboardNav";
import Link from "next/link";
// import { MenuFoldOutlined } from "@ant-design/icons";
import dashboardIcon from '../../../public/assets/images/dashboard.png'
import users from '../../../public/assets/images/users.png'
import chat from '../../../public/assets/images/chat.png'
import social from '../../../public/assets/images/social.png'
import events from '../../../public/assets/images/events.png'
import packages from '../../../public/assets/images/package.png'
import payment from '../../../public/assets/images/payment.png'
import portal from '../../../public/assets/images/portal.png';
import contact from '../../../public/assets/images/contactManagement.png'
import support from '../../../public/assets/images/support.png'
import logout from '../../../public/assets/images/logout.png';
import { useState } from "react";
import {  CloseOutlined } from "@ant-design/icons";



const DashboardTop = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
    return (
        <>
        <div className="main-container">
            <div style={{fontSize:'30px' , fontWeight:'600'}}>
                Dashboard
            </div>
           <div style={{display:'flex' , alignItems:'center' , gap:'15px'}}>
           
                <Image
                height='auto'
                width='auto'
                alt="notification"
                src={notification}

                />
              <div className="Image-container">
              <Image
                className="img"
                height='auto'
                width='auto'
                alt="notification"
                src={profile}
                />
              </div>
                <p>Shiblu Ahmad</p>
            </div>
           
        </div>
        {/* mobile */}
        <div className="mobile-nav">
       
       <div className="menu" onClick={handleToggleNav}>
      {!isNavOpen ?  <Image
        height='auto'
        width='auto'
        alt="logo"
        src={responsiveNav}
        
        />
        :
        <CloseOutlined />
      }
       </div>
        
       <div>
        <Image
        height={30}
        width='auto'
        alt="logo"
        src={logo}
        
        />
       </div>
       {/* left */}
       <div style={{display:'flex' , alignItems:'center' , gap:'15px'}}>
           
           <Image
           height={15}
           width='auto'
           alt="notification"
           src={notification}

           />
         <div className="Image-container">
         <Image
           className="img"
           height='auto'
           width='auto'
           alt="notification"
           src={profile}
           />
         </div>
          
       </div>
       
        </div>

        {/* nav */}
       
        {isNavOpen && <div className="nav">
            {/* logo */}
            <div className='img-logo'>
                <Image
                alt='logo'
                    height='auto'
                    width='auto'
                    src={logo}
                />
            </div>
            {/* main menu */}
            <div className='main-menu'>
                Main Menu.....
            </div>
            
        {/* all dashboardLinks */}
        <div>
                
                <Link className='dashboard' href="/dashboard">
                <Image
                    height='auto'
                    alt='dashboard'
                    width='auto'
                    src={dashboardIcon}
                />
                   <span>Dashboard</span>
                </Link>
                <Link  className="link" href="/dashboard">
                <Image
                    height='auto'
                    alt='users'
                    width='auto'
                    src={users}
                />
                   <span>Users</span>
                </Link>
                <Link className='link'  href="/dashboard">
                <Image
                    height='auto'
                    alt='chat'
                    width='auto'
                    src={chat}
                />
                   <span>chat</span>
                </Link>
                <Link className="link"  href="/dashboard">
                <Image
                    height='auto'
                    alt='beSocial'
                    width='auto'
                    src={social}
                />
                   <span>Be social</span>
                </Link>
                <Link className="link"  href="/dashboard">
                <Image
                    height='auto'
                    alt='events'
                    width='auto'
                    src={events}
                />
                   <span>Events</span>
                </Link>
                <Link  className="link" href="/dashboard">
                <Image
                    height='auto'
                    alt='package'
                    width='auto'
                    src={packages}
                />
                   <span>Package</span>
                </Link>
                <Link className='link'  href="/dashboard">
                <Image
                    height='auto'
                    alt='payment'
                    width='auto'
                    src={payment}
                />
                   <span>Payment</span>
                </Link>
                <Link className="link"  href="/dashboard">
                <Image
                alt='portal'
                    height='auto'
                    width='auto'
                    src={portal}
                />
                   <span>Portal Management</span>
                </Link>
                <Link  className="link" href="/dashboard">
                <Image
                alt='contact'
                    height='auto'
                    width='auto'
                    src={contact}
                />
                   <span>Contact Management</span>
                </Link>
                <Link  className="link" href="/dashboard">
                <Image
                alt='support'
                    height='auto'
                    width='auto'
                    src={support}
                />
                   <span>Support</span>
                </Link>
                <Link  className="logout" href="/dashboard">
                <Image
                alt='logout'
                    height='auto'
                    width='auto'
                    src={logout}
                />
                   <span style={{color:'red'}}>Logout</span>
                </Link>
            </div>
       </div>}
      

        </>
    );
};

export default DashboardTop;