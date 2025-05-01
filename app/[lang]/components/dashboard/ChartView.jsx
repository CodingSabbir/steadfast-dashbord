// import Image from "next/image";


// const ChartView = () => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 pb-2">
//            <div className="flex  justify-between gap-3 px-5 py-10 bg-white border border-gray-300 rounded-md">
//             <div >
//                 <h2 className=" md:text-[24px] font-semibold">Delivery Performance</h2>
//                 <button className="text-[14px] font-medium capitalize bg-[#00b795] px-3 py-2.5 text-white mt-2 rounded-md cursor-pointer">view graph</button>
//             </div>
//             <div>
//                 <Image className=" w-44 md:w-52 mt-10 md:mt-3" src="/img/chart-view/performance.png" alt="" width={1600} height={500}/>
//             </div>
//             </div> 
//         </div>
//     );
// };

// export default ChartView;


// import Image from "next/image";

// const ChartView = () => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 pb-2">
//             <div className="md:flex justify-between gap-3 px-5 py-6 md:py-10 bg-white border border-gray-300 rounded-md">
//                 {/* Left side - title and button (desktop) / just title (mobile) */}
//                 <div className="md:block">
//                     <h2 className="text-[20px] md:text-[24px] font-semibold whitespace-nowrap">
//                         Delivery Performance
//                     </h2>
//                     <button className="hidden md:block text-[14px] font-medium capitalize bg-[#00b795] px-3 py-2.5 text-white mt-2 rounded-md cursor-pointer">
//                         view graph
//                     </button>
//                 </div>
                
//                 {/* Right side - image and mobile button container */}
//                 <div className="flex items-center justify-between mt-4 md:mt-0 md:block">
//                     {/* Mobile-only button */}
//                     <button className="md:hidden text-[14px] font-medium capitalize bg-[#00b795] px-3 py-2.5 text-white rounded-md cursor-pointer">
//                         view graph
//                     </button>
//                     <div className="md:mt-3">
//                         <Image 
//                             className="w-32 md:w-52"
//                             src="/img/chart-view/performance.png" 
//                             alt="Performance chart"
//                             width={208}
//                             height={125}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChartView;


import Image from "next/image";

const performanceData = [
  {
    title: "Delivery Performance",
    buttonText: "view graph",
    imageSrc: "/img/chart-view/performance.png"
  },
  {
    title: "Parcel Summary",
    buttonText: "view summary",
    imageSrc: "/img/chart-view/parcel.png"
  }
];

const ChartView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
      {performanceData.map((item, index) => (
        <div 
          key={index}
          className="md:flex justify-between gap-3 px-5 py-6 md:py-10 bg-white border border-gray-300 rounded-md"
        >
          {/* Left side - title and desktop button */}
          <div className="md:block">
            <h2 className="text-[20px] md:text-[24px] font-semibold whitespace-nowrap">
              {item.title}
            </h2>
            <button className="hidden md:block text-[14px] font-medium capitalize bg-[#00b795] px-3 py-2.5 text-white mt-2 rounded-md cursor-pointer">
              {item.buttonText}
            </button>
          </div>
          
          {/* Right side - mobile button and image */}
          <div className="flex items-center justify-between mt-4 md:mt-0 md:block">
            <button className="md:hidden text-[14px] font-medium capitalize bg-[#00b795] px-3 py-2.5 text-white rounded-md cursor-pointer">
              {item.buttonText}
            </button>
            <div className="md:mt-3">
              <Image
                className="w-32 md:w-52"
                src={item.imageSrc}
                alt={item.title}
                width={208}
                height={125}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartView;