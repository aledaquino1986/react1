import React from "react";

const Cards = ({text, icon, amount, textColor, borderLeft}) => {

  return ( 

  


  <div className="col-md-4 mb-4">
    <div className= {borderLeft}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className={textColor}> {text}</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{amount}</div>
          </div>
          <div className="col-auto">
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </div>
  </div>




)

}



export default Cards