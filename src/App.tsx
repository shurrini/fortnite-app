import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import bundlesBG from './images/bundles_background.webp';

import {NavBar} from "./components/NavBar"
import {Card} from "./components/Card"
import { BundleCard } from './components/BundleCard';
import { Hero } from './components/Hero';

interface Featured {
  bundle: Bundle,
  devName: string,
  finalPrice: Number,
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

        const heItem = response.data.data.featured.entries[1].items[0];
        const featured = response.data.data.featured.entries;

        const featuredBundles = featured.filter((entry: { bundle: Bundle; }) => entry.bundle !== null)
        const featuredItems = featured.filter((entry: { bundle: Bundle; }) => entry.bundle == null)
        
        setNonBundles(featuredItems);
        setBundles(featuredBundles);

        setHeroItem(heItem);

        console.log("CONSOLE LOG HERE")
        console.log(featuredBundles)
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
    
      <div className="bundles-container">
        <div className="bundle-cards">
          {bundles.map((item: Featured) =>
            <BundleCard item={item}/>
          )}
        </div>
        
        <div className='bundles'>
          <img src={bundlesBG} alt="Bundles background" />
          <div className='bundles1'>BUNDLES</div>
          <div className='bundles2'>BUNDLES</div>
          <div className='bundles3'>BUNDLES</div>
        </div>
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
