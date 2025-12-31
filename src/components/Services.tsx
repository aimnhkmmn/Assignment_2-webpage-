import { Globe, Smartphone, Cloud, Cpu, Database, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Node.js, and Next.js. Responsive, scalable, and optimized for performance.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Smart IoT implementations connecting devices and sensors to create intelligent, automated systems for modern businesses.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Cloud architecture design, migration, and management using AWS, Azure, and Google Cloud Platform.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Robust database architecture and optimization for efficient data management and retrieval at scale.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: ShieldCheck,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help businesses make informed decisions about their digital transformation.',
    gradient: 'from-teal-500 to-emerald-500'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4 text-sm">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            Comprehensive Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600">
            From concept to deployment, we deliver end-to-end technology services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent transition-all h-full">
                  <div className={`inline-flex bg-gradient-to-br ${service.gradient} p-3 rounded-xl mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-teal-600 to-purple-600 bg-[length:200%_100%] animate-[gradient_8s_ease_infinite]"></div>
          <div className="relative p-12 md:p-16 text-white text-center">
            <h3 className="text-3xl md:text-4xl mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's turn your vision into reality with innovative technology and expert execution.
            </p>
            <a 
              href="#contact"
              className="bg-white text-purple-700 px-8 py-4 rounded-full hover:shadow-2xl transition-all inline-block"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}