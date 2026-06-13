import StandartBox from "../boxes/StandardBox.js";
import getId from "../../componentIdentify/componentId/getId.js";
import StandartComponent from "../../StandardComponent/StandardComponent.js";


export default class GridLayout extends StandartBox {

    constructor(cardAmount = 1, columns = 1) {
 
        super();

        this._cardAmount = cardAmount;
        this._columns = columns;

        this._className.push("CardGrid");
        this._classIdentify = "CDG";
        this._id = getId(this._classIdentify);

        this._swapStyleConfig({
            width: "500px",
            height: "auto",
            display: "grid",
            gridTemplateColumns: `repeat(${this._columns}, 1fr)`,
            gap: "10px",
            padding: "10px",
            boxSizing: "border-box",
            backgroundColor: "rgb(34, 34, 34)",
            left                  : "250px",
            position: "relative"
        });

        this._updatePropertyConfig({
            id: this._id,
            className: this.getElementClassNames()
        });

        this._createCards();
    }

    _createCards() {

        for (let i = 0; i < this._cardAmount; i++) {

            const card = new StandartComponent();

            card
                .setPosition("static")
                .setWidth("100%")
                .setHeight("200px")
                .setBackgroundColor("black");

            this._children.push(card);
        }

    
    }

    getCard(index){
        
        if(!((index>=0)&&(index <= this._children.length))){throw new Error("index invalid for getCard!!")}

        return this._children[index];
    }

    getCardLength(){
        return this._children.length;
    }
    
}