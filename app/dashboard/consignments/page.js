import FloatingTab from "../../components/consignments/FloatingTab";
import ParcelTable from "../../components/consignments/ParcelTable";
const ConsignmentPage = () => {
  return (
   <div>
     
     <div className="absolute left-1/2 transform -translate-x-1/2 top-6 z-40  hidden md:block">
      <FloatingTab />
    </div>
  <div> <ParcelTable/></div>
   </div>
  );
};

export default ConsignmentPage;
