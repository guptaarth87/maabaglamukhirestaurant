import React from 'react';
import Beverages from '../../assets/Category_Img/Beverages.jpg';
import ColdDrinks from '../../assets/Category_Img/Cold Drinks.jpg';
import Desserts from '../../assets/Category_Img/Desserts.jpg';
import FastFood from '../../assets/Category_Img/Fast Food.jpg';
import IceCreams from '../../assets/Category_Img/Ice Creams.jpg';
import MainCourse from '../../assets/Category_Img/Main Course.jpg';
import SouthIndian from '../../assets/Category_Img/South Indian.jpg';
import Starters from '../../assets/Category_Img/Starters.jpg';
import Thali from '../../assets/Category_Img/Thali.jpg';

import './ProductCategoryDisplay.css';

export default function ProductCategoryDisplay() {
  return (
    <>
   <div className="heading text-center">Quick Menu</div>
   
   <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={Beverages} className="card-img-top image-control-fit img-size-control" alt="Beverages" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">Beverages</h5>
              <p className="card-text card-description-text card-description-text">Quench your thirst with our refreshing selection of beverages.</p>
              
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={FastFood} className="card-img-top image-control-fit img-size-control" alt="Fast Food" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">Fast Food</h5>
              <p className="card-text card-description-text">Satisfy your cravings with our mouthwatering fast food items.</p>
              <a href={`/menupage?category=Fast Food`}>View Menu</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={ColdDrinks} className="card-img-top image-control-fit img-size-control" alt="Main Course" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">Cold Drinks</h5>
              <p className="card-text card-description-text">Indulge in our delicious main courses for a satisfying meal.</p>
              <a href={`/menupage?category=Cold Drinks`}>View Menu</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4 ">
             <div className="card card-shadow-effect">
               <img src={MainCourse} className="card-img-top image-control-fit img-size-control" alt="Main Course" />
               <div className="card-body">
                 <h5 className="card-title text-center card-heading-text ">Main Course</h5>
                 <p className="card-text card-description-text">Indulge in our delicious main courses for a satisfying meal.</p>
               </div>
             </div>
           </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={Desserts} className="card-img-top image-control-fit img-size-control" alt="Desserts" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">Desserts</h5>
              <p className="card-text card-description-text">Treat yourself with our heavenly selection of desserts.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={Starters} className="card-img-top image-control-fit img-size-control" alt="Starters" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">Starters</h5>
              <p className="card-text card-description-text">Whet your appetite with our irresistible starter options.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={MainCourse} className="card-img-top image-control-fit img-size-control" alt="Extras" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">Extras</h5>
              <p className="card-text card-description-text">Enhance your meal with our delicious selection of extras.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={SouthIndian} className="card-img-top image-control-fit img-size-control" alt="Extras" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">South Indian</h5>
              <p className="card-text card-description-text">Enhance your meal with our delicious selection of extras.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={IceCreams} className="card-img-top image-control-fit img-size-control" alt="Extras" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">Ice Creams</h5>
              <p className="card-text card-description-text">Enhance your meal with our delicious selection of extras.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-shadow-effect">
            <img src={Thali} className="card-img-top image-control-fit img-size-control" alt="Extras" />
            <div className="card-body">
              <h5 className="card-title text-center card-heading-text">Thali</h5>
              <p className="card-text card-description-text">Enhance your meal with our delicious selection of extras.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
