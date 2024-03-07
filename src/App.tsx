import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import {NavBar} from "./components/NavBar"
import {Card} from "./components/Card"
import { Hero } from './components/Hero';

interface Featured {
  bundle: Bundle,
  devName: string,
  layout: {
    name: string,
    category: string,
  }
  items: Item[],
}

interface Bundle {
  name: string,
  image: string,
  info: string,
}

interface Item {
  name: string,
  images: {
    featured: string,
  }
}

function App() {
  const [nonBundles, setNonBundles] = useState([])
  const [bundles, setBundles] = useState([])

  const [heroItem, setHeroItem] = useState<Item>({
    name: '',
    images: {
      featured: '' 
    }
  });

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios('https://fortnite-api.com/v2/shop/br');

        const heItem = response.data.data.featured.entries[0].items[0];
        const featured = response.data.data.featured.entries;

        const featuredBundles = featured.filter((entry: { bundle: Bundle; }) => entry.bundle !== null)
        const featuredItems = featured.filter((entry: { bundle: Bundle; }) => entry.bundle == null)
        
        setNonBundles(featuredItems);
        setBundles(featuredBundles);
        setHeroItem(heItem);

        console.log("CONSOLE LOG HERE")
        console.log(heItem)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [] )

  return (
    <div className="App">

      {/* <NavBar/> */}

      {/* HERO */}
      <Hero item={heroItem}/>
      
      <h2>Bundles</h2>  
      <div className='cards'>
        {bundles.map((bundle: Featured) =>  
          <>
            <div className = "card">
              <img src={bundle.bundle.image} alt=""/>
              <div className="card-content">
                <h2>
                  {bundle.bundle.name}
                </h2>
                <p>
                  {bundle.bundle.info}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      
      <h2>Items</h2>
      <div className='cards'>
        {nonBundles.map((nonBundle: Featured) =>
          <Card item={nonBundle.items[0]}/>
        )}
      </div>
    </div>
  );
}

export default App;
