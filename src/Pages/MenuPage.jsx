import React from 'react';
import MenuComponent from '../Components/MenuComponent/MenuComponent'

export function MenuPage() {
    const menu = [
    { dish_name: "Pizza", price: 10, category: "Italian", subcategory: "Vegetarian" },
    { dish_name: "Pasta", price: 12, category: "Italian", subcategory: "Vegetarian" },
    { dish_name: "Burger", price: 8, category: "American", subcategory: "Vegetarian" },
    { dish_name: "Steak", price: 20, category: "American", subcategory: "Non-vegetarian" },
    { dish_name: "Sushi", price: 15, category: "Japanese", subcategory: "Non-vegetarian" },
    { dish_name: "Ramen", price: 13, category: "Japanese", subcategory: "Vegetarian" },
    { dish_name: "Tacos", price: 9, category: "Mexican", subcategory: "Vegetarian" },
    { dish_name: "Enchiladas", price: 11, category: "Mexican", subcategory: "Vegetarian" },
    { dish_name: "Pad Thai", price: 14, category: "Thai", subcategory: "Vegetarian" },
    { dish_name: "Green Curry", price: 16, category: "Thai", subcategory: "Vegetarian" }
  ];
  return (
    <div className='MenuPage'>
      
      <MenuComponent menu={menu} />
    </div>
  );
}

