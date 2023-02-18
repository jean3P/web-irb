import React from "react";
import CardItem from "./CardItem";
import "./Cards.css"
import img1 from "../resources/images/img-1.jpg"
import img2 from "../resources/images/img-2.jpg"
import img3 from "../resources/images/img-3.jpg"
import img4 from "../resources/images/img-4.jpg"
import img5 from "../resources/images/img-5.jpg"
// import img6 from "../resources/images/img-6.jpg"
// import img7 from "../resources/images/img-7.jpg"
// import img8 from "../resources/images/img-8.jpg"
// import img9 from "../resources/images/img-9.jpg"

function Cards() {
  return (
    <div className={"cards"}>
       <h1>News!</h1>
       <div className={"cards__container"}>
         <div className={"cards__wrapper"}>
           <ul className={"cards__item"}>
             <CardItem src={img1} text={"Explore the hidden waterfall depp inside in the Amazon Jungle"} label={"Adventure"} path={"/services"}/>
             <CardItem src={img2} text={"Explore the hidden waterfall depp inside in the Amazon Jungle"} label={"Adventure"} path={"/services"}/>
           </ul>
           <ul className={"cards__item"}>
             <CardItem src={img3} text={"Explore the hidden waterfall depp inside in the Amazon Jungle"} label={"Adventure"} path={"/services"}/>
             <CardItem src={img4} text={"Explore the hidden waterfall depp inside in the Amazon Jungle"} label={"Adventure"} path={"/services"}/>
             <CardItem src={img5} text={"Explore the hidden waterfall depp inside in the Amazon Jungle"} label={"Adventure"} path={"/services"}/>
           </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
