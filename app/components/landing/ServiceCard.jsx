import React from "react";
import Image from "next/image";

const services = [
  {
    image: "/img/landing/factory.png", 
    alt: "Industry-leading tech",
    title: "Industry-leading tech",
    description: "Professional branding solutions for your business web development services."
  },
  {
    image: "/img/landing/credit-card.png", 
    alt: "Content Marketing",
    title: "Next day payment",
    description: "Strategic content to grow your audience web development services."
  },
  {
    image: "/img/landing/good-feedback.png", 
    alt: "Web Development",
    title: "Best COD rates",
    description: "Modern web development services web development services."
  },
  {
    image: "/img/landing/security.png", 
    alt: "Web Development",
    title: "Secure handling",
    description: "Modern web development services web development services."
  },
  {
    image: "/img/landing/problem-solving.png", 
    alt: "Web Development",
    title: "Fastest solutions",
    description: "Modern web development services web development services"
  },
  {
    image: "/img/landing/coverage.png", 
    alt: "Web Development",
    title: "Nationwide coverage",
    description: "Modern web development services web development services."
  },
];

const ServiceCard = ({ image, alt, title, description }) => (
  <div className=" p-8 h-full flex flex-col items-center text-center ">
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
    <p className="text-gray-600 ">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white ">
      <div className="container mx-auto px-4">
        
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 ">
          Choose ABC as your logistics partner
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