import { Linkedin, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Chen',
    position: 'CEO & Co-Founder',
    bio: 'Full-stack developer with expertise in cloud architecture and team leadership. Passionate about building scalable solutions.',
    image: 'https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwdGVjaHxlbnwxfHx8fDE3NjcxMDk0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    linkedin: '#',
    github: '#',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Michael Rodriguez',
    position: 'CTO & Co-Founder',
    bio: 'Software architect specializing in microservices and IoT solutions. Loves solving complex technical challenges.',
    image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NjcxMDk0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    linkedin: '#',
    github: '#',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'David Kim',
    position: 'Lead Frontend Developer',
    bio: 'React and UI/UX specialist focused on creating beautiful, intuitive user experiences that users love.',
    image: 'https://images.unsplash.com/photo-1524538198441-241ff79d153b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjcwMzYzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    linkedin: '#',
    github: '#',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    name: 'Muhammad Aisar Zamzuree',
    position: 'Lead Backend Developer',
    bio: 'Backend engineer with deep knowledge in Node.js, databases, and API design. Ensuring robust and secure systems.',
    image: '',
    linkedin: '#',
    github: '#',
    gradient: 'from-orange-600 to-red-600'
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-purple-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full mb-4 text-sm">
            Our Team
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Meet the Minds Behind the Magic
          </h2>
          <p className="text-xl text-gray-400">
            A diverse team of innovators, creators, and problem-solvers united by passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity`}></div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-transparent transition-all">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-40 transition-opacity`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                    {member.position}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href={member.linkedin}
                      className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.github}
                      className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@nexgen.com`}
                      className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 p-12 rounded-2xl">
          <h3 className="text-3xl mb-4">Join Our Growing Team</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always on the lookout for talented individuals who share our passion for innovation and excellence.
          </p>
          <a 
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-teal-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all inline-block"
          >
            Explore Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}