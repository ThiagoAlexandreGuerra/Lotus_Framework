import getId from "../../componentIdentify/componentId/getId.js";
import StandartComponent from "../../StandardComponent/StandardComponent.js";

export default class StandardBox extends StandartComponent{

    constructor(isAbleToMove = false){

        super();

        this._className.push("StandartBox");
        this._classIdentify = "SDB";
        this._id = getId(this._classIdentify);

        this._isAbleToMove = isAbleToMove;
        this._updateStyleConfig({

            alignItems            : "center",
            backgroundColor       : "rgb(34, 34, 34)",
            borderLeft            : "2px solid white",
            borderRadius          : "5px",
            borderRight           : "2px solid white",
            backgroundRepeat      : "no-repeat",
            backgroundPosition    : "center",
            backgroundSize        : "50px 50px",
            boxShadow             : "0px 0px 10px 10px rgba(0,0,0,0.5)",
            color                 : "#dadada",
            display               : "flex",
            flexDirection         : "column",
            justifyContent        : "center",
            marginBottom          : "20px",
            marginTop             : "10px",
            overflow              : "auto",
            overflowX             : "hidden",
            padding               : "10px",
            position              : "relative",
            left                  : "50%",
            top                   : "50%",
            transform             : "translate(-50%, -0%)",
            width                 : "400px",
            height                : "400px",
            wordWrap              : "break-word",
        })

        this._updatePropertyConfig({

            className:          this.getElementClassNames(),
            id:                 this._id,
        })
        
    }

    _removeScrollbarConfig(){
    
        this._updateStyleConfig({
            height      : "auto",
            minHeight   : this.getHeightPX(),
            overflow    : "",
            overflowY   : "hidden",

        })
    }

    _removeStandartPosition(){

        this._updateStyleConfig({

            left         : "",
            top          : "",
            transform    : "",

        })
    }

    
}