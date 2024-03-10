import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-4 rounded-top-5 footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="logo.png" alt="Logo" className="img-fluid mb-3" style={{ maxHeight: '50px' }} />
            <p style={{color : "white"}} className='card-heading-text'>Maa Bagla Mukhi Restaurant</p>
            <p style={{color : "white", marginTop : "-10px"}} className='card-description-text'>A place to savor the best flavors!</p>
          </div>
          <div className="col-md-4">
            <h5 style={{ color : "white"}} className='card-heading-text'>Contact Us</h5>
            <p style={{color : "white", marginTop : "15px"}} className='card-description-text'><i className="fas fa-envelope"></i> info@example.com</p>
            <p style={{color : "white", marginTop : "-12px"}} className='card-description-text'><i className="fas fa-phone"></i> +1 123 456 789</p>
            <p style={{color : "white", marginTop : "-12px"}} className='card-description-text'><i className="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</p>
          </div>
          <div className="col-md-4">
            <h5 style={{ color : "white"}} className='card-heading-text'>Connect With Us</h5>
            <div>
              <a href="#"><i className="fab fa-facebook fa-lg mr-3"></i></a>
              <a href="#"><i className="fab fa-twitter fa-lg mr-3"></i></a>
              <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
