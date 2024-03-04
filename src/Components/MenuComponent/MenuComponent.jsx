import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MenuComponent.css';
import axios from 'axios';
import API_URL from '../../_helper';

const MenuComponent = ({ menu }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const [subcategoryData, setSubcategoryData] = useState([]);

  // Extract categories from menu
  const categories = [...new Set(menu.map(item => item.item_category))];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}getsubcategory/${selectedCategory}`);
        setSubcategoryData(response.data);
        console.log("fetched subcategory data");
        console.log(subcategoryData);
      } catch (error) {
        console.error('Error fetching subcategory data:', error);
      }
    };
  
    fetchData();
  
  },[selectedCategory]);
  
  // Extract unique subcategories based on selected category
  const getSubcategories = (category) => {
    const subcategories = menu
      .filter(item => item.item_category === category)
      .map(item => item.item_subcategory);
    return [...new Set(subcategories)];
  };

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? category : category);
    setSelectedSubcategory(null); // Reset subcategory selection when changing category
  };

  return (
    <div className="container">
       
      <h2 className="text-center mt-4 heading">Menu Categories</h2>
      <div className="row mt-4">
        {categories.map((category, index) => (
          <div className=" col-sm-4 col-lg-2 col-md-2 mb-3" key={index}>
            <div className={`card ${selectedCategory === category ? "shadow-lg rounded transform scale-150 text-white" : ""}`} onClick={() => handleCategoryClick(category)}>
              <img className="imageControl" src={`../../src/assets/Category_Img/${category}.jpg`}/>
              <div className="card-body">
                <h6 className="card-title card-heading-text">{category}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-center heading">Menu</h2>
          <h4>Results for {selectedCategory}</h4>
          {selectedCategory && (
            <div className="accordion " id="accordionSubcategories">
              {getSubcategories(selectedCategory).map((subcategory, idx) => (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header " id={`heading${idx}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={() => setSelectedSubcategory(selectedSubcategory === subcategory ? null : subcategory)}
                      aria-expanded={selectedSubcategory === subcategory ? "true" : "false"}
                      aria-controls={`collapse${idx}`}
                   
                   >
                      {subcategory}
                    </button>
                  </h2>
                  <div
                    id={`collapse${idx}`}
                    className={`accordion-collapse collapse ${selectedSubcategory === subcategory ? "show" : ""}`}
                    aria-labelledby={`heading${idx}`}
                    data-bs-parent="#accordionSubcategories"
                  >
                    <div className="accordion-body">
                      <ul className="list-group">
                        {menu.filter(item => item.item_category === selectedCategory && item.item_subcategory === subcategory).map((item, i) => (
                          <li key={i} className="list-group-item">
                            {item.item_name} - {item.item_price} INR
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;