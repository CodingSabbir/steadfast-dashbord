'use client'
import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const areas = [
  { name: "Barisal", count: 6 },
  { name: "Chittagong", count: 11 },
  { name: "Dhaka", count: 13 },
  { name: "Khulna", count: 10 },
  { name: "Mymensingh", count: 4 },
];

const Dropdown = ({ label,dict, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredAreas = areas.filter((area) =>
    area.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <label className="text-gray-800">{dict}</label>
      <div
        onClick={() => setOpen(!open)}
        className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-800 cursor-pointer flex items-center justify-between"
      >
        {selected || `Select ${label}`}
        <IoMdArrowDropdown />
      </div>
      {open && (
        <div className="absolute top-[100%] left-0 w-full bg-white border border-gray-300 rounded-md mt-1 z-10 max-h-[250px] overflow-y-auto shadow-lg">
          <input
            type="text"
            placeholder="Search area here"
            className="w-full p-2 border-b border-gray-300 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul className="flex flex-col">
            {filteredAreas.map((area, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setSelected(area.name);
                  setOpen(false);
                }}
                className="flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span>{area.name}</span>
                  <span className="text-white bg-[#00b795] px-2 py-0.5 rounded-full text-sm">
                    {area.count}
                  </span>
                </div>
                <IoPlay className="text-[#00b795]" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const DeliveryCalculator = ({dict}) => {
  const [pickupArea, setPickupArea] = useState("");
  const [deliveryArea, setDeliveryArea] = useState("");

  return (
    <section className=" grid grid-cols-1 gap-[30px] rounded-xl px-4 md:pb-10">
      <div className=" w-full md:w-[70%] container mx-auto">
        <form className="w-full">
          <div className="text-gray-800 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.homePage.calculatorSection.title}
            </h1>
            <p className="mt-2 mb-8">
            {dict.homePage.calculatorSection.description}
            </p>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] text-gray-800">
              <label> {dict.homePage.calculatorSection.table.inputLabelOne}</label>
              <input
                type="text"
                placeholder="Enter Weight"
                className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300 mb-5"
              />
              <Dropdown
                label="Pickup Area"
                selected={pickupArea}
                setSelected={setPickupArea}
                dict={dict.homePage.calculatorSection.table.inputLabelThree}
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] text-gray-800">
              <label>{dict.homePage.calculatorSection.table.inputLabelTwo}</label>
              <input
                type="text"
                placeholder="Selling price of the product"
                className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300 mb-5"
              />
              <Dropdown
                label="Delivery Area"
                selected={deliveryArea}
                setSelected={setDeliveryArea}
                dict={dict.homePage.calculatorSection.table.inputLabelFour}
              />
            </div>
          </div>
        </form>
        <div className="text-center pt-5 md:pt-10">
          <button className="cursor-pointer w-full md:w-56 px-7 py-3.5 bg-[#00b795]  font-semibold text-white text-[18px] rounded hover:bg-[#00b795] transition-all ">
          {dict.homePage.calculatorSection.button}
          </button>
        </div>
        <div className="text-center">
          <p className="my-2 text-gray-800">
          {dict.homePage.calculatorSection.note}
          </p>
          <p className="text-gray-800">
          {dict.homePage.calculatorSection.clickHearOne}
            <span className="font-semibold text-[#00b795] px-1 cursor-pointer">
            {dict.homePage.calculatorSection.clickHearTwo}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryCalculator;
