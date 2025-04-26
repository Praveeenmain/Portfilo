
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Youtube, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h1>
        <p className="text-gray-600">
          I'd love to hear from you! Whether you have a project idea, job opportunity, or just want to connect.
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-blue-50 mb-4">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
          <p className="text-gray-600 mb-3">I'll respond within 24 hours</p>
          <a href="mailto:Praveenpandu3039@gmail.com" className="text-blue-600 hover:underline font-medium">
            Praveenpandu3039@gmail.com
          </a>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-green-50 mb-4">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
          <p className="text-gray-600 mb-3">Available during business hours</p>
          <a href="tel:9390576312" className="text-blue-600 hover:underline font-medium">
            +91 9390576312
          </a>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-purple-50 mb-4">
            <MapPin className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Location</h3>
          <p className="text-gray-600 mb-3">Based in</p>
          <p className="font-medium">Tirupati, Andhra Pradesh 517504</p>
        </div>
      </section>
      
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
          
          {submitted ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h2>
          
          <div className="space-y-6">
            <p className="text-gray-600">
              Follow me on social media to see my latest projects, content, and connect professionally.
              I regularly post about DSA, gym workouts, new AI tools, and my developer journey.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/praveenkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Github className="h-6 w-6 text-gray-800 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">GitHub</p>
                  <p className="text-sm text-gray-500">View my repositories</p>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/praveenkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-blue-700 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">LinkedIn</p>
                  <p className="text-sm text-gray-500">Professional network</p>
                </div>
              </a>
              
              <a
                href="https://youtube.com/@praveenkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <Youtube className="h-6 w-6 text-red-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">YouTube</p>
                  <p className="text-sm text-gray-500">Watch my videos</p>
                </div>
              </a>
              
              <a
                href="https://instagram.com/praveenkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <Instagram className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Instagram</p>
                  <p className="text-sm text-gray-500">Follow my journey</p>
                </div>
              </a>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Collaboration</h3>
              <p className="text-gray-600">
                Interested in collaborating on a project? I'm open to exciting opportunities 
                in full-stack development, AI/ML applications, or educational tech solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
