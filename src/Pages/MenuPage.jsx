import React from 'react';
import MenuComponent from '../Components/MenuComponent/MenuComponent'

export function MenuPage() {
    const menu = [
    { dish_name: "Pizza", price: 10, category: "Beverages", subcategory: "Vegetarian" },
    { dish_name: "Pasta", price: 12, category: "Beverages", subcategory: "Vegetarian" },
    { dish_name: "Burger", price: 8, category: "Main Course", subcategory: "Vegetarian" },
    { dish_name: "Steak", price: 20, category: "Main Course", subcategory: "Non-vegetarian" },
    { dish_name: "Sushi", price: 15, category: "Desserts", subcategory: "Non-vegetarian" },
    { dish_name: "Ramen", price: 13, category: "Desserts", subcategory: "Vegetarian" },
    { dish_name: "Tacos", price: 9, category: "Starters", subcategory: "Vegetarian" },
    { dish_name: "Enchiladas", price: 11, category: "Starters", subcategory: "Vegetarian" },
    { dish_name: "Pad Thai", price: 14, category: "Fast Food", subcategory: "Vegetarian" },
    { dish_name: "Green Curry", price: 16, category: "Fast Food", subcategory: "Vegetarian" },
    { dish_name: "Pav extra", price: 14, category: "Extras", subcategory: "Vegetarian" },
    { dish_name: "Roti Extra", price: 16, category: "Extras", subcategory: "Vegetarian" }
  
];
  return (
    <div className='MenuPage'>
      
      <MenuComponent menu={menu} />
    </div>
  );
}

