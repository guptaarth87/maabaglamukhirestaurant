import React, { useState } from 'react';
import Img2 from '../../assets/Carousel_Img/2.jpg';
import FastFood from '../../assets/Category_Img/Fast Food.jpg';
import './GallaryTabComponent.css';
const GallaryTabComponent = () => {
  const [activeTab, setActiveTab] = useState('ambiance');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-5" id="gallery">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`heading nav-link ${activeTab === 'ambiance' ? 'active' : ''}`} onClick={() => handleTabClick('ambiance')}>Ambiance</button>
        </li>
        <li className="nav-item">
          <button className={`heading nav-link ${activeTab === 'food' ? 'active' : ''}`} onClick={() => handleTabClick('food')}>Food</button>
        </li>
      </ul>
      <div className="tab-content mt-4">
        {activeTab === 'ambiance' && (
          <div className="row">
            <div className="col-lg-3 col-md-5 col-sm-3 mb-3">
              <img src={Img2} className="img-fluid gallary-img-border" alt="Gallery 1" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-3 mb-3">
              <img src={Img2} className="img-fluid gallary-img-border" alt="Gallery 2" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-3 mb-3">
              <img src={Img2} className="img-fluid gallary-img-border" alt="Gallery 3" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-3 mb-3">
              <img src={Img2} className="img-fluid gallary-img-border" alt="Gallery 4" />
            </div>
          
          </div>
        )}
        {activeTab === 'food' && (
            <div className="row">
        <div className="col-lg-3 col-md-5 col-sm-3 mb-3">
        <img src={FastFood} className="img-fluid gallary-img-border" alt="Gallery 1" />
      </div>
      <div className="col-lg-3 col-md-5 col-sm-3 mb-3">
        <img src={FastFood} className="img-fluid gallary-img-border" alt="Gallery 2" />
      </div>
      <div className="col-lg-3 col-md-5 col-sm-3 mb-3">
        <img src={FastFood} className="img-fluid gallary-img-border" alt="Gallery 3" />
      </div>
      <div className="col-lg-3 col-md-5 col-sm-3 mb-3">
        <img src={FastFood} className="img-fluid gallary-img-border" alt="Gallery 4" />
      </div>
  </div>
        )}
      </div>
    </div>
  );
};

export default GallaryTabComponent;
