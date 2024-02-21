import React, { useState } from 'react';

const MenuComponent = ({ menu }) => {
  const [selectedCategory, setSelectedCategory] = useState("Italian");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Extract categories from menu
  const categories = [...new Set(menu.map(item => item.category))];

  // Extract unique subcategories based on selected category
  const getSubcategories = (category) => {
    const subcategories = menu
      .filter(item => item.category === category)
      .map(item => item.subcategory);
    return [...new Set(subcategories)];
  };

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedSubcategory(null); // Reset subcategory selection when changing category
  };

  return (
    <div className="container">
       
      <h2 className="text-center mt-4 heading">Menu Categories</h2>
      <div className="row mt-4">
        {categories.map((category, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className={`card ${selectedCategory === category ? "bg-primary text-white" : ""}`} onClick={() => handleCategoryClick(category)}>
              <div className="card-body">
                <h5 className="card-title card-heading-text">{category}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-center heading">Menu</h2>
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
                        {menu.filter(item => item.category === selectedCategory && item.subcategory === subcategory).map((item, i) => (
                          <li key={i} className="list-group-item">
                            {item.dish_name} - ${item.price}
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