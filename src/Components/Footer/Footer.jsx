import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="logo.png" alt="Logo" className="img-fluid mb-3" style={{ maxHeight: '50px' }} />
            <p>Maa Bagla Mukhi Restaurant</p>
            <p>A place to savor the best flavors!</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="fas fa-envelope"></i> info@example.com</p>
            <p><i className="fas fa-phone"></i> +1 123 456 789</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</p>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
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
