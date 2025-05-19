import Image from "next/image";

const FloatingTab = () => {
  return (
    <div className="fixed top-[85px] left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div className="bg-primary shadow-lg px-6 pt-4 pb-2 rounded-b-3xl flex gap-8 items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/img/consignments/all_parcel.png"
            alt="Consignments"
            width={20}
            height={20}
          />
          <span className="text-sm whitespace-nowrap text-primary">Consignments</span>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <div className="flex items-center gap-2">
          <Image
            src="/img/consignments/add_parcel.png"
            alt="Add"
            width={20}
            height={20}
          />
          <span className="text-sm whitespace-nowrap text-primary">Add Parcel</span>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <div className="flex items-center gap-2">
          <Image
            src="/img/consignments/bulk_import.png"
            alt="Bulk Import"
            width={20}
            height={20}
          />
          <span className="text-sm whitespace-nowrap text-primary">Bulk Import</span>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <div className="flex items-center gap-2">
          <Image
            src="/img/consignments/pickup_request.png"
            alt="Pickup request"
            width={20}
            height={20}
          />
          <span className="text-sm whitespace-nowrap text-primary">Pickup request</span>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <div className="flex items-center gap-2">
          <Image
            src="/img/consignments/support.png"
            alt="Support"
            width={20}
            height={20}
          />
          <span className="text-sm whitespace-nowrap text-primary">Support</span>
          <div className="h-6 w-px "></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingTab;
