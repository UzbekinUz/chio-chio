import Bosh from "../elements/boshSahifa";
import MenHaircuts from "../elements/men";
import Women from "../elements/women";

function Mainbody({activeTab}) {
    return ( 
        activeTab==="Bosh sahifa"?<Bosh/>:
        activeTab==="Ayollar soch kesimi"?<Women/>:
        activeTab==="Erkaklar soch kesimi"?<MenHaircuts/>:null
     );
}

export default Mainbody;