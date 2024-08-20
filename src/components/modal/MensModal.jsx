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

export default function MensModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHalfSleeve, setIsHalfSleeve] = useState(false);
  const [isFullSleeve, setIsFullSleeve] = useState(false);
  const [isTrial, setIsTrial] = useState(false);
  const [isShirt, setIsShirt] = useState(false);
  const [isPant, setIsPant] = useState(false);

  const handleSleeveChange = (e) => {
    const { name, checked } = e.target;
    if (name === "halfSleeve") {
      setIsHalfSleeve(checked);
    } else if (name === "fullSleeve") {
      setIsFullSleeve(checked);
    }
  };

  const handleTrialChange = (e) => {
    setIsTrial(e.target.checked);
  };

  const handleMaterialChange = (e) => {
    const { name, checked } = e.target;
    if (name === "shirt") {
      setIsShirt(checked);
    } else if (name === "pant") {
      setIsPant(checked);
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
        className="bg-white text-black max-w-5xl mx-auto h-4/5 overflow-auto"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Men's Measurement Details
          </ModalHeader>
          <ModalBody>
            <div className="p-12">
              <div className="w-full flex max-w-[900px] bg-white">
                <form>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="mb-5">
                      <label
                        htmlFor="orderNumber"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Order Number
                      </label>
                      <input
                        type="text"
                        name="orderNumber"
                        id="orderNumber"
                        placeholder="Order Number"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="salesPerson"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Sales Person
                      </label>
                      <input
                        type="text"
                        name="salesPerson"
                        id="salesPerson"
                        placeholder="Sales Person"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="col-span-3 mb-5">
                      <label className="block text-base font-medium text-[#07074D]">
                        Shirt Sleeves
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="halfSleeve"
                            onChange={handleSleeveChange}
                            className="mr-2"
                          />
                          Half Sleeve
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="fullSleeve"
                            onChange={handleSleeveChange}
                            className="mr-2"
                          />
                          Full Sleeve
                        </label>
                      </div>
                      {isHalfSleeve && (
                        <div className="mt-3">
                          <label className="block text-base font-medium text-[#07074D]">
                            Half Sleeve Measurement
                          </label>
                          <input
                            type="text"
                            name="halfSleeveMeasurement"
                            placeholder="Enter Half Sleeve Measurement"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      )}
                      {isFullSleeve && (
                        <div className="mt-3">
                          <label className="block text-base font-medium text-[#07074D]">
                            Full Sleeve Measurement
                          </label>
                          <input
                            type="text"
                            name="fullSleeveMeasurement"
                            placeholder="Enter Full Sleeve Measurement"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      )}
                    </div>

                    <div className="col-span-3 mb-5">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="trial"
                          onChange={handleTrialChange}
                          className="mr-2"
                        />
                        Cut Pieces Trial
                      </label>
                      {isTrial && (
                        <div className="mt-3">
                          <div className="mb-5">
                            <label
                              htmlFor="trialDate"
                              className="block text-base font-medium text-[#07074D]"
                            >
                              Trial Date
                            </label>
                            <input
                              type="date"
                              name="trialDate"
                              id="trialDate"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="mb-5">
                            <label
                              htmlFor="trialRemarks"
                              className="block text-base font-medium text-[#07074D]"
                            >
                              Trial Remarks
                            </label>
                            <textarea
                              name="trialRemarks"
                              id="trialRemarks"
                              placeholder="Enter Trial Remarks"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="col-span-3 mb-5">
                      <label
                        htmlFor="bookingDate"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Booking Date
                      </label>
                      <input
                        type="date"
                        name="bookingDate"
                        id="bookingDate"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button auto flat color="error" onClick={onClose}>
              Close
            </Button>
            <Button auto onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
