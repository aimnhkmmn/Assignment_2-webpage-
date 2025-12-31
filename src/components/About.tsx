import { Target, Eye, Lightbulb, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 text-sm">
            Who We Are
          </div>
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            Passionate Innovators Building the Future
          </h2>
          <p className="text-xl text-gray-600">
            Born from a shared vision of excellence, NexGen Solutions brings fresh perspectives and cutting-edge expertise to every project.
          </p>
        </div>

        {/* Mission, Vision, Values in horizontal cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-purple-200 transition-all">
              <div className="inline-flex bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Mission</h3>
              <p className="text-gray-600">
                Empower businesses with innovative technology solutions that drive measurable growth and lasting success.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-teal-200 transition-all">
              <div className="inline-flex bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Vision</h3>
              <p className="text-gray-600">
                Become the go-to technology partner for businesses seeking transformative digital solutions.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-indigo-200 transition-all">
              <div className="inline-flex bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-xl mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, and collaboration guide every decision we make and solution we build.
              </p>
            </div>
          </div>
        </div>

        {/* Story section with side-by-side layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl blur-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwb2ZmaWNlfGVufDF8fHx8MTc2NzEwOTQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team working"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-3xl text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                NexGen Solutions emerged from a shared dream among computer science graduates: to create technology that truly makes a difference. We saw the gap between innovative possibilities and practical business needs – and we built our company to bridge it.
              </p>
              <p>
                Today, we combine academic excellence with real-world experience, delivering solutions that are both technically sound and commercially viable. From startups to enterprises, we're the technology partner that grows with you.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900">Fast Delivery</p>
                  <p className="text-sm text-gray-600">Agile methodology ensures quick turnaround</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900">Modern Stack</p>
                  <p className="text-sm text-gray-600">Latest technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}