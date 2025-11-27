import React from 'react'
import Typed from 'typed.js';

const TypedAnimation = ({className}) => {
   // Create reference to store the DOM element containing the animation
   const el = React.useRef(null);

   React.useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ['Fasal Sarathi', 'Sustainable Agriculture', 'Smart Farming', 'Crop Yield Optimization', 'Fertilizer Savings', 'Eco-Friendly Practices', 'Cost-Effective Solutions', 'Fasal Sarathi...'],
       typeSpeed: 100,
     });
 
     return () => {
       // Destroy Typed instance during cleanup to stop animation
       typed.destroy();
     };
   }, []);
 
   return (
     
       <span ref={el} className={`${className}`} />
    
   );
}

export default TypedAnimation