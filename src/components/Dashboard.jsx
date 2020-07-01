import React from "react";
import Category from "./Category"
import Cards from "./Cards"

const Dashboard = () => {

return(

<div className="container-fluid">

				
<div className="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
</div>

<div className="row">

 
<Cards
text = "Products in Data Dase"
icon= "fas fa-clipboard-list fa-2x text-gray-300"
amount = "135"
textColor = "text-xs font-weight-bold text-primary text-uppercase mb-1"
borderLeft = "card border-left-primary shadow h-100 py-2"/>

<Cards
text = "Amount in products"
icon= "fas fa-dollar-sign fa-2x text-gray-300"
amount = "$546.456"
textColor = "text-xs font-weight-bold text-success text-uppercase mb-1"
borderLeft = "card border-left-success shadow h-100 py-2"/>

<Cards
text = "Users Quantity"
icon= "fas fa-user-check fa-2x text-gray-300"
amount = "38"
textColor = "text-xs font-weight-bold text-warning text-uppercase mb-1"
borderLeft = "card border-left-warning shadow h-100 py-2"/>

</div>
<div className="row">
  
  <div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
      </div>
      <div className="card-body">
        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="assets/images/product_dummy.svg" alt="dummy"/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
        <a target="_blank" rel="nofollow" href="/">View product detail</a>
      </div>
    </div>
  </div>


  <div className="col-lg-6 mb-4">						
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
      </div>
      <div className="card-body">
        <div className="row">
          
          <Category
          text = "Category 1"
          />
          <Category
          text = "Category 2"/>
          <Category
          text = "Category 3"/>
          <Category
          text = "Category 4"/>
          <Category
          text = "Category 5"/>
          <Category
          text = "Category 6"/>
          
          
        
         
        </div>
      </div>
    </div>
  </div>
</div>
</div>

)



}

export default Dashboard