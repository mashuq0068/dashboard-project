import Image from "next/image";
import notification from '../../../public/assets/images/notification.png'
import profile from '../../../public/assets/images/profilePicture.png'
import './DashboardTop.scss'


const DashboardTop = () => {
    return (
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
    );
};

export default DashboardTop;