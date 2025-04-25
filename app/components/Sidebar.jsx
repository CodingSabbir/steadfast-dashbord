// 'use client';
// import { FaThLarge, FaBox, FaTruck, FaList, FaCreditCard } from 'react-icons/fa';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// const sidebarItems = [
//   { icon: FaThLarge, label: 'Dashboard' },
//   { icon: FaBox, label: 'Parcels' },
//   { icon: FaTruck, label: 'Pickup Request' },
//   { icon: FaList, label: 'Trackings' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaList, label: 'Trackings' },
//   { icon: FaList, label: 'Trackings' },
// ];

// const Sidebar = ({ isOpen, onClose }) => {
//   const pathname = usePathname();

//   return (
//     <>
//       {/* Background overlay on mobile */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <aside className={`fixed top-0 left-0 h-full bg-white shadow transition-all duration-300 z-30 
//         ${isOpen ? 'w-64' : 'hidden md:block md:w-16'} flex flex-col`}>

//         {/* Logo & User Info */}
//         <div className={`border-b border-gray-300 mx-3 pb-3 ${isOpen ? 'flex gap-2 items-center md:flex-col mt-4' : 'flex flex-col items-center mt-4'}`}>
//           <div className={`flex justify-center ${isOpen ? 'pb-2' : 'pt-2'}`}>
//             <Image 
//               className={`transition-all duration-300 ${isOpen ? 'w-14 h-14 md:w-20 md:h-20' : 'w-10 h-10'}`} 
//               src="/img/marchant_logo_lg.png" 
//               alt='logo' 
//               width={500} 
//               height={500} 
//             />
//           </div>
//           {isOpen && (
//             <>
//               <h2 className='text-center font-semibold text-black text-[18px]'>Sabbir</h2>
//               <p className='text-[16px] text-center text-[#a3a3a3]'>ID: 1456975</p>
//             </>
//           )}
//         </div>

//         {/* Scrollable Menu */}
//         <div
//           className="flex-1 overflow-y-auto mt-4"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           <style jsx>{`
//             div::-webkit-scrollbar {
//               display: none;
//             }
//           `}</style>

//           {isOpen && <h1 className='px-4 text-[16px] font-normal uppercase text-[#a3a3a3] mt-4 pb-2'>main menu</h1>}

//           {sidebarItems.map(({ icon: Icon, label }, idx) => {
//             const isActive = pathname === `/${label.toLowerCase()}`;
//             return (
//               <div 
//                 key={idx} 
//                 className={`relative flex items-center gap-4 px-4 py-4 hover:bg-[#e5f7f4] hover:text-[#00b795] cursor-pointer text-gray-600 
//                   ${isActive ? 'bg-[#e5f7f4] text-[#00b795] font-semibold border-l-4 border-[#00b795]' : ''}`}
//               >
//                 <Icon className="text-xl min-w-[20px]" />
//                 {isOpen && <span className="text-[16px] capitalize font-semibold">{label}</span>}
//               </div>
//             );
//           })}
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
















// 'use client';
// import { FaThLarge, FaBox, FaTruck, FaList, FaCreditCard } from 'react-icons/fa';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// const sidebarItems = [
//   { icon: FaThLarge, label: 'Dashboard' },
//   { icon: FaBox, label: 'Parcels' },
//   { icon: FaTruck, label: 'Pickup Request' },
//   { icon: FaList, label: 'Trackings' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaCreditCard, label: 'Payments' },
//   { icon: FaCreditCard, label: 'Payments' },
// ];

// const Sidebar = ({ isOpen, onClose }) => {
//   const pathname = usePathname();

//   return (
//     <>
//       {/* Background overlay on mobile */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0  bg-opacity-40 z-20 md:hidden"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <aside className={`fixed top-0 left-0 h-full bg-white shadow transition-all duration-300 z-30 
//         ${isOpen ? 'w-64' : 'hidden md:block md:w-16'} flex flex-col`}>

//         {/* Logo & User Info */}
//         <div className={`border-b border-gray-300 mx-3 pb-3 ${isOpen ? 'flex gap-2 items-center md:flex-col mt-4' : 'flex flex-col items-center mt-4'}`}>
//           <div className={`flex justify-center ${isOpen ? 'pb-2' : 'pt-2'}`}>
//             <Image 
//               className={`transition-all duration-300 ${isOpen ? 'w-14 h-14 md:w-20 md:h-20' : 'w-10 h-10'}`} 
//               src="/img/marchant_logo_lg.png" 
//               alt='logo' 
//               width={500} 
//               height={500} 
//             />
//           </div>
//           {isOpen && (
//             <>
//               <h2 className='text-center font-semibold text-black text-[18px]'>Sabbir</h2>
//               <p className='text-[16px] text-center text-[#a3a3a3]'>ID: 1456975</p>
//             </>
//           )}
//         </div>

