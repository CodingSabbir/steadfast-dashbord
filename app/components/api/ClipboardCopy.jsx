'use client'
import { useState } from 'react';
import { FaRegCopy } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";

const ClipboardCopy = ({ label,text }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      })
      .catch(err => {
        alert('Failed to copy text.');
        console.error(err);
      });
  };

  return (
    <>
     
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center animate-slide-down mt-4">
          <div className="mx-auto max-w-xl w-full p-3 flex items-center justify-between button-primary rounded-md shadow-md">
            <div className="flex items-center gap-3">
              <IoCheckmarkDoneCircleOutline className=" text-[1.5rem]" />
              <p className=" text-[1rem]"> copied successfully!</p>
            </div>
            <HiOutlineXMark
              onClick={() => setShowAlert(false)}
              className=" text-[1.8rem] p-1 rounded-full hover:bg-primary cursor-pointer active:scale-[0.9]"
            />
          </div>
        </div>
      )}

     
      <div className="p-4">
        <p className="font-medium text-md text-primary mb-2">{label}:</p>
        <div className="flex items-center gap-2">
          <p className="text-gray-700 break-all">{text}</p>
          <FaRegCopy
            onClick={handleCopy}
            className="text-xl text-primary ml-3 cursor-pointer hover:scale-110 transition"
          />
        </div>
      </div>
    </>
  );
};

export default ClipboardCopy;
