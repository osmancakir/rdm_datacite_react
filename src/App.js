import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore,} from "little-state-machine";
import MandatoryElements from "./Pages/MandatoryElements";
import RecommendedElements from "./Pages/RecommendedElements";
import OtherElements from "./Pages/OtherElements"
import Result from "./Pages/Result";


import "./styles.css";


createStore({
    data: {}
});

//window.STATE_MACHINE_GET_STORE({ storeName?: "createStore" , data?: "data:{}"})

function App() {

    return (
        <StateMachineProvider>


            <h1> DataCite Metadata Generator Kernel 4.3 </h1>
                        <Router>
                            <Route exact path="/" component={MandatoryElements} />
                            <Route path="/recommendedelements" component={RecommendedElements} />
                            <Route path="/otherelements" component={OtherElements} />
                            <Route path="/result" component={Result} />
                        </Router>



        </StateMachineProvider>
    );
}

export default App;
