import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function EditDetailModal({
  currentOrder,
  handleEditSubmit,
  setCurrentOrder,
  isOpen,
  onClose,
}) {
  if (!currentOrder) {
    return null; 
  }

  const renderFields = (obj, parentKey = "") => {
    return Object.keys(obj).map((key) => {
      if (key === "id") return null; // Skip rendering the 'id' field

      const value = obj[key];
      const compositeKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === "object" && value !== null) {
        return (
          <div className="mb-4" key={compositeKey}>
            <label className="block text-gray-800 font-medium capitalize mb-1">
              {key.replace(/_/g, " ")}
            </label>
            <div className="ml-4">{renderFields(value, compositeKey)}</div>
          </div>
        );
      } else {
        return (
          <div className="mb-4" key={compositeKey}>
            <label className="block text-gray-800 font-medium capitalize mb-1">
              {key.replace(/_/g, " ")}
            </label>
            <input
              type="text"
              value={value || ""}
              onChange={(e) => {
                const keys = compositeKey.split(".");
                let updatedOrder = { ...currentOrder };
                let tempObj = updatedOrder;

                keys.forEach((k, i) => {
                  if (i === keys.length - 1) {
                    tempObj[k] = e.target.value;
                  } else {
                    tempObj = tempObj[k];
                  }
                });

                setCurrentOrder(updatedOrder);
              }}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
        );
      }
    });
  };

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        className="rounded-xl"
      >
        <ModalContent className="bg-white text-black p-8 w-full max-w-5xl mx-auto h-4/5 overflow-auto shadow-lg rounded-lg">
          <ModalHeader className="text-xl font-semibold border-b pb-2">
            Edit Modal
          </ModalHeader>
          <ModalBody className="text-black">
            <form onSubmit={handleEditSubmit}>
              {renderFields(currentOrder)}
              <div className="flex justify-end mt-4">
                <Button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
