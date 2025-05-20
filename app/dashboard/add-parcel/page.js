
import DeliveryForm from "../../components/add-parcel/DeliveryForm"
export default function AddParcelsPage() {
    return (
      <>
   <div className="flex gap-4 mb-5 justify-end">
  <button className="px-4 py-2 button-primary text-white rounded-sm text-md font-medium whitespace-nowrap">
    Regular
  </button>
  <button className="px-4 py-2 border border-gray text-primary rounded-sm text-md font-medium whitespace-nowrap">
    Express
  </button>
  <button className="px-4 py-2 border border-gray text-primary rounded-sm text-md font-medium whitespace-nowrap">
    PickNDrop
  </button>
</div>

      <div className="min-h-screen bg-gray-50 p-4">
      <DeliveryForm />
    </div>
      </>
    )
}