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
import axios from "axios";
import useAxios from "../../axios";
import { Toaster, toast } from "react-hot-toast";
import CommonOrderDetails from "../CommonOrderDetails";

export default function WomensModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const axiosinstance = useAxios();
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
    trial: "",
    delivery_address: "",

    churithar_selected: false,
    churithar_quantity: 0,
    churithar_description: "",
    kurthi_selected: false,
    kurthi_quantity: 0,
    kurthi_description: "",
    pant_selected: false,
    pant_quantity: 0,
    pant_description: "",
    blouse_selected: false,
    blouse_quantity: 0,
    blouse_description: "",
    frock_selected: false,
    frock_quantity: 0,
    frock_description: "",
    others_selected: false,
    others_quantity: 0,
    others_description: "",
    total: 0,

    CL: "",
    WL: "",
    L: "",
    SH: "",
    SL: "",
    SW: "",
    AH: "",
    FC: "",
    CH: "",
    BR: "",
    W: "",
    SW2: "",
    SE: "",
    SLIT: "",
    FN: "",
    BN: "",
    NW: "",
    BL: "",
    BW: "",
    remarks: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      await axiosinstance.post("measurement/women/", formData);
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
            Womens Measurement Details
          </ModalHeader>
          <hr />
          <ModalBody>
            <div className="p-12">
              <div className="w-full flex items-center max-w-[1100px] bg-white">
                <form onSubmit={handleSubmit}>
                  <CommonOrderDetails
                    handleChange={handleChange}
                    formData={formData}
                  />

                  <hr />
                  <div className="grid lg:grid-cols-3 gap-6 mt-6">
                    {/* Churithar Section */}
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="churithar_selected"
                          id="churithar_selected"
                          checked={formData.churithar_selected}
                          onChange={handleChange}
                          className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded mr-2"
                        />
                        <label
                          htmlFor="churithar_selected"
                          className="text-base font-medium text-[#07074D]"
                        >
                          Churithar
                        </label>
                      </div>
                      <input
                        type="number"
                        name="churithar_quantity"
                        value={formData.churithar_quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        min="0"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <input
                        type="text"
                        name="churithar_description"
                        value={formData.churithar_description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    {/* Kurthi Section */}
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="kurthi_selected"
                          id="kurthi_selected"
                          checked={formData.kurthi_selected}
                          onChange={handleChange}
                          className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded mr-2"
                        />
                        <label
                          htmlFor="kurthi_selected"
                          className="text-base font-medium text-[#07074D]"
                        >
                          Kurthi
                        </label>
                      </div>
                      <input
                        type="number"
                        name="kurthi_quantity"
                        value={formData.kurthi_quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        min="0"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <input
                        type="text"
                        name="kurthi_description"
                        value={formData.kurthi_description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    {/* Pant Section */}
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="pant_selected"
                          id="pant_selected"
                          checked={formData.pant_selected}
                          onChange={handleChange}
                          className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded mr-2"
                        />
                        <label
                          htmlFor="pant_selected"
                          className="text-base font-medium text-[#07074D]"
                        >
                          Pant
                        </label>
                      </div>
                      <input
                        type="number"
                        name="pant_quantity"
                        value={formData.pant_quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        min="0"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <input
                        type="text"
                        name="pant_description"
                        value={formData.pant_description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    {/* Blouse Section */}
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="blouse_selected"
                          id="blouse_selected"
                          checked={formData.blouse_selected}
                          onChange={handleChange}
                          className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded mr-2"
                        />
                        <label
                          htmlFor="blouse_selected"
                          className="text-base font-medium text-[#07074D]"
                        >
                          Blouse
                        </label>
                      </div>
                      <input
                        type="number"
                        name="blouse_quantity"
                        value={formData.blouse_quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        min="0"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <input
                        type="text"
                        name="blouse_description"
                        value={formData.blouse_description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    {/* Frock Section */}
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="frock_selected"
                          id="frock_selected"
                          checked={formData.frock_selected}
                          onChange={handleChange}
                          className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded mr-2"
                        />
                        <label
                          htmlFor="frock_selected"
                          className="text-base font-medium text-[#07074D]"
                        >
                          Frock
                        </label>
                      </div>
                      <input
                        type="number"
                        name="frock_quantity"
                        value={formData.frock_quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        min="0"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <input
                        type="text"
                        name="frock_description"
                        value={formData.frock_description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    {/* Others Section */}
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="others_selected"
                          id="others_selected"
                          checked={formData.others_selected}
                          onChange={handleChange}
                          className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded mr-2"
                        />
                        <label
                          htmlFor="others_selected"
                          className="text-base font-medium text-[#07074D]"
                        >
                          Others
                        </label>
                      </div>
                      <input
                        type="number"
                        name="others_quantity"
                        value={formData.others_quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        min="0"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <input
                        type="text"
                        name="others_description"
                        value={formData.others_description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="total"
                        className="text-base font-medium text-[#07074D] mr-4"
                      >
                        Total:
                      </label>
                      <input
                        type="number"
                        name="total"
                        id="total"
                        value={formData.total}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                      />
                    </div>
                  </div>

                  <hr className="mt-4"/>

                  <div className="grid gap-6 mt-6">
                    <div className="mb-4">
                      <label
                        htmlFor="CL"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CL
                      </label>
                      <input
                        type="text"
                        id="CL"
                        name="CL"
                        value={formData.CL}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="WL"
                        className="block text-sm font-medium text-gray-700"
                      >
                        WL
                      </label>
                      <input
                        type="text"
                        id="WL"
                        name="WL"
                        value={formData.WL}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="CL"
                        className="block text-sm font-medium text-gray-700"
                      >
                        L
                      </label>
                      <input
                        type="text"
                        id="L"
                        name="L"
                        value={formData.L}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="SH"
                        className="block text-sm font-medium text-gray-700"
                      >
                        SH
                      </label>
                      <input
                        type="text"
                        id="SH"
                        name="SH"
                        value={formData.SH}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="SL"
                        className="block text-sm font-medium text-gray-700"
                      >
                        SL
                      </label>
                      <input
                        type="text"
                        id="SL"
                        name="SL"
                        value={formData.SL}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="SW"
                        className="block text-sm font-medium text-gray-700"
                      >
                        SW
                      </label>
                      <input
                        type="text"
                        id="SW"
                        name="SW"
                        value={formData.SW}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="AH"
                        className="block text-sm font-medium text-gray-700"
                      >
                        AH
                      </label>
                      <input
                        type="text"
                        id="AH"
                        name="AH"
                        value={formData.AH}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="FC"
                        className="block text-sm font-medium text-gray-700"
                      >
                        FC
                      </label>
                      <input
                        type="text"
                        id="FC"
                        name="FC"
                        value={formData.FC}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    {/* Repeat the same structure for all other fields */}
                    <div className="mb-4">
                      <label
                        htmlFor="CH"
                        cCHassName="block text-sm font-medium text-gray-700"
                      >
                        CH
                      </label>
                      <input
                        type="text"
                        id="CH"
                        name="CH"
                        value={formData.CH}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="BR"
                        className="block text-sm font-medium text-gray-700"
                      >
                        BR
                      </label>
                      <input
                        type="text"
                        id="BR"
                        name="BR"
                        value={formData.BR}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    {/* Repeat the same structure for all other fields */}
                    <div className="mb-4">
                      <label
                        htmlFor="W"
                        className="block text-sm font-medium text-gray-700"
                      >
                        W
                      </label>
                      <input
                        type="text"
                        id="W"
                        name="W"
                        value={formData.W}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="SW2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        SW2
                      </label>
                      <input
                        type="text"
                        id="SW2"
                        name="SW2"
                        value={formData.SW2}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    {/* Repeat the same structure for all other fields */}
                    <div className="mb-4">
                      <label
                        htmlFor="SE"
                        className="block text-sm font-medium text-gray-700"
                      >
                        SE
                      </label>
                      <input
                        type="text"
                        id="SE"
                        name="SE"
                        value={formData.L}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="SLIT"
                        className="block text-sm font-medium text-gray-700"
                      >
                        SLIT
                      </label>
                      <input
                        type="text"
                        id="SLIT"
                        name="SLIT"
                        value={formData.SLIT}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    {/* Repeat the same structure for all other fields */}
                    <div className="mb-4">
                      <label
                        htmlFor="FN"
                        className="block text-sm font-medium text-gray-700"
                      >
                        FN
                      </label>
                      <input
                        type="text"
                        id="FN"
                        name="FN"
                        value={formData.FN}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="BN"
                        className="block text-sm font-medium text-gray-700"
                      >
                        BN
                      </label>
                      <input
                        type="text"
                        id="BN"
                        name="BN"
                        value={formData.BN}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    {/* Repeat the same structure for all other fields */}
                    <div className="mb-4">
                      <label
                        htmlFor="NW"
                        className="block text-sm font-medium text-gray-700"
                      >
                        NW
                      </label>
                      <input
                        type="text"
                        id="NW"
                        name="NW"
                        value={formData.NW}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="BL"
                        className="block text-sm font-medium text-gray-700"
                      >
                        BL
                      </label>
                      <input
                        type="text"
                        id="BL"
                        name="BL"
                        value={formData.BL}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    {/* Repeat the same structure for all other fields */}
                    <div className="mb-4">
                      <label
                        htmlFor="BW"
                        className="block text-sm font-medium text-gray-700"
                      >
                        BW
                      </label>
                      <input
                        type="text"
                        id="BW"
                        name="BW"
                        value={formData.BW}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="remarks"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Remarks
                      </label>
                      <textarea
                        name="remarks"
                        id="remarks"
                        placeholder="Enter any additional remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-md bg-[#000] py-3 px-6 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-[#000] focus:ring-offset-2"
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
