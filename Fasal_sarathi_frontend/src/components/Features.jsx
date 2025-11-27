import React from 'react';
import { Brain, Target, Leaf, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Fertilizer Prediction",
      description: "Advanced machine learning algorithms analyze your soil composition, crop requirements, and environmental factors to recommend the most effective fertilizer blend."
    },
    {
      icon: Target,
      title: "Precision Crop & Soil Analytics",
      description: "Get detailed insights into your soil health, nutrient levels, and crop-specific requirements with our comprehensive analytical tools."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly and Cost-Effective",
      description: "Reduce environmental impact while maximizing your investment. Our recommendations prioritize sustainable practices that benefit both your farm and the planet."
    },
    {
      icon: Globe,
      title: "Local Language Insights",
      description: "Access expert recommendations in your preferred language with region-specific agricultural knowledge and practices."
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-transparent px-4 md:px-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Fasal-Sarathi?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your farming practices 
            and achieve sustainable agricultural success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gradient-to-br from-green-100 to-emerald-100 backdrop-blur-lg backdrop-filter p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white p-4 rounded-lg shadow-md mb-6 w-fit">
                <feature.icon className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;