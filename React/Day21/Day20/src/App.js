import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import DineOption from "./Components/DineOption";
import Restaurant from "./Components/Restaurant";



// Header section: Let's build it

function App(){
    
    return(
       <>
       <Header></Header>
       <FoodOption></FoodOption>
       <GroceryOption></GroceryOption>
       <DineOption></DineOption>
       <Restaurant></Restaurant>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://cors-anywhere.herokuapp.com/"; 


