/* eslint-disable no-unused-vars */
import React from 'react';
import SubscribeForm from '../SubscribeForm/SubscribeForm.jsx/';
import Feedback from '../Feedback/Feedback.jsx/';
import './Home.css';
import heroPic from "../../assets/image.png";

const Home = () => (
  <main className="home">
    <section className="hero">
      <div>
        <img src = {heroPic} alt="HeroPic" />
        <h2>Ganesha Recarnation : A holy moment...</h2>
        <p>Art</p>
        <p>Loathing moment between slaves and Mata Parvati draws an intensive appealing moment & lovable aura among everyone, in return of Lord 
         Ganesha.</p> 
      </div>
    </section>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <Feedback />
    </div>

    
    <div className='NewsLetter'>
      <SubscribeForm />
    </div>
        

  </main>
);

export default Home;
