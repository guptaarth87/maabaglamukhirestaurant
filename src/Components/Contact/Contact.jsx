import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
        <div className="text-center heading">Contact Us</div>
      <div className="row mt-4">
        <div className="col-md-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.0643712843!2d-0.24167972817070326!3d51.52877184195695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ebe464373b%3A0x8203222c5d6bf66f!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1630425721467!5m2!1sen!2sus"
            width="100%"
            height="210px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p className="card-text"><strong>Phone:</strong> +1 123 456 789</p>
              <p className="card-text"><strong>Email:</strong> info@example.com</p>
              <p className="card-text"><strong>Address:</strong> 123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
