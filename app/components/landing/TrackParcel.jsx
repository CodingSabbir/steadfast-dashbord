// import Image from "next/image";

// const TrackParcel = () => {

//     return (
//        <div className="px-3 -mt-10">
//          <div className="p-6.5  rounded-md mb-4 flex items-center flex-col md:flex-row  justify-center border border-gray-300 md:w-[80%] container mx-auto bg-white">

// <div className="md:mr-7">Track your parcel to get detailed update</div>
// <div className="w-full md:w-[40%] relative py-3 md:py-0">
//        <div>
//        < Image src="/img/landing/tracker.png" alt="" width={20} height={20}
//            className=" absolute top-5.5 md:top-4 left-3 text-[1.5rem] text-[#777777]"/>
//        <input
//            type="text"
//            name="text"
//            id="text"
//            placeholder="Enter Tracking ID"
//            className="peer border-gray-300 text-[14px] border-t border-b border-l border-r md:border-r-0  rounded-l-md rounded-r-md md:rounded-r-none   outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
//        />
//        </div>
//    </div>
// <div>
//    <button  className=" peer font-medium text-[14px] cursor-pointer hover:bg-[#e5f7f4] border-[#00b795] border rounded-r-md rounded-l-md md:rounded-l-none outline-none pl-10 pr-4 py-3 md:w-full focus:border-primary transition-colors duration-300">
//    Track Parcel
//    </button>
// </div>

// </div>
//        </div>
//     );
// };

// export default TrackParcel;

import Image from "next/image";

const TrackParcel = () => {
  return (
    <div className="px-3 -mt-10">
      <div className="p-6 rounded-md mb-4 flex flex-col md:flex-row items-center justify-center border border-gray-300 md:w-[70%] container mx-auto bg-white">
        <div className="md:mr-7 mb-4 md:mb-0 text-center md:text-left">
          Track your parcel to get detailed update
        </div>

        <div className="w-full md:w-[60%] flex flex-col md:flex-row">
          {/* Input Field */}
          <div className="w-full relative pb-3 md:pb-0">
            <Image
              src="/img/landing/tracker.png"
              alt="Tracking icon"
              width={20}
              height={20}
              className="absolute top-4 left-3 text-[#777777]"
            />
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter Tracking ID"
              className="w-full text-[14px] border border-gray-300 rounded-b-md md:rounded-r-none rounded-t-md md:rounded-tr-none md:rounded-l-md outline-none pl-10 pr-4 py-3 focus:border-primary  transition-colors duration-300"
            />
          </div>

          {/* Button - now full width on mobile */}
          <button
            className="w-full md:w-[40%] font-medium text-[14px] cursor-pointer hover:bg-[#e5f7f4] text-[#00b795]   border border-[#00b795] rounded-b-md md:rounded-bl-none md:rounded-r-md 
                    rounded-t-md md:rounded-l-none outline-none px-4 py-3 md:py-0 transition-colors duration-300"
          >
            Track Parcel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackParcel;