//         {/* Scrollable Menu */}
//         <div
//           className="flex-1 overflow-y-auto mt-4"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           <style jsx>{`
//             div::-webkit-scrollbar {
//               display: none;
//             }
//           `}</style>

//           {isOpen && <h1 className='px-4 text-[16px] font-normal uppercase text-[#a3a3a3] mt-4 pb-2'>main menu</h1>}

//           {sidebarItems.map(({ icon: Icon, label }, idx) => {
//             const isActive = pathname === `/${label.toLowerCase()}`;
//             return (
//               <div 
//                 key={idx} 
//                 className={`relative flex items-center gap-4 px-4 py-4 cursor-pointer
//                   ${isActive 
//                     ? 'bg-[#e5f7f4] !text-[#00b795] font-semibold border-l-4 border-[#00b795]' 
//                     : 'text-gray-600 hover:bg-[#e5f7f4] hover:text-[#00b795]'}`}
//               >
//                 <Icon className={`text-xl min-w-[20px] ${isActive ? 'text-[#00b795]' : ''}`} />
//                 {isOpen && <span className="text-[16px] capitalize">{label}</span>}
//               </div>
//             );
//           })}
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;



'use client';
import { FaThLarge, FaBox, FaTruck, FaList, FaCreditCard } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const sidebarItems = [
  { icon: FaThLarge, label: 'Dashboard', href: '/dashboard' },
  { icon: FaBox, label: 'Parcels', href: '/dashboard/parcels' },
  { icon: FaTruck, label: 'Pickup Request', href: '/dashboard/pickup-request' },
  { icon: FaList, label: 'Trackings', href: '/dashboard/trackings' },
  { icon: FaCreditCard, label: 'Payments', href: '/dashboard/payments' },
  { icon: FaCreditCard, label: 'Payments', href: '/dashboard/payments' },
  { icon: FaCreditCard, label: 'Payments', href: '/dashboard/payments' },
  { icon: FaCreditCard, label: 'Payments', href: '/dashboard/payments' },
  { icon: FaCreditCard, label: 'Payments', href: '/dashboard/payments' },
  { icon: FaCreditCard, label: 'Payments', href: '/dashboard/payments' },
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Background overlay on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0  bg-opacity-40 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-white shadow transition-all duration-300 z-30 
        ${isOpen ? 'w-64' : 'hidden md:block md:w-16'} flex flex-col`}>

        {/* Logo & User Info */}
        <div className={`border-b border-gray-300 mx-3 pb-3 ${isOpen ? 'flex gap-2 items-center md:flex-col mt-4' : 'flex flex-col items-center mt-4'}`}>
          <div className={`flex justify-center ${isOpen ? 'pb-2' : 'pt-2'}`}>
            <Image 
              className={`transition-all duration-300 ${isOpen ? 'w-14 h-14 md:w-20 md:h-20' : 'w-10 h-10'}`} 
              src="/img/marchant_logo_lg.png" 
              alt='logo' 
              width={500} 
              height={500} 
            />
          </div>
          {isOpen && (
            <>
              <h2 className='text-center font-semibold text-black text-[18px]'>Sabbir</h2>
              <p className='text-[16px] text-center text-[#a3a3a3]'>ID: 1456975</p>
            </>
          )}
        </div>

        {/* Scrollable Menu */}
        <div
          className="flex-1 overflow-y-auto mt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {isOpen && <h1 className='px-4 text-[16px] font-normal uppercase text-[#a3a3a3] mt-4 pb-2'>main menu</h1>}

          {sidebarItems.map(({ icon: Icon, label, href }, idx) => {
            const isActive = pathname === href;
            return (
              <Link 
                href={href} 
                key={idx}
                className={`relative flex items-center gap-4 px-4 py-4 cursor-pointer
                  ${isActive 
                    ? 'bg-[#e5f7f4] !text-[#00b795] font-semibold border-l-4 border-[#00b795]' 
                    : 'text-gray-600 hover:bg-[#e5f7f4] hover:text-[#00b795]'}`}
              >
                <Icon className={`text-xl min-w-[20px] ${isActive ? 'text-[#00b795]' : ''}`} />
                {isOpen && <span className="text-[16px] capitalize">{label}</span>}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;