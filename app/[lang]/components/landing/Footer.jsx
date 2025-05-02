
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Pagedone",
      links: [
        { name: "Home", url: "#" },
        { name: "About", url: "#" },
        { name: "Pricing", url: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Figma UI System", url: "#" },
        { name: "Icons Assets", url: "#" },
        { name: "Responsive Blocks", url: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaTwitter size={16} />,
      bgColor: "bg-[#33CCFF]",
      url: "#",
    },
    {
      icon: <FaInstagram size={16} />,
      bgColor: "bg-gradient-to-r from-[#FEE411] via-[#FE2181] to-[#9000DC]",
      url: "#",
    },
    {
      icon: <FaFacebook size={16} />,
      bgColor: "bg-[#337FFF]",
      url: "#",
    },
    {
      icon: <FaYoutube size={16} />,
      bgColor: "bg-[#FF0000]",
      url: "#",
    },
  ];

  return (
    <footer className="w-full  mt-16 scroll-mt-24 " id="about">
      <div className="mx-auto container px-4 scroll-mt-24" id="contact">
        <div className="grid grid-cols-2 sm:grid-cols-5  gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Image
              className="cursor-pointer w-28 md:w-52"
              src="/img/logo.png"
              width={200}
              height={100}
              alt="footer-logo"
            />
            <p className=" pt-4 md:py-8 text-[16px] text-gray-600 lg:max-w-xs ">
              Trusted in more than 100 countries & 5 million customers. Have any
              query? million customers. Have any query?
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="lg:mx-auto text-left">
              <h4 className="text-gray-800 font-[600] text-[1.3rem] mb-4">
                {section.title}
              </h4>
              <ul className="text-sm transition-all duration-500">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-6">
                    <a href={link.url} className="text-gray-600 text-[16px]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:mx-auto text-left">
            <h4 className="text-gray-800 font-[600] text-[1.3rem] mb-4">
              Follow Us
            </h4>
           
            <div className="flex mt-4 space-x-4  lg:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center ${social.bgColor} hover:bg-gray-900 text-white`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className=" mt-4 flex flex-col items-center flex-wrap gap-5 justify-center">
              <button className="px-6 cursor-pointer bg-black rounded-md flex items-center gap-[17px]">
                <Image
                  src="/img/app (1).png"
                  alt="apple logo"
                  className="w-[30px]"
                  width={500}
                  height={500}
                />
                <div>
                  <span className="text-[0.6rem] font-[500] text-[#fff]">
                    Download on the
                  </span>
                  <h3 className="text-[0.9rem] font-[500] leading-[20px] mb-2 text-[#fff]">
                    AppStore
                  </h3>
                </div>
              </button>

              <button className="px-6  cursor-pointer border border-[#424242] rounded-md flex items-center gap-[17px]">
                <Image
                  src="/img/app (2).png"
                  alt="apple logo"
                  className="w-[30px]"
                  width={500}
                  height={500}
                />
                <div>
                  <span className="text-[#424242] text-[0.6rem] font-[500]">
                    Download on the
                  </span>
                  <h3 className="text-[0.9rem] font-[500] leading-[20px] mb-2">
                    AppStore
                  </h3>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center ">
            <span className="text-md text-gray-500">
              © <a href="#">abc</a> 2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





