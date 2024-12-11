/* eslint-disable no-unused-vars */
// import React from 'react';
import React, { useState } from 'react';
import './Collections.css';
import picOne from "../../assets/abstract 1.jpg";
import PicTwo from "../../assets/landscape-1.jpg";
import PicThree from "../../assets/abstract 2.jpg";
import picFour from "../../assets/landscape-2.jpg";
import picFive from "../../assets/abstract 3.jpg";
import picSix from "../../assets/abstract 4.jpg";
import picSeven from "../../assets/landscape-3.jpg";
import picEight from "../../assets/pic-6.png";
import picNine from "../../assets/portrait 11.jpg";
import picTen from "../../assets/portrait 2.jpg";
import pic11 from "../../assets/portrait 3.jpg";
import pic12 from "../../assets/portrait 4.jpg";

const Collections = ({ addToCart }) => {
  const [localCart, setLocalCart] = useState([]);
  
  const handleAddToCart = (item) => {
    setLocalCart((prevCart) => [...prevCart, item]);
    addToCart(item); 
  };

  const collections = [
    {
      id: 1,
      title: 'Abstract Art',
      description: 'Explore the world of abstract art.',
      images: [picOne, PicThree, picFive, picSix],
    },
    {
      id: 2,
      title: 'Portraits',
      description: 'Discover stunning portraits.',
      images: [picNine, picTen, pic11, pic12],
    },
    {
      id: 3,
      title: 'Landscapes',
      description: 'Immerse yourself in beautiful landscapes.',
      images: [PicTwo, picFour, picSeven, picEight],
    },
  ];

  return (
    <div className="collections">
      <h2>Our Collections</h2>
      <div className="collection-list">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-item">
            <h3>{collection.title}</h3>
            <p>{collection.description}</p>
            <div className="image-gallery">
              {collection.images.map((image, index) => (
                <div key={index} className="image-container">
                  <img
                    src={image}
                    alt={`${collection.title} ${index + 1}`}
                    className="collection-image"
                  />
                  <button
                    className="add-to-cart-button"
                    onClick={() =>
                      handleAddToCart({
                        id: `${collection.id}-${index}`,
                        title: collection.title,
                        image,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Cart List */}
      {localCart.length > 0 && (
        <div className="cart-list">
          <h3>Your Cart</h3>
          <ul>
            {localCart.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div>
                  <p>{item.title}</p>
                  <p>Item ID: {item.id}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Collections;
