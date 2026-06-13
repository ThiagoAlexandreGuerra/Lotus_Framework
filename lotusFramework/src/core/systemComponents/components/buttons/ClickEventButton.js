import StandartButton from "./StandardButton.js";
import getId from "../../componentIdentify/componentId/getId.js";

export default class ClickEventButton extends StandartButton{

    constructor(...function_){

        super();
 
        this._classIdentify = "CKB";
        this._id = getId(this._classIdentify);
        this._function = this._function.concat(function_);
        
        this._className.push("ClickEventButton");

        this._updatePropertyConfig ({

                className:          this.getElementClassNames(),
                id:                 this._id,
        });
    }
}