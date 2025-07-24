import React, { useState } from 'react';
import { Heart, MapPin, Calendar, Star, Shield, Award, Phone, Mail, Menu, X, Upload, CheckCircle, Clock, AlertCircle, Users, Building2, FileText, DollarSign, ArrowLeft } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [registrationStep, setRegistrationStep] = useState(1);
  const [navigationHistory, setNavigationHistory] = useState(['home']);

  const animals = [
    {
      id: 1,
      name: "Bella",
      species: "Golden Retriever",
      serviceType: "Emotional Support & Mobility",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      handler: "Sarah Johnson, Certified Handler",
      availability: "Available Today",
      location: "Kuala Lumpur",
      description: "Bella is a gentle, well-trained golden retriever with 3 years of experience in emotional support and basic mobility assistance.",
      size: "Large",
      personality: "Calm, Gentle, Patient"
    },
    {
      id: 2,
      name: "Charlie",
      species: "Therapy Cat",
      serviceType: "Emotional Support",
      image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      handler: "Mike Chen, Licensed Therapist",
      availability: "Available Tomorrow",
      location: "Petaling Jaya",
      description: "Charlie is a calm, affectionate therapy cat who specializes in providing comfort to children and elderly individuals.",
      size: "Small",
      personality: "Affectionate, Quiet, Intuitive"
    },
    {
      id: 3,
      name: "Thunder",
      species: "Miniature Horse",
      serviceType: "Mobility & Therapy",
      image: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      handler: "Emma Rodriguez, Equine Specialist",
      availability: "Available This Week",
      location: "Shah Alam",
      description: "Thunder is a specially trained miniature horse providing mobility support and therapeutic interaction for various needs.",
      size: "Medium",
      personality: "Strong, Reliable, Therapeutic"
    }
  ];

  const navigateTo = (page) => {
    setNavigationHistory(prev => [...prev, page]);
    setCurrentPage(page);
  };

  const navigateBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = navigationHistory.slice(0, -1);
      const previousPage = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      setCurrentPage(previousPage);
    }
  };

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-400" />
            <span className="text-2xl font-bold text-gray-800">RENTLY</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => {
                setNavigationHistory(['home']);
                setCurrentPage('home');
              }}
              className={`text-gray-700 hover:text-rose-500 font-medium ${currentPage === 'home' ? 'text-rose-500 border-b-2 border-rose-500' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('animals')}
              className={`text-gray-700 hover:text-rose-500 font-medium ${currentPage === 'animals' ? 'text-rose-500 border-b-2 border-rose-500' : ''}`}
            >
              Animals
            </button>
            <button 
              onClick={() => navigateTo('register')}
              className={`text-gray-700 hover:text-rose-500 font-medium ${currentPage === 'register' ? 'text-rose-500 border-b-2 border-rose-500' : ''}`}
            >
              Register
            </button>
            <button 
              onClick={() => setCurrentPage('pricing')}
              className={`text-gray-700 hover:text-rose-500 font-medium ${currentPage === 'pricing' ? 'text-rose-500 border-b-2 border-rose-500' : ''}`}
            >
              Pricing
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className={`text-gray-700 hover:text-rose-500 font-medium ${currentPage === 'about' ? 'text-rose-500 border-b-2 border-rose-500' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('compliance')}
              className={`text-gray-700 hover:text-rose-500 font-medium ${currentPage === 'compliance' ? 'text-rose-500 border-b-2 border-rose-500' : ''}`}
            >
              Compliance
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-rose-500"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="text-left py-2 text-gray-700 hover:text-rose-500 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('animals'); setMobileMenuOpen(false); }}
                className="text-left py-2 text-gray-700 hover:text-rose-500 font-medium"
              >
                Animals
              </button>
              <button 
                onClick={() => { setCurrentPage('register'); setMobileMenuOpen(false); }}
                className="text-left py-2 text-gray-700 hover:text-rose-500 font-medium"
              >
                Register
              </button>
              <button 
                onClick={() => { setCurrentPage('pricing'); setMobileMenuOpen(false); }}
                className="text-left py-2 text-gray-700 hover:text-rose-500 font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
                className="text-left py-2 text-gray-700 hover:text-rose-500 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => { setCurrentPage('compliance'); setMobileMenuOpen(false); }}
                className="text-left py-2 text-gray-700 hover:text-rose-500 font-medium"
              >
                Compliance
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Empowering You,<br />
            <span className="text-rose-500">One Paw at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with certified service animals for emotional support, mobility assistance, and therapeutic companionship. 
            Trusted by healthcare facilities, families, and individuals seeking compassionate care.
          </p>
          
          {/* Animal Type Selection */}
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Support Type</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div 
                onClick={() => {
                  setAnimalType('ESA');
                  navigateTo('register');
                }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-rose-300"
              >
                <Heart className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Emotional Support Animal</h3>
                <p className="text-gray-600">Companionship and emotional comfort for daily life challenges</p>
              </div>
              <div 
                onClick={() => {
                  setAnimalType('Service');
                  navigateTo('register');
                }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-rose-300"
              >
                <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Service Animal</h3>
                <p className="text-gray-600">Specialized training for mobility, PTSD, autism, and other specific needs</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('register')}
              className="bg-rose-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-500 transition-colors shadow-lg"
            >
              Get Started
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="bg-white text-rose-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-rose-400"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="h-16 w-16 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Individual Clients</h3>
              <p className="text-gray-600">Personal emotional support and service animal rentals for individuals and families</p>
            </div>
            <div className="text-center p-6">
              <Building2 className="h-16 w-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Institutional Clients</h3>
              <p className="text-gray-600">Healthcare facilities, therapy centers, and educational institutions</p>
            </div>
            <div className="text-center p-6">
              <Award className="h-16 w-16 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Certified Providers</h3>
              <p className="text-gray-600">Licensed handlers and certified animal providers in our network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animals Carousel */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Certified Companions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <div key={animal.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={animal.image} 
                  alt={animal.name}
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{animal.name}</h3>
                <p className="text-gray-600 mb-2">{animal.species}</p>
                <p className="text-rose-500 font-semibold mb-2">{animal.serviceType}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{animal.rating}</span>
                  </div>
                  <span className="text-green-600 font-semibold">{animal.availability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 px-4 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <AlertCircle className="h-16 w-16 text-rose-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">24/7 Emergency Support</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Every rental includes round-the-clock emergency assistance with our support hotline, 
            live chat with animal behaviorists, and partner veterinarians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-rose-400" />
              <span>1-800-RENTLY-1</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-rose-400" />
              <span>emergency@rently.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const RegisterPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {navigationHistory.length > 1 && (
          <button
            onClick={navigateBack}
            className="mb-6 flex items-center text-rose-600 hover:text-rose-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        )}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Registration</h1>
        
        {/* User Type Selection */}
        {!userType && (
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Select Account Type</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div 
                onClick={() => {
                  setUserType('individual');
                  navigateTo('register'); 
                }}
                className="p-6 border-2 border-gray-200 rounded-2xl hover:border-rose-300 cursor-pointer transition-colors"
              >
                <Users className="h-12 w-12 text-rose-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Individual Client</h3>
                <p className="text-gray-600">Personal use for emotional support or service animal needs</p>
              </div>
              <div 
                onClick={() => {
                  setUserType('institution');
                  navigateTo('register');
                }}
                className="p-6 border-2 border-gray-200 rounded-2xl hover:border-rose-300 cursor-pointer transition-colors"
              >
                <Building2 className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Institutional Client</h3>
                <p className="text-gray-600">Healthcare facilities, therapy centers, educational institutions</p>
              </div>
            </div>
          </div>
        )}

        {/* Individual Registration Flow */}
        {userType === 'individual' && (
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Individual Registration</h2>
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((step) => (
                  <div 
                    key={step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step <= registrationStep ? 'bg-rose-400 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {registrationStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="IC Number"
                    className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  />
                </div>
                <textarea 
                  placeholder="Address"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                ></textarea>
                <button 
                  onClick={() => setRegistrationStep(2)}
                  className="w-full bg-rose-400 text-white py-3 rounded-xl font-semibold hover:bg-rose-500 transition-colors"
                >
                  Next Step
                </button>
              </div>
            )}

            {registrationStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Professional Documentation</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Required Documentation</h4>
                      <p className="text-yellow-700 text-sm">Upload a valid letter from a licensed mental health professional (LMHP) such as a psychologist, LCSW, or LPC confirming your need for support/service animal.</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Upload LMHP Letter</h4>
                  <p className="text-gray-600 mb-4">Drag and drop your file here, or click to browse</p>
                  <button className="bg-rose-400 text-white px-6 py-2 rounded-lg hover:bg-rose-500 transition-colors">
                    Choose File
                  </button>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => setRegistrationStep(1)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => setRegistrationStep(3)}
                    className="flex-1 bg-rose-400 text-white py-3 rounded-xl font-semibold hover:bg-rose-500 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {registrationStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Suitability Assessment</h3>
                <p className="text-gray-600">This questionnaire helps us calculate your Client Safety Score and ensure the best match.</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Living Environment</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                      <option>Select your living situation...</option>
                      <option>Apartment</option>
                      <option>House with yard</option>
                      <option>Condominium</option>
                      <option>Assisted living facility</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Experience with Animals</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                      <option>Select your experience level...</option>
                      <option>No experience</option>
                      <option>Some experience</option>
                      <option>Experienced</option>
                      <option>Very experienced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Daily Schedule</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                      <option>Select your availability...</option>
                      <option>Home most of the day</option>
                      <option>Work from home</option>
                      <option>Away 4-6 hours daily</option>
                      <option>Away 8+ hours daily</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Specific Needs</label>
                    <textarea 
                      placeholder="Describe your specific support needs and any preferences..."
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => setRegistrationStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => setRegistrationStep(4)}
                    className="flex-1 bg-rose-400 text-white py-3 rounded-xl font-semibold hover:bg-rose-500 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {registrationStep === 4 && (
              <div className="space-y-6 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-800">Registration Submitted!</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Thank you for your registration. Our admin team will review your documents and suitability assessment. 
                  You'll receive an email notification within 2 working days with your approval status and available animals.
                </p>
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                  <h4 className="font-semibold text-rose-800 mb-2">What's Next?</h4>
                  <ul className="text-rose-700 text-sm space-y-1">
                    <li>• Document verification (1-2 business days)</li>
                    <li>• Client Safety Score calculation</li>
                    <li>• Available animals list sent via email</li>
                    <li>• Optional consultation booking available</li>
                  </ul>
                </div>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="bg-rose-400 text-white px-8 py-3 rounded-xl font-semibold hover:bg-rose-500 transition-colors"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        )}

        {/* Institution Registration Flow */}
        {userType === 'institution' && (
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Institutional Registration</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Institution Name"
                  className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
                <input 
                  type="text" 
                  placeholder="Registration Number"
                  className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Official Email"
                  className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Contact Number"
                  className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
              </div>

              <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                <option>Institution Type</option>
                <option>Hospital</option>
                <option>Rehabilitation Center</option>
                <option>Therapy Clinic</option>
                <option>Special Education School</option>
                <option>Elderly Care Facility</option>
                <option>Mental Health Center</option>
              </select>

              <textarea 
                placeholder="Institution Address"
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              ></textarea>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Upload Business Documents</h4>
                <p className="text-gray-600 text-sm mb-3">Business license, care provider certification, etc.</p>
                <button className="bg-rose-400 text-white px-6 py-2 rounded-lg hover:bg-rose-500 transition-colors">
                  Choose Files
                </button>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Mandatory Consultation</h4>
                <p className="text-orange-700 text-sm">After document verification, we'll schedule a consultation to assess your long-term animal needs and discuss subscription packages.</p>
              </div>

              <button className="w-full bg-rose-400 text-white py-3 rounded-xl font-semibold hover:bg-rose-500 transition-colors">
                Submit Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const PricingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Pricing Plans</h1>
        
        {/* Individual Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Individual Clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Daily Rental</h3>
              <div className="text-4xl font-bold text-rose-500 mb-2">RM89<span className="text-lg text-gray-600">/day</span></div>
              <p className="text-gray-600 mb-6">Minimum 3 days</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Certified animal companion</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Licensed handler support</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />24/7 emergency assistance</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Care guidelines included</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-300">
              <div className="bg-rose-100 text-rose-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Monthly Rental</h3>
              <div className="text-4xl font-bold text-rose-500 mb-2">RM1,800<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Best value for extended care</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Everything in Daily plan</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Priority animal selection</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Weekly check-ins</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Flexible scheduling</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Urgent Booking</h3>
              <div className="text-4xl font-bold text-orange-500 mb-2">+RM99<span className="text-lg text-gray-600"> add-on</span></div>
              <p className="text-gray-600 mb-6">Same-day or last-minute needs</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Same-day availability</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Priority matching</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Express delivery</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Emergency support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
              <Calendar className="h-12 w-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation Session</h3>
              <div className="text-2xl font-bold text-rose-500 mb-2">RM150</div>
              <p className="text-gray-600">Meet and choose your animal companion in person</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
              <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Insurance Add-On</h3>
              <div className="text-2xl font-bold text-orange-500 mb-2">RM39</div>
              <p className="text-gray-600">Coverage for medical emergencies and minor damages</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
              <DollarSign className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Security Deposit</h3>
              <div className="text-2xl font-bold text-pink-500 mb-2">RM150</div>
              <p className="text-gray-600">Fully refundable upon safe return</p>
            </div>
          </div>
        </div>

        {/* Institutional Subscriptions */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Institutional Subscriptions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bronze Package</h3>
              <div className="text-3xl font-bold text-orange-400 mb-2">6 Months</div>
              <p className="text-gray-600 mb-6">Perfect for small clinics</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Weekly scheduled visits</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Basic reporting dashboard</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />2-3 certified animals</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Standard support</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-300">
              <div className="bg-rose-100 text-rose-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Recommended</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Silver Package</h3>
              <div className="text-3xl font-bold text-rose-500 mb-2">1 Year</div>
              <p className="text-gray-600 mb-6">Ideal for therapy centers</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Bi-weekly scheduled visits</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Advanced reporting dashboard</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />4-6 certified animals</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Priority support</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Gold Package</h3>
              <div className="text-3xl font-bold text-pink-500 mb-2">2 Years</div>
              <p className="text-gray-600 mb-6">For large institutions</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Daily scheduled visits</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Comprehensive analytics</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />8+ certified animals</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Dedicated account manager</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AnimalsPage = () => (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {currentPage !== 'home' && navigationHistory.length > 1 && (
          <button
            onClick={navigateBack}
            className="mb-6 flex items-center text-rose-600 hover:text-rose-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        )}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Certified Companions</h1>
        
        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="grid md:grid-cols-5 gap-4">
            <select className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
              <option>All Species</option>
              <option>Dogs</option>
              <option>Cats</option>
              <option>Miniature Horses</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
              <option>All Service Types</option>
              <option>Emotional Support</option>
              <option>Mobility Assistance</option>
              <option>PTSD Support</option>
              <option>Autism Support</option>
              <option>Therapy</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
              <option>All Sizes</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
              <option>All Locations</option>
              <option>Kuala Lumpur</option>
              <option>Petaling Jaya</option>
              <option>Shah Alam</option>
              <option>Subang Jaya</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
              <option>Availability</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
        </div>

        {/* Animal Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <div key={animal.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={animal.image} 
                alt={animal.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{animal.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-gray-600 font-semibold">{animal.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-2">{animal.species} • {animal.size}</p>
                <p className="text-rose-500 font-semibold mb-2">{animal.serviceType}</p>
                <p className="text-gray-700 text-sm mb-3">{animal.description}</p>
                
                <div className="bg-gray-50 rounded-xl p-3 mb-4">
                  <p className="text-sm text-gray-600 mb-1"><strong>Personality:</strong> {animal.personality}</p>
                  <p className="text-sm text-gray-600">👨‍⚕️ {animal.handler}</p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{animal.location}</span>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">{animal.availability}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => {
                      setSelectedAnimal(animal);
                      navigateTo('consultation');
                    }}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold text-sm hover:bg-gray-300 transition-colors"
                  >
                    Book Consultation
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedAnimal(animal);
                      navigateTo('booking');
                    }}
                    className="flex-1 bg-rose-400 text-white py-2 rounded-xl font-semibold text-sm hover:bg-rose-500 transition-colors"
                  >
                    Rent {animal.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const BookingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={navigateBack}
          className="mb-6 flex items-center text-rose-600 hover:text-rose-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Animals
        </button>
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Book Your Companion</h1>
        
        {selectedAnimal && (
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={selectedAnimal.image} 
                alt={selectedAnimal.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{selectedAnimal.name}</h3>
                <p className="text-gray-600">{selectedAnimal.species} • {selectedAnimal.serviceType}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <form className="space-y-6">
            {/* Rental Plan Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Select Rental Plan</label>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-rose-300 cursor-pointer">
                  <h4 className="font-semibold text-gray-800">Daily Rental</h4>
                  <p className="text-2xl font-bold text-rose-500">RM89/day</p>
                  <p className="text-sm text-gray-600">Minimum 3 days</p>
                </div>
                <div className="border-2 border-rose-300 bg-rose-50 rounded-xl p-4 cursor-pointer">
                  <h4 className="font-semibold text-gray-800">Monthly Rental</h4>
                  <p className="text-2xl font-bold text-rose-500">RM1,800</p>
                  <p className="text-sm text-gray-600">Best value</p>
                </div>
                <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-orange-300 cursor-pointer">
                  <h4 className="font-semibold text-gray-800">Urgent Booking</h4>
                  <p className="text-2xl font-bold text-orange-500">+RM99</p>
                  <p className="text-sm text-gray-600">Same-day</p>
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Select Dates</label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Start Date</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">End Date</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Use Case */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Purpose of Rental</label>
              <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                <option>Select use case...</option>
                <option>Medical Recovery</option>
                <option>Travel Companion</option>
                <option>School Therapy Session</option>
                <option>Elderly Care Support</option>
                <option>Anxiety/Stress Relief</option>
                <option>Physical Therapy</option>
                <option>PTSD Support</option>
                <option>Autism Support</option>
                <option>Other</option>
              </select>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Additional Services</label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="w-5 h-5 text-rose-400 rounded focus:ring-rose-400" />
                  <span className="text-gray-800">Insurance Coverage (RM39) - Covers medical emergencies and minor damages</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="w-5 h-5 text-orange-400 rounded focus:ring-orange-400" />
                  <span className="text-gray-800">Urgent Priority Booking (RM99) - Same-day or last-minute needs</span>
                </label>
              </div>
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Special Requirements or Notes</label>
              <textarea 
                rows={4}
                placeholder="Please describe any specific needs, allergies, or preferences..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              ></textarea>
            </div>

            {/* Pricing Breakdown */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pricing Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Rate</span>
                  <span className="font-semibold">RM1,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Insurance (Optional)</span>
                  <span className="font-semibold">RM39</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security Deposit (Refundable)</span>
                  <span className="font-semibold">RM150</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-rose-500">RM1,989</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">*Security deposit will be refunded upon safe return of the animal</p>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-rose-400 text-white py-4 rounded-xl font-semibold text-lg hover:bg-rose-500 transition-colors shadow-lg"
            >
              Complete Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const ConsultationPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={navigateBack}
          className="mb-6 flex items-center text-rose-600 hover:text-rose-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Animals
        </button>
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Book Consultation</h1>
        
        {selectedAnimal && (
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={selectedAnimal.image} 
                alt={selectedAnimal.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{selectedAnimal.name}</h3>
                <p className="text-gray-600">{selectedAnimal.species} • {selectedAnimal.serviceType}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <Calendar className="h-16 w-16 text-rose-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">In-Person Consultation</h2>
            <p className="text-gray-600">Meet and interact with your potential companion before making a decision</p>
            <div className="text-3xl font-bold text-rose-500 mt-4">RM150</div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                  <option>Select time slot...</option>
                  <option>9:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 12:00 PM</option>
                  <option>2:00 PM - 3:00 PM</option>
                  <option>3:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 5:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location Preference</label>
              <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                <option>Select location...</option>
                <option>RENTLY Center - Kuala Lumpur</option>
                <option>RENTLY Center - Petaling Jaya</option>
                <option>RENTLY Center - Shah Alam</option>
                <option>Your Location (Additional fee may apply)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">What would you like to focus on during the consultation?</label>
              <textarea 
                rows={4}
                placeholder="Describe your specific needs, concerns, or questions about the animal..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              ></textarea>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <h4 className="font-semibold text-rose-800 mb-2">What's Included</h4>
              <ul className="text-rose-700 text-sm space-y-1">
                <li>• 1-hour session with the animal and handler</li>
                <li>• Assessment of compatibility and comfort level</li>
                <li>• Detailed discussion about care requirements</li>
                <li>• Q&A session with certified handler</li>
                <li>• Written assessment report</li>
              </ul>
            </div>

            <button 
              type="submit"
              className="w-full bg-rose-400 text-white py-4 rounded-xl font-semibold text-lg hover:bg-rose-500 transition-colors shadow-lg"
            >
              Book Consultation - RM150
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {navigationHistory.length > 1 && (
          <button
            onClick={navigateBack}
            className="mb-6 flex items-center text-rose-600 hover:text-rose-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        )}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About RENTLY</h1>
        
        {/* Mission Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            RENTLY is dedicated to making certified service animals accessible to those who need emotional support, 
            mobility assistance, and therapeutic companionship. We believe that everyone deserves the healing power 
            of animal-human connection, especially during challenging times.
          </p>
          <p className="text-lg text-gray-700">
            Our platform connects certified animals and licensed handlers with individuals, families, healthcare 
            facilities, and organizations seeking professional animal-assisted support services.
          </p>
        </div>

        {/* Process Flow */}
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How RENTLY Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Register & Verify</h3>
              <p className="text-gray-600 text-sm">Complete registration with required documentation and suitability assessment</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Animal Matching</h3>
              <p className="text-gray-600 text-sm">Browse available animals and book optional consultation sessions</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Book & Rent</h3>
              <p className="text-gray-600 text-sm">Select rental plan, dates, and complete booking with security deposit</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Support & Return</h3>
              <p className="text-gray-600 text-sm">24/7 emergency support during rental, safe return, and deposit refund</p>
            </div>
          </div>
        </div>

        {/* Animal Welfare Principles */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Animal Welfare Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🐾 Comprehensive Care</h3>
              <p className="text-gray-700 mb-4">All animals receive regular veterinary check-ups, proper nutrition, exercise, and socialization.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🎓 Ongoing Training</h3>
              <p className="text-gray-700">Continuous professional development ensures animals remain well-adjusted and effective in their roles.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">⏰ Mandatory Rest Periods</h3>
              <p className="text-gray-700 mb-4">Every animal receives a 2-week rest period after each rental for recovery and post-care evaluation.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🏠 Loving Homes</h3>
              <p className="text-gray-700">When not working, animals live in loving foster homes with dedicated caretakers.</p>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Healthcare Networks</h3>
              <p className="text-gray-600 text-sm">Partnerships with hospitals, rehabilitation centers, and therapy clinics</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Training Organizations</h3>
              <p className="text-gray-600 text-sm">Collaboration with certified animal training and behavior experts</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Advocacy Groups</h3>
              <p className="text-gray-600 text-sm">Working with disability rights and animal welfare organizations</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigateTo('compliance')}
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Compliance & Certifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CompliancePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={navigateBack}
          className="mb-6 flex items-center text-rose-600 hover:text-rose-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Compliance & Accessibility</h1>
        
        {/* Regulatory Compliance */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Regulatory Compliance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">PDPA Compliant</h3>
              <p className="text-gray-600 text-sm">Full compliance with Personal Data Protection Act regulations for user privacy</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Animal Welfare Laws</h3>
              <p className="text-gray-600 text-sm">Strict adherence to all local and federal animal welfare regulations</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Consumer Protection</h3>
              <p className="text-gray-600 text-sm">Full transparency in pricing, services, and consumer rights protection</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Certifications & Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">ISO 9001 Quality Management</h3>
                  <p className="text-gray-600 text-sm">International quality standards for service delivery</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Professional Handler Licensing</h3>
                  <p className="text-gray-600 text-sm">All handlers are licensed and certified professionals</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">24/7 Monitoring</h3>
                  <p className="text-gray-600 text-sm">Continuous GPS tracking and emergency response</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Insurance Coverage</h3>
                  <p className="text-gray-600 text-sm">Comprehensive liability and care insurance</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Animal Health Certification</h3>
                  <p className="text-gray-600 text-sm">Regular health checks and vaccination records</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Emergency Response Protocol</h3>
                  <p className="text-gray-600 text-sm">Established procedures for all emergency situations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Platform Accessibility</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Visual Accessibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• High contrast color schemes for visually impaired users</li>
                <li>• Screen reader compatibility</li>
                <li>• Adjustable font sizes</li>
                <li>• Alternative text for all images</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Motor Accessibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Keyboard navigation support</li>
                <li>• Large, easy-to-click buttons</li>
                <li>• Voice command integration</li>
                <li>• Mobile-optimized touch interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'animals':
        return <AnimalsPage />;
      case 'register':
        return <RegisterPage />;
      case 'pricing':
        return <PricingPage />;
      case 'booking':
        return <BookingPage />;
      case 'consultation':
        return <ConsultationPage />;
      case 'about':
        return <AboutPage />;
      case 'compliance':
        return <CompliancePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderCurrentPage()}
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-rose-400" />
                <span className="text-2xl font-bold">RENTLY</span>
              </div>
              <p className="text-gray-300">Empowering You, One Paw at a Time</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Emotional Support Animals</li>
                <li>Service Animals</li>
                <li>Therapy Sessions</li>
                <li>Institutional Programs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>24/7 Emergency Line</li>
                <li>Training Resources</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-RENTLY-1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@rently.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 RENTLY. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;