import ClickEventButton from "../../../systemComponents/components/buttons/ClickEventButton.js";
import installApp from "./installApp.js";
import getId from "../../../systemComponents/componentIdentify/componentId/getId.js";

export default class AppInstallButton extends  ClickEventButton{

    constructor(){

        super();

        this._classIdentify = "APB";
        this._id = getId(this._classIdentify);
        
        this._className.push("AppInstallButton");

        this._updatePropertyConfig ({

                className:          this.getElementClassNames(),
                id:                 this._id,
        });
        this._function.push(installApp);
        this.setTextContent("install App");
        this.setTextAlignmentCenterCenter();
        this.setColor("white")
    }
}