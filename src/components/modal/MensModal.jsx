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
import { toast } from "react-hot-toast";
import CommonOrderDetails from "../CommonOrderDetails";

export default function MensModal() {
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

    // Shirt fields
    length: "",
    shoulder: "",
    full_sleeve: "",
    half_sleeve: "",
    hs_btm_loose: "",
    chest: "",
    stomach: "",
    seat: "",
    body_loose: "",
    a: "",
    b: "",
    c: "",
    neck: "",
    collar_type: "",
    select_collar_type: "",
    pocket: "",
    select_pocket_type: "",
    reverse_cut_way: "",
    bottom_line_cut: "",
    straight_cut: "",
    slit: "",
    linen_pady: "",
    lp_pady: "",
    cuff: "",
    kurtha: "",

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      order_image: e.target.files[0], 
    });
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
                 <CommonOrderDetails handleChange={handleChange} formData={formData} handleImageChange={handleImageChange}/>

                  <h1>Shirt</h1>
                  <hr />
                  <div className="grid lg:grid-cols-5 gap-6 mt-6">
                    <div className="mb-5">
                      <label
                        htmlFor="length"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Length
                      </label>
                      <input
                        type="number"
                        name="length"
                        id="length"
                        placeholder="Enter length"
                        value={formData.length}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="shoulder"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Shoulder
                      </label>
                      <input
                        type="number"
                        name="shoulder"
                        id="shoulder"
                        placeholder="Enter shoulder"
                        value={formData.shoulder}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="full_sleeve"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Sleeve
                      </label>
                      <input
                        type="number"
                        name="full_sleeve"
                        id="full_sleeve"
                        placeholder="Enter full sleeve length"
                        value={formData.full_sleeve}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="half_sleeve"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Half Sleeve
                      </label>
                      <input
                        type="number"
                        name="half_sleeve"
                        id="half_sleeve"
                        placeholder="Enter half sleeve length"
                        value={formData.half_sleeve}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="hs_btm_loose"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Half Sleeve Bottom Loose
                      </label>
                      <input
                        type="number"
                        name="hs_btm_loose"
                        id="hs_btm_loose"
                        placeholder="Enter half sleeve bottom loose"
                        value={formData.hs_btm_loose}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="chest"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Chest
                      </label>
                      <input
                        type="number"
                        name="chest"
                        id="chest"
                        placeholder="Enter chest measurement"
                        value={formData.chest}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="stomach"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Stomach
                      </label>
                      <input
                        type="number"
                        name="stomach"
                        id="stomach"
                        placeholder="Enter stomach measurement"
                        value={formData.stomach}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="seat"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Seat
                      </label>
                      <input
                        type="number"
                        name="seat"
                        id="seat"
                        placeholder="Enter seat measurement"
                        value={formData.seat}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="body_loose"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Body Loose
                      </label>
                      <input
                        type="number"
                        name="body_loose"
                        id="body_loose"
                        placeholder="Enter body loose measurement"
                        value={formData.body_loose}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="neck"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Neck
                      </label>
                      <input
                        type="number"
                        name="neck"
                        id="neck"
                        placeholder="Enter neck measurement"
                        value={formData.neck}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="collar_type"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Collar Type
                      </label>
                      <input
                        type="text"
                        name="collar_type"
                        id="collar_type"
                        placeholder="Enter collar type"
                        value={formData.collar_type}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="select_collar_type"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Select Collar Type
                      </label>
                      <input
                        type="text"
                        name="select_collar_type"
                        id="select_collar_type"
                        placeholder="Select collar type"
                        value={formData.select_collar_type}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="pocket"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Pocket
                      </label>
                      <input
                        type="text"
                        name="pocket"
                        id="pocket"
                        placeholder="Enter pocket type"
                        value={formData.pocket}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="select_pocket_type"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Select Pocket Type
                      </label>
                      <input
                        type="text"
                        name="select_pocket_type"
                        id="select_pocket_type"
                        placeholder="Select pocket type"
                        value={formData.select_pocket_type}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="reverse_cut_way"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Reverse Cut Way
                      </label>
                      <input
                        type="text"
                        name="reverse_cut_way"
                        id="reverse_cut_way"
                        placeholder="Enter reverse cut way"
                        value={formData.reverse_cut_way}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="a"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        A
                      </label>
                      <input
                        type="number"
                        name="a"
                        id="a"
                        placeholder="Enter value for A"
                        value={formData.a}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="b"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        B
                      </label>
                      <input
                        type="number"
                        name="b"
                        id="b"
                        placeholder="Enter value for B"
                        value={formData.b}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="c"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        C
                      </label>
                      <input
                        type="number"
                        name="c"
                        id="c"
                        placeholder="Enter value for C"
                        value={formData.c}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="bottom_line_cut"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Bottom Line Cut
                      </label>
                      <input
                        type="text"
                        name="bottom_line_cut"
                        id="bottom_line_cut"
                        placeholder="Enter bottom line cut type"
                        value={formData.bottom_line_cut}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="cuff"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Cuff
                      </label>
                      <input
                        type="text"
                        name="cuff"
                        id="cuff"
                        placeholder="Enter cuff type"
                        value={formData.cuff}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="kurtha"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Kurtha
                      </label>
                      <input
                        type="text"
                        name="kurtha"
                        id="kurtha"
                        placeholder="Enter kurtha type"
                        value={formData.kurtha}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="linen_pady"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Linen Pady
                      </label>
                      <input
                        type="text"
                        name="linen_pady"
                        id="linen_pady"
                        placeholder="Enter linen pady type"
                        value={formData.linen_pady}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="lp_pady"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        LP Pady
                      </label>
                      <input
                        type="text"
                        name="lp_pady"
                        id="lp_pady"
                        placeholder="Enter LP pady type"
                        value={formData.lp_pady}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="slit"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Slit
                      </label>
                      <input
                        type="text"
                        name="slit"
                        id="slit"
                        placeholder="Enter slit type"
                        value={formData.slit}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="straight_cut"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Straight Cut
                      </label>
                      <input
                        type="text"
                        name="straight_cut"
                        id="straight_cut"
                        placeholder="Enter straight cut type"
                        value={formData.straight_cut}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <h1>Pant</h1>
                  <hr />
                  <div className="grid lg:grid-cols-5 gap-6 mt-6">
                    <div className="mb-5">
                      <label
                        htmlFor="full_length"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Length
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="full_length"
                        id="full_length"
                        placeholder="Enter full length"
                        value={formData.full_length}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="bottom"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Bottom
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="bottom"
                        id="bottom"
                        placeholder="Enter bottom measurement"
                        value={formData.bottom}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="waist"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Waist
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="waist"
                        id="waist"
                        placeholder="Enter waist measurement"
                        value={formData.waist}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="seat"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Seat
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="seat"
                        id="seat"
                        placeholder="Enter seat measurement"
                        value={formData.seat}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="loose"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Loose
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="loose"
                        id="loose"
                        placeholder="Enter loose measurement"
                        value={formData.loose}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="inside"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Inside
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="inside"
                        id="inside"
                        placeholder="Enter inside measurement"
                        value={formData.inside}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="middle"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Middle
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="middle"
                        id="middle"
                        placeholder="Enter middle measurement"
                        value={formData.middle}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="fork"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Fork
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="fork"
                        id="fork"
                        placeholder="Enter fork measurement"
                        value={formData.fork}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="no_pleat"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        No Pleat
                      </label>
                      <input
                        type="checkbox"
                        name="no_pleat"
                        id="no_pleat"
                        checked={formData.no_pleat}
                        onChange={handleChange}
                        className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="two_pleat"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Two Pleat
                      </label>
                      <input
                        type="checkbox"
                        name="two_pleat"
                        id="two_pleat"
                        checked={formData.two_pleat}
                        onChange={handleChange}
                        className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="cross_pocket"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Cross Pocket
                      </label>
                      <input
                        type="text"
                        name="cross_pocket"
                        id="cross_pocket"
                        placeholder="Enter cross pocket details"
                        value={formData.cross_pocket}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="hook"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Hook
                      </label>
                      <input
                        type="text"
                        name="hook"
                        id="hook"
                        placeholder="Enter hook details"
                        value={formData.hook}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="side_pocket"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Side Pocket
                      </label>
                      <input
                        type="text"
                        name="side_pocket"
                        id="side_pocket"
                        placeholder="Enter side pocket details"
                        value={formData.side_pocket}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="back_pocket_1"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Back Pocket 1
                      </label>
                      <input
                        type="text"
                        name="back_pocket_1"
                        id="back_pocket_1"
                        placeholder="Enter back pocket 1 details"
                        value={formData.back_pocket_1}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="back_pocket_2"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Back Pocket 2
                      </label>
                      <input
                        type="text"
                        name="back_pocket_2"
                        id="back_pocket_2"
                        placeholder="Enter back pocket 2 details"
                        value={formData.back_pocket_2}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="cu_band"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        CU Band
                      </label>
                      <input
                        type="text"
                        name="cu_band"
                        id="cu_band"
                        placeholder="Enter CU band details"
                        value={formData.cu_band}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="over_band"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Over Band
                      </label>
                      <input
                        type="text"
                        name="over_band"
                        id="over_band"
                        placeholder="Enter over band details"
                        value={formData.over_band}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="band"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Band
                      </label>
                      <input
                        type="text"
                        name="band"
                        id="band"
                        placeholder="Enter band details"
                        value={formData.band}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="button"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Button
                      </label>
                      <input
                        type="text"
                        name="button"
                        id="button"
                        placeholder="Enter button details"
                        value={formData.button}
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
