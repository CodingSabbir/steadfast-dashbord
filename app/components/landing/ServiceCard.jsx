import React from "react";
import Image from "next/image";

const services = [
  {
    image: "/images/branding-icon.png", 
    alt: "Branding Service",
    title: "Branding",
    description: "Professional branding solutions for your business."
  },
  {
    image: "/images/marketing-icon.png", 
    alt: "Content Marketing",
    title: "Content Marketing",
    description: "Strategic content to grow your audience."
  },
  {
    image: "/images/webdev-icon.png", 
    alt: "Web Development",
    title: "Web Development",
    description: "Modern web development services."
  }
];

const ServiceCard = ({ image, alt, title, description }) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 h-full flex flex-col items-center text-center transition hover:shadow-lg">
    <div className="relative w-16 h-16 mb-6">
      <Image 
        src={image}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 64px, 80px"
      />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-3xl md:text-4xl font-bold mb-4">
            Quality services tailored to your needs
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              alt={service.alt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;