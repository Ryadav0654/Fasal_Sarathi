
import { Logo } from "../index";
import footerLogo from "../../assets/logo-img2.png";
import { Link } from "react-router-dom";


import {  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-10">
      <div className="container mx-auto px-4 py-8 ">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-3">
              <Link to={"/"}>
            <Logo className={"w-24 h-24"} imgUrl={footerLogo} />
        </Link>
              <h3 className="text-3xl font-extrabold">Fasal-Sarathi</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering farmers with AI-driven fertilizer recommendations for sustainable agriculture 
              and improved crop yields. Growing smart, growing sustainably.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">support@fasal-sarathi.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">123 Agriculture Street, Farm City, FC 12345</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Subscribe to get the latest updates and farming tips.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-2 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none text-white"
                />
                <button className="bg-green-600 hover:bg-green-700 px-2 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Fasal-Sarathi. All rights reserved. Made with ❤️ for farmers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;