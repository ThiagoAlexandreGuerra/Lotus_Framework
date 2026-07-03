import {virtualDom} from "../../../core/virtualDOM/main/virtualDom.js";
import SideBar from "../../../core/systemComponents/components/sideBar/SideBar.js";
import clickEventButton from "../../../core/systemComponents/components/buttons/clickEventButton.js";
import StandartBox from "../../../core/systemComponents/components/boxes/StandardBox.js";
import VirtualBody from "../../../core/systemComponents/components/boxes/VirtualBody.js";
import GetPath from "../../devTools/services/GetPath.js";
import { isIntroInitialized, setIntroInitialized , resetIntroInitialized } from "./introFunctions/introStatus.js";
import explanations from "../explanations/explanations.js";
export default function intro(navigation){

    if(!isIntroInitialized()){
        
        let paths = new GetPath();
        let contentMain = new VirtualBody()
            ._addLayoutName("intro")
            .setBackgroundImage((paths.getLotusLogo()))
            .setPaddingBottom("")
            .setBackgroundColor("#000000b9")
            .setBackgroundSize("800px 800px")
        contentMain.release();
        
        setTimeout(()=>{
            console.log("callNextClass");
            navigation._setNextLayoutClass("explanations");
            setIntroInitialized();
        }, 10000)
        
    }else{
         navigation._setNextLayoutClass("explanations");
    }
}

