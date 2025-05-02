import Image from "next/image";

const services = [
  {
    image: "/img/landing/factory.png",
    alt: "Industry-leading tech",
  },
  {
    image: "/img/landing/credit-card.png",
    alt: "Content Marketing",
  },
  {
    image: "/img/landing/good-feedback.png",
    alt: "Web Development",
  },
  {
    image: "/img/landing/security.png",
    alt: "Web Development",
  },
  {
    image: "/img/landing/problem-solving.png",
    alt: "Web Development",
  },
  {
    image: "/img/landing/coverage.png",
    alt: "Web Development",
  },
];

const ServiceCard = ({ image, alt, title, description }) => (
  <div className="p-8 h-full flex flex-col items-center text-center">
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
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = ({ dict }) => {
  const section = dict.homePage.featuresSection;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {section.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {section.features.map((feature, index) => (
            <ServiceCard
              key={index}
              image={services[index]?.image || "/img/default.png"}
              alt={services[index]?.alt || feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
