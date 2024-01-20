"use client"
import Image from 'next/image';
import './DashboardNav.scss'
import logo from '../../../public/assets/images/mainLogo.png'
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

import Link from 'next/link';
import { useRouter } from 'next/navigation';
const DashboardNav = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <div className='container'>
            {/* logo */}
            <div className='img-logo'>
                <Image
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
                    width='auto'
                    src={dashboardIcon}
                />
                   <span>Dashboard</span>
                </Link>
                <Link  className="link" href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={users}
                />
                   <span>Users</span>
                </Link>
                <Link className='link'  href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={chat}
                />
                   <span>chat</span>
                </Link>
                <Link className="link"  href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={social}
                />
                   <span>Be social</span>
                </Link>
                <Link className="link"  href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={events}
                />
                   <span>Events</span>
                </Link>
                <Link  className="link" href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={packages}
                />
                   <span>Package</span>
                </Link>
                <Link className='link'  href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={payment}
                />
                   <span>Payment</span>
                </Link>
                <Link className="link"  href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={portal}
                />
                   <span>Portal Management</span>
                </Link>
                <Link  className="link" href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={contact}
                />
                   <span>Contact Management</span>
                </Link>
                <Link  className="link" href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={support}
                />
                   <span>Support</span>
                </Link>
                <Link  className="logout" href="/dashboard">
                <Image
                    height='auto'
                    width='auto'
                    src={logout}
                />
                   <span style={{color:'red'}}>Logout</span>
                </Link>
            </div>



        </div>
    );
};

export default DashboardNav;