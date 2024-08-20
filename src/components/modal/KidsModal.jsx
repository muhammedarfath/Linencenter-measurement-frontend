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
