import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import useAxios from "../../axios";
import { toast } from "react-hot-toast";
import CommonOrderDetails from "../CommonOrderDetails";
import ShirtOrderDetails from "../ShirtOrderDetails";
import PantOrderDetails from "../PantOrderDetails";
import { PiPants } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io5";

export default function MensModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const axiosinstance = useAxios();
  const [imagePreview, setImagePreview] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVP-GHgKmboz8wPoK9smYXsYbMQ4ck2I5Vog&s"
  );
  const [showShirtDetails, setShowShirtDetails] = useState(false);
  const [showPantDetails, setShowPantDetails] = useState(false);
  const [formData, setFormData] = useState({
    // CommonOrderDetails fields
    order_no: "",
    name: "",
    saleperson: "",
    phone: "",
    booking_date: "",
    delivery_date: "",
    stylist: "",
    measurement_master: "",
    others: "",
    bill_invoice_no: "",
    Cut_Pieces: "",
    trial: "",
    delivery_address: "",

    // Shirt fields
    length: "",
    shoulder: "",
    full_sleeve: "",
    half_sleeve: "",
    hs_btm_loose: "",
    chest: "",
    stomach: "",
    seat: "",
    a: "",
    b: "",
    c: "",
    neck: "",
    collar_type: "",
    pocket: "",
    reverse_cut_way: false,
    bottom_line_cut: false,
    straight_cut: false,
    slit: false,
    linen_pady: false,
    lp_pady: "",
    cuff: "",
    kurtha: "",
    remarkshirt:"",

    // Pant fields
    full_length: "",
    bottom: "",
    waist: "",
    seat: "",
    loose: "",
    inside: "",
    middle: "",
    fork: "",
    no_pleat: false,
    two_pleat: false,
    cross_pocket: "",
    hook: "",
    side_pocket: "",
    back_pocket_1: "",
    back_pocket_2: "",
    cu_band: "",
    over_band: "",
    band: "",
    button: "",
    remarks: "",
  });

  const handleShirtClick = () => {
    setShowShirtDetails(!showShirtDetails);
  };

  const handlePantClick = () => {
    setShowPantDetails(!showPantDetails);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        order_image: file,
      });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      await axiosinstance.post("measurement/mens/", formData);
      toast.success("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Failed to save data");
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 border-2 border-white text-white font-bold text-xs lg:text-sm uppercase rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95"
          type="button"
          onClick={onOpen}
        >
          Add Measurement
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white text-black max-w-7xl mx-auto h-4/5 overflow-auto rounded-2xl"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-3xl p-6">
            Mens Measurement Details
          </ModalHeader>
          <hr />
          <ModalBody>
            <div className="p-12">
              <div className="w-full flex items-center max-w-[1100px] bg-white">
                <form onSubmit={handleSubmit}>
                  <CommonOrderDetails
                    handleChange={handleChange}
                    formData={formData}
                    handleImageChange={handleImageChange}
                    imagePreview={imagePreview}
                  />

                  <div
                    class="bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-3 items-center mb-3"
                    onClick={handleShirtClick}
                  >
                    <IoShirtOutline />
                    <span>Shirt</span>
                  </div>
                  <hr className="mb-3"/>
                  {showShirtDetails && (
                    <ShirtOrderDetails
                      handleChange={handleChange}
                      formData={formData}
                    />
                  )}
                  <div
                    class="bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 gap-3 rounded inline-flex items-center mb-3"
                    onClick={handlePantClick}
                  >
                    <PiPants />
                    <span>Pant</span>
                  </div>

                  <hr />
                  {showPantDetails && <PantOrderDetails
                    handleChange={handleChange}
                    formData={formData}
                  />}
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-md bg-[#000] py-3 px-6 text-base font-medium text-white hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-[#000] focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
