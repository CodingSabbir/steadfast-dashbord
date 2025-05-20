"use client";
import {
  FaThLarge,
  FaBox,
 FaUserCheck ,
  FaList,
  FaCreditCard,
} from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const sidebarItems = [
  { icon: FaThLarge, label: "Dashboard", href: "/dashboard" },
  { icon: FaBox, label: "Add Parcel", href: "/dashboard/add-parcel" },
  { icon: FaBox, label: "Consignment", href: "/dashboard/consignments" },
  { icon: FaUserCheck, label: "Fraud Check", href: "/dashboard/fraud-check" },
  { icon: FaArrowRightFromBracket , label: "Pickup Requests ", href: "/dashboard/pickup-requests" },
  { icon: FaCreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: FaCreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: FaCreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: FaCreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: FaCreditCard, label: "Payments", href: "/dashboard/payments" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-primary shadow transition-all duration-300 z-30 
        ${isOpen ? "w-64 " : "hidden md:block md:w-16"} flex flex-col`}
      >
        <div
          className={`border-b border-gray mx-3 pb-3 ${
            isOpen
              ? "flex gap-2 items-center md:flex-col mt-4"
              : "flex flex-col items-center mt-4"
          }`}
        >
          <div className={`flex justify-center ${isOpen ? "pb-2" : "pt-2"}`}>
            <Image
              className={`transition-all duration-300 cursor-pointer ${
                isOpen ? "w-14 h-14 md:w-20 md:h-20" : "w-10 h-10"
              }`}
              src="/img/marchant_logo_lg.png"
              alt="logo"
              width={500}
              height={500}
            />
          </div>
          {isOpen && (
            <>
              <h2 className="text-center font-semibold text-primary text-[18px]">
                Sabbir
              </h2>
              <p className="text-[16px] text-center ">
                ID: 1456975
              </p>
            </>
          )}
        </div>

        <div
          className="flex-1 overflow-y-auto mt-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {isOpen && (
            <h1 className="px-4 text-[16px] text-secondary font-normal uppercase  mt-4 pb-2">
              main menu
            </h1>
          )}

          {sidebarItems.map(({ icon: Icon, label, href }, idx) => {
            const isActive = pathname === href;
            return (
              <Link
                href={href}
                key={idx}
                className={`relative flex items-center gap-4 px-4 py-4 cursor-pointer
                  ${
                    isActive
                      ? "bg-[#e5f7f4] !text-[#00b795] font-semibold border-l-4 border-[#00b795]"
                      : "text-primary hover:bg-[#e5f7f4] text-primary-hover"
                  }`}
              >
                <Icon
                  className={`text-xl min-w-[20px] ${
                    isActive ? "text-[#00b795]" : ""
                  }`}
                />
                {isOpen && (
                  <span className="text-[16px] capitalize text-primary">{label}</span>
                )}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
