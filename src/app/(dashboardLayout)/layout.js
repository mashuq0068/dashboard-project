import DashboardNav from "@/components/DashboardNav/DashboardNav";
import styles from './page.module.scss'



const DashboardLayout = ({children}) => {
    return (
        <div style={{display : 'flex'}}>
              <DashboardNav></DashboardNav>
           <div>
           {children}
           </div>
        </div>
    );
};

export default DashboardLayout;