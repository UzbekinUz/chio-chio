import MenHaircuts from "../pages/men";
import ChioServicesSlider from "../pages/barbers";
import Features from "../pages/gallary";
import Imges from "../pages/imges";
import Price from "../pages/price";

function Home() {
    return ( 
        <>
            {/* <Mainbody activeTab={activeTab}/> */}
            <MenHaircuts/>
            <Features/>
            <ChioServicesSlider/>
            <Price />
            
            <Imges />
        </>
     );
}

export default Home;