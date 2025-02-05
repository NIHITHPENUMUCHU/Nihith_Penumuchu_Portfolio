import { Code2, Palette, Globe } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern technologies and best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces with focus on user experience and accessibility."
    },
    {
      icon: Globe,
      title: "Front-end Development",
      description: "End-to-end development from database design to frontend implementation."
    }
  ];

  return (
    <section className="py-20 px-6" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:bg-gray-700/50 transition-colors"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}