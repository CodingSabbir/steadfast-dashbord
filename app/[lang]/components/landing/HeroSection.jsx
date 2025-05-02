import Image from "next/image";
import HeroBtn from "./HeroBtn";

const HeroSection = ({ dict }) => {
  return (
    <div className=" h-[800px] md:h-[750px] bg-teal-100 mt-10">
      <div className="container mx-auto pt-10 md:pt-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-5 pt-20 px-4">
          <div className="col-span-2  md:pt-10">
            <div className="text-center md:text-start">
              <h2 className=" text-[32px] md:text-[40px] text-black tracking-wide font-bold leading-none">
                {dict.homePage.heroSection.title}
              </h2>
              <h2 className="text-[32px] md:text-[40px] text-black tracking-wide font-bold leading-none py-3">
                {dict.homePage.heroSection.subtitle}
              </h2>
            </div>
            <p className="text-[#171717] leading-[24px] text-center md:text-start px-4 md:px-0 text-[17px] md:text-[20px] py-7 md:py-10">
              {dict.homePage.heroSection.description}
            </p>
            <HeroBtn dict={dict} />
          </div>
          <div className="col-span-2 ">
            <div className="flex justify-center md:flex-none">
              <Image
                className=" w-72 pt-5 md:pt-0 md:w-full "
                src="/img/2.png"
                width={1000}
                height={600}
                alt="navimage"
              />
            </div>
          </div>
          <div className="col-span-1 hidden md:block md:pt-10 text-black">
            <div className="flex items-center gap-5">
              <div className=" border-white border-2 rounded-md p-2">
                <Image
                  className=" w-8 "
                  src="https://steadfast.com.bd/landing-page/asset/images/sm_marchant.svg"
                  width={1000}
                  height={600}
                  alt="navimage"
                />
              </div>
              <div>
                <h2 className="leading-[28px] font-semibold text-[36px]">
                  {dict.homePage.statsSection.numbersOne}
                </h2>
                <p className="mt-1 text-[#a3a3a3]">Registered Merchant</p>
              </div>
            </div>

            <div className="flex items-center gap-5 py-10">
              <div className=" border-white border-2 rounded-md p-2">
                <Image
                  className=" w-8 "
                  src="https://steadfast.com.bd/landing-page/asset/images/sm_rider.svg"
                  width={1000}
                  height={600}
                  alt="navimage"
                />
              </div>
              <div>
                <h2 className="leading-[28px] font-semibold text-[36px]">
                  {dict.homePage.statsSection.numbersTwo}
                </h2>
                <p className="mt-1 text-[#a3a3a3]">Delivery Man</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className=" border-white border-2 rounded-md p-2">
                <Image
                  className=" w-8 "
                  src="https://steadfast.com.bd/landing-page/asset/images/sm_hub.svg"
                  width={1000}
                  height={600}
                  alt="navimage"
                />
              </div>
              <div>
                <h2 className="leading-[28px] font-semibold text-[36px]">
                  {dict.homePage.statsSection.numbersThree}
                </h2>
                <p className="mt-1 text-[#a3a3a3]">Delivery Point</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
