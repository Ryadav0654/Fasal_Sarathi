import { useState } from 'react';
import { Star, Send, ThumbsUp, MessageCircle, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';


const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
    recommend: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const stats = [
    { icon: Users, label: 'Active Users', value: '50,000+', color: 'text-blue-600' },
    { icon: TrendingUp, label: 'Yield Improvement', value: '35%', color: 'text-green-600' },
    { icon: Award, label: 'Success Rate', value: '94%', color: 'text-yellow-600' },
    { icon: ThumbsUp, label: 'Satisfaction', value: '4.8/5', color: 'text-purple-600' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Punjab, India',
      rating: 5,
      message: 'Fasal-Sarathi completely transformed my farming approach. The AI recommendations increased my wheat yield by 30% while reducing costs.',
      date: '2024-01-15',
      verified: true
    },
    {
      name: 'Maria Santos',
      location: 'Brazil',
      rating: 5,
      message: 'The precision soil analytics helped me understand my land better. My soybean harvest improved significantly with sustainable practices.',
      date: '2024-01-20',
      verified: true
    },
   
    {
      name: 'Priya Patel',
      location: 'Gujarat, India',
      rating: 5,
      message: 'The local language support made it so easy to understand. My cotton yield improved by 25% and I am saving money on fertilizers.',
      date: '2024-02-01',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="pt-10 pb-12 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Voice Matters
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Help us improve Fasal-Sarathi by sharing your experience. Your feedback drives innovation 
              and helps us serve farmers better worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-full p-4 w-fit mx-auto mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Feedback</h2>
              <p className="text-gray-600">
                Tell us about your experience with Fasal-Sarathi and help us improve our platform.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-green-800">Thank you for your feedback! We appreciate your input.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    State*
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Feedback Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="general">General Feedback</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="improvement">Improvement Suggestion</option>
                  <option value="support">Support Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Overall Rating *
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-colors"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoverRating || rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-3 text-gray-600">
                    {rating > 0 && `${rating}/5`}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your experience with Fasal-Sarathi..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Would you recommend Fasal-Sarathi to other farmers? *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="recommend"
                      value="yes"
                      checked={formData.recommend === 'yes'}
                      onChange={handleChange}
                      className="mr-2 text-green-600 focus:ring-green-500"
                      required
                    />
                    <span className="text-gray-700">Yes, definitely</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="recommend"
                      value="maybe"
                      checked={formData.recommend === 'maybe'}
                      onChange={handleChange}
                      className="mr-2 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700">Maybe</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="recommend"
                      value="no"
                      checked={formData.recommend === 'no'}
                      onChange={handleChange}
                      className="mr-2 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Feedback
              </button>
            </form>
          </div>

          {/* Recent Testimonials */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Testimonials</h2>
              <p className="text-gray-600">
                See what other farmers are saying about their experience with Fasal-Sarathi.
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="font-semibold text-gray-900 mr-2">{testimonial.name}</h3>
                        {testimonial.verified && (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    &quot;{testimonial.message}&quot;
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Verified Review
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Want to share your success story?</h3>
              <p className="text-gray-600 mb-4">
                We&apos;d love to feature your farming journey and how Fasal-Sarathi helped you achieve better yields.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;