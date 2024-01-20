
import DashboardTop from "@/components/DashboardTop/DashboardTop"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DashboardNumbers from "@/components/DashboardNumbers/DashboardNumbers";
import UserAnalytics from "@/components/UserAnalytics/UserAnalytics";



const DashboardPage = () => {
return(
   <div>
   <DashboardTop></DashboardTop>
   <DashboardNumbers></DashboardNumbers>
   <UserAnalytics></UserAnalytics>
   
   </div>
)

}

export default DashboardPage