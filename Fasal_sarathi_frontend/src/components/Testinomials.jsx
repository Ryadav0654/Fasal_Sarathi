import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab, India",
      image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Fasal-Sarathi transformed my farming. The AI recommendations increased my wheat yield by 30% while reducing fertilizer costs. It's like having an agricultural expert in my pocket!",
      crop: "Wheat Farmer"
    },
    {
      name: "Maria Santos",
      location: "Brazil",
      image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The precision soil analytics helped me understand my land better than ever. My soybean harvest improved significantly, and I'm contributing to sustainable farming practices.",
      crop: "Soybean Producer"
    },
    {
      name: "David Thompson",
      location: "Iowa, USA",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "As a corn farmer, I was skeptical about AI recommendations. But Fasal-Sarathi's insights have consistently outperformed my traditional methods. Highly recommended!",
      crop: "Corn Producer"
    },
    {
      name: "Priya Patel",
      location: "Gujarat, India",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The local language support made it so easy to understand. My cotton yield improved by 25%, and I'm saving money on fertilizers. Thank you, Fasal-Sarathi!",
      crop: "Cotton Farmer"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Farmers Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of farmers who have transformed their agricultural practices with Fasal-Sarathi
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                &quot;{testimonials[currentIndex].quote}&quot;
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-green-600 font-medium">
                    {testimonials[currentIndex].crop}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevSlide}
              className="bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-full p-3 shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-full p-3 shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;