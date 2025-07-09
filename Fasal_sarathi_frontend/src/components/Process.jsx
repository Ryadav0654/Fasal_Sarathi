import React from 'react';
import { Upload, Brain, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Crop & Soil Info",
      description: "Simply upload your soil test results, crop type, and field conditions. Our system accepts various formats and guides you through the process.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI Predicts the Best Fertilizer",
      description: "Our advanced AI algorithms analyze your data against thousands of successful farming cases to recommend the optimal fertilizer blend.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Apply, Track & Optimize Yield",
      description: "Follow our recommendations, track your crop progress, and continuously optimize your fertilizer strategy for maximum yield and sustainability.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Fasal-Sarathi in three simple steps and transform your farming approach
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${step.color} p-4 rounded-full w-fit mx-auto mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-600 font-bold">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className=" md:block absolute top-16 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-white"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;