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
import FormField from '../FormField';

export default function KidsModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShirt, setIsShirt] = useState(false);
  const [isPant, setIsPant] = useState(false);
  const [isKurtha, setIsKurtha] = useState(false);

  const handleOpen = () => {
    onOpen();
  };

  const handleShirtChange = () => {
    setIsShirt(!isShirt);
    setIsPant(false); 
  };

  const handlePantChange = () => {
    setIsPant(!isPant);
    setIsShirt(false); 
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
              <FormField label="Trial Date" />
              <FormField label="Delivery Address" />
              <FormField label="Booking Date" />
              <FormField label="Delivery Date" />
              <FormField label="Style List" />
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
                  onChange={() => setIsKurtha(!isKurtha)}
                  color="primary"
                >
                  Kurtha
                </Checkbox>
              </div>

              {isShirt && (
                <div className="grid gap-6 mt-4">
                  <FormField label="Length" />
                  <FormField label="Shoulder" />
                  <FormField label="Full Sleeve" />
                  <FormField label="Half Sleeve" />
                  <FormField label="HS BTM LOOSE" />
                  <FormField label="Chest" />
                  <FormField label="Stomach" />
                  <FormField label="Seat" />
                  <FormField label="Body Loose A" />
                  <FormField label="Body Loose B" />
                  <FormField label="Body Loose C" />
                  <FormField label="Neck" />
                  <FormField label="Collar Type" type="select" options={[
                    { value: 'type1', label: 'Type 1' },
                    { value: 'type2', label: 'Type 2' }
                  ]} />
                  <FormField label="Pocket" type="select" options={[
                    { value: 'pocket1', label: 'Pocket 1' },
                    { value: 'pocket2', label: 'Pocket 2' }
                  ]} />
                  <FormField label="Reverse Cut Way" />
                  <FormField label="Bottom" />
                  <FormField label="Line Cut" />
                  <FormField label="Straight Cut" />
                  <FormField label="Slit" />
                  <FormField label="Linen Pady" />
                  <FormField label="LP Pady" />
                  <FormField label="Cuff" />
                  {isKurtha && <FormField label="Kurtha Length" />}
                  <FormField label="Note" type="textarea" />
                </div>
              )}

              {isPant && (
                <div className="grid gap-6 mt-4">
                  <FormField label="Full Length" />
                  <FormField label="Bottom" />
                  <FormField label="Waist" />
                  <FormField label="Seat" />
                  <FormField label="Loose" />
                  <FormField label="Inside" />
                  <FormField label="Middle" />
                  <FormField label="Fork" />
                  <div className="flex flex-wrap gap-4">
                    <Checkbox> No Pleat </Checkbox>
                    <Checkbox> 2 Pleat </Checkbox>
                    <Checkbox> Cross Pocket </Checkbox>
                    <Checkbox> Hook </Checkbox>
                    <Checkbox> Side Pocket </Checkbox>
                    <Checkbox> Back Pocket 1 </Checkbox>
                    <Checkbox> Back Pocket 2 </Checkbox>
                    <Checkbox> CU / Band </Checkbox>
                    <Checkbox> Over Band </Checkbox>
                    <Checkbox> Band </Checkbox>
                    <Checkbox> Button </Checkbox>
                  </div>
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
