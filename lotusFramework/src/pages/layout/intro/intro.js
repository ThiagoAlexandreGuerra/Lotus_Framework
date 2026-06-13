import StandartComponent from "../../../core/systemComponents/StandardComponent/StandardComponent.js";
import {virtualDom} from "../../../core/virtualDOM/main/virtualDom.js";
import SideBar from "../../../core/systemComponents/components/sideBar/SideBar.js";
import clickEventButton from "../../../core/systemComponents/components/buttons/clickEventButton.js";
import StandartBox from "../../../core/systemComponents/components/boxes/StandardBox.js";
import ContentAll from "../../../core/systemComponents/components/boxes/ContentAll.js";
import GetPath from "../../devTools/services/GetPath.js";
import { isIntroInitialized, setIntroInitialized , resetIntroInitialized } from "./introFunctions/introStatus.js";

export default function intro(navigation){

    if(!isIntroInitialized()){
        
        console.log("here");
        let paths = new GetPath();
        let contentMain = new ContentAll();
        contentMain
            ._addLayoutName("intro")
            .setBackgroundImage(paths._serveUrlImage(paths.IntroLotusImagePng))
            .setPaddingBottom("")
            .setBackgroundColor("#000000b9");
        
        virtualDom(contentMain.release());
        
        setTimeout(()=>{
            console.log("callNextClass");
            navigation._setNextLayoutClass("explanations");
            setIntroInitialized();
        }, 10000)
        
    }else{
         navigation._setNextLayoutClass("explanations");
    }
}

