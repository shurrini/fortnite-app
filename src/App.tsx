import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface Item {
  devName: string,
}

function App() {
  const [items, setItems] = useState([])

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios('https://fortnite-api.com/v2/shop/br');
        const itemShopFeatured = response.data.data.featured.entries;
        setItems(itemShopFeatured);
        console.log(itemShopFeatured)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [] )

  return (
    <div className="App">
      <h1>Fortnait shop</h1>      
      <ul>
        {items.map((item: Item) =>  <li>{item.devName}</li> )}
      </ul>
    </div>
  );
}

export default App;
