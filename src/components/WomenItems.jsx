import React from "react";

function WomenItems({ handleChange, formData }) {
  return (
    <div className="grid lg:grid-cols-3 gap-6 mt-6">
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
          onChange={handleChange}
          value={formData.total}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
        />
      </div>
    </div>
  );
}

export default WomenItems;
