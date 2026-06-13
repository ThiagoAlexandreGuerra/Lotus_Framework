import Navigation           from "../../core/navigation/domElementNavigator/Navigation.js";
import LayoutCoordinator    from "../../core/layoutHandler/LayoutCoordinator/LayoutCoordinator.js";
import ExecutionBlock       from "../../core/layoutHandler/ExecutionBlock/ExecutionBlock.js";
import Favicon              from "../../core/systemComponents/components/favicon/Favicon.js";

import intro            from "../layout/intro/intro.js";
import explanations     from "../layout/explanations/explanations.js";
import lab              from "../layout/lab/lab.js";
import showroom         from "../layout/showroom/showroom.js";

export default class HomeView {

    constructor() {
        this._navigation = new Navigation();
    }

    
    criarLayout(events) {
    
        new Favicon();
        
        new LayoutCoordinator(
                new ExecutionBlock({

                            existe: ["start"],

                            onEnter: [
                                () => intro(this._navigation),
                            ],
            
                            onExit: [
                                () => {events.onCleanDOMElements("intro");}
                            ],

                }), 

                new ExecutionBlock({

                            existe: ["explanations"],

                            onEnter: [
                                ()=>{explanations(this._navigation)}
                            ],

                            onExit: [
                                () => {events.onCleanDOMElements("lexplanations");}
                            ],
                }),

                new ExecutionBlock({

                            existe: ["lab"],

                            onEnter: [
                                ()=>{lab(this._navigation)}
                            ],

                            onExit: [
                                ()=> {events.onCleanDOMElements("lLab")}
                            ],
                }),

                new ExecutionBlock({

                            existe: ["showroom"],

                            onEnter: [
                                ()=>{showroom(this._navigation)}
                            ],

                            onExit: [
                                ()=> {events.onCleanDOMElements("lshowroom")}
                            ],
                }),


        
        );

    
    }


    

}