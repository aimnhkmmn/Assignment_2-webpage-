import { ArrowRight, Code2, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-teal-900/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptNDAgMGgxMHYxMEg3NnptLTQwIDQwaDEwdjEwSDM2em00MCAwaDEwdjEwSDc2em0tNDAgNDBoMTB2MTBIMzZ6bTQwIDBoMTB2MTBINzZ6bS00MCA0MGgxMHYxMEgzNnptNDAgMGgxMHYxMEg3NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <nav className="relative container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-teal-500 p-2 rounded-lg">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl block">NexGen Solutions</span>
              <span className="text-xs text-gray-400">Innovation Delivered</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#team" className="hover:text-purple-400 transition-colors">Team</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Crafting Digital Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
            Transform Ideas Into Digital Reality
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            A collective of computer science graduates building next-generation software solutions that empower businesses to thrive in the digital age.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#services"
              className="bg-gradient-to-r from-purple-600 to-teal-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all inline-flex items-center gap-2"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="border-2 border-purple-500/50 px-8 py-4 rounded-full hover:bg-purple-500/10 transition-colors backdrop-blur-sm"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Happy Clients' },
            { number: '4', label: 'Team Members' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}