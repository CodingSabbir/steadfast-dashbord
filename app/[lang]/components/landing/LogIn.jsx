// import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";
// import { FaLocationDot } from "react-icons/fa6";
// import Image from "next/image";
// import Link from "next/link";
// const Login =({dict}) => {

//   return (
//     <div className=" md:pt-20 px-4">
//       <div className="min-h-screen flex flex-col items-center justify-center py-6">
//         <div className="w-full md:w-[40%]">
//           <a href="javascript:void(0)">
//             <Image
//               src="/img/signup.png"
//               alt="logo"
//               className="w-20 mb-3 mx-auto block"
//               width={500}
//               height={500}
//             />
//           </a>

//           <h2 className="text-gray-900 text-center text-3xl font-semibold">
//            {dict.loginPage.title}
//           </h2>

//           <div className="mt-12 space-y-6">
//             <div className="relative flex items-center">
//               <input
//                 type="email"
//                 placeholder={dict.loginPage.emailLabel}
//                 className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
//               />
//               <FiMail className="absolute right-4 text-gray-400" size={20} />
//             </div>

//             <div className="relative flex items-center w-full">
//               <input
//                 type="password"
//                 placeholder={dict.loginPage.passwordLabel}
//                 className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
//               />
//               <FiLock className="absolute right-4 text-gray-400" size={20} />
//             </div>

//             <div>
//               <Link href="/dashboard">
//                 {" "}
//                 <button
//                   type="button"
//                   className="w-full cursor-pointer py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-[#00b795] hover:bg-[#00a285] focus:outline-none"
//                 >
//                {dict.loginPage.loginButton}
//                 </button>
//               </Link>
//               <p className="text-gray-800 text-md text-center mt-1">
//                 By clicking Sign Up you are agreeing with our{" "}
//                 <span className="font-semibold text-gray-800 hover:text-[#00b795] cursor-pointer">
//                   Terms & Conditions
//                 </span>
//               </p>
//               <p className="text-gray-800 text-lg font-medium text-center mt-10">
//                 Already have an account?
//                 <Link href="/landing/sign-up">
//                   {" "}
//                   <span className="font-semibold px-2 text-[#00b795] cursor-pointer">
//                     SignUp
//                   </span>
//                 </Link>
//                 Here
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client";

import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import LoginBtn from "./LoginBtn";

const Login = ({ dict }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="md:pt-20 px-4">
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
            {dict.loginPage.title}
          </h2>

          <div className="mt-12 space-y-6">
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder={dict.loginPage.emailLabel}
                className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
              />
              <FiMail className="absolute right-4 text-gray-400" size={20} />
            </div>

            <div className="relative flex items-center w-full">
              <input
                type="password"
                placeholder={dict.loginPage.passwordLabel}
                className="w-full text-gray-800 text-md border border-gray-300 px-4 py-3 rounded-md outline-[#00b795]"
              />
              <FiLock className="absolute right-4 text-gray-400" size={20} />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between w-full">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={handleCheckboxChange}
                  />
                  {isChecked ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="4" fill="#00b795" />
                      <path
                        d="M8.2 15.5c-.13 0-.26-.03-.38-.08s-.23-.13-.31-.23l-3.2-3.33a.89.89 0 0 1-.3-.63c0-.24.09-.47.26-.64a.92.92 0 0 1 .67-.28c.24 0 .47.09.64.26l2.49 2.6 6.09-6.35a.92.92 0 0 1 1.31-.01c.18.18.27.42.27.67s-.09.49-.26.66l-6.8 7.07a.89.89 0 0 1-.31.23c-.12.05-.25.08-.38.08z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="20"
                        height="20"
                        rx="4"
                        fill="transparent"
                        stroke="#000"
                      />
                    </svg>
                  )}
                  <span className="text-[14px] font-medium text-gray-700">
                    {dict.loginPage.rememberMe}
                  </span>
                </label>

                <span className="text-[16px] font-semibold text-gray-400 cursor-pointer hover:text-[#00b795]">
                  {dict.loginPage.forgotPassword}
                </span>
              </div>
            </div>

            <div>
              <Link href="/dashboard">
                <button
                  type="button"
                  className="w-full cursor-pointer py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-[#00b795] hover:bg-[#00a285] focus:outline-none"
                >
                  {dict.loginPage.loginButton}
                </button>
              </Link>

              <div className="flex items-center mt-5 justify-center">
                <p className="text-gray-800 text-lg font-medium text-center ">
                  {dict.loginPage.noAccount}
                </p>
                <LoginBtn dict={dict} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
