import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArrowCircleRight } from "react-icons/md";
const Accordion = () => {
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },
    {
      title: `Define the term "responsive design" in web development.`,
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },
    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const [isPlusAccording, setIsPlusAccording] = useState(0);

  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full container mx-auto px-4 md:w-[70%]">
      <div className="text-gray-800 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Still have questions? We have answers!
        </h1>
        <p className="mt-2 mb-8">
          Plan your shipments with ease as you estimate delivery costs
          beforehand
        </p>
      </div>
      {accordingData?.map((according, index) => (
        <article key={index} className="border border-[#e5eaf2] rounded p-3">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleBorderClick(index)}
          >
            <h2 className="text-gray-800 font-[600] text-[1.2rem]">
              {according.title}
            </h2>
            <p>
              <FaPlus
                className={`text-[1.3rem] text-text transition-all duration-300 ${
                  isPlusAccording === index && "rotate-[45deg] !text-[#00b795]"
                }`}
              />
            </p>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              isPlusAccording === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="text-[#424242] text-[16px] overflow-hidden">
              {according.description}
            </p>
          </div>
        </article>
      ))}
      <div className="flex gap-4 justify-center items-center text-[#00b795] py-5 cursor-pointer">
        <p className="text-[16px] font-medium">See all our FAQs </p>
        <p>
          <MdOutlineArrowCircleRight className="text-2xl" />
        </p>
      </div>
    </div>
  );
};

export default Accordion;
