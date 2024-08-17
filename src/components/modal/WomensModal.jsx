import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox
} from '@nextui-org/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import FormField from '../FormField';

export default function WomensModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShirt, setIsShirt] = useState(false);
  const [isPant, setIsPant] = useState(false);
  const [isKurtha, setIsKurtha] = useState(false);

  // State for date fields
  const [trialDate, setTrialDate] = useState(null);
  const [bookingDate, setBookingDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);

  const handleOpen = () => {
    onOpen();
  };

  const handleShirtChange = () => {
    setIsShirt(!isShirt);
    setIsPant(false);
    setIsKurtha(false);
  };

  const handlePantChange = () => {
    setIsPant(!isPant);
    setIsShirt(false);
    setIsKurtha(false);
  };

  const handleKurthaChange = () => {
    setIsKurtha(!isKurtha);
    setIsShirt(false);
    setIsPant(false);
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 border-2 border-white text-white font-bold text-xs lg:text-sm uppercase rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95"
          type="button"
          onClick={handleOpen}
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
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="rounded-xl">
        <ModalContent className="bg-white text-black p-8 w-full max-w-5xl mx-auto h-4/5 overflow-auto shadow-lg">
          <ModalHeader className="text-xl font-semibold border-b pb-2">
            Measurement Details
          </ModalHeader>
          <ModalBody className="text-black">
            <div className="grid gap-6">
              <FormField label="Order Number" />
              <FormField label="Name" />
              <FormField label="Phone" />
              <FormField label="Mobile" />
              <FormField label="Salesperson" />
              <FormField label="Shirt Size (HS/FS)" />
              <FormField label="Cut Pieces" />
              <div>
                <label className="block text-sm font-medium">Trial Date</label>
                <DatePicker
                  selected={trialDate}
                  onChange={(date) => setTrialDate(date)}
                  dateFormat="yyyy/MM/dd"
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Booking Date</label>
                <DatePicker
                  selected={bookingDate}
                  onChange={(date) => setBookingDate(date)}
                  dateFormat="yyyy/MM/dd"
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Delivery Date</label>
                <DatePicker
                  selected={deliveryDate}
                  onChange={(date) => setDeliveryDate(date)}
                  dateFormat="yyyy/MM/dd"
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <FormField label="Delivery Address" />
              <FormField label="Measurement Master" />
              <FormField label="Pant Bill Invoice Number" />
              <FormField label="Cut Image" />
              <FormField label="Payment" />

              <div className="flex gap-4">
                <Checkbox
                  isChecked={isShirt}
                  onChange={handleShirtChange}
                  color="primary"
                >
                  Shirt
                </Checkbox>
                <Checkbox
                  isChecked={isPant}
                  onChange={handlePantChange}
                  color="primary"
                >
                  Pant
                </Checkbox>
                <Checkbox
                  isChecked={isKurtha}
                  onChange={handleKurthaChange}
                  color="primary"
                >
                  Kurtha
                </Checkbox>
              </div>

              {isShirt && (
                <div className="grid gap-6 mt-4">
                  <FormField label="Bust" />
                  <FormField label="Waist" />
                  <FormField label="Hip" />
                  <FormField label="Shoulder Width" />
                  <FormField label="Sleeve Length" />
                  <FormField label="Shirt Length" />
                  <FormField label="Neck Width" />
                  <FormField label="Neck Depth" />
                  <FormField label="Collar Type" type="select" options={[
                    { value: 'type1', label: 'Type 1' },
                    { value: 'type2', label: 'Type 2' }
                  ]} />
                  <FormField label="Pocket" type="select" options={[
                    { value: 'pocket1', label: 'Pocket 1' },
                    { value: 'pocket2', label: 'Pocket 2' }
                  ]} />
                  <FormField label="Note" type="textarea" />
                </div>
              )}

              {isPant && (
                <div className="grid gap-6 mt-4">
                  <FormField label="Waist" />
                  <FormField label="Hip" />
                  <FormField label="Inseam" />
                  <FormField label="Thigh" />
                  <FormField label="Knee" />
                  <FormField label="Bottom Opening" />
                  <FormField label="Front Rise" />
                  <FormField label="Back Rise" />
                  <FormField label="Crotch Depth" />
                  <FormField label="Note" type="textarea" />
                </div>
              )}

              {isKurtha && (
                <div className="grid gap-6 mt-4">
                  <FormField label="Bust" />
                  <FormField label="Waist" />
                  <FormField label="Hip" />
                  <FormField label="Shoulder Width" />
                  <FormField label="Sleeve Length" />
                  <FormField label="Kurtha Length" />
                  <FormField label="Neck Width" />
                  <FormField label="Neck Depth" />
                  <FormField label="Collar Type" type="select" options={[
                    { value: 'type1', label: 'Type 1' },
                    { value: 'type2', label: 'Type 2' }
                  ]} />
                  <FormField label="Pocket" type="select" options={[
                    { value: 'pocket1', label: 'Pocket 1' },
                    { value: 'pocket2', label: 'Pocket 2' }
                  ]} />
                  <FormField label="Note" type="textarea" />
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter className="flex justify-end gap-4">
            <Button color="danger" variant="flat" onPress={onClose} className="px-6 py-2 rounded-lg shadow-md hover:bg-red-100">
              Close
            </Button>
            <Button color="primary" onPress={onClose} className="px-6 py-2 rounded-lg shadow-md hover:bg-blue-100">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
