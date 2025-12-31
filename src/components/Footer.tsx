import { Code2, Linkedin, Github, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-purple-500 to-teal-500 p-2 rounded-lg">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl block">NexGen Solutions</span>
                <span className="text-xs text-gray-400">Innovation Delivered</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into powerful digital solutions. A team of passionate computer science graduates dedicated to excellence.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-teal-600 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-teal-600 transition-all group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-teal-600 transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-purple-400 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">IoT Solutions</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">IT Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} NexGen Solutions. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by our amazing team
          </p>
        </div>
      </div>
    </footer>
  );
}