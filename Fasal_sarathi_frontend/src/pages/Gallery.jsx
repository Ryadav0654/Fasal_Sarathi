import  { useState } from 'react';
import { Search, Filter, Eye, Download, Heart, Calendar, MapPin, User, X } from 'lucide-react';


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'crops', name: 'Crops', count: 8 },
    { id: 'soil', name: 'Soil Health', count: 6 },
    { id: 'farmers', name: 'Farmers', count: 5 },
    { id: 'technology', name: 'Technology', count: 5 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Healthy Wheat Field',
      category: 'crops',
      location: 'Punjab, India',
      photographer: 'Rajesh Kumar',
      date: '2024-01-15',
      likes: 124,
      description: 'Thriving wheat crop after implementing AI-recommended fertilizer plan'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Soil Testing Process',
      category: 'soil',
      location: 'Maharashtra, India',
      photographer: 'Priya Patel',
      date: '2024-01-20',
      likes: 89,
      description: 'Advanced soil analysis using modern testing equipment'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Rice Paddy Success',
      category: 'crops',
      location: 'West Bengal, India',
      photographer: 'Amit Singh',
      date: '2024-01-25',
      likes: 156,
      description: 'Exceptional rice yield achieved through precision fertilizer application'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Farmer with Technology',
      category: 'farmers',
      location: 'Gujarat, India',
      photographer: 'Maria Santos',
      date: '2024-02-01',
      likes: 203,
      description: 'Modern farmer using AI-powered agricultural recommendations'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1595105/pexels-photo-1595105.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Corn Field Excellence',
      category: 'crops',
      location: 'Iowa, USA',
      photographer: 'David Thompson',
      date: '2024-02-05',
      likes: 178,
      description: 'Premium corn harvest following sustainable farming practices'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1595107/pexels-photo-1595107.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Soil Health Analysis',
      category: 'soil',
      location: 'California, USA',
      photographer: 'Sarah Johnson',
      date: '2024-02-10',
      likes: 92,
      description: 'Comprehensive soil health assessment and nutrient analysis'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Smart Farming Tools',
      category: 'technology',
      location: 'Netherlands',
      photographer: 'Emma Wilson',
      date: '2024-02-15',
      likes: 145,
      description: 'Advanced agricultural technology for precision farming'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sustainable Agriculture',
      category: 'farmers',
      location: 'Brazil',
      photographer: 'Carlos Rodriguez',
      date: '2024-02-20',
      likes: 167,
      description: 'Implementing eco-friendly farming practices for better yields'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cotton Field Success',
      category: 'crops',
      location: 'Texas, USA',
      photographer: 'Lisa Anderson',
      date: '2024-02-25',
      likes: 134,
      description: 'High-quality cotton production with optimized fertilizer use'
    }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="pt-12 pb-6 ">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success Gallery
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Witness the transformation of farms worldwide through AI-powered sustainable agriculture. 
              Real stories, real results from farmers using Fasal-Sarathi.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-4 bg-transparent shadow-sm px-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="opacity-0 group-hover:opacity-100 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform scale-75 group-hover:scale-100"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-medium ml-1">{image.likes}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {image.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {image.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(image.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">by {image.photographer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedImage.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {selectedImage.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{selectedImage.photographer}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{new Date(selectedImage.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-4">
                  <button className="flex items-center bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg transition-colors">
                    <Heart className="w-4 h-4 mr-2" />
                    {selectedImage.likes} Likes
                  </button>
                  <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;