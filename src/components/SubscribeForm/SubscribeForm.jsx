// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import './SubscribeForm.css';

// const SubscribeForm = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thanks for subscribing with ${email}`);
//     setEmail('');
//   };

//   return (
//     <form className="subscribe-form" onSubmit={handleSubmit}>
//       <input 
//         type="email" 
//         value={email} 
//         onChange={(e) => setEmail(e.target.value)} 
//         placeholder="Your email address..." 
//         required 
//       />
//       <button type="submit"> Let’s Keep in touch</button>
//     </form>
//   );
// };

// export default SubscribeForm;

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SubscribeForm.css';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <div className="subscribe-container">
      <h2 className="subscribe-heading">JOIN OUR NEWSLETTER</h2>
      <p className="subscribe-description">
        Subscribe for the latest updates in contemporary art & design!
      </p>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address..."
            required
          />
          <button type="submit">LET’S KEEP IN TOUCH</button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;

