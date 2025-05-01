import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
const SignUp = ({dict}) => {
  return (
    <div className=" pt-20 px-4">
      <div className="min-h-screen flex flex-col items-center justify-center py-6">
        <div className="w-full md:w-[40%]">
          <a href="javascript:void(0)">
            <Image
              src="/img/signup.png"
              alt="logo"
              className="w-20 mb-3 mx-auto block"
              width={500}
              height={500}
            />
          </a>

          <h2 className="text-gray-900 text-center text-3xl font-semibold">
            {dict.signupPage.title}
          </h2>

          <div className="mt-12 space-y-6">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder={dict.signupPage.nameLabelOne}
                className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
              />
              <FiUser className="absolute right-4 text-gray-400" size={20} />
            </div>

            <div className="relative flex items-center">
              <input
                type="text"
                placeholder={dict.signupPage.nameLabelTwo}
                className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
              />
              <FiUser className="absolute right-4 text-gray-400" size={20} />
            </div>

            <div className="relative flex items-center">
              <textarea
                placeholder={dict.signupPage.locationLabel}
                rows="6"
                className="w-full h-20 text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
              />
              <FaLocationDot
                className="absolute right-4 text-gray-400"
                size={20}
              />
            </div>

            <div className="relative flex items-center">
              <input
                type="email"
                placeholder={dict.signupPage.emailLabel}
                className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
              />
              <FiMail className="absolute right-4 text-gray-400" size={20} />
            </div>

            <div className="relative flex items-center">
              <input
                type="text"
                placeholder={dict.signupPage.phoneLabel}
                className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
              />
              <FiPhone className="absolute right-4 text-gray-400" size={20} />
            </div>

            <div className="flex gap-3">
              <div className="relative flex items-center w-full">
                <input
                  type="password"
                  placeholder={dict.signupPage.passwordLabel}
                  className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
                />
                <FiLock className="absolute right-4 text-gray-400" size={20} />
              </div>
              <div className="relative flex items-center w-full">
                <input
                  type="password"
                  placeholder={dict.signupPage.confirmPasswordLabel}
                  className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
                />
                <FiLock className="absolute right-4 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <button
                type="button"
                className="w-full cursor-pointer py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-[#00b795] hover:bg-[#00a285] focus:outline-none"
              >
                {dict.signupPage.signupButton}
              </button>
              <p className="text-gray-800 text-md text-center mt-1">
              {dict.signupPage.accountLabelOne}
                <span className="font-semibold text-gray-800 hover:text-[#00b795] px-1 cursor-pointer">
                {dict.signupPage.accountLabelTwo}
                </span>
              </p>
              <p className="text-gray-800 text-lg font-medium text-center mt-10">
              {dict.signupPage.existingAccount}
                <Link href="/landing/login">
                  {" "}
                  <span className="font-semibold px-2 text-[#00b795] cursor-pointer">
                  {dict.signupPage.loginLink}
                  </span>
                </Link>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
