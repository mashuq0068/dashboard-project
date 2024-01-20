
import DashboardTop from "@/components/DashboardTop/DashboardTop"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DashboardNumbers from "@/components/DashboardNumbers/DashboardNumbers";
import UserAnalytics from "@/components/UserAnalytics/UserAnalytics";
import TimeOnSite from "@/components/TimeOnSite/TimeOnSite";
import UserGrowth from "@/components/UserGrowth/UserGrowth";




const DashboardPage = () => {
return(
   <div>
   <DashboardTop></DashboardTop>
   <DashboardNumbers></DashboardNumbers>
   <UserAnalytics></UserAnalytics>
   <UserGrowth></UserGrowth>
   
   
   
   
   </div>
)

}

export default DashboardPage