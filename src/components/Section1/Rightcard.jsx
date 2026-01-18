import React from "react";
import RightCardContent from "./RightCardContent";

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0 w-80 overflow-hidden relative rounded-4xl ">
      <img className=" h-full w-full  object-cover " src={props.img} alt="" />
      <div className="absolute inset-0 bg-black/57"></div>
      <RightCardContent id={props.id} tag={props.tag} />
    </div>
  );
};

export default Rightcard;
