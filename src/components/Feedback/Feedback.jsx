/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "./Feedback.css";

const feedbackData = [
  {
    quote: "Art is my personal dialogue with the world. Through each brushstroke and color choice, I convey emotions and ideas that words alone can’t express. It’s an ongoing journey of self-discovery and expression. Every piece I create is a reflection of my inner world, a manifestation of my thoughts, dreams, and experiences. It’s both a release and a discovery, constantly evolving as I grow.",
    name: "Ashutosh Rai",
    location: "from Artisan Attic",
    image: "HeroPic.png", // Replace with actual image URL
  },
  {
    quote: "Creating art has always been a source of healing for me. It's a space where I can truly express myself without boundaries. Every canvas is a mirror of my emotions, and every stroke is a story untold.",
    name: "Priya Kapoor",
    location: "from Canvas Chronicles",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    quote: "Art allows me to connect with others in ways that words can't. It's a universal language, one that speaks directly to the heart. Each piece I create is a bridge to understanding and connection.",
    name: "Ravi Sharma",
    location: "from Creative Minds",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
];

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
//     <div className="feedback-container">
//       <h2 className="feedback-title">People about Art:</h2>
//       <Slider {...settings} className="feedback-slider">
//         {feedbackData.map((feedback, index) => (
//           <div key={index} className="feedback-slide">
//             <div className="feedback-card">
//               <div className="feedback-content">
//                 <p className="feedback-quote">“{feedback.quote}”</p>
//                 <div className="feedback-author">
//                   <h4>{feedback.name}</h4>
//                   <p>{feedback.location}</p>
//                 </div>
//               </div>
//               <div className="feedback-image">
//                 <img src={feedback.image} alt={feedback.name} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Feedback;
      <div className="feedback-container">
        <div className="feedback-card">
          <div className="feedback-content">
            <p className="feedback-quote">
              “Art is my personal dialogue with the world. Through each brushstroke and color choice, I convey emotions and ideas that words alone can’t express.”
            </p>
            <div className="feedback-author">
              <h4>Ashutosh Rai</h4>
              <p>from Artisan Attic</p>
            </div>
          </div>
          <div className="feedback-image">
            <img
              src="https://via.placeholder.com/80" // Placeholder image
              alt="Kunal Singh"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Feedback;
  
